import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np 
import os
from pymongo import MongoClient
from datetime import datetime, timezone

# Load the pre-trained model
model = load_model('/home/plant-detection/Image_classify.keras')

# Define the categories
data_category = [
    'Healthy_tomato',
    'Early_blight_tomato',
    'Powdery_mildew_tomato',
    'Yellow_leaf_curl_virus_tomato'
]

img_height = 180
img_width = 180

# Supported image file extensions
supported_extensions = {'.png', '.jpg', '.jpeg'}
images_directory = 'images'

# Initialize lists to store results
images_files = []
plant_status = []
status_accuracy = []

# MongoDB connection
connection_string = "mongodb+srv://sachindumalshan:Malshan123@iotcluster.6rmyakh.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(connection_string)
db = client['sensor_data']

try:
    db.create_collection("plant_status", timeseries={"timeField": "timestamp"})
except Exception as e:
    print(f"Collection already exists or an error occurred: {e}")

collection6 = db['plant_status']
status_file_path = '/home/plant-detection/ImagesAnlz.txt'

# Process each image in the directory
for filename in os.listdir(images_directory):
    if any(filename.lower().endswith(ext) for ext in supported_extensions):
        filepath = os.path.join(images_directory, filename)

        # Load and preprocess the image
        image_load = tf.keras.utils.load_img(filepath, target_size=(img_height, img_width))
        img_arr = tf.keras.utils.img_to_array(image_load)
        img_bat = tf.expand_dims(img_arr, 0)

        # Predict the class of the image
        predict = model.predict(img_bat)
        score = tf.nn.softmax(predict[0])

        # Determine the plant status based on the predicted category
        category_class = data_category[np.argmax(score)]
        status = ""
        if category_class == 'Healthy_tomato':
            status = 'Healthy'
        elif category_class == 'Early_blight_tomato':
            status = 'Early Blight'
        elif category_class == 'Powdery_mildew_tomato':
            status = 'Powder Mildew'
        elif category_class == 'Yellow_leaf_curl_virus_tomato':
            status = 'Yellow leaf curl virus'

        # Store the results
        images_files.append(filename)
        plant_status.append(status)
        status_accuracy.append(f"{np.max(score) * 100:.2f}%")

# Print the formatted output, write to file, and upload to MongoDB
with open("ImagesAnlz.txt", "w") as file:
    for i in range(len(images_files)):
        output = f"P{i+1}|Status:{plant_status[i]}|{status_accuracy[i]}"
        print(output)
        file.write(output + "\n")
        

# Clear the images from the folder after processing
for filename in images_files:
    filepath = os.path.join(images_directory, filename)
    os.remove(filepath)
    print(f"Deleted {filename} from {images_directory}")

print("Data upload and cleanup completed.")

# Function to read data from a file and insert into a specified time series collection
def insert_data(file_path, collection):
    with open(file_path, 'r') as file:
        lines = file.readlines()
    
    if not lines:  # Check if the file is empty
        lines = [default_values[file_path]]  # Use the predefined default value
    
    data = [{
        'timestamp': datetime.now(),  # Ensure timestamp is in UTC
        'data': line.strip()
    } for line in lines]  # Prepare data for insertion
    
    collection.insert_many(data)
    print(f"Data from {file_path} inserted successfully!")
    clean_file(file_path)  # Clean the file after uploading


# Function to clean the content of the file after uploading the data
def clean_file(file_path):
    open(file_path, 'w').close()
    print(f"File {file_path} cleaned successfully!")

# Insert data from each file into the respective time series collection
insert_data(status_file_path, collection6)

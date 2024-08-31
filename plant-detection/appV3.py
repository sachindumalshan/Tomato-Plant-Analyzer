import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np 
import os

# Load the pre-trained model
model = load_model('C:\\Users\\sachm\\Desktop\\Tomato-Plant-Analyzer\\plant-detection\\Image_classify.keras')

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

# Print the formatted output and write to file
with open("ImagesAnlz.txt", "w") as file:
    for i in range(len(images_files)):
        output = f"P{i+1}|Status:{plant_status[i]}|{status_accuracy[i]}"
        print(output)
        file.write(output + "\n")

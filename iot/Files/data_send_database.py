import os
from pymongo import MongoClient, errors
import gridfs

# MongoDB Atlas connection string
MONGO_URI = 'mongodb+srv://sachindumalshan:Malshan123@cluster0.mongodb.net/sensor_data?retryWrites=true&w=majority'

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client['sensor_data']  # Replace 'sensor_data' with your actual database name
fs = gridfs.GridFS(db)

# Path to the folder containing images
image_folder = '/home/raspberry/Desktop/iot/capture_data/leaves_images'

# Path to the text file containing ultrasonic sensor values
sensor_file_path = '/home/raspberry/Desktop/iot/capture_data/height.txt'

# Function to save images to MongoDB
def save_images_to_mongodb(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith('.jpg') or filename.endswith('.png'):  # Adjust according to your image formats
            with open(os.path.join(folder_path, filename), 'rb') as image_file:
                fs.put(image_file, filename=filename)
            print(f"Uploaded {filename}")

# Function to save sensor values to MongoDB
def save_sensor_values_to_mongodb(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            value = line.strip()
            db.sensor_values.insert_one({'value': value})
            print(f"Uploaded sensor value: {value}")

# Main function to upload data
def upload_data():
    save_images_to_mongodb(image_folder)
    save_sensor_values_to_mongodb(sensor_file_path)

if __name__ == "__main__":
    upload_data()

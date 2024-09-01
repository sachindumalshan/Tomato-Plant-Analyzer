from pymongo import MongoClient
from datetime import datetime
import os
import base64
import paramiko

# Replace <password> with your MongoDB Atlas password
connection_string = "mongodb+srv://sachindumalshan:Malshan123@iotcluster.6rmyakh.mongodb.net/?retryWrites=true&w=majority"

# Establish a connection to the database
client = MongoClient(connection_string)

# Select your database
db = client['sensor_data']

# Create time series collections with proper settings if not already created
try:
    db.create_collection("plant_height", timeseries={"timeField": "timestamp"})
    db.create_collection("plant_area", timeseries={"timeField": "timestamp"})
    db.create_collection("plant_images", timeseries={"timeField": "timestamp"})
except Exception as e:
    print(f"Collection already exists or an error occurred: {e}")

# Collections for time series data
collection1 = db['plant_height']
collection2 = db['plant_area']
collection5 = db['plant_images']

# Define file paths
height_file_path = '/home/raspberry/Desktop/iot/capture_data/height.txt'
area_file_path = '/home/raspberry/Desktop/iot/capture_data/area.txt'
image_folder_path = '/home/raspberry/Desktop/iot/capture_data/leaves_images'
azure_image_folder_path = '/home/plant-detection/images/'  # Azure VM directory

# Predefined default values for empty files
default_values = {
    height_file_path: "No height readings!",
    area_file_path: "No area readings!",
}

# Function to read data from a file and insert into a specified time series collection
def insert_data(file_path, collection):
    with open(file_path, 'r') as file:
        lines = file.readlines()
    
    if not lines:  # Check if the file is empty
        lines = [default_values[file_path]]  # Use the predefined default value
    
    data = [{
        'timestamp': datetime.now(),
        'data': line.strip()
    } for line in lines]  # Prepare data for insertion
    
    collection.insert_many(data)
    print(f"Data from {file_path} inserted successfully!")
    clean_file(file_path)  # Clean the file after uploading

# Function to upload images to a time series collection with timestamps
def upload_images(folder_path, collection):
    for filename in os.listdir(folder_path):
        if filename.endswith(('.png', '.jpg', '.jpeg')):  # Check for image file extensions
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'rb') as image_file:
                encoded_string = base64.b64encode(image_file.read()).decode('utf-8')  # Encode image as base64
                collection.insert_one({
                    'timestamp': datetime.now(),
                    'filename': filename,
                    'image_data': encoded_string
                })
    print("Images successfully uploaded to MongoDB!")
    upload_to_azure_vm(folder_path)  # Upload images to Azure VM

# Function to upload images to Azure VM
def upload_to_azure_vm(folder_path):
    # Azure VM details
    azure_vm_ip = '52.230.96.184'
    azure_vm_username = 'iotresearch'
    azure_vm_password = 'QCoeeXbZlFCg7zNtkw5hpA'

    # Create an SSH client
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(azure_vm_ip, username=azure_vm_username, password=azure_vm_password)

    sftp = ssh.open_sftp()

    for filename in os.listdir(folder_path):
        if filename.endswith(('.png', '.jpg', '.jpeg')):  # Check for image file extensions
            local_file_path = os.path.join(folder_path, filename)
            remote_file_path = os.path.join(azure_image_folder_path, filename)
            sftp.put(local_file_path, remote_file_path)  # Upload the file

    sftp.close()
    ssh.close()
    print("Images successfully uploaded to Azure VM!")

# Function to clean the content of the file after uploading the data
def clean_file(file_path):
    open(file_path, 'w').close()
    print(f"File {file_path} cleaned successfully!")

# Insert data from each file into the respective time series collection
insert_data(height_file_path, collection1)
insert_data(area_file_path, collection2)

# Upload images to the plant_images collection and then to Azure VM
upload_images(image_folder_path, collection5)
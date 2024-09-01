from pymongo import MongoClient
from datetime import datetime, timezone
import os
import base64

# Replace <password> with your MongoDB Atlas password
connection_string = "mongodb+srv://sachindumalshan:Malshan123@iotcluster.6rmyakh.mongodb.net/?retryWrites=true&w=majority"

# Establish a connection to the database
client = MongoClient(connection_string)

# Select your database
db = client['sensor_data']  # Replace with your actual database name

# Create time series collections with proper settings if not already created
try:
    db.create_collection("plant_soil", timeseries={"timeField": "timestamp"})
    db.create_collection("plant_temp", timeseries={"timeField": "timestamp"})
except Exception as e:
    print(f"Collection already exists or an error occurred: {e}")

# Collections for time series data
collection3 = db['plant_soil']
collection4 = db['plant_temp']

# Define file paths
soil_file_path = '/home/raspberry/Desktop/iot/capture_data/soil.txt'
temp_file_path = '/home/raspberry/Desktop/iot/capture_data/temp.txt'

# Predefined default values for empty files
default_values = {
    soil_file_path: "No soil readings!!!",
    temp_file_path: "No temperature and humidity readings!!!"
}

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
insert_data(soil_file_path, collection3)
insert_data(temp_file_path, collection4)

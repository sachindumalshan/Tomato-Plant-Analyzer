import Adafruit_DHT
import time
import os

# Set sensor type and the GPIO pin to which it is connected
sensor = Adafruit_DHT.DHT11
pin = 26  # GPIO Pin number

# Define the file location
sensor_directory = "/home/raspberry/Desktop/iot/capture_data"
temp_file = os.path.join(sensor_directory, "temp.txt")

def read_dht11():
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    if humidity is not None and temperature is not None:
        formatted_data = f"T-{temperature:.1f}|H-{humidity:.1f}"
        print(formatted_data)
        save_to_file(formatted_data)
    else:
        print("Failed to retrieve data from the DHT11 sensor")

def save_to_file(data):
    with open(temp_file, 'a') as file:
        file.write(data + '\n')
        print(f"Data saved to {temp_file}")

if __name__ == "__main__":
    read_dht11()
    time.sleep(5)

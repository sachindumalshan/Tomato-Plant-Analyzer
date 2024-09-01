import serial
import time

# Setup serial communication with the ESP32
ser = serial.Serial('/dev/ttyUSB0', 115200, timeout=1)  # Replace '/dev/ttyUSB0' with the correct port

def send_start_signal():
    # Send the start signal 'S' to the ESP32
    ser.write(b'S')
    print("Start signal sent to ESP32.")
    time.sleep(1)  # Wait for the ESP32 to process

def receive_sensor_data():
    # Read the sensor data from the ESP32
    sensor_data = ser.readline().decode('utf-8').strip()
    if sensor_data:
        print("Received sensor data: ", sensor_data)
        return [int(val) for val in sensor_data.split(',')]
    return None



send_start_signal()  # Automatically send the start signal
data = receive_sensor_data()
if data:
    print("Soil moisture readings: ", data)
time.sleep(2)  # Wait 5 seconds before sending the next start signal
# Call the function to read and print the sensor data


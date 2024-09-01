import serial
import time
import os
import serial.tools.list_ports

# Define the file location
sensor_directory = "/home/raspberry/Desktop/iot/capture_data"
soil_file = os.path.join(sensor_directory, "soil.txt")

# Function to detect the correct USB port
def detect_usb_port():
    ports = list(serial.tools.list_ports.comports())
    for port in ports:
        try:
            ser = serial.Serial(port.device, 115200, timeout=1)
            print(f"Connected to {port.device}")
            return ser
        except serial.SerialException as e:
            print(f"Failed to connect to {port.device}: {e}")
    return None

# Function to send the start signal
def send_start_signal(ser):
    ser.write(b'S')
    print("Start signal sent to ESP32.")
    time.sleep(1)

# Function to receive sensor data
def receive_sensor_data(ser):
    sensor_data = ser.readline().decode('utf-8').strip()
    if sensor_data:
        print("Received sensor data: ", sensor_data)
        return [int(val) for val in sensor_data.split(',')]
    else:
        print("Sensor data not received...retrying")
        read_esp32()

# Function to format the data
def format_data(data):
    return '\n'.join([f"P{i+1}|Soil:{val}" for i, val in enumerate(data)])

# Function to save the data to a file
def save_to_file(data):
    formatted_data = format_data(data)
    with open(soil_file, 'a') as file:
        file.write(formatted_data)
        print(f"Data saved to {soil_file}")

# Function to read data from the ESP32
def read_esp32():
    ser = None
    while ser is None:  # Loop until the USB port is found
        ser = detect_usb_port()
        if ser is None:
            print("ESP32 not detected. Retrying in 5 seconds...")
            time.sleep(5)

    while True:  # Loop until data is successfully received
        send_start_signal(ser)
        data = receive_sensor_data(ser)
        if data:
            save_to_file(data)
            break  # Exit loop once data is successfully received and saved

if __name__ == "__main__":
    read_esp32()
    time.sleep(5)
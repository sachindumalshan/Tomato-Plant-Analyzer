import serial
import time

# Configure the serial port and baud rate
ser = serial.Serial('/dev/ttyUSB0', 115200, timeout=1)  # Adjust the port as necessary

def read_sensor_data():
    try:
        while True:
            if ser.in_waiting > 0:
                line = ser.readline().decode('utf-8', errors='ignore').rstrip()
                if all(32 <= ord(char) <= 126 for char in line):  # Filter out non-printable characters
                    print(line)
                else:
                    print("Invalid data received")
            time.sleep(1)
    except KeyboardInterrupt:
        print("Exiting...")
    finally:
        ser.close()

if __name__ == "__main__":
    read_sensor_data()
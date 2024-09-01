import RPi.GPIO as GPIO
import time
import os
import cv2
import numpy as np
from numpy import imag
import random
from datetime import datetime

# Define GPIO pins for Motor 1 (Y-axis)
IN1_X = 17  # Physical Pin 11
IN2_X = 18  # Physical Pin 12
IN3_X = 27  # Physical Pin 13
IN4_X = 22  # Physical Pin 15

# Define GPIO pins for Motor 2 (X-axis)
IN1_Y = 5   # Physical Pin 29
IN2_Y = 6   # Physical Pin 31
IN3_Y = 13  # Physical Pin 33
IN4_Y = 19  # Physical Pin 35

# Define GPIO pins for Ultrasonic Sensor
TRIG = 23  # Physical Pin 16
ECHO = 24  # Physical Pin 18

# Set up GPIO mode
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# Set up GPIO pins for both motors
motor_pins_x = [IN1_X, IN2_X, IN3_X, IN4_X]
motor_pins_y = [IN1_Y, IN2_Y, IN3_Y, IN4_Y]

for pin in motor_pins_x + motor_pins_y:
    GPIO.setup(pin, GPIO.OUT)
    GPIO.output(pin, 0)

# Set up GPIO pins for ultrasonic sensor
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

# Define the sequence for the stepper motor
step_sequence = [
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 1]
]

# Function to perform one step
def step_motor(motor_pins, step):
    for pin in range(4):
        GPIO.output(motor_pins[pin], step_sequence[step][pin])

# Function to rotate the motor
def rotate_motor(motor_pins, steps, delay, direction='forward'):
    if direction == 'forward':
        step_range = range(8)
    else:  # reverse
        step_range = reversed(range(8))
    
    if steps > 0:
        for _ in range(steps):
            for step in step_range:
                step_motor(motor_pins, step)
                time.sleep(delay)
    else:
        for _ in range(-steps):
            for step in reversed(step_range):
                step_motor(motor_pins, step)
                time.sleep(delay)

# Convert coordinates to steps (assuming 1 unit = 8000 steps for simplicity)
def coordinates_to_steps(x, y):
    return x * 8000, y * 7800

def rotate_motor_reverse(motor_pins, delay):
    for _ in range(16000):  # Adjust the number of steps for one full rotation if needed
        for step in reversed(range(8)):
            step_motor(motor_pins, step)
            time.sleep(delay)


def capture_image_from_webcam(save_directory):
    # Check if the directory exists, if not, create it
    if not os.path.exists(save_directory):
        os.makedirs(save_directory)
    
    # Initialize the webcam (0 is the default camera)
    cap = cv2.VideoCapture(-1)
    
    if not cap.isOpened():
        print("Error: Could not open webcam.")
        return
    
    # Capture a frame
    ret, frame = cap.read()
    
    if ret:
        # Construct the file path
        file_path = os.path.join(save_directory, f"image_{(y-1) * 3 + x}.jpg")
        
        # Save the captured frame as an image file
        cv2.imwrite(file_path, frame)
        print(f"Image captured and saved as '{file_path}'")
    else:
        print("Error: Could not read frame from webcam.")
    
    # Release the webcam
    cap.release()
    cv2.destroyAllWindows()

def get_available_camera():
    for port in range(-1,100,1):  # Check the first 10 camera ports
        cap = cv2.VideoCapture(port)
        if cap.isOpened():
            cap.release()  # Release the camera port
            return port
    return None

def get_area():
    frameWidth = 640
    frameHeight = 480
    all_area_values = []

    cam_port = get_available_camera()
    if cam_port is None:
        print("Error: No available camera found.")
        return None

    cap = cv2.VideoCapture(cam_port)
    cap.set(3, frameWidth)
    cap.set(4, frameHeight)

    def getContours(img, imgContour, interval):
        contours, hierarchy = cv2.findContours(img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        area = 0

        for cnt in contours:
            area = cv2.contourArea(cnt)
            if area > 1000:
                cv2.drawContours(imgContour, cnt, -1, (255, 0, 255), 4)
                peri = cv2.arcLength(cnt, True)
                approx = cv2.approxPolyDP(cnt, 0.02 * peri, True)
                x, y, w, h = cv2.boundingRect(approx)
                cv2.rectangle(imgContour, (x, y), (x + w, y + h), (0, 255, 0), 5)
                cv2.putText(imgContour, "Area: " + str(float(area)), (x + w + 20, y + 45), cv2.FONT_HERSHEY_COMPLEX,
                            0.7, (0, 255, 0), 2)
                time.sleep(interval)
        return float(area)

    while True:
        if not cap.isOpened():
            print("Warning: Camera is not opened.")
            break

        success, img = cap.read()

        if not success or img is None:
            print("Warning: Failed to capture image. Attempting to reconnect...")
            cap.release()

            new_port = get_available_camera()
            if new_port is not None:
                cap = cv2.VideoCapture(new_port)
                if cap.isOpened():
                    print(f"Reconnected to camera port {new_port}.")
                    cap.set(3, frameWidth)
                    cap.set(4, frameHeight)
                else:
                    print("Error: Failed to reconnect to the camera.")
                    return None
            else:
                print("Error: No available camera found.")
                return None
            continue  # Skip processing this iteration

        if img is not None:
            try:
                imgContour = img.copy()
            except AttributeError as e:
                print(f"Error copying image: {e}")
                continue  # Skip processing if copying the image fails

            imgBlur = cv2.GaussianBlur(img, (7, 7), 1)
            imgGray = cv2.cvtColor(imgBlur, cv2.COLOR_BGR2GRAY)
            imgCanny = cv2.Canny(imgGray, 50, 150)
            kernel = np.ones((5, 5))
            imgDil = cv2.dilate(imgCanny, kernel, iterations=1)

            area_values = getContours(imgDil, imgContour, 1)
            all_area_values.append(area_values)

            if len(all_area_values) == 10:
                print(all_area_values)
                avg_area = sum(all_area_values) / len(all_area_values)
                print(f'Average surface area of plant: {avg_area}')
                break

    cap.release()
    return avg_area

# Capture image using fswebcam
#def capture_image(image_path):
#    os.system(f'fswebcam -r 1280x720 --no-banner {image_path}')

# Measure distance using ultrasonic sensor
def measure_distance():
    GPIO.output(TRIG, False)
    time.sleep(2)
    
    GPIO.output(TRIG, True)
    time.sleep(0.00001)
    GPIO.output(TRIG, False)
    
    while GPIO.input(ECHO) == 0:
        pulse_start = time.time()
    
    while GPIO.input(ECHO) == 1:
        pulse_end = time.time()
    
    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150
    distance = round(distance, 2)
    
    return distance

# Main program logic
try:
    current_x, current_y = 1, 1
    # Directory to save images
    #save_directory = '/home/pi/captured_images'  # Adjust this path as needed
    
    save_directory = "/home/raspberry/Desktop/iot/capture_data/leaves_images"
    sensor_directory = "/home/raspberry/Desktop/iot/capture_data"
    os.makedirs(save_directory, exist_ok=True)
    
    height_file = os.path.join(sensor_directory, "height.txt")
    area_file = os.path.join(sensor_directory, "area.txt")
    
    i=1
    # Move to points and capture images
    for y in range(1, 4):  # Rows 1, 2, 3
        for x in range(1, 4):  # Columns 1, 2, 3
            point = [x, y]
            print(f"Moving to point: {point}")
            
            # Determine the steps needed for x and y movement
            x_steps, y_steps = coordinates_to_steps(x - current_x, y - current_y)
            
            # Rotate X-axis
            rotate_motor(motor_pins_x, x_steps, 0.001)
            current_x = x
            
            # Rotate Y-axis
            rotate_motor(motor_pins_y, y_steps, 0.001)
            current_y = y
            
            print(f"At point: {point}, capturing image")
            #image_path = os.path.join(save_directory, f"image_{(y-1) * 3 + x}.jpg")
            capture_image_from_webcam(save_directory)
            newarea = get_area()
            #print(f"area value : {newarea}")
            with open(area_file, 'a') as file:
                file.write(f"P{i}|Area:{newarea}\n")
            print(f"Area saved to file: {newarea} cm*cm")
            #capture_image(image_path)
            #print(f"Image saved to: {image_path}")
            distance = measure_distance()
            height = distance  # x-distances
            with open(height_file, 'a') as file:
                file.write(f"P{i}|Height:{height}\n")
            print(f"Height saved to file: {height} cm")
            i=i+1
            time.sleep(10)

    # Move back to the starting point (1, 1)
    print("Returning to the starting point (1, 1)")

    # Move X-axis back to 1
    rotate_motor_reverse(motor_pins_x, 0.001)
    # Move Y-axis back to 1
    rotate_motor_reverse(motor_pins_y, 0.001)

    print("Returned to the starting point (1, 1)")

except KeyboardInterrupt:
    print("Program stopped by user")

finally:
    GPIO.cleanup()

import RPi.GPIO as GPIO
import time
import os

# Define GPIO pins for Motor 1 (X-axis)
IN1_X = 17  # Physical Pin 11
IN2_X = 18  # Physical Pin 12
IN3_X = 27  # Physical Pin 13
IN4_X = 22  # Physical Pin 15

# Define GPIO pins for Motor 2 (Y-axis)
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
def rotate_motor(motor_pins, steps, delay):
    if steps > 0:
        for _ in range(steps):
            for step in range(8):
                step_motor(motor_pins, step)
                time.sleep(delay)
    else:
        for _ in range(-steps):
            for step in reversed(range(8)):
                step_motor(motor_pins, step)
                time.sleep(delay)

# Convert coordinates to steps (assuming 1 unit = 8000 steps for simplicity)
def coordinates_to_steps(x, y):
    return x * 8000, y * 8000

# Capture image using fswebcam
def capture_image(image_path):
    #os.system(f'fswebcam -r 1280x720 --no-banner {image_path}')
    pass

# Measure distance using ultrasonic sensor
def measure_distance():
    GPIO.output(TRIG, False)
    time.sleep(0.2)
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

# Points to visit on the square plane based on the new point map
points = [
    [1, 1], [2, 1], [3, 1],  # [1, 2, 3]
    [1, 2], [2, 2], [3, 2],  # [4, 5, 6]
    [1, 3], [2, 3], [3, 3]   # [7, 8, 9]
]

# Directory to save images
image_directory = "/home/raspberry/Desktop/iot/capture_data/leaves_images"
os.makedirs(image_directory, exist_ok=True)

# File to save height data
height_file = os.path.join(image_directory, "heights.txt")

# Main program to control the motors
try:
    with open(height_file, 'w') as file:
        current_x, current_y = 1, 1  # Starting at point 1 (1, 1)

        # Move along the X-axis first
        for x in range(1, 4):  # Points 1, 2, 3
            point = [x, 1]
            print(f"Moving to point: {point}")

            # Determine the steps needed for x movement
            x_steps, _ = coordinates_to_steps(x - current_x, 0)

            # Rotate X-axis
            rotate_motor(motor_pins_x, x_steps, 0.001)

            # Update current position
            current_x = x

            print(f"At point: {point}, capturing image")
            image_path = os.path.join(image_directory, f"image_{(x-1) * 3 + 1}.jpg")
            capture_image(image_path)
            print(f"Image saved to: {image_path}")
            distance = measure_distance()
            height = distance # x-distances
            file.write(f"Point: {point}, Distance: {distance} cm, Height: {height} cm\n")
            print(f"Height saved to file: {height} cm")
            time.sleep(10)

        # Move Y-axis and repeat for the next rows
        for y in range(2, 4):  # Rows 2 and 3
            point = [3, y]
            print(f"Moving to point: {point}")

            # Determine the steps needed for y movement
            _, y_steps = coordinates_to_steps(0, y - current_y)

            # Rotate Y-axis
            rotate_motor(motor_pins_y, y_steps, 0.001)

            # Update current position
            current_y = y

            for x in range(1, 4):
                point = [x, y]
                print(f"Moving to point: {point}")

                # Determine the steps needed for x movement
                x_steps, _ = coordinates_to_steps(x - current_x, 0)

                # Rotate X-axis
                rotate_motor(motor_pins_x, x_steps, 0.001)

                # Update current position
                current_x = x

                print(f"At point: {point}, capturing image")
                image_path = os.path.join(image_directory, f"image_{(y-1) * 3 + x}.jpg")
                capture_image(image_path)
                print(f"Image saved to: {image_path}")
                distance = measure_distance()
                height = distance # x-distances
                file.write(f"Point: {point}, Distance: {distance} cm, Height: {height} cm\n")
                print(f"Height saved to file: {height} cm")
                time.sleep(10)

        # Move back to the starting point (1, 1)
        print("Returning to the starting point (1, 1)")

        # Move Y-axis back to 1
        y_steps_back, _ = coordinates_to_steps(0, 1 - current_y)
        rotate_motor(motor_pins_y, y_steps_back, 0.001)

        # Move X-axis back to 1
        _, x_steps_back = coordinates_to_steps(1 - current_x, 0)
        rotate_motor(motor_pins_x, x_steps_back, 0.001)

        print("Returned to the starting point (1, 1)")

except KeyboardInterrupt:
    print("Program stopped by user")

finally:
    GPIO.cleanup()

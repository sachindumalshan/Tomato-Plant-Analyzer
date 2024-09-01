import RPi.GPIO as GPIO
import time

# Define GPIO pins for Motor 1 (X-axis)
IN1_X = 5
IN2_X = 6
IN3_X = 13
IN4_X = 19

# Define GPIO pins for Motor 2 (Y-axis)
IN1_Y = 17
IN2_Y = 18
IN3_Y = 27
IN4_Y = 22

# Set up GPIO mode
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# Set up GPIO pins for both motors
motor_pins_x = [IN1_X, IN2_X, IN3_X, IN4_X]
motor_pins_y = [IN1_Y, IN2_Y, IN3_Y, IN4_Y]

for pin in motor_pins_x + motor_pins_y:
    GPIO.setup(pin, GPIO.OUT)
    GPIO.output(pin, 0)

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

# Convert coordinates to steps (assuming 1 unit = 512 steps for simplicity)
def coordinates_to_steps(x, y):
    return x * 512, y * 512

# Points to visit (excluding the starting point)
points = [
    [1, 1],
    [2, 1],
    [3, 1],
    [1, 2],
    [2, 2],
    [3, 2],
    [1, 3],
    [2, 3],
    [3, 3]
]

# Starting point (different from the points to visit)
start_point = [0, 0]

# Main program to control the motors
try:
    # Move to starting point
    x_steps, y_steps = coordinates_to_steps(start_point[0], start_point[1])
    print(f"Moving to starting point: {start_point}")
    rotate_motor(motor_pins_x, x_steps, 0.001)
    rotate_motor(motor_pins_y, y_steps, 0.001)
    
    for point in points:
        x, y = point
        print(f"Moving to point: {point}")
        x_steps, y_steps = coordinates_to_steps(x, y)
        rotate_motor(motor_pins_x, x_steps, 0.001)
        rotate_motor(motor_pins_y, y_steps, 0.001)
        print(f"At point: {point}, waiting for 60 seconds")
        time.sleep(5)
        
    # Return to the starting point
    print(f"Returning to starting point: {start_point}")
    x_steps, y_steps = coordinates_to_steps(-start_point[0], -start_point[1])
    rotate_motor(motor_pins_x, x_steps, 0.001)
    rotate_motor(motor_pins_y, y_steps, 0.001)

except KeyboardInterrupt:
    print("Program stopped by user")

finally:
    GPIO.cleanup()
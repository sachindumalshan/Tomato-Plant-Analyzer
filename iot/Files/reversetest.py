import RPi.GPIO as GPIO
import time

# Define GPIO pins for Motor 1 (X-axis)
IN1_Y = 5
IN2_Y = 6
IN3_Y = 13
IN4_Y = 19

IN1_X = 17
IN2_X = 18
IN3_X = 27
IN4_X = 22

# Set up GPIO mode
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# Set up GPIO pins for the motor
motor_pins_x_1 = [IN1_Y, IN2_Y, IN3_Y, IN4_Y]
motor_pins_x_2 = [IN1_X, IN2_X, IN3_X, IN4_X]

for pin in motor_pins_x_1 + motor_pins_x_2:
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

# Function to rotate the motor continuously and alternate directions
def rotate_motor_continuously(motor_pins, delay):
    for _ in range(500):  # Adjust the number of steps for one full rotation if needed
        for step in reversed(range(8)):
            step_motor(motor_pins, step)
            time.sleep(delay)

# Main program to control the motor
if __name__ == "__main__":
    # Rotate the first motor
    rotate_motor_continuously(motor_pins_x_1, 0.001)
    
    # Rotate the second motor (if needed, you can call this in sequence or parallel)
    rotate_motor_continuously(motor_pins_x_2, 0.001)

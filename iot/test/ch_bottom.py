import RPi.GPIO as GPIO
import time

#bottom = 15500

# Define GPIO pins for Motor 1 (X-axis)
IN1_X = 17
IN2_X = 18
IN3_X = 27
IN4_X = 22

# Set up GPIO mode
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# Set up GPIO pins for the motor
motor_pins_x = [IN1_X, IN2_X, IN3_X, IN4_X]

for pin in motor_pins_x:
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

# Function to rotate the motor with a specific number of steps
def rotate_motor(motor_pins, steps, delay):
    try:
        

        # Rotate backward
        for _ in range(steps):  # Rotate backward for the specified number of steps
            for step in reversed(range(8)):
                step_motor(motor_pins, step)
                time.sleep(delay)

    except KeyboardInterrupt:
        print("Program stopped by user")
    finally:
        GPIO.cleanup()

# Main program to control the motor
if __name__ == "__main__":
    try:
        steps = int(input("Enter the number of steps to rotate: "))
        rotate_motor(motor_pins_x, steps, 0.001)
    except ValueError:
        print("Invalid input. Please enter an integer.")

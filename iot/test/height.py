import RPi.GPIO as GPIO
import time

# GPIO pin setup
GPIO.setmode(GPIO.BCM)
TRIG = 23
ECHO = 24

# Set up TRIG and ECHO pins
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

def measure_distance():
    # Send a 10us pulse to TRIG
    GPIO.output(TRIG, False)
    time.sleep(2)  # Let the sensor settle
    GPIO.output(TRIG, True)
    time.sleep(0.00001)  # 10 microseconds pulse
    GPIO.output(TRIG, False)

    # Wait for ECHO pin to go high and then low
    while GPIO.input(ECHO) == 0:
        pulse_start = time.time()

    while GPIO.input(ECHO) == 1:
        pulse_end = time.time()

    # Calculate the distance based on the time of flight of the pulse
    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150  # Sound speed = 34300 cm/s; distance = time * speed / 2
    distance = round(distance, 2)
    distance = round(distance - 16,2)
    return distance

try:
    while True:
        height = measure_distance()
        print(f"Height: {height} cm")
        time.sleep(1)

except KeyboardInterrupt:
    print("Measurement stopped by user")
    GPIO.cleanup()

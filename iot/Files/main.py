import subprocess
import signal
import os
import serial
import time
#import motor_control2

def run_script(script_name):
    """Helper function to run a Python script."""
    process = subprocess.Popen(["python3", script_name])
    return process

def main():
    try:
        #print("Starting motor control...")
        # Run motor_control.py
        motor_process = run_script("motor_control_axis_with_camera.py")
        motor_process.wait()
        if motor_process.returncode != 0:
           raise subprocess.CalledProcessError(motor_process.returncode, "motor_control2.py")
        esp32_process = run_script('soil2.py')
        esp32_process.wait()
        time.sleep(5);
        dht11_process = run_script('temperature_humidity.py')
        dht11_process.wait()
    
        #print("Motor control completed. Starting soil_moisture.py...")
        # Run test1.py
        #test_process = run_script("soil_moisture.py")

        # Wait for test1.py to complete
        #test_process.wait()
        #if test_process.returncode != 0:
        #    raise subprocess.CalledProcessError(test_process.returncode, "test1.py")
        #read_sensor_data()

    except KeyboardInterrupt:
        print("KeyboardInterrupt received, stopping processes...")
        print("Terminating subprocesses...")
        dht11_process.terminate()
        esp32_process.terminate()
        motor_process.terminate()
        dht11_process.wait()
        esp32_process.wait()
        motor_process.wait()
        print("Subprocesses terminated.")
        
        #test_process.send_signal(signal.SIGINT)
        #test_process.wait()
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while running {e.cmd}: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    finally:
        print("Cleaning up GPIO...")
        motor_control_axis_with_camera.GPIO.cleanup()

if __name__ == "__main__":
    main()

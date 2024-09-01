import subprocess
import time
import signal
import RPi.GPIO as GPIO

def run_subprocess(script_name):
    return subprocess.Popen(['python3', script_name])

def clean_gpio():
    GPIO.cleanup()
    print("GPIO pins cleaned up.")

def terminate_process(process):
    if process.poll() is None:  # Check if process is still running
        process.send_signal(signal.SIGINT)  # Send SIGINT
        try:
            process.wait(timeout=5)  # Wait up to 5 seconds for the process to terminate
        except subprocess.TimeoutExpired:
            print(f"Process {process.pid} did not terminate, killing it...")
            process.terminate()  # Force termination if it didn't stop
            process.wait()

def main():
    try:
        # Start the temperature subprocess      
        dht11_process = run_subprocess('temperature_humidity.py')
        dht11_process.wait()
        
        # Wait for the first sub process to complete
        esp32_process = run_subprocess('soil.py')
        esp32_process.wait()
        
        # Start the motor process after the first two processes have finished
        send_data_2 = run_subprocess('send_data_2.py')
        send_data_2.wait()

    except KeyboardInterrupt:
        print("KeyboardInterrupt received, stopping processes...")
        terminate_process(esp32_process)
        terminate_process(dht11_process)
        terminate_process(send_data_2)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while running {e.cmd}: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()

import subprocess
import time

def run_subprocess(script_name):
    return subprocess.Popen(['python3', script_name])

if __name__ == "__main__":
    # Start the subprocesses
    esp32_process = run_subprocess('soil2.py')
    time.sleep(5);
    dht11_process = run_subprocess('temperature_humidity.py')

    try:
        # Keep the main script running while subprocesses are running
        esp32_process.wait()
        dht11_process.wait()
    except KeyboardInterrupt:
        print("Terminating subprocesses...")
        dht11_process.terminate()
        esp32_process.terminate()
        dht11_process.wait()
        esp32_process.wait()
        print("Subprocesses terminated.")

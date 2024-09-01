import subprocess

def capture_image(filename='captured_image.jpg'):
    # Command to capture image using fswebcam
    command = f"fswebcam -r 1280x720 --no-banner {filename}"
    
    try:
        # Execute the command
        subprocess.run(command, shell=True, check=True)
        print(f"Image saved as {filename}")
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    capture_image()

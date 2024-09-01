import cv2
import os

def capture_image_from_webcam(save_directory):
    # Check if the directory exists, if not, create it
    if not os.path.exists(save_directory):
        os.makedirs(save_directory)

    # Initialize the webcam (0 is the default camera)
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("Error: Could not open webcam.")
        return

    # Capture a frame
    ret, frame = cap.read()

    if ret:
        # Construct the file path
        file_path = os.path.join(save_directory, 'captured_image.jpg')

        # Save the captured frame as an image file
        cv2.imwrite(file_path, frame)
        print(f"Image captured and saved as '{file_path}'")
    else:
        print("Error: Could not read frame from webcam.")

    # Release the webcam
    cap.release()
    cv2.destroyAllWindows()

# Example usage
save_directory = '/home/raspberry/Desktop/iot/capture_data/leaves_images/'  # Adjust this path as needed
capture_image_from_webcam(save_directory)

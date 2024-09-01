import os
import subprocess
import time

folder_path = '/home/plant-detection/images' 

supported_extensions = {'.png', '.jpg', '.jpeg'}

def count_image_files(folder):
    return len([f for f in os.listdir(folder) if any(f.lower().endswith(ext) for ext in supported_extensions)])

while True:
    if count_image_files(folder_path) == 9:
        print("Folder contains 9 image files.")
        subprocess.run(['python3', 'diseaseApp.py'])
    else:
        print("The folder does not contain 9 image files yet.")
    time.sleep(60)

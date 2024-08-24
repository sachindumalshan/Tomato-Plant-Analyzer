import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import  load_model
import numpy as np 
from PIL import Image
import os


model = load_model('C:\\Users\\sachm\\Desktop\\Tomato-Plant-Analyzer\\plant-detection\\Image_classify.keras')




data_category = [
    'Healthy_tomato',
    'Early_blight_tomato',
    'Powdery_mildew_tomato',
    'Yellow_leaf_curl_virus_tomato'
    ]

img_height = 180
img_width = 180

supported_extensions = {'.png', '.jpg', '.jpeg'}
images_directory = 'images'
images_files = []
plant_status = []
status_accuracy = []


for filename in os.listdir(images_directory):
    if any(filename.lower().endswith(ext) for ext in supported_extensions):
        filepath = os.path.join(images_directory, filename)
        # print(filepath)

        image_load = tf.keras.utils.load_img(filepath, target_size=(img_height, img_width))
        img_arr = tf.keras.utils.array_to_img(image_load)
        img_bat = tf.expand_dims(img_arr, 0)

        predict = model.predict(img_bat)
        score = tf.nn.softmax(predict)

        category_class = data_category[np.argmax(score)]

        if category_class == 'Healthy_tomato':
            status = 'Healthy'
        if category_class == 'Early_blight_tomato':
            status = 'Early Blight'
        if category_class == 'Powdery_mildew_tomato':
            status = 'Powder Mildew'
        if category_class == 'Yellow_leaf_curl_virus_tomato':
            status = 'Yellow leaf curl virus'

        images_files.append(filename)
        plant_status.append(status)
        status_accuracy.append(format(np.max(score) * 100))

print(images_files)
print(plant_status)
print(status_accuracy)

with open("ImagesAnlz.txt", "w") as file:
    file.write(f"{images_files}\n")
    file.write(f"{plant_status}\n")
    file.write(f"{status_accuracy}\n")


import  cv2
import numpy as np
from numpy import imag
import time
import random

frameWidth = 640
frameHeight = 480

area = 0
all_area_values = []

cap = cv2.VideoCapture(1)
cap.set(3, frameWidth)
cap.set(4, frameHeight)

def getContours(img, imgContour, interval):

    contours, hierarchy = cv2.findContours(img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

    for cnt in contours:
        area = cv2.contourArea(cnt)
        # 1 pixel = 0.2645833333 mm
        # area_mm = round((area * (0.2645833333 ** 2)), 3)
        # area_mm = round((area * (0.2645833333 ** 3)), 3)
        # print(f'Area: ', area_mm)
        if area > 1000:
            cv2.drawContours(imgContour, cnt, -1, (255, 0, 255), 4)  # 7
            peri = cv2.arcLength(cnt, True)
            approx = cv2.approxPolyDP(cnt, 0.02 * peri, True)
            # print(len(approx))
            x, y, w, h = cv2.boundingRect(approx)
            cv2.rectangle(imgContour, (x, y), (x + w, y + h), (0, 255, 0), 5)
            # print(float(area))
            cv2.putText(imgContour, "Area: " + str(float(area)), (x + w + 20, y + 45), cv2.FONT_HERSHEY_COMPLEX,
                        0.7,
                        (0, 255, 0), 2)
            time.sleep(interval)

    return float(area)

Area = []

while True:
    success, img = cap.read()
    imgContour = img.copy()

    imgBlur = cv2.GaussianBlur(img, (7, 7), 1)
    imgGray = cv2.cvtColor(imgBlur, cv2.COLOR_BGR2GRAY)

    imgCanny = cv2.Canny(imgGray, 50, 150)
    kernel = np.ones((5, 5))
    imgDil = cv2.dilate(imgCanny, kernel, iterations=1)

    area_values = getContours(imgDil, imgContour, 1)    # Get 10 Seconds
    all_area_values.append(area_values)
    if len(all_area_values) == 10:
        print(all_area_values)
        avg_area = sum(all_area_values) / len(all_area_values)
        print(f'Average surface area of plant: {avg_area}')
        Area.append(avg_area)
        break
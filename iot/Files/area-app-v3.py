import cv2
import numpy as np
import time

def calculate_surface_areas(frameWidth=640, frameHeight=480, interval=1, min_area=1000, num_measurements=9):
    cap = cv2.VideoCapture(0) or cv2.VideoCapture(1)
    cap.set(3, frameWidth)
    cap.set(4, frameHeight)

    if not cap.isOpened():
        print("Error: Could not open video capture.")
        return

    def getContours(img, imgContour, interval):
        contours, hierarchy = cv2.findContours(img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        area = 0

        for cnt in contours:
            area = cv2.contourArea(cnt)
            if area > min_area:
                cv2.drawContours(imgContour, cnt, -1, (255, 0, 255), 4)
                peri = cv2.arcLength(cnt, True)
                approx = cv2.approxPolyDP(cnt, 0.02 * peri, True)
                x, y, w, h = cv2.boundingRect(approx)
                cv2.rectangle(imgContour, (x, y), (x + w, y + h), (0, 255, 0), 5)
                cv2.putText(imgContour, "Area: " + str(float(area)), (x + w + 20, y + 45), cv2.FONT_HERSHEY_COMPLEX, 0.7, (0, 255, 0), 2)
                time.sleep(interval)

        return float(area)

    all_area_values = []
    Area = []

    while True:
        success, img = cap.read()
        if not success or img is None:
            print("Error: Failed to read frame from camera.")
            break

        imgContour = img.copy()

        imgBlur = cv2.GaussianBlur(img, (7, 7), 1)
        imgGray = cv2.cvtColor(imgBlur, cv2.COLOR_BGR2GRAY)

        imgCanny = cv2.Canny(imgGray, 50, 150)
        kernel = np.ones((5, 5))
        imgDil = cv2.dilate(imgCanny, kernel, iterations=1)

        area_values = getContours(imgDil, imgContour, interval)
        all_area_values.append(area_values)

        if len(all_area_values) == 10:
            print(all_area_values)
            avg_area = sum(all_area_values) / len(all_area_values)
            print(f'Average surface area of plant: {avg_area}')
            Area.append(avg_area)
            all_area_values = []

        if len(Area) == num_measurements:
            with open("surfaceArea.txt", "w") as file:
                for index, value in enumerate(Area):
                    file.write(f"Plant No: {index}, Area: {value}\n")
            break

        cv2.imshow("Result", imgContour)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

# Call the function
calculate_surface_areas()

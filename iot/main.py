import schedule
import time
import threading
import subprocess
from datetime import datetime

# Function to run sub1.py
def run_sub1():
    print(f"Running sub1.py at {datetime.now()}")
    subprocess.run(["python3", "sub1.py"])

# Function to run sub2.py
def run_sub2():
    print(f"Running sub2.py at {datetime.now()}")
    subprocess.run(["python3", "sub2.py"])

# Function to schedule sub1.py to run once a day at a predefined time
def schedule_sub1():
    # Define the time you want to run sub1.py (24-hour format, e.g., "14:00" for 2 PM)
    schedule.every().day.at("20:35").do(run_sub1)
    print("schedule_sub1 started")

# Function to schedule sub2.py to run every hour
def schedule_sub2():
    schedule.every(1).hours.do(run_sub2)
    print("schedule_sub2 started")

# Start the schedule in a separate thread
def start_scheduler():
    while True:
        schedule.run_pending()
        time.sleep(1)

if __name__ == "__main__":
    # Schedule the tasks
    schedule_sub1()
    schedule_sub2()

    # Run the scheduler in a separate thread to allow other processes to run simultaneously
    scheduler_thread = threading.Thread(target=start_scheduler)
    scheduler_thread.start()

    # Keep the main program running
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("Stopping the scheduler...")

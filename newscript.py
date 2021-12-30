### 1. Create a wifi signal strength application
### 2. Make a small gui to display the strength of wifi

import tkinter as tk
from tkinter import Tk, Label, Button, Entry, IntVar, END, W, E
import subprocess
import re

class wifi_strength:

    def __init__(self, master):
        self.master = master
        #self.Beep(1000, .5)
        master.title("Wifi Signal Strength")

        self.label = Label(master, text="Wifi Signal Strength")
        self.label.pack()

        self.greet_button = Button(master, text="Get Signal Strength", command=self.get_signal_strength)
        self.greet_button.pack()

        self.close_button = Button(master, text="Close", command=master.quit)
        self.close_button.pack()

    def get_signal_strength(self):
        proc = subprocess.Popen(["netsh", "wlan", "show", "network", "mode=Bssid"], stdout=subprocess.PIPE, shell=True)
        (out, err) = proc.communicate()
        outwithoutreturn = out.rstrip()
        result = re.findall(r'(?:Signal\sstrength\s=\s)(.*)', outwithoutreturn)
        print(result)
        self.label.configure(text=result)

root = Tk()
my_gui = wifi_strength(root)
root.mainloop()

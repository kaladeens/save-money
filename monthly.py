
import tkinter as tk

#top left total money in vs out 
#top right pie chart of categories
#bottom left list of transactions
#comments
class MonthlyView(tk.Frame):
    def __init__(self,master):
        tk.Frame.__init__(self,master)
        tk.Label(self,text="Monthly View").pack(side="top",fill="both",expand=True)
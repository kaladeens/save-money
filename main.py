import tkinter as tk
import monthly as mv

class App(tk.Tk):
    def __init__(self):
        tk.Tk.__init__(self)
        self.page = None
        self.show(mv.MonthlyView) #Track what page we are on

        
    def show(self, PageRef):
        next = PageRef(self)
        if self.page:
            self.page.destroy()
        self.page = next
        self.page.pack()

App().mainloop()


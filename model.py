

class Month:
    def __init__(self, month_name: Enum):
      self._id = None
      self.money_spent = None
      self.money_in = None
      self.year = 2023
      self.comments = None
      ##maybe sort later if clicked by category

class Transaction:
    def __init__(self, date: datetime, amount: float, category: Enum):
        self.date = date
        self.amount = amount
        self.category = category
        self.
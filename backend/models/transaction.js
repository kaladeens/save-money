module.exports = class Transaction {
    constructor(amount,date,description){
        this.amount = amount;
        this.date = date;
        this.description = description;
    }

    verifyData(amount,date,description){
        if(amount == null || date == null || description == null){
            return false;
        }
        return true;
    }
}
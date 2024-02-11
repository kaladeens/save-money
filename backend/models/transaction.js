module.exports = class Transaction {
    constructor(amount,date,description){
        if(!this.verifyData(amount,date,description)){
            throw new Error('Invalid data');
        }
        this.amount = amount;
        this.date = date;
        this.description = description;
    }

    verifyData(amount,date,description){
        if(amount == null || date == null || description == null){
            return false;
        }
        if (amount == '' ||date ==''){
            return false;
        }
        return true;
    }
}
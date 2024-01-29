// All the methods we will communicate with the database is here
const Transaction = require('./models/transaction');
module.exports =   {
    addTransaction: async (req,res) => {
        let obj = req.body;
        let amount = obj.amount;
        let date = obj.date;
        let description = obj.description;

        try {
            let transaction = new Transaction(amount,date,description);
        } catch (error) {
            res.send(error);
            console.log(error);
        }

    },
}
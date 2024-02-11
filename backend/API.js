// All the methods we will communicate with the database is here
const { Pool } = require('pg');
const Transaction = require('./models/transaction');
module.exports =   {
    addTransaction: async (req,res) => {
        let obj = req.body;
        let amount = obj.amount;
        let date = obj.date;
        let description = obj.description;

        try {
            let transaction = new Transaction(amount,date,description);
            const queryText = 'INSERT INTO transactions (amount,date,description) VALUES ($1,$2,$3)';

            const res = await query(queryText,[transaction.amount,transaction.date,transaction.description]);
            
        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },
    getBalance: async (req, res) => {
        
        const queryText = "SELECT SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END) AS total_positive, SUM(CASE WHEN amount < 0 THEN amount ELSE 0 END) AS total_negative, SUM(amount) AS total_all FROM transactions;";
        const response = await query(queryText, []);
        const { total_positive, total_negative, total_all } = response.rows[0];
        console.log({ total_positive, total_negative, total_all });
        res.send({"revenue": total_positive,"expenses": total_negative,"balance": total_all });
    }
    
}

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'pokemon12',
    database: 'postgres',
    port: 9000,
});

const query = async (text, params) => {
    
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('executed query', { text, duration, rows: res.rowCount })
    return res
  }
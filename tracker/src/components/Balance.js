import {useState, useEffect} from 'react';
import '../styles/Balance.css';
import '../styles/Home.css';
import { API_URL } from '../constants';
import ListTransactions  from './ListTransactions';

function ShowBalance(){
    const [balance, setBalance] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [expenses, setExpenses] = useState(0);

    useEffect(() => {
        fetch(`${API_URL}/api/getBalance`)
        .then(response => response.json())
        .then(data => {
            setBalance(data.balance);
            setExpenses(data.expenses);
            setRevenue(data.revenue);
        })
        .catch(err => console.log(err));
        
    }, []);

   


    return (
        <div className="OuterBox">
            <h1>Balance </h1>
            <div className='balanceBox'>
                <div className = 'valueBox'>
                    Revenue {revenue} - Expenses {expenses} = Balance {balance}
                </div>
            </div>
            <ListTransactions />
        </div>
    )
}

export default ShowBalance;
import {useState, useEffect} from 'react';
import '../styles/Balance.css';
import '../styles/Home.css';
import { API_URL } from '../constants';


function ShowBalance(){
    const [balance, setBalance] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [expenses, setExpenses] = useState(0);

    useEffect(() => {
        getBalance();
        
    }, []);

    async function getBalance(){
        let response = await fetch(`${API_URL}/api/getBalance`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            response = await response.json();
            setBalance(response.balance);
            setExpenses(response.expenses);
            setRevenue(response.revenue);
            console.log('response worked!');
        } else {
            console.log('response did not work!');
        }
    }


    return (
        <div className="OuterBox">
            <h1>Balance </h1>
            <div className='balanceBox'>
                <div className = 'valueBox'>
                    Revenue {revenue} - Expenses {expenses} = Balance {balance}
                </div>
            </div>
        </div>
    )
}

export default ShowBalance;
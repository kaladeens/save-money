import {useState, useEffect} from 'react';
import '../styles/balance.css';
import '../styles/Home.css';
import { API_URL } from '../constants';


function showBalance(){
    [balance, setBalance] = useState(12);
    [revenue, setRevenue] = useState(20);
    [expenses, setExpenses] = useState(8);

    useEffect(async () => {
        await getBalance();
        
    }, []);

    async function getBalance(){
        let response = await fetch(`${API_URL}/api/getBalance`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            console.log(response)
            setBalance(response.balance);
            setRevenue(response.revenue);
            setExpenses(response.expenses);
            console.log(response)
            console.log('response worked!');
        } else {
            console.log('response did not work!');
        }
    }


    return (
        <div className="OuterBox">
            <h1>Balance </h1>
            <div>
                <h3>Income</h3>


            </div>
        </div>
    )
}

export default showBalance;
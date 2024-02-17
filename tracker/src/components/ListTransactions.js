import { useState, useEffect } from 'react';
import { API_URL } from '../constants';
import '../styles/List.css';

function ListTransactions(){
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/getTransactions`)
        .then(response => response.json())
        .then(data => {
            setTransactions(data);
            console.log(data);
        }).catch(err => console.log(err));

    }, []);
    console.log("TRANSACTIONS: ",transactions)

    return (
        <div className='box'>
            <nav>
                <ul>
            {transactions && transactions.map(transaction => (
               
                    <li>{transaction.description}</li>
            ))}
                </ul>
            </nav>
        </div>
    )
}

export default ListTransactions;
import '../styles/AddTransaction.css';
import React, { useEffect, useState } from 'react';

function AddTransaction() {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [errorStatus, setErrorStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        
        }, []);
    async function handleSubmit(){
        console.log('amount: ', amount);
        console.log('date: ', date);
        console.log('description: ', description);
        if (date === '' || amount === '' ) {
            setErrorStatus(true);
            setErrorMessage('Please fill in all fields');
            setTimeout(() => {
                setErrorStatus(false);
                setErrorMessage('');
            }, 3000)  
            return;
        }
        
        // let response = await fetch('/api/addTransaction', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         amount: amount,
        //         date: date,
        //         description: description
        //     })
        // });

        // if (response.ok) {
        //     console.log('response worked!');
        // } else {
        //     console.log('response did not work!');
        // }
    }

    return (
        <div>
            <div className='Form'>
                <form>
                    <div className='form-control'>
                        <label htmlFor='description'>Description</label>
                        <input type='text' 
                            placeholder='Enter description of Transaction'
                            id = 'description'
                            value = {description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='amount'>
                            Amount <br />
                            (negative - expense, positive + income)
                        </label>
                        <input type='decimal' 
                            placeholder='Enter amount...' 
                            value = {amount}
                            id = 'amount'
                            onChange={(e) => setAmount(e.target.value)}
                            />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='date'>
                            Date</label>
                        <input type='date' 
                            id = 'date'
                            placeholder='Enter Date'
                            value = {date}
                            onChange={(e) => setDate(e.target.value)}
                            />
                    </div>
                    <div>
                        {errorStatus && <p className='error'>{errorMessage}</p>}
                        <button className='btn' type = 'button' onClick={handleSubmit}>Add transaction</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default AddTransaction;
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
            setErrorMessage('Please fill in mandatory  fields');
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
        // for now keep but only have it be a component so no bg here in the main page then go hard
        <div className='bg'>

            <h1>Add Transaction</h1>
            <div className='Form'>
                <form>
                    <div className='form-control'>
                        <label htmlFor='description'>Description</label>
                        <textarea type='text' 
                            
                            placeholder='Enter description of Transaction'
                            id = 'description'
                            value = {description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='amount'>
                            Amount 
                        </label>
                        <div style = {{fontSize:'10px',padding: '0px'}}> (negative - expense, positive + income) </div>
                        
                        <input type='number'
                            step = '0.01' 
                            placeholder='Enter amount... (mandatory)' 
                            value = {amount}
                            id = 'amount'
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            />
                        
                    </div>
                    <div className='form-control' style = {{paddingBottom:'0'}}>
                        <label htmlFor='date'>
                            Date</label>
                        <input type='date' 
                            id = 'date'
                            
                            value = {date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            />
                        
                    </div>
                    <small>Enter Date (mandatory)</small>

                    <div className='button'>
                        <button  type='button' style = {{cursor: 'pointer'}}onClick={handleSubmit}>Add transaction</button>
                        {errorStatus && <p className='error' >{errorMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}


export default AddTransaction;
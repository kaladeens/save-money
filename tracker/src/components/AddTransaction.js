import '../styles/AddTransaction.css';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants';
function AddTransaction() {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [todayCheck, setChecked] = useState(false);
    const [errorStatus, setErrorStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
            
        }, []);
    async function handleSubmit(){
        console.log('amount: ', amount);
        console.log('date: ', date);
        console.log('description: ', description);
        console.log('checked', todayCheck);
        if ((date === '' && !todayCheck) || amount === '' ) {
            setErrorStatus(true);
            setErrorMessage('Please fill in mandatory  fields');
                setTimeout(() => {
                    setErrorStatus(false);
                    setErrorMessage('');
                }, 3000)  
            return;
        }
        let dateObj = new Date(date)
        console.log('dateObj: ', dateObj);

        if (dateObj < new Date('2021-01-01') || dateObj > new Date()) {
            setErrorStatus(true);
            setErrorMessage('Please enter a date between 2021 and today');
                setTimeout(() => {
                    setErrorStatus(false);
                    setErrorMessage('');
                }, 3000)  
            return;
        }

        
        let response = await fetch(`${API_URL}/api/addTransaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount,
                date: date,
                description: description
            })
        });

        if (response.ok) {
            console.log(response)
            console.log('response worked!');
        } else {
            console.log('response did not work!');
        }
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            setDate(new Date().toISOString().split('T')[0]);
        }
        else {
            setDate('');
        }
      };
    return (
        // for now keep but only have it be a component so no bg here in the main page then go hard
        <div className='bg'>

            <h1>Add Transaction</h1>
            <div className='Form'>
                <form>
                    <div className='form-control'>
                        <label htmlFor='description'>Description</label>
                        <textarea type='text' 
                            
                            placeholder='Enter Description... (optional)'
                            id = 'description'
                            value = {description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='amount'>
                            Amount 
                        </label>
                        <div style = {{fontSize:'10px',padding: '0px', paddingRight: '5px'}}> (negative - expense, positive + income) </div>
                        
                        <input type='number'
                            step = '0.01' 
                            placeholder='Enter amount... (mandatory)' 
                            value = {amount}
                            id = 'amount'
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            />
                        
                    </div>
                    <div className='form-control' style = {{paddingBottom:'0',alignItems:'center'}}>
                        <label htmlFor='date'>
                            Date</label>
                        <input type='date' 
                            id = 'date'
                            
                            value = {date}
                            onChange={(e) => setDate(e.target.value)}
                            />
                        <label htmlFor='today' style = {{paddingLeft: '10px', fontSize: '12px'}}>
                            Today: {new Date().toLocaleDateString()}
                        </label>
                        <input
                            style={{width: '10px'}}
                            type = 'checkbox'
                            id = 'today'
                            checked = {todayCheck}
                            onChange = {handleChange}
                            />
                    </div>
                    <small className='date-msg'>Enter Date (mandatory)</small>

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
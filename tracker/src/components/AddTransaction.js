import '../styles/AddTransaction.css';

function AddTransaction(){
    
    return(
        useEffect(() => {
            
        })




        <div>
            <div className= 'Form'>
                <form>
                    <div className='form-control'>
                        <label htmlFor='text'>Description</label>
                        <input type='text' placeholder='Enter description of Transaction'/>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='amount'>Amount <br/>
                        (negative - expense, positive - income)</label>
                        <input type='number' placeholder='Enter amount...'/>
                    </div>
                    <button className='btn'>Add transaction</button>
                </form>
            </div>
        </div>
    )
}

export default AddTransaction;
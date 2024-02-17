// initialise express and path
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const APIroutes = require('./API');
var cors = require('cors')

// initialise express app
const app = express();
const PORT_NUMBER = 8000;
app.use(cors());

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
}   );

const options = {
    origin: '*', //
    methods : 'POST',
    allowedHeaders: 'Content-Type',
    optionsSuccessStatus: 200
  };

// initialize middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('tiny'));

//set API routes
app.options('*',cors(options));
app.post('/api/addTransaction',cors(options),APIroutes.addTransaction);
app.get('/api/getBalance',cors(options),APIroutes.getBalance);
app.get('/api/getTransactions',cors(options),APIroutes.getTransactions);
// initialise express and path
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const APIroutes = require('./API');

// initialise express app
const app = express();
const PORT_NUMBER = 8080;

// getting the server right
import {Client} from 'pg';

async function connect(){
    const Client = new Client({});
    await client.connect();

}
connect();

// initialize middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('tiny'));

//set API routes
app.post('/addTransaction',APIroutes.addTransaction);

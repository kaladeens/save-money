// initialize express, mongoose, and path
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT_NUMBER = 8080;

let url = "mongodb://127.0.0.1:27017/expense_tracker";

async function connect(){
    let response = await mongoose.connect(url);
    console.log("Connected to MongoDB", response);
}
connect();

// initialize middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('tiny'));


const mongoose = require('mongoose');

/**
 * Transaction Schema
 * @param {Number} amount - the amount of the transaction
 * @param {String} description - the description of the transaction
 * @param {Date} date - the date of the transaction
 * @param {ObjectId} deepDate - the month object that the transaction belongs to
 */
const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    deepDate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Month'
    },
    date: {
        type: Date,
        required: true
    }

})

module.exports = mongoose.model('Transaction', transactionSchema);
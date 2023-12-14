const mongoose = require('mongoose');

/**
 * Month Schema
 * @param {Number} year - the year of the month
 * @param {Number} month - which month it is
 * @param {ObjectId} transactions - the transactions that belong to the month
 */
const monthSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }]

})

module.exports = mongoose.model('Month', monthSchema);
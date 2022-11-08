const mongoose = require('mongoose');

const URI = 'mongodb+srv://waldagorn:walda170486@cluster0.e5k70kk.mongodb.net/test';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));


module.exports = mongoose;
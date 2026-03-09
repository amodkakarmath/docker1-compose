const mangoose = require('mongoose');

const DATABASE = 'mongodb://MYMONGO:27017/TESTUP';

mongoose
    .connect(DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB Connected');
    })
    .catch(() => {
        console.log('Error in DB Connection');
    });
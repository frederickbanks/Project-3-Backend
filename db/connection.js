const mongoose = require('mongoose');
mongoose.Promise = Promise;

let mongoURI = '';

if(process.env.NODE_ENV == 'production') {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = 'mongodb://localhost/HypeBeastFavs_db'
}

mongoose.connect(mongoURI, {useNewUrlParser: true })
.then(ins => console.log(`Connected to database: ${inst.connections[0].name}`))
.catch(err => console.log('Connection failed!', err));



module.exports = mongoose;
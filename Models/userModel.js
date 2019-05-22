const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: String,
	password: String
});



<<<<<<< HEAD
module.export = mongoose.model('User', UserSchema);
=======
module.export  = mongoose.model('User', UserSchema);


>>>>>>> 253afc6164e3a9c5ce2ce7c7654840e243503c8f

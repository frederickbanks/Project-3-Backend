const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: String,
	password: String
});

module.export  = mongoose.model('User', UserSchema);


const mongoose = require('../db/connection');
const Schema = mongooseSchema;

const UserSchema = new Schema({
	username: String,
	password: String
});



module.export = mongoose.model('User', UserSchema);
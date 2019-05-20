const mongoose = require('../db/connection');
const Schema = mongooseSchema;

const UserSchema = new Schema({
	username: String,
	password: String
});

let user = mongoose.model('User', UserSchema);

module.export = user;
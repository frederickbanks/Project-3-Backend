const mongoose = require('../db/connection');
const Schema = mongooseSchema;

const UserSchema = new Schema({
	username: String,
	password: String
});

mongoose.model('User', UserSchema);

module.export = mongoose;
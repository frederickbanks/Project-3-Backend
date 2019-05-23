const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: String,
	password: String,
	favorites: [
		{
			type: Schema.ObjectId,
			ref: "Clothing"
		}
	]
});



module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = mongoose.Schema({
    question_name: { type: String, required: true },
	difficulty: { type: String, required: true },
	submissions: { type: Number },
	points: {type: Number},
	description: { type: String, required: true },
	input: { type: String, required: true },
	output: { type: String, required: true },
	sample_input: { type: String, required: true },
	sample_output: { type: String, required: true },
	tag: { type: String},
	question_link: {type: String}
		
});

module.exports = mongoose.model('Question', questionSchema);
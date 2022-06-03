const express = require('express');
const questionRouter = express.Router();

const Question = require("../models/Question");

questionRouter.get("/", async (req, res) => {
    try {
        const questions = await Question.find();
        console.log("DBQuestion");
        res.status(200).json(questions);
    }
    catch(err) {
        console.log("ERR");
        res.status(500).json({message: err});
    }
});

questionRouter.get("/:questionID", async (req, res) =>{
    try {
        const questionID = req.params.questionID;
        const question = await Question.findById(questionID);
        if(question) {
            res.status(200).json(question);
        }
        else {
            res.status(404).json({message: "No entry found"});
        }
    } catch(err) {
        res.status(500).json({message: err});
    }
});

questionRouter.post("/", async (req, res) => {
    const newQuestion = new Question({
        question_name: req.body.question_name,
        difficulty: req.body.difficulty,
        submissions: req.body.submissions,
        points: req.body.points,
        description: req.body.description,
        input: req.body.input,
        output: req.body.output,
        sample_input: req.body.sample_input,
        sample_output: req.body.sample_output,
        tag: req.body.tag,
        question_link: req.body.question_link,
    });

    newQuestion.save((err, question) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(question);
		}
	});
});

questionRouter.put("/:questionID", async (req, res) => {
    try {
        const questionID = req.params.questionID;
        const question = await Question.findByIdAndRemove(questionID);
        if(question) {
            const newQuestion = new Question({
                question_name: req.body.question_name,
                difficulty: req.body.difficulty,
                submissions: req.body.submissions,
                points: req.body.points,
                description: req.body.description,
                input: req.body.input,
                output: req.body.output,
                sample_input: req.body.sample_input,
                sample_output: req.body.sample_output,
                tag: req.body.tag,
                question_link: req.body.question_link,
            });
        
            newQuestion.save((err, question) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(question);
                }
            });
        }
        else {
            res.status(404).json({message: "No entry found"});
        }
    } catch(err) {
        res.status(500).json({message: err});
    }
});

questionRouter.delete('/:questionID', async (req, res) => {
    try {
        const questionID = req.params.questionID;
        const question = await Question.findByIdAndRemove(questionID);
        if(question) {
            res.status(200).json(question);
        }
        else {
            res.status(404).json({message: "No entry found"});
        }
    } catch(err) {
        res.status(500).json({message: err});
    }
});


module.exports = questionRouter;
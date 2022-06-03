const express = require('express');
const userRouter = express.Router();

const User = require("../models/User");

userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find();
        console.log("DBUser");
        res.status(200).json(users);
    }
    catch(err) {
        console.log("ERR");
        res.status(500).json({message: err});
    }
});

userRouter.get("/:userID", async (req, res) =>{
    try {
        const userID = req.params.userID;
        const user = await User.findById(userID);
        if(user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({message: "No entry found"});
        }
    } catch(err) {
        res.status(500).json({message: err});
    }
});

userRouter.post("/", async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        score:req.body.score,
        noOfSubmission: req.body.noOfSubmission,
        submitted: req.body.submitted
    });

    newUser.save((err, user) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(user);
		}
	});
});

userRouter.put("/:userID", async (req, res) => {
    try {
        const userID = req.params.userID;
        const user = await User.findByIdAndRemove(userID);
        if(user) {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                score:req.body.score,
                noOfSubmission: req.body.noOfSubmission,
                submitted: req.body.submitted
            });
        
            newUser.save((err, user) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(user);
                }
            });
            // res.status(200).json(user);
        }
        else {
            res.status(404).json({message: "No entry found"});
        }
    } catch(err) {
        res.status(500).json({message: err});
    }
});

userRouter.delete('/:userID', async (req, res) => {
    try {
        const userID = req.params.userID;
        const user = await User.findByIdAndRemove(userID);
        if(user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({message: "No entry found"});
        }
    } catch(err) {
        res.status(500).json({message: err});
    }
});


module.exports = userRouter;
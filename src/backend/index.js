const express = require('express');
const mongoose = require('mongoose');
const questionRouter = require('./routes/Questions');
const userRouter = require('./routes/Users');
var cors = require('cors')

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

const url = "mongodb+srv://sanket02:lieUnmJSNVWxlubT@cluster0.r4vyo.mongodb.net/CodeIt?retryWrites=true&w=majority";

mongoose
	.connect(url, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
	.then(() => console.log("DB Connected"))
    .catch(err => console.log(err));


app.get("/", function(req, res) {
    res.send("hello world")
})

app.use("/user", userRouter);

app.use("/question", questionRouter);

app.listen(8088, function (){
    console.log('listening');
})
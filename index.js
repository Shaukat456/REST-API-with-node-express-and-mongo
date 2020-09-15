const express = require('express');
const mongoose = require('mongoose');
// DEFINED PORT HERE
const port=process.env.PORT || 4000;

//setup express app
const app = express();

//connect to mongo db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.json());

//Initialized Routes
app.use('/api',require('./routes/api'));


//error handling middleware
app.use((err,req,res,next)=>{
    res.send(err.message);
});


//starting server
app.listen(port, ()=>{
    console.log(`server started ${port} successfully`);
});

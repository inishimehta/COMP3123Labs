const express = require('express');
const studentRouter = require('./student');
const employeeRouter = express.Router();

employeeRouter.use((req,res,next)=>{
    console.log("Employee Router Middleware");
     next();
    })

employeeRouter.get('/', (req, res)=>{
    res.send('<h1>Employee Home Page<h1>');
});
employeeRouter.post('/add', (req, res)=>{
    res.send('<h1> Add Employee Page<h1>');
});
employeeRouter.put('/update', (req, res)=>{
    res.send('<h1>Update Employee Page<h1>');
});
employeeRouter.delete('/delete', (req, res)=>{
    res.send('<h1> Delete Employee Page<h1>');
});

employeeRouter.get('/error', (req,res)=>{
    throw new Error("This is a forced error from Employee")
    res.send("This will not be executed.")
});


employeeRouter.use((err ,req,res,next)=>{
    // console.log(err.stack);
    console.log("Employee Error handling Middleware:",err.message);
     res.status(500).send('Something broke!');
    });



module.exports= employeeRouter;

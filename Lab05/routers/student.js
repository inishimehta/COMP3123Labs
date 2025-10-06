const express = require('express')
const studentRouter = express.Router();


/// route level middleware
studentRouter.use((req,res,next)=>{
    console.log("Student Router Middleware");
     next();
    })

studentRouter.get('/', (req,res)=>{
    res.send('<h1>Student Home Page<h1>');
})
studentRouter.post('/add',(req, res)=>{
    res.send('<h1>Add student Page<h1>')
})
studentRouter.put('/update',(req, res)=>{
    res.send('<h1>Update student Page<h1>')
})
studentRouter.delete('/delete',(req, res)=>{
    res.send('<h1>Delete student Page<h1>')
})
studentRouter.get('/error',(req, res)=>{
    throw new Error("This is a forced error from Student")
    res.send('This will not be executed.')
})

//error handling 
studentRouter.use((err ,req,res,next)=>{
    // console.log(err.stack);
    console.log(" Student Error handling Middleware:",err.message);
     res.status(500).send('Something broke!');
    });


module.exports = studentRouter;


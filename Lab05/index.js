const express = require('express');
const studentRouter = require('./routers/student')
const employeeRouter = require('./routers/employee')

const app = express();
const SERVER_PORT = process.env.POST || 3000;
//application level middleware
app.use((req,res,next)=>{
console.log(`${req.method}${req.url} - ${new Date().toISOString()}`)
 next();
})

app.use((req,res,next)=>{
    console.log("Time:", Date.now());
     next();
    })


// student and employee routers
app.use("/student", studentRouter);
app.use("/employee", employeeRouter)
//http://localhost:3000/
app.get('/', (req,res)=>{
    res.send('<h1>Hello World!<h1>');

});
// route to test error handling middleware
app.get("/error", (req, res )=>{
    res.send("Before error");
    throw new Error ("This is a forced error.");
    res.send("This will not be executed");
})

//error handling 
app.use((err ,req,res,next)=>{
    // console.log(err.stack);
    console.log("Error handling Middleware:",err.message);
     res.status(500).send('Something broke!');
    });


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:3000`)
})
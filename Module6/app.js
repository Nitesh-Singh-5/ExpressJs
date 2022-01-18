// Route Parameter

import express from 'express';
const app = express()
const port = process.env.PORT || '3000'


// app.get('/student/delete/:id', (req, res) => {
//     res.send(`Student Deleted ${req.params.id}`);
// })

// app.get('/product/:category/:id', (req, res) => {
//     console.log(req.params);
//     // res.send(`id : ${req.params.id}  Category : ${req.params.category}`);
//     const { id,category } = req.params 
//     res.send(`id : ${id}  Category : ${category}`);
// })

// app.get('/product/order/:year/and/:month', (req, res) => {
//     const { year,month } = req.params 
//     res.send(`year : ${year}  month : ${month}`);
// })

// app.get('/train/:from-:to', (req, res) => {
//     const { from,to } = req.params 
//     res.send(`Travelling from : ${from}  to : ${to}`);
// })




// With Regx
// app.get('/student/delete/:id([0-9]{2})', (req, res) => {
//     console.log(req.params);
//     res.send(`Student Deleted ${req.params.id}`);
// })

// app.get('/:type(post/article)/:id([0-9]{2})', (req, res) => {
//     console.log(req.params);
//     res.send(`Post or Article`);
// })



// app.params()
// app.param('id', (req, res, next, id) => {
//     console.log(`ID: ${id}`)
//     next();
// })
// app.get('/user/:id', (req, res) => {
//     console.log("This is User ID Path");
//     res.send('Response OK');
// })


// Query String

// http://localhost:3000/product?category=mobile&id=13

// app.get('/product',(req,res)=>{
//     console.log(req.query);
//     res.send("Response OK")
// })


app.listen(port, () => {
    console.log(`server listening at ${port}`);
})


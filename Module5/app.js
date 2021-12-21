// Routing 

import express from 'express';
const app = express()
const port = process.env.PORT || '3000'

// Routes
app.get('/', (req, res) => {
    res.send('Get Method');
})

// app.all('*', (req, res) => {
//     res.send("Page Not foud !")
// })

// app.all('/api/*', (req, res) => {
//     res.send("API Page");
// })

// <-------------------   String Path   --------------->

// app.get('/about', (req, res) => {
//     res.send('about page');
// })

// app.get('/contact', (req, res) => {
//     res.send('contact page');
// })


// <-------------   String pattern Path   --------------->

// app.get('/ab?cd', (req, res) => {
//     res.send('This route path will match acd and abcd');
// })



// <-------------   Regular Expression Path   --------------->

// app.get(/a/, (req, res) => {
//     res.send('This is a... contains a like besta');
// })



// <-------------   One Callback   --------------->

// app.get('/cbexample1',(req,res)=>{
//     res.send('One Callback Example');
// })



// <-------------  More than One Callback   --------------->

// app.get('/cbexample2', (req, res, next) => {
//     console.log("First Callback");
//     next();
// }, (req, res) => {
//     console.log("Second Callback");
//     res.end('More than One Callback Example')
// })



// <-------------  An Array of Callback   --------------->

// const cb1 = (req, res, next) => {
//     console.log('First Callback');
//     next()
// }
// const cb2 = (req, res, next) => {
//     console.log('Second Callback');
//     next()
// }
// const cb3 = (req, res, next) => {
//     console.log('Third Callback');
//     res.send('An Array of Callback Example');
//     next()
// }

// app.get('/cbexample3', [cb1, cb2, cb3])


// <---------------   An Array of Callback    ---------------->

// const cb1 = (req, res, next) => {
//     console.log('First Callback');
//     next()
// }
// const cb2 = (req, res, next) => {
//     console.log('Second Callback');
//     next()
// }
// app.get('/cbexample4', [cb1, cb2], (req, res, next) => {
//     console.log('Third Callback')
//     next()
// }, (req, res) => {
//     console.log('Fourth Callback');
//     res.send('Combination of Independent Function and Array of Functions')
// })

// <---------------   Chained route Callback    ---------------->

app.route('/student')
    .all((req, res, next) => {
        console.log('First Run this for All HTTP Method');
        next()
    })
    .get((req, res) => {
        console.log('GET Method');
        res.send('All Studnet');
    })
    .post((req, res) => {
        console.log('POST Method');
        res.send('Add new Studnet');
    })
    .patch((req, res) => {
        console.log('Patch Method');
        res.send('Update Studnet');
    })




app.listen(port, () => {
    console.log(`server listening at ${port}`);
})
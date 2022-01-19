import express from 'express';
import student from './routes/student.js';
import { join } from 'path';

const app = express()
const port = process.env.PORT || '3000'


//Setup the template Engineto use
app.set('view engine','ejs');

// Load Routes
app.use('/student', student);

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})
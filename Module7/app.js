import express from 'express';
const app = express()
const port = process.env.PORT || '3000'
import student from './routes/student.js';


app.use('/student', student);

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})
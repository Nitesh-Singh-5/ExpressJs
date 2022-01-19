import express from 'express';
import student from './routes/student.js';
import { join } from 'path';

const app = express()
const port = process.env.PORT || '3000'

// Static Files
app.use(express.static(join(process.cwd(), '/public')));

// Load Routes
app.use('/student', student);

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})
import express from 'express';
const app = express()
const port = process.env.PORT || '3000'
import connectDB from './db/connectdb.js';
import './models/Student.js'
import createDoc from './models/Student.js';

const DATABASE_URL = "mongodb://localhost:27017/";

createDoc('Sumit', 29, 7758, ['gaming', 'reading'], false, [{ value: "Hello" }]);

connectDB(DATABASE_URL);

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})

import express from 'express';
const app = express()
const port = process.env.PORT || '3000'
import connectDB from './db/connectdb.js';

const DATABASE_URL = "mongodb://localhost:27017/schooldb";



connectDB(DATABASE_URL);

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})

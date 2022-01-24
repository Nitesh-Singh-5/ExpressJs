// Dotenv

import express from 'express';
const app = express()
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || '3000'
import connectDB from './db/connectdb.js';
import './models/Student.js'
import createDoc from './models/Student.js';

const DATABASE_URL = process.env.DATABASE_URL;


connectDB(DATABASE_URL);

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})

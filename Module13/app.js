import express from 'express';
const app = express()
import connectDB from './db/connectdb.js';
const port = process.env.PORT || '3000'
const DATABASE_URL = "mongodb://localhost:27017/";
import web from './routes/web.js'

// Database connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({ extended: false }))

app.use('/', web)

app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})

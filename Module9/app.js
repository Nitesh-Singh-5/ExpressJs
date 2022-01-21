import express from 'express';
const app = express()
import myLogger from './middlewares/logger-middleware.js'
const port = process.env.PORT || '3000'
import web from './routes/web.js'

app.use('/', web);


//Setup the template Engineto use
app.set('view engine', 'ejs');

// Application level middleware
app.set('/', myLogger);

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})

const express = require('express');
const connectDB = require('./config/connectDB');

const app = express();

const user = require('./routes/api/user');
const picture = require('./routes/api/picture');

//Middlewares
app.use(express.json());

//Connect The DataBase
connectDB();

//Routes
app.use('/api/user', user)
// app.use('/api/picture', picture);
app.use('/api/picture', picture)

//Start The Server
const port = process.env.PORT || 5000
app.listen(port , (err) => {
    if(err) console.log('Can Not Run The Server')
    else console.log(`The Server Is Running On Port ${port}`)
})

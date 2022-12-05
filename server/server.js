const express = require('express');
const app = express();

const path = require('path');
const cors = require('cors')
const connectDB = require('./config/db');

const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.use('/api',require('./routes/api'));
connectDB();


app.listen(port,()=>{
    console.log("server is started")
    console.log("http://localhost:8080")
})
const express = require('express');
const connectDB = require('./project/DBConnection');
const app = express();


connectDB();

app.use(express.json({extended:false}));

app.use('/api/userModel',require('./api/user'));
const Port = 8080;

app.listen(Port, () => {
    console.log(`Server started`);
});
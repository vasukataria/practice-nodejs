require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")

const app = express();

const bodyParser = require("body-parser")
const cookieParser  = require("cookie-parser")
const cors = require("cors")

//routes
const authRoutes = require("./routes/auth")

//DB connection

const URI = 'mongodb+srv://dbuser:dbuser@cluster0.aoiuo.mongodb.net/user?retryWrites=true&w=majority';


mongoose.connect(URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify: false
    })
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", authRoutes)


//port
const PORT = process.env.PORT || 5000;
//server
app.listen(PORT,() => {
    console.log(`app is running at ${PORT}`);
});
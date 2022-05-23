//Import All Dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//Routes
app.use('/api', require('./routes/ResearchTopicRoute'));
app.use('/api', require('./routes/Uploads'));
const GroupRoutes = require("./routes/StuGroupRoute");
app.use("/api" , GroupRoutes);
const markingRouter = require("./routes/markings.js");
app.use("/marking",markingRouter); 

//Connect to MongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
});

//Connect to the server
const PORT = process.env.PORT || 3100
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
});
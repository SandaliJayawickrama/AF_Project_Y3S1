const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
});

app.listen(port, () =>{
    console.log("Server is starting on port " + port);
});

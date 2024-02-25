

const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();


const currentRanking = require('./routes/currentRanking');
const stats = require('./routes/stats');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.set('view engine', 'ejs');

app.use("/",currentRanking);

app.use('/',stats);



const Clan_Tag = "#2RGLLCGC";

const Token = process.env.API_KEY;

const Total_Donations = 0;
const Total_req = 0;
const config={
   headers : {'Authorization': `Bearer ${Token}`},
};

//? for data of clans 
 
app.get('/',async(req,res) => {
    
    res.send("working ");
})




// base starting server in port

app.listen(port, () =>{
    console.log("Server listening on port ",port);
})


const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.set('view engine', 'ejs');

app.use("/",require("./routes/index"));



const Clan_Tag = "#2RGLLCGC";
const baseUrl = "https://api.clashofclans.com/v1/";

const Token = process.env.API_KEY;

const Total_Donations = 0;
const Total_req = 0;
const config={
   headers : {'Authorization': `Bearer ${Token}`},
};

//? for data of clans 
 
app.get('/',async(req,res) => {
    
    res.send("worling ");
})

app.get('/stats/clans/:clanTag', async(req, res)=>{
// ? everything will be a form post method 

    const clanTag = req.params.clanTag;

    console.log(req.body);
   
    axios.get(`${baseUrl}clans/%23${clanTag}`, config)
    // the %23 is eual to # when not encoded 
    .then(response => {
        const data = response.data;
        // res.render('data-view',{ data });
        res.json(data)
        // console.log(data['memberList'])
        const memberList = data['memberList'];
       
        
    })
    .catch(error => {
        console.log(error);
        res.status(500).send("internal error");
    })
        // const data = JSON.stringify(res.data)       

});


app.get('/stats/players/:playertag', (req, res) => {
    const playerTag = req.params.playertag;
    axios.get(`${baseUrl}players/%23${playerTag}`, config)
    // the %23 is eual to # when not encoded 
    .then(response => {
        const data = response.data;
        // res.render('data-view',{ data });
        res.json(data)
       
       
        
    })
    .catch(error => {
        console.log(error);
        res.status(500).send("internal error");
    })
    
})

// base starting server in port

app.listen(port, () =>{
    console.log("Server listening on port ",port);
})
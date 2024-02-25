const express = require('express');
const router = express.Router();
const axios = require('axios');
const baseUrl = "https://api.clashofclans.com/v1/"
require("dotenv").config();
const {playerController} = require('../controllers/players/players')
const Token = process.env.API_KEY;
const config={
    headers : {'Authorization': `Bearer ${Token}`},
 };


 
// router.get('/stats/clans/', async(req, res)=>{
//     // ? everything will be a form post method 
//         // console.log("from clans");
//         const clanTag = req.query.c;

       
//         axios.get(`${baseUrl}clans/%23${clanTag}`, config)
//         // the %23 is eual to # when not encoded 
//         .then(response => {
//             const data = response.data;
        
//             // res.render('data-view',{ data });
//             res.json(data)
//             // console.log(data['memberList'])
            
           
            
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(500).send("internal error");
//         })
//             // const data = JSON.stringify(res.data)       
    
// });
    


router.get('/stats/players',playerController);


module.exports = router;
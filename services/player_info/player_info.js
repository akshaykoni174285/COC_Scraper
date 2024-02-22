require("dotenv").config();
const axios = require("axios");
const express = require("express");

const Token = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;
const PlayerInfoService = async (PlayerTag) => {
    
    const response = await axios.get(`${baseUrl}clans/%23${PlayerTag}`, {
        headers : {'Authorization': `Bearer ${Token}`},
     });
    
    return response.data;
    
    // the %23 is eual to # when not encoded 
     
}


module.exports = {PlayerInfoService}


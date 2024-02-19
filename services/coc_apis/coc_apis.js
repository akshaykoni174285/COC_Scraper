require("dotenv").config();
const axios = require("axios");

const baseUrl = process.env.BASE_URL_COC;
const Token = process.env.API_KEY;

const getClanInfo = async (clanTag) => {
    
    const response = await axios.get(`${baseUrl}clans/%23${clanTag}`, {
        headers : {'Authorization': `Bearer ${Token}`},
     })
    // the %23 is eual to # when not encoded 
     return response.data;
}

module.exports = {getClanInfo};
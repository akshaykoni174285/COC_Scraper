
// const playerService = require('../../services/player_info/player_info')
require("dotenv").config();
const axios = require("axios");
const express = require("express");
const { PlayerInfoService } = require("../../services/player_info/player_info")
const Token = process.env.API_KEY;
const baseUrl = "https://api.clashofclans.com/v1/";

const playerController = async (req,res) => {

    
    const playerTag = req.query.c;

    const response = await PlayerInfoService(playerTag);
    res.send(response)

}


module.exports = {playerController};


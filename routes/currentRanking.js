const express = require("express");
const { currentSeasonController } = require("../controllers/Rankings/ranking");

const router = express.Router();


router.post("/Rankings/Reqclans/CurrentSeason/" , currentSeasonController);


module.exports = router;
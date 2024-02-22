const { currentSeasonService } = require("../../services/season_ranking/season_ranking");

const currentSeasonController = async (req,res,next) => {

    try {
        console.log(req.body);
        const result = await currentSeasonService(req.body);


        res.send(result);




    } catch (error) {
        console.log(error);
        res.send(error);
    }
   
}


module.exports = {currentSeasonController};
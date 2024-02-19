const { currentSeasonService } = require("../../services/Rankings/ranking");

const currentSeasonController = async (req,res,next) => {

    try {
        // console.log(req.body);
        const result = await currentSeasonService(req.body);

        console.log(result);
        res.send(result);




    } catch (error) {
        console.log(error);
        res.send(error);
    }
   
}


module.exports = {currentSeasonController};
const { getClanInfo } = require("../coc_apis/coc_apis");

const currentSeasonService = async (req) => {
    const clanTags = req.clanTags;

    clanTags.forEach(async (clanTag) => {
        const clanInfo = await getClanInfo(clanTag);

        const clanMembers = clanInfo.members;

        
        // console.log("hello",clanInfo);
    });

    return "Tesing";
}

module.exports = {currentSeasonService};
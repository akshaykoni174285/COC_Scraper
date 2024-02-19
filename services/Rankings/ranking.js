const { getClanInfo } = require("../coc_apis/coc_apis");

const   currentSeasonService = async (req) => {
    const clanTags = req.clanTags;
    let clanFinalArray = [];
   

    for(const clanTag of clanTags){
        let clanDetails = {};
        const clanInfo = await getClanInfo(clanTag);
        let totalClanDonation = 0;
        let totalClanDonationRecevied = 0;
       
        // const clanMembers = clanInfo.members;
        const clanMembersInfo = clanInfo.memberList;

        clanDetails.clanIcon = clanInfo.badgeUrls.small;
        clanDetails.clanName = clanInfo.name;
        clanDetails.clanTag = clanInfo.tag;

        for(const clanMember of clanMembersInfo){
            const clanMemberDonation = clanMember.donations;
            const clanMemberDonationReceived = clanMember.donationsReceived;

            totalClanDonation = totalClanDonation + clanMemberDonation;
            // console.log(totalClanDonation);
            totalClanDonationRecevied = totalClanDonationRecevied + clanMemberDonationReceived;

        }

        clanDetails.clanTroopsDonated = totalClanDonation;
        clanDetails.clanTroopsReceived = totalClanDonationRecevied;

        clanFinalArray.push(clanDetails);

    }

//    console.log(clanFinalArray); 
    return clanFinalArray;
}

module.exports = {currentSeasonService};
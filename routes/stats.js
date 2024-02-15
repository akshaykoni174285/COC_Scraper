import express from 'express';

const router = express.router();


app.get('stats/clans/:clanTag', async(req, res)=>{
    // ? everything will be a form post method 
    
        const clanTag = req.params.clanTag;
       
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
    
    
app.get('stats/players/:playertag', (req, res) => {
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
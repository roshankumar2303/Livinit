// Create mini-express Application

const exp = require('express');
const mobilesApiRoute = exp.Router();
 
// ==================== GET ==================== //
// localhost:port/mobile/getAllMobiles
mobilesApiRoute.get('/getAllMobiles', (req, res) => {
    let colObj = req.app.get("mobileCol");

    colObj.find().toArray((err, allMobiles) => {
        if(err) {
            console.log(`Error in obtaining data of all mobiles...`);
        }
        else {
            res.send({message: allMobiles});
        }
    })
})

module.exports = mobilesApiRoute;
 
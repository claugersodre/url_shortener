const Url = require("../Model/url");
const findShortUrl = async (short) => {
    try{
        const foundUrl = await Url.findOne({ where: { short: short } })
        if(foundUrl){
            return foundUrl
        }else{
            return null
        }
    }
    catch(err){
        console.log(err);
    }
}
module.exports = findShortUrl;
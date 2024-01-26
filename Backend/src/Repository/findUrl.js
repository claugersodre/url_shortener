const Url = require("../Model/url");
const findUrl = async (url) => {
    try{
        const foundUrl = await Url.findOne({ where: { url: url } })
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
module.exports = findUrl;
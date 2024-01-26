const Url = require("../Model/url");

const insertUrl = async (url, short) => {
    try{
        const newUrl = await Url.create({ url: url, short: short })
        return newUrl
    }
    catch(err){
        console.log(err);
    }
}
module.exports = insertUrl;
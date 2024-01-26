const Url = require("../Model/url");

const UpdateUrlCount = async (url) => {
    try{
        const foundUrl = await Url.findOne({ where: { url: url } })
        foundUrl.count =foundUrl.count+ 1;
        await foundUrl.save();
        return foundUrl;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = UpdateUrlCount;
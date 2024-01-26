const Url = require("../Model/url");

const getAlldUrl = async (url) => {
    try{
        const AllUrl = await Url.findAll({
            limit: 100,
            order: [
                ['count', 'DESC']
            ]
        });
        return AllUrl
    }
    catch(err){
        console.log(err);
    }
}
module.exports = getAlldUrl;
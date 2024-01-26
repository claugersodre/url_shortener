const Url = require("../Model/url")
const findeUrl = require("../Repository/findUrl.js")
const ShortenFucntion = require("../Services/shortenFunction.js")
const CreateUrl = async (url) => {
    if (url.length > 0) {
        try {
            await Url.create({
                url: url,
                // short: ShortenFucntion(url),
                count: 1
            })
            const { id } = await findeUrl(url)
            console.log(id)
            await Url.update({ short: ShortenFucntion(id) }, { where: { url: url } })
            return await findeUrl(url)
        }
        catch (err) {
            console.log(err)
        }
    }
}
module.exports = CreateUrl
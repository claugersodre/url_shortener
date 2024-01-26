const express = require("express")
const router = express.Router()
const getAllUrl = require("../Repository/getAllUrl")
const CreateUrl = require("../Repository/createUrl")
const UpdateUrlCount = require("../Repository/updateUrlCount")
const findUrl = require("../Repository/findUrl")
const findShortUrl = require("../Repository/findShortUrl")
router.get("/", async function (req, res) {

  const AllUrls = await getAllUrl()

  res.status(200).json({ AllUrls })
})
router.post("/findurl", async function (req, res) {
  const { url } = req.body
  const short = await findShortUrl(url)

  res.status(200).json({ url: short })
})
router.post("/shorten", async function (req, res) {

  const { url } = req.body
  // Verify if the url is already in the database
  const urlAlreadyInDatabase = await findUrl(url)
  console.log('urlAlreadyInDatabase', urlAlreadyInDatabase)
  if (urlAlreadyInDatabase) {
    console.log('update url')
    const urlFounded = await UpdateUrlCount(url)
    return res.status(200).json({ url: urlAlreadyInDatabase })

  } else {
    // If the url is not in the database, we create it
    console.log('create url')
    const createdUrl = await CreateUrl(url)
    return res.status(201).json({ url: createdUrl })

  }
})

module.exports = router
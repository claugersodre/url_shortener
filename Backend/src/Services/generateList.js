const ShortenFunction = require("./shortenFunction")

const shortenedUrls = []

for (let id = 1; id <= 100; id++) {
    const shortenedUrl = ShortenFunction(id)
    shortenedUrls.push({
        id,
        short: shortenedUrl, url: `https://www.randomurl.com/watch?v=${id}`,
        count: 1
    })
}

console.log("List of 100 Shortened URLs:")
console.log(shortenedUrls)
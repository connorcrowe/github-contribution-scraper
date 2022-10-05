const axios = require('axios');
const cheerio = require('cheerio');

const url = ''

async function scrapeData() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let contribs = {}

        let listContributionDays = $(".ContributionCalendar-day");
        for (let i=0; i<listContributionDays.length; i++) {
            contribs[listContributionDays[i]['attribs']['data-date']] = listContributionDays[i]['attribs']['data-level'];
        }
    } catch (err) {
        console.error(err);
    }
}

scrapeData();
console.log('done')
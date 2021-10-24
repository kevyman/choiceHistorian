const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

/*Test function*/
let date = new Date(2021,9);

(async () => {
    const hopeThisWorks = await humbleScrape(date);
    console.log(JSON.stringify(hopeThisWorks));
})();


async function humbleScrape(dateObj) {
    //If no argument is passed (which should be always, after I've done scraping past bundles),
    // it checks the current month's bundle.

    if (typeof dateObj === 'undefined') {
        dateObj = new Date();
    }

    const month = dateObj.toLocaleString('en-US', { month: 'long' });
    const year = dateObj.getFullYear();

    const url = `https://www.humblebundle.com/subscription/${month}-${year}`

    //Humble's page is loaded with javascript, so we have to use puppeteer to get the data.

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();

    //We parse the html with cheerio.
    const $ = cheerio.load(content);

    //close the puppeteer browser after we're done with it
    await browser.close();

    const games = [];

    //We push each game name into an object in an array here.

    $('.content-choice-title').each(function (i, elem) {
        let gameName = $(this).text().trim();

        //Everything else I do with the names needs them to be clean, so I have to remove "+ 1 DLC, etc."
        // let nameArr = gameName.split(" ");
        // let lastWord = nameArr[nameArr.length - 1];

        // if (lastWord == "DLC" || lastWord == "DLCs") {
        //     gameName = nameArr.slice(0, -3).join(" ");
        // }

        let nameArr = gameName.split(" + ");
        gameName = nameArr[0];

        games.push({ name: gameName });

    });

    // The whole function has to be called asynchronously or it doesn't work.
    return [{
        url: url,
        month: month,
        year: year,
        release: getReleaseDate(month, year),
        games: games,
        
    }]

};

function getReleaseDate(month, year) {
    let release = 0;
    // let monthArr = monthlyName.split(" ", 2);
    // let month = monthArr[0];
    // let year = parseInt(monthArr[1]);

    const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for (let i = 0; i < mL.length; i++) {
        if (mL[i] == month) {
            month = i;
        }
    }

    let d = new Date();
    d.setFullYear(year, month, 1);
    d.setUTCHours(18, 0, 0, 0);

    //HumbleBundle changed the day they released their bundles from Friday to Tuesday starting from March 2021, so I've got to check for that.

    if ((month < 2 && year == 2021) || year < 2021) {
        // Get the first Friday in the month
        while (d.getDay() !== 5) {
            d.setDate(d.getDate() + 1);
        }
    } else {
        // Get the first Tuesday in the month
        while (d.getDay() !== 2) {
            d.setDate(d.getDate() + 1);
        }
    }



    release = d.valueOf();

    return release;
};

module.exports = humbleScrape;
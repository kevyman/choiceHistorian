const puppeteer = require('puppeteer');
const cheerio = require('cheerio');


async function getSteamed(gameName){

    //This regex replaces everything that isn't a european character (can have accents) or a number so that the search is understood by google. 
    //It also adds '+' characters between words, to correctly format the search url.

    const searchName = gameName.replace(/[^A-Za-z\u00C0-\u017F\d]+/g," ").trim().replace(/ /g,"+");

    const url = `http://www.google.com/search?&q=steam+${searchName}`;

    //This starts the headless puppeteer browser, waits for all the angular/javascript stuff to load, then we go through it with cheerio.
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();

    //We parse the html with cheerio.
    const $ = cheerio.load(content);

    //close the puppeteer browser after we're done with it
    await browser.close();

    let resultsArr = [];


    //a <cite> tag is inside every google search result url 
    $("cite").each((index, el) => {

        //the href we are looking for is on the parent of the parent, "grandparent" element if you will ;)
        let urlString = $(el).parent().parent().attr("href");

        //only every other <cite> tag has a grandparent element with href attribute, so this if-statement filters for that.
        if(urlString){

            //split the url so that we can find the sought after steam id
            let urlArr = urlString.split("/");

            //for steam links the 3rd item will always be to store.steampowered.com
            if(urlArr[2]=="store.steampowered.com"){
                
                //We go through all the url terms and we're looking for a number preceded by "app", then we push it to the results array.
                for(let i = 0; i<urlArr.length; i++){
                    if(!isNaN(urlArr[i]) && urlArr[i-1]=="app"){
                        resultsArr.push(urlArr[i]);
                    }
                }
            }           
        }      
    });

    let result = 0;

    if(resultsArr.length >= 1){
        //We trust google to have the most relevant steam page first, so we return the first steam ID found:
        result = Number(resultsArr[0]);
    }

    
    return result;


}

// For testing:

(async ()=>{
    let thisID = await getSteamed("Ring of Pain");
    console.log(thisID);

})();


module.exports = getSteamed;
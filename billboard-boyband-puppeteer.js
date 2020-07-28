const puppeteer = require('puppeteer');

async function epiphany() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {

    await page.goto('https://www.billboard.com/articles/news/9420280/favorite-boy-band-of-all-time-poll', {waitUntil: 'networkidle2'});
      console.log("Page loaded!")
    }
    catch {
      console.log("page failed smh antis...");
    }
    
    await page.click('#PDI_answer48998833')

    await page.click("#pd-vote-button10581243 > span")

    await page.waitForSelector('#PDI_container10581243 > div > div > div > div > div.pds-question > div > div > div')
    
    //await page.screenshot({path: 'example.png', fullPage: true});
  
    await browser.close();
  };

  async function wearebulletproof() {
    while (true) {
        console.log("start")
        await epiphany()
        console.log("finish")
      }
}

wearebulletproof();
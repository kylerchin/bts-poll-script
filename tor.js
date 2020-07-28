const puppeteer = require('puppeteer');
const colors = require('colors/safe');

async function epiphany () {
	const args = ['--proxy-server=socks5://127.0.0.1:9050'];
	const browser = await puppeteer.launch({ args, headless: true });
	const page = await browser.newPage();
	await page.goto('https://check.torproject.org/', {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
	const isUsingTor = await page.$eval('body', el =>
		el.innerHTML.includes('Congratulations. This browser is configured to use Tor')
	);

	if (!isUsingTor) {
		console.log(colors.red.bold('Not using Tor. Closing...'));
		return await browser.close();
	}

	console.log(colors.green.bold('Using Tor. Continuing... '));

	// Now you can go wherever you want
	//await page.goto('https://propub3r6espa33w.onion/');
	await page.goto('https://poll.fm/10581243', {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
	});
	
	console.log("loaded")

        // You would add additional code to do stuff... 
		await page.click('#PDI_answer48998833')

		console.log("BTS selected")

		await page.click("#poll > div > div > div > div > main > form > div.css-vote.pds-vote > div > a")
	
		await page.waitForSelector('#poll > div > div.css-box.pds-box > div > div > main > form > div.css-question.pds-question > div > div > div > div')

		  console.log(page.url());

	// Then when you're done, just close
	await browser.close();
}



async function wearebulletproof() {
    while (true) {
        console.log("start")
        await epiphany()
        console.log("finish")
      }
}

wearebulletproof();
const puppeteer = require('puppeteer');

let scrape = async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.amazon.com/TP-Link-AC1750-Smart-WiFi-Router/dp/B079JD7F7G?pf_rd_p=538b030e-3f40-5f94-a1a5-376bc59a2030&pf_rd_r=KATWADAQDSMHY65KBTF4&pd_rd_wg=TpI0a&ref_=pd_gw_ri&pd_rd_w=IKIVP&pd_rd_r=7c1a74a1-89ea-452d-b00e-bacd750c4cf0');
    await page.waitFor(1000); // Scrape  browser.close();
    let title = await page.title();

    const result = await page.evaluate(() => {

        let price = document.querySelector('#priceblock_ourprice').textContent;
        let discription = document.querySelector('.a-list-item').textContent;

        return { price, discription };

    });
    browser.close();
    return {
        result,
        title
    };

};

scrape().then((value) => {
    console.log(value);
})
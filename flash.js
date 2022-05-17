const url = 'https://kitt.lewagon.com/camps/851/challenges?feature=flashcards&amp;path=05-Rails%2F02-Rails-CRUD&feature=flashcards'
const numberOfFlashcard = 19

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    userDataDir: '/Users/20012314/Library/Application',
  });
  const page = await browser.newPage();
  await page.goto(url);
  let textArea = '#user-guess-text-area'
  let submitButton = '#flashcard > div > div.flashcard-game-card-front > div > div.flashcard-game-card-content > button'
  let finishButton = '#played-card-submit-know'

  for (let i = 0; i < numberOfFlashcard; i++) {
    await page.click(textArea)
    await page.keyboard.type("J'ai bien compris !")
    await page.click(submitButton)
    await page.waitFor(1000)
    await page.click(finishButton)
    await page.waitFor(1000)
  }
})();

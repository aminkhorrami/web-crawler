const jsdom = require("jsdom");
const fetch = require("isomorphic-fetch");
const { JSDOM } = jsdom;
const telegramModule = require("./telegram.js");
let regexModel = / [A-Z][A-Z][a-zA-Z]/g;
const url = "https://www.binance.com/en/support/announcement/c-48?navId=48";

const fetchData = async (url, regexModel) => {
  try {
    const response = await fetch(url);
    const text = await response.text();

    /// _____________ use with RegEx for an specific DOM node content ____________

    console.log(text.match(regexModel));
    const newListing = text.match(regexModel);
    telegramModule.usingTelegramBot(newListing);
    /// _____________ use with jsdom for an specific DOM node content ____________

    const dom = new JSDOM(text, {
      contentType: "text/html",
      includeNodeLocations: true,
      storageQuota: 10000000,
    });
    //console.log(dom.window.document.querySelector("a").textContent);
  } catch {
    console.log(" errror ! ");
  }
};

fetchData(url, regexModel);

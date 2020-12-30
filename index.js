const jsdom = require("jsdom");
const fetch = require("isomorphic-fetch");
const { JSDOM } = jsdom;

let regexModel = / [A-Z][A-Z][a-zA-Z]/g;
const url = "https://www.binance.com/en/support/announcement/c-48?navId=48";

//const url = "https://www.digikala.com/";

const fetchData = async (url, regexModel) => {
  const response = await fetch(url);

  const text = await response.text();
  console.log("1", text.match(regexModel));

  //   test.match(regexModel)

  /// _____________ use with jsdom for an specific DOM node content ____________

  const dom = new JSDOM(text, {
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000,
  });
  //console.log(dom.window.document.querySelector("a").textContent);
};

fetchData(url, regexModel);

// const test = "The quick OWcn fox jumps BTcr VX VXa the lazy dog. It barked.";

// console.log(test.match(regexModel));

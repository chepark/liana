import { formatDate } from "./utils.js";

/**
 * options is an argument to be passed into the doCORSRequest function.
 * @typedef {Object} options
 * @property {string} method httpRequest method.
 * @property {string} url target url for httpRequest.
 */

/**
 * The function fetches the RSS Feed
 * from https://www.lianatech.com/resources/blog.rss
 *
 * @param {options}
 * @param {showNews}
 */

function doCORSRequest(options, showNews) {
  const xhttp = new XMLHttpRequest();

  xhttp.open(options.method, options.url);

  xhttp.onload = function () {
    showNews(xhttp.responseText);
  };

  xhttp.send(options.data);
}

/**
 * The function displays three recent news
 * on the Lastest News section on the main page.
 *
 * @callback showNews
 * @param {string} result RSS Feed data
 */

function showNews(result) {
  // parse XML code from a string to DOM doc.
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(result, "text/xml");

  const newsList = xmlDoc.getElementsByTagName("item");

  // extract 3 most recent news from newsList
  for (let i = 0; i < 3; i++) {
    // extract date and format to string
    const xmlPubDate =
      newsList[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
    const dateString = formatDate(xmlPubDate);

    // extract news title
    const newsTitle =
      newsList[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;

    //
    const newsWrapper = document.querySelector(".cards-news");

    // create a card component to hold a published date and a title.
    const card = document.createElement("div");
    card.classList.add("card-item");
    card.classList.add("card-content__column");
    card.classList.add("card-news");

    // create a div element to hold a published date
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("news-date");
    dateDiv.textContent = dateString;

    // create a dive element to hold a news title.
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("news-title");
    titleDiv.textContent = newsTitle;

    // append the date and the title in the card element.
    card.appendChild(dateDiv);
    card.appendChild(titleDiv);

    // append the card into the Latest News section.
    newsWrapper.appendChild(card);
  }
}

/**
 * When the site is loaded on the browser,
 * RSS feed is fetched from the target url
 * and display three latest news on the Latest News section.
 */

window.addEventListener("load", () => {
  const CORS_API_URL = "https://cors-anywhere.herokuapp.com/";
  const RSS_URL = "www.lianatech.com/resources/blog.rss";

  doCORSRequest(
    {
      method: "GET",
      url: CORS_API_URL + RSS_URL,
    },
    showNews
  );
});

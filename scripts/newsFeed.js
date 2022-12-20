import { formatDate } from "./utils.js";

function doCORSRequest(options, showNews) {
  const xhttp = new XMLHttpRequest();

  // initialize a new request
  xhttp.open(options.method, options.url);

  // fired when xmlHttpRequest transaction done successfully.
  xhttp.onload = function () {
    showNews(xhttp.responseText);
  };

  xhttp.send(options.data);
}

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

    // DOM
    const newsWrapper = document.querySelector(".cards-news");

    const card = document.createElement("div");
    card.classList.add("card-item");
    card.classList.add("card-content__column");
    card.classList.add("card-news");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("news-date");
    dateDiv.textContent = dateString;

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("news-title");
    titleDiv.textContent = newsTitle;

    card.appendChild(dateDiv);
    card.appendChild(titleDiv);

    newsWrapper.appendChild(card);
  }
}

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

import {getWeather, getCurrency, footer} from './footer.js';

function getNewsnewsList (newsList) {
  newsBlock.innerHTML = '';
  newsList.forEach (item => {
    const cardNews = rendernewCard (item);
    newsBlock.appendChild (cardNews);
  });
}


fetch (
  `https://newsapi.org/v2/everything?language=ru&q=movie&apiKey=fdb87e6cc0c846d7b9e9b9b59ebaa044`
)
  .then (news => news.json ())
  .then (news => {
    getNewsnewsList (news.articles);
    console.log (news.articles);
  })
  .catch (err => console.error (err));

const newsBlock = document.querySelector ('.news');

function rendernewCard({
  title = '',
  description = '',
  urlToImage = '', 
  url = '',
}) {
  const cardNews = document.createElement ('div');
  const titleEl = document.createElement ('p');
  const urlEl = document.createElement ('a');
  const descriptionEl = document.createElement ('p');
  const urlToImageEl = document.createElement ('img');

    cardNews.className = "news_card"
    titleEl.className = "news_card_title"
    descriptionEl.className = "news_card_desc"
    urlToImageEl.className = "news_card_img"

  titleEl.textContent = title;
  descriptionEl.textContent = description;
  urlToImageEl.setAttribute ('src', urlToImage);

  urlEl.setAttribute ('href', url);
  urlEl.textContent = 'Читать статью ';
  urlEl.setAttribute ('target', '_blank');

  cardNews.appendChild (titleEl);
  
  cardNews.appendChild (urlToImageEl);
  cardNews.appendChild (descriptionEl);
  cardNews.appendChild (urlEl);

  return cardNews;
}



// footer
footer()
   // ПОГОДА ))
getWeather()
   //КУРС ВАЛЮТ))
getCurrency()
const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // TODO: Add a function call to display the news
    displayNews(data.articles);
  } catch (error) {
    console.error('There was an error!', error);
  }
}

fetchNews();

function displayNews(articles) {
  const newsDiv = document.querySelector('#news');
  newsDiv.innerHTML = '';
  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';
  newsDiv.appendChild(gridContainer);

  for (const article of articles) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';

    if (article.urlToImage) {
      const image = document.createElement('img');
      image.src = article.urlToImage;
      image.alt = 'Article Image';
      articleDiv.appendChild(image);
    }

    //create and append a headline to the articleDiv
    const title = document.createElement('h4');
    title.textContent = article.title;
    articleDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = article.description;
    articleDiv.appendChild(description);

    const url = document.createElement('a');
    url.href = article.url;
    url.target = ' blank';
    url.textContent = 'Read More';
    articleDiv.appendChild(url);

    // TODO: Use document.createElement and appendChild to create and append more elements
    gridContainer.appendChild(articleDiv);
    // newsDiv.appendChild(articleDiv);
  }
}

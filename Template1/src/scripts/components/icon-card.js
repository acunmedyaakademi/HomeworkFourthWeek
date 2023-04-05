const createFeatureCard = ({ img, alt, title, text }) => {
  const featureCard = document.createElement('div');

  const imgEl = document.createElement('img');
  const container = document.createElement('div');
  const titleEl = document.createElement('h4');
  const textEl = document.createElement('p');

  imgEl.setAttribute('src', img);
  imgEl.setAttribute('alt', alt);

  titleEl.innerText = title;
  textEl.innerText = text;

  featureCard.classList.add('feature-card');

  container.innerHTML += titleEl.outerHTML + textEl.outerHTML;
  featureCard.innerHTML += imgEl.outerHTML + container.outerHTML;

  return featureCard;
};

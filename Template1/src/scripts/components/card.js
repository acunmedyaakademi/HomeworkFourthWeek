const createCard = ({ img, alt, title, subTitle, text, service, socials }) => {
  const card = document.createElement('div');
  const imgEl = document.createElement('img');
  const titleEl = document.createElement('h4');
  const line = document.createElement('div');
  const link = document.createElement('a');
  const linkIcon = document.createElement('img');

  imgEl.setAttribute('src', img);
  imgEl.setAttribute('alt', alt);
  imgEl.setAttribute('loading', 'lazy');

  link.setAttribute('href', '#');
  linkIcon.setAttribute('src', '../src/assets/images/svg/arrow-small.svg');

  link.innerHTML += 'Learn more' + linkIcon.outerHTML;

  titleEl.innerText = title;
  line.classList.add('card-line');
  card.classList.add('card');
  link.classList.add('link');

  card.innerHTML += imgEl.outerHTML + titleEl.outerHTML + line.outerHTML;

  if (text) {
    const textEl = document.createElement('p');
    textEl.innerText = text;
    card.innerHTML += textEl.outerHTML;
  }

  if (!service) {
    const container = document.createElement('div');
    const imgContainer = document.createElement('div');
    const smallText = document.createElement('p');

    socials.map((item) => {
      const a = document.createElement('a');
      const img = document.createElement('img');

      a.setAttribute('href', '#');
      img.setAttribute('src', item.url);
      img.setAttribute('alt', item.name);

      a.appendChild(img);
      imgContainer.appendChild(a);
    });

    smallText.innerText = subTitle;
    container.classList.add('box-container');
    container.innerHTML += smallText.outerHTML + imgContainer.outerHTML;

    card.innerHTML += container.outerHTML;
  } else {
    card.innerHTML += link.outerHTML;
  }

  return card;
};

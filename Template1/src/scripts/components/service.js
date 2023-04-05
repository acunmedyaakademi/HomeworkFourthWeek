const service = document.querySelector('.service');

const serviceContainer = document.createElement('div');
const title = document.createElement('h3');
const text = document.createElement('p');
const cardContainer = document.createElement('div');

serviceContainer.classList.add('main-container');
cardContainer.classList.add('service-card-container');

title.innerText = 'Vivendo omnesque';
text.innerText =
  'Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque postea nam, at posse dicta est.';

if (services) {
  services.map((item) => {
    cardContainer.appendChild(
      createCard({
        img: item.img,
        alt: item.alt,
        title: item.title,
        text: item.text,
        service: true,
      })
    );
  });
}

serviceContainer.innerHTML +=
  title.outerHTML + text.outerHTML + cardContainer.outerHTML;

service.appendChild(serviceContainer);

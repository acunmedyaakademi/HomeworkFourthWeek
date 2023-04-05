const header = document.querySelector('header');

// Create elements
const nav = document.createElement('nav');
const logo = document.createElement('img');
const navContainer = document.createElement('div');
const sideContainer = document.createElement('aside');
const ul = document.createElement('ul');
const button = document.createElement('a');
const hamburgerButton = document.createElement('button');
const hamburgerLine = document.createElement('div');

logo.setAttribute('src', '../src/assets/images/svg/logo.svg');
logo.setAttribute('alt', 'logo');

navContainer.classList.add('nav-container');
sideContainer.classList.add('side-container');

hamburgerButton.classList.add('hamburger');
hamburgerLine.classList.add('hamburger-line');

button.setAttribute('class', 'btn btn-outline');
button.setAttribute('href', '#');
button.innerText = 'Sign up';

ul.classList.add('links');

if (links) {
  links.map((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.setAttribute('href', item.url);
    a.innerText = item.name;

    li.appendChild(a);
    ul.appendChild(li);
  });

  hamburgerButton.appendChild(hamburgerLine);
  navContainer.innerHTML += ul.outerHTML + button.outerHTML;
  sideContainer.innerHTML += ul.outerHTML + button.outerHTML;
  nav.innerHTML +=
    logo.outerHTML + hamburgerButton.outerHTML + navContainer.outerHTML;

  header.appendChild(nav);
  header.appendChild(sideContainer);
}

const teamsCard = document.querySelector('.teams-card-container');

teamsCard.classList.add('service-card-container');

if (teamsCard) {
  teams.map((item) => {
    teamsCard.appendChild(
      createCard({
        img: item.img,
        alt: item.alt,
        title: item.title,
        subTitle: item.subTitle,
        socials,
      })
    );
  });
}

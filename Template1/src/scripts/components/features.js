const featuresContainer = document.querySelector('.features-container');

featuresContainer.classList.add('features-container');

if (featuresContainer) {
  features.map((item) => {
    featuresContainer.appendChild(
      createFeatureCard({
        img: item.img,
        alt: item.alt,
        title: item.title,
        text: item.text,
      })
    );
  });
}

const createTitle = () => {
  const title = document.createElement('h1');
  title.classList.add('restaurant-name');
  title.innerText = 'Odin Urban Gourmet';

  return title;
};

const createSubtitle = () => {
  const subtitle = document.createElement('h2');
  subtitle.classList.add('restaurant-subtitle');
  subtitle.innerText = 'Real food tastes better';

  return subtitle;
};

const createDescription = () => {
  const description = document.createElement('h3');
  description.classList.add('restaurant-description');
  description.innerText = 'Everything homemade, OUG offers creative and artisanal food in a unique space';

  return description;
};

const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');
  header.appendChild(createTitle());
  header.appendChild(createSubtitle());
  header.appendChild(createDescription());

  return header;
};

export const createHomeSection = () => {
  const homeSection = document.createElement('section');
  homeSection.classList.add('home-container');
  homeSection.appendChild(createHeader());

  return homeSection;
};


export { createHomeSection as default };

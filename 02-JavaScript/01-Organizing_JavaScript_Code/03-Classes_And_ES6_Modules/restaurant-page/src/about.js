const aboutDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const createAboutTitle = () => {
  const aboutTitle = document.createElement('h2');
  aboutTitle.classList.add('about-subtitle');
  aboutTitle.innerText = 'About us';

  return aboutTitle;
};

const createAboutDescription = () => {
  const description = document.createElement('h4');
  description.classList.add('about-description');
  description.innerText = aboutDescription;

  return description;
};

const createAboutAside = () => {
  const aboutAside = document.createElement('aside');
  aboutAside.classList.add('aside', 'about-aside');

  aboutAside.appendChild(createAboutTitle());
  aboutAside.appendChild(createAboutDescription());

  return aboutAside;
};

export const createAboutSection = () => {
  const aboutSection = document.createElement('section');
  aboutSection.classList.add('about-container');
  aboutSection.appendChild(createAboutAside());

  return aboutSection;
};

export { createAboutSection as default };

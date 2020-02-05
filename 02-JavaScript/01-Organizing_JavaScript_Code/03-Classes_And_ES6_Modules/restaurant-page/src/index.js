import NavBar from './NavBar';
import { createHomeSection } from './home';
import { createAboutSection } from './about';
import { createContactSection } from './contact';
import { createMenuSection } from './menu';
import { createLocationSection } from './location';

let rootElement;
let backgroundElement;
let contentContainer;
let navBar;

let currentTabId;
let currentContentElement;

const setBackground = (src) => {
  backgroundElement.style.backgroundImage = `url(${src})`;
};

const clearContent = () => {
  if (currentContentElement) {
    currentContentElement.remove();
  }
};

const setContent = (tabId) => {
  clearContent();

  currentTabId = tabId;

  let backgroundImage;

  switch (currentTabId) {
    case 'about-tab':
      currentContentElement = createAboutSection();
      backgroundImage = 'https://honestgreens.com/wp-content/uploads/2018/11/castellana-05.jpg';
      break;

    case 'contact-tab':
      currentContentElement = createContactSection();
      backgroundImage = 'https://i.blogs.es/e95ea9/honest/1366_2000.jpg';
      break;

    case 'home-tab':
      currentContentElement = createHomeSection();
      backgroundImage = 'http://aircrewlifestyle.es/wp-content/uploads/2018/11/honest-greens-cocina-vista.jpg';
      break;

    case 'location-tab':
      currentContentElement = createLocationSection();
      backgroundImage = 'https://media.timeout.com/images/105374258/1372/772/image.jpg';
      break;

    case 'menu-tab':
      currentContentElement = createMenuSection();
      backgroundImage = 'https://madridsecreto.co/wp-content/uploads/2019/02/comida-sana-madrid.jpg';
      break;

    default:
      return;
  }

  if (backgroundImage) {
    setBackground(backgroundImage);
  }

  contentContainer.appendChild(currentContentElement);
};

const addEventListeners = () => {
  navBar.addEventListener('click', (event) => {
    if (!event.target.dataset) {
      return;
    }

    const { tabId } = event.target.dataset;

    switch (tabId) {
      case 'about-tab':
      case 'home-tab':
      case 'contact-tab':
      case 'location-tab':
      case 'menu-tab':
        setContent(tabId);
        break;

      default:
      // Do nothing.
    }
  });
};

const init = () => {
  rootElement = document.querySelector('#root');

  backgroundElement = document.createElement('div');
  backgroundElement.classList.add('background');
  rootElement.appendChild(backgroundElement);

  navBar = NavBar();
  rootElement.appendChild(navBar);

  contentContainer = document.createElement('main');
  contentContainer.classList.add('content');
  rootElement.appendChild(contentContainer);

  addEventListeners();

  setContent('home-tab');
};

init();

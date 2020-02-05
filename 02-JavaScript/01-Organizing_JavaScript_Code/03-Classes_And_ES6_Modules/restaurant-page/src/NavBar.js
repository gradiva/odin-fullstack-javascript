const createTab = ({ id, text }) => {
  const tab = document.createElement('li');
  tab.classList.add('menu-item', id, 'tab-text');
  tab.dataset.tabId = id;
  tab.innerText = text;

  return tab;
};

const NavBar = () => {
  const navBar = document.createElement('nav');
  const navList = document.createElement('ul');
  navList.classList.add('navigation-bar');

  navList.appendChild(createTab({ id: 'about-tab', text: 'About' }));
  navList.appendChild(createTab({ id: 'contact-tab', text: 'Contact' }));
  navList.appendChild(createTab({ id: 'home-tab', text: 'Home' }));
  navList.appendChild(createTab({ id: 'location-tab', text: 'Location' }));
  navList.appendChild(createTab({ id: 'menu-tab', text: 'Menu' }));
  navBar.appendChild(navList);

  return navBar;
};

export default NavBar;

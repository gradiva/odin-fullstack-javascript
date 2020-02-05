const foodItem = (text) => {
  const dishItem = document.createElement('p');
  const dishText = document.createElement('span');
  dishItem.classList.add('menu-text');
  dishText.innerText = text;

  dishItem.appendChild(dishText);

  return dishItem;
};

const foodType = (text) => {
  const dishType = document.createElement('h3');
  dishType.classList.add('food-type-text');
  dishType.innerText = text;

  return dishType;
};

const createMenuDescription = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu-table');

  const foodFirstColumn = document.createElement('div');
  foodFirstColumn.classList.add('menu-column', 'appetisers');
  foodFirstColumn.appendChild(foodType('Appetisers'));
  foodFirstColumn.appendChild(foodItem('Chongqing aubergine (v)'));
  foodFirstColumn.appendChild(foodItem('Fortunate shrimp balls'));
  foodFirstColumn.appendChild(foodItem('Dan Dan Mian (v)'));
  foodFirstColumn.appendChild(foodItem('Five spice pork ribs'));
  foodFirstColumn.appendChild(foodItem('Soft shell crab'));
  foodFirstColumn.appendChild(foodItem('Bang bang ji zi (v)'));

  const foodSecondColumn = document.createElement('div');
  foodSecondColumn.classList.add('menu-column', 'food');
  foodSecondColumn.appendChild(foodType('Food'));
  foodSecondColumn.appendChild(foodItem('Seaweed salad (v)'));
  foodSecondColumn.appendChild(foodItem('Ginger scented tofu (v)'));
  foodSecondColumn.appendChild(foodItem('Suan ni bai rou'));
  foodSecondColumn.appendChild(foodItem('Barbaric radish salad (v)'));
  foodSecondColumn.appendChild(foodItem('Chicken in red oil (v)'));
  foodSecondColumn.appendChild(foodItem('Allergies? - consult your waiter!'));

  const dessert = document.createElement('div');
  dessert.classList.add('menu-column', 'dessert');
  dessert.appendChild(foodType('Dessert'));
  dessert.appendChild(foodItem('Lychee pudding'));
  dessert.appendChild(foodItem('Milk chocolate creme'));
  dessert.appendChild(foodItem('Chocolate truffle (v)'));
  dessert.appendChild(foodItem('Jasmine Dragon Pearls'));
  dessert.appendChild(foodItem('Formosa Jade Dong Ding'));
  dessert.appendChild(foodItem('Black Knight'));
  dessert.appendChild(foodItem('Or if you prefer, just a cup of coffee'));

  menu.appendChild(foodFirstColumn);
  menu.appendChild(foodSecondColumn);
  menu.appendChild(dessert);

  return menu;
};

const createMenuTitle = () => {
  const menuTitle = document.createElement('h2');
  menuTitle.classList.add('menu-subtitle');
  menuTitle.innerText = 'Menu';

  return menuTitle;
};

const createMenuAside = () => {
  const menuAside = document.createElement('aside');
  menuAside.classList.add('aside', 'menu-aside');

  menuAside.appendChild(createMenuTitle());
  menuAside.appendChild(createMenuDescription());

  return menuAside;
};

export const createMenuSection = () => {
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu-container');
  menuSection.appendChild(createMenuAside());

  return menuSection;
};

export { createMenuSection as default };

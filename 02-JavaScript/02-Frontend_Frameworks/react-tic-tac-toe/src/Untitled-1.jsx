import React from 'react';

// Root.jsx
const Root = () => (
  <div className="root">
    <SideBar />
  </div>
);

// SideBar.jsx
const menuItems = [
  { value: 'leti', text: 'Letustu' },
  { value: 'subu', text: 'Subustu' },
  { value: 'bubu', text: 'No' }
];

menuItems.map(item => item.value); // ['leti', 'subu'];

const SideBar = () => (
  <div className="sidebar">
    <Logo />
    <NavigationMenu menuItems={menuItems} />
  </div>
);

// NavigationMenu.jsx
const NavigationMenu = props => (
  <ul className="navigation-menu">
    {props.menuItems.map(menuItem => <li value={menuItem.value}>{menuItem.text}</li>)}
  </ul>
);

class NavigationMenu extends React.Component {
  render() {
    return (
      <ul className="navigation-menu">
        {this.props.menuItems.map(menuItem => <li value={menuItem.value}>{menuItem.text}</li>)}
      </ul>
    )
  }
}

/* global google */
/* eslint no-new: off */

const openingHours = ['Monday - Thursday: 11:30am - 9pm', 'Friday - Saturday: 11:30am - 10pm', 'Sunday: 12pm - 9pm'];

const createLocationTitle = () => {
  const locationTitle = document.createElement('h2');
  locationTitle.classList.add('location-subtitle');
  locationTitle.innerText = 'Find Us';

  return locationTitle;
};

const createMap = () => {
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');
  mapContainer.id = 'map';

  const uluru = { lat: -25.344, lng: 131.036 };

  new google.maps.Map(mapContainer, {
    zoom: 4,
    center: uluru,
  });

  return mapContainer;
};

const createOpeningTimes = () => {
  const openingTimes = document.createElement('h3');
  openingTimes.classList.add('opening-times');
  openingTimes.innerText = openingHours;

  return openingTimes;
};

const createLocationAside = () => {
  const locationAside = document.createElement('aside');
  locationAside.classList.add('aside', 'location-aside');

  locationAside.appendChild(createLocationTitle());
  locationAside.appendChild(createMap());
  locationAside.appendChild(createOpeningTimes());

  return locationAside;
};

export const createLocationSection = () => {
  const locationSection = document.createElement('section');
  locationSection.classList.add('location-container');
  locationSection.appendChild(createLocationAside());

  return locationSection;
};

export { createLocationSection as default };

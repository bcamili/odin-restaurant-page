const headerDiv = document.getElementById("header");

const logoDiv = document.createElement("div");
logoDiv.id = "logoDiv";
headerDiv.appendChild(logoDiv);

const logo = document.createElement("div");
logo.id = "logo";
logoDiv.appendChild(logo);

const brandname = document.createElement("div");
brandname.id = "brandname";
brandname.textContent ="FancyRestaurant.com"
logoDiv.appendChild(brandname);

const navBar = document.createElement("nav");
headerDiv.appendChild(navBar);

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
navBar.appendChild(homeButton);

const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
navBar.appendChild(menuButton);

const aboutButton = document.createElement("button");
aboutButton.textContent = "About";
navBar.appendChild(aboutButton);
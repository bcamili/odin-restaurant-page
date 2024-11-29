import {itemBox} from "./itemBox.js"

export const menu = () => {
    const contentDiv = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";
    contentDiv.appendChild(headline);

    const menuItem = (name, price) => {
        return{name,price};
    }

    const menuItems = [
        menuItem("Pizza", "5€"), 
        menuItem("Pasta", "5€"), 
        menuItem("Salad", "5€"), 
        menuItem("More or less everything", "5€")
    ];
   
    /*
    menuItems.forEach(item => {
        const paragraph = document.createElement("p");
        paragraph.classList+="menuItem";
        paragraph.textContent = `${item.name} ${item.price}`;
        contentDiv.appendChild(paragraph);
    })
        */

    menuItems.forEach(item => {
        const newItem = itemBox(item.name, item.price);
        contentDiv.appendChild(newItem);
    })
    
}
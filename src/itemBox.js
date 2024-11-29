export const itemBox = (name, price) => {

    const itemBoxDiv = document.createElement("div");
    itemBoxDiv.classList = "itemBox";
    
    const itemName = document.createElement("p");
    itemName.classList = "itemName";
    itemName.textContent = name;
    itemBoxDiv.appendChild(itemName);

    const itemPrice = document.createElement("p");
    itemPrice.classList = "itemPrice";
    itemPrice.textContent = price;
    itemBoxDiv.appendChild(itemPrice);

    return itemBoxDiv;
}
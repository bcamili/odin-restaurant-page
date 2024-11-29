export const menu = () => {
    const contentDiv = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";
    contentDiv.appendChild(headline);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Pizza   5€\nPasta   5€\Salad   5€\nMore or less everything   5€";
    contentDiv.appendChild(paragraph);
}
export const homepage = () => {

    const contentDiv = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Fancy Restaurant";
    contentDiv.appendChild(headline);

    const paragraph = document.createElement("p");
    paragraph.textContent = "What is there to say about this wonderful restaurant, that hasn't been said by our countles customers? Try it out!"
    contentDiv.appendChild(paragraph);
}

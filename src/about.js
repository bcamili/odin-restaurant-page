export const about = () => {

    const contentDiv = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "About Us";
    contentDiv.appendChild(headline);

    const paragraph = document.createElement("p");
    paragraph.textContent = "We were created in 2024 as a test for the concept of JS bundling. This is not a real restaurant, obviously. Come try us out, we do not exist anyway."
    contentDiv.appendChild(paragraph);
}

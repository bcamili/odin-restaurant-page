import "./styles.css";
import {homepage} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

const switchboard = [homepage, menu, about];

const buttons = document.getElementsByTagName("button");

for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function (e) {
        document.getElementById("content").innerHTML="";
        switchboard[i]();
    });
};

homepage();
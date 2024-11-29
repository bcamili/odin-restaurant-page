import "./styles.css";
import "./header.js";
import {homepage} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

const switchboard = [homepage, menu, about];

const buttons = document.getElementsByTagName("button");

for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function (e) {
        for(let b of buttons){b.classList="";}
        e.target.classList="selected";
        document.getElementById("content").innerHTML="";
        switchboard[i]();
    });
};

homepage();
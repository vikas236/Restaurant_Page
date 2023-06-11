import './style.css';
import { createNav } from './navbar';
import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';


createNav();
const heading = document.querySelectorAll("li");
const section = document.querySelector(".section");
createHome(section);


// Highlight heading
const underHeading = (n) => {
    for (let i = 0; i < heading.length; i++) {
        heading[i].classList.remove("active");
    }
    heading[n].classList.add("active");
};

heading[0].addEventListener("click", function() {
    createHome(section);
    underHeading(0);
});

heading[1].addEventListener("click", function() {
    createMenu(section);
    underHeading(1);
});

heading[2].addEventListener("click", function() {
    createContact(section);
    underHeading(2);
});
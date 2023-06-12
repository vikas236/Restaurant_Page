import './style.css';
import { createNav } from './navbar';
import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';



createNav(); // Load navbar
const heading = document.querySelectorAll("li"); // topics to click and load (home, menu, contact)
const section = document.querySelector(".section"); // content to display (home, menu, contact)
createHome(section); // Load Home as default tab


// Highlight heading
const underHeading = (n) => {
    for (let i = 0; i < heading.length; i++) {
        heading[i].classList.remove("active");
    }
    heading[n].classList.add("active");
};

// Tab change on click

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
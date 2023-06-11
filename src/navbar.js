// Calling html elements 
const container = document.querySelector("#content");

// Adding navbar with logo and sections names
const createNav = () => {
    container.classList.add("content");
    const nav = container.appendChild(document.createElement("nav"));
    nav.innerHTML = "<span class='title'>SUPER SAMOSA</span>";
    const sections = nav.appendChild(document.createElement("ul.sections"));
    sections.classList.add("sections");
    sections.innerHTML = "<li class='active'>Home</li><li>Menu</li><li>Contact</li>"
    const section = container.appendChild(document.createElement("div"));
    section.classList.add("section");
};

export { createNav };
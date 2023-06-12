// Types of samosas images
const samosas = ["https://www.crazymasalafood.com/wp-content/images/20-different-types-of-samosa-in-india/chole-samosa.jpg",
    "https://www.crazymasalafood.com/wp-content/images/20-different-types-of-samosa-in-india/keema-samosa.jpg",
    "https://www.crazymasalafood.com/wp-content/images/20-different-types-of-samosa-in-india/chocolate-samosa.jpg",
    "https://www.crazymasalafood.com/wp-content/images/20-different-types-of-samosa-in-india/pasta-samosa.jpg"];

const types = ["Chole Samosa", "Keema Samosa", "Chocolate Samosa", "Pasta Samosa"];


// Load menu section
const createMenu = (section) => {
    section.innerHTML = ""
    section.className = "menu section";
    for (let i = 0; i < samosas.length; i++) {
        section.innerHTML += '<div class="box"><img><span class="samosa_title"><span></div>'
        let box = section.childNodes[i];
        const samosa_name = box.childNodes[1];
        samosa_name.innerHTML = types[i];
        box.classList.add("box");
        (box.childNodes[0]).src = samosas[i];
    };
}

export { createMenu };
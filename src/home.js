// chef image
import chef_image from './images/chef.jpg'

// Create home section
const createHome = (section) => {
    section.innerHTML = ""
    section.className = "home section";
    section.innerHTML = '<h3>Best Samosa in your country</h3><h3>Made with Potato Curry since 2027</h3><img class="chef_image" src="" alt="chef image"><h3>Order online or visit us!</h3>'
    const chef = document.querySelector(".chef_image");
    chef.src = chef_image;
}

export { createHome };
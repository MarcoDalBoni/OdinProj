import home from './home.js';
import menu from './menu.js';

const load = () => {

    const header = document.getElementById('header');
    header.classList.add('header');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.classList.add('tab-btn')
    homeBtn.addEventListener('click', () => home());
    header.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener('click', () => menu());
    menuBtn.classList.add('tab-btn')
    header.appendChild(menuBtn);

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = "About";
    aboutBtn.classList.add('tab-btn')
    header.appendChild(aboutBtn);
}

load();
home();
import './style.css';
import Icon from './pizzaBanner.jpg';

const home = () => {

    console.log('Richiamata home');

    const content = document.getElementById('content');
    
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const home = document.createElement('div');
    home.classList.add('content');
    
    const banner = document.createElement('img');
    banner.id = "banner";
    banner.src = Icon;
    home.appendChild(banner);

    const div = document.createElement('div');
    div.classList.add('center-text');

    const header = document.createElement('h1');
    header.textContent = "Pizzeria";
    div.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.textContent = 
        "This is the site of a pizzeria that offers various types of pizza and has some features" 
        + " developed in JavaScript and all his resources are boundled with WebPack ";
    div.appendChild(paragraph);

    home.appendChild(div);

    content.appendChild(home)
}

export default home;
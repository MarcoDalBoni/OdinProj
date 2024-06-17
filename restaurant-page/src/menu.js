import './style.css';

const menu = () => {

    console.log('Richiamato menu');

    const content = document.getElementById('content');

    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }

    content.classList.add('content');
    const spaceDiv1 = document.createElement('div');
    spaceDiv1.classList.add('space-div');
    content.appendChild(spaceDiv1);

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('space-div')
    menuDiv.classList.add('menu');

    for(let i = 1; i < 8; i++) {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('center-text')

        const pizzaName = document.createElement('h1');
        pizzaName.textContent = `Pizza #${i}`;
        elementDiv.appendChild(pizzaName);

        const description = document.createElement('p');
        description.textContent = `This is pizza #${i} on the menu, it has some ingredients. 6$`;
        elementDiv.appendChild(description);

        menuDiv.appendChild(elementDiv);
    }


    content.appendChild(menuDiv);
    const spaceDiv2 = document.createElement('div');
    spaceDiv2.classList.add('space-div');
    content.appendChild(spaceDiv2);
}

export default menu;
import './style.css';

const menu = () => {

    console.log('Richiamato menu');

    const content = document.getElementById('content');

    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }


}

export default menu;
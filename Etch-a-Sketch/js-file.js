const containerDiv = document.querySelector("#container")

createGrid(16); 


let color = 'blue'

const switchToRubber = () => {
    if(color === 'blue') {
        color = 'white'
    } else {
        color = 'blue'
    }
}

document.getElementById('button').addEventListener('click', ()=> {
    switchToRubber()
})

document.getElementById('reset').addEventListener('click', () => {

    let size = 0;
    do {
        size = prompt('Insert table size')
        if(isNaN(+size)) {
            size = 0;
        }
    } while(size <= 0 || size > 100);

    createGrid(size);
})

function createGrid(size) {

    while(containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }

    for(let i = 0; i < size; i++) {

        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
    
        for(let j = 0; j < size; j++) {
    
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.addEventListener("mouseover", () => {
                cellDiv.style.backgroundColor = color;
            })
    
            rowDiv.appendChild(cellDiv);
        }
    
        containerDiv.appendChild(rowDiv);
    }
}
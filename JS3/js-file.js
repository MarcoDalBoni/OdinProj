const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

const header3 = document.createElement("h3");
header3.style.color = "blue";
header3.textContent = "I'm a blue h3!";

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.borderColor = "black";

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";

const divParagraph = document.createElement("p");
divParagraph.textContent = "MEE TOO!";

div.appendChild(header1);
div.appendChild(divParagraph);

container.appendChild(paragraph);
container.appendChild(header3);
container.appendChild(div);

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
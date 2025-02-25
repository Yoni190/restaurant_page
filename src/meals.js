import shiroPic from "./assets/shiro.jpg";
import tibsPic from "./assets/tibs.jpeg";
import genfoPic from "./assets/genfo.jpeg";


function load_meals(){
    const content = document.querySelector("#content");
    const shiro = document.createElement('div');
    const tibs = document.createElement('div');
    const genfo = document.createElement('div');

    const shiroLabel = document.createElement('p');
    const tibsLabel = document.createElement('p');
    const genfoLabel = document.createElement('p');

    shiroLabel.textContent = "Shiro";
    tibsLabel.textContent = "Tibs";
    genfoLabel.textContent = "Genfo";

    const shiroImage = document.createElement("img");
    const tibsImage = document.createElement('img');
    const genfoImage = document.createElement('img');

    shiroImage.src = shiroPic;
    tibsImage.src = tibsPic;
    genfoImage.src = genfoPic;

    shiro.appendChild(shiroLabel);
    shiro.appendChild(shiroImage);

    tibs.appendChild(tibsLabel);
    tibs.appendChild(tibsImage);

    genfo.appendChild(genfoLabel);
    genfo.appendChild(genfoImage);

    content.appendChild(shiro);
    content.appendChild(tibs);
    content.appendChild(genfo);
}

export {load_meals};
import shiroPic from "./assets/shiro.jpg";
import tibsPic from "./assets/tibs.jpeg";
import genfoPic from "./assets/genfo.jpeg";


function load_meals(){
    const content = document.querySelector("#content");
    const meals = document.createElement('div');
    meals.id = 'meals-container';

    const shiro = document.createElement('div');
    const tibs = document.createElement('div');
    const genfo = document.createElement('div');

    const shiroLabel = document.createElement('p');
    const tibsLabel = document.createElement('p');
    const genfoLabel = document.createElement('p');

    const shiroDescription = document.createElement('p');
    const tibsDescription = document.createElement('p');
    const genfoDescription = document.createElement('p');

    shiroLabel.textContent = "Shiro";
    tibsLabel.textContent = "Tibs";
    genfoLabel.textContent = "Genfo";


    const shiroImage = document.createElement("img");
    const tibsImage = document.createElement('img');
    const genfoImage = document.createElement('img');

    shiroImage.src = shiroPic;
    tibsImage.src = tibsPic;
    genfoImage.src = genfoPic;

    shiroDescription.textContent = "Shiro is a rich, spiced chickpea stew, slow-cooked to perfection and served with injera—comforting, flavorful, and a true taste of Ethiopia.";
    tibsDescription.textContent = "Tibs is a flavorful Ethiopian dish of sautéed meat, cooked with spices, onions, and peppers—savory, smoky, and perfect with injera.";
    genfoDescription.textContent = "Genfo is a hearty Ethiopian porridge made from roasted barley flour, mixed with water, and served with spiced butter, berbere, and yogurt for a rich taste.";

    shiro.className = "meal-container";
    tibs.className = "meal-container";
    genfo.className = "meal-container";

    shiro.appendChild(shiroLabel);
    shiro.appendChild(shiroImage);
    shiro.appendChild(shiroDescription);

    tibs.appendChild(tibsLabel);
    tibs.appendChild(tibsImage);
    tibs.appendChild(tibsDescription);

    genfo.appendChild(genfoLabel);
    genfo.appendChild(genfoImage);
    genfo.appendChild(genfoDescription);

    meals.appendChild(shiro);
    meals.appendChild(tibs);
    meals.appendChild(genfo);

    content.appendChild(meals);
}

export {load_meals};
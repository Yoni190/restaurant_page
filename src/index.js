import {initial_load} from "./content.js";
import {load_meals} from "./meals.js";

initial_load();

const home = document.querySelector("#home");
home.addEventListener('click', ()=>{
    document.querySelector("#content").innerHTML = "";
    initial_load();
})

const meals = document.querySelector("#meals");
meals.addEventListener('click', ()=>{
    document.querySelector("#content").innerHTML = "";
    load_meals();
});
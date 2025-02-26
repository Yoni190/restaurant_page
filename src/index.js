import {initial_load} from "./content.js";
import {load_meals} from "./meals.js";
import {load_about} from "./about.js";
import {load_contact} from "./contact.js";
import "./style.css";

initial_load();

const home = document.querySelector('#home');
home.addEventListener('click', ()=>{
    document.querySelector('#content').innerHTML = "";
    initial_load();
});

const meals = document.querySelector('#meals');
meals.addEventListener('click', ()=>{
    document.querySelector('#content').innerHTML = "";
    load_meals();
});

const about = document.querySelector('#about');
about.addEventListener('click', ()=>{
    document.querySelector('#content').innerHTML = "";
    load_about();
});

const contact = document.querySelector('#contact');
contact.addEventListener('click', ()=>{
    document.querySelector('#content').innerHTML = "";
    load_contact();
})
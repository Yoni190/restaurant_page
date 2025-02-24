function initial_load(){
    const content_holder = document.querySelector("#content");

    const greeting = document.createElement('h1');
    const paragraph = document.createElement('p');

    greeting.textContent = "Generic Restaurant";
    paragraph.textContent = "Welcome to Generic Restaurant where your tongue will meet its soul mate.";

    content_holder.appendChild(greeting);
    content_holder.appendChild(paragraph);
}

export {initial_load};
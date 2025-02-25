function initial_load(){
    const content_holder = document.querySelector("#content");

    const paragraph = document.createElement('p');

    paragraph.textContent = "Welcome to Generic Restaurant where your tongue will meet its soul mate.";

    content_holder.appendChild(paragraph);
}

export {initial_load};
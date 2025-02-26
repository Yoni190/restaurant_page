function initial_load(){
    const content_holder = document.querySelector("#content");

    const paragraph = document.createElement('p');
    paragraph.id = 'paragraph';

    paragraph.innerHTML = "<strong>Welcome to Abyssinia House – A Taste of Ethiopia. </strong><br>Step into a world of rich flavors, warm hospitality, and timeless traditions. At Abyssinia House, we bring you the heart of Ethiopia through our authentic dishes, from the aromatic spices of our stews to the comforting softness of freshly made injera. <br>Experience the essence of Ethiopian culture, where food is shared, coffee is a ritual, and every meal is a celebration. Whether you're here for a hearty feast or a soulful coffee ceremony, we invite you to savor the flavors and stories of Ethiopia. <br>Join us for a dining experience that feels like home.  እንኳን በደህና መጣችሁ! (Welcome!)";

    content_holder.appendChild(paragraph);
}

export {initial_load};
function load_about(){
    const content = document.querySelector('#content');
    const about = document.createElement('h2');
    about.textContent = "About Us";

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "At Abyssinia House, we bring the heart and soul of Ethiopia to your table. Rooted in tradition and rich flavors, our restaurant is dedicated to sharing the warmth of Ethiopian hospitality through authentic, home-cooked meals. <br>Our menu is a celebration of Ethiopia’s diverse culinary heritage, featuring dishes like injera—our signature sourdough flatbread—served with a variety of flavorful stews, lentils, and aromatic spices. Whether you're savoring the bold richness of doro wat, the comforting taste of shiro, or the fresh and vibrant flavors of a traditional vegan platter, every bite tells a story of culture, community, and craftsmanship. <br>At Abyssinia House, dining is more than just a meal—it’s an experience. We invite you to eat with your hands, share plates with loved ones, and immerse yourself in the time-honored traditions of Ethiopian cuisine. Whether you're a longtime fan of Ethiopian food or trying it for the first time, we welcome you with open arms and a warm, inviting atmosphere.<br>Come join us for a taste of Ethiopia—where every dish is made with love, and every guest is family. "

    content.appendChild(about);
    content.appendChild(paragraph);
}

export {load_about}
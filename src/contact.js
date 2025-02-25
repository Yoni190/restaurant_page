function load_contact(){
    const content = document.querySelector('#content');
    const contact = document.createElement('h2');
    contact.textContent = "Contact Us";

    const manager = document.createElement('p');
    manager.textContent = "Manager: Yoni190";

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "Phone Number: +251900000001";

    const email = document.createElement('p');
    email.textContent = "Email: email@gmail.com";

    content.append(manager, phoneNumber, email);
}

export {load_contact};
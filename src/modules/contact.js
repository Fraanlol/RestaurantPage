import * as create from '.././helperFunctions.js';

function newInfo(src, text){
    const container = create.newElement('div', 'info');
    const icon = create.newElement('div', 'info--icon');
    icon.innerHTML = `<i class="${src}"></i>`;
    const containerText = create.newElement('p', 'info--text', text);
    container.append(icon, containerText);
    return container;
}
function populateMainContact(){
    const main = document.querySelector('main');
    main.textContent = '';  // This is to clean the whole main

    const contactInfo = create.newElement('div', 'contactCard');
    contactInfo.append(
        newInfo("fas fa-map-marker-alt", "True Street 123"),
        newInfo('fas fa-phone', '123 456 789'),
        newInfo('far fa-clock', 'Everyday, from 11 am to 3 am'),
        newInfo('fas fa-envelope', 'Send us a message! : RealEmail@yummi.yikes'),
    )
    main.append(contactInfo);
}

export {populateMainContact}
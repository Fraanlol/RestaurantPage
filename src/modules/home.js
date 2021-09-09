import * as create from '.././helperFunctions.js';

function populateMainHome() {
    const main = document.querySelector('main');
    main.textContent = '';  // This is to clean the whole main
    const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aspernatur expedita obcaecati corrupti sapiente odio, quasi dignissimos maxime temporibus.
                   Officia corporis architecto similique maiores amet placeat earum quos doloremque assumenda?`

    const homeContainer = create.newElement('div', 'homeContainer');
        const welcomeContainer = create.newElement('div', 'welcomeContainer');
            const welcomeText = create.newElement('h2', 'welcomeText', 'Take a look to our food' );
        const picContainer = create.newElement('div', 'picSection');
            const picContainer1 = create.newElement('div', 'picContainer');
            const picContainer2 = create.newElement('div', 'picContainer');
            const picContainer3 = create.newElement('div', 'picContainer');
            const image1 = create.newElement('div', 'imgContainer');
            const image2 = create.newElement('div', 'imgContainer');
            const image3 = create.newElement('div', 'imgContainer');        
                image1.append(create.createImage('assets/images/home/milaNapo.png'));
                image2.append(create.createImage('assets/images/home/milaCeddar.png'));
                image3.append(create.createImage('assets/images/home/milaJamon.png'));
                
    picContainer1.append(image1, create.newElement('p', 'picText1',lorem));
    picContainer2.append(create.newElement('p', 'picText2', lorem), image2);
    picContainer3.append(image3, create.newElement('p', 'picText3', lorem));
    picContainer.append(picContainer1,picContainer2,picContainer3);
    welcomeContainer.append(welcomeText);
    homeContainer.append(welcomeContainer,picContainer);
    main.appendChild(homeContainer);
}

export {populateMainHome}
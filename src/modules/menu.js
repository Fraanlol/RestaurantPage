import * as create from '.././helperFunctions.js';



function createMenuItem(imgSrc, title){
    const lorem =  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur expedita obcaecati corrupti sapiente odio, quasi dignissimos maxime temporibus.`;
    let container = create.newElement('div', 'menu--item');
    let foodImg = create.createImage(imgSrc);
    let foodName = create.newElement('h2','item--title',title);
    let foodDescription = create.newElement('p', 'item--descr', lorem);

    container.append(foodImg,foodName,foodDescription);
    return container;
}

function populateMainMenu(){
    const main = document.querySelector('main');
    main.textContent = '';  // This is to clean the whole main
   // const images = create.importAll(require.context('../assets/images/menu', false, /\.(png|jpe?g)$/)); // Import images
    const mainMenu = create.newElement('div', 'menu');

    const mainDish = create.newElement('div', 'mainDish');
    mainDish.append(
        createMenuItem('assets/images/menu/milaCebo.jpeg', 'Fugazzeta'),
        createMenuItem('assets/images/menu/milaJamon.png', 'Eggs'),
        createMenuItem('assets/images/menu/milaNapo.png', 'Neapolitan'),
        createMenuItem('assets/images/menu/milaCeddar.png', 'Ceddar'),
        createMenuItem('assets/images/menu/hamburmila.jpeg', 'Burguer 1'),
        createMenuItem('assets/images/menu/hamburmila2.jpeg', 'Burguer 2'),
        createMenuItem('assets/images/menu/hamburmila3.jpeg', 'Burguer 3'),
        createMenuItem('assets/images/menu/hamburmila4.jpeg', 'Burguer 4'),
    );
    const garrison = create.newElement('div', 'garrison');
    garrison.append(
        createMenuItem('assets/images/menu/ensalada.jpeg', 'Salad 1'),
        createMenuItem('assets/images/menu/ensalada2.jpeg', 'Salad 2'),
        createMenuItem('assets/images/menu/papas.jpeg', 'Fries 1'),
        createMenuItem('assets/images/menu/papas2.jpeg', 'Fries 2'),
    );
    mainMenu.append(
        create.newElement('h1', 'mmTitle', 'Main Dishes'),
        mainDish,
        create.newElement('h1', 'mmTitle', 'Salads and Fries'),
        garrison,
    );
    main.append(mainMenu);
}

export {populateMainMenu}
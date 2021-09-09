import './styles/skeleton.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

import {populateMainHome} from './modules/home.js';
import { populateMainMenu } from './modules/menu';
import { populateMainContact } from './modules/contact';
import * as create from './helperFunctions.js';


function toggleClass(elm, cl){
   let previous = document.querySelector(`.${cl}`);
   previous != null ? previous.classList.remove(cl):false;
    elm.classList.add(cl);
}

( function buildPage() {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(assets/images/backgImg.png)`;

    // Navigation bar build
    ( function buildBody(){
        const navParent = create.newElement('nav', 'navBar');
            const titleContainer = create.newElement('div', 'titleContainer');
            const menuItemsContainer = create.newElement('div', 'itemsMenu');
                const title = create.newElement('p', 'titleContainer--title','Milanga');
                    const titleSub = create.newElement('p', 'titleSub', ' Experts of the Argentinian "Milanesa"')
                const menuList = create.newElement('div', 'itemsMenu--list');
                    const home = create.newElement('button', 'list--home','Home');
                        home.addEventListener('click', (e) => { toggleClass(e.target,'active'); populateMainHome()});
                    const menu = create.newElement('button', 'list--menu','Menu');
                        menu.addEventListener('click', (e) => { toggleClass(e.target,'active'); populateMainMenu()});
                    const contact = create.newElement('button', 'list--contact','Contact');
                        contact.addEventListener('click', (e) => { toggleClass(e.target,'active'); populateMainContact()});

        menuList.append(home,menu,contact);
        menuItemsContainer.appendChild(menuList);
        titleContainer.append(title, titleSub);
        navParent.append(titleContainer,menuItemsContainer);
        body.appendChild(navParent);


        // Main content container
        const mainContent = create.newElement('main', 'main');
            body.appendChild(mainContent);
            populateMainHome();
            toggleClass(home,'active');
    })();

    ( function buildFooter(){
        const footer = create.newElement('footer');
            const container = create.newElement('p', 'footer--information', 'Made by Fraanlol');
            const gitHub = create.newElement('a');
            gitHub.href = 'https://github.com/Fraanlol';
            gitHub.setAttribute('target', '_blank');
            gitHub.innerHTML = '<i class="fab fa-github"></i>';
        footer.append(container, gitHub);
        body.appendChild(footer);
    })();
})();

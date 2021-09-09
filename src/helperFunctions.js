export function newElement(element, classname, text) {
    let creation = document.createElement(`${element}`);
    classname != undefined ? creation.classList.add(classname):false;
    creation.textContent = text != undefined ? text:'';
    return creation;
}

export function createImage(src){
    let creation = document.createElement('img');
    creation.src = src;
    return creation;
}

export function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

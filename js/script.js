// creo un Array con le 5 immagini per il carosello
// Inizializzo le variabili per : carosello, frecce up-down.
//gengero un ciclo for per il markup delle immagini all'intero del carosello.
//genero 2 event listner per ilclick dei pulsanti
//genero 2 funzioni per l'evento click dei pulsanti, per dargli la funzione active e per far si che il carosello, alla fine dell'array ricominci da indice 0.


//Array Carosello immagini
const imagesCarousel = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const itemContainer = document.querySelector('.items');

imagesCarousel.forEach((singleImagesObject, i, imagesArray) => {

    let itemClasses = 'item';
    if (i === 0){
        itemClasses += ` active`
    }


    itemContainer.innerHTML += `
        <div class="${itemClasses}">
            <img src="${singleImagesObject.image}" alt="${singleImagesObject.title}">
            <div class="texts">
                <h3>
                ${singleImagesObject.title}
                </h3>
                <p>
                    ${singleImagesObject.text}
                </p>
            </div> 
        </div>
    
    `
});

// SCROLL UP

let activeItemIndex = 0;
const allItem = document.querySelectorAll('.item');
const scrollUp = document.querySelector('.arrow-up');
// FUNZIONE SCROLL UP
scrollUp.addEventListener('click', function(){
    if(activeItemIndex < allItem.length - 1){
        allItem[activeItemIndex].classList.remove("active");
        activeItemIndex++; 
        allItem[activeItemIndex].classList.add("active");

    }
    else{
        //non fa nulla.
    }
});


// SCROLL DOWN
const scrollDown = document.querySelector('.arrow-down');
// FUNZIONE SCROLL UP
scrollDown.addEventListener('click', function(){
    if(activeItemIndex > 0){
        allItem[activeItemIndex].classList.remove("active");
        activeItemIndex--; 
        allItem[activeItemIndex].classList.add("active");

    }
    else{
        //non fa nulla.
    }
});










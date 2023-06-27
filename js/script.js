// creo un Array con le 5 immagini per il carosello
// Inizializzo le variabili per : carosello, frecce up-down.
//gengero un ciclo for per il markup delle immagini all'intero del carosello.
//genero 2 event listner per ilclick dei pulsanti
//genero 2 funzioni per l'evento click dei pulsanti, per dargli la funzione active e per far si che il carosello, alla fine dell'array ricominci da indice 0.


//Array Carosello immagini
const imagesCarousel = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

//seleziono gli elementi html del carosello e dei bottoni
let carouselDiv = document.querySelector('.carousel');
let arrowUp = document.querySelector('.arrow-up');
let arrowDown = document.querySelector('.arrow-down');
let imgIndex = 0;// impostiamo il corrente indice dell'immagine a 0 per renderla attiva.


// Ciclo for per generare il markup delle immagini nel carosello
for (let i = 0; i < imagesCarousel.length; i++){
    let img = document.createElement('img'); // creo un elemento img
    img.classList.add('carousel-img'); //gli attribuiscoi la classe carousel-img

    if (i === 0){ // Se l'indice è 0
        img.classList.add('active'); // Aggiungiamo anche la classe active per rendere l'elemento visibile
    }
    img.src = imagesCarousel[i]; // dico all'elemento src che l'indice di questa immagine corrisponde all'elemento creato.
    carouselDiv.appendChild(img); // aggiungo questo elemento come figlio di carousel.img
}

// Creo gli event listner per i button
arrowUp.addEventListener('click', scrollUp);
arrowDown.addEventListener('click', scrollDown);





//funzione per il click dei button, in modo che quando si arriva alal fine dell'array si ricominci da capo.
function scrollUp(){
    let activeImg = document.querySelector('.carousel-img.active');
    activeImg.classList.remove('active')  // al click del pulsante rimuoviamo la classe active ddall'img

    imgIndex--;
    if(imgIndex < 0){
        imgIndex = imagesCarousel.length - 1; //se l'indice diventa negativo,decrentiamo l'indice dell'immagine attuale per farla sparire.
    }

    let newActive = document.querySelectorAll('.carousel-img')[imgIndex];// seleziono la nuova calsse 
    newActive.classList.add('active'); // do la classe active alla nuova classe creata

}

function scrollDown(){
    let activeImg = document.querySelector('.carousel-img.active');

    activeImg.classList.remove('active');

    imgIndex++;

    if(imgIndex >= imagesCarousel.length - 1 ){
        imgIndex = 0;
    }
    let newActive = document.querySelectorAll('.carousel-img')[imgIndex];
    newActive.classList.add('active');

}
"use strict"


// Milestone 0:
// Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.



// array contenente gli oggetti con le immagini

const images = [
    {
        id: 1,
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        id: 2,
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        id: 3,
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        id: 4,
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        id: 5,
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


// Milestone 0:
// Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

const btmCarousel = document.getElementById('btm-carousel');
const topCarousel = document.getElementById('top-carousel');

let interval = 2500;


function initSlides (){
    let foto = document.querySelectorAll('.big-pic');
    foto[0].classList.toggle('d-none');  
    foto[0].classList.toggle('show');  
  }

  function opacity () {
    let fotosmall = document.querySelectorAll('.small-pic');
    fotosmall[0].classList.toggle('opacity-50');  
    fotosmall[0].classList.toggle('show-mini');  
  }
  
 
  console.log(topCarousel)
  console.log(topCarousel.firstChild)
  setInterval(() => {

    // scorrimento top slides
    let foto = document.getElementsByClassName('show')[0];
    foto.classList.toggle('d-none');
    console.log(foto.classList);
    foto.classList.toggle( 'show');
    let nextSlide = foto.nextElementSibling;
     if(nextSlide === null){
        nextSlide = topCarousel.firstChild;
    }
    nextSlide.classList.toggle('d-none');
    nextSlide.classList.toggle( 'show');

    // scorrimento bottom slides
    let fotoMini = document.getElementsByClassName('show-mini')[0];
    fotoMini.classList.toggle('opacity-50');
    
    fotoMini.classList.toggle( 'show-mini');
    let nextMini = fotoMini.nextElementSibling;
     nextMini = fotoMini.nextElementSibling;
     if(nextMini === null){
        nextMini = btmCarousel.firstChild;
    }
    nextMini.classList.toggle('opacity-50');
    nextMini.classList.toggle( 'show-mini');



  }, interval);

// creazione ciclo che cicli l'array 


// dare una var alllphoto e una var photo riassegnare in base al counter index

images.forEach(element => {
    let mainImage = document.createElement('div');
    mainImage.classList.add('position-relative', 'd-none', 'big-pic');

    mainImage.innerHTML = `
            <img src="${element.url}" alt="${element.title}">
            <div class="didascalia px-3">
            <h1>${element.title}</h1>
            <div class="top-right">${element.description}</div>
            </div>
          `   ;
          topCarousel.append(mainImage);    
});

initSlides();


console.log(topCarousel)
console.log(topCarousel.firstChild)

images.forEach(element => {

    let miniImage = document.createElement('div')
    
    miniImage.classList.add('col' , 'p-0', 'small-pic', 'opacity-50')
    miniImage.innerHTML = `
            <img class="w-100 h-100 " src="${element.url}" alt="${element.title}">
          `
    btmCarousel.append(miniImage);

});


opacity();







// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

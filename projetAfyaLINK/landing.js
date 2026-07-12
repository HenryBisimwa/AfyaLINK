let main = document.querySelector('#accueil');

let img = [
    "autres/images/mik.jpg",
    "autres/images/bgi.jpg",
];
let i = 0;

main.style.backgroundImage = `url(${img[i]})`;
main.style.backgroundSize = "cover";
main.style.backgroundPosition = "center";
main.style.backgroundRepeat = "no-repeat";
main.style.transition = "1s";

setInterval(() => {
    i++;
    if (i >= img.length) {
        i = 1;
    }
    main.style.backgroundImage = `url(${img[i]})`;
}, 1000);


let nav = document.querySelector('#nav');
let titre = document.querySelector('#titre');
let div1 = document.querySelector('#div1');
let button=document.querySelector('#connexion');
let menu=document.querySelector('#burger');


window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        nav.classList.add('bg-white', 'shadow-xl');
        div1.classList.add('text-black');
        div1.classList.remove('border-white');
        titre.classList.remove('text-white');
        button.classList.add('text-green-700');
        button.classList.remove('text-white');
        menu.classList.remove('text-white');
        menu.classList.add('text-black');
    } else if (window.scrollY === 0) {
        nav.classList.remove('bg-white', 'shadow-xl');
        div1.classList.remove('text-black');
        div1.classList.add('border-white');
        titre.classList.add('text-white');
        button.classList.add('text-white');
        button.classList.remove('text-green-700');
        menu.classList.add('text-black');
    } else {
        nav.classList.remove('bg-white', 'shadow-xl');
        div1.classList.remove('text-black');
        button.classList.remove('text-green-700');
        button.classList.remove('text-white');
        menu.classList.remove('text-white');
    }
});


let burger=document.querySelector('#burger');
let mobileMenu = document.querySelector('#mobileMenu');
let overlay = document.querySelector('#overlay');

burger.addEventListener('click', () => {

    burger.classList.toggle('rotate-90');

    mobileMenu.classList.toggle('hidden');

    overlay.classList.toggle('hidden');


});

const mobileLinks = document.querySelectorAll('#mobileMenu a');

mobileLinks.forEach(link => {

    link.addEventListener('click', () => {

        mobileMenu.classList.add('hidden');

        overlay.classList.add('hidden');

        burger.classList.remove('rotate-90');

    });

});

overlay.addEventListener('click', () => {

    mobileMenu.classList.add('hidden');

    overlay.classList.add('hidden');

    burger.classList.remove('rotate-90');

});
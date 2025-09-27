const burgerIcon = document.querySelector('#burgerIcon');
const closeIcon = document.querySelector('#closeIcon');
const menu = document.querySelector('#menu');

// open menus
burgerIcon.addEventListener('click', () => {
    menu.classList.remove('h-0');
    menu.classList.add('h-[80vh]');  // expand to 80%
    burgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
});

// close menus
closeIcon.addEventListener('click', () => {
    menu.classList.remove('h-[80vh]');
    menu.classList.add('h-0');      // collapse back
    closeIcon.classList.add('hidden');
    burgerIcon.classList.remove('hidden');
});

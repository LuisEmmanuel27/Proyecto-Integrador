/*Función para el botón de menú*/
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

/*Función para que el botón de cerrar menú funcione*/
document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}

/*Función para el estado activo de los btn de cuenta-form*/
let registraBtn = document.querySelector('.cuenta-form .reg-btn');
let ingresaBtn = document.querySelector('.cuenta-form .ing-btn');

registraBtn.onclick = () => {
    registraBtn.classList.add('active');
    ingresaBtn.classList.remove('active');
}

registraBtn.onclick = () => {
    registraBtn.classList.add('active');
    ingresaBtn.classList.remove('active');
    document.querySelector('.cuenta-form .ingresar-form').classList.remove('active');
    document.querySelector('.cuenta-form .registrar-form').classList.add('active');
}

ingresaBtn.onclick = () => {
    registraBtn.classList.remove('active');
    ingresaBtn.classList.add('active');
    document.querySelector('.cuenta-form .ingresar-form').classList.add('active');
    document.querySelector('.cuenta-form .registrar-form').classList.remove('active');
}

/*Funciones para que el botón de usuario funcione*/
let cuentaBar = document.querySelector('.cuenta-form');

document.querySelector('#account-btn').onclick = () => {
    cuentaBar.classList.add('active');
}

document.querySelector('#close-form').onclick = () => {
    cuentaBar.classList.remove('active');
}

//Codigo para el funcionamiento de swiper-cursos
var swiper = new Swiper(".cursos-slide", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

//Codigo para el funcionamiento de swiper-profesores
var swiper = new Swiper(".profe-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

/*Codigo para el funcionamiento del boton de leer mas*/
document.querySelector('.load-more .btn').onclick = () => {
    document.querySelectorAll('.pythonMain .box-container .hide').forEach(show => {
        show.style.display = 'block'
    })
    document.querySelector('.load-more .btn').style.display = 'none'
}
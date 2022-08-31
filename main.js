let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function () {
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// com masonry ( JavaScript grid layout)
new Masonry("#posts .grid", {
    itemSelector: '.grid-item',
    gutter: 20
});

// inicialização da biblioteca swiper
new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 3000
    },
    // responsive brakpoints
    breakpoints: {
        '@0': {
            slidesPerView: 2
        },
        // 888px
        '@1.00': {
            slidesPerView: 3
        },
        // 1110px
        '@1.25': {
            slidesPerView: 4
        },
        // 1330px
        '@1.50': {
            slidesPerView: 5
        }
    }
})

// Navegação Fixa
window.onscroll = function () { myFunction() };

// obter o valor atual 
let navbar = document.getElementById("header");

// obter a posição da barra de navegação
let sticky = navbar.offsetTop;

// função sticky
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
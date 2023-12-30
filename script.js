const NavSlide = () => {

    const burger = document.querySelector('.burger');
    console.log(burger);

    const nav = document.querySelector('.nav-links')
    console.log(nav);

    burger.addEventListener('click', () => {

        // for open
        nav.classList.toggle('nav-active');
        
        // for close
        burger.classList.toggle('toggle');
    });
}

    NavSlide();
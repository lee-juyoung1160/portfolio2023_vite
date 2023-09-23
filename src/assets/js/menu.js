export function menu() {

    const body = document.querySelector('body');
    const headerToggle = document.querySelector(".header__nav__mo");
    const headerNav = document.querySelector(".header__nav");

    headerToggle.addEventListener("click", () => {
    
    !headerToggle.classList.contains('active')
        ? headerToggle.classList.add('active') 
        & body.classList.add('scroll__hidden')
        & headerNav.classList.add('active')
        : headerToggle.classList.remove('active') 
        & body.classList.remove('scroll__hidden')
        & headerNav.classList.remove('active')
    });

}


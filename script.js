const navLinks = document.querySelector('.nav_links')
const bar = document.querySelector('.bar')
const close = document.querySelector('.close')


bar.addEventListener('click', revealMobileNav)
function revealMobileNav(){
    navLinks.classList.add('reveal')
    close.classList.add('display')
    bar.classList.add('hide')
}

close.addEventListener('click', hideMobileNav)
function hideMobileNav(){
    navLinks.classList.remove('reveal')
    close.classList.remove('display')
    bar.classList.remove('hide')
}


function slideInImage() {
    const image = document.getElementById('image');
    image.style.opacity = 1;
    image.style.transform = 'translateX(0)';
  }


  setTimeout(slideInImage, 2000);
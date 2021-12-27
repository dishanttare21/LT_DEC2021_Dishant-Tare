const coverImg = document.querySelector('.coverImage');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerMenu = document.querySelector('.navbar-right');
const header = document.getElementById('header');
const links = document.querySelectorAll('.link');
const navbarRight = document.querySelector('.navbar-right');

window.onresize = () => {
    if (window.innerWidth >= 768) {
        hamburgerMenu.style.display = 'flex';
        navbarRight.style.color = '#000'
    }
}

hamburgerBtn.onclick = () => {
    if (hamburgerMenu.style.display === 'none') {
        hamburgerMenu.style.display = 'flex';
    } else {
        hamburgerMenu.style.display = 'none';
    }
}

window.onscroll = () => {
    if (window.scrollY > 25) {
        header.style.position = 'sticky';
        header.style.background = '#fff';
        hamburger.style.color = '#2F3245'
        if (window.innerWidth >= 768) {
            
            header.style.color = '#2F3245'
            links.forEach(link => {
                link.style.color = '#2F3245'
            })
            header.style.boxShadow = '0 4px 2px -2px rgba(0,0,0,.2)'
        }
    } else {
        header.style.position = 'absolute';
        header.style.background = 'transparent';
        header.style.color = '#fff'
        hamburger.style.color = '#fff'
        links.forEach(link => {
            if (window.innerWidth >= 768) {
                link.style.color = '#fff'
            }
        })
        header.style.boxShadow = ''
    }
}

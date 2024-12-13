const navToggleIconEl = document.querySelector('#nav_toggle_div');
const navLinksEl = document.querySelector('#nav_links');

navToggleIconEl.addEventListener('click', () => {
    if (navLinksEl.classList.contains('nav_active')) { 
        navLinksEl.classList.remove('nav_active');
        document.querySelector('#closeIcon').style.display = 'none'
        document.querySelector('#openIcon').style.display = 'block'
    } else { 
        navLinksEl.classList.add('nav_active');
        document.querySelector('#closeIcon').style.display = 'block'
        document.querySelector('#openIcon').style.display = 'none'
    }
})
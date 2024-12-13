const navToggleIconEl = document.querySelector('#nav_toggle_div');
const navLinksEl = document.querySelector('#nav_links');

navToggleIconEl.addEventListener('click', () => {
    navLinksEl.classList.toggle('nav_active');
})
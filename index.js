const sideBar = document.querySelector('.side-bar');
const navLinks = document.querySelector('.nav-links');
const close = document.querySelector('.close');

sideBar.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    sideBar.style.display = sideBar.style.display = "none";
    close.style.display = "inline";
});

close.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'flex';
    sideBar.style.display = 'inline';
    close.style.display = 'none';
});
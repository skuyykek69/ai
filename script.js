// Dark Mode Toggle
const toggle = document.getElementById('themeToggle');
if(localStorage.theme === 'dark') document.body.classList.add('dark');

toggle.onclick = () => {
    document.body.classList.toggle('dark');
    localStorage.theme = document.body.classList.contains('dark') ? 'dark' : 'light';
};

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
hamburger.onclick = () => menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
menu.querySelectorAll('a').forEach(a => {
    a.onclick = () => menu.style.display = 'none';
});

// Modal Popup
const modal = document.getElementById('modal');
function openModal() { modal.style.display = 'flex'; }
function closeModal() { modal.style.display = 'none'; }

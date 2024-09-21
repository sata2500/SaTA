// Menü açma/kapama işlevi
const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

menuToggle.addEventListener('click', () => {
    menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
});

// Tema değiştirme işlevi
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
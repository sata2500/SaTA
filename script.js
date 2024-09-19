document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger-menu').addEventListener('click', function() {
        var menu = document.querySelector('.desktop-menu ul');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
    });
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').style.display = 
        document.querySelector('nav ul').style.display === 'flex' ? 'none' : 'flex';
});
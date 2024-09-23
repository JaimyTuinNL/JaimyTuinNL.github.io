// Hamburger menu all pages
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav > ul').classList.toggle('open');
});

document.querySelectorAll('nav > ul > li > a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('nav > ul').classList.remove('open');
    });
});
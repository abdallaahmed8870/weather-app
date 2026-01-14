window.onscroll = function() {
    const navbar = document.getElementById('nav-bar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.remove('transparent');
        navbar.classList.add('white');
    } else {
        navbar.classList.remove('white');
        navbar.classList.add('transparent');
    }
};
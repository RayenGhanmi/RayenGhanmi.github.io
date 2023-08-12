function scrollToSection(e,t){e.preventDefault();var n=document.getElementById(t);n.scrollIntoView({behavior:"smooth",block:"start"})}
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
      navbar.classList.add('hide-navbar');
    } else {
      navbar.classList.remove('hide-navbar');
      navbar.classList.add('show-navbar');
      setTimeout(function() {
        navbar.classList.remove('show-navbar');
      }, 300);
    }
  });
(function () {
  'use strict';
  document.documentElement.classList.add('has-js');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    var compact = window.matchMedia('(max-width: 1180px)');
    function setOpen(open, restoreFocus) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      if (restoreFocus) toggle.focus();
    }
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'), false);
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false, false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false, true);
      }
    });
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        setOpen(false, false);
      }
    });
    document.addEventListener('focusin', function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        setOpen(false, false);
      }
    });
    function resetMenu() { setOpen(false, false); }
    if (compact.addEventListener) compact.addEventListener('change', resetMenu);
    else compact.addListener(resetMenu);
    setOpen(false, false);
  }
  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
})();

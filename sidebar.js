(function () {

  var mount = document.getElementById('sidebar-mount');
  if (!mount) return;

  // Derive the site root from sidebar.js's own URL so asset paths work
  // regardless of whether the site is deployed at / or /repo-name/
  var _root = (function () {
    var s = document.currentScript;
    if (!s) return './';
    return s.src.substring(0, s.src.lastIndexOf('/') + 1);
  })();

  function asset(path) { return _root + path; }

  mount.innerHTML = `
<aside class="sidebar">

  <div class="sidebar__header"></div>

  <div class="acid-band">
    <div class="acid-band__ticker">
      <span class="acid-band__label">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="">
      <span class="acid-band__label">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="">
      <span class="acid-band__label">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="">
      <span class="acid-band__label">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="">
      <span class="acid-band__label">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="">
      <span class="acid-band__label">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="">
      <span class="acid-band__label" aria-hidden="true">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="" aria-hidden="true">
      <span class="acid-band__label" aria-hidden="true">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="" aria-hidden="true">
      <span class="acid-band__label" aria-hidden="true">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="" aria-hidden="true">
      <span class="acid-band__label" aria-hidden="true">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="" aria-hidden="true">
      <span class="acid-band__label" aria-hidden="true">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="" aria-hidden="true">
      <span class="acid-band__label" aria-hidden="true">AXEL DADURE</span>
      <img class="acid-band__sep" src="${asset('assets/img/CROSS_BLACK.svg')}" width="16" height="16" alt="" aria-hidden="true">
    </div>
  </div>

  <div class="sidebar__body">

    <div class="sidebar__dot-row">
      <div class="dot-row__left dot-grid"></div>
      <div class="dot-row__right">
        <img src="${asset('assets/img/NAV_DOTS.svg')}" alt="" class="dot-row__pattern">
        <img src="${asset('assets/img/PLUS_PK.svg')}" alt="" class="dot-row__plus-pk">
      </div>
    </div>

    <nav class="sidebar__nav" aria-label="Navigation principale">
      <a href="${_root}#accueil" class="nav-link">
        <span class="nav-link__plus"></span>
        <span>accueil</span>
      </a>
      <a href="${_root}#projets" class="nav-link">
        <span class="nav-link__plus"></span>
        <span>projets</span>
      </a>
      <a href="${_root}#a-propos" class="nav-link">
        <span class="nav-link__plus"></span>
        <span>à propos</span>
      </a>
    </nav>

    <div class="sidebar__spacer"></div>

    <footer class="sidebar__footer">
      <div class="sidebar__social">
        <a href="#" class="social-icon" aria-label="LinkedIn">
          <span class="social-icon__img social-icon__img--linkedin"></span>
        </a>
        <div class="social-rule"></div>
        <a href="#" class="social-icon" aria-label="Instagram">
          <span class="social-icon__img social-icon__img--insta"></span>
        </a>
      </div>
      <div class="sidebar__meta">
        <span class="meta-code">MX23/961406</span>
        <div class="meta-rule"></div>
        <span class="meta-year">2026</span>
      </div>
      <div class="sidebar__barcode">
        <img src="${asset('assets/img/NAV_BARCODE.svg')}" alt="" class="barcode-img">
      </div>
    </footer>

  </div>
</aside>`;

  // Boot animation
  function rand(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }
  var delay = rand(300, 800);
  document.querySelector('.sidebar').style.setProperty('--boot-delay', delay + 'ms');
  Array.from(document.querySelectorAll('.nav-link')).forEach(function (el, i) {
    el.style.setProperty('--boot-delay', (delay + 500 + i * 200) + 'ms');
  });

})();

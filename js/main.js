/* ============================================================
   A REINO — interações
   ============================================================ */
(function () {
  "use strict";

  /* Header background on scroll (skip on pages já marcadas .scrolled fixo) */
  var header = document.getElementById("siteHeader");
  var lockScrolled = header && header.classList.contains("scrolled");
  function onScroll() {
    if (!header || lockScrolled) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  function closeMenu() {
    if (!links || !toggle) return;
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* Visit form (front-end demo) */
  var form = document.getElementById("visitForm");
  var feedback = document.getElementById("formFeedback");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var email = form.email.value.trim();
      if (!nome || !email) {
        feedback.style.color = "#b3402f";
        feedback.textContent = "Ei, preenche nome e e-mail pra gente te encontrar.";
        return;
      }
      feedback.style.color = "";
      feedback.textContent =
        "Show, " + nome.split(" ")[0] + "! Recebemos aqui. Nos vemos em breve. 🙌";
      form.reset();
    });
  }

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Declaração — destaque do item ativo no índice */
  var tocLinks = document.querySelectorAll(".fe-toc a");
  var artigos = document.querySelectorAll(".artigo");
  if (tocLinks.length && artigos.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) {
      map[a.getAttribute("href").slice(1)] = a;
    });
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            tocLinks.forEach(function (a) { a.style.color = ""; a.style.fontWeight = ""; });
            var active = map[e.target.id];
            if (active) { active.style.color = "#141414"; active.style.fontWeight = "600"; }
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    artigos.forEach(function (a) { spy.observe(a); });
  }
})();

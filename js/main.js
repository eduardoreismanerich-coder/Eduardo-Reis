/* ============================================================
   A REINO — interações + motion
   Sistema de motion inspirado em sites cinemáticos (easing expo,
   reveals mascarados, parallax, marquee), em JS/CSS puro.
   ============================================================ */
(function () {
  "use strict";

  document.documentElement.classList.add("js");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header: fundo no scroll + esconde ao descer ---------- */
  var header = document.getElementById("siteHeader");
  var lockScrolled = header && header.classList.contains("scrolled");
  var lastY = window.scrollY;
  function onScroll() {
    if (!header) return;
    if (!lockScrolled) header.classList.toggle("scrolled", window.scrollY > 20);
    if (!reduced) {
      var y = window.scrollY;
      if (y > lastY && y > 320) header.classList.add("hidden");
      else header.classList.remove("hidden");
      lastY = y;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Nav mobile ---------- */
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

  /* ---------- Split de texto: palavras mascaradas (rise) ---------- */
  function splitWords(el) {
    if (reduced || el.dataset.splitDone) return;
    el.dataset.splitDone = "1";
    var idx = 0;
    function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var parts = child.textContent.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var w = document.createElement("span");
            w.className = "w";
            var wi = document.createElement("span");
            wi.className = "wi";
            wi.textContent = part;
            wi.style.transitionDelay = Math.min(idx * 55, 660) + "ms";
            w.appendChild(wi);
            frag.appendChild(w);
            idx++;
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== "BR") {
          walk(child);
        }
      });
    }
    walk(el);
    el.classList.add("split");
  }
  document
    .querySelectorAll(".hero-title, .hero-tagline, .h2, .journey-en, .fe-hero h1")
    .forEach(splitWords);

  /* ---------- Reveals no scroll (fade-up, split, clip) ---------- */
  document.querySelectorAll(".artigo, .fe-part-head, .fe-prologo .cols p").forEach(function (el) {
    el.classList.add("reveal");
  });
  var fachada = document.querySelector(".fachada-band");
  if (fachada) fachada.classList.add("clip-reveal");
  var lid = document.querySelector(".lid-photo");
  if (lid) lid.classList.add("clip-reveal");

  /* stagger automático em grades */
  [".manifesto-grid", ".journey-grid", ".gallery", ".msg-grid", ".conecte-grid", ".times-grid", ".pillars", ".ev-list"].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (grid) {
      Array.prototype.slice.call(grid.children).forEach(function (child, i) {
        child.style.transitionDelay = Math.min(i * 110, 550) + "ms";
      });
    });
  });

  var toReveal = document.querySelectorAll(".reveal, .split, .clip-reveal");
  if ("IntersectionObserver" in window && toReveal.length && !reduced) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible", "in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    toReveal.forEach(function (el) { io.observe(el); });
  } else {
    toReveal.forEach(function (el) { el.classList.add("visible", "in"); });
  }

  /* ---------- Sequência de entrada do hero ---------- */
  var arcs = document.querySelectorAll(".hero-arcs path");
  arcs.forEach(function (p) { p.setAttribute("pathLength", "1"); });
  if (!reduced) {
    var heroSeq = document.querySelectorAll(".hero-eyebrow, .hero-sub, .hero-actions, .hero-times, .hero-scroll");
    heroSeq.forEach(function (el, i) {
      el.classList.add("h-pre");
      el.style.transitionDelay = (380 + i * 140) + "ms";
    });
  }
  window.addEventListener("load", function () {
    requestAnimationFrame(function () {
      document.body.classList.add("loaded");
      var heroSplits = document.querySelectorAll(".hero .split");
      heroSplits.forEach(function (el) { el.classList.add("in"); });
    });
  });

  /* ---------- Marquee (ticker) nas faixas de palavras ---------- */
  document.querySelectorAll(".wordband").forEach(function (band) {
    if (reduced) return;
    var text = Array.prototype.map
      .call(band.querySelectorAll("span"), function (s) { return s.textContent; })
      .join(" ");
    if (!text) return;
    band.classList.add("marquee");
    band.innerHTML = "";
    var track = document.createElement("div");
    track.className = "marquee-track";
    for (var i = 0; i < 2; i++) {
      var half = document.createElement("div");
      half.className = "marquee-half";
      for (var j = 0; j < 4; j++) {
        var item = document.createElement("span");
        item.textContent = text;
        half.appendChild(item);
        var dot = document.createElement("i");
        dot.textContent = "·";
        half.appendChild(dot);
      }
      track.appendChild(half);
    }
    band.appendChild(track);
  });

  /* ---------- Botões: label desliza no hover ---------- */
  document.querySelectorAll(".btn").forEach(function (btn) {
    if (btn.querySelector(".bl") || btn.children.length > 0 && btn.textContent.trim() === "") return;
    var text = btn.textContent.trim();
    if (!text) return;
    btn.textContent = "";
    var bl = document.createElement("span");
    bl.className = "bl";
    var a = document.createElement("span"); a.textContent = text;
    var b = document.createElement("span"); b.textContent = text; b.setAttribute("aria-hidden", "true");
    bl.appendChild(a); bl.appendChild(b);
    btn.appendChild(bl);
  });

  /* ---------- Parallax suave (rAF) ---------- */
  var plxEls = [];
  document.querySelectorAll(".gphoto img").forEach(function (img) { plxEls.push({ el: img, f: 22, s: 1.12 }); });
  var lidImg = document.querySelector(".lid-photo img");
  if (lidImg) plxEls.push({ el: lidImg, f: 18, s: 1.08 });
  var fachImg = document.querySelector(".fachada-band img");
  if (fachImg) plxEls.push({ el: fachImg, f: 12, s: 1.05 });

  /* hero scroll-out: afasta, esmaece e desfoca ao rolar (Apple) */
  var heroMain = document.querySelector(".hero-main");
  var heroArcsEl = document.querySelector(".hero-arcs");

  if ((plxEls.length || heroMain) && !reduced) {
    var ticking = false;
    function plx() {
      var vh = window.innerHeight;
      plxEls.forEach(function (o) {
        var r = o.el.getBoundingClientRect();
        if (r.bottom < -80 || r.top > vh + 80) return;
        var c = (r.top + r.height / 2 - vh / 2) / vh; // -0.5 .. 0.5
        o.el.style.transform = "translateY(" + (-c * o.f).toFixed(1) + "px) scale(" + o.s + ")";
      });
      if (heroMain && document.body.classList.contains("loaded")) {
        var p = Math.min(Math.max(window.scrollY / (vh * 0.9), 0), 1);
        heroMain.style.transform = "translateY(" + (-p * 60).toFixed(1) + "px) scale(" + (1 - p * 0.06).toFixed(4) + ")";
        heroMain.style.opacity = (1 - p * 1.15).toFixed(3);
        heroMain.style.filter = "blur(" + (p * 10).toFixed(1) + "px)";
        if (heroArcsEl) {
          heroArcsEl.style.transform = "translateY(calc(-50% + " + (p * 90).toFixed(1) + "px))";
          heroArcsEl.style.opacity = (1 - p).toFixed(3);
        }
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(plx); }
    }, { passive: true });
    plx();
  }

  /* ---------- Botões magnéticos (Apple-like) ---------- */
  if (!reduced && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".btn, .nav-cta").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        var dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        btn.style.transform = "translate(" + (dx * 7).toFixed(1) + "px, " + (dy * 5).toFixed(1) + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* ---------- Formulário de visita (front-end) ---------- */
  var form = document.getElementById("visitForm");
  var feedback = document.getElementById("formFeedback");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var email = form.email.value.trim();
      if (!nome || !email) {
        feedback.style.color = "#b3402f";
        feedback.textContent = "Preencha nome e e-mail para a gente te encontrar.";
        return;
      }
      feedback.style.color = "";
      feedback.textContent = "Recebido, " + nome.split(" ")[0] + "! Nos vemos em breve.";
      form.reset();
    });
  }

  /* ---------- Ano do rodapé ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Declaração: destaque do item ativo no índice ---------- */
  var tocLinks = document.querySelectorAll(".fe-toc a");
  var artigos = document.querySelectorAll(".artigo");
  if (tocLinks.length && artigos.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
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

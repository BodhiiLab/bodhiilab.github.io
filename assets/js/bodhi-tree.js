/* BODHI Lab mark: a bodhi tree whose trunk is a revolving DNA double helix.
   Usage in the browser: BodhiTree.mount(svgElement)
   Usage in node:        require('./bodhi-tree.js').svgString('light') */
(function (root) {
  var W = 340, H = 400, CX = 170, TOP = 262, BASE = 366;

  var THEMES = {
    light: {
      wood: '#1B2A4E', a: '#1B2A4E', b: '#E9A94A', rung: '#4A7C59',
      halo: '#E9A94A', haloOp: 0.10,
      leaves: ['#E9A94A', '#D9912F', '#4A7C59', '#6E9C78']
    },
    dark: {
      wood: '#E9A94A', a: '#E9A94A', b: '#F7F3E9', rung: '#7FAF8B',
      halo: '#4A6199', haloOp: 0.28,
      leaves: ['#E9A94A', '#F2C77E', '#4A7C59', '#F7F3E9']
    }
  };

  function rng(s) { return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
  function f(n) { return n.toFixed(1); }

  function leaf(x, y, deg, s, c) {
    return '<path transform="translate(' + f(x) + ' ' + f(y) + ') rotate(' + f(deg) + ') scale(' + s.toFixed(2) + ')" ' +
      'd="M0 0 C-7 -2 -8 -11 -3 -14 C-1 -15 0 -17 0 -21 C0 -17 1 -15 3 -14 C8 -11 7 -2 0 0 Z" fill="' + c + '"/>';
  }

  /* Static parts: halo, branches, roots, leaves. Deterministic (seeded). */
  function staticParts(t) {
    var r = rng(23), P = [], L = [];
    P.push('<circle cx="' + CX + '" cy="172" r="130" fill="' + t.halo + '" opacity="' + t.haloOp + '"/>');
    P.push('<circle cx="' + CX + '" cy="172" r="94" fill="' + t.halo + '" opacity="' + (t.haloOp * 0.8).toFixed(3) + '"/>');
    function br(x, y, a, len, d, w) {
      a = Math.max(-1.75, Math.min(1.75, a));
      var ex = x + Math.sin(a) * len, ey = y - Math.cos(a) * len;
      var mx = (x + ex) / 2 + (r() - 0.5) * len * 0.2, my = (y + ey) / 2;
      P.push('<path d="M' + f(x) + ' ' + f(y) + ' Q' + f(mx) + ' ' + f(my) + ' ' + f(ex) + ' ' + f(ey) +
        '" stroke="' + t.wood + '" stroke-width="' + w.toFixed(2) + '" fill="none" stroke-linecap="round"/>');
      if (d === 0) {
        for (var k = 0; k < 2; k++) {
          L.push(leaf(ex + (r() - 0.5) * 8, ey + (r() - 0.5) * 8, a * 57.3 + (k ? 1 : -1) * (20 + r() * 35),
            1.05 + r() * 0.25, t.leaves[Math.floor(r() * t.leaves.length)]));
        }
      } else {
        for (var i = 0; i < 2; i++) br(ex, ey, a + (i ? 1 : -1) * 0.34 + (r() - 0.5) * 0.2, len * 0.74, d - 1, w * 0.64);
        if (d === 1) L.push(leaf(ex, ey, a * 57.3, 1.0, t.leaves[Math.floor(r() * t.leaves.length)]));
      }
    }
    [-1.15, -0.58, 0, 0.58, 1.15].forEach(function (a) { br(CX, TOP, a, a === 0 ? 52 : 46, 3, 5.5); });
    [[5, 24, 58, 378, 385, 2.6], [2, 12, 30, 382, 391, 2], [9, 44, 92, 371, 381, 1.8]].forEach(function (q) {
      [-1, 1].forEach(function (k) {
        P.push('<path d="M' + (CX + k * q[0]) + ' ' + (BASE - 2) + ' Q' + (CX + k * q[1]) + ' ' + q[3] + ' ' + (CX + k * q[2]) + ' ' + q[4] +
          '" stroke="' + t.wood + '" stroke-width="' + q[5] + '" fill="none" stroke-linecap="round"/>');
      });
    });
    P.push('<ellipse cx="' + CX + '" cy="391" rx="110" ry="4" fill="' + t.wood + '" opacity="0.14"/>');
    P.push('<path d="M' + (CX - 16) + ' ' + (BASE + 2) + ' C' + (CX - 9) + ' 322 ' + (CX - 6) + ' 292 ' + (CX - 4) + ' ' + TOP +
      ' L' + (CX + 4) + ' ' + TOP + ' C' + (CX + 6) + ' 292 ' + (CX + 9) + ' 322 ' + (CX + 16) + ' ' + (BASE + 2) + ' Z" fill="' + t.wood + '" opacity="0.1"/>');
    return { back: P.join(''), leaves: L.join('') };
  }

  /* The revolving helix trunk for a given phase. */
  function helix(t, ph) {
    var N = 36, k = 0.115, segs = [], rungs = [];
    function amp(y) { return 4 + (y - TOP) / (BASE - TOP) * 8; }
    function wid(y) { return 1.6 + (y - TOP) / (BASE - TOP) * 2.2; }
    function pt(y, s) { var q = k * y + ph + s; return { x: CX + amp(y) * Math.sin(q), z: Math.cos(q) }; }
    for (var i = 0; i < N; i++) {
      var y1 = TOP + (BASE - TOP) * i / N, y2 = TOP + (BASE - TOP) * (i + 1) / N;
      [[0, t.a], [Math.PI, t.b]].forEach(function (sc) {
        var p = pt(y1, sc[0]), q = pt(y2, sc[0]), depth = (p.z + 1) / 2;
        segs.push({ z: (p.z + q.z) / 2, d: '<line x1="' + p.x.toFixed(2) + '" y1="' + f(y1) + '" x2="' + q.x.toFixed(2) + '" y2="' + f(y2) +
          '" stroke="' + sc[1] + '" stroke-width="' + (wid(y1) * (0.75 + 0.25 * depth)).toFixed(2) +
          '" stroke-linecap="round" opacity="' + (0.35 + 0.65 * depth).toFixed(2) + '"/>' });
      });
    }
    for (var y = TOP + 8; y < BASE - 4; y += 9) {
      var a = pt(y, 0), b = pt(y, Math.PI);
      rungs.push('<line x1="' + a.x.toFixed(2) + '" y1="' + y + '" x2="' + b.x.toFixed(2) + '" y2="' + y + '" stroke="' + t.rung + '" stroke-width="1.1" opacity="0.7"/>');
    }
    segs.sort(function (u, v) { return u.z - v.z; });
    return rungs.join('') + segs.map(function (s) { return s.d; }).join('');
  }

  function svgString(themeName, phase) {
    var t = THEMES[themeName] || THEMES.light, s = staticParts(t);
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="BODHI Lab tree mark">' +
      s.back + '<g>' + helix(t, phase || 0.6) + '</g>' + s.leaves + '</svg>';
  }

  /* Browser: render into an <svg>, follow light/dark mode, animate while visible. */
  function mount(svg) {
    var dark = root.matchMedia ? root.matchMedia('(prefers-color-scheme: dark)') : null;
    var still = root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var g, t, ph = 0.6, visible = true, raf = null;
    function paint() {
      var forced = document.documentElement.getAttribute('data-theme');
      var name = forced || (dark && dark.matches ? 'dark' : 'light');
      t = THEMES[name];
      var s = staticParts(t);
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.innerHTML = s.back + '<g class="helix"></g>' + s.leaves;
      g = svg.querySelector('.helix');
      g.innerHTML = helix(t, ph);
    }
    function loop() {
      raf = null;
      if (!visible || still) return;
      ph += 0.03;
      g.innerHTML = helix(t, ph);
      raf = root.requestAnimationFrame(loop);
    }
    function start() { if (!raf && visible && !still) raf = root.requestAnimationFrame(loop); }
    paint(); start();
    if (dark && dark.addEventListener) dark.addEventListener('change', function () { paint(); });
    root.addEventListener('bodhi-theme', function () { paint(); });
    if ('IntersectionObserver' in root) {
      new IntersectionObserver(function (e) { visible = e[0].isIntersecting; if (visible) start(); }).observe(svg);
    }
  }

  var api = { mount: mount, svgString: svgString, themes: THEMES };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.BodhiTree = api;
})(typeof window !== 'undefined' ? window : this);

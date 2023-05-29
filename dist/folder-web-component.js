function S() {
}
function he(t) {
  return t();
}
function me() {
  return /* @__PURE__ */ Object.create(null);
}
function P(t) {
  t.forEach(he);
}
function de(t) {
  return typeof t == "function";
}
function Be(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Pe(t) {
  return Object.keys(t).length === 0;
}
function Ge(t, ...e) {
  if (t == null)
    return S;
  const l = t.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function x(t, e, l) {
  t.$$.on_destroy.push(Ge(e, l));
}
const Je = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in Je;
function a(t, e) {
  t.appendChild(e);
}
function m(t, e, l) {
  t.insertBefore(e, l || null);
}
function b(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function I(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function _(t) {
  return document.createElement(t);
}
function M(t) {
  return document.createTextNode(t);
}
function C() {
  return M(" ");
}
function X() {
  return M("");
}
function q(t, e, l, n) {
  return t.addEventListener(e, l, n), () => t.removeEventListener(e, l, n);
}
function ne(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function Ke(t) {
  return Array.from(t.childNodes);
}
function Y(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function be(t, e) {
  t.value = e ?? "";
}
function B(t, e, l) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!l || e !== void 0) && (t.selectedIndex = -1);
}
function oe(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Qe(t) {
  const e = {};
  for (const l of t)
    e[l.name] = l.value;
  return e;
}
let Q;
function K(t) {
  Q = t;
}
function Xe() {
  if (!Q)
    throw new Error("Function called outside component initialization");
  return Q;
}
function Ye(t) {
  Xe().$$.on_mount.push(t);
}
const O = [], ge = [];
let z = [];
const ke = [], Ze = /* @__PURE__ */ Promise.resolve();
let ae = !1;
function xe() {
  ae || (ae = !0, Ze.then(le));
}
function W(t) {
  z.push(t);
}
const ue = /* @__PURE__ */ new Set();
let D = 0;
function le() {
  if (D !== 0)
    return;
  const t = Q;
  do {
    try {
      for (; D < O.length; ) {
        const e = O[D];
        D++, K(e), et(e.$$);
      }
    } catch (e) {
      throw O.length = 0, D = 0, e;
    }
    for (K(null), O.length = 0, D = 0; ge.length; )
      ge.pop()();
    for (let e = 0; e < z.length; e += 1) {
      const l = z[e];
      ue.has(l) || (ue.add(l), l());
    }
    z.length = 0;
  } while (O.length);
  for (; ke.length; )
    ke.pop()();
  ae = !1, ue.clear(), K(t);
}
function et(t) {
  if (t.fragment !== null) {
    t.update(), P(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(W);
  }
}
function tt(t) {
  const e = [], l = [];
  z.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : l.push(n)), l.forEach((n) => n()), z = e;
}
const lt = /* @__PURE__ */ new Set();
function nt(t, e) {
  t && t.i && (lt.delete(t), t.i(e));
}
const it = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...it];
function ot(t, e, l, n) {
  const { fragment: i, after_update: u } = t.$$;
  i && i.m(e, l), n || W(() => {
    const o = t.$$.on_mount.map(he).filter(de);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : P(o), t.$$.on_mount = [];
  }), u.forEach(W);
}
function ut(t, e) {
  const l = t.$$;
  l.fragment !== null && (tt(l.after_update), P(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function rt(t, e) {
  t.$$.dirty[0] === -1 && (O.push(t), xe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ct(t, e, l, n, i, u, o, r = [-1]) {
  const f = Q;
  K(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: S,
    not_equal: i,
    bound: me(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: me(),
    dirty: r,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  o && o(c.root);
  let d = !1;
  if (c.ctx = l ? l(t, e.props || {}, (s, h, ...p) => {
    const N = p.length ? p[0] : h;
    return c.ctx && i(c.ctx[s], c.ctx[s] = N) && (!c.skip_bound && c.bound[s] && c.bound[s](N), d && rt(t, s)), h;
  }) : [], c.update(), d = !0, P(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const s = Ke(e.target);
      c.fragment && c.fragment.l(s), s.forEach(b);
    } else
      c.fragment && c.fragment.c();
    e.intro && nt(t.$$.fragment), ot(t, e.target, e.anchor, e.customElement), le();
  }
  K(f);
}
let We;
typeof HTMLElement == "function" && (We = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(he).filter(de);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, l) {
    this[t] = l;
  }
  disconnectedCallback() {
    P(this.$$.on_disconnect);
  }
  $destroy() {
    ut(this, 1), this.$destroy = S;
  }
  $on(t, e) {
    if (!de(e))
      return S;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(e), () => {
      const n = l.indexOf(e);
      n !== -1 && l.splice(n, 1);
    };
  }
  $set(t) {
    this.$$set && !Pe(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
let ee;
const ft = new Uint8Array(16);
function st() {
  if (!ee && (ee = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ee))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ee(ft);
}
const y = [];
for (let t = 0; t < 256; ++t)
  y.push((t + 256).toString(16).slice(1));
function dt(t, e = 0) {
  return (y[t[e + 0]] + y[t[e + 1]] + y[t[e + 2]] + y[t[e + 3]] + "-" + y[t[e + 4]] + y[t[e + 5]] + "-" + y[t[e + 6]] + y[t[e + 7]] + "-" + y[t[e + 8]] + y[t[e + 9]] + "-" + y[t[e + 10]] + y[t[e + 11]] + y[t[e + 12]] + y[t[e + 13]] + y[t[e + 14]] + y[t[e + 15]]).toLowerCase();
}
const at = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ve = {
  randomUUID: at
};
function re(t, e, l) {
  if (ve.randomUUID && !e && !t)
    return ve.randomUUID();
  t = t || {};
  const n = t.random || (t.rng || st)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    l = l || 0;
    for (let i = 0; i < 16; ++i)
      e[l + i] = n[i];
    return e;
  }
  return dt(n);
}
const V = [];
function ie(t, e = S) {
  let l;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (Be(t, r) && (t = r, l)) {
      const f = !V.length;
      for (const c of n)
        c[1](), V.push(c, t);
      if (f) {
        for (let c = 0; c < V.length; c += 2)
          V[c][0](V[c + 1]);
        V.length = 0;
      }
    }
  }
  function u(r) {
    i(r(t));
  }
  function o(r, f = S) {
    const c = [r, f];
    return n.add(c), n.size === 1 && (l = e(i) || S), r(t), () => {
      n.delete(c), n.size === 0 && l && (l(), l = null);
    };
  }
  return { set: i, update: u, subscribe: o };
}
const ce = ie(""), te = ie([]), fe = ie(null), se = ie(null);
function ye(t, e, l) {
  const n = t.slice();
  return n[18] = e[l], n;
}
function we(t, e, l) {
  const n = t.slice();
  return n[21] = e[l], n;
}
function $e(t, e, l) {
  const n = t.slice();
  return n[24] = e[l], n;
}
function Fe(t, e, l) {
  const n = t.slice();
  return n[18] = e[l], n;
}
function Ee(t, e, l) {
  const n = t.slice();
  return n[18] = e[l], n;
}
function Ce(t, e, l) {
  const n = t.slice();
  return n[24] = e[l], n;
}
function Se(t, e, l) {
  const n = t.slice();
  return n[33] = e[l], n;
}
function _t(t) {
  let e;
  return {
    c() {
      e = M("User is not authenticated!");
    },
    m(l, n) {
      m(l, e, n);
    },
    p: S,
    d(l) {
      l && b(e);
    }
  };
}
function ht(t) {
  let e, l, n = (
    /*showForm*/
    t[2] && Ne(t)
  ), i = !/*showForm*/
  t[2] && Ie(t);
  return {
    c() {
      n && n.c(), e = C(), l = _("div"), i && i.c(), ne(l, "id", "showHierarchy");
    },
    m(u, o) {
      n && n.m(u, o), m(u, e, o), m(u, l, o), i && i.m(l, null);
    },
    p(u, o) {
      /*showForm*/
      u[2] ? n ? n.p(u, o) : (n = Ne(u), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), /*showForm*/
      u[2] ? i && (i.d(1), i = null) : i ? i.p(u, o) : (i = Ie(u), i.c(), i.m(l, null));
    },
    d(u) {
      n && n.d(u), u && b(e), u && b(l), i && i.d();
    }
  };
}
function Ne(t) {
  let e, l, n, i, u, o, r, f, c, d, s, h, p, N, R, G, H, J, j, Z, k, w, T, L, U = (
    /*types*/
    t[7]
  ), $ = [];
  for (let g = 0; g < U.length; g += 1)
    $[g] = Te(Se(t, U, g));
  let F = (
    /*$selectedType*/
    t[5] === "File" && Le(t)
  ), E = (
    /*$selectedType*/
    t[5] === "Folder" && He(t)
  );
  return {
    c() {
      e = _("form"), l = _("table"), n = _("tr"), i = _("td"), i.innerHTML = '<label for="fileName">File/Folder Name:</label>', u = C(), o = _("td"), r = _("input"), f = C(), c = _("tr"), d = _("td"), d.innerHTML = '<label for="type">Type:</label>', s = C(), h = _("td"), p = _("select");
      for (let g = 0; g < $.length; g += 1)
        $[g].c();
      N = C(), F && F.c(), R = C(), E && E.c(), G = C(), H = _("tr"), J = _("td"), j = _("button"), j.textContent = "Save", Z = C(), k = _("td"), w = _("button"), w.textContent = "Cancel", r.required = !0, ne(r, "placeholder", "Enter File/Folder Name"), p.required = !0, /*$selectedType*/
      t[5] === void 0 && W(() => (
        /*select_change_handler*/
        t[12].call(p)
      ));
    },
    m(g, A) {
      m(g, e, A), a(e, l), a(l, n), a(n, i), a(n, u), a(n, o), a(o, r), be(
        r,
        /*name*/
        t[1]
      ), a(l, f), a(l, c), a(c, d), a(c, s), a(c, h), a(h, p);
      for (let v = 0; v < $.length; v += 1)
        $[v] && $[v].m(p, null);
      B(
        p,
        /*$selectedType*/
        t[5],
        !0
      ), a(l, N), F && F.m(l, null), a(l, R), E && E.m(l, null), a(l, G), a(l, H), a(H, J), a(J, j), a(H, Z), a(H, k), a(k, w), T || (L = [
        q(
          r,
          "input",
          /*input_input_handler*/
          t[11]
        ),
        q(
          p,
          "change",
          /*select_change_handler*/
          t[12]
        ),
        q(
          j,
          "click",
          /*onSave*/
          t[8]
        ),
        q(
          w,
          "click",
          /*onCancel*/
          t[9]
        )
      ], T = !0);
    },
    p(g, A) {
      if (A[0] & /*name*/
      2 && r.value !== /*name*/
      g[1] && be(
        r,
        /*name*/
        g[1]
      ), A[0] & /*types*/
      128) {
        U = /*types*/
        g[7];
        let v;
        for (v = 0; v < U.length; v += 1) {
          const pe = Se(g, U, v);
          $[v] ? $[v].p(pe, A) : ($[v] = Te(pe), $[v].c(), $[v].m(p, null));
        }
        for (; v < $.length; v += 1)
          $[v].d(1);
        $.length = U.length;
      }
      A[0] & /*$selectedType, types*/
      160 && B(
        p,
        /*$selectedType*/
        g[5]
      ), /*$selectedType*/
      g[5] === "File" ? F ? F.p(g, A) : (F = Le(g), F.c(), F.m(l, R)) : F && (F.d(1), F = null), /*$selectedType*/
      g[5] === "Folder" ? E ? E.p(g, A) : (E = He(g), E.c(), E.m(l, G)) : E && (E.d(1), E = null);
    },
    d(g) {
      g && b(e), I($, g), F && F.d(), E && E.d(), T = !1, P(L);
    }
  };
}
function Te(t) {
  let e, l = (
    /*type*/
    t[33] + ""
  ), n;
  return {
    c() {
      e = _("option"), n = M(l), e.__value = /*type*/
      t[33], e.value = e.__value;
    },
    m(i, u) {
      m(i, e, u), a(e, n);
    },
    p: S,
    d(i) {
      i && b(e);
    }
  };
}
function Le(t) {
  let e, l, n, i, u, o, r, f = (
    /*$folders*/
    t[6]
  ), c = [];
  for (let d = 0; d < f.length; d += 1)
    c[d] = Ae(Ee(t, f, d));
  return {
    c() {
      e = _("tr"), l = _("td"), l.innerHTML = '<label for="folder">Select Folder:</label>', n = C(), i = _("td"), u = _("select");
      for (let d = 0; d < c.length; d += 1)
        c[d].c();
      /*$selectedFolder*/
      t[3] === void 0 && W(() => (
        /*select_change_handler_1*/
        t[13].call(u)
      ));
    },
    m(d, s) {
      m(d, e, s), a(e, l), a(e, n), a(e, i), a(i, u);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(u, null);
      B(
        u,
        /*$selectedFolder*/
        t[3],
        !0
      ), o || (r = q(
        u,
        "change",
        /*select_change_handler_1*/
        t[13]
      ), o = !0);
    },
    p(d, s) {
      if (s[0] & /*$folders*/
      64) {
        f = /*$folders*/
        d[6];
        let h;
        for (h = 0; h < f.length; h += 1) {
          const p = Ee(d, f, h);
          c[h] ? c[h].p(p, s) : (c[h] = Ae(p), c[h].c(), c[h].m(u, null));
        }
        for (; h < c.length; h += 1)
          c[h].d(1);
        c.length = f.length;
      }
      s[0] & /*$selectedFolder, $folders*/
      72 && B(
        u,
        /*$selectedFolder*/
        d[3]
      );
    },
    d(d) {
      d && b(e), I(c, d), o = !1, r();
    }
  };
}
function Ue(t) {
  let e, l = (
    /*folder*/
    t[18].files
  ), n = [];
  for (let i = 0; i < l.length; i += 1)
    n[i] = Re(Ce(t, l, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = X();
    },
    m(i, u) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, u);
      m(i, e, u);
    },
    p(i, u) {
      if (u[0] & /*$folders*/
      64) {
        l = /*folder*/
        i[18].files;
        let o;
        for (o = 0; o < l.length; o += 1) {
          const r = Ce(i, l, o);
          n[o] ? n[o].p(r, u) : (n[o] = Re(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = l.length;
      }
    },
    d(i) {
      I(n, i), i && b(e);
    }
  };
}
function Me(t) {
  let e, l = (
    /*file*/
    t[24].name + ""
  ), n, i;
  return {
    c() {
      e = _("option"), n = M(l), e.__value = i = /*file*/
      t[24], e.value = e.__value;
    },
    m(u, o) {
      m(u, e, o), a(e, n);
    },
    p(u, o) {
      o[0] & /*$folders*/
      64 && l !== (l = /*file*/
      u[24].name + "") && Y(n, l), o[0] & /*$folders*/
      64 && i !== (i = /*file*/
      u[24]) && (e.__value = i, e.value = e.__value);
    },
    d(u) {
      u && b(e);
    }
  };
}
function Re(t) {
  let e, l = (
    /*file*/
    t[24].type === "folder" && Me(t)
  );
  return {
    c() {
      l && l.c(), e = X();
    },
    m(n, i) {
      l && l.m(n, i), m(n, e, i);
    },
    p(n, i) {
      /*file*/
      n[24].type === "folder" ? l ? l.p(n, i) : (l = Me(n), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null);
    },
    d(n) {
      l && l.d(n), n && b(e);
    }
  };
}
function Ae(t) {
  let e, l = (
    /*folder*/
    t[18].name + ""
  ), n, i, u, o = (
    /*folder*/
    t[18].files && Ue(t)
  );
  return {
    c() {
      e = _("option"), n = M(l), o && o.c(), u = X(), e.__value = i = /*folder*/
      t[18], e.value = e.__value;
    },
    m(r, f) {
      m(r, e, f), a(e, n), o && o.m(r, f), m(r, u, f);
    },
    p(r, f) {
      f[0] & /*$folders*/
      64 && l !== (l = /*folder*/
      r[18].name + "") && Y(n, l), f[0] & /*$folders*/
      64 && i !== (i = /*folder*/
      r[18]) && (e.__value = i, e.value = e.__value), /*folder*/
      r[18].files ? o ? o.p(r, f) : (o = Ue(r), o.c(), o.m(u.parentNode, u)) : o && (o.d(1), o = null);
    },
    d(r) {
      r && b(e), o && o.d(r), r && b(u);
    }
  };
}
function He(t) {
  let e, l, n, i, u, o, r, f, c = (
    /*$folders*/
    t[6]
  ), d = [];
  for (let s = 0; s < c.length; s += 1)
    d[s] = qe(Fe(t, c, s));
  return {
    c() {
      e = _("tr"), l = _("td"), l.innerHTML = '<label for="folder">Select Level:</label>', n = C(), i = _("td"), u = _("select"), o = _("option"), o.textContent = "At Root";
      for (let s = 0; s < d.length; s += 1)
        d[s].c();
      o.__value = "At Root", o.value = o.__value, /*$selectedLevel*/
      t[4] === void 0 && W(() => (
        /*select_change_handler_2*/
        t[14].call(u)
      ));
    },
    m(s, h) {
      m(s, e, h), a(e, l), a(e, n), a(e, i), a(i, u), a(u, o);
      for (let p = 0; p < d.length; p += 1)
        d[p] && d[p].m(u, null);
      B(
        u,
        /*$selectedLevel*/
        t[4],
        !0
      ), r || (f = q(
        u,
        "change",
        /*select_change_handler_2*/
        t[14]
      ), r = !0);
    },
    p(s, h) {
      if (h[0] & /*$folders*/
      64) {
        c = /*$folders*/
        s[6];
        let p;
        for (p = 0; p < c.length; p += 1) {
          const N = Fe(s, c, p);
          d[p] ? d[p].p(N, h) : (d[p] = qe(N), d[p].c(), d[p].m(u, null));
        }
        for (; p < d.length; p += 1)
          d[p].d(1);
        d.length = c.length;
      }
      h[0] & /*$selectedLevel, $folders*/
      80 && B(
        u,
        /*$selectedLevel*/
        s[4]
      );
    },
    d(s) {
      s && b(e), I(d, s), r = !1, f();
    }
  };
}
function qe(t) {
  let e, l = (
    /*folder*/
    t[18].name + ""
  ), n, i;
  return {
    c() {
      e = _("option"), n = M(l), e.__value = i = /*folder*/
      t[18], e.value = e.__value;
    },
    m(u, o) {
      m(u, e, o), a(e, n);
    },
    p(u, o) {
      o[0] & /*$folders*/
      64 && l !== (l = /*folder*/
      u[18].name + "") && Y(n, l), o[0] & /*$folders*/
      64 && i !== (i = /*folder*/
      u[18]) && (e.__value = i, e.value = e.__value);
    },
    d(u) {
      u && b(e);
    }
  };
}
function Ie(t) {
  let e, l, n, i, u, o, r = (
    /*$folders*/
    t[6]
  ), f = [];
  for (let c = 0; c < r.length; c += 1)
    f[c] = ze(ye(t, r, c));
  return {
    c() {
      e = _("button"), e.textContent = "Back", l = C(), n = _("div"), i = _("ul");
      for (let c = 0; c < f.length; c += 1)
        f[c].c();
      ne(n, "id", "folders");
    },
    m(c, d) {
      m(c, e, d), m(c, l, d), m(c, n, d), a(n, i);
      for (let s = 0; s < f.length; s += 1)
        f[s] && f[s].m(i, null);
      u || (o = q(
        e,
        "click",
        /*click_handler*/
        t[15]
      ), u = !0);
    },
    p(c, d) {
      if (d[0] & /*$folders*/
      64) {
        r = /*$folders*/
        c[6];
        let s;
        for (s = 0; s < r.length; s += 1) {
          const h = ye(c, r, s);
          f[s] ? f[s].p(h, d) : (f[s] = ze(h), f[s].c(), f[s].m(i, null));
        }
        for (; s < f.length; s += 1)
          f[s].d(1);
        f.length = r.length;
      }
    },
    d(c) {
      c && b(e), c && b(l), c && b(n), I(f, c), u = !1, o();
    }
  };
}
function je(t) {
  let e, l, n = (
    /*folder*/
    t[18].files
  ), i = [];
  for (let u = 0; u < n.length; u += 1)
    i[u] = Oe(we(t, n, u));
  return {
    c() {
      e = _("ul");
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      l = C();
    },
    m(u, o) {
      m(u, e, o);
      for (let r = 0; r < i.length; r += 1)
        i[r] && i[r].m(e, null);
      a(e, l);
    },
    p(u, o) {
      if (o[0] & /*$folders*/
      64) {
        n = /*folder*/
        u[18].files;
        let r;
        for (r = 0; r < n.length; r += 1) {
          const f = we(u, n, r);
          i[r] ? i[r].p(f, o) : (i[r] = Oe(f), i[r].c(), i[r].m(e, l));
        }
        for (; r < i.length; r += 1)
          i[r].d(1);
        i.length = n.length;
      }
    },
    d(u) {
      u && b(e), I(i, u);
    }
  };
}
function De(t) {
  let e, l = (
    /*item*/
    t[21].files
  ), n = [];
  for (let i = 0; i < l.length; i += 1)
    n[i] = Ve($e(t, l, i));
  return {
    c() {
      e = _("ul");
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
    },
    m(i, u) {
      m(i, e, u);
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(e, null);
    },
    p(i, u) {
      if (u[0] & /*$folders*/
      64) {
        l = /*item*/
        i[21].files;
        let o;
        for (o = 0; o < l.length; o += 1) {
          const r = $e(i, l, o);
          n[o] ? n[o].p(r, u) : (n[o] = Ve(), n[o].c(), n[o].m(e, null));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = l.length;
      }
    },
    d(i) {
      i && b(e), I(n, i);
    }
  };
}
function Ve(t) {
  let e;
  return {
    c() {
      e = _("li"), e.textContent = "file";
    },
    m(l, n) {
      m(l, e, n);
    },
    p: S,
    d(l) {
      l && b(e);
    }
  };
}
function Oe(t) {
  let e, l = (
    /*item*/
    t[21].name + ""
  ), n, i, u, o = (
    /*item*/
    t[21].files && De(t)
  );
  return {
    c() {
      e = _("li"), n = M(l), i = C(), o && o.c(), u = X();
    },
    m(r, f) {
      m(r, e, f), a(e, n), m(r, i, f), o && o.m(r, f), m(r, u, f);
    },
    p(r, f) {
      f[0] & /*$folders*/
      64 && l !== (l = /*item*/
      r[21].name + "") && Y(n, l), /*item*/
      r[21].files ? o ? o.p(r, f) : (o = De(r), o.c(), o.m(u.parentNode, u)) : o && (o.d(1), o = null);
    },
    d(r) {
      r && b(e), r && b(i), o && o.d(r), r && b(u);
    }
  };
}
function ze(t) {
  let e, l, n = (
    /*folder*/
    t[18].name + ""
  ), i, u, o, r = (
    /*folder*/
    t[18].files && je(t)
  );
  return {
    c() {
      e = _("li"), l = _("span"), i = M(n), u = C(), r && r.c(), o = X();
    },
    m(f, c) {
      m(f, e, c), a(e, l), a(l, i), m(f, u, c), r && r.m(f, c), m(f, o, c);
    },
    p(f, c) {
      c[0] & /*$folders*/
      64 && n !== (n = /*folder*/
      f[18].name + "") && Y(i, n), /*folder*/
      f[18].files ? r ? r.p(f, c) : (r = je(f), r.c(), r.m(o.parentNode, o)) : r && (r.d(1), r = null);
    },
    d(f) {
      f && b(e), f && b(u), r && r.d(f), f && b(o);
    }
  };
}
function pt(t) {
  let e;
  function l(u, o) {
    return (
      /*is_user_authenticated*/
      u[0] ? ht : _t
    );
  }
  let n = l(t), i = n(t);
  return {
    c() {
      e = _("div"), i.c(), this.c = S, ne(e, "class", "card");
    },
    m(u, o) {
      m(u, e, o), i.m(e, null);
    },
    p(u, o) {
      n === (n = l(u)) && i ? i.p(u, o) : (i.d(1), i = n(u), i && (i.c(), i.m(e, null)));
    },
    i: S,
    o: S,
    d(u) {
      u && b(e), i.d();
    }
  };
}
function _e(t, e) {
  var l;
  for (const n of t) {
    if (n.id === e)
      return n;
    if (((l = n.files) == null ? void 0 : l.length) > 0) {
      const i = _e(n.files, e);
      if (i)
        return i;
    }
  }
  return null;
}
function mt(t, e, l) {
  let n, i, u, o;
  x(t, fe, (k) => l(3, n = k)), x(t, se, (k) => l(4, i = k)), x(t, ce, (k) => l(5, u = k)), x(t, te, (k) => l(6, o = k));
  let { is_user_authenticated: r } = e, f = "", c = ["File", "Folder"], d = !0;
  Ye(() => {
    const k = {
      id: re(),
      name: "DefaultFolder",
      files: [],
      level: "root",
      type: "folder"
    };
    te.update((w) => (w && w.length === 0 && w.push(k), w));
  });
  function s() {
    f && u ? (l(2, d = !1), u === "File" && n ? h(f) : u === "Folder" && i && p(f, i === "At Root" ? null : i)) : R();
  }
  function h(k) {
    const w = {
      id: re(),
      name: k,
      type: "file"
    };
    te.update((T) => {
      const L = _e(T, n.id);
      return L && L.files.push(w), T;
    });
  }
  function p(k, w) {
    const T = {
      id: re(),
      name: k,
      files: [],
      level: w === null ? "root" : w.level === "root" ? "first" : "second",
      type: "folder"
    };
    te.update((L) => {
      if (w === null)
        L.push(T);
      else {
        const U = _e(L, w.id);
        U && U.files.push(T);
      }
      return L;
    });
  }
  function N() {
    R();
  }
  function R() {
    l(1, f = ""), ce.set(""), fe.set(null), se.set(null);
  }
  function G() {
    f = this.value, l(1, f);
  }
  function H() {
    u = oe(this), ce.set(u), l(7, c);
  }
  function J() {
    n = oe(this), fe.set(n);
  }
  function j() {
    i = oe(this), se.set(i);
  }
  const Z = () => {
    R(), l(2, d = !0);
  };
  return t.$$set = (k) => {
    "is_user_authenticated" in k && l(0, r = k.is_user_authenticated);
  }, [
    r,
    f,
    d,
    n,
    i,
    u,
    o,
    c,
    s,
    N,
    R,
    G,
    H,
    J,
    j,
    Z
  ];
}
class bt extends We {
  constructor(e) {
    super();
    const l = document.createElement("style");
    l.textContent = ".card{background-color:#b8c0d8;width:fit-content;padding:30px;margin:auto;margin-top:50px;vertical-align:middle}.card input{display:block;width:193px;height:25px}.card select{display:block;width:200px;text-align:center;height:30px}.card #folders{text-align:left;padding:20px 40px 20px 20px}.card table td{padding-bottom:10px}.card button{display:block;margin:auto;width:100px;height:30px}.card button:hover{background-color:#3e67d9;color:black;font-weight:bold;cursor:pointer}", this.shadowRoot.appendChild(l), ct(
      this,
      {
        target: this.shadowRoot,
        props: Qe(this.attributes),
        customElement: !0
      },
      mt,
      pt,
      Be,
      { is_user_authenticated: 0 },
      null,
      [-1, -1]
    ), e && (e.target && m(e.target, this, e.anchor), e.props && (this.$set(e.props), le()));
  }
  static get observedAttributes() {
    return ["is_user_authenticated"];
  }
  get is_user_authenticated() {
    return this.$$.ctx[0];
  }
  set is_user_authenticated(e) {
    this.$$set({ is_user_authenticated: e }), le();
  }
}
customElements.define("folder-component", bt);

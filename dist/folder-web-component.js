function T() {
}
function _e(e) {
  return e();
}
function pe() {
  return /* @__PURE__ */ Object.create(null);
}
function B(e) {
  e.forEach(_e);
}
function se(e) {
  return typeof e == "function";
}
function ze(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Pe(e) {
  return Object.keys(e).length === 0;
}
function Ge(e, ...t) {
  if (e == null)
    return T;
  const l = e.subscribe(...t);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function x(e, t, l) {
  e.$$.on_destroy.push(Ge(t, l));
}
const Je = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in Je;
function a(e, t) {
  e.appendChild(t);
}
function b(e, t, l) {
  e.insertBefore(t, l || null);
}
function g(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function H(e, t) {
  for (let l = 0; l < e.length; l += 1)
    e[l] && e[l].d(t);
}
function _(e) {
  return document.createElement(e);
}
function U(e) {
  return document.createTextNode(e);
}
function C() {
  return U(" ");
}
function Y() {
  return U("");
}
function A(e, t, l, n) {
  return e.addEventListener(t, l, n), () => e.removeEventListener(t, l, n);
}
function le(e, t, l) {
  l == null ? e.removeAttribute(t) : e.getAttribute(t) !== l && e.setAttribute(t, l);
}
function Ke(e) {
  return Array.from(e.childNodes);
}
function Z(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function me(e, t) {
  e.value = t ?? "";
}
function O(e, t, l) {
  for (let n = 0; n < e.options.length; n += 1) {
    const o = e.options[n];
    if (o.__value === t) {
      o.selected = !0;
      return;
    }
  }
  (!l || t !== void 0) && (e.selectedIndex = -1);
}
function oe(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
function Qe(e) {
  const t = {};
  for (const l of e)
    t[l.name] = l.value;
  return t;
}
let X;
function Q(e) {
  X = e;
}
function Xe() {
  if (!X)
    throw new Error("Function called outside component initialization");
  return X;
}
function Ye(e) {
  Xe().$$.on_mount.push(e);
}
const D = [], be = [];
let V = [];
const ge = [], Ze = /* @__PURE__ */ Promise.resolve();
let de = !1;
function xe() {
  de || (de = !0, Ze.then(Be));
}
function z(e) {
  V.push(e);
}
const ie = /* @__PURE__ */ new Set();
let I = 0;
function Be() {
  if (I !== 0)
    return;
  const e = X;
  do {
    try {
      for (; I < D.length; ) {
        const t = D[I];
        I++, Q(t), et(t.$$);
      }
    } catch (t) {
      throw D.length = 0, I = 0, t;
    }
    for (Q(null), D.length = 0, I = 0; be.length; )
      be.pop()();
    for (let t = 0; t < V.length; t += 1) {
      const l = V[t];
      ie.has(l) || (ie.add(l), l());
    }
    V.length = 0;
  } while (D.length);
  for (; ge.length; )
    ge.pop()();
  de = !1, ie.clear(), Q(e);
}
function et(e) {
  if (e.fragment !== null) {
    e.update(), B(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(z);
  }
}
function tt(e) {
  const t = [], l = [];
  V.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : l.push(n)), l.forEach((n) => n()), V = t;
}
const lt = /* @__PURE__ */ new Set();
function nt(e, t) {
  e && e.i && (lt.delete(e), e.i(t));
}
const ot = [
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
[...ot];
function it(e, t, l, n) {
  const { fragment: o, after_update: r } = e.$$;
  o && o.m(t, l), n || z(() => {
    const i = e.$$.on_mount.map(_e).filter(se);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : B(i), e.$$.on_mount = [];
  }), r.forEach(z);
}
function rt(e, t) {
  const l = e.$$;
  l.fragment !== null && (tt(l.after_update), B(l.on_destroy), l.fragment && l.fragment.d(t), l.on_destroy = l.fragment = null, l.ctx = []);
}
function ut(e, t) {
  e.$$.dirty[0] === -1 && (D.push(e), xe(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ct(e, t, l, n, o, r, i, u = [-1]) {
  const f = X;
  Q(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: T,
    not_equal: o,
    bound: pe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: pe(),
    dirty: u,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  i && i(c.root);
  let d = !1;
  if (c.ctx = l ? l(e, t.props || {}, (s, h, ...p) => {
    const S = p.length ? p[0] : h;
    return c.ctx && o(c.ctx[s], c.ctx[s] = S) && (!c.skip_bound && c.bound[s] && c.bound[s](S), d && ut(e, s)), h;
  }) : [], c.update(), d = !0, B(c.before_update), c.fragment = n ? n(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const s = Ke(t.target);
      c.fragment && c.fragment.l(s), s.forEach(g);
    } else
      c.fragment && c.fragment.c();
    t.intro && nt(e.$$.fragment), it(e, t.target, t.anchor, t.customElement), Be();
  }
  Q(f);
}
let We;
typeof HTMLElement == "function" && (We = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(_e).filter(se);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, l) {
    this[e] = l;
  }
  disconnectedCallback() {
    B(this.$$.on_disconnect);
  }
  $destroy() {
    rt(this, 1), this.$destroy = T;
  }
  $on(e, t) {
    if (!se(t))
      return T;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(t), () => {
      const n = l.indexOf(t);
      n !== -1 && l.splice(n, 1);
    };
  }
  $set(e) {
    this.$$set && !Pe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
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
for (let e = 0; e < 256; ++e)
  y.push((e + 256).toString(16).slice(1));
function dt(e, t = 0) {
  return (y[e[t + 0]] + y[e[t + 1]] + y[e[t + 2]] + y[e[t + 3]] + "-" + y[e[t + 4]] + y[e[t + 5]] + "-" + y[e[t + 6]] + y[e[t + 7]] + "-" + y[e[t + 8]] + y[e[t + 9]] + "-" + y[e[t + 10]] + y[e[t + 11]] + y[e[t + 12]] + y[e[t + 13]] + y[e[t + 14]] + y[e[t + 15]]).toLowerCase();
}
const at = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ve = {
  randomUUID: at
};
function re(e, t, l) {
  if (ve.randomUUID && !t && !e)
    return ve.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || st)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    l = l || 0;
    for (let o = 0; o < 16; ++o)
      t[l + o] = n[o];
    return t;
  }
  return dt(n);
}
const j = [];
function ne(e, t = T) {
  let l;
  const n = /* @__PURE__ */ new Set();
  function o(u) {
    if (ze(e, u) && (e = u, l)) {
      const f = !j.length;
      for (const c of n)
        c[1](), j.push(c, e);
      if (f) {
        for (let c = 0; c < j.length; c += 2)
          j[c][0](j[c + 1]);
        j.length = 0;
      }
    }
  }
  function r(u) {
    o(u(e));
  }
  function i(u, f = T) {
    const c = [u, f];
    return n.add(c), n.size === 1 && (l = t(o) || T), u(e), () => {
      n.delete(c), n.size === 0 && l && (l(), l = null);
    };
  }
  return { set: o, update: r, subscribe: i };
}
const ue = ne(""), te = ne([]), ce = ne(null), fe = ne(null);
function ke(e, t, l) {
  const n = e.slice();
  return n[17] = t[l], n;
}
function ye(e, t, l) {
  const n = e.slice();
  return n[20] = t[l], n;
}
function we(e, t, l) {
  const n = e.slice();
  return n[23] = t[l], n;
}
function $e(e, t, l) {
  const n = e.slice();
  return n[17] = t[l], n;
}
function Fe(e, t, l) {
  const n = e.slice();
  return n[17] = t[l], n;
}
function Ee(e, t, l) {
  const n = e.slice();
  return n[23] = t[l], n;
}
function Ce(e, t, l) {
  const n = e.slice();
  return n[32] = t[l], n;
}
function Se(e) {
  let t, l, n, o, r, i, u, f, c, d, s, h, p, S, W, P, R, G, J, v, w, L, N, K, q = (
    /*types*/
    e[6]
  ), $ = [];
  for (let m = 0; m < q.length; m += 1)
    $[m] = Te(Ce(e, q, m));
  let F = (
    /*$selectedType*/
    e[4] === "File" && Le(e)
  ), E = (
    /*$selectedType*/
    e[4] === "Folder" && Ae(e)
  );
  return {
    c() {
      t = _("form"), l = _("table"), n = _("tr"), o = _("td"), o.innerHTML = '<label for="fileName">File/Folder Name:</label>', r = C(), i = _("td"), u = _("input"), f = C(), c = _("tr"), d = _("td"), d.innerHTML = '<label for="type">Type:</label>', s = C(), h = _("td"), p = _("select");
      for (let m = 0; m < $.length; m += 1)
        $[m].c();
      S = C(), F && F.c(), W = C(), E && E.c(), P = C(), R = _("tr"), G = _("td"), J = _("button"), J.textContent = "Save", v = C(), w = _("td"), L = _("button"), L.textContent = "Cancel", u.required = !0, le(u, "placeholder", "Enter File/Folder Name"), p.required = !0, /*$selectedType*/
      e[4] === void 0 && z(() => (
        /*select_change_handler*/
        e[11].call(p)
      ));
    },
    m(m, M) {
      b(m, t, M), a(t, l), a(l, n), a(n, o), a(n, r), a(n, i), a(i, u), me(
        u,
        /*name*/
        e[0]
      ), a(l, f), a(l, c), a(c, d), a(c, s), a(c, h), a(h, p);
      for (let k = 0; k < $.length; k += 1)
        $[k] && $[k].m(p, null);
      O(
        p,
        /*$selectedType*/
        e[4],
        !0
      ), a(l, S), F && F.m(l, null), a(l, W), E && E.m(l, null), a(l, P), a(l, R), a(R, G), a(G, J), a(R, v), a(R, w), a(w, L), N || (K = [
        A(
          u,
          "input",
          /*input_input_handler*/
          e[10]
        ),
        A(
          p,
          "change",
          /*select_change_handler*/
          e[11]
        ),
        A(
          J,
          "click",
          /*onSave*/
          e[7]
        ),
        A(
          L,
          "click",
          /*onCancel*/
          e[8]
        )
      ], N = !0);
    },
    p(m, M) {
      if (M[0] & /*name*/
      1 && u.value !== /*name*/
      m[0] && me(
        u,
        /*name*/
        m[0]
      ), M[0] & /*types*/
      64) {
        q = /*types*/
        m[6];
        let k;
        for (k = 0; k < q.length; k += 1) {
          const he = Ce(m, q, k);
          $[k] ? $[k].p(he, M) : ($[k] = Te(he), $[k].c(), $[k].m(p, null));
        }
        for (; k < $.length; k += 1)
          $[k].d(1);
        $.length = q.length;
      }
      M[0] & /*$selectedType, types*/
      80 && O(
        p,
        /*$selectedType*/
        m[4]
      ), /*$selectedType*/
      m[4] === "File" ? F ? F.p(m, M) : (F = Le(m), F.c(), F.m(l, W)) : F && (F.d(1), F = null), /*$selectedType*/
      m[4] === "Folder" ? E ? E.p(m, M) : (E = Ae(m), E.c(), E.m(l, P)) : E && (E.d(1), E = null);
    },
    d(m) {
      m && g(t), H($, m), F && F.d(), E && E.d(), N = !1, B(K);
    }
  };
}
function Te(e) {
  let t, l = (
    /*type*/
    e[32] + ""
  ), n;
  return {
    c() {
      t = _("option"), n = U(l), t.__value = /*type*/
      e[32], t.value = t.__value;
    },
    m(o, r) {
      b(o, t, r), a(t, n);
    },
    p: T,
    d(o) {
      o && g(t);
    }
  };
}
function Le(e) {
  let t, l, n, o, r, i, u, f = (
    /*$folders*/
    e[5]
  ), c = [];
  for (let d = 0; d < f.length; d += 1)
    c[d] = Re(Fe(e, f, d));
  return {
    c() {
      t = _("tr"), l = _("td"), l.innerHTML = '<label for="folder">Select Folder:</label>', n = C(), o = _("td"), r = _("select");
      for (let d = 0; d < c.length; d += 1)
        c[d].c();
      /*$selectedFolder*/
      e[2] === void 0 && z(() => (
        /*select_change_handler_1*/
        e[12].call(r)
      ));
    },
    m(d, s) {
      b(d, t, s), a(t, l), a(t, n), a(t, o), a(o, r);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(r, null);
      O(
        r,
        /*$selectedFolder*/
        e[2],
        !0
      ), i || (u = A(
        r,
        "change",
        /*select_change_handler_1*/
        e[12]
      ), i = !0);
    },
    p(d, s) {
      if (s[0] & /*$folders*/
      32) {
        f = /*$folders*/
        d[5];
        let h;
        for (h = 0; h < f.length; h += 1) {
          const p = Fe(d, f, h);
          c[h] ? c[h].p(p, s) : (c[h] = Re(p), c[h].c(), c[h].m(r, null));
        }
        for (; h < c.length; h += 1)
          c[h].d(1);
        c.length = f.length;
      }
      s[0] & /*$selectedFolder, $folders*/
      36 && O(
        r,
        /*$selectedFolder*/
        d[2]
      );
    },
    d(d) {
      d && g(t), H(c, d), i = !1, u();
    }
  };
}
function Ne(e) {
  let t, l = (
    /*folder*/
    e[17].files
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = Ue(Ee(e, l, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      t = Y();
    },
    m(o, r) {
      for (let i = 0; i < n.length; i += 1)
        n[i] && n[i].m(o, r);
      b(o, t, r);
    },
    p(o, r) {
      if (r[0] & /*$folders*/
      32) {
        l = /*folder*/
        o[17].files;
        let i;
        for (i = 0; i < l.length; i += 1) {
          const u = Ee(o, l, i);
          n[i] ? n[i].p(u, r) : (n[i] = Ue(u), n[i].c(), n[i].m(t.parentNode, t));
        }
        for (; i < n.length; i += 1)
          n[i].d(1);
        n.length = l.length;
      }
    },
    d(o) {
      H(n, o), o && g(t);
    }
  };
}
function Me(e) {
  let t, l = (
    /*file*/
    e[23].name + ""
  ), n, o;
  return {
    c() {
      t = _("option"), n = U(l), t.__value = o = /*file*/
      e[23], t.value = t.__value;
    },
    m(r, i) {
      b(r, t, i), a(t, n);
    },
    p(r, i) {
      i[0] & /*$folders*/
      32 && l !== (l = /*file*/
      r[23].name + "") && Z(n, l), i[0] & /*$folders*/
      32 && o !== (o = /*file*/
      r[23]) && (t.__value = o, t.value = t.__value);
    },
    d(r) {
      r && g(t);
    }
  };
}
function Ue(e) {
  let t, l = (
    /*file*/
    e[23].type === "folder" && Me(e)
  );
  return {
    c() {
      l && l.c(), t = Y();
    },
    m(n, o) {
      l && l.m(n, o), b(n, t, o);
    },
    p(n, o) {
      /*file*/
      n[23].type === "folder" ? l ? l.p(n, o) : (l = Me(n), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null);
    },
    d(n) {
      l && l.d(n), n && g(t);
    }
  };
}
function Re(e) {
  let t, l = (
    /*folder*/
    e[17].name + ""
  ), n, o, r, i = (
    /*folder*/
    e[17].files && Ne(e)
  );
  return {
    c() {
      t = _("option"), n = U(l), i && i.c(), r = Y(), t.__value = o = /*folder*/
      e[17], t.value = t.__value;
    },
    m(u, f) {
      b(u, t, f), a(t, n), i && i.m(u, f), b(u, r, f);
    },
    p(u, f) {
      f[0] & /*$folders*/
      32 && l !== (l = /*folder*/
      u[17].name + "") && Z(n, l), f[0] & /*$folders*/
      32 && o !== (o = /*folder*/
      u[17]) && (t.__value = o, t.value = t.__value), /*folder*/
      u[17].files ? i ? i.p(u, f) : (i = Ne(u), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null);
    },
    d(u) {
      u && g(t), i && i.d(u), u && g(r);
    }
  };
}
function Ae(e) {
  let t, l, n, o, r, i, u, f, c = (
    /*$folders*/
    e[5]
  ), d = [];
  for (let s = 0; s < c.length; s += 1)
    d[s] = He($e(e, c, s));
  return {
    c() {
      t = _("tr"), l = _("td"), l.innerHTML = '<label for="folder">Select Level:</label>', n = C(), o = _("td"), r = _("select"), i = _("option"), i.textContent = "At Root";
      for (let s = 0; s < d.length; s += 1)
        d[s].c();
      i.__value = "At Root", i.value = i.__value, /*$selectedLevel*/
      e[3] === void 0 && z(() => (
        /*select_change_handler_2*/
        e[13].call(r)
      ));
    },
    m(s, h) {
      b(s, t, h), a(t, l), a(t, n), a(t, o), a(o, r), a(r, i);
      for (let p = 0; p < d.length; p += 1)
        d[p] && d[p].m(r, null);
      O(
        r,
        /*$selectedLevel*/
        e[3],
        !0
      ), u || (f = A(
        r,
        "change",
        /*select_change_handler_2*/
        e[13]
      ), u = !0);
    },
    p(s, h) {
      if (h[0] & /*$folders*/
      32) {
        c = /*$folders*/
        s[5];
        let p;
        for (p = 0; p < c.length; p += 1) {
          const S = $e(s, c, p);
          d[p] ? d[p].p(S, h) : (d[p] = He(S), d[p].c(), d[p].m(r, null));
        }
        for (; p < d.length; p += 1)
          d[p].d(1);
        d.length = c.length;
      }
      h[0] & /*$selectedLevel, $folders*/
      40 && O(
        r,
        /*$selectedLevel*/
        s[3]
      );
    },
    d(s) {
      s && g(t), H(d, s), u = !1, f();
    }
  };
}
function He(e) {
  let t, l = (
    /*folder*/
    e[17].name + ""
  ), n, o;
  return {
    c() {
      t = _("option"), n = U(l), t.__value = o = /*folder*/
      e[17], t.value = t.__value;
    },
    m(r, i) {
      b(r, t, i), a(t, n);
    },
    p(r, i) {
      i[0] & /*$folders*/
      32 && l !== (l = /*folder*/
      r[17].name + "") && Z(n, l), i[0] & /*$folders*/
      32 && o !== (o = /*folder*/
      r[17]) && (t.__value = o, t.value = t.__value);
    },
    d(r) {
      r && g(t);
    }
  };
}
function qe(e) {
  let t, l, n, o, r, i, u = (
    /*$folders*/
    e[5]
  ), f = [];
  for (let c = 0; c < u.length; c += 1)
    f[c] = Oe(ke(e, u, c));
  return {
    c() {
      t = _("button"), t.textContent = "Back", l = C(), n = _("div"), o = _("ul");
      for (let c = 0; c < f.length; c += 1)
        f[c].c();
      le(n, "id", "folders");
    },
    m(c, d) {
      b(c, t, d), b(c, l, d), b(c, n, d), a(n, o);
      for (let s = 0; s < f.length; s += 1)
        f[s] && f[s].m(o, null);
      r || (i = A(
        t,
        "click",
        /*click_handler*/
        e[14]
      ), r = !0);
    },
    p(c, d) {
      if (d[0] & /*$folders*/
      32) {
        u = /*$folders*/
        c[5];
        let s;
        for (s = 0; s < u.length; s += 1) {
          const h = ke(c, u, s);
          f[s] ? f[s].p(h, d) : (f[s] = Oe(h), f[s].c(), f[s].m(o, null));
        }
        for (; s < f.length; s += 1)
          f[s].d(1);
        f.length = u.length;
      }
    },
    d(c) {
      c && g(t), c && g(l), c && g(n), H(f, c), r = !1, i();
    }
  };
}
function Ie(e) {
  let t, l, n = (
    /*folder*/
    e[17].files
  ), o = [];
  for (let r = 0; r < n.length; r += 1)
    o[r] = Ve(ye(e, n, r));
  return {
    c() {
      t = _("ul");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      l = C();
    },
    m(r, i) {
      b(r, t, i);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(t, null);
      a(t, l);
    },
    p(r, i) {
      if (i[0] & /*$folders*/
      32) {
        n = /*folder*/
        r[17].files;
        let u;
        for (u = 0; u < n.length; u += 1) {
          const f = ye(r, n, u);
          o[u] ? o[u].p(f, i) : (o[u] = Ve(f), o[u].c(), o[u].m(t, l));
        }
        for (; u < o.length; u += 1)
          o[u].d(1);
        o.length = n.length;
      }
    },
    d(r) {
      r && g(t), H(o, r);
    }
  };
}
function je(e) {
  let t, l = (
    /*item*/
    e[20].files
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = De(we(e, l, o));
  return {
    c() {
      t = _("ul");
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
    },
    m(o, r) {
      b(o, t, r);
      for (let i = 0; i < n.length; i += 1)
        n[i] && n[i].m(t, null);
    },
    p(o, r) {
      if (r[0] & /*$folders*/
      32) {
        l = /*item*/
        o[20].files;
        let i;
        for (i = 0; i < l.length; i += 1) {
          const u = we(o, l, i);
          n[i] ? n[i].p(u, r) : (n[i] = De(), n[i].c(), n[i].m(t, null));
        }
        for (; i < n.length; i += 1)
          n[i].d(1);
        n.length = l.length;
      }
    },
    d(o) {
      o && g(t), H(n, o);
    }
  };
}
function De(e) {
  let t;
  return {
    c() {
      t = _("li"), t.textContent = "file";
    },
    m(l, n) {
      b(l, t, n);
    },
    p: T,
    d(l) {
      l && g(t);
    }
  };
}
function Ve(e) {
  let t, l = (
    /*item*/
    e[20].name + ""
  ), n, o, r, i = (
    /*item*/
    e[20].files && je(e)
  );
  return {
    c() {
      t = _("li"), n = U(l), o = C(), i && i.c(), r = Y();
    },
    m(u, f) {
      b(u, t, f), a(t, n), b(u, o, f), i && i.m(u, f), b(u, r, f);
    },
    p(u, f) {
      f[0] & /*$folders*/
      32 && l !== (l = /*item*/
      u[20].name + "") && Z(n, l), /*item*/
      u[20].files ? i ? i.p(u, f) : (i = je(u), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null);
    },
    d(u) {
      u && g(t), u && g(o), i && i.d(u), u && g(r);
    }
  };
}
function Oe(e) {
  let t, l, n = (
    /*folder*/
    e[17].name + ""
  ), o, r, i, u = (
    /*folder*/
    e[17].files && Ie(e)
  );
  return {
    c() {
      t = _("li"), l = _("span"), o = U(n), r = C(), u && u.c(), i = Y();
    },
    m(f, c) {
      b(f, t, c), a(t, l), a(l, o), b(f, r, c), u && u.m(f, c), b(f, i, c);
    },
    p(f, c) {
      c[0] & /*$folders*/
      32 && n !== (n = /*folder*/
      f[17].name + "") && Z(o, n), /*folder*/
      f[17].files ? u ? u.p(f, c) : (u = Ie(f), u.c(), u.m(i.parentNode, i)) : u && (u.d(1), u = null);
    },
    d(f) {
      f && g(t), f && g(r), u && u.d(f), f && g(i);
    }
  };
}
function _t(e) {
  let t, l, n, o = (
    /*showForm*/
    e[1] && Se(e)
  ), r = !/*showForm*/
  e[1] && qe(e);
  return {
    c() {
      t = _("div"), o && o.c(), l = C(), n = _("div"), r && r.c(), this.c = T, le(n, "id", "showHierarchy"), le(t, "class", "card");
    },
    m(i, u) {
      b(i, t, u), o && o.m(t, null), a(t, l), a(t, n), r && r.m(n, null);
    },
    p(i, u) {
      /*showForm*/
      i[1] ? o ? o.p(i, u) : (o = Se(i), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*showForm*/
      i[1] ? r && (r.d(1), r = null) : r ? r.p(i, u) : (r = qe(i), r.c(), r.m(n, null));
    },
    i: T,
    o: T,
    d(i) {
      i && g(t), o && o.d(), r && r.d();
    }
  };
}
function ae(e, t) {
  var l;
  for (const n of e) {
    if (n.id === t)
      return n;
    if (((l = n.files) == null ? void 0 : l.length) > 0) {
      const o = ae(n.files, t);
      if (o)
        return o;
    }
  }
  return null;
}
function ht(e, t, l) {
  let n, o, r, i;
  x(e, ce, (v) => l(2, n = v)), x(e, fe, (v) => l(3, o = v)), x(e, ue, (v) => l(4, r = v)), x(e, te, (v) => l(5, i = v));
  let u = "", f = ["File", "Folder"], c = !0;
  Ye(() => {
    const v = {
      id: re(),
      name: "DefaultFolder",
      files: [],
      level: "root",
      type: "folder"
    };
    te.update((w) => (w && w.length === 0 && w.push(v), w));
  });
  function d() {
    u && r ? (l(1, c = !1), r === "File" && n ? s(u) : r === "Folder" && o && h(u, o === "At Root" ? null : o)) : S();
  }
  function s(v) {
    const w = {
      id: re(),
      name: v,
      type: "file"
    };
    te.update((L) => {
      const N = ae(L, n.id);
      return N && N.files.push(w), L;
    });
  }
  function h(v, w) {
    const L = {
      id: re(),
      name: v,
      files: [],
      level: w === null ? "root" : w.level === "root" ? "first" : "second",
      type: "folder"
    };
    te.update((N) => {
      if (w === null)
        N.push(L);
      else {
        const K = ae(N, w.id);
        K && K.files.push(L);
      }
      return N;
    });
  }
  function p() {
    S();
  }
  function S() {
    l(0, u = ""), ue.set(""), ce.set(null), fe.set(null);
  }
  function W() {
    u = this.value, l(0, u);
  }
  function P() {
    r = oe(this), ue.set(r), l(6, f);
  }
  function R() {
    n = oe(this), ce.set(n);
  }
  function G() {
    o = oe(this), fe.set(o);
  }
  return [
    u,
    c,
    n,
    o,
    r,
    i,
    f,
    d,
    p,
    S,
    W,
    P,
    R,
    G,
    () => {
      S(), l(1, c = !0);
    }
  ];
}
class pt extends We {
  constructor(t) {
    super();
    const l = document.createElement("style");
    l.textContent = ".card{background-color:#b8c0d8;width:fit-content;padding:30px;margin:auto;margin-top:50px;vertical-align:middle}.card input{display:block;width:193px;height:25px}.card select{display:block;width:200px;text-align:center;height:30px}.card #folders{text-align:left;padding:20px 40px 20px 20px}.card table td{padding-bottom:10px}.card button{display:block;margin:auto;width:100px;height:30px}.card button:hover{background-color:#3e67d9;color:black;font-weight:bold;cursor:pointer}", this.shadowRoot.appendChild(l), ct(
      this,
      {
        target: this.shadowRoot,
        props: Qe(this.attributes),
        customElement: !0
      },
      ht,
      _t,
      ze,
      {},
      null,
      [-1, -1]
    ), t && t.target && b(t.target, this, t.anchor);
  }
}
customElements.define("folder-component", pt);

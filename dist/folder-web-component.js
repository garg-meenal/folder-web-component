function S() {
}
function we(t) {
  return t();
}
function Ne() {
  return /* @__PURE__ */ Object.create(null);
}
function Q(t) {
  t.forEach(we);
}
function ve(t) {
  return typeof t == "function";
}
function et(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function lt(t) {
  return Object.keys(t).length === 0;
}
function nt(t, ...e) {
  if (t == null)
    return S;
  const l = t.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function re(t, e, l) {
  t.$$.on_destroy.push(nt(e, l));
}
const it = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in it;
function a(t, e) {
  t.appendChild(e);
}
function b(t, e, l) {
  t.insertBefore(e, l || null);
}
function g(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function j(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function h(t) {
  return document.createElement(t);
}
function A(t) {
  return document.createTextNode(t);
}
function v() {
  return A(" ");
}
function le() {
  return A("");
}
function R(t, e, l, n) {
  return t.addEventListener(e, l, n), () => t.removeEventListener(e, l, n);
}
function G(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function ot(t) {
  return Array.from(t.childNodes);
}
function X(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function Se(t, e) {
  t.value = e ?? "";
}
function J(t, e, l) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!l || e !== void 0) && (t.selectedIndex = -1);
}
function he(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function rt(t) {
  const e = {};
  for (const l of t)
    e[l.name] = l.value;
  return e;
}
let te;
function ee(t) {
  te = t;
}
function ut() {
  if (!te)
    throw new Error("Function called outside component initialization");
  return te;
}
function ct(t) {
  ut().$$.on_mount.push(t);
}
const W = [], Me = [];
let P = [];
const Te = [], ft = /* @__PURE__ */ Promise.resolve();
let ye = !1;
function st() {
  ye || (ye = !0, ft.then(se));
}
function K(t) {
  P.push(t);
}
const pe = /* @__PURE__ */ new Set();
let O = 0;
function se() {
  if (O !== 0)
    return;
  const t = te;
  do {
    try {
      for (; O < W.length; ) {
        const e = W[O];
        O++, ee(e), dt(e.$$);
      }
    } catch (e) {
      throw W.length = 0, O = 0, e;
    }
    for (ee(null), W.length = 0, O = 0; Me.length; )
      Me.pop()();
    for (let e = 0; e < P.length; e += 1) {
      const l = P[e];
      pe.has(l) || (pe.add(l), l());
    }
    P.length = 0;
  } while (W.length);
  for (; Te.length; )
    Te.pop()();
  ye = !1, pe.clear(), ee(t);
}
function dt(t) {
  if (t.fragment !== null) {
    t.update(), Q(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(K);
  }
}
function at(t) {
  const e = [], l = [];
  P.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : l.push(n)), l.forEach((n) => n()), P = e;
}
const _t = /* @__PURE__ */ new Set();
function ht(t, e) {
  t && t.i && (_t.delete(t), t.i(e));
}
const pt = [
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
[...pt];
function mt(t, e, l, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, l), n || K(() => {
    const o = t.$$.on_mount.map(we).filter(ve);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : Q(o), t.$$.on_mount = [];
  }), r.forEach(K);
}
function bt(t, e) {
  const l = t.$$;
  l.fragment !== null && (at(l.after_update), Q(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function gt(t, e) {
  t.$$.dirty[0] === -1 && (W.push(t), st(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function kt(t, e, l, n, i, r, o, u = [-1]) {
  const f = te;
  ee(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: S,
    not_equal: i,
    bound: Ne(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Ne(),
    dirty: u,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  o && o(c.root);
  let d = !1;
  if (c.ctx = l ? l(t, e.props || {}, (s, p, ..._) => {
    const $ = _.length ? _[0] : p;
    return c.ctx && i(c.ctx[s], c.ctx[s] = $) && (!c.skip_bound && c.bound[s] && c.bound[s]($), d && gt(t, s)), p;
  }) : [], c.update(), d = !0, Q(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const s = ot(e.target);
      c.fragment && c.fragment.l(s), s.forEach(g);
    } else
      c.fragment && c.fragment.c();
    e.intro && ht(t.$$.fragment), mt(t, e.target, e.anchor, e.customElement), se();
  }
  ee(f);
}
let tt;
typeof HTMLElement == "function" && (tt = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(we).filter(ve);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, l) {
    this[t] = l;
  }
  disconnectedCallback() {
    Q(this.$$.on_disconnect);
  }
  $destroy() {
    bt(this, 1), this.$destroy = S;
  }
  $on(t, e) {
    if (!ve(e))
      return S;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(e), () => {
      const n = l.indexOf(e);
      n !== -1 && l.splice(n, 1);
    };
  }
  $set(t) {
    this.$$set && !lt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
let ue;
const vt = new Uint8Array(16);
function yt() {
  if (!ue && (ue = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ue))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ue(vt);
}
const w = [];
for (let t = 0; t < 256; ++t)
  w.push((t + 256).toString(16).slice(1));
function wt(t, e = 0) {
  return (w[t[e + 0]] + w[t[e + 1]] + w[t[e + 2]] + w[t[e + 3]] + "-" + w[t[e + 4]] + w[t[e + 5]] + "-" + w[t[e + 6]] + w[t[e + 7]] + "-" + w[t[e + 8]] + w[t[e + 9]] + "-" + w[t[e + 10]] + w[t[e + 11]] + w[t[e + 12]] + w[t[e + 13]] + w[t[e + 14]] + w[t[e + 15]]).toLowerCase();
}
const Ft = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Le = {
  randomUUID: Ft
};
function me(t, e, l) {
  if (Le.randomUUID && !e && !t)
    return Le.randomUUID();
  t = t || {};
  const n = t.random || (t.rng || yt)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    l = l || 0;
    for (let i = 0; i < 16; ++i)
      e[l + i] = n[i];
    return e;
  }
  return wt(n);
}
const B = [];
function de(t, e = S) {
  let l;
  const n = /* @__PURE__ */ new Set();
  function i(u) {
    if (et(t, u) && (t = u, l)) {
      const f = !B.length;
      for (const c of n)
        c[1](), B.push(c, t);
      if (f) {
        for (let c = 0; c < B.length; c += 2)
          B[c][0](B[c + 1]);
        B.length = 0;
      }
    }
  }
  function r(u) {
    i(u(t));
  }
  function o(u, f = S) {
    const c = [u, f];
    return n.add(c), n.size === 1 && (l = e(i) || S), u(t), () => {
      n.delete(c), n.size === 0 && l && (l(), l = null);
    };
  }
  return { set: i, update: r, subscribe: o };
}
const be = de(""), ce = de([]), ge = de(null), ke = de(null);
function Ue(t, e, l) {
  const n = t.slice();
  return n[21] = e[l], n;
}
function Ae(t, e, l) {
  const n = t.slice();
  return n[24] = e[l], n;
}
function He(t, e, l) {
  const n = t.slice();
  return n[27] = e[l], n;
}
function Re(t, e, l) {
  const n = t.slice();
  return n[21] = e[l], n;
}
function Ie(t, e, l) {
  const n = t.slice();
  return n[21] = e[l], n;
}
function qe(t, e, l) {
  const n = t.slice();
  return n[27] = e[l], n;
}
function je(t, e, l) {
  const n = t.slice();
  return n[36] = e[l], n;
}
function Et(t) {
  let e;
  return {
    c() {
      e = h("h1"), e.textContent = "User is not authenticated!", G(e, "class", "error");
    },
    m(l, n) {
      b(l, e, n);
    },
    p: S,
    d(l) {
      l && g(e);
    }
  };
}
function $t(t) {
  let e, l, n = (
    /*showForm*/
    t[2] && De(t)
  ), i = !/*showForm*/
  t[2] && Ke(t);
  return {
    c() {
      n && n.c(), e = v(), l = h("div"), i && i.c(), G(l, "id", "showHierarchy");
    },
    m(r, o) {
      n && n.m(r, o), b(r, e, o), b(r, l, o), i && i.m(l, null);
    },
    p(r, o) {
      /*showForm*/
      r[2] ? n ? n.p(r, o) : (n = De(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), /*showForm*/
      r[2] ? i && (i.d(1), i = null) : i ? i.p(r, o) : (i = Ke(r), i.c(), i.m(l, null));
    },
    d(r) {
      n && n.d(r), r && g(e), r && g(l), i && i.d();
    }
  };
}
function De(t) {
  let e, l, n, i, r, o, u, f, c, d, s, p, _, $, D, H, Y, I, Z, ne, x, T, ie, k, F, L, U, q, Fe, ae, z, Ee, oe, _e, $e, V = (
    /*types*/
    t[8]
  ), E = [];
  for (let m = 0; m < V.length; m += 1)
    E[m] = ze(je(t, V, m));
  let C = (
    /*$selectedType*/
    t[7] === "File" && Ve(t)
  ), N = (
    /*$selectedType*/
    t[7] === "Folder" && Ge(t)
  );
  return {
    c() {
      e = h("h1"), e.textContent = "Folder Form", l = v(), n = h("form"), i = h("table"), r = h("tr"), o = h("td"), o.innerHTML = '<label for="fileName">File/Folder Name:</label>', u = v(), f = h("td"), c = h("input"), d = v(), s = h("tr"), p = h("td"), _ = v(), $ = h("td"), D = h("span"), H = A(
        /*alreadyExistsErrorMsg*/
        t[3]
      ), Y = v(), I = h("tr"), Z = h("td"), Z.innerHTML = '<label for="type">Type:</label>', ne = v(), x = h("td"), T = h("select");
      for (let m = 0; m < E.length; m += 1)
        E[m].c();
      ie = v(), C && C.c(), k = v(), N && N.c(), F = v(), L = h("tr"), U = h("td"), q = h("button"), q.textContent = "Cancel", Fe = v(), ae = h("td"), z = h("button"), Ee = A("Save"), c.required = !0, G(c, "placeholder", "Enter File/Folder Name"), G(D, "class", "errorMsg"), T.required = !0, /*$selectedType*/
      t[7] === void 0 && K(() => (
        /*select_change_handler*/
        t[15].call(T)
      )), z.disabled = oe = /*alreadyExistsErrorMsg*/
      t[3] !== "";
    },
    m(m, M) {
      b(m, e, M), b(m, l, M), b(m, n, M), a(n, i), a(i, r), a(r, o), a(r, u), a(r, f), a(f, c), Se(
        c,
        /*name*/
        t[1]
      ), a(i, d), a(i, s), a(s, p), a(s, _), a(s, $), a($, D), a(D, H), a(i, Y), a(i, I), a(I, Z), a(I, ne), a(I, x), a(x, T);
      for (let y = 0; y < E.length; y += 1)
        E[y] && E[y].m(T, null);
      J(
        T,
        /*$selectedType*/
        t[7],
        !0
      ), a(i, ie), C && C.m(i, null), a(i, k), N && N.m(i, null), a(i, F), a(i, L), a(L, U), a(U, q), a(L, Fe), a(L, ae), a(ae, z), a(z, Ee), _e || ($e = [
        R(
          c,
          "input",
          /*input_input_handler*/
          t[13]
        ),
        R(
          c,
          "blur",
          /*blur_handler*/
          t[14]
        ),
        R(
          T,
          "change",
          /*select_change_handler*/
          t[15]
        ),
        R(
          q,
          "click",
          /*onCancel*/
          t[10]
        ),
        R(
          z,
          "click",
          /*onSave*/
          t[9]
        )
      ], _e = !0);
    },
    p(m, M) {
      if (M[0] & /*name*/
      2 && c.value !== /*name*/
      m[1] && Se(
        c,
        /*name*/
        m[1]
      ), M[0] & /*alreadyExistsErrorMsg*/
      8 && X(
        H,
        /*alreadyExistsErrorMsg*/
        m[3]
      ), M[0] & /*types*/
      256) {
        V = /*types*/
        m[8];
        let y;
        for (y = 0; y < V.length; y += 1) {
          const Ce = je(m, V, y);
          E[y] ? E[y].p(Ce, M) : (E[y] = ze(Ce), E[y].c(), E[y].m(T, null));
        }
        for (; y < E.length; y += 1)
          E[y].d(1);
        E.length = V.length;
      }
      M[0] & /*$selectedType, types*/
      384 && J(
        T,
        /*$selectedType*/
        m[7]
      ), /*$selectedType*/
      m[7] === "File" ? C ? C.p(m, M) : (C = Ve(m), C.c(), C.m(i, k)) : C && (C.d(1), C = null), /*$selectedType*/
      m[7] === "Folder" ? N ? N.p(m, M) : (N = Ge(m), N.c(), N.m(i, F)) : N && (N.d(1), N = null), M[0] & /*alreadyExistsErrorMsg*/
      8 && oe !== (oe = /*alreadyExistsErrorMsg*/
      m[3] !== "") && (z.disabled = oe);
    },
    d(m) {
      m && g(e), m && g(l), m && g(n), j(E, m), C && C.d(), N && N.d(), _e = !1, Q($e);
    }
  };
}
function ze(t) {
  let e, l = (
    /*type*/
    t[36] + ""
  ), n;
  return {
    c() {
      e = h("option"), n = A(l), e.__value = /*type*/
      t[36], e.value = e.__value;
    },
    m(i, r) {
      b(i, e, r), a(e, n);
    },
    p: S,
    d(i) {
      i && g(e);
    }
  };
}
function Ve(t) {
  let e, l, n, i, r, o, u, f = (
    /*$folders*/
    t[4]
  ), c = [];
  for (let d = 0; d < f.length; d += 1)
    c[d] = Pe(Ie(t, f, d));
  return {
    c() {
      e = h("tr"), l = h("td"), l.innerHTML = '<label for="folder">Select Folder:</label>', n = v(), i = h("td"), r = h("select");
      for (let d = 0; d < c.length; d += 1)
        c[d].c();
      /*$selectedFolder*/
      t[5] === void 0 && K(() => (
        /*select_change_handler_1*/
        t[16].call(r)
      ));
    },
    m(d, s) {
      b(d, e, s), a(e, l), a(e, n), a(e, i), a(i, r);
      for (let p = 0; p < c.length; p += 1)
        c[p] && c[p].m(r, null);
      J(
        r,
        /*$selectedFolder*/
        t[5],
        !0
      ), o || (u = R(
        r,
        "change",
        /*select_change_handler_1*/
        t[16]
      ), o = !0);
    },
    p(d, s) {
      if (s[0] & /*$folders*/
      16) {
        f = /*$folders*/
        d[4];
        let p;
        for (p = 0; p < f.length; p += 1) {
          const _ = Ie(d, f, p);
          c[p] ? c[p].p(_, s) : (c[p] = Pe(_), c[p].c(), c[p].m(r, null));
        }
        for (; p < c.length; p += 1)
          c[p].d(1);
        c.length = f.length;
      }
      s[0] & /*$selectedFolder, $folders*/
      48 && J(
        r,
        /*$selectedFolder*/
        d[5]
      );
    },
    d(d) {
      d && g(e), j(c, d), o = !1, u();
    }
  };
}
function Oe(t) {
  let e, l = (
    /*folder*/
    t[21].files
  ), n = [];
  for (let i = 0; i < l.length; i += 1)
    n[i] = We(qe(t, l, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = le();
    },
    m(i, r) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, r);
      b(i, e, r);
    },
    p(i, r) {
      if (r[0] & /*$folders*/
      16) {
        l = /*folder*/
        i[21].files;
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = qe(i, l, o);
          n[o] ? n[o].p(u, r) : (n[o] = We(u), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = l.length;
      }
    },
    d(i) {
      j(n, i), i && g(e);
    }
  };
}
function Be(t) {
  let e, l = (
    /*file*/
    t[27].name + ""
  ), n, i;
  return {
    c() {
      e = h("option"), n = A(l), e.__value = i = /*file*/
      t[27], e.value = e.__value;
    },
    m(r, o) {
      b(r, e, o), a(e, n);
    },
    p(r, o) {
      o[0] & /*$folders*/
      16 && l !== (l = /*file*/
      r[27].name + "") && X(n, l), o[0] & /*$folders*/
      16 && i !== (i = /*file*/
      r[27]) && (e.__value = i, e.value = e.__value);
    },
    d(r) {
      r && g(e);
    }
  };
}
function We(t) {
  let e, l = (
    /*file*/
    t[27].type === "folder" && Be(t)
  );
  return {
    c() {
      l && l.c(), e = le();
    },
    m(n, i) {
      l && l.m(n, i), b(n, e, i);
    },
    p(n, i) {
      /*file*/
      n[27].type === "folder" ? l ? l.p(n, i) : (l = Be(n), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null);
    },
    d(n) {
      l && l.d(n), n && g(e);
    }
  };
}
function Pe(t) {
  let e, l = (
    /*folder*/
    t[21].name + ""
  ), n, i, r, o = (
    /*folder*/
    t[21].files && Oe(t)
  );
  return {
    c() {
      e = h("option"), n = A(l), o && o.c(), r = le(), e.__value = i = /*folder*/
      t[21], e.value = e.__value;
    },
    m(u, f) {
      b(u, e, f), a(e, n), o && o.m(u, f), b(u, r, f);
    },
    p(u, f) {
      f[0] & /*$folders*/
      16 && l !== (l = /*folder*/
      u[21].name + "") && X(n, l), f[0] & /*$folders*/
      16 && i !== (i = /*folder*/
      u[21]) && (e.__value = i, e.value = e.__value), /*folder*/
      u[21].files ? o ? o.p(u, f) : (o = Oe(u), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
    },
    d(u) {
      u && g(e), o && o.d(u), u && g(r);
    }
  };
}
function Ge(t) {
  let e, l, n, i, r, o, u, f, c = (
    /*$folders*/
    t[4]
  ), d = [];
  for (let s = 0; s < c.length; s += 1)
    d[s] = Je(Re(t, c, s));
  return {
    c() {
      e = h("tr"), l = h("td"), l.innerHTML = '<label for="folder">Select Level:</label>', n = v(), i = h("td"), r = h("select"), o = h("option"), o.textContent = "At Root";
      for (let s = 0; s < d.length; s += 1)
        d[s].c();
      o.__value = "At Root", o.value = o.__value, /*$selectedLevel*/
      t[6] === void 0 && K(() => (
        /*select_change_handler_2*/
        t[17].call(r)
      ));
    },
    m(s, p) {
      b(s, e, p), a(e, l), a(e, n), a(e, i), a(i, r), a(r, o);
      for (let _ = 0; _ < d.length; _ += 1)
        d[_] && d[_].m(r, null);
      J(
        r,
        /*$selectedLevel*/
        t[6],
        !0
      ), u || (f = R(
        r,
        "change",
        /*select_change_handler_2*/
        t[17]
      ), u = !0);
    },
    p(s, p) {
      if (p[0] & /*$folders*/
      16) {
        c = /*$folders*/
        s[4];
        let _;
        for (_ = 0; _ < c.length; _ += 1) {
          const $ = Re(s, c, _);
          d[_] ? d[_].p($, p) : (d[_] = Je($), d[_].c(), d[_].m(r, null));
        }
        for (; _ < d.length; _ += 1)
          d[_].d(1);
        d.length = c.length;
      }
      p[0] & /*$selectedLevel, $folders*/
      80 && J(
        r,
        /*$selectedLevel*/
        s[6]
      );
    },
    d(s) {
      s && g(e), j(d, s), u = !1, f();
    }
  };
}
function Je(t) {
  let e, l = (
    /*folder*/
    t[21].name + ""
  ), n, i;
  return {
    c() {
      e = h("option"), n = A(l), e.__value = i = /*folder*/
      t[21], e.value = e.__value;
    },
    m(r, o) {
      b(r, e, o), a(e, n);
    },
    p(r, o) {
      o[0] & /*$folders*/
      16 && l !== (l = /*folder*/
      r[21].name + "") && X(n, l), o[0] & /*$folders*/
      16 && i !== (i = /*folder*/
      r[21]) && (e.__value = i, e.value = e.__value);
    },
    d(r) {
      r && g(e);
    }
  };
}
function Ke(t) {
  let e, l, n, i, r, o, u, f, c = (
    /*$folders*/
    t[4]
  ), d = [];
  for (let s = 0; s < c.length; s += 1)
    d[s] = xe(Ue(t, c, s));
  return {
    c() {
      e = h("h1"), e.textContent = "Folder Hierarchy", l = v(), n = h("div"), i = h("ul");
      for (let s = 0; s < d.length; s += 1)
        d[s].c();
      r = v(), o = h("button"), o.textContent = "Back", G(n, "id", "folders");
    },
    m(s, p) {
      b(s, e, p), b(s, l, p), b(s, n, p), a(n, i);
      for (let _ = 0; _ < d.length; _ += 1)
        d[_] && d[_].m(i, null);
      b(s, r, p), b(s, o, p), u || (f = R(
        o,
        "click",
        /*click_handler*/
        t[18]
      ), u = !0);
    },
    p(s, p) {
      if (p[0] & /*$folders*/
      16) {
        c = /*$folders*/
        s[4];
        let _;
        for (_ = 0; _ < c.length; _ += 1) {
          const $ = Ue(s, c, _);
          d[_] ? d[_].p($, p) : (d[_] = xe($), d[_].c(), d[_].m(i, null));
        }
        for (; _ < d.length; _ += 1)
          d[_].d(1);
        d.length = c.length;
      }
    },
    d(s) {
      s && g(e), s && g(l), s && g(n), j(d, s), s && g(r), s && g(o), u = !1, f();
    }
  };
}
function Qe(t) {
  let e, l, n = (
    /*folder*/
    t[21].files
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Ze(Ae(t, n, r));
  return {
    c() {
      e = h("ul");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      l = v();
    },
    m(r, o) {
      b(r, e, o);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(e, null);
      a(e, l);
    },
    p(r, o) {
      if (o[0] & /*$folders*/
      16) {
        n = /*folder*/
        r[21].files;
        let u;
        for (u = 0; u < n.length; u += 1) {
          const f = Ae(r, n, u);
          i[u] ? i[u].p(f, o) : (i[u] = Ze(f), i[u].c(), i[u].m(e, l));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && g(e), j(i, r);
    }
  };
}
function Xe(t) {
  let e, l = (
    /*item*/
    t[24].files
  ), n = [];
  for (let i = 0; i < l.length; i += 1)
    n[i] = Ye(He(t, l, i));
  return {
    c() {
      e = h("ul");
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
    },
    m(i, r) {
      b(i, e, r);
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(e, null);
    },
    p(i, r) {
      if (r[0] & /*$folders*/
      16) {
        l = /*item*/
        i[24].files;
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = He(i, l, o);
          n[o] ? n[o].p(u, r) : (n[o] = Ye(), n[o].c(), n[o].m(e, null));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = l.length;
      }
    },
    d(i) {
      i && g(e), j(n, i);
    }
  };
}
function Ye(t) {
  let e;
  return {
    c() {
      e = h("li"), e.textContent = "file";
    },
    m(l, n) {
      b(l, e, n);
    },
    p: S,
    d(l) {
      l && g(e);
    }
  };
}
function Ze(t) {
  let e, l = (
    /*item*/
    t[24].name + ""
  ), n, i, r, o = (
    /*item*/
    t[24].files && Xe(t)
  );
  return {
    c() {
      e = h("li"), n = A(l), i = v(), o && o.c(), r = le();
    },
    m(u, f) {
      b(u, e, f), a(e, n), b(u, i, f), o && o.m(u, f), b(u, r, f);
    },
    p(u, f) {
      f[0] & /*$folders*/
      16 && l !== (l = /*item*/
      u[24].name + "") && X(n, l), /*item*/
      u[24].files ? o ? o.p(u, f) : (o = Xe(u), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
    },
    d(u) {
      u && g(e), u && g(i), o && o.d(u), u && g(r);
    }
  };
}
function xe(t) {
  let e, l, n = (
    /*folder*/
    t[21].name + ""
  ), i, r, o, u = (
    /*folder*/
    t[21].files && Qe(t)
  );
  return {
    c() {
      e = h("li"), l = h("span"), i = A(n), r = v(), u && u.c(), o = le();
    },
    m(f, c) {
      b(f, e, c), a(e, l), a(l, i), b(f, r, c), u && u.m(f, c), b(f, o, c);
    },
    p(f, c) {
      c[0] & /*$folders*/
      16 && n !== (n = /*folder*/
      f[21].name + "") && X(i, n), /*folder*/
      f[21].files ? u ? u.p(f, c) : (u = Qe(f), u.c(), u.m(o.parentNode, o)) : u && (u.d(1), u = null);
    },
    d(f) {
      f && g(e), f && g(r), u && u.d(f), f && g(o);
    }
  };
}
function Ct(t) {
  let e;
  function l(r, o) {
    return (
      /*is_user_authenticated*/
      r[0] ? $t : Et
    );
  }
  let n = l(t), i = n(t);
  return {
    c() {
      e = h("div"), i.c(), this.c = S, G(e, "class", "card");
    },
    m(r, o) {
      b(r, e, o), i.m(e, null);
    },
    p(r, o) {
      n === (n = l(r)) && i ? i.p(r, o) : (i.d(1), i = n(r), i && (i.c(), i.m(e, null)));
    },
    i: S,
    o: S,
    d(r) {
      r && g(e), i.d();
    }
  };
}
function fe(t, e) {
  var l;
  for (const n of t) {
    if (n.name === e)
      return n;
    if (((l = n.files) == null ? void 0 : l.length) > 0) {
      const i = fe(n.files, e);
      if (i)
        return i;
    }
  }
  return null;
}
function Nt(t, e, l) {
  let n, i, r, o;
  re(t, ce, (k) => l(4, n = k)), re(t, ge, (k) => l(5, i = k)), re(t, ke, (k) => l(6, r = k)), re(t, be, (k) => l(7, o = k));
  let { is_user_authenticated: u = !0 } = e, f = "", c = ["File", "Folder"], d = !0, s = "";
  ct(() => {
    const k = {
      id: me(),
      name: "DefaultFolder",
      files: [],
      level: "root",
      type: "folder"
    };
    ce.update((F) => (F && F.length === 0 && F.push(k), F));
  });
  function p() {
    f && o ? (l(2, d = !1), o === "File" && i ? _(f) : o === "Folder" && r && $(f, r === "At Root" ? null : r)) : H();
  }
  function _(k) {
    const F = {
      id: me(),
      name: k,
      type: "file"
    };
    ce.update((L) => {
      const U = fe(L, i.name);
      return U && U.files.push(F), L;
    });
  }
  function $(k, F) {
    const L = {
      id: me(),
      name: k,
      files: [],
      level: F === null ? "root" : F.level === "root" ? "first" : "second",
      type: "folder"
    };
    ce.update((U) => {
      if (F === null)
        U.push(L);
      else {
        const q = fe(U, F.name);
        q && q.files.push(L);
      }
      return U;
    });
  }
  function D() {
    H();
  }
  function H() {
    l(1, f = ""), be.set(""), ge.set(null), ke.set(null);
  }
  function Y() {
    fe(n, f) ? (l(3, s = "Name already exists"), l(1, f = "")) : l(3, s = "");
  }
  function I() {
    f = this.value, l(1, f);
  }
  const Z = () => Y();
  function ne() {
    o = he(this), be.set(o), l(8, c);
  }
  function x() {
    i = he(this), ge.set(i);
  }
  function T() {
    r = he(this), ke.set(r);
  }
  const ie = () => {
    H(), l(2, d = !0);
  };
  return t.$$set = (k) => {
    "is_user_authenticated" in k && l(0, u = k.is_user_authenticated);
  }, [
    u,
    f,
    d,
    s,
    n,
    i,
    r,
    o,
    c,
    p,
    D,
    H,
    Y,
    I,
    Z,
    ne,
    x,
    T,
    ie
  ];
}
class St extends tt {
  constructor(e) {
    super();
    const l = document.createElement("style");
    l.textContent = ".card{background-color:#b8c0d8;width:fit-content;padding:30px;margin:auto;margin-top:50px;vertical-align:middle}.card h1{margin:0px;margin-bottom:20px;text-align:center;font-size:3.2em;line-height:1.1;font-family:Inter, system-ui, Avenir, Helvetica, Arial, sans-serif}.card input{display:block;width:193px;height:25px}.card .errorMsg{color:red;font-size:12px}.card select{display:block;width:200px;text-align:center;height:30px}.card #folders{text-align:left;padding:20px 40px 20px 20px}.card table td{padding-bottom:10px}.card button{display:block;margin:auto;width:100px;height:30px}.card button:hover{background-color:#3e67d9;font-weight:bold;cursor:pointer}.card button:disabled{cursor:default;background-color:grey;font-weight:bold}.card .error{color:red}", this.shadowRoot.appendChild(l), kt(
      this,
      {
        target: this.shadowRoot,
        props: rt(this.attributes),
        customElement: !0
      },
      Nt,
      Ct,
      et,
      { is_user_authenticated: 0 },
      null,
      [-1, -1]
    ), e && (e.target && b(e.target, this, e.anchor), e.props && (this.$set(e.props), se()));
  }
  static get observedAttributes() {
    return ["is_user_authenticated"];
  }
  get is_user_authenticated() {
    return this.$$.ctx[0];
  }
  set is_user_authenticated(e) {
    this.$$set({ is_user_authenticated: e }), se();
  }
}
customElements.define("folder-component", St);

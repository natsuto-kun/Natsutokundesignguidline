import { jsx as f, Fragment as Le, jsxs as ie } from "react/jsx-runtime";
import * as p from "react";
import F, { forwardRef as Aa, createElement as Jl, useState as Vt, createContext as On, useContext as In, useEffect as Wt, useLayoutEffect as Wu, useRef as jr, useCallback as Mg, PureComponent as Tg, useImperativeHandle as ZC, useMemo as Ng, cloneElement as JC } from "react";
import * as Da from "react-dom";
import Ag from "react-dom";
function e_(e, t) {
  const n = p.createContext(t), r = (a) => {
    const { children: i, ...s } = a, c = p.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ f(n.Provider, { value: c, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = p.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Pe(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = p.createContext(i), c = n.length;
    n = [...n, i];
    const l = (d) => {
      var y;
      const { scope: m, children: g, ...h } = d, v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[c]) || s, b = p.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ f(v.Provider, { value: b, children: g });
    };
    l.displayName = a + "Provider";
    function u(d, m) {
      var v;
      const g = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[c]) || s, h = p.useContext(g);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [l, u];
  }
  const o = () => {
    const a = n.map((i) => p.createContext(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return p.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, t_(o, ...t)];
}
function t_(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: c, scopeName: l }) => {
        const d = c(a)[`__scope${l}`];
        return { ...s, ...d };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function tp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Dt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = tp(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : tp(e[o], null);
        }
      };
  };
}
function se(...e) {
  return p.useCallback(Dt(...e), e);
}
var at = p.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = p.Children.toArray(n), a = o.find(n_);
  if (a) {
    const i = a.props.children, s = o.map((c) => c === a ? p.Children.count(i) > 1 ? p.Children.only(null) : p.isValidElement(i) ? i.props.children : null : c);
    return /* @__PURE__ */ f(eu, { ...r, ref: t, children: p.isValidElement(i) ? p.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ f(eu, { ...r, ref: t, children: n });
});
at.displayName = "Slot";
var eu = p.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (p.isValidElement(n)) {
    const o = o_(n), a = r_(r, n.props);
    return n.type !== p.Fragment && (a.ref = t ? Dt(t, o) : o), p.cloneElement(n, a);
  }
  return p.Children.count(n) > 1 ? p.Children.only(null) : null;
});
eu.displayName = "SlotClone";
var Vu = ({ children: e }) => /* @__PURE__ */ f(Le, { children: e });
function n_(e) {
  return p.isValidElement(e) && e.type === Vu;
}
function r_(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      a(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function o_(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function sn(e) {
  const t = e + "CollectionProvider", [n, r] = Pe(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: h, children: v } = g, b = F.useRef(null), y = F.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: h, itemMap: y, collectionRef: b, children: v });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = F.forwardRef(
    (g, h) => {
      const { scope: v, children: b } = g, y = a(s, v), w = se(h, y.collectionRef);
      return /* @__PURE__ */ f(at, { ref: w, children: b });
    }
  );
  c.displayName = s;
  const l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = F.forwardRef(
    (g, h) => {
      const { scope: v, children: b, ...y } = g, w = F.useRef(null), x = se(h, w), S = a(l, v);
      return F.useEffect(() => (S.itemMap.set(w, { ref: w, ...y }), () => void S.itemMap.delete(w))), /* @__PURE__ */ f(at, { [u]: "", ref: x, children: b });
    }
  );
  d.displayName = l;
  function m(g) {
    const h = a(e + "CollectionConsumer", g);
    return F.useCallback(() => {
      const b = h.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(h.itemMap.values()).sort(
        (S, _) => y.indexOf(S.ref.current) - y.indexOf(_.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: d },
    m,
    r
  ];
}
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function _e(e) {
  const t = p.useRef(e);
  return p.useEffect(() => {
    t.current = e;
  }), p.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function De({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = a_({ defaultProp: t, onChange: n }), a = e !== void 0, i = a ? e : r, s = _e(n), c = p.useCallback(
    (l) => {
      if (a) {
        const d = typeof l == "function" ? l(e) : l;
        d !== e && s(d);
      } else
        o(l);
    },
    [a, e, o, s]
  );
  return [i, c];
}
function a_({
  defaultProp: e,
  onChange: t
}) {
  const n = p.useState(e), [r] = n, o = p.useRef(r), a = _e(t);
  return p.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
var i_ = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], X = i_.reduce((e, t) => {
  const n = p.forwardRef((r, o) => {
    const { asChild: a, ...i } = r, s = a ? at : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(s, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function aa(e, t) {
  e && Da.flushSync(() => e.dispatchEvent(t));
}
var Oe = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {
};
function s_(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ee = (e) => {
  const { present: t, children: n } = e, r = c_(t), o = typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n), a = se(r.ref, l_(o));
  return typeof n == "function" || r.isPresent ? p.cloneElement(o, { ref: a }) : null;
};
Ee.displayName = "Presence";
function c_(e) {
  const [t, n] = p.useState(), r = p.useRef({}), o = p.useRef(e), a = p.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = s_(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return p.useEffect(() => {
    const l = $o(r.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), Oe(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const m = a.current, g = $o(l);
      e ? c("MOUNT") : g === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Oe(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, d = (g) => {
        const v = $o(r.current).includes(g.animationName);
        if (g.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, m = (g) => {
        g.target === t && (a.current = $o(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: p.useCallback((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function $o(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function l_(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var u_ = p.useId || (() => {
}), d_ = 0;
function Me(e) {
  const [t, n] = p.useState(u_());
  return Oe(() => {
    n((r) => r ?? String(d_++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Gu = "Collapsible", [f_, Dg] = Pe(Gu), [p_, ju] = f_(Gu), Og = p.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [c = !1, l] = De({
      prop: r,
      defaultProp: o,
      onChange: i
    });
    return /* @__PURE__ */ f(
      p_,
      {
        scope: n,
        disabled: a,
        contentId: Me(),
        open: c,
        onOpenToggle: p.useCallback(() => l((u) => !u), [l]),
        children: /* @__PURE__ */ f(
          X.div,
          {
            "data-state": Xu(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Og.displayName = Gu;
var Ig = "CollapsibleTrigger", Uu = p.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = ju(Ig, n);
    return /* @__PURE__ */ f(
      X.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Xu(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Uu.displayName = Ig;
var Ku = "CollapsibleContent", Yu = p.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ju(Ku, e.__scopeCollapsible);
    return /* @__PURE__ */ f(Ee, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ f(m_, { ...r, ref: t, present: a }) });
  }
);
Yu.displayName = Ku;
var m_ = p.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, i = ju(Ku, n), [s, c] = p.useState(r), l = p.useRef(null), u = se(t, l), d = p.useRef(0), m = d.current, g = p.useRef(0), h = g.current, v = i.open || s, b = p.useRef(v), y = p.useRef(void 0);
  return p.useEffect(() => {
    const w = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), Oe(() => {
    const w = l.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const x = w.getBoundingClientRect();
      d.current = x.height, g.current = x.width, b.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), c(r);
    }
  }, [i.open, r]), /* @__PURE__ */ f(
    X.div,
    {
      "data-state": Xu(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !v,
      ...a,
      ref: u,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": h ? `${h}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Xu(e) {
  return e ? "open" : "closed";
}
var kg = Og, v_ = Uu, h_ = Yu, g_ = p.createContext(void 0);
function Ct(e) {
  const t = p.useContext(g_);
  return e || t || "ltr";
}
var Ut = "Accordion", b_ = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Qu, y_, w_] = sn(Ut), [Oa] = Pe(Ut, [
  w_,
  Dg
]), Zu = Dg(), Lg = F.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ f(Qu.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ f(__, { ...a, ref: t }) : /* @__PURE__ */ f(C_, { ...o, ref: t }) });
  }
);
Lg.displayName = Ut;
var [$g, x_] = Oa(Ut), [Fg, S_] = Oa(
  Ut,
  { collapsible: !1 }
), C_ = F.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, c] = De({
      prop: n,
      defaultProp: r,
      onChange: o
    });
    return /* @__PURE__ */ f(
      $g,
      {
        scope: e.__scopeAccordion,
        value: s ? [s] : [],
        onItemOpen: c,
        onItemClose: F.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ f(Fg, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ f(zg, { ...i, ref: t }) })
      }
    );
  }
), __ = F.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = De({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = F.useCallback(
    (u) => s((d = []) => [...d, u]),
    [s]
  ), l = F.useCallback(
    (u) => s((d = []) => d.filter((m) => m !== u)),
    [s]
  );
  return /* @__PURE__ */ f(
    $g,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ f(Fg, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ f(zg, { ...a, ref: t }) })
    }
  );
}), [P_, Ia] = Oa(Ut), zg = F.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...i } = e, s = F.useRef(null), c = se(s, t), l = y_(n), d = Ct(o) === "ltr", m = q(e.onKeyDown, (g) => {
      var E;
      if (!b_.includes(g.key)) return;
      const h = g.target, v = l().filter((R) => {
        var k;
        return !((k = R.ref.current) != null && k.disabled);
      }), b = v.findIndex((R) => R.ref.current === h), y = v.length;
      if (b === -1) return;
      g.preventDefault();
      let w = b;
      const x = 0, S = y - 1, _ = () => {
        w = b + 1, w > S && (w = x);
      }, P = () => {
        w = b - 1, w < x && (w = S);
      };
      switch (g.key) {
        case "Home":
          w = x;
          break;
        case "End":
          w = S;
          break;
        case "ArrowRight":
          a === "horizontal" && (d ? _() : P());
          break;
        case "ArrowDown":
          a === "vertical" && _();
          break;
        case "ArrowLeft":
          a === "horizontal" && (d ? P() : _());
          break;
        case "ArrowUp":
          a === "vertical" && P();
          break;
      }
      const C = w % y;
      (E = v[C].ref.current) == null || E.focus();
    });
    return /* @__PURE__ */ f(
      P_,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ f(Qu.Slot, { scope: n, children: /* @__PURE__ */ f(
          X.div,
          {
            ...i,
            "data-orientation": a,
            ref: c,
            onKeyDown: r ? void 0 : m
          }
        ) })
      }
    );
  }
), ia = "AccordionItem", [E_, Ju] = Oa(ia), R_ = F.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = Ia(ia, n), i = x_(ia, n), s = Zu(n), c = Me(), l = r && i.value.includes(r) || !1, u = a.disabled || e.disabled;
    return /* @__PURE__ */ f(
      E_,
      {
        scope: n,
        open: l,
        disabled: u,
        triggerId: c,
        children: /* @__PURE__ */ f(
          kg,
          {
            "data-orientation": a.orientation,
            "data-state": Hg(l),
            ...s,
            ...o,
            ref: t,
            disabled: u,
            open: l,
            onOpenChange: (d) => {
              d ? i.onItemOpen(r) : i.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
R_.displayName = ia;
var Bg = "AccordionHeader", M_ = F.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ia(Ut, n), a = Ju(Bg, n);
    return /* @__PURE__ */ f(
      X.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Hg(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
M_.displayName = Bg;
var tu = "AccordionTrigger", T_ = F.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ia(Ut, n), a = Ju(tu, n), i = S_(tu, n), s = Zu(n);
    return /* @__PURE__ */ f(Qu.ItemSlot, { scope: n, children: /* @__PURE__ */ f(
      v_,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...s,
        ...r,
        ref: t
      }
    ) });
  }
);
T_.displayName = tu;
var qg = "AccordionContent", N_ = F.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ia(Ut, n), a = Ju(qg, n), i = Zu(n);
    return /* @__PURE__ */ f(
      h_,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...i,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
N_.displayName = qg;
function Hg(e) {
  return e ? "open" : "closed";
}
var A_ = Lg;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), O_ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), np = (e) => {
  const t = O_(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Wg = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var I_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k_ = Aa(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => Jl(
    "svg",
    {
      ref: c,
      ...I_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Wg("lucide", o),
      ...s
    },
    [
      ...i.map(([l, u]) => Jl(l, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (e, t) => {
  const n = Aa(
    ({ className: r, ...o }, a) => Jl(k_, {
      ref: a,
      iconNode: t,
      className: Wg(
        `lucide-${D_(np(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = np(e), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L_ = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], $_ = st("arrow-left", L_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F_ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], z_ = st("arrow-right", F_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Vg = st("check", B_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q_ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ed = st("chevron-down", q_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H_ = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Gg = st("chevron-left", H_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W_ = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], td = st("chevron-right", W_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V_ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], G_ = st("chevron-up", V_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], U_ = st("circle", j_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K_ = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], jg = st("ellipsis", K_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y_ = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], X_ = st("grip-vertical", Y_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q_ = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], Z_ = st("panel-left", Q_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J_ = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], eP = st("search", J_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tP = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ug = st("x", tP);
function Kg(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Kg(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ir() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Kg(e)) && (r && (r += " "), r += t);
  return r;
}
const nd = "-", nP = (e) => {
  const t = oP(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(nd);
      return s[0] === "" && s.length !== 1 && s.shift(), Yg(s, t) || rP(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = n[i] || [];
      return s && r[i] ? [...c, ...r[i]] : c;
    }
  };
}, Yg = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Yg(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(nd);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, rp = /^\[(.+)\]$/, rP = (e) => {
  if (rp.test(e)) {
    const t = rp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, oP = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    nu(n[o], r, o, t);
  return r;
}, nu = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : op(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (aP(o)) {
        nu(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      nu(i, op(t, a), n, r);
    });
  });
}, op = (e, t) => {
  let n = e;
  return t.split(nd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, aP = (e) => e.isThemeGetter, iP = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = r.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    }
  };
}, ru = "!", ou = ":", sP = ou.length, cP = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let i = 0, s = 0, c = 0, l;
    for (let h = 0; h < o.length; h++) {
      let v = o[h];
      if (i === 0 && s === 0) {
        if (v === ou) {
          a.push(o.slice(c, h)), c = h + sP;
          continue;
        }
        if (v === "/") {
          l = h;
          continue;
        }
      }
      v === "[" ? i++ : v === "]" ? i-- : v === "(" ? s++ : v === ")" && s--;
    }
    const u = a.length === 0 ? o : o.substring(c), d = lP(u), m = d !== u, g = l && l > c ? l - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: d,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const o = t + ou, a = r;
    r = (i) => i.startsWith(o) ? a(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, lP = (e) => e.endsWith(ru) ? e.substring(0, e.length - 1) : e.startsWith(ru) ? e.substring(1) : e, uP = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let a = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...a.sort(), i), a = []) : a.push(i);
    }), o.push(...a.sort()), o;
  };
}, dP = (e) => ({
  cache: iP(e.cacheSize),
  parseClassName: cP(e),
  sortModifiers: uP(e),
  ...nP(e)
}), fP = /\s+/, pP = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(fP);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const u = s[l], {
      isExternal: d,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: v
    } = n(u);
    if (d) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let b = !!v, y = r(b ? h.substring(0, v) : h);
    if (!y) {
      if (!b) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (y = r(h), !y) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const w = a(m).join(":"), x = g ? w + ru : w, S = x + y;
    if (i.includes(S))
      continue;
    i.push(S);
    const _ = o(y, b);
    for (let P = 0; P < _.length; ++P) {
      const C = _[P];
      i.push(x + C);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function mP() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Xg(t)) && (r && (r += " "), r += n);
  return r;
}
const Xg = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Xg(e[r])) && (n && (n += " "), n += t);
  return n;
};
function vP(e, ...t) {
  let n, r, o, a = i;
  function i(c) {
    const l = t.reduce((u, d) => d(u), e());
    return n = dP(l), r = n.cache.get, o = n.cache.set, a = s, s(c);
  }
  function s(c) {
    const l = r(c);
    if (l)
      return l;
    const u = pP(c, n);
    return o(c, u), u;
  }
  return function() {
    return a(mP.apply(null, arguments));
  };
}
const ze = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Qg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Zg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, hP = /^\d+\/\d+$/, gP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, yP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, wP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Vn = (e) => hP.test(e), ve = (e) => !!e && !Number.isNaN(Number(e)), Zt = (e) => !!e && Number.isInteger(Number(e)), Ri = (e) => e.endsWith("%") && ve(e.slice(0, -1)), Bt = (e) => gP.test(e), SP = () => !0, CP = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  bP.test(e) && !yP.test(e)
), Jg = () => !1, _P = (e) => wP.test(e), PP = (e) => xP.test(e), EP = (e) => !oe(e) && !ae(e), RP = (e) => gr(e, nb, Jg), oe = (e) => Qg.test(e), bn = (e) => gr(e, rb, CP), Mi = (e) => gr(e, DP, ve), ap = (e) => gr(e, eb, Jg), MP = (e) => gr(e, tb, PP), Fo = (e) => gr(e, ob, _P), ae = (e) => Zg.test(e), Tr = (e) => br(e, rb), TP = (e) => br(e, OP), ip = (e) => br(e, eb), NP = (e) => br(e, nb), AP = (e) => br(e, tb), zo = (e) => br(e, ob, !0), gr = (e, t, n) => {
  const r = Qg.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, br = (e, t, n = !1) => {
  const r = Zg.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, eb = (e) => e === "position" || e === "percentage", tb = (e) => e === "image" || e === "url", nb = (e) => e === "length" || e === "size" || e === "bg-size", rb = (e) => e === "length", DP = (e) => e === "number", OP = (e) => e === "family-name", ob = (e) => e === "shadow", IP = () => {
  const e = ze("color"), t = ze("font"), n = ze("text"), r = ze("font-weight"), o = ze("tracking"), a = ze("leading"), i = ze("breakpoint"), s = ze("container"), c = ze("spacing"), l = ze("radius"), u = ze("shadow"), d = ze("inset-shadow"), m = ze("text-shadow"), g = ze("drop-shadow"), h = ze("blur"), v = ze("perspective"), b = ze("aspect"), y = ze("ease"), w = ze("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], _ = () => [...S(), ae, oe], P = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", "contain", "none"], E = () => [ae, oe, c], R = () => [Vn, "full", "auto", ...E()], k = () => [Zt, "none", "subgrid", ae, oe], A = () => ["auto", {
    span: ["full", Zt, ae, oe]
  }, Zt, ae, oe], z = () => [Zt, "auto", ae, oe], T = () => ["auto", "min", "max", "fr", ae, oe], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...E()], L = () => [Vn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], M = () => [e, ae, oe], j = () => [...S(), ip, ap, {
    position: [ae, oe]
  }], ne = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], re = () => ["auto", "cover", "contain", NP, RP, {
    size: [ae, oe]
  }], $ = () => [Ri, Tr, bn], O = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    ae,
    oe
  ], V = () => ["", ve, Tr, bn], G = () => ["solid", "dashed", "dotted", "double"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [ve, Ri, ip, ap], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    ae,
    oe
  ], Q = () => ["none", ve, ae, oe], Z = () => ["none", ve, ae, oe], J = () => [ve, ae, oe], U = () => [Vn, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Bt],
      breakpoint: [Bt],
      color: [SP],
      container: [Bt],
      "drop-shadow": [Bt],
      ease: ["in", "out", "in-out"],
      font: [EP],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Bt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Bt],
      shadow: [Bt],
      spacing: ["px", ve],
      text: [Bt],
      "text-shadow": [Bt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Vn, oe, ae, b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ve, oe, ae, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: _()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Zt, "auto", ae, oe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Vn, "full", "auto", s, ...E()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ve, Vn, "auto", "initial", "none", oe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ve, ae, oe]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ve, ae, oe]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Zt, "first", "last", "none", ae, oe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": k()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: A()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": k()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: A()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": T()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": T()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: E()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": E()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": E()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: E()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: E()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: E()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: E()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: E()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: E()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: E()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: E()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: E()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": E()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": E()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: L()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...L()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...L()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Tr, bn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, ae, Mi]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ri, oe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [TP, oe, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, ae, oe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ve, "none", ae, Mi]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ae, oe]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", ae, oe]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ve, "from-font", "auto", ae, bn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ve, "auto", ae, oe]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae, oe]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ae, oe]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: j()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ne()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: re()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Zt, ae, oe],
          radial: ["", ae, oe],
          conic: [Zt, ae, oe]
        }, AP, MP]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: $()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: $()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: O()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": O()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": O()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": O()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": O()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": O()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": O()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": O()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": O()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": O()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": O()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": O()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": O()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": O()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": O()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: V()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": V()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": V()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": V()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": V()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": V()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": V()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": V()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": V()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": V()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": V()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...G(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...G(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ve, ae, oe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ve, Tr, bn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          u,
          zo,
          Fo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, zo, Fo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: V()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ve, bn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": V()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, zo, Fo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ve, ae, oe]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Y(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ve]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": D()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": D()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": D()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": D()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": D()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": D()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": D()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [ae, oe]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ve]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": D()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: j()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ne()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: re()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", ae, oe]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ae,
          oe
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: K()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ve, ae, oe]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ve, ae, oe]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          zo,
          Fo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ve, ae, oe]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ve, ae, oe]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ve, ae, oe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ve, ae, oe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ve, ae, oe]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ae,
          oe
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": K()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ve, ae, oe]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ve, ae, oe]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ve, ae, oe]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ve, ae, oe]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ve, ae, oe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ve, ae, oe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ve, ae, oe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ve, ae, oe]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": E()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": E()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": E()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ae, oe]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ve, "initial", ae, oe]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, ae, oe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ve, ae, oe]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, ae, oe]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [v, ae, oe]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": _()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Z()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Z()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Z()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Z()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: J()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": J()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": J()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ae, oe, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: _()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: U()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": U()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": U()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": U()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: M()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae, oe]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ae, oe]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ve, Tr, bn, Mi]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, kP = /* @__PURE__ */ vP(IP);
function I(...e) {
  return kP(ir(e));
}
function Xq({
  ...e
}) {
  return /* @__PURE__ */ f(A_, { "data-slot": "accordion", ...e });
}
function LP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _e(e);
  p.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var $P = "DismissableLayer", au = "dismissableLayer.update", FP = "dismissableLayer.pointerDownOutside", zP = "dismissableLayer.focusOutside", sp, ab = p.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), cn = p.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, l = p.useContext(ab), [u, d] = p.useState(null), m = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = p.useState({}), h = se(t, (C) => d(C)), v = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = u ? v.indexOf(u) : -1, x = l.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= y, _ = HP((C) => {
      const E = C.target, R = [...l.branches].some((k) => k.contains(E));
      !S || R || (o == null || o(C), i == null || i(C), C.defaultPrevented || s == null || s());
    }, m), P = WP((C) => {
      const E = C.target;
      [...l.branches].some((k) => k.contains(E)) || (a == null || a(C), i == null || i(C), C.defaultPrevented || s == null || s());
    }, m);
    return LP((C) => {
      w === l.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && s && (C.preventDefault(), s()));
    }, m), p.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (sp = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), cp(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = sp);
        };
    }, [u, m, n, l]), p.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), cp());
    }, [u, l]), p.useEffect(() => {
      const C = () => g({});
      return document.addEventListener(au, C), () => document.removeEventListener(au, C);
    }, []), /* @__PURE__ */ f(
      X.div,
      {
        ...c,
        ref: h,
        style: {
          pointerEvents: x ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
cn.displayName = $P;
var BP = "DismissableLayerBranch", qP = p.forwardRef((e, t) => {
  const n = p.useContext(ab), r = p.useRef(null), o = se(t, r);
  return p.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ f(X.div, { ...e, ref: o });
});
qP.displayName = BP;
function HP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _e(e), r = p.useRef(!1), o = p.useRef(() => {
  });
  return p.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          ib(
            FP,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function WP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _e(e), r = p.useRef(!1);
  return p.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && ib(zP, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function cp() {
  const e = new CustomEvent(au);
  document.dispatchEvent(e);
}
function ib(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? aa(o, a) : o.dispatchEvent(a);
}
var Ti = "focusScope.autoFocusOnMount", Ni = "focusScope.autoFocusOnUnmount", lp = { bubbles: !1, cancelable: !0 }, VP = "FocusScope", io = p.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = p.useState(null), l = _e(o), u = _e(a), d = p.useRef(null), m = se(t, (v) => c(v)), g = p.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  p.useEffect(() => {
    if (r) {
      let v = function(x) {
        if (g.paused || !s) return;
        const S = x.target;
        s.contains(S) ? d.current = S : en(d.current, { select: !0 });
      }, b = function(x) {
        if (g.paused || !s) return;
        const S = x.relatedTarget;
        S !== null && (s.contains(S) || en(d.current, { select: !0 }));
      }, y = function(x) {
        if (document.activeElement === document.body)
          for (const _ of x)
            _.removedNodes.length > 0 && en(s);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", b);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, s, g.paused]), p.useEffect(() => {
    if (s) {
      dp.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const y = new CustomEvent(Ti, lp);
        s.addEventListener(Ti, l), s.dispatchEvent(y), y.defaultPrevented || (GP(XP(sb(s)), { select: !0 }), document.activeElement === v && en(s));
      }
      return () => {
        s.removeEventListener(Ti, l), setTimeout(() => {
          const y = new CustomEvent(Ni, lp);
          s.addEventListener(Ni, u), s.dispatchEvent(y), y.defaultPrevented || en(v ?? document.body, { select: !0 }), s.removeEventListener(Ni, u), dp.remove(g);
        }, 0);
      };
    }
  }, [s, l, u, g]);
  const h = p.useCallback(
    (v) => {
      if (!n && !r || g.paused) return;
      const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
      if (b && y) {
        const w = v.currentTarget, [x, S] = jP(w);
        x && S ? !v.shiftKey && y === S ? (v.preventDefault(), n && en(x, { select: !0 })) : v.shiftKey && y === x && (v.preventDefault(), n && en(S, { select: !0 })) : y === w && v.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ f(X.div, { tabIndex: -1, ...i, ref: m, onKeyDown: h });
});
io.displayName = VP;
function GP(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (en(r, { select: t }), document.activeElement !== n) return;
}
function jP(e) {
  const t = sb(e), n = up(t, e), r = up(t.reverse(), e);
  return [n, r];
}
function sb(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function up(e, t) {
  for (const n of e)
    if (!UP(n, { upTo: t })) return n;
}
function UP(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function KP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function en(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && KP(e) && t && e.select();
  }
}
var dp = YP();
function YP() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = fp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = fp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function fp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function XP(e) {
  return e.filter((t) => t.tagName !== "A");
}
var QP = "Portal", kn = p.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = p.useState(!1);
  Oe(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Ag.createPortal(/* @__PURE__ */ f(X.div, { ...r, ref: t }), i) : null;
});
kn.displayName = QP;
var Ai = 0;
function ka() {
  p.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? pp()), document.body.insertAdjacentElement("beforeend", e[1] ?? pp()), Ai++, () => {
      Ai === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ai--;
    };
  }, []);
}
function pp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Mt = function() {
  return Mt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Mt.apply(this, arguments);
};
function cb(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ZP(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ea = "right-scroll-bar-position", ta = "width-before-scroll-bar", JP = "with-scroll-bars-hidden", eE = "--removed-body-scroll-bar-size";
function Di(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function tE(e, t) {
  var n = Vt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var nE = typeof window < "u" ? p.useLayoutEffect : p.useEffect, mp = /* @__PURE__ */ new WeakMap();
function rE(e, t) {
  var n = tE(null, function(r) {
    return e.forEach(function(o) {
      return Di(o, r);
    });
  });
  return nE(function() {
    var r = mp.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || Di(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Di(s, i);
      });
    }
    mp.set(n, e);
  }, [e]), n;
}
function oE(e) {
  return e;
}
function aE(e, t) {
  t === void 0 && (t = oE);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var c = function() {
        var u = i;
        i = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          i.push(u), l();
        },
        filter: function(u) {
          return i = i.filter(u), n;
        }
      };
    }
  };
  return o;
}
function iE(e) {
  e === void 0 && (e = {});
  var t = aE(null);
  return t.options = Mt({ async: !0, ssr: !1 }, e), t;
}
var lb = function(e) {
  var t = e.sideCar, n = cb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return p.createElement(r, Mt({}, n));
};
lb.isSideCarExport = !0;
function sE(e, t) {
  return e.useMedium(t), lb;
}
var ub = iE(), Oi = function() {
}, La = p.forwardRef(function(e, t) {
  var n = p.useRef(null), r = p.useState({
    onScrollCapture: Oi,
    onWheelCapture: Oi,
    onTouchMoveCapture: Oi
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, m = e.sideCar, g = e.noRelative, h = e.noIsolation, v = e.inert, b = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, x = e.gapMode, S = cb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = m, P = rE([n, t]), C = Mt(Mt({}, S), o);
  return p.createElement(
    p.Fragment,
    null,
    u && p.createElement(_, { sideCar: ub, removeScrollBar: l, shards: d, noRelative: g, noIsolation: h, inert: v, setCallbacks: a, allowPinchZoom: !!b, lockRef: n, gapMode: x }),
    i ? p.cloneElement(p.Children.only(s), Mt(Mt({}, C), { ref: P })) : p.createElement(w, Mt({}, C, { className: c, ref: P }), s)
  );
});
La.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
La.classNames = {
  fullWidth: ta,
  zeroRight: ea
};
var cE = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function lE() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = cE();
  return t && e.setAttribute("nonce", t), e;
}
function uE(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function dE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var fE = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = lE()) && (uE(t, n), dE(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, pE = function() {
  var e = fE();
  return function(t, n) {
    p.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, db = function() {
  var e = pE(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, mE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ii = function(e) {
  return parseInt(e || "", 10) || 0;
}, vE = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ii(n), Ii(r), Ii(o)];
}, hE = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return mE;
  var t = vE(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, gE = db(), tr = "data-scroll-locked", bE = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(JP, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(tr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ea, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ta, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ea, " .").concat(ea, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ta, " .").concat(ta, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(tr, `] {
    `).concat(eE, ": ").concat(s, `px;
  }
`);
}, vp = function() {
  var e = parseInt(document.body.getAttribute(tr) || "0", 10);
  return isFinite(e) ? e : 0;
}, yE = function() {
  p.useEffect(function() {
    return document.body.setAttribute(tr, (vp() + 1).toString()), function() {
      var e = vp() - 1;
      e <= 0 ? document.body.removeAttribute(tr) : document.body.setAttribute(tr, e.toString());
    };
  }, []);
}, wE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  yE();
  var a = p.useMemo(function() {
    return hE(o);
  }, [o]);
  return p.createElement(gE, { styles: bE(a, !t, o, n ? "" : "!important") });
}, iu = !1;
if (typeof window < "u")
  try {
    var Bo = Object.defineProperty({}, "passive", {
      get: function() {
        return iu = !0, !0;
      }
    });
    window.addEventListener("test", Bo, Bo), window.removeEventListener("test", Bo, Bo);
  } catch {
    iu = !1;
  }
var Gn = iu ? { passive: !1 } : !1, xE = function(e) {
  return e.tagName === "TEXTAREA";
}, fb = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !xE(e) && n[t] === "visible")
  );
}, SE = function(e) {
  return fb(e, "overflowY");
}, CE = function(e) {
  return fb(e, "overflowX");
}, hp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = pb(e, r);
    if (o) {
      var a = mb(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, _E = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, PE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, pb = function(e, t) {
  return e === "v" ? SE(t) : CE(t);
}, mb = function(e, t) {
  return e === "v" ? _E(t) : PE(t);
}, EE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, RE = function(e, t, n, r, o) {
  var a = EE(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, c = t.contains(s), l = !1, u = i > 0, d = 0, m = 0;
  do {
    if (!s)
      break;
    var g = mb(e, s), h = g[0], v = g[1], b = g[2], y = v - b - a * h;
    (h || y) && pb(e, s) && (d += y, m += h);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(m) < 1) && (l = !0), l;
}, qo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, gp = function(e) {
  return [e.deltaX, e.deltaY];
}, bp = function(e) {
  return e && "current" in e ? e.current : e;
}, ME = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, TE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, NE = 0, jn = [];
function AE(e) {
  var t = p.useRef([]), n = p.useRef([0, 0]), r = p.useRef(), o = p.useState(NE++)[0], a = p.useState(db)[0], i = p.useRef(e);
  p.useEffect(function() {
    i.current = e;
  }, [e]), p.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = ZP([e.lockRef.current], (e.shards || []).map(bp), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = p.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = qo(v), w = n.current, x = "deltaX" in v ? v.deltaX : w[0] - y[0], S = "deltaY" in v ? v.deltaY : w[1] - y[1], _, P = v.target, C = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in v && C === "h" && P.type === "range")
      return !1;
    var E = window.getSelection(), R = E && E.anchorNode, k = R ? R === P || R.contains(P) : !1;
    if (k)
      return !1;
    var A = hp(C, P);
    if (!A)
      return !0;
    if (A ? _ = C : (_ = C === "v" ? "h" : "v", A = hp(C, P)), !A)
      return !1;
    if (!r.current && "changedTouches" in v && (x || S) && (r.current = _), !_)
      return !0;
    var z = r.current || _;
    return RE(z, b, v, z === "h" ? x : S);
  }, []), c = p.useCallback(function(v) {
    var b = v;
    if (!(!jn.length || jn[jn.length - 1] !== a)) {
      var y = "deltaY" in b ? gp(b) : qo(b), w = t.current.filter(function(_) {
        return _.name === b.type && (_.target === b.target || b.target === _.shadowParent) && ME(_.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var x = (i.current.shards || []).map(bp).filter(Boolean).filter(function(_) {
          return _.contains(b.target);
        }), S = x.length > 0 ? s(b, x[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = p.useCallback(function(v, b, y, w) {
    var x = { name: v, delta: b, target: y, should: w, shadowParent: DE(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== x;
      });
    }, 1);
  }, []), u = p.useCallback(function(v) {
    n.current = qo(v), r.current = void 0;
  }, []), d = p.useCallback(function(v) {
    l(v.type, gp(v), v.target, s(v, e.lockRef.current));
  }, []), m = p.useCallback(function(v) {
    l(v.type, qo(v), v.target, s(v, e.lockRef.current));
  }, []);
  p.useEffect(function() {
    return jn.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, Gn), document.addEventListener("touchmove", c, Gn), document.addEventListener("touchstart", u, Gn), function() {
      jn = jn.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, Gn), document.removeEventListener("touchmove", c, Gn), document.removeEventListener("touchstart", u, Gn);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    h ? p.createElement(a, { styles: TE(o) }) : null,
    g ? p.createElement(wE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function DE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const OE = sE(ub, AE);
var so = p.forwardRef(function(e, t) {
  return p.createElement(La, Mt({}, e, { ref: t, sideCar: OE }));
});
so.classNames = La.classNames;
var IE = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Un = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), Wo = {}, ki = 0, vb = function(e) {
  return e && (e.host || vb(e.parentNode));
}, kE = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = vb(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, LE = function(e, t, n, r) {
  var o = kE(t, Array.isArray(e) ? e : [e]);
  Wo[n] || (Wo[n] = /* @__PURE__ */ new WeakMap());
  var a = Wo[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || s.has(d) || (s.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (s.has(m))
        u(m);
      else
        try {
          var g = m.getAttribute(r), h = g !== null && g !== "false", v = (Un.get(m) || 0) + 1, b = (a.get(m) || 0) + 1;
          Un.set(m, v), a.set(m, b), i.push(m), v === 1 && h && Ho.set(m, !0), b === 1 && m.setAttribute(n, "true"), h || m.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return u(t), s.clear(), ki++, function() {
    i.forEach(function(d) {
      var m = Un.get(d) - 1, g = a.get(d) - 1;
      Un.set(d, m), a.set(d, g), m || (Ho.has(d) || d.removeAttribute(r), Ho.delete(d)), g || d.removeAttribute(n);
    }), ki--, ki || (Un = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), Wo = {});
  };
}, $a = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = IE(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), LE(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, rd = "Dialog", [hb, gb] = Pe(rd), [$E, _t] = hb(rd), bb = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = p.useRef(null), c = p.useRef(null), [l = !1, u] = De({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ f(
    $E,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: Me(),
      titleId: Me(),
      descriptionId: Me(),
      open: l,
      onOpenChange: u,
      onOpenToggle: p.useCallback(() => u((d) => !d), [u]),
      modal: i,
      children: n
    }
  );
};
bb.displayName = rd;
var yb = "DialogTrigger", wb = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(yb, n), a = se(t, o.triggerRef);
    return /* @__PURE__ */ f(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": id(o.open),
        ...r,
        ref: a,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
wb.displayName = yb;
var od = "DialogPortal", [FE, xb] = hb(od, {
  forceMount: void 0
}), Sb = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = _t(od, t);
  return /* @__PURE__ */ f(FE, { scope: t, forceMount: n, children: p.Children.map(r, (i) => /* @__PURE__ */ f(Ee, { present: n || a.open, children: /* @__PURE__ */ f(kn, { asChild: !0, container: o, children: i }) })) });
};
Sb.displayName = od;
var sa = "DialogOverlay", Cb = p.forwardRef(
  (e, t) => {
    const n = xb(sa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = _t(sa, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ f(Ee, { present: r || a.open, children: /* @__PURE__ */ f(zE, { ...o, ref: t }) }) : null;
  }
);
Cb.displayName = sa;
var zE = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(sa, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f(so, { as: at, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f(
        X.div,
        {
          "data-state": id(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), En = "DialogContent", _b = p.forwardRef(
  (e, t) => {
    const n = xb(En, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = _t(En, e.__scopeDialog);
    return /* @__PURE__ */ f(Ee, { present: r || a.open, children: a.modal ? /* @__PURE__ */ f(BE, { ...o, ref: t }) : /* @__PURE__ */ f(qE, { ...o, ref: t }) });
  }
);
_b.displayName = En;
var BE = p.forwardRef(
  (e, t) => {
    const n = _t(En, e.__scopeDialog), r = p.useRef(null), o = se(t, n.contentRef, r);
    return p.useEffect(() => {
      const a = r.current;
      if (a) return $a(a);
    }, []), /* @__PURE__ */ f(
      Pb,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: q(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), qE = p.forwardRef(
  (e, t) => {
    const n = _t(En, e.__scopeDialog), r = p.useRef(!1), o = p.useRef(!1);
    return /* @__PURE__ */ f(
      Pb,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Pb = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = _t(En, n), c = p.useRef(null), l = se(t, c);
    return ka(), /* @__PURE__ */ ie(Le, { children: [
      /* @__PURE__ */ f(
        io,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ f(
            cn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": id(s.open),
              ...i,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ ie(Le, { children: [
        /* @__PURE__ */ f(WE, { titleId: s.titleId }),
        /* @__PURE__ */ f(GE, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), ad = "DialogTitle", Eb = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(ad, n);
    return /* @__PURE__ */ f(X.h2, { id: o.titleId, ...r, ref: t });
  }
);
Eb.displayName = ad;
var Rb = "DialogDescription", Mb = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(Rb, n);
    return /* @__PURE__ */ f(X.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Mb.displayName = Rb;
var Tb = "DialogClose", Nb = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(Tb, n);
    return /* @__PURE__ */ f(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Nb.displayName = Tb;
function id(e) {
  return e ? "open" : "closed";
}
var Ab = "DialogTitleWarning", [HE, Db] = e_(Ab, {
  contentName: En,
  titleName: ad,
  docsSlug: "dialog"
}), WE = ({ titleId: e }) => {
  const t = Db(Ab), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return p.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, VE = "DialogDescriptionWarning", GE = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Db(VE).contentName}}.`;
  return p.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, co = bb, Fa = wb, lo = Sb, uo = Cb, fo = _b, za = Eb, Ba = Mb, Ln = Nb, Ob = "AlertDialog", [jE] = Pe(Ob, [
  gb
]), Kt = gb(), Ib = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Kt(t);
  return /* @__PURE__ */ f(co, { ...r, ...n, modal: !0 });
};
Ib.displayName = Ob;
var UE = "AlertDialogTrigger", KE = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Kt(n);
    return /* @__PURE__ */ f(Fa, { ...o, ...r, ref: t });
  }
);
KE.displayName = UE;
var YE = "AlertDialogPortal", kb = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Kt(t);
  return /* @__PURE__ */ f(lo, { ...r, ...n });
};
kb.displayName = YE;
var XE = "AlertDialogOverlay", Lb = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Kt(n);
    return /* @__PURE__ */ f(uo, { ...o, ...r, ref: t });
  }
);
Lb.displayName = XE;
var nr = "AlertDialogContent", [QE, ZE] = jE(nr), $b = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = Kt(n), i = p.useRef(null), s = se(t, i), c = p.useRef(null);
    return /* @__PURE__ */ f(
      HE,
      {
        contentName: nr,
        titleName: Fb,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ f(QE, { scope: n, cancelRef: c, children: /* @__PURE__ */ ie(
          fo,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: q(o.onOpenAutoFocus, (l) => {
              var u;
              l.preventDefault(), (u = c.current) == null || u.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (l) => l.preventDefault(),
            onInteractOutside: (l) => l.preventDefault(),
            children: [
              /* @__PURE__ */ f(Vu, { children: r }),
              /* @__PURE__ */ f(eR, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
$b.displayName = nr;
var Fb = "AlertDialogTitle", zb = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Kt(n);
    return /* @__PURE__ */ f(za, { ...o, ...r, ref: t });
  }
);
zb.displayName = Fb;
var Bb = "AlertDialogDescription", qb = p.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Kt(n);
  return /* @__PURE__ */ f(Ba, { ...o, ...r, ref: t });
});
qb.displayName = Bb;
var JE = "AlertDialogAction", Hb = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Kt(n);
    return /* @__PURE__ */ f(Ln, { ...o, ...r, ref: t });
  }
);
Hb.displayName = JE;
var Wb = "AlertDialogCancel", Vb = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = ZE(Wb, n), a = Kt(n), i = se(t, o);
    return /* @__PURE__ */ f(Ln, { ...a, ...r, ref: i });
  }
);
Vb.displayName = Wb;
var eR = ({ contentRef: e }) => {
  const t = `\`${nr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${nr}\` by passing a \`${Bb}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${nr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return p.useEffect(() => {
    var r;
    document.getElementById(
      (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, tR = Ib, nR = kb, rR = Lb, oR = $b, aR = Hb, iR = Vb, sR = zb, cR = qb;
const yp = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, wp = ir, yr = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return wp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null) return null;
    const m = yp(u) || yp(d);
    return o[l][m];
  }), s = n && Object.entries(n).reduce((l, u) => {
    let [d, m] = u;
    return m === void 0 || (l[d] = m), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: m, ...g } = u;
    return Object.entries(g).every((h) => {
      let [v, b] = h;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...s
      }[v]) : {
        ...a,
        ...s
      }[v] === b;
    }) ? [
      ...l,
      d,
      m
    ] : l;
  }, []);
  return wp(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, sr = yr(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function sd({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...o
}) {
  return /* @__PURE__ */ f(
    r ? at : "button",
    {
      "data-slot": "button",
      className: I(sr({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
function Qq({
  ...e
}) {
  return /* @__PURE__ */ f(tR, { "data-slot": "alert-dialog", ...e });
}
function lR({
  ...e
}) {
  return /* @__PURE__ */ f(nR, { "data-slot": "alert-dialog-portal", ...e });
}
function uR({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    rR,
    {
      "data-slot": "alert-dialog-overlay",
      className: I(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Zq({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ ie(lR, { children: [
    /* @__PURE__ */ f(uR, {}),
    /* @__PURE__ */ f(
      oR,
      {
        "data-slot": "alert-dialog-content",
        className: I(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function Jq({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: I("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function eH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: I(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function tH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    sR,
    {
      "data-slot": "alert-dialog-title",
      className: I("text-lg font-semibold", e),
      ...t
    }
  );
}
function nH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    cR,
    {
      "data-slot": "alert-dialog-description",
      className: I("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function rH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    aR,
    {
      className: I(sr(), e),
      ...t
    }
  );
}
function oH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    iR,
    {
      className: I(sr({ variant: "outline" }), e),
      ...t
    }
  );
}
const dR = yr(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function aH({
  className: e,
  variant: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: I(dR({ variant: t }), e),
      ...n
    }
  );
}
function iH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-title",
      className: I(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        e
      ),
      ...t
    }
  );
}
function sH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "alert-description",
      className: I(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
var fR = "AspectRatio", Gb = p.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ f(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ f(
          X.div,
          {
            ...o,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
Gb.displayName = fR;
var pR = Gb;
function cH({
  ...e
}) {
  return /* @__PURE__ */ f(pR, { "data-slot": "aspect-ratio", ...e });
}
var cd = "Avatar", [mR] = Pe(cd), [vR, jb] = mR(cd), Ub = p.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = p.useState("idle");
    return /* @__PURE__ */ f(
      vR,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ f(X.span, { ...r, ref: t })
      }
    );
  }
);
Ub.displayName = cd;
var Kb = "AvatarImage", Yb = p.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = jb(Kb, n), s = hR(r, a.referrerPolicy), c = _e((l) => {
      o(l), i.onImageLoadingStatusChange(l);
    });
    return Oe(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ f(X.img, { ...a, ref: t, src: r }) : null;
  }
);
Yb.displayName = Kb;
var Xb = "AvatarFallback", Qb = p.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = jb(Xb, n), [i, s] = p.useState(r === void 0);
    return p.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ f(X.span, { ...o, ref: t }) : null;
  }
);
Qb.displayName = Xb;
function hR(e, t) {
  const [n, r] = p.useState("idle");
  return Oe(() => {
    if (!e) {
      r("error");
      return;
    }
    let o = !0;
    const a = new window.Image(), i = (s) => () => {
      o && r(s);
    };
    return r("loading"), a.onload = i("loaded"), a.onerror = i("error"), a.src = e, t && (a.referrerPolicy = t), () => {
      o = !1;
    };
  }, [e, t]), n;
}
var gR = Ub, bR = Yb, yR = Qb;
function lH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    gR,
    {
      "data-slot": "avatar",
      className: I(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  );
}
function uH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    bR,
    {
      "data-slot": "avatar-image",
      className: I("aspect-square size-full", e),
      ...t
    }
  );
}
function dH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    yR,
    {
      "data-slot": "avatar-fallback",
      className: I(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...t
    }
  );
}
const wR = yr(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function fH({
  className: e,
  variant: t,
  asChild: n = !1,
  ...r
}) {
  return /* @__PURE__ */ f(
    n ? at : "span",
    {
      "data-slot": "badge",
      className: I(wR({ variant: t }), e),
      ...r
    }
  );
}
function pH({ ...e }) {
  return /* @__PURE__ */ f("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function mH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: I(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function vH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: I("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function hH({
  asChild: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    e ? at : "a",
    {
      "data-slot": "breadcrumb-link",
      className: I("hover:text-foreground transition-colors", t),
      ...n
    }
  );
}
function gH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: I("text-foreground font-normal", e),
      ...t
    }
  );
}
function bH({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: I("[&>svg]:size-3.5", t),
      ...n,
      children: e ?? /* @__PURE__ */ f(td, {})
    }
  );
}
function yH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ ie(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: I("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ f(jg, { className: "size-4" }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function ge(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function it(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ve(e, t) {
  const n = ge(e);
  return isNaN(t) ? it(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function yt(e, t) {
  const n = ge(e);
  if (isNaN(t)) return it(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = it(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const ld = 6048e5, xR = 864e5;
let SR = {};
function po() {
  return SR;
}
function Ot(e, t) {
  var s, c, l, u;
  const n = po(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ge(e), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Rn(e) {
  return Ot(e, { weekStartsOn: 1 });
}
function Zb(e) {
  const t = ge(e), n = t.getFullYear(), r = it(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Rn(r), a = it(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Rn(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function cr(e) {
  const t = ge(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ca(e) {
  const t = ge(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Tt(e, t) {
  const n = cr(e), r = cr(t), o = +n - ca(n), a = +r - ca(r);
  return Math.round((o - a) / xR);
}
function CR(e) {
  const t = Zb(e), n = it(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Rn(n);
}
function su(e, t) {
  const n = t * 7;
  return Ve(e, n);
}
function _R(e, t) {
  return yt(e, t * 12);
}
function PR(e) {
  let t;
  return e.forEach(function(n) {
    const r = ge(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ER(e) {
  let t;
  return e.forEach((n) => {
    const r = ge(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Je(e, t) {
  const n = cr(e), r = cr(t);
  return +n == +r;
}
function ud(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function RR(e) {
  if (!ud(e) && typeof e != "number")
    return !1;
  const t = ge(e);
  return !isNaN(Number(t));
}
function Ur(e, t) {
  const n = ge(e), r = ge(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function MR(e, t, n) {
  const r = Ot(e, n), o = Ot(t, n), a = +r - ca(r), i = +o - ca(o);
  return Math.round((a - i) / ld);
}
function dd(e) {
  const t = ge(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function et(e) {
  const t = ge(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Jb(e) {
  const t = ge(e), n = it(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function fd(e, t) {
  var s, c, l, u;
  const n = po(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ge(e), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function ey(e) {
  return fd(e, { weekStartsOn: 1 });
}
const TR = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, NR = (e, t, n) => {
  let r;
  const o = TR[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Li(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const AR = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, DR = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, OR = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, IR = {
  date: Li({
    formats: AR,
    defaultWidth: "full"
  }),
  time: Li({
    formats: DR,
    defaultWidth: "full"
  }),
  dateTime: Li({
    formats: OR,
    defaultWidth: "full"
  })
}, kR = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, LR = (e, t, n, r) => kR[e];
function Nr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const $R = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, FR = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, zR = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, BR = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, qR = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, HR = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, WR = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, VR = {
  ordinalNumber: WR,
  era: Nr({
    values: $R,
    defaultWidth: "wide"
  }),
  quarter: Nr({
    values: FR,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Nr({
    values: zR,
    defaultWidth: "wide"
  }),
  day: Nr({
    values: BR,
    defaultWidth: "wide"
  }),
  dayPeriod: Nr({
    values: qR,
    defaultWidth: "wide",
    formattingValues: HR,
    defaultFormattingWidth: "wide"
  })
};
function Ar(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? jR(s, (d) => d.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      GR(s, (d) => d.test(i))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(l)
    ) : l;
    const u = t.slice(i.length);
    return { value: l, rest: u };
  };
}
function GR(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function jR(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function UR(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const KR = /^(\d+)(th|st|nd|rd)?/i, YR = /\d+/i, XR = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, QR = {
  any: [/^b/i, /^(a|c)/i]
}, ZR = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, JR = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, eM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, tM = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, nM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, rM = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, oM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, aM = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, iM = {
  ordinalNumber: UR({
    matchPattern: KR,
    parsePattern: YR,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ar({
    matchPatterns: XR,
    defaultMatchWidth: "wide",
    parsePatterns: QR,
    defaultParseWidth: "any"
  }),
  quarter: Ar({
    matchPatterns: ZR,
    defaultMatchWidth: "wide",
    parsePatterns: JR,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ar({
    matchPatterns: eM,
    defaultMatchWidth: "wide",
    parsePatterns: tM,
    defaultParseWidth: "any"
  }),
  day: Ar({
    matchPatterns: nM,
    defaultMatchWidth: "wide",
    parsePatterns: rM,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ar({
    matchPatterns: oM,
    defaultMatchWidth: "any",
    parsePatterns: aM,
    defaultParseWidth: "any"
  })
}, ty = {
  code: "en-US",
  formatDistance: NR,
  formatLong: IR,
  formatRelative: LR,
  localize: VR,
  match: iM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function sM(e) {
  const t = ge(e);
  return Tt(t, Jb(t)) + 1;
}
function ny(e) {
  const t = ge(e), n = +Rn(t) - +CR(t);
  return Math.round(n / ld) + 1;
}
function ry(e, t) {
  var u, d, m, g;
  const n = ge(e), r = n.getFullYear(), o = po(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = it(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Ot(i, t), c = it(e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = Ot(c, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function cM(e, t) {
  var s, c, l, u;
  const n = po(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = ry(e, t), a = it(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Ot(a, t);
}
function oy(e, t) {
  const n = ge(e), r = +Ot(n, t) - +cM(n, t);
  return Math.round(r / ld) + 1;
}
function Ce(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Jt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ce(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ce(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ce(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Ce(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ce(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ce(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ce(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ce(o, t.length);
  }
}, Kn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, xp = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Jt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = ry(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return Ce(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Ce(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Zb(e);
    return Ce(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Ce(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return Ce(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return Ce(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Jt.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return Ce(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = oy(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ce(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = ny(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ce(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Jt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = sM(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ce(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return Ce(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return Ce(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return Ce(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = Kn.noon : r === 0 ? o = Kn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = Kn.evening : r >= 12 ? o = Kn.afternoon : r >= 4 ? o = Kn.morning : o = Kn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Jt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Jt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ce(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ce(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Jt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Jt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Jt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Cp(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Sn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Sn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Cp(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Sn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Sn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Sp(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Sn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Sp(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Sn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Ce(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Ce(r, t.length);
  }
};
function Sp(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Ce(a, 2);
}
function Cp(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ce(Math.abs(e) / 60, 2) : Sn(e, t);
}
function Sn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Ce(Math.trunc(r / 60), 2), a = Ce(r % 60, 2);
  return n + o + t + a;
}
const _p = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, ay = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, lM = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return _p(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", _p(r, t)).replace("{{time}}", ay(o, t));
}, uM = {
  p: ay,
  P: lM
}, dM = /^D+$/, fM = /^Y+$/, pM = ["D", "DD", "YY", "YYYY"];
function mM(e) {
  return dM.test(e);
}
function vM(e) {
  return fM.test(e);
}
function hM(e, t, n) {
  const r = gM(e, t, n);
  if (console.warn(r), pM.includes(e)) throw new RangeError(r);
}
function gM(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const bM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, yM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, wM = /^'([^]*?)'?$/, xM = /''/g, SM = /[a-zA-Z]/;
function $n(e, t, n) {
  var u, d, m, g, h, v, b, y;
  const r = po(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? ty, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((y = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = ge(e);
  if (!RR(s))
    throw new RangeError("Invalid time value");
  let c = t.match(yM).map((w) => {
    const x = w[0];
    if (x === "p" || x === "P") {
      const S = uM[x];
      return S(w, o.formatLong);
    }
    return w;
  }).join("").match(bM).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const x = w[0];
    if (x === "'")
      return { isToken: !1, value: CM(w) };
    if (xp[x])
      return { isToken: !0, value: w };
    if (x.match(SM))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: w };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((w) => {
    if (!w.isToken) return w.value;
    const x = w.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && vM(x) || !(n != null && n.useAdditionalDayOfYearTokens) && mM(x)) && hM(x, t, String(e));
    const S = xp[x[0]];
    return S(s, x, o.localize, l);
  }).join("");
}
function CM(e) {
  const t = e.match(wM);
  return t ? t[1].replace(xM, "'") : e;
}
function _M(e) {
  const t = ge(e), n = t.getFullYear(), r = t.getMonth(), o = it(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function PM(e) {
  return Math.trunc(+ge(e) / 1e3);
}
function EM(e) {
  const t = ge(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function RM(e, t) {
  return MR(
    EM(e),
    et(e),
    t
  ) + 1;
}
function cu(e, t) {
  const n = ge(e), r = ge(t);
  return n.getTime() > r.getTime();
}
function iy(e, t) {
  const n = ge(e), r = ge(t);
  return +n < +r;
}
function pd(e, t) {
  const n = ge(e), r = ge(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function MM(e, t) {
  const n = ge(e), r = ge(t);
  return n.getFullYear() === r.getFullYear();
}
function $i(e, t) {
  return Ve(e, -t);
}
function Fi(e, t) {
  const n = ge(e), r = n.getFullYear(), o = n.getDate(), a = it(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const i = _M(a);
  return n.setMonth(t, Math.min(o, i)), n;
}
function Pp(e, t) {
  const n = ge(e);
  return isNaN(+n) ? it(e, NaN) : (n.setFullYear(t), n);
}
var le = function() {
  return le = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, le.apply(this, arguments);
};
function TM(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function sy(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function mo(e) {
  return e.mode === "multiple";
}
function vo(e) {
  return e.mode === "range";
}
function qa(e) {
  return e.mode === "single";
}
var NM = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function AM(e, t) {
  return $n(e, "LLLL y", t);
}
function DM(e, t) {
  return $n(e, "d", t);
}
function OM(e, t) {
  return $n(e, "LLLL", t);
}
function IM(e) {
  return "".concat(e);
}
function kM(e, t) {
  return $n(e, "cccccc", t);
}
function LM(e, t) {
  return $n(e, "yyyy", t);
}
var $M = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: AM,
  formatDay: DM,
  formatMonthCaption: OM,
  formatWeekNumber: IM,
  formatWeekdayName: kM,
  formatYearCaption: LM
}), FM = function(e, t, n) {
  return $n(e, "do MMMM (EEEE)", n);
}, zM = function() {
  return "Month: ";
}, BM = function() {
  return "Go to next month";
}, qM = function() {
  return "Go to previous month";
}, HM = function(e, t) {
  return $n(e, "cccc", t);
}, WM = function(e) {
  return "Week n. ".concat(e);
}, VM = function() {
  return "Year: ";
}, GM = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: FM,
  labelMonthDropdown: zM,
  labelNext: BM,
  labelPrevious: qM,
  labelWeekNumber: WM,
  labelWeekday: HM,
  labelYearDropdown: VM
});
function jM() {
  var e = "buttons", t = NM, n = ty, r = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: $M,
    labels: GM,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function UM(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = et(r) : t && (a = new Date(t, 0, 1)), o ? i = dd(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? cr(a) : void 0,
    toDate: i ? cr(i) : void 0
  };
}
var cy = On(void 0);
function KM(e) {
  var t, n = e.initialProps, r = jM(), o = UM(n), a = o.fromDate, i = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  (qa(n) || mo(n) || vo(n)) && (c = n.onSelect);
  var l = le(le(le({}, r), n), { captionLayout: s, classNames: le(le({}, r.classNames), n.classNames), components: le({}, n.components), formatters: le(le({}, r.formatters), n.formatters), fromDate: a, labels: le(le({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: le(le({}, r.modifiers), n.modifiers), modifiersClassNames: le(le({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: le(le({}, r.styles), n.styles), toDate: i });
  return f(cy.Provider, { value: l, children: e.children });
}
function Re() {
  var e = In(cy);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function ly(e) {
  var t = Re(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return f("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function YM(e) {
  return f("svg", le({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: f("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function uy(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, l = Re(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : YM;
  return ie("div", { className: s, style: c, children: [f("span", { className: l.classNames.vhidden, children: e["aria-label"] }), f("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r, children: a }), ie("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [i, f(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function XM(e) {
  var t, n = Re(), r = n.fromDate, o = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return f(Le, {});
  if (!o)
    return f(Le, {});
  var d = [];
  if (MM(r, o))
    for (var m = et(r), g = r.getMonth(); g <= o.getMonth(); g++)
      d.push(Fi(m, g));
  else
    for (var m = et(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      d.push(Fi(m, g));
  var h = function(b) {
    var y = Number(b.target.value), w = Fi(et(e.displayMonth), y);
    e.onChange(w);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : uy;
  return f(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: d.map(function(b) {
    return f("option", { value: b.getMonth(), children: s(b, { locale: i }) }, b.getMonth());
  }) });
}
function QM(e) {
  var t, n = e.displayMonth, r = Re(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, m = [];
  if (!o)
    return f(Le, {});
  if (!a)
    return f(Le, {});
  for (var g = o.getFullYear(), h = a.getFullYear(), v = g; v <= h; v++)
    m.push(Pp(Jb(/* @__PURE__ */ new Date()), v));
  var b = function(w) {
    var x = Pp(et(n), Number(w.target.value));
    e.onChange(x);
  }, y = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : uy;
  return f(y, { name: "years", "aria-label": d(), className: c.dropdown_year, style: s.dropdown_year, onChange: b, value: n.getFullYear(), caption: u(n, { locale: i }), children: m.map(function(w) {
    return f("option", { value: w.getFullYear(), children: u(w, { locale: i }) }, w.getFullYear());
  }) });
}
function ZM(e, t) {
  var n = Vt(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function JM(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && Ur(a, o) < 0) {
    var l = -1 * (c - 1);
    o = yt(a, l);
  }
  return i && Ur(o, i) < 0 && (o = i), et(o);
}
function e1() {
  var e = Re(), t = JM(e), n = ZM(t, e.month), r = n[0], o = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = et(i);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [r, a];
}
function t1(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = et(e), a = et(yt(o, r)), i = Ur(a, o), s = [], c = 0; c < i; c++) {
    var l = yt(o, c);
    s.push(l);
  }
  return n && (s = s.reverse()), s;
}
function n1(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = et(e);
    if (!n)
      return yt(s, i);
    var c = Ur(n, e);
    if (!(c < a))
      return yt(s, i);
  }
}
function r1(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = et(e);
    if (!n)
      return yt(s, -i);
    var c = Ur(s, n);
    if (!(c <= 0))
      return yt(s, -i);
  }
}
var dy = On(void 0);
function o1(e) {
  var t = Re(), n = e1(), r = n[0], o = n[1], a = t1(r, t), i = n1(r, t), s = r1(r, t), c = function(d) {
    return a.some(function(m) {
      return pd(d, m);
    });
  }, l = function(d, m) {
    c(d) || (m && iy(d, m) ? o(yt(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return f(dy.Provider, { value: u, children: e.children });
}
function ho() {
  var e = In(dy);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Ep(e) {
  var t, n = Re(), r = n.classNames, o = n.styles, a = n.components, i = ho().goToMonth, s = function(u) {
    i(yt(u, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : ly, l = f(c, { id: e.id, displayMonth: e.displayMonth });
  return ie("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [f("div", { className: r.vhidden, children: l }), f(XM, { onChange: s, displayMonth: e.displayMonth }), f(QM, { onChange: s, displayMonth: e.displayMonth })] });
}
function a1(e) {
  return f("svg", le({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: f("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function i1(e) {
  return f("svg", le({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: f("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var la = Aa(function(e, t) {
  var n = Re(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = le(le({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), f("button", le({}, e, { ref: t, type: "button", className: i, style: s }));
});
function s1(e) {
  var t, n, r = Re(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return f(Le, {});
  var m = l(e.previousMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), b = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : i1, y = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : a1;
  return ie("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && f(la, { name: "previous-month", "aria-label": m, className: g, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? f(b, { className: i.nav_icon, style: s.nav_icon }) : f(y, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && f(la, { name: "next-month", "aria-label": h, className: v, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? f(y, { className: i.nav_icon, style: s.nav_icon }) : f(b, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function Rp(e) {
  var t = Re().numberOfMonths, n = ho(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(h) {
    return pd(e.displayMonth, h);
  }), c = s === 0, l = s === i.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), m = function() {
    r && a(r);
  }, g = function() {
    o && a(o);
  };
  return f(s1, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: m, onNextClick: g });
}
function c1(e) {
  var t, n = Re(), r = n.classNames, o = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : ly, l;
  return o ? l = f(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? l = f(Ep, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? l = ie(Le, { children: [f(Ep, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), f(Rp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = ie(Le, { children: [f(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), f(Rp, { displayMonth: e.displayMonth, id: e.id })] }), f("div", { className: r.caption, style: a.caption, children: l });
}
function l1(e) {
  var t = Re(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? f("tfoot", { className: o, style: r.tfoot, children: f("tr", { children: f("td", { colSpan: 8, children: n }) }) }) : f(Le, {});
}
function u1(e, t, n) {
  for (var r = n ? Rn(/* @__PURE__ */ new Date()) : Ot(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = Ve(r, a);
    o.push(i);
  }
  return o;
}
function d1() {
  var e = Re(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = u1(o, a, i);
  return ie("tr", { style: n.head_row, className: t.head_row, children: [r && f("td", { style: n.head_cell, className: t.head_cell }), l.map(function(u, d) {
    return f("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }), children: s(u, { locale: o }) }, d);
  })] });
}
function f1() {
  var e, t = Re(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : d1;
  return f("thead", { style: r.head, className: n.head, children: f(a, {}) });
}
function p1(e) {
  var t = Re(), n = t.locale, r = t.formatters.formatDay;
  return f(Le, { children: r(e.date, { locale: n }) });
}
var md = On(void 0);
function m1(e) {
  if (!mo(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return f(md.Provider, { value: t, children: e.children });
  }
  return f(v1, { initialProps: e.initialProps, children: e.children });
}
function v1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, i = function(l, u, d) {
    var m, g;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, l, u, d);
    var h = !!(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = !!(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var b = r ? sy([], r) : [];
        if (u.selected) {
          var y = b.findIndex(function(w) {
            return Je(l, w);
          });
          b.splice(y, 1);
        } else
          b.push(l);
        (g = t.onSelect) === null || g === void 0 || g.call(t, b, l, u, d);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(l) {
    var u = a && r.length > a - 1, d = r.some(function(m) {
      return Je(m, l);
    });
    return !!(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return f(md.Provider, { value: c, children: n });
}
function vd() {
  var e = In(md);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function h1(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Je(o, e) && Je(r, e) ? void 0 : Je(o, e) ? { from: o, to: void 0 } : Je(r, e) ? void 0 : cu(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? cu(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? iy(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var hd = On(void 0);
function g1(e) {
  if (!vo(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return f(hd.Provider, { value: t, children: e.children });
  }
  return f(b1, { initialProps: e.initialProps, children: e.children });
}
function b1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, i = o.to, s = t.min, c = t.max, l = function(g, h, v) {
    var b, y;
    (b = t.onDayClick) === null || b === void 0 || b.call(t, g, h, v);
    var w = h1(g, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, w, g, h, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (u.range_start = [a], i ? (u.range_end = [i], Je(a, i) || (u.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : u.range_end = [a]) : i && (u.range_start = [i], u.range_end = [i]), s && (a && !i && u.disabled.push({
    after: $i(a, s - 1),
    before: Ve(a, s - 1)
  }), a && i && u.disabled.push({
    after: a,
    before: Ve(a, s - 1)
  }), !a && i && u.disabled.push({
    after: $i(i, s - 1),
    before: Ve(i, s - 1)
  })), c) {
    if (a && !i && (u.disabled.push({
      before: Ve(a, -c + 1)
    }), u.disabled.push({
      after: Ve(a, c - 1)
    })), a && i) {
      var d = Tt(i, a) + 1, m = c - d;
      u.disabled.push({
        before: $i(a, m)
      }), u.disabled.push({
        after: Ve(i, m)
      });
    }
    !a && i && (u.disabled.push({
      before: Ve(i, -c + 1)
    }), u.disabled.push({
      after: Ve(i, c - 1)
    }));
  }
  return f(hd.Provider, { value: { selected: r, onDayClick: l, modifiers: u }, children: n });
}
function gd() {
  var e = In(hd);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function na(e) {
  return Array.isArray(e) ? sy([], e) : e !== void 0 ? [e] : [];
}
function y1(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = na(o);
  }), t;
}
var wt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(wt || (wt = {}));
var w1 = wt.Selected, qt = wt.Disabled, x1 = wt.Hidden, S1 = wt.Today, zi = wt.RangeEnd, Bi = wt.RangeMiddle, qi = wt.RangeStart, C1 = wt.Outside;
function _1(e, t, n) {
  var r, o = (r = {}, r[w1] = na(e.selected), r[qt] = na(e.disabled), r[x1] = na(e.hidden), r[S1] = [e.today], r[zi] = [], r[Bi] = [], r[qi] = [], r[C1] = [], r);
  return e.fromDate && o[qt].push({ before: e.fromDate }), e.toDate && o[qt].push({ after: e.toDate }), mo(e) ? o[qt] = o[qt].concat(t.modifiers[qt]) : vo(e) && (o[qt] = o[qt].concat(n.modifiers[qt]), o[qi] = n.modifiers[qi], o[Bi] = n.modifiers[Bi], o[zi] = n.modifiers[zi]), o;
}
var fy = On(void 0);
function P1(e) {
  var t = Re(), n = vd(), r = gd(), o = _1(t, n, r), a = y1(t.modifiers), i = le(le({}, o), a);
  return f(fy.Provider, { value: i, children: e.children });
}
function py() {
  var e = In(fy);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function E1(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function R1(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function M1(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function T1(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function N1(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function A1(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = Tt(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var i = Tt(e, r) >= 0 && Tt(o, e) >= 0;
    return i;
  }
  return o ? Je(o, e) : r ? Je(r, e) : !1;
}
function D1(e) {
  return ud(e);
}
function O1(e) {
  return Array.isArray(e) && e.every(ud);
}
function I1(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (D1(n))
      return Je(e, n);
    if (O1(n))
      return n.includes(e);
    if (R1(n))
      return A1(e, n);
    if (N1(n))
      return n.dayOfWeek.includes(e.getDay());
    if (E1(n)) {
      var r = Tt(n.before, e), o = Tt(n.after, e), a = r > 0, i = o < 0, s = cu(n.before, n.after);
      return s ? i && a : a || i;
    }
    return M1(n) ? Tt(e, n.after) > 0 : T1(n) ? Tt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function bd(e, t, n) {
  var r = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return I1(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !pd(e, n) && (o.outside = !0), o;
}
function k1(e, t) {
  for (var n = et(e[0]), r = dd(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = bd(i, t), c = !s.disabled && !s.hidden;
    if (!c) {
      i = Ve(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = Ve(i, 1);
  }
  return a || o;
}
var L1 = 365;
function my(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, m = {
    day: Ve,
    week: su,
    month: yt,
    year: _R,
    startOfWeek: function(b) {
      return o.ISOWeek ? Rn(b) : Ot(b, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(b) {
      return o.ISOWeek ? ey(b) : fd(b, { locale: d, weekStartsOn: c });
    }
  }, g = m[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? g = PR([l, g]) : r === "after" && u && (g = ER([u, g]));
  var h = !0;
  if (a) {
    var v = bd(g, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? g : s.count > L1 ? s.lastFocused : my(g, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: le(le({}, s), { count: s.count + 1 })
  });
}
var vy = On(void 0);
function $1(e) {
  var t = ho(), n = py(), r = Vt(), o = r[0], a = r[1], i = Vt(), s = i[0], c = i[1], l = k1(t.displayMonths, n), u = o ?? (s && t.isDateDisplayed(s)) ? s : l, d = function() {
    c(o), a(void 0);
  }, m = function(b) {
    a(b);
  }, g = Re(), h = function(b, y) {
    if (o) {
      var w = my(o, {
        moveBy: b,
        direction: y,
        context: g,
        modifiers: n
      });
      Je(o, w) || (t.goToDate(w, o), m(w));
    }
  }, v = {
    focusedDay: o,
    focusTarget: u,
    blur: d,
    focus: m,
    focusDayAfter: function() {
      return h("day", "after");
    },
    focusDayBefore: function() {
      return h("day", "before");
    },
    focusWeekAfter: function() {
      return h("week", "after");
    },
    focusWeekBefore: function() {
      return h("week", "before");
    },
    focusMonthBefore: function() {
      return h("month", "before");
    },
    focusMonthAfter: function() {
      return h("month", "after");
    },
    focusYearBefore: function() {
      return h("year", "before");
    },
    focusYearAfter: function() {
      return h("year", "after");
    },
    focusStartOfWeek: function() {
      return h("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return h("endOfWeek", "after");
    }
  };
  return f(vy.Provider, { value: v, children: e.children });
}
function yd() {
  var e = In(vy);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function F1(e, t) {
  var n = py(), r = bd(e, n, t);
  return r;
}
var wd = On(void 0);
function z1(e) {
  if (!qa(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return f(wd.Provider, { value: t, children: e.children });
  }
  return f(B1, { initialProps: e.initialProps, children: e.children });
}
function B1(e) {
  var t = e.initialProps, n = e.children, r = function(a, i, s) {
    var c, l, u;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, i, s), i.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, i, s);
      return;
    }
    (u = t.onSelect) === null || u === void 0 || u.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return f(wd.Provider, { value: o, children: n });
}
function hy() {
  var e = In(wd);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function q1(e, t) {
  var n = Re(), r = hy(), o = vd(), a = gd(), i = yd(), s = i.focusDayAfter, c = i.focusDayBefore, l = i.focusWeekAfter, u = i.focusWeekBefore, d = i.blur, m = i.focus, g = i.focusMonthBefore, h = i.focusMonthAfter, v = i.focusYearBefore, b = i.focusYearAfter, y = i.focusStartOfWeek, w = i.focusEndOfWeek, x = function(L) {
    var M, j, ne, re;
    qa(n) ? (M = r.onDayClick) === null || M === void 0 || M.call(r, e, t, L) : mo(n) ? (j = o.onDayClick) === null || j === void 0 || j.call(o, e, t, L) : vo(n) ? (ne = a.onDayClick) === null || ne === void 0 || ne.call(a, e, t, L) : (re = n.onDayClick) === null || re === void 0 || re.call(n, e, t, L);
  }, S = function(L) {
    var M;
    m(e), (M = n.onDayFocus) === null || M === void 0 || M.call(n, e, t, L);
  }, _ = function(L) {
    var M;
    d(), (M = n.onDayBlur) === null || M === void 0 || M.call(n, e, t, L);
  }, P = function(L) {
    var M;
    (M = n.onDayMouseEnter) === null || M === void 0 || M.call(n, e, t, L);
  }, C = function(L) {
    var M;
    (M = n.onDayMouseLeave) === null || M === void 0 || M.call(n, e, t, L);
  }, E = function(L) {
    var M;
    (M = n.onDayPointerEnter) === null || M === void 0 || M.call(n, e, t, L);
  }, R = function(L) {
    var M;
    (M = n.onDayPointerLeave) === null || M === void 0 || M.call(n, e, t, L);
  }, k = function(L) {
    var M;
    (M = n.onDayTouchCancel) === null || M === void 0 || M.call(n, e, t, L);
  }, A = function(L) {
    var M;
    (M = n.onDayTouchEnd) === null || M === void 0 || M.call(n, e, t, L);
  }, z = function(L) {
    var M;
    (M = n.onDayTouchMove) === null || M === void 0 || M.call(n, e, t, L);
  }, T = function(L) {
    var M;
    (M = n.onDayTouchStart) === null || M === void 0 || M.call(n, e, t, L);
  }, H = function(L) {
    var M;
    (M = n.onDayKeyUp) === null || M === void 0 || M.call(n, e, t, L);
  }, W = function(L) {
    var M;
    switch (L.key) {
      case "ArrowLeft":
        L.preventDefault(), L.stopPropagation(), n.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        L.preventDefault(), L.stopPropagation(), n.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        L.preventDefault(), L.stopPropagation(), l();
        break;
      case "ArrowUp":
        L.preventDefault(), L.stopPropagation(), u();
        break;
      case "PageUp":
        L.preventDefault(), L.stopPropagation(), L.shiftKey ? v() : g();
        break;
      case "PageDown":
        L.preventDefault(), L.stopPropagation(), L.shiftKey ? b() : h();
        break;
      case "Home":
        L.preventDefault(), L.stopPropagation(), y();
        break;
      case "End":
        L.preventDefault(), L.stopPropagation(), w();
        break;
    }
    (M = n.onDayKeyDown) === null || M === void 0 || M.call(n, e, t, L);
  }, B = {
    onClick: x,
    onFocus: S,
    onBlur: _,
    onKeyDown: W,
    onKeyUp: H,
    onMouseEnter: P,
    onMouseLeave: C,
    onPointerEnter: E,
    onPointerLeave: R,
    onTouchCancel: k,
    onTouchEnd: A,
    onTouchMove: z,
    onTouchStart: T
  };
  return B;
}
function H1() {
  var e = Re(), t = hy(), n = vd(), r = gd(), o = qa(e) ? t.selected : mo(e) ? n.selected : vo(e) ? r.selected : void 0;
  return o;
}
function W1(e) {
  return Object.values(wt).includes(e);
}
function V1(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (W1(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function G1(e, t) {
  var n = le({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = le(le({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function j1(e, t, n) {
  var r, o, a, i = Re(), s = yd(), c = F1(e, t), l = q1(e, c), u = H1(), d = !!(i.onDayClick || i.mode !== "default");
  Wt(function() {
    var P;
    c.outside || s.focusedDay && d && Je(s.focusedDay, e) && ((P = n.current) === null || P === void 0 || P.focus());
  }, [
    s.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var m = V1(i, c).join(" "), g = G1(i, c), h = !!(c.outside && !i.showOutsideDays || c.hidden), v = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : p1, b = f(v, { date: e, displayMonth: t, activeModifiers: c }), y = {
    style: g,
    className: m,
    children: b,
    role: "gridcell"
  }, w = s.focusTarget && Je(s.focusTarget, e) && !c.outside, x = s.focusedDay && Je(s.focusedDay, e), S = le(le(le({}, y), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = x || w ? 0 : -1, r)), l), _ = {
    isButton: d,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: S,
    divProps: y
  };
  return _;
}
function U1(e) {
  var t = jr(null), n = j1(e.date, e.displayMonth, t);
  return n.isHidden ? f("div", { role: "gridcell" }) : n.isButton ? f(la, le({ name: "day", ref: t }, n.buttonProps)) : f("div", le({}, n.divProps));
}
function K1(e) {
  var t = e.number, n = e.dates, r = Re(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: s });
  if (!o)
    return f("span", { className: i.weeknumber, style: a.weeknumber, children: u });
  var d = c(Number(t), { locale: s }), m = function(g) {
    o(t, n, g);
  };
  return f(la, { name: "week-number", "aria-label": d, className: i.weeknumber, style: a.weeknumber, onClick: m, children: u });
}
function Y1(e) {
  var t, n, r = Re(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, c = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : U1, l = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : K1, u;
  return i && (u = f("td", { className: a.cell, style: o.cell, children: f(l, { number: e.weekNumber, dates: e.dates }) })), ie("tr", { className: a.row, style: o.row, children: [u, e.dates.map(function(d) {
    return f("td", { className: a.cell, style: o.cell, role: "presentation", children: f(c, { displayMonth: e.displayMonth, date: d }) }, PM(d));
  })] });
}
function Mp(e, t, n) {
  for (var r = n != null && n.ISOWeek ? ey(t) : fd(t, n), o = n != null && n.ISOWeek ? Rn(e) : Ot(e, n), a = Tt(r, o), i = [], s = 0; s <= a; s++)
    i.push(Ve(o, s));
  var c = i.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? ny(u) : oy(u, n), m = l.find(function(g) {
      return g.weekNumber === d;
    });
    return m ? (m.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function X1(e, t) {
  var n = Mp(et(e), dd(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = RM(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], i = su(a, 6 - r), s = Mp(su(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function Q1(e) {
  var t, n, r, o = Re(), a = o.locale, i = o.classNames, s = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, m = o.firstWeekContainsDate, g = o.ISOWeek, h = X1(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: g,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: m
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : f1, b = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : Y1, y = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : l1;
  return ie("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && f(v, {}), f("tbody", { className: i.tbody, style: s.tbody, children: h.map(function(w) {
    return f(b, { displayMonth: e.displayMonth, dates: w.dates, weekNumber: w.weekNumber }, w.weekNumber);
  }) }), f(y, { displayMonth: e.displayMonth })] });
}
function Z1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var J1 = Z1() ? Wu : Wt, Hi = !1, eT = 0;
function Tp() {
  return "react-day-picker-".concat(++eT);
}
function tT(e) {
  var t, n = e ?? (Hi ? Tp() : null), r = Vt(n), o = r[0], a = r[1];
  return J1(function() {
    o === null && a(Tp());
  }, []), Wt(function() {
    Hi === !1 && (Hi = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function nT(e) {
  var t, n, r = Re(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, c = ho().displayMonths, l = tT(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], m = i.month, g = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !g && !h;
  o === "rtl" && (t = [g, h], h = t[0], g = t[1]), g && (d.push(a.caption_start), m = le(le({}, m), i.caption_start)), h && (d.push(a.caption_end), m = le(le({}, m), i.caption_end)), v && (d.push(a.caption_between), m = le(le({}, m), i.caption_between));
  var b = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : c1;
  return ie("div", { className: d.join(" "), style: m, children: [f(b, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), f(Q1, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function rT(e) {
  var t = Re(), n = t.classNames, r = t.styles;
  return f("div", { className: n.months, style: r.months, children: e.children });
}
function oT(e) {
  var t, n, r = e.initialProps, o = Re(), a = yd(), i = ho(), s = Vt(!1), c = s[0], l = s[1];
  Wt(function() {
    o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), l(!0)));
  }, [
    o.initialFocus,
    c,
    a.focus,
    a.focusTarget,
    a
  ]);
  var u = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && u.push(o.classNames.multiple_months), o.showWeekNumber && u.push(o.classNames.with_weeknumber);
  var d = le(le({}, o.styles.root), o.style), m = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, v) {
    var b;
    return le(le({}, h), (b = {}, b[v] = r[v], b));
  }, {}), g = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : rT;
  return f("div", le({ className: u.join(" "), style: d, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, m, { children: f(g, { children: i.displayMonths.map(function(h, v) {
    return f(nT, { displayIndex: v, displayMonth: h }, v);
  }) }) }));
}
function aT(e) {
  var t = e.children, n = TM(e, ["children"]);
  return f(KM, { initialProps: n, children: f(o1, { children: f(z1, { initialProps: n, children: f(m1, { initialProps: n, children: f(g1, { initialProps: n, children: f(P1, { children: f($1, { children: t }) }) }) }) }) }) });
}
function iT(e) {
  return f(aT, le({}, e, { children: f(oT, { initialProps: e }) }));
}
function wH({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f(
    iT,
    {
      showOutsideDays: n,
      className: I("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: I(
          sr({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: I(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          r.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: I(
          sr({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ className: o, ...a }) => /* @__PURE__ */ f(Gg, { className: I("size-4", o), ...a }),
        IconRight: ({ className: o, ...a }) => /* @__PURE__ */ f(td, { className: I("size-4", o), ...a })
      },
      ...r
    }
  );
}
function xH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card",
      className: I(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        e
      ),
      ...t
    }
  );
}
function SH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-header",
      className: I(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function CH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "h4",
    {
      "data-slot": "card-title",
      className: I("leading-none", e),
      ...t
    }
  );
}
function _H({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "p",
    {
      "data-slot": "card-description",
      className: I("text-muted-foreground", e),
      ...t
    }
  );
}
function PH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-content",
      className: I("px-6 [&:last-child]:pb-6", e),
      ...t
    }
  );
}
function EH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "card-footer",
      className: I("flex items-center px-6 pb-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function sT(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Np(e) {
  return sT(e) || Array.isArray(e);
}
function cT() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function xd(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((i) => {
    const s = e[i], c = t[i];
    return typeof s == "function" ? `${s}` == `${c}` : !Np(s) || !Np(c) ? s === c : xd(s, c);
  });
}
function Ap(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function lT(e, t) {
  if (e.length !== t.length) return !1;
  const n = Ap(e), r = Ap(t);
  return n.every((o, a) => {
    const i = r[a];
    return xd(o, i);
  });
}
function Sd(e) {
  return typeof e == "number";
}
function lu(e) {
  return typeof e == "string";
}
function Ha(e) {
  return typeof e == "boolean";
}
function Dp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ae(e) {
  return Math.abs(e);
}
function Cd(e) {
  return Math.sign(e);
}
function Gr(e, t) {
  return Ae(e - t);
}
function uT(e, t) {
  if (e === 0 || t === 0 || Ae(e) <= Ae(t)) return 0;
  const n = Gr(Ae(e), Ae(t));
  return Ae(n / e);
}
function dT(e) {
  return Math.round(e * 100) / 100;
}
function Kr(e) {
  return Yr(e).map(Number);
}
function gt(e) {
  return e[go(e)];
}
function go(e) {
  return Math.max(0, e.length - 1);
}
function _d(e, t) {
  return t === go(e);
}
function Op(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Yr(e) {
  return Object.keys(e);
}
function gy(e, t) {
  return [e, t].reduce((n, r) => (Yr(r).forEach((o) => {
    const a = n[o], i = r[o], s = Dp(a) && Dp(i);
    n[o] = s ? gy(a, i) : i;
  }), n), {});
}
function uu(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function fT(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(c) {
    return a(c) / 2;
  }
  function a(c) {
    return t - c;
  }
  function i(c, l) {
    return lu(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: i
  };
}
function Xr() {
  let e = [];
  function t(o, a, i, s = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(a, i, s), c = () => o.removeEventListener(a, i, s);
    else {
      const l = o;
      l.addListener(i), c = () => l.removeListener(i);
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function pT(e, t, n, r) {
  const o = Xr(), a = 1e3 / 60;
  let i = null, s = 0, c = 0;
  function l() {
    o.add(e, "visibilitychange", () => {
      e.hidden && h();
    });
  }
  function u() {
    g(), o.clear();
  }
  function d(b) {
    if (!c) return;
    i || (i = b, n(), n());
    const y = b - i;
    for (i = b, s += y; s >= a; )
      n(), s -= a;
    const w = s / a;
    r(w), c && (c = t.requestAnimationFrame(d));
  }
  function m() {
    c || (c = t.requestAnimationFrame(d));
  }
  function g() {
    t.cancelAnimationFrame(c), i = null, s = 0, c = 0;
  }
  function h() {
    i = null, s = 0;
  }
  return {
    init: l,
    destroy: u,
    start: m,
    stop: g,
    update: n,
    render: r
  };
}
function mT(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", i = !r && n ? -1 : 1, s = u(), c = d();
  function l(h) {
    const {
      height: v,
      width: b
    } = h;
    return r ? v : b;
  }
  function u() {
    return r ? "top" : n ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function m(h) {
    return h * i;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: s,
    endEdge: c,
    measureSize: l,
    direction: m
  };
}
function Mn(e = 0, t = 0) {
  const n = Ae(e - t);
  function r(l) {
    return l < e;
  }
  function o(l) {
    return l > t;
  }
  function a(l) {
    return r(l) || o(l);
  }
  function i(l) {
    return a(l) ? r(l) ? e : t : l;
  }
  function s(l) {
    return n ? l - n * Math.ceil((l - t) / n) : l;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: s
  };
}
function by(e, t, n) {
  const {
    constrain: r
  } = Mn(0, e), o = e + 1;
  let a = i(t);
  function i(m) {
    return n ? Ae((o + m) % o) : r(m);
  }
  function s() {
    return a;
  }
  function c(m) {
    return a = i(m), d;
  }
  function l(m) {
    return u().set(s() + m);
  }
  function u() {
    return by(e, s(), n);
  }
  const d = {
    get: s,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function vT(e, t, n, r, o, a, i, s, c, l, u, d, m, g, h, v, b, y, w) {
  const {
    cross: x,
    direction: S
  } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, C = Xr(), E = Xr(), R = Mn(50, 225).constrain(g.measure(20)), k = {
    mouse: 300,
    touch: 400
  }, A = {
    mouse: 500,
    touch: 600
  }, z = h ? 43 : 25;
  let T = !1, H = 0, W = 0, B = !1, L = !1, M = !1, j = !1;
  function ne(U) {
    if (!w) return;
    function te(ee) {
      (Ha(w) || w(U, ee)) && Y(ee);
    }
    const N = t;
    C.add(N, "dragstart", (ee) => ee.preventDefault(), P).add(N, "touchmove", () => {
    }, P).add(N, "touchend", () => {
    }).add(N, "touchstart", te).add(N, "mousedown", te).add(N, "touchcancel", K).add(N, "contextmenu", K).add(N, "click", Q, !0);
  }
  function re() {
    C.clear(), E.clear();
  }
  function $() {
    const U = j ? n : t;
    E.add(U, "touchmove", D, P).add(U, "touchend", K).add(U, "mousemove", D, P).add(U, "mouseup", K);
  }
  function O(U) {
    const te = U.nodeName || "";
    return _.includes(te);
  }
  function V() {
    return (h ? A : k)[j ? "mouse" : "touch"];
  }
  function G(U, te) {
    const N = d.add(Cd(U) * -1), ee = u.byDistance(U, !h).distance;
    return h || Ae(U) < R ? ee : b && te ? ee * 0.5 : u.byIndex(N.get(), 0).distance;
  }
  function Y(U) {
    const te = uu(U, r);
    j = te, M = h && te && !U.buttons && T, T = Gr(o.get(), i.get()) >= 2, !(te && U.button !== 0) && (O(U.target) || (B = !0, a.pointerDown(U), l.useFriction(0).useDuration(0), o.set(i), $(), H = a.readPoint(U), W = a.readPoint(U, x), m.emit("pointerDown")));
  }
  function D(U) {
    if (!uu(U, r) && U.touches.length >= 2) return K(U);
    const N = a.readPoint(U), ee = a.readPoint(U, x), ue = Gr(N, H), pe = Gr(ee, W);
    if (!L && !j && (!U.cancelable || (L = ue > pe, !L)))
      return K(U);
    const me = a.pointerMove(U);
    ue > v && (M = !0), l.useFriction(0.3).useDuration(0.75), s.start(), o.add(S(me)), U.preventDefault();
  }
  function K(U) {
    const N = u.byDistance(0, !1).index !== d.get(), ee = a.pointerUp(U) * V(), ue = G(S(ee), N), pe = uT(ee, ue), me = z - 10 * pe, de = y + pe / 50;
    L = !1, B = !1, E.clear(), l.useDuration(me).useFriction(de), c.distance(ue, !h), j = !1, m.emit("pointerUp");
  }
  function Q(U) {
    M && (U.stopPropagation(), U.preventDefault(), M = !1);
  }
  function Z() {
    return B;
  }
  return {
    init: ne,
    destroy: re,
    pointerDown: Z
  };
}
function hT(e, t) {
  let r, o;
  function a(d) {
    return d.timeStamp;
  }
  function i(d, m) {
    const h = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (uu(d, t) ? d : d.touches[0])[h];
  }
  function s(d) {
    return r = d, o = d, i(d);
  }
  function c(d) {
    const m = i(d) - i(o), g = a(d) - a(r) > 170;
    return o = d, g && (r = d), m;
  }
  function l(d) {
    if (!r || !o) return 0;
    const m = i(o) - i(r), g = a(d) - a(r), h = a(d) - a(o) > 170, v = m / g;
    return g && !h && Ae(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: s,
    pointerMove: c,
    pointerUp: l,
    readPoint: i
  };
}
function gT() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: i
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + i,
      left: o,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function bT(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function yT(e, t, n, r, o, a, i) {
  const s = [e].concat(r);
  let c, l, u = [], d = !1;
  function m(b) {
    return o.measureSize(i.measure(b));
  }
  function g(b) {
    if (!a) return;
    l = m(e), u = r.map(m);
    function y(w) {
      for (const x of w) {
        if (d) return;
        const S = x.target === e, _ = r.indexOf(x.target), P = S ? l : u[_], C = m(S ? e : r[_]);
        if (Ae(C - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((w) => {
      (Ha(a) || a(b, w)) && y(w);
    }), n.requestAnimationFrame(() => {
      s.forEach((w) => c.observe(w));
    });
  }
  function h() {
    d = !0, c && c.disconnect();
  }
  return {
    init: g,
    destroy: h
  };
}
function wT(e, t, n, r, o, a) {
  let i = 0, s = 0, c = o, l = a, u = e.get(), d = 0;
  function m() {
    const P = r.get() - e.get(), C = !c;
    let E = 0;
    return C ? (i = 0, n.set(r), e.set(r), E = P) : (n.set(e), i += P / c, i *= l, u += i, e.add(i), E = u - d), s = Cd(E), d = u, _;
  }
  function g() {
    const P = r.get() - t.get();
    return Ae(P) < 1e-3;
  }
  function h() {
    return c;
  }
  function v() {
    return s;
  }
  function b() {
    return i;
  }
  function y() {
    return x(o);
  }
  function w() {
    return S(a);
  }
  function x(P) {
    return c = P, _;
  }
  function S(P) {
    return l = P, _;
  }
  const _ = {
    direction: v,
    duration: h,
    velocity: b,
    seek: m,
    settled: g,
    useBaseFriction: w,
    useBaseDuration: y,
    useFriction: S,
    useDuration: x
  };
  return _;
}
function xT(e, t, n, r, o) {
  const a = o.measure(10), i = o.measure(50), s = Mn(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(g) {
    if (!l()) return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = Ae(e[h] - t.get()), b = n.get() - t.get(), y = s.constrain(v / i);
    n.subtract(b * y), !g && Ae(b) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(g) {
    c = !g;
  }
  return {
    shouldConstrain: l,
    constrain: u,
    toggleActive: d
  };
}
function ST(e, t, n, r, o) {
  const a = Mn(-t + e, 0), i = d(), s = u(), c = m();
  function l(h, v) {
    return Gr(h, v) <= 1;
  }
  function u() {
    const h = i[0], v = gt(i), b = i.lastIndexOf(h), y = i.indexOf(v) + 1;
    return Mn(b, y);
  }
  function d() {
    return n.map((h, v) => {
      const {
        min: b,
        max: y
      } = a, w = a.constrain(h), x = !v, S = _d(n, v);
      return x ? y : S || l(b, w) ? b : l(y, w) ? y : w;
    }).map((h) => parseFloat(h.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [a.max];
    if (r === "keepSnaps") return i;
    const {
      min: h,
      max: v
    } = s;
    return i.slice(h, v);
  }
  return {
    snapsContained: c,
    scrollContainLimit: s
  };
}
function CT(e, t, n) {
  const r = t[0], o = n ? r - e : gt(t);
  return {
    limit: Mn(o, r)
  };
}
function _T(e, t, n, r) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: c
  } = Mn(a, i);
  function l(m) {
    return m === 1 ? c(n.get()) : m === -1 ? s(n.get()) : !1;
  }
  function u(m) {
    if (!l(m)) return;
    const g = e * (m * -1);
    r.forEach((h) => h.add(g));
  }
  return {
    loop: u
  };
}
function PT(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const i = a - t;
    return n ? i / -n : 0;
  }
  return {
    get: r
  };
}
function ET(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, c = d().map(t.measure), l = m(), u = g();
  function d() {
    return s(r).map((v) => gt(v)[i] - v[0][a]).map(Ae);
  }
  function m() {
    return r.map((v) => n[a] - v[a]).map((v) => -Ae(v));
  }
  function g() {
    return s(l).map((v) => v[0]).map((v, b) => v + c[b]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function RT(e, t, n, r, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: c
  } = r, l = u();
  function u() {
    const m = i(a), g = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : g ? m : m.slice(s, c).map((h, v, b) => {
      const y = !v, w = _d(b, v);
      if (y) {
        const x = gt(b[0]) + 1;
        return Op(x);
      }
      if (w) {
        const x = go(a) - gt(b)[0] + 1;
        return Op(x, gt(b)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: l
  };
}
function MT(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = r;
  function c(h) {
    return h.concat().sort((v, b) => Ae(v) - Ae(b))[0];
  }
  function l(h) {
    const v = e ? i(h) : s(h), b = t.map((w, x) => ({
      diff: u(w - v, 0),
      index: x
    })).sort((w, x) => Ae(w.diff) - Ae(x.diff)), {
      index: y
    } = b[0];
    return {
      index: y,
      distance: v
    };
  }
  function u(h, v) {
    const b = [h, h + n, h - n];
    if (!e) return h;
    if (!v) return c(b);
    const y = b.filter((w) => Cd(w) === v);
    return y.length ? c(y) : gt(b) - n;
  }
  function d(h, v) {
    const b = t[h] - o.get(), y = u(b, v);
    return {
      index: h,
      distance: y
    };
  }
  function m(h, v) {
    const b = o.get() + h, {
      index: y,
      distance: w
    } = l(b), x = !e && a(b);
    if (!v || x) return {
      index: y,
      distance: h
    };
    const S = t[y] - w, _ = h + u(S, 0);
    return {
      index: y,
      distance: _
    };
  }
  return {
    byDistance: m,
    byIndex: d,
    shortcut: u
  };
}
function TT(e, t, n, r, o, a, i) {
  function s(d) {
    const m = d.distance, g = d.index !== t.get();
    a.add(m), m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), g && (n.set(t.get()), t.set(d.index), i.emit("select"));
  }
  function c(d, m) {
    const g = o.byDistance(d, m);
    s(g);
  }
  function l(d, m) {
    const g = t.clone().set(d), h = o.byIndex(g.get(), m);
    s(h);
  }
  return {
    distance: c,
    index: l
  };
}
function NT(e, t, n, r, o, a, i, s) {
  const c = {
    passive: !0,
    capture: !0
  };
  let l = 0;
  function u(g) {
    if (!s) return;
    function h(v) {
      if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const w = n.findIndex((x) => x.includes(v));
      Sd(w) && (o.useDuration(0), r.index(w, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", d, !1), t.forEach((v, b) => {
      a.add(v, "focus", (y) => {
        (Ha(s) || s(g, y)) && h(b);
      }, c);
    });
  }
  function d(g) {
    g.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: u
  };
}
function Fr(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = i(c);
  }
  function o(c) {
    t += i(c);
  }
  function a(c) {
    t -= i(c);
  }
  function i(c) {
    return Sd(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function yy(e, t) {
  const n = e.scroll === "x" ? i : s, r = t.style;
  let o = null, a = !1;
  function i(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function s(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function c(m) {
    if (a) return;
    const g = dT(e.direction(m));
    g !== o && (r.transform = n(g), o = g);
  }
  function l(m) {
    a = !m;
  }
  function u() {
    a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: u,
    to: c,
    toggleActive: l
  };
}
function AT(e, t, n, r, o, a, i, s, c) {
  const u = Kr(o), d = Kr(o).reverse(), m = y().concat(w());
  function g(C, E) {
    return C.reduce((R, k) => R - o[k], E);
  }
  function h(C, E) {
    return C.reduce((R, k) => g(R, E) > 0 ? R.concat([k]) : R, []);
  }
  function v(C) {
    return a.map((E, R) => ({
      start: E - r[R] + 0.5 + C,
      end: E + t - 0.5 + C
    }));
  }
  function b(C, E, R) {
    const k = v(E);
    return C.map((A) => {
      const z = R ? 0 : -n, T = R ? n : 0, H = R ? "end" : "start", W = k[A][H];
      return {
        index: A,
        loopPoint: W,
        slideLocation: Fr(-1),
        translate: yy(e, c[A]),
        target: () => s.get() > W ? z : T
      };
    });
  }
  function y() {
    const C = i[0], E = h(d, C);
    return b(E, n, !1);
  }
  function w() {
    const C = t - i[0] - 1, E = h(u, C);
    return b(E, -n, !0);
  }
  function x() {
    return m.every(({
      index: C
    }) => {
      const E = u.filter((R) => R !== C);
      return g(E, t) <= 0.1;
    });
  }
  function S() {
    m.forEach((C) => {
      const {
        target: E,
        translate: R,
        slideLocation: k
      } = C, A = E();
      A !== k.get() && (R.to(A), k.set(A));
    });
  }
  function _() {
    m.forEach((C) => C.translate.clear());
  }
  return {
    canLoop: x,
    clear: _,
    loop: S,
    loopPoints: m
  };
}
function DT(e, t, n) {
  let r, o = !1;
  function a(c) {
    if (!n) return;
    function l(u) {
      for (const d of u)
        if (d.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((u) => {
      o || (Ha(n) || n(c, u)) && l(u);
    }), r.observe(e, {
      childList: !0
    });
  }
  function i() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function OT(e, t, n, r) {
  const o = {};
  let a = null, i = null, s, c = !1;
  function l() {
    s = new IntersectionObserver((h) => {
      c || (h.forEach((v) => {
        const b = t.indexOf(v.target);
        o[b] = v;
      }), a = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((h) => s.observe(h));
  }
  function u() {
    s && s.disconnect(), c = !0;
  }
  function d(h) {
    return Yr(o).reduce((v, b) => {
      const y = parseInt(b), {
        isIntersecting: w
      } = o[y];
      return (h && w || !h && !w) && v.push(y), v;
    }, []);
  }
  function m(h = !0) {
    if (h && a) return a;
    if (!h && i) return i;
    const v = d(h);
    return h && (a = v), h || (i = v), v;
  }
  return {
    init: l,
    destroy: u,
    get: m
  };
}
function IT(e, t, n, r, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: c
  } = e, l = n[0] && o, u = h(), d = v(), m = n.map(i), g = b();
  function h() {
    if (!l) return 0;
    const w = n[0];
    return Ae(t[s] - w[s]);
  }
  function v() {
    if (!l) return 0;
    const w = a.getComputedStyle(gt(r));
    return parseFloat(w.getPropertyValue(`margin-${c}`));
  }
  function b() {
    return n.map((w, x, S) => {
      const _ = !x, P = _d(S, x);
      return _ ? m[x] + u : P ? m[x] + d : S[x + 1][s] - w[s];
    }).map(Ae);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: g,
    startGap: u,
    endGap: d
  };
}
function kT(e, t, n, r, o, a, i, s, c) {
  const {
    startEdge: l,
    endEdge: u,
    direction: d
  } = e, m = Sd(n);
  function g(y, w) {
    return Kr(y).filter((x) => x % w === 0).map((x) => y.slice(x, x + w));
  }
  function h(y) {
    return y.length ? Kr(y).reduce((w, x, S) => {
      const _ = gt(w) || 0, P = _ === 0, C = x === go(y), E = o[l] - a[_][l], R = o[l] - a[x][u], k = !r && P ? d(i) : 0, A = !r && C ? d(s) : 0, z = Ae(R - A - (E + k));
      return S && z > t + c && w.push(x), C && w.push(y.length), w;
    }, []).map((w, x, S) => {
      const _ = Math.max(S[x - 1] || 0);
      return y.slice(_, w);
    }) : [];
  }
  function v(y) {
    return m ? g(y, n) : h(y);
  }
  return {
    groupSlides: v
  };
}
function LT(e, t, n, r, o, a, i) {
  const {
    align: s,
    axis: c,
    direction: l,
    startIndex: u,
    loop: d,
    duration: m,
    dragFree: g,
    dragThreshold: h,
    inViewThreshold: v,
    slidesToScroll: b,
    skipSnaps: y,
    containScroll: w,
    watchResize: x,
    watchSlides: S,
    watchDrag: _,
    watchFocus: P
  } = a, C = 2, E = gT(), R = E.measure(t), k = n.map(E.measure), A = mT(c, l), z = A.measureSize(R), T = bT(z), H = fT(s, z), W = !d && !!w, B = d || !!w, {
    slideSizes: L,
    slideSizesWithGaps: M,
    startGap: j,
    endGap: ne
  } = IT(A, R, k, n, B, o), re = kT(A, z, b, d, R, k, j, ne, C), {
    snaps: $,
    snapsAligned: O
  } = ET(A, H, R, k, re), V = -gt($) + gt(M), {
    snapsContained: G,
    scrollContainLimit: Y
  } = ST(z, V, O, w, C), D = W ? G : O, {
    limit: K
  } = CT(V, D, d), Q = by(go(D), u, d), Z = Q.clone(), J = Kr(n), U = ({
    dragHandler: pt,
    scrollBody: vn,
    scrollBounds: mt,
    options: {
      loop: We
    }
  }) => {
    We || mt.constrain(pt.pointerDown()), vn.seek();
  }, te = ({
    scrollBody: pt,
    translate: vn,
    location: mt,
    offsetLocation: We,
    previousLocation: hn,
    scrollLooper: Mr,
    slideLooper: _i,
    dragHandler: Pi,
    animation: Ei,
    eventHandler: ce,
    scrollBounds: be,
    options: {
      loop: Se
    }
  }, he) => {
    const Te = pt.settled(), He = !be.shouldConstrain(), qe = Se ? Te : Te && He, vt = qe && !Pi.pointerDown();
    vt && Ei.stop();
    const tt = mt.get() * he + hn.get() * (1 - he);
    We.set(tt), Se && (Mr.loop(pt.direction()), _i.loop()), vn.to(We.get()), vt && ce.emit("settle"), qe || ce.emit("scroll");
  }, N = pT(r, o, () => U(Xt), (pt) => te(Xt, pt)), ee = 0.68, ue = D[Q.get()], pe = Fr(ue), me = Fr(ue), de = Fr(ue), ye = Fr(ue), $e = wT(pe, de, me, ye, m, ee), Ie = MT(d, D, V, K, ye), Fe = TT(N, Q, Z, $e, Ie, ye, i), Ke = PT(K), Ye = Xr(), ct = OT(t, n, i, v), {
    slideRegistry: lt
  } = RT(W, w, D, Y, re, J), zt = NT(e, n, lt, Fe, $e, Ye, i, P), Xt = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: i,
    containerRect: R,
    slideRects: k,
    animation: N,
    axis: A,
    dragHandler: vT(A, e, r, o, ye, hT(A, o), pe, N, Fe, $e, Ie, Q, i, T, g, h, y, ee, _),
    eventStore: Ye,
    percentOfView: T,
    index: Q,
    indexPrevious: Z,
    limit: K,
    location: pe,
    offsetLocation: de,
    previousLocation: me,
    options: a,
    resizeHandler: yT(t, i, o, n, A, x, E),
    scrollBody: $e,
    scrollBounds: xT(K, de, ye, $e, T),
    scrollLooper: _T(V, K, de, [pe, de, me, ye]),
    scrollProgress: Ke,
    scrollSnapList: D.map(Ke.get),
    scrollSnaps: D,
    scrollTarget: Ie,
    scrollTo: Fe,
    slideLooper: AT(A, z, V, L, M, $, D, de, n),
    slideFocus: zt,
    slidesHandler: DT(t, i, S),
    slidesInView: ct,
    slideIndexes: J,
    slideRegistry: lt,
    slidesToScroll: re,
    target: ye,
    translate: yy(A, t)
  };
  return Xt;
}
function $T() {
  let e = {}, t;
  function n(l) {
    t = l;
  }
  function r(l) {
    return e[l] || [];
  }
  function o(l) {
    return r(l).forEach((u) => u(t, l)), c;
  }
  function a(l, u) {
    return e[l] = r(l).concat([u]), c;
  }
  function i(l, u) {
    return e[l] = r(l).filter((d) => d !== u), c;
  }
  function s() {
    e = {};
  }
  const c = {
    init: n,
    emit: o,
    off: i,
    on: a,
    clear: s
  };
  return c;
}
const FT = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function zT(e) {
  function t(a, i) {
    return gy(a, i || {});
  }
  function n(a) {
    const i = a.breakpoints || {}, s = Yr(i).filter((c) => e.matchMedia(c).matches).map((c) => i[c]).reduce((c, l) => t(c, l), {});
    return t(a, s);
  }
  function r(a) {
    return a.map((i) => Yr(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function BT(e) {
  let t = [];
  function n(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, c) => Object.assign(s, {
      [c.name]: c
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function ua(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = zT(o), i = BT(a), s = Xr(), c = $T(), {
    mergeOptions: l,
    optionsAtMedia: u,
    optionsMediaQueries: d
  } = a, {
    on: m,
    off: g,
    emit: h
  } = c, v = A;
  let b = !1, y, w = l(FT, ua.globalOptions), x = l(w), S = [], _, P, C;
  function E() {
    const {
      container: J,
      slides: U
    } = x;
    P = (lu(J) ? e.querySelector(J) : J) || e.children[0];
    const N = lu(U) ? P.querySelectorAll(U) : U;
    C = [].slice.call(N || P.children);
  }
  function R(J) {
    const U = LT(e, P, C, r, o, J, c);
    if (J.loop && !U.slideLooper.canLoop()) {
      const te = Object.assign({}, J, {
        loop: !1
      });
      return R(te);
    }
    return U;
  }
  function k(J, U) {
    b || (w = l(w, J), x = u(w), S = U || S, E(), y = R(x), d([w, ...S.map(({
      options: te
    }) => te)]).forEach((te) => s.add(te, "change", A)), x.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(Z), y.eventHandler.init(Z), y.resizeHandler.init(Z), y.slidesHandler.init(Z), y.options.loop && y.slideLooper.loop(), P.offsetParent && C.length && y.dragHandler.init(Z), _ = i.init(Z, S)));
  }
  function A(J, U) {
    const te = re();
    z(), k(l({
      startIndex: te
    }, J), U), c.emit("reInit");
  }
  function z() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear();
  }
  function T() {
    b || (b = !0, s.clear(), z(), c.emit("destroy"), c.clear());
  }
  function H(J, U, te) {
    !x.active || b || (y.scrollBody.useBaseFriction().useDuration(U === !0 ? 0 : x.duration), y.scrollTo.index(J, te || 0));
  }
  function W(J) {
    const U = y.index.add(1).get();
    H(U, J, -1);
  }
  function B(J) {
    const U = y.index.add(-1).get();
    H(U, J, 1);
  }
  function L() {
    return y.index.add(1).get() !== re();
  }
  function M() {
    return y.index.add(-1).get() !== re();
  }
  function j() {
    return y.scrollSnapList;
  }
  function ne() {
    return y.scrollProgress.get(y.offsetLocation.get());
  }
  function re() {
    return y.index.get();
  }
  function $() {
    return y.indexPrevious.get();
  }
  function O() {
    return y.slidesInView.get();
  }
  function V() {
    return y.slidesInView.get(!1);
  }
  function G() {
    return _;
  }
  function Y() {
    return y;
  }
  function D() {
    return e;
  }
  function K() {
    return P;
  }
  function Q() {
    return C;
  }
  const Z = {
    canScrollNext: L,
    canScrollPrev: M,
    containerNode: K,
    internalEngine: Y,
    destroy: T,
    off: g,
    on: m,
    emit: h,
    plugins: G,
    previousScrollSnap: $,
    reInit: v,
    rootNode: D,
    scrollNext: W,
    scrollPrev: B,
    scrollProgress: ne,
    scrollSnapList: j,
    scrollTo: H,
    selectedScrollSnap: re,
    slideNodes: Q,
    slidesInView: O,
    slidesNotInView: V
  };
  return k(t, n), setTimeout(() => c.emit("init"), 0), Z;
}
ua.globalOptions = void 0;
function Pd(e = {}, t = []) {
  const n = jr(e), r = jr(t), [o, a] = Vt(), [i, s] = Vt(), c = Mg(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Wt(() => {
    xd(n.current, e) || (n.current = e, c());
  }, [e, c]), Wt(() => {
    lT(r.current, t) || (r.current = t, c());
  }, [t, c]), Wt(() => {
    if (cT() && i) {
      ua.globalOptions = Pd.globalOptions;
      const l = ua(i, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
Pd.globalOptions = void 0;
const wy = p.createContext(null);
function Wa() {
  const e = p.useContext(wy);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function RH({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: r,
  className: o,
  children: a,
  ...i
}) {
  const [s, c] = Pd(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    r
  ), [l, u] = p.useState(!1), [d, m] = p.useState(!1), g = p.useCallback((y) => {
    y && (u(y.canScrollPrev()), m(y.canScrollNext()));
  }, []), h = p.useCallback(() => {
    c == null || c.scrollPrev();
  }, [c]), v = p.useCallback(() => {
    c == null || c.scrollNext();
  }, [c]), b = p.useCallback(
    (y) => {
      y.key === "ArrowLeft" ? (y.preventDefault(), h()) : y.key === "ArrowRight" && (y.preventDefault(), v());
    },
    [h, v]
  );
  return p.useEffect(() => {
    !c || !n || n(c);
  }, [c, n]), p.useEffect(() => {
    if (c)
      return g(c), c.on("reInit", g), c.on("select", g), () => {
        c == null || c.off("select", g);
      };
  }, [c, g]), /* @__PURE__ */ f(
    wy.Provider,
    {
      value: {
        carouselRef: s,
        api: c,
        opts: t,
        orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev: h,
        scrollNext: v,
        canScrollPrev: l,
        canScrollNext: d
      },
      children: /* @__PURE__ */ f(
        "div",
        {
          onKeyDownCapture: b,
          className: I("relative", o),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...i,
          children: a
        }
      )
    }
  );
}
function MH({ className: e, ...t }) {
  const { carouselRef: n, orientation: r } = Wa();
  return /* @__PURE__ */ f(
    "div",
    {
      ref: n,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ f(
        "div",
        {
          className: I(
            "flex",
            r === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
}
function TH({ className: e, ...t }) {
  const { orientation: n } = Wa();
  return /* @__PURE__ */ f(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: I(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function NH({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: o, scrollPrev: a, canScrollPrev: i } = Wa();
  return /* @__PURE__ */ ie(
    sd,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      className: I(
        "absolute size-8 rounded-full",
        o === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ f($_, {}),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function AH({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...r
}) {
  const { orientation: o, scrollNext: a, canScrollNext: i } = Wa();
  return /* @__PURE__ */ ie(
    sd,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      className: I(
        "absolute size-8 rounded-full",
        o === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ f(z_, {}),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
var Vo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wi, Ip;
function Pt() {
  if (Ip) return Wi;
  Ip = 1;
  var e = Array.isArray;
  return Wi = e, Wi;
}
var Vi, kp;
function xy() {
  if (kp) return Vi;
  kp = 1;
  var e = typeof Vo == "object" && Vo && Vo.Object === Object && Vo;
  return Vi = e, Vi;
}
var Gi, Lp;
function It() {
  if (Lp) return Gi;
  Lp = 1;
  var e = xy(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Gi = n, Gi;
}
var ji, $p;
function bo() {
  if ($p) return ji;
  $p = 1;
  var e = It(), t = e.Symbol;
  return ji = t, ji;
}
var Ui, Fp;
function qT() {
  if (Fp) return Ui;
  Fp = 1;
  var e = bo(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, o = e ? e.toStringTag : void 0;
  function a(i) {
    var s = n.call(i, o), c = i[o];
    try {
      i[o] = void 0;
      var l = !0;
    } catch {
    }
    var u = r.call(i);
    return l && (s ? i[o] = c : delete i[o]), u;
  }
  return Ui = a, Ui;
}
var Ki, zp;
function HT() {
  if (zp) return Ki;
  zp = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return Ki = n, Ki;
}
var Yi, Bp;
function Fn() {
  if (Bp) return Yi;
  Bp = 1;
  var e = bo(), t = qT(), n = HT(), r = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : r : a && a in Object(s) ? t(s) : n(s);
  }
  return Yi = i, Yi;
}
var Xi, qp;
function zn() {
  if (qp) return Xi;
  qp = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Xi = e, Xi;
}
var Qi, Hp;
function yo() {
  if (Hp) return Qi;
  Hp = 1;
  var e = Fn(), t = zn(), n = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || t(o) && e(o) == n;
  }
  return Qi = r, Qi;
}
var Zi, Wp;
function Ed() {
  if (Wp) return Zi;
  Wp = 1;
  var e = Pt(), t = yo(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : r.test(a) || !n.test(a) || i != null && a in Object(i);
  }
  return Zi = o, Zi;
}
var Ji, Vp;
function un() {
  if (Vp) return Ji;
  Vp = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Ji = e, Ji;
}
var es, Gp;
function Rd() {
  if (Gp) return es;
  Gp = 1;
  var e = Fn(), t = un(), n = "[object AsyncFunction]", r = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var c = e(s);
    return c == r || c == o || c == n || c == a;
  }
  return es = i, es;
}
var ts, jp;
function WT() {
  if (jp) return ts;
  jp = 1;
  var e = It(), t = e["__core-js_shared__"];
  return ts = t, ts;
}
var ns, Up;
function VT() {
  if (Up) return ns;
  Up = 1;
  var e = WT(), t = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!t && t in r;
  }
  return ns = n, ns;
}
var rs, Kp;
function Sy() {
  if (Kp) return rs;
  Kp = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return rs = n, rs;
}
var os, Yp;
function GT() {
  if (Yp) return os;
  Yp = 1;
  var e = Rd(), t = VT(), n = un(), r = Sy(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, c = i.toString, l = s.hasOwnProperty, u = RegExp(
    "^" + c.call(l).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function d(m) {
    if (!n(m) || t(m))
      return !1;
    var g = e(m) ? u : a;
    return g.test(r(m));
  }
  return os = d, os;
}
var as, Xp;
function jT() {
  if (Xp) return as;
  Xp = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return as = e, as;
}
var is, Qp;
function Bn() {
  if (Qp) return is;
  Qp = 1;
  var e = GT(), t = jT();
  function n(r, o) {
    var a = t(r, o);
    return e(a) ? a : void 0;
  }
  return is = n, is;
}
var ss, Zp;
function Va() {
  if (Zp) return ss;
  Zp = 1;
  var e = Bn(), t = e(Object, "create");
  return ss = t, ss;
}
var cs, Jp;
function UT() {
  if (Jp) return cs;
  Jp = 1;
  var e = Va();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return cs = t, cs;
}
var ls, em;
function KT() {
  if (em) return ls;
  em = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return ls = e, ls;
}
var us, tm;
function YT() {
  if (tm) return us;
  tm = 1;
  var e = Va(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return r.call(i, a) ? i[a] : void 0;
  }
  return us = o, us;
}
var ds, nm;
function XT() {
  if (nm) return ds;
  nm = 1;
  var e = Va(), t = Object.prototype, n = t.hasOwnProperty;
  function r(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : n.call(a, o);
  }
  return ds = r, ds;
}
var fs, rm;
function QT() {
  if (rm) return fs;
  rm = 1;
  var e = Va(), t = "__lodash_hash_undefined__";
  function n(r, o) {
    var a = this.__data__;
    return this.size += this.has(r) ? 0 : 1, a[r] = e && o === void 0 ? t : o, this;
  }
  return fs = n, fs;
}
var ps, om;
function ZT() {
  if (om) return ps;
  om = 1;
  var e = UT(), t = KT(), n = YT(), r = XT(), o = QT();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, ps = a, ps;
}
var ms, am;
function JT() {
  if (am) return ms;
  am = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return ms = e, ms;
}
var vs, im;
function Md() {
  if (im) return vs;
  im = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return vs = e, vs;
}
var hs, sm;
function Ga() {
  if (sm) return hs;
  sm = 1;
  var e = Md();
  function t(n, r) {
    for (var o = n.length; o--; )
      if (e(n[o][0], r))
        return o;
    return -1;
  }
  return hs = t, hs;
}
var gs, cm;
function eN() {
  if (cm) return gs;
  cm = 1;
  var e = Ga(), t = Array.prototype, n = t.splice;
  function r(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : n.call(a, i, 1), --this.size, !0;
  }
  return gs = r, gs;
}
var bs, lm;
function tN() {
  if (lm) return bs;
  lm = 1;
  var e = Ga();
  function t(n) {
    var r = this.__data__, o = e(r, n);
    return o < 0 ? void 0 : r[o][1];
  }
  return bs = t, bs;
}
var ys, um;
function nN() {
  if (um) return ys;
  um = 1;
  var e = Ga();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return ys = t, ys;
}
var ws, dm;
function rN() {
  if (dm) return ws;
  dm = 1;
  var e = Ga();
  function t(n, r) {
    var o = this.__data__, a = e(o, n);
    return a < 0 ? (++this.size, o.push([n, r])) : o[a][1] = r, this;
  }
  return ws = t, ws;
}
var xs, fm;
function ja() {
  if (fm) return xs;
  fm = 1;
  var e = JT(), t = eN(), n = tN(), r = nN(), o = rN();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, xs = a, xs;
}
var Ss, pm;
function Td() {
  if (pm) return Ss;
  pm = 1;
  var e = Bn(), t = It(), n = e(t, "Map");
  return Ss = n, Ss;
}
var Cs, mm;
function oN() {
  if (mm) return Cs;
  mm = 1;
  var e = ZT(), t = ja(), n = Td();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return Cs = r, Cs;
}
var _s, vm;
function aN() {
  if (vm) return _s;
  vm = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return _s = e, _s;
}
var Ps, hm;
function Ua() {
  if (hm) return Ps;
  hm = 1;
  var e = aN();
  function t(n, r) {
    var o = n.__data__;
    return e(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
  }
  return Ps = t, Ps;
}
var Es, gm;
function iN() {
  if (gm) return Es;
  gm = 1;
  var e = Ua();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return Es = t, Es;
}
var Rs, bm;
function sN() {
  if (bm) return Rs;
  bm = 1;
  var e = Ua();
  function t(n) {
    return e(this, n).get(n);
  }
  return Rs = t, Rs;
}
var Ms, ym;
function cN() {
  if (ym) return Ms;
  ym = 1;
  var e = Ua();
  function t(n) {
    return e(this, n).has(n);
  }
  return Ms = t, Ms;
}
var Ts, wm;
function lN() {
  if (wm) return Ts;
  wm = 1;
  var e = Ua();
  function t(n, r) {
    var o = e(this, n), a = o.size;
    return o.set(n, r), this.size += o.size == a ? 0 : 1, this;
  }
  return Ts = t, Ts;
}
var Ns, xm;
function Nd() {
  if (xm) return Ns;
  xm = 1;
  var e = oN(), t = iN(), n = sN(), r = cN(), o = lN();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = o, Ns = a, Ns;
}
var As, Sm;
function uN() {
  if (Sm) return As;
  Sm = 1;
  var e = Nd(), t = "Expected a function";
  function n(r, o) {
    if (typeof r != "function" || o != null && typeof o != "function")
      throw new TypeError(t);
    var a = function() {
      var i = arguments, s = o ? o.apply(this, i) : i[0], c = a.cache;
      if (c.has(s))
        return c.get(s);
      var l = r.apply(this, i);
      return a.cache = c.set(s, l) || c, l;
    };
    return a.cache = new (n.Cache || e)(), a;
  }
  return n.Cache = e, As = n, As;
}
var Ds, Cm;
function dN() {
  if (Cm) return Ds;
  Cm = 1;
  var e = uN(), t = 500;
  function n(r) {
    var o = e(r, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return Ds = n, Ds;
}
var Os, _m;
function fN() {
  if (_m) return Os;
  _m = 1;
  var e = dN(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, c, l) {
      a.push(c ? l.replace(n, "$1") : s || i);
    }), a;
  });
  return Os = r, Os;
}
var Is, Pm;
function Cy() {
  if (Pm) return Is;
  Pm = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length, a = Array(o); ++r < o; )
      a[r] = n(t[r], r, t);
    return a;
  }
  return Is = e, Is;
}
var ks, Em;
function pN() {
  if (Em) return ks;
  Em = 1;
  var e = bo(), t = Cy(), n = Pt(), r = yo(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
  function i(s) {
    if (typeof s == "string")
      return s;
    if (n(s))
      return t(s, i) + "";
    if (r(s))
      return a ? a.call(s) : "";
    var c = s + "";
    return c == "0" && 1 / s == -1 / 0 ? "-0" : c;
  }
  return ks = i, ks;
}
var Ls, Rm;
function mN() {
  if (Rm) return Ls;
  Rm = 1;
  var e = pN();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Ls = t, Ls;
}
var $s, Mm;
function _y() {
  if (Mm) return $s;
  Mm = 1;
  var e = Pt(), t = Ed(), n = fN(), r = mN();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : n(r(a));
  }
  return $s = o, $s;
}
var Fs, Tm;
function Ka() {
  if (Tm) return Fs;
  Tm = 1;
  var e = yo();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return Fs = t, Fs;
}
var zs, Nm;
function Ad() {
  if (Nm) return zs;
  Nm = 1;
  var e = _y(), t = Ka();
  function n(r, o) {
    o = e(o, r);
    for (var a = 0, i = o.length; r != null && a < i; )
      r = r[t(o[a++])];
    return a && a == i ? r : void 0;
  }
  return zs = n, zs;
}
var Bs, Am;
function Py() {
  if (Am) return Bs;
  Am = 1;
  var e = Ad();
  function t(n, r, o) {
    var a = n == null ? void 0 : e(n, r);
    return a === void 0 ? o : a;
  }
  return Bs = t, Bs;
}
Py();
var qs, Dm;
function vN() {
  if (Dm) return qs;
  Dm = 1;
  function e(t) {
    return t == null;
  }
  return qs = e, qs;
}
var hN = vN();
const gN = /* @__PURE__ */ ln(hN);
var Hs, Om;
function bN() {
  if (Om) return Hs;
  Om = 1;
  var e = Fn(), t = Pt(), n = zn(), r = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == r;
  }
  return Hs = o, Hs;
}
var yN = bN();
const Ey = /* @__PURE__ */ ln(yN);
var wN = Rd();
const xN = /* @__PURE__ */ ln(wN);
un();
var Go = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Im;
function SN() {
  if (Im) return we;
  Im = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function v(b) {
    if (typeof b == "object" && b !== null) {
      var y = b.$$typeof;
      switch (y) {
        case e:
          switch (b = b.type, b) {
            case n:
            case o:
            case r:
            case l:
            case u:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case i:
                case c:
                case m:
                case d:
                case a:
                  return b;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return we.ContextConsumer = i, we.ContextProvider = a, we.Element = e, we.ForwardRef = c, we.Fragment = n, we.Lazy = m, we.Memo = d, we.Portal = t, we.Profiler = o, we.StrictMode = r, we.Suspense = l, we.SuspenseList = u, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(b) {
    return v(b) === i;
  }, we.isContextProvider = function(b) {
    return v(b) === a;
  }, we.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, we.isForwardRef = function(b) {
    return v(b) === c;
  }, we.isFragment = function(b) {
    return v(b) === n;
  }, we.isLazy = function(b) {
    return v(b) === m;
  }, we.isMemo = function(b) {
    return v(b) === d;
  }, we.isPortal = function(b) {
    return v(b) === t;
  }, we.isProfiler = function(b) {
    return v(b) === o;
  }, we.isStrictMode = function(b) {
    return v(b) === r;
  }, we.isSuspense = function(b) {
    return v(b) === l;
  }, we.isSuspenseList = function(b) {
    return v(b) === u;
  }, we.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === o || b === r || b === l || b === u || b === g || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === d || b.$$typeof === a || b.$$typeof === i || b.$$typeof === c || b.$$typeof === h || b.getModuleId !== void 0);
  }, we.typeOf = v, we;
}
var xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var km;
function CN() {
  return km || (km = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, v = !1, b = !1, y = !1, w = !1, x;
    x = Symbol.for("react.module.reference");
    function S(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === n || N === o || w || N === r || N === l || N === u || y || N === g || h || v || b || typeof N == "object" && N !== null && (N.$$typeof === m || N.$$typeof === d || N.$$typeof === a || N.$$typeof === i || N.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === x || N.getModuleId !== void 0));
    }
    function _(N) {
      if (typeof N == "object" && N !== null) {
        var ee = N.$$typeof;
        switch (ee) {
          case e:
            var ue = N.type;
            switch (ue) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return ue;
              default:
                var pe = ue && ue.$$typeof;
                switch (pe) {
                  case s:
                  case i:
                  case c:
                  case m:
                  case d:
                  case a:
                    return pe;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var P = i, C = a, E = e, R = c, k = n, A = m, z = d, T = t, H = o, W = r, B = l, L = u, M = !1, j = !1;
    function ne(N) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(N) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(N) {
      return _(N) === i;
    }
    function O(N) {
      return _(N) === a;
    }
    function V(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function G(N) {
      return _(N) === c;
    }
    function Y(N) {
      return _(N) === n;
    }
    function D(N) {
      return _(N) === m;
    }
    function K(N) {
      return _(N) === d;
    }
    function Q(N) {
      return _(N) === t;
    }
    function Z(N) {
      return _(N) === o;
    }
    function J(N) {
      return _(N) === r;
    }
    function U(N) {
      return _(N) === l;
    }
    function te(N) {
      return _(N) === u;
    }
    xe.ContextConsumer = P, xe.ContextProvider = C, xe.Element = E, xe.ForwardRef = R, xe.Fragment = k, xe.Lazy = A, xe.Memo = z, xe.Portal = T, xe.Profiler = H, xe.StrictMode = W, xe.Suspense = B, xe.SuspenseList = L, xe.isAsyncMode = ne, xe.isConcurrentMode = re, xe.isContextConsumer = $, xe.isContextProvider = O, xe.isElement = V, xe.isForwardRef = G, xe.isFragment = Y, xe.isLazy = D, xe.isMemo = K, xe.isPortal = Q, xe.isProfiler = Z, xe.isStrictMode = J, xe.isSuspense = U, xe.isSuspenseList = te, xe.isValidElementType = S, xe.typeOf = _;
  })()), xe;
}
var Lm;
function _N() {
  return Lm || (Lm = 1, process.env.NODE_ENV === "production" ? Go.exports = SN() : Go.exports = CN()), Go.exports;
}
_N();
var Ws, $m;
function Ry() {
  if ($m) return Ws;
  $m = 1;
  var e = Fn(), t = zn(), n = "[object Number]";
  function r(o) {
    return typeof o == "number" || t(o) && e(o) == n;
  }
  return Ws = r, Ws;
}
var Vs, Fm;
function PN() {
  if (Fm) return Vs;
  Fm = 1;
  var e = Ry();
  function t(n) {
    return e(n) && n != +n;
  }
  return Vs = t, Vs;
}
var EN = PN();
const RN = /* @__PURE__ */ ln(EN);
var MN = Ry();
const TN = /* @__PURE__ */ ln(MN);
var jo = function(t) {
  return Ey(t) && t.indexOf("%") === t.length - 1;
}, Rt = function(t) {
  return TN(t) && !RN(t);
}, da = function(t) {
  return Rt(t) || Ey(t);
}, NN = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, AN = process.env.NODE_ENV !== "production", Gs = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (AN && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, js, zm;
function DN() {
  if (zm) return js;
  zm = 1;
  var e = ja();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return js = t, js;
}
var Us, Bm;
function ON() {
  if (Bm) return Us;
  Bm = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return Us = e, Us;
}
var Ks, qm;
function IN() {
  if (qm) return Ks;
  qm = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Ks = e, Ks;
}
var Ys, Hm;
function kN() {
  if (Hm) return Ys;
  Hm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ys = e, Ys;
}
var Xs, Wm;
function LN() {
  if (Wm) return Xs;
  Wm = 1;
  var e = ja(), t = Td(), n = Nd(), r = 200;
  function o(a, i) {
    var s = this.__data__;
    if (s instanceof e) {
      var c = s.__data__;
      if (!t || c.length < r - 1)
        return c.push([a, i]), this.size = ++s.size, this;
      s = this.__data__ = new n(c);
    }
    return s.set(a, i), this.size = s.size, this;
  }
  return Xs = o, Xs;
}
var Qs, Vm;
function My() {
  if (Vm) return Qs;
  Vm = 1;
  var e = ja(), t = DN(), n = ON(), r = IN(), o = kN(), a = LN();
  function i(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return i.prototype.clear = t, i.prototype.delete = n, i.prototype.get = r, i.prototype.has = o, i.prototype.set = a, Qs = i, Qs;
}
var Zs, Gm;
function $N() {
  if (Gm) return Zs;
  Gm = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Zs = t, Zs;
}
var Js, jm;
function FN() {
  if (jm) return Js;
  jm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Js = e, Js;
}
var ec, Um;
function Ty() {
  if (Um) return ec;
  Um = 1;
  var e = Nd(), t = $N(), n = FN();
  function r(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, ec = r, ec;
}
var tc, Km;
function zN() {
  if (Km) return tc;
  Km = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length; ++r < o; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return tc = e, tc;
}
var nc, Ym;
function Ny() {
  if (Ym) return nc;
  Ym = 1;
  function e(t, n) {
    return t.has(n);
  }
  return nc = e, nc;
}
var rc, Xm;
function Ay() {
  if (Xm) return rc;
  Xm = 1;
  var e = Ty(), t = zN(), n = Ny(), r = 1, o = 2;
  function a(i, s, c, l, u, d) {
    var m = c & r, g = i.length, h = s.length;
    if (g != h && !(m && h > g))
      return !1;
    var v = d.get(i), b = d.get(s);
    if (v && b)
      return v == s && b == i;
    var y = -1, w = !0, x = c & o ? new e() : void 0;
    for (d.set(i, s), d.set(s, i); ++y < g; ) {
      var S = i[y], _ = s[y];
      if (l)
        var P = m ? l(_, S, y, s, i, d) : l(S, _, y, i, s, d);
      if (P !== void 0) {
        if (P)
          continue;
        w = !1;
        break;
      }
      if (x) {
        if (!t(s, function(C, E) {
          if (!n(x, E) && (S === C || u(S, C, c, l, d)))
            return x.push(E);
        })) {
          w = !1;
          break;
        }
      } else if (!(S === _ || u(S, _, c, l, d))) {
        w = !1;
        break;
      }
    }
    return d.delete(i), d.delete(s), w;
  }
  return rc = a, rc;
}
var oc, Qm;
function BN() {
  if (Qm) return oc;
  Qm = 1;
  var e = It(), t = e.Uint8Array;
  return oc = t, oc;
}
var ac, Zm;
function qN() {
  if (Zm) return ac;
  Zm = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(o, a) {
      r[++n] = [a, o];
    }), r;
  }
  return ac = e, ac;
}
var ic, Jm;
function Dd() {
  if (Jm) return ic;
  Jm = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(o) {
      r[++n] = o;
    }), r;
  }
  return ic = e, ic;
}
var sc, ev;
function HN() {
  if (ev) return sc;
  ev = 1;
  var e = bo(), t = BN(), n = Md(), r = Ay(), o = qN(), a = Dd(), i = 1, s = 2, c = "[object Boolean]", l = "[object Date]", u = "[object Error]", d = "[object Map]", m = "[object Number]", g = "[object RegExp]", h = "[object Set]", v = "[object String]", b = "[object Symbol]", y = "[object ArrayBuffer]", w = "[object DataView]", x = e ? e.prototype : void 0, S = x ? x.valueOf : void 0;
  function _(P, C, E, R, k, A, z) {
    switch (E) {
      case w:
        if (P.byteLength != C.byteLength || P.byteOffset != C.byteOffset)
          return !1;
        P = P.buffer, C = C.buffer;
      case y:
        return !(P.byteLength != C.byteLength || !A(new t(P), new t(C)));
      case c:
      case l:
      case m:
        return n(+P, +C);
      case u:
        return P.name == C.name && P.message == C.message;
      case g:
      case v:
        return P == C + "";
      case d:
        var T = o;
      case h:
        var H = R & i;
        if (T || (T = a), P.size != C.size && !H)
          return !1;
        var W = z.get(P);
        if (W)
          return W == C;
        R |= s, z.set(P, C);
        var B = r(T(P), T(C), R, k, A, z);
        return z.delete(P), B;
      case b:
        if (S)
          return S.call(P) == S.call(C);
    }
    return !1;
  }
  return sc = _, sc;
}
var cc, tv;
function Dy() {
  if (tv) return cc;
  tv = 1;
  function e(t, n) {
    for (var r = -1, o = n.length, a = t.length; ++r < o; )
      t[a + r] = n[r];
    return t;
  }
  return cc = e, cc;
}
var lc, nv;
function WN() {
  if (nv) return lc;
  nv = 1;
  var e = Dy(), t = Pt();
  function n(r, o, a) {
    var i = o(r);
    return t(r) ? i : e(i, a(r));
  }
  return lc = n, lc;
}
var uc, rv;
function VN() {
  if (rv) return uc;
  rv = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++r < o; ) {
      var s = t[r];
      n(s, r, t) && (i[a++] = s);
    }
    return i;
  }
  return uc = e, uc;
}
var dc, ov;
function GN() {
  if (ov) return dc;
  ov = 1;
  function e() {
    return [];
  }
  return dc = e, dc;
}
var fc, av;
function jN() {
  if (av) return fc;
  av = 1;
  var e = VN(), t = GN(), n = Object.prototype, r = n.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return r.call(i, s);
    }));
  } : t;
  return fc = a, fc;
}
var pc, iv;
function UN() {
  if (iv) return pc;
  iv = 1;
  function e(t, n) {
    for (var r = -1, o = Array(t); ++r < t; )
      o[r] = n(r);
    return o;
  }
  return pc = e, pc;
}
var mc, sv;
function KN() {
  if (sv) return mc;
  sv = 1;
  var e = Fn(), t = zn(), n = "[object Arguments]";
  function r(o) {
    return t(o) && e(o) == n;
  }
  return mc = r, mc;
}
var vc, cv;
function Od() {
  if (cv) return vc;
  cv = 1;
  var e = KN(), t = zn(), n = Object.prototype, r = n.hasOwnProperty, o = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(i) {
    return t(i) && r.call(i, "callee") && !o.call(i, "callee");
  };
  return vc = a, vc;
}
var zr = { exports: {} }, hc, lv;
function YN() {
  if (lv) return hc;
  lv = 1;
  function e() {
    return !1;
  }
  return hc = e, hc;
}
zr.exports;
var uv;
function Oy() {
  return uv || (uv = 1, (function(e, t) {
    var n = It(), r = YN(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? n.Buffer : void 0, c = s ? s.isBuffer : void 0, l = c || r;
    e.exports = l;
  })(zr, zr.exports)), zr.exports;
}
var gc, dv;
function Id() {
  if (dv) return gc;
  dv = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, o) {
    var a = typeof r;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < o;
  }
  return gc = n, gc;
}
var bc, fv;
function kd() {
  if (fv) return bc;
  fv = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return bc = t, bc;
}
var yc, pv;
function XN() {
  if (pv) return yc;
  pv = 1;
  var e = Fn(), t = kd(), n = zn(), r = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", c = "[object Function]", l = "[object Map]", u = "[object Number]", d = "[object Object]", m = "[object RegExp]", g = "[object Set]", h = "[object String]", v = "[object WeakMap]", b = "[object ArrayBuffer]", y = "[object DataView]", w = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", _ = "[object Int16Array]", P = "[object Int32Array]", C = "[object Uint8Array]", E = "[object Uint8ClampedArray]", R = "[object Uint16Array]", k = "[object Uint32Array]", A = {};
  A[w] = A[x] = A[S] = A[_] = A[P] = A[C] = A[E] = A[R] = A[k] = !0, A[r] = A[o] = A[b] = A[a] = A[y] = A[i] = A[s] = A[c] = A[l] = A[u] = A[d] = A[m] = A[g] = A[h] = A[v] = !1;
  function z(T) {
    return n(T) && t(T.length) && !!A[e(T)];
  }
  return yc = z, yc;
}
var wc, mv;
function Iy() {
  if (mv) return wc;
  mv = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return wc = e, wc;
}
var Br = { exports: {} };
Br.exports;
var vv;
function QN() {
  return vv || (vv = 1, (function(e, t) {
    var n = xy(), r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, i = a && n.process, s = (function() {
      try {
        var c = o && o.require && o.require("util").types;
        return c || i && i.binding && i.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Br, Br.exports)), Br.exports;
}
var xc, hv;
function ky() {
  if (hv) return xc;
  hv = 1;
  var e = XN(), t = Iy(), n = QN(), r = n && n.isTypedArray, o = r ? t(r) : e;
  return xc = o, xc;
}
var Sc, gv;
function ZN() {
  if (gv) return Sc;
  gv = 1;
  var e = UN(), t = Od(), n = Pt(), r = Oy(), o = Id(), a = ky(), i = Object.prototype, s = i.hasOwnProperty;
  function c(l, u) {
    var d = n(l), m = !d && t(l), g = !d && !m && r(l), h = !d && !m && !g && a(l), v = d || m || g || h, b = v ? e(l.length, String) : [], y = b.length;
    for (var w in l)
      (u || s.call(l, w)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
      (w == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (w == "offset" || w == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      h && (w == "buffer" || w == "byteLength" || w == "byteOffset") || // Skip index properties.
      o(w, y))) && b.push(w);
    return b;
  }
  return Sc = c, Sc;
}
var Cc, bv;
function JN() {
  if (bv) return Cc;
  bv = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, o = typeof r == "function" && r.prototype || e;
    return n === o;
  }
  return Cc = t, Cc;
}
var _c, yv;
function eA() {
  if (yv) return _c;
  yv = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return _c = e, _c;
}
var Pc, wv;
function tA() {
  if (wv) return Pc;
  wv = 1;
  var e = eA(), t = e(Object.keys, Object);
  return Pc = t, Pc;
}
var Ec, xv;
function nA() {
  if (xv) return Ec;
  xv = 1;
  var e = JN(), t = tA(), n = Object.prototype, r = n.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      r.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return Ec = o, Ec;
}
var Rc, Sv;
function Ya() {
  if (Sv) return Rc;
  Sv = 1;
  var e = Rd(), t = kd();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return Rc = n, Rc;
}
var Mc, Cv;
function Ld() {
  if (Cv) return Mc;
  Cv = 1;
  var e = ZN(), t = nA(), n = Ya();
  function r(o) {
    return n(o) ? e(o) : t(o);
  }
  return Mc = r, Mc;
}
var Tc, _v;
function rA() {
  if (_v) return Tc;
  _v = 1;
  var e = WN(), t = jN(), n = Ld();
  function r(o) {
    return e(o, n, t);
  }
  return Tc = r, Tc;
}
var Nc, Pv;
function oA() {
  if (Pv) return Nc;
  Pv = 1;
  var e = rA(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function o(a, i, s, c, l, u) {
    var d = s & t, m = e(a), g = m.length, h = e(i), v = h.length;
    if (g != v && !d)
      return !1;
    for (var b = g; b--; ) {
      var y = m[b];
      if (!(d ? y in i : r.call(i, y)))
        return !1;
    }
    var w = u.get(a), x = u.get(i);
    if (w && x)
      return w == i && x == a;
    var S = !0;
    u.set(a, i), u.set(i, a);
    for (var _ = d; ++b < g; ) {
      y = m[b];
      var P = a[y], C = i[y];
      if (c)
        var E = d ? c(C, P, y, i, a, u) : c(P, C, y, a, i, u);
      if (!(E === void 0 ? P === C || l(P, C, s, c, u) : E)) {
        S = !1;
        break;
      }
      _ || (_ = y == "constructor");
    }
    if (S && !_) {
      var R = a.constructor, k = i.constructor;
      R != k && "constructor" in a && "constructor" in i && !(typeof R == "function" && R instanceof R && typeof k == "function" && k instanceof k) && (S = !1);
    }
    return u.delete(a), u.delete(i), S;
  }
  return Nc = o, Nc;
}
var Ac, Ev;
function aA() {
  if (Ev) return Ac;
  Ev = 1;
  var e = Bn(), t = It(), n = e(t, "DataView");
  return Ac = n, Ac;
}
var Dc, Rv;
function iA() {
  if (Rv) return Dc;
  Rv = 1;
  var e = Bn(), t = It(), n = e(t, "Promise");
  return Dc = n, Dc;
}
var Oc, Mv;
function Ly() {
  if (Mv) return Oc;
  Mv = 1;
  var e = Bn(), t = It(), n = e(t, "Set");
  return Oc = n, Oc;
}
var Ic, Tv;
function sA() {
  if (Tv) return Ic;
  Tv = 1;
  var e = Bn(), t = It(), n = e(t, "WeakMap");
  return Ic = n, Ic;
}
var kc, Nv;
function cA() {
  if (Nv) return kc;
  Nv = 1;
  var e = aA(), t = Td(), n = iA(), r = Ly(), o = sA(), a = Fn(), i = Sy(), s = "[object Map]", c = "[object Object]", l = "[object Promise]", u = "[object Set]", d = "[object WeakMap]", m = "[object DataView]", g = i(e), h = i(t), v = i(n), b = i(r), y = i(o), w = a;
  return (e && w(new e(new ArrayBuffer(1))) != m || t && w(new t()) != s || n && w(n.resolve()) != l || r && w(new r()) != u || o && w(new o()) != d) && (w = function(x) {
    var S = a(x), _ = S == c ? x.constructor : void 0, P = _ ? i(_) : "";
    if (P)
      switch (P) {
        case g:
          return m;
        case h:
          return s;
        case v:
          return l;
        case b:
          return u;
        case y:
          return d;
      }
    return S;
  }), kc = w, kc;
}
var Lc, Av;
function lA() {
  if (Av) return Lc;
  Av = 1;
  var e = My(), t = Ay(), n = HN(), r = oA(), o = cA(), a = Pt(), i = Oy(), s = ky(), c = 1, l = "[object Arguments]", u = "[object Array]", d = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
  function h(v, b, y, w, x, S) {
    var _ = a(v), P = a(b), C = _ ? u : o(v), E = P ? u : o(b);
    C = C == l ? d : C, E = E == l ? d : E;
    var R = C == d, k = E == d, A = C == E;
    if (A && i(v)) {
      if (!i(b))
        return !1;
      _ = !0, R = !1;
    }
    if (A && !R)
      return S || (S = new e()), _ || s(v) ? t(v, b, y, w, x, S) : n(v, b, C, y, w, x, S);
    if (!(y & c)) {
      var z = R && g.call(v, "__wrapped__"), T = k && g.call(b, "__wrapped__");
      if (z || T) {
        var H = z ? v.value() : v, W = T ? b.value() : b;
        return S || (S = new e()), x(H, W, y, w, S);
      }
    }
    return A ? (S || (S = new e()), r(v, b, y, w, x, S)) : !1;
  }
  return Lc = h, Lc;
}
var $c, Dv;
function $y() {
  if (Dv) return $c;
  Dv = 1;
  var e = lA(), t = zn();
  function n(r, o, a, i, s) {
    return r === o ? !0 : r == null || o == null || !t(r) && !t(o) ? r !== r && o !== o : e(r, o, a, i, n, s);
  }
  return $c = n, $c;
}
var Fc, Ov;
function uA() {
  if (Ov) return Fc;
  Ov = 1;
  var e = My(), t = $y(), n = 1, r = 2;
  function o(a, i, s, c) {
    var l = s.length, u = l, d = !c;
    if (a == null)
      return !u;
    for (a = Object(a); l--; ) {
      var m = s[l];
      if (d && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++l < u; ) {
      m = s[l];
      var g = m[0], h = a[g], v = m[1];
      if (d && m[2]) {
        if (h === void 0 && !(g in a))
          return !1;
      } else {
        var b = new e();
        if (c)
          var y = c(h, v, g, a, i, b);
        if (!(y === void 0 ? t(v, h, n | r, c, b) : y))
          return !1;
      }
    }
    return !0;
  }
  return Fc = o, Fc;
}
var zc, Iv;
function Fy() {
  if (Iv) return zc;
  Iv = 1;
  var e = un();
  function t(n) {
    return n === n && !e(n);
  }
  return zc = t, zc;
}
var Bc, kv;
function dA() {
  if (kv) return Bc;
  kv = 1;
  var e = Fy(), t = Ld();
  function n(r) {
    for (var o = t(r), a = o.length; a--; ) {
      var i = o[a], s = r[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return Bc = n, Bc;
}
var qc, Lv;
function zy() {
  if (Lv) return qc;
  Lv = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return qc = e, qc;
}
var Hc, $v;
function fA() {
  if ($v) return Hc;
  $v = 1;
  var e = uA(), t = dA(), n = zy();
  function r(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return Hc = r, Hc;
}
var Wc, Fv;
function pA() {
  if (Fv) return Wc;
  Fv = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Wc = e, Wc;
}
var Vc, zv;
function mA() {
  if (zv) return Vc;
  zv = 1;
  var e = _y(), t = Od(), n = Pt(), r = Id(), o = kd(), a = Ka();
  function i(s, c, l) {
    c = e(c, s);
    for (var u = -1, d = c.length, m = !1; ++u < d; ) {
      var g = a(c[u]);
      if (!(m = s != null && l(s, g)))
        break;
      s = s[g];
    }
    return m || ++u != d ? m : (d = s == null ? 0 : s.length, !!d && o(d) && r(g, d) && (n(s) || t(s)));
  }
  return Vc = i, Vc;
}
var Gc, Bv;
function vA() {
  if (Bv) return Gc;
  Bv = 1;
  var e = pA(), t = mA();
  function n(r, o) {
    return r != null && t(r, o, e);
  }
  return Gc = n, Gc;
}
var jc, qv;
function hA() {
  if (qv) return jc;
  qv = 1;
  var e = $y(), t = Py(), n = vA(), r = Ed(), o = Fy(), a = zy(), i = Ka(), s = 1, c = 2;
  function l(u, d) {
    return r(u) && o(d) ? a(i(u), d) : function(m) {
      var g = t(m, u);
      return g === void 0 && g === d ? n(m, u) : e(d, g, s | c);
    };
  }
  return jc = l, jc;
}
var Uc, Hv;
function Xa() {
  if (Hv) return Uc;
  Hv = 1;
  function e(t) {
    return t;
  }
  return Uc = e, Uc;
}
var Kc, Wv;
function gA() {
  if (Wv) return Kc;
  Wv = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return Kc = e, Kc;
}
var Yc, Vv;
function bA() {
  if (Vv) return Yc;
  Vv = 1;
  var e = Ad();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return Yc = t, Yc;
}
var Xc, Gv;
function yA() {
  if (Gv) return Xc;
  Gv = 1;
  var e = gA(), t = bA(), n = Ed(), r = Ka();
  function o(a) {
    return n(a) ? e(r(a)) : t(a);
  }
  return Xc = o, Xc;
}
var Qc, jv;
function By() {
  if (jv) return Qc;
  jv = 1;
  var e = fA(), t = hA(), n = Xa(), r = Pt(), o = yA();
  function a(i) {
    return typeof i == "function" ? i : i == null ? n : typeof i == "object" ? r(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return Qc = a, Qc;
}
var Zc, Uv;
function wA() {
  if (Uv) return Zc;
  Uv = 1;
  function e(t, n, r, o) {
    for (var a = t.length, i = r + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (n(t[i], i, t))
        return i;
    return -1;
  }
  return Zc = e, Zc;
}
var Jc, Kv;
function xA() {
  if (Kv) return Jc;
  Kv = 1;
  function e(t) {
    return t !== t;
  }
  return Jc = e, Jc;
}
var el, Yv;
function SA() {
  if (Yv) return el;
  Yv = 1;
  function e(t, n, r) {
    for (var o = r - 1, a = t.length; ++o < a; )
      if (t[o] === n)
        return o;
    return -1;
  }
  return el = e, el;
}
var tl, Xv;
function CA() {
  if (Xv) return tl;
  Xv = 1;
  var e = wA(), t = xA(), n = SA();
  function r(o, a, i) {
    return a === a ? n(o, a, i) : e(o, t, i);
  }
  return tl = r, tl;
}
var nl, Qv;
function _A() {
  if (Qv) return nl;
  Qv = 1;
  var e = CA();
  function t(n, r) {
    var o = n == null ? 0 : n.length;
    return !!o && e(n, r, 0) > -1;
  }
  return nl = t, nl;
}
var rl, Zv;
function PA() {
  if (Zv) return rl;
  Zv = 1;
  function e(t, n, r) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (r(n, t[o]))
        return !0;
    return !1;
  }
  return rl = e, rl;
}
var ol, Jv;
function EA() {
  if (Jv) return ol;
  Jv = 1;
  function e() {
  }
  return ol = e, ol;
}
var al, eh;
function RA() {
  if (eh) return al;
  eh = 1;
  var e = Ly(), t = EA(), n = Dd(), r = 1 / 0, o = e && 1 / n(new e([, -0]))[1] == r ? function(a) {
    return new e(a);
  } : t;
  return al = o, al;
}
var il, th;
function MA() {
  if (th) return il;
  th = 1;
  var e = Ty(), t = _A(), n = PA(), r = Ny(), o = RA(), a = Dd(), i = 200;
  function s(c, l, u) {
    var d = -1, m = t, g = c.length, h = !0, v = [], b = v;
    if (u)
      h = !1, m = n;
    else if (g >= i) {
      var y = l ? null : o(c);
      if (y)
        return a(y);
      h = !1, m = r, b = new e();
    } else
      b = l ? [] : v;
    e:
      for (; ++d < g; ) {
        var w = c[d], x = l ? l(w) : w;
        if (w = u || w !== 0 ? w : 0, h && x === x) {
          for (var S = b.length; S--; )
            if (b[S] === x)
              continue e;
          l && b.push(x), v.push(w);
        } else m(b, x, u) || (b !== v && b.push(x), v.push(w));
      }
    return v;
  }
  return il = s, il;
}
var sl, nh;
function TA() {
  if (nh) return sl;
  nh = 1;
  var e = By(), t = MA();
  function n(r, o) {
    return r && r.length ? t(r, e(o, 2)) : [];
  }
  return sl = n, sl;
}
var NA = TA();
const rh = /* @__PURE__ */ ln(NA);
function AA(e, t, n) {
  return t === !0 ? rh(e, n) : xN(t) ? rh(e, t) : e;
}
var cl, oh;
function DA() {
  if (oh) return cl;
  oh = 1;
  var e = bo(), t = Od(), n = Pt(), r = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return n(a) || t(a) || !!(r && a && a[r]);
  }
  return cl = o, cl;
}
var ll, ah;
function OA() {
  if (ah) return ll;
  ah = 1;
  var e = Dy(), t = DA();
  function n(r, o, a, i, s) {
    var c = -1, l = r.length;
    for (a || (a = t), s || (s = []); ++c < l; ) {
      var u = r[c];
      o > 0 && a(u) ? o > 1 ? n(u, o - 1, a, i, s) : e(s, u) : i || (s[s.length] = u);
    }
    return s;
  }
  return ll = n, ll;
}
var ul, ih;
function IA() {
  if (ih) return ul;
  ih = 1;
  function e(t) {
    return function(n, r, o) {
      for (var a = -1, i = Object(n), s = o(n), c = s.length; c--; ) {
        var l = s[t ? c : ++a];
        if (r(i[l], l, i) === !1)
          break;
      }
      return n;
    };
  }
  return ul = e, ul;
}
var dl, sh;
function kA() {
  if (sh) return dl;
  sh = 1;
  var e = IA(), t = e();
  return dl = t, dl;
}
var fl, ch;
function LA() {
  if (ch) return fl;
  ch = 1;
  var e = kA(), t = Ld();
  function n(r, o) {
    return r && e(r, o, t);
  }
  return fl = n, fl;
}
var pl, lh;
function $A() {
  if (lh) return pl;
  lh = 1;
  var e = Ya();
  function t(n, r) {
    return function(o, a) {
      if (o == null)
        return o;
      if (!e(o))
        return n(o, a);
      for (var i = o.length, s = r ? i : -1, c = Object(o); (r ? s-- : ++s < i) && a(c[s], s, c) !== !1; )
        ;
      return o;
    };
  }
  return pl = t, pl;
}
var ml, uh;
function FA() {
  if (uh) return ml;
  uh = 1;
  var e = LA(), t = $A(), n = t(e);
  return ml = n, ml;
}
var vl, dh;
function zA() {
  if (dh) return vl;
  dh = 1;
  var e = FA(), t = Ya();
  function n(r, o) {
    var a = -1, i = t(r) ? Array(r.length) : [];
    return e(r, function(s, c, l) {
      i[++a] = o(s, c, l);
    }), i;
  }
  return vl = n, vl;
}
var hl, fh;
function BA() {
  if (fh) return hl;
  fh = 1;
  function e(t, n) {
    var r = t.length;
    for (t.sort(n); r--; )
      t[r] = t[r].value;
    return t;
  }
  return hl = e, hl;
}
var gl, ph;
function qA() {
  if (ph) return gl;
  ph = 1;
  var e = yo();
  function t(n, r) {
    if (n !== r) {
      var o = n !== void 0, a = n === null, i = n === n, s = e(n), c = r !== void 0, l = r === null, u = r === r, d = e(r);
      if (!l && !d && !s && n > r || s && c && u && !l && !d || a && c && u || !o && u || !i)
        return 1;
      if (!a && !s && !d && n < r || d && o && i && !a && !s || l && o && i || !c && i || !u)
        return -1;
    }
    return 0;
  }
  return gl = t, gl;
}
var bl, mh;
function HA() {
  if (mh) return bl;
  mh = 1;
  var e = qA();
  function t(n, r, o) {
    for (var a = -1, i = n.criteria, s = r.criteria, c = i.length, l = o.length; ++a < c; ) {
      var u = e(i[a], s[a]);
      if (u) {
        if (a >= l)
          return u;
        var d = o[a];
        return u * (d == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return bl = t, bl;
}
var yl, vh;
function WA() {
  if (vh) return yl;
  vh = 1;
  var e = Cy(), t = Ad(), n = By(), r = zA(), o = BA(), a = Iy(), i = HA(), s = Xa(), c = Pt();
  function l(u, d, m) {
    d.length ? d = e(d, function(v) {
      return c(v) ? function(b) {
        return t(b, v.length === 1 ? v[0] : v);
      } : v;
    }) : d = [s];
    var g = -1;
    d = e(d, a(n));
    var h = r(u, function(v, b, y) {
      var w = e(d, function(x) {
        return x(v);
      });
      return { criteria: w, index: ++g, value: v };
    });
    return o(h, function(v, b) {
      return i(v, b, m);
    });
  }
  return yl = l, yl;
}
var wl, hh;
function VA() {
  if (hh) return wl;
  hh = 1;
  function e(t, n, r) {
    switch (r.length) {
      case 0:
        return t.call(n);
      case 1:
        return t.call(n, r[0]);
      case 2:
        return t.call(n, r[0], r[1]);
      case 3:
        return t.call(n, r[0], r[1], r[2]);
    }
    return t.apply(n, r);
  }
  return wl = e, wl;
}
var xl, gh;
function GA() {
  if (gh) return xl;
  gh = 1;
  var e = VA(), t = Math.max;
  function n(r, o, a) {
    return o = t(o === void 0 ? r.length - 1 : o, 0), function() {
      for (var i = arguments, s = -1, c = t(i.length - o, 0), l = Array(c); ++s < c; )
        l[s] = i[o + s];
      s = -1;
      for (var u = Array(o + 1); ++s < o; )
        u[s] = i[s];
      return u[o] = a(l), e(r, this, u);
    };
  }
  return xl = n, xl;
}
var Sl, bh;
function jA() {
  if (bh) return Sl;
  bh = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Sl = e, Sl;
}
var Cl, yh;
function UA() {
  if (yh) return Cl;
  yh = 1;
  var e = Bn(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return Cl = t, Cl;
}
var _l, wh;
function KA() {
  if (wh) return _l;
  wh = 1;
  var e = jA(), t = UA(), n = Xa(), r = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return _l = r, _l;
}
var Pl, xh;
function YA() {
  if (xh) return Pl;
  xh = 1;
  var e = 800, t = 16, n = Date.now;
  function r(o) {
    var a = 0, i = 0;
    return function() {
      var s = n(), c = t - (s - i);
      if (i = s, c > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return o.apply(void 0, arguments);
    };
  }
  return Pl = r, Pl;
}
var El, Sh;
function XA() {
  if (Sh) return El;
  Sh = 1;
  var e = KA(), t = YA(), n = t(e);
  return El = n, El;
}
var Rl, Ch;
function QA() {
  if (Ch) return Rl;
  Ch = 1;
  var e = Xa(), t = GA(), n = XA();
  function r(o, a) {
    return n(t(o, a, e), o + "");
  }
  return Rl = r, Rl;
}
var Ml, _h;
function ZA() {
  if (_h) return Ml;
  _h = 1;
  var e = Md(), t = Ya(), n = Id(), r = un();
  function o(a, i, s) {
    if (!r(s))
      return !1;
    var c = typeof i;
    return (c == "number" ? t(s) && n(i, s.length) : c == "string" && i in s) ? e(s[i], a) : !1;
  }
  return Ml = o, Ml;
}
var Tl, Ph;
function JA() {
  if (Ph) return Tl;
  Ph = 1;
  var e = OA(), t = WA(), n = QA(), r = ZA(), o = n(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && r(a, i[0], i[1]) ? i = [] : s > 2 && r(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return Tl = o, Tl;
}
var eD = JA();
const tD = /* @__PURE__ */ ln(eD);
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function du() {
  return du = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, du.apply(this, arguments);
}
function nD(e, t) {
  return iD(e) || aD(e, t) || oD(e, t) || rD();
}
function rD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oD(e, t) {
  if (e) {
    if (typeof e == "string") return Eh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Eh(e, t);
  }
}
function Eh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function aD(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function iD(e) {
  if (Array.isArray(e)) return e;
}
function Rh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rh(Object(n), !0).forEach(function(r) {
      sD(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function sD(e, t, n) {
  return t = cD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function cD(e) {
  var t = lD(e, "string");
  return Qr(t) == "symbol" ? t : t + "";
}
function lD(e, t) {
  if (Qr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Qr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uD(e) {
  return Array.isArray(e) && da(e[0]) && da(e[1]) ? e.join(" ~ ") : e;
}
var dD = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, l = c === void 0 ? {} : c, u = t.payload, d = t.formatter, m = t.itemSorter, g = t.wrapperClassName, h = t.labelClassName, v = t.label, b = t.labelFormatter, y = t.accessibilityLayer, w = y === void 0 ? !1 : y, x = function() {
    if (u && u.length) {
      var z = {
        padding: 0,
        margin: 0
      }, T = (m ? tD(u, m) : u).map(function(H, W) {
        if (H.type === "none")
          return null;
        var B = Nl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: H.color || "#000"
        }, s), L = H.formatter || d || uD, M = H.value, j = H.name, ne = M, re = j;
        if (L && ne != null && re != null) {
          var $ = L(M, j, H, W, u);
          if (Array.isArray($)) {
            var O = nD($, 2);
            ne = O[0], re = O[1];
          } else
            ne = $;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ F.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(W),
            style: B
          }, da(re) ? /* @__PURE__ */ F.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, re) : null, da(re) ? /* @__PURE__ */ F.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ F.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, ne), /* @__PURE__ */ F.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, H.unit || ""))
        );
      });
      return /* @__PURE__ */ F.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: z
      }, T);
    }
    return null;
  }, S = Nl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), _ = Nl({
    margin: 0
  }, l), P = !gN(v), C = P ? v : "", E = ir("recharts-default-tooltip", g), R = ir("recharts-tooltip-label", h);
  P && b && u !== void 0 && u !== null && (C = b(v, u));
  var k = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ F.createElement("div", du({
    className: E,
    style: S
  }, k), /* @__PURE__ */ F.createElement("p", {
    className: R,
    style: _
  }, /* @__PURE__ */ F.isValidElement(C) ? C : "".concat(C)), x());
};
function Zr(e) {
  "@babel/helpers - typeof";
  return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zr(e);
}
function Uo(e, t, n) {
  return t = fD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fD(e) {
  var t = pD(e, "string");
  return Zr(t) == "symbol" ? t : t + "";
}
function pD(e, t) {
  if (Zr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Zr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dr = "recharts-tooltip-wrapper", mD = {
  visibility: "hidden"
};
function vD(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return ir(Dr, Uo(Uo(Uo(Uo({}, "".concat(Dr, "-right"), Rt(n) && t && Rt(t.x) && n >= t.x), "".concat(Dr, "-left"), Rt(n) && t && Rt(t.x) && n < t.x), "".concat(Dr, "-bottom"), Rt(r) && t && Rt(t.y) && r >= t.y), "".concat(Dr, "-top"), Rt(r) && t && Rt(t.y) && r < t.y));
}
function Mh(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && Rt(a[r]))
    return a[r];
  var u = n[r] - s - o, d = n[r] + o;
  if (t[r])
    return i[r] ? u : d;
  if (i[r]) {
    var m = u, g = c[r];
    return m < g ? Math.max(d, c[r]) : Math.max(u, c[r]);
  }
  var h = d + s, v = c[r] + l;
  return h > v ? Math.max(u, c[r]) : Math.max(d, c[r]);
}
function hD(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function gD(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, l, u, d;
  return i.height > 0 && i.width > 0 && n ? (u = Mh({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), d = Mh({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = hD({
    translateX: u,
    translateY: d,
    useTranslate3d: s
  })) : l = mD, {
    cssProperties: l,
    cssClasses: vD({
      translateX: u,
      translateY: d,
      coordinate: n
    })
  };
}
function lr(e) {
  "@babel/helpers - typeof";
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lr(e);
}
function Th(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Th(Object(n), !0).forEach(function(r) {
      pu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Th(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function bD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yD(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Hy(r.key), r);
  }
}
function wD(e, t, n) {
  return t && yD(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xD(e, t, n) {
  return t = fa(t), SD(e, qy() ? Reflect.construct(t, n || [], fa(e).constructor) : t.apply(e, n));
}
function SD(e, t) {
  if (t && (lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return CD(e);
}
function CD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qy = function() {
    return !!e;
  })();
}
function fa(e) {
  return fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, fa(e);
}
function _D(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fu(e, t);
}
function fu(e, t) {
  return fu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, fu(e, t);
}
function pu(e, t, n) {
  return t = Hy(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Hy(e) {
  var t = PD(e, "string");
  return lr(t) == "symbol" ? t : t + "";
}
function PD(e, t) {
  if (lr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (lr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ah = 1, ED = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    bD(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = xD(this, t, [].concat(o)), pu(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), pu(n, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, c, l, u;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (c = n.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0,
            y: (l = (u = n.props.coordinate) === null || u === void 0 ? void 0 : u.y) !== null && l !== void 0 ? l : 0
          }
        });
      }
    }), n;
  }
  return _D(t, e), wD(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Ah || Math.abs(r.height - this.state.lastBoundingBox.height) > Ah) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.children, u = o.coordinate, d = o.hasPayload, m = o.isAnimationActive, g = o.offset, h = o.position, v = o.reverseDirection, b = o.useTranslate3d, y = o.viewBox, w = o.wrapperStyle, x = gD({
        allowEscapeViewBox: i,
        coordinate: u,
        offsetTopLeft: g,
        position: h,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: y
      }), S = x.cssClasses, _ = x.cssProperties, P = Nh(Nh({
        transition: m && a ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, _), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && d ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ F.createElement("div", {
          tabIndex: -1,
          className: S,
          style: P,
          ref: function(E) {
            r.wrapperNode = E;
          }
        }, l)
      );
    }
  }]);
})(Tg), RD = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, MD = {
  isSsr: RD()
};
function ur(e) {
  "@babel/helpers - typeof";
  return ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ur(e);
}
function Dh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Oh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dh(Object(n), !0).forEach(function(r) {
      $d(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function TD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ND(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Vy(r.key), r);
  }
}
function AD(e, t, n) {
  return t && ND(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function DD(e, t, n) {
  return t = pa(t), OD(e, Wy() ? Reflect.construct(t, n || [], pa(e).constructor) : t.apply(e, n));
}
function OD(e, t) {
  if (t && (ur(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ID(e);
}
function ID(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Wy = function() {
    return !!e;
  })();
}
function pa(e) {
  return pa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pa(e);
}
function kD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mu(e, t);
}
function mu(e, t) {
  return mu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, mu(e, t);
}
function $d(e, t, n) {
  return t = Vy(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vy(e) {
  var t = LD(e, "string");
  return ur(t) == "symbol" ? t : t + "";
}
function LD(e, t) {
  if (ur(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ur(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function $D(e) {
  return e.dataKey;
}
function FD(e, t) {
  return /* @__PURE__ */ F.isValidElement(e) ? /* @__PURE__ */ F.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ F.createElement(e, t) : /* @__PURE__ */ F.createElement(dD, t);
}
var Fd = /* @__PURE__ */ (function(e) {
  function t() {
    return TD(this, t), DD(this, t, arguments);
  }
  return kD(t, e), AD(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.content, u = o.coordinate, d = o.filterNull, m = o.isAnimationActive, g = o.offset, h = o.payload, v = o.payloadUniqBy, b = o.position, y = o.reverseDirection, w = o.useTranslate3d, x = o.viewBox, S = o.wrapperStyle, _ = h ?? [];
      d && _.length && (_ = AA(h.filter(function(C) {
        return C.value != null && (C.hide !== !0 || r.props.includeHidden);
      }), v, $D));
      var P = _.length > 0;
      return /* @__PURE__ */ F.createElement(ED, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: m,
        active: a,
        coordinate: u,
        hasPayload: P,
        offset: g,
        position: b,
        reverseDirection: y,
        useTranslate3d: w,
        viewBox: x,
        wrapperStyle: S
      }, FD(l, Oh(Oh({}, this.props), {}, {
        payload: _
      })));
    }
  }]);
})(Tg);
$d(Fd, "displayName", "Tooltip");
$d(Fd, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !MD.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var Al, Ih;
function zD() {
  if (Ih) return Al;
  Ih = 1;
  var e = It(), t = function() {
    return e.Date.now();
  };
  return Al = t, Al;
}
var Dl, kh;
function BD() {
  if (kh) return Dl;
  kh = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return Dl = t, Dl;
}
var Ol, Lh;
function qD() {
  if (Lh) return Ol;
  Lh = 1;
  var e = BD(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return Ol = n, Ol;
}
var Il, $h;
function HD() {
  if ($h) return Il;
  $h = 1;
  var e = qD(), t = un(), n = yo(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
  function c(l) {
    if (typeof l == "number")
      return l;
    if (n(l))
      return r;
    if (t(l)) {
      var u = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = t(u) ? u + "" : u;
    }
    if (typeof l != "string")
      return l === 0 ? l : +l;
    l = e(l);
    var d = a.test(l);
    return d || i.test(l) ? s(l.slice(2), d ? 2 : 8) : o.test(l) ? r : +l;
  }
  return Il = c, Il;
}
var kl, Fh;
function WD() {
  if (Fh) return kl;
  Fh = 1;
  var e = un(), t = zD(), n = HD(), r = "Expected a function", o = Math.max, a = Math.min;
  function i(s, c, l) {
    var u, d, m, g, h, v, b = 0, y = !1, w = !1, x = !0;
    if (typeof s != "function")
      throw new TypeError(r);
    c = n(c) || 0, e(l) && (y = !!l.leading, w = "maxWait" in l, m = w ? o(n(l.maxWait) || 0, c) : m, x = "trailing" in l ? !!l.trailing : x);
    function S(T) {
      var H = u, W = d;
      return u = d = void 0, b = T, g = s.apply(W, H), g;
    }
    function _(T) {
      return b = T, h = setTimeout(E, c), y ? S(T) : g;
    }
    function P(T) {
      var H = T - v, W = T - b, B = c - H;
      return w ? a(B, m - W) : B;
    }
    function C(T) {
      var H = T - v, W = T - b;
      return v === void 0 || H >= c || H < 0 || w && W >= m;
    }
    function E() {
      var T = t();
      if (C(T))
        return R(T);
      h = setTimeout(E, P(T));
    }
    function R(T) {
      return h = void 0, x && u ? S(T) : (u = d = void 0, g);
    }
    function k() {
      h !== void 0 && clearTimeout(h), b = 0, u = v = d = h = void 0;
    }
    function A() {
      return h === void 0 ? g : R(t());
    }
    function z() {
      var T = t(), H = C(T);
      if (u = arguments, d = this, v = T, H) {
        if (h === void 0)
          return _(v);
        if (w)
          return clearTimeout(h), h = setTimeout(E, c), S(v);
      }
      return h === void 0 && (h = setTimeout(E, c)), g;
    }
    return z.cancel = k, z.flush = A, z;
  }
  return kl = i, kl;
}
var Ll, zh;
function VD() {
  if (zh) return Ll;
  zh = 1;
  var e = WD(), t = un(), n = "Expected a function";
  function r(o, a, i) {
    var s = !0, c = !0;
    if (typeof o != "function")
      throw new TypeError(n);
    return t(i) && (s = "leading" in i ? !!i.leading : s, c = "trailing" in i ? !!i.trailing : c), e(o, a, {
      leading: s,
      maxWait: a,
      trailing: c
    });
  }
  return Ll = r, Ll;
}
var GD = VD();
const jD = /* @__PURE__ */ ln(GD);
function Jr(e) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
function Bh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bh(Object(n), !0).forEach(function(r) {
      UD(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function UD(e, t, n) {
  return t = KD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function KD(e) {
  var t = YD(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function YD(e, t) {
  if (Jr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Jr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XD(e, t) {
  return eO(e) || JD(e, t) || ZD(e, t) || QD();
}
function QD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZD(e, t) {
  if (e) {
    if (typeof e == "string") return qh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qh(e, t);
  }
}
function qh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function JD(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function eO(e) {
  if (Array.isArray(e)) return e;
}
var tO = /* @__PURE__ */ Aa(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, l = e.minWidth, u = l === void 0 ? 0 : l, d = e.minHeight, m = e.maxHeight, g = e.children, h = e.debounce, v = h === void 0 ? 0 : h, b = e.id, y = e.className, w = e.onResize, x = e.style, S = x === void 0 ? {} : x, _ = jr(null), P = jr();
  P.current = w, ZC(t, function() {
    return Object.defineProperty(_.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), _.current;
      },
      configurable: !0
    });
  });
  var C = Vt({
    containerWidth: o.width,
    containerHeight: o.height
  }), E = XD(C, 2), R = E[0], k = E[1], A = Mg(function(T, H) {
    k(function(W) {
      var B = Math.round(T), L = Math.round(H);
      return W.containerWidth === B && W.containerHeight === L ? W : {
        containerWidth: B,
        containerHeight: L
      };
    });
  }, []);
  Wt(function() {
    var T = function(j) {
      var ne, re = j[0].contentRect, $ = re.width, O = re.height;
      A($, O), (ne = P.current) === null || ne === void 0 || ne.call(P, $, O);
    };
    v > 0 && (T = jD(T, v, {
      trailing: !0,
      leading: !1
    }));
    var H = new ResizeObserver(T), W = _.current.getBoundingClientRect(), B = W.width, L = W.height;
    return A(B, L), H.observe(_.current), function() {
      H.disconnect();
    };
  }, [A, v]);
  var z = Ng(function() {
    var T = R.containerWidth, H = R.containerHeight;
    if (T < 0 || H < 0)
      return null;
    Gs(jo(i) || jo(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), Gs(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var W = jo(i) ? T : i, B = jo(c) ? H : c;
    n && n > 0 && (W ? B = W / n : B && (W = B * n), m && B > m && (B = m)), Gs(W > 0 || B > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, W, B, i, c, u, d, n);
    var L = !Array.isArray(g) && NN(g.type).endsWith("Chart");
    return F.Children.map(g, function(M) {
      return /* @__PURE__ */ F.isValidElement(M) ? /* @__PURE__ */ JC(M, Ko({
        width: W,
        height: B
      }, L ? {
        style: Ko({
          height: "100%",
          width: "100%",
          maxHeight: B,
          maxWidth: W
        }, M.props.style)
      } : {})) : M;
    });
  }, [n, g, c, m, d, u, R, i]);
  return /* @__PURE__ */ F.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: ir("recharts-responsive-container", y),
    style: Ko(Ko({}, S), {}, {
      width: i,
      height: c,
      minWidth: u,
      minHeight: d,
      maxHeight: m
    }),
    ref: _
  }, z);
});
const nO = { light: "", dark: ".dark" }, Gy = p.createContext(null);
function rO() {
  const e = p.useContext(Gy);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function DH({
  id: e,
  className: t,
  children: n,
  config: r,
  ...o
}) {
  const a = p.useId(), i = `chart-${e || a.replace(/:/g, "")}`;
  return /* @__PURE__ */ f(Gy.Provider, { value: { config: r }, children: /* @__PURE__ */ ie(
    "div",
    {
      "data-slot": "chart",
      "data-chart": i,
      className: I(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ f(oO, { id: i, config: r }),
        /* @__PURE__ */ f(tO, { children: n })
      ]
    }
  ) });
}
const oO = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, r]) => r.theme || r.color
  );
  return n.length ? /* @__PURE__ */ f(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(nO).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, i]) => {
            var c;
            const s = ((c = i.theme) == null ? void 0 : c[r]) || i.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, OH = Fd;
function IH({
  active: e,
  payload: t,
  className: n,
  indicator: r = "dot",
  hideLabel: o = !1,
  hideIndicator: a = !1,
  label: i,
  labelFormatter: s,
  labelClassName: c,
  formatter: l,
  color: u,
  nameKey: d,
  labelKey: m
}) {
  const { config: g } = rO(), h = p.useMemo(() => {
    var S;
    if (o || !(t != null && t.length))
      return null;
    const [b] = t, y = `${m || (b == null ? void 0 : b.dataKey) || (b == null ? void 0 : b.name) || "value"}`, w = Hh(g, b, y), x = !m && typeof i == "string" ? ((S = g[i]) == null ? void 0 : S.label) || i : w == null ? void 0 : w.label;
    return s ? /* @__PURE__ */ f("div", { className: I("font-medium", c), children: s(x, t) }) : x ? /* @__PURE__ */ f("div", { className: I("font-medium", c), children: x }) : null;
  }, [
    i,
    s,
    t,
    o,
    c,
    g,
    m
  ]);
  if (!e || !(t != null && t.length))
    return null;
  const v = t.length === 1 && r !== "dot";
  return /* @__PURE__ */ ie(
    "div",
    {
      className: I(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        n
      ),
      children: [
        v ? null : h,
        /* @__PURE__ */ f("div", { className: "grid gap-1.5", children: t.map((b, y) => {
          const w = `${d || b.name || b.dataKey || "value"}`, x = Hh(g, b, w), S = u || b.payload.fill || b.color;
          return /* @__PURE__ */ f(
            "div",
            {
              className: I(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                r === "dot" && "items-center"
              ),
              children: l && (b == null ? void 0 : b.value) !== void 0 && b.name ? l(b.value, b.name, b, y, b.payload) : /* @__PURE__ */ ie(Le, { children: [
                x != null && x.icon ? /* @__PURE__ */ f(x.icon, {}) : !a && /* @__PURE__ */ f(
                  "div",
                  {
                    className: I(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": r === "dot",
                        "w-1": r === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                        "my-0.5": v && r === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": S,
                      "--color-border": S
                    }
                  }
                ),
                /* @__PURE__ */ ie(
                  "div",
                  {
                    className: I(
                      "flex flex-1 justify-between leading-none",
                      v ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ ie("div", { className: "grid gap-1.5", children: [
                        v ? h : null,
                        /* @__PURE__ */ f("span", { className: "text-muted-foreground", children: (x == null ? void 0 : x.label) || b.name })
                      ] }),
                      b.value && /* @__PURE__ */ f("span", { className: "text-foreground font-mono font-medium tabular-nums", children: b.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            b.dataKey
          );
        }) })
      ]
    }
  );
}
function Hh(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function wr(e) {
  const t = p.useRef({ value: e, previous: e });
  return p.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function wo(e) {
  const [t, n] = p.useState(void 0);
  return Oe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          i = l.inlineSize, s = l.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var zd = "Checkbox", [aO] = Pe(zd), [iO, sO] = aO(zd), jy = p.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c = "on",
      onCheckedChange: l,
      form: u,
      ...d
    } = e, [m, g] = p.useState(null), h = se(t, (S) => g(S)), v = p.useRef(!1), b = m ? u || !!m.closest("form") : !0, [y = !1, w] = De({
      prop: o,
      defaultProp: a,
      onChange: l
    }), x = p.useRef(y);
    return p.useEffect(() => {
      const S = m == null ? void 0 : m.form;
      if (S) {
        const _ = () => w(x.current);
        return S.addEventListener("reset", _), () => S.removeEventListener("reset", _);
      }
    }, [m, w]), /* @__PURE__ */ ie(iO, { scope: n, state: y, disabled: s, children: [
      /* @__PURE__ */ f(
        X.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": nn(y) ? "mixed" : y,
          "aria-required": i,
          "data-state": Yy(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...d,
          ref: h,
          onKeyDown: q(e.onKeyDown, (S) => {
            S.key === "Enter" && S.preventDefault();
          }),
          onClick: q(e.onClick, (S) => {
            w((_) => nn(_) ? !0 : !_), b && (v.current = S.isPropagationStopped(), v.current || S.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ f(
        cO,
        {
          control: m,
          bubbles: !v.current,
          name: r,
          value: c,
          checked: y,
          required: i,
          disabled: s,
          form: u,
          style: { transform: "translateX(-100%)" },
          defaultChecked: nn(a) ? !1 : a
        }
      )
    ] });
  }
);
jy.displayName = zd;
var Uy = "CheckboxIndicator", Ky = p.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = sO(Uy, n);
    return /* @__PURE__ */ f(Ee, { present: r || nn(a.state) || a.state === !0, children: /* @__PURE__ */ f(
      X.span,
      {
        "data-state": Yy(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
Ky.displayName = Uy;
var cO = (e) => {
  const { control: t, checked: n, bubbles: r = !0, defaultChecked: o, ...a } = e, i = p.useRef(null), s = wr(n), c = wo(t);
  p.useEffect(() => {
    const u = i.current, d = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (s !== n && g) {
      const h = new Event("click", { bubbles: r });
      u.indeterminate = nn(n), g.call(u, nn(n) ? !1 : n), u.dispatchEvent(h);
    }
  }, [s, n, r]);
  const l = p.useRef(nn(n) ? !1 : n);
  return /* @__PURE__ */ f(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: o ?? l.current,
      ...a,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...c,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function nn(e) {
  return e === "indeterminate";
}
function Yy(e) {
  return nn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var lO = jy, uO = Ky;
function kH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    lO,
    {
      "data-slot": "checkbox",
      className: I(
        "peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(
        uO,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ f(Vg, { className: "size-3.5" })
        }
      )
    }
  );
}
function LH({
  ...e
}) {
  return /* @__PURE__ */ f(kg, { "data-slot": "collapsible", ...e });
}
function $H({
  ...e
}) {
  return /* @__PURE__ */ f(
    Uu,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function FH({
  ...e
}) {
  return /* @__PURE__ */ f(
    Yu,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
var Wh = 1, dO = 0.9, fO = 0.8, pO = 0.17, $l = 0.1, Fl = 0.999, mO = 0.9999, vO = 0.99, hO = /[\\\/_+.#"@\[\(\{&]/, gO = /[\\\/_+.#"@\[\(\{&]/g, bO = /[\s-]/, Xy = /[\s-]/g;
function vu(e, t, n, r, o, a, i) {
  if (a === t.length) return o === e.length ? Wh : vO;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var c = r.charAt(a), l = n.indexOf(c, o), u = 0, d, m, g, h; l >= 0; ) d = vu(e, t, n, r, l + 1, a + 1, i), d > u && (l === o ? d *= Wh : hO.test(e.charAt(l - 1)) ? (d *= fO, g = e.slice(o, l - 1).match(gO), g && o > 0 && (d *= Math.pow(Fl, g.length))) : bO.test(e.charAt(l - 1)) ? (d *= dO, h = e.slice(o, l - 1).match(Xy), h && o > 0 && (d *= Math.pow(Fl, h.length))) : (d *= pO, o > 0 && (d *= Math.pow(Fl, l - o))), e.charAt(l) !== t.charAt(a) && (d *= mO)), (d < $l && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (m = vu(e, t, n, r, l + 1, a + 2, i), m * $l > d && (d = m * $l)), d > u && (u = d), l = n.indexOf(c, l + 1);
  return i[s] = u, u;
}
function Vh(e) {
  return e.toLowerCase().replace(Xy, " ");
}
function yO(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, vu(e, t, Vh(e), Vh(t), 0, 0, {});
}
var Or = '[cmdk-group=""]', zl = '[cmdk-group-items=""]', wO = '[cmdk-group-heading=""]', Qy = '[cmdk-item=""]', Gh = `${Qy}:not([aria-disabled="true"])`, hu = "cmdk-item-select", Qn = "data-value", xO = (e, t, n) => yO(e, t, n), Zy = p.createContext(void 0), xo = () => p.useContext(Zy), Jy = p.createContext(void 0), Bd = () => p.useContext(Jy), ew = p.createContext(void 0), tw = p.forwardRef((e, t) => {
  let n = Zn(() => {
    var $, O;
    return { search: "", value: (O = ($ = e.value) != null ? $ : e.defaultValue) != null ? O : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Zn(() => /* @__PURE__ */ new Set()), o = Zn(() => /* @__PURE__ */ new Map()), a = Zn(() => /* @__PURE__ */ new Map()), i = Zn(() => /* @__PURE__ */ new Set()), s = nw(e), { label: c, children: l, value: u, onValueChange: d, filter: m, shouldFilter: g, loop: h, disablePointerSelection: v = !1, vimBindings: b = !0, ...y } = e, w = Me(), x = Me(), S = Me(), _ = p.useRef(null), P = DO();
  Tn(() => {
    if (u !== void 0) {
      let $ = u.trim();
      n.current.value = $, C.emit();
    }
  }, [u]), Tn(() => {
    P(6, T);
  }, []);
  let C = p.useMemo(() => ({ subscribe: ($) => (i.current.add($), () => i.current.delete($)), snapshot: () => n.current, setState: ($, O, V) => {
    var G, Y, D, K;
    if (!Object.is(n.current[$], O)) {
      if (n.current[$] = O, $ === "search") z(), k(), P(1, A);
      else if ($ === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(S);
          Q ? Q.focus() : (G = document.getElementById(w)) == null || G.focus();
        }
        if (P(7, () => {
          var Q;
          n.current.selectedItemId = (Q = H()) == null ? void 0 : Q.id, C.emit();
        }), V || P(5, T), ((Y = s.current) == null ? void 0 : Y.value) !== void 0) {
          let Q = O ?? "";
          (K = (D = s.current).onValueChange) == null || K.call(D, Q);
          return;
        }
      }
      C.emit();
    }
  }, emit: () => {
    i.current.forEach(($) => $());
  } }), []), E = p.useMemo(() => ({ value: ($, O, V) => {
    var G;
    O !== ((G = a.current.get($)) == null ? void 0 : G.value) && (a.current.set($, { value: O, keywords: V }), n.current.filtered.items.set($, R(O, V)), P(2, () => {
      k(), C.emit();
    }));
  }, item: ($, O) => (r.current.add($), O && (o.current.has(O) ? o.current.get(O).add($) : o.current.set(O, /* @__PURE__ */ new Set([$]))), P(3, () => {
    z(), k(), n.current.value || A(), C.emit();
  }), () => {
    a.current.delete($), r.current.delete($), n.current.filtered.items.delete($);
    let V = H();
    P(4, () => {
      z(), (V == null ? void 0 : V.getAttribute("id")) === $ && A(), C.emit();
    });
  }), group: ($) => (o.current.has($) || o.current.set($, /* @__PURE__ */ new Set()), () => {
    a.current.delete($), o.current.delete($);
  }), filter: () => s.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: w, inputId: S, labelId: x, listInnerRef: _ }), []);
  function R($, O) {
    var V, G;
    let Y = (G = (V = s.current) == null ? void 0 : V.filter) != null ? G : xO;
    return $ ? Y($, n.current.search, O) : 0;
  }
  function k() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let $ = n.current.filtered.items, O = [];
    n.current.filtered.groups.forEach((G) => {
      let Y = o.current.get(G), D = 0;
      Y.forEach((K) => {
        let Q = $.get(K);
        D = Math.max(Q, D);
      }), O.push([G, D]);
    });
    let V = _.current;
    W().sort((G, Y) => {
      var D, K;
      let Q = G.getAttribute("id"), Z = Y.getAttribute("id");
      return ((D = $.get(Z)) != null ? D : 0) - ((K = $.get(Q)) != null ? K : 0);
    }).forEach((G) => {
      let Y = G.closest(zl);
      Y ? Y.appendChild(G.parentElement === Y ? G : G.closest(`${zl} > *`)) : V.appendChild(G.parentElement === V ? G : G.closest(`${zl} > *`));
    }), O.sort((G, Y) => Y[1] - G[1]).forEach((G) => {
      var Y;
      let D = (Y = _.current) == null ? void 0 : Y.querySelector(`${Or}[${Qn}="${encodeURIComponent(G[0])}"]`);
      D == null || D.parentElement.appendChild(D);
    });
  }
  function A() {
    let $ = W().find((V) => V.getAttribute("aria-disabled") !== "true"), O = $ == null ? void 0 : $.getAttribute(Qn);
    C.setState("value", O || void 0);
  }
  function z() {
    var $, O, V, G;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let Y = 0;
    for (let D of r.current) {
      let K = (O = ($ = a.current.get(D)) == null ? void 0 : $.value) != null ? O : "", Q = (G = (V = a.current.get(D)) == null ? void 0 : V.keywords) != null ? G : [], Z = R(K, Q);
      n.current.filtered.items.set(D, Z), Z > 0 && Y++;
    }
    for (let [D, K] of o.current) for (let Q of K) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(D);
      break;
    }
    n.current.filtered.count = Y;
  }
  function T() {
    var $, O, V;
    let G = H();
    G && ((($ = G.parentElement) == null ? void 0 : $.firstChild) === G && ((V = (O = G.closest(Or)) == null ? void 0 : O.querySelector(wO)) == null || V.scrollIntoView({ block: "nearest" })), G.scrollIntoView({ block: "nearest" }));
  }
  function H() {
    var $;
    return ($ = _.current) == null ? void 0 : $.querySelector(`${Qy}[aria-selected="true"]`);
  }
  function W() {
    var $;
    return Array.from((($ = _.current) == null ? void 0 : $.querySelectorAll(Gh)) || []);
  }
  function B($) {
    let O = W()[$];
    O && C.setState("value", O.getAttribute(Qn));
  }
  function L($) {
    var O;
    let V = H(), G = W(), Y = G.findIndex((K) => K === V), D = G[Y + $];
    (O = s.current) != null && O.loop && (D = Y + $ < 0 ? G[G.length - 1] : Y + $ === G.length ? G[0] : G[Y + $]), D && C.setState("value", D.getAttribute(Qn));
  }
  function M($) {
    let O = H(), V = O == null ? void 0 : O.closest(Or), G;
    for (; V && !G; ) V = $ > 0 ? NO(V, Or) : AO(V, Or), G = V == null ? void 0 : V.querySelector(Gh);
    G ? C.setState("value", G.getAttribute(Qn)) : L($);
  }
  let j = () => B(W().length - 1), ne = ($) => {
    $.preventDefault(), $.metaKey ? j() : $.altKey ? M(1) : L(1);
  }, re = ($) => {
    $.preventDefault(), $.metaKey ? B(0) : $.altKey ? M(-1) : L(-1);
  };
  return p.createElement(X.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: ($) => {
    var O;
    (O = y.onKeyDown) == null || O.call(y, $);
    let V = $.nativeEvent.isComposing || $.keyCode === 229;
    if (!($.defaultPrevented || V)) switch ($.key) {
      case "n":
      case "j": {
        b && $.ctrlKey && ne($);
        break;
      }
      case "ArrowDown": {
        ne($);
        break;
      }
      case "p":
      case "k": {
        b && $.ctrlKey && re($);
        break;
      }
      case "ArrowUp": {
        re($);
        break;
      }
      case "Home": {
        $.preventDefault(), B(0);
        break;
      }
      case "End": {
        $.preventDefault(), j();
        break;
      }
      case "Enter": {
        $.preventDefault();
        let G = H();
        if (G) {
          let Y = new Event(hu);
          G.dispatchEvent(Y);
        }
      }
    }
  } }, p.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: IO }, c), Qa(e, ($) => p.createElement(Jy.Provider, { value: C }, p.createElement(Zy.Provider, { value: E }, $))));
}), SO = p.forwardRef((e, t) => {
  var n, r;
  let o = Me(), a = p.useRef(null), i = p.useContext(ew), s = xo(), c = nw(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  Tn(() => {
    if (!l) return s.item(o, i == null ? void 0 : i.id);
  }, [l]);
  let u = rw(o, a, [e.value, e.children, a], e.keywords), d = Bd(), m = rn((P) => P.value && P.value === u.current), g = rn((P) => l || s.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  p.useEffect(() => {
    let P = a.current;
    if (!(!P || e.disabled)) return P.addEventListener(hu, h), () => P.removeEventListener(hu, h);
  }, [g, e.onSelect, e.disabled]);
  function h() {
    var P, C;
    v(), (C = (P = c.current).onSelect) == null || C.call(P, u.current);
  }
  function v() {
    d.setState("value", u.current, !0);
  }
  if (!g) return null;
  let { disabled: b, value: y, onSelect: w, forceMount: x, keywords: S, ..._ } = e;
  return p.createElement(X.div, { ref: Dt(a, t), ..._, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!m, "data-disabled": !!b, "data-selected": !!m, onPointerMove: b || s.getDisablePointerSelection() ? void 0 : v, onClick: b ? void 0 : h }, e.children);
}), CO = p.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, i = Me(), s = p.useRef(null), c = p.useRef(null), l = Me(), u = xo(), d = rn((g) => o || u.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(i) : !0);
  Tn(() => u.group(i), []), rw(i, s, [e.value, e.heading, c]);
  let m = p.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return p.createElement(X.div, { ref: Dt(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && p.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), Qa(e, (g) => p.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, p.createElement(ew.Provider, { value: m }, g))));
}), _O = p.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = p.useRef(null), a = rn((i) => !i.search);
  return !n && !a ? null : p.createElement(X.div, { ref: Dt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), PO = p.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Bd(), i = rn((l) => l.search), s = rn((l) => l.selectedItemId), c = xo();
  return p.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), p.createElement(X.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": s, id: c.inputId, type: "text", value: o ? e.value : i, onChange: (l) => {
    o || a.setState("search", l.target.value), n == null || n(l.target.value);
  } });
}), EO = p.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = p.useRef(null), i = p.useRef(null), s = rn((l) => l.selectedItemId), c = xo();
  return p.useEffect(() => {
    if (i.current && a.current) {
      let l = i.current, u = a.current, d, m = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let g = l.offsetHeight;
          u.style.setProperty("--cmdk-list-height", g.toFixed(1) + "px");
        });
      });
      return m.observe(l), () => {
        cancelAnimationFrame(d), m.unobserve(l);
      };
    }
  }, []), p.createElement(X.div, { ref: Dt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: c.listId }, Qa(e, (l) => p.createElement("div", { ref: Dt(i, c.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), RO = p.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return p.createElement(co, { open: n, onOpenChange: r }, p.createElement(lo, { container: i }, p.createElement(uo, { "cmdk-overlay": "", className: o }), p.createElement(fo, { "aria-label": e.label, "cmdk-dialog": "", className: a }, p.createElement(tw, { ref: t, ...s }))));
}), MO = p.forwardRef((e, t) => rn((n) => n.filtered.count === 0) ? p.createElement(X.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), TO = p.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return p.createElement(X.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Qa(e, (i) => p.createElement("div", { "aria-hidden": !0 }, i)));
}), qn = Object.assign(tw, { List: EO, Item: SO, Input: PO, Group: CO, Separator: _O, Dialog: RO, Empty: MO, Loading: TO });
function NO(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function AO(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function nw(e) {
  let t = p.useRef(e);
  return Tn(() => {
    t.current = e;
  }), t;
}
var Tn = typeof window > "u" ? p.useEffect : p.useLayoutEffect;
function Zn(e) {
  let t = p.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function rn(e) {
  let t = Bd(), n = () => e(t.snapshot());
  return p.useSyncExternalStore(t.subscribe, n, n);
}
function rw(e, t, n, r = []) {
  let o = p.useRef(), a = xo();
  return Tn(() => {
    var i;
    let s = (() => {
      var l;
      for (let u of n) {
        if (typeof u == "string") return u.trim();
        if (typeof u == "object" && "current" in u) return u.current ? (l = u.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = r.map((l) => l.trim());
    a.value(e, s, c), (i = t.current) == null || i.setAttribute(Qn, s), o.current = s;
  }), o;
}
var DO = () => {
  let [e, t] = p.useState(), n = Zn(() => /* @__PURE__ */ new Map());
  return Tn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function OO(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Qa({ asChild: e, children: t }, n) {
  return e && p.isValidElement(t) ? p.cloneElement(OO(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var IO = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function kO({
  ...e
}) {
  return /* @__PURE__ */ f(co, { "data-slot": "dialog", ...e });
}
function zH({
  ...e
}) {
  return /* @__PURE__ */ f(Fa, { "data-slot": "dialog-trigger", ...e });
}
function LO({
  ...e
}) {
  return /* @__PURE__ */ f(lo, { "data-slot": "dialog-portal", ...e });
}
function BH({
  ...e
}) {
  return /* @__PURE__ */ f(Ln, { "data-slot": "dialog-close", ...e });
}
function $O({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    uo,
    {
      "data-slot": "dialog-overlay",
      className: I(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function FO({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ ie(LO, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ f($O, {}),
    /* @__PURE__ */ ie(
      fo,
      {
        "data-slot": "dialog-content",
        className: I(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          /* @__PURE__ */ ie(Ln, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ f(Ug, {}),
            /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function zO({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "dialog-header",
      className: I("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function qH({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "dialog-footer",
      className: I(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function BO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    za,
    {
      "data-slot": "dialog-title",
      className: I("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function qO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Ba,
    {
      "data-slot": "dialog-description",
      className: I("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function HO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    qn,
    {
      "data-slot": "command",
      className: I(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function HH({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ ie(kO, { ...r, children: [
    /* @__PURE__ */ ie(zO, { className: "sr-only", children: [
      /* @__PURE__ */ f(BO, { children: e }),
      /* @__PURE__ */ f(qO, { children: t })
    ] }),
    /* @__PURE__ */ f(FO, { className: "overflow-hidden p-0", children: /* @__PURE__ */ f(HO, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n }) })
  ] });
}
function WH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ ie(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ f(eP, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ f(
          qn.Input,
          {
            "data-slot": "command-input",
            className: I(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function VH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    qn.List,
    {
      "data-slot": "command-list",
      className: I(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function GH({
  ...e
}) {
  return /* @__PURE__ */ f(
    qn.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function jH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    qn.Group,
    {
      "data-slot": "command-group",
      className: I(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function UH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    qn.Separator,
    {
      "data-slot": "command-separator",
      className: I("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function KH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    qn.Item,
    {
      "data-slot": "command-item",
      className: I(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function YH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "command-shortcut",
      className: I(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
const WO = ["top", "right", "bottom", "left"], on = Math.min, rt = Math.max, ma = Math.round, Yo = Math.floor, At = (e) => ({
  x: e,
  y: e
}), VO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function gu(e, t, n) {
  return rt(e, on(t, n));
}
function Gt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jt(e) {
  return e.split("-")[0];
}
function xr(e) {
  return e.split("-")[1];
}
function qd(e) {
  return e === "x" ? "y" : "x";
}
function Hd(e) {
  return e === "y" ? "height" : "width";
}
function Nt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Wd(e) {
  return qd(Nt(e));
}
function GO(e, t, n) {
  n === void 0 && (n = !1);
  const r = xr(e), o = Wd(e), a = Hd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = va(i)), [i, va(i)];
}
function jO(e) {
  const t = va(e);
  return [bu(e), t, bu(t)];
}
function bu(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const jh = ["left", "right"], Uh = ["right", "left"], UO = ["top", "bottom"], KO = ["bottom", "top"];
function YO(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Uh : jh : t ? jh : Uh;
    case "left":
    case "right":
      return t ? UO : KO;
    default:
      return [];
  }
}
function XO(e, t, n, r) {
  const o = xr(e);
  let a = YO(jt(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(bu)))), a;
}
function va(e) {
  const t = jt(e);
  return VO[t] + e.slice(t.length);
}
function QO(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ow(e) {
  return typeof e != "number" ? QO(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ha(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Kh(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Nt(t), i = Wd(t), s = Hd(i), c = jt(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (xr(t)) {
    case "start":
      g[i] -= m * (n && l ? -1 : 1);
      break;
    case "end":
      g[i] += m * (n && l ? -1 : 1);
      break;
  }
  return g;
}
async function ZO(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = Gt(t, e), h = ow(g), b = s[m ? d === "floating" ? "reference" : "floating" : d], y = ha(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), w = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = ha(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: x,
    strategy: c
  }) : w);
  return {
    top: (y.top - _.top + h.top) / S.y,
    bottom: (_.bottom - y.bottom + h.bottom) / S.y,
    left: (y.left - _.left + h.left) / S.x,
    right: (_.right - y.right + h.right) / S.x
  };
}
const JO = 50, eI = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = i.detectOverflow ? i : {
    ...i,
    detectOverflow: ZO
  }, c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Kh(l, r, c), m = r, g = 0;
  const h = {};
  for (let v = 0; v < a.length; v++) {
    const b = a[v];
    if (!b)
      continue;
    const {
      name: y,
      fn: w
    } = b, {
      x,
      y: S,
      data: _,
      reset: P
    } = await w({
      x: u,
      y: d,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = x ?? u, d = S ?? d, h[y] = {
      ...h[y],
      ..._
    }, P && g < JO && (g++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (l = P.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: u,
      y: d
    } = Kh(l, m, c)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: m,
    strategy: o,
    middlewareData: h
  };
}, tI = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Gt(e, t) || {};
    if (l == null)
      return {};
    const d = ow(u), m = {
      x: n,
      y: r
    }, g = Wd(o), h = Hd(g), v = await i.getDimensions(l), b = g === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", S = a.reference[h] + a.reference[g] - m[g] - a.floating[h], _ = m[g] - a.reference[g], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let C = P ? P[x] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement(P))) && (C = s.floating[x] || a.floating[h]);
    const E = S / 2 - _ / 2, R = C / 2 - v[h] / 2 - 1, k = on(d[y], R), A = on(d[w], R), z = k, T = C - v[h] - A, H = C / 2 - v[h] / 2 + E, W = gu(z, H, T), B = !c.arrow && xr(o) != null && H !== W && a.reference[h] / 2 - (H < z ? k : A) - v[h] / 2 < 0, L = B ? H < z ? H - z : H - T : 0;
    return {
      [g]: m[g] + L,
      data: {
        [g]: W,
        centerOffset: H - W - L,
        ...B && {
          alignmentOffset: L
        }
      },
      reset: B
    };
  }
}), nI = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...b
      } = Gt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = jt(o), w = Nt(s), x = jt(s) === s, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), _ = m || (x || !v ? [va(s)] : jO(s)), P = h !== "none";
      !m && P && _.push(...XO(s, v, h, S));
      const C = [s, ..._], E = await c.detectOverflow(t, b), R = [];
      let k = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && R.push(E[y]), d) {
        const H = GO(o, i, S);
        R.push(E[H[0]], E[H[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: R
      }], !R.every((H) => H <= 0)) {
        var A, z;
        const H = (((A = a.flip) == null ? void 0 : A.index) || 0) + 1, W = C[H];
        if (W && (!(d === "alignment" ? w !== Nt(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((M) => Nt(M.placement) === w ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: k
            },
            reset: {
              placement: W
            }
          };
        let B = (z = k.filter((L) => L.overflows[0] <= 0).sort((L, M) => L.overflows[1] - M.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!B)
          switch (g) {
            case "bestFit": {
              var T;
              const L = (T = k.filter((M) => {
                if (P) {
                  const j = Nt(M.placement);
                  return j === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((j) => j > 0).reduce((j, ne) => j + ne, 0)]).sort((M, j) => M[1] - j[1])[0]) == null ? void 0 : T[0];
              L && (B = L);
              break;
            }
            case "initialPlacement":
              B = s;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Yh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xh(e) {
  return WO.some((t) => e[t] >= 0);
}
const rI = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Gt(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), s = Yh(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Xh(s)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), s = Yh(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Xh(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, aw = /* @__PURE__ */ new Set(["left", "top"]);
async function oI(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = jt(n), s = xr(n), c = Nt(n) === "y", l = aw.has(i) ? -1 : 1, u = a && c ? -1 : 1, d = Gt(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof h == "number" && (g = s === "end" ? h * -1 : h), c ? {
    x: g * u,
    y: m * l
  } : {
    x: m * l,
    y: g * u
  };
}
const aI = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, c = await oI(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, iI = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: a
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: w,
              y: x
            } = y;
            return {
              x: w,
              y: x
            };
          }
        },
        ...l
      } = Gt(e, t), u = {
        x: n,
        y: r
      }, d = await a.detectOverflow(t, l), m = Nt(jt(o)), g = qd(m);
      let h = u[g], v = u[m];
      if (i) {
        const y = g === "y" ? "top" : "left", w = g === "y" ? "bottom" : "right", x = h + d[y], S = h - d[w];
        h = gu(x, h, S);
      }
      if (s) {
        const y = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", x = v + d[y], S = v - d[w];
        v = gu(x, v, S);
      }
      const b = c.fn({
        ...t,
        [g]: h,
        [m]: v
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [g]: i,
            [m]: s
          }
        }
      };
    }
  };
}, sI = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Gt(e, t), u = {
        x: n,
        y: r
      }, d = Nt(o), m = qd(d);
      let g = u[m], h = u[d];
      const v = Gt(s, t), b = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const x = m === "y" ? "height" : "width", S = a.reference[m] - a.floating[x] + b.mainAxis, _ = a.reference[m] + a.reference[x] - b.mainAxis;
        g < S ? g = S : g > _ && (g = _);
      }
      if (l) {
        var y, w;
        const x = m === "y" ? "width" : "height", S = aw.has(jt(o)), _ = a.reference[d] - a.floating[x] + (S && ((y = i.offset) == null ? void 0 : y[d]) || 0) + (S ? 0 : b.crossAxis), P = a.reference[d] + a.reference[x] + (S ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) - (S ? b.crossAxis : 0);
        h < _ ? h = _ : h > P && (h = P);
      }
      return {
        [m]: g,
        [d]: h
      };
    }
  };
}, cI = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...l
      } = Gt(e, t), u = await i.detectOverflow(t, l), d = jt(o), m = xr(o), g = Nt(o) === "y", {
        width: h,
        height: v
      } = a.floating;
      let b, y;
      d === "top" || d === "bottom" ? (b = d, y = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = d, b = m === "end" ? "top" : "bottom");
      const w = v - u.top - u.bottom, x = h - u.left - u.right, S = on(v - u[b], w), _ = on(h - u[y], x), P = !t.middlewareData.shift;
      let C = S, E = _;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = x), (r = t.middlewareData.shift) != null && r.enabled.y && (C = w), P && !m) {
        const k = rt(u.left, 0), A = rt(u.right, 0), z = rt(u.top, 0), T = rt(u.bottom, 0);
        g ? E = h - 2 * (k !== 0 || A !== 0 ? k + A : rt(u.left, u.right)) : C = v - 2 * (z !== 0 || T !== 0 ? z + T : rt(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: E,
        availableHeight: C
      });
      const R = await i.getDimensions(s.floating);
      return h !== R.width || v !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Za() {
  return typeof window < "u";
}
function Sr(e) {
  return iw(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ot(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kt(e) {
  var t;
  return (t = (iw(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function iw(e) {
  return Za() ? e instanceof Node || e instanceof ot(e).Node : !1;
}
function xt(e) {
  return Za() ? e instanceof Element || e instanceof ot(e).Element : !1;
}
function Yt(e) {
  return Za() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1;
}
function Qh(e) {
  return !Za() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot;
}
function So(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = St(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function lI(e) {
  return /^(table|td|th)$/.test(Sr(e));
}
function Ja(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const uI = /transform|translate|scale|rotate|perspective|filter/, dI = /paint|layout|strict|content/, yn = (e) => !!e && e !== "none";
let Bl;
function Vd(e) {
  const t = xt(e) ? St(e) : e;
  return yn(t.transform) || yn(t.translate) || yn(t.scale) || yn(t.rotate) || yn(t.perspective) || !Gd() && (yn(t.backdropFilter) || yn(t.filter)) || uI.test(t.willChange || "") || dI.test(t.contain || "");
}
function fI(e) {
  let t = an(e);
  for (; Yt(t) && !dr(t); ) {
    if (Vd(t))
      return t;
    if (Ja(t))
      return null;
    t = an(t);
  }
  return null;
}
function Gd() {
  return Bl == null && (Bl = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Bl;
}
function dr(e) {
  return /^(html|body|#document)$/.test(Sr(e));
}
function St(e) {
  return ot(e).getComputedStyle(e);
}
function ei(e) {
  return xt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function an(e) {
  if (Sr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Qh(e) && e.host || // Fallback.
    kt(e)
  );
  return Qh(t) ? t.host : t;
}
function sw(e) {
  const t = an(e);
  return dr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Yt(t) && So(t) ? t : sw(t);
}
function eo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = sw(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ot(o);
  if (a) {
    const s = yu(i);
    return t.concat(i, i.visualViewport || [], So(o) ? o : [], s && n ? eo(s) : []);
  } else
    return t.concat(o, eo(o, [], n));
}
function yu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function cw(e) {
  const t = St(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Yt(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = ma(n) !== a || ma(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function jd(e) {
  return xt(e) ? e : e.contextElement;
}
function rr(e) {
  const t = jd(e);
  if (!Yt(t))
    return At(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = cw(t);
  let i = (a ? ma(n.width) : n.width) / r, s = (a ? ma(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const pI = /* @__PURE__ */ At(0);
function lw(e) {
  const t = ot(e);
  return !Gd() || !t.visualViewport ? pI : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function mI(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ot(e) ? !1 : t;
}
function Nn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = jd(e);
  let i = At(1);
  t && (r ? xt(r) && (i = rr(r)) : i = rr(e));
  const s = mI(a, n, r) ? lw(a) : At(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (a) {
    const m = ot(a), g = r && xt(r) ? ot(r) : r;
    let h = m, v = yu(h);
    for (; v && r && g !== h; ) {
      const b = rr(v), y = v.getBoundingClientRect(), w = St(v), x = y.left + (v.clientLeft + parseFloat(w.paddingLeft)) * b.x, S = y.top + (v.clientTop + parseFloat(w.paddingTop)) * b.y;
      c *= b.x, l *= b.y, u *= b.x, d *= b.y, c += x, l += S, h = ot(v), v = yu(h);
    }
  }
  return ha({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function ti(e, t) {
  const n = ei(e).scrollLeft;
  return t ? t.left + n : Nn(kt(e)).left + n;
}
function uw(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ti(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function vI(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = kt(r), s = t ? Ja(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = At(1);
  const u = At(0), d = Yt(r);
  if ((d || !d && !a) && ((Sr(r) !== "body" || So(i)) && (c = ei(r)), d)) {
    const g = Nn(r);
    l = rr(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const m = i && !d && !a ? uw(i, c) : At(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + m.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + m.y
  };
}
function hI(e) {
  return Array.from(e.getClientRects());
}
function gI(e) {
  const t = kt(e), n = ei(e), r = e.ownerDocument.body, o = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + ti(e);
  const s = -n.scrollTop;
  return St(r).direction === "rtl" && (i += rt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const Zh = 25;
function bI(e, t) {
  const n = ot(e), r = kt(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = Gd();
    (!u || u && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const l = ti(r);
  if (l <= 0) {
    const u = r.ownerDocument, d = u.body, m = getComputedStyle(d), g = u.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, h = Math.abs(r.clientWidth - d.clientWidth - g);
    h <= Zh && (a -= h);
  } else l <= Zh && (a += l);
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function yI(e, t) {
  const n = Nn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Yt(e) ? rr(e) : At(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Jh(e, t, n) {
  let r;
  if (t === "viewport")
    r = bI(e, n);
  else if (t === "document")
    r = gI(kt(e));
  else if (xt(t))
    r = yI(t, n);
  else {
    const o = lw(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ha(r);
}
function dw(e, t) {
  const n = an(e);
  return n === t || !xt(n) || dr(n) ? !1 : St(n).position === "fixed" || dw(n, t);
}
function wI(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = eo(e, [], !1).filter((s) => xt(s) && Sr(s) !== "body"), o = null;
  const a = St(e).position === "fixed";
  let i = a ? an(e) : e;
  for (; xt(i) && !dr(i); ) {
    const s = St(i), c = Vd(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || So(i) && !c && dw(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = an(i);
  }
  return t.set(e, r), r;
}
function xI(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ja(t) ? [] : wI(t, this._c) : [].concat(n), r], s = Jh(t, i[0], o);
  let c = s.top, l = s.right, u = s.bottom, d = s.left;
  for (let m = 1; m < i.length; m++) {
    const g = Jh(t, i[m], o);
    c = rt(g.top, c), l = on(g.right, l), u = on(g.bottom, u), d = rt(g.left, d);
  }
  return {
    width: l - d,
    height: u - c,
    x: d,
    y: c
  };
}
function SI(e) {
  const {
    width: t,
    height: n
  } = cw(e);
  return {
    width: t,
    height: n
  };
}
function CI(e, t, n) {
  const r = Yt(t), o = kt(t), a = n === "fixed", i = Nn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = At(0);
  function l() {
    c.x = ti(o);
  }
  if (r || !r && !a)
    if ((Sr(t) !== "body" || So(o)) && (s = ei(t)), r) {
      const g = Nn(t, !0, a, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? uw(o, s) : At(0), d = i.left + s.scrollLeft - c.x - u.x, m = i.top + s.scrollTop - c.y - u.y;
  return {
    x: d,
    y: m,
    width: i.width,
    height: i.height
  };
}
function ql(e) {
  return St(e).position === "static";
}
function eg(e, t) {
  if (!Yt(e) || St(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return kt(e) === n && (n = n.ownerDocument.body), n;
}
function fw(e, t) {
  const n = ot(e);
  if (Ja(e))
    return n;
  if (!Yt(e)) {
    let o = an(e);
    for (; o && !dr(o); ) {
      if (xt(o) && !ql(o))
        return o;
      o = an(o);
    }
    return n;
  }
  let r = eg(e, t);
  for (; r && lI(r) && ql(r); )
    r = eg(r, t);
  return r && dr(r) && ql(r) && !Vd(r) ? n : r || fI(e) || n;
}
const _I = async function(e) {
  const t = this.getOffsetParent || fw, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: CI(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function PI(e) {
  return St(e).direction === "rtl";
}
const EI = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vI,
  getDocumentElement: kt,
  getClippingRect: xI,
  getOffsetParent: fw,
  getElementRects: _I,
  getClientRects: hI,
  getDimensions: SI,
  getScale: rr,
  isElement: xt,
  isRTL: PI
};
function pw(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function RI(e, t) {
  let n = null, r;
  const o = kt(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: m,
      height: g
    } = l;
    if (s || t(), !m || !g)
      return;
    const h = Yo(d), v = Yo(o.clientWidth - (u + m)), b = Yo(o.clientHeight - (d + g)), y = Yo(u), x = {
      rootMargin: -h + "px " + -v + "px " + -b + "px " + -y + "px",
      threshold: rt(0, on(1, c)) || 1
    };
    let S = !0;
    function _(P) {
      const C = P[0].intersectionRatio;
      if (C !== c) {
        if (!S)
          return i();
        C ? i(!1, C) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !pw(l, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, x);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function MI(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = jd(e), u = o || a ? [...l ? eo(l) : [], ...t ? eo(t) : []] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const d = l && s ? RI(l, n) : null;
  let m = -1, g = null;
  i && (g = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === l && g && t && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = g) == null || x.observe(t);
    })), n();
  }), l && !c && g.observe(l), t && g.observe(t));
  let h, v = c ? Nn(e) : null;
  c && b();
  function b() {
    const y = Nn(e);
    v && !pw(v, y) && n(), v = y, h = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), d == null || d(), (y = g) == null || y.disconnect(), g = null, c && cancelAnimationFrame(h);
  };
}
const TI = aI, NI = iI, AI = nI, DI = cI, OI = rI, tg = tI, II = sI, kI = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: EI,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return eI(e, t, {
    ...o,
    platform: a
  });
};
var LI = typeof document < "u", $I = function() {
}, ra = LI ? Wu : $I;
function ga(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!ga(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !ga(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function mw(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ng(e, t) {
  const n = mw(e);
  return Math.round(t * n) / n;
}
function Hl(e) {
  const t = p.useRef(e);
  return ra(() => {
    t.current = e;
  }), t;
}
function FI(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = p.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = p.useState(r);
  ga(m, r) || g(r);
  const [h, v] = p.useState(null), [b, y] = p.useState(null), w = p.useCallback((M) => {
    M !== P.current && (P.current = M, v(M));
  }, []), x = p.useCallback((M) => {
    M !== C.current && (C.current = M, y(M));
  }, []), S = a || h, _ = i || b, P = p.useRef(null), C = p.useRef(null), E = p.useRef(u), R = c != null, k = Hl(c), A = Hl(o), z = Hl(l), T = p.useCallback(() => {
    if (!P.current || !C.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: m
    };
    A.current && (M.platform = A.current), kI(P.current, C.current, M).then((j) => {
      const ne = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: z.current !== !1
      };
      H.current && !ga(E.current, ne) && (E.current = ne, Da.flushSync(() => {
        d(ne);
      }));
    });
  }, [m, t, n, A, z]);
  ra(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [l]);
  const H = p.useRef(!1);
  ra(() => (H.current = !0, () => {
    H.current = !1;
  }), []), ra(() => {
    if (S && (P.current = S), _ && (C.current = _), S && _) {
      if (k.current)
        return k.current(S, _, T);
      T();
    }
  }, [S, _, T, k, R]);
  const W = p.useMemo(() => ({
    reference: P,
    floating: C,
    setReference: w,
    setFloating: x
  }), [w, x]), B = p.useMemo(() => ({
    reference: S,
    floating: _
  }), [S, _]), L = p.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return M;
    const j = ng(B.floating, u.x), ne = ng(B.floating, u.y);
    return s ? {
      ...M,
      transform: "translate(" + j + "px, " + ne + "px)",
      ...mw(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: ne
    };
  }, [n, s, B.floating, u.x, u.y]);
  return p.useMemo(() => ({
    ...u,
    update: T,
    refs: W,
    elements: B,
    floatingStyles: L
  }), [u, T, W, B, L]);
}
const zI = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? tg({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? tg({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, BI = (e, t) => {
  const n = TI(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, qI = (e, t) => {
  const n = NI(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, HI = (e, t) => ({
  fn: II(e).fn,
  options: [e, t]
}), WI = (e, t) => {
  const n = AI(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, VI = (e, t) => {
  const n = DI(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, GI = (e, t) => {
  const n = OI(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, jI = (e, t) => {
  const n = zI(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var UI = "Arrow", vw = p.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ f(
    X.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
vw.displayName = UI;
var KI = vw, Ud = "Popper", [hw, Lt] = Pe(Ud), [YI, gw] = hw(Ud), bw = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = p.useState(null);
  return /* @__PURE__ */ f(YI, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
bw.displayName = Ud;
var yw = "PopperAnchor", ww = p.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = gw(yw, n), i = p.useRef(null), s = se(t, i);
    return p.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ f(X.div, { ...o, ref: s });
  }
);
ww.displayName = yw;
var Kd = "PopperContent", [XI, QI] = hw(Kd), xw = p.forwardRef(
  (e, t) => {
    var D, K, Q, Z, J, U;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: h,
      ...v
    } = e, b = gw(Kd, n), [y, w] = p.useState(null), x = se(t, (te) => w(te)), [S, _] = p.useState(null), P = wo(S), C = (P == null ? void 0 : P.width) ?? 0, E = (P == null ? void 0 : P.height) ?? 0, R = r + (a !== "center" ? "-" + a : ""), k = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, A = Array.isArray(l) ? l : [l], z = A.length > 0, T = {
      padding: k,
      boundary: A.filter(JI),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: z
    }, { refs: H, floatingStyles: W, placement: B, isPositioned: L, middlewareData: M } = FI({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...te) => MI(...te, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        BI({ mainAxis: o + E, alignmentAxis: i }),
        c && qI({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? HI() : void 0,
          ...T
        }),
        c && WI({ ...T }),
        VI({
          ...T,
          apply: ({ elements: te, rects: N, availableWidth: ee, availableHeight: ue }) => {
            const { width: pe, height: me } = N.reference, de = te.floating.style;
            de.setProperty("--radix-popper-available-width", `${ee}px`), de.setProperty("--radix-popper-available-height", `${ue}px`), de.setProperty("--radix-popper-anchor-width", `${pe}px`), de.setProperty("--radix-popper-anchor-height", `${me}px`);
          }
        }),
        S && jI({ element: S, padding: s }),
        ek({ arrowWidth: C, arrowHeight: E }),
        m && GI({ strategy: "referenceHidden", ...T })
      ]
    }), [j, ne] = _w(B), re = _e(h);
    Oe(() => {
      L && (re == null || re());
    }, [L, re]);
    const $ = (D = M.arrow) == null ? void 0 : D.x, O = (K = M.arrow) == null ? void 0 : K.y, V = ((Q = M.arrow) == null ? void 0 : Q.centerOffset) !== 0, [G, Y] = p.useState();
    return Oe(() => {
      y && Y(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ f(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: L ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            (Z = M.transformOrigin) == null ? void 0 : Z.x,
            (J = M.transformOrigin) == null ? void 0 : J.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((U = M.hide) == null ? void 0 : U.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          XI,
          {
            scope: n,
            placedSide: j,
            onArrowChange: _,
            arrowX: $,
            arrowY: O,
            shouldHideArrow: V,
            children: /* @__PURE__ */ f(
              X.div,
              {
                "data-side": j,
                "data-align": ne,
                ...v,
                ref: x,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
xw.displayName = Kd;
var Sw = "PopperArrow", ZI = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Cw = p.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = QI(Sw, r), i = ZI[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f(
          KI,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Cw.displayName = Sw;
function JI(e) {
  return e !== null;
}
var ek = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, y, w;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, u] = _w(n), d = { start: "0%", center: "50%", end: "100%" }[u], m = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, g = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + c / 2;
    let h = "", v = "";
    return l === "bottom" ? (h = i ? d : `${m}px`, v = `${-c}px`) : l === "top" ? (h = i ? d : `${m}px`, v = `${r.floating.height + c}px`) : l === "right" ? (h = `${-c}px`, v = i ? d : `${g}px`) : l === "left" && (h = `${r.floating.width + c}px`, v = i ? d : `${g}px`), { data: { x: h, y: v } };
  }
});
function _w(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Co = bw, Cr = ww, _o = xw, Po = Cw, Wl = "rovingFocusGroup.onEntryFocus", tk = { bubbles: !1, cancelable: !0 }, ni = "RovingFocusGroup", [wu, Pw, nk] = sn(ni), [rk, $t] = Pe(
  ni,
  [nk]
), [ok, ak] = rk(ni), Ew = p.forwardRef(
  (e, t) => /* @__PURE__ */ f(wu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(wu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(ik, { ...e, ref: t }) }) })
);
Ew.displayName = ni;
var ik = p.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, m = p.useRef(null), g = se(t, m), h = Ct(a), [v = null, b] = De({
    prop: i,
    defaultProp: s,
    onChange: c
  }), [y, w] = p.useState(!1), x = _e(l), S = Pw(n), _ = p.useRef(!1), [P, C] = p.useState(0);
  return p.useEffect(() => {
    const E = m.current;
    if (E)
      return E.addEventListener(Wl, x), () => E.removeEventListener(Wl, x);
  }, [x]), /* @__PURE__ */ f(
    ok,
    {
      scope: n,
      orientation: r,
      dir: h,
      loop: o,
      currentTabStopId: v,
      onItemFocus: p.useCallback(
        (E) => b(E),
        [b]
      ),
      onItemShiftTab: p.useCallback(() => w(!0), []),
      onFocusableItemAdd: p.useCallback(
        () => C((E) => E + 1),
        []
      ),
      onFocusableItemRemove: p.useCallback(
        () => C((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ f(
        X.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: q(e.onFocus, (E) => {
            const R = !_.current;
            if (E.target === E.currentTarget && R && !y) {
              const k = new CustomEvent(Wl, tk);
              if (E.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const A = S().filter((B) => B.focusable), z = A.find((B) => B.active), T = A.find((B) => B.id === v), W = [z, T, ...A].filter(
                  Boolean
                ).map((B) => B.ref.current);
                Tw(W, u);
              }
            }
            _.current = !1;
          }),
          onBlur: q(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), Rw = "RovingFocusGroupItem", Mw = p.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      ...i
    } = e, s = Me(), c = a || s, l = ak(Rw, n), u = l.currentTabStopId === c, d = Pw(n), { onFocusableItemAdd: m, onFocusableItemRemove: g } = l;
    return p.useEffect(() => {
      if (r)
        return m(), () => g();
    }, [r, m, g]), /* @__PURE__ */ f(
      wu.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ f(
          X.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": l.orientation,
            ...i,
            ref: t,
            onMouseDown: q(e.onMouseDown, (h) => {
              r ? l.onItemFocus(c) : h.preventDefault();
            }),
            onFocus: q(e.onFocus, () => l.onItemFocus(c)),
            onKeyDown: q(e.onKeyDown, (h) => {
              if (h.key === "Tab" && h.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const v = lk(h, l.orientation, l.dir);
              if (v !== void 0) {
                if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                h.preventDefault();
                let y = d().filter((w) => w.focusable).map((w) => w.ref.current);
                if (v === "last") y.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && y.reverse();
                  const w = y.indexOf(h.currentTarget);
                  y = l.loop ? uk(y, w + 1) : y.slice(w + 1);
                }
                setTimeout(() => Tw(y));
              }
            })
          }
        )
      }
    );
  }
);
Mw.displayName = Rw;
var sk = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ck(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function lk(e, t, n) {
  const r = ck(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return sk[r];
}
function Tw(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function uk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Eo = Ew, Ro = Mw, xu = ["Enter", " "], dk = ["ArrowDown", "PageUp", "Home"], Nw = ["ArrowUp", "PageDown", "End"], fk = [...dk, ...Nw], pk = {
  ltr: [...xu, "ArrowRight"],
  rtl: [...xu, "ArrowLeft"]
}, mk = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Mo = "Menu", [to, vk, hk] = sn(Mo), [Hn, To] = Pe(Mo, [
  hk,
  Lt,
  $t
]), ri = Lt(), Aw = $t(), [gk, Wn] = Hn(Mo), [bk, No] = Hn(Mo), Dw = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = ri(t), [c, l] = p.useState(null), u = p.useRef(!1), d = _e(a), m = Ct(o);
  return p.useEffect(() => {
    const g = () => {
      u.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, h = () => u.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), /* @__PURE__ */ f(Co, { ...s, children: /* @__PURE__ */ f(
    gk,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ f(
        bk,
        {
          scope: t,
          onClose: p.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: m,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Dw.displayName = Mo;
var yk = "MenuAnchor", Yd = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ri(n);
    return /* @__PURE__ */ f(Cr, { ...o, ...r, ref: t });
  }
);
Yd.displayName = yk;
var Xd = "MenuPortal", [wk, Ow] = Hn(Xd, {
  forceMount: void 0
}), Iw = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Wn(Xd, t);
  return /* @__PURE__ */ f(wk, { scope: t, forceMount: n, children: /* @__PURE__ */ f(Ee, { present: n || a.open, children: /* @__PURE__ */ f(kn, { asChild: !0, container: o, children: r }) }) });
};
Iw.displayName = Xd;
var ut = "MenuContent", [xk, Qd] = Hn(ut), kw = p.forwardRef(
  (e, t) => {
    const n = Ow(ut, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Wn(ut, e.__scopeMenu), i = No(ut, e.__scopeMenu);
    return /* @__PURE__ */ f(to.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(Ee, { present: r || a.open, children: /* @__PURE__ */ f(to.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ f(Sk, { ...o, ref: t }) : /* @__PURE__ */ f(Ck, { ...o, ref: t }) }) }) });
  }
), Sk = p.forwardRef(
  (e, t) => {
    const n = Wn(ut, e.__scopeMenu), r = p.useRef(null), o = se(t, r);
    return p.useEffect(() => {
      const a = r.current;
      if (a) return $a(a);
    }, []), /* @__PURE__ */ f(
      Zd,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: q(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Ck = p.forwardRef((e, t) => {
  const n = Wn(ut, e.__scopeMenu);
  return /* @__PURE__ */ f(
    Zd,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Zd = p.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: m,
      onDismiss: g,
      disableOutsideScroll: h,
      ...v
    } = e, b = Wn(ut, n), y = No(ut, n), w = ri(n), x = Aw(n), S = vk(n), [_, P] = p.useState(null), C = p.useRef(null), E = se(t, C, b.onContentChange), R = p.useRef(0), k = p.useRef(""), A = p.useRef(0), z = p.useRef(null), T = p.useRef("right"), H = p.useRef(0), W = h ? so : p.Fragment, B = h ? { as: at, allowPinchZoom: !0 } : void 0, L = (j) => {
      var D, K;
      const ne = k.current + j, re = S().filter((Q) => !Q.disabled), $ = document.activeElement, O = (D = re.find((Q) => Q.ref.current === $)) == null ? void 0 : D.textValue, V = re.map((Q) => Q.textValue), G = kk(V, ne, O), Y = (K = re.find((Q) => Q.textValue === G)) == null ? void 0 : K.ref.current;
      (function Q(Z) {
        k.current = Z, window.clearTimeout(R.current), Z !== "" && (R.current = window.setTimeout(() => Q(""), 1e3));
      })(ne), Y && setTimeout(() => Y.focus());
    };
    p.useEffect(() => () => window.clearTimeout(R.current), []), ka();
    const M = p.useCallback((j) => {
      var re, $;
      return T.current === ((re = z.current) == null ? void 0 : re.side) && $k(j, ($ = z.current) == null ? void 0 : $.area);
    }, []);
    return /* @__PURE__ */ f(
      xk,
      {
        scope: n,
        searchRef: k,
        onItemEnter: p.useCallback(
          (j) => {
            M(j) && j.preventDefault();
          },
          [M]
        ),
        onItemLeave: p.useCallback(
          (j) => {
            var ne;
            M(j) || ((ne = C.current) == null || ne.focus(), P(null));
          },
          [M]
        ),
        onTriggerLeave: p.useCallback(
          (j) => {
            M(j) && j.preventDefault();
          },
          [M]
        ),
        pointerGraceTimerRef: A,
        onPointerGraceIntentChange: p.useCallback((j) => {
          z.current = j;
        }, []),
        children: /* @__PURE__ */ f(W, { ...B, children: /* @__PURE__ */ f(
          io,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: q(a, (j) => {
              var ne;
              j.preventDefault(), (ne = C.current) == null || ne.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ f(
              cn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ f(
                  Eo,
                  {
                    asChild: !0,
                    ...x,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: q(c, (j) => {
                      y.isUsingKeyboardRef.current || j.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ f(
                      _o,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Qw(b.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...v,
                        ref: E,
                        style: { outline: "none", ...v.style },
                        onKeyDown: q(v.onKeyDown, (j) => {
                          const re = j.target.closest("[data-radix-menu-content]") === j.currentTarget, $ = j.ctrlKey || j.altKey || j.metaKey, O = j.key.length === 1;
                          re && (j.key === "Tab" && j.preventDefault(), !$ && O && L(j.key));
                          const V = C.current;
                          if (j.target !== V || !fk.includes(j.key)) return;
                          j.preventDefault();
                          const Y = S().filter((D) => !D.disabled).map((D) => D.ref.current);
                          Nw.includes(j.key) && Y.reverse(), Ok(Y);
                        }),
                        onBlur: q(e.onBlur, (j) => {
                          j.currentTarget.contains(j.target) || (window.clearTimeout(R.current), k.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          no((j) => {
                            const ne = j.target, re = H.current !== j.clientX;
                            if (j.currentTarget.contains(ne) && re) {
                              const $ = j.clientX > H.current ? "right" : "left";
                              T.current = $, H.current = j.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
kw.displayName = ut;
var _k = "MenuGroup", Jd = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(X.div, { role: "group", ...r, ref: t });
  }
);
Jd.displayName = _k;
var Pk = "MenuLabel", Lw = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(X.div, { ...r, ref: t });
  }
);
Lw.displayName = Pk;
var ba = "MenuItem", rg = "menu.itemSelect", oi = p.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = p.useRef(null), i = No(ba, e.__scopeMenu), s = Qd(ba, e.__scopeMenu), c = se(t, a), l = p.useRef(!1), u = () => {
      const d = a.current;
      if (!n && d) {
        const m = new CustomEvent(rg, { bubbles: !0, cancelable: !0 });
        d.addEventListener(rg, (g) => r == null ? void 0 : r(g), { once: !0 }), aa(d, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ f(
      $w,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: q(e.onClick, u),
        onPointerDown: (d) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, d), l.current = !0;
        },
        onPointerUp: q(e.onPointerUp, (d) => {
          var m;
          l.current || (m = d.currentTarget) == null || m.click();
        }),
        onKeyDown: q(e.onKeyDown, (d) => {
          const m = s.searchRef.current !== "";
          n || m && d.key === " " || xu.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
oi.displayName = ba;
var $w = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = Qd(ba, n), s = Aw(n), c = p.useRef(null), l = se(t, c), [u, d] = p.useState(!1), [m, g] = p.useState("");
    return p.useEffect(() => {
      const h = c.current;
      h && g((h.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ f(
      to.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ f(Ro, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ f(
          X.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: q(
              e.onPointerMove,
              no((h) => {
                r ? i.onItemLeave(h) : (i.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              no((h) => i.onItemLeave(h))
            ),
            onFocus: q(e.onFocus, () => d(!0)),
            onBlur: q(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), Ek = "MenuCheckboxItem", Fw = p.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ f(Ww, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ f(
      oi,
      {
        role: "menuitemcheckbox",
        "aria-checked": ya(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": tf(n),
        onSelect: q(
          o.onSelect,
          () => r == null ? void 0 : r(ya(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Fw.displayName = Ek;
var zw = "MenuRadioGroup", [Rk, Mk] = Hn(
  zw,
  { value: void 0, onValueChange: () => {
  } }
), Bw = p.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = _e(r);
    return /* @__PURE__ */ f(Rk, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ f(Jd, { ...o, ref: t }) });
  }
);
Bw.displayName = zw;
var qw = "MenuRadioItem", Hw = p.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Mk(qw, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ f(Ww, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ f(
      oi,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": tf(a),
        onSelect: q(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Hw.displayName = qw;
var ef = "MenuItemIndicator", [Ww, Tk] = Hn(
  ef,
  { checked: !1 }
), Vw = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = Tk(ef, n);
    return /* @__PURE__ */ f(
      Ee,
      {
        present: r || ya(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ f(
          X.span,
          {
            ...o,
            ref: t,
            "data-state": tf(a.checked)
          }
        )
      }
    );
  }
);
Vw.displayName = ef;
var Nk = "MenuSeparator", Gw = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(
      X.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Gw.displayName = Nk;
var Ak = "MenuArrow", jw = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = ri(n);
    return /* @__PURE__ */ f(Po, { ...o, ...r, ref: t });
  }
);
jw.displayName = Ak;
var Dk = "MenuSub", [XH, Uw] = Hn(Dk), qr = "MenuSubTrigger", Kw = p.forwardRef(
  (e, t) => {
    const n = Wn(qr, e.__scopeMenu), r = No(qr, e.__scopeMenu), o = Uw(qr, e.__scopeMenu), a = Qd(qr, e.__scopeMenu), i = p.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, u = p.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return p.useEffect(() => u, [u]), p.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [s, c]), /* @__PURE__ */ f(Yd, { asChild: !0, ...l, children: /* @__PURE__ */ f(
      $w,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Qw(n.open),
        ...e,
        ref: Dt(t, o.onTriggerChange),
        onClick: (d) => {
          var m;
          (m = e.onClick) == null || m.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          no((d) => {
            a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          no((d) => {
            var g, h;
            u();
            const m = (g = n.content) == null ? void 0 : g.getBoundingClientRect();
            if (m) {
              const v = (h = n.content) == null ? void 0 : h.dataset.side, b = v === "right", y = b ? -5 : 5, w = m[b ? "left" : "right"], x = m[b ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + y, y: d.clientY },
                  { x: w, y: m.top },
                  { x, y: m.top },
                  { x, y: m.bottom },
                  { x: w, y: m.bottom }
                ],
                side: v
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(d), d.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: q(e.onKeyDown, (d) => {
          var g;
          const m = a.searchRef.current !== "";
          e.disabled || m && d.key === " " || pk[r.dir].includes(d.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Kw.displayName = qr;
var Yw = "MenuSubContent", Xw = p.forwardRef(
  (e, t) => {
    const n = Ow(ut, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Wn(ut, e.__scopeMenu), i = No(ut, e.__scopeMenu), s = Uw(Yw, e.__scopeMenu), c = p.useRef(null), l = se(t, c);
    return /* @__PURE__ */ f(to.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(Ee, { present: r || a.open, children: /* @__PURE__ */ f(to.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(
      Zd,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: l,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          var d;
          i.isUsingKeyboardRef.current && ((d = c.current) == null || d.focus()), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: q(e.onFocusOutside, (u) => {
          u.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (u) => {
          i.onClose(), u.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (u) => {
          var g;
          const d = u.currentTarget.contains(u.target), m = mk[i.dir].includes(u.key);
          d && m && (a.onOpenChange(!1), (g = s.trigger) == null || g.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Xw.displayName = Yw;
function Qw(e) {
  return e ? "open" : "closed";
}
function ya(e) {
  return e === "indeterminate";
}
function tf(e) {
  return ya(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ok(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ik(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function kk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = Ik(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== n));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Lk(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function $k(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Lk(n, t);
}
function no(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var nf = Dw, rf = Yd, of = Iw, af = kw, sf = Jd, cf = Lw, lf = oi, uf = Fw, df = Bw, ff = Hw, pf = Vw, mf = Gw, vf = jw, hf = Kw, gf = Xw, bf = "ContextMenu", [Fk] = Pe(bf, [
  To
]), Ge = To(), [zk, Zw] = Fk(bf), Jw = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [i, s] = p.useState(!1), c = Ge(t), l = _e(r), u = p.useCallback(
    (d) => {
      s(d), l(d);
    },
    [l]
  );
  return /* @__PURE__ */ f(
    zk,
    {
      scope: t,
      open: i,
      onOpenChange: u,
      modal: a,
      children: /* @__PURE__ */ f(
        nf,
        {
          ...c,
          dir: o,
          open: i,
          onOpenChange: u,
          modal: a,
          children: n
        }
      )
    }
  );
};
Jw.displayName = bf;
var ex = "ContextMenuTrigger", tx = p.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Zw(ex, n), i = Ge(n), s = p.useRef({ x: 0, y: 0 }), c = p.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current })
    }), l = p.useRef(0), u = p.useCallback(
      () => window.clearTimeout(l.current),
      []
    ), d = (m) => {
      s.current = { x: m.clientX, y: m.clientY }, a.onOpenChange(!0);
    };
    return p.useEffect(() => u, [u]), p.useEffect(() => void (r && u()), [r, u]), /* @__PURE__ */ ie(Le, { children: [
      /* @__PURE__ */ f(rf, { ...i, virtualRef: c }),
      /* @__PURE__ */ f(
        X.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : q(e.onContextMenu, (m) => {
            u(), d(m), m.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : q(
            e.onPointerDown,
            Xo((m) => {
              u(), l.current = window.setTimeout(() => d(m), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : q(e.onPointerMove, Xo(u)),
          onPointerCancel: r ? e.onPointerCancel : q(e.onPointerCancel, Xo(u)),
          onPointerUp: r ? e.onPointerUp : q(e.onPointerUp, Xo(u))
        }
      )
    ] });
  }
);
tx.displayName = ex;
var Bk = "ContextMenuPortal", nx = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Ge(t);
  return /* @__PURE__ */ f(of, { ...r, ...n });
};
nx.displayName = Bk;
var rx = "ContextMenuContent", ox = p.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Zw(rx, n), a = Ge(n), i = p.useRef(!1);
    return /* @__PURE__ */ f(
      af,
      {
        ...a,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (s) => {
          var c;
          (c = e.onCloseAutoFocus) == null || c.call(e, s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
        },
        onInteractOutside: (s) => {
          var c;
          (c = e.onInteractOutside) == null || c.call(e, s), !s.defaultPrevented && !o.modal && (i.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
ox.displayName = rx;
var qk = "ContextMenuGroup", Hk = p.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
    return /* @__PURE__ */ f(sf, { ...o, ...r, ref: t });
  }
);
Hk.displayName = qk;
var Wk = "ContextMenuLabel", ax = p.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
    return /* @__PURE__ */ f(cf, { ...o, ...r, ref: t });
  }
);
ax.displayName = Wk;
var Vk = "ContextMenuItem", ix = p.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
    return /* @__PURE__ */ f(lf, { ...o, ...r, ref: t });
  }
);
ix.displayName = Vk;
var Gk = "ContextMenuCheckboxItem", jk = p.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
  return /* @__PURE__ */ f(uf, { ...o, ...r, ref: t });
});
jk.displayName = Gk;
var Uk = "ContextMenuRadioGroup", Kk = p.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
  return /* @__PURE__ */ f(df, { ...o, ...r, ref: t });
});
Kk.displayName = Uk;
var Yk = "ContextMenuRadioItem", Xk = p.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
  return /* @__PURE__ */ f(ff, { ...o, ...r, ref: t });
});
Xk.displayName = Yk;
var Qk = "ContextMenuItemIndicator", Zk = p.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
  return /* @__PURE__ */ f(pf, { ...o, ...r, ref: t });
});
Zk.displayName = Qk;
var Jk = "ContextMenuSeparator", sx = p.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
  return /* @__PURE__ */ f(mf, { ...o, ...r, ref: t });
});
sx.displayName = Jk;
var eL = "ContextMenuArrow", tL = p.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
    return /* @__PURE__ */ f(vf, { ...o, ...r, ref: t });
  }
);
tL.displayName = eL;
var nL = "ContextMenuSubTrigger", rL = p.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
  return /* @__PURE__ */ f(hf, { ...o, ...r, ref: t });
});
rL.displayName = nL;
var oL = "ContextMenuSubContent", aL = p.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ge(n);
  return /* @__PURE__ */ f(
    gf,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
aL.displayName = oL;
function Xo(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var iL = Jw, sL = tx, cL = nx, lL = ox, uL = ax, dL = ix, fL = sx;
function QH({
  ...e
}) {
  return /* @__PURE__ */ f(iL, { "data-slot": "context-menu", ...e });
}
function ZH({
  ...e
}) {
  return /* @__PURE__ */ f(sL, { "data-slot": "context-menu-trigger", ...e });
}
function JH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(cL, { children: /* @__PURE__ */ f(
    lL,
    {
      "data-slot": "context-menu-content",
      className: I(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function eW({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ f(
    dL,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: I(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function tW({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    uL,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: I(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function nW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    fL,
    {
      "data-slot": "context-menu-separator",
      className: I("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function pL(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const cx = F.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldAnimate: {
    current: !0
  },
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), Ao = () => {
  const e = F.useContext(cx);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
pL(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function mL() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function vL() {
  return yf(/^Mac/);
}
function hL() {
  return yf(/^iPhone/);
}
function og() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function gL() {
  return yf(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  vL() && navigator.maxTouchPoints > 1;
}
function lx() {
  return hL() || gL();
}
function yf(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const bL = 24, yL = typeof window < "u" ? Wu : Wt;
function ag(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Vl = typeof document < "u" && window.visualViewport;
function ig(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function ux(e) {
  for (ig(e) && (e = e.parentElement); e && !ig(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const wL = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let Qo = 0, Gl;
function xL(e = {}) {
  let { isDisabled: t } = e;
  yL(() => {
    if (!t)
      return Qo++, Qo === 1 && lx() && (Gl = SL()), () => {
        Qo--, Qo === 0 && (Gl == null || Gl());
      };
  }, [
    t
  ]);
}
function SL() {
  let e, t = 0, n = (d) => {
    e = ux(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let m = d.changedTouches[0].pageY, g = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((g <= 0 && m > t || g >= h && m < t) && d.preventDefault(), t = m);
  }, o = (d) => {
    let m = d.target;
    Su(m) && m !== document.activeElement && (d.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, a = (d) => {
    let m = d.target;
    Su(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", Vl && (Vl.height < window.innerHeight ? requestAnimationFrame(() => {
        sg(m);
      }) : Vl.addEventListener("resize", () => sg(m), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, c = window.pageYOffset, l = ag(CL(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = ag(Ir(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Ir(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Ir(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Ir(document, "focus", a, !0), Ir(window, "scroll", i));
  return () => {
    l(), u(), window.scrollTo(s, c);
  };
}
function CL(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Ir(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function sg(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = ux(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom + bL;
      a > i && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function Su(e) {
  return e instanceof HTMLInputElement && !wL.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function _L(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function PL(...e) {
  return (t) => e.forEach((n) => _L(n, t));
}
function dx(...e) {
  return p.useCallback(PL(...e), e);
}
const fx = /* @__PURE__ */ new WeakMap();
function Be(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && fx.set(e, r);
}
function EL(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = fx.get(e);
  n && (e.style[t] = n[t]);
}
const ke = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function Zo(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[ke(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[ke(t) ? 5 : 4]) : null);
}
function RL(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function jl(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function ML(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Ne = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, px = 0.4, TL = 0.25, NL = 100, mx = 8, wn = 16, Cu = 26, Ul = "vaul-dragging";
function vx(e) {
  const t = F.useRef(e);
  return F.useEffect(() => {
    t.current = e;
  }), F.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function AL({ defaultProp: e, onChange: t }) {
  const n = F.useState(e), [r] = n, o = F.useRef(r), a = vx(t);
  return F.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function hx({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = AL({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = vx(n), c = F.useCallback((l) => {
    if (a) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && s(d);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    c
  ];
}
function DL({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom", container: c, snapToSequentialPoint: l }) {
  const [u, d] = hx({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [m, g] = F.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  F.useEffect(() => {
    function C() {
      g({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []);
  const h = F.useMemo(() => u === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    u
  ]), v = F.useMemo(() => {
    var C;
    return (C = n == null ? void 0 : n.findIndex((E) => E === u)) != null ? C : null;
  }, [
    n,
    u
  ]), b = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === u || !n, y = F.useMemo(() => {
    const C = c ? {
      width: c.getBoundingClientRect().width,
      height: c.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var E;
    return (E = n == null ? void 0 : n.map((R) => {
      const k = typeof R == "string";
      let A = 0;
      if (k && (A = parseInt(R, 10)), ke(s)) {
        const T = k ? A : m ? R * C.height : 0;
        return m ? s === "bottom" ? C.height - T : -C.height + T : T;
      }
      const z = k ? A : m ? R * C.width : 0;
      return m ? s === "right" ? C.width - z : -C.width + z : z;
    })) != null ? E : [];
  }, [
    n,
    m,
    c
  ]), w = F.useMemo(() => v !== null ? y == null ? void 0 : y[v] : null, [
    y,
    v
  ]), x = F.useCallback((C) => {
    var E;
    const R = (E = y == null ? void 0 : y.findIndex((k) => k === C)) != null ? E : null;
    i(R), Be(r.current, {
      transition: `transform ${Ne.DURATION}s cubic-bezier(${Ne.EASE.join(",")})`,
      transform: ke(s) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
    }), y && R !== y.length - 1 && a !== void 0 && R !== a && R < a ? Be(o.current, {
      transition: `opacity ${Ne.DURATION}s cubic-bezier(${Ne.EASE.join(",")})`,
      opacity: "0"
    }) : Be(o.current, {
      transition: `opacity ${Ne.DURATION}s cubic-bezier(${Ne.EASE.join(",")})`,
      opacity: "1"
    }), d(n == null ? void 0 : n[Math.max(R, 0)]);
  }, [
    r.current,
    n,
    y,
    a,
    o,
    d
  ]);
  F.useEffect(() => {
    if (u || e) {
      var C;
      const E = (C = n == null ? void 0 : n.findIndex((R) => R === e || R === u)) != null ? C : -1;
      y && E !== -1 && typeof y[E] == "number" && x(y[E]);
    }
  }, [
    u,
    e,
    n,
    y,
    x
  ]);
  function S({ draggedDistance: C, closeDrawer: E, velocity: R, dismissible: k }) {
    if (a === void 0) return;
    const A = s === "bottom" || s === "right" ? (w ?? 0) - C : (w ?? 0) + C, z = v === a - 1, T = v === 0, H = C > 0;
    if (z && Be(o.current, {
      transition: `opacity ${Ne.DURATION}s cubic-bezier(${Ne.EASE.join(",")})`
    }), !l && R > 2 && !H) {
      k ? E() : x(y[0]);
      return;
    }
    if (!l && R > 2 && H && y && n) {
      x(y[n.length - 1]);
      return;
    }
    const W = y == null ? void 0 : y.reduce((L, M) => typeof L != "number" || typeof M != "number" ? L : Math.abs(M - A) < Math.abs(L - A) ? M : L), B = ke(s) ? window.innerHeight : window.innerWidth;
    if (R > px && Math.abs(C) < B * 0.4) {
      const L = H ? 1 : -1;
      if (L > 0 && h && n) {
        x(y[n.length - 1]);
        return;
      }
      if (T && L < 0 && k && E(), v === null) return;
      x(y[v + L]);
      return;
    }
    x(W);
  }
  function _({ draggedDistance: C }) {
    if (w === null) return;
    const E = s === "bottom" || s === "right" ? w - C : w + C;
    (s === "bottom" || s === "right") && E < y[y.length - 1] || (s === "top" || s === "left") && E > y[y.length - 1] || Be(r.current, {
      transform: ke(s) ? `translate3d(0, ${E}px, 0)` : `translate3d(${E}px, 0, 0)`
    });
  }
  function P(C, E) {
    if (!n || typeof v != "number" || !y || a === void 0) return null;
    const R = v === a - 1;
    if (v >= a && E)
      return 0;
    if (R && !E) return 1;
    if (!b && !R) return null;
    const A = R ? v + 1 : v - 1, z = R ? y[A] - y[A - 1] : y[A + 1] - y[A], T = C / Math.abs(z);
    return R ? 1 - T : T;
  }
  return {
    isLastSnapPoint: h,
    activeSnapPoint: u,
    shouldFade: b,
    getPercentageDragged: P,
    setActiveSnapPoint: d,
    activeSnapPointIndex: v,
    onRelease: S,
    onDrag: _,
    snapPointsOffset: y
  };
}
const OL = () => () => {
};
function IL() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = Ao(), a = F.useRef(null), i = Ng(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - Cu) / window.innerWidth;
  }
  F.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c) return;
      ML(r && !o ? jl(document.body, {
        background: "black"
      }) : OL, jl(c, {
        transformOrigin: ke(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Ne.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Ne.EASE.join(",")})`
      }));
      const l = jl(c, {
        borderRadius: `${mx}px`,
        overflow: "hidden",
        ...ke(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        l(), a.current = window.setTimeout(() => {
          i ? document.body.style.background = i : document.body.style.removeProperty("background");
        }, Ne.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    i
  ]);
}
let kr = null;
function kL({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [i, s] = F.useState(() => typeof window < "u" ? window.location.href : ""), c = F.useRef(0), l = F.useCallback(() => {
    if (og() && kr === null && e && !a) {
      kr = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: d, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-c.current}px`,
        left: `${-d}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const g = m - window.innerHeight;
        g && c.current >= m && (document.body.style.top = `${-(c.current + g)}px`);
      }), 300);
    }
  }, [
    e
  ]), u = F.useCallback(() => {
    if (og() && kr !== null && !a) {
      const d = -parseInt(document.body.style.top, 10), m = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, kr), window.requestAnimationFrame(() => {
        if (o && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(m, d);
      }), kr = null;
    }
  }, [
    i
  ]);
  return F.useEffect(() => {
    function d() {
      c.current = window.scrollY;
    }
    return d(), window.addEventListener("scroll", d), () => {
      window.removeEventListener("scroll", d);
    };
  }, []), F.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || u();
      };
  }, [
    t,
    u
  ]), F.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && l(), t || window.setTimeout(() => {
      u();
    }, 500)) : u());
  }, [
    e,
    r,
    i,
    t,
    n,
    l,
    u
  ]), {
    restorePositionSetting: u
  };
}
function LL({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: c = TL, scrollLockTimeout: l = NL, dismissible: u = !0, handleOnly: d = !1, fadeFromIndex: m = a && a.length - 1, activeSnapPoint: g, setActiveSnapPoint: h, fixed: v, modal: b = !0, onClose: y, nested: w, noBodyStyles: x = !1, direction: S = "bottom", defaultOpen: _ = !1, disablePreventScroll: P = !0, snapToSequentialPoint: C = !1, preventScrollRestoration: E = !1, repositionInputs: R = !0, onAnimationEnd: k, container: A, autoFocus: z = !1 }) {
  var T, H;
  const [W = !1, B] = hx({
    defaultProp: _,
    prop: e,
    onChange: (ce) => {
      t == null || t(ce), !ce && !w && lt(), setTimeout(() => {
        k == null || k(ce);
      }, Ne.DURATION * 1e3), ce && !b && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), ce || (document.body.style.pointerEvents = "auto");
    }
  }), [L, M] = F.useState(!1), [j, ne] = F.useState(!1), [re, $] = F.useState(!1), O = F.useRef(null), V = F.useRef(null), G = F.useRef(null), Y = F.useRef(null), D = F.useRef(null), K = F.useRef(!1), Q = F.useRef(null), Z = F.useRef(0), J = F.useRef(!1), U = F.useRef(!_), te = F.useRef(0), N = F.useRef(null), ee = F.useRef(((T = N.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), ue = F.useRef(((H = N.current) == null ? void 0 : H.getBoundingClientRect().width) || 0), pe = F.useRef(0), me = F.useCallback((ce) => {
    a && ce === Fe.length - 1 && (V.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: de, activeSnapPointIndex: ye, setActiveSnapPoint: $e, onRelease: Ie, snapPointsOffset: Fe, onDrag: Ke, shouldFade: Ye, getPercentageDragged: ct } = DL({
    snapPoints: a,
    activeSnapPointProp: g,
    setActiveSnapPointProp: h,
    drawerRef: N,
    fadeFromIndex: m,
    overlayRef: O,
    onSnapPointChange: me,
    direction: S,
    container: A,
    snapToSequentialPoint: C
  });
  xL({
    isDisabled: !W || j || !b || re || !L || !R || !P
  });
  const { restorePositionSetting: lt } = kL({
    isOpen: W,
    modal: b,
    nested: w ?? !1,
    hasBeenOpened: L,
    preventScrollRestoration: E,
    noBodyStyles: x
  });
  function zt() {
    return (window.innerWidth - Cu) / window.innerWidth;
  }
  function Xt(ce) {
    var be, Se;
    !u && !a || N.current && !N.current.contains(ce.target) || (ee.current = ((be = N.current) == null ? void 0 : be.getBoundingClientRect().height) || 0, ue.current = ((Se = N.current) == null ? void 0 : Se.getBoundingClientRect().width) || 0, ne(!0), G.current = /* @__PURE__ */ new Date(), lx() && window.addEventListener("touchend", () => K.current = !1, {
      once: !0
    }), ce.target.setPointerCapture(ce.pointerId), Z.current = ke(S) ? ce.pageY : ce.pageX);
  }
  function pt(ce, be) {
    var Se;
    let he = ce;
    const Te = (Se = window.getSelection()) == null ? void 0 : Se.toString(), He = N.current ? Zo(N.current, S) : null, qe = /* @__PURE__ */ new Date();
    if (he.tagName === "SELECT" || he.hasAttribute("data-vaul-no-drag") || he.closest("[data-vaul-no-drag]"))
      return !1;
    if (S === "right" || S === "left")
      return !0;
    if (V.current && qe.getTime() - V.current.getTime() < 500)
      return !1;
    if (He !== null && (S === "bottom" ? He > 0 : He < 0))
      return !0;
    if (Te && Te.length > 0)
      return !1;
    if (D.current && qe.getTime() - D.current.getTime() < l && He === 0 || be)
      return D.current = qe, !1;
    for (; he; ) {
      if (he.scrollHeight > he.clientHeight) {
        if (he.scrollTop !== 0)
          return D.current = /* @__PURE__ */ new Date(), !1;
        if (he.getAttribute("role") === "dialog")
          return !0;
      }
      he = he.parentNode;
    }
    return !0;
  }
  function vn(ce) {
    if (N.current && j) {
      const be = S === "bottom" || S === "right" ? 1 : -1, Se = (Z.current - (ke(S) ? ce.pageY : ce.pageX)) * be, he = Se > 0, Te = a && !u && !he;
      if (Te && ye === 0) return;
      const He = Math.abs(Se), qe = document.querySelector("[data-vaul-drawer-wrapper]"), vt = S === "bottom" || S === "top" ? ee.current : ue.current;
      let tt = He / vt;
      const gn = ct(He, he);
      if (gn !== null && (tt = gn), Te && tt >= 1 || !K.current && !pt(ce.target, he)) return;
      if (N.current.classList.add(Ul), K.current = !0, Be(N.current, {
        transition: "none"
      }), Be(O.current, {
        transition: "none"
      }), a && Ke({
        draggedDistance: Se
      }), he && !a) {
        const Et = RL(Se), Lo = Math.min(Et * -1, 0) * be;
        Be(N.current, {
          transform: ke(S) ? `translate3d(0, ${Lo}px, 0)` : `translate3d(${Lo}px, 0, 0)`
        });
        return;
      }
      const Qt = 1 - tt;
      if ((Ye || m && ye === m - 1) && (r == null || r(ce, tt), Be(O.current, {
        opacity: `${Qt}`,
        transition: "none"
      }, !0)), qe && O.current && i) {
        const Et = Math.min(zt() + tt * (1 - zt()), 1), Lo = 8 - tt * 8, ep = Math.max(0, 14 - tt * 14);
        Be(qe, {
          borderRadius: `${Lo}px`,
          transform: ke(S) ? `scale(${Et}) translate3d(0, ${ep}px, 0)` : `scale(${Et}) translate3d(${ep}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const Et = He * be;
        Be(N.current, {
          transform: ke(S) ? `translate3d(0, ${Et}px, 0)` : `translate3d(${Et}px, 0, 0)`
        });
      }
    }
  }
  F.useEffect(() => {
    window.requestAnimationFrame(() => {
      U.current = !0;
    });
  }, []), F.useEffect(() => {
    var ce;
    function be() {
      if (!N.current || !R) return;
      const Se = document.activeElement;
      if (Su(Se) || J.current) {
        var he;
        const Te = ((he = window.visualViewport) == null ? void 0 : he.height) || 0, He = window.innerHeight;
        let qe = He - Te;
        const vt = N.current.getBoundingClientRect().height || 0, tt = vt > He * 0.8;
        pe.current || (pe.current = vt);
        const gn = N.current.getBoundingClientRect().top;
        if (Math.abs(te.current - qe) > 60 && (J.current = !J.current), a && a.length > 0 && Fe && ye) {
          const Qt = Fe[ye] || 0;
          qe += Qt;
        }
        if (te.current = qe, vt > Te || J.current) {
          const Qt = N.current.getBoundingClientRect().height;
          let Et = Qt;
          Qt > Te && (Et = Te - (tt ? gn : Cu)), v ? N.current.style.height = `${Qt - Math.max(qe, 0)}px` : N.current.style.height = `${Math.max(Et, Te - gn)}px`;
        } else mL() || (N.current.style.height = `${pe.current}px`);
        a && a.length > 0 && !J.current ? N.current.style.bottom = "0px" : N.current.style.bottom = `${Math.max(qe, 0)}px`;
      }
    }
    return (ce = window.visualViewport) == null || ce.addEventListener("resize", be), () => {
      var Se;
      return (Se = window.visualViewport) == null ? void 0 : Se.removeEventListener("resize", be);
    };
  }, [
    ye,
    a,
    Fe
  ]);
  function mt(ce) {
    hn(), y == null || y(), ce || B(!1), setTimeout(() => {
      a && $e(a[0]);
    }, Ne.DURATION * 1e3);
  }
  function We() {
    if (!N.current) return;
    const ce = document.querySelector("[data-vaul-drawer-wrapper]"), be = Zo(N.current, S);
    Be(N.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ne.DURATION}s cubic-bezier(${Ne.EASE.join(",")})`
    }), Be(O.current, {
      transition: `opacity ${Ne.DURATION}s cubic-bezier(${Ne.EASE.join(",")})`,
      opacity: "1"
    }), i && be && be > 0 && W && Be(ce, {
      borderRadius: `${mx}px`,
      overflow: "hidden",
      ...ke(S) ? {
        transform: `scale(${zt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${zt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Ne.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Ne.EASE.join(",")})`
    }, !0);
  }
  function hn() {
    !j || !N.current || (N.current.classList.remove(Ul), K.current = !1, ne(!1), Y.current = /* @__PURE__ */ new Date());
  }
  function Mr(ce) {
    if (!j || !N.current) return;
    N.current.classList.remove(Ul), K.current = !1, ne(!1), Y.current = /* @__PURE__ */ new Date();
    const be = Zo(N.current, S);
    if (!ce || !pt(ce.target, !1) || !be || Number.isNaN(be) || G.current === null) return;
    const Se = Y.current.getTime() - G.current.getTime(), he = Z.current - (ke(S) ? ce.pageY : ce.pageX), Te = Math.abs(he) / Se;
    if (Te > 0.05 && ($(!0), setTimeout(() => {
      $(!1);
    }, 200)), a) {
      Ie({
        draggedDistance: he * (S === "bottom" || S === "right" ? 1 : -1),
        closeDrawer: mt,
        velocity: Te,
        dismissible: u
      }), o == null || o(ce, !0);
      return;
    }
    if (S === "bottom" || S === "right" ? he > 0 : he < 0) {
      We(), o == null || o(ce, !0);
      return;
    }
    if (Te > px) {
      mt(), o == null || o(ce, !1);
      return;
    }
    var He;
    const qe = Math.min((He = N.current.getBoundingClientRect().height) != null ? He : 0, window.innerHeight);
    var vt;
    const tt = Math.min((vt = N.current.getBoundingClientRect().width) != null ? vt : 0, window.innerWidth), gn = S === "left" || S === "right";
    if (Math.abs(be) >= (gn ? tt : qe) * c) {
      mt(), o == null || o(ce, !1);
      return;
    }
    o == null || o(ce, !0), We();
  }
  F.useEffect(() => (W && (Be(document.documentElement, {
    scrollBehavior: "auto"
  }), V.current = /* @__PURE__ */ new Date()), () => {
    EL(document.documentElement, "scrollBehavior");
  }), [
    W
  ]);
  function _i(ce) {
    const be = ce ? (window.innerWidth - wn) / window.innerWidth : 1, Se = ce ? -wn : 0;
    Q.current && window.clearTimeout(Q.current), Be(N.current, {
      transition: `transform ${Ne.DURATION}s cubic-bezier(${Ne.EASE.join(",")})`,
      transform: ke(S) ? `scale(${be}) translate3d(0, ${Se}px, 0)` : `scale(${be}) translate3d(${Se}px, 0, 0)`
    }), !ce && N.current && (Q.current = setTimeout(() => {
      const he = Zo(N.current, S);
      Be(N.current, {
        transition: "none",
        transform: ke(S) ? `translate3d(0, ${he}px, 0)` : `translate3d(${he}px, 0, 0)`
      });
    }, 500));
  }
  function Pi(ce, be) {
    if (be < 0) return;
    const Se = (window.innerWidth - wn) / window.innerWidth, he = Se + be * (1 - Se), Te = -wn + be * wn;
    Be(N.current, {
      transform: ke(S) ? `scale(${he}) translate3d(0, ${Te}px, 0)` : `scale(${he}) translate3d(${Te}px, 0, 0)`,
      transition: "none"
    });
  }
  function Ei(ce, be) {
    const Se = ke(S) ? window.innerHeight : window.innerWidth, he = be ? (Se - wn) / Se : 1, Te = be ? -wn : 0;
    be && Be(N.current, {
      transition: `transform ${Ne.DURATION}s cubic-bezier(${Ne.EASE.join(",")})`,
      transform: ke(S) ? `scale(${he}) translate3d(0, ${Te}px, 0)` : `scale(${he}) translate3d(${Te}px, 0, 0)`
    });
  }
  return F.useEffect(() => {
    b || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    b
  ]), /* @__PURE__ */ F.createElement(co, {
    defaultOpen: _,
    onOpenChange: (ce) => {
      !u && !ce || (ce ? M(!0) : mt(!0), B(ce));
    },
    open: W
  }, /* @__PURE__ */ F.createElement(cx.Provider, {
    value: {
      activeSnapPoint: de,
      snapPoints: a,
      setActiveSnapPoint: $e,
      drawerRef: N,
      overlayRef: O,
      onOpenChange: t,
      onPress: Xt,
      onRelease: Mr,
      onDrag: vn,
      dismissible: u,
      shouldAnimate: U,
      handleOnly: d,
      isOpen: W,
      isDragging: j,
      shouldFade: Ye,
      closeDrawer: mt,
      onNestedDrag: Pi,
      onNestedOpenChange: _i,
      onNestedRelease: Ei,
      keyboardIsOpen: J,
      modal: b,
      snapPointsOffset: Fe,
      activeSnapPointIndex: ye,
      direction: S,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: x,
      container: A,
      autoFocus: z
    }
  }, n));
}
const gx = /* @__PURE__ */ F.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: i, modal: s, shouldAnimate: c } = Ao(), l = dx(t, n), u = r && r.length > 0;
  if (!s)
    return null;
  const d = F.useCallback((m) => o(m), [
    o
  ]);
  return /* @__PURE__ */ F.createElement(uo, {
    onMouseUp: d,
    ref: l,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && u ? "true" : "false",
    "data-vaul-snap-points-overlay": i && a ? "true" : "false",
    "data-vaul-animate": c != null && c.current ? "true" : "false",
    ...e
  });
});
gx.displayName = "Drawer.Overlay";
const bx = /* @__PURE__ */ F.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: i, onRelease: s, onDrag: c, keyboardIsOpen: l, snapPointsOffset: u, activeSnapPointIndex: d, modal: m, isOpen: g, direction: h, snapPoints: v, container: b, handleOnly: y, shouldAnimate: w, autoFocus: x } = Ao(), [S, _] = F.useState(!1), P = dx(o, a), C = F.useRef(null), E = F.useRef(null), R = F.useRef(!1), k = v && v.length > 0;
  IL();
  const A = (T, H, W = 0) => {
    if (R.current) return !0;
    const B = Math.abs(T.y), L = Math.abs(T.x), M = L > B, j = [
      "bottom",
      "right"
    ].includes(H) ? 1 : -1;
    if (H === "left" || H === "right") {
      if (!(T.x * j < 0) && L >= 0 && L <= W)
        return M;
    } else if (!(T.y * j < 0) && B >= 0 && B <= W)
      return !M;
    return R.current = !0, !0;
  };
  F.useEffect(() => {
    k && window.requestAnimationFrame(() => {
      _(!0);
    });
  }, []);
  function z(T) {
    C.current = null, R.current = !1, s(T);
  }
  return /* @__PURE__ */ F.createElement(fo, {
    "data-vaul-drawer-direction": h,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": S ? "true" : "false",
    "data-vaul-snap-points": g && k ? "true" : "false",
    "data-vaul-custom-container": b ? "true" : "false",
    "data-vaul-animate": w != null && w.current ? "true" : "false",
    ...r,
    ref: P,
    style: u && u.length > 0 ? {
      "--snap-point-height": `${u[d ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      y || (r.onPointerDown == null || r.onPointerDown.call(r, T), C.current = {
        x: T.pageX,
        y: T.pageY
      }, i(T));
    },
    onOpenAutoFocus: (T) => {
      n == null || n(T), x || T.preventDefault();
    },
    onPointerDownOutside: (T) => {
      if (e == null || e(T), !m || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      l.current && (l.current = !1);
    },
    onFocusOutside: (T) => {
      if (!m) {
        T.preventDefault();
        return;
      }
    },
    onPointerMove: (T) => {
      if (E.current = T, y || (r.onPointerMove == null || r.onPointerMove.call(r, T), !C.current)) return;
      const H = T.pageY - C.current.y, W = T.pageX - C.current.x, B = T.pointerType === "touch" ? 10 : 2;
      A({
        x: W,
        y: H
      }, h, B) ? c(T) : (Math.abs(W) > B || Math.abs(H) > B) && (C.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), C.current = null, R.current = !1, s(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), z(E.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), E.current && z(E.current);
    }
  });
});
bx.displayName = "Drawer.Content";
const $L = 250, FL = 120, zL = /* @__PURE__ */ F.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: c, dismissible: l, handleOnly: u, isOpen: d, onPress: m, onDrag: g } = Ao(), h = F.useRef(null), v = F.useRef(!1);
  function b() {
    if (v.current) {
      x();
      return;
    }
    window.setTimeout(() => {
      y();
    }, FL);
  }
  function y() {
    if (a || e || v.current) {
      x();
      return;
    }
    if (x(), !i || i.length === 0) {
      l || o();
      return;
    }
    if (s === i[i.length - 1] && l) {
      o();
      return;
    }
    const _ = i.findIndex((C) => C === s);
    if (_ === -1) return;
    const P = i[_ + 1];
    c(P);
  }
  function w() {
    h.current = window.setTimeout(() => {
      v.current = !0;
    }, $L);
  }
  function x() {
    h.current && window.clearTimeout(h.current), v.current = !1;
  }
  return /* @__PURE__ */ F.createElement("div", {
    onClick: b,
    onPointerCancel: x,
    onPointerDown: (S) => {
      u && m(S), w();
    },
    onPointerMove: (S) => {
      u && g(S);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": d ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ F.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
zL.displayName = "Drawer.Handle";
function BL(e) {
  const t = Ao(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ F.createElement(lo, {
    container: n,
    ...r
  });
}
const dn = {
  Root: LL,
  Content: bx,
  Overlay: gx,
  Trigger: Fa,
  Portal: BL,
  Close: Ln,
  Title: za,
  Description: Ba
};
function rW({
  ...e
}) {
  return /* @__PURE__ */ f(dn.Root, { "data-slot": "drawer", ...e });
}
function oW({
  ...e
}) {
  return /* @__PURE__ */ f(dn.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function qL({
  ...e
}) {
  return /* @__PURE__ */ f(dn.Portal, { "data-slot": "drawer-portal", ...e });
}
function aW({
  ...e
}) {
  return /* @__PURE__ */ f(dn.Close, { "data-slot": "drawer-close", ...e });
}
function HL({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    dn.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: I(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function iW({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ ie(qL, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ f(HL, {}),
    /* @__PURE__ */ ie(
      dn.Content,
      {
        "data-slot": "drawer-content",
        className: I(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...n,
        children: [
          /* @__PURE__ */ f("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function sW({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "drawer-header",
      className: I("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function cW({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "drawer-footer",
      className: I("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function lW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    dn.Title,
    {
      "data-slot": "drawer-title",
      className: I("text-foreground font-semibold", e),
      ...t
    }
  );
}
function uW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    dn.Description,
    {
      "data-slot": "drawer-description",
      className: I("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
var wf = "DropdownMenu", [WL] = Pe(
  wf,
  [To]
), je = To(), [VL, yx] = WL(wf), wx = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = je(t), l = p.useRef(null), [u = !1, d] = De({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ f(
    VL,
    {
      scope: t,
      triggerId: Me(),
      triggerRef: l,
      contentId: Me(),
      open: u,
      onOpenChange: d,
      onOpenToggle: p.useCallback(() => d((m) => !m), [d]),
      modal: s,
      children: /* @__PURE__ */ f(nf, { ...c, open: u, onOpenChange: d, dir: r, modal: s, children: n })
    }
  );
};
wx.displayName = wf;
var xx = "DropdownMenuTrigger", Sx = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = yx(xx, n), i = je(n);
    return /* @__PURE__ */ f(rf, { asChild: !0, ...i, children: /* @__PURE__ */ f(
      X.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Dt(t, a.triggerRef),
        onPointerDown: q(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: q(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Sx.displayName = xx;
var GL = "DropdownMenuPortal", Cx = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = je(t);
  return /* @__PURE__ */ f(of, { ...r, ...n });
};
Cx.displayName = GL;
var _x = "DropdownMenuContent", Px = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = yx(_x, n), a = je(n), i = p.useRef(!1);
    return /* @__PURE__ */ f(
      af,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (s) => {
          var c;
          i.current || (c = o.triggerRef.current) == null || c.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
          (!o.modal || u) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Px.displayName = _x;
var jL = "DropdownMenuGroup", UL = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
    return /* @__PURE__ */ f(sf, { ...o, ...r, ref: t });
  }
);
UL.displayName = jL;
var KL = "DropdownMenuLabel", Ex = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
    return /* @__PURE__ */ f(cf, { ...o, ...r, ref: t });
  }
);
Ex.displayName = KL;
var YL = "DropdownMenuItem", Rx = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
    return /* @__PURE__ */ f(lf, { ...o, ...r, ref: t });
  }
);
Rx.displayName = YL;
var XL = "DropdownMenuCheckboxItem", QL = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ f(uf, { ...o, ...r, ref: t });
});
QL.displayName = XL;
var ZL = "DropdownMenuRadioGroup", JL = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ f(df, { ...o, ...r, ref: t });
});
JL.displayName = ZL;
var e$ = "DropdownMenuRadioItem", t$ = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ f(ff, { ...o, ...r, ref: t });
});
t$.displayName = e$;
var n$ = "DropdownMenuItemIndicator", r$ = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ f(pf, { ...o, ...r, ref: t });
});
r$.displayName = n$;
var o$ = "DropdownMenuSeparator", Mx = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ f(mf, { ...o, ...r, ref: t });
});
Mx.displayName = o$;
var a$ = "DropdownMenuArrow", i$ = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
    return /* @__PURE__ */ f(vf, { ...o, ...r, ref: t });
  }
);
i$.displayName = a$;
var s$ = "DropdownMenuSubTrigger", c$ = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ f(hf, { ...o, ...r, ref: t });
});
c$.displayName = s$;
var l$ = "DropdownMenuSubContent", u$ = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = je(n);
  return /* @__PURE__ */ f(
    gf,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
u$.displayName = l$;
var d$ = wx, f$ = Sx, p$ = Cx, m$ = Px, v$ = Ex, h$ = Rx, g$ = Mx;
function dW({
  ...e
}) {
  return /* @__PURE__ */ f(d$, { "data-slot": "dropdown-menu", ...e });
}
function fW({
  ...e
}) {
  return /* @__PURE__ */ f(
    f$,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function pW({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ f(p$, { children: /* @__PURE__ */ f(
    m$,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: I(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function mW({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ f(
    h$,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: I(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function vW({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    v$,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: I(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function hW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    g$,
    {
      "data-slot": "dropdown-menu-separator",
      className: I("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
var b$ = (e) => e.type === "checkbox", y$ = (e) => e instanceof Date, Tx = (e) => e == null;
const w$ = (e) => typeof e == "object";
var Do = (e) => !Tx(e) && !Array.isArray(e) && w$(e) && !y$(e), x$ = (e) => Do(e) && e.target ? b$(e.target) ? e.target.checked : e.target.value : e, S$ = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, C$ = (e, t) => e.has(S$(t)), _$ = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Do(t) && t.hasOwnProperty("isPrototypeOf");
}, P$ = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Nx(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(P$ && (e instanceof Blob || r)) && (n || Do(e)))
    if (t = n ? [] : {}, !n && !_$(e))
      t = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (t[o] = Nx(e[o]));
  else
    return e;
  return t;
}
var Ax = (e) => Array.isArray(e) ? e.filter(Boolean) : [], _u = (e) => e === void 0, Qe = (e, t, n) => {
  if (!t || !Do(e))
    return n;
  const r = Ax(t.split(/[,[\].]+?/)).reduce((o, a) => Tx(o) ? o : o[a], e);
  return _u(r) || r === e ? _u(e[t]) ? n : e[t] : r;
}, Kl = (e) => typeof e == "boolean", E$ = (e) => /^\w*$/.test(e), R$ = (e) => Ax(e.replace(/["|']|\]/g, "").split(/\.|\[/)), cg = (e, t, n) => {
  let r = -1;
  const o = E$(t) ? [t] : R$(t), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let c = n;
    if (r !== i) {
      const l = e[s];
      c = Do(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = c, e = e[s];
  }
};
const lg = {
  BLUR: "blur",
  CHANGE: "change"
}, ug = {
  all: "all"
}, Dx = F.createContext(null), ai = () => F.useContext(Dx), M$ = (e) => {
  const { children: t, ...n } = e;
  return F.createElement(Dx.Provider, { value: n }, t);
};
var T$ = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== ug.all && (t._proxyFormState[i] = !r || ug.all), n && (n[i] = !0), e[i];
      }
    });
  return o;
};
function Ox(e) {
  const t = ai(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = F.useState(n._formState), c = F.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), l = F.useRef(o);
  return l.current = o, F.useEffect(() => n._subscribe({
    name: l.current,
    formState: c.current,
    exact: a,
    callback: (u) => {
      !r && s({
        ...n._formState,
        ...u
      });
    }
  }), [n, r, a]), F.useEffect(() => {
    c.current.isValid && n._setValid(!0);
  }, [n]), F.useMemo(() => T$(i, n, c.current, !1), [i, n]);
}
var N$ = (e) => typeof e == "string", A$ = (e, t, n, r, o) => N$(e) ? Qe(n, e, o) : Array.isArray(e) ? e.map((a) => Qe(n, a)) : n;
function D$(e) {
  const t = ai(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: i } = e || {}, s = F.useRef(r), c = F.useRef(o);
  s.current = r, F.useEffect(() => n._subscribe({
    name: s.current,
    formState: {
      values: !0
    },
    exact: i,
    callback: (d) => !a && u(A$(s.current, n._names, d.values || n._formValues, !1, c.current))
  }), [n, a, i]);
  const [l, u] = F.useState(n._getWatch(r, o));
  return F.useEffect(() => n._removeUnmounted()), l;
}
function O$(e) {
  const t = ai(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, i = C$(o._names.array, n), s = D$({
    control: o,
    name: n,
    defaultValue: Qe(o._formValues, n, Qe(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = Ox({
    control: o,
    name: n,
    exact: !0
  }), l = F.useRef(e), u = F.useRef(o.register(n, {
    ...e.rules,
    value: s,
    ...Kl(e.disabled) ? { disabled: e.disabled } : {}
  })), d = F.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Qe(c.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Qe(c.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Qe(c.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Qe(c.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => Qe(c.errors, n)
    }
  }), [c, n]), m = F.useCallback((b) => u.current.onChange({
    target: {
      value: x$(b),
      name: n
    },
    type: lg.CHANGE
  }), [n]), g = F.useCallback(() => u.current.onBlur({
    target: {
      value: Qe(o._formValues, n),
      name: n
    },
    type: lg.BLUR
  }), [n, o._formValues]), h = F.useCallback((b) => {
    const y = Qe(o._fields, n);
    y && b && (y._f.ref = {
      focus: () => b.focus(),
      select: () => b.select(),
      setCustomValidity: (w) => b.setCustomValidity(w),
      reportValidity: () => b.reportValidity()
    });
  }, [o._fields, n]), v = F.useMemo(() => ({
    name: n,
    value: s,
    ...Kl(r) || c.disabled ? { disabled: c.disabled || r } : {},
    onChange: m,
    onBlur: g,
    ref: h
  }), [n, r, c.disabled, m, g, h, s]);
  return F.useEffect(() => {
    const b = o._options.shouldUnregister || a;
    o.register(n, {
      ...l.current.rules,
      ...Kl(l.current.disabled) ? { disabled: l.current.disabled } : {}
    });
    const y = (w, x) => {
      const S = Qe(o._fields, w);
      S && S._f && (S._f.mount = x);
    };
    if (y(n, !0), b) {
      const w = Nx(Qe(o._options.defaultValues, n));
      cg(o._defaultValues, n, w), _u(Qe(o._formValues, n)) && cg(o._formValues, n, w);
    }
    return !i && o.register(n), () => {
      (i ? b && !o._state.action : b) ? o.unregister(n) : y(n, !1);
    };
  }, [n, o, i, a]), F.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: n
    });
  }, [r, n, o]), F.useMemo(() => ({
    field: v,
    formState: c,
    fieldState: d
  }), [v, c, d]);
}
const I$ = (e) => e.render(O$(e));
var k$ = "Label", Ix = p.forwardRef((e, t) => /* @__PURE__ */ f(
  X.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ix.displayName = k$;
var L$ = Ix;
function $$({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    L$,
    {
      "data-slot": "label",
      className: I(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const gW = M$, kx = p.createContext(
  {}
), bW = ({
  ...e
}) => /* @__PURE__ */ f(kx.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f(I$, { ...e }) }), ii = () => {
  const e = p.useContext(kx), t = p.useContext(Lx), { getFieldState: n } = ai(), r = Ox({ name: e.name }), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, Lx = p.createContext(
  {}
);
function yW({ className: e, ...t }) {
  const n = p.useId();
  return /* @__PURE__ */ f(Lx.Provider, { value: { id: n }, children: /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "form-item",
      className: I("grid gap-2", e),
      ...t
    }
  ) });
}
function wW({
  className: e,
  ...t
}) {
  const { error: n, formItemId: r } = ii();
  return /* @__PURE__ */ f(
    $$,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      className: I("data-[error=true]:text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
}
function xW({ ...e }) {
  const { error: t, formItemId: n, formDescriptionId: r, formMessageId: o } = ii();
  return /* @__PURE__ */ f(
    at,
    {
      "data-slot": "form-control",
      id: n,
      "aria-describedby": t ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function SW({ className: e, ...t }) {
  const { formDescriptionId: n } = ii();
  return /* @__PURE__ */ f(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: I("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function CW({ className: e, ...t }) {
  const { error: n, formMessageId: r } = ii(), o = n ? String((n == null ? void 0 : n.message) ?? "") : t.children;
  return o ? /* @__PURE__ */ f(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: I("text-destructive text-sm", e),
      ...t,
      children: o
    }
  ) : null;
}
var Yl, xf = "HoverCard", [$x] = Pe(xf, [
  Lt
]), si = Lt(), [F$, ci] = $x(xf), Fx = (e) => {
  const {
    __scopeHoverCard: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    openDelay: i = 700,
    closeDelay: s = 300
  } = e, c = si(t), l = p.useRef(0), u = p.useRef(0), d = p.useRef(!1), m = p.useRef(!1), [g = !1, h] = De({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = p.useCallback(() => {
    clearTimeout(u.current), l.current = window.setTimeout(() => h(!0), i);
  }, [i, h]), b = p.useCallback(() => {
    clearTimeout(l.current), !d.current && !m.current && (u.current = window.setTimeout(() => h(!1), s));
  }, [s, h]), y = p.useCallback(() => h(!1), [h]);
  return p.useEffect(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ f(
    F$,
    {
      scope: t,
      open: g,
      onOpenChange: h,
      onOpen: v,
      onClose: b,
      onDismiss: y,
      hasSelectionRef: d,
      isPointerDownOnContentRef: m,
      children: /* @__PURE__ */ f(Co, { ...c, children: n })
    }
  );
};
Fx.displayName = xf;
var zx = "HoverCardTrigger", Bx = p.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = ci(zx, n), a = si(n);
    return /* @__PURE__ */ f(Cr, { asChild: !0, ...a, children: /* @__PURE__ */ f(
      X.a,
      {
        "data-state": o.open ? "open" : "closed",
        ...r,
        ref: t,
        onPointerEnter: q(e.onPointerEnter, xa(o.onOpen)),
        onPointerLeave: q(e.onPointerLeave, xa(o.onClose)),
        onFocus: q(e.onFocus, o.onOpen),
        onBlur: q(e.onBlur, o.onClose),
        onTouchStart: q(e.onTouchStart, (i) => i.preventDefault())
      }
    ) });
  }
);
Bx.displayName = zx;
var Sf = "HoverCardPortal", [z$, B$] = $x(Sf, {
  forceMount: void 0
}), qx = (e) => {
  const { __scopeHoverCard: t, forceMount: n, children: r, container: o } = e, a = ci(Sf, t);
  return /* @__PURE__ */ f(z$, { scope: t, forceMount: n, children: /* @__PURE__ */ f(Ee, { present: n || a.open, children: /* @__PURE__ */ f(kn, { asChild: !0, container: o, children: r }) }) });
};
qx.displayName = Sf;
var wa = "HoverCardContent", Hx = p.forwardRef(
  (e, t) => {
    const n = B$(wa, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = ci(wa, e.__scopeHoverCard);
    return /* @__PURE__ */ f(Ee, { present: r || a.open, children: /* @__PURE__ */ f(
      q$,
      {
        "data-state": a.open ? "open" : "closed",
        ...o,
        onPointerEnter: q(e.onPointerEnter, xa(a.onOpen)),
        onPointerLeave: q(e.onPointerLeave, xa(a.onClose)),
        ref: t
      }
    ) });
  }
);
Hx.displayName = wa;
var q$ = p.forwardRef((e, t) => {
  const {
    __scopeHoverCard: n,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: a,
    onInteractOutside: i,
    ...s
  } = e, c = ci(wa, n), l = si(n), u = p.useRef(null), d = se(t, u), [m, g] = p.useState(!1);
  return p.useEffect(() => {
    if (m) {
      const h = document.body;
      return Yl = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = Yl, h.style.webkitUserSelect = Yl;
      };
    }
  }, [m]), p.useEffect(() => {
    if (u.current) {
      const h = () => {
        g(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var b;
          ((b = document.getSelection()) == null ? void 0 : b.toString()) !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", h), () => {
        document.removeEventListener("pointerup", h), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [c.isPointerDownOnContentRef, c.hasSelectionRef]), p.useEffect(() => {
    u.current && V$(u.current).forEach((v) => v.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ f(
    cn,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: i,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: q(a, (h) => {
        h.preventDefault();
      }),
      onDismiss: c.onDismiss,
      children: /* @__PURE__ */ f(
        _o,
        {
          ...l,
          ...s,
          onPointerDown: q(s.onPointerDown, (h) => {
            h.currentTarget.contains(h.target) && g(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
          }),
          ref: d,
          style: {
            ...s.style,
            userSelect: m ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: m ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), H$ = "HoverCardArrow", W$ = p.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = si(n);
    return /* @__PURE__ */ f(Po, { ...o, ...r, ref: t });
  }
);
W$.displayName = H$;
function xa(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function V$(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var G$ = Fx, j$ = Bx, U$ = qx, K$ = Hx;
function _W({
  ...e
}) {
  return /* @__PURE__ */ f(G$, { "data-slot": "hover-card", ...e });
}
function PW({
  ...e
}) {
  return /* @__PURE__ */ f(j$, { "data-slot": "hover-card-trigger", ...e });
}
function EW({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ f(U$, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ f(
    K$,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: n,
      className: I(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
var Y$ = Object.defineProperty, X$ = Object.defineProperties, Q$ = Object.getOwnPropertyDescriptors, Sa = Object.getOwnPropertySymbols, Wx = Object.prototype.hasOwnProperty, Vx = Object.prototype.propertyIsEnumerable, dg = (e, t, n) => t in e ? Y$(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Z$ = (e, t) => {
  for (var n in t || (t = {})) Wx.call(t, n) && dg(e, n, t[n]);
  if (Sa) for (var n of Sa(t)) Vx.call(t, n) && dg(e, n, t[n]);
  return e;
}, J$ = (e, t) => X$(e, Q$(t)), eF = (e, t) => {
  var n = {};
  for (var r in e) Wx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Sa) for (var r of Sa(e)) t.indexOf(r) < 0 && Vx.call(e, r) && (n[r] = e[r]);
  return n;
};
function tF(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function nF(e) {
  let t = p.useRef();
  return p.useEffect(() => {
    t.current = e;
  }), t.current;
}
var rF = 18, Gx = 40, oF = `${Gx}px`, aF = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function iF({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [o, a] = p.useState(!1), [i, s] = p.useState(!1), [c, l] = p.useState(!1), u = p.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && o && i, [o, i, n]), d = p.useCallback(() => {
    let m = e.current, g = t.current;
    if (!m || !g || c || n === "none") return;
    let h = m, v = h.getBoundingClientRect().left + h.offsetWidth, b = h.getBoundingClientRect().top + h.offsetHeight / 2, y = v - rF, w = b;
    document.querySelectorAll(aF).length === 0 && document.elementFromPoint(y, w) === m || (a(!0), l(!0));
  }, [e, t, c, n]);
  return p.useEffect(() => {
    let m = e.current;
    if (!m || n === "none") return;
    function g() {
      let v = window.innerWidth - m.getBoundingClientRect().right;
      s(v >= Gx);
    }
    g();
    let h = setInterval(g, 1e3);
    return () => {
      clearInterval(h);
    };
  }, [e, n]), p.useEffect(() => {
    let m = r || document.activeElement === t.current;
    if (n === "none" || !m) return;
    let g = setTimeout(d, 0), h = setTimeout(d, 2e3), v = setTimeout(d, 5e3), b = setTimeout(() => {
      l(!0);
    }, 6e3);
    return () => {
      clearTimeout(g), clearTimeout(h), clearTimeout(v), clearTimeout(b);
    };
  }, [t, r, n, d]), { hasPWMBadge: o, willPushPWMBadge: u, PWM_BADGE_SPACE_WIDTH: oF };
}
var jx = p.createContext({}), Ux = p.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: c, inputMode: l = "numeric", onComplete: u, pushPasswordManagerStrategy: d = "increase-width", pasteTransformer: m, containerClassName: g, noScriptCSSFallback: h = sF, render: v, children: b } = n, y = eF(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), w, x, S, _, P;
  let [C, E] = p.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), R = r ?? C, k = nF(R), A = p.useCallback((N) => {
    o == null || o(N), E(N);
  }, [o]), z = p.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), T = p.useRef(null), H = p.useRef(null), W = p.useRef({ value: R, onChange: A, isIOS: typeof window < "u" && ((x = (w = window == null ? void 0 : window.CSS) == null ? void 0 : w.supports) == null ? void 0 : x.call(w, "-webkit-touch-callout", "none")) }), B = p.useRef({ prev: [(S = T.current) == null ? void 0 : S.selectionStart, (_ = T.current) == null ? void 0 : _.selectionEnd, (P = T.current) == null ? void 0 : P.selectionDirection] });
  p.useImperativeHandle(t, () => T.current, []), p.useEffect(() => {
    let N = T.current, ee = H.current;
    if (!N || !ee) return;
    W.current.value !== N.value && W.current.onChange(N.value), B.current.prev = [N.selectionStart, N.selectionEnd, N.selectionDirection];
    function ue() {
      if (document.activeElement !== N) {
        $(null), V(null);
        return;
      }
      let de = N.selectionStart, ye = N.selectionEnd, $e = N.selectionDirection, Ie = N.maxLength, Fe = N.value, Ke = B.current.prev, Ye = -1, ct = -1, lt;
      if (Fe.length !== 0 && de !== null && ye !== null) {
        let vn = de === ye, mt = de === Fe.length && Fe.length < Ie;
        if (vn && !mt) {
          let We = de;
          if (We === 0) Ye = 0, ct = 1, lt = "forward";
          else if (We === Ie) Ye = We - 1, ct = We, lt = "backward";
          else if (Ie > 1 && Fe.length > 1) {
            let hn = 0;
            if (Ke[0] !== null && Ke[1] !== null) {
              lt = We < Ke[1] ? "backward" : "forward";
              let Mr = Ke[0] === Ke[1] && Ke[0] < Ie;
              lt === "backward" && !Mr && (hn = -1);
            }
            Ye = hn + We, ct = hn + We + 1;
          }
        }
        Ye !== -1 && ct !== -1 && Ye !== ct && T.current.setSelectionRange(Ye, ct, lt);
      }
      let zt = Ye !== -1 ? Ye : de, Xt = ct !== -1 ? ct : ye, pt = lt ?? $e;
      $(zt), V(Xt), B.current.prev = [zt, Xt, pt];
    }
    if (document.addEventListener("selectionchange", ue, { capture: !0 }), ue(), document.activeElement === N && ne(!0), !document.getElementById("input-otp-style")) {
      let de = document.createElement("style");
      if (de.id = "input-otp-style", document.head.appendChild(de), de.sheet) {
        let ye = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Lr(de.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), Lr(de.sheet, `[data-input-otp]:autofill { ${ye} }`), Lr(de.sheet, `[data-input-otp]:-webkit-autofill { ${ye} }`), Lr(de.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Lr(de.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let pe = () => {
      ee && ee.style.setProperty("--root-height", `${N.clientHeight}px`);
    };
    pe();
    let me = new ResizeObserver(pe);
    return me.observe(N), () => {
      document.removeEventListener("selectionchange", ue, { capture: !0 }), me.disconnect();
    };
  }, []);
  let [L, M] = p.useState(!1), [j, ne] = p.useState(!1), [re, $] = p.useState(null), [O, V] = p.useState(null);
  p.useEffect(() => {
    tF(() => {
      var N, ee, ue, pe;
      (N = T.current) == null || N.dispatchEvent(new Event("input"));
      let me = (ee = T.current) == null ? void 0 : ee.selectionStart, de = (ue = T.current) == null ? void 0 : ue.selectionEnd, ye = (pe = T.current) == null ? void 0 : pe.selectionDirection;
      me !== null && de !== null && ($(me), V(de), B.current.prev = [me, de, ye]);
    });
  }, [R, j]), p.useEffect(() => {
    k !== void 0 && R !== k && k.length < a && R.length === a && (u == null || u(R));
  }, [a, u, k, R]);
  let G = iF({ containerRef: H, inputRef: T, pushPasswordManagerStrategy: d, isFocused: j }), Y = p.useCallback((N) => {
    let ee = N.currentTarget.value.slice(0, a);
    if (ee.length > 0 && z && !z.test(ee)) {
      N.preventDefault();
      return;
    }
    typeof k == "string" && ee.length < k.length && document.dispatchEvent(new Event("selectionchange")), A(ee);
  }, [a, A, k, z]), D = p.useCallback(() => {
    var N;
    if (T.current) {
      let ee = Math.min(T.current.value.length, a - 1), ue = T.current.value.length;
      (N = T.current) == null || N.setSelectionRange(ee, ue), $(ee), V(ue);
    }
    ne(!0);
  }, [a]), K = p.useCallback((N) => {
    var ee, ue;
    let pe = T.current;
    if (!m && (!W.current.isIOS || !N.clipboardData || !pe)) return;
    let me = N.clipboardData.getData("text/plain"), de = m ? m(me) : me;
    N.preventDefault();
    let ye = (ee = T.current) == null ? void 0 : ee.selectionStart, $e = (ue = T.current) == null ? void 0 : ue.selectionEnd, Ie = (ye !== $e ? R.slice(0, ye) + de + R.slice($e) : R.slice(0, ye) + de + R.slice(ye)).slice(0, a);
    if (Ie.length > 0 && z && !z.test(Ie)) return;
    pe.value = Ie, A(Ie);
    let Fe = Math.min(Ie.length, a - 1), Ke = Ie.length;
    pe.setSelectionRange(Fe, Ke), $(Fe), V(Ke);
  }, [a, A, z, R]), Q = p.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), Z = p.useMemo(() => ({ position: "absolute", inset: 0, width: G.willPushPWMBadge ? `calc(100% + ${G.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: G.willPushPWMBadge ? `inset(0 ${G.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [G.PWM_BADGE_SPACE_WIDTH, G.willPushPWMBadge, i]), J = p.useMemo(() => p.createElement("input", J$(Z$({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": R.length === 0 || void 0, "data-input-otp-mss": re, "data-input-otp-mse": O, inputMode: l, pattern: z == null ? void 0 : z.source, "aria-placeholder": c, style: Z, maxLength: a, value: R, ref: T, onPaste: (N) => {
    var ee;
    K(N), (ee = y.onPaste) == null || ee.call(y, N);
  }, onChange: Y, onMouseOver: (N) => {
    var ee;
    M(!0), (ee = y.onMouseOver) == null || ee.call(y, N);
  }, onMouseLeave: (N) => {
    var ee;
    M(!1), (ee = y.onMouseLeave) == null || ee.call(y, N);
  }, onFocus: (N) => {
    var ee;
    D(), (ee = y.onFocus) == null || ee.call(y, N);
  }, onBlur: (N) => {
    var ee;
    ne(!1), (ee = y.onBlur) == null || ee.call(y, N);
  } })), [Y, D, K, l, Z, a, O, re, y, z == null ? void 0 : z.source, R]), U = p.useMemo(() => ({ slots: Array.from({ length: a }).map((N, ee) => {
    var ue;
    let pe = j && re !== null && O !== null && (re === O && ee === re || ee >= re && ee < O), me = R[ee] !== void 0 ? R[ee] : null, de = R[0] !== void 0 ? null : (ue = c == null ? void 0 : c[ee]) != null ? ue : null;
    return { char: me, placeholderChar: de, isActive: pe, hasFakeCaret: pe && me === null };
  }), isFocused: j, isHovering: !y.disabled && L }), [j, L, a, O, re, y.disabled, R]), te = p.useMemo(() => v ? v(U) : p.createElement(jx.Provider, { value: U }, b), [b, U, v]);
  return p.createElement(p.Fragment, null, h !== null && p.createElement("noscript", null, p.createElement("style", null, h)), p.createElement("div", { ref: H, "data-input-otp-container": !0, style: Q, className: g }, te, p.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, J)));
});
Ux.displayName = "Input";
function Lr(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var sF = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
function RW({
  className: e,
  containerClassName: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    Ux,
    {
      "data-slot": "input-otp",
      containerClassName: I(
        "flex items-center gap-2 has-disabled:opacity-50",
        t
      ),
      className: I("disabled:cursor-not-allowed", e),
      ...n
    }
  );
}
function MW({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "input-otp-group",
      className: I("flex items-center gap-1", e),
      ...t
    }
  );
}
function TW({
  index: e,
  className: t,
  ...n
}) {
  const r = p.useContext(jx), { char: o, hasFakeCaret: a, isActive: i } = (r == null ? void 0 : r.slots[e]) ?? {};
  return /* @__PURE__ */ ie(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: I(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...n,
      children: [
        o,
        a && /* @__PURE__ */ f("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ f("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function NW({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ f(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: I(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...n
    }
  );
}
var li = "Menubar", [Pu, cF, lF] = sn(li), [Kx] = Pe(li, [
  lF,
  $t
]), Ue = To(), Yx = $t(), [uF, Cf] = Kx(li), Xx = p.forwardRef(
  (e, t) => {
    const {
      __scopeMenubar: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      loop: i = !0,
      dir: s,
      ...c
    } = e, l = Ct(s), u = Yx(n), [d = "", m] = De({
      prop: r,
      onChange: o,
      defaultProp: a
    }), [g, h] = p.useState(null);
    return /* @__PURE__ */ f(
      uF,
      {
        scope: n,
        value: d,
        onMenuOpen: p.useCallback(
          (v) => {
            m(v), h(v);
          },
          [m]
        ),
        onMenuClose: p.useCallback(() => m(""), [m]),
        onMenuToggle: p.useCallback(
          (v) => {
            m((b) => b ? "" : v), h(v);
          },
          [m]
        ),
        dir: l,
        loop: i,
        children: /* @__PURE__ */ f(Pu.Provider, { scope: n, children: /* @__PURE__ */ f(Pu.Slot, { scope: n, children: /* @__PURE__ */ f(
          Eo,
          {
            asChild: !0,
            ...u,
            orientation: "horizontal",
            loop: i,
            dir: l,
            currentTabStopId: g,
            onCurrentTabStopIdChange: h,
            children: /* @__PURE__ */ f(X.div, { role: "menubar", ...c, ref: t })
          }
        ) }) })
      }
    );
  }
);
Xx.displayName = li;
var _f = "MenubarMenu", [dF, Qx] = Kx(_f), Zx = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = Me(), a = n || o || "LEGACY_REACT_AUTO_VALUE", i = Cf(_f, t), s = Ue(t), c = p.useRef(null), l = p.useRef(!1), u = i.value === a;
  return p.useEffect(() => {
    u || (l.current = !1);
  }, [u]), /* @__PURE__ */ f(
    dF,
    {
      scope: t,
      value: a,
      triggerId: Me(),
      triggerRef: c,
      contentId: Me(),
      wasKeyboardTriggerOpenRef: l,
      children: /* @__PURE__ */ f(
        nf,
        {
          ...s,
          open: u,
          onOpenChange: (d) => {
            d || i.onMenuClose();
          },
          modal: !1,
          dir: i.dir,
          ...r
        }
      )
    }
  );
};
Zx.displayName = _f;
var Eu = "MenubarTrigger", Jx = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Yx(n), i = Ue(n), s = Cf(Eu, n), c = Qx(Eu, n), l = p.useRef(null), u = se(t, l, c.triggerRef), [d, m] = p.useState(!1), g = s.value === c.value;
    return /* @__PURE__ */ f(Pu.ItemSlot, { scope: n, value: c.value, disabled: r, children: /* @__PURE__ */ f(
      Ro,
      {
        asChild: !0,
        ...a,
        focusable: !r,
        tabStopId: c.value,
        children: /* @__PURE__ */ f(rf, { asChild: !0, ...i, children: /* @__PURE__ */ f(
          X.button,
          {
            type: "button",
            role: "menuitem",
            id: c.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": g,
            "aria-controls": g ? c.contentId : void 0,
            "data-highlighted": d ? "" : void 0,
            "data-state": g ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: u,
            onPointerDown: q(e.onPointerDown, (h) => {
              !r && h.button === 0 && h.ctrlKey === !1 && (s.onMenuOpen(c.value), g || h.preventDefault());
            }),
            onPointerEnter: q(e.onPointerEnter, () => {
              var v;
              !!s.value && !g && (s.onMenuOpen(c.value), (v = l.current) == null || v.focus());
            }),
            onKeyDown: q(e.onKeyDown, (h) => {
              r || (["Enter", " "].includes(h.key) && s.onMenuToggle(c.value), h.key === "ArrowDown" && s.onMenuOpen(c.value), ["Enter", " ", "ArrowDown"].includes(h.key) && (c.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
            }),
            onFocus: q(e.onFocus, () => m(!0)),
            onBlur: q(e.onBlur, () => m(!1))
          }
        ) })
      }
    ) });
  }
);
Jx.displayName = Eu;
var fF = "MenubarPortal", e0 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ue(t);
  return /* @__PURE__ */ f(of, { ...r, ...n });
};
e0.displayName = fF;
var Ru = "MenubarContent", t0 = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Ue(n), i = Cf(Ru, n), s = Qx(Ru, n), c = cF(n), l = p.useRef(!1);
    return /* @__PURE__ */ f(
      af,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...o,
        ref: t,
        align: r,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (u) => {
          var m;
          !!!i.value && !l.current && ((m = s.triggerRef.current) == null || m.focus()), l.current = !1, u.preventDefault();
        }),
        onFocusOutside: q(e.onFocusOutside, (u) => {
          const d = u.target;
          c().some((g) => {
            var h;
            return (h = g.ref.current) == null ? void 0 : h.contains(d);
          }) && u.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, () => {
          l.current = !0;
        }),
        onEntryFocus: (u) => {
          s.wasKeyboardTriggerOpenRef.current || u.preventDefault();
        },
        onKeyDown: q(
          e.onKeyDown,
          (u) => {
            if (["ArrowRight", "ArrowLeft"].includes(u.key)) {
              const d = u.target, m = d.hasAttribute("data-radix-menubar-subtrigger"), g = d.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (i.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
              if (!v && m || g && v) return;
              let w = c().filter((_) => !_.disabled).map((_) => _.value);
              v && w.reverse();
              const x = w.indexOf(s.value);
              w = i.loop ? OF(w, x + 1) : w.slice(x + 1);
              const [S] = w;
              S && i.onMenuOpen(S);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
t0.displayName = Ru;
var pF = "MenubarGroup", mF = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(sf, { ...o, ...r, ref: t });
  }
);
mF.displayName = pF;
var vF = "MenubarLabel", hF = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(cf, { ...o, ...r, ref: t });
  }
);
hF.displayName = vF;
var gF = "MenubarItem", n0 = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(lf, { ...o, ...r, ref: t });
  }
);
n0.displayName = gF;
var bF = "MenubarCheckboxItem", yF = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(uf, { ...o, ...r, ref: t });
  }
);
yF.displayName = bF;
var wF = "MenubarRadioGroup", xF = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(df, { ...o, ...r, ref: t });
  }
);
xF.displayName = wF;
var SF = "MenubarRadioItem", CF = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(ff, { ...o, ...r, ref: t });
  }
);
CF.displayName = SF;
var _F = "MenubarItemIndicator", PF = p.forwardRef((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ue(n);
  return /* @__PURE__ */ f(pf, { ...o, ...r, ref: t });
});
PF.displayName = _F;
var EF = "MenubarSeparator", r0 = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(mf, { ...o, ...r, ref: t });
  }
);
r0.displayName = EF;
var RF = "MenubarArrow", MF = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(vf, { ...o, ...r, ref: t });
  }
);
MF.displayName = RF;
var TF = "MenubarSubTrigger", NF = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(
      hf,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...r,
        ref: t
      }
    );
  }
);
NF.displayName = TF;
var AF = "MenubarSubContent", DF = p.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = Ue(n);
    return /* @__PURE__ */ f(
      gf,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
DF.displayName = AF;
function OF(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var IF = Xx, kF = Zx, LF = Jx, $F = e0, FF = t0, zF = n0, BF = r0;
function AW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    IF,
    {
      "data-slot": "menubar",
      className: I(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function DW({
  ...e
}) {
  return /* @__PURE__ */ f(kF, { "data-slot": "menubar-menu", ...e });
}
function qF({
  ...e
}) {
  return /* @__PURE__ */ f($F, { "data-slot": "menubar-portal", ...e });
}
function OW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    LF,
    {
      "data-slot": "menubar-trigger",
      className: I(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function IW({
  className: e,
  align: t = "start",
  alignOffset: n = -4,
  sideOffset: r = 8,
  ...o
}) {
  return /* @__PURE__ */ f(qF, { children: /* @__PURE__ */ f(
    FF,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: I(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...o
    }
  ) });
}
function kW({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ f(
    zF,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": n,
      className: I(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function LW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    BF,
    {
      "data-slot": "menubar-separator",
      className: I("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function $W({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: I(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
var HF = "VisuallyHidden", Pf = p.forwardRef(
  (e, t) => /* @__PURE__ */ f(
    X.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Pf.displayName = HF;
var o0 = Pf, _r = "NavigationMenu", [Ef, a0, WF] = sn(_r), [Mu, VF, GF] = sn(_r), [Rf] = Pe(
  _r,
  [WF, GF]
), [jF, dt] = Rf(_r), [UF, KF] = Rf(_r), i0 = p.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: s = 300,
      orientation: c = "horizontal",
      dir: l,
      ...u
    } = e, [d, m] = p.useState(null), g = se(t, (R) => m(R)), h = Ct(l), v = p.useRef(0), b = p.useRef(0), y = p.useRef(0), [w, x] = p.useState(!0), [S = "", _] = De({
      prop: r,
      onChange: (R) => {
        const k = R !== "", A = s > 0;
        k ? (window.clearTimeout(y.current), A && x(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
          () => x(!0),
          s
        )), o == null || o(R);
      },
      defaultProp: a
    }), P = p.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => _(""), 150);
    }, [_]), C = p.useCallback(
      (R) => {
        window.clearTimeout(b.current), _(R);
      },
      [_]
    ), E = p.useCallback(
      (R) => {
        S === R ? window.clearTimeout(b.current) : v.current = window.setTimeout(() => {
          window.clearTimeout(b.current), _(R);
        }, i);
      },
      [S, _, i]
    );
    return p.useEffect(() => () => {
      window.clearTimeout(v.current), window.clearTimeout(b.current), window.clearTimeout(y.current);
    }, []), /* @__PURE__ */ f(
      c0,
      {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: h,
        orientation: c,
        rootNavigationMenu: d,
        onTriggerEnter: (R) => {
          window.clearTimeout(v.current), w ? E(R) : C(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(v.current), P();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: P,
        onItemSelect: (R) => {
          _((k) => k === R ? "" : R);
        },
        onItemDismiss: () => _(""),
        children: /* @__PURE__ */ f(
          X.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: h,
            ...u,
            ref: g
          }
        )
      }
    );
  }
);
i0.displayName = _r;
var s0 = "NavigationMenuSub", YF = p.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, c = dt(s0, n), [l = "", u] = De({
      prop: r,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ f(
      c0,
      {
        scope: n,
        isRootMenu: !1,
        value: l,
        dir: c.dir,
        orientation: i,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (d) => u(d),
        onItemSelect: (d) => u(d),
        onItemDismiss: () => u(""),
        children: /* @__PURE__ */ f(X.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
YF.displayName = s0;
var c0 = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: a,
    children: i,
    value: s,
    onItemSelect: c,
    onItemDismiss: l,
    onTriggerEnter: u,
    onTriggerLeave: d,
    onContentEnter: m,
    onContentLeave: g
  } = e, [h, v] = p.useState(null), [b, y] = p.useState(/* @__PURE__ */ new Map()), [w, x] = p.useState(null);
  return /* @__PURE__ */ f(
    jF,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: wr(s),
      baseId: Me(),
      dir: o,
      orientation: a,
      viewport: h,
      onViewportChange: v,
      indicatorTrack: w,
      onIndicatorTrackChange: x,
      onTriggerEnter: _e(u),
      onTriggerLeave: _e(d),
      onContentEnter: _e(m),
      onContentLeave: _e(g),
      onItemSelect: _e(c),
      onItemDismiss: _e(l),
      onViewportContentChange: p.useCallback((S, _) => {
        y((P) => (P.set(S, _), new Map(P)));
      }, []),
      onViewportContentRemove: p.useCallback((S) => {
        y((_) => _.has(S) ? (_.delete(S), new Map(_)) : _);
      }, []),
      children: /* @__PURE__ */ f(Ef.Provider, { scope: t, children: /* @__PURE__ */ f(UF, { scope: t, items: b, children: i }) })
    }
  );
}, l0 = "NavigationMenuList", u0 = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = dt(l0, n), a = /* @__PURE__ */ f(X.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ f(X.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ f(Ef.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ f(b0, { asChild: !0, children: a }) : a }) });
  }
);
u0.displayName = l0;
var d0 = "NavigationMenuItem", [XF, f0] = Rf(d0), p0 = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, a = Me(), i = r || a || "LEGACY_REACT_AUTO_VALUE", s = p.useRef(null), c = p.useRef(null), l = p.useRef(null), u = p.useRef(() => {
    }), d = p.useRef(!1), m = p.useCallback((h = "start") => {
      if (s.current) {
        u.current();
        const v = Nu(s.current);
        v.length && Nf(h === "start" ? v : v.reverse());
      }
    }, []), g = p.useCallback(() => {
      if (s.current) {
        const h = Nu(s.current);
        h.length && (u.current = a2(h));
      }
    }, []);
    return /* @__PURE__ */ f(
      XF,
      {
        scope: n,
        value: i,
        triggerRef: c,
        contentRef: s,
        focusProxyRef: l,
        wasEscapeCloseRef: d,
        onEntryKeyDown: m,
        onFocusProxyEnter: m,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ f(X.li, { ...o, ref: t })
      }
    );
  }
);
p0.displayName = d0;
var Tu = "NavigationMenuTrigger", m0 = p.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = dt(Tu, e.__scopeNavigationMenu), i = f0(Tu, e.__scopeNavigationMenu), s = p.useRef(null), c = se(s, i.triggerRef, t), l = w0(a.baseId, i.value), u = x0(a.baseId, i.value), d = p.useRef(!1), m = p.useRef(!1), g = i.value === a.value;
  return /* @__PURE__ */ ie(Le, { children: [
    /* @__PURE__ */ f(Ef.ItemSlot, { scope: n, value: i.value, children: /* @__PURE__ */ f(y0, { asChild: !0, children: /* @__PURE__ */ f(
      X.button,
      {
        id: l,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Af(g),
        "aria-expanded": g,
        "aria-controls": u,
        ...o,
        ref: c,
        onPointerEnter: q(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: q(
          e.onPointerMove,
          Ca(() => {
            r || m.current || i.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(i.value), d.current = !0);
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          Ca(() => {
            r || (a.onTriggerLeave(), d.current = !1);
          })
        ),
        onClick: q(e.onClick, () => {
          a.onItemSelect(i.value), m.current = g;
        }),
        onKeyDown: q(e.onKeyDown, (h) => {
          const b = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          g && h.key === b && (i.onEntryKeyDown(), h.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ ie(Le, { children: [
      /* @__PURE__ */ f(
        o0,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (h) => {
            const v = i.contentRef.current, b = h.relatedTarget, y = b === s.current, w = v == null ? void 0 : v.contains(b);
            (y || !w) && i.onFocusProxyEnter(y ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ f("span", { "aria-owns": u })
    ] })
  ] });
});
m0.displayName = Tu;
var QF = "NavigationMenuLink", fg = "navigationMenu.linkSelect", v0 = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
    return /* @__PURE__ */ f(y0, { asChild: !0, children: /* @__PURE__ */ f(
      X.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...a,
        ref: t,
        onClick: q(
          e.onClick,
          (i) => {
            const s = i.target, c = new CustomEvent(fg, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(fg, (l) => o == null ? void 0 : o(l), { once: !0 }), aa(s, c), !c.defaultPrevented && !i.metaKey) {
              const l = new CustomEvent(oa, {
                bubbles: !0,
                cancelable: !0
              });
              aa(s, l);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
v0.displayName = QF;
var Mf = "NavigationMenuIndicator", ZF = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(Mf, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? Ag.createPortal(
    /* @__PURE__ */ f(Ee, { present: n || a, children: /* @__PURE__ */ f(JF, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
ZF.displayName = Mf;
var JF = p.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = dt(Mf, n), a = a0(n), [i, s] = p.useState(
    null
  ), [c, l] = p.useState(null), u = o.orientation === "horizontal", d = !!o.value;
  p.useEffect(() => {
    var v;
    const h = (v = a().find((b) => b.value === o.value)) == null ? void 0 : v.ref.current;
    h && s(h);
  }, [a, o.value]);
  const m = () => {
    i && l({
      size: u ? i.offsetWidth : i.offsetHeight,
      offset: u ? i.offsetLeft : i.offsetTop
    });
  };
  return Au(i, m), Au(o.indicatorTrack, m), c ? /* @__PURE__ */ f(
    X.div,
    {
      "aria-hidden": !0,
      "data-state": d ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...u ? {
          left: 0,
          width: c.size + "px",
          transform: `translateX(${c.offset}px)`
        } : {
          top: 0,
          height: c.size + "px",
          transform: `translateY(${c.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), fr = "NavigationMenuContent", e2 = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(fr, e.__scopeNavigationMenu), a = f0(fr, e.__scopeNavigationMenu), i = se(a.contentRef, t), s = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ f(t2, { forceMount: n, ...c, ref: i }) : /* @__PURE__ */ f(Ee, { present: n || s, children: /* @__PURE__ */ f(
    h0,
    {
      "data-state": Af(s),
      ...c,
      ref: i,
      onPointerEnter: q(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: q(
        e.onPointerLeave,
        Ca(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
e2.displayName = fr;
var t2 = p.forwardRef((e, t) => {
  const n = dt(fr, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Oe(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Oe(() => () => o(e.value), [e.value, o]), null;
}), oa = "navigationMenu.rootContentDismiss", h0 = p.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...l
  } = e, u = dt(fr, n), d = p.useRef(null), m = se(d, t), g = w0(u.baseId, r), h = x0(u.baseId, r), v = a0(n), b = p.useRef(null), { onItemDismiss: y } = u;
  p.useEffect(() => {
    const x = d.current;
    if (u.isRootMenu && x) {
      const S = () => {
        var _;
        y(), s(), x.contains(document.activeElement) && ((_ = o.current) == null || _.focus());
      };
      return x.addEventListener(oa, S), () => x.removeEventListener(oa, S);
    }
  }, [u.isRootMenu, e.value, o, y, s]);
  const w = p.useMemo(() => {
    const S = v().map((k) => k.value);
    u.dir === "rtl" && S.reverse();
    const _ = S.indexOf(u.value), P = S.indexOf(u.previousValue), C = r === u.value, E = P === S.indexOf(r);
    if (!C && !E) return b.current;
    const R = (() => {
      if (_ !== P) {
        if (C && P !== -1) return _ > P ? "from-end" : "from-start";
        if (E && _ !== -1) return _ > P ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = R, R;
  }, [u.previousValue, u.value, u.dir, v, r]);
  return /* @__PURE__ */ f(b0, { asChild: !0, children: /* @__PURE__ */ f(
    cn,
    {
      id: h,
      "aria-labelledby": g,
      "data-motion": w,
      "data-orientation": u.orientation,
      ...l,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var S;
        const x = new Event(oa, {
          bubbles: !0,
          cancelable: !0
        });
        (S = d.current) == null || S.dispatchEvent(x);
      },
      onFocusOutside: q(e.onFocusOutside, (x) => {
        var _;
        c();
        const S = x.target;
        (_ = u.rootNavigationMenu) != null && _.contains(S) && x.preventDefault();
      }),
      onPointerDownOutside: q(e.onPointerDownOutside, (x) => {
        var C;
        const S = x.target, _ = v().some((E) => {
          var R;
          return (R = E.ref.current) == null ? void 0 : R.contains(S);
        }), P = u.isRootMenu && ((C = u.viewport) == null ? void 0 : C.contains(S));
        (_ || P || !u.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: q(e.onKeyDown, (x) => {
        var P;
        const S = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !S) {
          const C = Nu(x.currentTarget), E = document.activeElement, R = C.findIndex((z) => z === E), A = x.shiftKey ? C.slice(0, R).reverse() : C.slice(R + 1, C.length);
          Nf(A) ? x.preventDefault() : (P = a.current) == null || P.focus();
        }
      }),
      onEscapeKeyDown: q(e.onEscapeKeyDown, (x) => {
        i.current = !0;
      })
    }
  ) });
}), Tf = "NavigationMenuViewport", g0 = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, a = !!dt(Tf, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ f(Ee, { present: n || a, children: /* @__PURE__ */ f(n2, { ...r, ref: t }) });
});
g0.displayName = Tf;
var n2 = p.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = dt(Tf, n), i = se(t, a.onViewportChange), s = KF(
    fr,
    e.__scopeNavigationMenu
  ), [c, l] = p.useState(null), [u, d] = p.useState(null), m = c ? (c == null ? void 0 : c.width) + "px" : void 0, g = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = !!a.value, v = h ? a.value : a.previousValue;
  return Au(u, () => {
    u && l({ width: u.offsetWidth, height: u.offsetHeight });
  }), /* @__PURE__ */ f(
    X.div,
    {
      "data-state": Af(h),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !h && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": m,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: q(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: q(e.onPointerLeave, Ca(a.onContentLeave)),
      children: Array.from(s.items).map(([y, { ref: w, forceMount: x, ...S }]) => {
        const _ = v === y;
        return /* @__PURE__ */ f(Ee, { present: x || _, children: /* @__PURE__ */ f(
          h0,
          {
            ...S,
            ref: Dt(w, (P) => {
              _ && P && d(P);
            })
          }
        ) }, y);
      })
    }
  );
}), r2 = "FocusGroup", b0 = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = dt(r2, n);
    return /* @__PURE__ */ f(Mu.Provider, { scope: n, children: /* @__PURE__ */ f(Mu.Slot, { scope: n, children: /* @__PURE__ */ f(X.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), pg = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], o2 = "FocusGroupItem", y0 = p.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = VF(n), a = dt(o2, n);
    return /* @__PURE__ */ f(Mu.ItemSlot, { scope: n, children: /* @__PURE__ */ f(
      X.button,
      {
        ...r,
        ref: t,
        onKeyDown: q(e.onKeyDown, (i) => {
          if (["Home", "End", ...pg].includes(i.key)) {
            let c = o().map((d) => d.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), pg.includes(i.key)) {
              const d = c.indexOf(i.currentTarget);
              c = c.slice(d + 1);
            }
            setTimeout(() => Nf(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function Nu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Nf(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function a2(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Au(e, t) {
  const n = _e(t);
  Oe(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function Af(e) {
  return e ? "open" : "closed";
}
function w0(e, t) {
  return `${e}-trigger-${t}`;
}
function x0(e, t) {
  return `${e}-content-${t}`;
}
function Ca(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var i2 = i0, s2 = u0, c2 = p0, l2 = m0, u2 = v0, d2 = g0;
function FW({
  className: e,
  children: t,
  viewport: n = !0,
  ...r
}) {
  return /* @__PURE__ */ ie(
    i2,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      className: I(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ f(p2, {})
      ]
    }
  );
}
function zW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    s2,
    {
      "data-slot": "navigation-menu-list",
      className: I(
        "group flex flex-1 list-none items-center justify-center gap-1",
        e
      ),
      ...t
    }
  );
}
function BW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    c2,
    {
      "data-slot": "navigation-menu-item",
      className: I("relative", e),
      ...t
    }
  );
}
const f2 = yr(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function qW({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ ie(
    l2,
    {
      "data-slot": "navigation-menu-trigger",
      className: I(f2(), "group", e),
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ f(
          ed,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function p2({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: I(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ f(
        d2,
        {
          "data-slot": "navigation-menu-viewport",
          className: I(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            e
          ),
          ...t
        }
      )
    }
  );
}
function HW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    u2,
    {
      "data-slot": "navigation-menu-link",
      className: I(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function WW({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: I("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function VW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    "ul",
    {
      "data-slot": "pagination-content",
      className: I("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function GW({ ...e }) {
  return /* @__PURE__ */ f("li", { "data-slot": "pagination-item", ...e });
}
function S0({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) {
  return /* @__PURE__ */ f(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: I(
        sr({
          variant: t ? "outline" : "ghost",
          size: n
        }),
        e
      ),
      ...r
    }
  );
}
function jW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ ie(
    S0,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: I("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ f(Gg, {}),
        /* @__PURE__ */ f("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function UW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ ie(
    S0,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: I("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ f("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ f(td, {})
      ]
    }
  );
}
function KW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ ie(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: I("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ f(jg, { className: "size-4" }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
var Df = "Popover", [C0] = Pe(Df, [
  Lt
]), Oo = Lt(), [m2, fn] = C0(Df), _0 = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = Oo(t), c = p.useRef(null), [l, u] = p.useState(!1), [d = !1, m] = De({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ f(Co, { ...s, children: /* @__PURE__ */ f(
    m2,
    {
      scope: t,
      contentId: Me(),
      triggerRef: c,
      open: d,
      onOpenChange: m,
      onOpenToggle: p.useCallback(() => m((g) => !g), [m]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: p.useCallback(() => u(!0), []),
      onCustomAnchorRemove: p.useCallback(() => u(!1), []),
      modal: i,
      children: n
    }
  ) });
};
_0.displayName = Df;
var P0 = "PopoverAnchor", v2 = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fn(P0, n), a = Oo(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return p.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ f(Cr, { ...a, ...r, ref: t });
  }
);
v2.displayName = P0;
var E0 = "PopoverTrigger", R0 = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fn(E0, n), a = Oo(n), i = se(t, o.triggerRef), s = /* @__PURE__ */ f(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": D0(o.open),
        ...r,
        ref: i,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ f(Cr, { asChild: !0, ...a, children: s });
  }
);
R0.displayName = E0;
var Of = "PopoverPortal", [h2, g2] = C0(Of, {
  forceMount: void 0
}), M0 = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = fn(Of, t);
  return /* @__PURE__ */ f(h2, { scope: t, forceMount: n, children: /* @__PURE__ */ f(Ee, { present: n || a.open, children: /* @__PURE__ */ f(kn, { asChild: !0, container: o, children: r }) }) });
};
M0.displayName = Of;
var pr = "PopoverContent", T0 = p.forwardRef(
  (e, t) => {
    const n = g2(pr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = fn(pr, e.__scopePopover);
    return /* @__PURE__ */ f(Ee, { present: r || a.open, children: a.modal ? /* @__PURE__ */ f(b2, { ...o, ref: t }) : /* @__PURE__ */ f(y2, { ...o, ref: t }) });
  }
);
T0.displayName = pr;
var b2 = p.forwardRef(
  (e, t) => {
    const n = fn(pr, e.__scopePopover), r = p.useRef(null), o = se(t, r), a = p.useRef(!1);
    return p.useEffect(() => {
      const i = r.current;
      if (i) return $a(i);
    }, []), /* @__PURE__ */ f(so, { as: at, allowPinchZoom: !0, children: /* @__PURE__ */ f(
      N0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: q(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
            a.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), y2 = p.forwardRef(
  (e, t) => {
    const n = fn(pr, e.__scopePopover), r = p.useRef(!1), o = p.useRef(!1);
    return /* @__PURE__ */ f(
      N0,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), N0 = p.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: u,
      ...d
    } = e, m = fn(pr, n), g = Oo(n);
    return ka(), /* @__PURE__ */ f(
      io,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ f(
          cn,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: u,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ f(
              _o,
              {
                "data-state": D0(m.open),
                role: "dialog",
                id: m.contentId,
                ...g,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), A0 = "PopoverClose", w2 = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fn(A0, n);
    return /* @__PURE__ */ f(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
w2.displayName = A0;
var x2 = "PopoverArrow", S2 = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Oo(n);
    return /* @__PURE__ */ f(Po, { ...o, ...r, ref: t });
  }
);
S2.displayName = x2;
function D0(e) {
  return e ? "open" : "closed";
}
var C2 = _0, _2 = R0, P2 = M0, E2 = T0;
function YW({
  ...e
}) {
  return /* @__PURE__ */ f(C2, { "data-slot": "popover", ...e });
}
function XW({
  ...e
}) {
  return /* @__PURE__ */ f(_2, { "data-slot": "popover-trigger", ...e });
}
function QW({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ f(P2, { children: /* @__PURE__ */ f(
    E2,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: I(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
var If = "Progress", kf = 100, [R2] = Pe(If), [M2, T2] = R2(If), O0 = p.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = N2,
      ...i
    } = e;
    (o || o === 0) && !mg(o) && console.error(A2(`${o}`, "Progress"));
    const s = mg(o) ? o : kf;
    r !== null && !vg(r, s) && console.error(D2(`${r}`, "Progress"));
    const c = vg(r, s) ? r : null, l = _a(c) ? a(c, s) : void 0;
    return /* @__PURE__ */ f(M2, { scope: n, value: c, max: s, children: /* @__PURE__ */ f(
      X.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": _a(c) ? c : void 0,
        "aria-valuetext": l,
        role: "progressbar",
        "data-state": L0(c, s),
        "data-value": c ?? void 0,
        "data-max": s,
        ...i,
        ref: t
      }
    ) });
  }
);
O0.displayName = If;
var I0 = "ProgressIndicator", k0 = p.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = T2(I0, n);
    return /* @__PURE__ */ f(
      X.div,
      {
        "data-state": L0(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
k0.displayName = I0;
function N2(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function L0(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function _a(e) {
  return typeof e == "number";
}
function mg(e) {
  return _a(e) && !isNaN(e) && e > 0;
}
function vg(e, t) {
  return _a(e) && !isNaN(e) && e <= t && e >= 0;
}
function A2(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${kf}\`.`;
}
function D2(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${kf} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var O2 = O0, I2 = k0;
function ZW({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    O2,
    {
      "data-slot": "progress",
      className: I(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ f(
        I2,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
var Lf = "Radio", [k2, $0] = Pe(Lf), [L2, $2] = k2(Lf), F0 = p.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: c,
      form: l,
      ...u
    } = e, [d, m] = p.useState(null), g = se(t, (b) => m(b)), h = p.useRef(!1), v = d ? l || !!d.closest("form") : !0;
    return /* @__PURE__ */ ie(L2, { scope: n, checked: o, disabled: i, children: [
      /* @__PURE__ */ f(
        X.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": q0(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...u,
          ref: g,
          onClick: q(e.onClick, (b) => {
            o || c == null || c(), v && (h.current = b.isPropagationStopped(), h.current || b.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ f(
        F2,
        {
          control: d,
          bubbles: !h.current,
          name: r,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
F0.displayName = Lf;
var z0 = "RadioIndicator", B0 = p.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = $2(z0, n);
    return /* @__PURE__ */ f(Ee, { present: r || a.checked, children: /* @__PURE__ */ f(
      X.span,
      {
        "data-state": q0(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
B0.displayName = z0;
var F2 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = p.useRef(null), i = wr(n), s = wo(t);
  return p.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== n && d) {
      const m = new Event("click", { bubbles: r });
      d.call(c, n), c.dispatchEvent(m);
    }
  }, [i, n, r]), /* @__PURE__ */ f(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function q0(e) {
  return e ? "checked" : "unchecked";
}
var z2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], $f = "RadioGroup", [B2] = Pe($f, [
  $t,
  $0
]), H0 = $t(), W0 = $0(), [q2, H2] = B2($f), V0 = p.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: c,
      dir: l,
      loop: u = !0,
      onValueChange: d,
      ...m
    } = e, g = H0(n), h = Ct(l), [v, b] = De({
      prop: a,
      defaultProp: o,
      onChange: d
    });
    return /* @__PURE__ */ f(
      q2,
      {
        scope: n,
        name: r,
        required: i,
        disabled: s,
        value: v,
        onValueChange: b,
        children: /* @__PURE__ */ f(
          Eo,
          {
            asChild: !0,
            ...g,
            orientation: c,
            dir: h,
            loop: u,
            children: /* @__PURE__ */ f(
              X.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": c,
                "data-disabled": s ? "" : void 0,
                dir: h,
                ...m,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
V0.displayName = $f;
var G0 = "RadioGroupItem", j0 = p.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = H2(G0, n), i = a.disabled || r, s = H0(n), c = W0(n), l = p.useRef(null), u = se(t, l), d = a.value === o.value, m = p.useRef(!1);
    return p.useEffect(() => {
      const g = (v) => {
        z2.includes(v.key) && (m.current = !0);
      }, h = () => m.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", h), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", h);
      };
    }, []), /* @__PURE__ */ f(
      Ro,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: d,
        children: /* @__PURE__ */ f(
          F0,
          {
            disabled: i,
            required: a.required,
            checked: d,
            ...c,
            ...o,
            name: a.name,
            ref: u,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: q((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: q(o.onFocus, () => {
              var g;
              m.current && ((g = l.current) == null || g.click());
            })
          }
        )
      }
    );
  }
);
j0.displayName = G0;
var W2 = "RadioGroupIndicator", U0 = p.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = W0(n);
    return /* @__PURE__ */ f(B0, { ...o, ...r, ref: t });
  }
);
U0.displayName = W2;
var V2 = V0, G2 = j0, j2 = U0;
function JW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    V2,
    {
      "data-slot": "radio-group",
      className: I("grid gap-3", e),
      ...t
    }
  );
}
function e5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    G2,
    {
      "data-slot": "radio-group-item",
      className: I(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(
        j2,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ f(U_, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const {
  createElement: mr,
  createContext: U2,
  forwardRef: K0,
  useCallback: Xe,
  useContext: Y0,
  useEffect: _n,
  useImperativeHandle: X0,
  useLayoutEffect: K2,
  useMemo: Y2,
  useRef: Ze,
  useState: or
} = p, hg = p[`useId${Math.random()}`.slice(0, 5)], X2 = K2, ui = U2(null);
ui.displayName = "PanelGroupContext";
const Pn = X2, Q2 = typeof hg == "function" ? hg : () => null;
let Z2 = 0;
function Ff(e = null) {
  const t = Q2(), n = Ze(e || t || null);
  return n.current === null && (n.current = "" + Z2++), e ?? n.current;
}
function Q0({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: o,
  forwardedRef: a,
  id: i,
  maxSize: s,
  minSize: c,
  onCollapse: l,
  onExpand: u,
  onResize: d,
  order: m,
  style: g,
  tagName: h = "div",
  ...v
}) {
  const b = Y0(ui);
  if (b === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: y,
    expandPanel: w,
    getPanelSize: x,
    getPanelStyle: S,
    groupId: _,
    isPanelCollapsed: P,
    reevaluatePanelConstraints: C,
    registerPanel: E,
    resizePanel: R,
    unregisterPanel: k
  } = b, A = Ff(i), z = Ze({
    callbacks: {
      onCollapse: l,
      onExpand: u,
      onResize: d
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: o,
      maxSize: s,
      minSize: c
    },
    id: A,
    idIsFromProps: i !== void 0,
    order: m
  });
  Ze({
    didLogMissingDefaultSizeWarning: !1
  }), Pn(() => {
    const {
      callbacks: H,
      constraints: W
    } = z.current, B = {
      ...W
    };
    z.current.id = A, z.current.idIsFromProps = i !== void 0, z.current.order = m, H.onCollapse = l, H.onExpand = u, H.onResize = d, W.collapsedSize = n, W.collapsible = r, W.defaultSize = o, W.maxSize = s, W.minSize = c, (B.collapsedSize !== W.collapsedSize || B.collapsible !== W.collapsible || B.maxSize !== W.maxSize || B.minSize !== W.minSize) && C(z.current, B);
  }), Pn(() => {
    const H = z.current;
    return E(H), () => {
      k(H);
    };
  }, [m, A, E, k]), X0(a, () => ({
    collapse: () => {
      y(z.current);
    },
    expand: (H) => {
      w(z.current, H);
    },
    getId() {
      return A;
    },
    getSize() {
      return x(z.current);
    },
    isCollapsed() {
      return P(z.current);
    },
    isExpanded() {
      return !P(z.current);
    },
    resize: (H) => {
      R(z.current, H);
    }
  }), [y, w, x, P, A, R]);
  const T = S(z.current, o);
  return mr(h, {
    ...v,
    children: e,
    className: t,
    id: i,
    style: {
      ...T,
      ...g
    },
    // CSS selectors
    "data-panel": "",
    "data-panel-collapsible": r || void 0,
    "data-panel-group-id": _,
    "data-panel-id": A,
    "data-panel-size": parseFloat("" + T.flexGrow).toFixed(1)
  });
}
const Z0 = K0((e, t) => mr(Q0, {
  ...e,
  forwardedRef: t
}));
Q0.displayName = "Panel";
Z0.displayName = "forwardRef(Panel)";
let Du = null, Cn = null;
function J2(e, t) {
  if (t) {
    const n = (t & rS) !== 0, r = (t & oS) !== 0, o = (t & aS) !== 0, a = (t & iS) !== 0;
    if (n)
      return o ? "se-resize" : a ? "ne-resize" : "e-resize";
    if (r)
      return o ? "sw-resize" : a ? "nw-resize" : "w-resize";
    if (o)
      return "s-resize";
    if (a)
      return "n-resize";
  }
  switch (e) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function ez() {
  Cn !== null && (document.head.removeChild(Cn), Du = null, Cn = null);
}
function Xl(e, t) {
  const n = J2(e, t);
  Du !== n && (Du = n, Cn === null && (Cn = document.createElement("style"), document.head.appendChild(Cn)), Cn.innerHTML = `*{cursor: ${n}!important;}`);
}
function J0(e) {
  return e.type === "keydown";
}
function eS(e) {
  return e.type.startsWith("pointer");
}
function tS(e) {
  return e.type.startsWith("mouse");
}
function di(e) {
  if (eS(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (tS(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function tz() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function nz(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function rz(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: yg(e),
    b: yg(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  fe(r, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: bg(gg(n.a)),
    b: bg(gg(n.b))
  };
  if (o.a === o.b) {
    const a = r.childNodes, i = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = a.length;
    for (; s--; ) {
      const c = a[s];
      if (c === i.a) return 1;
      if (c === i.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const oz = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function az(e) {
  var t;
  const n = getComputedStyle((t = nS(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function iz(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || az(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || oz.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function gg(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (fe(n, "Missing node"), iz(n)) return n;
  }
  return null;
}
function bg(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function yg(e) {
  const t = [];
  for (; e; )
    t.push(e), e = nS(e);
  return t;
}
function nS(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const rS = 1, oS = 2, aS = 4, iS = 8, sz = tz() === "coarse";
let bt = [], ar = !1, tn = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map();
const ro = /* @__PURE__ */ new Set();
function cz(e, t, n, r, o) {
  var a;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: o
  }, c = (a = tn.get(i)) !== null && a !== void 0 ? a : 0;
  return tn.set(i, c + 1), ro.add(s), Pa(), function() {
    var u;
    fi.delete(e), ro.delete(s);
    const d = (u = tn.get(i)) !== null && u !== void 0 ? u : 1;
    if (tn.set(i, d - 1), Pa(), d === 1 && tn.delete(i), bt.includes(s)) {
      const m = bt.indexOf(s);
      m >= 0 && bt.splice(m, 1), Bf(), o("up", !0, null);
    }
  };
}
function wg(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = di(e);
  ar = !0, zf({
    target: t,
    x: n,
    y: r
  }), Pa(), bt.length > 0 && (Ea("down", e), e.preventDefault(), e.stopPropagation());
}
function $r(e) {
  const {
    x: t,
    y: n
  } = di(e);
  if (ar && e.buttons === 0 && (ar = !1, Ea("up", e)), !ar) {
    const {
      target: r
    } = e;
    zf({
      target: r,
      x: t,
      y: n
    });
  }
  Ea("move", e), Bf(), bt.length > 0 && e.preventDefault();
}
function Yn(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = di(e);
  fi.clear(), ar = !1, bt.length > 0 && e.preventDefault(), Ea("up", e), zf({
    target: t,
    x: n,
    y: r
  }), Bf(), Pa();
}
function zf({
  target: e,
  x: t,
  y: n
}) {
  bt.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e), ro.forEach((o) => {
    const {
      element: a,
      hitAreaMargins: i
    } = o, s = a.getBoundingClientRect(), {
      bottom: c,
      left: l,
      right: u,
      top: d
    } = s, m = sz ? i.coarse : i.fine;
    if (t >= l - m && t <= u + m && n >= d - m && n <= c + m) {
      if (r !== null && document.contains(r) && a !== r && !a.contains(r) && !r.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      rz(r, a) > 0) {
        let h = r, v = !1;
        for (; h && !h.contains(a); ) {
          if (nz(h.getBoundingClientRect(), s)) {
            v = !0;
            break;
          }
          h = h.parentElement;
        }
        if (v)
          return;
      }
      bt.push(o);
    }
  });
}
function Ql(e, t) {
  fi.set(e, t);
}
function Bf() {
  let e = !1, t = !1;
  bt.forEach((r) => {
    const {
      direction: o
    } = r;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  fi.forEach((r) => {
    n |= r;
  }), e && t ? Xl("intersection", n) : e ? Xl("horizontal", n) : t ? Xl("vertical", n) : ez();
}
function Pa() {
  tn.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", Yn), n.removeEventListener("pointerdown", wg), n.removeEventListener("pointerleave", $r), n.removeEventListener("pointermove", $r);
  }), window.removeEventListener("pointerup", Yn), window.removeEventListener("pointercancel", Yn), ro.size > 0 && (ar ? (bt.length > 0 && tn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", Yn), n.addEventListener("pointerleave", $r), n.addEventListener("pointermove", $r));
  }), window.addEventListener("pointerup", Yn), window.addEventListener("pointercancel", Yn)) : tn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", wg, {
      capture: !0
    }), n.addEventListener("pointermove", $r));
  }));
}
function Ea(e, t) {
  ro.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, o = bt.includes(n);
    r(e, o, t);
  });
}
function lz() {
  const [e, t] = or(0);
  return Xe(() => t((n) => n + 1), []);
}
function fe(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const qf = 10;
function An(e, t, n = qf) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function Ht(e, t, n = qf) {
  return An(e, t, n) === 0;
}
function nt(e, t, n) {
  return An(e, t, n) === 0;
}
function uz(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r], a = t[r];
    if (!nt(o, a, n))
      return !1;
  }
  return !0;
}
function er({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  fe(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: a,
    maxSize: i = 100,
    minSize: s = 0
  } = r;
  if (An(n, s) < 0)
    if (a) {
      const c = (o + s) / 2;
      An(n, c) < 0 ? n = o : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(qf)), n;
}
function Hr({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: o,
  trigger: a
}) {
  if (nt(e, 0))
    return t;
  const i = [...t], [s, c] = r;
  fe(s != null, "Invalid first pivot index"), fe(c != null, "Invalid second pivot index");
  let l = 0;
  if (a === "keyboard") {
    {
      const d = e < 0 ? c : s, m = n[d];
      fe(m, `Panel constraints not found for index ${d}`);
      const {
        collapsedSize: g = 0,
        collapsible: h,
        minSize: v = 0
      } = m;
      if (h) {
        const b = t[d];
        if (fe(b != null, `Previous layout not found for panel index ${d}`), nt(b, g)) {
          const y = v - b;
          An(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
    {
      const d = e < 0 ? s : c, m = n[d];
      fe(m, `No panel constraints found for index ${d}`);
      const {
        collapsedSize: g = 0,
        collapsible: h,
        minSize: v = 0
      } = m;
      if (h) {
        const b = t[d];
        if (fe(b != null, `Previous layout not found for panel index ${d}`), nt(b, v)) {
          const y = b - g;
          An(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
  }
  {
    const d = e < 0 ? 1 : -1;
    let m = e < 0 ? c : s, g = 0;
    for (; ; ) {
      const v = t[m];
      fe(v != null, `Previous layout not found for panel index ${m}`);
      const y = er({
        panelConstraints: n,
        panelIndex: m,
        size: 100
      }) - v;
      if (g += y, m += d, m < 0 || m >= n.length)
        break;
    }
    const h = Math.min(Math.abs(e), Math.abs(g));
    e = e < 0 ? 0 - h : h;
  }
  {
    let m = e < 0 ? s : c;
    for (; m >= 0 && m < n.length; ) {
      const g = Math.abs(e) - Math.abs(l), h = t[m];
      fe(h != null, `Previous layout not found for panel index ${m}`);
      const v = h - g, b = er({
        panelConstraints: n,
        panelIndex: m,
        size: v
      });
      if (!nt(h, b) && (l += h - b, i[m] = b, l.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? m-- : m++;
    }
  }
  if (uz(o, i))
    return o;
  {
    const d = e < 0 ? c : s, m = t[d];
    fe(m != null, `Previous layout not found for panel index ${d}`);
    const g = m + l, h = er({
      panelConstraints: n,
      panelIndex: d,
      size: g
    });
    if (i[d] = h, !nt(h, g)) {
      let v = g - h, y = e < 0 ? c : s;
      for (; y >= 0 && y < n.length; ) {
        const w = i[y];
        fe(w != null, `Previous layout not found for panel index ${y}`);
        const x = w + v, S = er({
          panelConstraints: n,
          panelIndex: y,
          size: x
        });
        if (nt(w, S) || (v -= S - w, i[y] = S), nt(v, 0))
          break;
        e > 0 ? y-- : y++;
      }
    }
  }
  const u = i.reduce((d, m) => m + d, 0);
  return nt(u, 100) ? i : o;
}
function dz({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, o = 100, a = 0, i = 0;
  const s = n[0];
  fe(s != null, "No pivot index found"), t.forEach((d, m) => {
    const {
      constraints: g
    } = d, {
      maxSize: h = 100,
      minSize: v = 0
    } = g;
    m === s ? (r = v, o = h) : (a += v, i += h);
  });
  const c = Math.min(o, 100 - a), l = Math.max(r, 100 - i), u = e[s];
  return {
    valueMax: c,
    valueMin: l,
    valueNow: u
  };
}
function oo(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function sS(e, t, n = document) {
  const o = oo(e, n).findIndex((a) => a.getAttribute("data-panel-resize-handle-id") === t);
  return o ?? null;
}
function cS(e, t, n) {
  const r = sS(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function lS(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function pi(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function fz(e, t, n, r = document) {
  var o, a, i, s;
  const c = pi(t, r), l = oo(e, r), u = c ? l.indexOf(c) : -1, d = (o = (a = n[u]) === null || a === void 0 ? void 0 : a.id) !== null && o !== void 0 ? o : null, m = (i = (s = n[u + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [d, m];
}
function pz({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: o,
  panelGroupElement: a,
  setLayout: i
}) {
  Ze({
    didWarnAboutMissingResizeHandle: !1
  }), Pn(() => {
    if (!a)
      return;
    const s = oo(n, a);
    for (let c = 0; c < o.length - 1; c++) {
      const {
        valueMax: l,
        valueMin: u,
        valueNow: d
      } = dz({
        layout: r,
        panelsArray: o,
        pivotIndices: [c, c + 1]
      }), m = s[c];
      if (m != null) {
        const g = o[c];
        fe(g, `No panel data found for index "${c}"`), m.setAttribute("aria-controls", g.id), m.setAttribute("aria-valuemax", "" + Math.round(l)), m.setAttribute("aria-valuemin", "" + Math.round(u)), m.setAttribute("aria-valuenow", d != null ? "" + Math.round(d) : "");
      }
    }
    return () => {
      s.forEach((c, l) => {
        c.removeAttribute("aria-controls"), c.removeAttribute("aria-valuemax"), c.removeAttribute("aria-valuemin"), c.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, o, a]), _n(() => {
    if (!a)
      return;
    const s = t.current;
    fe(s, "Eager values not found");
    const {
      panelDataArray: c
    } = s, l = lS(n, a);
    fe(l != null, `No group found for id "${n}"`);
    const u = oo(n, a);
    fe(u, `No resize handles found for group id "${n}"`);
    const d = u.map((m) => {
      const g = m.getAttribute("data-panel-resize-handle-id");
      fe(g, "Resize handle element has no handle id attribute");
      const [h, v] = fz(n, g, c, a);
      if (h == null || v == null)
        return () => {
        };
      const b = (y) => {
        if (!y.defaultPrevented)
          switch (y.key) {
            case "Enter": {
              y.preventDefault();
              const w = c.findIndex((x) => x.id === h);
              if (w >= 0) {
                const x = c[w];
                fe(x, `No panel data found for index ${w}`);
                const S = r[w], {
                  collapsedSize: _ = 0,
                  collapsible: P,
                  minSize: C = 0
                } = x.constraints;
                if (S != null && P) {
                  const E = Hr({
                    delta: nt(S, _) ? C - _ : _ - S,
                    initialLayout: r,
                    panelConstraints: c.map((R) => R.constraints),
                    pivotIndices: cS(n, g, a),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== E && i(E);
                }
              }
              break;
            }
          }
      };
      return m.addEventListener("keydown", b), () => {
        m.removeEventListener("keydown", b);
      };
    });
    return () => {
      d.forEach((m) => m());
    };
  }, [a, e, t, n, r, o, i]);
}
function xg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function uS(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: o
  } = di(t);
  return n ? r : o;
}
function mz(e, t, n, r, o) {
  const a = n === "horizontal", i = pi(t, o);
  fe(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute("data-panel-group-id");
  fe(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: c
  } = r;
  const l = uS(n, e), u = lS(s, o);
  fe(u, `No group element found for id "${s}"`);
  const d = u.getBoundingClientRect(), m = a ? d.width : d.height;
  return (l - c) / m * 100;
}
function vz(e, t, n, r, o, a) {
  if (J0(e)) {
    const i = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : o != null ? s = o : s = 10;
    let c = 0;
    switch (e.key) {
      case "ArrowDown":
        c = i ? 0 : s;
        break;
      case "ArrowLeft":
        c = i ? -s : 0;
        break;
      case "ArrowRight":
        c = i ? s : 0;
        break;
      case "ArrowUp":
        c = i ? 0 : -s;
        break;
      case "End":
        c = 100;
        break;
      case "Home":
        c = -100;
        break;
    }
    return c;
  } else
    return r == null ? 0 : mz(e, t, n, r, a);
}
function hz({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((a) => a.constraints);
  let r = 0, o = 100;
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    fe(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    s != null && (r++, t[a] = s, o -= s);
  }
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    fe(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const c = e.length - r, l = o / c;
    r++, t[a] = l, o -= l;
  }
  return t;
}
function Xn(e, t, n) {
  t.forEach((r, o) => {
    const a = e[o];
    fe(a, `Panel data not found for index ${o}`);
    const {
      callbacks: i,
      constraints: s,
      id: c
    } = a, {
      collapsedSize: l = 0,
      collapsible: u
    } = s, d = n[c];
    if (d == null || r !== d) {
      n[c] = r;
      const {
        onCollapse: m,
        onExpand: g,
        onResize: h
      } = i;
      h && h(r, d), u && (m || g) && (g && (d == null || Ht(d, l)) && !Ht(r, l) && g(), m && (d == null || !Ht(d, l)) && Ht(r, l) && m());
    }
  });
}
function Jo(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function gz({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: o,
  precision: a = 3
}) {
  const i = n[o];
  let s;
  return i == null ? s = e != null ? e.toPrecision(a) : "1" : r.length === 1 ? s = "1" : s = i.toPrecision(a), {
    flexBasis: 0,
    flexGrow: s,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function bz(e, t = 10) {
  let n = null;
  return (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function Sg(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, n) => {
        localStorage.setItem(t, n);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function dS(e) {
  return `react-resizable-panels:${e}`;
}
function fS(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: o,
      order: a
    } = t;
    return o ? r : a ? `${a}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function pS(e, t) {
  try {
    const n = dS(e), r = t.getItem(n);
    if (r) {
      const o = JSON.parse(r);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function yz(e, t, n) {
  var r, o;
  const a = (r = pS(e, n)) !== null && r !== void 0 ? r : {}, i = fS(t);
  return (o = a[i]) !== null && o !== void 0 ? o : null;
}
function wz(e, t, n, r, o) {
  var a;
  const i = dS(e), s = fS(t), c = (a = pS(e, o)) !== null && a !== void 0 ? a : {};
  c[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    o.setItem(i, JSON.stringify(c));
  } catch (l) {
    console.error(l);
  }
}
function Cg({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((a, i) => a + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((a) => `${a}%`).join(", ")}`);
  if (!nt(r, 100) && n.length > 0)
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      fe(i != null, `No layout data found for index ${a}`);
      const s = 100 / r * i;
      n[a] = s;
    }
  let o = 0;
  for (let a = 0; a < t.length; a++) {
    const i = n[a];
    fe(i != null, `No layout data found for index ${a}`);
    const s = er({
      panelConstraints: t,
      panelIndex: a,
      size: i
    });
    i != s && (o += i - s, n[a] = s);
  }
  if (!nt(o, 0))
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      fe(i != null, `No layout data found for index ${a}`);
      const s = i + o, c = er({
        panelConstraints: t,
        panelIndex: a,
        size: s
      });
      if (i !== c && (o -= c - i, n[a] = c, nt(o, 0)))
        break;
    }
  return n;
}
const xz = 100, Wr = {
  getItem: (e) => (Sg(Wr), Wr.getItem(e)),
  setItem: (e, t) => {
    Sg(Wr), Wr.setItem(e, t);
  }
}, _g = {};
function mS({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: o,
  id: a = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: c = Wr,
  style: l,
  tagName: u = "div",
  ...d
}) {
  const m = Ff(a), g = Ze(null), [h, v] = or(null), [b, y] = or([]), w = lz(), x = Ze({}), S = Ze(/* @__PURE__ */ new Map()), _ = Ze(0), P = Ze({
    autoSaveId: e,
    direction: r,
    dragState: h,
    id: m,
    keyboardResizeBy: s,
    onLayout: i,
    storage: c
  }), C = Ze({
    layout: b,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  Ze({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), X0(o, () => ({
    getId: () => P.current.id,
    getLayout: () => {
      const {
        layout: O
      } = C.current;
      return O;
    },
    setLayout: (O) => {
      const {
        onLayout: V
      } = P.current, {
        layout: G,
        panelDataArray: Y
      } = C.current, D = Cg({
        layout: O,
        panelConstraints: Y.map((K) => K.constraints)
      });
      xg(G, D) || (y(D), C.current.layout = D, V && V(D), Xn(Y, D, x.current));
    }
  }), []), Pn(() => {
    P.current.autoSaveId = e, P.current.direction = r, P.current.dragState = h, P.current.id = m, P.current.onLayout = i, P.current.storage = c;
  }), pz({
    committedValuesRef: P,
    eagerValuesRef: C,
    groupId: m,
    layout: b,
    panelDataArray: C.current.panelDataArray,
    setLayout: y,
    panelGroupElement: g.current
  }), _n(() => {
    const {
      panelDataArray: O
    } = C.current;
    if (e) {
      if (b.length === 0 || b.length !== O.length)
        return;
      let V = _g[e];
      V == null && (V = bz(wz, xz), _g[e] = V);
      const G = [...O], Y = new Map(S.current);
      V(e, G, Y, b, c);
    }
  }, [e, b, c]), _n(() => {
  });
  const E = Xe((O) => {
    const {
      onLayout: V
    } = P.current, {
      layout: G,
      panelDataArray: Y
    } = C.current;
    if (O.constraints.collapsible) {
      const D = Y.map((J) => J.constraints), {
        collapsedSize: K = 0,
        panelSize: Q,
        pivotIndices: Z
      } = xn(Y, O, G);
      if (fe(Q != null, `Panel size not found for panel "${O.id}"`), !Ht(Q, K)) {
        S.current.set(O.id, Q);
        const U = Jn(Y, O) === Y.length - 1 ? Q - K : K - Q, te = Hr({
          delta: U,
          initialLayout: G,
          panelConstraints: D,
          pivotIndices: Z,
          prevLayout: G,
          trigger: "imperative-api"
        });
        Jo(G, te) || (y(te), C.current.layout = te, V && V(te), Xn(Y, te, x.current));
      }
    }
  }, []), R = Xe((O, V) => {
    const {
      onLayout: G
    } = P.current, {
      layout: Y,
      panelDataArray: D
    } = C.current;
    if (O.constraints.collapsible) {
      const K = D.map((N) => N.constraints), {
        collapsedSize: Q = 0,
        panelSize: Z = 0,
        minSize: J = 0,
        pivotIndices: U
      } = xn(D, O, Y), te = V ?? J;
      if (Ht(Z, Q)) {
        const N = S.current.get(O.id), ee = N != null && N >= te ? N : te, pe = Jn(D, O) === D.length - 1 ? Z - ee : ee - Z, me = Hr({
          delta: pe,
          initialLayout: Y,
          panelConstraints: K,
          pivotIndices: U,
          prevLayout: Y,
          trigger: "imperative-api"
        });
        Jo(Y, me) || (y(me), C.current.layout = me, G && G(me), Xn(D, me, x.current));
      }
    }
  }, []), k = Xe((O) => {
    const {
      layout: V,
      panelDataArray: G
    } = C.current, {
      panelSize: Y
    } = xn(G, O, V);
    return fe(Y != null, `Panel size not found for panel "${O.id}"`), Y;
  }, []), A = Xe((O, V) => {
    const {
      panelDataArray: G
    } = C.current, Y = Jn(G, O);
    return gz({
      defaultSize: V,
      dragState: h,
      layout: b,
      panelData: G,
      panelIndex: Y
    });
  }, [h, b]), z = Xe((O) => {
    const {
      layout: V,
      panelDataArray: G
    } = C.current, {
      collapsedSize: Y = 0,
      collapsible: D,
      panelSize: K
    } = xn(G, O, V);
    return fe(K != null, `Panel size not found for panel "${O.id}"`), D === !0 && Ht(K, Y);
  }, []), T = Xe((O) => {
    const {
      layout: V,
      panelDataArray: G
    } = C.current, {
      collapsedSize: Y = 0,
      collapsible: D,
      panelSize: K
    } = xn(G, O, V);
    return fe(K != null, `Panel size not found for panel "${O.id}"`), !D || An(K, Y) > 0;
  }, []), H = Xe((O) => {
    const {
      panelDataArray: V
    } = C.current;
    V.push(O), V.sort((G, Y) => {
      const D = G.order, K = Y.order;
      return D == null && K == null ? 0 : D == null ? -1 : K == null ? 1 : D - K;
    }), C.current.panelDataArrayChanged = !0, w();
  }, [w]);
  Pn(() => {
    if (C.current.panelDataArrayChanged) {
      C.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: O,
        onLayout: V,
        storage: G
      } = P.current, {
        layout: Y,
        panelDataArray: D
      } = C.current;
      let K = null;
      if (O) {
        const Z = yz(O, D, G);
        Z && (S.current = new Map(Object.entries(Z.expandToSizes)), K = Z.layout);
      }
      K == null && (K = hz({
        panelDataArray: D
      }));
      const Q = Cg({
        layout: K,
        panelConstraints: D.map((Z) => Z.constraints)
      });
      xg(Y, Q) || (y(Q), C.current.layout = Q, V && V(Q), Xn(D, Q, x.current));
    }
  }), Pn(() => {
    const O = C.current;
    return () => {
      O.layout = [];
    };
  }, []);
  const W = Xe((O) => {
    let V = !1;
    const G = g.current;
    return G && window.getComputedStyle(G, null).getPropertyValue("direction") === "rtl" && (V = !0), function(D) {
      D.preventDefault();
      const K = g.current;
      if (!K)
        return () => null;
      const {
        direction: Q,
        dragState: Z,
        id: J,
        keyboardResizeBy: U,
        onLayout: te
      } = P.current, {
        layout: N,
        panelDataArray: ee
      } = C.current, {
        initialLayout: ue
      } = Z ?? {}, pe = cS(J, O, K);
      let me = vz(D, O, Q, Z, U, K);
      const de = Q === "horizontal";
      de && V && (me = -me);
      const ye = ee.map((Fe) => Fe.constraints), $e = Hr({
        delta: me,
        initialLayout: ue ?? N,
        panelConstraints: ye,
        pivotIndices: pe,
        prevLayout: N,
        trigger: J0(D) ? "keyboard" : "mouse-or-touch"
      }), Ie = !Jo(N, $e);
      (eS(D) || tS(D)) && _.current != me && (_.current = me, !Ie && me !== 0 ? de ? Ql(O, me < 0 ? rS : oS) : Ql(O, me < 0 ? aS : iS) : Ql(O, 0)), Ie && (y($e), C.current.layout = $e, te && te($e), Xn(ee, $e, x.current));
    };
  }, []), B = Xe((O, V) => {
    const {
      onLayout: G
    } = P.current, {
      layout: Y,
      panelDataArray: D
    } = C.current, K = D.map((N) => N.constraints), {
      panelSize: Q,
      pivotIndices: Z
    } = xn(D, O, Y);
    fe(Q != null, `Panel size not found for panel "${O.id}"`);
    const U = Jn(D, O) === D.length - 1 ? Q - V : V - Q, te = Hr({
      delta: U,
      initialLayout: Y,
      panelConstraints: K,
      pivotIndices: Z,
      prevLayout: Y,
      trigger: "imperative-api"
    });
    Jo(Y, te) || (y(te), C.current.layout = te, G && G(te), Xn(D, te, x.current));
  }, []), L = Xe((O, V) => {
    const {
      layout: G,
      panelDataArray: Y
    } = C.current, {
      collapsedSize: D = 0,
      collapsible: K
    } = V, {
      collapsedSize: Q = 0,
      collapsible: Z,
      maxSize: J = 100,
      minSize: U = 0
    } = O.constraints, {
      panelSize: te
    } = xn(Y, O, G);
    te != null && (K && Z && Ht(te, D) ? Ht(D, Q) || B(O, Q) : te < U ? B(O, U) : te > J && B(O, J));
  }, [B]), M = Xe((O, V) => {
    const {
      direction: G
    } = P.current, {
      layout: Y
    } = C.current;
    if (!g.current)
      return;
    const D = pi(O, g.current);
    fe(D, `Drag handle element not found for id "${O}"`);
    const K = uS(G, V);
    v({
      dragHandleId: O,
      dragHandleRect: D.getBoundingClientRect(),
      initialCursorPosition: K,
      initialLayout: Y
    });
  }, []), j = Xe(() => {
    v(null);
  }, []), ne = Xe((O) => {
    const {
      panelDataArray: V
    } = C.current, G = Jn(V, O);
    G >= 0 && (V.splice(G, 1), delete x.current[O.id], C.current.panelDataArrayChanged = !0, w());
  }, [w]), re = Y2(() => ({
    collapsePanel: E,
    direction: r,
    dragState: h,
    expandPanel: R,
    getPanelSize: k,
    getPanelStyle: A,
    groupId: m,
    isPanelCollapsed: z,
    isPanelExpanded: T,
    reevaluatePanelConstraints: L,
    registerPanel: H,
    registerResizeHandle: W,
    resizePanel: B,
    startDragging: M,
    stopDragging: j,
    unregisterPanel: ne,
    panelGroupElement: g.current
  }), [E, h, r, R, k, A, m, z, T, L, H, W, B, M, j, ne]), $ = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return mr(ui.Provider, {
    value: re
  }, mr(u, {
    ...d,
    children: t,
    className: n,
    id: a,
    ref: g,
    style: {
      ...$,
      ...l
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": m
  }));
}
const vS = K0((e, t) => mr(mS, {
  ...e,
  forwardedRef: t
}));
mS.displayName = "PanelGroup";
vS.displayName = "forwardRef(PanelGroup)";
function Jn(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function xn(e, t, n) {
  const r = Jn(e, t), a = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: a
  };
}
function Sz({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  _n(() => {
    if (e || n == null || r == null)
      return;
    const o = pi(t, r);
    if (o == null)
      return;
    const a = (i) => {
      if (!i.defaultPrevented)
        switch (i.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            i.preventDefault(), n(i);
            break;
          }
          case "F6": {
            i.preventDefault();
            const s = o.getAttribute("data-panel-group-id");
            fe(s, `No group element found for id "${s}"`);
            const c = oo(s, r), l = sS(s, t, r);
            fe(l !== null, `No resize element found for id "${t}"`);
            const u = i.shiftKey ? l > 0 ? l - 1 : c.length - 1 : l + 1 < c.length ? l + 1 : 0;
            c[u].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", a), () => {
      o.removeEventListener("keydown", a);
    };
  }, [r, e, t, n]);
}
function hS({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: o,
  onBlur: a,
  onDragging: i,
  onFocus: s,
  style: c = {},
  tabIndex: l = 0,
  tagName: u = "div",
  ...d
}) {
  var m, g;
  const h = Ze(null), v = Ze({
    onDragging: i
  });
  _n(() => {
    v.current.onDragging = i;
  });
  const b = Y0(ui);
  if (b === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: y,
    groupId: w,
    registerResizeHandle: x,
    startDragging: S,
    stopDragging: _,
    panelGroupElement: P
  } = b, C = Ff(o), [E, R] = or("inactive"), [k, A] = or(!1), [z, T] = or(null), H = Ze({
    state: E
  });
  Pn(() => {
    H.current.state = E;
  }), _n(() => {
    if (n)
      T(null);
    else {
      const M = x(C);
      T(() => M);
    }
  }, [n, C, x]);
  const W = (m = r == null ? void 0 : r.coarse) !== null && m !== void 0 ? m : 15, B = (g = r == null ? void 0 : r.fine) !== null && g !== void 0 ? g : 5;
  return _n(() => {
    if (n || z == null)
      return;
    const M = h.current;
    return fe(M, "Element ref not attached"), cz(C, M, y, {
      coarse: W,
      fine: B
    }, (ne, re, $) => {
      if (re)
        switch (ne) {
          case "down": {
            R("drag"), fe($, 'Expected event to be defined for "down" action'), S(C, $);
            const {
              onDragging: O
            } = v.current;
            O && O(!0);
            break;
          }
          case "move": {
            const {
              state: O
            } = H.current;
            O !== "drag" && R("hover"), fe($, 'Expected event to be defined for "move" action'), z($);
            break;
          }
          case "up": {
            R("hover"), _();
            const {
              onDragging: O
            } = v.current;
            O && O(!1);
            break;
          }
        }
      else
        R("inactive");
    });
  }, [W, y, n, B, x, C, z, S, _]), Sz({
    disabled: n,
    handleId: C,
    resizeHandler: z,
    panelGroupElement: P
  }), mr(u, {
    ...d,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      A(!1), a == null || a();
    },
    onFocus: () => {
      A(!0), s == null || s();
    },
    ref: h,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...c
    },
    tabIndex: l,
    // CSS selectors
    "data-panel-group-direction": y,
    "data-panel-group-id": w,
    "data-resize-handle": "",
    "data-resize-handle-active": E === "drag" ? "pointer" : k ? "keyboard" : void 0,
    "data-resize-handle-state": E,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": C
  });
}
hS.displayName = "PanelResizeHandle";
function t5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    vS,
    {
      "data-slot": "resizable-panel-group",
      className: I(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        e
      ),
      ...t
    }
  );
}
function n5({
  ...e
}) {
  return /* @__PURE__ */ f(Z0, { "data-slot": "resizable-panel", ...e });
}
function r5({
  withHandle: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ f(
    hS,
    {
      "data-slot": "resizable-handle",
      className: I(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        t
      ),
      ...n,
      children: e && /* @__PURE__ */ f("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ f(X_, { className: "size-2.5" }) })
    }
  );
}
function ao(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Cz(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var Hf = "ScrollArea", [gS] = Pe(Hf), [_z, ft] = gS(Hf), bS = p.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = p.useState(null), [l, u] = p.useState(null), [d, m] = p.useState(null), [g, h] = p.useState(null), [v, b] = p.useState(null), [y, w] = p.useState(0), [x, S] = p.useState(0), [_, P] = p.useState(!1), [C, E] = p.useState(!1), R = se(t, (A) => c(A)), k = Ct(o);
    return /* @__PURE__ */ f(
      _z,
      {
        scope: n,
        type: r,
        dir: k,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: l,
        onViewportChange: u,
        content: d,
        onContentChange: m,
        scrollbarX: g,
        onScrollbarXChange: h,
        scrollbarXEnabled: _,
        onScrollbarXEnabledChange: P,
        scrollbarY: v,
        onScrollbarYChange: b,
        scrollbarYEnabled: C,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: w,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ f(
          X.div,
          {
            dir: k,
            ...i,
            ref: R,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
bS.displayName = Hf;
var yS = "ScrollAreaViewport", wS = p.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, i = ft(yS, n), s = p.useRef(null), c = se(t, s, i.onViewportChange);
    return /* @__PURE__ */ ie(Le, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ f(
        X.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: c,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ f("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
wS.displayName = yS;
var Ft = "ScrollAreaScrollbar", xS = p.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ft(Ft, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return p.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ f(Pz, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ f(Ez, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ f(SS, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ f(Wf, { ...r, ref: t }) : null;
  }
);
xS.displayName = Ft;
var Pz = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ft(Ft, e.__scopeScrollArea), [a, i] = p.useState(!1);
  return p.useEffect(() => {
    const s = o.scrollArea;
    let c = 0;
    if (s) {
      const l = () => {
        window.clearTimeout(c), i(!0);
      }, u = () => {
        c = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", l), s.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), s.removeEventListener("pointerenter", l), s.removeEventListener("pointerleave", u);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ f(Ee, { present: n || a, children: /* @__PURE__ */ f(
    SS,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Ez = p.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ft(Ft, e.__scopeScrollArea), a = e.orientation === "horizontal", i = vi(() => c("SCROLL_END"), 100), [s, c] = Cz("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return p.useEffect(() => {
    if (s === "idle") {
      const l = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(l);
    }
  }, [s, o.scrollHideDelay, c]), p.useEffect(() => {
    const l = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let d = l[u];
      const m = () => {
        const g = l[u];
        d !== g && (c("SCROLL"), i()), d = g;
      };
      return l.addEventListener("scroll", m), () => l.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, c, i]), /* @__PURE__ */ f(Ee, { present: n || s !== "hidden", children: /* @__PURE__ */ f(
    Wf,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: q(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: q(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), SS = p.forwardRef((e, t) => {
  const n = ft(Ft, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = p.useState(!1), s = e.orientation === "horizontal", c = vi(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? l : u);
    }
  }, 10);
  return vr(n.viewport, c), vr(n.content, c), /* @__PURE__ */ f(Ee, { present: r || a, children: /* @__PURE__ */ f(
    Wf,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Wf = p.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = ft(Ft, e.__scopeScrollArea), a = p.useRef(null), i = p.useRef(0), [s, c] = p.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = RS(s.viewport, s.content), u = {
    ...r,
    sizes: s,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function d(m, g) {
    return Dz(m, i.current, s, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ f(
    Rz,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, g = Pg(m, s, o.dir);
          a.current.style.transform = `translate3d(${g}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = d(m, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ f(
    Mz,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, g = Pg(m, s);
          a.current.style.transform = `translate3d(0, ${g}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = d(m));
      }
    }
  ) : null;
}), Rz = p.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = ft(Ft, e.__scopeScrollArea), [i, s] = p.useState(), c = p.useRef(null), l = se(t, c, a.onScrollbarXChange);
  return p.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ f(
    _S,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": mi(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
      onDragScroll: (u) => e.onDragScroll(u.x),
      onWheelScroll: (u, d) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + u.deltaX;
          e.onWheelScroll(m), TS(m, d) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Ma(i.paddingLeft),
            paddingEnd: Ma(i.paddingRight)
          }
        });
      }
    }
  );
}), Mz = p.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = ft(Ft, e.__scopeScrollArea), [i, s] = p.useState(), c = p.useRef(null), l = se(t, c, a.onScrollbarYChange);
  return p.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ f(
    _S,
    {
      "data-orientation": "vertical",
      ...o,
      ref: l,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": mi(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
      onDragScroll: (u) => e.onDragScroll(u.y),
      onWheelScroll: (u, d) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + u.deltaY;
          e.onWheelScroll(m), TS(m, d) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Ma(i.paddingTop),
            paddingEnd: Ma(i.paddingBottom)
          }
        });
      }
    }
  );
}), [Tz, CS] = gS(Ft), _S = p.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: c,
    onDragScroll: l,
    onWheelScroll: u,
    onResize: d,
    ...m
  } = e, g = ft(Ft, n), [h, v] = p.useState(null), b = se(t, (R) => v(R)), y = p.useRef(null), w = p.useRef(""), x = g.viewport, S = r.content - r.viewport, _ = _e(u), P = _e(c), C = vi(d, 10);
  function E(R) {
    if (y.current) {
      const k = R.clientX - y.current.left, A = R.clientY - y.current.top;
      l({ x: k, y: A });
    }
  }
  return p.useEffect(() => {
    const R = (k) => {
      const A = k.target;
      (h == null ? void 0 : h.contains(A)) && _(k, S);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [x, h, S, _]), p.useEffect(P, [r, P]), vr(h, C), vr(g.content, C), /* @__PURE__ */ f(
    Tz,
    {
      scope: n,
      scrollbar: h,
      hasThumb: o,
      onThumbChange: _e(a),
      onThumbPointerUp: _e(i),
      onThumbPositionChange: P,
      onThumbPointerDown: _e(s),
      children: /* @__PURE__ */ f(
        X.div,
        {
          ...m,
          ref: b,
          style: { position: "absolute", ...m.style },
          onPointerDown: q(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), y.current = h.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), E(R));
          }),
          onPointerMove: q(e.onPointerMove, E),
          onPointerUp: q(e.onPointerUp, (R) => {
            const k = R.target;
            k.hasPointerCapture(R.pointerId) && k.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = w.current, g.viewport && (g.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), Ra = "ScrollAreaThumb", PS = p.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = CS(Ra, e.__scopeScrollArea);
    return /* @__PURE__ */ f(Ee, { present: n || o.hasThumb, children: /* @__PURE__ */ f(Nz, { ref: t, ...r }) });
  }
), Nz = p.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = ft(Ra, n), i = CS(Ra, n), { onThumbPositionChange: s } = i, c = se(
      t,
      (d) => i.onThumbChange(d)
    ), l = p.useRef(void 0), u = vi(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return p.useEffect(() => {
      const d = a.viewport;
      if (d) {
        const m = () => {
          if (u(), !l.current) {
            const g = Oz(d, s);
            l.current = g, s();
          }
        };
        return s(), d.addEventListener("scroll", m), () => d.removeEventListener("scroll", m);
      }
    }, [a.viewport, u, s]), /* @__PURE__ */ f(
      X.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: q(e.onPointerDownCapture, (d) => {
          const g = d.target.getBoundingClientRect(), h = d.clientX - g.left, v = d.clientY - g.top;
          i.onThumbPointerDown({ x: h, y: v });
        }),
        onPointerUp: q(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
PS.displayName = Ra;
var Vf = "ScrollAreaCorner", ES = p.forwardRef(
  (e, t) => {
    const n = ft(Vf, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ f(Az, { ...e, ref: t }) : null;
  }
);
ES.displayName = Vf;
var Az = p.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = ft(Vf, n), [a, i] = p.useState(0), [s, c] = p.useState(0), l = !!(a && s);
  return vr(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), vr(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), i(u);
  }), l ? /* @__PURE__ */ f(
    X.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Ma(e) {
  return e ? parseInt(e, 10) : 0;
}
function RS(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function mi(e) {
  const t = RS(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Dz(e, t, n, r = "ltr") {
  const o = mi(n), a = o / 2, i = t || a, s = o - i, c = n.scrollbar.paddingStart + i, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return MS([c, l], d)(e);
}
function Pg(e, t, n = "ltr") {
  const r = mi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, c = n === "ltr" ? [0, i] : [i * -1, 0], l = ao(e, c);
  return MS([0, i], [0, s])(l);
}
function MS(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function TS(e, t) {
  return e > 0 && e < t;
}
var Oz = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function vi(e, t) {
  const n = _e(e), r = p.useRef(0);
  return p.useEffect(() => () => window.clearTimeout(r.current), []), p.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function vr(e, t) {
  const n = _e(t);
  Oe(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var Iz = bS, kz = wS, Lz = ES;
function o5({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ ie(
    Iz,
    {
      "data-slot": "scroll-area",
      className: I("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ f(
          kz,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ f($z, {}),
        /* @__PURE__ */ f(Lz, {})
      ]
    }
  );
}
function $z({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ f(
    xS,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: I(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ f(
        PS,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
var Fz = [" ", "Enter", "ArrowUp", "ArrowDown"], zz = [" ", "Enter"], Io = "Select", [hi, gi, Bz] = sn(Io), [Pr] = Pe(Io, [
  Bz,
  Lt
]), bi = Lt(), [qz, pn] = Pr(Io), [Hz, Wz] = Pr(Io), NS = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: c,
    dir: l,
    name: u,
    autoComplete: d,
    disabled: m,
    required: g,
    form: h
  } = e, v = bi(t), [b, y] = p.useState(null), [w, x] = p.useState(null), [S, _] = p.useState(!1), P = Ct(l), [C = !1, E] = De({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [R, k] = De({
    prop: i,
    defaultProp: s,
    onChange: c
  }), A = p.useRef(null), z = b ? h || !!b.closest("form") : !0, [T, H] = p.useState(/* @__PURE__ */ new Set()), W = Array.from(T).map((B) => B.props.value).join(";");
  return /* @__PURE__ */ f(Co, { ...v, children: /* @__PURE__ */ ie(
    qz,
    {
      required: g,
      scope: t,
      trigger: b,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: x,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: _,
      contentId: Me(),
      value: R,
      onValueChange: k,
      open: C,
      onOpenChange: E,
      dir: P,
      triggerPointerDownPosRef: A,
      disabled: m,
      children: [
        /* @__PURE__ */ f(hi.Provider, { scope: t, children: /* @__PURE__ */ f(
          Hz,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: p.useCallback((B) => {
              H((L) => new Set(L).add(B));
            }, []),
            onNativeOptionRemove: p.useCallback((B) => {
              H((L) => {
                const M = new Set(L);
                return M.delete(B), M;
              });
            }, []),
            children: n
          }
        ) }),
        z ? /* @__PURE__ */ ie(
          nC,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: u,
            autoComplete: d,
            value: R,
            onChange: (B) => k(B.target.value),
            disabled: m,
            form: h,
            children: [
              R === void 0 ? /* @__PURE__ */ f("option", { value: "" }) : null,
              Array.from(T)
            ]
          },
          W
        ) : null
      ]
    }
  ) });
};
NS.displayName = Io;
var AS = "SelectTrigger", DS = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = bi(n), i = pn(AS, n), s = i.disabled || r, c = se(t, i.onTriggerChange), l = gi(n), u = p.useRef("touch"), [d, m, g] = rC((v) => {
      const b = l().filter((x) => !x.disabled), y = b.find((x) => x.value === i.value), w = oC(b, v, y);
      w !== void 0 && i.onValueChange(w.value);
    }), h = (v) => {
      s || (i.onOpenChange(!0), g()), v && (i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ f(Cr, { asChild: !0, ...a, children: /* @__PURE__ */ f(
      X.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": tC(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: q(o.onClick, (v) => {
          v.currentTarget.focus(), u.current !== "mouse" && h(v);
        }),
        onPointerDown: q(o.onPointerDown, (v) => {
          u.current = v.pointerType;
          const b = v.target;
          b.hasPointerCapture(v.pointerId) && b.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (h(v), v.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (v) => {
          const b = d.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && m(v.key), !(b && v.key === " ") && Fz.includes(v.key) && (h(), v.preventDefault());
        })
      }
    ) });
  }
);
DS.displayName = AS;
var OS = "SelectValue", IS = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, c = pn(OS, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = se(t, c.onValueNodeChange);
    return Oe(() => {
      l(u);
    }, [l, u]), /* @__PURE__ */ f(
      X.span,
      {
        ...s,
        ref: d,
        style: { pointerEvents: "none" },
        children: tC(c.value) ? /* @__PURE__ */ f(Le, { children: i }) : a
      }
    );
  }
);
IS.displayName = OS;
var Vz = "SelectIcon", kS = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ f(X.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
kS.displayName = Vz;
var Gz = "SelectPortal", LS = (e) => /* @__PURE__ */ f(kn, { asChild: !0, ...e });
LS.displayName = Gz;
var Dn = "SelectContent", $S = p.forwardRef(
  (e, t) => {
    const n = pn(Dn, e.__scopeSelect), [r, o] = p.useState();
    if (Oe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Da.createPortal(
        /* @__PURE__ */ f(FS, { scope: e.__scopeSelect, children: /* @__PURE__ */ f(hi.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ f(zS, { ...e, ref: t });
  }
);
$S.displayName = Dn;
var ht = 10, [FS, mn] = Pr(Dn), jz = "SelectContentImpl", zS = p.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: h,
      hideWhenDetached: v,
      avoidCollisions: b,
      //
      ...y
    } = e, w = pn(Dn, n), [x, S] = p.useState(null), [_, P] = p.useState(null), C = se(t, (D) => S(D)), [E, R] = p.useState(null), [k, A] = p.useState(
      null
    ), z = gi(n), [T, H] = p.useState(!1), W = p.useRef(!1);
    p.useEffect(() => {
      if (x) return $a(x);
    }, [x]), ka();
    const B = p.useCallback(
      (D) => {
        const [K, ...Q] = z().map((U) => U.ref.current), [Z] = Q.slice(-1), J = document.activeElement;
        for (const U of D)
          if (U === J || (U == null || U.scrollIntoView({ block: "nearest" }), U === K && _ && (_.scrollTop = 0), U === Z && _ && (_.scrollTop = _.scrollHeight), U == null || U.focus(), document.activeElement !== J)) return;
      },
      [z, _]
    ), L = p.useCallback(
      () => B([E, x]),
      [B, E, x]
    );
    p.useEffect(() => {
      T && L();
    }, [T, L]);
    const { onOpenChange: M, triggerPointerDownPosRef: j } = w;
    p.useEffect(() => {
      if (x) {
        let D = { x: 0, y: 0 };
        const K = (Z) => {
          var J, U;
          D = {
            x: Math.abs(Math.round(Z.pageX) - (((J = j.current) == null ? void 0 : J.x) ?? 0)),
            y: Math.abs(Math.round(Z.pageY) - (((U = j.current) == null ? void 0 : U.y) ?? 0))
          };
        }, Q = (Z) => {
          D.x <= 10 && D.y <= 10 ? Z.preventDefault() : x.contains(Z.target) || M(!1), document.removeEventListener("pointermove", K), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", K), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", K), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [x, M, j]), p.useEffect(() => {
      const D = () => M(!1);
      return window.addEventListener("blur", D), window.addEventListener("resize", D), () => {
        window.removeEventListener("blur", D), window.removeEventListener("resize", D);
      };
    }, [M]);
    const [ne, re] = rC((D) => {
      const K = z().filter((J) => !J.disabled), Q = K.find((J) => J.ref.current === document.activeElement), Z = oC(K, D, Q);
      Z && setTimeout(() => Z.ref.current.focus());
    }), $ = p.useCallback(
      (D, K, Q) => {
        const Z = !W.current && !Q;
        (w.value !== void 0 && w.value === K || Z) && (R(D), Z && (W.current = !0));
      },
      [w.value]
    ), O = p.useCallback(() => x == null ? void 0 : x.focus(), [x]), V = p.useCallback(
      (D, K, Q) => {
        const Z = !W.current && !Q;
        (w.value !== void 0 && w.value === K || Z) && A(D);
      },
      [w.value]
    ), G = r === "popper" ? Ou : BS, Y = G === Ou ? {
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: h,
      hideWhenDetached: v,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ f(
      FS,
      {
        scope: n,
        content: x,
        viewport: _,
        onViewportChange: P,
        itemRefCallback: $,
        selectedItem: E,
        onItemLeave: O,
        itemTextRefCallback: V,
        focusSelectedItem: L,
        selectedItemText: k,
        position: r,
        isPositioned: T,
        searchRef: ne,
        children: /* @__PURE__ */ f(so, { as: at, allowPinchZoom: !0, children: /* @__PURE__ */ f(
          io,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (D) => {
              D.preventDefault();
            },
            onUnmountAutoFocus: q(o, (D) => {
              var K;
              (K = w.trigger) == null || K.focus({ preventScroll: !0 }), D.preventDefault();
            }),
            children: /* @__PURE__ */ f(
              cn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (D) => D.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ f(
                  G,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (D) => D.preventDefault(),
                    ...y,
                    ...Y,
                    onPlaced: () => H(!0),
                    ref: C,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: q(y.onKeyDown, (D) => {
                      const K = D.ctrlKey || D.altKey || D.metaKey;
                      if (D.key === "Tab" && D.preventDefault(), !K && D.key.length === 1 && re(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
                        let Z = z().filter((J) => !J.disabled).map((J) => J.ref.current);
                        if (["ArrowUp", "End"].includes(D.key) && (Z = Z.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
                          const J = D.target, U = Z.indexOf(J);
                          Z = Z.slice(U + 1);
                        }
                        setTimeout(() => B(Z)), D.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
zS.displayName = jz;
var Uz = "SelectItemAlignedPosition", BS = p.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = pn(Dn, n), i = mn(Dn, n), [s, c] = p.useState(null), [l, u] = p.useState(null), d = se(t, (C) => u(C)), m = gi(n), g = p.useRef(!1), h = p.useRef(!0), { viewport: v, selectedItem: b, selectedItemText: y, focusSelectedItem: w } = i, x = p.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && v && b && y) {
      const C = a.trigger.getBoundingClientRect(), E = l.getBoundingClientRect(), R = a.valueNode.getBoundingClientRect(), k = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const J = k.left - E.left, U = R.left - J, te = C.left - U, N = C.width + te, ee = Math.max(N, E.width), ue = window.innerWidth - ht, pe = ao(U, [
          ht,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ht, ue - ee)
        ]);
        s.style.minWidth = N + "px", s.style.left = pe + "px";
      } else {
        const J = E.right - k.right, U = window.innerWidth - R.right - J, te = window.innerWidth - C.right - U, N = C.width + te, ee = Math.max(N, E.width), ue = window.innerWidth - ht, pe = ao(U, [
          ht,
          Math.max(ht, ue - ee)
        ]);
        s.style.minWidth = N + "px", s.style.right = pe + "px";
      }
      const A = m(), z = window.innerHeight - ht * 2, T = v.scrollHeight, H = window.getComputedStyle(l), W = parseInt(H.borderTopWidth, 10), B = parseInt(H.paddingTop, 10), L = parseInt(H.borderBottomWidth, 10), M = parseInt(H.paddingBottom, 10), j = W + B + T + M + L, ne = Math.min(b.offsetHeight * 5, j), re = window.getComputedStyle(v), $ = parseInt(re.paddingTop, 10), O = parseInt(re.paddingBottom, 10), V = C.top + C.height / 2 - ht, G = z - V, Y = b.offsetHeight / 2, D = b.offsetTop + Y, K = W + B + D, Q = j - K;
      if (K <= V) {
        const J = A.length > 0 && b === A[A.length - 1].ref.current;
        s.style.bottom = "0px";
        const U = l.clientHeight - v.offsetTop - v.offsetHeight, te = Math.max(
          G,
          Y + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (J ? O : 0) + U + L
        ), N = K + te;
        s.style.height = N + "px";
      } else {
        const J = A.length > 0 && b === A[0].ref.current;
        s.style.top = "0px";
        const te = Math.max(
          V,
          W + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (J ? $ : 0) + Y
        ) + Q;
        s.style.height = te + "px", v.scrollTop = K - V + v.offsetTop;
      }
      s.style.margin = `${ht}px 0`, s.style.minHeight = ne + "px", s.style.maxHeight = z + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    l,
    v,
    b,
    y,
    a.dir,
    r
  ]);
  Oe(() => x(), [x]);
  const [S, _] = p.useState();
  Oe(() => {
    l && _(window.getComputedStyle(l).zIndex);
  }, [l]);
  const P = p.useCallback(
    (C) => {
      C && h.current === !0 && (x(), w == null || w(), h.current = !1);
    },
    [x, w]
  );
  return /* @__PURE__ */ f(
    Yz,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ f(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ f(
            X.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
BS.displayName = Uz;
var Kz = "SelectPopperPosition", Ou = p.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ht,
    ...a
  } = e, i = bi(n);
  return /* @__PURE__ */ f(
    _o,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ou.displayName = Kz;
var [Yz, Gf] = Pr(Dn, {}), Iu = "SelectViewport", qS = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = mn(Iu, n), i = Gf(Iu, n), s = se(t, a.onViewportChange), c = p.useRef(0);
    return /* @__PURE__ */ ie(Le, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ f(hi.Slot, { scope: n, children: /* @__PURE__ */ f(
        X.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: q(o.onScroll, (l) => {
            const u = l.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: m } = i;
            if (m != null && m.current && d) {
              const g = Math.abs(c.current - u.scrollTop);
              if (g > 0) {
                const h = window.innerHeight - ht * 2, v = parseFloat(d.style.minHeight), b = parseFloat(d.style.height), y = Math.max(v, b);
                if (y < h) {
                  const w = y + g, x = Math.min(h, w), S = w - x;
                  d.style.height = x + "px", d.style.bottom === "0px" && (u.scrollTop = S > 0 ? S : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
qS.displayName = Iu;
var HS = "SelectGroup", [Xz, Qz] = Pr(HS), WS = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Me();
    return /* @__PURE__ */ f(Xz, { scope: n, id: o, children: /* @__PURE__ */ f(X.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
WS.displayName = HS;
var VS = "SelectLabel", GS = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Qz(VS, n);
    return /* @__PURE__ */ f(X.div, { id: o.id, ...r, ref: t });
  }
);
GS.displayName = VS;
var Ta = "SelectItem", [Zz, jS] = Pr(Ta), US = p.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = pn(Ta, n), c = mn(Ta, n), l = s.value === r, [u, d] = p.useState(a ?? ""), [m, g] = p.useState(!1), h = se(
      t,
      (w) => {
        var x;
        return (x = c.itemRefCallback) == null ? void 0 : x.call(c, w, r, o);
      }
    ), v = Me(), b = p.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f(
      Zz,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: l,
        onItemTextChange: p.useCallback((w) => {
          d((x) => x || ((w == null ? void 0 : w.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f(
          hi.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ f(
              X.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": l && m,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: h,
                onFocus: q(i.onFocus, () => g(!0)),
                onBlur: q(i.onBlur, () => g(!1)),
                onClick: q(i.onClick, () => {
                  b.current !== "mouse" && y();
                }),
                onPointerUp: q(i.onPointerUp, () => {
                  b.current === "mouse" && y();
                }),
                onPointerDown: q(i.onPointerDown, (w) => {
                  b.current = w.pointerType;
                }),
                onPointerMove: q(i.onPointerMove, (w) => {
                  var x;
                  b.current = w.pointerType, o ? (x = c.onItemLeave) == null || x.call(c) : b.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: q(i.onPointerLeave, (w) => {
                  var x;
                  w.currentTarget === document.activeElement && ((x = c.onItemLeave) == null || x.call(c));
                }),
                onKeyDown: q(i.onKeyDown, (w) => {
                  var S;
                  ((S = c.searchRef) == null ? void 0 : S.current) !== "" && w.key === " " || (zz.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
US.displayName = Ta;
var Vr = "SelectItemText", KS = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = pn(Vr, n), s = mn(Vr, n), c = jS(Vr, n), l = Wz(Vr, n), [u, d] = p.useState(null), m = se(
      t,
      (y) => d(y),
      c.onItemTextChange,
      (y) => {
        var w;
        return (w = s.itemTextRefCallback) == null ? void 0 : w.call(s, y, c.value, c.disabled);
      }
    ), g = u == null ? void 0 : u.textContent, h = p.useMemo(
      () => /* @__PURE__ */ f("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: b } = l;
    return Oe(() => (v(h), () => b(h)), [v, b, h]), /* @__PURE__ */ ie(Le, { children: [
      /* @__PURE__ */ f(X.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Da.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
KS.displayName = Vr;
var YS = "SelectItemIndicator", XS = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return jS(YS, n).isSelected ? /* @__PURE__ */ f(X.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
XS.displayName = YS;
var ku = "SelectScrollUpButton", QS = p.forwardRef((e, t) => {
  const n = mn(ku, e.__scopeSelect), r = Gf(ku, e.__scopeSelect), [o, a] = p.useState(!1), i = se(t, r.onScrollButtonChange);
  return Oe(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    JS,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = n;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
QS.displayName = ku;
var Lu = "SelectScrollDownButton", ZS = p.forwardRef((e, t) => {
  const n = mn(Lu, e.__scopeSelect), r = Gf(Lu, e.__scopeSelect), [o, a] = p.useState(!1), i = se(t, r.onScrollButtonChange);
  return Oe(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < l;
        a(u);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    JS,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = n;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
ZS.displayName = Lu;
var JS = p.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = mn("SelectScrollButton", n), i = p.useRef(null), s = gi(n), c = p.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return p.useEffect(() => () => c(), [c]), Oe(() => {
    var u;
    const l = s().find((d) => d.ref.current === document.activeElement);
    (u = l == null ? void 0 : l.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ f(
    X.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: q(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: q(o.onPointerMove, () => {
        var l;
        (l = a.onItemLeave) == null || l.call(a), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: q(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), Jz = "SelectSeparator", eC = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ f(X.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
eC.displayName = Jz;
var $u = "SelectArrow", eB = p.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = bi(n), a = pn($u, n), i = mn($u, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ f(Po, { ...o, ...r, ref: t }) : null;
  }
);
eB.displayName = $u;
function tC(e) {
  return e === "" || e === void 0;
}
var nC = p.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = p.useRef(null), a = se(t, o), i = wr(n);
    return p.useEffect(() => {
      const s = o.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== n && u) {
        const d = new Event("change", { bubbles: !0 });
        u.call(s, n), s.dispatchEvent(d);
      }
    }, [i, n]), /* @__PURE__ */ f(Pf, { asChild: !0, children: /* @__PURE__ */ f("select", { ...r, ref: a, defaultValue: n }) });
  }
);
nC.displayName = "BubbleSelect";
function rC(e) {
  const t = _e(e), n = p.useRef(""), r = p.useRef(0), o = p.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), (function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(s);
    },
    [t]
  ), a = p.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return p.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function oC(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = tB(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== n));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function tB(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var nB = NS, rB = DS, oB = IS, aB = kS, iB = LS, sB = $S, cB = qS, lB = WS, uB = GS, dB = US, fB = KS, pB = XS, mB = QS, vB = ZS, hB = eC;
function a5({
  ...e
}) {
  return /* @__PURE__ */ f(nB, { "data-slot": "select", ...e });
}
function i5({
  ...e
}) {
  return /* @__PURE__ */ f(lB, { "data-slot": "select-group", ...e });
}
function s5({
  ...e
}) {
  return /* @__PURE__ */ f(oB, { "data-slot": "select-value", ...e });
}
function c5({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ ie(
    rB,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: I(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f(aB, { asChild: !0, children: /* @__PURE__ */ f(ed, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function l5({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ f(iB, { children: /* @__PURE__ */ ie(
    sB,
    {
      "data-slot": "select-content",
      className: I(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ f(gB, {}),
        /* @__PURE__ */ f(
          cB,
          {
            className: I(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ f(bB, {})
      ]
    }
  ) });
}
function u5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    uB,
    {
      "data-slot": "select-label",
      className: I("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function d5({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ ie(
    dB,
    {
      "data-slot": "select-item",
      className: I(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ f("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f(pB, { children: /* @__PURE__ */ f(Vg, { className: "size-4" }) }) }),
        /* @__PURE__ */ f(fB, { children: t })
      ]
    }
  );
}
function f5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    hB,
    {
      "data-slot": "select-separator",
      className: I("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function gB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    mB,
    {
      "data-slot": "select-scroll-up-button",
      className: I(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(G_, { className: "size-4" })
    }
  );
}
function bB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    vB,
    {
      "data-slot": "select-scroll-down-button",
      className: I(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(ed, { className: "size-4" })
    }
  );
}
var yB = "Separator", Eg = "horizontal", wB = ["horizontal", "vertical"], aC = p.forwardRef((e, t) => {
  const { decorative: n, orientation: r = Eg, ...o } = e, a = xB(r) ? r : Eg, s = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ f(
    X.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
aC.displayName = yB;
function xB(e) {
  return wB.includes(e);
}
var SB = aC;
function CB({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f(
    SB,
    {
      "data-slot": "separator-root",
      decorative: n,
      orientation: t,
      className: I(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...r
    }
  );
}
function _B({ ...e }) {
  return /* @__PURE__ */ f(co, { "data-slot": "sheet", ...e });
}
function p5({
  ...e
}) {
  return /* @__PURE__ */ f(Fa, { "data-slot": "sheet-trigger", ...e });
}
function m5({
  ...e
}) {
  return /* @__PURE__ */ f(Ln, { "data-slot": "sheet-close", ...e });
}
function PB({
  ...e
}) {
  return /* @__PURE__ */ f(lo, { "data-slot": "sheet-portal", ...e });
}
function EB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    uo,
    {
      "data-slot": "sheet-overlay",
      className: I(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function RB({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ ie(PB, { children: [
    /* @__PURE__ */ f(EB, {}),
    /* @__PURE__ */ ie(
      fo,
      {
        "data-slot": "sheet-content",
        className: I(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          n === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          n === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          n === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ ie(Ln, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ f(Ug, { className: "size-4" }),
            /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function MB({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sheet-header",
      className: I("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function v5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sheet-footer",
      className: I("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function TB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    za,
    {
      "data-slot": "sheet-title",
      className: I("text-foreground font-semibold", e),
      ...t
    }
  );
}
function NB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Ba,
    {
      "data-slot": "sheet-description",
      className: I("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const Zl = 768;
function AB() {
  const [e, t] = p.useState(
    void 0
  );
  return p.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Zl - 1}px)`), r = () => {
      t(window.innerWidth < Zl);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Zl), () => n.removeEventListener("change", r);
  }, []), !!e;
}
function h5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "skeleton",
      className: I("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
var [yi] = Pe("Tooltip", [
  Lt
]), wi = Lt(), iC = "TooltipProvider", DB = 700, Fu = "tooltip.open", [OB, jf] = yi(iC), sC = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = DB,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, [i, s] = p.useState(!0), c = p.useRef(!1), l = p.useRef(0);
  return p.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ f(
    OB,
    {
      scope: t,
      isOpenDelayed: i,
      delayDuration: n,
      onOpen: p.useCallback(() => {
        window.clearTimeout(l.current), s(!1);
      }, []),
      onClose: p.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: p.useCallback((u) => {
        c.current = u;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
sC.displayName = iC;
var xi = "Tooltip", [IB, ko] = yi(xi), cC = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = jf(xi, e.__scopeTooltip), l = wi(t), [u, d] = p.useState(null), m = Me(), g = p.useRef(0), h = i ?? c.disableHoverableContent, v = s ?? c.delayDuration, b = p.useRef(!1), [y = !1, w] = De({
    prop: r,
    defaultProp: o,
    onChange: (C) => {
      C ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Fu))) : c.onClose(), a == null || a(C);
    }
  }), x = p.useMemo(() => y ? b.current ? "delayed-open" : "instant-open" : "closed", [y]), S = p.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, b.current = !1, w(!0);
  }, [w]), _ = p.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, w(!1);
  }, [w]), P = p.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      b.current = !0, w(!0), g.current = 0;
    }, v);
  }, [v, w]);
  return p.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ f(Co, { ...l, children: /* @__PURE__ */ f(
    IB,
    {
      scope: t,
      contentId: m,
      open: y,
      stateAttribute: x,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: p.useCallback(() => {
        c.isOpenDelayed ? P() : S();
      }, [c.isOpenDelayed, P, S]),
      onTriggerLeave: p.useCallback(() => {
        h ? _() : (window.clearTimeout(g.current), g.current = 0);
      }, [_, h]),
      onOpen: S,
      onClose: _,
      disableHoverableContent: h,
      children: n
    }
  ) });
};
cC.displayName = xi;
var zu = "TooltipTrigger", lC = p.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ko(zu, n), a = jf(zu, n), i = wi(n), s = p.useRef(null), c = se(t, s, o.onTriggerChange), l = p.useRef(!1), u = p.useRef(!1), d = p.useCallback(() => l.current = !1, []);
    return p.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ f(Cr, { asChild: !0, ...i, children: /* @__PURE__ */ f(
      X.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: q(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: q(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: q(e.onPointerDown, () => {
          l.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: q(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: q(e.onBlur, o.onClose),
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
lC.displayName = zu;
var Uf = "TooltipPortal", [kB, LB] = yi(Uf, {
  forceMount: void 0
}), uC = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = ko(Uf, t);
  return /* @__PURE__ */ f(kB, { scope: t, forceMount: n, children: /* @__PURE__ */ f(Ee, { present: n || a.open, children: /* @__PURE__ */ f(kn, { asChild: !0, container: o, children: r }) }) });
};
uC.displayName = Uf;
var hr = "TooltipContent", dC = p.forwardRef(
  (e, t) => {
    const n = LB(hr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, i = ko(hr, e.__scopeTooltip);
    return /* @__PURE__ */ f(Ee, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ f(fC, { side: o, ...a, ref: t }) : /* @__PURE__ */ f($B, { side: o, ...a, ref: t }) });
  }
), $B = p.forwardRef((e, t) => {
  const n = ko(hr, e.__scopeTooltip), r = jf(hr, e.__scopeTooltip), o = p.useRef(null), a = se(t, o), [i, s] = p.useState(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, m = p.useCallback(() => {
    s(null), d(!1);
  }, [d]), g = p.useCallback(
    (h, v) => {
      const b = h.currentTarget, y = { x: h.clientX, y: h.clientY }, w = BB(y, b.getBoundingClientRect()), x = qB(y, w), S = HB(v.getBoundingClientRect()), _ = VB([...x, ...S]);
      s(_), d(!0);
    },
    [d]
  );
  return p.useEffect(() => () => m(), [m]), p.useEffect(() => {
    if (c && u) {
      const h = (b) => g(b, u), v = (b) => g(b, c);
      return c.addEventListener("pointerleave", h), u.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", h), u.removeEventListener("pointerleave", v);
      };
    }
  }, [c, u, g, m]), p.useEffect(() => {
    if (i) {
      const h = (v) => {
        const b = v.target, y = { x: v.clientX, y: v.clientY }, w = (c == null ? void 0 : c.contains(b)) || (u == null ? void 0 : u.contains(b)), x = !WB(y, i);
        w ? m() : x && (m(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [c, u, i, l, m]), /* @__PURE__ */ f(fC, { ...e, ref: a });
}), [FB, zB] = yi(xi, { isInside: !1 }), fC = p.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = ko(hr, n), l = wi(n), { onClose: u } = c;
    return p.useEffect(() => (document.addEventListener(Fu, u), () => document.removeEventListener(Fu, u)), [u]), p.useEffect(() => {
      if (c.trigger) {
        const d = (m) => {
          const g = m.target;
          g != null && g.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ f(
      cn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ ie(
          _o,
          {
            "data-state": c.stateAttribute,
            ...l,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ f(Vu, { children: r }),
              /* @__PURE__ */ f(FB, { scope: n, isInside: !0, children: /* @__PURE__ */ f(o0, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
dC.displayName = hr;
var pC = "TooltipArrow", mC = p.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = wi(n);
    return zB(
      pC,
      n
    ).isInside ? null : /* @__PURE__ */ f(Po, { ...o, ...r, ref: t });
  }
);
mC.displayName = pC;
function BB(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function qB(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function HB(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function WB(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function VB(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), GB(t);
}
function GB(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var jB = sC, UB = cC, KB = lC, YB = uC, XB = dC, QB = mC;
function vC({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ f(
    jB,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function ZB({
  ...e
}) {
  return /* @__PURE__ */ f(vC, { children: /* @__PURE__ */ f(UB, { "data-slot": "tooltip", ...e }) });
}
function JB({
  ...e
}) {
  return /* @__PURE__ */ f(KB, { "data-slot": "tooltip-trigger", ...e });
}
function eq({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ f(YB, { children: /* @__PURE__ */ ie(
    XB,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: I(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f(QB, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const tq = "sidebar_state", nq = 3600 * 24 * 7, rq = "16rem", oq = "18rem", aq = "3rem", iq = "b", hC = p.createContext(null);
function Si() {
  const e = p.useContext(hC);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function g5({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: o,
  children: a,
  ...i
}) {
  const s = AB(), [c, l] = p.useState(!1), [u, d] = p.useState(e), m = t ?? u, g = p.useCallback(
    (y) => {
      const w = typeof y == "function" ? y(m) : y;
      n ? n(w) : d(w), document.cookie = `${tq}=${w}; path=/; max-age=${nq}`;
    },
    [n, m]
  ), h = p.useCallback(() => s ? l((y) => !y) : g((y) => !y), [s, g, l]);
  p.useEffect(() => {
    const y = (w) => {
      w.key === iq && (w.metaKey || w.ctrlKey) && (w.preventDefault(), h());
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [h]);
  const v = m ? "expanded" : "collapsed", b = p.useMemo(
    () => ({
      state: v,
      open: m,
      setOpen: g,
      isMobile: s,
      openMobile: c,
      setOpenMobile: l,
      toggleSidebar: h
    }),
    [v, m, g, s, c, l, h]
  );
  return /* @__PURE__ */ f(hC.Provider, { value: b, children: /* @__PURE__ */ f(vC, { delayDuration: 0, children: /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": rq,
        "--sidebar-width-icon": aq,
        ...o
      },
      className: I(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        r
      ),
      ...i,
      children: a
    }
  ) }) });
}
function b5({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: r,
  children: o,
  ...a
}) {
  const { isMobile: i, state: s, openMobile: c, setOpenMobile: l } = Si();
  return n === "none" ? /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar",
      className: I(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        r
      ),
      ...a,
      children: o
    }
  ) : i ? /* @__PURE__ */ f(_B, { open: c, onOpenChange: l, ...a, children: /* @__PURE__ */ ie(
    RB,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": oq
      },
      side: e,
      children: [
        /* @__PURE__ */ ie(MB, { className: "sr-only", children: [
          /* @__PURE__ */ f(TB, { children: "Sidebar" }),
          /* @__PURE__ */ f(NB, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex h-full w-full flex-col", children: o })
      ]
    }
  ) }) : /* @__PURE__ */ ie(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": s,
      "data-collapsible": s === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: I(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            "data-slot": "sidebar-container",
            className: I(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...a,
            children: /* @__PURE__ */ f(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: o
              }
            )
          }
        )
      ]
    }
  );
}
function y5({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: r } = Si();
  return /* @__PURE__ */ ie(
    sd,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: I("size-7", e),
      onClick: (o) => {
        t == null || t(o), r();
      },
      ...n,
      children: [
        /* @__PURE__ */ f(Z_, {}),
        /* @__PURE__ */ f("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function w5({ className: e, ...t }) {
  const { toggleSidebar: n } = Si();
  return /* @__PURE__ */ f(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: n,
      title: "Toggle Sidebar",
      className: I(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e
      ),
      ...t
    }
  );
}
function x5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: I("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function S5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: I("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function C5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    CB,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: I("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function _5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: I(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function P5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: I("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function E5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: I("group/menu-item relative", e),
      ...t
    }
  );
}
const sq = yr(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function R5({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: o,
  className: a,
  ...i
}) {
  const s = e ? at : "button", { isMobile: c, state: l } = Si(), u = /* @__PURE__ */ f(
    s,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: I(sq({ variant: n, size: r }), a),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ ie(ZB, { children: [
    /* @__PURE__ */ f(JB, { asChild: !0, children: u }),
    /* @__PURE__ */ f(
      eq,
      {
        side: "right",
        align: "center",
        hidden: l !== "collapsed" || c,
        ...o
      }
    )
  ] })) : u;
}
function M5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: I(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function T5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: I("group/menu-sub-item relative", e),
      ...t
    }
  );
}
var gC = ["PageUp", "PageDown"], bC = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], yC = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Er = "Slider", [Bu, cq, lq] = sn(Er), [wC] = Pe(Er, [
  lq
]), [uq, Ci] = wC(Er), xC = p.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: c = 0,
      defaultValue: l = [r],
      value: u,
      onValueChange: d = () => {
      },
      onValueCommit: m = () => {
      },
      inverted: g = !1,
      form: h,
      ...v
    } = e, b = p.useRef(/* @__PURE__ */ new Set()), y = p.useRef(0), x = i === "horizontal" ? dq : fq, [S = [], _] = De({
      prop: u,
      defaultProp: l,
      onChange: (A) => {
        var T;
        (T = [...b.current][y.current]) == null || T.focus(), d(A);
      }
    }), P = p.useRef(S);
    function C(A) {
      const z = gq(S, A);
      k(A, z);
    }
    function E(A) {
      k(A, y.current);
    }
    function R() {
      const A = P.current[y.current];
      S[y.current] !== A && m(S);
    }
    function k(A, z, { commit: T } = { commit: !1 }) {
      const H = xq(a), W = Sq(Math.round((A - r) / a) * a + r, H), B = ao(W, [r, o]);
      _((L = []) => {
        const M = vq(L, B, z);
        if (wq(M, c * a)) {
          y.current = M.indexOf(B);
          const j = String(M) !== String(L);
          return j && T && m(M), j ? M : L;
        } else
          return L;
      });
    }
    return /* @__PURE__ */ f(
      uq,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: s,
        min: r,
        max: o,
        valueIndexToChangeRef: y,
        thumbs: b.current,
        values: S,
        orientation: i,
        form: h,
        children: /* @__PURE__ */ f(Bu.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(Bu.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(
          x,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...v,
            ref: t,
            onPointerDown: q(v.onPointerDown, () => {
              s || (P.current = S);
            }),
            min: r,
            max: o,
            inverted: g,
            onSlideStart: s ? void 0 : C,
            onSlideMove: s ? void 0 : E,
            onSlideEnd: s ? void 0 : R,
            onHomeKeyDown: () => !s && k(r, 0, { commit: !0 }),
            onEndKeyDown: () => !s && k(o, S.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: A, direction: z }) => {
              if (!s) {
                const W = gC.includes(A.key) || A.shiftKey && bC.includes(A.key) ? 10 : 1, B = y.current, L = S[B], M = a * W * z;
                k(L + M, B, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
xC.displayName = Er;
var [SC, CC] = wC(Er, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), dq = p.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: a,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: c,
      onStepKeyDown: l,
      ...u
    } = e, [d, m] = p.useState(null), g = se(t, (x) => m(x)), h = p.useRef(void 0), v = Ct(o), b = v === "ltr", y = b && !a || !b && a;
    function w(x) {
      const S = h.current || d.getBoundingClientRect(), _ = [0, S.width], C = Kf(_, y ? [n, r] : [r, n]);
      return h.current = S, C(x - S.left);
    }
    return /* @__PURE__ */ f(
      SC,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ f(
          _C,
          {
            dir: v,
            "data-orientation": "horizontal",
            ...u,
            ref: g,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (x) => {
              const S = w(x.clientX);
              i == null || i(S);
            },
            onSlideMove: (x) => {
              const S = w(x.clientX);
              s == null || s(S);
            },
            onSlideEnd: () => {
              h.current = void 0, c == null || c();
            },
            onStepKeyDown: (x) => {
              const _ = yC[y ? "from-left" : "from-right"].includes(x.key);
              l == null || l({ event: x, direction: _ ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), fq = p.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: s,
      onStepKeyDown: c,
      ...l
    } = e, u = p.useRef(null), d = se(t, u), m = p.useRef(void 0), g = !o;
    function h(v) {
      const b = m.current || u.current.getBoundingClientRect(), y = [0, b.height], x = Kf(y, g ? [r, n] : [n, r]);
      return m.current = b, x(v - b.top);
    }
    return /* @__PURE__ */ f(
      SC,
      {
        scope: e.__scopeSlider,
        startEdge: g ? "bottom" : "top",
        endEdge: g ? "top" : "bottom",
        size: "height",
        direction: g ? 1 : -1,
        children: /* @__PURE__ */ f(
          _C,
          {
            "data-orientation": "vertical",
            ...l,
            ref: d,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (v) => {
              const b = h(v.clientY);
              a == null || a(b);
            },
            onSlideMove: (v) => {
              const b = h(v.clientY);
              i == null || i(b);
            },
            onSlideEnd: () => {
              m.current = void 0, s == null || s();
            },
            onStepKeyDown: (v) => {
              const y = yC[g ? "from-bottom" : "from-top"].includes(v.key);
              c == null || c({ event: v, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), _C = p.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: s,
      onStepKeyDown: c,
      ...l
    } = e, u = Ci(Er, n);
    return /* @__PURE__ */ f(
      X.span,
      {
        ...l,
        ref: t,
        onKeyDown: q(e.onKeyDown, (d) => {
          d.key === "Home" ? (i(d), d.preventDefault()) : d.key === "End" ? (s(d), d.preventDefault()) : gC.concat(bC).includes(d.key) && (c(d), d.preventDefault());
        }),
        onPointerDown: q(e.onPointerDown, (d) => {
          const m = d.target;
          m.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(m) ? m.focus() : r(d);
        }),
        onPointerMove: q(e.onPointerMove, (d) => {
          d.target.hasPointerCapture(d.pointerId) && o(d);
        }),
        onPointerUp: q(e.onPointerUp, (d) => {
          const m = d.target;
          m.hasPointerCapture(d.pointerId) && (m.releasePointerCapture(d.pointerId), a(d));
        })
      }
    );
  }
), PC = "SliderTrack", EC = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Ci(PC, n);
    return /* @__PURE__ */ f(
      X.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
EC.displayName = PC;
var qu = "SliderRange", RC = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Ci(qu, n), a = CC(qu, n), i = p.useRef(null), s = se(t, i), c = o.values.length, l = o.values.map(
      (m) => TC(m, o.min, o.max)
    ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
    return /* @__PURE__ */ f(
      X.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: s,
        style: {
          ...e.style,
          [a.startEdge]: u + "%",
          [a.endEdge]: d + "%"
        }
      }
    );
  }
);
RC.displayName = qu;
var Hu = "SliderThumb", MC = p.forwardRef(
  (e, t) => {
    const n = cq(e.__scopeSlider), [r, o] = p.useState(null), a = se(t, (s) => o(s)), i = p.useMemo(
      () => r ? n().findIndex((s) => s.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ f(pq, { ...e, ref: a, index: i });
  }
), pq = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...a } = e, i = Ci(Hu, n), s = CC(Hu, n), [c, l] = p.useState(null), u = se(t, (w) => l(w)), d = c ? i.form || !!c.closest("form") : !0, m = wo(c), g = i.values[r], h = g === void 0 ? 0 : TC(g, i.min, i.max), v = hq(r, i.values.length), b = m == null ? void 0 : m[s.size], y = b ? bq(b, h, s.direction) : 0;
    return p.useEffect(() => {
      if (c)
        return i.thumbs.add(c), () => {
          i.thumbs.delete(c);
        };
    }, [c, i.thumbs]), /* @__PURE__ */ ie(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${h}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ f(Bu.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(
            X.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || v,
              "aria-valuemin": i.min,
              "aria-valuenow": g,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...a,
              ref: u,
              style: g === void 0 ? { display: "none" } : e.style,
              onFocus: q(e.onFocus, () => {
                i.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          d && /* @__PURE__ */ f(
            mq,
            {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: g
            },
            r
          )
        ]
      }
    );
  }
);
MC.displayName = Hu;
var mq = (e) => {
  const { value: t, ...n } = e, r = p.useRef(null), o = wr(t);
  return p.useEffect(() => {
    const a = r.current, i = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(i, "value").set;
    if (o !== t && c) {
      const l = new Event("input", { bubbles: !0 });
      c.call(a, t), a.dispatchEvent(l);
    }
  }, [o, t]), /* @__PURE__ */ f("input", { style: { display: "none" }, ...n, ref: r, defaultValue: t });
};
function vq(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, a) => o - a);
}
function TC(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return ao(a, [0, 100]);
}
function hq(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function gq(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function bq(e, t, n) {
  const r = e / 2, a = Kf([0, 50], [0, r]);
  return (r - a(t) * n) * n;
}
function yq(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function wq(e, t) {
  if (t > 0) {
    const n = yq(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Kf(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function xq(e) {
  return (String(e).split(".")[1] || "").length;
}
function Sq(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var Cq = xC, _q = EC, Pq = RC, Eq = MC;
function N5({
  className: e,
  defaultValue: t,
  value: n,
  min: r = 0,
  max: o = 100,
  ...a
}) {
  const i = p.useMemo(
    () => Array.isArray(n) ? n : Array.isArray(t) ? t : [r, o],
    [n, t, r, o]
  );
  return /* @__PURE__ */ ie(
    Cq,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: n,
      min: r,
      max: o,
      className: I(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ f(
          _q,
          {
            "data-slot": "slider-track",
            className: I(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ f(
              Pq,
              {
                "data-slot": "slider-range",
                className: I(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: i.length }, (s, c) => /* @__PURE__ */ f(
          Eq,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          c
        ))
      ]
    }
  );
}
var Yf = "Switch", [Rq] = Pe(Yf), [Mq, Tq] = Rq(Yf), NC = p.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c = "on",
      onCheckedChange: l,
      form: u,
      ...d
    } = e, [m, g] = p.useState(null), h = se(t, (x) => g(x)), v = p.useRef(!1), b = m ? u || !!m.closest("form") : !0, [y = !1, w] = De({
      prop: o,
      defaultProp: a,
      onChange: l
    });
    return /* @__PURE__ */ ie(Mq, { scope: n, checked: y, disabled: s, children: [
      /* @__PURE__ */ f(
        X.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": OC(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...d,
          ref: h,
          onClick: q(e.onClick, (x) => {
            w((S) => !S), b && (v.current = x.isPropagationStopped(), v.current || x.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ f(
        Nq,
        {
          control: m,
          bubbles: !v.current,
          name: r,
          value: c,
          checked: y,
          required: i,
          disabled: s,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
NC.displayName = Yf;
var AC = "SwitchThumb", DC = p.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Tq(AC, n);
    return /* @__PURE__ */ f(
      X.span,
      {
        "data-state": OC(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
DC.displayName = AC;
var Nq = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = p.useRef(null), i = wr(n), s = wo(t);
  return p.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== n && d) {
      const m = new Event("click", { bubbles: r });
      d.call(c, n), c.dispatchEvent(m);
    }
  }, [i, n, r]), /* @__PURE__ */ f(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function OC(e) {
  return e ? "checked" : "unchecked";
}
var Aq = NC, Dq = DC;
function A5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Aq,
    {
      "data-slot": "switch",
      className: I(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(
        Dq,
        {
          "data-slot": "switch-thumb",
          className: I(
            "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function D5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ f(
        "table",
        {
          "data-slot": "table",
          className: I("w-full caption-bottom text-sm", e),
          ...t
        }
      )
    }
  );
}
function O5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "thead",
    {
      "data-slot": "table-header",
      className: I("[&_tr]:border-b", e),
      ...t
    }
  );
}
function I5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "tbody",
    {
      "data-slot": "table-body",
      className: I("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function k5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "tr",
    {
      "data-slot": "table-row",
      className: I(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function L5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "th",
    {
      "data-slot": "table-head",
      className: I(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function $5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "td",
    {
      "data-slot": "table-cell",
      className: I(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
var Xf = "Tabs", [Oq] = Pe(Xf, [
  $t
]), IC = $t(), [Iq, Qf] = Oq(Xf), kC = p.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: c = "automatic",
      ...l
    } = e, u = Ct(s), [d, m] = De({
      prop: r,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ f(
      Iq,
      {
        scope: n,
        baseId: Me(),
        value: d,
        onValueChange: m,
        orientation: i,
        dir: u,
        activationMode: c,
        children: /* @__PURE__ */ f(
          X.div,
          {
            dir: u,
            "data-orientation": i,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
kC.displayName = Xf;
var LC = "TabsList", $C = p.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Qf(LC, n), i = IC(n);
    return /* @__PURE__ */ f(
      Eo,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ f(
          X.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
$C.displayName = LC;
var FC = "TabsTrigger", zC = p.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, i = Qf(FC, n), s = IC(n), c = HC(i.baseId, r), l = WC(i.baseId, r), u = r === i.value;
    return /* @__PURE__ */ f(
      Ro,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ f(
          X.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": l,
            "data-state": u ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: q(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: q(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(r);
            }),
            onFocus: q(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !u && !o && d && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
zC.displayName = FC;
var BC = "TabsContent", qC = p.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e, s = Qf(BC, n), c = HC(s.baseId, r), l = WC(s.baseId, r), u = r === s.value, d = p.useRef(u);
    return p.useEffect(() => {
      const m = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ f(Ee, { present: o || u, children: ({ present: m }) => /* @__PURE__ */ f(
      X.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !m,
        id: l,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: m && a
      }
    ) });
  }
);
qC.displayName = BC;
function HC(e, t) {
  return `${e}-trigger-${t}`;
}
function WC(e, t) {
  return `${e}-content-${t}`;
}
var kq = kC, Lq = $C, $q = zC, Fq = qC;
function F5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    kq,
    {
      "data-slot": "tabs",
      className: I("flex flex-col gap-2", e),
      ...t
    }
  );
}
function z5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Lq,
    {
      "data-slot": "tabs-list",
      className: I(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
        e
      ),
      ...t
    }
  );
}
function B5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    $q,
    {
      "data-slot": "tabs-trigger",
      className: I(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function q5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Fq,
    {
      "data-slot": "tabs-content",
      className: I("flex-1 outline-none", e),
      ...t
    }
  );
}
function H5({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "textarea",
    {
      "data-slot": "textarea",
      className: I(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ...t
    }
  );
}
var zq = "Toggle", Zf = p.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [i = !1, s] = De({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ f(
    X.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: q(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
Zf.displayName = zq;
var Bq = Zf, Rr = "ToggleGroup", [VC] = Pe(Rr, [
  $t
]), GC = $t(), Jf = F.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ f(qq, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ f(Hq, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${Rr}\``);
});
Jf.displayName = Rr;
var [jC, UC] = VC(Rr), qq = F.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = De({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ f(
    jC,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: s,
      onItemDeactivate: F.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ f(KC, { ...a, ref: t })
    }
  );
}), Hq = F.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = De({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = F.useCallback(
    (u) => s((d = []) => [...d, u]),
    [s]
  ), l = F.useCallback(
    (u) => s((d = []) => d.filter((m) => m !== u)),
    [s]
  );
  return /* @__PURE__ */ f(
    jC,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: l,
      children: /* @__PURE__ */ f(KC, { ...a, ref: t })
    }
  );
});
Jf.displayName = Rr;
var [Wq, Vq] = VC(Rr), KC = F.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, l = GC(n), u = Ct(i), d = { role: "group", dir: u, ...c };
    return /* @__PURE__ */ f(Wq, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ f(
      Eo,
      {
        asChild: !0,
        ...l,
        orientation: a,
        dir: u,
        loop: s,
        children: /* @__PURE__ */ f(X.div, { ...d, ref: t })
      }
    ) : /* @__PURE__ */ f(X.div, { ...d, ref: t }) });
  }
), Na = "ToggleGroupItem", YC = F.forwardRef(
  (e, t) => {
    const n = UC(Na, e.__scopeToggleGroup), r = Vq(Na, e.__scopeToggleGroup), o = GC(e.__scopeToggleGroup), a = n.value.includes(e.value), i = r.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = F.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ f(
      Ro,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ f(Rg, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ f(Rg, { ...s, ref: t });
  }
);
YC.displayName = Na;
var Rg = F.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, a = UC(Na, n), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ f(
      Zf,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (c) => {
          c ? a.onItemActivate(r) : a.onItemDeactivate(r);
        }
      }
    );
  }
), Gq = Jf, jq = YC;
const XC = yr(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function W5({
  className: e,
  variant: t,
  size: n,
  ...r
}) {
  return /* @__PURE__ */ f(
    Bq,
    {
      "data-slot": "toggle",
      className: I(XC({ variant: t, size: n, className: e })),
      ...r
    }
  );
}
const QC = p.createContext({
  size: "default",
  variant: "default"
});
function V5({
  className: e,
  variant: t,
  size: n,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ f(
    Gq,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": n,
      className: I(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        e
      ),
      ...o,
      children: /* @__PURE__ */ f(QC.Provider, { value: { variant: t, size: n }, children: r })
    }
  );
}
function G5({
  className: e,
  children: t,
  variant: n,
  size: r,
  ...o
}) {
  const a = p.useContext(QC);
  return /* @__PURE__ */ f(
    jq,
    {
      "data-slot": "toggle-group-item",
      "data-variant": a.variant || n,
      "data-size": a.size || r,
      className: I(
        XC({
          variant: a.variant || n,
          size: a.size || r
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        e
      ),
      ...o,
      children: t
    }
  );
}
export {
  Xq as Accordion,
  aH as Alert,
  sH as AlertDescription,
  Qq as AlertDialog,
  rH as AlertDialogAction,
  oH as AlertDialogCancel,
  Zq as AlertDialogContent,
  nH as AlertDialogDescription,
  eH as AlertDialogFooter,
  Jq as AlertDialogHeader,
  tH as AlertDialogTitle,
  iH as AlertTitle,
  cH as AspectRatio,
  lH as Avatar,
  dH as AvatarFallback,
  uH as AvatarImage,
  fH as Badge,
  pH as Breadcrumb,
  yH as BreadcrumbEllipsis,
  vH as BreadcrumbItem,
  hH as BreadcrumbLink,
  mH as BreadcrumbList,
  gH as BreadcrumbPage,
  bH as BreadcrumbSeparator,
  sd as Button,
  wH as Calendar,
  xH as Card,
  PH as CardContent,
  _H as CardDescription,
  EH as CardFooter,
  SH as CardHeader,
  CH as CardTitle,
  RH as Carousel,
  MH as CarouselContent,
  TH as CarouselItem,
  AH as CarouselNext,
  NH as CarouselPrevious,
  DH as ChartContainer,
  OH as ChartTooltip,
  IH as ChartTooltipContent,
  kH as Checkbox,
  LH as Collapsible,
  FH as CollapsibleContent,
  $H as CollapsibleTrigger,
  HO as Command,
  HH as CommandDialog,
  GH as CommandEmpty,
  jH as CommandGroup,
  WH as CommandInput,
  KH as CommandItem,
  VH as CommandList,
  UH as CommandSeparator,
  YH as CommandShortcut,
  QH as ContextMenu,
  JH as ContextMenuContent,
  eW as ContextMenuItem,
  tW as ContextMenuLabel,
  nW as ContextMenuSeparator,
  ZH as ContextMenuTrigger,
  kO as Dialog,
  BH as DialogClose,
  FO as DialogContent,
  qO as DialogDescription,
  qH as DialogFooter,
  zO as DialogHeader,
  BO as DialogTitle,
  zH as DialogTrigger,
  rW as Drawer,
  aW as DrawerClose,
  iW as DrawerContent,
  uW as DrawerDescription,
  cW as DrawerFooter,
  sW as DrawerHeader,
  lW as DrawerTitle,
  oW as DrawerTrigger,
  dW as DropdownMenu,
  pW as DropdownMenuContent,
  mW as DropdownMenuItem,
  vW as DropdownMenuLabel,
  hW as DropdownMenuSeparator,
  fW as DropdownMenuTrigger,
  gW as Form,
  xW as FormControl,
  SW as FormDescription,
  bW as FormField,
  yW as FormItem,
  wW as FormLabel,
  CW as FormMessage,
  _W as HoverCard,
  EW as HoverCardContent,
  PW as HoverCardTrigger,
  NW as Input,
  RW as InputOTP,
  MW as InputOTPGroup,
  TW as InputOTPSlot,
  $$ as Label,
  AW as Menubar,
  IW as MenubarContent,
  kW as MenubarItem,
  DW as MenubarMenu,
  LW as MenubarSeparator,
  $W as MenubarShortcut,
  OW as MenubarTrigger,
  FW as NavigationMenu,
  BW as NavigationMenuItem,
  HW as NavigationMenuLink,
  zW as NavigationMenuList,
  qW as NavigationMenuTrigger,
  WW as Pagination,
  VW as PaginationContent,
  KW as PaginationEllipsis,
  GW as PaginationItem,
  S0 as PaginationLink,
  UW as PaginationNext,
  jW as PaginationPrevious,
  YW as Popover,
  QW as PopoverContent,
  XW as PopoverTrigger,
  ZW as Progress,
  JW as RadioGroup,
  e5 as RadioGroupItem,
  r5 as ResizableHandle,
  n5 as ResizablePanel,
  t5 as ResizablePanelGroup,
  o5 as ScrollArea,
  $z as ScrollBar,
  a5 as Select,
  l5 as SelectContent,
  i5 as SelectGroup,
  d5 as SelectItem,
  u5 as SelectLabel,
  f5 as SelectSeparator,
  c5 as SelectTrigger,
  s5 as SelectValue,
  CB as Separator,
  _B as Sheet,
  m5 as SheetClose,
  RB as SheetContent,
  NB as SheetDescription,
  v5 as SheetFooter,
  MB as SheetHeader,
  TB as SheetTitle,
  p5 as SheetTrigger,
  b5 as Sidebar,
  _5 as SidebarContent,
  S5 as SidebarFooter,
  x5 as SidebarHeader,
  P5 as SidebarMenu,
  R5 as SidebarMenuButton,
  E5 as SidebarMenuItem,
  M5 as SidebarMenuSub,
  T5 as SidebarMenuSubItem,
  g5 as SidebarProvider,
  w5 as SidebarRail,
  C5 as SidebarSeparator,
  y5 as SidebarTrigger,
  h5 as Skeleton,
  N5 as Slider,
  A5 as Switch,
  D5 as Table,
  I5 as TableBody,
  $5 as TableCell,
  L5 as TableHead,
  O5 as TableHeader,
  k5 as TableRow,
  F5 as Tabs,
  q5 as TabsContent,
  z5 as TabsList,
  B5 as TabsTrigger,
  H5 as Textarea,
  W5 as Toggle,
  V5 as ToggleGroup,
  G5 as ToggleGroupItem,
  ZB as Tooltip,
  eq as TooltipContent,
  vC as TooltipProvider,
  JB as TooltipTrigger,
  I as cn
};

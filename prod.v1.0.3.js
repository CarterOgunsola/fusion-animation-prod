var Qo = Object.defineProperty;
var ud = (s, e, t) =>
  e in s
    ? Qo(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t);
var l = (s, e) => Qo(s, "name", { value: e, configurable: !0 });
var G = (s, e, t) => ud(s, typeof e != "symbol" ? e + "" : e, t);
function Jo(s) {
  return (
    s !== null &&
    typeof s == "object" &&
    "constructor" in s &&
    s.constructor === Object
  );
}
l(Jo, "isObject$2");
function go(s, e) {
  s === void 0 && (s = {}), e === void 0 && (e = {});
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((i) => t.indexOf(i) < 0)
    .forEach((i) => {
      typeof s[i] > "u"
        ? (s[i] = e[i])
        : Jo(e[i]) &&
          Jo(s[i]) &&
          Object.keys(e[i]).length > 0 &&
          go(s[i], e[i]);
    });
}
l(go, "extend$2");
const nc = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function je() {
  const s = typeof document < "u" ? document : {};
  return go(s, nc), s;
}
l(je, "getDocument");
const dd = {
  document: nc,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: l(function () {
    return this;
  }, "CustomEvent"),
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(s) {
    return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
  },
  cancelAnimationFrame(s) {
    typeof setTimeout > "u" || clearTimeout(s);
  },
};
function Ee() {
  const s = typeof window < "u" ? window : {};
  return go(s, dd), s;
}
l(Ee, "getWindow");
function zi(s) {
  return (
    s === void 0 && (s = ""),
    s
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
l(zi, "classesToTokens");
function fd(s) {
  const e = s;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
l(fd, "deleteProps");
function _r(s, e) {
  return e === void 0 && (e = 0), setTimeout(s, e);
}
l(_r, "nextTick");
function Gt() {
  return Date.now();
}
l(Gt, "now");
function pd(s) {
  const e = Ee();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(s, null)),
    !t && s.currentStyle && (t = s.currentStyle),
    t || (t = s.style),
    t
  );
}
l(pd, "getComputedStyle$1");
function Oa(s, e) {
  e === void 0 && (e = "x");
  const t = Ee();
  let i, r, n;
  const a = pd(s);
  return (
    t.WebKitCSSMatrix
      ? ((r = a.transform || a.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (n = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((n =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = n.toString().split(","))),
    e === "x" &&
      (t.WebKitCSSMatrix
        ? (r = n.m41)
        : i.length === 16
        ? (r = parseFloat(i[12]))
        : (r = parseFloat(i[4]))),
    e === "y" &&
      (t.WebKitCSSMatrix
        ? (r = n.m42)
        : i.length === 16
        ? (r = parseFloat(i[13]))
        : (r = parseFloat(i[5]))),
    r || 0
  );
}
l(Oa, "getTranslate");
function vs(s) {
  return (
    typeof s == "object" &&
    s !== null &&
    s.constructor &&
    Object.prototype.toString.call(s).slice(8, -1) === "Object"
  );
}
l(vs, "isObject$1");
function hd(s) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? s instanceof HTMLElement
    : s && (s.nodeType === 1 || s.nodeType === 11);
}
l(hd, "isNode$1");
function Lt() {
  const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (i != null && !hd(i)) {
      const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
      for (let n = 0, a = r.length; n < a; n += 1) {
        const o = r[n],
          c = Object.getOwnPropertyDescriptor(i, o);
        c !== void 0 &&
          c.enumerable &&
          (vs(s[o]) && vs(i[o])
            ? i[o].__swiper__
              ? (s[o] = i[o])
              : Lt(s[o], i[o])
            : !vs(s[o]) && vs(i[o])
            ? ((s[o] = {}), i[o].__swiper__ ? (s[o] = i[o]) : Lt(s[o], i[o]))
            : (s[o] = i[o]));
      }
    }
  }
  return s;
}
l(Lt, "extend$1");
function ys(s, e, t) {
  s.style.setProperty(e, t);
}
l(ys, "setCSSProperty");
function ac(s) {
  let { swiper: e, targetPosition: t, side: i } = s;
  const r = Ee(),
    n = -e.translate;
  let a = null,
    o;
  const c = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const u = t > n ? "next" : "prev",
    d = l(
      (g, h) => (u === "next" && g >= h) || (u === "prev" && g <= h),
      "isOutOfBound"
    ),
    m = l(() => {
      (o = new Date().getTime()), a === null && (a = o);
      const g = Math.max(Math.min((o - a) / c, 1), 0),
        h = 0.5 - Math.cos(g * Math.PI) / 2;
      let f = n + h * (t - n);
      if ((d(f, t) && (f = t), e.wrapperEl.scrollTo({ [i]: f }), d(f, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [i]: f });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(m);
    }, "animate");
  m();
}
l(ac, "animateCSSModeScroll");
function Mr(s) {
  return (
    s.querySelector(".swiper-slide-transform") ||
    (s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform")) ||
    s
  );
}
l(Mr, "getSlideTransformEl");
function Je(s, e) {
  e === void 0 && (e = "");
  const t = Ee(),
    i = [...s.children];
  return (
    t.HTMLSlotElement &&
      s instanceof HTMLSlotElement &&
      i.push(...s.assignedElements()),
    e ? i.filter((r) => r.matches(e)) : i
  );
}
l(Je, "elementChildren");
function md(s, e) {
  const t = [e];
  for (; t.length > 0; ) {
    const i = t.shift();
    if (s === i) return !0;
    t.push(
      ...i.children,
      ...(i.shadowRoot ? i.shadowRoot.children : []),
      ...(i.assignedElements ? i.assignedElements() : [])
    );
  }
}
l(md, "elementIsChildOfSlot");
function gd(s, e) {
  const t = Ee();
  let i = e.contains(s);
  return (
    !i &&
      t.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      ((i = [...e.assignedElements()].includes(s)), i || (i = md(s, e))),
    i
  );
}
l(gd, "elementIsChildOf");
function In(s) {
  try {
    return;
  } catch {}
}
l(In, "showWarning");
function $t(s, e) {
  e === void 0 && (e = []);
  const t = document.createElement(s);
  return t.classList.add(...(Array.isArray(e) ? e : zi(e))), t;
}
l($t, "createElement$1");
function Dn(s) {
  const e = Ee(),
    t = je(),
    i = s.getBoundingClientRect(),
    r = t.body,
    n = s.clientTop || r.clientTop || 0,
    a = s.clientLeft || r.clientLeft || 0,
    o = s === e ? e.scrollY : s.scrollTop,
    c = s === e ? e.scrollX : s.scrollLeft;
  return { top: i.top + o - n, left: i.left + c - a };
}
l(Dn, "elementOffset");
function vd(s, e) {
  const t = [];
  for (; s.previousElementSibling; ) {
    const i = s.previousElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
  }
  return t;
}
l(vd, "elementPrevAll");
function yd(s, e) {
  const t = [];
  for (; s.nextElementSibling; ) {
    const i = s.nextElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
  }
  return t;
}
l(yd, "elementNextAll");
function Ni(s, e) {
  return Ee().getComputedStyle(s, null).getPropertyValue(e);
}
l(Ni, "elementStyle");
function qs(s) {
  let e = s,
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
l(qs, "elementIndex");
function dr(s, e) {
  const t = [];
  let i = s.parentElement;
  for (; i; ) e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
  return t;
}
l(dr, "elementParents");
function Cs(s, e) {
  function t(i) {
    i.target === s && (e.call(s, i), s.removeEventListener("transitionend", t));
  }
  l(t, "fireCallBack"), e && s.addEventListener("transitionend", t);
}
l(Cs, "elementTransitionEnd");
function ka(s, e, t) {
  const i = Ee();
  return (
    s[e === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      i
        .getComputedStyle(s, null)
        .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      i
        .getComputedStyle(s, null)
        .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
l(ka, "elementOuterSize");
function oe(s) {
  return (Array.isArray(s) ? s : [s]).filter((e) => !!e);
}
l(oe, "makeElementsArray");
function Kn(s) {
  return (e) =>
    Math.abs(e) > 0 &&
    s.browser &&
    s.browser.need3dFix &&
    Math.abs(e) % 90 === 0
      ? e + 0.001
      : e;
}
l(Kn, "getRotateFix");
let na;
function wd() {
  const s = Ee(),
    e = je();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in s ||
      (s.DocumentTouch && e instanceof s.DocumentTouch)
    ),
  };
}
l(wd, "calcSupport");
function oc() {
  return na || (na = wd()), na;
}
l(oc, "getSupport");
let aa;
function _d(s) {
  let { userAgent: e } = s === void 0 ? {} : s;
  const t = oc(),
    i = Ee(),
    r = i.navigator.platform,
    n = e || i.navigator.userAgent,
    a = { ios: !1, android: !1 },
    o = i.screen.width,
    c = i.screen.height,
    u = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = n.match(/(iPad).*OS\s([\d_]+)/);
  const m = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    g = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = r === "Win32";
  let f = r === "MacIntel";
  const p = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !d &&
      f &&
      t.touch &&
      p.indexOf(`${o}x${c}`) >= 0 &&
      ((d = n.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (f = !1)),
    u && !h && ((a.os = "android"), (a.android = !0)),
    (d || g || m) && ((a.os = "ios"), (a.ios = !0)),
    a
  );
}
l(_d, "calcDevice");
function lc(s) {
  return s === void 0 && (s = {}), aa || (aa = _d(s)), aa;
}
l(lc, "getDevice");
let oa;
function bd() {
  const s = Ee(),
    e = lc();
  let t = !1;
  function i() {
    const o = s.navigator.userAgent.toLowerCase();
    return (
      o.indexOf("safari") >= 0 &&
      o.indexOf("chrome") < 0 &&
      o.indexOf("android") < 0
    );
  }
  if ((l(i, "isSafari"), i())) {
    const o = String(s.navigator.userAgent);
    if (o.includes("Version/")) {
      const [c, u] = o
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((d) => Number(d));
      t = c < 16 || (c === 16 && u < 2);
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      s.navigator.userAgent
    ),
    n = i(),
    a = n || (r && e.ios);
  return {
    isSafari: t || n,
    needPerspectiveFix: t,
    need3dFix: a,
    isWebView: r,
  };
}
l(bd, "calcBrowser");
function cc() {
  return oa || (oa = bd()), oa;
}
l(cc, "getBrowser");
function Sd(s) {
  let { swiper: e, on: t, emit: i } = s;
  const r = Ee();
  let n = null,
    a = null;
  const o = l(() => {
      !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
    }, "resizeHandler"),
    c = l(() => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((n = new ResizeObserver((m) => {
          a = r.requestAnimationFrame(() => {
            const { width: g, height: h } = e;
            let f = g,
              p = h;
            m.forEach((v) => {
              let { contentBoxSize: _, contentRect: w, target: y } = v;
              (y && y !== e.el) ||
                ((f = w ? w.width : (_[0] || _).inlineSize),
                (p = w ? w.height : (_[0] || _).blockSize));
            }),
              (f !== g || p !== h) && o();
          });
        })),
        n.observe(e.el));
    }, "createObserver"),
    u = l(() => {
      a && r.cancelAnimationFrame(a),
        n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
    }, "removeObserver"),
    d = l(() => {
      !e || e.destroyed || !e.initialized || i("orientationchange");
    }, "orientationChangeHandler");
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      c();
      return;
    }
    r.addEventListener("resize", o), r.addEventListener("orientationchange", d);
  }),
    t("destroy", () => {
      u(),
        r.removeEventListener("resize", o),
        r.removeEventListener("orientationchange", d);
    });
}
l(Sd, "Resize");
function xd(s) {
  let { swiper: e, extendParams: t, on: i, emit: r } = s;
  const n = [],
    a = Ee(),
    o = l(function (d, m) {
      m === void 0 && (m = {});
      const g = a.MutationObserver || a.WebkitMutationObserver,
        h = new g((f) => {
          if (e.__preventObserver__) return;
          if (f.length === 1) {
            r("observerUpdate", f[0]);
            return;
          }
          const p = l(function () {
            r("observerUpdate", f[0]);
          }, "observerUpdate");
          a.requestAnimationFrame
            ? a.requestAnimationFrame(p)
            : a.setTimeout(p, 0);
        });
      h.observe(d, {
        attributes: typeof m.attributes > "u" ? !0 : m.attributes,
        childList: e.isElement || (typeof m.childList > "u" ? !0 : m).childList,
        characterData: typeof m.characterData > "u" ? !0 : m.characterData,
      }),
        n.push(h);
    }, "attach"),
    c = l(() => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const d = dr(e.hostEl);
          for (let m = 0; m < d.length; m += 1) o(d[m]);
        }
        o(e.hostEl, { childList: e.params.observeSlideChildren }),
          o(e.wrapperEl, { attributes: !1 });
      }
    }, "init"),
    u = l(() => {
      n.forEach((d) => {
        d.disconnect();
      }),
        n.splice(0, n.length);
    }, "destroy");
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i("init", c),
    i("destroy", u);
}
l(xd, "Observer$1");
var Td = {
  on(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const r = t ? "unshift" : "push";
    return (
      s.split(" ").forEach((n) => {
        i.eventsListeners[n] || (i.eventsListeners[n] = []),
          i.eventsListeners[n][r](e);
      }),
      i
    );
  },
  once(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function r() {
      i.off(s, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      e.apply(i, a);
    }
    return l(r, "onceHandler"), (r.__emitterProxy = e), i.on(s, r, t);
  },
  onAny(s, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof s != "function") return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t;
  },
  offAny(s) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(s);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(s, e) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        s.split(" ").forEach((i) => {
          typeof e > "u"
            ? (t.eventsListeners[i] = [])
            : t.eventsListeners[i] &&
              t.eventsListeners[i].forEach((r, n) => {
                (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  t.eventsListeners[i].splice(n, 1);
              });
        }),
      t
    );
  },
  emit() {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
    let e, t, i;
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (
      typeof n[0] == "string" || Array.isArray(n[0])
        ? ((e = n[0]), (t = n.slice(1, n.length)), (i = s))
        : ((e = n[0].events), (t = n[0].data), (i = n[0].context || s)),
      t.unshift(i),
      (Array.isArray(e) ? e : e.split(" ")).forEach((c) => {
        s.eventsAnyListeners &&
          s.eventsAnyListeners.length &&
          s.eventsAnyListeners.forEach((u) => {
            u.apply(i, [c, ...t]);
          }),
          s.eventsListeners &&
            s.eventsListeners[c] &&
            s.eventsListeners[c].forEach((u) => {
              u.apply(i, t);
            });
      }),
      s
    );
  },
};
function Ed() {
  const s = this;
  let e, t;
  const i = s.el;
  typeof s.params.width < "u" && s.params.width !== null
    ? (e = s.params.width)
    : (e = i.clientWidth),
    typeof s.params.height < "u" && s.params.height !== null
      ? (t = s.params.height)
      : (t = i.clientHeight),
    !((e === 0 && s.isHorizontal()) || (t === 0 && s.isVertical())) &&
      ((e =
        e -
        parseInt(Ni(i, "padding-left") || 0, 10) -
        parseInt(Ni(i, "padding-right") || 0, 10)),
      (t =
        t -
        parseInt(Ni(i, "padding-top") || 0, 10) -
        parseInt(Ni(i, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(s, {
        width: e,
        height: t,
        size: s.isHorizontal() ? e : t,
      }));
}
l(Ed, "updateSize");
function Cd() {
  const s = this;
  function e(C, I) {
    return parseFloat(C.getPropertyValue(s.getDirectionLabel(I)) || 0);
  }
  l(e, "getDirectionPropertyValue");
  const t = s.params,
    { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o } = s,
    c = s.virtual && t.virtual.enabled,
    u = c ? s.virtual.slides.length : s.slides.length,
    d = Je(r, `.${s.params.slideClass}, swiper-slide`),
    m = c ? s.virtual.slides.length : d.length;
  let g = [];
  const h = [],
    f = [];
  let p = t.slidesOffsetBefore;
  typeof p == "function" && (p = t.slidesOffsetBefore.call(s));
  let v = t.slidesOffsetAfter;
  typeof v == "function" && (v = t.slidesOffsetAfter.call(s));
  const _ = s.snapGrid.length,
    w = s.slidesGrid.length;
  let y = t.spaceBetween,
    b = -p,
    S = 0,
    x = 0;
  if (typeof n > "u") return;
  typeof y == "string" && y.indexOf("%") >= 0
    ? (y = (parseFloat(y.replace("%", "")) / 100) * n)
    : typeof y == "string" && (y = parseFloat(y)),
    (s.virtualSize = -y),
    d.forEach((C) => {
      a ? (C.style.marginLeft = "") : (C.style.marginRight = ""),
        (C.style.marginBottom = ""),
        (C.style.marginTop = "");
    }),
    t.centeredSlides &&
      t.cssMode &&
      (ys(i, "--swiper-centered-offset-before", ""),
      ys(i, "--swiper-centered-offset-after", ""));
  const T = t.grid && t.grid.rows > 1 && s.grid;
  T ? s.grid.initSlides(d) : s.grid && s.grid.unsetSlides();
  let M;
  const E =
    t.slidesPerView === "auto" &&
    t.breakpoints &&
    Object.keys(t.breakpoints).filter(
      (C) => typeof t.breakpoints[C].slidesPerView < "u"
    ).length > 0;
  for (let C = 0; C < m; C += 1) {
    M = 0;
    let I;
    if (
      (d[C] && (I = d[C]),
      T && s.grid.updateSlide(C, I, d),
      !(d[C] && Ni(I, "display") === "none"))
    ) {
      if (t.slidesPerView === "auto") {
        E && (d[C].style[s.getDirectionLabel("width")] = "");
        const A = getComputedStyle(I),
          k = I.style.transform,
          D = I.style.webkitTransform;
        if (
          (k && (I.style.transform = "none"),
          D && (I.style.webkitTransform = "none"),
          t.roundLengths)
        )
          M = s.isHorizontal() ? ka(I, "width") : ka(I, "height");
        else {
          const R = e(A, "width"),
            z = e(A, "padding-left"),
            O = e(A, "padding-right"),
            L = e(A, "margin-left"),
            N = e(A, "margin-right"),
            P = A.getPropertyValue("box-sizing");
          if (P && P === "border-box") M = R + L + N;
          else {
            const { clientWidth: Y, offsetWidth: Z } = I;
            M = R + z + O + L + N + (Z - Y);
          }
        }
        k && (I.style.transform = k),
          D && (I.style.webkitTransform = D),
          t.roundLengths && (M = Math.floor(M));
      } else
        (M = (n - (t.slidesPerView - 1) * y) / t.slidesPerView),
          t.roundLengths && (M = Math.floor(M)),
          d[C] && (d[C].style[s.getDirectionLabel("width")] = `${M}px`);
      d[C] && (d[C].swiperSlideSize = M),
        f.push(M),
        t.centeredSlides
          ? ((b = b + M / 2 + S / 2 + y),
            S === 0 && C !== 0 && (b = b - n / 2 - y),
            C === 0 && (b = b - n / 2 - y),
            Math.abs(b) < 1 / 1e3 && (b = 0),
            t.roundLengths && (b = Math.floor(b)),
            x % t.slidesPerGroup === 0 && g.push(b),
            h.push(b))
          : (t.roundLengths && (b = Math.floor(b)),
            (x - Math.min(s.params.slidesPerGroupSkip, x)) %
              s.params.slidesPerGroup ===
              0 && g.push(b),
            h.push(b),
            (b = b + M + y)),
        (s.virtualSize += M + y),
        (S = M),
        (x += 1);
    }
  }
  if (
    ((s.virtualSize = Math.max(s.virtualSize, n) + v),
    a &&
      o &&
      (t.effect === "slide" || t.effect === "coverflow") &&
      (i.style.width = `${s.virtualSize + y}px`),
    t.setWrapperSize &&
      (i.style[s.getDirectionLabel("width")] = `${s.virtualSize + y}px`),
    T && s.grid.updateWrapperSize(M, g),
    !t.centeredSlides)
  ) {
    const C = [];
    for (let I = 0; I < g.length; I += 1) {
      let A = g[I];
      t.roundLengths && (A = Math.floor(A)),
        g[I] <= s.virtualSize - n && C.push(A);
    }
    (g = C),
      Math.floor(s.virtualSize - n) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(s.virtualSize - n);
  }
  if (c && t.loop) {
    const C = f[0] + y;
    if (t.slidesPerGroup > 1) {
      const I = Math.ceil(
          (s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup
        ),
        A = C * t.slidesPerGroup;
      for (let k = 0; k < I; k += 1) g.push(g[g.length - 1] + A);
    }
    for (let I = 0; I < s.virtual.slidesBefore + s.virtual.slidesAfter; I += 1)
      t.slidesPerGroup === 1 && g.push(g[g.length - 1] + C),
        h.push(h[h.length - 1] + C),
        (s.virtualSize += C);
  }
  if ((g.length === 0 && (g = [0]), y !== 0)) {
    const C =
      s.isHorizontal() && a ? "marginLeft" : s.getDirectionLabel("marginRight");
    d.filter((I, A) =>
      !t.cssMode || t.loop ? !0 : A !== d.length - 1
    ).forEach((I) => {
      I.style[C] = `${y}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let C = 0;
    f.forEach((A) => {
      C += A + (y || 0);
    }),
      (C -= y);
    const I = C > n ? C - n : 0;
    g = g.map((A) => (A <= 0 ? -p : A > I ? I + v : A));
  }
  if (t.centerInsufficientSlides) {
    let C = 0;
    f.forEach((A) => {
      C += A + (y || 0);
    }),
      (C -= y);
    const I = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (C + I < n) {
      const A = (n - C - I) / 2;
      g.forEach((k, D) => {
        g[D] = k - A;
      }),
        h.forEach((k, D) => {
          h[D] = k + A;
        });
    }
  }
  if (
    (Object.assign(s, {
      slides: d,
      snapGrid: g,
      slidesGrid: h,
      slidesSizesGrid: f,
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
  ) {
    ys(i, "--swiper-centered-offset-before", `${-g[0]}px`),
      ys(
        i,
        "--swiper-centered-offset-after",
        `${s.size / 2 - f[f.length - 1] / 2}px`
      );
    const C = -s.snapGrid[0],
      I = -s.slidesGrid[0];
    (s.snapGrid = s.snapGrid.map((A) => A + C)),
      (s.slidesGrid = s.slidesGrid.map((A) => A + I));
  }
  if (
    (m !== u && s.emit("slidesLengthChange"),
    g.length !== _ &&
      (s.params.watchOverflow && s.checkOverflow(),
      s.emit("snapGridLengthChange")),
    h.length !== w && s.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && s.updateSlidesOffset(),
    s.emit("slidesUpdated"),
    !c && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
  ) {
    const C = `${t.containerModifierClass}backface-hidden`,
      I = s.el.classList.contains(C);
    m <= t.maxBackfaceHiddenSlides
      ? I || s.el.classList.add(C)
      : I && s.el.classList.remove(C);
  }
}
l(Cd, "updateSlides");
function Md(s) {
  const e = this,
    t = [],
    i = e.virtual && e.params.virtual.enabled;
  let r = 0,
    n;
  typeof s == "number"
    ? e.setTransition(s)
    : s === !0 && e.setTransition(e.params.speed);
  const a = l(
    (o) => (i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o]),
    "getSlideByIndex"
  );
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((o) => {
        t.push(o);
      });
    else
      for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        const o = e.activeIndex + n;
        if (o > e.slides.length && !i) break;
        t.push(a(o));
      }
  else t.push(a(e.activeIndex));
  for (n = 0; n < t.length; n += 1)
    if (typeof t[n] < "u") {
      const o = t[n].offsetHeight;
      r = o > r ? o : r;
    }
  (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
}
l(Md, "updateAutoHeight");
function Pd() {
  const s = this,
    e = s.slides,
    t = s.isElement
      ? s.isHorizontal()
        ? s.wrapperEl.offsetLeft
        : s.wrapperEl.offsetTop
      : 0;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset =
      (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
      t -
      s.cssOverflowAdjustment();
}
l(Pd, "updateSlidesOffset");
const el = l((s, e, t) => {
  e && !s.classList.contains(t)
    ? s.classList.add(t)
    : !e && s.classList.contains(t) && s.classList.remove(t);
}, "toggleSlideClasses$1");
function Ad(s) {
  s === void 0 && (s = (this && this.translate) || 0);
  const e = this,
    t = e.params,
    { slides: i, rtlTranslate: r, snapGrid: n } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let a = -s;
  r && (a = s), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
  let o = t.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * e.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let c = 0; c < i.length; c += 1) {
    const u = i[c];
    let d = u.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
    const m =
        (a + (t.centeredSlides ? e.minTranslate() : 0) - d) /
        (u.swiperSlideSize + o),
      g =
        (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) /
        (u.swiperSlideSize + o),
      h = -(a - d),
      f = h + e.slidesSizesGrid[c],
      p = h >= 0 && h <= e.size - e.slidesSizesGrid[c],
      v =
        (h >= 0 && h < e.size - 1) ||
        (f > 1 && f <= e.size) ||
        (h <= 0 && f >= e.size);
    v && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(c)),
      el(u, v, t.slideVisibleClass),
      el(u, p, t.slideFullyVisibleClass),
      (u.progress = r ? -m : m),
      (u.originalProgress = r ? -g : g);
  }
}
l(Ad, "updateSlidesProgress");
function Od(s) {
  const e = this;
  if (typeof s > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    s = (e && e.translate && e.translate * d) || 0;
  }
  const t = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = e;
  const c = n,
    u = a;
  if (i === 0) (r = 0), (n = !0), (a = !0);
  else {
    r = (s - e.minTranslate()) / i;
    const d = Math.abs(s - e.minTranslate()) < 1,
      m = Math.abs(s - e.maxTranslate()) < 1;
    (n = d || r <= 0), (a = m || r >= 1), d && (r = 0), m && (r = 1);
  }
  if (t.loop) {
    const d = e.getSlideIndexByData(0),
      m = e.getSlideIndexByData(e.slides.length - 1),
      g = e.slidesGrid[d],
      h = e.slidesGrid[m],
      f = e.slidesGrid[e.slidesGrid.length - 1],
      p = Math.abs(s);
    p >= g ? (o = (p - g) / f) : (o = (p + f - h) / f), o > 1 && (o -= 1);
  }
  Object.assign(e, { progress: r, progressLoop: o, isBeginning: n, isEnd: a }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(s),
    n && !c && e.emit("reachBeginning toEdge"),
    a && !u && e.emit("reachEnd toEdge"),
    ((c && !n) || (u && !a)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
l(Od, "updateProgress");
const la = l((s, e, t) => {
  e && !s.classList.contains(t)
    ? s.classList.add(t)
    : !e && s.classList.contains(t) && s.classList.remove(t);
}, "toggleSlideClasses");
function kd() {
  const s = this,
    { slides: e, params: t, slidesEl: i, activeIndex: r } = s,
    n = s.virtual && t.virtual.enabled,
    a = s.grid && t.grid && t.grid.rows > 1,
    o = l(
      (m) => Je(i, `.${t.slideClass}${m}, swiper-slide${m}`)[0],
      "getFilteredSlide"
    );
  let c, u, d;
  if (n)
    if (t.loop) {
      let m = r - s.virtual.slidesBefore;
      m < 0 && (m = s.virtual.slides.length + m),
        m >= s.virtual.slides.length && (m -= s.virtual.slides.length),
        (c = o(`[data-swiper-slide-index="${m}"]`));
    } else c = o(`[data-swiper-slide-index="${r}"]`);
  else
    a
      ? ((c = e.find((m) => m.column === r)),
        (d = e.find((m) => m.column === r + 1)),
        (u = e.find((m) => m.column === r - 1)))
      : (c = e[r]);
  c &&
    (a ||
      ((d = yd(c, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !d && (d = e[0]),
      (u = vd(c, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !u === 0 && (u = e[e.length - 1]))),
    e.forEach((m) => {
      la(m, m === c, t.slideActiveClass),
        la(m, m === d, t.slideNextClass),
        la(m, m === u, t.slidePrevClass);
    }),
    s.emitSlidesClasses();
}
l(kd, "updateSlidesClasses");
const _n = l((s, e) => {
    if (!s || s.destroyed || !s.params) return;
    const t = l(
        () => (s.isElement ? "swiper-slide" : `.${s.params.slideClass}`),
        "slideSelector"
      ),
      i = e.closest(t());
    if (i) {
      let r = i.querySelector(`.${s.params.lazyPreloaderClass}`);
      !r &&
        s.isElement &&
        (i.shadowRoot
          ? (r = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              i.shadowRoot &&
                ((r = i.shadowRoot.querySelector(
                  `.${s.params.lazyPreloaderClass}`
                )),
                r && r.remove());
            })),
        r && r.remove();
    }
  }, "processLazyPreloader"),
  ca = l((s, e) => {
    if (!s.slides[e]) return;
    const t = s.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  }, "unlazy"),
  La = l((s) => {
    if (!s || s.destroyed || !s.params) return;
    let e = s.params.lazyPreloadPrevNext;
    const t = s.slides.length;
    if (!t || !e || e < 0) return;
    e = Math.min(e, t);
    const i =
        s.params.slidesPerView === "auto"
          ? s.slidesPerViewDynamic()
          : Math.ceil(s.params.slidesPerView),
      r = s.activeIndex;
    if (s.params.grid && s.params.grid.rows > 1) {
      const a = r,
        o = [a - e];
      o.push(...Array.from({ length: e }).map((c, u) => a + i + u)),
        s.slides.forEach((c, u) => {
          o.includes(c.column) && ca(s, u);
        });
      return;
    }
    const n = r + i - 1;
    if (s.params.rewind || s.params.loop)
      for (let a = r - e; a <= n + e; a += 1) {
        const o = ((a % t) + t) % t;
        (o < r || o > n) && ca(s, o);
      }
    else
      for (let a = Math.max(r - e, 0); a <= Math.min(n + e, t - 1); a += 1)
        a !== r && (a > n || a < r) && ca(s, a);
  }, "preload");
function Ld(s) {
  const { slidesGrid: e, params: t } = s,
    i = s.rtlTranslate ? s.translate : -s.translate;
  let r;
  for (let n = 0; n < e.length; n += 1)
    typeof e[n + 1] < "u"
      ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2
        ? (r = n)
        : i >= e[n] && i < e[n + 1] && (r = n + 1)
      : i >= e[n] && (r = n);
  return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
l(Ld, "getActiveIndexByTranslate");
function Id(s) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: o } = e;
  let c = s,
    u;
  const d = l((h) => {
    let f = h - e.virtual.slidesBefore;
    return (
      f < 0 && (f = e.virtual.slides.length + f),
      f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
      f
    );
  }, "getVirtualRealIndex");
  if ((typeof c > "u" && (c = Ld(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
  else {
    const h = Math.min(r.slidesPerGroupSkip, c);
    u = h + Math.floor((c - h) / r.slidesPerGroup);
  }
  if ((u >= i.length && (u = i.length - 1), c === n && !e.params.loop)) {
    u !== o && ((e.snapIndex = u), e.emit("snapIndexChange"));
    return;
  }
  if (c === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(c);
    return;
  }
  const m = e.grid && r.grid && r.grid.rows > 1;
  let g;
  if (e.virtual && r.virtual.enabled && r.loop) g = d(c);
  else if (m) {
    const h = e.slides.find((p) => p.column === c);
    let f = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(f) && (f = Math.max(e.slides.indexOf(h), 0)),
      (g = Math.floor(f / r.grid.rows));
  } else if (e.slides[c]) {
    const h = e.slides[c].getAttribute("data-swiper-slide-index");
    h ? (g = parseInt(h, 10)) : (g = c);
  } else g = c;
  Object.assign(e, {
    previousSnapIndex: o,
    snapIndex: u,
    previousRealIndex: a,
    realIndex: g,
    previousIndex: n,
    activeIndex: c,
  }),
    e.initialized && La(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (a !== g && e.emit("realIndexChange"), e.emit("slideChange"));
}
l(Id, "updateActiveIndex");
function Dd(s, e) {
  const t = this,
    i = t.params;
  let r = s.closest(`.${i.slideClass}, swiper-slide`);
  !r &&
    t.isElement &&
    e &&
    e.length > 1 &&
    e.includes(s) &&
    [...e.slice(e.indexOf(s) + 1, e.length)].forEach((o) => {
      !r && o.matches && o.matches(`.${i.slideClass}, swiper-slide`) && (r = o);
    });
  let n = !1,
    a;
  if (r) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === r) {
        (n = !0), (a = o);
        break;
      }
  }
  if (r && n)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (t.clickedIndex = a);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
l(Dd, "updateClickedSlide");
var zd = {
  updateSize: Ed,
  updateSlides: Cd,
  updateAutoHeight: Md,
  updateSlidesOffset: Pd,
  updateSlidesProgress: Ad,
  updateProgress: Od,
  updateSlidesClasses: kd,
  updateActiveIndex: Id,
  updateClickedSlide: Dd,
};
function Rd(s) {
  s === void 0 && (s = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = e;
  if (t.virtualTranslate) return i ? -r : r;
  if (t.cssMode) return r;
  let a = Oa(n, s);
  return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
}
l(Rd, "getSwiperTranslate");
function $d(s, e) {
  const t = this,
    { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = t;
  let o = 0,
    c = 0;
  const u = 0;
  t.isHorizontal() ? (o = i ? -s : s) : (c = s),
    r.roundLengths && ((o = Math.floor(o)), (c = Math.floor(c))),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? o : c),
    r.cssMode
      ? (n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -o
          : -c)
      : r.virtualTranslate ||
        (t.isHorizontal()
          ? (o -= t.cssOverflowAdjustment())
          : (c -= t.cssOverflowAdjustment()),
        (n.style.transform = `translate3d(${o}px, ${c}px, ${u}px)`));
  let d;
  const m = t.maxTranslate() - t.minTranslate();
  m === 0 ? (d = 0) : (d = (s - t.minTranslate()) / m),
    d !== a && t.updateProgress(s),
    t.emit("setTranslate", t.translate, e);
}
l($d, "setTranslate");
function Nd() {
  return -this.snapGrid[0];
}
l(Nd, "minTranslate");
function qd() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
l(qd, "maxTranslate");
function Fd(s, e, t, i, r) {
  s === void 0 && (s = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    i === void 0 && (i = !0);
  const n = this,
    { params: a, wrapperEl: o } = n;
  if (n.animating && a.preventInteractionOnTransition) return !1;
  const c = n.minTranslate(),
    u = n.maxTranslate();
  let d;
  if (
    (i && s > c ? (d = c) : i && s < u ? (d = u) : (d = s),
    n.updateProgress(d),
    a.cssMode)
  ) {
    const m = n.isHorizontal();
    if (e === 0) o[m ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!n.support.smoothScroll)
        return (
          ac({ swiper: n, targetPosition: -d, side: m ? "left" : "top" }), !0
        );
      o.scrollTo({ [m ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (n.setTransition(0),
        n.setTranslate(d),
        t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd")))
      : (n.setTransition(e),
        n.setTranslate(d),
        t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")),
        n.animating ||
          ((n.animating = !0),
          n.onTranslateToWrapperTransitionEnd ||
            (n.onTranslateToWrapperTransitionEnd = l(function (g) {
              !n ||
                n.destroyed ||
                (g.target === this &&
                  (n.wrapperEl.removeEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  (n.onTranslateToWrapperTransitionEnd = null),
                  delete n.onTranslateToWrapperTransitionEnd,
                  (n.animating = !1),
                  t && n.emit("transitionEnd")));
            }, "transitionEnd")),
          n.wrapperEl.addEventListener(
            "transitionend",
            n.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
l(Fd, "translateTo");
var Bd = {
  getTranslate: Rd,
  setTranslate: $d,
  minTranslate: Nd,
  maxTranslate: qd,
  translateTo: Fd,
};
function Vd(s, e) {
  const t = this;
  t.params.cssMode ||
    ((t.wrapperEl.style.transitionDuration = `${s}ms`),
    (t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
    t.emit("setTransition", s, e);
}
l(Vd, "setTransition");
function uc(s) {
  let { swiper: e, runCallbacks: t, direction: i, step: r } = s;
  const { activeIndex: n, previousIndex: a } = e;
  let o = i;
  if (
    (o || (n > a ? (o = "next") : n < a ? (o = "prev") : (o = "reset")),
    e.emit(`transition${r}`),
    t && n !== a)
  ) {
    if (o === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      o === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
l(uc, "transitionEmit");
function Wd(s, e) {
  s === void 0 && (s = !0);
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    uc({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
}
l(Wd, "transitionStart");
function Hd(s, e) {
  s === void 0 && (s = !0);
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      uc({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
}
l(Hd, "transitionEnd");
var Yd = { setTransition: Vd, transitionStart: Wd, transitionEnd: Hd };
function Xd(s, e, t, i, r) {
  s === void 0 && (s = 0),
    t === void 0 && (t = !0),
    typeof s == "string" && (s = parseInt(s, 10));
  const n = this;
  let a = s;
  a < 0 && (a = 0);
  const {
    params: o,
    snapGrid: c,
    slidesGrid: u,
    previousIndex: d,
    activeIndex: m,
    rtlTranslate: g,
    wrapperEl: h,
    enabled: f,
  } = n;
  if (
    (!f && !i && !r) ||
    n.destroyed ||
    (n.animating && o.preventInteractionOnTransition)
  )
    return !1;
  typeof e > "u" && (e = n.params.speed);
  const p = Math.min(n.params.slidesPerGroupSkip, a);
  let v = p + Math.floor((a - p) / n.params.slidesPerGroup);
  v >= c.length && (v = c.length - 1);
  const _ = -c[v];
  if (o.normalizeSlideIndex)
    for (let T = 0; T < u.length; T += 1) {
      const M = -Math.floor(_ * 100),
        E = Math.floor(u[T] * 100),
        C = Math.floor(u[T + 1] * 100);
      typeof u[T + 1] < "u"
        ? M >= E && M < C - (C - E) / 2
          ? (a = T)
          : M >= E && M < C && (a = T + 1)
        : M >= E && (a = T);
    }
  if (
    n.initialized &&
    a !== m &&
    ((!n.allowSlideNext &&
      (g
        ? _ > n.translate && _ > n.minTranslate()
        : _ < n.translate && _ < n.minTranslate())) ||
      (!n.allowSlidePrev &&
        _ > n.translate &&
        _ > n.maxTranslate() &&
        (m || 0) !== a))
  )
    return !1;
  a !== (d || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(_);
  let w;
  a > m ? (w = "next") : a < m ? (w = "prev") : (w = "reset");
  const y = n.virtual && n.params.virtual.enabled;
  if (!(y && r) && ((g && -_ === n.translate) || (!g && _ === n.translate)))
    return (
      n.updateActiveIndex(a),
      o.autoHeight && n.updateAutoHeight(),
      n.updateSlidesClasses(),
      o.effect !== "slide" && n.setTranslate(_),
      w !== "reset" && (n.transitionStart(t, w), n.transitionEnd(t, w)),
      !1
    );
  if (o.cssMode) {
    const T = n.isHorizontal(),
      M = g ? _ : -_;
    if (e === 0)
      y &&
        ((n.wrapperEl.style.scrollSnapType = "none"),
        (n._immediateVirtual = !0)),
        y && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
          ? ((n._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[T ? "scrollLeft" : "scrollTop"] = M;
            }))
          : (h[T ? "scrollLeft" : "scrollTop"] = M),
        y &&
          requestAnimationFrame(() => {
            (n.wrapperEl.style.scrollSnapType = ""), (n._immediateVirtual = !1);
          });
    else {
      if (!n.support.smoothScroll)
        return (
          ac({ swiper: n, targetPosition: M, side: T ? "left" : "top" }), !0
        );
      h.scrollTo({ [T ? "left" : "top"]: M, behavior: "smooth" });
    }
    return !0;
  }
  const x = cc().isSafari;
  return (
    y && !r && x && n.isElement && n.virtual.update(!1, !1, a),
    n.setTransition(e),
    n.setTranslate(_),
    n.updateActiveIndex(a),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, i),
    n.transitionStart(t, w),
    e === 0
      ? n.transitionEnd(t, w)
      : n.animating ||
        ((n.animating = !0),
        n.onSlideToWrapperTransitionEnd ||
          (n.onSlideToWrapperTransitionEnd = l(function (M) {
            !n ||
              n.destroyed ||
              (M.target === this &&
                (n.wrapperEl.removeEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                ),
                (n.onSlideToWrapperTransitionEnd = null),
                delete n.onSlideToWrapperTransitionEnd,
                n.transitionEnd(t, w)));
          }, "transitionEnd")),
        n.wrapperEl.addEventListener(
          "transitionend",
          n.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
l(Xd, "slideTo");
function Gd(s, e, t, i) {
  s === void 0 && (s = 0),
    t === void 0 && (t = !0),
    typeof s == "string" && (s = parseInt(s, 10));
  const r = this;
  if (r.destroyed) return;
  typeof e > "u" && (e = r.params.speed);
  const n = r.grid && r.params.grid && r.params.grid.rows > 1;
  let a = s;
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) a = a + r.virtual.slidesBefore;
    else {
      let o;
      if (n) {
        const g = a * r.params.grid.rows;
        o = r.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === g
        ).column;
      } else o = r.getSlideIndexByData(a);
      const c = n
          ? Math.ceil(r.slides.length / r.params.grid.rows)
          : r.slides.length,
        { centeredSlides: u } = r.params;
      let d = r.params.slidesPerView;
      d === "auto"
        ? (d = r.slidesPerViewDynamic())
        : ((d = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
          u && d % 2 === 0 && (d = d + 1));
      let m = c - o < d;
      if (
        (u && (m = m || o < Math.ceil(d / 2)),
        i && u && r.params.slidesPerView !== "auto" && !n && (m = !1),
        m)
      ) {
        const g = u
          ? o < r.activeIndex
            ? "prev"
            : "next"
          : o - r.activeIndex - 1 < r.params.slidesPerView
          ? "next"
          : "prev";
        r.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === "next" ? o + 1 : o - c + 1,
          slideRealIndex: g === "next" ? r.realIndex : void 0,
        });
      }
      if (n) {
        const g = a * r.params.grid.rows;
        a = r.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === g
        ).column;
      } else a = r.getSlideIndexByData(a);
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(a, e, t, i);
    }),
    r
  );
}
l(Gd, "slideToLoop");
function jd(s, e, t) {
  e === void 0 && (e = !0);
  const i = this,
    { enabled: r, params: n, animating: a } = i;
  if (!r || i.destroyed) return i;
  typeof s > "u" && (s = i.params.speed);
  let o = n.slidesPerGroup;
  n.slidesPerView === "auto" &&
    n.slidesPerGroup === 1 &&
    n.slidesPerGroupAuto &&
    (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const c = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
    u = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (a && !u && n.loopPreventsSliding) return !1;
    if (
      (i.loopFix({ direction: "next" }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && n.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + c, s, e, t);
        }),
        !0
      );
  }
  return n.rewind && i.isEnd
    ? i.slideTo(0, s, e, t)
    : i.slideTo(i.activeIndex + c, s, e, t);
}
l(jd, "slideNext");
function Ud(s, e, t) {
  e === void 0 && (e = !0);
  const i = this,
    {
      params: r,
      snapGrid: n,
      slidesGrid: a,
      rtlTranslate: o,
      enabled: c,
      animating: u,
    } = i;
  if (!c || i.destroyed) return i;
  typeof s > "u" && (s = i.params.speed);
  const d = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (u && !d && r.loopPreventsSliding) return !1;
    i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  const m = o ? i.translate : -i.translate;
  function g(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  l(g, "normalize");
  const h = g(m),
    f = n.map((w) => g(w)),
    p = r.freeMode && r.freeMode.enabled;
  let v = n[f.indexOf(h) - 1];
  if (typeof v > "u" && (r.cssMode || p)) {
    let w;
    n.forEach((y, b) => {
      h >= y && (w = b);
    }),
      typeof w < "u" && (v = p ? n[w] : n[w > 0 ? w - 1 : w]);
  }
  let _ = 0;
  if (
    (typeof v < "u" &&
      ((_ = a.indexOf(v)),
      _ < 0 && (_ = i.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((_ = _ - i.slidesPerViewDynamic("previous", !0) + 1),
        (_ = Math.max(_, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const w =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(w, s, e, t);
  } else if (r.loop && i.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(_, s, e, t);
      }),
      !0
    );
  return i.slideTo(_, s, e, t);
}
l(Ud, "slidePrev");
function Kd(s, e, t) {
  e === void 0 && (e = !0);
  const i = this;
  if (!i.destroyed)
    return (
      typeof s > "u" && (s = i.params.speed), i.slideTo(i.activeIndex, s, e, t)
    );
}
l(Kd, "slideReset");
function Zd(s, e, t, i) {
  e === void 0 && (e = !0), i === void 0 && (i = 0.5);
  const r = this;
  if (r.destroyed) return;
  typeof s > "u" && (s = r.params.speed);
  let n = r.activeIndex;
  const a = Math.min(r.params.slidesPerGroupSkip, n),
    o = a + Math.floor((n - a) / r.params.slidesPerGroup),
    c = r.rtlTranslate ? r.translate : -r.translate;
  if (c >= r.snapGrid[o]) {
    const u = r.snapGrid[o],
      d = r.snapGrid[o + 1];
    c - u > (d - u) * i && (n += r.params.slidesPerGroup);
  } else {
    const u = r.snapGrid[o - 1],
      d = r.snapGrid[o];
    c - u <= (d - u) * i && (n -= r.params.slidesPerGroup);
  }
  return (
    (n = Math.max(n, 0)),
    (n = Math.min(n, r.slidesGrid.length - 1)),
    r.slideTo(n, s, e, t)
  );
}
l(Zd, "slideToClosest");
function Qd() {
  const s = this;
  if (s.destroyed) return;
  const { params: e, slidesEl: t } = s,
    i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
  let r = s.clickedIndex,
    n;
  const a = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (s.animating) return;
    (n = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? r < s.loopedSlides - i / 2 ||
          r > s.slides.length - s.loopedSlides + i / 2
          ? (s.loopFix(),
            (r = s.getSlideIndex(
              Je(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
            )),
            _r(() => {
              s.slideTo(r);
            }))
          : s.slideTo(r)
        : r > s.slides.length - i
        ? (s.loopFix(),
          (r = s.getSlideIndex(
            Je(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
          )),
          _r(() => {
            s.slideTo(r);
          }))
        : s.slideTo(r);
  } else s.slideTo(r);
}
l(Qd, "slideToClickedSlide");
var Jd = {
  slideTo: Xd,
  slideToLoop: Gd,
  slideNext: jd,
  slidePrev: Ud,
  slideReset: Kd,
  slideToClosest: Zd,
  slideToClickedSlide: Qd,
};
function ef(s, e) {
  const t = this,
    { params: i, slidesEl: r } = t;
  if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
  const n = l(() => {
      Je(r, `.${i.slideClass}, swiper-slide`).forEach((g, h) => {
        g.setAttribute("data-swiper-slide-index", h);
      });
    }, "initSlides"),
    a = t.grid && i.grid && i.grid.rows > 1,
    o = i.slidesPerGroup * (a ? i.grid.rows : 1),
    c = t.slides.length % o !== 0,
    u = a && t.slides.length % i.grid.rows !== 0,
    d = l((m) => {
      for (let g = 0; g < m; g += 1) {
        const h = t.isElement
          ? $t("swiper-slide", [i.slideBlankClass])
          : $t("div", [i.slideClass, i.slideBlankClass]);
        t.slidesEl.append(h);
      }
    }, "addBlankSlides");
  if (c) {
    if (i.loopAddBlankSlides) {
      const m = o - (t.slides.length % o);
      d(m), t.recalcSlides(), t.updateSlides();
    } else
      In(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    n();
  } else if (u) {
    if (i.loopAddBlankSlides) {
      const m = i.grid.rows - (t.slides.length % i.grid.rows);
      d(m), t.recalcSlides(), t.updateSlides();
    } else
      In(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    n();
  } else n();
  t.loopFix({
    slideRealIndex: s,
    direction: i.centeredSlides ? void 0 : "next",
    initial: e,
  });
}
l(ef, "loopCreate");
function tf(s) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: i,
    setTranslate: r,
    activeSlideIndex: n,
    initial: a,
    byController: o,
    byMousewheel: c,
  } = s === void 0 ? {} : s;
  const u = this;
  if (!u.params.loop) return;
  u.emit("beforeLoopFix");
  const {
      slides: d,
      allowSlidePrev: m,
      allowSlideNext: g,
      slidesEl: h,
      params: f,
    } = u,
    { centeredSlides: p, initialSlide: v } = f;
  if (
    ((u.allowSlidePrev = !0),
    (u.allowSlideNext = !0),
    u.virtual && f.virtual.enabled)
  ) {
    t &&
      (!f.centeredSlides && u.snapIndex === 0
        ? u.slideTo(u.virtual.slides.length, 0, !1, !0)
        : f.centeredSlides && u.snapIndex < f.slidesPerView
        ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
        : u.snapIndex === u.snapGrid.length - 1 &&
          u.slideTo(u.virtual.slidesBefore, 0, !1, !0)),
      (u.allowSlidePrev = m),
      (u.allowSlideNext = g),
      u.emit("loopFix");
    return;
  }
  let _ = f.slidesPerView;
  _ === "auto"
    ? (_ = u.slidesPerViewDynamic())
    : ((_ = Math.ceil(parseFloat(f.slidesPerView, 10))),
      p && _ % 2 === 0 && (_ = _ + 1));
  const w = f.slidesPerGroupAuto ? _ : f.slidesPerGroup;
  let y = w;
  y % w !== 0 && (y += w - (y % w)),
    (y += f.loopAdditionalSlides),
    (u.loopedSlides = y);
  const b = u.grid && f.grid && f.grid.rows > 1;
  d.length < _ + y || (u.params.effect === "cards" && d.length < _ + y * 2)
    ? In(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : b &&
      f.grid.fill === "row" &&
      In(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const S = [],
    x = [],
    T = b ? Math.ceil(d.length / f.grid.rows) : d.length,
    M = a && T - v < _ && !p;
  let E = M ? v : u.activeIndex;
  typeof n > "u"
    ? (n = u.getSlideIndex(
        d.find((z) => z.classList.contains(f.slideActiveClass))
      ))
    : (E = n);
  const C = i === "next" || !i,
    I = i === "prev" || !i;
  let A = 0,
    k = 0;
  const R = (b ? d[n].column : n) + (p && typeof r > "u" ? -_ / 2 + 0.5 : 0);
  if (R < y) {
    A = Math.max(y - R, w);
    for (let z = 0; z < y - R; z += 1) {
      const O = z - Math.floor(z / T) * T;
      if (b) {
        const L = T - O - 1;
        for (let N = d.length - 1; N >= 0; N -= 1)
          d[N].column === L && S.push(N);
      } else S.push(T - O - 1);
    }
  } else if (R + _ > T - y) {
    (k = Math.max(R - (T - y * 2), w)), M && (k = Math.max(k, _ - T + v + 1));
    for (let z = 0; z < k; z += 1) {
      const O = z - Math.floor(z / T) * T;
      b
        ? d.forEach((L, N) => {
            L.column === O && x.push(N);
          })
        : x.push(O);
    }
  }
  if (
    ((u.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      u.__preventObserver__ = !1;
    }),
    u.params.effect === "cards" &&
      d.length < _ + y * 2 &&
      (x.includes(n) && x.splice(x.indexOf(n), 1),
      S.includes(n) && S.splice(S.indexOf(n), 1)),
    I &&
      S.forEach((z) => {
        (d[z].swiperLoopMoveDOM = !0),
          h.prepend(d[z]),
          (d[z].swiperLoopMoveDOM = !1);
      }),
    C &&
      x.forEach((z) => {
        (d[z].swiperLoopMoveDOM = !0),
          h.append(d[z]),
          (d[z].swiperLoopMoveDOM = !1);
      }),
    u.recalcSlides(),
    f.slidesPerView === "auto"
      ? u.updateSlides()
      : b &&
        ((S.length > 0 && I) || (x.length > 0 && C)) &&
        u.slides.forEach((z, O) => {
          u.grid.updateSlide(O, z, u.slides);
        }),
    f.watchSlidesProgress && u.updateSlidesOffset(),
    t)
  ) {
    if (S.length > 0 && I) {
      if (typeof e > "u") {
        const z = u.slidesGrid[E],
          L = u.slidesGrid[E + A] - z;
        c
          ? u.setTranslate(u.translate - L)
          : (u.slideTo(E + Math.ceil(A), 0, !1, !0),
            r &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - L),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - L)));
      } else if (r) {
        const z = b ? S.length / f.grid.rows : S.length;
        u.slideTo(u.activeIndex + z, 0, !1, !0),
          (u.touchEventsData.currentTranslate = u.translate);
      }
    } else if (x.length > 0 && C)
      if (typeof e > "u") {
        const z = u.slidesGrid[E],
          L = u.slidesGrid[E - k] - z;
        c
          ? u.setTranslate(u.translate - L)
          : (u.slideTo(E - k, 0, !1, !0),
            r &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - L),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - L)));
      } else {
        const z = b ? x.length / f.grid.rows : x.length;
        u.slideTo(u.activeIndex - z, 0, !1, !0);
      }
  }
  if (
    ((u.allowSlidePrev = m),
    (u.allowSlideNext = g),
    u.controller && u.controller.control && !o)
  ) {
    const z = {
      slideRealIndex: e,
      direction: i,
      setTranslate: r,
      activeSlideIndex: n,
      byController: !0,
    };
    Array.isArray(u.controller.control)
      ? u.controller.control.forEach((O) => {
          !O.destroyed &&
            O.params.loop &&
            O.loopFix({
              ...z,
              slideTo: O.params.slidesPerView === f.slidesPerView ? t : !1,
            });
        })
      : u.controller.control instanceof u.constructor &&
        u.controller.control.params.loop &&
        u.controller.control.loopFix({
          ...z,
          slideTo:
            u.controller.control.params.slidesPerView === f.slidesPerView
              ? t
              : !1,
        });
  }
  u.emit("loopFix");
}
l(tf, "loopFix");
function rf() {
  const s = this,
    { params: e, slidesEl: t } = s;
  if (!e.loop || !t || (s.virtual && s.params.virtual.enabled)) return;
  s.recalcSlides();
  const i = [];
  s.slides.forEach((r) => {
    const n =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex;
    i[n] = r;
  }),
    s.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    i.forEach((r) => {
      t.append(r);
    }),
    s.recalcSlides(),
    s.slideTo(s.realIndex, 0);
}
l(rf, "loopDestroy");
var sf = { loopCreate: ef, loopFix: tf, loopDestroy: rf };
function nf(s) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (t.style.cursor = "move"),
    (t.style.cursor = s ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
l(nf, "setGrabCursor");
function af() {
  const s = this;
  (s.params.watchOverflow && s.isLocked) ||
    s.params.cssMode ||
    (s.isElement && (s.__preventObserver__ = !0),
    (s[
      s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    s.isElement &&
      requestAnimationFrame(() => {
        s.__preventObserver__ = !1;
      }));
}
l(af, "unsetGrabCursor");
var of = { setGrabCursor: nf, unsetGrabCursor: af };
function lf(s, e) {
  e === void 0 && (e = this);
  function t(i) {
    if (!i || i === je() || i === Ee()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(s);
    return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
  }
  return l(t, "__closestFrom"), t(e);
}
l(lf, "closestElement");
function tl(s, e, t) {
  const i = Ee(),
    { params: r } = s,
    n = r.edgeSwipeDetection,
    a = r.edgeSwipeThreshold;
  return n && (t <= a || t >= i.innerWidth - a)
    ? n === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
l(tl, "preventEdgeSwipe");
function cf(s) {
  const e = this,
    t = je();
  let i = s;
  i.originalEvent && (i = i.originalEvent);
  const r = e.touchEventsData;
  if (i.type === "pointerdown") {
    if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
    r.pointerId = i.pointerId;
  } else
    i.type === "touchstart" &&
      i.targetTouches.length === 1 &&
      (r.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    tl(e, i, i.targetTouches[0].pageX);
    return;
  }
  const { params: n, touches: a, enabled: o } = e;
  if (
    !o ||
    (!n.simulateTouch && i.pointerType === "mouse") ||
    (e.animating && n.preventInteractionOnTransition)
  )
    return;
  !e.animating && n.cssMode && n.loop && e.loopFix();
  let c = i.target;
  if (
    (n.touchEventsTarget === "wrapper" && !gd(c, e.wrapperEl)) ||
    ("which" in i && i.which === 3) ||
    ("button" in i && i.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const u = !!n.noSwipingClass && n.noSwipingClass !== "",
    d = i.composedPath ? i.composedPath() : i.path;
  u && i.target && i.target.shadowRoot && d && (c = d[0]);
  const m = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
    g = !!(i.target && i.target.shadowRoot);
  if (n.noSwiping && (g ? lf(m, c) : c.closest(m))) {
    e.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !c.closest(n.swipeHandler)) return;
  (a.currentX = i.pageX), (a.currentY = i.pageY);
  const h = a.currentX,
    f = a.currentY;
  if (!tl(e, i, h)) return;
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (a.startX = h),
    (a.startY = f),
    (r.touchStartTime = Gt()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    n.threshold > 0 && (r.allowThresholdMove = !1);
  let p = !0;
  c.matches(r.focusableElements) &&
    ((p = !1), c.nodeName === "SELECT" && (r.isTouched = !1)),
    t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== c &&
      (i.pointerType === "mouse" ||
        (i.pointerType !== "mouse" && !c.matches(r.focusableElements))) &&
      t.activeElement.blur();
  const v = p && e.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || v) &&
    !c.isContentEditable &&
    i.preventDefault(),
    n.freeMode &&
      n.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !n.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", i);
}
l(cf, "onTouchStart");
function uf(s) {
  const e = je(),
    t = this,
    i = t.touchEventsData,
    { params: r, touches: n, rtlTranslate: a, enabled: o } = t;
  if (!o || (!r.simulateTouch && s.pointerType === "mouse")) return;
  let c = s;
  if (
    (c.originalEvent && (c = c.originalEvent),
    c.type === "pointermove" &&
      (i.touchId !== null || c.pointerId !== i.pointerId))
  )
    return;
  let u;
  if (c.type === "touchmove") {
    if (
      ((u = [...c.changedTouches].find((x) => x.identifier === i.touchId)),
      !u || u.identifier !== i.touchId)
    )
      return;
  } else u = c;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", c);
    return;
  }
  const d = u.pageX,
    m = u.pageY;
  if (c.preventedByNestedSwiper) {
    (n.startX = d), (n.startY = m);
    return;
  }
  if (!t.allowTouchMove) {
    c.target.matches(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(n, { startX: d, startY: m, currentX: d, currentY: m }),
        (i.touchStartTime = Gt()));
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop)
    if (t.isVertical()) {
      if (
        (m < n.startY && t.translate <= t.maxTranslate()) ||
        (m > n.startY && t.translate >= t.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else {
      if (
        a &&
        ((d > n.startX && -t.translate <= t.maxTranslate()) ||
          (d < n.startX && -t.translate >= t.minTranslate()))
      )
        return;
      if (
        !a &&
        ((d < n.startX && t.translate <= t.maxTranslate()) ||
          (d > n.startX && t.translate >= t.minTranslate()))
      )
        return;
    }
  if (
    (e.activeElement &&
      e.activeElement.matches(i.focusableElements) &&
      e.activeElement !== c.target &&
      c.pointerType !== "mouse" &&
      e.activeElement.blur(),
    e.activeElement &&
      c.target === e.activeElement &&
      c.target.matches(i.focusableElements))
  ) {
    (i.isMoved = !0), (t.allowClick = !1);
    return;
  }
  i.allowTouchCallbacks && t.emit("touchMove", c),
    (n.previousX = n.currentX),
    (n.previousY = n.currentY),
    (n.currentX = d),
    (n.currentY = m);
  const g = n.currentX - n.startX,
    h = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(g ** 2 + h ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let x;
    (t.isHorizontal() && n.currentY === n.startY) ||
    (t.isVertical() && n.currentX === n.startX)
      ? (i.isScrolling = !1)
      : g * g + h * h >= 25 &&
        ((x = (Math.atan2(Math.abs(h), Math.abs(g)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? x > r.touchAngle
          : 90 - x > r.touchAngle));
  }
  if (
    (i.isScrolling && t.emit("touchMoveOpposite", c),
    typeof i.startMoving > "u" &&
      (n.currentX !== n.startX || n.currentY !== n.startY) &&
      (i.startMoving = !0),
    i.isScrolling ||
      (c.type === "touchmove" && i.preventTouchMoveFromPointerMove))
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (t.allowClick = !1),
    !r.cssMode && c.cancelable && c.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
  let f = t.isHorizontal() ? g : h,
    p = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  r.oneWayMovement &&
    ((f = Math.abs(f) * (a ? 1 : -1)), (p = Math.abs(p) * (a ? 1 : -1))),
    (n.diff = f),
    (f *= r.touchRatio),
    a && ((f = -f), (p = -p));
  const v = t.touchesDirection;
  (t.swipeDirection = f > 0 ? "prev" : "next"),
    (t.touchesDirection = p > 0 ? "prev" : "next");
  const _ = t.params.loop && !r.cssMode,
    w =
      (t.touchesDirection === "next" && t.allowSlideNext) ||
      (t.touchesDirection === "prev" && t.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (_ && w && t.loopFix({ direction: t.swipeDirection }),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating)
    ) {
      const x = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      t.wrapperEl.dispatchEvent(x);
    }
    (i.allowMomentumBounce = !1),
      r.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", c);
  }
  let y;
  if (
    (new Date().getTime(),
    r._loopSwapReset !== !1 &&
      i.isMoved &&
      i.allowThresholdMove &&
      v !== t.touchesDirection &&
      _ &&
      w &&
      Math.abs(f) >= 1)
  ) {
    Object.assign(n, {
      startX: d,
      startY: m,
      currentX: d,
      currentY: m,
      startTranslate: i.currentTranslate,
    }),
      (i.loopSwapReset = !0),
      (i.startTranslate = i.currentTranslate);
    return;
  }
  t.emit("sliderMove", c),
    (i.isMoved = !0),
    (i.currentTranslate = f + i.startTranslate);
  let b = !0,
    S = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (S = 0),
    f > 0
      ? (_ &&
          w &&
          !y &&
          i.allowThresholdMove &&
          i.currentTranslate >
            (r.centeredSlides
              ? t.minTranslate() -
                t.slidesSizesGrid[t.activeIndex + 1] -
                (r.slidesPerView !== "auto" &&
                t.slides.length - r.slidesPerView >= 2
                  ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween
                  : 0) -
                t.params.spaceBetween
              : t.minTranslate()) &&
          t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > t.minTranslate() &&
          ((b = !1),
          r.resistance &&
            (i.currentTranslate =
              t.minTranslate() -
              1 +
              (-t.minTranslate() + i.startTranslate + f) ** S)))
      : f < 0 &&
        (_ &&
          w &&
          !y &&
          i.allowThresholdMove &&
          i.currentTranslate <
            (r.centeredSlides
              ? t.maxTranslate() +
                t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                t.params.spaceBetween +
                (r.slidesPerView !== "auto" &&
                t.slides.length - r.slidesPerView >= 2
                  ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                    t.params.spaceBetween
                  : 0)
              : t.maxTranslate()) &&
          t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              t.slides.length -
              (r.slidesPerView === "auto"
                ? t.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        i.currentTranslate < t.maxTranslate() &&
          ((b = !1),
          r.resistance &&
            (i.currentTranslate =
              t.maxTranslate() +
              1 -
              (t.maxTranslate() - i.startTranslate - f) ** S))),
    b && (c.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(f) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          (n.diff = t.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY);
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
      r.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate));
}
l(uf, "onTouchMove");
function df(s) {
  const e = this,
    t = e.touchEventsData;
  let i = s;
  i.originalEvent && (i = i.originalEvent);
  let r;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (
      ((r = [...i.changedTouches].find((S) => S.identifier === t.touchId)),
      !r || r.identifier !== t.touchId)
    )
      return;
  } else {
    if (t.touchId !== null || i.pointerId !== t.pointerId) return;
    r = i;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      i.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(i.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return;
  (t.pointerId = null), (t.touchId = null);
  const {
    params: a,
    touches: o,
    rtlTranslate: c,
    slidesGrid: u,
    enabled: d,
  } = e;
  if (!d || (!a.simulateTouch && i.pointerType === "mouse")) return;
  if (
    (t.allowTouchCallbacks && e.emit("touchEnd", i),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    t.isMoved && a.grabCursor && e.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1);
    return;
  }
  a.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const m = Gt(),
    g = m - t.touchStartTime;
  if (e.allowClick) {
    const S = i.path || (i.composedPath && i.composedPath());
    e.updateClickedSlide((S && S[0]) || i.target, S),
      e.emit("tap click", i),
      g < 300 &&
        m - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", i);
  }
  if (
    ((t.lastClickTime = Gt()),
    _r(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !e.swipeDirection ||
      (o.diff === 0 && !t.loopSwapReset) ||
      (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
  ) {
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    return;
  }
  (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
  let h;
  if (
    (a.followFinger
      ? (h = c ? e.translate : -e.translate)
      : (h = -t.currentTranslate),
    a.cssMode)
  )
    return;
  if (a.freeMode && a.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  const f = h >= -e.maxTranslate() && !e.params.loop;
  let p = 0,
    v = e.slidesSizesGrid[0];
  for (
    let S = 0;
    S < u.length;
    S += S < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const x = S < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof u[S + x] < "u"
      ? (f || (h >= u[S] && h < u[S + x])) && ((p = S), (v = u[S + x] - u[S]))
      : (f || h >= u[S]) && ((p = S), (v = u[u.length - 1] - u[u.length - 2]));
  }
  let _ = null,
    w = null;
  a.rewind &&
    (e.isBeginning
      ? (w =
          a.virtual && a.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (_ = 0));
  const y = (h - u[p]) / v,
    b = p < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (g > a.longSwipesMs) {
    if (!a.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (y >= a.longSwipesRatio
        ? e.slideTo(a.rewind && e.isEnd ? _ : p + b)
        : e.slideTo(p)),
      e.swipeDirection === "prev" &&
        (y > 1 - a.longSwipesRatio
          ? e.slideTo(p + b)
          : w !== null && y < 0 && Math.abs(y) > a.longSwipesRatio
          ? e.slideTo(w)
          : e.slideTo(p));
  } else {
    if (!a.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
      ? i.target === e.navigation.nextEl
        ? e.slideTo(p + b)
        : e.slideTo(p)
      : (e.swipeDirection === "next" && e.slideTo(_ !== null ? _ : p + b),
        e.swipeDirection === "prev" && e.slideTo(w !== null ? w : p));
  }
}
l(df, "onTouchEnd");
function il() {
  const s = this,
    { params: e, el: t } = s;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && s.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = s,
    a = s.virtual && s.params.virtual.enabled;
  (s.allowSlideNext = !0),
    (s.allowSlidePrev = !0),
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses();
  const o = a && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  s.isEnd &&
  !s.isBeginning &&
  !s.params.centeredSlides &&
  !o
    ? s.slideTo(s.slides.length - 1, 0, !1, !0)
    : s.params.loop && !a
    ? s.slideToLoop(s.realIndex, 0, !1, !0)
    : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay &&
      s.autoplay.running &&
      s.autoplay.paused &&
      (clearTimeout(s.autoplay.resizeTimeout),
      (s.autoplay.resizeTimeout = setTimeout(() => {
        s.autoplay &&
          s.autoplay.running &&
          s.autoplay.paused &&
          s.autoplay.resume();
      }, 500))),
    (s.allowSlidePrev = r),
    (s.allowSlideNext = i),
    s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow();
}
l(il, "onResize");
function ff(s) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && s.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (s.stopPropagation(), s.stopImmediatePropagation())));
}
l(ff, "onClick");
function pf() {
  const s = this,
    { wrapperEl: e, rtlTranslate: t, enabled: i } = s;
  if (!i) return;
  (s.previousTranslate = s.translate),
    s.isHorizontal()
      ? (s.translate = -e.scrollLeft)
      : (s.translate = -e.scrollTop),
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses();
  let r;
  const n = s.maxTranslate() - s.minTranslate();
  n === 0 ? (r = 0) : (r = (s.translate - s.minTranslate()) / n),
    r !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1);
}
l(pf, "onScroll");
function hf(s) {
  const e = this;
  _n(e, s.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
l(hf, "onLoad");
function mf() {
  const s = this;
  s.documentTouchHandlerProceeded ||
    ((s.documentTouchHandlerProceeded = !0),
    s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
}
l(mf, "onDocumentTouchStart");
const dc = l((s, e) => {
  const t = je(),
    { params: i, el: r, wrapperEl: n, device: a } = s,
    o = !!i.nested,
    c = e === "on" ? "addEventListener" : "removeEventListener",
    u = e;
  !r ||
    typeof r == "string" ||
    (t[c]("touchstart", s.onDocumentTouchStart, { passive: !1, capture: o }),
    r[c]("touchstart", s.onTouchStart, { passive: !1 }),
    r[c]("pointerdown", s.onTouchStart, { passive: !1 }),
    t[c]("touchmove", s.onTouchMove, { passive: !1, capture: o }),
    t[c]("pointermove", s.onTouchMove, { passive: !1, capture: o }),
    t[c]("touchend", s.onTouchEnd, { passive: !0 }),
    t[c]("pointerup", s.onTouchEnd, { passive: !0 }),
    t[c]("pointercancel", s.onTouchEnd, { passive: !0 }),
    t[c]("touchcancel", s.onTouchEnd, { passive: !0 }),
    t[c]("pointerout", s.onTouchEnd, { passive: !0 }),
    t[c]("pointerleave", s.onTouchEnd, { passive: !0 }),
    t[c]("contextmenu", s.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      r[c]("click", s.onClick, !0),
    i.cssMode && n[c]("scroll", s.onScroll),
    i.updateOnWindowResize
      ? s[u](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          il,
          !0
        )
      : s[u]("observerUpdate", il, !0),
    r[c]("load", s.onLoad, { capture: !0 }));
}, "events");
function gf() {
  const s = this,
    { params: e } = s;
  (s.onTouchStart = cf.bind(s)),
    (s.onTouchMove = uf.bind(s)),
    (s.onTouchEnd = df.bind(s)),
    (s.onDocumentTouchStart = mf.bind(s)),
    e.cssMode && (s.onScroll = pf.bind(s)),
    (s.onClick = ff.bind(s)),
    (s.onLoad = hf.bind(s)),
    dc(s, "on");
}
l(gf, "attachEvents");
function vf() {
  dc(this, "off");
}
l(vf, "detachEvents");
var yf = { attachEvents: gf, detachEvents: vf };
const rl = l((s, e) => s.grid && e.grid && e.grid.rows > 1, "isGridEnabled");
function wf() {
  const s = this,
    { realIndex: e, initialized: t, params: i, el: r } = s,
    n = i.breakpoints;
  if (!n || (n && Object.keys(n).length === 0)) return;
  const a = je(),
    o =
      i.breakpointsBase === "window" || !i.breakpointsBase
        ? i.breakpointsBase
        : "container",
    c =
      ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase
        ? s.el
        : a.querySelector(i.breakpointsBase),
    u = s.getBreakpoint(n, o, c);
  if (!u || s.currentBreakpoint === u) return;
  const m = (u in n ? n[u] : void 0) || s.originalParams,
    g = rl(s, i),
    h = rl(s, m),
    f = s.params.grabCursor,
    p = m.grabCursor,
    v = i.enabled;
  g && !h
    ? (r.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`
      ),
      s.emitContainerClasses())
    : !g &&
      h &&
      (r.classList.add(`${i.containerModifierClass}grid`),
      ((m.grid.fill && m.grid.fill === "column") ||
        (!m.grid.fill && i.grid.fill === "column")) &&
        r.classList.add(`${i.containerModifierClass}grid-column`),
      s.emitContainerClasses()),
    f && !p ? s.unsetGrabCursor() : !f && p && s.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((x) => {
      if (typeof m[x] > "u") return;
      const T = i[x] && i[x].enabled,
        M = m[x] && m[x].enabled;
      T && !M && s[x].disable(), !T && M && s[x].enable();
    });
  const _ = m.direction && m.direction !== i.direction,
    w = i.loop && (m.slidesPerView !== i.slidesPerView || _),
    y = i.loop;
  _ && t && s.changeDirection(), Lt(s.params, m);
  const b = s.params.enabled,
    S = s.params.loop;
  Object.assign(s, {
    allowTouchMove: s.params.allowTouchMove,
    allowSlideNext: s.params.allowSlideNext,
    allowSlidePrev: s.params.allowSlidePrev,
  }),
    v && !b ? s.disable() : !v && b && s.enable(),
    (s.currentBreakpoint = u),
    s.emit("_beforeBreakpoint", m),
    t &&
      (w
        ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
        : !y && S
        ? (s.loopCreate(e), s.updateSlides())
        : y && !S && s.loopDestroy()),
    s.emit("breakpoint", m);
}
l(wf, "setBreakpoint");
function _f(s, e, t) {
  if ((e === void 0 && (e = "window"), !s || (e === "container" && !t))) return;
  let i = !1;
  const r = Ee(),
    n = e === "window" ? r.innerHeight : t.clientHeight,
    a = Object.keys(s).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const c = parseFloat(o.substr(1));
        return { value: n * c, point: o };
      }
      return { value: o, point: o };
    });
  a.sort((o, c) => parseInt(o.value, 10) - parseInt(c.value, 10));
  for (let o = 0; o < a.length; o += 1) {
    const { point: c, value: u } = a[o];
    e === "window"
      ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = c)
      : u <= t.clientWidth && (i = c);
  }
  return i || "max";
}
l(_f, "getBreakpoint");
var bf = { setBreakpoint: wf, getBreakpoint: _f };
function Sf(s, e) {
  const t = [];
  return (
    s.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((r) => {
            i[r] && t.push(e + r);
          })
        : typeof i == "string" && t.push(e + i);
    }),
    t
  );
}
l(Sf, "prepareClasses");
function xf() {
  const s = this,
    { classNames: e, params: t, rtl: i, el: r, device: n } = s,
    a = Sf(
      [
        "initialized",
        t.direction,
        { "free-mode": s.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: i },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: n.android },
        { ios: n.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
        { "watch-progress": t.watchSlidesProgress },
      ],
      t.containerModifierClass
    );
  e.push(...a), r.classList.add(...e), s.emitContainerClasses();
}
l(xf, "addClasses");
function Tf() {
  const s = this,
    { el: e, classNames: t } = s;
  !e ||
    typeof e == "string" ||
    (e.classList.remove(...t), s.emitContainerClasses());
}
l(Tf, "removeClasses");
var Ef = { addClasses: xf, removeClasses: Tf };
function Cf() {
  const s = this,
    { isLocked: e, params: t } = s,
    { slidesOffsetBefore: i } = t;
  if (i) {
    const r = s.slides.length - 1,
      n = s.slidesGrid[r] + s.slidesSizesGrid[r] + i * 2;
    s.isLocked = s.size > n;
  } else s.isLocked = s.snapGrid.length === 1;
  t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    e && e !== s.isLocked && (s.isEnd = !1),
    e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
}
l(Cf, "checkOverflow");
var Mf = { checkOverflow: Cf },
  sl = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Pf(s, e) {
  return l(function (i) {
    i === void 0 && (i = {});
    const r = Object.keys(i)[0],
      n = i[r];
    if (typeof n != "object" || n === null) {
      Lt(e, i);
      return;
    }
    if (
      (s[r] === !0 && (s[r] = { enabled: !0 }),
      r === "navigation" &&
        s[r] &&
        s[r].enabled &&
        !s[r].prevEl &&
        !s[r].nextEl &&
        (s[r].auto = !0),
      ["pagination", "scrollbar"].indexOf(r) >= 0 &&
        s[r] &&
        s[r].enabled &&
        !s[r].el &&
        (s[r].auto = !0),
      !(r in s && "enabled" in n))
    ) {
      Lt(e, i);
      return;
    }
    typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0),
      s[r] || (s[r] = { enabled: !1 }),
      Lt(e, i);
  }, "extendParams");
}
l(Pf, "moduleExtendParams");
const ua = {
    eventsEmitter: Td,
    update: zd,
    translate: Bd,
    transition: Yd,
    slide: Jd,
    loop: sf,
    grabCursor: of,
    events: yf,
    breakpoints: bf,
    checkOverflow: Mf,
    classes: Ef,
  },
  da = {},
  ni = class ni {
    constructor() {
      let e, t;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
        r[n] = arguments[n];
      r.length === 1 &&
      r[0].constructor &&
      Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
        ? (t = r[0])
        : ([e, t] = r),
        t || (t = {}),
        (t = Lt({}, t)),
        e && !t.el && (t.el = e);
      const a = je();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const d = [];
        return (
          a.querySelectorAll(t.el).forEach((m) => {
            const g = Lt({}, t, { el: m });
            d.push(new ni(g));
          }),
          d
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = oc()),
        (o.device = lc({ userAgent: t.userAgent })),
        (o.browser = cc()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const c = {};
      o.modules.forEach((d) => {
        d({
          params: t,
          swiper: o,
          extendParams: Pf(t, c),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const u = Lt({}, sl, c);
      return (
        (o.params = Lt({}, u, da, t)),
        (o.originalParams = Lt({}, o.params)),
        (o.passedParams = Lt({}, t)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((d) => {
            o.on(d, o.params.on[d]);
          }),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
          enabled: o.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return o.params.direction === "horizontal";
          },
          isVertical() {
            return o.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: o.params.allowSlideNext,
          allowSlidePrev: o.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: o.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: o.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this,
        r = Je(t, `.${i.slideClass}, swiper-slide`),
        n = qs(r[0]);
      return qs(e) - n;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.find(
          (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
        )
      );
    }
    recalcSlides() {
      const e = this,
        { slidesEl: t, params: i } = e;
      e.slides = Je(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(),
        a = (i.maxTranslate() - r) * e + r;
      i.translateTo(a, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (i) =>
            i.indexOf("swiper") === 0 ||
            i.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (i) =>
                i.indexOf("swiper-slide") === 0 ||
                i.indexOf(t.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const r = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const i = this,
        {
          params: r,
          slides: n,
          slidesGrid: a,
          slidesSizesGrid: o,
          size: c,
          activeIndex: u,
        } = i;
      let d = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let m = n[u] ? Math.ceil(n[u].swiperSlideSize) : 0,
          g;
        for (let h = u + 1; h < n.length; h += 1)
          n[h] &&
            !g &&
            ((m += Math.ceil(n[h].swiperSlideSize)),
            (d += 1),
            m > c && (g = !0));
        for (let h = u - 1; h >= 0; h -= 1)
          n[h] &&
            !g &&
            ((m += n[h].swiperSlideSize), (d += 1), m > c && (g = !0));
      } else if (e === "current")
        for (let m = u + 1; m < n.length; m += 1)
          (t ? a[m] + o[m] - a[u] < c : a[m] - a[u] < c) && (d += 1);
      else for (let m = u - 1; m >= 0; m -= 1) a[u] - a[m] < c && (d += 1);
      return d;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
          a.complete && _n(e, a);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function r() {
        const a = e.rtlTranslate ? e.translate * -1 : e.translate,
          o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
        e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      l(r, "setTranslate");
      let n;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
        r(), i.autoHeight && e.updateAutoHeight();
      else {
        if (
          (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
          e.isEnd &&
          !i.centeredSlides
        ) {
          const a =
            e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          n = e.slideTo(a.length - 1, 0, !1, !0);
        } else n = e.slideTo(e.activeIndex, 0, !1, !0);
        n || r();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const i = this,
        r = i.params.direction;
      return (
        e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r ||
          (e !== "horizontal" && e !== "vertical") ||
          (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
          i.el.classList.add(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.forEach((n) => {
            e === "vertical" ? (n.style.width = "") : (n.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && e === "rtl") ||
        (!t.rtl && e === "ltr") ||
        ((t.rtl = e === "rtl"),
        (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if ((typeof i == "string" && (i = document.querySelector(i)), !i))
        return !1;
      (i.swiper = t),
        i.parentNode &&
          i.parentNode.host &&
          i.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const r = l(
        () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
        "getWrapperSelector"
      );
      let a = l(
        () =>
          i && i.shadowRoot && i.shadowRoot.querySelector
            ? i.shadowRoot.querySelector(r())
            : Je(i, r())[0],
        "getWrapper"
      )();
      return (
        !a &&
          t.params.createElements &&
          ((a = $t("div", t.params.wrapperClass)),
          i.append(a),
          Je(i, `.${t.params.slideClass}`).forEach((o) => {
            a.append(o);
          })),
        Object.assign(t, {
          el: i,
          wrapperEl: a,
          slidesEl:
            t.isElement && !i.parentNode.host.slideSlots
              ? i.parentNode.host
              : a,
          hostEl: t.isElement ? i.parentNode.host : i,
          mounted: !0,
          rtl: i.dir.toLowerCase() === "rtl" || Ni(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || Ni(i, "direction") === "rtl"),
          wrongRTL: Ni(a, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(void 0, !0),
        t.attachEvents();
      const r = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach((n) => {
          n.complete
            ? _n(t, n)
            : n.addEventListener("load", (a) => {
                _n(t, a.target);
              });
        }),
        La(t),
        (t.initialized = !0),
        La(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const i = this,
        { params: r, el: n, wrapperEl: a, slides: o } = i;
      return (
        typeof i.params > "u" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            n && typeof n != "string" && n.removeAttribute("style"),
            a && a.removeAttribute("style"),
            o &&
              o.length &&
              o.forEach((c) => {
                c.classList.remove(
                  r.slideVisibleClass,
                  r.slideFullyVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  c.removeAttribute("style"),
                  c.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((c) => {
            i.off(c);
          }),
          e !== !1 &&
            (i.el && typeof i.el != "string" && (i.el.swiper = null), fd(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Lt(da, e);
    }
    static get extendedDefaults() {
      return da;
    }
    static get defaults() {
      return sl;
    }
    static installModule(e) {
      ni.prototype.__modules__ || (ni.prototype.__modules__ = []);
      const t = ni.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => ni.installModule(t)), ni)
        : (ni.installModule(e), ni);
    }
  };
l(ni, "Swiper");
let br = ni;
Object.keys(ua).forEach((s) => {
  Object.keys(ua[s]).forEach((e) => {
    br.prototype[e] = ua[s][e];
  });
});
br.use([Sd, xd]);
function Af(s) {
  let { swiper: e, extendParams: t, on: i, emit: r } = s;
  t({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0,
    },
  });
  let n;
  const a = je();
  e.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: [],
  };
  const o = a.createElement("div");
  function c(f, p) {
    const v = e.params.virtual;
    if (v.cache && e.virtual.cache[p]) return e.virtual.cache[p];
    let _;
    return (
      v.renderSlide
        ? ((_ = v.renderSlide.call(e, f, p)),
          typeof _ == "string" && ((o.innerHTML = _), (_ = o.children[0])))
        : e.isElement
        ? (_ = $t("swiper-slide"))
        : (_ = $t("div", e.params.slideClass)),
      _.setAttribute("data-swiper-slide-index", p),
      v.renderSlide || (_.innerHTML = f),
      v.cache && (e.virtual.cache[p] = _),
      _
    );
  }
  l(c, "renderSlide");
  function u(f, p, v) {
    const {
      slidesPerView: _,
      slidesPerGroup: w,
      centeredSlides: y,
      loop: b,
      initialSlide: S,
    } = e.params;
    if (p && !b && S > 0) return;
    const { addSlidesBefore: x, addSlidesAfter: T } = e.params.virtual,
      { from: M, to: E, slides: C, slidesGrid: I, offset: A } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const k = typeof v > "u" ? e.activeIndex || 0 : v;
    let D;
    e.rtlTranslate ? (D = "right") : (D = e.isHorizontal() ? "left" : "top");
    let R, z;
    y
      ? ((R = Math.floor(_ / 2) + w + T), (z = Math.floor(_ / 2) + w + x))
      : ((R = _ + (w - 1) + T), (z = (b ? _ : w) + x));
    let O = k - z,
      L = k + R;
    b || ((O = Math.max(O, 0)), (L = Math.min(L, C.length - 1)));
    let N = (e.slidesGrid[O] || 0) - (e.slidesGrid[0] || 0);
    b && k >= z
      ? ((O -= z), y || (N += e.slidesGrid[0]))
      : b && k < z && ((O = -z), y && (N += e.slidesGrid[0])),
      Object.assign(e.virtual, {
        from: O,
        to: L,
        offset: N,
        slidesGrid: e.slidesGrid,
        slidesBefore: z,
        slidesAfter: R,
      });
    function P() {
      e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        r("virtualUpdate");
    }
    if ((l(P, "onRendered"), M === O && E === L && !f)) {
      e.slidesGrid !== I &&
        N !== A &&
        e.slides.forEach((q) => {
          q.style[D] = `${N - Math.abs(e.cssOverflowAdjustment())}px`;
        }),
        e.updateProgress(),
        r("virtualUpdate");
      return;
    }
    if (e.params.virtual.renderExternal) {
      e.params.virtual.renderExternal.call(e, {
        offset: N,
        from: O,
        to: L,
        slides: l(function () {
          const B = [];
          for (let U = O; U <= L; U += 1) B.push(C[U]);
          return B;
        }, "getSlides")(),
      }),
        e.params.virtual.renderExternalUpdate ? P() : r("virtualUpdate");
      return;
    }
    const Y = [],
      Z = [],
      fe = l((q) => {
        let B = q;
        return (
          q < 0 ? (B = C.length + q) : B >= C.length && (B = B - C.length), B
        );
      }, "getSlideIndex");
    if (f)
      e.slides
        .filter((q) => q.matches(`.${e.params.slideClass}, swiper-slide`))
        .forEach((q) => {
          q.remove();
        });
    else
      for (let q = M; q <= E; q += 1)
        if (q < O || q > L) {
          const B = fe(q);
          e.slides
            .filter((U) =>
              U.matches(
                `.${e.params.slideClass}[data-swiper-slide-index="${B}"], swiper-slide[data-swiper-slide-index="${B}"]`
              )
            )
            .forEach((U) => {
              U.remove();
            });
        }
    const ue = b ? -C.length : 0,
      F = b ? C.length * 2 : C.length;
    for (let q = ue; q < F; q += 1)
      if (q >= O && q <= L) {
        const B = fe(q);
        typeof E > "u" || f
          ? Z.push(B)
          : (q > E && Z.push(B), q < M && Y.push(B));
      }
    if (
      (Z.forEach((q) => {
        e.slidesEl.append(c(C[q], q));
      }),
      b)
    )
      for (let q = Y.length - 1; q >= 0; q -= 1) {
        const B = Y[q];
        e.slidesEl.prepend(c(C[B], B));
      }
    else
      Y.sort((q, B) => B - q),
        Y.forEach((q) => {
          e.slidesEl.prepend(c(C[q], q));
        });
    Je(e.slidesEl, ".swiper-slide, swiper-slide").forEach((q) => {
      q.style[D] = `${N - Math.abs(e.cssOverflowAdjustment())}px`;
    }),
      P();
  }
  l(u, "update");
  function d(f) {
    if (typeof f == "object" && "length" in f)
      for (let p = 0; p < f.length; p += 1) f[p] && e.virtual.slides.push(f[p]);
    else e.virtual.slides.push(f);
    u(!0);
  }
  l(d, "appendSlide");
  function m(f) {
    const p = e.activeIndex;
    let v = p + 1,
      _ = 1;
    if (Array.isArray(f)) {
      for (let w = 0; w < f.length; w += 1)
        f[w] && e.virtual.slides.unshift(f[w]);
      (v = p + f.length), (_ = f.length);
    } else e.virtual.slides.unshift(f);
    if (e.params.virtual.cache) {
      const w = e.virtual.cache,
        y = {};
      Object.keys(w).forEach((b) => {
        const S = w[b],
          x = S.getAttribute("data-swiper-slide-index");
        x && S.setAttribute("data-swiper-slide-index", parseInt(x, 10) + _),
          (y[parseInt(b, 10) + _] = S);
      }),
        (e.virtual.cache = y);
    }
    u(!0), e.slideTo(v, 0);
  }
  l(m, "prependSlide");
  function g(f) {
    if (typeof f > "u" || f === null) return;
    let p = e.activeIndex;
    if (Array.isArray(f))
      for (let v = f.length - 1; v >= 0; v -= 1)
        e.params.virtual.cache &&
          (delete e.virtual.cache[f[v]],
          Object.keys(e.virtual.cache).forEach((_) => {
            _ > f &&
              ((e.virtual.cache[_ - 1] = e.virtual.cache[_]),
              e.virtual.cache[_ - 1].setAttribute(
                "data-swiper-slide-index",
                _ - 1
              ),
              delete e.virtual.cache[_]);
          })),
          e.virtual.slides.splice(f[v], 1),
          f[v] < p && (p -= 1),
          (p = Math.max(p, 0));
    else
      e.params.virtual.cache &&
        (delete e.virtual.cache[f],
        Object.keys(e.virtual.cache).forEach((v) => {
          v > f &&
            ((e.virtual.cache[v - 1] = e.virtual.cache[v]),
            e.virtual.cache[v - 1].setAttribute(
              "data-swiper-slide-index",
              v - 1
            ),
            delete e.virtual.cache[v]);
        })),
        e.virtual.slides.splice(f, 1),
        f < p && (p -= 1),
        (p = Math.max(p, 0));
    u(!0), e.slideTo(p, 0);
  }
  l(g, "removeSlide");
  function h() {
    (e.virtual.slides = []),
      e.params.virtual.cache && (e.virtual.cache = {}),
      u(!0),
      e.slideTo(0, 0);
  }
  l(h, "removeAllSlides"),
    i("beforeInit", () => {
      if (!e.params.virtual.enabled) return;
      let f;
      if (typeof e.passedParams.virtual.slides > "u") {
        const p = [...e.slidesEl.children].filter((v) =>
          v.matches(`.${e.params.slideClass}, swiper-slide`)
        );
        p &&
          p.length &&
          ((e.virtual.slides = [...p]),
          (f = !0),
          p.forEach((v, _) => {
            v.setAttribute("data-swiper-slide-index", _),
              (e.virtual.cache[_] = v),
              v.remove();
          }));
      }
      f || (e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        (e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0),
        u(!1, !0);
    }),
    i("setTranslate", () => {
      e.params.virtual.enabled &&
        (e.params.cssMode && !e._immediateVirtual
          ? (clearTimeout(n),
            (n = setTimeout(() => {
              u();
            }, 100)))
          : u());
    }),
    i("init update resize", () => {
      e.params.virtual.enabled &&
        e.params.cssMode &&
        ys(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
    }),
    Object.assign(e.virtual, {
      appendSlide: d,
      prependSlide: m,
      removeSlide: g,
      removeAllSlides: h,
      update: u,
    });
}
l(Af, "Virtual");
function Of(s) {
  let { swiper: e, extendParams: t, on: i, emit: r } = s;
  const n = je(),
    a = Ee();
  (e.keyboard = { enabled: !1 }),
    t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
  function o(d) {
    if (!e.enabled) return;
    const { rtlTranslate: m } = e;
    let g = d;
    g.originalEvent && (g = g.originalEvent);
    const h = g.keyCode || g.charCode,
      f = e.params.keyboard.pageUpDown,
      p = f && h === 33,
      v = f && h === 34,
      _ = h === 37,
      w = h === 39,
      y = h === 38,
      b = h === 40;
    if (
      (!e.allowSlideNext &&
        ((e.isHorizontal() && w) || (e.isVertical() && b) || v)) ||
      (!e.allowSlidePrev &&
        ((e.isHorizontal() && _) || (e.isVertical() && y) || p))
    )
      return !1;
    if (
      !(g.shiftKey || g.altKey || g.ctrlKey || g.metaKey) &&
      !(
        n.activeElement &&
        n.activeElement.nodeName &&
        (n.activeElement.nodeName.toLowerCase() === "input" ||
          n.activeElement.nodeName.toLowerCase() === "textarea")
      )
    ) {
      if (e.params.keyboard.onlyInViewport && (p || v || _ || w || y || b)) {
        let S = !1;
        if (
          dr(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
          dr(e.el, `.${e.params.slideActiveClass}`).length === 0
        )
          return;
        const x = e.el,
          T = x.clientWidth,
          M = x.clientHeight,
          E = a.innerWidth,
          C = a.innerHeight,
          I = Dn(x);
        m && (I.left -= x.scrollLeft);
        const A = [
          [I.left, I.top],
          [I.left + T, I.top],
          [I.left, I.top + M],
          [I.left + T, I.top + M],
        ];
        for (let k = 0; k < A.length; k += 1) {
          const D = A[k];
          if (D[0] >= 0 && D[0] <= E && D[1] >= 0 && D[1] <= C) {
            if (D[0] === 0 && D[1] === 0) continue;
            S = !0;
          }
        }
        if (!S) return;
      }
      e.isHorizontal()
        ? ((p || v || _ || w) &&
            (g.preventDefault ? g.preventDefault() : (g.returnValue = !1)),
          (((v || w) && !m) || ((p || _) && m)) && e.slideNext(),
          (((p || _) && !m) || ((v || w) && m)) && e.slidePrev())
        : ((p || v || y || b) &&
            (g.preventDefault ? g.preventDefault() : (g.returnValue = !1)),
          (v || b) && e.slideNext(),
          (p || y) && e.slidePrev()),
        r("keyPress", h);
    }
  }
  l(o, "handle");
  function c() {
    e.keyboard.enabled ||
      (n.addEventListener("keydown", o), (e.keyboard.enabled = !0));
  }
  l(c, "enable");
  function u() {
    e.keyboard.enabled &&
      (n.removeEventListener("keydown", o), (e.keyboard.enabled = !1));
  }
  l(u, "disable"),
    i("init", () => {
      e.params.keyboard.enabled && c();
    }),
    i("destroy", () => {
      e.keyboard.enabled && u();
    }),
    Object.assign(e.keyboard, { enable: c, disable: u });
}
l(Of, "Keyboard");
function kf(s) {
  let { swiper: e, extendParams: t, on: i, emit: r } = s;
  const n = Ee();
  t({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel",
    },
  }),
    (e.mousewheel = { enabled: !1 });
  let a,
    o = Gt(),
    c;
  const u = [];
  function d(y) {
    let T = 0,
      M = 0,
      E = 0,
      C = 0;
    return (
      "detail" in y && (M = y.detail),
      "wheelDelta" in y && (M = -y.wheelDelta / 120),
      "wheelDeltaY" in y && (M = -y.wheelDeltaY / 120),
      "wheelDeltaX" in y && (T = -y.wheelDeltaX / 120),
      "axis" in y && y.axis === y.HORIZONTAL_AXIS && ((T = M), (M = 0)),
      (E = T * 10),
      (C = M * 10),
      "deltaY" in y && (C = y.deltaY),
      "deltaX" in y && (E = y.deltaX),
      y.shiftKey && !E && ((E = C), (C = 0)),
      (E || C) &&
        y.deltaMode &&
        (y.deltaMode === 1 ? ((E *= 40), (C *= 40)) : ((E *= 800), (C *= 800))),
      E && !T && (T = E < 1 ? -1 : 1),
      C && !M && (M = C < 1 ? -1 : 1),
      { spinX: T, spinY: M, pixelX: E, pixelY: C }
    );
  }
  l(d, "normalize");
  function m() {
    e.enabled && (e.mouseEntered = !0);
  }
  l(m, "handleMouseEnter");
  function g() {
    e.enabled && (e.mouseEntered = !1);
  }
  l(g, "handleMouseLeave");
  function h(y) {
    return (e.params.mousewheel.thresholdDelta &&
      y.delta < e.params.mousewheel.thresholdDelta) ||
      (e.params.mousewheel.thresholdTime &&
        Gt() - o < e.params.mousewheel.thresholdTime)
      ? !1
      : y.delta >= 6 && Gt() - o < 60
      ? !0
      : (y.direction < 0
          ? (!e.isEnd || e.params.loop) &&
            !e.animating &&
            (e.slideNext(), r("scroll", y.raw))
          : (!e.isBeginning || e.params.loop) &&
            !e.animating &&
            (e.slidePrev(), r("scroll", y.raw)),
        (o = new n.Date().getTime()),
        !1);
  }
  l(h, "animateSlider");
  function f(y) {
    const b = e.params.mousewheel;
    if (y.direction < 0) {
      if (e.isEnd && !e.params.loop && b.releaseOnEdges) return !0;
    } else if (e.isBeginning && !e.params.loop && b.releaseOnEdges) return !0;
    return !1;
  }
  l(f, "releaseScroll");
  function p(y) {
    let b = y,
      S = !0;
    if (
      !e.enabled ||
      y.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
    )
      return;
    const x = e.params.mousewheel;
    e.params.cssMode && b.preventDefault();
    let T = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (T = document.querySelector(e.params.mousewheel.eventsTarget));
    const M = T && T.contains(b.target);
    if (!e.mouseEntered && !M && !x.releaseOnEdges) return !0;
    b.originalEvent && (b = b.originalEvent);
    let E = 0;
    const C = e.rtlTranslate ? -1 : 1,
      I = d(b);
    if (x.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(I.pixelX) > Math.abs(I.pixelY)) E = -I.pixelX * C;
        else return !0;
      else if (Math.abs(I.pixelY) > Math.abs(I.pixelX)) E = -I.pixelY;
      else return !0;
    else
      E = Math.abs(I.pixelX) > Math.abs(I.pixelY) ? -I.pixelX * C : -I.pixelY;
    if (E === 0) return !0;
    x.invert && (E = -E);
    let A = e.getTranslate() + E * x.sensitivity;
    if (
      (A >= e.minTranslate() && (A = e.minTranslate()),
      A <= e.maxTranslate() && (A = e.maxTranslate()),
      (S = e.params.loop
        ? !0
        : !(A === e.minTranslate() || A === e.maxTranslate())),
      S && e.params.nested && b.stopPropagation(),
      !e.params.freeMode || !e.params.freeMode.enabled)
    ) {
      const k = {
        time: Gt(),
        delta: Math.abs(E),
        direction: Math.sign(E),
        raw: y,
      };
      u.length >= 2 && u.shift();
      const D = u.length ? u[u.length - 1] : void 0;
      if (
        (u.push(k),
        D
          ? (k.direction !== D.direction ||
              k.delta > D.delta ||
              k.time > D.time + 150) &&
            h(k)
          : h(k),
        f(k))
      )
        return !0;
    } else {
      const k = { time: Gt(), delta: Math.abs(E), direction: Math.sign(E) },
        D =
          c &&
          k.time < c.time + 500 &&
          k.delta <= c.delta &&
          k.direction === c.direction;
      if (!D) {
        c = void 0;
        let R = e.getTranslate() + E * x.sensitivity;
        const z = e.isBeginning,
          O = e.isEnd;
        if (
          (R >= e.minTranslate() && (R = e.minTranslate()),
          R <= e.maxTranslate() && (R = e.maxTranslate()),
          e.setTransition(0),
          e.setTranslate(R),
          e.updateProgress(),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          ((!z && e.isBeginning) || (!O && e.isEnd)) && e.updateSlidesClasses(),
          e.params.loop &&
            e.loopFix({
              direction: k.direction < 0 ? "next" : "prev",
              byMousewheel: !0,
            }),
          e.params.freeMode.sticky)
        ) {
          clearTimeout(a), (a = void 0), u.length >= 15 && u.shift();
          const L = u.length ? u[u.length - 1] : void 0,
            N = u[0];
          if (
            (u.push(k), L && (k.delta > L.delta || k.direction !== L.direction))
          )
            u.splice(0);
          else if (
            u.length >= 15 &&
            k.time - N.time < 500 &&
            N.delta - k.delta >= 1 &&
            k.delta <= 6
          ) {
            const P = E > 0 ? 0.8 : 0.2;
            (c = k),
              u.splice(0),
              (a = _r(() => {
                e.destroyed ||
                  !e.params ||
                  e.slideToClosest(e.params.speed, !0, void 0, P);
              }, 0));
          }
          a ||
            (a = _r(() => {
              if (e.destroyed || !e.params) return;
              const P = 0.5;
              (c = k),
                u.splice(0),
                e.slideToClosest(e.params.speed, !0, void 0, P);
            }, 500));
        }
        if (
          (D || r("scroll", b),
          e.params.autoplay &&
            e.params.autoplay.disableOnInteraction &&
            e.autoplay.stop(),
          x.releaseOnEdges &&
            (R === e.minTranslate() || R === e.maxTranslate()))
        )
          return !0;
      }
    }
    return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), !1;
  }
  l(p, "handle");
  function v(y) {
    let b = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (b = document.querySelector(e.params.mousewheel.eventsTarget)),
      b[y]("mouseenter", m),
      b[y]("mouseleave", g),
      b[y]("wheel", p);
  }
  l(v, "events");
  function _() {
    return e.params.cssMode
      ? (e.wrapperEl.removeEventListener("wheel", p), !0)
      : e.mousewheel.enabled
      ? !1
      : (v("addEventListener"), (e.mousewheel.enabled = !0), !0);
  }
  l(_, "enable");
  function w() {
    return e.params.cssMode
      ? (e.wrapperEl.addEventListener(event, p), !0)
      : e.mousewheel.enabled
      ? (v("removeEventListener"), (e.mousewheel.enabled = !1), !0)
      : !1;
  }
  l(w, "disable"),
    i("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && w(),
        e.params.mousewheel.enabled && _();
    }),
    i("destroy", () => {
      e.params.cssMode && _(), e.mousewheel.enabled && w();
    }),
    Object.assign(e.mousewheel, { enable: _, disable: w });
}
l(kf, "Mousewheel");
function vo(s, e, t, i) {
  return (
    s.params.createElements &&
      Object.keys(i).forEach((r) => {
        if (!t[r] && t.auto === !0) {
          let n = Je(s.el, `.${i[r]}`)[0];
          n || ((n = $t("div", i[r])), (n.className = i[r]), s.el.append(n)),
            (t[r] = n),
            (e[r] = n);
        }
      }),
    t
  );
}
l(vo, "createElementIfNotDefined");
function Lf(s) {
  let { swiper: e, extendParams: t, on: i, emit: r } = s;
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  function n(f) {
    let p;
    return f &&
      typeof f == "string" &&
      e.isElement &&
      ((p = e.el.querySelector(f) || e.hostEl.querySelector(f)), p)
      ? p
      : (f &&
          (typeof f == "string" && (p = [...document.querySelectorAll(f)]),
          e.params.uniqueNavElements &&
          typeof f == "string" &&
          p &&
          p.length > 1 &&
          e.el.querySelectorAll(f).length === 1
            ? (p = e.el.querySelector(f))
            : p && p.length === 1 && (p = p[0])),
        f && !p ? f : p);
  }
  l(n, "getEl");
  function a(f, p) {
    const v = e.params.navigation;
    (f = oe(f)),
      f.forEach((_) => {
        _ &&
          (_.classList[p ? "add" : "remove"](...v.disabledClass.split(" ")),
          _.tagName === "BUTTON" && (_.disabled = p),
          e.params.watchOverflow &&
            e.enabled &&
            _.classList[e.isLocked ? "add" : "remove"](v.lockClass));
      });
  }
  l(a, "toggleEl");
  function o() {
    const { nextEl: f, prevEl: p } = e.navigation;
    if (e.params.loop) {
      a(p, !1), a(f, !1);
      return;
    }
    a(p, e.isBeginning && !e.params.rewind), a(f, e.isEnd && !e.params.rewind);
  }
  l(o, "update");
  function c(f) {
    f.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r("navigationPrev"));
  }
  l(c, "onPrevClick");
  function u(f) {
    f.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r("navigationNext"));
  }
  l(u, "onNextClick");
  function d() {
    const f = e.params.navigation;
    if (
      ((e.params.navigation = vo(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(f.nextEl || f.prevEl))
    )
      return;
    let p = n(f.nextEl),
      v = n(f.prevEl);
    Object.assign(e.navigation, { nextEl: p, prevEl: v }),
      (p = oe(p)),
      (v = oe(v));
    const _ = l((w, y) => {
      w && w.addEventListener("click", y === "next" ? u : c),
        !e.enabled && w && w.classList.add(...f.lockClass.split(" "));
    }, "initButton");
    p.forEach((w) => _(w, "next")), v.forEach((w) => _(w, "prev"));
  }
  l(d, "init");
  function m() {
    let { nextEl: f, prevEl: p } = e.navigation;
    (f = oe(f)), (p = oe(p));
    const v = l((_, w) => {
      _.removeEventListener("click", w === "next" ? u : c),
        _.classList.remove(...e.params.navigation.disabledClass.split(" "));
    }, "destroyButton");
    f.forEach((_) => v(_, "next")), p.forEach((_) => v(_, "prev"));
  }
  l(m, "destroy"),
    i("init", () => {
      e.params.navigation.enabled === !1 ? h() : (d(), o());
    }),
    i("toEdge fromEdge lock unlock", () => {
      o();
    }),
    i("destroy", () => {
      m();
    }),
    i("enable disable", () => {
      let { nextEl: f, prevEl: p } = e.navigation;
      if (((f = oe(f)), (p = oe(p)), e.enabled)) {
        o();
        return;
      }
      [...f, ...p]
        .filter((v) => !!v)
        .forEach((v) => v.classList.add(e.params.navigation.lockClass));
    }),
    i("click", (f, p) => {
      let { nextEl: v, prevEl: _ } = e.navigation;
      (v = oe(v)), (_ = oe(_));
      const w = p.target;
      let y = _.includes(w) || v.includes(w);
      if (e.isElement && !y) {
        const b = p.path || (p.composedPath && p.composedPath());
        b && (y = b.find((S) => v.includes(S) || _.includes(S)));
      }
      if (e.params.navigation.hideOnClick && !y) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === w || e.pagination.el.contains(w))
        )
          return;
        let b;
        v.length
          ? (b = v[0].classList.contains(e.params.navigation.hiddenClass))
          : _.length &&
            (b = _[0].classList.contains(e.params.navigation.hiddenClass)),
          r(b === !0 ? "navigationShow" : "navigationHide"),
          [...v, ..._]
            .filter((S) => !!S)
            .forEach((S) =>
              S.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const g = l(() => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        d(),
        o();
    }, "enable"),
    h = l(() => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        m();
    }, "disable");
  Object.assign(e.navigation, {
    enable: g,
    disable: h,
    update: o,
    init: d,
    destroy: m,
  });
}
l(Lf, "Navigation");
function Ti(s) {
  return (
    s === void 0 && (s = ""),
    `.${s
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
l(Ti, "classesToSelector");
function If(s) {
  let { swiper: e, extendParams: t, on: i, emit: r } = s;
  const n = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: l((w) => w, "formatFractionCurrent"),
      formatFractionTotal: l((w) => w, "formatFractionTotal"),
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let a,
    o = 0;
  function c() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  l(c, "isPaginationDisabled");
  function u(w, y) {
    const { bulletActiveClass: b } = e.params.pagination;
    w &&
      ((w = w[`${y === "prev" ? "previous" : "next"}ElementSibling`]),
      w &&
        (w.classList.add(`${b}-${y}`),
        (w = w[`${y === "prev" ? "previous" : "next"}ElementSibling`]),
        w && w.classList.add(`${b}-${y}-${y}`)));
  }
  l(u, "setSideBullets");
  function d(w, y, b) {
    if (((w = w % b), (y = y % b), y === w + 1)) return "next";
    if (y === w - 1) return "previous";
  }
  l(d, "getMoveDirection");
  function m(w) {
    const y = w.target.closest(Ti(e.params.pagination.bulletClass));
    if (!y) return;
    w.preventDefault();
    const b = qs(y) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === b) return;
      const S = d(e.realIndex, b, e.slides.length);
      S === "next"
        ? e.slideNext()
        : S === "previous"
        ? e.slidePrev()
        : e.slideToLoop(b);
    } else e.slideTo(b);
  }
  l(m, "onBulletClick");
  function g() {
    const w = e.rtl,
      y = e.params.pagination;
    if (c()) return;
    let b = e.pagination.el;
    b = oe(b);
    let S, x;
    const T =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      M = e.params.loop
        ? Math.ceil(T / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((x = e.previousRealIndex || 0),
          (S =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
        ? ((S = e.snapIndex), (x = e.previousSnapIndex))
        : ((x = e.previousIndex || 0), (S = e.activeIndex || 0)),
      y.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const E = e.pagination.bullets;
      let C, I, A;
      if (
        (y.dynamicBullets &&
          ((a = ka(E[0], e.isHorizontal() ? "width" : "height")),
          b.forEach((k) => {
            k.style[e.isHorizontal() ? "width" : "height"] = `${
              a * (y.dynamicMainBullets + 4)
            }px`;
          }),
          y.dynamicMainBullets > 1 &&
            x !== void 0 &&
            ((o += S - (x || 0)),
            o > y.dynamicMainBullets - 1
              ? (o = y.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (C = Math.max(S - o, 0)),
          (I = C + (Math.min(E.length, y.dynamicMainBullets) - 1)),
          (A = (I + C) / 2)),
        E.forEach((k) => {
          const D = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (R) => `${y.bulletActiveClass}${R}`
            ),
          ]
            .map((R) =>
              typeof R == "string" && R.includes(" ") ? R.split(" ") : R
            )
            .flat();
          k.classList.remove(...D);
        }),
        b.length > 1)
      )
        E.forEach((k) => {
          const D = qs(k);
          D === S
            ? k.classList.add(...y.bulletActiveClass.split(" "))
            : e.isElement && k.setAttribute("part", "bullet"),
            y.dynamicBullets &&
              (D >= C &&
                D <= I &&
                k.classList.add(...`${y.bulletActiveClass}-main`.split(" ")),
              D === C && u(k, "prev"),
              D === I && u(k, "next"));
        });
      else {
        const k = E[S];
        if (
          (k && k.classList.add(...y.bulletActiveClass.split(" ")),
          e.isElement &&
            E.forEach((D, R) => {
              D.setAttribute("part", R === S ? "bullet-active" : "bullet");
            }),
          y.dynamicBullets)
        ) {
          const D = E[C],
            R = E[I];
          for (let z = C; z <= I; z += 1)
            E[z] &&
              E[z].classList.add(...`${y.bulletActiveClass}-main`.split(" "));
          u(D, "prev"), u(R, "next");
        }
      }
      if (y.dynamicBullets) {
        const k = Math.min(E.length, y.dynamicMainBullets + 4),
          D = (a * k - a) / 2 - A * a,
          R = w ? "right" : "left";
        E.forEach((z) => {
          z.style[e.isHorizontal() ? R : "top"] = `${D}px`;
        });
      }
    }
    b.forEach((E, C) => {
      if (
        (y.type === "fraction" &&
          (E.querySelectorAll(Ti(y.currentClass)).forEach((I) => {
            I.textContent = y.formatFractionCurrent(S + 1);
          }),
          E.querySelectorAll(Ti(y.totalClass)).forEach((I) => {
            I.textContent = y.formatFractionTotal(M);
          })),
        y.type === "progressbar")
      ) {
        let I;
        y.progressbarOpposite
          ? (I = e.isHorizontal() ? "vertical" : "horizontal")
          : (I = e.isHorizontal() ? "horizontal" : "vertical");
        const A = (S + 1) / M;
        let k = 1,
          D = 1;
        I === "horizontal" ? (k = A) : (D = A),
          E.querySelectorAll(Ti(y.progressbarFillClass)).forEach((R) => {
            (R.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${D})`),
              (R.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      y.type === "custom" && y.renderCustom
        ? ((E.innerHTML = y.renderCustom(e, S + 1, M)),
          C === 0 && r("paginationRender", E))
        : (C === 0 && r("paginationRender", E), r("paginationUpdate", E)),
        e.params.watchOverflow &&
          e.enabled &&
          E.classList[e.isLocked ? "add" : "remove"](y.lockClass);
    });
  }
  l(g, "update");
  function h() {
    const w = e.params.pagination;
    if (c()) return;
    const y =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
        ? e.slides.length / Math.ceil(e.params.grid.rows)
        : e.slides.length;
    let b = e.pagination.el;
    b = oe(b);
    let S = "";
    if (w.type === "bullets") {
      let x = e.params.loop
        ? Math.ceil(y / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && x > y && (x = y);
      for (let T = 0; T < x; T += 1)
        w.renderBullet
          ? (S += w.renderBullet.call(e, T, w.bulletClass))
          : (S += `<${w.bulletElement} ${
              e.isElement ? 'part="bullet"' : ""
            } class="${w.bulletClass}"></${w.bulletElement}>`);
    }
    w.type === "fraction" &&
      (w.renderFraction
        ? (S = w.renderFraction.call(e, w.currentClass, w.totalClass))
        : (S = `<span class="${w.currentClass}"></span> / <span class="${w.totalClass}"></span>`)),
      w.type === "progressbar" &&
        (w.renderProgressbar
          ? (S = w.renderProgressbar.call(e, w.progressbarFillClass))
          : (S = `<span class="${w.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      b.forEach((x) => {
        w.type !== "custom" && (x.innerHTML = S || ""),
          w.type === "bullets" &&
            e.pagination.bullets.push(...x.querySelectorAll(Ti(w.bulletClass)));
      }),
      w.type !== "custom" && r("paginationRender", b[0]);
  }
  l(h, "render");
  function f() {
    e.params.pagination = vo(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const w = e.params.pagination;
    if (!w.el) return;
    let y;
    typeof w.el == "string" && e.isElement && (y = e.el.querySelector(w.el)),
      !y &&
        typeof w.el == "string" &&
        (y = [...document.querySelectorAll(w.el)]),
      y || (y = w.el),
      !(!y || y.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof w.el == "string" &&
          Array.isArray(y) &&
          y.length > 1 &&
          ((y = [...e.el.querySelectorAll(w.el)]),
          y.length > 1 && (y = y.find((b) => dr(b, ".swiper")[0] === e.el))),
        Array.isArray(y) && y.length === 1 && (y = y[0]),
        Object.assign(e.pagination, { el: y }),
        (y = oe(y)),
        y.forEach((b) => {
          w.type === "bullets" &&
            w.clickable &&
            b.classList.add(...(w.clickableClass || "").split(" ")),
            b.classList.add(w.modifierClass + w.type),
            b.classList.add(
              e.isHorizontal() ? w.horizontalClass : w.verticalClass
            ),
            w.type === "bullets" &&
              w.dynamicBullets &&
              (b.classList.add(`${w.modifierClass}${w.type}-dynamic`),
              (o = 0),
              w.dynamicMainBullets < 1 && (w.dynamicMainBullets = 1)),
            w.type === "progressbar" &&
              w.progressbarOpposite &&
              b.classList.add(w.progressbarOppositeClass),
            w.clickable && b.addEventListener("click", m),
            e.enabled || b.classList.add(w.lockClass);
        }));
  }
  l(f, "init");
  function p() {
    const w = e.params.pagination;
    if (c()) return;
    let y = e.pagination.el;
    y &&
      ((y = oe(y)),
      y.forEach((b) => {
        b.classList.remove(w.hiddenClass),
          b.classList.remove(w.modifierClass + w.type),
          b.classList.remove(
            e.isHorizontal() ? w.horizontalClass : w.verticalClass
          ),
          w.clickable &&
            (b.classList.remove(...(w.clickableClass || "").split(" ")),
            b.removeEventListener("click", m));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((b) =>
          b.classList.remove(...w.bulletActiveClass.split(" "))
        );
  }
  l(p, "destroy"),
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const w = e.params.pagination;
      let { el: y } = e.pagination;
      (y = oe(y)),
        y.forEach((b) => {
          b.classList.remove(w.horizontalClass, w.verticalClass),
            b.classList.add(
              e.isHorizontal() ? w.horizontalClass : w.verticalClass
            );
        });
    }),
    i("init", () => {
      e.params.pagination.enabled === !1 ? _() : (f(), h(), g());
    }),
    i("activeIndexChange", () => {
      typeof e.snapIndex > "u" && g();
    }),
    i("snapIndexChange", () => {
      g();
    }),
    i("snapGridLengthChange", () => {
      h(), g();
    }),
    i("destroy", () => {
      p();
    }),
    i("enable disable", () => {
      let { el: w } = e.pagination;
      w &&
        ((w = oe(w)),
        w.forEach((y) =>
          y.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass
          )
        ));
    }),
    i("lock unlock", () => {
      g();
    }),
    i("click", (w, y) => {
      const b = y.target,
        S = oe(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        S &&
        S.length > 0 &&
        !b.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && b === e.navigation.nextEl) ||
            (e.navigation.prevEl && b === e.navigation.prevEl))
        )
          return;
        const x = S[0].classList.contains(e.params.pagination.hiddenClass);
        r(x === !0 ? "paginationShow" : "paginationHide"),
          S.forEach((T) => T.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const v = l(() => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: w } = e.pagination;
      w &&
        ((w = oe(w)),
        w.forEach((y) =>
          y.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        f(),
        h(),
        g();
    }, "enable"),
    _ = l(() => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: w } = e.pagination;
      w &&
        ((w = oe(w)),
        w.forEach((y) =>
          y.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        p();
    }, "disable");
  Object.assign(e.pagination, {
    enable: v,
    disable: _,
    render: h,
    update: g,
    init: f,
    destroy: p,
  });
}
l(If, "Pagination");
function Df(s) {
  let { swiper: e, extendParams: t, on: i, emit: r } = s;
  const n = je();
  let a = !1,
    o = null,
    c = null,
    u,
    d,
    m,
    g;
  t({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (e.scrollbar = { el: null, dragEl: null });
  function h() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: A, rtlTranslate: k } = e,
      { dragEl: D, el: R } = A,
      z = e.params.scrollbar,
      O = e.params.loop ? e.progressLoop : e.progress;
    let L = d,
      N = (m - d) * O;
    k
      ? ((N = -N), N > 0 ? ((L = d - N), (N = 0)) : -N + d > m && (L = m + N))
      : N < 0
      ? ((L = d + N), (N = 0))
      : N + d > m && (L = m - N),
      e.isHorizontal()
        ? ((D.style.transform = `translate3d(${N}px, 0, 0)`),
          (D.style.width = `${L}px`))
        : ((D.style.transform = `translate3d(0px, ${N}px, 0)`),
          (D.style.height = `${L}px`)),
      z.hide &&
        (clearTimeout(o),
        (R.style.opacity = 1),
        (o = setTimeout(() => {
          (R.style.opacity = 0), (R.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  l(h, "setTranslate");
  function f(A) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${A}ms`);
  }
  l(f, "setTransition");
  function p() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: A } = e,
      { dragEl: k, el: D } = A;
    (k.style.width = ""),
      (k.style.height = ""),
      (m = e.isHorizontal() ? D.offsetWidth : D.offsetHeight),
      (g =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (d = m * g)
        : (d = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (k.style.width = `${d}px`)
        : (k.style.height = `${d}px`),
      g >= 1 ? (D.style.display = "none") : (D.style.display = ""),
      e.params.scrollbar.hide && (D.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        A.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  l(p, "updateSize");
  function v(A) {
    return e.isHorizontal() ? A.clientX : A.clientY;
  }
  l(v, "getPointerPosition");
  function _(A) {
    const { scrollbar: k, rtlTranslate: D } = e,
      { el: R } = k;
    let z;
    (z =
      (v(A) -
        Dn(R)[e.isHorizontal() ? "left" : "top"] -
        (u !== null ? u : d / 2)) /
      (m - d)),
      (z = Math.max(Math.min(z, 1), 0)),
      D && (z = 1 - z);
    const O = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * z;
    e.updateProgress(O),
      e.setTranslate(O),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  l(_, "setDragPosition");
  function w(A) {
    const k = e.params.scrollbar,
      { scrollbar: D, wrapperEl: R } = e,
      { el: z, dragEl: O } = D;
    (a = !0),
      (u =
        A.target === O
          ? v(A) -
            A.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      A.preventDefault(),
      A.stopPropagation(),
      (R.style.transitionDuration = "100ms"),
      (O.style.transitionDuration = "100ms"),
      _(A),
      clearTimeout(c),
      (z.style.transitionDuration = "0ms"),
      k.hide && (z.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      r("scrollbarDragStart", A);
  }
  l(w, "onDragStart");
  function y(A) {
    const { scrollbar: k, wrapperEl: D } = e,
      { el: R, dragEl: z } = k;
    a &&
      (A.preventDefault && A.cancelable
        ? A.preventDefault()
        : (A.returnValue = !1),
      _(A),
      (D.style.transitionDuration = "0ms"),
      (R.style.transitionDuration = "0ms"),
      (z.style.transitionDuration = "0ms"),
      r("scrollbarDragMove", A));
  }
  l(y, "onDragMove");
  function b(A) {
    const k = e.params.scrollbar,
      { scrollbar: D, wrapperEl: R } = e,
      { el: z } = D;
    a &&
      ((a = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (R.style.transitionDuration = "")),
      k.hide &&
        (clearTimeout(c),
        (c = _r(() => {
          (z.style.opacity = 0), (z.style.transitionDuration = "400ms");
        }, 1e3))),
      r("scrollbarDragEnd", A),
      k.snapOnRelease && e.slideToClosest());
  }
  l(b, "onDragEnd");
  function S(A) {
    const { scrollbar: k, params: D } = e,
      R = k.el;
    if (!R) return;
    const z = R,
      O = D.passiveListeners ? { passive: !1, capture: !1 } : !1,
      L = D.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!z) return;
    const N = A === "on" ? "addEventListener" : "removeEventListener";
    z[N]("pointerdown", w, O),
      n[N]("pointermove", y, O),
      n[N]("pointerup", b, L);
  }
  l(S, "events");
  function x() {
    !e.params.scrollbar.el || !e.scrollbar.el || S("on");
  }
  l(x, "enableDraggable");
  function T() {
    !e.params.scrollbar.el || !e.scrollbar.el || S("off");
  }
  l(T, "disableDraggable");
  function M() {
    const { scrollbar: A, el: k } = e;
    e.params.scrollbar = vo(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const D = e.params.scrollbar;
    if (!D.el) return;
    let R;
    if (
      (typeof D.el == "string" && e.isElement && (R = e.el.querySelector(D.el)),
      !R && typeof D.el == "string")
    ) {
      if (((R = n.querySelectorAll(D.el)), !R.length)) return;
    } else R || (R = D.el);
    e.params.uniqueNavElements &&
      typeof D.el == "string" &&
      R.length > 1 &&
      k.querySelectorAll(D.el).length === 1 &&
      (R = k.querySelector(D.el)),
      R.length > 0 && (R = R[0]),
      R.classList.add(e.isHorizontal() ? D.horizontalClass : D.verticalClass);
    let z;
    R &&
      ((z = R.querySelector(Ti(e.params.scrollbar.dragClass))),
      z || ((z = $t("div", e.params.scrollbar.dragClass)), R.append(z))),
      Object.assign(A, { el: R, dragEl: z }),
      D.draggable && x(),
      R &&
        R.classList[e.enabled ? "remove" : "add"](
          ...zi(e.params.scrollbar.lockClass)
        );
  }
  l(M, "init");
  function E() {
    const A = e.params.scrollbar,
      k = e.scrollbar.el;
    k &&
      k.classList.remove(
        ...zi(e.isHorizontal() ? A.horizontalClass : A.verticalClass)
      ),
      T();
  }
  l(E, "destroy"),
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const A = e.params.scrollbar;
      let { el: k } = e.scrollbar;
      (k = oe(k)),
        k.forEach((D) => {
          D.classList.remove(A.horizontalClass, A.verticalClass),
            D.classList.add(
              e.isHorizontal() ? A.horizontalClass : A.verticalClass
            );
        });
    }),
    i("init", () => {
      e.params.scrollbar.enabled === !1 ? I() : (M(), p(), h());
    }),
    i("update resize observerUpdate lock unlock changeDirection", () => {
      p();
    }),
    i("setTranslate", () => {
      h();
    }),
    i("setTransition", (A, k) => {
      f(k);
    }),
    i("enable disable", () => {
      const { el: A } = e.scrollbar;
      A &&
        A.classList[e.enabled ? "remove" : "add"](
          ...zi(e.params.scrollbar.lockClass)
        );
    }),
    i("destroy", () => {
      E();
    });
  const C = l(() => {
      e.el.classList.remove(...zi(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...zi(e.params.scrollbar.scrollbarDisabledClass)
          ),
        M(),
        p(),
        h();
    }, "enable"),
    I = l(() => {
      e.el.classList.add(...zi(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...zi(e.params.scrollbar.scrollbarDisabledClass)
          ),
        E();
    }, "disable");
  Object.assign(e.scrollbar, {
    enable: C,
    disable: I,
    updateSize: p,
    setTranslate: h,
    init: M,
    destroy: E,
  });
}
l(Df, "Scrollbar");
function zf(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({ parallax: { enabled: !1 } });
  const r =
      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
    n = l((c, u) => {
      const { rtl: d } = e,
        m = d ? -1 : 1,
        g = c.getAttribute("data-swiper-parallax") || "0";
      let h = c.getAttribute("data-swiper-parallax-x"),
        f = c.getAttribute("data-swiper-parallax-y");
      const p = c.getAttribute("data-swiper-parallax-scale"),
        v = c.getAttribute("data-swiper-parallax-opacity"),
        _ = c.getAttribute("data-swiper-parallax-rotate");
      if (
        (h || f
          ? ((h = h || "0"), (f = f || "0"))
          : e.isHorizontal()
          ? ((h = g), (f = "0"))
          : ((f = g), (h = "0")),
        h.indexOf("%") >= 0
          ? (h = `${parseInt(h, 10) * u * m}%`)
          : (h = `${h * u * m}px`),
        f.indexOf("%") >= 0
          ? (f = `${parseInt(f, 10) * u}%`)
          : (f = `${f * u}px`),
        typeof v < "u" && v !== null)
      ) {
        const y = v - (v - 1) * (1 - Math.abs(u));
        c.style.opacity = y;
      }
      let w = `translate3d(${h}, ${f}, 0px)`;
      if (typeof p < "u" && p !== null) {
        const y = p - (p - 1) * (1 - Math.abs(u));
        w += ` scale(${y})`;
      }
      if (_ && typeof _ < "u" && _ !== null) {
        const y = _ * u * -1;
        w += ` rotate(${y}deg)`;
      }
      c.style.transform = w;
    }, "setTransform"),
    a = l(() => {
      const { el: c, slides: u, progress: d, snapGrid: m, isElement: g } = e,
        h = Je(c, r);
      e.isElement && h.push(...Je(e.hostEl, r)),
        h.forEach((f) => {
          n(f, d);
        }),
        u.forEach((f, p) => {
          let v = f.progress;
          e.params.slidesPerGroup > 1 &&
            e.params.slidesPerView !== "auto" &&
            (v += Math.ceil(p / 2) - d * (m.length - 1)),
            (v = Math.min(Math.max(v, -1), 1)),
            f
              .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
              .forEach((_) => {
                n(_, v);
              });
        });
    }, "setTranslate"),
    o = l(function (c) {
      c === void 0 && (c = e.params.speed);
      const { el: u, hostEl: d } = e,
        m = [...u.querySelectorAll(r)];
      e.isElement && m.push(...d.querySelectorAll(r)),
        m.forEach((g) => {
          let h =
            parseInt(g.getAttribute("data-swiper-parallax-duration"), 10) || c;
          c === 0 && (h = 0), (g.style.transitionDuration = `${h}ms`);
        });
    }, "setTransition");
  i("beforeInit", () => {
    e.params.parallax.enabled &&
      ((e.params.watchSlidesProgress = !0),
      (e.originalParams.watchSlidesProgress = !0));
  }),
    i("init", () => {
      e.params.parallax.enabled && a();
    }),
    i("setTranslate", () => {
      e.params.parallax.enabled && a();
    }),
    i("setTransition", (c, u) => {
      e.params.parallax.enabled && o(u);
    });
}
l(zf, "Parallax");
function Rf(s) {
  let { swiper: e, extendParams: t, on: i, emit: r } = s;
  const n = Ee();
  t({
    zoom: {
      enabled: !1,
      limitToOriginalSize: !1,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: !1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed",
    },
  }),
    (e.zoom = { enabled: !1 });
  let a = 1,
    o = !1,
    c = !1,
    u = { x: 0, y: 0 };
  const d = -3;
  let m, g;
  const h = [],
    f = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3,
    },
    p = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {},
    },
    v = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0,
    };
  let _ = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return _;
    },
    set(F) {
      if (_ !== F) {
        const q = f.imageEl,
          B = f.slideEl;
        r("zoomChange", F, q, B);
      }
      _ = F;
    },
  });
  function w() {
    if (h.length < 2) return 1;
    const F = h[0].pageX,
      q = h[0].pageY,
      B = h[1].pageX,
      U = h[1].pageY;
    return Math.sqrt((B - F) ** 2 + (U - q) ** 2);
  }
  l(w, "getDistanceBetweenTouches");
  function y() {
    const F = e.params.zoom,
      q = f.imageWrapEl.getAttribute("data-swiper-zoom") || F.maxRatio;
    if (F.limitToOriginalSize && f.imageEl && f.imageEl.naturalWidth) {
      const B = f.imageEl.naturalWidth / f.imageEl.offsetWidth;
      return Math.min(B, q);
    }
    return q;
  }
  l(y, "getMaxRatio");
  function b() {
    if (h.length < 2) return { x: null, y: null };
    const F = f.imageEl.getBoundingClientRect();
    return [
      (h[0].pageX + (h[1].pageX - h[0].pageX) / 2 - F.x - n.scrollX) / a,
      (h[0].pageY + (h[1].pageY - h[0].pageY) / 2 - F.y - n.scrollY) / a,
    ];
  }
  l(b, "getScaleOrigin");
  function S() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  l(S, "getSlideSelector");
  function x(F) {
    const q = S();
    return !!(
      F.target.matches(q) ||
      e.slides.filter((B) => B.contains(F.target)).length > 0
    );
  }
  l(x, "eventWithinSlide");
  function T(F) {
    const q = `.${e.params.zoom.containerClass}`;
    return !!(
      F.target.matches(q) ||
      [...e.hostEl.querySelectorAll(q)].filter((B) => B.contains(F.target))
        .length > 0
    );
  }
  l(T, "eventWithinZoomContainer");
  function M(F) {
    if ((F.pointerType === "mouse" && h.splice(0, h.length), !x(F))) return;
    const q = e.params.zoom;
    if (((m = !1), (g = !1), h.push(F), !(h.length < 2))) {
      if (((m = !0), (f.scaleStart = w()), !f.slideEl)) {
        (f.slideEl = F.target.closest(`.${e.params.slideClass}, swiper-slide`)),
          f.slideEl || (f.slideEl = e.slides[e.activeIndex]);
        let B = f.slideEl.querySelector(`.${q.containerClass}`);
        if (
          (B &&
            (B = B.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
          (f.imageEl = B),
          B
            ? (f.imageWrapEl = dr(f.imageEl, `.${q.containerClass}`)[0])
            : (f.imageWrapEl = void 0),
          !f.imageWrapEl)
        ) {
          f.imageEl = void 0;
          return;
        }
        f.maxRatio = y();
      }
      if (f.imageEl) {
        const [B, U] = b();
        (f.originX = B),
          (f.originY = U),
          (f.imageEl.style.transitionDuration = "0ms");
      }
      o = !0;
    }
  }
  l(M, "onGestureStart");
  function E(F) {
    if (!x(F)) return;
    const q = e.params.zoom,
      B = e.zoom,
      U = h.findIndex((ce) => ce.pointerId === F.pointerId);
    U >= 0 && (h[U] = F),
      !(h.length < 2) &&
        ((g = !0),
        (f.scaleMove = w()),
        f.imageEl &&
          ((B.scale = (f.scaleMove / f.scaleStart) * a),
          B.scale > f.maxRatio &&
            (B.scale = f.maxRatio - 1 + (B.scale - f.maxRatio + 1) ** 0.5),
          B.scale < q.minRatio &&
            (B.scale = q.minRatio + 1 - (q.minRatio - B.scale + 1) ** 0.5),
          (f.imageEl.style.transform = `translate3d(0,0,0) scale(${B.scale})`)));
  }
  l(E, "onGestureChange");
  function C(F) {
    if (!x(F) || (F.pointerType === "mouse" && F.type === "pointerout")) return;
    const q = e.params.zoom,
      B = e.zoom,
      U = h.findIndex((ce) => ce.pointerId === F.pointerId);
    U >= 0 && h.splice(U, 1),
      !(!m || !g) &&
        ((m = !1),
        (g = !1),
        f.imageEl &&
          ((B.scale = Math.max(Math.min(B.scale, f.maxRatio), q.minRatio)),
          (f.imageEl.style.transitionDuration = `${e.params.speed}ms`),
          (f.imageEl.style.transform = `translate3d(0,0,0) scale(${B.scale})`),
          (a = B.scale),
          (o = !1),
          B.scale > 1 && f.slideEl
            ? f.slideEl.classList.add(`${q.zoomedSlideClass}`)
            : B.scale <= 1 &&
              f.slideEl &&
              f.slideEl.classList.remove(`${q.zoomedSlideClass}`),
          B.scale === 1 &&
            ((f.originX = 0), (f.originY = 0), (f.slideEl = void 0))));
  }
  l(C, "onGestureEnd");
  let I;
  function A() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  l(A, "allowTouchMove");
  function k() {
    clearTimeout(I),
      (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
      (I = setTimeout(() => {
        e.destroyed || A();
      }));
  }
  l(k, "preventTouchMove");
  function D(F) {
    const q = e.device;
    if (!f.imageEl || p.isTouched) return;
    q.android && F.cancelable && F.preventDefault(), (p.isTouched = !0);
    const B = h.length > 0 ? h[0] : F;
    (p.touchesStart.x = B.pageX), (p.touchesStart.y = B.pageY);
  }
  l(D, "onTouchStart");
  function R(F) {
    const B = F.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
    if (!x(F) || !T(F)) return;
    const U = e.zoom;
    if (!f.imageEl) return;
    if (!p.isTouched || !f.slideEl) {
      B && L(F);
      return;
    }
    if (B) {
      L(F);
      return;
    }
    p.isMoved ||
      ((p.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
      (p.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
      (p.startX = Oa(f.imageWrapEl, "x") || 0),
      (p.startY = Oa(f.imageWrapEl, "y") || 0),
      (f.slideWidth = f.slideEl.offsetWidth),
      (f.slideHeight = f.slideEl.offsetHeight),
      (f.imageWrapEl.style.transitionDuration = "0ms"));
    const ce = p.width * U.scale,
      Ke = p.height * U.scale;
    if (
      ((p.minX = Math.min(f.slideWidth / 2 - ce / 2, 0)),
      (p.maxX = -p.minX),
      (p.minY = Math.min(f.slideHeight / 2 - Ke / 2, 0)),
      (p.maxY = -p.minY),
      (p.touchesCurrent.x = h.length > 0 ? h[0].pageX : F.pageX),
      (p.touchesCurrent.y = h.length > 0 ? h[0].pageY : F.pageY),
      Math.max(
        Math.abs(p.touchesCurrent.x - p.touchesStart.x),
        Math.abs(p.touchesCurrent.y - p.touchesStart.y)
      ) > 5 && (e.allowClick = !1),
      !p.isMoved && !o)
    ) {
      if (
        e.isHorizontal() &&
        ((Math.floor(p.minX) === Math.floor(p.startX) &&
          p.touchesCurrent.x < p.touchesStart.x) ||
          (Math.floor(p.maxX) === Math.floor(p.startX) &&
            p.touchesCurrent.x > p.touchesStart.x))
      ) {
        (p.isTouched = !1), A();
        return;
      }
      if (
        !e.isHorizontal() &&
        ((Math.floor(p.minY) === Math.floor(p.startY) &&
          p.touchesCurrent.y < p.touchesStart.y) ||
          (Math.floor(p.maxY) === Math.floor(p.startY) &&
            p.touchesCurrent.y > p.touchesStart.y))
      ) {
        (p.isTouched = !1), A();
        return;
      }
    }
    F.cancelable && F.preventDefault(),
      F.stopPropagation(),
      k(),
      (p.isMoved = !0);
    const Se = (U.scale - a) / (f.maxRatio - e.params.zoom.minRatio),
      { originX: ee, originY: re } = f;
    (p.currentX =
      p.touchesCurrent.x -
      p.touchesStart.x +
      p.startX +
      Se * (p.width - ee * 2)),
      (p.currentY =
        p.touchesCurrent.y -
        p.touchesStart.y +
        p.startY +
        Se * (p.height - re * 2)),
      p.currentX < p.minX &&
        (p.currentX = p.minX + 1 - (p.minX - p.currentX + 1) ** 0.8),
      p.currentX > p.maxX &&
        (p.currentX = p.maxX - 1 + (p.currentX - p.maxX + 1) ** 0.8),
      p.currentY < p.minY &&
        (p.currentY = p.minY + 1 - (p.minY - p.currentY + 1) ** 0.8),
      p.currentY > p.maxY &&
        (p.currentY = p.maxY - 1 + (p.currentY - p.maxY + 1) ** 0.8),
      v.prevPositionX || (v.prevPositionX = p.touchesCurrent.x),
      v.prevPositionY || (v.prevPositionY = p.touchesCurrent.y),
      v.prevTime || (v.prevTime = Date.now()),
      (v.x =
        (p.touchesCurrent.x - v.prevPositionX) / (Date.now() - v.prevTime) / 2),
      (v.y =
        (p.touchesCurrent.y - v.prevPositionY) / (Date.now() - v.prevTime) / 2),
      Math.abs(p.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0),
      Math.abs(p.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0),
      (v.prevPositionX = p.touchesCurrent.x),
      (v.prevPositionY = p.touchesCurrent.y),
      (v.prevTime = Date.now()),
      (f.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`);
  }
  l(R, "onTouchMove");
  function z() {
    const F = e.zoom;
    if (((h.length = 0), !f.imageEl)) return;
    if (!p.isTouched || !p.isMoved) {
      (p.isTouched = !1), (p.isMoved = !1);
      return;
    }
    (p.isTouched = !1), (p.isMoved = !1);
    let q = 300,
      B = 300;
    const U = v.x * q,
      ce = p.currentX + U,
      Ke = v.y * B,
      be = p.currentY + Ke;
    v.x !== 0 && (q = Math.abs((ce - p.currentX) / v.x)),
      v.y !== 0 && (B = Math.abs((be - p.currentY) / v.y));
    const Se = Math.max(q, B);
    (p.currentX = ce), (p.currentY = be);
    const ee = p.width * F.scale,
      re = p.height * F.scale;
    (p.minX = Math.min(f.slideWidth / 2 - ee / 2, 0)),
      (p.maxX = -p.minX),
      (p.minY = Math.min(f.slideHeight / 2 - re / 2, 0)),
      (p.maxY = -p.minY),
      (p.currentX = Math.max(Math.min(p.currentX, p.maxX), p.minX)),
      (p.currentY = Math.max(Math.min(p.currentY, p.maxY), p.minY)),
      (f.imageWrapEl.style.transitionDuration = `${Se}ms`),
      (f.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`);
  }
  l(z, "onTouchEnd");
  function O() {
    const F = e.zoom;
    f.slideEl &&
      e.activeIndex !== e.slides.indexOf(f.slideEl) &&
      (f.imageEl && (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      f.imageWrapEl && (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      f.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
      (F.scale = 1),
      (a = 1),
      (f.slideEl = void 0),
      (f.imageEl = void 0),
      (f.imageWrapEl = void 0),
      (f.originX = 0),
      (f.originY = 0));
  }
  l(O, "onTransitionEnd");
  function L(F) {
    if (a <= 1 || !f.imageWrapEl || !x(F) || !T(F)) return;
    const q = n.getComputedStyle(f.imageWrapEl).transform,
      B = new n.DOMMatrix(q);
    if (!c) {
      (c = !0),
        (u.x = F.clientX),
        (u.y = F.clientY),
        (p.startX = B.e),
        (p.startY = B.f),
        (p.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
        (p.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
        (f.slideWidth = f.slideEl.offsetWidth),
        (f.slideHeight = f.slideEl.offsetHeight);
      return;
    }
    const U = (F.clientX - u.x) * d,
      ce = (F.clientY - u.y) * d,
      Ke = p.width * a,
      be = p.height * a,
      Se = f.slideWidth,
      ee = f.slideHeight,
      re = Math.min(Se / 2 - Ke / 2, 0),
      we = -re,
      Fe = Math.min(ee / 2 - be / 2, 0),
      $ = -Fe,
      ze = Math.max(Math.min(p.startX + U, we), re),
      it = Math.max(Math.min(p.startY + ce, $), Fe);
    (f.imageWrapEl.style.transitionDuration = "0ms"),
      (f.imageWrapEl.style.transform = `translate3d(${ze}px, ${it}px, 0)`),
      (u.x = F.clientX),
      (u.y = F.clientY),
      (p.startX = ze),
      (p.startY = it),
      (p.currentX = ze),
      (p.currentY = it);
  }
  l(L, "onMouseMove");
  function N(F) {
    const q = e.zoom,
      B = e.params.zoom;
    if (!f.slideEl) {
      F &&
        F.target &&
        (f.slideEl = F.target.closest(`.${e.params.slideClass}, swiper-slide`)),
        f.slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (f.slideEl = Je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
            : (f.slideEl = e.slides[e.activeIndex]));
      let He = f.slideEl.querySelector(`.${B.containerClass}`);
      He &&
        (He = He.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (f.imageEl = He),
        He
          ? (f.imageWrapEl = dr(f.imageEl, `.${B.containerClass}`)[0])
          : (f.imageWrapEl = void 0);
    }
    if (!f.imageEl || !f.imageWrapEl) return;
    e.params.cssMode &&
      ((e.wrapperEl.style.overflow = "hidden"),
      (e.wrapperEl.style.touchAction = "none")),
      f.slideEl.classList.add(`${B.zoomedSlideClass}`);
    let U, ce, Ke, be, Se, ee, re, we, Fe, $, ze, it, Mt, me, Pt, Vt, Jt, Ae;
    typeof p.touchesStart.x > "u" && F
      ? ((U = F.pageX), (ce = F.pageY))
      : ((U = p.touchesStart.x), (ce = p.touchesStart.y));
    const Wt = a,
      he = typeof F == "number" ? F : null;
    a === 1 &&
      he &&
      ((U = void 0),
      (ce = void 0),
      (p.touchesStart.x = void 0),
      (p.touchesStart.y = void 0));
    const _t = y();
    (q.scale = he || _t),
      (a = he || _t),
      F && !(a === 1 && he)
        ? ((Jt = f.slideEl.offsetWidth),
          (Ae = f.slideEl.offsetHeight),
          (Ke = Dn(f.slideEl).left + n.scrollX),
          (be = Dn(f.slideEl).top + n.scrollY),
          (Se = Ke + Jt / 2 - U),
          (ee = be + Ae / 2 - ce),
          (Fe = f.imageEl.offsetWidth || f.imageEl.clientWidth),
          ($ = f.imageEl.offsetHeight || f.imageEl.clientHeight),
          (ze = Fe * q.scale),
          (it = $ * q.scale),
          (Mt = Math.min(Jt / 2 - ze / 2, 0)),
          (me = Math.min(Ae / 2 - it / 2, 0)),
          (Pt = -Mt),
          (Vt = -me),
          Wt > 0 &&
          he &&
          typeof p.currentX == "number" &&
          typeof p.currentY == "number"
            ? ((re = (p.currentX * q.scale) / Wt),
              (we = (p.currentY * q.scale) / Wt))
            : ((re = Se * q.scale), (we = ee * q.scale)),
          re < Mt && (re = Mt),
          re > Pt && (re = Pt),
          we < me && (we = me),
          we > Vt && (we = Vt))
        : ((re = 0), (we = 0)),
      he && q.scale === 1 && ((f.originX = 0), (f.originY = 0)),
      (p.currentX = re),
      (p.currentY = we),
      (f.imageWrapEl.style.transitionDuration = "300ms"),
      (f.imageWrapEl.style.transform = `translate3d(${re}px, ${we}px,0)`),
      (f.imageEl.style.transitionDuration = "300ms"),
      (f.imageEl.style.transform = `translate3d(0,0,0) scale(${q.scale})`);
  }
  l(N, "zoomIn");
  function P() {
    const F = e.zoom,
      q = e.params.zoom;
    if (!f.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual
        ? (f.slideEl = Je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
        : (f.slideEl = e.slides[e.activeIndex]);
      let B = f.slideEl.querySelector(`.${q.containerClass}`);
      B &&
        (B = B.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (f.imageEl = B),
        B
          ? (f.imageWrapEl = dr(f.imageEl, `.${q.containerClass}`)[0])
          : (f.imageWrapEl = void 0);
    }
    !f.imageEl ||
      !f.imageWrapEl ||
      (e.params.cssMode &&
        ((e.wrapperEl.style.overflow = ""),
        (e.wrapperEl.style.touchAction = "")),
      (F.scale = 1),
      (a = 1),
      (p.currentX = void 0),
      (p.currentY = void 0),
      (p.touchesStart.x = void 0),
      (p.touchesStart.y = void 0),
      (f.imageWrapEl.style.transitionDuration = "300ms"),
      (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      (f.imageEl.style.transitionDuration = "300ms"),
      (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      f.slideEl.classList.remove(`${q.zoomedSlideClass}`),
      (f.slideEl = void 0),
      (f.originX = 0),
      (f.originY = 0),
      e.params.zoom.panOnMouseMove &&
        ((u = { x: 0, y: 0 }),
        c && ((c = !1), (p.startX = 0), (p.startY = 0))));
  }
  l(P, "zoomOut");
  function Y(F) {
    const q = e.zoom;
    q.scale && q.scale !== 1 ? P() : N(F);
  }
  l(Y, "zoomToggle");
  function Z() {
    const F = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
      q = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: F, activeListenerWithCapture: q };
  }
  l(Z, "getListeners");
  function fe() {
    const F = e.zoom;
    if (F.enabled) return;
    F.enabled = !0;
    const { passiveListener: q, activeListenerWithCapture: B } = Z();
    e.wrapperEl.addEventListener("pointerdown", M, q),
      e.wrapperEl.addEventListener("pointermove", E, B),
      ["pointerup", "pointercancel", "pointerout"].forEach((U) => {
        e.wrapperEl.addEventListener(U, C, q);
      }),
      e.wrapperEl.addEventListener("pointermove", R, B);
  }
  l(fe, "enable");
  function ue() {
    const F = e.zoom;
    if (!F.enabled) return;
    F.enabled = !1;
    const { passiveListener: q, activeListenerWithCapture: B } = Z();
    e.wrapperEl.removeEventListener("pointerdown", M, q),
      e.wrapperEl.removeEventListener("pointermove", E, B),
      ["pointerup", "pointercancel", "pointerout"].forEach((U) => {
        e.wrapperEl.removeEventListener(U, C, q);
      }),
      e.wrapperEl.removeEventListener("pointermove", R, B);
  }
  l(ue, "disable"),
    i("init", () => {
      e.params.zoom.enabled && fe();
    }),
    i("destroy", () => {
      ue();
    }),
    i("touchStart", (F, q) => {
      e.zoom.enabled && D(q);
    }),
    i("touchEnd", (F, q) => {
      e.zoom.enabled && z();
    }),
    i("doubleTap", (F, q) => {
      !e.animating &&
        e.params.zoom.enabled &&
        e.zoom.enabled &&
        e.params.zoom.toggle &&
        Y(q);
    }),
    i("transitionEnd", () => {
      e.zoom.enabled && e.params.zoom.enabled && O();
    }),
    i("slideChange", () => {
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && O();
    }),
    Object.assign(e.zoom, {
      enable: fe,
      disable: ue,
      in: N,
      out: P,
      toggle: Y,
    });
}
l(Rf, "Zoom");
function $f(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
    (e.controller = { control: void 0 });
  function r(u, d) {
    const m = l(function () {
      let p, v, _;
      return (w, y) => {
        for (v = -1, p = w.length; p - v > 1; )
          (_ = (p + v) >> 1), w[_] <= y ? (v = _) : (p = _);
        return p;
      };
    }, "search")();
    (this.x = u), (this.y = d), (this.lastIndex = u.length - 1);
    let g, h;
    return (
      (this.interpolate = l(function (p) {
        return p
          ? ((h = m(this.x, p)),
            (g = h - 1),
            ((p - this.x[g]) * (this.y[h] - this.y[g])) /
              (this.x[h] - this.x[g]) +
              this.y[g])
          : 0;
      }, "interpolate")),
      this
    );
  }
  l(r, "LinearSpline");
  function n(u) {
    e.controller.spline = e.params.loop
      ? new r(e.slidesGrid, u.slidesGrid)
      : new r(e.snapGrid, u.snapGrid);
  }
  l(n, "getInterpolateFunction");
  function a(u, d) {
    const m = e.controller.control;
    let g, h;
    const f = e.constructor;
    function p(v) {
      if (v.destroyed) return;
      const _ = e.rtlTranslate ? -e.translate : e.translate;
      e.params.controller.by === "slide" &&
        (n(v), (h = -e.controller.spline.interpolate(-_))),
        (!h || e.params.controller.by === "container") &&
          ((g =
            (v.maxTranslate() - v.minTranslate()) /
            (e.maxTranslate() - e.minTranslate())),
          (Number.isNaN(g) || !Number.isFinite(g)) && (g = 1),
          (h = (_ - e.minTranslate()) * g + v.minTranslate())),
        e.params.controller.inverse && (h = v.maxTranslate() - h),
        v.updateProgress(h),
        v.setTranslate(h, e),
        v.updateActiveIndex(),
        v.updateSlidesClasses();
    }
    if ((l(p, "setControlledTranslate"), Array.isArray(m)))
      for (let v = 0; v < m.length; v += 1)
        m[v] !== d && m[v] instanceof f && p(m[v]);
    else m instanceof f && d !== m && p(m);
  }
  l(a, "setTranslate");
  function o(u, d) {
    const m = e.constructor,
      g = e.controller.control;
    let h;
    function f(p) {
      p.destroyed ||
        (p.setTransition(u, e),
        u !== 0 &&
          (p.transitionStart(),
          p.params.autoHeight &&
            _r(() => {
              p.updateAutoHeight();
            }),
          Cs(p.wrapperEl, () => {
            g && p.transitionEnd();
          })));
    }
    if ((l(f, "setControlledTransition"), Array.isArray(g)))
      for (h = 0; h < g.length; h += 1)
        g[h] !== d && g[h] instanceof m && f(g[h]);
    else g instanceof m && d !== g && f(g);
  }
  l(o, "setTransition");
  function c() {
    e.controller.control &&
      e.controller.spline &&
      ((e.controller.spline = void 0), delete e.controller.spline);
  }
  l(c, "removeSpline"),
    i("beforeInit", () => {
      if (
        typeof window < "u" &&
        (typeof e.params.controller.control == "string" ||
          e.params.controller.control instanceof HTMLElement)
      ) {
        (typeof e.params.controller.control == "string"
          ? [...document.querySelectorAll(e.params.controller.control)]
          : [e.params.controller.control]
        ).forEach((d) => {
          if (
            (e.controller.control || (e.controller.control = []), d && d.swiper)
          )
            e.controller.control.push(d.swiper);
          else if (d) {
            const m = `${e.params.eventsPrefix}init`,
              g = l((h) => {
                e.controller.control.push(h.detail[0]),
                  e.update(),
                  d.removeEventListener(m, g);
              }, "onControllerSwiper");
            d.addEventListener(m, g);
          }
        });
        return;
      }
      e.controller.control = e.params.controller.control;
    }),
    i("update", () => {
      c();
    }),
    i("resize", () => {
      c();
    }),
    i("observerUpdate", () => {
      c();
    }),
    i("setTranslate", (u, d, m) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTranslate(d, m);
    }),
    i("setTransition", (u, d, m) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTransition(d, m);
    }),
    Object.assign(e.controller, { setTranslate: a, setTransition: o });
}
l($f, "Controller");
function Nf(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
      scrollOnFocus: !0,
    },
  }),
    (e.a11y = { clicked: !1 });
  let r = null,
    n,
    a,
    o = new Date().getTime();
  function c(O) {
    const L = r;
    L.length !== 0 && ((L.innerHTML = ""), (L.innerHTML = O));
  }
  l(c, "notify");
  function u(O) {
    const L = l(
      () => Math.round(16 * Math.random()).toString(16),
      "randomChar"
    );
    return "x".repeat(O).replace(/x/g, L);
  }
  l(u, "getRandomNumber");
  function d(O) {
    (O = oe(O)),
      O.forEach((L) => {
        L.setAttribute("tabIndex", "0");
      });
  }
  l(d, "makeElFocusable");
  function m(O) {
    (O = oe(O)),
      O.forEach((L) => {
        L.setAttribute("tabIndex", "-1");
      });
  }
  l(m, "makeElNotFocusable");
  function g(O, L) {
    (O = oe(O)),
      O.forEach((N) => {
        N.setAttribute("role", L);
      });
  }
  l(g, "addElRole");
  function h(O, L) {
    (O = oe(O)),
      O.forEach((N) => {
        N.setAttribute("aria-roledescription", L);
      });
  }
  l(h, "addElRoleDescription");
  function f(O, L) {
    (O = oe(O)),
      O.forEach((N) => {
        N.setAttribute("aria-controls", L);
      });
  }
  l(f, "addElControls");
  function p(O, L) {
    (O = oe(O)),
      O.forEach((N) => {
        N.setAttribute("aria-label", L);
      });
  }
  l(p, "addElLabel");
  function v(O, L) {
    (O = oe(O)),
      O.forEach((N) => {
        N.setAttribute("id", L);
      });
  }
  l(v, "addElId");
  function _(O, L) {
    (O = oe(O)),
      O.forEach((N) => {
        N.setAttribute("aria-live", L);
      });
  }
  l(_, "addElLive");
  function w(O) {
    (O = oe(O)),
      O.forEach((L) => {
        L.setAttribute("aria-disabled", !0);
      });
  }
  l(w, "disableEl");
  function y(O) {
    (O = oe(O)),
      O.forEach((L) => {
        L.setAttribute("aria-disabled", !1);
      });
  }
  l(y, "enableEl");
  function b(O) {
    if (O.keyCode !== 13 && O.keyCode !== 32) return;
    const L = e.params.a11y,
      N = O.target;
    if (
      !(
        e.pagination &&
        e.pagination.el &&
        (N === e.pagination.el || e.pagination.el.contains(O.target)) &&
        !O.target.matches(Ti(e.params.pagination.bulletClass))
      )
    ) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const P = oe(e.navigation.prevEl);
        oe(e.navigation.nextEl).includes(N) &&
          ((e.isEnd && !e.params.loop) || e.slideNext(),
          e.isEnd ? c(L.lastSlideMessage) : c(L.nextSlideMessage)),
          P.includes(N) &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? c(L.firstSlideMessage) : c(L.prevSlideMessage));
      }
      e.pagination &&
        N.matches(Ti(e.params.pagination.bulletClass)) &&
        N.click();
    }
  }
  l(b, "onEnterOrSpaceKey");
  function S() {
    if (e.params.loop || e.params.rewind || !e.navigation) return;
    const { nextEl: O, prevEl: L } = e.navigation;
    L && (e.isBeginning ? (w(L), m(L)) : (y(L), d(L))),
      O && (e.isEnd ? (w(O), m(O)) : (y(O), d(O)));
  }
  l(S, "updateNavigation");
  function x() {
    return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
  }
  l(x, "hasPagination");
  function T() {
    return x() && e.params.pagination.clickable;
  }
  l(T, "hasClickablePagination");
  function M() {
    const O = e.params.a11y;
    x() &&
      e.pagination.bullets.forEach((L) => {
        e.params.pagination.clickable &&
          (d(L),
          e.params.pagination.renderBullet ||
            (g(L, "button"),
            p(
              L,
              O.paginationBulletMessage.replace(/\{\{index\}\}/, qs(L) + 1)
            ))),
          L.matches(Ti(e.params.pagination.bulletActiveClass))
            ? L.setAttribute("aria-current", "true")
            : L.removeAttribute("aria-current");
      });
  }
  l(M, "updatePagination");
  const E = l((O, L, N) => {
      d(O),
        O.tagName !== "BUTTON" &&
          (g(O, "button"), O.addEventListener("keydown", b)),
        p(O, N),
        f(O, L);
    }, "initNavEl"),
    C = l((O) => {
      a && a !== O.target && !a.contains(O.target) && (n = !0),
        (e.a11y.clicked = !0);
    }, "handlePointerDown"),
    I = l(() => {
      (n = !1),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            e.destroyed || (e.a11y.clicked = !1);
          });
        });
    }, "handlePointerUp"),
    A = l((O) => {
      o = new Date().getTime();
    }, "onVisibilityChange"),
    k = l((O) => {
      if (
        e.a11y.clicked ||
        !e.params.a11y.scrollOnFocus ||
        new Date().getTime() - o < 100
      )
        return;
      const L = O.target.closest(`.${e.params.slideClass}, swiper-slide`);
      if (!L || !e.slides.includes(L)) return;
      a = L;
      const N = e.slides.indexOf(L) === e.activeIndex,
        P =
          e.params.watchSlidesProgress &&
          e.visibleSlides &&
          e.visibleSlides.includes(L);
      N ||
        P ||
        (O.sourceCapabilities && O.sourceCapabilities.firesTouchEvents) ||
        (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
        requestAnimationFrame(() => {
          n ||
            (e.params.loop
              ? e.slideToLoop(
                  parseInt(L.getAttribute("data-swiper-slide-index")),
                  0
                )
              : e.slideTo(e.slides.indexOf(L), 0),
            (n = !1));
        }));
    }, "handleFocus"),
    D = l(() => {
      const O = e.params.a11y;
      O.itemRoleDescriptionMessage && h(e.slides, O.itemRoleDescriptionMessage),
        O.slideRole && g(e.slides, O.slideRole);
      const L = e.slides.length;
      O.slideLabelMessage &&
        e.slides.forEach((N, P) => {
          const Y = e.params.loop
              ? parseInt(N.getAttribute("data-swiper-slide-index"), 10)
              : P,
            Z = O.slideLabelMessage
              .replace(/\{\{index\}\}/, Y + 1)
              .replace(/\{\{slidesLength\}\}/, L);
          p(N, Z);
        });
    }, "initSlides"),
    R = l(() => {
      const O = e.params.a11y;
      e.el.append(r);
      const L = e.el;
      O.containerRoleDescriptionMessage &&
        h(L, O.containerRoleDescriptionMessage),
        O.containerMessage && p(L, O.containerMessage),
        O.containerRole && g(L, O.containerRole);
      const N = e.wrapperEl,
        P = O.id || N.getAttribute("id") || `swiper-wrapper-${u(16)}`,
        Y = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      v(N, P), _(N, Y), D();
      let { nextEl: Z, prevEl: fe } = e.navigation ? e.navigation : {};
      (Z = oe(Z)),
        (fe = oe(fe)),
        Z && Z.forEach((F) => E(F, P, O.nextSlideMessage)),
        fe && fe.forEach((F) => E(F, P, O.prevSlideMessage)),
        T() &&
          oe(e.pagination.el).forEach((q) => {
            q.addEventListener("keydown", b);
          }),
        je().addEventListener("visibilitychange", A),
        e.el.addEventListener("focus", k, !0),
        e.el.addEventListener("focus", k, !0),
        e.el.addEventListener("pointerdown", C, !0),
        e.el.addEventListener("pointerup", I, !0);
    }, "init");
  function z() {
    r && r.remove();
    let { nextEl: O, prevEl: L } = e.navigation ? e.navigation : {};
    (O = oe(O)),
      (L = oe(L)),
      O && O.forEach((P) => P.removeEventListener("keydown", b)),
      L && L.forEach((P) => P.removeEventListener("keydown", b)),
      T() &&
        oe(e.pagination.el).forEach((Y) => {
          Y.removeEventListener("keydown", b);
        }),
      je().removeEventListener("visibilitychange", A),
      e.el &&
        typeof e.el != "string" &&
        (e.el.removeEventListener("focus", k, !0),
        e.el.removeEventListener("pointerdown", C, !0),
        e.el.removeEventListener("pointerup", I, !0));
  }
  l(z, "destroy"),
    i("beforeInit", () => {
      (r = $t("span", e.params.a11y.notificationClass)),
        r.setAttribute("aria-live", "assertive"),
        r.setAttribute("aria-atomic", "true");
    }),
    i("afterInit", () => {
      e.params.a11y.enabled && R();
    }),
    i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      e.params.a11y.enabled && D();
    }),
    i("fromEdge toEdge afterInit lock unlock", () => {
      e.params.a11y.enabled && S();
    }),
    i("paginationUpdate", () => {
      e.params.a11y.enabled && M();
    }),
    i("destroy", () => {
      e.params.a11y.enabled && z();
    });
}
l(Nf, "A11y");
function qf(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1,
    },
  });
  let r = !1,
    n = {};
  const a = l(
      (h) =>
        h
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      "slugify"
    ),
    o = l((h) => {
      const f = Ee();
      let p;
      h ? (p = new URL(h)) : (p = f.location);
      const v = p.pathname
          .slice(1)
          .split("/")
          .filter((b) => b !== ""),
        _ = v.length,
        w = v[_ - 2],
        y = v[_ - 1];
      return { key: w, value: y };
    }, "getPathValues"),
    c = l((h, f) => {
      const p = Ee();
      if (!r || !e.params.history.enabled) return;
      let v;
      e.params.url ? (v = new URL(e.params.url)) : (v = p.location);
      const _ =
        e.virtual && e.params.virtual.enabled
          ? e.slidesEl.querySelector(`[data-swiper-slide-index="${f}"]`)
          : e.slides[f];
      let w = a(_.getAttribute("data-history"));
      if (e.params.history.root.length > 0) {
        let b = e.params.history.root;
        b[b.length - 1] === "/" && (b = b.slice(0, b.length - 1)),
          (w = `${b}/${h ? `${h}/` : ""}${w}`);
      } else v.pathname.includes(h) || (w = `${h ? `${h}/` : ""}${w}`);
      e.params.history.keepQuery && (w += v.search);
      const y = p.history.state;
      (y && y.value === w) ||
        (e.params.history.replaceState
          ? p.history.replaceState({ value: w }, null, w)
          : p.history.pushState({ value: w }, null, w));
    }, "setHistory"),
    u = l((h, f, p) => {
      if (f)
        for (let v = 0, _ = e.slides.length; v < _; v += 1) {
          const w = e.slides[v];
          if (a(w.getAttribute("data-history")) === f) {
            const b = e.getSlideIndex(w);
            e.slideTo(b, h, p);
          }
        }
      else e.slideTo(0, h, p);
    }, "scrollToSlide"),
    d = l(() => {
      (n = o(e.params.url)), u(e.params.speed, n.value, !1);
    }, "setHistoryPopState"),
    m = l(() => {
      const h = Ee();
      if (e.params.history) {
        if (!h.history || !h.history.pushState) {
          (e.params.history.enabled = !1),
            (e.params.hashNavigation.enabled = !0);
          return;
        }
        if (((r = !0), (n = o(e.params.url)), !n.key && !n.value)) {
          e.params.history.replaceState || h.addEventListener("popstate", d);
          return;
        }
        u(0, n.value, e.params.runCallbacksOnInit),
          e.params.history.replaceState || h.addEventListener("popstate", d);
      }
    }, "init"),
    g = l(() => {
      const h = Ee();
      e.params.history.replaceState || h.removeEventListener("popstate", d);
    }, "destroy");
  i("init", () => {
    e.params.history.enabled && m();
  }),
    i("destroy", () => {
      e.params.history.enabled && g();
    }),
    i("transitionEnd _freeModeNoMomentumRelease", () => {
      r && c(e.params.history.key, e.activeIndex);
    }),
    i("slideChange", () => {
      r && e.params.cssMode && c(e.params.history.key, e.activeIndex);
    });
}
l(qf, "History");
function Ff(s) {
  let { swiper: e, extendParams: t, emit: i, on: r } = s,
    n = !1;
  const a = je(),
    o = Ee();
  t({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(g, h) {
        if (e.virtual && e.params.virtual.enabled) {
          const f = e.slides.find((v) => v.getAttribute("data-hash") === h);
          return f
            ? parseInt(f.getAttribute("data-swiper-slide-index"), 10)
            : 0;
        }
        return e.getSlideIndex(
          Je(
            e.slidesEl,
            `.${e.params.slideClass}[data-hash="${h}"], swiper-slide[data-hash="${h}"]`
          )[0]
        );
      },
    },
  });
  const c = l(() => {
      i("hashChange");
      const g = a.location.hash.replace("#", ""),
        h =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        f = h ? h.getAttribute("data-hash") : "";
      if (g !== f) {
        const p = e.params.hashNavigation.getSlideIndex(e, g);
        if (typeof p > "u" || Number.isNaN(p)) return;
        e.slideTo(p);
      }
    }, "onHashChange"),
    u = l(() => {
      if (!n || !e.params.hashNavigation.enabled) return;
      const g =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        h = g
          ? g.getAttribute("data-hash") || g.getAttribute("data-history")
          : "";
      e.params.hashNavigation.replaceState &&
      o.history &&
      o.history.replaceState
        ? (o.history.replaceState(null, null, `#${h}` || ""), i("hashSet"))
        : ((a.location.hash = h || ""), i("hashSet"));
    }, "setHash"),
    d = l(() => {
      if (
        !e.params.hashNavigation.enabled ||
        (e.params.history && e.params.history.enabled)
      )
        return;
      n = !0;
      const g = a.location.hash.replace("#", "");
      if (g) {
        const f = e.params.hashNavigation.getSlideIndex(e, g);
        e.slideTo(f || 0, 0, e.params.runCallbacksOnInit, !0);
      }
      e.params.hashNavigation.watchState && o.addEventListener("hashchange", c);
    }, "init"),
    m = l(() => {
      e.params.hashNavigation.watchState &&
        o.removeEventListener("hashchange", c);
    }, "destroy");
  r("init", () => {
    e.params.hashNavigation.enabled && d();
  }),
    r("destroy", () => {
      e.params.hashNavigation.enabled && m();
    }),
    r("transitionEnd _freeModeNoMomentumRelease", () => {
      n && u();
    }),
    r("slideChange", () => {
      n && e.params.cssMode && u();
    });
}
l(Ff, "HashNavigation");
function Bf(s) {
  let { swiper: e, extendParams: t, on: i, emit: r, params: n } = s;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let a,
    o,
    c = n && n.autoplay ? n.autoplay.delay : 3e3,
    u = n && n.autoplay ? n.autoplay.delay : 3e3,
    d,
    m = new Date().getTime(),
    g,
    h,
    f,
    p,
    v,
    _,
    w;
  function y(L) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (L.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", y),
        !(w || (L.detail && L.detail.bySwiperTouchMove)) && C()));
  }
  l(y, "onTransitionEnd");
  const b = l(() => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (g = !0) : g && ((u = d), (g = !1));
      const L = e.autoplay.paused ? d : m + u - new Date().getTime();
      (e.autoplay.timeLeft = L),
        r("autoplayTimeLeft", L, L / c),
        (o = requestAnimationFrame(() => {
          b();
        }));
    }, "calcTimeLeft"),
    S = l(() => {
      let L;
      return (
        e.virtual && e.params.virtual.enabled
          ? (L = e.slides.find((P) =>
              P.classList.contains("swiper-slide-active")
            ))
          : (L = e.slides[e.activeIndex]),
        L ? parseInt(L.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    }, "getSlideDelay"),
    x = l((L) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(o), b();
      let N = typeof L > "u" ? e.params.autoplay.delay : L;
      (c = e.params.autoplay.delay), (u = e.params.autoplay.delay);
      const P = S();
      !Number.isNaN(P) &&
        P > 0 &&
        typeof L > "u" &&
        ((N = P), (c = P), (u = P)),
        (d = N);
      const Y = e.params.speed,
        Z = l(() => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(Y, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, Y, !0, !0), r("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(Y, !0, !0), r("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, Y, !0, !0), r("autoplay")),
            e.params.cssMode &&
              ((m = new Date().getTime()),
              requestAnimationFrame(() => {
                x();
              })));
        }, "proceed");
      return (
        N > 0
          ? (clearTimeout(a),
            (a = setTimeout(() => {
              Z();
            }, N)))
          : requestAnimationFrame(() => {
              Z();
            }),
        N
      );
    }, "run"),
    T = l(() => {
      (m = new Date().getTime()),
        (e.autoplay.running = !0),
        x(),
        r("autoplayStart");
    }, "start"),
    M = l(() => {
      (e.autoplay.running = !1),
        clearTimeout(a),
        cancelAnimationFrame(o),
        r("autoplayStop");
    }, "stop"),
    E = l((L, N) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(a), L || (_ = !0);
      const P = l(() => {
        r("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", y)
            : C();
      }, "proceed");
      if (((e.autoplay.paused = !0), N)) {
        v && (d = e.params.autoplay.delay), (v = !1), P();
        return;
      }
      (d = (d || e.params.autoplay.delay) - (new Date().getTime() - m)),
        !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), P());
    }, "pause"),
    C = l(() => {
      (e.isEnd && d < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((m = new Date().getTime()),
        _ ? ((_ = !1), x(d)) : x(),
        (e.autoplay.paused = !1),
        r("autoplayResume"));
    }, "resume"),
    I = l(() => {
      if (e.destroyed || !e.autoplay.running) return;
      const L = je();
      L.visibilityState === "hidden" && ((_ = !0), E(!0)),
        L.visibilityState === "visible" && C();
    }, "onVisibilityChange"),
    A = l((L) => {
      L.pointerType === "mouse" &&
        ((_ = !0), (w = !0), !(e.animating || e.autoplay.paused) && E(!0));
    }, "onPointerEnter"),
    k = l((L) => {
      L.pointerType === "mouse" && ((w = !1), e.autoplay.paused && C());
    }, "onPointerLeave"),
    D = l(() => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", A),
        e.el.addEventListener("pointerleave", k));
    }, "attachMouseEvents"),
    R = l(() => {
      e.el &&
        typeof e.el != "string" &&
        (e.el.removeEventListener("pointerenter", A),
        e.el.removeEventListener("pointerleave", k));
    }, "detachMouseEvents"),
    z = l(() => {
      je().addEventListener("visibilitychange", I);
    }, "attachDocumentEvents"),
    O = l(() => {
      je().removeEventListener("visibilitychange", I);
    }, "detachDocumentEvents");
  i("init", () => {
    e.params.autoplay.enabled && (D(), z(), T());
  }),
    i("destroy", () => {
      R(), O(), e.autoplay.running && M();
    }),
    i("_freeModeStaticRelease", () => {
      (f || _) && C();
    }),
    i("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? M() : E(!0, !0);
    }),
    i("beforeTransitionStart", (L, N, P) => {
      e.destroyed ||
        !e.autoplay.running ||
        (P || !e.params.autoplay.disableOnInteraction ? E(!0, !0) : M());
    }),
    i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          M();
          return;
        }
        (h = !0),
          (f = !1),
          (_ = !1),
          (p = setTimeout(() => {
            (_ = !0), (f = !0), E(!0);
          }, 200));
      }
    }),
    i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !h)) {
        if (
          (clearTimeout(p),
          clearTimeout(a),
          e.params.autoplay.disableOnInteraction)
        ) {
          (f = !1), (h = !1);
          return;
        }
        f && e.params.cssMode && C(), (f = !1), (h = !1);
      }
    }),
    i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (v = !0);
    }),
    Object.assign(e.autoplay, { start: T, stop: M, pause: E, resume: C });
}
l(Bf, "Autoplay");
function Vf(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let r = !1,
    n = !1;
  e.thumbs = { swiper: null };
  function a() {
    const u = e.thumbs.swiper;
    if (!u || u.destroyed) return;
    const d = u.clickedIndex,
      m = u.clickedSlide;
    if (
      (m && m.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
      typeof d > "u" ||
      d === null
    )
      return;
    let g;
    u.params.loop
      ? (g = parseInt(
          u.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        ))
      : (g = d),
      e.params.loop ? e.slideToLoop(g) : e.slideTo(g);
  }
  l(a, "onThumbClick");
  function o() {
    const { thumbs: u } = e.params;
    if (r) return !1;
    r = !0;
    const d = e.constructor;
    if (u.swiper instanceof d) {
      if (u.swiper.destroyed) return (r = !1), !1;
      (e.thumbs.swiper = u.swiper),
        Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        e.thumbs.swiper.update();
    } else if (vs(u.swiper)) {
      const m = Object.assign({}, u.swiper);
      Object.assign(m, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (e.thumbs.swiper = new d(m)),
        (n = !0);
    }
    return (
      e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
      e.thumbs.swiper.on("tap", a),
      !0
    );
  }
  l(o, "init");
  function c(u) {
    const d = e.thumbs.swiper;
    if (!d || d.destroyed) return;
    const m =
      d.params.slidesPerView === "auto"
        ? d.slidesPerViewDynamic()
        : d.params.slidesPerView;
    let g = 1;
    const h = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 &&
        !e.params.centeredSlides &&
        (g = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (g = 1),
      (g = Math.floor(g)),
      d.slides.forEach((v) => v.classList.remove(h)),
      d.params.loop || (d.params.virtual && d.params.virtual.enabled))
    )
      for (let v = 0; v < g; v += 1)
        Je(
          d.slidesEl,
          `[data-swiper-slide-index="${e.realIndex + v}"]`
        ).forEach((_) => {
          _.classList.add(h);
        });
    else
      for (let v = 0; v < g; v += 1)
        d.slides[e.realIndex + v] && d.slides[e.realIndex + v].classList.add(h);
    const f = e.params.thumbs.autoScrollOffset,
      p = f && !d.params.loop;
    if (e.realIndex !== d.realIndex || p) {
      const v = d.activeIndex;
      let _, w;
      if (d.params.loop) {
        const y = d.slides.find(
          (b) => b.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
        );
        (_ = d.slides.indexOf(y)),
          (w = e.activeIndex > e.previousIndex ? "next" : "prev");
      } else (_ = e.realIndex), (w = _ > e.previousIndex ? "next" : "prev");
      p && (_ += w === "next" ? f : -1 * f),
        d.visibleSlidesIndexes &&
          d.visibleSlidesIndexes.indexOf(_) < 0 &&
          (d.params.centeredSlides &&
            (_ > v
              ? (_ = _ - Math.floor(m / 2) + 1)
              : (_ = _ + Math.floor(m / 2) - 1)),
          d.slideTo(_, u ? 0 : void 0));
    }
  }
  l(c, "update"),
    i("beforeInit", () => {
      const { thumbs: u } = e.params;
      if (!(!u || !u.swiper))
        if (typeof u.swiper == "string" || u.swiper instanceof HTMLElement) {
          const d = je(),
            m = l(() => {
              const h =
                typeof u.swiper == "string"
                  ? d.querySelector(u.swiper)
                  : u.swiper;
              if (h && h.swiper) (u.swiper = h.swiper), o(), c(!0);
              else if (h) {
                const f = `${e.params.eventsPrefix}init`,
                  p = l((v) => {
                    (u.swiper = v.detail[0]),
                      h.removeEventListener(f, p),
                      o(),
                      c(!0),
                      u.swiper.update(),
                      e.update();
                  }, "onThumbsSwiper");
                h.addEventListener(f, p);
              }
              return h;
            }, "getThumbsElementAndInit"),
            g = l(() => {
              if (e.destroyed) return;
              m() || requestAnimationFrame(g);
            }, "watchForThumbsToAppear");
          requestAnimationFrame(g);
        } else o(), c(!0);
    }),
    i("slideChange update resize observerUpdate", () => {
      c();
    }),
    i("setTransition", (u, d) => {
      const m = e.thumbs.swiper;
      !m || m.destroyed || m.setTransition(d);
    }),
    i("beforeDestroy", () => {
      const u = e.thumbs.swiper;
      !u || u.destroyed || (n && u.destroy());
    }),
    Object.assign(e.thumbs, { init: o, update: c });
}
l(Vf, "Thumb");
function Wf(s) {
  let { swiper: e, extendParams: t, emit: i, once: r } = s;
  t({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function n() {
    if (e.params.cssMode) return;
    const c = e.getTranslate();
    e.setTranslate(c),
      e.setTransition(0),
      (e.touchEventsData.velocities.length = 0),
      e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  l(n, "onTouchStart");
  function a() {
    if (e.params.cssMode) return;
    const { touchEventsData: c, touches: u } = e;
    c.velocities.length === 0 &&
      c.velocities.push({
        position: u[e.isHorizontal() ? "startX" : "startY"],
        time: c.touchStartTime,
      }),
      c.velocities.push({
        position: u[e.isHorizontal() ? "currentX" : "currentY"],
        time: Gt(),
      });
  }
  l(a, "onTouchMove");
  function o(c) {
    let { currentPos: u } = c;
    if (e.params.cssMode) return;
    const {
        params: d,
        wrapperEl: m,
        rtlTranslate: g,
        snapGrid: h,
        touchEventsData: f,
      } = e,
      v = Gt() - f.touchStartTime;
    if (u < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (u > -e.maxTranslate()) {
      e.slides.length < h.length
        ? e.slideTo(h.length - 1)
        : e.slideTo(e.slides.length - 1);
      return;
    }
    if (d.freeMode.momentum) {
      if (f.velocities.length > 1) {
        const M = f.velocities.pop(),
          E = f.velocities.pop(),
          C = M.position - E.position,
          I = M.time - E.time;
        (e.velocity = C / I),
          (e.velocity /= 2),
          Math.abs(e.velocity) < d.freeMode.minimumVelocity && (e.velocity = 0),
          (I > 150 || Gt() - M.time > 300) && (e.velocity = 0);
      } else e.velocity = 0;
      (e.velocity *= d.freeMode.momentumVelocityRatio),
        (f.velocities.length = 0);
      let _ = 1e3 * d.freeMode.momentumRatio;
      const w = e.velocity * _;
      let y = e.translate + w;
      g && (y = -y);
      let b = !1,
        S;
      const x = Math.abs(e.velocity) * 20 * d.freeMode.momentumBounceRatio;
      let T;
      if (y < e.maxTranslate())
        d.freeMode.momentumBounce
          ? (y + e.maxTranslate() < -x && (y = e.maxTranslate() - x),
            (S = e.maxTranslate()),
            (b = !0),
            (f.allowMomentumBounce = !0))
          : (y = e.maxTranslate()),
          d.loop && d.centeredSlides && (T = !0);
      else if (y > e.minTranslate())
        d.freeMode.momentumBounce
          ? (y - e.minTranslate() > x && (y = e.minTranslate() + x),
            (S = e.minTranslate()),
            (b = !0),
            (f.allowMomentumBounce = !0))
          : (y = e.minTranslate()),
          d.loop && d.centeredSlides && (T = !0);
      else if (d.freeMode.sticky) {
        let M;
        for (let E = 0; E < h.length; E += 1)
          if (h[E] > -y) {
            M = E;
            break;
          }
        Math.abs(h[M] - y) < Math.abs(h[M - 1] - y) ||
        e.swipeDirection === "next"
          ? (y = h[M])
          : (y = h[M - 1]),
          (y = -y);
      }
      if (
        (T &&
          r("transitionEnd", () => {
            e.loopFix();
          }),
        e.velocity !== 0)
      ) {
        if (
          (g
            ? (_ = Math.abs((-y - e.translate) / e.velocity))
            : (_ = Math.abs((y - e.translate) / e.velocity)),
          d.freeMode.sticky)
        ) {
          const M = Math.abs((g ? -y : y) - e.translate),
            E = e.slidesSizesGrid[e.activeIndex];
          M < E
            ? (_ = d.speed)
            : M < 2 * E
            ? (_ = d.speed * 1.5)
            : (_ = d.speed * 2.5);
        }
      } else if (d.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      d.freeMode.momentumBounce && b
        ? (e.updateProgress(S),
          e.setTransition(_),
          e.setTranslate(y),
          e.transitionStart(!0, e.swipeDirection),
          (e.animating = !0),
          Cs(m, () => {
            !e ||
              e.destroyed ||
              !f.allowMomentumBounce ||
              (i("momentumBounce"),
              e.setTransition(d.speed),
              setTimeout(() => {
                e.setTranslate(S),
                  Cs(m, () => {
                    !e || e.destroyed || e.transitionEnd();
                  });
              }, 0));
          }))
        : e.velocity
        ? (i("_freeModeNoMomentumRelease"),
          e.updateProgress(y),
          e.setTransition(_),
          e.setTranslate(y),
          e.transitionStart(!0, e.swipeDirection),
          e.animating ||
            ((e.animating = !0),
            Cs(m, () => {
              !e || e.destroyed || e.transitionEnd();
            })))
        : e.updateProgress(y),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    } else if (d.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else d.freeMode && i("_freeModeNoMomentumRelease");
    (!d.freeMode.momentum || v >= d.longSwipesMs) &&
      (i("_freeModeStaticRelease"),
      e.updateProgress(),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
  }
  l(o, "onTouchEnd"),
    Object.assign(e, {
      freeMode: { onTouchStart: n, onTouchMove: a, onTouchEnd: o },
    });
}
l(Wf, "freeMode");
function Hf(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({ grid: { rows: 1, fill: "column" } });
  let r, n, a, o;
  const c = l(() => {
      let p = e.params.spaceBetween;
      return (
        typeof p == "string" && p.indexOf("%") >= 0
          ? (p = (parseFloat(p.replace("%", "")) / 100) * e.size)
          : typeof p == "string" && (p = parseFloat(p)),
        p
      );
    }, "getSpaceBetween"),
    u = l((p) => {
      const { slidesPerView: v } = e.params,
        { rows: _, fill: w } = e.params.grid,
        y =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : p.length;
      (a = Math.floor(y / _)),
        Math.floor(y / _) === y / _ ? (r = y) : (r = Math.ceil(y / _) * _),
        v !== "auto" && w === "row" && (r = Math.max(r, v * _)),
        (n = r / _);
    }, "initSlides"),
    d = l(() => {
      e.slides &&
        e.slides.forEach((p) => {
          p.swiperSlideGridSet &&
            ((p.style.height = ""),
            (p.style[e.getDirectionLabel("margin-top")] = ""));
        });
    }, "unsetSlides"),
    m = l((p, v, _) => {
      const { slidesPerGroup: w } = e.params,
        y = c(),
        { rows: b, fill: S } = e.params.grid,
        x =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : _.length;
      let T, M, E;
      if (S === "row" && w > 1) {
        const C = Math.floor(p / (w * b)),
          I = p - b * w * C,
          A = C === 0 ? w : Math.min(Math.ceil((x - C * b * w) / b), w);
        (E = Math.floor(I / A)),
          (M = I - E * A + C * w),
          (T = M + (E * r) / b),
          (v.style.order = T);
      } else
        S === "column"
          ? ((M = Math.floor(p / b)),
            (E = p - M * b),
            (M > a || (M === a && E === b - 1)) &&
              ((E += 1), E >= b && ((E = 0), (M += 1))))
          : ((E = Math.floor(p / n)), (M = p - E * n));
      (v.row = E),
        (v.column = M),
        (v.style.height = `calc((100% - ${(b - 1) * y}px) / ${b})`),
        (v.style[e.getDirectionLabel("margin-top")] =
          E !== 0 ? y && `${y}px` : ""),
        (v.swiperSlideGridSet = !0);
    }, "updateSlide"),
    g = l((p, v) => {
      const { centeredSlides: _, roundLengths: w } = e.params,
        y = c(),
        { rows: b } = e.params.grid;
      if (
        ((e.virtualSize = (p + y) * r),
        (e.virtualSize = Math.ceil(e.virtualSize / b) - y),
        e.params.cssMode ||
          (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
            e.virtualSize + y
          }px`),
        _)
      ) {
        const S = [];
        for (let x = 0; x < v.length; x += 1) {
          let T = v[x];
          w && (T = Math.floor(T)), v[x] < e.virtualSize + v[0] && S.push(T);
        }
        v.splice(0, v.length), v.push(...S);
      }
    }, "updateWrapperSize"),
    h = l(() => {
      o = e.params.grid && e.params.grid.rows > 1;
    }, "onInit"),
    f = l(() => {
      const { params: p, el: v } = e,
        _ = p.grid && p.grid.rows > 1;
      o && !_
        ? (v.classList.remove(
            `${p.containerModifierClass}grid`,
            `${p.containerModifierClass}grid-column`
          ),
          (a = 1),
          e.emitContainerClasses())
        : !o &&
          _ &&
          (v.classList.add(`${p.containerModifierClass}grid`),
          p.grid.fill === "column" &&
            v.classList.add(`${p.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        (o = _);
    }, "onUpdate");
  i("init", h),
    i("update", f),
    (e.grid = {
      initSlides: u,
      unsetSlides: d,
      updateSlide: m,
      updateWrapperSize: g,
    });
}
l(Hf, "Grid");
function Yf(s) {
  const e = this,
    { params: t, slidesEl: i } = e;
  t.loop && e.loopDestroy();
  const r = l((n) => {
    if (typeof n == "string") {
      const a = document.createElement("div");
      (a.innerHTML = n), i.append(a.children[0]), (a.innerHTML = "");
    } else i.append(n);
  }, "appendElement");
  if (typeof s == "object" && "length" in s)
    for (let n = 0; n < s.length; n += 1) s[n] && r(s[n]);
  else r(s);
  e.recalcSlides(),
    t.loop && e.loopCreate(),
    (!t.observer || e.isElement) && e.update();
}
l(Yf, "appendSlide");
function Xf(s) {
  const e = this,
    { params: t, activeIndex: i, slidesEl: r } = e;
  t.loop && e.loopDestroy();
  let n = i + 1;
  const a = l((o) => {
    if (typeof o == "string") {
      const c = document.createElement("div");
      (c.innerHTML = o), r.prepend(c.children[0]), (c.innerHTML = "");
    } else r.prepend(o);
  }, "prependElement");
  if (typeof s == "object" && "length" in s) {
    for (let o = 0; o < s.length; o += 1) s[o] && a(s[o]);
    n = i + s.length;
  } else a(s);
  e.recalcSlides(),
    t.loop && e.loopCreate(),
    (!t.observer || e.isElement) && e.update(),
    e.slideTo(n, 0, !1);
}
l(Xf, "prependSlide");
function Gf(s, e) {
  const t = this,
    { params: i, activeIndex: r, slidesEl: n } = t;
  let a = r;
  i.loop && ((a -= t.loopedSlides), t.loopDestroy(), t.recalcSlides());
  const o = t.slides.length;
  if (s <= 0) {
    t.prependSlide(e);
    return;
  }
  if (s >= o) {
    t.appendSlide(e);
    return;
  }
  let c = a > s ? a + 1 : a;
  const u = [];
  for (let d = o - 1; d >= s; d -= 1) {
    const m = t.slides[d];
    m.remove(), u.unshift(m);
  }
  if (typeof e == "object" && "length" in e) {
    for (let d = 0; d < e.length; d += 1) e[d] && n.append(e[d]);
    c = a > s ? a + e.length : a;
  } else n.append(e);
  for (let d = 0; d < u.length; d += 1) n.append(u[d]);
  t.recalcSlides(),
    i.loop && t.loopCreate(),
    (!i.observer || t.isElement) && t.update(),
    i.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1);
}
l(Gf, "addSlide");
function jf(s) {
  const e = this,
    { params: t, activeIndex: i } = e;
  let r = i;
  t.loop && ((r -= e.loopedSlides), e.loopDestroy());
  let n = r,
    a;
  if (typeof s == "object" && "length" in s) {
    for (let o = 0; o < s.length; o += 1)
      (a = s[o]), e.slides[a] && e.slides[a].remove(), a < n && (n -= 1);
    n = Math.max(n, 0);
  } else
    (a = s),
      e.slides[a] && e.slides[a].remove(),
      a < n && (n -= 1),
      (n = Math.max(n, 0));
  e.recalcSlides(),
    t.loop && e.loopCreate(),
    (!t.observer || e.isElement) && e.update(),
    t.loop ? e.slideTo(n + e.loopedSlides, 0, !1) : e.slideTo(n, 0, !1);
}
l(jf, "removeSlide");
function Uf() {
  const s = this,
    e = [];
  for (let t = 0; t < s.slides.length; t += 1) e.push(t);
  s.removeSlide(e);
}
l(Uf, "removeAllSlides");
function Kf(s) {
  let { swiper: e } = s;
  Object.assign(e, {
    appendSlide: Yf.bind(e),
    prependSlide: Xf.bind(e),
    addSlide: Gf.bind(e),
    removeSlide: jf.bind(e),
    removeAllSlides: Uf.bind(e),
  });
}
l(Kf, "Manipulation");
function ls(s) {
  const {
    effect: e,
    swiper: t,
    on: i,
    setTranslate: r,
    setTransition: n,
    overwriteParams: a,
    perspective: o,
    recreateShadows: c,
    getEffectParams: u,
  } = s;
  i("beforeInit", () => {
    if (t.params.effect !== e) return;
    t.classNames.push(`${t.params.containerModifierClass}${e}`),
      o && o() && t.classNames.push(`${t.params.containerModifierClass}3d`);
    const m = a ? a() : {};
    Object.assign(t.params, m), Object.assign(t.originalParams, m);
  }),
    i("setTranslate", () => {
      t.params.effect === e && r();
    }),
    i("setTransition", (m, g) => {
      t.params.effect === e && n(g);
    }),
    i("transitionEnd", () => {
      if (t.params.effect === e && c) {
        if (!u || !u().slideShadows) return;
        t.slides.forEach((m) => {
          m.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          ).forEach((g) => g.remove());
        }),
          c();
      }
    });
  let d;
  i("virtualUpdate", () => {
    t.params.effect === e &&
      (t.slides.length || (d = !0),
      requestAnimationFrame(() => {
        d && t.slides && t.slides.length && (r(), (d = !1));
      }));
  });
}
l(ls, "effectInit");
function Us(s, e) {
  const t = Mr(e);
  return (
    t !== e &&
      ((t.style.backfaceVisibility = "hidden"),
      (t.style["-webkit-backface-visibility"] = "hidden")),
    t
  );
}
l(Us, "effectTarget");
function Zn(s) {
  let { swiper: e, duration: t, transformElements: i, allSlides: r } = s;
  const { activeIndex: n } = e,
    a = l(
      (o) =>
        o.parentElement
          ? o.parentElement
          : e.slides.find((u) => u.shadowRoot && u.shadowRoot === o.parentNode),
      "getSlide"
    );
  if (e.params.virtualTranslate && t !== 0) {
    let o = !1,
      c;
    r
      ? (c = i)
      : (c = i.filter((u) => {
          const d = u.classList.contains("swiper-slide-transform") ? a(u) : u;
          return e.getSlideIndex(d) === n;
        })),
      c.forEach((u) => {
        Cs(u, () => {
          if (o || !e || e.destroyed) return;
          (o = !0), (e.animating = !1);
          const d = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          e.wrapperEl.dispatchEvent(d);
        });
      });
  }
}
l(Zn, "effectVirtualTransitionEnd");
function Zf(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({ fadeEffect: { crossFade: !1 } }),
    ls({
      effect: "fade",
      swiper: e,
      on: i,
      setTranslate: l(() => {
        const { slides: a } = e,
          o = e.params.fadeEffect;
        for (let c = 0; c < a.length; c += 1) {
          const u = e.slides[c];
          let m = -u.swiperSlideOffset;
          e.params.virtualTranslate || (m -= e.translate);
          let g = 0;
          e.isHorizontal() || ((g = m), (m = 0));
          const h = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(u.progress), 0)
              : 1 + Math.min(Math.max(u.progress, -1), 0),
            f = Us(o, u);
          (f.style.opacity = h),
            (f.style.transform = `translate3d(${m}px, ${g}px, 0px)`);
        }
      }, "setTranslate"),
      setTransition: l((a) => {
        const o = e.slides.map((c) => Mr(c));
        o.forEach((c) => {
          c.style.transitionDuration = `${a}ms`;
        }),
          Zn({ swiper: e, duration: a, transformElements: o, allSlides: !0 });
      }, "setTransition"),
      overwriteParams: l(
        () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
        "overwriteParams"
      ),
    });
}
l(Zf, "EffectFade");
function Qf(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  });
  const r = l((c, u, d) => {
    let m = d
        ? c.querySelector(".swiper-slide-shadow-left")
        : c.querySelector(".swiper-slide-shadow-top"),
      g = d
        ? c.querySelector(".swiper-slide-shadow-right")
        : c.querySelector(".swiper-slide-shadow-bottom");
    m ||
      ((m = $t(
        "div",
        `swiper-slide-shadow-cube swiper-slide-shadow-${
          d ? "left" : "top"
        }`.split(" ")
      )),
      c.append(m)),
      g ||
        ((g = $t(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            d ? "right" : "bottom"
          }`.split(" ")
        )),
        c.append(g)),
      m && (m.style.opacity = Math.max(-u, 0)),
      g && (g.style.opacity = Math.max(u, 0));
  }, "createSlideShadows");
  ls({
    effect: "cube",
    swiper: e,
    on: i,
    setTranslate: l(() => {
      const {
          el: c,
          wrapperEl: u,
          slides: d,
          width: m,
          height: g,
          rtlTranslate: h,
          size: f,
          browser: p,
        } = e,
        v = Kn(e),
        _ = e.params.cubeEffect,
        w = e.isHorizontal(),
        y = e.virtual && e.params.virtual.enabled;
      let b = 0,
        S;
      _.shadow &&
        (w
          ? ((S = e.wrapperEl.querySelector(".swiper-cube-shadow")),
            S || ((S = $t("div", "swiper-cube-shadow")), e.wrapperEl.append(S)),
            (S.style.height = `${m}px`))
          : ((S = c.querySelector(".swiper-cube-shadow")),
            S || ((S = $t("div", "swiper-cube-shadow")), c.append(S))));
      for (let T = 0; T < d.length; T += 1) {
        const M = d[T];
        let E = T;
        y && (E = parseInt(M.getAttribute("data-swiper-slide-index"), 10));
        let C = E * 90,
          I = Math.floor(C / 360);
        h && ((C = -C), (I = Math.floor(-C / 360)));
        const A = Math.max(Math.min(M.progress, 1), -1);
        let k = 0,
          D = 0,
          R = 0;
        E % 4 === 0
          ? ((k = -I * 4 * f), (R = 0))
          : (E - 1) % 4 === 0
          ? ((k = 0), (R = -I * 4 * f))
          : (E - 2) % 4 === 0
          ? ((k = f + I * 4 * f), (R = f))
          : (E - 3) % 4 === 0 && ((k = -f), (R = 3 * f + f * 4 * I)),
          h && (k = -k),
          w || ((D = k), (k = 0));
        const z = `rotateX(${v(w ? 0 : -C)}deg) rotateY(${v(
          w ? C : 0
        )}deg) translate3d(${k}px, ${D}px, ${R}px)`;
        A <= 1 &&
          A > -1 &&
          ((b = E * 90 + A * 90), h && (b = -E * 90 - A * 90)),
          (M.style.transform = z),
          _.slideShadows && r(M, A, w);
      }
      if (
        ((u.style.transformOrigin = `50% 50% -${f / 2}px`),
        (u.style["-webkit-transform-origin"] = `50% 50% -${f / 2}px`),
        _.shadow)
      )
        if (w)
          S.style.transform = `translate3d(0px, ${m / 2 + _.shadowOffset}px, ${
            -m / 2
          }px) rotateX(89.99deg) rotateZ(0deg) scale(${_.shadowScale})`;
        else {
          const T = Math.abs(b) - Math.floor(Math.abs(b) / 90) * 90,
            M =
              1.5 -
              (Math.sin((T * 2 * Math.PI) / 360) / 2 +
                Math.cos((T * 2 * Math.PI) / 360) / 2),
            E = _.shadowScale,
            C = _.shadowScale / M,
            I = _.shadowOffset;
          S.style.transform = `scale3d(${E}, 1, ${C}) translate3d(0px, ${
            g / 2 + I
          }px, ${-g / 2 / C}px) rotateX(-89.99deg)`;
        }
      const x =
        (p.isSafari || p.isWebView) && p.needPerspectiveFix ? -f / 2 : 0;
      (u.style.transform = `translate3d(0px,0,${x}px) rotateX(${v(
        e.isHorizontal() ? 0 : b
      )}deg) rotateY(${v(e.isHorizontal() ? -b : 0)}deg)`),
        u.style.setProperty("--swiper-cube-translate-z", `${x}px`);
    }, "setTranslate"),
    setTransition: l((c) => {
      const { el: u, slides: d } = e;
      if (
        (d.forEach((m) => {
          (m.style.transitionDuration = `${c}ms`),
            m
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((g) => {
                g.style.transitionDuration = `${c}ms`;
              });
        }),
        e.params.cubeEffect.shadow && !e.isHorizontal())
      ) {
        const m = u.querySelector(".swiper-cube-shadow");
        m && (m.style.transitionDuration = `${c}ms`);
      }
    }, "setTransition"),
    recreateShadows: l(() => {
      const c = e.isHorizontal();
      e.slides.forEach((u) => {
        const d = Math.max(Math.min(u.progress, 1), -1);
        r(u, d, c);
      });
    }, "recreateShadows"),
    getEffectParams: l(() => e.params.cubeEffect, "getEffectParams"),
    perspective: l(() => !0, "perspective"),
    overwriteParams: l(
      () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0,
      }),
      "overwriteParams"
    ),
  });
}
l(Qf, "EffectCube");
function es(s, e, t) {
  const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
      s ? ` swiper-slide-shadow-${s}` : ""
    }`,
    r = Mr(e);
  let n = r.querySelector(`.${i.split(" ").join(".")}`);
  return n || ((n = $t("div", i.split(" "))), r.append(n)), n;
}
l(es, "createShadow");
function Jf(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
  const r = l((c, u) => {
    let d = e.isHorizontal()
        ? c.querySelector(".swiper-slide-shadow-left")
        : c.querySelector(".swiper-slide-shadow-top"),
      m = e.isHorizontal()
        ? c.querySelector(".swiper-slide-shadow-right")
        : c.querySelector(".swiper-slide-shadow-bottom");
    d || (d = es("flip", c, e.isHorizontal() ? "left" : "top")),
      m || (m = es("flip", c, e.isHorizontal() ? "right" : "bottom")),
      d && (d.style.opacity = Math.max(-u, 0)),
      m && (m.style.opacity = Math.max(u, 0));
  }, "createSlideShadows");
  ls({
    effect: "flip",
    swiper: e,
    on: i,
    setTranslate: l(() => {
      const { slides: c, rtlTranslate: u } = e,
        d = e.params.flipEffect,
        m = Kn(e);
      for (let g = 0; g < c.length; g += 1) {
        const h = c[g];
        let f = h.progress;
        e.params.flipEffect.limitRotation &&
          (f = Math.max(Math.min(h.progress, 1), -1));
        const p = h.swiperSlideOffset;
        let _ = -180 * f,
          w = 0,
          y = e.params.cssMode ? -p - e.translate : -p,
          b = 0;
        e.isHorizontal()
          ? u && (_ = -_)
          : ((b = y), (y = 0), (w = -_), (_ = 0)),
          (h.style.zIndex = -Math.abs(Math.round(f)) + c.length),
          d.slideShadows && r(h, f);
        const S = `translate3d(${y}px, ${b}px, 0px) rotateX(${m(
            w
          )}deg) rotateY(${m(_)}deg)`,
          x = Us(d, h);
        x.style.transform = S;
      }
    }, "setTranslate"),
    setTransition: l((c) => {
      const u = e.slides.map((d) => Mr(d));
      u.forEach((d) => {
        (d.style.transitionDuration = `${c}ms`),
          d
            .querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .forEach((m) => {
              m.style.transitionDuration = `${c}ms`;
            });
      }),
        Zn({ swiper: e, duration: c, transformElements: u });
    }, "setTransition"),
    recreateShadows: l(() => {
      e.slides.forEach((c) => {
        let u = c.progress;
        e.params.flipEffect.limitRotation &&
          (u = Math.max(Math.min(c.progress, 1), -1)),
          r(c, u);
      });
    }, "recreateShadows"),
    getEffectParams: l(() => e.params.flipEffect, "getEffectParams"),
    perspective: l(() => !0, "perspective"),
    overwriteParams: l(
      () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
      "overwriteParams"
    ),
  });
}
l(Jf, "EffectFlip");
function ep(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
    },
  }),
    ls({
      effect: "coverflow",
      swiper: e,
      on: i,
      setTranslate: l(() => {
        const { width: a, height: o, slides: c, slidesSizesGrid: u } = e,
          d = e.params.coverflowEffect,
          m = e.isHorizontal(),
          g = e.translate,
          h = m ? -g + a / 2 : -g + o / 2,
          f = m ? d.rotate : -d.rotate,
          p = d.depth,
          v = Kn(e);
        for (let _ = 0, w = c.length; _ < w; _ += 1) {
          const y = c[_],
            b = u[_],
            S = y.swiperSlideOffset,
            x = (h - S - b / 2) / b,
            T =
              typeof d.modifier == "function" ? d.modifier(x) : x * d.modifier;
          let M = m ? f * T : 0,
            E = m ? 0 : f * T,
            C = -p * Math.abs(T),
            I = d.stretch;
          typeof I == "string" &&
            I.indexOf("%") !== -1 &&
            (I = (parseFloat(d.stretch) / 100) * b);
          let A = m ? 0 : I * T,
            k = m ? I * T : 0,
            D = 1 - (1 - d.scale) * Math.abs(T);
          Math.abs(k) < 0.001 && (k = 0),
            Math.abs(A) < 0.001 && (A = 0),
            Math.abs(C) < 0.001 && (C = 0),
            Math.abs(M) < 0.001 && (M = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(D) < 0.001 && (D = 0);
          const R = `translate3d(${k}px,${A}px,${C}px)  rotateX(${v(
              E
            )}deg) rotateY(${v(M)}deg) scale(${D})`,
            z = Us(d, y);
          if (
            ((z.style.transform = R),
            (y.style.zIndex = -Math.abs(Math.round(T)) + 1),
            d.slideShadows)
          ) {
            let O = m
                ? y.querySelector(".swiper-slide-shadow-left")
                : y.querySelector(".swiper-slide-shadow-top"),
              L = m
                ? y.querySelector(".swiper-slide-shadow-right")
                : y.querySelector(".swiper-slide-shadow-bottom");
            O || (O = es("coverflow", y, m ? "left" : "top")),
              L || (L = es("coverflow", y, m ? "right" : "bottom")),
              O && (O.style.opacity = T > 0 ? T : 0),
              L && (L.style.opacity = -T > 0 ? -T : 0);
          }
        }
      }, "setTranslate"),
      setTransition: l((a) => {
        e.slides
          .map((c) => Mr(c))
          .forEach((c) => {
            (c.style.transitionDuration = `${a}ms`),
              c
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((u) => {
                  u.style.transitionDuration = `${a}ms`;
                });
          });
      }, "setTransition"),
      perspective: l(() => !0, "perspective"),
      overwriteParams: l(
        () => ({ watchSlidesProgress: !0 }),
        "overwriteParams"
      ),
    });
}
l(ep, "EffectCoverflow");
function tp(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
      next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
    },
  });
  const r = l(
    (o) => (typeof o == "string" ? o : `${o}px`),
    "getTranslateValue"
  );
  ls({
    effect: "creative",
    swiper: e,
    on: i,
    setTranslate: l(() => {
      const { slides: o, wrapperEl: c, slidesSizesGrid: u } = e,
        d = e.params.creativeEffect,
        { progressMultiplier: m } = d,
        g = e.params.centeredSlides,
        h = Kn(e);
      if (g) {
        const f = u[0] / 2 - e.params.slidesOffsetBefore || 0;
        c.style.transform = `translateX(calc(50% - ${f}px))`;
      }
      for (let f = 0; f < o.length; f += 1) {
        const p = o[f],
          v = p.progress,
          _ = Math.min(Math.max(p.progress, -d.limitProgress), d.limitProgress);
        let w = _;
        g ||
          (w = Math.min(
            Math.max(p.originalProgress, -d.limitProgress),
            d.limitProgress
          ));
        const y = p.swiperSlideOffset,
          b = [e.params.cssMode ? -y - e.translate : -y, 0, 0],
          S = [0, 0, 0];
        let x = !1;
        e.isHorizontal() || ((b[1] = b[0]), (b[0] = 0));
        let T = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1,
        };
        _ < 0 ? ((T = d.next), (x = !0)) : _ > 0 && ((T = d.prev), (x = !0)),
          b.forEach((D, R) => {
            b[R] = `calc(${D}px + (${r(T.translate[R])} * ${Math.abs(_ * m)}))`;
          }),
          S.forEach((D, R) => {
            let z = T.rotate[R] * Math.abs(_ * m);
            S[R] = z;
          }),
          (p.style.zIndex = -Math.abs(Math.round(v)) + o.length);
        const M = b.join(", "),
          E = `rotateX(${h(S[0])}deg) rotateY(${h(S[1])}deg) rotateZ(${h(
            S[2]
          )}deg)`,
          C =
            w < 0
              ? `scale(${1 + (1 - T.scale) * w * m})`
              : `scale(${1 - (1 - T.scale) * w * m})`,
          I = w < 0 ? 1 + (1 - T.opacity) * w * m : 1 - (1 - T.opacity) * w * m,
          A = `translate3d(${M}) ${E} ${C}`;
        if ((x && T.shadow) || !x) {
          let D = p.querySelector(".swiper-slide-shadow");
          if ((!D && T.shadow && (D = es("creative", p)), D)) {
            const R = d.shadowPerProgress ? _ * (1 / d.limitProgress) : _;
            D.style.opacity = Math.min(Math.max(Math.abs(R), 0), 1);
          }
        }
        const k = Us(d, p);
        (k.style.transform = A),
          (k.style.opacity = I),
          T.origin && (k.style.transformOrigin = T.origin);
      }
    }, "setTranslate"),
    setTransition: l((o) => {
      const c = e.slides.map((u) => Mr(u));
      c.forEach((u) => {
        (u.style.transitionDuration = `${o}ms`),
          u.querySelectorAll(".swiper-slide-shadow").forEach((d) => {
            d.style.transitionDuration = `${o}ms`;
          });
      }),
        Zn({ swiper: e, duration: o, transformElements: c, allSlides: !0 });
    }, "setTransition"),
    perspective: l(() => e.params.creativeEffect.perspective, "perspective"),
    overwriteParams: l(
      () => ({ watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode }),
      "overwriteParams"
    ),
  });
}
l(tp, "EffectCreative");
function ip(s) {
  let { swiper: e, extendParams: t, on: i } = s;
  t({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8,
    },
  }),
    ls({
      effect: "cards",
      swiper: e,
      on: i,
      setTranslate: l(() => {
        const { slides: a, activeIndex: o, rtlTranslate: c } = e,
          u = e.params.cardsEffect,
          { startTranslate: d, isTouched: m } = e.touchEventsData,
          g = c ? -e.translate : e.translate;
        for (let h = 0; h < a.length; h += 1) {
          const f = a[h],
            p = f.progress,
            v = Math.min(Math.max(p, -4), 4);
          let _ = f.swiperSlideOffset;
          e.params.centeredSlides &&
            !e.params.cssMode &&
            (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
            e.params.centeredSlides &&
              e.params.cssMode &&
              (_ -= a[0].swiperSlideOffset);
          let w = e.params.cssMode ? -_ - e.translate : -_,
            y = 0;
          const b = -100 * Math.abs(v);
          let S = 1,
            x = -u.perSlideRotate * v,
            T = u.perSlideOffset - Math.abs(v) * 0.75;
          const M =
              e.virtual && e.params.virtual.enabled ? e.virtual.from + h : h,
            E =
              (M === o || M === o - 1) &&
              v > 0 &&
              v < 1 &&
              (m || e.params.cssMode) &&
              g < d,
            C =
              (M === o || M === o + 1) &&
              v < 0 &&
              v > -1 &&
              (m || e.params.cssMode) &&
              g > d;
          if (E || C) {
            const D = (1 - Math.abs((Math.abs(v) - 0.5) / 0.5)) ** 0.5;
            (x += -28 * v * D),
              (S += -0.5 * D),
              (T += 96 * D),
              (y = `${-25 * D * Math.abs(v)}%`);
          }
          if (
            (v < 0
              ? (w = `calc(${w}px ${c ? "-" : "+"} (${T * Math.abs(v)}%))`)
              : v > 0
              ? (w = `calc(${w}px ${c ? "-" : "+"} (-${T * Math.abs(v)}%))`)
              : (w = `${w}px`),
            !e.isHorizontal())
          ) {
            const D = y;
            (y = w), (w = D);
          }
          const I = v < 0 ? `${1 + (1 - S) * v}` : `${1 - (1 - S) * v}`,
            A = `
        translate3d(${w}, ${y}, ${b}px)
        rotateZ(${u.rotate ? (c ? -x : x) : 0}deg)
        scale(${I})
      `;
          if (u.slideShadows) {
            let D = f.querySelector(".swiper-slide-shadow");
            D || (D = es("cards", f)),
              D &&
                (D.style.opacity = Math.min(
                  Math.max((Math.abs(v) - 0.5) / 0.5, 0),
                  1
                ));
          }
          f.style.zIndex = -Math.abs(Math.round(p)) + a.length;
          const k = Us(u, f);
          k.style.transform = A;
        }
      }, "setTranslate"),
      setTransition: l((a) => {
        const o = e.slides.map((c) => Mr(c));
        o.forEach((c) => {
          (c.style.transitionDuration = `${a}ms`),
            c.querySelectorAll(".swiper-slide-shadow").forEach((u) => {
              u.style.transitionDuration = `${a}ms`;
            });
        }),
          Zn({ swiper: e, duration: a, transformElements: o });
      }, "setTransition"),
      perspective: l(() => !0, "perspective"),
      overwriteParams: l(
        () => ({
          _loopSwapReset: !1,
          watchSlidesProgress: !0,
          loopAdditionalSlides: e.params.cardsEffect.rotate ? 3 : 2,
          centeredSlides: !0,
          virtualTranslate: !e.params.cssMode,
        }),
        "overwriteParams"
      ),
    });
}
l(ip, "EffectCards");
const rp = [
  Af,
  Of,
  kf,
  Lf,
  If,
  Df,
  zf,
  Rf,
  $f,
  Nf,
  qf,
  Ff,
  Bf,
  Vf,
  Wf,
  Hf,
  Kf,
  Zf,
  Qf,
  Jf,
  ep,
  tp,
  ip,
];
br.use(rp);
const Uo = class Uo {
  constructor() {
    (this.swiper = null),
      (this.wasDesktop = this.getIsDesktop()),
      this.initSwiper(),
      window.addEventListener("resize", this.handleResize.bind(this));
  }
  getIsDesktop() {
    return window.innerWidth > 768;
  }
  initSwiper() {
    const e = this.getIsDesktop();
    this.swiper = new br("[swiper='clinic-card']", {
      direction: "horizontal",
      slidesPerView: 1.2,
      on: {
        init: l(function (t) {
          t.wrapperEl && t.wrapperEl.setAttribute("role", "list"),
            t.slides.forEach((i) => {
              i.setAttribute("role", "listitem");
            });
        }, "init"),
        slideChange: l(function (t) {
          t.slides.forEach((i) => {
            i.setAttribute("card-status", "inactive");
          }),
            t.slides[t.activeIndex].setAttribute("card-status", "active");
        }, "slideChange"),
      },
      spaceBetween: 20,
      speed: 800,
      autoplay: { delay: 25e4, disableOnInteraction: !1 },
      parallax: !0,
      loop: e,
      grabCursor: !0,
      keyboard: { enabled: !0, onlyInViewport: !0 },
      breakpoints: {
        480: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 2.8 },
        1280: { slidesPerView: 2.8 },
        1440: { slidesPerView: 3.8 },
      },
    });
  }
  handleResize() {
    const e = this.getIsDesktop();
    e !== this.wasDesktop &&
      ((this.wasDesktop = e),
      this.swiper && this.swiper.destroy(!0, !0),
      this.initSwiper());
  }
};
l(Uo, "SwiperSlider");
let Ia = Uo;
function Ks() {
  new Ia();
}
l(Ks, "initSwiperSlider");
function Si(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return s;
}
l(Si, "_assertThisInitialized");
function fc(s, e) {
  (s.prototype = Object.create(e.prototype)),
    (s.prototype.constructor = s),
    (s.__proto__ = e);
}
l(fc, "_inheritsLoose");
var qt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  ts = { duration: 0.5, overwrite: !1, delay: 0 },
  yo,
  tt,
  Te,
  jt = 1e8,
  ye = 1 / jt,
  Da = Math.PI * 2,
  sp = Da / 4,
  np = 0,
  pc = Math.sqrt,
  ap = Math.cos,
  op = Math.sin,
  Ue = l(function (e) {
    return typeof e == "string";
  }, "_isString"),
  ke = l(function (e) {
    return typeof e == "function";
  }, "_isFunction"),
  Ai = l(function (e) {
    return typeof e == "number";
  }, "_isNumber"),
  wo = l(function (e) {
    return typeof e > "u";
  }, "_isUndefined"),
  yi = l(function (e) {
    return typeof e == "object";
  }, "_isObject"),
  St = l(function (e) {
    return e !== !1;
  }, "_isNotFalse"),
  _o = l(function () {
    return typeof window < "u";
  }, "_windowExists"),
  nn = l(function (e) {
    return ke(e) || Ue(e);
  }, "_isFuncOrString"),
  hc =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  dt = Array.isArray,
  za = /(?:-?\.?\d|\.)+/gi,
  mc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Fr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  fa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  gc = /[+-]=-?[.\d]+/,
  vc = /[^,'"\[\]\s]+/gi,
  lp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Me,
  ui,
  Ra,
  bo,
  Ft = {},
  zn = {},
  yc,
  wc = l(function (e) {
    return (zn = is(e, Ft)) && Ct;
  }, "_install"),
  So = l(function (e, t) {}, "_missingPlugin"),
  Fs = l(function (e, t) {
    return !t && void 0;
  }, "_warn"),
  _c = l(function (e, t) {
    return (e && (Ft[e] = t) && zn && (zn[e] = t)) || Ft;
  }, "_addGlobal"),
  Bs = l(function () {
    return 0;
  }, "_emptyFunc"),
  cp = { suppressEvents: !0, isStart: !0, kill: !1 },
  bn = { suppressEvents: !0, kill: !1 },
  up = { suppressEvents: !0 },
  xo = {},
  Hi = [],
  $a = {},
  bc,
  It = {},
  pa = {},
  nl = 30,
  Sn = [],
  To = "",
  Eo = l(function (e) {
    var t = e[0],
      i,
      r;
    if ((yi(t) || ke(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (r = Sn.length; r-- && !Sn[r].targetTest(t); );
      i = Sn[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Yc(e[r], i)))) ||
        e.splice(r, 1);
    return e;
  }, "_harness"),
  fr = l(function (e) {
    return e._gsap || Eo(Ut(e))[0]._gsap;
  }, "_getCache"),
  Sc = l(function (e, t, i) {
    return (i = e[t]) && ke(i)
      ? e[t]()
      : (wo(i) && e.getAttribute && e.getAttribute(t)) || i;
  }, "_getProperty"),
  xt = l(function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  }, "_forEachName"),
  Ie = l(function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, "_round"),
  qe = l(function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  }, "_roundPrecise"),
  Wr = l(function (e, t) {
    var i = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    );
  }, "_parseRelative"),
  dp = l(function (e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
    return r < i;
  }, "_arrayContainsAny"),
  Rn = l(function () {
    var e = Hi.length,
      t = Hi.slice(0),
      i,
      r;
    for ($a = {}, Hi.length = 0, i = 0; i < e; i++)
      (r = t[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  }, "_lazyRender"),
  Co = l(function (e) {
    return !!(e._initted || e._startAt || e.add);
  }, "_isRevertWorthy"),
  xc = l(function (e, t, i, r) {
    Hi.length && !tt && Rn(),
      e.render(t, i, !!(tt && t < 0 && Co(e))),
      Hi.length && !tt && Rn();
  }, "_lazySafeRender"),
  Tc = l(function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(vc).length < 2
      ? t
      : Ue(e)
      ? e.trim()
      : e;
  }, "_numericIfPossible"),
  Ec = l(function (e) {
    return e;
  }, "_passThrough"),
  Bt = l(function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  }, "_setDefaults"),
  fp = l(function (e) {
    return function (t, i) {
      for (var r in i)
        r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
    };
  }, "_setKeyframeDefaults"),
  is = l(function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }, "_merge"),
  al = l(function s(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = yi(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  }, "_mergeDeep"),
  $n = l(function (e, t) {
    var i = {},
      r;
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  }, "_copyExcluding"),
  Ms = l(function (e) {
    var t = e.parent || Me,
      i = e.keyframes ? fp(dt(e.keyframes)) : Bt;
    if (St(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  }, "_inheritDefaults"),
  pp = l(function (e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
    return i < 0;
  }, "_arraysMatch"),
  Cc = l(function (e, t, i, r, n) {
    var a = e[r],
      o;
    if (n) for (o = t[n]; a && a[n] > o; ) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[i]), (e[i] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  }, "_addLinkedListItem"),
  Qn = l(function (e, t, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = t._prev,
      a = t._next;
    n ? (n._next = a) : e[i] === t && (e[i] = a),
      a ? (a._prev = n) : e[r] === t && (e[r] = n),
      (t._next = t._prev = t.parent = null);
  }, "_removeLinkedListItem"),
  Gi = l(function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  }, "_removeFromParent"),
  pr = l(function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  }, "_uncache"),
  hp = l(function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  }, "_recacheAncestors"),
  Na = l(function (e, t, i, r) {
    return (
      e._startAt &&
      (tt
        ? e._startAt.revert(bn)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  }, "_rewindStartAt"),
  mp = l(function s(e) {
    return !e || (e._ts && s(e.parent));
  }, "_hasNoPausedAncestors"),
  ol = l(function (e) {
    return e._repeat ? rs(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  }, "_elapsedCycleDuration"),
  rs = l(function (e, t) {
    var i = Math.floor((e = qe(e / t)));
    return e && i === e ? i - 1 : i;
  }, "_animationCycle"),
  Nn = l(function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  }, "_parentToChildTotalTime"),
  Jn = l(function (e) {
    return (e._end = qe(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ye) || 0)
    ));
  }, "_setEnd"),
  ea = l(function (e, t) {
    var i = e._dp;
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = qe(
          i._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        Jn(e),
        i._dirty || pr(i, e)),
      e
    );
  }, "_alignPlayhead"),
  Mc = l(function (e, t) {
    var i;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((i = Nn(e.rawTime(), t)),
        (!t._dur || Zs(0, t.totalDuration(), i) - t._tTime > ye) &&
          t.render(i, !0)),
      pr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -ye;
    }
  }, "_postAddChecks"),
  fi = l(function (e, t, i, r) {
    return (
      t.parent && Gi(t),
      (t._start = qe(
        (Ai(i) ? i : i || e !== Me ? Ht(e, i, t) : e._time) + t._delay
      )),
      (t._end = qe(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Cc(e, t, "_first", "_last", e._sort ? "_start" : 0),
      qa(t) || (e._recent = t),
      r || Mc(e, t),
      e._ts < 0 && ea(e, e._tTime),
      e
    );
  }, "_addToTimeline"),
  Pc = l(function (e, t) {
    return (
      (Ft.ScrollTrigger || So("scrollTrigger", t)) &&
      Ft.ScrollTrigger.create(t, e)
    );
  }, "_scrollTrigger"),
  Ac = l(function (e, t, i, r, n) {
    if ((Po(e, t, n), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !tt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      bc !== zt.frame
    )
      return Hi.push(e), (e._lazy = [n, r]), 1;
  }, "_attemptInitTween"),
  gp = l(function s(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
  }, "_parentPlayheadIsBeforeStart"),
  qa = l(function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  }, "_isFromOrFromStart"),
  vp = l(function (e, t, i, r) {
    var n = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && gp(e) && !(!e._initted && qa(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !qa(e))))
          ? 0
          : 1,
      o = e._rDelay,
      c = 0,
      u,
      d,
      m;
    if (
      (o &&
        e._repeat &&
        ((c = Zs(0, e._tDur, t)),
        (d = rs(c, o)),
        e._yoyo && d & 1 && (a = 1 - a),
        d !== rs(e._tTime, o) &&
          ((n = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== n || tt || r || e._zTime === ye || (!t && e._zTime))
    ) {
      if (!e._initted && Ac(e, t, r, i, c)) return;
      for (
        m = e._zTime,
          e._zTime = t || (i ? ye : 0),
          i || (i = t && !m),
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = c,
          u = e._pt;
        u;

      )
        u.r(a, u.d), (u = u._next);
      t < 0 && Na(e, t, i, !0),
        e._onUpdate && !i && Nt(e, "onUpdate"),
        c && e._repeat && !i && e.parent && Nt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && Gi(e, 1),
          !i &&
            !tt &&
            (Nt(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  }, "_renderZeroDurationTween"),
  yp = l(function (e, t, i) {
    var r;
    if (i > t)
      for (r = e._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < t) return r;
        r = r._prev;
      }
  }, "_findNextPauseTween"),
  ss = l(function (e, t, i, r) {
    var n = e._repeat,
      a = qe(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = n ? (n < 0 ? 1e10 : qe(a * (n + 1) + e._rDelay * n)) : a),
      o > 0 && !r && ea(e, (e._tTime = e._tDur * o)),
      e.parent && Jn(e),
      i || pr(e.parent, e),
      e
    );
  }, "_setDuration"),
  ll = l(function (e) {
    return e instanceof yt ? pr(e) : ss(e, e._dur);
  }, "_onUpdateTotalDuration"),
  wp = { _start: 0, endTime: Bs, totalDuration: Bs },
  Ht = l(function s(e, t, i) {
    var r = e.labels,
      n = e._recent || wp,
      a = e.duration() >= jt ? n.endTime(!1) : e._dur,
      o,
      c,
      u;
    return Ue(t) && (isNaN(t) || t in r)
      ? ((c = t.charAt(0)),
        (u = t.substr(-1) === "%"),
        (o = t.indexOf("=")),
        c === "<" || c === ">"
          ? (o >= 0 && (t = t.replace(/=/, "")),
            (c === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (u ? (o < 0 ? n : i).totalDuration() / 100 : 1))
          : o < 0
          ? (t in r || (r[t] = a), r[t])
          : ((c = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
            u && i && (c = (c / 100) * (dt(i) ? i[0] : i).totalDuration()),
            o > 1 ? s(e, t.substr(0, o - 1), i) + c : a + c))
      : t == null
      ? a
      : +t;
  }, "_parsePosition"),
  Ps = l(function (e, t, i) {
    var r = Ai(t[1]),
      n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[n],
      o,
      c;
    if ((r && (a.duration = t[1]), (a.parent = i), e)) {
      for (o = a, c = i; c && !("immediateRender" in o); )
        (o = c.vars.defaults || {}), (c = St(c.vars.inherit) && c.parent);
      (a.immediateRender = St(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[n - 1]);
    }
    return new Ne(t[0], a, t[n + 1]);
  }, "_createTweenType"),
  Ki = l(function (e, t) {
    return e || e === 0 ? t(e) : t;
  }, "_conditionalReturn"),
  Zs = l(function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  }, "_clamp"),
  lt = l(function (e, t) {
    return !Ue(e) || !(t = lp.exec(e)) ? "" : t[1];
  }, "getUnit"),
  _p = l(function (e, t, i) {
    return Ki(i, function (r) {
      return Zs(e, t, r);
    });
  }, "clamp"),
  Fa = [].slice,
  Oc = l(function (e, t) {
    return (
      e &&
      yi(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && yi(e[0]))) &&
      !e.nodeType &&
      e !== ui
    );
  }, "_isArrayLike"),
  bp = l(function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var n;
        return (Ue(r) && !t) || Oc(r, 1)
          ? (n = i).push.apply(n, Ut(r))
          : i.push(r);
      }) || i
    );
  }, "_flatten"),
  Ut = l(function (e, t, i) {
    return Te && !t && Te.selector
      ? Te.selector(e)
      : Ue(e) && !i && (Ra || !ns())
      ? Fa.call((t || bo).querySelectorAll(e), 0)
      : dt(e)
      ? bp(e, i)
      : Oc(e)
      ? Fa.call(e, 0)
      : e
      ? [e]
      : [];
  }, "toArray"),
  Ba = l(function (e) {
    return (
      (e = Ut(e)[0] || Fs("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return Ut(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? Fs("Invalid scope") || bo.createElement("div")
            : e
        );
      }
    );
  }, "selector"),
  kc = l(function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  }, "shuffle"),
  Lc = l(function (e) {
    if (ke(e)) return e;
    var t = yi(e) ? e : { each: e },
      i = hr(t.ease),
      r = t.from || 0,
      n = parseFloat(t.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      c = isNaN(r) || o,
      u = t.axis,
      d = r,
      m = r;
    return (
      Ue(r)
        ? (d = m = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && c && ((d = r[0]), (m = r[1])),
      function (g, h, f) {
        var p = (f || t).length,
          v = a[p],
          _,
          w,
          y,
          b,
          S,
          x,
          T,
          M,
          E;
        if (!v) {
          if (((E = t.grid === "auto" ? 0 : (t.grid || [1, jt])[1]), !E)) {
            for (
              T = -jt;
              T < (T = f[E++].getBoundingClientRect().left) && E < p;

            );
            E < p && E--;
          }
          for (
            v = a[p] = [],
              _ = c ? Math.min(E, p) * d - 0.5 : r % E,
              w = E === jt ? 0 : c ? (p * m) / E - 0.5 : (r / E) | 0,
              T = 0,
              M = jt,
              x = 0;
            x < p;
            x++
          )
            (y = (x % E) - _),
              (b = w - ((x / E) | 0)),
              (v[x] = S = u ? Math.abs(u === "y" ? b : y) : pc(y * y + b * b)),
              S > T && (T = S),
              S < M && (M = S);
          r === "random" && kc(v),
            (v.max = T - M),
            (v.min = M),
            (v.v = p =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (E > p
                    ? p - 1
                    : u
                    ? u === "y"
                      ? p / E
                      : E
                    : Math.max(E, p / E)) ||
                0) * (r === "edges" ? -1 : 1)),
            (v.b = p < 0 ? n - p : n),
            (v.u = lt(t.amount || t.each) || 0),
            (i = i && p < 0 ? Vc(i) : i);
        }
        return (
          (p = (v[g] - v.min) / v.max || 0),
          qe(v.b + (i ? i(p) : p) * v.v) + v.u
        );
      }
    );
  }, "distribute"),
  Va = l(function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var r = qe(Math.round(parseFloat(i) / e) * e * t);
      return (r - (r % 1)) / t + (Ai(i) ? 0 : lt(i));
    };
  }, "_roundModifier"),
  Ic = l(function (e, t) {
    var i = dt(e),
      r,
      n;
    return (
      !i &&
        yi(e) &&
        ((r = i = e.radius || jt),
        e.values
          ? ((e = Ut(e.values)), (n = !Ai(e[0])) && (r *= r))
          : (e = Va(e.increment))),
      Ki(
        t,
        i
          ? ke(e)
            ? function (a) {
                return (n = e(a)), Math.abs(n - a) <= r ? n : a;
              }
            : function (a) {
                for (
                  var o = parseFloat(n ? a.x : a),
                    c = parseFloat(n ? a.y : 0),
                    u = jt,
                    d = 0,
                    m = e.length,
                    g,
                    h;
                  m--;

                )
                  n
                    ? ((g = e[m].x - o), (h = e[m].y - c), (g = g * g + h * h))
                    : (g = Math.abs(e[m] - o)),
                    g < u && ((u = g), (d = m));
                return (
                  (d = !r || u <= r ? e[d] : a),
                  n || d === a || Ai(a) ? d : d + lt(a)
                );
              }
          : Va(e)
      )
    );
  }, "snap"),
  Dc = l(function (e, t, i, r) {
    return Ki(dt(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
      return dt(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  }, "random"),
  Sp = l(function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (r) {
      return t.reduce(function (n, a) {
        return a(n);
      }, r);
    };
  }, "pipe"),
  xp = l(function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || lt(i));
    };
  }, "unitize"),
  Tp = l(function (e, t, i) {
    return Rc(e, t, 0, 1, i);
  }, "normalize"),
  zc = l(function (e, t, i) {
    return Ki(i, function (r) {
      return e[~~t(r)];
    });
  }, "_wrapArray"),
  Ep = l(function s(e, t, i) {
    var r = t - e;
    return dt(e)
      ? zc(e, s(0, e.length), t)
      : Ki(i, function (n) {
          return ((r + ((n - e) % r)) % r) + e;
        });
  }, "wrap"),
  Cp = l(function s(e, t, i) {
    var r = t - e,
      n = r * 2;
    return dt(e)
      ? zc(e, s(0, e.length - 1), t)
      : Ki(i, function (a) {
          return (a = (n + ((a - e) % n)) % n || 0), e + (a > r ? n - a : a);
        });
  }, "wrapYoyo"),
  Vs = l(function (e) {
    for (var t = 0, i = "", r, n, a, o; ~(r = e.indexOf("random(", t)); )
      (a = e.indexOf(")", r)),
        (o = e.charAt(r + 7) === "["),
        (n = e.substr(r + 7, a - r - 7).match(o ? vc : za)),
        (i +=
          e.substr(t, r - t) + Dc(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
        (t = a + 1);
    return i + e.substr(t, e.length - t);
  }, "_replaceRandom"),
  Rc = l(function (e, t, i, r, n) {
    var a = t - e,
      o = r - i;
    return Ki(n, function (c) {
      return i + (((c - e) / a) * o || 0);
    });
  }, "mapRange"),
  Mp = l(function s(e, t, i, r) {
    var n = isNaN(e + t)
      ? 0
      : function (h) {
          return (1 - h) * e + h * t;
        };
    if (!n) {
      var a = Ue(e),
        o = {},
        c,
        u,
        d,
        m,
        g;
      if ((i === !0 && (r = 1) && (i = null), a))
        (e = { p: e }), (t = { p: t });
      else if (dt(e) && !dt(t)) {
        for (d = [], m = e.length, g = m - 2, u = 1; u < m; u++)
          d.push(s(e[u - 1], e[u]));
        m--,
          (n = l(function (f) {
            f *= m;
            var p = Math.min(g, ~~f);
            return d[p](f - p);
          }, "func")),
          (i = t);
      } else r || (e = is(dt(e) ? [] : {}, e));
      if (!d) {
        for (c in t) Mo.call(o, e, c, "get", t[c]);
        n = l(function (f) {
          return ko(f, o) || (a ? e.p : e);
        }, "func");
      }
    }
    return Ki(i, n);
  }, "interpolate"),
  cl = l(function (e, t, i) {
    var r = e.labels,
      n = jt,
      a,
      o,
      c;
    for (a in r)
      (o = r[a] - t),
        o < 0 == !!i && o && n > (o = Math.abs(o)) && ((c = a), (n = o));
    return c;
  }, "_getLabelInDirection"),
  Nt = l(function (e, t, i) {
    var r = e.vars,
      n = r[t],
      a = Te,
      o = e._ctx,
      c,
      u,
      d;
    if (n)
      return (
        (c = r[t + "Params"]),
        (u = r.callbackScope || e),
        i && Hi.length && Rn(),
        o && (Te = o),
        (d = c ? n.apply(u, c) : n.call(u)),
        (Te = a),
        d
      );
  }, "_callback"),
  ws = l(function (e) {
    return (
      Gi(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!tt),
      e.progress() < 1 && Nt(e, "onInterrupt"),
      e
    );
  }, "_interrupt"),
  Br,
  $c = [],
  Nc = l(function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), _o() || e.headless)) {
        var t = e.name,
          i = ke(e),
          r =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          n = {
            init: Bs,
            render: ko,
            add: Mo,
            kill: Wp,
            modifier: Vp,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: Oo,
            aliases: {},
            register: 0,
          };
        if ((ns(), e !== r)) {
          if (It[t]) return;
          Bt(r, Bt($n(e, n), a)),
            is(r.prototype, is(n, $n(e, a))),
            (It[(r.prop = t)] = r),
            e.targetTest && (Sn.push(r), (xo[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        _c(t, r), e.register && e.register(Ct, r, Tt);
      } else $c.push(e);
  }, "_createPlugin"),
  ve = 255,
  _s = {
    aqua: [0, ve, ve],
    lime: [0, ve, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ve],
    navy: [0, 0, 128],
    white: [ve, ve, ve],
    olive: [128, 128, 0],
    yellow: [ve, ve, 0],
    orange: [ve, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ve, 0, 0],
    pink: [ve, 192, 203],
    cyan: [0, ve, ve],
    transparent: [ve, ve, ve, 0],
  },
  ha = l(function (e, t, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (i - t) * e * 6
        : e < 0.5
        ? i
        : e * 3 < 2
        ? t + (i - t) * (2 / 3 - e) * 6
        : t) *
        ve +
        0.5) |
        0
    );
  }, "_hue"),
  qc = l(function (e, t, i) {
    var r = e ? (Ai(e) ? [e >> 16, (e >> 8) & ve, e & ve] : 0) : _s.black,
      n,
      a,
      o,
      c,
      u,
      d,
      m,
      g,
      h,
      f;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), _s[e]))
        r = _s[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              "#" +
              n +
              n +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & ve, r & ve, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & ve, e & ve]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((r = f = e.match(za)), !t))
          (c = (+r[0] % 360) / 360),
            (u = +r[1] / 100),
            (d = +r[2] / 100),
            (a = d <= 0.5 ? d * (u + 1) : d + u - d * u),
            (n = d * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = ha(c + 1 / 3, n, a)),
            (r[1] = ha(c, n, a)),
            (r[2] = ha(c - 1 / 3, n, a));
        else if (~e.indexOf("="))
          return (r = e.match(mc)), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(za) || _s.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !f &&
        ((n = r[0] / ve),
        (a = r[1] / ve),
        (o = r[2] / ve),
        (m = Math.max(n, a, o)),
        (g = Math.min(n, a, o)),
        (d = (m + g) / 2),
        m === g
          ? (c = u = 0)
          : ((h = m - g),
            (u = d > 0.5 ? h / (2 - m - g) : h / (m + g)),
            (c =
              m === n
                ? (a - o) / h + (a < o ? 6 : 0)
                : m === a
                ? (o - n) / h + 2
                : (n - a) / h + 4),
            (c *= 60)),
        (r[0] = ~~(c + 0.5)),
        (r[1] = ~~(u * 100 + 0.5)),
        (r[2] = ~~(d * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  }, "splitColor"),
  Fc = l(function (e) {
    var t = [],
      i = [],
      r = -1;
    return (
      e.split(Yi).forEach(function (n) {
        var a = n.match(Fr) || [];
        t.push.apply(t, a), i.push((r += a.length + 1));
      }),
      (t.c = i),
      t
    );
  }, "_colorOrderData"),
  ul = l(function (e, t, i) {
    var r = "",
      n = (e + r).match(Yi),
      a = t ? "hsla(" : "rgba(",
      o = 0,
      c,
      u,
      d,
      m;
    if (!n) return e;
    if (
      ((n = n.map(function (g) {
        return (
          (g = qc(g, t, 1)) &&
          a +
            (t ? g[0] + "," + g[1] + "%," + g[2] + "%," + g[3] : g.join(",")) +
            ")"
        );
      })),
      i && ((d = Fc(e)), (c = i.c), c.join(r) !== d.c.join(r)))
    )
      for (u = e.replace(Yi, "1").split(Fr), m = u.length - 1; o < m; o++)
        r +=
          u[o] +
          (~c.indexOf(o)
            ? n.shift() || a + "0,0,0,0)"
            : (d.length ? d : n.length ? n : i).shift());
    if (!u)
      for (u = e.split(Yi), m = u.length - 1; o < m; o++) r += u[o] + n[o];
    return r + u[m];
  }, "_formatColors"),
  Yi = (function () {
    var s =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in _s) s += "|" + e + "\\b";
    return new RegExp(s + ")", "gi");
  })(),
  Pp = /hsl[a]?\(/,
  Bc = l(function (e) {
    var t = e.join(" "),
      i;
    if (((Yi.lastIndex = 0), Yi.test(t)))
      return (
        (i = Pp.test(t)),
        (e[1] = ul(e[1], i)),
        (e[0] = ul(e[0], i, Fc(e[1]))),
        !0
      );
  }, "_colorStringFilter"),
  Ws,
  zt = (function () {
    var s = Date.now,
      e = 500,
      t = 33,
      i = s(),
      r = i,
      n = 1e3 / 240,
      a = n,
      o = [],
      c,
      u,
      d,
      m,
      g,
      h,
      f = l(function p(v) {
        var _ = s() - r,
          w = v === !0,
          y,
          b,
          S,
          x;
        if (
          ((_ > e || _ < 0) && (i += _ - t),
          (r += _),
          (S = r - i),
          (y = S - a),
          (y > 0 || w) &&
            ((x = ++m.frame),
            (g = S - m.time * 1e3),
            (m.time = S = S / 1e3),
            (a += y + (y >= n ? 4 : n - y)),
            (b = 1)),
          w || (c = u(p)),
          b)
        )
          for (h = 0; h < o.length; h++) o[h](S, g, x, v);
      }, "_tick");
    return (
      (m = {
        time: 0,
        frame: 0,
        tick: l(function () {
          f(!0);
        }, "tick"),
        deltaRatio: l(function (v) {
          return g / (1e3 / (v || 60));
        }, "deltaRatio"),
        wake: l(function () {
          yc &&
            (!Ra &&
              _o() &&
              ((ui = Ra = window),
              (bo = ui.document || {}),
              (Ft.gsap = Ct),
              (ui.gsapVersions || (ui.gsapVersions = [])).push(Ct.version),
              wc(zn || ui.GreenSockGlobals || (!ui.gsap && ui) || {}),
              $c.forEach(Nc)),
            (d = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            c && m.sleep(),
            (u =
              d ||
              function (v) {
                return setTimeout(v, (a - m.time * 1e3 + 1) | 0);
              }),
            (Ws = 1),
            f(2));
        }, "wake"),
        sleep: l(function () {
          (d ? cancelAnimationFrame : clearTimeout)(c), (Ws = 0), (u = Bs);
        }, "sleep"),
        lagSmoothing: l(function (v, _) {
          (e = v || 1 / 0), (t = Math.min(_ || 33, e));
        }, "lagSmoothing"),
        fps: l(function (v) {
          (n = 1e3 / (v || 240)), (a = m.time * 1e3 + n);
        }, "fps"),
        add: l(function (v, _, w) {
          var y = _
            ? function (b, S, x, T) {
                v(b, S, x, T), m.remove(y);
              }
            : v;
          return m.remove(v), o[w ? "unshift" : "push"](y), ns(), y;
        }, "add"),
        remove: l(function (v, _) {
          ~(_ = o.indexOf(v)) && o.splice(_, 1) && h >= _ && h--;
        }, "remove"),
        _listeners: o,
      }),
      m
    );
  })(),
  ns = l(function () {
    return !Ws && zt.wake();
  }, "_wake"),
  et = {},
  Ap = /^[\d.\-M][\d.\-,\s]/,
  Op = /["']/g,
  kp = l(function (e) {
    for (
      var t = {},
        i = e.substr(1, e.length - 3).split(":"),
        r = i[0],
        n = 1,
        a = i.length,
        o,
        c,
        u;
      n < a;
      n++
    )
      (c = i[n]),
        (o = n !== a - 1 ? c.lastIndexOf(",") : c.length),
        (u = c.substr(0, o)),
        (t[r] = isNaN(u) ? u.replace(Op, "").trim() : +u),
        (r = c.substr(o + 1).trim());
    return t;
  }, "_parseObjectInString"),
  Lp = l(function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
  }, "_valueInParentheses"),
  Ip = l(function (e) {
    var t = (e + "").split("("),
      i = et[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [kp(t[1])] : Lp(e).split(",").map(Tc)
        )
      : et._CE && Ap.test(e)
      ? et._CE("", e)
      : i;
  }, "_configEaseFromString"),
  Vc = l(function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  }, "_invertEase"),
  Wc = l(function s(e, t) {
    for (var i = e._first, r; i; )
      i instanceof yt
        ? s(i, t)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== t &&
          (i.timeline
            ? s(i.timeline, t)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = t))),
        (i = i._next);
  }, "_propagateYoyoEase"),
  hr = l(function (e, t) {
    return (e && (ke(e) ? e : et[e] || Ip(e))) || t;
  }, "_parseEase"),
  Pr = l(function (e, t, i, r) {
    i === void 0 &&
      (i = l(function (c) {
        return 1 - t(1 - c);
      }, "easeOut")),
      r === void 0 &&
        (r = l(function (c) {
          return c < 0.5 ? t(c * 2) / 2 : 1 - t((1 - c) * 2) / 2;
        }, "easeInOut"));
    var n = { easeIn: t, easeOut: i, easeInOut: r },
      a;
    return (
      xt(e, function (o) {
        (et[o] = Ft[o] = n), (et[(a = o.toLowerCase())] = i);
        for (var c in n)
          et[
            a + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")
          ] = et[o + "." + c] = n[c];
      }),
      n
    );
  }, "_insertEase"),
  Hc = l(function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  }, "_easeInOutFromOut"),
  ma = l(function s(e, t, i) {
    var r = t >= 1 ? t : 1,
      n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / Da) * (Math.asin(1 / r) || 0),
      o = l(function (d) {
        return d === 1 ? 1 : r * Math.pow(2, -10 * d) * op((d - a) * n) + 1;
      }, "easeOut"),
      c =
        e === "out"
          ? o
          : e === "in"
          ? function (u) {
              return 1 - o(1 - u);
            }
          : Hc(o);
    return (
      (n = Da / n),
      (c.config = function (u, d) {
        return s(e, u, d);
      }),
      c
    );
  }, "_configElastic"),
  ga = l(function s(e, t) {
    t === void 0 && (t = 1.70158);
    var i = l(function (a) {
        return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
      }, "easeOut"),
      r =
        e === "out"
          ? i
          : e === "in"
          ? function (n) {
              return 1 - i(1 - n);
            }
          : Hc(i);
    return (
      (r.config = function (n) {
        return s(e, n);
      }),
      r
    );
  }, "_configBack");
xt("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
  var t = e < 5 ? e + 1 : e;
  Pr(
    s + ",Power" + (t - 1),
    e
      ? function (i) {
          return Math.pow(i, t);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, t);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, t) / 2
        : 1 - Math.pow((1 - i) * 2, t) / 2;
    }
  );
});
et.Linear.easeNone = et.none = et.Linear.easeIn;
Pr("Elastic", ma("in"), ma("out"), ma());
(function (s, e) {
  var t = 1 / e,
    i = 2 * t,
    r = 2.5 * t,
    n = l(function (o) {
      return o < t
        ? s * o * o
        : o < i
        ? s * Math.pow(o - 1.5 / e, 2) + 0.75
        : o < r
        ? s * (o -= 2.25 / e) * o + 0.9375
        : s * Math.pow(o - 2.625 / e, 2) + 0.984375;
    }, "easeOut");
  Pr(
    "Bounce",
    function (a) {
      return 1 - n(1 - a);
    },
    n
  );
})(7.5625, 2.75);
Pr("Expo", function (s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
Pr("Circ", function (s) {
  return -(pc(1 - s * s) - 1);
});
Pr("Sine", function (s) {
  return s === 1 ? 1 : -ap(s * sp) + 1;
});
Pr("Back", ga("in"), ga("out"), ga());
et.SteppedEase =
  et.steps =
  Ft.SteppedEase =
    {
      config: l(function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          r = e + (t ? 0 : 1),
          n = t ? 1 : 0,
          a = 1 - ye;
        return function (o) {
          return (((r * Zs(0, a, o)) | 0) + n) * i;
        };
      }, "config"),
    };
ts.ease = et["quad.out"];
xt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (s) {
    return (To += s + "," + s + "Params,");
  }
);
var Yc = l(function (e, t) {
    (this.id = np++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Sc),
      (this.set = t ? t.getSetter : Oo);
  }, "GSCache"),
  Hs = (function () {
    function s(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        ss(this, +t.duration, 1, 1),
        (this.data = t.data),
        Te && ((this._ctx = Te), Te.data.push(this)),
        Ws || zt.wake();
    }
    l(s, "Animation");
    var e = s.prototype;
    return (
      (e.delay = l(function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }, "delay")),
      (e.duration = l(function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }, "duration")),
      (e.totalDuration = l(function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            ss(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }, "totalDuration")),
      (e.totalTime = l(function (i, r) {
        if ((ns(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (ea(this, i), !n._dp || n.parent || Mc(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            fi(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === ye) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), xc(this, i, r)),
          this
        );
      }, "totalTime")),
      (e.time = l(function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + ol(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }, "time")),
      (e.totalProgress = l(function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }, "totalProgress")),
      (e.progress = l(function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                ol(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }, "progress")),
      (e.iteration = l(function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * n, r)
          : this._repeat
          ? rs(this._tTime, n) + 1
          : 1;
      }, "iteration")),
      (e.timeScale = l(function (i, r) {
        if (!arguments.length) return this._rts === -ye ? 0 : this._rts;
        if (this._rts === i) return this;
        var n =
          this.parent && this._ts ? Nn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -ye ? 0 : this._rts),
          this.totalTime(
            Zs(-Math.abs(this._delay), this.totalDuration(), n),
            r !== !1
          ),
          Jn(this),
          hp(this)
        );
      }, "timeScale")),
      (e.paused = l(function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (ns(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ye &&
                      (this._tTime -= ye)
                  ))),
            this)
          : this._ps;
      }, "paused")),
      (e.startTime = l(function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && fi(r, this, i - this._delay), this
          );
        }
        return this._start;
      }, "startTime")),
      (e.endTime = l(function (i) {
        return (
          this._start +
          (St(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }, "endTime")),
      (e.rawTime = l(function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Nn(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }, "rawTime")),
      (e.revert = l(function (i) {
        i === void 0 && (i = up);
        var r = tt;
        return (
          (tt = i),
          Co(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (tt = r),
          this
        );
      }, "revert")),
      (e.globalTime = l(function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : n;
      }, "globalTime")),
      (e.repeat = l(function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), ll(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }, "repeat")),
      (e.repeatDelay = l(function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), ll(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }, "repeatDelay")),
      (e.yoyo = l(function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }, "yoyo")),
      (e.seek = l(function (i, r) {
        return this.totalTime(Ht(this, i), St(r));
      }, "seek")),
      (e.restart = l(function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, St(r)),
          this._dur || (this._zTime = -ye),
          this
        );
      }, "restart")),
      (e.play = l(function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }, "play")),
      (e.reverse = l(function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }, "reverse")),
      (e.pause = l(function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }, "pause")),
      (e.resume = l(function () {
        return this.paused(!1);
      }, "resume")),
      (e.reversed = l(function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -ye : 0)),
            this)
          : this._rts < 0;
      }, "reversed")),
      (e.invalidate = l(function () {
        return (this._initted = this._act = 0), (this._zTime = -ye), this;
      }, "invalidate")),
      (e.isActive = l(function () {
        var i = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (n = i.rawTime(!0)) >= r &&
            n < this.endTime(!0) - ye)
        );
      }, "isActive")),
      (e.eventCallback = l(function (i, r, n) {
        var a = this.vars;
        return arguments.length > 1
          ? (r
              ? ((a[i] = r),
                n && (a[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete a[i],
            this)
          : a[i];
      }, "eventCallback")),
      (e.then = l(function (i) {
        var r = this;
        return new Promise(function (n) {
          var a = ke(i) ? i : Ec,
            o = l(function () {
              var u = r.then;
              (r.then = null),
                ke(a) && (a = a(r)) && (a.then || a === r) && (r.then = u),
                n(a),
                (r.then = u);
            }, "_resolve");
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? o()
            : (r._prom = o);
        });
      }, "then")),
      (e.kill = l(function () {
        ws(this);
      }, "kill")),
      s
    );
  })();
Bt(Hs.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ye,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var yt = (function (s) {
  fc(e, s);
  function e(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = s.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = St(i.sortChildren)),
      Me && fi(i.parent || Me, Si(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && Pc(Si(n), i.scrollTrigger),
      n
    );
  }
  l(e, "Timeline");
  var t = e.prototype;
  return (
    (t.to = l(function (r, n, a) {
      return Ps(0, arguments, this), this;
    }, "to")),
    (t.from = l(function (r, n, a) {
      return Ps(1, arguments, this), this;
    }, "from")),
    (t.fromTo = l(function (r, n, a, o) {
      return Ps(2, arguments, this), this;
    }, "fromTo")),
    (t.set = l(function (r, n, a) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Ms(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new Ne(r, n, Ht(this, a), 1),
        this
      );
    }, "set")),
    (t.call = l(function (r, n, a) {
      return fi(this, Ne.delayedCall(0, r, n), a);
    }, "call")),
    (t.staggerTo = l(function (r, n, a, o, c, u, d) {
      return (
        (a.duration = n),
        (a.stagger = a.stagger || o),
        (a.onComplete = u),
        (a.onCompleteParams = d),
        (a.parent = this),
        new Ne(r, a, Ht(this, c)),
        this
      );
    }, "staggerTo")),
    (t.staggerFrom = l(function (r, n, a, o, c, u, d) {
      return (
        (a.runBackwards = 1),
        (Ms(a).immediateRender = St(a.immediateRender)),
        this.staggerTo(r, n, a, o, c, u, d)
      );
    }, "staggerFrom")),
    (t.staggerFromTo = l(function (r, n, a, o, c, u, d, m) {
      return (
        (o.startAt = a),
        (Ms(o).immediateRender = St(o.immediateRender)),
        this.staggerTo(r, n, o, c, u, d, m)
      );
    }, "staggerFromTo")),
    (t.render = l(function (r, n, a) {
      var o = this._time,
        c = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        d = r <= 0 ? 0 : qe(r),
        m = this._zTime < 0 != r < 0 && (this._initted || !u),
        g,
        h,
        f,
        p,
        v,
        _,
        w,
        y,
        b,
        S,
        x,
        T;
      if (
        (this !== Me && d > c && r >= 0 && (d = c), d !== this._tTime || a || m)
      ) {
        if (
          (o !== this._time &&
            u &&
            ((d += this._time - o), (r += this._time - o)),
          (g = d),
          (b = this._start),
          (y = this._ts),
          (_ = !y),
          m && (u || (o = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((x = this._yoyo),
            (v = u + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(v * 100 + r, n, a);
          if (
            ((g = qe(d % v)),
            d === c
              ? ((p = this._repeat), (g = u))
              : ((S = qe(d / v)),
                (p = ~~S),
                p && p === S && ((g = u), p--),
                g > u && (g = u)),
            (S = rs(this._tTime, v)),
            !o &&
              this._tTime &&
              S !== p &&
              this._tTime - S * v - this._dur <= 0 &&
              (S = p),
            x && p & 1 && ((g = u - g), (T = 1)),
            p !== S && !this._lock)
          ) {
            var M = x && S & 1,
              E = M === (x && p & 1);
            if (
              (p < S && (M = !M),
              (o = M ? 0 : d % u ? u : d),
              (this._lock = 1),
              (this.render(o || (T ? 0 : qe(p * v)), n, !u)._lock = 0),
              (this._tTime = d),
              !n && this.parent && Nt(this, "onRepeat"),
              this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                _ !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (c = this._tDur),
              E &&
                ((this._lock = 2),
                (o = M ? u : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !T && this.invalidate()),
              (this._lock = 0),
              !this._ts && !_)
            )
              return this;
            Wc(this, T);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((w = yp(this, qe(o), qe(g))), w && (d -= g - (g = w._start))),
          (this._tTime = d),
          (this._time = g),
          (this._act = !y),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (o = 0)),
          !o && d && !n && !S && (Nt(this, "onStart"), this._tTime !== d))
        )
          return this;
        if (g >= o && r >= 0)
          for (h = this._first; h; ) {
            if (
              ((f = h._next), (h._act || g >= h._start) && h._ts && w !== h)
            ) {
              if (h.parent !== this) return this.render(r, n, a);
              if (
                (h.render(
                  h._ts > 0
                    ? (g - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (g - h._start) * h._ts,
                  n,
                  a
                ),
                g !== this._time || (!this._ts && !_))
              ) {
                (w = 0), f && (d += this._zTime = -ye);
                break;
              }
            }
            h = f;
          }
        else {
          h = this._last;
          for (var C = r < 0 ? r : g; h; ) {
            if (((f = h._prev), (h._act || C <= h._end) && h._ts && w !== h)) {
              if (h.parent !== this) return this.render(r, n, a);
              if (
                (h.render(
                  h._ts > 0
                    ? (C - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (C - h._start) * h._ts,
                  n,
                  a || (tt && Co(h))
                ),
                g !== this._time || (!this._ts && !_))
              ) {
                (w = 0), f && (d += this._zTime = C ? -ye : ye);
                break;
              }
            }
            h = f;
          }
        }
        if (
          w &&
          !n &&
          (this.pause(),
          (w.render(g >= o ? 0 : -ye)._zTime = g >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = b), Jn(this), this.render(r, n, a);
        this._onUpdate && !n && Nt(this, "onUpdate", !0),
          ((d === c && this._tTime >= this.totalDuration()) || (!d && o)) &&
            (b === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !u) &&
                ((d === c && this._ts > 0) || (!d && this._ts < 0)) &&
                Gi(this, 1),
              !n &&
                !(r < 0 && !o) &&
                (d || o || !c) &&
                (Nt(
                  this,
                  d === c && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(d < c && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }, "render")),
    (t.add = l(function (r, n) {
      var a = this;
      if ((Ai(n) || (n = Ht(this, n, r)), !(r instanceof Hs))) {
        if (dt(r))
          return (
            r.forEach(function (o) {
              return a.add(o, n);
            }),
            this
          );
        if (Ue(r)) return this.addLabel(r, n);
        if (ke(r)) r = Ne.delayedCall(0, r);
        else return this;
      }
      return this !== r ? fi(this, r, n) : this;
    }, "add")),
    (t.getChildren = l(function (r, n, a, o) {
      r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        a === void 0 && (a = !0),
        o === void 0 && (o = -jt);
      for (var c = [], u = this._first; u; )
        u._start >= o &&
          (u instanceof Ne
            ? n && c.push(u)
            : (a && c.push(u), r && c.push.apply(c, u.getChildren(!0, n, a)))),
          (u = u._next);
      return c;
    }, "getChildren")),
    (t.getById = l(function (r) {
      for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
        if (n[a].vars.id === r) return n[a];
    }, "getById")),
    (t.remove = l(function (r) {
      return Ue(r)
        ? this.removeLabel(r)
        : ke(r)
        ? this.killTweensOf(r)
        : (r.parent === this && Qn(this, r),
          r === this._recent && (this._recent = this._last),
          pr(this));
    }, "remove")),
    (t.totalTime = l(function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = qe(
              zt.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          s.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }, "totalTime")),
    (t.addLabel = l(function (r, n) {
      return (this.labels[r] = Ht(this, n)), this;
    }, "addLabel")),
    (t.removeLabel = l(function (r) {
      return delete this.labels[r], this;
    }, "removeLabel")),
    (t.addPause = l(function (r, n, a) {
      var o = Ne.delayedCall(0, n || Bs, a);
      return (
        (o.data = "isPause"), (this._hasPause = 1), fi(this, o, Ht(this, r))
      );
    }, "addPause")),
    (t.removePause = l(function (r) {
      var n = this._first;
      for (r = Ht(this, r); n; )
        n._start === r && n.data === "isPause" && Gi(n), (n = n._next);
    }, "removePause")),
    (t.killTweensOf = l(function (r, n, a) {
      for (var o = this.getTweensOf(r, a), c = o.length; c--; )
        qi !== o[c] && o[c].kill(r, n);
      return this;
    }, "killTweensOf")),
    (t.getTweensOf = l(function (r, n) {
      for (var a = [], o = Ut(r), c = this._first, u = Ai(n), d; c; )
        c instanceof Ne
          ? dp(c._targets, o) &&
            (u
              ? (!qi || (c._initted && c._ts)) &&
                c.globalTime(0) <= n &&
                c.globalTime(c.totalDuration()) > n
              : !n || c.isActive()) &&
            a.push(c)
          : (d = c.getTweensOf(o, n)).length && a.push.apply(a, d),
          (c = c._next);
      return a;
    }, "getTweensOf")),
    (t.tweenTo = l(function (r, n) {
      n = n || {};
      var a = this,
        o = Ht(a, r),
        c = n,
        u = c.startAt,
        d = c.onStart,
        m = c.onStartParams,
        g = c.immediateRender,
        h,
        f = Ne.to(
          a,
          Bt(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (o - (u && "time" in u ? u.time : a._time)) / a.timeScale()
                ) ||
                ye,
              onStart: l(function () {
                if ((a.pause(), !h)) {
                  var v =
                    n.duration ||
                    Math.abs(
                      (o - (u && "time" in u ? u.time : a._time)) /
                        a.timeScale()
                    );
                  f._dur !== v && ss(f, v, 0, 1).render(f._time, !0, !0),
                    (h = 1);
                }
                d && d.apply(f, m || []);
              }, "onStart"),
            },
            n
          )
        );
      return g ? f.render(0) : f;
    }, "tweenTo")),
    (t.tweenFromTo = l(function (r, n, a) {
      return this.tweenTo(n, Bt({ startAt: { time: Ht(this, r) } }, a));
    }, "tweenFromTo")),
    (t.recent = l(function () {
      return this._recent;
    }, "recent")),
    (t.nextLabel = l(function (r) {
      return r === void 0 && (r = this._time), cl(this, Ht(this, r));
    }, "nextLabel")),
    (t.previousLabel = l(function (r) {
      return r === void 0 && (r = this._time), cl(this, Ht(this, r), 1);
    }, "previousLabel")),
    (t.currentLabel = l(function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + ye);
    }, "currentLabel")),
    (t.shiftChildren = l(function (r, n, a) {
      a === void 0 && (a = 0);
      for (var o = this._first, c = this.labels, u; o; )
        o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
      if (n) for (u in c) c[u] >= a && (c[u] += r);
      return pr(this);
    }, "shiftChildren")),
    (t.invalidate = l(function (r) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
      return s.prototype.invalidate.call(this, r);
    }, "invalidate")),
    (t.clear = l(function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, a; n; ) (a = n._next), this.remove(n), (n = a);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        pr(this)
      );
    }, "clear")),
    (t.totalDuration = l(function (r) {
      var n = 0,
        a = this,
        o = a._last,
        c = jt,
        u,
        d,
        m;
      if (arguments.length)
        return a.timeScale(
          (a._repeat < 0 ? a.duration() : a.totalDuration()) /
            (a.reversed() ? -r : r)
        );
      if (a._dirty) {
        for (m = a.parent; o; )
          (u = o._prev),
            o._dirty && o.totalDuration(),
            (d = o._start),
            d > c && a._sort && o._ts && !a._lock
              ? ((a._lock = 1), (fi(a, o, d - o._delay, 1)._lock = 0))
              : (c = d),
            d < 0 &&
              o._ts &&
              ((n -= d),
              ((!m && !a._dp) || (m && m.smoothChildTiming)) &&
                ((a._start += d / a._ts), (a._time -= d), (a._tTime -= d)),
              a.shiftChildren(-d, !1, -1 / 0),
              (c = 0)),
            o._end > n && o._ts && (n = o._end),
            (o = u);
        ss(a, a === Me && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
      }
      return a._tDur;
    }, "totalDuration")),
    (e.updateRoot = l(function (r) {
      if ((Me._ts && (xc(Me, Nn(r, Me)), (bc = zt.frame)), zt.frame >= nl)) {
        nl += qt.autoSleep || 120;
        var n = Me._first;
        if ((!n || !n._ts) && qt.autoSleep && zt._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || zt.sleep();
        }
      }
    }, "updateRoot")),
    e
  );
})(Hs);
Bt(yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Dp = l(function (e, t, i, r, n, a, o) {
    var c = new Tt(this._pt, e, t, 0, 1, Zc, null, n),
      u = 0,
      d = 0,
      m,
      g,
      h,
      f,
      p,
      v,
      _,
      w;
    for (
      c.b = i,
        c.e = r,
        i += "",
        r += "",
        (_ = ~r.indexOf("random(")) && (r = Vs(r)),
        a && ((w = [i, r]), a(w, e, t), (i = w[0]), (r = w[1])),
        g = i.match(fa) || [];
      (m = fa.exec(r));

    )
      (f = m[0]),
        (p = r.substring(u, m.index)),
        h ? (h = (h + 1) % 5) : p.substr(-5) === "rgba(" && (h = 1),
        f !== g[d++] &&
          ((v = parseFloat(g[d - 1]) || 0),
          (c._pt = {
            _next: c._pt,
            p: p || d === 1 ? p : ",",
            s: v,
            c: f.charAt(1) === "=" ? Wr(v, f) - v : parseFloat(f) - v,
            m: h && h < 4 ? Math.round : 0,
          }),
          (u = fa.lastIndex));
    return (
      (c.c = u < r.length ? r.substring(u, r.length) : ""),
      (c.fp = o),
      (gc.test(r) || _) && (c.e = 0),
      (this._pt = c),
      c
    );
  }, "_addComplexStringPropTween"),
  Mo = l(function (e, t, i, r, n, a, o, c, u, d) {
    ke(r) && (r = r(n || 0, e, a));
    var m = e[t],
      g =
        i !== "get"
          ? i
          : ke(m)
          ? u
            ? e[
                t.indexOf("set") || !ke(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](u)
            : e[t]()
          : m,
      h = ke(m) ? (u ? qp : Uc) : Ao,
      f;
    if (
      (Ue(r) &&
        (~r.indexOf("random(") && (r = Vs(r)),
        r.charAt(1) === "=" &&
          ((f = Wr(g, r) + (lt(g) || 0)), (f || f === 0) && (r = f))),
      !d || g !== r || Wa)
    )
      return !isNaN(g * r) && r !== ""
        ? ((f = new Tt(
            this._pt,
            e,
            t,
            +g || 0,
            r - (g || 0),
            typeof m == "boolean" ? Bp : Kc,
            0,
            h
          )),
          u && (f.fp = u),
          o && f.modifier(o, this, e),
          (this._pt = f))
        : (!m && !(t in e) && So(t, r),
          Dp.call(this, e, t, g, r, h, c || qt.stringFilter, u));
  }, "_addPropTween"),
  zp = l(function (e, t, i, r, n) {
    if (
      (ke(e) && (e = As(e, n, t, i, r)),
      !yi(e) || (e.style && e.nodeType) || dt(e) || hc(e))
    )
      return Ue(e) ? As(e, n, t, i, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = As(e[o], n, t, i, r);
    return a;
  }, "_processVars"),
  Xc = l(function (e, t, i, r, n, a) {
    var o, c, u, d;
    if (
      It[e] &&
      (o = new It[e]()).init(
        n,
        o.rawVars ? t[e] : zp(t[e], r, n, a, i),
        i,
        r,
        a
      ) !== !1 &&
      ((i._pt = c = new Tt(i._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
      i !== Br)
    )
      for (u = i._ptLookup[i._targets.indexOf(n)], d = o._props.length; d--; )
        u[o._props[d]] = c;
    return o;
  }, "_checkPlugin"),
  qi,
  Wa,
  Po = l(function s(e, t, i) {
    var r = e.vars,
      n = r.ease,
      a = r.startAt,
      o = r.immediateRender,
      c = r.lazy,
      u = r.onUpdate,
      d = r.runBackwards,
      m = r.yoyoEase,
      g = r.keyframes,
      h = r.autoRevert,
      f = e._dur,
      p = e._startAt,
      v = e._targets,
      _ = e.parent,
      w = _ && _.data === "nested" ? _.vars.targets : v,
      y = e._overwrite === "auto" && !yo,
      b = e.timeline,
      S,
      x,
      T,
      M,
      E,
      C,
      I,
      A,
      k,
      D,
      R,
      z,
      O;
    if (
      (b && (!g || !n) && (n = "none"),
      (e._ease = hr(n, ts.ease)),
      (e._yEase = m ? Vc(hr(m === !0 ? n : m, ts.ease)) : 0),
      m &&
        e._yoyo &&
        !e._repeat &&
        ((m = e._yEase), (e._yEase = e._ease), (e._ease = m)),
      (e._from = !b && !!r.runBackwards),
      !b || (g && !r.stagger))
    ) {
      if (
        ((A = v[0] ? fr(v[0]).harness : 0),
        (z = A && r[A.prop]),
        (S = $n(r, xo)),
        p &&
          (p._zTime < 0 && p.progress(1),
          t < 0 && d && o && !h ? p.render(-1, !0) : p.revert(d && f ? bn : cp),
          (p._lazy = 0)),
        a)
      ) {
        if (
          (Gi(
            (e._startAt = Ne.set(
              v,
              Bt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !p && St(c),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return Nt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                a
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (tt || (!o && !h)) && e._startAt.revert(bn),
          o && f && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (d && f && !p) {
        if (
          (t && (o = !1),
          (T = Bt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !p && St(c),
              immediateRender: o,
              stagger: 0,
              parent: _,
            },
            S
          )),
          z && (T[A.prop] = z),
          Gi((e._startAt = Ne.set(v, T))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (tt ? e._startAt.revert(bn) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !o)
        )
          s(e._startAt, ye, ye);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, c = (f && St(c)) || (c && !f), x = 0;
        x < v.length;
        x++
      ) {
        if (
          ((E = v[x]),
          (I = E._gsap || Eo(v)[x]._gsap),
          (e._ptLookup[x] = D = {}),
          $a[I.id] && Hi.length && Rn(),
          (R = w === v ? x : w.indexOf(E)),
          A &&
            (k = new A()).init(E, z || S, e, R, w) !== !1 &&
            ((e._pt = M =
              new Tt(e._pt, E, k.name, 0, 1, k.render, k, 0, k.priority)),
            k._props.forEach(function (L) {
              D[L] = M;
            }),
            k.priority && (C = 1)),
          !A || z)
        )
          for (T in S)
            It[T] && (k = Xc(T, S, e, R, E, w))
              ? k.priority && (C = 1)
              : (D[T] = M =
                  Mo.call(e, E, T, "get", S[T], R, w, 0, r.stringFilter));
        e._op && e._op[x] && e.kill(E, e._op[x]),
          y &&
            e._pt &&
            ((qi = e),
            Me.killTweensOf(E, D, e.globalTime(t)),
            (O = !e.parent),
            (qi = 0)),
          e._pt && c && ($a[I.id] = 1);
      }
      C && Qc(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !O),
      g && t <= 0 && b.render(jt, !0, !0);
  }, "_initTween"),
  Rp = l(function (e, t, i, r, n, a, o, c) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      d,
      m,
      g,
      h;
    if (!u)
      for (
        u = e._ptCache[t] = [], g = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((d = g[h][t]), d && d.d && d.d._pt))
          for (d = d.d._pt; d && d.p !== t && d.fp !== t; ) d = d._next;
        if (!d)
          return (
            (Wa = 1),
            (e.vars[t] = "+=0"),
            Po(e, o),
            (Wa = 0),
            c ? Fs(t + " not eligible for reset") : 1
          );
        u.push(d);
      }
    for (h = u.length; h--; )
      (m = u[h]),
        (d = m._pt || m),
        (d.s = (r || r === 0) && !n ? r : d.s + (r || 0) + a * d.c),
        (d.c = i - d.s),
        m.e && (m.e = Ie(i) + lt(m.e)),
        m.b && (m.b = d.s + lt(m.b));
  }, "_updatePropTweens"),
  $p = l(function (e, t) {
    var i = e[0] ? fr(e[0]).harness : 0,
      r = i && i.aliases,
      n,
      a,
      o,
      c;
    if (!r) return t;
    n = is({}, t);
    for (a in r)
      if (a in n) for (c = r[a].split(","), o = c.length; o--; ) n[c[o]] = n[a];
    return n;
  }, "_addAliasesToVars"),
  Np = l(function (e, t, i, r) {
    var n = t.ease || r || "power1.inOut",
      a,
      o;
    if (dt(t))
      (o = i[e] || (i[e] = [])),
        t.forEach(function (c, u) {
          return o.push({ t: (u / (t.length - 1)) * 100, v: c, e: n });
        });
    else
      for (a in t)
        (o = i[a] || (i[a] = [])),
          a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: n });
  }, "_parseKeyframe"),
  As = l(function (e, t, i, r, n) {
    return ke(e)
      ? e.call(t, i, r, n)
      : Ue(e) && ~e.indexOf("random(")
      ? Vs(e)
      : e;
  }, "_parseFuncOrString"),
  Gc = To + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  jc = {};
xt(Gc + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
  return (jc[s] = 1);
});
var Ne = (function (s) {
  fc(e, s);
  function e(i, r, n, a) {
    var o;
    typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (o = s.call(this, a ? r : Ms(r)) || this);
    var c = o.vars,
      u = c.duration,
      d = c.delay,
      m = c.immediateRender,
      g = c.stagger,
      h = c.overwrite,
      f = c.keyframes,
      p = c.defaults,
      v = c.scrollTrigger,
      _ = c.yoyoEase,
      w = r.parent || Me,
      y = (dt(i) || hc(i) ? Ai(i[0]) : "length" in r) ? [i] : Ut(i),
      b,
      S,
      x,
      T,
      M,
      E,
      C,
      I;
    if (
      ((o._targets = y.length
        ? Eo(y)
        : Fs(
            "GSAP target " + i + " not found. https://gsap.com",
            !qt.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = h),
      f || g || nn(u) || nn(d))
    ) {
      if (
        ((r = o.vars),
        (b = o.timeline =
          new yt({
            data: "nested",
            defaults: p || {},
            targets: w && w.data === "nested" ? w.vars.targets : y,
          })),
        b.kill(),
        (b.parent = b._dp = Si(o)),
        (b._start = 0),
        g || nn(u) || nn(d))
      ) {
        if (((T = y.length), (C = g && Lc(g)), yi(g)))
          for (M in g) ~Gc.indexOf(M) && (I || (I = {}), (I[M] = g[M]));
        for (S = 0; S < T; S++)
          (x = $n(r, jc)),
            (x.stagger = 0),
            _ && (x.yoyoEase = _),
            I && is(x, I),
            (E = y[S]),
            (x.duration = +As(u, Si(o), S, E, y)),
            (x.delay = (+As(d, Si(o), S, E, y) || 0) - o._delay),
            !g &&
              T === 1 &&
              x.delay &&
              ((o._delay = d = x.delay), (o._start += d), (x.delay = 0)),
            b.to(E, x, C ? C(S, E, y) : 0),
            (b._ease = et.none);
        b.duration() ? (u = d = 0) : (o.timeline = 0);
      } else if (f) {
        Ms(Bt(b.vars.defaults, { ease: "none" })),
          (b._ease = hr(f.ease || r.ease || "none"));
        var A = 0,
          k,
          D,
          R;
        if (dt(f))
          f.forEach(function (z) {
            return b.to(y, z, ">");
          }),
            b.duration();
        else {
          x = {};
          for (M in f)
            M === "ease" || M === "easeEach" || Np(M, f[M], x, f.easeEach);
          for (M in x)
            for (
              k = x[M].sort(function (z, O) {
                return z.t - O.t;
              }),
                A = 0,
                S = 0;
              S < k.length;
              S++
            )
              (D = k[S]),
                (R = {
                  ease: D.e,
                  duration: ((D.t - (S ? k[S - 1].t : 0)) / 100) * u,
                }),
                (R[M] = D.v),
                b.to(y, R, A),
                (A += R.duration);
          b.duration() < u && b.to({}, { duration: u - b.duration() });
        }
      }
      u || o.duration((u = b.duration()));
    } else o.timeline = 0;
    return (
      h === !0 && !yo && ((qi = Si(o)), Me.killTweensOf(y), (qi = 0)),
      fi(w, Si(o), n),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      (m ||
        (!u &&
          !f &&
          o._start === qe(w._time) &&
          St(m) &&
          mp(Si(o)) &&
          w.data !== "nested")) &&
        ((o._tTime = -ye), o.render(Math.max(0, -d) || 0)),
      v && Pc(Si(o), v),
      o
    );
  }
  l(e, "Tween");
  var t = e.prototype;
  return (
    (t.render = l(function (r, n, a) {
      var o = this._time,
        c = this._tDur,
        u = this._dur,
        d = r < 0,
        m = r > c - ye && !d ? c : r < ye ? 0 : r,
        g,
        h,
        f,
        p,
        v,
        _,
        w,
        y,
        b;
      if (!u) vp(this, r, n, a);
      else if (
        m !== this._tTime ||
        !r ||
        a ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== d) ||
        this._lazy
      ) {
        if (((g = m), (y = this.timeline), this._repeat)) {
          if (((p = u + this._rDelay), this._repeat < -1 && d))
            return this.totalTime(p * 100 + r, n, a);
          if (
            ((g = qe(m % p)),
            m === c
              ? ((f = this._repeat), (g = u))
              : ((v = qe(m / p)),
                (f = ~~v),
                f && f === v ? ((g = u), f--) : g > u && (g = u)),
            (_ = this._yoyo && f & 1),
            _ && ((b = this._yEase), (g = u - g)),
            (v = rs(this._tTime, p)),
            g === o && !a && this._initted && f === v)
          )
            return (this._tTime = m), this;
          f !== v &&
            (y && this._yEase && Wc(y, _),
            this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              g !== p &&
              this._initted &&
              ((this._lock = a = 1),
              (this.render(qe(p * f), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Ac(this, d ? r : g, a, n, m)) return (this._tTime = 0), this;
          if (o !== this._time && !(a && this.vars.repeatRefresh && f !== v))
            return this;
          if (u !== this._dur) return this.render(r, n, a);
        }
        if (
          ((this._tTime = m),
          (this._time = g),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = w = (b || this._ease)(g / u)),
          this._from && (this.ratio = w = 1 - w),
          !o && m && !n && !v && (Nt(this, "onStart"), this._tTime !== m))
        )
          return this;
        for (h = this._pt; h; ) h.r(w, h.d), (h = h._next);
        (y && y.render(r < 0 ? r : y._dur * y._ease(g / this._dur), n, a)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (d && Na(this, r, n, a), Nt(this, "onUpdate")),
          this._repeat &&
            f !== v &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            Nt(this, "onRepeat"),
          (m === this._tDur || !m) &&
            this._tTime === m &&
            (d && !this._onUpdate && Na(this, r, !0, !0),
            (r || !u) &&
              ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) &&
              Gi(this, 1),
            !n &&
              !(d && !o) &&
              (m || o || _) &&
              (Nt(this, m === c ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(m < c && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }, "render")),
    (t.targets = l(function () {
      return this._targets;
    }, "targets")),
    (t.invalidate = l(function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        s.prototype.invalidate.call(this, r)
      );
    }, "invalidate")),
    (t.resetTo = l(function (r, n, a, o, c) {
      Ws || zt.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        d;
      return (
        this._initted || Po(this, u),
        (d = this._ease(u / this._dur)),
        Rp(this, r, n, a, o, d, u, c)
          ? this.resetTo(r, n, a, o, 1)
          : (ea(this, 0),
            this.parent ||
              Cc(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }, "resetTo")),
    (t.kill = l(function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? ws(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!tt),
          this
        );
      if (this.timeline) {
        var a = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, qi && qi.vars.overwrite !== !0)
            ._first || ws(this),
          this.parent &&
            a !== this.timeline.totalDuration() &&
            ss(this, (this._dur * this.timeline._tDur) / a, 0, 1),
          this
        );
      }
      var o = this._targets,
        c = r ? Ut(r) : o,
        u = this._ptLookup,
        d = this._pt,
        m,
        g,
        h,
        f,
        p,
        v,
        _;
      if ((!n || n === "all") && pp(o, c))
        return n === "all" && (this._pt = 0), ws(this);
      for (
        m = this._op = this._op || [],
          n !== "all" &&
            (Ue(n) &&
              ((p = {}),
              xt(n, function (w) {
                return (p[w] = 1);
              }),
              (n = p)),
            (n = $p(o, n))),
          _ = o.length;
        _--;

      )
        if (~c.indexOf(o[_])) {
          (g = u[_]),
            n === "all"
              ? ((m[_] = n), (f = g), (h = {}))
              : ((h = m[_] = m[_] || {}), (f = n));
          for (p in f)
            (v = g && g[p]),
              v &&
                ((!("kill" in v.d) || v.d.kill(p) === !0) && Qn(this, v, "_pt"),
                delete g[p]),
              h !== "all" && (h[p] = 1);
        }
      return this._initted && !this._pt && d && ws(this), this;
    }, "kill")),
    (e.to = l(function (r, n) {
      return new e(r, n, arguments[2]);
    }, "to")),
    (e.from = l(function (r, n) {
      return Ps(1, arguments);
    }, "from")),
    (e.delayedCall = l(function (r, n, a, o) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: a,
        onReverseCompleteParams: a,
        callbackScope: o,
      });
    }, "delayedCall")),
    (e.fromTo = l(function (r, n, a) {
      return Ps(2, arguments);
    }, "fromTo")),
    (e.set = l(function (r, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
    }, "set")),
    (e.killTweensOf = l(function (r, n, a) {
      return Me.killTweensOf(r, n, a);
    }, "killTweensOf")),
    e
  );
})(Hs);
Bt(Ne.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
xt("staggerTo,staggerFrom,staggerFromTo", function (s) {
  Ne[s] = function () {
    var e = new yt(),
      t = Fa.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var Ao = l(function (e, t, i) {
    return (e[t] = i);
  }, "_setterPlain"),
  Uc = l(function (e, t, i) {
    return e[t](i);
  }, "_setterFunc"),
  qp = l(function (e, t, i, r) {
    return e[t](r.fp, i);
  }, "_setterFuncWithParam"),
  Fp = l(function (e, t, i) {
    return e.setAttribute(t, i);
  }, "_setterAttribute"),
  Oo = l(function (e, t) {
    return ke(e[t]) ? Uc : wo(e[t]) && e.setAttribute ? Fp : Ao;
  }, "_getSetter"),
  Kc = l(function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  }, "_renderPlain"),
  Bp = l(function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  }, "_renderBoolean"),
  Zc = l(function (e, t) {
    var i = t._pt,
      r = "";
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  }, "_renderComplexString"),
  ko = l(function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  }, "_renderPropTweens"),
  Vp = l(function (e, t, i, r) {
    for (var n = this._pt, a; n; )
      (a = n._next), n.p === r && n.modifier(e, t, i), (n = a);
  }, "_addPluginModifier"),
  Wp = l(function (e) {
    for (var t = this._pt, i, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Qn(this, t, "_pt")
          : t.dep || (i = 1),
        (t = r);
    return !i;
  }, "_killPropTweensOf"),
  Hp = l(function (e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
  }, "_setterWithModifier"),
  Qc = l(function (e) {
    for (var t = e._pt, i, r, n, a; t; ) {
      for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (n = t),
        (t._next = r) ? (r._prev = t) : (a = t),
        (t = i);
    }
    e._pt = n;
  }, "_sortPropTweensByPriority"),
  Tt = (function () {
    function s(t, i, r, n, a, o, c, u, d) {
      (this.t = i),
        (this.s = n),
        (this.c = a),
        (this.p = r),
        (this.r = o || Kc),
        (this.d = c || this),
        (this.set = u || Ao),
        (this.pr = d || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    l(s, "PropTween");
    var e = s.prototype;
    return (
      (e.modifier = l(function (i, r, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Hp),
          (this.m = i),
          (this.mt = n),
          (this.tween = r);
      }, "modifier")),
      s
    );
  })();
xt(
  To +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (s) {
    return (xo[s] = 1);
  }
);
Ft.TweenMax = Ft.TweenLite = Ne;
Ft.TimelineLite = Ft.TimelineMax = yt;
Me = new yt({
  sortChildren: !1,
  defaults: ts,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
qt.stringFilter = Bc;
var mr = [],
  xn = {},
  Yp = [],
  dl = 0,
  Xp = 0,
  va = l(function (e) {
    return (xn[e] || Yp).map(function (t) {
      return t();
    });
  }, "_dispatch"),
  Ha = l(function () {
    var e = Date.now(),
      t = [];
    e - dl > 2 &&
      (va("matchMediaInit"),
      mr.forEach(function (i) {
        var r = i.queries,
          n = i.conditions,
          a,
          o,
          c,
          u;
        for (o in r)
          (a = ui.matchMedia(r[o]).matches),
            a && (c = 1),
            a !== n[o] && ((n[o] = a), (u = 1));
        u && (i.revert(), c && t.push(i));
      }),
      va("matchMediaRevert"),
      t.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (dl = e),
      va("matchMedia"));
  }, "_onMediaChange"),
  Jc = (function () {
    function s(t, i) {
      (this.selector = i && Ba(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Xp++),
        t && this.add(t);
    }
    l(s, "Context");
    var e = s.prototype;
    return (
      (e.add = l(function (i, r, n) {
        ke(i) && ((n = r), (r = i), (i = ke));
        var a = this,
          o = l(function () {
            var u = Te,
              d = a.selector,
              m;
            return (
              u && u !== a && u.data.push(a),
              n && (a.selector = Ba(n)),
              (Te = a),
              (m = r.apply(a, arguments)),
              ke(m) && a._r.push(m),
              (Te = u),
              (a.selector = d),
              (a.isReverted = !1),
              m
            );
          }, "f");
        return (
          (a.last = o),
          i === ke
            ? o(a, function (c) {
                return a.add(null, c);
              })
            : i
            ? (a[i] = o)
            : o
        );
      }, "add")),
      (e.ignore = l(function (i) {
        var r = Te;
        (Te = null), i(this), (Te = r);
      }, "ignore")),
      (e.getTweens = l(function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof s
              ? i.push.apply(i, r.getTweens())
              : r instanceof Ne &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }, "getTweens")),
      (e.clear = l(function () {
        this._r.length = this.data.length = 0;
      }, "clear")),
      (e.kill = l(function (i, r) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var o = n.getTweens(), c = n.data.length, u; c--; )
                  (u = n.data[c]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (d) {
                        return o.splice(o.indexOf(d), 1);
                      }));
                for (
                  o
                    .map(function (d) {
                      return {
                        g:
                          d._dur ||
                          d._delay ||
                          (d._sat && !d._sat.vars.immediateRender)
                            ? d.globalTime(0)
                            : -1 / 0,
                        t: d,
                      };
                    })
                    .sort(function (d, m) {
                      return m.g - d.g || -1 / 0;
                    })
                    .forEach(function (d) {
                      return d.t.revert(i);
                    }),
                    c = n.data.length;
                  c--;

                )
                  (u = n.data[c]),
                    u instanceof yt
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Ne) && u.revert && u.revert(i);
                n._r.forEach(function (d) {
                  return d(i, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (o) {
                return o.kill && o.kill();
              }),
          this.clear(),
          r)
        )
          for (var a = mr.length; a--; )
            mr[a].id === this.id && mr.splice(a, 1);
      }, "kill")),
      (e.revert = l(function (i) {
        this.kill(i || {});
      }, "revert")),
      s
    );
  })(),
  Gp = (function () {
    function s(t) {
      (this.contexts = []), (this.scope = t), Te && Te.data.push(this);
    }
    l(s, "MatchMedia");
    var e = s.prototype;
    return (
      (e.add = l(function (i, r, n) {
        yi(i) || (i = { matches: i });
        var a = new Jc(0, n || this.scope),
          o = (a.conditions = {}),
          c,
          u,
          d;
        Te && !a.selector && (a.selector = Te.selector),
          this.contexts.push(a),
          (r = a.add("onMatch", r)),
          (a.queries = i);
        for (u in i)
          u === "all"
            ? (d = 1)
            : ((c = ui.matchMedia(i[u])),
              c &&
                (mr.indexOf(a) < 0 && mr.push(a),
                (o[u] = c.matches) && (d = 1),
                c.addListener
                  ? c.addListener(Ha)
                  : c.addEventListener("change", Ha)));
        return (
          d &&
            r(a, function (m) {
              return a.add(null, m);
            }),
          this
        );
      }, "add")),
      (e.revert = l(function (i) {
        this.kill(i || {});
      }, "revert")),
      (e.kill = l(function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }, "kill")),
      s
    );
  })(),
  qn = {
    registerPlugin: l(function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      t.forEach(function (r) {
        return Nc(r);
      });
    }, "registerPlugin"),
    timeline: l(function (e) {
      return new yt(e);
    }, "timeline"),
    getTweensOf: l(function (e, t) {
      return Me.getTweensOf(e, t);
    }, "getTweensOf"),
    getProperty: l(function (e, t, i, r) {
      Ue(e) && (e = Ut(e)[0]);
      var n = fr(e || {}).get,
        a = i ? Ec : Tc;
      return (
        i === "native" && (i = ""),
        e &&
          (t
            ? a(((It[t] && It[t].get) || n)(e, t, i, r))
            : function (o, c, u) {
                return a(((It[o] && It[o].get) || n)(e, o, c, u));
              })
      );
    }, "getProperty"),
    quickSetter: l(function (e, t, i) {
      if (((e = Ut(e)), e.length > 1)) {
        var r = e.map(function (d) {
            return Ct.quickSetter(d, t, i);
          }),
          n = r.length;
        return function (d) {
          for (var m = n; m--; ) r[m](d);
        };
      }
      e = e[0] || {};
      var a = It[t],
        o = fr(e),
        c = (o.harness && (o.harness.aliases || {})[t]) || t,
        u = a
          ? function (d) {
              var m = new a();
              (Br._pt = 0),
                m.init(e, i ? d + i : d, Br, 0, [e]),
                m.render(1, m),
                Br._pt && ko(1, Br);
            }
          : o.set(e, c);
      return a
        ? u
        : function (d) {
            return u(e, c, i ? d + i : d, o, 1);
          };
    }, "quickSetter"),
    quickTo: l(function (e, t, i) {
      var r,
        n = Ct.to(
          e,
          Bt(
            ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        a = l(function (c, u, d) {
          return n.resetTo(t, c, u, d);
        }, "func");
      return (a.tween = n), a;
    }, "quickTo"),
    isTweening: l(function (e) {
      return Me.getTweensOf(e, !0).length > 0;
    }, "isTweening"),
    defaults: l(function (e) {
      return e && e.ease && (e.ease = hr(e.ease, ts.ease)), al(ts, e || {});
    }, "defaults"),
    config: l(function (e) {
      return al(qt, e || {});
    }, "config"),
    registerEffect: l(function (e) {
      var t = e.name,
        i = e.effect,
        r = e.plugins,
        n = e.defaults,
        a = e.extendTimeline;
      (r || "").split(",").forEach(function (o) {
        return (
          o && !It[o] && !Ft[o] && Fs(t + " effect requires " + o + " plugin.")
        );
      }),
        (pa[t] = function (o, c, u) {
          return i(Ut(o), Bt(c || {}, n), u);
        }),
        a &&
          (yt.prototype[t] = function (o, c, u) {
            return this.add(pa[t](o, yi(c) ? c : (u = c) && {}, this), u);
          });
    }, "registerEffect"),
    registerEase: l(function (e, t) {
      et[e] = hr(t);
    }, "registerEase"),
    parseEase: l(function (e, t) {
      return arguments.length ? hr(e, t) : et;
    }, "parseEase"),
    getById: l(function (e) {
      return Me.getById(e);
    }, "getById"),
    exportRoot: l(function (e, t) {
      e === void 0 && (e = {});
      var i = new yt(e),
        r,
        n;
      for (
        i.smoothChildTiming = St(e.smoothChildTiming),
          Me.remove(i),
          i._dp = 0,
          i._time = i._tTime = Me._time,
          r = Me._first;
        r;

      )
        (n = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof Ne &&
              r.vars.onComplete === r._targets[0]
            )) &&
            fi(i, r, r._start - r._delay),
          (r = n);
      return fi(Me, i, 0), i;
    }, "exportRoot"),
    context: l(function (e, t) {
      return e ? new Jc(e, t) : Te;
    }, "context"),
    matchMedia: l(function (e) {
      return new Gp(e);
    }, "matchMedia"),
    matchMediaRefresh: l(function () {
      return (
        mr.forEach(function (e) {
          var t = e.conditions,
            i,
            r;
          for (r in t) t[r] && ((t[r] = !1), (i = 1));
          i && e.revert();
        }) || Ha()
      );
    }, "matchMediaRefresh"),
    addEventListener: l(function (e, t) {
      var i = xn[e] || (xn[e] = []);
      ~i.indexOf(t) || i.push(t);
    }, "addEventListener"),
    removeEventListener: l(function (e, t) {
      var i = xn[e],
        r = i && i.indexOf(t);
      r >= 0 && i.splice(r, 1);
    }, "removeEventListener"),
    utils: {
      wrap: Ep,
      wrapYoyo: Cp,
      distribute: Lc,
      random: Dc,
      snap: Ic,
      normalize: Tp,
      getUnit: lt,
      clamp: _p,
      splitColor: qc,
      toArray: Ut,
      selector: Ba,
      mapRange: Rc,
      pipe: Sp,
      unitize: xp,
      interpolate: Mp,
      shuffle: kc,
    },
    install: wc,
    effects: pa,
    ticker: zt,
    updateRoot: yt.updateRoot,
    plugins: It,
    globalTimeline: Me,
    core: {
      PropTween: Tt,
      globals: _c,
      Tween: Ne,
      Timeline: yt,
      Animation: Hs,
      getCache: fr,
      _removeLinkedListItem: Qn,
      reverting: l(function () {
        return tt;
      }, "reverting"),
      context: l(function (e) {
        return e && Te && (Te.data.push(e), (e._ctx = Te)), Te;
      }, "context"),
      suppressOverwrites: l(function (e) {
        return (yo = e);
      }, "suppressOverwrites"),
    },
  };
xt("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
  return (qn[s] = Ne[s]);
});
zt.add(yt.updateRoot);
Br = qn.to({}, { duration: 0 });
var jp = l(function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  }, "_getPluginPropTween"),
  Up = l(function (e, t) {
    var i = e._targets,
      r,
      n,
      a;
    for (r in t)
      for (n = i.length; n--; )
        (a = e._ptLookup[n][r]),
          a &&
            (a = a.d) &&
            (a._pt && (a = jp(a, r)),
            a && a.modifier && a.modifier(t[r], e, i[n], r));
  }, "_addModifiers"),
  ya = l(function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: l(function (r, n, a) {
        a._onInit = function (o) {
          var c, u;
          if (
            (Ue(n) &&
              ((c = {}),
              xt(n, function (d) {
                return (c[d] = 1);
              }),
              (n = c)),
            t)
          ) {
            c = {};
            for (u in n) c[u] = t(n[u]);
            n = c;
          }
          Up(o, n);
        };
      }, "init"),
    };
  }, "_buildModifierPlugin"),
  Ct =
    qn.registerPlugin(
      {
        name: "attr",
        init: l(function (e, t, i, r, n) {
          var a, o, c;
          this.tween = i;
          for (a in t)
            (c = e.getAttribute(a) || ""),
              (o = this.add(
                e,
                "setAttribute",
                (c || 0) + "",
                t[a],
                r,
                n,
                0,
                0,
                a
              )),
              (o.op = a),
              (o.b = c),
              this._props.push(a);
        }, "init"),
        render: l(function (e, t) {
          for (var i = t._pt; i; )
            tt ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
        }, "render"),
      },
      {
        name: "endArray",
        headless: 1,
        init: l(function (e, t) {
          for (var i = t.length; i--; )
            this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
        }, "init"),
      },
      ya("roundProps", Va),
      ya("modifiers"),
      ya("snap", Ic)
    ) || qn;
Ne.version = yt.version = Ct.version = "3.13.0";
yc = 1;
_o() && ns();
var fl,
  Fi,
  Hr,
  Lo,
  or,
  pl,
  Io,
  Kp = l(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Oi = {},
  rr = 180 / Math.PI,
  Yr = Math.PI / 180,
  Lr = Math.atan2,
  hl = 1e8,
  Do = /([A-Z])/g,
  Zp = /(left|right|width|margin|padding|x)/i,
  Qp = /[\s,\(]\S/,
  pi = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Ya = l(function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  }, "_renderCSSProp"),
  Jp = l(function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  }, "_renderPropWithEnd"),
  eh = l(function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  }, "_renderCSSPropWithBeginning"),
  th = l(function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  }, "_renderRoundedCSSProp"),
  eu = l(function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  }, "_renderNonTweeningValue"),
  tu = l(function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  }, "_renderNonTweeningValueOnlyAtEnd"),
  ih = l(function (e, t, i) {
    return (e.style[t] = i);
  }, "_setterCSSStyle"),
  rh = l(function (e, t, i) {
    return e.style.setProperty(t, i);
  }, "_setterCSSProp"),
  sh = l(function (e, t, i) {
    return (e._gsap[t] = i);
  }, "_setterTransform"),
  nh = l(function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  }, "_setterScale"),
  ah = l(function (e, t, i, r, n) {
    var a = e._gsap;
    (a.scaleX = a.scaleY = i), a.renderTransform(n, a);
  }, "_setterScaleWithRender"),
  oh = l(function (e, t, i, r, n) {
    var a = e._gsap;
    (a[t] = i), a.renderTransform(n, a);
  }, "_setterTransformWithRender"),
  Pe = "transform",
  Et = Pe + "Origin",
  lh = l(function s(e, t) {
    var i = this,
      r = this.target,
      n = r.style,
      a = r._gsap;
    if (e in Oi && n) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = pi[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (i.tfm[o] = xi(r, o));
              })
            : (this.tfm[e] = a.x ? a[e] : xi(r, e)),
          e === Et && (this.tfm.zOrigin = a.zOrigin);
      else
        return pi.transform.split(",").forEach(function (o) {
          return s.call(i, o, t);
        });
      if (this.props.indexOf(Pe) >= 0) return;
      a.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(Et, t, "")),
        (e = Pe);
    }
    (n || t) && this.props.push(e, t, n[e]);
  }, "_saveStyle"),
  iu = l(function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  }, "_removeIndependentTransforms"),
  ch = l(function () {
    var e = this.props,
      t = this.target,
      i = t.style,
      r = t._gsap,
      n,
      a;
    for (n = 0; n < e.length; n += 3)
      e[n + 1]
        ? e[n + 1] === 2
          ? t[e[n]](e[n + 2])
          : (t[e[n]] = e[n + 2])
        : e[n + 2]
        ? (i[e[n]] = e[n + 2])
        : i.removeProperty(
            e[n].substr(0, 2) === "--"
              ? e[n]
              : e[n].replace(Do, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (n = Io()),
        (!n || !n.isStart) &&
          !i[Pe] &&
          (iu(i),
          r.zOrigin &&
            i[Et] &&
            ((i[Et] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  }, "_revertStyle"),
  ru = l(function (e, t) {
    var i = { target: e, props: [], revert: ch, save: lh };
    return (
      e._gsap || Ct.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  }, "_getStyleSaver"),
  su,
  Xa = l(function (e, t) {
    var i = Fi.createElementNS
      ? Fi.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Fi.createElement(e);
    return i && i.style ? i : Fi.createElement(e);
  }, "_createElement"),
  Kt = l(function s(e, t, i) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace(Do, "-$1").toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!i && s(e, as(t) || t, 1)) ||
      ""
    );
  }, "_getComputedProperty"),
  ml = "O,Moz,ms,Ms,Webkit".split(","),
  as = l(function (e, t, i) {
    var r = t || or,
      n = r.style,
      a = 5;
    if (e in n && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      a-- && !(ml[a] + e in n);

    );
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? ml[a] : "") + e;
  }, "_checkPropPrefix"),
  Ga = l(function () {
    Kp() &&
      window.document &&
      ((fl = window),
      (Fi = fl.document),
      (Hr = Fi.documentElement),
      (or = Xa("div") || { style: {} }),
      Xa("div"),
      (Pe = as(Pe)),
      (Et = Pe + "Origin"),
      (or.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (su = !!as("perspective")),
      (Io = Ct.core.reverting),
      (Lo = 1));
  }, "_initCore"),
  gl = l(function (e) {
    var t = e.ownerSVGElement,
      i = Xa(
        "svg",
        (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = e.cloneNode(!0),
      n;
    (r.style.display = "block"), i.appendChild(r), Hr.appendChild(i);
    try {
      n = r.getBBox();
    } catch {}
    return i.removeChild(r), Hr.removeChild(i), n;
  }, "_getReparentedCloneBBox"),
  vl = l(function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  }, "_getAttributeFallbacks"),
  nu = l(function (e) {
    var t, i;
    try {
      t = e.getBBox();
    } catch {
      (t = gl(e)), (i = 1);
    }
    return (
      (t && (t.width || t.height)) || i || (t = gl(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +vl(e, ["x", "cx", "x1"]) || 0,
            y: +vl(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  }, "_getBBox"),
  au = l(function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && nu(e));
  }, "_isSVG"),
  Sr = l(function (e, t) {
    if (t) {
      var i = e.style,
        r;
      t in Oi && t !== Et && (t = Pe),
        i.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            i.removeProperty(
              r === "--" ? t : t.replace(Do, "-$1").toLowerCase()
            ))
          : i.removeAttribute(t);
    }
  }, "_removeProperty"),
  Bi = l(function (e, t, i, r, n, a) {
    var o = new Tt(e._pt, t, i, 0, 1, a ? tu : eu);
    return (e._pt = o), (o.b = r), (o.e = n), e._props.push(i), o;
  }, "_addNonTweeningPT"),
  yl = { deg: 1, rad: 1, turn: 1 },
  uh = { grid: 1, flex: 1 },
  ji = l(function s(e, t, i, r) {
    var n = parseFloat(i) || 0,
      a = (i + "").trim().substr((n + "").length) || "px",
      o = or.style,
      c = Zp.test(t),
      u = e.tagName.toLowerCase() === "svg",
      d = (u ? "client" : "offset") + (c ? "Width" : "Height"),
      m = 100,
      g = r === "px",
      h = r === "%",
      f,
      p,
      v,
      _;
    if (r === a || !n || yl[r] || yl[a]) return n;
    if (
      (a !== "px" && !g && (n = s(e, t, i, "px")),
      (_ = e.getCTM && au(e)),
      (h || a === "%") && (Oi[t] || ~t.indexOf("adius")))
    )
      return (
        (f = _ ? e.getBBox()[c ? "width" : "height"] : e[d]),
        Ie(h ? (n / f) * m : (n / 100) * f)
      );
    if (
      ((o[c ? "width" : "height"] = m + (g ? a : r)),
      (p =
        (r !== "rem" && ~t.indexOf("adius")) ||
        (r === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      _ && (p = (e.ownerSVGElement || {}).parentNode),
      (!p || p === Fi || !p.appendChild) && (p = Fi.body),
      (v = p._gsap),
      v && h && v.width && c && v.time === zt.time && !v.uncache)
    )
      return Ie((n / v.width) * m);
    if (h && (t === "height" || t === "width")) {
      var w = e.style[t];
      (e.style[t] = m + r), (f = e[d]), w ? (e.style[t] = w) : Sr(e, t);
    } else (h || a === "%") && !uh[Kt(p, "display")] && (o.position = Kt(e, "position")), p === e && (o.position = "static"), p.appendChild(or), (f = or[d]), p.removeChild(or), (o.position = "absolute");
    return (
      c && h && ((v = fr(p)), (v.time = zt.time), (v.width = p[d])),
      Ie(g ? (f * n) / m : f && n ? (m / f) * n : 0)
    );
  }, "_convertToUnit"),
  xi = l(function (e, t, i, r) {
    var n;
    return (
      Lo || Ga(),
      t in pi &&
        t !== "transform" &&
        ((t = pi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Oi[t] && t !== "transform"
        ? ((n = Xs(e, r)),
          (n =
            t !== "transformOrigin"
              ? n[t]
              : n.svg
              ? n.origin
              : Bn(Kt(e, Et)) + " " + n.zOrigin + "px"))
        : ((n = e.style[t]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (Fn[t] && Fn[t](e, t, i)) ||
              Kt(e, t) ||
              Sc(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? ji(e, t, n, i) + i : n
    );
  }, "_get"),
  dh = l(function (e, t, i, r) {
    if (!i || i === "none") {
      var n = as(t, e, 1),
        a = n && Kt(e, n, 1);
      a && a !== i
        ? ((t = n), (i = a))
        : t === "borderColor" && (i = Kt(e, "borderTopColor"));
    }
    var o = new Tt(this._pt, e.style, t, 0, 1, Zc),
      c = 0,
      u = 0,
      d,
      m,
      g,
      h,
      f,
      p,
      v,
      _,
      w,
      y,
      b,
      S;
    if (
      ((o.b = i),
      (o.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = Kt(e, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((p = e.style[t]),
        (e.style[t] = r),
        (r = Kt(e, t) || r),
        p ? (e.style[t] = p) : Sr(e, t)),
      (d = [i, r]),
      Bc(d),
      (i = d[0]),
      (r = d[1]),
      (g = i.match(Fr) || []),
      (S = r.match(Fr) || []),
      S.length)
    ) {
      for (; (m = Fr.exec(r)); )
        (v = m[0]),
          (w = r.substring(c, m.index)),
          f
            ? (f = (f + 1) % 5)
            : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (f = 1),
          v !== (p = g[u++] || "") &&
            ((h = parseFloat(p) || 0),
            (b = p.substr((h + "").length)),
            v.charAt(1) === "=" && (v = Wr(h, v) + b),
            (_ = parseFloat(v)),
            (y = v.substr((_ + "").length)),
            (c = Fr.lastIndex - y.length),
            y ||
              ((y = y || qt.units[t] || b),
              c === r.length && ((r += y), (o.e += y))),
            b !== y && (h = ji(e, t, p, y) || 0),
            (o._pt = {
              _next: o._pt,
              p: w || u === 1 ? w : ",",
              s: h,
              c: _ - h,
              m: (f && f < 4) || t === "zIndex" ? Math.round : 0,
            }));
      o.c = c < r.length ? r.substring(c, r.length) : "";
    } else o.r = t === "display" && r === "none" ? tu : eu;
    return gc.test(r) && (o.e = 0), (this._pt = o), o;
  }, "_tweenComplexCSSString"),
  wl = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  fh = l(function (e) {
    var t = e.split(" "),
      i = t[0],
      r = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((e = i), (i = r), (r = e)),
      (t[0] = wl[i] || i),
      (t[1] = wl[r] || r),
      t.join(" ")
    );
  }, "_convertKeywordsToPercentages"),
  ph = l(function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t,
        r = i.style,
        n = t.u,
        a = i._gsap,
        o,
        c,
        u;
      if (n === "all" || n === !0) (r.cssText = ""), (c = 1);
      else
        for (n = n.split(","), u = n.length; --u > -1; )
          (o = n[u]),
            Oi[o] && ((c = 1), (o = o === "transformOrigin" ? Et : Pe)),
            Sr(i, o);
      c &&
        (Sr(i, Pe),
        a &&
          (a.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          Xs(i, 1),
          (a.uncache = 1),
          iu(r)));
    }
  }, "_renderClearProps"),
  Fn = {
    clearProps: l(function (e, t, i, r, n) {
      if (n.data !== "isFromStart") {
        var a = (e._pt = new Tt(e._pt, t, i, 0, 0, ph));
        return (a.u = r), (a.pr = -10), (a.tween = n), e._props.push(i), 1;
      }
    }, "clearProps"),
  },
  Ys = [1, 0, 0, 1, 0, 0],
  ou = {},
  lu = l(function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  }, "_isNullTransform"),
  _l = l(function (e) {
    var t = Kt(e, Pe);
    return lu(t) ? Ys : t.substr(7).match(mc).map(Ie);
  }, "_getComputedTransformMatrixAsArray"),
  zo = l(function (e, t) {
    var i = e._gsap || fr(e),
      r = e.style,
      n = _l(e),
      a,
      o,
      c,
      u;
    return i.svg && e.getAttribute("transform")
      ? ((c = e.transform.baseVal.consolidate().matrix),
        (n = [c.a, c.b, c.c, c.d, c.e, c.f]),
        n.join(",") === "1,0,0,1,0,0" ? Ys : n)
      : (n === Ys &&
          !e.offsetParent &&
          e !== Hr &&
          !i.svg &&
          ((c = r.display),
          (r.display = "block"),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((u = 1), (o = e.nextElementSibling), Hr.appendChild(e)),
          (n = _l(e)),
          c ? (r.display = c) : Sr(e, "display"),
          u &&
            (o
              ? a.insertBefore(e, o)
              : a
              ? a.appendChild(e)
              : Hr.removeChild(e))),
        t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  }, "_getMatrix"),
  ja = l(function (e, t, i, r, n, a) {
    var o = e._gsap,
      c = n || zo(e, !0),
      u = o.xOrigin || 0,
      d = o.yOrigin || 0,
      m = o.xOffset || 0,
      g = o.yOffset || 0,
      h = c[0],
      f = c[1],
      p = c[2],
      v = c[3],
      _ = c[4],
      w = c[5],
      y = t.split(" "),
      b = parseFloat(y[0]) || 0,
      S = parseFloat(y[1]) || 0,
      x,
      T,
      M,
      E;
    i
      ? c !== Ys &&
        (T = h * v - f * p) &&
        ((M = b * (v / T) + S * (-p / T) + (p * w - v * _) / T),
        (E = b * (-f / T) + S * (h / T) - (h * w - f * _) / T),
        (b = M),
        (S = E))
      : ((x = nu(e)),
        (b = x.x + (~y[0].indexOf("%") ? (b / 100) * x.width : b)),
        (S = x.y + (~(y[1] || y[0]).indexOf("%") ? (S / 100) * x.height : S))),
      r || (r !== !1 && o.smooth)
        ? ((_ = b - u),
          (w = S - d),
          (o.xOffset = m + (_ * h + w * p) - _),
          (o.yOffset = g + (_ * f + w * v) - w))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = b),
      (o.yOrigin = S),
      (o.smooth = !!r),
      (o.origin = t),
      (o.originIsAbsolute = !!i),
      (e.style[Et] = "0px 0px"),
      a &&
        (Bi(a, o, "xOrigin", u, b),
        Bi(a, o, "yOrigin", d, S),
        Bi(a, o, "xOffset", m, o.xOffset),
        Bi(a, o, "yOffset", g, o.yOffset)),
      e.setAttribute("data-svg-origin", b + " " + S);
  }, "_applySVGOrigin"),
  Xs = l(function (e, t) {
    var i = e._gsap || new Yc(e);
    if ("x" in i && !t && !i.uncache) return i;
    var r = e.style,
      n = i.scaleX < 0,
      a = "px",
      o = "deg",
      c = getComputedStyle(e),
      u = Kt(e, Et) || "0",
      d,
      m,
      g,
      h,
      f,
      p,
      v,
      _,
      w,
      y,
      b,
      S,
      x,
      T,
      M,
      E,
      C,
      I,
      A,
      k,
      D,
      R,
      z,
      O,
      L,
      N,
      P,
      Y,
      Z,
      fe,
      ue,
      F;
    return (
      (d = m = g = p = v = _ = w = y = b = 0),
      (h = f = 1),
      (i.svg = !!(e.getCTM && au(e))),
      c.translate &&
        ((c.translate !== "none" ||
          c.scale !== "none" ||
          c.rotate !== "none") &&
          (r[Pe] =
            (c.translate !== "none"
              ? "translate3d(" +
                (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") +
            (c.scale !== "none"
              ? "scale(" + c.scale.split(" ").join(",") + ") "
              : "") +
            (c[Pe] !== "none" ? c[Pe] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (T = zo(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((L = e.getBBox()),
            (u = i.xOrigin - L.x + "px " + (i.yOrigin - L.y) + "px"),
            (O = ""))
          : (O = !t && e.getAttribute("data-svg-origin")),
        ja(e, O || u, !!O || i.originIsAbsolute, i.smooth !== !1, T)),
      (S = i.xOrigin || 0),
      (x = i.yOrigin || 0),
      T !== Ys &&
        ((I = T[0]),
        (A = T[1]),
        (k = T[2]),
        (D = T[3]),
        (d = R = T[4]),
        (m = z = T[5]),
        T.length === 6
          ? ((h = Math.sqrt(I * I + A * A)),
            (f = Math.sqrt(D * D + k * k)),
            (p = I || A ? Lr(A, I) * rr : 0),
            (w = k || D ? Lr(k, D) * rr + p : 0),
            w && (f *= Math.abs(Math.cos(w * Yr))),
            i.svg && ((d -= S - (S * I + x * k)), (m -= x - (S * A + x * D))))
          : ((F = T[6]),
            (fe = T[7]),
            (P = T[8]),
            (Y = T[9]),
            (Z = T[10]),
            (ue = T[11]),
            (d = T[12]),
            (m = T[13]),
            (g = T[14]),
            (M = Lr(F, Z)),
            (v = M * rr),
            M &&
              ((E = Math.cos(-M)),
              (C = Math.sin(-M)),
              (O = R * E + P * C),
              (L = z * E + Y * C),
              (N = F * E + Z * C),
              (P = R * -C + P * E),
              (Y = z * -C + Y * E),
              (Z = F * -C + Z * E),
              (ue = fe * -C + ue * E),
              (R = O),
              (z = L),
              (F = N)),
            (M = Lr(-k, Z)),
            (_ = M * rr),
            M &&
              ((E = Math.cos(-M)),
              (C = Math.sin(-M)),
              (O = I * E - P * C),
              (L = A * E - Y * C),
              (N = k * E - Z * C),
              (ue = D * C + ue * E),
              (I = O),
              (A = L),
              (k = N)),
            (M = Lr(A, I)),
            (p = M * rr),
            M &&
              ((E = Math.cos(M)),
              (C = Math.sin(M)),
              (O = I * E + A * C),
              (L = R * E + z * C),
              (A = A * E - I * C),
              (z = z * E - R * C),
              (I = O),
              (R = L)),
            v &&
              Math.abs(v) + Math.abs(p) > 359.9 &&
              ((v = p = 0), (_ = 180 - _)),
            (h = Ie(Math.sqrt(I * I + A * A + k * k))),
            (f = Ie(Math.sqrt(z * z + F * F))),
            (M = Lr(R, z)),
            (w = Math.abs(M) > 2e-4 ? M * rr : 0),
            (b = ue ? 1 / (ue < 0 ? -ue : ue) : 0)),
        i.svg &&
          ((O = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !lu(Kt(e, Pe))),
          O && e.setAttribute("transform", O))),
      Math.abs(w) > 90 &&
        Math.abs(w) < 270 &&
        (n
          ? ((h *= -1), (w += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((f *= -1), (w += w <= 0 ? 180 : -180))),
      (t = t || i.uncache),
      (i.x =
        d -
        ((i.xPercent =
          d &&
          ((!t && i.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetWidth * i.xPercent) / 100
          : 0) +
        a),
      (i.y =
        m -
        ((i.yPercent =
          m &&
          ((!t && i.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-m) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        a),
      (i.z = g + a),
      (i.scaleX = Ie(h)),
      (i.scaleY = Ie(f)),
      (i.rotation = Ie(p) + o),
      (i.rotationX = Ie(v) + o),
      (i.rotationY = Ie(_) + o),
      (i.skewX = w + o),
      (i.skewY = y + o),
      (i.transformPerspective = b + a),
      (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
        (r[Et] = Bn(u)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = qt.force3D),
      (i.renderTransform = i.svg ? mh : su ? cu : hh),
      (i.uncache = 0),
      i
    );
  }, "_parseTransform"),
  Bn = l(function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  }, "_firstTwoOnly"),
  wa = l(function (e, t, i) {
    var r = lt(t);
    return Ie(parseFloat(t) + parseFloat(ji(e, "x", i + "px", r))) + r;
  }, "_addPxTranslate"),
  hh = l(function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      cu(e, t);
  }, "_renderNon3DTransforms"),
  tr = "0deg",
  ps = "0px",
  ir = ") ",
  cu = l(function (e, t) {
    var i = t || this,
      r = i.xPercent,
      n = i.yPercent,
      a = i.x,
      o = i.y,
      c = i.z,
      u = i.rotation,
      d = i.rotationY,
      m = i.rotationX,
      g = i.skewX,
      h = i.skewY,
      f = i.scaleX,
      p = i.scaleY,
      v = i.transformPerspective,
      _ = i.force3D,
      w = i.target,
      y = i.zOrigin,
      b = "",
      S = (_ === "auto" && e && e !== 1) || _ === !0;
    if (y && (m !== tr || d !== tr)) {
      var x = parseFloat(d) * Yr,
        T = Math.sin(x),
        M = Math.cos(x),
        E;
      (x = parseFloat(m) * Yr),
        (E = Math.cos(x)),
        (a = wa(w, a, T * E * -y)),
        (o = wa(w, o, -Math.sin(x) * -y)),
        (c = wa(w, c, M * E * -y + y));
    }
    v !== ps && (b += "perspective(" + v + ir),
      (r || n) && (b += "translate(" + r + "%, " + n + "%) "),
      (S || a !== ps || o !== ps || c !== ps) &&
        (b +=
          c !== ps || S
            ? "translate3d(" + a + ", " + o + ", " + c + ") "
            : "translate(" + a + ", " + o + ir),
      u !== tr && (b += "rotate(" + u + ir),
      d !== tr && (b += "rotateY(" + d + ir),
      m !== tr && (b += "rotateX(" + m + ir),
      (g !== tr || h !== tr) && (b += "skew(" + g + ", " + h + ir),
      (f !== 1 || p !== 1) && (b += "scale(" + f + ", " + p + ir),
      (w.style[Pe] = b || "translate(0, 0)");
  }, "_renderCSSTransforms"),
  mh = l(function (e, t) {
    var i = t || this,
      r = i.xPercent,
      n = i.yPercent,
      a = i.x,
      o = i.y,
      c = i.rotation,
      u = i.skewX,
      d = i.skewY,
      m = i.scaleX,
      g = i.scaleY,
      h = i.target,
      f = i.xOrigin,
      p = i.yOrigin,
      v = i.xOffset,
      _ = i.yOffset,
      w = i.forceCSS,
      y = parseFloat(a),
      b = parseFloat(o),
      S,
      x,
      T,
      M,
      E;
    (c = parseFloat(c)),
      (u = parseFloat(u)),
      (d = parseFloat(d)),
      d && ((d = parseFloat(d)), (u += d), (c += d)),
      c || u
        ? ((c *= Yr),
          (u *= Yr),
          (S = Math.cos(c) * m),
          (x = Math.sin(c) * m),
          (T = Math.sin(c - u) * -g),
          (M = Math.cos(c - u) * g),
          u &&
            ((d *= Yr),
            (E = Math.tan(u - d)),
            (E = Math.sqrt(1 + E * E)),
            (T *= E),
            (M *= E),
            d &&
              ((E = Math.tan(d)),
              (E = Math.sqrt(1 + E * E)),
              (S *= E),
              (x *= E))),
          (S = Ie(S)),
          (x = Ie(x)),
          (T = Ie(T)),
          (M = Ie(M)))
        : ((S = m), (M = g), (x = T = 0)),
      ((y && !~(a + "").indexOf("px")) || (b && !~(o + "").indexOf("px"))) &&
        ((y = ji(h, "x", a, "px")), (b = ji(h, "y", o, "px"))),
      (f || p || v || _) &&
        ((y = Ie(y + f - (f * S + p * T) + v)),
        (b = Ie(b + p - (f * x + p * M) + _))),
      (r || n) &&
        ((E = h.getBBox()),
        (y = Ie(y + (r / 100) * E.width)),
        (b = Ie(b + (n / 100) * E.height))),
      (E =
        "matrix(" + S + "," + x + "," + T + "," + M + "," + y + "," + b + ")"),
      h.setAttribute("transform", E),
      w && (h.style[Pe] = E);
  }, "_renderSVGTransforms"),
  gh = l(function (e, t, i, r, n) {
    var a = 360,
      o = Ue(n),
      c = parseFloat(n) * (o && ~n.indexOf("rad") ? rr : 1),
      u = c - r,
      d = r + u + "deg",
      m,
      g;
    return (
      o &&
        ((m = n.split("_")[1]),
        m === "short" && ((u %= a), u !== u % (a / 2) && (u += u < 0 ? a : -a)),
        m === "cw" && u < 0
          ? (u = ((u + a * hl) % a) - ~~(u / a) * a)
          : m === "ccw" && u > 0 && (u = ((u - a * hl) % a) - ~~(u / a) * a)),
      (e._pt = g = new Tt(e._pt, t, i, r, u, Jp)),
      (g.e = d),
      (g.u = "deg"),
      e._props.push(i),
      g
    );
  }, "_addRotationalPropTween"),
  bl = l(function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }, "_assign"),
  vh = l(function (e, t, i) {
    var r = bl({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      a = i.style,
      o,
      c,
      u,
      d,
      m,
      g,
      h,
      f;
    r.svg
      ? ((u = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (a[Pe] = t),
        (o = Xs(i, 1)),
        Sr(i, Pe),
        i.setAttribute("transform", u))
      : ((u = getComputedStyle(i)[Pe]),
        (a[Pe] = t),
        (o = Xs(i, 1)),
        (a[Pe] = u));
    for (c in Oi)
      (u = r[c]),
        (d = o[c]),
        u !== d &&
          n.indexOf(c) < 0 &&
          ((h = lt(u)),
          (f = lt(d)),
          (m = h !== f ? ji(i, c, u, f) : parseFloat(u)),
          (g = parseFloat(d)),
          (e._pt = new Tt(e._pt, o, c, m, g - m, Ya)),
          (e._pt.u = f || 0),
          e._props.push(c));
    bl(o, r);
  }, "_addRawTransformPTs");
xt("padding,margin,Width,Radius", function (s, e) {
  var t = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    a = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (o) {
      return e < 2 ? s + o : "border" + o + s;
    });
  Fn[e > 1 ? "border" + s : s] = function (o, c, u, d, m) {
    var g, h;
    if (arguments.length < 4)
      return (
        (g = a.map(function (f) {
          return xi(o, f, u);
        })),
        (h = g.join(" ")),
        h.split(g[0]).length === 5 ? g[0] : h
      );
    (g = (d + "").split(" ")),
      (h = {}),
      a.forEach(function (f, p) {
        return (h[f] = g[p] = g[p] || g[((p - 1) / 2) | 0]);
      }),
      o.init(c, h, m);
  };
});
var uu = {
  name: "css",
  register: Ga,
  targetTest: l(function (e) {
    return e.style && e.nodeType;
  }, "targetTest"),
  init: l(function (e, t, i, r, n) {
    var a = this._props,
      o = e.style,
      c = i.vars.startAt,
      u,
      d,
      m,
      g,
      h,
      f,
      p,
      v,
      _,
      w,
      y,
      b,
      S,
      x,
      T,
      M;
    Lo || Ga(),
      (this.styles = this.styles || ru(e)),
      (M = this.styles.props),
      (this.tween = i);
    for (p in t)
      if (p !== "autoRound" && ((d = t[p]), !(It[p] && Xc(p, t, i, r, e, n)))) {
        if (
          ((h = typeof d),
          (f = Fn[p]),
          h === "function" && ((d = d.call(i, r, e, n)), (h = typeof d)),
          h === "string" && ~d.indexOf("random(") && (d = Vs(d)),
          f)
        )
          f(this, e, p, d, i) && (T = 1);
        else if (p.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
            (d += ""),
            (Yi.lastIndex = 0),
            Yi.test(u) || ((v = lt(u)), (_ = lt(d))),
            _ ? v !== _ && (u = ji(e, p, u, _) + _) : v && (d += v),
            this.add(o, "setProperty", u, d, r, n, 0, 0, p),
            a.push(p),
            M.push(p, 0, o[p]);
        else if (h !== "undefined") {
          if (
            (c && p in c
              ? ((u = typeof c[p] == "function" ? c[p].call(i, r, e, n) : c[p]),
                Ue(u) && ~u.indexOf("random(") && (u = Vs(u)),
                lt(u + "") ||
                  u === "auto" ||
                  (u += qt.units[p] || lt(xi(e, p)) || ""),
                (u + "").charAt(1) === "=" && (u = xi(e, p)))
              : (u = xi(e, p)),
            (g = parseFloat(u)),
            (w = h === "string" && d.charAt(1) === "=" && d.substr(0, 2)),
            w && (d = d.substr(2)),
            (m = parseFloat(d)),
            p in pi &&
              (p === "autoAlpha" &&
                (g === 1 && xi(e, "visibility") === "hidden" && m && (g = 0),
                M.push("visibility", 0, o.visibility),
                Bi(
                  this,
                  o,
                  "visibility",
                  g ? "inherit" : "hidden",
                  m ? "inherit" : "hidden",
                  !m
                )),
              p !== "scale" &&
                p !== "transform" &&
                ((p = pi[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
            (y = p in Oi),
            y)
          ) {
            if (
              (this.styles.save(p),
              h === "string" &&
                d.substring(0, 6) === "var(--" &&
                ((d = Kt(e, d.substring(4, d.indexOf(")")))),
                (m = parseFloat(d))),
              b ||
                ((S = e._gsap),
                (S.renderTransform && !t.parseTransform) ||
                  Xs(e, t.parseTransform),
                (x = t.smoothOrigin !== !1 && S.smooth),
                (b = this._pt =
                  new Tt(this._pt, o, Pe, 0, 1, S.renderTransform, S, 0, -1)),
                (b.dep = 1)),
              p === "scale")
            )
              (this._pt = new Tt(
                this._pt,
                S,
                "scaleY",
                S.scaleY,
                (w ? Wr(S.scaleY, w + m) : m) - S.scaleY || 0,
                Ya
              )),
                (this._pt.u = 0),
                a.push("scaleY", p),
                (p += "X");
            else if (p === "transformOrigin") {
              M.push(Et, 0, o[Et]),
                (d = fh(d)),
                S.svg
                  ? ja(e, d, 0, x, 0, this)
                  : ((_ = parseFloat(d.split(" ")[2]) || 0),
                    _ !== S.zOrigin && Bi(this, S, "zOrigin", S.zOrigin, _),
                    Bi(this, o, p, Bn(u), Bn(d)));
              continue;
            } else if (p === "svgOrigin") {
              ja(e, d, 1, x, 0, this);
              continue;
            } else if (p in ou) {
              gh(this, S, p, g, w ? Wr(g, w + d) : d);
              continue;
            } else if (p === "smoothOrigin") {
              Bi(this, S, "smooth", S.smooth, d);
              continue;
            } else if (p === "force3D") {
              S[p] = d;
              continue;
            } else if (p === "transform") {
              vh(this, d, e);
              continue;
            }
          } else p in o || (p = as(p) || p);
          if (y || ((m || m === 0) && (g || g === 0) && !Qp.test(d) && p in o))
            (v = (u + "").substr((g + "").length)),
              m || (m = 0),
              (_ = lt(d) || (p in qt.units ? qt.units[p] : v)),
              v !== _ && (g = ji(e, p, u, _)),
              (this._pt = new Tt(
                this._pt,
                y ? S : o,
                p,
                g,
                (w ? Wr(g, w + m) : m) - g,
                !y && (_ === "px" || p === "zIndex") && t.autoRound !== !1
                  ? th
                  : Ya
              )),
              (this._pt.u = _ || 0),
              v !== _ && _ !== "%" && ((this._pt.b = u), (this._pt.r = eh));
          else if (p in o) dh.call(this, e, p, u, w ? w + d : d);
          else if (p in e) this.add(e, p, u || e[p], w ? w + d : d, r, n);
          else if (p !== "parseTransform") {
            So(p, d);
            continue;
          }
          y ||
            (p in o
              ? M.push(p, 0, o[p])
              : typeof e[p] == "function"
              ? M.push(p, 2, e[p]())
              : M.push(p, 1, u || e[p])),
            a.push(p);
        }
      }
    T && Qc(this);
  }, "init"),
  render: l(function (e, t) {
    if (t.tween._time || !Io())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    else t.styles.revert();
  }, "render"),
  get: xi,
  aliases: pi,
  getSetter: l(function (e, t, i) {
    var r = pi[t];
    return (
      r && r.indexOf(",") < 0 && (t = r),
      t in Oi && t !== Et && (e._gsap.x || xi(e, "x"))
        ? i && pl === i
          ? t === "scale"
            ? nh
            : sh
          : (pl = i || {}) && (t === "scale" ? ah : oh)
        : e.style && !wo(e.style[t])
        ? ih
        : ~t.indexOf("-")
        ? rh
        : Oo(e, t)
    );
  }, "getSetter"),
  core: { _removeProperty: Sr, _getMatrix: zo },
};
Ct.utils.checkPrefix = as;
Ct.core.getStyleSaver = ru;
(function (s, e, t, i) {
  var r = xt(s + "," + e + "," + t, function (n) {
    Oi[n] = 1;
  });
  xt(e, function (n) {
    (qt.units[n] = "deg"), (ou[n] = 1);
  }),
    (pi[r[13]] = s + "," + e),
    xt(i, function (n) {
      var a = n.split(":");
      pi[a[1]] = r[a[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
xt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (s) {
    qt.units[s] = "px";
  }
);
Ct.registerPlugin(uu);
var V = Ct.registerPlugin(uu) || Ct;
function yh(s, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(s, i.key, i);
  }
}
l(yh, "_defineProperties$1");
function wh(s, e, t) {
  return e && yh(s.prototype, e), s;
}
l(wh, "_createClass$1");
var ut,
  Tn,
  Rt,
  Vi,
  Wi,
  Xr,
  du,
  sr,
  Os,
  fu,
  Ci,
  si,
  pu,
  hu = l(function () {
    return (
      ut ||
      (typeof window < "u" && (ut = window.gsap) && ut.registerPlugin && ut)
    );
  }, "_getGSAP"),
  mu = 1,
  Vr = [],
  ne = [],
  vi = [],
  ks = Date.now,
  Ua = l(function (e, t) {
    return t;
  }, "_bridge"),
  _h = l(function () {
    var e = Os.core,
      t = e.bridge || {},
      i = e._scrollers,
      r = e._proxies;
    i.push.apply(i, ne),
      r.push.apply(r, vi),
      (ne = i),
      (vi = r),
      (Ua = l(function (a, o) {
        return t[a](o);
      }, "_bridge"));
  }, "_integrate"),
  Xi = l(function (e, t) {
    return ~vi.indexOf(e) && vi[vi.indexOf(e) + 1][t];
  }, "_getProxyProp"),
  Ls = l(function (e) {
    return !!~fu.indexOf(e);
  }, "_isViewport"),
  pt = l(function (e, t, i, r, n) {
    return e.addEventListener(t, i, { passive: r !== !1, capture: !!n });
  }, "_addListener"),
  ft = l(function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  }, "_removeListener"),
  an = "scrollLeft",
  on = "scrollTop",
  Ka = l(function () {
    return (Ci && Ci.isPressed) || ne.cache++;
  }, "_onScroll"),
  Vn = l(function (e, t) {
    var i = l(function r(n) {
      if (n || n === 0) {
        mu && (Rt.history.scrollRestoration = "manual");
        var a = Ci && Ci.isPressed;
        (n = r.v = Math.round(n) || (Ci && Ci.iOS ? 1 : 0)),
          e(n),
          (r.cacheID = ne.cache),
          a && Ua("ss", n);
      } else (t || ne.cache !== r.cacheID || Ua("ref")) && ((r.cacheID = ne.cache), (r.v = e()));
      return r.v + r.offset;
    }, "cachingFunc");
    return (i.offset = 0), e && i;
  }, "_scrollCacheFunc"),
  wt = {
    s: an,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Vn(function (s) {
      return arguments.length
        ? Rt.scrollTo(s, We.sc())
        : Rt.pageXOffset || Vi[an] || Wi[an] || Xr[an] || 0;
    }),
  },
  We = {
    s: on,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: wt,
    sc: Vn(function (s) {
      return arguments.length
        ? Rt.scrollTo(wt.sc(), s)
        : Rt.pageYOffset || Vi[on] || Wi[on] || Xr[on] || 0;
    }),
  },
  bt = l(function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || ut.utils.toArray)(e)[0] ||
      (typeof e == "string" && ut.config().nullTargetWarn !== !1
        ? void 0
        : null)
    );
  }, "_getTarget"),
  bh = l(function (e, t) {
    for (var i = t.length; i--; ) if (t[i] === e || t[i].contains(e)) return !0;
    return !1;
  }, "_isWithin"),
  Ui = l(function (e, t) {
    var i = t.s,
      r = t.sc;
    Ls(e) && (e = Vi.scrollingElement || Wi);
    var n = ne.indexOf(e),
      a = r === We.sc ? 1 : 2;
    !~n && (n = ne.push(e) - 1), ne[n + a] || pt(e, "scroll", Ka);
    var o = ne[n + a],
      c =
        o ||
        (ne[n + a] =
          Vn(Xi(e, i), !0) ||
          (Ls(e)
            ? r
            : Vn(function (u) {
                return arguments.length ? (e[i] = u) : e[i];
              })));
    return (
      (c.target = e),
      o || (c.smooth = ut.getProperty(e, "scrollBehavior") === "smooth"),
      c
    );
  }, "_getScrollFunc"),
  Za = l(function (e, t, i) {
    var r = e,
      n = e,
      a = ks(),
      o = a,
      c = t || 50,
      u = Math.max(500, c * 3),
      d = l(function (f, p) {
        var v = ks();
        p || v - a > c
          ? ((n = r), (r = f), (o = a), (a = v))
          : i
          ? (r += f)
          : (r = n + ((f - n) / (v - o)) * (a - o));
      }, "update"),
      m = l(function () {
        (n = r = i ? 0 : r), (o = a = 0);
      }, "reset"),
      g = l(function (f) {
        var p = o,
          v = n,
          _ = ks();
        return (
          (f || f === 0) && f !== r && d(f),
          a === o || _ - o > u
            ? 0
            : ((r + (i ? v : -v)) / ((i ? _ : a) - p)) * 1e3
        );
      }, "getVelocity");
    return { update: d, reset: m, getVelocity: g };
  }, "_getVelocityProp"),
  hs = l(function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }, "_getEvent"),
  Sl = l(function (e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  }, "_getAbsoluteMax"),
  gu = l(function () {
    (Os = ut.core.globals().ScrollTrigger), Os && Os.core && _h();
  }, "_setScrollTrigger"),
  vu = l(function (e) {
    return (
      (ut = e || hu()),
      !Tn &&
        ut &&
        typeof document < "u" &&
        document.body &&
        ((Rt = window),
        (Vi = document),
        (Wi = Vi.documentElement),
        (Xr = Vi.body),
        (fu = [Rt, Vi, Wi, Xr]),
        (pu = ut.core.context || function () {}),
        (sr = "onpointerenter" in Xr ? "pointer" : "mouse"),
        (du = De.isTouch =
          Rt.matchMedia &&
          Rt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Rt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (si = De.eventTypes =
          (
            "ontouchstart" in Wi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Wi
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (mu = 0);
        }, 500),
        gu(),
        (Tn = 1)),
      Tn
    );
  }, "_initCore");
wt.op = We;
ne.cache = 0;
var De = (function () {
  function s(t) {
    this.init(t);
  }
  l(s, "Observer");
  var e = s.prototype;
  return (
    (e.init = l(function (i) {
      Tn || vu(ut), Os || gu();
      var r = i.tolerance,
        n = i.dragMinimum,
        a = i.type,
        o = i.target,
        c = i.lineHeight,
        u = i.debounce,
        d = i.preventDefault,
        m = i.onStop,
        g = i.onStopDelay,
        h = i.ignore,
        f = i.wheelSpeed,
        p = i.event,
        v = i.onDragStart,
        _ = i.onDragEnd,
        w = i.onDrag,
        y = i.onPress,
        b = i.onRelease,
        S = i.onRight,
        x = i.onLeft,
        T = i.onUp,
        M = i.onDown,
        E = i.onChangeX,
        C = i.onChangeY,
        I = i.onChange,
        A = i.onToggleX,
        k = i.onToggleY,
        D = i.onHover,
        R = i.onHoverEnd,
        z = i.onMove,
        O = i.ignoreCheck,
        L = i.isNormalizer,
        N = i.onGestureStart,
        P = i.onGestureEnd,
        Y = i.onWheel,
        Z = i.onEnable,
        fe = i.onDisable,
        ue = i.onClick,
        F = i.scrollSpeed,
        q = i.capture,
        B = i.allowClicks,
        U = i.lockAxis,
        ce = i.onLockAxis;
      (this.target = o = bt(o) || Wi),
        (this.vars = i),
        h && (h = ut.utils.toArray(h)),
        (r = r || 1e-9),
        (n = n || 0),
        (f = f || 1),
        (F = F || 1),
        (a = a || "wheel,touch,pointer"),
        (u = u !== !1),
        c || (c = parseFloat(Rt.getComputedStyle(Xr).lineHeight) || 22);
      var Ke,
        be,
        Se,
        ee,
        re,
        we,
        Fe,
        $ = this,
        ze = 0,
        it = 0,
        Mt = i.passive || (!d && i.passive !== !1),
        me = Ui(o, wt),
        Pt = Ui(o, We),
        Vt = me(),
        Jt = Pt(),
        Ae =
          ~a.indexOf("touch") &&
          !~a.indexOf("pointer") &&
          si[0] === "pointerdown",
        Wt = Ls(o),
        he = o.ownerDocument || Vi,
        _t = [0, 0, 0],
        He = [0, 0, 0],
        wi = 0,
        cs = l(function () {
          return (wi = ks());
        }, "clickCapture"),
        Re = l(function (K, de) {
          return (
            (($.event = K) && h && bh(K.target, h)) ||
            (de && Ae && K.pointerType !== "touch") ||
            (O && O(K, de))
          );
        }, "_ignoreCheck"),
        tn = l(function () {
          $._vx.reset(), $._vy.reset(), be.pause(), m && m($);
        }, "onStopFunc"),
        _i = l(function () {
          var K = ($.deltaX = Sl(_t)),
            de = ($.deltaY = Sl(He)),
            W = Math.abs(K) >= r,
            Q = Math.abs(de) >= r;
          I && (W || Q) && I($, K, de, _t, He),
            W &&
              (S && $.deltaX > 0 && S($),
              x && $.deltaX < 0 && x($),
              E && E($),
              A && $.deltaX < 0 != ze < 0 && A($),
              (ze = $.deltaX),
              (_t[0] = _t[1] = _t[2] = 0)),
            Q &&
              (M && $.deltaY > 0 && M($),
              T && $.deltaY < 0 && T($),
              C && C($),
              k && $.deltaY < 0 != it < 0 && k($),
              (it = $.deltaY),
              (He[0] = He[1] = He[2] = 0)),
            (ee || Se) &&
              (z && z($),
              Se && (v && Se === 1 && v($), w && w($), (Se = 0)),
              (ee = !1)),
            we && !(we = !1) && ce && ce($),
            re && (Y($), (re = !1)),
            (Ke = 0);
        }, "update"),
        Ar = l(function (K, de, W) {
          (_t[W] += K),
            (He[W] += de),
            $._vx.update(K),
            $._vy.update(de),
            u ? Ke || (Ke = requestAnimationFrame(_i)) : _i();
        }, "onDelta"),
        Or = l(function (K, de) {
          U &&
            !Fe &&
            (($.axis = Fe = Math.abs(K) > Math.abs(de) ? "x" : "y"), (we = !0)),
            Fe !== "y" && ((_t[2] += K), $._vx.update(K, !0)),
            Fe !== "x" && ((He[2] += de), $._vy.update(de, !0)),
            u ? Ke || (Ke = requestAnimationFrame(_i)) : _i();
        }, "onTouchOrPointerDelta"),
        Li = l(function (K) {
          if (!Re(K, 1)) {
            K = hs(K, d);
            var de = K.clientX,
              W = K.clientY,
              Q = de - $.x,
              j = W - $.y,
              J = $.isDragging;
            ($.x = de),
              ($.y = W),
              (J ||
                ((Q || j) &&
                  (Math.abs($.startX - de) >= n ||
                    Math.abs($.startY - W) >= n))) &&
                ((Se = J ? 2 : 1), J || ($.isDragging = !0), Or(Q, j));
          }
        }, "_onDrag"),
        Zi = ($.onPress = function (te) {
          Re(te, 1) ||
            (te && te.button) ||
            (($.axis = Fe = null),
            be.pause(),
            ($.isPressed = !0),
            (te = hs(te)),
            (ze = it = 0),
            ($.startX = $.x = te.clientX),
            ($.startY = $.y = te.clientY),
            $._vx.reset(),
            $._vy.reset(),
            pt(L ? o : he, si[1], Li, Mt, !0),
            ($.deltaX = $.deltaY = 0),
            y && y($));
        }),
        ae = ($.onRelease = function (te) {
          if (!Re(te, 1)) {
            ft(L ? o : he, si[1], Li, !0);
            var K = !isNaN($.y - $.startY),
              de = $.isDragging,
              W =
                de &&
                (Math.abs($.x - $.startX) > 3 || Math.abs($.y - $.startY) > 3),
              Q = hs(te);
            !W &&
              K &&
              ($._vx.reset(),
              $._vy.reset(),
              d &&
                B &&
                ut.delayedCall(0.08, function () {
                  if (ks() - wi > 300 && !te.defaultPrevented) {
                    if (te.target.click) te.target.click();
                    else if (he.createEvent) {
                      var j = he.createEvent("MouseEvents");
                      j.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Rt,
                        1,
                        Q.screenX,
                        Q.screenY,
                        Q.clientX,
                        Q.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        te.target.dispatchEvent(j);
                    }
                  }
                })),
              ($.isDragging = $.isGesturing = $.isPressed = !1),
              m && de && !L && be.restart(!0),
              Se && _i(),
              _ && de && _($),
              b && b($, W);
          }
        }),
        Qi = l(function (K) {
          return (
            K.touches &&
            K.touches.length > 1 &&
            ($.isGesturing = !0) &&
            N(K, $.isDragging)
          );
        }, "_onGestureStart"),
        ei = l(function () {
          return ($.isGesturing = !1) || P($);
        }, "_onGestureEnd"),
        ti = l(function (K) {
          if (!Re(K)) {
            var de = me(),
              W = Pt();
            Ar((de - Vt) * F, (W - Jt) * F, 1),
              (Vt = de),
              (Jt = W),
              m && be.restart(!0);
          }
        }, "onScroll"),
        ii = l(function (K) {
          if (!Re(K)) {
            (K = hs(K, d)), Y && (re = !0);
            var de =
              (K.deltaMode === 1 ? c : K.deltaMode === 2 ? Rt.innerHeight : 1) *
              f;
            Ar(K.deltaX * de, K.deltaY * de, 0), m && !L && be.restart(!0);
          }
        }, "_onWheel"),
        Ji = l(function (K) {
          if (!Re(K)) {
            var de = K.clientX,
              W = K.clientY,
              Q = de - $.x,
              j = W - $.y;
            ($.x = de),
              ($.y = W),
              (ee = !0),
              m && be.restart(!0),
              (Q || j) && Or(Q, j);
          }
        }, "_onMove"),
        kr = l(function (K) {
          ($.event = K), D($);
        }, "_onHover"),
        bi = l(function (K) {
          ($.event = K), R($);
        }, "_onHoverEnd"),
        us = l(function (K) {
          return Re(K) || (hs(K, d) && ue($));
        }, "_onClick");
      (be = $._dc = ut.delayedCall(g || 0.25, tn).pause()),
        ($.deltaX = $.deltaY = 0),
        ($._vx = Za(0, 50, !0)),
        ($._vy = Za(0, 50, !0)),
        ($.scrollX = me),
        ($.scrollY = Pt),
        ($.isDragging = $.isGesturing = $.isPressed = !1),
        pu(this),
        ($.enable = function (te) {
          return (
            $.isEnabled ||
              (pt(Wt ? he : o, "scroll", Ka),
              a.indexOf("scroll") >= 0 && pt(Wt ? he : o, "scroll", ti, Mt, q),
              a.indexOf("wheel") >= 0 && pt(o, "wheel", ii, Mt, q),
              ((a.indexOf("touch") >= 0 && du) || a.indexOf("pointer") >= 0) &&
                (pt(o, si[0], Zi, Mt, q),
                pt(he, si[2], ae),
                pt(he, si[3], ae),
                B && pt(o, "click", cs, !0, !0),
                ue && pt(o, "click", us),
                N && pt(he, "gesturestart", Qi),
                P && pt(he, "gestureend", ei),
                D && pt(o, sr + "enter", kr),
                R && pt(o, sr + "leave", bi),
                z && pt(o, sr + "move", Ji)),
              ($.isEnabled = !0),
              ($.isDragging = $.isGesturing = $.isPressed = ee = Se = !1),
              $._vx.reset(),
              $._vy.reset(),
              (Vt = me()),
              (Jt = Pt()),
              te && te.type && Zi(te),
              Z && Z($)),
            $
          );
        }),
        ($.disable = function () {
          $.isEnabled &&
            (Vr.filter(function (te) {
              return te !== $ && Ls(te.target);
            }).length || ft(Wt ? he : o, "scroll", Ka),
            $.isPressed &&
              ($._vx.reset(), $._vy.reset(), ft(L ? o : he, si[1], Li, !0)),
            ft(Wt ? he : o, "scroll", ti, q),
            ft(o, "wheel", ii, q),
            ft(o, si[0], Zi, q),
            ft(he, si[2], ae),
            ft(he, si[3], ae),
            ft(o, "click", cs, !0),
            ft(o, "click", us),
            ft(he, "gesturestart", Qi),
            ft(he, "gestureend", ei),
            ft(o, sr + "enter", kr),
            ft(o, sr + "leave", bi),
            ft(o, sr + "move", Ji),
            ($.isEnabled = $.isPressed = $.isDragging = !1),
            fe && fe($));
        }),
        ($.kill = $.revert =
          function () {
            $.disable();
            var te = Vr.indexOf($);
            te >= 0 && Vr.splice(te, 1), Ci === $ && (Ci = 0);
          }),
        Vr.push($),
        L && Ls(o) && (Ci = $),
        $.enable(p);
    }, "init")),
    wh(s, [
      {
        key: "velocityX",
        get: l(function () {
          return this._vx.getVelocity();
        }, "get"),
      },
      {
        key: "velocityY",
        get: l(function () {
          return this._vy.getVelocity();
        }, "get"),
      },
    ]),
    s
  );
})();
De.version = "3.13.0";
De.create = function (s) {
  return new De(s);
};
De.register = vu;
De.getAll = function () {
  return Vr.slice();
};
De.getById = function (s) {
  return Vr.filter(function (e) {
    return e.vars.id === s;
  })[0];
};
hu() && ut.registerPlugin(De);
var H,
  Nr,
  se,
  _e,
  Dt,
  pe,
  Ro,
  Wn,
  Gs,
  Is,
  bs,
  ln,
  at,
  ta,
  Qa,
  mt,
  xl,
  Tl,
  qr,
  yu,
  _a,
  wu,
  ht,
  Ja,
  _u,
  bu,
  Ri,
  eo,
  $o,
  Gr,
  No,
  Hn,
  to,
  ba,
  cn = 1,
  ot = Date.now,
  Sa = ot(),
  Zt = 0,
  Ss = 0,
  El = l(function (e, t, i) {
    var r = kt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  }, "_parseClamp"),
  Cl = l(function (e, t) {
    return t && (!kt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  }, "_keepClamp"),
  Sh = l(function s() {
    return Ss && requestAnimationFrame(s);
  }, "_rafBugFix"),
  Ml = l(function () {
    return (ta = 1);
  }, "_pointerDownHandler"),
  Pl = l(function () {
    return (ta = 0);
  }, "_pointerUpHandler"),
  di = l(function (e) {
    return e;
  }, "_passThrough"),
  xs = l(function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, "_round"),
  Su = l(function () {
    return typeof window < "u";
  }, "_windowExists"),
  xu = l(function () {
    return H || (Su() && (H = window.gsap) && H.registerPlugin && H);
  }, "_getGSAP"),
  xr = l(function (e) {
    return !!~Ro.indexOf(e);
  }, "_isViewport"),
  Tu = l(function (e) {
    return (
      (e === "Height" ? No : se["inner" + e]) ||
      Dt["client" + e] ||
      pe["client" + e]
    );
  }, "_getViewportDimension"),
  Eu = l(function (e) {
    return (
      Xi(e, "getBoundingClientRect") ||
      (xr(e)
        ? function () {
            return (An.width = se.innerWidth), (An.height = No), An;
          }
        : function () {
            return Ei(e);
          })
    );
  }, "_getBoundsFunc"),
  xh = l(function (e, t, i) {
    var r = i.d,
      n = i.d2,
      a = i.a;
    return (a = Xi(e, "getBoundingClientRect"))
      ? function () {
          return a()[r];
        }
      : function () {
          return (t ? Tu(n) : e["client" + n]) || 0;
        };
  }, "_getSizeFunc"),
  Th = l(function (e, t) {
    return !t || ~vi.indexOf(e)
      ? Eu(e)
      : function () {
          return An;
        };
  }, "_getOffsetsFunc"),
  hi = l(function (e, t) {
    var i = t.s,
      r = t.d2,
      n = t.d,
      a = t.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (a = Xi(e, i))
        ? a() - Eu(e)()[n]
        : xr(e)
        ? (Dt[i] || pe[i]) - Tu(r)
        : e[i] - e["offset" + r]
    );
  }, "_maxScroll"),
  un = l(function (e, t) {
    for (var i = 0; i < qr.length; i += 3)
      (!t || ~t.indexOf(qr[i + 1])) && e(qr[i], qr[i + 1], qr[i + 2]);
  }, "_iterateAutoRefresh"),
  kt = l(function (e) {
    return typeof e == "string";
  }, "_isString"),
  ct = l(function (e) {
    return typeof e == "function";
  }, "_isFunction"),
  Ts = l(function (e) {
    return typeof e == "number";
  }, "_isNumber"),
  nr = l(function (e) {
    return typeof e == "object";
  }, "_isObject"),
  ms = l(function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  }, "_endAnimation"),
  xa = l(function (e, t) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  }, "_callback"),
  Ir = Math.abs,
  Cu = "left",
  Mu = "top",
  qo = "right",
  Fo = "bottom",
  gr = "width",
  vr = "height",
  Ds = "Right",
  zs = "Left",
  Rs = "Top",
  $s = "Bottom",
  $e = "padding",
  Yt = "margin",
  os = "Width",
  Bo = "Height",
  Ve = "px",
  Xt = l(function (e) {
    return se.getComputedStyle(e);
  }, "_getComputedStyle"),
  Eh = l(function (e) {
    var t = Xt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  }, "_makePositionable"),
  Al = l(function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  }, "_setDefaults"),
  Ei = l(function (e, t) {
    var i =
        t &&
        Xt(e)[Qa] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        H.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      r = e.getBoundingClientRect();
    return i && i.progress(0).kill(), r;
  }, "_getBounds"),
  Yn = l(function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  }, "_getSize"),
  Pu = l(function (e) {
    var t = [],
      i = e.labels,
      r = e.duration(),
      n;
    for (n in i) t.push(i[n] / r);
    return t;
  }, "_getLabelRatioArray"),
  Ch = l(function (e) {
    return function (t) {
      return H.utils.snap(Pu(e), t);
    };
  }, "_getClosestLabel"),
  Vo = l(function (e) {
    var t = H.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, n) {
          return r - n;
        });
    return i
      ? function (r, n, a) {
          a === void 0 && (a = 0.001);
          var o;
          if (!n) return t(r);
          if (n > 0) {
            for (r -= a, o = 0; o < i.length; o++) if (i[o] >= r) return i[o];
            return i[o - 1];
          } else for (o = i.length, r += a; o--; ) if (i[o] <= r) return i[o];
          return i[0];
        }
      : function (r, n, a) {
          a === void 0 && (a = 0.001);
          var o = t(r);
          return !n || Math.abs(o - r) < a || o - r < 0 == n < 0
            ? o
            : t(n < 0 ? r - e : r + e);
        };
  }, "_snapDirectional"),
  Mh = l(function (e) {
    return function (t, i) {
      return Vo(Pu(e))(t, i.direction);
    };
  }, "_getLabelAtDirection"),
  dn = l(function (e, t, i, r) {
    return i.split(",").forEach(function (n) {
      return e(t, n, r);
    });
  }, "_multiListener"),
  Ge = l(function (e, t, i, r, n) {
    return e.addEventListener(t, i, { passive: !r, capture: !!n });
  }, "_addListener"),
  Xe = l(function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  }, "_removeListener"),
  fn = l(function (e, t, i) {
    (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
  }, "_wheelListener"),
  Ol = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  pn = { toggleActions: "play", anticipatePin: 0 },
  Xn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  En = l(function (e, t) {
    if (kt(e)) {
      var i = e.indexOf("="),
        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          r +
          (e in Xn
            ? Xn[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }, "_offsetToPx"),
  hn = l(function (e, t, i, r, n, a, o, c) {
    var u = n.startColor,
      d = n.endColor,
      m = n.fontSize,
      g = n.indent,
      h = n.fontWeight,
      f = _e.createElement("div"),
      p = xr(i) || Xi(i, "pinType") === "fixed",
      v = e.indexOf("scroller") !== -1,
      _ = p ? pe : i,
      w = e.indexOf("start") !== -1,
      y = w ? u : d,
      b =
        "border-color:" +
        y +
        ";font-size:" +
        m +
        ";color:" +
        y +
        ";font-weight:" +
        h +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (b += "position:" + ((v || c) && p ? "fixed;" : "absolute;")),
      (v || c || !p) &&
        (b += (r === We ? qo : Fo) + ":" + (a + parseFloat(g)) + "px;"),
      o &&
        (b +=
          "box-sizing:border-box;text-align:left;width:" +
          o.offsetWidth +
          "px;"),
      (f._isStart = w),
      f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (f.style.cssText = b),
      (f.innerText = t || t === 0 ? e + "-" + t : e),
      _.children[0] ? _.insertBefore(f, _.children[0]) : _.appendChild(f),
      (f._offset = f["offset" + r.op.d2]),
      Cn(f, 0, r, w),
      f
    );
  }, "_createMarker"),
  Cn = l(function (e, t, i, r) {
    var n = { display: "block" },
      a = i[r ? "os2" : "p2"],
      o = i[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (n[i.a + "Percent"] = r ? -100 : 0),
      (n[i.a] = r ? "1px" : 0),
      (n["border" + a + os] = 1),
      (n["border" + o + os] = 0),
      (n[i.p] = t + "px"),
      H.set(e, n);
  }, "_positionMarker"),
  ie = [],
  io = {},
  js,
  kl = l(function () {
    return ot() - Zt > 34 && (js || (js = requestAnimationFrame(Pi)));
  }, "_sync"),
  Dr = l(function () {
    (!ht || !ht.isPressed || ht.startX > pe.clientWidth) &&
      (ne.cache++,
      ht ? js || (js = requestAnimationFrame(Pi)) : Pi(),
      Zt || Er("scrollStart"),
      (Zt = ot()));
  }, "_onScroll"),
  Ta = l(function () {
    (bu = se.innerWidth), (_u = se.innerHeight);
  }, "_setBaseDimensions"),
  Es = l(function (e) {
    ne.cache++,
      (e === !0 ||
        (!at &&
          !wu &&
          !_e.fullscreenElement &&
          !_e.webkitFullscreenElement &&
          (!Ja ||
            bu !== se.innerWidth ||
            Math.abs(se.innerHeight - _u) > se.innerHeight * 0.25))) &&
        Wn.restart(!0);
  }, "_onResize"),
  Tr = {},
  Ph = [],
  Au = l(function s() {
    return Xe(X, "scrollEnd", s) || lr(!0);
  }, "_softRefresh"),
  Er = l(function (e) {
    return (
      (Tr[e] &&
        Tr[e].map(function (t) {
          return t();
        })) ||
      Ph
    );
  }, "_dispatch"),
  Ot = [],
  Ou = l(function (e) {
    for (var t = 0; t < Ot.length; t += 5)
      (!e || (Ot[t + 4] && Ot[t + 4].query === e)) &&
        ((Ot[t].style.cssText = Ot[t + 1]),
        Ot[t].getBBox && Ot[t].setAttribute("transform", Ot[t + 2] || ""),
        (Ot[t + 3].uncache = 1));
  }, "_revertRecorded"),
  Wo = l(function (e, t) {
    var i;
    for (mt = 0; mt < ie.length; mt++)
      (i = ie[mt]),
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    (Hn = !0), t && Ou(t), t || Er("revert");
  }, "_revertAll"),
  ku = l(function (e, t) {
    ne.cache++,
      (t || !gt) &&
        ne.forEach(function (i) {
          return ct(i) && i.cacheID++ && (i.rec = 0);
        }),
      kt(e) && (se.history.scrollRestoration = $o = e);
  }, "_clearScrollMemory"),
  gt,
  yr = 0,
  Ll,
  Ah = l(function () {
    if (Ll !== yr) {
      var e = (Ll = yr);
      requestAnimationFrame(function () {
        return e === yr && lr(!0);
      });
    }
  }, "_queueRefreshAll"),
  Lu = l(function () {
    pe.appendChild(Gr),
      (No = (!ht && Gr.offsetHeight) || se.innerHeight),
      pe.removeChild(Gr);
  }, "_refresh100vh"),
  Il = l(function (e) {
    return Gs(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  }, "_hideAllMarkers"),
  lr = l(function (e, t) {
    if (
      ((Dt = _e.documentElement),
      (pe = _e.body),
      (Ro = [se, _e, Dt, pe]),
      Zt && !e && !Hn)
    ) {
      Ge(X, "scrollEnd", Au);
      return;
    }
    Lu(),
      (gt = X.isRefreshing = !0),
      ne.forEach(function (r) {
        return ct(r) && ++r.cacheID && (r.rec = r());
      });
    var i = Er("refreshInit");
    yu && X.sort(),
      t || Wo(),
      ne.forEach(function (r) {
        ct(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      ie.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (Hn = !1),
      ie.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            a = r.pin[n];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - a), r.refresh();
        }
      }),
      (to = 1),
      Il(!0),
      ie.forEach(function (r) {
        var n = hi(r.scroller, r._dir),
          a = r.vars.end === "max" || (r._endClamp && r.end > n),
          o = r._startClamp && r.start >= n;
        (a || o) &&
          r.setPositions(
            o ? n - 1 : r.start,
            a ? Math.max(o ? n : r.start + 1, n) : r.end,
            !0
          );
      }),
      Il(!1),
      (to = 0),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      ne.forEach(function (r) {
        ct(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      ku($o, 1),
      Wn.pause(),
      yr++,
      (gt = 2),
      Pi(2),
      ie.forEach(function (r) {
        return ct(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (gt = X.isRefreshing = !1),
      Er("refresh");
  }, "_refreshAll"),
  ro = 0,
  Mn = 1,
  Ns,
  Pi = l(function (e) {
    if (e === 2 || (!gt && !Hn)) {
      (X.isUpdating = !0), Ns && Ns.update(0);
      var t = ie.length,
        i = ot(),
        r = i - Sa >= 50,
        n = t && ie[0].scroll();
      if (
        ((Mn = ro > n ? -1 : 1),
        gt || (ro = n),
        r &&
          (Zt && !ta && i - Zt > 200 && ((Zt = 0), Er("scrollEnd")),
          (bs = Sa),
          (Sa = i)),
        Mn < 0)
      ) {
        for (mt = t; mt-- > 0; ) ie[mt] && ie[mt].update(0, r);
        Mn = 1;
      } else for (mt = 0; mt < t; mt++) ie[mt] && ie[mt].update(0, r);
      X.isUpdating = !1;
    }
    js = 0;
  }, "_updateAll"),
  so = [
    Cu,
    Mu,
    Fo,
    qo,
    Yt + $s,
    Yt + Ds,
    Yt + Rs,
    Yt + zs,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Pn = so.concat([
    gr,
    vr,
    "boxSizing",
    "max" + os,
    "max" + Bo,
    "position",
    Yt,
    $e,
    $e + Rs,
    $e + Ds,
    $e + $s,
    $e + zs,
  ]),
  Oh = l(function (e, t, i) {
    jr(i);
    var r = e._gsap;
    if (r.spacerIsNative) jr(r.spacerState);
    else if (e._gsap.swappedIn) {
      var n = t.parentNode;
      n && (n.insertBefore(e, t), n.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  }, "_swapPinOut"),
  Ea = l(function (e, t, i, r) {
    if (!e._gsap.swappedIn) {
      for (var n = so.length, a = t.style, o = e.style, c; n--; )
        (c = so[n]), (a[c] = i[c]);
      (a.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (a.display = "inline-block"),
        (o[Fo] = o[qo] = "auto"),
        (a.flexBasis = i.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[gr] = Yn(e, wt) + Ve),
        (a[vr] = Yn(e, We) + Ve),
        (a[$e] = o[Yt] = o[Mu] = o[Cu] = "0"),
        jr(r),
        (o[gr] = o["max" + os] = i[gr]),
        (o[vr] = o["max" + Bo] = i[vr]),
        (o[$e] = i[$e]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }, "_swapPinIn"),
  kh = /([A-Z])/g,
  jr = l(function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        r = 0,
        n,
        a;
      for ((e.t._gsap || H.core.getCache(e.t)).uncache = 1; r < i; r += 2)
        (a = e[r + 1]),
          (n = e[r]),
          a
            ? (t[n] = a)
            : t[n] && t.removeProperty(n.replace(kh, "-$1").toLowerCase());
    }
  }, "_setState"),
  mn = l(function (e) {
    for (var t = Pn.length, i = e.style, r = [], n = 0; n < t; n++)
      r.push(Pn[n], i[Pn[n]]);
    return (r.t = e), r;
  }, "_getState"),
  Lh = l(function (e, t, i) {
    for (var r = [], n = e.length, a = i ? 8 : 0, o; a < n; a += 2)
      (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
    return (r.t = e.t), r;
  }, "_copyState"),
  An = { left: 0, top: 0 },
  Dl = l(function (e, t, i, r, n, a, o, c, u, d, m, g, h, f) {
    ct(e) && (e = e(c)),
      kt(e) &&
        e.substr(0, 3) === "max" &&
        (e = g + (e.charAt(4) === "=" ? En("0" + e.substr(3), i) : 0));
    var p = h ? h.time() : 0,
      v,
      _,
      w;
    if ((h && h.seek(0), isNaN(e) || (e = +e), Ts(e)))
      h &&
        (e = H.utils.mapRange(
          h.scrollTrigger.start,
          h.scrollTrigger.end,
          0,
          g,
          e
        )),
        o && Cn(o, i, r, !0);
    else {
      ct(t) && (t = t(c));
      var y = (e || "0").split(" "),
        b,
        S,
        x,
        T;
      (w = bt(t, c) || pe),
        (b = Ei(w) || {}),
        (!b || (!b.left && !b.top)) &&
          Xt(w).display === "none" &&
          ((T = w.style.display),
          (w.style.display = "block"),
          (b = Ei(w)),
          T ? (w.style.display = T) : w.style.removeProperty("display")),
        (S = En(y[0], b[r.d])),
        (x = En(y[1] || "0", i)),
        (e = b[r.p] - u[r.p] - d + S + n - x),
        o && Cn(o, x, r, i - x < 20 || (o._isStart && x > 20)),
        (i -= i - x);
    }
    if ((f && ((c[f] = e || -0.001), e < 0 && (e = 0)), a)) {
      var M = e + i,
        E = a._isStart;
      (v = "scroll" + r.d2),
        Cn(
          a,
          M,
          r,
          (E && M > 20) ||
            (!E && (m ? Math.max(pe[v], Dt[v]) : a.parentNode[v]) <= M + 1)
        ),
        m &&
          ((u = Ei(o)),
          m && (a.style[r.op.p] = u[r.op.p] - r.op.m - a._offset + Ve));
    }
    return (
      h &&
        w &&
        ((v = Ei(w)),
        h.seek(g),
        (_ = Ei(w)),
        (h._caScrollDist = v[r.p] - _[r.p]),
        (e = (e / h._caScrollDist) * g)),
      h && h.seek(p),
      h ? e : Math.round(e)
    );
  }, "_parsePosition"),
  Ih = /(webkit|moz|length|cssText|inset)/i,
  zl = l(function (e, t, i, r) {
    if (e.parentNode !== t) {
      var n = e.style,
        a,
        o;
      if (t === pe) {
        (e._stOrig = n.cssText), (o = Xt(e));
        for (a in o)
          !+a &&
            !Ih.test(a) &&
            o[a] &&
            typeof n[a] == "string" &&
            a !== "0" &&
            (n[a] = o[a]);
        (n.top = i), (n.left = r);
      } else n.cssText = e._stOrig;
      (H.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }, "_reparent"),
  Iu = l(function (e, t, i) {
    var r = t,
      n = r;
    return function (a) {
      var o = Math.round(e());
      return (
        o !== r &&
          o !== n &&
          Math.abs(o - r) > 3 &&
          Math.abs(o - n) > 3 &&
          ((a = o), i && i()),
        (n = r),
        (r = Math.round(a)),
        r
      );
    };
  }, "_interruptionTracker"),
  gn = l(function (e, t, i) {
    var r = {};
    (r[t.p] = "+=" + i), H.set(e, r);
  }, "_shiftMarker"),
  Rl = l(function (e, t) {
    var i = Ui(e, t),
      r = "_scroll" + t.p2,
      n = l(function a(o, c, u, d, m) {
        var g = a.tween,
          h = c.onComplete,
          f = {};
        u = u || i();
        var p = Iu(i, u, function () {
          g.kill(), (a.tween = 0);
        });
        return (
          (m = (d && m) || 0),
          (d = d || o - u),
          g && g.kill(),
          (c[r] = o),
          (c.inherit = !1),
          (c.modifiers = f),
          (f[r] = function () {
            return p(u + d * g.ratio + m * g.ratio * g.ratio);
          }),
          (c.onUpdate = function () {
            ne.cache++, a.tween && Pi();
          }),
          (c.onComplete = function () {
            (a.tween = 0), h && h.call(g);
          }),
          (g = a.tween = H.to(e, c)),
          g
        );
      }, "getTween");
    return (
      (e[r] = i),
      (i.wheelHandler = function () {
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      Ge(e, "wheel", i.wheelHandler),
      X.isTouch && Ge(e, "touchmove", i.wheelHandler),
      n
    );
  }, "_getTweenCreator"),
  X = (function () {
    function s(t, i) {
      Nr || s.register(H), eo(this), this.init(t, i);
    }
    l(s, "ScrollTrigger");
    var e = s.prototype;
    return (
      (e.init = l(function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Ss)
        ) {
          this.update = this.refresh = this.kill = di;
          return;
        }
        i = Al(kt(i) || Ts(i) || i.nodeType ? { trigger: i } : i, pn);
        var n = i,
          a = n.onUpdate,
          o = n.toggleClass,
          c = n.id,
          u = n.onToggle,
          d = n.onRefresh,
          m = n.scrub,
          g = n.trigger,
          h = n.pin,
          f = n.pinSpacing,
          p = n.invalidateOnRefresh,
          v = n.anticipatePin,
          _ = n.onScrubComplete,
          w = n.onSnapComplete,
          y = n.once,
          b = n.snap,
          S = n.pinReparent,
          x = n.pinSpacer,
          T = n.containerAnimation,
          M = n.fastScrollEnd,
          E = n.preventOverlaps,
          C =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? wt
              : We,
          I = !m && m !== 0,
          A = bt(i.scroller || se),
          k = H.core.getCache(A),
          D = xr(A),
          R =
            ("pinType" in i
              ? i.pinType
              : Xi(A, "pinType") || (D && "fixed")) === "fixed",
          z = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          O = I && i.toggleActions.split(" "),
          L = "markers" in i ? i.markers : pn.markers,
          N = D ? 0 : parseFloat(Xt(A)["border" + C.p2 + os]) || 0,
          P = this,
          Y =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(P);
            },
          Z = xh(A, D, C),
          fe = Th(A, D),
          ue = 0,
          F = 0,
          q = 0,
          B = Ui(A, C),
          U,
          ce,
          Ke,
          be,
          Se,
          ee,
          re,
          we,
          Fe,
          $,
          ze,
          it,
          Mt,
          me,
          Pt,
          Vt,
          Jt,
          Ae,
          Wt,
          he,
          _t,
          He,
          wi,
          cs,
          Re,
          tn,
          _i,
          Ar,
          Or,
          Li,
          Zi,
          ae,
          Qi,
          ei,
          ti,
          ii,
          Ji,
          kr,
          bi;
        if (
          ((P._startClamp = P._endClamp = !1),
          (P._dir = C),
          (v *= 45),
          (P.scroller = A),
          (P.scroll = T ? T.time.bind(T) : B),
          (be = B()),
          (P.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            ((yu = 1), i.refreshPriority === -9999 && (Ns = P)),
          (k.tweenScroll = k.tweenScroll || {
            top: Rl(A, We),
            left: Rl(A, wt),
          }),
          (P.tweenTo = U = k.tweenScroll[C.p]),
          (P.scrubDuration = function (W) {
            (Qi = Ts(W) && W),
              Qi
                ? ae
                  ? ae.duration(W)
                  : (ae = H.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Qi,
                      paused: !0,
                      onComplete: l(function () {
                        return _ && _(P);
                      }, "onComplete"),
                    }))
                : (ae && ae.progress(1).kill(), (ae = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !P.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (P.animation = r.pause()),
            (r.scrollTrigger = P),
            P.scrubDuration(m),
            (Li = 0),
            c || (c = r.vars.id)),
          b &&
            ((!nr(b) || b.push) && (b = { snapTo: b }),
            "scrollBehavior" in pe.style &&
              H.set(D ? [pe, Dt] : A, { scrollBehavior: "auto" }),
            ne.forEach(function (W) {
              return (
                ct(W) &&
                W.target === (D ? _e.scrollingElement || Dt : A) &&
                (W.smooth = !1)
              );
            }),
            (Ke = ct(b.snapTo)
              ? b.snapTo
              : b.snapTo === "labels"
              ? Ch(r)
              : b.snapTo === "labelsDirectional"
              ? Mh(r)
              : b.directional !== !1
              ? function (W, Q) {
                  return Vo(b.snapTo)(W, ot() - F < 500 ? 0 : Q.direction);
                }
              : H.utils.snap(b.snapTo)),
            (ei = b.duration || { min: 0.1, max: 2 }),
            (ei = nr(ei) ? Is(ei.min, ei.max) : Is(ei, ei)),
            (ti = H.delayedCall(b.delay || Qi / 2 || 0.1, function () {
              var W = B(),
                Q = ot() - F < 500,
                j = U.tween;
              if (
                (Q || Math.abs(P.getVelocity()) < 10) &&
                !j &&
                !ta &&
                ue !== W
              ) {
                var J = (W - ee) / me,
                  Ye = r && !I ? r.totalProgress() : J,
                  le = Q ? 0 : ((Ye - Zi) / (ot() - bs)) * 1e3 || 0,
                  Le = H.utils.clamp(-J, 1 - J, (Ir(le / 2) * le) / 0.185),
                  rt = J + (b.inertia === !1 ? 0 : Le),
                  Oe,
                  xe,
                  ge = b,
                  ri = ge.onStart,
                  Ce = ge.onInterrupt,
                  At = ge.onComplete;
                if (
                  ((Oe = Ke(rt, P)),
                  Ts(Oe) || (Oe = rt),
                  (xe = Math.max(0, Math.round(ee + Oe * me))),
                  W <= re && W >= ee && xe !== W)
                ) {
                  if (j && !j._initted && j.data <= Ir(xe - W)) return;
                  b.inertia === !1 && (Le = Oe - J),
                    U(
                      xe,
                      {
                        duration: ei(
                          Ir(
                            (Math.max(Ir(rt - Ye), Ir(Oe - Ye)) * 0.185) /
                              le /
                              0.05 || 0
                          )
                        ),
                        ease: b.ease || "power3",
                        data: Ir(xe - W),
                        onInterrupt: l(function () {
                          return ti.restart(!0) && Ce && Ce(P);
                        }, "onInterrupt"),
                        onComplete: l(function () {
                          P.update(),
                            (ue = B()),
                            r &&
                              !I &&
                              (ae
                                ? ae.resetTo(
                                    "totalProgress",
                                    Oe,
                                    r._tTime / r._tDur
                                  )
                                : r.progress(Oe)),
                            (Li = Zi =
                              r && !I ? r.totalProgress() : P.progress),
                            w && w(P),
                            At && At(P);
                        }, "onComplete"),
                      },
                      W,
                      Le * me,
                      xe - W - Le * me
                    ),
                    ri && ri(P, U.tween);
                }
              } else P.isActive && ue !== W && ti.restart(!0);
            }).pause())),
          c && (io[c] = P),
          (g = P.trigger = bt(g || (h !== !0 && h))),
          (bi = g && g._gsap && g._gsap.stRevert),
          bi && (bi = bi(P)),
          (h = h === !0 ? g : bt(h)),
          kt(o) && (o = { targets: g, className: o }),
          h &&
            (f === !1 ||
              f === Yt ||
              (f =
                !f &&
                h.parentNode &&
                h.parentNode.style &&
                Xt(h.parentNode).display === "flex"
                  ? !1
                  : $e),
            (P.pin = h),
            (ce = H.core.getCache(h)),
            ce.spacer
              ? (Pt = ce.pinState)
              : (x &&
                  ((x = bt(x)),
                  x && !x.nodeType && (x = x.current || x.nativeElement),
                  (ce.spacerIsNative = !!x),
                  x && (ce.spacerState = mn(x))),
                (ce.spacer = Ae = x || _e.createElement("div")),
                Ae.classList.add("pin-spacer"),
                c && Ae.classList.add("pin-spacer-" + c),
                (ce.pinState = Pt = mn(h))),
            i.force3D !== !1 && H.set(h, { force3D: !0 }),
            (P.spacer = Ae = ce.spacer),
            (Or = Xt(h)),
            (cs = Or[f + C.os2]),
            (he = H.getProperty(h)),
            (_t = H.quickSetter(h, C.a, Ve)),
            Ea(h, Ae, Or),
            (Jt = mn(h))),
          L)
        ) {
          (it = nr(L) ? Al(L, Ol) : Ol),
            ($ = hn("scroller-start", c, A, C, it, 0)),
            (ze = hn("scroller-end", c, A, C, it, 0, $)),
            (Wt = $["offset" + C.op.d2]);
          var us = bt(Xi(A, "content") || A);
          (we = this.markerStart = hn("start", c, us, C, it, Wt, 0, T)),
            (Fe = this.markerEnd = hn("end", c, us, C, it, Wt, 0, T)),
            T && (kr = H.quickSetter([we, Fe], C.a, Ve)),
            !R &&
              !(vi.length && Xi(A, "fixedMarkers") === !0) &&
              (Eh(D ? pe : A),
              H.set([$, ze], { force3D: !0 }),
              (tn = H.quickSetter($, C.a, Ve)),
              (Ar = H.quickSetter(ze, C.a, Ve)));
        }
        if (T) {
          var te = T.vars.onUpdate,
            K = T.vars.onUpdateParams;
          T.eventCallback("onUpdate", function () {
            P.update(0, 0, 1), te && te.apply(T, K || []);
          });
        }
        if (
          ((P.previous = function () {
            return ie[ie.indexOf(P) - 1];
          }),
          (P.next = function () {
            return ie[ie.indexOf(P) + 1];
          }),
          (P.revert = function (W, Q) {
            if (!Q) return P.kill(!0);
            var j = W !== !1 || !P.enabled,
              J = at;
            j !== P.isReverted &&
              (j &&
                ((ii = Math.max(B(), P.scroll.rec || 0)),
                (q = P.progress),
                (Ji = r && r.progress())),
              we &&
                [we, Fe, $, ze].forEach(function (Ye) {
                  return (Ye.style.display = j ? "none" : "block");
                }),
              j && ((at = P), P.update(j)),
              h &&
                (!S || !P.isActive) &&
                (j ? Oh(h, Ae, Pt) : Ea(h, Ae, Xt(h), Re)),
              j || P.update(j),
              (at = J),
              (P.isReverted = j));
          }),
          (P.refresh = function (W, Q, j, J) {
            if (!((at || !P.enabled) && !Q)) {
              if (h && W && Zt) {
                Ge(s, "scrollEnd", Au);
                return;
              }
              !gt && Y && Y(P),
                (at = P),
                U.tween && !j && (U.tween.kill(), (U.tween = 0)),
                ae && ae.pause(),
                p &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren &&
                    r.getChildren(!0, !0, !1).forEach(function (Ii) {
                      return Ii.vars.immediateRender && Ii.render(0, !0, !0);
                    })),
                P.isReverted || P.revert(!0, !0),
                (P._subPinOffset = !1);
              var Ye = Z(),
                le = fe(),
                Le = T ? T.duration() : hi(A, C),
                rt = me <= 0.01 || !me,
                Oe = 0,
                xe = J || 0,
                ge = nr(j) ? j.end : i.end,
                ri = i.endTrigger || g,
                Ce = nr(j)
                  ? j.start
                  : i.start || (i.start === 0 || !g ? 0 : h ? "0 0" : "0 100%"),
                At = (P.pinnedContainer =
                  i.pinnedContainer && bt(i.pinnedContainer, P)),
                oi = (g && Math.max(0, ie.indexOf(P))) || 0,
                Ze = oi,
                Qe,
                st,
                er,
                rn,
                nt,
                Be,
                li,
                sa,
                Zo,
                ds,
                ci,
                fs,
                sn;
              for (
                L &&
                nr(j) &&
                ((fs = H.getProperty($, C.p)), (sn = H.getProperty(ze, C.p)));
                Ze-- > 0;

              )
                (Be = ie[Ze]),
                  Be.end || Be.refresh(0, 1) || (at = P),
                  (li = Be.pin),
                  li &&
                    (li === g || li === h || li === At) &&
                    !Be.isReverted &&
                    (ds || (ds = []), ds.unshift(Be), Be.revert(!0, !0)),
                  Be !== ie[Ze] && (oi--, Ze--);
              for (
                ct(Ce) && (Ce = Ce(P)),
                  Ce = El(Ce, "start", P),
                  ee =
                    Dl(
                      Ce,
                      g,
                      Ye,
                      C,
                      B(),
                      we,
                      $,
                      P,
                      le,
                      N,
                      R,
                      Le,
                      T,
                      P._startClamp && "_startClamp"
                    ) || (h ? -0.001 : 0),
                  ct(ge) && (ge = ge(P)),
                  kt(ge) &&
                    !ge.indexOf("+=") &&
                    (~ge.indexOf(" ")
                      ? (ge = (kt(Ce) ? Ce.split(" ")[0] : "") + ge)
                      : ((Oe = En(ge.substr(2), Ye)),
                        (ge = kt(Ce)
                          ? Ce
                          : (T
                              ? H.utils.mapRange(
                                  0,
                                  T.duration(),
                                  T.scrollTrigger.start,
                                  T.scrollTrigger.end,
                                  ee
                                )
                              : ee) + Oe),
                        (ri = g))),
                  ge = El(ge, "end", P),
                  re =
                    Math.max(
                      ee,
                      Dl(
                        ge || (ri ? "100% 0" : Le),
                        ri,
                        Ye,
                        C,
                        B() + Oe,
                        Fe,
                        ze,
                        P,
                        le,
                        N,
                        R,
                        Le,
                        T,
                        P._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Oe = 0,
                  Ze = oi;
                Ze--;

              )
                (Be = ie[Ze]),
                  (li = Be.pin),
                  li &&
                    Be.start - Be._pinPush <= ee &&
                    !T &&
                    Be.end > 0 &&
                    ((Qe =
                      Be.end -
                      (P._startClamp ? Math.max(0, Be.start) : Be.start)),
                    ((li === g && Be.start - Be._pinPush < ee) || li === At) &&
                      isNaN(Ce) &&
                      (Oe += Qe * (1 - Be.progress)),
                    li === h && (xe += Qe));
              if (
                ((ee += Oe),
                (re += Oe),
                P._startClamp && (P._startClamp += Oe),
                P._endClamp &&
                  !gt &&
                  ((P._endClamp = re || -0.001), (re = Math.min(re, hi(A, C)))),
                (me = re - ee || ((ee -= 0.01) && 0.001)),
                rt && (q = H.utils.clamp(0, 1, H.utils.normalize(ee, re, ii))),
                (P._pinPush = xe),
                we &&
                  Oe &&
                  ((Qe = {}),
                  (Qe[C.a] = "+=" + Oe),
                  At && (Qe[C.p] = "-=" + B()),
                  H.set([we, Fe], Qe)),
                h && !(to && P.end >= hi(A, C)))
              )
                (Qe = Xt(h)),
                  (rn = C === We),
                  (er = B()),
                  (He = parseFloat(he(C.a)) + xe),
                  !Le &&
                    re > 1 &&
                    ((ci = (D ? _e.scrollingElement || Dt : A).style),
                    (ci = {
                      style: ci,
                      value: ci["overflow" + C.a.toUpperCase()],
                    }),
                    D &&
                      Xt(pe)["overflow" + C.a.toUpperCase()] !== "scroll" &&
                      (ci.style["overflow" + C.a.toUpperCase()] = "scroll")),
                  Ea(h, Ae, Qe),
                  (Jt = mn(h)),
                  (st = Ei(h, !0)),
                  (sa = R && Ui(A, rn ? wt : We)()),
                  f
                    ? ((Re = [f + C.os2, me + xe + Ve]),
                      (Re.t = Ae),
                      (Ze = f === $e ? Yn(h, C) + me + xe : 0),
                      Ze &&
                        (Re.push(C.d, Ze + Ve),
                        Ae.style.flexBasis !== "auto" &&
                          (Ae.style.flexBasis = Ze + Ve)),
                      jr(Re),
                      At &&
                        ie.forEach(function (Ii) {
                          Ii.pin === At &&
                            Ii.vars.pinSpacing !== !1 &&
                            (Ii._subPinOffset = !0);
                        }),
                      R && B(ii))
                    : ((Ze = Yn(h, C)),
                      Ze &&
                        Ae.style.flexBasis !== "auto" &&
                        (Ae.style.flexBasis = Ze + Ve)),
                  R &&
                    ((nt = {
                      top: st.top + (rn ? er - ee : sa) + Ve,
                      left: st.left + (rn ? sa : er - ee) + Ve,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (nt[gr] = nt["max" + os] = Math.ceil(st.width) + Ve),
                    (nt[vr] = nt["max" + Bo] = Math.ceil(st.height) + Ve),
                    (nt[Yt] =
                      nt[Yt + Rs] =
                      nt[Yt + Ds] =
                      nt[Yt + $s] =
                      nt[Yt + zs] =
                        "0"),
                    (nt[$e] = Qe[$e]),
                    (nt[$e + Rs] = Qe[$e + Rs]),
                    (nt[$e + Ds] = Qe[$e + Ds]),
                    (nt[$e + $s] = Qe[$e + $s]),
                    (nt[$e + zs] = Qe[$e + zs]),
                    (Vt = Lh(Pt, nt, S)),
                    gt && B(0)),
                  r
                    ? ((Zo = r._initted),
                      _a(1),
                      r.render(r.duration(), !0, !0),
                      (wi = he(C.a) - He + me + xe),
                      (_i = Math.abs(me - wi) > 1),
                      R && _i && Vt.splice(Vt.length - 2, 2),
                      r.render(0, !0, !0),
                      Zo || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      _a(0))
                    : (wi = me),
                  ci &&
                    (ci.value
                      ? (ci.style["overflow" + C.a.toUpperCase()] = ci.value)
                      : ci.style.removeProperty("overflow-" + C.a));
              else if (g && B() && !T)
                for (st = g.parentNode; st && st !== pe; )
                  st._pinOffset &&
                    ((ee -= st._pinOffset), (re -= st._pinOffset)),
                    (st = st.parentNode);
              ds &&
                ds.forEach(function (Ii) {
                  return Ii.revert(!1, !0);
                }),
                (P.start = ee),
                (P.end = re),
                (be = Se = gt ? ii : B()),
                !T && !gt && (be < ii && B(ii), (P.scroll.rec = 0)),
                P.revert(!1, !0),
                (F = ot()),
                ti && ((ue = -1), ti.restart(!0)),
                (at = 0),
                r &&
                  I &&
                  (r._initted || Ji) &&
                  r.progress() !== Ji &&
                  r.progress(Ji || 0, !0).render(r.time(), !0, !0),
                (rt || q !== P.progress || T || p || (r && !r._initted)) &&
                  (r &&
                    !I &&
                    (r._initted || q || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      T && ee < -0.001 && !q ? H.utils.normalize(ee, re, 0) : q,
                      !0
                    ),
                  (P.progress = rt || (be - ee) / me === q ? 0 : q)),
                h && f && (Ae._pinOffset = Math.round(P.progress * wi)),
                ae && ae.invalidate(),
                isNaN(fs) ||
                  ((fs -= H.getProperty($, C.p)),
                  (sn -= H.getProperty(ze, C.p)),
                  gn($, C, fs),
                  gn(we, C, fs - (J || 0)),
                  gn(ze, C, sn),
                  gn(Fe, C, sn - (J || 0))),
                rt && !gt && P.update(),
                d && !gt && !Mt && ((Mt = !0), d(P), (Mt = !1));
            }
          }),
          (P.getVelocity = function () {
            return ((B() - Se) / (ot() - bs)) * 1e3 || 0;
          }),
          (P.endAnimation = function () {
            ms(P.callbackAnimation),
              r &&
                (ae
                  ? ae.progress(1)
                  : r.paused()
                  ? I || ms(r, P.direction < 0, 1)
                  : ms(r, r.reversed()));
          }),
          (P.labelToScroll = function (W) {
            return (
              (r &&
                r.labels &&
                (ee || P.refresh() || ee) +
                  (r.labels[W] / r.duration()) * me) ||
              0
            );
          }),
          (P.getTrailing = function (W) {
            var Q = ie.indexOf(P),
              j = P.direction > 0 ? ie.slice(0, Q).reverse() : ie.slice(Q + 1);
            return (
              kt(W)
                ? j.filter(function (J) {
                    return J.vars.preventOverlaps === W;
                  })
                : j
            ).filter(function (J) {
              return P.direction > 0 ? J.end <= ee : J.start >= re;
            });
          }),
          (P.update = function (W, Q, j) {
            if (!(T && !j && !W)) {
              var J = gt === !0 ? ii : P.scroll(),
                Ye = W ? 0 : (J - ee) / me,
                le = Ye < 0 ? 0 : Ye > 1 ? 1 : Ye || 0,
                Le = P.progress,
                rt,
                Oe,
                xe,
                ge,
                ri,
                Ce,
                At,
                oi;
              if (
                (Q &&
                  ((Se = be),
                  (be = T ? B() : J),
                  b && ((Zi = Li), (Li = r && !I ? r.totalProgress() : le))),
                v &&
                  h &&
                  !at &&
                  !cn &&
                  Zt &&
                  (!le && ee < J + ((J - Se) / (ot() - bs)) * v
                    ? (le = 1e-4)
                    : le === 1 &&
                      re > J + ((J - Se) / (ot() - bs)) * v &&
                      (le = 0.9999)),
                le !== Le && P.enabled)
              ) {
                if (
                  ((rt = P.isActive = !!le && le < 1),
                  (Oe = !!Le && Le < 1),
                  (Ce = rt !== Oe),
                  (ri = Ce || !!le != !!Le),
                  (P.direction = le > Le ? 1 : -1),
                  (P.progress = le),
                  ri &&
                    !at &&
                    ((xe = le && !Le ? 0 : le === 1 ? 1 : Le === 1 ? 2 : 3),
                    I &&
                      ((ge =
                        (!Ce && O[xe + 1] !== "none" && O[xe + 1]) || O[xe]),
                      (oi =
                        r &&
                        (ge === "complete" || ge === "reset" || ge in r)))),
                  E &&
                    (Ce || oi) &&
                    (oi || m || !r) &&
                    (ct(E)
                      ? E(P)
                      : P.getTrailing(E).forEach(function (er) {
                          return er.endAnimation();
                        })),
                  I ||
                    (ae && !at && !cn
                      ? (ae._dp._time - ae._start !== ae._time &&
                          ae.render(ae._dp._time - ae._start),
                        ae.resetTo
                          ? ae.resetTo("totalProgress", le, r._tTime / r._tDur)
                          : ((ae.vars.totalProgress = le),
                            ae.invalidate().restart()))
                      : r && r.totalProgress(le, !!(at && (F || W)))),
                  h)
                ) {
                  if ((W && f && (Ae.style[f + C.os2] = cs), !R))
                    _t(xs(He + wi * le));
                  else if (ri) {
                    if (
                      ((At = !W && le > Le && re + 1 > J && J + 1 >= hi(A, C)),
                      S)
                    )
                      if (!W && (rt || At)) {
                        var Ze = Ei(h, !0),
                          Qe = J - ee;
                        zl(
                          h,
                          pe,
                          Ze.top + (C === We ? Qe : 0) + Ve,
                          Ze.left + (C === We ? 0 : Qe) + Ve
                        );
                      } else zl(h, Ae);
                    jr(rt || At ? Vt : Jt),
                      (_i && le < 1 && rt) ||
                        _t(He + (le === 1 && !At ? wi : 0));
                  }
                }
                b && !U.tween && !at && !cn && ti.restart(!0),
                  o &&
                    (Ce || (y && le && (le < 1 || !ba))) &&
                    Gs(o.targets).forEach(function (er) {
                      return er.classList[rt || y ? "add" : "remove"](
                        o.className
                      );
                    }),
                  a && !I && !W && a(P),
                  ri && !at
                    ? (I &&
                        (oi &&
                          (ge === "complete"
                            ? r.pause().totalProgress(1)
                            : ge === "reset"
                            ? r.restart(!0).pause()
                            : ge === "restart"
                            ? r.restart(!0)
                            : r[ge]()),
                        a && a(P)),
                      (Ce || !ba) &&
                        (u && Ce && xa(P, u),
                        z[xe] && xa(P, z[xe]),
                        y && (le === 1 ? P.kill(!1, 1) : (z[xe] = 0)),
                        Ce || ((xe = le === 1 ? 1 : 3), z[xe] && xa(P, z[xe]))),
                      M &&
                        !rt &&
                        Math.abs(P.getVelocity()) > (Ts(M) ? M : 2500) &&
                        (ms(P.callbackAnimation),
                        ae
                          ? ae.progress(1)
                          : ms(r, ge === "reverse" ? 1 : !le, 1)))
                    : I && a && !at && a(P);
              }
              if (Ar) {
                var st = T ? (J / T.duration()) * (T._caScrollDist || 0) : J;
                tn(st + ($._isFlipped ? 1 : 0)), Ar(st);
              }
              kr && kr((-J / T.duration()) * (T._caScrollDist || 0));
            }
          }),
          (P.enable = function (W, Q) {
            P.enabled ||
              ((P.enabled = !0),
              Ge(A, "resize", Es),
              D || Ge(A, "scroll", Dr),
              Y && Ge(s, "refreshInit", Y),
              W !== !1 && ((P.progress = q = 0), (be = Se = ue = B())),
              Q !== !1 && P.refresh());
          }),
          (P.getTween = function (W) {
            return W && U ? U.tween : ae;
          }),
          (P.setPositions = function (W, Q, j, J) {
            if (T) {
              var Ye = T.scrollTrigger,
                le = T.duration(),
                Le = Ye.end - Ye.start;
              (W = Ye.start + (Le * W) / le), (Q = Ye.start + (Le * Q) / le);
            }
            P.refresh(
              !1,
              !1,
              {
                start: Cl(W, j && !!P._startClamp),
                end: Cl(Q, j && !!P._endClamp),
              },
              J
            ),
              P.update();
          }),
          (P.adjustPinSpacing = function (W) {
            if (Re && W) {
              var Q = Re.indexOf(C.d) + 1;
              (Re[Q] = parseFloat(Re[Q]) + W + Ve),
                (Re[1] = parseFloat(Re[1]) + W + Ve),
                jr(Re);
            }
          }),
          (P.disable = function (W, Q) {
            if (
              P.enabled &&
              (W !== !1 && P.revert(!0, !0),
              (P.enabled = P.isActive = !1),
              Q || (ae && ae.pause()),
              (ii = 0),
              ce && (ce.uncache = 1),
              Y && Xe(s, "refreshInit", Y),
              ti && (ti.pause(), U.tween && U.tween.kill() && (U.tween = 0)),
              !D)
            ) {
              for (var j = ie.length; j--; )
                if (ie[j].scroller === A && ie[j] !== P) return;
              Xe(A, "resize", Es), D || Xe(A, "scroll", Dr);
            }
          }),
          (P.kill = function (W, Q) {
            P.disable(W, Q), ae && !Q && ae.kill(), c && delete io[c];
            var j = ie.indexOf(P);
            j >= 0 && ie.splice(j, 1),
              j === mt && Mn > 0 && mt--,
              (j = 0),
              ie.forEach(function (J) {
                return J.scroller === P.scroller && (j = 1);
              }),
              j || gt || (P.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                W && r.revert({ kill: !1 }),
                Q || r.kill()),
              we &&
                [we, Fe, $, ze].forEach(function (J) {
                  return J.parentNode && J.parentNode.removeChild(J);
                }),
              Ns === P && (Ns = 0),
              h &&
                (ce && (ce.uncache = 1),
                (j = 0),
                ie.forEach(function (J) {
                  return J.pin === h && j++;
                }),
                j || (ce.spacer = 0)),
              i.onKill && i.onKill(P);
          }),
          ie.push(P),
          P.enable(!1, !1),
          bi && bi(P),
          r && r.add && !me)
        ) {
          var de = P.update;
          (P.update = function () {
            (P.update = de), ne.cache++, ee || re || P.refresh();
          }),
            H.delayedCall(0.01, P.update),
            (me = 0.01),
            (ee = re = 0);
        } else P.refresh();
        h && Ah();
      }, "init")),
      (s.register = l(function (i) {
        return (
          Nr ||
            ((H = i || xu()), Su() && window.document && s.enable(), (Nr = Ss)),
          Nr
        );
      }, "register")),
      (s.defaults = l(function (i) {
        if (i) for (var r in i) pn[r] = i[r];
        return pn;
      }, "defaults")),
      (s.disable = l(function (i, r) {
        (Ss = 0),
          ie.forEach(function (a) {
            return a[r ? "kill" : "disable"](i);
          }),
          Xe(se, "wheel", Dr),
          Xe(_e, "scroll", Dr),
          clearInterval(ln),
          Xe(_e, "touchcancel", di),
          Xe(pe, "touchstart", di),
          dn(Xe, _e, "pointerdown,touchstart,mousedown", Ml),
          dn(Xe, _e, "pointerup,touchend,mouseup", Pl),
          Wn.kill(),
          un(Xe);
        for (var n = 0; n < ne.length; n += 3)
          fn(Xe, ne[n], ne[n + 1]), fn(Xe, ne[n], ne[n + 2]);
      }, "disable")),
      (s.enable = l(function () {
        if (
          ((se = window),
          (_e = document),
          (Dt = _e.documentElement),
          (pe = _e.body),
          H &&
            ((Gs = H.utils.toArray),
            (Is = H.utils.clamp),
            (eo = H.core.context || di),
            (_a = H.core.suppressOverwrites || di),
            ($o = se.history.scrollRestoration || "auto"),
            (ro = se.pageYOffset || 0),
            H.core.globals("ScrollTrigger", s),
            pe))
        ) {
          (Ss = 1),
            (Gr = document.createElement("div")),
            (Gr.style.height = "100vh"),
            (Gr.style.position = "absolute"),
            Lu(),
            Sh(),
            De.register(H),
            (s.isTouch = De.isTouch),
            (Ri =
              De.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Ja = De.isTouch === 1),
            Ge(se, "wheel", Dr),
            (Ro = [se, _e, Dt, pe]),
            H.matchMedia &&
              ((s.matchMedia = function (u) {
                var d = H.matchMedia(),
                  m;
                for (m in u) d.add(m, u[m]);
                return d;
              }),
              H.addEventListener("matchMediaInit", function () {
                return Wo();
              }),
              H.addEventListener("matchMediaRevert", function () {
                return Ou();
              }),
              H.addEventListener("matchMedia", function () {
                lr(0, 1), Er("matchMedia");
              }),
              H.matchMedia().add("(orientation: portrait)", function () {
                return Ta(), Ta;
              })),
            Ta(),
            Ge(_e, "scroll", Dr);
          var i = pe.hasAttribute("style"),
            r = pe.style,
            n = r.borderTopStyle,
            a = H.core.Animation.prototype,
            o,
            c;
          for (
            a.revert ||
              Object.defineProperty(a, "revert", {
                value: l(function () {
                  return this.time(-0.01, !0);
                }, "value"),
              }),
              r.borderTopStyle = "solid",
              o = Ei(pe),
              We.m = Math.round(o.top + We.sc()) || 0,
              wt.m = Math.round(o.left + wt.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              i || (pe.setAttribute("style", ""), pe.removeAttribute("style")),
              ln = setInterval(kl, 250),
              H.delayedCall(0.5, function () {
                return (cn = 0);
              }),
              Ge(_e, "touchcancel", di),
              Ge(pe, "touchstart", di),
              dn(Ge, _e, "pointerdown,touchstart,mousedown", Ml),
              dn(Ge, _e, "pointerup,touchend,mouseup", Pl),
              Qa = H.utils.checkPrefix("transform"),
              Pn.push(Qa),
              Nr = ot(),
              Wn = H.delayedCall(0.2, lr).pause(),
              qr = [
                _e,
                "visibilitychange",
                function () {
                  var u = se.innerWidth,
                    d = se.innerHeight;
                  _e.hidden
                    ? ((xl = u), (Tl = d))
                    : (xl !== u || Tl !== d) && Es();
                },
                _e,
                "DOMContentLoaded",
                lr,
                se,
                "load",
                lr,
                se,
                "resize",
                Es,
              ],
              un(Ge),
              ie.forEach(function (u) {
                return u.enable(0, 1);
              }),
              c = 0;
            c < ne.length;
            c += 3
          )
            fn(Xe, ne[c], ne[c + 1]), fn(Xe, ne[c], ne[c + 2]);
        }
      }, "enable")),
      (s.config = l(function (i) {
        "limitCallbacks" in i && (ba = !!i.limitCallbacks);
        var r = i.syncInterval;
        (r && clearInterval(ln)) || ((ln = r) && setInterval(kl, r)),
          "ignoreMobileResize" in i &&
            (Ja = s.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (un(Xe) || un(Ge, i.autoRefreshEvents || "none"),
            (wu = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }, "config")),
      (s.scrollerProxy = l(function (i, r) {
        var n = bt(i),
          a = ne.indexOf(n),
          o = xr(n);
        ~a && ne.splice(a, o ? 6 : 2),
          r && (o ? vi.unshift(se, r, pe, r, Dt, r) : vi.unshift(n, r));
      }, "scrollerProxy")),
      (s.clearMatchMedia = l(function (i) {
        ie.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }, "clearMatchMedia")),
      (s.isInViewport = l(function (i, r, n) {
        var a = (kt(i) ? bt(i) : i).getBoundingClientRect(),
          o = a[n ? gr : vr] * r || 0;
        return n
          ? a.right - o > 0 && a.left + o < se.innerWidth
          : a.bottom - o > 0 && a.top + o < se.innerHeight;
      }, "isInViewport")),
      (s.positionInViewport = l(function (i, r, n) {
        kt(i) && (i = bt(i));
        var a = i.getBoundingClientRect(),
          o = a[n ? gr : vr],
          c =
            r == null
              ? o / 2
              : r in Xn
              ? Xn[r] * o
              : ~r.indexOf("%")
              ? (parseFloat(r) * o) / 100
              : parseFloat(r) || 0;
        return n ? (a.left + c) / se.innerWidth : (a.top + c) / se.innerHeight;
      }, "positionInViewport")),
      (s.killAll = l(function (i) {
        if (
          (ie.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          i !== !0)
        ) {
          var r = Tr.killAll || [];
          (Tr = {}),
            r.forEach(function (n) {
              return n();
            });
        }
      }, "killAll")),
      s
    );
  })();
X.version = "3.13.0";
X.saveStyles = function (s) {
  return s
    ? Gs(s).forEach(function (e) {
        if (e && e.style) {
          var t = Ot.indexOf(e);
          t >= 0 && Ot.splice(t, 5),
            Ot.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              H.core.getCache(e),
              eo()
            );
        }
      })
    : Ot;
};
X.revert = function (s, e) {
  return Wo(!s, e);
};
X.create = function (s, e) {
  return new X(s, e);
};
X.refresh = function (s) {
  return s ? Es(!0) : (Nr || X.register()) && lr(!0);
};
X.update = function (s) {
  return ++ne.cache && Pi(s === !0 ? 2 : 0);
};
X.clearScrollMemory = ku;
X.maxScroll = function (s, e) {
  return hi(s, e ? wt : We);
};
X.getScrollFunc = function (s, e) {
  return Ui(bt(s), e ? wt : We);
};
X.getById = function (s) {
  return io[s];
};
X.getAll = function () {
  return ie.filter(function (s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
X.isScrolling = function () {
  return !!Zt;
};
X.snapDirectional = Vo;
X.addEventListener = function (s, e) {
  var t = Tr[s] || (Tr[s] = []);
  ~t.indexOf(e) || t.push(e);
};
X.removeEventListener = function (s, e) {
  var t = Tr[s],
    i = t && t.indexOf(e);
  i >= 0 && t.splice(i, 1);
};
X.batch = function (s, e) {
  var t = [],
    i = {},
    r = e.interval || 0.016,
    n = e.batchMax || 1e9,
    a = l(function (u, d) {
      var m = [],
        g = [],
        h = H.delayedCall(r, function () {
          d(m, g), (m = []), (g = []);
        }).pause();
      return function (f) {
        m.length || h.restart(!0),
          m.push(f.trigger),
          g.push(f),
          n <= m.length && h.progress(1);
      };
    }, "proxyCallback"),
    o;
  for (o in e)
    i[o] =
      o.substr(0, 2) === "on" && ct(e[o]) && o !== "onRefreshInit"
        ? a(o, e[o])
        : e[o];
  return (
    ct(n) &&
      ((n = n()),
      Ge(X, "refresh", function () {
        return (n = e.batchMax());
      })),
    Gs(s).forEach(function (c) {
      var u = {};
      for (o in i) u[o] = i[o];
      (u.trigger = c), t.push(X.create(u));
    }),
    t
  );
};
var $l = l(function (e, t, i, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
    );
  }, "_clampScrollAndGetDurationMultiplier"),
  Ca = l(function s(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (De.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Dt && s(pe, t);
  }, "_allowNativePanning"),
  vn = { auto: 1, scroll: 1 },
  Dh = l(function (e) {
    var t = e.event,
      i = e.target,
      r = e.axis,
      n = (t.changedTouches ? t.changedTouches[0] : t).target,
      a = n._gsap || H.core.getCache(n),
      o = ot(),
      c;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== pe &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(vn[(c = Xt(n)).overflowY] || vn[c.overflowX]));

      )
        n = n.parentNode;
      (a._isScroll =
        n &&
        n !== i &&
        !xr(n) &&
        (vn[(c = Xt(n)).overflowY] || vn[c.overflowX])),
        (a._isScrollT = o);
    }
    (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  }, "_nestedScroll"),
  Du = l(function (e, t, i, r) {
    return De.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r = r && Dh),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: l(function () {
        return i && Ge(_e, De.eventTypes[0], ql, !1, !0);
      }, "onEnable"),
      onDisable: l(function () {
        return Xe(_e, De.eventTypes[0], ql, !0);
      }, "onDisable"),
    });
  }, "_inputObserver"),
  zh = /(input|label|select|textarea)/i,
  Nl,
  ql = l(function (e) {
    var t = zh.test(e.target.tagName);
    (t || Nl) && ((e._gsapAllow = !0), (Nl = t));
  }, "_captureInputs"),
  Rh = l(function (e) {
    nr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      i = t.normalizeScrollX,
      r = t.momentum,
      n = t.allowNestedScroll,
      a = t.onRelease,
      o,
      c,
      u = bt(e.target) || Dt,
      d = H.core.globals().ScrollSmoother,
      m = d && d.get(),
      g =
        Ri &&
        ((e.content && bt(e.content)) ||
          (m && e.content !== !1 && !m.smooth() && m.content())),
      h = Ui(u, We),
      f = Ui(u, wt),
      p = 1,
      v =
        (De.isTouch && se.visualViewport
          ? se.visualViewport.scale * se.visualViewport.width
          : se.outerWidth) / se.innerWidth,
      _ = 0,
      w = ct(r)
        ? function () {
            return r(o);
          }
        : function () {
            return r || 2.8;
          },
      y,
      b,
      S = Du(u, e.type, !0, n),
      x = l(function () {
        return (b = !1);
      }, "resumeTouchMove"),
      T = di,
      M = di,
      E = l(function () {
        (c = hi(u, We)),
          (M = Is(Ri ? 1 : 0, c)),
          i && (T = Is(0, hi(u, wt))),
          (y = yr);
      }, "updateClamps"),
      C = l(function () {
        (g._gsap.y = xs(parseFloat(g._gsap.y) + h.offset) + "px"),
          (g.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(g._gsap.y) +
            ", 0, 1)"),
          (h.offset = h.cacheID = 0);
      }, "removeContentOffset"),
      I = l(function () {
        if (b) {
          requestAnimationFrame(x);
          var L = xs(o.deltaY / 2),
            N = M(h.v - L);
          if (g && N !== h.v + h.offset) {
            h.offset = N - h.v;
            var P = xs((parseFloat(g && g._gsap.y) || 0) - h.offset);
            (g.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              P +
              ", 0, 1)"),
              (g._gsap.y = P + "px"),
              (h.cacheID = ne.cache),
              Pi();
          }
          return !0;
        }
        h.offset && C(), (b = !0);
      }, "ignoreDrag"),
      A,
      k,
      D,
      R,
      z = l(function () {
        E(),
          A.isActive() &&
            A.vars.scrollY > c &&
            (h() > c ? A.progress(1) && h(c) : A.resetTo("scrollY", c));
      }, "onResize");
    return (
      g && H.set(g, { y: "+=0" }),
      (e.ignoreCheck = function (O) {
        return (
          (Ri && O.type === "touchmove" && I()) ||
          (p > 1.05 && O.type !== "touchstart") ||
          o.isGesturing ||
          (O.touches && O.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        b = !1;
        var O = p;
        (p = xs(((se.visualViewport && se.visualViewport.scale) || 1) / v)),
          A.pause(),
          O !== p && Ca(u, p > 1.01 ? !0 : i ? !1 : "x"),
          (k = f()),
          (D = h()),
          E(),
          (y = yr);
      }),
      (e.onRelease = e.onGestureStart =
        function (O, L) {
          if ((h.offset && C(), !L)) R.restart(!0);
          else {
            ne.cache++;
            var N = w(),
              P,
              Y;
            i &&
              ((P = f()),
              (Y = P + (N * 0.05 * -O.velocityX) / 0.227),
              (N *= $l(f, P, Y, hi(u, wt))),
              (A.vars.scrollX = T(Y))),
              (P = h()),
              (Y = P + (N * 0.05 * -O.velocityY) / 0.227),
              (N *= $l(h, P, Y, hi(u, We))),
              (A.vars.scrollY = M(Y)),
              A.invalidate().duration(N).play(0.01),
              ((Ri && A.vars.scrollY >= c) || P >= c - 1) &&
                H.to({}, { onUpdate: z, duration: N });
          }
          a && a(O);
        }),
      (e.onWheel = function () {
        A._ts && A.pause(), ot() - _ > 1e3 && ((y = 0), (_ = ot()));
      }),
      (e.onChange = function (O, L, N, P, Y) {
        if (
          (yr !== y && E(),
          L && i && f(T(P[2] === L ? k + (O.startX - O.x) : f() + L - P[1])),
          N)
        ) {
          h.offset && C();
          var Z = Y[2] === N,
            fe = Z ? D + O.startY - O.y : h() + N - Y[1],
            ue = M(fe);
          Z && fe !== ue && (D += ue - fe), h(ue);
        }
        (N || L) && Pi();
      }),
      (e.onEnable = function () {
        Ca(u, i ? !1 : "x"),
          X.addEventListener("refresh", z),
          Ge(se, "resize", z),
          h.smooth &&
            ((h.target.style.scrollBehavior = "auto"),
            (h.smooth = f.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        Ca(u, !0),
          Xe(se, "resize", z),
          X.removeEventListener("refresh", z),
          S.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new De(e)),
      (o.iOS = Ri),
      Ri && !h() && h(1),
      Ri && H.ticker.add(di),
      (R = o._dc),
      (A = H.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Iu(h, h(), function () {
            return A.pause();
          }),
        },
        onUpdate: Pi,
        onComplete: R.vars.onComplete,
      })),
      o
    );
  }, "_getScrollNormalizer");
X.sort = function (s) {
  if (ct(s)) return ie.sort(s);
  var e = se.pageYOffset || 0;
  return (
    X.getAll().forEach(function (t) {
      return (t._sortY = t.trigger
        ? e + t.trigger.getBoundingClientRect().top
        : t.start + se.innerHeight);
    }),
    ie.sort(
      s ||
        function (t, i) {
          return (
            (t.vars.refreshPriority || 0) * -1e6 +
            (t.vars.containerAnimation ? 1e6 : t._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
X.observe = function (s) {
  return new De(s);
};
X.normalizeScroll = function (s) {
  if (typeof s > "u") return ht;
  if (s === !0 && ht) return ht.enable();
  if (s === !1) {
    ht && ht.kill(), (ht = s);
    return;
  }
  var e = s instanceof De ? s : Rh(s);
  return ht && ht.target === e.target && ht.kill(), xr(e.target) && (ht = e), e;
};
X.core = {
  _getVelocityProp: Za,
  _inputObserver: Du,
  _scrollers: ne,
  _proxies: vi,
  bridge: {
    ss: l(function () {
      Zt || Er("scrollStart"), (Zt = ot());
    }, "ss"),
    ref: l(function () {
      return at;
    }, "ref"),
  },
};
xu() && H.registerPlugin(X);
V.registerPlugin(X);
const $i = class $i {
  constructor() {
    this.init();
  }
  static attr(e, t) {
    const i = typeof e;
    return typeof t != "string" || t.trim() === ""
      ? e
      : t === "true" && i === "boolean"
      ? !0
      : t === "false" && i === "boolean"
      ? !1
      : isNaN(t) && i === "string"
      ? t
      : !isNaN(t) && i === "number"
      ? +t
      : e;
  }
  init() {
    document
      .querySelectorAll("[marquee-element='component']")
      .forEach((e, t) => {
        const i = e.querySelectorAll("[marquee-element='panel']"),
          r = e.querySelectorAll("[marquee-element='triggerhover']"),
          n = e.querySelectorAll("[marquee-element='triggerclick']");
        let a = $i.attr(100, e.getAttribute("marquee-speed")),
          o = $i.attr(!1, e.getAttribute("marquee-vertical")),
          c = $i.attr(!1, e.getAttribute("marquee-reverse")),
          u = $i.attr(!1, e.getAttribute("marquee-scrolldirection")),
          d = $i.attr(!1, e.getAttribute("marquee-scrollscrub")),
          m = -100,
          g = 1,
          h = !1;
        c && (m = 100);
        let f = V.timeline({
          repeat: -1,
          onReverseComplete: l(() => f.progress(1), "onReverseComplete"),
        });
        o
          ? ((a = i[0].offsetHeight / a),
            f.fromTo(
              i,
              { yPercent: 0 },
              { yPercent: m, ease: "none", duration: a }
            ))
          : ((a = i[0].offsetWidth / a),
            f.fromTo(
              i,
              { xPercent: 0 },
              { xPercent: m, ease: "none", duration: a }
            ));
        let p = { value: 1 };
        X.create({
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          onUpdate: l((_) => {
            if (
              !h &&
              (u &&
                g !== _.direction &&
                ((g = _.direction), f.timeScale(_.direction)),
              d)
            ) {
              let w = _.getVelocity() * 0.006;
              (w = V.utils.clamp(-60, 60, w)),
                V.timeline({
                  onUpdate: l(() => f.timeScale(p.value), "onUpdate"),
                }).fromTo(p, { value: w }, { value: g, duration: 0.5 });
            }
          }, "onUpdate"),
        });
        function v(_) {
          h = _;
          let w = { value: 1 },
            y = V.timeline({
              onUpdate: l(() => f.timeScale(w.value), "onUpdate"),
            });
          _
            ? (y.fromTo(w, { value: g }, { value: 0, duration: 0.5 }),
              n.forEach((b) => b.setAttribute("marquee-status", "paused")))
            : (y.fromTo(w, { value: 0 }, { value: g, duration: 0.5 }),
              n.forEach((b) => b.setAttribute("marquee-status", "playing")));
        }
        l(v, "pauseMarquee"),
          window.matchMedia("(pointer: fine)").matches &&
            r.forEach((_) => {
              _.addEventListener("mouseenter", () => v(!0)),
                _.addEventListener("mouseleave", () => v(!1));
            }),
          n.forEach((_) => {
            _.addEventListener("click", function () {
              this.getAttribute("marquee-status") === "paused" ? v(!1) : v(!0);
            });
          });
      });
  }
};
l($i, "Marquee");
let no = $i;
function Qs() {
  new no();
}
l(Qs, "initMarquee");
const Ko = class Ko {
  constructor() {
    (this.swiper = null),
      (this.wasDesktop = this.getIsDesktop()),
      this.initSwiper(),
      window.addEventListener("resize", this.handleResize.bind(this));
  }
  getIsDesktop() {
    return window.innerWidth > 768;
  }
  initSwiper() {
    const e = this.getIsDesktop();
    this.swiper = new br("[swiper='review-slider']", {
      direction: "horizontal",
      slidesPerView: 1,
      on: {
        slideChange: l(function (t) {
          t.slides.forEach((i) => {
            i.setAttribute("card-status", "inactive");
          }),
            t.slides[t.activeIndex].setAttribute("card-status", "active");
        }, "slideChange"),
      },
      spaceBetween: 20,
      speed: 600,
      effect: "slide",
      autoplay: { delay: 1e4, disableOnInteraction: !1 },
      parallax: !0,
      pagination: {
        el: "[review-swiper='pagination']",
        clickable: !0,
        dynamicBullets: !0,
        dynamicMainBullets: 4,
      },
      loop: e,
      autoHeight: !0,
      grabCursor: !0,
      keyboard: { enabled: !0, onlyInViewport: !0 },
    });
  }
  handleResize() {
    const e = this.getIsDesktop();
    e !== this.wasDesktop &&
      ((this.wasDesktop = e),
      this.swiper && this.swiper.destroy(!0, !0),
      this.initSwiper());
  }
};
l(Ko, "ReviewSlider");
let ao = Ko;
function Js() {
  new ao();
}
l(Js, "initReviewSlider");
V.registerPlugin(X);
const $h = l(() => {
    const s = {
        INTRO_START: 0,
        SVG_LINE_START: 0,
        INTRO_OUT: 1,
        SVG_PATH_IN: 1.2,
        SVG_SM_IN: 1.2,
        SERVICE_3D_IN: 3.2,
        SERVICE_3D_OUT: 5.2,
        SERVICE_2D_IN: 5.8,
        SERVICE_2D_OUT: 7.2,
        SERVICE_INTERACTIVE_IN: 7.8,
        SERVICE_INTERACTIVE_LIST: 7.2,
      },
      e = document.querySelector("[service-scroll='section']"),
      i = e
        .querySelector("[service-scroll='main']")
        .querySelector("[visual-wrap='main']"),
      r = e.querySelector("[service-scroll='svg-visual-wrap']"),
      n = r.querySelector("[service-scroll='svg-line']"),
      a = r.querySelector("[service-scroll='svg-sm']"),
      o = r.querySelector("[service-scroll='svg-path-faded']"),
      c = r.querySelector("[service-scroll='svg-path-solid']"),
      u = e.querySelector("[service-intro='eyebrow']"),
      d = e.querySelector("[service-intro='heading']"),
      m = e.querySelector("[service-item='3d']"),
      g = e.querySelector("[service-header='3d']"),
      h = e.querySelector("[service-video-trigger='3d']"),
      f = document.querySelector("[visual-wrap='3d']"),
      p = e.querySelector("[service-item='2d']"),
      v = e.querySelector("[service-header='2d']"),
      _ = e.querySelector("[service-video-trigger='2d']"),
      w = document.querySelector("[visual-wrap='2d']"),
      y = e.querySelector("[service-item='interactive']"),
      b = e.querySelector("[service-header='interactive']"),
      S = e.querySelector("[service-video-trigger='interactive']"),
      x = document.querySelector("[visual-wrap='interactive']"),
      T = document.querySelectorAll("[service-list-item='wrapper']"),
      M = document.querySelectorAll("[service-list-item='3d']"),
      E = document.querySelectorAll("[service-list-icon='3d']");
    document.querySelectorAll("[service-list-text='3d']");
    const C = document.querySelectorAll("[service-list-item='2d']"),
      I = document.querySelectorAll("[service-list-icon='2d']");
    document.querySelectorAll("[service-list-text='2d']");
    const A = document.querySelectorAll("[service-list-item='interactive']"),
      k = document.querySelectorAll("[service-list-icon='interactive']");
    document.querySelectorAll("[service-list-text='interactive']");
    const R = window.innerWidth <= 768 ? "+=200%" : "+=400%",
      z = V.timeline({
        scrollTrigger: {
          trigger: e,
          start: "top top",
          end: R,
          pin: !1,
          markers: !1,
          scrub: 1.2,
        },
      });
    function O(L) {
      [m, p, y].forEach((N) => {
        N && N.classList.remove("is-active");
      }),
        L && L.classList.add("is-active");
    }
    l(O, "setActiveServiceItem"),
      z.fromTo(
        n,
        { rotate: 145, scale: 1.8 },
        { rotate: 0, scale: 1.2, duration: 1.8, ease: "power2.out" },
        `${s.SVG_LINE_START}%`
      ),
      z.to(
        u,
        { opacity: 0, y: -20, duration: 1, ease: "power2.in" },
        `${s.INTRO_OUT}`
      ),
      z.to(
        d,
        { opacity: 0, y: -20, duration: 1.8, ease: "power2.in" },
        `${s.INTRO_OUT}`
      ),
      z.fromTo(
        o,
        { x: "160", opacity: 0, scale: 0.5, rotate: 10 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.6,
          rotate: 0,
          ease: "power2.out",
        },
        `${s.SVG_PATH_IN}`
      ),
      z.fromTo(
        c,
        { x: "160", opacity: 0, scale: 0.5, rotate: 10 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.8,
          rotate: 0,
          ease: "power2.out",
        },
        `${s.SVG_PATH_IN + 0.2}`
      ),
      z.fromTo(
        a,
        { scale: 0.6, rotate: 145, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 1.8, ease: "power2.out" },
        `${s.SVG_SM_IN}`
      ),
      z.fromTo(
        [m, g, h],
        {
          y: "10%",
          scale: 0.8,
          pointerEvents: "none",
          opacity: 0,
          filter: "blur(30px)",
        },
        {
          y: "0%",
          scale: 1,
          pointerEvents: "auto",
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          onStart: l(() => O(m), "onStart"),
        },
        `${s.SERVICE_3D_IN}`
      ),
      z.to(
        i,
        {
          opacity: 0,
          scale: 1.1,
          filter: "blur(30px)",
          duration: 1,
          ease: "power2.out",
        },
        `${s.SERVICE_3D_IN}`
      ),
      z.fromTo(
        f,
        { opacity: 0, scale: 1.1, filter: "blur(30px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
        },
        `${s.SERVICE_3D_IN}`
      ),
      z.fromTo(
        T,
        { opacity: 0, filter: "blur(10px)", scale: 0.9 },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        },
        `${s.SERVICE_3D_IN}`
      ),
      z.fromTo(
        M,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        `${s.SERVICE_3D_IN}`
      ),
      z.fromTo(
        E,
        { opacity: 0, rotate: 0 },
        { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
        `${s.SERVICE_3D_IN}`
      ),
      z.to(
        [m, g, h],
        {
          scale: 0.9,
          pointerEvents: "none",
          opacity: 0,
          filter: "blur(30px)",
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.in",
        },
        `${s.SERVICE_3D_OUT}`
      ),
      z.to(
        f,
        {
          opacity: 0,
          scale: 1.1,
          filter: "blur(30px)",
          duration: 0.8,
          ease: "power2.in",
        },
        `${s.SERVICE_3D_OUT}`
      ),
      z.to(
        M,
        { opacity: 0.5, duration: 0.8, ease: "power2.in" },
        `${s.SERVICE_3D_OUT}`
      ),
      z.to(
        E,
        { opacity: 0, duration: 0.8, ease: "power2.in" },
        `${s.SERVICE_3D_OUT}`
      ),
      z.fromTo(
        [p, v, _],
        {
          y: "10%",
          scale: 0.9,
          opacity: 0,
          filter: "blur(30px)",
          pointerEvents: "none",
        },
        {
          y: "0%",
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          pointerEvents: "auto",
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          onStart: l(() => O(p), "onStart"),
        },
        `${s.SERVICE_2D_IN}`
      ),
      z.fromTo(
        w,
        { opacity: 0, scale: 1.1, filter: "blur(30px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
        },
        `${s.SERVICE_2D_IN}`
      ),
      z.fromTo(
        C,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        `${s.SERVICE_2D_IN}`
      ),
      z.fromTo(
        I,
        { opacity: 0, rotate: 0 },
        { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
        `${s.SERVICE_2D_IN}`
      ),
      z.to(
        n,
        { rotate: -90, duration: 1.8, ease: "power2.out" },
        `${s.SERVICE_2D_IN}`
      ),
      z.to(
        [p, v, _],
        {
          scale: 0.9,
          pointerEvents: "none",
          opacity: 0,
          filter: "blur(30px)",
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.in",
        },
        `${s.SERVICE_2D_OUT}`
      ),
      z.to(
        w,
        {
          opacity: 0,
          scale: 1.1,
          filter: "blur(30px)",
          duration: 0.8,
          ease: "power2.in",
        },
        `${s.SERVICE_2D_OUT}`
      ),
      z.to(
        C,
        { opacity: 0.5, duration: 0.8, ease: "power2.in" },
        `${s.SERVICE_2D_OUT}`
      ),
      z.to(
        I,
        { opacity: 0, duration: 0.8, ease: "power2.in" },
        `${s.SERVICE_2D_OUT}`
      ),
      z.fromTo(
        [y, b, S],
        {
          y: "10%",
          scale: 0.9,
          pointerEvents: "none",
          opacity: 0,
          filter: "blur(30px)",
        },
        {
          y: "0%",
          scale: 1,
          pointerEvents: "auto",
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          onStart: l(() => O(y), "onStart"),
        },
        `${s.SERVICE_INTERACTIVE_IN}`
      ),
      z.fromTo(
        x,
        { opacity: 0, scale: 1.1, filter: "blur(30px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
        },
        `${s.SERVICE_INTERACTIVE_IN}`
      ),
      z.fromTo(
        A,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        `${s.SERVICE_INTERACTIVE_LIST}`
      ),
      z.fromTo(
        k,
        { opacity: 0, rotate: 0 },
        { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
        `${s.SERVICE_INTERACTIVE_LIST}`
      );
  }, "serviceScroll"),
  Nh = l(() => {
    $h();
  }, "initServiceScroll"),
  qh = l(() => {
    Nh();
  }, "initHomeServices");
var Fh = "1.2.3";
function zu(s, e, t) {
  return Math.max(s, Math.min(e, t));
}
l(zu, "clamp");
function Bh(s, e, t) {
  return (1 - t) * s + t * e;
}
l(Bh, "lerp");
function Vh(s, e, t, i) {
  return Bh(s, e, 1 - Math.exp(-t * i));
}
l(Vh, "damp");
function Wh(s, e) {
  return ((s % e) + e) % e;
}
l(Wh, "modulo");
var Ur,
  Hh =
    ((Ur = class {
      constructor() {
        G(this, "isRunning", !1);
        G(this, "value", 0);
        G(this, "from", 0);
        G(this, "to", 0);
        G(this, "currentTime", 0);
        G(this, "lerp");
        G(this, "duration");
        G(this, "easing");
        G(this, "onUpdate");
      }
      advance(e) {
        if (!this.isRunning) return;
        let t = !1;
        if (this.duration && this.easing) {
          this.currentTime += e;
          const i = zu(0, this.currentTime / this.duration, 1);
          t = i >= 1;
          const r = t ? 1 : this.easing(i);
          this.value = this.from + (this.to - this.from) * r;
        } else
          this.lerp
            ? ((this.value = Vh(this.value, this.to, this.lerp * 60, e)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (t = !0)))
            : ((this.value = this.to), (t = !0));
        t && this.stop(), this.onUpdate?.(this.value, t);
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(
        e,
        t,
        { lerp: i, duration: r, easing: n, onStart: a, onUpdate: o }
      ) {
        (this.from = this.value = e),
          (this.to = t),
          (this.lerp = i),
          (this.duration = r),
          (this.easing = n),
          (this.currentTime = 0),
          (this.isRunning = !0),
          a?.(),
          (this.onUpdate = o);
      }
    }),
    l(Ur, "Animate"),
    Ur);
function Yh(s, e) {
  let t;
  return function (...i) {
    let r = this;
    clearTimeout(t),
      (t = setTimeout(() => {
        (t = void 0), s.apply(r, i);
      }, e));
  };
}
l(Yh, "debounce");
var Kr,
  Xh =
    ((Kr = class {
      constructor(e, t, { autoResize: i = !0, debounce: r = 250 } = {}) {
        G(this, "width", 0);
        G(this, "height", 0);
        G(this, "scrollHeight", 0);
        G(this, "scrollWidth", 0);
        G(this, "debouncedResize");
        G(this, "wrapperResizeObserver");
        G(this, "contentResizeObserver");
        G(
          this,
          "resize",
          l(() => {
            this.onWrapperResize(), this.onContentResize();
          }, "resize")
        );
        G(
          this,
          "onWrapperResize",
          l(() => {
            this.wrapper instanceof Window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          }, "onWrapperResize")
        );
        G(
          this,
          "onContentResize",
          l(() => {
            this.wrapper instanceof Window
              ? ((this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth))
              : ((this.scrollHeight = this.wrapper.scrollHeight),
                (this.scrollWidth = this.wrapper.scrollWidth));
          }, "onContentResize")
        );
        (this.wrapper = e),
          (this.content = t),
          i &&
            ((this.debouncedResize = Yh(this.resize, r)),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize();
      }
      destroy() {
        this.wrapperResizeObserver?.disconnect(),
          this.contentResizeObserver?.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize, !1);
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    }),
    l(Kr, "Dimensions"),
    Kr),
  Zr,
  Ru =
    ((Zr = class {
      constructor() {
        G(this, "events", {});
      }
      emit(e, ...t) {
        let i = this.events[e] || [];
        for (let r = 0, n = i.length; r < n; r++) i[r]?.(...t);
      }
      on(e, t) {
        return (
          this.events[e]?.push(t) || (this.events[e] = [t]),
          () => {
            this.events[e] = this.events[e]?.filter((i) => t !== i);
          }
        );
      }
      off(e, t) {
        this.events[e] = this.events[e]?.filter((i) => t !== i);
      }
      destroy() {
        this.events = {};
      }
    }),
    l(Zr, "Emitter"),
    Zr),
  Fl = 100 / 6,
  Di = { passive: !1 },
  Qr,
  Gh =
    ((Qr = class {
      constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        G(this, "touchStart", { x: 0, y: 0 });
        G(this, "lastDelta", { x: 0, y: 0 });
        G(this, "window", { width: 0, height: 0 });
        G(this, "emitter", new Ru());
        G(
          this,
          "onTouchStart",
          l((e) => {
            const { clientX: t, clientY: i } = e.targetTouches
              ? e.targetTouches[0]
              : e;
            (this.touchStart.x = t),
              (this.touchStart.y = i),
              (this.lastDelta = { x: 0, y: 0 }),
              this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
          }, "onTouchStart")
        );
        G(
          this,
          "onTouchMove",
          l((e) => {
            const { clientX: t, clientY: i } = e.targetTouches
                ? e.targetTouches[0]
                : e,
              r = -(t - this.touchStart.x) * this.options.touchMultiplier,
              n = -(i - this.touchStart.y) * this.options.touchMultiplier;
            (this.touchStart.x = t),
              (this.touchStart.y = i),
              (this.lastDelta = { x: r, y: n }),
              this.emitter.emit("scroll", { deltaX: r, deltaY: n, event: e });
          }, "onTouchMove")
        );
        G(
          this,
          "onTouchEnd",
          l((e) => {
            this.emitter.emit("scroll", {
              deltaX: this.lastDelta.x,
              deltaY: this.lastDelta.y,
              event: e,
            });
          }, "onTouchEnd")
        );
        G(
          this,
          "onWheel",
          l((e) => {
            let { deltaX: t, deltaY: i, deltaMode: r } = e;
            const n = r === 1 ? Fl : r === 2 ? this.window.width : 1,
              a = r === 1 ? Fl : r === 2 ? this.window.height : 1;
            (t *= n),
              (i *= a),
              (t *= this.options.wheelMultiplier),
              (i *= this.options.wheelMultiplier),
              this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: e });
          }, "onWheel")
        );
        G(
          this,
          "onWindowResize",
          l(() => {
            this.window = {
              width: window.innerWidth,
              height: window.innerHeight,
            };
          }, "onWindowResize")
        );
        (this.element = e),
          (this.options = t),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Di),
          this.element.addEventListener("touchstart", this.onTouchStart, Di),
          this.element.addEventListener("touchmove", this.onTouchMove, Di),
          this.element.addEventListener("touchend", this.onTouchEnd, Di);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Di),
          this.element.removeEventListener("touchstart", this.onTouchStart, Di),
          this.element.removeEventListener("touchmove", this.onTouchMove, Di),
          this.element.removeEventListener("touchend", this.onTouchEnd, Di);
      }
    }),
    l(Qr, "VirtualScroll"),
    Qr),
  Jr,
  jh =
    ((Jr = class {
      constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        eventsTarget: i = e,
        smoothWheel: r = !0,
        syncTouch: n = !1,
        syncTouchLerp: a = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: c,
        easing: u = l(
          (T) => Math.min(1, 1.001 - Math.pow(2, -10 * T)),
          "easing"
        ),
        lerp: d = 0.1,
        infinite: m = !1,
        orientation: g = "vertical",
        gestureOrientation: h = "vertical",
        touchMultiplier: f = 1,
        wheelMultiplier: p = 1,
        autoResize: v = !0,
        prevent: _,
        virtualScroll: w,
        overscroll: y = !0,
        autoRaf: b = !1,
        anchors: S = !1,
        __experimental__naiveDimensions: x = !1,
      } = {}) {
        G(this, "_isScrolling", !1);
        G(this, "_isStopped", !1);
        G(this, "_isLocked", !1);
        G(this, "_preventNextNativeScrollEvent", !1);
        G(this, "_resetVelocityTimeout", null);
        G(this, "__rafID", null);
        G(this, "isTouching");
        G(this, "time", 0);
        G(this, "userData", {});
        G(this, "lastVelocity", 0);
        G(this, "velocity", 0);
        G(this, "direction", 0);
        G(this, "options");
        G(this, "targetScroll");
        G(this, "animatedScroll");
        G(this, "animate", new Hh());
        G(this, "emitter", new Ru());
        G(this, "dimensions");
        G(this, "virtualScroll");
        G(
          this,
          "onScrollEnd",
          l((e) => {
            e instanceof CustomEvent ||
              ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
                e.stopPropagation());
          }, "onScrollEnd")
        );
        G(
          this,
          "dispatchScrollendEvent",
          l(() => {
            this.options.wrapper.dispatchEvent(
              new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                detail: { lenisScrollEnd: !0 },
              })
            );
          }, "dispatchScrollendEvent")
        );
        G(
          this,
          "onClick",
          l((e) => {
            const i = e
              .composedPath()
              .find(
                (r) =>
                  r instanceof HTMLAnchorElement &&
                  (r.getAttribute("href")?.startsWith("#") ||
                    r.getAttribute("href")?.startsWith("/#") ||
                    r.getAttribute("href")?.startsWith("./#"))
              );
            if (i) {
              const r = i.getAttribute("href");
              if (r) {
                const n =
                  typeof this.options.anchors == "object" &&
                  this.options.anchors
                    ? this.options.anchors
                    : void 0;
                this.scrollTo(`#${r.split("#")[1]}`, n);
              }
            }
          }, "onClick")
        );
        G(
          this,
          "onPointerDown",
          l((e) => {
            e.button === 1 && this.reset();
          }, "onPointerDown")
        );
        G(
          this,
          "onVirtualScroll",
          l((e) => {
            if (
              typeof this.options.virtualScroll == "function" &&
              this.options.virtualScroll(e) === !1
            )
              return;
            const { deltaX: t, deltaY: i, event: r } = e;
            if (
              (this.emitter.emit("virtual-scroll", {
                deltaX: t,
                deltaY: i,
                event: r,
              }),
              r.ctrlKey || r.lenisStopPropagation)
            )
              return;
            const n = r.type.includes("touch"),
              a = r.type.includes("wheel");
            this.isTouching = r.type === "touchstart" || r.type === "touchmove";
            const o = t === 0 && i === 0;
            if (
              this.options.syncTouch &&
              n &&
              r.type === "touchstart" &&
              o &&
              !this.isStopped &&
              !this.isLocked
            ) {
              this.reset();
              return;
            }
            const u =
              (this.options.gestureOrientation === "vertical" && i === 0) ||
              (this.options.gestureOrientation === "horizontal" && t === 0);
            if (o || u) return;
            let d = r.composedPath();
            d = d.slice(0, d.indexOf(this.rootElement));
            const m = this.options.prevent;
            if (
              d.find(
                (_) =>
                  _ instanceof HTMLElement &&
                  ((typeof m == "function" && m?.(_)) ||
                    _.hasAttribute?.("data-lenis-prevent") ||
                    (n && _.hasAttribute?.("data-lenis-prevent-touch")) ||
                    (a && _.hasAttribute?.("data-lenis-prevent-wheel")))
              )
            )
              return;
            if (this.isStopped || this.isLocked) {
              r.preventDefault();
              return;
            }
            if (
              !(
                (this.options.syncTouch && n) ||
                (this.options.smoothWheel && a)
              )
            ) {
              (this.isScrolling = "native"),
                this.animate.stop(),
                (r.lenisStopPropagation = !0);
              return;
            }
            let h = i;
            this.options.gestureOrientation === "both"
              ? (h = Math.abs(i) > Math.abs(t) ? i : t)
              : this.options.gestureOrientation === "horizontal" && (h = t),
              (!this.options.overscroll ||
                this.options.infinite ||
                (this.options.wrapper !== window &&
                  ((this.animatedScroll > 0 &&
                    this.animatedScroll < this.limit) ||
                    (this.animatedScroll === 0 && i > 0) ||
                    (this.animatedScroll === this.limit && i < 0)))) &&
                (r.lenisStopPropagation = !0),
              r.preventDefault();
            const f = n && this.options.syncTouch,
              v = n && r.type === "touchend" && Math.abs(h) > 5;
            v && (h = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(this.targetScroll + h, {
                programmatic: !1,
                ...(f
                  ? { lerp: v ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }),
              });
          }, "onVirtualScroll")
        );
        G(
          this,
          "onNativeScroll",
          l(() => {
            if (
              (this._resetVelocityTimeout !== null &&
                (clearTimeout(this._resetVelocityTimeout),
                (this._resetVelocityTimeout = null)),
              this._preventNextNativeScrollEvent)
            ) {
              this._preventNextNativeScrollEvent = !1;
              return;
            }
            if (this.isScrolling === !1 || this.isScrolling === "native") {
              const e = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.lastVelocity = this.velocity),
                (this.velocity = this.animatedScroll - e),
                (this.direction = Math.sign(this.animatedScroll - e)),
                this.isStopped || (this.isScrolling = "native"),
                this.emit(),
                this.velocity !== 0 &&
                  (this._resetVelocityTimeout = setTimeout(() => {
                    (this.lastVelocity = this.velocity),
                      (this.velocity = 0),
                      (this.isScrolling = !1),
                      this.emit();
                  }, 400));
            }
          }, "onNativeScroll")
        );
        G(
          this,
          "raf",
          l((e) => {
            const t = e - (this.time || e);
            (this.time = e),
              this.animate.advance(t * 0.001),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          }, "raf")
        );
        (window.lenisVersion = Fh),
          (!e || e === document.documentElement) && (e = window),
          (this.options = {
            wrapper: e,
            content: t,
            eventsTarget: i,
            smoothWheel: r,
            syncTouch: n,
            syncTouchLerp: a,
            touchInertiaMultiplier: o,
            duration: c,
            easing: u,
            lerp: d,
            infinite: m,
            gestureOrientation: h,
            orientation: g,
            touchMultiplier: f,
            wheelMultiplier: p,
            autoResize: v,
            prevent: _,
            virtualScroll: w,
            overscroll: y,
            autoRaf: b,
            anchors: S,
            __experimental__naiveDimensions: x,
          }),
          (this.dimensions = new Xh(e, t, { autoResize: v })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0,
          }),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.addEventListener("click", this.onClick, !1),
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          (this.virtualScroll = new Gh(i, {
            touchMultiplier: f,
            wheelMultiplier: p,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.removeEventListener(
            "scrollend",
            this.onScrollEnd,
            { capture: !0 }
          ),
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.removeEventListener("click", this.onClick, !1),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this.__rafID && cancelAnimationFrame(this.__rafID);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      off(e, t) {
        return this.emitter.off(e, t);
      }
      setScroll(e) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: e, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: e, behavior: "instant" });
      }
      resize() {
        this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop();
      }
      start() {
        this.isStopped && (this.reset(), (this.isStopped = !1));
      }
      stop() {
        this.isStopped || (this.reset(), (this.isStopped = !0));
      }
      scrollTo(
        e,
        {
          offset: t = 0,
          immediate: i = !1,
          lock: r = !1,
          duration: n = this.options.duration,
          easing: a = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: c,
          onComplete: u,
          force: d = !1,
          programmatic: m = !0,
          userData: g,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !d)) {
          if (typeof e == "string" && ["top", "left", "start"].includes(e))
            e = 0;
          else if (
            typeof e == "string" &&
            ["bottom", "right", "end"].includes(e)
          )
            e = this.limit;
          else {
            let h;
            if (
              (typeof e == "string"
                ? (h = document.querySelector(e))
                : e instanceof HTMLElement && e?.nodeType && (h = e),
              h)
            ) {
              if (this.options.wrapper !== window) {
                const p = this.rootElement.getBoundingClientRect();
                t -= this.isHorizontal ? p.left : p.top;
              }
              const f = h.getBoundingClientRect();
              e = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
            }
          }
          if (typeof e == "number") {
            if (
              ((e += t),
              (e = Math.round(e)),
              this.options.infinite
                ? m && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = zu(0, e, this.limit)),
              e === this.targetScroll)
            ) {
              c?.(this), u?.(this);
              return;
            }
            if (((this.userData = g ?? {}), i)) {
              (this.animatedScroll = this.targetScroll = e),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                u?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            m || (this.targetScroll = e),
              this.animate.fromTo(this.animatedScroll, e, {
                duration: n,
                easing: a,
                lerp: o,
                onStart: l(() => {
                  r && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    c?.(this);
                }, "onStart"),
                onUpdate: l((h, f) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = h - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = h),
                    this.setScroll(this.scroll),
                    m && (this.targetScroll = h),
                    f || this.emit(),
                    f &&
                      (this.reset(),
                      this.emit(),
                      u?.(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent());
                }, "onUpdate"),
              });
          }
        }
      }
      preventNextNativeScrollEvent() {
        (this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          });
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.__experimental__naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        const e = this.options.wrapper;
        return this.isHorizontal
          ? e.scrollX ?? e.scrollLeft
          : e.scrollY ?? e.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? Wh(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(e) {
        this._isScrolling !== e &&
          ((this._isScrolling = e), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(e) {
        this._isStopped !== e &&
          ((this._isStopped = e), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(e) {
        this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let e = "lenis";
        return (
          this.isStopped && (e += " lenis-stopped"),
          this.isLocked && (e += " lenis-locked"),
          this.isScrolling && (e += " lenis-scrolling"),
          this.isScrolling === "smooth" && (e += " lenis-smooth"),
          e
        );
      }
      updateClassName() {
        this.cleanUpClassName(),
          (this.rootElement.className =
            `${this.rootElement.className} ${this.className}`.trim());
      }
      cleanUpClassName() {
        this.rootElement.className = this.rootElement.className
          .replace(/lenis(-\w+)?/g, "")
          .trim();
      }
    }),
    l(Jr, "Lenis"),
    Jr);
V.registerPlugin(X);
let On;
const Uh = l(() => {
    (On = new jh({
      autoRaf: !0,
      lerp: 0.1,
      duration: 1.2,
      easing: l((s) => Math.min(1, 1.001 - Math.pow(2, -12 * s)), "easing"),
      autoRaf: !0,
    })),
      On.on("scroll", X.update),
      V.ticker.add((s) => {
        On.raf(s * 1e3);
      }),
      V.ticker.lagSmoothing(0);
  }, "smoothScroll"),
  Kh = l(() => {
    Uh();
  }, "initLenis"),
  Qt = l(() => On, "getLenis");
V.registerPlugin(X);
const Zh = l(() => {
    if (
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      return;
    const e = document.querySelectorAll('[hero-parallax="visual"]'),
      t = document.querySelector('[hero-parallax="header"]');
    if (!e.length && !t) return;
    const i = Qt?.();
    if (
      (X.defaults({ scroller: i ? i.wrapper : void 0 }),
      e.forEach((r) => {
        const n = parseFloat(r.getAttribute("parallax-speed")) || 0.6;
        V.fromTo(
          r,
          { yPercent: 0, scale: 1 },
          {
            yPercent: -n * 100,
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
              trigger: r.parentElement,
              start: "top top",
              end: "bottom top",
              scrub: !0,
              invalidateOnRefresh: !0,
            },
          }
        );
      }),
      t)
    ) {
      const r = parseFloat(t.getAttribute("parallax-speed")) || 3.5;
      V.fromTo(
        t,
        { yPercent: 0, scale: 1 },
        {
          yPercent: -r * 100,
          scale: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: e[0].parentElement,
            start: "top top",
            end: "bottom top",
            scrub: !0,
            invalidateOnRefresh: !0,
          },
        }
      );
    }
  }, "heroParallax"),
  $u = l(() => {
    Zh();
  }, "initHeroParallax"),
  Qh = l(() => {
    const s = document.querySelectorAll("[video-modal-trigger]");
    let e = null;
    document.querySelector("[data-vimeo-control='play']"),
      document.querySelector("[data-vimeo-control='pause']");
    const t = l((i, r) => {
      const n = {
        open: {
          clipPath: "inset(0% round 0px)",
          pointerEvents: "auto",
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "expo.inOut",
        },
        close: {
          clipPath: "inset(50% round 16px)",
          pointerEvents: "none",
          scale: 1.2,
          filter: "blur(5px)",
          duration: 1,
          ease: "expo.inOut",
        },
      };
      V.to(i, n[r]);
    }, "animateModal");
    s.forEach((i) => {
      const r = i.getAttribute("video-modal-trigger"),
        n = document.querySelector(`[video-modal-target="${r}"]`),
        a = document.querySelector(`[video-modal-close="${r}"]`);
      if (!n || !a) return;
      V.set(n, {
        clipPath: "inset(50% round 16px)",
        pointerEvents: "none",
        scale: 1.2,
        filter: "blur(5px)",
      });
      const o = l(() => {
          e && e !== n && t(e, "close"), t(n, "open"), (e = n);
          const u = n.querySelector("[data-vimeo-control='play']");
          u && u.click();
        }, "openModal"),
        c = l(() => {
          if ((t(n, "close"), e === n)) {
            e = null;
            const u = n.querySelector("[data-vimeo-control='pause']");
            u && u.click();
          }
        }, "closeModal");
      i.addEventListener("click", () => {
        const u = Qt();
        e === n ? (c(), u.start()) : (o(), u.stop());
      }),
        a.addEventListener("click", () => {
          e === n && (c(), Qt().start());
        });
    }),
      document.addEventListener("keydown", (i) => {
        i.key === "Escape" && e && (t(e, "close"), Qt().start(), (e = null));
      });
  }, "videoModal"),
  Jh = l(() => {
    Qh();
  }, "initVideoModal");
let gs,
  zr,
  oo,
  em = l(() => oo || ki.register(window.gsap), "_initIfNecessary"),
  Bl = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  Gn = l(
    (s) =>
      typeof s == "string"
        ? Gn(document.querySelectorAll(s))
        : "length" in s
        ? Array.from(s)
        : [s],
    "_toArray$1"
  ),
  Vl = l((s) => Gn(s).filter((e) => e instanceof HTMLElement), "_elements"),
  lo = [],
  Ma = l(function () {}, "_context"),
  tm = /\s+/g,
  Wl = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  Hl = { left: 0, top: 0, width: 0, height: 0 },
  Yl = l((s, e) => {
    if (e) {
      let t = new Set(s.join("").match(e) || lo),
        i = s.length,
        r,
        n,
        a,
        o;
      if (t.size)
        for (; --i > -1; ) {
          n = s[i];
          for (a of t)
            if (a.startsWith(n) && a.length > n.length) {
              for (
                r = 0, o = n;
                a.startsWith((o += s[i + ++r])) && o.length < a.length;

              );
              if (r && o.length === a.length) {
                (s[i] = a), s.splice(i + 1, r);
                break;
              }
            }
        }
    }
    return s;
  }, "_stretchToFitSpecialChars"),
  Xl = l(
    (s) =>
      window.getComputedStyle(s).display === "inline" &&
      (s.style.display = "inline-block"),
    "_disallowInline"
  ),
  Rr = l(
    (s, e, t) =>
      e.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, t),
    "_insertNodeBefore"
  ),
  co = l((s, e, t) => {
    let i = e[s + "sClass"] || "",
      { tag: r = "div", aria: n = "auto", propIndex: a = !1 } = e,
      o = s === "line" ? "block" : "inline-block",
      c = i.indexOf("++") > -1,
      u = l((d) => {
        let m = document.createElement(r),
          g = t.length + 1;
        return (
          i && (m.className = i + (c ? " " + i + g : "")),
          a && m.style.setProperty("--" + s, g + ""),
          n !== "none" && m.setAttribute("aria-hidden", "true"),
          r !== "span" &&
            ((m.style.position = "relative"), (m.style.display = o)),
          (m.textContent = d),
          t.push(m),
          m
        );
      }, "wrapper");
    return c && (i = i.replace("++", "")), (u.collection = t), u;
  }, "_getWrapper"),
  im = l((s, e, t, i) => {
    let r = co("line", t, i),
      n = window.getComputedStyle(s).textAlign || "left";
    return (a, o) => {
      let c = r("");
      for (c.style.textAlign = n, s.insertBefore(c, e[a]); a < o; a++)
        c.appendChild(e[a]);
      c.normalize();
    };
  }, "_getLineWrapper"),
  Nu = l((s, e, t, i, r, n, a, o, c, u) => {
    var d;
    let m = Array.from(s.childNodes),
      g = 0,
      { wordDelimiter: h, reduceWhiteSpace: f = !0, prepareText: p } = e,
      v = s.getBoundingClientRect(),
      _ = v,
      w = !f && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre",
      y = 0,
      b = t.collection,
      S,
      x,
      T,
      M,
      E,
      C,
      I,
      A,
      k,
      D,
      R,
      z,
      O,
      L,
      N,
      P,
      Y,
      Z;
    for (
      typeof h == "object"
        ? ((T = h.delimiter || h), (x = h.replaceWith || ""))
        : (x = h === "" ? "" : h || " "),
        S = x !== " ";
      g < m.length;
      g++
    )
      if (((M = m[g]), M.nodeType === 3)) {
        for (
          N = M.textContent || "",
            f
              ? (N = N.replace(tm, " "))
              : w &&
                (N = N.replace(
                  /\n/g,
                  x +
                    `
`
                )),
            p && (N = p(N, s)),
            M.textContent = N,
            E = x || T ? N.split(T || x) : N.match(o) || lo,
            Y = E[E.length - 1],
            A = S ? Y.slice(-1) === " " : !Y,
            Y || E.pop(),
            _ = v,
            I = S ? E[0].charAt(0) === " " : !E[0],
            I && Rr(" ", s, M),
            E[0] || E.shift(),
            Yl(E, c),
            (n && u) || (M.textContent = ""),
            k = 1;
          k <= E.length;
          k++
        )
          if (
            ((P = E[k - 1]),
            !f &&
              w &&
              P.charAt(0) ===
                `
` &&
              ((d = M.previousSibling) == null || d.remove(),
              Rr(document.createElement("br"), s, M),
              (P = P.slice(1))),
            !f && P === "")
          )
            Rr(x, s, M);
          else if (P === " ") s.insertBefore(document.createTextNode(" "), M);
          else {
            if (
              (S && P.charAt(0) === " " && Rr(" ", s, M),
              y && k === 1 && !I && b.indexOf(y.parentNode) > -1
                ? ((C = b[b.length - 1]),
                  C.appendChild(document.createTextNode(i ? "" : P)))
                : ((C = t(i ? "" : P)),
                  Rr(C, s, M),
                  y && k === 1 && !I && C.insertBefore(y, C.firstChild)),
              i)
            )
              for (
                R = Bl
                  ? Yl(
                      [...Bl.segment(P)].map((fe) => fe.segment),
                      c
                    )
                  : P.match(o) || lo,
                  Z = 0;
                Z < R.length;
                Z++
              )
                C.appendChild(
                  R[Z] === " " ? document.createTextNode(" ") : i(R[Z])
                );
            if (n && u) {
              if (
                ((N = M.textContent = N.substring(P.length + 1, N.length)),
                (D = C.getBoundingClientRect()),
                D.top > _.top && D.left <= _.left)
              ) {
                for (z = s.cloneNode(), O = s.childNodes[0]; O && O !== C; )
                  (L = O), (O = O.nextSibling), z.appendChild(L);
                s.parentNode.insertBefore(z, s), r && Xl(z);
              }
              _ = D;
            }
            (k < E.length || A) &&
              Rr(
                k >= E.length ? " " : S && P.slice(-1) === " " ? " " + x : x,
                s,
                M
              );
          }
        s.removeChild(M), (y = 0);
      } else
        M.nodeType === 1 &&
          (a && a.indexOf(M) > -1
            ? (b.indexOf(M.previousSibling) > -1 &&
                b[b.length - 1].appendChild(M),
              (y = M))
            : (Nu(M, e, t, i, r, n, a, o, c, !0), (y = 0)),
          r && Xl(M));
  }, "_splitWordsAndCharsRecursively");
var wr;
const qu =
  ((wr = class {
    constructor(e, t) {
      (this.isSplit = !1),
        em(),
        (this.elements = Vl(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = t),
        (this._split = () => this.isSplit && this.split(this.vars));
      let i = [],
        r,
        n = l(() => {
          let a = i.length,
            o;
          for (; a--; ) {
            o = i[a];
            let c = o.element.offsetWidth;
            if (c !== o.width) {
              (o.width = c), this._split();
              return;
            }
          }
        }, "checkWidths");
      (this._data = {
        orig: i,
        obs:
          typeof ResizeObserver < "u" &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(n, 200));
          }),
      }),
        Ma(this),
        this.split(t);
    }
    split(e) {
      this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
      let {
          type: t = "chars,words,lines",
          aria: i = "auto",
          deepSlice: r = !0,
          smartWrap: n,
          onSplit: a,
          autoSplit: o = !1,
          specialChars: c,
          mask: u,
        } = this.vars,
        d = t.indexOf("lines") > -1,
        m = t.indexOf("chars") > -1,
        g = t.indexOf("words") > -1,
        h = m && !g && !d,
        f =
          c && ("push" in c ? new RegExp("(?:" + c.join("|") + ")", "gu") : c),
        p = f ? new RegExp(f.source + "|" + Wl.source, "gu") : Wl,
        v = !!e.ignore && Vl(e.ignore),
        { orig: _, animTime: w, obs: y } = this._data,
        b;
      return (
        (m || g || d) &&
          (this.elements.forEach((S, x) => {
            (_[x] = {
              element: S,
              html: S.innerHTML,
              ariaL: S.getAttribute("aria-label"),
              ariaH: S.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? S.setAttribute("aria-label", (S.textContent || "").trim())
                : i === "hidden" && S.setAttribute("aria-hidden", "true");
            let T = [],
              M = [],
              E = [],
              C = m ? co("char", e, T) : null,
              I = co("word", e, M),
              A,
              k,
              D,
              R;
            if ((Nu(S, e, I, C, h, r && (d || h), v, p, f, !1), d)) {
              let z = Gn(S.childNodes),
                O = im(S, z, e, E),
                L,
                N = [],
                P = 0,
                Y = z.map((fe) =>
                  fe.nodeType === 1 ? fe.getBoundingClientRect() : Hl
                ),
                Z = Hl;
              for (A = 0; A < z.length; A++)
                (L = z[A]),
                  L.nodeType === 1 &&
                    (L.nodeName === "BR"
                      ? (N.push(L), O(P, A + 1), (P = A + 1), (Z = Y[P]))
                      : (A &&
                          Y[A].top > Z.top &&
                          Y[A].left <= Z.left &&
                          (O(P, A), (P = A)),
                        (Z = Y[A])));
              P < A && O(P, A),
                N.forEach((fe) => {
                  var ue;
                  return (ue = fe.parentNode) == null
                    ? void 0
                    : ue.removeChild(fe);
                });
            }
            if (!g) {
              for (A = 0; A < M.length; A++)
                if (
                  ((k = M[A]),
                  m || !k.nextSibling || k.nextSibling.nodeType !== 3)
                )
                  if (n && !d) {
                    for (
                      D = document.createElement("span"),
                        D.style.whiteSpace = "nowrap";
                      k.firstChild;

                    )
                      D.appendChild(k.firstChild);
                    k.replaceWith(D);
                  } else k.replaceWith(...k.childNodes);
                else
                  (R = k.nextSibling),
                    R &&
                      R.nodeType === 3 &&
                      ((R.textContent =
                        (k.textContent || "") + (R.textContent || "")),
                      k.remove());
              (M.length = 0), S.normalize();
            }
            this.lines.push(...E), this.words.push(...M), this.chars.push(...T);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((S) => {
                let x = S.cloneNode();
                return (
                  S.replaceWith(x),
                  x.appendChild(S),
                  S.className &&
                    (x.className = S.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (x.style.overflow = "clip"),
                  x
                );
              })
            )),
        (this.isSplit = !0),
        zr && (o ? zr.addEventListener("loadingdone", this._split) : zr.status),
        (b = a && a(this)) &&
          b.totalTime &&
          (this._data.anim = w ? b.totalTime(w) : b),
        d &&
          o &&
          this.elements.forEach((S, x) => {
            (_[x].width = S.offsetWidth), y && y.observe(S);
          }),
        this
      );
    }
    revert() {
      var e, t;
      let { orig: i, anim: r, obs: n } = this._data;
      return (
        n && n.disconnect(),
        i.forEach(({ element: a, html: o, ariaL: c, ariaH: u }) => {
          (a.innerHTML = o),
            c
              ? a.setAttribute("aria-label", c)
              : a.removeAttribute("aria-label"),
            u
              ? a.setAttribute("aria-hidden", u)
              : a.removeAttribute("aria-hidden");
        }),
        (this.chars.length =
          this.words.length =
          this.lines.length =
          i.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        zr?.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new wr(e, t);
    }
    static register(e) {
      (gs = gs || e || window.gsap),
        gs && ((Gn = gs.utils.toArray), (Ma = gs.core.context || Ma)),
        !oo && window.innerWidth > 0 && ((zr = document.fonts), (oo = !0));
    }
  }),
  l(wr, "_SplitText"),
  wr);
qu.version = "3.13.0";
let ki = qu;
V.registerPlugin(X, ki);
const rm = l(() => {
    document.querySelectorAll("[list-enter='wrap']").forEach((e) => {
      e.querySelectorAll("[list-enter='item']").forEach((i) => {
        const r = i.querySelector("[list-enter='icon']"),
          n = i.querySelector("[list-enter='text']"),
          a = i.querySelector("[list-enter='line']"),
          o = new ki(n, { type: "lines", linesClass: "split-line" });
        o.lines.forEach((c) => {
          const u = document.createElement("div");
          u.classList.add("line-wrapper"),
            (u.style.overflow = "hidden"),
            c.parentNode.insertBefore(u, c),
            u.appendChild(c);
        }),
          i.querySelectorAll(".line-wrapper"),
          V.set(a, { transformOrigin: "left" }),
          V.timeline({
            scrollTrigger: {
              trigger: i,
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play none none reverse",
              markers: !1,
            },
          })
            .from(r, {
              opacity: 0,
              scale: 0,
              rotate: 90,
              duration: 3,
              ease: "expo.out",
            })
            .from(
              o.lines,
              {
                yPercent: 120,
                opacity: 0,
                rotateZ: 2,
                rotateY: 20,
                rotateX: 5,
                duration: 3,
                ease: "expo.out",
                stagger: 0.08,
              },
              "<"
            )
            .from(
              a,
              { scaleX: 0, duration: 3.4, ease: "expo.out", stagger: 0.05 },
              "<"
            );
      });
    });
  }, "listEnter"),
  sm = l(() => {
    rm();
  }, "initListEnter"),
  nm = l(() => {
    document.querySelectorAll("[hero-text-swap]").forEach((e) => {
      const t = e.textContent.trim(),
        i = e.getAttribute("data-alt");
      if (!i) return;
      const r = [t, ...i.split("|").map((f) => f.trim())],
        a = l((f) => {
          if (f.length === 0) return "";
          let p = "";
          const v = Math.min(...f.map((w) => w.length));
          for (let w = 0; w < v; w++) {
            const y = f[0][w];
            if (f.every((b) => b[w] === y)) p += y;
            else break;
          }
          const _ = p.lastIndexOf(" ");
          return _ > 0 ? p.substring(0, _ + 1) : "";
        }, "findCommonPrefix")(r),
        o = r.map((f) => f.replace(a, "").trim()),
        c = document.createElement("span");
      (c.textContent = a), (c.style.display = "inline");
      const u = document.createElement("span");
      (u.style.display = "inline-block"),
        (u.style.position = "relative"),
        (u.style.overflow = "hidden"),
        (u.style.verticalAlign = "baseline");
      const d = o.map((f, p) => {
        const v = document.createElement("span");
        return (
          (v.textContent = f),
          (v.style.display = "block"),
          (v.style.position = "absolute"),
          (v.style.top = "0"),
          (v.style.left = "0"),
          (v.style.whiteSpace = "nowrap"),
          (v.style.width = "100%"),
          p === 0
            ? ((v.style.opacity = "1"), (v.style.transform = "translateY(0%)"))
            : ((v.style.opacity = "0"),
              (v.style.transform = "translateY(100%)")),
          v
        );
      });
      (e.innerHTML = ""),
        e.appendChild(c),
        e.appendChild(u),
        d.forEach((f) => u.appendChild(f));
      let m = 0;
      d.forEach((f) => {
        const p = f.style.position,
          v = f.style.opacity;
        (f.style.position = "relative"),
          (f.style.opacity = "1"),
          (f.style.visibility = "visible");
        const _ = f.offsetWidth;
        _ > m && (m = _), (f.style.position = p), (f.style.opacity = v);
      }),
        (u.style.width = m + "px"),
        (u.style.minWidth = m + "px"),
        (u.style.maxWidth = m + "px"),
        (u.style.height = d[0].offsetHeight + "px"),
        (u.style.top = d[0].offsetHeight / 3.8 + "px");
      let g = 0;
      const h = l(() => {
        const f = d[g],
          p = (g + 1) % d.length,
          v = d[p],
          _ = V.timeline();
        _.to(f, { y: "-100%", opacity: 0, duration: 0.4, ease: "power2.in" }),
          _.fromTo(
            v,
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
              onComplete: l(() => {
                (g = p), V.set(f, { y: "100%" }), setTimeout(h, 3e3);
              }, "onComplete"),
            },
            "-=0.2"
          );
      }, "animateText");
      setTimeout(() => h(), 2e3);
    });
  }, "splitTextSwap"),
  am = l(() => {
    nm();
  }, "initHeroTextSwap");
var mi,
  Ho,
  jn,
  Fu,
  Bu,
  Gl,
  uo,
  Vu,
  Wu = l(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Hu = l(function () {
    return mi || (Wu() && (mi = window.gsap) && mi.registerPlugin && mi);
  }, "_getGSAP"),
  om = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  Pa = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"],
  },
  ar = l(function (e) {
    return Math.round(e * 1e4) / 1e4;
  }, "_round"),
  Mi = l(function (e) {
    return parseFloat(e) || 0;
  }, "_parseNum"),
  jl = l(function (e, t) {
    var i = Mi(e);
    return ~e.indexOf("%") ? (i / 100) * t : i;
  }, "_parseSingleVal"),
  yn = l(function (e, t) {
    return Mi(e.getAttribute(t));
  }, "_getAttributeAsNumber"),
  kn = Math.sqrt,
  Ul = l(function (e, t, i, r, n, a) {
    return kn(
      Math.pow((Mi(i) - Mi(e)) * n, 2) + Math.pow((Mi(r) - Mi(t)) * a, 2)
    );
  }, "_getDistance"),
  Kl = l(function (e) {}, "_warn"),
  Yu = l(function (e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke";
  }, "_hasNonScalingStroke"),
  lm = 1,
  cm = l(function (e, t, i) {
    var r = e.indexOf(" "),
      n,
      a;
    return (
      r < 0
        ? ((n = i !== void 0 ? i + "" : e), (a = e))
        : ((n = e.substr(0, r)), (a = e.substr(r + 1))),
      (n = jl(n, t)),
      (a = jl(a, t)),
      n > a ? [a, n] : [n, a]
    );
  }, "_parse"),
  Ln = l(function (e) {
    if (((e = Ho(e)[0]), !e)) return 0;
    var t = e.tagName.toLowerCase(),
      i = e.style,
      r = 1,
      n = 1,
      a,
      o,
      c,
      u,
      d,
      m,
      g;
    Yu(e) &&
      ((n = e.getScreenCTM()),
      (r = kn(n.a * n.a + n.b * n.b)),
      (n = kn(n.d * n.d + n.c * n.c)));
    try {
      o = e.getBBox();
    } catch {
      Kl(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var h = o || { x: 0, y: 0, width: 0, height: 0 },
      f = h.x,
      p = h.y,
      v = h.width,
      _ = h.height;
    if (
      ((!o || (!v && !_)) &&
        Pa[t] &&
        ((v = yn(e, Pa[t][0])),
        (_ = yn(e, Pa[t][1])),
        t !== "rect" && t !== "line" && ((v *= 2), (_ *= 2)),
        t === "line" &&
          ((f = yn(e, "x1")),
          (p = yn(e, "y1")),
          (v = Math.abs(v - f)),
          (_ = Math.abs(_ - p)))),
      t === "path")
    )
      (u = i.strokeDasharray),
        (i.strokeDasharray = "none"),
        (a = e.getTotalLength() || 0),
        ar(r) !== ar(n) &&
          !Gl &&
          (Gl = 1) &&
          Kl(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (a *= (r + n) / 2),
        (i.strokeDasharray = u);
    else if (t === "rect") a = v * 2 * r + _ * 2 * n;
    else if (t === "line") a = Ul(f, p, f + v, p + _, r, n);
    else if (t === "polyline" || t === "polygon")
      for (
        c = e.getAttribute("points").match(om) || [],
          t === "polygon" && c.push(c[0], c[1]),
          a = 0,
          d = 2;
        d < c.length;
        d += 2
      )
        a += Ul(c[d - 2], c[d - 1], c[d], c[d + 1], r, n) || 0;
    else
      (t === "circle" || t === "ellipse") &&
        ((m = (v / 2) * r),
        (g = (_ / 2) * n),
        (a = Math.PI * (3 * (m + g) - kn((3 * m + g) * (m + 3 * g)))));
    return a || 0;
  }, "_getLength"),
  Zl = l(function (e, t) {
    if (((e = Ho(e)[0]), !e)) return [0, 0];
    t || (t = Ln(e) + 1);
    var i = jn.getComputedStyle(e),
      r = i.strokeDasharray || "",
      n = Mi(i.strokeDashoffset),
      a = r.indexOf(",");
    return (
      a < 0 && (a = r.indexOf(" ")),
      (r = a < 0 ? t : Mi(r.substr(0, a))),
      r > t && (r = t),
      [-n || 0, r - n || 0]
    );
  }, "_getPosition"),
  Ql = l(function () {
    Wu() &&
      ((jn = window),
      (Bu = mi = Hu()),
      (Ho = mi.utils.toArray),
      (uo = mi.core.getStyleSaver),
      (Vu = mi.core.reverting || function () {}),
      (Fu = ((jn.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
  }, "_initCore"),
  Xu = {
    version: "3.13.0",
    name: "drawSVG",
    register: l(function (e) {
      (mi = e), Ql();
    }, "register"),
    init: l(function (e, t, i, r, n) {
      if (!e.getBBox) return !1;
      Bu || Ql();
      var a = Ln(e),
        o,
        c,
        u;
      return (
        (this.styles =
          uo && uo(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
        (this.tween = i),
        (this._style = e.style),
        (this._target = e),
        t + "" == "true"
          ? (t = "0 100%")
          : t
          ? (t + "").indexOf(" ") === -1 && (t = "0 " + t)
          : (t = "0 0"),
        (o = Zl(e, a)),
        (c = cm(t, a, o[0])),
        (this._length = ar(a)),
        (this._dash = ar(o[1] - o[0])),
        (this._offset = ar(-o[0])),
        (this._dashPT = this.add(
          this,
          "_dash",
          this._dash,
          ar(c[1] - c[0]),
          0,
          0,
          0,
          0,
          0,
          1
        )),
        (this._offsetPT = this.add(
          this,
          "_offset",
          this._offset,
          ar(-c[0]),
          0,
          0,
          0,
          0,
          0,
          1
        )),
        Fu &&
          ((u = jn.getComputedStyle(e)),
          u.strokeLinecap !== u.strokeLinejoin &&
            ((c = Mi(u.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", c, c + 0.01))),
        (this._live = Yu(e) || ~(t + "").indexOf("live")),
        (this._nowrap = ~(t + "").indexOf("nowrap")),
        this._props.push("drawSVG"),
        lm
      );
    }, "init"),
    render: l(function (e, t) {
      if (t.tween._time || !Vu()) {
        var i = t._pt,
          r = t._style,
          n,
          a,
          o,
          c;
        if (i) {
          for (
            t._live &&
            ((n = Ln(t._target)),
            n !== t._length &&
              ((a = n / t._length),
              (t._length = n),
              t._offsetPT && ((t._offsetPT.s *= a), (t._offsetPT.c *= a)),
              t._dashPT
                ? ((t._dashPT.s *= a), (t._dashPT.c *= a))
                : (t._dash *= a)));
            i;

          )
            i.r(e, i.d), (i = i._next);
          (o = t._dash || (e && e !== 1 && 1e-4) || 0),
            (n = t._length - o + 0.1),
            (c = t._offset),
            o &&
              c &&
              o + Math.abs(c % t._length) > t._length - 0.05 &&
              (c += c < 0 ? 0.005 : -0.005) &&
              (n += 0.005),
            (r.strokeDashoffset = o ? c : c + 0.001),
            (r.strokeDasharray =
              n < 0.1
                ? "none"
                : o
                ? o + "px," + (t._nowrap ? 999999 : n) + "px"
                : "0px, 999999px");
        }
      } else t.styles.revert();
    }, "render"),
    getLength: Ln,
    getPosition: Zl,
  };
Hu() && mi.registerPlugin(Xu);
V.registerPlugin(Xu);
const Jl = "pageLoadAnimationPlayed",
  um = l(() => {
    const s = document.querySelector("[page-load='component']");
    document.querySelector("[page-load='contain']");
    const e = document.querySelector("[page-load='overlay']"),
      t = document.querySelector("[page-load='svg-visual-wrap']"),
      i = document.querySelector("[page-load='svg-sm']"),
      r = document.querySelector("[page-load='svg-path-solid']"),
      n = document.querySelector("[page-load='svg-path-faded']"),
      a = document.querySelector("[page-load='svg-line']"),
      o = Qt();
    o && o.scrollTo(0, 0),
      V.set(a, { rotate: 120 }),
      V.set(i, { opacity: 0, rotate: 120 }),
      V.set(r, { opacity: 0, scale: 0.4, x: 150, y: -150 }),
      V.set(n, { opacity: 0, scale: 0.4, x: -150, y: 150 });
    const c = V.timeline();
    return (
      c.to(e, { duration: 0.8, opacity: 0, ease: "power2.inOut" }),
      c.to(t, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "<"),
      c.to(
        a,
        { duration: 1.8, opacity: 1, rotate: 0, ease: "expo.inOut" },
        "-=1.2"
      ),
      c.to(
        i,
        { duration: 1.8, opacity: 1, rotate: 0, ease: "expo.inOut" },
        "-=1.6"
      ),
      c.to(
        r,
        {
          duration: 1.8,
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          ease: "expo.inOut",
        },
        "-=1.8"
      ),
      c.to(
        n,
        {
          duration: 1.8,
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          ease: "expo.inOut",
        },
        "<"
      ),
      c.to(i, { duration: 1.2, scale: 0, rotate: 120, ease: "expo.inOut" }),
      c.to(
        a.querySelector("path"),
        { duration: 3.2, drawSVG: 0, stagger: 0.1, ease: "expo.inOut" },
        "-=2.8"
      ),
      c.to(
        s,
        {
          duration: 0.8,
          opacity: 0,
          pointerEvents: "none",
          ease: "power2.inOut",
          onComplete: l(() => {
            s.style.display = "none";
          }, "onComplete"),
        },
        "-=1.0"
      ),
      c
    );
  }, "pageLoad"),
  dm = l(() => {
    const s = document.querySelector("[page-load='component']");
    document.querySelector("[page-load='contain']");
    const e = document.querySelector("[page-load='overlay']");
    document.querySelector("[page-load='svg-visual-wrap']");
    const t = document.querySelector("[page-load='svg-sm']"),
      i = document.querySelector("[page-load='svg-path-solid']"),
      r = document.querySelector("[page-load='svg-path-faded']"),
      n = document.querySelector("[page-load='svg-line']"),
      a = Qt();
    a && a.scrollTo(0, 0),
      V.set(n, { rotate: 120 }),
      V.set(t, { opacity: 0, rotate: 120 }),
      V.set(i, { opacity: 0, scale: 0.4, x: 150, y: -150 }),
      V.set(r, { opacity: 0, scale: 0.4, x: -150, y: 150 });
    const o = V.timeline();
    return (
      o.to(e, { duration: 1, opacity: 0, ease: "power2.inOut" }),
      o.to(
        n.querySelector("path"),
        { duration: 3, drawSVG: 0, stagger: 0.1, ease: "expo.inOut" },
        "-=2.6"
      ),
      o.to(
        s,
        {
          duration: 1,
          opacity: 0,
          pointerEvents: "none",
          ease: "power2.inOut",
          onComplete: l(() => {
            s.style.display = "none";
          }, "onComplete"),
        },
        "-=1.4"
      ),
      o
    );
  }, "pageLoadFast"),
  fm = l(
    () =>
      sessionStorage.getItem(Jl)
        ? dm()
        : (sessionStorage.setItem(Jl, "true"), um()),
    "initPageLoad"
  ),
  pm = l(() => {
    document.querySelectorAll("[work-accordion='component']").forEach((e) => {
      const t = e.querySelector("[work-accordion='trigger']"),
        i = t.querySelector("[work-accordion='title']"),
        r = t.querySelector("[work-accordion='open-text']"),
        n = t.querySelector("[work-accordion='close-text']"),
        a = t.querySelector("[work-accordion='icon']"),
        o = t.querySelector("[work-accordion='line']"),
        c = e.querySelector("[work-accordion='content']"),
        u = c.querySelector("[work-accordion='content-layout']"),
        d = u.offsetHeight;
      let m = !1;
      V.set(u, { opacity: 0, yPercent: 5 }),
        t.addEventListener("click", () => {
          const g = V.timeline();
          m
            ? (g.to(c, { height: 0, duration: 0.9, ease: "expo.inOut" }),
              g.to(
                u,
                { opacity: 0, yPercent: 5, duration: 1, ease: "expo.inOut" },
                "<"
              ),
              g.to(o, { scaleX: 0, duration: 0.9, ease: "expo.inOut" }, "<"),
              g.to(a, { rotate: 0, duration: 0.9, ease: "expo.inOut" }, "<"),
              g.to(i, { opacity: 1, duration: 0.9, ease: "expo.inOut" }, "<"),
              g.to(r, { yPercent: 0, duration: 0.9, ease: "expo.inOut" }, "<"),
              g.to(
                n,
                { yPercent: 100, duration: 0.9, ease: "expo.inOut" },
                "<"
              ))
            : (g.to(o, { scaleX: 1, duration: 1.5, ease: "expo.inOut" }),
              g.to(a, { rotate: 45, duration: 1, ease: "expo.inOut" }, "<"),
              g.to(i, { opacity: 0.5, duration: 1, ease: "expo.inOut" }, "<"),
              g.to(
                r,
                { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
                "<"
              ),
              g.to(
                n,
                { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
                "<"
              ),
              g.to(
                u,
                { opacity: 1, yPercent: 0, duration: 1.2, ease: "expo.inOut" },
                "<"
              ),
              g.to(c, { height: d, duration: 1.2, ease: "expo.inOut" }, "<")),
            (m = !m);
        });
    });
  }, "workAccordion"),
  Gu = l(() => {
    pm();
  }, "initWorkAccordion"),
  hm = l(() => {
    fm(), Ks(), Qs(), Js(), qh(), $u(), Jh(), sm(), am(), Gu();
  }, "homeInit"),
  mm = l(() => {
    const s = document.querySelectorAll('[team-modal="open-trigger"]'),
      e = document.querySelectorAll('[team-modal="modal"]');
    !s ||
      !e ||
      e.forEach((t) => {
        const i = t.getAttribute("modal-name"),
          r = t.querySelector('[team-modal="component"]'),
          n = t.querySelector('[team-modal="top-wrap"]'),
          a = t.querySelector('[team-modal="main-info"]'),
          o = t.querySelector('[team-modal="sec-info"]'),
          c = t.querySelectorAll('[team-modal="close-trigger"]');
        if (!r || !n || !a || !o || !i) return;
        const u = document.querySelector(
          `[modal-trigger-name="${i}"][team-modal="open-trigger"]`
        );
        if (!u) return;
        V.set(t, {
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
          display: "none",
        }),
          V.set(r, { clipPath: "inset(0% 0% 0% 100%)" }),
          V.set([n, a, o], { y: 100, opacity: 0, filter: "blur(5px)" });
        const d = V.timeline({ paused: !0 }),
          m = V.timeline({ paused: !0 });
        d.to(t, {
          opacity: 1,
          pointerEvents: "auto",
          visibility: "visible",
          display: "block",
          ease: "expo.out",
          duration: 0.6,
        }),
          d.to(
            r,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "expo.inOut",
              duration: 1.2,
            },
            "-=0.75"
          ),
          d.to(
            [n, a, o],
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              ease: "expo.out",
              duration: 1.2,
              stagger: 0.14,
            },
            "-=0.4"
          ),
          m.to([n, a, o], {
            y: 100,
            opacity: 0,
            filter: "blur(5px)",
            ease: "expo.out",
            duration: 0.8,
            stagger: -0.14,
          }),
          m.to(
            r,
            {
              clipPath: "inset(0% 0% 0% 100%)",
              ease: "expo.inOut",
              duration: 1,
            },
            "-=0.8"
          ),
          m.to(
            t,
            {
              opacity: 0,
              ease: "expo.in",
              duration: 0.8,
              pointerEvents: "none",
              onComplete: l(() => {
                (t.style.visibility = "hidden"),
                  (t.style.display = "none"),
                  (t.style.pointerEvents = "none");
              }, "onComplete"),
            },
            "<"
          ),
          u.addEventListener("click", (g) => {
            g.preventDefault(), d.restart();
            const h = Qt();
            h && h.stop();
          }),
          c.forEach((g) => {
            g.addEventListener("click", (h) => {
              h.preventDefault(), m.restart();
              const f = Qt();
              f && f.start();
            });
          });
      });
  }, "teamModal"),
  gm = l(() => {
    mm();
  }, "initTeamModal");
V.registerPlugin(X);
const vm = l(() => {
    document.querySelectorAll("[about-list='layout']").forEach((e) => {
      const t = e.querySelectorAll("[about-list='item']");
      V.utils.selector(e),
        t.forEach((i, r) => {
          const n = i.querySelector("[about-list='content']"),
            a = i.querySelector("[about-list='inner-line']");
          V.set(n, { opacity: 0.4 }),
            V.set(a, { scaleX: 0, transformOrigin: "left center" });
          const o = 85 - r * 20,
            c = 40 - r * 20;
          V.to(n, {
            opacity: 1,
            scrollTrigger: {
              trigger: i,
              start: `top ${o}%`,
              end: `top ${c}%`,
              scrub: !0,
              markers: !1,
            },
          }),
            V.to(a, {
              scaleX: 1,
              transformOrigin: "left center",
              scrollTrigger: {
                trigger: i,
                start: `top ${o}%`,
                end: `top ${c}%`,
                scrub: !0,
                markers: !1,
              },
            });
        });
    });
  }, "AboutList"),
  ym = l(() => {
    vm();
  }, "initAboutList");
V.registerPlugin(X, ki);
const wm = l(() => {
    document.querySelectorAll("[rollover-text='wrap']").forEach((e) => {
      const t = e.querySelector("[rollover-text='wrap-rel']"),
        i = t?.querySelector("[rollover-text='text-rel']"),
        r = e.querySelector("[rollover-text='wrap-ab']"),
        n = r?.querySelector("[rollover-text='text-ab']");
      if (!t || !i || !r || !n) return;
      const a = new ki(i, { type: "chars" }),
        o = new ki(n, { type: "chars" }),
        c = 1.8,
        u = "expo.inOut",
        d = 0.08,
        m = -100,
        g = 0;
      V.set(t, { yPercent: 0 }),
        V.set(r, { yPercent: 0 }),
        V.set(a.chars, { yPercent: 0 }),
        V.set(o.chars, { yPercent: 100 });
      const h = V.timeline({
        scrollTrigger: {
          trigger: e,
          markers: !1,
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      });
      h.to(a.chars, { yPercent: m, ease: u, duration: c, stagger: d }, 0),
        h.to(o.chars, { yPercent: g, ease: u, duration: c, stagger: d }, 0);
    });
  }, "RolloverText"),
  _m = l(() => {
    wm();
  }, "initRolloverText"),
  bm = l(() => {
    const s = document.querySelector("[page-fade='component']"),
      e = V.timeline();
    return (
      e.to(s, {
        duration: 0.5,
        backdropFilter: "blur(0px)",
        backgroundColor: "rgba(0, 0, 0, 0)",
        ease: "expo.inOut",
        onComplete: l(() => {
          s.style.display = "none";
        }, "onComplete"),
      }),
      e
    );
  }, "pageFade"),
  ia = l(() => {
    bm();
  }, "initPageFade"),
  Sm = l(() => {
    ia(), Ks(), Qs(), Js(), gm(), ym(), _m(), $u();
  }, "aboutInit"),
  ju = l((s) => document.querySelector(s), "queryElement"),
  xm = l((s) => document.querySelectorAll(s), "queryElements"),
  Tm = l((s, e) => s.classList.add(e), "addClass"),
  Em = l(() => {
    const s = ju(".contact-form");
    s &&
      s.addEventListener("submit", (e) => {
        e.preventDefault();
      });
  }, "contactInit"),
  Cm = l(() => {
    document.querySelectorAll('[filter-list="group"]').forEach((e) => {
      const t = e.querySelector('[filter-item="current"]'),
        i = e.querySelector("[list-filter='toggle']"),
        r = e.querySelector("[list-filter='dropdown-wrap']"),
        n = e.querySelectorAll("[list-filter='dropdown-option']"),
        a = e.querySelectorAll("[list-filter='target-item']"),
        o = 300,
        c = new Set(),
        u = l((f, p) => {
          f.setAttribute("filter-status", p);
        }, "setStatus"),
        d = l((f) => {
          const p = f.querySelectorAll("[filter-name]");
          return Array.from(p).map((v) =>
            v.getAttribute("filter-name")?.toLowerCase()
          );
        }, "getItemFilterNames"),
        m = l((f) => {
          const p = f.toLowerCase();
          u(i, "not-active"),
            u(r, "not-active"),
            n.forEach((y) => {
              const b = y.getAttribute("filter-target") === f;
              u(y, b ? "active" : "not-active");
            });
          const v = e.querySelector(`[filter-target="${f}"]`);
          v && (t.textContent = v.textContent);
          let _ = 0,
            w = 0;
          a.forEach((y) => {
            y.getAttribute("filter-status") === "active" &&
              (_++,
              c.add(y),
              u(y, "transition-out"),
              setTimeout(() => {
                y.getAttribute("filter-status") === "transition-out" &&
                  (u(y, "not-active"),
                  c.delete(y),
                  w++,
                  w === _ &&
                    a.forEach((S) => {
                      const x = d(S);
                      (p === "all" || x.includes(p)) &&
                        (c.add(S),
                        u(S, "transition-in"),
                        setTimeout(() => {
                          S.getAttribute("filter-status") === "transition-in" &&
                            u(S, "active"),
                            c.delete(S);
                        }, o));
                    }));
              }, o));
          }),
            _ === 0 &&
              a.forEach((y) => {
                const b = d(y);
                (p === "all" || b.includes(p)) &&
                  y.getAttribute("filter-status") === "not-active" &&
                  (c.add(y),
                  u(y, "transition-in"),
                  setTimeout(() => {
                    y.getAttribute("filter-status") === "transition-in" &&
                      u(y, "active"),
                      c.delete(y);
                  }, o));
              });
        }, "handleSelect"),
        g = "all";
      a.forEach((f) => {
        d(f), u(f, "active");
      }),
        n.forEach((f) => {
          const p = f.getAttribute("filter-target") === g;
          u(f, p ? "active" : "not-active");
        }),
        u(i, "not-active"),
        u(r, "not-active"),
        i.addEventListener("click", () => {
          const f = i.getAttribute("filter-status") === "active";
          u(i, f ? "not-active" : "active"), u(r, f ? "not-active" : "active");
        }),
        n.forEach((f) => {
          f.addEventListener("click", () => {
            const p = f.getAttribute("filter-target");
            f.getAttribute("filter-status") !== "active" && m(p);
          });
        });
      const h = e.querySelector(`[filter-target="${g}"]`);
      h && (t.textContent = h.textContent);
    });
  }, "dropdownFilter"),
  Mm = l(() => {
    Cm();
  }, "initDropdownFilter"),
  Pm = l(() => {
    ia(), Ks(), Qs(), Js(), Mm();
  }, "workInit");
V.registerPlugin(X);
const Aa = l(() => {
    const s = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (s) return;
    const e = document.querySelectorAll('[hero-parallax-sm="visual"]'),
      t = document.querySelector('[hero-parallax-sm="header"]');
    if (!e.length && !t) return;
    const i = Qt?.();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (
        (X.defaults({ scroller: i ? i.wrapper : void 0 }),
        e.forEach((n) => {
          const a = parseFloat(n.getAttribute("parallax-speed")) || 0.6,
            o = s ? a * 0.3 : a,
            c = s ? 1.1 : 1.2;
          V.set(n, {
            force3D: !0,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }),
            V.fromTo(
              n,
              { yPercent: 0, scale: 1, filter: "none" },
              {
                yPercent: -o * 100,
                scale: c,
                filter: "none",
                ease: "none",
                scrollTrigger: {
                  trigger: n.parentElement,
                  start: "top top",
                  end: "bottom top",
                  scrub: s ? 0.5 : !0,
                  invalidateOnRefresh: !0,
                  refreshPriority: -1,
                  disable: l(
                    () => window.innerWidth < 480 && window.innerHeight < 600,
                    "disable"
                  ),
                },
              }
            );
        }),
        t)
      ) {
        const n = parseFloat(t.getAttribute("parallax-speed")) || 3.5,
          a = s ? n * 0.5 : n,
          o = s ? 0.95 : 0.9;
        V.set(t, {
          force3D: !0,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }),
          V.fromTo(
            t,
            { yPercent: 0, scale: 1 },
            {
              yPercent: -a * 100,
              scale: o,
              ease: "none",
              scrollTrigger: {
                trigger: e[0]?.parentElement || t.parentElement,
                start: "top top",
                end: "bottom top",
                scrub: s ? 0.5 : !0,
                invalidateOnRefresh: !0,
                refreshPriority: -1,
                disable: l(
                  () => window.innerWidth < 480 && window.innerHeight < 600,
                  "disable"
                ),
              },
            }
          );
      }
      if (isIOS) {
        const n = l(() => {
          setTimeout(() => {
            X.refresh();
          }, 500);
        }, "handleOrientationChange");
        return (
          window.addEventListener("orientationchange", n),
          () => {
            window.removeEventListener("orientationchange", n);
          }
        );
      }
    }
  }, "heroParallaxSm"),
  Am = l(() => {
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", () => {
            setTimeout(Aa, 100);
          })
        : setTimeout(Aa, 100)
      : Aa();
  }, "initHeroParallaxSm"),
  Om = l(() => {
    ia(), Ks(), Qs(), Js(), Am();
  }, "blogcmsInit"),
  km = l(() => {
    ia(), Ks(), Qs(), Js(), Gu();
  }, "workcmsInit"),
  Lm = {
    home: hm,
    about: Sm,
    contact: Em,
    work: Pm,
    blog_cms: Om,
    work_cms: km,
  },
  Im = l(() => {
    const s = document.querySelector("[data-page]"),
      e = s ? s.dataset.page : null,
      t = Lm[e];
    t && t();
  }, "PageRouter"),
  Dm = l(() => {
    xm(".footer-accordion").forEach((e) => {
      const t = e.querySelector(".accordion-trigger"),
        i = e.querySelector(".accordion-content");
      !t ||
        !i ||
        t.addEventListener("click", () => {
          i.style.height = i.style.height ? "" : `${i.scrollHeight}px`;
        });
    });
  }, "footerInit"),
  zm = l(() => {
    const s = {
      arrow3: { start: "-100%", show: "300%", out: "600%" },
      arrow2: { start: "-100%", show: "200%", out: "500%" },
      arrow1: { start: "-100%", show: "100%", out: "400%" },
    };
    document.querySelectorAll("[cta-arrow-group]").forEach((t) => {
      const i = [
        { ab: t.querySelector('[cta-arrow="icon-3-ab"]'), positions: s.arrow3 },
        { ab: t.querySelector('[cta-arrow="icon-2-ab"]'), positions: s.arrow2 },
        { ab: t.querySelector('[cta-arrow="icon-1-ab"]'), positions: s.arrow1 },
      ].filter(({ ab: n }) => n);
      if (i.length === 0) return;
      const r = V.timeline({
        repeat: -1,
        defaults: { duration: 1, ease: "expo.out" },
      });
      r.set(
        i.map(({ ab: n }) => n),
        { x: "-100%", opacity: 0 }
      ),
        r.to(
          i.map(({ ab: n }) => n),
          { x: l((n) => i[n].positions.show, "x"), opacity: 1, stagger: 0.15 }
        ),
        r.to({}, { duration: 0.5 }),
        r.to(
          i.map(({ ab: n }) => n),
          { x: l((n) => i[n].positions.out, "x"), opacity: 0, stagger: 0.1 }
        ),
        r.to({}, { duration: 0 });
    });
  }, "initCtaArrow");
V.registerPlugin(X);
const Rm = l(() => {
    const s = document.querySelector('[nav-link="list"]'),
      e = document.querySelectorAll('[nav-link="item"]'),
      t = document.querySelector("[page='hero']");
    let i = [],
      r = [],
      n = [];
    const a = l(() => {
      i.forEach((c) => c.kill()),
        (i = []),
        (r = []),
        (n = []),
        s.setAttribute("nav-state", "list"),
        e.forEach((c, u) => {
          const d = c.querySelector('[nav-link="text"]'),
            m = c.querySelector('[nav-link="text-wrap"]'),
            g = c.querySelector('[nav-link="line"]');
          r.push(d), n.push(g);
          const h = document.querySelector('[line-top][nav-link="line"]'),
            f = document.querySelector('[line-middle][nav-link="line"]'),
            p = document.querySelector('[line-bottom][nav-link="line"]'),
            v = m.offsetHeight;
          if (!d || !m) return;
          V.set(d, { clearProps: "all" }),
            V.set(m, { clearProps: "all" }),
            V.set(c, { clearProps: "all" }),
            V.set(g, { clearProps: "all" }),
            V.set(h, { clearProps: "all" }),
            V.set(f, { clearProps: "all" }),
            V.set(p, { clearProps: "all" });
          const _ = l(() => {
              s.setAttribute("nav-state", "hamburger"),
                V.to(e, { pointerEvents: "none" }),
                V.to(r, {
                  y: "150%",
                  ease: "expo.out",
                  opacity: 0,
                  duration: 0.8,
                  stagger: 0.001,
                  overwrite: !0,
                }),
                V.to([h, f, p], {
                  scaleX: 0.1,
                  ease: "expo.out",
                  duration: 1,
                  overwrite: !0,
                  stagger: 0.0016,
                }),
                V.to(h, { y: -v + 14, ease: "expo.out", duration: 0.9 }),
                V.to(f, { y: -v - 10, ease: "expo.out", duration: 0.9 }),
                V.to(p, { y: -v - 34, ease: "expo.out", duration: 0.9 });
            }, "leavingHero"),
            w = l(() => {
              s.setAttribute("nav-state", "list"),
                V.to(e, { pointerEvents: "auto" }),
                V.to([h, f, p], {
                  scaleX: 1,
                  ease: "expo.out",
                  duration: 0.8,
                  overwrite: !0,
                  stagger: 0.0016,
                }),
                V.to(h, { y: 0, ease: "expo.out", duration: 0.8 }),
                V.to(f, { y: 0, ease: "expo.out", duration: 0.8 }),
                V.to(p, { y: 0, ease: "expo.out", duration: 0.8 }),
                V.to(
                  r,
                  {
                    y: "0%",
                    ease: "expo.out",
                    duration: 1,
                    opacity: 1,
                    stagger: 0.08,
                    overwrite: !0,
                  },
                  "-=0.7"
                );
            }, "enteringHero"),
            y = X.create({
              trigger: t,
              start: "bottom 80%",
              onEnter: _,
              onLeaveBack: w,
              markers: !1,
            });
          i.push(y);
        });
    }, "initializeNavLinks");
    a();
    let o;
    return (
      window.addEventListener("resize", () => {
        clearTimeout(o),
          (o = setTimeout(() => {
            a();
          }, 250));
      }),
      () => {
        clearTimeout(o),
          i.forEach((c) => c.kill()),
          window.removeEventListener("resize", a);
      }
    );
  }, "navLink"),
  $m = l(() => Rm(), "initNavLink"),
  Nm = l(() => {
    const s = document.querySelectorAll('[nav-menu="open-trigger"]'),
      e = document.querySelectorAll('[nav-menu="close-trigger"]'),
      t = document.querySelector('[nav-menu="component"]'),
      i = document.querySelectorAll('[nav-menu="link-item"]'),
      r = document.querySelectorAll('[nav-menu="eyebrow"]'),
      n = document.querySelector('[nav-link="list"]');
    if (!s || !e || !t || !i || !r || !n) return;
    V.set(t, { clipPath: "inset(0% 0% 100% 0%)" }),
      V.set([i, r], { y: "100%", opacity: 0 }),
      V.set(e, { opacity: 0, scale: 0 });
    const a = V.timeline({ paused: !0 }),
      o = V.timeline({ paused: !0 });
    a.to(t, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "expo.inOut",
      duration: 1,
    }),
      a.to(
        i,
        { y: "0%", opacity: 1, ease: "expo.out", duration: 1, stagger: 0.08 },
        "-=0.6"
      ),
      a.to(e, { opacity: 1, scale: 1, ease: "expo.out", duration: 0.5 }, "<"),
      a.to(n, { opacity: 0, ease: "expo.out", duration: 0.5 }, "<"),
      a.to(
        r,
        { y: "0%", opacity: 1, ease: "expo.out", duration: 1, stagger: 0.06 },
        "-=0.8"
      ),
      o.to(r, {
        y: "100%",
        opacity: 0,
        ease: "expo.in",
        duration: 0.5,
        stagger: 0.06,
      }),
      o.to(
        i,
        {
          y: "100%",
          opacity: 0,
          ease: "expo.in",
          duration: 0.5,
          stagger: 0.06,
        },
        "<"
      ),
      o.to(e, { opacity: 0, scale: 0, ease: "expo.in", duration: 0.5 }, "<"),
      o.to(n, { opacity: 1, ease: "expo.in", duration: 0.5 }, "<"),
      o.to(
        t,
        { clipPath: "inset(0% 0% 100% 0%)", ease: "expo.inOut", duration: 0.7 },
        "-=0.6"
      ),
      s.forEach((c) => {
        c.addEventListener("click", () => {
          a.restart();
          const u = Qt();
          u && u.stop();
        });
      }),
      e.forEach((c) => {
        c.addEventListener("click", () => {
          o.restart();
          const u = Qt();
          u && u.start();
        });
      });
  }, "navMenu"),
  qm = l(() => {
    Nm();
  }, "initNavMenu");
V.registerPlugin(X);
const Fm = l(() => {
    const s = document.querySelectorAll("[visual-parallax]");
    if (!s.length) return;
    const e = Qt?.();
    X.defaults({ scroller: e ? e?.wrapper : void 0 }),
      s.forEach((t) => {
        const i = parseFloat(t.getAttribute("parallax-speed")) || 0.1;
        V.fromTo(
          t,
          { yPercent: 0 },
          {
            yPercent: -i * 100,
            ease: "none",
            scrollTrigger: {
              trigger: t,
              start: "top bottom",
              end: "bottom top",
              scrub: !0,
              invalidateOnRefresh: !0,
            },
          }
        );
      });
  }, "visualParallax"),
  Bm = l(() => {
    Fm();
  }, "initVisualParallax");
(function () {
  function s() {
    for (var i = arguments.length, r = 0; r < i; r++) {
      var n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
      n.nodeType === 1 || n.nodeType === 11
        ? this.appendChild(n)
        : this.appendChild(document.createTextNode(String(n)));
    }
  }
  l(s, "append");
  function e() {
    for (; this.lastChild; ) this.removeChild(this.lastChild);
    arguments.length && this.append.apply(this, arguments);
  }
  l(e, "replaceChildren");
  function t() {
    for (
      var i = this.parentNode, r = arguments.length, n = new Array(r), a = 0;
      a < r;
      a++
    )
      n[a] = arguments[a];
    var o = n.length;
    if (i)
      for (o || i.removeChild(this); o--; ) {
        var c = n[o];
        typeof c != "object"
          ? (c = this.ownerDocument.createTextNode(c))
          : c.parentNode && c.parentNode.removeChild(c),
          o ? i.insertBefore(this.previousSibling, c) : i.replaceChild(c, this);
      }
  }
  l(t, "replaceWith"),
    typeof Element < "u" &&
      (Element.prototype.append ||
        ((Element.prototype.append = s),
        (DocumentFragment.prototype.append = s)),
      Element.prototype.replaceChildren ||
        ((Element.prototype.replaceChildren = e),
        (DocumentFragment.prototype.replaceChildren = e)),
      Element.prototype.replaceWith ||
        ((Element.prototype.replaceWith = t),
        (DocumentFragment.prototype.replaceWith = t)));
})();
function Vm(s, e) {
  if (!(s instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
l(Vm, "_classCallCheck");
function ec(s, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(s, i.key, i);
  }
}
l(ec, "_defineProperties");
function tc(s, e, t) {
  return e && ec(s.prototype, e), t && ec(s, t), s;
}
l(tc, "_createClass");
function Wm(s, e, t) {
  return (
    e in s
      ? Object.defineProperty(s, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[e] = t),
    s
  );
}
l(Wm, "_defineProperty");
function ic(s, e) {
  var t = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(s);
    e &&
      (i = i.filter(function (r) {
        return Object.getOwnPropertyDescriptor(s, r).enumerable;
      })),
      t.push.apply(t, i);
  }
  return t;
}
l(ic, "ownKeys");
function rc(s) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ic(Object(t), !0).forEach(function (i) {
          Wm(s, i, t[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
      : ic(Object(t)).forEach(function (i) {
          Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(t, i));
        });
  }
  return s;
}
l(rc, "_objectSpread2");
function Uu(s, e) {
  return Ym(s) || Gm(s, e) || Ku(s, e) || Um();
}
l(Uu, "_slicedToArray");
function vt(s) {
  return Hm(s) || Xm(s) || Ku(s) || jm();
}
l(vt, "_toConsumableArray");
function Hm(s) {
  if (Array.isArray(s)) return fo(s);
}
l(Hm, "_arrayWithoutHoles");
function Ym(s) {
  if (Array.isArray(s)) return s;
}
l(Ym, "_arrayWithHoles");
function Xm(s) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(s)) return Array.from(s);
}
l(Xm, "_iterableToArray");
function Gm(s, e) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
    var t = [],
      i = !0,
      r = !1,
      n = void 0;
    try {
      for (
        var a = s[Symbol.iterator](), o;
        !(i = (o = a.next()).done) && (t.push(o.value), t.length !== e);
        i = !0
      );
    } catch (c) {
      (r = !0), (n = c);
    } finally {
      try {
        !i && a.return != null && a.return();
      } finally {
        if (r) throw n;
      }
    }
    return t;
  }
}
l(Gm, "_iterableToArrayLimit");
function Ku(s, e) {
  if (s) {
    if (typeof s == "string") return fo(s, e);
    var t = Object.prototype.toString.call(s).slice(8, -1);
    if (
      (t === "Object" && s.constructor && (t = s.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(s);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return fo(s, e);
  }
}
l(Ku, "_unsupportedIterableToArray");
function fo(s, e) {
  (e == null || e > s.length) && (e = s.length);
  for (var t = 0, i = new Array(e); t < e; t++) i[t] = s[t];
  return i;
}
l(fo, "_arrayLikeToArray");
function jm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
l(jm, "_nonIterableSpread");
function Um() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
l(Um, "_nonIterableRest");
function cr(s, e) {
  return Object.getOwnPropertyNames(Object(s)).reduce(function (t, i) {
    var r = Object.getOwnPropertyDescriptor(Object(s), i),
      n = Object.getOwnPropertyDescriptor(Object(e), i);
    return Object.defineProperty(t, i, n || r);
  }, {});
}
l(cr, "extend");
function en(s) {
  return typeof s == "string";
}
l(en, "isString");
function Yo(s) {
  return Array.isArray(s);
}
l(Yo, "isArray");
function wn() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = cr(s),
    t;
  return (
    e.types !== void 0 ? (t = e.types) : e.split !== void 0 && (t = e.split),
    t !== void 0 &&
      (e.types = (en(t) || Yo(t) ? String(t) : "")
        .split(",")
        .map(function (i) {
          return String(i).trim();
        })
        .filter(function (i) {
          return /((line)|(word)|(char))/i.test(i);
        })),
    (e.absolute || e.position) &&
      (e.absolute = e.absolute || /absolute/.test(s.position)),
    e
  );
}
l(wn, "parseSettings");
function Xo(s) {
  var e = en(s) || Yo(s) ? String(s) : "";
  return {
    none: !e,
    lines: /line/i.test(e),
    words: /word/i.test(e),
    chars: /char/i.test(e),
  };
}
l(Xo, "parseTypes");
function ra(s) {
  return s !== null && typeof s == "object";
}
l(ra, "isObject");
function Km(s) {
  return ra(s) && /^(1|3|11)$/.test(s.nodeType);
}
l(Km, "isNode");
function Zm(s) {
  return typeof s == "number" && s > -1 && s % 1 === 0;
}
l(Zm, "isLength");
function Qm(s) {
  return ra(s) && Zm(s.length);
}
l(Qm, "isArrayLike");
function Cr(s) {
  return Yo(s)
    ? s
    : s == null
    ? []
    : Qm(s)
    ? Array.prototype.slice.call(s)
    : [s];
}
l(Cr, "toArray");
function sc(s) {
  var e = s;
  return (
    en(s) &&
      (/^(#[a-z]\w+)$/.test(s.trim())
        ? (e = document.getElementById(s.trim().slice(1)))
        : (e = document.querySelectorAll(s))),
    Cr(e).reduce(function (t, i) {
      return [].concat(vt(t), vt(Cr(i).filter(Km)));
    }, [])
  );
}
l(sc, "getTargetElements");
var Jm = Object.entries,
  Un = "_splittype",
  ai = {},
  eg = 0;
function gi(s, e, t) {
  if (!ra(s)) return null;
  var i = s[Un] || (s[Un] = ++eg),
    r = ai[i] || (ai[i] = {});
  return (
    t === void 0
      ? e &&
        Object.getPrototypeOf(e) === Object.prototype &&
        (ai[i] = rc(rc({}, r), e))
      : e !== void 0 && (r[e] = t),
    t
  );
}
l(gi, "set");
function ur(s, e) {
  var t = ra(s) ? s[Un] : null,
    i = (t && ai[t]) || {};
  return i;
}
l(ur, "get");
function Zu(s) {
  var e = s && s[Un];
  e && (delete s[e], delete ai[e]);
}
l(Zu, "remove");
function tg() {
  Object.keys(ai).forEach(function (s) {
    delete ai[s];
  });
}
l(tg, "clear");
function ig() {
  Jm(ai).forEach(function (s) {
    var e = Uu(s, 2),
      t = e[0],
      i = e[1],
      r = i.isRoot,
      n = i.isSplit;
    (!r || !n) && ((ai[t] = null), delete ai[t]);
  });
}
l(ig, "cleanup");
function rg(s) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
    t = s ? String(s) : "";
  return t.trim().replace(/\s+/g, " ").split(e);
}
l(rg, "toWords");
var Go = "\\ud800-\\udfff",
  Qu = "\\u0300-\\u036f\\ufe20-\\ufe23",
  Ju = "\\u20d0-\\u20f0",
  ed = "\\ufe0e\\ufe0f",
  sg = "[".concat(Go, "]"),
  po = "[".concat(Qu).concat(Ju, "]"),
  ho = "\\ud83c[\\udffb-\\udfff]",
  ng = "(?:".concat(po, "|").concat(ho, ")"),
  td = "[^".concat(Go, "]"),
  id = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  rd = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  sd = "\\u200d",
  nd = "".concat(ng, "?"),
  ad = "[".concat(ed, "]?"),
  ag = "(?:" + sd + "(?:" + [td, id, rd].join("|") + ")" + ad + nd + ")*",
  og = ad + nd + ag,
  lg = "(?:".concat(
    ["".concat(td).concat(po, "?"), po, id, rd, sg].join("|"),
    `
)`
  ),
  cg = RegExp("".concat(ho, "(?=").concat(ho, ")|").concat(lg).concat(og), "g"),
  ug = [sd, Go, Qu, Ju, ed],
  dg = RegExp("[".concat(ug.join(""), "]"));
function fg(s) {
  return s.split("");
}
l(fg, "asciiToArray");
function od(s) {
  return dg.test(s);
}
l(od, "hasUnicode");
function pg(s) {
  return s.match(cg) || [];
}
l(pg, "unicodeToArray");
function hg(s) {
  return od(s) ? pg(s) : fg(s);
}
l(hg, "stringToArray");
function mg(s) {
  return s == null ? "" : String(s);
}
l(mg, "toString");
function gg(s) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return (s = mg(s)), s && en(s) && !e && od(s) ? hg(s) : s.split(e);
}
l(gg, "toChars");
function mo(s, e) {
  var t = document.createElement(s);
  return (
    e &&
      Object.keys(e).forEach(function (i) {
        var r = e[i],
          n = en(r) ? r.trim() : r;
        n === null ||
          n === "" ||
          (i === "children"
            ? t.append.apply(t, vt(Cr(n)))
            : t.setAttribute(i, n));
      }),
    t
  );
}
l(mo, "createElement");
var jo = {
  splitClass: "",
  lineClass: "line",
  wordClass: "word",
  charClass: "char",
  types: ["lines", "words", "chars"],
  absolute: !1,
  tagName: "div",
};
function vg(s, e) {
  e = cr(jo, e);
  var t = Xo(e.types),
    i = e.tagName,
    r = s.nodeValue,
    n = document.createDocumentFragment(),
    a = [],
    o = [];
  return (
    /^\s/.test(r) && n.append(" "),
    (a = rg(r).reduce(function (c, u, d, m) {
      var g, h;
      return (
        t.chars &&
          (h = gg(u).map(function (f) {
            var p = mo(i, {
              class: "".concat(e.splitClass, " ").concat(e.charClass),
              style: "display: inline-block;",
              children: f,
            });
            return gi(p, "isChar", !0), (o = [].concat(vt(o), [p])), p;
          })),
        t.words || t.lines
          ? ((g = mo(i, {
              class: "".concat(e.wordClass, " ").concat(e.splitClass),
              style: "display: inline-block; ".concat(
                t.words && e.absolute ? "position: relative;" : ""
              ),
              children: t.chars ? h : u,
            })),
            gi(g, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
            n.appendChild(g))
          : h.forEach(function (f) {
              n.appendChild(f);
            }),
        d < m.length - 1 && n.append(" "),
        t.words ? c.concat(g) : c
      );
    }, [])),
    /\s$/.test(r) && n.append(" "),
    s.replaceWith(n),
    { words: a, chars: o }
  );
}
l(vg, "splitWordsAndChars");
function ld(s, e) {
  var t = s.nodeType,
    i = { words: [], chars: [] };
  if (!/(1|3|11)/.test(t)) return i;
  if (t === 3 && /\S/.test(s.nodeValue)) return vg(s, e);
  var r = Cr(s.childNodes);
  if (r.length && (gi(s, "isSplit", !0), !ur(s).isRoot)) {
    (s.style.display = "inline-block"), (s.style.position = "relative");
    var n = s.nextSibling,
      a = s.previousSibling,
      o = s.textContent || "",
      c = n ? n.textContent : " ",
      u = a ? a.textContent : " ";
    gi(s, {
      isWordEnd: /\s$/.test(o) || /^\s/.test(c),
      isWordStart: /^\s/.test(o) || /\s$/.test(u),
    });
  }
  return r.reduce(function (d, m) {
    var g = ld(m, e),
      h = g.words,
      f = g.chars;
    return {
      words: [].concat(vt(d.words), vt(h)),
      chars: [].concat(vt(d.chars), vt(f)),
    };
  }, i);
}
l(ld, "split");
function yg(s, e, t, i) {
  if (!t.absolute) return { top: e ? s.offsetTop : null };
  var r = s.offsetParent,
    n = Uu(i, 2),
    a = n[0],
    o = n[1],
    c = 0,
    u = 0;
  if (r && r !== document.body) {
    var d = r.getBoundingClientRect();
    (c = d.x + a), (u = d.y + o);
  }
  var m = s.getBoundingClientRect(),
    g = m.width,
    h = m.height,
    f = m.x,
    p = m.y,
    v = p + o - u,
    _ = f + a - c;
  return { width: g, height: h, top: v, left: _ };
}
l(yg, "getPosition");
function cd(s) {
  ur(s).isWord
    ? (Zu(s), s.replaceWith.apply(s, vt(s.childNodes)))
    : Cr(s.children).forEach(function (e) {
        return cd(e);
      });
}
l(cd, "unSplitWords");
var wg = l(function () {
  return document.createDocumentFragment();
}, "createFragment");
function _g(s, e, t) {
  var i = Xo(e.types),
    r = e.tagName,
    n = s.getElementsByTagName("*"),
    a = [],
    o = [],
    c = null,
    u,
    d,
    m,
    g = [],
    h = s.parentElement,
    f = s.nextElementSibling,
    p = wg(),
    v = window.getComputedStyle(s),
    _ = v.textAlign,
    w = parseFloat(v.fontSize),
    y = w * 0.2;
  return (
    e.absolute &&
      ((m = { left: s.offsetLeft, top: s.offsetTop, width: s.offsetWidth }),
      (d = s.offsetWidth),
      (u = s.offsetHeight),
      gi(s, { cssWidth: s.style.width, cssHeight: s.style.height })),
    Cr(n).forEach(function (b) {
      var S = b.parentElement === s,
        x = yg(b, S, e, t),
        T = x.width,
        M = x.height,
        E = x.top,
        C = x.left;
      /^br$/i.test(b.nodeName) ||
        (i.lines &&
          S &&
          ((c === null || E - c >= y) && ((c = E), a.push((o = []))),
          o.push(b)),
        e.absolute && gi(b, { top: E, left: C, width: T, height: M }));
    }),
    h && h.removeChild(s),
    i.lines &&
      ((g = a.map(function (b) {
        var S = mo(r, {
          class: "".concat(e.splitClass, " ").concat(e.lineClass),
          style: "display: block; text-align: ".concat(_, "; width: 100%;"),
        });
        gi(S, "isLine", !0);
        var x = { height: 0, top: 1e4 };
        return (
          p.appendChild(S),
          b.forEach(function (T, M, E) {
            var C = ur(T),
              I = C.isWordEnd,
              A = C.top,
              k = C.height,
              D = E[M + 1];
            (x.height = Math.max(x.height, k)),
              (x.top = Math.min(x.top, A)),
              S.appendChild(T),
              I && ur(D).isWordStart && S.append(" ");
          }),
          e.absolute && gi(S, { height: x.height, top: x.top }),
          S
        );
      })),
      i.words || cd(p),
      s.replaceChildren(p)),
    e.absolute &&
      ((s.style.width = "".concat(s.style.width || d, "px")),
      (s.style.height = "".concat(u, "px")),
      Cr(n).forEach(function (b) {
        var S = ur(b),
          x = S.isLine,
          T = S.top,
          M = S.left,
          E = S.width,
          C = S.height,
          I = ur(b.parentElement),
          A = !x && I.isLine;
        (b.style.top = "".concat(A ? T - I.top : T, "px")),
          (b.style.left = x
            ? "".concat(m.left, "px")
            : "".concat(M - (A ? m.left : 0), "px")),
          (b.style.height = "".concat(C, "px")),
          (b.style.width = x ? "".concat(m.width, "px") : "".concat(E, "px")),
          (b.style.position = "absolute");
      })),
    h && (f ? h.insertBefore(s, f) : h.appendChild(s)),
    g
  );
}
l(_g, "repositionAfterSplit");
var $r = cr(jo, {}),
  bg = (function () {
    tc(s, null, [
      {
        key: "clearData",
        value: l(function () {
          tg();
        }, "clearData"),
      },
      {
        key: "setDefaults",
        value: l(function (t) {
          return ($r = cr($r, wn(t))), jo;
        }, "setDefaults"),
      },
      {
        key: "revert",
        value: l(function (t) {
          sc(t).forEach(function (i) {
            var r = ur(i),
              n = r.isSplit,
              a = r.html,
              o = r.cssWidth,
              c = r.cssHeight;
            n &&
              ((i.innerHTML = a),
              (i.style.width = o || ""),
              (i.style.height = c || ""),
              Zu(i));
          });
        }, "revert"),
      },
      {
        key: "create",
        value: l(function (t, i) {
          return new s(t, i);
        }, "create"),
      },
      {
        key: "data",
        get: l(function () {
          return ai;
        }, "get"),
      },
      {
        key: "defaults",
        get: l(function () {
          return $r;
        }, "get"),
        set: l(function (t) {
          $r = cr($r, wn(t));
        }, "set"),
      },
    ]);
    function s(e, t) {
      Vm(this, s),
        (this.isSplit = !1),
        (this.settings = cr($r, wn(t))),
        (this.elements = sc(e)),
        this.split();
    }
    return (
      l(s, "SplitType"),
      tc(s, [
        {
          key: "split",
          value: l(function (t) {
            var i = this;
            this.revert(),
              this.elements.forEach(function (a) {
                gi(a, "html", a.innerHTML);
              }),
              (this.lines = []),
              (this.words = []),
              (this.chars = []);
            var r = [window.pageXOffset, window.pageYOffset];
            t !== void 0 && (this.settings = cr(this.settings, wn(t)));
            var n = Xo(this.settings.types);
            n.none ||
              (this.elements.forEach(function (a) {
                gi(a, "isRoot", !0);
                var o = ld(a, i.settings),
                  c = o.words,
                  u = o.chars;
                (i.words = [].concat(vt(i.words), vt(c))),
                  (i.chars = [].concat(vt(i.chars), vt(u)));
              }),
              this.elements.forEach(function (a) {
                if (n.lines || i.settings.absolute) {
                  var o = _g(a, i.settings, r);
                  i.lines = [].concat(vt(i.lines), vt(o));
                }
              }),
              (this.isSplit = !0),
              window.scrollTo(r[0], r[1]),
              ig());
          }, "split$1"),
        },
        {
          key: "revert",
          value: l(function () {
            this.isSplit &&
              ((this.lines = null),
              (this.words = null),
              (this.chars = null),
              (this.isSplit = !1)),
              s.revert(this.elements);
          }, "revert"),
        },
      ]),
      s
    );
  })();
V.registerPlugin(X, ki);
const Sg = l(() => {
    document.querySelectorAll("[split-text]").forEach((e) => {
      new bg(e, { type: "lines", tagName: "span" }).lines.forEach((n) => {
        const a = document.createElement("span");
        a.setAttribute("data-line-wrapper", ""),
          (a.style.overflow = "clip"),
          (a.style.paddingBottom = "5px"),
          (a.style.position = "relative"),
          (a.style.display = "block"),
          (a.style.whiteSpace = "normal"),
          (a.style.wordBreak = "break-word"),
          n.parentNode.insertBefore(a, n),
          a.appendChild(n);
      });
      const i = e.querySelectorAll("[data-line-wrapper]"),
        r = Array.from(i).map((n) => n.firstChild);
      V.set(r, { willChange: "transform" }),
        V.from(r, {
          yPercent: 120,
          opacity: 0,
          rotateZ: 2,
          rotateY: 20,
          rotateX: 20,
          duration: 2,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: e,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            markers: !1,
          },
        });
    });
  }, "splitAllText"),
  xg = l(() => {
    Sg();
  }, "initSplitTextAnimate");
V.registerPlugin(X);
const Tg = l(() => {
    document.querySelectorAll("[stagger-svg]").forEach((e) => {
      const t = e.querySelectorAll("path");
      if (!t.length) return;
      const i = e.getAttribute("data-stagger-start") || "top bottom",
        r = e.getAttribute("data-stagger-end") || "bottom 50%";
      V.set(t, { willChange: "transform, opacity, filter" }),
        V.set(e, { willChange: "transform, opacity, filter" }),
        V.from(t, {
          yPercent: 80,
          filter: "blur(30px)",
          rotateZ: -2,
          opacity: 0.5,
          duration: 2.2,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: e,
            start: i,
            end: r,
            toggleActions: "play none none reverse",
            markers: !1,
          },
        });
    });
  }, "staggerSvg"),
  Eg = l(() => {
    Tg();
  }, "initSvgStagger");
V.registerPlugin(X, ki);
const Cg = l(() => {
    const s = document.querySelectorAll("[text-scramble]");
    s.length &&
      s.forEach((e) => {
        e.removeAttribute("aria-label");
        const i = new ki(e, {
          type: "chars, words, lines",
          charsClass: "char-animate",
        }).chars;
        V.set(i, { opacity: 0, filter: "blur(10px)" }),
          V.to(i, {
            duration: 1.6,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.03,
            ease: "expo.out",
            scrollTrigger: {
              trigger: e,
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          });
      });
  }, "textScramble"),
  Mg = l(() => {
    Cg();
  }, "initTextScramble");
V.registerPlugin(X);
const Pg = l(() => {
    const s = {
        duration: 3,
        ease: "power2.out",
        stagger: 0.1,
        start: "top 80%",
        markers: !1,
      },
      e = document.querySelectorAll("[motion]"),
      t = {};
    e.forEach((i) => {
      const r = i.getAttribute("motion"),
        n = i.getAttribute("motion-group"),
        a = i.getAttribute("motion-duration")
          ? parseFloat(i.getAttribute("motion-duration"))
          : s.duration,
        o = i.getAttribute("motion-delay")
          ? parseFloat(i.getAttribute("motion-delay"))
          : 0,
        c = i.getAttribute("motion-ease") || s.ease,
        u = i.getAttribute("motion-start") || s.start;
      r === "fade"
        ? V.set(i, { opacity: 0 })
        : r === "move-up" && V.set(i, { opacity: 0, y: 50 }),
        n
          ? (t[n] || (t[n] = []),
            t[n].push({
              element: i,
              motionType: r,
              duration: a,
              delay: o,
              ease: c,
            }))
          : Ag(i, r, a, o, c, u);
    }),
      Object.keys(t).forEach((i) => {
        const r = t[i];
        if (r.length > 0) {
          const n = r[0],
            a = n.element.getAttribute("motion-stagger")
              ? parseFloat(n.element.getAttribute("motion-stagger"))
              : s.stagger,
            o = n.element.getAttribute("motion-start") || s.start,
            c = V.timeline({
              scrollTrigger: {
                trigger: n.element.parentElement,
                start: o,
                toggleActions: "play none none reverse",
                markers: s.markers,
              },
            }),
            u = r.filter((m) => m.motionType === "fade").map((m) => m.element),
            d = r
              .filter((m) => m.motionType === "move-up")
              .map((m) => m.element);
          u.length > 0 &&
            c.to(
              u,
              {
                opacity: 1,
                duration: n.duration,
                stagger: a,
                ease: n.ease,
                delay: n.delay,
              },
              0
            ),
            d.length > 0 &&
              c.to(
                d,
                {
                  opacity: 1,
                  y: 0,
                  duration: n.duration,
                  stagger: a,
                  ease: n.ease,
                  delay: n.delay,
                },
                0
              );
        }
      });
  }, "genAnimation"),
  Ag = l((s, e, t, i, r, n) => {
    const a = V.timeline({
      scrollTrigger: {
        trigger: s,
        start: n,
        toggleActions: "play none none reverse",
        markers: !1,
      },
    });
    e === "fade"
      ? a.to(s, { opacity: 1, duration: t, delay: i, ease: r })
      : e === "move-up" &&
        a.to(s, { opacity: 1, y: 0, duration: t, delay: i, ease: r });
  }, "createAnimationForElement"),
  Og = l(() => {
    Pg();
  }, "initGenAnimation"),
  kg = l(() => {
    const s = document.querySelector("[contact-modal='main']");
    if (!s) return;
    const e = document.querySelectorAll("[contact-modal='open-btn']"),
      t = document.querySelectorAll("[contact-modal='close-btn']"),
      i = document.querySelector("[contact-modal='visual']"),
      r = document.querySelector("[contact-modal='form']");
    let n = !1;
    const a = V.timeline({ paused: !0 });
    V.set(s, {
      display: "none",
      opacity: 0,
      pointerEvents: "none",
      backdropFilter: "blur(0px)",
    });
    const o = V.timeline({ paused: !0 });
    a.fromTo(
      s,
      {
        display: "none",
        opacity: 0,
        pointerEvents: "none",
        backdropFilter: "blur(0px)",
      },
      {
        display: "block",
        opacity: 1,
        pointerEvents: "auto",
        backdropFilter: "blur(15px)",
        duration: 1,
        ease: "expo.inOut",
      }
    ),
      a.fromTo(
        i,
        { scale: 1.6, filter: "blur(15px)" },
        { scale: 1, filter: "blur(0px)", duration: 1.4, ease: "expo.inOut" },
        "<"
      ),
      a.fromTo(
        r,
        { xPercent: 130 },
        { xPercent: 0, duration: 1.7, ease: "expo.inOut" },
        "<"
      ),
      o.to(s, {
        opacity: 0,
        pointerEvents: "none",
        backdropFilter: "blur(0px)",
        duration: 1.2,
        ease: "expo.inOut",
        onComplete: l(() => {
          V.set(s, { display: "none" });
        }, "onComplete"),
      }),
      o.to(
        i,
        { scale: 1.6, filter: "blur(15px)", duration: 1.2, ease: "expo.inOut" },
        "<"
      ),
      o.to(r, { xPercent: 130, duration: 1.2, ease: "expo.inOut" }, "<");
    const c = l(() => {
      n && (o.restart(), (n = !1));
    }, "closeModal");
    e.forEach((u) => {
      u.addEventListener("click", () => {
        n || (a.restart(), (n = !0));
      });
    }),
      t.forEach((u) => {
        u.addEventListener("click", c);
      }),
      document.addEventListener("keydown", (u) => {
        u.key === "Escape" && c();
      });
  }, "contactModal"),
  Lg = l(() => {
    kg();
  }, "initContactModal"),
  Ig = l(() => {
    const s = document.querySelector("[page-leave='component']");
    if (!s) return;
    const e = document.querySelectorAll("a[href]"),
      t = window.location.origin;
    e.forEach((i) => {
      const r = i.getAttribute("href").trim(),
        n = r.startsWith("#"),
        a = r.startsWith("mailto:"),
        o = r.startsWith("tel:"),
        c = r.startsWith("http") && !r.startsWith(t);
      n ||
        a ||
        o ||
        c ||
        i.addEventListener("click", (u) => {
          u.preventDefault();
          const d = i.href;
          V.to(s, {
            display: "block",
            opacity: 1,
            backdropFilter: "blur(20px)",
            backgroundColor: "var(--swatch--dark)",
            duration: 0.5,
            ease: "expo.inOut",
            onComplete: l(() => {
              const m = document.querySelector("[page-load='component']");
              m && ((m.style.display = "block"), (m.style.opacity = 1)),
                (window.location.href = d);
            }, "onComplete"),
          });
        });
    });
  }, "pageLeave"),
  Dg = l(() => {
    Ig();
  }, "initPageLeave"),
  zg = l(() => {
    Dm(), zm(), $m(), qm(), Bm(), xg(), Eg(), Mg(), Og(), Lg(), Dg();
  }, "globalInit"),
  Rg = l(() => {
    const s = ju(".example-component");
    s && (Tm(s, "is-initialized"), s.addEventListener("click", () => {}));
  }, "exampleComponent"),
  $g = l(() => {
    Rg();
  }, "initializeComponents");
document.addEventListener("DOMContentLoaded", () => {
  zg(), $g(), Im(), Kh();
});

var jm = Object.defineProperty,
  Um = Object.defineProperties;
var Km = Object.getOwnPropertyDescriptors;
var Mu = Object.getOwnPropertySymbols;
var Zm = Object.prototype.hasOwnProperty,
  Qm = Object.prototype.propertyIsEnumerable;
var ht = Math.pow,
  Oo = (Ze, ze, mt) =>
    ze in Ze
      ? jm(Ze, ze, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mt,
        })
      : (Ze[ze] = mt),
  Xn = (Ze, ze) => {
    for (var mt in ze || (ze = {})) Zm.call(ze, mt) && Oo(Ze, mt, ze[mt]);
    if (Mu) for (var mt of Mu(ze)) Qm.call(ze, mt) && Oo(Ze, mt, ze[mt]);
    return Ze;
  },
  ko = (Ze, ze) => Um(Ze, Km(ze));
var X = (Ze, ze, mt) => Oo(Ze, typeof ze != "symbol" ? ze + "" : ze, mt);
(function (Ze) {
  typeof define == "function" && define.amd ? define(Ze) : Ze();
})(function () {
  "use strict";
  function Ze(s) {
    return (
      s !== null &&
      typeof s == "object" &&
      "constructor" in s &&
      s.constructor === Object
    );
  }
  function ze(s, e) {
    s === void 0 && (s = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof s[i] == "undefined"
          ? (s[i] = e[i])
          : Ze(e[i]) &&
            Ze(s[i]) &&
            Object.keys(e[i]).length > 0 &&
            ze(s[i], e[i]);
      });
  }
  const mt = {
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
  function Ye() {
    const s = typeof document != "undefined" ? document : {};
    return ze(s, mt), s;
  }
  const Pu = {
    document: mt,
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
    CustomEvent: function () {
      return this;
    },
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
      return typeof setTimeout == "undefined" ? (s(), null) : setTimeout(s, 0);
    },
    cancelAnimationFrame(s) {
      typeof setTimeout != "undefined" && clearTimeout(s);
    },
  };
  function be() {
    const s = typeof window != "undefined" ? window : {};
    return ze(s, Pu), s;
  }
  function Ii(s) {
    return (
      s === void 0 && (s = ""),
      s
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Au(s) {
    const e = s;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch (i) {}
      try {
        delete e[t];
      } catch (i) {}
    });
  }
  function Zi(s, e) {
    return e === void 0 && (e = 0), setTimeout(s, e);
  }
  function Gt() {
    return Date.now();
  }
  function Ou(s) {
    const e = be();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(s, null)),
      !t && s.currentStyle && (t = s.currentStyle),
      t || (t = s.style),
      t
    );
  }
  function Gn(s, e) {
    e === void 0 && (e = "x");
    const t = be();
    let i, r, n;
    const a = Ou(s);
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
  function is(s) {
    return (
      typeof s == "object" &&
      s !== null &&
      s.constructor &&
      Object.prototype.toString.call(s).slice(8, -1) === "Object"
    );
  }
  function ku(s) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? s instanceof HTMLElement
      : s && (s.nodeType === 1 || s.nodeType === 11);
  }
  function Lt() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !ku(i)) {
        const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, a = r.length; n < a; n += 1) {
          const o = r[n],
            l = Object.getOwnPropertyDescriptor(i, o);
          l !== void 0 &&
            l.enumerable &&
            (is(s[o]) && is(i[o])
              ? i[o].__swiper__
                ? (s[o] = i[o])
                : Lt(s[o], i[o])
              : !is(s[o]) && is(i[o])
              ? ((s[o] = {}), i[o].__swiper__ ? (s[o] = i[o]) : Lt(s[o], i[o]))
              : (s[o] = i[o]));
        }
      }
    }
    return s;
  }
  function rs(s, e, t) {
    s.style.setProperty(e, t);
  }
  function Lo(s) {
    let { swiper: e, targetPosition: t, side: i } = s;
    const r = be(),
      n = -e.translate;
    let a = null,
      o;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > n ? "next" : "prev",
      u = (m, p) => (c === "next" && m >= p) || (c === "prev" && m <= p),
      h = () => {
        (o = new Date().getTime()), a === null && (a = o);
        const m = Math.max(Math.min((o - a) / l, 1), 0),
          p = 0.5 - Math.cos(m * Math.PI) / 2;
        let f = n + p * (t - n);
        if ((u(f, t) && (f = t), e.wrapperEl.scrollTo({ [i]: f }), u(f, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: f });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(h);
      };
    h();
  }
  function Qi(s) {
    return (
      s.querySelector(".swiper-slide-transform") ||
      (s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform")) ||
      s
    );
  }
  function Qe(s, e) {
    e === void 0 && (e = "");
    const t = be(),
      i = [...s.children];
    return (
      t.HTMLSlotElement &&
        s instanceof HTMLSlotElement &&
        i.push(...s.assignedElements()),
      e ? i.filter((r) => r.matches(e)) : i
    );
  }
  function Lu(s, e) {
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
  function Iu(s, e) {
    const t = be();
    let i = e.contains(s);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(s)), i || (i = Lu(s, e))),
      i
    );
  }
  function js(s) {
    try {
      console.warn(s);
      return;
    } catch (e) {}
  }
  function It(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...(Array.isArray(e) ? e : Ii(e))), t;
  }
  function Us(s) {
    const e = be(),
      t = Ye(),
      i = s.getBoundingClientRect(),
      r = t.body,
      n = s.clientTop || r.clientTop || 0,
      a = s.clientLeft || r.clientLeft || 0,
      o = s === e ? e.scrollY : s.scrollTop,
      l = s === e ? e.scrollX : s.scrollLeft;
    return { top: i.top + o - n, left: i.left + l - a };
  }
  function Du(s, e) {
    const t = [];
    for (; s.previousElementSibling; ) {
      const i = s.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function zu(s, e) {
    const t = [];
    for (; s.nextElementSibling; ) {
      const i = s.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function Di(s, e) {
    return be().getComputedStyle(s, null).getPropertyValue(e);
  }
  function ss(s) {
    let e = s,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Ji(s, e) {
    const t = [];
    let i = s.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function ns(s, e) {
    function t(i) {
      i.target === s &&
        (e.call(s, i), s.removeEventListener("transitionend", t));
    }
    e && s.addEventListener("transitionend", t);
  }
  function jn(s, e, t) {
    const i = be();
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
  function ne(s) {
    return (Array.isArray(s) ? s : [s]).filter((e) => !!e);
  }
  function Ks(s) {
    return (e) =>
      Math.abs(e) > 0 &&
      s.browser &&
      s.browser.need3dFix &&
      Math.abs(e) % 90 === 0
        ? e + 0.001
        : e;
  }
  let Un;
  function Ru() {
    const s = be(),
      e = Ye();
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
  function Io() {
    return Un || (Un = Ru()), Un;
  }
  let Kn;
  function $u(s) {
    let { userAgent: e } = s === void 0 ? {} : s;
    const t = Io(),
      i = be(),
      r = i.navigator.platform,
      n = e || i.navigator.userAgent,
      a = { ios: !1, android: !1 },
      o = i.screen.width,
      l = i.screen.height,
      c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = n.match(/(iPad).*OS\s([\d_]+)/);
    const h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
      m = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      p = r === "Win32";
    let f = r === "MacIntel";
    const d = [
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
      !u &&
        f &&
        t.touch &&
        d.indexOf(`${o}x${l}`) >= 0 &&
        ((u = n.match(/(Version)\/([\d.]+)/)),
        u || (u = [0, 1, "13_0_0"]),
        (f = !1)),
      c && !p && ((a.os = "android"), (a.android = !0)),
      (u || m || h) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function Do(s) {
    return s === void 0 && (s = {}), Kn || (Kn = $u(s)), Kn;
  }
  let Zn;
  function Nu() {
    const s = be(),
      e = Do();
    let t = !1;
    function i() {
      const o = s.navigator.userAgent.toLowerCase();
      return (
        o.indexOf("safari") >= 0 &&
        o.indexOf("chrome") < 0 &&
        o.indexOf("android") < 0
      );
    }
    if (i()) {
      const o = String(s.navigator.userAgent);
      if (o.includes("Version/")) {
        const [l, c] = o
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((u) => Number(u));
        t = l < 16 || (l === 16 && c < 2);
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
  function zo() {
    return Zn || (Zn = Nu()), Zn;
  }
  function Fu(s) {
    let { swiper: e, on: t, emit: i } = s;
    const r = be();
    let n = null,
      a = null;
    const o = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
      },
      l = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((n = new ResizeObserver((h) => {
            a = r.requestAnimationFrame(() => {
              const { width: m, height: p } = e;
              let f = m,
                d = p;
              h.forEach((g) => {
                let { contentBoxSize: w, contentRect: y, target: v } = g;
                (v && v !== e.el) ||
                  ((f = y ? y.width : (w[0] || w).inlineSize),
                  (d = y ? y.height : (w[0] || w).blockSize));
              }),
                (f !== m || d !== p) && o();
            });
          })),
          n.observe(e.el));
      },
      c = () => {
        a && r.cancelAnimationFrame(a),
          n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
      },
      u = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver != "undefined") {
        l();
        return;
      }
      r.addEventListener("resize", o),
        r.addEventListener("orientationchange", u);
    }),
      t("destroy", () => {
        c(),
          r.removeEventListener("resize", o),
          r.removeEventListener("orientationchange", u);
      });
  }
  function Bu(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = [],
      a = be(),
      o = function (u, h) {
        h === void 0 && (h = {});
        const m = a.MutationObserver || a.WebkitMutationObserver,
          p = new m((f) => {
            if (e.__preventObserver__) return;
            if (f.length === 1) {
              r("observerUpdate", f[0]);
              return;
            }
            const d = function () {
              r("observerUpdate", f[0]);
            };
            a.requestAnimationFrame
              ? a.requestAnimationFrame(d)
              : a.setTimeout(d, 0);
          });
        p.observe(u, {
          attributes: typeof h.attributes == "undefined" ? !0 : h.attributes,
          childList:
            e.isElement ||
            (typeof h.childList == "undefined" ? !0 : h).childList,
          characterData:
            typeof h.characterData == "undefined" ? !0 : h.characterData,
        }),
          n.push(p);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const u = Ji(e.hostEl);
            for (let h = 0; h < u.length; h += 1) o(u[h]);
          }
          o(e.hostEl, { childList: e.params.observeSlideChildren }),
            o(e.wrapperEl, { attributes: !1 });
        }
      },
      c = () => {
        n.forEach((u) => {
          u.disconnect();
        }),
          n.splice(0, n.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", l),
      i("destroy", c);
  }
  var qu = {
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
      return (r.__emitterProxy = e), i.on(s, r, t);
    },
    onAny(s, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof s != "function") return t;
      const i = e ? "unshift" : "push";
      return (
        t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t
      );
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
            typeof e == "undefined"
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
        (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
          s.eventsAnyListeners &&
            s.eventsAnyListeners.length &&
            s.eventsAnyListeners.forEach((c) => {
              c.apply(i, [l, ...t]);
            }),
            s.eventsListeners &&
              s.eventsListeners[l] &&
              s.eventsListeners[l].forEach((c) => {
                c.apply(i, t);
              });
        }),
        s
      );
    },
  };
  function Hu() {
    const s = this;
    let e, t;
    const i = s.el;
    typeof s.params.width != "undefined" && s.params.width !== null
      ? (e = s.params.width)
      : (e = i.clientWidth),
      typeof s.params.height != "undefined" && s.params.height !== null
        ? (t = s.params.height)
        : (t = i.clientHeight),
      !((e === 0 && s.isHorizontal()) || (t === 0 && s.isVertical())) &&
        ((e =
          e -
          parseInt(Di(i, "padding-left") || 0, 10) -
          parseInt(Di(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(Di(i, "padding-top") || 0, 10) -
          parseInt(Di(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(s, {
          width: e,
          height: t,
          size: s.isHorizontal() ? e : t,
        }));
  }
  function Vu() {
    const s = this;
    function e(E, I) {
      return parseFloat(E.getPropertyValue(s.getDirectionLabel(I)) || 0);
    }
    const t = s.params,
      { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o } = s,
      l = s.virtual && t.virtual.enabled,
      c = l ? s.virtual.slides.length : s.slides.length,
      u = Qe(r, `.${s.params.slideClass}, swiper-slide`),
      h = l ? s.virtual.slides.length : u.length;
    let m = [];
    const p = [],
      f = [];
    let d = t.slidesOffsetBefore;
    typeof d == "function" && (d = t.slidesOffsetBefore.call(s));
    let g = t.slidesOffsetAfter;
    typeof g == "function" && (g = t.slidesOffsetAfter.call(s));
    const w = s.snapGrid.length,
      y = s.slidesGrid.length;
    let v = t.spaceBetween,
      _ = -d,
      b = 0,
      S = 0;
    if (typeof n == "undefined") return;
    typeof v == "string" && v.indexOf("%") >= 0
      ? (v = (parseFloat(v.replace("%", "")) / 100) * n)
      : typeof v == "string" && (v = parseFloat(v)),
      (s.virtualSize = -v),
      u.forEach((E) => {
        a ? (E.style.marginLeft = "") : (E.style.marginRight = ""),
          (E.style.marginBottom = ""),
          (E.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (rs(i, "--swiper-centered-offset-before", ""),
        rs(i, "--swiper-centered-offset-after", ""));
    const T = t.grid && t.grid.rows > 1 && s.grid;
    T ? s.grid.initSlides(u) : s.grid && s.grid.unsetSlides();
    let M;
    const x =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (E) => typeof t.breakpoints[E].slidesPerView != "undefined"
      ).length > 0;
    for (let E = 0; E < h; E += 1) {
      M = 0;
      let I;
      if (
        (u[E] && (I = u[E]),
        T && s.grid.updateSlide(E, I, u),
        !(u[E] && Di(I, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          x && (u[E].style[s.getDirectionLabel("width")] = "");
          const P = getComputedStyle(I),
            k = I.style.transform,
            O = I.style.webkitTransform;
          if (
            (k && (I.style.transform = "none"),
            O && (I.style.webkitTransform = "none"),
            t.roundLengths)
          )
            M = s.isHorizontal() ? jn(I, "width") : jn(I, "height");
          else {
            const D = e(P, "width"),
              z = e(P, "padding-left"),
              A = e(P, "padding-right"),
              L = e(P, "margin-left"),
              $ = e(P, "margin-right"),
              C = P.getPropertyValue("box-sizing");
            if (C && C === "border-box") M = D + L + $;
            else {
              const { clientWidth: W, offsetWidth: K } = I;
              M = D + z + A + L + $ + (K - W);
            }
          }
          k && (I.style.transform = k),
            O && (I.style.webkitTransform = O),
            t.roundLengths && (M = Math.floor(M));
        } else
          (M = (n - (t.slidesPerView - 1) * v) / t.slidesPerView),
            t.roundLengths && (M = Math.floor(M)),
            u[E] && (u[E].style[s.getDirectionLabel("width")] = `${M}px`);
        u[E] && (u[E].swiperSlideSize = M),
          f.push(M),
          t.centeredSlides
            ? ((_ = _ + M / 2 + b / 2 + v),
              b === 0 && E !== 0 && (_ = _ - n / 2 - v),
              E === 0 && (_ = _ - n / 2 - v),
              Math.abs(_) < 1 / 1e3 && (_ = 0),
              t.roundLengths && (_ = Math.floor(_)),
              S % t.slidesPerGroup === 0 && m.push(_),
              p.push(_))
            : (t.roundLengths && (_ = Math.floor(_)),
              (S - Math.min(s.params.slidesPerGroupSkip, S)) %
                s.params.slidesPerGroup ===
                0 && m.push(_),
              p.push(_),
              (_ = _ + M + v)),
          (s.virtualSize += M + v),
          (b = M),
          (S += 1);
      }
    }
    if (
      ((s.virtualSize = Math.max(s.virtualSize, n) + g),
      a &&
        o &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${s.virtualSize + v}px`),
      t.setWrapperSize &&
        (i.style[s.getDirectionLabel("width")] = `${s.virtualSize + v}px`),
      T && s.grid.updateWrapperSize(M, m),
      !t.centeredSlides)
    ) {
      const E = [];
      for (let I = 0; I < m.length; I += 1) {
        let P = m[I];
        t.roundLengths && (P = Math.floor(P)),
          m[I] <= s.virtualSize - n && E.push(P);
      }
      (m = E),
        Math.floor(s.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(s.virtualSize - n);
    }
    if (l && t.loop) {
      const E = f[0] + v;
      if (t.slidesPerGroup > 1) {
        const I = Math.ceil(
            (s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup
          ),
          P = E * t.slidesPerGroup;
        for (let k = 0; k < I; k += 1) m.push(m[m.length - 1] + P);
      }
      for (
        let I = 0;
        I < s.virtual.slidesBefore + s.virtual.slidesAfter;
        I += 1
      )
        t.slidesPerGroup === 1 && m.push(m[m.length - 1] + E),
          p.push(p[p.length - 1] + E),
          (s.virtualSize += E);
    }
    if ((m.length === 0 && (m = [0]), v !== 0)) {
      const E =
        s.isHorizontal() && a
          ? "marginLeft"
          : s.getDirectionLabel("marginRight");
      u.filter((I, P) =>
        !t.cssMode || t.loop ? !0 : P !== u.length - 1
      ).forEach((I) => {
        I.style[E] = `${v}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let E = 0;
      f.forEach((P) => {
        E += P + (v || 0);
      }),
        (E -= v);
      const I = E > n ? E - n : 0;
      m = m.map((P) => (P <= 0 ? -d : P > I ? I + g : P));
    }
    if (t.centerInsufficientSlides) {
      let E = 0;
      f.forEach((P) => {
        E += P + (v || 0);
      }),
        (E -= v);
      const I = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (E + I < n) {
        const P = (n - E - I) / 2;
        m.forEach((k, O) => {
          m[O] = k - P;
        }),
          p.forEach((k, O) => {
            p[O] = k + P;
          });
      }
    }
    if (
      (Object.assign(s, {
        slides: u,
        snapGrid: m,
        slidesGrid: p,
        slidesSizesGrid: f,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      rs(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        rs(
          i,
          "--swiper-centered-offset-after",
          `${s.size / 2 - f[f.length - 1] / 2}px`
        );
      const E = -s.snapGrid[0],
        I = -s.slidesGrid[0];
      (s.snapGrid = s.snapGrid.map((P) => P + E)),
        (s.slidesGrid = s.slidesGrid.map((P) => P + I));
    }
    if (
      (h !== c && s.emit("slidesLengthChange"),
      m.length !== w &&
        (s.params.watchOverflow && s.checkOverflow(),
        s.emit("snapGridLengthChange")),
      p.length !== y && s.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && s.updateSlidesOffset(),
      s.emit("slidesUpdated"),
      !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const E = `${t.containerModifierClass}backface-hidden`,
        I = s.el.classList.contains(E);
      h <= t.maxBackfaceHiddenSlides
        ? I || s.el.classList.add(E)
        : I && s.el.classList.remove(E);
    }
  }
  function Wu(s) {
    const e = this,
      t = [],
      i = e.virtual && e.params.virtual.enabled;
    let r = 0,
      n;
    typeof s == "number"
      ? e.setTransition(s)
      : s === !0 && e.setTransition(e.params.speed);
    const a = (o) => (i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o]);
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
      if (typeof t[n] != "undefined") {
        const o = t[n].offsetHeight;
        r = o > r ? o : r;
      }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
  }
  function Yu() {
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
  const Ro = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function Xu(s) {
    s === void 0 && (s = (this && this.translate) || 0);
    const e = this,
      t = e.params,
      { slides: i, rtlTranslate: r, snapGrid: n } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
    let a = -s;
    r && (a = s), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
    let o = t.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0
      ? (o = (parseFloat(o.replace("%", "")) / 100) * e.size)
      : typeof o == "string" && (o = parseFloat(o));
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l];
      let u = c.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
      const h =
          (a + (t.centeredSlides ? e.minTranslate() : 0) - u) /
          (c.swiperSlideSize + o),
        m =
          (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
          (c.swiperSlideSize + o),
        p = -(a - u),
        f = p + e.slidesSizesGrid[l],
        d = p >= 0 && p <= e.size - e.slidesSizesGrid[l],
        g =
          (p >= 0 && p < e.size - 1) ||
          (f > 1 && f <= e.size) ||
          (p <= 0 && f >= e.size);
      g && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(l)),
        Ro(c, g, t.slideVisibleClass),
        Ro(c, d, t.slideFullyVisibleClass),
        (c.progress = r ? -h : h),
        (c.originalProgress = r ? -m : m);
    }
  }
  function Gu(s) {
    const e = this;
    if (typeof s == "undefined") {
      const u = e.rtlTranslate ? -1 : 1;
      s = (e && e.translate && e.translate * u) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = e;
    const l = n,
      c = a;
    if (i === 0) (r = 0), (n = !0), (a = !0);
    else {
      r = (s - e.minTranslate()) / i;
      const u = Math.abs(s - e.minTranslate()) < 1,
        h = Math.abs(s - e.maxTranslate()) < 1;
      (n = u || r <= 0), (a = h || r >= 1), u && (r = 0), h && (r = 1);
    }
    if (t.loop) {
      const u = e.getSlideIndexByData(0),
        h = e.getSlideIndexByData(e.slides.length - 1),
        m = e.slidesGrid[u],
        p = e.slidesGrid[h],
        f = e.slidesGrid[e.slidesGrid.length - 1],
        d = Math.abs(s);
      d >= m ? (o = (d - m) / f) : (o = (d + f - p) / f), o > 1 && (o -= 1);
    }
    Object.assign(e, {
      progress: r,
      progressLoop: o,
      isBeginning: n,
      isEnd: a,
    }),
      (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
        e.updateSlidesProgress(s),
      n && !l && e.emit("reachBeginning toEdge"),
      a && !c && e.emit("reachEnd toEdge"),
      ((l && !n) || (c && !a)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  const Qn = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function ju() {
    const s = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = s,
      n = s.virtual && t.virtual.enabled,
      a = s.grid && t.grid && t.grid.rows > 1,
      o = (h) => Qe(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
    let l, c, u;
    if (n)
      if (t.loop) {
        let h = r - s.virtual.slidesBefore;
        h < 0 && (h = s.virtual.slides.length + h),
          h >= s.virtual.slides.length && (h -= s.virtual.slides.length),
          (l = o(`[data-swiper-slide-index="${h}"]`));
      } else l = o(`[data-swiper-slide-index="${r}"]`);
    else
      a
        ? ((l = e.find((h) => h.column === r)),
          (u = e.find((h) => h.column === r + 1)),
          (c = e.find((h) => h.column === r - 1)))
        : (l = e[r]);
    l &&
      (a ||
        ((u = zu(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u && (u = e[0]),
        (c = Du(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c === 0 && (c = e[e.length - 1]))),
      e.forEach((h) => {
        Qn(h, h === l, t.slideActiveClass),
          Qn(h, h === u, t.slideNextClass),
          Qn(h, h === c, t.slidePrevClass);
      }),
      s.emitSlidesClasses();
  }
  const Zs = (s, e) => {
      if (!s || s.destroyed || !s.params) return;
      const t = () =>
          s.isElement ? "swiper-slide" : `.${s.params.slideClass}`,
        i = e.closest(t());
      if (i) {
        let r = i.querySelector(`.${s.params.lazyPreloaderClass}`);
        !r &&
          s.isElement &&
          (i.shadowRoot
            ? (r = i.shadowRoot.querySelector(
                `.${s.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                i.shadowRoot &&
                  ((r = i.shadowRoot.querySelector(
                    `.${s.params.lazyPreloaderClass}`
                  )),
                  r && r.remove());
              })),
          r && r.remove();
      }
    },
    Jn = (s, e) => {
      if (!s.slides[e]) return;
      const t = s.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    ea = (s) => {
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
        o.push(...Array.from({ length: e }).map((l, c) => a + i + c)),
          s.slides.forEach((l, c) => {
            o.includes(l.column) && Jn(s, c);
          });
        return;
      }
      const n = r + i - 1;
      if (s.params.rewind || s.params.loop)
        for (let a = r - e; a <= n + e; a += 1) {
          const o = ((a % t) + t) % t;
          (o < r || o > n) && Jn(s, o);
        }
      else
        for (let a = Math.max(r - e, 0); a <= Math.min(n + e, t - 1); a += 1)
          a !== r && (a > n || a < r) && Jn(s, a);
    };
  function Uu(s) {
    const { slidesGrid: e, params: t } = s,
      i = s.rtlTranslate ? s.translate : -s.translate;
    let r;
    for (let n = 0; n < e.length; n += 1)
      typeof e[n + 1] != "undefined"
        ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2
          ? (r = n)
          : i >= e[n] && i < e[n + 1] && (r = n + 1)
        : i >= e[n] && (r = n);
    return (
      t.normalizeSlideIndex && (r < 0 || typeof r == "undefined") && (r = 0), r
    );
  }
  function Ku(s) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: i,
        params: r,
        activeIndex: n,
        realIndex: a,
        snapIndex: o,
      } = e;
    let l = s,
      c;
    const u = (p) => {
      let f = p - e.virtual.slidesBefore;
      return (
        f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        f
      );
    };
    if ((typeof l == "undefined" && (l = Uu(e)), i.indexOf(t) >= 0))
      c = i.indexOf(t);
    else {
      const p = Math.min(r.slidesPerGroupSkip, l);
      c = p + Math.floor((l - p) / r.slidesPerGroup);
    }
    if ((c >= i.length && (c = i.length - 1), l === n && !e.params.loop)) {
      c !== o && ((e.snapIndex = c), e.emit("snapIndexChange"));
      return;
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = u(l);
      return;
    }
    const h = e.grid && r.grid && r.grid.rows > 1;
    let m;
    if (e.virtual && r.virtual.enabled && r.loop) m = u(l);
    else if (h) {
      const p = e.slides.find((d) => d.column === l);
      let f = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(f) && (f = Math.max(e.slides.indexOf(p), 0)),
        (m = Math.floor(f / r.grid.rows));
    } else if (e.slides[l]) {
      const p = e.slides[l].getAttribute("data-swiper-slide-index");
      p ? (m = parseInt(p, 10)) : (m = l);
    } else m = l;
    Object.assign(e, {
      previousSnapIndex: o,
      snapIndex: c,
      previousRealIndex: a,
      realIndex: m,
      previousIndex: n,
      activeIndex: l,
    }),
      e.initialized && ea(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (a !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function Zu(s, e) {
    const t = this,
      i = t.params;
    let r = s.closest(`.${i.slideClass}, swiper-slide`);
    !r &&
      t.isElement &&
      e &&
      e.length > 1 &&
      e.includes(s) &&
      [...e.slice(e.indexOf(s) + 1, e.length)].forEach((o) => {
        !r &&
          o.matches &&
          o.matches(`.${i.slideClass}, swiper-slide`) &&
          (r = o);
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
  var Qu = {
    updateSize: Hu,
    updateSlides: Vu,
    updateAutoHeight: Wu,
    updateSlidesOffset: Yu,
    updateSlidesProgress: Xu,
    updateProgress: Gu,
    updateSlidesClasses: ju,
    updateActiveIndex: Ku,
    updateClickedSlide: Zu,
  };
  function Ju(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let a = Gn(n, s);
    return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
  }
  function ed(s, e) {
    const t = this,
      { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = t;
    let o = 0,
      l = 0;
    const c = 0;
    t.isHorizontal() ? (o = i ? -s : s) : (l = s),
      r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
      (t.previousTranslate = t.translate),
      (t.translate = t.isHorizontal() ? o : l),
      r.cssMode
        ? (n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
            ? -o
            : -l)
        : r.virtualTranslate ||
          (t.isHorizontal()
            ? (o -= t.cssOverflowAdjustment())
            : (l -= t.cssOverflowAdjustment()),
          (n.style.transform = `translate3d(${o}px, ${l}px, ${c}px)`));
    let u;
    const h = t.maxTranslate() - t.minTranslate();
    h === 0 ? (u = 0) : (u = (s - t.minTranslate()) / h),
      u !== a && t.updateProgress(s),
      t.emit("setTranslate", t.translate, e);
  }
  function td() {
    return -this.snapGrid[0];
  }
  function id() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function rd(s, e, t, i, r) {
    s === void 0 && (s = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const n = this,
      { params: a, wrapperEl: o } = n;
    if (n.animating && a.preventInteractionOnTransition) return !1;
    const l = n.minTranslate(),
      c = n.maxTranslate();
    let u;
    if (
      (i && s > l ? (u = l) : i && s < c ? (u = c) : (u = s),
      n.updateProgress(u),
      a.cssMode)
    ) {
      const h = n.isHorizontal();
      if (e === 0) o[h ? "scrollLeft" : "scrollTop"] = -u;
      else {
        if (!n.support.smoothScroll)
          return (
            Lo({ swiper: n, targetPosition: -u, side: h ? "left" : "top" }), !0
          );
        o.scrollTo({ [h ? "left" : "top"]: -u, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (n.setTransition(0),
          n.setTranslate(u),
          t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd")))
        : (n.setTransition(e),
          n.setTranslate(u),
          t &&
            (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")),
          n.animating ||
            ((n.animating = !0),
            n.onTranslateToWrapperTransitionEnd ||
              (n.onTranslateToWrapperTransitionEnd = function (m) {
                !n ||
                  n.destroyed ||
                  (m.target === this &&
                    (n.wrapperEl.removeEventListener(
                      "transitionend",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    (n.onTranslateToWrapperTransitionEnd = null),
                    delete n.onTranslateToWrapperTransitionEnd,
                    (n.animating = !1),
                    t && n.emit("transitionEnd")));
              }),
            n.wrapperEl.addEventListener(
              "transitionend",
              n.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var sd = {
    getTranslate: Ju,
    setTranslate: ed,
    minTranslate: td,
    maxTranslate: id,
    translateTo: rd,
  };
  function nd(s, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${s}ms`),
      (t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
      t.emit("setTransition", s, e);
  }
  function $o(s) {
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
  function ad(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      $o({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
  }
  function od(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        $o({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
  }
  var ld = { setTransition: nd, transitionStart: ad, transitionEnd: od };
  function cd(s, e, t, i, r) {
    s === void 0 && (s = 0),
      t === void 0 && (t = !0),
      typeof s == "string" && (s = parseInt(s, 10));
    const n = this;
    let a = s;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: c,
      previousIndex: u,
      activeIndex: h,
      rtlTranslate: m,
      wrapperEl: p,
      enabled: f,
    } = n;
    if (
      (!f && !i && !r) ||
      n.destroyed ||
      (n.animating && o.preventInteractionOnTransition)
    )
      return !1;
    typeof e == "undefined" && (e = n.params.speed);
    const d = Math.min(n.params.slidesPerGroupSkip, a);
    let g = d + Math.floor((a - d) / n.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const w = -l[g];
    if (o.normalizeSlideIndex)
      for (let T = 0; T < c.length; T += 1) {
        const M = -Math.floor(w * 100),
          x = Math.floor(c[T] * 100),
          E = Math.floor(c[T + 1] * 100);
        typeof c[T + 1] != "undefined"
          ? M >= x && M < E - (E - x) / 2
            ? (a = T)
            : M >= x && M < E && (a = T + 1)
          : M >= x && (a = T);
      }
    if (
      n.initialized &&
      a !== h &&
      ((!n.allowSlideNext &&
        (m
          ? w > n.translate && w > n.minTranslate()
          : w < n.translate && w < n.minTranslate())) ||
        (!n.allowSlidePrev &&
          w > n.translate &&
          w > n.maxTranslate() &&
          (h || 0) !== a))
    )
      return !1;
    a !== (u || 0) && t && n.emit("beforeSlideChangeStart"),
      n.updateProgress(w);
    let y;
    a > h ? (y = "next") : a < h ? (y = "prev") : (y = "reset");
    const v = n.virtual && n.params.virtual.enabled;
    if (!(v && r) && ((m && -w === n.translate) || (!m && w === n.translate)))
      return (
        n.updateActiveIndex(a),
        o.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        o.effect !== "slide" && n.setTranslate(w),
        y !== "reset" && (n.transitionStart(t, y), n.transitionEnd(t, y)),
        !1
      );
    if (o.cssMode) {
      const T = n.isHorizontal(),
        M = m ? w : -w;
      if (e === 0)
        v &&
          ((n.wrapperEl.style.scrollSnapType = "none"),
          (n._immediateVirtual = !0)),
          v && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
            ? ((n._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                p[T ? "scrollLeft" : "scrollTop"] = M;
              }))
            : (p[T ? "scrollLeft" : "scrollTop"] = M),
          v &&
            requestAnimationFrame(() => {
              (n.wrapperEl.style.scrollSnapType = ""),
                (n._immediateVirtual = !1);
            });
      else {
        if (!n.support.smoothScroll)
          return (
            Lo({ swiper: n, targetPosition: M, side: T ? "left" : "top" }), !0
          );
        p.scrollTo({ [T ? "left" : "top"]: M, behavior: "smooth" });
      }
      return !0;
    }
    const S = zo().isSafari;
    return (
      v && !r && S && n.isElement && n.virtual.update(!1, !1, a),
      n.setTransition(e),
      n.setTranslate(w),
      n.updateActiveIndex(a),
      n.updateSlidesClasses(),
      n.emit("beforeTransitionStart", e, i),
      n.transitionStart(t, y),
      e === 0
        ? n.transitionEnd(t, y)
        : n.animating ||
          ((n.animating = !0),
          n.onSlideToWrapperTransitionEnd ||
            (n.onSlideToWrapperTransitionEnd = function (M) {
              !n ||
                n.destroyed ||
                (M.target === this &&
                  (n.wrapperEl.removeEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  (n.onSlideToWrapperTransitionEnd = null),
                  delete n.onSlideToWrapperTransitionEnd,
                  n.transitionEnd(t, y)));
            }),
          n.wrapperEl.addEventListener(
            "transitionend",
            n.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function ud(s, e, t, i) {
    s === void 0 && (s = 0),
      t === void 0 && (t = !0),
      typeof s == "string" && (s = parseInt(s, 10));
    const r = this;
    if (r.destroyed) return;
    typeof e == "undefined" && (e = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = s;
    if (r.params.loop)
      if (r.virtual && r.params.virtual.enabled) a = a + r.virtual.slidesBefore;
      else {
        let o;
        if (n) {
          const m = a * r.params.grid.rows;
          o = r.slides.find(
            (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
          ).column;
        } else o = r.getSlideIndexByData(a);
        const l = n
            ? Math.ceil(r.slides.length / r.params.grid.rows)
            : r.slides.length,
          { centeredSlides: c } = r.params;
        let u = r.params.slidesPerView;
        u === "auto"
          ? (u = r.slidesPerViewDynamic())
          : ((u = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
            c && u % 2 === 0 && (u = u + 1));
        let h = l - o < u;
        if (
          (c && (h = h || o < Math.ceil(u / 2)),
          i && c && r.params.slidesPerView !== "auto" && !n && (h = !1),
          h)
        ) {
          const m = c
            ? o < r.activeIndex
              ? "prev"
              : "next"
            : o - r.activeIndex - 1 < r.params.slidesPerView
            ? "next"
            : "prev";
          r.loopFix({
            direction: m,
            slideTo: !0,
            activeSlideIndex: m === "next" ? o + 1 : o - l + 1,
            slideRealIndex: m === "next" ? r.realIndex : void 0,
          });
        }
        if (n) {
          const m = a * r.params.grid.rows;
          a = r.slides.find(
            (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
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
  function dd(s, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      { enabled: r, params: n, animating: a } = i;
    if (!r || i.destroyed) return i;
    typeof s == "undefined" && (s = i.params.speed);
    let o = n.slidesPerGroup;
    n.slidesPerView === "auto" &&
      n.slidesPerGroup === 1 &&
      n.slidesPerGroupAuto &&
      (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
      c = i.virtual && n.virtual.enabled;
    if (n.loop) {
      if (a && !c && n.loopPreventsSliding) return !1;
      if (
        (i.loopFix({ direction: "next" }),
        (i._clientLeft = i.wrapperEl.clientLeft),
        i.activeIndex === i.slides.length - 1 && n.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + l, s, e, t);
          }),
          !0
        );
    }
    return n.rewind && i.isEnd
      ? i.slideTo(0, s, e, t)
      : i.slideTo(i.activeIndex + l, s, e, t);
  }
  function fd(s, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: r,
        snapGrid: n,
        slidesGrid: a,
        rtlTranslate: o,
        enabled: l,
        animating: c,
      } = i;
    if (!l || i.destroyed) return i;
    typeof s == "undefined" && (s = i.params.speed);
    const u = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (c && !u && r.loopPreventsSliding) return !1;
      i.loopFix({ direction: "prev" }),
        (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const h = o ? i.translate : -i.translate;
    function m(y) {
      return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
    }
    const p = m(h),
      f = n.map((y) => m(y)),
      d = r.freeMode && r.freeMode.enabled;
    let g = n[f.indexOf(p) - 1];
    if (typeof g == "undefined" && (r.cssMode || d)) {
      let y;
      n.forEach((v, _) => {
        p >= v && (y = _);
      }),
        typeof y != "undefined" && (g = d ? n[y] : n[y > 0 ? y - 1 : y]);
    }
    let w = 0;
    if (
      (typeof g != "undefined" &&
        ((w = a.indexOf(g)),
        w < 0 && (w = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((w = w - i.slidesPerViewDynamic("previous", !0) + 1),
          (w = Math.max(w, 0)))),
      r.rewind && i.isBeginning)
    ) {
      const y =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(y, s, e, t);
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(w, s, e, t);
        }),
        !0
      );
    return i.slideTo(w, s, e, t);
  }
  function pd(s, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof s == "undefined" && (s = i.params.speed),
        i.slideTo(i.activeIndex, s, e, t)
      );
  }
  function hd(s, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof s == "undefined" && (s = r.params.speed);
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n),
      o = a + Math.floor((n - a) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const c = r.snapGrid[o],
        u = r.snapGrid[o + 1];
      l - c > (u - c) * i && (n += r.params.slidesPerGroup);
    } else {
      const c = r.snapGrid[o - 1],
        u = r.snapGrid[o];
      l - c <= (u - c) * i && (n -= r.params.slidesPerGroup);
    }
    return (
      (n = Math.max(n, 0)),
      (n = Math.min(n, r.slidesGrid.length - 1)),
      r.slideTo(n, s, e, t)
    );
  }
  function md() {
    const s = this;
    if (s.destroyed) return;
    const { params: e, slidesEl: t } = s,
      i =
        e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
    let r = s.clickedIndex,
      n;
    const a = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (s.animating) return;
      (n = parseInt(
        s.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        e.centeredSlides
          ? r < s.loopedSlides - i / 2 ||
            r > s.slides.length - s.loopedSlides + i / 2
            ? (s.loopFix(),
              (r = s.getSlideIndex(
                Qe(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
              )),
              Zi(() => {
                s.slideTo(r);
              }))
            : s.slideTo(r)
          : r > s.slides.length - i
          ? (s.loopFix(),
            (r = s.getSlideIndex(
              Qe(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
            )),
            Zi(() => {
              s.slideTo(r);
            }))
          : s.slideTo(r);
    } else s.slideTo(r);
  }
  var gd = {
    slideTo: cd,
    slideToLoop: ud,
    slideNext: dd,
    slidePrev: fd,
    slideReset: pd,
    slideToClosest: hd,
    slideToClickedSlide: md,
  };
  function vd(s, e) {
    const t = this,
      { params: i, slidesEl: r } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    const n = () => {
        Qe(r, `.${i.slideClass}, swiper-slide`).forEach((m, p) => {
          m.setAttribute("data-swiper-slide-index", p);
        });
      },
      a = t.grid && i.grid && i.grid.rows > 1,
      o = i.slidesPerGroup * (a ? i.grid.rows : 1),
      l = t.slides.length % o !== 0,
      c = a && t.slides.length % i.grid.rows !== 0,
      u = (h) => {
        for (let m = 0; m < h; m += 1) {
          const p = t.isElement
            ? It("swiper-slide", [i.slideBlankClass])
            : It("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(p);
        }
      };
    if (l) {
      if (i.loopAddBlankSlides) {
        const h = o - (t.slides.length % o);
        u(h), t.recalcSlides(), t.updateSlides();
      } else
        js(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      n();
    } else if (c) {
      if (i.loopAddBlankSlides) {
        const h = i.grid.rows - (t.slides.length % i.grid.rows);
        u(h), t.recalcSlides(), t.updateSlides();
      } else
        js(
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
  function yd(s) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: r,
      activeSlideIndex: n,
      initial: a,
      byController: o,
      byMousewheel: l,
    } = s === void 0 ? {} : s;
    const c = this;
    if (!c.params.loop) return;
    c.emit("beforeLoopFix");
    const {
        slides: u,
        allowSlidePrev: h,
        allowSlideNext: m,
        slidesEl: p,
        params: f,
      } = c,
      { centeredSlides: d, initialSlide: g } = f;
    if (
      ((c.allowSlidePrev = !0),
      (c.allowSlideNext = !0),
      c.virtual && f.virtual.enabled)
    ) {
      t &&
        (!f.centeredSlides && c.snapIndex === 0
          ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
          : f.centeredSlides && c.snapIndex < f.slidesPerView
          ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
          : c.snapIndex === c.snapGrid.length - 1 &&
            c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
        (c.allowSlidePrev = h),
        (c.allowSlideNext = m),
        c.emit("loopFix");
      return;
    }
    let w = f.slidesPerView;
    w === "auto"
      ? (w = c.slidesPerViewDynamic())
      : ((w = Math.ceil(parseFloat(f.slidesPerView, 10))),
        d && w % 2 === 0 && (w = w + 1));
    const y = f.slidesPerGroupAuto ? w : f.slidesPerGroup;
    let v = y;
    v % y !== 0 && (v += y - (v % y)),
      (v += f.loopAdditionalSlides),
      (c.loopedSlides = v);
    const _ = c.grid && f.grid && f.grid.rows > 1;
    u.length < w + v || (c.params.effect === "cards" && u.length < w + v * 2)
      ? js(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : _ &&
        f.grid.fill === "row" &&
        js(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const b = [],
      S = [],
      T = _ ? Math.ceil(u.length / f.grid.rows) : u.length,
      M = a && T - g < w && !d;
    let x = M ? g : c.activeIndex;
    typeof n == "undefined"
      ? (n = c.getSlideIndex(
          u.find((z) => z.classList.contains(f.slideActiveClass))
        ))
      : (x = n);
    const E = i === "next" || !i,
      I = i === "prev" || !i;
    let P = 0,
      k = 0;
    const D =
      (_ ? u[n].column : n) + (d && typeof r == "undefined" ? -w / 2 + 0.5 : 0);
    if (D < v) {
      P = Math.max(v - D, y);
      for (let z = 0; z < v - D; z += 1) {
        const A = z - Math.floor(z / T) * T;
        if (_) {
          const L = T - A - 1;
          for (let $ = u.length - 1; $ >= 0; $ -= 1)
            u[$].column === L && b.push($);
        } else b.push(T - A - 1);
      }
    } else if (D + w > T - v) {
      (k = Math.max(D - (T - v * 2), y)), M && (k = Math.max(k, w - T + g + 1));
      for (let z = 0; z < k; z += 1) {
        const A = z - Math.floor(z / T) * T;
        _
          ? u.forEach((L, $) => {
              L.column === A && S.push($);
            })
          : S.push(A);
      }
    }
    if (
      ((c.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        c.__preventObserver__ = !1;
      }),
      c.params.effect === "cards" &&
        u.length < w + v * 2 &&
        (S.includes(n) && S.splice(S.indexOf(n), 1),
        b.includes(n) && b.splice(b.indexOf(n), 1)),
      I &&
        b.forEach((z) => {
          (u[z].swiperLoopMoveDOM = !0),
            p.prepend(u[z]),
            (u[z].swiperLoopMoveDOM = !1);
        }),
      E &&
        S.forEach((z) => {
          (u[z].swiperLoopMoveDOM = !0),
            p.append(u[z]),
            (u[z].swiperLoopMoveDOM = !1);
        }),
      c.recalcSlides(),
      f.slidesPerView === "auto"
        ? c.updateSlides()
        : _ &&
          ((b.length > 0 && I) || (S.length > 0 && E)) &&
          c.slides.forEach((z, A) => {
            c.grid.updateSlide(A, z, c.slides);
          }),
      f.watchSlidesProgress && c.updateSlidesOffset(),
      t)
    ) {
      if (b.length > 0 && I) {
        if (typeof e == "undefined") {
          const z = c.slidesGrid[x],
            L = c.slidesGrid[x + P] - z;
          l
            ? c.setTranslate(c.translate - L)
            : (c.slideTo(x + Math.ceil(P), 0, !1, !0),
              r &&
                ((c.touchEventsData.startTranslate =
                  c.touchEventsData.startTranslate - L),
                (c.touchEventsData.currentTranslate =
                  c.touchEventsData.currentTranslate - L)));
        } else if (r) {
          const z = _ ? b.length / f.grid.rows : b.length;
          c.slideTo(c.activeIndex + z, 0, !1, !0),
            (c.touchEventsData.currentTranslate = c.translate);
        }
      } else if (S.length > 0 && E)
        if (typeof e == "undefined") {
          const z = c.slidesGrid[x],
            L = c.slidesGrid[x - k] - z;
          l
            ? c.setTranslate(c.translate - L)
            : (c.slideTo(x - k, 0, !1, !0),
              r &&
                ((c.touchEventsData.startTranslate =
                  c.touchEventsData.startTranslate - L),
                (c.touchEventsData.currentTranslate =
                  c.touchEventsData.currentTranslate - L)));
        } else {
          const z = _ ? S.length / f.grid.rows : S.length;
          c.slideTo(c.activeIndex - z, 0, !1, !0);
        }
    }
    if (
      ((c.allowSlidePrev = h),
      (c.allowSlideNext = m),
      c.controller && c.controller.control && !o)
    ) {
      const z = {
        slideRealIndex: e,
        direction: i,
        setTranslate: r,
        activeSlideIndex: n,
        byController: !0,
      };
      Array.isArray(c.controller.control)
        ? c.controller.control.forEach((A) => {
            !A.destroyed &&
              A.params.loop &&
              A.loopFix(
                ko(Xn({}, z), {
                  slideTo: A.params.slidesPerView === f.slidesPerView ? t : !1,
                })
              );
          })
        : c.controller.control instanceof c.constructor &&
          c.controller.control.params.loop &&
          c.controller.control.loopFix(
            ko(Xn({}, z), {
              slideTo:
                c.controller.control.params.slidesPerView === f.slidesPerView
                  ? t
                  : !1,
            })
          );
    }
    c.emit("loopFix");
  }
  function wd() {
    const s = this,
      { params: e, slidesEl: t } = s;
    if (!e.loop || !t || (s.virtual && s.params.virtual.enabled)) return;
    s.recalcSlides();
    const i = [];
    s.slides.forEach((r) => {
      const n =
        typeof r.swiperSlideIndex == "undefined"
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
  var _d = { loopCreate: vd, loopFix: yd, loopDestroy: wd };
  function bd(s) {
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
  function Sd() {
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
  var xd = { setGrabCursor: bd, unsetGrabCursor: Sd };
  function Td(s, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === Ye() || i === be()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(s);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function No(s, e, t) {
    const i = be(),
      { params: r } = s,
      n = r.edgeSwipeDetection,
      a = r.edgeSwipeThreshold;
    return n && (t <= a || t >= i.innerWidth - a)
      ? n === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function Ed(s) {
    const e = this,
      t = Ye();
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      No(e, i, i.targetTouches[0].pageX);
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
    let l = i.target;
    if (
      (n.touchEventsTarget === "wrapper" && !Iu(l, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const c = !!n.noSwipingClass && n.noSwipingClass !== "",
      u = i.composedPath ? i.composedPath() : i.path;
    c && i.target && i.target.shadowRoot && u && (l = u[0]);
    const h = n.noSwipingSelector
        ? n.noSwipingSelector
        : `.${n.noSwipingClass}`,
      m = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (m ? Td(h, l) : l.closest(h))) {
      e.allowClick = !0;
      return;
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const p = a.currentX,
      f = a.currentY;
    if (!No(e, i, p)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = p),
      (a.startY = f),
      (r.touchStartTime = Gt()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      n.threshold > 0 && (r.allowThresholdMove = !1);
    let d = !0;
    l.matches(r.focusableElements) &&
      ((d = !1), l.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== l &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !l.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const g = d && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || g) &&
      !l.isContentEditable &&
      i.preventDefault(),
      n.freeMode &&
        n.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !n.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", i);
  }
  function Md(s) {
    const e = Ye(),
      t = this,
      i = t.touchEventsData,
      { params: r, touches: n, rtlTranslate: a, enabled: o } = t;
    if (!o || (!r.simulateTouch && s.pointerType === "mouse")) return;
    let l = s;
    if (
      (l.originalEvent && (l = l.originalEvent),
      l.type === "pointermove" &&
        (i.touchId !== null || l.pointerId !== i.pointerId))
    )
      return;
    let c;
    if (l.type === "touchmove") {
      if (
        ((c = [...l.changedTouches].find((S) => S.identifier === i.touchId)),
        !c || c.identifier !== i.touchId)
      )
        return;
    } else c = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
      return;
    }
    const u = c.pageX,
      h = c.pageY;
    if (l.preventedByNestedSwiper) {
      (n.startX = u), (n.startY = h);
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(n, { startX: u, startY: h, currentX: u, currentY: h }),
          (i.touchStartTime = Gt()));
      return;
    }
    if (r.touchReleaseOnEdges && !r.loop)
      if (t.isVertical()) {
        if (
          (h < n.startY && t.translate <= t.maxTranslate()) ||
          (h > n.startY && t.translate >= t.minTranslate())
        ) {
          (i.isTouched = !1), (i.isMoved = !1);
          return;
        }
      } else {
        if (
          a &&
          ((u > n.startX && -t.translate <= t.maxTranslate()) ||
            (u < n.startX && -t.translate >= t.minTranslate()))
        )
          return;
        if (
          !a &&
          ((u < n.startX && t.translate <= t.maxTranslate()) ||
            (u > n.startX && t.translate >= t.minTranslate()))
        )
          return;
      }
    if (
      (e.activeElement &&
        e.activeElement.matches(i.focusableElements) &&
        e.activeElement !== l.target &&
        l.pointerType !== "mouse" &&
        e.activeElement.blur(),
      e.activeElement &&
        l.target === e.activeElement &&
        l.target.matches(i.focusableElements))
    ) {
      (i.isMoved = !0), (t.allowClick = !1);
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
      (n.previousX = n.currentX),
      (n.previousY = n.currentY),
      (n.currentX = u),
      (n.currentY = h);
    const m = n.currentX - n.startX,
      p = n.currentY - n.startY;
    if (
      t.params.threshold &&
      Math.sqrt(ht(m, 2) + ht(p, 2)) < t.params.threshold
    )
      return;
    if (typeof i.isScrolling == "undefined") {
      let S;
      (t.isHorizontal() && n.currentY === n.startY) ||
      (t.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : m * m + p * p >= 25 &&
          ((S = (Math.atan2(Math.abs(p), Math.abs(m)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? S > r.touchAngle
            : 90 - S > r.touchAngle));
    }
    if (
      (i.isScrolling && t.emit("touchMoveOpposite", l),
      typeof i.startMoving == "undefined" &&
        (n.currentX !== n.startX || n.currentY !== n.startY) &&
        (i.startMoving = !0),
      i.isScrolling ||
        (l.type === "touchmove" && i.preventTouchMoveFromPointerMove))
    ) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving) return;
    (t.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let f = t.isHorizontal() ? m : p,
      d = t.isHorizontal()
        ? n.currentX - n.previousX
        : n.currentY - n.previousY;
    r.oneWayMovement &&
      ((f = Math.abs(f) * (a ? 1 : -1)), (d = Math.abs(d) * (a ? 1 : -1))),
      (n.diff = f),
      (f *= r.touchRatio),
      a && ((f = -f), (d = -d));
    const g = t.touchesDirection;
    (t.swipeDirection = f > 0 ? "prev" : "next"),
      (t.touchesDirection = d > 0 ? "prev" : "next");
    const w = t.params.loop && !r.cssMode,
      y =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (w && y && t.loopFix({ direction: t.swipeDirection }),
        (i.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const S = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(S);
      }
      (i.allowMomentumBounce = !1),
        r.grabCursor &&
          (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
          t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l);
    }
    let v;
    if (
      (new Date().getTime(),
      r._loopSwapReset !== !1 &&
        i.isMoved &&
        i.allowThresholdMove &&
        g !== t.touchesDirection &&
        w &&
        y &&
        Math.abs(f) >= 1)
    ) {
      Object.assign(n, {
        startX: u,
        startY: h,
        currentX: u,
        currentY: h,
        startTranslate: i.currentTranslate,
      }),
        (i.loopSwapReset = !0),
        (i.startTranslate = i.currentTranslate);
      return;
    }
    t.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = f + i.startTranslate);
    let _ = !0,
      b = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (b = 0),
      f > 0
        ? (w &&
            y &&
            !v &&
            i.allowThresholdMove &&
            i.currentTranslate >
              (r.centeredSlides
                ? t.minTranslate() -
                  t.slidesSizesGrid[t.activeIndex + 1] -
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.activeIndex + 1] +
                      t.params.spaceBetween
                    : 0) -
                  t.params.spaceBetween
                : t.minTranslate()) &&
            t.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > t.minTranslate() &&
            ((_ = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                ht(-t.minTranslate() + i.startTranslate + f, b))))
        : f < 0 &&
          (w &&
            y &&
            !v &&
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
            ((_ = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                ht(t.maxTranslate() - i.startTranslate - f, b)))),
      _ && (l.preventedByNestedSwiper = !0),
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
      r.freeMode &&
        r.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(i.currentTranslate),
      t.setTranslate(i.currentTranslate));
  }
  function Cd(s) {
    const e = this,
      t = e.touchEventsData;
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((r = [...i.changedTouches].find((b) => b.identifier === t.touchId)),
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
      rtlTranslate: l,
      slidesGrid: c,
      enabled: u,
    } = e;
    if (!u || (!a.simulateTouch && i.pointerType === "mouse")) return;
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
    const h = Gt(),
      m = h - t.touchStartTime;
    if (e.allowClick) {
      const b = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((b && b[0]) || i.target, b),
        e.emit("tap click", i),
        m < 300 &&
          h - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = Gt()),
      Zi(() => {
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
    let p;
    if (
      (a.followFinger
        ? (p = l ? e.translate : -e.translate)
        : (p = -t.currentTranslate),
      a.cssMode)
    )
      return;
    if (a.freeMode && a.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: p });
      return;
    }
    const f = p >= -e.maxTranslate() && !e.params.loop;
    let d = 0,
      g = e.slidesSizesGrid[0];
    for (
      let b = 0;
      b < c.length;
      b += b < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const S = b < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof c[b + S] != "undefined"
        ? (f || (p >= c[b] && p < c[b + S])) && ((d = b), (g = c[b + S] - c[b]))
        : (f || p >= c[b]) &&
          ((d = b), (g = c[c.length - 1] - c[c.length - 2]));
    }
    let w = null,
      y = null;
    a.rewind &&
      (e.isBeginning
        ? (y =
            a.virtual && a.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (w = 0));
    const v = (p - c[d]) / g,
      _ = d < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (m > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (v >= a.longSwipesRatio
          ? e.slideTo(a.rewind && e.isEnd ? w : d + _)
          : e.slideTo(d)),
        e.swipeDirection === "prev" &&
          (v > 1 - a.longSwipesRatio
            ? e.slideTo(d + _)
            : y !== null && v < 0 && Math.abs(v) > a.longSwipesRatio
            ? e.slideTo(y)
            : e.slideTo(d));
    } else {
      if (!a.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(d + _)
          : e.slideTo(d)
        : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : d + _),
          e.swipeDirection === "prev" && e.slideTo(y !== null ? y : d));
    }
  }
  function Fo() {
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
  function Pd(s) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && s.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (s.stopPropagation(), s.stopImmediatePropagation())));
  }
  function Ad() {
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
  function Od(s) {
    const e = this;
    Zs(e, s.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function kd() {
    const s = this;
    s.documentTouchHandlerProceeded ||
      ((s.documentTouchHandlerProceeded = !0),
      s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
  }
  const Bo = (s, e) => {
    const t = Ye(),
      { params: i, el: r, wrapperEl: n, device: a } = s,
      o = !!i.nested,
      l = e === "on" ? "addEventListener" : "removeEventListener",
      c = e;
    !r ||
      typeof r == "string" ||
      (t[l]("touchstart", s.onDocumentTouchStart, { passive: !1, capture: o }),
      r[l]("touchstart", s.onTouchStart, { passive: !1 }),
      r[l]("pointerdown", s.onTouchStart, { passive: !1 }),
      t[l]("touchmove", s.onTouchMove, { passive: !1, capture: o }),
      t[l]("pointermove", s.onTouchMove, { passive: !1, capture: o }),
      t[l]("touchend", s.onTouchEnd, { passive: !0 }),
      t[l]("pointerup", s.onTouchEnd, { passive: !0 }),
      t[l]("pointercancel", s.onTouchEnd, { passive: !0 }),
      t[l]("touchcancel", s.onTouchEnd, { passive: !0 }),
      t[l]("pointerout", s.onTouchEnd, { passive: !0 }),
      t[l]("pointerleave", s.onTouchEnd, { passive: !0 }),
      t[l]("contextmenu", s.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[l]("click", s.onClick, !0),
      i.cssMode && n[l]("scroll", s.onScroll),
      i.updateOnWindowResize
        ? s[c](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Fo,
            !0
          )
        : s[c]("observerUpdate", Fo, !0),
      r[l]("load", s.onLoad, { capture: !0 }));
  };
  function Ld() {
    const s = this,
      { params: e } = s;
    (s.onTouchStart = Ed.bind(s)),
      (s.onTouchMove = Md.bind(s)),
      (s.onTouchEnd = Cd.bind(s)),
      (s.onDocumentTouchStart = kd.bind(s)),
      e.cssMode && (s.onScroll = Ad.bind(s)),
      (s.onClick = Pd.bind(s)),
      (s.onLoad = Od.bind(s)),
      Bo(s, "on");
  }
  function Id() {
    Bo(this, "off");
  }
  var Dd = { attachEvents: Ld, detachEvents: Id };
  const qo = (s, e) => s.grid && e.grid && e.grid.rows > 1;
  function zd() {
    const s = this,
      { realIndex: e, initialized: t, params: i, el: r } = s,
      n = i.breakpoints;
    if (!n || (n && Object.keys(n).length === 0)) return;
    const a = Ye(),
      o =
        i.breakpointsBase === "window" || !i.breakpointsBase
          ? i.breakpointsBase
          : "container",
      l =
        ["window", "container"].includes(i.breakpointsBase) ||
        !i.breakpointsBase
          ? s.el
          : a.querySelector(i.breakpointsBase),
      c = s.getBreakpoint(n, o, l);
    if (!c || s.currentBreakpoint === c) return;
    const h = (c in n ? n[c] : void 0) || s.originalParams,
      m = qo(s, i),
      p = qo(s, h),
      f = s.params.grabCursor,
      d = h.grabCursor,
      g = i.enabled;
    m && !p
      ? (r.classList.remove(
          `${i.containerModifierClass}grid`,
          `${i.containerModifierClass}grid-column`
        ),
        s.emitContainerClasses())
      : !m &&
        p &&
        (r.classList.add(`${i.containerModifierClass}grid`),
        ((h.grid.fill && h.grid.fill === "column") ||
          (!h.grid.fill && i.grid.fill === "column")) &&
          r.classList.add(`${i.containerModifierClass}grid-column`),
        s.emitContainerClasses()),
      f && !d ? s.unsetGrabCursor() : !f && d && s.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((S) => {
        if (typeof h[S] == "undefined") return;
        const T = i[S] && i[S].enabled,
          M = h[S] && h[S].enabled;
        T && !M && s[S].disable(), !T && M && s[S].enable();
      });
    const w = h.direction && h.direction !== i.direction,
      y = i.loop && (h.slidesPerView !== i.slidesPerView || w),
      v = i.loop;
    w && t && s.changeDirection(), Lt(s.params, h);
    const _ = s.params.enabled,
      b = s.params.loop;
    Object.assign(s, {
      allowTouchMove: s.params.allowTouchMove,
      allowSlideNext: s.params.allowSlideNext,
      allowSlidePrev: s.params.allowSlidePrev,
    }),
      g && !_ ? s.disable() : !g && _ && s.enable(),
      (s.currentBreakpoint = c),
      s.emit("_beforeBreakpoint", h),
      t &&
        (y
          ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
          : !v && b
          ? (s.loopCreate(e), s.updateSlides())
          : v && !b && s.loopDestroy()),
      s.emit("breakpoint", h);
  }
  function Rd(s, e, t) {
    if ((e === void 0 && (e = "window"), !s || (e === "container" && !t)))
      return;
    let i = !1;
    const r = be(),
      n = e === "window" ? r.innerHeight : t.clientHeight,
      a = Object.keys(s).map((o) => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
          const l = parseFloat(o.substr(1));
          return { value: n * l, point: o };
        }
        return { value: o, point: o };
      });
    a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
      const { point: l, value: c } = a[o];
      e === "window"
        ? r.matchMedia(`(min-width: ${c}px)`).matches && (i = l)
        : c <= t.clientWidth && (i = l);
    }
    return i || "max";
  }
  var $d = { setBreakpoint: zd, getBreakpoint: Rd };
  function Nd(s, e) {
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
  function Fd() {
    const s = this,
      { classNames: e, params: t, rtl: i, el: r, device: n } = s,
      a = Nd(
        [
          "initialized",
          t.direction,
          { "free-mode": s.params.freeMode && t.freeMode.enabled },
          { autoheight: t.autoHeight },
          { rtl: i },
          { grid: t.grid && t.grid.rows > 1 },
          {
            "grid-column":
              t.grid && t.grid.rows > 1 && t.grid.fill === "column",
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
  function Bd() {
    const s = this,
      { el: e, classNames: t } = s;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), s.emitContainerClasses());
  }
  var qd = { addClasses: Fd, removeClasses: Bd };
  function Hd() {
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
  var Vd = { checkOverflow: Hd },
    Ho = {
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
      focusableElements:
        "input, select, option, textarea, button, video, label",
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
  function Wd(s, e) {
    return function (i) {
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
    };
  }
  const ta = {
      eventsEmitter: qu,
      update: Qu,
      translate: sd,
      transition: ld,
      slide: gd,
      loop: _d,
      grabCursor: xd,
      events: Dd,
      breakpoints: $d,
      checkOverflow: Vd,
      classes: qd,
    },
    ia = {};
  class Tt {
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
      const a = Ye();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const u = [];
        return (
          a.querySelectorAll(t.el).forEach((h) => {
            const m = Lt({}, t, { el: h });
            u.push(new Tt(m));
          }),
          u
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = Io()),
        (o.device = Do({ userAgent: t.userAgent })),
        (o.browser = zo()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const l = {};
      o.modules.forEach((u) => {
        u({
          params: t,
          swiper: o,
          extendParams: Wd(t, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const c = Lt({}, Ho, l);
      return (
        (o.params = Lt({}, c, ia, t)),
        (o.originalParams = Lt({}, o.params)),
        (o.passedParams = Lt({}, t)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((u) => {
            o.on(u, o.params.on[u]);
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
            return Math.trunc(this.translate / ht(2, 23)) * ht(2, 23);
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
        r = Qe(t, `.${i.slideClass}, swiper-slide`),
        n = ss(r[0]);
      return ss(e) - n;
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
      e.slides = Qe(t, `.${i.slideClass}, swiper-slide`);
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
      i.translateTo(a, typeof t == "undefined" ? 0 : t),
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
          size: l,
          activeIndex: c,
        } = i;
      let u = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let h = n[c] ? Math.ceil(n[c].swiperSlideSize) : 0,
          m;
        for (let p = c + 1; p < n.length; p += 1)
          n[p] &&
            !m &&
            ((h += Math.ceil(n[p].swiperSlideSize)),
            (u += 1),
            h > l && (m = !0));
        for (let p = c - 1; p >= 0; p -= 1)
          n[p] &&
            !m &&
            ((h += n[p].swiperSlideSize), (u += 1), h > l && (m = !0));
      } else if (e === "current")
        for (let h = c + 1; h < n.length; h += 1)
          (t ? a[h] + o[h] - a[c] < l : a[h] - a[c] < l) && (u += 1);
      else for (let h = c - 1; h >= 0; h -= 1) a[c] - a[h] < l && (u += 1);
      return u;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
          a.complete && Zs(e, a);
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
      const r = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a =
        i && i.shadowRoot && i.shadowRoot.querySelector
          ? i.shadowRoot.querySelector(r())
          : Qe(i, r())[0];
      return (
        !a &&
          t.params.createElements &&
          ((a = It("div", t.params.wrapperClass)),
          i.append(a),
          Qe(i, `.${t.params.slideClass}`).forEach((o) => {
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
          rtl: i.dir.toLowerCase() === "rtl" || Di(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || Di(i, "direction") === "rtl"),
          wrongRTL: Di(a, "display") === "-webkit-box",
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
            ? Zs(t, n)
            : n.addEventListener("load", (a) => {
                Zs(t, a.target);
              });
        }),
        ea(t),
        (t.initialized = !0),
        ea(t),
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
        typeof i.params == "undefined" ||
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
              o.forEach((l) => {
                l.classList.remove(
                  r.slideVisibleClass,
                  r.slideFullyVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  l.removeAttribute("style"),
                  l.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((l) => {
            i.off(l);
          }),
          e !== !1 &&
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Au(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Lt(ia, e);
    }
    static get extendedDefaults() {
      return ia;
    }
    static get defaults() {
      return Ho;
    }
    static installModule(e) {
      Tt.prototype.__modules__ || (Tt.prototype.__modules__ = []);
      const t = Tt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Tt.installModule(t)), Tt)
        : (Tt.installModule(e), Tt);
    }
  }
  Object.keys(ta).forEach((s) => {
    Object.keys(ta[s]).forEach((e) => {
      Tt.prototype[e] = ta[s][e];
    });
  }),
    Tt.use([Fu, Bu]);
  function Yd(s) {
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
    const a = Ye();
    e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    const o = a.createElement("div");
    function l(f, d) {
      const g = e.params.virtual;
      if (g.cache && e.virtual.cache[d]) return e.virtual.cache[d];
      let w;
      return (
        g.renderSlide
          ? ((w = g.renderSlide.call(e, f, d)),
            typeof w == "string" && ((o.innerHTML = w), (w = o.children[0])))
          : e.isElement
          ? (w = It("swiper-slide"))
          : (w = It("div", e.params.slideClass)),
        w.setAttribute("data-swiper-slide-index", d),
        g.renderSlide || (w.innerHTML = f),
        g.cache && (e.virtual.cache[d] = w),
        w
      );
    }
    function c(f, d, g) {
      const {
        slidesPerView: w,
        slidesPerGroup: y,
        centeredSlides: v,
        loop: _,
        initialSlide: b,
      } = e.params;
      if (d && !_ && b > 0) return;
      const { addSlidesBefore: S, addSlidesAfter: T } = e.params.virtual,
        { from: M, to: x, slides: E, slidesGrid: I, offset: P } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const k = typeof g == "undefined" ? e.activeIndex || 0 : g;
      let O;
      e.rtlTranslate ? (O = "right") : (O = e.isHorizontal() ? "left" : "top");
      let D, z;
      v
        ? ((D = Math.floor(w / 2) + y + T), (z = Math.floor(w / 2) + y + S))
        : ((D = w + (y - 1) + T), (z = (_ ? w : y) + S));
      let A = k - z,
        L = k + D;
      _ || ((A = Math.max(A, 0)), (L = Math.min(L, E.length - 1)));
      let $ = (e.slidesGrid[A] || 0) - (e.slidesGrid[0] || 0);
      _ && k >= z
        ? ((A -= z), v || ($ += e.slidesGrid[0]))
        : _ && k < z && ((A = -z), v && ($ += e.slidesGrid[0])),
        Object.assign(e.virtual, {
          from: A,
          to: L,
          offset: $,
          slidesGrid: e.slidesGrid,
          slidesBefore: z,
          slidesAfter: D,
        });
      function C() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          r("virtualUpdate");
      }
      if (M === A && x === L && !f) {
        e.slidesGrid !== I &&
          $ !== P &&
          e.slides.forEach((N) => {
            N.style[O] = `${$ - Math.abs(e.cssOverflowAdjustment())}px`;
          }),
          e.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: $,
          from: A,
          to: L,
          slides: (function () {
            const B = [];
            for (let j = A; j <= L; j += 1) B.push(E[j]);
            return B;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? C() : r("virtualUpdate");
        return;
      }
      const W = [],
        K = [],
        pe = (N) => {
          let B = N;
          return (
            N < 0 ? (B = E.length + N) : B >= E.length && (B = B - E.length), B
          );
        };
      if (f)
        e.slides
          .filter((N) => N.matches(`.${e.params.slideClass}, swiper-slide`))
          .forEach((N) => {
            N.remove();
          });
      else
        for (let N = M; N <= x; N += 1)
          if (N < A || N > L) {
            const B = pe(N);
            e.slides
              .filter((j) =>
                j.matches(
                  `.${e.params.slideClass}[data-swiper-slide-index="${B}"], swiper-slide[data-swiper-slide-index="${B}"]`
                )
              )
              .forEach((j) => {
                j.remove();
              });
          }
      const ue = _ ? -E.length : 0,
        F = _ ? E.length * 2 : E.length;
      for (let N = ue; N < F; N += 1)
        if (N >= A && N <= L) {
          const B = pe(N);
          typeof x == "undefined" || f
            ? K.push(B)
            : (N > x && K.push(B), N < M && W.push(B));
        }
      if (
        (K.forEach((N) => {
          e.slidesEl.append(l(E[N], N));
        }),
        _)
      )
        for (let N = W.length - 1; N >= 0; N -= 1) {
          const B = W[N];
          e.slidesEl.prepend(l(E[B], B));
        }
      else
        W.sort((N, B) => B - N),
          W.forEach((N) => {
            e.slidesEl.prepend(l(E[N], N));
          });
      Qe(e.slidesEl, ".swiper-slide, swiper-slide").forEach((N) => {
        N.style[O] = `${$ - Math.abs(e.cssOverflowAdjustment())}px`;
      }),
        C();
    }
    function u(f) {
      if (typeof f == "object" && "length" in f)
        for (let d = 0; d < f.length; d += 1)
          f[d] && e.virtual.slides.push(f[d]);
      else e.virtual.slides.push(f);
      c(!0);
    }
    function h(f) {
      const d = e.activeIndex;
      let g = d + 1,
        w = 1;
      if (Array.isArray(f)) {
        for (let y = 0; y < f.length; y += 1)
          f[y] && e.virtual.slides.unshift(f[y]);
        (g = d + f.length), (w = f.length);
      } else e.virtual.slides.unshift(f);
      if (e.params.virtual.cache) {
        const y = e.virtual.cache,
          v = {};
        Object.keys(y).forEach((_) => {
          const b = y[_],
            S = b.getAttribute("data-swiper-slide-index");
          S && b.setAttribute("data-swiper-slide-index", parseInt(S, 10) + w),
            (v[parseInt(_, 10) + w] = b);
        }),
          (e.virtual.cache = v);
      }
      c(!0), e.slideTo(g, 0);
    }
    function m(f) {
      if (typeof f == "undefined" || f === null) return;
      let d = e.activeIndex;
      if (Array.isArray(f))
        for (let g = f.length - 1; g >= 0; g -= 1)
          e.params.virtual.cache &&
            (delete e.virtual.cache[f[g]],
            Object.keys(e.virtual.cache).forEach((w) => {
              w > f &&
                ((e.virtual.cache[w - 1] = e.virtual.cache[w]),
                e.virtual.cache[w - 1].setAttribute(
                  "data-swiper-slide-index",
                  w - 1
                ),
                delete e.virtual.cache[w]);
            })),
            e.virtual.slides.splice(f[g], 1),
            f[g] < d && (d -= 1),
            (d = Math.max(d, 0));
      else
        e.params.virtual.cache &&
          (delete e.virtual.cache[f],
          Object.keys(e.virtual.cache).forEach((g) => {
            g > f &&
              ((e.virtual.cache[g - 1] = e.virtual.cache[g]),
              e.virtual.cache[g - 1].setAttribute(
                "data-swiper-slide-index",
                g - 1
              ),
              delete e.virtual.cache[g]);
          })),
          e.virtual.slides.splice(f, 1),
          f < d && (d -= 1),
          (d = Math.max(d, 0));
      c(!0), e.slideTo(d, 0);
    }
    function p() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        c(!0),
        e.slideTo(0, 0);
    }
    i("beforeInit", () => {
      if (!e.params.virtual.enabled) return;
      let f;
      if (typeof e.passedParams.virtual.slides == "undefined") {
        const d = [...e.slidesEl.children].filter((g) =>
          g.matches(`.${e.params.slideClass}, swiper-slide`)
        );
        d &&
          d.length &&
          ((e.virtual.slides = [...d]),
          (f = !0),
          d.forEach((g, w) => {
            g.setAttribute("data-swiper-slide-index", w),
              (e.virtual.cache[w] = g),
              g.remove();
          }));
      }
      f || (e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        (e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0),
        c(!1, !0);
    }),
      i("setTranslate", () => {
        e.params.virtual.enabled &&
          (e.params.cssMode && !e._immediateVirtual
            ? (clearTimeout(n),
              (n = setTimeout(() => {
                c();
              }, 100)))
            : c());
      }),
      i("init update resize", () => {
        e.params.virtual.enabled &&
          e.params.cssMode &&
          rs(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: u,
        prependSlide: h,
        removeSlide: m,
        removeAllSlides: p,
        update: c,
      });
  }
  function Xd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Ye(),
      a = be();
    (e.keyboard = { enabled: !1 }),
      t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
    function o(u) {
      if (!e.enabled) return;
      const { rtlTranslate: h } = e;
      let m = u;
      m.originalEvent && (m = m.originalEvent);
      const p = m.keyCode || m.charCode,
        f = e.params.keyboard.pageUpDown,
        d = f && p === 33,
        g = f && p === 34,
        w = p === 37,
        y = p === 39,
        v = p === 38,
        _ = p === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && y) || (e.isVertical() && _) || g)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && w) || (e.isVertical() && v) || d))
      )
        return !1;
      if (
        !(m.shiftKey || m.altKey || m.ctrlKey || m.metaKey) &&
        !(
          n.activeElement &&
          n.activeElement.nodeName &&
          (n.activeElement.nodeName.toLowerCase() === "input" ||
            n.activeElement.nodeName.toLowerCase() === "textarea")
        )
      ) {
        if (e.params.keyboard.onlyInViewport && (d || g || w || y || v || _)) {
          let b = !1;
          if (
            Ji(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
            Ji(e.el, `.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const S = e.el,
            T = S.clientWidth,
            M = S.clientHeight,
            x = a.innerWidth,
            E = a.innerHeight,
            I = Us(S);
          h && (I.left -= S.scrollLeft);
          const P = [
            [I.left, I.top],
            [I.left + T, I.top],
            [I.left, I.top + M],
            [I.left + T, I.top + M],
          ];
          for (let k = 0; k < P.length; k += 1) {
            const O = P[k];
            if (O[0] >= 0 && O[0] <= x && O[1] >= 0 && O[1] <= E) {
              if (O[0] === 0 && O[1] === 0) continue;
              b = !0;
            }
          }
          if (!b) return;
        }
        e.isHorizontal()
          ? ((d || g || w || y) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (((g || y) && !h) || ((d || w) && h)) && e.slideNext(),
            (((d || w) && !h) || ((g || y) && h)) && e.slidePrev())
          : ((d || g || v || _) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (g || _) && e.slideNext(),
            (d || v) && e.slidePrev()),
          r("keyPress", p);
      }
    }
    function l() {
      e.keyboard.enabled ||
        (n.addEventListener("keydown", o), (e.keyboard.enabled = !0));
    }
    function c() {
      e.keyboard.enabled &&
        (n.removeEventListener("keydown", o), (e.keyboard.enabled = !1));
    }
    i("init", () => {
      e.params.keyboard.enabled && l();
    }),
      i("destroy", () => {
        e.keyboard.enabled && c();
      }),
      Object.assign(e.keyboard, { enable: l, disable: c });
  }
  function Gd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = be();
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
      l;
    const c = [];
    function u(v) {
      let T = 0,
        M = 0,
        x = 0,
        E = 0;
      return (
        "detail" in v && (M = v.detail),
        "wheelDelta" in v && (M = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (M = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (T = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((T = M), (M = 0)),
        (x = T * 10),
        (E = M * 10),
        "deltaY" in v && (E = v.deltaY),
        "deltaX" in v && (x = v.deltaX),
        v.shiftKey && !x && ((x = E), (E = 0)),
        (x || E) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((x *= 40), (E *= 40))
            : ((x *= 800), (E *= 800))),
        x && !T && (T = x < 1 ? -1 : 1),
        E && !M && (M = E < 1 ? -1 : 1),
        { spinX: T, spinY: M, pixelX: x, pixelY: E }
      );
    }
    function h() {
      e.enabled && (e.mouseEntered = !0);
    }
    function m() {
      e.enabled && (e.mouseEntered = !1);
    }
    function p(v) {
      return (e.params.mousewheel.thresholdDelta &&
        v.delta < e.params.mousewheel.thresholdDelta) ||
        (e.params.mousewheel.thresholdTime &&
          Gt() - o < e.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && Gt() - o < 60
        ? !0
        : (v.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), r("scroll", v.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), r("scroll", v.raw)),
          (o = new n.Date().getTime()),
          !1);
    }
    function f(v) {
      const _ = e.params.mousewheel;
      if (v.direction < 0) {
        if (e.isEnd && !e.params.loop && _.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && _.releaseOnEdges) return !0;
      return !1;
    }
    function d(v) {
      let _ = v,
        b = !0;
      if (
        !e.enabled ||
        v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
      )
        return;
      const S = e.params.mousewheel;
      e.params.cssMode && _.preventDefault();
      let T = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (T = document.querySelector(e.params.mousewheel.eventsTarget));
      const M = T && T.contains(_.target);
      if (!e.mouseEntered && !M && !S.releaseOnEdges) return !0;
      _.originalEvent && (_ = _.originalEvent);
      let x = 0;
      const E = e.rtlTranslate ? -1 : 1,
        I = u(_);
      if (S.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(I.pixelX) > Math.abs(I.pixelY)) x = -I.pixelX * E;
          else return !0;
        else if (Math.abs(I.pixelY) > Math.abs(I.pixelX)) x = -I.pixelY;
        else return !0;
      else
        x = Math.abs(I.pixelX) > Math.abs(I.pixelY) ? -I.pixelX * E : -I.pixelY;
      if (x === 0) return !0;
      S.invert && (x = -x);
      let P = e.getTranslate() + x * S.sensitivity;
      if (
        (P >= e.minTranslate() && (P = e.minTranslate()),
        P <= e.maxTranslate() && (P = e.maxTranslate()),
        (b = e.params.loop
          ? !0
          : !(P === e.minTranslate() || P === e.maxTranslate())),
        b && e.params.nested && _.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const k = {
          time: Gt(),
          delta: Math.abs(x),
          direction: Math.sign(x),
          raw: v,
        };
        c.length >= 2 && c.shift();
        const O = c.length ? c[c.length - 1] : void 0;
        if (
          (c.push(k),
          O
            ? (k.direction !== O.direction ||
                k.delta > O.delta ||
                k.time > O.time + 150) &&
              p(k)
            : p(k),
          f(k))
        )
          return !0;
      } else {
        const k = { time: Gt(), delta: Math.abs(x), direction: Math.sign(x) },
          O =
            l &&
            k.time < l.time + 500 &&
            k.delta <= l.delta &&
            k.direction === l.direction;
        if (!O) {
          l = void 0;
          let D = e.getTranslate() + x * S.sensitivity;
          const z = e.isBeginning,
            A = e.isEnd;
          if (
            (D >= e.minTranslate() && (D = e.minTranslate()),
            D <= e.maxTranslate() && (D = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(D),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!z && e.isBeginning) || (!A && e.isEnd)) &&
              e.updateSlidesClasses(),
            e.params.loop &&
              e.loopFix({
                direction: k.direction < 0 ? "next" : "prev",
                byMousewheel: !0,
              }),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(a), (a = void 0), c.length >= 15 && c.shift();
            const L = c.length ? c[c.length - 1] : void 0,
              $ = c[0];
            if (
              (c.push(k),
              L && (k.delta > L.delta || k.direction !== L.direction))
            )
              c.splice(0);
            else if (
              c.length >= 15 &&
              k.time - $.time < 500 &&
              $.delta - k.delta >= 1 &&
              k.delta <= 6
            ) {
              const C = x > 0 ? 0.8 : 0.2;
              (l = k),
                c.splice(0),
                (a = Zi(() => {
                  e.destroyed ||
                    !e.params ||
                    e.slideToClosest(e.params.speed, !0, void 0, C);
                }, 0));
            }
            a ||
              (a = Zi(() => {
                if (e.destroyed || !e.params) return;
                const C = 0.5;
                (l = k),
                  c.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, C);
              }, 500));
          }
          if (
            (O || r("scroll", _),
            e.params.autoplay &&
              e.params.autoplay.disableOnInteraction &&
              e.autoplay.stop(),
            S.releaseOnEdges &&
              (D === e.minTranslate() || D === e.maxTranslate()))
          )
            return !0;
        }
      }
      return _.preventDefault ? _.preventDefault() : (_.returnValue = !1), !1;
    }
    function g(v) {
      let _ = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (_ = document.querySelector(e.params.mousewheel.eventsTarget)),
        _[v]("mouseenter", h),
        _[v]("mouseleave", m),
        _[v]("wheel", d);
    }
    function w() {
      return e.params.cssMode
        ? (e.wrapperEl.removeEventListener("wheel", d), !0)
        : e.mousewheel.enabled
        ? !1
        : (g("addEventListener"), (e.mousewheel.enabled = !0), !0);
    }
    function y() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, d), !0)
        : e.mousewheel.enabled
        ? (g("removeEventListener"), (e.mousewheel.enabled = !1), !0)
        : !1;
    }
    i("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && y(),
        e.params.mousewheel.enabled && w();
    }),
      i("destroy", () => {
        e.params.cssMode && w(), e.mousewheel.enabled && y();
      }),
      Object.assign(e.mousewheel, { enable: w, disable: y });
  }
  function ra(s, e, t, i) {
    return (
      s.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let n = Qe(s.el, `.${i[r]}`)[0];
            n || ((n = It("div", i[r])), (n.className = i[r]), s.el.append(n)),
              (t[r] = n),
              (e[r] = n);
          }
        }),
      t
    );
  }
  function jd(s) {
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
      let d;
      return f &&
        typeof f == "string" &&
        e.isElement &&
        ((d = e.el.querySelector(f) || e.hostEl.querySelector(f)), d)
        ? d
        : (f &&
            (typeof f == "string" && (d = [...document.querySelectorAll(f)]),
            e.params.uniqueNavElements &&
            typeof f == "string" &&
            d &&
            d.length > 1 &&
            e.el.querySelectorAll(f).length === 1
              ? (d = e.el.querySelector(f))
              : d && d.length === 1 && (d = d[0])),
          f && !d ? f : d);
    }
    function a(f, d) {
      const g = e.params.navigation;
      (f = ne(f)),
        f.forEach((w) => {
          w &&
            (w.classList[d ? "add" : "remove"](...g.disabledClass.split(" ")),
            w.tagName === "BUTTON" && (w.disabled = d),
            e.params.watchOverflow &&
              e.enabled &&
              w.classList[e.isLocked ? "add" : "remove"](g.lockClass));
        });
    }
    function o() {
      const { nextEl: f, prevEl: d } = e.navigation;
      if (e.params.loop) {
        a(d, !1), a(f, !1);
        return;
      }
      a(d, e.isBeginning && !e.params.rewind),
        a(f, e.isEnd && !e.params.rewind);
    }
    function l(f) {
      f.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function c(f) {
      f.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function u() {
      const f = e.params.navigation;
      if (
        ((e.params.navigation = ra(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(f.nextEl || f.prevEl))
      )
        return;
      let d = n(f.nextEl),
        g = n(f.prevEl);
      Object.assign(e.navigation, { nextEl: d, prevEl: g }),
        (d = ne(d)),
        (g = ne(g));
      const w = (y, v) => {
        y && y.addEventListener("click", v === "next" ? c : l),
          !e.enabled && y && y.classList.add(...f.lockClass.split(" "));
      };
      d.forEach((y) => w(y, "next")), g.forEach((y) => w(y, "prev"));
    }
    function h() {
      let { nextEl: f, prevEl: d } = e.navigation;
      (f = ne(f)), (d = ne(d));
      const g = (w, y) => {
        w.removeEventListener("click", y === "next" ? c : l),
          w.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      f.forEach((w) => g(w, "next")), d.forEach((w) => g(w, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? p() : (u(), o());
    }),
      i("toEdge fromEdge lock unlock", () => {
        o();
      }),
      i("destroy", () => {
        h();
      }),
      i("enable disable", () => {
        let { nextEl: f, prevEl: d } = e.navigation;
        if (((f = ne(f)), (d = ne(d)), e.enabled)) {
          o();
          return;
        }
        [...f, ...d]
          .filter((g) => !!g)
          .forEach((g) => g.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (f, d) => {
        let { nextEl: g, prevEl: w } = e.navigation;
        (g = ne(g)), (w = ne(w));
        const y = d.target;
        let v = w.includes(y) || g.includes(y);
        if (e.isElement && !v) {
          const _ = d.path || (d.composedPath && d.composedPath());
          _ && (v = _.find((b) => g.includes(b) || w.includes(b)));
        }
        if (e.params.navigation.hideOnClick && !v) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === y || e.pagination.el.contains(y))
          )
            return;
          let _;
          g.length
            ? (_ = g[0].classList.contains(e.params.navigation.hiddenClass))
            : w.length &&
              (_ = w[0].classList.contains(e.params.navigation.hiddenClass)),
            r(_ === !0 ? "navigationShow" : "navigationHide"),
            [...g, ...w]
              .filter((b) => !!b)
              .forEach((b) =>
                b.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const m = () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          u(),
          o();
      },
      p = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          h();
      };
    Object.assign(e.navigation, {
      enable: m,
      disable: p,
      update: o,
      init: u,
      destroy: h,
    });
  }
  function bi(s) {
    return (
      s === void 0 && (s = ""),
      `.${s
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function Ud(s) {
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
        formatFractionCurrent: (y) => y,
        formatFractionTotal: (y) => y,
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
    function l() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
      );
    }
    function c(y, v) {
      const { bulletActiveClass: _ } = e.params.pagination;
      y &&
        ((y = y[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
        y &&
          (y.classList.add(`${_}-${v}`),
          (y = y[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
          y && y.classList.add(`${_}-${v}-${v}`)));
    }
    function u(y, v, _) {
      if (((y = y % _), (v = v % _), v === y + 1)) return "next";
      if (v === y - 1) return "previous";
    }
    function h(y) {
      const v = y.target.closest(bi(e.params.pagination.bulletClass));
      if (!v) return;
      y.preventDefault();
      const _ = ss(v) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === _) return;
        const b = u(e.realIndex, _, e.slides.length);
        b === "next"
          ? e.slideNext()
          : b === "previous"
          ? e.slidePrev()
          : e.slideToLoop(_);
      } else e.slideTo(_);
    }
    function m() {
      const y = e.rtl,
        v = e.params.pagination;
      if (l()) return;
      let _ = e.pagination.el;
      _ = ne(_);
      let b, S;
      const T =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        M = e.params.loop
          ? Math.ceil(T / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((S = e.previousRealIndex || 0),
            (b =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex != "undefined"
          ? ((b = e.snapIndex), (S = e.previousSnapIndex))
          : ((S = e.previousIndex || 0), (b = e.activeIndex || 0)),
        v.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const x = e.pagination.bullets;
        let E, I, P;
        if (
          (v.dynamicBullets &&
            ((a = jn(x[0], e.isHorizontal() ? "width" : "height")),
            _.forEach((k) => {
              k.style[e.isHorizontal() ? "width" : "height"] = `${
                a * (v.dynamicMainBullets + 4)
              }px`;
            }),
            v.dynamicMainBullets > 1 &&
              S !== void 0 &&
              ((o += b - (S || 0)),
              o > v.dynamicMainBullets - 1
                ? (o = v.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (E = Math.max(b - o, 0)),
            (I = E + (Math.min(x.length, v.dynamicMainBullets) - 1)),
            (P = (I + E) / 2)),
          x.forEach((k) => {
            const O = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((D) => `${v.bulletActiveClass}${D}`),
            ]
              .map((D) =>
                typeof D == "string" && D.includes(" ") ? D.split(" ") : D
              )
              .flat();
            k.classList.remove(...O);
          }),
          _.length > 1)
        )
          x.forEach((k) => {
            const O = ss(k);
            O === b
              ? k.classList.add(...v.bulletActiveClass.split(" "))
              : e.isElement && k.setAttribute("part", "bullet"),
              v.dynamicBullets &&
                (O >= E &&
                  O <= I &&
                  k.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
                O === E && c(k, "prev"),
                O === I && c(k, "next"));
          });
        else {
          const k = x[b];
          if (
            (k && k.classList.add(...v.bulletActiveClass.split(" ")),
            e.isElement &&
              x.forEach((O, D) => {
                O.setAttribute("part", D === b ? "bullet-active" : "bullet");
              }),
            v.dynamicBullets)
          ) {
            const O = x[E],
              D = x[I];
            for (let z = E; z <= I; z += 1)
              x[z] &&
                x[z].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
            c(O, "prev"), c(D, "next");
          }
        }
        if (v.dynamicBullets) {
          const k = Math.min(x.length, v.dynamicMainBullets + 4),
            O = (a * k - a) / 2 - P * a,
            D = y ? "right" : "left";
          x.forEach((z) => {
            z.style[e.isHorizontal() ? D : "top"] = `${O}px`;
          });
        }
      }
      _.forEach((x, E) => {
        if (
          (v.type === "fraction" &&
            (x.querySelectorAll(bi(v.currentClass)).forEach((I) => {
              I.textContent = v.formatFractionCurrent(b + 1);
            }),
            x.querySelectorAll(bi(v.totalClass)).forEach((I) => {
              I.textContent = v.formatFractionTotal(M);
            })),
          v.type === "progressbar")
        ) {
          let I;
          v.progressbarOpposite
            ? (I = e.isHorizontal() ? "vertical" : "horizontal")
            : (I = e.isHorizontal() ? "horizontal" : "vertical");
          const P = (b + 1) / M;
          let k = 1,
            O = 1;
          I === "horizontal" ? (k = P) : (O = P),
            x.querySelectorAll(bi(v.progressbarFillClass)).forEach((D) => {
              (D.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${O})`),
                (D.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        v.type === "custom" && v.renderCustom
          ? ((x.innerHTML = v.renderCustom(e, b + 1, M)),
            E === 0 && r("paginationRender", x))
          : (E === 0 && r("paginationRender", x), r("paginationUpdate", x)),
          e.params.watchOverflow &&
            e.enabled &&
            x.classList[e.isLocked ? "add" : "remove"](v.lockClass);
      });
    }
    function p() {
      const y = e.params.pagination;
      if (l()) return;
      const v =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
      let _ = e.pagination.el;
      _ = ne(_);
      let b = "";
      if (y.type === "bullets") {
        let S = e.params.loop
          ? Math.ceil(v / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && S > v && (S = v);
        for (let T = 0; T < S; T += 1)
          y.renderBullet
            ? (b += y.renderBullet.call(e, T, y.bulletClass))
            : (b += `<${y.bulletElement} ${
                e.isElement ? 'part="bullet"' : ""
              } class="${y.bulletClass}"></${y.bulletElement}>`);
      }
      y.type === "fraction" &&
        (y.renderFraction
          ? (b = y.renderFraction.call(e, y.currentClass, y.totalClass))
          : (b = `<span class="${y.currentClass}"></span> / <span class="${y.totalClass}"></span>`)),
        y.type === "progressbar" &&
          (y.renderProgressbar
            ? (b = y.renderProgressbar.call(e, y.progressbarFillClass))
            : (b = `<span class="${y.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        _.forEach((S) => {
          y.type !== "custom" && (S.innerHTML = b || ""),
            y.type === "bullets" &&
              e.pagination.bullets.push(
                ...S.querySelectorAll(bi(y.bulletClass))
              );
        }),
        y.type !== "custom" && r("paginationRender", _[0]);
    }
    function f() {
      e.params.pagination = ra(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const y = e.params.pagination;
      if (!y.el) return;
      let v;
      typeof y.el == "string" && e.isElement && (v = e.el.querySelector(y.el)),
        !v &&
          typeof y.el == "string" &&
          (v = [...document.querySelectorAll(y.el)]),
        v || (v = y.el),
        !(!v || v.length === 0) &&
          (e.params.uniqueNavElements &&
            typeof y.el == "string" &&
            Array.isArray(v) &&
            v.length > 1 &&
            ((v = [...e.el.querySelectorAll(y.el)]),
            v.length > 1 && (v = v.find((_) => Ji(_, ".swiper")[0] === e.el))),
          Array.isArray(v) && v.length === 1 && (v = v[0]),
          Object.assign(e.pagination, { el: v }),
          (v = ne(v)),
          v.forEach((_) => {
            y.type === "bullets" &&
              y.clickable &&
              _.classList.add(...(y.clickableClass || "").split(" ")),
              _.classList.add(y.modifierClass + y.type),
              _.classList.add(
                e.isHorizontal() ? y.horizontalClass : y.verticalClass
              ),
              y.type === "bullets" &&
                y.dynamicBullets &&
                (_.classList.add(`${y.modifierClass}${y.type}-dynamic`),
                (o = 0),
                y.dynamicMainBullets < 1 && (y.dynamicMainBullets = 1)),
              y.type === "progressbar" &&
                y.progressbarOpposite &&
                _.classList.add(y.progressbarOppositeClass),
              y.clickable && _.addEventListener("click", h),
              e.enabled || _.classList.add(y.lockClass);
          }));
    }
    function d() {
      const y = e.params.pagination;
      if (l()) return;
      let v = e.pagination.el;
      v &&
        ((v = ne(v)),
        v.forEach((_) => {
          _.classList.remove(y.hiddenClass),
            _.classList.remove(y.modifierClass + y.type),
            _.classList.remove(
              e.isHorizontal() ? y.horizontalClass : y.verticalClass
            ),
            y.clickable &&
              (_.classList.remove(...(y.clickableClass || "").split(" ")),
              _.removeEventListener("click", h));
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((_) =>
            _.classList.remove(...y.bulletActiveClass.split(" "))
          );
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const y = e.params.pagination;
      let { el: v } = e.pagination;
      (v = ne(v)),
        v.forEach((_) => {
          _.classList.remove(y.horizontalClass, y.verticalClass),
            _.classList.add(
              e.isHorizontal() ? y.horizontalClass : y.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.pagination.enabled === !1 ? w() : (f(), p(), m());
      }),
      i("activeIndexChange", () => {
        typeof e.snapIndex == "undefined" && m();
      }),
      i("snapIndexChange", () => {
        m();
      }),
      i("snapGridLengthChange", () => {
        p(), m();
      }),
      i("destroy", () => {
        d();
      }),
      i("enable disable", () => {
        let { el: y } = e.pagination;
        y &&
          ((y = ne(y)),
          y.forEach((v) =>
            v.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      i("lock unlock", () => {
        m();
      }),
      i("click", (y, v) => {
        const _ = v.target,
          b = ne(e.pagination.el);
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          b &&
          b.length > 0 &&
          !_.classList.contains(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && _ === e.navigation.nextEl) ||
              (e.navigation.prevEl && _ === e.navigation.prevEl))
          )
            return;
          const S = b[0].classList.contains(e.params.pagination.hiddenClass);
          r(S === !0 ? "paginationShow" : "paginationHide"),
            b.forEach((T) =>
              T.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const g = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: y } = e.pagination;
        y &&
          ((y = ne(y)),
          y.forEach((v) =>
            v.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          f(),
          p(),
          m();
      },
      w = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: y } = e.pagination;
        y &&
          ((y = ne(y)),
          y.forEach((v) =>
            v.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          d();
      };
    Object.assign(e.pagination, {
      enable: g,
      disable: w,
      render: p,
      update: m,
      init: f,
      destroy: d,
    });
  }
  function Kd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Ye();
    let a = !1,
      o = null,
      l = null,
      c,
      u,
      h,
      m;
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
    function p() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: P, rtlTranslate: k } = e,
        { dragEl: O, el: D } = P,
        z = e.params.scrollbar,
        A = e.params.loop ? e.progressLoop : e.progress;
      let L = u,
        $ = (h - u) * A;
      k
        ? (($ = -$), $ > 0 ? ((L = u - $), ($ = 0)) : -$ + u > h && (L = h + $))
        : $ < 0
        ? ((L = u + $), ($ = 0))
        : $ + u > h && (L = h - $),
        e.isHorizontal()
          ? ((O.style.transform = `translate3d(${$}px, 0, 0)`),
            (O.style.width = `${L}px`))
          : ((O.style.transform = `translate3d(0px, ${$}px, 0)`),
            (O.style.height = `${L}px`)),
        z.hide &&
          (clearTimeout(o),
          (D.style.opacity = 1),
          (o = setTimeout(() => {
            (D.style.opacity = 0), (D.style.transitionDuration = "400ms");
          }, 1e3)));
    }
    function f(P) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        (e.scrollbar.dragEl.style.transitionDuration = `${P}ms`);
    }
    function d() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: P } = e,
        { dragEl: k, el: O } = P;
      (k.style.width = ""),
        (k.style.height = ""),
        (h = e.isHorizontal() ? O.offsetWidth : O.offsetHeight),
        (m =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (u = h * m)
          : (u = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (k.style.width = `${u}px`)
          : (k.style.height = `${u}px`),
        m >= 1 ? (O.style.display = "none") : (O.style.display = ""),
        e.params.scrollbar.hide && (O.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          P.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function g(P) {
      return e.isHorizontal() ? P.clientX : P.clientY;
    }
    function w(P) {
      const { scrollbar: k, rtlTranslate: O } = e,
        { el: D } = k;
      let z;
      (z =
        (g(P) -
          Us(D)[e.isHorizontal() ? "left" : "top"] -
          (c !== null ? c : u / 2)) /
        (h - u)),
        (z = Math.max(Math.min(z, 1), 0)),
        O && (z = 1 - z);
      const A = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * z;
      e.updateProgress(A),
        e.setTranslate(A),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function y(P) {
      const k = e.params.scrollbar,
        { scrollbar: O, wrapperEl: D } = e,
        { el: z, dragEl: A } = O;
      (a = !0),
        (c =
          P.target === A
            ? g(P) -
              P.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        P.preventDefault(),
        P.stopPropagation(),
        (D.style.transitionDuration = "100ms"),
        (A.style.transitionDuration = "100ms"),
        w(P),
        clearTimeout(l),
        (z.style.transitionDuration = "0ms"),
        k.hide && (z.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        r("scrollbarDragStart", P);
    }
    function v(P) {
      const { scrollbar: k, wrapperEl: O } = e,
        { el: D, dragEl: z } = k;
      a &&
        (P.preventDefault && P.cancelable
          ? P.preventDefault()
          : (P.returnValue = !1),
        w(P),
        (O.style.transitionDuration = "0ms"),
        (D.style.transitionDuration = "0ms"),
        (z.style.transitionDuration = "0ms"),
        r("scrollbarDragMove", P));
    }
    function _(P) {
      const k = e.params.scrollbar,
        { scrollbar: O, wrapperEl: D } = e,
        { el: z } = O;
      a &&
        ((a = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (D.style.transitionDuration = "")),
        k.hide &&
          (clearTimeout(l),
          (l = Zi(() => {
            (z.style.opacity = 0), (z.style.transitionDuration = "400ms");
          }, 1e3))),
        r("scrollbarDragEnd", P),
        k.snapOnRelease && e.slideToClosest());
    }
    function b(P) {
      const { scrollbar: k, params: O } = e,
        D = k.el;
      if (!D) return;
      const z = D,
        A = O.passiveListeners ? { passive: !1, capture: !1 } : !1,
        L = O.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!z) return;
      const $ = P === "on" ? "addEventListener" : "removeEventListener";
      z[$]("pointerdown", y, A),
        n[$]("pointermove", v, A),
        n[$]("pointerup", _, L);
    }
    function S() {
      !e.params.scrollbar.el || !e.scrollbar.el || b("on");
    }
    function T() {
      !e.params.scrollbar.el || !e.scrollbar.el || b("off");
    }
    function M() {
      const { scrollbar: P, el: k } = e;
      e.params.scrollbar = ra(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const O = e.params.scrollbar;
      if (!O.el) return;
      let D;
      if (
        (typeof O.el == "string" &&
          e.isElement &&
          (D = e.el.querySelector(O.el)),
        !D && typeof O.el == "string")
      ) {
        if (((D = n.querySelectorAll(O.el)), !D.length)) return;
      } else D || (D = O.el);
      e.params.uniqueNavElements &&
        typeof O.el == "string" &&
        D.length > 1 &&
        k.querySelectorAll(O.el).length === 1 &&
        (D = k.querySelector(O.el)),
        D.length > 0 && (D = D[0]),
        D.classList.add(e.isHorizontal() ? O.horizontalClass : O.verticalClass);
      let z;
      D &&
        ((z = D.querySelector(bi(e.params.scrollbar.dragClass))),
        z || ((z = It("div", e.params.scrollbar.dragClass)), D.append(z))),
        Object.assign(P, { el: D, dragEl: z }),
        O.draggable && S(),
        D &&
          D.classList[e.enabled ? "remove" : "add"](
            ...Ii(e.params.scrollbar.lockClass)
          );
    }
    function x() {
      const P = e.params.scrollbar,
        k = e.scrollbar.el;
      k &&
        k.classList.remove(
          ...Ii(e.isHorizontal() ? P.horizontalClass : P.verticalClass)
        ),
        T();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const P = e.params.scrollbar;
      let { el: k } = e.scrollbar;
      (k = ne(k)),
        k.forEach((O) => {
          O.classList.remove(P.horizontalClass, P.verticalClass),
            O.classList.add(
              e.isHorizontal() ? P.horizontalClass : P.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? I() : (M(), d(), p());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        d();
      }),
      i("setTranslate", () => {
        p();
      }),
      i("setTransition", (P, k) => {
        f(k);
      }),
      i("enable disable", () => {
        const { el: P } = e.scrollbar;
        P &&
          P.classList[e.enabled ? "remove" : "add"](
            ...Ii(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        x();
      });
    const E = () => {
        e.el.classList.remove(...Ii(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...Ii(e.params.scrollbar.scrollbarDisabledClass)
            ),
          M(),
          d(),
          p();
      },
      I = () => {
        e.el.classList.add(...Ii(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...Ii(e.params.scrollbar.scrollbarDisabledClass)
            ),
          x();
      };
    Object.assign(e.scrollbar, {
      enable: E,
      disable: I,
      updateSize: d,
      setTranslate: p,
      init: M,
      destroy: x,
    });
  }
  function Zd(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ parallax: { enabled: !1 } });
    const r =
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      n = (l, c) => {
        const { rtl: u } = e,
          h = u ? -1 : 1,
          m = l.getAttribute("data-swiper-parallax") || "0";
        let p = l.getAttribute("data-swiper-parallax-x"),
          f = l.getAttribute("data-swiper-parallax-y");
        const d = l.getAttribute("data-swiper-parallax-scale"),
          g = l.getAttribute("data-swiper-parallax-opacity"),
          w = l.getAttribute("data-swiper-parallax-rotate");
        if (
          (p || f
            ? ((p = p || "0"), (f = f || "0"))
            : e.isHorizontal()
            ? ((p = m), (f = "0"))
            : ((f = m), (p = "0")),
          p.indexOf("%") >= 0
            ? (p = `${parseInt(p, 10) * c * h}%`)
            : (p = `${p * c * h}px`),
          f.indexOf("%") >= 0
            ? (f = `${parseInt(f, 10) * c}%`)
            : (f = `${f * c}px`),
          typeof g != "undefined" && g !== null)
        ) {
          const v = g - (g - 1) * (1 - Math.abs(c));
          l.style.opacity = v;
        }
        let y = `translate3d(${p}, ${f}, 0px)`;
        if (typeof d != "undefined" && d !== null) {
          const v = d - (d - 1) * (1 - Math.abs(c));
          y += ` scale(${v})`;
        }
        if (w && typeof w != "undefined" && w !== null) {
          const v = w * c * -1;
          y += ` rotate(${v}deg)`;
        }
        l.style.transform = y;
      },
      a = () => {
        const { el: l, slides: c, progress: u, snapGrid: h, isElement: m } = e,
          p = Qe(l, r);
        e.isElement && p.push(...Qe(e.hostEl, r)),
          p.forEach((f) => {
            n(f, u);
          }),
          c.forEach((f, d) => {
            let g = f.progress;
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== "auto" &&
              (g += Math.ceil(d / 2) - u * (h.length - 1)),
              (g = Math.min(Math.max(g, -1), 1)),
              f
                .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
                .forEach((w) => {
                  n(w, g);
                });
          });
      },
      o = function (l) {
        l === void 0 && (l = e.params.speed);
        const { el: c, hostEl: u } = e,
          h = [...c.querySelectorAll(r)];
        e.isElement && h.push(...u.querySelectorAll(r)),
          h.forEach((m) => {
            let p =
              parseInt(m.getAttribute("data-swiper-parallax-duration"), 10) ||
              l;
            l === 0 && (p = 0), (m.style.transitionDuration = `${p}ms`);
          });
      };
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
      i("setTransition", (l, c) => {
        e.params.parallax.enabled && o(c);
      });
  }
  function Qd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = be();
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
      l = !1,
      c = { x: 0, y: 0 };
    const u = -3;
    let h, m;
    const p = [],
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
      d = {
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
      g = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0,
      };
    let w = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return w;
      },
      set(F) {
        if (w !== F) {
          const N = f.imageEl,
            B = f.slideEl;
          r("zoomChange", F, N, B);
        }
        w = F;
      },
    });
    function y() {
      if (p.length < 2) return 1;
      const F = p[0].pageX,
        N = p[0].pageY,
        B = p[1].pageX,
        j = p[1].pageY;
      return Math.sqrt(ht(B - F, 2) + ht(j - N, 2));
    }
    function v() {
      const F = e.params.zoom,
        N = f.imageWrapEl.getAttribute("data-swiper-zoom") || F.maxRatio;
      if (F.limitToOriginalSize && f.imageEl && f.imageEl.naturalWidth) {
        const B = f.imageEl.naturalWidth / f.imageEl.offsetWidth;
        return Math.min(B, N);
      }
      return N;
    }
    function _() {
      if (p.length < 2) return { x: null, y: null };
      const F = f.imageEl.getBoundingClientRect();
      return [
        (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - F.x - n.scrollX) / a,
        (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - F.y - n.scrollY) / a,
      ];
    }
    function b() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function S(F) {
      const N = b();
      return !!(
        F.target.matches(N) ||
        e.slides.filter((B) => B.contains(F.target)).length > 0
      );
    }
    function T(F) {
      const N = `.${e.params.zoom.containerClass}`;
      return !!(
        F.target.matches(N) ||
        [...e.hostEl.querySelectorAll(N)].filter((B) => B.contains(F.target))
          .length > 0
      );
    }
    function M(F) {
      if ((F.pointerType === "mouse" && p.splice(0, p.length), !S(F))) return;
      const N = e.params.zoom;
      if (((h = !1), (m = !1), p.push(F), !(p.length < 2))) {
        if (((h = !0), (f.scaleStart = y()), !f.slideEl)) {
          (f.slideEl = F.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
            f.slideEl || (f.slideEl = e.slides[e.activeIndex]);
          let B = f.slideEl.querySelector(`.${N.containerClass}`);
          if (
            (B &&
              (B = B.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
            (f.imageEl = B),
            B
              ? (f.imageWrapEl = Ji(f.imageEl, `.${N.containerClass}`)[0])
              : (f.imageWrapEl = void 0),
            !f.imageWrapEl)
          ) {
            f.imageEl = void 0;
            return;
          }
          f.maxRatio = v();
        }
        if (f.imageEl) {
          const [B, j] = _();
          (f.originX = B),
            (f.originY = j),
            (f.imageEl.style.transitionDuration = "0ms");
        }
        o = !0;
      }
    }
    function x(F) {
      if (!S(F)) return;
      const N = e.params.zoom,
        B = e.zoom,
        j = p.findIndex((ce) => ce.pointerId === F.pointerId);
      j >= 0 && (p[j] = F),
        !(p.length < 2) &&
          ((m = !0),
          (f.scaleMove = y()),
          f.imageEl &&
            ((B.scale = (f.scaleMove / f.scaleStart) * a),
            B.scale > f.maxRatio &&
              (B.scale = f.maxRatio - 1 + ht(B.scale - f.maxRatio + 1, 0.5)),
            B.scale < N.minRatio &&
              (B.scale = N.minRatio + 1 - ht(N.minRatio - B.scale + 1, 0.5)),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${B.scale})`)));
    }
    function E(F) {
      if (!S(F) || (F.pointerType === "mouse" && F.type === "pointerout"))
        return;
      const N = e.params.zoom,
        B = e.zoom,
        j = p.findIndex((ce) => ce.pointerId === F.pointerId);
      j >= 0 && p.splice(j, 1),
        !(!h || !m) &&
          ((h = !1),
          (m = !1),
          f.imageEl &&
            ((B.scale = Math.max(Math.min(B.scale, f.maxRatio), N.minRatio)),
            (f.imageEl.style.transitionDuration = `${e.params.speed}ms`),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${B.scale})`),
            (a = B.scale),
            (o = !1),
            B.scale > 1 && f.slideEl
              ? f.slideEl.classList.add(`${N.zoomedSlideClass}`)
              : B.scale <= 1 &&
                f.slideEl &&
                f.slideEl.classList.remove(`${N.zoomedSlideClass}`),
            B.scale === 1 &&
              ((f.originX = 0), (f.originY = 0), (f.slideEl = void 0))));
    }
    let I;
    function P() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function k() {
      clearTimeout(I),
        (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
        (I = setTimeout(() => {
          e.destroyed || P();
        }));
    }
    function O(F) {
      const N = e.device;
      if (!f.imageEl || d.isTouched) return;
      N.android && F.cancelable && F.preventDefault(), (d.isTouched = !0);
      const B = p.length > 0 ? p[0] : F;
      (d.touchesStart.x = B.pageX), (d.touchesStart.y = B.pageY);
    }
    function D(F) {
      const B = F.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
      if (!S(F) || !T(F)) return;
      const j = e.zoom;
      if (!f.imageEl) return;
      if (!d.isTouched || !f.slideEl) {
        B && L(F);
        return;
      }
      if (B) {
        L(F);
        return;
      }
      d.isMoved ||
        ((d.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
        (d.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
        (d.startX = Gn(f.imageWrapEl, "x") || 0),
        (d.startY = Gn(f.imageWrapEl, "y") || 0),
        (f.slideWidth = f.slideEl.offsetWidth),
        (f.slideHeight = f.slideEl.offsetHeight),
        (f.imageWrapEl.style.transitionDuration = "0ms"));
      const ce = d.width * j.scale,
        tt = d.height * j.scale;
      if (
        ((d.minX = Math.min(f.slideWidth / 2 - ce / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - tt / 2, 0)),
        (d.maxY = -d.minY),
        (d.touchesCurrent.x = p.length > 0 ? p[0].pageX : F.pageX),
        (d.touchesCurrent.y = p.length > 0 ? p[0].pageY : F.pageY),
        Math.max(
          Math.abs(d.touchesCurrent.x - d.touchesStart.x),
          Math.abs(d.touchesCurrent.y - d.touchesStart.y)
        ) > 5 && (e.allowClick = !1),
        !d.isMoved && !o)
      ) {
        if (
          e.isHorizontal() &&
          ((Math.floor(d.minX) === Math.floor(d.startX) &&
            d.touchesCurrent.x < d.touchesStart.x) ||
            (Math.floor(d.maxX) === Math.floor(d.startX) &&
              d.touchesCurrent.x > d.touchesStart.x))
        ) {
          (d.isTouched = !1), P();
          return;
        }
        if (
          !e.isHorizontal() &&
          ((Math.floor(d.minY) === Math.floor(d.startY) &&
            d.touchesCurrent.y < d.touchesStart.y) ||
            (Math.floor(d.maxY) === Math.floor(d.startY) &&
              d.touchesCurrent.y > d.touchesStart.y))
        ) {
          (d.isTouched = !1), P();
          return;
        }
      }
      F.cancelable && F.preventDefault(),
        F.stopPropagation(),
        k(),
        (d.isMoved = !0);
      const Te = (j.scale - a) / (f.maxRatio - e.params.zoom.minRatio),
        { originX: J, originY: se } = f;
      (d.currentX =
        d.touchesCurrent.x -
        d.touchesStart.x +
        d.startX +
        Te * (d.width - J * 2)),
        (d.currentY =
          d.touchesCurrent.y -
          d.touchesStart.y +
          d.startY +
          Te * (d.height - se * 2)),
        d.currentX < d.minX &&
          (d.currentX = d.minX + 1 - ht(d.minX - d.currentX + 1, 0.8)),
        d.currentX > d.maxX &&
          (d.currentX = d.maxX - 1 + ht(d.currentX - d.maxX + 1, 0.8)),
        d.currentY < d.minY &&
          (d.currentY = d.minY + 1 - ht(d.minY - d.currentY + 1, 0.8)),
        d.currentY > d.maxY &&
          (d.currentY = d.maxY - 1 + ht(d.currentY - d.maxY + 1, 0.8)),
        g.prevPositionX || (g.prevPositionX = d.touchesCurrent.x),
        g.prevPositionY || (g.prevPositionY = d.touchesCurrent.y),
        g.prevTime || (g.prevTime = Date.now()),
        (g.x =
          (d.touchesCurrent.x - g.prevPositionX) /
          (Date.now() - g.prevTime) /
          2),
        (g.y =
          (d.touchesCurrent.y - g.prevPositionY) /
          (Date.now() - g.prevTime) /
          2),
        Math.abs(d.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
        Math.abs(d.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
        (g.prevPositionX = d.touchesCurrent.x),
        (g.prevPositionY = d.touchesCurrent.y),
        (g.prevTime = Date.now()),
        (f.imageWrapEl.style.transform = `translate3d(${d.currentX}px, ${d.currentY}px,0)`);
    }
    function z() {
      const F = e.zoom;
      if (((p.length = 0), !f.imageEl)) return;
      if (!d.isTouched || !d.isMoved) {
        (d.isTouched = !1), (d.isMoved = !1);
        return;
      }
      (d.isTouched = !1), (d.isMoved = !1);
      let N = 300,
        B = 300;
      const j = g.x * N,
        ce = d.currentX + j,
        tt = g.y * B,
        xe = d.currentY + tt;
      g.x !== 0 && (N = Math.abs((ce - d.currentX) / g.x)),
        g.y !== 0 && (B = Math.abs((xe - d.currentY) / g.y));
      const Te = Math.max(N, B);
      (d.currentX = ce), (d.currentY = xe);
      const J = d.width * F.scale,
        se = d.height * F.scale;
      (d.minX = Math.min(f.slideWidth / 2 - J / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - se / 2, 0)),
        (d.maxY = -d.minY),
        (d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
        (d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
        (f.imageWrapEl.style.transitionDuration = `${Te}ms`),
        (f.imageWrapEl.style.transform = `translate3d(${d.currentX}px, ${d.currentY}px,0)`);
    }
    function A() {
      const F = e.zoom;
      f.slideEl &&
        e.activeIndex !== e.slides.indexOf(f.slideEl) &&
        (f.imageEl &&
          (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
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
    function L(F) {
      if (a <= 1 || !f.imageWrapEl || !S(F) || !T(F)) return;
      const N = n.getComputedStyle(f.imageWrapEl).transform,
        B = new n.DOMMatrix(N);
      if (!l) {
        (l = !0),
          (c.x = F.clientX),
          (c.y = F.clientY),
          (d.startX = B.e),
          (d.startY = B.f),
          (d.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
          (d.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
          (f.slideWidth = f.slideEl.offsetWidth),
          (f.slideHeight = f.slideEl.offsetHeight);
        return;
      }
      const j = (F.clientX - c.x) * u,
        ce = (F.clientY - c.y) * u,
        tt = d.width * a,
        xe = d.height * a,
        Te = f.slideWidth,
        J = f.slideHeight,
        se = Math.min(Te / 2 - tt / 2, 0),
        _e = -se,
        Ve = Math.min(J / 2 - xe / 2, 0),
        R = -Ve,
        Fe = Math.max(Math.min(d.startX + j, _e), se),
        ut = Math.max(Math.min(d.startY + ce, R), Ve);
      (f.imageWrapEl.style.transitionDuration = "0ms"),
        (f.imageWrapEl.style.transform = `translate3d(${Fe}px, ${ut}px, 0)`),
        (c.x = F.clientX),
        (c.y = F.clientY),
        (d.startX = Fe),
        (d.startY = ut),
        (d.currentX = Fe),
        (d.currentY = ut);
    }
    function $(F) {
      const N = e.zoom,
        B = e.params.zoom;
      if (!f.slideEl) {
        F &&
          F.target &&
          (f.slideEl = F.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
          f.slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (f.slideEl = Qe(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (f.slideEl = e.slides[e.activeIndex]));
        let Ue = f.slideEl.querySelector(`.${B.containerClass}`);
        Ue &&
          (Ue = Ue.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = Ue),
          Ue
            ? (f.imageWrapEl = Ji(f.imageEl, `.${B.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      if (!f.imageEl || !f.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        f.slideEl.classList.add(`${B.zoomedSlideClass}`);
      let j, ce, tt, xe, Te, J, se, _e, Ve, R, Fe, ut, Wt, ve, Yt, ti, ni, Oe;
      typeof d.touchesStart.x == "undefined" && F
        ? ((j = F.pageX), (ce = F.pageY))
        : ((j = d.touchesStart.x), (ce = d.touchesStart.y));
      const ii = a,
        he = typeof F == "number" ? F : null;
      a === 1 &&
        he &&
        ((j = void 0),
        (ce = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0));
      const kt = v();
      (N.scale = he || kt),
        (a = he || kt),
        F && !(a === 1 && he)
          ? ((ni = f.slideEl.offsetWidth),
            (Oe = f.slideEl.offsetHeight),
            (tt = Us(f.slideEl).left + n.scrollX),
            (xe = Us(f.slideEl).top + n.scrollY),
            (Te = tt + ni / 2 - j),
            (J = xe + Oe / 2 - ce),
            (Ve = f.imageEl.offsetWidth || f.imageEl.clientWidth),
            (R = f.imageEl.offsetHeight || f.imageEl.clientHeight),
            (Fe = Ve * N.scale),
            (ut = R * N.scale),
            (Wt = Math.min(ni / 2 - Fe / 2, 0)),
            (ve = Math.min(Oe / 2 - ut / 2, 0)),
            (Yt = -Wt),
            (ti = -ve),
            ii > 0 &&
            he &&
            typeof d.currentX == "number" &&
            typeof d.currentY == "number"
              ? ((se = (d.currentX * N.scale) / ii),
                (_e = (d.currentY * N.scale) / ii))
              : ((se = Te * N.scale), (_e = J * N.scale)),
            se < Wt && (se = Wt),
            se > Yt && (se = Yt),
            _e < ve && (_e = ve),
            _e > ti && (_e = ti))
          : ((se = 0), (_e = 0)),
        he && N.scale === 1 && ((f.originX = 0), (f.originY = 0)),
        (d.currentX = se),
        (d.currentY = _e),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = `translate3d(${se}px, ${_e}px,0)`),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`);
    }
    function C() {
      const F = e.zoom,
        N = e.params.zoom;
      if (!f.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (f.slideEl = Qe(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
          : (f.slideEl = e.slides[e.activeIndex]);
        let B = f.slideEl.querySelector(`.${N.containerClass}`);
        B &&
          (B = B.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = B),
          B
            ? (f.imageWrapEl = Ji(f.imageEl, `.${N.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      !f.imageEl ||
        !f.imageWrapEl ||
        (e.params.cssMode &&
          ((e.wrapperEl.style.overflow = ""),
          (e.wrapperEl.style.touchAction = "")),
        (F.scale = 1),
        (a = 1),
        (d.currentX = void 0),
        (d.currentY = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        f.slideEl.classList.remove(`${N.zoomedSlideClass}`),
        (f.slideEl = void 0),
        (f.originX = 0),
        (f.originY = 0),
        e.params.zoom.panOnMouseMove &&
          ((c = { x: 0, y: 0 }),
          l && ((l = !1), (d.startX = 0), (d.startY = 0))));
    }
    function W(F) {
      const N = e.zoom;
      N.scale && N.scale !== 1 ? C() : $(F);
    }
    function K() {
      const F = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
        N = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: F, activeListenerWithCapture: N };
    }
    function pe() {
      const F = e.zoom;
      if (F.enabled) return;
      F.enabled = !0;
      const { passiveListener: N, activeListenerWithCapture: B } = K();
      e.wrapperEl.addEventListener("pointerdown", M, N),
        e.wrapperEl.addEventListener("pointermove", x, B),
        ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
          e.wrapperEl.addEventListener(j, E, N);
        }),
        e.wrapperEl.addEventListener("pointermove", D, B);
    }
    function ue() {
      const F = e.zoom;
      if (!F.enabled) return;
      F.enabled = !1;
      const { passiveListener: N, activeListenerWithCapture: B } = K();
      e.wrapperEl.removeEventListener("pointerdown", M, N),
        e.wrapperEl.removeEventListener("pointermove", x, B),
        ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
          e.wrapperEl.removeEventListener(j, E, N);
        }),
        e.wrapperEl.removeEventListener("pointermove", D, B);
    }
    i("init", () => {
      e.params.zoom.enabled && pe();
    }),
      i("destroy", () => {
        ue();
      }),
      i("touchStart", (F, N) => {
        e.zoom.enabled && O(N);
      }),
      i("touchEnd", (F, N) => {
        e.zoom.enabled && z();
      }),
      i("doubleTap", (F, N) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          W(N);
      }),
      i("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && A();
      }),
      i("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && A();
      }),
      Object.assign(e.zoom, {
        enable: pe,
        disable: ue,
        in: $,
        out: C,
        toggle: W,
      });
  }
  function Jd(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
    function r(c, u) {
      const h = (function () {
        let d, g, w;
        return (y, v) => {
          for (g = -1, d = y.length; d - g > 1; )
            (w = (d + g) >> 1), y[w] <= v ? (g = w) : (d = w);
          return d;
        };
      })();
      (this.x = c), (this.y = u), (this.lastIndex = c.length - 1);
      let m, p;
      return (
        (this.interpolate = function (d) {
          return d
            ? ((p = h(this.x, d)),
              (m = p - 1),
              ((d - this.x[m]) * (this.y[p] - this.y[m])) /
                (this.x[p] - this.x[m]) +
                this.y[m])
            : 0;
        }),
        this
      );
    }
    function n(c) {
      e.controller.spline = e.params.loop
        ? new r(e.slidesGrid, c.slidesGrid)
        : new r(e.snapGrid, c.snapGrid);
    }
    function a(c, u) {
      const h = e.controller.control;
      let m, p;
      const f = e.constructor;
      function d(g) {
        if (g.destroyed) return;
        const w = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (n(g), (p = -e.controller.spline.interpolate(-w))),
          (!p || e.params.controller.by === "container") &&
            ((m =
              (g.maxTranslate() - g.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (Number.isNaN(m) || !Number.isFinite(m)) && (m = 1),
            (p = (w - e.minTranslate()) * m + g.minTranslate())),
          e.params.controller.inverse && (p = g.maxTranslate() - p),
          g.updateProgress(p),
          g.setTranslate(p, e),
          g.updateActiveIndex(),
          g.updateSlidesClasses();
      }
      if (Array.isArray(h))
        for (let g = 0; g < h.length; g += 1)
          h[g] !== u && h[g] instanceof f && d(h[g]);
      else h instanceof f && u !== h && d(h);
    }
    function o(c, u) {
      const h = e.constructor,
        m = e.controller.control;
      let p;
      function f(d) {
        d.destroyed ||
          (d.setTransition(c, e),
          c !== 0 &&
            (d.transitionStart(),
            d.params.autoHeight &&
              Zi(() => {
                d.updateAutoHeight();
              }),
            ns(d.wrapperEl, () => {
              m && d.transitionEnd();
            })));
      }
      if (Array.isArray(m))
        for (p = 0; p < m.length; p += 1)
          m[p] !== u && m[p] instanceof h && f(m[p]);
      else m instanceof h && u !== m && f(m);
    }
    function l() {
      e.controller.control &&
        e.controller.spline &&
        ((e.controller.spline = void 0), delete e.controller.spline);
    }
    i("beforeInit", () => {
      if (
        typeof window != "undefined" &&
        (typeof e.params.controller.control == "string" ||
          e.params.controller.control instanceof HTMLElement)
      ) {
        (typeof e.params.controller.control == "string"
          ? [...document.querySelectorAll(e.params.controller.control)]
          : [e.params.controller.control]
        ).forEach((u) => {
          if (
            (e.controller.control || (e.controller.control = []), u && u.swiper)
          )
            e.controller.control.push(u.swiper);
          else if (u) {
            const h = `${e.params.eventsPrefix}init`,
              m = (p) => {
                e.controller.control.push(p.detail[0]),
                  e.update(),
                  u.removeEventListener(h, m);
              };
            u.addEventListener(h, m);
          }
        });
        return;
      }
      e.controller.control = e.params.controller.control;
    }),
      i("update", () => {
        l();
      }),
      i("resize", () => {
        l();
      }),
      i("observerUpdate", () => {
        l();
      }),
      i("setTranslate", (c, u, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTranslate(u, h);
      }),
      i("setTransition", (c, u, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTransition(u, h);
      }),
      Object.assign(e.controller, { setTranslate: a, setTransition: o });
  }
  function ef(s) {
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
    function l(A) {
      const L = r;
      L.length !== 0 && ((L.innerHTML = ""), (L.innerHTML = A));
    }
    function c(A) {
      const L = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(A).replace(/x/g, L);
    }
    function u(A) {
      (A = ne(A)),
        A.forEach((L) => {
          L.setAttribute("tabIndex", "0");
        });
    }
    function h(A) {
      (A = ne(A)),
        A.forEach((L) => {
          L.setAttribute("tabIndex", "-1");
        });
    }
    function m(A, L) {
      (A = ne(A)),
        A.forEach(($) => {
          $.setAttribute("role", L);
        });
    }
    function p(A, L) {
      (A = ne(A)),
        A.forEach(($) => {
          $.setAttribute("aria-roledescription", L);
        });
    }
    function f(A, L) {
      (A = ne(A)),
        A.forEach(($) => {
          $.setAttribute("aria-controls", L);
        });
    }
    function d(A, L) {
      (A = ne(A)),
        A.forEach(($) => {
          $.setAttribute("aria-label", L);
        });
    }
    function g(A, L) {
      (A = ne(A)),
        A.forEach(($) => {
          $.setAttribute("id", L);
        });
    }
    function w(A, L) {
      (A = ne(A)),
        A.forEach(($) => {
          $.setAttribute("aria-live", L);
        });
    }
    function y(A) {
      (A = ne(A)),
        A.forEach((L) => {
          L.setAttribute("aria-disabled", !0);
        });
    }
    function v(A) {
      (A = ne(A)),
        A.forEach((L) => {
          L.setAttribute("aria-disabled", !1);
        });
    }
    function _(A) {
      if (A.keyCode !== 13 && A.keyCode !== 32) return;
      const L = e.params.a11y,
        $ = A.target;
      if (
        !(
          e.pagination &&
          e.pagination.el &&
          ($ === e.pagination.el || e.pagination.el.contains(A.target)) &&
          !A.target.matches(bi(e.params.pagination.bulletClass))
        )
      ) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const C = ne(e.navigation.prevEl);
          ne(e.navigation.nextEl).includes($) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? l(L.lastSlideMessage) : l(L.nextSlideMessage)),
            C.includes($) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? l(L.firstSlideMessage) : l(L.prevSlideMessage));
        }
        e.pagination &&
          $.matches(bi(e.params.pagination.bulletClass)) &&
          $.click();
      }
    }
    function b() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: A, prevEl: L } = e.navigation;
      L && (e.isBeginning ? (y(L), h(L)) : (v(L), u(L))),
        A && (e.isEnd ? (y(A), h(A)) : (v(A), u(A)));
    }
    function S() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function T() {
      return S() && e.params.pagination.clickable;
    }
    function M() {
      const A = e.params.a11y;
      S() &&
        e.pagination.bullets.forEach((L) => {
          e.params.pagination.clickable &&
            (u(L),
            e.params.pagination.renderBullet ||
              (m(L, "button"),
              d(
                L,
                A.paginationBulletMessage.replace(/\{\{index\}\}/, ss(L) + 1)
              ))),
            L.matches(bi(e.params.pagination.bulletActiveClass))
              ? L.setAttribute("aria-current", "true")
              : L.removeAttribute("aria-current");
        });
    }
    const x = (A, L, $) => {
        u(A),
          A.tagName !== "BUTTON" &&
            (m(A, "button"), A.addEventListener("keydown", _)),
          d(A, $),
          f(A, L);
      },
      E = (A) => {
        a && a !== A.target && !a.contains(A.target) && (n = !0),
          (e.a11y.clicked = !0);
      },
      I = () => {
        (n = !1),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
      },
      P = (A) => {
        o = new Date().getTime();
      },
      k = (A) => {
        if (
          e.a11y.clicked ||
          !e.params.a11y.scrollOnFocus ||
          new Date().getTime() - o < 100
        )
          return;
        const L = A.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!L || !e.slides.includes(L)) return;
        a = L;
        const $ = e.slides.indexOf(L) === e.activeIndex,
          C =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(L);
        $ ||
          C ||
          (A.sourceCapabilities && A.sourceCapabilities.firesTouchEvents) ||
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
      },
      O = () => {
        const A = e.params.a11y;
        A.itemRoleDescriptionMessage &&
          p(e.slides, A.itemRoleDescriptionMessage),
          A.slideRole && m(e.slides, A.slideRole);
        const L = e.slides.length;
        A.slideLabelMessage &&
          e.slides.forEach(($, C) => {
            const W = e.params.loop
                ? parseInt($.getAttribute("data-swiper-slide-index"), 10)
                : C,
              K = A.slideLabelMessage
                .replace(/\{\{index\}\}/, W + 1)
                .replace(/\{\{slidesLength\}\}/, L);
            d($, K);
          });
      },
      D = () => {
        const A = e.params.a11y;
        e.el.append(r);
        const L = e.el;
        A.containerRoleDescriptionMessage &&
          p(L, A.containerRoleDescriptionMessage),
          A.containerMessage && d(L, A.containerMessage),
          A.containerRole && m(L, A.containerRole);
        const $ = e.wrapperEl,
          C = A.id || $.getAttribute("id") || `swiper-wrapper-${c(16)}`,
          W = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        g($, C), w($, W), O();
        let { nextEl: K, prevEl: pe } = e.navigation ? e.navigation : {};
        (K = ne(K)),
          (pe = ne(pe)),
          K && K.forEach((F) => x(F, C, A.nextSlideMessage)),
          pe && pe.forEach((F) => x(F, C, A.prevSlideMessage)),
          T() &&
            ne(e.pagination.el).forEach((N) => {
              N.addEventListener("keydown", _);
            }),
          Ye().addEventListener("visibilitychange", P),
          e.el.addEventListener("focus", k, !0),
          e.el.addEventListener("focus", k, !0),
          e.el.addEventListener("pointerdown", E, !0),
          e.el.addEventListener("pointerup", I, !0);
      };
    function z() {
      r && r.remove();
      let { nextEl: A, prevEl: L } = e.navigation ? e.navigation : {};
      (A = ne(A)),
        (L = ne(L)),
        A && A.forEach((C) => C.removeEventListener("keydown", _)),
        L && L.forEach((C) => C.removeEventListener("keydown", _)),
        T() &&
          ne(e.pagination.el).forEach((W) => {
            W.removeEventListener("keydown", _);
          }),
        Ye().removeEventListener("visibilitychange", P),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", k, !0),
          e.el.removeEventListener("pointerdown", E, !0),
          e.el.removeEventListener("pointerup", I, !0));
    }
    i("beforeInit", () => {
      (r = It("span", e.params.a11y.notificationClass)),
        r.setAttribute("aria-live", "assertive"),
        r.setAttribute("aria-atomic", "true");
    }),
      i("afterInit", () => {
        e.params.a11y.enabled && D();
      }),
      i(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          e.params.a11y.enabled && O();
        }
      ),
      i("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && b();
      }),
      i("paginationUpdate", () => {
        e.params.a11y.enabled && M();
      }),
      i("destroy", () => {
        e.params.a11y.enabled && z();
      });
  }
  function tf(s) {
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
    const a = (p) =>
        p
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      o = (p) => {
        const f = be();
        let d;
        p ? (d = new URL(p)) : (d = f.location);
        const g = d.pathname
            .slice(1)
            .split("/")
            .filter((_) => _ !== ""),
          w = g.length,
          y = g[w - 2],
          v = g[w - 1];
        return { key: y, value: v };
      },
      l = (p, f) => {
        const d = be();
        if (!r || !e.params.history.enabled) return;
        let g;
        e.params.url ? (g = new URL(e.params.url)) : (g = d.location);
        const w =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(`[data-swiper-slide-index="${f}"]`)
            : e.slides[f];
        let y = a(w.getAttribute("data-history"));
        if (e.params.history.root.length > 0) {
          let _ = e.params.history.root;
          _[_.length - 1] === "/" && (_ = _.slice(0, _.length - 1)),
            (y = `${_}/${p ? `${p}/` : ""}${y}`);
        } else g.pathname.includes(p) || (y = `${p ? `${p}/` : ""}${y}`);
        e.params.history.keepQuery && (y += g.search);
        const v = d.history.state;
        (v && v.value === y) ||
          (e.params.history.replaceState
            ? d.history.replaceState({ value: y }, null, y)
            : d.history.pushState({ value: y }, null, y));
      },
      c = (p, f, d) => {
        if (f)
          for (let g = 0, w = e.slides.length; g < w; g += 1) {
            const y = e.slides[g];
            if (a(y.getAttribute("data-history")) === f) {
              const _ = e.getSlideIndex(y);
              e.slideTo(_, p, d);
            }
          }
        else e.slideTo(0, p, d);
      },
      u = () => {
        (n = o(e.params.url)), c(e.params.speed, n.value, !1);
      },
      h = () => {
        const p = be();
        if (e.params.history) {
          if (!p.history || !p.history.pushState) {
            (e.params.history.enabled = !1),
              (e.params.hashNavigation.enabled = !0);
            return;
          }
          if (((r = !0), (n = o(e.params.url)), !n.key && !n.value)) {
            e.params.history.replaceState || p.addEventListener("popstate", u);
            return;
          }
          c(0, n.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || p.addEventListener("popstate", u);
        }
      },
      m = () => {
        const p = be();
        e.params.history.replaceState || p.removeEventListener("popstate", u);
      };
    i("init", () => {
      e.params.history.enabled && h();
    }),
      i("destroy", () => {
        e.params.history.enabled && m();
      }),
      i("transitionEnd _freeModeNoMomentumRelease", () => {
        r && l(e.params.history.key, e.activeIndex);
      }),
      i("slideChange", () => {
        r && e.params.cssMode && l(e.params.history.key, e.activeIndex);
      });
  }
  function rf(s) {
    let { swiper: e, extendParams: t, emit: i, on: r } = s,
      n = !1;
    const a = Ye(),
      o = be();
    t({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
        getSlideIndex(m, p) {
          if (e.virtual && e.params.virtual.enabled) {
            const f = e.slides.find((g) => g.getAttribute("data-hash") === p);
            return f
              ? parseInt(f.getAttribute("data-swiper-slide-index"), 10)
              : 0;
          }
          return e.getSlideIndex(
            Qe(
              e.slidesEl,
              `.${e.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`
            )[0]
          );
        },
      },
    });
    const l = () => {
        i("hashChange");
        const m = a.location.hash.replace("#", ""),
          p =
            e.virtual && e.params.virtual.enabled
              ? e.slidesEl.querySelector(
                  `[data-swiper-slide-index="${e.activeIndex}"]`
                )
              : e.slides[e.activeIndex],
          f = p ? p.getAttribute("data-hash") : "";
        if (m !== f) {
          const d = e.params.hashNavigation.getSlideIndex(e, m);
          if (typeof d == "undefined" || Number.isNaN(d)) return;
          e.slideTo(d);
        }
      },
      c = () => {
        if (!n || !e.params.hashNavigation.enabled) return;
        const m =
            e.virtual && e.params.virtual.enabled
              ? e.slidesEl.querySelector(
                  `[data-swiper-slide-index="${e.activeIndex}"]`
                )
              : e.slides[e.activeIndex],
          p = m
            ? m.getAttribute("data-hash") || m.getAttribute("data-history")
            : "";
        e.params.hashNavigation.replaceState &&
        o.history &&
        o.history.replaceState
          ? (o.history.replaceState(null, null, `#${p}` || ""), i("hashSet"))
          : ((a.location.hash = p || ""), i("hashSet"));
      },
      u = () => {
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        n = !0;
        const m = a.location.hash.replace("#", "");
        if (m) {
          const f = e.params.hashNavigation.getSlideIndex(e, m);
          e.slideTo(f || 0, 0, e.params.runCallbacksOnInit, !0);
        }
        e.params.hashNavigation.watchState &&
          o.addEventListener("hashchange", l);
      },
      h = () => {
        e.params.hashNavigation.watchState &&
          o.removeEventListener("hashchange", l);
      };
    r("init", () => {
      e.params.hashNavigation.enabled && u();
    }),
      r("destroy", () => {
        e.params.hashNavigation.enabled && h();
      }),
      r("transitionEnd _freeModeNoMomentumRelease", () => {
        n && c();
      }),
      r("slideChange", () => {
        n && e.params.cssMode && c();
      });
  }
  function sf(s) {
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
      l = n && n.autoplay ? n.autoplay.delay : 3e3,
      c = n && n.autoplay ? n.autoplay.delay : 3e3,
      u,
      h = new Date().getTime(),
      m,
      p,
      f,
      d,
      g,
      w,
      y;
    function v(L) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (L.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", v),
          !(y || (L.detail && L.detail.bySwiperTouchMove)) && E()));
    }
    const _ = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (m = !0) : m && ((c = u), (m = !1));
        const L = e.autoplay.paused ? u : h + c - new Date().getTime();
        (e.autoplay.timeLeft = L),
          r("autoplayTimeLeft", L, L / l),
          (o = requestAnimationFrame(() => {
            _();
          }));
      },
      b = () => {
        let L;
        return (
          e.virtual && e.params.virtual.enabled
            ? (L = e.slides.find((C) =>
                C.classList.contains("swiper-slide-active")
              ))
            : (L = e.slides[e.activeIndex]),
          L ? parseInt(L.getAttribute("data-swiper-autoplay"), 10) : void 0
        );
      },
      S = (L) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(o), _();
        let $ = typeof L == "undefined" ? e.params.autoplay.delay : L;
        (l = e.params.autoplay.delay), (c = e.params.autoplay.delay);
        const C = b();
        !Number.isNaN(C) &&
          C > 0 &&
          typeof L == "undefined" &&
          (($ = C), (l = C), (c = C)),
          (u = $);
        const W = e.params.speed,
          K = () => {
            !e ||
              e.destroyed ||
              (e.params.autoplay.reverseDirection
                ? !e.isBeginning || e.params.loop || e.params.rewind
                  ? (e.slidePrev(W, !0, !0), r("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(e.slides.length - 1, W, !0, !0), r("autoplay"))
                : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(W, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, W, !0, !0), r("autoplay")),
              e.params.cssMode &&
                ((h = new Date().getTime()),
                requestAnimationFrame(() => {
                  S();
                })));
          };
        return (
          $ > 0
            ? (clearTimeout(a),
              (a = setTimeout(() => {
                K();
              }, $)))
            : requestAnimationFrame(() => {
                K();
              }),
          $
        );
      },
      T = () => {
        (h = new Date().getTime()),
          (e.autoplay.running = !0),
          S(),
          r("autoplayStart");
      },
      M = () => {
        (e.autoplay.running = !1),
          clearTimeout(a),
          cancelAnimationFrame(o),
          r("autoplayStop");
      },
      x = (L, $) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(a), L || (w = !0);
        const C = () => {
          r("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", v)
              : E();
        };
        if (((e.autoplay.paused = !0), $)) {
          g && (u = e.params.autoplay.delay), (g = !1), C();
          return;
        }
        (u = (u || e.params.autoplay.delay) - (new Date().getTime() - h)),
          !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0), C());
      },
      E = () => {
        (e.isEnd && u < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((h = new Date().getTime()),
          w ? ((w = !1), S(u)) : S(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      I = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const L = Ye();
        L.visibilityState === "hidden" && ((w = !0), x(!0)),
          L.visibilityState === "visible" && E();
      },
      P = (L) => {
        L.pointerType === "mouse" &&
          ((w = !0), (y = !0), !(e.animating || e.autoplay.paused) && x(!0));
      },
      k = (L) => {
        L.pointerType === "mouse" && ((y = !1), e.autoplay.paused && E());
      },
      O = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", P),
          e.el.addEventListener("pointerleave", k));
      },
      D = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", P),
          e.el.removeEventListener("pointerleave", k));
      },
      z = () => {
        Ye().addEventListener("visibilitychange", I);
      },
      A = () => {
        Ye().removeEventListener("visibilitychange", I);
      };
    i("init", () => {
      e.params.autoplay.enabled && (O(), z(), T());
    }),
      i("destroy", () => {
        D(), A(), e.autoplay.running && M();
      }),
      i("_freeModeStaticRelease", () => {
        (f || w) && E();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? M() : x(!0, !0);
      }),
      i("beforeTransitionStart", (L, $, C) => {
        e.destroyed ||
          !e.autoplay.running ||
          (C || !e.params.autoplay.disableOnInteraction ? x(!0, !0) : M());
      }),
      i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (e.params.autoplay.disableOnInteraction) {
            M();
            return;
          }
          (p = !0),
            (f = !1),
            (w = !1),
            (d = setTimeout(() => {
              (w = !0), (f = !0), x(!0);
            }, 200));
        }
      }),
      i("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !p)) {
          if (
            (clearTimeout(d),
            clearTimeout(a),
            e.params.autoplay.disableOnInteraction)
          ) {
            (f = !1), (p = !1);
            return;
          }
          f && e.params.cssMode && E(), (f = !1), (p = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (g = !0);
      }),
      Object.assign(e.autoplay, { start: T, stop: M, pause: x, resume: E });
  }
  function nf(s) {
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
      const c = e.thumbs.swiper;
      if (!c || c.destroyed) return;
      const u = c.clickedIndex,
        h = c.clickedSlide;
      if (
        (h && h.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
        typeof u == "undefined" ||
        u === null
      )
        return;
      let m;
      c.params.loop
        ? (m = parseInt(
            c.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (m = u),
        e.params.loop ? e.slideToLoop(m) : e.slideTo(m);
    }
    function o() {
      const { thumbs: c } = e.params;
      if (r) return !1;
      r = !0;
      const u = e.constructor;
      if (c.swiper instanceof u) {
        if (c.swiper.destroyed) return (r = !1), !1;
        (e.thumbs.swiper = c.swiper),
          Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          e.thumbs.swiper.update();
      } else if (is(c.swiper)) {
        const h = Object.assign({}, c.swiper);
        Object.assign(h, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new u(h)),
          (n = !0);
      }
      return (
        e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", a),
        !0
      );
    }
    function l(c) {
      const u = e.thumbs.swiper;
      if (!u || u.destroyed) return;
      const h =
        u.params.slidesPerView === "auto"
          ? u.slidesPerViewDynamic()
          : u.params.slidesPerView;
      let m = 1;
      const p = e.params.thumbs.slideThumbActiveClass;
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (m = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (m = 1),
        (m = Math.floor(m)),
        u.slides.forEach((g) => g.classList.remove(p)),
        u.params.loop || (u.params.virtual && u.params.virtual.enabled))
      )
        for (let g = 0; g < m; g += 1)
          Qe(
            u.slidesEl,
            `[data-swiper-slide-index="${e.realIndex + g}"]`
          ).forEach((w) => {
            w.classList.add(p);
          });
      else
        for (let g = 0; g < m; g += 1)
          u.slides[e.realIndex + g] &&
            u.slides[e.realIndex + g].classList.add(p);
      const f = e.params.thumbs.autoScrollOffset,
        d = f && !u.params.loop;
      if (e.realIndex !== u.realIndex || d) {
        const g = u.activeIndex;
        let w, y;
        if (u.params.loop) {
          const v = u.slides.find(
            (_) =>
              _.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
          );
          (w = u.slides.indexOf(v)),
            (y = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (w = e.realIndex), (y = w > e.previousIndex ? "next" : "prev");
        d && (w += y === "next" ? f : -1 * f),
          u.visibleSlidesIndexes &&
            u.visibleSlidesIndexes.indexOf(w) < 0 &&
            (u.params.centeredSlides
              ? w > g
                ? (w = w - Math.floor(h / 2) + 1)
                : (w = w + Math.floor(h / 2) - 1)
              : w > g && u.params.slidesPerGroup,
            u.slideTo(w, c ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const { thumbs: c } = e.params;
      if (!(!c || !c.swiper))
        if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
          const u = Ye(),
            h = () => {
              const p =
                typeof c.swiper == "string"
                  ? u.querySelector(c.swiper)
                  : c.swiper;
              if (p && p.swiper) (c.swiper = p.swiper), o(), l(!0);
              else if (p) {
                const f = `${e.params.eventsPrefix}init`,
                  d = (g) => {
                    (c.swiper = g.detail[0]),
                      p.removeEventListener(f, d),
                      o(),
                      l(!0),
                      c.swiper.update(),
                      e.update();
                  };
                p.addEventListener(f, d);
              }
              return p;
            },
            m = () => {
              if (e.destroyed) return;
              h() || requestAnimationFrame(m);
            };
          requestAnimationFrame(m);
        } else o(), l(!0);
    }),
      i("slideChange update resize observerUpdate", () => {
        l();
      }),
      i("setTransition", (c, u) => {
        const h = e.thumbs.swiper;
        !h || h.destroyed || h.setTransition(u);
      }),
      i("beforeDestroy", () => {
        const c = e.thumbs.swiper;
        !c || c.destroyed || (n && c.destroy());
      }),
      Object.assign(e.thumbs, { init: o, update: l });
  }
  function af(s) {
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
      const l = e.getTranslate();
      e.setTranslate(l),
        e.setTransition(0),
        (e.touchEventsData.velocities.length = 0),
        e.freeMode.onTouchEnd({
          currentPos: e.rtl ? e.translate : -e.translate,
        });
    }
    function a() {
      if (e.params.cssMode) return;
      const { touchEventsData: l, touches: c } = e;
      l.velocities.length === 0 &&
        l.velocities.push({
          position: c[e.isHorizontal() ? "startX" : "startY"],
          time: l.touchStartTime,
        }),
        l.velocities.push({
          position: c[e.isHorizontal() ? "currentX" : "currentY"],
          time: Gt(),
        });
    }
    function o(l) {
      let { currentPos: c } = l;
      if (e.params.cssMode) return;
      const {
          params: u,
          wrapperEl: h,
          rtlTranslate: m,
          snapGrid: p,
          touchEventsData: f,
        } = e,
        g = Gt() - f.touchStartTime;
      if (c < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (c > -e.maxTranslate()) {
        e.slides.length < p.length
          ? e.slideTo(p.length - 1)
          : e.slideTo(e.slides.length - 1);
        return;
      }
      if (u.freeMode.momentum) {
        if (f.velocities.length > 1) {
          const M = f.velocities.pop(),
            x = f.velocities.pop(),
            E = M.position - x.position,
            I = M.time - x.time;
          (e.velocity = E / I),
            (e.velocity /= 2),
            Math.abs(e.velocity) < u.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (I > 150 || Gt() - M.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= u.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let w = 1e3 * u.freeMode.momentumRatio;
        const y = e.velocity * w;
        let v = e.translate + y;
        m && (v = -v);
        let _ = !1,
          b;
        const S = Math.abs(e.velocity) * 20 * u.freeMode.momentumBounceRatio;
        let T;
        if (v < e.maxTranslate())
          u.freeMode.momentumBounce
            ? (v + e.maxTranslate() < -S && (v = e.maxTranslate() - S),
              (b = e.maxTranslate()),
              (_ = !0),
              (f.allowMomentumBounce = !0))
            : (v = e.maxTranslate()),
            u.loop && u.centeredSlides && (T = !0);
        else if (v > e.minTranslate())
          u.freeMode.momentumBounce
            ? (v - e.minTranslate() > S && (v = e.minTranslate() + S),
              (b = e.minTranslate()),
              (_ = !0),
              (f.allowMomentumBounce = !0))
            : (v = e.minTranslate()),
            u.loop && u.centeredSlides && (T = !0);
        else if (u.freeMode.sticky) {
          let M;
          for (let x = 0; x < p.length; x += 1)
            if (p[x] > -v) {
              M = x;
              break;
            }
          Math.abs(p[M] - v) < Math.abs(p[M - 1] - v) ||
          e.swipeDirection === "next"
            ? (v = p[M])
            : (v = p[M - 1]),
            (v = -v);
        }
        if (
          (T &&
            r("transitionEnd", () => {
              e.loopFix();
            }),
          e.velocity !== 0)
        ) {
          if (
            (m
              ? (w = Math.abs((-v - e.translate) / e.velocity))
              : (w = Math.abs((v - e.translate) / e.velocity)),
            u.freeMode.sticky)
          ) {
            const M = Math.abs((m ? -v : v) - e.translate),
              x = e.slidesSizesGrid[e.activeIndex];
            M < x
              ? (w = u.speed)
              : M < 2 * x
              ? (w = u.speed * 1.5)
              : (w = u.speed * 2.5);
          }
        } else if (u.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        u.freeMode.momentumBounce && _
          ? (e.updateProgress(b),
            e.setTransition(w),
            e.setTranslate(v),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            ns(h, () => {
              !e ||
                e.destroyed ||
                !f.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(u.speed),
                setTimeout(() => {
                  e.setTranslate(b),
                    ns(h, () => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (i("_freeModeNoMomentumRelease"),
            e.updateProgress(v),
            e.setTransition(w),
            e.setTranslate(v),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              ns(h, () => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(v),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (u.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else u.freeMode && i("_freeModeNoMomentumRelease");
      (!u.freeMode.momentum || g >= u.longSwipesMs) &&
        (i("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: { onTouchStart: n, onTouchMove: a, onTouchEnd: o },
    });
  }
  function of(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ grid: { rows: 1, fill: "column" } });
    let r, n, a, o;
    const l = () => {
        let d = e.params.spaceBetween;
        return (
          typeof d == "string" && d.indexOf("%") >= 0
            ? (d = (parseFloat(d.replace("%", "")) / 100) * e.size)
            : typeof d == "string" && (d = parseFloat(d)),
          d
        );
      },
      c = (d) => {
        const { slidesPerView: g } = e.params,
          { rows: w, fill: y } = e.params.grid,
          v =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : d.length;
        (a = Math.floor(v / w)),
          Math.floor(v / w) === v / w ? (r = v) : (r = Math.ceil(v / w) * w),
          g !== "auto" && y === "row" && (r = Math.max(r, g * w)),
          (n = r / w);
      },
      u = () => {
        e.slides &&
          e.slides.forEach((d) => {
            d.swiperSlideGridSet &&
              ((d.style.height = ""),
              (d.style[e.getDirectionLabel("margin-top")] = ""));
          });
      },
      h = (d, g, w) => {
        const { slidesPerGroup: y } = e.params,
          v = l(),
          { rows: _, fill: b } = e.params.grid,
          S =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : w.length;
        let T, M, x;
        if (b === "row" && y > 1) {
          const E = Math.floor(d / (y * _)),
            I = d - _ * y * E,
            P = E === 0 ? y : Math.min(Math.ceil((S - E * _ * y) / _), y);
          (x = Math.floor(I / P)),
            (M = I - x * P + E * y),
            (T = M + (x * r) / _),
            (g.style.order = T);
        } else
          b === "column"
            ? ((M = Math.floor(d / _)),
              (x = d - M * _),
              (M > a || (M === a && x === _ - 1)) &&
                ((x += 1), x >= _ && ((x = 0), (M += 1))))
            : ((x = Math.floor(d / n)), (M = d - x * n));
        (g.row = x),
          (g.column = M),
          (g.style.height = `calc((100% - ${(_ - 1) * v}px) / ${_})`),
          (g.style[e.getDirectionLabel("margin-top")] =
            x !== 0 ? v && `${v}px` : ""),
          (g.swiperSlideGridSet = !0);
      },
      m = (d, g) => {
        const { centeredSlides: w, roundLengths: y } = e.params,
          v = l(),
          { rows: _ } = e.params.grid;
        if (
          ((e.virtualSize = (d + v) * r),
          (e.virtualSize = Math.ceil(e.virtualSize / _) - v),
          e.params.cssMode ||
            (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
              e.virtualSize + v
            }px`),
          w)
        ) {
          const b = [];
          for (let S = 0; S < g.length; S += 1) {
            let T = g[S];
            y && (T = Math.floor(T)), g[S] < e.virtualSize + g[0] && b.push(T);
          }
          g.splice(0, g.length), g.push(...b);
        }
      },
      p = () => {
        o = e.params.grid && e.params.grid.rows > 1;
      },
      f = () => {
        const { params: d, el: g } = e,
          w = d.grid && d.grid.rows > 1;
        o && !w
          ? (g.classList.remove(
              `${d.containerModifierClass}grid`,
              `${d.containerModifierClass}grid-column`
            ),
            (a = 1),
            e.emitContainerClasses())
          : !o &&
            w &&
            (g.classList.add(`${d.containerModifierClass}grid`),
            d.grid.fill === "column" &&
              g.classList.add(`${d.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          (o = w);
      };
    i("init", p),
      i("update", f),
      (e.grid = {
        initSlides: c,
        unsetSlides: u,
        updateSlide: h,
        updateWrapperSize: m,
      });
  }
  function lf(s) {
    const e = this,
      { params: t, slidesEl: i } = e;
    t.loop && e.loopDestroy();
    const r = (n) => {
      if (typeof n == "string") {
        const a = document.createElement("div");
        (a.innerHTML = n), i.append(a.children[0]), (a.innerHTML = "");
      } else i.append(n);
    };
    if (typeof s == "object" && "length" in s)
      for (let n = 0; n < s.length; n += 1) s[n] && r(s[n]);
    else r(s);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update();
  }
  function cf(s) {
    const e = this,
      { params: t, activeIndex: i, slidesEl: r } = e;
    t.loop && e.loopDestroy();
    let n = i + 1;
    const a = (o) => {
      if (typeof o == "string") {
        const l = document.createElement("div");
        (l.innerHTML = o), r.prepend(l.children[0]), (l.innerHTML = "");
      } else r.prepend(o);
    };
    if (typeof s == "object" && "length" in s) {
      for (let o = 0; o < s.length; o += 1) s[o] && a(s[o]);
      n = i + s.length;
    } else a(s);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update(),
      e.slideTo(n, 0, !1);
  }
  function uf(s, e) {
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
    let l = a > s ? a + 1 : a;
    const c = [];
    for (let u = o - 1; u >= s; u -= 1) {
      const h = t.slides[u];
      h.remove(), c.unshift(h);
    }
    if (typeof e == "object" && "length" in e) {
      for (let u = 0; u < e.length; u += 1) e[u] && n.append(e[u]);
      l = a > s ? a + e.length : a;
    } else n.append(e);
    for (let u = 0; u < c.length; u += 1) n.append(c[u]);
    t.recalcSlides(),
      i.loop && t.loopCreate(),
      (!i.observer || t.isElement) && t.update(),
      i.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function df(s) {
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
    } else (a = s), e.slides[a] && e.slides[a].remove(), a < n && (n -= 1), (n = Math.max(n, 0));
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update(),
      t.loop ? e.slideTo(n + e.loopedSlides, 0, !1) : e.slideTo(n, 0, !1);
  }
  function ff() {
    const s = this,
      e = [];
    for (let t = 0; t < s.slides.length; t += 1) e.push(t);
    s.removeSlide(e);
  }
  function pf(s) {
    let { swiper: e } = s;
    Object.assign(e, {
      appendSlide: lf.bind(e),
      prependSlide: cf.bind(e),
      addSlide: uf.bind(e),
      removeSlide: df.bind(e),
      removeAllSlides: ff.bind(e),
    });
  }
  function Cr(s) {
    const {
      effect: e,
      swiper: t,
      on: i,
      setTranslate: r,
      setTransition: n,
      overwriteParams: a,
      perspective: o,
      recreateShadows: l,
      getEffectParams: c,
    } = s;
    i("beforeInit", () => {
      if (t.params.effect !== e) return;
      t.classNames.push(`${t.params.containerModifierClass}${e}`),
        o && o() && t.classNames.push(`${t.params.containerModifierClass}3d`);
      const h = a ? a() : {};
      Object.assign(t.params, h), Object.assign(t.originalParams, h);
    }),
      i("setTranslate", () => {
        t.params.effect === e && r();
      }),
      i("setTransition", (h, m) => {
        t.params.effect === e && n(m);
      }),
      i("transitionEnd", () => {
        if (t.params.effect === e && l) {
          if (!c || !c().slideShadows) return;
          t.slides.forEach((h) => {
            h.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((m) => m.remove());
          }),
            l();
        }
      });
    let u;
    i("virtualUpdate", () => {
      t.params.effect === e &&
        (t.slides.length || (u = !0),
        requestAnimationFrame(() => {
          u && t.slides && t.slides.length && (r(), (u = !1));
        }));
    });
  }
  function as(s, e) {
    const t = Qi(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function Qs(s) {
    let { swiper: e, duration: t, transformElements: i, allSlides: r } = s;
    const { activeIndex: n } = e,
      a = (o) =>
        o.parentElement
          ? o.parentElement
          : e.slides.find((c) => c.shadowRoot && c.shadowRoot === o.parentNode);
    if (e.params.virtualTranslate && t !== 0) {
      let o = !1,
        l;
      r
        ? (l = i)
        : (l = i.filter((c) => {
            const u = c.classList.contains("swiper-slide-transform") ? a(c) : c;
            return e.getSlideIndex(u) === n;
          })),
        l.forEach((c) => {
          ns(c, () => {
            if (o || !e || e.destroyed) return;
            (o = !0), (e.animating = !1);
            const u = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            e.wrapperEl.dispatchEvent(u);
          });
        });
    }
  }
  function hf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ fadeEffect: { crossFade: !1 } }),
      Cr({
        effect: "fade",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: a } = e,
            o = e.params.fadeEffect;
          for (let l = 0; l < a.length; l += 1) {
            const c = e.slides[l];
            let h = -c.swiperSlideOffset;
            e.params.virtualTranslate || (h -= e.translate);
            let m = 0;
            e.isHorizontal() || ((m = h), (h = 0));
            const p = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(c.progress), 0)
                : 1 + Math.min(Math.max(c.progress, -1), 0),
              f = as(o, c);
            (f.style.opacity = p),
              (f.style.transform = `translate3d(${h}px, ${m}px, 0px)`);
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => Qi(l));
          o.forEach((l) => {
            l.style.transitionDuration = `${a}ms`;
          }),
            Qs({ swiper: e, duration: a, transformElements: o, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  function mf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const r = (l, c, u) => {
      let h = u
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        m = u
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      h ||
        ((h = It(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            u ? "left" : "top"
          }`.split(" ")
        )),
        l.append(h)),
        m ||
          ((m = It(
            "div",
            `swiper-slide-shadow-cube swiper-slide-shadow-${
              u ? "right" : "bottom"
            }`.split(" ")
          )),
          l.append(m)),
        h && (h.style.opacity = Math.max(-c, 0)),
        m && (m.style.opacity = Math.max(c, 0));
    };
    Cr({
      effect: "cube",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
            el: l,
            wrapperEl: c,
            slides: u,
            width: h,
            height: m,
            rtlTranslate: p,
            size: f,
            browser: d,
          } = e,
          g = Ks(e),
          w = e.params.cubeEffect,
          y = e.isHorizontal(),
          v = e.virtual && e.params.virtual.enabled;
        let _ = 0,
          b;
        w.shadow &&
          (y
            ? ((b = e.wrapperEl.querySelector(".swiper-cube-shadow")),
              b ||
                ((b = It("div", "swiper-cube-shadow")), e.wrapperEl.append(b)),
              (b.style.height = `${h}px`))
            : ((b = l.querySelector(".swiper-cube-shadow")),
              b || ((b = It("div", "swiper-cube-shadow")), l.append(b))));
        for (let T = 0; T < u.length; T += 1) {
          const M = u[T];
          let x = T;
          v && (x = parseInt(M.getAttribute("data-swiper-slide-index"), 10));
          let E = x * 90,
            I = Math.floor(E / 360);
          p && ((E = -E), (I = Math.floor(-E / 360)));
          const P = Math.max(Math.min(M.progress, 1), -1);
          let k = 0,
            O = 0,
            D = 0;
          x % 4 === 0
            ? ((k = -I * 4 * f), (D = 0))
            : (x - 1) % 4 === 0
            ? ((k = 0), (D = -I * 4 * f))
            : (x - 2) % 4 === 0
            ? ((k = f + I * 4 * f), (D = f))
            : (x - 3) % 4 === 0 && ((k = -f), (D = 3 * f + f * 4 * I)),
            p && (k = -k),
            y || ((O = k), (k = 0));
          const z = `rotateX(${g(y ? 0 : -E)}deg) rotateY(${g(
            y ? E : 0
          )}deg) translate3d(${k}px, ${O}px, ${D}px)`;
          P <= 1 &&
            P > -1 &&
            ((_ = x * 90 + P * 90), p && (_ = -x * 90 - P * 90)),
            (M.style.transform = z),
            w.slideShadows && r(M, P, y);
        }
        if (
          ((c.style.transformOrigin = `50% 50% -${f / 2}px`),
          (c.style["-webkit-transform-origin"] = `50% 50% -${f / 2}px`),
          w.shadow)
        )
          if (y)
            b.style.transform = `translate3d(0px, ${
              h / 2 + w.shadowOffset
            }px, ${-h / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
              w.shadowScale
            })`;
          else {
            const T = Math.abs(_) - Math.floor(Math.abs(_) / 90) * 90,
              M =
                1.5 -
                (Math.sin((T * 2 * Math.PI) / 360) / 2 +
                  Math.cos((T * 2 * Math.PI) / 360) / 2),
              x = w.shadowScale,
              E = w.shadowScale / M,
              I = w.shadowOffset;
            b.style.transform = `scale3d(${x}, 1, ${E}) translate3d(0px, ${
              m / 2 + I
            }px, ${-m / 2 / E}px) rotateX(-89.99deg)`;
          }
        const S =
          (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -f / 2 : 0;
        (c.style.transform = `translate3d(0px,0,${S}px) rotateX(${g(
          e.isHorizontal() ? 0 : _
        )}deg) rotateY(${g(e.isHorizontal() ? -_ : 0)}deg)`),
          c.style.setProperty("--swiper-cube-translate-z", `${S}px`);
      },
      setTransition: (l) => {
        const { el: c, slides: u } = e;
        if (
          (u.forEach((h) => {
            (h.style.transitionDuration = `${l}ms`),
              h
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((m) => {
                  m.style.transitionDuration = `${l}ms`;
                });
          }),
          e.params.cubeEffect.shadow && !e.isHorizontal())
        ) {
          const h = c.querySelector(".swiper-cube-shadow");
          h && (h.style.transitionDuration = `${l}ms`);
        }
      },
      recreateShadows: () => {
        const l = e.isHorizontal();
        e.slides.forEach((c) => {
          const u = Math.max(Math.min(c.progress, 1), -1);
          r(c, u, l);
        });
      },
      getEffectParams: () => e.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0,
      }),
    });
  }
  function Pr(s, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
        s ? ` swiper-slide-shadow-${s}` : ""
      }`,
      r = Qi(e);
    let n = r.querySelector(`.${i.split(" ").join(".")}`);
    return n || ((n = It("div", i.split(" "))), r.append(n)), n;
  }
  function gf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
    const r = (l, c) => {
      let u = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        h = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      u || (u = Pr("flip", l, e.isHorizontal() ? "left" : "top")),
        h || (h = Pr("flip", l, e.isHorizontal() ? "right" : "bottom")),
        u && (u.style.opacity = Math.max(-c, 0)),
        h && (h.style.opacity = Math.max(c, 0));
    };
    Cr({
      effect: "flip",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: l, rtlTranslate: c } = e,
          u = e.params.flipEffect,
          h = Ks(e);
        for (let m = 0; m < l.length; m += 1) {
          const p = l[m];
          let f = p.progress;
          e.params.flipEffect.limitRotation &&
            (f = Math.max(Math.min(p.progress, 1), -1));
          const d = p.swiperSlideOffset;
          let w = -180 * f,
            y = 0,
            v = e.params.cssMode ? -d - e.translate : -d,
            _ = 0;
          e.isHorizontal()
            ? c && (w = -w)
            : ((_ = v), (v = 0), (y = -w), (w = 0)),
            (p.style.zIndex = -Math.abs(Math.round(f)) + l.length),
            u.slideShadows && r(p, f);
          const b = `translate3d(${v}px, ${_}px, 0px) rotateX(${h(
              y
            )}deg) rotateY(${h(w)}deg)`,
            S = as(u, p);
          S.style.transform = b;
        }
      },
      setTransition: (l) => {
        const c = e.slides.map((u) => Qi(u));
        c.forEach((u) => {
          (u.style.transitionDuration = `${l}ms`),
            u
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((h) => {
                h.style.transitionDuration = `${l}ms`;
              });
        }),
          Qs({ swiper: e, duration: l, transformElements: c });
      },
      recreateShadows: () => {
        e.params.flipEffect,
          e.slides.forEach((l) => {
            let c = l.progress;
            e.params.flipEffect.limitRotation &&
              (c = Math.max(Math.min(l.progress, 1), -1)),
              r(l, c);
          });
      },
      getEffectParams: () => e.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function vf(s) {
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
      Cr({
        effect: "coverflow",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { width: a, height: o, slides: l, slidesSizesGrid: c } = e,
            u = e.params.coverflowEffect,
            h = e.isHorizontal(),
            m = e.translate,
            p = h ? -m + a / 2 : -m + o / 2,
            f = h ? u.rotate : -u.rotate,
            d = u.depth,
            g = Ks(e);
          for (let w = 0, y = l.length; w < y; w += 1) {
            const v = l[w],
              _ = c[w],
              b = v.swiperSlideOffset,
              S = (p - b - _ / 2) / _,
              T =
                typeof u.modifier == "function"
                  ? u.modifier(S)
                  : S * u.modifier;
            let M = h ? f * T : 0,
              x = h ? 0 : f * T,
              E = -d * Math.abs(T),
              I = u.stretch;
            typeof I == "string" &&
              I.indexOf("%") !== -1 &&
              (I = (parseFloat(u.stretch) / 100) * _);
            let P = h ? 0 : I * T,
              k = h ? I * T : 0,
              O = 1 - (1 - u.scale) * Math.abs(T);
            Math.abs(k) < 0.001 && (k = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(M) < 0.001 && (M = 0),
              Math.abs(x) < 0.001 && (x = 0),
              Math.abs(O) < 0.001 && (O = 0);
            const D = `translate3d(${k}px,${P}px,${E}px)  rotateX(${g(
                x
              )}deg) rotateY(${g(M)}deg) scale(${O})`,
              z = as(u, v);
            if (
              ((z.style.transform = D),
              (v.style.zIndex = -Math.abs(Math.round(T)) + 1),
              u.slideShadows)
            ) {
              let A = h
                  ? v.querySelector(".swiper-slide-shadow-left")
                  : v.querySelector(".swiper-slide-shadow-top"),
                L = h
                  ? v.querySelector(".swiper-slide-shadow-right")
                  : v.querySelector(".swiper-slide-shadow-bottom");
              A || (A = Pr("coverflow", v, h ? "left" : "top")),
                L || (L = Pr("coverflow", v, h ? "right" : "bottom")),
                A && (A.style.opacity = T > 0 ? T : 0),
                L && (L.style.opacity = -T > 0 ? -T : 0);
            }
          }
        },
        setTransition: (a) => {
          e.slides
            .map((l) => Qi(l))
            .forEach((l) => {
              (l.style.transitionDuration = `${a}ms`),
                l
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((c) => {
                    c.style.transitionDuration = `${a}ms`;
                  });
            });
        },
        perspective: () => !0,
        overwriteParams: () => ({ watchSlidesProgress: !0 }),
      });
  }
  function yf(s) {
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
    const r = (o) => (typeof o == "string" ? o : `${o}px`);
    Cr({
      effect: "creative",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: o, wrapperEl: l, slidesSizesGrid: c } = e,
          u = e.params.creativeEffect,
          { progressMultiplier: h } = u,
          m = e.params.centeredSlides,
          p = Ks(e);
        if (m) {
          const f = c[0] / 2 - e.params.slidesOffsetBefore || 0;
          l.style.transform = `translateX(calc(50% - ${f}px))`;
        }
        for (let f = 0; f < o.length; f += 1) {
          const d = o[f],
            g = d.progress,
            w = Math.min(
              Math.max(d.progress, -u.limitProgress),
              u.limitProgress
            );
          let y = w;
          m ||
            (y = Math.min(
              Math.max(d.originalProgress, -u.limitProgress),
              u.limitProgress
            ));
          const v = d.swiperSlideOffset,
            _ = [e.params.cssMode ? -v - e.translate : -v, 0, 0],
            b = [0, 0, 0];
          let S = !1;
          e.isHorizontal() || ((_[1] = _[0]), (_[0] = 0));
          let T = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          w < 0 ? ((T = u.next), (S = !0)) : w > 0 && ((T = u.prev), (S = !0)),
            _.forEach((O, D) => {
              _[D] = `calc(${O}px + (${r(T.translate[D])} * ${Math.abs(
                w * h
              )}))`;
            }),
            b.forEach((O, D) => {
              let z = T.rotate[D] * Math.abs(w * h);
              b[D] = z;
            }),
            (d.style.zIndex = -Math.abs(Math.round(g)) + o.length);
          const M = _.join(", "),
            x = `rotateX(${p(b[0])}deg) rotateY(${p(b[1])}deg) rotateZ(${p(
              b[2]
            )}deg)`,
            E =
              y < 0
                ? `scale(${1 + (1 - T.scale) * y * h})`
                : `scale(${1 - (1 - T.scale) * y * h})`,
            I =
              y < 0 ? 1 + (1 - T.opacity) * y * h : 1 - (1 - T.opacity) * y * h,
            P = `translate3d(${M}) ${x} ${E}`;
          if ((S && T.shadow) || !S) {
            let O = d.querySelector(".swiper-slide-shadow");
            if ((!O && T.shadow && (O = Pr("creative", d)), O)) {
              const D = u.shadowPerProgress ? w * (1 / u.limitProgress) : w;
              O.style.opacity = Math.min(Math.max(Math.abs(D), 0), 1);
            }
          }
          const k = as(u, d);
          (k.style.transform = P),
            (k.style.opacity = I),
            T.origin && (k.style.transformOrigin = T.origin);
        }
      },
      setTransition: (o) => {
        const l = e.slides.map((c) => Qi(c));
        l.forEach((c) => {
          (c.style.transitionDuration = `${o}ms`),
            c.querySelectorAll(".swiper-slide-shadow").forEach((u) => {
              u.style.transitionDuration = `${o}ms`;
            });
        }),
          Qs({ swiper: e, duration: o, transformElements: l, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function wf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      Cr({
        effect: "cards",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: a, activeIndex: o, rtlTranslate: l } = e,
            c = e.params.cardsEffect,
            { startTranslate: u, isTouched: h } = e.touchEventsData,
            m = l ? -e.translate : e.translate;
          for (let p = 0; p < a.length; p += 1) {
            const f = a[p],
              d = f.progress,
              g = Math.min(Math.max(d, -4), 4);
            let w = f.swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (w -= a[0].swiperSlideOffset);
            let y = e.params.cssMode ? -w - e.translate : -w,
              v = 0;
            const _ = -100 * Math.abs(g);
            let b = 1,
              S = -c.perSlideRotate * g,
              T = c.perSlideOffset - Math.abs(g) * 0.75;
            const M =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p,
              x =
                (M === o || M === o - 1) &&
                g > 0 &&
                g < 1 &&
                (h || e.params.cssMode) &&
                m < u,
              E =
                (M === o || M === o + 1) &&
                g < 0 &&
                g > -1 &&
                (h || e.params.cssMode) &&
                m > u;
            if (x || E) {
              const O = ht(1 - Math.abs((Math.abs(g) - 0.5) / 0.5), 0.5);
              (S += -28 * g * O),
                (b += -0.5 * O),
                (T += 96 * O),
                (v = `${-25 * O * Math.abs(g)}%`);
            }
            if (
              (g < 0
                ? (y = `calc(${y}px ${l ? "-" : "+"} (${T * Math.abs(g)}%))`)
                : g > 0
                ? (y = `calc(${y}px ${l ? "-" : "+"} (-${T * Math.abs(g)}%))`)
                : (y = `${y}px`),
              !e.isHorizontal())
            ) {
              const O = v;
              (v = y), (y = O);
            }
            const I = g < 0 ? `${1 + (1 - b) * g}` : `${1 - (1 - b) * g}`,
              P = `
        translate3d(${y}, ${v}, ${_}px)
        rotateZ(${c.rotate ? (l ? -S : S) : 0}deg)
        scale(${I})
      `;
            if (c.slideShadows) {
              let O = f.querySelector(".swiper-slide-shadow");
              O || (O = Pr("cards", f)),
                O &&
                  (O.style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            f.style.zIndex = -Math.abs(Math.round(d)) + a.length;
            const k = as(c, f);
            k.style.transform = P;
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => Qi(l));
          o.forEach((l) => {
            (l.style.transitionDuration = `${a}ms`),
              l.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
                c.style.transitionDuration = `${a}ms`;
              });
          }),
            Qs({ swiper: e, duration: a, transformElements: o });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          _loopSwapReset: !1,
          watchSlidesProgress: !0,
          loopAdditionalSlides: e.params.cardsEffect.rotate ? 3 : 2,
          centeredSlides: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  const _f = [
    Yd,
    Xd,
    Gd,
    jd,
    Ud,
    Kd,
    Zd,
    Qd,
    Jd,
    ef,
    tf,
    rf,
    sf,
    nf,
    af,
    of,
    pf,
    hf,
    mf,
    gf,
    vf,
    yf,
    wf,
  ];
  Tt.use(_f);
  class bf {
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
      this.swiper = new Tt("[swiper='clinic-card']", {
        direction: "horizontal",
        slidesPerView: 1.2,
        on: {
          slideChange: function (t) {
            t.slides.forEach((i) => {
              i.setAttribute("card-status", "inactive");
            }),
              t.slides[t.activeIndex].setAttribute("card-status", "active");
          },
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
          1440: { slidesPerView: 2.8 },
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
  }
  function os() {
    new bf();
  }
  function Si(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function Vo(s, e) {
    (s.prototype = Object.create(e.prototype)),
      (s.prototype.constructor = s),
      (s.__proto__ = e);
  }
  /*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Dt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Ar = { duration: 0.5, overwrite: !1, delay: 0 },
    sa,
    Je,
    Se,
    jt = 1e8,
    me = 1 / jt,
    na = Math.PI * 2,
    Sf = na / 4,
    xf = 0,
    Wo = Math.sqrt,
    Tf = Math.cos,
    Ef = Math.sin,
    Xe = function (e) {
      return typeof e == "string";
    },
    Ae = function (e) {
      return typeof e == "function";
    },
    xi = function (e) {
      return typeof e == "number";
    },
    aa = function (e) {
      return typeof e == "undefined";
    },
    ui = function (e) {
      return typeof e == "object";
    },
    Et = function (e) {
      return e !== !1;
    },
    oa = function () {
      return typeof window != "undefined";
    },
    Js = function (e) {
      return Ae(e) || Xe(e);
    },
    Yo =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    st = Array.isArray,
    la = /(?:-?\.?\d|\.)+/gi,
    Xo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Or = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ca = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Go = /[+-]=-?[.\d]+/,
    jo = /[^,'"\[\]\s]+/gi,
    Mf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Me,
    di,
    ua,
    da,
    zt = {},
    en = {},
    Uo,
    Ko = function (e) {
      return (en = Lr(e, zt)) && Pt;
    },
    fa = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    ls = function (e, t) {
      return !t && console.warn(e);
    },
    Zo = function (e, t) {
      return (e && (zt[e] = t) && en && (en[e] = t)) || zt;
    },
    cs = function () {
      return 0;
    },
    Cf = { suppressEvents: !0, isStart: !0, kill: !1 },
    tn = { suppressEvents: !0, kill: !1 },
    Pf = { suppressEvents: !0 },
    pa = {},
    zi = [],
    ha = {},
    Qo,
    Rt = {},
    ma = {},
    Jo = 30,
    rn = [],
    ga = "",
    va = function (e) {
      var t = e[0],
        i,
        r;
      if ((ui(t) || Ae(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = rn.length; r-- && !rn[r].targetTest(t); );
        i = rn[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Pl(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    er = function (e) {
      return e._gsap || va(Kt(e))[0]._gsap;
    },
    el = function (e, t, i) {
      return (i = e[t]) && Ae(i)
        ? e[t]()
        : (aa(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Mt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Le = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Re = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    kr = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    Af = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    sn = function () {
      var e = zi.length,
        t = zi.slice(0),
        i,
        r;
      for (ha = {}, zi.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    ya = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    tl = function (e, t, i, r) {
      zi.length && !Je && sn(),
        e.render(t, i, !!(Je && t < 0 && ya(e))),
        zi.length && !Je && sn();
    },
    il = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(jo).length < 2
        ? t
        : Xe(e)
        ? e.trim()
        : e;
    },
    rl = function (e) {
      return e;
    },
    $t = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Of = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    Lr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    sl = function s(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = ui(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    nn = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    us = function (e) {
      var t = e.parent || Me,
        i = e.keyframes ? Of(st(e.keyframes)) : $t;
      if (Et(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    kf = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    nl = function (e, t, i, r, n) {
      var a = e[r],
        o;
      if (n) for (o = t[n]; a && a[n] > o; ) a = a._prev;
      return (
        a
          ? ((t._next = a._next), (a._next = t))
          : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[r] = t),
        (t._prev = a),
        (t.parent = t._dp = e),
        t
      );
    },
    an = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var n = t._prev,
        a = t._next;
      n ? (n._next = a) : e[i] === t && (e[i] = a),
        a ? (a._prev = n) : e[r] === t && (e[r] = n),
        (t._next = t._prev = t.parent = null);
    },
    Ri = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    tr = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    Lf = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    wa = function (e, t, i, r) {
      return (
        e._startAt &&
        (Je
          ? e._startAt.revert(tn)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    If = function s(e) {
      return !e || (e._ts && s(e.parent));
    },
    al = function (e) {
      return e._repeat ? Ir(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Ir = function (e, t) {
      var i = Math.floor((e = Re(e / t)));
      return e && i === e ? i - 1 : i;
    },
    on = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    ln = function (e) {
      return (e._end = Re(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || me) || 0)
      ));
    },
    cn = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = Re(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          ln(e),
          i._dirty || tr(i, e)),
        e
      );
    },
    ol = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = on(e.rawTime(), t)),
          (!t._dur || fs(0, t.totalDuration(), i) - t._tTime > me) &&
            t.render(i, !0)),
        tr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -me;
      }
    },
    fi = function (e, t, i, r) {
      return (
        t.parent && Ri(t),
        (t._start = Re(
          (xi(i) ? i : i || e !== Me ? Ut(e, i, t) : e._time) + t._delay
        )),
        (t._end = Re(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        nl(e, t, "_first", "_last", e._sort ? "_start" : 0),
        _a(t) || (e._recent = t),
        r || ol(e, t),
        e._ts < 0 && cn(e, e._tTime),
        e
      );
    },
    ll = function (e, t) {
      return (
        (zt.ScrollTrigger || fa("scrollTrigger", t)) &&
        zt.ScrollTrigger.create(t, e)
      );
    },
    cl = function (e, t, i, r, n) {
      if ((Aa(e, t, n), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Je &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Qo !== Ft.frame
      )
        return zi.push(e), (e._lazy = [n, r]), 1;
    },
    Df = function s(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
    },
    _a = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    zf = function (e, t, i, r) {
      var n = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && Df(e) && !(!e._initted && _a(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !_a(e))))
            ? 0
            : 1,
        o = e._rDelay,
        l = 0,
        c,
        u,
        h;
      if (
        (o &&
          e._repeat &&
          ((l = fs(0, e._tDur, t)),
          (u = Ir(l, o)),
          e._yoyo && u & 1 && (a = 1 - a),
          u !== Ir(e._tTime, o) &&
            ((n = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== n || Je || r || e._zTime === me || (!t && e._zTime))
      ) {
        if (!e._initted && cl(e, t, r, i, l)) return;
        for (
          h = e._zTime,
            e._zTime = t || (i ? me : 0),
            i || (i = t && !h),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            c = e._pt;
          c;

        )
          c.r(a, c.d), (c = c._next);
        t < 0 && wa(e, t, i, !0),
          e._onUpdate && !i && Nt(e, "onUpdate"),
          l && e._repeat && !i && e.parent && Nt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && Ri(e, 1),
            !i &&
              !Je &&
              (Nt(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Rf = function (e, t, i) {
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
    },
    Dr = function (e, t, i, r) {
      var n = e._repeat,
        a = Re(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = n ? (n < 0 ? 1e10 : Re(a * (n + 1) + e._rDelay * n)) : a),
        o > 0 && !r && cn(e, (e._tTime = e._tDur * o)),
        e.parent && ln(e),
        i || tr(e.parent, e),
        e
      );
    },
    ul = function (e) {
      return e instanceof gt ? tr(e) : Dr(e, e._dur);
    },
    $f = { _start: 0, endTime: cs, totalDuration: cs },
    Ut = function s(e, t, i) {
      var r = e.labels,
        n = e._recent || $f,
        a = e.duration() >= jt ? n.endTime(!1) : e._dur,
        o,
        l,
        c;
      return Xe(t) && (isNaN(t) || t in r)
        ? ((l = t.charAt(0)),
          (c = t.substr(-1) === "%"),
          (o = t.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (c ? (o < 0 ? n : i).totalDuration() / 100 : 1))
            : o < 0
            ? (t in r || (r[t] = a), r[t])
            : ((l = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
              c && i && (l = (l / 100) * (st(i) ? i[0] : i).totalDuration()),
              o > 1 ? s(e, t.substr(0, o - 1), i) + l : a + l))
        : t == null
        ? a
        : +t;
    },
    ds = function (e, t, i) {
      var r = xi(t[1]),
        n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[n],
        o,
        l;
      if ((r && (a.duration = t[1]), (a.parent = i), e)) {
        for (o = a, l = i; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = Et(l.vars.inherit) && l.parent);
        (a.immediateRender = Et(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[n - 1]);
      }
      return new $e(t[0], a, t[n + 1]);
    },
    $i = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    fs = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    nt = function (e, t) {
      return !Xe(e) || !(t = Mf.exec(e)) ? "" : t[1];
    },
    Nf = function (e, t, i) {
      return $i(i, function (r) {
        return fs(e, t, r);
      });
    },
    ba = [].slice,
    dl = function (e, t) {
      return (
        e &&
        ui(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && ui(e[0]))) &&
        !e.nodeType &&
        e !== di
      );
    },
    Ff = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var n;
          return (Xe(r) && !t) || dl(r, 1)
            ? (n = i).push.apply(n, Kt(r))
            : i.push(r);
        }) || i
      );
    },
    Kt = function (e, t, i) {
      return Se && !t && Se.selector
        ? Se.selector(e)
        : Xe(e) && !i && (ua || !Rr())
        ? ba.call((t || da).querySelectorAll(e), 0)
        : st(e)
        ? Ff(e, i)
        : dl(e)
        ? ba.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Sa = function (e) {
      return (
        (e = Kt(e)[0] || ls("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Kt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? ls("Invalid scope") || da.createElement("div")
              : e
          );
        }
      );
    },
    fl = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    pl = function (e) {
      if (Ae(e)) return e;
      var t = ui(e) ? e : { each: e },
        i = ir(t.ease),
        r = t.from || 0,
        n = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        c = t.axis,
        u = r,
        h = r;
      return (
        Xe(r)
          ? (u = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((u = r[0]), (h = r[1])),
        function (m, p, f) {
          var d = (f || t).length,
            g = a[d],
            w,
            y,
            v,
            _,
            b,
            S,
            T,
            M,
            x;
          if (!g) {
            if (((x = t.grid === "auto" ? 0 : (t.grid || [1, jt])[1]), !x)) {
              for (
                T = -jt;
                T < (T = f[x++].getBoundingClientRect().left) && x < d;

              );
              x < d && x--;
            }
            for (
              g = a[d] = [],
                w = l ? Math.min(x, d) * u - 0.5 : r % x,
                y = x === jt ? 0 : l ? (d * h) / x - 0.5 : (r / x) | 0,
                T = 0,
                M = jt,
                S = 0;
              S < d;
              S++
            )
              (v = (S % x) - w),
                (_ = y - ((S / x) | 0)),
                (g[S] = b =
                  c ? Math.abs(c === "y" ? _ : v) : Wo(v * v + _ * _)),
                b > T && (T = b),
                b < M && (M = b);
            r === "random" && fl(g),
              (g.max = T - M),
              (g.min = M),
              (g.v = d =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (x > d
                      ? d - 1
                      : c
                      ? c === "y"
                        ? d / x
                        : x
                      : Math.max(x, d / x)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = d < 0 ? n - d : n),
              (g.u = nt(t.amount || t.each) || 0),
              (i = i && d < 0 ? El(i) : i);
          }
          return (
            (d = (g[m] - g.min) / g.max || 0),
            Re(g.b + (i ? i(d) : d) * g.v) + g.u
          );
        }
      );
    },
    xa = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = Re(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (xi(i) ? 0 : nt(i));
      };
    },
    hl = function (e, t) {
      var i = st(e),
        r,
        n;
      return (
        !i &&
          ui(e) &&
          ((r = i = e.radius || jt),
          e.values
            ? ((e = Kt(e.values)), (n = !xi(e[0])) && (r *= r))
            : (e = xa(e.increment))),
        $i(
          t,
          i
            ? Ae(e)
              ? function (a) {
                  return (n = e(a)), Math.abs(n - a) <= r ? n : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(n ? a.x : a),
                      l = parseFloat(n ? a.y : 0),
                      c = jt,
                      u = 0,
                      h = e.length,
                      m,
                      p;
                    h--;

                  )
                    n
                      ? ((m = e[h].x - o),
                        (p = e[h].y - l),
                        (m = m * m + p * p))
                      : (m = Math.abs(e[h] - o)),
                      m < c && ((c = m), (u = h));
                  return (
                    (u = !r || c <= r ? e[u] : a),
                    n || u === a || xi(a) ? u : u + nt(a)
                  );
                }
            : xa(e)
        )
      );
    },
    ml = function (e, t, i, r) {
      return $i(st(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return st(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    Bf = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (n, a) {
          return a(n);
        }, r);
      };
    },
    qf = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || nt(i));
      };
    },
    Hf = function (e, t, i) {
      return vl(e, t, 0, 1, i);
    },
    gl = function (e, t, i) {
      return $i(i, function (r) {
        return e[~~t(r)];
      });
    },
    Vf = function s(e, t, i) {
      var r = t - e;
      return st(e)
        ? gl(e, s(0, e.length), t)
        : $i(i, function (n) {
            return ((r + ((n - e) % r)) % r) + e;
          });
    },
    Wf = function s(e, t, i) {
      var r = t - e,
        n = r * 2;
      return st(e)
        ? gl(e, s(0, e.length - 1), t)
        : $i(i, function (a) {
            return (a = (n + ((a - e) % n)) % n || 0), e + (a > r ? n - a : a);
          });
    },
    ps = function (e) {
      for (var t = 0, i = "", r, n, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (n = e.substr(r + 7, a - r - 7).match(o ? jo : la)),
          (i +=
            e.substr(t, r - t) +
            ml(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    vl = function (e, t, i, r, n) {
      var a = t - e,
        o = r - i;
      return $i(n, function (l) {
        return i + (((l - e) / a) * o || 0);
      });
    },
    Yf = function s(e, t, i, r) {
      var n = isNaN(e + t)
        ? 0
        : function (p) {
            return (1 - p) * e + p * t;
          };
      if (!n) {
        var a = Xe(e),
          o = {},
          l,
          c,
          u,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (st(e) && !st(t)) {
          for (u = [], h = e.length, m = h - 2, c = 1; c < h; c++)
            u.push(s(e[c - 1], e[c]));
          h--,
            (n = function (f) {
              f *= h;
              var d = Math.min(m, ~~f);
              return u[d](f - d);
            }),
            (i = t);
        } else r || (e = Lr(st(e) ? [] : {}, e));
        if (!u) {
          for (l in t) Ca.call(o, e, l, "get", t[l]);
          n = function (f) {
            return La(f, o) || (a ? e.p : e);
          };
        }
      }
      return $i(i, n);
    },
    yl = function (e, t, i) {
      var r = e.labels,
        n = jt,
        a,
        o,
        l;
      for (a in r)
        (o = r[a] - t),
          o < 0 == !!i && o && n > (o = Math.abs(o)) && ((l = a), (n = o));
      return l;
    },
    Nt = function (e, t, i) {
      var r = e.vars,
        n = r[t],
        a = Se,
        o = e._ctx,
        l,
        c,
        u;
      if (n)
        return (
          (l = r[t + "Params"]),
          (c = r.callbackScope || e),
          i && zi.length && sn(),
          o && (Se = o),
          (u = l ? n.apply(c, l) : n.call(c)),
          (Se = a),
          u
        );
    },
    hs = function (e) {
      return (
        Ri(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Je),
        e.progress() < 1 && Nt(e, "onInterrupt"),
        e
      );
    },
    zr,
    wl = [],
    _l = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), oa() || e.headless)) {
          var t = e.name,
            i = Ae(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            n = {
              init: cs,
              render: La,
              add: Ca,
              kill: op,
              modifier: ap,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: ka,
              aliases: {},
              register: 0,
            };
          if ((Rr(), e !== r)) {
            if (Rt[t]) return;
            $t(r, $t(nn(e, n), a)),
              Lr(r.prototype, Lr(n, nn(e, a))),
              (Rt[(r.prop = t)] = r),
              e.targetTest && (rn.push(r), (pa[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Zo(t, r), e.register && e.register(Pt, r, Ct);
        } else wl.push(e);
    },
    ge = 255,
    ms = {
      aqua: [0, ge, ge],
      lime: [0, ge, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ge],
      navy: [0, 0, 128],
      white: [ge, ge, ge],
      olive: [128, 128, 0],
      yellow: [ge, ge, 0],
      orange: [ge, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ge, 0, 0],
      pink: [ge, 192, 203],
      cyan: [0, ge, ge],
      transparent: [ge, ge, ge, 0],
    },
    Ta = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          ge +
          0.5) |
          0
      );
    },
    bl = function (e, t, i) {
      var r = e ? (xi(e) ? [e >> 16, (e >> 8) & ge, e & ge] : 0) : ms.black,
        n,
        a,
        o,
        l,
        c,
        u,
        h,
        m,
        p,
        f;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ms[e]))
          r = ms[e];
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
              [r >> 16, (r >> 8) & ge, r & ge, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & ge, e & ge]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = f = e.match(la)), !t))
            (l = (+r[0] % 360) / 360),
              (c = +r[1] / 100),
              (u = +r[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (n = u * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = Ta(l + 1 / 3, n, a)),
              (r[1] = Ta(l, n, a)),
              (r[2] = Ta(l - 1 / 3, n, a));
          else if (~e.indexOf("="))
            return (r = e.match(Xo)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(la) || ms.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !f &&
          ((n = r[0] / ge),
          (a = r[1] / ge),
          (o = r[2] / ge),
          (h = Math.max(n, a, o)),
          (m = Math.min(n, a, o)),
          (u = (h + m) / 2),
          h === m
            ? (l = c = 0)
            : ((p = h - m),
              (c = u > 0.5 ? p / (2 - h - m) : p / (h + m)),
              (l =
                h === n
                  ? (a - o) / p + (a < o ? 6 : 0)
                  : h === a
                  ? (o - n) / p + 2
                  : (n - a) / p + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(c * 100 + 0.5)),
          (r[2] = ~~(u * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Sl = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(Ni).forEach(function (n) {
          var a = n.match(Or) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    xl = function (e, t, i) {
      var r = "",
        n = (e + r).match(Ni),
        a = t ? "hsla(" : "rgba(",
        o = 0,
        l,
        c,
        u,
        h;
      if (!n) return e;
      if (
        ((n = n.map(function (m) {
          return (
            (m = bl(m, t, 1)) &&
            a +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((u = Sl(e)), (l = i.c), l.join(r) !== u.c.join(r)))
      )
        for (c = e.replace(Ni, "1").split(Or), h = c.length - 1; o < h; o++)
          r +=
            c[o] +
            (~l.indexOf(o)
              ? n.shift() || a + "0,0,0,0)"
              : (u.length ? u : n.length ? n : i).shift());
      if (!c)
        for (c = e.split(Ni), h = c.length - 1; o < h; o++) r += c[o] + n[o];
      return r + c[h];
    },
    Ni = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in ms) s += "|" + e + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    Xf = /hsl[a]?\(/,
    Tl = function (e) {
      var t = e.join(" "),
        i;
      if (((Ni.lastIndex = 0), Ni.test(t)))
        return (
          (i = Xf.test(t)),
          (e[1] = xl(e[1], i)),
          (e[0] = xl(e[0], i, Sl(e[1]))),
          !0
        );
    },
    gs,
    Ft = (function () {
      var s = Date.now,
        e = 500,
        t = 33,
        i = s(),
        r = i,
        n = 1e3 / 240,
        a = n,
        o = [],
        l,
        c,
        u,
        h,
        m,
        p,
        f = function d(g) {
          var w = s() - r,
            y = g === !0,
            v,
            _,
            b,
            S;
          if (
            ((w > e || w < 0) && (i += w - t),
            (r += w),
            (b = r - i),
            (v = b - a),
            (v > 0 || y) &&
              ((S = ++h.frame),
              (m = b - h.time * 1e3),
              (h.time = b = b / 1e3),
              (a += v + (v >= n ? 4 : n - v)),
              (_ = 1)),
            y || (l = c(d)),
            _)
          )
            for (p = 0; p < o.length; p++) o[p](b, m, S, g);
        };
      return (
        (h = {
          time: 0,
          frame: 0,
          tick: function () {
            f(!0);
          },
          deltaRatio: function (g) {
            return m / (1e3 / (g || 60));
          },
          wake: function () {
            Uo &&
              (!ua &&
                oa() &&
                ((di = ua = window),
                (da = di.document || {}),
                (zt.gsap = Pt),
                (di.gsapVersions || (di.gsapVersions = [])).push(Pt.version),
                Ko(en || di.GreenSockGlobals || (!di.gsap && di) || {}),
                wl.forEach(_l)),
              (u =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && h.sleep(),
              (c =
                u ||
                function (g) {
                  return setTimeout(g, (a - h.time * 1e3 + 1) | 0);
                }),
              (gs = 1),
              f(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (gs = 0), (c = cs);
          },
          lagSmoothing: function (g, w) {
            (e = g || 1 / 0), (t = Math.min(w || 33, e));
          },
          fps: function (g) {
            (n = 1e3 / (g || 240)), (a = h.time * 1e3 + n);
          },
          add: function (g, w, y) {
            var v = w
              ? function (_, b, S, T) {
                  g(_, b, S, T), h.remove(v);
                }
              : g;
            return h.remove(g), o[y ? "unshift" : "push"](v), Rr(), v;
          },
          remove: function (g, w) {
            ~(w = o.indexOf(g)) && o.splice(w, 1) && p >= w && p--;
          },
          _listeners: o,
        }),
        h
      );
    })(),
    Rr = function () {
      return !gs && Ft.wake();
    },
    oe = {},
    Gf = /^[\d.\-M][\d.\-,\s]/,
    jf = /["']/g,
    Uf = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          n = 1,
          a = i.length,
          o,
          l,
          c;
        n < a;
        n++
      )
        (l = i[n]),
          (o = n !== a - 1 ? l.lastIndexOf(",") : l.length),
          (c = l.substr(0, o)),
          (t[r] = isNaN(c) ? c.replace(jf, "").trim() : +c),
          (r = l.substr(o + 1).trim());
      return t;
    },
    Kf = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    Zf = function (e) {
      var t = (e + "").split("("),
        i = oe[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Uf(t[1])] : Kf(e).split(",").map(il)
          )
        : oe._CE && Gf.test(e)
        ? oe._CE("", e)
        : i;
    },
    El = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Ml = function s(e, t) {
      for (var i = e._first, r; i; )
        i instanceof gt
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
    },
    ir = function (e, t) {
      return (e && (Ae(e) ? e : oe[e] || Zf(e))) || t;
    },
    rr = function (e, t, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - t(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
          });
      var n = { easeIn: t, easeOut: i, easeInOut: r },
        a;
      return (
        Mt(e, function (o) {
          (oe[o] = zt[o] = n), (oe[(a = o.toLowerCase())] = i);
          for (var l in n)
            oe[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = oe[o + "." + l] = n[l];
        }),
        n
      );
    },
    Cl = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Ea = function s(e, t, i) {
      var r = t >= 1 ? t : 1,
        n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (n / na) * (Math.asin(1 / r) || 0),
        o = function (u) {
          return u === 1 ? 1 : r * Math.pow(2, -10 * u) * Ef((u - a) * n) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : Cl(o);
      return (
        (n = na / n),
        (l.config = function (c, u) {
          return s(e, c, u);
        }),
        l
      );
    },
    Ma = function s(e, t) {
      t === void 0 && (t = 1.70158);
      var i = function (a) {
          return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
        },
        r =
          e === "out"
            ? i
            : e === "in"
            ? function (n) {
                return 1 - i(1 - n);
              }
            : Cl(i);
      return (
        (r.config = function (n) {
          return s(e, n);
        }),
        r
      );
    };
  Mt("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
    var t = e < 5 ? e + 1 : e;
    rr(
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
  }),
    (oe.Linear.easeNone = oe.none = oe.Linear.easeIn),
    rr("Elastic", Ea("in"), Ea("out"), Ea()),
    (function (s, e) {
      var t = 1 / e,
        i = 2 * t,
        r = 2.5 * t,
        n = function (o) {
          return o < t
            ? s * o * o
            : o < i
            ? s * Math.pow(o - 1.5 / e, 2) + 0.75
            : o < r
            ? s * (o -= 2.25 / e) * o + 0.9375
            : s * Math.pow(o - 2.625 / e, 2) + 0.984375;
        };
      rr(
        "Bounce",
        function (a) {
          return 1 - n(1 - a);
        },
        n
      );
    })(7.5625, 2.75),
    rr("Expo", function (s) {
      return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
    }),
    rr("Circ", function (s) {
      return -(Wo(1 - s * s) - 1);
    }),
    rr("Sine", function (s) {
      return s === 1 ? 1 : -Tf(s * Sf) + 1;
    }),
    rr("Back", Ma("in"), Ma("out"), Ma()),
    (oe.SteppedEase =
      oe.steps =
      zt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              n = t ? 1 : 0,
              a = 1 - me;
            return function (o) {
              return (((r * fs(0, a, o)) | 0) + n) * i;
            };
          },
        }),
    (Ar.ease = oe["quad.out"]),
    Mt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (ga += s + "," + s + "Params,");
      }
    );
  var Pl = function (e, t) {
      (this.id = xf++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : el),
        (this.set = t ? t.getSetter : ka);
    },
    vs = (function () {
      function s(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Dr(this, +t.duration, 1, 1),
          (this.data = t.data),
          Se && ((this._ctx = Se), Se.data.push(this)),
          gs || Ft.wake();
      }
      var e = s.prototype;
      return (
        (e.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (e.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              Dr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((Rr(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              cn(this, i), !n._dp || n.parent || ol(n, this);
              n && n.parent;

            )
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
              (this._initted && Math.abs(this._zTime) === me) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), tl(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + al(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (e.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (e.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  al(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (i, r) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * n, r)
            : this._repeat
            ? Ir(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -me ? 0 : this._rts;
          if (this._rts === i) return this;
          var n =
            this.parent && this._ts ? on(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -me ? 0 : this._rts),
            this.totalTime(
              fs(-Math.abs(this._delay), this.totalDuration(), n),
              r !== !1
            ),
            ln(this),
            Lf(this)
          );
        }),
        (e.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Rr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== me &&
                        (this._tTime -= me)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && fi(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (Et(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? on(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = Pf);
          var r = Je;
          return (
            (Je = i),
            ya(this) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (Je = r),
            this
          );
        }),
        (e.globalTime = function (i) {
          for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
            (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : n;
        }),
        (e.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), ul(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), ul(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Ut(this, i), Et(r));
        }),
        (e.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, Et(r)),
            this._dur || (this._zTime = -me),
            this
          );
        }),
        (e.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -me : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -me), this;
        }),
        (e.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            n;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (n = i.rawTime(!0)) >= r &&
              n < this.endTime(!0) - me)
          );
        }),
        (e.eventCallback = function (i, r, n) {
          var a = this.vars;
          return arguments.length > 1
            ? (r
                ? ((a[i] = r),
                  n && (a[i + "Params"] = n),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete a[i],
              this)
            : a[i];
        }),
        (e.then = function (i) {
          var r = this;
          return new Promise(function (n) {
            var a = Ae(i) ? i : rl,
              o = function () {
                var c = r.then;
                (r.then = null),
                  Ae(a) && (a = a(r)) && (a.then || a === r) && (r.then = c),
                  n(a),
                  (r.then = c);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? o()
              : (r._prom = o);
          });
        }),
        (e.kill = function () {
          hs(this);
        }),
        s
      );
    })();
  $t(vs.prototype, {
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
    _zTime: -me,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var gt = (function (s) {
    Vo(e, s);
    function e(i, r) {
      var n;
      return (
        i === void 0 && (i = {}),
        (n = s.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = Et(i.sortChildren)),
        Me && fi(i.parent || Me, Si(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && ll(Si(n), i.scrollTrigger),
        n
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, n, a) {
        return ds(0, arguments, this), this;
      }),
      (t.from = function (r, n, a) {
        return ds(1, arguments, this), this;
      }),
      (t.fromTo = function (r, n, a, o) {
        return ds(2, arguments, this), this;
      }),
      (t.set = function (r, n, a) {
        return (
          (n.duration = 0),
          (n.parent = this),
          us(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new $e(r, n, Ut(this, a), 1),
          this
        );
      }),
      (t.call = function (r, n, a) {
        return fi(this, $e.delayedCall(0, r, n), a);
      }),
      (t.staggerTo = function (r, n, a, o, l, c, u) {
        return (
          (a.duration = n),
          (a.stagger = a.stagger || o),
          (a.onComplete = c),
          (a.onCompleteParams = u),
          (a.parent = this),
          new $e(r, a, Ut(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, n, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          (us(a).immediateRender = Et(a.immediateRender)),
          this.staggerTo(r, n, a, o, l, c, u)
        );
      }),
      (t.staggerFromTo = function (r, n, a, o, l, c, u, h) {
        return (
          (o.startAt = a),
          (us(o).immediateRender = Et(o.immediateRender)),
          this.staggerTo(r, n, o, l, c, u, h)
        );
      }),
      (t.render = function (r, n, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          c = this._dur,
          u = r <= 0 ? 0 : Re(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !c),
          m,
          p,
          f,
          d,
          g,
          w,
          y,
          v,
          _,
          b,
          S,
          T;
        if (
          (this !== Me && u > l && r >= 0 && (u = l),
          u !== this._tTime || a || h)
        ) {
          if (
            (o !== this._time &&
              c &&
              ((u += this._time - o), (r += this._time - o)),
            (m = u),
            (_ = this._start),
            (v = this._ts),
            (w = !v),
            h && (c || (o = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((S = this._yoyo),
              (g = c + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, n, a);
            if (
              ((m = Re(u % g)),
              u === l
                ? ((d = this._repeat), (m = c))
                : ((b = Re(u / g)),
                  (d = ~~b),
                  d && d === b && ((m = c), d--),
                  m > c && (m = c)),
              (b = Ir(this._tTime, g)),
              !o &&
                this._tTime &&
                b !== d &&
                this._tTime - b * g - this._dur <= 0 &&
                (b = d),
              S && d & 1 && ((m = c - m), (T = 1)),
              d !== b && !this._lock)
            ) {
              var M = S && b & 1,
                x = M === (S && d & 1);
              if (
                (d < b && (M = !M),
                (o = M ? 0 : u % c ? c : u),
                (this._lock = 1),
                (this.render(o || (T ? 0 : Re(d * g)), n, !c)._lock = 0),
                (this._tTime = u),
                !n && this.parent && Nt(this, "onRepeat"),
                this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  w !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((c = this._dur),
                (l = this._tDur),
                x &&
                  ((this._lock = 2),
                  (o = M ? c : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !T && this.invalidate()),
                (this._lock = 0),
                !this._ts && !w)
              )
                return this;
              Ml(this, T);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((y = Rf(this, Re(o), Re(m))), y && (u -= m - (m = y._start))),
            (this._tTime = u),
            (this._time = m),
            (this._act = !v),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && u && !n && !b && (Nt(this, "onStart"), this._tTime !== u))
          )
            return this;
          if (m >= o && r >= 0)
            for (p = this._first; p; ) {
              if (
                ((f = p._next), (p._act || m >= p._start) && p._ts && y !== p)
              ) {
                if (p.parent !== this) return this.render(r, n, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (m - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (m - p._start) * p._ts,
                    n,
                    a
                  ),
                  m !== this._time || (!this._ts && !w))
                ) {
                  (y = 0), f && (u += this._zTime = -me);
                  break;
                }
              }
              p = f;
            }
          else {
            p = this._last;
            for (var E = r < 0 ? r : m; p; ) {
              if (
                ((f = p._prev), (p._act || E <= p._end) && p._ts && y !== p)
              ) {
                if (p.parent !== this) return this.render(r, n, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (E - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (E - p._start) * p._ts,
                    n,
                    a || (Je && ya(p))
                  ),
                  m !== this._time || (!this._ts && !w))
                ) {
                  (y = 0), f && (u += this._zTime = E ? -me : me);
                  break;
                }
              }
              p = f;
            }
          }
          if (
            y &&
            !n &&
            (this.pause(),
            (y.render(m >= o ? 0 : -me)._zTime = m >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = _), ln(this), this.render(r, n, a);
          this._onUpdate && !n && Nt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (_ === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !c) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  Ri(this, 1),
                !n &&
                  !(r < 0 && !o) &&
                  (u || o || !l) &&
                  (Nt(
                    this,
                    u === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(u < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, n) {
        var a = this;
        if ((xi(n) || (n = Ut(this, n, r)), !(r instanceof vs))) {
          if (st(r))
            return (
              r.forEach(function (o) {
                return a.add(o, n);
              }),
              this
            );
          if (Xe(r)) return this.addLabel(r, n);
          if (Ae(r)) r = $e.delayedCall(0, r);
          else return this;
        }
        return this !== r ? fi(this, r, n) : this;
      }),
      (t.getChildren = function (r, n, a, o) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -jt);
        for (var l = [], c = this._first; c; )
          c._start >= o &&
            (c instanceof $e
              ? n && l.push(c)
              : (a && l.push(c),
                r && l.push.apply(l, c.getChildren(!0, n, a)))),
            (c = c._next);
        return l;
      }),
      (t.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
          if (n[a].vars.id === r) return n[a];
      }),
      (t.remove = function (r) {
        return Xe(r)
          ? this.removeLabel(r)
          : Ae(r)
          ? this.killTweensOf(r)
          : (r.parent === this && an(this, r),
            r === this._recent && (this._recent = this._last),
            tr(this));
      }),
      (t.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Re(
                Ft.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            s.prototype.totalTime.call(this, r, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (r, n) {
        return (this.labels[r] = Ut(this, n)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, n, a) {
        var o = $e.delayedCall(0, n || cs, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), fi(this, o, Ut(this, r))
        );
      }),
      (t.removePause = function (r) {
        var n = this._first;
        for (r = Ut(this, r); n; )
          n._start === r && n.data === "isPause" && Ri(n), (n = n._next);
      }),
      (t.killTweensOf = function (r, n, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          Fi !== o[l] && o[l].kill(r, n);
        return this;
      }),
      (t.getTweensOf = function (r, n) {
        for (var a = [], o = Kt(r), l = this._first, c = xi(n), u; l; )
          l instanceof $e
            ? Af(l._targets, o) &&
              (c
                ? (!Fi || (l._initted && l._ts)) &&
                  l.globalTime(0) <= n &&
                  l.globalTime(l.totalDuration()) > n
                : !n || l.isActive()) &&
              a.push(l)
            : (u = l.getTweensOf(o, n)).length && a.push.apply(a, u),
            (l = l._next);
        return a;
      }),
      (t.tweenTo = function (r, n) {
        n = n || {};
        var a = this,
          o = Ut(a, r),
          l = n,
          c = l.startAt,
          u = l.onStart,
          h = l.onStartParams,
          m = l.immediateRender,
          p,
          f = $e.to(
            a,
            $t(
              {
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration:
                  n.duration ||
                  Math.abs(
                    (o - (c && "time" in c ? c.time : a._time)) / a.timeScale()
                  ) ||
                  me,
                onStart: function () {
                  if ((a.pause(), !p)) {
                    var g =
                      n.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    f._dur !== g && Dr(f, g, 0, 1).render(f._time, !0, !0),
                      (p = 1);
                  }
                  u && u.apply(f, h || []);
                },
              },
              n
            )
          );
        return m ? f.render(0) : f;
      }),
      (t.tweenFromTo = function (r, n, a) {
        return this.tweenTo(n, $t({ startAt: { time: Ut(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), yl(this, Ut(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), yl(this, Ut(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + me);
      }),
      (t.shiftChildren = function (r, n, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, c; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (n) for (c in l) l[c] >= a && (l[c] += r);
        return tr(this);
      }),
      (t.invalidate = function (r) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
        return s.prototype.invalidate.call(this, r);
      }),
      (t.clear = function (r) {
        r === void 0 && (r = !0);
        for (var n = this._first, a; n; )
          (a = n._next), this.remove(n), (n = a);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          tr(this)
        );
      }),
      (t.totalDuration = function (r) {
        var n = 0,
          a = this,
          o = a._last,
          l = jt,
          c,
          u,
          h;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -r : r)
          );
        if (a._dirty) {
          for (h = a.parent; o; )
            (c = o._prev),
              o._dirty && o.totalDuration(),
              (u = o._start),
              u > l && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (fi(a, o, u - o._delay, 1)._lock = 0))
                : (l = u),
              u < 0 &&
                o._ts &&
                ((n -= u),
                ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                  ((a._start += u / a._ts), (a._time -= u), (a._tTime -= u)),
                a.shiftChildren(-u, !1, -1 / 0),
                (l = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = c);
          Dr(a, a === Me && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Me._ts && (tl(Me, on(r, Me)), (Qo = Ft.frame)), Ft.frame >= Jo)) {
          Jo += Dt.autoSleep || 120;
          var n = Me._first;
          if ((!n || !n._ts) && Dt.autoSleep && Ft._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || Ft.sleep();
          }
        }
      }),
      e
    );
  })(vs);
  $t(gt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Qf = function (e, t, i, r, n, a, o) {
      var l = new Ct(this._pt, e, t, 0, 1, Dl, null, n),
        c = 0,
        u = 0,
        h,
        m,
        p,
        f,
        d,
        g,
        w,
        y;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (w = ~r.indexOf("random(")) && (r = ps(r)),
          a && ((y = [i, r]), a(y, e, t), (i = y[0]), (r = y[1])),
          m = i.match(ca) || [];
        (h = ca.exec(r));

      )
        (f = h[0]),
          (d = r.substring(c, h.index)),
          p ? (p = (p + 1) % 5) : d.substr(-5) === "rgba(" && (p = 1),
          f !== m[u++] &&
            ((g = parseFloat(m[u - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: d || u === 1 ? d : ",",
              s: g,
              c: f.charAt(1) === "=" ? kr(g, f) - g : parseFloat(f) - g,
              m: p && p < 4 ? Math.round : 0,
            }),
            (c = ca.lastIndex));
      return (
        (l.c = c < r.length ? r.substring(c, r.length) : ""),
        (l.fp = o),
        (Go.test(r) || w) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Ca = function (e, t, i, r, n, a, o, l, c, u) {
      Ae(r) && (r = r(n || 0, e, a));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : Ae(h)
            ? c
              ? e[
                  t.indexOf("set") || !Ae(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](c)
              : e[t]()
            : h,
        p = Ae(h) ? (c ? rp : Ll) : Oa,
        f;
      if (
        (Xe(r) &&
          (~r.indexOf("random(") && (r = ps(r)),
          r.charAt(1) === "=" &&
            ((f = kr(m, r) + (nt(m) || 0)), (f || f === 0) && (r = f))),
        !u || m !== r || Pa)
      )
        return !isNaN(m * r) && r !== ""
          ? ((f = new Ct(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? np : Il,
              0,
              p
            )),
            c && (f.fp = c),
            o && f.modifier(o, this, e),
            (this._pt = f))
          : (!h && !(t in e) && fa(t, r),
            Qf.call(this, e, t, m, r, p, l || Dt.stringFilter, c));
    },
    Jf = function (e, t, i, r, n) {
      if (
        (Ae(e) && (e = ys(e, n, t, i, r)),
        !ui(e) || (e.style && e.nodeType) || st(e) || Yo(e))
      )
        return Xe(e) ? ys(e, n, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = ys(e[o], n, t, i, r);
      return a;
    },
    Al = function (e, t, i, r, n, a) {
      var o, l, c, u;
      if (
        Rt[e] &&
        (o = new Rt[e]()).init(
          n,
          o.rawVars ? t[e] : Jf(t[e], r, n, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = l = new Ct(i._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
        i !== zr)
      )
        for (c = i._ptLookup[i._targets.indexOf(n)], u = o._props.length; u--; )
          c[o._props[u]] = l;
      return o;
    },
    Fi,
    Pa,
    Aa = function s(e, t, i) {
      var r = e.vars,
        n = r.ease,
        a = r.startAt,
        o = r.immediateRender,
        l = r.lazy,
        c = r.onUpdate,
        u = r.runBackwards,
        h = r.yoyoEase,
        m = r.keyframes,
        p = r.autoRevert,
        f = e._dur,
        d = e._startAt,
        g = e._targets,
        w = e.parent,
        y = w && w.data === "nested" ? w.vars.targets : g,
        v = e._overwrite === "auto" && !sa,
        _ = e.timeline,
        b,
        S,
        T,
        M,
        x,
        E,
        I,
        P,
        k,
        O,
        D,
        z,
        A;
      if (
        (_ && (!m || !n) && (n = "none"),
        (e._ease = ir(n, Ar.ease)),
        (e._yEase = h ? El(ir(h === !0 ? n : h, Ar.ease)) : 0),
        h &&
          e._yoyo &&
          !e._repeat &&
          ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
        (e._from = !_ && !!r.runBackwards),
        !_ || (m && !r.stagger))
      ) {
        if (
          ((P = g[0] ? er(g[0]).harness : 0),
          (z = P && r[P.prop]),
          (b = nn(r, pa)),
          d &&
            (d._zTime < 0 && d.progress(1),
            t < 0 && u && o && !p
              ? d.render(-1, !0)
              : d.revert(u && f ? tn : Cf),
            (d._lazy = 0)),
          a)
        ) {
          if (
            (Ri(
              (e._startAt = $e.set(
                g,
                $t(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: w,
                    immediateRender: !0,
                    lazy: !d && Et(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      c &&
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
            t < 0 && (Je || (!o && !p)) && e._startAt.revert(tn),
            o && f && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (u && f && !d) {
          if (
            (t && (o = !1),
            (T = $t(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !d && Et(l),
                immediateRender: o,
                stagger: 0,
                parent: w,
              },
              b
            )),
            z && (T[P.prop] = z),
            Ri((e._startAt = $e.set(g, T))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Je ? e._startAt.revert(tn) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            s(e._startAt, me, me);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (f && Et(l)) || (l && !f), S = 0;
          S < g.length;
          S++
        ) {
          if (
            ((x = g[S]),
            (I = x._gsap || va(g)[S]._gsap),
            (e._ptLookup[S] = O = {}),
            ha[I.id] && zi.length && sn(),
            (D = y === g ? S : y.indexOf(x)),
            P &&
              (k = new P()).init(x, z || b, e, D, y) !== !1 &&
              ((e._pt = M =
                new Ct(e._pt, x, k.name, 0, 1, k.render, k, 0, k.priority)),
              k._props.forEach(function (L) {
                O[L] = M;
              }),
              k.priority && (E = 1)),
            !P || z)
          )
            for (T in b)
              Rt[T] && (k = Al(T, b, e, D, x, y))
                ? k.priority && (E = 1)
                : (O[T] = M =
                    Ca.call(e, x, T, "get", b[T], D, y, 0, r.stringFilter));
          e._op && e._op[S] && e.kill(x, e._op[S]),
            v &&
              e._pt &&
              ((Fi = e),
              Me.killTweensOf(x, O, e.globalTime(t)),
              (A = !e.parent),
              (Fi = 0)),
            e._pt && l && (ha[I.id] = 1);
        }
        E && zl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = c),
        (e._initted = (!e._op || e._pt) && !A),
        m && t <= 0 && _.render(jt, !0, !0);
    },
    ep = function (e, t, i, r, n, a, o, l) {
      var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        u,
        h,
        m,
        p;
      if (!c)
        for (
          c = e._ptCache[t] = [], m = e._ptLookup, p = e._targets.length;
          p--;

        ) {
          if (((u = m[p][t]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
          if (!u)
            return (
              (Pa = 1),
              (e.vars[t] = "+=0"),
              Aa(e, o),
              (Pa = 0),
              l ? ls(t + " not eligible for reset") : 1
            );
          c.push(u);
        }
      for (p = c.length; p--; )
        (h = c[p]),
          (u = h._pt || h),
          (u.s = (r || r === 0) && !n ? r : u.s + (r || 0) + a * u.c),
          (u.c = i - u.s),
          h.e && (h.e = Le(i) + nt(h.e)),
          h.b && (h.b = u.s + nt(h.b));
    },
    tp = function (e, t) {
      var i = e[0] ? er(e[0]).harness : 0,
        r = i && i.aliases,
        n,
        a,
        o,
        l;
      if (!r) return t;
      n = Lr({}, t);
      for (a in r)
        if (a in n)
          for (l = r[a].split(","), o = l.length; o--; ) n[l[o]] = n[a];
      return n;
    },
    ip = function (e, t, i, r) {
      var n = t.ease || r || "power1.inOut",
        a,
        o;
      if (st(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (l, c) {
            return o.push({ t: (c / (t.length - 1)) * 100, v: l, e: n });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: n });
    },
    ys = function (e, t, i, r, n) {
      return Ae(e)
        ? e.call(t, i, r, n)
        : Xe(e) && ~e.indexOf("random(")
        ? ps(e)
        : e;
    },
    Ol = ga + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    kl = {};
  Mt(Ol + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (kl[s] = 1);
  });
  var $e = (function (s) {
    Vo(e, s);
    function e(i, r, n, a) {
      var o;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (o = s.call(this, a ? r : us(r)) || this);
      var l = o.vars,
        c = l.duration,
        u = l.delay,
        h = l.immediateRender,
        m = l.stagger,
        p = l.overwrite,
        f = l.keyframes,
        d = l.defaults,
        g = l.scrollTrigger,
        w = l.yoyoEase,
        y = r.parent || Me,
        v = (st(i) || Yo(i) ? xi(i[0]) : "length" in r) ? [i] : Kt(i),
        _,
        b,
        S,
        T,
        M,
        x,
        E,
        I;
      if (
        ((o._targets = v.length
          ? va(v)
          : ls(
              "GSAP target " + i + " not found. https://gsap.com",
              !Dt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        f || m || Js(c) || Js(u))
      ) {
        if (
          ((r = o.vars),
          (_ = o.timeline =
            new gt({
              data: "nested",
              defaults: d || {},
              targets: y && y.data === "nested" ? y.vars.targets : v,
            })),
          _.kill(),
          (_.parent = _._dp = Si(o)),
          (_._start = 0),
          m || Js(c) || Js(u))
        ) {
          if (((T = v.length), (E = m && pl(m)), ui(m)))
            for (M in m) ~Ol.indexOf(M) && (I || (I = {}), (I[M] = m[M]));
          for (b = 0; b < T; b++)
            (S = nn(r, kl)),
              (S.stagger = 0),
              w && (S.yoyoEase = w),
              I && Lr(S, I),
              (x = v[b]),
              (S.duration = +ys(c, Si(o), b, x, v)),
              (S.delay = (+ys(u, Si(o), b, x, v) || 0) - o._delay),
              !m &&
                T === 1 &&
                S.delay &&
                ((o._delay = u = S.delay), (o._start += u), (S.delay = 0)),
              _.to(x, S, E ? E(b, x, v) : 0),
              (_._ease = oe.none);
          _.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (f) {
          us($t(_.vars.defaults, { ease: "none" })),
            (_._ease = ir(f.ease || r.ease || "none"));
          var P = 0,
            k,
            O,
            D;
          if (st(f))
            f.forEach(function (z) {
              return _.to(v, z, ">");
            }),
              _.duration();
          else {
            S = {};
            for (M in f)
              M === "ease" || M === "easeEach" || ip(M, f[M], S, f.easeEach);
            for (M in S)
              for (
                k = S[M].sort(function (z, A) {
                  return z.t - A.t;
                }),
                  P = 0,
                  b = 0;
                b < k.length;
                b++
              )
                (O = k[b]),
                  (D = {
                    ease: O.e,
                    duration: ((O.t - (b ? k[b - 1].t : 0)) / 100) * c,
                  }),
                  (D[M] = O.v),
                  _.to(v, D, P),
                  (P += D.duration);
            _.duration() < c && _.to({}, { duration: c - _.duration() });
          }
        }
        c || o.duration((c = _.duration()));
      } else o.timeline = 0;
      return (
        p === !0 && !sa && ((Fi = Si(o)), Me.killTweensOf(v), (Fi = 0)),
        fi(y, Si(o), n),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (h ||
          (!c &&
            !f &&
            o._start === Re(y._time) &&
            Et(h) &&
            If(Si(o)) &&
            y.data !== "nested")) &&
          ((o._tTime = -me), o.render(Math.max(0, -u) || 0)),
        g && ll(Si(o), g),
        o
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, n, a) {
        var o = this._time,
          l = this._tDur,
          c = this._dur,
          u = r < 0,
          h = r > l - me && !u ? l : r < me ? 0 : r,
          m,
          p,
          f,
          d,
          g,
          w,
          y,
          v,
          _;
        if (!c) zf(this, r, n, a);
        else if (
          h !== this._tTime ||
          !r ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u) ||
          this._lazy
        ) {
          if (((m = h), (v = this.timeline), this._repeat)) {
            if (((d = c + this._rDelay), this._repeat < -1 && u))
              return this.totalTime(d * 100 + r, n, a);
            if (
              ((m = Re(h % d)),
              h === l
                ? ((f = this._repeat), (m = c))
                : ((g = Re(h / d)),
                  (f = ~~g),
                  f && f === g ? ((m = c), f--) : m > c && (m = c)),
              (w = this._yoyo && f & 1),
              w && ((_ = this._yEase), (m = c - m)),
              (g = Ir(this._tTime, d)),
              m === o && !a && this._initted && f === g)
            )
              return (this._tTime = h), this;
            f !== g &&
              (v && this._yEase && Ml(v, w),
              this.vars.repeatRefresh &&
                !w &&
                !this._lock &&
                m !== d &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(Re(d * f), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (cl(this, u ? r : m, a, n, h)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && f !== g))
              return this;
            if (c !== this._dur) return this.render(r, n, a);
          }
          if (
            ((this._tTime = h),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = y = (_ || this._ease)(m / c)),
            this._from && (this.ratio = y = 1 - y),
            !o && h && !n && !g && (Nt(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(y, p.d), (p = p._next);
          (v && v.render(r < 0 ? r : v._dur * v._ease(m / this._dur), n, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (u && wa(this, r, n, a), Nt(this, "onUpdate")),
            this._repeat &&
              f !== g &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              Nt(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (u && !this._onUpdate && wa(this, r, !0, !0),
              (r || !c) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                Ri(this, 1),
              !n &&
                !(u && !o) &&
                (h || o || w) &&
                (Nt(this, h === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(h < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          s.prototype.invalidate.call(this, r)
        );
      }),
      (t.resetTo = function (r, n, a, o, l) {
        gs || Ft.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || Aa(this, c),
          (u = this._ease(c / this._dur)),
          ep(this, r, n, a, o, u, c, l)
            ? this.resetTo(r, n, a, o, 1)
            : (cn(this, 0),
              this.parent ||
                nl(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (r, n) {
        if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? hs(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Je),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, Fi && Fi.vars.overwrite !== !0)
              ._first || hs(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              Dr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? Kt(r) : o,
          c = this._ptLookup,
          u = this._pt,
          h,
          m,
          p,
          f,
          d,
          g,
          w;
        if ((!n || n === "all") && kf(o, l))
          return n === "all" && (this._pt = 0), hs(this);
        for (
          h = this._op = this._op || [],
            n !== "all" &&
              (Xe(n) &&
                ((d = {}),
                Mt(n, function (y) {
                  return (d[y] = 1);
                }),
                (n = d)),
              (n = tp(o, n))),
            w = o.length;
          w--;

        )
          if (~l.indexOf(o[w])) {
            (m = c[w]),
              n === "all"
                ? ((h[w] = n), (f = m), (p = {}))
                : ((p = h[w] = h[w] || {}), (f = n));
            for (d in f)
              (g = m && m[d]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(d) === !0) &&
                    an(this, g, "_pt"),
                  delete m[d]),
                p !== "all" && (p[d] = 1);
          }
        return this._initted && !this._pt && u && hs(this), this;
      }),
      (e.to = function (r, n) {
        return new e(r, n, arguments[2]);
      }),
      (e.from = function (r, n) {
        return ds(1, arguments);
      }),
      (e.delayedCall = function (r, n, a, o) {
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
      }),
      (e.fromTo = function (r, n, a) {
        return ds(2, arguments);
      }),
      (e.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
      }),
      (e.killTweensOf = function (r, n, a) {
        return Me.killTweensOf(r, n, a);
      }),
      e
    );
  })(vs);
  $t($e.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Mt("staggerTo,staggerFrom,staggerFromTo", function (s) {
      $e[s] = function () {
        var e = new gt(),
          t = ba.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
      };
    });
  var Oa = function (e, t, i) {
      return (e[t] = i);
    },
    Ll = function (e, t, i) {
      return e[t](i);
    },
    rp = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    sp = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    ka = function (e, t) {
      return Ae(e[t]) ? Ll : aa(e[t]) && e.setAttribute ? sp : Oa;
    },
    Il = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    np = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Dl = function (e, t) {
      var i = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (e === 1 && t.e) r = t.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * e)
              : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += t.c;
      }
      t.set(t.t, t.p, r, t);
    },
    La = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    ap = function (e, t, i, r) {
      for (var n = this._pt, a; n; )
        (a = n._next), n.p === r && n.modifier(e, t, i), (n = a);
    },
    op = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? an(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    lp = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    zl = function (e) {
      for (var t = e._pt, i, r, n, a; t; ) {
        for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (n = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = n;
    },
    Ct = (function () {
      function s(t, i, r, n, a, o, l, c, u) {
        (this.t = i),
          (this.s = n),
          (this.c = a),
          (this.p = r),
          (this.r = o || Il),
          (this.d = l || this),
          (this.set = c || Oa),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = s.prototype;
      return (
        (e.modifier = function (i, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = lp),
            (this.m = i),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  Mt(
    ga +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (pa[s] = 1);
    }
  ),
    (zt.TweenMax = zt.TweenLite = $e),
    (zt.TimelineLite = zt.TimelineMax = gt),
    (Me = new gt({
      sortChildren: !1,
      defaults: Ar,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Dt.stringFilter = Tl);
  var sr = [],
    un = {},
    cp = [],
    Rl = 0,
    up = 0,
    Ia = function (e) {
      return (un[e] || cp).map(function (t) {
        return t();
      });
    },
    Da = function () {
      var e = Date.now(),
        t = [];
      e - Rl > 2 &&
        (Ia("matchMediaInit"),
        sr.forEach(function (i) {
          var r = i.queries,
            n = i.conditions,
            a,
            o,
            l,
            c;
          for (o in r)
            (a = di.matchMedia(r[o]).matches),
              a && (l = 1),
              a !== n[o] && ((n[o] = a), (c = 1));
          c && (i.revert(), l && t.push(i));
        }),
        Ia("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (Rl = e),
        Ia("matchMedia"));
    },
    $l = (function () {
      function s(t, i) {
        (this.selector = i && Sa(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = up++),
          t && this.add(t);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          Ae(i) && ((n = r), (r = i), (i = Ae));
          var a = this,
            o = function () {
              var c = Se,
                u = a.selector,
                h;
              return (
                c && c !== a && c.data.push(a),
                n && (a.selector = Sa(n)),
                (Se = a),
                (h = r.apply(a, arguments)),
                Ae(h) && a._r.push(h),
                (Se = c),
                (a.selector = u),
                (a.isReverted = !1),
                h
              );
            };
          return (
            (a.last = o),
            i === Ae
              ? o(a, function (l) {
                  return a.add(null, l);
                })
              : i
              ? (a[i] = o)
              : o
          );
        }),
        (e.ignore = function (i) {
          var r = Se;
          (Se = null), i(this), (Se = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof s
                ? i.push.apply(i, r.getTweens())
                : r instanceof $e &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (i, r) {
          var n = this;
          if (
            (i
              ? (function () {
                  for (var o = n.getTweens(), l = n.data.length, c; l--; )
                    (c = n.data[l]),
                      c.data === "isFlip" &&
                        (c.revert(),
                        c.getChildren(!0, !0, !1).forEach(function (u) {
                          return o.splice(o.indexOf(u), 1);
                        }));
                  for (
                    o
                      .map(function (u) {
                        return {
                          g:
                            u._dur ||
                            u._delay ||
                            (u._sat && !u._sat.vars.immediateRender)
                              ? u.globalTime(0)
                              : -1 / 0,
                          t: u,
                        };
                      })
                      .sort(function (u, h) {
                        return h.g - u.g || -1 / 0;
                      })
                      .forEach(function (u) {
                        return u.t.revert(i);
                      }),
                      l = n.data.length;
                    l--;

                  )
                    (c = n.data[l]),
                      c instanceof gt
                        ? c.data !== "nested" &&
                          (c.scrollTrigger && c.scrollTrigger.revert(),
                          c.kill())
                        : !(c instanceof $e) && c.revert && c.revert(i);
                  n._r.forEach(function (u) {
                    return u(i, n);
                  }),
                    (n.isReverted = !0);
                })()
              : this.data.forEach(function (o) {
                  return o.kill && o.kill();
                }),
            this.clear(),
            r)
          )
            for (var a = sr.length; a--; )
              sr[a].id === this.id && sr.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        s
      );
    })(),
    dp = (function () {
      function s(t) {
        (this.contexts = []), (this.scope = t), Se && Se.data.push(this);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          ui(i) || (i = { matches: i });
          var a = new $l(0, n || this.scope),
            o = (a.conditions = {}),
            l,
            c,
            u;
          Se && !a.selector && (a.selector = Se.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = i);
          for (c in i)
            c === "all"
              ? (u = 1)
              : ((l = di.matchMedia(i[c])),
                l &&
                  (sr.indexOf(a) < 0 && sr.push(a),
                  (o[c] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(Da)
                    : l.addEventListener("change", Da)));
          return (
            u &&
              r(a, function (h) {
                return a.add(null, h);
              }),
            this
          );
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        (e.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        s
      );
    })(),
    dn = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return _l(r);
        });
      },
      timeline: function (e) {
        return new gt(e);
      },
      getTweensOf: function (e, t) {
        return Me.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Xe(e) && (e = Kt(e)[0]);
        var n = er(e || {}).get,
          a = i ? rl : il;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a(((Rt[t] && Rt[t].get) || n)(e, t, i, r))
              : function (o, l, c) {
                  return a(((Rt[o] && Rt[o].get) || n)(e, o, l, c));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Kt(e)), e.length > 1)) {
          var r = e.map(function (u) {
              return Pt.quickSetter(u, t, i);
            }),
            n = r.length;
          return function (u) {
            for (var h = n; h--; ) r[h](u);
          };
        }
        e = e[0] || {};
        var a = Rt[t],
          o = er(e),
          l = (o.harness && (o.harness.aliases || {})[t]) || t,
          c = a
            ? function (u) {
                var h = new a();
                (zr._pt = 0),
                  h.init(e, i ? u + i : u, zr, 0, [e]),
                  h.render(1, h),
                  zr._pt && La(1, zr);
              }
            : o.set(e, l);
        return a
          ? c
          : function (u) {
              return c(e, l, i ? u + i : u, o, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          n = Pt.to(
            e,
            $t(
              ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          a = function (l, c, u) {
            return n.resetTo(t, l, c, u);
          };
        return (a.tween = n), a;
      },
      isTweening: function (e) {
        return Me.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = ir(e.ease, Ar.ease)), sl(Ar, e || {});
      },
      config: function (e) {
        return sl(Dt, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          n = e.defaults,
          a = e.extendTimeline;
        (r || "").split(",").forEach(function (o) {
          return (
            o &&
            !Rt[o] &&
            !zt[o] &&
            ls(t + " effect requires " + o + " plugin.")
          );
        }),
          (ma[t] = function (o, l, c) {
            return i(Kt(o), $t(l || {}, n), c);
          }),
          a &&
            (gt.prototype[t] = function (o, l, c) {
              return this.add(ma[t](o, ui(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (e, t) {
        oe[e] = ir(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? ir(e, t) : oe;
      },
      getById: function (e) {
        return Me.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new gt(e),
          r,
          n;
        for (
          i.smoothChildTiming = Et(e.smoothChildTiming),
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
                r instanceof $e &&
                r.vars.onComplete === r._targets[0]
              )) &&
              fi(i, r, r._start - r._delay),
            (r = n);
        return fi(Me, i, 0), i;
      },
      context: function (e, t) {
        return e ? new $l(e, t) : Se;
      },
      matchMedia: function (e) {
        return new dp(e);
      },
      matchMediaRefresh: function () {
        return (
          sr.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || Da()
        );
      },
      addEventListener: function (e, t) {
        var i = un[e] || (un[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = un[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: Vf,
        wrapYoyo: Wf,
        distribute: pl,
        random: ml,
        snap: hl,
        normalize: Hf,
        getUnit: nt,
        clamp: Nf,
        splitColor: bl,
        toArray: Kt,
        selector: Sa,
        mapRange: vl,
        pipe: Bf,
        unitize: qf,
        interpolate: Yf,
        shuffle: fl,
      },
      install: Ko,
      effects: ma,
      ticker: Ft,
      updateRoot: gt.updateRoot,
      plugins: Rt,
      globalTimeline: Me,
      core: {
        PropTween: Ct,
        globals: Zo,
        Tween: $e,
        Timeline: gt,
        Animation: vs,
        getCache: er,
        _removeLinkedListItem: an,
        reverting: function () {
          return Je;
        },
        context: function (e) {
          return e && Se && (Se.data.push(e), (e._ctx = Se)), Se;
        },
        suppressOverwrites: function (e) {
          return (sa = e);
        },
      },
    };
  Mt("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (dn[s] = $e[s]);
  }),
    Ft.add(gt.updateRoot),
    (zr = dn.to({}, { duration: 0 }));
  var fp = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    pp = function (e, t) {
      var i = e._targets,
        r,
        n,
        a;
      for (r in t)
        for (n = i.length; n--; )
          (a = e._ptLookup[n][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = fp(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[n], r));
    },
    za = function (e, t) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (r, n, a) {
          a._onInit = function (o) {
            var l, c;
            if (
              (Xe(n) &&
                ((l = {}),
                Mt(n, function (u) {
                  return (l[u] = 1);
                }),
                (n = l)),
              t)
            ) {
              l = {};
              for (c in n) l[c] = t(n[c]);
              n = l;
            }
            pp(o, n);
          };
        },
      };
    },
    Pt =
      dn.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, r, n) {
            var a, o, l;
            this.tween = i;
            for (a in t)
              (l = e.getAttribute(a) || ""),
                (o = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  t[a],
                  r,
                  n,
                  0,
                  0,
                  a
                )),
                (o.op = a),
                (o.b = l),
                this._props.push(a);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              Je ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        za("roundProps", xa),
        za("modifiers"),
        za("snap", hl)
      ) || dn;
  ($e.version = gt.version = Pt.version = "3.13.0"),
    (Uo = 1),
    oa() && Rr(),
    oe.Power0,
    oe.Power1,
    oe.Power2,
    oe.Power3,
    oe.Power4,
    oe.Linear,
    oe.Quad,
    oe.Cubic,
    oe.Quart,
    oe.Quint,
    oe.Strong,
    oe.Elastic,
    oe.Back,
    oe.SteppedEase,
    oe.Bounce,
    oe.Sine,
    oe.Expo,
    oe.Circ;
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Nl,
    Bi,
    $r,
    Ra,
    nr,
    Fl,
    $a,
    hp = function () {
      return typeof window != "undefined";
    },
    Ti = {},
    ar = 180 / Math.PI,
    Nr = Math.PI / 180,
    Fr = Math.atan2,
    Bl = 1e8,
    Na = /([A-Z])/g,
    mp = /(left|right|width|margin|padding|x)/i,
    gp = /[\s,\(]\S/,
    pi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Fa = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    vp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    yp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    wp = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    ql = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Hl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    _p = function (e, t, i) {
      return (e.style[t] = i);
    },
    bp = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    Sp = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    xp = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    Tp = function (e, t, i, r, n) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(n, a);
    },
    Ep = function (e, t, i, r, n) {
      var a = e._gsap;
      (a[t] = i), a.renderTransform(n, a);
    },
    Ce = "transform",
    At = Ce + "Origin",
    Mp = function s(e, t) {
      var i = this,
        r = this.target,
        n = r.style,
        a = r._gsap;
      if (e in Ti && n) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = pi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = Ei(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : Ei(r, e)),
            e === At && (this.tfm.zOrigin = a.zOrigin);
        else
          return pi.transform.split(",").forEach(function (o) {
            return s.call(i, o, t);
          });
        if (this.props.indexOf(Ce) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(At, t, "")),
          (e = Ce);
      }
      (n || t) && this.props.push(e, t, n[e]);
    },
    Vl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Cp = function () {
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
                : e[n].replace(Na, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (n = $a()),
          (!n || !n.isStart) &&
            !i[Ce] &&
            (Vl(i),
            r.zOrigin &&
              i[At] &&
              ((i[At] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    Wl = function (e, t) {
      var i = { target: e, props: [], revert: Cp, save: Mp };
      return (
        e._gsap || Pt.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    Yl,
    Ba = function (e, t) {
      var i = Bi.createElementNS
        ? Bi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Bi.createElement(e);
      return i && i.style ? i : Bi.createElement(e);
    },
    Zt = function s(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(Na, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && s(e, Br(t) || t, 1)) ||
        ""
      );
    },
    Xl = "O,Moz,ms,Ms,Webkit".split(","),
    Br = function (e, t, i) {
      var r = t || nr,
        n = r.style,
        a = 5;
      if (e in n && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(Xl[a] + e in n);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Xl[a] : "") + e;
    },
    qa = function () {
      hp() &&
        window.document &&
        ((Nl = window),
        (Bi = Nl.document),
        ($r = Bi.documentElement),
        (nr = Ba("div") || { style: {} }),
        Ba("div"),
        (Ce = Br(Ce)),
        (At = Ce + "Origin"),
        (nr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Yl = !!Br("perspective")),
        ($a = Pt.core.reverting),
        (Ra = 1));
    },
    Gl = function (e) {
      var t = e.ownerSVGElement,
        i = Ba(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        n;
      (r.style.display = "block"), i.appendChild(r), $r.appendChild(i);
      try {
        n = r.getBBox();
      } catch (a) {}
      return i.removeChild(r), $r.removeChild(i), n;
    },
    jl = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    Ul = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch (r) {
        (t = Gl(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = Gl(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +jl(e, ["x", "cx", "x1"]) || 0,
              y: +jl(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    Kl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ul(e));
    },
    or = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in Ti && t !== At && (t = Ce),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(Na, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    qi = function (e, t, i, r, n, a) {
      var o = new Ct(e._pt, t, i, 0, 1, a ? Hl : ql);
      return (e._pt = o), (o.b = r), (o.e = n), e._props.push(i), o;
    },
    Zl = { deg: 1, rad: 1, turn: 1 },
    Pp = { grid: 1, flex: 1 },
    Hi = function s(e, t, i, r) {
      var n = parseFloat(i) || 0,
        a = (i + "").trim().substr((n + "").length) || "px",
        o = nr.style,
        l = mp.test(t),
        c = e.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        f,
        d,
        g,
        w;
      if (r === a || !n || Zl[r] || Zl[a]) return n;
      if (
        (a !== "px" && !m && (n = s(e, t, i, "px")),
        (w = e.getCTM && Kl(e)),
        (p || a === "%") && (Ti[t] || ~t.indexOf("adius")))
      )
        return (
          (f = w ? e.getBBox()[l ? "width" : "height"] : e[u]),
          Le(p ? (n / f) * h : (n / 100) * f)
        );
      if (
        ((o[l ? "width" : "height"] = h + (m ? a : r)),
        (d =
          (r !== "rem" && ~t.indexOf("adius")) ||
          (r === "em" && e.appendChild && !c)
            ? e
            : e.parentNode),
        w && (d = (e.ownerSVGElement || {}).parentNode),
        (!d || d === Bi || !d.appendChild) && (d = Bi.body),
        (g = d._gsap),
        g && p && g.width && l && g.time === Ft.time && !g.uncache)
      )
        return Le((n / g.width) * h);
      if (p && (t === "height" || t === "width")) {
        var y = e.style[t];
        (e.style[t] = h + r), (f = e[u]), y ? (e.style[t] = y) : or(e, t);
      } else
        (p || a === "%") &&
          !Pp[Zt(d, "display")] &&
          (o.position = Zt(e, "position")),
          d === e && (o.position = "static"),
          d.appendChild(nr),
          (f = nr[u]),
          d.removeChild(nr),
          (o.position = "absolute");
      return (
        l && p && ((g = er(d)), (g.time = Ft.time), (g.width = d[u])),
        Le(m ? (f * n) / h : f && n ? (h / f) * n : 0)
      );
    },
    Ei = function (e, t, i, r) {
      var n;
      return (
        Ra || qa(),
        t in pi &&
          t !== "transform" &&
          ((t = pi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Ti[t] && t !== "transform"
          ? ((n = _s(e, r)),
            (n =
              t !== "transformOrigin"
                ? n[t]
                : n.svg
                ? n.origin
                : pn(Zt(e, At)) + " " + n.zOrigin + "px"))
          : ((n = e.style[t]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (fn[t] && fn[t](e, t, i)) ||
                Zt(e, t) ||
                el(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? Hi(e, t, n, i) + i : n
      );
    },
    Ap = function (e, t, i, r) {
      if (!i || i === "none") {
        var n = Br(t, e, 1),
          a = n && Zt(e, n, 1);
        a && a !== i
          ? ((t = n), (i = a))
          : t === "borderColor" && (i = Zt(e, "borderTopColor"));
      }
      var o = new Ct(this._pt, e.style, t, 0, 1, Dl),
        l = 0,
        c = 0,
        u,
        h,
        m,
        p,
        f,
        d,
        g,
        w,
        y,
        v,
        _,
        b;
      if (
        ((o.b = i),
        (o.e = r),
        (i += ""),
        (r += ""),
        r.substring(0, 6) === "var(--" &&
          (r = Zt(e, r.substring(4, r.indexOf(")")))),
        r === "auto" &&
          ((d = e.style[t]),
          (e.style[t] = r),
          (r = Zt(e, t) || r),
          d ? (e.style[t] = d) : or(e, t)),
        (u = [i, r]),
        Tl(u),
        (i = u[0]),
        (r = u[1]),
        (m = i.match(Or) || []),
        (b = r.match(Or) || []),
        b.length)
      ) {
        for (; (h = Or.exec(r)); )
          (g = h[0]),
            (y = r.substring(l, h.index)),
            f
              ? (f = (f + 1) % 5)
              : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") &&
                (f = 1),
            g !== (d = m[c++] || "") &&
              ((p = parseFloat(d) || 0),
              (_ = d.substr((p + "").length)),
              g.charAt(1) === "=" && (g = kr(p, g) + _),
              (w = parseFloat(g)),
              (v = g.substr((w + "").length)),
              (l = Or.lastIndex - v.length),
              v ||
                ((v = v || Dt.units[t] || _),
                l === r.length && ((r += v), (o.e += v))),
              _ !== v && (p = Hi(e, t, d, v) || 0),
              (o._pt = {
                _next: o._pt,
                p: y || c === 1 ? y : ",",
                s: p,
                c: w - p,
                m: (f && f < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = t === "display" && r === "none" ? Hl : ql;
      return Go.test(r) && (o.e = 0), (this._pt = o), o;
    },
    Ql = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Op = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = Ql[i] || i),
        (t[1] = Ql[r] || r),
        t.join(" ")
      );
    },
    kp = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          n = t.u,
          a = i._gsap,
          o,
          l,
          c;
        if (n === "all" || n === !0) (r.cssText = ""), (l = 1);
        else
          for (n = n.split(","), c = n.length; --c > -1; )
            (o = n[c]),
              Ti[o] && ((l = 1), (o = o === "transformOrigin" ? At : Ce)),
              or(i, o);
        l &&
          (or(i, Ce),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            _s(i, 1),
            (a.uncache = 1),
            Vl(r)));
      }
    },
    fn = {
      clearProps: function (e, t, i, r, n) {
        if (n.data !== "isFromStart") {
          var a = (e._pt = new Ct(e._pt, t, i, 0, 0, kp));
          return (a.u = r), (a.pr = -10), (a.tween = n), e._props.push(i), 1;
        }
      },
    },
    ws = [1, 0, 0, 1, 0, 0],
    Jl = {},
    ec = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    tc = function (e) {
      var t = Zt(e, Ce);
      return ec(t) ? ws : t.substr(7).match(Xo).map(Le);
    },
    Ha = function (e, t) {
      var i = e._gsap || er(e),
        r = e.style,
        n = tc(e),
        a,
        o,
        l,
        c;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? ws : n)
        : (n === ws &&
            !e.offsetParent &&
            e !== $r &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((c = 1), (o = e.nextElementSibling), $r.appendChild(e)),
            (n = tc(e)),
            l ? (r.display = l) : or(e, "display"),
            c &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : $r.removeChild(e))),
          t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Va = function (e, t, i, r, n, a) {
      var o = e._gsap,
        l = n || Ha(e, !0),
        c = o.xOrigin || 0,
        u = o.yOrigin || 0,
        h = o.xOffset || 0,
        m = o.yOffset || 0,
        p = l[0],
        f = l[1],
        d = l[2],
        g = l[3],
        w = l[4],
        y = l[5],
        v = t.split(" "),
        _ = parseFloat(v[0]) || 0,
        b = parseFloat(v[1]) || 0,
        S,
        T,
        M,
        x;
      i
        ? l !== ws &&
          (T = p * g - f * d) &&
          ((M = _ * (g / T) + b * (-d / T) + (d * y - g * w) / T),
          (x = _ * (-f / T) + b * (p / T) - (p * y - f * w) / T),
          (_ = M),
          (b = x))
        : ((S = Ul(e)),
          (_ = S.x + (~v[0].indexOf("%") ? (_ / 100) * S.width : _)),
          (b =
            S.y + (~(v[1] || v[0]).indexOf("%") ? (b / 100) * S.height : b))),
        r || (r !== !1 && o.smooth)
          ? ((w = _ - c),
            (y = b - u),
            (o.xOffset = h + (w * p + y * d) - w),
            (o.yOffset = m + (w * f + y * g) - y))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = _),
        (o.yOrigin = b),
        (o.smooth = !!r),
        (o.origin = t),
        (o.originIsAbsolute = !!i),
        (e.style[At] = "0px 0px"),
        a &&
          (qi(a, o, "xOrigin", c, _),
          qi(a, o, "yOrigin", u, b),
          qi(a, o, "xOffset", h, o.xOffset),
          qi(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", _ + " " + b);
    },
    _s = function (e, t) {
      var i = e._gsap || new Pl(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        n = i.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        c = Zt(e, At) || "0",
        u,
        h,
        m,
        p,
        f,
        d,
        g,
        w,
        y,
        v,
        _,
        b,
        S,
        T,
        M,
        x,
        E,
        I,
        P,
        k,
        O,
        D,
        z,
        A,
        L,
        $,
        C,
        W,
        K,
        pe,
        ue,
        F;
      return (
        (u = h = m = d = g = w = y = v = _ = 0),
        (p = f = 1),
        (i.svg = !!(e.getCTM && Kl(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[Ce] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[Ce] !== "none" ? l[Ce] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (T = Ha(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((L = e.getBBox()),
              (c = i.xOrigin - L.x + "px " + (i.yOrigin - L.y) + "px"),
              (A = ""))
            : (A = !t && e.getAttribute("data-svg-origin")),
          Va(e, A || c, !!A || i.originIsAbsolute, i.smooth !== !1, T)),
        (b = i.xOrigin || 0),
        (S = i.yOrigin || 0),
        T !== ws &&
          ((I = T[0]),
          (P = T[1]),
          (k = T[2]),
          (O = T[3]),
          (u = D = T[4]),
          (h = z = T[5]),
          T.length === 6
            ? ((p = Math.sqrt(I * I + P * P)),
              (f = Math.sqrt(O * O + k * k)),
              (d = I || P ? Fr(P, I) * ar : 0),
              (y = k || O ? Fr(k, O) * ar + d : 0),
              y && (f *= Math.abs(Math.cos(y * Nr))),
              i.svg && ((u -= b - (b * I + S * k)), (h -= S - (b * P + S * O))))
            : ((F = T[6]),
              (pe = T[7]),
              (C = T[8]),
              (W = T[9]),
              (K = T[10]),
              (ue = T[11]),
              (u = T[12]),
              (h = T[13]),
              (m = T[14]),
              (M = Fr(F, K)),
              (g = M * ar),
              M &&
                ((x = Math.cos(-M)),
                (E = Math.sin(-M)),
                (A = D * x + C * E),
                (L = z * x + W * E),
                ($ = F * x + K * E),
                (C = D * -E + C * x),
                (W = z * -E + W * x),
                (K = F * -E + K * x),
                (ue = pe * -E + ue * x),
                (D = A),
                (z = L),
                (F = $)),
              (M = Fr(-k, K)),
              (w = M * ar),
              M &&
                ((x = Math.cos(-M)),
                (E = Math.sin(-M)),
                (A = I * x - C * E),
                (L = P * x - W * E),
                ($ = k * x - K * E),
                (ue = O * E + ue * x),
                (I = A),
                (P = L),
                (k = $)),
              (M = Fr(P, I)),
              (d = M * ar),
              M &&
                ((x = Math.cos(M)),
                (E = Math.sin(M)),
                (A = I * x + P * E),
                (L = D * x + z * E),
                (P = P * x - I * E),
                (z = z * x - D * E),
                (I = A),
                (D = L)),
              g &&
                Math.abs(g) + Math.abs(d) > 359.9 &&
                ((g = d = 0), (w = 180 - w)),
              (p = Le(Math.sqrt(I * I + P * P + k * k))),
              (f = Le(Math.sqrt(z * z + F * F))),
              (M = Fr(D, z)),
              (y = Math.abs(M) > 2e-4 ? M * ar : 0),
              (_ = ue ? 1 / (ue < 0 ? -ue : ue) : 0)),
          i.svg &&
            ((A = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !ec(Zt(e, Ce))),
            A && e.setAttribute("transform", A))),
        Math.abs(y) > 90 &&
          Math.abs(y) < 270 &&
          (n
            ? ((p *= -1),
              (y += d <= 0 ? 180 : -180),
              (d += d <= 0 ? 180 : -180))
            : ((f *= -1), (y += y <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          u -
          ((i.xPercent =
            u &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
            ? (e.offsetWidth * i.xPercent) / 100
            : 0) +
          a),
        (i.y =
          h -
          ((i.yPercent =
            h &&
            ((!t && i.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
            ? (e.offsetHeight * i.yPercent) / 100
            : 0) +
          a),
        (i.z = m + a),
        (i.scaleX = Le(p)),
        (i.scaleY = Le(f)),
        (i.rotation = Le(d) + o),
        (i.rotationX = Le(g) + o),
        (i.rotationY = Le(w) + o),
        (i.skewX = y + o),
        (i.skewY = v + o),
        (i.transformPerspective = _ + a),
        (i.zOrigin = parseFloat(c.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[At] = pn(c)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Dt.force3D),
        (i.renderTransform = i.svg ? Ip : Yl ? ic : Lp),
        (i.uncache = 0),
        i
      );
    },
    pn = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Wa = function (e, t, i) {
      var r = nt(t);
      return Le(parseFloat(t) + parseFloat(Hi(e, "x", i + "px", r))) + r;
    },
    Lp = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        ic(e, t);
    },
    lr = "0deg",
    bs = "0px",
    cr = ") ",
    ic = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.z,
        c = i.rotation,
        u = i.rotationY,
        h = i.rotationX,
        m = i.skewX,
        p = i.skewY,
        f = i.scaleX,
        d = i.scaleY,
        g = i.transformPerspective,
        w = i.force3D,
        y = i.target,
        v = i.zOrigin,
        _ = "",
        b = (w === "auto" && e && e !== 1) || w === !0;
      if (v && (h !== lr || u !== lr)) {
        var S = parseFloat(u) * Nr,
          T = Math.sin(S),
          M = Math.cos(S),
          x;
        (S = parseFloat(h) * Nr),
          (x = Math.cos(S)),
          (a = Wa(y, a, T * x * -v)),
          (o = Wa(y, o, -Math.sin(S) * -v)),
          (l = Wa(y, l, M * x * -v + v));
      }
      g !== bs && (_ += "perspective(" + g + cr),
        (r || n) && (_ += "translate(" + r + "%, " + n + "%) "),
        (b || a !== bs || o !== bs || l !== bs) &&
          (_ +=
            l !== bs || b
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + cr),
        c !== lr && (_ += "rotate(" + c + cr),
        u !== lr && (_ += "rotateY(" + u + cr),
        h !== lr && (_ += "rotateX(" + h + cr),
        (m !== lr || p !== lr) && (_ += "skew(" + m + ", " + p + cr),
        (f !== 1 || d !== 1) && (_ += "scale(" + f + ", " + d + cr),
        (y.style[Ce] = _ || "translate(0, 0)");
    },
    Ip = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.rotation,
        c = i.skewX,
        u = i.skewY,
        h = i.scaleX,
        m = i.scaleY,
        p = i.target,
        f = i.xOrigin,
        d = i.yOrigin,
        g = i.xOffset,
        w = i.yOffset,
        y = i.forceCSS,
        v = parseFloat(a),
        _ = parseFloat(o),
        b,
        S,
        T,
        M,
        x;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (c += u), (l += u)),
        l || c
          ? ((l *= Nr),
            (c *= Nr),
            (b = Math.cos(l) * h),
            (S = Math.sin(l) * h),
            (T = Math.sin(l - c) * -m),
            (M = Math.cos(l - c) * m),
            c &&
              ((u *= Nr),
              (x = Math.tan(c - u)),
              (x = Math.sqrt(1 + x * x)),
              (T *= x),
              (M *= x),
              u &&
                ((x = Math.tan(u)),
                (x = Math.sqrt(1 + x * x)),
                (b *= x),
                (S *= x))),
            (b = Le(b)),
            (S = Le(S)),
            (T = Le(T)),
            (M = Le(M)))
          : ((b = h), (M = m), (S = T = 0)),
        ((v && !~(a + "").indexOf("px")) || (_ && !~(o + "").indexOf("px"))) &&
          ((v = Hi(p, "x", a, "px")), (_ = Hi(p, "y", o, "px"))),
        (f || d || g || w) &&
          ((v = Le(v + f - (f * b + d * T) + g)),
          (_ = Le(_ + d - (f * S + d * M) + w))),
        (r || n) &&
          ((x = p.getBBox()),
          (v = Le(v + (r / 100) * x.width)),
          (_ = Le(_ + (n / 100) * x.height))),
        (x =
          "matrix(" +
          b +
          "," +
          S +
          "," +
          T +
          "," +
          M +
          "," +
          v +
          "," +
          _ +
          ")"),
        p.setAttribute("transform", x),
        y && (p.style[Ce] = x);
    },
    Dp = function (e, t, i, r, n) {
      var a = 360,
        o = Xe(n),
        l = parseFloat(n) * (o && ~n.indexOf("rad") ? ar : 1),
        c = l - r,
        u = r + c + "deg",
        h,
        m;
      return (
        o &&
          ((h = n.split("_")[1]),
          h === "short" &&
            ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -a)),
          h === "cw" && c < 0
            ? (c = ((c + a * Bl) % a) - ~~(c / a) * a)
            : h === "ccw" && c > 0 && (c = ((c - a * Bl) % a) - ~~(c / a) * a)),
        (e._pt = m = new Ct(e._pt, t, i, r, c, vp)),
        (m.e = u),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    rc = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    zp = function (e, t, i) {
      var r = rc({}, i._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        a = i.style,
        o,
        l,
        c,
        u,
        h,
        m,
        p,
        f;
      r.svg
        ? ((c = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (a[Ce] = t),
          (o = _s(i, 1)),
          or(i, Ce),
          i.setAttribute("transform", c))
        : ((c = getComputedStyle(i)[Ce]),
          (a[Ce] = t),
          (o = _s(i, 1)),
          (a[Ce] = c));
      for (l in Ti)
        (c = r[l]),
          (u = o[l]),
          c !== u &&
            n.indexOf(l) < 0 &&
            ((p = nt(c)),
            (f = nt(u)),
            (h = p !== f ? Hi(i, l, c, f) : parseFloat(c)),
            (m = parseFloat(u)),
            (e._pt = new Ct(e._pt, o, l, h, m - h, Fa)),
            (e._pt.u = f || 0),
            e._props.push(l));
      rc(o, r);
    };
  Mt("padding,margin,Width,Radius", function (s, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      n = "Left",
      a = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (
        o
      ) {
        return e < 2 ? s + o : "border" + o + s;
      });
    fn[e > 1 ? "border" + s : s] = function (o, l, c, u, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = a.map(function (f) {
            return Ei(o, f, c);
          })),
          (p = m.join(" ")),
          p.split(m[0]).length === 5 ? m[0] : p
        );
      (m = (u + "").split(" ")),
        (p = {}),
        a.forEach(function (f, d) {
          return (p[f] = m[d] = m[d] || m[((d - 1) / 2) | 0]);
        }),
        o.init(l, p, h);
    };
  });
  var sc = {
    name: "css",
    register: qa,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, n) {
      var a = this._props,
        o = e.style,
        l = i.vars.startAt,
        c,
        u,
        h,
        m,
        p,
        f,
        d,
        g,
        w,
        y,
        v,
        _,
        b,
        S,
        T,
        M;
      Ra || qa(),
        (this.styles = this.styles || Wl(e)),
        (M = this.styles.props),
        (this.tween = i);
      for (d in t)
        if (
          d !== "autoRound" &&
          ((u = t[d]), !(Rt[d] && Al(d, t, i, r, e, n)))
        ) {
          if (
            ((p = typeof u),
            (f = fn[d]),
            p === "function" && ((u = u.call(i, r, e, n)), (p = typeof u)),
            p === "string" && ~u.indexOf("random(") && (u = ps(u)),
            f)
          )
            f(this, e, d, u, i) && (T = 1);
          else if (d.substr(0, 2) === "--")
            (c = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
              (u += ""),
              (Ni.lastIndex = 0),
              Ni.test(c) || ((g = nt(c)), (w = nt(u))),
              w ? g !== w && (c = Hi(e, d, c, w) + w) : g && (u += g),
              this.add(o, "setProperty", c, u, r, n, 0, 0, d),
              a.push(d),
              M.push(d, 0, o[d]);
          else if (p !== "undefined") {
            if (
              (l && d in l
                ? ((c =
                    typeof l[d] == "function" ? l[d].call(i, r, e, n) : l[d]),
                  Xe(c) && ~c.indexOf("random(") && (c = ps(c)),
                  nt(c + "") ||
                    c === "auto" ||
                    (c += Dt.units[d] || nt(Ei(e, d)) || ""),
                  (c + "").charAt(1) === "=" && (c = Ei(e, d)))
                : (c = Ei(e, d)),
              (m = parseFloat(c)),
              (y = p === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              y && (u = u.substr(2)),
              (h = parseFloat(u)),
              d in pi &&
                (d === "autoAlpha" &&
                  (m === 1 && Ei(e, "visibility") === "hidden" && h && (m = 0),
                  M.push("visibility", 0, o.visibility),
                  qi(
                    this,
                    o,
                    "visibility",
                    m ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                d !== "scale" &&
                  d !== "transform" &&
                  ((d = pi[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
              (v = d in Ti),
              v)
            ) {
              if (
                (this.styles.save(d),
                p === "string" &&
                  u.substring(0, 6) === "var(--" &&
                  ((u = Zt(e, u.substring(4, u.indexOf(")")))),
                  (h = parseFloat(u))),
                _ ||
                  ((b = e._gsap),
                  (b.renderTransform && !t.parseTransform) ||
                    _s(e, t.parseTransform),
                  (S = t.smoothOrigin !== !1 && b.smooth),
                  (_ = this._pt =
                    new Ct(this._pt, o, Ce, 0, 1, b.renderTransform, b, 0, -1)),
                  (_.dep = 1)),
                d === "scale")
              )
                (this._pt = new Ct(
                  this._pt,
                  b,
                  "scaleY",
                  b.scaleY,
                  (y ? kr(b.scaleY, y + h) : h) - b.scaleY || 0,
                  Fa
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", d),
                  (d += "X");
              else if (d === "transformOrigin") {
                M.push(At, 0, o[At]),
                  (u = Op(u)),
                  b.svg
                    ? Va(e, u, 0, S, 0, this)
                    : ((w = parseFloat(u.split(" ")[2]) || 0),
                      w !== b.zOrigin && qi(this, b, "zOrigin", b.zOrigin, w),
                      qi(this, o, d, pn(c), pn(u)));
                continue;
              } else if (d === "svgOrigin") {
                Va(e, u, 1, S, 0, this);
                continue;
              } else if (d in Jl) {
                Dp(this, b, d, m, y ? kr(m, y + u) : u);
                continue;
              } else if (d === "smoothOrigin") {
                qi(this, b, "smooth", b.smooth, u);
                continue;
              } else if (d === "force3D") {
                b[d] = u;
                continue;
              } else if (d === "transform") {
                zp(this, u, e);
                continue;
              }
            } else d in o || (d = Br(d) || d);
            if (
              v ||
              ((h || h === 0) && (m || m === 0) && !gp.test(u) && d in o)
            )
              (g = (c + "").substr((m + "").length)),
                h || (h = 0),
                (w = nt(u) || (d in Dt.units ? Dt.units[d] : g)),
                g !== w && (m = Hi(e, d, c, w)),
                (this._pt = new Ct(
                  this._pt,
                  v ? b : o,
                  d,
                  m,
                  (y ? kr(m, y + h) : h) - m,
                  !v && (w === "px" || d === "zIndex") && t.autoRound !== !1
                    ? wp
                    : Fa
                )),
                (this._pt.u = w || 0),
                g !== w && w !== "%" && ((this._pt.b = c), (this._pt.r = yp));
            else if (d in o) Ap.call(this, e, d, c, y ? y + u : u);
            else if (d in e) this.add(e, d, c || e[d], y ? y + u : u, r, n);
            else if (d !== "parseTransform") {
              fa(d, u);
              continue;
            }
            v ||
              (d in o
                ? M.push(d, 0, o[d])
                : typeof e[d] == "function"
                ? M.push(d, 2, e[d]())
                : M.push(d, 1, c || e[d])),
              a.push(d);
          }
        }
      T && zl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !$a())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Ei,
    aliases: pi,
    getSetter: function (e, t, i) {
      var r = pi[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in Ti && t !== At && (e._gsap.x || Ei(e, "x"))
          ? i && Fl === i
            ? t === "scale"
              ? xp
              : Sp
            : (Fl = i || {}) && (t === "scale" ? Tp : Ep)
          : e.style && !aa(e.style[t])
          ? _p
          : ~t.indexOf("-")
          ? bp
          : ka(e, t)
      );
    },
    core: { _removeProperty: or, _getMatrix: Ha },
  };
  (Pt.utils.checkPrefix = Br),
    (Pt.core.getStyleSaver = Wl),
    (function (s, e, t, i) {
      var r = Mt(s + "," + e + "," + t, function (n) {
        Ti[n] = 1;
      });
      Mt(e, function (n) {
        (Dt.units[n] = "deg"), (Jl[n] = 1);
      }),
        (pi[r[13]] = s + "," + e),
        Mt(i, function (n) {
          var a = n.split(":");
          pi[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Mt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        Dt.units[s] = "px";
      }
    ),
    Pt.registerPlugin(sc);
  var q = Pt.registerPlugin(sc) || Pt;
  q.core.Tween;
  function Rp(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function $p(s, e, t) {
    return e && Rp(s.prototype, e), s;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var et,
    hn,
    Bt,
    Vi,
    Wi,
    qr,
    nc,
    ur,
    Ss,
    ac,
    Mi,
    ri,
    oc,
    lc = function () {
      return (
        et ||
        (typeof window != "undefined" &&
          (et = window.gsap) &&
          et.registerPlugin &&
          et)
      );
    },
    cc = 1,
    Hr = [],
    ie = [],
    hi = [],
    xs = Date.now,
    Ya = function (e, t) {
      return t;
    },
    Np = function () {
      var e = Ss.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, ie),
        r.push.apply(r, hi),
        (ie = i),
        (hi = r),
        (Ya = function (a, o) {
          return t[a](o);
        });
    },
    Yi = function (e, t) {
      return ~hi.indexOf(e) && hi[hi.indexOf(e) + 1][t];
    },
    Ts = function (e) {
      return !!~ac.indexOf(e);
    },
    vt = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!n });
    },
    yt = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    mn = "scrollLeft",
    gn = "scrollTop",
    Xa = function () {
      return (Mi && Mi.isPressed) || ie.cache++;
    },
    vn = function (e, t) {
      var i = function r(n) {
        if (n || n === 0) {
          cc && (Bt.history.scrollRestoration = "manual");
          var a = Mi && Mi.isPressed;
          (n = r.v = Math.round(n) || (Mi && Mi.iOS ? 1 : 0)),
            e(n),
            (r.cacheID = ie.cache),
            a && Ya("ss", n);
        } else
          (t || ie.cache !== r.cacheID || Ya("ref")) &&
            ((r.cacheID = ie.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    wt = {
      s: mn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: vn(function (s) {
        return arguments.length
          ? Bt.scrollTo(s, qe.sc())
          : Bt.pageXOffset || Vi[mn] || Wi[mn] || qr[mn] || 0;
      }),
    },
    qe = {
      s: gn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: wt,
      sc: vn(function (s) {
        return arguments.length
          ? Bt.scrollTo(wt.sc(), s)
          : Bt.pageYOffset || Vi[gn] || Wi[gn] || qr[gn] || 0;
      }),
    },
    Ot = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || et.utils.toArray)(e)[0] ||
        (typeof e == "string" && et.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Fp = function (e, t) {
      for (var i = t.length; i--; )
        if (t[i] === e || t[i].contains(e)) return !0;
      return !1;
    },
    Xi = function (e, t) {
      var i = t.s,
        r = t.sc;
      Ts(e) && (e = Vi.scrollingElement || Wi);
      var n = ie.indexOf(e),
        a = r === qe.sc ? 1 : 2;
      !~n && (n = ie.push(e) - 1), ie[n + a] || vt(e, "scroll", Xa);
      var o = ie[n + a],
        l =
          o ||
          (ie[n + a] =
            vn(Yi(e, i), !0) ||
            (Ts(e)
              ? r
              : vn(function (c) {
                  return arguments.length ? (e[i] = c) : e[i];
                })));
      return (
        (l.target = e),
        o || (l.smooth = et.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Ga = function (e, t, i) {
      var r = e,
        n = e,
        a = xs(),
        o = a,
        l = t || 50,
        c = Math.max(500, l * 3),
        u = function (f, d) {
          var g = xs();
          d || g - a > l
            ? ((n = r), (r = f), (o = a), (a = g))
            : i
            ? (r += f)
            : (r = n + ((f - n) / (g - o)) * (a - o));
        },
        h = function () {
          (n = r = i ? 0 : r), (o = a = 0);
        },
        m = function (f) {
          var d = o,
            g = n,
            w = xs();
          return (
            (f || f === 0) && f !== r && u(f),
            a === o || w - o > c
              ? 0
              : ((r + (i ? g : -g)) / ((i ? w : a) - d)) * 1e3
          );
        };
      return { update: u, reset: h, getVelocity: m };
    },
    Es = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    uc = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    dc = function () {
      (Ss = et.core.globals().ScrollTrigger), Ss && Ss.core && Np();
    },
    fc = function (e) {
      return (
        (et = e || lc()),
        !hn &&
          et &&
          typeof document != "undefined" &&
          document.body &&
          ((Bt = window),
          (Vi = document),
          (Wi = Vi.documentElement),
          (qr = Vi.body),
          (ac = [Bt, Vi, Wi, qr]),
          et.utils.clamp,
          (oc = et.core.context || function () {}),
          (ur = "onpointerenter" in qr ? "pointer" : "mouse"),
          (nc = Ie.isTouch =
            Bt.matchMedia &&
            Bt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Bt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (ri = Ie.eventTypes =
            (
              "ontouchstart" in Wi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Wi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (cc = 0);
          }, 500),
          dc(),
          (hn = 1)),
        hn
      );
    };
  (wt.op = qe), (ie.cache = 0);
  var Ie = (function () {
    function s(t) {
      this.init(t);
    }
    var e = s.prototype;
    return (
      (e.init = function (i) {
        hn || fc(et) || console.warn("Please gsap.registerPlugin(Observer)"),
          Ss || dc();
        var r = i.tolerance,
          n = i.dragMinimum,
          a = i.type,
          o = i.target,
          l = i.lineHeight,
          c = i.debounce,
          u = i.preventDefault,
          h = i.onStop,
          m = i.onStopDelay,
          p = i.ignore,
          f = i.wheelSpeed,
          d = i.event,
          g = i.onDragStart,
          w = i.onDragEnd,
          y = i.onDrag,
          v = i.onPress,
          _ = i.onRelease,
          b = i.onRight,
          S = i.onLeft,
          T = i.onUp,
          M = i.onDown,
          x = i.onChangeX,
          E = i.onChangeY,
          I = i.onChange,
          P = i.onToggleX,
          k = i.onToggleY,
          O = i.onHover,
          D = i.onHoverEnd,
          z = i.onMove,
          A = i.ignoreCheck,
          L = i.isNormalizer,
          $ = i.onGestureStart,
          C = i.onGestureEnd,
          W = i.onWheel,
          K = i.onEnable,
          pe = i.onDisable,
          ue = i.onClick,
          F = i.scrollSpeed,
          N = i.capture,
          B = i.allowClicks,
          j = i.lockAxis,
          ce = i.onLockAxis;
        (this.target = o = Ot(o) || Wi),
          (this.vars = i),
          p && (p = et.utils.toArray(p)),
          (r = r || 1e-9),
          (n = n || 0),
          (f = f || 1),
          (F = F || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(Bt.getComputedStyle(qr).lineHeight) || 22);
        var tt,
          xe,
          Te,
          J,
          se,
          _e,
          Ve,
          R = this,
          Fe = 0,
          ut = 0,
          Wt = i.passive || (!u && i.passive !== !1),
          ve = Xi(o, wt),
          Yt = Xi(o, qe),
          ti = ve(),
          ni = Yt(),
          Oe =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            ri[0] === "pointerdown",
          ii = Ts(o),
          he = o.ownerDocument || Vi,
          kt = [0, 0, 0],
          Ue = [0, 0, 0],
          Oi = 0,
          Ws = function () {
            return (Oi = xs());
          },
          Be = function (U, de) {
            return (
              ((R.event = U) && p && Fp(U.target, p)) ||
              (de && Oe && U.pointerType !== "touch") ||
              (A && A(U, de))
            );
          },
          Vn = function () {
            R._vx.reset(), R._vy.reset(), xe.pause(), h && h(R);
          },
          ki = function () {
            var U = (R.deltaX = uc(kt)),
              de = (R.deltaY = uc(Ue)),
              H = Math.abs(U) >= r,
              Z = Math.abs(de) >= r;
            I && (H || Z) && I(R, U, de, kt, Ue),
              H &&
                (b && R.deltaX > 0 && b(R),
                S && R.deltaX < 0 && S(R),
                x && x(R),
                P && R.deltaX < 0 != Fe < 0 && P(R),
                (Fe = R.deltaX),
                (kt[0] = kt[1] = kt[2] = 0)),
              Z &&
                (M && R.deltaY > 0 && M(R),
                T && R.deltaY < 0 && T(R),
                E && E(R),
                k && R.deltaY < 0 != ut < 0 && k(R),
                (ut = R.deltaY),
                (Ue[0] = Ue[1] = Ue[2] = 0)),
              (J || Te) &&
                (z && z(R),
                Te && (g && Te === 1 && g(R), y && y(R), (Te = 0)),
                (J = !1)),
              _e && !(_e = !1) && ce && ce(R),
              se && (W(R), (se = !1)),
              (tt = 0);
          },
          Jr = function (U, de, H) {
            (kt[H] += U),
              (Ue[H] += de),
              R._vx.update(U),
              R._vy.update(de),
              c ? tt || (tt = requestAnimationFrame(ki)) : ki();
          },
          es = function (U, de) {
            j &&
              !Ve &&
              ((R.axis = Ve = Math.abs(U) > Math.abs(de) ? "x" : "y"),
              (_e = !0)),
              Ve !== "y" && ((kt[2] += U), R._vx.update(U, !0)),
              Ve !== "x" && ((Ue[2] += de), R._vy.update(de, !0)),
              c ? tt || (tt = requestAnimationFrame(ki)) : ki();
          },
          Ui = function (U) {
            if (!Be(U, 1)) {
              U = Es(U, u);
              var de = U.clientX,
                H = U.clientY,
                Z = de - R.x,
                G = H - R.y,
                Q = R.isDragging;
              (R.x = de),
                (R.y = H),
                (Q ||
                  ((Z || G) &&
                    (Math.abs(R.startX - de) >= n ||
                      Math.abs(R.startY - H) >= n))) &&
                  ((Te = Q ? 2 : 1), Q || (R.isDragging = !0), es(Z, G));
            }
          },
          xr = (R.onPress = function (ee) {
            Be(ee, 1) ||
              (ee && ee.button) ||
              ((R.axis = Ve = null),
              xe.pause(),
              (R.isPressed = !0),
              (ee = Es(ee)),
              (Fe = ut = 0),
              (R.startX = R.x = ee.clientX),
              (R.startY = R.y = ee.clientY),
              R._vx.reset(),
              R._vy.reset(),
              vt(L ? o : he, ri[1], Ui, Wt, !0),
              (R.deltaX = R.deltaY = 0),
              v && v(R));
          }),
          ae = (R.onRelease = function (ee) {
            if (!Be(ee, 1)) {
              yt(L ? o : he, ri[1], Ui, !0);
              var U = !isNaN(R.y - R.startY),
                de = R.isDragging,
                H =
                  de &&
                  (Math.abs(R.x - R.startX) > 3 ||
                    Math.abs(R.y - R.startY) > 3),
                Z = Es(ee);
              !H &&
                U &&
                (R._vx.reset(),
                R._vy.reset(),
                u &&
                  B &&
                  et.delayedCall(0.08, function () {
                    if (xs() - Oi > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (he.createEvent) {
                        var G = he.createEvent("MouseEvents");
                        G.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Bt,
                          1,
                          Z.screenX,
                          Z.screenY,
                          Z.clientX,
                          Z.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          ee.target.dispatchEvent(G);
                      }
                    }
                  })),
                (R.isDragging = R.isGesturing = R.isPressed = !1),
                h && de && !L && xe.restart(!0),
                Te && ki(),
                w && de && w(R),
                _ && _(R, H);
            }
          }),
          Tr = function (U) {
            return (
              U.touches &&
              U.touches.length > 1 &&
              (R.isGesturing = !0) &&
              $(U, R.isDragging)
            );
          },
          ai = function () {
            return (R.isGesturing = !1) || C(R);
          },
          oi = function (U) {
            if (!Be(U)) {
              var de = ve(),
                H = Yt();
              Jr((de - ti) * F, (H - ni) * F, 1),
                (ti = de),
                (ni = H),
                h && xe.restart(!0);
            }
          },
          li = function (U) {
            if (!Be(U)) {
              (U = Es(U, u)), W && (se = !0);
              var de =
                (U.deltaMode === 1
                  ? l
                  : U.deltaMode === 2
                  ? Bt.innerHeight
                  : 1) * f;
              Jr(U.deltaX * de, U.deltaY * de, 0), h && !L && xe.restart(!0);
            }
          },
          Er = function (U) {
            if (!Be(U)) {
              var de = U.clientX,
                H = U.clientY,
                Z = de - R.x,
                G = H - R.y;
              (R.x = de),
                (R.y = H),
                (J = !0),
                h && xe.restart(!0),
                (Z || G) && es(Z, G);
            }
          },
          ts = function (U) {
            (R.event = U), O(R);
          },
          Li = function (U) {
            (R.event = U), D(R);
          },
          Ys = function (U) {
            return Be(U) || (Es(U, u) && ue(R));
          };
        (xe = R._dc = et.delayedCall(m || 0.25, Vn).pause()),
          (R.deltaX = R.deltaY = 0),
          (R._vx = Ga(0, 50, !0)),
          (R._vy = Ga(0, 50, !0)),
          (R.scrollX = ve),
          (R.scrollY = Yt),
          (R.isDragging = R.isGesturing = R.isPressed = !1),
          oc(this),
          (R.enable = function (ee) {
            return (
              R.isEnabled ||
                (vt(ii ? he : o, "scroll", Xa),
                a.indexOf("scroll") >= 0 &&
                  vt(ii ? he : o, "scroll", oi, Wt, N),
                a.indexOf("wheel") >= 0 && vt(o, "wheel", li, Wt, N),
                ((a.indexOf("touch") >= 0 && nc) ||
                  a.indexOf("pointer") >= 0) &&
                  (vt(o, ri[0], xr, Wt, N),
                  vt(he, ri[2], ae),
                  vt(he, ri[3], ae),
                  B && vt(o, "click", Ws, !0, !0),
                  ue && vt(o, "click", Ys),
                  $ && vt(he, "gesturestart", Tr),
                  C && vt(he, "gestureend", ai),
                  O && vt(o, ur + "enter", ts),
                  D && vt(o, ur + "leave", Li),
                  z && vt(o, ur + "move", Er)),
                (R.isEnabled = !0),
                (R.isDragging = R.isGesturing = R.isPressed = J = Te = !1),
                R._vx.reset(),
                R._vy.reset(),
                (ti = ve()),
                (ni = Yt()),
                ee && ee.type && xr(ee),
                K && K(R)),
              R
            );
          }),
          (R.disable = function () {
            R.isEnabled &&
              (Hr.filter(function (ee) {
                return ee !== R && Ts(ee.target);
              }).length || yt(ii ? he : o, "scroll", Xa),
              R.isPressed &&
                (R._vx.reset(), R._vy.reset(), yt(L ? o : he, ri[1], Ui, !0)),
              yt(ii ? he : o, "scroll", oi, N),
              yt(o, "wheel", li, N),
              yt(o, ri[0], xr, N),
              yt(he, ri[2], ae),
              yt(he, ri[3], ae),
              yt(o, "click", Ws, !0),
              yt(o, "click", Ys),
              yt(he, "gesturestart", Tr),
              yt(he, "gestureend", ai),
              yt(o, ur + "enter", ts),
              yt(o, ur + "leave", Li),
              yt(o, ur + "move", Er),
              (R.isEnabled = R.isPressed = R.isDragging = !1),
              pe && pe(R));
          }),
          (R.kill = R.revert =
            function () {
              R.disable();
              var ee = Hr.indexOf(R);
              ee >= 0 && Hr.splice(ee, 1), Mi === R && (Mi = 0);
            }),
          Hr.push(R),
          L && Ts(o) && (Mi = R),
          R.enable(d);
      }),
      $p(s, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      s
    );
  })();
  (Ie.version = "3.13.0"),
    (Ie.create = function (s) {
      return new Ie(s);
    }),
    (Ie.register = fc),
    (Ie.getAll = function () {
      return Hr.slice();
    }),
    (Ie.getById = function (s) {
      return Hr.filter(function (e) {
        return e.vars.id === s;
      })[0];
    }),
    lc() && et.registerPlugin(Ie);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var V,
    Vr,
    re,
    we,
    qt,
    fe,
    ja,
    yn,
    Ms,
    Cs,
    Ps,
    wn,
    at,
    _n,
    Ua,
    _t,
    pc,
    hc,
    Wr,
    mc,
    Ka,
    gc,
    bt,
    Za,
    vc,
    yc,
    Gi,
    Qa,
    Ja,
    Yr,
    eo,
    bn,
    to,
    io,
    Sn = 1,
    ot = Date.now,
    ro = ot(),
    Qt = 0,
    As = 0,
    wc = function (e, t, i) {
      var r = Ht(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    _c = function (e, t) {
      return t && (!Ht(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Bp = function s() {
      return As && requestAnimationFrame(s);
    },
    bc = function () {
      return (_n = 1);
    },
    Sc = function () {
      return (_n = 0);
    },
    mi = function (e) {
      return e;
    },
    Os = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    xc = function () {
      return typeof window != "undefined";
    },
    Tc = function () {
      return V || (xc() && (V = window.gsap) && V.registerPlugin && V);
    },
    dr = function (e) {
      return !!~ja.indexOf(e);
    },
    Ec = function (e) {
      return (
        (e === "Height" ? eo : re["inner" + e]) ||
        qt["client" + e] ||
        fe["client" + e]
      );
    },
    Mc = function (e) {
      return (
        Yi(e, "getBoundingClientRect") ||
        (dr(e)
          ? function () {
              return (zn.width = re.innerWidth), (zn.height = eo), zn;
            }
          : function () {
              return Ci(e);
            })
      );
    },
    qp = function (e, t, i) {
      var r = i.d,
        n = i.d2,
        a = i.a;
      return (a = Yi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? Ec(n) : e["client" + n]) || 0;
          };
    },
    Hp = function (e, t) {
      return !t || ~hi.indexOf(e)
        ? Mc(e)
        : function () {
            return zn;
          };
    },
    gi = function (e, t) {
      var i = t.s,
        r = t.d2,
        n = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Yi(e, i))
          ? a() - Mc(e)()[n]
          : dr(e)
          ? (qt[i] || fe[i]) - Ec(r)
          : e[i] - e["offset" + r]
      );
    },
    xn = function (e, t) {
      for (var i = 0; i < Wr.length; i += 3)
        (!t || ~t.indexOf(Wr[i + 1])) && e(Wr[i], Wr[i + 1], Wr[i + 2]);
    },
    Ht = function (e) {
      return typeof e == "string";
    },
    lt = function (e) {
      return typeof e == "function";
    },
    ks = function (e) {
      return typeof e == "number";
    },
    fr = function (e) {
      return typeof e == "object";
    },
    Ls = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    so = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    Xr = Math.abs,
    Cc = "left",
    Pc = "top",
    no = "right",
    ao = "bottom",
    pr = "width",
    hr = "height",
    Is = "Right",
    Ds = "Left",
    zs = "Top",
    Rs = "Bottom",
    Ne = "padding",
    Jt = "margin",
    Gr = "Width",
    oo = "Height",
    He = "px",
    ei = function (e) {
      return re.getComputedStyle(e);
    },
    Vp = function (e) {
      var t = ei(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Ac = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Ci = function (e, t) {
      var i =
          t &&
          ei(e)[Ua] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          V.to(e, {
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
    },
    Tn = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    Oc = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        n;
      for (n in i) t.push(i[n] / r);
      return t;
    },
    Wp = function (e) {
      return function (t) {
        return V.utils.snap(Oc(e), t);
      };
    },
    lo = function (e) {
      var t = V.utils.snap(e),
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
    },
    Yp = function (e) {
      return function (t, i) {
        return lo(Oc(e))(t, i.direction);
      };
    },
    En = function (e, t, i, r) {
      return i.split(",").forEach(function (n) {
        return e(t, n, r);
      });
    },
    Ge = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: !r, capture: !!n });
    },
    je = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Mn = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    kc = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Cn = { toggleActions: "play", anticipatePin: 0 },
    Pn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    An = function (e, t) {
      if (Ht(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in Pn
              ? Pn[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    On = function (e, t, i, r, n, a, o, l) {
      var c = n.startColor,
        u = n.endColor,
        h = n.fontSize,
        m = n.indent,
        p = n.fontWeight,
        f = we.createElement("div"),
        d = dr(i) || Yi(i, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        w = d ? fe : i,
        y = e.indexOf("start") !== -1,
        v = y ? c : u,
        _ =
          "border-color:" +
          v +
          ";font-size:" +
          h +
          ";color:" +
          v +
          ";font-weight:" +
          p +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (_ += "position:" + ((g || l) && d ? "fixed;" : "absolute;")),
        (g || l || !d) &&
          (_ += (r === qe ? no : ao) + ":" + (a + parseFloat(m)) + "px;"),
        o &&
          (_ +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (f._isStart = y),
        f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (f.style.cssText = _),
        (f.innerText = t || t === 0 ? e + "-" + t : e),
        w.children[0] ? w.insertBefore(f, w.children[0]) : w.appendChild(f),
        (f._offset = f["offset" + r.op.d2]),
        kn(f, 0, r, y),
        f
      );
    },
    kn = function (e, t, i, r) {
      var n = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + a + Gr] = 1),
        (n["border" + o + Gr] = 0),
        (n[i.p] = t + "px"),
        V.set(e, n);
    },
    te = [],
    co = {},
    $s,
    Lc = function () {
      return ot() - Qt > 34 && ($s || ($s = requestAnimationFrame(Pi)));
    },
    jr = function () {
      (!bt || !bt.isPressed || bt.startX > fe.clientWidth) &&
        (ie.cache++,
        bt ? $s || ($s = requestAnimationFrame(Pi)) : Pi(),
        Qt || gr("scrollStart"),
        (Qt = ot()));
    },
    uo = function () {
      (yc = re.innerWidth), (vc = re.innerHeight);
    },
    Ns = function (e) {
      ie.cache++,
        (e === !0 ||
          (!at &&
            !gc &&
            !we.fullscreenElement &&
            !we.webkitFullscreenElement &&
            (!Za ||
              yc !== re.innerWidth ||
              Math.abs(re.innerHeight - vc) > re.innerHeight * 0.25))) &&
          yn.restart(!0);
    },
    mr = {},
    Xp = [],
    Ic = function s() {
      return je(Y, "scrollEnd", s) || yr(!0);
    },
    gr = function (e) {
      return (
        (mr[e] &&
          mr[e].map(function (t) {
            return t();
          })) ||
        Xp
      );
    },
    Vt = [],
    Dc = function (e) {
      for (var t = 0; t < Vt.length; t += 5)
        (!e || (Vt[t + 4] && Vt[t + 4].query === e)) &&
          ((Vt[t].style.cssText = Vt[t + 1]),
          Vt[t].getBBox && Vt[t].setAttribute("transform", Vt[t + 2] || ""),
          (Vt[t + 3].uncache = 1));
    },
    fo = function (e, t) {
      var i;
      for (_t = 0; _t < te.length; _t++)
        (i = te[_t]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (bn = !0), t && Dc(t), t || gr("revert");
    },
    zc = function (e, t) {
      ie.cache++,
        (t || !St) &&
          ie.forEach(function (i) {
            return lt(i) && i.cacheID++ && (i.rec = 0);
          }),
        Ht(e) && (re.history.scrollRestoration = Ja = e);
    },
    St,
    vr = 0,
    Rc,
    Gp = function () {
      if (Rc !== vr) {
        var e = (Rc = vr);
        requestAnimationFrame(function () {
          return e === vr && yr(!0);
        });
      }
    },
    $c = function () {
      fe.appendChild(Yr),
        (eo = (!bt && Yr.offsetHeight) || re.innerHeight),
        fe.removeChild(Yr);
    },
    Nc = function (e) {
      return Ms(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    yr = function (e, t) {
      if (
        ((qt = we.documentElement),
        (fe = we.body),
        (ja = [re, we, qt, fe]),
        Qt && !e && !bn)
      ) {
        Ge(Y, "scrollEnd", Ic);
        return;
      }
      $c(),
        (St = Y.isRefreshing = !0),
        ie.forEach(function (r) {
          return lt(r) && ++r.cacheID && (r.rec = r());
        });
      var i = gr("refreshInit");
      mc && Y.sort(),
        t || fo(),
        ie.forEach(function (r) {
          lt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        te.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (bn = !1),
        te.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - a), r.refresh();
          }
        }),
        (to = 1),
        Nc(!0),
        te.forEach(function (r) {
          var n = gi(r.scroller, r._dir),
            a = r.vars.end === "max" || (r._endClamp && r.end > n),
            o = r._startClamp && r.start >= n;
          (a || o) &&
            r.setPositions(
              o ? n - 1 : r.start,
              a ? Math.max(o ? n : r.start + 1, n) : r.end,
              !0
            );
        }),
        Nc(!1),
        (to = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        ie.forEach(function (r) {
          lt(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        zc(Ja, 1),
        yn.pause(),
        vr++,
        (St = 2),
        Pi(2),
        te.forEach(function (r) {
          return lt(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (St = Y.isRefreshing = !1),
        gr("refresh");
    },
    po = 0,
    Ln = 1,
    Fs,
    Pi = function (e) {
      if (e === 2 || (!St && !bn)) {
        (Y.isUpdating = !0), Fs && Fs.update(0);
        var t = te.length,
          i = ot(),
          r = i - ro >= 50,
          n = t && te[0].scroll();
        if (
          ((Ln = po > n ? -1 : 1),
          St || (po = n),
          r &&
            (Qt && !_n && i - Qt > 200 && ((Qt = 0), gr("scrollEnd")),
            (Ps = ro),
            (ro = i)),
          Ln < 0)
        ) {
          for (_t = t; _t-- > 0; ) te[_t] && te[_t].update(0, r);
          Ln = 1;
        } else for (_t = 0; _t < t; _t++) te[_t] && te[_t].update(0, r);
        Y.isUpdating = !1;
      }
      $s = 0;
    },
    ho = [
      Cc,
      Pc,
      ao,
      no,
      Jt + Rs,
      Jt + Is,
      Jt + zs,
      Jt + Ds,
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
    In = ho.concat([
      pr,
      hr,
      "boxSizing",
      "max" + Gr,
      "max" + oo,
      "position",
      Jt,
      Ne,
      Ne + zs,
      Ne + Is,
      Ne + Rs,
      Ne + Ds,
    ]),
    jp = function (e, t, i) {
      Ur(i);
      var r = e._gsap;
      if (r.spacerIsNative) Ur(r.spacerState);
      else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t), n.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    mo = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var n = ho.length, a = t.style, o = e.style, l; n--; )
          (l = ho[n]), (a[l] = i[l]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[ao] = o[no] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[pr] = Tn(e, wt) + He),
          (a[hr] = Tn(e, qe) + He),
          (a[Ne] = o[Jt] = o[Pc] = o[Cc] = "0"),
          Ur(r),
          (o[pr] = o["max" + Gr] = i[pr]),
          (o[hr] = o["max" + oo] = i[hr]),
          (o[Ne] = i[Ne]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Up = /([A-Z])/g,
    Ur = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          r = 0,
          n,
          a;
        for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; r < i; r += 2)
          (a = e[r + 1]),
            (n = e[r]),
            a
              ? (t[n] = a)
              : t[n] && t.removeProperty(n.replace(Up, "-$1").toLowerCase());
      }
    },
    Dn = function (e) {
      for (var t = In.length, i = e.style, r = [], n = 0; n < t; n++)
        r.push(In[n], i[In[n]]);
      return (r.t = e), r;
    },
    Kp = function (e, t, i) {
      for (var r = [], n = e.length, a = i ? 8 : 0, o; a < n; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    zn = { left: 0, top: 0 },
    Fc = function (e, t, i, r, n, a, o, l, c, u, h, m, p, f) {
      lt(e) && (e = e(l)),
        Ht(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? An("0" + e.substr(3), i) : 0));
      var d = p ? p.time() : 0,
        g,
        w,
        y;
      if ((p && p.seek(0), isNaN(e) || (e = +e), ks(e)))
        p &&
          (e = V.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            m,
            e
          )),
          o && kn(o, i, r, !0);
      else {
        lt(t) && (t = t(l));
        var v = (e || "0").split(" "),
          _,
          b,
          S,
          T;
        (y = Ot(t, l) || fe),
          (_ = Ci(y) || {}),
          (!_ || (!_.left && !_.top)) &&
            ei(y).display === "none" &&
            ((T = y.style.display),
            (y.style.display = "block"),
            (_ = Ci(y)),
            T ? (y.style.display = T) : y.style.removeProperty("display")),
          (b = An(v[0], _[r.d])),
          (S = An(v[1] || "0", i)),
          (e = _[r.p] - c[r.p] - u + b + n - S),
          o && kn(o, S, r, i - S < 20 || (o._isStart && S > 20)),
          (i -= i - S);
      }
      if ((f && ((l[f] = e || -0.001), e < 0 && (e = 0)), a)) {
        var M = e + i,
          x = a._isStart;
        (g = "scroll" + r.d2),
          kn(
            a,
            M,
            r,
            (x && M > 20) ||
              (!x && (h ? Math.max(fe[g], qt[g]) : a.parentNode[g]) <= M + 1)
          ),
          h &&
            ((c = Ci(o)),
            h && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + He));
      }
      return (
        p &&
          y &&
          ((g = Ci(y)),
          p.seek(m),
          (w = Ci(y)),
          (p._caScrollDist = g[r.p] - w[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(d),
        p ? e : Math.round(e)
      );
    },
    Zp = /(webkit|moz|length|cssText|inset)/i,
    Bc = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var n = e.style,
          a,
          o;
        if (t === fe) {
          (e._stOrig = n.cssText), (o = ei(e));
          for (a in o)
            !+a &&
              !Zp.test(a) &&
              o[a] &&
              typeof n[a] == "string" &&
              a !== "0" &&
              (n[a] = o[a]);
          (n.top = i), (n.left = r);
        } else n.cssText = e._stOrig;
        (V.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    qc = function (e, t, i) {
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
    },
    Rn = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), V.set(e, r);
    },
    Hc = function (e, t) {
      var i = Xi(e, t),
        r = "_scroll" + t.p2,
        n = function a(o, l, c, u, h) {
          var m = a.tween,
            p = l.onComplete,
            f = {};
          c = c || i();
          var d = qc(i, c, function () {
            m.kill(), (a.tween = 0);
          });
          return (
            (h = (u && h) || 0),
            (u = u || o - c),
            m && m.kill(),
            (l[r] = o),
            (l.inherit = !1),
            (l.modifiers = f),
            (f[r] = function () {
              return d(c + u * m.ratio + h * m.ratio * m.ratio);
            }),
            (l.onUpdate = function () {
              ie.cache++, a.tween && Pi();
            }),
            (l.onComplete = function () {
              (a.tween = 0), p && p.call(m);
            }),
            (m = a.tween = V.to(e, l)),
            m
          );
        };
      return (
        (e[r] = i),
        (i.wheelHandler = function () {
          return n.tween && n.tween.kill() && (n.tween = 0);
        }),
        Ge(e, "wheel", i.wheelHandler),
        Y.isTouch && Ge(e, "touchmove", i.wheelHandler),
        n
      );
    },
    Y = (function () {
      function s(t, i) {
        Vr ||
          s.register(V) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Qa(this),
          this.init(t, i);
      }
      var e = s.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !As)
          ) {
            this.update = this.refresh = this.kill = mi;
            return;
          }
          i = Ac(Ht(i) || ks(i) || i.nodeType ? { trigger: i } : i, Cn);
          var n = i,
            a = n.onUpdate,
            o = n.toggleClass,
            l = n.id,
            c = n.onToggle,
            u = n.onRefresh,
            h = n.scrub,
            m = n.trigger,
            p = n.pin,
            f = n.pinSpacing,
            d = n.invalidateOnRefresh,
            g = n.anticipatePin,
            w = n.onScrubComplete,
            y = n.onSnapComplete,
            v = n.once,
            _ = n.snap,
            b = n.pinReparent,
            S = n.pinSpacer,
            T = n.containerAnimation,
            M = n.fastScrollEnd,
            x = n.preventOverlaps,
            E =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? wt
                : qe,
            I = !h && h !== 0,
            P = Ot(i.scroller || re),
            k = V.core.getCache(P),
            O = dr(P),
            D =
              ("pinType" in i
                ? i.pinType
                : Yi(P, "pinType") || (O && "fixed")) === "fixed",
            z = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            A = I && i.toggleActions.split(" "),
            L = "markers" in i ? i.markers : Cn.markers,
            $ = O ? 0 : parseFloat(ei(P)["border" + E.p2 + Gr]) || 0,
            C = this,
            W =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(C);
              },
            K = qp(P, O, E),
            pe = Hp(P, O),
            ue = 0,
            F = 0,
            N = 0,
            B = Xi(P, E),
            j,
            ce,
            tt,
            xe,
            Te,
            J,
            se,
            _e,
            Ve,
            R,
            Fe,
            ut,
            Wt,
            ve,
            Yt,
            ti,
            ni,
            Oe,
            ii,
            he,
            kt,
            Ue,
            Oi,
            Ws,
            Be,
            Vn,
            ki,
            Jr,
            es,
            Ui,
            xr,
            ae,
            Tr,
            ai,
            oi,
            li,
            Er,
            ts,
            Li;
          if (
            ((C._startClamp = C._endClamp = !1),
            (C._dir = E),
            (g *= 45),
            (C.scroller = P),
            (C.scroll = T ? T.time.bind(T) : B),
            (xe = B()),
            (C.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((mc = 1), i.refreshPriority === -9999 && (Fs = C)),
            (k.tweenScroll = k.tweenScroll || {
              top: Hc(P, qe),
              left: Hc(P, wt),
            }),
            (C.tweenTo = j = k.tweenScroll[E.p]),
            (C.scrubDuration = function (H) {
              (Tr = ks(H) && H),
                Tr
                  ? ae
                    ? ae.duration(H)
                    : (ae = V.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Tr,
                        paused: !0,
                        onComplete: function () {
                          return w && w(C);
                        },
                      }))
                  : (ae && ae.progress(1).kill(), (ae = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !C.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (C.animation = r.pause()),
              (r.scrollTrigger = C),
              C.scrubDuration(h),
              (Ui = 0),
              l || (l = r.vars.id)),
            _ &&
              ((!fr(_) || _.push) && (_ = { snapTo: _ }),
              "scrollBehavior" in fe.style &&
                V.set(O ? [fe, qt] : P, { scrollBehavior: "auto" }),
              ie.forEach(function (H) {
                return (
                  lt(H) &&
                  H.target === (O ? we.scrollingElement || qt : P) &&
                  (H.smooth = !1)
                );
              }),
              (tt = lt(_.snapTo)
                ? _.snapTo
                : _.snapTo === "labels"
                ? Wp(r)
                : _.snapTo === "labelsDirectional"
                ? Yp(r)
                : _.directional !== !1
                ? function (H, Z) {
                    return lo(_.snapTo)(H, ot() - F < 500 ? 0 : Z.direction);
                  }
                : V.utils.snap(_.snapTo)),
              (ai = _.duration || { min: 0.1, max: 2 }),
              (ai = fr(ai) ? Cs(ai.min, ai.max) : Cs(ai, ai)),
              (oi = V.delayedCall(_.delay || Tr / 2 || 0.1, function () {
                var H = B(),
                  Z = ot() - F < 500,
                  G = j.tween;
                if (
                  (Z || Math.abs(C.getVelocity()) < 10) &&
                  !G &&
                  !_n &&
                  ue !== H
                ) {
                  var Q = (H - J) / ve,
                    Ke = r && !I ? r.totalProgress() : Q,
                    le = Z ? 0 : ((Ke - xr) / (ot() - Ps)) * 1e3 || 0,
                    De = V.utils.clamp(-Q, 1 - Q, (Xr(le / 2) * le) / 0.185),
                    dt = Q + (_.inertia === !1 ? 0 : De),
                    ke,
                    Ee,
                    ye = _,
                    ci = ye.onStart,
                    Pe = ye.onInterrupt,
                    Xt = ye.onComplete;
                  if (
                    ((ke = tt(dt, C)),
                    ks(ke) || (ke = dt),
                    (Ee = Math.max(0, Math.round(J + ke * ve))),
                    H <= se && H >= J && Ee !== H)
                  ) {
                    if (G && !G._initted && G.data <= Xr(Ee - H)) return;
                    _.inertia === !1 && (De = ke - Q),
                      j(
                        Ee,
                        {
                          duration: ai(
                            Xr(
                              (Math.max(Xr(dt - Ke), Xr(ke - Ke)) * 0.185) /
                                le /
                                0.05 || 0
                            )
                          ),
                          ease: _.ease || "power3",
                          data: Xr(Ee - H),
                          onInterrupt: function () {
                            return oi.restart(!0) && Pe && Pe(C);
                          },
                          onComplete: function () {
                            C.update(),
                              (ue = B()),
                              r &&
                                !I &&
                                (ae
                                  ? ae.resetTo(
                                      "totalProgress",
                                      ke,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(ke)),
                              (Ui = xr =
                                r && !I ? r.totalProgress() : C.progress),
                              y && y(C),
                              Xt && Xt(C);
                          },
                        },
                        H,
                        De * ve,
                        Ee - H - De * ve
                      ),
                      ci && ci(C, j.tween);
                  }
                } else C.isActive && ue !== H && oi.restart(!0);
              }).pause())),
            l && (co[l] = C),
            (m = C.trigger = Ot(m || (p !== !0 && p))),
            (Li = m && m._gsap && m._gsap.stRevert),
            Li && (Li = Li(C)),
            (p = p === !0 ? m : Ot(p)),
            Ht(o) && (o = { targets: m, className: o }),
            p &&
              (f === !1 ||
                f === Jt ||
                (f =
                  !f &&
                  p.parentNode &&
                  p.parentNode.style &&
                  ei(p.parentNode).display === "flex"
                    ? !1
                    : Ne),
              (C.pin = p),
              (ce = V.core.getCache(p)),
              ce.spacer
                ? (Yt = ce.pinState)
                : (S &&
                    ((S = Ot(S)),
                    S && !S.nodeType && (S = S.current || S.nativeElement),
                    (ce.spacerIsNative = !!S),
                    S && (ce.spacerState = Dn(S))),
                  (ce.spacer = Oe = S || we.createElement("div")),
                  Oe.classList.add("pin-spacer"),
                  l && Oe.classList.add("pin-spacer-" + l),
                  (ce.pinState = Yt = Dn(p))),
              i.force3D !== !1 && V.set(p, { force3D: !0 }),
              (C.spacer = Oe = ce.spacer),
              (es = ei(p)),
              (Ws = es[f + E.os2]),
              (he = V.getProperty(p)),
              (kt = V.quickSetter(p, E.a, He)),
              mo(p, Oe, es),
              (ni = Dn(p))),
            L)
          ) {
            (ut = fr(L) ? Ac(L, kc) : kc),
              (R = On("scroller-start", l, P, E, ut, 0)),
              (Fe = On("scroller-end", l, P, E, ut, 0, R)),
              (ii = R["offset" + E.op.d2]);
            var Ys = Ot(Yi(P, "content") || P);
            (_e = this.markerStart = On("start", l, Ys, E, ut, ii, 0, T)),
              (Ve = this.markerEnd = On("end", l, Ys, E, ut, ii, 0, T)),
              T && (ts = V.quickSetter([_e, Ve], E.a, He)),
              !D &&
                !(hi.length && Yi(P, "fixedMarkers") === !0) &&
                (Vp(O ? fe : P),
                V.set([R, Fe], { force3D: !0 }),
                (Vn = V.quickSetter(R, E.a, He)),
                (Jr = V.quickSetter(Fe, E.a, He)));
          }
          if (T) {
            var ee = T.vars.onUpdate,
              U = T.vars.onUpdateParams;
            T.eventCallback("onUpdate", function () {
              C.update(0, 0, 1), ee && ee.apply(T, U || []);
            });
          }
          if (
            ((C.previous = function () {
              return te[te.indexOf(C) - 1];
            }),
            (C.next = function () {
              return te[te.indexOf(C) + 1];
            }),
            (C.revert = function (H, Z) {
              if (!Z) return C.kill(!0);
              var G = H !== !1 || !C.enabled,
                Q = at;
              G !== C.isReverted &&
                (G &&
                  ((li = Math.max(B(), C.scroll.rec || 0)),
                  (N = C.progress),
                  (Er = r && r.progress())),
                _e &&
                  [_e, Ve, R, Fe].forEach(function (Ke) {
                    return (Ke.style.display = G ? "none" : "block");
                  }),
                G && ((at = C), C.update(G)),
                p &&
                  (!b || !C.isActive) &&
                  (G ? jp(p, Oe, Yt) : mo(p, Oe, ei(p), Be)),
                G || C.update(G),
                (at = Q),
                (C.isReverted = G));
            }),
            (C.refresh = function (H, Z, G, Q) {
              if (!((at || !C.enabled) && !Z)) {
                if (p && H && Qt) {
                  Ge(s, "scrollEnd", Ic);
                  return;
                }
                !St && W && W(C),
                  (at = C),
                  j.tween && !G && (j.tween.kill(), (j.tween = 0)),
                  ae && ae.pause(),
                  d &&
                    r &&
                    (r.revert({ kill: !1 }).invalidate(),
                    r.getChildren &&
                      r.getChildren(!0, !0, !1).forEach(function (Ki) {
                        return Ki.vars.immediateRender && Ki.render(0, !0, !0);
                      })),
                  C.isReverted || C.revert(!0, !0),
                  (C._subPinOffset = !1);
                var Ke = K(),
                  le = pe(),
                  De = T ? T.duration() : gi(P, E),
                  dt = ve <= 0.01 || !ve,
                  ke = 0,
                  Ee = Q || 0,
                  ye = fr(G) ? G.end : i.end,
                  ci = i.endTrigger || m,
                  Pe = fr(G)
                    ? G.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  Xt = (C.pinnedContainer =
                    i.pinnedContainer && Ot(i.pinnedContainer, C)),
                  yi = (m && Math.max(0, te.indexOf(C))) || 0,
                  it = yi,
                  rt,
                  ft,
                  Mr,
                  Wn,
                  pt,
                  We,
                  wi,
                  Ao,
                  Eu,
                  Xs,
                  _i,
                  Gs,
                  Yn;
                for (
                  L &&
                  fr(G) &&
                  ((Gs = V.getProperty(R, E.p)), (Yn = V.getProperty(Fe, E.p)));
                  it-- > 0;

                )
                  (We = te[it]),
                    We.end || We.refresh(0, 1) || (at = C),
                    (wi = We.pin),
                    wi &&
                      (wi === m || wi === p || wi === Xt) &&
                      !We.isReverted &&
                      (Xs || (Xs = []), Xs.unshift(We), We.revert(!0, !0)),
                    We !== te[it] && (yi--, it--);
                for (
                  lt(Pe) && (Pe = Pe(C)),
                    Pe = wc(Pe, "start", C),
                    J =
                      Fc(
                        Pe,
                        m,
                        Ke,
                        E,
                        B(),
                        _e,
                        R,
                        C,
                        le,
                        $,
                        D,
                        De,
                        T,
                        C._startClamp && "_startClamp"
                      ) || (p ? -0.001 : 0),
                    lt(ye) && (ye = ye(C)),
                    Ht(ye) &&
                      !ye.indexOf("+=") &&
                      (~ye.indexOf(" ")
                        ? (ye = (Ht(Pe) ? Pe.split(" ")[0] : "") + ye)
                        : ((ke = An(ye.substr(2), Ke)),
                          (ye = Ht(Pe)
                            ? Pe
                            : (T
                                ? V.utils.mapRange(
                                    0,
                                    T.duration(),
                                    T.scrollTrigger.start,
                                    T.scrollTrigger.end,
                                    J
                                  )
                                : J) + ke),
                          (ci = m))),
                    ye = wc(ye, "end", C),
                    se =
                      Math.max(
                        J,
                        Fc(
                          ye || (ci ? "100% 0" : De),
                          ci,
                          Ke,
                          E,
                          B() + ke,
                          Ve,
                          Fe,
                          C,
                          le,
                          $,
                          D,
                          De,
                          T,
                          C._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    ke = 0,
                    it = yi;
                  it--;

                )
                  (We = te[it]),
                    (wi = We.pin),
                    wi &&
                      We.start - We._pinPush <= J &&
                      !T &&
                      We.end > 0 &&
                      ((rt =
                        We.end -
                        (C._startClamp ? Math.max(0, We.start) : We.start)),
                      ((wi === m && We.start - We._pinPush < J) || wi === Xt) &&
                        isNaN(Pe) &&
                        (ke += rt * (1 - We.progress)),
                      wi === p && (Ee += rt));
                if (
                  ((J += ke),
                  (se += ke),
                  C._startClamp && (C._startClamp += ke),
                  C._endClamp &&
                    !St &&
                    ((C._endClamp = se || -0.001),
                    (se = Math.min(se, gi(P, E)))),
                  (ve = se - J || ((J -= 0.01) && 0.001)),
                  dt && (N = V.utils.clamp(0, 1, V.utils.normalize(J, se, li))),
                  (C._pinPush = Ee),
                  _e &&
                    ke &&
                    ((rt = {}),
                    (rt[E.a] = "+=" + ke),
                    Xt && (rt[E.p] = "-=" + B()),
                    V.set([_e, Ve], rt)),
                  p && !(to && C.end >= gi(P, E)))
                )
                  (rt = ei(p)),
                    (Wn = E === qe),
                    (Mr = B()),
                    (Ue = parseFloat(he(E.a)) + Ee),
                    !De &&
                      se > 1 &&
                      ((_i = (O ? we.scrollingElement || qt : P).style),
                      (_i = {
                        style: _i,
                        value: _i["overflow" + E.a.toUpperCase()],
                      }),
                      O &&
                        ei(fe)["overflow" + E.a.toUpperCase()] !== "scroll" &&
                        (_i.style["overflow" + E.a.toUpperCase()] = "scroll")),
                    mo(p, Oe, rt),
                    (ni = Dn(p)),
                    (ft = Ci(p, !0)),
                    (Ao = D && Xi(P, Wn ? wt : qe)()),
                    f
                      ? ((Be = [f + E.os2, ve + Ee + He]),
                        (Be.t = Oe),
                        (it = f === Ne ? Tn(p, E) + ve + Ee : 0),
                        it &&
                          (Be.push(E.d, it + He),
                          Oe.style.flexBasis !== "auto" &&
                            (Oe.style.flexBasis = it + He)),
                        Ur(Be),
                        Xt &&
                          te.forEach(function (Ki) {
                            Ki.pin === Xt &&
                              Ki.vars.pinSpacing !== !1 &&
                              (Ki._subPinOffset = !0);
                          }),
                        D && B(li))
                      : ((it = Tn(p, E)),
                        it &&
                          Oe.style.flexBasis !== "auto" &&
                          (Oe.style.flexBasis = it + He)),
                    D &&
                      ((pt = {
                        top: ft.top + (Wn ? Mr - J : Ao) + He,
                        left: ft.left + (Wn ? Ao : Mr - J) + He,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (pt[pr] = pt["max" + Gr] = Math.ceil(ft.width) + He),
                      (pt[hr] = pt["max" + oo] = Math.ceil(ft.height) + He),
                      (pt[Jt] =
                        pt[Jt + zs] =
                        pt[Jt + Is] =
                        pt[Jt + Rs] =
                        pt[Jt + Ds] =
                          "0"),
                      (pt[Ne] = rt[Ne]),
                      (pt[Ne + zs] = rt[Ne + zs]),
                      (pt[Ne + Is] = rt[Ne + Is]),
                      (pt[Ne + Rs] = rt[Ne + Rs]),
                      (pt[Ne + Ds] = rt[Ne + Ds]),
                      (ti = Kp(Yt, pt, b)),
                      St && B(0)),
                    r
                      ? ((Eu = r._initted),
                        Ka(1),
                        r.render(r.duration(), !0, !0),
                        (Oi = he(E.a) - Ue + ve + Ee),
                        (ki = Math.abs(ve - Oi) > 1),
                        D && ki && ti.splice(ti.length - 2, 2),
                        r.render(0, !0, !0),
                        Eu || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Ka(0))
                      : (Oi = ve),
                    _i &&
                      (_i.value
                        ? (_i.style["overflow" + E.a.toUpperCase()] = _i.value)
                        : _i.style.removeProperty("overflow-" + E.a));
                else if (m && B() && !T)
                  for (ft = m.parentNode; ft && ft !== fe; )
                    ft._pinOffset &&
                      ((J -= ft._pinOffset), (se -= ft._pinOffset)),
                      (ft = ft.parentNode);
                Xs &&
                  Xs.forEach(function (Ki) {
                    return Ki.revert(!1, !0);
                  }),
                  (C.start = J),
                  (C.end = se),
                  (xe = Te = St ? li : B()),
                  !T && !St && (xe < li && B(li), (C.scroll.rec = 0)),
                  C.revert(!1, !0),
                  (F = ot()),
                  oi && ((ue = -1), oi.restart(!0)),
                  (at = 0),
                  r &&
                    I &&
                    (r._initted || Er) &&
                    r.progress() !== Er &&
                    r.progress(Er || 0, !0).render(r.time(), !0, !0),
                  (dt || N !== C.progress || T || d || (r && !r._initted)) &&
                    (r &&
                      !I &&
                      (r._initted || N || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        T && J < -0.001 && !N ? V.utils.normalize(J, se, 0) : N,
                        !0
                      ),
                    (C.progress = dt || (xe - J) / ve === N ? 0 : N)),
                  p && f && (Oe._pinOffset = Math.round(C.progress * Oi)),
                  ae && ae.invalidate(),
                  isNaN(Gs) ||
                    ((Gs -= V.getProperty(R, E.p)),
                    (Yn -= V.getProperty(Fe, E.p)),
                    Rn(R, E, Gs),
                    Rn(_e, E, Gs - (Q || 0)),
                    Rn(Fe, E, Yn),
                    Rn(Ve, E, Yn - (Q || 0))),
                  dt && !St && C.update(),
                  u && !St && !Wt && ((Wt = !0), u(C), (Wt = !1));
              }
            }),
            (C.getVelocity = function () {
              return ((B() - Te) / (ot() - Ps)) * 1e3 || 0;
            }),
            (C.endAnimation = function () {
              Ls(C.callbackAnimation),
                r &&
                  (ae
                    ? ae.progress(1)
                    : r.paused()
                    ? I || Ls(r, C.direction < 0, 1)
                    : Ls(r, r.reversed()));
            }),
            (C.labelToScroll = function (H) {
              return (
                (r &&
                  r.labels &&
                  (J || C.refresh() || J) +
                    (r.labels[H] / r.duration()) * ve) ||
                0
              );
            }),
            (C.getTrailing = function (H) {
              var Z = te.indexOf(C),
                G =
                  C.direction > 0 ? te.slice(0, Z).reverse() : te.slice(Z + 1);
              return (
                Ht(H)
                  ? G.filter(function (Q) {
                      return Q.vars.preventOverlaps === H;
                    })
                  : G
              ).filter(function (Q) {
                return C.direction > 0 ? Q.end <= J : Q.start >= se;
              });
            }),
            (C.update = function (H, Z, G) {
              if (!(T && !G && !H)) {
                var Q = St === !0 ? li : C.scroll(),
                  Ke = H ? 0 : (Q - J) / ve,
                  le = Ke < 0 ? 0 : Ke > 1 ? 1 : Ke || 0,
                  De = C.progress,
                  dt,
                  ke,
                  Ee,
                  ye,
                  ci,
                  Pe,
                  Xt,
                  yi;
                if (
                  (Z &&
                    ((Te = xe),
                    (xe = T ? B() : Q),
                    _ && ((xr = Ui), (Ui = r && !I ? r.totalProgress() : le))),
                  g &&
                    p &&
                    !at &&
                    !Sn &&
                    Qt &&
                    (!le && J < Q + ((Q - Te) / (ot() - Ps)) * g
                      ? (le = 1e-4)
                      : le === 1 &&
                        se > Q + ((Q - Te) / (ot() - Ps)) * g &&
                        (le = 0.9999)),
                  le !== De && C.enabled)
                ) {
                  if (
                    ((dt = C.isActive = !!le && le < 1),
                    (ke = !!De && De < 1),
                    (Pe = dt !== ke),
                    (ci = Pe || !!le != !!De),
                    (C.direction = le > De ? 1 : -1),
                    (C.progress = le),
                    ci &&
                      !at &&
                      ((Ee = le && !De ? 0 : le === 1 ? 1 : De === 1 ? 2 : 3),
                      I &&
                        ((ye =
                          (!Pe && A[Ee + 1] !== "none" && A[Ee + 1]) || A[Ee]),
                        (yi =
                          r &&
                          (ye === "complete" || ye === "reset" || ye in r)))),
                    x &&
                      (Pe || yi) &&
                      (yi || h || !r) &&
                      (lt(x)
                        ? x(C)
                        : C.getTrailing(x).forEach(function (Mr) {
                            return Mr.endAnimation();
                          })),
                    I ||
                      (ae && !at && !Sn
                        ? (ae._dp._time - ae._start !== ae._time &&
                            ae.render(ae._dp._time - ae._start),
                          ae.resetTo
                            ? ae.resetTo(
                                "totalProgress",
                                le,
                                r._tTime / r._tDur
                              )
                            : ((ae.vars.totalProgress = le),
                              ae.invalidate().restart()))
                        : r && r.totalProgress(le, !!(at && (F || H)))),
                    p)
                  ) {
                    if ((H && f && (Oe.style[f + E.os2] = Ws), !D))
                      kt(Os(Ue + Oi * le));
                    else if (ci) {
                      if (
                        ((Xt =
                          !H && le > De && se + 1 > Q && Q + 1 >= gi(P, E)),
                        b)
                      )
                        if (!H && (dt || Xt)) {
                          var it = Ci(p, !0),
                            rt = Q - J;
                          Bc(
                            p,
                            fe,
                            it.top + (E === qe ? rt : 0) + He,
                            it.left + (E === qe ? 0 : rt) + He
                          );
                        } else Bc(p, Oe);
                      Ur(dt || Xt ? ti : ni),
                        (ki && le < 1 && dt) ||
                          kt(Ue + (le === 1 && !Xt ? Oi : 0));
                    }
                  }
                  _ && !j.tween && !at && !Sn && oi.restart(!0),
                    o &&
                      (Pe || (v && le && (le < 1 || !io))) &&
                      Ms(o.targets).forEach(function (Mr) {
                        return Mr.classList[dt || v ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !I && !H && a(C),
                    ci && !at
                      ? (I &&
                          (yi &&
                            (ye === "complete"
                              ? r.pause().totalProgress(1)
                              : ye === "reset"
                              ? r.restart(!0).pause()
                              : ye === "restart"
                              ? r.restart(!0)
                              : r[ye]()),
                          a && a(C)),
                        (Pe || !io) &&
                          (c && Pe && so(C, c),
                          z[Ee] && so(C, z[Ee]),
                          v && (le === 1 ? C.kill(!1, 1) : (z[Ee] = 0)),
                          Pe ||
                            ((Ee = le === 1 ? 1 : 3), z[Ee] && so(C, z[Ee]))),
                        M &&
                          !dt &&
                          Math.abs(C.getVelocity()) > (ks(M) ? M : 2500) &&
                          (Ls(C.callbackAnimation),
                          ae
                            ? ae.progress(1)
                            : Ls(r, ye === "reverse" ? 1 : !le, 1)))
                      : I && a && !at && a(C);
                }
                if (Jr) {
                  var ft = T ? (Q / T.duration()) * (T._caScrollDist || 0) : Q;
                  Vn(ft + (R._isFlipped ? 1 : 0)), Jr(ft);
                }
                ts && ts((-Q / T.duration()) * (T._caScrollDist || 0));
              }
            }),
            (C.enable = function (H, Z) {
              C.enabled ||
                ((C.enabled = !0),
                Ge(P, "resize", Ns),
                O || Ge(P, "scroll", jr),
                W && Ge(s, "refreshInit", W),
                H !== !1 && ((C.progress = N = 0), (xe = Te = ue = B())),
                Z !== !1 && C.refresh());
            }),
            (C.getTween = function (H) {
              return H && j ? j.tween : ae;
            }),
            (C.setPositions = function (H, Z, G, Q) {
              if (T) {
                var Ke = T.scrollTrigger,
                  le = T.duration(),
                  De = Ke.end - Ke.start;
                (H = Ke.start + (De * H) / le), (Z = Ke.start + (De * Z) / le);
              }
              C.refresh(
                !1,
                !1,
                {
                  start: _c(H, G && !!C._startClamp),
                  end: _c(Z, G && !!C._endClamp),
                },
                Q
              ),
                C.update();
            }),
            (C.adjustPinSpacing = function (H) {
              if (Be && H) {
                var Z = Be.indexOf(E.d) + 1;
                (Be[Z] = parseFloat(Be[Z]) + H + He),
                  (Be[1] = parseFloat(Be[1]) + H + He),
                  Ur(Be);
              }
            }),
            (C.disable = function (H, Z) {
              if (
                C.enabled &&
                (H !== !1 && C.revert(!0, !0),
                (C.enabled = C.isActive = !1),
                Z || (ae && ae.pause()),
                (li = 0),
                ce && (ce.uncache = 1),
                W && je(s, "refreshInit", W),
                oi && (oi.pause(), j.tween && j.tween.kill() && (j.tween = 0)),
                !O)
              ) {
                for (var G = te.length; G--; )
                  if (te[G].scroller === P && te[G] !== C) return;
                je(P, "resize", Ns), O || je(P, "scroll", jr);
              }
            }),
            (C.kill = function (H, Z) {
              C.disable(H, Z), ae && !Z && ae.kill(), l && delete co[l];
              var G = te.indexOf(C);
              G >= 0 && te.splice(G, 1),
                G === _t && Ln > 0 && _t--,
                (G = 0),
                te.forEach(function (Q) {
                  return Q.scroller === C.scroller && (G = 1);
                }),
                G || St || (C.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  H && r.revert({ kill: !1 }),
                  Z || r.kill()),
                _e &&
                  [_e, Ve, R, Fe].forEach(function (Q) {
                    return Q.parentNode && Q.parentNode.removeChild(Q);
                  }),
                Fs === C && (Fs = 0),
                p &&
                  (ce && (ce.uncache = 1),
                  (G = 0),
                  te.forEach(function (Q) {
                    return Q.pin === p && G++;
                  }),
                  G || (ce.spacer = 0)),
                i.onKill && i.onKill(C);
            }),
            te.push(C),
            C.enable(!1, !1),
            Li && Li(C),
            r && r.add && !ve)
          ) {
            var de = C.update;
            (C.update = function () {
              (C.update = de), ie.cache++, J || se || C.refresh();
            }),
              V.delayedCall(0.01, C.update),
              (ve = 0.01),
              (J = se = 0);
          } else C.refresh();
          p && Gp();
        }),
        (s.register = function (i) {
          return (
            Vr ||
              ((V = i || Tc()),
              xc() && window.document && s.enable(),
              (Vr = As)),
            Vr
          );
        }),
        (s.defaults = function (i) {
          if (i) for (var r in i) Cn[r] = i[r];
          return Cn;
        }),
        (s.disable = function (i, r) {
          (As = 0),
            te.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            je(re, "wheel", jr),
            je(we, "scroll", jr),
            clearInterval(wn),
            je(we, "touchcancel", mi),
            je(fe, "touchstart", mi),
            En(je, we, "pointerdown,touchstart,mousedown", bc),
            En(je, we, "pointerup,touchend,mouseup", Sc),
            yn.kill(),
            xn(je);
          for (var n = 0; n < ie.length; n += 3)
            Mn(je, ie[n], ie[n + 1]), Mn(je, ie[n], ie[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((re = window),
            (we = document),
            (qt = we.documentElement),
            (fe = we.body),
            V &&
              ((Ms = V.utils.toArray),
              (Cs = V.utils.clamp),
              (Qa = V.core.context || mi),
              (Ka = V.core.suppressOverwrites || mi),
              (Ja = re.history.scrollRestoration || "auto"),
              (po = re.pageYOffset || 0),
              V.core.globals("ScrollTrigger", s),
              fe))
          ) {
            (As = 1),
              (Yr = document.createElement("div")),
              (Yr.style.height = "100vh"),
              (Yr.style.position = "absolute"),
              $c(),
              Bp(),
              Ie.register(V),
              (s.isTouch = Ie.isTouch),
              (Gi =
                Ie.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Za = Ie.isTouch === 1),
              Ge(re, "wheel", jr),
              (ja = [re, we, qt, fe]),
              V.matchMedia
                ? ((s.matchMedia = function (c) {
                    var u = V.matchMedia(),
                      h;
                    for (h in c) u.add(h, c[h]);
                    return u;
                  }),
                  V.addEventListener("matchMediaInit", function () {
                    return fo();
                  }),
                  V.addEventListener("matchMediaRevert", function () {
                    return Dc();
                  }),
                  V.addEventListener("matchMedia", function () {
                    yr(0, 1), gr("matchMedia");
                  }),
                  V.matchMedia().add("(orientation: portrait)", function () {
                    return uo(), uo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              uo(),
              Ge(we, "scroll", jr);
            var i = fe.hasAttribute("style"),
              r = fe.style,
              n = r.borderTopStyle,
              a = V.core.Animation.prototype,
              o,
              l;
            for (
              a.revert ||
                Object.defineProperty(a, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                r.borderTopStyle = "solid",
                o = Ci(fe),
                qe.m = Math.round(o.top + qe.sc()) || 0,
                wt.m = Math.round(o.left + wt.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                i ||
                  (fe.setAttribute("style", ""), fe.removeAttribute("style")),
                wn = setInterval(Lc, 250),
                V.delayedCall(0.5, function () {
                  return (Sn = 0);
                }),
                Ge(we, "touchcancel", mi),
                Ge(fe, "touchstart", mi),
                En(Ge, we, "pointerdown,touchstart,mousedown", bc),
                En(Ge, we, "pointerup,touchend,mouseup", Sc),
                Ua = V.utils.checkPrefix("transform"),
                In.push(Ua),
                Vr = ot(),
                yn = V.delayedCall(0.2, yr).pause(),
                Wr = [
                  we,
                  "visibilitychange",
                  function () {
                    var c = re.innerWidth,
                      u = re.innerHeight;
                    we.hidden
                      ? ((pc = c), (hc = u))
                      : (pc !== c || hc !== u) && Ns();
                  },
                  we,
                  "DOMContentLoaded",
                  yr,
                  re,
                  "load",
                  yr,
                  re,
                  "resize",
                  Ns,
                ],
                xn(Ge),
                te.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < ie.length;
              l += 3
            )
              Mn(je, ie[l], ie[l + 1]), Mn(je, ie[l], ie[l + 2]);
          }
        }),
        (s.config = function (i) {
          "limitCallbacks" in i && (io = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(wn)) || ((wn = r) && setInterval(Lc, r)),
            "ignoreMobileResize" in i &&
              (Za = s.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (xn(je) || xn(Ge, i.autoRefreshEvents || "none"),
              (gc = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (i, r) {
          var n = Ot(i),
            a = ie.indexOf(n),
            o = dr(n);
          ~a && ie.splice(a, o ? 6 : 2),
            r && (o ? hi.unshift(re, r, fe, r, qt, r) : hi.unshift(n, r));
        }),
        (s.clearMatchMedia = function (i) {
          te.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (i, r, n) {
          var a = (Ht(i) ? Ot(i) : i).getBoundingClientRect(),
            o = a[n ? pr : hr] * r || 0;
          return n
            ? a.right - o > 0 && a.left + o < re.innerWidth
            : a.bottom - o > 0 && a.top + o < re.innerHeight;
        }),
        (s.positionInViewport = function (i, r, n) {
          Ht(i) && (i = Ot(i));
          var a = i.getBoundingClientRect(),
            o = a[n ? pr : hr],
            l =
              r == null
                ? o / 2
                : r in Pn
                ? Pn[r] * o
                : ~r.indexOf("%")
                ? (parseFloat(r) * o) / 100
                : parseFloat(r) || 0;
          return n
            ? (a.left + l) / re.innerWidth
            : (a.top + l) / re.innerHeight;
        }),
        (s.killAll = function (i) {
          if (
            (te.slice(0).forEach(function (n) {
              return n.vars.id !== "ScrollSmoother" && n.kill();
            }),
            i !== !0)
          ) {
            var r = mr.killAll || [];
            (mr = {}),
              r.forEach(function (n) {
                return n();
              });
          }
        }),
        s
      );
    })();
  (Y.version = "3.13.0"),
    (Y.saveStyles = function (s) {
      return s
        ? Ms(s).forEach(function (e) {
            if (e && e.style) {
              var t = Vt.indexOf(e);
              t >= 0 && Vt.splice(t, 5),
                Vt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  V.core.getCache(e),
                  Qa()
                );
            }
          })
        : Vt;
    }),
    (Y.revert = function (s, e) {
      return fo(!s, e);
    }),
    (Y.create = function (s, e) {
      return new Y(s, e);
    }),
    (Y.refresh = function (s) {
      return s ? Ns(!0) : (Vr || Y.register()) && yr(!0);
    }),
    (Y.update = function (s) {
      return ++ie.cache && Pi(s === !0 ? 2 : 0);
    }),
    (Y.clearScrollMemory = zc),
    (Y.maxScroll = function (s, e) {
      return gi(s, e ? wt : qe);
    }),
    (Y.getScrollFunc = function (s, e) {
      return Xi(Ot(s), e ? wt : qe);
    }),
    (Y.getById = function (s) {
      return co[s];
    }),
    (Y.getAll = function () {
      return te.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (Y.isScrolling = function () {
      return !!Qt;
    }),
    (Y.snapDirectional = lo),
    (Y.addEventListener = function (s, e) {
      var t = mr[s] || (mr[s] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (Y.removeEventListener = function (s, e) {
      var t = mr[s],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (Y.batch = function (s, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        n = e.batchMax || 1e9,
        a = function (c, u) {
          var h = [],
            m = [],
            p = V.delayedCall(r, function () {
              u(h, m), (h = []), (m = []);
            }).pause();
          return function (f) {
            h.length || p.restart(!0),
              h.push(f.trigger),
              m.push(f),
              n <= h.length && p.progress(1);
          };
        },
        o;
      for (o in e)
        i[o] =
          o.substr(0, 2) === "on" && lt(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        lt(n) &&
          ((n = n()),
          Ge(Y, "refresh", function () {
            return (n = e.batchMax());
          })),
        Ms(s).forEach(function (l) {
          var c = {};
          for (o in i) c[o] = i[o];
          (c.trigger = l), t.push(Y.create(c));
        }),
        t
      );
    });
  var Vc = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    go = function s(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Ie.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === qt && s(fe, t);
    },
    $n = { auto: 1, scroll: 1 },
    Qp = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        n = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = n._gsap || V.core.getCache(n),
        o = ot(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== fe &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !($n[(l = ei(n)).overflowY] || $n[l.overflowX]));

        )
          n = n.parentNode;
        (a._isScroll =
          n &&
          n !== i &&
          !dr(n) &&
          ($n[(l = ei(n)).overflowY] || $n[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Wc = function (e, t, i, r) {
      return Ie.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && Qp),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Ge(we, Ie.eventTypes[0], Xc, !1, !0);
        },
        onDisable: function () {
          return je(we, Ie.eventTypes[0], Xc, !0);
        },
      });
    },
    Jp = /(input|label|select|textarea)/i,
    Yc,
    Xc = function (e) {
      var t = Jp.test(e.target.tagName);
      (t || Yc) && ((e._gsapAllow = !0), (Yc = t));
    },
    eh = function (e) {
      fr(e) || (e = {}),
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
        l,
        c = Ot(e.target) || qt,
        u = V.core.globals().ScrollSmoother,
        h = u && u.get(),
        m =
          Gi &&
          ((e.content && Ot(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = Xi(c, qe),
        f = Xi(c, wt),
        d = 1,
        g =
          (Ie.isTouch && re.visualViewport
            ? re.visualViewport.scale * re.visualViewport.width
            : re.outerWidth) / re.innerWidth,
        w = 0,
        y = lt(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        v,
        _,
        b = Wc(c, e.type, !0, n),
        S = function () {
          return (_ = !1);
        },
        T = mi,
        M = mi,
        x = function () {
          (l = gi(c, qe)),
            (M = Cs(Gi ? 1 : 0, l)),
            i && (T = Cs(0, gi(c, wt))),
            (v = vr);
        },
        E = function () {
          (m._gsap.y = Os(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        I = function () {
          if (_) {
            requestAnimationFrame(S);
            var L = Os(o.deltaY / 2),
              $ = M(p.v - L);
            if (m && $ !== p.v + p.offset) {
              p.offset = $ - p.v;
              var C = Os((parseFloat(m && m._gsap.y) || 0) - p.offset);
              (m.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                C +
                ", 0, 1)"),
                (m._gsap.y = C + "px"),
                (p.cacheID = ie.cache),
                Pi();
            }
            return !0;
          }
          p.offset && E(), (_ = !0);
        },
        P,
        k,
        O,
        D,
        z = function () {
          x(),
            P.isActive() &&
              P.vars.scrollY > l &&
              (p() > l ? P.progress(1) && p(l) : P.resetTo("scrollY", l));
        };
      return (
        m && V.set(m, { y: "+=0" }),
        (e.ignoreCheck = function (A) {
          return (
            (Gi && A.type === "touchmove" && I()) ||
            (d > 1.05 && A.type !== "touchstart") ||
            o.isGesturing ||
            (A.touches && A.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          _ = !1;
          var A = d;
          (d = Os(((re.visualViewport && re.visualViewport.scale) || 1) / g)),
            P.pause(),
            A !== d && go(c, d > 1.01 ? !0 : i ? !1 : "x"),
            (k = f()),
            (O = p()),
            x(),
            (v = vr);
        }),
        (e.onRelease = e.onGestureStart =
          function (A, L) {
            if ((p.offset && E(), !L)) D.restart(!0);
            else {
              ie.cache++;
              var $ = y(),
                C,
                W;
              i &&
                ((C = f()),
                (W = C + ($ * 0.05 * -A.velocityX) / 0.227),
                ($ *= Vc(f, C, W, gi(c, wt))),
                (P.vars.scrollX = T(W))),
                (C = p()),
                (W = C + ($ * 0.05 * -A.velocityY) / 0.227),
                ($ *= Vc(p, C, W, gi(c, qe))),
                (P.vars.scrollY = M(W)),
                P.invalidate().duration($).play(0.01),
                ((Gi && P.vars.scrollY >= l) || C >= l - 1) &&
                  V.to({}, { onUpdate: z, duration: $ });
            }
            a && a(A);
          }),
        (e.onWheel = function () {
          P._ts && P.pause(), ot() - w > 1e3 && ((v = 0), (w = ot()));
        }),
        (e.onChange = function (A, L, $, C, W) {
          if (
            (vr !== v && x(),
            L && i && f(T(C[2] === L ? k + (A.startX - A.x) : f() + L - C[1])),
            $)
          ) {
            p.offset && E();
            var K = W[2] === $,
              pe = K ? O + A.startY - A.y : p() + $ - W[1],
              ue = M(pe);
            K && pe !== ue && (O += ue - pe), p(ue);
          }
          ($ || L) && Pi();
        }),
        (e.onEnable = function () {
          go(c, i ? !1 : "x"),
            Y.addEventListener("refresh", z),
            Ge(re, "resize", z),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = f.smooth = !1)),
            b.enable();
        }),
        (e.onDisable = function () {
          go(c, !0),
            je(re, "resize", z),
            Y.removeEventListener("refresh", z),
            b.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Ie(e)),
        (o.iOS = Gi),
        Gi && !p() && p(1),
        Gi && V.ticker.add(mi),
        (D = o._dc),
        (P = V.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: qc(p, p(), function () {
              return P.pause();
            }),
          },
          onUpdate: Pi,
          onComplete: D.vars.onComplete,
        })),
        o
      );
    };
  (Y.sort = function (s) {
    if (lt(s)) return te.sort(s);
    var e = re.pageYOffset || 0;
    return (
      Y.getAll().forEach(function (t) {
        return (t._sortY = t.trigger
          ? e + t.trigger.getBoundingClientRect().top
          : t.start + re.innerHeight);
      }),
      te.sort(
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
  }),
    (Y.observe = function (s) {
      return new Ie(s);
    }),
    (Y.normalizeScroll = function (s) {
      if (typeof s == "undefined") return bt;
      if (s === !0 && bt) return bt.enable();
      if (s === !1) {
        bt && bt.kill(), (bt = s);
        return;
      }
      var e = s instanceof Ie ? s : eh(s);
      return (
        bt && bt.target === e.target && bt.kill(), dr(e.target) && (bt = e), e
      );
    }),
    (Y.core = {
      _getVelocityProp: Ga,
      _inputObserver: Wc,
      _scrollers: ie,
      _proxies: hi,
      bridge: {
        ss: function () {
          Qt || gr("scrollStart"), (Qt = ot());
        },
        ref: function () {
          return at;
        },
      },
    }),
    Tc() && V.registerPlugin(Y),
    q.registerPlugin(Y);
  class wr {
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
          let a = wr.attr(100, e.getAttribute("marquee-speed")),
            o = wr.attr(!1, e.getAttribute("marquee-vertical")),
            l = wr.attr(!1, e.getAttribute("marquee-reverse")),
            c = wr.attr(!1, e.getAttribute("marquee-scrolldirection")),
            u = wr.attr(!1, e.getAttribute("marquee-scrollscrub")),
            h = -100,
            m = 1,
            p = !1;
          l && (h = 100);
          let f = q.timeline({
            repeat: -1,
            onReverseComplete: () => f.progress(1),
          });
          o
            ? ((a = i[0].offsetHeight / a),
              f.fromTo(
                i,
                { yPercent: 0 },
                { yPercent: h, ease: "none", duration: a }
              ))
            : ((a = i[0].offsetWidth / a),
              f.fromTo(
                i,
                { xPercent: 0 },
                { xPercent: h, ease: "none", duration: a }
              ));
          let d = { value: 1 };
          Y.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (w) => {
              if (
                !p &&
                (c &&
                  m !== w.direction &&
                  ((m = w.direction), f.timeScale(w.direction)),
                u)
              ) {
                let y = w.getVelocity() * 0.006;
                (y = q.utils.clamp(-60, 60, y)),
                  q
                    .timeline({ onUpdate: () => f.timeScale(d.value) })
                    .fromTo(d, { value: y }, { value: m, duration: 0.5 });
              }
            },
          });
          function g(w) {
            p = w;
            let y = { value: 1 },
              v = q.timeline({ onUpdate: () => f.timeScale(y.value) });
            w
              ? (v.fromTo(y, { value: m }, { value: 0, duration: 0.5 }),
                n.forEach((_) => _.setAttribute("marquee-status", "paused")))
              : (v.fromTo(y, { value: 0 }, { value: m, duration: 0.5 }),
                n.forEach((_) => _.setAttribute("marquee-status", "playing")));
          }
          window.matchMedia("(pointer: fine)").matches &&
            r.forEach((w) => {
              w.addEventListener("mouseenter", () => g(!0)),
                w.addEventListener("mouseleave", () => g(!1));
            }),
            n.forEach((w) => {
              w.addEventListener("click", function () {
                this.getAttribute("marquee-status") === "paused"
                  ? g(!1)
                  : g(!0);
              });
            });
        });
    }
  }
  function Bs() {
    new wr();
  }
  class th {
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
      this.swiper = new Tt("[swiper='review-slider']", {
        direction: "horizontal",
        slidesPerView: 1,
        on: {
          slideChange: function (t) {
            t.slides.forEach((i) => {
              i.setAttribute("card-status", "inactive");
            }),
              t.slides[t.activeIndex].setAttribute("card-status", "active");
          },
        },
        spaceBetween: 20,
        speed: 800,
        effect: "slide",
        autoplay: { delay: 5e3, disableOnInteraction: !1 },
        parallax: !0,
        pagination: {
          el: "[review-swiper='pagination']",
          clickable: !0,
          dynamicBullets: !0,
          dynamicMainBullets: 4,
        },
        loop: e,
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
  }
  function qs() {
    new th();
  }
  q.registerPlugin(Y);
  const ih = () => {
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
        l = r.querySelector("[service-scroll='svg-path-solid']"),
        c = e.querySelector("[service-intro='eyebrow']"),
        u = e.querySelector("[service-intro='heading']"),
        h = e.querySelector("[service-item='3d']"),
        m = e.querySelector("[service-header='3d']"),
        p = e.querySelector("[service-video-trigger='3d']"),
        f = document.querySelector("[visual-wrap='3d']"),
        d = e.querySelector("[service-item='2d']"),
        g = e.querySelector("[service-header='2d']"),
        w = e.querySelector("[service-video-trigger='2d']"),
        y = document.querySelector("[visual-wrap='2d']"),
        v = e.querySelector("[service-item='interactive']"),
        _ = e.querySelector("[service-header='interactive']"),
        b = e.querySelector("[service-video-trigger='interactive']"),
        S = document.querySelector("[visual-wrap='interactive']"),
        T = document.querySelectorAll("[service-list-item='wrapper']"),
        M = document.querySelectorAll("[service-list-item='3d']"),
        x = document.querySelectorAll("[service-list-icon='3d']");
      document.querySelectorAll("[service-list-text='3d']");
      const E = document.querySelectorAll("[service-list-item='2d']"),
        I = document.querySelectorAll("[service-list-icon='2d']");
      document.querySelectorAll("[service-list-text='2d']");
      const P = document.querySelectorAll("[service-list-item='interactive']"),
        k = document.querySelectorAll("[service-list-icon='interactive']");
      document.querySelectorAll("[service-list-text='interactive']");
      const O = q.timeline({
        scrollTrigger: {
          trigger: e,
          start: "top top",
          end: "+=450%",
          pin: !1,
          markers: !1,
          scrub: 1.2,
        },
      });
      O.fromTo(
        n,
        { rotate: 145, scale: 1.8 },
        { rotate: 0, scale: 1.2, duration: 1.8, ease: "power2.out" },
        `${s.SVG_LINE_START}%`
      ),
        O.to(
          c,
          { opacity: 0, y: -20, duration: 1, ease: "power2.in" },
          `${s.INTRO_OUT}`
        ),
        O.to(
          u,
          { opacity: 0, y: -20, duration: 1.8, ease: "power2.in" },
          `${s.INTRO_OUT}`
        ),
        O.fromTo(
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
        O.fromTo(
          l,
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
        O.fromTo(
          a,
          { scale: 0.6, rotate: 145, opacity: 0 },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 1.8,
            ease: "power2.out",
          },
          `${s.SVG_SM_IN}`
        ),
        O.fromTo(
          [h, m, p],
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
          },
          `${s.SERVICE_3D_IN}`
        ),
        O.to(
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
        O.fromTo(
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
        O.fromTo(
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
        O.fromTo(
          M,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_3D_IN}`
        ),
        O.fromTo(
          x,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_3D_IN}`
        ),
        O.to(
          [h, m, p],
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
        O.to(
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
        O.to(
          M,
          { opacity: 0.5, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_3D_OUT}`
        ),
        O.to(
          x,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_3D_OUT}`
        ),
        O.fromTo(
          [d, g, w],
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
          },
          `${s.SERVICE_2D_IN}`
        ),
        O.fromTo(
          y,
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
        O.fromTo(
          E,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_2D_IN}`
        ),
        O.fromTo(
          I,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_2D_IN}`
        ),
        O.to(
          n,
          { rotate: -90, duration: 1.8, ease: "power2.out" },
          `${s.SERVICE_2D_IN}`
        ),
        O.to(
          [d, g, w],
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
        O.to(
          y,
          {
            opacity: 0,
            scale: 1.1,
            filter: "blur(30px)",
            duration: 0.8,
            ease: "power2.in",
          },
          `${s.SERVICE_2D_OUT}`
        ),
        O.to(
          E,
          { opacity: 0.5, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_2D_OUT}`
        ),
        O.to(
          I,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_2D_OUT}`
        ),
        O.fromTo(
          [v, _, b],
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
          },
          `${s.SERVICE_INTERACTIVE_IN}`
        ),
        O.fromTo(
          S,
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
        O.fromTo(
          P,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_INTERACTIVE_LIST}`
        ),
        O.fromTo(
          k,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_INTERACTIVE_LIST}`
        );
    },
    rh = () => {
      ih();
    },
    sh = () => {
      rh();
    };
  var nh = "1.2.3";
  function Gc(s, e, t) {
    return Math.max(s, Math.min(e, t));
  }
  function ah(s, e, t) {
    return (1 - t) * s + t * e;
  }
  function oh(s, e, t, i) {
    return ah(s, e, 1 - Math.exp(-t * i));
  }
  function lh(s, e) {
    return ((s % e) + e) % e;
  }
  var ch = class {
    constructor() {
      X(this, "isRunning", !1);
      X(this, "value", 0);
      X(this, "from", 0);
      X(this, "to", 0);
      X(this, "currentTime", 0);
      X(this, "lerp");
      X(this, "duration");
      X(this, "easing");
      X(this, "onUpdate");
    }
    advance(s) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += s;
        const i = Gc(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = oh(this.value, this.to, this.lerp * 60, s)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(),
        (t = this.onUpdate) == null || t.call(this, this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(s, e, { lerp: t, duration: i, easing: r, onStart: n, onUpdate: a }) {
      (this.from = this.value = s),
        (this.to = e),
        (this.lerp = t),
        (this.duration = i),
        (this.easing = r),
        (this.currentTime = 0),
        (this.isRunning = !0),
        n == null || n(),
        (this.onUpdate = a);
    }
  };
  function uh(s, e) {
    let t;
    return function (...i) {
      let r = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), s.apply(r, i);
        }, e));
    };
  }
  var dh = class {
      constructor(s, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
        X(this, "width", 0);
        X(this, "height", 0);
        X(this, "scrollHeight", 0);
        X(this, "scrollWidth", 0);
        X(this, "debouncedResize");
        X(this, "wrapperResizeObserver");
        X(this, "contentResizeObserver");
        X(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        X(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        X(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = s),
          (this.content = e),
          t &&
            ((this.debouncedResize = uh(this.resize, i)),
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
        var s, e;
        (s = this.wrapperResizeObserver) == null || s.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect(),
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
    },
    jc = class {
      constructor() {
        X(this, "events", {});
      }
      emit(s, ...e) {
        var i;
        let t = this.events[s] || [];
        for (let r = 0, n = t.length; r < n; r++)
          (i = t[r]) == null || i.call(t, ...e);
      }
      on(s, e) {
        var t;
        return (
          ((t = this.events[s]) != null && t.push(e)) || (this.events[s] = [e]),
          () => {
            var i;
            this.events[s] =
              (i = this.events[s]) == null ? void 0 : i.filter((r) => e !== r);
          }
        );
      }
      off(s, e) {
        var t;
        this.events[s] =
          (t = this.events[s]) == null ? void 0 : t.filter((i) => e !== i);
      }
      destroy() {
        this.events = {};
      }
    },
    Uc = 100 / 6,
    ji = { passive: !1 },
    fh = class {
      constructor(s, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        X(this, "touchStart", { x: 0, y: 0 });
        X(this, "lastDelta", { x: 0, y: 0 });
        X(this, "window", { width: 0, height: 0 });
        X(this, "emitter", new jc());
        X(this, "onTouchStart", (s) => {
          const { clientX: e, clientY: t } = s.targetTouches
            ? s.targetTouches[0]
            : s;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s });
        });
        X(this, "onTouchMove", (s) => {
          const { clientX: e, clientY: t } = s.targetTouches
              ? s.targetTouches[0]
              : s,
            i = -(e - this.touchStart.x) * this.options.touchMultiplier,
            r = -(t - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: i, y: r }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: s });
        });
        X(this, "onTouchEnd", (s) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: s,
          });
        });
        X(this, "onWheel", (s) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = s;
          const r = i === 1 ? Uc : i === 2 ? this.window.width : 1,
            n = i === 1 ? Uc : i === 2 ? this.window.height : 1;
          (e *= r),
            (t *= n),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: s });
        });
        X(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = s),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, ji),
          this.element.addEventListener("touchstart", this.onTouchStart, ji),
          this.element.addEventListener("touchmove", this.onTouchMove, ji),
          this.element.addEventListener("touchend", this.onTouchEnd, ji);
      }
      on(s, e) {
        return this.emitter.on(s, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, ji),
          this.element.removeEventListener("touchstart", this.onTouchStart, ji),
          this.element.removeEventListener("touchmove", this.onTouchMove, ji),
          this.element.removeEventListener("touchend", this.onTouchEnd, ji);
      }
    },
    ph = class {
      constructor({
        wrapper: s = window,
        content: e = document.documentElement,
        eventsTarget: t = s,
        smoothWheel: i = !0,
        syncTouch: r = !1,
        syncTouchLerp: n = 0.075,
        touchInertiaMultiplier: a = 35,
        duration: o,
        easing: l = (S) => Math.min(1, 1.001 - Math.pow(2, -10 * S)),
        lerp: c = 0.1,
        infinite: u = !1,
        orientation: h = "vertical",
        gestureOrientation: m = "vertical",
        touchMultiplier: p = 1,
        wheelMultiplier: f = 1,
        autoResize: d = !0,
        prevent: g,
        virtualScroll: w,
        overscroll: y = !0,
        autoRaf: v = !1,
        anchors: _ = !1,
        __experimental__naiveDimensions: b = !1,
      } = {}) {
        X(this, "_isScrolling", !1);
        X(this, "_isStopped", !1);
        X(this, "_isLocked", !1);
        X(this, "_preventNextNativeScrollEvent", !1);
        X(this, "_resetVelocityTimeout", null);
        X(this, "__rafID", null);
        X(this, "isTouching");
        X(this, "time", 0);
        X(this, "userData", {});
        X(this, "lastVelocity", 0);
        X(this, "velocity", 0);
        X(this, "direction", 0);
        X(this, "options");
        X(this, "targetScroll");
        X(this, "animatedScroll");
        X(this, "animate", new ch());
        X(this, "emitter", new jc());
        X(this, "dimensions");
        X(this, "virtualScroll");
        X(this, "onScrollEnd", (s) => {
          s instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              s.stopPropagation());
        });
        X(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        X(this, "onClick", (s) => {
          const t = s.composedPath().find((i) => {
            var r, n, a;
            return (
              i instanceof HTMLAnchorElement &&
              (((r = i.getAttribute("href")) == null
                ? void 0
                : r.startsWith("#")) ||
                ((n = i.getAttribute("href")) == null
                  ? void 0
                  : n.startsWith("/#")) ||
                ((a = i.getAttribute("href")) == null
                  ? void 0
                  : a.startsWith("./#")))
            );
          });
          if (t) {
            const i = t.getAttribute("href");
            if (i) {
              const r =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              this.scrollTo(`#${i.split("#")[1]}`, r);
            }
          }
        });
        X(this, "onPointerDown", (s) => {
          s.button === 1 && this.reset();
        });
        X(this, "onVirtualScroll", (s) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(s) === !1
          )
            return;
          const { deltaX: e, deltaY: t, event: i } = s;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: t,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          const r = i.type.includes("touch"),
            n = i.type.includes("wheel");
          this.isTouching = i.type === "touchstart" || i.type === "touchmove";
          const a = e === 0 && t === 0;
          if (
            this.options.syncTouch &&
            r &&
            i.type === "touchstart" &&
            a &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const l =
            (this.options.gestureOrientation === "vertical" && t === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (a || l) return;
          let c = i.composedPath();
          c = c.slice(0, c.indexOf(this.rootElement));
          const u = this.options.prevent;
          if (
            c.find((g) => {
              var w, y, v;
              return (
                g instanceof HTMLElement &&
                ((typeof u == "function" && (u == null ? void 0 : u(g))) ||
                  ((w = g.hasAttribute) == null
                    ? void 0
                    : w.call(g, "data-lenis-prevent")) ||
                  (r &&
                    ((y = g.hasAttribute) == null
                      ? void 0
                      : y.call(g, "data-lenis-prevent-touch"))) ||
                  (n &&
                    ((v = g.hasAttribute) == null
                      ? void 0
                      : v.call(g, "data-lenis-prevent-wheel"))))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            i.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && r) || (this.options.smoothWheel && n))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (i.lenisStopPropagation = !0);
            return;
          }
          let m = t;
          this.options.gestureOrientation === "both"
            ? (m = Math.abs(t) > Math.abs(e) ? t : e)
            : this.options.gestureOrientation === "horizontal" && (m = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && t > 0) ||
                  (this.animatedScroll === this.limit && t < 0)))) &&
              (i.lenisStopPropagation = !0),
            i.preventDefault();
          const p = r && this.options.syncTouch,
            d = r && i.type === "touchend" && Math.abs(m) > 5;
          d && (m = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + m,
              Xn(
                { programmatic: !1 },
                p
                  ? { lerp: d ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }
              )
            );
        });
        X(this, "onNativeScroll", () => {
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
            const s = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - s),
              (this.direction = Math.sign(this.animatedScroll - s)),
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
        });
        X(this, "raf", (s) => {
          const e = s - (this.time || s);
          (this.time = s),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = nh),
          (!s || s === document.documentElement) && (s = window),
          (this.options = {
            wrapper: s,
            content: e,
            eventsTarget: t,
            smoothWheel: i,
            syncTouch: r,
            syncTouchLerp: n,
            touchInertiaMultiplier: a,
            duration: o,
            easing: l,
            lerp: c,
            infinite: u,
            gestureOrientation: m,
            orientation: h,
            touchMultiplier: p,
            wheelMultiplier: f,
            autoResize: d,
            prevent: g,
            virtualScroll: w,
            overscroll: y,
            autoRaf: v,
            anchors: _,
            __experimental__naiveDimensions: b,
          }),
          (this.dimensions = new dh(s, e, { autoResize: d })),
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
          (this.virtualScroll = new fh(t, {
            touchMultiplier: p,
            wheelMultiplier: f,
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
      on(s, e) {
        return this.emitter.on(s, e);
      }
      off(s, e) {
        return this.emitter.off(s, e);
      }
      setScroll(s) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: s, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: s, behavior: "instant" });
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
        s,
        {
          offset: e = 0,
          immediate: t = !1,
          lock: i = !1,
          duration: r = this.options.duration,
          easing: n = this.options.easing,
          lerp: a = this.options.lerp,
          onStart: o,
          onComplete: l,
          force: c = !1,
          programmatic: u = !0,
          userData: h,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !c)) {
          if (typeof s == "string" && ["top", "left", "start"].includes(s))
            s = 0;
          else if (
            typeof s == "string" &&
            ["bottom", "right", "end"].includes(s)
          )
            s = this.limit;
          else {
            let m;
            if (
              (typeof s == "string"
                ? (m = document.querySelector(s))
                : s instanceof HTMLElement &&
                  s != null &&
                  s.nodeType &&
                  (m = s),
              m)
            ) {
              if (this.options.wrapper !== window) {
                const f = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? f.left : f.top;
              }
              const p = m.getBoundingClientRect();
              s = (this.isHorizontal ? p.left : p.top) + this.animatedScroll;
            }
          }
          if (typeof s == "number") {
            if (
              ((s += e),
              (s = Math.round(s)),
              this.options.infinite
                ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                : (s = Gc(0, s, this.limit)),
              s === this.targetScroll)
            ) {
              o == null || o(this), l == null || l(this);
              return;
            }
            if (((this.userData = h != null ? h : {}), t)) {
              (this.animatedScroll = this.targetScroll = s),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l == null || l(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            u || (this.targetScroll = s),
              this.animate.fromTo(this.animatedScroll, s, {
                duration: r,
                easing: n,
                lerp: a,
                onStart: () => {
                  i && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    o == null || o(this);
                },
                onUpdate: (m, p) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = m - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = m),
                    this.setScroll(this.scroll),
                    u && (this.targetScroll = m),
                    p || this.emit(),
                    p &&
                      (this.reset(),
                      this.emit(),
                      l == null || l(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent());
                },
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
        var e, t;
        const s = this.options.wrapper;
        return this.isHorizontal
          ? (e = s.scrollX) != null
            ? e
            : s.scrollLeft
          : (t = s.scrollY) != null
          ? t
          : s.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? lh(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(s) {
        this._isScrolling !== s &&
          ((this._isScrolling = s), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(s) {
        this._isStopped !== s &&
          ((this._isStopped = s), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(s) {
        this._isLocked !== s && ((this._isLocked = s), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let s = "lenis";
        return (
          this.isStopped && (s += " lenis-stopped"),
          this.isLocked && (s += " lenis-locked"),
          this.isScrolling && (s += " lenis-scrolling"),
          this.isScrolling === "smooth" && (s += " lenis-smooth"),
          s
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
    };
  q.registerPlugin(Y);
  let Nn;
  const hh = () => {
      (Nn = new ph({ autoRaf: !0 })),
        Nn.on("scroll", Y.update),
        q.ticker.add((s) => {
          Nn.raf(s * 1e3);
        }),
        q.ticker.lagSmoothing(0);
    },
    mh = () => {
      hh();
    },
    ct = () => Nn;
  q.registerPlugin(Y);
  const gh = () => {
      const s = document.querySelectorAll('[hero-parallax="visual"]'),
        e = document.querySelector('[hero-parallax="header"]');
      if (!s.length && !e) return;
      const t = ct == null ? void 0 : ct();
      if (
        (Y.defaults({ scroller: t ? t.wrapper : void 0 }),
        s.forEach((i) => {
          const r = parseFloat(i.getAttribute("parallax-speed")) || 0.6;
          q.fromTo(
            i,
            { yPercent: 0, scale: 1, filter: "blur(0px)" },
            {
              yPercent: -r * 100,
              scale: 1.2,
              filter: "blur(5px)",
              ease: "none",
              scrollTrigger: {
                trigger: i.parentElement,
                start: "top top",
                end: "bottom top",
                scrub: !0,
                invalidateOnRefresh: !0,
              },
            }
          );
        }),
        e)
      ) {
        const i = parseFloat(e.getAttribute("parallax-speed")) || 3.5;
        q.fromTo(
          e,
          { yPercent: 0, scale: 1 },
          {
            yPercent: -i * 100,
            scale: 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: s[0].parentElement,
              start: "top top",
              end: "bottom top",
              scrub: !0,
              invalidateOnRefresh: !0,
            },
          }
        );
      }
    },
    vh = () => {
      gh();
    },
    yh = () => {
      const s = document.querySelectorAll("[video-modal-trigger]");
      let e = null;
      const t = (i, r) => {
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
        q.to(i, n[r]);
      };
      s.forEach((i) => {
        const r = i.getAttribute("video-modal-trigger"),
          n = document.querySelector(`[video-modal-target="${r}"]`),
          a = document.querySelector(`[video-modal-close="${r}"]`);
        if (!n || !a) {
          console.error(`Missing target or close element for modal ID: ${r}`);
          return;
        }
        q.set(n, {
          clipPath: "inset(50% round 16px)",
          pointerEvents: "none",
          scale: 1.2,
          filter: "blur(5px)",
        });
        const o = () => {
            e && e !== n && t(e, "close"), t(n, "open"), (e = n);
          },
          l = () => {
            t(n, "close"), e === n && (e = null);
          };
        i.addEventListener("click", () => {
          const c = ct();
          e === n ? (l(), c.start()) : (o(), c.stop());
        }),
          a.addEventListener("click", () => {
            e === n && (l(), ct().start());
          });
      }),
        document.addEventListener("keydown", (i) => {
          i.key === "Escape" && e && (t(e, "close"), ct().start(), (e = null));
        });
    },
    wh = () => {
      yh();
    };
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let Hs,
    Kr,
    vo,
    _h = () => vo || Ai.register(window.gsap),
    Kc = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    Fn = (s) =>
      typeof s == "string"
        ? Fn(document.querySelectorAll(s))
        : "length" in s
        ? Array.from(s)
        : [s],
    Zc = (s) => Fn(s).filter((e) => e instanceof HTMLElement),
    yo = [],
    wo = function () {},
    bh = /\s+/g,
    Qc = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    Jc = { left: 0, top: 0, width: 0, height: 0 },
    eu = (s, e) => {
      if (e) {
        let t = new Set(s.join("").match(e) || yo),
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
    },
    tu = (s) =>
      window.getComputedStyle(s).display === "inline" &&
      (s.style.display = "inline-block"),
    Zr = (s, e, t) =>
      e.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, t),
    _o = (s, e, t) => {
      let i = e[s + "sClass"] || "",
        { tag: r = "div", aria: n = "auto", propIndex: a = !1 } = e,
        o = s === "line" ? "block" : "inline-block",
        l = i.indexOf("++") > -1,
        c = (u) => {
          let h = document.createElement(r),
            m = t.length + 1;
          return (
            i && (h.className = i + (l ? " " + i + m : "")),
            a && h.style.setProperty("--" + s, m + ""),
            n !== "none" && h.setAttribute("aria-hidden", "true"),
            r !== "span" &&
              ((h.style.position = "relative"), (h.style.display = o)),
            (h.textContent = u),
            t.push(h),
            h
          );
        };
      return l && (i = i.replace("++", "")), (c.collection = t), c;
    },
    Sh = (s, e, t, i) => {
      let r = _o("line", t, i),
        n = window.getComputedStyle(s).textAlign || "left";
      return (a, o) => {
        let l = r("");
        for (l.style.textAlign = n, s.insertBefore(l, e[a]); a < o; a++)
          l.appendChild(e[a]);
        l.normalize();
      };
    },
    iu = (s, e, t, i, r, n, a, o, l, c) => {
      var u;
      let h = Array.from(s.childNodes),
        m = 0,
        { wordDelimiter: p, reduceWhiteSpace: f = !0, prepareText: d } = e,
        g = s.getBoundingClientRect(),
        w = g,
        y =
          !f && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre",
        v = 0,
        _ = t.collection,
        b,
        S,
        T,
        M,
        x,
        E,
        I,
        P,
        k,
        O,
        D,
        z,
        A,
        L,
        $,
        C,
        W,
        K;
      for (
        typeof p == "object"
          ? ((T = p.delimiter || p), (S = p.replaceWith || ""))
          : (S = p === "" ? "" : p || " "),
          b = S !== " ";
        m < h.length;
        m++
      )
        if (((M = h[m]), M.nodeType === 3)) {
          for (
            $ = M.textContent || "",
              f
                ? ($ = $.replace(bh, " "))
                : y &&
                  ($ = $.replace(
                    /\n/g,
                    S +
                      `
`
                  )),
              d && ($ = d($, s)),
              M.textContent = $,
              x = S || T ? $.split(T || S) : $.match(o) || yo,
              W = x[x.length - 1],
              P = b ? W.slice(-1) === " " : !W,
              W || x.pop(),
              w = g,
              I = b ? x[0].charAt(0) === " " : !x[0],
              I && Zr(" ", s, M),
              x[0] || x.shift(),
              eu(x, l),
              (n && c) || (M.textContent = ""),
              k = 1;
            k <= x.length;
            k++
          )
            if (
              ((C = x[k - 1]),
              !f &&
                y &&
                C.charAt(0) ===
                  `
` &&
                ((u = M.previousSibling) == null || u.remove(),
                Zr(document.createElement("br"), s, M),
                (C = C.slice(1))),
              !f && C === "")
            )
              Zr(S, s, M);
            else if (C === " ") s.insertBefore(document.createTextNode(" "), M);
            else {
              if (
                (b && C.charAt(0) === " " && Zr(" ", s, M),
                v && k === 1 && !I && _.indexOf(v.parentNode) > -1
                  ? ((E = _[_.length - 1]),
                    E.appendChild(document.createTextNode(i ? "" : C)))
                  : ((E = t(i ? "" : C)),
                    Zr(E, s, M),
                    v && k === 1 && !I && E.insertBefore(v, E.firstChild)),
                i)
              )
                for (
                  D = Kc
                    ? eu(
                        [...Kc.segment(C)].map((pe) => pe.segment),
                        l
                      )
                    : C.match(o) || yo,
                    K = 0;
                  K < D.length;
                  K++
                )
                  E.appendChild(
                    D[K] === " " ? document.createTextNode(" ") : i(D[K])
                  );
              if (n && c) {
                if (
                  (($ = M.textContent = $.substring(C.length + 1, $.length)),
                  (O = E.getBoundingClientRect()),
                  O.top > w.top && O.left <= w.left)
                ) {
                  for (z = s.cloneNode(), A = s.childNodes[0]; A && A !== E; )
                    (L = A), (A = A.nextSibling), z.appendChild(L);
                  s.parentNode.insertBefore(z, s), r && tu(z);
                }
                w = O;
              }
              (k < x.length || P) &&
                Zr(
                  k >= x.length ? " " : b && C.slice(-1) === " " ? " " + S : S,
                  s,
                  M
                );
            }
          s.removeChild(M), (v = 0);
        } else
          M.nodeType === 1 &&
            (a && a.indexOf(M) > -1
              ? (_.indexOf(M.previousSibling) > -1 &&
                  _[_.length - 1].appendChild(M),
                (v = M))
              : (iu(M, e, t, i, r, n, a, o, l, !0), (v = 0)),
            r && tu(M));
    };
  const ru = class Cu {
    constructor(e, t) {
      (this.isSplit = !1),
        _h(),
        (this.elements = Zc(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = t),
        (this._split = () => this.isSplit && this.split(this.vars));
      let i = [],
        r,
        n = () => {
          let a = i.length,
            o;
          for (; a--; ) {
            o = i[a];
            let l = o.element.offsetWidth;
            if (l !== o.width) {
              (o.width = l), this._split();
              return;
            }
          }
        };
      (this._data = {
        orig: i,
        obs:
          typeof ResizeObserver != "undefined" &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(n, 200));
          }),
      }),
        wo(this),
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
          specialChars: l,
          mask: c,
        } = this.vars,
        u = t.indexOf("lines") > -1,
        h = t.indexOf("chars") > -1,
        m = t.indexOf("words") > -1,
        p = h && !m && !u,
        f =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        d = f ? new RegExp(f.source + "|" + Qc.source, "gu") : Qc,
        g = !!e.ignore && Zc(e.ignore),
        { orig: w, animTime: y, obs: v } = this._data,
        _;
      return (
        (h || m || u) &&
          (this.elements.forEach((b, S) => {
            (w[S] = {
              element: b,
              html: b.innerHTML,
              ariaL: b.getAttribute("aria-label"),
              ariaH: b.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? b.setAttribute("aria-label", (b.textContent || "").trim())
                : i === "hidden" && b.setAttribute("aria-hidden", "true");
            let T = [],
              M = [],
              x = [],
              E = h ? _o("char", e, T) : null,
              I = _o("word", e, M),
              P,
              k,
              O,
              D;
            if ((iu(b, e, I, E, p, r && (u || p), g, d, f, !1), u)) {
              let z = Fn(b.childNodes),
                A = Sh(b, z, e, x),
                L,
                $ = [],
                C = 0,
                W = z.map((pe) =>
                  pe.nodeType === 1 ? pe.getBoundingClientRect() : Jc
                ),
                K = Jc;
              for (P = 0; P < z.length; P++)
                (L = z[P]),
                  L.nodeType === 1 &&
                    (L.nodeName === "BR"
                      ? ($.push(L), A(C, P + 1), (C = P + 1), (K = W[C]))
                      : (P &&
                          W[P].top > K.top &&
                          W[P].left <= K.left &&
                          (A(C, P), (C = P)),
                        (K = W[P])));
              C < P && A(C, P),
                $.forEach((pe) => {
                  var ue;
                  return (ue = pe.parentNode) == null
                    ? void 0
                    : ue.removeChild(pe);
                });
            }
            if (!m) {
              for (P = 0; P < M.length; P++)
                if (
                  ((k = M[P]),
                  h || !k.nextSibling || k.nextSibling.nodeType !== 3)
                )
                  if (n && !u) {
                    for (
                      O = document.createElement("span"),
                        O.style.whiteSpace = "nowrap";
                      k.firstChild;

                    )
                      O.appendChild(k.firstChild);
                    k.replaceWith(O);
                  } else k.replaceWith(...k.childNodes);
                else
                  (D = k.nextSibling),
                    D &&
                      D.nodeType === 3 &&
                      ((D.textContent =
                        (k.textContent || "") + (D.textContent || "")),
                      k.remove());
              (M.length = 0), b.normalize();
            }
            this.lines.push(...x), this.words.push(...M), this.chars.push(...T);
          }),
          c &&
            this[c] &&
            this.masks.push(
              ...this[c].map((b) => {
                let S = b.cloneNode();
                return (
                  b.replaceWith(S),
                  S.appendChild(b),
                  b.className &&
                    (S.className = b.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (S.style.overflow = "clip"),
                  S
                );
              })
            )),
        (this.isSplit = !0),
        Kr &&
          (o
            ? Kr.addEventListener("loadingdone", this._split)
            : Kr.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (_ = a && a(this)) &&
          _.totalTime &&
          (this._data.anim = y ? _.totalTime(y) : _),
        u &&
          o &&
          this.elements.forEach((b, S) => {
            (w[S].width = b.offsetWidth), v && v.observe(b);
          }),
        this
      );
    }
    revert() {
      var e, t;
      let { orig: i, anim: r, obs: n } = this._data;
      return (
        n && n.disconnect(),
        i.forEach(({ element: a, html: o, ariaL: l, ariaH: c }) => {
          (a.innerHTML = o),
            l
              ? a.setAttribute("aria-label", l)
              : a.removeAttribute("aria-label"),
            c
              ? a.setAttribute("aria-hidden", c)
              : a.removeAttribute("aria-hidden");
        }),
        (this.chars.length =
          this.words.length =
          this.lines.length =
          i.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        Kr == null || Kr.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new Cu(e, t);
    }
    static register(e) {
      (Hs = Hs || e || window.gsap),
        Hs && ((Fn = Hs.utils.toArray), (wo = Hs.core.context || wo)),
        !vo && window.innerWidth > 0 && ((Kr = document.fonts), (vo = !0));
    }
  };
  ru.version = "3.13.0";
  let Ai = ru;
  q.registerPlugin(Y, Ai);
  const xh = () => {
      document.querySelectorAll("[list-enter='wrap']").forEach((e) => {
        e.querySelectorAll("[list-enter='item']").forEach((i) => {
          const r = i.querySelector("[list-enter='icon']"),
            n = i.querySelector("[list-enter='text']"),
            a = i.querySelector("[list-enter='line']"),
            o = new Ai(n, { type: "lines", linesClass: "split-line" });
          o.lines.forEach((l) => {
            const c = document.createElement("div");
            c.classList.add("line-wrapper"),
              (c.style.overflow = "hidden"),
              l.parentNode.insertBefore(c, l),
              c.appendChild(l);
          }),
            i.querySelectorAll(".line-wrapper"),
            q.set(a, { transformOrigin: "left" }),
            q
              .timeline({
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
    },
    Th = () => {
      xh();
    },
    Eh = () => {
      console.log("homeInit"), os(), Bs(), qs(), sh(), vh(), wh(), Th();
    },
    Mh = () => {
      const s = document.querySelectorAll('[team-modal="open-trigger"]'),
        e = document.querySelectorAll('[team-modal="modal"]');
      !s ||
        !e ||
        e.forEach((t, i) => {
          const r = t.querySelector('[team-modal="component"]'),
            n = t.querySelector('[team-modal="top-wrap"]'),
            a = t.querySelector('[team-modal="main-info"]'),
            o = t.querySelector('[team-modal="sec-info"]'),
            l = t.querySelectorAll('[team-modal="close-trigger"]');
          if (!r || !n || !a || !o) return;
          q.set(t, {
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
            display: "none",
          }),
            q.set(r, { clipPath: "inset(0% 0% 0% 100%)" }),
            q.set([n, a, o], { y: 100, opacity: 0, filter: "blur(5px)" });
          const c = q.timeline({ paused: !0 }),
            u = q.timeline({ paused: !0 });
          c.to(t, {
            opacity: 1,
            pointerEvents: "auto",
            visibility: "visible",
            display: "block",
            ease: "expo.out",
            duration: 0.6,
          }),
            c.to(
              r,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "expo.inOut",
                duration: 1.2,
              },
              "-=0.75"
            ),
            c.to(
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
            u.to([n, a, o], {
              y: 100,
              opacity: 0,
              filter: "blur(5px)",
              ease: "expo.out",
              duration: 0.8,
              stagger: -0.14,
            }),
            u.to(
              r,
              {
                clipPath: "inset(0% 0% 0% 100%)",
                ease: "expo.inOut",
                duration: 1,
              },
              "-=0.8"
            ),
            u.to(
              t,
              {
                opacity: 0,
                ease: "expo.in",
                duration: 0.8,
                pointerEvents: "none",
                onComplete: () => {
                  (t.style.visibility = "hidden"),
                    (t.style.display = "none"),
                    (t.style.pointerEvents = "none");
                },
              },
              "<"
            );
          const h = s[i];
          h &&
            h.addEventListener("click", () => {
              c.restart();
              const m = ct();
              m && m.stop();
            }),
            l.forEach((m) => {
              m.addEventListener("click", () => {
                u.restart();
                const p = ct();
                p && p.start();
              });
            });
        });
    },
    Ch = () => {
      Mh();
    };
  q.registerPlugin(Y);
  const Ph = () => {
      document.querySelectorAll("[about-list='layout']").forEach((e) => {
        const t = e.querySelectorAll("[about-list='item']");
        q.utils.selector(e),
          t.forEach((i, r) => {
            const n = i.querySelector("[about-list='content']"),
              a = i.querySelector("[about-list='inner-line']");
            q.set(n, { opacity: 0.4 }),
              q.set(a, { scaleX: 0, transformOrigin: "left center" });
            const o = 85 - r * 20,
              l = 40 - r * 20;
            q.to(n, {
              opacity: 1,
              scrollTrigger: {
                trigger: i,
                start: `top ${o}%`,
                end: `top ${l}%`,
                scrub: !0,
                markers: !1,
              },
            }),
              q.to(a, {
                scaleX: 1,
                transformOrigin: "left center",
                scrollTrigger: {
                  trigger: i,
                  start: `top ${o}%`,
                  end: `top ${l}%`,
                  scrub: !0,
                  markers: !1,
                },
              });
          });
      });
    },
    Ah = () => {
      Ph();
    };
  q.registerPlugin(Y, Ai);
  const Oh = () => {
      document.querySelectorAll("[rollover-text='wrap']").forEach((e) => {
        const t = e.querySelector("[rollover-text='wrap-rel']"),
          i =
            t == null ? void 0 : t.querySelector("[rollover-text='text-rel']"),
          r = e.querySelector("[rollover-text='wrap-ab']"),
          n = r == null ? void 0 : r.querySelector("[rollover-text='text-ab']");
        if (!t || !i || !r || !n) return;
        const a = new Ai(i, { type: "chars" }),
          o = new Ai(n, { type: "chars" }),
          l = 1.8,
          c = "expo.inOut",
          u = 0.08,
          h = -100,
          m = 0;
        q.set(t, { yPercent: 0 }),
          q.set(r, { yPercent: 0 }),
          q.set(a.chars, { yPercent: 0 }),
          q.set(o.chars, { yPercent: 100 });
        const p = q.timeline({
          scrollTrigger: {
            trigger: e,
            markers: !1,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        });
        p.to(a.chars, { yPercent: h, ease: c, duration: l, stagger: u }, 0),
          p.to(o.chars, { yPercent: m, ease: c, duration: l, stagger: u }, 0);
      });
    },
    kh = () => {
      Oh();
    },
    Lh = () => {
      os(), Bs(), qs(), Ch(), Ah(), kh();
    },
    su = (s) => document.querySelector(s),
    Ih = (s) => document.querySelectorAll(s),
    Dh = (s, e) => s.classList.add(e),
    zh = () => {
      const s = su(".contact-form");
      s &&
        s.addEventListener("submit", (e) => {
          e.preventDefault(), console.log("Form submitted!");
        });
    },
    Rh = () => {
      document.querySelectorAll('[filter-list="group"]').forEach((e) => {
        const t = e.querySelector('[filter-item="current"]'),
          i = e.querySelector("[list-filter='toggle']"),
          r = e.querySelector("[list-filter='dropdown-wrap']"),
          n = e.querySelectorAll("[list-filter='dropdown-option']"),
          a = e.querySelectorAll("[list-filter='target-item']"),
          o = 300,
          l = new Set(),
          c = (f, d) => {
            f.setAttribute("filter-status", d);
          },
          u = (f) => {
            const d = f.querySelectorAll("[filter-name]");
            return Array.from(d).map((g) => {
              var w;
              return (w = g.getAttribute("filter-name")) == null
                ? void 0
                : w.toLowerCase();
            });
          },
          h = (f) => {
            const d = f.toLowerCase();
            c(i, "not-active"),
              c(r, "not-active"),
              n.forEach((v) => {
                const _ = v.getAttribute("filter-target") === f;
                c(v, _ ? "active" : "not-active");
              });
            const g = e.querySelector(`[filter-target="${f}"]`);
            g && (t.textContent = g.textContent);
            let w = 0,
              y = 0;
            a.forEach((v) => {
              v.getAttribute("filter-status") === "active" &&
                (w++,
                l.add(v),
                c(v, "transition-out"),
                setTimeout(() => {
                  v.getAttribute("filter-status") === "transition-out" &&
                    (c(v, "not-active"),
                    l.delete(v),
                    y++,
                    y === w &&
                      a.forEach((b) => {
                        const S = u(b);
                        (d === "all" || S.includes(d)) &&
                          (l.add(b),
                          c(b, "transition-in"),
                          b.offsetHeight,
                          setTimeout(() => {
                            b.getAttribute("filter-status") ===
                              "transition-in" && c(b, "active"),
                              l.delete(b);
                          }, o));
                      }));
                }, o));
            }),
              w === 0 &&
                a.forEach((v) => {
                  const _ = u(v);
                  (d === "all" || _.includes(d)) &&
                    v.getAttribute("filter-status") === "not-active" &&
                    (l.add(v),
                    c(v, "transition-in"),
                    v.offsetHeight,
                    setTimeout(() => {
                      v.getAttribute("filter-status") === "transition-in" &&
                        c(v, "active"),
                        l.delete(v);
                    }, o));
                });
          },
          m = "all";
        a.forEach((f) => {
          u(f), c(f, "active");
        }),
          n.forEach((f) => {
            const d = f.getAttribute("filter-target") === m;
            c(f, d ? "active" : "not-active");
          }),
          c(i, "not-active"),
          c(r, "not-active"),
          i.addEventListener("click", () => {
            const f = i.getAttribute("filter-status") === "active";
            c(i, f ? "not-active" : "active"),
              c(r, f ? "not-active" : "active");
          }),
          n.forEach((f) => {
            f.addEventListener("click", () => {
              const d = f.getAttribute("filter-target");
              f.getAttribute("filter-status") !== "active" && h(d);
            });
          });
        const p = e.querySelector(`[filter-target="${m}"]`);
        p && (t.textContent = p.textContent);
      });
    },
    $h = () => {
      Rh();
    },
    Nh = () => {
      os(), Bs(), qs(), $h();
    };
  q.registerPlugin(Y);
  const Fh = () => {
      const s = document.querySelectorAll('[hero-parallax-sm="visual"]'),
        e = document.querySelector('[hero-parallax-sm="header"]');
      if (!s.length && !e) return;
      const t = ct == null ? void 0 : ct();
      if (
        (Y.defaults({ scroller: t ? t.wrapper : void 0 }),
        s.forEach((i) => {
          const r = parseFloat(i.getAttribute("parallax-speed")) || 0.6;
          q.fromTo(
            i,
            { yPercent: 0, scale: 1, filter: "blur(0px)" },
            {
              yPercent: -r * 100,
              scale: 1.2,
              filter: "blur(5px)",
              ease: "none",
              scrollTrigger: {
                trigger: i.parentElement,
                start: "top top",
                end: "bottom top",
                scrub: !0,
                invalidateOnRefresh: !0,
              },
            }
          );
        }),
        e)
      ) {
        const i = parseFloat(e.getAttribute("parallax-speed")) || 3.5;
        q.fromTo(
          e,
          { yPercent: 0, scale: 1 },
          {
            yPercent: -i * 100,
            scale: 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: s[0].parentElement,
              start: "top top",
              end: "bottom top",
              scrub: !0,
              invalidateOnRefresh: !0,
            },
          }
        );
      }
    },
    Bh = () => {
      Fh();
    },
    qh = () => {
      console.log("blogcmsInit"), os(), Bs(), qs(), Bh();
    },
    Hh = () => {
      console.log("workAccordion"),
        document
          .querySelectorAll("[work-accordion='component']")
          .forEach((e) => {
            const t = e.querySelector("[work-accordion='trigger']"),
              i = t.querySelector("[work-accordion='title']"),
              r = t.querySelector("[work-accordion='open-text']"),
              n = t.querySelector("[work-accordion='close-text']"),
              a = t.querySelector("[work-accordion='icon']"),
              o = t.querySelector("[work-accordion='line']"),
              l = e.querySelector("[work-accordion='content']"),
              c = l.querySelector("[work-accordion='content-layout']"),
              u = c.offsetHeight;
            let h = !1;
            q.set(c, { opacity: 0, yPercent: 5 }),
              t.addEventListener("click", () => {
                const m = q.timeline();
                h
                  ? (m.to(l, { height: 0, duration: 0.9, ease: "expo.inOut" }),
                    m.to(
                      c,
                      {
                        opacity: 0,
                        yPercent: 5,
                        duration: 1,
                        ease: "expo.inOut",
                      },
                      "<"
                    ),
                    m.to(
                      o,
                      { scaleX: 0, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    m.to(
                      a,
                      { rotate: 0, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    m.to(
                      i,
                      { opacity: 1, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    m.to(
                      r,
                      { yPercent: 0, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    m.to(
                      n,
                      { yPercent: 100, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ))
                  : (m.to(o, { scaleX: 1, duration: 1.5, ease: "expo.inOut" }),
                    m.to(
                      a,
                      { rotate: 45, duration: 1, ease: "expo.inOut" },
                      "<"
                    ),
                    m.to(
                      i,
                      { opacity: 0.5, duration: 1, ease: "expo.inOut" },
                      "<"
                    ),
                    m.to(
                      r,
                      { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    m.to(
                      n,
                      { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    m.to(
                      c,
                      {
                        opacity: 1,
                        yPercent: 0,
                        duration: 1.2,
                        ease: "expo.inOut",
                      },
                      "<"
                    ),
                    m.to(
                      l,
                      { height: u, duration: 1.2, ease: "expo.inOut" },
                      "<"
                    )),
                  (h = !h);
              });
          });
    },
    Vh = () => {
      Hh();
    },
    Wh = {
      home: Eh,
      about: Lh,
      contact: zh,
      work: Nh,
      blog_cms: qh,
      work_cms: () => {
        console.log("workcmsInit"), os(), Bs(), qs(), Vh();
      },
    },
    Yh = () => {
      const s = document.querySelector("[data-page]"),
        e = s ? s.dataset.page : null,
        t = Wh[e];
      t ? t() : console.log(`No specific script for route: ${e}`);
    },
    Xh = () => {
      Ih(".footer-accordion").forEach((e) => {
        const t = e.querySelector(".accordion-trigger"),
          i = e.querySelector(".accordion-content");
        !t ||
          !i ||
          t.addEventListener("click", () => {
            i.style.height = i.style.height ? "" : `${i.scrollHeight}px`;
          });
      });
    },
    Gh = () => {
      const s = {
          arrow3: { start: "-100%", show: "300%", out: "600%" },
          arrow2: { start: "-100%", show: "200%", out: "500%" },
          arrow1: { start: "-100%", show: "100%", out: "400%" },
        },
        e = [
          {
            ab: document.querySelector('[cta-arrow="icon-3-ab"]'),
            positions: s.arrow3,
          },
          {
            ab: document.querySelector('[cta-arrow="icon-2-ab"]'),
            positions: s.arrow2,
          },
          {
            ab: document.querySelector('[cta-arrow="icon-1-ab"]'),
            positions: s.arrow1,
          },
        ],
        t = q.timeline({
          repeat: -1,
          defaults: { duration: 1, ease: "expo.out" },
        });
      t.set(
        e.map(({ ab: i }) => i),
        { x: "-100%", opacity: 0 }
      ),
        t.to(
          e.map(({ ab: i }) => i),
          { x: (i) => e[i].positions.show, opacity: 1, stagger: 0.15 }
        ),
        t.to({}, { duration: 0.5 }),
        t.to(
          e.map(({ ab: i }) => i),
          { x: (i) => e[i].positions.out, opacity: 0, stagger: 0.1 }
        ),
        t.to({}, { duration: 0 });
    };
  q.registerPlugin(Y);
  const jh = () => {
      const s = document.querySelector('[nav-link="list"]'),
        e = document.querySelectorAll('[nav-link="item"]'),
        t = document.querySelector("[page='hero']");
      let i = [],
        r = [],
        n = [];
      const a = () => {
        i.forEach((l) => l.kill()),
          (i = []),
          (r = []),
          (n = []),
          s.setAttribute("nav-state", "list"),
          e.forEach((l, c) => {
            const u = l.querySelector('[nav-link="text"]'),
              h = l.querySelector('[nav-link="text-wrap"]'),
              m = l.querySelector('[nav-link="line"]');
            r.push(u), n.push(m);
            const p = document.querySelector('[line-top][nav-link="line"]'),
              f = document.querySelector('[line-middle][nav-link="line"]'),
              d = document.querySelector('[line-bottom][nav-link="line"]'),
              g = h.offsetHeight;
            if (!u || !h) return;
            q.set(u, { clearProps: "all" }),
              q.set(h, { clearProps: "all" }),
              q.set(l, { clearProps: "all" }),
              q.set(m, { clearProps: "all" }),
              q.set(p, { clearProps: "all" }),
              q.set(f, { clearProps: "all" }),
              q.set(d, { clearProps: "all" }),
              h.offsetHeight,
              l.offsetWidth;
            const w = () => {
                s.setAttribute("nav-state", "hamburger"),
                  q.to(e, { pointerEvents: "none" }),
                  q.to(r, {
                    y: "150%",
                    ease: "expo.out",
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.001,
                    overwrite: !0,
                  }),
                  q.to([p, f, d], {
                    scaleX: 0.1,
                    ease: "expo.out",
                    duration: 1,
                    overwrite: !0,
                    stagger: 0.0016,
                  }),
                  q.to(p, { y: -g + 14, ease: "expo.out", duration: 0.9 }),
                  q.to(f, { y: -g - 10, ease: "expo.out", duration: 0.9 }),
                  q.to(d, { y: -g - 34, ease: "expo.out", duration: 0.9 });
              },
              y = () => {
                s.setAttribute("nav-state", "list"),
                  q.to(e, { pointerEvents: "auto" }),
                  q.to([p, f, d], {
                    scaleX: 1,
                    ease: "expo.out",
                    duration: 0.8,
                    overwrite: !0,
                    stagger: 0.0016,
                  }),
                  q.to(p, { y: 0, ease: "expo.out", duration: 0.8 }),
                  q.to(f, { y: 0, ease: "expo.out", duration: 0.8 }),
                  q.to(d, { y: 0, ease: "expo.out", duration: 0.8 }),
                  q.to(
                    r,
                    {
                      y: "0%",
                      ease: "expo.out",
                      duration: 1,
                      opacity: 1,
                      stagger: 0.08,
                      overwrite: !0,
                    },
                    "-=0.6"
                  );
              },
              v = Y.create({
                trigger: t,
                start: "bottom 80%",
                onEnter: w,
                onLeaveBack: y,
                markers: !1,
              });
            i.push(v);
          });
      };
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
            i.forEach((l) => l.kill()),
            window.removeEventListener("resize", a);
        }
      );
    },
    Uh = () => jh(),
    Kh = () => {
      const s = document.querySelectorAll('[nav-menu="open-trigger"]'),
        e = document.querySelectorAll('[nav-menu="close-trigger"]'),
        t = document.querySelector('[nav-menu="component"]'),
        i = document.querySelectorAll('[nav-menu="link-item"]'),
        r = document.querySelectorAll('[nav-menu="eyebrow"]'),
        n = document.querySelector('[nav-link="list"]');
      if (!s || !e || !t || !i || !r || !n) return;
      q.set(t, { clipPath: "inset(0% 0% 100% 0%)" }),
        q.set([i, r], { y: "100%", opacity: 0 }),
        q.set(e, { opacity: 0, scale: 0 });
      const a = q.timeline({ paused: !0 }),
        o = q.timeline({ paused: !0 });
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
          {
            clipPath: "inset(0% 0% 100% 0%)",
            ease: "expo.inOut",
            duration: 0.7,
          },
          "-=0.6"
        ),
        s.forEach((l) => {
          l.addEventListener("click", () => {
            a.restart();
            const c = ct();
            c && c.stop();
          });
        }),
        e.forEach((l) => {
          l.addEventListener("click", () => {
            o.restart();
            const c = ct();
            c && c.start();
          });
        });
    },
    Zh = () => {
      Kh();
    };
  q.registerPlugin(Y);
  const Qh = () => {
      const s = document.querySelectorAll("[visual-parallax]");
      if (!s.length) return;
      const e = ct == null ? void 0 : ct();
      Y.defaults({ scroller: e ? (e == null ? void 0 : e.wrapper) : void 0 }),
        s.forEach((t) => {
          const i = parseFloat(t.getAttribute("parallax-speed")) || 0.1;
          q.fromTo(
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
    },
    Jh = () => {
      Qh();
    };
  (function () {
    function s() {
      for (var i = arguments.length, r = 0; r < i; r++) {
        var n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
        n.nodeType === 1 || n.nodeType === 11
          ? this.appendChild(n)
          : this.appendChild(document.createTextNode(String(n)));
      }
    }
    function e() {
      for (; this.lastChild; ) this.removeChild(this.lastChild);
      arguments.length && this.append.apply(this, arguments);
    }
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
          var l = n[o];
          typeof l != "object"
            ? (l = this.ownerDocument.createTextNode(l))
            : l.parentNode && l.parentNode.removeChild(l),
            o
              ? i.insertBefore(this.previousSibling, l)
              : i.replaceChild(l, this);
        }
    }
    typeof Element != "undefined" &&
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
  function em(s, e) {
    if (!(s instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function nu(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function au(s, e, t) {
    return e && nu(s.prototype, e), t && nu(s, t), s;
  }
  function tm(s, e, t) {
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
  function ou(s, e) {
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
  function lu(s) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? ou(Object(t), !0).forEach(function (i) {
            tm(s, i, t[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
        : ou(Object(t)).forEach(function (i) {
            Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(t, i));
          });
    }
    return s;
  }
  function cu(s, e) {
    return rm(s) || nm(s, e) || uu(s, e) || om();
  }
  function xt(s) {
    return im(s) || sm(s) || uu(s) || am();
  }
  function im(s) {
    if (Array.isArray(s)) return bo(s);
  }
  function rm(s) {
    if (Array.isArray(s)) return s;
  }
  function sm(s) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(s))
      return Array.from(s);
  }
  function nm(s, e) {
    if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(s)))) {
      var t = [],
        i = !0,
        r = !1,
        n = void 0;
      try {
        for (
          var a = s[Symbol.iterator](), o;
          !(i = (o = a.next()).done) &&
          (t.push(o.value), !(e && t.length === e));
          i = !0
        );
      } catch (l) {
        (r = !0), (n = l);
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
  function uu(s, e) {
    if (s) {
      if (typeof s == "string") return bo(s, e);
      var t = Object.prototype.toString.call(s).slice(8, -1);
      if (
        (t === "Object" && s.constructor && (t = s.constructor.name),
        t === "Map" || t === "Set")
      )
        return Array.from(s);
      if (
        t === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return bo(s, e);
    }
  }
  function bo(s, e) {
    (e == null || e > s.length) && (e = s.length);
    for (var t = 0, i = new Array(e); t < e; t++) i[t] = s[t];
    return i;
  }
  function am() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function om() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function _r(s, e) {
    return Object.getOwnPropertyNames(Object(s)).reduce(function (t, i) {
      var r = Object.getOwnPropertyDescriptor(Object(s), i),
        n = Object.getOwnPropertyDescriptor(Object(e), i);
      return Object.defineProperty(t, i, n || r);
    }, {});
  }
  function Vs(s) {
    return typeof s == "string";
  }
  function So(s) {
    return Array.isArray(s);
  }
  function Bn() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = _r(s),
      t;
    return (
      e.types !== void 0 ? (t = e.types) : e.split !== void 0 && (t = e.split),
      t !== void 0 &&
        (e.types = (Vs(t) || So(t) ? String(t) : "")
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
  function xo(s) {
    var e = Vs(s) || So(s) ? String(s) : "";
    return {
      none: !e,
      lines: /line/i.test(e),
      words: /word/i.test(e),
      chars: /char/i.test(e),
    };
  }
  function qn(s) {
    return s !== null && typeof s == "object";
  }
  function lm(s) {
    return qn(s) && /^(1|3|11)$/.test(s.nodeType);
  }
  function cm(s) {
    return typeof s == "number" && s > -1 && s % 1 === 0;
  }
  function um(s) {
    return qn(s) && cm(s.length);
  }
  function br(s) {
    return So(s)
      ? s
      : s == null
      ? []
      : um(s)
      ? Array.prototype.slice.call(s)
      : [s];
  }
  function du(s) {
    var e = s;
    return (
      Vs(s) &&
        (/^(#[a-z]\w+)$/.test(s.trim())
          ? (e = document.getElementById(s.trim().slice(1)))
          : (e = document.querySelectorAll(s))),
      br(e).reduce(function (t, i) {
        return [].concat(xt(t), xt(br(i).filter(lm)));
      }, [])
    );
  }
  var dm = Object.entries,
    Hn = "_splittype",
    si = {},
    fm = 0;
  function vi(s, e, t) {
    if (!qn(s)) return console.warn("[data.set] owner is not an object"), null;
    var i = s[Hn] || (s[Hn] = ++fm),
      r = si[i] || (si[i] = {});
    return (
      t === void 0
        ? e &&
          Object.getPrototypeOf(e) === Object.prototype &&
          (si[i] = lu(lu({}, r), e))
        : e !== void 0 && (r[e] = t),
      t
    );
  }
  function Sr(s, e) {
    var t = qn(s) ? s[Hn] : null,
      i = (t && si[t]) || {};
    return i;
  }
  function fu(s) {
    var e = s && s[Hn];
    e && (delete s[e], delete si[e]);
  }
  function pm() {
    Object.keys(si).forEach(function (s) {
      delete si[s];
    });
  }
  function hm() {
    dm(si).forEach(function (s) {
      var e = cu(s, 2),
        t = e[0],
        i = e[1],
        r = i.isRoot,
        n = i.isSplit;
      (!r || !n) && ((si[t] = null), delete si[t]);
    });
  }
  function mm(s) {
    var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
      t = s ? String(s) : "";
    return t.trim().replace(/\s+/g, " ").split(e);
  }
  var To = "\\ud800-\\udfff",
    pu = "\\u0300-\\u036f\\ufe20-\\ufe23",
    hu = "\\u20d0-\\u20f0",
    mu = "\\ufe0e\\ufe0f",
    gm = "[".concat(To, "]"),
    Eo = "[".concat(pu).concat(hu, "]"),
    Mo = "\\ud83c[\\udffb-\\udfff]",
    vm = "(?:".concat(Eo, "|").concat(Mo, ")"),
    gu = "[^".concat(To, "]"),
    vu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    yu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    wu = "\\u200d",
    _u = "".concat(vm, "?"),
    bu = "[".concat(mu, "]?"),
    ym = "(?:" + wu + "(?:" + [gu, vu, yu].join("|") + ")" + bu + _u + ")*",
    wm = bu + _u + ym,
    _m = "(?:".concat(
      ["".concat(gu).concat(Eo, "?"), Eo, vu, yu, gm].join("|"),
      `
)`
    ),
    bm = RegExp(
      "".concat(Mo, "(?=").concat(Mo, ")|").concat(_m).concat(wm),
      "g"
    ),
    Sm = [wu, To, pu, hu, mu],
    xm = RegExp("[".concat(Sm.join(""), "]"));
  function Tm(s) {
    return s.split("");
  }
  function Su(s) {
    return xm.test(s);
  }
  function Em(s) {
    return s.match(bm) || [];
  }
  function Mm(s) {
    return Su(s) ? Em(s) : Tm(s);
  }
  function Cm(s) {
    return s == null ? "" : String(s);
  }
  function Pm(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (s = Cm(s)), s && Vs(s) && !e && Su(s) ? Mm(s) : s.split(e);
  }
  function Co(s, e) {
    var t = document.createElement(s);
    return (
      e &&
        Object.keys(e).forEach(function (i) {
          var r = e[i],
            n = Vs(r) ? r.trim() : r;
          n === null ||
            n === "" ||
            (i === "children"
              ? t.append.apply(t, xt(br(n)))
              : t.setAttribute(i, n));
        }),
      t
    );
  }
  var Po = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function Am(s, e) {
    e = _r(Po, e);
    var t = xo(e.types),
      i = e.tagName,
      r = s.nodeValue,
      n = document.createDocumentFragment(),
      a = [],
      o = [];
    return (
      /^\s/.test(r) && n.append(" "),
      (a = mm(r).reduce(function (l, c, u, h) {
        var m, p;
        return (
          t.chars &&
            (p = Pm(c).map(function (f) {
              var d = Co(i, {
                class: "".concat(e.splitClass, " ").concat(e.charClass),
                style: "display: inline-block;",
                children: f,
              });
              return vi(d, "isChar", !0), (o = [].concat(xt(o), [d])), d;
            })),
          t.words || t.lines
            ? ((m = Co(i, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; ".concat(
                  t.words && e.absolute ? "position: relative;" : ""
                ),
                children: t.chars ? p : c,
              })),
              vi(m, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
              n.appendChild(m))
            : p.forEach(function (f) {
                n.appendChild(f);
              }),
          u < h.length - 1 && n.append(" "),
          t.words ? l.concat(m) : l
        );
      }, [])),
      /\s$/.test(r) && n.append(" "),
      s.replaceWith(n),
      { words: a, chars: o }
    );
  }
  function xu(s, e) {
    var t = s.nodeType,
      i = { words: [], chars: [] };
    if (!/(1|3|11)/.test(t)) return i;
    if (t === 3 && /\S/.test(s.nodeValue)) return Am(s, e);
    var r = br(s.childNodes);
    if (r.length && (vi(s, "isSplit", !0), !Sr(s).isRoot)) {
      (s.style.display = "inline-block"), (s.style.position = "relative");
      var n = s.nextSibling,
        a = s.previousSibling,
        o = s.textContent || "",
        l = n ? n.textContent : " ",
        c = a ? a.textContent : " ";
      vi(s, {
        isWordEnd: /\s$/.test(o) || /^\s/.test(l),
        isWordStart: /^\s/.test(o) || /\s$/.test(c),
      });
    }
    return r.reduce(function (u, h) {
      var m = xu(h, e),
        p = m.words,
        f = m.chars;
      return {
        words: [].concat(xt(u.words), xt(p)),
        chars: [].concat(xt(u.chars), xt(f)),
      };
    }, i);
  }
  function Om(s, e, t, i) {
    if (!t.absolute) return { top: e ? s.offsetTop : null };
    var r = s.offsetParent,
      n = cu(i, 2),
      a = n[0],
      o = n[1],
      l = 0,
      c = 0;
    if (r && r !== document.body) {
      var u = r.getBoundingClientRect();
      (l = u.x + a), (c = u.y + o);
    }
    var h = s.getBoundingClientRect(),
      m = h.width,
      p = h.height,
      f = h.x,
      d = h.y,
      g = d + o - c,
      w = f + a - l;
    return { width: m, height: p, top: g, left: w };
  }
  function Tu(s) {
    Sr(s).isWord
      ? (fu(s), s.replaceWith.apply(s, xt(s.childNodes)))
      : br(s.children).forEach(function (e) {
          return Tu(e);
        });
  }
  var km = function () {
    return document.createDocumentFragment();
  };
  function Lm(s, e, t) {
    var i = xo(e.types),
      r = e.tagName,
      n = s.getElementsByTagName("*"),
      a = [],
      o = [],
      l = null,
      c,
      u,
      h,
      m = [],
      p = s.parentElement,
      f = s.nextElementSibling,
      d = km(),
      g = window.getComputedStyle(s),
      w = g.textAlign,
      y = parseFloat(g.fontSize),
      v = y * 0.2;
    return (
      e.absolute &&
        ((h = { left: s.offsetLeft, top: s.offsetTop, width: s.offsetWidth }),
        (u = s.offsetWidth),
        (c = s.offsetHeight),
        vi(s, { cssWidth: s.style.width, cssHeight: s.style.height })),
      br(n).forEach(function (_) {
        var b = _.parentElement === s,
          S = Om(_, b, e, t),
          T = S.width,
          M = S.height,
          x = S.top,
          E = S.left;
        /^br$/i.test(_.nodeName) ||
          (i.lines &&
            b &&
            ((l === null || x - l >= v) && ((l = x), a.push((o = []))),
            o.push(_)),
          e.absolute && vi(_, { top: x, left: E, width: T, height: M }));
      }),
      p && p.removeChild(s),
      i.lines &&
        ((m = a.map(function (_) {
          var b = Co(r, {
            class: "".concat(e.splitClass, " ").concat(e.lineClass),
            style: "display: block; text-align: ".concat(w, "; width: 100%;"),
          });
          vi(b, "isLine", !0);
          var S = { height: 0, top: 1e4 };
          return (
            d.appendChild(b),
            _.forEach(function (T, M, x) {
              var E = Sr(T),
                I = E.isWordEnd,
                P = E.top,
                k = E.height,
                O = x[M + 1];
              (S.height = Math.max(S.height, k)),
                (S.top = Math.min(S.top, P)),
                b.appendChild(T),
                I && Sr(O).isWordStart && b.append(" ");
            }),
            e.absolute && vi(b, { height: S.height, top: S.top }),
            b
          );
        })),
        i.words || Tu(d),
        s.replaceChildren(d)),
      e.absolute &&
        ((s.style.width = "".concat(s.style.width || u, "px")),
        (s.style.height = "".concat(c, "px")),
        br(n).forEach(function (_) {
          var b = Sr(_),
            S = b.isLine,
            T = b.top,
            M = b.left,
            x = b.width,
            E = b.height,
            I = Sr(_.parentElement),
            P = !S && I.isLine;
          (_.style.top = "".concat(P ? T - I.top : T, "px")),
            (_.style.left = S
              ? "".concat(h.left, "px")
              : "".concat(M - (P ? h.left : 0), "px")),
            (_.style.height = "".concat(E, "px")),
            (_.style.width = S ? "".concat(h.width, "px") : "".concat(x, "px")),
            (_.style.position = "absolute");
        })),
      p && (f ? p.insertBefore(s, f) : p.appendChild(s)),
      m
    );
  }
  var Qr = _r(Po, {}),
    Im = (function () {
      au(s, null, [
        {
          key: "clearData",
          value: function () {
            pm();
          },
        },
        {
          key: "setDefaults",
          value: function (t) {
            return (Qr = _r(Qr, Bn(t))), Po;
          },
        },
        {
          key: "revert",
          value: function (t) {
            du(t).forEach(function (i) {
              var r = Sr(i),
                n = r.isSplit,
                a = r.html,
                o = r.cssWidth,
                l = r.cssHeight;
              n &&
                ((i.innerHTML = a),
                (i.style.width = o || ""),
                (i.style.height = l || ""),
                fu(i));
            });
          },
        },
        {
          key: "create",
          value: function (t, i) {
            return new s(t, i);
          },
        },
        {
          key: "data",
          get: function () {
            return si;
          },
        },
        {
          key: "defaults",
          get: function () {
            return Qr;
          },
          set: function (t) {
            Qr = _r(Qr, Bn(t));
          },
        },
      ]);
      function s(e, t) {
        em(this, s),
          (this.isSplit = !1),
          (this.settings = _r(Qr, Bn(t))),
          (this.elements = du(e)),
          this.split();
      }
      return (
        au(s, [
          {
            key: "split",
            value: function (t) {
              var i = this;
              this.revert(),
                this.elements.forEach(function (a) {
                  vi(a, "html", a.innerHTML);
                }),
                (this.lines = []),
                (this.words = []),
                (this.chars = []);
              var r = [window.pageXOffset, window.pageYOffset];
              t !== void 0 && (this.settings = _r(this.settings, Bn(t)));
              var n = xo(this.settings.types);
              n.none ||
                (this.elements.forEach(function (a) {
                  vi(a, "isRoot", !0);
                  var o = xu(a, i.settings),
                    l = o.words,
                    c = o.chars;
                  (i.words = [].concat(xt(i.words), xt(l))),
                    (i.chars = [].concat(xt(i.chars), xt(c)));
                }),
                this.elements.forEach(function (a) {
                  if (n.lines || i.settings.absolute) {
                    var o = Lm(a, i.settings, r);
                    i.lines = [].concat(xt(i.lines), xt(o));
                  }
                }),
                (this.isSplit = !0),
                window.scrollTo(r[0], r[1]),
                hm());
            },
          },
          {
            key: "revert",
            value: function () {
              this.isSplit &&
                ((this.lines = null),
                (this.words = null),
                (this.chars = null),
                (this.isSplit = !1)),
                s.revert(this.elements);
            },
          },
        ]),
        s
      );
    })();
  q.registerPlugin(Y, Ai);
  const Dm = () => {
      document.querySelectorAll("[split-text]").forEach((e) => {
        new Im(e, { type: "lines", tagName: "span" }).lines.forEach((n) => {
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
        q.set(r, { willChange: "transform" }),
          q.from(r, {
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
    },
    zm = () => {
      Dm();
    };
  q.registerPlugin(Y);
  const Rm = () => {
      document.querySelectorAll("[stagger-svg]").forEach((e) => {
        const t = e.querySelectorAll("path");
        if (!t.length) return;
        const i = e.getAttribute("data-stagger-start") || "top bottom",
          r = e.getAttribute("data-stagger-end") || "bottom 50%";
        q.set(t, { willChange: "transform, opacity, filter" }),
          q.set(e, { willChange: "transform, opacity, filter" }),
          q.from(t, {
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
    },
    $m = () => {
      Rm();
    };
  q.registerPlugin(Y, Ai);
  const Nm = () => {
      const s = document.querySelectorAll("[text-scramble]");
      s.length &&
        s.forEach((e) => {
          const i = new Ai(e, { type: "chars", charsClass: "char-animate" })
            .chars;
          q.set(i, { opacity: 0, filter: "blur(10px)" }),
            q.to(i, {
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
    },
    Fm = () => {
      Nm();
    };
  q.registerPlugin(Y);
  const Bm = () => {
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
          l = i.getAttribute("motion-ease") || s.ease,
          c = i.getAttribute("motion-start") || s.start;
        r === "fade"
          ? q.set(i, { opacity: 0 })
          : r === "move-up" && q.set(i, { opacity: 0, y: 50 }),
          n
            ? (t[n] || (t[n] = []),
              t[n].push({
                element: i,
                motionType: r,
                duration: a,
                delay: o,
                ease: l,
              }))
            : qm(i, r, a, o, l, c);
      }),
        Object.keys(t).forEach((i) => {
          const r = t[i];
          if (r.length > 0) {
            const n = r[0],
              a = n.element.getAttribute("motion-stagger")
                ? parseFloat(n.element.getAttribute("motion-stagger"))
                : s.stagger,
              o = n.element.getAttribute("motion-start") || s.start,
              l = q.timeline({
                scrollTrigger: {
                  trigger: n.element.parentElement,
                  start: o,
                  toggleActions: "play none none reverse",
                  markers: s.markers,
                },
              }),
              c = r
                .filter((h) => h.motionType === "fade")
                .map((h) => h.element),
              u = r
                .filter((h) => h.motionType === "move-up")
                .map((h) => h.element);
            c.length > 0 &&
              l.to(
                c,
                {
                  opacity: 1,
                  duration: n.duration,
                  stagger: a,
                  ease: n.ease,
                  delay: n.delay,
                },
                0
              ),
              u.length > 0 &&
                l.to(
                  u,
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
    },
    qm = (s, e, t, i, r, n) => {
      const a = q.timeline({
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
    },
    Hm = () => {
      Bm();
    },
    Vm = () => {
      const s = document.querySelector("[contact-modal='main']");
      if (!s) return;
      const e = document.querySelectorAll("[contact-modal='open-btn']"),
        t = document.querySelectorAll("[contact-modal='close-btn']"),
        i = document.querySelector("[contact-modal='visual']"),
        r = document.querySelector("[contact-modal='form']");
      let n = !1;
      const a = q.timeline({ paused: !0 }),
        o = q.timeline({ paused: !0 });
      a.fromTo(
        s,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "expo.inOut" }
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
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.2,
          ease: "expo.inOut",
        }),
        o.to(
          i,
          {
            scale: 1.6,
            filter: "blur(15px)",
            duration: 1.2,
            ease: "expo.inOut",
          },
          "<"
        ),
        o.to(r, { xPercent: 130, duration: 1.2, ease: "expo.inOut" }, "<"),
        e.forEach((l) => {
          l.addEventListener("click", () => {
            n || (a.restart(), (n = !0));
          });
        }),
        t.forEach((l) => {
          l.addEventListener("click", () => {
            n && (o.restart(), (n = !1));
          });
        });
    },
    Wm = () => {
      Vm();
    },
    Ym = () => {
      Xh(), Gh(), Uh(), Zh(), Jh(), zm(), $m(), Fm(), Hm(), Wm();
    },
    Xm = () => {
      const s = su(".example-component");
      s &&
        (Dh(s, "is-initialized"),
        s.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Gm = () => {
      Xm();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Ym(), Gm(), Yh(), mh();
  });
});

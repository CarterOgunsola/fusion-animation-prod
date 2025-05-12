var Lh = Object.defineProperty,
  kh = Object.defineProperties;
var Ih = Object.getOwnPropertyDescriptors;
var qu = Object.getOwnPropertySymbols;
var zh = Object.prototype.hasOwnProperty,
  Rh = Object.prototype.propertyIsEnumerable;
var gt = Math.pow,
  co = (He, Pe, ze) =>
    Pe in He
      ? Lh(He, Pe, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ze,
        })
      : (He[Pe] = ze),
  Rn = (He, Pe) => {
    for (var ze in Pe || (Pe = {})) zh.call(Pe, ze) && co(He, ze, Pe[ze]);
    if (qu) for (var ze of qu(Pe)) Rh.call(Pe, ze) && co(He, ze, Pe[ze]);
    return He;
  },
  fo = (He, Pe) => kh(He, Ih(Pe));
var W = (He, Pe, ze) => co(He, typeof Pe != "symbol" ? Pe + "" : Pe, ze);
var Vu = (He, Pe, ze) =>
  new Promise((Re, qs) => {
    var ve = (vt) => {
        try {
          Ur(ze.next(vt));
        } catch (nt) {
          qs(nt);
        }
      },
      ui = (vt) => {
        try {
          Ur(ze.throw(vt));
        } catch (nt) {
          qs(nt);
        }
      },
      Ur = (vt) =>
        vt.done ? Re(vt.value) : Promise.resolve(vt.value).then(ve, ui);
    Ur((ze = ze.apply(He, Pe)).next());
  });
(function (He) {
  typeof define == "function" && define.amd ? define(He) : He();
})(function () {
  "use strict";
  function He(s) {
    return (
      s !== null &&
      typeof s == "object" &&
      "constructor" in s &&
      s.constructor === Object
    );
  }
  function Pe(s, e) {
    s === void 0 && (s = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof s[i] == "undefined"
          ? (s[i] = e[i])
          : He(e[i]) &&
            He(s[i]) &&
            Object.keys(e[i]).length > 0 &&
            Pe(s[i], e[i]);
      });
  }
  const ze = {
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
  function Re() {
    const s = typeof document != "undefined" ? document : {};
    return Pe(s, ze), s;
  }
  const qs = {
    document: ze,
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
  function ve() {
    const s = typeof window != "undefined" ? window : {};
    return Pe(s, qs), s;
  }
  function ui(s) {
    return (
      s === void 0 && (s = ""),
      s
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Ur(s) {
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
  function vt(s, e) {
    return e === void 0 && (e = 0), setTimeout(s, e);
  }
  function nt() {
    return Date.now();
  }
  function Hu(s) {
    const e = ve();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(s, null)),
      !t && s.currentStyle && (t = s.currentStyle),
      t || (t = s.style),
      t
    );
  }
  function Bn(s, e) {
    e === void 0 && (e = "x");
    const t = ve();
    let i, r, n;
    const a = Hu(s);
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
  function jr(s) {
    return (
      typeof s == "object" &&
      s !== null &&
      s.constructor &&
      Object.prototype.toString.call(s).slice(8, -1) === "Object"
    );
  }
  function Yu(s) {
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
      if (i != null && !Yu(i)) {
        const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, a = r.length; n < a; n += 1) {
          const o = r[n],
            u = Object.getOwnPropertyDescriptor(i, o);
          u !== void 0 &&
            u.enumerable &&
            (jr(s[o]) && jr(i[o])
              ? i[o].__swiper__
                ? (s[o] = i[o])
                : Lt(s[o], i[o])
              : !jr(s[o]) && jr(i[o])
              ? ((s[o] = {}), i[o].__swiper__ ? (s[o] = i[o]) : Lt(s[o], i[o]))
              : (s[o] = i[o]));
        }
      }
    }
    return s;
  }
  function Kr(s, e, t) {
    s.style.setProperty(e, t);
  }
  function po(s) {
    let { swiper: e, targetPosition: t, side: i } = s;
    const r = ve(),
      n = -e.translate;
    let a = null,
      o;
    const u = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > n ? "next" : "prev",
      c = (m, p) => (l === "next" && m >= p) || (l === "prev" && m <= p),
      h = () => {
        (o = new Date().getTime()), a === null && (a = o);
        const m = Math.max(Math.min((o - a) / u, 1), 0),
          p = 0.5 - Math.cos(m * Math.PI) / 2;
        let f = n + p * (t - n);
        if ((c(f, t) && (f = t), e.wrapperEl.scrollTo({ [i]: f }), c(f, t))) {
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
  function ji(s) {
    return (
      s.querySelector(".swiper-slide-transform") ||
      (s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform")) ||
      s
    );
  }
  function Je(s, e) {
    e === void 0 && (e = "");
    const t = ve(),
      i = [...s.children];
    return (
      t.HTMLSlotElement &&
        s instanceof HTMLSlotElement &&
        i.push(...s.assignedElements()),
      e ? i.filter((r) => r.matches(e)) : i
    );
  }
  function Xu(s, e) {
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
  function Wu(s, e) {
    const t = ve();
    let i = e.contains(s);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(s)), i || (i = Xu(s, e))),
      i
    );
  }
  function Vs(s) {
    try {
      console.warn(s);
      return;
    } catch (e) {}
  }
  function kt(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...(Array.isArray(e) ? e : ui(e))), t;
  }
  function Hs(s) {
    const e = ve(),
      t = Re(),
      i = s.getBoundingClientRect(),
      r = t.body,
      n = s.clientTop || r.clientTop || 0,
      a = s.clientLeft || r.clientLeft || 0,
      o = s === e ? e.scrollY : s.scrollTop,
      u = s === e ? e.scrollX : s.scrollLeft;
    return { top: i.top + o - n, left: i.left + u - a };
  }
  function Gu(s, e) {
    const t = [];
    for (; s.previousElementSibling; ) {
      const i = s.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function Uu(s, e) {
    const t = [];
    for (; s.nextElementSibling; ) {
      const i = s.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function Li(s, e) {
    return ve().getComputedStyle(s, null).getPropertyValue(e);
  }
  function Zr(s) {
    let e = s,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Ki(s, e) {
    const t = [];
    let i = s.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function Qr(s, e) {
    function t(i) {
      i.target === s &&
        (e.call(s, i), s.removeEventListener("transitionend", t));
    }
    e && s.addEventListener("transitionend", t);
  }
  function $n(s, e, t) {
    const i = ve();
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
  function ae(s) {
    return (Array.isArray(s) ? s : [s]).filter((e) => !!e);
  }
  function Ys(s) {
    return (e) =>
      Math.abs(e) > 0 &&
      s.browser &&
      s.browser.need3dFix &&
      Math.abs(e) % 90 === 0
        ? e + 0.001
        : e;
  }
  let Nn;
  function ju() {
    const s = ve(),
      e = Re();
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
  function ho() {
    return Nn || (Nn = ju()), Nn;
  }
  let qn;
  function Ku(s) {
    let { userAgent: e } = s === void 0 ? {} : s;
    const t = ho(),
      i = ve(),
      r = i.navigator.platform,
      n = e || i.navigator.userAgent,
      a = { ios: !1, android: !1 },
      o = i.screen.width,
      u = i.screen.height,
      l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
      m = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
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
      !c &&
        f &&
        t.touch &&
        d.indexOf(`${o}x${u}`) >= 0 &&
        ((c = n.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (f = !1)),
      l && !p && ((a.os = "android"), (a.android = !0)),
      (c || m || h) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function mo(s) {
    return s === void 0 && (s = {}), qn || (qn = Ku(s)), qn;
  }
  let Vn;
  function Zu() {
    const s = ve(),
      e = mo();
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
        const [u, l] = o
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((c) => Number(c));
        t = u < 16 || (u === 16 && l < 2);
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
  function go() {
    return Vn || (Vn = Zu()), Vn;
  }
  function Qu(s) {
    let { swiper: e, on: t, emit: i } = s;
    const r = ve();
    let n = null,
      a = null;
    const o = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
      },
      u = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((n = new ResizeObserver((h) => {
            a = r.requestAnimationFrame(() => {
              const { width: m, height: p } = e;
              let f = m,
                d = p;
              h.forEach((g) => {
                let { contentBoxSize: _, contentRect: y, target: v } = g;
                (v && v !== e.el) ||
                  ((f = y ? y.width : (_[0] || _).inlineSize),
                  (d = y ? y.height : (_[0] || _).blockSize));
              }),
                (f !== m || d !== p) && o();
            });
          })),
          n.observe(e.el));
      },
      l = () => {
        a && r.cancelAnimationFrame(a),
          n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
      },
      c = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver != "undefined") {
        u();
        return;
      }
      r.addEventListener("resize", o),
        r.addEventListener("orientationchange", c);
    }),
      t("destroy", () => {
        l(),
          r.removeEventListener("resize", o),
          r.removeEventListener("orientationchange", c);
      });
  }
  function Ju(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = [],
      a = ve(),
      o = function (c, h) {
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
        p.observe(c, {
          attributes: typeof h.attributes == "undefined" ? !0 : h.attributes,
          childList:
            e.isElement ||
            (typeof h.childList == "undefined" ? !0 : h).childList,
          characterData:
            typeof h.characterData == "undefined" ? !0 : h.characterData,
        }),
          n.push(p);
      },
      u = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = Ki(e.hostEl);
            for (let h = 0; h < c.length; h += 1) o(c[h]);
          }
          o(e.hostEl, { childList: e.params.observeSlideChildren }),
            o(e.wrapperEl, { attributes: !1 });
        }
      },
      l = () => {
        n.forEach((c) => {
          c.disconnect();
        }),
          n.splice(0, n.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", u),
      i("destroy", l);
  }
  var ec = {
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
        (Array.isArray(e) ? e : e.split(" ")).forEach((u) => {
          s.eventsAnyListeners &&
            s.eventsAnyListeners.length &&
            s.eventsAnyListeners.forEach((l) => {
              l.apply(i, [u, ...t]);
            }),
            s.eventsListeners &&
              s.eventsListeners[u] &&
              s.eventsListeners[u].forEach((l) => {
                l.apply(i, t);
              });
        }),
        s
      );
    },
  };
  function tc() {
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
          parseInt(Li(i, "padding-left") || 0, 10) -
          parseInt(Li(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(Li(i, "padding-top") || 0, 10) -
          parseInt(Li(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(s, {
          width: e,
          height: t,
          size: s.isHorizontal() ? e : t,
        }));
  }
  function ic() {
    const s = this;
    function e(S, L) {
      return parseFloat(S.getPropertyValue(s.getDirectionLabel(L)) || 0);
    }
    const t = s.params,
      { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o } = s,
      u = s.virtual && t.virtual.enabled,
      l = u ? s.virtual.slides.length : s.slides.length,
      c = Je(r, `.${s.params.slideClass}, swiper-slide`),
      h = u ? s.virtual.slides.length : c.length;
    let m = [];
    const p = [],
      f = [];
    let d = t.slidesOffsetBefore;
    typeof d == "function" && (d = t.slidesOffsetBefore.call(s));
    let g = t.slidesOffsetAfter;
    typeof g == "function" && (g = t.slidesOffsetAfter.call(s));
    const _ = s.snapGrid.length,
      y = s.slidesGrid.length;
    let v = t.spaceBetween,
      D = -d,
      w = 0,
      E = 0;
    if (typeof n == "undefined") return;
    typeof v == "string" && v.indexOf("%") >= 0
      ? (v = (parseFloat(v.replace("%", "")) / 100) * n)
      : typeof v == "string" && (v = parseFloat(v)),
      (s.virtualSize = -v),
      c.forEach((S) => {
        a ? (S.style.marginLeft = "") : (S.style.marginRight = ""),
          (S.style.marginBottom = ""),
          (S.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (Kr(i, "--swiper-centered-offset-before", ""),
        Kr(i, "--swiper-centered-offset-after", ""));
    const b = t.grid && t.grid.rows > 1 && s.grid;
    b ? s.grid.initSlides(c) : s.grid && s.grid.unsetSlides();
    let T;
    const x =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (S) => typeof t.breakpoints[S].slidesPerView != "undefined"
      ).length > 0;
    for (let S = 0; S < h; S += 1) {
      T = 0;
      let L;
      if (
        (c[S] && (L = c[S]),
        b && s.grid.updateSlide(S, L, c),
        !(c[S] && Li(L, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          x && (c[S].style[s.getDirectionLabel("width")] = "");
          const P = getComputedStyle(L),
            k = L.style.transform,
            F = L.style.webkitTransform;
          if (
            (k && (L.style.transform = "none"),
            F && (L.style.webkitTransform = "none"),
            t.roundLengths)
          )
            T = s.isHorizontal() ? $n(L, "width") : $n(L, "height");
          else {
            const R = e(P, "width"),
              I = e(P, "padding-left"),
              M = e(P, "padding-right"),
              O = e(P, "margin-left"),
              A = e(P, "margin-right"),
              C = P.getPropertyValue("box-sizing");
            if (C && C === "border-box") T = R + O + A;
            else {
              const { clientWidth: Y, offsetWidth: Q } = L;
              T = R + I + M + O + A + (Q - Y);
            }
          }
          k && (L.style.transform = k),
            F && (L.style.webkitTransform = F),
            t.roundLengths && (T = Math.floor(T));
        } else
          (T = (n - (t.slidesPerView - 1) * v) / t.slidesPerView),
            t.roundLengths && (T = Math.floor(T)),
            c[S] && (c[S].style[s.getDirectionLabel("width")] = `${T}px`);
        c[S] && (c[S].swiperSlideSize = T),
          f.push(T),
          t.centeredSlides
            ? ((D = D + T / 2 + w / 2 + v),
              w === 0 && S !== 0 && (D = D - n / 2 - v),
              S === 0 && (D = D - n / 2 - v),
              Math.abs(D) < 1 / 1e3 && (D = 0),
              t.roundLengths && (D = Math.floor(D)),
              E % t.slidesPerGroup === 0 && m.push(D),
              p.push(D))
            : (t.roundLengths && (D = Math.floor(D)),
              (E - Math.min(s.params.slidesPerGroupSkip, E)) %
                s.params.slidesPerGroup ===
                0 && m.push(D),
              p.push(D),
              (D = D + T + v)),
          (s.virtualSize += T + v),
          (w = T),
          (E += 1);
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
      b && s.grid.updateWrapperSize(T, m),
      !t.centeredSlides)
    ) {
      const S = [];
      for (let L = 0; L < m.length; L += 1) {
        let P = m[L];
        t.roundLengths && (P = Math.floor(P)),
          m[L] <= s.virtualSize - n && S.push(P);
      }
      (m = S),
        Math.floor(s.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(s.virtualSize - n);
    }
    if (u && t.loop) {
      const S = f[0] + v;
      if (t.slidesPerGroup > 1) {
        const L = Math.ceil(
            (s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup
          ),
          P = S * t.slidesPerGroup;
        for (let k = 0; k < L; k += 1) m.push(m[m.length - 1] + P);
      }
      for (
        let L = 0;
        L < s.virtual.slidesBefore + s.virtual.slidesAfter;
        L += 1
      )
        t.slidesPerGroup === 1 && m.push(m[m.length - 1] + S),
          p.push(p[p.length - 1] + S),
          (s.virtualSize += S);
    }
    if ((m.length === 0 && (m = [0]), v !== 0)) {
      const S =
        s.isHorizontal() && a
          ? "marginLeft"
          : s.getDirectionLabel("marginRight");
      c.filter((L, P) =>
        !t.cssMode || t.loop ? !0 : P !== c.length - 1
      ).forEach((L) => {
        L.style[S] = `${v}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let S = 0;
      f.forEach((P) => {
        S += P + (v || 0);
      }),
        (S -= v);
      const L = S > n ? S - n : 0;
      m = m.map((P) => (P <= 0 ? -d : P > L ? L + g : P));
    }
    if (t.centerInsufficientSlides) {
      let S = 0;
      f.forEach((P) => {
        S += P + (v || 0);
      }),
        (S -= v);
      const L = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (S + L < n) {
        const P = (n - S - L) / 2;
        m.forEach((k, F) => {
          m[F] = k - P;
        }),
          p.forEach((k, F) => {
            p[F] = k + P;
          });
      }
    }
    if (
      (Object.assign(s, {
        slides: c,
        snapGrid: m,
        slidesGrid: p,
        slidesSizesGrid: f,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      Kr(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        Kr(
          i,
          "--swiper-centered-offset-after",
          `${s.size / 2 - f[f.length - 1] / 2}px`
        );
      const S = -s.snapGrid[0],
        L = -s.slidesGrid[0];
      (s.snapGrid = s.snapGrid.map((P) => P + S)),
        (s.slidesGrid = s.slidesGrid.map((P) => P + L));
    }
    if (
      (h !== l && s.emit("slidesLengthChange"),
      m.length !== _ &&
        (s.params.watchOverflow && s.checkOverflow(),
        s.emit("snapGridLengthChange")),
      p.length !== y && s.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && s.updateSlidesOffset(),
      s.emit("slidesUpdated"),
      !u && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const S = `${t.containerModifierClass}backface-hidden`,
        L = s.el.classList.contains(S);
      h <= t.maxBackfaceHiddenSlides
        ? L || s.el.classList.add(S)
        : L && s.el.classList.remove(S);
    }
  }
  function rc(s) {
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
  function sc() {
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
  const vo = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function nc(s) {
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
    for (let u = 0; u < i.length; u += 1) {
      const l = i[u];
      let c = l.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
      const h =
          (a + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (l.swiperSlideSize + o),
        m =
          (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (l.swiperSlideSize + o),
        p = -(a - c),
        f = p + e.slidesSizesGrid[u],
        d = p >= 0 && p <= e.size - e.slidesSizesGrid[u],
        g =
          (p >= 0 && p < e.size - 1) ||
          (f > 1 && f <= e.size) ||
          (p <= 0 && f >= e.size);
      g && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(u)),
        vo(l, g, t.slideVisibleClass),
        vo(l, d, t.slideFullyVisibleClass),
        (l.progress = r ? -h : h),
        (l.originalProgress = r ? -m : m);
    }
  }
  function ac(s) {
    const e = this;
    if (typeof s == "undefined") {
      const c = e.rtlTranslate ? -1 : 1;
      s = (e && e.translate && e.translate * c) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = e;
    const u = n,
      l = a;
    if (i === 0) (r = 0), (n = !0), (a = !0);
    else {
      r = (s - e.minTranslate()) / i;
      const c = Math.abs(s - e.minTranslate()) < 1,
        h = Math.abs(s - e.maxTranslate()) < 1;
      (n = c || r <= 0), (a = h || r >= 1), c && (r = 0), h && (r = 1);
    }
    if (t.loop) {
      const c = e.getSlideIndexByData(0),
        h = e.getSlideIndexByData(e.slides.length - 1),
        m = e.slidesGrid[c],
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
      n && !u && e.emit("reachBeginning toEdge"),
      a && !l && e.emit("reachEnd toEdge"),
      ((u && !n) || (l && !a)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  const Hn = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function oc() {
    const s = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = s,
      n = s.virtual && t.virtual.enabled,
      a = s.grid && t.grid && t.grid.rows > 1,
      o = (h) => Je(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
    let u, l, c;
    if (n)
      if (t.loop) {
        let h = r - s.virtual.slidesBefore;
        h < 0 && (h = s.virtual.slides.length + h),
          h >= s.virtual.slides.length && (h -= s.virtual.slides.length),
          (u = o(`[data-swiper-slide-index="${h}"]`));
      } else u = o(`[data-swiper-slide-index="${r}"]`);
    else
      a
        ? ((u = e.find((h) => h.column === r)),
          (c = e.find((h) => h.column === r + 1)),
          (l = e.find((h) => h.column === r - 1)))
        : (u = e[r]);
    u &&
      (a ||
        ((c = Uu(u, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (l = Gu(u, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !l === 0 && (l = e[e.length - 1]))),
      e.forEach((h) => {
        Hn(h, h === u, t.slideActiveClass),
          Hn(h, h === c, t.slideNextClass),
          Hn(h, h === l, t.slidePrevClass);
      }),
      s.emitSlidesClasses();
  }
  const Xs = (s, e) => {
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
    Yn = (s, e) => {
      if (!s.slides[e]) return;
      const t = s.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    Xn = (s) => {
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
        o.push(...Array.from({ length: e }).map((u, l) => a + i + l)),
          s.slides.forEach((u, l) => {
            o.includes(u.column) && Yn(s, l);
          });
        return;
      }
      const n = r + i - 1;
      if (s.params.rewind || s.params.loop)
        for (let a = r - e; a <= n + e; a += 1) {
          const o = ((a % t) + t) % t;
          (o < r || o > n) && Yn(s, o);
        }
      else
        for (let a = Math.max(r - e, 0); a <= Math.min(n + e, t - 1); a += 1)
          a !== r && (a > n || a < r) && Yn(s, a);
    };
  function lc(s) {
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
  function uc(s) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: i,
        params: r,
        activeIndex: n,
        realIndex: a,
        snapIndex: o,
      } = e;
    let u = s,
      l;
    const c = (p) => {
      let f = p - e.virtual.slidesBefore;
      return (
        f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        f
      );
    };
    if ((typeof u == "undefined" && (u = lc(e)), i.indexOf(t) >= 0))
      l = i.indexOf(t);
    else {
      const p = Math.min(r.slidesPerGroupSkip, u);
      l = p + Math.floor((u - p) / r.slidesPerGroup);
    }
    if ((l >= i.length && (l = i.length - 1), u === n && !e.params.loop)) {
      l !== o && ((e.snapIndex = l), e.emit("snapIndexChange"));
      return;
    }
    if (u === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = c(u);
      return;
    }
    const h = e.grid && r.grid && r.grid.rows > 1;
    let m;
    if (e.virtual && r.virtual.enabled && r.loop) m = c(u);
    else if (h) {
      const p = e.slides.find((d) => d.column === u);
      let f = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(f) && (f = Math.max(e.slides.indexOf(p), 0)),
        (m = Math.floor(f / r.grid.rows));
    } else if (e.slides[u]) {
      const p = e.slides[u].getAttribute("data-swiper-slide-index");
      p ? (m = parseInt(p, 10)) : (m = u);
    } else m = u;
    Object.assign(e, {
      previousSnapIndex: o,
      snapIndex: l,
      previousRealIndex: a,
      realIndex: m,
      previousIndex: n,
      activeIndex: u,
    }),
      e.initialized && Xn(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (a !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function cc(s, e) {
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
  var dc = {
    updateSize: tc,
    updateSlides: ic,
    updateAutoHeight: rc,
    updateSlidesOffset: sc,
    updateSlidesProgress: nc,
    updateProgress: ac,
    updateSlidesClasses: oc,
    updateActiveIndex: uc,
    updateClickedSlide: cc,
  };
  function fc(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let a = Bn(n, s);
    return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
  }
  function pc(s, e) {
    const t = this,
      { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = t;
    let o = 0,
      u = 0;
    const l = 0;
    t.isHorizontal() ? (o = i ? -s : s) : (u = s),
      r.roundLengths && ((o = Math.floor(o)), (u = Math.floor(u))),
      (t.previousTranslate = t.translate),
      (t.translate = t.isHorizontal() ? o : u),
      r.cssMode
        ? (n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
            ? -o
            : -u)
        : r.virtualTranslate ||
          (t.isHorizontal()
            ? (o -= t.cssOverflowAdjustment())
            : (u -= t.cssOverflowAdjustment()),
          (n.style.transform = `translate3d(${o}px, ${u}px, ${l}px)`));
    let c;
    const h = t.maxTranslate() - t.minTranslate();
    h === 0 ? (c = 0) : (c = (s - t.minTranslate()) / h),
      c !== a && t.updateProgress(s),
      t.emit("setTranslate", t.translate, e);
  }
  function hc() {
    return -this.snapGrid[0];
  }
  function mc() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function gc(s, e, t, i, r) {
    s === void 0 && (s = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const n = this,
      { params: a, wrapperEl: o } = n;
    if (n.animating && a.preventInteractionOnTransition) return !1;
    const u = n.minTranslate(),
      l = n.maxTranslate();
    let c;
    if (
      (i && s > u ? (c = u) : i && s < l ? (c = l) : (c = s),
      n.updateProgress(c),
      a.cssMode)
    ) {
      const h = n.isHorizontal();
      if (e === 0) o[h ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!n.support.smoothScroll)
          return (
            po({ swiper: n, targetPosition: -c, side: h ? "left" : "top" }), !0
          );
        o.scrollTo({ [h ? "left" : "top"]: -c, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (n.setTransition(0),
          n.setTranslate(c),
          t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd")))
        : (n.setTransition(e),
          n.setTranslate(c),
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
  var vc = {
    getTranslate: fc,
    setTranslate: pc,
    minTranslate: hc,
    maxTranslate: mc,
    translateTo: gc,
  };
  function yc(s, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${s}ms`),
      (t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
      t.emit("setTransition", s, e);
  }
  function yo(s) {
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
  function _c(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      yo({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
  }
  function Dc(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        yo({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
  }
  var wc = { setTransition: yc, transitionStart: _c, transitionEnd: Dc };
  function bc(s, e, t, i, r) {
    s === void 0 && (s = 0),
      t === void 0 && (t = !0),
      typeof s == "string" && (s = parseInt(s, 10));
    const n = this;
    let a = s;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: u,
      slidesGrid: l,
      previousIndex: c,
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
    g >= u.length && (g = u.length - 1);
    const _ = -u[g];
    if (o.normalizeSlideIndex)
      for (let b = 0; b < l.length; b += 1) {
        const T = -Math.floor(_ * 100),
          x = Math.floor(l[b] * 100),
          S = Math.floor(l[b + 1] * 100);
        typeof l[b + 1] != "undefined"
          ? T >= x && T < S - (S - x) / 2
            ? (a = b)
            : T >= x && T < S && (a = b + 1)
          : T >= x && (a = b);
      }
    if (
      n.initialized &&
      a !== h &&
      ((!n.allowSlideNext &&
        (m
          ? _ > n.translate && _ > n.minTranslate()
          : _ < n.translate && _ < n.minTranslate())) ||
        (!n.allowSlidePrev &&
          _ > n.translate &&
          _ > n.maxTranslate() &&
          (h || 0) !== a))
    )
      return !1;
    a !== (c || 0) && t && n.emit("beforeSlideChangeStart"),
      n.updateProgress(_);
    let y;
    a > h ? (y = "next") : a < h ? (y = "prev") : (y = "reset");
    const v = n.virtual && n.params.virtual.enabled;
    if (!(v && r) && ((m && -_ === n.translate) || (!m && _ === n.translate)))
      return (
        n.updateActiveIndex(a),
        o.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        o.effect !== "slide" && n.setTranslate(_),
        y !== "reset" && (n.transitionStart(t, y), n.transitionEnd(t, y)),
        !1
      );
    if (o.cssMode) {
      const b = n.isHorizontal(),
        T = m ? _ : -_;
      if (e === 0)
        v &&
          ((n.wrapperEl.style.scrollSnapType = "none"),
          (n._immediateVirtual = !0)),
          v && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
            ? ((n._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                p[b ? "scrollLeft" : "scrollTop"] = T;
              }))
            : (p[b ? "scrollLeft" : "scrollTop"] = T),
          v &&
            requestAnimationFrame(() => {
              (n.wrapperEl.style.scrollSnapType = ""),
                (n._immediateVirtual = !1);
            });
      else {
        if (!n.support.smoothScroll)
          return (
            po({ swiper: n, targetPosition: T, side: b ? "left" : "top" }), !0
          );
        p.scrollTo({ [b ? "left" : "top"]: T, behavior: "smooth" });
      }
      return !0;
    }
    const E = go().isSafari;
    return (
      v && !r && E && n.isElement && n.virtual.update(!1, !1, a),
      n.setTransition(e),
      n.setTranslate(_),
      n.updateActiveIndex(a),
      n.updateSlidesClasses(),
      n.emit("beforeTransitionStart", e, i),
      n.transitionStart(t, y),
      e === 0
        ? n.transitionEnd(t, y)
        : n.animating ||
          ((n.animating = !0),
          n.onSlideToWrapperTransitionEnd ||
            (n.onSlideToWrapperTransitionEnd = function (T) {
              !n ||
                n.destroyed ||
                (T.target === this &&
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
  function Sc(s, e, t, i) {
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
        const u = n
            ? Math.ceil(r.slides.length / r.params.grid.rows)
            : r.slides.length,
          { centeredSlides: l } = r.params;
        let c = r.params.slidesPerView;
        c === "auto"
          ? (c = r.slidesPerViewDynamic())
          : ((c = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
            l && c % 2 === 0 && (c = c + 1));
        let h = u - o < c;
        if (
          (l && (h = h || o < Math.ceil(c / 2)),
          i && l && r.params.slidesPerView !== "auto" && !n && (h = !1),
          h)
        ) {
          const m = l
            ? o < r.activeIndex
              ? "prev"
              : "next"
            : o - r.activeIndex - 1 < r.params.slidesPerView
            ? "next"
            : "prev";
          r.loopFix({
            direction: m,
            slideTo: !0,
            activeSlideIndex: m === "next" ? o + 1 : o - u + 1,
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
  function xc(s, e, t) {
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
    const u = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
      l = i.virtual && n.virtual.enabled;
    if (n.loop) {
      if (a && !l && n.loopPreventsSliding) return !1;
      if (
        (i.loopFix({ direction: "next" }),
        (i._clientLeft = i.wrapperEl.clientLeft),
        i.activeIndex === i.slides.length - 1 && n.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + u, s, e, t);
          }),
          !0
        );
    }
    return n.rewind && i.isEnd
      ? i.slideTo(0, s, e, t)
      : i.slideTo(i.activeIndex + u, s, e, t);
  }
  function Ec(s, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: r,
        snapGrid: n,
        slidesGrid: a,
        rtlTranslate: o,
        enabled: u,
        animating: l,
      } = i;
    if (!u || i.destroyed) return i;
    typeof s == "undefined" && (s = i.params.speed);
    const c = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (l && !c && r.loopPreventsSliding) return !1;
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
      n.forEach((v, D) => {
        p >= v && (y = D);
      }),
        typeof y != "undefined" && (g = d ? n[y] : n[y > 0 ? y - 1 : y]);
    }
    let _ = 0;
    if (
      (typeof g != "undefined" &&
        ((_ = a.indexOf(g)),
        _ < 0 && (_ = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((_ = _ - i.slidesPerViewDynamic("previous", !0) + 1),
          (_ = Math.max(_, 0)))),
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
          i.slideTo(_, s, e, t);
        }),
        !0
      );
    return i.slideTo(_, s, e, t);
  }
  function Tc(s, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof s == "undefined" && (s = i.params.speed),
        i.slideTo(i.activeIndex, s, e, t)
      );
  }
  function Cc(s, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof s == "undefined" && (s = r.params.speed);
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n),
      o = a + Math.floor((n - a) / r.params.slidesPerGroup),
      u = r.rtlTranslate ? r.translate : -r.translate;
    if (u >= r.snapGrid[o]) {
      const l = r.snapGrid[o],
        c = r.snapGrid[o + 1];
      u - l > (c - l) * i && (n += r.params.slidesPerGroup);
    } else {
      const l = r.snapGrid[o - 1],
        c = r.snapGrid[o];
      u - l <= (c - l) * i && (n -= r.params.slidesPerGroup);
    }
    return (
      (n = Math.max(n, 0)),
      (n = Math.min(n, r.slidesGrid.length - 1)),
      r.slideTo(n, s, e, t)
    );
  }
  function Mc() {
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
                Je(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
              )),
              vt(() => {
                s.slideTo(r);
              }))
            : s.slideTo(r)
          : r > s.slides.length - i
          ? (s.loopFix(),
            (r = s.getSlideIndex(
              Je(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
            )),
            vt(() => {
              s.slideTo(r);
            }))
          : s.slideTo(r);
    } else s.slideTo(r);
  }
  var Pc = {
    slideTo: bc,
    slideToLoop: Sc,
    slideNext: xc,
    slidePrev: Ec,
    slideReset: Tc,
    slideToClosest: Cc,
    slideToClickedSlide: Mc,
  };
  function Ac(s, e) {
    const t = this,
      { params: i, slidesEl: r } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    const n = () => {
        Je(r, `.${i.slideClass}, swiper-slide`).forEach((m, p) => {
          m.setAttribute("data-swiper-slide-index", p);
        });
      },
      a = t.grid && i.grid && i.grid.rows > 1,
      o = i.slidesPerGroup * (a ? i.grid.rows : 1),
      u = t.slides.length % o !== 0,
      l = a && t.slides.length % i.grid.rows !== 0,
      c = (h) => {
        for (let m = 0; m < h; m += 1) {
          const p = t.isElement
            ? kt("swiper-slide", [i.slideBlankClass])
            : kt("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(p);
        }
      };
    if (u) {
      if (i.loopAddBlankSlides) {
        const h = o - (t.slides.length % o);
        c(h), t.recalcSlides(), t.updateSlides();
      } else
        Vs(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      n();
    } else if (l) {
      if (i.loopAddBlankSlides) {
        const h = i.grid.rows - (t.slides.length % i.grid.rows);
        c(h), t.recalcSlides(), t.updateSlides();
      } else
        Vs(
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
  function Fc(s) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: r,
      activeSlideIndex: n,
      initial: a,
      byController: o,
      byMousewheel: u,
    } = s === void 0 ? {} : s;
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const {
        slides: c,
        allowSlidePrev: h,
        allowSlideNext: m,
        slidesEl: p,
        params: f,
      } = l,
      { centeredSlides: d, initialSlide: g } = f;
    if (
      ((l.allowSlidePrev = !0),
      (l.allowSlideNext = !0),
      l.virtual && f.virtual.enabled)
    ) {
      t &&
        (!f.centeredSlides && l.snapIndex === 0
          ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
          : f.centeredSlides && l.snapIndex < f.slidesPerView
          ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
          : l.snapIndex === l.snapGrid.length - 1 &&
            l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        (l.allowSlidePrev = h),
        (l.allowSlideNext = m),
        l.emit("loopFix");
      return;
    }
    let _ = f.slidesPerView;
    _ === "auto"
      ? (_ = l.slidesPerViewDynamic())
      : ((_ = Math.ceil(parseFloat(f.slidesPerView, 10))),
        d && _ % 2 === 0 && (_ = _ + 1));
    const y = f.slidesPerGroupAuto ? _ : f.slidesPerGroup;
    let v = y;
    v % y !== 0 && (v += y - (v % y)),
      (v += f.loopAdditionalSlides),
      (l.loopedSlides = v);
    const D = l.grid && f.grid && f.grid.rows > 1;
    c.length < _ + v || (l.params.effect === "cards" && c.length < _ + v * 2)
      ? Vs(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : D &&
        f.grid.fill === "row" &&
        Vs(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const w = [],
      E = [],
      b = D ? Math.ceil(c.length / f.grid.rows) : c.length,
      T = a && b - g < _ && !d;
    let x = T ? g : l.activeIndex;
    typeof n == "undefined"
      ? (n = l.getSlideIndex(
          c.find((I) => I.classList.contains(f.slideActiveClass))
        ))
      : (x = n);
    const S = i === "next" || !i,
      L = i === "prev" || !i;
    let P = 0,
      k = 0;
    const R =
      (D ? c[n].column : n) + (d && typeof r == "undefined" ? -_ / 2 + 0.5 : 0);
    if (R < v) {
      P = Math.max(v - R, y);
      for (let I = 0; I < v - R; I += 1) {
        const M = I - Math.floor(I / b) * b;
        if (D) {
          const O = b - M - 1;
          for (let A = c.length - 1; A >= 0; A -= 1)
            c[A].column === O && w.push(A);
        } else w.push(b - M - 1);
      }
    } else if (R + _ > b - v) {
      (k = Math.max(R - (b - v * 2), y)), T && (k = Math.max(k, _ - b + g + 1));
      for (let I = 0; I < k; I += 1) {
        const M = I - Math.floor(I / b) * b;
        D
          ? c.forEach((O, A) => {
              O.column === M && E.push(A);
            })
          : E.push(M);
      }
    }
    if (
      ((l.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        l.__preventObserver__ = !1;
      }),
      l.params.effect === "cards" &&
        c.length < _ + v * 2 &&
        (E.includes(n) && E.splice(E.indexOf(n), 1),
        w.includes(n) && w.splice(w.indexOf(n), 1)),
      L &&
        w.forEach((I) => {
          (c[I].swiperLoopMoveDOM = !0),
            p.prepend(c[I]),
            (c[I].swiperLoopMoveDOM = !1);
        }),
      S &&
        E.forEach((I) => {
          (c[I].swiperLoopMoveDOM = !0),
            p.append(c[I]),
            (c[I].swiperLoopMoveDOM = !1);
        }),
      l.recalcSlides(),
      f.slidesPerView === "auto"
        ? l.updateSlides()
        : D &&
          ((w.length > 0 && L) || (E.length > 0 && S)) &&
          l.slides.forEach((I, M) => {
            l.grid.updateSlide(M, I, l.slides);
          }),
      f.watchSlidesProgress && l.updateSlidesOffset(),
      t)
    ) {
      if (w.length > 0 && L) {
        if (typeof e == "undefined") {
          const I = l.slidesGrid[x],
            O = l.slidesGrid[x + P] - I;
          u
            ? l.setTranslate(l.translate - O)
            : (l.slideTo(x + Math.ceil(P), 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - O),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - O)));
        } else if (r) {
          const I = D ? w.length / f.grid.rows : w.length;
          l.slideTo(l.activeIndex + I, 0, !1, !0),
            (l.touchEventsData.currentTranslate = l.translate);
        }
      } else if (E.length > 0 && S)
        if (typeof e == "undefined") {
          const I = l.slidesGrid[x],
            O = l.slidesGrid[x - k] - I;
          u
            ? l.setTranslate(l.translate - O)
            : (l.slideTo(x - k, 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - O),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - O)));
        } else {
          const I = D ? E.length / f.grid.rows : E.length;
          l.slideTo(l.activeIndex - I, 0, !1, !0);
        }
    }
    if (
      ((l.allowSlidePrev = h),
      (l.allowSlideNext = m),
      l.controller && l.controller.control && !o)
    ) {
      const I = {
        slideRealIndex: e,
        direction: i,
        setTranslate: r,
        activeSlideIndex: n,
        byController: !0,
      };
      Array.isArray(l.controller.control)
        ? l.controller.control.forEach((M) => {
            !M.destroyed &&
              M.params.loop &&
              M.loopFix(
                fo(Rn({}, I), {
                  slideTo: M.params.slidesPerView === f.slidesPerView ? t : !1,
                })
              );
          })
        : l.controller.control instanceof l.constructor &&
          l.controller.control.params.loop &&
          l.controller.control.loopFix(
            fo(Rn({}, I), {
              slideTo:
                l.controller.control.params.slidesPerView === f.slidesPerView
                  ? t
                  : !1,
            })
          );
    }
    l.emit("loopFix");
  }
  function Oc() {
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
  var Lc = { loopCreate: Ac, loopFix: Fc, loopDestroy: Oc };
  function kc(s) {
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
  function Ic() {
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
  var zc = { setGrabCursor: kc, unsetGrabCursor: Ic };
  function Rc(s, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === Re() || i === ve()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(s);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function _o(s, e, t) {
    const i = ve(),
      { params: r } = s,
      n = r.edgeSwipeDetection,
      a = r.edgeSwipeThreshold;
    return n && (t <= a || t >= i.innerWidth - a)
      ? n === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function Bc(s) {
    const e = this,
      t = Re();
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      _o(e, i, i.targetTouches[0].pageX);
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
    let u = i.target;
    if (
      (n.touchEventsTarget === "wrapper" && !Wu(u, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const l = !!n.noSwipingClass && n.noSwipingClass !== "",
      c = i.composedPath ? i.composedPath() : i.path;
    l && i.target && i.target.shadowRoot && c && (u = c[0]);
    const h = n.noSwipingSelector
        ? n.noSwipingSelector
        : `.${n.noSwipingClass}`,
      m = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (m ? Rc(h, u) : u.closest(h))) {
      e.allowClick = !0;
      return;
    }
    if (n.swipeHandler && !u.closest(n.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const p = a.currentX,
      f = a.currentY;
    if (!_o(e, i, p)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = p),
      (a.startY = f),
      (r.touchStartTime = nt()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      n.threshold > 0 && (r.allowThresholdMove = !1);
    let d = !0;
    u.matches(r.focusableElements) &&
      ((d = !1), u.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== u &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !u.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const g = d && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || g) &&
      !u.isContentEditable &&
      i.preventDefault(),
      n.freeMode &&
        n.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !n.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", i);
  }
  function $c(s) {
    const e = Re(),
      t = this,
      i = t.touchEventsData,
      { params: r, touches: n, rtlTranslate: a, enabled: o } = t;
    if (!o || (!r.simulateTouch && s.pointerType === "mouse")) return;
    let u = s;
    if (
      (u.originalEvent && (u = u.originalEvent),
      u.type === "pointermove" &&
        (i.touchId !== null || u.pointerId !== i.pointerId))
    )
      return;
    let l;
    if (u.type === "touchmove") {
      if (
        ((l = [...u.changedTouches].find((E) => E.identifier === i.touchId)),
        !l || l.identifier !== i.touchId)
      )
        return;
    } else l = u;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", u);
      return;
    }
    const c = l.pageX,
      h = l.pageY;
    if (u.preventedByNestedSwiper) {
      (n.startX = c), (n.startY = h);
      return;
    }
    if (!t.allowTouchMove) {
      u.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(n, { startX: c, startY: h, currentX: c, currentY: h }),
          (i.touchStartTime = nt()));
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
          ((c > n.startX && -t.translate <= t.maxTranslate()) ||
            (c < n.startX && -t.translate >= t.minTranslate()))
        )
          return;
        if (
          !a &&
          ((c < n.startX && t.translate <= t.maxTranslate()) ||
            (c > n.startX && t.translate >= t.minTranslate()))
        )
          return;
      }
    if (
      (e.activeElement &&
        e.activeElement.matches(i.focusableElements) &&
        e.activeElement !== u.target &&
        u.pointerType !== "mouse" &&
        e.activeElement.blur(),
      e.activeElement &&
        u.target === e.activeElement &&
        u.target.matches(i.focusableElements))
    ) {
      (i.isMoved = !0), (t.allowClick = !1);
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", u),
      (n.previousX = n.currentX),
      (n.previousY = n.currentY),
      (n.currentX = c),
      (n.currentY = h);
    const m = n.currentX - n.startX,
      p = n.currentY - n.startY;
    if (
      t.params.threshold &&
      Math.sqrt(gt(m, 2) + gt(p, 2)) < t.params.threshold
    )
      return;
    if (typeof i.isScrolling == "undefined") {
      let E;
      (t.isHorizontal() && n.currentY === n.startY) ||
      (t.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : m * m + p * p >= 25 &&
          ((E = (Math.atan2(Math.abs(p), Math.abs(m)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? E > r.touchAngle
            : 90 - E > r.touchAngle));
    }
    if (
      (i.isScrolling && t.emit("touchMoveOpposite", u),
      typeof i.startMoving == "undefined" &&
        (n.currentX !== n.startX || n.currentY !== n.startY) &&
        (i.startMoving = !0),
      i.isScrolling ||
        (u.type === "touchmove" && i.preventTouchMoveFromPointerMove))
    ) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving) return;
    (t.allowClick = !1),
      !r.cssMode && u.cancelable && u.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && u.stopPropagation();
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
    const _ = t.params.loop && !r.cssMode,
      y =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (_ && y && t.loopFix({ direction: t.swipeDirection }),
        (i.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const E = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(E);
      }
      (i.allowMomentumBounce = !1),
        r.grabCursor &&
          (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
          t.setGrabCursor(!0),
        t.emit("sliderFirstMove", u);
    }
    let v;
    if (
      (new Date().getTime(),
      r._loopSwapReset !== !1 &&
        i.isMoved &&
        i.allowThresholdMove &&
        g !== t.touchesDirection &&
        _ &&
        y &&
        Math.abs(f) >= 1)
    ) {
      Object.assign(n, {
        startX: c,
        startY: h,
        currentX: c,
        currentY: h,
        startTranslate: i.currentTranslate,
      }),
        (i.loopSwapReset = !0),
        (i.startTranslate = i.currentTranslate);
      return;
    }
    t.emit("sliderMove", u),
      (i.isMoved = !0),
      (i.currentTranslate = f + i.startTranslate);
    let D = !0,
      w = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (w = 0),
      f > 0
        ? (_ &&
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
            ((D = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                gt(-t.minTranslate() + i.startTranslate + f, w))))
        : f < 0 &&
          (_ &&
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
            ((D = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                gt(t.maxTranslate() - i.startTranslate - f, w)))),
      D && (u.preventedByNestedSwiper = !0),
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
  function Nc(s) {
    const e = this,
      t = e.touchEventsData;
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((r = [...i.changedTouches].find((w) => w.identifier === t.touchId)),
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
      rtlTranslate: u,
      slidesGrid: l,
      enabled: c,
    } = e;
    if (!c || (!a.simulateTouch && i.pointerType === "mouse")) return;
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
    const h = nt(),
      m = h - t.touchStartTime;
    if (e.allowClick) {
      const w = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((w && w[0]) || i.target, w),
        e.emit("tap click", i),
        m < 300 &&
          h - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = nt()),
      vt(() => {
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
        ? (p = u ? e.translate : -e.translate)
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
      let w = 0;
      w < l.length;
      w += w < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const E = w < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof l[w + E] != "undefined"
        ? (f || (p >= l[w] && p < l[w + E])) && ((d = w), (g = l[w + E] - l[w]))
        : (f || p >= l[w]) &&
          ((d = w), (g = l[l.length - 1] - l[l.length - 2]));
    }
    let _ = null,
      y = null;
    a.rewind &&
      (e.isBeginning
        ? (y =
            a.virtual && a.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (_ = 0));
    const v = (p - l[d]) / g,
      D = d < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (m > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (v >= a.longSwipesRatio
          ? e.slideTo(a.rewind && e.isEnd ? _ : d + D)
          : e.slideTo(d)),
        e.swipeDirection === "prev" &&
          (v > 1 - a.longSwipesRatio
            ? e.slideTo(d + D)
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
          ? e.slideTo(d + D)
          : e.slideTo(d)
        : (e.swipeDirection === "next" && e.slideTo(_ !== null ? _ : d + D),
          e.swipeDirection === "prev" && e.slideTo(y !== null ? y : d));
    }
  }
  function Do() {
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
  function qc(s) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && s.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (s.stopPropagation(), s.stopImmediatePropagation())));
  }
  function Vc() {
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
  function Hc(s) {
    const e = this;
    Xs(e, s.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Yc() {
    const s = this;
    s.documentTouchHandlerProceeded ||
      ((s.documentTouchHandlerProceeded = !0),
      s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
  }
  const wo = (s, e) => {
    const t = Re(),
      { params: i, el: r, wrapperEl: n, device: a } = s,
      o = !!i.nested,
      u = e === "on" ? "addEventListener" : "removeEventListener",
      l = e;
    !r ||
      typeof r == "string" ||
      (t[u]("touchstart", s.onDocumentTouchStart, { passive: !1, capture: o }),
      r[u]("touchstart", s.onTouchStart, { passive: !1 }),
      r[u]("pointerdown", s.onTouchStart, { passive: !1 }),
      t[u]("touchmove", s.onTouchMove, { passive: !1, capture: o }),
      t[u]("pointermove", s.onTouchMove, { passive: !1, capture: o }),
      t[u]("touchend", s.onTouchEnd, { passive: !0 }),
      t[u]("pointerup", s.onTouchEnd, { passive: !0 }),
      t[u]("pointercancel", s.onTouchEnd, { passive: !0 }),
      t[u]("touchcancel", s.onTouchEnd, { passive: !0 }),
      t[u]("pointerout", s.onTouchEnd, { passive: !0 }),
      t[u]("pointerleave", s.onTouchEnd, { passive: !0 }),
      t[u]("contextmenu", s.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[u]("click", s.onClick, !0),
      i.cssMode && n[u]("scroll", s.onScroll),
      i.updateOnWindowResize
        ? s[l](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Do,
            !0
          )
        : s[l]("observerUpdate", Do, !0),
      r[u]("load", s.onLoad, { capture: !0 }));
  };
  function Xc() {
    const s = this,
      { params: e } = s;
    (s.onTouchStart = Bc.bind(s)),
      (s.onTouchMove = $c.bind(s)),
      (s.onTouchEnd = Nc.bind(s)),
      (s.onDocumentTouchStart = Yc.bind(s)),
      e.cssMode && (s.onScroll = Vc.bind(s)),
      (s.onClick = qc.bind(s)),
      (s.onLoad = Hc.bind(s)),
      wo(s, "on");
  }
  function Wc() {
    wo(this, "off");
  }
  var Gc = { attachEvents: Xc, detachEvents: Wc };
  const bo = (s, e) => s.grid && e.grid && e.grid.rows > 1;
  function Uc() {
    const s = this,
      { realIndex: e, initialized: t, params: i, el: r } = s,
      n = i.breakpoints;
    if (!n || (n && Object.keys(n).length === 0)) return;
    const a = Re(),
      o =
        i.breakpointsBase === "window" || !i.breakpointsBase
          ? i.breakpointsBase
          : "container",
      u =
        ["window", "container"].includes(i.breakpointsBase) ||
        !i.breakpointsBase
          ? s.el
          : a.querySelector(i.breakpointsBase),
      l = s.getBreakpoint(n, o, u);
    if (!l || s.currentBreakpoint === l) return;
    const h = (l in n ? n[l] : void 0) || s.originalParams,
      m = bo(s, i),
      p = bo(s, h),
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
      ["navigation", "pagination", "scrollbar"].forEach((E) => {
        if (typeof h[E] == "undefined") return;
        const b = i[E] && i[E].enabled,
          T = h[E] && h[E].enabled;
        b && !T && s[E].disable(), !b && T && s[E].enable();
      });
    const _ = h.direction && h.direction !== i.direction,
      y = i.loop && (h.slidesPerView !== i.slidesPerView || _),
      v = i.loop;
    _ && t && s.changeDirection(), Lt(s.params, h);
    const D = s.params.enabled,
      w = s.params.loop;
    Object.assign(s, {
      allowTouchMove: s.params.allowTouchMove,
      allowSlideNext: s.params.allowSlideNext,
      allowSlidePrev: s.params.allowSlidePrev,
    }),
      g && !D ? s.disable() : !g && D && s.enable(),
      (s.currentBreakpoint = l),
      s.emit("_beforeBreakpoint", h),
      t &&
        (y
          ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
          : !v && w
          ? (s.loopCreate(e), s.updateSlides())
          : v && !w && s.loopDestroy()),
      s.emit("breakpoint", h);
  }
  function jc(s, e, t) {
    if ((e === void 0 && (e = "window"), !s || (e === "container" && !t)))
      return;
    let i = !1;
    const r = ve(),
      n = e === "window" ? r.innerHeight : t.clientHeight,
      a = Object.keys(s).map((o) => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
          const u = parseFloat(o.substr(1));
          return { value: n * u, point: o };
        }
        return { value: o, point: o };
      });
    a.sort((o, u) => parseInt(o.value, 10) - parseInt(u.value, 10));
    for (let o = 0; o < a.length; o += 1) {
      const { point: u, value: l } = a[o];
      e === "window"
        ? r.matchMedia(`(min-width: ${l}px)`).matches && (i = u)
        : l <= t.clientWidth && (i = u);
    }
    return i || "max";
  }
  var Kc = { setBreakpoint: Uc, getBreakpoint: jc };
  function Zc(s, e) {
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
  function Qc() {
    const s = this,
      { classNames: e, params: t, rtl: i, el: r, device: n } = s,
      a = Zc(
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
  function Jc() {
    const s = this,
      { el: e, classNames: t } = s;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), s.emitContainerClasses());
  }
  var ed = { addClasses: Qc, removeClasses: Jc };
  function td() {
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
  var id = { checkOverflow: td },
    So = {
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
  function rd(s, e) {
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
  const Wn = {
      eventsEmitter: ec,
      update: dc,
      translate: vc,
      transition: wc,
      slide: Pc,
      loop: Lc,
      grabCursor: zc,
      events: Gc,
      breakpoints: Kc,
      checkOverflow: id,
      classes: ed,
    },
    Gn = {};
  class Et {
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
      const a = Re();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const c = [];
        return (
          a.querySelectorAll(t.el).forEach((h) => {
            const m = Lt({}, t, { el: h });
            c.push(new Et(m));
          }),
          c
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = ho()),
        (o.device = mo({ userAgent: t.userAgent })),
        (o.browser = go()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const u = {};
      o.modules.forEach((c) => {
        c({
          params: t,
          swiper: o,
          extendParams: rd(t, u),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const l = Lt({}, So, u);
      return (
        (o.params = Lt({}, l, Gn, t)),
        (o.originalParams = Lt({}, o.params)),
        (o.passedParams = Lt({}, t)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((c) => {
            o.on(c, o.params.on[c]);
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
            return Math.trunc(this.translate / gt(2, 23)) * gt(2, 23);
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
        n = Zr(r[0]);
      return Zr(e) - n;
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
          size: u,
          activeIndex: l,
        } = i;
      let c = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let h = n[l] ? Math.ceil(n[l].swiperSlideSize) : 0,
          m;
        for (let p = l + 1; p < n.length; p += 1)
          n[p] &&
            !m &&
            ((h += Math.ceil(n[p].swiperSlideSize)),
            (c += 1),
            h > u && (m = !0));
        for (let p = l - 1; p >= 0; p -= 1)
          n[p] &&
            !m &&
            ((h += n[p].swiperSlideSize), (c += 1), h > u && (m = !0));
      } else if (e === "current")
        for (let h = l + 1; h < n.length; h += 1)
          (t ? a[h] + o[h] - a[l] < u : a[h] - a[l] < u) && (c += 1);
      else for (let h = l - 1; h >= 0; h -= 1) a[l] - a[h] < u && (c += 1);
      return c;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
          a.complete && Xs(e, a);
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
          : Je(i, r())[0];
      return (
        !a &&
          t.params.createElements &&
          ((a = kt("div", t.params.wrapperClass)),
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
          rtl: i.dir.toLowerCase() === "rtl" || Li(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || Li(i, "direction") === "rtl"),
          wrongRTL: Li(a, "display") === "-webkit-box",
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
            ? Xs(t, n)
            : n.addEventListener("load", (a) => {
                Xs(t, a.target);
              });
        }),
        Xn(t),
        (t.initialized = !0),
        Xn(t),
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
              o.forEach((u) => {
                u.classList.remove(
                  r.slideVisibleClass,
                  r.slideFullyVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  u.removeAttribute("style"),
                  u.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((u) => {
            i.off(u);
          }),
          e !== !1 &&
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Ur(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Lt(Gn, e);
    }
    static get extendedDefaults() {
      return Gn;
    }
    static get defaults() {
      return So;
    }
    static installModule(e) {
      Et.prototype.__modules__ || (Et.prototype.__modules__ = []);
      const t = Et.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Et.installModule(t)), Et)
        : (Et.installModule(e), Et);
    }
  }
  Object.keys(Wn).forEach((s) => {
    Object.keys(Wn[s]).forEach((e) => {
      Et.prototype[e] = Wn[s][e];
    });
  }),
    Et.use([Qu, Ju]);
  function sd(s) {
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
    const a = Re();
    e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    const o = a.createElement("div");
    function u(f, d) {
      const g = e.params.virtual;
      if (g.cache && e.virtual.cache[d]) return e.virtual.cache[d];
      let _;
      return (
        g.renderSlide
          ? ((_ = g.renderSlide.call(e, f, d)),
            typeof _ == "string" && ((o.innerHTML = _), (_ = o.children[0])))
          : e.isElement
          ? (_ = kt("swiper-slide"))
          : (_ = kt("div", e.params.slideClass)),
        _.setAttribute("data-swiper-slide-index", d),
        g.renderSlide || (_.innerHTML = f),
        g.cache && (e.virtual.cache[d] = _),
        _
      );
    }
    function l(f, d, g) {
      const {
        slidesPerView: _,
        slidesPerGroup: y,
        centeredSlides: v,
        loop: D,
        initialSlide: w,
      } = e.params;
      if (d && !D && w > 0) return;
      const { addSlidesBefore: E, addSlidesAfter: b } = e.params.virtual,
        { from: T, to: x, slides: S, slidesGrid: L, offset: P } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const k = typeof g == "undefined" ? e.activeIndex || 0 : g;
      let F;
      e.rtlTranslate ? (F = "right") : (F = e.isHorizontal() ? "left" : "top");
      let R, I;
      v
        ? ((R = Math.floor(_ / 2) + y + b), (I = Math.floor(_ / 2) + y + E))
        : ((R = _ + (y - 1) + b), (I = (D ? _ : y) + E));
      let M = k - I,
        O = k + R;
      D || ((M = Math.max(M, 0)), (O = Math.min(O, S.length - 1)));
      let A = (e.slidesGrid[M] || 0) - (e.slidesGrid[0] || 0);
      D && k >= I
        ? ((M -= I), v || (A += e.slidesGrid[0]))
        : D && k < I && ((M = -I), v && (A += e.slidesGrid[0])),
        Object.assign(e.virtual, {
          from: M,
          to: O,
          offset: A,
          slidesGrid: e.slidesGrid,
          slidesBefore: I,
          slidesAfter: R,
        });
      function C() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          r("virtualUpdate");
      }
      if (T === M && x === O && !f) {
        e.slidesGrid !== L &&
          A !== P &&
          e.slides.forEach(($) => {
            $.style[F] = `${A - Math.abs(e.cssOverflowAdjustment())}px`;
          }),
          e.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: A,
          from: M,
          to: O,
          slides: (function () {
            const N = [];
            for (let U = M; U <= O; U += 1) N.push(S[U]);
            return N;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? C() : r("virtualUpdate");
        return;
      }
      const Y = [],
        Q = [],
        we = ($) => {
          let N = $;
          return (
            $ < 0 ? (N = S.length + $) : N >= S.length && (N = N - S.length), N
          );
        };
      if (f)
        e.slides
          .filter(($) => $.matches(`.${e.params.slideClass}, swiper-slide`))
          .forEach(($) => {
            $.remove();
          });
      else
        for (let $ = T; $ <= x; $ += 1)
          if ($ < M || $ > O) {
            const N = we($);
            e.slides
              .filter((U) =>
                U.matches(
                  `.${e.params.slideClass}[data-swiper-slide-index="${N}"], swiper-slide[data-swiper-slide-index="${N}"]`
                )
              )
              .forEach((U) => {
                U.remove();
              });
          }
      const se = D ? -S.length : 0,
        B = D ? S.length * 2 : S.length;
      for (let $ = se; $ < B; $ += 1)
        if ($ >= M && $ <= O) {
          const N = we($);
          typeof x == "undefined" || f
            ? Q.push(N)
            : ($ > x && Q.push(N), $ < T && Y.push(N));
        }
      if (
        (Q.forEach(($) => {
          e.slidesEl.append(u(S[$], $));
        }),
        D)
      )
        for (let $ = Y.length - 1; $ >= 0; $ -= 1) {
          const N = Y[$];
          e.slidesEl.prepend(u(S[N], N));
        }
      else
        Y.sort(($, N) => N - $),
          Y.forEach(($) => {
            e.slidesEl.prepend(u(S[$], $));
          });
      Je(e.slidesEl, ".swiper-slide, swiper-slide").forEach(($) => {
        $.style[F] = `${A - Math.abs(e.cssOverflowAdjustment())}px`;
      }),
        C();
    }
    function c(f) {
      if (typeof f == "object" && "length" in f)
        for (let d = 0; d < f.length; d += 1)
          f[d] && e.virtual.slides.push(f[d]);
      else e.virtual.slides.push(f);
      l(!0);
    }
    function h(f) {
      const d = e.activeIndex;
      let g = d + 1,
        _ = 1;
      if (Array.isArray(f)) {
        for (let y = 0; y < f.length; y += 1)
          f[y] && e.virtual.slides.unshift(f[y]);
        (g = d + f.length), (_ = f.length);
      } else e.virtual.slides.unshift(f);
      if (e.params.virtual.cache) {
        const y = e.virtual.cache,
          v = {};
        Object.keys(y).forEach((D) => {
          const w = y[D],
            E = w.getAttribute("data-swiper-slide-index");
          E && w.setAttribute("data-swiper-slide-index", parseInt(E, 10) + _),
            (v[parseInt(D, 10) + _] = w);
        }),
          (e.virtual.cache = v);
      }
      l(!0), e.slideTo(g, 0);
    }
    function m(f) {
      if (typeof f == "undefined" || f === null) return;
      let d = e.activeIndex;
      if (Array.isArray(f))
        for (let g = f.length - 1; g >= 0; g -= 1)
          e.params.virtual.cache &&
            (delete e.virtual.cache[f[g]],
            Object.keys(e.virtual.cache).forEach((_) => {
              _ > f &&
                ((e.virtual.cache[_ - 1] = e.virtual.cache[_]),
                e.virtual.cache[_ - 1].setAttribute(
                  "data-swiper-slide-index",
                  _ - 1
                ),
                delete e.virtual.cache[_]);
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
      l(!0), e.slideTo(d, 0);
    }
    function p() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        l(!0),
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
          d.forEach((g, _) => {
            g.setAttribute("data-swiper-slide-index", _),
              (e.virtual.cache[_] = g),
              g.remove();
          }));
      }
      f || (e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        (e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0),
        l(!1, !0);
    }),
      i("setTranslate", () => {
        e.params.virtual.enabled &&
          (e.params.cssMode && !e._immediateVirtual
            ? (clearTimeout(n),
              (n = setTimeout(() => {
                l();
              }, 100)))
            : l());
      }),
      i("init update resize", () => {
        e.params.virtual.enabled &&
          e.params.cssMode &&
          Kr(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: c,
        prependSlide: h,
        removeSlide: m,
        removeAllSlides: p,
        update: l,
      });
  }
  function nd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Re(),
      a = ve();
    (e.keyboard = { enabled: !1 }),
      t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
    function o(c) {
      if (!e.enabled) return;
      const { rtlTranslate: h } = e;
      let m = c;
      m.originalEvent && (m = m.originalEvent);
      const p = m.keyCode || m.charCode,
        f = e.params.keyboard.pageUpDown,
        d = f && p === 33,
        g = f && p === 34,
        _ = p === 37,
        y = p === 39,
        v = p === 38,
        D = p === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && y) || (e.isVertical() && D) || g)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && _) || (e.isVertical() && v) || d))
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
        if (e.params.keyboard.onlyInViewport && (d || g || _ || y || v || D)) {
          let w = !1;
          if (
            Ki(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
            Ki(e.el, `.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const E = e.el,
            b = E.clientWidth,
            T = E.clientHeight,
            x = a.innerWidth,
            S = a.innerHeight,
            L = Hs(E);
          h && (L.left -= E.scrollLeft);
          const P = [
            [L.left, L.top],
            [L.left + b, L.top],
            [L.left, L.top + T],
            [L.left + b, L.top + T],
          ];
          for (let k = 0; k < P.length; k += 1) {
            const F = P[k];
            if (F[0] >= 0 && F[0] <= x && F[1] >= 0 && F[1] <= S) {
              if (F[0] === 0 && F[1] === 0) continue;
              w = !0;
            }
          }
          if (!w) return;
        }
        e.isHorizontal()
          ? ((d || g || _ || y) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (((g || y) && !h) || ((d || _) && h)) && e.slideNext(),
            (((d || _) && !h) || ((g || y) && h)) && e.slidePrev())
          : ((d || g || v || D) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (g || D) && e.slideNext(),
            (d || v) && e.slidePrev()),
          r("keyPress", p);
      }
    }
    function u() {
      e.keyboard.enabled ||
        (n.addEventListener("keydown", o), (e.keyboard.enabled = !0));
    }
    function l() {
      e.keyboard.enabled &&
        (n.removeEventListener("keydown", o), (e.keyboard.enabled = !1));
    }
    i("init", () => {
      e.params.keyboard.enabled && u();
    }),
      i("destroy", () => {
        e.keyboard.enabled && l();
      }),
      Object.assign(e.keyboard, { enable: u, disable: l });
  }
  function ad(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = ve();
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
      o = nt(),
      u;
    const l = [];
    function c(v) {
      let b = 0,
        T = 0,
        x = 0,
        S = 0;
      return (
        "detail" in v && (T = v.detail),
        "wheelDelta" in v && (T = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (T = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (b = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((b = T), (T = 0)),
        (x = b * 10),
        (S = T * 10),
        "deltaY" in v && (S = v.deltaY),
        "deltaX" in v && (x = v.deltaX),
        v.shiftKey && !x && ((x = S), (S = 0)),
        (x || S) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((x *= 40), (S *= 40))
            : ((x *= 800), (S *= 800))),
        x && !b && (b = x < 1 ? -1 : 1),
        S && !T && (T = S < 1 ? -1 : 1),
        { spinX: b, spinY: T, pixelX: x, pixelY: S }
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
          nt() - o < e.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && nt() - o < 60
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
      const D = e.params.mousewheel;
      if (v.direction < 0) {
        if (e.isEnd && !e.params.loop && D.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && D.releaseOnEdges) return !0;
      return !1;
    }
    function d(v) {
      let D = v,
        w = !0;
      if (
        !e.enabled ||
        v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
      )
        return;
      const E = e.params.mousewheel;
      e.params.cssMode && D.preventDefault();
      let b = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (b = document.querySelector(e.params.mousewheel.eventsTarget));
      const T = b && b.contains(D.target);
      if (!e.mouseEntered && !T && !E.releaseOnEdges) return !0;
      D.originalEvent && (D = D.originalEvent);
      let x = 0;
      const S = e.rtlTranslate ? -1 : 1,
        L = c(D);
      if (E.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(L.pixelX) > Math.abs(L.pixelY)) x = -L.pixelX * S;
          else return !0;
        else if (Math.abs(L.pixelY) > Math.abs(L.pixelX)) x = -L.pixelY;
        else return !0;
      else
        x = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * S : -L.pixelY;
      if (x === 0) return !0;
      E.invert && (x = -x);
      let P = e.getTranslate() + x * E.sensitivity;
      if (
        (P >= e.minTranslate() && (P = e.minTranslate()),
        P <= e.maxTranslate() && (P = e.maxTranslate()),
        (w = e.params.loop
          ? !0
          : !(P === e.minTranslate() || P === e.maxTranslate())),
        w && e.params.nested && D.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const k = {
          time: nt(),
          delta: Math.abs(x),
          direction: Math.sign(x),
          raw: v,
        };
        l.length >= 2 && l.shift();
        const F = l.length ? l[l.length - 1] : void 0;
        if (
          (l.push(k),
          F
            ? (k.direction !== F.direction ||
                k.delta > F.delta ||
                k.time > F.time + 150) &&
              p(k)
            : p(k),
          f(k))
        )
          return !0;
      } else {
        const k = { time: nt(), delta: Math.abs(x), direction: Math.sign(x) },
          F =
            u &&
            k.time < u.time + 500 &&
            k.delta <= u.delta &&
            k.direction === u.direction;
        if (!F) {
          u = void 0;
          let R = e.getTranslate() + x * E.sensitivity;
          const I = e.isBeginning,
            M = e.isEnd;
          if (
            (R >= e.minTranslate() && (R = e.minTranslate()),
            R <= e.maxTranslate() && (R = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(R),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!I && e.isBeginning) || (!M && e.isEnd)) &&
              e.updateSlidesClasses(),
            e.params.loop &&
              e.loopFix({
                direction: k.direction < 0 ? "next" : "prev",
                byMousewheel: !0,
              }),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(a), (a = void 0), l.length >= 15 && l.shift();
            const O = l.length ? l[l.length - 1] : void 0,
              A = l[0];
            if (
              (l.push(k),
              O && (k.delta > O.delta || k.direction !== O.direction))
            )
              l.splice(0);
            else if (
              l.length >= 15 &&
              k.time - A.time < 500 &&
              A.delta - k.delta >= 1 &&
              k.delta <= 6
            ) {
              const C = x > 0 ? 0.8 : 0.2;
              (u = k),
                l.splice(0),
                (a = vt(() => {
                  e.destroyed ||
                    !e.params ||
                    e.slideToClosest(e.params.speed, !0, void 0, C);
                }, 0));
            }
            a ||
              (a = vt(() => {
                if (e.destroyed || !e.params) return;
                const C = 0.5;
                (u = k),
                  l.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, C);
              }, 500));
          }
          if (
            (F || r("scroll", D),
            e.params.autoplay &&
              e.params.autoplay.disableOnInteraction &&
              e.autoplay.stop(),
            E.releaseOnEdges &&
              (R === e.minTranslate() || R === e.maxTranslate()))
          )
            return !0;
        }
      }
      return D.preventDefault ? D.preventDefault() : (D.returnValue = !1), !1;
    }
    function g(v) {
      let D = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (D = document.querySelector(e.params.mousewheel.eventsTarget)),
        D[v]("mouseenter", h),
        D[v]("mouseleave", m),
        D[v]("wheel", d);
    }
    function _() {
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
        e.params.mousewheel.enabled && _();
    }),
      i("destroy", () => {
        e.params.cssMode && _(), e.mousewheel.enabled && y();
      }),
      Object.assign(e.mousewheel, { enable: _, disable: y });
  }
  function Un(s, e, t, i) {
    return (
      s.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let n = Je(s.el, `.${i[r]}`)[0];
            n || ((n = kt("div", i[r])), (n.className = i[r]), s.el.append(n)),
              (t[r] = n),
              (e[r] = n);
          }
        }),
      t
    );
  }
  function od(s) {
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
      (f = ae(f)),
        f.forEach((_) => {
          _ &&
            (_.classList[d ? "add" : "remove"](...g.disabledClass.split(" ")),
            _.tagName === "BUTTON" && (_.disabled = d),
            e.params.watchOverflow &&
              e.enabled &&
              _.classList[e.isLocked ? "add" : "remove"](g.lockClass));
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
    function u(f) {
      f.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function l(f) {
      f.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function c() {
      const f = e.params.navigation;
      if (
        ((e.params.navigation = Un(
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
        (d = ae(d)),
        (g = ae(g));
      const _ = (y, v) => {
        y && y.addEventListener("click", v === "next" ? l : u),
          !e.enabled && y && y.classList.add(...f.lockClass.split(" "));
      };
      d.forEach((y) => _(y, "next")), g.forEach((y) => _(y, "prev"));
    }
    function h() {
      let { nextEl: f, prevEl: d } = e.navigation;
      (f = ae(f)), (d = ae(d));
      const g = (_, y) => {
        _.removeEventListener("click", y === "next" ? l : u),
          _.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      f.forEach((_) => g(_, "next")), d.forEach((_) => g(_, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? p() : (c(), o());
    }),
      i("toEdge fromEdge lock unlock", () => {
        o();
      }),
      i("destroy", () => {
        h();
      }),
      i("enable disable", () => {
        let { nextEl: f, prevEl: d } = e.navigation;
        if (((f = ae(f)), (d = ae(d)), e.enabled)) {
          o();
          return;
        }
        [...f, ...d]
          .filter((g) => !!g)
          .forEach((g) => g.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (f, d) => {
        let { nextEl: g, prevEl: _ } = e.navigation;
        (g = ae(g)), (_ = ae(_));
        const y = d.target;
        let v = _.includes(y) || g.includes(y);
        if (e.isElement && !v) {
          const D = d.path || (d.composedPath && d.composedPath());
          D && (v = D.find((w) => g.includes(w) || _.includes(w)));
        }
        if (e.params.navigation.hideOnClick && !v) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === y || e.pagination.el.contains(y))
          )
            return;
          let D;
          g.length
            ? (D = g[0].classList.contains(e.params.navigation.hiddenClass))
            : _.length &&
              (D = _[0].classList.contains(e.params.navigation.hiddenClass)),
            r(D === !0 ? "navigationShow" : "navigationHide"),
            [...g, ..._]
              .filter((w) => !!w)
              .forEach((w) =>
                w.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const m = () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          c(),
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
      init: c,
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
  function ld(s) {
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
    function u() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
      );
    }
    function l(y, v) {
      const { bulletActiveClass: D } = e.params.pagination;
      y &&
        ((y = y[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
        y &&
          (y.classList.add(`${D}-${v}`),
          (y = y[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
          y && y.classList.add(`${D}-${v}-${v}`)));
    }
    function c(y, v, D) {
      if (((y = y % D), (v = v % D), v === y + 1)) return "next";
      if (v === y - 1) return "previous";
    }
    function h(y) {
      const v = y.target.closest(bi(e.params.pagination.bulletClass));
      if (!v) return;
      y.preventDefault();
      const D = Zr(v) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === D) return;
        const w = c(e.realIndex, D, e.slides.length);
        w === "next"
          ? e.slideNext()
          : w === "previous"
          ? e.slidePrev()
          : e.slideToLoop(D);
      } else e.slideTo(D);
    }
    function m() {
      const y = e.rtl,
        v = e.params.pagination;
      if (u()) return;
      let D = e.pagination.el;
      D = ae(D);
      let w, E;
      const b =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        T = e.params.loop
          ? Math.ceil(b / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((E = e.previousRealIndex || 0),
            (w =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex != "undefined"
          ? ((w = e.snapIndex), (E = e.previousSnapIndex))
          : ((E = e.previousIndex || 0), (w = e.activeIndex || 0)),
        v.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const x = e.pagination.bullets;
        let S, L, P;
        if (
          (v.dynamicBullets &&
            ((a = $n(x[0], e.isHorizontal() ? "width" : "height")),
            D.forEach((k) => {
              k.style[e.isHorizontal() ? "width" : "height"] = `${
                a * (v.dynamicMainBullets + 4)
              }px`;
            }),
            v.dynamicMainBullets > 1 &&
              E !== void 0 &&
              ((o += w - (E || 0)),
              o > v.dynamicMainBullets - 1
                ? (o = v.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (S = Math.max(w - o, 0)),
            (L = S + (Math.min(x.length, v.dynamicMainBullets) - 1)),
            (P = (L + S) / 2)),
          x.forEach((k) => {
            const F = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((R) => `${v.bulletActiveClass}${R}`),
            ]
              .map((R) =>
                typeof R == "string" && R.includes(" ") ? R.split(" ") : R
              )
              .flat();
            k.classList.remove(...F);
          }),
          D.length > 1)
        )
          x.forEach((k) => {
            const F = Zr(k);
            F === w
              ? k.classList.add(...v.bulletActiveClass.split(" "))
              : e.isElement && k.setAttribute("part", "bullet"),
              v.dynamicBullets &&
                (F >= S &&
                  F <= L &&
                  k.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
                F === S && l(k, "prev"),
                F === L && l(k, "next"));
          });
        else {
          const k = x[w];
          if (
            (k && k.classList.add(...v.bulletActiveClass.split(" ")),
            e.isElement &&
              x.forEach((F, R) => {
                F.setAttribute("part", R === w ? "bullet-active" : "bullet");
              }),
            v.dynamicBullets)
          ) {
            const F = x[S],
              R = x[L];
            for (let I = S; I <= L; I += 1)
              x[I] &&
                x[I].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
            l(F, "prev"), l(R, "next");
          }
        }
        if (v.dynamicBullets) {
          const k = Math.min(x.length, v.dynamicMainBullets + 4),
            F = (a * k - a) / 2 - P * a,
            R = y ? "right" : "left";
          x.forEach((I) => {
            I.style[e.isHorizontal() ? R : "top"] = `${F}px`;
          });
        }
      }
      D.forEach((x, S) => {
        if (
          (v.type === "fraction" &&
            (x.querySelectorAll(bi(v.currentClass)).forEach((L) => {
              L.textContent = v.formatFractionCurrent(w + 1);
            }),
            x.querySelectorAll(bi(v.totalClass)).forEach((L) => {
              L.textContent = v.formatFractionTotal(T);
            })),
          v.type === "progressbar")
        ) {
          let L;
          v.progressbarOpposite
            ? (L = e.isHorizontal() ? "vertical" : "horizontal")
            : (L = e.isHorizontal() ? "horizontal" : "vertical");
          const P = (w + 1) / T;
          let k = 1,
            F = 1;
          L === "horizontal" ? (k = P) : (F = P),
            x.querySelectorAll(bi(v.progressbarFillClass)).forEach((R) => {
              (R.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${F})`),
                (R.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        v.type === "custom" && v.renderCustom
          ? ((x.innerHTML = v.renderCustom(e, w + 1, T)),
            S === 0 && r("paginationRender", x))
          : (S === 0 && r("paginationRender", x), r("paginationUpdate", x)),
          e.params.watchOverflow &&
            e.enabled &&
            x.classList[e.isLocked ? "add" : "remove"](v.lockClass);
      });
    }
    function p() {
      const y = e.params.pagination;
      if (u()) return;
      const v =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
      let D = e.pagination.el;
      D = ae(D);
      let w = "";
      if (y.type === "bullets") {
        let E = e.params.loop
          ? Math.ceil(v / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && E > v && (E = v);
        for (let b = 0; b < E; b += 1)
          y.renderBullet
            ? (w += y.renderBullet.call(e, b, y.bulletClass))
            : (w += `<${y.bulletElement} ${
                e.isElement ? 'part="bullet"' : ""
              } class="${y.bulletClass}"></${y.bulletElement}>`);
      }
      y.type === "fraction" &&
        (y.renderFraction
          ? (w = y.renderFraction.call(e, y.currentClass, y.totalClass))
          : (w = `<span class="${y.currentClass}"></span> / <span class="${y.totalClass}"></span>`)),
        y.type === "progressbar" &&
          (y.renderProgressbar
            ? (w = y.renderProgressbar.call(e, y.progressbarFillClass))
            : (w = `<span class="${y.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        D.forEach((E) => {
          y.type !== "custom" && (E.innerHTML = w || ""),
            y.type === "bullets" &&
              e.pagination.bullets.push(
                ...E.querySelectorAll(bi(y.bulletClass))
              );
        }),
        y.type !== "custom" && r("paginationRender", D[0]);
    }
    function f() {
      e.params.pagination = Un(
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
            v.length > 1 && (v = v.find((D) => Ki(D, ".swiper")[0] === e.el))),
          Array.isArray(v) && v.length === 1 && (v = v[0]),
          Object.assign(e.pagination, { el: v }),
          (v = ae(v)),
          v.forEach((D) => {
            y.type === "bullets" &&
              y.clickable &&
              D.classList.add(...(y.clickableClass || "").split(" ")),
              D.classList.add(y.modifierClass + y.type),
              D.classList.add(
                e.isHorizontal() ? y.horizontalClass : y.verticalClass
              ),
              y.type === "bullets" &&
                y.dynamicBullets &&
                (D.classList.add(`${y.modifierClass}${y.type}-dynamic`),
                (o = 0),
                y.dynamicMainBullets < 1 && (y.dynamicMainBullets = 1)),
              y.type === "progressbar" &&
                y.progressbarOpposite &&
                D.classList.add(y.progressbarOppositeClass),
              y.clickable && D.addEventListener("click", h),
              e.enabled || D.classList.add(y.lockClass);
          }));
    }
    function d() {
      const y = e.params.pagination;
      if (u()) return;
      let v = e.pagination.el;
      v &&
        ((v = ae(v)),
        v.forEach((D) => {
          D.classList.remove(y.hiddenClass),
            D.classList.remove(y.modifierClass + y.type),
            D.classList.remove(
              e.isHorizontal() ? y.horizontalClass : y.verticalClass
            ),
            y.clickable &&
              (D.classList.remove(...(y.clickableClass || "").split(" ")),
              D.removeEventListener("click", h));
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((D) =>
            D.classList.remove(...y.bulletActiveClass.split(" "))
          );
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const y = e.params.pagination;
      let { el: v } = e.pagination;
      (v = ae(v)),
        v.forEach((D) => {
          D.classList.remove(y.horizontalClass, y.verticalClass),
            D.classList.add(
              e.isHorizontal() ? y.horizontalClass : y.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.pagination.enabled === !1 ? _() : (f(), p(), m());
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
          ((y = ae(y)),
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
        const D = v.target,
          w = ae(e.pagination.el);
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          w &&
          w.length > 0 &&
          !D.classList.contains(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && D === e.navigation.nextEl) ||
              (e.navigation.prevEl && D === e.navigation.prevEl))
          )
            return;
          const E = w[0].classList.contains(e.params.pagination.hiddenClass);
          r(E === !0 ? "paginationShow" : "paginationHide"),
            w.forEach((b) =>
              b.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const g = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: y } = e.pagination;
        y &&
          ((y = ae(y)),
          y.forEach((v) =>
            v.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          f(),
          p(),
          m();
      },
      _ = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: y } = e.pagination;
        y &&
          ((y = ae(y)),
          y.forEach((v) =>
            v.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          d();
      };
    Object.assign(e.pagination, {
      enable: g,
      disable: _,
      render: p,
      update: m,
      init: f,
      destroy: d,
    });
  }
  function ud(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Re();
    let a = !1,
      o = null,
      u = null,
      l,
      c,
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
        { dragEl: F, el: R } = P,
        I = e.params.scrollbar,
        M = e.params.loop ? e.progressLoop : e.progress;
      let O = c,
        A = (h - c) * M;
      k
        ? ((A = -A), A > 0 ? ((O = c - A), (A = 0)) : -A + c > h && (O = h + A))
        : A < 0
        ? ((O = c + A), (A = 0))
        : A + c > h && (O = h - A),
        e.isHorizontal()
          ? ((F.style.transform = `translate3d(${A}px, 0, 0)`),
            (F.style.width = `${O}px`))
          : ((F.style.transform = `translate3d(0px, ${A}px, 0)`),
            (F.style.height = `${O}px`)),
        I.hide &&
          (clearTimeout(o),
          (R.style.opacity = 1),
          (o = setTimeout(() => {
            (R.style.opacity = 0), (R.style.transitionDuration = "400ms");
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
        { dragEl: k, el: F } = P;
      (k.style.width = ""),
        (k.style.height = ""),
        (h = e.isHorizontal() ? F.offsetWidth : F.offsetHeight),
        (m =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (c = h * m)
          : (c = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (k.style.width = `${c}px`)
          : (k.style.height = `${c}px`),
        m >= 1 ? (F.style.display = "none") : (F.style.display = ""),
        e.params.scrollbar.hide && (F.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          P.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function g(P) {
      return e.isHorizontal() ? P.clientX : P.clientY;
    }
    function _(P) {
      const { scrollbar: k, rtlTranslate: F } = e,
        { el: R } = k;
      let I;
      (I =
        (g(P) -
          Hs(R)[e.isHorizontal() ? "left" : "top"] -
          (l !== null ? l : c / 2)) /
        (h - c)),
        (I = Math.max(Math.min(I, 1), 0)),
        F && (I = 1 - I);
      const M = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * I;
      e.updateProgress(M),
        e.setTranslate(M),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function y(P) {
      const k = e.params.scrollbar,
        { scrollbar: F, wrapperEl: R } = e,
        { el: I, dragEl: M } = F;
      (a = !0),
        (l =
          P.target === M
            ? g(P) -
              P.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        P.preventDefault(),
        P.stopPropagation(),
        (R.style.transitionDuration = "100ms"),
        (M.style.transitionDuration = "100ms"),
        _(P),
        clearTimeout(u),
        (I.style.transitionDuration = "0ms"),
        k.hide && (I.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        r("scrollbarDragStart", P);
    }
    function v(P) {
      const { scrollbar: k, wrapperEl: F } = e,
        { el: R, dragEl: I } = k;
      a &&
        (P.preventDefault && P.cancelable
          ? P.preventDefault()
          : (P.returnValue = !1),
        _(P),
        (F.style.transitionDuration = "0ms"),
        (R.style.transitionDuration = "0ms"),
        (I.style.transitionDuration = "0ms"),
        r("scrollbarDragMove", P));
    }
    function D(P) {
      const k = e.params.scrollbar,
        { scrollbar: F, wrapperEl: R } = e,
        { el: I } = F;
      a &&
        ((a = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (R.style.transitionDuration = "")),
        k.hide &&
          (clearTimeout(u),
          (u = vt(() => {
            (I.style.opacity = 0), (I.style.transitionDuration = "400ms");
          }, 1e3))),
        r("scrollbarDragEnd", P),
        k.snapOnRelease && e.slideToClosest());
    }
    function w(P) {
      const { scrollbar: k, params: F } = e,
        R = k.el;
      if (!R) return;
      const I = R,
        M = F.passiveListeners ? { passive: !1, capture: !1 } : !1,
        O = F.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!I) return;
      const A = P === "on" ? "addEventListener" : "removeEventListener";
      I[A]("pointerdown", y, M),
        n[A]("pointermove", v, M),
        n[A]("pointerup", D, O);
    }
    function E() {
      !e.params.scrollbar.el || !e.scrollbar.el || w("on");
    }
    function b() {
      !e.params.scrollbar.el || !e.scrollbar.el || w("off");
    }
    function T() {
      const { scrollbar: P, el: k } = e;
      e.params.scrollbar = Un(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const F = e.params.scrollbar;
      if (!F.el) return;
      let R;
      if (
        (typeof F.el == "string" &&
          e.isElement &&
          (R = e.el.querySelector(F.el)),
        !R && typeof F.el == "string")
      ) {
        if (((R = n.querySelectorAll(F.el)), !R.length)) return;
      } else R || (R = F.el);
      e.params.uniqueNavElements &&
        typeof F.el == "string" &&
        R.length > 1 &&
        k.querySelectorAll(F.el).length === 1 &&
        (R = k.querySelector(F.el)),
        R.length > 0 && (R = R[0]),
        R.classList.add(e.isHorizontal() ? F.horizontalClass : F.verticalClass);
      let I;
      R &&
        ((I = R.querySelector(bi(e.params.scrollbar.dragClass))),
        I || ((I = kt("div", e.params.scrollbar.dragClass)), R.append(I))),
        Object.assign(P, { el: R, dragEl: I }),
        F.draggable && E(),
        R &&
          R.classList[e.enabled ? "remove" : "add"](
            ...ui(e.params.scrollbar.lockClass)
          );
    }
    function x() {
      const P = e.params.scrollbar,
        k = e.scrollbar.el;
      k &&
        k.classList.remove(
          ...ui(e.isHorizontal() ? P.horizontalClass : P.verticalClass)
        ),
        b();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const P = e.params.scrollbar;
      let { el: k } = e.scrollbar;
      (k = ae(k)),
        k.forEach((F) => {
          F.classList.remove(P.horizontalClass, P.verticalClass),
            F.classList.add(
              e.isHorizontal() ? P.horizontalClass : P.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? L() : (T(), d(), p());
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
            ...ui(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        x();
      });
    const S = () => {
        e.el.classList.remove(...ui(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...ui(e.params.scrollbar.scrollbarDisabledClass)
            ),
          T(),
          d(),
          p();
      },
      L = () => {
        e.el.classList.add(...ui(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...ui(e.params.scrollbar.scrollbarDisabledClass)
            ),
          x();
      };
    Object.assign(e.scrollbar, {
      enable: S,
      disable: L,
      updateSize: d,
      setTranslate: p,
      init: T,
      destroy: x,
    });
  }
  function cd(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ parallax: { enabled: !1 } });
    const r =
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      n = (u, l) => {
        const { rtl: c } = e,
          h = c ? -1 : 1,
          m = u.getAttribute("data-swiper-parallax") || "0";
        let p = u.getAttribute("data-swiper-parallax-x"),
          f = u.getAttribute("data-swiper-parallax-y");
        const d = u.getAttribute("data-swiper-parallax-scale"),
          g = u.getAttribute("data-swiper-parallax-opacity"),
          _ = u.getAttribute("data-swiper-parallax-rotate");
        if (
          (p || f
            ? ((p = p || "0"), (f = f || "0"))
            : e.isHorizontal()
            ? ((p = m), (f = "0"))
            : ((f = m), (p = "0")),
          p.indexOf("%") >= 0
            ? (p = `${parseInt(p, 10) * l * h}%`)
            : (p = `${p * l * h}px`),
          f.indexOf("%") >= 0
            ? (f = `${parseInt(f, 10) * l}%`)
            : (f = `${f * l}px`),
          typeof g != "undefined" && g !== null)
        ) {
          const v = g - (g - 1) * (1 - Math.abs(l));
          u.style.opacity = v;
        }
        let y = `translate3d(${p}, ${f}, 0px)`;
        if (typeof d != "undefined" && d !== null) {
          const v = d - (d - 1) * (1 - Math.abs(l));
          y += ` scale(${v})`;
        }
        if (_ && typeof _ != "undefined" && _ !== null) {
          const v = _ * l * -1;
          y += ` rotate(${v}deg)`;
        }
        u.style.transform = y;
      },
      a = () => {
        const { el: u, slides: l, progress: c, snapGrid: h, isElement: m } = e,
          p = Je(u, r);
        e.isElement && p.push(...Je(e.hostEl, r)),
          p.forEach((f) => {
            n(f, c);
          }),
          l.forEach((f, d) => {
            let g = f.progress;
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== "auto" &&
              (g += Math.ceil(d / 2) - c * (h.length - 1)),
              (g = Math.min(Math.max(g, -1), 1)),
              f
                .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
                .forEach((_) => {
                  n(_, g);
                });
          });
      },
      o = function (u) {
        u === void 0 && (u = e.params.speed);
        const { el: l, hostEl: c } = e,
          h = [...l.querySelectorAll(r)];
        e.isElement && h.push(...c.querySelectorAll(r)),
          h.forEach((m) => {
            let p =
              parseInt(m.getAttribute("data-swiper-parallax-duration"), 10) ||
              u;
            u === 0 && (p = 0), (m.style.transitionDuration = `${p}ms`);
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
      i("setTransition", (u, l) => {
        e.params.parallax.enabled && o(l);
      });
  }
  function dd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = ve();
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
      u = !1,
      l = { x: 0, y: 0 };
    const c = -3;
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
    let _ = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return _;
      },
      set(B) {
        if (_ !== B) {
          const $ = f.imageEl,
            N = f.slideEl;
          r("zoomChange", B, $, N);
        }
        _ = B;
      },
    });
    function y() {
      if (p.length < 2) return 1;
      const B = p[0].pageX,
        $ = p[0].pageY,
        N = p[1].pageX,
        U = p[1].pageY;
      return Math.sqrt(gt(N - B, 2) + gt(U - $, 2));
    }
    function v() {
      const B = e.params.zoom,
        $ = f.imageWrapEl.getAttribute("data-swiper-zoom") || B.maxRatio;
      if (B.limitToOriginalSize && f.imageEl && f.imageEl.naturalWidth) {
        const N = f.imageEl.naturalWidth / f.imageEl.offsetWidth;
        return Math.min(N, $);
      }
      return $;
    }
    function D() {
      if (p.length < 2) return { x: null, y: null };
      const B = f.imageEl.getBoundingClientRect();
      return [
        (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - B.x - n.scrollX) / a,
        (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - B.y - n.scrollY) / a,
      ];
    }
    function w() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function E(B) {
      const $ = w();
      return !!(
        B.target.matches($) ||
        e.slides.filter((N) => N.contains(B.target)).length > 0
      );
    }
    function b(B) {
      const $ = `.${e.params.zoom.containerClass}`;
      return !!(
        B.target.matches($) ||
        [...e.hostEl.querySelectorAll($)].filter((N) => N.contains(B.target))
          .length > 0
      );
    }
    function T(B) {
      if ((B.pointerType === "mouse" && p.splice(0, p.length), !E(B))) return;
      const $ = e.params.zoom;
      if (((h = !1), (m = !1), p.push(B), !(p.length < 2))) {
        if (((h = !0), (f.scaleStart = y()), !f.slideEl)) {
          (f.slideEl = B.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
            f.slideEl || (f.slideEl = e.slides[e.activeIndex]);
          let N = f.slideEl.querySelector(`.${$.containerClass}`);
          if (
            (N &&
              (N = N.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
            (f.imageEl = N),
            N
              ? (f.imageWrapEl = Ki(f.imageEl, `.${$.containerClass}`)[0])
              : (f.imageWrapEl = void 0),
            !f.imageWrapEl)
          ) {
            f.imageEl = void 0;
            return;
          }
          f.maxRatio = v();
        }
        if (f.imageEl) {
          const [N, U] = D();
          (f.originX = N),
            (f.originY = U),
            (f.imageEl.style.transitionDuration = "0ms");
        }
        o = !0;
      }
    }
    function x(B) {
      if (!E(B)) return;
      const $ = e.params.zoom,
        N = e.zoom,
        U = p.findIndex((ce) => ce.pointerId === B.pointerId);
      U >= 0 && (p[U] = B),
        !(p.length < 2) &&
          ((m = !0),
          (f.scaleMove = y()),
          f.imageEl &&
            ((N.scale = (f.scaleMove / f.scaleStart) * a),
            N.scale > f.maxRatio &&
              (N.scale = f.maxRatio - 1 + gt(N.scale - f.maxRatio + 1, 0.5)),
            N.scale < $.minRatio &&
              (N.scale = $.minRatio + 1 - gt($.minRatio - N.scale + 1, 0.5)),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`)));
    }
    function S(B) {
      if (!E(B) || (B.pointerType === "mouse" && B.type === "pointerout"))
        return;
      const $ = e.params.zoom,
        N = e.zoom,
        U = p.findIndex((ce) => ce.pointerId === B.pointerId);
      U >= 0 && p.splice(U, 1),
        !(!h || !m) &&
          ((h = !1),
          (m = !1),
          f.imageEl &&
            ((N.scale = Math.max(Math.min(N.scale, f.maxRatio), $.minRatio)),
            (f.imageEl.style.transitionDuration = `${e.params.speed}ms`),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`),
            (a = N.scale),
            (o = !1),
            N.scale > 1 && f.slideEl
              ? f.slideEl.classList.add(`${$.zoomedSlideClass}`)
              : N.scale <= 1 &&
                f.slideEl &&
                f.slideEl.classList.remove(`${$.zoomedSlideClass}`),
            N.scale === 1 &&
              ((f.originX = 0), (f.originY = 0), (f.slideEl = void 0))));
    }
    let L;
    function P() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function k() {
      clearTimeout(L),
        (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
        (L = setTimeout(() => {
          e.destroyed || P();
        }));
    }
    function F(B) {
      const $ = e.device;
      if (!f.imageEl || d.isTouched) return;
      $.android && B.cancelable && B.preventDefault(), (d.isTouched = !0);
      const N = p.length > 0 ? p[0] : B;
      (d.touchesStart.x = N.pageX), (d.touchesStart.y = N.pageY);
    }
    function R(B) {
      const N = B.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
      if (!E(B) || !b(B)) return;
      const U = e.zoom;
      if (!f.imageEl) return;
      if (!d.isTouched || !f.slideEl) {
        N && O(B);
        return;
      }
      if (N) {
        O(B);
        return;
      }
      d.isMoved ||
        ((d.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
        (d.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
        (d.startX = Bn(f.imageWrapEl, "x") || 0),
        (d.startY = Bn(f.imageWrapEl, "y") || 0),
        (f.slideWidth = f.slideEl.offsetWidth),
        (f.slideHeight = f.slideEl.offsetHeight),
        (f.imageWrapEl.style.transitionDuration = "0ms"));
      const ce = d.width * U.scale,
        it = d.height * U.scale;
      if (
        ((d.minX = Math.min(f.slideWidth / 2 - ce / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - it / 2, 0)),
        (d.maxY = -d.minY),
        (d.touchesCurrent.x = p.length > 0 ? p[0].pageX : B.pageX),
        (d.touchesCurrent.y = p.length > 0 ? p[0].pageY : B.pageY),
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
      B.cancelable && B.preventDefault(),
        B.stopPropagation(),
        k(),
        (d.isMoved = !0);
      const xe = (U.scale - a) / (f.maxRatio - e.params.zoom.minRatio),
        { originX: J, originY: ne } = f;
      (d.currentX =
        d.touchesCurrent.x -
        d.touchesStart.x +
        d.startX +
        xe * (d.width - J * 2)),
        (d.currentY =
          d.touchesCurrent.y -
          d.touchesStart.y +
          d.startY +
          xe * (d.height - ne * 2)),
        d.currentX < d.minX &&
          (d.currentX = d.minX + 1 - gt(d.minX - d.currentX + 1, 0.8)),
        d.currentX > d.maxX &&
          (d.currentX = d.maxX - 1 + gt(d.currentX - d.maxX + 1, 0.8)),
        d.currentY < d.minY &&
          (d.currentY = d.minY + 1 - gt(d.minY - d.currentY + 1, 0.8)),
        d.currentY > d.maxY &&
          (d.currentY = d.maxY - 1 + gt(d.currentY - d.maxY + 1, 0.8)),
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
    function I() {
      const B = e.zoom;
      if (((p.length = 0), !f.imageEl)) return;
      if (!d.isTouched || !d.isMoved) {
        (d.isTouched = !1), (d.isMoved = !1);
        return;
      }
      (d.isTouched = !1), (d.isMoved = !1);
      let $ = 300,
        N = 300;
      const U = g.x * $,
        ce = d.currentX + U,
        it = g.y * N,
        Se = d.currentY + it;
      g.x !== 0 && ($ = Math.abs((ce - d.currentX) / g.x)),
        g.y !== 0 && (N = Math.abs((Se - d.currentY) / g.y));
      const xe = Math.max($, N);
      (d.currentX = ce), (d.currentY = Se);
      const J = d.width * B.scale,
        ne = d.height * B.scale;
      (d.minX = Math.min(f.slideWidth / 2 - J / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - ne / 2, 0)),
        (d.maxY = -d.minY),
        (d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
        (d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
        (f.imageWrapEl.style.transitionDuration = `${xe}ms`),
        (f.imageWrapEl.style.transform = `translate3d(${d.currentX}px, ${d.currentY}px,0)`);
    }
    function M() {
      const B = e.zoom;
      f.slideEl &&
        e.activeIndex !== e.slides.indexOf(f.slideEl) &&
        (f.imageEl &&
          (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        f.imageWrapEl && (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        f.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
        (B.scale = 1),
        (a = 1),
        (f.slideEl = void 0),
        (f.imageEl = void 0),
        (f.imageWrapEl = void 0),
        (f.originX = 0),
        (f.originY = 0));
    }
    function O(B) {
      if (a <= 1 || !f.imageWrapEl || !E(B) || !b(B)) return;
      const $ = n.getComputedStyle(f.imageWrapEl).transform,
        N = new n.DOMMatrix($);
      if (!u) {
        (u = !0),
          (l.x = B.clientX),
          (l.y = B.clientY),
          (d.startX = N.e),
          (d.startY = N.f),
          (d.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
          (d.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
          (f.slideWidth = f.slideEl.offsetWidth),
          (f.slideHeight = f.slideEl.offsetHeight);
        return;
      }
      const U = (B.clientX - l.x) * c,
        ce = (B.clientY - l.y) * c,
        it = d.width * a,
        Se = d.height * a,
        xe = f.slideWidth,
        J = f.slideHeight,
        ne = Math.min(xe / 2 - it / 2, 0),
        _e = -ne,
        We = Math.min(J / 2 - Se / 2, 0),
        z = -We,
        qe = Math.max(Math.min(d.startX + U, _e), ne),
        ft = Math.max(Math.min(d.startY + ce, z), We);
      (f.imageWrapEl.style.transitionDuration = "0ms"),
        (f.imageWrapEl.style.transform = `translate3d(${qe}px, ${ft}px, 0)`),
        (l.x = B.clientX),
        (l.y = B.clientY),
        (d.startX = qe),
        (d.startY = ft),
        (d.currentX = qe),
        (d.currentY = ft);
    }
    function A(B) {
      const $ = e.zoom,
        N = e.params.zoom;
      if (!f.slideEl) {
        B &&
          B.target &&
          (f.slideEl = B.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
          f.slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (f.slideEl = Je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (f.slideEl = e.slides[e.activeIndex]));
        let Ze = f.slideEl.querySelector(`.${N.containerClass}`);
        Ze &&
          (Ze = Ze.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = Ze),
          Ze
            ? (f.imageWrapEl = Ki(f.imageEl, `.${N.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      if (!f.imageEl || !f.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        f.slideEl.classList.add(`${N.zoomedSlideClass}`);
      let U, ce, it, Se, xe, J, ne, _e, We, z, qe, ft, Xt, De, Wt, ei, si, Fe;
      typeof d.touchesStart.x == "undefined" && B
        ? ((U = B.pageX), (ce = B.pageY))
        : ((U = d.touchesStart.x), (ce = d.touchesStart.y));
      const ti = a,
        pe = typeof B == "number" ? B : null;
      a === 1 &&
        pe &&
        ((U = void 0),
        (ce = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0));
      const Ot = v();
      ($.scale = pe || Ot),
        (a = pe || Ot),
        B && !(a === 1 && pe)
          ? ((si = f.slideEl.offsetWidth),
            (Fe = f.slideEl.offsetHeight),
            (it = Hs(f.slideEl).left + n.scrollX),
            (Se = Hs(f.slideEl).top + n.scrollY),
            (xe = it + si / 2 - U),
            (J = Se + Fe / 2 - ce),
            (We = f.imageEl.offsetWidth || f.imageEl.clientWidth),
            (z = f.imageEl.offsetHeight || f.imageEl.clientHeight),
            (qe = We * $.scale),
            (ft = z * $.scale),
            (Xt = Math.min(si / 2 - qe / 2, 0)),
            (De = Math.min(Fe / 2 - ft / 2, 0)),
            (Wt = -Xt),
            (ei = -De),
            ti > 0 &&
            pe &&
            typeof d.currentX == "number" &&
            typeof d.currentY == "number"
              ? ((ne = (d.currentX * $.scale) / ti),
                (_e = (d.currentY * $.scale) / ti))
              : ((ne = xe * $.scale), (_e = J * $.scale)),
            ne < Xt && (ne = Xt),
            ne > Wt && (ne = Wt),
            _e < De && (_e = De),
            _e > ei && (_e = ei))
          : ((ne = 0), (_e = 0)),
        pe && $.scale === 1 && ((f.originX = 0), (f.originY = 0)),
        (d.currentX = ne),
        (d.currentY = _e),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = `translate3d(${ne}px, ${_e}px,0)`),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = `translate3d(0,0,0) scale(${$.scale})`);
    }
    function C() {
      const B = e.zoom,
        $ = e.params.zoom;
      if (!f.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (f.slideEl = Je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
          : (f.slideEl = e.slides[e.activeIndex]);
        let N = f.slideEl.querySelector(`.${$.containerClass}`);
        N &&
          (N = N.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = N),
          N
            ? (f.imageWrapEl = Ki(f.imageEl, `.${$.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      !f.imageEl ||
        !f.imageWrapEl ||
        (e.params.cssMode &&
          ((e.wrapperEl.style.overflow = ""),
          (e.wrapperEl.style.touchAction = "")),
        (B.scale = 1),
        (a = 1),
        (d.currentX = void 0),
        (d.currentY = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        f.slideEl.classList.remove(`${$.zoomedSlideClass}`),
        (f.slideEl = void 0),
        (f.originX = 0),
        (f.originY = 0),
        e.params.zoom.panOnMouseMove &&
          ((l = { x: 0, y: 0 }),
          u && ((u = !1), (d.startX = 0), (d.startY = 0))));
    }
    function Y(B) {
      const $ = e.zoom;
      $.scale && $.scale !== 1 ? C() : A(B);
    }
    function Q() {
      const B = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
        $ = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: B, activeListenerWithCapture: $ };
    }
    function we() {
      const B = e.zoom;
      if (B.enabled) return;
      B.enabled = !0;
      const { passiveListener: $, activeListenerWithCapture: N } = Q();
      e.wrapperEl.addEventListener("pointerdown", T, $),
        e.wrapperEl.addEventListener("pointermove", x, N),
        ["pointerup", "pointercancel", "pointerout"].forEach((U) => {
          e.wrapperEl.addEventListener(U, S, $);
        }),
        e.wrapperEl.addEventListener("pointermove", R, N);
    }
    function se() {
      const B = e.zoom;
      if (!B.enabled) return;
      B.enabled = !1;
      const { passiveListener: $, activeListenerWithCapture: N } = Q();
      e.wrapperEl.removeEventListener("pointerdown", T, $),
        e.wrapperEl.removeEventListener("pointermove", x, N),
        ["pointerup", "pointercancel", "pointerout"].forEach((U) => {
          e.wrapperEl.removeEventListener(U, S, $);
        }),
        e.wrapperEl.removeEventListener("pointermove", R, N);
    }
    i("init", () => {
      e.params.zoom.enabled && we();
    }),
      i("destroy", () => {
        se();
      }),
      i("touchStart", (B, $) => {
        e.zoom.enabled && F($);
      }),
      i("touchEnd", (B, $) => {
        e.zoom.enabled && I();
      }),
      i("doubleTap", (B, $) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          Y($);
      }),
      i("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && M();
      }),
      i("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && M();
      }),
      Object.assign(e.zoom, {
        enable: we,
        disable: se,
        in: A,
        out: C,
        toggle: Y,
      });
  }
  function fd(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
    function r(l, c) {
      const h = (function () {
        let d, g, _;
        return (y, v) => {
          for (g = -1, d = y.length; d - g > 1; )
            (_ = (d + g) >> 1), y[_] <= v ? (g = _) : (d = _);
          return d;
        };
      })();
      (this.x = l), (this.y = c), (this.lastIndex = l.length - 1);
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
    function n(l) {
      e.controller.spline = e.params.loop
        ? new r(e.slidesGrid, l.slidesGrid)
        : new r(e.snapGrid, l.snapGrid);
    }
    function a(l, c) {
      const h = e.controller.control;
      let m, p;
      const f = e.constructor;
      function d(g) {
        if (g.destroyed) return;
        const _ = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (n(g), (p = -e.controller.spline.interpolate(-_))),
          (!p || e.params.controller.by === "container") &&
            ((m =
              (g.maxTranslate() - g.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (Number.isNaN(m) || !Number.isFinite(m)) && (m = 1),
            (p = (_ - e.minTranslate()) * m + g.minTranslate())),
          e.params.controller.inverse && (p = g.maxTranslate() - p),
          g.updateProgress(p),
          g.setTranslate(p, e),
          g.updateActiveIndex(),
          g.updateSlidesClasses();
      }
      if (Array.isArray(h))
        for (let g = 0; g < h.length; g += 1)
          h[g] !== c && h[g] instanceof f && d(h[g]);
      else h instanceof f && c !== h && d(h);
    }
    function o(l, c) {
      const h = e.constructor,
        m = e.controller.control;
      let p;
      function f(d) {
        d.destroyed ||
          (d.setTransition(l, e),
          l !== 0 &&
            (d.transitionStart(),
            d.params.autoHeight &&
              vt(() => {
                d.updateAutoHeight();
              }),
            Qr(d.wrapperEl, () => {
              m && d.transitionEnd();
            })));
      }
      if (Array.isArray(m))
        for (p = 0; p < m.length; p += 1)
          m[p] !== c && m[p] instanceof h && f(m[p]);
      else m instanceof h && c !== m && f(m);
    }
    function u() {
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
        ).forEach((c) => {
          if (
            (e.controller.control || (e.controller.control = []), c && c.swiper)
          )
            e.controller.control.push(c.swiper);
          else if (c) {
            const h = `${e.params.eventsPrefix}init`,
              m = (p) => {
                e.controller.control.push(p.detail[0]),
                  e.update(),
                  c.removeEventListener(h, m);
              };
            c.addEventListener(h, m);
          }
        });
        return;
      }
      e.controller.control = e.params.controller.control;
    }),
      i("update", () => {
        u();
      }),
      i("resize", () => {
        u();
      }),
      i("observerUpdate", () => {
        u();
      }),
      i("setTranslate", (l, c, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTranslate(c, h);
      }),
      i("setTransition", (l, c, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTransition(c, h);
      }),
      Object.assign(e.controller, { setTranslate: a, setTransition: o });
  }
  function pd(s) {
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
    function u(M) {
      const O = r;
      O.length !== 0 && ((O.innerHTML = ""), (O.innerHTML = M));
    }
    function l(M) {
      const O = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(M).replace(/x/g, O);
    }
    function c(M) {
      (M = ae(M)),
        M.forEach((O) => {
          O.setAttribute("tabIndex", "0");
        });
    }
    function h(M) {
      (M = ae(M)),
        M.forEach((O) => {
          O.setAttribute("tabIndex", "-1");
        });
    }
    function m(M, O) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("role", O);
        });
    }
    function p(M, O) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("aria-roledescription", O);
        });
    }
    function f(M, O) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("aria-controls", O);
        });
    }
    function d(M, O) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("aria-label", O);
        });
    }
    function g(M, O) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("id", O);
        });
    }
    function _(M, O) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("aria-live", O);
        });
    }
    function y(M) {
      (M = ae(M)),
        M.forEach((O) => {
          O.setAttribute("aria-disabled", !0);
        });
    }
    function v(M) {
      (M = ae(M)),
        M.forEach((O) => {
          O.setAttribute("aria-disabled", !1);
        });
    }
    function D(M) {
      if (M.keyCode !== 13 && M.keyCode !== 32) return;
      const O = e.params.a11y,
        A = M.target;
      if (
        !(
          e.pagination &&
          e.pagination.el &&
          (A === e.pagination.el || e.pagination.el.contains(M.target)) &&
          !M.target.matches(bi(e.params.pagination.bulletClass))
        )
      ) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const C = ae(e.navigation.prevEl);
          ae(e.navigation.nextEl).includes(A) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? u(O.lastSlideMessage) : u(O.nextSlideMessage)),
            C.includes(A) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? u(O.firstSlideMessage) : u(O.prevSlideMessage));
        }
        e.pagination &&
          A.matches(bi(e.params.pagination.bulletClass)) &&
          A.click();
      }
    }
    function w() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: M, prevEl: O } = e.navigation;
      O && (e.isBeginning ? (y(O), h(O)) : (v(O), c(O))),
        M && (e.isEnd ? (y(M), h(M)) : (v(M), c(M)));
    }
    function E() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function b() {
      return E() && e.params.pagination.clickable;
    }
    function T() {
      const M = e.params.a11y;
      E() &&
        e.pagination.bullets.forEach((O) => {
          e.params.pagination.clickable &&
            (c(O),
            e.params.pagination.renderBullet ||
              (m(O, "button"),
              d(
                O,
                M.paginationBulletMessage.replace(/\{\{index\}\}/, Zr(O) + 1)
              ))),
            O.matches(bi(e.params.pagination.bulletActiveClass))
              ? O.setAttribute("aria-current", "true")
              : O.removeAttribute("aria-current");
        });
    }
    const x = (M, O, A) => {
        c(M),
          M.tagName !== "BUTTON" &&
            (m(M, "button"), M.addEventListener("keydown", D)),
          d(M, A),
          f(M, O);
      },
      S = (M) => {
        a && a !== M.target && !a.contains(M.target) && (n = !0),
          (e.a11y.clicked = !0);
      },
      L = () => {
        (n = !1),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
      },
      P = (M) => {
        o = new Date().getTime();
      },
      k = (M) => {
        if (
          e.a11y.clicked ||
          !e.params.a11y.scrollOnFocus ||
          new Date().getTime() - o < 100
        )
          return;
        const O = M.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!O || !e.slides.includes(O)) return;
        a = O;
        const A = e.slides.indexOf(O) === e.activeIndex,
          C =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(O);
        A ||
          C ||
          (M.sourceCapabilities && M.sourceCapabilities.firesTouchEvents) ||
          (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
          requestAnimationFrame(() => {
            n ||
              (e.params.loop
                ? e.slideToLoop(
                    parseInt(O.getAttribute("data-swiper-slide-index")),
                    0
                  )
                : e.slideTo(e.slides.indexOf(O), 0),
              (n = !1));
          }));
      },
      F = () => {
        const M = e.params.a11y;
        M.itemRoleDescriptionMessage &&
          p(e.slides, M.itemRoleDescriptionMessage),
          M.slideRole && m(e.slides, M.slideRole);
        const O = e.slides.length;
        M.slideLabelMessage &&
          e.slides.forEach((A, C) => {
            const Y = e.params.loop
                ? parseInt(A.getAttribute("data-swiper-slide-index"), 10)
                : C,
              Q = M.slideLabelMessage
                .replace(/\{\{index\}\}/, Y + 1)
                .replace(/\{\{slidesLength\}\}/, O);
            d(A, Q);
          });
      },
      R = () => {
        const M = e.params.a11y;
        e.el.append(r);
        const O = e.el;
        M.containerRoleDescriptionMessage &&
          p(O, M.containerRoleDescriptionMessage),
          M.containerMessage && d(O, M.containerMessage),
          M.containerRole && m(O, M.containerRole);
        const A = e.wrapperEl,
          C = M.id || A.getAttribute("id") || `swiper-wrapper-${l(16)}`,
          Y = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        g(A, C), _(A, Y), F();
        let { nextEl: Q, prevEl: we } = e.navigation ? e.navigation : {};
        (Q = ae(Q)),
          (we = ae(we)),
          Q && Q.forEach((B) => x(B, C, M.nextSlideMessage)),
          we && we.forEach((B) => x(B, C, M.prevSlideMessage)),
          b() &&
            ae(e.pagination.el).forEach(($) => {
              $.addEventListener("keydown", D);
            }),
          Re().addEventListener("visibilitychange", P),
          e.el.addEventListener("focus", k, !0),
          e.el.addEventListener("focus", k, !0),
          e.el.addEventListener("pointerdown", S, !0),
          e.el.addEventListener("pointerup", L, !0);
      };
    function I() {
      r && r.remove();
      let { nextEl: M, prevEl: O } = e.navigation ? e.navigation : {};
      (M = ae(M)),
        (O = ae(O)),
        M && M.forEach((C) => C.removeEventListener("keydown", D)),
        O && O.forEach((C) => C.removeEventListener("keydown", D)),
        b() &&
          ae(e.pagination.el).forEach((Y) => {
            Y.removeEventListener("keydown", D);
          }),
        Re().removeEventListener("visibilitychange", P),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", k, !0),
          e.el.removeEventListener("pointerdown", S, !0),
          e.el.removeEventListener("pointerup", L, !0));
    }
    i("beforeInit", () => {
      (r = kt("span", e.params.a11y.notificationClass)),
        r.setAttribute("aria-live", "assertive"),
        r.setAttribute("aria-atomic", "true");
    }),
      i("afterInit", () => {
        e.params.a11y.enabled && R();
      }),
      i(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          e.params.a11y.enabled && F();
        }
      ),
      i("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && w();
      }),
      i("paginationUpdate", () => {
        e.params.a11y.enabled && T();
      }),
      i("destroy", () => {
        e.params.a11y.enabled && I();
      });
  }
  function hd(s) {
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
        const f = ve();
        let d;
        p ? (d = new URL(p)) : (d = f.location);
        const g = d.pathname
            .slice(1)
            .split("/")
            .filter((D) => D !== ""),
          _ = g.length,
          y = g[_ - 2],
          v = g[_ - 1];
        return { key: y, value: v };
      },
      u = (p, f) => {
        const d = ve();
        if (!r || !e.params.history.enabled) return;
        let g;
        e.params.url ? (g = new URL(e.params.url)) : (g = d.location);
        const _ =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(`[data-swiper-slide-index="${f}"]`)
            : e.slides[f];
        let y = a(_.getAttribute("data-history"));
        if (e.params.history.root.length > 0) {
          let D = e.params.history.root;
          D[D.length - 1] === "/" && (D = D.slice(0, D.length - 1)),
            (y = `${D}/${p ? `${p}/` : ""}${y}`);
        } else g.pathname.includes(p) || (y = `${p ? `${p}/` : ""}${y}`);
        e.params.history.keepQuery && (y += g.search);
        const v = d.history.state;
        (v && v.value === y) ||
          (e.params.history.replaceState
            ? d.history.replaceState({ value: y }, null, y)
            : d.history.pushState({ value: y }, null, y));
      },
      l = (p, f, d) => {
        if (f)
          for (let g = 0, _ = e.slides.length; g < _; g += 1) {
            const y = e.slides[g];
            if (a(y.getAttribute("data-history")) === f) {
              const D = e.getSlideIndex(y);
              e.slideTo(D, p, d);
            }
          }
        else e.slideTo(0, p, d);
      },
      c = () => {
        (n = o(e.params.url)), l(e.params.speed, n.value, !1);
      },
      h = () => {
        const p = ve();
        if (e.params.history) {
          if (!p.history || !p.history.pushState) {
            (e.params.history.enabled = !1),
              (e.params.hashNavigation.enabled = !0);
            return;
          }
          if (((r = !0), (n = o(e.params.url)), !n.key && !n.value)) {
            e.params.history.replaceState || p.addEventListener("popstate", c);
            return;
          }
          l(0, n.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || p.addEventListener("popstate", c);
        }
      },
      m = () => {
        const p = ve();
        e.params.history.replaceState || p.removeEventListener("popstate", c);
      };
    i("init", () => {
      e.params.history.enabled && h();
    }),
      i("destroy", () => {
        e.params.history.enabled && m();
      }),
      i("transitionEnd _freeModeNoMomentumRelease", () => {
        r && u(e.params.history.key, e.activeIndex);
      }),
      i("slideChange", () => {
        r && e.params.cssMode && u(e.params.history.key, e.activeIndex);
      });
  }
  function md(s) {
    let { swiper: e, extendParams: t, emit: i, on: r } = s,
      n = !1;
    const a = Re(),
      o = ve();
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
            Je(
              e.slidesEl,
              `.${e.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`
            )[0]
          );
        },
      },
    });
    const u = () => {
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
      l = () => {
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
      c = () => {
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
          o.addEventListener("hashchange", u);
      },
      h = () => {
        e.params.hashNavigation.watchState &&
          o.removeEventListener("hashchange", u);
      };
    r("init", () => {
      e.params.hashNavigation.enabled && c();
    }),
      r("destroy", () => {
        e.params.hashNavigation.enabled && h();
      }),
      r("transitionEnd _freeModeNoMomentumRelease", () => {
        n && l();
      }),
      r("slideChange", () => {
        n && e.params.cssMode && l();
      });
  }
  function gd(s) {
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
      u = n && n.autoplay ? n.autoplay.delay : 3e3,
      l = n && n.autoplay ? n.autoplay.delay : 3e3,
      c,
      h = new Date().getTime(),
      m,
      p,
      f,
      d,
      g,
      _,
      y;
    function v(O) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (O.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", v),
          !(y || (O.detail && O.detail.bySwiperTouchMove)) && S()));
    }
    const D = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (m = !0) : m && ((l = c), (m = !1));
        const O = e.autoplay.paused ? c : h + l - new Date().getTime();
        (e.autoplay.timeLeft = O),
          r("autoplayTimeLeft", O, O / u),
          (o = requestAnimationFrame(() => {
            D();
          }));
      },
      w = () => {
        let O;
        return (
          e.virtual && e.params.virtual.enabled
            ? (O = e.slides.find((C) =>
                C.classList.contains("swiper-slide-active")
              ))
            : (O = e.slides[e.activeIndex]),
          O ? parseInt(O.getAttribute("data-swiper-autoplay"), 10) : void 0
        );
      },
      E = (O) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(o), D();
        let A = typeof O == "undefined" ? e.params.autoplay.delay : O;
        (u = e.params.autoplay.delay), (l = e.params.autoplay.delay);
        const C = w();
        !Number.isNaN(C) &&
          C > 0 &&
          typeof O == "undefined" &&
          ((A = C), (u = C), (l = C)),
          (c = A);
        const Y = e.params.speed,
          Q = () => {
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
                ((h = new Date().getTime()),
                requestAnimationFrame(() => {
                  E();
                })));
          };
        return (
          A > 0
            ? (clearTimeout(a),
              (a = setTimeout(() => {
                Q();
              }, A)))
            : requestAnimationFrame(() => {
                Q();
              }),
          A
        );
      },
      b = () => {
        (h = new Date().getTime()),
          (e.autoplay.running = !0),
          E(),
          r("autoplayStart");
      },
      T = () => {
        (e.autoplay.running = !1),
          clearTimeout(a),
          cancelAnimationFrame(o),
          r("autoplayStop");
      },
      x = (O, A) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(a), O || (_ = !0);
        const C = () => {
          r("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", v)
              : S();
        };
        if (((e.autoplay.paused = !0), A)) {
          g && (c = e.params.autoplay.delay), (g = !1), C();
          return;
        }
        (c = (c || e.params.autoplay.delay) - (new Date().getTime() - h)),
          !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), C());
      },
      S = () => {
        (e.isEnd && c < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((h = new Date().getTime()),
          _ ? ((_ = !1), E(c)) : E(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      L = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const O = Re();
        O.visibilityState === "hidden" && ((_ = !0), x(!0)),
          O.visibilityState === "visible" && S();
      },
      P = (O) => {
        O.pointerType === "mouse" &&
          ((_ = !0), (y = !0), !(e.animating || e.autoplay.paused) && x(!0));
      },
      k = (O) => {
        O.pointerType === "mouse" && ((y = !1), e.autoplay.paused && S());
      },
      F = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", P),
          e.el.addEventListener("pointerleave", k));
      },
      R = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", P),
          e.el.removeEventListener("pointerleave", k));
      },
      I = () => {
        Re().addEventListener("visibilitychange", L);
      },
      M = () => {
        Re().removeEventListener("visibilitychange", L);
      };
    i("init", () => {
      e.params.autoplay.enabled && (F(), I(), b());
    }),
      i("destroy", () => {
        R(), M(), e.autoplay.running && T();
      }),
      i("_freeModeStaticRelease", () => {
        (f || _) && S();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? T() : x(!0, !0);
      }),
      i("beforeTransitionStart", (O, A, C) => {
        e.destroyed ||
          !e.autoplay.running ||
          (C || !e.params.autoplay.disableOnInteraction ? x(!0, !0) : T());
      }),
      i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (e.params.autoplay.disableOnInteraction) {
            T();
            return;
          }
          (p = !0),
            (f = !1),
            (_ = !1),
            (d = setTimeout(() => {
              (_ = !0), (f = !0), x(!0);
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
          f && e.params.cssMode && S(), (f = !1), (p = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (g = !0);
      }),
      Object.assign(e.autoplay, { start: b, stop: T, pause: x, resume: S });
  }
  function vd(s) {
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
      const l = e.thumbs.swiper;
      if (!l || l.destroyed) return;
      const c = l.clickedIndex,
        h = l.clickedSlide;
      if (
        (h && h.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
        typeof c == "undefined" ||
        c === null
      )
        return;
      let m;
      l.params.loop
        ? (m = parseInt(
            l.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (m = c),
        e.params.loop ? e.slideToLoop(m) : e.slideTo(m);
    }
    function o() {
      const { thumbs: l } = e.params;
      if (r) return !1;
      r = !0;
      const c = e.constructor;
      if (l.swiper instanceof c) {
        if (l.swiper.destroyed) return (r = !1), !1;
        (e.thumbs.swiper = l.swiper),
          Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          e.thumbs.swiper.update();
      } else if (jr(l.swiper)) {
        const h = Object.assign({}, l.swiper);
        Object.assign(h, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new c(h)),
          (n = !0);
      }
      return (
        e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", a),
        !0
      );
    }
    function u(l) {
      const c = e.thumbs.swiper;
      if (!c || c.destroyed) return;
      const h =
        c.params.slidesPerView === "auto"
          ? c.slidesPerViewDynamic()
          : c.params.slidesPerView;
      let m = 1;
      const p = e.params.thumbs.slideThumbActiveClass;
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (m = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (m = 1),
        (m = Math.floor(m)),
        c.slides.forEach((g) => g.classList.remove(p)),
        c.params.loop || (c.params.virtual && c.params.virtual.enabled))
      )
        for (let g = 0; g < m; g += 1)
          Je(
            c.slidesEl,
            `[data-swiper-slide-index="${e.realIndex + g}"]`
          ).forEach((_) => {
            _.classList.add(p);
          });
      else
        for (let g = 0; g < m; g += 1)
          c.slides[e.realIndex + g] &&
            c.slides[e.realIndex + g].classList.add(p);
      const f = e.params.thumbs.autoScrollOffset,
        d = f && !c.params.loop;
      if (e.realIndex !== c.realIndex || d) {
        const g = c.activeIndex;
        let _, y;
        if (c.params.loop) {
          const v = c.slides.find(
            (D) =>
              D.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
          );
          (_ = c.slides.indexOf(v)),
            (y = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (_ = e.realIndex), (y = _ > e.previousIndex ? "next" : "prev");
        d && (_ += y === "next" ? f : -1 * f),
          c.visibleSlidesIndexes &&
            c.visibleSlidesIndexes.indexOf(_) < 0 &&
            (c.params.centeredSlides
              ? _ > g
                ? (_ = _ - Math.floor(h / 2) + 1)
                : (_ = _ + Math.floor(h / 2) - 1)
              : _ > g && c.params.slidesPerGroup,
            c.slideTo(_, l ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const { thumbs: l } = e.params;
      if (!(!l || !l.swiper))
        if (typeof l.swiper == "string" || l.swiper instanceof HTMLElement) {
          const c = Re(),
            h = () => {
              const p =
                typeof l.swiper == "string"
                  ? c.querySelector(l.swiper)
                  : l.swiper;
              if (p && p.swiper) (l.swiper = p.swiper), o(), u(!0);
              else if (p) {
                const f = `${e.params.eventsPrefix}init`,
                  d = (g) => {
                    (l.swiper = g.detail[0]),
                      p.removeEventListener(f, d),
                      o(),
                      u(!0),
                      l.swiper.update(),
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
        } else o(), u(!0);
    }),
      i("slideChange update resize observerUpdate", () => {
        u();
      }),
      i("setTransition", (l, c) => {
        const h = e.thumbs.swiper;
        !h || h.destroyed || h.setTransition(c);
      }),
      i("beforeDestroy", () => {
        const l = e.thumbs.swiper;
        !l || l.destroyed || (n && l.destroy());
      }),
      Object.assign(e.thumbs, { init: o, update: u });
  }
  function yd(s) {
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
      const u = e.getTranslate();
      e.setTranslate(u),
        e.setTransition(0),
        (e.touchEventsData.velocities.length = 0),
        e.freeMode.onTouchEnd({
          currentPos: e.rtl ? e.translate : -e.translate,
        });
    }
    function a() {
      if (e.params.cssMode) return;
      const { touchEventsData: u, touches: l } = e;
      u.velocities.length === 0 &&
        u.velocities.push({
          position: l[e.isHorizontal() ? "startX" : "startY"],
          time: u.touchStartTime,
        }),
        u.velocities.push({
          position: l[e.isHorizontal() ? "currentX" : "currentY"],
          time: nt(),
        });
    }
    function o(u) {
      let { currentPos: l } = u;
      if (e.params.cssMode) return;
      const {
          params: c,
          wrapperEl: h,
          rtlTranslate: m,
          snapGrid: p,
          touchEventsData: f,
        } = e,
        g = nt() - f.touchStartTime;
      if (l < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (l > -e.maxTranslate()) {
        e.slides.length < p.length
          ? e.slideTo(p.length - 1)
          : e.slideTo(e.slides.length - 1);
        return;
      }
      if (c.freeMode.momentum) {
        if (f.velocities.length > 1) {
          const T = f.velocities.pop(),
            x = f.velocities.pop(),
            S = T.position - x.position,
            L = T.time - x.time;
          (e.velocity = S / L),
            (e.velocity /= 2),
            Math.abs(e.velocity) < c.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (L > 150 || nt() - T.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= c.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let _ = 1e3 * c.freeMode.momentumRatio;
        const y = e.velocity * _;
        let v = e.translate + y;
        m && (v = -v);
        let D = !1,
          w;
        const E = Math.abs(e.velocity) * 20 * c.freeMode.momentumBounceRatio;
        let b;
        if (v < e.maxTranslate())
          c.freeMode.momentumBounce
            ? (v + e.maxTranslate() < -E && (v = e.maxTranslate() - E),
              (w = e.maxTranslate()),
              (D = !0),
              (f.allowMomentumBounce = !0))
            : (v = e.maxTranslate()),
            c.loop && c.centeredSlides && (b = !0);
        else if (v > e.minTranslate())
          c.freeMode.momentumBounce
            ? (v - e.minTranslate() > E && (v = e.minTranslate() + E),
              (w = e.minTranslate()),
              (D = !0),
              (f.allowMomentumBounce = !0))
            : (v = e.minTranslate()),
            c.loop && c.centeredSlides && (b = !0);
        else if (c.freeMode.sticky) {
          let T;
          for (let x = 0; x < p.length; x += 1)
            if (p[x] > -v) {
              T = x;
              break;
            }
          Math.abs(p[T] - v) < Math.abs(p[T - 1] - v) ||
          e.swipeDirection === "next"
            ? (v = p[T])
            : (v = p[T - 1]),
            (v = -v);
        }
        if (
          (b &&
            r("transitionEnd", () => {
              e.loopFix();
            }),
          e.velocity !== 0)
        ) {
          if (
            (m
              ? (_ = Math.abs((-v - e.translate) / e.velocity))
              : (_ = Math.abs((v - e.translate) / e.velocity)),
            c.freeMode.sticky)
          ) {
            const T = Math.abs((m ? -v : v) - e.translate),
              x = e.slidesSizesGrid[e.activeIndex];
            T < x
              ? (_ = c.speed)
              : T < 2 * x
              ? (_ = c.speed * 1.5)
              : (_ = c.speed * 2.5);
          }
        } else if (c.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        c.freeMode.momentumBounce && D
          ? (e.updateProgress(w),
            e.setTransition(_),
            e.setTranslate(v),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            Qr(h, () => {
              !e ||
                e.destroyed ||
                !f.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(c.speed),
                setTimeout(() => {
                  e.setTranslate(w),
                    Qr(h, () => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (i("_freeModeNoMomentumRelease"),
            e.updateProgress(v),
            e.setTransition(_),
            e.setTranslate(v),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              Qr(h, () => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(v),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (c.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else c.freeMode && i("_freeModeNoMomentumRelease");
      (!c.freeMode.momentum || g >= c.longSwipesMs) &&
        (i("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: { onTouchStart: n, onTouchMove: a, onTouchEnd: o },
    });
  }
  function _d(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ grid: { rows: 1, fill: "column" } });
    let r, n, a, o;
    const u = () => {
        let d = e.params.spaceBetween;
        return (
          typeof d == "string" && d.indexOf("%") >= 0
            ? (d = (parseFloat(d.replace("%", "")) / 100) * e.size)
            : typeof d == "string" && (d = parseFloat(d)),
          d
        );
      },
      l = (d) => {
        const { slidesPerView: g } = e.params,
          { rows: _, fill: y } = e.params.grid,
          v =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : d.length;
        (a = Math.floor(v / _)),
          Math.floor(v / _) === v / _ ? (r = v) : (r = Math.ceil(v / _) * _),
          g !== "auto" && y === "row" && (r = Math.max(r, g * _)),
          (n = r / _);
      },
      c = () => {
        e.slides &&
          e.slides.forEach((d) => {
            d.swiperSlideGridSet &&
              ((d.style.height = ""),
              (d.style[e.getDirectionLabel("margin-top")] = ""));
          });
      },
      h = (d, g, _) => {
        const { slidesPerGroup: y } = e.params,
          v = u(),
          { rows: D, fill: w } = e.params.grid,
          E =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : _.length;
        let b, T, x;
        if (w === "row" && y > 1) {
          const S = Math.floor(d / (y * D)),
            L = d - D * y * S,
            P = S === 0 ? y : Math.min(Math.ceil((E - S * D * y) / D), y);
          (x = Math.floor(L / P)),
            (T = L - x * P + S * y),
            (b = T + (x * r) / D),
            (g.style.order = b);
        } else
          w === "column"
            ? ((T = Math.floor(d / D)),
              (x = d - T * D),
              (T > a || (T === a && x === D - 1)) &&
                ((x += 1), x >= D && ((x = 0), (T += 1))))
            : ((x = Math.floor(d / n)), (T = d - x * n));
        (g.row = x),
          (g.column = T),
          (g.style.height = `calc((100% - ${(D - 1) * v}px) / ${D})`),
          (g.style[e.getDirectionLabel("margin-top")] =
            x !== 0 ? v && `${v}px` : ""),
          (g.swiperSlideGridSet = !0);
      },
      m = (d, g) => {
        const { centeredSlides: _, roundLengths: y } = e.params,
          v = u(),
          { rows: D } = e.params.grid;
        if (
          ((e.virtualSize = (d + v) * r),
          (e.virtualSize = Math.ceil(e.virtualSize / D) - v),
          e.params.cssMode ||
            (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
              e.virtualSize + v
            }px`),
          _)
        ) {
          const w = [];
          for (let E = 0; E < g.length; E += 1) {
            let b = g[E];
            y && (b = Math.floor(b)), g[E] < e.virtualSize + g[0] && w.push(b);
          }
          g.splice(0, g.length), g.push(...w);
        }
      },
      p = () => {
        o = e.params.grid && e.params.grid.rows > 1;
      },
      f = () => {
        const { params: d, el: g } = e,
          _ = d.grid && d.grid.rows > 1;
        o && !_
          ? (g.classList.remove(
              `${d.containerModifierClass}grid`,
              `${d.containerModifierClass}grid-column`
            ),
            (a = 1),
            e.emitContainerClasses())
          : !o &&
            _ &&
            (g.classList.add(`${d.containerModifierClass}grid`),
            d.grid.fill === "column" &&
              g.classList.add(`${d.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          (o = _);
      };
    i("init", p),
      i("update", f),
      (e.grid = {
        initSlides: l,
        unsetSlides: c,
        updateSlide: h,
        updateWrapperSize: m,
      });
  }
  function Dd(s) {
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
  function wd(s) {
    const e = this,
      { params: t, activeIndex: i, slidesEl: r } = e;
    t.loop && e.loopDestroy();
    let n = i + 1;
    const a = (o) => {
      if (typeof o == "string") {
        const u = document.createElement("div");
        (u.innerHTML = o), r.prepend(u.children[0]), (u.innerHTML = "");
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
  function bd(s, e) {
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
    let u = a > s ? a + 1 : a;
    const l = [];
    for (let c = o - 1; c >= s; c -= 1) {
      const h = t.slides[c];
      h.remove(), l.unshift(h);
    }
    if (typeof e == "object" && "length" in e) {
      for (let c = 0; c < e.length; c += 1) e[c] && n.append(e[c]);
      u = a > s ? a + e.length : a;
    } else n.append(e);
    for (let c = 0; c < l.length; c += 1) n.append(l[c]);
    t.recalcSlides(),
      i.loop && t.loopCreate(),
      (!i.observer || t.isElement) && t.update(),
      i.loop ? t.slideTo(u + t.loopedSlides, 0, !1) : t.slideTo(u, 0, !1);
  }
  function Sd(s) {
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
  function xd() {
    const s = this,
      e = [];
    for (let t = 0; t < s.slides.length; t += 1) e.push(t);
    s.removeSlide(e);
  }
  function Ed(s) {
    let { swiper: e } = s;
    Object.assign(e, {
      appendSlide: Dd.bind(e),
      prependSlide: wd.bind(e),
      addSlide: bd.bind(e),
      removeSlide: Sd.bind(e),
      removeAllSlides: xd.bind(e),
    });
  }
  function wr(s) {
    const {
      effect: e,
      swiper: t,
      on: i,
      setTranslate: r,
      setTransition: n,
      overwriteParams: a,
      perspective: o,
      recreateShadows: u,
      getEffectParams: l,
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
        if (t.params.effect === e && u) {
          if (!l || !l().slideShadows) return;
          t.slides.forEach((h) => {
            h.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((m) => m.remove());
          }),
            u();
        }
      });
    let c;
    i("virtualUpdate", () => {
      t.params.effect === e &&
        (t.slides.length || (c = !0),
        requestAnimationFrame(() => {
          c && t.slides && t.slides.length && (r(), (c = !1));
        }));
    });
  }
  function Jr(s, e) {
    const t = ji(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function Ws(s) {
    let { swiper: e, duration: t, transformElements: i, allSlides: r } = s;
    const { activeIndex: n } = e,
      a = (o) =>
        o.parentElement
          ? o.parentElement
          : e.slides.find((l) => l.shadowRoot && l.shadowRoot === o.parentNode);
    if (e.params.virtualTranslate && t !== 0) {
      let o = !1,
        u;
      r
        ? (u = i)
        : (u = i.filter((l) => {
            const c = l.classList.contains("swiper-slide-transform") ? a(l) : l;
            return e.getSlideIndex(c) === n;
          })),
        u.forEach((l) => {
          Qr(l, () => {
            if (o || !e || e.destroyed) return;
            (o = !0), (e.animating = !1);
            const c = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            e.wrapperEl.dispatchEvent(c);
          });
        });
    }
  }
  function Td(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ fadeEffect: { crossFade: !1 } }),
      wr({
        effect: "fade",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: a } = e,
            o = e.params.fadeEffect;
          for (let u = 0; u < a.length; u += 1) {
            const l = e.slides[u];
            let h = -l.swiperSlideOffset;
            e.params.virtualTranslate || (h -= e.translate);
            let m = 0;
            e.isHorizontal() || ((m = h), (h = 0));
            const p = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(l.progress), 0)
                : 1 + Math.min(Math.max(l.progress, -1), 0),
              f = Jr(o, l);
            (f.style.opacity = p),
              (f.style.transform = `translate3d(${h}px, ${m}px, 0px)`);
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((u) => ji(u));
          o.forEach((u) => {
            u.style.transitionDuration = `${a}ms`;
          }),
            Ws({ swiper: e, duration: a, transformElements: o, allSlides: !0 });
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
  function Cd(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const r = (u, l, c) => {
      let h = c
          ? u.querySelector(".swiper-slide-shadow-left")
          : u.querySelector(".swiper-slide-shadow-top"),
        m = c
          ? u.querySelector(".swiper-slide-shadow-right")
          : u.querySelector(".swiper-slide-shadow-bottom");
      h ||
        ((h = kt(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            c ? "left" : "top"
          }`.split(" ")
        )),
        u.append(h)),
        m ||
          ((m = kt(
            "div",
            `swiper-slide-shadow-cube swiper-slide-shadow-${
              c ? "right" : "bottom"
            }`.split(" ")
          )),
          u.append(m)),
        h && (h.style.opacity = Math.max(-l, 0)),
        m && (m.style.opacity = Math.max(l, 0));
    };
    wr({
      effect: "cube",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
            el: u,
            wrapperEl: l,
            slides: c,
            width: h,
            height: m,
            rtlTranslate: p,
            size: f,
            browser: d,
          } = e,
          g = Ys(e),
          _ = e.params.cubeEffect,
          y = e.isHorizontal(),
          v = e.virtual && e.params.virtual.enabled;
        let D = 0,
          w;
        _.shadow &&
          (y
            ? ((w = e.wrapperEl.querySelector(".swiper-cube-shadow")),
              w ||
                ((w = kt("div", "swiper-cube-shadow")), e.wrapperEl.append(w)),
              (w.style.height = `${h}px`))
            : ((w = u.querySelector(".swiper-cube-shadow")),
              w || ((w = kt("div", "swiper-cube-shadow")), u.append(w))));
        for (let b = 0; b < c.length; b += 1) {
          const T = c[b];
          let x = b;
          v && (x = parseInt(T.getAttribute("data-swiper-slide-index"), 10));
          let S = x * 90,
            L = Math.floor(S / 360);
          p && ((S = -S), (L = Math.floor(-S / 360)));
          const P = Math.max(Math.min(T.progress, 1), -1);
          let k = 0,
            F = 0,
            R = 0;
          x % 4 === 0
            ? ((k = -L * 4 * f), (R = 0))
            : (x - 1) % 4 === 0
            ? ((k = 0), (R = -L * 4 * f))
            : (x - 2) % 4 === 0
            ? ((k = f + L * 4 * f), (R = f))
            : (x - 3) % 4 === 0 && ((k = -f), (R = 3 * f + f * 4 * L)),
            p && (k = -k),
            y || ((F = k), (k = 0));
          const I = `rotateX(${g(y ? 0 : -S)}deg) rotateY(${g(
            y ? S : 0
          )}deg) translate3d(${k}px, ${F}px, ${R}px)`;
          P <= 1 &&
            P > -1 &&
            ((D = x * 90 + P * 90), p && (D = -x * 90 - P * 90)),
            (T.style.transform = I),
            _.slideShadows && r(T, P, y);
        }
        if (
          ((l.style.transformOrigin = `50% 50% -${f / 2}px`),
          (l.style["-webkit-transform-origin"] = `50% 50% -${f / 2}px`),
          _.shadow)
        )
          if (y)
            w.style.transform = `translate3d(0px, ${
              h / 2 + _.shadowOffset
            }px, ${-h / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
              _.shadowScale
            })`;
          else {
            const b = Math.abs(D) - Math.floor(Math.abs(D) / 90) * 90,
              T =
                1.5 -
                (Math.sin((b * 2 * Math.PI) / 360) / 2 +
                  Math.cos((b * 2 * Math.PI) / 360) / 2),
              x = _.shadowScale,
              S = _.shadowScale / T,
              L = _.shadowOffset;
            w.style.transform = `scale3d(${x}, 1, ${S}) translate3d(0px, ${
              m / 2 + L
            }px, ${-m / 2 / S}px) rotateX(-89.99deg)`;
          }
        const E =
          (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -f / 2 : 0;
        (l.style.transform = `translate3d(0px,0,${E}px) rotateX(${g(
          e.isHorizontal() ? 0 : D
        )}deg) rotateY(${g(e.isHorizontal() ? -D : 0)}deg)`),
          l.style.setProperty("--swiper-cube-translate-z", `${E}px`);
      },
      setTransition: (u) => {
        const { el: l, slides: c } = e;
        if (
          (c.forEach((h) => {
            (h.style.transitionDuration = `${u}ms`),
              h
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((m) => {
                  m.style.transitionDuration = `${u}ms`;
                });
          }),
          e.params.cubeEffect.shadow && !e.isHorizontal())
        ) {
          const h = l.querySelector(".swiper-cube-shadow");
          h && (h.style.transitionDuration = `${u}ms`);
        }
      },
      recreateShadows: () => {
        const u = e.isHorizontal();
        e.slides.forEach((l) => {
          const c = Math.max(Math.min(l.progress, 1), -1);
          r(l, c, u);
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
  function br(s, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
        s ? ` swiper-slide-shadow-${s}` : ""
      }`,
      r = ji(e);
    let n = r.querySelector(`.${i.split(" ").join(".")}`);
    return n || ((n = kt("div", i.split(" "))), r.append(n)), n;
  }
  function Md(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
    const r = (u, l) => {
      let c = e.isHorizontal()
          ? u.querySelector(".swiper-slide-shadow-left")
          : u.querySelector(".swiper-slide-shadow-top"),
        h = e.isHorizontal()
          ? u.querySelector(".swiper-slide-shadow-right")
          : u.querySelector(".swiper-slide-shadow-bottom");
      c || (c = br("flip", u, e.isHorizontal() ? "left" : "top")),
        h || (h = br("flip", u, e.isHorizontal() ? "right" : "bottom")),
        c && (c.style.opacity = Math.max(-l, 0)),
        h && (h.style.opacity = Math.max(l, 0));
    };
    wr({
      effect: "flip",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: u, rtlTranslate: l } = e,
          c = e.params.flipEffect,
          h = Ys(e);
        for (let m = 0; m < u.length; m += 1) {
          const p = u[m];
          let f = p.progress;
          e.params.flipEffect.limitRotation &&
            (f = Math.max(Math.min(p.progress, 1), -1));
          const d = p.swiperSlideOffset;
          let _ = -180 * f,
            y = 0,
            v = e.params.cssMode ? -d - e.translate : -d,
            D = 0;
          e.isHorizontal()
            ? l && (_ = -_)
            : ((D = v), (v = 0), (y = -_), (_ = 0)),
            (p.style.zIndex = -Math.abs(Math.round(f)) + u.length),
            c.slideShadows && r(p, f);
          const w = `translate3d(${v}px, ${D}px, 0px) rotateX(${h(
              y
            )}deg) rotateY(${h(_)}deg)`,
            E = Jr(c, p);
          E.style.transform = w;
        }
      },
      setTransition: (u) => {
        const l = e.slides.map((c) => ji(c));
        l.forEach((c) => {
          (c.style.transitionDuration = `${u}ms`),
            c
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((h) => {
                h.style.transitionDuration = `${u}ms`;
              });
        }),
          Ws({ swiper: e, duration: u, transformElements: l });
      },
      recreateShadows: () => {
        e.params.flipEffect,
          e.slides.forEach((u) => {
            let l = u.progress;
            e.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(u.progress, 1), -1)),
              r(u, l);
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
  function Pd(s) {
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
      wr({
        effect: "coverflow",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { width: a, height: o, slides: u, slidesSizesGrid: l } = e,
            c = e.params.coverflowEffect,
            h = e.isHorizontal(),
            m = e.translate,
            p = h ? -m + a / 2 : -m + o / 2,
            f = h ? c.rotate : -c.rotate,
            d = c.depth,
            g = Ys(e);
          for (let _ = 0, y = u.length; _ < y; _ += 1) {
            const v = u[_],
              D = l[_],
              w = v.swiperSlideOffset,
              E = (p - w - D / 2) / D,
              b =
                typeof c.modifier == "function"
                  ? c.modifier(E)
                  : E * c.modifier;
            let T = h ? f * b : 0,
              x = h ? 0 : f * b,
              S = -d * Math.abs(b),
              L = c.stretch;
            typeof L == "string" &&
              L.indexOf("%") !== -1 &&
              (L = (parseFloat(c.stretch) / 100) * D);
            let P = h ? 0 : L * b,
              k = h ? L * b : 0,
              F = 1 - (1 - c.scale) * Math.abs(b);
            Math.abs(k) < 0.001 && (k = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(S) < 0.001 && (S = 0),
              Math.abs(T) < 0.001 && (T = 0),
              Math.abs(x) < 0.001 && (x = 0),
              Math.abs(F) < 0.001 && (F = 0);
            const R = `translate3d(${k}px,${P}px,${S}px)  rotateX(${g(
                x
              )}deg) rotateY(${g(T)}deg) scale(${F})`,
              I = Jr(c, v);
            if (
              ((I.style.transform = R),
              (v.style.zIndex = -Math.abs(Math.round(b)) + 1),
              c.slideShadows)
            ) {
              let M = h
                  ? v.querySelector(".swiper-slide-shadow-left")
                  : v.querySelector(".swiper-slide-shadow-top"),
                O = h
                  ? v.querySelector(".swiper-slide-shadow-right")
                  : v.querySelector(".swiper-slide-shadow-bottom");
              M || (M = br("coverflow", v, h ? "left" : "top")),
                O || (O = br("coverflow", v, h ? "right" : "bottom")),
                M && (M.style.opacity = b > 0 ? b : 0),
                O && (O.style.opacity = -b > 0 ? -b : 0);
            }
          }
        },
        setTransition: (a) => {
          e.slides
            .map((u) => ji(u))
            .forEach((u) => {
              (u.style.transitionDuration = `${a}ms`),
                u
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((l) => {
                    l.style.transitionDuration = `${a}ms`;
                  });
            });
        },
        perspective: () => !0,
        overwriteParams: () => ({ watchSlidesProgress: !0 }),
      });
  }
  function Ad(s) {
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
    wr({
      effect: "creative",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: o, wrapperEl: u, slidesSizesGrid: l } = e,
          c = e.params.creativeEffect,
          { progressMultiplier: h } = c,
          m = e.params.centeredSlides,
          p = Ys(e);
        if (m) {
          const f = l[0] / 2 - e.params.slidesOffsetBefore || 0;
          u.style.transform = `translateX(calc(50% - ${f}px))`;
        }
        for (let f = 0; f < o.length; f += 1) {
          const d = o[f],
            g = d.progress,
            _ = Math.min(
              Math.max(d.progress, -c.limitProgress),
              c.limitProgress
            );
          let y = _;
          m ||
            (y = Math.min(
              Math.max(d.originalProgress, -c.limitProgress),
              c.limitProgress
            ));
          const v = d.swiperSlideOffset,
            D = [e.params.cssMode ? -v - e.translate : -v, 0, 0],
            w = [0, 0, 0];
          let E = !1;
          e.isHorizontal() || ((D[1] = D[0]), (D[0] = 0));
          let b = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          _ < 0 ? ((b = c.next), (E = !0)) : _ > 0 && ((b = c.prev), (E = !0)),
            D.forEach((F, R) => {
              D[R] = `calc(${F}px + (${r(b.translate[R])} * ${Math.abs(
                _ * h
              )}))`;
            }),
            w.forEach((F, R) => {
              let I = b.rotate[R] * Math.abs(_ * h);
              w[R] = I;
            }),
            (d.style.zIndex = -Math.abs(Math.round(g)) + o.length);
          const T = D.join(", "),
            x = `rotateX(${p(w[0])}deg) rotateY(${p(w[1])}deg) rotateZ(${p(
              w[2]
            )}deg)`,
            S =
              y < 0
                ? `scale(${1 + (1 - b.scale) * y * h})`
                : `scale(${1 - (1 - b.scale) * y * h})`,
            L =
              y < 0 ? 1 + (1 - b.opacity) * y * h : 1 - (1 - b.opacity) * y * h,
            P = `translate3d(${T}) ${x} ${S}`;
          if ((E && b.shadow) || !E) {
            let F = d.querySelector(".swiper-slide-shadow");
            if ((!F && b.shadow && (F = br("creative", d)), F)) {
              const R = c.shadowPerProgress ? _ * (1 / c.limitProgress) : _;
              F.style.opacity = Math.min(Math.max(Math.abs(R), 0), 1);
            }
          }
          const k = Jr(c, d);
          (k.style.transform = P),
            (k.style.opacity = L),
            b.origin && (k.style.transformOrigin = b.origin);
        }
      },
      setTransition: (o) => {
        const u = e.slides.map((l) => ji(l));
        u.forEach((l) => {
          (l.style.transitionDuration = `${o}ms`),
            l.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
              c.style.transitionDuration = `${o}ms`;
            });
        }),
          Ws({ swiper: e, duration: o, transformElements: u, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function Fd(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      wr({
        effect: "cards",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: a, activeIndex: o, rtlTranslate: u } = e,
            l = e.params.cardsEffect,
            { startTranslate: c, isTouched: h } = e.touchEventsData,
            m = u ? -e.translate : e.translate;
          for (let p = 0; p < a.length; p += 1) {
            const f = a[p],
              d = f.progress,
              g = Math.min(Math.max(d, -4), 4);
            let _ = f.swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (_ -= a[0].swiperSlideOffset);
            let y = e.params.cssMode ? -_ - e.translate : -_,
              v = 0;
            const D = -100 * Math.abs(g);
            let w = 1,
              E = -l.perSlideRotate * g,
              b = l.perSlideOffset - Math.abs(g) * 0.75;
            const T =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p,
              x =
                (T === o || T === o - 1) &&
                g > 0 &&
                g < 1 &&
                (h || e.params.cssMode) &&
                m < c,
              S =
                (T === o || T === o + 1) &&
                g < 0 &&
                g > -1 &&
                (h || e.params.cssMode) &&
                m > c;
            if (x || S) {
              const F = gt(1 - Math.abs((Math.abs(g) - 0.5) / 0.5), 0.5);
              (E += -28 * g * F),
                (w += -0.5 * F),
                (b += 96 * F),
                (v = `${-25 * F * Math.abs(g)}%`);
            }
            if (
              (g < 0
                ? (y = `calc(${y}px ${u ? "-" : "+"} (${b * Math.abs(g)}%))`)
                : g > 0
                ? (y = `calc(${y}px ${u ? "-" : "+"} (-${b * Math.abs(g)}%))`)
                : (y = `${y}px`),
              !e.isHorizontal())
            ) {
              const F = v;
              (v = y), (y = F);
            }
            const L = g < 0 ? `${1 + (1 - w) * g}` : `${1 - (1 - w) * g}`,
              P = `
        translate3d(${y}, ${v}, ${D}px)
        rotateZ(${l.rotate ? (u ? -E : E) : 0}deg)
        scale(${L})
      `;
            if (l.slideShadows) {
              let F = f.querySelector(".swiper-slide-shadow");
              F || (F = br("cards", f)),
                F &&
                  (F.style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            f.style.zIndex = -Math.abs(Math.round(d)) + a.length;
            const k = Jr(l, f);
            k.style.transform = P;
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((u) => ji(u));
          o.forEach((u) => {
            (u.style.transitionDuration = `${a}ms`),
              u.querySelectorAll(".swiper-slide-shadow").forEach((l) => {
                l.style.transitionDuration = `${a}ms`;
              });
          }),
            Ws({ swiper: e, duration: a, transformElements: o });
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
  const Od = [
    sd,
    nd,
    ad,
    od,
    ld,
    ud,
    cd,
    dd,
    fd,
    pd,
    hd,
    md,
    gd,
    vd,
    yd,
    _d,
    Ed,
    Td,
    Cd,
    Md,
    Pd,
    Ad,
    Fd,
  ];
  Et.use(Od);
  class Ld {
    constructor() {
      this.swiper = new Et("[swiper='clinic-card']", {
        direction: "horizontal",
        slidesPerView: 1.2,
        on: {
          slideChange: function (e) {
            e.slides.forEach((t) => {
              t.setAttribute("card-status", "inactive");
            }),
              e.slides[e.activeIndex].setAttribute("card-status", "active");
          },
        },
        spaceBetween: 20,
        speed: 800,
        autoplay: { delay: 25e4, disableOnInteraction: !1 },
        parallax: !0,
        loop: !0,
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
  }
  function es() {
    new Ld();
  }
  function Si(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function xo(s, e) {
    (s.prototype = Object.create(e.prototype)),
      (s.prototype.constructor = s),
      (s.__proto__ = e);
  }
  /*!
   * GSAP 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var It = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Sr = { duration: 0.5, overwrite: !1, delay: 0 },
    jn,
    et,
    be,
    Ut = 1e8,
    he = 1 / Ut,
    Kn = Math.PI * 2,
    kd = Kn / 4,
    Id = 0,
    Eo = Math.sqrt,
    zd = Math.cos,
    Rd = Math.sin,
    Ue = function (e) {
      return typeof e == "string";
    },
    Ae = function (e) {
      return typeof e == "function";
    },
    xi = function (e) {
      return typeof e == "number";
    },
    Zn = function (e) {
      return typeof e == "undefined";
    },
    ci = function (e) {
      return typeof e == "object";
    },
    Tt = function (e) {
      return e !== !1;
    },
    Qn = function () {
      return typeof window != "undefined";
    },
    Gs = function (e) {
      return Ae(e) || Ue(e);
    },
    To =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    at = Array.isArray,
    Jn = /(?:-?\.?\d|\.)+/gi,
    Co = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    xr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ea = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Mo = /[+-]=-?[.\d]+/,
    Po = /[^,'"\[\]\s]+/gi,
    Bd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Te,
    di,
    ta,
    ia,
    zt = {},
    Us = {},
    Ao,
    Fo = function (e) {
      return (Us = Tr(e, zt)) && Pt;
    },
    ra = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    ts = function (e, t) {
      return !t && console.warn(e);
    },
    Oo = function (e, t) {
      return (e && (zt[e] = t) && Us && (Us[e] = t)) || zt;
    },
    is = function () {
      return 0;
    },
    $d = { suppressEvents: !0, isStart: !0, kill: !1 },
    js = { suppressEvents: !0, kill: !1 },
    Nd = { suppressEvents: !0 },
    sa = {},
    ki = [],
    na = {},
    Lo,
    Rt = {},
    aa = {},
    ko = 30,
    Ks = [],
    oa = "",
    la = function (e) {
      var t = e[0],
        i,
        r;
      if ((ci(t) || Ae(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = Ks.length; r-- && !Ks[r].targetTest(t); );
        i = Ks[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new ul(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    Zi = function (e) {
      return e._gsap || la(Kt(e))[0]._gsap;
    },
    Io = function (e, t, i) {
      return (i = e[t]) && Ae(i)
        ? e[t]()
        : (Zn(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Ct = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Le = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Be = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Er = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    qd = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    Zs = function () {
      var e = ki.length,
        t = ki.slice(0),
        i,
        r;
      for (na = {}, ki.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    zo = function (e, t, i, r) {
      ki.length && !et && Zs(),
        e.render(t, i, et && t < 0 && (e._initted || e._startAt)),
        ki.length && !et && Zs();
    },
    Ro = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(Po).length < 2
        ? t
        : Ue(e)
        ? e.trim()
        : e;
    },
    Bo = function (e) {
      return e;
    },
    Bt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Vd = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    Tr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    $o = function s(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = ci(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    Qs = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    rs = function (e) {
      var t = e.parent || Te,
        i = e.keyframes ? Vd(at(e.keyframes)) : Bt;
      if (Tt(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    Hd = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    No = function (e, t, i, r, n) {
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
    Js = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var n = t._prev,
        a = t._next;
      n ? (n._next = a) : e[i] === t && (e[i] = a),
        a ? (a._prev = n) : e[r] === t && (e[r] = n),
        (t._next = t._prev = t.parent = null);
    },
    Ii = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    Qi = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    Yd = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    ua = function (e, t, i, r) {
      return (
        e._startAt &&
        (et
          ? e._startAt.revert(js)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    Xd = function s(e) {
      return !e || (e._ts && s(e.parent));
    },
    qo = function (e) {
      return e._repeat ? Cr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Cr = function (e, t) {
      var i = Math.floor((e = Be(e / t)));
      return e && i === e ? i - 1 : i;
    },
    en = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    tn = function (e) {
      return (e._end = Be(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || he) || 0)
      ));
    },
    rn = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = Be(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          tn(e),
          i._dirty || Qi(i, e)),
        e
      );
    },
    Vo = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = en(e.rawTime(), t)),
          (!t._dur || ns(0, t.totalDuration(), i) - t._tTime > he) &&
            t.render(i, !0)),
        Qi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -he;
      }
    },
    fi = function (e, t, i, r) {
      return (
        t.parent && Ii(t),
        (t._start = Be(
          (xi(i) ? i : i || e !== Te ? jt(e, i, t) : e._time) + t._delay
        )),
        (t._end = Be(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        No(e, t, "_first", "_last", e._sort ? "_start" : 0),
        ca(t) || (e._recent = t),
        r || Vo(e, t),
        e._ts < 0 && rn(e, e._tTime),
        e
      );
    },
    Ho = function (e, t) {
      return (
        (zt.ScrollTrigger || ra("scrollTrigger", t)) &&
        zt.ScrollTrigger.create(t, e)
      );
    },
    Yo = function (e, t, i, r, n) {
      if ((_a(e, t, n), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !et &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Lo !== Nt.frame
      )
        return ki.push(e), (e._lazy = [n, r]), 1;
    },
    Wd = function s(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
    },
    ca = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Gd = function (e, t, i, r) {
      var n = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && Wd(e) && !(!e._initted && ca(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !ca(e))))
            ? 0
            : 1,
        o = e._rDelay,
        u = 0,
        l,
        c,
        h;
      if (
        (o &&
          e._repeat &&
          ((u = ns(0, e._tDur, t)),
          (c = Cr(u, o)),
          e._yoyo && c & 1 && (a = 1 - a),
          c !== Cr(e._tTime, o) &&
            ((n = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== n || et || r || e._zTime === he || (!t && e._zTime))
      ) {
        if (!e._initted && Yo(e, t, r, i, u)) return;
        for (
          h = e._zTime,
            e._zTime = t || (i ? he : 0),
            i || (i = t && !h),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = u,
            l = e._pt;
          l;

        )
          l.r(a, l.d), (l = l._next);
        t < 0 && ua(e, t, i, !0),
          e._onUpdate && !i && $t(e, "onUpdate"),
          u && e._repeat && !i && e.parent && $t(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && Ii(e, 1),
            !i &&
              !et &&
              ($t(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Ud = function (e, t, i) {
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
    Mr = function (e, t, i, r) {
      var n = e._repeat,
        a = Be(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = n ? (n < 0 ? 1e10 : Be(a * (n + 1) + e._rDelay * n)) : a),
        o > 0 && !r && rn(e, (e._tTime = e._tDur * o)),
        e.parent && tn(e),
        i || Qi(e.parent, e),
        e
      );
    },
    Xo = function (e) {
      return e instanceof yt ? Qi(e) : Mr(e, e._dur);
    },
    jd = { _start: 0, endTime: is, totalDuration: is },
    jt = function s(e, t, i) {
      var r = e.labels,
        n = e._recent || jd,
        a = e.duration() >= Ut ? n.endTime(!1) : e._dur,
        o,
        u,
        l;
      return Ue(t) && (isNaN(t) || t in r)
        ? ((u = t.charAt(0)),
          (l = t.substr(-1) === "%"),
          (o = t.indexOf("=")),
          u === "<" || u === ">"
            ? (o >= 0 && (t = t.replace(/=/, "")),
              (u === "<" ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (l ? (o < 0 ? n : i).totalDuration() / 100 : 1))
            : o < 0
            ? (t in r || (r[t] = a), r[t])
            : ((u = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
              l && i && (u = (u / 100) * (at(i) ? i[0] : i).totalDuration()),
              o > 1 ? s(e, t.substr(0, o - 1), i) + u : a + u))
        : t == null
        ? a
        : +t;
    },
    ss = function (e, t, i) {
      var r = xi(t[1]),
        n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[n],
        o,
        u;
      if ((r && (a.duration = t[1]), (a.parent = i), e)) {
        for (o = a, u = i; u && !("immediateRender" in o); )
          (o = u.vars.defaults || {}), (u = Tt(u.vars.inherit) && u.parent);
        (a.immediateRender = Tt(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[n - 1]);
      }
      return new $e(t[0], a, t[n + 1]);
    },
    zi = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    ns = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    ot = function (e, t) {
      return !Ue(e) || !(t = Bd.exec(e)) ? "" : t[1];
    },
    Kd = function (e, t, i) {
      return zi(i, function (r) {
        return ns(e, t, r);
      });
    },
    da = [].slice,
    Wo = function (e, t) {
      return (
        e &&
        ci(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && ci(e[0]))) &&
        !e.nodeType &&
        e !== di
      );
    },
    Zd = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var n;
          return (Ue(r) && !t) || Wo(r, 1)
            ? (n = i).push.apply(n, Kt(r))
            : i.push(r);
        }) || i
      );
    },
    Kt = function (e, t, i) {
      return be && !t && be.selector
        ? be.selector(e)
        : Ue(e) && !i && (ta || !Ar())
        ? da.call((t || ia).querySelectorAll(e), 0)
        : at(e)
        ? Zd(e, i)
        : Wo(e)
        ? da.call(e, 0)
        : e
        ? [e]
        : [];
    },
    fa = function (e) {
      return (
        (e = Kt(e)[0] || ts("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Kt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? ts("Invalid scope") || ia.createElement("div")
              : e
          );
        }
      );
    },
    Go = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Uo = function (e) {
      if (Ae(e)) return e;
      var t = ci(e) ? e : { each: e },
        i = Ji(t.ease),
        r = t.from || 0,
        n = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        u = isNaN(r) || o,
        l = t.axis,
        c = r,
        h = r;
      return (
        Ue(r)
          ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && u && ((c = r[0]), (h = r[1])),
        function (m, p, f) {
          var d = (f || t).length,
            g = a[d],
            _,
            y,
            v,
            D,
            w,
            E,
            b,
            T,
            x;
          if (!g) {
            if (((x = t.grid === "auto" ? 0 : (t.grid || [1, Ut])[1]), !x)) {
              for (
                b = -Ut;
                b < (b = f[x++].getBoundingClientRect().left) && x < d;

              );
              x < d && x--;
            }
            for (
              g = a[d] = [],
                _ = u ? Math.min(x, d) * c - 0.5 : r % x,
                y = x === Ut ? 0 : u ? (d * h) / x - 0.5 : (r / x) | 0,
                b = 0,
                T = Ut,
                E = 0;
              E < d;
              E++
            )
              (v = (E % x) - _),
                (D = y - ((E / x) | 0)),
                (g[E] = w =
                  l ? Math.abs(l === "y" ? D : v) : Eo(v * v + D * D)),
                w > b && (b = w),
                w < T && (T = w);
            r === "random" && Go(g),
              (g.max = b - T),
              (g.min = T),
              (g.v = d =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (x > d
                      ? d - 1
                      : l
                      ? l === "y"
                        ? d / x
                        : x
                      : Math.max(x, d / x)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = d < 0 ? n - d : n),
              (g.u = ot(t.amount || t.each) || 0),
              (i = i && d < 0 ? al(i) : i);
          }
          return (
            (d = (g[m] - g.min) / g.max || 0),
            Be(g.b + (i ? i(d) : d) * g.v) + g.u
          );
        }
      );
    },
    pa = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = Be(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (xi(i) ? 0 : ot(i));
      };
    },
    jo = function (e, t) {
      var i = at(e),
        r,
        n;
      return (
        !i &&
          ci(e) &&
          ((r = i = e.radius || Ut),
          e.values
            ? ((e = Kt(e.values)), (n = !xi(e[0])) && (r *= r))
            : (e = pa(e.increment))),
        zi(
          t,
          i
            ? Ae(e)
              ? function (a) {
                  return (n = e(a)), Math.abs(n - a) <= r ? n : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(n ? a.x : a),
                      u = parseFloat(n ? a.y : 0),
                      l = Ut,
                      c = 0,
                      h = e.length,
                      m,
                      p;
                    h--;

                  )
                    n
                      ? ((m = e[h].x - o),
                        (p = e[h].y - u),
                        (m = m * m + p * p))
                      : (m = Math.abs(e[h] - o)),
                      m < l && ((l = m), (c = h));
                  return (
                    (c = !r || l <= r ? e[c] : a),
                    n || c === a || xi(a) ? c : c + ot(a)
                  );
                }
            : pa(e)
        )
      );
    },
    Ko = function (e, t, i, r) {
      return zi(at(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return at(e)
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
    Qd = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (n, a) {
          return a(n);
        }, r);
      };
    },
    Jd = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || ot(i));
      };
    },
    ef = function (e, t, i) {
      return Qo(e, t, 0, 1, i);
    },
    Zo = function (e, t, i) {
      return zi(i, function (r) {
        return e[~~t(r)];
      });
    },
    tf = function s(e, t, i) {
      var r = t - e;
      return at(e)
        ? Zo(e, s(0, e.length), t)
        : zi(i, function (n) {
            return ((r + ((n - e) % r)) % r) + e;
          });
    },
    rf = function s(e, t, i) {
      var r = t - e,
        n = r * 2;
      return at(e)
        ? Zo(e, s(0, e.length - 1), t)
        : zi(i, function (a) {
            return (a = (n + ((a - e) % n)) % n || 0), e + (a > r ? n - a : a);
          });
    },
    as = function (e) {
      for (var t = 0, i = "", r, n, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (n = e.substr(r + 7, a - r - 7).match(o ? Po : Jn)),
          (i +=
            e.substr(t, r - t) +
            Ko(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    Qo = function (e, t, i, r, n) {
      var a = t - e,
        o = r - i;
      return zi(n, function (u) {
        return i + (((u - e) / a) * o || 0);
      });
    },
    sf = function s(e, t, i, r) {
      var n = isNaN(e + t)
        ? 0
        : function (p) {
            return (1 - p) * e + p * t;
          };
      if (!n) {
        var a = Ue(e),
          o = {},
          u,
          l,
          c,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (at(e) && !at(t)) {
          for (c = [], h = e.length, m = h - 2, l = 1; l < h; l++)
            c.push(s(e[l - 1], e[l]));
          h--,
            (n = function (f) {
              f *= h;
              var d = Math.min(m, ~~f);
              return c[d](f - d);
            }),
            (i = t);
        } else r || (e = Tr(at(e) ? [] : {}, e));
        if (!c) {
          for (u in t) va.call(o, e, u, "get", t[u]);
          n = function (f) {
            return ba(f, o) || (a ? e.p : e);
          };
        }
      }
      return zi(i, n);
    },
    Jo = function (e, t, i) {
      var r = e.labels,
        n = Ut,
        a,
        o,
        u;
      for (a in r)
        (o = r[a] - t),
          o < 0 == !!i && o && n > (o = Math.abs(o)) && ((u = a), (n = o));
      return u;
    },
    $t = function (e, t, i) {
      var r = e.vars,
        n = r[t],
        a = be,
        o = e._ctx,
        u,
        l,
        c;
      if (n)
        return (
          (u = r[t + "Params"]),
          (l = r.callbackScope || e),
          i && ki.length && Zs(),
          o && (be = o),
          (c = u ? n.apply(l, u) : n.call(l)),
          (be = a),
          c
        );
    },
    os = function (e) {
      return (
        Ii(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!et),
        e.progress() < 1 && $t(e, "onInterrupt"),
        e
      );
    },
    Pr,
    el = [],
    tl = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Qn() || e.headless)) {
          var t = e.name,
            i = Ae(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            n = {
              init: is,
              render: ba,
              add: va,
              kill: Df,
              modifier: _f,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: wa,
              aliases: {},
              register: 0,
            };
          if ((Ar(), e !== r)) {
            if (Rt[t]) return;
            Bt(r, Bt(Qs(e, n), a)),
              Tr(r.prototype, Tr(n, Qs(e, a))),
              (Rt[(r.prop = t)] = r),
              e.targetTest && (Ks.push(r), (sa[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Oo(t, r), e.register && e.register(Pt, r, Mt);
        } else el.push(e);
    },
    me = 255,
    ls = {
      aqua: [0, me, me],
      lime: [0, me, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, me],
      navy: [0, 0, 128],
      white: [me, me, me],
      olive: [128, 128, 0],
      yellow: [me, me, 0],
      orange: [me, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [me, 0, 0],
      pink: [me, 192, 203],
      cyan: [0, me, me],
      transparent: [me, me, me, 0],
    },
    ha = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          me +
          0.5) |
          0
      );
    },
    il = function (e, t, i) {
      var r = e ? (xi(e) ? [e >> 16, (e >> 8) & me, e & me] : 0) : ls.black,
        n,
        a,
        o,
        u,
        l,
        c,
        h,
        m,
        p,
        f;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ls[e]))
          r = ls[e];
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
              [r >> 16, (r >> 8) & me, r & me, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & me, e & me]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = f = e.match(Jn)), !t))
            (u = (+r[0] % 360) / 360),
              (l = +r[1] / 100),
              (c = +r[2] / 100),
              (a = c <= 0.5 ? c * (l + 1) : c + l - c * l),
              (n = c * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = ha(u + 1 / 3, n, a)),
              (r[1] = ha(u, n, a)),
              (r[2] = ha(u - 1 / 3, n, a));
          else if (~e.indexOf("="))
            return (r = e.match(Co)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(Jn) || ls.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !f &&
          ((n = r[0] / me),
          (a = r[1] / me),
          (o = r[2] / me),
          (h = Math.max(n, a, o)),
          (m = Math.min(n, a, o)),
          (c = (h + m) / 2),
          h === m
            ? (u = l = 0)
            : ((p = h - m),
              (l = c > 0.5 ? p / (2 - h - m) : p / (h + m)),
              (u =
                h === n
                  ? (a - o) / p + (a < o ? 6 : 0)
                  : h === a
                  ? (o - n) / p + 2
                  : (n - a) / p + 4),
              (u *= 60)),
          (r[0] = ~~(u + 0.5)),
          (r[1] = ~~(l * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    rl = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(Ri).forEach(function (n) {
          var a = n.match(xr) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    sl = function (e, t, i) {
      var r = "",
        n = (e + r).match(Ri),
        a = t ? "hsla(" : "rgba(",
        o = 0,
        u,
        l,
        c,
        h;
      if (!n) return e;
      if (
        ((n = n.map(function (m) {
          return (
            (m = il(m, t, 1)) &&
            a +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((c = rl(e)), (u = i.c), u.join(r) !== c.c.join(r)))
      )
        for (l = e.replace(Ri, "1").split(xr), h = l.length - 1; o < h; o++)
          r +=
            l[o] +
            (~u.indexOf(o)
              ? n.shift() || a + "0,0,0,0)"
              : (c.length ? c : n.length ? n : i).shift());
      if (!l)
        for (l = e.split(Ri), h = l.length - 1; o < h; o++) r += l[o] + n[o];
      return r + l[h];
    },
    Ri = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in ls) s += "|" + e + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    nf = /hsl[a]?\(/,
    nl = function (e) {
      var t = e.join(" "),
        i;
      if (((Ri.lastIndex = 0), Ri.test(t)))
        return (
          (i = nf.test(t)),
          (e[1] = sl(e[1], i)),
          (e[0] = sl(e[0], i, rl(e[1]))),
          !0
        );
    },
    us,
    Nt = (function () {
      var s = Date.now,
        e = 500,
        t = 33,
        i = s(),
        r = i,
        n = 1e3 / 240,
        a = n,
        o = [],
        u,
        l,
        c,
        h,
        m,
        p,
        f = function d(g) {
          var _ = s() - r,
            y = g === !0,
            v,
            D,
            w,
            E;
          if (
            ((_ > e || _ < 0) && (i += _ - t),
            (r += _),
            (w = r - i),
            (v = w - a),
            (v > 0 || y) &&
              ((E = ++h.frame),
              (m = w - h.time * 1e3),
              (h.time = w = w / 1e3),
              (a += v + (v >= n ? 4 : n - v)),
              (D = 1)),
            y || (u = l(d)),
            D)
          )
            for (p = 0; p < o.length; p++) o[p](w, m, E, g);
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
            Ao &&
              (!ta &&
                Qn() &&
                ((di = ta = window),
                (ia = di.document || {}),
                (zt.gsap = Pt),
                (di.gsapVersions || (di.gsapVersions = [])).push(Pt.version),
                Fo(Us || di.GreenSockGlobals || (!di.gsap && di) || {}),
                el.forEach(tl)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              u && h.sleep(),
              (l =
                c ||
                function (g) {
                  return setTimeout(g, (a - h.time * 1e3 + 1) | 0);
                }),
              (us = 1),
              f(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(u), (us = 0), (l = is);
          },
          lagSmoothing: function (g, _) {
            (e = g || 1 / 0), (t = Math.min(_ || 33, e));
          },
          fps: function (g) {
            (n = 1e3 / (g || 240)), (a = h.time * 1e3 + n);
          },
          add: function (g, _, y) {
            var v = _
              ? function (D, w, E, b) {
                  g(D, w, E, b), h.remove(v);
                }
              : g;
            return h.remove(g), o[y ? "unshift" : "push"](v), Ar(), v;
          },
          remove: function (g, _) {
            ~(_ = o.indexOf(g)) && o.splice(_, 1) && p >= _ && p--;
          },
          _listeners: o,
        }),
        h
      );
    })(),
    Ar = function () {
      return !us && Nt.wake();
    },
    le = {},
    af = /^[\d.\-M][\d.\-,\s]/,
    of = /["']/g,
    lf = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          n = 1,
          a = i.length,
          o,
          u,
          l;
        n < a;
        n++
      )
        (u = i[n]),
          (o = n !== a - 1 ? u.lastIndexOf(",") : u.length),
          (l = u.substr(0, o)),
          (t[r] = isNaN(l) ? l.replace(of, "").trim() : +l),
          (r = u.substr(o + 1).trim());
      return t;
    },
    uf = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    cf = function (e) {
      var t = (e + "").split("("),
        i = le[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [lf(t[1])] : uf(e).split(",").map(Ro)
          )
        : le._CE && af.test(e)
        ? le._CE("", e)
        : i;
    },
    al = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    ol = function s(e, t) {
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
    },
    Ji = function (e, t) {
      return (e && (Ae(e) ? e : le[e] || cf(e))) || t;
    },
    er = function (e, t, i, r) {
      i === void 0 &&
        (i = function (u) {
          return 1 - t(1 - u);
        }),
        r === void 0 &&
          (r = function (u) {
            return u < 0.5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2;
          });
      var n = { easeIn: t, easeOut: i, easeInOut: r },
        a;
      return (
        Ct(e, function (o) {
          (le[o] = zt[o] = n), (le[(a = o.toLowerCase())] = i);
          for (var u in n)
            le[
              a + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
            ] = le[o + "." + u] = n[u];
        }),
        n
      );
    },
    ll = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    ma = function s(e, t, i) {
      var r = t >= 1 ? t : 1,
        n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (n / Kn) * (Math.asin(1 / r) || 0),
        o = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Rd((c - a) * n) + 1;
        },
        u =
          e === "out"
            ? o
            : e === "in"
            ? function (l) {
                return 1 - o(1 - l);
              }
            : ll(o);
      return (
        (n = Kn / n),
        (u.config = function (l, c) {
          return s(e, l, c);
        }),
        u
      );
    },
    ga = function s(e, t) {
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
            : ll(i);
      return (
        (r.config = function (n) {
          return s(e, n);
        }),
        r
      );
    };
  Ct("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
    var t = e < 5 ? e + 1 : e;
    er(
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
    (le.Linear.easeNone = le.none = le.Linear.easeIn),
    er("Elastic", ma("in"), ma("out"), ma()),
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
      er(
        "Bounce",
        function (a) {
          return 1 - n(1 - a);
        },
        n
      );
    })(7.5625, 2.75),
    er("Expo", function (s) {
      return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
    }),
    er("Circ", function (s) {
      return -(Eo(1 - s * s) - 1);
    }),
    er("Sine", function (s) {
      return s === 1 ? 1 : -zd(s * kd) + 1;
    }),
    er("Back", ga("in"), ga("out"), ga()),
    (le.SteppedEase =
      le.steps =
      zt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              n = t ? 1 : 0,
              a = 1 - he;
            return function (o) {
              return (((r * ns(0, a, o)) | 0) + n) * i;
            };
          },
        }),
    (Sr.ease = le["quad.out"]),
    Ct(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (oa += s + "," + s + "Params,");
      }
    );
  var ul = function (e, t) {
      (this.id = Id++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Io),
        (this.set = t ? t.getSetter : wa);
    },
    cs = (function () {
      function s(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Mr(this, +t.duration, 1, 1),
          (this.data = t.data),
          be && ((this._ctx = be), be.data.push(this)),
          us || Nt.wake();
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
              Mr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((Ar(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              rn(this, i), !n._dp || n.parent || Vo(n, this);
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
              (this._initted && Math.abs(this._zTime) === he) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), zo(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + qo(this)) %
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
                  qo(this),
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
            ? Cr(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -he ? 0 : this._rts;
          if (this._rts === i) return this;
          var n =
            this.parent && this._ts ? en(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -he ? 0 : this._rts),
            this.totalTime(ns(-Math.abs(this._delay), this._tDur, n), r !== !1),
            tn(this),
            Yd(this)
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
                  : (Ar(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== he &&
                        (this._tTime -= he)
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
            (Tt(i) ? this.totalDuration() : this.duration()) /
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
              ? en(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = Nd);
          var r = et;
          return (
            (et = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (et = r),
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
            ? ((this._repeat = i === 1 / 0 ? -2 : i), Xo(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), Xo(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(jt(this, i), Tt(r));
        }),
        (e.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, Tt(r)),
            this._dur || (this._zTime = -he),
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
                this.timeScale(-this._rts || (i ? -he : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -he), this;
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
              n < this.endTime(!0) - he)
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
            var a = Ae(i) ? i : Bo,
              o = function () {
                var l = r.then;
                (r.then = null),
                  Ae(a) && (a = a(r)) && (a.then || a === r) && (r.then = l),
                  n(a),
                  (r.then = l);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? o()
              : (r._prom = o);
          });
        }),
        (e.kill = function () {
          os(this);
        }),
        s
      );
    })();
  Bt(cs.prototype, {
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
    _zTime: -he,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var yt = (function (s) {
    xo(e, s);
    function e(i, r) {
      var n;
      return (
        i === void 0 && (i = {}),
        (n = s.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = Tt(i.sortChildren)),
        Te && fi(i.parent || Te, Si(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && Ho(Si(n), i.scrollTrigger),
        n
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, n, a) {
        return ss(0, arguments, this), this;
      }),
      (t.from = function (r, n, a) {
        return ss(1, arguments, this), this;
      }),
      (t.fromTo = function (r, n, a, o) {
        return ss(2, arguments, this), this;
      }),
      (t.set = function (r, n, a) {
        return (
          (n.duration = 0),
          (n.parent = this),
          rs(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new $e(r, n, jt(this, a), 1),
          this
        );
      }),
      (t.call = function (r, n, a) {
        return fi(this, $e.delayedCall(0, r, n), a);
      }),
      (t.staggerTo = function (r, n, a, o, u, l, c) {
        return (
          (a.duration = n),
          (a.stagger = a.stagger || o),
          (a.onComplete = l),
          (a.onCompleteParams = c),
          (a.parent = this),
          new $e(r, a, jt(this, u)),
          this
        );
      }),
      (t.staggerFrom = function (r, n, a, o, u, l, c) {
        return (
          (a.runBackwards = 1),
          (rs(a).immediateRender = Tt(a.immediateRender)),
          this.staggerTo(r, n, a, o, u, l, c)
        );
      }),
      (t.staggerFromTo = function (r, n, a, o, u, l, c, h) {
        return (
          (o.startAt = a),
          (rs(o).immediateRender = Tt(o.immediateRender)),
          this.staggerTo(r, n, o, u, l, c, h)
        );
      }),
      (t.render = function (r, n, a) {
        var o = this._time,
          u = this._dirty ? this.totalDuration() : this._tDur,
          l = this._dur,
          c = r <= 0 ? 0 : Be(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !l),
          m,
          p,
          f,
          d,
          g,
          _,
          y,
          v,
          D,
          w,
          E,
          b;
        if (
          (this !== Te && c > u && r >= 0 && (c = u),
          c !== this._tTime || a || h)
        ) {
          if (
            (o !== this._time &&
              l &&
              ((c += this._time - o), (r += this._time - o)),
            (m = c),
            (D = this._start),
            (v = this._ts),
            (_ = !v),
            h && (l || (o = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((E = this._yoyo),
              (g = l + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, n, a);
            if (
              ((m = Be(c % g)),
              c === u
                ? ((d = this._repeat), (m = l))
                : ((w = Be(c / g)),
                  (d = ~~w),
                  d && d === w && ((m = l), d--),
                  m > l && (m = l)),
              (w = Cr(this._tTime, g)),
              !o &&
                this._tTime &&
                w !== d &&
                this._tTime - w * g - this._dur <= 0 &&
                (w = d),
              E && d & 1 && ((m = l - m), (b = 1)),
              d !== w && !this._lock)
            ) {
              var T = E && w & 1,
                x = T === (E && d & 1);
              if (
                (d < w && (T = !T),
                (o = T ? 0 : c % l ? l : c),
                (this._lock = 1),
                (this.render(o || (b ? 0 : Be(d * g)), n, !l)._lock = 0),
                (this._tTime = c),
                !n && this.parent && $t(this, "onRepeat"),
                this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  _ !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((l = this._dur),
                (u = this._tDur),
                x &&
                  ((this._lock = 2),
                  (o = T ? l : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !b && this.invalidate()),
                (this._lock = 0),
                !this._ts && !_)
              )
                return this;
              ol(this, b);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((y = Ud(this, Be(o), Be(m))), y && (c -= m - (m = y._start))),
            (this._tTime = c),
            (this._time = m),
            (this._act = !v),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && m && !n && !d && ($t(this, "onStart"), this._tTime !== c))
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
                  m !== this._time || (!this._ts && !_))
                ) {
                  (y = 0), f && (c += this._zTime = -he);
                  break;
                }
              }
              p = f;
            }
          else {
            p = this._last;
            for (var S = r < 0 ? r : m; p; ) {
              if (
                ((f = p._prev), (p._act || S <= p._end) && p._ts && y !== p)
              ) {
                if (p.parent !== this) return this.render(r, n, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (S - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (S - p._start) * p._ts,
                    n,
                    a || (et && (p._initted || p._startAt))
                  ),
                  m !== this._time || (!this._ts && !_))
                ) {
                  (y = 0), f && (c += this._zTime = S ? -he : he);
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
            (y.render(m >= o ? 0 : -he)._zTime = m >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = D), tn(this), this.render(r, n, a);
          this._onUpdate && !n && $t(this, "onUpdate", !0),
            ((c === u && this._tTime >= this.totalDuration()) || (!c && o)) &&
              (D === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !l) &&
                  ((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
                  Ii(this, 1),
                !n &&
                  !(r < 0 && !o) &&
                  (c || o || !u) &&
                  ($t(
                    this,
                    c === u && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < u && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, n) {
        var a = this;
        if ((xi(n) || (n = jt(this, n, r)), !(r instanceof cs))) {
          if (at(r))
            return (
              r.forEach(function (o) {
                return a.add(o, n);
              }),
              this
            );
          if (Ue(r)) return this.addLabel(r, n);
          if (Ae(r)) r = $e.delayedCall(0, r);
          else return this;
        }
        return this !== r ? fi(this, r, n) : this;
      }),
      (t.getChildren = function (r, n, a, o) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -Ut);
        for (var u = [], l = this._first; l; )
          l._start >= o &&
            (l instanceof $e
              ? n && u.push(l)
              : (a && u.push(l),
                r && u.push.apply(u, l.getChildren(!0, n, a)))),
            (l = l._next);
        return u;
      }),
      (t.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
          if (n[a].vars.id === r) return n[a];
      }),
      (t.remove = function (r) {
        return Ue(r)
          ? this.removeLabel(r)
          : Ae(r)
          ? this.killTweensOf(r)
          : (r.parent === this && Js(this, r),
            r === this._recent && (this._recent = this._last),
            Qi(this));
      }),
      (t.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Be(
                Nt.time -
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
        return (this.labels[r] = jt(this, n)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, n, a) {
        var o = $e.delayedCall(0, n || is, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), fi(this, o, jt(this, r))
        );
      }),
      (t.removePause = function (r) {
        var n = this._first;
        for (r = jt(this, r); n; )
          n._start === r && n.data === "isPause" && Ii(n), (n = n._next);
      }),
      (t.killTweensOf = function (r, n, a) {
        for (var o = this.getTweensOf(r, a), u = o.length; u--; )
          Bi !== o[u] && o[u].kill(r, n);
        return this;
      }),
      (t.getTweensOf = function (r, n) {
        for (var a = [], o = Kt(r), u = this._first, l = xi(n), c; u; )
          u instanceof $e
            ? qd(u._targets, o) &&
              (l
                ? (!Bi || (u._initted && u._ts)) &&
                  u.globalTime(0) <= n &&
                  u.globalTime(u.totalDuration()) > n
                : !n || u.isActive()) &&
              a.push(u)
            : (c = u.getTweensOf(o, n)).length && a.push.apply(a, c),
            (u = u._next);
        return a;
      }),
      (t.tweenTo = function (r, n) {
        n = n || {};
        var a = this,
          o = jt(a, r),
          u = n,
          l = u.startAt,
          c = u.onStart,
          h = u.onStartParams,
          m = u.immediateRender,
          p,
          f = $e.to(
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
                    (o - (l && "time" in l ? l.time : a._time)) / a.timeScale()
                  ) ||
                  he,
                onStart: function () {
                  if ((a.pause(), !p)) {
                    var g =
                      n.duration ||
                      Math.abs(
                        (o - (l && "time" in l ? l.time : a._time)) /
                          a.timeScale()
                      );
                    f._dur !== g && Mr(f, g, 0, 1).render(f._time, !0, !0),
                      (p = 1);
                  }
                  c && c.apply(f, h || []);
                },
              },
              n
            )
          );
        return m ? f.render(0) : f;
      }),
      (t.tweenFromTo = function (r, n, a) {
        return this.tweenTo(n, Bt({ startAt: { time: jt(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Jo(this, jt(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Jo(this, jt(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + he);
      }),
      (t.shiftChildren = function (r, n, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, u = this.labels, l; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (n) for (l in u) u[l] >= a && (u[l] += r);
        return Qi(this);
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
          Qi(this)
        );
      }),
      (t.totalDuration = function (r) {
        var n = 0,
          a = this,
          o = a._last,
          u = Ut,
          l,
          c,
          h;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -r : r)
          );
        if (a._dirty) {
          for (h = a.parent; o; )
            (l = o._prev),
              o._dirty && o.totalDuration(),
              (c = o._start),
              c > u && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (fi(a, o, c - o._delay, 1)._lock = 0))
                : (u = c),
              c < 0 &&
                o._ts &&
                ((n -= c),
                ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                  ((a._start += c / a._ts), (a._time -= c), (a._tTime -= c)),
                a.shiftChildren(-c, !1, -1 / 0),
                (u = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = l);
          Mr(a, a === Te && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Te._ts && (zo(Te, en(r, Te)), (Lo = Nt.frame)), Nt.frame >= ko)) {
          ko += It.autoSleep || 120;
          var n = Te._first;
          if ((!n || !n._ts) && It.autoSleep && Nt._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || Nt.sleep();
          }
        }
      }),
      e
    );
  })(cs);
  Bt(yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var df = function (e, t, i, r, n, a, o) {
      var u = new Mt(this._pt, e, t, 0, 1, ml, null, n),
        l = 0,
        c = 0,
        h,
        m,
        p,
        f,
        d,
        g,
        _,
        y;
      for (
        u.b = i,
          u.e = r,
          i += "",
          r += "",
          (_ = ~r.indexOf("random(")) && (r = as(r)),
          a && ((y = [i, r]), a(y, e, t), (i = y[0]), (r = y[1])),
          m = i.match(ea) || [];
        (h = ea.exec(r));

      )
        (f = h[0]),
          (d = r.substring(l, h.index)),
          p ? (p = (p + 1) % 5) : d.substr(-5) === "rgba(" && (p = 1),
          f !== m[c++] &&
            ((g = parseFloat(m[c - 1]) || 0),
            (u._pt = {
              _next: u._pt,
              p: d || c === 1 ? d : ",",
              s: g,
              c: f.charAt(1) === "=" ? Er(g, f) - g : parseFloat(f) - g,
              m: p && p < 4 ? Math.round : 0,
            }),
            (l = ea.lastIndex));
      return (
        (u.c = l < r.length ? r.substring(l, r.length) : ""),
        (u.fp = o),
        (Mo.test(r) || _) && (u.e = 0),
        (this._pt = u),
        u
      );
    },
    va = function (e, t, i, r, n, a, o, u, l, c) {
      Ae(r) && (r = r(n || 0, e, a));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : Ae(h)
            ? l
              ? e[
                  t.indexOf("set") || !Ae(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](l)
              : e[t]()
            : h,
        p = Ae(h) ? (l ? gf : pl) : Da,
        f;
      if (
        (Ue(r) &&
          (~r.indexOf("random(") && (r = as(r)),
          r.charAt(1) === "=" &&
            ((f = Er(m, r) + (ot(m) || 0)), (f || f === 0) && (r = f))),
        !c || m !== r || ya)
      )
        return !isNaN(m * r) && r !== ""
          ? ((f = new Mt(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? yf : hl,
              0,
              p
            )),
            l && (f.fp = l),
            o && f.modifier(o, this, e),
            (this._pt = f))
          : (!h && !(t in e) && ra(t, r),
            df.call(this, e, t, m, r, p, u || It.stringFilter, l));
    },
    ff = function (e, t, i, r, n) {
      if (
        (Ae(e) && (e = ds(e, n, t, i, r)),
        !ci(e) || (e.style && e.nodeType) || at(e) || To(e))
      )
        return Ue(e) ? ds(e, n, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = ds(e[o], n, t, i, r);
      return a;
    },
    cl = function (e, t, i, r, n, a) {
      var o, u, l, c;
      if (
        Rt[e] &&
        (o = new Rt[e]()).init(
          n,
          o.rawVars ? t[e] : ff(t[e], r, n, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = u = new Mt(i._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
        i !== Pr)
      )
        for (l = i._ptLookup[i._targets.indexOf(n)], c = o._props.length; c--; )
          l[o._props[c]] = u;
      return o;
    },
    Bi,
    ya,
    _a = function s(e, t, i) {
      var r = e.vars,
        n = r.ease,
        a = r.startAt,
        o = r.immediateRender,
        u = r.lazy,
        l = r.onUpdate,
        c = r.runBackwards,
        h = r.yoyoEase,
        m = r.keyframes,
        p = r.autoRevert,
        f = e._dur,
        d = e._startAt,
        g = e._targets,
        _ = e.parent,
        y = _ && _.data === "nested" ? _.vars.targets : g,
        v = e._overwrite === "auto" && !jn,
        D = e.timeline,
        w,
        E,
        b,
        T,
        x,
        S,
        L,
        P,
        k,
        F,
        R,
        I,
        M;
      if (
        (D && (!m || !n) && (n = "none"),
        (e._ease = Ji(n, Sr.ease)),
        (e._yEase = h ? al(Ji(h === !0 ? n : h, Sr.ease)) : 0),
        h &&
          e._yoyo &&
          !e._repeat &&
          ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
        (e._from = !D && !!r.runBackwards),
        !D || (m && !r.stagger))
      ) {
        if (
          ((P = g[0] ? Zi(g[0]).harness : 0),
          (I = P && r[P.prop]),
          (w = Qs(r, sa)),
          d &&
            (d._zTime < 0 && d.progress(1),
            t < 0 && c && o && !p
              ? d.render(-1, !0)
              : d.revert(c && f ? js : $d),
            (d._lazy = 0)),
          a)
        ) {
          if (
            (Ii(
              (e._startAt = $e.set(
                g,
                Bt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: _,
                    immediateRender: !0,
                    lazy: !d && Tt(u),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      l &&
                      function () {
                        return $t(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (et || (!o && !p)) && e._startAt.revert(js),
            o && f && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && f && !d) {
          if (
            (t && (o = !1),
            (b = Bt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !d && Tt(u),
                immediateRender: o,
                stagger: 0,
                parent: _,
              },
              w
            )),
            I && (b[P.prop] = I),
            Ii((e._startAt = $e.set(g, b))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (et ? e._startAt.revert(js) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            s(e._startAt, he, he);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, u = (f && Tt(u)) || (u && !f), E = 0;
          E < g.length;
          E++
        ) {
          if (
            ((x = g[E]),
            (L = x._gsap || la(g)[E]._gsap),
            (e._ptLookup[E] = F = {}),
            na[L.id] && ki.length && Zs(),
            (R = y === g ? E : y.indexOf(x)),
            P &&
              (k = new P()).init(x, I || w, e, R, y) !== !1 &&
              ((e._pt = T =
                new Mt(e._pt, x, k.name, 0, 1, k.render, k, 0, k.priority)),
              k._props.forEach(function (O) {
                F[O] = T;
              }),
              k.priority && (S = 1)),
            !P || I)
          )
            for (b in w)
              Rt[b] && (k = cl(b, w, e, R, x, y))
                ? k.priority && (S = 1)
                : (F[b] = T =
                    va.call(e, x, b, "get", w[b], R, y, 0, r.stringFilter));
          e._op && e._op[E] && e.kill(x, e._op[E]),
            v &&
              e._pt &&
              ((Bi = e),
              Te.killTweensOf(x, F, e.globalTime(t)),
              (M = !e.parent),
              (Bi = 0)),
            e._pt && u && (na[L.id] = 1);
        }
        S && gl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = l),
        (e._initted = (!e._op || e._pt) && !M),
        m && t <= 0 && D.render(Ut, !0, !0);
    },
    pf = function (e, t, i, r, n, a, o, u) {
      var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        c,
        h,
        m,
        p;
      if (!l)
        for (
          l = e._ptCache[t] = [], m = e._ptLookup, p = e._targets.length;
          p--;

        ) {
          if (((c = m[p][t]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
          if (!c)
            return (
              (ya = 1),
              (e.vars[t] = "+=0"),
              _a(e, o),
              (ya = 0),
              u ? ts(t + " not eligible for reset") : 1
            );
          l.push(c);
        }
      for (p = l.length; p--; )
        (h = l[p]),
          (c = h._pt || h),
          (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + a * c.c),
          (c.c = i - c.s),
          h.e && (h.e = Le(i) + ot(h.e)),
          h.b && (h.b = c.s + ot(h.b));
    },
    hf = function (e, t) {
      var i = e[0] ? Zi(e[0]).harness : 0,
        r = i && i.aliases,
        n,
        a,
        o,
        u;
      if (!r) return t;
      n = Tr({}, t);
      for (a in r)
        if (a in n)
          for (u = r[a].split(","), o = u.length; o--; ) n[u[o]] = n[a];
      return n;
    },
    mf = function (e, t, i, r) {
      var n = t.ease || r || "power1.inOut",
        a,
        o;
      if (at(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (u, l) {
            return o.push({ t: (l / (t.length - 1)) * 100, v: u, e: n });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: n });
    },
    ds = function (e, t, i, r, n) {
      return Ae(e)
        ? e.call(t, i, r, n)
        : Ue(e) && ~e.indexOf("random(")
        ? as(e)
        : e;
    },
    dl = oa + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    fl = {};
  Ct(dl + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (fl[s] = 1);
  });
  var $e = (function (s) {
    xo(e, s);
    function e(i, r, n, a) {
      var o;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (o = s.call(this, a ? r : rs(r)) || this);
      var u = o.vars,
        l = u.duration,
        c = u.delay,
        h = u.immediateRender,
        m = u.stagger,
        p = u.overwrite,
        f = u.keyframes,
        d = u.defaults,
        g = u.scrollTrigger,
        _ = u.yoyoEase,
        y = r.parent || Te,
        v = (at(i) || To(i) ? xi(i[0]) : "length" in r) ? [i] : Kt(i),
        D,
        w,
        E,
        b,
        T,
        x,
        S,
        L;
      if (
        ((o._targets = v.length
          ? la(v)
          : ts(
              "GSAP target " + i + " not found. https://gsap.com",
              !It.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        f || m || Gs(l) || Gs(c))
      ) {
        if (
          ((r = o.vars),
          (D = o.timeline =
            new yt({
              data: "nested",
              defaults: d || {},
              targets: y && y.data === "nested" ? y.vars.targets : v,
            })),
          D.kill(),
          (D.parent = D._dp = Si(o)),
          (D._start = 0),
          m || Gs(l) || Gs(c))
        ) {
          if (((b = v.length), (S = m && Uo(m)), ci(m)))
            for (T in m) ~dl.indexOf(T) && (L || (L = {}), (L[T] = m[T]));
          for (w = 0; w < b; w++)
            (E = Qs(r, fl)),
              (E.stagger = 0),
              _ && (E.yoyoEase = _),
              L && Tr(E, L),
              (x = v[w]),
              (E.duration = +ds(l, Si(o), w, x, v)),
              (E.delay = (+ds(c, Si(o), w, x, v) || 0) - o._delay),
              !m &&
                b === 1 &&
                E.delay &&
                ((o._delay = c = E.delay), (o._start += c), (E.delay = 0)),
              D.to(x, E, S ? S(w, x, v) : 0),
              (D._ease = le.none);
          D.duration() ? (l = c = 0) : (o.timeline = 0);
        } else if (f) {
          rs(Bt(D.vars.defaults, { ease: "none" })),
            (D._ease = Ji(f.ease || r.ease || "none"));
          var P = 0,
            k,
            F,
            R;
          if (at(f))
            f.forEach(function (I) {
              return D.to(v, I, ">");
            }),
              D.duration();
          else {
            E = {};
            for (T in f)
              T === "ease" || T === "easeEach" || mf(T, f[T], E, f.easeEach);
            for (T in E)
              for (
                k = E[T].sort(function (I, M) {
                  return I.t - M.t;
                }),
                  P = 0,
                  w = 0;
                w < k.length;
                w++
              )
                (F = k[w]),
                  (R = {
                    ease: F.e,
                    duration: ((F.t - (w ? k[w - 1].t : 0)) / 100) * l,
                  }),
                  (R[T] = F.v),
                  D.to(v, R, P),
                  (P += R.duration);
            D.duration() < l && D.to({}, { duration: l - D.duration() });
          }
        }
        l || o.duration((l = D.duration()));
      } else o.timeline = 0;
      return (
        p === !0 && !jn && ((Bi = Si(o)), Te.killTweensOf(v), (Bi = 0)),
        fi(y, Si(o), n),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (h ||
          (!l &&
            !f &&
            o._start === Be(y._time) &&
            Tt(h) &&
            Xd(Si(o)) &&
            y.data !== "nested")) &&
          ((o._tTime = -he), o.render(Math.max(0, -c) || 0)),
        g && Ho(Si(o), g),
        o
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, n, a) {
        var o = this._time,
          u = this._tDur,
          l = this._dur,
          c = r < 0,
          h = r > u - he && !c ? u : r < he ? 0 : r,
          m,
          p,
          f,
          d,
          g,
          _,
          y,
          v,
          D;
        if (!l) Gd(this, r, n, a);
        else if (
          h !== this._tTime ||
          !r ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((m = h), (v = this.timeline), this._repeat)) {
            if (((d = l + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(d * 100 + r, n, a);
            if (
              ((m = Be(h % d)),
              h === u
                ? ((f = this._repeat), (m = l))
                : ((g = Be(h / d)),
                  (f = ~~g),
                  f && f === g ? ((m = l), f--) : m > l && (m = l)),
              (_ = this._yoyo && f & 1),
              _ && ((D = this._yEase), (m = l - m)),
              (g = Cr(this._tTime, d)),
              m === o && !a && this._initted && f === g)
            )
              return (this._tTime = h), this;
            f !== g &&
              (v && this._yEase && ol(v, _),
              this.vars.repeatRefresh &&
                !_ &&
                !this._lock &&
                m !== d &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(Be(d * f), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Yo(this, c ? r : m, a, n, h)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && f !== g))
              return this;
            if (l !== this._dur) return this.render(r, n, a);
          }
          if (
            ((this._tTime = h),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = y = (D || this._ease)(m / l)),
            this._from && (this.ratio = y = 1 - y),
            m && !o && !n && !f && ($t(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(y, p.d), (p = p._next);
          (v && v.render(r < 0 ? r : v._dur * v._ease(m / this._dur), n, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (c && ua(this, r, n, a), $t(this, "onUpdate")),
            this._repeat &&
              f !== g &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              $t(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (c && !this._onUpdate && ua(this, r, !0, !0),
              (r || !l) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                Ii(this, 1),
              !n &&
                !(c && !o) &&
                (h || o || _) &&
                ($t(this, h === u ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(h < u && this.timeScale() > 0) &&
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
      (t.resetTo = function (r, n, a, o, u) {
        us || Nt.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || _a(this, l),
          (c = this._ease(l / this._dur)),
          pf(this, r, n, a, o, c, l, u)
            ? this.resetTo(r, n, a, o, 1)
            : (rn(this, 0),
              this.parent ||
                No(
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
              ? os(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!et),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, Bi && Bi.vars.overwrite !== !0)
              ._first || os(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              Mr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          u = r ? Kt(r) : o,
          l = this._ptLookup,
          c = this._pt,
          h,
          m,
          p,
          f,
          d,
          g,
          _;
        if ((!n || n === "all") && Hd(o, u))
          return n === "all" && (this._pt = 0), os(this);
        for (
          h = this._op = this._op || [],
            n !== "all" &&
              (Ue(n) &&
                ((d = {}),
                Ct(n, function (y) {
                  return (d[y] = 1);
                }),
                (n = d)),
              (n = hf(o, n))),
            _ = o.length;
          _--;

        )
          if (~u.indexOf(o[_])) {
            (m = l[_]),
              n === "all"
                ? ((h[_] = n), (f = m), (p = {}))
                : ((p = h[_] = h[_] || {}), (f = n));
            for (d in f)
              (g = m && m[d]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(d) === !0) &&
                    Js(this, g, "_pt"),
                  delete m[d]),
                p !== "all" && (p[d] = 1);
          }
        return this._initted && !this._pt && c && os(this), this;
      }),
      (e.to = function (r, n) {
        return new e(r, n, arguments[2]);
      }),
      (e.from = function (r, n) {
        return ss(1, arguments);
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
        return ss(2, arguments);
      }),
      (e.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
      }),
      (e.killTweensOf = function (r, n, a) {
        return Te.killTweensOf(r, n, a);
      }),
      e
    );
  })(cs);
  Bt($e.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Ct("staggerTo,staggerFrom,staggerFromTo", function (s) {
      $e[s] = function () {
        var e = new yt(),
          t = da.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
      };
    });
  var Da = function (e, t, i) {
      return (e[t] = i);
    },
    pl = function (e, t, i) {
      return e[t](i);
    },
    gf = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    vf = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    wa = function (e, t) {
      return Ae(e[t]) ? pl : Zn(e[t]) && e.setAttribute ? vf : Da;
    },
    hl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    yf = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    ml = function (e, t) {
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
    ba = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    _f = function (e, t, i, r) {
      for (var n = this._pt, a; n; )
        (a = n._next), n.p === r && n.modifier(e, t, i), (n = a);
    },
    Df = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? Js(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    wf = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    gl = function (e) {
      for (var t = e._pt, i, r, n, a; t; ) {
        for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (n = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = n;
    },
    Mt = (function () {
      function s(t, i, r, n, a, o, u, l, c) {
        (this.t = i),
          (this.s = n),
          (this.c = a),
          (this.p = r),
          (this.r = o || hl),
          (this.d = u || this),
          (this.set = l || Da),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = s.prototype;
      return (
        (e.modifier = function (i, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = wf),
            (this.m = i),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  Ct(
    oa +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (sa[s] = 1);
    }
  ),
    (zt.TweenMax = zt.TweenLite = $e),
    (zt.TimelineLite = zt.TimelineMax = yt),
    (Te = new yt({
      sortChildren: !1,
      defaults: Sr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (It.stringFilter = nl);
  var tr = [],
    sn = {},
    bf = [],
    vl = 0,
    Sf = 0,
    Sa = function (e) {
      return (sn[e] || bf).map(function (t) {
        return t();
      });
    },
    xa = function () {
      var e = Date.now(),
        t = [];
      e - vl > 2 &&
        (Sa("matchMediaInit"),
        tr.forEach(function (i) {
          var r = i.queries,
            n = i.conditions,
            a,
            o,
            u,
            l;
          for (o in r)
            (a = di.matchMedia(r[o]).matches),
              a && (u = 1),
              a !== n[o] && ((n[o] = a), (l = 1));
          l && (i.revert(), u && t.push(i));
        }),
        Sa("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (vl = e),
        Sa("matchMedia"));
    },
    yl = (function () {
      function s(t, i) {
        (this.selector = i && fa(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Sf++),
          t && this.add(t);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          Ae(i) && ((n = r), (r = i), (i = Ae));
          var a = this,
            o = function () {
              var l = be,
                c = a.selector,
                h;
              return (
                l && l !== a && l.data.push(a),
                n && (a.selector = fa(n)),
                (be = a),
                (h = r.apply(a, arguments)),
                Ae(h) && a._r.push(h),
                (be = l),
                (a.selector = c),
                (a.isReverted = !1),
                h
              );
            };
          return (
            (a.last = o),
            i === Ae
              ? o(a, function (u) {
                  return a.add(null, u);
                })
              : i
              ? (a[i] = o)
              : o
          );
        }),
        (e.ignore = function (i) {
          var r = be;
          (be = null), i(this), (be = r);
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
                  for (var o = n.getTweens(), u = n.data.length, l; u--; )
                    (l = n.data[u]),
                      l.data === "isFlip" &&
                        (l.revert(),
                        l.getChildren(!0, !0, !1).forEach(function (c) {
                          return o.splice(o.indexOf(c), 1);
                        }));
                  for (
                    o
                      .map(function (c) {
                        return {
                          g:
                            c._dur ||
                            c._delay ||
                            (c._sat && !c._sat.vars.immediateRender)
                              ? c.globalTime(0)
                              : -1 / 0,
                          t: c,
                        };
                      })
                      .sort(function (c, h) {
                        return h.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(i);
                      }),
                      u = n.data.length;
                    u--;

                  )
                    (l = n.data[u]),
                      l instanceof yt
                        ? l.data !== "nested" &&
                          (l.scrollTrigger && l.scrollTrigger.revert(),
                          l.kill())
                        : !(l instanceof $e) && l.revert && l.revert(i);
                  n._r.forEach(function (c) {
                    return c(i, n);
                  }),
                    (n.isReverted = !0);
                })()
              : this.data.forEach(function (o) {
                  return o.kill && o.kill();
                }),
            this.clear(),
            r)
          )
            for (var a = tr.length; a--; )
              tr[a].id === this.id && tr.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        s
      );
    })(),
    xf = (function () {
      function s(t) {
        (this.contexts = []), (this.scope = t), be && be.data.push(this);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          ci(i) || (i = { matches: i });
          var a = new yl(0, n || this.scope),
            o = (a.conditions = {}),
            u,
            l,
            c;
          be && !a.selector && (a.selector = be.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = i);
          for (l in i)
            l === "all"
              ? (c = 1)
              : ((u = di.matchMedia(i[l])),
                u &&
                  (tr.indexOf(a) < 0 && tr.push(a),
                  (o[l] = u.matches) && (c = 1),
                  u.addListener
                    ? u.addListener(xa)
                    : u.addEventListener("change", xa)));
          return (
            c &&
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
    nn = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return tl(r);
        });
      },
      timeline: function (e) {
        return new yt(e);
      },
      getTweensOf: function (e, t) {
        return Te.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Ue(e) && (e = Kt(e)[0]);
        var n = Zi(e || {}).get,
          a = i ? Bo : Ro;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a(((Rt[t] && Rt[t].get) || n)(e, t, i, r))
              : function (o, u, l) {
                  return a(((Rt[o] && Rt[o].get) || n)(e, o, u, l));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Kt(e)), e.length > 1)) {
          var r = e.map(function (c) {
              return Pt.quickSetter(c, t, i);
            }),
            n = r.length;
          return function (c) {
            for (var h = n; h--; ) r[h](c);
          };
        }
        e = e[0] || {};
        var a = Rt[t],
          o = Zi(e),
          u = (o.harness && (o.harness.aliases || {})[t]) || t,
          l = a
            ? function (c) {
                var h = new a();
                (Pr._pt = 0),
                  h.init(e, i ? c + i : c, Pr, 0, [e]),
                  h.render(1, h),
                  Pr._pt && ba(1, Pr);
              }
            : o.set(e, u);
        return a
          ? l
          : function (c) {
              return l(e, u, i ? c + i : c, o, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          n = Pt.to(
            e,
            Bt(
              ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          a = function (u, l, c) {
            return n.resetTo(t, u, l, c);
          };
        return (a.tween = n), a;
      },
      isTweening: function (e) {
        return Te.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Ji(e.ease, Sr.ease)), $o(Sr, e || {});
      },
      config: function (e) {
        return $o(It, e || {});
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
            ts(t + " effect requires " + o + " plugin.")
          );
        }),
          (aa[t] = function (o, u, l) {
            return i(Kt(o), Bt(u || {}, n), l);
          }),
          a &&
            (yt.prototype[t] = function (o, u, l) {
              return this.add(aa[t](o, ci(u) ? u : (l = u) && {}, this), l);
            });
      },
      registerEase: function (e, t) {
        le[e] = Ji(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Ji(e, t) : le;
      },
      getById: function (e) {
        return Te.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new yt(e),
          r,
          n;
        for (
          i.smoothChildTiming = Tt(e.smoothChildTiming),
            Te.remove(i),
            i._dp = 0,
            i._time = i._tTime = Te._time,
            r = Te._first;
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
        return fi(Te, i, 0), i;
      },
      context: function (e, t) {
        return e ? new yl(e, t) : be;
      },
      matchMedia: function (e) {
        return new xf(e);
      },
      matchMediaRefresh: function () {
        return (
          tr.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || xa()
        );
      },
      addEventListener: function (e, t) {
        var i = sn[e] || (sn[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = sn[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: tf,
        wrapYoyo: rf,
        distribute: Uo,
        random: Ko,
        snap: jo,
        normalize: ef,
        getUnit: ot,
        clamp: Kd,
        splitColor: il,
        toArray: Kt,
        selector: fa,
        mapRange: Qo,
        pipe: Qd,
        unitize: Jd,
        interpolate: sf,
        shuffle: Go,
      },
      install: Fo,
      effects: aa,
      ticker: Nt,
      updateRoot: yt.updateRoot,
      plugins: Rt,
      globalTimeline: Te,
      core: {
        PropTween: Mt,
        globals: Oo,
        Tween: $e,
        Timeline: yt,
        Animation: cs,
        getCache: Zi,
        _removeLinkedListItem: Js,
        reverting: function () {
          return et;
        },
        context: function (e) {
          return e && be && (be.data.push(e), (e._ctx = be)), be;
        },
        suppressOverwrites: function (e) {
          return (jn = e);
        },
      },
    };
  Ct("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (nn[s] = $e[s]);
  }),
    Nt.add(yt.updateRoot),
    (Pr = nn.to({}, { duration: 0 }));
  var Ef = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    Tf = function (e, t) {
      var i = e._targets,
        r,
        n,
        a;
      for (r in t)
        for (n = i.length; n--; )
          (a = e._ptLookup[n][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = Ef(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[n], r));
    },
    Ea = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, n, a) {
          a._onInit = function (o) {
            var u, l;
            if (
              (Ue(n) &&
                ((u = {}),
                Ct(n, function (c) {
                  return (u[c] = 1);
                }),
                (n = u)),
              t)
            ) {
              u = {};
              for (l in n) u[l] = t(n[l]);
              n = u;
            }
            Tf(o, n);
          };
        },
      };
    },
    Pt =
      nn.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, r, n) {
            var a, o, u;
            this.tween = i;
            for (a in t)
              (u = e.getAttribute(a) || ""),
                (o = this.add(
                  e,
                  "setAttribute",
                  (u || 0) + "",
                  t[a],
                  r,
                  n,
                  0,
                  0,
                  a
                )),
                (o.op = a),
                (o.b = u),
                this._props.push(a);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              et ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        Ea("roundProps", pa),
        Ea("modifiers"),
        Ea("snap", jo)
      ) || nn;
  ($e.version = yt.version = Pt.version = "3.12.7"),
    (Ao = 1),
    Qn() && Ar(),
    le.Power0,
    le.Power1,
    le.Power2,
    le.Power3,
    le.Power4,
    le.Linear,
    le.Quad,
    le.Cubic,
    le.Quart,
    le.Quint,
    le.Strong,
    le.Elastic,
    le.Back,
    le.SteppedEase,
    le.Bounce,
    le.Sine,
    le.Expo,
    le.Circ;
  /*!
   * CSSPlugin 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var _l,
    $i,
    Fr,
    Ta,
    ir,
    Dl,
    Ca,
    Cf = function () {
      return typeof window != "undefined";
    },
    Ei = {},
    rr = 180 / Math.PI,
    Or = Math.PI / 180,
    Lr = Math.atan2,
    wl = 1e8,
    Ma = /([A-Z])/g,
    Mf = /(left|right|width|margin|padding|x)/i,
    Pf = /[\s,\(]\S/,
    pi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Pa = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    Af = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    Ff = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    Of = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    bl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Sl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Lf = function (e, t, i) {
      return (e.style[t] = i);
    },
    kf = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    If = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    zf = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    Rf = function (e, t, i, r, n) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(n, a);
    },
    Bf = function (e, t, i, r, n) {
      var a = e._gsap;
      (a[t] = i), a.renderTransform(n, a);
    },
    Ce = "transform",
    At = Ce + "Origin",
    $f = function s(e, t) {
      var i = this,
        r = this.target,
        n = r.style,
        a = r._gsap;
      if (e in Ei && n) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = pi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = Ti(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : Ti(r, e)),
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
    xl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Nf = function () {
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
                : e[n].replace(Ma, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (n = Ca()),
          (!n || !n.isStart) &&
            !i[Ce] &&
            (xl(i),
            r.zOrigin &&
              i[At] &&
              ((i[At] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    El = function (e, t) {
      var i = { target: e, props: [], revert: Nf, save: $f };
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
    Tl,
    Aa = function (e, t) {
      var i = $i.createElementNS
        ? $i.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : $i.createElement(e);
      return i && i.style ? i : $i.createElement(e);
    },
    hi = function s(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(Ma, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && s(e, kr(t) || t, 1)) ||
        ""
      );
    },
    Cl = "O,Moz,ms,Ms,Webkit".split(","),
    kr = function (e, t, i) {
      var r = t || ir,
        n = r.style,
        a = 5;
      if (e in n && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(Cl[a] + e in n);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Cl[a] : "") + e;
    },
    Fa = function () {
      Cf() &&
        window.document &&
        ((_l = window),
        ($i = _l.document),
        (Fr = $i.documentElement),
        (ir = Aa("div") || { style: {} }),
        Aa("div"),
        (Ce = kr(Ce)),
        (At = Ce + "Origin"),
        (ir.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Tl = !!kr("perspective")),
        (Ca = Pt.core.reverting),
        (Ta = 1));
    },
    Ml = function (e) {
      var t = e.ownerSVGElement,
        i = Aa(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        n;
      (r.style.display = "block"), i.appendChild(r), Fr.appendChild(i);
      try {
        n = r.getBBox();
      } catch (a) {}
      return i.removeChild(r), Fr.removeChild(i), n;
    },
    Pl = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    Al = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch (r) {
        (t = Ml(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = Ml(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +Pl(e, ["x", "cx", "x1"]) || 0,
              y: +Pl(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    Fl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Al(e));
    },
    sr = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in Ei && t !== At && (t = Ce),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(Ma, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Ni = function (e, t, i, r, n, a) {
      var o = new Mt(e._pt, t, i, 0, 1, a ? Sl : bl);
      return (e._pt = o), (o.b = r), (o.e = n), e._props.push(i), o;
    },
    Ol = { deg: 1, rad: 1, turn: 1 },
    qf = { grid: 1, flex: 1 },
    qi = function s(e, t, i, r) {
      var n = parseFloat(i) || 0,
        a = (i + "").trim().substr((n + "").length) || "px",
        o = ir.style,
        u = Mf.test(t),
        l = e.tagName.toLowerCase() === "svg",
        c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        f,
        d,
        g,
        _;
      if (r === a || !n || Ol[r] || Ol[a]) return n;
      if (
        (a !== "px" && !m && (n = s(e, t, i, "px")),
        (_ = e.getCTM && Fl(e)),
        (p || a === "%") && (Ei[t] || ~t.indexOf("adius")))
      )
        return (
          (f = _ ? e.getBBox()[u ? "width" : "height"] : e[c]),
          Le(p ? (n / f) * h : (n / 100) * f)
        );
      if (
        ((o[u ? "width" : "height"] = h + (m ? a : r)),
        (d =
          (r !== "rem" && ~t.indexOf("adius")) ||
          (r === "em" && e.appendChild && !l)
            ? e
            : e.parentNode),
        _ && (d = (e.ownerSVGElement || {}).parentNode),
        (!d || d === $i || !d.appendChild) && (d = $i.body),
        (g = d._gsap),
        g && p && g.width && u && g.time === Nt.time && !g.uncache)
      )
        return Le((n / g.width) * h);
      if (p && (t === "height" || t === "width")) {
        var y = e.style[t];
        (e.style[t] = h + r), (f = e[c]), y ? (e.style[t] = y) : sr(e, t);
      } else
        (p || a === "%") &&
          !qf[hi(d, "display")] &&
          (o.position = hi(e, "position")),
          d === e && (o.position = "static"),
          d.appendChild(ir),
          (f = ir[c]),
          d.removeChild(ir),
          (o.position = "absolute");
      return (
        u && p && ((g = Zi(d)), (g.time = Nt.time), (g.width = d[c])),
        Le(m ? (f * n) / h : f && n ? (h / f) * n : 0)
      );
    },
    Ti = function (e, t, i, r) {
      var n;
      return (
        Ta || Fa(),
        t in pi &&
          t !== "transform" &&
          ((t = pi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Ei[t] && t !== "transform"
          ? ((n = ps(e, r)),
            (n =
              t !== "transformOrigin"
                ? n[t]
                : n.svg
                ? n.origin
                : on(hi(e, At)) + " " + n.zOrigin + "px"))
          : ((n = e.style[t]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (an[t] && an[t](e, t, i)) ||
                hi(e, t) ||
                Io(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? qi(e, t, n, i) + i : n
      );
    },
    Vf = function (e, t, i, r) {
      if (!i || i === "none") {
        var n = kr(t, e, 1),
          a = n && hi(e, n, 1);
        a && a !== i
          ? ((t = n), (i = a))
          : t === "borderColor" && (i = hi(e, "borderTopColor"));
      }
      var o = new Mt(this._pt, e.style, t, 0, 1, ml),
        u = 0,
        l = 0,
        c,
        h,
        m,
        p,
        f,
        d,
        g,
        _,
        y,
        v,
        D,
        w;
      if (
        ((o.b = i),
        (o.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((d = e.style[t]),
          (e.style[t] = r),
          (r = hi(e, t) || r),
          d ? (e.style[t] = d) : sr(e, t)),
        (c = [i, r]),
        nl(c),
        (i = c[0]),
        (r = c[1]),
        (m = i.match(xr) || []),
        (w = r.match(xr) || []),
        w.length)
      ) {
        for (; (h = xr.exec(r)); )
          (g = h[0]),
            (y = r.substring(u, h.index)),
            f
              ? (f = (f + 1) % 5)
              : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") &&
                (f = 1),
            g !== (d = m[l++] || "") &&
              ((p = parseFloat(d) || 0),
              (D = d.substr((p + "").length)),
              g.charAt(1) === "=" && (g = Er(p, g) + D),
              (_ = parseFloat(g)),
              (v = g.substr((_ + "").length)),
              (u = xr.lastIndex - v.length),
              v ||
                ((v = v || It.units[t] || D),
                u === r.length && ((r += v), (o.e += v))),
              D !== v && (p = qi(e, t, d, v) || 0),
              (o._pt = {
                _next: o._pt,
                p: y || l === 1 ? y : ",",
                s: p,
                c: _ - p,
                m: (f && f < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = u < r.length ? r.substring(u, r.length) : "";
      } else o.r = t === "display" && r === "none" ? Sl : bl;
      return Mo.test(r) && (o.e = 0), (this._pt = o), o;
    },
    Ll = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Hf = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = Ll[i] || i),
        (t[1] = Ll[r] || r),
        t.join(" ")
      );
    },
    Yf = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          n = t.u,
          a = i._gsap,
          o,
          u,
          l;
        if (n === "all" || n === !0) (r.cssText = ""), (u = 1);
        else
          for (n = n.split(","), l = n.length; --l > -1; )
            (o = n[l]),
              Ei[o] && ((u = 1), (o = o === "transformOrigin" ? At : Ce)),
              sr(i, o);
        u &&
          (sr(i, Ce),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            ps(i, 1),
            (a.uncache = 1),
            xl(r)));
      }
    },
    an = {
      clearProps: function (e, t, i, r, n) {
        if (n.data !== "isFromStart") {
          var a = (e._pt = new Mt(e._pt, t, i, 0, 0, Yf));
          return (a.u = r), (a.pr = -10), (a.tween = n), e._props.push(i), 1;
        }
      },
    },
    fs = [1, 0, 0, 1, 0, 0],
    kl = {},
    Il = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    zl = function (e) {
      var t = hi(e, Ce);
      return Il(t) ? fs : t.substr(7).match(Co).map(Le);
    },
    Oa = function (e, t) {
      var i = e._gsap || Zi(e),
        r = e.style,
        n = zl(e),
        a,
        o,
        u,
        l;
      return i.svg && e.getAttribute("transform")
        ? ((u = e.transform.baseVal.consolidate().matrix),
          (n = [u.a, u.b, u.c, u.d, u.e, u.f]),
          n.join(",") === "1,0,0,1,0,0" ? fs : n)
        : (n === fs &&
            !e.offsetParent &&
            e !== Fr &&
            !i.svg &&
            ((u = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((l = 1), (o = e.nextElementSibling), Fr.appendChild(e)),
            (n = zl(e)),
            u ? (r.display = u) : sr(e, "display"),
            l &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Fr.removeChild(e))),
          t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    La = function (e, t, i, r, n, a) {
      var o = e._gsap,
        u = n || Oa(e, !0),
        l = o.xOrigin || 0,
        c = o.yOrigin || 0,
        h = o.xOffset || 0,
        m = o.yOffset || 0,
        p = u[0],
        f = u[1],
        d = u[2],
        g = u[3],
        _ = u[4],
        y = u[5],
        v = t.split(" "),
        D = parseFloat(v[0]) || 0,
        w = parseFloat(v[1]) || 0,
        E,
        b,
        T,
        x;
      i
        ? u !== fs &&
          (b = p * g - f * d) &&
          ((T = D * (g / b) + w * (-d / b) + (d * y - g * _) / b),
          (x = D * (-f / b) + w * (p / b) - (p * y - f * _) / b),
          (D = T),
          (w = x))
        : ((E = Al(e)),
          (D = E.x + (~v[0].indexOf("%") ? (D / 100) * E.width : D)),
          (w =
            E.y + (~(v[1] || v[0]).indexOf("%") ? (w / 100) * E.height : w))),
        r || (r !== !1 && o.smooth)
          ? ((_ = D - l),
            (y = w - c),
            (o.xOffset = h + (_ * p + y * d) - _),
            (o.yOffset = m + (_ * f + y * g) - y))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = D),
        (o.yOrigin = w),
        (o.smooth = !!r),
        (o.origin = t),
        (o.originIsAbsolute = !!i),
        (e.style[At] = "0px 0px"),
        a &&
          (Ni(a, o, "xOrigin", l, D),
          Ni(a, o, "yOrigin", c, w),
          Ni(a, o, "xOffset", h, o.xOffset),
          Ni(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", D + " " + w);
    },
    ps = function (e, t) {
      var i = e._gsap || new ul(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        n = i.scaleX < 0,
        a = "px",
        o = "deg",
        u = getComputedStyle(e),
        l = hi(e, At) || "0",
        c,
        h,
        m,
        p,
        f,
        d,
        g,
        _,
        y,
        v,
        D,
        w,
        E,
        b,
        T,
        x,
        S,
        L,
        P,
        k,
        F,
        R,
        I,
        M,
        O,
        A,
        C,
        Y,
        Q,
        we,
        se,
        B;
      return (
        (c = h = m = d = g = _ = y = v = D = 0),
        (p = f = 1),
        (i.svg = !!(e.getCTM && Fl(e))),
        u.translate &&
          ((u.translate !== "none" ||
            u.scale !== "none" ||
            u.rotate !== "none") &&
            (r[Ce] =
              (u.translate !== "none"
                ? "translate3d(" +
                  (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
              (u.scale !== "none"
                ? "scale(" + u.scale.split(" ").join(",") + ") "
                : "") +
              (u[Ce] !== "none" ? u[Ce] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (b = Oa(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((O = e.getBBox()),
              (l = i.xOrigin - O.x + "px " + (i.yOrigin - O.y) + "px"),
              (M = ""))
            : (M = !t && e.getAttribute("data-svg-origin")),
          La(e, M || l, !!M || i.originIsAbsolute, i.smooth !== !1, b)),
        (w = i.xOrigin || 0),
        (E = i.yOrigin || 0),
        b !== fs &&
          ((L = b[0]),
          (P = b[1]),
          (k = b[2]),
          (F = b[3]),
          (c = R = b[4]),
          (h = I = b[5]),
          b.length === 6
            ? ((p = Math.sqrt(L * L + P * P)),
              (f = Math.sqrt(F * F + k * k)),
              (d = L || P ? Lr(P, L) * rr : 0),
              (y = k || F ? Lr(k, F) * rr + d : 0),
              y && (f *= Math.abs(Math.cos(y * Or))),
              i.svg && ((c -= w - (w * L + E * k)), (h -= E - (w * P + E * F))))
            : ((B = b[6]),
              (we = b[7]),
              (C = b[8]),
              (Y = b[9]),
              (Q = b[10]),
              (se = b[11]),
              (c = b[12]),
              (h = b[13]),
              (m = b[14]),
              (T = Lr(B, Q)),
              (g = T * rr),
              T &&
                ((x = Math.cos(-T)),
                (S = Math.sin(-T)),
                (M = R * x + C * S),
                (O = I * x + Y * S),
                (A = B * x + Q * S),
                (C = R * -S + C * x),
                (Y = I * -S + Y * x),
                (Q = B * -S + Q * x),
                (se = we * -S + se * x),
                (R = M),
                (I = O),
                (B = A)),
              (T = Lr(-k, Q)),
              (_ = T * rr),
              T &&
                ((x = Math.cos(-T)),
                (S = Math.sin(-T)),
                (M = L * x - C * S),
                (O = P * x - Y * S),
                (A = k * x - Q * S),
                (se = F * S + se * x),
                (L = M),
                (P = O),
                (k = A)),
              (T = Lr(P, L)),
              (d = T * rr),
              T &&
                ((x = Math.cos(T)),
                (S = Math.sin(T)),
                (M = L * x + P * S),
                (O = R * x + I * S),
                (P = P * x - L * S),
                (I = I * x - R * S),
                (L = M),
                (R = O)),
              g &&
                Math.abs(g) + Math.abs(d) > 359.9 &&
                ((g = d = 0), (_ = 180 - _)),
              (p = Le(Math.sqrt(L * L + P * P + k * k))),
              (f = Le(Math.sqrt(I * I + B * B))),
              (T = Lr(R, I)),
              (y = Math.abs(T) > 2e-4 ? T * rr : 0),
              (D = se ? 1 / (se < 0 ? -se : se) : 0)),
          i.svg &&
            ((M = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !Il(hi(e, Ce))),
            M && e.setAttribute("transform", M))),
        Math.abs(y) > 90 &&
          Math.abs(y) < 270 &&
          (n
            ? ((p *= -1),
              (y += d <= 0 ? 180 : -180),
              (d += d <= 0 ? 180 : -180))
            : ((f *= -1), (y += y <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          c -
          ((i.xPercent =
            c &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
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
        (i.rotationY = Le(_) + o),
        (i.skewX = y + o),
        (i.skewY = v + o),
        (i.transformPerspective = D + a),
        (i.zOrigin = parseFloat(l.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[At] = on(l)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = It.force3D),
        (i.renderTransform = i.svg ? Wf : Tl ? Rl : Xf),
        (i.uncache = 0),
        i
      );
    },
    on = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    ka = function (e, t, i) {
      var r = ot(t);
      return Le(parseFloat(t) + parseFloat(qi(e, "x", i + "px", r))) + r;
    },
    Xf = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        Rl(e, t);
    },
    nr = "0deg",
    hs = "0px",
    ar = ") ",
    Rl = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        a = i.x,
        o = i.y,
        u = i.z,
        l = i.rotation,
        c = i.rotationY,
        h = i.rotationX,
        m = i.skewX,
        p = i.skewY,
        f = i.scaleX,
        d = i.scaleY,
        g = i.transformPerspective,
        _ = i.force3D,
        y = i.target,
        v = i.zOrigin,
        D = "",
        w = (_ === "auto" && e && e !== 1) || _ === !0;
      if (v && (h !== nr || c !== nr)) {
        var E = parseFloat(c) * Or,
          b = Math.sin(E),
          T = Math.cos(E),
          x;
        (E = parseFloat(h) * Or),
          (x = Math.cos(E)),
          (a = ka(y, a, b * x * -v)),
          (o = ka(y, o, -Math.sin(E) * -v)),
          (u = ka(y, u, T * x * -v + v));
      }
      g !== hs && (D += "perspective(" + g + ar),
        (r || n) && (D += "translate(" + r + "%, " + n + "%) "),
        (w || a !== hs || o !== hs || u !== hs) &&
          (D +=
            u !== hs || w
              ? "translate3d(" + a + ", " + o + ", " + u + ") "
              : "translate(" + a + ", " + o + ar),
        l !== nr && (D += "rotate(" + l + ar),
        c !== nr && (D += "rotateY(" + c + ar),
        h !== nr && (D += "rotateX(" + h + ar),
        (m !== nr || p !== nr) && (D += "skew(" + m + ", " + p + ar),
        (f !== 1 || d !== 1) && (D += "scale(" + f + ", " + d + ar),
        (y.style[Ce] = D || "translate(0, 0)");
    },
    Wf = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        a = i.x,
        o = i.y,
        u = i.rotation,
        l = i.skewX,
        c = i.skewY,
        h = i.scaleX,
        m = i.scaleY,
        p = i.target,
        f = i.xOrigin,
        d = i.yOrigin,
        g = i.xOffset,
        _ = i.yOffset,
        y = i.forceCSS,
        v = parseFloat(a),
        D = parseFloat(o),
        w,
        E,
        b,
        T,
        x;
      (u = parseFloat(u)),
        (l = parseFloat(l)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (l += c), (u += c)),
        u || l
          ? ((u *= Or),
            (l *= Or),
            (w = Math.cos(u) * h),
            (E = Math.sin(u) * h),
            (b = Math.sin(u - l) * -m),
            (T = Math.cos(u - l) * m),
            l &&
              ((c *= Or),
              (x = Math.tan(l - c)),
              (x = Math.sqrt(1 + x * x)),
              (b *= x),
              (T *= x),
              c &&
                ((x = Math.tan(c)),
                (x = Math.sqrt(1 + x * x)),
                (w *= x),
                (E *= x))),
            (w = Le(w)),
            (E = Le(E)),
            (b = Le(b)),
            (T = Le(T)))
          : ((w = h), (T = m), (E = b = 0)),
        ((v && !~(a + "").indexOf("px")) || (D && !~(o + "").indexOf("px"))) &&
          ((v = qi(p, "x", a, "px")), (D = qi(p, "y", o, "px"))),
        (f || d || g || _) &&
          ((v = Le(v + f - (f * w + d * b) + g)),
          (D = Le(D + d - (f * E + d * T) + _))),
        (r || n) &&
          ((x = p.getBBox()),
          (v = Le(v + (r / 100) * x.width)),
          (D = Le(D + (n / 100) * x.height))),
        (x =
          "matrix(" +
          w +
          "," +
          E +
          "," +
          b +
          "," +
          T +
          "," +
          v +
          "," +
          D +
          ")"),
        p.setAttribute("transform", x),
        y && (p.style[Ce] = x);
    },
    Gf = function (e, t, i, r, n) {
      var a = 360,
        o = Ue(n),
        u = parseFloat(n) * (o && ~n.indexOf("rad") ? rr : 1),
        l = u - r,
        c = r + l + "deg",
        h,
        m;
      return (
        o &&
          ((h = n.split("_")[1]),
          h === "short" &&
            ((l %= a), l !== l % (a / 2) && (l += l < 0 ? a : -a)),
          h === "cw" && l < 0
            ? (l = ((l + a * wl) % a) - ~~(l / a) * a)
            : h === "ccw" && l > 0 && (l = ((l - a * wl) % a) - ~~(l / a) * a)),
        (e._pt = m = new Mt(e._pt, t, i, r, l, Af)),
        (m.e = c),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    Bl = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Uf = function (e, t, i) {
      var r = Bl({}, i._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        a = i.style,
        o,
        u,
        l,
        c,
        h,
        m,
        p,
        f;
      r.svg
        ? ((l = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (a[Ce] = t),
          (o = ps(i, 1)),
          sr(i, Ce),
          i.setAttribute("transform", l))
        : ((l = getComputedStyle(i)[Ce]),
          (a[Ce] = t),
          (o = ps(i, 1)),
          (a[Ce] = l));
      for (u in Ei)
        (l = r[u]),
          (c = o[u]),
          l !== c &&
            n.indexOf(u) < 0 &&
            ((p = ot(l)),
            (f = ot(c)),
            (h = p !== f ? qi(i, u, l, f) : parseFloat(l)),
            (m = parseFloat(c)),
            (e._pt = new Mt(e._pt, o, u, h, m - h, Pa)),
            (e._pt.u = f || 0),
            e._props.push(u));
      Bl(o, r);
    };
  Ct("padding,margin,Width,Radius", function (s, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      n = "Left",
      a = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (
        o
      ) {
        return e < 2 ? s + o : "border" + o + s;
      });
    an[e > 1 ? "border" + s : s] = function (o, u, l, c, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = a.map(function (f) {
            return Ti(o, f, l);
          })),
          (p = m.join(" ")),
          p.split(m[0]).length === 5 ? m[0] : p
        );
      (m = (c + "").split(" ")),
        (p = {}),
        a.forEach(function (f, d) {
          return (p[f] = m[d] = m[d] || m[((d - 1) / 2) | 0]);
        }),
        o.init(u, p, h);
    };
  });
  var $l = {
    name: "css",
    register: Fa,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, n) {
      var a = this._props,
        o = e.style,
        u = i.vars.startAt,
        l,
        c,
        h,
        m,
        p,
        f,
        d,
        g,
        _,
        y,
        v,
        D,
        w,
        E,
        b,
        T;
      Ta || Fa(),
        (this.styles = this.styles || El(e)),
        (T = this.styles.props),
        (this.tween = i);
      for (d in t)
        if (
          d !== "autoRound" &&
          ((c = t[d]), !(Rt[d] && cl(d, t, i, r, e, n)))
        ) {
          if (
            ((p = typeof c),
            (f = an[d]),
            p === "function" && ((c = c.call(i, r, e, n)), (p = typeof c)),
            p === "string" && ~c.indexOf("random(") && (c = as(c)),
            f)
          )
            f(this, e, d, c, i) && (b = 1);
          else if (d.substr(0, 2) === "--")
            (l = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
              (c += ""),
              (Ri.lastIndex = 0),
              Ri.test(l) || ((g = ot(l)), (_ = ot(c))),
              _ ? g !== _ && (l = qi(e, d, l, _) + _) : g && (c += g),
              this.add(o, "setProperty", l, c, r, n, 0, 0, d),
              a.push(d),
              T.push(d, 0, o[d]);
          else if (p !== "undefined") {
            if (
              (u && d in u
                ? ((l =
                    typeof u[d] == "function" ? u[d].call(i, r, e, n) : u[d]),
                  Ue(l) && ~l.indexOf("random(") && (l = as(l)),
                  ot(l + "") ||
                    l === "auto" ||
                    (l += It.units[d] || ot(Ti(e, d)) || ""),
                  (l + "").charAt(1) === "=" && (l = Ti(e, d)))
                : (l = Ti(e, d)),
              (m = parseFloat(l)),
              (y = p === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              y && (c = c.substr(2)),
              (h = parseFloat(c)),
              d in pi &&
                (d === "autoAlpha" &&
                  (m === 1 && Ti(e, "visibility") === "hidden" && h && (m = 0),
                  T.push("visibility", 0, o.visibility),
                  Ni(
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
              (v = d in Ei),
              v)
            ) {
              if (
                (this.styles.save(d),
                D ||
                  ((w = e._gsap),
                  (w.renderTransform && !t.parseTransform) ||
                    ps(e, t.parseTransform),
                  (E = t.smoothOrigin !== !1 && w.smooth),
                  (D = this._pt =
                    new Mt(this._pt, o, Ce, 0, 1, w.renderTransform, w, 0, -1)),
                  (D.dep = 1)),
                d === "scale")
              )
                (this._pt = new Mt(
                  this._pt,
                  w,
                  "scaleY",
                  w.scaleY,
                  (y ? Er(w.scaleY, y + h) : h) - w.scaleY || 0,
                  Pa
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", d),
                  (d += "X");
              else if (d === "transformOrigin") {
                T.push(At, 0, o[At]),
                  (c = Hf(c)),
                  w.svg
                    ? La(e, c, 0, E, 0, this)
                    : ((_ = parseFloat(c.split(" ")[2]) || 0),
                      _ !== w.zOrigin && Ni(this, w, "zOrigin", w.zOrigin, _),
                      Ni(this, o, d, on(l), on(c)));
                continue;
              } else if (d === "svgOrigin") {
                La(e, c, 1, E, 0, this);
                continue;
              } else if (d in kl) {
                Gf(this, w, d, m, y ? Er(m, y + c) : c);
                continue;
              } else if (d === "smoothOrigin") {
                Ni(this, w, "smooth", w.smooth, c);
                continue;
              } else if (d === "force3D") {
                w[d] = c;
                continue;
              } else if (d === "transform") {
                Uf(this, c, e);
                continue;
              }
            } else d in o || (d = kr(d) || d);
            if (
              v ||
              ((h || h === 0) && (m || m === 0) && !Pf.test(c) && d in o)
            )
              (g = (l + "").substr((m + "").length)),
                h || (h = 0),
                (_ = ot(c) || (d in It.units ? It.units[d] : g)),
                g !== _ && (m = qi(e, d, l, _)),
                (this._pt = new Mt(
                  this._pt,
                  v ? w : o,
                  d,
                  m,
                  (y ? Er(m, y + h) : h) - m,
                  !v && (_ === "px" || d === "zIndex") && t.autoRound !== !1
                    ? Of
                    : Pa
                )),
                (this._pt.u = _ || 0),
                g !== _ && _ !== "%" && ((this._pt.b = l), (this._pt.r = Ff));
            else if (d in o) Vf.call(this, e, d, l, y ? y + c : c);
            else if (d in e) this.add(e, d, l || e[d], y ? y + c : c, r, n);
            else if (d !== "parseTransform") {
              ra(d, c);
              continue;
            }
            v ||
              (d in o
                ? T.push(d, 0, o[d])
                : typeof e[d] == "function"
                ? T.push(d, 2, e[d]())
                : T.push(d, 1, l || e[d])),
              a.push(d);
          }
        }
      b && gl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Ca())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Ti,
    aliases: pi,
    getSetter: function (e, t, i) {
      var r = pi[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in Ei && t !== At && (e._gsap.x || Ti(e, "x"))
          ? i && Dl === i
            ? t === "scale"
              ? zf
              : If
            : (Dl = i || {}) && (t === "scale" ? Rf : Bf)
          : e.style && !Zn(e.style[t])
          ? Lf
          : ~t.indexOf("-")
          ? kf
          : wa(e, t)
      );
    },
    core: { _removeProperty: sr, _getMatrix: Oa },
  };
  (Pt.utils.checkPrefix = kr),
    (Pt.core.getStyleSaver = El),
    (function (s, e, t, i) {
      var r = Ct(s + "," + e + "," + t, function (n) {
        Ei[n] = 1;
      });
      Ct(e, function (n) {
        (It.units[n] = "deg"), (kl[n] = 1);
      }),
        (pi[r[13]] = s + "," + e),
        Ct(i, function (n) {
          var a = n.split(":");
          pi[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Ct(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        It.units[s] = "px";
      }
    ),
    Pt.registerPlugin($l);
  var q = Pt.registerPlugin($l) || Pt;
  q.core.Tween;
  function jf(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function Kf(s, e, t) {
    return e && jf(s.prototype, e), s;
  }
  /*!
   * Observer 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var tt,
    ln,
    qt,
    Vi,
    Hi,
    Ir,
    Nl,
    or,
    ms,
    ql,
    Ci,
    ii,
    Vl,
    Hl = function () {
      return (
        tt ||
        (typeof window != "undefined" &&
          (tt = window.gsap) &&
          tt.registerPlugin &&
          tt)
      );
    },
    Yl = 1,
    zr = [],
    ie = [],
    mi = [],
    gs = Date.now,
    Ia = function (e, t) {
      return t;
    },
    Zf = function () {
      var e = ms.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, ie),
        r.push.apply(r, mi),
        (ie = i),
        (mi = r),
        (Ia = function (a, o) {
          return t[a](o);
        });
    },
    Yi = function (e, t) {
      return ~mi.indexOf(e) && mi[mi.indexOf(e) + 1][t];
    },
    vs = function (e) {
      return !!~ql.indexOf(e);
    },
    _t = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!n });
    },
    Dt = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    un = "scrollLeft",
    cn = "scrollTop",
    za = function () {
      return (Ci && Ci.isPressed) || ie.cache++;
    },
    dn = function (e, t) {
      var i = function r(n) {
        if (n || n === 0) {
          Yl && (qt.history.scrollRestoration = "manual");
          var a = Ci && Ci.isPressed;
          (n = r.v = Math.round(n) || (Ci && Ci.iOS ? 1 : 0)),
            e(n),
            (r.cacheID = ie.cache),
            a && Ia("ss", n);
        } else
          (t || ie.cache !== r.cacheID || Ia("ref")) &&
            ((r.cacheID = ie.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    wt = {
      s: un,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: dn(function (s) {
        return arguments.length
          ? qt.scrollTo(s, Ye.sc())
          : qt.pageXOffset || Vi[un] || Hi[un] || Ir[un] || 0;
      }),
    },
    Ye = {
      s: cn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: wt,
      sc: dn(function (s) {
        return arguments.length
          ? qt.scrollTo(wt.sc(), s)
          : qt.pageYOffset || Vi[cn] || Hi[cn] || Ir[cn] || 0;
      }),
    },
    Ft = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || tt.utils.toArray)(e)[0] ||
        (typeof e == "string" && tt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Xi = function (e, t) {
      var i = t.s,
        r = t.sc;
      vs(e) && (e = Vi.scrollingElement || Hi);
      var n = ie.indexOf(e),
        a = r === Ye.sc ? 1 : 2;
      !~n && (n = ie.push(e) - 1), ie[n + a] || _t(e, "scroll", za);
      var o = ie[n + a],
        u =
          o ||
          (ie[n + a] =
            dn(Yi(e, i), !0) ||
            (vs(e)
              ? r
              : dn(function (l) {
                  return arguments.length ? (e[i] = l) : e[i];
                })));
      return (
        (u.target = e),
        o || (u.smooth = tt.getProperty(e, "scrollBehavior") === "smooth"),
        u
      );
    },
    Ra = function (e, t, i) {
      var r = e,
        n = e,
        a = gs(),
        o = a,
        u = t || 50,
        l = Math.max(500, u * 3),
        c = function (f, d) {
          var g = gs();
          d || g - a > u
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
            _ = gs();
          return (
            (f || f === 0) && f !== r && c(f),
            a === o || _ - o > l
              ? 0
              : ((r + (i ? g : -g)) / ((i ? _ : a) - d)) * 1e3
          );
        };
      return { update: c, reset: h, getVelocity: m };
    },
    ys = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    Xl = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    Wl = function () {
      (ms = tt.core.globals().ScrollTrigger), ms && ms.core && Zf();
    },
    Gl = function (e) {
      return (
        (tt = e || Hl()),
        !ln &&
          tt &&
          typeof document != "undefined" &&
          document.body &&
          ((qt = window),
          (Vi = document),
          (Hi = Vi.documentElement),
          (Ir = Vi.body),
          (ql = [qt, Vi, Hi, Ir]),
          tt.utils.clamp,
          (Vl = tt.core.context || function () {}),
          (or = "onpointerenter" in Ir ? "pointer" : "mouse"),
          (Nl = ke.isTouch =
            qt.matchMedia &&
            qt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in qt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (ii = ke.eventTypes =
            (
              "ontouchstart" in Hi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Hi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Yl = 0);
          }, 500),
          Wl(),
          (ln = 1)),
        ln
      );
    };
  (wt.op = Ye), (ie.cache = 0);
  var ke = (function () {
    function s(t) {
      this.init(t);
    }
    var e = s.prototype;
    return (
      (e.init = function (i) {
        ln || Gl(tt) || console.warn("Please gsap.registerPlugin(Observer)"),
          ms || Wl();
        var r = i.tolerance,
          n = i.dragMinimum,
          a = i.type,
          o = i.target,
          u = i.lineHeight,
          l = i.debounce,
          c = i.preventDefault,
          h = i.onStop,
          m = i.onStopDelay,
          p = i.ignore,
          f = i.wheelSpeed,
          d = i.event,
          g = i.onDragStart,
          _ = i.onDragEnd,
          y = i.onDrag,
          v = i.onPress,
          D = i.onRelease,
          w = i.onRight,
          E = i.onLeft,
          b = i.onUp,
          T = i.onDown,
          x = i.onChangeX,
          S = i.onChangeY,
          L = i.onChange,
          P = i.onToggleX,
          k = i.onToggleY,
          F = i.onHover,
          R = i.onHoverEnd,
          I = i.onMove,
          M = i.ignoreCheck,
          O = i.isNormalizer,
          A = i.onGestureStart,
          C = i.onGestureEnd,
          Y = i.onWheel,
          Q = i.onEnable,
          we = i.onDisable,
          se = i.onClick,
          B = i.scrollSpeed,
          $ = i.capture,
          N = i.allowClicks,
          U = i.lockAxis,
          ce = i.onLockAxis;
        (this.target = o = Ft(o) || Hi),
          (this.vars = i),
          p && (p = tt.utils.toArray(p)),
          (r = r || 1e-9),
          (n = n || 0),
          (f = f || 1),
          (B = B || 1),
          (a = a || "wheel,touch,pointer"),
          (l = l !== !1),
          u || (u = parseFloat(qt.getComputedStyle(Ir).lineHeight) || 22);
        var it,
          Se,
          xe,
          J,
          ne,
          _e,
          We,
          z = this,
          qe = 0,
          ft = 0,
          Xt = i.passive || (!c && i.passive !== !1),
          De = Xi(o, wt),
          Wt = Xi(o, Ye),
          ei = De(),
          si = Wt(),
          Fe =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            ii[0] === "pointerdown",
          ti = vs(o),
          pe = o.ownerDocument || Vi,
          Ot = [0, 0, 0],
          Ze = [0, 0, 0],
          Ai = 0,
          zs = function () {
            return (Ai = gs());
          },
          Ve = function (j, de) {
            return (
              ((z.event = j) && p && ~p.indexOf(j.target)) ||
              (de && Fe && j.pointerType !== "touch") ||
              (M && M(j, de))
            );
          },
          kn = function () {
            z._vx.reset(), z._vy.reset(), Se.pause(), h && h(z);
          },
          Fi = function () {
            var j = (z.deltaX = Xl(Ot)),
              de = (z.deltaY = Xl(Ze)),
              V = Math.abs(j) >= r,
              K = Math.abs(de) >= r;
            L && (V || K) && L(z, j, de, Ot, Ze),
              V &&
                (w && z.deltaX > 0 && w(z),
                E && z.deltaX < 0 && E(z),
                x && x(z),
                P && z.deltaX < 0 != qe < 0 && P(z),
                (qe = z.deltaX),
                (Ot[0] = Ot[1] = Ot[2] = 0)),
              K &&
                (T && z.deltaY > 0 && T(z),
                b && z.deltaY < 0 && b(z),
                S && S(z),
                k && z.deltaY < 0 != ft < 0 && k(z),
                (ft = z.deltaY),
                (Ze[0] = Ze[1] = Ze[2] = 0)),
              (J || xe) &&
                (I && I(z),
                xe && (g && xe === 1 && g(z), y && y(z), (xe = 0)),
                (J = !1)),
              _e && !(_e = !1) && ce && ce(z),
              ne && (Y(z), (ne = !1)),
              (it = 0);
          },
          Xr = function (j, de, V) {
            (Ot[V] += j),
              (Ze[V] += de),
              z._vx.update(j),
              z._vy.update(de),
              l ? it || (it = requestAnimationFrame(Fi)) : Fi();
          },
          Wr = function (j, de) {
            U &&
              !We &&
              ((z.axis = We = Math.abs(j) > Math.abs(de) ? "x" : "y"),
              (_e = !0)),
              We !== "y" && ((Ot[2] += j), z._vx.update(j, !0)),
              We !== "x" && ((Ze[2] += de), z._vy.update(de, !0)),
              l ? it || (it = requestAnimationFrame(Fi)) : Fi();
          },
          Ui = function (j) {
            if (!Ve(j, 1)) {
              j = ys(j, c);
              var de = j.clientX,
                V = j.clientY,
                K = de - z.x,
                G = V - z.y,
                Z = z.isDragging;
              (z.x = de),
                (z.y = V),
                (Z ||
                  ((K || G) &&
                    (Math.abs(z.startX - de) >= n ||
                      Math.abs(z.startY - V) >= n))) &&
                  ((xe = Z ? 2 : 1), Z || (z.isDragging = !0), Wr(K, G));
            }
          },
          vr = (z.onPress = function (ee) {
            Ve(ee, 1) ||
              (ee && ee.button) ||
              ((z.axis = We = null),
              Se.pause(),
              (z.isPressed = !0),
              (ee = ys(ee)),
              (qe = ft = 0),
              (z.startX = z.x = ee.clientX),
              (z.startY = z.y = ee.clientY),
              z._vx.reset(),
              z._vy.reset(),
              _t(O ? o : pe, ii[1], Ui, Xt, !0),
              (z.deltaX = z.deltaY = 0),
              v && v(z));
          }),
          oe = (z.onRelease = function (ee) {
            if (!Ve(ee, 1)) {
              Dt(O ? o : pe, ii[1], Ui, !0);
              var j = !isNaN(z.y - z.startY),
                de = z.isDragging,
                V =
                  de &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                K = ys(ee);
              !V &&
                j &&
                (z._vx.reset(),
                z._vy.reset(),
                c &&
                  N &&
                  tt.delayedCall(0.08, function () {
                    if (gs() - Ai > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (pe.createEvent) {
                        var G = pe.createEvent("MouseEvents");
                        G.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          qt,
                          1,
                          K.screenX,
                          K.screenY,
                          K.clientX,
                          K.clientY,
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
                (z.isDragging = z.isGesturing = z.isPressed = !1),
                h && de && !O && Se.restart(!0),
                xe && Fi(),
                _ && de && _(z),
                D && D(z, V);
            }
          }),
          yr = function (j) {
            return (
              j.touches &&
              j.touches.length > 1 &&
              (z.isGesturing = !0) &&
              A(j, z.isDragging)
            );
          },
          ni = function () {
            return (z.isGesturing = !1) || C(z);
          },
          ai = function (j) {
            if (!Ve(j)) {
              var de = De(),
                V = Wt();
              Xr((de - ei) * B, (V - si) * B, 1),
                (ei = de),
                (si = V),
                h && Se.restart(!0);
            }
          },
          oi = function (j) {
            if (!Ve(j)) {
              (j = ys(j, c)), Y && (ne = !0);
              var de =
                (j.deltaMode === 1
                  ? u
                  : j.deltaMode === 2
                  ? qt.innerHeight
                  : 1) * f;
              Xr(j.deltaX * de, j.deltaY * de, 0), h && !O && Se.restart(!0);
            }
          },
          _r = function (j) {
            if (!Ve(j)) {
              var de = j.clientX,
                V = j.clientY,
                K = de - z.x,
                G = V - z.y;
              (z.x = de),
                (z.y = V),
                (J = !0),
                h && Se.restart(!0),
                (K || G) && Wr(K, G);
            }
          },
          Gr = function (j) {
            (z.event = j), F(z);
          },
          Oi = function (j) {
            (z.event = j), R(z);
          },
          Rs = function (j) {
            return Ve(j) || (ys(j, c) && se(z));
          };
        (Se = z._dc = tt.delayedCall(m || 0.25, kn).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = Ra(0, 50, !0)),
          (z._vy = Ra(0, 50, !0)),
          (z.scrollX = De),
          (z.scrollY = Wt),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          Vl(this),
          (z.enable = function (ee) {
            return (
              z.isEnabled ||
                (_t(ti ? pe : o, "scroll", za),
                a.indexOf("scroll") >= 0 &&
                  _t(ti ? pe : o, "scroll", ai, Xt, $),
                a.indexOf("wheel") >= 0 && _t(o, "wheel", oi, Xt, $),
                ((a.indexOf("touch") >= 0 && Nl) ||
                  a.indexOf("pointer") >= 0) &&
                  (_t(o, ii[0], vr, Xt, $),
                  _t(pe, ii[2], oe),
                  _t(pe, ii[3], oe),
                  N && _t(o, "click", zs, !0, !0),
                  se && _t(o, "click", Rs),
                  A && _t(pe, "gesturestart", yr),
                  C && _t(pe, "gestureend", ni),
                  F && _t(o, or + "enter", Gr),
                  R && _t(o, or + "leave", Oi),
                  I && _t(o, or + "move", _r)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = J = xe = !1),
                z._vx.reset(),
                z._vy.reset(),
                (ei = De()),
                (si = Wt()),
                ee && ee.type && vr(ee),
                Q && Q(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (zr.filter(function (ee) {
                return ee !== z && vs(ee.target);
              }).length || Dt(ti ? pe : o, "scroll", za),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), Dt(O ? o : pe, ii[1], Ui, !0)),
              Dt(ti ? pe : o, "scroll", ai, $),
              Dt(o, "wheel", oi, $),
              Dt(o, ii[0], vr, $),
              Dt(pe, ii[2], oe),
              Dt(pe, ii[3], oe),
              Dt(o, "click", zs, !0),
              Dt(o, "click", Rs),
              Dt(pe, "gesturestart", yr),
              Dt(pe, "gestureend", ni),
              Dt(o, or + "enter", Gr),
              Dt(o, or + "leave", Oi),
              Dt(o, or + "move", _r),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              we && we(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var ee = zr.indexOf(z);
              ee >= 0 && zr.splice(ee, 1), Ci === z && (Ci = 0);
            }),
          zr.push(z),
          O && vs(o) && (Ci = z),
          z.enable(d);
      }),
      Kf(s, [
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
  (ke.version = "3.12.7"),
    (ke.create = function (s) {
      return new ke(s);
    }),
    (ke.register = Gl),
    (ke.getAll = function () {
      return zr.slice();
    }),
    (ke.getById = function (s) {
      return zr.filter(function (e) {
        return e.vars.id === s;
      })[0];
    }),
    Hl() && tt.registerPlugin(ke);
  /*!
   * ScrollTrigger 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var H,
    Rr,
    re,
    ye,
    Vt,
    fe,
    Ba,
    fn,
    _s,
    Ds,
    ws,
    pn,
    lt,
    hn,
    $a,
    bt,
    Ul,
    jl,
    Br,
    Kl,
    Na,
    Zl,
    St,
    qa,
    Ql,
    Jl,
    Wi,
    Va,
    Ha,
    $r,
    Ya,
    mn,
    Xa,
    Wa,
    gn = 1,
    ut = Date.now,
    Ga = ut(),
    Zt = 0,
    bs = 0,
    eu = function (e, t, i) {
      var r = Ht(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    tu = function (e, t) {
      return t && (!Ht(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Qf = function s() {
      return bs && requestAnimationFrame(s);
    },
    iu = function () {
      return (hn = 1);
    },
    ru = function () {
      return (hn = 0);
    },
    gi = function (e) {
      return e;
    },
    Ss = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    su = function () {
      return typeof window != "undefined";
    },
    nu = function () {
      return H || (su() && (H = window.gsap) && H.registerPlugin && H);
    },
    lr = function (e) {
      return !!~Ba.indexOf(e);
    },
    au = function (e) {
      return (
        (e === "Height" ? Ya : re["inner" + e]) ||
        Vt["client" + e] ||
        fe["client" + e]
      );
    },
    ou = function (e) {
      return (
        Yi(e, "getBoundingClientRect") ||
        (lr(e)
          ? function () {
              return (Pn.width = re.innerWidth), (Pn.height = Ya), Pn;
            }
          : function () {
              return Mi(e);
            })
      );
    },
    Jf = function (e, t, i) {
      var r = i.d,
        n = i.d2,
        a = i.a;
      return (a = Yi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? au(n) : e["client" + n]) || 0;
          };
    },
    ep = function (e, t) {
      return !t || ~mi.indexOf(e)
        ? ou(e)
        : function () {
            return Pn;
          };
    },
    vi = function (e, t) {
      var i = t.s,
        r = t.d2,
        n = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Yi(e, i))
          ? a() - ou(e)()[n]
          : lr(e)
          ? (Vt[i] || fe[i]) - au(r)
          : e[i] - e["offset" + r]
      );
    },
    vn = function (e, t) {
      for (var i = 0; i < Br.length; i += 3)
        (!t || ~t.indexOf(Br[i + 1])) && e(Br[i], Br[i + 1], Br[i + 2]);
    },
    Ht = function (e) {
      return typeof e == "string";
    },
    ct = function (e) {
      return typeof e == "function";
    },
    xs = function (e) {
      return typeof e == "number";
    },
    ur = function (e) {
      return typeof e == "object";
    },
    Es = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    Ua = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    Nr = Math.abs,
    lu = "left",
    uu = "top",
    ja = "right",
    Ka = "bottom",
    cr = "width",
    dr = "height",
    Ts = "Right",
    Cs = "Left",
    Ms = "Top",
    Ps = "Bottom",
    Ne = "padding",
    Qt = "margin",
    qr = "Width",
    Za = "Height",
    Xe = "px",
    Jt = function (e) {
      return re.getComputedStyle(e);
    },
    tp = function (e) {
      var t = Jt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    cu = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Mi = function (e, t) {
      var i =
          t &&
          Jt(e)[$a] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
    },
    yn = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    du = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        n;
      for (n in i) t.push(i[n] / r);
      return t;
    },
    ip = function (e) {
      return function (t) {
        return H.utils.snap(du(e), t);
      };
    },
    Qa = function (e) {
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
    },
    rp = function (e) {
      return function (t, i) {
        return Qa(du(e))(t, i.direction);
      };
    },
    _n = function (e, t, i, r) {
      return i.split(",").forEach(function (n) {
        return e(t, n, r);
      });
    },
    je = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: !r, capture: !!n });
    },
    Ke = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Dn = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    fu = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    wn = { toggleActions: "play", anticipatePin: 0 },
    bn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Sn = function (e, t) {
      if (Ht(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in bn
              ? bn[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    xn = function (e, t, i, r, n, a, o, u) {
      var l = n.startColor,
        c = n.endColor,
        h = n.fontSize,
        m = n.indent,
        p = n.fontWeight,
        f = ye.createElement("div"),
        d = lr(i) || Yi(i, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        _ = d ? fe : i,
        y = e.indexOf("start") !== -1,
        v = y ? l : c,
        D =
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
        (D += "position:" + ((g || u) && d ? "fixed;" : "absolute;")),
        (g || u || !d) &&
          (D += (r === Ye ? ja : Ka) + ":" + (a + parseFloat(m)) + "px;"),
        o &&
          (D +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (f._isStart = y),
        f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (f.style.cssText = D),
        (f.innerText = t || t === 0 ? e + "-" + t : e),
        _.children[0] ? _.insertBefore(f, _.children[0]) : _.appendChild(f),
        (f._offset = f["offset" + r.op.d2]),
        En(f, 0, r, y),
        f
      );
    },
    En = function (e, t, i, r) {
      var n = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + a + qr] = 1),
        (n["border" + o + qr] = 0),
        (n[i.p] = t + "px"),
        H.set(e, n);
    },
    te = [],
    Ja = {},
    As,
    pu = function () {
      return ut() - Zt > 34 && (As || (As = requestAnimationFrame(Pi)));
    },
    Vr = function () {
      (!St || !St.isPressed || St.startX > fe.clientWidth) &&
        (ie.cache++,
        St ? As || (As = requestAnimationFrame(Pi)) : Pi(),
        Zt || pr("scrollStart"),
        (Zt = ut()));
    },
    eo = function () {
      (Jl = re.innerWidth), (Ql = re.innerHeight);
    },
    Fs = function (e) {
      ie.cache++,
        (e === !0 ||
          (!lt &&
            !Zl &&
            !ye.fullscreenElement &&
            !ye.webkitFullscreenElement &&
            (!qa ||
              Jl !== re.innerWidth ||
              Math.abs(re.innerHeight - Ql) > re.innerHeight * 0.25))) &&
          fn.restart(!0);
    },
    fr = {},
    sp = [],
    hu = function s() {
      return Ke(X, "scrollEnd", s) || mr(!0);
    },
    pr = function (e) {
      return (
        (fr[e] &&
          fr[e].map(function (t) {
            return t();
          })) ||
        sp
      );
    },
    Yt = [],
    mu = function (e) {
      for (var t = 0; t < Yt.length; t += 5)
        (!e || (Yt[t + 4] && Yt[t + 4].query === e)) &&
          ((Yt[t].style.cssText = Yt[t + 1]),
          Yt[t].getBBox && Yt[t].setAttribute("transform", Yt[t + 2] || ""),
          (Yt[t + 3].uncache = 1));
    },
    to = function (e, t) {
      var i;
      for (bt = 0; bt < te.length; bt++)
        (i = te[bt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (mn = !0), t && mu(t), t || pr("revert");
    },
    gu = function (e, t) {
      ie.cache++,
        (t || !xt) &&
          ie.forEach(function (i) {
            return ct(i) && i.cacheID++ && (i.rec = 0);
          }),
        Ht(e) && (re.history.scrollRestoration = Ha = e);
    },
    xt,
    hr = 0,
    vu,
    np = function () {
      if (vu !== hr) {
        var e = (vu = hr);
        requestAnimationFrame(function () {
          return e === hr && mr(!0);
        });
      }
    },
    yu = function () {
      fe.appendChild($r),
        (Ya = (!St && $r.offsetHeight) || re.innerHeight),
        fe.removeChild($r);
    },
    _u = function (e) {
      return _s(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    mr = function (e, t) {
      if (
        ((Vt = ye.documentElement),
        (fe = ye.body),
        (Ba = [re, ye, Vt, fe]),
        Zt && !e && !mn)
      ) {
        je(X, "scrollEnd", hu);
        return;
      }
      yu(),
        (xt = X.isRefreshing = !0),
        ie.forEach(function (r) {
          return ct(r) && ++r.cacheID && (r.rec = r());
        });
      var i = pr("refreshInit");
      Kl && X.sort(),
        t || to(),
        ie.forEach(function (r) {
          ct(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        te.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (mn = !1),
        te.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - a), r.refresh();
          }
        }),
        (Xa = 1),
        _u(!0),
        te.forEach(function (r) {
          var n = vi(r.scroller, r._dir),
            a = r.vars.end === "max" || (r._endClamp && r.end > n),
            o = r._startClamp && r.start >= n;
          (a || o) &&
            r.setPositions(
              o ? n - 1 : r.start,
              a ? Math.max(o ? n : r.start + 1, n) : r.end,
              !0
            );
        }),
        _u(!1),
        (Xa = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        ie.forEach(function (r) {
          ct(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        gu(Ha, 1),
        fn.pause(),
        hr++,
        (xt = 2),
        Pi(2),
        te.forEach(function (r) {
          return ct(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (xt = X.isRefreshing = !1),
        pr("refresh");
    },
    io = 0,
    Tn = 1,
    Os,
    Pi = function (e) {
      if (e === 2 || (!xt && !mn)) {
        (X.isUpdating = !0), Os && Os.update(0);
        var t = te.length,
          i = ut(),
          r = i - Ga >= 50,
          n = t && te[0].scroll();
        if (
          ((Tn = io > n ? -1 : 1),
          xt || (io = n),
          r &&
            (Zt && !hn && i - Zt > 200 && ((Zt = 0), pr("scrollEnd")),
            (ws = Ga),
            (Ga = i)),
          Tn < 0)
        ) {
          for (bt = t; bt-- > 0; ) te[bt] && te[bt].update(0, r);
          Tn = 1;
        } else for (bt = 0; bt < t; bt++) te[bt] && te[bt].update(0, r);
        X.isUpdating = !1;
      }
      As = 0;
    },
    ro = [
      lu,
      uu,
      Ka,
      ja,
      Qt + Ps,
      Qt + Ts,
      Qt + Ms,
      Qt + Cs,
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
    Cn = ro.concat([
      cr,
      dr,
      "boxSizing",
      "max" + qr,
      "max" + Za,
      "position",
      Qt,
      Ne,
      Ne + Ms,
      Ne + Ts,
      Ne + Ps,
      Ne + Cs,
    ]),
    ap = function (e, t, i) {
      Hr(i);
      var r = e._gsap;
      if (r.spacerIsNative) Hr(r.spacerState);
      else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t), n.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    so = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var n = ro.length, a = t.style, o = e.style, u; n--; )
          (u = ro[n]), (a[u] = i[u]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[Ka] = o[ja] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[cr] = yn(e, wt) + Xe),
          (a[dr] = yn(e, Ye) + Xe),
          (a[Ne] = o[Qt] = o[uu] = o[lu] = "0"),
          Hr(r),
          (o[cr] = o["max" + qr] = i[cr]),
          (o[dr] = o["max" + Za] = i[dr]),
          (o[Ne] = i[Ne]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    op = /([A-Z])/g,
    Hr = function (e) {
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
              : t[n] && t.removeProperty(n.replace(op, "-$1").toLowerCase());
      }
    },
    Mn = function (e) {
      for (var t = Cn.length, i = e.style, r = [], n = 0; n < t; n++)
        r.push(Cn[n], i[Cn[n]]);
      return (r.t = e), r;
    },
    lp = function (e, t, i) {
      for (var r = [], n = e.length, a = i ? 8 : 0, o; a < n; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    Pn = { left: 0, top: 0 },
    Du = function (e, t, i, r, n, a, o, u, l, c, h, m, p, f) {
      ct(e) && (e = e(u)),
        Ht(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? Sn("0" + e.substr(3), i) : 0));
      var d = p ? p.time() : 0,
        g,
        _,
        y;
      if ((p && p.seek(0), isNaN(e) || (e = +e), xs(e)))
        p &&
          (e = H.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            m,
            e
          )),
          o && En(o, i, r, !0);
      else {
        ct(t) && (t = t(u));
        var v = (e || "0").split(" "),
          D,
          w,
          E,
          b;
        (y = Ft(t, u) || fe),
          (D = Mi(y) || {}),
          (!D || (!D.left && !D.top)) &&
            Jt(y).display === "none" &&
            ((b = y.style.display),
            (y.style.display = "block"),
            (D = Mi(y)),
            b ? (y.style.display = b) : y.style.removeProperty("display")),
          (w = Sn(v[0], D[r.d])),
          (E = Sn(v[1] || "0", i)),
          (e = D[r.p] - l[r.p] - c + w + n - E),
          o && En(o, E, r, i - E < 20 || (o._isStart && E > 20)),
          (i -= i - E);
      }
      if ((f && ((u[f] = e || -0.001), e < 0 && (e = 0)), a)) {
        var T = e + i,
          x = a._isStart;
        (g = "scroll" + r.d2),
          En(
            a,
            T,
            r,
            (x && T > 20) ||
              (!x && (h ? Math.max(fe[g], Vt[g]) : a.parentNode[g]) <= T + 1)
          ),
          h &&
            ((l = Mi(o)),
            h && (a.style[r.op.p] = l[r.op.p] - r.op.m - a._offset + Xe));
      }
      return (
        p &&
          y &&
          ((g = Mi(y)),
          p.seek(m),
          (_ = Mi(y)),
          (p._caScrollDist = g[r.p] - _[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(d),
        p ? e : Math.round(e)
      );
    },
    up = /(webkit|moz|length|cssText|inset)/i,
    wu = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var n = e.style,
          a,
          o;
        if (t === fe) {
          (e._stOrig = n.cssText), (o = Jt(e));
          for (a in o)
            !+a &&
              !up.test(a) &&
              o[a] &&
              typeof n[a] == "string" &&
              a !== "0" &&
              (n[a] = o[a]);
          (n.top = i), (n.left = r);
        } else n.cssText = e._stOrig;
        (H.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    bu = function (e, t, i) {
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
    An = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), H.set(e, r);
    },
    Su = function (e, t) {
      var i = Xi(e, t),
        r = "_scroll" + t.p2,
        n = function a(o, u, l, c, h) {
          var m = a.tween,
            p = u.onComplete,
            f = {};
          l = l || i();
          var d = bu(i, l, function () {
            m.kill(), (a.tween = 0);
          });
          return (
            (h = (c && h) || 0),
            (c = c || o - l),
            m && m.kill(),
            (u[r] = o),
            (u.inherit = !1),
            (u.modifiers = f),
            (f[r] = function () {
              return d(l + c * m.ratio + h * m.ratio * m.ratio);
            }),
            (u.onUpdate = function () {
              ie.cache++, a.tween && Pi();
            }),
            (u.onComplete = function () {
              (a.tween = 0), p && p.call(m);
            }),
            (m = a.tween = H.to(e, u)),
            m
          );
        };
      return (
        (e[r] = i),
        (i.wheelHandler = function () {
          return n.tween && n.tween.kill() && (n.tween = 0);
        }),
        je(e, "wheel", i.wheelHandler),
        X.isTouch && je(e, "touchmove", i.wheelHandler),
        n
      );
    },
    X = (function () {
      function s(t, i) {
        Rr ||
          s.register(H) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Va(this),
          this.init(t, i);
      }
      var e = s.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !bs)
          ) {
            this.update = this.refresh = this.kill = gi;
            return;
          }
          i = cu(Ht(i) || xs(i) || i.nodeType ? { trigger: i } : i, wn);
          var n = i,
            a = n.onUpdate,
            o = n.toggleClass,
            u = n.id,
            l = n.onToggle,
            c = n.onRefresh,
            h = n.scrub,
            m = n.trigger,
            p = n.pin,
            f = n.pinSpacing,
            d = n.invalidateOnRefresh,
            g = n.anticipatePin,
            _ = n.onScrubComplete,
            y = n.onSnapComplete,
            v = n.once,
            D = n.snap,
            w = n.pinReparent,
            E = n.pinSpacer,
            b = n.containerAnimation,
            T = n.fastScrollEnd,
            x = n.preventOverlaps,
            S =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? wt
                : Ye,
            L = !h && h !== 0,
            P = Ft(i.scroller || re),
            k = H.core.getCache(P),
            F = lr(P),
            R =
              ("pinType" in i
                ? i.pinType
                : Yi(P, "pinType") || (F && "fixed")) === "fixed",
            I = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            M = L && i.toggleActions.split(" "),
            O = "markers" in i ? i.markers : wn.markers,
            A = F ? 0 : parseFloat(Jt(P)["border" + S.p2 + qr]) || 0,
            C = this,
            Y =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(C);
              },
            Q = Jf(P, F, S),
            we = ep(P, F),
            se = 0,
            B = 0,
            $ = 0,
            N = Xi(P, S),
            U,
            ce,
            it,
            Se,
            xe,
            J,
            ne,
            _e,
            We,
            z,
            qe,
            ft,
            Xt,
            De,
            Wt,
            ei,
            si,
            Fe,
            ti,
            pe,
            Ot,
            Ze,
            Ai,
            zs,
            Ve,
            kn,
            Fi,
            Xr,
            Wr,
            Ui,
            vr,
            oe,
            yr,
            ni,
            ai,
            oi,
            _r,
            Gr,
            Oi;
          if (
            ((C._startClamp = C._endClamp = !1),
            (C._dir = S),
            (g *= 45),
            (C.scroller = P),
            (C.scroll = b ? b.time.bind(b) : N),
            (Se = N()),
            (C.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((Kl = 1), i.refreshPriority === -9999 && (Os = C)),
            (k.tweenScroll = k.tweenScroll || {
              top: Su(P, Ye),
              left: Su(P, wt),
            }),
            (C.tweenTo = U = k.tweenScroll[S.p]),
            (C.scrubDuration = function (V) {
              (yr = xs(V) && V),
                yr
                  ? oe
                    ? oe.duration(V)
                    : (oe = H.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: yr,
                        paused: !0,
                        onComplete: function () {
                          return _ && _(C);
                        },
                      }))
                  : (oe && oe.progress(1).kill(), (oe = 0));
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
              u || (u = r.vars.id)),
            D &&
              ((!ur(D) || D.push) && (D = { snapTo: D }),
              "scrollBehavior" in fe.style &&
                H.set(F ? [fe, Vt] : P, { scrollBehavior: "auto" }),
              ie.forEach(function (V) {
                return (
                  ct(V) &&
                  V.target === (F ? ye.scrollingElement || Vt : P) &&
                  (V.smooth = !1)
                );
              }),
              (it = ct(D.snapTo)
                ? D.snapTo
                : D.snapTo === "labels"
                ? ip(r)
                : D.snapTo === "labelsDirectional"
                ? rp(r)
                : D.directional !== !1
                ? function (V, K) {
                    return Qa(D.snapTo)(V, ut() - B < 500 ? 0 : K.direction);
                  }
                : H.utils.snap(D.snapTo)),
              (ni = D.duration || { min: 0.1, max: 2 }),
              (ni = ur(ni) ? Ds(ni.min, ni.max) : Ds(ni, ni)),
              (ai = H.delayedCall(D.delay || yr / 2 || 0.1, function () {
                var V = N(),
                  K = ut() - B < 500,
                  G = U.tween;
                if (
                  (K || Math.abs(C.getVelocity()) < 10) &&
                  !G &&
                  !hn &&
                  se !== V
                ) {
                  var Z = (V - J) / De,
                    Qe = r && !L ? r.totalProgress() : Z,
                    ue = K ? 0 : ((Qe - vr) / (ut() - ws)) * 1e3 || 0,
                    Ie = H.utils.clamp(-Z, 1 - Z, (Nr(ue / 2) * ue) / 0.185),
                    pt = Z + (D.inertia === !1 ? 0 : Ie),
                    Oe,
                    Ee,
                    ge = D,
                    li = ge.onStart,
                    Me = ge.onInterrupt,
                    Gt = ge.onComplete;
                  if (
                    ((Oe = it(pt, C)),
                    xs(Oe) || (Oe = pt),
                    (Ee = Math.max(0, Math.round(J + Oe * De))),
                    V <= ne && V >= J && Ee !== V)
                  ) {
                    if (G && !G._initted && G.data <= Nr(Ee - V)) return;
                    D.inertia === !1 && (Ie = Oe - Z),
                      U(
                        Ee,
                        {
                          duration: ni(
                            Nr(
                              (Math.max(Nr(pt - Qe), Nr(Oe - Qe)) * 0.185) /
                                ue /
                                0.05 || 0
                            )
                          ),
                          ease: D.ease || "power3",
                          data: Nr(Ee - V),
                          onInterrupt: function () {
                            return ai.restart(!0) && Me && Me(C);
                          },
                          onComplete: function () {
                            C.update(),
                              (se = N()),
                              r &&
                                !L &&
                                (oe
                                  ? oe.resetTo(
                                      "totalProgress",
                                      Oe,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(Oe)),
                              (Ui = vr =
                                r && !L ? r.totalProgress() : C.progress),
                              y && y(C),
                              Gt && Gt(C);
                          },
                        },
                        V,
                        Ie * De,
                        Ee - V - Ie * De
                      ),
                      li && li(C, U.tween);
                  }
                } else C.isActive && se !== V && ai.restart(!0);
              }).pause())),
            u && (Ja[u] = C),
            (m = C.trigger = Ft(m || (p !== !0 && p))),
            (Oi = m && m._gsap && m._gsap.stRevert),
            Oi && (Oi = Oi(C)),
            (p = p === !0 ? m : Ft(p)),
            Ht(o) && (o = { targets: m, className: o }),
            p &&
              (f === !1 ||
                f === Qt ||
                (f =
                  !f &&
                  p.parentNode &&
                  p.parentNode.style &&
                  Jt(p.parentNode).display === "flex"
                    ? !1
                    : Ne),
              (C.pin = p),
              (ce = H.core.getCache(p)),
              ce.spacer
                ? (Wt = ce.pinState)
                : (E &&
                    ((E = Ft(E)),
                    E && !E.nodeType && (E = E.current || E.nativeElement),
                    (ce.spacerIsNative = !!E),
                    E && (ce.spacerState = Mn(E))),
                  (ce.spacer = Fe = E || ye.createElement("div")),
                  Fe.classList.add("pin-spacer"),
                  u && Fe.classList.add("pin-spacer-" + u),
                  (ce.pinState = Wt = Mn(p))),
              i.force3D !== !1 && H.set(p, { force3D: !0 }),
              (C.spacer = Fe = ce.spacer),
              (Wr = Jt(p)),
              (zs = Wr[f + S.os2]),
              (pe = H.getProperty(p)),
              (Ot = H.quickSetter(p, S.a, Xe)),
              so(p, Fe, Wr),
              (si = Mn(p))),
            O)
          ) {
            (ft = ur(O) ? cu(O, fu) : fu),
              (z = xn("scroller-start", u, P, S, ft, 0)),
              (qe = xn("scroller-end", u, P, S, ft, 0, z)),
              (ti = z["offset" + S.op.d2]);
            var Rs = Ft(Yi(P, "content") || P);
            (_e = this.markerStart = xn("start", u, Rs, S, ft, ti, 0, b)),
              (We = this.markerEnd = xn("end", u, Rs, S, ft, ti, 0, b)),
              b && (Gr = H.quickSetter([_e, We], S.a, Xe)),
              !R &&
                !(mi.length && Yi(P, "fixedMarkers") === !0) &&
                (tp(F ? fe : P),
                H.set([z, qe], { force3D: !0 }),
                (kn = H.quickSetter(z, S.a, Xe)),
                (Xr = H.quickSetter(qe, S.a, Xe)));
          }
          if (b) {
            var ee = b.vars.onUpdate,
              j = b.vars.onUpdateParams;
            b.eventCallback("onUpdate", function () {
              C.update(0, 0, 1), ee && ee.apply(b, j || []);
            });
          }
          if (
            ((C.previous = function () {
              return te[te.indexOf(C) - 1];
            }),
            (C.next = function () {
              return te[te.indexOf(C) + 1];
            }),
            (C.revert = function (V, K) {
              if (!K) return C.kill(!0);
              var G = V !== !1 || !C.enabled,
                Z = lt;
              G !== C.isReverted &&
                (G &&
                  ((oi = Math.max(N(), C.scroll.rec || 0)),
                  ($ = C.progress),
                  (_r = r && r.progress())),
                _e &&
                  [_e, We, z, qe].forEach(function (Qe) {
                    return (Qe.style.display = G ? "none" : "block");
                  }),
                G && ((lt = C), C.update(G)),
                p &&
                  (!w || !C.isActive) &&
                  (G ? ap(p, Fe, Wt) : so(p, Fe, Jt(p), Ve)),
                G || C.update(G),
                (lt = Z),
                (C.isReverted = G));
            }),
            (C.refresh = function (V, K, G, Z) {
              if (!((lt || !C.enabled) && !K)) {
                if (p && V && Zt) {
                  je(s, "scrollEnd", hu);
                  return;
                }
                !xt && Y && Y(C),
                  (lt = C),
                  U.tween && !G && (U.tween.kill(), (U.tween = 0)),
                  oe && oe.pause(),
                  d && r && r.revert({ kill: !1 }).invalidate(),
                  C.isReverted || C.revert(!0, !0),
                  (C._subPinOffset = !1);
                var Qe = Q(),
                  ue = we(),
                  Ie = b ? b.duration() : vi(P, S),
                  pt = De <= 0.01,
                  Oe = 0,
                  Ee = Z || 0,
                  ge = ur(G) ? G.end : i.end,
                  li = i.endTrigger || m,
                  Me = ur(G)
                    ? G.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  Gt = (C.pinnedContainer =
                    i.pinnedContainer && Ft(i.pinnedContainer, C)),
                  _i = (m && Math.max(0, te.indexOf(C))) || 0,
                  rt = _i,
                  st,
                  ht,
                  Dr,
                  In,
                  mt,
                  Ge,
                  Di,
                  uo,
                  Nu,
                  Bs,
                  wi,
                  $s,
                  zn;
                for (
                  O &&
                  ur(G) &&
                  (($s = H.getProperty(z, S.p)), (zn = H.getProperty(qe, S.p)));
                  rt-- > 0;

                )
                  (Ge = te[rt]),
                    Ge.end || Ge.refresh(0, 1) || (lt = C),
                    (Di = Ge.pin),
                    Di &&
                      (Di === m || Di === p || Di === Gt) &&
                      !Ge.isReverted &&
                      (Bs || (Bs = []), Bs.unshift(Ge), Ge.revert(!0, !0)),
                    Ge !== te[rt] && (_i--, rt--);
                for (
                  ct(Me) && (Me = Me(C)),
                    Me = eu(Me, "start", C),
                    J =
                      Du(
                        Me,
                        m,
                        Qe,
                        S,
                        N(),
                        _e,
                        z,
                        C,
                        ue,
                        A,
                        R,
                        Ie,
                        b,
                        C._startClamp && "_startClamp"
                      ) || (p ? -0.001 : 0),
                    ct(ge) && (ge = ge(C)),
                    Ht(ge) &&
                      !ge.indexOf("+=") &&
                      (~ge.indexOf(" ")
                        ? (ge = (Ht(Me) ? Me.split(" ")[0] : "") + ge)
                        : ((Oe = Sn(ge.substr(2), Qe)),
                          (ge = Ht(Me)
                            ? Me
                            : (b
                                ? H.utils.mapRange(
                                    0,
                                    b.duration(),
                                    b.scrollTrigger.start,
                                    b.scrollTrigger.end,
                                    J
                                  )
                                : J) + Oe),
                          (li = m))),
                    ge = eu(ge, "end", C),
                    ne =
                      Math.max(
                        J,
                        Du(
                          ge || (li ? "100% 0" : Ie),
                          li,
                          Qe,
                          S,
                          N() + Oe,
                          We,
                          qe,
                          C,
                          ue,
                          A,
                          R,
                          Ie,
                          b,
                          C._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Oe = 0,
                    rt = _i;
                  rt--;

                )
                  (Ge = te[rt]),
                    (Di = Ge.pin),
                    Di &&
                      Ge.start - Ge._pinPush <= J &&
                      !b &&
                      Ge.end > 0 &&
                      ((st =
                        Ge.end -
                        (C._startClamp ? Math.max(0, Ge.start) : Ge.start)),
                      ((Di === m && Ge.start - Ge._pinPush < J) || Di === Gt) &&
                        isNaN(Me) &&
                        (Oe += st * (1 - Ge.progress)),
                      Di === p && (Ee += st));
                if (
                  ((J += Oe),
                  (ne += Oe),
                  C._startClamp && (C._startClamp += Oe),
                  C._endClamp &&
                    !xt &&
                    ((C._endClamp = ne || -0.001),
                    (ne = Math.min(ne, vi(P, S)))),
                  (De = ne - J || ((J -= 0.01) && 0.001)),
                  pt && ($ = H.utils.clamp(0, 1, H.utils.normalize(J, ne, oi))),
                  (C._pinPush = Ee),
                  _e &&
                    Oe &&
                    ((st = {}),
                    (st[S.a] = "+=" + Oe),
                    Gt && (st[S.p] = "-=" + N()),
                    H.set([_e, We], st)),
                  p && !(Xa && C.end >= vi(P, S)))
                )
                  (st = Jt(p)),
                    (In = S === Ye),
                    (Dr = N()),
                    (Ze = parseFloat(pe(S.a)) + Ee),
                    !Ie &&
                      ne > 1 &&
                      ((wi = (F ? ye.scrollingElement || Vt : P).style),
                      (wi = {
                        style: wi,
                        value: wi["overflow" + S.a.toUpperCase()],
                      }),
                      F &&
                        Jt(fe)["overflow" + S.a.toUpperCase()] !== "scroll" &&
                        (wi.style["overflow" + S.a.toUpperCase()] = "scroll")),
                    so(p, Fe, st),
                    (si = Mn(p)),
                    (ht = Mi(p, !0)),
                    (uo = R && Xi(P, In ? wt : Ye)()),
                    f
                      ? ((Ve = [f + S.os2, De + Ee + Xe]),
                        (Ve.t = Fe),
                        (rt = f === Ne ? yn(p, S) + De + Ee : 0),
                        rt &&
                          (Ve.push(S.d, rt + Xe),
                          Fe.style.flexBasis !== "auto" &&
                            (Fe.style.flexBasis = rt + Xe)),
                        Hr(Ve),
                        Gt &&
                          te.forEach(function (Ns) {
                            Ns.pin === Gt &&
                              Ns.vars.pinSpacing !== !1 &&
                              (Ns._subPinOffset = !0);
                          }),
                        R && N(oi))
                      : ((rt = yn(p, S)),
                        rt &&
                          Fe.style.flexBasis !== "auto" &&
                          (Fe.style.flexBasis = rt + Xe)),
                    R &&
                      ((mt = {
                        top: ht.top + (In ? Dr - J : uo) + Xe,
                        left: ht.left + (In ? uo : Dr - J) + Xe,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (mt[cr] = mt["max" + qr] = Math.ceil(ht.width) + Xe),
                      (mt[dr] = mt["max" + Za] = Math.ceil(ht.height) + Xe),
                      (mt[Qt] =
                        mt[Qt + Ms] =
                        mt[Qt + Ts] =
                        mt[Qt + Ps] =
                        mt[Qt + Cs] =
                          "0"),
                      (mt[Ne] = st[Ne]),
                      (mt[Ne + Ms] = st[Ne + Ms]),
                      (mt[Ne + Ts] = st[Ne + Ts]),
                      (mt[Ne + Ps] = st[Ne + Ps]),
                      (mt[Ne + Cs] = st[Ne + Cs]),
                      (ei = lp(Wt, mt, w)),
                      xt && N(0)),
                    r
                      ? ((Nu = r._initted),
                        Na(1),
                        r.render(r.duration(), !0, !0),
                        (Ai = pe(S.a) - Ze + De + Ee),
                        (Fi = Math.abs(De - Ai) > 1),
                        R && Fi && ei.splice(ei.length - 2, 2),
                        r.render(0, !0, !0),
                        Nu || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Na(0))
                      : (Ai = De),
                    wi &&
                      (wi.value
                        ? (wi.style["overflow" + S.a.toUpperCase()] = wi.value)
                        : wi.style.removeProperty("overflow-" + S.a));
                else if (m && N() && !b)
                  for (ht = m.parentNode; ht && ht !== fe; )
                    ht._pinOffset &&
                      ((J -= ht._pinOffset), (ne -= ht._pinOffset)),
                      (ht = ht.parentNode);
                Bs &&
                  Bs.forEach(function (Ns) {
                    return Ns.revert(!1, !0);
                  }),
                  (C.start = J),
                  (C.end = ne),
                  (Se = xe = xt ? oi : N()),
                  !b && !xt && (Se < oi && N(oi), (C.scroll.rec = 0)),
                  C.revert(!1, !0),
                  (B = ut()),
                  ai && ((se = -1), ai.restart(!0)),
                  (lt = 0),
                  r &&
                    L &&
                    (r._initted || _r) &&
                    r.progress() !== _r &&
                    r.progress(_r || 0, !0).render(r.time(), !0, !0),
                  (pt || $ !== C.progress || b || d || (r && !r._initted)) &&
                    (r &&
                      !L &&
                      r.totalProgress(
                        b && J < -0.001 && !$ ? H.utils.normalize(J, ne, 0) : $,
                        !0
                      ),
                    (C.progress = pt || (Se - J) / De === $ ? 0 : $)),
                  p && f && (Fe._pinOffset = Math.round(C.progress * Ai)),
                  oe && oe.invalidate(),
                  isNaN($s) ||
                    (($s -= H.getProperty(z, S.p)),
                    (zn -= H.getProperty(qe, S.p)),
                    An(z, S, $s),
                    An(_e, S, $s - (Z || 0)),
                    An(qe, S, zn),
                    An(We, S, zn - (Z || 0))),
                  pt && !xt && C.update(),
                  c && !xt && !Xt && ((Xt = !0), c(C), (Xt = !1));
              }
            }),
            (C.getVelocity = function () {
              return ((N() - xe) / (ut() - ws)) * 1e3 || 0;
            }),
            (C.endAnimation = function () {
              Es(C.callbackAnimation),
                r &&
                  (oe
                    ? oe.progress(1)
                    : r.paused()
                    ? L || Es(r, C.direction < 0, 1)
                    : Es(r, r.reversed()));
            }),
            (C.labelToScroll = function (V) {
              return (
                (r &&
                  r.labels &&
                  (J || C.refresh() || J) +
                    (r.labels[V] / r.duration()) * De) ||
                0
              );
            }),
            (C.getTrailing = function (V) {
              var K = te.indexOf(C),
                G =
                  C.direction > 0 ? te.slice(0, K).reverse() : te.slice(K + 1);
              return (
                Ht(V)
                  ? G.filter(function (Z) {
                      return Z.vars.preventOverlaps === V;
                    })
                  : G
              ).filter(function (Z) {
                return C.direction > 0 ? Z.end <= J : Z.start >= ne;
              });
            }),
            (C.update = function (V, K, G) {
              if (!(b && !G && !V)) {
                var Z = xt === !0 ? oi : C.scroll(),
                  Qe = V ? 0 : (Z - J) / De,
                  ue = Qe < 0 ? 0 : Qe > 1 ? 1 : Qe || 0,
                  Ie = C.progress,
                  pt,
                  Oe,
                  Ee,
                  ge,
                  li,
                  Me,
                  Gt,
                  _i;
                if (
                  (K &&
                    ((xe = Se),
                    (Se = b ? N() : Z),
                    D && ((vr = Ui), (Ui = r && !L ? r.totalProgress() : ue))),
                  g &&
                    p &&
                    !lt &&
                    !gn &&
                    Zt &&
                    (!ue && J < Z + ((Z - xe) / (ut() - ws)) * g
                      ? (ue = 1e-4)
                      : ue === 1 &&
                        ne > Z + ((Z - xe) / (ut() - ws)) * g &&
                        (ue = 0.9999)),
                  ue !== Ie && C.enabled)
                ) {
                  if (
                    ((pt = C.isActive = !!ue && ue < 1),
                    (Oe = !!Ie && Ie < 1),
                    (Me = pt !== Oe),
                    (li = Me || !!ue != !!Ie),
                    (C.direction = ue > Ie ? 1 : -1),
                    (C.progress = ue),
                    li &&
                      !lt &&
                      ((Ee = ue && !Ie ? 0 : ue === 1 ? 1 : Ie === 1 ? 2 : 3),
                      L &&
                        ((ge =
                          (!Me && M[Ee + 1] !== "none" && M[Ee + 1]) || M[Ee]),
                        (_i =
                          r &&
                          (ge === "complete" || ge === "reset" || ge in r)))),
                    x &&
                      (Me || _i) &&
                      (_i || h || !r) &&
                      (ct(x)
                        ? x(C)
                        : C.getTrailing(x).forEach(function (Dr) {
                            return Dr.endAnimation();
                          })),
                    L ||
                      (oe && !lt && !gn
                        ? (oe._dp._time - oe._start !== oe._time &&
                            oe.render(oe._dp._time - oe._start),
                          oe.resetTo
                            ? oe.resetTo(
                                "totalProgress",
                                ue,
                                r._tTime / r._tDur
                              )
                            : ((oe.vars.totalProgress = ue),
                              oe.invalidate().restart()))
                        : r && r.totalProgress(ue, !!(lt && (B || V)))),
                    p)
                  ) {
                    if ((V && f && (Fe.style[f + S.os2] = zs), !R))
                      Ot(Ss(Ze + Ai * ue));
                    else if (li) {
                      if (
                        ((Gt =
                          !V && ue > Ie && ne + 1 > Z && Z + 1 >= vi(P, S)),
                        w)
                      )
                        if (!V && (pt || Gt)) {
                          var rt = Mi(p, !0),
                            st = Z - J;
                          wu(
                            p,
                            fe,
                            rt.top + (S === Ye ? st : 0) + Xe,
                            rt.left + (S === Ye ? 0 : st) + Xe
                          );
                        } else wu(p, Fe);
                      Hr(pt || Gt ? ei : si),
                        (Fi && ue < 1 && pt) ||
                          Ot(Ze + (ue === 1 && !Gt ? Ai : 0));
                    }
                  }
                  D && !U.tween && !lt && !gn && ai.restart(!0),
                    o &&
                      (Me || (v && ue && (ue < 1 || !Wa))) &&
                      _s(o.targets).forEach(function (Dr) {
                        return Dr.classList[pt || v ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !L && !V && a(C),
                    li && !lt
                      ? (L &&
                          (_i &&
                            (ge === "complete"
                              ? r.pause().totalProgress(1)
                              : ge === "reset"
                              ? r.restart(!0).pause()
                              : ge === "restart"
                              ? r.restart(!0)
                              : r[ge]()),
                          a && a(C)),
                        (Me || !Wa) &&
                          (l && Me && Ua(C, l),
                          I[Ee] && Ua(C, I[Ee]),
                          v && (ue === 1 ? C.kill(!1, 1) : (I[Ee] = 0)),
                          Me ||
                            ((Ee = ue === 1 ? 1 : 3), I[Ee] && Ua(C, I[Ee]))),
                        T &&
                          !pt &&
                          Math.abs(C.getVelocity()) > (xs(T) ? T : 2500) &&
                          (Es(C.callbackAnimation),
                          oe
                            ? oe.progress(1)
                            : Es(r, ge === "reverse" ? 1 : !ue, 1)))
                      : L && a && !lt && a(C);
                }
                if (Xr) {
                  var ht = b ? (Z / b.duration()) * (b._caScrollDist || 0) : Z;
                  kn(ht + (z._isFlipped ? 1 : 0)), Xr(ht);
                }
                Gr && Gr((-Z / b.duration()) * (b._caScrollDist || 0));
              }
            }),
            (C.enable = function (V, K) {
              C.enabled ||
                ((C.enabled = !0),
                je(P, "resize", Fs),
                F || je(P, "scroll", Vr),
                Y && je(s, "refreshInit", Y),
                V !== !1 && ((C.progress = $ = 0), (Se = xe = se = N())),
                K !== !1 && C.refresh());
            }),
            (C.getTween = function (V) {
              return V && U ? U.tween : oe;
            }),
            (C.setPositions = function (V, K, G, Z) {
              if (b) {
                var Qe = b.scrollTrigger,
                  ue = b.duration(),
                  Ie = Qe.end - Qe.start;
                (V = Qe.start + (Ie * V) / ue), (K = Qe.start + (Ie * K) / ue);
              }
              C.refresh(
                !1,
                !1,
                {
                  start: tu(V, G && !!C._startClamp),
                  end: tu(K, G && !!C._endClamp),
                },
                Z
              ),
                C.update();
            }),
            (C.adjustPinSpacing = function (V) {
              if (Ve && V) {
                var K = Ve.indexOf(S.d) + 1;
                (Ve[K] = parseFloat(Ve[K]) + V + Xe),
                  (Ve[1] = parseFloat(Ve[1]) + V + Xe),
                  Hr(Ve);
              }
            }),
            (C.disable = function (V, K) {
              if (
                C.enabled &&
                (V !== !1 && C.revert(!0, !0),
                (C.enabled = C.isActive = !1),
                K || (oe && oe.pause()),
                (oi = 0),
                ce && (ce.uncache = 1),
                Y && Ke(s, "refreshInit", Y),
                ai && (ai.pause(), U.tween && U.tween.kill() && (U.tween = 0)),
                !F)
              ) {
                for (var G = te.length; G--; )
                  if (te[G].scroller === P && te[G] !== C) return;
                Ke(P, "resize", Fs), F || Ke(P, "scroll", Vr);
              }
            }),
            (C.kill = function (V, K) {
              C.disable(V, K), oe && !K && oe.kill(), u && delete Ja[u];
              var G = te.indexOf(C);
              G >= 0 && te.splice(G, 1),
                G === bt && Tn > 0 && bt--,
                (G = 0),
                te.forEach(function (Z) {
                  return Z.scroller === C.scroller && (G = 1);
                }),
                G || xt || (C.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  V && r.revert({ kill: !1 }),
                  K || r.kill()),
                _e &&
                  [_e, We, z, qe].forEach(function (Z) {
                    return Z.parentNode && Z.parentNode.removeChild(Z);
                  }),
                Os === C && (Os = 0),
                p &&
                  (ce && (ce.uncache = 1),
                  (G = 0),
                  te.forEach(function (Z) {
                    return Z.pin === p && G++;
                  }),
                  G || (ce.spacer = 0)),
                i.onKill && i.onKill(C);
            }),
            te.push(C),
            C.enable(!1, !1),
            Oi && Oi(C),
            r && r.add && !De)
          ) {
            var de = C.update;
            (C.update = function () {
              (C.update = de), ie.cache++, J || ne || C.refresh();
            }),
              H.delayedCall(0.01, C.update),
              (De = 0.01),
              (J = ne = 0);
          } else C.refresh();
          p && np();
        }),
        (s.register = function (i) {
          return (
            Rr ||
              ((H = i || nu()),
              su() && window.document && s.enable(),
              (Rr = bs)),
            Rr
          );
        }),
        (s.defaults = function (i) {
          if (i) for (var r in i) wn[r] = i[r];
          return wn;
        }),
        (s.disable = function (i, r) {
          (bs = 0),
            te.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            Ke(re, "wheel", Vr),
            Ke(ye, "scroll", Vr),
            clearInterval(pn),
            Ke(ye, "touchcancel", gi),
            Ke(fe, "touchstart", gi),
            _n(Ke, ye, "pointerdown,touchstart,mousedown", iu),
            _n(Ke, ye, "pointerup,touchend,mouseup", ru),
            fn.kill(),
            vn(Ke);
          for (var n = 0; n < ie.length; n += 3)
            Dn(Ke, ie[n], ie[n + 1]), Dn(Ke, ie[n], ie[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((re = window),
            (ye = document),
            (Vt = ye.documentElement),
            (fe = ye.body),
            H &&
              ((_s = H.utils.toArray),
              (Ds = H.utils.clamp),
              (Va = H.core.context || gi),
              (Na = H.core.suppressOverwrites || gi),
              (Ha = re.history.scrollRestoration || "auto"),
              (io = re.pageYOffset || 0),
              H.core.globals("ScrollTrigger", s),
              fe))
          ) {
            (bs = 1),
              ($r = document.createElement("div")),
              ($r.style.height = "100vh"),
              ($r.style.position = "absolute"),
              yu(),
              Qf(),
              ke.register(H),
              (s.isTouch = ke.isTouch),
              (Wi =
                ke.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (qa = ke.isTouch === 1),
              je(re, "wheel", Vr),
              (Ba = [re, ye, Vt, fe]),
              H.matchMedia
                ? ((s.matchMedia = function (l) {
                    var c = H.matchMedia(),
                      h;
                    for (h in l) c.add(h, l[h]);
                    return c;
                  }),
                  H.addEventListener("matchMediaInit", function () {
                    return to();
                  }),
                  H.addEventListener("matchMediaRevert", function () {
                    return mu();
                  }),
                  H.addEventListener("matchMedia", function () {
                    mr(0, 1), pr("matchMedia");
                  }),
                  H.matchMedia().add("(orientation: portrait)", function () {
                    return eo(), eo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              eo(),
              je(ye, "scroll", Vr);
            var i = fe.hasAttribute("style"),
              r = fe.style,
              n = r.borderTopStyle,
              a = H.core.Animation.prototype,
              o,
              u;
            for (
              a.revert ||
                Object.defineProperty(a, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                r.borderTopStyle = "solid",
                o = Mi(fe),
                Ye.m = Math.round(o.top + Ye.sc()) || 0,
                wt.m = Math.round(o.left + wt.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                i ||
                  (fe.setAttribute("style", ""), fe.removeAttribute("style")),
                pn = setInterval(pu, 250),
                H.delayedCall(0.5, function () {
                  return (gn = 0);
                }),
                je(ye, "touchcancel", gi),
                je(fe, "touchstart", gi),
                _n(je, ye, "pointerdown,touchstart,mousedown", iu),
                _n(je, ye, "pointerup,touchend,mouseup", ru),
                $a = H.utils.checkPrefix("transform"),
                Cn.push($a),
                Rr = ut(),
                fn = H.delayedCall(0.2, mr).pause(),
                Br = [
                  ye,
                  "visibilitychange",
                  function () {
                    var l = re.innerWidth,
                      c = re.innerHeight;
                    ye.hidden
                      ? ((Ul = l), (jl = c))
                      : (Ul !== l || jl !== c) && Fs();
                  },
                  ye,
                  "DOMContentLoaded",
                  mr,
                  re,
                  "load",
                  mr,
                  re,
                  "resize",
                  Fs,
                ],
                vn(je),
                te.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                u = 0;
              u < ie.length;
              u += 3
            )
              Dn(Ke, ie[u], ie[u + 1]), Dn(Ke, ie[u], ie[u + 2]);
          }
        }),
        (s.config = function (i) {
          "limitCallbacks" in i && (Wa = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(pn)) || ((pn = r) && setInterval(pu, r)),
            "ignoreMobileResize" in i &&
              (qa = s.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (vn(Ke) || vn(je, i.autoRefreshEvents || "none"),
              (Zl = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (i, r) {
          var n = Ft(i),
            a = ie.indexOf(n),
            o = lr(n);
          ~a && ie.splice(a, o ? 6 : 2),
            r && (o ? mi.unshift(re, r, fe, r, Vt, r) : mi.unshift(n, r));
        }),
        (s.clearMatchMedia = function (i) {
          te.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (i, r, n) {
          var a = (Ht(i) ? Ft(i) : i).getBoundingClientRect(),
            o = a[n ? cr : dr] * r || 0;
          return n
            ? a.right - o > 0 && a.left + o < re.innerWidth
            : a.bottom - o > 0 && a.top + o < re.innerHeight;
        }),
        (s.positionInViewport = function (i, r, n) {
          Ht(i) && (i = Ft(i));
          var a = i.getBoundingClientRect(),
            o = a[n ? cr : dr],
            u =
              r == null
                ? o / 2
                : r in bn
                ? bn[r] * o
                : ~r.indexOf("%")
                ? (parseFloat(r) * o) / 100
                : parseFloat(r) || 0;
          return n
            ? (a.left + u) / re.innerWidth
            : (a.top + u) / re.innerHeight;
        }),
        (s.killAll = function (i) {
          if (
            (te.slice(0).forEach(function (n) {
              return n.vars.id !== "ScrollSmoother" && n.kill();
            }),
            i !== !0)
          ) {
            var r = fr.killAll || [];
            (fr = {}),
              r.forEach(function (n) {
                return n();
              });
          }
        }),
        s
      );
    })();
  (X.version = "3.12.7"),
    (X.saveStyles = function (s) {
      return s
        ? _s(s).forEach(function (e) {
            if (e && e.style) {
              var t = Yt.indexOf(e);
              t >= 0 && Yt.splice(t, 5),
                Yt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  H.core.getCache(e),
                  Va()
                );
            }
          })
        : Yt;
    }),
    (X.revert = function (s, e) {
      return to(!s, e);
    }),
    (X.create = function (s, e) {
      return new X(s, e);
    }),
    (X.refresh = function (s) {
      return s ? Fs(!0) : (Rr || X.register()) && mr(!0);
    }),
    (X.update = function (s) {
      return ++ie.cache && Pi(s === !0 ? 2 : 0);
    }),
    (X.clearScrollMemory = gu),
    (X.maxScroll = function (s, e) {
      return vi(s, e ? wt : Ye);
    }),
    (X.getScrollFunc = function (s, e) {
      return Xi(Ft(s), e ? wt : Ye);
    }),
    (X.getById = function (s) {
      return Ja[s];
    }),
    (X.getAll = function () {
      return te.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (X.isScrolling = function () {
      return !!Zt;
    }),
    (X.snapDirectional = Qa),
    (X.addEventListener = function (s, e) {
      var t = fr[s] || (fr[s] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (X.removeEventListener = function (s, e) {
      var t = fr[s],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (X.batch = function (s, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        n = e.batchMax || 1e9,
        a = function (l, c) {
          var h = [],
            m = [],
            p = H.delayedCall(r, function () {
              c(h, m), (h = []), (m = []);
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
          o.substr(0, 2) === "on" && ct(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        ct(n) &&
          ((n = n()),
          je(X, "refresh", function () {
            return (n = e.batchMax());
          })),
        _s(s).forEach(function (u) {
          var l = {};
          for (o in i) l[o] = i[o];
          (l.trigger = u), t.push(X.create(l));
        }),
        t
      );
    });
  var xu = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    no = function s(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (ke.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Vt && s(fe, t);
    },
    Fn = { auto: 1, scroll: 1 },
    cp = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        n = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = n._gsap || H.core.getCache(n),
        o = ut(),
        u;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== fe &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(Fn[(u = Jt(n)).overflowY] || Fn[u.overflowX]));

        )
          n = n.parentNode;
        (a._isScroll =
          n &&
          n !== i &&
          !lr(n) &&
          (Fn[(u = Jt(n)).overflowY] || Fn[u.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Eu = function (e, t, i, r) {
      return ke.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && cp),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && je(ye, ke.eventTypes[0], Cu, !1, !0);
        },
        onDisable: function () {
          return Ke(ye, ke.eventTypes[0], Cu, !0);
        },
      });
    },
    dp = /(input|label|select|textarea)/i,
    Tu,
    Cu = function (e) {
      var t = dp.test(e.target.tagName);
      (t || Tu) && ((e._gsapAllow = !0), (Tu = t));
    },
    fp = function (e) {
      ur(e) || (e = {}),
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
        u,
        l = Ft(e.target) || Vt,
        c = H.core.globals().ScrollSmoother,
        h = c && c.get(),
        m =
          Wi &&
          ((e.content && Ft(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = Xi(l, Ye),
        f = Xi(l, wt),
        d = 1,
        g =
          (ke.isTouch && re.visualViewport
            ? re.visualViewport.scale * re.visualViewport.width
            : re.outerWidth) / re.innerWidth,
        _ = 0,
        y = ct(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        v,
        D,
        w = Eu(l, e.type, !0, n),
        E = function () {
          return (D = !1);
        },
        b = gi,
        T = gi,
        x = function () {
          (u = vi(l, Ye)),
            (T = Ds(Wi ? 1 : 0, u)),
            i && (b = Ds(0, vi(l, wt))),
            (v = hr);
        },
        S = function () {
          (m._gsap.y = Ss(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        L = function () {
          if (D) {
            requestAnimationFrame(E);
            var O = Ss(o.deltaY / 2),
              A = T(p.v - O);
            if (m && A !== p.v + p.offset) {
              p.offset = A - p.v;
              var C = Ss((parseFloat(m && m._gsap.y) || 0) - p.offset);
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
          p.offset && S(), (D = !0);
        },
        P,
        k,
        F,
        R,
        I = function () {
          x(),
            P.isActive() &&
              P.vars.scrollY > u &&
              (p() > u ? P.progress(1) && p(u) : P.resetTo("scrollY", u));
        };
      return (
        m && H.set(m, { y: "+=0" }),
        (e.ignoreCheck = function (M) {
          return (
            (Wi && M.type === "touchmove" && L()) ||
            (d > 1.05 && M.type !== "touchstart") ||
            o.isGesturing ||
            (M.touches && M.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          D = !1;
          var M = d;
          (d = Ss(((re.visualViewport && re.visualViewport.scale) || 1) / g)),
            P.pause(),
            M !== d && no(l, d > 1.01 ? !0 : i ? !1 : "x"),
            (k = f()),
            (F = p()),
            x(),
            (v = hr);
        }),
        (e.onRelease = e.onGestureStart =
          function (M, O) {
            if ((p.offset && S(), !O)) R.restart(!0);
            else {
              ie.cache++;
              var A = y(),
                C,
                Y;
              i &&
                ((C = f()),
                (Y = C + (A * 0.05 * -M.velocityX) / 0.227),
                (A *= xu(f, C, Y, vi(l, wt))),
                (P.vars.scrollX = b(Y))),
                (C = p()),
                (Y = C + (A * 0.05 * -M.velocityY) / 0.227),
                (A *= xu(p, C, Y, vi(l, Ye))),
                (P.vars.scrollY = T(Y)),
                P.invalidate().duration(A).play(0.01),
                ((Wi && P.vars.scrollY >= u) || C >= u - 1) &&
                  H.to({}, { onUpdate: I, duration: A });
            }
            a && a(M);
          }),
        (e.onWheel = function () {
          P._ts && P.pause(), ut() - _ > 1e3 && ((v = 0), (_ = ut()));
        }),
        (e.onChange = function (M, O, A, C, Y) {
          if (
            (hr !== v && x(),
            O && i && f(b(C[2] === O ? k + (M.startX - M.x) : f() + O - C[1])),
            A)
          ) {
            p.offset && S();
            var Q = Y[2] === A,
              we = Q ? F + M.startY - M.y : p() + A - Y[1],
              se = T(we);
            Q && we !== se && (F += se - we), p(se);
          }
          (A || O) && Pi();
        }),
        (e.onEnable = function () {
          no(l, i ? !1 : "x"),
            X.addEventListener("refresh", I),
            je(re, "resize", I),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = f.smooth = !1)),
            w.enable();
        }),
        (e.onDisable = function () {
          no(l, !0),
            Ke(re, "resize", I),
            X.removeEventListener("refresh", I),
            w.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new ke(e)),
        (o.iOS = Wi),
        Wi && !p() && p(1),
        Wi && H.ticker.add(gi),
        (R = o._dc),
        (P = H.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: bu(p, p(), function () {
              return P.pause();
            }),
          },
          onUpdate: Pi,
          onComplete: R.vars.onComplete,
        })),
        o
      );
    };
  (X.sort = function (s) {
    if (ct(s)) return te.sort(s);
    var e = re.pageYOffset || 0;
    return (
      X.getAll().forEach(function (t) {
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
    (X.observe = function (s) {
      return new ke(s);
    }),
    (X.normalizeScroll = function (s) {
      if (typeof s == "undefined") return St;
      if (s === !0 && St) return St.enable();
      if (s === !1) {
        St && St.kill(), (St = s);
        return;
      }
      var e = s instanceof ke ? s : fp(s);
      return (
        St && St.target === e.target && St.kill(), lr(e.target) && (St = e), e
      );
    }),
    (X.core = {
      _getVelocityProp: Ra,
      _inputObserver: Eu,
      _scrollers: ie,
      _proxies: mi,
      bridge: {
        ss: function () {
          Zt || pr("scrollStart"), (Zt = ut());
        },
        ref: function () {
          return lt;
        },
      },
    }),
    nu() && H.registerPlugin(X),
    q.registerPlugin(X);
  class gr {
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
          let a = gr.attr(100, e.getAttribute("marquee-speed")),
            o = gr.attr(!1, e.getAttribute("marquee-vertical")),
            u = gr.attr(!1, e.getAttribute("marquee-reverse")),
            l = gr.attr(!1, e.getAttribute("marquee-scrolldirection")),
            c = gr.attr(!1, e.getAttribute("marquee-scrollscrub")),
            h = -100,
            m = 1,
            p = !1;
          u && (h = 100);
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
          X.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (_) => {
              if (
                !p &&
                (l &&
                  m !== _.direction &&
                  ((m = _.direction), f.timeScale(_.direction)),
                c)
              ) {
                let y = _.getVelocity() * 0.006;
                (y = q.utils.clamp(-60, 60, y)),
                  q
                    .timeline({ onUpdate: () => f.timeScale(d.value) })
                    .fromTo(d, { value: y }, { value: m, duration: 0.5 });
              }
            },
          });
          function g(_) {
            p = _;
            let y = { value: 1 },
              v = q.timeline({ onUpdate: () => f.timeScale(y.value) });
            _
              ? (v.fromTo(y, { value: m }, { value: 0, duration: 0.5 }),
                n.forEach((D) => D.setAttribute("marquee-status", "paused")))
              : (v.fromTo(y, { value: 0 }, { value: m, duration: 0.5 }),
                n.forEach((D) => D.setAttribute("marquee-status", "playing")));
          }
          window.matchMedia("(pointer: fine)").matches &&
            r.forEach((_) => {
              _.addEventListener("mouseenter", () => g(!0)),
                _.addEventListener("mouseleave", () => g(!1));
            }),
            n.forEach((_) => {
              _.addEventListener("click", function () {
                this.getAttribute("marquee-status") === "paused"
                  ? g(!1)
                  : g(!0);
              });
            });
        });
    }
  }
  function Ls() {
    new gr();
  }
  class pp {
    constructor() {
      this.swiper = new Et("[swiper='review-slider']", {
        direction: "horizontal",
        slidesPerView: 1,
        on: {
          slideChange: function (e) {
            e.slides.forEach((t) => {
              t.setAttribute("card-status", "inactive");
            }),
              e.slides[e.activeIndex].setAttribute("card-status", "active");
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
        loop: !0,
        grabCursor: !0,
        keyboard: { enabled: !0, onlyInViewport: !0 },
      });
    }
  }
  function ks() {
    new pp();
  }
  q.registerPlugin(X);
  const hp = () => {
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
        u = r.querySelector("[service-scroll='svg-path-solid']"),
        l = e.querySelector("[service-intro='eyebrow']"),
        c = e.querySelector("[service-intro='heading']"),
        h = e.querySelector("[service-item='3d']"),
        m = e.querySelector("[service-header='3d']"),
        p = e.querySelector("[service-video-trigger='3d']"),
        f = document.querySelector("[visual-wrap='3d']"),
        d = e.querySelector("[service-item='2d']"),
        g = e.querySelector("[service-header='2d']"),
        _ = e.querySelector("[service-video-trigger='2d']"),
        y = document.querySelector("[visual-wrap='2d']"),
        v = e.querySelector("[service-item='interactive']"),
        D = e.querySelector("[service-header='interactive']"),
        w = e.querySelector("[service-video-trigger='interactive']"),
        E = document.querySelector("[visual-wrap='interactive']"),
        b = document.querySelectorAll("[service-list-item='wrapper']"),
        T = document.querySelectorAll("[service-list-item='3d']"),
        x = document.querySelectorAll("[service-list-icon='3d']");
      document.querySelectorAll("[service-list-text='3d']");
      const S = document.querySelectorAll("[service-list-item='2d']"),
        L = document.querySelectorAll("[service-list-icon='2d']");
      document.querySelectorAll("[service-list-text='2d']");
      const P = document.querySelectorAll("[service-list-item='interactive']"),
        k = document.querySelectorAll("[service-list-icon='interactive']");
      document.querySelectorAll("[service-list-text='interactive']");
      const F = q.timeline({
        scrollTrigger: {
          trigger: e,
          start: "top top",
          end: "+=450%",
          pin: !1,
          markers: !1,
          scrub: 1.2,
        },
      });
      F.fromTo(
        n,
        { rotate: 145, scale: 1.8 },
        { rotate: 0, scale: 1.2, duration: 1.8, ease: "power2.out" },
        `${s.SVG_LINE_START}%`
      ),
        F.to(
          l,
          { opacity: 0, y: -20, duration: 1, ease: "power2.in" },
          `${s.INTRO_OUT}`
        ),
        F.to(
          c,
          { opacity: 0, y: -20, duration: 1.8, ease: "power2.in" },
          `${s.INTRO_OUT}`
        ),
        F.fromTo(
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
        F.fromTo(
          u,
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
        F.fromTo(
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
        F.fromTo(
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
        F.to(
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
        F.fromTo(
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
        F.fromTo(
          b,
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
        F.fromTo(
          T,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_3D_IN}`
        ),
        F.fromTo(
          x,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_3D_IN}`
        ),
        F.to(
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
        F.to(
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
        F.to(
          T,
          { opacity: 0.5, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_3D_OUT}`
        ),
        F.to(
          x,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_3D_OUT}`
        ),
        F.fromTo(
          [d, g, _],
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
        F.fromTo(
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
        F.fromTo(
          S,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_2D_IN}`
        ),
        F.fromTo(
          L,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_2D_IN}`
        ),
        F.to(
          n,
          { rotate: -90, duration: 1.8, ease: "power2.out" },
          `${s.SERVICE_2D_IN}`
        ),
        F.to(
          [d, g, _],
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
        F.to(
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
        F.to(
          S,
          { opacity: 0.5, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_2D_OUT}`
        ),
        F.to(
          L,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_2D_OUT}`
        ),
        F.fromTo(
          [v, D, w],
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
        F.fromTo(
          E,
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
        F.fromTo(
          P,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_INTERACTIVE_LIST}`
        ),
        F.fromTo(
          k,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_INTERACTIVE_LIST}`
        );
    },
    mp = () => {
      hp();
    },
    gp = () => {
      mp();
    };
  var vp = "1.2.3";
  function Mu(s, e, t) {
    return Math.max(s, Math.min(e, t));
  }
  function yp(s, e, t) {
    return (1 - t) * s + t * e;
  }
  function _p(s, e, t, i) {
    return yp(s, e, 1 - Math.exp(-t * i));
  }
  function Dp(s, e) {
    return ((s % e) + e) % e;
  }
  var wp = class {
    constructor() {
      W(this, "isRunning", !1);
      W(this, "value", 0);
      W(this, "from", 0);
      W(this, "to", 0);
      W(this, "currentTime", 0);
      W(this, "lerp");
      W(this, "duration");
      W(this, "easing");
      W(this, "onUpdate");
    }
    advance(s) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += s;
        const i = Mu(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = _p(this.value, this.to, this.lerp * 60, s)),
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
  function bp(s, e) {
    let t;
    return function (...i) {
      let r = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), s.apply(r, i);
        }, e));
    };
  }
  var Sp = class {
      constructor(s, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
        W(this, "width", 0);
        W(this, "height", 0);
        W(this, "scrollHeight", 0);
        W(this, "scrollWidth", 0);
        W(this, "debouncedResize");
        W(this, "wrapperResizeObserver");
        W(this, "contentResizeObserver");
        W(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        W(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        W(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = s),
          (this.content = e),
          t &&
            ((this.debouncedResize = bp(this.resize, i)),
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
    Pu = class {
      constructor() {
        W(this, "events", {});
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
    Au = 100 / 6,
    Gi = { passive: !1 },
    xp = class {
      constructor(s, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        W(this, "touchStart", { x: 0, y: 0 });
        W(this, "lastDelta", { x: 0, y: 0 });
        W(this, "window", { width: 0, height: 0 });
        W(this, "emitter", new Pu());
        W(this, "onTouchStart", (s) => {
          const { clientX: e, clientY: t } = s.targetTouches
            ? s.targetTouches[0]
            : s;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s });
        });
        W(this, "onTouchMove", (s) => {
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
        W(this, "onTouchEnd", (s) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: s,
          });
        });
        W(this, "onWheel", (s) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = s;
          const r = i === 1 ? Au : i === 2 ? this.window.width : 1,
            n = i === 1 ? Au : i === 2 ? this.window.height : 1;
          (e *= r),
            (t *= n),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: s });
        });
        W(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = s),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Gi),
          this.element.addEventListener("touchstart", this.onTouchStart, Gi),
          this.element.addEventListener("touchmove", this.onTouchMove, Gi),
          this.element.addEventListener("touchend", this.onTouchEnd, Gi);
      }
      on(s, e) {
        return this.emitter.on(s, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Gi),
          this.element.removeEventListener("touchstart", this.onTouchStart, Gi),
          this.element.removeEventListener("touchmove", this.onTouchMove, Gi),
          this.element.removeEventListener("touchend", this.onTouchEnd, Gi);
      }
    },
    Ep = class {
      constructor({
        wrapper: s = window,
        content: e = document.documentElement,
        eventsTarget: t = s,
        smoothWheel: i = !0,
        syncTouch: r = !1,
        syncTouchLerp: n = 0.075,
        touchInertiaMultiplier: a = 35,
        duration: o,
        easing: u = (E) => Math.min(1, 1.001 - Math.pow(2, -10 * E)),
        lerp: l = 0.1,
        infinite: c = !1,
        orientation: h = "vertical",
        gestureOrientation: m = "vertical",
        touchMultiplier: p = 1,
        wheelMultiplier: f = 1,
        autoResize: d = !0,
        prevent: g,
        virtualScroll: _,
        overscroll: y = !0,
        autoRaf: v = !1,
        anchors: D = !1,
        __experimental__naiveDimensions: w = !1,
      } = {}) {
        W(this, "_isScrolling", !1);
        W(this, "_isStopped", !1);
        W(this, "_isLocked", !1);
        W(this, "_preventNextNativeScrollEvent", !1);
        W(this, "_resetVelocityTimeout", null);
        W(this, "__rafID", null);
        W(this, "isTouching");
        W(this, "time", 0);
        W(this, "userData", {});
        W(this, "lastVelocity", 0);
        W(this, "velocity", 0);
        W(this, "direction", 0);
        W(this, "options");
        W(this, "targetScroll");
        W(this, "animatedScroll");
        W(this, "animate", new wp());
        W(this, "emitter", new Pu());
        W(this, "dimensions");
        W(this, "virtualScroll");
        W(this, "onScrollEnd", (s) => {
          s instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              s.stopPropagation());
        });
        W(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        W(this, "onClick", (s) => {
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
        W(this, "onPointerDown", (s) => {
          s.button === 1 && this.reset();
        });
        W(this, "onVirtualScroll", (s) => {
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
          const u =
            (this.options.gestureOrientation === "vertical" && t === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (a || u) return;
          let l = i.composedPath();
          l = l.slice(0, l.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            l.find((g) => {
              var _, y, v;
              return (
                g instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(g))) ||
                  ((_ = g.hasAttribute) == null
                    ? void 0
                    : _.call(g, "data-lenis-prevent")) ||
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
              Rn(
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
        W(this, "onNativeScroll", () => {
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
        W(this, "raf", (s) => {
          const e = s - (this.time || s);
          (this.time = s),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = vp),
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
            easing: u,
            lerp: l,
            infinite: c,
            gestureOrientation: m,
            orientation: h,
            touchMultiplier: p,
            wheelMultiplier: f,
            autoResize: d,
            prevent: g,
            virtualScroll: _,
            overscroll: y,
            autoRaf: v,
            anchors: D,
            __experimental__naiveDimensions: w,
          }),
          (this.dimensions = new Sp(s, e, { autoResize: d })),
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
          (this.virtualScroll = new xp(t, {
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
          onComplete: u,
          force: l = !1,
          programmatic: c = !0,
          userData: h,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !l)) {
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
                ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                : (s = Mu(0, s, this.limit)),
              s === this.targetScroll)
            ) {
              o == null || o(this), u == null || u(this);
              return;
            }
            if (((this.userData = h != null ? h : {}), t)) {
              (this.animatedScroll = this.targetScroll = s),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                u == null || u(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            c || (this.targetScroll = s),
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
                    c && (this.targetScroll = m),
                    p || this.emit(),
                    p &&
                      (this.reset(),
                      this.emit(),
                      u == null || u(this),
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
          ? Dp(this.animatedScroll, this.limit)
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
  q.registerPlugin(X);
  let On;
  const Tp = () => {
      (On = new Ep({ autoRaf: !0 })),
        On.on("scroll", X.update),
        q.ticker.add((s) => {
          On.raf(s * 1e3);
        }),
        q.ticker.lagSmoothing(0);
    },
    Cp = () => {
      Tp();
    },
    dt = () => On;
  q.registerPlugin(X);
  const Mp = () => {
      const s = document.querySelectorAll('[hero-parallax="visual"]'),
        e = document.querySelector('[hero-parallax="header"]');
      if (!s.length && !e) return;
      const t = dt == null ? void 0 : dt();
      if (
        (X.defaults({ scroller: t ? t.wrapper : void 0 }),
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
    Pp = () => {
      Mp();
    },
    Ap = () => {
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
          u = () => {
            t(n, "close"), e === n && (e = null);
          };
        i.addEventListener("click", () => {
          const l = dt();
          e === n ? (u(), l.start()) : (o(), l.stop());
        }),
          a.addEventListener("click", () => {
            e === n && (u(), dt().start());
          });
      }),
        document.addEventListener("keydown", (i) => {
          i.key === "Escape" && e && (t(e, "close"), dt().start(), (e = null));
        });
    },
    Fp = () => {
      Ap();
    };
  /*!
   * strings: 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Op =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function Fu(s) {
    var e = s.nodeType,
      t = "";
    if (e === 1 || e === 9 || e === 11) {
      if (typeof s.textContent == "string") return s.textContent;
      for (s = s.firstChild; s; s = s.nextSibling) t += Fu(s);
    } else if (e === 3 || e === 4) return s.nodeValue;
    return t;
  }
  /*!
   * SplitText: 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Yr,
    ao,
    Ou,
    Is,
    Lu,
    Ln,
    Lp = /(?:\r|\n|\t\t)/g,
    kp = /(?:\s\s+)/g,
    Ip = " ",
    ku = function (e) {
      (Yr = document),
        (ao = window),
        (Is =
          Is ||
          e ||
          ao.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")),
        Is &&
          ((Ln = Is.utils.toArray),
          (Lu = Is.core.context || function () {}),
          (Ou = 1));
    },
    Iu = function (e) {
      return ao.getComputedStyle(e);
    },
    oo = function (e) {
      return e.position === "absolute" || e.absolute === !0;
    },
    zp = function (e, t) {
      for (var i = t.length, r; --i > -1; )
        if (((r = t[i]), e.substr(0, r.length) === r)) return r.length;
    },
    Rp = " style='position:relative;display:inline-block;'",
    zu = function (e, t) {
      e === void 0 && (e = "");
      var i = ~e.indexOf("++"),
        r = 1;
      return (
        i && (e = e.split("++").join("")),
        function () {
          return (
            "<" + t + Rp + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
          );
        }
      );
    },
    Ru = function s(e, t, i) {
      var r = e.nodeType;
      if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling) s(e, t, i);
      else (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(t).join(i));
    },
    lo = function (e, t) {
      for (var i = t.length; --i > -1; ) e.push(t[i]);
    },
    Bu = function (e, t, i) {
      for (var r; e && e !== t; ) {
        if (((r = e._next || e.nextSibling), r))
          return r.textContent.charAt(0) === i;
        e = e.parentNode || e._parent;
      }
    },
    Bp = function s(e) {
      var t = Ln(e.childNodes),
        i = t.length,
        r,
        n;
      for (r = 0; r < i; r++)
        (n = t[r]),
          n._isSplit
            ? s(n)
            : r && n.previousSibling && n.previousSibling.nodeType === 3
            ? ((n.previousSibling.nodeValue +=
                n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue),
              e.removeChild(n))
            : n.nodeType !== 3 &&
              (e.insertBefore(n.firstChild, n), e.removeChild(n));
    },
    yi = function (e, t) {
      return parseFloat(t[e]) || 0;
    },
    $p = function (e, t, i, r, n, a, o) {
      var u = Iu(e),
        l = yi("paddingLeft", u),
        c = -999,
        h = yi("borderBottomWidth", u) + yi("borderTopWidth", u),
        m = yi("borderLeftWidth", u) + yi("borderRightWidth", u),
        p = yi("paddingTop", u) + yi("paddingBottom", u),
        f = yi("paddingLeft", u) + yi("paddingRight", u),
        d = yi("fontSize", u) * (t.lineThreshold || 0.2),
        g = u.textAlign,
        _ = [],
        y = [],
        v = [],
        D = t.wordDelimiter || " ",
        w = t.tag ? t.tag : t.span ? "span" : "div",
        E = t.type || t.split || "chars,words,lines",
        b = n && ~E.indexOf("lines") ? [] : null,
        T = ~E.indexOf("words"),
        x = ~E.indexOf("chars"),
        S = oo(t),
        L = t.linesClass,
        P = ~(L || "").indexOf("++"),
        k = [],
        F = u.display === "flex",
        R = e.style.display,
        I,
        M,
        O,
        A,
        C,
        Y,
        Q,
        we,
        se,
        B,
        $,
        N;
      for (
        P && (L = L.split("++").join("")),
          F && (e.style.display = "block"),
          M = e.getElementsByTagName("*"),
          O = M.length,
          C = [],
          I = 0;
        I < O;
        I++
      )
        C[I] = M[I];
      if (b || S)
        for (I = 0; I < O; I++)
          (A = C[I]),
            (Y = A.parentNode === e),
            (Y || S || (x && !T)) &&
              ((N = A.offsetTop),
              b &&
                Y &&
                Math.abs(N - c) > d &&
                (A.nodeName !== "BR" || I === 0) &&
                ((Q = []), b.push(Q), (c = N)),
              S &&
                ((A._x = A.offsetLeft),
                (A._y = N),
                (A._w = A.offsetWidth),
                (A._h = A.offsetHeight)),
              b &&
                (((A._isSplit && Y) ||
                  (!x && Y) ||
                  (T && Y) ||
                  (!T &&
                    A.parentNode.parentNode === e &&
                    !A.parentNode._isSplit)) &&
                  (Q.push(A), (A._x -= l), Bu(A, e, D) && (A._wordEnd = !0)),
                A.nodeName === "BR" &&
                  ((A.nextSibling && A.nextSibling.nodeName === "BR") ||
                    I === 0) &&
                  b.push([])));
      for (I = 0; I < O; I++) {
        if (((A = C[I]), (Y = A.parentNode === e), A.nodeName === "BR")) {
          b || S
            ? (A.parentNode && A.parentNode.removeChild(A),
              C.splice(I--, 1),
              O--)
            : T || e.appendChild(A);
          continue;
        }
        if (
          (S &&
            ((se = A.style),
            !T && !Y && ((A._x += A.parentNode._x), (A._y += A.parentNode._y)),
            (se.left = A._x + "px"),
            (se.top = A._y + "px"),
            (se.position = "absolute"),
            (se.display = "block"),
            (se.width = A._w + 1 + "px"),
            (se.height = A._h + "px")),
          !T && x)
        )
          if (A._isSplit)
            for (
              A._next = M = A.nextSibling, A.parentNode.appendChild(A);
              M && M.nodeType === 3 && M.textContent === " ";

            )
              (A._next = M.nextSibling),
                A.parentNode.appendChild(M),
                (M = M.nextSibling);
          else
            A.parentNode._isSplit
              ? ((A._parent = A.parentNode),
                !A.previousSibling &&
                  A.firstChild &&
                  (A.firstChild._isFirst = !0),
                A.nextSibling &&
                  A.nextSibling.textContent === " " &&
                  !A.nextSibling.nextSibling &&
                  k.push(A.nextSibling),
                (A._next =
                  A.nextSibling && A.nextSibling._isFirst
                    ? null
                    : A.nextSibling),
                A.parentNode.removeChild(A),
                C.splice(I--, 1),
                O--)
              : Y ||
                ((N = !A.nextSibling && Bu(A.parentNode, e, D)),
                A.parentNode._parent && A.parentNode._parent.appendChild(A),
                N && A.parentNode.appendChild(Yr.createTextNode(" ")),
                w === "span" && (A.style.display = "inline"),
                _.push(A));
        else
          A.parentNode._isSplit && !A._isSplit && A.innerHTML !== ""
            ? y.push(A)
            : x &&
              !A._isSplit &&
              (w === "span" && (A.style.display = "inline"), _.push(A));
      }
      for (I = k.length; --I > -1; ) k[I].parentNode.removeChild(k[I]);
      if (b) {
        for (
          S &&
            ((B = Yr.createElement(w)),
            e.appendChild(B),
            ($ = B.offsetWidth + "px"),
            (N = B.offsetParent === e ? 0 : e.offsetLeft),
            e.removeChild(B)),
            se = e.style.cssText,
            e.style.cssText = "display:none;";
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (we = D === " " && (!S || (!T && !x)), I = 0; I < b.length; I++) {
          for (
            Q = b[I],
              B = Yr.createElement(w),
              B.style.cssText =
                "display:block;text-align:" +
                g +
                ";position:" +
                (S ? "absolute;" : "relative;"),
              L && (B.className = L + (P ? I + 1 : "")),
              v.push(B),
              O = Q.length,
              M = 0;
            M < O;
            M++
          )
            Q[M].nodeName !== "BR" &&
              ((A = Q[M]),
              B.appendChild(A),
              we && A._wordEnd && B.appendChild(Yr.createTextNode(" ")),
              S &&
                (M === 0 &&
                  ((B.style.top = A._y + "px"), (B.style.left = l + N + "px")),
                (A.style.top = "0px"),
                N && (A.style.left = A._x - N + "px")));
          O === 0
            ? (B.innerHTML = "&nbsp;")
            : !T && !x && (Bp(B), Ru(B, " ", " ")),
            S && ((B.style.width = $), (B.style.height = A._h + "px")),
            e.appendChild(B);
        }
        e.style.cssText = se;
      }
      S &&
        (o > e.clientHeight &&
          ((e.style.height = o - p + "px"),
          e.clientHeight < o && (e.style.height = o + h + "px")),
        a > e.clientWidth &&
          ((e.style.width = a - f + "px"),
          e.clientWidth < a && (e.style.width = a + m + "px"))),
        F && (R ? (e.style.display = R) : e.style.removeProperty("display")),
        lo(i, _),
        T && lo(r, y),
        lo(n, v);
    },
    Np = function (e, t, i, r) {
      var n = t.tag ? t.tag : t.span ? "span" : "div",
        a = t.type || t.split || "chars,words,lines",
        o = ~a.indexOf("chars"),
        u = oo(t),
        l = t.wordDelimiter || " ",
        c = function (S) {
          return S === l || (S === Ip && l === " ");
        },
        h = l !== " " ? "" : u ? "&#173; " : " ",
        m = "</" + n + ">",
        p = 1,
        f = t.specialChars
          ? typeof t.specialChars == "function"
            ? t.specialChars
            : zp
          : null,
        d,
        g,
        _,
        y,
        v,
        D,
        w,
        E,
        b = Yr.createElement("div"),
        T = e.parentNode;
      for (
        T.insertBefore(b, e),
          b.textContent = e.nodeValue,
          T.removeChild(e),
          e = b,
          d = Fu(e),
          w = d.indexOf("<") !== -1,
          t.reduceWhiteSpace !== !1 && (d = d.replace(kp, " ").replace(Lp, "")),
          w && (d = d.split("<").join("{{LT}}")),
          v = d.length,
          g = (d.charAt(0) === " " ? h : "") + i(),
          _ = 0;
        _ < v;
        _++
      )
        if (((D = d.charAt(_)), f && (E = f(d.substr(_), t.specialChars))))
          (D = d.substr(_, E || 1)),
            (g += o && D !== " " ? r() + D + "</" + n + ">" : D),
            (_ += E - 1);
        else if (c(D) && !c(d.charAt(_ - 1)) && _) {
          for (g += p ? m : "", p = 0; c(d.charAt(_ + 1)); ) (g += h), _++;
          _ === v - 1
            ? (g += h)
            : d.charAt(_ + 1) !== ")" && ((g += h + i()), (p = 1));
        } else
          D === "{" && d.substr(_, 6) === "{{LT}}"
            ? ((g += o ? r() + "{{LT}}</" + n + ">" : "{{LT}}"), (_ += 5))
            : (D.charCodeAt(0) >= 55296 && D.charCodeAt(0) <= 56319) ||
              (d.charCodeAt(_ + 1) >= 65024 && d.charCodeAt(_ + 1) <= 65039)
            ? ((y = ((d.substr(_, 12).split(Op) || [])[1] || "").length || 2),
              (g +=
                o && D !== " "
                  ? r() + d.substr(_, y) + "</" + n + ">"
                  : d.substr(_, y)),
              (_ += y - 1))
            : (g += o && D !== " " ? r() + D + "</" + n + ">" : D);
      (e.outerHTML = g + (p ? m : "")), w && Ru(T, "{{LT}}", "<");
    },
    qp = function s(e, t, i, r) {
      var n = Ln(e.childNodes),
        a = n.length,
        o = oo(t),
        u,
        l;
      if (e.nodeType !== 3 || a > 1) {
        for (t.absolute = !1, u = 0; u < a; u++)
          (l = n[u]),
            (l._next = l._isFirst = l._parent = l._wordEnd = null),
            (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) &&
              (o &&
                l.nodeType !== 3 &&
                Iu(l).display === "inline" &&
                ((l.style.display = "inline-block"),
                (l.style.position = "relative")),
              (l._isSplit = !0),
              s(l, t, i, r));
        (t.absolute = o), (e._isSplit = !0);
        return;
      }
      Np(e, t, i, r);
    },
    ri = (function () {
      function s(t, i) {
        Ou || ku(),
          (this.elements = Ln(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = i || {}),
          Lu(this),
          this.split(i);
      }
      var e = s.prototype;
      return (
        (e.split = function (i) {
          this.isSplit && this.revert(),
            (this.vars = i = i || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var r = this.elements.length,
              n = i.tag ? i.tag : i.span ? "span" : "div",
              a = zu(i.wordsClass, n),
              o = zu(i.charsClass, n),
              u,
              l,
              c;
            --r > -1;

          )
            (c = this.elements[r]),
              (this._originals[r] = {
                html: c.innerHTML,
                style: c.getAttribute("style"),
              }),
              (u = c.clientHeight),
              (l = c.clientWidth),
              qp(c, i, a, o),
              $p(c, i, this.chars, this.words, this.lines, l, u);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (e.revert = function () {
          var i = this._originals;
          if (!i) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (r, n) {
              (r.innerHTML = i[n].html),
                r.setAttribute("style", i[n].style || "");
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (s.create = function (i, r) {
          return new s(i, r);
        }),
        s
      );
    })();
  (ri.version = "3.12.7"), (ri.register = ku), q.registerPlugin(X, ri);
  const Vp = () => {
      document.querySelectorAll("[list-enter='wrap']").forEach((e) => {
        e.querySelectorAll("[list-enter='item']").forEach((i) => {
          const r = i.querySelector("[list-enter='icon']"),
            n = i.querySelector("[list-enter='text']"),
            a = i.querySelector("[list-enter='line']"),
            o = new ri(n, { type: "lines", linesClass: "split-line" });
          o.lines.forEach((u) => {
            const l = document.createElement("div");
            l.classList.add("line-wrapper"),
              (l.style.overflow = "hidden"),
              u.parentNode.insertBefore(l, u),
              l.appendChild(u);
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
    Hp = () => {
      Vp();
    },
    Yp = () => {
      console.log("homeInit"), es(), Ls(), ks(), gp(), Pp(), Fp(), Hp();
    },
    Xp = () => {
      const s = document.querySelectorAll('[team-modal="open-trigger"]'),
        e = document.querySelectorAll('[team-modal="modal"]');
      !s ||
        !e ||
        e.forEach((t, i) => {
          const r = t.querySelector('[team-modal="component"]'),
            n = t.querySelector('[team-modal="top-wrap"]'),
            a = t.querySelector('[team-modal="main-info"]'),
            o = t.querySelector('[team-modal="sec-info"]'),
            u = t.querySelectorAll('[team-modal="close-trigger"]');
          if (!r || !n || !a || !o) return;
          q.set(t, {
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
            display: "none",
          }),
            q.set(r, { clipPath: "inset(0% 0% 0% 100%)" }),
            q.set([n, a, o], { y: 100, opacity: 0, filter: "blur(5px)" });
          const l = q.timeline({ paused: !0 }),
            c = q.timeline({ paused: !0 });
          l.to(t, {
            opacity: 1,
            pointerEvents: "auto",
            visibility: "visible",
            display: "block",
            ease: "expo.out",
            duration: 0.6,
          }),
            l.to(
              r,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "expo.inOut",
                duration: 1.2,
              },
              "-=0.75"
            ),
            l.to(
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
            c.to([n, a, o], {
              y: 100,
              opacity: 0,
              filter: "blur(5px)",
              ease: "expo.out",
              duration: 0.8,
              stagger: -0.14,
            }),
            c.to(
              r,
              {
                clipPath: "inset(0% 0% 0% 100%)",
                ease: "expo.inOut",
                duration: 1,
              },
              "-=0.8"
            ),
            c.to(
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
              l.restart();
              const m = dt();
              m && m.stop();
            }),
            u.forEach((m) => {
              m.addEventListener("click", () => {
                c.restart();
                const p = dt();
                p && p.start();
              });
            });
        });
    },
    Wp = () => {
      Xp();
    };
  q.registerPlugin(X);
  const Gp = () => {
      document.querySelectorAll("[about-list='layout']").forEach((e) => {
        const t = e.querySelectorAll("[about-list='item']");
        q.utils.selector(e),
          t.forEach((i, r) => {
            const n = i.querySelector("[about-list='content']"),
              a = i.querySelector("[about-list='inner-line']");
            q.set(n, { opacity: 0.4 }),
              q.set(a, { scaleX: 0, transformOrigin: "left center" });
            const o = 85 - r * 20,
              u = 40 - r * 20;
            q.to(n, {
              opacity: 1,
              scrollTrigger: {
                trigger: i,
                start: `top ${o}%`,
                end: `top ${u}%`,
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
                  end: `top ${u}%`,
                  scrub: !0,
                  markers: !1,
                },
              });
          });
      });
    },
    Up = () => {
      Gp();
    };
  q.registerPlugin(X, ri);
  const jp = () => {
      document.querySelectorAll("[rollover-text='wrap']").forEach((e) => {
        const t = e.querySelector("[rollover-text='wrap-rel']"),
          i =
            t == null ? void 0 : t.querySelector("[rollover-text='text-rel']"),
          r = e.querySelector("[rollover-text='wrap-ab']"),
          n = r == null ? void 0 : r.querySelector("[rollover-text='text-ab']");
        if (!t || !i || !r || !n) return;
        const a = new ri(i, { type: "chars" }),
          o = new ri(n, { type: "chars" }),
          u = 1.8,
          l = "expo.inOut",
          c = 0.08,
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
        p.to(a.chars, { yPercent: h, ease: l, duration: u, stagger: c }, 0),
          p.to(o.chars, { yPercent: m, ease: l, duration: u, stagger: c }, 0);
      });
    },
    Kp = () => {
      jp();
    },
    Zp = () => {
      es(), Ls(), ks(), Wp(), Up(), Kp();
    },
    $u = (s) => document.querySelector(s),
    Qp = (s) => document.querySelectorAll(s),
    Jp = (s, e) => s.classList.add(e),
    eh = () => {
      const s = $u(".contact-form");
      s &&
        s.addEventListener("submit", (e) => {
          e.preventDefault(), console.log("Form submitted!");
        });
    },
    th = () => {
      document.querySelectorAll('[filter-list="group"]').forEach((e) => {
        const t = e.querySelector('[filter-item="current"]'),
          i = e.querySelector("[list-filter='toggle']"),
          r = e.querySelector("[list-filter='dropdown-wrap']"),
          n = e.querySelectorAll("[list-filter='dropdown-option']"),
          a = e.querySelectorAll("[list-filter='target-item']"),
          o = 300,
          u = new Set(),
          l = (f, d) => {
            f.setAttribute("filter-status", d);
          },
          c = (f) => {
            const d = f.querySelectorAll("[filter-name]");
            return Array.from(d).map((g) => {
              var _;
              return (_ = g.getAttribute("filter-name")) == null
                ? void 0
                : _.toLowerCase();
            });
          },
          h = (f) => {
            const d = f.toLowerCase();
            l(i, "not-active"),
              l(r, "not-active"),
              n.forEach((v) => {
                const D = v.getAttribute("filter-target") === f;
                l(v, D ? "active" : "not-active");
              });
            const g = e.querySelector(`[filter-target="${f}"]`);
            g && (t.textContent = g.textContent);
            let _ = 0,
              y = 0;
            a.forEach((v) => {
              v.getAttribute("filter-status") === "active" &&
                (_++,
                u.add(v),
                l(v, "transition-out"),
                setTimeout(() => {
                  v.getAttribute("filter-status") === "transition-out" &&
                    (l(v, "not-active"),
                    u.delete(v),
                    y++,
                    y === _ &&
                      a.forEach((w) => {
                        const E = c(w);
                        (d === "all" || E.includes(d)) &&
                          (u.add(w),
                          l(w, "transition-in"),
                          w.offsetHeight,
                          setTimeout(() => {
                            w.getAttribute("filter-status") ===
                              "transition-in" && l(w, "active"),
                              u.delete(w);
                          }, o));
                      }));
                }, o));
            }),
              _ === 0 &&
                a.forEach((v) => {
                  const D = c(v);
                  (d === "all" || D.includes(d)) &&
                    v.getAttribute("filter-status") === "not-active" &&
                    (u.add(v),
                    l(v, "transition-in"),
                    v.offsetHeight,
                    setTimeout(() => {
                      v.getAttribute("filter-status") === "transition-in" &&
                        l(v, "active"),
                        u.delete(v);
                    }, o));
                });
          },
          m = "all";
        a.forEach((f) => {
          c(f), l(f, "active");
        }),
          n.forEach((f) => {
            const d = f.getAttribute("filter-target") === m;
            l(f, d ? "active" : "not-active");
          }),
          l(i, "not-active"),
          l(r, "not-active"),
          i.addEventListener("click", () => {
            const f = i.getAttribute("filter-status") === "active";
            l(i, f ? "not-active" : "active"),
              l(r, f ? "not-active" : "active");
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
    ih = () => {
      th();
    },
    rh = () => {
      es(), Ls(), ks(), ih();
    };
  q.registerPlugin(X);
  const sh = () => {
      const s = document.querySelectorAll('[hero-parallax-sm="visual"]'),
        e = document.querySelector('[hero-parallax-sm="header"]');
      if (!s.length && !e) return;
      const t = dt == null ? void 0 : dt();
      if (
        (X.defaults({ scroller: t ? t.wrapper : void 0 }),
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
    nh = () => {
      sh();
    },
    ah = () => {
      console.log("blogcmsInit"), es(), Ls(), ks(), nh();
    },
    oh = () => {
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
              u = e.querySelector("[work-accordion='content']"),
              l = u.querySelector("[work-accordion='content-layout']"),
              c = l.offsetHeight;
            let h = !1;
            q.set(l, { opacity: 0, yPercent: 5 }),
              t.addEventListener("click", () => {
                const m = q.timeline();
                h
                  ? (m.to(u, { height: 0, duration: 0.9, ease: "expo.inOut" }),
                    m.to(
                      l,
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
                      l,
                      {
                        opacity: 1,
                        yPercent: 0,
                        duration: 1.2,
                        ease: "expo.inOut",
                      },
                      "<"
                    ),
                    m.to(
                      u,
                      { height: c, duration: 1.2, ease: "expo.inOut" },
                      "<"
                    )),
                  (h = !h);
              });
          });
    },
    lh = () => {
      oh();
    },
    uh = {
      home: Yp,
      about: Zp,
      contact: eh,
      work: rh,
      blog_cms: ah,
      work_cms: () => {
        console.log("workcmsInit"), es(), Ls(), ks(), lh();
      },
    },
    ch = () => {
      const s = document.querySelector("[data-page]"),
        e = s ? s.dataset.page : null,
        t = uh[e];
      t ? t() : console.log(`No specific script for route: ${e}`);
    },
    dh = () => {
      Qp(".footer-accordion").forEach((e) => {
        const t = e.querySelector(".accordion-trigger"),
          i = e.querySelector(".accordion-content");
        !t ||
          !i ||
          t.addEventListener("click", () => {
            i.style.height = i.style.height ? "" : `${i.scrollHeight}px`;
          });
      });
    },
    fh = () => {
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
  q.registerPlugin(X);
  const ph = () => {
      const s = document.querySelector('[nav-link="list"]'),
        e = document.querySelectorAll('[nav-link="item"]'),
        t = document.querySelector("[page='hero']");
      let i = [],
        r = [],
        n = [];
      const a = () => {
        i.forEach((u) => u.kill()),
          (i = []),
          (r = []),
          (n = []),
          s.setAttribute("nav-state", "list"),
          e.forEach((u, l) => {
            const c = u.querySelector('[nav-link="text"]'),
              h = u.querySelector('[nav-link="text-wrap"]'),
              m = u.querySelector('[nav-link="line"]');
            r.push(c), n.push(m);
            const p = document.querySelector('[line-top][nav-link="line"]'),
              f = document.querySelector('[line-middle][nav-link="line"]'),
              d = document.querySelector('[line-bottom][nav-link="line"]'),
              g = h.offsetHeight;
            if (!c || !h) return;
            q.set(c, { clearProps: "all" }),
              q.set(h, { clearProps: "all" }),
              q.set(u, { clearProps: "all" }),
              q.set(m, { clearProps: "all" }),
              q.set(p, { clearProps: "all" }),
              q.set(f, { clearProps: "all" }),
              q.set(d, { clearProps: "all" }),
              h.offsetHeight,
              u.offsetWidth;
            const _ = () => {
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
              v = X.create({
                trigger: t,
                start: "bottom 80%",
                onEnter: _,
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
            i.forEach((u) => u.kill()),
            window.removeEventListener("resize", a);
        }
      );
    },
    hh = () => ph(),
    mh = () => {
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
        s.forEach((u) => {
          u.addEventListener("click", () => {
            a.restart();
            const l = dt();
            l && l.stop();
          });
        }),
        e.forEach((u) => {
          u.addEventListener("click", () => {
            o.restart();
            const l = dt();
            l && l.start();
          });
        });
    },
    gh = () => {
      mh();
    };
  q.registerPlugin(X);
  const vh = () => {
      const s = document.querySelectorAll("[visual-parallax]");
      if (!s.length) return;
      const e = dt == null ? void 0 : dt();
      X.defaults({ scroller: e ? (e == null ? void 0 : e.wrapper) : void 0 }),
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
    yh = () => {
      vh();
    };
  q.registerPlugin(X, ri);
  const _h = () =>
      Vu(this, null, function* () {
        yield document.fonts.ready,
          X.getAll().forEach((e) => {
            e.vars &&
              e.vars.trigger &&
              e.vars.trigger.hasAttribute &&
              e.vars.trigger.hasAttribute("split-text") &&
              e.kill(!0);
          }),
          document.querySelectorAll("[split-text]").forEach((e) => {
            new ri(e, { type: "lines", tagName: "div" }).lines.forEach((n) => {
              const a = document.createElement("div");
              a.setAttribute("data-line-wrapper", ""),
                (a.style.overflow = "clip"),
                (a.style.position = "relative"),
                (a.style.willChange = "transform"),
                n.parentNode.insertBefore(a, n),
                a.appendChild(n.cloneNode(!0));
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
      }),
    Dh = () => {
      _h();
    };
  q.registerPlugin(X);
  const wh = () => {
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
    bh = () => {
      wh();
    };
  q.registerPlugin(X, ri);
  const Sh = () => {
      const s = document.querySelectorAll("[text-scramble]");
      s.length &&
        s.forEach((e) => {
          const i = new ri(e, { type: "chars", charsClass: "char-animate" })
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
    xh = () => {
      Sh();
    };
  q.registerPlugin(X);
  const Eh = () => {
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
          u = i.getAttribute("motion-ease") || s.ease,
          l = i.getAttribute("motion-start") || s.start;
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
                ease: u,
              }))
            : Th(i, r, a, o, u, l);
      }),
        Object.keys(t).forEach((i) => {
          const r = t[i];
          if (r.length > 0) {
            const n = r[0],
              a = n.element.getAttribute("motion-stagger")
                ? parseFloat(n.element.getAttribute("motion-stagger"))
                : s.stagger,
              o = n.element.getAttribute("motion-start") || s.start,
              u = q.timeline({
                scrollTrigger: {
                  trigger: n.element.parentElement,
                  start: o,
                  toggleActions: "play none none reverse",
                  markers: s.markers,
                },
              }),
              l = r
                .filter((h) => h.motionType === "fade")
                .map((h) => h.element),
              c = r
                .filter((h) => h.motionType === "move-up")
                .map((h) => h.element);
            l.length > 0 &&
              u.to(
                l,
                {
                  opacity: 1,
                  duration: n.duration,
                  stagger: a,
                  ease: n.ease,
                  delay: n.delay,
                },
                0
              ),
              c.length > 0 &&
                u.to(
                  c,
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
    Th = (s, e, t, i, r, n) => {
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
    Ch = () => {
      Eh();
    },
    Mh = () => {
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
        e.forEach((u) => {
          u.addEventListener("click", () => {
            n || (a.restart(), (n = !0));
          });
        }),
        t.forEach((u) => {
          u.addEventListener("click", () => {
            n && (o.restart(), (n = !1));
          });
        });
    },
    Ph = () => {
      Mh();
    },
    Ah = () => {
      dh(), fh(), hh(), gh(), yh(), Dh(), bh(), xh(), Ch(), Ph();
    },
    Fh = () => {
      const s = $u(".example-component");
      s &&
        (Jp(s, "is-initialized"),
        s.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Oh = () => {
      Fh();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Ah(), Oh(), ch(), Cp();
  });
});

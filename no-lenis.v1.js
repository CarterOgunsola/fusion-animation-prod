var gh = Object.defineProperty,
  vh = Object.defineProperties;
var yh = Object.getOwnPropertyDescriptors;
var Ou = Object.getOwnPropertySymbols;
var _h = Object.prototype.hasOwnProperty,
  Dh = Object.prototype.propertyIsEnumerable;
var dt = Math.pow,
  ku = (ft, tt, Mt) =>
    tt in ft
      ? gh(ft, tt, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Mt,
        })
      : (ft[tt] = Mt),
  so = (ft, tt) => {
    for (var Mt in tt || (tt = {})) _h.call(tt, Mt) && ku(ft, Mt, tt[Mt]);
    if (Ou) for (var Mt of Ou(tt)) Dh.call(tt, Mt) && ku(ft, Mt, tt[Mt]);
    return ft;
  },
  no = (ft, tt) => vh(ft, yh(tt));
(function (ft) {
  typeof define == "function" && define.amd ? define(ft) : ft();
})(function () {
  "use strict";
  function ft(n) {
    return (
      n !== null &&
      typeof n == "object" &&
      "constructor" in n &&
      n.constructor === Object
    );
  }
  function tt(n, e) {
    n === void 0 && (n = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof n[i] == "undefined"
          ? (n[i] = e[i])
          : ft(e[i]) &&
            ft(n[i]) &&
            Object.keys(e[i]).length > 0 &&
            tt(n[i], e[i]);
      });
  }
  const Mt = {
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
  function He() {
    const n = typeof document != "undefined" ? document : {};
    return tt(n, Mt), n;
  }
  const Lu = {
    document: Mt,
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
    requestAnimationFrame(n) {
      return typeof setTimeout == "undefined" ? (n(), null) : setTimeout(n, 0);
    },
    cancelAnimationFrame(n) {
      typeof setTimeout != "undefined" && clearTimeout(n);
    },
  };
  function De() {
    const n = typeof window != "undefined" ? window : {};
    return tt(n, Lu), n;
  }
  function Pi(n) {
    return (
      n === void 0 && (n = ""),
      n
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Iu(n) {
    const e = n;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch (i) {}
      try {
        delete e[t];
      } catch (i) {}
    });
  }
  function Xi(n, e) {
    return e === void 0 && (e = 0), setTimeout(n, e);
  }
  function Yt() {
    return Date.now();
  }
  function zu(n) {
    const e = De();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(n, null)),
      !t && n.currentStyle && (t = n.currentStyle),
      t || (t = n.style),
      t
    );
  }
  function Fn(n, e) {
    e === void 0 && (e = "x");
    const t = De();
    let i, r, s;
    const a = zu(n);
    return (
      t.WebKitCSSMatrix
        ? ((r = a.transform || a.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((o) => o.replace(",", "."))
              .join(", ")),
          (s = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
        : ((s =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = s.toString().split(","))),
      e === "x" &&
        (t.WebKitCSSMatrix
          ? (r = s.m41)
          : i.length === 16
          ? (r = parseFloat(i[12]))
          : (r = parseFloat(i[4]))),
      e === "y" &&
        (t.WebKitCSSMatrix
          ? (r = s.m42)
          : i.length === 16
          ? (r = parseFloat(i[13]))
          : (r = parseFloat(i[5]))),
      r || 0
    );
  }
  function Xr(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      n.constructor &&
      Object.prototype.toString.call(n).slice(8, -1) === "Object"
    );
  }
  function Ru(n) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? n instanceof HTMLElement
      : n && (n.nodeType === 1 || n.nodeType === 11);
  }
  function Pt() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Ru(i)) {
        const r = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, a = r.length; s < a; s += 1) {
          const o = r[s],
            u = Object.getOwnPropertyDescriptor(i, o);
          u !== void 0 &&
            u.enumerable &&
            (Xr(n[o]) && Xr(i[o])
              ? i[o].__swiper__
                ? (n[o] = i[o])
                : Pt(n[o], i[o])
              : !Xr(n[o]) && Xr(i[o])
              ? ((n[o] = {}), i[o].__swiper__ ? (n[o] = i[o]) : Pt(n[o], i[o]))
              : (n[o] = i[o]));
        }
      }
    }
    return n;
  }
  function Gr(n, e, t) {
    n.style.setProperty(e, t);
  }
  function ao(n) {
    let { swiper: e, targetPosition: t, side: i } = n;
    const r = De(),
      s = -e.translate;
    let a = null,
      o;
    const u = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > s ? "next" : "prev",
      c = (m, p) => (l === "next" && m >= p) || (l === "prev" && m <= p),
      h = () => {
        (o = new Date().getTime()), a === null && (a = o);
        const m = Math.max(Math.min((o - a) / u, 1), 0),
          p = 0.5 - Math.cos(m * Math.PI) / 2;
        let f = s + p * (t - s);
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
  function Gi(n) {
    return (
      n.querySelector(".swiper-slide-transform") ||
      (n.shadowRoot && n.shadowRoot.querySelector(".swiper-slide-transform")) ||
      n
    );
  }
  function je(n, e) {
    e === void 0 && (e = "");
    const t = De(),
      i = [...n.children];
    return (
      t.HTMLSlotElement &&
        n instanceof HTMLSlotElement &&
        i.push(...n.assignedElements()),
      e ? i.filter((r) => r.matches(e)) : i
    );
  }
  function Bu(n, e) {
    const t = [e];
    for (; t.length > 0; ) {
      const i = t.shift();
      if (n === i) return !0;
      t.push(
        ...i.children,
        ...(i.shadowRoot ? i.shadowRoot.children : []),
        ...(i.assignedElements ? i.assignedElements() : [])
      );
    }
  }
  function $u(n, e) {
    const t = De();
    let i = e.contains(n);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(n)), i || (i = Bu(n, e))),
      i
    );
  }
  function Rs(n) {
    try {
      console.warn(n);
      return;
    } catch (e) {}
  }
  function At(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...(Array.isArray(e) ? e : Pi(e))), t;
  }
  function Bs(n) {
    const e = De(),
      t = He(),
      i = n.getBoundingClientRect(),
      r = t.body,
      s = n.clientTop || r.clientTop || 0,
      a = n.clientLeft || r.clientLeft || 0,
      o = n === e ? e.scrollY : n.scrollTop,
      u = n === e ? e.scrollX : n.scrollLeft;
    return { top: i.top + o - s, left: i.left + u - a };
  }
  function Nu(n, e) {
    const t = [];
    for (; n.previousElementSibling; ) {
      const i = n.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function qu(n, e) {
    const t = [];
    for (; n.nextElementSibling; ) {
      const i = n.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function Ai(n, e) {
    return De().getComputedStyle(n, null).getPropertyValue(e);
  }
  function Wr(n) {
    let e = n,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Wi(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function Ur(n, e) {
    function t(i) {
      i.target === n &&
        (e.call(n, i), n.removeEventListener("transitionend", t));
    }
    e && n.addEventListener("transitionend", t);
  }
  function On(n, e, t) {
    const i = De();
    return (
      n[e === "width" ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        i
          .getComputedStyle(n, null)
          .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
      ) +
      parseFloat(
        i
          .getComputedStyle(n, null)
          .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
      )
    );
  }
  function ne(n) {
    return (Array.isArray(n) ? n : [n]).filter((e) => !!e);
  }
  function $s(n) {
    return (e) =>
      Math.abs(e) > 0 &&
      n.browser &&
      n.browser.need3dFix &&
      Math.abs(e) % 90 === 0
        ? e + 0.001
        : e;
  }
  let kn;
  function Vu() {
    const n = De(),
      e = He();
    return {
      smoothScroll:
        e.documentElement &&
        e.documentElement.style &&
        "scrollBehavior" in e.documentElement.style,
      touch: !!(
        "ontouchstart" in n ||
        (n.DocumentTouch && e instanceof n.DocumentTouch)
      ),
    };
  }
  function oo() {
    return kn || (kn = Vu()), kn;
  }
  let Ln;
  function Hu(n) {
    let { userAgent: e } = n === void 0 ? {} : n;
    const t = oo(),
      i = De(),
      r = i.navigator.platform,
      s = e || i.navigator.userAgent,
      a = { ios: !1, android: !1 },
      o = i.screen.width,
      u = i.screen.height,
      l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = s.match(/(iPad).*OS\s([\d_]+)/);
    const h = s.match(/(iPod)(.*OS\s([\d_]+))?/),
      m = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
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
        ((c = s.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (f = !1)),
      l && !p && ((a.os = "android"), (a.android = !0)),
      (c || m || h) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function lo(n) {
    return n === void 0 && (n = {}), Ln || (Ln = Hu(n)), Ln;
  }
  let In;
  function Yu() {
    const n = De(),
      e = lo();
    let t = !1;
    function i() {
      const o = n.navigator.userAgent.toLowerCase();
      return (
        o.indexOf("safari") >= 0 &&
        o.indexOf("chrome") < 0 &&
        o.indexOf("android") < 0
      );
    }
    if (i()) {
      const o = String(n.navigator.userAgent);
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
        n.navigator.userAgent
      ),
      s = i(),
      a = s || (r && e.ios);
    return {
      isSafari: t || s,
      needPerspectiveFix: t,
      need3dFix: a,
      isWebView: r,
    };
  }
  function uo() {
    return In || (In = Yu()), In;
  }
  function Xu(n) {
    let { swiper: e, on: t, emit: i } = n;
    const r = De();
    let s = null,
      a = null;
    const o = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
      },
      u = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((s = new ResizeObserver((h) => {
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
          s.observe(e.el));
      },
      l = () => {
        a && r.cancelAnimationFrame(a),
          s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
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
  function Gu(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = [],
      a = De(),
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
          s.push(p);
      },
      u = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = Wi(e.hostEl);
            for (let h = 0; h < c.length; h += 1) o(c[h]);
          }
          o(e.hostEl, { childList: e.params.observeSlideChildren }),
            o(e.wrapperEl, { attributes: !1 });
        }
      },
      l = () => {
        s.forEach((c) => {
          c.disconnect();
        }),
          s.splice(0, s.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", u),
      i("destroy", l);
  }
  var Wu = {
    on(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const r = t ? "unshift" : "push";
      return (
        n.split(" ").forEach((s) => {
          i.eventsListeners[s] || (i.eventsListeners[s] = []),
            i.eventsListeners[s][r](e);
        }),
        i
      );
    },
    once(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      function r() {
        i.off(n, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var s = arguments.length, a = new Array(s), o = 0; o < s; o++)
          a[o] = arguments[o];
        e.apply(i, a);
      }
      return (r.__emitterProxy = e), i.on(n, r, t);
    },
    onAny(n, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof n != "function") return t;
      const i = e ? "unshift" : "push";
      return (
        t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t
      );
    },
    offAny(n) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(n);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(n, e) {
      const t = this;
      return (
        !t.eventsListeners ||
          t.destroyed ||
          !t.eventsListeners ||
          n.split(" ").forEach((i) => {
            typeof e == "undefined"
              ? (t.eventsListeners[i] = [])
              : t.eventsListeners[i] &&
                t.eventsListeners[i].forEach((r, s) => {
                  (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                    t.eventsListeners[i].splice(s, 1);
                });
          }),
        t
      );
    },
    emit() {
      const n = this;
      if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
      let e, t, i;
      for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++)
        s[a] = arguments[a];
      return (
        typeof s[0] == "string" || Array.isArray(s[0])
          ? ((e = s[0]), (t = s.slice(1, s.length)), (i = n))
          : ((e = s[0].events), (t = s[0].data), (i = s[0].context || n)),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach((u) => {
          n.eventsAnyListeners &&
            n.eventsAnyListeners.length &&
            n.eventsAnyListeners.forEach((l) => {
              l.apply(i, [u, ...t]);
            }),
            n.eventsListeners &&
              n.eventsListeners[u] &&
              n.eventsListeners[u].forEach((l) => {
                l.apply(i, t);
              });
        }),
        n
      );
    },
  };
  function Uu() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width != "undefined" && n.params.width !== null
      ? (e = n.params.width)
      : (e = i.clientWidth),
      typeof n.params.height != "undefined" && n.params.height !== null
        ? (t = n.params.height)
        : (t = i.clientHeight),
      !((e === 0 && n.isHorizontal()) || (t === 0 && n.isVertical())) &&
        ((e =
          e -
          parseInt(Ai(i, "padding-left") || 0, 10) -
          parseInt(Ai(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(Ai(i, "padding-top") || 0, 10) -
          parseInt(Ai(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(n, {
          width: e,
          height: t,
          size: n.isHorizontal() ? e : t,
        }));
  }
  function ju() {
    const n = this;
    function e(x, k) {
      return parseFloat(x.getPropertyValue(n.getDirectionLabel(k)) || 0);
    }
    const t = n.params,
      { wrapperEl: i, slidesEl: r, size: s, rtlTranslate: a, wrongRTL: o } = n,
      u = n.virtual && t.virtual.enabled,
      l = u ? n.virtual.slides.length : n.slides.length,
      c = je(r, `.${n.params.slideClass}, swiper-slide`),
      h = u ? n.virtual.slides.length : c.length;
    let m = [];
    const p = [],
      f = [];
    let d = t.slidesOffsetBefore;
    typeof d == "function" && (d = t.slidesOffsetBefore.call(n));
    let g = t.slidesOffsetAfter;
    typeof g == "function" && (g = t.slidesOffsetAfter.call(n));
    const _ = n.snapGrid.length,
      y = n.slidesGrid.length;
    let v = t.spaceBetween,
      D = -d,
      w = 0,
      S = 0;
    if (typeof s == "undefined") return;
    typeof v == "string" && v.indexOf("%") >= 0
      ? (v = (parseFloat(v.replace("%", "")) / 100) * s)
      : typeof v == "string" && (v = parseFloat(v)),
      (n.virtualSize = -v),
      c.forEach((x) => {
        a ? (x.style.marginLeft = "") : (x.style.marginRight = ""),
          (x.style.marginBottom = ""),
          (x.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (Gr(i, "--swiper-centered-offset-before", ""),
        Gr(i, "--swiper-centered-offset-after", ""));
    const b = t.grid && t.grid.rows > 1 && n.grid;
    b ? n.grid.initSlides(c) : n.grid && n.grid.unsetSlides();
    let T;
    const E =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (x) => typeof t.breakpoints[x].slidesPerView != "undefined"
      ).length > 0;
    for (let x = 0; x < h; x += 1) {
      T = 0;
      let k;
      if (
        (c[x] && (k = c[x]),
        b && n.grid.updateSlide(x, k, c),
        !(c[x] && Ai(k, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          E && (c[x].style[n.getDirectionLabel("width")] = "");
          const P = getComputedStyle(k),
            L = k.style.transform,
            F = k.style.webkitTransform;
          if (
            (L && (k.style.transform = "none"),
            F && (k.style.webkitTransform = "none"),
            t.roundLengths)
          )
            T = n.isHorizontal() ? On(k, "width") : On(k, "height");
          else {
            const R = e(P, "width"),
              I = e(P, "padding-left"),
              M = e(P, "padding-right"),
              O = e(P, "margin-left"),
              A = e(P, "margin-right"),
              C = P.getPropertyValue("box-sizing");
            if (C && C === "border-box") T = R + O + A;
            else {
              const { clientWidth: Y, offsetWidth: Z } = k;
              T = R + I + M + O + A + (Z - Y);
            }
          }
          L && (k.style.transform = L),
            F && (k.style.webkitTransform = F),
            t.roundLengths && (T = Math.floor(T));
        } else
          (T = (s - (t.slidesPerView - 1) * v) / t.slidesPerView),
            t.roundLengths && (T = Math.floor(T)),
            c[x] && (c[x].style[n.getDirectionLabel("width")] = `${T}px`);
        c[x] && (c[x].swiperSlideSize = T),
          f.push(T),
          t.centeredSlides
            ? ((D = D + T / 2 + w / 2 + v),
              w === 0 && x !== 0 && (D = D - s / 2 - v),
              x === 0 && (D = D - s / 2 - v),
              Math.abs(D) < 1 / 1e3 && (D = 0),
              t.roundLengths && (D = Math.floor(D)),
              S % t.slidesPerGroup === 0 && m.push(D),
              p.push(D))
            : (t.roundLengths && (D = Math.floor(D)),
              (S - Math.min(n.params.slidesPerGroupSkip, S)) %
                n.params.slidesPerGroup ===
                0 && m.push(D),
              p.push(D),
              (D = D + T + v)),
          (n.virtualSize += T + v),
          (w = T),
          (S += 1);
      }
    }
    if (
      ((n.virtualSize = Math.max(n.virtualSize, s) + g),
      a &&
        o &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${n.virtualSize + v}px`),
      t.setWrapperSize &&
        (i.style[n.getDirectionLabel("width")] = `${n.virtualSize + v}px`),
      b && n.grid.updateWrapperSize(T, m),
      !t.centeredSlides)
    ) {
      const x = [];
      for (let k = 0; k < m.length; k += 1) {
        let P = m[k];
        t.roundLengths && (P = Math.floor(P)),
          m[k] <= n.virtualSize - s && x.push(P);
      }
      (m = x),
        Math.floor(n.virtualSize - s) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(n.virtualSize - s);
    }
    if (u && t.loop) {
      const x = f[0] + v;
      if (t.slidesPerGroup > 1) {
        const k = Math.ceil(
            (n.virtual.slidesBefore + n.virtual.slidesAfter) / t.slidesPerGroup
          ),
          P = x * t.slidesPerGroup;
        for (let L = 0; L < k; L += 1) m.push(m[m.length - 1] + P);
      }
      for (
        let k = 0;
        k < n.virtual.slidesBefore + n.virtual.slidesAfter;
        k += 1
      )
        t.slidesPerGroup === 1 && m.push(m[m.length - 1] + x),
          p.push(p[p.length - 1] + x),
          (n.virtualSize += x);
    }
    if ((m.length === 0 && (m = [0]), v !== 0)) {
      const x =
        n.isHorizontal() && a
          ? "marginLeft"
          : n.getDirectionLabel("marginRight");
      c.filter((k, P) =>
        !t.cssMode || t.loop ? !0 : P !== c.length - 1
      ).forEach((k) => {
        k.style[x] = `${v}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let x = 0;
      f.forEach((P) => {
        x += P + (v || 0);
      }),
        (x -= v);
      const k = x > s ? x - s : 0;
      m = m.map((P) => (P <= 0 ? -d : P > k ? k + g : P));
    }
    if (t.centerInsufficientSlides) {
      let x = 0;
      f.forEach((P) => {
        x += P + (v || 0);
      }),
        (x -= v);
      const k = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (x + k < s) {
        const P = (s - x - k) / 2;
        m.forEach((L, F) => {
          m[F] = L - P;
        }),
          p.forEach((L, F) => {
            p[F] = L + P;
          });
      }
    }
    if (
      (Object.assign(n, {
        slides: c,
        snapGrid: m,
        slidesGrid: p,
        slidesSizesGrid: f,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      Gr(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        Gr(
          i,
          "--swiper-centered-offset-after",
          `${n.size / 2 - f[f.length - 1] / 2}px`
        );
      const x = -n.snapGrid[0],
        k = -n.slidesGrid[0];
      (n.snapGrid = n.snapGrid.map((P) => P + x)),
        (n.slidesGrid = n.slidesGrid.map((P) => P + k));
    }
    if (
      (h !== l && n.emit("slidesLengthChange"),
      m.length !== _ &&
        (n.params.watchOverflow && n.checkOverflow(),
        n.emit("snapGridLengthChange")),
      p.length !== y && n.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && n.updateSlidesOffset(),
      n.emit("slidesUpdated"),
      !u && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const x = `${t.containerModifierClass}backface-hidden`,
        k = n.el.classList.contains(x);
      h <= t.maxBackfaceHiddenSlides
        ? k || n.el.classList.add(x)
        : k && n.el.classList.remove(x);
    }
  }
  function Ku(n) {
    const e = this,
      t = [],
      i = e.virtual && e.params.virtual.enabled;
    let r = 0,
      s;
    typeof n == "number"
      ? e.setTransition(n)
      : n === !0 && e.setTransition(e.params.speed);
    const a = (o) => (i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o]);
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((o) => {
          t.push(o);
        });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const o = e.activeIndex + s;
          if (o > e.slides.length && !i) break;
          t.push(a(o));
        }
    else t.push(a(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
      if (typeof t[s] != "undefined") {
        const o = t[s].offsetHeight;
        r = o > r ? o : r;
      }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
  }
  function Zu() {
    const n = this,
      e = n.slides,
      t = n.isElement
        ? n.isHorizontal()
          ? n.wrapperEl.offsetLeft
          : n.wrapperEl.offsetTop
        : 0;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset =
        (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
        t -
        n.cssOverflowAdjustment();
  }
  const co = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function Qu(n) {
    n === void 0 && (n = (this && this.translate) || 0);
    const e = this,
      t = e.params,
      { slides: i, rtlTranslate: r, snapGrid: s } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
    let a = -n;
    r && (a = n), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
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
          (a - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (l.swiperSlideSize + o),
        p = -(a - c),
        f = p + e.slidesSizesGrid[u],
        d = p >= 0 && p <= e.size - e.slidesSizesGrid[u],
        g =
          (p >= 0 && p < e.size - 1) ||
          (f > 1 && f <= e.size) ||
          (p <= 0 && f >= e.size);
      g && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(u)),
        co(l, g, t.slideVisibleClass),
        co(l, d, t.slideFullyVisibleClass),
        (l.progress = r ? -h : h),
        (l.originalProgress = r ? -m : m);
    }
  }
  function Ju(n) {
    const e = this;
    if (typeof n == "undefined") {
      const c = e.rtlTranslate ? -1 : 1;
      n = (e && e.translate && e.translate * c) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: s, isEnd: a, progressLoop: o } = e;
    const u = s,
      l = a;
    if (i === 0) (r = 0), (s = !0), (a = !0);
    else {
      r = (n - e.minTranslate()) / i;
      const c = Math.abs(n - e.minTranslate()) < 1,
        h = Math.abs(n - e.maxTranslate()) < 1;
      (s = c || r <= 0), (a = h || r >= 1), c && (r = 0), h && (r = 1);
    }
    if (t.loop) {
      const c = e.getSlideIndexByData(0),
        h = e.getSlideIndexByData(e.slides.length - 1),
        m = e.slidesGrid[c],
        p = e.slidesGrid[h],
        f = e.slidesGrid[e.slidesGrid.length - 1],
        d = Math.abs(n);
      d >= m ? (o = (d - m) / f) : (o = (d + f - p) / f), o > 1 && (o -= 1);
    }
    Object.assign(e, {
      progress: r,
      progressLoop: o,
      isBeginning: s,
      isEnd: a,
    }),
      (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
        e.updateSlidesProgress(n),
      s && !u && e.emit("reachBeginning toEdge"),
      a && !l && e.emit("reachEnd toEdge"),
      ((u && !s) || (l && !a)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  const zn = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function ec() {
    const n = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = n,
      s = n.virtual && t.virtual.enabled,
      a = n.grid && t.grid && t.grid.rows > 1,
      o = (h) => je(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
    let u, l, c;
    if (s)
      if (t.loop) {
        let h = r - n.virtual.slidesBefore;
        h < 0 && (h = n.virtual.slides.length + h),
          h >= n.virtual.slides.length && (h -= n.virtual.slides.length),
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
        ((c = qu(u, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (l = Nu(u, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !l === 0 && (l = e[e.length - 1]))),
      e.forEach((h) => {
        zn(h, h === u, t.slideActiveClass),
          zn(h, h === c, t.slideNextClass),
          zn(h, h === l, t.slidePrevClass);
      }),
      n.emitSlidesClasses();
  }
  const Ns = (n, e) => {
      if (!n || n.destroyed || !n.params) return;
      const t = () =>
          n.isElement ? "swiper-slide" : `.${n.params.slideClass}`,
        i = e.closest(t());
      if (i) {
        let r = i.querySelector(`.${n.params.lazyPreloaderClass}`);
        !r &&
          n.isElement &&
          (i.shadowRoot
            ? (r = i.shadowRoot.querySelector(
                `.${n.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                i.shadowRoot &&
                  ((r = i.shadowRoot.querySelector(
                    `.${n.params.lazyPreloaderClass}`
                  )),
                  r && r.remove());
              })),
          r && r.remove();
      }
    },
    Rn = (n, e) => {
      if (!n.slides[e]) return;
      const t = n.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    Bn = (n) => {
      if (!n || n.destroyed || !n.params) return;
      let e = n.params.lazyPreloadPrevNext;
      const t = n.slides.length;
      if (!t || !e || e < 0) return;
      e = Math.min(e, t);
      const i =
          n.params.slidesPerView === "auto"
            ? n.slidesPerViewDynamic()
            : Math.ceil(n.params.slidesPerView),
        r = n.activeIndex;
      if (n.params.grid && n.params.grid.rows > 1) {
        const a = r,
          o = [a - e];
        o.push(...Array.from({ length: e }).map((u, l) => a + i + l)),
          n.slides.forEach((u, l) => {
            o.includes(u.column) && Rn(n, l);
          });
        return;
      }
      const s = r + i - 1;
      if (n.params.rewind || n.params.loop)
        for (let a = r - e; a <= s + e; a += 1) {
          const o = ((a % t) + t) % t;
          (o < r || o > s) && Rn(n, o);
        }
      else
        for (let a = Math.max(r - e, 0); a <= Math.min(s + e, t - 1); a += 1)
          a !== r && (a > s || a < r) && Rn(n, a);
    };
  function tc(n) {
    const { slidesGrid: e, params: t } = n,
      i = n.rtlTranslate ? n.translate : -n.translate;
    let r;
    for (let s = 0; s < e.length; s += 1)
      typeof e[s + 1] != "undefined"
        ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2
          ? (r = s)
          : i >= e[s] && i < e[s + 1] && (r = s + 1)
        : i >= e[s] && (r = s);
    return (
      t.normalizeSlideIndex && (r < 0 || typeof r == "undefined") && (r = 0), r
    );
  }
  function ic(n) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: i,
        params: r,
        activeIndex: s,
        realIndex: a,
        snapIndex: o,
      } = e;
    let u = n,
      l;
    const c = (p) => {
      let f = p - e.virtual.slidesBefore;
      return (
        f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        f
      );
    };
    if ((typeof u == "undefined" && (u = tc(e)), i.indexOf(t) >= 0))
      l = i.indexOf(t);
    else {
      const p = Math.min(r.slidesPerGroupSkip, u);
      l = p + Math.floor((u - p) / r.slidesPerGroup);
    }
    if ((l >= i.length && (l = i.length - 1), u === s && !e.params.loop)) {
      l !== o && ((e.snapIndex = l), e.emit("snapIndexChange"));
      return;
    }
    if (u === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
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
      previousIndex: s,
      activeIndex: u,
    }),
      e.initialized && Bn(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (a !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function rc(n, e) {
    const t = this,
      i = t.params;
    let r = n.closest(`.${i.slideClass}, swiper-slide`);
    !r &&
      t.isElement &&
      e &&
      e.length > 1 &&
      e.includes(n) &&
      [...e.slice(e.indexOf(n) + 1, e.length)].forEach((o) => {
        !r &&
          o.matches &&
          o.matches(`.${i.slideClass}, swiper-slide`) &&
          (r = o);
      });
    let s = !1,
      a;
    if (r) {
      for (let o = 0; o < t.slides.length; o += 1)
        if (t.slides[o] === r) {
          (s = !0), (a = o);
          break;
        }
    }
    if (r && s)
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
  var sc = {
    updateSize: Uu,
    updateSlides: ju,
    updateAutoHeight: Ku,
    updateSlidesOffset: Zu,
    updateSlidesProgress: Qu,
    updateProgress: Ju,
    updateSlidesClasses: ec,
    updateActiveIndex: ic,
    updateClickedSlide: rc,
  };
  function nc(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let a = Fn(s, n);
    return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
  }
  function ac(n, e) {
    const t = this,
      { rtlTranslate: i, params: r, wrapperEl: s, progress: a } = t;
    let o = 0,
      u = 0;
    const l = 0;
    t.isHorizontal() ? (o = i ? -n : n) : (u = n),
      r.roundLengths && ((o = Math.floor(o)), (u = Math.floor(u))),
      (t.previousTranslate = t.translate),
      (t.translate = t.isHorizontal() ? o : u),
      r.cssMode
        ? (s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
            ? -o
            : -u)
        : r.virtualTranslate ||
          (t.isHorizontal()
            ? (o -= t.cssOverflowAdjustment())
            : (u -= t.cssOverflowAdjustment()),
          (s.style.transform = `translate3d(${o}px, ${u}px, ${l}px)`));
    let c;
    const h = t.maxTranslate() - t.minTranslate();
    h === 0 ? (c = 0) : (c = (n - t.minTranslate()) / h),
      c !== a && t.updateProgress(n),
      t.emit("setTranslate", t.translate, e);
  }
  function oc() {
    return -this.snapGrid[0];
  }
  function lc() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function uc(n, e, t, i, r) {
    n === void 0 && (n = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const s = this,
      { params: a, wrapperEl: o } = s;
    if (s.animating && a.preventInteractionOnTransition) return !1;
    const u = s.minTranslate(),
      l = s.maxTranslate();
    let c;
    if (
      (i && n > u ? (c = u) : i && n < l ? (c = l) : (c = n),
      s.updateProgress(c),
      a.cssMode)
    ) {
      const h = s.isHorizontal();
      if (e === 0) o[h ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!s.support.smoothScroll)
          return (
            ao({ swiper: s, targetPosition: -c, side: h ? "left" : "top" }), !0
          );
        o.scrollTo({ [h ? "left" : "top"]: -c, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(c),
          t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
        : (s.setTransition(e),
          s.setTranslate(c),
          t &&
            (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
          s.animating ||
            ((s.animating = !0),
            s.onTranslateToWrapperTransitionEnd ||
              (s.onTranslateToWrapperTransitionEnd = function (m) {
                !s ||
                  s.destroyed ||
                  (m.target === this &&
                    (s.wrapperEl.removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    (s.animating = !1),
                    t && s.emit("transitionEnd")));
              }),
            s.wrapperEl.addEventListener(
              "transitionend",
              s.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var cc = {
    getTranslate: nc,
    setTranslate: ac,
    minTranslate: oc,
    maxTranslate: lc,
    translateTo: uc,
  };
  function dc(n, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${n}ms`),
      (t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : "")),
      t.emit("setTransition", n, e);
  }
  function fo(n) {
    let { swiper: e, runCallbacks: t, direction: i, step: r } = n;
    const { activeIndex: s, previousIndex: a } = e;
    let o = i;
    if (
      (o || (s > a ? (o = "next") : s < a ? (o = "prev") : (o = "reset")),
      e.emit(`transition${r}`),
      t && s !== a)
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
  function fc(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      fo({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
  }
  function pc(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        fo({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
  }
  var hc = { setTransition: dc, transitionStart: fc, transitionEnd: pc };
  function mc(n, e, t, i, r) {
    n === void 0 && (n = 0),
      t === void 0 && (t = !0),
      typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    let a = n;
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
    } = s;
    if (
      (!f && !i && !r) ||
      s.destroyed ||
      (s.animating && o.preventInteractionOnTransition)
    )
      return !1;
    typeof e == "undefined" && (e = s.params.speed);
    const d = Math.min(s.params.slidesPerGroupSkip, a);
    let g = d + Math.floor((a - d) / s.params.slidesPerGroup);
    g >= u.length && (g = u.length - 1);
    const _ = -u[g];
    if (o.normalizeSlideIndex)
      for (let b = 0; b < l.length; b += 1) {
        const T = -Math.floor(_ * 100),
          E = Math.floor(l[b] * 100),
          x = Math.floor(l[b + 1] * 100);
        typeof l[b + 1] != "undefined"
          ? T >= E && T < x - (x - E) / 2
            ? (a = b)
            : T >= E && T < x && (a = b + 1)
          : T >= E && (a = b);
      }
    if (
      s.initialized &&
      a !== h &&
      ((!s.allowSlideNext &&
        (m
          ? _ > s.translate && _ > s.minTranslate()
          : _ < s.translate && _ < s.minTranslate())) ||
        (!s.allowSlidePrev &&
          _ > s.translate &&
          _ > s.maxTranslate() &&
          (h || 0) !== a))
    )
      return !1;
    a !== (c || 0) && t && s.emit("beforeSlideChangeStart"),
      s.updateProgress(_);
    let y;
    a > h ? (y = "next") : a < h ? (y = "prev") : (y = "reset");
    const v = s.virtual && s.params.virtual.enabled;
    if (!(v && r) && ((m && -_ === s.translate) || (!m && _ === s.translate)))
      return (
        s.updateActiveIndex(a),
        o.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        o.effect !== "slide" && s.setTranslate(_),
        y !== "reset" && (s.transitionStart(t, y), s.transitionEnd(t, y)),
        !1
      );
    if (o.cssMode) {
      const b = s.isHorizontal(),
        T = m ? _ : -_;
      if (e === 0)
        v &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          v && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                p[b ? "scrollLeft" : "scrollTop"] = T;
              }))
            : (p[b ? "scrollLeft" : "scrollTop"] = T),
          v &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._immediateVirtual = !1);
            });
      else {
        if (!s.support.smoothScroll)
          return (
            ao({ swiper: s, targetPosition: T, side: b ? "left" : "top" }), !0
          );
        p.scrollTo({ [b ? "left" : "top"]: T, behavior: "smooth" });
      }
      return !0;
    }
    const S = uo().isSafari;
    return (
      v && !r && S && s.isElement && s.virtual.update(!1, !1, a),
      s.setTransition(e),
      s.setTranslate(_),
      s.updateActiveIndex(a),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, i),
      s.transitionStart(t, y),
      e === 0
        ? s.transitionEnd(t, y)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (T) {
              !s ||
                s.destroyed ||
                (T.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(t, y)));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function gc(n, e, t, i) {
    n === void 0 && (n = 0),
      t === void 0 && (t = !0),
      typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    if (r.destroyed) return;
    typeof e == "undefined" && (e = r.params.speed);
    const s = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = n;
    if (r.params.loop)
      if (r.virtual && r.params.virtual.enabled) a = a + r.virtual.slidesBefore;
      else {
        let o;
        if (s) {
          const m = a * r.params.grid.rows;
          o = r.slides.find(
            (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
          ).column;
        } else o = r.getSlideIndexByData(a);
        const u = s
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
          i && l && r.params.slidesPerView !== "auto" && !s && (h = !1),
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
        if (s) {
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
  function vc(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      { enabled: r, params: s, animating: a } = i;
    if (!r || i.destroyed) return i;
    typeof n == "undefined" && (n = i.params.speed);
    let o = s.slidesPerGroup;
    s.slidesPerView === "auto" &&
      s.slidesPerGroup === 1 &&
      s.slidesPerGroupAuto &&
      (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const u = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
      l = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (a && !l && s.loopPreventsSliding) return !1;
      if (
        (i.loopFix({ direction: "next" }),
        (i._clientLeft = i.wrapperEl.clientLeft),
        i.activeIndex === i.slides.length - 1 && s.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + u, n, e, t);
          }),
          !0
        );
    }
    return s.rewind && i.isEnd
      ? i.slideTo(0, n, e, t)
      : i.slideTo(i.activeIndex + u, n, e, t);
  }
  function yc(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: r,
        snapGrid: s,
        slidesGrid: a,
        rtlTranslate: o,
        enabled: u,
        animating: l,
      } = i;
    if (!u || i.destroyed) return i;
    typeof n == "undefined" && (n = i.params.speed);
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
      f = s.map((y) => m(y)),
      d = r.freeMode && r.freeMode.enabled;
    let g = s[f.indexOf(p) - 1];
    if (typeof g == "undefined" && (r.cssMode || d)) {
      let y;
      s.forEach((v, D) => {
        p >= v && (y = D);
      }),
        typeof y != "undefined" && (g = d ? s[y] : s[y > 0 ? y - 1 : y]);
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
      return i.slideTo(y, n, e, t);
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(_, n, e, t);
        }),
        !0
      );
    return i.slideTo(_, n, e, t);
  }
  function _c(n, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof n == "undefined" && (n = i.params.speed),
        i.slideTo(i.activeIndex, n, e, t)
      );
  }
  function Dc(n, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof n == "undefined" && (n = r.params.speed);
    let s = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, s),
      o = a + Math.floor((s - a) / r.params.slidesPerGroup),
      u = r.rtlTranslate ? r.translate : -r.translate;
    if (u >= r.snapGrid[o]) {
      const l = r.snapGrid[o],
        c = r.snapGrid[o + 1];
      u - l > (c - l) * i && (s += r.params.slidesPerGroup);
    } else {
      const l = r.snapGrid[o - 1],
        c = r.snapGrid[o];
      u - l <= (c - l) * i && (s -= r.params.slidesPerGroup);
    }
    return (
      (s = Math.max(s, 0)),
      (s = Math.min(s, r.slidesGrid.length - 1)),
      r.slideTo(s, n, e, t)
    );
  }
  function wc() {
    const n = this;
    if (n.destroyed) return;
    const { params: e, slidesEl: t } = n,
      i =
        e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let r = n.clickedIndex,
      s;
    const a = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (n.animating) return;
      (s = parseInt(
        n.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        e.centeredSlides
          ? r < n.loopedSlides - i / 2 ||
            r > n.slides.length - n.loopedSlides + i / 2
            ? (n.loopFix(),
              (r = n.getSlideIndex(
                je(t, `${a}[data-swiper-slide-index="${s}"]`)[0]
              )),
              Xi(() => {
                n.slideTo(r);
              }))
            : n.slideTo(r)
          : r > n.slides.length - i
          ? (n.loopFix(),
            (r = n.getSlideIndex(
              je(t, `${a}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Xi(() => {
              n.slideTo(r);
            }))
          : n.slideTo(r);
    } else n.slideTo(r);
  }
  var bc = {
    slideTo: mc,
    slideToLoop: gc,
    slideNext: vc,
    slidePrev: yc,
    slideReset: _c,
    slideToClosest: Dc,
    slideToClickedSlide: wc,
  };
  function xc(n, e) {
    const t = this,
      { params: i, slidesEl: r } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    const s = () => {
        je(r, `.${i.slideClass}, swiper-slide`).forEach((m, p) => {
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
            ? At("swiper-slide", [i.slideBlankClass])
            : At("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(p);
        }
      };
    if (u) {
      if (i.loopAddBlankSlides) {
        const h = o - (t.slides.length % o);
        c(h), t.recalcSlides(), t.updateSlides();
      } else
        Rs(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else if (l) {
      if (i.loopAddBlankSlides) {
        const h = i.grid.rows - (t.slides.length % i.grid.rows);
        c(h), t.recalcSlides(), t.updateSlides();
      } else
        Rs(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else s();
    t.loopFix({
      slideRealIndex: n,
      direction: i.centeredSlides ? void 0 : "next",
      initial: e,
    });
  }
  function Ec(n) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: r,
      activeSlideIndex: s,
      initial: a,
      byController: o,
      byMousewheel: u,
    } = n === void 0 ? {} : n;
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
      ? Rs(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : D &&
        f.grid.fill === "row" &&
        Rs(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const w = [],
      S = [],
      b = D ? Math.ceil(c.length / f.grid.rows) : c.length,
      T = a && b - g < _ && !d;
    let E = T ? g : l.activeIndex;
    typeof s == "undefined"
      ? (s = l.getSlideIndex(
          c.find((I) => I.classList.contains(f.slideActiveClass))
        ))
      : (E = s);
    const x = i === "next" || !i,
      k = i === "prev" || !i;
    let P = 0,
      L = 0;
    const R =
      (D ? c[s].column : s) + (d && typeof r == "undefined" ? -_ / 2 + 0.5 : 0);
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
      (L = Math.max(R - (b - v * 2), y)), T && (L = Math.max(L, _ - b + g + 1));
      for (let I = 0; I < L; I += 1) {
        const M = I - Math.floor(I / b) * b;
        D
          ? c.forEach((O, A) => {
              O.column === M && S.push(A);
            })
          : S.push(M);
      }
    }
    if (
      ((l.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        l.__preventObserver__ = !1;
      }),
      l.params.effect === "cards" &&
        c.length < _ + v * 2 &&
        (S.includes(s) && S.splice(S.indexOf(s), 1),
        w.includes(s) && w.splice(w.indexOf(s), 1)),
      k &&
        w.forEach((I) => {
          (c[I].swiperLoopMoveDOM = !0),
            p.prepend(c[I]),
            (c[I].swiperLoopMoveDOM = !1);
        }),
      x &&
        S.forEach((I) => {
          (c[I].swiperLoopMoveDOM = !0),
            p.append(c[I]),
            (c[I].swiperLoopMoveDOM = !1);
        }),
      l.recalcSlides(),
      f.slidesPerView === "auto"
        ? l.updateSlides()
        : D &&
          ((w.length > 0 && k) || (S.length > 0 && x)) &&
          l.slides.forEach((I, M) => {
            l.grid.updateSlide(M, I, l.slides);
          }),
      f.watchSlidesProgress && l.updateSlidesOffset(),
      t)
    ) {
      if (w.length > 0 && k) {
        if (typeof e == "undefined") {
          const I = l.slidesGrid[E],
            O = l.slidesGrid[E + P] - I;
          u
            ? l.setTranslate(l.translate - O)
            : (l.slideTo(E + Math.ceil(P), 0, !1, !0),
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
      } else if (S.length > 0 && x)
        if (typeof e == "undefined") {
          const I = l.slidesGrid[E],
            O = l.slidesGrid[E - L] - I;
          u
            ? l.setTranslate(l.translate - O)
            : (l.slideTo(E - L, 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - O),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - O)));
        } else {
          const I = D ? S.length / f.grid.rows : S.length;
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
        activeSlideIndex: s,
        byController: !0,
      };
      Array.isArray(l.controller.control)
        ? l.controller.control.forEach((M) => {
            !M.destroyed &&
              M.params.loop &&
              M.loopFix(
                no(so({}, I), {
                  slideTo: M.params.slidesPerView === f.slidesPerView ? t : !1,
                })
              );
          })
        : l.controller.control instanceof l.constructor &&
          l.controller.control.params.loop &&
          l.controller.control.loopFix(
            no(so({}, I), {
              slideTo:
                l.controller.control.params.slidesPerView === f.slidesPerView
                  ? t
                  : !1,
            })
          );
    }
    l.emit("loopFix");
  }
  function Sc() {
    const n = this,
      { params: e, slidesEl: t } = n;
    if (!e.loop || !t || (n.virtual && n.params.virtual.enabled)) return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach((r) => {
      const s =
        typeof r.swiperSlideIndex == "undefined"
          ? r.getAttribute("data-swiper-slide-index") * 1
          : r.swiperSlideIndex;
      i[s] = r;
    }),
      n.slides.forEach((r) => {
        r.removeAttribute("data-swiper-slide-index");
      }),
      i.forEach((r) => {
        t.append(r);
      }),
      n.recalcSlides(),
      n.slideTo(n.realIndex, 0);
  }
  var Tc = { loopCreate: xc, loopFix: Ec, loopDestroy: Sc };
  function Cc(n) {
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
      (t.style.cursor = n ? "grabbing" : "grab"),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        });
  }
  function Mc() {
    const n = this;
    (n.params.watchOverflow && n.isLocked) ||
      n.params.cssMode ||
      (n.isElement && (n.__preventObserver__ = !0),
      (n[
        n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      n.isElement &&
        requestAnimationFrame(() => {
          n.__preventObserver__ = !1;
        }));
  }
  var Pc = { setGrabCursor: Cc, unsetGrabCursor: Mc };
  function Ac(n, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === He() || i === De()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(n);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function po(n, e, t) {
    const i = De(),
      { params: r } = n,
      s = r.edgeSwipeDetection,
      a = r.edgeSwipeThreshold;
    return s && (t <= a || t >= i.innerWidth - a)
      ? s === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function Fc(n) {
    const e = this,
      t = He();
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      po(e, i, i.targetTouches[0].pageX);
      return;
    }
    const { params: s, touches: a, enabled: o } = e;
    if (
      !o ||
      (!s.simulateTouch && i.pointerType === "mouse") ||
      (e.animating && s.preventInteractionOnTransition)
    )
      return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let u = i.target;
    if (
      (s.touchEventsTarget === "wrapper" && !$u(u, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const l = !!s.noSwipingClass && s.noSwipingClass !== "",
      c = i.composedPath ? i.composedPath() : i.path;
    l && i.target && i.target.shadowRoot && c && (u = c[0]);
    const h = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      m = !!(i.target && i.target.shadowRoot);
    if (s.noSwiping && (m ? Ac(h, u) : u.closest(h))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !u.closest(s.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const p = a.currentX,
      f = a.currentY;
    if (!po(e, i, p)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = p),
      (a.startY = f),
      (r.touchStartTime = Yt()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (r.allowThresholdMove = !1);
    let d = !0;
    u.matches(r.focusableElements) &&
      ((d = !1), u.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== u &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !u.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const g = d && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || g) &&
      !u.isContentEditable &&
      i.preventDefault(),
      s.freeMode &&
        s.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !s.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", i);
  }
  function Oc(n) {
    const e = He(),
      t = this,
      i = t.touchEventsData,
      { params: r, touches: s, rtlTranslate: a, enabled: o } = t;
    if (!o || (!r.simulateTouch && n.pointerType === "mouse")) return;
    let u = n;
    if (
      (u.originalEvent && (u = u.originalEvent),
      u.type === "pointermove" &&
        (i.touchId !== null || u.pointerId !== i.pointerId))
    )
      return;
    let l;
    if (u.type === "touchmove") {
      if (
        ((l = [...u.changedTouches].find((S) => S.identifier === i.touchId)),
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
      (s.startX = c), (s.startY = h);
      return;
    }
    if (!t.allowTouchMove) {
      u.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(s, { startX: c, startY: h, currentX: c, currentY: h }),
          (i.touchStartTime = Yt()));
      return;
    }
    if (r.touchReleaseOnEdges && !r.loop)
      if (t.isVertical()) {
        if (
          (h < s.startY && t.translate <= t.maxTranslate()) ||
          (h > s.startY && t.translate >= t.minTranslate())
        ) {
          (i.isTouched = !1), (i.isMoved = !1);
          return;
        }
      } else {
        if (
          a &&
          ((c > s.startX && -t.translate <= t.maxTranslate()) ||
            (c < s.startX && -t.translate >= t.minTranslate()))
        )
          return;
        if (
          !a &&
          ((c < s.startX && t.translate <= t.maxTranslate()) ||
            (c > s.startX && t.translate >= t.minTranslate()))
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
      (s.previousX = s.currentX),
      (s.previousY = s.currentY),
      (s.currentX = c),
      (s.currentY = h);
    const m = s.currentX - s.startX,
      p = s.currentY - s.startY;
    if (
      t.params.threshold &&
      Math.sqrt(dt(m, 2) + dt(p, 2)) < t.params.threshold
    )
      return;
    if (typeof i.isScrolling == "undefined") {
      let S;
      (t.isHorizontal() && s.currentY === s.startY) ||
      (t.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : m * m + p * p >= 25 &&
          ((S = (Math.atan2(Math.abs(p), Math.abs(m)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? S > r.touchAngle
            : 90 - S > r.touchAngle));
    }
    if (
      (i.isScrolling && t.emit("touchMoveOpposite", u),
      typeof i.startMoving == "undefined" &&
        (s.currentX !== s.startX || s.currentY !== s.startY) &&
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
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    r.oneWayMovement &&
      ((f = Math.abs(f) * (a ? 1 : -1)), (d = Math.abs(d) * (a ? 1 : -1))),
      (s.diff = f),
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
      Object.assign(s, {
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
                dt(-t.minTranslate() + i.startTranslate + f, w))))
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
                dt(t.maxTranslate() - i.startTranslate - f, w)))),
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
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (i.currentTranslate = i.startTranslate),
            (s.diff = t.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY);
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
  function kc(n) {
    const e = this,
      t = e.touchEventsData;
    let i = n;
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
    const h = Yt(),
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
      ((t.lastClickTime = Yt()),
      Xi(() => {
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
      const S = w < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof l[w + S] != "undefined"
        ? (f || (p >= l[w] && p < l[w + S])) && ((d = w), (g = l[w + S] - l[w]))
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
  function ho() {
    const n = this,
      { params: e, el: t } = n;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && n.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = n,
      a = n.virtual && n.params.virtual.enabled;
    (n.allowSlideNext = !0),
      (n.allowSlidePrev = !0),
      n.updateSize(),
      n.updateSlides(),
      n.updateSlidesClasses();
    const o = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    n.isEnd &&
    !n.isBeginning &&
    !n.params.centeredSlides &&
    !o
      ? n.slideTo(n.slides.length - 1, 0, !1, !0)
      : n.params.loop && !a
      ? n.slideToLoop(n.realIndex, 0, !1, !0)
      : n.slideTo(n.activeIndex, 0, !1, !0),
      n.autoplay &&
        n.autoplay.running &&
        n.autoplay.paused &&
        (clearTimeout(n.autoplay.resizeTimeout),
        (n.autoplay.resizeTimeout = setTimeout(() => {
          n.autoplay &&
            n.autoplay.running &&
            n.autoplay.paused &&
            n.autoplay.resume();
        }, 500))),
      (n.allowSlidePrev = r),
      (n.allowSlideNext = i),
      n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow();
  }
  function Lc(n) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && n.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (n.stopPropagation(), n.stopImmediatePropagation())));
  }
  function Ic() {
    const n = this,
      { wrapperEl: e, rtlTranslate: t, enabled: i } = n;
    if (!i) return;
    (n.previousTranslate = n.translate),
      n.isHorizontal()
        ? (n.translate = -e.scrollLeft)
        : (n.translate = -e.scrollTop),
      n.translate === 0 && (n.translate = 0),
      n.updateActiveIndex(),
      n.updateSlidesClasses();
    let r;
    const s = n.maxTranslate() - n.minTranslate();
    s === 0 ? (r = 0) : (r = (n.translate - n.minTranslate()) / s),
      r !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
      n.emit("setTranslate", n.translate, !1);
  }
  function zc(n) {
    const e = this;
    Ns(e, n.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Rc() {
    const n = this;
    n.documentTouchHandlerProceeded ||
      ((n.documentTouchHandlerProceeded = !0),
      n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"));
  }
  const mo = (n, e) => {
    const t = He(),
      { params: i, el: r, wrapperEl: s, device: a } = n,
      o = !!i.nested,
      u = e === "on" ? "addEventListener" : "removeEventListener",
      l = e;
    !r ||
      typeof r == "string" ||
      (t[u]("touchstart", n.onDocumentTouchStart, { passive: !1, capture: o }),
      r[u]("touchstart", n.onTouchStart, { passive: !1 }),
      r[u]("pointerdown", n.onTouchStart, { passive: !1 }),
      t[u]("touchmove", n.onTouchMove, { passive: !1, capture: o }),
      t[u]("pointermove", n.onTouchMove, { passive: !1, capture: o }),
      t[u]("touchend", n.onTouchEnd, { passive: !0 }),
      t[u]("pointerup", n.onTouchEnd, { passive: !0 }),
      t[u]("pointercancel", n.onTouchEnd, { passive: !0 }),
      t[u]("touchcancel", n.onTouchEnd, { passive: !0 }),
      t[u]("pointerout", n.onTouchEnd, { passive: !0 }),
      t[u]("pointerleave", n.onTouchEnd, { passive: !0 }),
      t[u]("contextmenu", n.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[u]("click", n.onClick, !0),
      i.cssMode && s[u]("scroll", n.onScroll),
      i.updateOnWindowResize
        ? n[l](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            ho,
            !0
          )
        : n[l]("observerUpdate", ho, !0),
      r[u]("load", n.onLoad, { capture: !0 }));
  };
  function Bc() {
    const n = this,
      { params: e } = n;
    (n.onTouchStart = Fc.bind(n)),
      (n.onTouchMove = Oc.bind(n)),
      (n.onTouchEnd = kc.bind(n)),
      (n.onDocumentTouchStart = Rc.bind(n)),
      e.cssMode && (n.onScroll = Ic.bind(n)),
      (n.onClick = Lc.bind(n)),
      (n.onLoad = zc.bind(n)),
      mo(n, "on");
  }
  function $c() {
    mo(this, "off");
  }
  var Nc = { attachEvents: Bc, detachEvents: $c };
  const go = (n, e) => n.grid && e.grid && e.grid.rows > 1;
  function qc() {
    const n = this,
      { realIndex: e, initialized: t, params: i, el: r } = n,
      s = i.breakpoints;
    if (!s || (s && Object.keys(s).length === 0)) return;
    const a = He(),
      o =
        i.breakpointsBase === "window" || !i.breakpointsBase
          ? i.breakpointsBase
          : "container",
      u =
        ["window", "container"].includes(i.breakpointsBase) ||
        !i.breakpointsBase
          ? n.el
          : a.querySelector(i.breakpointsBase),
      l = n.getBreakpoint(s, o, u);
    if (!l || n.currentBreakpoint === l) return;
    const h = (l in s ? s[l] : void 0) || n.originalParams,
      m = go(n, i),
      p = go(n, h),
      f = n.params.grabCursor,
      d = h.grabCursor,
      g = i.enabled;
    m && !p
      ? (r.classList.remove(
          `${i.containerModifierClass}grid`,
          `${i.containerModifierClass}grid-column`
        ),
        n.emitContainerClasses())
      : !m &&
        p &&
        (r.classList.add(`${i.containerModifierClass}grid`),
        ((h.grid.fill && h.grid.fill === "column") ||
          (!h.grid.fill && i.grid.fill === "column")) &&
          r.classList.add(`${i.containerModifierClass}grid-column`),
        n.emitContainerClasses()),
      f && !d ? n.unsetGrabCursor() : !f && d && n.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((S) => {
        if (typeof h[S] == "undefined") return;
        const b = i[S] && i[S].enabled,
          T = h[S] && h[S].enabled;
        b && !T && n[S].disable(), !b && T && n[S].enable();
      });
    const _ = h.direction && h.direction !== i.direction,
      y = i.loop && (h.slidesPerView !== i.slidesPerView || _),
      v = i.loop;
    _ && t && n.changeDirection(), Pt(n.params, h);
    const D = n.params.enabled,
      w = n.params.loop;
    Object.assign(n, {
      allowTouchMove: n.params.allowTouchMove,
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
    }),
      g && !D ? n.disable() : !g && D && n.enable(),
      (n.currentBreakpoint = l),
      n.emit("_beforeBreakpoint", h),
      t &&
        (y
          ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides())
          : !v && w
          ? (n.loopCreate(e), n.updateSlides())
          : v && !w && n.loopDestroy()),
      n.emit("breakpoint", h);
  }
  function Vc(n, e, t) {
    if ((e === void 0 && (e = "window"), !n || (e === "container" && !t)))
      return;
    let i = !1;
    const r = De(),
      s = e === "window" ? r.innerHeight : t.clientHeight,
      a = Object.keys(n).map((o) => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
          const u = parseFloat(o.substr(1));
          return { value: s * u, point: o };
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
  var Hc = { setBreakpoint: qc, getBreakpoint: Vc };
  function Yc(n, e) {
    const t = [];
    return (
      n.forEach((i) => {
        typeof i == "object"
          ? Object.keys(i).forEach((r) => {
              i[r] && t.push(e + r);
            })
          : typeof i == "string" && t.push(e + i);
      }),
      t
    );
  }
  function Xc() {
    const n = this,
      { classNames: e, params: t, rtl: i, el: r, device: s } = n,
      a = Yc(
        [
          "initialized",
          t.direction,
          { "free-mode": n.params.freeMode && t.freeMode.enabled },
          { autoheight: t.autoHeight },
          { rtl: i },
          { grid: t.grid && t.grid.rows > 1 },
          {
            "grid-column":
              t.grid && t.grid.rows > 1 && t.grid.fill === "column",
          },
          { android: s.android },
          { ios: s.ios },
          { "css-mode": t.cssMode },
          { centered: t.cssMode && t.centeredSlides },
          { "watch-progress": t.watchSlidesProgress },
        ],
        t.containerModifierClass
      );
    e.push(...a), r.classList.add(...e), n.emitContainerClasses();
  }
  function Gc() {
    const n = this,
      { el: e, classNames: t } = n;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), n.emitContainerClasses());
  }
  var Wc = { addClasses: Xc, removeClasses: Gc };
  function Uc() {
    const n = this,
      { isLocked: e, params: t } = n,
      { slidesOffsetBefore: i } = t;
    if (i) {
      const r = n.slides.length - 1,
        s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
      n.isLocked = n.size > s;
    } else n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
      t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
      e && e !== n.isLocked && (n.isEnd = !1),
      e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
  }
  var jc = { checkOverflow: Uc },
    vo = {
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
  function Kc(n, e) {
    return function (i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0],
        s = i[r];
      if (typeof s != "object" || s === null) {
        Pt(e, i);
        return;
      }
      if (
        (n[r] === !0 && (n[r] = { enabled: !0 }),
        r === "navigation" &&
          n[r] &&
          n[r].enabled &&
          !n[r].prevEl &&
          !n[r].nextEl &&
          (n[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 &&
          n[r] &&
          n[r].enabled &&
          !n[r].el &&
          (n[r].auto = !0),
        !(r in n && "enabled" in s))
      ) {
        Pt(e, i);
        return;
      }
      typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
        n[r] || (n[r] = { enabled: !1 }),
        Pt(e, i);
    };
  }
  const $n = {
      eventsEmitter: Wu,
      update: sc,
      translate: cc,
      transition: hc,
      slide: bc,
      loop: Tc,
      grabCursor: Pc,
      events: Nc,
      breakpoints: Hc,
      checkOverflow: jc,
      classes: Wc,
    },
    Nn = {};
  class Dt {
    constructor() {
      let e, t;
      for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
        r[s] = arguments[s];
      r.length === 1 &&
      r[0].constructor &&
      Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
        ? (t = r[0])
        : ([e, t] = r),
        t || (t = {}),
        (t = Pt({}, t)),
        e && !t.el && (t.el = e);
      const a = He();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const c = [];
        return (
          a.querySelectorAll(t.el).forEach((h) => {
            const m = Pt({}, t, { el: h });
            c.push(new Dt(m));
          }),
          c
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = oo()),
        (o.device = lo({ userAgent: t.userAgent })),
        (o.browser = uo()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const u = {};
      o.modules.forEach((c) => {
        c({
          params: t,
          swiper: o,
          extendParams: Kc(t, u),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const l = Pt({}, vo, u);
      return (
        (o.params = Pt({}, l, Nn, t)),
        (o.originalParams = Pt({}, o.params)),
        (o.passedParams = Pt({}, t)),
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
            return Math.trunc(this.translate / dt(2, 23)) * dt(2, 23);
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
        r = je(t, `.${i.slideClass}, swiper-slide`),
        s = Wr(r[0]);
      return Wr(e) - s;
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
      e.slides = je(t, `.${i.slideClass}, swiper-slide`);
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
          slides: s,
          slidesGrid: a,
          slidesSizesGrid: o,
          size: u,
          activeIndex: l,
        } = i;
      let c = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let h = s[l] ? Math.ceil(s[l].swiperSlideSize) : 0,
          m;
        for (let p = l + 1; p < s.length; p += 1)
          s[p] &&
            !m &&
            ((h += Math.ceil(s[p].swiperSlideSize)),
            (c += 1),
            h > u && (m = !0));
        for (let p = l - 1; p >= 0; p -= 1)
          s[p] &&
            !m &&
            ((h += s[p].swiperSlideSize), (c += 1), h > u && (m = !0));
      } else if (e === "current")
        for (let h = l + 1; h < s.length; h += 1)
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
          a.complete && Ns(e, a);
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
      let s;
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
          s = e.slideTo(a.length - 1, 0, !1, !0);
        } else s = e.slideTo(e.activeIndex, 0, !1, !0);
        s || r();
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
          i.slides.forEach((s) => {
            e === "vertical" ? (s.style.width = "") : (s.style.height = "");
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
          : je(i, r())[0];
      return (
        !a &&
          t.params.createElements &&
          ((a = At("div", t.params.wrapperClass)),
          i.append(a),
          je(i, `.${t.params.slideClass}`).forEach((o) => {
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
          rtl: i.dir.toLowerCase() === "rtl" || Ai(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || Ai(i, "direction") === "rtl"),
          wrongRTL: Ai(a, "display") === "-webkit-box",
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
        r.forEach((s) => {
          s.complete
            ? Ns(t, s)
            : s.addEventListener("load", (a) => {
                Ns(t, a.target);
              });
        }),
        Bn(t),
        (t.initialized = !0),
        Bn(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const i = this,
        { params: r, el: s, wrapperEl: a, slides: o } = i;
      return (
        typeof i.params == "undefined" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            s && typeof s != "string" && s.removeAttribute("style"),
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Iu(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Pt(Nn, e);
    }
    static get extendedDefaults() {
      return Nn;
    }
    static get defaults() {
      return vo;
    }
    static installModule(e) {
      Dt.prototype.__modules__ || (Dt.prototype.__modules__ = []);
      const t = Dt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Dt.installModule(t)), Dt)
        : (Dt.installModule(e), Dt);
    }
  }
  Object.keys($n).forEach((n) => {
    Object.keys($n[n]).forEach((e) => {
      Dt.prototype[e] = $n[n][e];
    });
  }),
    Dt.use([Xu, Gu]);
  function Zc(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
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
    let s;
    const a = He();
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
          ? (_ = At("swiper-slide"))
          : (_ = At("div", e.params.slideClass)),
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
      const { addSlidesBefore: S, addSlidesAfter: b } = e.params.virtual,
        { from: T, to: E, slides: x, slidesGrid: k, offset: P } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const L = typeof g == "undefined" ? e.activeIndex || 0 : g;
      let F;
      e.rtlTranslate ? (F = "right") : (F = e.isHorizontal() ? "left" : "top");
      let R, I;
      v
        ? ((R = Math.floor(_ / 2) + y + b), (I = Math.floor(_ / 2) + y + S))
        : ((R = _ + (y - 1) + b), (I = (D ? _ : y) + S));
      let M = L - I,
        O = L + R;
      D || ((M = Math.max(M, 0)), (O = Math.min(O, x.length - 1)));
      let A = (e.slidesGrid[M] || 0) - (e.slidesGrid[0] || 0);
      D && L >= I
        ? ((M -= I), v || (A += e.slidesGrid[0]))
        : D && L < I && ((M = -I), v && (A += e.slidesGrid[0])),
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
      if (T === M && E === O && !f) {
        e.slidesGrid !== k &&
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
            for (let W = M; W <= O; W += 1) N.push(x[W]);
            return N;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? C() : r("virtualUpdate");
        return;
      }
      const Y = [],
        Z = [],
        _e = ($) => {
          let N = $;
          return (
            $ < 0 ? (N = x.length + $) : N >= x.length && (N = N - x.length), N
          );
        };
      if (f)
        e.slides
          .filter(($) => $.matches(`.${e.params.slideClass}, swiper-slide`))
          .forEach(($) => {
            $.remove();
          });
      else
        for (let $ = T; $ <= E; $ += 1)
          if ($ < M || $ > O) {
            const N = _e($);
            e.slides
              .filter((W) =>
                W.matches(
                  `.${e.params.slideClass}[data-swiper-slide-index="${N}"], swiper-slide[data-swiper-slide-index="${N}"]`
                )
              )
              .forEach((W) => {
                W.remove();
              });
          }
      const re = D ? -x.length : 0,
        B = D ? x.length * 2 : x.length;
      for (let $ = re; $ < B; $ += 1)
        if ($ >= M && $ <= O) {
          const N = _e($);
          typeof E == "undefined" || f
            ? Z.push(N)
            : ($ > E && Z.push(N), $ < T && Y.push(N));
        }
      if (
        (Z.forEach(($) => {
          e.slidesEl.append(u(x[$], $));
        }),
        D)
      )
        for (let $ = Y.length - 1; $ >= 0; $ -= 1) {
          const N = Y[$];
          e.slidesEl.prepend(u(x[N], N));
        }
      else
        Y.sort(($, N) => N - $),
          Y.forEach(($) => {
            e.slidesEl.prepend(u(x[$], $));
          });
      je(e.slidesEl, ".swiper-slide, swiper-slide").forEach(($) => {
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
            S = w.getAttribute("data-swiper-slide-index");
          S && w.setAttribute("data-swiper-slide-index", parseInt(S, 10) + _),
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
            ? (clearTimeout(s),
              (s = setTimeout(() => {
                l();
              }, 100)))
            : l());
      }),
      i("init update resize", () => {
        e.params.virtual.enabled &&
          e.params.cssMode &&
          Gr(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: c,
        prependSlide: h,
        removeSlide: m,
        removeAllSlides: p,
        update: l,
      });
  }
  function Qc(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = He(),
      a = De();
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
          s.activeElement &&
          s.activeElement.nodeName &&
          (s.activeElement.nodeName.toLowerCase() === "input" ||
            s.activeElement.nodeName.toLowerCase() === "textarea")
        )
      ) {
        if (e.params.keyboard.onlyInViewport && (d || g || _ || y || v || D)) {
          let w = !1;
          if (
            Wi(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
            Wi(e.el, `.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const S = e.el,
            b = S.clientWidth,
            T = S.clientHeight,
            E = a.innerWidth,
            x = a.innerHeight,
            k = Bs(S);
          h && (k.left -= S.scrollLeft);
          const P = [
            [k.left, k.top],
            [k.left + b, k.top],
            [k.left, k.top + T],
            [k.left + b, k.top + T],
          ];
          for (let L = 0; L < P.length; L += 1) {
            const F = P[L];
            if (F[0] >= 0 && F[0] <= E && F[1] >= 0 && F[1] <= x) {
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
        (s.addEventListener("keydown", o), (e.keyboard.enabled = !0));
    }
    function l() {
      e.keyboard.enabled &&
        (s.removeEventListener("keydown", o), (e.keyboard.enabled = !1));
    }
    i("init", () => {
      e.params.keyboard.enabled && u();
    }),
      i("destroy", () => {
        e.keyboard.enabled && l();
      }),
      Object.assign(e.keyboard, { enable: u, disable: l });
  }
  function Jc(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = De();
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
      o = Yt(),
      u;
    const l = [];
    function c(v) {
      let b = 0,
        T = 0,
        E = 0,
        x = 0;
      return (
        "detail" in v && (T = v.detail),
        "wheelDelta" in v && (T = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (T = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (b = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((b = T), (T = 0)),
        (E = b * 10),
        (x = T * 10),
        "deltaY" in v && (x = v.deltaY),
        "deltaX" in v && (E = v.deltaX),
        v.shiftKey && !E && ((E = x), (x = 0)),
        (E || x) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((E *= 40), (x *= 40))
            : ((E *= 800), (x *= 800))),
        E && !b && (b = E < 1 ? -1 : 1),
        x && !T && (T = x < 1 ? -1 : 1),
        { spinX: b, spinY: T, pixelX: E, pixelY: x }
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
          Yt() - o < e.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && Yt() - o < 60
        ? !0
        : (v.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), r("scroll", v.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), r("scroll", v.raw)),
          (o = new s.Date().getTime()),
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
      const S = e.params.mousewheel;
      e.params.cssMode && D.preventDefault();
      let b = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (b = document.querySelector(e.params.mousewheel.eventsTarget));
      const T = b && b.contains(D.target);
      if (!e.mouseEntered && !T && !S.releaseOnEdges) return !0;
      D.originalEvent && (D = D.originalEvent);
      let E = 0;
      const x = e.rtlTranslate ? -1 : 1,
        k = c(D);
      if (S.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(k.pixelX) > Math.abs(k.pixelY)) E = -k.pixelX * x;
          else return !0;
        else if (Math.abs(k.pixelY) > Math.abs(k.pixelX)) E = -k.pixelY;
        else return !0;
      else
        E = Math.abs(k.pixelX) > Math.abs(k.pixelY) ? -k.pixelX * x : -k.pixelY;
      if (E === 0) return !0;
      S.invert && (E = -E);
      let P = e.getTranslate() + E * S.sensitivity;
      if (
        (P >= e.minTranslate() && (P = e.minTranslate()),
        P <= e.maxTranslate() && (P = e.maxTranslate()),
        (w = e.params.loop
          ? !0
          : !(P === e.minTranslate() || P === e.maxTranslate())),
        w && e.params.nested && D.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const L = {
          time: Yt(),
          delta: Math.abs(E),
          direction: Math.sign(E),
          raw: v,
        };
        l.length >= 2 && l.shift();
        const F = l.length ? l[l.length - 1] : void 0;
        if (
          (l.push(L),
          F
            ? (L.direction !== F.direction ||
                L.delta > F.delta ||
                L.time > F.time + 150) &&
              p(L)
            : p(L),
          f(L))
        )
          return !0;
      } else {
        const L = { time: Yt(), delta: Math.abs(E), direction: Math.sign(E) },
          F =
            u &&
            L.time < u.time + 500 &&
            L.delta <= u.delta &&
            L.direction === u.direction;
        if (!F) {
          u = void 0;
          let R = e.getTranslate() + E * S.sensitivity;
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
                direction: L.direction < 0 ? "next" : "prev",
                byMousewheel: !0,
              }),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(a), (a = void 0), l.length >= 15 && l.shift();
            const O = l.length ? l[l.length - 1] : void 0,
              A = l[0];
            if (
              (l.push(L),
              O && (L.delta > O.delta || L.direction !== O.direction))
            )
              l.splice(0);
            else if (
              l.length >= 15 &&
              L.time - A.time < 500 &&
              A.delta - L.delta >= 1 &&
              L.delta <= 6
            ) {
              const C = E > 0 ? 0.8 : 0.2;
              (u = L),
                l.splice(0),
                (a = Xi(() => {
                  e.destroyed ||
                    !e.params ||
                    e.slideToClosest(e.params.speed, !0, void 0, C);
                }, 0));
            }
            a ||
              (a = Xi(() => {
                if (e.destroyed || !e.params) return;
                const C = 0.5;
                (u = L),
                  l.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, C);
              }, 500));
          }
          if (
            (F || r("scroll", D),
            e.params.autoplay &&
              e.params.autoplay.disableOnInteraction &&
              e.autoplay.stop(),
            S.releaseOnEdges &&
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
  function qn(n, e, t, i) {
    return (
      n.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let s = je(n.el, `.${i[r]}`)[0];
            s || ((s = At("div", i[r])), (s.className = i[r]), n.el.append(s)),
              (t[r] = s),
              (e[r] = s);
          }
        }),
      t
    );
  }
  function ed(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
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
    function s(f) {
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
        ((e.params.navigation = qn(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(f.nextEl || f.prevEl))
      )
        return;
      let d = s(f.nextEl),
        g = s(f.prevEl);
      Object.assign(e.navigation, { nextEl: d, prevEl: g }),
        (d = ne(d)),
        (g = ne(g));
      const _ = (y, v) => {
        y && y.addEventListener("click", v === "next" ? l : u),
          !e.enabled && y && y.classList.add(...f.lockClass.split(" "));
      };
      d.forEach((y) => _(y, "next")), g.forEach((y) => _(y, "prev"));
    }
    function h() {
      let { nextEl: f, prevEl: d } = e.navigation;
      (f = ne(f)), (d = ne(d));
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
        if (((f = ne(f)), (d = ne(d)), e.enabled)) {
          o();
          return;
        }
        [...f, ...d]
          .filter((g) => !!g)
          .forEach((g) => g.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (f, d) => {
        let { nextEl: g, prevEl: _ } = e.navigation;
        (g = ne(g)), (_ = ne(_));
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
  function yi(n) {
    return (
      n === void 0 && (n = ""),
      `.${n
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function td(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = "swiper-pagination";
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
        bulletClass: `${s}-bullet`,
        bulletActiveClass: `${s}-bullet-active`,
        modifierClass: `${s}-`,
        currentClass: `${s}-current`,
        totalClass: `${s}-total`,
        hiddenClass: `${s}-hidden`,
        progressbarFillClass: `${s}-progressbar-fill`,
        progressbarOppositeClass: `${s}-progressbar-opposite`,
        clickableClass: `${s}-clickable`,
        lockClass: `${s}-lock`,
        horizontalClass: `${s}-horizontal`,
        verticalClass: `${s}-vertical`,
        paginationDisabledClass: `${s}-disabled`,
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
      const v = y.target.closest(yi(e.params.pagination.bulletClass));
      if (!v) return;
      y.preventDefault();
      const D = Wr(v) * e.params.slidesPerGroup;
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
      D = ne(D);
      let w, S;
      const b =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        T = e.params.loop
          ? Math.ceil(b / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((S = e.previousRealIndex || 0),
            (w =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex != "undefined"
          ? ((w = e.snapIndex), (S = e.previousSnapIndex))
          : ((S = e.previousIndex || 0), (w = e.activeIndex || 0)),
        v.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const E = e.pagination.bullets;
        let x, k, P;
        if (
          (v.dynamicBullets &&
            ((a = On(E[0], e.isHorizontal() ? "width" : "height")),
            D.forEach((L) => {
              L.style[e.isHorizontal() ? "width" : "height"] = `${
                a * (v.dynamicMainBullets + 4)
              }px`;
            }),
            v.dynamicMainBullets > 1 &&
              S !== void 0 &&
              ((o += w - (S || 0)),
              o > v.dynamicMainBullets - 1
                ? (o = v.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (x = Math.max(w - o, 0)),
            (k = x + (Math.min(E.length, v.dynamicMainBullets) - 1)),
            (P = (k + x) / 2)),
          E.forEach((L) => {
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
            L.classList.remove(...F);
          }),
          D.length > 1)
        )
          E.forEach((L) => {
            const F = Wr(L);
            F === w
              ? L.classList.add(...v.bulletActiveClass.split(" "))
              : e.isElement && L.setAttribute("part", "bullet"),
              v.dynamicBullets &&
                (F >= x &&
                  F <= k &&
                  L.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
                F === x && l(L, "prev"),
                F === k && l(L, "next"));
          });
        else {
          const L = E[w];
          if (
            (L && L.classList.add(...v.bulletActiveClass.split(" ")),
            e.isElement &&
              E.forEach((F, R) => {
                F.setAttribute("part", R === w ? "bullet-active" : "bullet");
              }),
            v.dynamicBullets)
          ) {
            const F = E[x],
              R = E[k];
            for (let I = x; I <= k; I += 1)
              E[I] &&
                E[I].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
            l(F, "prev"), l(R, "next");
          }
        }
        if (v.dynamicBullets) {
          const L = Math.min(E.length, v.dynamicMainBullets + 4),
            F = (a * L - a) / 2 - P * a,
            R = y ? "right" : "left";
          E.forEach((I) => {
            I.style[e.isHorizontal() ? R : "top"] = `${F}px`;
          });
        }
      }
      D.forEach((E, x) => {
        if (
          (v.type === "fraction" &&
            (E.querySelectorAll(yi(v.currentClass)).forEach((k) => {
              k.textContent = v.formatFractionCurrent(w + 1);
            }),
            E.querySelectorAll(yi(v.totalClass)).forEach((k) => {
              k.textContent = v.formatFractionTotal(T);
            })),
          v.type === "progressbar")
        ) {
          let k;
          v.progressbarOpposite
            ? (k = e.isHorizontal() ? "vertical" : "horizontal")
            : (k = e.isHorizontal() ? "horizontal" : "vertical");
          const P = (w + 1) / T;
          let L = 1,
            F = 1;
          k === "horizontal" ? (L = P) : (F = P),
            E.querySelectorAll(yi(v.progressbarFillClass)).forEach((R) => {
              (R.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${F})`),
                (R.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        v.type === "custom" && v.renderCustom
          ? ((E.innerHTML = v.renderCustom(e, w + 1, T)),
            x === 0 && r("paginationRender", E))
          : (x === 0 && r("paginationRender", E), r("paginationUpdate", E)),
          e.params.watchOverflow &&
            e.enabled &&
            E.classList[e.isLocked ? "add" : "remove"](v.lockClass);
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
      D = ne(D);
      let w = "";
      if (y.type === "bullets") {
        let S = e.params.loop
          ? Math.ceil(v / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && S > v && (S = v);
        for (let b = 0; b < S; b += 1)
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
        D.forEach((S) => {
          y.type !== "custom" && (S.innerHTML = w || ""),
            y.type === "bullets" &&
              e.pagination.bullets.push(
                ...S.querySelectorAll(yi(y.bulletClass))
              );
        }),
        y.type !== "custom" && r("paginationRender", D[0]);
    }
    function f() {
      e.params.pagination = qn(
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
            v.length > 1 && (v = v.find((D) => Wi(D, ".swiper")[0] === e.el))),
          Array.isArray(v) && v.length === 1 && (v = v[0]),
          Object.assign(e.pagination, { el: v }),
          (v = ne(v)),
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
        ((v = ne(v)),
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
      (v = ne(v)),
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
        const D = v.target,
          w = ne(e.pagination.el);
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
          const S = w[0].classList.contains(e.params.pagination.hiddenClass);
          r(S === !0 ? "paginationShow" : "paginationHide"),
            w.forEach((b) =>
              b.classList.toggle(e.params.pagination.hiddenClass)
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
      _ = () => {
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
      disable: _,
      render: p,
      update: m,
      init: f,
      destroy: d,
    });
  }
  function id(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = He();
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
      const { scrollbar: P, rtlTranslate: L } = e,
        { dragEl: F, el: R } = P,
        I = e.params.scrollbar,
        M = e.params.loop ? e.progressLoop : e.progress;
      let O = c,
        A = (h - c) * M;
      L
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
        { dragEl: L, el: F } = P;
      (L.style.width = ""),
        (L.style.height = ""),
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
          ? (L.style.width = `${c}px`)
          : (L.style.height = `${c}px`),
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
      const { scrollbar: L, rtlTranslate: F } = e,
        { el: R } = L;
      let I;
      (I =
        (g(P) -
          Bs(R)[e.isHorizontal() ? "left" : "top"] -
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
      const L = e.params.scrollbar,
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
        L.hide && (I.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        r("scrollbarDragStart", P);
    }
    function v(P) {
      const { scrollbar: L, wrapperEl: F } = e,
        { el: R, dragEl: I } = L;
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
      const L = e.params.scrollbar,
        { scrollbar: F, wrapperEl: R } = e,
        { el: I } = F;
      a &&
        ((a = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (R.style.transitionDuration = "")),
        L.hide &&
          (clearTimeout(u),
          (u = Xi(() => {
            (I.style.opacity = 0), (I.style.transitionDuration = "400ms");
          }, 1e3))),
        r("scrollbarDragEnd", P),
        L.snapOnRelease && e.slideToClosest());
    }
    function w(P) {
      const { scrollbar: L, params: F } = e,
        R = L.el;
      if (!R) return;
      const I = R,
        M = F.passiveListeners ? { passive: !1, capture: !1 } : !1,
        O = F.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!I) return;
      const A = P === "on" ? "addEventListener" : "removeEventListener";
      I[A]("pointerdown", y, M),
        s[A]("pointermove", v, M),
        s[A]("pointerup", D, O);
    }
    function S() {
      !e.params.scrollbar.el || !e.scrollbar.el || w("on");
    }
    function b() {
      !e.params.scrollbar.el || !e.scrollbar.el || w("off");
    }
    function T() {
      const { scrollbar: P, el: L } = e;
      e.params.scrollbar = qn(
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
        if (((R = s.querySelectorAll(F.el)), !R.length)) return;
      } else R || (R = F.el);
      e.params.uniqueNavElements &&
        typeof F.el == "string" &&
        R.length > 1 &&
        L.querySelectorAll(F.el).length === 1 &&
        (R = L.querySelector(F.el)),
        R.length > 0 && (R = R[0]),
        R.classList.add(e.isHorizontal() ? F.horizontalClass : F.verticalClass);
      let I;
      R &&
        ((I = R.querySelector(yi(e.params.scrollbar.dragClass))),
        I || ((I = At("div", e.params.scrollbar.dragClass)), R.append(I))),
        Object.assign(P, { el: R, dragEl: I }),
        F.draggable && S(),
        R &&
          R.classList[e.enabled ? "remove" : "add"](
            ...Pi(e.params.scrollbar.lockClass)
          );
    }
    function E() {
      const P = e.params.scrollbar,
        L = e.scrollbar.el;
      L &&
        L.classList.remove(
          ...Pi(e.isHorizontal() ? P.horizontalClass : P.verticalClass)
        ),
        b();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const P = e.params.scrollbar;
      let { el: L } = e.scrollbar;
      (L = ne(L)),
        L.forEach((F) => {
          F.classList.remove(P.horizontalClass, P.verticalClass),
            F.classList.add(
              e.isHorizontal() ? P.horizontalClass : P.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? k() : (T(), d(), p());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        d();
      }),
      i("setTranslate", () => {
        p();
      }),
      i("setTransition", (P, L) => {
        f(L);
      }),
      i("enable disable", () => {
        const { el: P } = e.scrollbar;
        P &&
          P.classList[e.enabled ? "remove" : "add"](
            ...Pi(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        E();
      });
    const x = () => {
        e.el.classList.remove(...Pi(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...Pi(e.params.scrollbar.scrollbarDisabledClass)
            ),
          T(),
          d(),
          p();
      },
      k = () => {
        e.el.classList.add(...Pi(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...Pi(e.params.scrollbar.scrollbarDisabledClass)
            ),
          E();
      };
    Object.assign(e.scrollbar, {
      enable: x,
      disable: k,
      updateSize: d,
      setTranslate: p,
      init: T,
      destroy: E,
    });
  }
  function rd(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ parallax: { enabled: !1 } });
    const r =
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      s = (u, l) => {
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
          p = je(u, r);
        e.isElement && p.push(...je(e.hostEl, r)),
          p.forEach((f) => {
            s(f, c);
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
                  s(_, g);
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
  function sd(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = De();
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
        W = p[1].pageY;
      return Math.sqrt(dt(N - B, 2) + dt(W - $, 2));
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
        (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - B.x - s.scrollX) / a,
        (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - B.y - s.scrollY) / a,
      ];
    }
    function w() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function S(B) {
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
      if ((B.pointerType === "mouse" && p.splice(0, p.length), !S(B))) return;
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
              ? (f.imageWrapEl = Wi(f.imageEl, `.${$.containerClass}`)[0])
              : (f.imageWrapEl = void 0),
            !f.imageWrapEl)
          ) {
            f.imageEl = void 0;
            return;
          }
          f.maxRatio = v();
        }
        if (f.imageEl) {
          const [N, W] = D();
          (f.originX = N),
            (f.originY = W),
            (f.imageEl.style.transitionDuration = "0ms");
        }
        o = !0;
      }
    }
    function E(B) {
      if (!S(B)) return;
      const $ = e.params.zoom,
        N = e.zoom,
        W = p.findIndex((ue) => ue.pointerId === B.pointerId);
      W >= 0 && (p[W] = B),
        !(p.length < 2) &&
          ((m = !0),
          (f.scaleMove = y()),
          f.imageEl &&
            ((N.scale = (f.scaleMove / f.scaleStart) * a),
            N.scale > f.maxRatio &&
              (N.scale = f.maxRatio - 1 + dt(N.scale - f.maxRatio + 1, 0.5)),
            N.scale < $.minRatio &&
              (N.scale = $.minRatio + 1 - dt($.minRatio - N.scale + 1, 0.5)),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`)));
    }
    function x(B) {
      if (!S(B) || (B.pointerType === "mouse" && B.type === "pointerout"))
        return;
      const $ = e.params.zoom,
        N = e.zoom,
        W = p.findIndex((ue) => ue.pointerId === B.pointerId);
      W >= 0 && p.splice(W, 1),
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
    let k;
    function P() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function L() {
      clearTimeout(k),
        (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
        (k = setTimeout(() => {
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
      if (!S(B) || !b(B)) return;
      const W = e.zoom;
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
        (d.startX = Fn(f.imageWrapEl, "x") || 0),
        (d.startY = Fn(f.imageWrapEl, "y") || 0),
        (f.slideWidth = f.slideEl.offsetWidth),
        (f.slideHeight = f.slideEl.offsetHeight),
        (f.imageWrapEl.style.transitionDuration = "0ms"));
      const ue = d.width * W.scale,
        Qe = d.height * W.scale;
      if (
        ((d.minX = Math.min(f.slideWidth / 2 - ue / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - Qe / 2, 0)),
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
        L(),
        (d.isMoved = !0);
      const xe = (W.scale - a) / (f.maxRatio - e.params.zoom.minRatio),
        { originX: Q, originY: se } = f;
      (d.currentX =
        d.touchesCurrent.x -
        d.touchesStart.x +
        d.startX +
        xe * (d.width - Q * 2)),
        (d.currentY =
          d.touchesCurrent.y -
          d.touchesStart.y +
          d.startY +
          xe * (d.height - se * 2)),
        d.currentX < d.minX &&
          (d.currentX = d.minX + 1 - dt(d.minX - d.currentX + 1, 0.8)),
        d.currentX > d.maxX &&
          (d.currentX = d.maxX - 1 + dt(d.currentX - d.maxX + 1, 0.8)),
        d.currentY < d.minY &&
          (d.currentY = d.minY + 1 - dt(d.minY - d.currentY + 1, 0.8)),
        d.currentY > d.maxY &&
          (d.currentY = d.maxY - 1 + dt(d.currentY - d.maxY + 1, 0.8)),
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
      const W = g.x * $,
        ue = d.currentX + W,
        Qe = g.y * N,
        be = d.currentY + Qe;
      g.x !== 0 && ($ = Math.abs((ue - d.currentX) / g.x)),
        g.y !== 0 && (N = Math.abs((be - d.currentY) / g.y));
      const xe = Math.max($, N);
      (d.currentX = ue), (d.currentY = be);
      const Q = d.width * B.scale,
        se = d.height * B.scale;
      (d.minX = Math.min(f.slideWidth / 2 - Q / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - se / 2, 0)),
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
      if (a <= 1 || !f.imageWrapEl || !S(B) || !b(B)) return;
      const $ = s.getComputedStyle(f.imageWrapEl).transform,
        N = new s.DOMMatrix($);
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
      const W = (B.clientX - l.x) * c,
        ue = (B.clientY - l.y) * c,
        Qe = d.width * a,
        be = d.height * a,
        xe = f.slideWidth,
        Q = f.slideHeight,
        se = Math.min(xe / 2 - Qe / 2, 0),
        ve = -se,
        qe = Math.min(Q / 2 - be / 2, 0),
        z = -qe,
        Re = Math.max(Math.min(d.startX + W, ve), se),
        ot = Math.max(Math.min(d.startY + ue, z), qe);
      (f.imageWrapEl.style.transitionDuration = "0ms"),
        (f.imageWrapEl.style.transform = `translate3d(${Re}px, ${ot}px, 0)`),
        (l.x = B.clientX),
        (l.y = B.clientY),
        (d.startX = Re),
        (d.startY = ot),
        (d.currentX = Re),
        (d.currentY = ot);
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
              ? (f.slideEl = je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (f.slideEl = e.slides[e.activeIndex]));
        let We = f.slideEl.querySelector(`.${N.containerClass}`);
        We &&
          (We = We.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = We),
          We
            ? (f.imageWrapEl = Wi(f.imageEl, `.${N.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      if (!f.imageEl || !f.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        f.slideEl.classList.add(`${N.zoomedSlideClass}`);
      let W, ue, Qe, be, xe, Q, se, ve, qe, z, Re, ot, qt, ye, Vt, Zt, ti, Pe;
      typeof d.touchesStart.x == "undefined" && B
        ? ((W = B.pageX), (ue = B.pageY))
        : ((W = d.touchesStart.x), (ue = d.touchesStart.y));
      const Qt = a,
        fe = typeof B == "number" ? B : null;
      a === 1 &&
        fe &&
        ((W = void 0),
        (ue = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0));
      const Ct = v();
      ($.scale = fe || Ct),
        (a = fe || Ct),
        B && !(a === 1 && fe)
          ? ((ti = f.slideEl.offsetWidth),
            (Pe = f.slideEl.offsetHeight),
            (Qe = Bs(f.slideEl).left + s.scrollX),
            (be = Bs(f.slideEl).top + s.scrollY),
            (xe = Qe + ti / 2 - W),
            (Q = be + Pe / 2 - ue),
            (qe = f.imageEl.offsetWidth || f.imageEl.clientWidth),
            (z = f.imageEl.offsetHeight || f.imageEl.clientHeight),
            (Re = qe * $.scale),
            (ot = z * $.scale),
            (qt = Math.min(ti / 2 - Re / 2, 0)),
            (ye = Math.min(Pe / 2 - ot / 2, 0)),
            (Vt = -qt),
            (Zt = -ye),
            Qt > 0 &&
            fe &&
            typeof d.currentX == "number" &&
            typeof d.currentY == "number"
              ? ((se = (d.currentX * $.scale) / Qt),
                (ve = (d.currentY * $.scale) / Qt))
              : ((se = xe * $.scale), (ve = Q * $.scale)),
            se < qt && (se = qt),
            se > Vt && (se = Vt),
            ve < ye && (ve = ye),
            ve > Zt && (ve = Zt))
          : ((se = 0), (ve = 0)),
        fe && $.scale === 1 && ((f.originX = 0), (f.originY = 0)),
        (d.currentX = se),
        (d.currentY = ve),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = `translate3d(${se}px, ${ve}px,0)`),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = `translate3d(0,0,0) scale(${$.scale})`);
    }
    function C() {
      const B = e.zoom,
        $ = e.params.zoom;
      if (!f.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (f.slideEl = je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
          : (f.slideEl = e.slides[e.activeIndex]);
        let N = f.slideEl.querySelector(`.${$.containerClass}`);
        N &&
          (N = N.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = N),
          N
            ? (f.imageWrapEl = Wi(f.imageEl, `.${$.containerClass}`)[0])
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
    function Z() {
      const B = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
        $ = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: B, activeListenerWithCapture: $ };
    }
    function _e() {
      const B = e.zoom;
      if (B.enabled) return;
      B.enabled = !0;
      const { passiveListener: $, activeListenerWithCapture: N } = Z();
      e.wrapperEl.addEventListener("pointerdown", T, $),
        e.wrapperEl.addEventListener("pointermove", E, N),
        ["pointerup", "pointercancel", "pointerout"].forEach((W) => {
          e.wrapperEl.addEventListener(W, x, $);
        }),
        e.wrapperEl.addEventListener("pointermove", R, N);
    }
    function re() {
      const B = e.zoom;
      if (!B.enabled) return;
      B.enabled = !1;
      const { passiveListener: $, activeListenerWithCapture: N } = Z();
      e.wrapperEl.removeEventListener("pointerdown", T, $),
        e.wrapperEl.removeEventListener("pointermove", E, N),
        ["pointerup", "pointercancel", "pointerout"].forEach((W) => {
          e.wrapperEl.removeEventListener(W, x, $);
        }),
        e.wrapperEl.removeEventListener("pointermove", R, N);
    }
    i("init", () => {
      e.params.zoom.enabled && _e();
    }),
      i("destroy", () => {
        re();
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
        enable: _e,
        disable: re,
        in: A,
        out: C,
        toggle: Y,
      });
  }
  function nd(n) {
    let { swiper: e, extendParams: t, on: i } = n;
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
    function s(l) {
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
          (s(g), (p = -e.controller.spline.interpolate(-_))),
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
              Xi(() => {
                d.updateAutoHeight();
              }),
            Ur(d.wrapperEl, () => {
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
  function ad(n) {
    let { swiper: e, extendParams: t, on: i } = n;
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
      s,
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
      (M = ne(M)),
        M.forEach((O) => {
          O.setAttribute("tabIndex", "0");
        });
    }
    function h(M) {
      (M = ne(M)),
        M.forEach((O) => {
          O.setAttribute("tabIndex", "-1");
        });
    }
    function m(M, O) {
      (M = ne(M)),
        M.forEach((A) => {
          A.setAttribute("role", O);
        });
    }
    function p(M, O) {
      (M = ne(M)),
        M.forEach((A) => {
          A.setAttribute("aria-roledescription", O);
        });
    }
    function f(M, O) {
      (M = ne(M)),
        M.forEach((A) => {
          A.setAttribute("aria-controls", O);
        });
    }
    function d(M, O) {
      (M = ne(M)),
        M.forEach((A) => {
          A.setAttribute("aria-label", O);
        });
    }
    function g(M, O) {
      (M = ne(M)),
        M.forEach((A) => {
          A.setAttribute("id", O);
        });
    }
    function _(M, O) {
      (M = ne(M)),
        M.forEach((A) => {
          A.setAttribute("aria-live", O);
        });
    }
    function y(M) {
      (M = ne(M)),
        M.forEach((O) => {
          O.setAttribute("aria-disabled", !0);
        });
    }
    function v(M) {
      (M = ne(M)),
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
          !M.target.matches(yi(e.params.pagination.bulletClass))
        )
      ) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const C = ne(e.navigation.prevEl);
          ne(e.navigation.nextEl).includes(A) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? u(O.lastSlideMessage) : u(O.nextSlideMessage)),
            C.includes(A) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? u(O.firstSlideMessage) : u(O.prevSlideMessage));
        }
        e.pagination &&
          A.matches(yi(e.params.pagination.bulletClass)) &&
          A.click();
      }
    }
    function w() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: M, prevEl: O } = e.navigation;
      O && (e.isBeginning ? (y(O), h(O)) : (v(O), c(O))),
        M && (e.isEnd ? (y(M), h(M)) : (v(M), c(M)));
    }
    function S() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function b() {
      return S() && e.params.pagination.clickable;
    }
    function T() {
      const M = e.params.a11y;
      S() &&
        e.pagination.bullets.forEach((O) => {
          e.params.pagination.clickable &&
            (c(O),
            e.params.pagination.renderBullet ||
              (m(O, "button"),
              d(
                O,
                M.paginationBulletMessage.replace(/\{\{index\}\}/, Wr(O) + 1)
              ))),
            O.matches(yi(e.params.pagination.bulletActiveClass))
              ? O.setAttribute("aria-current", "true")
              : O.removeAttribute("aria-current");
        });
    }
    const E = (M, O, A) => {
        c(M),
          M.tagName !== "BUTTON" &&
            (m(M, "button"), M.addEventListener("keydown", D)),
          d(M, A),
          f(M, O);
      },
      x = (M) => {
        a && a !== M.target && !a.contains(M.target) && (s = !0),
          (e.a11y.clicked = !0);
      },
      k = () => {
        (s = !1),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
      },
      P = (M) => {
        o = new Date().getTime();
      },
      L = (M) => {
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
            s ||
              (e.params.loop
                ? e.slideToLoop(
                    parseInt(O.getAttribute("data-swiper-slide-index")),
                    0
                  )
                : e.slideTo(e.slides.indexOf(O), 0),
              (s = !1));
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
              Z = M.slideLabelMessage
                .replace(/\{\{index\}\}/, Y + 1)
                .replace(/\{\{slidesLength\}\}/, O);
            d(A, Z);
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
        let { nextEl: Z, prevEl: _e } = e.navigation ? e.navigation : {};
        (Z = ne(Z)),
          (_e = ne(_e)),
          Z && Z.forEach((B) => E(B, C, M.nextSlideMessage)),
          _e && _e.forEach((B) => E(B, C, M.prevSlideMessage)),
          b() &&
            ne(e.pagination.el).forEach(($) => {
              $.addEventListener("keydown", D);
            }),
          He().addEventListener("visibilitychange", P),
          e.el.addEventListener("focus", L, !0),
          e.el.addEventListener("focus", L, !0),
          e.el.addEventListener("pointerdown", x, !0),
          e.el.addEventListener("pointerup", k, !0);
      };
    function I() {
      r && r.remove();
      let { nextEl: M, prevEl: O } = e.navigation ? e.navigation : {};
      (M = ne(M)),
        (O = ne(O)),
        M && M.forEach((C) => C.removeEventListener("keydown", D)),
        O && O.forEach((C) => C.removeEventListener("keydown", D)),
        b() &&
          ne(e.pagination.el).forEach((Y) => {
            Y.removeEventListener("keydown", D);
          }),
        He().removeEventListener("visibilitychange", P),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", L, !0),
          e.el.removeEventListener("pointerdown", x, !0),
          e.el.removeEventListener("pointerup", k, !0));
    }
    i("beforeInit", () => {
      (r = At("span", e.params.a11y.notificationClass)),
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
  function od(n) {
    let { swiper: e, extendParams: t, on: i } = n;
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
      s = {};
    const a = (p) =>
        p
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      o = (p) => {
        const f = De();
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
        const d = De();
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
        (s = o(e.params.url)), l(e.params.speed, s.value, !1);
      },
      h = () => {
        const p = De();
        if (e.params.history) {
          if (!p.history || !p.history.pushState) {
            (e.params.history.enabled = !1),
              (e.params.hashNavigation.enabled = !0);
            return;
          }
          if (((r = !0), (s = o(e.params.url)), !s.key && !s.value)) {
            e.params.history.replaceState || p.addEventListener("popstate", c);
            return;
          }
          l(0, s.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || p.addEventListener("popstate", c);
        }
      },
      m = () => {
        const p = De();
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
  function ld(n) {
    let { swiper: e, extendParams: t, emit: i, on: r } = n,
      s = !1;
    const a = He(),
      o = De();
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
            je(
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
        if (!s || !e.params.hashNavigation.enabled) return;
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
        s = !0;
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
        s && l();
      }),
      r("slideChange", () => {
        s && e.params.cssMode && l();
      });
  }
  function ud(n) {
    let { swiper: e, extendParams: t, on: i, emit: r, params: s } = n;
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
      u = s && s.autoplay ? s.autoplay.delay : 3e3,
      l = s && s.autoplay ? s.autoplay.delay : 3e3,
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
          !(y || (O.detail && O.detail.bySwiperTouchMove)) && x()));
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
      S = (O) => {
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
          Z = () => {
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
                  S();
                })));
          };
        return (
          A > 0
            ? (clearTimeout(a),
              (a = setTimeout(() => {
                Z();
              }, A)))
            : requestAnimationFrame(() => {
                Z();
              }),
          A
        );
      },
      b = () => {
        (h = new Date().getTime()),
          (e.autoplay.running = !0),
          S(),
          r("autoplayStart");
      },
      T = () => {
        (e.autoplay.running = !1),
          clearTimeout(a),
          cancelAnimationFrame(o),
          r("autoplayStop");
      },
      E = (O, A) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(a), O || (_ = !0);
        const C = () => {
          r("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", v)
              : x();
        };
        if (((e.autoplay.paused = !0), A)) {
          g && (c = e.params.autoplay.delay), (g = !1), C();
          return;
        }
        (c = (c || e.params.autoplay.delay) - (new Date().getTime() - h)),
          !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), C());
      },
      x = () => {
        (e.isEnd && c < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((h = new Date().getTime()),
          _ ? ((_ = !1), S(c)) : S(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      k = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const O = He();
        O.visibilityState === "hidden" && ((_ = !0), E(!0)),
          O.visibilityState === "visible" && x();
      },
      P = (O) => {
        O.pointerType === "mouse" &&
          ((_ = !0), (y = !0), !(e.animating || e.autoplay.paused) && E(!0));
      },
      L = (O) => {
        O.pointerType === "mouse" && ((y = !1), e.autoplay.paused && x());
      },
      F = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", P),
          e.el.addEventListener("pointerleave", L));
      },
      R = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", P),
          e.el.removeEventListener("pointerleave", L));
      },
      I = () => {
        He().addEventListener("visibilitychange", k);
      },
      M = () => {
        He().removeEventListener("visibilitychange", k);
      };
    i("init", () => {
      e.params.autoplay.enabled && (F(), I(), b());
    }),
      i("destroy", () => {
        R(), M(), e.autoplay.running && T();
      }),
      i("_freeModeStaticRelease", () => {
        (f || _) && x();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? T() : E(!0, !0);
      }),
      i("beforeTransitionStart", (O, A, C) => {
        e.destroyed ||
          !e.autoplay.running ||
          (C || !e.params.autoplay.disableOnInteraction ? E(!0, !0) : T());
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
              (_ = !0), (f = !0), E(!0);
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
          f && e.params.cssMode && x(), (f = !1), (p = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (g = !0);
      }),
      Object.assign(e.autoplay, { start: b, stop: T, pause: E, resume: x });
  }
  function cd(n) {
    let { swiper: e, extendParams: t, on: i } = n;
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
      s = !1;
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
      } else if (Xr(l.swiper)) {
        const h = Object.assign({}, l.swiper);
        Object.assign(h, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new c(h)),
          (s = !0);
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
          je(
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
          const c = He(),
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
        !l || l.destroyed || (s && l.destroy());
      }),
      Object.assign(e.thumbs, { init: o, update: u });
  }
  function dd(n) {
    let { swiper: e, extendParams: t, emit: i, once: r } = n;
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
    function s() {
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
          time: Yt(),
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
        g = Yt() - f.touchStartTime;
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
            E = f.velocities.pop(),
            x = T.position - E.position,
            k = T.time - E.time;
          (e.velocity = x / k),
            (e.velocity /= 2),
            Math.abs(e.velocity) < c.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (k > 150 || Yt() - T.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= c.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let _ = 1e3 * c.freeMode.momentumRatio;
        const y = e.velocity * _;
        let v = e.translate + y;
        m && (v = -v);
        let D = !1,
          w;
        const S = Math.abs(e.velocity) * 20 * c.freeMode.momentumBounceRatio;
        let b;
        if (v < e.maxTranslate())
          c.freeMode.momentumBounce
            ? (v + e.maxTranslate() < -S && (v = e.maxTranslate() - S),
              (w = e.maxTranslate()),
              (D = !0),
              (f.allowMomentumBounce = !0))
            : (v = e.maxTranslate()),
            c.loop && c.centeredSlides && (b = !0);
        else if (v > e.minTranslate())
          c.freeMode.momentumBounce
            ? (v - e.minTranslate() > S && (v = e.minTranslate() + S),
              (w = e.minTranslate()),
              (D = !0),
              (f.allowMomentumBounce = !0))
            : (v = e.minTranslate()),
            c.loop && c.centeredSlides && (b = !0);
        else if (c.freeMode.sticky) {
          let T;
          for (let E = 0; E < p.length; E += 1)
            if (p[E] > -v) {
              T = E;
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
              E = e.slidesSizesGrid[e.activeIndex];
            T < E
              ? (_ = c.speed)
              : T < 2 * E
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
            Ur(h, () => {
              !e ||
                e.destroyed ||
                !f.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(c.speed),
                setTimeout(() => {
                  e.setTranslate(w),
                    Ur(h, () => {
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
              Ur(h, () => {
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
      freeMode: { onTouchStart: s, onTouchMove: a, onTouchEnd: o },
    });
  }
  function fd(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ grid: { rows: 1, fill: "column" } });
    let r, s, a, o;
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
          (s = r / _);
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
          S =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : _.length;
        let b, T, E;
        if (w === "row" && y > 1) {
          const x = Math.floor(d / (y * D)),
            k = d - D * y * x,
            P = x === 0 ? y : Math.min(Math.ceil((S - x * D * y) / D), y);
          (E = Math.floor(k / P)),
            (T = k - E * P + x * y),
            (b = T + (E * r) / D),
            (g.style.order = b);
        } else
          w === "column"
            ? ((T = Math.floor(d / D)),
              (E = d - T * D),
              (T > a || (T === a && E === D - 1)) &&
                ((E += 1), E >= D && ((E = 0), (T += 1))))
            : ((E = Math.floor(d / s)), (T = d - E * s));
        (g.row = E),
          (g.column = T),
          (g.style.height = `calc((100% - ${(D - 1) * v}px) / ${D})`),
          (g.style[e.getDirectionLabel("margin-top")] =
            E !== 0 ? v && `${v}px` : ""),
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
          for (let S = 0; S < g.length; S += 1) {
            let b = g[S];
            y && (b = Math.floor(b)), g[S] < e.virtualSize + g[0] && w.push(b);
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
  function pd(n) {
    const e = this,
      { params: t, slidesEl: i } = e;
    t.loop && e.loopDestroy();
    const r = (s) => {
      if (typeof s == "string") {
        const a = document.createElement("div");
        (a.innerHTML = s), i.append(a.children[0]), (a.innerHTML = "");
      } else i.append(s);
    };
    if (typeof n == "object" && "length" in n)
      for (let s = 0; s < n.length; s += 1) n[s] && r(n[s]);
    else r(n);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update();
  }
  function hd(n) {
    const e = this,
      { params: t, activeIndex: i, slidesEl: r } = e;
    t.loop && e.loopDestroy();
    let s = i + 1;
    const a = (o) => {
      if (typeof o == "string") {
        const u = document.createElement("div");
        (u.innerHTML = o), r.prepend(u.children[0]), (u.innerHTML = "");
      } else r.prepend(o);
    };
    if (typeof n == "object" && "length" in n) {
      for (let o = 0; o < n.length; o += 1) n[o] && a(n[o]);
      s = i + n.length;
    } else a(n);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update(),
      e.slideTo(s, 0, !1);
  }
  function md(n, e) {
    const t = this,
      { params: i, activeIndex: r, slidesEl: s } = t;
    let a = r;
    i.loop && ((a -= t.loopedSlides), t.loopDestroy(), t.recalcSlides());
    const o = t.slides.length;
    if (n <= 0) {
      t.prependSlide(e);
      return;
    }
    if (n >= o) {
      t.appendSlide(e);
      return;
    }
    let u = a > n ? a + 1 : a;
    const l = [];
    for (let c = o - 1; c >= n; c -= 1) {
      const h = t.slides[c];
      h.remove(), l.unshift(h);
    }
    if (typeof e == "object" && "length" in e) {
      for (let c = 0; c < e.length; c += 1) e[c] && s.append(e[c]);
      u = a > n ? a + e.length : a;
    } else s.append(e);
    for (let c = 0; c < l.length; c += 1) s.append(l[c]);
    t.recalcSlides(),
      i.loop && t.loopCreate(),
      (!i.observer || t.isElement) && t.update(),
      i.loop ? t.slideTo(u + t.loopedSlides, 0, !1) : t.slideTo(u, 0, !1);
  }
  function gd(n) {
    const e = this,
      { params: t, activeIndex: i } = e;
    let r = i;
    t.loop && ((r -= e.loopedSlides), e.loopDestroy());
    let s = r,
      a;
    if (typeof n == "object" && "length" in n) {
      for (let o = 0; o < n.length; o += 1)
        (a = n[o]), e.slides[a] && e.slides[a].remove(), a < s && (s -= 1);
      s = Math.max(s, 0);
    } else (a = n), e.slides[a] && e.slides[a].remove(), a < s && (s -= 1), (s = Math.max(s, 0));
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update(),
      t.loop ? e.slideTo(s + e.loopedSlides, 0, !1) : e.slideTo(s, 0, !1);
  }
  function vd() {
    const n = this,
      e = [];
    for (let t = 0; t < n.slides.length; t += 1) e.push(t);
    n.removeSlide(e);
  }
  function yd(n) {
    let { swiper: e } = n;
    Object.assign(e, {
      appendSlide: pd.bind(e),
      prependSlide: hd.bind(e),
      addSlide: md.bind(e),
      removeSlide: gd.bind(e),
      removeAllSlides: vd.bind(e),
    });
  }
  function yr(n) {
    const {
      effect: e,
      swiper: t,
      on: i,
      setTranslate: r,
      setTransition: s,
      overwriteParams: a,
      perspective: o,
      recreateShadows: u,
      getEffectParams: l,
    } = n;
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
        t.params.effect === e && s(m);
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
  function jr(n, e) {
    const t = Gi(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function qs(n) {
    let { swiper: e, duration: t, transformElements: i, allSlides: r } = n;
    const { activeIndex: s } = e,
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
            return e.getSlideIndex(c) === s;
          })),
        u.forEach((l) => {
          Ur(l, () => {
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
  function _d(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ fadeEffect: { crossFade: !1 } }),
      yr({
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
              f = jr(o, l);
            (f.style.opacity = p),
              (f.style.transform = `translate3d(${h}px, ${m}px, 0px)`);
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((u) => Gi(u));
          o.forEach((u) => {
            u.style.transitionDuration = `${a}ms`;
          }),
            qs({ swiper: e, duration: a, transformElements: o, allSlides: !0 });
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
  function Dd(n) {
    let { swiper: e, extendParams: t, on: i } = n;
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
        ((h = At(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            c ? "left" : "top"
          }`.split(" ")
        )),
        u.append(h)),
        m ||
          ((m = At(
            "div",
            `swiper-slide-shadow-cube swiper-slide-shadow-${
              c ? "right" : "bottom"
            }`.split(" ")
          )),
          u.append(m)),
        h && (h.style.opacity = Math.max(-l, 0)),
        m && (m.style.opacity = Math.max(l, 0));
    };
    yr({
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
          g = $s(e),
          _ = e.params.cubeEffect,
          y = e.isHorizontal(),
          v = e.virtual && e.params.virtual.enabled;
        let D = 0,
          w;
        _.shadow &&
          (y
            ? ((w = e.wrapperEl.querySelector(".swiper-cube-shadow")),
              w ||
                ((w = At("div", "swiper-cube-shadow")), e.wrapperEl.append(w)),
              (w.style.height = `${h}px`))
            : ((w = u.querySelector(".swiper-cube-shadow")),
              w || ((w = At("div", "swiper-cube-shadow")), u.append(w))));
        for (let b = 0; b < c.length; b += 1) {
          const T = c[b];
          let E = b;
          v && (E = parseInt(T.getAttribute("data-swiper-slide-index"), 10));
          let x = E * 90,
            k = Math.floor(x / 360);
          p && ((x = -x), (k = Math.floor(-x / 360)));
          const P = Math.max(Math.min(T.progress, 1), -1);
          let L = 0,
            F = 0,
            R = 0;
          E % 4 === 0
            ? ((L = -k * 4 * f), (R = 0))
            : (E - 1) % 4 === 0
            ? ((L = 0), (R = -k * 4 * f))
            : (E - 2) % 4 === 0
            ? ((L = f + k * 4 * f), (R = f))
            : (E - 3) % 4 === 0 && ((L = -f), (R = 3 * f + f * 4 * k)),
            p && (L = -L),
            y || ((F = L), (L = 0));
          const I = `rotateX(${g(y ? 0 : -x)}deg) rotateY(${g(
            y ? x : 0
          )}deg) translate3d(${L}px, ${F}px, ${R}px)`;
          P <= 1 &&
            P > -1 &&
            ((D = E * 90 + P * 90), p && (D = -E * 90 - P * 90)),
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
              E = _.shadowScale,
              x = _.shadowScale / T,
              k = _.shadowOffset;
            w.style.transform = `scale3d(${E}, 1, ${x}) translate3d(0px, ${
              m / 2 + k
            }px, ${-m / 2 / x}px) rotateX(-89.99deg)`;
          }
        const S =
          (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -f / 2 : 0;
        (l.style.transform = `translate3d(0px,0,${S}px) rotateX(${g(
          e.isHorizontal() ? 0 : D
        )}deg) rotateY(${g(e.isHorizontal() ? -D : 0)}deg)`),
          l.style.setProperty("--swiper-cube-translate-z", `${S}px`);
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
  function _r(n, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
        n ? ` swiper-slide-shadow-${n}` : ""
      }`,
      r = Gi(e);
    let s = r.querySelector(`.${i.split(" ").join(".")}`);
    return s || ((s = At("div", i.split(" "))), r.append(s)), s;
  }
  function wd(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
    const r = (u, l) => {
      let c = e.isHorizontal()
          ? u.querySelector(".swiper-slide-shadow-left")
          : u.querySelector(".swiper-slide-shadow-top"),
        h = e.isHorizontal()
          ? u.querySelector(".swiper-slide-shadow-right")
          : u.querySelector(".swiper-slide-shadow-bottom");
      c || (c = _r("flip", u, e.isHorizontal() ? "left" : "top")),
        h || (h = _r("flip", u, e.isHorizontal() ? "right" : "bottom")),
        c && (c.style.opacity = Math.max(-l, 0)),
        h && (h.style.opacity = Math.max(l, 0));
    };
    yr({
      effect: "flip",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: u, rtlTranslate: l } = e,
          c = e.params.flipEffect,
          h = $s(e);
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
            S = jr(c, p);
          S.style.transform = w;
        }
      },
      setTransition: (u) => {
        const l = e.slides.map((c) => Gi(c));
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
          qs({ swiper: e, duration: u, transformElements: l });
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
  function bd(n) {
    let { swiper: e, extendParams: t, on: i } = n;
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
      yr({
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
            g = $s(e);
          for (let _ = 0, y = u.length; _ < y; _ += 1) {
            const v = u[_],
              D = l[_],
              w = v.swiperSlideOffset,
              S = (p - w - D / 2) / D,
              b =
                typeof c.modifier == "function"
                  ? c.modifier(S)
                  : S * c.modifier;
            let T = h ? f * b : 0,
              E = h ? 0 : f * b,
              x = -d * Math.abs(b),
              k = c.stretch;
            typeof k == "string" &&
              k.indexOf("%") !== -1 &&
              (k = (parseFloat(c.stretch) / 100) * D);
            let P = h ? 0 : k * b,
              L = h ? k * b : 0,
              F = 1 - (1 - c.scale) * Math.abs(b);
            Math.abs(L) < 0.001 && (L = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(x) < 0.001 && (x = 0),
              Math.abs(T) < 0.001 && (T = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(F) < 0.001 && (F = 0);
            const R = `translate3d(${L}px,${P}px,${x}px)  rotateX(${g(
                E
              )}deg) rotateY(${g(T)}deg) scale(${F})`,
              I = jr(c, v);
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
              M || (M = _r("coverflow", v, h ? "left" : "top")),
                O || (O = _r("coverflow", v, h ? "right" : "bottom")),
                M && (M.style.opacity = b > 0 ? b : 0),
                O && (O.style.opacity = -b > 0 ? -b : 0);
            }
          }
        },
        setTransition: (a) => {
          e.slides
            .map((u) => Gi(u))
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
  function xd(n) {
    let { swiper: e, extendParams: t, on: i } = n;
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
    yr({
      effect: "creative",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: o, wrapperEl: u, slidesSizesGrid: l } = e,
          c = e.params.creativeEffect,
          { progressMultiplier: h } = c,
          m = e.params.centeredSlides,
          p = $s(e);
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
          let S = !1;
          e.isHorizontal() || ((D[1] = D[0]), (D[0] = 0));
          let b = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          _ < 0 ? ((b = c.next), (S = !0)) : _ > 0 && ((b = c.prev), (S = !0)),
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
            E = `rotateX(${p(w[0])}deg) rotateY(${p(w[1])}deg) rotateZ(${p(
              w[2]
            )}deg)`,
            x =
              y < 0
                ? `scale(${1 + (1 - b.scale) * y * h})`
                : `scale(${1 - (1 - b.scale) * y * h})`,
            k =
              y < 0 ? 1 + (1 - b.opacity) * y * h : 1 - (1 - b.opacity) * y * h,
            P = `translate3d(${T}) ${E} ${x}`;
          if ((S && b.shadow) || !S) {
            let F = d.querySelector(".swiper-slide-shadow");
            if ((!F && b.shadow && (F = _r("creative", d)), F)) {
              const R = c.shadowPerProgress ? _ * (1 / c.limitProgress) : _;
              F.style.opacity = Math.min(Math.max(Math.abs(R), 0), 1);
            }
          }
          const L = jr(c, d);
          (L.style.transform = P),
            (L.style.opacity = k),
            b.origin && (L.style.transformOrigin = b.origin);
        }
      },
      setTransition: (o) => {
        const u = e.slides.map((l) => Gi(l));
        u.forEach((l) => {
          (l.style.transitionDuration = `${o}ms`),
            l.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
              c.style.transitionDuration = `${o}ms`;
            });
        }),
          qs({ swiper: e, duration: o, transformElements: u, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function Ed(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      yr({
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
              S = -l.perSlideRotate * g,
              b = l.perSlideOffset - Math.abs(g) * 0.75;
            const T =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p,
              E =
                (T === o || T === o - 1) &&
                g > 0 &&
                g < 1 &&
                (h || e.params.cssMode) &&
                m < c,
              x =
                (T === o || T === o + 1) &&
                g < 0 &&
                g > -1 &&
                (h || e.params.cssMode) &&
                m > c;
            if (E || x) {
              const F = dt(1 - Math.abs((Math.abs(g) - 0.5) / 0.5), 0.5);
              (S += -28 * g * F),
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
            const k = g < 0 ? `${1 + (1 - w) * g}` : `${1 - (1 - w) * g}`,
              P = `
        translate3d(${y}, ${v}, ${D}px)
        rotateZ(${l.rotate ? (u ? -S : S) : 0}deg)
        scale(${k})
      `;
            if (l.slideShadows) {
              let F = f.querySelector(".swiper-slide-shadow");
              F || (F = _r("cards", f)),
                F &&
                  (F.style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            f.style.zIndex = -Math.abs(Math.round(d)) + a.length;
            const L = jr(l, f);
            L.style.transform = P;
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((u) => Gi(u));
          o.forEach((u) => {
            (u.style.transitionDuration = `${a}ms`),
              u.querySelectorAll(".swiper-slide-shadow").forEach((l) => {
                l.style.transitionDuration = `${a}ms`;
              });
          }),
            qs({ swiper: e, duration: a, transformElements: o });
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
  const Sd = [
    Zc,
    Qc,
    Jc,
    ed,
    td,
    id,
    rd,
    sd,
    nd,
    ad,
    od,
    ld,
    ud,
    cd,
    dd,
    fd,
    yd,
    _d,
    Dd,
    wd,
    bd,
    xd,
    Ed,
  ];
  Dt.use(Sd);
  class Td {
    constructor() {
      this.swiper = new Dt("[swiper='clinic-card']", {
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
  function Kr() {
    new Td();
  }
  function _i(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function yo(n, e) {
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.constructor = n),
      (n.__proto__ = e);
  }
  /*!
   * GSAP 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Ft = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Dr = { duration: 0.5, overwrite: !1, delay: 0 },
    Vn,
    Ke,
    we,
    Xt = 1e8,
    pe = 1 / Xt,
    Hn = Math.PI * 2,
    Cd = Hn / 4,
    Md = 0,
    _o = Math.sqrt,
    Pd = Math.cos,
    Ad = Math.sin,
    Ye = function (e) {
      return typeof e == "string";
    },
    Me = function (e) {
      return typeof e == "function";
    },
    Di = function (e) {
      return typeof e == "number";
    },
    Yn = function (e) {
      return typeof e == "undefined";
    },
    ai = function (e) {
      return typeof e == "object";
    },
    wt = function (e) {
      return e !== !1;
    },
    Xn = function () {
      return typeof window != "undefined";
    },
    Vs = function (e) {
      return Me(e) || Ye(e);
    },
    Do =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    it = Array.isArray,
    Gn = /(?:-?\.?\d|\.)+/gi,
    wo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    wr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Wn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    bo = /[+-]=-?[.\d]+/,
    xo = /[^,'"\[\]\s]+/gi,
    Fd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Se,
    oi,
    Un,
    jn,
    Ot = {},
    Hs = {},
    Eo,
    So = function (e) {
      return (Hs = xr(e, Ot)) && Et;
    },
    Kn = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Zr = function (e, t) {
      return !t && console.warn(e);
    },
    To = function (e, t) {
      return (e && (Ot[e] = t) && Hs && (Hs[e] = t)) || Ot;
    },
    Qr = function () {
      return 0;
    },
    Od = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ys = { suppressEvents: !0, kill: !1 },
    kd = { suppressEvents: !0 },
    Zn = {},
    Fi = [],
    Qn = {},
    Co,
    kt = {},
    Jn = {},
    Mo = 30,
    Xs = [],
    ea = "",
    ta = function (e) {
      var t = e[0],
        i,
        r;
      if ((ai(t) || Me(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = Xs.length; r-- && !Xs[r].targetTest(t); );
        i = Xs[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new rl(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    Ui = function (e) {
      return e._gsap || ta(Wt(e))[0]._gsap;
    },
    Po = function (e, t, i) {
      return (i = e[t]) && Me(i)
        ? e[t]()
        : (Yn(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    bt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Fe = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Le = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    br = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    Ld = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    Gs = function () {
      var e = Fi.length,
        t = Fi.slice(0),
        i,
        r;
      for (Qn = {}, Fi.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    Ao = function (e, t, i, r) {
      Fi.length && !Ke && Gs(),
        e.render(t, i, Ke && t < 0 && (e._initted || e._startAt)),
        Fi.length && !Ke && Gs();
    },
    Fo = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(xo).length < 2
        ? t
        : Ye(e)
        ? e.trim()
        : e;
    },
    Oo = function (e) {
      return e;
    },
    Lt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Id = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    xr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    ko = function n(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = ai(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    Ws = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    Jr = function (e) {
      var t = e.parent || Se,
        i = e.keyframes ? Id(it(e.keyframes)) : Lt;
      if (wt(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    zd = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    Lo = function (e, t, i, r, s) {
      var a = e[r],
        o;
      if (s) for (o = t[s]; a && a[s] > o; ) a = a._prev;
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
    Us = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var s = t._prev,
        a = t._next;
      s ? (s._next = a) : e[i] === t && (e[i] = a),
        a ? (a._prev = s) : e[r] === t && (e[r] = s),
        (t._next = t._prev = t.parent = null);
    },
    Oi = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    ji = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    Rd = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    ia = function (e, t, i, r) {
      return (
        e._startAt &&
        (Ke
          ? e._startAt.revert(Ys)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    Bd = function n(e) {
      return !e || (e._ts && n(e.parent));
    },
    Io = function (e) {
      return e._repeat ? Er(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Er = function (e, t) {
      var i = Math.floor((e = Le(e / t)));
      return e && i === e ? i - 1 : i;
    },
    js = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    Ks = function (e) {
      return (e._end = Le(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || pe) || 0)
      ));
    },
    Zs = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = Le(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          Ks(e),
          i._dirty || ji(i, e)),
        e
      );
    },
    zo = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = js(e.rawTime(), t)),
          (!t._dur || ts(0, t.totalDuration(), i) - t._tTime > pe) &&
            t.render(i, !0)),
        ji(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -pe;
      }
    },
    li = function (e, t, i, r) {
      return (
        t.parent && Oi(t),
        (t._start = Le(
          (Di(i) ? i : i || e !== Se ? Gt(e, i, t) : e._time) + t._delay
        )),
        (t._end = Le(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        Lo(e, t, "_first", "_last", e._sort ? "_start" : 0),
        ra(t) || (e._recent = t),
        r || zo(e, t),
        e._ts < 0 && Zs(e, e._tTime),
        e
      );
    },
    Ro = function (e, t) {
      return (
        (Ot.ScrollTrigger || Kn("scrollTrigger", t)) &&
        Ot.ScrollTrigger.create(t, e)
      );
    },
    Bo = function (e, t, i, r, s) {
      if ((fa(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Ke &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Co !== zt.frame
      )
        return Fi.push(e), (e._lazy = [s, r]), 1;
    },
    $d = function n(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
    },
    ra = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Nd = function (e, t, i, r) {
      var s = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && $d(e) && !(!e._initted && ra(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !ra(e))))
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
          ((u = ts(0, e._tDur, t)),
          (c = Er(u, o)),
          e._yoyo && c & 1 && (a = 1 - a),
          c !== Er(e._tTime, o) &&
            ((s = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== s || Ke || r || e._zTime === pe || (!t && e._zTime))
      ) {
        if (!e._initted && Bo(e, t, r, i, u)) return;
        for (
          h = e._zTime,
            e._zTime = t || (i ? pe : 0),
            i || (i = t && !h),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = u,
            l = e._pt;
          l;

        )
          l.r(a, l.d), (l = l._next);
        t < 0 && ia(e, t, i, !0),
          e._onUpdate && !i && It(e, "onUpdate"),
          u && e._repeat && !i && e.parent && It(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && Oi(e, 1),
            !i &&
              !Ke &&
              (It(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    qd = function (e, t, i) {
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
    Sr = function (e, t, i, r) {
      var s = e._repeat,
        a = Le(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = s ? (s < 0 ? 1e10 : Le(a * (s + 1) + e._rDelay * s)) : a),
        o > 0 && !r && Zs(e, (e._tTime = e._tDur * o)),
        e.parent && Ks(e),
        i || ji(e.parent, e),
        e
      );
    },
    $o = function (e) {
      return e instanceof pt ? ji(e) : Sr(e, e._dur);
    },
    Vd = { _start: 0, endTime: Qr, totalDuration: Qr },
    Gt = function n(e, t, i) {
      var r = e.labels,
        s = e._recent || Vd,
        a = e.duration() >= Xt ? s.endTime(!1) : e._dur,
        o,
        u,
        l;
      return Ye(t) && (isNaN(t) || t in r)
        ? ((u = t.charAt(0)),
          (l = t.substr(-1) === "%"),
          (o = t.indexOf("=")),
          u === "<" || u === ">"
            ? (o >= 0 && (t = t.replace(/=/, "")),
              (u === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (l ? (o < 0 ? s : i).totalDuration() / 100 : 1))
            : o < 0
            ? (t in r || (r[t] = a), r[t])
            : ((u = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
              l && i && (u = (u / 100) * (it(i) ? i[0] : i).totalDuration()),
              o > 1 ? n(e, t.substr(0, o - 1), i) + u : a + u))
        : t == null
        ? a
        : +t;
    },
    es = function (e, t, i) {
      var r = Di(t[1]),
        s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[s],
        o,
        u;
      if ((r && (a.duration = t[1]), (a.parent = i), e)) {
        for (o = a, u = i; u && !("immediateRender" in o); )
          (o = u.vars.defaults || {}), (u = wt(u.vars.inherit) && u.parent);
        (a.immediateRender = wt(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
      }
      return new Ie(t[0], a, t[s + 1]);
    },
    ki = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    ts = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    rt = function (e, t) {
      return !Ye(e) || !(t = Fd.exec(e)) ? "" : t[1];
    },
    Hd = function (e, t, i) {
      return ki(i, function (r) {
        return ts(e, t, r);
      });
    },
    sa = [].slice,
    No = function (e, t) {
      return (
        e &&
        ai(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && ai(e[0]))) &&
        !e.nodeType &&
        e !== oi
      );
    },
    Yd = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var s;
          return (Ye(r) && !t) || No(r, 1)
            ? (s = i).push.apply(s, Wt(r))
            : i.push(r);
        }) || i
      );
    },
    Wt = function (e, t, i) {
      return we && !t && we.selector
        ? we.selector(e)
        : Ye(e) && !i && (Un || !Cr())
        ? sa.call((t || jn).querySelectorAll(e), 0)
        : it(e)
        ? Yd(e, i)
        : No(e)
        ? sa.call(e, 0)
        : e
        ? [e]
        : [];
    },
    na = function (e) {
      return (
        (e = Wt(e)[0] || Zr("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Wt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? Zr("Invalid scope") || jn.createElement("div")
              : e
          );
        }
      );
    },
    qo = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Vo = function (e) {
      if (Me(e)) return e;
      var t = ai(e) ? e : { each: e },
        i = Ki(t.ease),
        r = t.from || 0,
        s = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        u = isNaN(r) || o,
        l = t.axis,
        c = r,
        h = r;
      return (
        Ye(r)
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
            S,
            b,
            T,
            E;
          if (!g) {
            if (((E = t.grid === "auto" ? 0 : (t.grid || [1, Xt])[1]), !E)) {
              for (
                b = -Xt;
                b < (b = f[E++].getBoundingClientRect().left) && E < d;

              );
              E < d && E--;
            }
            for (
              g = a[d] = [],
                _ = u ? Math.min(E, d) * c - 0.5 : r % E,
                y = E === Xt ? 0 : u ? (d * h) / E - 0.5 : (r / E) | 0,
                b = 0,
                T = Xt,
                S = 0;
              S < d;
              S++
            )
              (v = (S % E) - _),
                (D = y - ((S / E) | 0)),
                (g[S] = w =
                  l ? Math.abs(l === "y" ? D : v) : _o(v * v + D * D)),
                w > b && (b = w),
                w < T && (T = w);
            r === "random" && qo(g),
              (g.max = b - T),
              (g.min = T),
              (g.v = d =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (E > d
                      ? d - 1
                      : l
                      ? l === "y"
                        ? d / E
                        : E
                      : Math.max(E, d / E)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = d < 0 ? s - d : s),
              (g.u = rt(t.amount || t.each) || 0),
              (i = i && d < 0 ? el(i) : i);
          }
          return (
            (d = (g[m] - g.min) / g.max || 0),
            Le(g.b + (i ? i(d) : d) * g.v) + g.u
          );
        }
      );
    },
    aa = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = Le(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (Di(i) ? 0 : rt(i));
      };
    },
    Ho = function (e, t) {
      var i = it(e),
        r,
        s;
      return (
        !i &&
          ai(e) &&
          ((r = i = e.radius || Xt),
          e.values
            ? ((e = Wt(e.values)), (s = !Di(e[0])) && (r *= r))
            : (e = aa(e.increment))),
        ki(
          t,
          i
            ? Me(e)
              ? function (a) {
                  return (s = e(a)), Math.abs(s - a) <= r ? s : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(s ? a.x : a),
                      u = parseFloat(s ? a.y : 0),
                      l = Xt,
                      c = 0,
                      h = e.length,
                      m,
                      p;
                    h--;

                  )
                    s
                      ? ((m = e[h].x - o),
                        (p = e[h].y - u),
                        (m = m * m + p * p))
                      : (m = Math.abs(e[h] - o)),
                      m < l && ((l = m), (c = h));
                  return (
                    (c = !r || l <= r ? e[c] : a),
                    s || c === a || Di(a) ? c : c + rt(a)
                  );
                }
            : aa(e)
        )
      );
    },
    Yo = function (e, t, i, r) {
      return ki(it(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return it(e)
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
    Xd = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (s, a) {
          return a(s);
        }, r);
      };
    },
    Gd = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || rt(i));
      };
    },
    Wd = function (e, t, i) {
      return Go(e, t, 0, 1, i);
    },
    Xo = function (e, t, i) {
      return ki(i, function (r) {
        return e[~~t(r)];
      });
    },
    Ud = function n(e, t, i) {
      var r = t - e;
      return it(e)
        ? Xo(e, n(0, e.length), t)
        : ki(i, function (s) {
            return ((r + ((s - e) % r)) % r) + e;
          });
    },
    jd = function n(e, t, i) {
      var r = t - e,
        s = r * 2;
      return it(e)
        ? Xo(e, n(0, e.length - 1), t)
        : ki(i, function (a) {
            return (a = (s + ((a - e) % s)) % s || 0), e + (a > r ? s - a : a);
          });
    },
    is = function (e) {
      for (var t = 0, i = "", r, s, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (s = e.substr(r + 7, a - r - 7).match(o ? xo : Gn)),
          (i +=
            e.substr(t, r - t) +
            Yo(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    Go = function (e, t, i, r, s) {
      var a = t - e,
        o = r - i;
      return ki(s, function (u) {
        return i + (((u - e) / a) * o || 0);
      });
    },
    Kd = function n(e, t, i, r) {
      var s = isNaN(e + t)
        ? 0
        : function (p) {
            return (1 - p) * e + p * t;
          };
      if (!s) {
        var a = Ye(e),
          o = {},
          u,
          l,
          c,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (it(e) && !it(t)) {
          for (c = [], h = e.length, m = h - 2, l = 1; l < h; l++)
            c.push(n(e[l - 1], e[l]));
          h--,
            (s = function (f) {
              f *= h;
              var d = Math.min(m, ~~f);
              return c[d](f - d);
            }),
            (i = t);
        } else r || (e = xr(it(e) ? [] : {}, e));
        if (!c) {
          for (u in t) ca.call(o, e, u, "get", t[u]);
          s = function (f) {
            return ma(f, o) || (a ? e.p : e);
          };
        }
      }
      return ki(i, s);
    },
    Wo = function (e, t, i) {
      var r = e.labels,
        s = Xt,
        a,
        o,
        u;
      for (a in r)
        (o = r[a] - t),
          o < 0 == !!i && o && s > (o = Math.abs(o)) && ((u = a), (s = o));
      return u;
    },
    It = function (e, t, i) {
      var r = e.vars,
        s = r[t],
        a = we,
        o = e._ctx,
        u,
        l,
        c;
      if (s)
        return (
          (u = r[t + "Params"]),
          (l = r.callbackScope || e),
          i && Fi.length && Gs(),
          o && (we = o),
          (c = u ? s.apply(l, u) : s.call(l)),
          (we = a),
          c
        );
    },
    rs = function (e) {
      return (
        Oi(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ke),
        e.progress() < 1 && It(e, "onInterrupt"),
        e
      );
    },
    Tr,
    Uo = [],
    jo = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Xn() || e.headless)) {
          var t = e.name,
            i = Me(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: Qr,
              render: ma,
              add: ca,
              kill: pf,
              modifier: ff,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: ha,
              aliases: {},
              register: 0,
            };
          if ((Cr(), e !== r)) {
            if (kt[t]) return;
            Lt(r, Lt(Ws(e, s), a)),
              xr(r.prototype, xr(s, Ws(e, a))),
              (kt[(r.prop = t)] = r),
              e.targetTest && (Xs.push(r), (Zn[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          To(t, r), e.register && e.register(Et, r, xt);
        } else Uo.push(e);
    },
    he = 255,
    ss = {
      aqua: [0, he, he],
      lime: [0, he, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, he],
      navy: [0, 0, 128],
      white: [he, he, he],
      olive: [128, 128, 0],
      yellow: [he, he, 0],
      orange: [he, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [he, 0, 0],
      pink: [he, 192, 203],
      cyan: [0, he, he],
      transparent: [he, he, he, 0],
    },
    oa = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          he +
          0.5) |
          0
      );
    },
    Ko = function (e, t, i) {
      var r = e ? (Di(e) ? [e >> 16, (e >> 8) & he, e & he] : 0) : ss.black,
        s,
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
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ss[e]))
          r = ss[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((s = e.charAt(1)),
              (a = e.charAt(2)),
              (o = e.charAt(3)),
              (e =
                "#" +
                s +
                s +
                a +
                a +
                o +
                o +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (r = parseInt(e.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & he, r & he, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & he, e & he]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = f = e.match(Gn)), !t))
            (u = (+r[0] % 360) / 360),
              (l = +r[1] / 100),
              (c = +r[2] / 100),
              (a = c <= 0.5 ? c * (l + 1) : c + l - c * l),
              (s = c * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = oa(u + 1 / 3, s, a)),
              (r[1] = oa(u, s, a)),
              (r[2] = oa(u - 1 / 3, s, a));
          else if (~e.indexOf("="))
            return (r = e.match(wo)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(Gn) || ss.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !f &&
          ((s = r[0] / he),
          (a = r[1] / he),
          (o = r[2] / he),
          (h = Math.max(s, a, o)),
          (m = Math.min(s, a, o)),
          (c = (h + m) / 2),
          h === m
            ? (u = l = 0)
            : ((p = h - m),
              (l = c > 0.5 ? p / (2 - h - m) : p / (h + m)),
              (u =
                h === s
                  ? (a - o) / p + (a < o ? 6 : 0)
                  : h === a
                  ? (o - s) / p + 2
                  : (s - a) / p + 4),
              (u *= 60)),
          (r[0] = ~~(u + 0.5)),
          (r[1] = ~~(l * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Zo = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(Li).forEach(function (s) {
          var a = s.match(wr) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Qo = function (e, t, i) {
      var r = "",
        s = (e + r).match(Li),
        a = t ? "hsla(" : "rgba(",
        o = 0,
        u,
        l,
        c,
        h;
      if (!s) return e;
      if (
        ((s = s.map(function (m) {
          return (
            (m = Ko(m, t, 1)) &&
            a +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((c = Zo(e)), (u = i.c), u.join(r) !== c.c.join(r)))
      )
        for (l = e.replace(Li, "1").split(wr), h = l.length - 1; o < h; o++)
          r +=
            l[o] +
            (~u.indexOf(o)
              ? s.shift() || a + "0,0,0,0)"
              : (c.length ? c : s.length ? s : i).shift());
      if (!l)
        for (l = e.split(Li), h = l.length - 1; o < h; o++) r += l[o] + s[o];
      return r + l[h];
    },
    Li = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in ss) n += "|" + e + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    Zd = /hsl[a]?\(/,
    Jo = function (e) {
      var t = e.join(" "),
        i;
      if (((Li.lastIndex = 0), Li.test(t)))
        return (
          (i = Zd.test(t)),
          (e[1] = Qo(e[1], i)),
          (e[0] = Qo(e[0], i, Zo(e[1]))),
          !0
        );
    },
    ns,
    zt = (function () {
      var n = Date.now,
        e = 500,
        t = 33,
        i = n(),
        r = i,
        s = 1e3 / 240,
        a = s,
        o = [],
        u,
        l,
        c,
        h,
        m,
        p,
        f = function d(g) {
          var _ = n() - r,
            y = g === !0,
            v,
            D,
            w,
            S;
          if (
            ((_ > e || _ < 0) && (i += _ - t),
            (r += _),
            (w = r - i),
            (v = w - a),
            (v > 0 || y) &&
              ((S = ++h.frame),
              (m = w - h.time * 1e3),
              (h.time = w = w / 1e3),
              (a += v + (v >= s ? 4 : s - v)),
              (D = 1)),
            y || (u = l(d)),
            D)
          )
            for (p = 0; p < o.length; p++) o[p](w, m, S, g);
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
            Eo &&
              (!Un &&
                Xn() &&
                ((oi = Un = window),
                (jn = oi.document || {}),
                (Ot.gsap = Et),
                (oi.gsapVersions || (oi.gsapVersions = [])).push(Et.version),
                So(Hs || oi.GreenSockGlobals || (!oi.gsap && oi) || {}),
                Uo.forEach(jo)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              u && h.sleep(),
              (l =
                c ||
                function (g) {
                  return setTimeout(g, (a - h.time * 1e3 + 1) | 0);
                }),
              (ns = 1),
              f(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(u), (ns = 0), (l = Qr);
          },
          lagSmoothing: function (g, _) {
            (e = g || 1 / 0), (t = Math.min(_ || 33, e));
          },
          fps: function (g) {
            (s = 1e3 / (g || 240)), (a = h.time * 1e3 + s);
          },
          add: function (g, _, y) {
            var v = _
              ? function (D, w, S, b) {
                  g(D, w, S, b), h.remove(v);
                }
              : g;
            return h.remove(g), o[y ? "unshift" : "push"](v), Cr(), v;
          },
          remove: function (g, _) {
            ~(_ = o.indexOf(g)) && o.splice(_, 1) && p >= _ && p--;
          },
          _listeners: o,
        }),
        h
      );
    })(),
    Cr = function () {
      return !ns && zt.wake();
    },
    oe = {},
    Qd = /^[\d.\-M][\d.\-,\s]/,
    Jd = /["']/g,
    ef = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          s = 1,
          a = i.length,
          o,
          u,
          l;
        s < a;
        s++
      )
        (u = i[s]),
          (o = s !== a - 1 ? u.lastIndexOf(",") : u.length),
          (l = u.substr(0, o)),
          (t[r] = isNaN(l) ? l.replace(Jd, "").trim() : +l),
          (r = u.substr(o + 1).trim());
      return t;
    },
    tf = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    rf = function (e) {
      var t = (e + "").split("("),
        i = oe[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [ef(t[1])] : tf(e).split(",").map(Fo)
          )
        : oe._CE && Qd.test(e)
        ? oe._CE("", e)
        : i;
    },
    el = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    tl = function n(e, t) {
      for (var i = e._first, r; i; )
        i instanceof pt
          ? n(i, t)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== t &&
            (i.timeline
              ? n(i.timeline, t)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = t))),
          (i = i._next);
    },
    Ki = function (e, t) {
      return (e && (Me(e) ? e : oe[e] || rf(e))) || t;
    },
    Zi = function (e, t, i, r) {
      i === void 0 &&
        (i = function (u) {
          return 1 - t(1 - u);
        }),
        r === void 0 &&
          (r = function (u) {
            return u < 0.5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2;
          });
      var s = { easeIn: t, easeOut: i, easeInOut: r },
        a;
      return (
        bt(e, function (o) {
          (oe[o] = Ot[o] = s), (oe[(a = o.toLowerCase())] = i);
          for (var u in s)
            oe[
              a + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
            ] = oe[o + "." + u] = s[u];
        }),
        s
      );
    },
    il = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    la = function n(e, t, i) {
      var r = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (s / Hn) * (Math.asin(1 / r) || 0),
        o = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Ad((c - a) * s) + 1;
        },
        u =
          e === "out"
            ? o
            : e === "in"
            ? function (l) {
                return 1 - o(1 - l);
              }
            : il(o);
      return (
        (s = Hn / s),
        (u.config = function (l, c) {
          return n(e, l, c);
        }),
        u
      );
    },
    ua = function n(e, t) {
      t === void 0 && (t = 1.70158);
      var i = function (a) {
          return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
        },
        r =
          e === "out"
            ? i
            : e === "in"
            ? function (s) {
                return 1 - i(1 - s);
              }
            : il(i);
      return (
        (r.config = function (s) {
          return n(e, s);
        }),
        r
      );
    };
  bt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    Zi(
      n + ",Power" + (t - 1),
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
    Zi("Elastic", la("in"), la("out"), la()),
    (function (n, e) {
      var t = 1 / e,
        i = 2 * t,
        r = 2.5 * t,
        s = function (o) {
          return o < t
            ? n * o * o
            : o < i
            ? n * Math.pow(o - 1.5 / e, 2) + 0.75
            : o < r
            ? n * (o -= 2.25 / e) * o + 0.9375
            : n * Math.pow(o - 2.625 / e, 2) + 0.984375;
        };
      Zi(
        "Bounce",
        function (a) {
          return 1 - s(1 - a);
        },
        s
      );
    })(7.5625, 2.75),
    Zi("Expo", function (n) {
      return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
    }),
    Zi("Circ", function (n) {
      return -(_o(1 - n * n) - 1);
    }),
    Zi("Sine", function (n) {
      return n === 1 ? 1 : -Pd(n * Cd) + 1;
    }),
    Zi("Back", ua("in"), ua("out"), ua()),
    (oe.SteppedEase =
      oe.steps =
      Ot.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              a = 1 - pe;
            return function (o) {
              return (((r * ts(0, a, o)) | 0) + s) * i;
            };
          },
        }),
    (Dr.ease = oe["quad.out"]),
    bt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (n) {
        return (ea += n + "," + n + "Params,");
      }
    );
  var rl = function (e, t) {
      (this.id = Md++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Po),
        (this.set = t ? t.getSetter : ha);
    },
    as = (function () {
      function n(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Sr(this, +t.duration, 1, 1),
          (this.data = t.data),
          we && ((this._ctx = we), we.data.push(this)),
          ns || zt.wake();
      }
      var e = n.prototype;
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
              Sr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((Cr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              Zs(this, i), !s._dp || s.parent || zo(s, this);
              s && s.parent;

            )
              s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              li(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === pe) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), Ao(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + Io(this)) %
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
                  Io(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (i, r) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * s, r)
            : this._repeat
            ? Er(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -pe ? 0 : this._rts;
          if (this._rts === i) return this;
          var s =
            this.parent && this._ts ? js(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -pe ? 0 : this._rts),
            this.totalTime(ts(-Math.abs(this._delay), this._tDur, s), r !== !1),
            Ks(this),
            Rd(this)
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
                  : (Cr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== pe &&
                        (this._tTime -= pe)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && li(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (wt(i) ? this.totalDuration() : this.duration()) /
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
              ? js(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = kd);
          var r = Ke;
          return (
            (Ke = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (Ke = r),
            this
          );
        }),
        (e.globalTime = function (i) {
          for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
            (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : s;
        }),
        (e.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), $o(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), $o(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Gt(this, i), wt(r));
        }),
        (e.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, wt(r)),
            this._dur || (this._zTime = -pe),
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
                this.timeScale(-this._rts || (i ? -pe : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -pe), this;
        }),
        (e.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            s;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (s = i.rawTime(!0)) >= r &&
              s < this.endTime(!0) - pe)
          );
        }),
        (e.eventCallback = function (i, r, s) {
          var a = this.vars;
          return arguments.length > 1
            ? (r
                ? ((a[i] = r),
                  s && (a[i + "Params"] = s),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete a[i],
              this)
            : a[i];
        }),
        (e.then = function (i) {
          var r = this;
          return new Promise(function (s) {
            var a = Me(i) ? i : Oo,
              o = function () {
                var l = r.then;
                (r.then = null),
                  Me(a) && (a = a(r)) && (a.then || a === r) && (r.then = l),
                  s(a),
                  (r.then = l);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? o()
              : (r._prom = o);
          });
        }),
        (e.kill = function () {
          rs(this);
        }),
        n
      );
    })();
  Lt(as.prototype, {
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
    _zTime: -pe,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var pt = (function (n) {
    yo(e, n);
    function e(i, r) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = n.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = wt(i.sortChildren)),
        Se && li(i.parent || Se, _i(s), r),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && Ro(_i(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, s, a) {
        return es(0, arguments, this), this;
      }),
      (t.from = function (r, s, a) {
        return es(1, arguments, this), this;
      }),
      (t.fromTo = function (r, s, a, o) {
        return es(2, arguments, this), this;
      }),
      (t.set = function (r, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Jr(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Ie(r, s, Gt(this, a), 1),
          this
        );
      }),
      (t.call = function (r, s, a) {
        return li(this, Ie.delayedCall(0, r, s), a);
      }),
      (t.staggerTo = function (r, s, a, o, u, l, c) {
        return (
          (a.duration = s),
          (a.stagger = a.stagger || o),
          (a.onComplete = l),
          (a.onCompleteParams = c),
          (a.parent = this),
          new Ie(r, a, Gt(this, u)),
          this
        );
      }),
      (t.staggerFrom = function (r, s, a, o, u, l, c) {
        return (
          (a.runBackwards = 1),
          (Jr(a).immediateRender = wt(a.immediateRender)),
          this.staggerTo(r, s, a, o, u, l, c)
        );
      }),
      (t.staggerFromTo = function (r, s, a, o, u, l, c, h) {
        return (
          (o.startAt = a),
          (Jr(o).immediateRender = wt(o.immediateRender)),
          this.staggerTo(r, s, o, u, l, c, h)
        );
      }),
      (t.render = function (r, s, a) {
        var o = this._time,
          u = this._dirty ? this.totalDuration() : this._tDur,
          l = this._dur,
          c = r <= 0 ? 0 : Le(r),
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
          S,
          b;
        if (
          (this !== Se && c > u && r >= 0 && (c = u),
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
            h && (l || (o = this._zTime), (r || !s) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((S = this._yoyo),
              (g = l + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, s, a);
            if (
              ((m = Le(c % g)),
              c === u
                ? ((d = this._repeat), (m = l))
                : ((w = Le(c / g)),
                  (d = ~~w),
                  d && d === w && ((m = l), d--),
                  m > l && (m = l)),
              (w = Er(this._tTime, g)),
              !o &&
                this._tTime &&
                w !== d &&
                this._tTime - w * g - this._dur <= 0 &&
                (w = d),
              S && d & 1 && ((m = l - m), (b = 1)),
              d !== w && !this._lock)
            ) {
              var T = S && w & 1,
                E = T === (S && d & 1);
              if (
                (d < w && (T = !T),
                (o = T ? 0 : c % l ? l : c),
                (this._lock = 1),
                (this.render(o || (b ? 0 : Le(d * g)), s, !l)._lock = 0),
                (this._tTime = c),
                !s && this.parent && It(this, "onRepeat"),
                this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  _ !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((l = this._dur),
                (u = this._tDur),
                E &&
                  ((this._lock = 2),
                  (o = T ? l : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !b && this.invalidate()),
                (this._lock = 0),
                !this._ts && !_)
              )
                return this;
              tl(this, b);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((y = qd(this, Le(o), Le(m))), y && (c -= m - (m = y._start))),
            (this._tTime = c),
            (this._time = m),
            (this._act = !v),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && m && !s && !d && (It(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (m >= o && r >= 0)
            for (p = this._first; p; ) {
              if (
                ((f = p._next), (p._act || m >= p._start) && p._ts && y !== p)
              ) {
                if (p.parent !== this) return this.render(r, s, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (m - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (m - p._start) * p._ts,
                    s,
                    a
                  ),
                  m !== this._time || (!this._ts && !_))
                ) {
                  (y = 0), f && (c += this._zTime = -pe);
                  break;
                }
              }
              p = f;
            }
          else {
            p = this._last;
            for (var x = r < 0 ? r : m; p; ) {
              if (
                ((f = p._prev), (p._act || x <= p._end) && p._ts && y !== p)
              ) {
                if (p.parent !== this) return this.render(r, s, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (x - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (x - p._start) * p._ts,
                    s,
                    a || (Ke && (p._initted || p._startAt))
                  ),
                  m !== this._time || (!this._ts && !_))
                ) {
                  (y = 0), f && (c += this._zTime = x ? -pe : pe);
                  break;
                }
              }
              p = f;
            }
          }
          if (
            y &&
            !s &&
            (this.pause(),
            (y.render(m >= o ? 0 : -pe)._zTime = m >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = D), Ks(this), this.render(r, s, a);
          this._onUpdate && !s && It(this, "onUpdate", !0),
            ((c === u && this._tTime >= this.totalDuration()) || (!c && o)) &&
              (D === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !l) &&
                  ((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
                  Oi(this, 1),
                !s &&
                  !(r < 0 && !o) &&
                  (c || o || !u) &&
                  (It(
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
      (t.add = function (r, s) {
        var a = this;
        if ((Di(s) || (s = Gt(this, s, r)), !(r instanceof as))) {
          if (it(r))
            return (
              r.forEach(function (o) {
                return a.add(o, s);
              }),
              this
            );
          if (Ye(r)) return this.addLabel(r, s);
          if (Me(r)) r = Ie.delayedCall(0, r);
          else return this;
        }
        return this !== r ? li(this, r, s) : this;
      }),
      (t.getChildren = function (r, s, a, o) {
        r === void 0 && (r = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -Xt);
        for (var u = [], l = this._first; l; )
          l._start >= o &&
            (l instanceof Ie
              ? s && u.push(l)
              : (a && u.push(l),
                r && u.push.apply(u, l.getChildren(!0, s, a)))),
            (l = l._next);
        return u;
      }),
      (t.getById = function (r) {
        for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
          if (s[a].vars.id === r) return s[a];
      }),
      (t.remove = function (r) {
        return Ye(r)
          ? this.removeLabel(r)
          : Me(r)
          ? this.killTweensOf(r)
          : (r.parent === this && Us(this, r),
            r === this._recent && (this._recent = this._last),
            ji(this));
      }),
      (t.totalTime = function (r, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Le(
                zt.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            n.prototype.totalTime.call(this, r, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (r, s) {
        return (this.labels[r] = Gt(this, s)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, s, a) {
        var o = Ie.delayedCall(0, s || Qr, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), li(this, o, Gt(this, r))
        );
      }),
      (t.removePause = function (r) {
        var s = this._first;
        for (r = Gt(this, r); s; )
          s._start === r && s.data === "isPause" && Oi(s), (s = s._next);
      }),
      (t.killTweensOf = function (r, s, a) {
        for (var o = this.getTweensOf(r, a), u = o.length; u--; )
          Ii !== o[u] && o[u].kill(r, s);
        return this;
      }),
      (t.getTweensOf = function (r, s) {
        for (var a = [], o = Wt(r), u = this._first, l = Di(s), c; u; )
          u instanceof Ie
            ? Ld(u._targets, o) &&
              (l
                ? (!Ii || (u._initted && u._ts)) &&
                  u.globalTime(0) <= s &&
                  u.globalTime(u.totalDuration()) > s
                : !s || u.isActive()) &&
              a.push(u)
            : (c = u.getTweensOf(o, s)).length && a.push.apply(a, c),
            (u = u._next);
        return a;
      }),
      (t.tweenTo = function (r, s) {
        s = s || {};
        var a = this,
          o = Gt(a, r),
          u = s,
          l = u.startAt,
          c = u.onStart,
          h = u.onStartParams,
          m = u.immediateRender,
          p,
          f = Ie.to(
            a,
            Lt(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (o - (l && "time" in l ? l.time : a._time)) / a.timeScale()
                  ) ||
                  pe,
                onStart: function () {
                  if ((a.pause(), !p)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (o - (l && "time" in l ? l.time : a._time)) /
                          a.timeScale()
                      );
                    f._dur !== g && Sr(f, g, 0, 1).render(f._time, !0, !0),
                      (p = 1);
                  }
                  c && c.apply(f, h || []);
                },
              },
              s
            )
          );
        return m ? f.render(0) : f;
      }),
      (t.tweenFromTo = function (r, s, a) {
        return this.tweenTo(s, Lt({ startAt: { time: Gt(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Wo(this, Gt(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Wo(this, Gt(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + pe);
      }),
      (t.shiftChildren = function (r, s, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, u = this.labels, l; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (s) for (l in u) u[l] >= a && (u[l] += r);
        return ji(this);
      }),
      (t.invalidate = function (r) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
        return n.prototype.invalidate.call(this, r);
      }),
      (t.clear = function (r) {
        r === void 0 && (r = !0);
        for (var s = this._first, a; s; )
          (a = s._next), this.remove(s), (s = a);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          ji(this)
        );
      }),
      (t.totalDuration = function (r) {
        var s = 0,
          a = this,
          o = a._last,
          u = Xt,
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
                ? ((a._lock = 1), (li(a, o, c - o._delay, 1)._lock = 0))
                : (u = c),
              c < 0 &&
                o._ts &&
                ((s -= c),
                ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                  ((a._start += c / a._ts), (a._time -= c), (a._tTime -= c)),
                a.shiftChildren(-c, !1, -1 / 0),
                (u = 0)),
              o._end > s && o._ts && (s = o._end),
              (o = l);
          Sr(a, a === Se && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Se._ts && (Ao(Se, js(r, Se)), (Co = zt.frame)), zt.frame >= Mo)) {
          Mo += Ft.autoSleep || 120;
          var s = Se._first;
          if ((!s || !s._ts) && Ft.autoSleep && zt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || zt.sleep();
          }
        }
      }),
      e
    );
  })(as);
  Lt(pt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var sf = function (e, t, i, r, s, a, o) {
      var u = new xt(this._pt, e, t, 0, 1, ul, null, s),
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
          (_ = ~r.indexOf("random(")) && (r = is(r)),
          a && ((y = [i, r]), a(y, e, t), (i = y[0]), (r = y[1])),
          m = i.match(Wn) || [];
        (h = Wn.exec(r));

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
              c: f.charAt(1) === "=" ? br(g, f) - g : parseFloat(f) - g,
              m: p && p < 4 ? Math.round : 0,
            }),
            (l = Wn.lastIndex));
      return (
        (u.c = l < r.length ? r.substring(l, r.length) : ""),
        (u.fp = o),
        (bo.test(r) || _) && (u.e = 0),
        (this._pt = u),
        u
      );
    },
    ca = function (e, t, i, r, s, a, o, u, l, c) {
      Me(r) && (r = r(s || 0, e, a));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : Me(h)
            ? l
              ? e[
                  t.indexOf("set") || !Me(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](l)
              : e[t]()
            : h,
        p = Me(h) ? (l ? uf : ol) : pa,
        f;
      if (
        (Ye(r) &&
          (~r.indexOf("random(") && (r = is(r)),
          r.charAt(1) === "=" &&
            ((f = br(m, r) + (rt(m) || 0)), (f || f === 0) && (r = f))),
        !c || m !== r || da)
      )
        return !isNaN(m * r) && r !== ""
          ? ((f = new xt(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? df : ll,
              0,
              p
            )),
            l && (f.fp = l),
            o && f.modifier(o, this, e),
            (this._pt = f))
          : (!h && !(t in e) && Kn(t, r),
            sf.call(this, e, t, m, r, p, u || Ft.stringFilter, l));
    },
    nf = function (e, t, i, r, s) {
      if (
        (Me(e) && (e = os(e, s, t, i, r)),
        !ai(e) || (e.style && e.nodeType) || it(e) || Do(e))
      )
        return Ye(e) ? os(e, s, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = os(e[o], s, t, i, r);
      return a;
    },
    sl = function (e, t, i, r, s, a) {
      var o, u, l, c;
      if (
        kt[e] &&
        (o = new kt[e]()).init(
          s,
          o.rawVars ? t[e] : nf(t[e], r, s, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = u = new xt(i._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
        i !== Tr)
      )
        for (l = i._ptLookup[i._targets.indexOf(s)], c = o._props.length; c--; )
          l[o._props[c]] = u;
      return o;
    },
    Ii,
    da,
    fa = function n(e, t, i) {
      var r = e.vars,
        s = r.ease,
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
        v = e._overwrite === "auto" && !Vn,
        D = e.timeline,
        w,
        S,
        b,
        T,
        E,
        x,
        k,
        P,
        L,
        F,
        R,
        I,
        M;
      if (
        (D && (!m || !s) && (s = "none"),
        (e._ease = Ki(s, Dr.ease)),
        (e._yEase = h ? el(Ki(h === !0 ? s : h, Dr.ease)) : 0),
        h &&
          e._yoyo &&
          !e._repeat &&
          ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
        (e._from = !D && !!r.runBackwards),
        !D || (m && !r.stagger))
      ) {
        if (
          ((P = g[0] ? Ui(g[0]).harness : 0),
          (I = P && r[P.prop]),
          (w = Ws(r, Zn)),
          d &&
            (d._zTime < 0 && d.progress(1),
            t < 0 && c && o && !p
              ? d.render(-1, !0)
              : d.revert(c && f ? Ys : Od),
            (d._lazy = 0)),
          a)
        ) {
          if (
            (Oi(
              (e._startAt = Ie.set(
                g,
                Lt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: _,
                    immediateRender: !0,
                    lazy: !d && wt(u),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      l &&
                      function () {
                        return It(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ke || (!o && !p)) && e._startAt.revert(Ys),
            o && f && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && f && !d) {
          if (
            (t && (o = !1),
            (b = Lt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !d && wt(u),
                immediateRender: o,
                stagger: 0,
                parent: _,
              },
              w
            )),
            I && (b[P.prop] = I),
            Oi((e._startAt = Ie.set(g, b))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ke ? e._startAt.revert(Ys) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            n(e._startAt, pe, pe);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, u = (f && wt(u)) || (u && !f), S = 0;
          S < g.length;
          S++
        ) {
          if (
            ((E = g[S]),
            (k = E._gsap || ta(g)[S]._gsap),
            (e._ptLookup[S] = F = {}),
            Qn[k.id] && Fi.length && Gs(),
            (R = y === g ? S : y.indexOf(E)),
            P &&
              (L = new P()).init(E, I || w, e, R, y) !== !1 &&
              ((e._pt = T =
                new xt(e._pt, E, L.name, 0, 1, L.render, L, 0, L.priority)),
              L._props.forEach(function (O) {
                F[O] = T;
              }),
              L.priority && (x = 1)),
            !P || I)
          )
            for (b in w)
              kt[b] && (L = sl(b, w, e, R, E, y))
                ? L.priority && (x = 1)
                : (F[b] = T =
                    ca.call(e, E, b, "get", w[b], R, y, 0, r.stringFilter));
          e._op && e._op[S] && e.kill(E, e._op[S]),
            v &&
              e._pt &&
              ((Ii = e),
              Se.killTweensOf(E, F, e.globalTime(t)),
              (M = !e.parent),
              (Ii = 0)),
            e._pt && u && (Qn[k.id] = 1);
        }
        x && cl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = l),
        (e._initted = (!e._op || e._pt) && !M),
        m && t <= 0 && D.render(Xt, !0, !0);
    },
    af = function (e, t, i, r, s, a, o, u) {
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
              (da = 1),
              (e.vars[t] = "+=0"),
              fa(e, o),
              (da = 0),
              u ? Zr(t + " not eligible for reset") : 1
            );
          l.push(c);
        }
      for (p = l.length; p--; )
        (h = l[p]),
          (c = h._pt || h),
          (c.s = (r || r === 0) && !s ? r : c.s + (r || 0) + a * c.c),
          (c.c = i - c.s),
          h.e && (h.e = Fe(i) + rt(h.e)),
          h.b && (h.b = c.s + rt(h.b));
    },
    of = function (e, t) {
      var i = e[0] ? Ui(e[0]).harness : 0,
        r = i && i.aliases,
        s,
        a,
        o,
        u;
      if (!r) return t;
      s = xr({}, t);
      for (a in r)
        if (a in s)
          for (u = r[a].split(","), o = u.length; o--; ) s[u[o]] = s[a];
      return s;
    },
    lf = function (e, t, i, r) {
      var s = t.ease || r || "power1.inOut",
        a,
        o;
      if (it(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (u, l) {
            return o.push({ t: (l / (t.length - 1)) * 100, v: u, e: s });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: s });
    },
    os = function (e, t, i, r, s) {
      return Me(e)
        ? e.call(t, i, r, s)
        : Ye(e) && ~e.indexOf("random(")
        ? is(e)
        : e;
    },
    nl = ea + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    al = {};
  bt(nl + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (al[n] = 1);
  });
  var Ie = (function (n) {
    yo(e, n);
    function e(i, r, s, a) {
      var o;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (o = n.call(this, a ? r : Jr(r)) || this);
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
        y = r.parent || Se,
        v = (it(i) || Do(i) ? Di(i[0]) : "length" in r) ? [i] : Wt(i),
        D,
        w,
        S,
        b,
        T,
        E,
        x,
        k;
      if (
        ((o._targets = v.length
          ? ta(v)
          : Zr(
              "GSAP target " + i + " not found. https://gsap.com",
              !Ft.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        f || m || Vs(l) || Vs(c))
      ) {
        if (
          ((r = o.vars),
          (D = o.timeline =
            new pt({
              data: "nested",
              defaults: d || {},
              targets: y && y.data === "nested" ? y.vars.targets : v,
            })),
          D.kill(),
          (D.parent = D._dp = _i(o)),
          (D._start = 0),
          m || Vs(l) || Vs(c))
        ) {
          if (((b = v.length), (x = m && Vo(m)), ai(m)))
            for (T in m) ~nl.indexOf(T) && (k || (k = {}), (k[T] = m[T]));
          for (w = 0; w < b; w++)
            (S = Ws(r, al)),
              (S.stagger = 0),
              _ && (S.yoyoEase = _),
              k && xr(S, k),
              (E = v[w]),
              (S.duration = +os(l, _i(o), w, E, v)),
              (S.delay = (+os(c, _i(o), w, E, v) || 0) - o._delay),
              !m &&
                b === 1 &&
                S.delay &&
                ((o._delay = c = S.delay), (o._start += c), (S.delay = 0)),
              D.to(E, S, x ? x(w, E, v) : 0),
              (D._ease = oe.none);
          D.duration() ? (l = c = 0) : (o.timeline = 0);
        } else if (f) {
          Jr(Lt(D.vars.defaults, { ease: "none" })),
            (D._ease = Ki(f.ease || r.ease || "none"));
          var P = 0,
            L,
            F,
            R;
          if (it(f))
            f.forEach(function (I) {
              return D.to(v, I, ">");
            }),
              D.duration();
          else {
            S = {};
            for (T in f)
              T === "ease" || T === "easeEach" || lf(T, f[T], S, f.easeEach);
            for (T in S)
              for (
                L = S[T].sort(function (I, M) {
                  return I.t - M.t;
                }),
                  P = 0,
                  w = 0;
                w < L.length;
                w++
              )
                (F = L[w]),
                  (R = {
                    ease: F.e,
                    duration: ((F.t - (w ? L[w - 1].t : 0)) / 100) * l,
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
        p === !0 && !Vn && ((Ii = _i(o)), Se.killTweensOf(v), (Ii = 0)),
        li(y, _i(o), s),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (h ||
          (!l &&
            !f &&
            o._start === Le(y._time) &&
            wt(h) &&
            Bd(_i(o)) &&
            y.data !== "nested")) &&
          ((o._tTime = -pe), o.render(Math.max(0, -c) || 0)),
        g && Ro(_i(o), g),
        o
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, s, a) {
        var o = this._time,
          u = this._tDur,
          l = this._dur,
          c = r < 0,
          h = r > u - pe && !c ? u : r < pe ? 0 : r,
          m,
          p,
          f,
          d,
          g,
          _,
          y,
          v,
          D;
        if (!l) Nd(this, r, s, a);
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
              return this.totalTime(d * 100 + r, s, a);
            if (
              ((m = Le(h % d)),
              h === u
                ? ((f = this._repeat), (m = l))
                : ((g = Le(h / d)),
                  (f = ~~g),
                  f && f === g ? ((m = l), f--) : m > l && (m = l)),
              (_ = this._yoyo && f & 1),
              _ && ((D = this._yEase), (m = l - m)),
              (g = Er(this._tTime, d)),
              m === o && !a && this._initted && f === g)
            )
              return (this._tTime = h), this;
            f !== g &&
              (v && this._yEase && tl(v, _),
              this.vars.repeatRefresh &&
                !_ &&
                !this._lock &&
                m !== d &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(Le(d * f), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Bo(this, c ? r : m, a, s, h)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && f !== g))
              return this;
            if (l !== this._dur) return this.render(r, s, a);
          }
          if (
            ((this._tTime = h),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = y = (D || this._ease)(m / l)),
            this._from && (this.ratio = y = 1 - y),
            m && !o && !s && !f && (It(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(y, p.d), (p = p._next);
          (v && v.render(r < 0 ? r : v._dur * v._ease(m / this._dur), s, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (c && ia(this, r, s, a), It(this, "onUpdate")),
            this._repeat &&
              f !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              It(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (c && !this._onUpdate && ia(this, r, !0, !0),
              (r || !l) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                Oi(this, 1),
              !s &&
                !(c && !o) &&
                (h || o || _) &&
                (It(this, h === u ? "onComplete" : "onReverseComplete", !0),
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
          n.prototype.invalidate.call(this, r)
        );
      }),
      (t.resetTo = function (r, s, a, o, u) {
        ns || zt.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || fa(this, l),
          (c = this._ease(l / this._dur)),
          af(this, r, s, a, o, c, l, u)
            ? this.resetTo(r, s, a, o, 1)
            : (Zs(this, 0),
              this.parent ||
                Lo(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (r, s) {
        if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? rs(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ke),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, s, Ii && Ii.vars.overwrite !== !0)
              ._first || rs(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              Sr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          u = r ? Wt(r) : o,
          l = this._ptLookup,
          c = this._pt,
          h,
          m,
          p,
          f,
          d,
          g,
          _;
        if ((!s || s === "all") && zd(o, u))
          return s === "all" && (this._pt = 0), rs(this);
        for (
          h = this._op = this._op || [],
            s !== "all" &&
              (Ye(s) &&
                ((d = {}),
                bt(s, function (y) {
                  return (d[y] = 1);
                }),
                (s = d)),
              (s = of(o, s))),
            _ = o.length;
          _--;

        )
          if (~u.indexOf(o[_])) {
            (m = l[_]),
              s === "all"
                ? ((h[_] = s), (f = m), (p = {}))
                : ((p = h[_] = h[_] || {}), (f = s));
            for (d in f)
              (g = m && m[d]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(d) === !0) &&
                    Us(this, g, "_pt"),
                  delete m[d]),
                p !== "all" && (p[d] = 1);
          }
        return this._initted && !this._pt && c && rs(this), this;
      }),
      (e.to = function (r, s) {
        return new e(r, s, arguments[2]);
      }),
      (e.from = function (r, s) {
        return es(1, arguments);
      }),
      (e.delayedCall = function (r, s, a, o) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: a,
          onReverseCompleteParams: a,
          callbackScope: o,
        });
      }),
      (e.fromTo = function (r, s, a) {
        return es(2, arguments);
      }),
      (e.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
      }),
      (e.killTweensOf = function (r, s, a) {
        return Se.killTweensOf(r, s, a);
      }),
      e
    );
  })(as);
  Lt(Ie.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    bt("staggerTo,staggerFrom,staggerFromTo", function (n) {
      Ie[n] = function () {
        var e = new pt(),
          t = sa.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
      };
    });
  var pa = function (e, t, i) {
      return (e[t] = i);
    },
    ol = function (e, t, i) {
      return e[t](i);
    },
    uf = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    cf = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    ha = function (e, t) {
      return Me(e[t]) ? ol : Yn(e[t]) && e.setAttribute ? cf : pa;
    },
    ll = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    df = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    ul = function (e, t) {
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
    ma = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    ff = function (e, t, i, r) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === r && s.modifier(e, t, i), (s = a);
    },
    pf = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? Us(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    hf = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    cl = function (e) {
      for (var t = e._pt, i, r, s, a; t; ) {
        for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (s = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = s;
    },
    xt = (function () {
      function n(t, i, r, s, a, o, u, l, c) {
        (this.t = i),
          (this.s = s),
          (this.c = a),
          (this.p = r),
          (this.r = o || ll),
          (this.d = u || this),
          (this.set = l || pa),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = n.prototype;
      return (
        (e.modifier = function (i, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = hf),
            (this.m = i),
            (this.mt = s),
            (this.tween = r);
        }),
        n
      );
    })();
  bt(
    ea +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return (Zn[n] = 1);
    }
  ),
    (Ot.TweenMax = Ot.TweenLite = Ie),
    (Ot.TimelineLite = Ot.TimelineMax = pt),
    (Se = new pt({
      sortChildren: !1,
      defaults: Dr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Ft.stringFilter = Jo);
  var Qi = [],
    Qs = {},
    mf = [],
    dl = 0,
    gf = 0,
    ga = function (e) {
      return (Qs[e] || mf).map(function (t) {
        return t();
      });
    },
    va = function () {
      var e = Date.now(),
        t = [];
      e - dl > 2 &&
        (ga("matchMediaInit"),
        Qi.forEach(function (i) {
          var r = i.queries,
            s = i.conditions,
            a,
            o,
            u,
            l;
          for (o in r)
            (a = oi.matchMedia(r[o]).matches),
              a && (u = 1),
              a !== s[o] && ((s[o] = a), (l = 1));
          l && (i.revert(), u && t.push(i));
        }),
        ga("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (dl = e),
        ga("matchMedia"));
    },
    fl = (function () {
      function n(t, i) {
        (this.selector = i && na(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = gf++),
          t && this.add(t);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          Me(i) && ((s = r), (r = i), (i = Me));
          var a = this,
            o = function () {
              var l = we,
                c = a.selector,
                h;
              return (
                l && l !== a && l.data.push(a),
                s && (a.selector = na(s)),
                (we = a),
                (h = r.apply(a, arguments)),
                Me(h) && a._r.push(h),
                (we = l),
                (a.selector = c),
                (a.isReverted = !1),
                h
              );
            };
          return (
            (a.last = o),
            i === Me
              ? o(a, function (u) {
                  return a.add(null, u);
                })
              : i
              ? (a[i] = o)
              : o
          );
        }),
        (e.ignore = function (i) {
          var r = we;
          (we = null), i(this), (we = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof n
                ? i.push.apply(i, r.getTweens())
                : r instanceof Ie &&
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
          var s = this;
          if (
            (i
              ? (function () {
                  for (var o = s.getTweens(), u = s.data.length, l; u--; )
                    (l = s.data[u]),
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
                      u = s.data.length;
                    u--;

                  )
                    (l = s.data[u]),
                      l instanceof pt
                        ? l.data !== "nested" &&
                          (l.scrollTrigger && l.scrollTrigger.revert(),
                          l.kill())
                        : !(l instanceof Ie) && l.revert && l.revert(i);
                  s._r.forEach(function (c) {
                    return c(i, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (o) {
                  return o.kill && o.kill();
                }),
            this.clear(),
            r)
          )
            for (var a = Qi.length; a--; )
              Qi[a].id === this.id && Qi.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        n
      );
    })(),
    vf = (function () {
      function n(t) {
        (this.contexts = []), (this.scope = t), we && we.data.push(this);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          ai(i) || (i = { matches: i });
          var a = new fl(0, s || this.scope),
            o = (a.conditions = {}),
            u,
            l,
            c;
          we && !a.selector && (a.selector = we.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = i);
          for (l in i)
            l === "all"
              ? (c = 1)
              : ((u = oi.matchMedia(i[l])),
                u &&
                  (Qi.indexOf(a) < 0 && Qi.push(a),
                  (o[l] = u.matches) && (c = 1),
                  u.addListener
                    ? u.addListener(va)
                    : u.addEventListener("change", va)));
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
        n
      );
    })(),
    Js = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return jo(r);
        });
      },
      timeline: function (e) {
        return new pt(e);
      },
      getTweensOf: function (e, t) {
        return Se.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Ye(e) && (e = Wt(e)[0]);
        var s = Ui(e || {}).get,
          a = i ? Oo : Fo;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a(((kt[t] && kt[t].get) || s)(e, t, i, r))
              : function (o, u, l) {
                  return a(((kt[o] && kt[o].get) || s)(e, o, u, l));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Wt(e)), e.length > 1)) {
          var r = e.map(function (c) {
              return Et.quickSetter(c, t, i);
            }),
            s = r.length;
          return function (c) {
            for (var h = s; h--; ) r[h](c);
          };
        }
        e = e[0] || {};
        var a = kt[t],
          o = Ui(e),
          u = (o.harness && (o.harness.aliases || {})[t]) || t,
          l = a
            ? function (c) {
                var h = new a();
                (Tr._pt = 0),
                  h.init(e, i ? c + i : c, Tr, 0, [e]),
                  h.render(1, h),
                  Tr._pt && ma(1, Tr);
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
          s = Et.to(
            e,
            Lt(
              ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          a = function (u, l, c) {
            return s.resetTo(t, u, l, c);
          };
        return (a.tween = s), a;
      },
      isTweening: function (e) {
        return Se.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Ki(e.ease, Dr.ease)), ko(Dr, e || {});
      },
      config: function (e) {
        return ko(Ft, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          s = e.defaults,
          a = e.extendTimeline;
        (r || "").split(",").forEach(function (o) {
          return (
            o &&
            !kt[o] &&
            !Ot[o] &&
            Zr(t + " effect requires " + o + " plugin.")
          );
        }),
          (Jn[t] = function (o, u, l) {
            return i(Wt(o), Lt(u || {}, s), l);
          }),
          a &&
            (pt.prototype[t] = function (o, u, l) {
              return this.add(Jn[t](o, ai(u) ? u : (l = u) && {}, this), l);
            });
      },
      registerEase: function (e, t) {
        oe[e] = Ki(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Ki(e, t) : oe;
      },
      getById: function (e) {
        return Se.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new pt(e),
          r,
          s;
        for (
          i.smoothChildTiming = wt(e.smoothChildTiming),
            Se.remove(i),
            i._dp = 0,
            i._time = i._tTime = Se._time,
            r = Se._first;
          r;

        )
          (s = r._next),
            (t ||
              !(
                !r._dur &&
                r instanceof Ie &&
                r.vars.onComplete === r._targets[0]
              )) &&
              li(i, r, r._start - r._delay),
            (r = s);
        return li(Se, i, 0), i;
      },
      context: function (e, t) {
        return e ? new fl(e, t) : we;
      },
      matchMedia: function (e) {
        return new vf(e);
      },
      matchMediaRefresh: function () {
        return (
          Qi.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || va()
        );
      },
      addEventListener: function (e, t) {
        var i = Qs[e] || (Qs[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = Qs[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: Ud,
        wrapYoyo: jd,
        distribute: Vo,
        random: Yo,
        snap: Ho,
        normalize: Wd,
        getUnit: rt,
        clamp: Hd,
        splitColor: Ko,
        toArray: Wt,
        selector: na,
        mapRange: Go,
        pipe: Xd,
        unitize: Gd,
        interpolate: Kd,
        shuffle: qo,
      },
      install: So,
      effects: Jn,
      ticker: zt,
      updateRoot: pt.updateRoot,
      plugins: kt,
      globalTimeline: Se,
      core: {
        PropTween: xt,
        globals: To,
        Tween: Ie,
        Timeline: pt,
        Animation: as,
        getCache: Ui,
        _removeLinkedListItem: Us,
        reverting: function () {
          return Ke;
        },
        context: function (e) {
          return e && we && (we.data.push(e), (e._ctx = we)), we;
        },
        suppressOverwrites: function (e) {
          return (Vn = e);
        },
      },
    };
  bt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (Js[n] = Ie[n]);
  }),
    zt.add(pt.updateRoot),
    (Tr = Js.to({}, { duration: 0 }));
  var yf = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    _f = function (e, t) {
      var i = e._targets,
        r,
        s,
        a;
      for (r in t)
        for (s = i.length; s--; )
          (a = e._ptLookup[s][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = yf(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[s], r));
    },
    ya = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, s, a) {
          a._onInit = function (o) {
            var u, l;
            if (
              (Ye(s) &&
                ((u = {}),
                bt(s, function (c) {
                  return (u[c] = 1);
                }),
                (s = u)),
              t)
            ) {
              u = {};
              for (l in s) u[l] = t(s[l]);
              s = u;
            }
            _f(o, s);
          };
        },
      };
    },
    Et =
      Js.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, r, s) {
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
                  s,
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
              Ke ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        ya("roundProps", aa),
        ya("modifiers"),
        ya("snap", Ho)
      ) || Js;
  (Ie.version = pt.version = Et.version = "3.12.7"),
    (Eo = 1),
    Xn() && Cr(),
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
   * CSSPlugin 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var pl,
    zi,
    Mr,
    _a,
    Ji,
    hl,
    Da,
    Df = function () {
      return typeof window != "undefined";
    },
    wi = {},
    er = 180 / Math.PI,
    Pr = Math.PI / 180,
    Ar = Math.atan2,
    ml = 1e8,
    wa = /([A-Z])/g,
    wf = /(left|right|width|margin|padding|x)/i,
    bf = /[\s,\(]\S/,
    ui = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    ba = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    xf = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    Ef = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    Sf = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    gl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    vl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Tf = function (e, t, i) {
      return (e.style[t] = i);
    },
    Cf = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    Mf = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    Pf = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    Af = function (e, t, i, r, s) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(s, a);
    },
    Ff = function (e, t, i, r, s) {
      var a = e._gsap;
      (a[t] = i), a.renderTransform(s, a);
    },
    Te = "transform",
    St = Te + "Origin",
    Of = function n(e, t) {
      var i = this,
        r = this.target,
        s = r.style,
        a = r._gsap;
      if (e in wi && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = ui[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = bi(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : bi(r, e)),
            e === St && (this.tfm.zOrigin = a.zOrigin);
        else
          return ui.transform.split(",").forEach(function (o) {
            return n.call(i, o, t);
          });
        if (this.props.indexOf(Te) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(St, t, "")),
          (e = Te);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    yl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    kf = function () {
      var e = this.props,
        t = this.target,
        i = t.style,
        r = t._gsap,
        s,
        a;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? e[s + 1] === 2
            ? t[e[s]](e[s + 2])
            : (t[e[s]] = e[s + 2])
          : e[s + 2]
          ? (i[e[s]] = e[s + 2])
          : i.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(wa, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = Da()),
          (!s || !s.isStart) &&
            !i[Te] &&
            (yl(i),
            r.zOrigin &&
              i[St] &&
              ((i[St] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    _l = function (e, t) {
      var i = { target: e, props: [], revert: kf, save: Of };
      return (
        e._gsap || Et.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    Dl,
    xa = function (e, t) {
      var i = zi.createElementNS
        ? zi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : zi.createElement(e);
      return i && i.style ? i : zi.createElement(e);
    },
    ci = function n(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(wa, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && n(e, Fr(t) || t, 1)) ||
        ""
      );
    },
    wl = "O,Moz,ms,Ms,Webkit".split(","),
    Fr = function (e, t, i) {
      var r = t || Ji,
        s = r.style,
        a = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(wl[a] + e in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? wl[a] : "") + e;
    },
    Ea = function () {
      Df() &&
        window.document &&
        ((pl = window),
        (zi = pl.document),
        (Mr = zi.documentElement),
        (Ji = xa("div") || { style: {} }),
        xa("div"),
        (Te = Fr(Te)),
        (St = Te + "Origin"),
        (Ji.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Dl = !!Fr("perspective")),
        (Da = Et.core.reverting),
        (_a = 1));
    },
    bl = function (e) {
      var t = e.ownerSVGElement,
        i = xa(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        s;
      (r.style.display = "block"), i.appendChild(r), Mr.appendChild(i);
      try {
        s = r.getBBox();
      } catch (a) {}
      return i.removeChild(r), Mr.removeChild(i), s;
    },
    xl = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    El = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch (r) {
        (t = bl(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = bl(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +xl(e, ["x", "cx", "x1"]) || 0,
              y: +xl(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    Sl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && El(e));
    },
    tr = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in wi && t !== St && (t = Te),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(wa, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Ri = function (e, t, i, r, s, a) {
      var o = new xt(e._pt, t, i, 0, 1, a ? vl : gl);
      return (e._pt = o), (o.b = r), (o.e = s), e._props.push(i), o;
    },
    Tl = { deg: 1, rad: 1, turn: 1 },
    Lf = { grid: 1, flex: 1 },
    Bi = function n(e, t, i, r) {
      var s = parseFloat(i) || 0,
        a = (i + "").trim().substr((s + "").length) || "px",
        o = Ji.style,
        u = wf.test(t),
        l = e.tagName.toLowerCase() === "svg",
        c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        f,
        d,
        g,
        _;
      if (r === a || !s || Tl[r] || Tl[a]) return s;
      if (
        (a !== "px" && !m && (s = n(e, t, i, "px")),
        (_ = e.getCTM && Sl(e)),
        (p || a === "%") && (wi[t] || ~t.indexOf("adius")))
      )
        return (
          (f = _ ? e.getBBox()[u ? "width" : "height"] : e[c]),
          Fe(p ? (s / f) * h : (s / 100) * f)
        );
      if (
        ((o[u ? "width" : "height"] = h + (m ? a : r)),
        (d =
          (r !== "rem" && ~t.indexOf("adius")) ||
          (r === "em" && e.appendChild && !l)
            ? e
            : e.parentNode),
        _ && (d = (e.ownerSVGElement || {}).parentNode),
        (!d || d === zi || !d.appendChild) && (d = zi.body),
        (g = d._gsap),
        g && p && g.width && u && g.time === zt.time && !g.uncache)
      )
        return Fe((s / g.width) * h);
      if (p && (t === "height" || t === "width")) {
        var y = e.style[t];
        (e.style[t] = h + r), (f = e[c]), y ? (e.style[t] = y) : tr(e, t);
      } else
        (p || a === "%") &&
          !Lf[ci(d, "display")] &&
          (o.position = ci(e, "position")),
          d === e && (o.position = "static"),
          d.appendChild(Ji),
          (f = Ji[c]),
          d.removeChild(Ji),
          (o.position = "absolute");
      return (
        u && p && ((g = Ui(d)), (g.time = zt.time), (g.width = d[c])),
        Fe(m ? (f * s) / h : f && s ? (h / f) * s : 0)
      );
    },
    bi = function (e, t, i, r) {
      var s;
      return (
        _a || Ea(),
        t in ui &&
          t !== "transform" &&
          ((t = ui[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        wi[t] && t !== "transform"
          ? ((s = us(e, r)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : tn(ci(e, St)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (en[t] && en[t](e, t, i)) ||
                ci(e, t) ||
                Po(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Bi(e, t, s, i) + i : s
      );
    },
    If = function (e, t, i, r) {
      if (!i || i === "none") {
        var s = Fr(t, e, 1),
          a = s && ci(e, s, 1);
        a && a !== i
          ? ((t = s), (i = a))
          : t === "borderColor" && (i = ci(e, "borderTopColor"));
      }
      var o = new xt(this._pt, e.style, t, 0, 1, ul),
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
          (r = ci(e, t) || r),
          d ? (e.style[t] = d) : tr(e, t)),
        (c = [i, r]),
        Jo(c),
        (i = c[0]),
        (r = c[1]),
        (m = i.match(wr) || []),
        (w = r.match(wr) || []),
        w.length)
      ) {
        for (; (h = wr.exec(r)); )
          (g = h[0]),
            (y = r.substring(u, h.index)),
            f
              ? (f = (f + 1) % 5)
              : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") &&
                (f = 1),
            g !== (d = m[l++] || "") &&
              ((p = parseFloat(d) || 0),
              (D = d.substr((p + "").length)),
              g.charAt(1) === "=" && (g = br(p, g) + D),
              (_ = parseFloat(g)),
              (v = g.substr((_ + "").length)),
              (u = wr.lastIndex - v.length),
              v ||
                ((v = v || Ft.units[t] || D),
                u === r.length && ((r += v), (o.e += v))),
              D !== v && (p = Bi(e, t, d, v) || 0),
              (o._pt = {
                _next: o._pt,
                p: y || l === 1 ? y : ",",
                s: p,
                c: _ - p,
                m: (f && f < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = u < r.length ? r.substring(u, r.length) : "";
      } else o.r = t === "display" && r === "none" ? vl : gl;
      return bo.test(r) && (o.e = 0), (this._pt = o), o;
    },
    Cl = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    zf = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = Cl[i] || i),
        (t[1] = Cl[r] || r),
        t.join(" ")
      );
    },
    Rf = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          s = t.u,
          a = i._gsap,
          o,
          u,
          l;
        if (s === "all" || s === !0) (r.cssText = ""), (u = 1);
        else
          for (s = s.split(","), l = s.length; --l > -1; )
            (o = s[l]),
              wi[o] && ((u = 1), (o = o === "transformOrigin" ? St : Te)),
              tr(i, o);
        u &&
          (tr(i, Te),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            us(i, 1),
            (a.uncache = 1),
            yl(r)));
      }
    },
    en = {
      clearProps: function (e, t, i, r, s) {
        if (s.data !== "isFromStart") {
          var a = (e._pt = new xt(e._pt, t, i, 0, 0, Rf));
          return (a.u = r), (a.pr = -10), (a.tween = s), e._props.push(i), 1;
        }
      },
    },
    ls = [1, 0, 0, 1, 0, 0],
    Ml = {},
    Pl = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    Al = function (e) {
      var t = ci(e, Te);
      return Pl(t) ? ls : t.substr(7).match(wo).map(Fe);
    },
    Sa = function (e, t) {
      var i = e._gsap || Ui(e),
        r = e.style,
        s = Al(e),
        a,
        o,
        u,
        l;
      return i.svg && e.getAttribute("transform")
        ? ((u = e.transform.baseVal.consolidate().matrix),
          (s = [u.a, u.b, u.c, u.d, u.e, u.f]),
          s.join(",") === "1,0,0,1,0,0" ? ls : s)
        : (s === ls &&
            !e.offsetParent &&
            e !== Mr &&
            !i.svg &&
            ((u = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((l = 1), (o = e.nextElementSibling), Mr.appendChild(e)),
            (s = Al(e)),
            u ? (r.display = u) : tr(e, "display"),
            l &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Mr.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Ta = function (e, t, i, r, s, a) {
      var o = e._gsap,
        u = s || Sa(e, !0),
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
        S,
        b,
        T,
        E;
      i
        ? u !== ls &&
          (b = p * g - f * d) &&
          ((T = D * (g / b) + w * (-d / b) + (d * y - g * _) / b),
          (E = D * (-f / b) + w * (p / b) - (p * y - f * _) / b),
          (D = T),
          (w = E))
        : ((S = El(e)),
          (D = S.x + (~v[0].indexOf("%") ? (D / 100) * S.width : D)),
          (w =
            S.y + (~(v[1] || v[0]).indexOf("%") ? (w / 100) * S.height : w))),
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
        (e.style[St] = "0px 0px"),
        a &&
          (Ri(a, o, "xOrigin", l, D),
          Ri(a, o, "yOrigin", c, w),
          Ri(a, o, "xOffset", h, o.xOffset),
          Ri(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", D + " " + w);
    },
    us = function (e, t) {
      var i = e._gsap || new rl(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        s = i.scaleX < 0,
        a = "px",
        o = "deg",
        u = getComputedStyle(e),
        l = ci(e, St) || "0",
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
        S,
        b,
        T,
        E,
        x,
        k,
        P,
        L,
        F,
        R,
        I,
        M,
        O,
        A,
        C,
        Y,
        Z,
        _e,
        re,
        B;
      return (
        (c = h = m = d = g = _ = y = v = D = 0),
        (p = f = 1),
        (i.svg = !!(e.getCTM && Sl(e))),
        u.translate &&
          ((u.translate !== "none" ||
            u.scale !== "none" ||
            u.rotate !== "none") &&
            (r[Te] =
              (u.translate !== "none"
                ? "translate3d(" +
                  (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
              (u.scale !== "none"
                ? "scale(" + u.scale.split(" ").join(",") + ") "
                : "") +
              (u[Te] !== "none" ? u[Te] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (b = Sa(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((O = e.getBBox()),
              (l = i.xOrigin - O.x + "px " + (i.yOrigin - O.y) + "px"),
              (M = ""))
            : (M = !t && e.getAttribute("data-svg-origin")),
          Ta(e, M || l, !!M || i.originIsAbsolute, i.smooth !== !1, b)),
        (w = i.xOrigin || 0),
        (S = i.yOrigin || 0),
        b !== ls &&
          ((k = b[0]),
          (P = b[1]),
          (L = b[2]),
          (F = b[3]),
          (c = R = b[4]),
          (h = I = b[5]),
          b.length === 6
            ? ((p = Math.sqrt(k * k + P * P)),
              (f = Math.sqrt(F * F + L * L)),
              (d = k || P ? Ar(P, k) * er : 0),
              (y = L || F ? Ar(L, F) * er + d : 0),
              y && (f *= Math.abs(Math.cos(y * Pr))),
              i.svg && ((c -= w - (w * k + S * L)), (h -= S - (w * P + S * F))))
            : ((B = b[6]),
              (_e = b[7]),
              (C = b[8]),
              (Y = b[9]),
              (Z = b[10]),
              (re = b[11]),
              (c = b[12]),
              (h = b[13]),
              (m = b[14]),
              (T = Ar(B, Z)),
              (g = T * er),
              T &&
                ((E = Math.cos(-T)),
                (x = Math.sin(-T)),
                (M = R * E + C * x),
                (O = I * E + Y * x),
                (A = B * E + Z * x),
                (C = R * -x + C * E),
                (Y = I * -x + Y * E),
                (Z = B * -x + Z * E),
                (re = _e * -x + re * E),
                (R = M),
                (I = O),
                (B = A)),
              (T = Ar(-L, Z)),
              (_ = T * er),
              T &&
                ((E = Math.cos(-T)),
                (x = Math.sin(-T)),
                (M = k * E - C * x),
                (O = P * E - Y * x),
                (A = L * E - Z * x),
                (re = F * x + re * E),
                (k = M),
                (P = O),
                (L = A)),
              (T = Ar(P, k)),
              (d = T * er),
              T &&
                ((E = Math.cos(T)),
                (x = Math.sin(T)),
                (M = k * E + P * x),
                (O = R * E + I * x),
                (P = P * E - k * x),
                (I = I * E - R * x),
                (k = M),
                (R = O)),
              g &&
                Math.abs(g) + Math.abs(d) > 359.9 &&
                ((g = d = 0), (_ = 180 - _)),
              (p = Fe(Math.sqrt(k * k + P * P + L * L))),
              (f = Fe(Math.sqrt(I * I + B * B))),
              (T = Ar(R, I)),
              (y = Math.abs(T) > 2e-4 ? T * er : 0),
              (D = re ? 1 / (re < 0 ? -re : re) : 0)),
          i.svg &&
            ((M = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !Pl(ci(e, Te))),
            M && e.setAttribute("transform", M))),
        Math.abs(y) > 90 &&
          Math.abs(y) < 270 &&
          (s
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
        (i.scaleX = Fe(p)),
        (i.scaleY = Fe(f)),
        (i.rotation = Fe(d) + o),
        (i.rotationX = Fe(g) + o),
        (i.rotationY = Fe(_) + o),
        (i.skewX = y + o),
        (i.skewY = v + o),
        (i.transformPerspective = D + a),
        (i.zOrigin = parseFloat(l.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[St] = tn(l)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Ft.force3D),
        (i.renderTransform = i.svg ? $f : Dl ? Fl : Bf),
        (i.uncache = 0),
        i
      );
    },
    tn = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Ca = function (e, t, i) {
      var r = rt(t);
      return Fe(parseFloat(t) + parseFloat(Bi(e, "x", i + "px", r))) + r;
    },
    Bf = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        Fl(e, t);
    },
    ir = "0deg",
    cs = "0px",
    rr = ") ",
    Fl = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
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
      if (v && (h !== ir || c !== ir)) {
        var S = parseFloat(c) * Pr,
          b = Math.sin(S),
          T = Math.cos(S),
          E;
        (S = parseFloat(h) * Pr),
          (E = Math.cos(S)),
          (a = Ca(y, a, b * E * -v)),
          (o = Ca(y, o, -Math.sin(S) * -v)),
          (u = Ca(y, u, T * E * -v + v));
      }
      g !== cs && (D += "perspective(" + g + rr),
        (r || s) && (D += "translate(" + r + "%, " + s + "%) "),
        (w || a !== cs || o !== cs || u !== cs) &&
          (D +=
            u !== cs || w
              ? "translate3d(" + a + ", " + o + ", " + u + ") "
              : "translate(" + a + ", " + o + rr),
        l !== ir && (D += "rotate(" + l + rr),
        c !== ir && (D += "rotateY(" + c + rr),
        h !== ir && (D += "rotateX(" + h + rr),
        (m !== ir || p !== ir) && (D += "skew(" + m + ", " + p + rr),
        (f !== 1 || d !== 1) && (D += "scale(" + f + ", " + d + rr),
        (y.style[Te] = D || "translate(0, 0)");
    },
    $f = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
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
        S,
        b,
        T,
        E;
      (u = parseFloat(u)),
        (l = parseFloat(l)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (l += c), (u += c)),
        u || l
          ? ((u *= Pr),
            (l *= Pr),
            (w = Math.cos(u) * h),
            (S = Math.sin(u) * h),
            (b = Math.sin(u - l) * -m),
            (T = Math.cos(u - l) * m),
            l &&
              ((c *= Pr),
              (E = Math.tan(l - c)),
              (E = Math.sqrt(1 + E * E)),
              (b *= E),
              (T *= E),
              c &&
                ((E = Math.tan(c)),
                (E = Math.sqrt(1 + E * E)),
                (w *= E),
                (S *= E))),
            (w = Fe(w)),
            (S = Fe(S)),
            (b = Fe(b)),
            (T = Fe(T)))
          : ((w = h), (T = m), (S = b = 0)),
        ((v && !~(a + "").indexOf("px")) || (D && !~(o + "").indexOf("px"))) &&
          ((v = Bi(p, "x", a, "px")), (D = Bi(p, "y", o, "px"))),
        (f || d || g || _) &&
          ((v = Fe(v + f - (f * w + d * b) + g)),
          (D = Fe(D + d - (f * S + d * T) + _))),
        (r || s) &&
          ((E = p.getBBox()),
          (v = Fe(v + (r / 100) * E.width)),
          (D = Fe(D + (s / 100) * E.height))),
        (E =
          "matrix(" +
          w +
          "," +
          S +
          "," +
          b +
          "," +
          T +
          "," +
          v +
          "," +
          D +
          ")"),
        p.setAttribute("transform", E),
        y && (p.style[Te] = E);
    },
    Nf = function (e, t, i, r, s) {
      var a = 360,
        o = Ye(s),
        u = parseFloat(s) * (o && ~s.indexOf("rad") ? er : 1),
        l = u - r,
        c = r + l + "deg",
        h,
        m;
      return (
        o &&
          ((h = s.split("_")[1]),
          h === "short" &&
            ((l %= a), l !== l % (a / 2) && (l += l < 0 ? a : -a)),
          h === "cw" && l < 0
            ? (l = ((l + a * ml) % a) - ~~(l / a) * a)
            : h === "ccw" && l > 0 && (l = ((l - a * ml) % a) - ~~(l / a) * a)),
        (e._pt = m = new xt(e._pt, t, i, r, l, xf)),
        (m.e = c),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    Ol = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    qf = function (e, t, i) {
      var r = Ol({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
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
          (a[Te] = t),
          (o = us(i, 1)),
          tr(i, Te),
          i.setAttribute("transform", l))
        : ((l = getComputedStyle(i)[Te]),
          (a[Te] = t),
          (o = us(i, 1)),
          (a[Te] = l));
      for (u in wi)
        (l = r[u]),
          (c = o[u]),
          l !== c &&
            s.indexOf(u) < 0 &&
            ((p = rt(l)),
            (f = rt(c)),
            (h = p !== f ? Bi(i, u, l, f) : parseFloat(l)),
            (m = parseFloat(c)),
            (e._pt = new xt(e._pt, o, u, h, m - h, ba)),
            (e._pt.u = f || 0),
            e._props.push(u));
      Ol(o, r);
    };
  bt("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      s = "Left",
      a = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (
        o
      ) {
        return e < 2 ? n + o : "border" + o + n;
      });
    en[e > 1 ? "border" + n : n] = function (o, u, l, c, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = a.map(function (f) {
            return bi(o, f, l);
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
  var kl = {
    name: "css",
    register: Ea,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, s) {
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
        S,
        b,
        T;
      _a || Ea(),
        (this.styles = this.styles || _l(e)),
        (T = this.styles.props),
        (this.tween = i);
      for (d in t)
        if (
          d !== "autoRound" &&
          ((c = t[d]), !(kt[d] && sl(d, t, i, r, e, s)))
        ) {
          if (
            ((p = typeof c),
            (f = en[d]),
            p === "function" && ((c = c.call(i, r, e, s)), (p = typeof c)),
            p === "string" && ~c.indexOf("random(") && (c = is(c)),
            f)
          )
            f(this, e, d, c, i) && (b = 1);
          else if (d.substr(0, 2) === "--")
            (l = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
              (c += ""),
              (Li.lastIndex = 0),
              Li.test(l) || ((g = rt(l)), (_ = rt(c))),
              _ ? g !== _ && (l = Bi(e, d, l, _) + _) : g && (c += g),
              this.add(o, "setProperty", l, c, r, s, 0, 0, d),
              a.push(d),
              T.push(d, 0, o[d]);
          else if (p !== "undefined") {
            if (
              (u && d in u
                ? ((l =
                    typeof u[d] == "function" ? u[d].call(i, r, e, s) : u[d]),
                  Ye(l) && ~l.indexOf("random(") && (l = is(l)),
                  rt(l + "") ||
                    l === "auto" ||
                    (l += Ft.units[d] || rt(bi(e, d)) || ""),
                  (l + "").charAt(1) === "=" && (l = bi(e, d)))
                : (l = bi(e, d)),
              (m = parseFloat(l)),
              (y = p === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              y && (c = c.substr(2)),
              (h = parseFloat(c)),
              d in ui &&
                (d === "autoAlpha" &&
                  (m === 1 && bi(e, "visibility") === "hidden" && h && (m = 0),
                  T.push("visibility", 0, o.visibility),
                  Ri(
                    this,
                    o,
                    "visibility",
                    m ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                d !== "scale" &&
                  d !== "transform" &&
                  ((d = ui[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
              (v = d in wi),
              v)
            ) {
              if (
                (this.styles.save(d),
                D ||
                  ((w = e._gsap),
                  (w.renderTransform && !t.parseTransform) ||
                    us(e, t.parseTransform),
                  (S = t.smoothOrigin !== !1 && w.smooth),
                  (D = this._pt =
                    new xt(this._pt, o, Te, 0, 1, w.renderTransform, w, 0, -1)),
                  (D.dep = 1)),
                d === "scale")
              )
                (this._pt = new xt(
                  this._pt,
                  w,
                  "scaleY",
                  w.scaleY,
                  (y ? br(w.scaleY, y + h) : h) - w.scaleY || 0,
                  ba
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", d),
                  (d += "X");
              else if (d === "transformOrigin") {
                T.push(St, 0, o[St]),
                  (c = zf(c)),
                  w.svg
                    ? Ta(e, c, 0, S, 0, this)
                    : ((_ = parseFloat(c.split(" ")[2]) || 0),
                      _ !== w.zOrigin && Ri(this, w, "zOrigin", w.zOrigin, _),
                      Ri(this, o, d, tn(l), tn(c)));
                continue;
              } else if (d === "svgOrigin") {
                Ta(e, c, 1, S, 0, this);
                continue;
              } else if (d in Ml) {
                Nf(this, w, d, m, y ? br(m, y + c) : c);
                continue;
              } else if (d === "smoothOrigin") {
                Ri(this, w, "smooth", w.smooth, c);
                continue;
              } else if (d === "force3D") {
                w[d] = c;
                continue;
              } else if (d === "transform") {
                qf(this, c, e);
                continue;
              }
            } else d in o || (d = Fr(d) || d);
            if (
              v ||
              ((h || h === 0) && (m || m === 0) && !bf.test(c) && d in o)
            )
              (g = (l + "").substr((m + "").length)),
                h || (h = 0),
                (_ = rt(c) || (d in Ft.units ? Ft.units[d] : g)),
                g !== _ && (m = Bi(e, d, l, _)),
                (this._pt = new xt(
                  this._pt,
                  v ? w : o,
                  d,
                  m,
                  (y ? br(m, y + h) : h) - m,
                  !v && (_ === "px" || d === "zIndex") && t.autoRound !== !1
                    ? Sf
                    : ba
                )),
                (this._pt.u = _ || 0),
                g !== _ && _ !== "%" && ((this._pt.b = l), (this._pt.r = Ef));
            else if (d in o) If.call(this, e, d, l, y ? y + c : c);
            else if (d in e) this.add(e, d, l || e[d], y ? y + c : c, r, s);
            else if (d !== "parseTransform") {
              Kn(d, c);
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
      b && cl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Da())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: bi,
    aliases: ui,
    getSetter: function (e, t, i) {
      var r = ui[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in wi && t !== St && (e._gsap.x || bi(e, "x"))
          ? i && hl === i
            ? t === "scale"
              ? Pf
              : Mf
            : (hl = i || {}) && (t === "scale" ? Af : Ff)
          : e.style && !Yn(e.style[t])
          ? Tf
          : ~t.indexOf("-")
          ? Cf
          : ha(e, t)
      );
    },
    core: { _removeProperty: tr, _getMatrix: Sa },
  };
  (Et.utils.checkPrefix = Fr),
    (Et.core.getStyleSaver = _l),
    (function (n, e, t, i) {
      var r = bt(n + "," + e + "," + t, function (s) {
        wi[s] = 1;
      });
      bt(e, function (s) {
        (Ft.units[s] = "deg"), (Ml[s] = 1);
      }),
        (ui[r[13]] = n + "," + e),
        bt(i, function (s) {
          var a = s.split(":");
          ui[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    bt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (n) {
        Ft.units[n] = "px";
      }
    ),
    Et.registerPlugin(kl);
  var q = Et.registerPlugin(kl) || Et;
  q.core.Tween;
  function Vf(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function Hf(n, e, t) {
    return e && Vf(n.prototype, e), n;
  }
  /*!
   * Observer 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Ze,
    rn,
    Rt,
    $i,
    Ni,
    Or,
    Ll,
    sr,
    ds,
    Il,
    xi,
    Jt,
    zl,
    Rl = function () {
      return (
        Ze ||
        (typeof window != "undefined" &&
          (Ze = window.gsap) &&
          Ze.registerPlugin &&
          Ze)
      );
    },
    Bl = 1,
    kr = [],
    te = [],
    di = [],
    fs = Date.now,
    Ma = function (e, t) {
      return t;
    },
    Yf = function () {
      var e = ds.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, te),
        r.push.apply(r, di),
        (te = i),
        (di = r),
        (Ma = function (a, o) {
          return t[a](o);
        });
    },
    qi = function (e, t) {
      return ~di.indexOf(e) && di[di.indexOf(e) + 1][t];
    },
    ps = function (e) {
      return !!~Il.indexOf(e);
    },
    ht = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!s });
    },
    mt = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    sn = "scrollLeft",
    nn = "scrollTop",
    Pa = function () {
      return (xi && xi.isPressed) || te.cache++;
    },
    an = function (e, t) {
      var i = function r(s) {
        if (s || s === 0) {
          Bl && (Rt.history.scrollRestoration = "manual");
          var a = xi && xi.isPressed;
          (s = r.v = Math.round(s) || (xi && xi.iOS ? 1 : 0)),
            e(s),
            (r.cacheID = te.cache),
            a && Ma("ss", s);
        } else
          (t || te.cache !== r.cacheID || Ma("ref")) &&
            ((r.cacheID = te.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    gt = {
      s: sn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: an(function (n) {
        return arguments.length
          ? Rt.scrollTo(n, $e.sc())
          : Rt.pageXOffset || $i[sn] || Ni[sn] || Or[sn] || 0;
      }),
    },
    $e = {
      s: nn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: gt,
      sc: an(function (n) {
        return arguments.length
          ? Rt.scrollTo(gt.sc(), n)
          : Rt.pageYOffset || $i[nn] || Ni[nn] || Or[nn] || 0;
      }),
    },
    Tt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || Ze.utils.toArray)(e)[0] ||
        (typeof e == "string" && Ze.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Vi = function (e, t) {
      var i = t.s,
        r = t.sc;
      ps(e) && (e = $i.scrollingElement || Ni);
      var s = te.indexOf(e),
        a = r === $e.sc ? 1 : 2;
      !~s && (s = te.push(e) - 1), te[s + a] || ht(e, "scroll", Pa);
      var o = te[s + a],
        u =
          o ||
          (te[s + a] =
            an(qi(e, i), !0) ||
            (ps(e)
              ? r
              : an(function (l) {
                  return arguments.length ? (e[i] = l) : e[i];
                })));
      return (
        (u.target = e),
        o || (u.smooth = Ze.getProperty(e, "scrollBehavior") === "smooth"),
        u
      );
    },
    Aa = function (e, t, i) {
      var r = e,
        s = e,
        a = fs(),
        o = a,
        u = t || 50,
        l = Math.max(500, u * 3),
        c = function (f, d) {
          var g = fs();
          d || g - a > u
            ? ((s = r), (r = f), (o = a), (a = g))
            : i
            ? (r += f)
            : (r = s + ((f - s) / (g - o)) * (a - o));
        },
        h = function () {
          (s = r = i ? 0 : r), (o = a = 0);
        },
        m = function (f) {
          var d = o,
            g = s,
            _ = fs();
          return (
            (f || f === 0) && f !== r && c(f),
            a === o || _ - o > l
              ? 0
              : ((r + (i ? g : -g)) / ((i ? _ : a) - d)) * 1e3
          );
        };
      return { update: c, reset: h, getVelocity: m };
    },
    hs = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    $l = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    Nl = function () {
      (ds = Ze.core.globals().ScrollTrigger), ds && ds.core && Yf();
    },
    ql = function (e) {
      return (
        (Ze = e || Rl()),
        !rn &&
          Ze &&
          typeof document != "undefined" &&
          document.body &&
          ((Rt = window),
          ($i = document),
          (Ni = $i.documentElement),
          (Or = $i.body),
          (Il = [Rt, $i, Ni, Or]),
          Ze.utils.clamp,
          (zl = Ze.core.context || function () {}),
          (sr = "onpointerenter" in Or ? "pointer" : "mouse"),
          (Ll = Oe.isTouch =
            Rt.matchMedia &&
            Rt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Rt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Jt = Oe.eventTypes =
            (
              "ontouchstart" in Ni
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Ni
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Bl = 0);
          }, 500),
          Nl(),
          (rn = 1)),
        rn
      );
    };
  (gt.op = $e), (te.cache = 0);
  var Oe = (function () {
    function n(t) {
      this.init(t);
    }
    var e = n.prototype;
    return (
      (e.init = function (i) {
        rn || ql(Ze) || console.warn("Please gsap.registerPlugin(Observer)"),
          ds || Nl();
        var r = i.tolerance,
          s = i.dragMinimum,
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
          S = i.onLeft,
          b = i.onUp,
          T = i.onDown,
          E = i.onChangeX,
          x = i.onChangeY,
          k = i.onChange,
          P = i.onToggleX,
          L = i.onToggleY,
          F = i.onHover,
          R = i.onHoverEnd,
          I = i.onMove,
          M = i.ignoreCheck,
          O = i.isNormalizer,
          A = i.onGestureStart,
          C = i.onGestureEnd,
          Y = i.onWheel,
          Z = i.onEnable,
          _e = i.onDisable,
          re = i.onClick,
          B = i.scrollSpeed,
          $ = i.capture,
          N = i.allowClicks,
          W = i.lockAxis,
          ue = i.onLockAxis;
        (this.target = o = Tt(o) || Ni),
          (this.vars = i),
          p && (p = Ze.utils.toArray(p)),
          (r = r || 1e-9),
          (s = s || 0),
          (f = f || 1),
          (B = B || 1),
          (a = a || "wheel,touch,pointer"),
          (l = l !== !1),
          u || (u = parseFloat(Rt.getComputedStyle(Or).lineHeight) || 22);
        var Qe,
          be,
          xe,
          Q,
          se,
          ve,
          qe,
          z = this,
          Re = 0,
          ot = 0,
          qt = i.passive || (!c && i.passive !== !1),
          ye = Vi(o, gt),
          Vt = Vi(o, $e),
          Zt = ye(),
          ti = Vt(),
          Pe =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            Jt[0] === "pointerdown",
          Qt = ps(o),
          fe = o.ownerDocument || $i,
          Ct = [0, 0, 0],
          We = [0, 0, 0],
          Ti = 0,
          Os = function () {
            return (Ti = fs());
          },
          Be = function (U, ce) {
            return (
              ((z.event = U) && p && ~p.indexOf(U.target)) ||
              (ce && Pe && U.pointerType !== "touch") ||
              (M && M(U, ce))
            );
          },
          Mn = function () {
            z._vx.reset(), z._vy.reset(), be.pause(), h && h(z);
          },
          Ci = function () {
            var U = (z.deltaX = $l(Ct)),
              ce = (z.deltaY = $l(We)),
              V = Math.abs(U) >= r,
              j = Math.abs(ce) >= r;
            k && (V || j) && k(z, U, ce, Ct, We),
              V &&
                (w && z.deltaX > 0 && w(z),
                S && z.deltaX < 0 && S(z),
                E && E(z),
                P && z.deltaX < 0 != Re < 0 && P(z),
                (Re = z.deltaX),
                (Ct[0] = Ct[1] = Ct[2] = 0)),
              j &&
                (T && z.deltaY > 0 && T(z),
                b && z.deltaY < 0 && b(z),
                x && x(z),
                L && z.deltaY < 0 != ot < 0 && L(z),
                (ot = z.deltaY),
                (We[0] = We[1] = We[2] = 0)),
              (Q || xe) &&
                (I && I(z),
                xe && (g && xe === 1 && g(z), y && y(z), (xe = 0)),
                (Q = !1)),
              ve && !(ve = !1) && ue && ue(z),
              se && (Y(z), (se = !1)),
              (Qe = 0);
          },
          Vr = function (U, ce, V) {
            (Ct[V] += U),
              (We[V] += ce),
              z._vx.update(U),
              z._vy.update(ce),
              l ? Qe || (Qe = requestAnimationFrame(Ci)) : Ci();
          },
          Hr = function (U, ce) {
            W &&
              !qe &&
              ((z.axis = qe = Math.abs(U) > Math.abs(ce) ? "x" : "y"),
              (ve = !0)),
              qe !== "y" && ((Ct[2] += U), z._vx.update(U, !0)),
              qe !== "x" && ((We[2] += ce), z._vy.update(ce, !0)),
              l ? Qe || (Qe = requestAnimationFrame(Ci)) : Ci();
          },
          Yi = function (U) {
            if (!Be(U, 1)) {
              U = hs(U, c);
              var ce = U.clientX,
                V = U.clientY,
                j = ce - z.x,
                G = V - z.y,
                K = z.isDragging;
              (z.x = ce),
                (z.y = V),
                (K ||
                  ((j || G) &&
                    (Math.abs(z.startX - ce) >= s ||
                      Math.abs(z.startY - V) >= s))) &&
                  ((xe = K ? 2 : 1), K || (z.isDragging = !0), Hr(j, G));
            }
          },
          hr = (z.onPress = function (J) {
            Be(J, 1) ||
              (J && J.button) ||
              ((z.axis = qe = null),
              be.pause(),
              (z.isPressed = !0),
              (J = hs(J)),
              (Re = ot = 0),
              (z.startX = z.x = J.clientX),
              (z.startY = z.y = J.clientY),
              z._vx.reset(),
              z._vy.reset(),
              ht(O ? o : fe, Jt[1], Yi, qt, !0),
              (z.deltaX = z.deltaY = 0),
              v && v(z));
          }),
          ae = (z.onRelease = function (J) {
            if (!Be(J, 1)) {
              mt(O ? o : fe, Jt[1], Yi, !0);
              var U = !isNaN(z.y - z.startY),
                ce = z.isDragging,
                V =
                  ce &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                j = hs(J);
              !V &&
                U &&
                (z._vx.reset(),
                z._vy.reset(),
                c &&
                  N &&
                  Ze.delayedCall(0.08, function () {
                    if (fs() - Ti > 300 && !J.defaultPrevented) {
                      if (J.target.click) J.target.click();
                      else if (fe.createEvent) {
                        var G = fe.createEvent("MouseEvents");
                        G.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Rt,
                          1,
                          j.screenX,
                          j.screenY,
                          j.clientX,
                          j.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          J.target.dispatchEvent(G);
                      }
                    }
                  })),
                (z.isDragging = z.isGesturing = z.isPressed = !1),
                h && ce && !O && be.restart(!0),
                xe && Ci(),
                _ && ce && _(z),
                D && D(z, V);
            }
          }),
          mr = function (U) {
            return (
              U.touches &&
              U.touches.length > 1 &&
              (z.isGesturing = !0) &&
              A(U, z.isDragging)
            );
          },
          ii = function () {
            return (z.isGesturing = !1) || C(z);
          },
          ri = function (U) {
            if (!Be(U)) {
              var ce = ye(),
                V = Vt();
              Vr((ce - Zt) * B, (V - ti) * B, 1),
                (Zt = ce),
                (ti = V),
                h && be.restart(!0);
            }
          },
          si = function (U) {
            if (!Be(U)) {
              (U = hs(U, c)), Y && (se = !0);
              var ce =
                (U.deltaMode === 1
                  ? u
                  : U.deltaMode === 2
                  ? Rt.innerHeight
                  : 1) * f;
              Vr(U.deltaX * ce, U.deltaY * ce, 0), h && !O && be.restart(!0);
            }
          },
          gr = function (U) {
            if (!Be(U)) {
              var ce = U.clientX,
                V = U.clientY,
                j = ce - z.x,
                G = V - z.y;
              (z.x = ce),
                (z.y = V),
                (Q = !0),
                h && be.restart(!0),
                (j || G) && Hr(j, G);
            }
          },
          Yr = function (U) {
            (z.event = U), F(z);
          },
          Mi = function (U) {
            (z.event = U), R(z);
          },
          ks = function (U) {
            return Be(U) || (hs(U, c) && re(z));
          };
        (be = z._dc = Ze.delayedCall(m || 0.25, Mn).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = Aa(0, 50, !0)),
          (z._vy = Aa(0, 50, !0)),
          (z.scrollX = ye),
          (z.scrollY = Vt),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          zl(this),
          (z.enable = function (J) {
            return (
              z.isEnabled ||
                (ht(Qt ? fe : o, "scroll", Pa),
                a.indexOf("scroll") >= 0 &&
                  ht(Qt ? fe : o, "scroll", ri, qt, $),
                a.indexOf("wheel") >= 0 && ht(o, "wheel", si, qt, $),
                ((a.indexOf("touch") >= 0 && Ll) ||
                  a.indexOf("pointer") >= 0) &&
                  (ht(o, Jt[0], hr, qt, $),
                  ht(fe, Jt[2], ae),
                  ht(fe, Jt[3], ae),
                  N && ht(o, "click", Os, !0, !0),
                  re && ht(o, "click", ks),
                  A && ht(fe, "gesturestart", mr),
                  C && ht(fe, "gestureend", ii),
                  F && ht(o, sr + "enter", Yr),
                  R && ht(o, sr + "leave", Mi),
                  I && ht(o, sr + "move", gr)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = Q = xe = !1),
                z._vx.reset(),
                z._vy.reset(),
                (Zt = ye()),
                (ti = Vt()),
                J && J.type && hr(J),
                Z && Z(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (kr.filter(function (J) {
                return J !== z && ps(J.target);
              }).length || mt(Qt ? fe : o, "scroll", Pa),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), mt(O ? o : fe, Jt[1], Yi, !0)),
              mt(Qt ? fe : o, "scroll", ri, $),
              mt(o, "wheel", si, $),
              mt(o, Jt[0], hr, $),
              mt(fe, Jt[2], ae),
              mt(fe, Jt[3], ae),
              mt(o, "click", Os, !0),
              mt(o, "click", ks),
              mt(fe, "gesturestart", mr),
              mt(fe, "gestureend", ii),
              mt(o, sr + "enter", Yr),
              mt(o, sr + "leave", Mi),
              mt(o, sr + "move", gr),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              _e && _e(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var J = kr.indexOf(z);
              J >= 0 && kr.splice(J, 1), xi === z && (xi = 0);
            }),
          kr.push(z),
          O && ps(o) && (xi = z),
          z.enable(d);
      }),
      Hf(n, [
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
      n
    );
  })();
  (Oe.version = "3.12.7"),
    (Oe.create = function (n) {
      return new Oe(n);
    }),
    (Oe.register = ql),
    (Oe.getAll = function () {
      return kr.slice();
    }),
    (Oe.getById = function (n) {
      return kr.filter(function (e) {
        return e.vars.id === n;
      })[0];
    }),
    Rl() && Ze.registerPlugin(Oe);
  /*!
   * ScrollTrigger 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var H,
    Lr,
    ie,
    ge,
    Bt,
    de,
    Fa,
    on,
    ms,
    gs,
    vs,
    ln,
    st,
    un,
    Oa,
    vt,
    Vl,
    Hl,
    Ir,
    Yl,
    ka,
    Xl,
    yt,
    La,
    Gl,
    Wl,
    Hi,
    Ia,
    za,
    zr,
    Ra,
    cn,
    Ba,
    $a,
    dn = 1,
    nt = Date.now,
    Na = nt(),
    Ut = 0,
    ys = 0,
    Ul = function (e, t, i) {
      var r = $t(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    jl = function (e, t) {
      return t && (!$t(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Xf = function n() {
      return ys && requestAnimationFrame(n);
    },
    Kl = function () {
      return (un = 1);
    },
    Zl = function () {
      return (un = 0);
    },
    fi = function (e) {
      return e;
    },
    _s = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Ql = function () {
      return typeof window != "undefined";
    },
    Jl = function () {
      return H || (Ql() && (H = window.gsap) && H.registerPlugin && H);
    },
    nr = function (e) {
      return !!~Fa.indexOf(e);
    },
    eu = function (e) {
      return (
        (e === "Height" ? Ra : ie["inner" + e]) ||
        Bt["client" + e] ||
        de["client" + e]
      );
    },
    tu = function (e) {
      return (
        qi(e, "getBoundingClientRect") ||
        (nr(e)
          ? function () {
              return (En.width = ie.innerWidth), (En.height = Ra), En;
            }
          : function () {
              return Ei(e);
            })
      );
    },
    Gf = function (e, t, i) {
      var r = i.d,
        s = i.d2,
        a = i.a;
      return (a = qi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? eu(s) : e["client" + s]) || 0;
          };
    },
    Wf = function (e, t) {
      return !t || ~di.indexOf(e)
        ? tu(e)
        : function () {
            return En;
          };
    },
    pi = function (e, t) {
      var i = t.s,
        r = t.d2,
        s = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = qi(e, i))
          ? a() - tu(e)()[s]
          : nr(e)
          ? (Bt[i] || de[i]) - eu(r)
          : e[i] - e["offset" + r]
      );
    },
    fn = function (e, t) {
      for (var i = 0; i < Ir.length; i += 3)
        (!t || ~t.indexOf(Ir[i + 1])) && e(Ir[i], Ir[i + 1], Ir[i + 2]);
    },
    $t = function (e) {
      return typeof e == "string";
    },
    at = function (e) {
      return typeof e == "function";
    },
    Ds = function (e) {
      return typeof e == "number";
    },
    ar = function (e) {
      return typeof e == "object";
    },
    ws = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    qa = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    Rr = Math.abs,
    iu = "left",
    ru = "top",
    Va = "right",
    Ha = "bottom",
    or = "width",
    lr = "height",
    bs = "Right",
    xs = "Left",
    Es = "Top",
    Ss = "Bottom",
    ze = "padding",
    jt = "margin",
    Br = "Width",
    Ya = "Height",
    Ne = "px",
    Kt = function (e) {
      return ie.getComputedStyle(e);
    },
    Uf = function (e) {
      var t = Kt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    su = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Ei = function (e, t) {
      var i =
          t &&
          Kt(e)[Oa] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
    pn = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    nu = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        s;
      for (s in i) t.push(i[s] / r);
      return t;
    },
    jf = function (e) {
      return function (t) {
        return H.utils.snap(nu(e), t);
      };
    },
    Xa = function (e) {
      var t = H.utils.snap(e),
        i =
          Array.isArray(e) &&
          e.slice(0).sort(function (r, s) {
            return r - s;
          });
      return i
        ? function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o;
            if (!s) return t(r);
            if (s > 0) {
              for (r -= a, o = 0; o < i.length; o++) if (i[o] >= r) return i[o];
              return i[o - 1];
            } else for (o = i.length, r += a; o--; ) if (i[o] <= r) return i[o];
            return i[0];
          }
        : function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o = t(r);
            return !s || Math.abs(o - r) < a || o - r < 0 == s < 0
              ? o
              : t(s < 0 ? r - e : r + e);
          };
    },
    Kf = function (e) {
      return function (t, i) {
        return Xa(nu(e))(t, i.direction);
      };
    },
    hn = function (e, t, i, r) {
      return i.split(",").forEach(function (s) {
        return e(t, s, r);
      });
    },
    Xe = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: !r, capture: !!s });
    },
    Ge = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    mn = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    au = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    gn = { toggleActions: "play", anticipatePin: 0 },
    vn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    yn = function (e, t) {
      if ($t(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in vn
              ? vn[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    _n = function (e, t, i, r, s, a, o, u) {
      var l = s.startColor,
        c = s.endColor,
        h = s.fontSize,
        m = s.indent,
        p = s.fontWeight,
        f = ge.createElement("div"),
        d = nr(i) || qi(i, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        _ = d ? de : i,
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
          (D += (r === $e ? Va : Ha) + ":" + (a + parseFloat(m)) + "px;"),
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
        Dn(f, 0, r, y),
        f
      );
    },
    Dn = function (e, t, i, r) {
      var s = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (s[i.a + "Percent"] = r ? -100 : 0),
        (s[i.a] = r ? "1px" : 0),
        (s["border" + a + Br] = 1),
        (s["border" + o + Br] = 0),
        (s[i.p] = t + "px"),
        H.set(e, s);
    },
    ee = [],
    Ga = {},
    Ts,
    ou = function () {
      return nt() - Ut > 34 && (Ts || (Ts = requestAnimationFrame(Si)));
    },
    $r = function () {
      (!yt || !yt.isPressed || yt.startX > de.clientWidth) &&
        (te.cache++,
        yt ? Ts || (Ts = requestAnimationFrame(Si)) : Si(),
        Ut || cr("scrollStart"),
        (Ut = nt()));
    },
    Wa = function () {
      (Wl = ie.innerWidth), (Gl = ie.innerHeight);
    },
    Cs = function (e) {
      te.cache++,
        (e === !0 ||
          (!st &&
            !Xl &&
            !ge.fullscreenElement &&
            !ge.webkitFullscreenElement &&
            (!La ||
              Wl !== ie.innerWidth ||
              Math.abs(ie.innerHeight - Gl) > ie.innerHeight * 0.25))) &&
          on.restart(!0);
    },
    ur = {},
    Zf = [],
    lu = function n() {
      return Ge(X, "scrollEnd", n) || fr(!0);
    },
    cr = function (e) {
      return (
        (ur[e] &&
          ur[e].map(function (t) {
            return t();
          })) ||
        Zf
      );
    },
    Nt = [],
    uu = function (e) {
      for (var t = 0; t < Nt.length; t += 5)
        (!e || (Nt[t + 4] && Nt[t + 4].query === e)) &&
          ((Nt[t].style.cssText = Nt[t + 1]),
          Nt[t].getBBox && Nt[t].setAttribute("transform", Nt[t + 2] || ""),
          (Nt[t + 3].uncache = 1));
    },
    Ua = function (e, t) {
      var i;
      for (vt = 0; vt < ee.length; vt++)
        (i = ee[vt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (cn = !0), t && uu(t), t || cr("revert");
    },
    cu = function (e, t) {
      te.cache++,
        (t || !_t) &&
          te.forEach(function (i) {
            return at(i) && i.cacheID++ && (i.rec = 0);
          }),
        $t(e) && (ie.history.scrollRestoration = za = e);
    },
    _t,
    dr = 0,
    du,
    Qf = function () {
      if (du !== dr) {
        var e = (du = dr);
        requestAnimationFrame(function () {
          return e === dr && fr(!0);
        });
      }
    },
    fu = function () {
      de.appendChild(zr),
        (Ra = (!yt && zr.offsetHeight) || ie.innerHeight),
        de.removeChild(zr);
    },
    pu = function (e) {
      return ms(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    fr = function (e, t) {
      if (
        ((Bt = ge.documentElement),
        (de = ge.body),
        (Fa = [ie, ge, Bt, de]),
        Ut && !e && !cn)
      ) {
        Xe(X, "scrollEnd", lu);
        return;
      }
      fu(),
        (_t = X.isRefreshing = !0),
        te.forEach(function (r) {
          return at(r) && ++r.cacheID && (r.rec = r());
        });
      var i = cr("refreshInit");
      Yl && X.sort(),
        t || Ua(),
        te.forEach(function (r) {
          at(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        ee.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (cn = !1),
        ee.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[s];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - a), r.refresh();
          }
        }),
        (Ba = 1),
        pu(!0),
        ee.forEach(function (r) {
          var s = pi(r.scroller, r._dir),
            a = r.vars.end === "max" || (r._endClamp && r.end > s),
            o = r._startClamp && r.start >= s;
          (a || o) &&
            r.setPositions(
              o ? s - 1 : r.start,
              a ? Math.max(o ? s : r.start + 1, s) : r.end,
              !0
            );
        }),
        pu(!1),
        (Ba = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        te.forEach(function (r) {
          at(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        cu(za, 1),
        on.pause(),
        dr++,
        (_t = 2),
        Si(2),
        ee.forEach(function (r) {
          return at(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (_t = X.isRefreshing = !1),
        cr("refresh");
    },
    ja = 0,
    wn = 1,
    Ms,
    Si = function (e) {
      if (e === 2 || (!_t && !cn)) {
        (X.isUpdating = !0), Ms && Ms.update(0);
        var t = ee.length,
          i = nt(),
          r = i - Na >= 50,
          s = t && ee[0].scroll();
        if (
          ((wn = ja > s ? -1 : 1),
          _t || (ja = s),
          r &&
            (Ut && !un && i - Ut > 200 && ((Ut = 0), cr("scrollEnd")),
            (vs = Na),
            (Na = i)),
          wn < 0)
        ) {
          for (vt = t; vt-- > 0; ) ee[vt] && ee[vt].update(0, r);
          wn = 1;
        } else for (vt = 0; vt < t; vt++) ee[vt] && ee[vt].update(0, r);
        X.isUpdating = !1;
      }
      Ts = 0;
    },
    Ka = [
      iu,
      ru,
      Ha,
      Va,
      jt + Ss,
      jt + bs,
      jt + Es,
      jt + xs,
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
    bn = Ka.concat([
      or,
      lr,
      "boxSizing",
      "max" + Br,
      "max" + Ya,
      "position",
      jt,
      ze,
      ze + Es,
      ze + bs,
      ze + Ss,
      ze + xs,
    ]),
    Jf = function (e, t, i) {
      Nr(i);
      var r = e._gsap;
      if (r.spacerIsNative) Nr(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    Za = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var s = Ka.length, a = t.style, o = e.style, u; s--; )
          (u = Ka[s]), (a[u] = i[u]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[Ha] = o[Va] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[or] = pn(e, gt) + Ne),
          (a[lr] = pn(e, $e) + Ne),
          (a[ze] = o[jt] = o[ru] = o[iu] = "0"),
          Nr(r),
          (o[or] = o["max" + Br] = i[or]),
          (o[lr] = o["max" + Ya] = i[lr]),
          (o[ze] = i[ze]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    ep = /([A-Z])/g,
    Nr = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          r = 0,
          s,
          a;
        for ((e.t._gsap || H.core.getCache(e.t)).uncache = 1; r < i; r += 2)
          (a = e[r + 1]),
            (s = e[r]),
            a
              ? (t[s] = a)
              : t[s] && t.removeProperty(s.replace(ep, "-$1").toLowerCase());
      }
    },
    xn = function (e) {
      for (var t = bn.length, i = e.style, r = [], s = 0; s < t; s++)
        r.push(bn[s], i[bn[s]]);
      return (r.t = e), r;
    },
    tp = function (e, t, i) {
      for (var r = [], s = e.length, a = i ? 8 : 0, o; a < s; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    En = { left: 0, top: 0 },
    hu = function (e, t, i, r, s, a, o, u, l, c, h, m, p, f) {
      at(e) && (e = e(u)),
        $t(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? yn("0" + e.substr(3), i) : 0));
      var d = p ? p.time() : 0,
        g,
        _,
        y;
      if ((p && p.seek(0), isNaN(e) || (e = +e), Ds(e)))
        p &&
          (e = H.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            m,
            e
          )),
          o && Dn(o, i, r, !0);
      else {
        at(t) && (t = t(u));
        var v = (e || "0").split(" "),
          D,
          w,
          S,
          b;
        (y = Tt(t, u) || de),
          (D = Ei(y) || {}),
          (!D || (!D.left && !D.top)) &&
            Kt(y).display === "none" &&
            ((b = y.style.display),
            (y.style.display = "block"),
            (D = Ei(y)),
            b ? (y.style.display = b) : y.style.removeProperty("display")),
          (w = yn(v[0], D[r.d])),
          (S = yn(v[1] || "0", i)),
          (e = D[r.p] - l[r.p] - c + w + s - S),
          o && Dn(o, S, r, i - S < 20 || (o._isStart && S > 20)),
          (i -= i - S);
      }
      if ((f && ((u[f] = e || -0.001), e < 0 && (e = 0)), a)) {
        var T = e + i,
          E = a._isStart;
        (g = "scroll" + r.d2),
          Dn(
            a,
            T,
            r,
            (E && T > 20) ||
              (!E && (h ? Math.max(de[g], Bt[g]) : a.parentNode[g]) <= T + 1)
          ),
          h &&
            ((l = Ei(o)),
            h && (a.style[r.op.p] = l[r.op.p] - r.op.m - a._offset + Ne));
      }
      return (
        p &&
          y &&
          ((g = Ei(y)),
          p.seek(m),
          (_ = Ei(y)),
          (p._caScrollDist = g[r.p] - _[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(d),
        p ? e : Math.round(e)
      );
    },
    ip = /(webkit|moz|length|cssText|inset)/i,
    mu = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var s = e.style,
          a,
          o;
        if (t === de) {
          (e._stOrig = s.cssText), (o = Kt(e));
          for (a in o)
            !+a &&
              !ip.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = i), (s.left = r);
        } else s.cssText = e._stOrig;
        (H.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    gu = function (e, t, i) {
      var r = t,
        s = r;
      return function (a) {
        var o = Math.round(e());
        return (
          o !== r &&
            o !== s &&
            Math.abs(o - r) > 3 &&
            Math.abs(o - s) > 3 &&
            ((a = o), i && i()),
          (s = r),
          (r = Math.round(a)),
          r
        );
      };
    },
    Sn = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), H.set(e, r);
    },
    vu = function (e, t) {
      var i = Vi(e, t),
        r = "_scroll" + t.p2,
        s = function a(o, u, l, c, h) {
          var m = a.tween,
            p = u.onComplete,
            f = {};
          l = l || i();
          var d = gu(i, l, function () {
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
              te.cache++, a.tween && Si();
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
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Xe(e, "wheel", i.wheelHandler),
        X.isTouch && Xe(e, "touchmove", i.wheelHandler),
        s
      );
    },
    X = (function () {
      function n(t, i) {
        Lr ||
          n.register(H) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Ia(this),
          this.init(t, i);
      }
      var e = n.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !ys)
          ) {
            this.update = this.refresh = this.kill = fi;
            return;
          }
          i = su($t(i) || Ds(i) || i.nodeType ? { trigger: i } : i, gn);
          var s = i,
            a = s.onUpdate,
            o = s.toggleClass,
            u = s.id,
            l = s.onToggle,
            c = s.onRefresh,
            h = s.scrub,
            m = s.trigger,
            p = s.pin,
            f = s.pinSpacing,
            d = s.invalidateOnRefresh,
            g = s.anticipatePin,
            _ = s.onScrubComplete,
            y = s.onSnapComplete,
            v = s.once,
            D = s.snap,
            w = s.pinReparent,
            S = s.pinSpacer,
            b = s.containerAnimation,
            T = s.fastScrollEnd,
            E = s.preventOverlaps,
            x =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? gt
                : $e,
            k = !h && h !== 0,
            P = Tt(i.scroller || ie),
            L = H.core.getCache(P),
            F = nr(P),
            R =
              ("pinType" in i
                ? i.pinType
                : qi(P, "pinType") || (F && "fixed")) === "fixed",
            I = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            M = k && i.toggleActions.split(" "),
            O = "markers" in i ? i.markers : gn.markers,
            A = F ? 0 : parseFloat(Kt(P)["border" + x.p2 + Br]) || 0,
            C = this,
            Y =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(C);
              },
            Z = Gf(P, F, x),
            _e = Wf(P, F),
            re = 0,
            B = 0,
            $ = 0,
            N = Vi(P, x),
            W,
            ue,
            Qe,
            be,
            xe,
            Q,
            se,
            ve,
            qe,
            z,
            Re,
            ot,
            qt,
            ye,
            Vt,
            Zt,
            ti,
            Pe,
            Qt,
            fe,
            Ct,
            We,
            Ti,
            Os,
            Be,
            Mn,
            Ci,
            Vr,
            Hr,
            Yi,
            hr,
            ae,
            mr,
            ii,
            ri,
            si,
            gr,
            Yr,
            Mi;
          if (
            ((C._startClamp = C._endClamp = !1),
            (C._dir = x),
            (g *= 45),
            (C.scroller = P),
            (C.scroll = b ? b.time.bind(b) : N),
            (be = N()),
            (C.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((Yl = 1), i.refreshPriority === -9999 && (Ms = C)),
            (L.tweenScroll = L.tweenScroll || {
              top: vu(P, $e),
              left: vu(P, gt),
            }),
            (C.tweenTo = W = L.tweenScroll[x.p]),
            (C.scrubDuration = function (V) {
              (mr = Ds(V) && V),
                mr
                  ? ae
                    ? ae.duration(V)
                    : (ae = H.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: mr,
                        paused: !0,
                        onComplete: function () {
                          return _ && _(C);
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
              (Yi = 0),
              u || (u = r.vars.id)),
            D &&
              ((!ar(D) || D.push) && (D = { snapTo: D }),
              "scrollBehavior" in de.style &&
                H.set(F ? [de, Bt] : P, { scrollBehavior: "auto" }),
              te.forEach(function (V) {
                return (
                  at(V) &&
                  V.target === (F ? ge.scrollingElement || Bt : P) &&
                  (V.smooth = !1)
                );
              }),
              (Qe = at(D.snapTo)
                ? D.snapTo
                : D.snapTo === "labels"
                ? jf(r)
                : D.snapTo === "labelsDirectional"
                ? Kf(r)
                : D.directional !== !1
                ? function (V, j) {
                    return Xa(D.snapTo)(V, nt() - B < 500 ? 0 : j.direction);
                  }
                : H.utils.snap(D.snapTo)),
              (ii = D.duration || { min: 0.1, max: 2 }),
              (ii = ar(ii) ? gs(ii.min, ii.max) : gs(ii, ii)),
              (ri = H.delayedCall(D.delay || mr / 2 || 0.1, function () {
                var V = N(),
                  j = nt() - B < 500,
                  G = W.tween;
                if (
                  (j || Math.abs(C.getVelocity()) < 10) &&
                  !G &&
                  !un &&
                  re !== V
                ) {
                  var K = (V - Q) / ye,
                    Ue = r && !k ? r.totalProgress() : K,
                    le = j ? 0 : ((Ue - hr) / (nt() - vs)) * 1e3 || 0,
                    ke = H.utils.clamp(-K, 1 - K, (Rr(le / 2) * le) / 0.185),
                    lt = K + (D.inertia === !1 ? 0 : ke),
                    Ae,
                    Ee,
                    me = D,
                    ni = me.onStart,
                    Ce = me.onInterrupt,
                    Ht = me.onComplete;
                  if (
                    ((Ae = Qe(lt, C)),
                    Ds(Ae) || (Ae = lt),
                    (Ee = Math.max(0, Math.round(Q + Ae * ye))),
                    V <= se && V >= Q && Ee !== V)
                  ) {
                    if (G && !G._initted && G.data <= Rr(Ee - V)) return;
                    D.inertia === !1 && (ke = Ae - K),
                      W(
                        Ee,
                        {
                          duration: ii(
                            Rr(
                              (Math.max(Rr(lt - Ue), Rr(Ae - Ue)) * 0.185) /
                                le /
                                0.05 || 0
                            )
                          ),
                          ease: D.ease || "power3",
                          data: Rr(Ee - V),
                          onInterrupt: function () {
                            return ri.restart(!0) && Ce && Ce(C);
                          },
                          onComplete: function () {
                            C.update(),
                              (re = N()),
                              r &&
                                !k &&
                                (ae
                                  ? ae.resetTo(
                                      "totalProgress",
                                      Ae,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(Ae)),
                              (Yi = hr =
                                r && !k ? r.totalProgress() : C.progress),
                              y && y(C),
                              Ht && Ht(C);
                          },
                        },
                        V,
                        ke * ye,
                        Ee - V - ke * ye
                      ),
                      ni && ni(C, W.tween);
                  }
                } else C.isActive && re !== V && ri.restart(!0);
              }).pause())),
            u && (Ga[u] = C),
            (m = C.trigger = Tt(m || (p !== !0 && p))),
            (Mi = m && m._gsap && m._gsap.stRevert),
            Mi && (Mi = Mi(C)),
            (p = p === !0 ? m : Tt(p)),
            $t(o) && (o = { targets: m, className: o }),
            p &&
              (f === !1 ||
                f === jt ||
                (f =
                  !f &&
                  p.parentNode &&
                  p.parentNode.style &&
                  Kt(p.parentNode).display === "flex"
                    ? !1
                    : ze),
              (C.pin = p),
              (ue = H.core.getCache(p)),
              ue.spacer
                ? (Vt = ue.pinState)
                : (S &&
                    ((S = Tt(S)),
                    S && !S.nodeType && (S = S.current || S.nativeElement),
                    (ue.spacerIsNative = !!S),
                    S && (ue.spacerState = xn(S))),
                  (ue.spacer = Pe = S || ge.createElement("div")),
                  Pe.classList.add("pin-spacer"),
                  u && Pe.classList.add("pin-spacer-" + u),
                  (ue.pinState = Vt = xn(p))),
              i.force3D !== !1 && H.set(p, { force3D: !0 }),
              (C.spacer = Pe = ue.spacer),
              (Hr = Kt(p)),
              (Os = Hr[f + x.os2]),
              (fe = H.getProperty(p)),
              (Ct = H.quickSetter(p, x.a, Ne)),
              Za(p, Pe, Hr),
              (ti = xn(p))),
            O)
          ) {
            (ot = ar(O) ? su(O, au) : au),
              (z = _n("scroller-start", u, P, x, ot, 0)),
              (Re = _n("scroller-end", u, P, x, ot, 0, z)),
              (Qt = z["offset" + x.op.d2]);
            var ks = Tt(qi(P, "content") || P);
            (ve = this.markerStart = _n("start", u, ks, x, ot, Qt, 0, b)),
              (qe = this.markerEnd = _n("end", u, ks, x, ot, Qt, 0, b)),
              b && (Yr = H.quickSetter([ve, qe], x.a, Ne)),
              !R &&
                !(di.length && qi(P, "fixedMarkers") === !0) &&
                (Uf(F ? de : P),
                H.set([z, Re], { force3D: !0 }),
                (Mn = H.quickSetter(z, x.a, Ne)),
                (Vr = H.quickSetter(Re, x.a, Ne)));
          }
          if (b) {
            var J = b.vars.onUpdate,
              U = b.vars.onUpdateParams;
            b.eventCallback("onUpdate", function () {
              C.update(0, 0, 1), J && J.apply(b, U || []);
            });
          }
          if (
            ((C.previous = function () {
              return ee[ee.indexOf(C) - 1];
            }),
            (C.next = function () {
              return ee[ee.indexOf(C) + 1];
            }),
            (C.revert = function (V, j) {
              if (!j) return C.kill(!0);
              var G = V !== !1 || !C.enabled,
                K = st;
              G !== C.isReverted &&
                (G &&
                  ((si = Math.max(N(), C.scroll.rec || 0)),
                  ($ = C.progress),
                  (gr = r && r.progress())),
                ve &&
                  [ve, qe, z, Re].forEach(function (Ue) {
                    return (Ue.style.display = G ? "none" : "block");
                  }),
                G && ((st = C), C.update(G)),
                p &&
                  (!w || !C.isActive) &&
                  (G ? Jf(p, Pe, Vt) : Za(p, Pe, Kt(p), Be)),
                G || C.update(G),
                (st = K),
                (C.isReverted = G));
            }),
            (C.refresh = function (V, j, G, K) {
              if (!((st || !C.enabled) && !j)) {
                if (p && V && Ut) {
                  Xe(n, "scrollEnd", lu);
                  return;
                }
                !_t && Y && Y(C),
                  (st = C),
                  W.tween && !G && (W.tween.kill(), (W.tween = 0)),
                  ae && ae.pause(),
                  d && r && r.revert({ kill: !1 }).invalidate(),
                  C.isReverted || C.revert(!0, !0),
                  (C._subPinOffset = !1);
                var Ue = Z(),
                  le = _e(),
                  ke = b ? b.duration() : pi(P, x),
                  lt = ye <= 0.01,
                  Ae = 0,
                  Ee = K || 0,
                  me = ar(G) ? G.end : i.end,
                  ni = i.endTrigger || m,
                  Ce = ar(G)
                    ? G.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  Ht = (C.pinnedContainer =
                    i.pinnedContainer && Tt(i.pinnedContainer, C)),
                  mi = (m && Math.max(0, ee.indexOf(C))) || 0,
                  Je = mi,
                  et,
                  ut,
                  vr,
                  Pn,
                  ct,
                  Ve,
                  gi,
                  ro,
                  Fu,
                  Ls,
                  vi,
                  Is,
                  An;
                for (
                  O &&
                  ar(G) &&
                  ((Is = H.getProperty(z, x.p)), (An = H.getProperty(Re, x.p)));
                  Je-- > 0;

                )
                  (Ve = ee[Je]),
                    Ve.end || Ve.refresh(0, 1) || (st = C),
                    (gi = Ve.pin),
                    gi &&
                      (gi === m || gi === p || gi === Ht) &&
                      !Ve.isReverted &&
                      (Ls || (Ls = []), Ls.unshift(Ve), Ve.revert(!0, !0)),
                    Ve !== ee[Je] && (mi--, Je--);
                for (
                  at(Ce) && (Ce = Ce(C)),
                    Ce = Ul(Ce, "start", C),
                    Q =
                      hu(
                        Ce,
                        m,
                        Ue,
                        x,
                        N(),
                        ve,
                        z,
                        C,
                        le,
                        A,
                        R,
                        ke,
                        b,
                        C._startClamp && "_startClamp"
                      ) || (p ? -0.001 : 0),
                    at(me) && (me = me(C)),
                    $t(me) &&
                      !me.indexOf("+=") &&
                      (~me.indexOf(" ")
                        ? (me = ($t(Ce) ? Ce.split(" ")[0] : "") + me)
                        : ((Ae = yn(me.substr(2), Ue)),
                          (me = $t(Ce)
                            ? Ce
                            : (b
                                ? H.utils.mapRange(
                                    0,
                                    b.duration(),
                                    b.scrollTrigger.start,
                                    b.scrollTrigger.end,
                                    Q
                                  )
                                : Q) + Ae),
                          (ni = m))),
                    me = Ul(me, "end", C),
                    se =
                      Math.max(
                        Q,
                        hu(
                          me || (ni ? "100% 0" : ke),
                          ni,
                          Ue,
                          x,
                          N() + Ae,
                          qe,
                          Re,
                          C,
                          le,
                          A,
                          R,
                          ke,
                          b,
                          C._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Ae = 0,
                    Je = mi;
                  Je--;

                )
                  (Ve = ee[Je]),
                    (gi = Ve.pin),
                    gi &&
                      Ve.start - Ve._pinPush <= Q &&
                      !b &&
                      Ve.end > 0 &&
                      ((et =
                        Ve.end -
                        (C._startClamp ? Math.max(0, Ve.start) : Ve.start)),
                      ((gi === m && Ve.start - Ve._pinPush < Q) || gi === Ht) &&
                        isNaN(Ce) &&
                        (Ae += et * (1 - Ve.progress)),
                      gi === p && (Ee += et));
                if (
                  ((Q += Ae),
                  (se += Ae),
                  C._startClamp && (C._startClamp += Ae),
                  C._endClamp &&
                    !_t &&
                    ((C._endClamp = se || -0.001),
                    (se = Math.min(se, pi(P, x)))),
                  (ye = se - Q || ((Q -= 0.01) && 0.001)),
                  lt && ($ = H.utils.clamp(0, 1, H.utils.normalize(Q, se, si))),
                  (C._pinPush = Ee),
                  ve &&
                    Ae &&
                    ((et = {}),
                    (et[x.a] = "+=" + Ae),
                    Ht && (et[x.p] = "-=" + N()),
                    H.set([ve, qe], et)),
                  p && !(Ba && C.end >= pi(P, x)))
                )
                  (et = Kt(p)),
                    (Pn = x === $e),
                    (vr = N()),
                    (We = parseFloat(fe(x.a)) + Ee),
                    !ke &&
                      se > 1 &&
                      ((vi = (F ? ge.scrollingElement || Bt : P).style),
                      (vi = {
                        style: vi,
                        value: vi["overflow" + x.a.toUpperCase()],
                      }),
                      F &&
                        Kt(de)["overflow" + x.a.toUpperCase()] !== "scroll" &&
                        (vi.style["overflow" + x.a.toUpperCase()] = "scroll")),
                    Za(p, Pe, et),
                    (ti = xn(p)),
                    (ut = Ei(p, !0)),
                    (ro = R && Vi(P, Pn ? gt : $e)()),
                    f
                      ? ((Be = [f + x.os2, ye + Ee + Ne]),
                        (Be.t = Pe),
                        (Je = f === ze ? pn(p, x) + ye + Ee : 0),
                        Je &&
                          (Be.push(x.d, Je + Ne),
                          Pe.style.flexBasis !== "auto" &&
                            (Pe.style.flexBasis = Je + Ne)),
                        Nr(Be),
                        Ht &&
                          ee.forEach(function (zs) {
                            zs.pin === Ht &&
                              zs.vars.pinSpacing !== !1 &&
                              (zs._subPinOffset = !0);
                          }),
                        R && N(si))
                      : ((Je = pn(p, x)),
                        Je &&
                          Pe.style.flexBasis !== "auto" &&
                          (Pe.style.flexBasis = Je + Ne)),
                    R &&
                      ((ct = {
                        top: ut.top + (Pn ? vr - Q : ro) + Ne,
                        left: ut.left + (Pn ? ro : vr - Q) + Ne,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ct[or] = ct["max" + Br] = Math.ceil(ut.width) + Ne),
                      (ct[lr] = ct["max" + Ya] = Math.ceil(ut.height) + Ne),
                      (ct[jt] =
                        ct[jt + Es] =
                        ct[jt + bs] =
                        ct[jt + Ss] =
                        ct[jt + xs] =
                          "0"),
                      (ct[ze] = et[ze]),
                      (ct[ze + Es] = et[ze + Es]),
                      (ct[ze + bs] = et[ze + bs]),
                      (ct[ze + Ss] = et[ze + Ss]),
                      (ct[ze + xs] = et[ze + xs]),
                      (Zt = tp(Vt, ct, w)),
                      _t && N(0)),
                    r
                      ? ((Fu = r._initted),
                        ka(1),
                        r.render(r.duration(), !0, !0),
                        (Ti = fe(x.a) - We + ye + Ee),
                        (Ci = Math.abs(ye - Ti) > 1),
                        R && Ci && Zt.splice(Zt.length - 2, 2),
                        r.render(0, !0, !0),
                        Fu || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        ka(0))
                      : (Ti = ye),
                    vi &&
                      (vi.value
                        ? (vi.style["overflow" + x.a.toUpperCase()] = vi.value)
                        : vi.style.removeProperty("overflow-" + x.a));
                else if (m && N() && !b)
                  for (ut = m.parentNode; ut && ut !== de; )
                    ut._pinOffset &&
                      ((Q -= ut._pinOffset), (se -= ut._pinOffset)),
                      (ut = ut.parentNode);
                Ls &&
                  Ls.forEach(function (zs) {
                    return zs.revert(!1, !0);
                  }),
                  (C.start = Q),
                  (C.end = se),
                  (be = xe = _t ? si : N()),
                  !b && !_t && (be < si && N(si), (C.scroll.rec = 0)),
                  C.revert(!1, !0),
                  (B = nt()),
                  ri && ((re = -1), ri.restart(!0)),
                  (st = 0),
                  r &&
                    k &&
                    (r._initted || gr) &&
                    r.progress() !== gr &&
                    r.progress(gr || 0, !0).render(r.time(), !0, !0),
                  (lt || $ !== C.progress || b || d || (r && !r._initted)) &&
                    (r &&
                      !k &&
                      r.totalProgress(
                        b && Q < -0.001 && !$ ? H.utils.normalize(Q, se, 0) : $,
                        !0
                      ),
                    (C.progress = lt || (be - Q) / ye === $ ? 0 : $)),
                  p && f && (Pe._pinOffset = Math.round(C.progress * Ti)),
                  ae && ae.invalidate(),
                  isNaN(Is) ||
                    ((Is -= H.getProperty(z, x.p)),
                    (An -= H.getProperty(Re, x.p)),
                    Sn(z, x, Is),
                    Sn(ve, x, Is - (K || 0)),
                    Sn(Re, x, An),
                    Sn(qe, x, An - (K || 0))),
                  lt && !_t && C.update(),
                  c && !_t && !qt && ((qt = !0), c(C), (qt = !1));
              }
            }),
            (C.getVelocity = function () {
              return ((N() - xe) / (nt() - vs)) * 1e3 || 0;
            }),
            (C.endAnimation = function () {
              ws(C.callbackAnimation),
                r &&
                  (ae
                    ? ae.progress(1)
                    : r.paused()
                    ? k || ws(r, C.direction < 0, 1)
                    : ws(r, r.reversed()));
            }),
            (C.labelToScroll = function (V) {
              return (
                (r &&
                  r.labels &&
                  (Q || C.refresh() || Q) +
                    (r.labels[V] / r.duration()) * ye) ||
                0
              );
            }),
            (C.getTrailing = function (V) {
              var j = ee.indexOf(C),
                G =
                  C.direction > 0 ? ee.slice(0, j).reverse() : ee.slice(j + 1);
              return (
                $t(V)
                  ? G.filter(function (K) {
                      return K.vars.preventOverlaps === V;
                    })
                  : G
              ).filter(function (K) {
                return C.direction > 0 ? K.end <= Q : K.start >= se;
              });
            }),
            (C.update = function (V, j, G) {
              if (!(b && !G && !V)) {
                var K = _t === !0 ? si : C.scroll(),
                  Ue = V ? 0 : (K - Q) / ye,
                  le = Ue < 0 ? 0 : Ue > 1 ? 1 : Ue || 0,
                  ke = C.progress,
                  lt,
                  Ae,
                  Ee,
                  me,
                  ni,
                  Ce,
                  Ht,
                  mi;
                if (
                  (j &&
                    ((xe = be),
                    (be = b ? N() : K),
                    D && ((hr = Yi), (Yi = r && !k ? r.totalProgress() : le))),
                  g &&
                    p &&
                    !st &&
                    !dn &&
                    Ut &&
                    (!le && Q < K + ((K - xe) / (nt() - vs)) * g
                      ? (le = 1e-4)
                      : le === 1 &&
                        se > K + ((K - xe) / (nt() - vs)) * g &&
                        (le = 0.9999)),
                  le !== ke && C.enabled)
                ) {
                  if (
                    ((lt = C.isActive = !!le && le < 1),
                    (Ae = !!ke && ke < 1),
                    (Ce = lt !== Ae),
                    (ni = Ce || !!le != !!ke),
                    (C.direction = le > ke ? 1 : -1),
                    (C.progress = le),
                    ni &&
                      !st &&
                      ((Ee = le && !ke ? 0 : le === 1 ? 1 : ke === 1 ? 2 : 3),
                      k &&
                        ((me =
                          (!Ce && M[Ee + 1] !== "none" && M[Ee + 1]) || M[Ee]),
                        (mi =
                          r &&
                          (me === "complete" || me === "reset" || me in r)))),
                    E &&
                      (Ce || mi) &&
                      (mi || h || !r) &&
                      (at(E)
                        ? E(C)
                        : C.getTrailing(E).forEach(function (vr) {
                            return vr.endAnimation();
                          })),
                    k ||
                      (ae && !st && !dn
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
                        : r && r.totalProgress(le, !!(st && (B || V)))),
                    p)
                  ) {
                    if ((V && f && (Pe.style[f + x.os2] = Os), !R))
                      Ct(_s(We + Ti * le));
                    else if (ni) {
                      if (
                        ((Ht =
                          !V && le > ke && se + 1 > K && K + 1 >= pi(P, x)),
                        w)
                      )
                        if (!V && (lt || Ht)) {
                          var Je = Ei(p, !0),
                            et = K - Q;
                          mu(
                            p,
                            de,
                            Je.top + (x === $e ? et : 0) + Ne,
                            Je.left + (x === $e ? 0 : et) + Ne
                          );
                        } else mu(p, Pe);
                      Nr(lt || Ht ? Zt : ti),
                        (Ci && le < 1 && lt) ||
                          Ct(We + (le === 1 && !Ht ? Ti : 0));
                    }
                  }
                  D && !W.tween && !st && !dn && ri.restart(!0),
                    o &&
                      (Ce || (v && le && (le < 1 || !$a))) &&
                      ms(o.targets).forEach(function (vr) {
                        return vr.classList[lt || v ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !k && !V && a(C),
                    ni && !st
                      ? (k &&
                          (mi &&
                            (me === "complete"
                              ? r.pause().totalProgress(1)
                              : me === "reset"
                              ? r.restart(!0).pause()
                              : me === "restart"
                              ? r.restart(!0)
                              : r[me]()),
                          a && a(C)),
                        (Ce || !$a) &&
                          (l && Ce && qa(C, l),
                          I[Ee] && qa(C, I[Ee]),
                          v && (le === 1 ? C.kill(!1, 1) : (I[Ee] = 0)),
                          Ce ||
                            ((Ee = le === 1 ? 1 : 3), I[Ee] && qa(C, I[Ee]))),
                        T &&
                          !lt &&
                          Math.abs(C.getVelocity()) > (Ds(T) ? T : 2500) &&
                          (ws(C.callbackAnimation),
                          ae
                            ? ae.progress(1)
                            : ws(r, me === "reverse" ? 1 : !le, 1)))
                      : k && a && !st && a(C);
                }
                if (Vr) {
                  var ut = b ? (K / b.duration()) * (b._caScrollDist || 0) : K;
                  Mn(ut + (z._isFlipped ? 1 : 0)), Vr(ut);
                }
                Yr && Yr((-K / b.duration()) * (b._caScrollDist || 0));
              }
            }),
            (C.enable = function (V, j) {
              C.enabled ||
                ((C.enabled = !0),
                Xe(P, "resize", Cs),
                F || Xe(P, "scroll", $r),
                Y && Xe(n, "refreshInit", Y),
                V !== !1 && ((C.progress = $ = 0), (be = xe = re = N())),
                j !== !1 && C.refresh());
            }),
            (C.getTween = function (V) {
              return V && W ? W.tween : ae;
            }),
            (C.setPositions = function (V, j, G, K) {
              if (b) {
                var Ue = b.scrollTrigger,
                  le = b.duration(),
                  ke = Ue.end - Ue.start;
                (V = Ue.start + (ke * V) / le), (j = Ue.start + (ke * j) / le);
              }
              C.refresh(
                !1,
                !1,
                {
                  start: jl(V, G && !!C._startClamp),
                  end: jl(j, G && !!C._endClamp),
                },
                K
              ),
                C.update();
            }),
            (C.adjustPinSpacing = function (V) {
              if (Be && V) {
                var j = Be.indexOf(x.d) + 1;
                (Be[j] = parseFloat(Be[j]) + V + Ne),
                  (Be[1] = parseFloat(Be[1]) + V + Ne),
                  Nr(Be);
              }
            }),
            (C.disable = function (V, j) {
              if (
                C.enabled &&
                (V !== !1 && C.revert(!0, !0),
                (C.enabled = C.isActive = !1),
                j || (ae && ae.pause()),
                (si = 0),
                ue && (ue.uncache = 1),
                Y && Ge(n, "refreshInit", Y),
                ri && (ri.pause(), W.tween && W.tween.kill() && (W.tween = 0)),
                !F)
              ) {
                for (var G = ee.length; G--; )
                  if (ee[G].scroller === P && ee[G] !== C) return;
                Ge(P, "resize", Cs), F || Ge(P, "scroll", $r);
              }
            }),
            (C.kill = function (V, j) {
              C.disable(V, j), ae && !j && ae.kill(), u && delete Ga[u];
              var G = ee.indexOf(C);
              G >= 0 && ee.splice(G, 1),
                G === vt && wn > 0 && vt--,
                (G = 0),
                ee.forEach(function (K) {
                  return K.scroller === C.scroller && (G = 1);
                }),
                G || _t || (C.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  V && r.revert({ kill: !1 }),
                  j || r.kill()),
                ve &&
                  [ve, qe, z, Re].forEach(function (K) {
                    return K.parentNode && K.parentNode.removeChild(K);
                  }),
                Ms === C && (Ms = 0),
                p &&
                  (ue && (ue.uncache = 1),
                  (G = 0),
                  ee.forEach(function (K) {
                    return K.pin === p && G++;
                  }),
                  G || (ue.spacer = 0)),
                i.onKill && i.onKill(C);
            }),
            ee.push(C),
            C.enable(!1, !1),
            Mi && Mi(C),
            r && r.add && !ye)
          ) {
            var ce = C.update;
            (C.update = function () {
              (C.update = ce), te.cache++, Q || se || C.refresh();
            }),
              H.delayedCall(0.01, C.update),
              (ye = 0.01),
              (Q = se = 0);
          } else C.refresh();
          p && Qf();
        }),
        (n.register = function (i) {
          return (
            Lr ||
              ((H = i || Jl()),
              Ql() && window.document && n.enable(),
              (Lr = ys)),
            Lr
          );
        }),
        (n.defaults = function (i) {
          if (i) for (var r in i) gn[r] = i[r];
          return gn;
        }),
        (n.disable = function (i, r) {
          (ys = 0),
            ee.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            Ge(ie, "wheel", $r),
            Ge(ge, "scroll", $r),
            clearInterval(ln),
            Ge(ge, "touchcancel", fi),
            Ge(de, "touchstart", fi),
            hn(Ge, ge, "pointerdown,touchstart,mousedown", Kl),
            hn(Ge, ge, "pointerup,touchend,mouseup", Zl),
            on.kill(),
            fn(Ge);
          for (var s = 0; s < te.length; s += 3)
            mn(Ge, te[s], te[s + 1]), mn(Ge, te[s], te[s + 2]);
        }),
        (n.enable = function () {
          if (
            ((ie = window),
            (ge = document),
            (Bt = ge.documentElement),
            (de = ge.body),
            H &&
              ((ms = H.utils.toArray),
              (gs = H.utils.clamp),
              (Ia = H.core.context || fi),
              (ka = H.core.suppressOverwrites || fi),
              (za = ie.history.scrollRestoration || "auto"),
              (ja = ie.pageYOffset || 0),
              H.core.globals("ScrollTrigger", n),
              de))
          ) {
            (ys = 1),
              (zr = document.createElement("div")),
              (zr.style.height = "100vh"),
              (zr.style.position = "absolute"),
              fu(),
              Xf(),
              Oe.register(H),
              (n.isTouch = Oe.isTouch),
              (Hi =
                Oe.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (La = Oe.isTouch === 1),
              Xe(ie, "wheel", $r),
              (Fa = [ie, ge, Bt, de]),
              H.matchMedia
                ? ((n.matchMedia = function (l) {
                    var c = H.matchMedia(),
                      h;
                    for (h in l) c.add(h, l[h]);
                    return c;
                  }),
                  H.addEventListener("matchMediaInit", function () {
                    return Ua();
                  }),
                  H.addEventListener("matchMediaRevert", function () {
                    return uu();
                  }),
                  H.addEventListener("matchMedia", function () {
                    fr(0, 1), cr("matchMedia");
                  }),
                  H.matchMedia().add("(orientation: portrait)", function () {
                    return Wa(), Wa;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Wa(),
              Xe(ge, "scroll", $r);
            var i = de.hasAttribute("style"),
              r = de.style,
              s = r.borderTopStyle,
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
                o = Ei(de),
                $e.m = Math.round(o.top + $e.sc()) || 0,
                gt.m = Math.round(o.left + gt.sc()) || 0,
                s
                  ? (r.borderTopStyle = s)
                  : r.removeProperty("border-top-style"),
                i ||
                  (de.setAttribute("style", ""), de.removeAttribute("style")),
                ln = setInterval(ou, 250),
                H.delayedCall(0.5, function () {
                  return (dn = 0);
                }),
                Xe(ge, "touchcancel", fi),
                Xe(de, "touchstart", fi),
                hn(Xe, ge, "pointerdown,touchstart,mousedown", Kl),
                hn(Xe, ge, "pointerup,touchend,mouseup", Zl),
                Oa = H.utils.checkPrefix("transform"),
                bn.push(Oa),
                Lr = nt(),
                on = H.delayedCall(0.2, fr).pause(),
                Ir = [
                  ge,
                  "visibilitychange",
                  function () {
                    var l = ie.innerWidth,
                      c = ie.innerHeight;
                    ge.hidden
                      ? ((Vl = l), (Hl = c))
                      : (Vl !== l || Hl !== c) && Cs();
                  },
                  ge,
                  "DOMContentLoaded",
                  fr,
                  ie,
                  "load",
                  fr,
                  ie,
                  "resize",
                  Cs,
                ],
                fn(Xe),
                ee.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                u = 0;
              u < te.length;
              u += 3
            )
              mn(Ge, te[u], te[u + 1]), mn(Ge, te[u], te[u + 2]);
          }
        }),
        (n.config = function (i) {
          "limitCallbacks" in i && ($a = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(ln)) || ((ln = r) && setInterval(ou, r)),
            "ignoreMobileResize" in i &&
              (La = n.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (fn(Ge) || fn(Xe, i.autoRefreshEvents || "none"),
              (Xl = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (n.scrollerProxy = function (i, r) {
          var s = Tt(i),
            a = te.indexOf(s),
            o = nr(s);
          ~a && te.splice(a, o ? 6 : 2),
            r && (o ? di.unshift(ie, r, de, r, Bt, r) : di.unshift(s, r));
        }),
        (n.clearMatchMedia = function (i) {
          ee.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (i, r, s) {
          var a = ($t(i) ? Tt(i) : i).getBoundingClientRect(),
            o = a[s ? or : lr] * r || 0;
          return s
            ? a.right - o > 0 && a.left + o < ie.innerWidth
            : a.bottom - o > 0 && a.top + o < ie.innerHeight;
        }),
        (n.positionInViewport = function (i, r, s) {
          $t(i) && (i = Tt(i));
          var a = i.getBoundingClientRect(),
            o = a[s ? or : lr],
            u =
              r == null
                ? o / 2
                : r in vn
                ? vn[r] * o
                : ~r.indexOf("%")
                ? (parseFloat(r) * o) / 100
                : parseFloat(r) || 0;
          return s
            ? (a.left + u) / ie.innerWidth
            : (a.top + u) / ie.innerHeight;
        }),
        (n.killAll = function (i) {
          if (
            (ee.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            i !== !0)
          ) {
            var r = ur.killAll || [];
            (ur = {}),
              r.forEach(function (s) {
                return s();
              });
          }
        }),
        n
      );
    })();
  (X.version = "3.12.7"),
    (X.saveStyles = function (n) {
      return n
        ? ms(n).forEach(function (e) {
            if (e && e.style) {
              var t = Nt.indexOf(e);
              t >= 0 && Nt.splice(t, 5),
                Nt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  H.core.getCache(e),
                  Ia()
                );
            }
          })
        : Nt;
    }),
    (X.revert = function (n, e) {
      return Ua(!n, e);
    }),
    (X.create = function (n, e) {
      return new X(n, e);
    }),
    (X.refresh = function (n) {
      return n ? Cs(!0) : (Lr || X.register()) && fr(!0);
    }),
    (X.update = function (n) {
      return ++te.cache && Si(n === !0 ? 2 : 0);
    }),
    (X.clearScrollMemory = cu),
    (X.maxScroll = function (n, e) {
      return pi(n, e ? gt : $e);
    }),
    (X.getScrollFunc = function (n, e) {
      return Vi(Tt(n), e ? gt : $e);
    }),
    (X.getById = function (n) {
      return Ga[n];
    }),
    (X.getAll = function () {
      return ee.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
      });
    }),
    (X.isScrolling = function () {
      return !!Ut;
    }),
    (X.snapDirectional = Xa),
    (X.addEventListener = function (n, e) {
      var t = ur[n] || (ur[n] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (X.removeEventListener = function (n, e) {
      var t = ur[n],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (X.batch = function (n, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        s = e.batchMax || 1e9,
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
              s <= h.length && p.progress(1);
          };
        },
        o;
      for (o in e)
        i[o] =
          o.substr(0, 2) === "on" && at(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        at(s) &&
          ((s = s()),
          Xe(X, "refresh", function () {
            return (s = e.batchMax());
          })),
        ms(n).forEach(function (u) {
          var l = {};
          for (o in i) l[o] = i[o];
          (l.trigger = u), t.push(X.create(l));
        }),
        t
      );
    });
  var yu = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    Qa = function n(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Oe.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Bt && n(de, t);
    },
    Tn = { auto: 1, scroll: 1 },
    rp = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = s._gsap || H.core.getCache(s),
        o = nt(),
        u;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== de &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(Tn[(u = Kt(s)).overflowY] || Tn[u.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== i &&
          !nr(s) &&
          (Tn[(u = Kt(s)).overflowY] || Tn[u.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    _u = function (e, t, i, r) {
      return Oe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && rp),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Xe(ge, Oe.eventTypes[0], wu, !1, !0);
        },
        onDisable: function () {
          return Ge(ge, Oe.eventTypes[0], wu, !0);
        },
      });
    },
    sp = /(input|label|select|textarea)/i,
    Du,
    wu = function (e) {
      var t = sp.test(e.target.tagName);
      (t || Du) && ((e._gsapAllow = !0), (Du = t));
    },
    np = function (e) {
      ar(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t = e,
        i = t.normalizeScrollX,
        r = t.momentum,
        s = t.allowNestedScroll,
        a = t.onRelease,
        o,
        u,
        l = Tt(e.target) || Bt,
        c = H.core.globals().ScrollSmoother,
        h = c && c.get(),
        m =
          Hi &&
          ((e.content && Tt(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = Vi(l, $e),
        f = Vi(l, gt),
        d = 1,
        g =
          (Oe.isTouch && ie.visualViewport
            ? ie.visualViewport.scale * ie.visualViewport.width
            : ie.outerWidth) / ie.innerWidth,
        _ = 0,
        y = at(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        v,
        D,
        w = _u(l, e.type, !0, s),
        S = function () {
          return (D = !1);
        },
        b = fi,
        T = fi,
        E = function () {
          (u = pi(l, $e)),
            (T = gs(Hi ? 1 : 0, u)),
            i && (b = gs(0, pi(l, gt))),
            (v = dr);
        },
        x = function () {
          (m._gsap.y = _s(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        k = function () {
          if (D) {
            requestAnimationFrame(S);
            var O = _s(o.deltaY / 2),
              A = T(p.v - O);
            if (m && A !== p.v + p.offset) {
              p.offset = A - p.v;
              var C = _s((parseFloat(m && m._gsap.y) || 0) - p.offset);
              (m.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                C +
                ", 0, 1)"),
                (m._gsap.y = C + "px"),
                (p.cacheID = te.cache),
                Si();
            }
            return !0;
          }
          p.offset && x(), (D = !0);
        },
        P,
        L,
        F,
        R,
        I = function () {
          E(),
            P.isActive() &&
              P.vars.scrollY > u &&
              (p() > u ? P.progress(1) && p(u) : P.resetTo("scrollY", u));
        };
      return (
        m && H.set(m, { y: "+=0" }),
        (e.ignoreCheck = function (M) {
          return (
            (Hi && M.type === "touchmove" && k()) ||
            (d > 1.05 && M.type !== "touchstart") ||
            o.isGesturing ||
            (M.touches && M.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          D = !1;
          var M = d;
          (d = _s(((ie.visualViewport && ie.visualViewport.scale) || 1) / g)),
            P.pause(),
            M !== d && Qa(l, d > 1.01 ? !0 : i ? !1 : "x"),
            (L = f()),
            (F = p()),
            E(),
            (v = dr);
        }),
        (e.onRelease = e.onGestureStart =
          function (M, O) {
            if ((p.offset && x(), !O)) R.restart(!0);
            else {
              te.cache++;
              var A = y(),
                C,
                Y;
              i &&
                ((C = f()),
                (Y = C + (A * 0.05 * -M.velocityX) / 0.227),
                (A *= yu(f, C, Y, pi(l, gt))),
                (P.vars.scrollX = b(Y))),
                (C = p()),
                (Y = C + (A * 0.05 * -M.velocityY) / 0.227),
                (A *= yu(p, C, Y, pi(l, $e))),
                (P.vars.scrollY = T(Y)),
                P.invalidate().duration(A).play(0.01),
                ((Hi && P.vars.scrollY >= u) || C >= u - 1) &&
                  H.to({}, { onUpdate: I, duration: A });
            }
            a && a(M);
          }),
        (e.onWheel = function () {
          P._ts && P.pause(), nt() - _ > 1e3 && ((v = 0), (_ = nt()));
        }),
        (e.onChange = function (M, O, A, C, Y) {
          if (
            (dr !== v && E(),
            O && i && f(b(C[2] === O ? L + (M.startX - M.x) : f() + O - C[1])),
            A)
          ) {
            p.offset && x();
            var Z = Y[2] === A,
              _e = Z ? F + M.startY - M.y : p() + A - Y[1],
              re = T(_e);
            Z && _e !== re && (F += re - _e), p(re);
          }
          (A || O) && Si();
        }),
        (e.onEnable = function () {
          Qa(l, i ? !1 : "x"),
            X.addEventListener("refresh", I),
            Xe(ie, "resize", I),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = f.smooth = !1)),
            w.enable();
        }),
        (e.onDisable = function () {
          Qa(l, !0),
            Ge(ie, "resize", I),
            X.removeEventListener("refresh", I),
            w.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Oe(e)),
        (o.iOS = Hi),
        Hi && !p() && p(1),
        Hi && H.ticker.add(fi),
        (R = o._dc),
        (P = H.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: gu(p, p(), function () {
              return P.pause();
            }),
          },
          onUpdate: Si,
          onComplete: R.vars.onComplete,
        })),
        o
      );
    };
  (X.sort = function (n) {
    if (at(n)) return ee.sort(n);
    var e = ie.pageYOffset || 0;
    return (
      X.getAll().forEach(function (t) {
        return (t._sortY = t.trigger
          ? e + t.trigger.getBoundingClientRect().top
          : t.start + ie.innerHeight);
      }),
      ee.sort(
        n ||
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
    (X.observe = function (n) {
      return new Oe(n);
    }),
    (X.normalizeScroll = function (n) {
      if (typeof n == "undefined") return yt;
      if (n === !0 && yt) return yt.enable();
      if (n === !1) {
        yt && yt.kill(), (yt = n);
        return;
      }
      var e = n instanceof Oe ? n : np(n);
      return (
        yt && yt.target === e.target && yt.kill(), nr(e.target) && (yt = e), e
      );
    }),
    (X.core = {
      _getVelocityProp: Aa,
      _inputObserver: _u,
      _scrollers: te,
      _proxies: di,
      bridge: {
        ss: function () {
          Ut || cr("scrollStart"), (Ut = nt());
        },
        ref: function () {
          return st;
        },
      },
    }),
    Jl() && H.registerPlugin(X),
    q.registerPlugin(X);
  class pr {
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
            s = e.querySelectorAll("[marquee-element='triggerclick']");
          let a = pr.attr(100, e.getAttribute("marquee-speed")),
            o = pr.attr(!1, e.getAttribute("marquee-vertical")),
            u = pr.attr(!1, e.getAttribute("marquee-reverse")),
            l = pr.attr(!1, e.getAttribute("marquee-scrolldirection")),
            c = pr.attr(!1, e.getAttribute("marquee-scrollscrub")),
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
                s.forEach((D) => D.setAttribute("marquee-status", "paused")))
              : (v.fromTo(y, { value: 0 }, { value: m, duration: 0.5 }),
                s.forEach((D) => D.setAttribute("marquee-status", "playing")));
          }
          window.matchMedia("(pointer: fine)").matches &&
            r.forEach((_) => {
              _.addEventListener("mouseenter", () => g(!0)),
                _.addEventListener("mouseleave", () => g(!1));
            }),
            s.forEach((_) => {
              _.addEventListener("click", function () {
                this.getAttribute("marquee-status") === "paused"
                  ? g(!1)
                  : g(!0);
              });
            });
        });
    }
  }
  function Ps() {
    new pr();
  }
  class ap {
    constructor() {
      this.swiper = new Dt("[swiper='review-slider']", {
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
  function As() {
    new ap();
  }
  q.registerPlugin(X);
  const op = () => {
      const n = {
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
        s = r.querySelector("[service-scroll='svg-line']"),
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
        S = document.querySelector("[visual-wrap='interactive']"),
        b = document.querySelectorAll("[service-list-item='wrapper']"),
        T = document.querySelectorAll("[service-list-item='3d']"),
        E = document.querySelectorAll("[service-list-icon='3d']");
      document.querySelectorAll("[service-list-text='3d']");
      const x = document.querySelectorAll("[service-list-item='2d']"),
        k = document.querySelectorAll("[service-list-icon='2d']");
      document.querySelectorAll("[service-list-text='2d']");
      const P = document.querySelectorAll("[service-list-item='interactive']"),
        L = document.querySelectorAll("[service-list-icon='interactive']");
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
        s,
        { rotate: 145, scale: 1.8 },
        { rotate: 0, scale: 1.2, duration: 1.8, ease: "power2.out" },
        `${n.SVG_LINE_START}%`
      ),
        F.to(
          l,
          { opacity: 0, y: -20, duration: 1, ease: "power2.in" },
          `${n.INTRO_OUT}`
        ),
        F.to(
          c,
          { opacity: 0, y: -20, duration: 1.8, ease: "power2.in" },
          `${n.INTRO_OUT}`
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
          `${n.SVG_PATH_IN}`
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
          `${n.SVG_PATH_IN + 0.2}`
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
          `${n.SVG_SM_IN}`
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
          `${n.SERVICE_3D_IN}`
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
          `${n.SERVICE_3D_IN}`
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
          `${n.SERVICE_3D_IN}`
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
          `${n.SERVICE_3D_IN}`
        ),
        F.fromTo(
          T,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${n.SERVICE_3D_IN}`
        ),
        F.fromTo(
          E,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${n.SERVICE_3D_IN}`
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
          `${n.SERVICE_3D_OUT}`
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
          `${n.SERVICE_3D_OUT}`
        ),
        F.to(
          T,
          { opacity: 0.5, duration: 0.8, ease: "power2.in" },
          `${n.SERVICE_3D_OUT}`
        ),
        F.to(
          E,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${n.SERVICE_3D_OUT}`
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
          `${n.SERVICE_2D_IN}`
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
          `${n.SERVICE_2D_IN}`
        ),
        F.fromTo(
          x,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${n.SERVICE_2D_IN}`
        ),
        F.fromTo(
          k,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${n.SERVICE_2D_IN}`
        ),
        F.to(
          s,
          { rotate: -90, duration: 1.8, ease: "power2.out" },
          `${n.SERVICE_2D_IN}`
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
          `${n.SERVICE_2D_OUT}`
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
          `${n.SERVICE_2D_OUT}`
        ),
        F.to(
          x,
          { opacity: 0.5, duration: 0.8, ease: "power2.in" },
          `${n.SERVICE_2D_OUT}`
        ),
        F.to(
          k,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${n.SERVICE_2D_OUT}`
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
          `${n.SERVICE_INTERACTIVE_IN}`
        ),
        F.fromTo(
          S,
          { opacity: 0, scale: 1.1, filter: "blur(30px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
          },
          `${n.SERVICE_INTERACTIVE_IN}`
        ),
        F.fromTo(
          P,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${n.SERVICE_INTERACTIVE_LIST}`
        ),
        F.fromTo(
          L,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${n.SERVICE_INTERACTIVE_LIST}`
        );
    },
    lp = () => {
      op();
    },
    up = () => {
      lp();
    };
  q.registerPlugin(X);
  let cp;
  const Ja = () => cp;
  q.registerPlugin(X);
  const dp = () => {
      const n = document.querySelectorAll('[hero-parallax="visual"]'),
        e = document.querySelector('[hero-parallax="header"]');
      if (
        !(!n.length && !e) &&
        (X.defaults({ scroller: void 0 }),
        n.forEach((t) => {
          const i = parseFloat(t.getAttribute("parallax-speed")) || 0.6;
          q.fromTo(
            t,
            { yPercent: 0, scale: 1, filter: "blur(0px)" },
            {
              yPercent: -i * 100,
              scale: 1.2,
              filter: "blur(5px)",
              ease: "none",
              scrollTrigger: {
                trigger: t.parentElement,
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
        const t = parseFloat(e.getAttribute("parallax-speed")) || 3.5;
        q.fromTo(
          e,
          { yPercent: 0, scale: 1 },
          {
            yPercent: -t * 100,
            scale: 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: n[0].parentElement,
              start: "top top",
              end: "bottom top",
              scrub: !0,
              invalidateOnRefresh: !0,
            },
          }
        );
      }
    },
    fp = () => {
      dp();
    },
    pp = () => {
      const n = document.querySelectorAll("[video-modal-trigger]");
      let e = null;
      const t = (i, r) => {
        const s = {
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
        q.to(i, s[r]);
      };
      n.forEach((i) => {
        const r = i.getAttribute("video-modal-trigger"),
          s = document.querySelector(`[video-modal-target="${r}"]`),
          a = document.querySelector(`[video-modal-close="${r}"]`);
        if (!s || !a) {
          console.error(`Missing target or close element for modal ID: ${r}`);
          return;
        }
        q.set(s, {
          clipPath: "inset(50% round 16px)",
          pointerEvents: "none",
          scale: 1.2,
          filter: "blur(5px)",
        });
        const o = () => {
            e && e !== s && t(e, "close"), t(s, "open"), (e = s);
          },
          u = () => {
            t(s, "close"), e === s && (e = null);
          };
        i.addEventListener("click", () => {
          const l = Ja();
          e === s ? (u(), l.start()) : (o(), l.stop());
        }),
          a.addEventListener("click", () => {
            e === s && (u(), Ja().start());
          });
      }),
        document.addEventListener("keydown", (i) => {
          i.key === "Escape" && e && (t(e, "close"), Ja().start(), (e = null));
        });
    },
    hp = () => {
      pp();
    };
  /*!
   * strings: 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var mp =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function bu(n) {
    var e = n.nodeType,
      t = "";
    if (e === 1 || e === 9 || e === 11) {
      if (typeof n.textContent == "string") return n.textContent;
      for (n = n.firstChild; n; n = n.nextSibling) t += bu(n);
    } else if (e === 3 || e === 4) return n.nodeValue;
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
   */ var qr,
    eo,
    xu,
    Fs,
    Eu,
    Cn,
    gp = /(?:\r|\n|\t\t)/g,
    vp = /(?:\s\s+)/g,
    yp = " ",
    Su = function (e) {
      (qr = document),
        (eo = window),
        (Fs =
          Fs ||
          e ||
          eo.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")),
        Fs &&
          ((Cn = Fs.utils.toArray),
          (Eu = Fs.core.context || function () {}),
          (xu = 1));
    },
    Tu = function (e) {
      return eo.getComputedStyle(e);
    },
    to = function (e) {
      return e.position === "absolute" || e.absolute === !0;
    },
    _p = function (e, t) {
      for (var i = t.length, r; --i > -1; )
        if (((r = t[i]), e.substr(0, r.length) === r)) return r.length;
    },
    Dp = " style='position:relative;display:inline-block;'",
    Cu = function (e, t) {
      e === void 0 && (e = "");
      var i = ~e.indexOf("++"),
        r = 1;
      return (
        i && (e = e.split("++").join("")),
        function () {
          return (
            "<" + t + Dp + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
          );
        }
      );
    },
    Mu = function n(e, t, i) {
      var r = e.nodeType;
      if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling) n(e, t, i);
      else (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(t).join(i));
    },
    io = function (e, t) {
      for (var i = t.length; --i > -1; ) e.push(t[i]);
    },
    Pu = function (e, t, i) {
      for (var r; e && e !== t; ) {
        if (((r = e._next || e.nextSibling), r))
          return r.textContent.charAt(0) === i;
        e = e.parentNode || e._parent;
      }
    },
    wp = function n(e) {
      var t = Cn(e.childNodes),
        i = t.length,
        r,
        s;
      for (r = 0; r < i; r++)
        (s = t[r]),
          s._isSplit
            ? n(s)
            : r && s.previousSibling && s.previousSibling.nodeType === 3
            ? ((s.previousSibling.nodeValue +=
                s.nodeType === 3 ? s.nodeValue : s.firstChild.nodeValue),
              e.removeChild(s))
            : s.nodeType !== 3 &&
              (e.insertBefore(s.firstChild, s), e.removeChild(s));
    },
    hi = function (e, t) {
      return parseFloat(t[e]) || 0;
    },
    bp = function (e, t, i, r, s, a, o) {
      var u = Tu(e),
        l = hi("paddingLeft", u),
        c = -999,
        h = hi("borderBottomWidth", u) + hi("borderTopWidth", u),
        m = hi("borderLeftWidth", u) + hi("borderRightWidth", u),
        p = hi("paddingTop", u) + hi("paddingBottom", u),
        f = hi("paddingLeft", u) + hi("paddingRight", u),
        d = hi("fontSize", u) * (t.lineThreshold || 0.2),
        g = u.textAlign,
        _ = [],
        y = [],
        v = [],
        D = t.wordDelimiter || " ",
        w = t.tag ? t.tag : t.span ? "span" : "div",
        S = t.type || t.split || "chars,words,lines",
        b = s && ~S.indexOf("lines") ? [] : null,
        T = ~S.indexOf("words"),
        E = ~S.indexOf("chars"),
        x = to(t),
        k = t.linesClass,
        P = ~(k || "").indexOf("++"),
        L = [],
        F = u.display === "flex",
        R = e.style.display,
        I,
        M,
        O,
        A,
        C,
        Y,
        Z,
        _e,
        re,
        B,
        $,
        N;
      for (
        P && (k = k.split("++").join("")),
          F && (e.style.display = "block"),
          M = e.getElementsByTagName("*"),
          O = M.length,
          C = [],
          I = 0;
        I < O;
        I++
      )
        C[I] = M[I];
      if (b || x)
        for (I = 0; I < O; I++)
          (A = C[I]),
            (Y = A.parentNode === e),
            (Y || x || (E && !T)) &&
              ((N = A.offsetTop),
              b &&
                Y &&
                Math.abs(N - c) > d &&
                (A.nodeName !== "BR" || I === 0) &&
                ((Z = []), b.push(Z), (c = N)),
              x &&
                ((A._x = A.offsetLeft),
                (A._y = N),
                (A._w = A.offsetWidth),
                (A._h = A.offsetHeight)),
              b &&
                (((A._isSplit && Y) ||
                  (!E && Y) ||
                  (T && Y) ||
                  (!T &&
                    A.parentNode.parentNode === e &&
                    !A.parentNode._isSplit)) &&
                  (Z.push(A), (A._x -= l), Pu(A, e, D) && (A._wordEnd = !0)),
                A.nodeName === "BR" &&
                  ((A.nextSibling && A.nextSibling.nodeName === "BR") ||
                    I === 0) &&
                  b.push([])));
      for (I = 0; I < O; I++) {
        if (((A = C[I]), (Y = A.parentNode === e), A.nodeName === "BR")) {
          b || x
            ? (A.parentNode && A.parentNode.removeChild(A),
              C.splice(I--, 1),
              O--)
            : T || e.appendChild(A);
          continue;
        }
        if (
          (x &&
            ((re = A.style),
            !T && !Y && ((A._x += A.parentNode._x), (A._y += A.parentNode._y)),
            (re.left = A._x + "px"),
            (re.top = A._y + "px"),
            (re.position = "absolute"),
            (re.display = "block"),
            (re.width = A._w + 1 + "px"),
            (re.height = A._h + "px")),
          !T && E)
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
                  L.push(A.nextSibling),
                (A._next =
                  A.nextSibling && A.nextSibling._isFirst
                    ? null
                    : A.nextSibling),
                A.parentNode.removeChild(A),
                C.splice(I--, 1),
                O--)
              : Y ||
                ((N = !A.nextSibling && Pu(A.parentNode, e, D)),
                A.parentNode._parent && A.parentNode._parent.appendChild(A),
                N && A.parentNode.appendChild(qr.createTextNode(" ")),
                w === "span" && (A.style.display = "inline"),
                _.push(A));
        else
          A.parentNode._isSplit && !A._isSplit && A.innerHTML !== ""
            ? y.push(A)
            : E &&
              !A._isSplit &&
              (w === "span" && (A.style.display = "inline"), _.push(A));
      }
      for (I = L.length; --I > -1; ) L[I].parentNode.removeChild(L[I]);
      if (b) {
        for (
          x &&
            ((B = qr.createElement(w)),
            e.appendChild(B),
            ($ = B.offsetWidth + "px"),
            (N = B.offsetParent === e ? 0 : e.offsetLeft),
            e.removeChild(B)),
            re = e.style.cssText,
            e.style.cssText = "display:none;";
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (_e = D === " " && (!x || (!T && !E)), I = 0; I < b.length; I++) {
          for (
            Z = b[I],
              B = qr.createElement(w),
              B.style.cssText =
                "display:block;text-align:" +
                g +
                ";position:" +
                (x ? "absolute;" : "relative;"),
              k && (B.className = k + (P ? I + 1 : "")),
              v.push(B),
              O = Z.length,
              M = 0;
            M < O;
            M++
          )
            Z[M].nodeName !== "BR" &&
              ((A = Z[M]),
              B.appendChild(A),
              _e && A._wordEnd && B.appendChild(qr.createTextNode(" ")),
              x &&
                (M === 0 &&
                  ((B.style.top = A._y + "px"), (B.style.left = l + N + "px")),
                (A.style.top = "0px"),
                N && (A.style.left = A._x - N + "px")));
          O === 0
            ? (B.innerHTML = "&nbsp;")
            : !T && !E && (wp(B), Mu(B, " ", " ")),
            x && ((B.style.width = $), (B.style.height = A._h + "px")),
            e.appendChild(B);
        }
        e.style.cssText = re;
      }
      x &&
        (o > e.clientHeight &&
          ((e.style.height = o - p + "px"),
          e.clientHeight < o && (e.style.height = o + h + "px")),
        a > e.clientWidth &&
          ((e.style.width = a - f + "px"),
          e.clientWidth < a && (e.style.width = a + m + "px"))),
        F && (R ? (e.style.display = R) : e.style.removeProperty("display")),
        io(i, _),
        T && io(r, y),
        io(s, v);
    },
    xp = function (e, t, i, r) {
      var s = t.tag ? t.tag : t.span ? "span" : "div",
        a = t.type || t.split || "chars,words,lines",
        o = ~a.indexOf("chars"),
        u = to(t),
        l = t.wordDelimiter || " ",
        c = function (x) {
          return x === l || (x === yp && l === " ");
        },
        h = l !== " " ? "" : u ? "&#173; " : " ",
        m = "</" + s + ">",
        p = 1,
        f = t.specialChars
          ? typeof t.specialChars == "function"
            ? t.specialChars
            : _p
          : null,
        d,
        g,
        _,
        y,
        v,
        D,
        w,
        S,
        b = qr.createElement("div"),
        T = e.parentNode;
      for (
        T.insertBefore(b, e),
          b.textContent = e.nodeValue,
          T.removeChild(e),
          e = b,
          d = bu(e),
          w = d.indexOf("<") !== -1,
          t.reduceWhiteSpace !== !1 && (d = d.replace(vp, " ").replace(gp, "")),
          w && (d = d.split("<").join("{{LT}}")),
          v = d.length,
          g = (d.charAt(0) === " " ? h : "") + i(),
          _ = 0;
        _ < v;
        _++
      )
        if (((D = d.charAt(_)), f && (S = f(d.substr(_), t.specialChars))))
          (D = d.substr(_, S || 1)),
            (g += o && D !== " " ? r() + D + "</" + s + ">" : D),
            (_ += S - 1);
        else if (c(D) && !c(d.charAt(_ - 1)) && _) {
          for (g += p ? m : "", p = 0; c(d.charAt(_ + 1)); ) (g += h), _++;
          _ === v - 1
            ? (g += h)
            : d.charAt(_ + 1) !== ")" && ((g += h + i()), (p = 1));
        } else
          D === "{" && d.substr(_, 6) === "{{LT}}"
            ? ((g += o ? r() + "{{LT}}</" + s + ">" : "{{LT}}"), (_ += 5))
            : (D.charCodeAt(0) >= 55296 && D.charCodeAt(0) <= 56319) ||
              (d.charCodeAt(_ + 1) >= 65024 && d.charCodeAt(_ + 1) <= 65039)
            ? ((y = ((d.substr(_, 12).split(mp) || [])[1] || "").length || 2),
              (g +=
                o && D !== " "
                  ? r() + d.substr(_, y) + "</" + s + ">"
                  : d.substr(_, y)),
              (_ += y - 1))
            : (g += o && D !== " " ? r() + D + "</" + s + ">" : D);
      (e.outerHTML = g + (p ? m : "")), w && Mu(T, "{{LT}}", "<");
    },
    Ep = function n(e, t, i, r) {
      var s = Cn(e.childNodes),
        a = s.length,
        o = to(t),
        u,
        l;
      if (e.nodeType !== 3 || a > 1) {
        for (t.absolute = !1, u = 0; u < a; u++)
          (l = s[u]),
            (l._next = l._isFirst = l._parent = l._wordEnd = null),
            (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) &&
              (o &&
                l.nodeType !== 3 &&
                Tu(l).display === "inline" &&
                ((l.style.display = "inline-block"),
                (l.style.position = "relative")),
              (l._isSplit = !0),
              n(l, t, i, r));
        (t.absolute = o), (e._isSplit = !0);
        return;
      }
      xp(e, t, i, r);
    },
    ei = (function () {
      function n(t, i) {
        xu || Su(),
          (this.elements = Cn(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = i || {}),
          Eu(this),
          this.split(i);
      }
      var e = n.prototype;
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
              s = i.tag ? i.tag : i.span ? "span" : "div",
              a = Cu(i.wordsClass, s),
              o = Cu(i.charsClass, s),
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
              Ep(c, i, a, o),
              bp(c, i, this.chars, this.words, this.lines, l, u);
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
            this.elements.forEach(function (r, s) {
              (r.innerHTML = i[s].html),
                r.setAttribute("style", i[s].style || "");
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (n.create = function (i, r) {
          return new n(i, r);
        }),
        n
      );
    })();
  (ei.version = "3.12.7"), (ei.register = Su), q.registerPlugin(X, ei);
  const Sp = () => {
      document.querySelectorAll("[list-enter='wrap']").forEach((e) => {
        e.querySelectorAll("[list-enter='item']").forEach((i) => {
          const r = i.querySelector("[list-enter='icon']"),
            s = i.querySelector("[list-enter='text']"),
            a = i.querySelector("[list-enter='line']"),
            o = new ei(s, { type: "lines", linesClass: "split-line" });
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
    Tp = () => {
      Sp();
    },
    Cp = () => {
      console.log("homeInit"), Kr(), Ps(), As(), up(), fp(), hp(), Tp();
    },
    Mp = () => {
      const n = document.querySelectorAll('[team-modal="open-trigger"]'),
        e = document.querySelectorAll('[team-modal="modal"]');
      !n ||
        !e ||
        e.forEach((t, i) => {
          const r = t.querySelector('[team-modal="component"]'),
            s = t.querySelector('[team-modal="top-wrap"]'),
            a = t.querySelector('[team-modal="main-info"]'),
            o = t.querySelector('[team-modal="sec-info"]'),
            u = t.querySelectorAll('[team-modal="close-trigger"]');
          if (!r || !s || !a || !o) return;
          q.set(t, {
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
            display: "none",
          }),
            q.set(r, { clipPath: "inset(0% 0% 0% 100%)" }),
            q.set([s, a, o], { y: 100, opacity: 0, filter: "blur(5px)" });
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
              [s, a, o],
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
            c.to([s, a, o], {
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
          const h = n[i];
          h &&
            h.addEventListener("click", () => {
              l.restart();
            }),
            u.forEach((m) => {
              m.addEventListener("click", () => {
                c.restart();
              });
            });
        });
    },
    Pp = () => {
      Mp();
    };
  q.registerPlugin(X);
  const Ap = () => {
      document.querySelectorAll("[about-list='layout']").forEach((e) => {
        const t = e.querySelectorAll("[about-list='item']");
        q.utils.selector(e),
          t.forEach((i, r) => {
            const s = i.querySelector("[about-list='content']"),
              a = i.querySelector("[about-list='inner-line']");
            q.set(s, { opacity: 0.4 }),
              q.set(a, { scaleX: 0, transformOrigin: "left center" });
            const o = 85 - r * 20,
              u = 40 - r * 20;
            q.to(s, {
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
    Fp = () => {
      Ap();
    };
  q.registerPlugin(X, ei);
  const Op = () => {
      document.querySelectorAll("[rollover-text='wrap']").forEach((e) => {
        const t = e.querySelector("[rollover-text='wrap-rel']"),
          i =
            t == null ? void 0 : t.querySelector("[rollover-text='text-rel']"),
          r = e.querySelector("[rollover-text='wrap-ab']"),
          s = r == null ? void 0 : r.querySelector("[rollover-text='text-ab']");
        if (!t || !i || !r || !s) return;
        const a = new ei(i, { type: "chars" }),
          o = new ei(s, { type: "chars" }),
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
    kp = () => {
      Op();
    },
    Lp = () => {
      Kr(), Ps(), As(), Pp(), Fp(), kp();
    },
    Au = (n) => document.querySelector(n),
    Ip = (n) => document.querySelectorAll(n),
    zp = (n, e) => n.classList.add(e),
    Rp = () => {
      const n = Au(".contact-form");
      n &&
        n.addEventListener("submit", (e) => {
          e.preventDefault(), console.log("Form submitted!");
        });
    },
    Bp = () => {
      document.querySelectorAll('[filter-list="group"]').forEach((e) => {
        const t = e.querySelector('[filter-item="current"]'),
          i = e.querySelector("[list-filter='toggle']"),
          r = e.querySelector("[list-filter='dropdown-wrap']"),
          s = e.querySelectorAll("[list-filter='dropdown-option']"),
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
              s.forEach((v) => {
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
                        const S = c(w);
                        (d === "all" || S.includes(d)) &&
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
          s.forEach((f) => {
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
          s.forEach((f) => {
            f.addEventListener("click", () => {
              const d = f.getAttribute("filter-target");
              f.getAttribute("filter-status") !== "active" && h(d);
            });
          });
        const p = e.querySelector(`[filter-target="${m}"]`);
        p && (t.textContent = p.textContent);
      });
    },
    $p = () => {
      Bp();
    },
    Np = () => {
      Kr(), Ps(), As(), $p();
    };
  q.registerPlugin(X);
  const qp = () => {
      const n = document.querySelectorAll('[hero-parallax-sm="visual"]'),
        e = document.querySelector('[hero-parallax-sm="header"]');
      if (
        !(!n.length && !e) &&
        (X.defaults({ scroller: void 0 }),
        n.forEach((t) => {
          const i = parseFloat(t.getAttribute("parallax-speed")) || 0.6;
          q.fromTo(
            t,
            { yPercent: 0, scale: 1, filter: "blur(0px)" },
            {
              yPercent: -i * 100,
              scale: 1.2,
              filter: "blur(5px)",
              ease: "none",
              scrollTrigger: {
                trigger: t.parentElement,
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
        const t = parseFloat(e.getAttribute("parallax-speed")) || 3.5;
        q.fromTo(
          e,
          { yPercent: 0, scale: 1 },
          {
            yPercent: -t * 100,
            scale: 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: n[0].parentElement,
              start: "top top",
              end: "bottom top",
              scrub: !0,
              invalidateOnRefresh: !0,
            },
          }
        );
      }
    },
    Vp = () => {
      qp();
    },
    Hp = () => {
      console.log("blogcmsInit"), Kr(), Ps(), As(), Vp();
    },
    Yp = () => {
      console.log("workAccordion"),
        document
          .querySelectorAll("[work-accordion='component']")
          .forEach((e) => {
            const t = e.querySelector("[work-accordion='trigger']"),
              i = t.querySelector("[work-accordion='title']"),
              r = t.querySelector("[work-accordion='open-text']"),
              s = t.querySelector("[work-accordion='close-text']"),
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
                      s,
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
                      s,
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
    Xp = () => {
      Yp();
    },
    Gp = {
      home: Cp,
      about: Lp,
      contact: Rp,
      work: Np,
      blog_cms: Hp,
      work_cms: () => {
        console.log("workcmsInit"), Kr(), Ps(), As(), Xp();
      },
    },
    Wp = () => {
      const n = document.querySelector("[data-page]"),
        e = n ? n.dataset.page : null,
        t = Gp[e];
      t ? t() : console.log(`No specific script for route: ${e}`);
    },
    Up = () => {
      Ip(".footer-accordion").forEach((e) => {
        const t = e.querySelector(".accordion-trigger"),
          i = e.querySelector(".accordion-content");
        !t ||
          !i ||
          t.addEventListener("click", () => {
            i.style.height = i.style.height ? "" : `${i.scrollHeight}px`;
          });
      });
    },
    jp = () => {
      const n = {
          arrow3: { start: "-100%", show: "300%", out: "600%" },
          arrow2: { start: "-100%", show: "200%", out: "500%" },
          arrow1: { start: "-100%", show: "100%", out: "400%" },
        },
        e = [
          {
            ab: document.querySelector('[cta-arrow="icon-3-ab"]'),
            positions: n.arrow3,
          },
          {
            ab: document.querySelector('[cta-arrow="icon-2-ab"]'),
            positions: n.arrow2,
          },
          {
            ab: document.querySelector('[cta-arrow="icon-1-ab"]'),
            positions: n.arrow1,
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
  const Kp = () => {
      const n = document.querySelector('[nav-link="list"]'),
        e = document.querySelectorAll('[nav-link="item"]'),
        t = document.querySelector("[page='hero']");
      let i = [],
        r = [],
        s = [];
      const a = () => {
        i.forEach((u) => u.kill()),
          (i = []),
          (r = []),
          (s = []),
          n.setAttribute("nav-state", "list"),
          e.forEach((u, l) => {
            const c = u.querySelector('[nav-link="text"]'),
              h = u.querySelector('[nav-link="text-wrap"]'),
              m = u.querySelector('[nav-link="line"]');
            r.push(c), s.push(m);
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
                n.setAttribute("nav-state", "hamburger"),
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
                n.setAttribute("nav-state", "list"),
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
    Zp = () => Kp(),
    Qp = () => {
      const n = document.querySelectorAll('[nav-menu="open-trigger"]'),
        e = document.querySelectorAll('[nav-menu="close-trigger"]'),
        t = document.querySelector('[nav-menu="component"]'),
        i = document.querySelectorAll('[nav-menu="link-item"]'),
        r = document.querySelectorAll('[nav-menu="eyebrow"]'),
        s = document.querySelector('[nav-link="list"]');
      if (!n || !e || !t || !i || !r || !s) return;
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
        a.to(s, { opacity: 0, ease: "expo.out", duration: 0.5 }, "<"),
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
        o.to(s, { opacity: 1, ease: "expo.in", duration: 0.5 }, "<"),
        o.to(
          t,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            ease: "expo.inOut",
            duration: 0.7,
          },
          "-=0.6"
        ),
        n.forEach((u) => {
          u.addEventListener("click", () => {
            a.restart();
          });
        }),
        e.forEach((u) => {
          u.addEventListener("click", () => {
            o.restart();
          });
        });
    },
    Jp = () => {
      Qp();
    };
  q.registerPlugin(X);
  const eh = () => {
      const n = document.querySelectorAll("[visual-parallax]");
      n.length &&
        (X.defaults({ scroller: void 0 }),
        n.forEach((e) => {
          const t = parseFloat(e.getAttribute("parallax-speed")) || 0.1;
          q.fromTo(
            e,
            { yPercent: 0 },
            {
              yPercent: -t * 100,
              ease: "none",
              scrollTrigger: {
                trigger: e,
                start: "top bottom",
                end: "bottom top",
                scrub: !0,
                invalidateOnRefresh: !0,
              },
            }
          );
        }));
    },
    th = () => {
      eh();
    };
  q.registerPlugin(X, ei);
  const ih = () => {
      document.querySelectorAll("[split-text]").forEach((e) => {
        new ei(e, { type: "lines" }).lines.forEach((s) => {
          const a = document.createElement("div");
          a.setAttribute("data-line-wrapper", ""),
            (a.style.overflow = "clip"),
            (a.style.display = "block"),
            (a.style.position = "relative"),
            (a.style.willChange = "transform"),
            a.appendChild(s.cloneNode(!0)),
            s.replaceWith(a);
        });
        const i = e.querySelectorAll("[data-line-wrapper]"),
          r = Array.from(i).map((s) => s.firstChild);
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
    rh = () => {
      ih();
    };
  q.registerPlugin(X);
  const sh = () => {
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
    nh = () => {
      sh();
    };
  q.registerPlugin(X, ei);
  const ah = () => {
      const n = document.querySelectorAll("[text-scramble]");
      n.length &&
        n.forEach((e) => {
          const i = new ei(e, { type: "chars", charsClass: "char-animate" })
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
    oh = () => {
      ah();
    };
  q.registerPlugin(X);
  const lh = () => {
      const n = {
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
          s = i.getAttribute("motion-group"),
          a = i.getAttribute("motion-duration")
            ? parseFloat(i.getAttribute("motion-duration"))
            : n.duration,
          o = i.getAttribute("motion-delay")
            ? parseFloat(i.getAttribute("motion-delay"))
            : 0,
          u = i.getAttribute("motion-ease") || n.ease,
          l = i.getAttribute("motion-start") || n.start;
        r === "fade"
          ? q.set(i, { opacity: 0 })
          : r === "move-up" && q.set(i, { opacity: 0, y: 50 }),
          s
            ? (t[s] || (t[s] = []),
              t[s].push({
                element: i,
                motionType: r,
                duration: a,
                delay: o,
                ease: u,
              }))
            : uh(i, r, a, o, u, l);
      }),
        Object.keys(t).forEach((i) => {
          const r = t[i];
          if (r.length > 0) {
            const s = r[0],
              a = s.element.getAttribute("motion-stagger")
                ? parseFloat(s.element.getAttribute("motion-stagger"))
                : n.stagger,
              o = s.element.getAttribute("motion-start") || n.start,
              u = q.timeline({
                scrollTrigger: {
                  trigger: s.element.parentElement,
                  start: o,
                  toggleActions: "play none none reverse",
                  markers: n.markers,
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
                  duration: s.duration,
                  stagger: a,
                  ease: s.ease,
                  delay: s.delay,
                },
                0
              ),
              c.length > 0 &&
                u.to(
                  c,
                  {
                    opacity: 1,
                    y: 0,
                    duration: s.duration,
                    stagger: a,
                    ease: s.ease,
                    delay: s.delay,
                  },
                  0
                );
          }
        });
    },
    uh = (n, e, t, i, r, s) => {
      const a = q.timeline({
        scrollTrigger: {
          trigger: n,
          start: s,
          toggleActions: "play none none reverse",
          markers: !1,
        },
      });
      e === "fade"
        ? a.to(n, { opacity: 1, duration: t, delay: i, ease: r })
        : e === "move-up" &&
          a.to(n, { opacity: 1, y: 0, duration: t, delay: i, ease: r });
    },
    ch = () => {
      lh();
    },
    dh = () => {
      const n = document.querySelector("[contact-modal='main']");
      if (!n) return;
      const e = document.querySelectorAll("[contact-modal='open-btn']"),
        t = document.querySelectorAll("[contact-modal='close-btn']"),
        i = document.querySelector("[contact-modal='visual']"),
        r = document.querySelector("[contact-modal='form']");
      let s = !1;
      const a = q.timeline({ paused: !0 }),
        o = q.timeline({ paused: !0 });
      a.fromTo(
        n,
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
        o.to(n, {
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
            s || (a.restart(), (s = !0));
          });
        }),
        t.forEach((u) => {
          u.addEventListener("click", () => {
            s && (o.restart(), (s = !1));
          });
        });
    },
    fh = () => {
      dh();
    },
    ph = () => {
      Up(), jp(), Zp(), Jp(), th(), rh(), nh(), oh(), ch(), fh();
    },
    hh = () => {
      const n = Au(".example-component");
      n &&
        (zp(n, "is-initialized"),
        n.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    mh = () => {
      hh();
    };
  document.addEventListener("DOMContentLoaded", () => {
    ph(), mh(), Wp();
  });
});

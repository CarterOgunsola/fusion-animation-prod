var dh = Object.defineProperty,
  fh = Object.defineProperties;
var ph = Object.getOwnPropertyDescriptors;
var Nu = Object.getOwnPropertySymbols;
var hh = Object.prototype.hasOwnProperty,
  mh = Object.prototype.propertyIsEnumerable;
var pt = Math.pow,
  lo = (Ze, Ie, ht) =>
    Ie in Ze
      ? dh(Ze, Ie, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ht,
        })
      : (Ze[Ie] = ht),
  Ln = (Ze, Ie) => {
    for (var ht in Ie || (Ie = {})) hh.call(Ie, ht) && lo(Ze, ht, Ie[ht]);
    if (Nu) for (var ht of Nu(Ie)) mh.call(Ie, ht) && lo(Ze, ht, Ie[ht]);
    return Ze;
  },
  uo = (Ze, Ie) => fh(Ze, ph(Ie));
var q = (Ze, Ie, ht) => lo(Ze, typeof Ie != "symbol" ? Ie + "" : Ie, ht);
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
  function Ie(s, e) {
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
            Ie(s[i], e[i]);
      });
  }
  const ht = {
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
  function Xe() {
    const s = typeof document != "undefined" ? document : {};
    return Ie(s, ht), s;
  }
  const Vu = {
    document: ht,
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
  function we() {
    const s = typeof window != "undefined" ? window : {};
    return Ie(s, Vu), s;
  }
  function Ai(s) {
    return (
      s === void 0 && (s = ""),
      s
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Hu(s) {
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
  function Wi(s, e) {
    return e === void 0 && (e = 0), setTimeout(s, e);
  }
  function Xt() {
    return Date.now();
  }
  function Yu(s) {
    const e = we();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(s, null)),
      !t && s.currentStyle && (t = s.currentStyle),
      t || (t = s.style),
      t
    );
  }
  function On(s, e) {
    e === void 0 && (e = "x");
    const t = we();
    let i, r, n;
    const a = Yu(s);
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
  function Wr(s) {
    return (
      typeof s == "object" &&
      s !== null &&
      s.constructor &&
      Object.prototype.toString.call(s).slice(8, -1) === "Object"
    );
  }
  function qu(s) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? s instanceof HTMLElement
      : s && (s.nodeType === 1 || s.nodeType === 11);
  }
  function At() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !qu(i)) {
        const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, a = r.length; n < a; n += 1) {
          const o = r[n],
            u = Object.getOwnPropertyDescriptor(i, o);
          u !== void 0 &&
            u.enumerable &&
            (Wr(s[o]) && Wr(i[o])
              ? i[o].__swiper__
                ? (s[o] = i[o])
                : At(s[o], i[o])
              : !Wr(s[o]) && Wr(i[o])
              ? ((s[o] = {}), i[o].__swiper__ ? (s[o] = i[o]) : At(s[o], i[o]))
              : (s[o] = i[o]));
        }
      }
    }
    return s;
  }
  function Ur(s, e, t) {
    s.style.setProperty(e, t);
  }
  function co(s) {
    let { swiper: e, targetPosition: t, side: i } = s;
    const r = we(),
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
  function Ui(s) {
    return (
      s.querySelector(".swiper-slide-transform") ||
      (s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform")) ||
      s
    );
  }
  function Qe(s, e) {
    e === void 0 && (e = "");
    const t = we(),
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
  function Gu(s, e) {
    const t = we();
    let i = e.contains(s);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(s)), i || (i = Xu(s, e))),
      i
    );
  }
  function zs(s) {
    try {
      console.warn(s);
      return;
    } catch (e) {}
  }
  function Ft(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...(Array.isArray(e) ? e : Ai(e))), t;
  }
  function Rs(s) {
    const e = we(),
      t = Xe(),
      i = s.getBoundingClientRect(),
      r = t.body,
      n = s.clientTop || r.clientTop || 0,
      a = s.clientLeft || r.clientLeft || 0,
      o = s === e ? e.scrollY : s.scrollTop,
      u = s === e ? e.scrollX : s.scrollLeft;
    return { top: i.top + o - n, left: i.left + u - a };
  }
  function Wu(s, e) {
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
  function Fi(s, e) {
    return we().getComputedStyle(s, null).getPropertyValue(e);
  }
  function jr(s) {
    let e = s,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function ji(s, e) {
    const t = [];
    let i = s.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function Kr(s, e) {
    function t(i) {
      i.target === s &&
        (e.call(s, i), s.removeEventListener("transitionend", t));
    }
    e && s.addEventListener("transitionend", t);
  }
  function kn(s, e, t) {
    const i = we();
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
  function Bs(s) {
    return (e) =>
      Math.abs(e) > 0 &&
      s.browser &&
      s.browser.need3dFix &&
      Math.abs(e) % 90 === 0
        ? e + 0.001
        : e;
  }
  let In;
  function ju() {
    const s = we(),
      e = Xe();
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
  function fo() {
    return In || (In = ju()), In;
  }
  let zn;
  function Ku(s) {
    let { userAgent: e } = s === void 0 ? {} : s;
    const t = fo(),
      i = we(),
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
  function po(s) {
    return s === void 0 && (s = {}), zn || (zn = Ku(s)), zn;
  }
  let Rn;
  function Zu() {
    const s = we(),
      e = po();
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
  function ho() {
    return Rn || (Rn = Zu()), Rn;
  }
  function Qu(s) {
    let { swiper: e, on: t, emit: i } = s;
    const r = we();
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
                let { contentBoxSize: D, contentRect: _, target: v } = g;
                (v && v !== e.el) ||
                  ((f = _ ? _.width : (D[0] || D).inlineSize),
                  (d = _ ? _.height : (D[0] || D).blockSize));
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
      a = we(),
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
            const c = ji(e.hostEl);
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
          parseInt(Fi(i, "padding-left") || 0, 10) -
          parseInt(Fi(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(Fi(i, "padding-top") || 0, 10) -
          parseInt(Fi(i, "padding-bottom") || 0, 10)),
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
    function e(S, O) {
      return parseFloat(S.getPropertyValue(s.getDirectionLabel(O)) || 0);
    }
    const t = s.params,
      { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o } = s,
      u = s.virtual && t.virtual.enabled,
      l = u ? s.virtual.slides.length : s.slides.length,
      c = Qe(r, `.${s.params.slideClass}, swiper-slide`),
      h = u ? s.virtual.slides.length : c.length;
    let m = [];
    const p = [],
      f = [];
    let d = t.slidesOffsetBefore;
    typeof d == "function" && (d = t.slidesOffsetBefore.call(s));
    let g = t.slidesOffsetAfter;
    typeof g == "function" && (g = t.slidesOffsetAfter.call(s));
    const D = s.snapGrid.length,
      _ = s.slidesGrid.length;
    let v = t.spaceBetween,
      y = -d,
      w = 0,
      x = 0;
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
        (Ur(i, "--swiper-centered-offset-before", ""),
        Ur(i, "--swiper-centered-offset-after", ""));
    const b = t.grid && t.grid.rows > 1 && s.grid;
    b ? s.grid.initSlides(c) : s.grid && s.grid.unsetSlides();
    let T;
    const E =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (S) => typeof t.breakpoints[S].slidesPerView != "undefined"
      ).length > 0;
    for (let S = 0; S < h; S += 1) {
      T = 0;
      let O;
      if (
        (c[S] && (O = c[S]),
        b && s.grid.updateSlide(S, O, c),
        !(c[S] && Fi(O, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          E && (c[S].style[s.getDirectionLabel("width")] = "");
          const P = getComputedStyle(O),
            k = O.style.transform,
            F = O.style.webkitTransform;
          if (
            (k && (O.style.transform = "none"),
            F && (O.style.webkitTransform = "none"),
            t.roundLengths)
          )
            T = s.isHorizontal() ? kn(O, "width") : kn(O, "height");
          else {
            const R = e(P, "width"),
              I = e(P, "padding-left"),
              M = e(P, "padding-right"),
              L = e(P, "margin-left"),
              A = e(P, "margin-right"),
              C = P.getPropertyValue("box-sizing");
            if (C && C === "border-box") T = R + L + A;
            else {
              const { clientWidth: Y, offsetWidth: Q } = O;
              T = R + I + M + L + A + (Q - Y);
            }
          }
          k && (O.style.transform = k),
            F && (O.style.webkitTransform = F),
            t.roundLengths && (T = Math.floor(T));
        } else
          (T = (n - (t.slidesPerView - 1) * v) / t.slidesPerView),
            t.roundLengths && (T = Math.floor(T)),
            c[S] && (c[S].style[s.getDirectionLabel("width")] = `${T}px`);
        c[S] && (c[S].swiperSlideSize = T),
          f.push(T),
          t.centeredSlides
            ? ((y = y + T / 2 + w / 2 + v),
              w === 0 && S !== 0 && (y = y - n / 2 - v),
              S === 0 && (y = y - n / 2 - v),
              Math.abs(y) < 1 / 1e3 && (y = 0),
              t.roundLengths && (y = Math.floor(y)),
              x % t.slidesPerGroup === 0 && m.push(y),
              p.push(y))
            : (t.roundLengths && (y = Math.floor(y)),
              (x - Math.min(s.params.slidesPerGroupSkip, x)) %
                s.params.slidesPerGroup ===
                0 && m.push(y),
              p.push(y),
              (y = y + T + v)),
          (s.virtualSize += T + v),
          (w = T),
          (x += 1);
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
      for (let O = 0; O < m.length; O += 1) {
        let P = m[O];
        t.roundLengths && (P = Math.floor(P)),
          m[O] <= s.virtualSize - n && S.push(P);
      }
      (m = S),
        Math.floor(s.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(s.virtualSize - n);
    }
    if (u && t.loop) {
      const S = f[0] + v;
      if (t.slidesPerGroup > 1) {
        const O = Math.ceil(
            (s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup
          ),
          P = S * t.slidesPerGroup;
        for (let k = 0; k < O; k += 1) m.push(m[m.length - 1] + P);
      }
      for (
        let O = 0;
        O < s.virtual.slidesBefore + s.virtual.slidesAfter;
        O += 1
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
      c.filter((O, P) =>
        !t.cssMode || t.loop ? !0 : P !== c.length - 1
      ).forEach((O) => {
        O.style[S] = `${v}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let S = 0;
      f.forEach((P) => {
        S += P + (v || 0);
      }),
        (S -= v);
      const O = S > n ? S - n : 0;
      m = m.map((P) => (P <= 0 ? -d : P > O ? O + g : P));
    }
    if (t.centerInsufficientSlides) {
      let S = 0;
      f.forEach((P) => {
        S += P + (v || 0);
      }),
        (S -= v);
      const O = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (S + O < n) {
        const P = (n - S - O) / 2;
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
      Ur(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        Ur(
          i,
          "--swiper-centered-offset-after",
          `${s.size / 2 - f[f.length - 1] / 2}px`
        );
      const S = -s.snapGrid[0],
        O = -s.slidesGrid[0];
      (s.snapGrid = s.snapGrid.map((P) => P + S)),
        (s.slidesGrid = s.slidesGrid.map((P) => P + O));
    }
    if (
      (h !== l && s.emit("slidesLengthChange"),
      m.length !== D &&
        (s.params.watchOverflow && s.checkOverflow(),
        s.emit("snapGridLengthChange")),
      p.length !== _ && s.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && s.updateSlidesOffset(),
      s.emit("slidesUpdated"),
      !u && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const S = `${t.containerModifierClass}backface-hidden`,
        O = s.el.classList.contains(S);
      h <= t.maxBackfaceHiddenSlides
        ? O || s.el.classList.add(S)
        : O && s.el.classList.remove(S);
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
  const mo = (s, e, t) => {
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
        mo(l, g, t.slideVisibleClass),
        mo(l, d, t.slideFullyVisibleClass),
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
  const Bn = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function oc() {
    const s = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = s,
      n = s.virtual && t.virtual.enabled,
      a = s.grid && t.grid && t.grid.rows > 1,
      o = (h) => Qe(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
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
        (l = Wu(u, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !l === 0 && (l = e[e.length - 1]))),
      e.forEach((h) => {
        Bn(h, h === u, t.slideActiveClass),
          Bn(h, h === c, t.slideNextClass),
          Bn(h, h === l, t.slidePrevClass);
      }),
      s.emitSlidesClasses();
  }
  const $s = (s, e) => {
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
    $n = (s, e) => {
      if (!s.slides[e]) return;
      const t = s.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    Nn = (s) => {
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
            o.includes(u.column) && $n(s, l);
          });
        return;
      }
      const n = r + i - 1;
      if (s.params.rewind || s.params.loop)
        for (let a = r - e; a <= n + e; a += 1) {
          const o = ((a % t) + t) % t;
          (o < r || o > n) && $n(s, o);
        }
      else
        for (let a = Math.max(r - e, 0); a <= Math.min(n + e, t - 1); a += 1)
          a !== r && (a > n || a < r) && $n(s, a);
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
      e.initialized && Nn(e),
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
    let a = On(n, s);
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
            co({ swiper: n, targetPosition: -c, side: h ? "left" : "top" }), !0
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
  function _c(s, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${s}ms`),
      (t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
      t.emit("setTransition", s, e);
  }
  function go(s) {
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
  function Dc(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      go({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
  }
  function yc(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        go({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
  }
  var wc = { setTransition: _c, transitionStart: Dc, transitionEnd: yc };
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
    const D = -u[g];
    if (o.normalizeSlideIndex)
      for (let b = 0; b < l.length; b += 1) {
        const T = -Math.floor(D * 100),
          E = Math.floor(l[b] * 100),
          S = Math.floor(l[b + 1] * 100);
        typeof l[b + 1] != "undefined"
          ? T >= E && T < S - (S - E) / 2
            ? (a = b)
            : T >= E && T < S && (a = b + 1)
          : T >= E && (a = b);
      }
    if (
      n.initialized &&
      a !== h &&
      ((!n.allowSlideNext &&
        (m
          ? D > n.translate && D > n.minTranslate()
          : D < n.translate && D < n.minTranslate())) ||
        (!n.allowSlidePrev &&
          D > n.translate &&
          D > n.maxTranslate() &&
          (h || 0) !== a))
    )
      return !1;
    a !== (c || 0) && t && n.emit("beforeSlideChangeStart"),
      n.updateProgress(D);
    let _;
    a > h ? (_ = "next") : a < h ? (_ = "prev") : (_ = "reset");
    const v = n.virtual && n.params.virtual.enabled;
    if (!(v && r) && ((m && -D === n.translate) || (!m && D === n.translate)))
      return (
        n.updateActiveIndex(a),
        o.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        o.effect !== "slide" && n.setTranslate(D),
        _ !== "reset" && (n.transitionStart(t, _), n.transitionEnd(t, _)),
        !1
      );
    if (o.cssMode) {
      const b = n.isHorizontal(),
        T = m ? D : -D;
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
            co({ swiper: n, targetPosition: T, side: b ? "left" : "top" }), !0
          );
        p.scrollTo({ [b ? "left" : "top"]: T, behavior: "smooth" });
      }
      return !0;
    }
    const x = ho().isSafari;
    return (
      v && !r && x && n.isElement && n.virtual.update(!1, !1, a),
      n.setTransition(e),
      n.setTranslate(D),
      n.updateActiveIndex(a),
      n.updateSlidesClasses(),
      n.emit("beforeTransitionStart", e, i),
      n.transitionStart(t, _),
      e === 0
        ? n.transitionEnd(t, _)
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
                  n.transitionEnd(t, _)));
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
  function Ec(s, e, t) {
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
  function xc(s, e, t) {
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
    function m(_) {
      return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_);
    }
    const p = m(h),
      f = n.map((_) => m(_)),
      d = r.freeMode && r.freeMode.enabled;
    let g = n[f.indexOf(p) - 1];
    if (typeof g == "undefined" && (r.cssMode || d)) {
      let _;
      n.forEach((v, y) => {
        p >= v && (_ = y);
      }),
        typeof _ != "undefined" && (g = d ? n[_] : n[_ > 0 ? _ - 1 : _]);
    }
    let D = 0;
    if (
      (typeof g != "undefined" &&
        ((D = a.indexOf(g)),
        D < 0 && (D = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((D = D - i.slidesPerViewDynamic("previous", !0) + 1),
          (D = Math.max(D, 0)))),
      r.rewind && i.isBeginning)
    ) {
      const _ =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(_, s, e, t);
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(D, s, e, t);
        }),
        !0
      );
    return i.slideTo(D, s, e, t);
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
                Qe(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
              )),
              Wi(() => {
                s.slideTo(r);
              }))
            : s.slideTo(r)
          : r > s.slides.length - i
          ? (s.loopFix(),
            (r = s.getSlideIndex(
              Qe(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
            )),
            Wi(() => {
              s.slideTo(r);
            }))
          : s.slideTo(r);
    } else s.slideTo(r);
  }
  var Pc = {
    slideTo: bc,
    slideToLoop: Sc,
    slideNext: Ec,
    slidePrev: xc,
    slideReset: Tc,
    slideToClosest: Cc,
    slideToClickedSlide: Mc,
  };
  function Ac(s, e) {
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
      u = t.slides.length % o !== 0,
      l = a && t.slides.length % i.grid.rows !== 0,
      c = (h) => {
        for (let m = 0; m < h; m += 1) {
          const p = t.isElement
            ? Ft("swiper-slide", [i.slideBlankClass])
            : Ft("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(p);
        }
      };
    if (u) {
      if (i.loopAddBlankSlides) {
        const h = o - (t.slides.length % o);
        c(h), t.recalcSlides(), t.updateSlides();
      } else
        zs(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      n();
    } else if (l) {
      if (i.loopAddBlankSlides) {
        const h = i.grid.rows - (t.slides.length % i.grid.rows);
        c(h), t.recalcSlides(), t.updateSlides();
      } else
        zs(
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
    let D = f.slidesPerView;
    D === "auto"
      ? (D = l.slidesPerViewDynamic())
      : ((D = Math.ceil(parseFloat(f.slidesPerView, 10))),
        d && D % 2 === 0 && (D = D + 1));
    const _ = f.slidesPerGroupAuto ? D : f.slidesPerGroup;
    let v = _;
    v % _ !== 0 && (v += _ - (v % _)),
      (v += f.loopAdditionalSlides),
      (l.loopedSlides = v);
    const y = l.grid && f.grid && f.grid.rows > 1;
    c.length < D + v || (l.params.effect === "cards" && c.length < D + v * 2)
      ? zs(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : y &&
        f.grid.fill === "row" &&
        zs(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const w = [],
      x = [],
      b = y ? Math.ceil(c.length / f.grid.rows) : c.length,
      T = a && b - g < D && !d;
    let E = T ? g : l.activeIndex;
    typeof n == "undefined"
      ? (n = l.getSlideIndex(
          c.find((I) => I.classList.contains(f.slideActiveClass))
        ))
      : (E = n);
    const S = i === "next" || !i,
      O = i === "prev" || !i;
    let P = 0,
      k = 0;
    const R =
      (y ? c[n].column : n) + (d && typeof r == "undefined" ? -D / 2 + 0.5 : 0);
    if (R < v) {
      P = Math.max(v - R, _);
      for (let I = 0; I < v - R; I += 1) {
        const M = I - Math.floor(I / b) * b;
        if (y) {
          const L = b - M - 1;
          for (let A = c.length - 1; A >= 0; A -= 1)
            c[A].column === L && w.push(A);
        } else w.push(b - M - 1);
      }
    } else if (R + D > b - v) {
      (k = Math.max(R - (b - v * 2), _)), T && (k = Math.max(k, D - b + g + 1));
      for (let I = 0; I < k; I += 1) {
        const M = I - Math.floor(I / b) * b;
        y
          ? c.forEach((L, A) => {
              L.column === M && x.push(A);
            })
          : x.push(M);
      }
    }
    if (
      ((l.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        l.__preventObserver__ = !1;
      }),
      l.params.effect === "cards" &&
        c.length < D + v * 2 &&
        (x.includes(n) && x.splice(x.indexOf(n), 1),
        w.includes(n) && w.splice(w.indexOf(n), 1)),
      O &&
        w.forEach((I) => {
          (c[I].swiperLoopMoveDOM = !0),
            p.prepend(c[I]),
            (c[I].swiperLoopMoveDOM = !1);
        }),
      S &&
        x.forEach((I) => {
          (c[I].swiperLoopMoveDOM = !0),
            p.append(c[I]),
            (c[I].swiperLoopMoveDOM = !1);
        }),
      l.recalcSlides(),
      f.slidesPerView === "auto"
        ? l.updateSlides()
        : y &&
          ((w.length > 0 && O) || (x.length > 0 && S)) &&
          l.slides.forEach((I, M) => {
            l.grid.updateSlide(M, I, l.slides);
          }),
      f.watchSlidesProgress && l.updateSlidesOffset(),
      t)
    ) {
      if (w.length > 0 && O) {
        if (typeof e == "undefined") {
          const I = l.slidesGrid[E],
            L = l.slidesGrid[E + P] - I;
          u
            ? l.setTranslate(l.translate - L)
            : (l.slideTo(E + Math.ceil(P), 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - L),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - L)));
        } else if (r) {
          const I = y ? w.length / f.grid.rows : w.length;
          l.slideTo(l.activeIndex + I, 0, !1, !0),
            (l.touchEventsData.currentTranslate = l.translate);
        }
      } else if (x.length > 0 && S)
        if (typeof e == "undefined") {
          const I = l.slidesGrid[E],
            L = l.slidesGrid[E - k] - I;
          u
            ? l.setTranslate(l.translate - L)
            : (l.slideTo(E - k, 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - L),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - L)));
        } else {
          const I = y ? x.length / f.grid.rows : x.length;
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
                uo(Ln({}, I), {
                  slideTo: M.params.slidesPerView === f.slidesPerView ? t : !1,
                })
              );
          })
        : l.controller.control instanceof l.constructor &&
          l.controller.control.params.loop &&
          l.controller.control.loopFix(
            uo(Ln({}, I), {
              slideTo:
                l.controller.control.params.slidesPerView === f.slidesPerView
                  ? t
                  : !1,
            })
          );
    }
    l.emit("loopFix");
  }
  function Lc() {
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
  var Oc = { loopCreate: Ac, loopFix: Fc, loopDestroy: Lc };
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
      if (!i || i === Xe() || i === we()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(s);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function vo(s, e, t) {
    const i = we(),
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
      t = Xe();
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      vo(e, i, i.targetTouches[0].pageX);
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
      (n.touchEventsTarget === "wrapper" && !Gu(u, e.wrapperEl)) ||
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
    if (!vo(e, i, p)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = p),
      (a.startY = f),
      (r.touchStartTime = Xt()),
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
    const e = Xe(),
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
        ((l = [...u.changedTouches].find((x) => x.identifier === i.touchId)),
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
          (i.touchStartTime = Xt()));
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
      Math.sqrt(pt(m, 2) + pt(p, 2)) < t.params.threshold
    )
      return;
    if (typeof i.isScrolling == "undefined") {
      let x;
      (t.isHorizontal() && n.currentY === n.startY) ||
      (t.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : m * m + p * p >= 25 &&
          ((x = (Math.atan2(Math.abs(p), Math.abs(m)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? x > r.touchAngle
            : 90 - x > r.touchAngle));
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
    const D = t.params.loop && !r.cssMode,
      _ =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (D && _ && t.loopFix({ direction: t.swipeDirection }),
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
        t.emit("sliderFirstMove", u);
    }
    let v;
    if (
      (new Date().getTime(),
      r._loopSwapReset !== !1 &&
        i.isMoved &&
        i.allowThresholdMove &&
        g !== t.touchesDirection &&
        D &&
        _ &&
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
    let y = !0,
      w = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (w = 0),
      f > 0
        ? (D &&
            _ &&
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
            ((y = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                pt(-t.minTranslate() + i.startTranslate + f, w))))
        : f < 0 &&
          (D &&
            _ &&
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
            ((y = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                pt(t.maxTranslate() - i.startTranslate - f, w)))),
      y && (u.preventedByNestedSwiper = !0),
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
    const h = Xt(),
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
      ((t.lastClickTime = Xt()),
      Wi(() => {
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
      const x = w < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof l[w + x] != "undefined"
        ? (f || (p >= l[w] && p < l[w + x])) && ((d = w), (g = l[w + x] - l[w]))
        : (f || p >= l[w]) &&
          ((d = w), (g = l[l.length - 1] - l[l.length - 2]));
    }
    let D = null,
      _ = null;
    a.rewind &&
      (e.isBeginning
        ? (_ =
            a.virtual && a.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (D = 0));
    const v = (p - l[d]) / g,
      y = d < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (m > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (v >= a.longSwipesRatio
          ? e.slideTo(a.rewind && e.isEnd ? D : d + y)
          : e.slideTo(d)),
        e.swipeDirection === "prev" &&
          (v > 1 - a.longSwipesRatio
            ? e.slideTo(d + y)
            : _ !== null && v < 0 && Math.abs(v) > a.longSwipesRatio
            ? e.slideTo(_)
            : e.slideTo(d));
    } else {
      if (!a.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(d + y)
          : e.slideTo(d)
        : (e.swipeDirection === "next" && e.slideTo(D !== null ? D : d + y),
          e.swipeDirection === "prev" && e.slideTo(_ !== null ? _ : d));
    }
  }
  function _o() {
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
  function Vc(s) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && s.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (s.stopPropagation(), s.stopImmediatePropagation())));
  }
  function Hc() {
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
  function Yc(s) {
    const e = this;
    $s(e, s.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function qc() {
    const s = this;
    s.documentTouchHandlerProceeded ||
      ((s.documentTouchHandlerProceeded = !0),
      s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
  }
  const Do = (s, e) => {
    const t = Xe(),
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
            _o,
            !0
          )
        : s[l]("observerUpdate", _o, !0),
      r[u]("load", s.onLoad, { capture: !0 }));
  };
  function Xc() {
    const s = this,
      { params: e } = s;
    (s.onTouchStart = Bc.bind(s)),
      (s.onTouchMove = $c.bind(s)),
      (s.onTouchEnd = Nc.bind(s)),
      (s.onDocumentTouchStart = qc.bind(s)),
      e.cssMode && (s.onScroll = Hc.bind(s)),
      (s.onClick = Vc.bind(s)),
      (s.onLoad = Yc.bind(s)),
      Do(s, "on");
  }
  function Gc() {
    Do(this, "off");
  }
  var Wc = { attachEvents: Xc, detachEvents: Gc };
  const yo = (s, e) => s.grid && e.grid && e.grid.rows > 1;
  function Uc() {
    const s = this,
      { realIndex: e, initialized: t, params: i, el: r } = s,
      n = i.breakpoints;
    if (!n || (n && Object.keys(n).length === 0)) return;
    const a = Xe(),
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
      m = yo(s, i),
      p = yo(s, h),
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
      ["navigation", "pagination", "scrollbar"].forEach((x) => {
        if (typeof h[x] == "undefined") return;
        const b = i[x] && i[x].enabled,
          T = h[x] && h[x].enabled;
        b && !T && s[x].disable(), !b && T && s[x].enable();
      });
    const D = h.direction && h.direction !== i.direction,
      _ = i.loop && (h.slidesPerView !== i.slidesPerView || D),
      v = i.loop;
    D && t && s.changeDirection(), At(s.params, h);
    const y = s.params.enabled,
      w = s.params.loop;
    Object.assign(s, {
      allowTouchMove: s.params.allowTouchMove,
      allowSlideNext: s.params.allowSlideNext,
      allowSlidePrev: s.params.allowSlidePrev,
    }),
      g && !y ? s.disable() : !g && y && s.enable(),
      (s.currentBreakpoint = l),
      s.emit("_beforeBreakpoint", h),
      t &&
        (_
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
    const r = we(),
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
    wo = {
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
        At(e, i);
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
        At(e, i);
        return;
      }
      typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0),
        s[r] || (s[r] = { enabled: !1 }),
        At(e, i);
    };
  }
  const Vn = {
      eventsEmitter: ec,
      update: dc,
      translate: vc,
      transition: wc,
      slide: Pc,
      loop: Oc,
      grabCursor: zc,
      events: Wc,
      breakpoints: Kc,
      checkOverflow: id,
      classes: ed,
    },
    Hn = {};
  class bt {
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
        (t = At({}, t)),
        e && !t.el && (t.el = e);
      const a = Xe();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const c = [];
        return (
          a.querySelectorAll(t.el).forEach((h) => {
            const m = At({}, t, { el: h });
            c.push(new bt(m));
          }),
          c
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = fo()),
        (o.device = po({ userAgent: t.userAgent })),
        (o.browser = ho()),
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
      const l = At({}, wo, u);
      return (
        (o.params = At({}, l, Hn, t)),
        (o.originalParams = At({}, o.params)),
        (o.passedParams = At({}, t)),
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
            return Math.trunc(this.translate / pt(2, 23)) * pt(2, 23);
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
        n = jr(r[0]);
      return jr(e) - n;
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
          a.complete && $s(e, a);
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
          ((a = Ft("div", t.params.wrapperClass)),
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
          rtl: i.dir.toLowerCase() === "rtl" || Fi(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || Fi(i, "direction") === "rtl"),
          wrongRTL: Fi(a, "display") === "-webkit-box",
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
            ? $s(t, n)
            : n.addEventListener("load", (a) => {
                $s(t, a.target);
              });
        }),
        Nn(t),
        (t.initialized = !0),
        Nn(t),
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Hu(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      At(Hn, e);
    }
    static get extendedDefaults() {
      return Hn;
    }
    static get defaults() {
      return wo;
    }
    static installModule(e) {
      bt.prototype.__modules__ || (bt.prototype.__modules__ = []);
      const t = bt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => bt.installModule(t)), bt)
        : (bt.installModule(e), bt);
    }
  }
  Object.keys(Vn).forEach((s) => {
    Object.keys(Vn[s]).forEach((e) => {
      bt.prototype[e] = Vn[s][e];
    });
  }),
    bt.use([Qu, Ju]);
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
    const a = Xe();
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
      let D;
      return (
        g.renderSlide
          ? ((D = g.renderSlide.call(e, f, d)),
            typeof D == "string" && ((o.innerHTML = D), (D = o.children[0])))
          : e.isElement
          ? (D = Ft("swiper-slide"))
          : (D = Ft("div", e.params.slideClass)),
        D.setAttribute("data-swiper-slide-index", d),
        g.renderSlide || (D.innerHTML = f),
        g.cache && (e.virtual.cache[d] = D),
        D
      );
    }
    function l(f, d, g) {
      const {
        slidesPerView: D,
        slidesPerGroup: _,
        centeredSlides: v,
        loop: y,
        initialSlide: w,
      } = e.params;
      if (d && !y && w > 0) return;
      const { addSlidesBefore: x, addSlidesAfter: b } = e.params.virtual,
        { from: T, to: E, slides: S, slidesGrid: O, offset: P } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const k = typeof g == "undefined" ? e.activeIndex || 0 : g;
      let F;
      e.rtlTranslate ? (F = "right") : (F = e.isHorizontal() ? "left" : "top");
      let R, I;
      v
        ? ((R = Math.floor(D / 2) + _ + b), (I = Math.floor(D / 2) + _ + x))
        : ((R = D + (_ - 1) + b), (I = (y ? D : _) + x));
      let M = k - I,
        L = k + R;
      y || ((M = Math.max(M, 0)), (L = Math.min(L, S.length - 1)));
      let A = (e.slidesGrid[M] || 0) - (e.slidesGrid[0] || 0);
      y && k >= I
        ? ((M -= I), v || (A += e.slidesGrid[0]))
        : y && k < I && ((M = -I), v && (A += e.slidesGrid[0])),
        Object.assign(e.virtual, {
          from: M,
          to: L,
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
      if (T === M && E === L && !f) {
        e.slidesGrid !== O &&
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
          to: L,
          slides: (function () {
            const N = [];
            for (let W = M; W <= L; W += 1) N.push(S[W]);
            return N;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? C() : r("virtualUpdate");
        return;
      }
      const Y = [],
        Q = [],
        ye = ($) => {
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
        for (let $ = T; $ <= E; $ += 1)
          if ($ < M || $ > L) {
            const N = ye($);
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
      const se = y ? -S.length : 0,
        B = y ? S.length * 2 : S.length;
      for (let $ = se; $ < B; $ += 1)
        if ($ >= M && $ <= L) {
          const N = ye($);
          typeof E == "undefined" || f
            ? Q.push(N)
            : ($ > E && Q.push(N), $ < T && Y.push(N));
        }
      if (
        (Q.forEach(($) => {
          e.slidesEl.append(u(S[$], $));
        }),
        y)
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
      Qe(e.slidesEl, ".swiper-slide, swiper-slide").forEach(($) => {
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
        D = 1;
      if (Array.isArray(f)) {
        for (let _ = 0; _ < f.length; _ += 1)
          f[_] && e.virtual.slides.unshift(f[_]);
        (g = d + f.length), (D = f.length);
      } else e.virtual.slides.unshift(f);
      if (e.params.virtual.cache) {
        const _ = e.virtual.cache,
          v = {};
        Object.keys(_).forEach((y) => {
          const w = _[y],
            x = w.getAttribute("data-swiper-slide-index");
          x && w.setAttribute("data-swiper-slide-index", parseInt(x, 10) + D),
            (v[parseInt(y, 10) + D] = w);
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
            Object.keys(e.virtual.cache).forEach((D) => {
              D > f &&
                ((e.virtual.cache[D - 1] = e.virtual.cache[D]),
                e.virtual.cache[D - 1].setAttribute(
                  "data-swiper-slide-index",
                  D - 1
                ),
                delete e.virtual.cache[D]);
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
          d.forEach((g, D) => {
            g.setAttribute("data-swiper-slide-index", D),
              (e.virtual.cache[D] = g),
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
          Ur(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
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
    const n = Xe(),
      a = we();
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
        D = p === 37,
        _ = p === 39,
        v = p === 38,
        y = p === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && _) || (e.isVertical() && y) || g)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && D) || (e.isVertical() && v) || d))
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
        if (e.params.keyboard.onlyInViewport && (d || g || D || _ || v || y)) {
          let w = !1;
          if (
            ji(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
            ji(e.el, `.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const x = e.el,
            b = x.clientWidth,
            T = x.clientHeight,
            E = a.innerWidth,
            S = a.innerHeight,
            O = Rs(x);
          h && (O.left -= x.scrollLeft);
          const P = [
            [O.left, O.top],
            [O.left + b, O.top],
            [O.left, O.top + T],
            [O.left + b, O.top + T],
          ];
          for (let k = 0; k < P.length; k += 1) {
            const F = P[k];
            if (F[0] >= 0 && F[0] <= E && F[1] >= 0 && F[1] <= S) {
              if (F[0] === 0 && F[1] === 0) continue;
              w = !0;
            }
          }
          if (!w) return;
        }
        e.isHorizontal()
          ? ((d || g || D || _) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (((g || _) && !h) || ((d || D) && h)) && e.slideNext(),
            (((d || D) && !h) || ((g || _) && h)) && e.slidePrev())
          : ((d || g || v || y) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (g || y) && e.slideNext(),
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
    const n = we();
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
      o = Xt(),
      u;
    const l = [];
    function c(v) {
      let b = 0,
        T = 0,
        E = 0,
        S = 0;
      return (
        "detail" in v && (T = v.detail),
        "wheelDelta" in v && (T = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (T = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (b = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((b = T), (T = 0)),
        (E = b * 10),
        (S = T * 10),
        "deltaY" in v && (S = v.deltaY),
        "deltaX" in v && (E = v.deltaX),
        v.shiftKey && !E && ((E = S), (S = 0)),
        (E || S) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((E *= 40), (S *= 40))
            : ((E *= 800), (S *= 800))),
        E && !b && (b = E < 1 ? -1 : 1),
        S && !T && (T = S < 1 ? -1 : 1),
        { spinX: b, spinY: T, pixelX: E, pixelY: S }
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
          Xt() - o < e.params.mousewheel.thresholdTime)
        ? !1
        : v.delta >= 6 && Xt() - o < 60
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
      const y = e.params.mousewheel;
      if (v.direction < 0) {
        if (e.isEnd && !e.params.loop && y.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges) return !0;
      return !1;
    }
    function d(v) {
      let y = v,
        w = !0;
      if (
        !e.enabled ||
        v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
      )
        return;
      const x = e.params.mousewheel;
      e.params.cssMode && y.preventDefault();
      let b = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (b = document.querySelector(e.params.mousewheel.eventsTarget));
      const T = b && b.contains(y.target);
      if (!e.mouseEntered && !T && !x.releaseOnEdges) return !0;
      y.originalEvent && (y = y.originalEvent);
      let E = 0;
      const S = e.rtlTranslate ? -1 : 1,
        O = c(y);
      if (x.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(O.pixelX) > Math.abs(O.pixelY)) E = -O.pixelX * S;
          else return !0;
        else if (Math.abs(O.pixelY) > Math.abs(O.pixelX)) E = -O.pixelY;
        else return !0;
      else
        E = Math.abs(O.pixelX) > Math.abs(O.pixelY) ? -O.pixelX * S : -O.pixelY;
      if (E === 0) return !0;
      x.invert && (E = -E);
      let P = e.getTranslate() + E * x.sensitivity;
      if (
        (P >= e.minTranslate() && (P = e.minTranslate()),
        P <= e.maxTranslate() && (P = e.maxTranslate()),
        (w = e.params.loop
          ? !0
          : !(P === e.minTranslate() || P === e.maxTranslate())),
        w && e.params.nested && y.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const k = {
          time: Xt(),
          delta: Math.abs(E),
          direction: Math.sign(E),
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
        const k = { time: Xt(), delta: Math.abs(E), direction: Math.sign(E) },
          F =
            u &&
            k.time < u.time + 500 &&
            k.delta <= u.delta &&
            k.direction === u.direction;
        if (!F) {
          u = void 0;
          let R = e.getTranslate() + E * x.sensitivity;
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
            const L = l.length ? l[l.length - 1] : void 0,
              A = l[0];
            if (
              (l.push(k),
              L && (k.delta > L.delta || k.direction !== L.direction))
            )
              l.splice(0);
            else if (
              l.length >= 15 &&
              k.time - A.time < 500 &&
              A.delta - k.delta >= 1 &&
              k.delta <= 6
            ) {
              const C = E > 0 ? 0.8 : 0.2;
              (u = k),
                l.splice(0),
                (a = Wi(() => {
                  e.destroyed ||
                    !e.params ||
                    e.slideToClosest(e.params.speed, !0, void 0, C);
                }, 0));
            }
            a ||
              (a = Wi(() => {
                if (e.destroyed || !e.params) return;
                const C = 0.5;
                (u = k),
                  l.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, C);
              }, 500));
          }
          if (
            (F || r("scroll", y),
            e.params.autoplay &&
              e.params.autoplay.disableOnInteraction &&
              e.autoplay.stop(),
            x.releaseOnEdges &&
              (R === e.minTranslate() || R === e.maxTranslate()))
          )
            return !0;
        }
      }
      return y.preventDefault ? y.preventDefault() : (y.returnValue = !1), !1;
    }
    function g(v) {
      let y = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (y = document.querySelector(e.params.mousewheel.eventsTarget)),
        y[v]("mouseenter", h),
        y[v]("mouseleave", m),
        y[v]("wheel", d);
    }
    function D() {
      return e.params.cssMode
        ? (e.wrapperEl.removeEventListener("wheel", d), !0)
        : e.mousewheel.enabled
        ? !1
        : (g("addEventListener"), (e.mousewheel.enabled = !0), !0);
    }
    function _() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, d), !0)
        : e.mousewheel.enabled
        ? (g("removeEventListener"), (e.mousewheel.enabled = !1), !0)
        : !1;
    }
    i("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && _(),
        e.params.mousewheel.enabled && D();
    }),
      i("destroy", () => {
        e.params.cssMode && D(), e.mousewheel.enabled && _();
      }),
      Object.assign(e.mousewheel, { enable: D, disable: _ });
  }
  function Yn(s, e, t, i) {
    return (
      s.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let n = Qe(s.el, `.${i[r]}`)[0];
            n || ((n = Ft("div", i[r])), (n.className = i[r]), s.el.append(n)),
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
        f.forEach((D) => {
          D &&
            (D.classList[d ? "add" : "remove"](...g.disabledClass.split(" ")),
            D.tagName === "BUTTON" && (D.disabled = d),
            e.params.watchOverflow &&
              e.enabled &&
              D.classList[e.isLocked ? "add" : "remove"](g.lockClass));
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
        ((e.params.navigation = Yn(
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
      const D = (_, v) => {
        _ && _.addEventListener("click", v === "next" ? l : u),
          !e.enabled && _ && _.classList.add(...f.lockClass.split(" "));
      };
      d.forEach((_) => D(_, "next")), g.forEach((_) => D(_, "prev"));
    }
    function h() {
      let { nextEl: f, prevEl: d } = e.navigation;
      (f = ae(f)), (d = ae(d));
      const g = (D, _) => {
        D.removeEventListener("click", _ === "next" ? l : u),
          D.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      f.forEach((D) => g(D, "next")), d.forEach((D) => g(D, "prev"));
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
        let { nextEl: g, prevEl: D } = e.navigation;
        (g = ae(g)), (D = ae(D));
        const _ = d.target;
        let v = D.includes(_) || g.includes(_);
        if (e.isElement && !v) {
          const y = d.path || (d.composedPath && d.composedPath());
          y && (v = y.find((w) => g.includes(w) || D.includes(w)));
        }
        if (e.params.navigation.hideOnClick && !v) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === _ || e.pagination.el.contains(_))
          )
            return;
          let y;
          g.length
            ? (y = g[0].classList.contains(e.params.navigation.hiddenClass))
            : D.length &&
              (y = D[0].classList.contains(e.params.navigation.hiddenClass)),
            r(y === !0 ? "navigationShow" : "navigationHide"),
            [...g, ...D]
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
  function Di(s) {
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
        formatFractionCurrent: (_) => _,
        formatFractionTotal: (_) => _,
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
    function l(_, v) {
      const { bulletActiveClass: y } = e.params.pagination;
      _ &&
        ((_ = _[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
        _ &&
          (_.classList.add(`${y}-${v}`),
          (_ = _[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
          _ && _.classList.add(`${y}-${v}-${v}`)));
    }
    function c(_, v, y) {
      if (((_ = _ % y), (v = v % y), v === _ + 1)) return "next";
      if (v === _ - 1) return "previous";
    }
    function h(_) {
      const v = _.target.closest(Di(e.params.pagination.bulletClass));
      if (!v) return;
      _.preventDefault();
      const y = jr(v) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === y) return;
        const w = c(e.realIndex, y, e.slides.length);
        w === "next"
          ? e.slideNext()
          : w === "previous"
          ? e.slidePrev()
          : e.slideToLoop(y);
      } else e.slideTo(y);
    }
    function m() {
      const _ = e.rtl,
        v = e.params.pagination;
      if (u()) return;
      let y = e.pagination.el;
      y = ae(y);
      let w, x;
      const b =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        T = e.params.loop
          ? Math.ceil(b / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((x = e.previousRealIndex || 0),
            (w =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex != "undefined"
          ? ((w = e.snapIndex), (x = e.previousSnapIndex))
          : ((x = e.previousIndex || 0), (w = e.activeIndex || 0)),
        v.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const E = e.pagination.bullets;
        let S, O, P;
        if (
          (v.dynamicBullets &&
            ((a = kn(E[0], e.isHorizontal() ? "width" : "height")),
            y.forEach((k) => {
              k.style[e.isHorizontal() ? "width" : "height"] = `${
                a * (v.dynamicMainBullets + 4)
              }px`;
            }),
            v.dynamicMainBullets > 1 &&
              x !== void 0 &&
              ((o += w - (x || 0)),
              o > v.dynamicMainBullets - 1
                ? (o = v.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (S = Math.max(w - o, 0)),
            (O = S + (Math.min(E.length, v.dynamicMainBullets) - 1)),
            (P = (O + S) / 2)),
          E.forEach((k) => {
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
          y.length > 1)
        )
          E.forEach((k) => {
            const F = jr(k);
            F === w
              ? k.classList.add(...v.bulletActiveClass.split(" "))
              : e.isElement && k.setAttribute("part", "bullet"),
              v.dynamicBullets &&
                (F >= S &&
                  F <= O &&
                  k.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
                F === S && l(k, "prev"),
                F === O && l(k, "next"));
          });
        else {
          const k = E[w];
          if (
            (k && k.classList.add(...v.bulletActiveClass.split(" ")),
            e.isElement &&
              E.forEach((F, R) => {
                F.setAttribute("part", R === w ? "bullet-active" : "bullet");
              }),
            v.dynamicBullets)
          ) {
            const F = E[S],
              R = E[O];
            for (let I = S; I <= O; I += 1)
              E[I] &&
                E[I].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
            l(F, "prev"), l(R, "next");
          }
        }
        if (v.dynamicBullets) {
          const k = Math.min(E.length, v.dynamicMainBullets + 4),
            F = (a * k - a) / 2 - P * a,
            R = _ ? "right" : "left";
          E.forEach((I) => {
            I.style[e.isHorizontal() ? R : "top"] = `${F}px`;
          });
        }
      }
      y.forEach((E, S) => {
        if (
          (v.type === "fraction" &&
            (E.querySelectorAll(Di(v.currentClass)).forEach((O) => {
              O.textContent = v.formatFractionCurrent(w + 1);
            }),
            E.querySelectorAll(Di(v.totalClass)).forEach((O) => {
              O.textContent = v.formatFractionTotal(T);
            })),
          v.type === "progressbar")
        ) {
          let O;
          v.progressbarOpposite
            ? (O = e.isHorizontal() ? "vertical" : "horizontal")
            : (O = e.isHorizontal() ? "horizontal" : "vertical");
          const P = (w + 1) / T;
          let k = 1,
            F = 1;
          O === "horizontal" ? (k = P) : (F = P),
            E.querySelectorAll(Di(v.progressbarFillClass)).forEach((R) => {
              (R.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${F})`),
                (R.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        v.type === "custom" && v.renderCustom
          ? ((E.innerHTML = v.renderCustom(e, w + 1, T)),
            S === 0 && r("paginationRender", E))
          : (S === 0 && r("paginationRender", E), r("paginationUpdate", E)),
          e.params.watchOverflow &&
            e.enabled &&
            E.classList[e.isLocked ? "add" : "remove"](v.lockClass);
      });
    }
    function p() {
      const _ = e.params.pagination;
      if (u()) return;
      const v =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
      let y = e.pagination.el;
      y = ae(y);
      let w = "";
      if (_.type === "bullets") {
        let x = e.params.loop
          ? Math.ceil(v / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && x > v && (x = v);
        for (let b = 0; b < x; b += 1)
          _.renderBullet
            ? (w += _.renderBullet.call(e, b, _.bulletClass))
            : (w += `<${_.bulletElement} ${
                e.isElement ? 'part="bullet"' : ""
              } class="${_.bulletClass}"></${_.bulletElement}>`);
      }
      _.type === "fraction" &&
        (_.renderFraction
          ? (w = _.renderFraction.call(e, _.currentClass, _.totalClass))
          : (w = `<span class="${_.currentClass}"></span> / <span class="${_.totalClass}"></span>`)),
        _.type === "progressbar" &&
          (_.renderProgressbar
            ? (w = _.renderProgressbar.call(e, _.progressbarFillClass))
            : (w = `<span class="${_.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        y.forEach((x) => {
          _.type !== "custom" && (x.innerHTML = w || ""),
            _.type === "bullets" &&
              e.pagination.bullets.push(
                ...x.querySelectorAll(Di(_.bulletClass))
              );
        }),
        _.type !== "custom" && r("paginationRender", y[0]);
    }
    function f() {
      e.params.pagination = Yn(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const _ = e.params.pagination;
      if (!_.el) return;
      let v;
      typeof _.el == "string" && e.isElement && (v = e.el.querySelector(_.el)),
        !v &&
          typeof _.el == "string" &&
          (v = [...document.querySelectorAll(_.el)]),
        v || (v = _.el),
        !(!v || v.length === 0) &&
          (e.params.uniqueNavElements &&
            typeof _.el == "string" &&
            Array.isArray(v) &&
            v.length > 1 &&
            ((v = [...e.el.querySelectorAll(_.el)]),
            v.length > 1 && (v = v.find((y) => ji(y, ".swiper")[0] === e.el))),
          Array.isArray(v) && v.length === 1 && (v = v[0]),
          Object.assign(e.pagination, { el: v }),
          (v = ae(v)),
          v.forEach((y) => {
            _.type === "bullets" &&
              _.clickable &&
              y.classList.add(...(_.clickableClass || "").split(" ")),
              y.classList.add(_.modifierClass + _.type),
              y.classList.add(
                e.isHorizontal() ? _.horizontalClass : _.verticalClass
              ),
              _.type === "bullets" &&
                _.dynamicBullets &&
                (y.classList.add(`${_.modifierClass}${_.type}-dynamic`),
                (o = 0),
                _.dynamicMainBullets < 1 && (_.dynamicMainBullets = 1)),
              _.type === "progressbar" &&
                _.progressbarOpposite &&
                y.classList.add(_.progressbarOppositeClass),
              _.clickable && y.addEventListener("click", h),
              e.enabled || y.classList.add(_.lockClass);
          }));
    }
    function d() {
      const _ = e.params.pagination;
      if (u()) return;
      let v = e.pagination.el;
      v &&
        ((v = ae(v)),
        v.forEach((y) => {
          y.classList.remove(_.hiddenClass),
            y.classList.remove(_.modifierClass + _.type),
            y.classList.remove(
              e.isHorizontal() ? _.horizontalClass : _.verticalClass
            ),
            _.clickable &&
              (y.classList.remove(...(_.clickableClass || "").split(" ")),
              y.removeEventListener("click", h));
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((y) =>
            y.classList.remove(..._.bulletActiveClass.split(" "))
          );
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const _ = e.params.pagination;
      let { el: v } = e.pagination;
      (v = ae(v)),
        v.forEach((y) => {
          y.classList.remove(_.horizontalClass, _.verticalClass),
            y.classList.add(
              e.isHorizontal() ? _.horizontalClass : _.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.pagination.enabled === !1 ? D() : (f(), p(), m());
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
        let { el: _ } = e.pagination;
        _ &&
          ((_ = ae(_)),
          _.forEach((v) =>
            v.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      i("lock unlock", () => {
        m();
      }),
      i("click", (_, v) => {
        const y = v.target,
          w = ae(e.pagination.el);
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          w &&
          w.length > 0 &&
          !y.classList.contains(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && y === e.navigation.nextEl) ||
              (e.navigation.prevEl && y === e.navigation.prevEl))
          )
            return;
          const x = w[0].classList.contains(e.params.pagination.hiddenClass);
          r(x === !0 ? "paginationShow" : "paginationHide"),
            w.forEach((b) =>
              b.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const g = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: _ } = e.pagination;
        _ &&
          ((_ = ae(_)),
          _.forEach((v) =>
            v.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          f(),
          p(),
          m();
      },
      D = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: _ } = e.pagination;
        _ &&
          ((_ = ae(_)),
          _.forEach((v) =>
            v.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          d();
      };
    Object.assign(e.pagination, {
      enable: g,
      disable: D,
      render: p,
      update: m,
      init: f,
      destroy: d,
    });
  }
  function ud(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Xe();
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
      let L = c,
        A = (h - c) * M;
      k
        ? ((A = -A), A > 0 ? ((L = c - A), (A = 0)) : -A + c > h && (L = h + A))
        : A < 0
        ? ((L = c + A), (A = 0))
        : A + c > h && (L = h - A),
        e.isHorizontal()
          ? ((F.style.transform = `translate3d(${A}px, 0, 0)`),
            (F.style.width = `${L}px`))
          : ((F.style.transform = `translate3d(0px, ${A}px, 0)`),
            (F.style.height = `${L}px`)),
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
    function D(P) {
      const { scrollbar: k, rtlTranslate: F } = e,
        { el: R } = k;
      let I;
      (I =
        (g(P) -
          Rs(R)[e.isHorizontal() ? "left" : "top"] -
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
    function _(P) {
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
        D(P),
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
        D(P),
        (F.style.transitionDuration = "0ms"),
        (R.style.transitionDuration = "0ms"),
        (I.style.transitionDuration = "0ms"),
        r("scrollbarDragMove", P));
    }
    function y(P) {
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
          (u = Wi(() => {
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
        L = F.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!I) return;
      const A = P === "on" ? "addEventListener" : "removeEventListener";
      I[A]("pointerdown", _, M),
        n[A]("pointermove", v, M),
        n[A]("pointerup", y, L);
    }
    function x() {
      !e.params.scrollbar.el || !e.scrollbar.el || w("on");
    }
    function b() {
      !e.params.scrollbar.el || !e.scrollbar.el || w("off");
    }
    function T() {
      const { scrollbar: P, el: k } = e;
      e.params.scrollbar = Yn(
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
        ((I = R.querySelector(Di(e.params.scrollbar.dragClass))),
        I || ((I = Ft("div", e.params.scrollbar.dragClass)), R.append(I))),
        Object.assign(P, { el: R, dragEl: I }),
        F.draggable && x(),
        R &&
          R.classList[e.enabled ? "remove" : "add"](
            ...Ai(e.params.scrollbar.lockClass)
          );
    }
    function E() {
      const P = e.params.scrollbar,
        k = e.scrollbar.el;
      k &&
        k.classList.remove(
          ...Ai(e.isHorizontal() ? P.horizontalClass : P.verticalClass)
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
        e.params.scrollbar.enabled === !1 ? O() : (T(), d(), p());
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
            ...Ai(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        E();
      });
    const S = () => {
        e.el.classList.remove(...Ai(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...Ai(e.params.scrollbar.scrollbarDisabledClass)
            ),
          T(),
          d(),
          p();
      },
      O = () => {
        e.el.classList.add(...Ai(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...Ai(e.params.scrollbar.scrollbarDisabledClass)
            ),
          E();
      };
    Object.assign(e.scrollbar, {
      enable: S,
      disable: O,
      updateSize: d,
      setTranslate: p,
      init: T,
      destroy: E,
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
          D = u.getAttribute("data-swiper-parallax-rotate");
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
        let _ = `translate3d(${p}, ${f}, 0px)`;
        if (typeof d != "undefined" && d !== null) {
          const v = d - (d - 1) * (1 - Math.abs(l));
          _ += ` scale(${v})`;
        }
        if (D && typeof D != "undefined" && D !== null) {
          const v = D * l * -1;
          _ += ` rotate(${v}deg)`;
        }
        u.style.transform = _;
      },
      a = () => {
        const { el: u, slides: l, progress: c, snapGrid: h, isElement: m } = e,
          p = Qe(u, r);
        e.isElement && p.push(...Qe(e.hostEl, r)),
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
                .forEach((D) => {
                  n(D, g);
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
    const n = we();
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
    let D = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return D;
      },
      set(B) {
        if (D !== B) {
          const $ = f.imageEl,
            N = f.slideEl;
          r("zoomChange", B, $, N);
        }
        D = B;
      },
    });
    function _() {
      if (p.length < 2) return 1;
      const B = p[0].pageX,
        $ = p[0].pageY,
        N = p[1].pageX,
        W = p[1].pageY;
      return Math.sqrt(pt(N - B, 2) + pt(W - $, 2));
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
    function y() {
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
    function x(B) {
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
      if ((B.pointerType === "mouse" && p.splice(0, p.length), !x(B))) return;
      const $ = e.params.zoom;
      if (((h = !1), (m = !1), p.push(B), !(p.length < 2))) {
        if (((h = !0), (f.scaleStart = _()), !f.slideEl)) {
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
              ? (f.imageWrapEl = ji(f.imageEl, `.${$.containerClass}`)[0])
              : (f.imageWrapEl = void 0),
            !f.imageWrapEl)
          ) {
            f.imageEl = void 0;
            return;
          }
          f.maxRatio = v();
        }
        if (f.imageEl) {
          const [N, W] = y();
          (f.originX = N),
            (f.originY = W),
            (f.imageEl.style.transitionDuration = "0ms");
        }
        o = !0;
      }
    }
    function E(B) {
      if (!x(B)) return;
      const $ = e.params.zoom,
        N = e.zoom,
        W = p.findIndex((ce) => ce.pointerId === B.pointerId);
      W >= 0 && (p[W] = B),
        !(p.length < 2) &&
          ((m = !0),
          (f.scaleMove = _()),
          f.imageEl &&
            ((N.scale = (f.scaleMove / f.scaleStart) * a),
            N.scale > f.maxRatio &&
              (N.scale = f.maxRatio - 1 + pt(N.scale - f.maxRatio + 1, 0.5)),
            N.scale < $.minRatio &&
              (N.scale = $.minRatio + 1 - pt($.minRatio - N.scale + 1, 0.5)),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`)));
    }
    function S(B) {
      if (!x(B) || (B.pointerType === "mouse" && B.type === "pointerout"))
        return;
      const $ = e.params.zoom,
        N = e.zoom,
        W = p.findIndex((ce) => ce.pointerId === B.pointerId);
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
    let O;
    function P() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function k() {
      clearTimeout(O),
        (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
        (O = setTimeout(() => {
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
      if (!x(B) || !b(B)) return;
      const W = e.zoom;
      if (!f.imageEl) return;
      if (!d.isTouched || !f.slideEl) {
        N && L(B);
        return;
      }
      if (N) {
        L(B);
        return;
      }
      d.isMoved ||
        ((d.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
        (d.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
        (d.startX = On(f.imageWrapEl, "x") || 0),
        (d.startY = On(f.imageWrapEl, "y") || 0),
        (f.slideWidth = f.slideEl.offsetWidth),
        (f.slideHeight = f.slideEl.offsetHeight),
        (f.imageWrapEl.style.transitionDuration = "0ms"));
      const ce = d.width * W.scale,
        tt = d.height * W.scale;
      if (
        ((d.minX = Math.min(f.slideWidth / 2 - ce / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - tt / 2, 0)),
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
      const Ee = (W.scale - a) / (f.maxRatio - e.params.zoom.minRatio),
        { originX: J, originY: ne } = f;
      (d.currentX =
        d.touchesCurrent.x -
        d.touchesStart.x +
        d.startX +
        Ee * (d.width - J * 2)),
        (d.currentY =
          d.touchesCurrent.y -
          d.touchesStart.y +
          d.startY +
          Ee * (d.height - ne * 2)),
        d.currentX < d.minX &&
          (d.currentX = d.minX + 1 - pt(d.minX - d.currentX + 1, 0.8)),
        d.currentX > d.maxX &&
          (d.currentX = d.maxX - 1 + pt(d.currentX - d.maxX + 1, 0.8)),
        d.currentY < d.minY &&
          (d.currentY = d.minY + 1 - pt(d.minY - d.currentY + 1, 0.8)),
        d.currentY > d.maxY &&
          (d.currentY = d.maxY - 1 + pt(d.currentY - d.maxY + 1, 0.8)),
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
        ce = d.currentX + W,
        tt = g.y * N,
        Se = d.currentY + tt;
      g.x !== 0 && ($ = Math.abs((ce - d.currentX) / g.x)),
        g.y !== 0 && (N = Math.abs((Se - d.currentY) / g.y));
      const Ee = Math.max($, N);
      (d.currentX = ce), (d.currentY = Se);
      const J = d.width * B.scale,
        ne = d.height * B.scale;
      (d.minX = Math.min(f.slideWidth / 2 - J / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - ne / 2, 0)),
        (d.maxY = -d.minY),
        (d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
        (d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
        (f.imageWrapEl.style.transitionDuration = `${Ee}ms`),
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
    function L(B) {
      if (a <= 1 || !f.imageWrapEl || !x(B) || !b(B)) return;
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
      const W = (B.clientX - l.x) * c,
        ce = (B.clientY - l.y) * c,
        tt = d.width * a,
        Se = d.height * a,
        Ee = f.slideWidth,
        J = f.slideHeight,
        ne = Math.min(Ee / 2 - tt / 2, 0),
        _e = -ne,
        Ye = Math.min(J / 2 - Se / 2, 0),
        z = -Ye,
        $e = Math.max(Math.min(d.startX + W, _e), ne),
        ut = Math.max(Math.min(d.startY + ce, z), Ye);
      (f.imageWrapEl.style.transitionDuration = "0ms"),
        (f.imageWrapEl.style.transform = `translate3d(${$e}px, ${ut}px, 0)`),
        (l.x = B.clientX),
        (l.y = B.clientY),
        (d.startX = $e),
        (d.startY = ut),
        (d.currentX = $e),
        (d.currentY = ut);
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
              ? (f.slideEl = Qe(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (f.slideEl = e.slides[e.activeIndex]));
        let je = f.slideEl.querySelector(`.${N.containerClass}`);
        je &&
          (je = je.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = je),
          je
            ? (f.imageWrapEl = ji(f.imageEl, `.${N.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      if (!f.imageEl || !f.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        f.slideEl.classList.add(`${N.zoomedSlideClass}`);
      let W, ce, tt, Se, Ee, J, ne, _e, Ye, z, $e, ut, Ht, De, Yt, Qt, ti, Ae;
      typeof d.touchesStart.x == "undefined" && B
        ? ((W = B.pageX), (ce = B.pageY))
        : ((W = d.touchesStart.x), (ce = d.touchesStart.y));
      const Jt = a,
        pe = typeof B == "number" ? B : null;
      a === 1 &&
        pe &&
        ((W = void 0),
        (ce = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0));
      const Pt = v();
      ($.scale = pe || Pt),
        (a = pe || Pt),
        B && !(a === 1 && pe)
          ? ((ti = f.slideEl.offsetWidth),
            (Ae = f.slideEl.offsetHeight),
            (tt = Rs(f.slideEl).left + n.scrollX),
            (Se = Rs(f.slideEl).top + n.scrollY),
            (Ee = tt + ti / 2 - W),
            (J = Se + Ae / 2 - ce),
            (Ye = f.imageEl.offsetWidth || f.imageEl.clientWidth),
            (z = f.imageEl.offsetHeight || f.imageEl.clientHeight),
            ($e = Ye * $.scale),
            (ut = z * $.scale),
            (Ht = Math.min(ti / 2 - $e / 2, 0)),
            (De = Math.min(Ae / 2 - ut / 2, 0)),
            (Yt = -Ht),
            (Qt = -De),
            Jt > 0 &&
            pe &&
            typeof d.currentX == "number" &&
            typeof d.currentY == "number"
              ? ((ne = (d.currentX * $.scale) / Jt),
                (_e = (d.currentY * $.scale) / Jt))
              : ((ne = Ee * $.scale), (_e = J * $.scale)),
            ne < Ht && (ne = Ht),
            ne > Yt && (ne = Yt),
            _e < De && (_e = De),
            _e > Qt && (_e = Qt))
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
          ? (f.slideEl = Qe(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
          : (f.slideEl = e.slides[e.activeIndex]);
        let N = f.slideEl.querySelector(`.${$.containerClass}`);
        N &&
          (N = N.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = N),
          N
            ? (f.imageWrapEl = ji(f.imageEl, `.${$.containerClass}`)[0])
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
    function ye() {
      const B = e.zoom;
      if (B.enabled) return;
      B.enabled = !0;
      const { passiveListener: $, activeListenerWithCapture: N } = Q();
      e.wrapperEl.addEventListener("pointerdown", T, $),
        e.wrapperEl.addEventListener("pointermove", E, N),
        ["pointerup", "pointercancel", "pointerout"].forEach((W) => {
          e.wrapperEl.addEventListener(W, S, $);
        }),
        e.wrapperEl.addEventListener("pointermove", R, N);
    }
    function se() {
      const B = e.zoom;
      if (!B.enabled) return;
      B.enabled = !1;
      const { passiveListener: $, activeListenerWithCapture: N } = Q();
      e.wrapperEl.removeEventListener("pointerdown", T, $),
        e.wrapperEl.removeEventListener("pointermove", E, N),
        ["pointerup", "pointercancel", "pointerout"].forEach((W) => {
          e.wrapperEl.removeEventListener(W, S, $);
        }),
        e.wrapperEl.removeEventListener("pointermove", R, N);
    }
    i("init", () => {
      e.params.zoom.enabled && ye();
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
        enable: ye,
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
        let d, g, D;
        return (_, v) => {
          for (g = -1, d = _.length; d - g > 1; )
            (D = (d + g) >> 1), _[D] <= v ? (g = D) : (d = D);
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
        const D = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (n(g), (p = -e.controller.spline.interpolate(-D))),
          (!p || e.params.controller.by === "container") &&
            ((m =
              (g.maxTranslate() - g.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (Number.isNaN(m) || !Number.isFinite(m)) && (m = 1),
            (p = (D - e.minTranslate()) * m + g.minTranslate())),
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
              Wi(() => {
                d.updateAutoHeight();
              }),
            Kr(d.wrapperEl, () => {
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
      const L = r;
      L.length !== 0 && ((L.innerHTML = ""), (L.innerHTML = M));
    }
    function l(M) {
      const L = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(M).replace(/x/g, L);
    }
    function c(M) {
      (M = ae(M)),
        M.forEach((L) => {
          L.setAttribute("tabIndex", "0");
        });
    }
    function h(M) {
      (M = ae(M)),
        M.forEach((L) => {
          L.setAttribute("tabIndex", "-1");
        });
    }
    function m(M, L) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("role", L);
        });
    }
    function p(M, L) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("aria-roledescription", L);
        });
    }
    function f(M, L) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("aria-controls", L);
        });
    }
    function d(M, L) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("aria-label", L);
        });
    }
    function g(M, L) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("id", L);
        });
    }
    function D(M, L) {
      (M = ae(M)),
        M.forEach((A) => {
          A.setAttribute("aria-live", L);
        });
    }
    function _(M) {
      (M = ae(M)),
        M.forEach((L) => {
          L.setAttribute("aria-disabled", !0);
        });
    }
    function v(M) {
      (M = ae(M)),
        M.forEach((L) => {
          L.setAttribute("aria-disabled", !1);
        });
    }
    function y(M) {
      if (M.keyCode !== 13 && M.keyCode !== 32) return;
      const L = e.params.a11y,
        A = M.target;
      if (
        !(
          e.pagination &&
          e.pagination.el &&
          (A === e.pagination.el || e.pagination.el.contains(M.target)) &&
          !M.target.matches(Di(e.params.pagination.bulletClass))
        )
      ) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const C = ae(e.navigation.prevEl);
          ae(e.navigation.nextEl).includes(A) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? u(L.lastSlideMessage) : u(L.nextSlideMessage)),
            C.includes(A) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? u(L.firstSlideMessage) : u(L.prevSlideMessage));
        }
        e.pagination &&
          A.matches(Di(e.params.pagination.bulletClass)) &&
          A.click();
      }
    }
    function w() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: M, prevEl: L } = e.navigation;
      L && (e.isBeginning ? (_(L), h(L)) : (v(L), c(L))),
        M && (e.isEnd ? (_(M), h(M)) : (v(M), c(M)));
    }
    function x() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function b() {
      return x() && e.params.pagination.clickable;
    }
    function T() {
      const M = e.params.a11y;
      x() &&
        e.pagination.bullets.forEach((L) => {
          e.params.pagination.clickable &&
            (c(L),
            e.params.pagination.renderBullet ||
              (m(L, "button"),
              d(
                L,
                M.paginationBulletMessage.replace(/\{\{index\}\}/, jr(L) + 1)
              ))),
            L.matches(Di(e.params.pagination.bulletActiveClass))
              ? L.setAttribute("aria-current", "true")
              : L.removeAttribute("aria-current");
        });
    }
    const E = (M, L, A) => {
        c(M),
          M.tagName !== "BUTTON" &&
            (m(M, "button"), M.addEventListener("keydown", y)),
          d(M, A),
          f(M, L);
      },
      S = (M) => {
        a && a !== M.target && !a.contains(M.target) && (n = !0),
          (e.a11y.clicked = !0);
      },
      O = () => {
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
        const L = M.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!L || !e.slides.includes(L)) return;
        a = L;
        const A = e.slides.indexOf(L) === e.activeIndex,
          C =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(L);
        A ||
          C ||
          (M.sourceCapabilities && M.sourceCapabilities.firesTouchEvents) ||
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
      F = () => {
        const M = e.params.a11y;
        M.itemRoleDescriptionMessage &&
          p(e.slides, M.itemRoleDescriptionMessage),
          M.slideRole && m(e.slides, M.slideRole);
        const L = e.slides.length;
        M.slideLabelMessage &&
          e.slides.forEach((A, C) => {
            const Y = e.params.loop
                ? parseInt(A.getAttribute("data-swiper-slide-index"), 10)
                : C,
              Q = M.slideLabelMessage
                .replace(/\{\{index\}\}/, Y + 1)
                .replace(/\{\{slidesLength\}\}/, L);
            d(A, Q);
          });
      },
      R = () => {
        const M = e.params.a11y;
        e.el.append(r);
        const L = e.el;
        M.containerRoleDescriptionMessage &&
          p(L, M.containerRoleDescriptionMessage),
          M.containerMessage && d(L, M.containerMessage),
          M.containerRole && m(L, M.containerRole);
        const A = e.wrapperEl,
          C = M.id || A.getAttribute("id") || `swiper-wrapper-${l(16)}`,
          Y = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        g(A, C), D(A, Y), F();
        let { nextEl: Q, prevEl: ye } = e.navigation ? e.navigation : {};
        (Q = ae(Q)),
          (ye = ae(ye)),
          Q && Q.forEach((B) => E(B, C, M.nextSlideMessage)),
          ye && ye.forEach((B) => E(B, C, M.prevSlideMessage)),
          b() &&
            ae(e.pagination.el).forEach(($) => {
              $.addEventListener("keydown", y);
            }),
          Xe().addEventListener("visibilitychange", P),
          e.el.addEventListener("focus", k, !0),
          e.el.addEventListener("focus", k, !0),
          e.el.addEventListener("pointerdown", S, !0),
          e.el.addEventListener("pointerup", O, !0);
      };
    function I() {
      r && r.remove();
      let { nextEl: M, prevEl: L } = e.navigation ? e.navigation : {};
      (M = ae(M)),
        (L = ae(L)),
        M && M.forEach((C) => C.removeEventListener("keydown", y)),
        L && L.forEach((C) => C.removeEventListener("keydown", y)),
        b() &&
          ae(e.pagination.el).forEach((Y) => {
            Y.removeEventListener("keydown", y);
          }),
        Xe().removeEventListener("visibilitychange", P),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", k, !0),
          e.el.removeEventListener("pointerdown", S, !0),
          e.el.removeEventListener("pointerup", O, !0));
    }
    i("beforeInit", () => {
      (r = Ft("span", e.params.a11y.notificationClass)),
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
        const f = we();
        let d;
        p ? (d = new URL(p)) : (d = f.location);
        const g = d.pathname
            .slice(1)
            .split("/")
            .filter((y) => y !== ""),
          D = g.length,
          _ = g[D - 2],
          v = g[D - 1];
        return { key: _, value: v };
      },
      u = (p, f) => {
        const d = we();
        if (!r || !e.params.history.enabled) return;
        let g;
        e.params.url ? (g = new URL(e.params.url)) : (g = d.location);
        const D =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(`[data-swiper-slide-index="${f}"]`)
            : e.slides[f];
        let _ = a(D.getAttribute("data-history"));
        if (e.params.history.root.length > 0) {
          let y = e.params.history.root;
          y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)),
            (_ = `${y}/${p ? `${p}/` : ""}${_}`);
        } else g.pathname.includes(p) || (_ = `${p ? `${p}/` : ""}${_}`);
        e.params.history.keepQuery && (_ += g.search);
        const v = d.history.state;
        (v && v.value === _) ||
          (e.params.history.replaceState
            ? d.history.replaceState({ value: _ }, null, _)
            : d.history.pushState({ value: _ }, null, _));
      },
      l = (p, f, d) => {
        if (f)
          for (let g = 0, D = e.slides.length; g < D; g += 1) {
            const _ = e.slides[g];
            if (a(_.getAttribute("data-history")) === f) {
              const y = e.getSlideIndex(_);
              e.slideTo(y, p, d);
            }
          }
        else e.slideTo(0, p, d);
      },
      c = () => {
        (n = o(e.params.url)), l(e.params.speed, n.value, !1);
      },
      h = () => {
        const p = we();
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
        const p = we();
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
    const a = Xe(),
      o = we();
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
      D,
      _;
    function v(L) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (L.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", v),
          !(_ || (L.detail && L.detail.bySwiperTouchMove)) && S()));
    }
    const y = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (m = !0) : m && ((l = c), (m = !1));
        const L = e.autoplay.paused ? c : h + l - new Date().getTime();
        (e.autoplay.timeLeft = L),
          r("autoplayTimeLeft", L, L / u),
          (o = requestAnimationFrame(() => {
            y();
          }));
      },
      w = () => {
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
      x = (L) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(o), y();
        let A = typeof L == "undefined" ? e.params.autoplay.delay : L;
        (u = e.params.autoplay.delay), (l = e.params.autoplay.delay);
        const C = w();
        !Number.isNaN(C) &&
          C > 0 &&
          typeof L == "undefined" &&
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
                  x();
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
          x(),
          r("autoplayStart");
      },
      T = () => {
        (e.autoplay.running = !1),
          clearTimeout(a),
          cancelAnimationFrame(o),
          r("autoplayStop");
      },
      E = (L, A) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(a), L || (D = !0);
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
          D ? ((D = !1), x(c)) : x(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      O = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const L = Xe();
        L.visibilityState === "hidden" && ((D = !0), E(!0)),
          L.visibilityState === "visible" && S();
      },
      P = (L) => {
        L.pointerType === "mouse" &&
          ((D = !0), (_ = !0), !(e.animating || e.autoplay.paused) && E(!0));
      },
      k = (L) => {
        L.pointerType === "mouse" && ((_ = !1), e.autoplay.paused && S());
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
        Xe().addEventListener("visibilitychange", O);
      },
      M = () => {
        Xe().removeEventListener("visibilitychange", O);
      };
    i("init", () => {
      e.params.autoplay.enabled && (F(), I(), b());
    }),
      i("destroy", () => {
        R(), M(), e.autoplay.running && T();
      }),
      i("_freeModeStaticRelease", () => {
        (f || D) && S();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? T() : E(!0, !0);
      }),
      i("beforeTransitionStart", (L, A, C) => {
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
            (D = !1),
            (d = setTimeout(() => {
              (D = !0), (f = !0), E(!0);
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
      Object.assign(e.autoplay, { start: b, stop: T, pause: E, resume: S });
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
      } else if (Wr(l.swiper)) {
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
          Qe(
            c.slidesEl,
            `[data-swiper-slide-index="${e.realIndex + g}"]`
          ).forEach((D) => {
            D.classList.add(p);
          });
      else
        for (let g = 0; g < m; g += 1)
          c.slides[e.realIndex + g] &&
            c.slides[e.realIndex + g].classList.add(p);
      const f = e.params.thumbs.autoScrollOffset,
        d = f && !c.params.loop;
      if (e.realIndex !== c.realIndex || d) {
        const g = c.activeIndex;
        let D, _;
        if (c.params.loop) {
          const v = c.slides.find(
            (y) =>
              y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
          );
          (D = c.slides.indexOf(v)),
            (_ = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (D = e.realIndex), (_ = D > e.previousIndex ? "next" : "prev");
        d && (D += _ === "next" ? f : -1 * f),
          c.visibleSlidesIndexes &&
            c.visibleSlidesIndexes.indexOf(D) < 0 &&
            (c.params.centeredSlides
              ? D > g
                ? (D = D - Math.floor(h / 2) + 1)
                : (D = D + Math.floor(h / 2) - 1)
              : D > g && c.params.slidesPerGroup,
            c.slideTo(D, l ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const { thumbs: l } = e.params;
      if (!(!l || !l.swiper))
        if (typeof l.swiper == "string" || l.swiper instanceof HTMLElement) {
          const c = Xe(),
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
  function _d(s) {
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
          time: Xt(),
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
        g = Xt() - f.touchStartTime;
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
            S = T.position - E.position,
            O = T.time - E.time;
          (e.velocity = S / O),
            (e.velocity /= 2),
            Math.abs(e.velocity) < c.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (O > 150 || Xt() - T.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= c.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let D = 1e3 * c.freeMode.momentumRatio;
        const _ = e.velocity * D;
        let v = e.translate + _;
        m && (v = -v);
        let y = !1,
          w;
        const x = Math.abs(e.velocity) * 20 * c.freeMode.momentumBounceRatio;
        let b;
        if (v < e.maxTranslate())
          c.freeMode.momentumBounce
            ? (v + e.maxTranslate() < -x && (v = e.maxTranslate() - x),
              (w = e.maxTranslate()),
              (y = !0),
              (f.allowMomentumBounce = !0))
            : (v = e.maxTranslate()),
            c.loop && c.centeredSlides && (b = !0);
        else if (v > e.minTranslate())
          c.freeMode.momentumBounce
            ? (v - e.minTranslate() > x && (v = e.minTranslate() + x),
              (w = e.minTranslate()),
              (y = !0),
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
              ? (D = Math.abs((-v - e.translate) / e.velocity))
              : (D = Math.abs((v - e.translate) / e.velocity)),
            c.freeMode.sticky)
          ) {
            const T = Math.abs((m ? -v : v) - e.translate),
              E = e.slidesSizesGrid[e.activeIndex];
            T < E
              ? (D = c.speed)
              : T < 2 * E
              ? (D = c.speed * 1.5)
              : (D = c.speed * 2.5);
          }
        } else if (c.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        c.freeMode.momentumBounce && y
          ? (e.updateProgress(w),
            e.setTransition(D),
            e.setTranslate(v),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            Kr(h, () => {
              !e ||
                e.destroyed ||
                !f.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(c.speed),
                setTimeout(() => {
                  e.setTranslate(w),
                    Kr(h, () => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (i("_freeModeNoMomentumRelease"),
            e.updateProgress(v),
            e.setTransition(D),
            e.setTranslate(v),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              Kr(h, () => {
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
  function Dd(s) {
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
          { rows: D, fill: _ } = e.params.grid,
          v =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : d.length;
        (a = Math.floor(v / D)),
          Math.floor(v / D) === v / D ? (r = v) : (r = Math.ceil(v / D) * D),
          g !== "auto" && _ === "row" && (r = Math.max(r, g * D)),
          (n = r / D);
      },
      c = () => {
        e.slides &&
          e.slides.forEach((d) => {
            d.swiperSlideGridSet &&
              ((d.style.height = ""),
              (d.style[e.getDirectionLabel("margin-top")] = ""));
          });
      },
      h = (d, g, D) => {
        const { slidesPerGroup: _ } = e.params,
          v = u(),
          { rows: y, fill: w } = e.params.grid,
          x =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : D.length;
        let b, T, E;
        if (w === "row" && _ > 1) {
          const S = Math.floor(d / (_ * y)),
            O = d - y * _ * S,
            P = S === 0 ? _ : Math.min(Math.ceil((x - S * y * _) / y), _);
          (E = Math.floor(O / P)),
            (T = O - E * P + S * _),
            (b = T + (E * r) / y),
            (g.style.order = b);
        } else
          w === "column"
            ? ((T = Math.floor(d / y)),
              (E = d - T * y),
              (T > a || (T === a && E === y - 1)) &&
                ((E += 1), E >= y && ((E = 0), (T += 1))))
            : ((E = Math.floor(d / n)), (T = d - E * n));
        (g.row = E),
          (g.column = T),
          (g.style.height = `calc((100% - ${(y - 1) * v}px) / ${y})`),
          (g.style[e.getDirectionLabel("margin-top")] =
            E !== 0 ? v && `${v}px` : ""),
          (g.swiperSlideGridSet = !0);
      },
      m = (d, g) => {
        const { centeredSlides: D, roundLengths: _ } = e.params,
          v = u(),
          { rows: y } = e.params.grid;
        if (
          ((e.virtualSize = (d + v) * r),
          (e.virtualSize = Math.ceil(e.virtualSize / y) - v),
          e.params.cssMode ||
            (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
              e.virtualSize + v
            }px`),
          D)
        ) {
          const w = [];
          for (let x = 0; x < g.length; x += 1) {
            let b = g[x];
            _ && (b = Math.floor(b)), g[x] < e.virtualSize + g[0] && w.push(b);
          }
          g.splice(0, g.length), g.push(...w);
        }
      },
      p = () => {
        o = e.params.grid && e.params.grid.rows > 1;
      },
      f = () => {
        const { params: d, el: g } = e,
          D = d.grid && d.grid.rows > 1;
        o && !D
          ? (g.classList.remove(
              `${d.containerModifierClass}grid`,
              `${d.containerModifierClass}grid-column`
            ),
            (a = 1),
            e.emitContainerClasses())
          : !o &&
            D &&
            (g.classList.add(`${d.containerModifierClass}grid`),
            d.grid.fill === "column" &&
              g.classList.add(`${d.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          (o = D);
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
  function yd(s) {
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
  function Ed() {
    const s = this,
      e = [];
    for (let t = 0; t < s.slides.length; t += 1) e.push(t);
    s.removeSlide(e);
  }
  function xd(s) {
    let { swiper: e } = s;
    Object.assign(e, {
      appendSlide: yd.bind(e),
      prependSlide: wd.bind(e),
      addSlide: bd.bind(e),
      removeSlide: Sd.bind(e),
      removeAllSlides: Ed.bind(e),
    });
  }
  function yr(s) {
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
  function Zr(s, e) {
    const t = Ui(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function Ns(s) {
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
          Kr(l, () => {
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
              f = Zr(o, l);
            (f.style.opacity = p),
              (f.style.transform = `translate3d(${h}px, ${m}px, 0px)`);
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((u) => Ui(u));
          o.forEach((u) => {
            u.style.transitionDuration = `${a}ms`;
          }),
            Ns({ swiper: e, duration: a, transformElements: o, allSlides: !0 });
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
        ((h = Ft(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            c ? "left" : "top"
          }`.split(" ")
        )),
        u.append(h)),
        m ||
          ((m = Ft(
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
          g = Bs(e),
          D = e.params.cubeEffect,
          _ = e.isHorizontal(),
          v = e.virtual && e.params.virtual.enabled;
        let y = 0,
          w;
        D.shadow &&
          (_
            ? ((w = e.wrapperEl.querySelector(".swiper-cube-shadow")),
              w ||
                ((w = Ft("div", "swiper-cube-shadow")), e.wrapperEl.append(w)),
              (w.style.height = `${h}px`))
            : ((w = u.querySelector(".swiper-cube-shadow")),
              w || ((w = Ft("div", "swiper-cube-shadow")), u.append(w))));
        for (let b = 0; b < c.length; b += 1) {
          const T = c[b];
          let E = b;
          v && (E = parseInt(T.getAttribute("data-swiper-slide-index"), 10));
          let S = E * 90,
            O = Math.floor(S / 360);
          p && ((S = -S), (O = Math.floor(-S / 360)));
          const P = Math.max(Math.min(T.progress, 1), -1);
          let k = 0,
            F = 0,
            R = 0;
          E % 4 === 0
            ? ((k = -O * 4 * f), (R = 0))
            : (E - 1) % 4 === 0
            ? ((k = 0), (R = -O * 4 * f))
            : (E - 2) % 4 === 0
            ? ((k = f + O * 4 * f), (R = f))
            : (E - 3) % 4 === 0 && ((k = -f), (R = 3 * f + f * 4 * O)),
            p && (k = -k),
            _ || ((F = k), (k = 0));
          const I = `rotateX(${g(_ ? 0 : -S)}deg) rotateY(${g(
            _ ? S : 0
          )}deg) translate3d(${k}px, ${F}px, ${R}px)`;
          P <= 1 &&
            P > -1 &&
            ((y = E * 90 + P * 90), p && (y = -E * 90 - P * 90)),
            (T.style.transform = I),
            D.slideShadows && r(T, P, _);
        }
        if (
          ((l.style.transformOrigin = `50% 50% -${f / 2}px`),
          (l.style["-webkit-transform-origin"] = `50% 50% -${f / 2}px`),
          D.shadow)
        )
          if (_)
            w.style.transform = `translate3d(0px, ${
              h / 2 + D.shadowOffset
            }px, ${-h / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
              D.shadowScale
            })`;
          else {
            const b = Math.abs(y) - Math.floor(Math.abs(y) / 90) * 90,
              T =
                1.5 -
                (Math.sin((b * 2 * Math.PI) / 360) / 2 +
                  Math.cos((b * 2 * Math.PI) / 360) / 2),
              E = D.shadowScale,
              S = D.shadowScale / T,
              O = D.shadowOffset;
            w.style.transform = `scale3d(${E}, 1, ${S}) translate3d(0px, ${
              m / 2 + O
            }px, ${-m / 2 / S}px) rotateX(-89.99deg)`;
          }
        const x =
          (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -f / 2 : 0;
        (l.style.transform = `translate3d(0px,0,${x}px) rotateX(${g(
          e.isHorizontal() ? 0 : y
        )}deg) rotateY(${g(e.isHorizontal() ? -y : 0)}deg)`),
          l.style.setProperty("--swiper-cube-translate-z", `${x}px`);
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
  function wr(s, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
        s ? ` swiper-slide-shadow-${s}` : ""
      }`,
      r = Ui(e);
    let n = r.querySelector(`.${i.split(" ").join(".")}`);
    return n || ((n = Ft("div", i.split(" "))), r.append(n)), n;
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
      c || (c = wr("flip", u, e.isHorizontal() ? "left" : "top")),
        h || (h = wr("flip", u, e.isHorizontal() ? "right" : "bottom")),
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
          h = Bs(e);
        for (let m = 0; m < u.length; m += 1) {
          const p = u[m];
          let f = p.progress;
          e.params.flipEffect.limitRotation &&
            (f = Math.max(Math.min(p.progress, 1), -1));
          const d = p.swiperSlideOffset;
          let D = -180 * f,
            _ = 0,
            v = e.params.cssMode ? -d - e.translate : -d,
            y = 0;
          e.isHorizontal()
            ? l && (D = -D)
            : ((y = v), (v = 0), (_ = -D), (D = 0)),
            (p.style.zIndex = -Math.abs(Math.round(f)) + u.length),
            c.slideShadows && r(p, f);
          const w = `translate3d(${v}px, ${y}px, 0px) rotateX(${h(
              _
            )}deg) rotateY(${h(D)}deg)`,
            x = Zr(c, p);
          x.style.transform = w;
        }
      },
      setTransition: (u) => {
        const l = e.slides.map((c) => Ui(c));
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
          Ns({ swiper: e, duration: u, transformElements: l });
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
            g = Bs(e);
          for (let D = 0, _ = u.length; D < _; D += 1) {
            const v = u[D],
              y = l[D],
              w = v.swiperSlideOffset,
              x = (p - w - y / 2) / y,
              b =
                typeof c.modifier == "function"
                  ? c.modifier(x)
                  : x * c.modifier;
            let T = h ? f * b : 0,
              E = h ? 0 : f * b,
              S = -d * Math.abs(b),
              O = c.stretch;
            typeof O == "string" &&
              O.indexOf("%") !== -1 &&
              (O = (parseFloat(c.stretch) / 100) * y);
            let P = h ? 0 : O * b,
              k = h ? O * b : 0,
              F = 1 - (1 - c.scale) * Math.abs(b);
            Math.abs(k) < 0.001 && (k = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(S) < 0.001 && (S = 0),
              Math.abs(T) < 0.001 && (T = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(F) < 0.001 && (F = 0);
            const R = `translate3d(${k}px,${P}px,${S}px)  rotateX(${g(
                E
              )}deg) rotateY(${g(T)}deg) scale(${F})`,
              I = Zr(c, v);
            if (
              ((I.style.transform = R),
              (v.style.zIndex = -Math.abs(Math.round(b)) + 1),
              c.slideShadows)
            ) {
              let M = h
                  ? v.querySelector(".swiper-slide-shadow-left")
                  : v.querySelector(".swiper-slide-shadow-top"),
                L = h
                  ? v.querySelector(".swiper-slide-shadow-right")
                  : v.querySelector(".swiper-slide-shadow-bottom");
              M || (M = wr("coverflow", v, h ? "left" : "top")),
                L || (L = wr("coverflow", v, h ? "right" : "bottom")),
                M && (M.style.opacity = b > 0 ? b : 0),
                L && (L.style.opacity = -b > 0 ? -b : 0);
            }
          }
        },
        setTransition: (a) => {
          e.slides
            .map((u) => Ui(u))
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
    yr({
      effect: "creative",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: o, wrapperEl: u, slidesSizesGrid: l } = e,
          c = e.params.creativeEffect,
          { progressMultiplier: h } = c,
          m = e.params.centeredSlides,
          p = Bs(e);
        if (m) {
          const f = l[0] / 2 - e.params.slidesOffsetBefore || 0;
          u.style.transform = `translateX(calc(50% - ${f}px))`;
        }
        for (let f = 0; f < o.length; f += 1) {
          const d = o[f],
            g = d.progress,
            D = Math.min(
              Math.max(d.progress, -c.limitProgress),
              c.limitProgress
            );
          let _ = D;
          m ||
            (_ = Math.min(
              Math.max(d.originalProgress, -c.limitProgress),
              c.limitProgress
            ));
          const v = d.swiperSlideOffset,
            y = [e.params.cssMode ? -v - e.translate : -v, 0, 0],
            w = [0, 0, 0];
          let x = !1;
          e.isHorizontal() || ((y[1] = y[0]), (y[0] = 0));
          let b = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          D < 0 ? ((b = c.next), (x = !0)) : D > 0 && ((b = c.prev), (x = !0)),
            y.forEach((F, R) => {
              y[R] = `calc(${F}px + (${r(b.translate[R])} * ${Math.abs(
                D * h
              )}))`;
            }),
            w.forEach((F, R) => {
              let I = b.rotate[R] * Math.abs(D * h);
              w[R] = I;
            }),
            (d.style.zIndex = -Math.abs(Math.round(g)) + o.length);
          const T = y.join(", "),
            E = `rotateX(${p(w[0])}deg) rotateY(${p(w[1])}deg) rotateZ(${p(
              w[2]
            )}deg)`,
            S =
              _ < 0
                ? `scale(${1 + (1 - b.scale) * _ * h})`
                : `scale(${1 - (1 - b.scale) * _ * h})`,
            O =
              _ < 0 ? 1 + (1 - b.opacity) * _ * h : 1 - (1 - b.opacity) * _ * h,
            P = `translate3d(${T}) ${E} ${S}`;
          if ((x && b.shadow) || !x) {
            let F = d.querySelector(".swiper-slide-shadow");
            if ((!F && b.shadow && (F = wr("creative", d)), F)) {
              const R = c.shadowPerProgress ? D * (1 / c.limitProgress) : D;
              F.style.opacity = Math.min(Math.max(Math.abs(R), 0), 1);
            }
          }
          const k = Zr(c, d);
          (k.style.transform = P),
            (k.style.opacity = O),
            b.origin && (k.style.transformOrigin = b.origin);
        }
      },
      setTransition: (o) => {
        const u = e.slides.map((l) => Ui(l));
        u.forEach((l) => {
          (l.style.transitionDuration = `${o}ms`),
            l.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
              c.style.transitionDuration = `${o}ms`;
            });
        }),
          Ns({ swiper: e, duration: o, transformElements: u, allSlides: !0 });
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
            let D = f.swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (D -= a[0].swiperSlideOffset);
            let _ = e.params.cssMode ? -D - e.translate : -D,
              v = 0;
            const y = -100 * Math.abs(g);
            let w = 1,
              x = -l.perSlideRotate * g,
              b = l.perSlideOffset - Math.abs(g) * 0.75;
            const T =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p,
              E =
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
            if (E || S) {
              const F = pt(1 - Math.abs((Math.abs(g) - 0.5) / 0.5), 0.5);
              (x += -28 * g * F),
                (w += -0.5 * F),
                (b += 96 * F),
                (v = `${-25 * F * Math.abs(g)}%`);
            }
            if (
              (g < 0
                ? (_ = `calc(${_}px ${u ? "-" : "+"} (${b * Math.abs(g)}%))`)
                : g > 0
                ? (_ = `calc(${_}px ${u ? "-" : "+"} (-${b * Math.abs(g)}%))`)
                : (_ = `${_}px`),
              !e.isHorizontal())
            ) {
              const F = v;
              (v = _), (_ = F);
            }
            const O = g < 0 ? `${1 + (1 - w) * g}` : `${1 - (1 - w) * g}`,
              P = `
        translate3d(${_}, ${v}, ${y}px)
        rotateZ(${l.rotate ? (u ? -x : x) : 0}deg)
        scale(${O})
      `;
            if (l.slideShadows) {
              let F = f.querySelector(".swiper-slide-shadow");
              F || (F = wr("cards", f)),
                F &&
                  (F.style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            f.style.zIndex = -Math.abs(Math.round(d)) + a.length;
            const k = Zr(l, f);
            k.style.transform = P;
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((u) => Ui(u));
          o.forEach((u) => {
            (u.style.transitionDuration = `${a}ms`),
              u.querySelectorAll(".swiper-slide-shadow").forEach((l) => {
                l.style.transitionDuration = `${a}ms`;
              });
          }),
            Ns({ swiper: e, duration: a, transformElements: o });
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
  const Ld = [
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
    _d,
    Dd,
    xd,
    Td,
    Cd,
    Md,
    Pd,
    Ad,
    Fd,
  ];
  bt.use(Ld);
  class Od {
    constructor() {
      this.swiper = new bt("[swiper='clinic-card']", {
        direction: "horizontal",
        slidesPerView: 2.8,
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
          480: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 2.8 },
          1280: { slidesPerView: 2.8 },
          1440: { slidesPerView: 2.8 },
        },
      });
    }
  }
  function qn() {
    new Od();
  }
  function yi(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function bo(s, e) {
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
   */ var Lt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    br = { duration: 0.5, overwrite: !1, delay: 0 },
    Xn,
    Je,
    be,
    Gt = 1e8,
    he = 1 / Gt,
    Gn = Math.PI * 2,
    kd = Gn / 4,
    Id = 0,
    So = Math.sqrt,
    zd = Math.cos,
    Rd = Math.sin,
    Ge = function (e) {
      return typeof e == "string";
    },
    Pe = function (e) {
      return typeof e == "function";
    },
    wi = function (e) {
      return typeof e == "number";
    },
    Wn = function (e) {
      return typeof e == "undefined";
    },
    ai = function (e) {
      return typeof e == "object";
    },
    St = function (e) {
      return e !== !1;
    },
    Un = function () {
      return typeof window != "undefined";
    },
    Vs = function (e) {
      return Pe(e) || Ge(e);
    },
    Eo =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    st = Array.isArray,
    jn = /(?:-?\.?\d|\.)+/gi,
    xo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Sr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Kn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    To = /[+-]=-?[.\d]+/,
    Co = /[^,'"\[\]\s]+/gi,
    Bd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Te,
    oi,
    Zn,
    Qn,
    Ot = {},
    Hs = {},
    Mo,
    Po = function (e) {
      return (Hs = xr(e, Ot)) && Tt;
    },
    Jn = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Qr = function (e, t) {
      return !t && console.warn(e);
    },
    Ao = function (e, t) {
      return (e && (Ot[e] = t) && Hs && (Hs[e] = t)) || Ot;
    },
    Jr = function () {
      return 0;
    },
    $d = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ys = { suppressEvents: !0, kill: !1 },
    Nd = { suppressEvents: !0 },
    ea = {},
    Li = [],
    ta = {},
    Fo,
    kt = {},
    ia = {},
    Lo = 30,
    qs = [],
    ra = "",
    sa = function (e) {
      var t = e[0],
        i,
        r;
      if ((ai(t) || Pe(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = qs.length; r-- && !qs[r].targetTest(t); );
        i = qs[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new ol(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    Ki = function (e) {
      return e._gsap || sa(Ut(e))[0]._gsap;
    },
    Oo = function (e, t, i) {
      return (i = e[t]) && Pe(i)
        ? e[t]()
        : (Wn(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Et = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Le = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    ze = function (e) {
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
    Vd = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    Xs = function () {
      var e = Li.length,
        t = Li.slice(0),
        i,
        r;
      for (ta = {}, Li.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    ko = function (e, t, i, r) {
      Li.length && !Je && Xs(),
        e.render(t, i, Je && t < 0 && (e._initted || e._startAt)),
        Li.length && !Je && Xs();
    },
    Io = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(Co).length < 2
        ? t
        : Ge(e)
        ? e.trim()
        : e;
    },
    zo = function (e) {
      return e;
    },
    It = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Hd = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    xr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Ro = function s(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = ai(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    Gs = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    es = function (e) {
      var t = e.parent || Te,
        i = e.keyframes ? Hd(st(e.keyframes)) : It;
      if (St(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    Yd = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    Bo = function (e, t, i, r, n) {
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
    Ws = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var n = t._prev,
        a = t._next;
      n ? (n._next = a) : e[i] === t && (e[i] = a),
        a ? (a._prev = n) : e[r] === t && (e[r] = n),
        (t._next = t._prev = t.parent = null);
    },
    Oi = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    Zi = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    qd = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    na = function (e, t, i, r) {
      return (
        e._startAt &&
        (Je
          ? e._startAt.revert(Ys)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    Xd = function s(e) {
      return !e || (e._ts && s(e.parent));
    },
    $o = function (e) {
      return e._repeat ? Tr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Tr = function (e, t) {
      var i = Math.floor((e = ze(e / t)));
      return e && i === e ? i - 1 : i;
    },
    Us = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    js = function (e) {
      return (e._end = ze(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || he) || 0)
      ));
    },
    Ks = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = ze(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          js(e),
          i._dirty || Zi(i, e)),
        e
      );
    },
    No = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = Us(e.rawTime(), t)),
          (!t._dur || is(0, t.totalDuration(), i) - t._tTime > he) &&
            t.render(i, !0)),
        Zi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -he;
      }
    },
    li = function (e, t, i, r) {
      return (
        t.parent && Oi(t),
        (t._start = ze(
          (wi(i) ? i : i || e !== Te ? Wt(e, i, t) : e._time) + t._delay
        )),
        (t._end = ze(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        Bo(e, t, "_first", "_last", e._sort ? "_start" : 0),
        aa(t) || (e._recent = t),
        r || No(e, t),
        e._ts < 0 && Ks(e, e._tTime),
        e
      );
    },
    Vo = function (e, t) {
      return (
        (Ot.ScrollTrigger || Jn("scrollTrigger", t)) &&
        Ot.ScrollTrigger.create(t, e)
      );
    },
    Ho = function (e, t, i, r, n) {
      if ((ma(e, t, n), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Je &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Fo !== Rt.frame
      )
        return Li.push(e), (e._lazy = [n, r]), 1;
    },
    Gd = function s(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
    },
    aa = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Wd = function (e, t, i, r) {
      var n = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && Gd(e) && !(!e._initted && aa(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !aa(e))))
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
          ((u = is(0, e._tDur, t)),
          (c = Tr(u, o)),
          e._yoyo && c & 1 && (a = 1 - a),
          c !== Tr(e._tTime, o) &&
            ((n = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== n || Je || r || e._zTime === he || (!t && e._zTime))
      ) {
        if (!e._initted && Ho(e, t, r, i, u)) return;
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
        t < 0 && na(e, t, i, !0),
          e._onUpdate && !i && zt(e, "onUpdate"),
          u && e._repeat && !i && e.parent && zt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && Oi(e, 1),
            !i &&
              !Je &&
              (zt(e, a ? "onComplete" : "onReverseComplete", !0),
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
    Cr = function (e, t, i, r) {
      var n = e._repeat,
        a = ze(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = n ? (n < 0 ? 1e10 : ze(a * (n + 1) + e._rDelay * n)) : a),
        o > 0 && !r && Ks(e, (e._tTime = e._tDur * o)),
        e.parent && js(e),
        i || Zi(e.parent, e),
        e
      );
    },
    Yo = function (e) {
      return e instanceof mt ? Zi(e) : Cr(e, e._dur);
    },
    jd = { _start: 0, endTime: Jr, totalDuration: Jr },
    Wt = function s(e, t, i) {
      var r = e.labels,
        n = e._recent || jd,
        a = e.duration() >= Gt ? n.endTime(!1) : e._dur,
        o,
        u,
        l;
      return Ge(t) && (isNaN(t) || t in r)
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
              l && i && (u = (u / 100) * (st(i) ? i[0] : i).totalDuration()),
              o > 1 ? s(e, t.substr(0, o - 1), i) + u : a + u))
        : t == null
        ? a
        : +t;
    },
    ts = function (e, t, i) {
      var r = wi(t[1]),
        n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[n],
        o,
        u;
      if ((r && (a.duration = t[1]), (a.parent = i), e)) {
        for (o = a, u = i; u && !("immediateRender" in o); )
          (o = u.vars.defaults || {}), (u = St(u.vars.inherit) && u.parent);
        (a.immediateRender = St(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[n - 1]);
      }
      return new Re(t[0], a, t[n + 1]);
    },
    ki = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    is = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    nt = function (e, t) {
      return !Ge(e) || !(t = Bd.exec(e)) ? "" : t[1];
    },
    Kd = function (e, t, i) {
      return ki(i, function (r) {
        return is(e, t, r);
      });
    },
    oa = [].slice,
    qo = function (e, t) {
      return (
        e &&
        ai(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && ai(e[0]))) &&
        !e.nodeType &&
        e !== oi
      );
    },
    Zd = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var n;
          return (Ge(r) && !t) || qo(r, 1)
            ? (n = i).push.apply(n, Ut(r))
            : i.push(r);
        }) || i
      );
    },
    Ut = function (e, t, i) {
      return be && !t && be.selector
        ? be.selector(e)
        : Ge(e) && !i && (Zn || !Pr())
        ? oa.call((t || Qn).querySelectorAll(e), 0)
        : st(e)
        ? Zd(e, i)
        : qo(e)
        ? oa.call(e, 0)
        : e
        ? [e]
        : [];
    },
    la = function (e) {
      return (
        (e = Ut(e)[0] || Qr("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Ut(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? Qr("Invalid scope") || Qn.createElement("div")
              : e
          );
        }
      );
    },
    Xo = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Go = function (e) {
      if (Pe(e)) return e;
      var t = ai(e) ? e : { each: e },
        i = Qi(t.ease),
        r = t.from || 0,
        n = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        u = isNaN(r) || o,
        l = t.axis,
        c = r,
        h = r;
      return (
        Ge(r)
          ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && u && ((c = r[0]), (h = r[1])),
        function (m, p, f) {
          var d = (f || t).length,
            g = a[d],
            D,
            _,
            v,
            y,
            w,
            x,
            b,
            T,
            E;
          if (!g) {
            if (((E = t.grid === "auto" ? 0 : (t.grid || [1, Gt])[1]), !E)) {
              for (
                b = -Gt;
                b < (b = f[E++].getBoundingClientRect().left) && E < d;

              );
              E < d && E--;
            }
            for (
              g = a[d] = [],
                D = u ? Math.min(E, d) * c - 0.5 : r % E,
                _ = E === Gt ? 0 : u ? (d * h) / E - 0.5 : (r / E) | 0,
                b = 0,
                T = Gt,
                x = 0;
              x < d;
              x++
            )
              (v = (x % E) - D),
                (y = _ - ((x / E) | 0)),
                (g[x] = w =
                  l ? Math.abs(l === "y" ? y : v) : So(v * v + y * y)),
                w > b && (b = w),
                w < T && (T = w);
            r === "random" && Xo(g),
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
              (g.b = d < 0 ? n - d : n),
              (g.u = nt(t.amount || t.each) || 0),
              (i = i && d < 0 ? sl(i) : i);
          }
          return (
            (d = (g[m] - g.min) / g.max || 0),
            ze(g.b + (i ? i(d) : d) * g.v) + g.u
          );
        }
      );
    },
    ua = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = ze(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (wi(i) ? 0 : nt(i));
      };
    },
    Wo = function (e, t) {
      var i = st(e),
        r,
        n;
      return (
        !i &&
          ai(e) &&
          ((r = i = e.radius || Gt),
          e.values
            ? ((e = Ut(e.values)), (n = !wi(e[0])) && (r *= r))
            : (e = ua(e.increment))),
        ki(
          t,
          i
            ? Pe(e)
              ? function (a) {
                  return (n = e(a)), Math.abs(n - a) <= r ? n : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(n ? a.x : a),
                      u = parseFloat(n ? a.y : 0),
                      l = Gt,
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
                    n || c === a || wi(a) ? c : c + nt(a)
                  );
                }
            : ua(e)
        )
      );
    },
    Uo = function (e, t, i, r) {
      return ki(st(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
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
        return e(parseFloat(i)) + (t || nt(i));
      };
    },
    ef = function (e, t, i) {
      return Ko(e, t, 0, 1, i);
    },
    jo = function (e, t, i) {
      return ki(i, function (r) {
        return e[~~t(r)];
      });
    },
    tf = function s(e, t, i) {
      var r = t - e;
      return st(e)
        ? jo(e, s(0, e.length), t)
        : ki(i, function (n) {
            return ((r + ((n - e) % r)) % r) + e;
          });
    },
    rf = function s(e, t, i) {
      var r = t - e,
        n = r * 2;
      return st(e)
        ? jo(e, s(0, e.length - 1), t)
        : ki(i, function (a) {
            return (a = (n + ((a - e) % n)) % n || 0), e + (a > r ? n - a : a);
          });
    },
    rs = function (e) {
      for (var t = 0, i = "", r, n, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (n = e.substr(r + 7, a - r - 7).match(o ? Co : jn)),
          (i +=
            e.substr(t, r - t) +
            Uo(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    Ko = function (e, t, i, r, n) {
      var a = t - e,
        o = r - i;
      return ki(n, function (u) {
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
        var a = Ge(e),
          o = {},
          u,
          l,
          c,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (st(e) && !st(t)) {
          for (c = [], h = e.length, m = h - 2, l = 1; l < h; l++)
            c.push(s(e[l - 1], e[l]));
          h--,
            (n = function (f) {
              f *= h;
              var d = Math.min(m, ~~f);
              return c[d](f - d);
            }),
            (i = t);
        } else r || (e = xr(st(e) ? [] : {}, e));
        if (!c) {
          for (u in t) pa.call(o, e, u, "get", t[u]);
          n = function (f) {
            return _a(f, o) || (a ? e.p : e);
          };
        }
      }
      return ki(i, n);
    },
    Zo = function (e, t, i) {
      var r = e.labels,
        n = Gt,
        a,
        o,
        u;
      for (a in r)
        (o = r[a] - t),
          o < 0 == !!i && o && n > (o = Math.abs(o)) && ((u = a), (n = o));
      return u;
    },
    zt = function (e, t, i) {
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
          i && Li.length && Xs(),
          o && (be = o),
          (c = u ? n.apply(l, u) : n.call(l)),
          (be = a),
          c
        );
    },
    ss = function (e) {
      return (
        Oi(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Je),
        e.progress() < 1 && zt(e, "onInterrupt"),
        e
      );
    },
    Mr,
    Qo = [],
    Jo = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Un() || e.headless)) {
          var t = e.name,
            i = Pe(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            n = {
              init: Jr,
              render: _a,
              add: pa,
              kill: yf,
              modifier: Df,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: va,
              aliases: {},
              register: 0,
            };
          if ((Pr(), e !== r)) {
            if (kt[t]) return;
            It(r, It(Gs(e, n), a)),
              xr(r.prototype, xr(n, Gs(e, a))),
              (kt[(r.prop = t)] = r),
              e.targetTest && (qs.push(r), (ea[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Ao(t, r), e.register && e.register(Tt, r, xt);
        } else Qo.push(e);
    },
    me = 255,
    ns = {
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
    ca = function (e, t, i) {
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
    el = function (e, t, i) {
      var r = e ? (wi(e) ? [e >> 16, (e >> 8) & me, e & me] : 0) : ns.black,
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
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ns[e]))
          r = ns[e];
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
          if (((r = f = e.match(jn)), !t))
            (u = (+r[0] % 360) / 360),
              (l = +r[1] / 100),
              (c = +r[2] / 100),
              (a = c <= 0.5 ? c * (l + 1) : c + l - c * l),
              (n = c * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = ca(u + 1 / 3, n, a)),
              (r[1] = ca(u, n, a)),
              (r[2] = ca(u - 1 / 3, n, a));
          else if (~e.indexOf("="))
            return (r = e.match(xo)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(jn) || ns.transparent;
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
    tl = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(Ii).forEach(function (n) {
          var a = n.match(Sr) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    il = function (e, t, i) {
      var r = "",
        n = (e + r).match(Ii),
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
            (m = el(m, t, 1)) &&
            a +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((c = tl(e)), (u = i.c), u.join(r) !== c.c.join(r)))
      )
        for (l = e.replace(Ii, "1").split(Sr), h = l.length - 1; o < h; o++)
          r +=
            l[o] +
            (~u.indexOf(o)
              ? n.shift() || a + "0,0,0,0)"
              : (c.length ? c : n.length ? n : i).shift());
      if (!l)
        for (l = e.split(Ii), h = l.length - 1; o < h; o++) r += l[o] + n[o];
      return r + l[h];
    },
    Ii = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in ns) s += "|" + e + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    nf = /hsl[a]?\(/,
    rl = function (e) {
      var t = e.join(" "),
        i;
      if (((Ii.lastIndex = 0), Ii.test(t)))
        return (
          (i = nf.test(t)),
          (e[1] = il(e[1], i)),
          (e[0] = il(e[0], i, tl(e[1]))),
          !0
        );
    },
    as,
    Rt = (function () {
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
          var D = s() - r,
            _ = g === !0,
            v,
            y,
            w,
            x;
          if (
            ((D > e || D < 0) && (i += D - t),
            (r += D),
            (w = r - i),
            (v = w - a),
            (v > 0 || _) &&
              ((x = ++h.frame),
              (m = w - h.time * 1e3),
              (h.time = w = w / 1e3),
              (a += v + (v >= n ? 4 : n - v)),
              (y = 1)),
            _ || (u = l(d)),
            y)
          )
            for (p = 0; p < o.length; p++) o[p](w, m, x, g);
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
            Mo &&
              (!Zn &&
                Un() &&
                ((oi = Zn = window),
                (Qn = oi.document || {}),
                (Ot.gsap = Tt),
                (oi.gsapVersions || (oi.gsapVersions = [])).push(Tt.version),
                Po(Hs || oi.GreenSockGlobals || (!oi.gsap && oi) || {}),
                Qo.forEach(Jo)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              u && h.sleep(),
              (l =
                c ||
                function (g) {
                  return setTimeout(g, (a - h.time * 1e3 + 1) | 0);
                }),
              (as = 1),
              f(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(u), (as = 0), (l = Jr);
          },
          lagSmoothing: function (g, D) {
            (e = g || 1 / 0), (t = Math.min(D || 33, e));
          },
          fps: function (g) {
            (n = 1e3 / (g || 240)), (a = h.time * 1e3 + n);
          },
          add: function (g, D, _) {
            var v = D
              ? function (y, w, x, b) {
                  g(y, w, x, b), h.remove(v);
                }
              : g;
            return h.remove(g), o[_ ? "unshift" : "push"](v), Pr(), v;
          },
          remove: function (g, D) {
            ~(D = o.indexOf(g)) && o.splice(D, 1) && p >= D && p--;
          },
          _listeners: o,
        }),
        h
      );
    })(),
    Pr = function () {
      return !as && Rt.wake();
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
            ~e.indexOf("{") ? [lf(t[1])] : uf(e).split(",").map(Io)
          )
        : le._CE && af.test(e)
        ? le._CE("", e)
        : i;
    },
    sl = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    nl = function s(e, t) {
      for (var i = e._first, r; i; )
        i instanceof mt
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
    Qi = function (e, t) {
      return (e && (Pe(e) ? e : le[e] || cf(e))) || t;
    },
    Ji = function (e, t, i, r) {
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
        Et(e, function (o) {
          (le[o] = Ot[o] = n), (le[(a = o.toLowerCase())] = i);
          for (var u in n)
            le[
              a + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
            ] = le[o + "." + u] = n[u];
        }),
        n
      );
    },
    al = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    da = function s(e, t, i) {
      var r = t >= 1 ? t : 1,
        n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (n / Gn) * (Math.asin(1 / r) || 0),
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
            : al(o);
      return (
        (n = Gn / n),
        (u.config = function (l, c) {
          return s(e, l, c);
        }),
        u
      );
    },
    fa = function s(e, t) {
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
            : al(i);
      return (
        (r.config = function (n) {
          return s(e, n);
        }),
        r
      );
    };
  Et("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
    var t = e < 5 ? e + 1 : e;
    Ji(
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
    Ji("Elastic", da("in"), da("out"), da()),
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
      Ji(
        "Bounce",
        function (a) {
          return 1 - n(1 - a);
        },
        n
      );
    })(7.5625, 2.75),
    Ji("Expo", function (s) {
      return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
    }),
    Ji("Circ", function (s) {
      return -(So(1 - s * s) - 1);
    }),
    Ji("Sine", function (s) {
      return s === 1 ? 1 : -zd(s * kd) + 1;
    }),
    Ji("Back", fa("in"), fa("out"), fa()),
    (le.SteppedEase =
      le.steps =
      Ot.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              n = t ? 1 : 0,
              a = 1 - he;
            return function (o) {
              return (((r * is(0, a, o)) | 0) + n) * i;
            };
          },
        }),
    (br.ease = le["quad.out"]),
    Et(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (ra += s + "," + s + "Params,");
      }
    );
  var ol = function (e, t) {
      (this.id = Id++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Oo),
        (this.set = t ? t.getSetter : va);
    },
    os = (function () {
      function s(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Cr(this, +t.duration, 1, 1),
          (this.data = t.data),
          be && ((this._ctx = be), be.data.push(this)),
          as || Rt.wake();
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
              Cr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((Pr(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              Ks(this, i), !n._dp || n.parent || No(n, this);
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
              li(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === he) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), ko(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + $o(this)) %
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
                  $o(this),
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
            ? Tr(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -he ? 0 : this._rts;
          if (this._rts === i) return this;
          var n =
            this.parent && this._ts ? Us(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -he ? 0 : this._rts),
            this.totalTime(is(-Math.abs(this._delay), this._tDur, n), r !== !1),
            js(this),
            qd(this)
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
                  : (Pr(),
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
              r && (r._sort || !this.parent) && li(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (St(i) ? this.totalDuration() : this.duration()) /
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
              ? Us(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = Nd);
          var r = Je;
          return (
            (Je = i),
            (this._initted || this._startAt) &&
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
            ? ((this._repeat = i === 1 / 0 ? -2 : i), Yo(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), Yo(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Wt(this, i), St(r));
        }),
        (e.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, St(r)),
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
            var a = Pe(i) ? i : zo,
              o = function () {
                var l = r.then;
                (r.then = null),
                  Pe(a) && (a = a(r)) && (a.then || a === r) && (r.then = l),
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
          ss(this);
        }),
        s
      );
    })();
  It(os.prototype, {
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
  var mt = (function (s) {
    bo(e, s);
    function e(i, r) {
      var n;
      return (
        i === void 0 && (i = {}),
        (n = s.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = St(i.sortChildren)),
        Te && li(i.parent || Te, yi(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && Vo(yi(n), i.scrollTrigger),
        n
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, n, a) {
        return ts(0, arguments, this), this;
      }),
      (t.from = function (r, n, a) {
        return ts(1, arguments, this), this;
      }),
      (t.fromTo = function (r, n, a, o) {
        return ts(2, arguments, this), this;
      }),
      (t.set = function (r, n, a) {
        return (
          (n.duration = 0),
          (n.parent = this),
          es(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new Re(r, n, Wt(this, a), 1),
          this
        );
      }),
      (t.call = function (r, n, a) {
        return li(this, Re.delayedCall(0, r, n), a);
      }),
      (t.staggerTo = function (r, n, a, o, u, l, c) {
        return (
          (a.duration = n),
          (a.stagger = a.stagger || o),
          (a.onComplete = l),
          (a.onCompleteParams = c),
          (a.parent = this),
          new Re(r, a, Wt(this, u)),
          this
        );
      }),
      (t.staggerFrom = function (r, n, a, o, u, l, c) {
        return (
          (a.runBackwards = 1),
          (es(a).immediateRender = St(a.immediateRender)),
          this.staggerTo(r, n, a, o, u, l, c)
        );
      }),
      (t.staggerFromTo = function (r, n, a, o, u, l, c, h) {
        return (
          (o.startAt = a),
          (es(o).immediateRender = St(o.immediateRender)),
          this.staggerTo(r, n, o, u, l, c, h)
        );
      }),
      (t.render = function (r, n, a) {
        var o = this._time,
          u = this._dirty ? this.totalDuration() : this._tDur,
          l = this._dur,
          c = r <= 0 ? 0 : ze(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !l),
          m,
          p,
          f,
          d,
          g,
          D,
          _,
          v,
          y,
          w,
          x,
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
            (y = this._start),
            (v = this._ts),
            (D = !v),
            h && (l || (o = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((x = this._yoyo),
              (g = l + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, n, a);
            if (
              ((m = ze(c % g)),
              c === u
                ? ((d = this._repeat), (m = l))
                : ((w = ze(c / g)),
                  (d = ~~w),
                  d && d === w && ((m = l), d--),
                  m > l && (m = l)),
              (w = Tr(this._tTime, g)),
              !o &&
                this._tTime &&
                w !== d &&
                this._tTime - w * g - this._dur <= 0 &&
                (w = d),
              x && d & 1 && ((m = l - m), (b = 1)),
              d !== w && !this._lock)
            ) {
              var T = x && w & 1,
                E = T === (x && d & 1);
              if (
                (d < w && (T = !T),
                (o = T ? 0 : c % l ? l : c),
                (this._lock = 1),
                (this.render(o || (b ? 0 : ze(d * g)), n, !l)._lock = 0),
                (this._tTime = c),
                !n && this.parent && zt(this, "onRepeat"),
                this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  D !== !this._ts ||
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
                !this._ts && !D)
              )
                return this;
              nl(this, b);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((_ = Ud(this, ze(o), ze(m))), _ && (c -= m - (m = _._start))),
            (this._tTime = c),
            (this._time = m),
            (this._act = !v),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && m && !n && !d && (zt(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (m >= o && r >= 0)
            for (p = this._first; p; ) {
              if (
                ((f = p._next), (p._act || m >= p._start) && p._ts && _ !== p)
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
                  m !== this._time || (!this._ts && !D))
                ) {
                  (_ = 0), f && (c += this._zTime = -he);
                  break;
                }
              }
              p = f;
            }
          else {
            p = this._last;
            for (var S = r < 0 ? r : m; p; ) {
              if (
                ((f = p._prev), (p._act || S <= p._end) && p._ts && _ !== p)
              ) {
                if (p.parent !== this) return this.render(r, n, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (S - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (S - p._start) * p._ts,
                    n,
                    a || (Je && (p._initted || p._startAt))
                  ),
                  m !== this._time || (!this._ts && !D))
                ) {
                  (_ = 0), f && (c += this._zTime = S ? -he : he);
                  break;
                }
              }
              p = f;
            }
          }
          if (
            _ &&
            !n &&
            (this.pause(),
            (_.render(m >= o ? 0 : -he)._zTime = m >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = y), js(this), this.render(r, n, a);
          this._onUpdate && !n && zt(this, "onUpdate", !0),
            ((c === u && this._tTime >= this.totalDuration()) || (!c && o)) &&
              (y === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !l) &&
                  ((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
                  Oi(this, 1),
                !n &&
                  !(r < 0 && !o) &&
                  (c || o || !u) &&
                  (zt(
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
        if ((wi(n) || (n = Wt(this, n, r)), !(r instanceof os))) {
          if (st(r))
            return (
              r.forEach(function (o) {
                return a.add(o, n);
              }),
              this
            );
          if (Ge(r)) return this.addLabel(r, n);
          if (Pe(r)) r = Re.delayedCall(0, r);
          else return this;
        }
        return this !== r ? li(this, r, n) : this;
      }),
      (t.getChildren = function (r, n, a, o) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -Gt);
        for (var u = [], l = this._first; l; )
          l._start >= o &&
            (l instanceof Re
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
        return Ge(r)
          ? this.removeLabel(r)
          : Pe(r)
          ? this.killTweensOf(r)
          : (r.parent === this && Ws(this, r),
            r === this._recent && (this._recent = this._last),
            Zi(this));
      }),
      (t.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ze(
                Rt.time -
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
        return (this.labels[r] = Wt(this, n)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, n, a) {
        var o = Re.delayedCall(0, n || Jr, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), li(this, o, Wt(this, r))
        );
      }),
      (t.removePause = function (r) {
        var n = this._first;
        for (r = Wt(this, r); n; )
          n._start === r && n.data === "isPause" && Oi(n), (n = n._next);
      }),
      (t.killTweensOf = function (r, n, a) {
        for (var o = this.getTweensOf(r, a), u = o.length; u--; )
          zi !== o[u] && o[u].kill(r, n);
        return this;
      }),
      (t.getTweensOf = function (r, n) {
        for (var a = [], o = Ut(r), u = this._first, l = wi(n), c; u; )
          u instanceof Re
            ? Vd(u._targets, o) &&
              (l
                ? (!zi || (u._initted && u._ts)) &&
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
          o = Wt(a, r),
          u = n,
          l = u.startAt,
          c = u.onStart,
          h = u.onStartParams,
          m = u.immediateRender,
          p,
          f = Re.to(
            a,
            It(
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
                    f._dur !== g && Cr(f, g, 0, 1).render(f._time, !0, !0),
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
        return this.tweenTo(n, It({ startAt: { time: Wt(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Zo(this, Wt(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Zo(this, Wt(this, r), 1);
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
        return Zi(this);
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
          Zi(this)
        );
      }),
      (t.totalDuration = function (r) {
        var n = 0,
          a = this,
          o = a._last,
          u = Gt,
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
                ((n -= c),
                ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                  ((a._start += c / a._ts), (a._time -= c), (a._tTime -= c)),
                a.shiftChildren(-c, !1, -1 / 0),
                (u = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = l);
          Cr(a, a === Te && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Te._ts && (ko(Te, Us(r, Te)), (Fo = Rt.frame)), Rt.frame >= Lo)) {
          Lo += Lt.autoSleep || 120;
          var n = Te._first;
          if ((!n || !n._ts) && Lt.autoSleep && Rt._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || Rt.sleep();
          }
        }
      }),
      e
    );
  })(os);
  It(mt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var df = function (e, t, i, r, n, a, o) {
      var u = new xt(this._pt, e, t, 0, 1, pl, null, n),
        l = 0,
        c = 0,
        h,
        m,
        p,
        f,
        d,
        g,
        D,
        _;
      for (
        u.b = i,
          u.e = r,
          i += "",
          r += "",
          (D = ~r.indexOf("random(")) && (r = rs(r)),
          a && ((_ = [i, r]), a(_, e, t), (i = _[0]), (r = _[1])),
          m = i.match(Kn) || [];
        (h = Kn.exec(r));

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
            (l = Kn.lastIndex));
      return (
        (u.c = l < r.length ? r.substring(l, r.length) : ""),
        (u.fp = o),
        (To.test(r) || D) && (u.e = 0),
        (this._pt = u),
        u
      );
    },
    pa = function (e, t, i, r, n, a, o, u, l, c) {
      Pe(r) && (r = r(n || 0, e, a));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : Pe(h)
            ? l
              ? e[
                  t.indexOf("set") || !Pe(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](l)
              : e[t]()
            : h,
        p = Pe(h) ? (l ? gf : dl) : ga,
        f;
      if (
        (Ge(r) &&
          (~r.indexOf("random(") && (r = rs(r)),
          r.charAt(1) === "=" &&
            ((f = Er(m, r) + (nt(m) || 0)), (f || f === 0) && (r = f))),
        !c || m !== r || ha)
      )
        return !isNaN(m * r) && r !== ""
          ? ((f = new xt(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? _f : fl,
              0,
              p
            )),
            l && (f.fp = l),
            o && f.modifier(o, this, e),
            (this._pt = f))
          : (!h && !(t in e) && Jn(t, r),
            df.call(this, e, t, m, r, p, u || Lt.stringFilter, l));
    },
    ff = function (e, t, i, r, n) {
      if (
        (Pe(e) && (e = ls(e, n, t, i, r)),
        !ai(e) || (e.style && e.nodeType) || st(e) || Eo(e))
      )
        return Ge(e) ? ls(e, n, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = ls(e[o], n, t, i, r);
      return a;
    },
    ll = function (e, t, i, r, n, a) {
      var o, u, l, c;
      if (
        kt[e] &&
        (o = new kt[e]()).init(
          n,
          o.rawVars ? t[e] : ff(t[e], r, n, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = u = new xt(i._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
        i !== Mr)
      )
        for (l = i._ptLookup[i._targets.indexOf(n)], c = o._props.length; c--; )
          l[o._props[c]] = u;
      return o;
    },
    zi,
    ha,
    ma = function s(e, t, i) {
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
        D = e.parent,
        _ = D && D.data === "nested" ? D.vars.targets : g,
        v = e._overwrite === "auto" && !Xn,
        y = e.timeline,
        w,
        x,
        b,
        T,
        E,
        S,
        O,
        P,
        k,
        F,
        R,
        I,
        M;
      if (
        (y && (!m || !n) && (n = "none"),
        (e._ease = Qi(n, br.ease)),
        (e._yEase = h ? sl(Qi(h === !0 ? n : h, br.ease)) : 0),
        h &&
          e._yoyo &&
          !e._repeat &&
          ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
        (e._from = !y && !!r.runBackwards),
        !y || (m && !r.stagger))
      ) {
        if (
          ((P = g[0] ? Ki(g[0]).harness : 0),
          (I = P && r[P.prop]),
          (w = Gs(r, ea)),
          d &&
            (d._zTime < 0 && d.progress(1),
            t < 0 && c && o && !p
              ? d.render(-1, !0)
              : d.revert(c && f ? Ys : $d),
            (d._lazy = 0)),
          a)
        ) {
          if (
            (Oi(
              (e._startAt = Re.set(
                g,
                It(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: !d && St(u),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      l &&
                      function () {
                        return zt(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Je || (!o && !p)) && e._startAt.revert(Ys),
            o && f && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && f && !d) {
          if (
            (t && (o = !1),
            (b = It(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !d && St(u),
                immediateRender: o,
                stagger: 0,
                parent: D,
              },
              w
            )),
            I && (b[P.prop] = I),
            Oi((e._startAt = Re.set(g, b))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Je ? e._startAt.revert(Ys) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            s(e._startAt, he, he);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, u = (f && St(u)) || (u && !f), x = 0;
          x < g.length;
          x++
        ) {
          if (
            ((E = g[x]),
            (O = E._gsap || sa(g)[x]._gsap),
            (e._ptLookup[x] = F = {}),
            ta[O.id] && Li.length && Xs(),
            (R = _ === g ? x : _.indexOf(E)),
            P &&
              (k = new P()).init(E, I || w, e, R, _) !== !1 &&
              ((e._pt = T =
                new xt(e._pt, E, k.name, 0, 1, k.render, k, 0, k.priority)),
              k._props.forEach(function (L) {
                F[L] = T;
              }),
              k.priority && (S = 1)),
            !P || I)
          )
            for (b in w)
              kt[b] && (k = ll(b, w, e, R, E, _))
                ? k.priority && (S = 1)
                : (F[b] = T =
                    pa.call(e, E, b, "get", w[b], R, _, 0, r.stringFilter));
          e._op && e._op[x] && e.kill(E, e._op[x]),
            v &&
              e._pt &&
              ((zi = e),
              Te.killTweensOf(E, F, e.globalTime(t)),
              (M = !e.parent),
              (zi = 0)),
            e._pt && u && (ta[O.id] = 1);
        }
        S && hl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = l),
        (e._initted = (!e._op || e._pt) && !M),
        m && t <= 0 && y.render(Gt, !0, !0);
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
              (ha = 1),
              (e.vars[t] = "+=0"),
              ma(e, o),
              (ha = 0),
              u ? Qr(t + " not eligible for reset") : 1
            );
          l.push(c);
        }
      for (p = l.length; p--; )
        (h = l[p]),
          (c = h._pt || h),
          (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + a * c.c),
          (c.c = i - c.s),
          h.e && (h.e = Le(i) + nt(h.e)),
          h.b && (h.b = c.s + nt(h.b));
    },
    hf = function (e, t) {
      var i = e[0] ? Ki(e[0]).harness : 0,
        r = i && i.aliases,
        n,
        a,
        o,
        u;
      if (!r) return t;
      n = xr({}, t);
      for (a in r)
        if (a in n)
          for (u = r[a].split(","), o = u.length; o--; ) n[u[o]] = n[a];
      return n;
    },
    mf = function (e, t, i, r) {
      var n = t.ease || r || "power1.inOut",
        a,
        o;
      if (st(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (u, l) {
            return o.push({ t: (l / (t.length - 1)) * 100, v: u, e: n });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: n });
    },
    ls = function (e, t, i, r, n) {
      return Pe(e)
        ? e.call(t, i, r, n)
        : Ge(e) && ~e.indexOf("random(")
        ? rs(e)
        : e;
    },
    ul = ra + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    cl = {};
  Et(ul + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (cl[s] = 1);
  });
  var Re = (function (s) {
    bo(e, s);
    function e(i, r, n, a) {
      var o;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (o = s.call(this, a ? r : es(r)) || this);
      var u = o.vars,
        l = u.duration,
        c = u.delay,
        h = u.immediateRender,
        m = u.stagger,
        p = u.overwrite,
        f = u.keyframes,
        d = u.defaults,
        g = u.scrollTrigger,
        D = u.yoyoEase,
        _ = r.parent || Te,
        v = (st(i) || Eo(i) ? wi(i[0]) : "length" in r) ? [i] : Ut(i),
        y,
        w,
        x,
        b,
        T,
        E,
        S,
        O;
      if (
        ((o._targets = v.length
          ? sa(v)
          : Qr(
              "GSAP target " + i + " not found. https://gsap.com",
              !Lt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        f || m || Vs(l) || Vs(c))
      ) {
        if (
          ((r = o.vars),
          (y = o.timeline =
            new mt({
              data: "nested",
              defaults: d || {},
              targets: _ && _.data === "nested" ? _.vars.targets : v,
            })),
          y.kill(),
          (y.parent = y._dp = yi(o)),
          (y._start = 0),
          m || Vs(l) || Vs(c))
        ) {
          if (((b = v.length), (S = m && Go(m)), ai(m)))
            for (T in m) ~ul.indexOf(T) && (O || (O = {}), (O[T] = m[T]));
          for (w = 0; w < b; w++)
            (x = Gs(r, cl)),
              (x.stagger = 0),
              D && (x.yoyoEase = D),
              O && xr(x, O),
              (E = v[w]),
              (x.duration = +ls(l, yi(o), w, E, v)),
              (x.delay = (+ls(c, yi(o), w, E, v) || 0) - o._delay),
              !m &&
                b === 1 &&
                x.delay &&
                ((o._delay = c = x.delay), (o._start += c), (x.delay = 0)),
              y.to(E, x, S ? S(w, E, v) : 0),
              (y._ease = le.none);
          y.duration() ? (l = c = 0) : (o.timeline = 0);
        } else if (f) {
          es(It(y.vars.defaults, { ease: "none" })),
            (y._ease = Qi(f.ease || r.ease || "none"));
          var P = 0,
            k,
            F,
            R;
          if (st(f))
            f.forEach(function (I) {
              return y.to(v, I, ">");
            }),
              y.duration();
          else {
            x = {};
            for (T in f)
              T === "ease" || T === "easeEach" || mf(T, f[T], x, f.easeEach);
            for (T in x)
              for (
                k = x[T].sort(function (I, M) {
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
                  y.to(v, R, P),
                  (P += R.duration);
            y.duration() < l && y.to({}, { duration: l - y.duration() });
          }
        }
        l || o.duration((l = y.duration()));
      } else o.timeline = 0;
      return (
        p === !0 && !Xn && ((zi = yi(o)), Te.killTweensOf(v), (zi = 0)),
        li(_, yi(o), n),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (h ||
          (!l &&
            !f &&
            o._start === ze(_._time) &&
            St(h) &&
            Xd(yi(o)) &&
            _.data !== "nested")) &&
          ((o._tTime = -he), o.render(Math.max(0, -c) || 0)),
        g && Vo(yi(o), g),
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
          D,
          _,
          v,
          y;
        if (!l) Wd(this, r, n, a);
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
              ((m = ze(h % d)),
              h === u
                ? ((f = this._repeat), (m = l))
                : ((g = ze(h / d)),
                  (f = ~~g),
                  f && f === g ? ((m = l), f--) : m > l && (m = l)),
              (D = this._yoyo && f & 1),
              D && ((y = this._yEase), (m = l - m)),
              (g = Tr(this._tTime, d)),
              m === o && !a && this._initted && f === g)
            )
              return (this._tTime = h), this;
            f !== g &&
              (v && this._yEase && nl(v, D),
              this.vars.repeatRefresh &&
                !D &&
                !this._lock &&
                m !== d &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(ze(d * f), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Ho(this, c ? r : m, a, n, h)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && f !== g))
              return this;
            if (l !== this._dur) return this.render(r, n, a);
          }
          if (
            ((this._tTime = h),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = _ = (y || this._ease)(m / l)),
            this._from && (this.ratio = _ = 1 - _),
            m && !o && !n && !f && (zt(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(_, p.d), (p = p._next);
          (v && v.render(r < 0 ? r : v._dur * v._ease(m / this._dur), n, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (c && na(this, r, n, a), zt(this, "onUpdate")),
            this._repeat &&
              f !== g &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              zt(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (c && !this._onUpdate && na(this, r, !0, !0),
              (r || !l) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                Oi(this, 1),
              !n &&
                !(c && !o) &&
                (h || o || D) &&
                (zt(this, h === u ? "onComplete" : "onReverseComplete", !0),
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
        as || Rt.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || ma(this, l),
          (c = this._ease(l / this._dur)),
          pf(this, r, n, a, o, c, l, u)
            ? this.resetTo(r, n, a, o, 1)
            : (Ks(this, 0),
              this.parent ||
                Bo(
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
              ? ss(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Je),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, zi && zi.vars.overwrite !== !0)
              ._first || ss(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              Cr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          u = r ? Ut(r) : o,
          l = this._ptLookup,
          c = this._pt,
          h,
          m,
          p,
          f,
          d,
          g,
          D;
        if ((!n || n === "all") && Yd(o, u))
          return n === "all" && (this._pt = 0), ss(this);
        for (
          h = this._op = this._op || [],
            n !== "all" &&
              (Ge(n) &&
                ((d = {}),
                Et(n, function (_) {
                  return (d[_] = 1);
                }),
                (n = d)),
              (n = hf(o, n))),
            D = o.length;
          D--;

        )
          if (~u.indexOf(o[D])) {
            (m = l[D]),
              n === "all"
                ? ((h[D] = n), (f = m), (p = {}))
                : ((p = h[D] = h[D] || {}), (f = n));
            for (d in f)
              (g = m && m[d]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(d) === !0) &&
                    Ws(this, g, "_pt"),
                  delete m[d]),
                p !== "all" && (p[d] = 1);
          }
        return this._initted && !this._pt && c && ss(this), this;
      }),
      (e.to = function (r, n) {
        return new e(r, n, arguments[2]);
      }),
      (e.from = function (r, n) {
        return ts(1, arguments);
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
        return ts(2, arguments);
      }),
      (e.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
      }),
      (e.killTweensOf = function (r, n, a) {
        return Te.killTweensOf(r, n, a);
      }),
      e
    );
  })(os);
  It(Re.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Et("staggerTo,staggerFrom,staggerFromTo", function (s) {
      Re[s] = function () {
        var e = new mt(),
          t = oa.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
      };
    });
  var ga = function (e, t, i) {
      return (e[t] = i);
    },
    dl = function (e, t, i) {
      return e[t](i);
    },
    gf = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    vf = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    va = function (e, t) {
      return Pe(e[t]) ? dl : Wn(e[t]) && e.setAttribute ? vf : ga;
    },
    fl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    _f = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    pl = function (e, t) {
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
    _a = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    Df = function (e, t, i, r) {
      for (var n = this._pt, a; n; )
        (a = n._next), n.p === r && n.modifier(e, t, i), (n = a);
    },
    yf = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? Ws(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    wf = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    hl = function (e) {
      for (var t = e._pt, i, r, n, a; t; ) {
        for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (n = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = n;
    },
    xt = (function () {
      function s(t, i, r, n, a, o, u, l, c) {
        (this.t = i),
          (this.s = n),
          (this.c = a),
          (this.p = r),
          (this.r = o || fl),
          (this.d = u || this),
          (this.set = l || ga),
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
  Et(
    ra +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (ea[s] = 1);
    }
  ),
    (Ot.TweenMax = Ot.TweenLite = Re),
    (Ot.TimelineLite = Ot.TimelineMax = mt),
    (Te = new mt({
      sortChildren: !1,
      defaults: br,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Lt.stringFilter = rl);
  var er = [],
    Zs = {},
    bf = [],
    ml = 0,
    Sf = 0,
    Da = function (e) {
      return (Zs[e] || bf).map(function (t) {
        return t();
      });
    },
    ya = function () {
      var e = Date.now(),
        t = [];
      e - ml > 2 &&
        (Da("matchMediaInit"),
        er.forEach(function (i) {
          var r = i.queries,
            n = i.conditions,
            a,
            o,
            u,
            l;
          for (o in r)
            (a = oi.matchMedia(r[o]).matches),
              a && (u = 1),
              a !== n[o] && ((n[o] = a), (l = 1));
          l && (i.revert(), u && t.push(i));
        }),
        Da("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (ml = e),
        Da("matchMedia"));
    },
    gl = (function () {
      function s(t, i) {
        (this.selector = i && la(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Sf++),
          t && this.add(t);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          Pe(i) && ((n = r), (r = i), (i = Pe));
          var a = this,
            o = function () {
              var l = be,
                c = a.selector,
                h;
              return (
                l && l !== a && l.data.push(a),
                n && (a.selector = la(n)),
                (be = a),
                (h = r.apply(a, arguments)),
                Pe(h) && a._r.push(h),
                (be = l),
                (a.selector = c),
                (a.isReverted = !1),
                h
              );
            };
          return (
            (a.last = o),
            i === Pe
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
                : r instanceof Re &&
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
                      l instanceof mt
                        ? l.data !== "nested" &&
                          (l.scrollTrigger && l.scrollTrigger.revert(),
                          l.kill())
                        : !(l instanceof Re) && l.revert && l.revert(i);
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
            for (var a = er.length; a--; )
              er[a].id === this.id && er.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        s
      );
    })(),
    Ef = (function () {
      function s(t) {
        (this.contexts = []), (this.scope = t), be && be.data.push(this);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          ai(i) || (i = { matches: i });
          var a = new gl(0, n || this.scope),
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
              : ((u = oi.matchMedia(i[l])),
                u &&
                  (er.indexOf(a) < 0 && er.push(a),
                  (o[l] = u.matches) && (c = 1),
                  u.addListener
                    ? u.addListener(ya)
                    : u.addEventListener("change", ya)));
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
    Qs = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return Jo(r);
        });
      },
      timeline: function (e) {
        return new mt(e);
      },
      getTweensOf: function (e, t) {
        return Te.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Ge(e) && (e = Ut(e)[0]);
        var n = Ki(e || {}).get,
          a = i ? zo : Io;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a(((kt[t] && kt[t].get) || n)(e, t, i, r))
              : function (o, u, l) {
                  return a(((kt[o] && kt[o].get) || n)(e, o, u, l));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Ut(e)), e.length > 1)) {
          var r = e.map(function (c) {
              return Tt.quickSetter(c, t, i);
            }),
            n = r.length;
          return function (c) {
            for (var h = n; h--; ) r[h](c);
          };
        }
        e = e[0] || {};
        var a = kt[t],
          o = Ki(e),
          u = (o.harness && (o.harness.aliases || {})[t]) || t,
          l = a
            ? function (c) {
                var h = new a();
                (Mr._pt = 0),
                  h.init(e, i ? c + i : c, Mr, 0, [e]),
                  h.render(1, h),
                  Mr._pt && _a(1, Mr);
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
          n = Tt.to(
            e,
            It(
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
        return e && e.ease && (e.ease = Qi(e.ease, br.ease)), Ro(br, e || {});
      },
      config: function (e) {
        return Ro(Lt, e || {});
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
            !kt[o] &&
            !Ot[o] &&
            Qr(t + " effect requires " + o + " plugin.")
          );
        }),
          (ia[t] = function (o, u, l) {
            return i(Ut(o), It(u || {}, n), l);
          }),
          a &&
            (mt.prototype[t] = function (o, u, l) {
              return this.add(ia[t](o, ai(u) ? u : (l = u) && {}, this), l);
            });
      },
      registerEase: function (e, t) {
        le[e] = Qi(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Qi(e, t) : le;
      },
      getById: function (e) {
        return Te.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new mt(e),
          r,
          n;
        for (
          i.smoothChildTiming = St(e.smoothChildTiming),
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
                r instanceof Re &&
                r.vars.onComplete === r._targets[0]
              )) &&
              li(i, r, r._start - r._delay),
            (r = n);
        return li(Te, i, 0), i;
      },
      context: function (e, t) {
        return e ? new gl(e, t) : be;
      },
      matchMedia: function (e) {
        return new Ef(e);
      },
      matchMediaRefresh: function () {
        return (
          er.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || ya()
        );
      },
      addEventListener: function (e, t) {
        var i = Zs[e] || (Zs[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = Zs[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: tf,
        wrapYoyo: rf,
        distribute: Go,
        random: Uo,
        snap: Wo,
        normalize: ef,
        getUnit: nt,
        clamp: Kd,
        splitColor: el,
        toArray: Ut,
        selector: la,
        mapRange: Ko,
        pipe: Qd,
        unitize: Jd,
        interpolate: sf,
        shuffle: Xo,
      },
      install: Po,
      effects: ia,
      ticker: Rt,
      updateRoot: mt.updateRoot,
      plugins: kt,
      globalTimeline: Te,
      core: {
        PropTween: xt,
        globals: Ao,
        Tween: Re,
        Timeline: mt,
        Animation: os,
        getCache: Ki,
        _removeLinkedListItem: Ws,
        reverting: function () {
          return Je;
        },
        context: function (e) {
          return e && be && (be.data.push(e), (e._ctx = be)), be;
        },
        suppressOverwrites: function (e) {
          return (Xn = e);
        },
      },
    };
  Et("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (Qs[s] = Re[s]);
  }),
    Rt.add(mt.updateRoot),
    (Mr = Qs.to({}, { duration: 0 }));
  var xf = function (e, t) {
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
              (a._pt && (a = xf(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[n], r));
    },
    wa = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, n, a) {
          a._onInit = function (o) {
            var u, l;
            if (
              (Ge(n) &&
                ((u = {}),
                Et(n, function (c) {
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
    Tt =
      Qs.registerPlugin(
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
              Je ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        wa("roundProps", ua),
        wa("modifiers"),
        wa("snap", Wo)
      ) || Qs;
  (Re.version = mt.version = Tt.version = "3.12.7"),
    (Mo = 1),
    Un() && Pr(),
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
   */ var vl,
    Ri,
    Ar,
    ba,
    tr,
    _l,
    Sa,
    Cf = function () {
      return typeof window != "undefined";
    },
    bi = {},
    ir = 180 / Math.PI,
    Fr = Math.PI / 180,
    Lr = Math.atan2,
    Dl = 1e8,
    Ea = /([A-Z])/g,
    Mf = /(left|right|width|margin|padding|x)/i,
    Pf = /[\s,\(]\S/,
    ui = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    xa = function (e, t) {
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
    Lf = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    yl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    wl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Of = function (e, t, i) {
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
    Ct = Ce + "Origin",
    $f = function s(e, t) {
      var i = this,
        r = this.target,
        n = r.style,
        a = r._gsap;
      if (e in bi && n) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = ui[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = Si(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : Si(r, e)),
            e === Ct && (this.tfm.zOrigin = a.zOrigin);
        else
          return ui.transform.split(",").forEach(function (o) {
            return s.call(i, o, t);
          });
        if (this.props.indexOf(Ce) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Ct, t, "")),
          (e = Ce);
      }
      (n || t) && this.props.push(e, t, n[e]);
    },
    bl = function (e) {
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
                : e[n].replace(Ea, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (n = Sa()),
          (!n || !n.isStart) &&
            !i[Ce] &&
            (bl(i),
            r.zOrigin &&
              i[Ct] &&
              ((i[Ct] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    Sl = function (e, t) {
      var i = { target: e, props: [], revert: Nf, save: $f };
      return (
        e._gsap || Tt.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    El,
    Ta = function (e, t) {
      var i = Ri.createElementNS
        ? Ri.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Ri.createElement(e);
      return i && i.style ? i : Ri.createElement(e);
    },
    ci = function s(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(Ea, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && s(e, Or(t) || t, 1)) ||
        ""
      );
    },
    xl = "O,Moz,ms,Ms,Webkit".split(","),
    Or = function (e, t, i) {
      var r = t || tr,
        n = r.style,
        a = 5;
      if (e in n && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(xl[a] + e in n);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? xl[a] : "") + e;
    },
    Ca = function () {
      Cf() &&
        window.document &&
        ((vl = window),
        (Ri = vl.document),
        (Ar = Ri.documentElement),
        (tr = Ta("div") || { style: {} }),
        Ta("div"),
        (Ce = Or(Ce)),
        (Ct = Ce + "Origin"),
        (tr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (El = !!Or("perspective")),
        (Sa = Tt.core.reverting),
        (ba = 1));
    },
    Tl = function (e) {
      var t = e.ownerSVGElement,
        i = Ta(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        n;
      (r.style.display = "block"), i.appendChild(r), Ar.appendChild(i);
      try {
        n = r.getBBox();
      } catch (a) {}
      return i.removeChild(r), Ar.removeChild(i), n;
    },
    Cl = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    Ml = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch (r) {
        (t = Tl(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = Tl(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +Cl(e, ["x", "cx", "x1"]) || 0,
              y: +Cl(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    Pl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ml(e));
    },
    rr = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in bi && t !== Ct && (t = Ce),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(Ea, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Bi = function (e, t, i, r, n, a) {
      var o = new xt(e._pt, t, i, 0, 1, a ? wl : yl);
      return (e._pt = o), (o.b = r), (o.e = n), e._props.push(i), o;
    },
    Al = { deg: 1, rad: 1, turn: 1 },
    Vf = { grid: 1, flex: 1 },
    $i = function s(e, t, i, r) {
      var n = parseFloat(i) || 0,
        a = (i + "").trim().substr((n + "").length) || "px",
        o = tr.style,
        u = Mf.test(t),
        l = e.tagName.toLowerCase() === "svg",
        c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        f,
        d,
        g,
        D;
      if (r === a || !n || Al[r] || Al[a]) return n;
      if (
        (a !== "px" && !m && (n = s(e, t, i, "px")),
        (D = e.getCTM && Pl(e)),
        (p || a === "%") && (bi[t] || ~t.indexOf("adius")))
      )
        return (
          (f = D ? e.getBBox()[u ? "width" : "height"] : e[c]),
          Le(p ? (n / f) * h : (n / 100) * f)
        );
      if (
        ((o[u ? "width" : "height"] = h + (m ? a : r)),
        (d =
          (r !== "rem" && ~t.indexOf("adius")) ||
          (r === "em" && e.appendChild && !l)
            ? e
            : e.parentNode),
        D && (d = (e.ownerSVGElement || {}).parentNode),
        (!d || d === Ri || !d.appendChild) && (d = Ri.body),
        (g = d._gsap),
        g && p && g.width && u && g.time === Rt.time && !g.uncache)
      )
        return Le((n / g.width) * h);
      if (p && (t === "height" || t === "width")) {
        var _ = e.style[t];
        (e.style[t] = h + r), (f = e[c]), _ ? (e.style[t] = _) : rr(e, t);
      } else
        (p || a === "%") &&
          !Vf[ci(d, "display")] &&
          (o.position = ci(e, "position")),
          d === e && (o.position = "static"),
          d.appendChild(tr),
          (f = tr[c]),
          d.removeChild(tr),
          (o.position = "absolute");
      return (
        u && p && ((g = Ki(d)), (g.time = Rt.time), (g.width = d[c])),
        Le(m ? (f * n) / h : f && n ? (h / f) * n : 0)
      );
    },
    Si = function (e, t, i, r) {
      var n;
      return (
        ba || Ca(),
        t in ui &&
          t !== "transform" &&
          ((t = ui[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        bi[t] && t !== "transform"
          ? ((n = cs(e, r)),
            (n =
              t !== "transformOrigin"
                ? n[t]
                : n.svg
                ? n.origin
                : en(ci(e, Ct)) + " " + n.zOrigin + "px"))
          : ((n = e.style[t]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (Js[t] && Js[t](e, t, i)) ||
                ci(e, t) ||
                Oo(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? $i(e, t, n, i) + i : n
      );
    },
    Hf = function (e, t, i, r) {
      if (!i || i === "none") {
        var n = Or(t, e, 1),
          a = n && ci(e, n, 1);
        a && a !== i
          ? ((t = n), (i = a))
          : t === "borderColor" && (i = ci(e, "borderTopColor"));
      }
      var o = new xt(this._pt, e.style, t, 0, 1, pl),
        u = 0,
        l = 0,
        c,
        h,
        m,
        p,
        f,
        d,
        g,
        D,
        _,
        v,
        y,
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
          d ? (e.style[t] = d) : rr(e, t)),
        (c = [i, r]),
        rl(c),
        (i = c[0]),
        (r = c[1]),
        (m = i.match(Sr) || []),
        (w = r.match(Sr) || []),
        w.length)
      ) {
        for (; (h = Sr.exec(r)); )
          (g = h[0]),
            (_ = r.substring(u, h.index)),
            f
              ? (f = (f + 1) % 5)
              : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") &&
                (f = 1),
            g !== (d = m[l++] || "") &&
              ((p = parseFloat(d) || 0),
              (y = d.substr((p + "").length)),
              g.charAt(1) === "=" && (g = Er(p, g) + y),
              (D = parseFloat(g)),
              (v = g.substr((D + "").length)),
              (u = Sr.lastIndex - v.length),
              v ||
                ((v = v || Lt.units[t] || y),
                u === r.length && ((r += v), (o.e += v))),
              y !== v && (p = $i(e, t, d, v) || 0),
              (o._pt = {
                _next: o._pt,
                p: _ || l === 1 ? _ : ",",
                s: p,
                c: D - p,
                m: (f && f < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = u < r.length ? r.substring(u, r.length) : "";
      } else o.r = t === "display" && r === "none" ? wl : yl;
      return To.test(r) && (o.e = 0), (this._pt = o), o;
    },
    Fl = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Yf = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = Fl[i] || i),
        (t[1] = Fl[r] || r),
        t.join(" ")
      );
    },
    qf = function (e, t) {
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
              bi[o] && ((u = 1), (o = o === "transformOrigin" ? Ct : Ce)),
              rr(i, o);
        u &&
          (rr(i, Ce),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            cs(i, 1),
            (a.uncache = 1),
            bl(r)));
      }
    },
    Js = {
      clearProps: function (e, t, i, r, n) {
        if (n.data !== "isFromStart") {
          var a = (e._pt = new xt(e._pt, t, i, 0, 0, qf));
          return (a.u = r), (a.pr = -10), (a.tween = n), e._props.push(i), 1;
        }
      },
    },
    us = [1, 0, 0, 1, 0, 0],
    Ll = {},
    Ol = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    kl = function (e) {
      var t = ci(e, Ce);
      return Ol(t) ? us : t.substr(7).match(xo).map(Le);
    },
    Ma = function (e, t) {
      var i = e._gsap || Ki(e),
        r = e.style,
        n = kl(e),
        a,
        o,
        u,
        l;
      return i.svg && e.getAttribute("transform")
        ? ((u = e.transform.baseVal.consolidate().matrix),
          (n = [u.a, u.b, u.c, u.d, u.e, u.f]),
          n.join(",") === "1,0,0,1,0,0" ? us : n)
        : (n === us &&
            !e.offsetParent &&
            e !== Ar &&
            !i.svg &&
            ((u = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((l = 1), (o = e.nextElementSibling), Ar.appendChild(e)),
            (n = kl(e)),
            u ? (r.display = u) : rr(e, "display"),
            l &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Ar.removeChild(e))),
          t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Pa = function (e, t, i, r, n, a) {
      var o = e._gsap,
        u = n || Ma(e, !0),
        l = o.xOrigin || 0,
        c = o.yOrigin || 0,
        h = o.xOffset || 0,
        m = o.yOffset || 0,
        p = u[0],
        f = u[1],
        d = u[2],
        g = u[3],
        D = u[4],
        _ = u[5],
        v = t.split(" "),
        y = parseFloat(v[0]) || 0,
        w = parseFloat(v[1]) || 0,
        x,
        b,
        T,
        E;
      i
        ? u !== us &&
          (b = p * g - f * d) &&
          ((T = y * (g / b) + w * (-d / b) + (d * _ - g * D) / b),
          (E = y * (-f / b) + w * (p / b) - (p * _ - f * D) / b),
          (y = T),
          (w = E))
        : ((x = Ml(e)),
          (y = x.x + (~v[0].indexOf("%") ? (y / 100) * x.width : y)),
          (w =
            x.y + (~(v[1] || v[0]).indexOf("%") ? (w / 100) * x.height : w))),
        r || (r !== !1 && o.smooth)
          ? ((D = y - l),
            (_ = w - c),
            (o.xOffset = h + (D * p + _ * d) - D),
            (o.yOffset = m + (D * f + _ * g) - _))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = y),
        (o.yOrigin = w),
        (o.smooth = !!r),
        (o.origin = t),
        (o.originIsAbsolute = !!i),
        (e.style[Ct] = "0px 0px"),
        a &&
          (Bi(a, o, "xOrigin", l, y),
          Bi(a, o, "yOrigin", c, w),
          Bi(a, o, "xOffset", h, o.xOffset),
          Bi(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", y + " " + w);
    },
    cs = function (e, t) {
      var i = e._gsap || new ol(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        n = i.scaleX < 0,
        a = "px",
        o = "deg",
        u = getComputedStyle(e),
        l = ci(e, Ct) || "0",
        c,
        h,
        m,
        p,
        f,
        d,
        g,
        D,
        _,
        v,
        y,
        w,
        x,
        b,
        T,
        E,
        S,
        O,
        P,
        k,
        F,
        R,
        I,
        M,
        L,
        A,
        C,
        Y,
        Q,
        ye,
        se,
        B;
      return (
        (c = h = m = d = g = D = _ = v = y = 0),
        (p = f = 1),
        (i.svg = !!(e.getCTM && Pl(e))),
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
        (b = Ma(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((L = e.getBBox()),
              (l = i.xOrigin - L.x + "px " + (i.yOrigin - L.y) + "px"),
              (M = ""))
            : (M = !t && e.getAttribute("data-svg-origin")),
          Pa(e, M || l, !!M || i.originIsAbsolute, i.smooth !== !1, b)),
        (w = i.xOrigin || 0),
        (x = i.yOrigin || 0),
        b !== us &&
          ((O = b[0]),
          (P = b[1]),
          (k = b[2]),
          (F = b[3]),
          (c = R = b[4]),
          (h = I = b[5]),
          b.length === 6
            ? ((p = Math.sqrt(O * O + P * P)),
              (f = Math.sqrt(F * F + k * k)),
              (d = O || P ? Lr(P, O) * ir : 0),
              (_ = k || F ? Lr(k, F) * ir + d : 0),
              _ && (f *= Math.abs(Math.cos(_ * Fr))),
              i.svg && ((c -= w - (w * O + x * k)), (h -= x - (w * P + x * F))))
            : ((B = b[6]),
              (ye = b[7]),
              (C = b[8]),
              (Y = b[9]),
              (Q = b[10]),
              (se = b[11]),
              (c = b[12]),
              (h = b[13]),
              (m = b[14]),
              (T = Lr(B, Q)),
              (g = T * ir),
              T &&
                ((E = Math.cos(-T)),
                (S = Math.sin(-T)),
                (M = R * E + C * S),
                (L = I * E + Y * S),
                (A = B * E + Q * S),
                (C = R * -S + C * E),
                (Y = I * -S + Y * E),
                (Q = B * -S + Q * E),
                (se = ye * -S + se * E),
                (R = M),
                (I = L),
                (B = A)),
              (T = Lr(-k, Q)),
              (D = T * ir),
              T &&
                ((E = Math.cos(-T)),
                (S = Math.sin(-T)),
                (M = O * E - C * S),
                (L = P * E - Y * S),
                (A = k * E - Q * S),
                (se = F * S + se * E),
                (O = M),
                (P = L),
                (k = A)),
              (T = Lr(P, O)),
              (d = T * ir),
              T &&
                ((E = Math.cos(T)),
                (S = Math.sin(T)),
                (M = O * E + P * S),
                (L = R * E + I * S),
                (P = P * E - O * S),
                (I = I * E - R * S),
                (O = M),
                (R = L)),
              g &&
                Math.abs(g) + Math.abs(d) > 359.9 &&
                ((g = d = 0), (D = 180 - D)),
              (p = Le(Math.sqrt(O * O + P * P + k * k))),
              (f = Le(Math.sqrt(I * I + B * B))),
              (T = Lr(R, I)),
              (_ = Math.abs(T) > 2e-4 ? T * ir : 0),
              (y = se ? 1 / (se < 0 ? -se : se) : 0)),
          i.svg &&
            ((M = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !Ol(ci(e, Ce))),
            M && e.setAttribute("transform", M))),
        Math.abs(_) > 90 &&
          Math.abs(_) < 270 &&
          (n
            ? ((p *= -1),
              (_ += d <= 0 ? 180 : -180),
              (d += d <= 0 ? 180 : -180))
            : ((f *= -1), (_ += _ <= 0 ? 180 : -180))),
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
        (i.rotationY = Le(D) + o),
        (i.skewX = _ + o),
        (i.skewY = v + o),
        (i.transformPerspective = y + a),
        (i.zOrigin = parseFloat(l.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[Ct] = en(l)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Lt.force3D),
        (i.renderTransform = i.svg ? Gf : El ? Il : Xf),
        (i.uncache = 0),
        i
      );
    },
    en = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Aa = function (e, t, i) {
      var r = nt(t);
      return Le(parseFloat(t) + parseFloat($i(e, "x", i + "px", r))) + r;
    },
    Xf = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        Il(e, t);
    },
    sr = "0deg",
    ds = "0px",
    nr = ") ",
    Il = function (e, t) {
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
        D = i.force3D,
        _ = i.target,
        v = i.zOrigin,
        y = "",
        w = (D === "auto" && e && e !== 1) || D === !0;
      if (v && (h !== sr || c !== sr)) {
        var x = parseFloat(c) * Fr,
          b = Math.sin(x),
          T = Math.cos(x),
          E;
        (x = parseFloat(h) * Fr),
          (E = Math.cos(x)),
          (a = Aa(_, a, b * E * -v)),
          (o = Aa(_, o, -Math.sin(x) * -v)),
          (u = Aa(_, u, T * E * -v + v));
      }
      g !== ds && (y += "perspective(" + g + nr),
        (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
        (w || a !== ds || o !== ds || u !== ds) &&
          (y +=
            u !== ds || w
              ? "translate3d(" + a + ", " + o + ", " + u + ") "
              : "translate(" + a + ", " + o + nr),
        l !== sr && (y += "rotate(" + l + nr),
        c !== sr && (y += "rotateY(" + c + nr),
        h !== sr && (y += "rotateX(" + h + nr),
        (m !== sr || p !== sr) && (y += "skew(" + m + ", " + p + nr),
        (f !== 1 || d !== 1) && (y += "scale(" + f + ", " + d + nr),
        (_.style[Ce] = y || "translate(0, 0)");
    },
    Gf = function (e, t) {
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
        D = i.yOffset,
        _ = i.forceCSS,
        v = parseFloat(a),
        y = parseFloat(o),
        w,
        x,
        b,
        T,
        E;
      (u = parseFloat(u)),
        (l = parseFloat(l)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (l += c), (u += c)),
        u || l
          ? ((u *= Fr),
            (l *= Fr),
            (w = Math.cos(u) * h),
            (x = Math.sin(u) * h),
            (b = Math.sin(u - l) * -m),
            (T = Math.cos(u - l) * m),
            l &&
              ((c *= Fr),
              (E = Math.tan(l - c)),
              (E = Math.sqrt(1 + E * E)),
              (b *= E),
              (T *= E),
              c &&
                ((E = Math.tan(c)),
                (E = Math.sqrt(1 + E * E)),
                (w *= E),
                (x *= E))),
            (w = Le(w)),
            (x = Le(x)),
            (b = Le(b)),
            (T = Le(T)))
          : ((w = h), (T = m), (x = b = 0)),
        ((v && !~(a + "").indexOf("px")) || (y && !~(o + "").indexOf("px"))) &&
          ((v = $i(p, "x", a, "px")), (y = $i(p, "y", o, "px"))),
        (f || d || g || D) &&
          ((v = Le(v + f - (f * w + d * b) + g)),
          (y = Le(y + d - (f * x + d * T) + D))),
        (r || n) &&
          ((E = p.getBBox()),
          (v = Le(v + (r / 100) * E.width)),
          (y = Le(y + (n / 100) * E.height))),
        (E =
          "matrix(" +
          w +
          "," +
          x +
          "," +
          b +
          "," +
          T +
          "," +
          v +
          "," +
          y +
          ")"),
        p.setAttribute("transform", E),
        _ && (p.style[Ce] = E);
    },
    Wf = function (e, t, i, r, n) {
      var a = 360,
        o = Ge(n),
        u = parseFloat(n) * (o && ~n.indexOf("rad") ? ir : 1),
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
            ? (l = ((l + a * Dl) % a) - ~~(l / a) * a)
            : h === "ccw" && l > 0 && (l = ((l - a * Dl) % a) - ~~(l / a) * a)),
        (e._pt = m = new xt(e._pt, t, i, r, l, Af)),
        (m.e = c),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    zl = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Uf = function (e, t, i) {
      var r = zl({}, i._gsap),
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
          (o = cs(i, 1)),
          rr(i, Ce),
          i.setAttribute("transform", l))
        : ((l = getComputedStyle(i)[Ce]),
          (a[Ce] = t),
          (o = cs(i, 1)),
          (a[Ce] = l));
      for (u in bi)
        (l = r[u]),
          (c = o[u]),
          l !== c &&
            n.indexOf(u) < 0 &&
            ((p = nt(l)),
            (f = nt(c)),
            (h = p !== f ? $i(i, u, l, f) : parseFloat(l)),
            (m = parseFloat(c)),
            (e._pt = new xt(e._pt, o, u, h, m - h, xa)),
            (e._pt.u = f || 0),
            e._props.push(u));
      zl(o, r);
    };
  Et("padding,margin,Width,Radius", function (s, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      n = "Left",
      a = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (
        o
      ) {
        return e < 2 ? s + o : "border" + o + s;
      });
    Js[e > 1 ? "border" + s : s] = function (o, u, l, c, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = a.map(function (f) {
            return Si(o, f, l);
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
  var Rl = {
    name: "css",
    register: Ca,
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
        D,
        _,
        v,
        y,
        w,
        x,
        b,
        T;
      ba || Ca(),
        (this.styles = this.styles || Sl(e)),
        (T = this.styles.props),
        (this.tween = i);
      for (d in t)
        if (
          d !== "autoRound" &&
          ((c = t[d]), !(kt[d] && ll(d, t, i, r, e, n)))
        ) {
          if (
            ((p = typeof c),
            (f = Js[d]),
            p === "function" && ((c = c.call(i, r, e, n)), (p = typeof c)),
            p === "string" && ~c.indexOf("random(") && (c = rs(c)),
            f)
          )
            f(this, e, d, c, i) && (b = 1);
          else if (d.substr(0, 2) === "--")
            (l = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
              (c += ""),
              (Ii.lastIndex = 0),
              Ii.test(l) || ((g = nt(l)), (D = nt(c))),
              D ? g !== D && (l = $i(e, d, l, D) + D) : g && (c += g),
              this.add(o, "setProperty", l, c, r, n, 0, 0, d),
              a.push(d),
              T.push(d, 0, o[d]);
          else if (p !== "undefined") {
            if (
              (u && d in u
                ? ((l =
                    typeof u[d] == "function" ? u[d].call(i, r, e, n) : u[d]),
                  Ge(l) && ~l.indexOf("random(") && (l = rs(l)),
                  nt(l + "") ||
                    l === "auto" ||
                    (l += Lt.units[d] || nt(Si(e, d)) || ""),
                  (l + "").charAt(1) === "=" && (l = Si(e, d)))
                : (l = Si(e, d)),
              (m = parseFloat(l)),
              (_ = p === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              _ && (c = c.substr(2)),
              (h = parseFloat(c)),
              d in ui &&
                (d === "autoAlpha" &&
                  (m === 1 && Si(e, "visibility") === "hidden" && h && (m = 0),
                  T.push("visibility", 0, o.visibility),
                  Bi(
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
              (v = d in bi),
              v)
            ) {
              if (
                (this.styles.save(d),
                y ||
                  ((w = e._gsap),
                  (w.renderTransform && !t.parseTransform) ||
                    cs(e, t.parseTransform),
                  (x = t.smoothOrigin !== !1 && w.smooth),
                  (y = this._pt =
                    new xt(this._pt, o, Ce, 0, 1, w.renderTransform, w, 0, -1)),
                  (y.dep = 1)),
                d === "scale")
              )
                (this._pt = new xt(
                  this._pt,
                  w,
                  "scaleY",
                  w.scaleY,
                  (_ ? Er(w.scaleY, _ + h) : h) - w.scaleY || 0,
                  xa
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", d),
                  (d += "X");
              else if (d === "transformOrigin") {
                T.push(Ct, 0, o[Ct]),
                  (c = Yf(c)),
                  w.svg
                    ? Pa(e, c, 0, x, 0, this)
                    : ((D = parseFloat(c.split(" ")[2]) || 0),
                      D !== w.zOrigin && Bi(this, w, "zOrigin", w.zOrigin, D),
                      Bi(this, o, d, en(l), en(c)));
                continue;
              } else if (d === "svgOrigin") {
                Pa(e, c, 1, x, 0, this);
                continue;
              } else if (d in Ll) {
                Wf(this, w, d, m, _ ? Er(m, _ + c) : c);
                continue;
              } else if (d === "smoothOrigin") {
                Bi(this, w, "smooth", w.smooth, c);
                continue;
              } else if (d === "force3D") {
                w[d] = c;
                continue;
              } else if (d === "transform") {
                Uf(this, c, e);
                continue;
              }
            } else d in o || (d = Or(d) || d);
            if (
              v ||
              ((h || h === 0) && (m || m === 0) && !Pf.test(c) && d in o)
            )
              (g = (l + "").substr((m + "").length)),
                h || (h = 0),
                (D = nt(c) || (d in Lt.units ? Lt.units[d] : g)),
                g !== D && (m = $i(e, d, l, D)),
                (this._pt = new xt(
                  this._pt,
                  v ? w : o,
                  d,
                  m,
                  (_ ? Er(m, _ + h) : h) - m,
                  !v && (D === "px" || d === "zIndex") && t.autoRound !== !1
                    ? Lf
                    : xa
                )),
                (this._pt.u = D || 0),
                g !== D && D !== "%" && ((this._pt.b = l), (this._pt.r = Ff));
            else if (d in o) Hf.call(this, e, d, l, _ ? _ + c : c);
            else if (d in e) this.add(e, d, l || e[d], _ ? _ + c : c, r, n);
            else if (d !== "parseTransform") {
              Jn(d, c);
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
      b && hl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Sa())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Si,
    aliases: ui,
    getSetter: function (e, t, i) {
      var r = ui[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in bi && t !== Ct && (e._gsap.x || Si(e, "x"))
          ? i && _l === i
            ? t === "scale"
              ? zf
              : If
            : (_l = i || {}) && (t === "scale" ? Rf : Bf)
          : e.style && !Wn(e.style[t])
          ? Of
          : ~t.indexOf("-")
          ? kf
          : va(e, t)
      );
    },
    core: { _removeProperty: rr, _getMatrix: Ma },
  };
  (Tt.utils.checkPrefix = Or),
    (Tt.core.getStyleSaver = Sl),
    (function (s, e, t, i) {
      var r = Et(s + "," + e + "," + t, function (n) {
        bi[n] = 1;
      });
      Et(e, function (n) {
        (Lt.units[n] = "deg"), (Ll[n] = 1);
      }),
        (ui[r[13]] = s + "," + e),
        Et(i, function (n) {
          var a = n.split(":");
          ui[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Et(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        Lt.units[s] = "px";
      }
    ),
    Tt.registerPlugin(Rl);
  var X = Tt.registerPlugin(Rl) || Tt;
  X.core.Tween;
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
   */ var et,
    tn,
    Bt,
    Ni,
    Vi,
    kr,
    Bl,
    ar,
    fs,
    $l,
    Ei,
    ei,
    Nl,
    Vl = function () {
      return (
        et ||
        (typeof window != "undefined" &&
          (et = window.gsap) &&
          et.registerPlugin &&
          et)
      );
    },
    Hl = 1,
    Ir = [],
    ie = [],
    di = [],
    ps = Date.now,
    Fa = function (e, t) {
      return t;
    },
    Zf = function () {
      var e = fs.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, ie),
        r.push.apply(r, di),
        (ie = i),
        (di = r),
        (Fa = function (a, o) {
          return t[a](o);
        });
    },
    Hi = function (e, t) {
      return ~di.indexOf(e) && di[di.indexOf(e) + 1][t];
    },
    hs = function (e) {
      return !!~$l.indexOf(e);
    },
    gt = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!n });
    },
    vt = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    rn = "scrollLeft",
    sn = "scrollTop",
    La = function () {
      return (Ei && Ei.isPressed) || ie.cache++;
    },
    nn = function (e, t) {
      var i = function r(n) {
        if (n || n === 0) {
          Hl && (Bt.history.scrollRestoration = "manual");
          var a = Ei && Ei.isPressed;
          (n = r.v = Math.round(n) || (Ei && Ei.iOS ? 1 : 0)),
            e(n),
            (r.cacheID = ie.cache),
            a && Fa("ss", n);
        } else
          (t || ie.cache !== r.cacheID || Fa("ref")) &&
            ((r.cacheID = ie.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    _t = {
      s: rn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: nn(function (s) {
        return arguments.length
          ? Bt.scrollTo(s, Ve.sc())
          : Bt.pageXOffset || Ni[rn] || Vi[rn] || kr[rn] || 0;
      }),
    },
    Ve = {
      s: sn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: _t,
      sc: nn(function (s) {
        return arguments.length
          ? Bt.scrollTo(_t.sc(), s)
          : Bt.pageYOffset || Ni[sn] || Vi[sn] || kr[sn] || 0;
      }),
    },
    Mt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || et.utils.toArray)(e)[0] ||
        (typeof e == "string" && et.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Yi = function (e, t) {
      var i = t.s,
        r = t.sc;
      hs(e) && (e = Ni.scrollingElement || Vi);
      var n = ie.indexOf(e),
        a = r === Ve.sc ? 1 : 2;
      !~n && (n = ie.push(e) - 1), ie[n + a] || gt(e, "scroll", La);
      var o = ie[n + a],
        u =
          o ||
          (ie[n + a] =
            nn(Hi(e, i), !0) ||
            (hs(e)
              ? r
              : nn(function (l) {
                  return arguments.length ? (e[i] = l) : e[i];
                })));
      return (
        (u.target = e),
        o || (u.smooth = et.getProperty(e, "scrollBehavior") === "smooth"),
        u
      );
    },
    Oa = function (e, t, i) {
      var r = e,
        n = e,
        a = ps(),
        o = a,
        u = t || 50,
        l = Math.max(500, u * 3),
        c = function (f, d) {
          var g = ps();
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
            D = ps();
          return (
            (f || f === 0) && f !== r && c(f),
            a === o || D - o > l
              ? 0
              : ((r + (i ? g : -g)) / ((i ? D : a) - d)) * 1e3
          );
        };
      return { update: c, reset: h, getVelocity: m };
    },
    ms = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    Yl = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    ql = function () {
      (fs = et.core.globals().ScrollTrigger), fs && fs.core && Zf();
    },
    Xl = function (e) {
      return (
        (et = e || Vl()),
        !tn &&
          et &&
          typeof document != "undefined" &&
          document.body &&
          ((Bt = window),
          (Ni = document),
          (Vi = Ni.documentElement),
          (kr = Ni.body),
          ($l = [Bt, Ni, Vi, kr]),
          et.utils.clamp,
          (Nl = et.core.context || function () {}),
          (ar = "onpointerenter" in kr ? "pointer" : "mouse"),
          (Bl = Oe.isTouch =
            Bt.matchMedia &&
            Bt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Bt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (ei = Oe.eventTypes =
            (
              "ontouchstart" in Vi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Vi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Hl = 0);
          }, 500),
          ql(),
          (tn = 1)),
        tn
      );
    };
  (_t.op = Ve), (ie.cache = 0);
  var Oe = (function () {
    function s(t) {
      this.init(t);
    }
    var e = s.prototype;
    return (
      (e.init = function (i) {
        tn || Xl(et) || console.warn("Please gsap.registerPlugin(Observer)"),
          fs || ql();
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
          D = i.onDragEnd,
          _ = i.onDrag,
          v = i.onPress,
          y = i.onRelease,
          w = i.onRight,
          x = i.onLeft,
          b = i.onUp,
          T = i.onDown,
          E = i.onChangeX,
          S = i.onChangeY,
          O = i.onChange,
          P = i.onToggleX,
          k = i.onToggleY,
          F = i.onHover,
          R = i.onHoverEnd,
          I = i.onMove,
          M = i.ignoreCheck,
          L = i.isNormalizer,
          A = i.onGestureStart,
          C = i.onGestureEnd,
          Y = i.onWheel,
          Q = i.onEnable,
          ye = i.onDisable,
          se = i.onClick,
          B = i.scrollSpeed,
          $ = i.capture,
          N = i.allowClicks,
          W = i.lockAxis,
          ce = i.onLockAxis;
        (this.target = o = Mt(o) || Vi),
          (this.vars = i),
          p && (p = et.utils.toArray(p)),
          (r = r || 1e-9),
          (n = n || 0),
          (f = f || 1),
          (B = B || 1),
          (a = a || "wheel,touch,pointer"),
          (l = l !== !1),
          u || (u = parseFloat(Bt.getComputedStyle(kr).lineHeight) || 22);
        var tt,
          Se,
          Ee,
          J,
          ne,
          _e,
          Ye,
          z = this,
          $e = 0,
          ut = 0,
          Ht = i.passive || (!c && i.passive !== !1),
          De = Yi(o, _t),
          Yt = Yi(o, Ve),
          Qt = De(),
          ti = Yt(),
          Ae =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            ei[0] === "pointerdown",
          Jt = hs(o),
          pe = o.ownerDocument || Ni,
          Pt = [0, 0, 0],
          je = [0, 0, 0],
          Ci = 0,
          Fs = function () {
            return (Ci = ps());
          },
          Ne = function (j, de) {
            return (
              ((z.event = j) && p && ~p.indexOf(j.target)) ||
              (de && Ae && j.pointerType !== "touch") ||
              (M && M(j, de))
            );
          },
          Pn = function () {
            z._vx.reset(), z._vy.reset(), Se.pause(), h && h(z);
          },
          Mi = function () {
            var j = (z.deltaX = Yl(Pt)),
              de = (z.deltaY = Yl(je)),
              V = Math.abs(j) >= r,
              K = Math.abs(de) >= r;
            O && (V || K) && O(z, j, de, Pt, je),
              V &&
                (w && z.deltaX > 0 && w(z),
                x && z.deltaX < 0 && x(z),
                E && E(z),
                P && z.deltaX < 0 != $e < 0 && P(z),
                ($e = z.deltaX),
                (Pt[0] = Pt[1] = Pt[2] = 0)),
              K &&
                (T && z.deltaY > 0 && T(z),
                b && z.deltaY < 0 && b(z),
                S && S(z),
                k && z.deltaY < 0 != ut < 0 && k(z),
                (ut = z.deltaY),
                (je[0] = je[1] = je[2] = 0)),
              (J || Ee) &&
                (I && I(z),
                Ee && (g && Ee === 1 && g(z), _ && _(z), (Ee = 0)),
                (J = !1)),
              _e && !(_e = !1) && ce && ce(z),
              ne && (Y(z), (ne = !1)),
              (tt = 0);
          },
          qr = function (j, de, V) {
            (Pt[V] += j),
              (je[V] += de),
              z._vx.update(j),
              z._vy.update(de),
              l ? tt || (tt = requestAnimationFrame(Mi)) : Mi();
          },
          Xr = function (j, de) {
            W &&
              !Ye &&
              ((z.axis = Ye = Math.abs(j) > Math.abs(de) ? "x" : "y"),
              (_e = !0)),
              Ye !== "y" && ((Pt[2] += j), z._vx.update(j, !0)),
              Ye !== "x" && ((je[2] += de), z._vy.update(de, !0)),
              l ? tt || (tt = requestAnimationFrame(Mi)) : Mi();
          },
          Gi = function (j) {
            if (!Ne(j, 1)) {
              j = ms(j, c);
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
                  ((Ee = Z ? 2 : 1), Z || (z.isDragging = !0), Xr(K, G));
            }
          },
          gr = (z.onPress = function (ee) {
            Ne(ee, 1) ||
              (ee && ee.button) ||
              ((z.axis = Ye = null),
              Se.pause(),
              (z.isPressed = !0),
              (ee = ms(ee)),
              ($e = ut = 0),
              (z.startX = z.x = ee.clientX),
              (z.startY = z.y = ee.clientY),
              z._vx.reset(),
              z._vy.reset(),
              gt(L ? o : pe, ei[1], Gi, Ht, !0),
              (z.deltaX = z.deltaY = 0),
              v && v(z));
          }),
          oe = (z.onRelease = function (ee) {
            if (!Ne(ee, 1)) {
              vt(L ? o : pe, ei[1], Gi, !0);
              var j = !isNaN(z.y - z.startY),
                de = z.isDragging,
                V =
                  de &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                K = ms(ee);
              !V &&
                j &&
                (z._vx.reset(),
                z._vy.reset(),
                c &&
                  N &&
                  et.delayedCall(0.08, function () {
                    if (ps() - Ci > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (pe.createEvent) {
                        var G = pe.createEvent("MouseEvents");
                        G.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Bt,
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
                h && de && !L && Se.restart(!0),
                Ee && Mi(),
                D && de && D(z),
                y && y(z, V);
            }
          }),
          vr = function (j) {
            return (
              j.touches &&
              j.touches.length > 1 &&
              (z.isGesturing = !0) &&
              A(j, z.isDragging)
            );
          },
          ii = function () {
            return (z.isGesturing = !1) || C(z);
          },
          ri = function (j) {
            if (!Ne(j)) {
              var de = De(),
                V = Yt();
              qr((de - Qt) * B, (V - ti) * B, 1),
                (Qt = de),
                (ti = V),
                h && Se.restart(!0);
            }
          },
          si = function (j) {
            if (!Ne(j)) {
              (j = ms(j, c)), Y && (ne = !0);
              var de =
                (j.deltaMode === 1
                  ? u
                  : j.deltaMode === 2
                  ? Bt.innerHeight
                  : 1) * f;
              qr(j.deltaX * de, j.deltaY * de, 0), h && !L && Se.restart(!0);
            }
          },
          _r = function (j) {
            if (!Ne(j)) {
              var de = j.clientX,
                V = j.clientY,
                K = de - z.x,
                G = V - z.y;
              (z.x = de),
                (z.y = V),
                (J = !0),
                h && Se.restart(!0),
                (K || G) && Xr(K, G);
            }
          },
          Gr = function (j) {
            (z.event = j), F(z);
          },
          Pi = function (j) {
            (z.event = j), R(z);
          },
          Ls = function (j) {
            return Ne(j) || (ms(j, c) && se(z));
          };
        (Se = z._dc = et.delayedCall(m || 0.25, Pn).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = Oa(0, 50, !0)),
          (z._vy = Oa(0, 50, !0)),
          (z.scrollX = De),
          (z.scrollY = Yt),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          Nl(this),
          (z.enable = function (ee) {
            return (
              z.isEnabled ||
                (gt(Jt ? pe : o, "scroll", La),
                a.indexOf("scroll") >= 0 &&
                  gt(Jt ? pe : o, "scroll", ri, Ht, $),
                a.indexOf("wheel") >= 0 && gt(o, "wheel", si, Ht, $),
                ((a.indexOf("touch") >= 0 && Bl) ||
                  a.indexOf("pointer") >= 0) &&
                  (gt(o, ei[0], gr, Ht, $),
                  gt(pe, ei[2], oe),
                  gt(pe, ei[3], oe),
                  N && gt(o, "click", Fs, !0, !0),
                  se && gt(o, "click", Ls),
                  A && gt(pe, "gesturestart", vr),
                  C && gt(pe, "gestureend", ii),
                  F && gt(o, ar + "enter", Gr),
                  R && gt(o, ar + "leave", Pi),
                  I && gt(o, ar + "move", _r)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = J = Ee = !1),
                z._vx.reset(),
                z._vy.reset(),
                (Qt = De()),
                (ti = Yt()),
                ee && ee.type && gr(ee),
                Q && Q(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (Ir.filter(function (ee) {
                return ee !== z && hs(ee.target);
              }).length || vt(Jt ? pe : o, "scroll", La),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), vt(L ? o : pe, ei[1], Gi, !0)),
              vt(Jt ? pe : o, "scroll", ri, $),
              vt(o, "wheel", si, $),
              vt(o, ei[0], gr, $),
              vt(pe, ei[2], oe),
              vt(pe, ei[3], oe),
              vt(o, "click", Fs, !0),
              vt(o, "click", Ls),
              vt(pe, "gesturestart", vr),
              vt(pe, "gestureend", ii),
              vt(o, ar + "enter", Gr),
              vt(o, ar + "leave", Pi),
              vt(o, ar + "move", _r),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              ye && ye(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var ee = Ir.indexOf(z);
              ee >= 0 && Ir.splice(ee, 1), Ei === z && (Ei = 0);
            }),
          Ir.push(z),
          L && hs(o) && (Ei = z),
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
  (Oe.version = "3.12.7"),
    (Oe.create = function (s) {
      return new Oe(s);
    }),
    (Oe.register = Xl),
    (Oe.getAll = function () {
      return Ir.slice();
    }),
    (Oe.getById = function (s) {
      return Ir.filter(function (e) {
        return e.vars.id === s;
      })[0];
    }),
    Vl() && et.registerPlugin(Oe);
  /*!
   * ScrollTrigger 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var H,
    zr,
    re,
    ve,
    $t,
    fe,
    ka,
    an,
    gs,
    vs,
    _s,
    on,
    at,
    ln,
    Ia,
    Dt,
    Gl,
    Wl,
    Rr,
    Ul,
    za,
    jl,
    yt,
    Ra,
    Kl,
    Zl,
    qi,
    Ba,
    $a,
    Br,
    Na,
    un,
    Va,
    Ha,
    cn = 1,
    ot = Date.now,
    Ya = ot(),
    jt = 0,
    Ds = 0,
    Ql = function (e, t, i) {
      var r = Nt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    Jl = function (e, t) {
      return t && (!Nt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Qf = function s() {
      return Ds && requestAnimationFrame(s);
    },
    eu = function () {
      return (ln = 1);
    },
    tu = function () {
      return (ln = 0);
    },
    fi = function (e) {
      return e;
    },
    ys = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    iu = function () {
      return typeof window != "undefined";
    },
    ru = function () {
      return H || (iu() && (H = window.gsap) && H.registerPlugin && H);
    },
    or = function (e) {
      return !!~ka.indexOf(e);
    },
    su = function (e) {
      return (
        (e === "Height" ? Na : re["inner" + e]) ||
        $t["client" + e] ||
        fe["client" + e]
      );
    },
    nu = function (e) {
      return (
        Hi(e, "getBoundingClientRect") ||
        (or(e)
          ? function () {
              return (Sn.width = re.innerWidth), (Sn.height = Na), Sn;
            }
          : function () {
              return xi(e);
            })
      );
    },
    Jf = function (e, t, i) {
      var r = i.d,
        n = i.d2,
        a = i.a;
      return (a = Hi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? su(n) : e["client" + n]) || 0;
          };
    },
    ep = function (e, t) {
      return !t || ~di.indexOf(e)
        ? nu(e)
        : function () {
            return Sn;
          };
    },
    pi = function (e, t) {
      var i = t.s,
        r = t.d2,
        n = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Hi(e, i))
          ? a() - nu(e)()[n]
          : or(e)
          ? ($t[i] || fe[i]) - su(r)
          : e[i] - e["offset" + r]
      );
    },
    dn = function (e, t) {
      for (var i = 0; i < Rr.length; i += 3)
        (!t || ~t.indexOf(Rr[i + 1])) && e(Rr[i], Rr[i + 1], Rr[i + 2]);
    },
    Nt = function (e) {
      return typeof e == "string";
    },
    lt = function (e) {
      return typeof e == "function";
    },
    ws = function (e) {
      return typeof e == "number";
    },
    lr = function (e) {
      return typeof e == "object";
    },
    bs = function (e, t, i) {
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
    $r = Math.abs,
    au = "left",
    ou = "top",
    Xa = "right",
    Ga = "bottom",
    ur = "width",
    cr = "height",
    Ss = "Right",
    Es = "Left",
    xs = "Top",
    Ts = "Bottom",
    Be = "padding",
    Kt = "margin",
    Nr = "Width",
    Wa = "Height",
    He = "px",
    Zt = function (e) {
      return re.getComputedStyle(e);
    },
    tp = function (e) {
      var t = Zt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    lu = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    xi = function (e, t) {
      var i =
          t &&
          Zt(e)[Ia] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
    fn = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    uu = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        n;
      for (n in i) t.push(i[n] / r);
      return t;
    },
    ip = function (e) {
      return function (t) {
        return H.utils.snap(uu(e), t);
      };
    },
    Ua = function (e) {
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
        return Ua(uu(e))(t, i.direction);
      };
    },
    pn = function (e, t, i, r) {
      return i.split(",").forEach(function (n) {
        return e(t, n, r);
      });
    },
    We = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: !r, capture: !!n });
    },
    Ue = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    hn = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    cu = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    mn = { toggleActions: "play", anticipatePin: 0 },
    gn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    vn = function (e, t) {
      if (Nt(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in gn
              ? gn[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    _n = function (e, t, i, r, n, a, o, u) {
      var l = n.startColor,
        c = n.endColor,
        h = n.fontSize,
        m = n.indent,
        p = n.fontWeight,
        f = ve.createElement("div"),
        d = or(i) || Hi(i, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        D = d ? fe : i,
        _ = e.indexOf("start") !== -1,
        v = _ ? l : c,
        y =
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
        (y += "position:" + ((g || u) && d ? "fixed;" : "absolute;")),
        (g || u || !d) &&
          (y += (r === Ve ? Xa : Ga) + ":" + (a + parseFloat(m)) + "px;"),
        o &&
          (y +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (f._isStart = _),
        f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (f.style.cssText = y),
        (f.innerText = t || t === 0 ? e + "-" + t : e),
        D.children[0] ? D.insertBefore(f, D.children[0]) : D.appendChild(f),
        (f._offset = f["offset" + r.op.d2]),
        Dn(f, 0, r, _),
        f
      );
    },
    Dn = function (e, t, i, r) {
      var n = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + a + Nr] = 1),
        (n["border" + o + Nr] = 0),
        (n[i.p] = t + "px"),
        H.set(e, n);
    },
    te = [],
    ja = {},
    Cs,
    du = function () {
      return ot() - jt > 34 && (Cs || (Cs = requestAnimationFrame(Ti)));
    },
    Vr = function () {
      (!yt || !yt.isPressed || yt.startX > fe.clientWidth) &&
        (ie.cache++,
        yt ? Cs || (Cs = requestAnimationFrame(Ti)) : Ti(),
        jt || fr("scrollStart"),
        (jt = ot()));
    },
    Ka = function () {
      (Zl = re.innerWidth), (Kl = re.innerHeight);
    },
    Ms = function (e) {
      ie.cache++,
        (e === !0 ||
          (!at &&
            !jl &&
            !ve.fullscreenElement &&
            !ve.webkitFullscreenElement &&
            (!Ra ||
              Zl !== re.innerWidth ||
              Math.abs(re.innerHeight - Kl) > re.innerHeight * 0.25))) &&
          an.restart(!0);
    },
    dr = {},
    sp = [],
    fu = function s() {
      return Ue(U, "scrollEnd", s) || hr(!0);
    },
    fr = function (e) {
      return (
        (dr[e] &&
          dr[e].map(function (t) {
            return t();
          })) ||
        sp
      );
    },
    Vt = [],
    pu = function (e) {
      for (var t = 0; t < Vt.length; t += 5)
        (!e || (Vt[t + 4] && Vt[t + 4].query === e)) &&
          ((Vt[t].style.cssText = Vt[t + 1]),
          Vt[t].getBBox && Vt[t].setAttribute("transform", Vt[t + 2] || ""),
          (Vt[t + 3].uncache = 1));
    },
    Za = function (e, t) {
      var i;
      for (Dt = 0; Dt < te.length; Dt++)
        (i = te[Dt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (un = !0), t && pu(t), t || fr("revert");
    },
    hu = function (e, t) {
      ie.cache++,
        (t || !wt) &&
          ie.forEach(function (i) {
            return lt(i) && i.cacheID++ && (i.rec = 0);
          }),
        Nt(e) && (re.history.scrollRestoration = $a = e);
    },
    wt,
    pr = 0,
    mu,
    np = function () {
      if (mu !== pr) {
        var e = (mu = pr);
        requestAnimationFrame(function () {
          return e === pr && hr(!0);
        });
      }
    },
    gu = function () {
      fe.appendChild(Br),
        (Na = (!yt && Br.offsetHeight) || re.innerHeight),
        fe.removeChild(Br);
    },
    vu = function (e) {
      return gs(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    hr = function (e, t) {
      if (
        (($t = ve.documentElement),
        (fe = ve.body),
        (ka = [re, ve, $t, fe]),
        jt && !e && !un)
      ) {
        We(U, "scrollEnd", fu);
        return;
      }
      gu(),
        (wt = U.isRefreshing = !0),
        ie.forEach(function (r) {
          return lt(r) && ++r.cacheID && (r.rec = r());
        });
      var i = fr("refreshInit");
      Ul && U.sort(),
        t || Za(),
        ie.forEach(function (r) {
          lt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        te.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (un = !1),
        te.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - a), r.refresh();
          }
        }),
        (Va = 1),
        vu(!0),
        te.forEach(function (r) {
          var n = pi(r.scroller, r._dir),
            a = r.vars.end === "max" || (r._endClamp && r.end > n),
            o = r._startClamp && r.start >= n;
          (a || o) &&
            r.setPositions(
              o ? n - 1 : r.start,
              a ? Math.max(o ? n : r.start + 1, n) : r.end,
              !0
            );
        }),
        vu(!1),
        (Va = 0),
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
        hu($a, 1),
        an.pause(),
        pr++,
        (wt = 2),
        Ti(2),
        te.forEach(function (r) {
          return lt(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (wt = U.isRefreshing = !1),
        fr("refresh");
    },
    Qa = 0,
    yn = 1,
    Ps,
    Ti = function (e) {
      if (e === 2 || (!wt && !un)) {
        (U.isUpdating = !0), Ps && Ps.update(0);
        var t = te.length,
          i = ot(),
          r = i - Ya >= 50,
          n = t && te[0].scroll();
        if (
          ((yn = Qa > n ? -1 : 1),
          wt || (Qa = n),
          r &&
            (jt && !ln && i - jt > 200 && ((jt = 0), fr("scrollEnd")),
            (_s = Ya),
            (Ya = i)),
          yn < 0)
        ) {
          for (Dt = t; Dt-- > 0; ) te[Dt] && te[Dt].update(0, r);
          yn = 1;
        } else for (Dt = 0; Dt < t; Dt++) te[Dt] && te[Dt].update(0, r);
        U.isUpdating = !1;
      }
      Cs = 0;
    },
    Ja = [
      au,
      ou,
      Ga,
      Xa,
      Kt + Ts,
      Kt + Ss,
      Kt + xs,
      Kt + Es,
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
    wn = Ja.concat([
      ur,
      cr,
      "boxSizing",
      "max" + Nr,
      "max" + Wa,
      "position",
      Kt,
      Be,
      Be + xs,
      Be + Ss,
      Be + Ts,
      Be + Es,
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
    eo = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var n = Ja.length, a = t.style, o = e.style, u; n--; )
          (u = Ja[n]), (a[u] = i[u]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[Ga] = o[Xa] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[ur] = fn(e, _t) + He),
          (a[cr] = fn(e, Ve) + He),
          (a[Be] = o[Kt] = o[ou] = o[au] = "0"),
          Hr(r),
          (o[ur] = o["max" + Nr] = i[ur]),
          (o[cr] = o["max" + Wa] = i[cr]),
          (o[Be] = i[Be]),
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
    bn = function (e) {
      for (var t = wn.length, i = e.style, r = [], n = 0; n < t; n++)
        r.push(wn[n], i[wn[n]]);
      return (r.t = e), r;
    },
    lp = function (e, t, i) {
      for (var r = [], n = e.length, a = i ? 8 : 0, o; a < n; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    Sn = { left: 0, top: 0 },
    _u = function (e, t, i, r, n, a, o, u, l, c, h, m, p, f) {
      lt(e) && (e = e(u)),
        Nt(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? vn("0" + e.substr(3), i) : 0));
      var d = p ? p.time() : 0,
        g,
        D,
        _;
      if ((p && p.seek(0), isNaN(e) || (e = +e), ws(e)))
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
        lt(t) && (t = t(u));
        var v = (e || "0").split(" "),
          y,
          w,
          x,
          b;
        (_ = Mt(t, u) || fe),
          (y = xi(_) || {}),
          (!y || (!y.left && !y.top)) &&
            Zt(_).display === "none" &&
            ((b = _.style.display),
            (_.style.display = "block"),
            (y = xi(_)),
            b ? (_.style.display = b) : _.style.removeProperty("display")),
          (w = vn(v[0], y[r.d])),
          (x = vn(v[1] || "0", i)),
          (e = y[r.p] - l[r.p] - c + w + n - x),
          o && Dn(o, x, r, i - x < 20 || (o._isStart && x > 20)),
          (i -= i - x);
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
              (!E && (h ? Math.max(fe[g], $t[g]) : a.parentNode[g]) <= T + 1)
          ),
          h &&
            ((l = xi(o)),
            h && (a.style[r.op.p] = l[r.op.p] - r.op.m - a._offset + He));
      }
      return (
        p &&
          _ &&
          ((g = xi(_)),
          p.seek(m),
          (D = xi(_)),
          (p._caScrollDist = g[r.p] - D[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(d),
        p ? e : Math.round(e)
      );
    },
    up = /(webkit|moz|length|cssText|inset)/i,
    Du = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var n = e.style,
          a,
          o;
        if (t === fe) {
          (e._stOrig = n.cssText), (o = Zt(e));
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
    yu = function (e, t, i) {
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
    En = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), H.set(e, r);
    },
    wu = function (e, t) {
      var i = Yi(e, t),
        r = "_scroll" + t.p2,
        n = function a(o, u, l, c, h) {
          var m = a.tween,
            p = u.onComplete,
            f = {};
          l = l || i();
          var d = yu(i, l, function () {
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
              ie.cache++, a.tween && Ti();
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
        We(e, "wheel", i.wheelHandler),
        U.isTouch && We(e, "touchmove", i.wheelHandler),
        n
      );
    },
    U = (function () {
      function s(t, i) {
        zr ||
          s.register(H) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Ba(this),
          this.init(t, i);
      }
      var e = s.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Ds)
          ) {
            this.update = this.refresh = this.kill = fi;
            return;
          }
          i = lu(Nt(i) || ws(i) || i.nodeType ? { trigger: i } : i, mn);
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
            D = n.onScrubComplete,
            _ = n.onSnapComplete,
            v = n.once,
            y = n.snap,
            w = n.pinReparent,
            x = n.pinSpacer,
            b = n.containerAnimation,
            T = n.fastScrollEnd,
            E = n.preventOverlaps,
            S =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? _t
                : Ve,
            O = !h && h !== 0,
            P = Mt(i.scroller || re),
            k = H.core.getCache(P),
            F = or(P),
            R =
              ("pinType" in i
                ? i.pinType
                : Hi(P, "pinType") || (F && "fixed")) === "fixed",
            I = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            M = O && i.toggleActions.split(" "),
            L = "markers" in i ? i.markers : mn.markers,
            A = F ? 0 : parseFloat(Zt(P)["border" + S.p2 + Nr]) || 0,
            C = this,
            Y =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(C);
              },
            Q = Jf(P, F, S),
            ye = ep(P, F),
            se = 0,
            B = 0,
            $ = 0,
            N = Yi(P, S),
            W,
            ce,
            tt,
            Se,
            Ee,
            J,
            ne,
            _e,
            Ye,
            z,
            $e,
            ut,
            Ht,
            De,
            Yt,
            Qt,
            ti,
            Ae,
            Jt,
            pe,
            Pt,
            je,
            Ci,
            Fs,
            Ne,
            Pn,
            Mi,
            qr,
            Xr,
            Gi,
            gr,
            oe,
            vr,
            ii,
            ri,
            si,
            _r,
            Gr,
            Pi;
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
              ((Ul = 1), i.refreshPriority === -9999 && (Ps = C)),
            (k.tweenScroll = k.tweenScroll || {
              top: wu(P, Ve),
              left: wu(P, _t),
            }),
            (C.tweenTo = W = k.tweenScroll[S.p]),
            (C.scrubDuration = function (V) {
              (vr = ws(V) && V),
                vr
                  ? oe
                    ? oe.duration(V)
                    : (oe = H.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: vr,
                        paused: !0,
                        onComplete: function () {
                          return D && D(C);
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
              (Gi = 0),
              u || (u = r.vars.id)),
            y &&
              ((!lr(y) || y.push) && (y = { snapTo: y }),
              "scrollBehavior" in fe.style &&
                H.set(F ? [fe, $t] : P, { scrollBehavior: "auto" }),
              ie.forEach(function (V) {
                return (
                  lt(V) &&
                  V.target === (F ? ve.scrollingElement || $t : P) &&
                  (V.smooth = !1)
                );
              }),
              (tt = lt(y.snapTo)
                ? y.snapTo
                : y.snapTo === "labels"
                ? ip(r)
                : y.snapTo === "labelsDirectional"
                ? rp(r)
                : y.directional !== !1
                ? function (V, K) {
                    return Ua(y.snapTo)(V, ot() - B < 500 ? 0 : K.direction);
                  }
                : H.utils.snap(y.snapTo)),
              (ii = y.duration || { min: 0.1, max: 2 }),
              (ii = lr(ii) ? vs(ii.min, ii.max) : vs(ii, ii)),
              (ri = H.delayedCall(y.delay || vr / 2 || 0.1, function () {
                var V = N(),
                  K = ot() - B < 500,
                  G = W.tween;
                if (
                  (K || Math.abs(C.getVelocity()) < 10) &&
                  !G &&
                  !ln &&
                  se !== V
                ) {
                  var Z = (V - J) / De,
                    Ke = r && !O ? r.totalProgress() : Z,
                    ue = K ? 0 : ((Ke - gr) / (ot() - _s)) * 1e3 || 0,
                    ke = H.utils.clamp(-Z, 1 - Z, ($r(ue / 2) * ue) / 0.185),
                    ct = Z + (y.inertia === !1 ? 0 : ke),
                    Fe,
                    xe,
                    ge = y,
                    ni = ge.onStart,
                    Me = ge.onInterrupt,
                    qt = ge.onComplete;
                  if (
                    ((Fe = tt(ct, C)),
                    ws(Fe) || (Fe = ct),
                    (xe = Math.max(0, Math.round(J + Fe * De))),
                    V <= ne && V >= J && xe !== V)
                  ) {
                    if (G && !G._initted && G.data <= $r(xe - V)) return;
                    y.inertia === !1 && (ke = Fe - Z),
                      W(
                        xe,
                        {
                          duration: ii(
                            $r(
                              (Math.max($r(ct - Ke), $r(Fe - Ke)) * 0.185) /
                                ue /
                                0.05 || 0
                            )
                          ),
                          ease: y.ease || "power3",
                          data: $r(xe - V),
                          onInterrupt: function () {
                            return ri.restart(!0) && Me && Me(C);
                          },
                          onComplete: function () {
                            C.update(),
                              (se = N()),
                              r &&
                                !O &&
                                (oe
                                  ? oe.resetTo(
                                      "totalProgress",
                                      Fe,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(Fe)),
                              (Gi = gr =
                                r && !O ? r.totalProgress() : C.progress),
                              _ && _(C),
                              qt && qt(C);
                          },
                        },
                        V,
                        ke * De,
                        xe - V - ke * De
                      ),
                      ni && ni(C, W.tween);
                  }
                } else C.isActive && se !== V && ri.restart(!0);
              }).pause())),
            u && (ja[u] = C),
            (m = C.trigger = Mt(m || (p !== !0 && p))),
            (Pi = m && m._gsap && m._gsap.stRevert),
            Pi && (Pi = Pi(C)),
            (p = p === !0 ? m : Mt(p)),
            Nt(o) && (o = { targets: m, className: o }),
            p &&
              (f === !1 ||
                f === Kt ||
                (f =
                  !f &&
                  p.parentNode &&
                  p.parentNode.style &&
                  Zt(p.parentNode).display === "flex"
                    ? !1
                    : Be),
              (C.pin = p),
              (ce = H.core.getCache(p)),
              ce.spacer
                ? (Yt = ce.pinState)
                : (x &&
                    ((x = Mt(x)),
                    x && !x.nodeType && (x = x.current || x.nativeElement),
                    (ce.spacerIsNative = !!x),
                    x && (ce.spacerState = bn(x))),
                  (ce.spacer = Ae = x || ve.createElement("div")),
                  Ae.classList.add("pin-spacer"),
                  u && Ae.classList.add("pin-spacer-" + u),
                  (ce.pinState = Yt = bn(p))),
              i.force3D !== !1 && H.set(p, { force3D: !0 }),
              (C.spacer = Ae = ce.spacer),
              (Xr = Zt(p)),
              (Fs = Xr[f + S.os2]),
              (pe = H.getProperty(p)),
              (Pt = H.quickSetter(p, S.a, He)),
              eo(p, Ae, Xr),
              (ti = bn(p))),
            L)
          ) {
            (ut = lr(L) ? lu(L, cu) : cu),
              (z = _n("scroller-start", u, P, S, ut, 0)),
              ($e = _n("scroller-end", u, P, S, ut, 0, z)),
              (Jt = z["offset" + S.op.d2]);
            var Ls = Mt(Hi(P, "content") || P);
            (_e = this.markerStart = _n("start", u, Ls, S, ut, Jt, 0, b)),
              (Ye = this.markerEnd = _n("end", u, Ls, S, ut, Jt, 0, b)),
              b && (Gr = H.quickSetter([_e, Ye], S.a, He)),
              !R &&
                !(di.length && Hi(P, "fixedMarkers") === !0) &&
                (tp(F ? fe : P),
                H.set([z, $e], { force3D: !0 }),
                (Pn = H.quickSetter(z, S.a, He)),
                (qr = H.quickSetter($e, S.a, He)));
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
                Z = at;
              G !== C.isReverted &&
                (G &&
                  ((si = Math.max(N(), C.scroll.rec || 0)),
                  ($ = C.progress),
                  (_r = r && r.progress())),
                _e &&
                  [_e, Ye, z, $e].forEach(function (Ke) {
                    return (Ke.style.display = G ? "none" : "block");
                  }),
                G && ((at = C), C.update(G)),
                p &&
                  (!w || !C.isActive) &&
                  (G ? ap(p, Ae, Yt) : eo(p, Ae, Zt(p), Ne)),
                G || C.update(G),
                (at = Z),
                (C.isReverted = G));
            }),
            (C.refresh = function (V, K, G, Z) {
              if (!((at || !C.enabled) && !K)) {
                if (p && V && jt) {
                  We(s, "scrollEnd", fu);
                  return;
                }
                !wt && Y && Y(C),
                  (at = C),
                  W.tween && !G && (W.tween.kill(), (W.tween = 0)),
                  oe && oe.pause(),
                  d && r && r.revert({ kill: !1 }).invalidate(),
                  C.isReverted || C.revert(!0, !0),
                  (C._subPinOffset = !1);
                var Ke = Q(),
                  ue = ye(),
                  ke = b ? b.duration() : pi(P, S),
                  ct = De <= 0.01,
                  Fe = 0,
                  xe = Z || 0,
                  ge = lr(G) ? G.end : i.end,
                  ni = i.endTrigger || m,
                  Me = lr(G)
                    ? G.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  qt = (C.pinnedContainer =
                    i.pinnedContainer && Mt(i.pinnedContainer, C)),
                  gi = (m && Math.max(0, te.indexOf(C))) || 0,
                  it = gi,
                  rt,
                  dt,
                  Dr,
                  An,
                  ft,
                  qe,
                  vi,
                  oo,
                  $u,
                  Os,
                  _i,
                  ks,
                  Fn;
                for (
                  L &&
                  lr(G) &&
                  ((ks = H.getProperty(z, S.p)), (Fn = H.getProperty($e, S.p)));
                  it-- > 0;

                )
                  (qe = te[it]),
                    qe.end || qe.refresh(0, 1) || (at = C),
                    (vi = qe.pin),
                    vi &&
                      (vi === m || vi === p || vi === qt) &&
                      !qe.isReverted &&
                      (Os || (Os = []), Os.unshift(qe), qe.revert(!0, !0)),
                    qe !== te[it] && (gi--, it--);
                for (
                  lt(Me) && (Me = Me(C)),
                    Me = Ql(Me, "start", C),
                    J =
                      _u(
                        Me,
                        m,
                        Ke,
                        S,
                        N(),
                        _e,
                        z,
                        C,
                        ue,
                        A,
                        R,
                        ke,
                        b,
                        C._startClamp && "_startClamp"
                      ) || (p ? -0.001 : 0),
                    lt(ge) && (ge = ge(C)),
                    Nt(ge) &&
                      !ge.indexOf("+=") &&
                      (~ge.indexOf(" ")
                        ? (ge = (Nt(Me) ? Me.split(" ")[0] : "") + ge)
                        : ((Fe = vn(ge.substr(2), Ke)),
                          (ge = Nt(Me)
                            ? Me
                            : (b
                                ? H.utils.mapRange(
                                    0,
                                    b.duration(),
                                    b.scrollTrigger.start,
                                    b.scrollTrigger.end,
                                    J
                                  )
                                : J) + Fe),
                          (ni = m))),
                    ge = Ql(ge, "end", C),
                    ne =
                      Math.max(
                        J,
                        _u(
                          ge || (ni ? "100% 0" : ke),
                          ni,
                          Ke,
                          S,
                          N() + Fe,
                          Ye,
                          $e,
                          C,
                          ue,
                          A,
                          R,
                          ke,
                          b,
                          C._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Fe = 0,
                    it = gi;
                  it--;

                )
                  (qe = te[it]),
                    (vi = qe.pin),
                    vi &&
                      qe.start - qe._pinPush <= J &&
                      !b &&
                      qe.end > 0 &&
                      ((rt =
                        qe.end -
                        (C._startClamp ? Math.max(0, qe.start) : qe.start)),
                      ((vi === m && qe.start - qe._pinPush < J) || vi === qt) &&
                        isNaN(Me) &&
                        (Fe += rt * (1 - qe.progress)),
                      vi === p && (xe += rt));
                if (
                  ((J += Fe),
                  (ne += Fe),
                  C._startClamp && (C._startClamp += Fe),
                  C._endClamp &&
                    !wt &&
                    ((C._endClamp = ne || -0.001),
                    (ne = Math.min(ne, pi(P, S)))),
                  (De = ne - J || ((J -= 0.01) && 0.001)),
                  ct && ($ = H.utils.clamp(0, 1, H.utils.normalize(J, ne, si))),
                  (C._pinPush = xe),
                  _e &&
                    Fe &&
                    ((rt = {}),
                    (rt[S.a] = "+=" + Fe),
                    qt && (rt[S.p] = "-=" + N()),
                    H.set([_e, Ye], rt)),
                  p && !(Va && C.end >= pi(P, S)))
                )
                  (rt = Zt(p)),
                    (An = S === Ve),
                    (Dr = N()),
                    (je = parseFloat(pe(S.a)) + xe),
                    !ke &&
                      ne > 1 &&
                      ((_i = (F ? ve.scrollingElement || $t : P).style),
                      (_i = {
                        style: _i,
                        value: _i["overflow" + S.a.toUpperCase()],
                      }),
                      F &&
                        Zt(fe)["overflow" + S.a.toUpperCase()] !== "scroll" &&
                        (_i.style["overflow" + S.a.toUpperCase()] = "scroll")),
                    eo(p, Ae, rt),
                    (ti = bn(p)),
                    (dt = xi(p, !0)),
                    (oo = R && Yi(P, An ? _t : Ve)()),
                    f
                      ? ((Ne = [f + S.os2, De + xe + He]),
                        (Ne.t = Ae),
                        (it = f === Be ? fn(p, S) + De + xe : 0),
                        it &&
                          (Ne.push(S.d, it + He),
                          Ae.style.flexBasis !== "auto" &&
                            (Ae.style.flexBasis = it + He)),
                        Hr(Ne),
                        qt &&
                          te.forEach(function (Is) {
                            Is.pin === qt &&
                              Is.vars.pinSpacing !== !1 &&
                              (Is._subPinOffset = !0);
                          }),
                        R && N(si))
                      : ((it = fn(p, S)),
                        it &&
                          Ae.style.flexBasis !== "auto" &&
                          (Ae.style.flexBasis = it + He)),
                    R &&
                      ((ft = {
                        top: dt.top + (An ? Dr - J : oo) + He,
                        left: dt.left + (An ? oo : Dr - J) + He,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ft[ur] = ft["max" + Nr] = Math.ceil(dt.width) + He),
                      (ft[cr] = ft["max" + Wa] = Math.ceil(dt.height) + He),
                      (ft[Kt] =
                        ft[Kt + xs] =
                        ft[Kt + Ss] =
                        ft[Kt + Ts] =
                        ft[Kt + Es] =
                          "0"),
                      (ft[Be] = rt[Be]),
                      (ft[Be + xs] = rt[Be + xs]),
                      (ft[Be + Ss] = rt[Be + Ss]),
                      (ft[Be + Ts] = rt[Be + Ts]),
                      (ft[Be + Es] = rt[Be + Es]),
                      (Qt = lp(Yt, ft, w)),
                      wt && N(0)),
                    r
                      ? (($u = r._initted),
                        za(1),
                        r.render(r.duration(), !0, !0),
                        (Ci = pe(S.a) - je + De + xe),
                        (Mi = Math.abs(De - Ci) > 1),
                        R && Mi && Qt.splice(Qt.length - 2, 2),
                        r.render(0, !0, !0),
                        $u || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        za(0))
                      : (Ci = De),
                    _i &&
                      (_i.value
                        ? (_i.style["overflow" + S.a.toUpperCase()] = _i.value)
                        : _i.style.removeProperty("overflow-" + S.a));
                else if (m && N() && !b)
                  for (dt = m.parentNode; dt && dt !== fe; )
                    dt._pinOffset &&
                      ((J -= dt._pinOffset), (ne -= dt._pinOffset)),
                      (dt = dt.parentNode);
                Os &&
                  Os.forEach(function (Is) {
                    return Is.revert(!1, !0);
                  }),
                  (C.start = J),
                  (C.end = ne),
                  (Se = Ee = wt ? si : N()),
                  !b && !wt && (Se < si && N(si), (C.scroll.rec = 0)),
                  C.revert(!1, !0),
                  (B = ot()),
                  ri && ((se = -1), ri.restart(!0)),
                  (at = 0),
                  r &&
                    O &&
                    (r._initted || _r) &&
                    r.progress() !== _r &&
                    r.progress(_r || 0, !0).render(r.time(), !0, !0),
                  (ct || $ !== C.progress || b || d || (r && !r._initted)) &&
                    (r &&
                      !O &&
                      r.totalProgress(
                        b && J < -0.001 && !$ ? H.utils.normalize(J, ne, 0) : $,
                        !0
                      ),
                    (C.progress = ct || (Se - J) / De === $ ? 0 : $)),
                  p && f && (Ae._pinOffset = Math.round(C.progress * Ci)),
                  oe && oe.invalidate(),
                  isNaN(ks) ||
                    ((ks -= H.getProperty(z, S.p)),
                    (Fn -= H.getProperty($e, S.p)),
                    En(z, S, ks),
                    En(_e, S, ks - (Z || 0)),
                    En($e, S, Fn),
                    En(Ye, S, Fn - (Z || 0))),
                  ct && !wt && C.update(),
                  c && !wt && !Ht && ((Ht = !0), c(C), (Ht = !1));
              }
            }),
            (C.getVelocity = function () {
              return ((N() - Ee) / (ot() - _s)) * 1e3 || 0;
            }),
            (C.endAnimation = function () {
              bs(C.callbackAnimation),
                r &&
                  (oe
                    ? oe.progress(1)
                    : r.paused()
                    ? O || bs(r, C.direction < 0, 1)
                    : bs(r, r.reversed()));
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
                Nt(V)
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
                var Z = wt === !0 ? si : C.scroll(),
                  Ke = V ? 0 : (Z - J) / De,
                  ue = Ke < 0 ? 0 : Ke > 1 ? 1 : Ke || 0,
                  ke = C.progress,
                  ct,
                  Fe,
                  xe,
                  ge,
                  ni,
                  Me,
                  qt,
                  gi;
                if (
                  (K &&
                    ((Ee = Se),
                    (Se = b ? N() : Z),
                    y && ((gr = Gi), (Gi = r && !O ? r.totalProgress() : ue))),
                  g &&
                    p &&
                    !at &&
                    !cn &&
                    jt &&
                    (!ue && J < Z + ((Z - Ee) / (ot() - _s)) * g
                      ? (ue = 1e-4)
                      : ue === 1 &&
                        ne > Z + ((Z - Ee) / (ot() - _s)) * g &&
                        (ue = 0.9999)),
                  ue !== ke && C.enabled)
                ) {
                  if (
                    ((ct = C.isActive = !!ue && ue < 1),
                    (Fe = !!ke && ke < 1),
                    (Me = ct !== Fe),
                    (ni = Me || !!ue != !!ke),
                    (C.direction = ue > ke ? 1 : -1),
                    (C.progress = ue),
                    ni &&
                      !at &&
                      ((xe = ue && !ke ? 0 : ue === 1 ? 1 : ke === 1 ? 2 : 3),
                      O &&
                        ((ge =
                          (!Me && M[xe + 1] !== "none" && M[xe + 1]) || M[xe]),
                        (gi =
                          r &&
                          (ge === "complete" || ge === "reset" || ge in r)))),
                    E &&
                      (Me || gi) &&
                      (gi || h || !r) &&
                      (lt(E)
                        ? E(C)
                        : C.getTrailing(E).forEach(function (Dr) {
                            return Dr.endAnimation();
                          })),
                    O ||
                      (oe && !at && !cn
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
                        : r && r.totalProgress(ue, !!(at && (B || V)))),
                    p)
                  ) {
                    if ((V && f && (Ae.style[f + S.os2] = Fs), !R))
                      Pt(ys(je + Ci * ue));
                    else if (ni) {
                      if (
                        ((qt =
                          !V && ue > ke && ne + 1 > Z && Z + 1 >= pi(P, S)),
                        w)
                      )
                        if (!V && (ct || qt)) {
                          var it = xi(p, !0),
                            rt = Z - J;
                          Du(
                            p,
                            fe,
                            it.top + (S === Ve ? rt : 0) + He,
                            it.left + (S === Ve ? 0 : rt) + He
                          );
                        } else Du(p, Ae);
                      Hr(ct || qt ? Qt : ti),
                        (Mi && ue < 1 && ct) ||
                          Pt(je + (ue === 1 && !qt ? Ci : 0));
                    }
                  }
                  y && !W.tween && !at && !cn && ri.restart(!0),
                    o &&
                      (Me || (v && ue && (ue < 1 || !Ha))) &&
                      gs(o.targets).forEach(function (Dr) {
                        return Dr.classList[ct || v ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !O && !V && a(C),
                    ni && !at
                      ? (O &&
                          (gi &&
                            (ge === "complete"
                              ? r.pause().totalProgress(1)
                              : ge === "reset"
                              ? r.restart(!0).pause()
                              : ge === "restart"
                              ? r.restart(!0)
                              : r[ge]()),
                          a && a(C)),
                        (Me || !Ha) &&
                          (l && Me && qa(C, l),
                          I[xe] && qa(C, I[xe]),
                          v && (ue === 1 ? C.kill(!1, 1) : (I[xe] = 0)),
                          Me ||
                            ((xe = ue === 1 ? 1 : 3), I[xe] && qa(C, I[xe]))),
                        T &&
                          !ct &&
                          Math.abs(C.getVelocity()) > (ws(T) ? T : 2500) &&
                          (bs(C.callbackAnimation),
                          oe
                            ? oe.progress(1)
                            : bs(r, ge === "reverse" ? 1 : !ue, 1)))
                      : O && a && !at && a(C);
                }
                if (qr) {
                  var dt = b ? (Z / b.duration()) * (b._caScrollDist || 0) : Z;
                  Pn(dt + (z._isFlipped ? 1 : 0)), qr(dt);
                }
                Gr && Gr((-Z / b.duration()) * (b._caScrollDist || 0));
              }
            }),
            (C.enable = function (V, K) {
              C.enabled ||
                ((C.enabled = !0),
                We(P, "resize", Ms),
                F || We(P, "scroll", Vr),
                Y && We(s, "refreshInit", Y),
                V !== !1 && ((C.progress = $ = 0), (Se = Ee = se = N())),
                K !== !1 && C.refresh());
            }),
            (C.getTween = function (V) {
              return V && W ? W.tween : oe;
            }),
            (C.setPositions = function (V, K, G, Z) {
              if (b) {
                var Ke = b.scrollTrigger,
                  ue = b.duration(),
                  ke = Ke.end - Ke.start;
                (V = Ke.start + (ke * V) / ue), (K = Ke.start + (ke * K) / ue);
              }
              C.refresh(
                !1,
                !1,
                {
                  start: Jl(V, G && !!C._startClamp),
                  end: Jl(K, G && !!C._endClamp),
                },
                Z
              ),
                C.update();
            }),
            (C.adjustPinSpacing = function (V) {
              if (Ne && V) {
                var K = Ne.indexOf(S.d) + 1;
                (Ne[K] = parseFloat(Ne[K]) + V + He),
                  (Ne[1] = parseFloat(Ne[1]) + V + He),
                  Hr(Ne);
              }
            }),
            (C.disable = function (V, K) {
              if (
                C.enabled &&
                (V !== !1 && C.revert(!0, !0),
                (C.enabled = C.isActive = !1),
                K || (oe && oe.pause()),
                (si = 0),
                ce && (ce.uncache = 1),
                Y && Ue(s, "refreshInit", Y),
                ri && (ri.pause(), W.tween && W.tween.kill() && (W.tween = 0)),
                !F)
              ) {
                for (var G = te.length; G--; )
                  if (te[G].scroller === P && te[G] !== C) return;
                Ue(P, "resize", Ms), F || Ue(P, "scroll", Vr);
              }
            }),
            (C.kill = function (V, K) {
              C.disable(V, K), oe && !K && oe.kill(), u && delete ja[u];
              var G = te.indexOf(C);
              G >= 0 && te.splice(G, 1),
                G === Dt && yn > 0 && Dt--,
                (G = 0),
                te.forEach(function (Z) {
                  return Z.scroller === C.scroller && (G = 1);
                }),
                G || wt || (C.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  V && r.revert({ kill: !1 }),
                  K || r.kill()),
                _e &&
                  [_e, Ye, z, $e].forEach(function (Z) {
                    return Z.parentNode && Z.parentNode.removeChild(Z);
                  }),
                Ps === C && (Ps = 0),
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
            Pi && Pi(C),
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
            zr ||
              ((H = i || ru()),
              iu() && window.document && s.enable(),
              (zr = Ds)),
            zr
          );
        }),
        (s.defaults = function (i) {
          if (i) for (var r in i) mn[r] = i[r];
          return mn;
        }),
        (s.disable = function (i, r) {
          (Ds = 0),
            te.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            Ue(re, "wheel", Vr),
            Ue(ve, "scroll", Vr),
            clearInterval(on),
            Ue(ve, "touchcancel", fi),
            Ue(fe, "touchstart", fi),
            pn(Ue, ve, "pointerdown,touchstart,mousedown", eu),
            pn(Ue, ve, "pointerup,touchend,mouseup", tu),
            an.kill(),
            dn(Ue);
          for (var n = 0; n < ie.length; n += 3)
            hn(Ue, ie[n], ie[n + 1]), hn(Ue, ie[n], ie[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((re = window),
            (ve = document),
            ($t = ve.documentElement),
            (fe = ve.body),
            H &&
              ((gs = H.utils.toArray),
              (vs = H.utils.clamp),
              (Ba = H.core.context || fi),
              (za = H.core.suppressOverwrites || fi),
              ($a = re.history.scrollRestoration || "auto"),
              (Qa = re.pageYOffset || 0),
              H.core.globals("ScrollTrigger", s),
              fe))
          ) {
            (Ds = 1),
              (Br = document.createElement("div")),
              (Br.style.height = "100vh"),
              (Br.style.position = "absolute"),
              gu(),
              Qf(),
              Oe.register(H),
              (s.isTouch = Oe.isTouch),
              (qi =
                Oe.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Ra = Oe.isTouch === 1),
              We(re, "wheel", Vr),
              (ka = [re, ve, $t, fe]),
              H.matchMedia
                ? ((s.matchMedia = function (l) {
                    var c = H.matchMedia(),
                      h;
                    for (h in l) c.add(h, l[h]);
                    return c;
                  }),
                  H.addEventListener("matchMediaInit", function () {
                    return Za();
                  }),
                  H.addEventListener("matchMediaRevert", function () {
                    return pu();
                  }),
                  H.addEventListener("matchMedia", function () {
                    hr(0, 1), fr("matchMedia");
                  }),
                  H.matchMedia().add("(orientation: portrait)", function () {
                    return Ka(), Ka;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Ka(),
              We(ve, "scroll", Vr);
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
                o = xi(fe),
                Ve.m = Math.round(o.top + Ve.sc()) || 0,
                _t.m = Math.round(o.left + _t.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                i ||
                  (fe.setAttribute("style", ""), fe.removeAttribute("style")),
                on = setInterval(du, 250),
                H.delayedCall(0.5, function () {
                  return (cn = 0);
                }),
                We(ve, "touchcancel", fi),
                We(fe, "touchstart", fi),
                pn(We, ve, "pointerdown,touchstart,mousedown", eu),
                pn(We, ve, "pointerup,touchend,mouseup", tu),
                Ia = H.utils.checkPrefix("transform"),
                wn.push(Ia),
                zr = ot(),
                an = H.delayedCall(0.2, hr).pause(),
                Rr = [
                  ve,
                  "visibilitychange",
                  function () {
                    var l = re.innerWidth,
                      c = re.innerHeight;
                    ve.hidden
                      ? ((Gl = l), (Wl = c))
                      : (Gl !== l || Wl !== c) && Ms();
                  },
                  ve,
                  "DOMContentLoaded",
                  hr,
                  re,
                  "load",
                  hr,
                  re,
                  "resize",
                  Ms,
                ],
                dn(We),
                te.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                u = 0;
              u < ie.length;
              u += 3
            )
              hn(Ue, ie[u], ie[u + 1]), hn(Ue, ie[u], ie[u + 2]);
          }
        }),
        (s.config = function (i) {
          "limitCallbacks" in i && (Ha = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(on)) || ((on = r) && setInterval(du, r)),
            "ignoreMobileResize" in i &&
              (Ra = s.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (dn(Ue) || dn(We, i.autoRefreshEvents || "none"),
              (jl = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (i, r) {
          var n = Mt(i),
            a = ie.indexOf(n),
            o = or(n);
          ~a && ie.splice(a, o ? 6 : 2),
            r && (o ? di.unshift(re, r, fe, r, $t, r) : di.unshift(n, r));
        }),
        (s.clearMatchMedia = function (i) {
          te.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (i, r, n) {
          var a = (Nt(i) ? Mt(i) : i).getBoundingClientRect(),
            o = a[n ? ur : cr] * r || 0;
          return n
            ? a.right - o > 0 && a.left + o < re.innerWidth
            : a.bottom - o > 0 && a.top + o < re.innerHeight;
        }),
        (s.positionInViewport = function (i, r, n) {
          Nt(i) && (i = Mt(i));
          var a = i.getBoundingClientRect(),
            o = a[n ? ur : cr],
            u =
              r == null
                ? o / 2
                : r in gn
                ? gn[r] * o
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
            var r = dr.killAll || [];
            (dr = {}),
              r.forEach(function (n) {
                return n();
              });
          }
        }),
        s
      );
    })();
  (U.version = "3.12.7"),
    (U.saveStyles = function (s) {
      return s
        ? gs(s).forEach(function (e) {
            if (e && e.style) {
              var t = Vt.indexOf(e);
              t >= 0 && Vt.splice(t, 5),
                Vt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  H.core.getCache(e),
                  Ba()
                );
            }
          })
        : Vt;
    }),
    (U.revert = function (s, e) {
      return Za(!s, e);
    }),
    (U.create = function (s, e) {
      return new U(s, e);
    }),
    (U.refresh = function (s) {
      return s ? Ms(!0) : (zr || U.register()) && hr(!0);
    }),
    (U.update = function (s) {
      return ++ie.cache && Ti(s === !0 ? 2 : 0);
    }),
    (U.clearScrollMemory = hu),
    (U.maxScroll = function (s, e) {
      return pi(s, e ? _t : Ve);
    }),
    (U.getScrollFunc = function (s, e) {
      return Yi(Mt(s), e ? _t : Ve);
    }),
    (U.getById = function (s) {
      return ja[s];
    }),
    (U.getAll = function () {
      return te.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (U.isScrolling = function () {
      return !!jt;
    }),
    (U.snapDirectional = Ua),
    (U.addEventListener = function (s, e) {
      var t = dr[s] || (dr[s] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (U.removeEventListener = function (s, e) {
      var t = dr[s],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (U.batch = function (s, e) {
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
          o.substr(0, 2) === "on" && lt(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        lt(n) &&
          ((n = n()),
          We(U, "refresh", function () {
            return (n = e.batchMax());
          })),
        gs(s).forEach(function (u) {
          var l = {};
          for (o in i) l[o] = i[o];
          (l.trigger = u), t.push(U.create(l));
        }),
        t
      );
    });
  var bu = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    to = function s(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Oe.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === $t && s(fe, t);
    },
    xn = { auto: 1, scroll: 1 },
    cp = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        n = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = n._gsap || H.core.getCache(n),
        o = ot(),
        u;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== fe &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(xn[(u = Zt(n)).overflowY] || xn[u.overflowX]));

        )
          n = n.parentNode;
        (a._isScroll =
          n &&
          n !== i &&
          !or(n) &&
          (xn[(u = Zt(n)).overflowY] || xn[u.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Su = function (e, t, i, r) {
      return Oe.create({
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
          return i && We(ve, Oe.eventTypes[0], xu, !1, !0);
        },
        onDisable: function () {
          return Ue(ve, Oe.eventTypes[0], xu, !0);
        },
      });
    },
    dp = /(input|label|select|textarea)/i,
    Eu,
    xu = function (e) {
      var t = dp.test(e.target.tagName);
      (t || Eu) && ((e._gsapAllow = !0), (Eu = t));
    },
    fp = function (e) {
      lr(e) || (e = {}),
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
        l = Mt(e.target) || $t,
        c = H.core.globals().ScrollSmoother,
        h = c && c.get(),
        m =
          qi &&
          ((e.content && Mt(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = Yi(l, Ve),
        f = Yi(l, _t),
        d = 1,
        g =
          (Oe.isTouch && re.visualViewport
            ? re.visualViewport.scale * re.visualViewport.width
            : re.outerWidth) / re.innerWidth,
        D = 0,
        _ = lt(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        v,
        y,
        w = Su(l, e.type, !0, n),
        x = function () {
          return (y = !1);
        },
        b = fi,
        T = fi,
        E = function () {
          (u = pi(l, Ve)),
            (T = vs(qi ? 1 : 0, u)),
            i && (b = vs(0, pi(l, _t))),
            (v = pr);
        },
        S = function () {
          (m._gsap.y = ys(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        O = function () {
          if (y) {
            requestAnimationFrame(x);
            var L = ys(o.deltaY / 2),
              A = T(p.v - L);
            if (m && A !== p.v + p.offset) {
              p.offset = A - p.v;
              var C = ys((parseFloat(m && m._gsap.y) || 0) - p.offset);
              (m.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                C +
                ", 0, 1)"),
                (m._gsap.y = C + "px"),
                (p.cacheID = ie.cache),
                Ti();
            }
            return !0;
          }
          p.offset && S(), (y = !0);
        },
        P,
        k,
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
            (qi && M.type === "touchmove" && O()) ||
            (d > 1.05 && M.type !== "touchstart") ||
            o.isGesturing ||
            (M.touches && M.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          y = !1;
          var M = d;
          (d = ys(((re.visualViewport && re.visualViewport.scale) || 1) / g)),
            P.pause(),
            M !== d && to(l, d > 1.01 ? !0 : i ? !1 : "x"),
            (k = f()),
            (F = p()),
            E(),
            (v = pr);
        }),
        (e.onRelease = e.onGestureStart =
          function (M, L) {
            if ((p.offset && S(), !L)) R.restart(!0);
            else {
              ie.cache++;
              var A = _(),
                C,
                Y;
              i &&
                ((C = f()),
                (Y = C + (A * 0.05 * -M.velocityX) / 0.227),
                (A *= bu(f, C, Y, pi(l, _t))),
                (P.vars.scrollX = b(Y))),
                (C = p()),
                (Y = C + (A * 0.05 * -M.velocityY) / 0.227),
                (A *= bu(p, C, Y, pi(l, Ve))),
                (P.vars.scrollY = T(Y)),
                P.invalidate().duration(A).play(0.01),
                ((qi && P.vars.scrollY >= u) || C >= u - 1) &&
                  H.to({}, { onUpdate: I, duration: A });
            }
            a && a(M);
          }),
        (e.onWheel = function () {
          P._ts && P.pause(), ot() - D > 1e3 && ((v = 0), (D = ot()));
        }),
        (e.onChange = function (M, L, A, C, Y) {
          if (
            (pr !== v && E(),
            L && i && f(b(C[2] === L ? k + (M.startX - M.x) : f() + L - C[1])),
            A)
          ) {
            p.offset && S();
            var Q = Y[2] === A,
              ye = Q ? F + M.startY - M.y : p() + A - Y[1],
              se = T(ye);
            Q && ye !== se && (F += se - ye), p(se);
          }
          (A || L) && Ti();
        }),
        (e.onEnable = function () {
          to(l, i ? !1 : "x"),
            U.addEventListener("refresh", I),
            We(re, "resize", I),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = f.smooth = !1)),
            w.enable();
        }),
        (e.onDisable = function () {
          to(l, !0),
            Ue(re, "resize", I),
            U.removeEventListener("refresh", I),
            w.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Oe(e)),
        (o.iOS = qi),
        qi && !p() && p(1),
        qi && H.ticker.add(fi),
        (R = o._dc),
        (P = H.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: yu(p, p(), function () {
              return P.pause();
            }),
          },
          onUpdate: Ti,
          onComplete: R.vars.onComplete,
        })),
        o
      );
    };
  (U.sort = function (s) {
    if (lt(s)) return te.sort(s);
    var e = re.pageYOffset || 0;
    return (
      U.getAll().forEach(function (t) {
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
    (U.observe = function (s) {
      return new Oe(s);
    }),
    (U.normalizeScroll = function (s) {
      if (typeof s == "undefined") return yt;
      if (s === !0 && yt) return yt.enable();
      if (s === !1) {
        yt && yt.kill(), (yt = s);
        return;
      }
      var e = s instanceof Oe ? s : fp(s);
      return (
        yt && yt.target === e.target && yt.kill(), or(e.target) && (yt = e), e
      );
    }),
    (U.core = {
      _getVelocityProp: Oa,
      _inputObserver: Su,
      _scrollers: ie,
      _proxies: di,
      bridge: {
        ss: function () {
          jt || fr("scrollStart"), (jt = ot());
        },
        ref: function () {
          return at;
        },
      },
    }),
    ru() && H.registerPlugin(U),
    X.registerPlugin(U);
  class mr {
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
          let a = mr.attr(100, e.getAttribute("marquee-speed")),
            o = mr.attr(!1, e.getAttribute("marquee-vertical")),
            u = mr.attr(!1, e.getAttribute("marquee-reverse")),
            l = mr.attr(!1, e.getAttribute("marquee-scrolldirection")),
            c = mr.attr(!1, e.getAttribute("marquee-scrollscrub")),
            h = -100,
            m = 1,
            p = !1;
          u && (h = 100);
          let f = X.timeline({
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
          U.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (D) => {
              if (
                !p &&
                (l &&
                  m !== D.direction &&
                  ((m = D.direction), f.timeScale(D.direction)),
                c)
              ) {
                let _ = D.getVelocity() * 0.006;
                (_ = X.utils.clamp(-60, 60, _)),
                  X.timeline({ onUpdate: () => f.timeScale(d.value) }).fromTo(
                    d,
                    { value: _ },
                    { value: m, duration: 0.5 }
                  );
              }
            },
          });
          function g(D) {
            p = D;
            let _ = { value: 1 },
              v = X.timeline({ onUpdate: () => f.timeScale(_.value) });
            D
              ? (v.fromTo(_, { value: m }, { value: 0, duration: 0.5 }),
                n.forEach((y) => y.setAttribute("marquee-status", "paused")))
              : (v.fromTo(_, { value: 0 }, { value: m, duration: 0.5 }),
                n.forEach((y) => y.setAttribute("marquee-status", "playing")));
          }
          window.matchMedia("(pointer: fine)").matches &&
            r.forEach((D) => {
              D.addEventListener("mouseenter", () => g(!0)),
                D.addEventListener("mouseleave", () => g(!1));
            }),
            n.forEach((D) => {
              D.addEventListener("click", function () {
                this.getAttribute("marquee-status") === "paused"
                  ? g(!1)
                  : g(!0);
              });
            });
        });
    }
  }
  function io() {
    new mr();
  }
  class pp {
    constructor() {
      this.swiper = new bt("[swiper='review-slider']", {
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
  function ro() {
    new pp();
  }
  X.registerPlugin(U);
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
        D = e.querySelector("[service-video-trigger='2d']"),
        _ = document.querySelector("[visual-wrap='2d']"),
        v = e.querySelector("[service-item='interactive']"),
        y = e.querySelector("[service-header='interactive']"),
        w = e.querySelector("[service-video-trigger='interactive']"),
        x = document.querySelector("[visual-wrap='interactive']"),
        b = document.querySelectorAll("[service-list-item='wrapper']"),
        T = document.querySelectorAll("[service-list-item='3d']"),
        E = document.querySelectorAll("[service-list-icon='3d']");
      document.querySelectorAll("[service-list-text='3d']");
      const S = document.querySelectorAll("[service-list-item='2d']"),
        O = document.querySelectorAll("[service-list-icon='2d']");
      document.querySelectorAll("[service-list-text='2d']");
      const P = document.querySelectorAll("[service-list-item='interactive']"),
        k = document.querySelectorAll("[service-list-icon='interactive']");
      document.querySelectorAll("[service-list-text='interactive']");
      const F = X.timeline({
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
          { y: "10%", scale: 0.8, opacity: 0, filter: "blur(30px)" },
          {
            y: "0%",
            scale: 1,
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
          E,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_3D_IN}`
        ),
        F.to(
          [h, m, p],
          {
            scale: 0.9,
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
          {
            opacity: 0.5,
            filter: "blur(30px)",
            duration: 0.8,
            ease: "power2.in",
          },
          `${s.SERVICE_3D_OUT}`
        ),
        F.to(
          E,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_3D_OUT}`
        ),
        F.fromTo(
          [d, g, D],
          { y: "10%", scale: 0.9, opacity: 0, filter: "blur(30px)" },
          {
            y: "0%",
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
          },
          `${s.SERVICE_2D_IN}`
        ),
        F.fromTo(
          _,
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
          O,
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
          [d, g, D],
          {
            scale: 0.9,
            opacity: 0,
            filter: "blur(30px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.in",
          },
          `${s.SERVICE_2D_OUT}`
        ),
        F.to(
          _,
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
          O,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_2D_OUT}`
        ),
        F.fromTo(
          [v, y, w],
          { y: "10%", scale: 0.9, opacity: 0, filter: "blur(30px)" },
          {
            y: "0%",
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
          },
          `${s.SERVICE_INTERACTIVE_IN}`
        ),
        F.fromTo(
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
  function Tu(s, e, t) {
    return Math.max(s, Math.min(e, t));
  }
  function _p(s, e, t) {
    return (1 - t) * s + t * e;
  }
  function Dp(s, e, t, i) {
    return _p(s, e, 1 - Math.exp(-t * i));
  }
  function yp(s, e) {
    return ((s % e) + e) % e;
  }
  var wp = class {
    constructor() {
      q(this, "isRunning", !1);
      q(this, "value", 0);
      q(this, "from", 0);
      q(this, "to", 0);
      q(this, "currentTime", 0);
      q(this, "lerp");
      q(this, "duration");
      q(this, "easing");
      q(this, "onUpdate");
    }
    advance(s) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += s;
        const i = Tu(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = Dp(this.value, this.to, this.lerp * 60, s)),
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
        q(this, "width", 0);
        q(this, "height", 0);
        q(this, "scrollHeight", 0);
        q(this, "scrollWidth", 0);
        q(this, "debouncedResize");
        q(this, "wrapperResizeObserver");
        q(this, "contentResizeObserver");
        q(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        q(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        q(this, "onContentResize", () => {
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
    Cu = class {
      constructor() {
        q(this, "events", {});
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
    Mu = 100 / 6,
    Xi = { passive: !1 },
    Ep = class {
      constructor(s, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        q(this, "touchStart", { x: 0, y: 0 });
        q(this, "lastDelta", { x: 0, y: 0 });
        q(this, "window", { width: 0, height: 0 });
        q(this, "emitter", new Cu());
        q(this, "onTouchStart", (s) => {
          const { clientX: e, clientY: t } = s.targetTouches
            ? s.targetTouches[0]
            : s;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s });
        });
        q(this, "onTouchMove", (s) => {
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
        q(this, "onTouchEnd", (s) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: s,
          });
        });
        q(this, "onWheel", (s) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = s;
          const r = i === 1 ? Mu : i === 2 ? this.window.width : 1,
            n = i === 1 ? Mu : i === 2 ? this.window.height : 1;
          (e *= r),
            (t *= n),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: s });
        });
        q(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = s),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Xi),
          this.element.addEventListener("touchstart", this.onTouchStart, Xi),
          this.element.addEventListener("touchmove", this.onTouchMove, Xi),
          this.element.addEventListener("touchend", this.onTouchEnd, Xi);
      }
      on(s, e) {
        return this.emitter.on(s, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Xi),
          this.element.removeEventListener("touchstart", this.onTouchStart, Xi),
          this.element.removeEventListener("touchmove", this.onTouchMove, Xi),
          this.element.removeEventListener("touchend", this.onTouchEnd, Xi);
      }
    },
    xp = class {
      constructor({
        wrapper: s = window,
        content: e = document.documentElement,
        eventsTarget: t = s,
        smoothWheel: i = !0,
        syncTouch: r = !1,
        syncTouchLerp: n = 0.075,
        touchInertiaMultiplier: a = 35,
        duration: o,
        easing: u = (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
        lerp: l = 0.1,
        infinite: c = !1,
        orientation: h = "vertical",
        gestureOrientation: m = "vertical",
        touchMultiplier: p = 1,
        wheelMultiplier: f = 1,
        autoResize: d = !0,
        prevent: g,
        virtualScroll: D,
        overscroll: _ = !0,
        autoRaf: v = !1,
        anchors: y = !1,
        __experimental__naiveDimensions: w = !1,
      } = {}) {
        q(this, "_isScrolling", !1);
        q(this, "_isStopped", !1);
        q(this, "_isLocked", !1);
        q(this, "_preventNextNativeScrollEvent", !1);
        q(this, "_resetVelocityTimeout", null);
        q(this, "__rafID", null);
        q(this, "isTouching");
        q(this, "time", 0);
        q(this, "userData", {});
        q(this, "lastVelocity", 0);
        q(this, "velocity", 0);
        q(this, "direction", 0);
        q(this, "options");
        q(this, "targetScroll");
        q(this, "animatedScroll");
        q(this, "animate", new wp());
        q(this, "emitter", new Cu());
        q(this, "dimensions");
        q(this, "virtualScroll");
        q(this, "onScrollEnd", (s) => {
          s instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              s.stopPropagation());
        });
        q(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        q(this, "onClick", (s) => {
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
        q(this, "onPointerDown", (s) => {
          s.button === 1 && this.reset();
        });
        q(this, "onVirtualScroll", (s) => {
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
              var D, _, v;
              return (
                g instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(g))) ||
                  ((D = g.hasAttribute) == null
                    ? void 0
                    : D.call(g, "data-lenis-prevent")) ||
                  (r &&
                    ((_ = g.hasAttribute) == null
                      ? void 0
                      : _.call(g, "data-lenis-prevent-touch"))) ||
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
              Ln(
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
        q(this, "onNativeScroll", () => {
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
        q(this, "raf", (s) => {
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
            virtualScroll: D,
            overscroll: _,
            autoRaf: v,
            anchors: y,
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
          (this.virtualScroll = new Ep(t, {
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
                : (s = Tu(0, s, this.limit)),
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
          ? yp(this.animatedScroll, this.limit)
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
  X.registerPlugin(U);
  let Tn;
  const Tp = () => {
      (Tn = new xp({ autoRaf: !0 })),
        Tn.on("scroll", U.update),
        X.ticker.add((s) => {
          Tn.raf(s * 1e3);
        }),
        X.ticker.lagSmoothing(0);
    },
    Cp = () => {
      Tp();
    },
    hi = () => Tn;
  X.registerPlugin(U);
  const Mp = () => {
      const s = document.querySelectorAll('[hero-parallax="visual"]'),
        e = document.querySelector('[hero-parallax="header"]');
      if (!s.length && !e) return;
      const t = hi == null ? void 0 : hi();
      if (
        (U.defaults({ scroller: t ? t.wrapper : void 0 }),
        s.forEach((i) => {
          const r = parseFloat(i.getAttribute("parallax-speed")) || 0.6;
          X.fromTo(
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
        X.fromTo(
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
    Pu = () => {
      console.log("homeInit"), qn(), io(), ro(), gp(), Pp();
    },
    Ap = () => {
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
          X.set(t, {
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
            display: "none",
          }),
            X.set(r, { clipPath: "inset(0% 0% 0% 100%)" }),
            X.set([n, a, o], { y: 100, opacity: 0, filter: "blur(5px)" });
          const l = X.timeline({ paused: !0 }),
            c = X.timeline({ paused: !0 });
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
              "-=0.55"
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
              "<"
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
              const m = hi();
              m && m.stop();
            }),
            u.forEach((m) => {
              m.addEventListener("click", () => {
                c.restart();
                const p = hi();
                p && p.start();
              });
            });
        });
    },
    Fp = () => {
      Ap();
    },
    Lp = () => {
      qn(), io(), ro(), Fp();
    },
    Au = (s) => document.querySelector(s),
    Op = (s) => document.querySelectorAll(s),
    kp = (s, e) => s.classList.add(e),
    Ip = () => {
      const s = Au(".contact-form");
      s &&
        s.addEventListener("submit", (e) => {
          e.preventDefault(), console.log("Form submitted!");
        });
    },
    zp = () => {
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
              var D;
              return (D = g.getAttribute("filter-name")) == null
                ? void 0
                : D.toLowerCase();
            });
          },
          h = (f) => {
            const d = f.toLowerCase();
            l(i, "not-active"),
              l(r, "not-active"),
              n.forEach((v) => {
                const y = v.getAttribute("filter-target") === f;
                l(v, y ? "active" : "not-active");
              });
            const g = e.querySelector(`[filter-target="${f}"]`);
            g && (t.textContent = g.textContent);
            let D = 0,
              _ = 0;
            a.forEach((v) => {
              v.getAttribute("filter-status") === "active" &&
                (D++,
                u.add(v),
                l(v, "transition-out"),
                setTimeout(() => {
                  v.getAttribute("filter-status") === "transition-out" &&
                    (l(v, "not-active"),
                    u.delete(v),
                    _++,
                    _ === D &&
                      a.forEach((w) => {
                        const x = c(w);
                        (d === "all" || x.includes(d)) &&
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
              D === 0 &&
                a.forEach((v) => {
                  const y = c(v);
                  (d === "all" || y.includes(d)) &&
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
    Rp = () => {
      zp();
    },
    Bp = {
      home: Pu,
      about: Lp,
      contact: Ip,
      work: () => {
        qn(), io(), ro(), Rp();
      },
      "extra-page": Pu,
    },
    $p = () => {
      const s = document.querySelector("[data-page]"),
        e = s ? s.dataset.page : null,
        t = Bp[e];
      t ? t() : console.log(`No specific script for route: ${e}`);
    },
    Np = () => {
      Op(".footer-accordion").forEach((e) => {
        const t = e.querySelector(".accordion-trigger"),
          i = e.querySelector(".accordion-content");
        !t ||
          !i ||
          t.addEventListener("click", () => {
            i.style.height = i.style.height ? "" : `${i.scrollHeight}px`;
          });
      });
    },
    Vp = () => {
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
        t = X.timeline({
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
  X.registerPlugin(U);
  const Hp = () => {
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
            X.set(c, { clearProps: "all" }),
              X.set(h, { clearProps: "all" }),
              X.set(u, { clearProps: "all" }),
              X.set(m, { clearProps: "all" }),
              X.set(p, { clearProps: "all" }),
              X.set(f, { clearProps: "all" }),
              X.set(d, { clearProps: "all" }),
              h.offsetHeight,
              u.offsetWidth;
            const D = () => {
                s.setAttribute("nav-state", "hamburger"),
                  X.to(r, {
                    y: "150%",
                    ease: "expo.out",
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.001,
                    overwrite: !0,
                  }),
                  X.to([p, f, d], {
                    scaleX: 0.1,
                    ease: "expo.out",
                    duration: 1,
                    overwrite: !0,
                    stagger: 0.0016,
                  }),
                  X.to(p, { y: -g + 14, ease: "expo.out", duration: 0.9 }),
                  X.to(f, { y: -g - 10, ease: "expo.out", duration: 0.9 }),
                  X.to(d, { y: -g - 34, ease: "expo.out", duration: 0.9 });
              },
              _ = () => {
                s.setAttribute("nav-state", "list"),
                  X.to([p, f, d], {
                    scaleX: 1,
                    ease: "expo.out",
                    duration: 0.8,
                    overwrite: !0,
                    stagger: 0.0016,
                  }),
                  X.to(p, { y: 0, ease: "expo.out", duration: 0.8 }),
                  X.to(f, { y: 0, ease: "expo.out", duration: 0.8 }),
                  X.to(d, { y: 0, ease: "expo.out", duration: 0.8 }),
                  X.to(
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
              v = U.create({
                trigger: t,
                start: "bottom 80%",
                onEnter: D,
                onLeaveBack: _,
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
    Yp = () => Hp(),
    qp = () => {
      const s = document.querySelectorAll('[nav-menu="open-trigger"]'),
        e = document.querySelectorAll('[nav-menu="close-trigger"]'),
        t = document.querySelector('[nav-menu="component"]'),
        i = document.querySelectorAll('[nav-menu="link-item"]'),
        r = document.querySelectorAll('[nav-menu="eyebrow"]'),
        n = document.querySelector('[nav-link="list"]');
      if (!s || !e || !t || !i || !r || !n) return;
      X.set(t, { clipPath: "inset(0% 0% 100% 0%)" }),
        X.set([i, r], { y: "100%", opacity: 0 }),
        X.set(e, { opacity: 0, scale: 0 });
      const a = X.timeline({ paused: !0 }),
        o = X.timeline({ paused: !0 });
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
            const l = hi();
            l && l.stop();
          });
        }),
        e.forEach((u) => {
          u.addEventListener("click", () => {
            o.restart();
            const l = hi();
            l && l.start();
          });
        });
    },
    Xp = () => {
      qp();
    };
  X.registerPlugin(U);
  const Gp = () => {
      const s = document.querySelectorAll("[visual-parallax]");
      if (!s.length) return;
      const e = hi == null ? void 0 : hi();
      U.defaults({ scroller: e ? (e == null ? void 0 : e.wrapper) : void 0 }),
        s.forEach((t) => {
          const i = parseFloat(t.getAttribute("parallax-speed")) || 0.1;
          X.fromTo(
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
    Wp = () => {
      Gp();
    };
  /*!
   * strings: 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Up =
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
    so,
    Lu,
    As,
    Ou,
    Cn,
    jp = /(?:\r|\n|\t\t)/g,
    Kp = /(?:\s\s+)/g,
    Zp = " ",
    ku = function (e) {
      (Yr = document),
        (so = window),
        (As =
          As ||
          e ||
          so.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")),
        As &&
          ((Cn = As.utils.toArray),
          (Ou = As.core.context || function () {}),
          (Lu = 1));
    },
    Iu = function (e) {
      return so.getComputedStyle(e);
    },
    no = function (e) {
      return e.position === "absolute" || e.absolute === !0;
    },
    Qp = function (e, t) {
      for (var i = t.length, r; --i > -1; )
        if (((r = t[i]), e.substr(0, r.length) === r)) return r.length;
    },
    Jp = " style='position:relative;display:inline-block;'",
    zu = function (e, t) {
      e === void 0 && (e = "");
      var i = ~e.indexOf("++"),
        r = 1;
      return (
        i && (e = e.split("++").join("")),
        function () {
          return (
            "<" + t + Jp + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
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
    ao = function (e, t) {
      for (var i = t.length; --i > -1; ) e.push(t[i]);
    },
    Bu = function (e, t, i) {
      for (var r; e && e !== t; ) {
        if (((r = e._next || e.nextSibling), r))
          return r.textContent.charAt(0) === i;
        e = e.parentNode || e._parent;
      }
    },
    eh = function s(e) {
      var t = Cn(e.childNodes),
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
    mi = function (e, t) {
      return parseFloat(t[e]) || 0;
    },
    th = function (e, t, i, r, n, a, o) {
      var u = Iu(e),
        l = mi("paddingLeft", u),
        c = -999,
        h = mi("borderBottomWidth", u) + mi("borderTopWidth", u),
        m = mi("borderLeftWidth", u) + mi("borderRightWidth", u),
        p = mi("paddingTop", u) + mi("paddingBottom", u),
        f = mi("paddingLeft", u) + mi("paddingRight", u),
        d = mi("fontSize", u) * (t.lineThreshold || 0.2),
        g = u.textAlign,
        D = [],
        _ = [],
        v = [],
        y = t.wordDelimiter || " ",
        w = t.tag ? t.tag : t.span ? "span" : "div",
        x = t.type || t.split || "chars,words,lines",
        b = n && ~x.indexOf("lines") ? [] : null,
        T = ~x.indexOf("words"),
        E = ~x.indexOf("chars"),
        S = no(t),
        O = t.linesClass,
        P = ~(O || "").indexOf("++"),
        k = [],
        F = u.display === "flex",
        R = e.style.display,
        I,
        M,
        L,
        A,
        C,
        Y,
        Q,
        ye,
        se,
        B,
        $,
        N;
      for (
        P && (O = O.split("++").join("")),
          F && (e.style.display = "block"),
          M = e.getElementsByTagName("*"),
          L = M.length,
          C = [],
          I = 0;
        I < L;
        I++
      )
        C[I] = M[I];
      if (b || S)
        for (I = 0; I < L; I++)
          (A = C[I]),
            (Y = A.parentNode === e),
            (Y || S || (E && !T)) &&
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
                  (!E && Y) ||
                  (T && Y) ||
                  (!T &&
                    A.parentNode.parentNode === e &&
                    !A.parentNode._isSplit)) &&
                  (Q.push(A), (A._x -= l), Bu(A, e, y) && (A._wordEnd = !0)),
                A.nodeName === "BR" &&
                  ((A.nextSibling && A.nextSibling.nodeName === "BR") ||
                    I === 0) &&
                  b.push([])));
      for (I = 0; I < L; I++) {
        if (((A = C[I]), (Y = A.parentNode === e), A.nodeName === "BR")) {
          b || S
            ? (A.parentNode && A.parentNode.removeChild(A),
              C.splice(I--, 1),
              L--)
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
                  k.push(A.nextSibling),
                (A._next =
                  A.nextSibling && A.nextSibling._isFirst
                    ? null
                    : A.nextSibling),
                A.parentNode.removeChild(A),
                C.splice(I--, 1),
                L--)
              : Y ||
                ((N = !A.nextSibling && Bu(A.parentNode, e, y)),
                A.parentNode._parent && A.parentNode._parent.appendChild(A),
                N && A.parentNode.appendChild(Yr.createTextNode(" ")),
                w === "span" && (A.style.display = "inline"),
                D.push(A));
        else
          A.parentNode._isSplit && !A._isSplit && A.innerHTML !== ""
            ? _.push(A)
            : E &&
              !A._isSplit &&
              (w === "span" && (A.style.display = "inline"), D.push(A));
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
        for (ye = y === " " && (!S || (!T && !E)), I = 0; I < b.length; I++) {
          for (
            Q = b[I],
              B = Yr.createElement(w),
              B.style.cssText =
                "display:block;text-align:" +
                g +
                ";position:" +
                (S ? "absolute;" : "relative;"),
              O && (B.className = O + (P ? I + 1 : "")),
              v.push(B),
              L = Q.length,
              M = 0;
            M < L;
            M++
          )
            Q[M].nodeName !== "BR" &&
              ((A = Q[M]),
              B.appendChild(A),
              ye && A._wordEnd && B.appendChild(Yr.createTextNode(" ")),
              S &&
                (M === 0 &&
                  ((B.style.top = A._y + "px"), (B.style.left = l + N + "px")),
                (A.style.top = "0px"),
                N && (A.style.left = A._x - N + "px")));
          L === 0
            ? (B.innerHTML = "&nbsp;")
            : !T && !E && (eh(B), Ru(B, " ", " ")),
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
        ao(i, D),
        T && ao(r, _),
        ao(n, v);
    },
    ih = function (e, t, i, r) {
      var n = t.tag ? t.tag : t.span ? "span" : "div",
        a = t.type || t.split || "chars,words,lines",
        o = ~a.indexOf("chars"),
        u = no(t),
        l = t.wordDelimiter || " ",
        c = function (S) {
          return S === l || (S === Zp && l === " ");
        },
        h = l !== " " ? "" : u ? "&#173; " : " ",
        m = "</" + n + ">",
        p = 1,
        f = t.specialChars
          ? typeof t.specialChars == "function"
            ? t.specialChars
            : Qp
          : null,
        d,
        g,
        D,
        _,
        v,
        y,
        w,
        x,
        b = Yr.createElement("div"),
        T = e.parentNode;
      for (
        T.insertBefore(b, e),
          b.textContent = e.nodeValue,
          T.removeChild(e),
          e = b,
          d = Fu(e),
          w = d.indexOf("<") !== -1,
          t.reduceWhiteSpace !== !1 && (d = d.replace(Kp, " ").replace(jp, "")),
          w && (d = d.split("<").join("{{LT}}")),
          v = d.length,
          g = (d.charAt(0) === " " ? h : "") + i(),
          D = 0;
        D < v;
        D++
      )
        if (((y = d.charAt(D)), f && (x = f(d.substr(D), t.specialChars))))
          (y = d.substr(D, x || 1)),
            (g += o && y !== " " ? r() + y + "</" + n + ">" : y),
            (D += x - 1);
        else if (c(y) && !c(d.charAt(D - 1)) && D) {
          for (g += p ? m : "", p = 0; c(d.charAt(D + 1)); ) (g += h), D++;
          D === v - 1
            ? (g += h)
            : d.charAt(D + 1) !== ")" && ((g += h + i()), (p = 1));
        } else
          y === "{" && d.substr(D, 6) === "{{LT}}"
            ? ((g += o ? r() + "{{LT}}</" + n + ">" : "{{LT}}"), (D += 5))
            : (y.charCodeAt(0) >= 55296 && y.charCodeAt(0) <= 56319) ||
              (d.charCodeAt(D + 1) >= 65024 && d.charCodeAt(D + 1) <= 65039)
            ? ((_ = ((d.substr(D, 12).split(Up) || [])[1] || "").length || 2),
              (g +=
                o && y !== " "
                  ? r() + d.substr(D, _) + "</" + n + ">"
                  : d.substr(D, _)),
              (D += _ - 1))
            : (g += o && y !== " " ? r() + y + "</" + n + ">" : y);
      (e.outerHTML = g + (p ? m : "")), w && Ru(T, "{{LT}}", "<");
    },
    rh = function s(e, t, i, r) {
      var n = Cn(e.childNodes),
        a = n.length,
        o = no(t),
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
      ih(e, t, i, r);
    },
    Mn = (function () {
      function s(t, i) {
        Lu || ku(),
          (this.elements = Cn(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = i || {}),
          Ou(this),
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
              rh(c, i, a, o),
              th(c, i, this.chars, this.words, this.lines, l, u);
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
  (Mn.version = "3.12.7"), (Mn.register = ku), X.registerPlugin(U, Mn);
  const sh = () => {
      document.querySelectorAll("[split-text]").forEach((e) => {
        new Mn(e, { type: "lines" }).lines.forEach((n) => {
          const a = document.createElement("div");
          a.setAttribute("data-line-wrapper", ""),
            (a.style.overflow = "clip"),
            (a.style.display = "block"),
            (a.style.position = "relative"),
            (a.style.willChange = "transform"),
            a.appendChild(n.cloneNode(!0)),
            n.replaceWith(a);
        });
        const i = e.querySelectorAll("[data-line-wrapper]"),
          r = Array.from(i).map((n) => n.firstChild);
        X.set(r, { willChange: "transform" }),
          X.from(r, {
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
              start: "top 60%",
              end: "bottom top",
              toggleActions: "play none none reverse",
              markers: !1,
            },
          });
      });
    },
    nh = () => {
      sh();
    };
  X.registerPlugin(U);
  const ah = () => {
      document.querySelectorAll("[stagger-svg]").forEach((e) => {
        const t = e.querySelectorAll("path");
        if (!t.length) return;
        const i = e.getAttribute("data-stagger-start") || "top bottom",
          r = e.getAttribute("data-stagger-end") || "bottom 50%";
        X.set(t, { willChange: "transform" }),
          X.set(e, { willChange: "transform" }),
          X.from(t, {
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
    oh = () => {
      ah();
    },
    lh = () => {
      Np(), Vp(), Yp(), Xp(), Wp(), nh(), oh();
    },
    uh = () => {
      const s = Au(".example-component");
      s &&
        (kp(s, "is-initialized"),
        s.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    ch = () => {
      uh();
    };
  document.addEventListener("DOMContentLoaded", () => {
    lh(), ch(), $p(), Cp();
  });
});

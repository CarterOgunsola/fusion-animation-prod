var Zm = Object.defineProperty,
  Qm = Object.defineProperties;
var Jm = Object.getOwnPropertyDescriptors;
var Ec = Object.getOwnPropertySymbols;
var eg = Object.prototype.hasOwnProperty,
  tg = Object.prototype.propertyIsEnumerable;
var ht = Math.pow,
  Mo = (Ze, Ie, mt) =>
    Ie in Ze
      ? Zm(Ze, Ie, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mt,
        })
      : (Ze[Ie] = mt),
  Xn = (Ze, Ie) => {
    for (var mt in Ie || (Ie = {})) eg.call(Ie, mt) && Mo(Ze, mt, Ie[mt]);
    if (Ec) for (var mt of Ec(Ie)) tg.call(Ie, mt) && Mo(Ze, mt, Ie[mt]);
    return Ze;
  },
  Po = (Ze, Ie) => Qm(Ze, Jm(Ie));
var X = (Ze, Ie, mt) => Mo(Ze, typeof Ie != "symbol" ? Ie + "" : Ie, mt);
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
    return Ie(s, mt), s;
  }
  const xc = {
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
  function De() {
    const s = typeof window != "undefined" ? window : {};
    return Ie(s, xc), s;
  }
  function ki(s) {
    return (
      s === void 0 && (s = ""),
      s
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Tc(s) {
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
  function Cc(s) {
    const e = De();
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
    const t = De();
    let i, r, n;
    const a = Cc(s);
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
  function ts(s) {
    return (
      typeof s == "object" &&
      s !== null &&
      s.constructor &&
      Object.prototype.toString.call(s).slice(8, -1) === "Object"
    );
  }
  function Mc(s) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? s instanceof HTMLElement
      : s && (s.nodeType === 1 || s.nodeType === 11);
  }
  function Ot() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Mc(i)) {
        const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, a = r.length; n < a; n += 1) {
          const o = r[n],
            l = Object.getOwnPropertyDescriptor(i, o);
          l !== void 0 &&
            l.enumerable &&
            (ts(s[o]) && ts(i[o])
              ? i[o].__swiper__
                ? (s[o] = i[o])
                : Ot(s[o], i[o])
              : !ts(s[o]) && ts(i[o])
              ? ((s[o] = {}), i[o].__swiper__ ? (s[o] = i[o]) : Ot(s[o], i[o]))
              : (s[o] = i[o]));
        }
      }
    }
    return s;
  }
  function is(s, e, t) {
    s.style.setProperty(e, t);
  }
  function Ao(s) {
    let { swiper: e, targetPosition: t, side: i } = s;
    const r = De(),
      n = -e.translate;
    let a = null,
      o;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > n ? "next" : "prev",
      c = (m, p) => (u === "next" && m >= p) || (u === "prev" && m <= p),
      h = () => {
        (o = new Date().getTime()), a === null && (a = o);
        const m = Math.max(Math.min((o - a) / l, 1), 0),
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
  function Qi(s) {
    return (
      s.querySelector(".swiper-slide-transform") ||
      (s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform")) ||
      s
    );
  }
  function Qe(s, e) {
    e === void 0 && (e = "");
    const t = De(),
      i = [...s.children];
    return (
      t.HTMLSlotElement &&
        s instanceof HTMLSlotElement &&
        i.push(...s.assignedElements()),
      e ? i.filter((r) => r.matches(e)) : i
    );
  }
  function Pc(s, e) {
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
  function Ac(s, e) {
    const t = De();
    let i = e.contains(s);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(s)), i || (i = Pc(s, e))),
      i
    );
  }
  function js(s) {
    try {
      console.warn(s);
      return;
    } catch (e) {}
  }
  function Lt(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...(Array.isArray(e) ? e : ki(e))), t;
  }
  function Us(s) {
    const e = De(),
      t = Ye(),
      i = s.getBoundingClientRect(),
      r = t.body,
      n = s.clientTop || r.clientTop || 0,
      a = s.clientLeft || r.clientLeft || 0,
      o = s === e ? e.scrollY : s.scrollTop,
      l = s === e ? e.scrollX : s.scrollLeft;
    return { top: i.top + o - n, left: i.left + l - a };
  }
  function Fc(s, e) {
    const t = [];
    for (; s.previousElementSibling; ) {
      const i = s.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function Oc(s, e) {
    const t = [];
    for (; s.nextElementSibling; ) {
      const i = s.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function Ii(s, e) {
    return De().getComputedStyle(s, null).getPropertyValue(e);
  }
  function rs(s) {
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
  function ss(s, e) {
    function t(i) {
      i.target === s &&
        (e.call(s, i), s.removeEventListener("transitionend", t));
    }
    e && s.addEventListener("transitionend", t);
  }
  function jn(s, e, t) {
    const i = De();
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
  function Lc() {
    const s = De(),
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
  function Fo() {
    return Un || (Un = Lc()), Un;
  }
  let Kn;
  function kc(s) {
    let { userAgent: e } = s === void 0 ? {} : s;
    const t = Fo(),
      i = De(),
      r = i.navigator.platform,
      n = e || i.navigator.userAgent,
      a = { ios: !1, android: !1 },
      o = i.screen.width,
      l = i.screen.height,
      u = n.match(/(Android);?[\s\/]+([\d.]+)?/);
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
        d.indexOf(`${o}x${l}`) >= 0 &&
        ((c = n.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (f = !1)),
      u && !p && ((a.os = "android"), (a.android = !0)),
      (c || m || h) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function Oo(s) {
    return s === void 0 && (s = {}), Kn || (Kn = kc(s)), Kn;
  }
  let Zn;
  function Ic() {
    const s = De(),
      e = Oo();
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
        const [l, u] = o
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((c) => Number(c));
        t = l < 16 || (l === 16 && u < 2);
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
  function Lo() {
    return Zn || (Zn = Ic()), Zn;
  }
  function zc(s) {
    let { swiper: e, on: t, emit: i } = s;
    const r = De();
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
      u = () => {
        a && r.cancelAnimationFrame(a),
          n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
      },
      c = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver != "undefined") {
        l();
        return;
      }
      r.addEventListener("resize", o),
        r.addEventListener("orientationchange", c);
    }),
      t("destroy", () => {
        u(),
          r.removeEventListener("resize", o),
          r.removeEventListener("orientationchange", c);
      });
  }
  function Rc(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = [],
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
          n.push(p);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = Ji(e.hostEl);
            for (let h = 0; h < c.length; h += 1) o(c[h]);
          }
          o(e.hostEl, { childList: e.params.observeSlideChildren }),
            o(e.wrapperEl, { attributes: !1 });
        }
      },
      u = () => {
        n.forEach((c) => {
          c.disconnect();
        }),
          n.splice(0, n.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", l),
      i("destroy", u);
  }
  var $c = {
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
            s.eventsAnyListeners.forEach((u) => {
              u.apply(i, [l, ...t]);
            }),
            s.eventsListeners &&
              s.eventsListeners[l] &&
              s.eventsListeners[l].forEach((u) => {
                u.apply(i, t);
              });
        }),
        s
      );
    },
  };
  function Bc() {
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
          parseInt(Ii(i, "padding-left") || 0, 10) -
          parseInt(Ii(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(Ii(i, "padding-top") || 0, 10) -
          parseInt(Ii(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(s, {
          width: e,
          height: t,
          size: s.isHorizontal() ? e : t,
        }));
  }
  function Nc() {
    const s = this;
    function e(S, L) {
      return parseFloat(S.getPropertyValue(s.getDirectionLabel(L)) || 0);
    }
    const t = s.params,
      { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o } = s,
      l = s.virtual && t.virtual.enabled,
      u = l ? s.virtual.slides.length : s.slides.length,
      c = Qe(r, `.${s.params.slideClass}, swiper-slide`),
      h = l ? s.virtual.slides.length : c.length;
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
      w = -d,
      D = 0,
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
        (is(i, "--swiper-centered-offset-before", ""),
        is(i, "--swiper-centered-offset-after", ""));
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
      let L;
      if (
        (c[S] && (L = c[S]),
        b && s.grid.updateSlide(S, L, c),
        !(c[S] && Ii(L, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          E && (c[S].style[s.getDirectionLabel("width")] = "");
          const P = getComputedStyle(L),
            k = L.style.transform,
            F = L.style.webkitTransform;
          if (
            (k && (L.style.transform = "none"),
            F && (L.style.webkitTransform = "none"),
            t.roundLengths)
          )
            T = s.isHorizontal() ? jn(L, "width") : jn(L, "height");
          else {
            const R = e(P, "width"),
              I = e(P, "padding-left"),
              M = e(P, "padding-right"),
              O = e(P, "margin-left"),
              A = e(P, "margin-right"),
              C = P.getPropertyValue("box-sizing");
            if (C && C === "border-box") T = R + O + A;
            else {
              const { clientWidth: W, offsetWidth: Q } = L;
              T = R + I + M + O + A + (Q - W);
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
            ? ((w = w + T / 2 + D / 2 + v),
              D === 0 && S !== 0 && (w = w - n / 2 - v),
              S === 0 && (w = w - n / 2 - v),
              Math.abs(w) < 1 / 1e3 && (w = 0),
              t.roundLengths && (w = Math.floor(w)),
              x % t.slidesPerGroup === 0 && m.push(w),
              p.push(w))
            : (t.roundLengths && (w = Math.floor(w)),
              (x - Math.min(s.params.slidesPerGroupSkip, x)) %
                s.params.slidesPerGroup ===
                0 && m.push(w),
              p.push(w),
              (w = w + T + v)),
          (s.virtualSize += T + v),
          (D = T),
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
      for (let L = 0; L < m.length; L += 1) {
        let P = m[L];
        t.roundLengths && (P = Math.floor(P)),
          m[L] <= s.virtualSize - n && S.push(P);
      }
      (m = S),
        Math.floor(s.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(s.virtualSize - n);
    }
    if (l && t.loop) {
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
      is(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        is(
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
      (h !== u && s.emit("slidesLengthChange"),
      m.length !== _ &&
        (s.params.watchOverflow && s.checkOverflow(),
        s.emit("snapGridLengthChange")),
      p.length !== y && s.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && s.updateSlidesOffset(),
      s.emit("slidesUpdated"),
      !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const S = `${t.containerModifierClass}backface-hidden`,
        L = s.el.classList.contains(S);
      h <= t.maxBackfaceHiddenSlides
        ? L || s.el.classList.add(S)
        : L && s.el.classList.remove(S);
    }
  }
  function qc(s) {
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
  function Vc() {
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
  const ko = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function Hc(s) {
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
      const u = i[l];
      let c = u.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
      const h =
          (a + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (u.swiperSlideSize + o),
        m =
          (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (u.swiperSlideSize + o),
        p = -(a - c),
        f = p + e.slidesSizesGrid[l],
        d = p >= 0 && p <= e.size - e.slidesSizesGrid[l],
        g =
          (p >= 0 && p < e.size - 1) ||
          (f > 1 && f <= e.size) ||
          (p <= 0 && f >= e.size);
      g && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
        ko(u, g, t.slideVisibleClass),
        ko(u, d, t.slideFullyVisibleClass),
        (u.progress = r ? -h : h),
        (u.originalProgress = r ? -m : m);
    }
  }
  function Wc(s) {
    const e = this;
    if (typeof s == "undefined") {
      const c = e.rtlTranslate ? -1 : 1;
      s = (e && e.translate && e.translate * c) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = e;
    const l = n,
      u = a;
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
      n && !l && e.emit("reachBeginning toEdge"),
      a && !u && e.emit("reachEnd toEdge"),
      ((l && !n) || (u && !a)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  const Qn = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function Yc() {
    const s = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = s,
      n = s.virtual && t.virtual.enabled,
      a = s.grid && t.grid && t.grid.rows > 1,
      o = (h) => Qe(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
    let l, u, c;
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
          (c = e.find((h) => h.column === r + 1)),
          (u = e.find((h) => h.column === r - 1)))
        : (l = e[r]);
    l &&
      (a ||
        ((c = Oc(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (u = Fc(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u === 0 && (u = e[e.length - 1]))),
      e.forEach((h) => {
        Qn(h, h === l, t.slideActiveClass),
          Qn(h, h === c, t.slideNextClass),
          Qn(h, h === u, t.slidePrevClass);
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
        o.push(...Array.from({ length: e }).map((l, u) => a + i + u)),
          s.slides.forEach((l, u) => {
            o.includes(l.column) && Jn(s, u);
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
  function Xc(s) {
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
  function Gc(s) {
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
      u;
    const c = (p) => {
      let f = p - e.virtual.slidesBefore;
      return (
        f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        f
      );
    };
    if ((typeof l == "undefined" && (l = Xc(e)), i.indexOf(t) >= 0))
      u = i.indexOf(t);
    else {
      const p = Math.min(r.slidesPerGroupSkip, l);
      u = p + Math.floor((l - p) / r.slidesPerGroup);
    }
    if ((u >= i.length && (u = i.length - 1), l === n && !e.params.loop)) {
      u !== o && ((e.snapIndex = u), e.emit("snapIndexChange"));
      return;
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = c(l);
      return;
    }
    const h = e.grid && r.grid && r.grid.rows > 1;
    let m;
    if (e.virtual && r.virtual.enabled && r.loop) m = c(l);
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
      snapIndex: u,
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
  function jc(s, e) {
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
  var Uc = {
    updateSize: Bc,
    updateSlides: Nc,
    updateAutoHeight: qc,
    updateSlidesOffset: Vc,
    updateSlidesProgress: Hc,
    updateProgress: Wc,
    updateSlidesClasses: Yc,
    updateActiveIndex: Gc,
    updateClickedSlide: jc,
  };
  function Kc(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let a = Gn(n, s);
    return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
  }
  function Zc(s, e) {
    const t = this,
      { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = t;
    let o = 0,
      l = 0;
    const u = 0;
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
          (n.style.transform = `translate3d(${o}px, ${l}px, ${u}px)`));
    let c;
    const h = t.maxTranslate() - t.minTranslate();
    h === 0 ? (c = 0) : (c = (s - t.minTranslate()) / h),
      c !== a && t.updateProgress(s),
      t.emit("setTranslate", t.translate, e);
  }
  function Qc() {
    return -this.snapGrid[0];
  }
  function Jc() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function ed(s, e, t, i, r) {
    s === void 0 && (s = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const n = this,
      { params: a, wrapperEl: o } = n;
    if (n.animating && a.preventInteractionOnTransition) return !1;
    const l = n.minTranslate(),
      u = n.maxTranslate();
    let c;
    if (
      (i && s > l ? (c = l) : i && s < u ? (c = u) : (c = s),
      n.updateProgress(c),
      a.cssMode)
    ) {
      const h = n.isHorizontal();
      if (e === 0) o[h ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!n.support.smoothScroll)
          return (
            Ao({ swiper: n, targetPosition: -c, side: h ? "left" : "top" }), !0
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
  var td = {
    getTranslate: Kc,
    setTranslate: Zc,
    minTranslate: Qc,
    maxTranslate: Jc,
    translateTo: ed,
  };
  function id(s, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${s}ms`),
      (t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
      t.emit("setTransition", s, e);
  }
  function Io(s) {
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
  function rd(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      Io({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
  }
  function sd(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        Io({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
  }
  var nd = { setTransition: id, transitionStart: rd, transitionEnd: sd };
  function ad(s, e, t, i, r) {
    s === void 0 && (s = 0),
      t === void 0 && (t = !0),
      typeof s == "string" && (s = parseInt(s, 10));
    const n = this;
    let a = s;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: u,
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
    g >= l.length && (g = l.length - 1);
    const _ = -l[g];
    if (o.normalizeSlideIndex)
      for (let b = 0; b < u.length; b += 1) {
        const T = -Math.floor(_ * 100),
          E = Math.floor(u[b] * 100),
          S = Math.floor(u[b + 1] * 100);
        typeof u[b + 1] != "undefined"
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
            Ao({ swiper: n, targetPosition: T, side: b ? "left" : "top" }), !0
          );
        p.scrollTo({ [b ? "left" : "top"]: T, behavior: "smooth" });
      }
      return !0;
    }
    const x = Lo().isSafari;
    return (
      v && !r && x && n.isElement && n.virtual.update(!1, !1, a),
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
  function od(s, e, t, i) {
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
          { centeredSlides: u } = r.params;
        let c = r.params.slidesPerView;
        c === "auto"
          ? (c = r.slidesPerViewDynamic())
          : ((c = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
            u && c % 2 === 0 && (c = c + 1));
        let h = l - o < c;
        if (
          (u && (h = h || o < Math.ceil(c / 2)),
          i && u && r.params.slidesPerView !== "auto" && !n && (h = !1),
          h)
        ) {
          const m = u
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
  function ld(s, e, t) {
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
            i.slideTo(i.activeIndex + l, s, e, t);
          }),
          !0
        );
    }
    return n.rewind && i.isEnd
      ? i.slideTo(0, s, e, t)
      : i.slideTo(i.activeIndex + l, s, e, t);
  }
  function ud(s, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: r,
        snapGrid: n,
        slidesGrid: a,
        rtlTranslate: o,
        enabled: l,
        animating: u,
      } = i;
    if (!l || i.destroyed) return i;
    typeof s == "undefined" && (s = i.params.speed);
    const c = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (u && !c && r.loopPreventsSliding) return !1;
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
      n.forEach((v, w) => {
        p >= v && (y = w);
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
  function cd(s, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof s == "undefined" && (s = i.params.speed),
        i.slideTo(i.activeIndex, s, e, t)
      );
  }
  function dd(s, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof s == "undefined" && (s = r.params.speed);
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n),
      o = a + Math.floor((n - a) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const u = r.snapGrid[o],
        c = r.snapGrid[o + 1];
      l - u > (c - u) * i && (n += r.params.slidesPerGroup);
    } else {
      const u = r.snapGrid[o - 1],
        c = r.snapGrid[o];
      l - u <= (c - u) * i && (n -= r.params.slidesPerGroup);
    }
    return (
      (n = Math.max(n, 0)),
      (n = Math.min(n, r.slidesGrid.length - 1)),
      r.slideTo(n, s, e, t)
    );
  }
  function fd() {
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
  var pd = {
    slideTo: ad,
    slideToLoop: od,
    slideNext: ld,
    slidePrev: ud,
    slideReset: cd,
    slideToClosest: dd,
    slideToClickedSlide: fd,
  };
  function hd(s, e) {
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
      u = a && t.slides.length % i.grid.rows !== 0,
      c = (h) => {
        for (let m = 0; m < h; m += 1) {
          const p = t.isElement
            ? Lt("swiper-slide", [i.slideBlankClass])
            : Lt("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(p);
        }
      };
    if (l) {
      if (i.loopAddBlankSlides) {
        const h = o - (t.slides.length % o);
        c(h), t.recalcSlides(), t.updateSlides();
      } else
        js(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      n();
    } else if (u) {
      if (i.loopAddBlankSlides) {
        const h = i.grid.rows - (t.slides.length % i.grid.rows);
        c(h), t.recalcSlides(), t.updateSlides();
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
  function md(s) {
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
    const u = this;
    if (!u.params.loop) return;
    u.emit("beforeLoopFix");
    const {
        slides: c,
        allowSlidePrev: h,
        allowSlideNext: m,
        slidesEl: p,
        params: f,
      } = u,
      { centeredSlides: d, initialSlide: g } = f;
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
        (u.allowSlidePrev = h),
        (u.allowSlideNext = m),
        u.emit("loopFix");
      return;
    }
    let _ = f.slidesPerView;
    _ === "auto"
      ? (_ = u.slidesPerViewDynamic())
      : ((_ = Math.ceil(parseFloat(f.slidesPerView, 10))),
        d && _ % 2 === 0 && (_ = _ + 1));
    const y = f.slidesPerGroupAuto ? _ : f.slidesPerGroup;
    let v = y;
    v % y !== 0 && (v += y - (v % y)),
      (v += f.loopAdditionalSlides),
      (u.loopedSlides = v);
    const w = u.grid && f.grid && f.grid.rows > 1;
    c.length < _ + v || (u.params.effect === "cards" && c.length < _ + v * 2)
      ? js(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : w &&
        f.grid.fill === "row" &&
        js(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const D = [],
      x = [],
      b = w ? Math.ceil(c.length / f.grid.rows) : c.length,
      T = a && b - g < _ && !d;
    let E = T ? g : u.activeIndex;
    typeof n == "undefined"
      ? (n = u.getSlideIndex(
          c.find((I) => I.classList.contains(f.slideActiveClass))
        ))
      : (E = n);
    const S = i === "next" || !i,
      L = i === "prev" || !i;
    let P = 0,
      k = 0;
    const R =
      (w ? c[n].column : n) + (d && typeof r == "undefined" ? -_ / 2 + 0.5 : 0);
    if (R < v) {
      P = Math.max(v - R, y);
      for (let I = 0; I < v - R; I += 1) {
        const M = I - Math.floor(I / b) * b;
        if (w) {
          const O = b - M - 1;
          for (let A = c.length - 1; A >= 0; A -= 1)
            c[A].column === O && D.push(A);
        } else D.push(b - M - 1);
      }
    } else if (R + _ > b - v) {
      (k = Math.max(R - (b - v * 2), y)), T && (k = Math.max(k, _ - b + g + 1));
      for (let I = 0; I < k; I += 1) {
        const M = I - Math.floor(I / b) * b;
        w
          ? c.forEach((O, A) => {
              O.column === M && x.push(A);
            })
          : x.push(M);
      }
    }
    if (
      ((u.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        u.__preventObserver__ = !1;
      }),
      u.params.effect === "cards" &&
        c.length < _ + v * 2 &&
        (x.includes(n) && x.splice(x.indexOf(n), 1),
        D.includes(n) && D.splice(D.indexOf(n), 1)),
      L &&
        D.forEach((I) => {
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
      u.recalcSlides(),
      f.slidesPerView === "auto"
        ? u.updateSlides()
        : w &&
          ((D.length > 0 && L) || (x.length > 0 && S)) &&
          u.slides.forEach((I, M) => {
            u.grid.updateSlide(M, I, u.slides);
          }),
      f.watchSlidesProgress && u.updateSlidesOffset(),
      t)
    ) {
      if (D.length > 0 && L) {
        if (typeof e == "undefined") {
          const I = u.slidesGrid[E],
            O = u.slidesGrid[E + P] - I;
          l
            ? u.setTranslate(u.translate - O)
            : (u.slideTo(E + Math.ceil(P), 0, !1, !0),
              r &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - O),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - O)));
        } else if (r) {
          const I = w ? D.length / f.grid.rows : D.length;
          u.slideTo(u.activeIndex + I, 0, !1, !0),
            (u.touchEventsData.currentTranslate = u.translate);
        }
      } else if (x.length > 0 && S)
        if (typeof e == "undefined") {
          const I = u.slidesGrid[E],
            O = u.slidesGrid[E - k] - I;
          l
            ? u.setTranslate(u.translate - O)
            : (u.slideTo(E - k, 0, !1, !0),
              r &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - O),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - O)));
        } else {
          const I = w ? x.length / f.grid.rows : x.length;
          u.slideTo(u.activeIndex - I, 0, !1, !0);
        }
    }
    if (
      ((u.allowSlidePrev = h),
      (u.allowSlideNext = m),
      u.controller && u.controller.control && !o)
    ) {
      const I = {
        slideRealIndex: e,
        direction: i,
        setTranslate: r,
        activeSlideIndex: n,
        byController: !0,
      };
      Array.isArray(u.controller.control)
        ? u.controller.control.forEach((M) => {
            !M.destroyed &&
              M.params.loop &&
              M.loopFix(
                Po(Xn({}, I), {
                  slideTo: M.params.slidesPerView === f.slidesPerView ? t : !1,
                })
              );
          })
        : u.controller.control instanceof u.constructor &&
          u.controller.control.params.loop &&
          u.controller.control.loopFix(
            Po(Xn({}, I), {
              slideTo:
                u.controller.control.params.slidesPerView === f.slidesPerView
                  ? t
                  : !1,
            })
          );
    }
    u.emit("loopFix");
  }
  function gd() {
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
  var vd = { loopCreate: hd, loopFix: md, loopDestroy: gd };
  function yd(s) {
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
  function _d() {
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
  var wd = { setGrabCursor: yd, unsetGrabCursor: _d };
  function Dd(s, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === Ye() || i === De()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(s);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function zo(s, e, t) {
    const i = De(),
      { params: r } = s,
      n = r.edgeSwipeDetection,
      a = r.edgeSwipeThreshold;
    return n && (t <= a || t >= i.innerWidth - a)
      ? n === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function bd(s) {
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
      zo(e, i, i.targetTouches[0].pageX);
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
      (n.touchEventsTarget === "wrapper" && !Ac(l, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const u = !!n.noSwipingClass && n.noSwipingClass !== "",
      c = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && c && (l = c[0]);
    const h = n.noSwipingSelector
        ? n.noSwipingSelector
        : `.${n.noSwipingClass}`,
      m = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (m ? Dd(h, l) : l.closest(h))) {
      e.allowClick = !0;
      return;
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const p = a.currentX,
      f = a.currentY;
    if (!zo(e, i, p)) return;
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
  function Sd(s) {
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
    let u;
    if (l.type === "touchmove") {
      if (
        ((u = [...l.changedTouches].find((x) => x.identifier === i.touchId)),
        !u || u.identifier !== i.touchId)
      )
        return;
    } else u = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
      return;
    }
    const c = u.pageX,
      h = u.pageY;
    if (l.preventedByNestedSwiper) {
      (n.startX = c), (n.startY = h);
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(n, { startX: c, startY: h, currentX: c, currentY: h }),
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
      (n.currentX = c),
      (n.currentY = h);
    const m = n.currentX - n.startX,
      p = n.currentY - n.startY;
    if (
      t.params.threshold &&
      Math.sqrt(ht(m, 2) + ht(p, 2)) < t.params.threshold
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
        t.emit("sliderFirstMove", l);
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
    t.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = f + i.startTranslate);
    let w = !0,
      D = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (D = 0),
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
            ((w = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                ht(-t.minTranslate() + i.startTranslate + f, D))))
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
            ((w = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                ht(t.maxTranslate() - i.startTranslate - f, D)))),
      w && (l.preventedByNestedSwiper = !0),
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
  function Ed(s) {
    const e = this,
      t = e.touchEventsData;
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((r = [...i.changedTouches].find((D) => D.identifier === t.touchId)),
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
      slidesGrid: u,
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
    const h = Gt(),
      m = h - t.touchStartTime;
    if (e.allowClick) {
      const D = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((D && D[0]) || i.target, D),
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
      let D = 0;
      D < u.length;
      D += D < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const x = D < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof u[D + x] != "undefined"
        ? (f || (p >= u[D] && p < u[D + x])) && ((d = D), (g = u[D + x] - u[D]))
        : (f || p >= u[D]) &&
          ((d = D), (g = u[u.length - 1] - u[u.length - 2]));
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
    const v = (p - u[d]) / g,
      w = d < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (m > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (v >= a.longSwipesRatio
          ? e.slideTo(a.rewind && e.isEnd ? _ : d + w)
          : e.slideTo(d)),
        e.swipeDirection === "prev" &&
          (v > 1 - a.longSwipesRatio
            ? e.slideTo(d + w)
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
          ? e.slideTo(d + w)
          : e.slideTo(d)
        : (e.swipeDirection === "next" && e.slideTo(_ !== null ? _ : d + w),
          e.swipeDirection === "prev" && e.slideTo(y !== null ? y : d));
    }
  }
  function Ro() {
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
  function xd(s) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && s.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (s.stopPropagation(), s.stopImmediatePropagation())));
  }
  function Td() {
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
  function Cd(s) {
    const e = this;
    Zs(e, s.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Md() {
    const s = this;
    s.documentTouchHandlerProceeded ||
      ((s.documentTouchHandlerProceeded = !0),
      s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
  }
  const $o = (s, e) => {
    const t = Ye(),
      { params: i, el: r, wrapperEl: n, device: a } = s,
      o = !!i.nested,
      l = e === "on" ? "addEventListener" : "removeEventListener",
      u = e;
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
        ? s[u](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Ro,
            !0
          )
        : s[u]("observerUpdate", Ro, !0),
      r[l]("load", s.onLoad, { capture: !0 }));
  };
  function Pd() {
    const s = this,
      { params: e } = s;
    (s.onTouchStart = bd.bind(s)),
      (s.onTouchMove = Sd.bind(s)),
      (s.onTouchEnd = Ed.bind(s)),
      (s.onDocumentTouchStart = Md.bind(s)),
      e.cssMode && (s.onScroll = Td.bind(s)),
      (s.onClick = xd.bind(s)),
      (s.onLoad = Cd.bind(s)),
      $o(s, "on");
  }
  function Ad() {
    $o(this, "off");
  }
  var Fd = { attachEvents: Pd, detachEvents: Ad };
  const Bo = (s, e) => s.grid && e.grid && e.grid.rows > 1;
  function Od() {
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
      u = s.getBreakpoint(n, o, l);
    if (!u || s.currentBreakpoint === u) return;
    const h = (u in n ? n[u] : void 0) || s.originalParams,
      m = Bo(s, i),
      p = Bo(s, h),
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
    const _ = h.direction && h.direction !== i.direction,
      y = i.loop && (h.slidesPerView !== i.slidesPerView || _),
      v = i.loop;
    _ && t && s.changeDirection(), Ot(s.params, h);
    const w = s.params.enabled,
      D = s.params.loop;
    Object.assign(s, {
      allowTouchMove: s.params.allowTouchMove,
      allowSlideNext: s.params.allowSlideNext,
      allowSlidePrev: s.params.allowSlidePrev,
    }),
      g && !w ? s.disable() : !g && w && s.enable(),
      (s.currentBreakpoint = u),
      s.emit("_beforeBreakpoint", h),
      t &&
        (y
          ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
          : !v && D
          ? (s.loopCreate(e), s.updateSlides())
          : v && !D && s.loopDestroy()),
      s.emit("breakpoint", h);
  }
  function Ld(s, e, t) {
    if ((e === void 0 && (e = "window"), !s || (e === "container" && !t)))
      return;
    let i = !1;
    const r = De(),
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
      const { point: l, value: u } = a[o];
      e === "window"
        ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
        : u <= t.clientWidth && (i = l);
    }
    return i || "max";
  }
  var kd = { setBreakpoint: Od, getBreakpoint: Ld };
  function Id(s, e) {
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
  function zd() {
    const s = this,
      { classNames: e, params: t, rtl: i, el: r, device: n } = s,
      a = Id(
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
  function Rd() {
    const s = this,
      { el: e, classNames: t } = s;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), s.emitContainerClasses());
  }
  var $d = { addClasses: zd, removeClasses: Rd };
  function Bd() {
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
  var Nd = { checkOverflow: Bd },
    No = {
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
  function qd(s, e) {
    return function (i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0],
        n = i[r];
      if (typeof n != "object" || n === null) {
        Ot(e, i);
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
        Ot(e, i);
        return;
      }
      typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0),
        s[r] || (s[r] = { enabled: !1 }),
        Ot(e, i);
    };
  }
  const ta = {
      eventsEmitter: $c,
      update: Uc,
      translate: td,
      transition: nd,
      slide: pd,
      loop: vd,
      grabCursor: wd,
      events: Fd,
      breakpoints: kd,
      checkOverflow: Nd,
      classes: $d,
    },
    ia = {};
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
        (t = Ot({}, t)),
        e && !t.el && (t.el = e);
      const a = Ye();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const c = [];
        return (
          a.querySelectorAll(t.el).forEach((h) => {
            const m = Ot({}, t, { el: h });
            c.push(new Et(m));
          }),
          c
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = Fo()),
        (o.device = Oo({ userAgent: t.userAgent })),
        (o.browser = Lo()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const l = {};
      o.modules.forEach((c) => {
        c({
          params: t,
          swiper: o,
          extendParams: qd(t, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const u = Ot({}, No, l);
      return (
        (o.params = Ot({}, u, ia, t)),
        (o.originalParams = Ot({}, o.params)),
        (o.passedParams = Ot({}, t)),
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
        n = rs(r[0]);
      return rs(e) - n;
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
          activeIndex: u,
        } = i;
      let c = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let h = n[u] ? Math.ceil(n[u].swiperSlideSize) : 0,
          m;
        for (let p = u + 1; p < n.length; p += 1)
          n[p] &&
            !m &&
            ((h += Math.ceil(n[p].swiperSlideSize)),
            (c += 1),
            h > l && (m = !0));
        for (let p = u - 1; p >= 0; p -= 1)
          n[p] &&
            !m &&
            ((h += n[p].swiperSlideSize), (c += 1), h > l && (m = !0));
      } else if (e === "current")
        for (let h = u + 1; h < n.length; h += 1)
          (t ? a[h] + o[h] - a[u] < l : a[h] - a[u] < l) && (c += 1);
      else for (let h = u - 1; h >= 0; h -= 1) a[u] - a[h] < l && (c += 1);
      return c;
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
          ((a = Lt("div", t.params.wrapperClass)),
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
          rtl: i.dir.toLowerCase() === "rtl" || Ii(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || Ii(i, "direction") === "rtl"),
          wrongRTL: Ii(a, "display") === "-webkit-box",
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Tc(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Ot(ia, e);
    }
    static get extendedDefaults() {
      return ia;
    }
    static get defaults() {
      return No;
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
  Object.keys(ta).forEach((s) => {
    Object.keys(ta[s]).forEach((e) => {
      Et.prototype[e] = ta[s][e];
    });
  }),
    Et.use([zc, Rc]);
  function Vd(s) {
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
      let _;
      return (
        g.renderSlide
          ? ((_ = g.renderSlide.call(e, f, d)),
            typeof _ == "string" && ((o.innerHTML = _), (_ = o.children[0])))
          : e.isElement
          ? (_ = Lt("swiper-slide"))
          : (_ = Lt("div", e.params.slideClass)),
        _.setAttribute("data-swiper-slide-index", d),
        g.renderSlide || (_.innerHTML = f),
        g.cache && (e.virtual.cache[d] = _),
        _
      );
    }
    function u(f, d, g) {
      const {
        slidesPerView: _,
        slidesPerGroup: y,
        centeredSlides: v,
        loop: w,
        initialSlide: D,
      } = e.params;
      if (d && !w && D > 0) return;
      const { addSlidesBefore: x, addSlidesAfter: b } = e.params.virtual,
        { from: T, to: E, slides: S, slidesGrid: L, offset: P } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const k = typeof g == "undefined" ? e.activeIndex || 0 : g;
      let F;
      e.rtlTranslate ? (F = "right") : (F = e.isHorizontal() ? "left" : "top");
      let R, I;
      v
        ? ((R = Math.floor(_ / 2) + y + b), (I = Math.floor(_ / 2) + y + x))
        : ((R = _ + (y - 1) + b), (I = (w ? _ : y) + x));
      let M = k - I,
        O = k + R;
      w || ((M = Math.max(M, 0)), (O = Math.min(O, S.length - 1)));
      let A = (e.slidesGrid[M] || 0) - (e.slidesGrid[0] || 0);
      w && k >= I
        ? ((M -= I), v || (A += e.slidesGrid[0]))
        : w && k < I && ((M = -I), v && (A += e.slidesGrid[0])),
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
        e.slidesGrid !== L &&
          A !== P &&
          e.slides.forEach((B) => {
            B.style[F] = `${A - Math.abs(e.cssOverflowAdjustment())}px`;
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
            for (let j = M; j <= O; j += 1) N.push(S[j]);
            return N;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? C() : r("virtualUpdate");
        return;
      }
      const W = [],
        Q = [],
        we = (B) => {
          let N = B;
          return (
            B < 0 ? (N = S.length + B) : N >= S.length && (N = N - S.length), N
          );
        };
      if (f)
        e.slides
          .filter((B) => B.matches(`.${e.params.slideClass}, swiper-slide`))
          .forEach((B) => {
            B.remove();
          });
      else
        for (let B = T; B <= E; B += 1)
          if (B < M || B > O) {
            const N = we(B);
            e.slides
              .filter((j) =>
                j.matches(
                  `.${e.params.slideClass}[data-swiper-slide-index="${N}"], swiper-slide[data-swiper-slide-index="${N}"]`
                )
              )
              .forEach((j) => {
                j.remove();
              });
          }
      const se = w ? -S.length : 0,
        $ = w ? S.length * 2 : S.length;
      for (let B = se; B < $; B += 1)
        if (B >= M && B <= O) {
          const N = we(B);
          typeof E == "undefined" || f
            ? Q.push(N)
            : (B > E && Q.push(N), B < T && W.push(N));
        }
      if (
        (Q.forEach((B) => {
          e.slidesEl.append(l(S[B], B));
        }),
        w)
      )
        for (let B = W.length - 1; B >= 0; B -= 1) {
          const N = W[B];
          e.slidesEl.prepend(l(S[N], N));
        }
      else
        W.sort((B, N) => N - B),
          W.forEach((B) => {
            e.slidesEl.prepend(l(S[B], B));
          });
      Qe(e.slidesEl, ".swiper-slide, swiper-slide").forEach((B) => {
        B.style[F] = `${A - Math.abs(e.cssOverflowAdjustment())}px`;
      }),
        C();
    }
    function c(f) {
      if (typeof f == "object" && "length" in f)
        for (let d = 0; d < f.length; d += 1)
          f[d] && e.virtual.slides.push(f[d]);
      else e.virtual.slides.push(f);
      u(!0);
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
        Object.keys(y).forEach((w) => {
          const D = y[w],
            x = D.getAttribute("data-swiper-slide-index");
          x && D.setAttribute("data-swiper-slide-index", parseInt(x, 10) + _),
            (v[parseInt(w, 10) + _] = D);
        }),
          (e.virtual.cache = v);
      }
      u(!0), e.slideTo(g, 0);
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
      u(!0), e.slideTo(d, 0);
    }
    function p() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        u(!0),
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
          is(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: c,
        prependSlide: h,
        removeSlide: m,
        removeAllSlides: p,
        update: u,
      });
  }
  function Hd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Ye(),
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
        w = p === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && y) || (e.isVertical() && w) || g)) ||
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
        if (e.params.keyboard.onlyInViewport && (d || g || _ || y || v || w)) {
          let D = !1;
          if (
            Ji(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
            Ji(e.el, `.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const x = e.el,
            b = x.clientWidth,
            T = x.clientHeight,
            E = a.innerWidth,
            S = a.innerHeight,
            L = Us(x);
          h && (L.left -= x.scrollLeft);
          const P = [
            [L.left, L.top],
            [L.left + b, L.top],
            [L.left, L.top + T],
            [L.left + b, L.top + T],
          ];
          for (let k = 0; k < P.length; k += 1) {
            const F = P[k];
            if (F[0] >= 0 && F[0] <= E && F[1] >= 0 && F[1] <= S) {
              if (F[0] === 0 && F[1] === 0) continue;
              D = !0;
            }
          }
          if (!D) return;
        }
        e.isHorizontal()
          ? ((d || g || _ || y) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (((g || y) && !h) || ((d || _) && h)) && e.slideNext(),
            (((d || _) && !h) || ((g || y) && h)) && e.slidePrev())
          : ((d || g || v || w) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (g || w) && e.slideNext(),
            (d || v) && e.slidePrev()),
          r("keyPress", p);
      }
    }
    function l() {
      e.keyboard.enabled ||
        (n.addEventListener("keydown", o), (e.keyboard.enabled = !0));
    }
    function u() {
      e.keyboard.enabled &&
        (n.removeEventListener("keydown", o), (e.keyboard.enabled = !1));
    }
    i("init", () => {
      e.params.keyboard.enabled && l();
    }),
      i("destroy", () => {
        e.keyboard.enabled && u();
      }),
      Object.assign(e.keyboard, { enable: l, disable: u });
  }
  function Wd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = De();
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
    const u = [];
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
      const w = e.params.mousewheel;
      if (v.direction < 0) {
        if (e.isEnd && !e.params.loop && w.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && w.releaseOnEdges) return !0;
      return !1;
    }
    function d(v) {
      let w = v,
        D = !0;
      if (
        !e.enabled ||
        v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
      )
        return;
      const x = e.params.mousewheel;
      e.params.cssMode && w.preventDefault();
      let b = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (b = document.querySelector(e.params.mousewheel.eventsTarget));
      const T = b && b.contains(w.target);
      if (!e.mouseEntered && !T && !x.releaseOnEdges) return !0;
      w.originalEvent && (w = w.originalEvent);
      let E = 0;
      const S = e.rtlTranslate ? -1 : 1,
        L = c(w);
      if (x.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(L.pixelX) > Math.abs(L.pixelY)) E = -L.pixelX * S;
          else return !0;
        else if (Math.abs(L.pixelY) > Math.abs(L.pixelX)) E = -L.pixelY;
        else return !0;
      else
        E = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * S : -L.pixelY;
      if (E === 0) return !0;
      x.invert && (E = -E);
      let P = e.getTranslate() + E * x.sensitivity;
      if (
        (P >= e.minTranslate() && (P = e.minTranslate()),
        P <= e.maxTranslate() && (P = e.maxTranslate()),
        (D = e.params.loop
          ? !0
          : !(P === e.minTranslate() || P === e.maxTranslate())),
        D && e.params.nested && w.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const k = {
          time: Gt(),
          delta: Math.abs(E),
          direction: Math.sign(E),
          raw: v,
        };
        u.length >= 2 && u.shift();
        const F = u.length ? u[u.length - 1] : void 0;
        if (
          (u.push(k),
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
        const k = { time: Gt(), delta: Math.abs(E), direction: Math.sign(E) },
          F =
            l &&
            k.time < l.time + 500 &&
            k.delta <= l.delta &&
            k.direction === l.direction;
        if (!F) {
          l = void 0;
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
            clearTimeout(a), (a = void 0), u.length >= 15 && u.shift();
            const O = u.length ? u[u.length - 1] : void 0,
              A = u[0];
            if (
              (u.push(k),
              O && (k.delta > O.delta || k.direction !== O.direction))
            )
              u.splice(0);
            else if (
              u.length >= 15 &&
              k.time - A.time < 500 &&
              A.delta - k.delta >= 1 &&
              k.delta <= 6
            ) {
              const C = E > 0 ? 0.8 : 0.2;
              (l = k),
                u.splice(0),
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
                  u.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, C);
              }, 500));
          }
          if (
            (F || r("scroll", w),
            e.params.autoplay &&
              e.params.autoplay.disableOnInteraction &&
              e.autoplay.stop(),
            x.releaseOnEdges &&
              (R === e.minTranslate() || R === e.maxTranslate()))
          )
            return !0;
        }
      }
      return w.preventDefault ? w.preventDefault() : (w.returnValue = !1), !1;
    }
    function g(v) {
      let w = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (w = document.querySelector(e.params.mousewheel.eventsTarget)),
        w[v]("mouseenter", h),
        w[v]("mouseleave", m),
        w[v]("wheel", d);
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
  function ra(s, e, t, i) {
    return (
      s.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let n = Qe(s.el, `.${i[r]}`)[0];
            n || ((n = Lt("div", i[r])), (n.className = i[r]), s.el.append(n)),
              (t[r] = n),
              (e[r] = n);
          }
        }),
      t
    );
  }
  function Yd(s) {
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
    function l(f) {
      f.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function u(f) {
      f.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function c() {
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
        (d = ae(d)),
        (g = ae(g));
      const _ = (y, v) => {
        y && y.addEventListener("click", v === "next" ? u : l),
          !e.enabled && y && y.classList.add(...f.lockClass.split(" "));
      };
      d.forEach((y) => _(y, "next")), g.forEach((y) => _(y, "prev"));
    }
    function h() {
      let { nextEl: f, prevEl: d } = e.navigation;
      (f = ae(f)), (d = ae(d));
      const g = (_, y) => {
        _.removeEventListener("click", y === "next" ? u : l),
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
          const w = d.path || (d.composedPath && d.composedPath());
          w && (v = w.find((D) => g.includes(D) || _.includes(D)));
        }
        if (e.params.navigation.hideOnClick && !v) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === y || e.pagination.el.contains(y))
          )
            return;
          let w;
          g.length
            ? (w = g[0].classList.contains(e.params.navigation.hiddenClass))
            : _.length &&
              (w = _[0].classList.contains(e.params.navigation.hiddenClass)),
            r(w === !0 ? "navigationShow" : "navigationHide"),
            [...g, ..._]
              .filter((D) => !!D)
              .forEach((D) =>
                D.classList.toggle(e.params.navigation.hiddenClass)
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
  function Si(s) {
    return (
      s === void 0 && (s = ""),
      `.${s
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function Xd(s) {
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
    function u(y, v) {
      const { bulletActiveClass: w } = e.params.pagination;
      y &&
        ((y = y[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
        y &&
          (y.classList.add(`${w}-${v}`),
          (y = y[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
          y && y.classList.add(`${w}-${v}-${v}`)));
    }
    function c(y, v, w) {
      if (((y = y % w), (v = v % w), v === y + 1)) return "next";
      if (v === y - 1) return "previous";
    }
    function h(y) {
      const v = y.target.closest(Si(e.params.pagination.bulletClass));
      if (!v) return;
      y.preventDefault();
      const w = rs(v) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === w) return;
        const D = c(e.realIndex, w, e.slides.length);
        D === "next"
          ? e.slideNext()
          : D === "previous"
          ? e.slidePrev()
          : e.slideToLoop(w);
      } else e.slideTo(w);
    }
    function m() {
      const y = e.rtl,
        v = e.params.pagination;
      if (l()) return;
      let w = e.pagination.el;
      w = ae(w);
      let D, x;
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
            (D =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex != "undefined"
          ? ((D = e.snapIndex), (x = e.previousSnapIndex))
          : ((x = e.previousIndex || 0), (D = e.activeIndex || 0)),
        v.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const E = e.pagination.bullets;
        let S, L, P;
        if (
          (v.dynamicBullets &&
            ((a = jn(E[0], e.isHorizontal() ? "width" : "height")),
            w.forEach((k) => {
              k.style[e.isHorizontal() ? "width" : "height"] = `${
                a * (v.dynamicMainBullets + 4)
              }px`;
            }),
            v.dynamicMainBullets > 1 &&
              x !== void 0 &&
              ((o += D - (x || 0)),
              o > v.dynamicMainBullets - 1
                ? (o = v.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (S = Math.max(D - o, 0)),
            (L = S + (Math.min(E.length, v.dynamicMainBullets) - 1)),
            (P = (L + S) / 2)),
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
          w.length > 1)
        )
          E.forEach((k) => {
            const F = rs(k);
            F === D
              ? k.classList.add(...v.bulletActiveClass.split(" "))
              : e.isElement && k.setAttribute("part", "bullet"),
              v.dynamicBullets &&
                (F >= S &&
                  F <= L &&
                  k.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
                F === S && u(k, "prev"),
                F === L && u(k, "next"));
          });
        else {
          const k = E[D];
          if (
            (k && k.classList.add(...v.bulletActiveClass.split(" ")),
            e.isElement &&
              E.forEach((F, R) => {
                F.setAttribute("part", R === D ? "bullet-active" : "bullet");
              }),
            v.dynamicBullets)
          ) {
            const F = E[S],
              R = E[L];
            for (let I = S; I <= L; I += 1)
              E[I] &&
                E[I].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
            u(F, "prev"), u(R, "next");
          }
        }
        if (v.dynamicBullets) {
          const k = Math.min(E.length, v.dynamicMainBullets + 4),
            F = (a * k - a) / 2 - P * a,
            R = y ? "right" : "left";
          E.forEach((I) => {
            I.style[e.isHorizontal() ? R : "top"] = `${F}px`;
          });
        }
      }
      w.forEach((E, S) => {
        if (
          (v.type === "fraction" &&
            (E.querySelectorAll(Si(v.currentClass)).forEach((L) => {
              L.textContent = v.formatFractionCurrent(D + 1);
            }),
            E.querySelectorAll(Si(v.totalClass)).forEach((L) => {
              L.textContent = v.formatFractionTotal(T);
            })),
          v.type === "progressbar")
        ) {
          let L;
          v.progressbarOpposite
            ? (L = e.isHorizontal() ? "vertical" : "horizontal")
            : (L = e.isHorizontal() ? "horizontal" : "vertical");
          const P = (D + 1) / T;
          let k = 1,
            F = 1;
          L === "horizontal" ? (k = P) : (F = P),
            E.querySelectorAll(Si(v.progressbarFillClass)).forEach((R) => {
              (R.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${F})`),
                (R.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        v.type === "custom" && v.renderCustom
          ? ((E.innerHTML = v.renderCustom(e, D + 1, T)),
            S === 0 && r("paginationRender", E))
          : (S === 0 && r("paginationRender", E), r("paginationUpdate", E)),
          e.params.watchOverflow &&
            e.enabled &&
            E.classList[e.isLocked ? "add" : "remove"](v.lockClass);
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
      let w = e.pagination.el;
      w = ae(w);
      let D = "";
      if (y.type === "bullets") {
        let x = e.params.loop
          ? Math.ceil(v / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && x > v && (x = v);
        for (let b = 0; b < x; b += 1)
          y.renderBullet
            ? (D += y.renderBullet.call(e, b, y.bulletClass))
            : (D += `<${y.bulletElement} ${
                e.isElement ? 'part="bullet"' : ""
              } class="${y.bulletClass}"></${y.bulletElement}>`);
      }
      y.type === "fraction" &&
        (y.renderFraction
          ? (D = y.renderFraction.call(e, y.currentClass, y.totalClass))
          : (D = `<span class="${y.currentClass}"></span> / <span class="${y.totalClass}"></span>`)),
        y.type === "progressbar" &&
          (y.renderProgressbar
            ? (D = y.renderProgressbar.call(e, y.progressbarFillClass))
            : (D = `<span class="${y.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        w.forEach((x) => {
          y.type !== "custom" && (x.innerHTML = D || ""),
            y.type === "bullets" &&
              e.pagination.bullets.push(
                ...x.querySelectorAll(Si(y.bulletClass))
              );
        }),
        y.type !== "custom" && r("paginationRender", w[0]);
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
            v.length > 1 && (v = v.find((w) => Ji(w, ".swiper")[0] === e.el))),
          Array.isArray(v) && v.length === 1 && (v = v[0]),
          Object.assign(e.pagination, { el: v }),
          (v = ae(v)),
          v.forEach((w) => {
            y.type === "bullets" &&
              y.clickable &&
              w.classList.add(...(y.clickableClass || "").split(" ")),
              w.classList.add(y.modifierClass + y.type),
              w.classList.add(
                e.isHorizontal() ? y.horizontalClass : y.verticalClass
              ),
              y.type === "bullets" &&
                y.dynamicBullets &&
                (w.classList.add(`${y.modifierClass}${y.type}-dynamic`),
                (o = 0),
                y.dynamicMainBullets < 1 && (y.dynamicMainBullets = 1)),
              y.type === "progressbar" &&
                y.progressbarOpposite &&
                w.classList.add(y.progressbarOppositeClass),
              y.clickable && w.addEventListener("click", h),
              e.enabled || w.classList.add(y.lockClass);
          }));
    }
    function d() {
      const y = e.params.pagination;
      if (l()) return;
      let v = e.pagination.el;
      v &&
        ((v = ae(v)),
        v.forEach((w) => {
          w.classList.remove(y.hiddenClass),
            w.classList.remove(y.modifierClass + y.type),
            w.classList.remove(
              e.isHorizontal() ? y.horizontalClass : y.verticalClass
            ),
            y.clickable &&
              (w.classList.remove(...(y.clickableClass || "").split(" ")),
              w.removeEventListener("click", h));
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((w) =>
            w.classList.remove(...y.bulletActiveClass.split(" "))
          );
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const y = e.params.pagination;
      let { el: v } = e.pagination;
      (v = ae(v)),
        v.forEach((w) => {
          w.classList.remove(y.horizontalClass, y.verticalClass),
            w.classList.add(
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
        const w = v.target,
          D = ae(e.pagination.el);
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          D &&
          D.length > 0 &&
          !w.classList.contains(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && w === e.navigation.nextEl) ||
              (e.navigation.prevEl && w === e.navigation.prevEl))
          )
            return;
          const x = D[0].classList.contains(e.params.pagination.hiddenClass);
          r(x === !0 ? "paginationShow" : "paginationHide"),
            D.forEach((b) =>
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
  function Gd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Ye();
    let a = !1,
      o = null,
      l = null,
      u,
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
          Us(R)[e.isHorizontal() ? "left" : "top"] -
          (u !== null ? u : c / 2)) /
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
        (u =
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
        clearTimeout(l),
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
    function w(P) {
      const k = e.params.scrollbar,
        { scrollbar: F, wrapperEl: R } = e,
        { el: I } = F;
      a &&
        ((a = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (R.style.transitionDuration = "")),
        k.hide &&
          (clearTimeout(l),
          (l = Zi(() => {
            (I.style.opacity = 0), (I.style.transitionDuration = "400ms");
          }, 1e3))),
        r("scrollbarDragEnd", P),
        k.snapOnRelease && e.slideToClosest());
    }
    function D(P) {
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
        n[A]("pointerup", w, O);
    }
    function x() {
      !e.params.scrollbar.el || !e.scrollbar.el || D("on");
    }
    function b() {
      !e.params.scrollbar.el || !e.scrollbar.el || D("off");
    }
    function T() {
      const { scrollbar: P, el: k } = e;
      e.params.scrollbar = ra(
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
        ((I = R.querySelector(Si(e.params.scrollbar.dragClass))),
        I || ((I = Lt("div", e.params.scrollbar.dragClass)), R.append(I))),
        Object.assign(P, { el: R, dragEl: I }),
        F.draggable && x(),
        R &&
          R.classList[e.enabled ? "remove" : "add"](
            ...ki(e.params.scrollbar.lockClass)
          );
    }
    function E() {
      const P = e.params.scrollbar,
        k = e.scrollbar.el;
      k &&
        k.classList.remove(
          ...ki(e.isHorizontal() ? P.horizontalClass : P.verticalClass)
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
            ...ki(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        E();
      });
    const S = () => {
        e.el.classList.remove(...ki(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...ki(e.params.scrollbar.scrollbarDisabledClass)
            ),
          T(),
          d(),
          p();
      },
      L = () => {
        e.el.classList.add(...ki(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...ki(e.params.scrollbar.scrollbarDisabledClass)
            ),
          E();
      };
    Object.assign(e.scrollbar, {
      enable: S,
      disable: L,
      updateSize: d,
      setTranslate: p,
      init: T,
      destroy: E,
    });
  }
  function jd(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ parallax: { enabled: !1 } });
    const r =
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      n = (l, u) => {
        const { rtl: c } = e,
          h = c ? -1 : 1,
          m = l.getAttribute("data-swiper-parallax") || "0";
        let p = l.getAttribute("data-swiper-parallax-x"),
          f = l.getAttribute("data-swiper-parallax-y");
        const d = l.getAttribute("data-swiper-parallax-scale"),
          g = l.getAttribute("data-swiper-parallax-opacity"),
          _ = l.getAttribute("data-swiper-parallax-rotate");
        if (
          (p || f
            ? ((p = p || "0"), (f = f || "0"))
            : e.isHorizontal()
            ? ((p = m), (f = "0"))
            : ((f = m), (p = "0")),
          p.indexOf("%") >= 0
            ? (p = `${parseInt(p, 10) * u * h}%`)
            : (p = `${p * u * h}px`),
          f.indexOf("%") >= 0
            ? (f = `${parseInt(f, 10) * u}%`)
            : (f = `${f * u}px`),
          typeof g != "undefined" && g !== null)
        ) {
          const v = g - (g - 1) * (1 - Math.abs(u));
          l.style.opacity = v;
        }
        let y = `translate3d(${p}, ${f}, 0px)`;
        if (typeof d != "undefined" && d !== null) {
          const v = d - (d - 1) * (1 - Math.abs(u));
          y += ` scale(${v})`;
        }
        if (_ && typeof _ != "undefined" && _ !== null) {
          const v = _ * u * -1;
          y += ` rotate(${v}deg)`;
        }
        l.style.transform = y;
      },
      a = () => {
        const { el: l, slides: u, progress: c, snapGrid: h, isElement: m } = e,
          p = Qe(l, r);
        e.isElement && p.push(...Qe(e.hostEl, r)),
          p.forEach((f) => {
            n(f, c);
          }),
          u.forEach((f, d) => {
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
      o = function (l) {
        l === void 0 && (l = e.params.speed);
        const { el: u, hostEl: c } = e,
          h = [...u.querySelectorAll(r)];
        e.isElement && h.push(...c.querySelectorAll(r)),
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
      i("setTransition", (l, u) => {
        e.params.parallax.enabled && o(u);
      });
  }
  function Ud(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = De();
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
      u = { x: 0, y: 0 };
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
      set($) {
        if (_ !== $) {
          const B = f.imageEl,
            N = f.slideEl;
          r("zoomChange", $, B, N);
        }
        _ = $;
      },
    });
    function y() {
      if (p.length < 2) return 1;
      const $ = p[0].pageX,
        B = p[0].pageY,
        N = p[1].pageX,
        j = p[1].pageY;
      return Math.sqrt(ht(N - $, 2) + ht(j - B, 2));
    }
    function v() {
      const $ = e.params.zoom,
        B = f.imageWrapEl.getAttribute("data-swiper-zoom") || $.maxRatio;
      if ($.limitToOriginalSize && f.imageEl && f.imageEl.naturalWidth) {
        const N = f.imageEl.naturalWidth / f.imageEl.offsetWidth;
        return Math.min(N, B);
      }
      return B;
    }
    function w() {
      if (p.length < 2) return { x: null, y: null };
      const $ = f.imageEl.getBoundingClientRect();
      return [
        (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - $.x - n.scrollX) / a,
        (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - $.y - n.scrollY) / a,
      ];
    }
    function D() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function x($) {
      const B = D();
      return !!(
        $.target.matches(B) ||
        e.slides.filter((N) => N.contains($.target)).length > 0
      );
    }
    function b($) {
      const B = `.${e.params.zoom.containerClass}`;
      return !!(
        $.target.matches(B) ||
        [...e.hostEl.querySelectorAll(B)].filter((N) => N.contains($.target))
          .length > 0
      );
    }
    function T($) {
      if (($.pointerType === "mouse" && p.splice(0, p.length), !x($))) return;
      const B = e.params.zoom;
      if (((h = !1), (m = !1), p.push($), !(p.length < 2))) {
        if (((h = !0), (f.scaleStart = y()), !f.slideEl)) {
          (f.slideEl = $.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
            f.slideEl || (f.slideEl = e.slides[e.activeIndex]);
          let N = f.slideEl.querySelector(`.${B.containerClass}`);
          if (
            (N &&
              (N = N.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
            (f.imageEl = N),
            N
              ? (f.imageWrapEl = Ji(f.imageEl, `.${B.containerClass}`)[0])
              : (f.imageWrapEl = void 0),
            !f.imageWrapEl)
          ) {
            f.imageEl = void 0;
            return;
          }
          f.maxRatio = v();
        }
        if (f.imageEl) {
          const [N, j] = w();
          (f.originX = N),
            (f.originY = j),
            (f.imageEl.style.transitionDuration = "0ms");
        }
        o = !0;
      }
    }
    function E($) {
      if (!x($)) return;
      const B = e.params.zoom,
        N = e.zoom,
        j = p.findIndex((ce) => ce.pointerId === $.pointerId);
      j >= 0 && (p[j] = $),
        !(p.length < 2) &&
          ((m = !0),
          (f.scaleMove = y()),
          f.imageEl &&
            ((N.scale = (f.scaleMove / f.scaleStart) * a),
            N.scale > f.maxRatio &&
              (N.scale = f.maxRatio - 1 + ht(N.scale - f.maxRatio + 1, 0.5)),
            N.scale < B.minRatio &&
              (N.scale = B.minRatio + 1 - ht(B.minRatio - N.scale + 1, 0.5)),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`)));
    }
    function S($) {
      if (!x($) || ($.pointerType === "mouse" && $.type === "pointerout"))
        return;
      const B = e.params.zoom,
        N = e.zoom,
        j = p.findIndex((ce) => ce.pointerId === $.pointerId);
      j >= 0 && p.splice(j, 1),
        !(!h || !m) &&
          ((h = !1),
          (m = !1),
          f.imageEl &&
            ((N.scale = Math.max(Math.min(N.scale, f.maxRatio), B.minRatio)),
            (f.imageEl.style.transitionDuration = `${e.params.speed}ms`),
            (f.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`),
            (a = N.scale),
            (o = !1),
            N.scale > 1 && f.slideEl
              ? f.slideEl.classList.add(`${B.zoomedSlideClass}`)
              : N.scale <= 1 &&
                f.slideEl &&
                f.slideEl.classList.remove(`${B.zoomedSlideClass}`),
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
    function F($) {
      const B = e.device;
      if (!f.imageEl || d.isTouched) return;
      B.android && $.cancelable && $.preventDefault(), (d.isTouched = !0);
      const N = p.length > 0 ? p[0] : $;
      (d.touchesStart.x = N.pageX), (d.touchesStart.y = N.pageY);
    }
    function R($) {
      const N = $.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
      if (!x($) || !b($)) return;
      const j = e.zoom;
      if (!f.imageEl) return;
      if (!d.isTouched || !f.slideEl) {
        N && O($);
        return;
      }
      if (N) {
        O($);
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
        (d.touchesCurrent.x = p.length > 0 ? p[0].pageX : $.pageX),
        (d.touchesCurrent.y = p.length > 0 ? p[0].pageY : $.pageY),
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
      $.cancelable && $.preventDefault(),
        $.stopPropagation(),
        k(),
        (d.isMoved = !0);
      const Ee = (j.scale - a) / (f.maxRatio - e.params.zoom.minRatio),
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
    function I() {
      const $ = e.zoom;
      if (((p.length = 0), !f.imageEl)) return;
      if (!d.isTouched || !d.isMoved) {
        (d.isTouched = !1), (d.isMoved = !1);
        return;
      }
      (d.isTouched = !1), (d.isMoved = !1);
      let B = 300,
        N = 300;
      const j = g.x * B,
        ce = d.currentX + j,
        tt = g.y * N,
        Se = d.currentY + tt;
      g.x !== 0 && (B = Math.abs((ce - d.currentX) / g.x)),
        g.y !== 0 && (N = Math.abs((Se - d.currentY) / g.y));
      const Ee = Math.max(B, N);
      (d.currentX = ce), (d.currentY = Se);
      const J = d.width * $.scale,
        ne = d.height * $.scale;
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
      const $ = e.zoom;
      f.slideEl &&
        e.activeIndex !== e.slides.indexOf(f.slideEl) &&
        (f.imageEl &&
          (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        f.imageWrapEl && (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        f.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
        ($.scale = 1),
        (a = 1),
        (f.slideEl = void 0),
        (f.imageEl = void 0),
        (f.imageWrapEl = void 0),
        (f.originX = 0),
        (f.originY = 0));
    }
    function O($) {
      if (a <= 1 || !f.imageWrapEl || !x($) || !b($)) return;
      const B = n.getComputedStyle(f.imageWrapEl).transform,
        N = new n.DOMMatrix(B);
      if (!l) {
        (l = !0),
          (u.x = $.clientX),
          (u.y = $.clientY),
          (d.startX = N.e),
          (d.startY = N.f),
          (d.width = f.imageEl.offsetWidth || f.imageEl.clientWidth),
          (d.height = f.imageEl.offsetHeight || f.imageEl.clientHeight),
          (f.slideWidth = f.slideEl.offsetWidth),
          (f.slideHeight = f.slideEl.offsetHeight);
        return;
      }
      const j = ($.clientX - u.x) * c,
        ce = ($.clientY - u.y) * c,
        tt = d.width * a,
        Se = d.height * a,
        Ee = f.slideWidth,
        J = f.slideHeight,
        ne = Math.min(Ee / 2 - tt / 2, 0),
        ye = -ne,
        He = Math.min(J / 2 - Se / 2, 0),
        z = -He,
        Be = Math.max(Math.min(d.startX + j, ye), ne),
        ct = Math.max(Math.min(d.startY + ce, z), He);
      (f.imageWrapEl.style.transitionDuration = "0ms"),
        (f.imageWrapEl.style.transform = `translate3d(${Be}px, ${ct}px, 0)`),
        (u.x = $.clientX),
        (u.y = $.clientY),
        (d.startX = Be),
        (d.startY = ct),
        (d.currentX = Be),
        (d.currentY = ct);
    }
    function A($) {
      const B = e.zoom,
        N = e.params.zoom;
      if (!f.slideEl) {
        $ &&
          $.target &&
          (f.slideEl = $.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
          f.slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (f.slideEl = Qe(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (f.slideEl = e.slides[e.activeIndex]));
        let Ue = f.slideEl.querySelector(`.${N.containerClass}`);
        Ue &&
          (Ue = Ue.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = Ue),
          Ue
            ? (f.imageWrapEl = Ji(f.imageEl, `.${N.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      if (!f.imageEl || !f.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        f.slideEl.classList.add(`${N.zoomedSlideClass}`);
      let j, ce, tt, Se, Ee, J, ne, ye, He, z, Be, ct, Wt, _e, Yt, ei, si, Ae;
      typeof d.touchesStart.x == "undefined" && $
        ? ((j = $.pageX), (ce = $.pageY))
        : ((j = d.touchesStart.x), (ce = d.touchesStart.y));
      const ti = a,
        pe = typeof $ == "number" ? $ : null;
      a === 1 &&
        pe &&
        ((j = void 0),
        (ce = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0));
      const Ft = v();
      (B.scale = pe || Ft),
        (a = pe || Ft),
        $ && !(a === 1 && pe)
          ? ((si = f.slideEl.offsetWidth),
            (Ae = f.slideEl.offsetHeight),
            (tt = Us(f.slideEl).left + n.scrollX),
            (Se = Us(f.slideEl).top + n.scrollY),
            (Ee = tt + si / 2 - j),
            (J = Se + Ae / 2 - ce),
            (He = f.imageEl.offsetWidth || f.imageEl.clientWidth),
            (z = f.imageEl.offsetHeight || f.imageEl.clientHeight),
            (Be = He * B.scale),
            (ct = z * B.scale),
            (Wt = Math.min(si / 2 - Be / 2, 0)),
            (_e = Math.min(Ae / 2 - ct / 2, 0)),
            (Yt = -Wt),
            (ei = -_e),
            ti > 0 &&
            pe &&
            typeof d.currentX == "number" &&
            typeof d.currentY == "number"
              ? ((ne = (d.currentX * B.scale) / ti),
                (ye = (d.currentY * B.scale) / ti))
              : ((ne = Ee * B.scale), (ye = J * B.scale)),
            ne < Wt && (ne = Wt),
            ne > Yt && (ne = Yt),
            ye < _e && (ye = _e),
            ye > ei && (ye = ei))
          : ((ne = 0), (ye = 0)),
        pe && B.scale === 1 && ((f.originX = 0), (f.originY = 0)),
        (d.currentX = ne),
        (d.currentY = ye),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = `translate3d(${ne}px, ${ye}px,0)`),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = `translate3d(0,0,0) scale(${B.scale})`);
    }
    function C() {
      const $ = e.zoom,
        B = e.params.zoom;
      if (!f.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (f.slideEl = Qe(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
          : (f.slideEl = e.slides[e.activeIndex]);
        let N = f.slideEl.querySelector(`.${B.containerClass}`);
        N &&
          (N = N.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = N),
          N
            ? (f.imageWrapEl = Ji(f.imageEl, `.${B.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      !f.imageEl ||
        !f.imageWrapEl ||
        (e.params.cssMode &&
          ((e.wrapperEl.style.overflow = ""),
          (e.wrapperEl.style.touchAction = "")),
        ($.scale = 1),
        (a = 1),
        (d.currentX = void 0),
        (d.currentY = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        f.slideEl.classList.remove(`${B.zoomedSlideClass}`),
        (f.slideEl = void 0),
        (f.originX = 0),
        (f.originY = 0),
        e.params.zoom.panOnMouseMove &&
          ((u = { x: 0, y: 0 }),
          l && ((l = !1), (d.startX = 0), (d.startY = 0))));
    }
    function W($) {
      const B = e.zoom;
      B.scale && B.scale !== 1 ? C() : A($);
    }
    function Q() {
      const $ = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
        B = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: $, activeListenerWithCapture: B };
    }
    function we() {
      const $ = e.zoom;
      if ($.enabled) return;
      $.enabled = !0;
      const { passiveListener: B, activeListenerWithCapture: N } = Q();
      e.wrapperEl.addEventListener("pointerdown", T, B),
        e.wrapperEl.addEventListener("pointermove", E, N),
        ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
          e.wrapperEl.addEventListener(j, S, B);
        }),
        e.wrapperEl.addEventListener("pointermove", R, N);
    }
    function se() {
      const $ = e.zoom;
      if (!$.enabled) return;
      $.enabled = !1;
      const { passiveListener: B, activeListenerWithCapture: N } = Q();
      e.wrapperEl.removeEventListener("pointerdown", T, B),
        e.wrapperEl.removeEventListener("pointermove", E, N),
        ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
          e.wrapperEl.removeEventListener(j, S, B);
        }),
        e.wrapperEl.removeEventListener("pointermove", R, N);
    }
    i("init", () => {
      e.params.zoom.enabled && we();
    }),
      i("destroy", () => {
        se();
      }),
      i("touchStart", ($, B) => {
        e.zoom.enabled && F(B);
      }),
      i("touchEnd", ($, B) => {
        e.zoom.enabled && I();
      }),
      i("doubleTap", ($, B) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          W(B);
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
        toggle: W,
      });
  }
  function Kd(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
    function r(u, c) {
      const h = (function () {
        let d, g, _;
        return (y, v) => {
          for (g = -1, d = y.length; d - g > 1; )
            (_ = (d + g) >> 1), y[_] <= v ? (g = _) : (d = _);
          return d;
        };
      })();
      (this.x = u), (this.y = c), (this.lastIndex = u.length - 1);
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
    function n(u) {
      e.controller.spline = e.params.loop
        ? new r(e.slidesGrid, u.slidesGrid)
        : new r(e.snapGrid, u.snapGrid);
    }
    function a(u, c) {
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
    function o(u, c) {
      const h = e.constructor,
        m = e.controller.control;
      let p;
      function f(d) {
        d.destroyed ||
          (d.setTransition(u, e),
          u !== 0 &&
            (d.transitionStart(),
            d.params.autoHeight &&
              Zi(() => {
                d.updateAutoHeight();
              }),
            ss(d.wrapperEl, () => {
              m && d.transitionEnd();
            })));
      }
      if (Array.isArray(m))
        for (p = 0; p < m.length; p += 1)
          m[p] !== c && m[p] instanceof h && f(m[p]);
      else m instanceof h && c !== m && f(m);
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
        l();
      }),
      i("resize", () => {
        l();
      }),
      i("observerUpdate", () => {
        l();
      }),
      i("setTranslate", (u, c, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTranslate(c, h);
      }),
      i("setTransition", (u, c, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTransition(c, h);
      }),
      Object.assign(e.controller, { setTranslate: a, setTransition: o });
  }
  function Zd(s) {
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
    function l(M) {
      const O = r;
      O.length !== 0 && ((O.innerHTML = ""), (O.innerHTML = M));
    }
    function u(M) {
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
    function w(M) {
      if (M.keyCode !== 13 && M.keyCode !== 32) return;
      const O = e.params.a11y,
        A = M.target;
      if (
        !(
          e.pagination &&
          e.pagination.el &&
          (A === e.pagination.el || e.pagination.el.contains(M.target)) &&
          !M.target.matches(Si(e.params.pagination.bulletClass))
        )
      ) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const C = ae(e.navigation.prevEl);
          ae(e.navigation.nextEl).includes(A) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? l(O.lastSlideMessage) : l(O.nextSlideMessage)),
            C.includes(A) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? l(O.firstSlideMessage) : l(O.prevSlideMessage));
        }
        e.pagination &&
          A.matches(Si(e.params.pagination.bulletClass)) &&
          A.click();
      }
    }
    function D() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: M, prevEl: O } = e.navigation;
      O && (e.isBeginning ? (y(O), h(O)) : (v(O), c(O))),
        M && (e.isEnd ? (y(M), h(M)) : (v(M), c(M)));
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
        e.pagination.bullets.forEach((O) => {
          e.params.pagination.clickable &&
            (c(O),
            e.params.pagination.renderBullet ||
              (m(O, "button"),
              d(
                O,
                M.paginationBulletMessage.replace(/\{\{index\}\}/, rs(O) + 1)
              ))),
            O.matches(Si(e.params.pagination.bulletActiveClass))
              ? O.setAttribute("aria-current", "true")
              : O.removeAttribute("aria-current");
        });
    }
    const E = (M, O, A) => {
        c(M),
          M.tagName !== "BUTTON" &&
            (m(M, "button"), M.addEventListener("keydown", w)),
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
            const W = e.params.loop
                ? parseInt(A.getAttribute("data-swiper-slide-index"), 10)
                : C,
              Q = M.slideLabelMessage
                .replace(/\{\{index\}\}/, W + 1)
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
          C = M.id || A.getAttribute("id") || `swiper-wrapper-${u(16)}`,
          W = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        g(A, C), _(A, W), F();
        let { nextEl: Q, prevEl: we } = e.navigation ? e.navigation : {};
        (Q = ae(Q)),
          (we = ae(we)),
          Q && Q.forEach(($) => E($, C, M.nextSlideMessage)),
          we && we.forEach(($) => E($, C, M.prevSlideMessage)),
          b() &&
            ae(e.pagination.el).forEach((B) => {
              B.addEventListener("keydown", w);
            }),
          Ye().addEventListener("visibilitychange", P),
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
        M && M.forEach((C) => C.removeEventListener("keydown", w)),
        O && O.forEach((C) => C.removeEventListener("keydown", w)),
        b() &&
          ae(e.pagination.el).forEach((W) => {
            W.removeEventListener("keydown", w);
          }),
        Ye().removeEventListener("visibilitychange", P),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", k, !0),
          e.el.removeEventListener("pointerdown", S, !0),
          e.el.removeEventListener("pointerup", L, !0));
    }
    i("beforeInit", () => {
      (r = Lt("span", e.params.a11y.notificationClass)),
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
        e.params.a11y.enabled && D();
      }),
      i("paginationUpdate", () => {
        e.params.a11y.enabled && T();
      }),
      i("destroy", () => {
        e.params.a11y.enabled && I();
      });
  }
  function Qd(s) {
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
        const f = De();
        let d;
        p ? (d = new URL(p)) : (d = f.location);
        const g = d.pathname
            .slice(1)
            .split("/")
            .filter((w) => w !== ""),
          _ = g.length,
          y = g[_ - 2],
          v = g[_ - 1];
        return { key: y, value: v };
      },
      l = (p, f) => {
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
          let w = e.params.history.root;
          w[w.length - 1] === "/" && (w = w.slice(0, w.length - 1)),
            (y = `${w}/${p ? `${p}/` : ""}${y}`);
        } else g.pathname.includes(p) || (y = `${p ? `${p}/` : ""}${y}`);
        e.params.history.keepQuery && (y += g.search);
        const v = d.history.state;
        (v && v.value === y) ||
          (e.params.history.replaceState
            ? d.history.replaceState({ value: y }, null, y)
            : d.history.pushState({ value: y }, null, y));
      },
      u = (p, f, d) => {
        if (f)
          for (let g = 0, _ = e.slides.length; g < _; g += 1) {
            const y = e.slides[g];
            if (a(y.getAttribute("data-history")) === f) {
              const w = e.getSlideIndex(y);
              e.slideTo(w, p, d);
            }
          }
        else e.slideTo(0, p, d);
      },
      c = () => {
        (n = o(e.params.url)), u(e.params.speed, n.value, !1);
      },
      h = () => {
        const p = De();
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
          u(0, n.value, e.params.runCallbacksOnInit),
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
        r && l(e.params.history.key, e.activeIndex);
      }),
      i("slideChange", () => {
        r && e.params.cssMode && l(e.params.history.key, e.activeIndex);
      });
  }
  function Jd(s) {
    let { swiper: e, extendParams: t, emit: i, on: r } = s,
      n = !1;
    const a = Ye(),
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
      u = () => {
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
          o.addEventListener("hashchange", l);
      },
      h = () => {
        e.params.hashNavigation.watchState &&
          o.removeEventListener("hashchange", l);
      };
    r("init", () => {
      e.params.hashNavigation.enabled && c();
    }),
      r("destroy", () => {
        e.params.hashNavigation.enabled && h();
      }),
      r("transitionEnd _freeModeNoMomentumRelease", () => {
        n && u();
      }),
      r("slideChange", () => {
        n && e.params.cssMode && u();
      });
  }
  function ef(s) {
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
      u = n && n.autoplay ? n.autoplay.delay : 3e3,
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
    const w = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (m = !0) : m && ((u = c), (m = !1));
        const O = e.autoplay.paused ? c : h + u - new Date().getTime();
        (e.autoplay.timeLeft = O),
          r("autoplayTimeLeft", O, O / l),
          (o = requestAnimationFrame(() => {
            w();
          }));
      },
      D = () => {
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
      x = (O) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(o), w();
        let A = typeof O == "undefined" ? e.params.autoplay.delay : O;
        (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
        const C = D();
        !Number.isNaN(C) &&
          C > 0 &&
          typeof O == "undefined" &&
          ((A = C), (l = C), (u = C)),
          (c = A);
        const W = e.params.speed,
          Q = () => {
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
      E = (O, A) => {
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
          _ ? ((_ = !1), x(c)) : x(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      L = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const O = Ye();
        O.visibilityState === "hidden" && ((_ = !0), E(!0)),
          O.visibilityState === "visible" && S();
      },
      P = (O) => {
        O.pointerType === "mouse" &&
          ((_ = !0), (y = !0), !(e.animating || e.autoplay.paused) && E(!0));
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
        Ye().addEventListener("visibilitychange", L);
      },
      M = () => {
        Ye().removeEventListener("visibilitychange", L);
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
          f && e.params.cssMode && S(), (f = !1), (p = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (g = !0);
      }),
      Object.assign(e.autoplay, { start: b, stop: T, pause: E, resume: S });
  }
  function tf(s) {
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
      const c = u.clickedIndex,
        h = u.clickedSlide;
      if (
        (h && h.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
        typeof c == "undefined" ||
        c === null
      )
        return;
      let m;
      u.params.loop
        ? (m = parseInt(
            u.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (m = c),
        e.params.loop ? e.slideToLoop(m) : e.slideTo(m);
    }
    function o() {
      const { thumbs: u } = e.params;
      if (r) return !1;
      r = !0;
      const c = e.constructor;
      if (u.swiper instanceof c) {
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
      } else if (ts(u.swiper)) {
        const h = Object.assign({}, u.swiper);
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
    function l(u) {
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
            (w) =>
              w.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
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
            c.slideTo(_, u ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const { thumbs: u } = e.params;
      if (!(!u || !u.swiper))
        if (typeof u.swiper == "string" || u.swiper instanceof HTMLElement) {
          const c = Ye(),
            h = () => {
              const p =
                typeof u.swiper == "string"
                  ? c.querySelector(u.swiper)
                  : u.swiper;
              if (p && p.swiper) (u.swiper = p.swiper), o(), l(!0);
              else if (p) {
                const f = `${e.params.eventsPrefix}init`,
                  d = (g) => {
                    (u.swiper = g.detail[0]),
                      p.removeEventListener(f, d),
                      o(),
                      l(!0),
                      u.swiper.update(),
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
      i("setTransition", (u, c) => {
        const h = e.thumbs.swiper;
        !h || h.destroyed || h.setTransition(c);
      }),
      i("beforeDestroy", () => {
        const u = e.thumbs.swiper;
        !u || u.destroyed || (n && u.destroy());
      }),
      Object.assign(e.thumbs, { init: o, update: l });
  }
  function rf(s) {
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
      const { touchEventsData: l, touches: u } = e;
      l.velocities.length === 0 &&
        l.velocities.push({
          position: u[e.isHorizontal() ? "startX" : "startY"],
          time: l.touchStartTime,
        }),
        l.velocities.push({
          position: u[e.isHorizontal() ? "currentX" : "currentY"],
          time: Gt(),
        });
    }
    function o(l) {
      let { currentPos: u } = l;
      if (e.params.cssMode) return;
      const {
          params: c,
          wrapperEl: h,
          rtlTranslate: m,
          snapGrid: p,
          touchEventsData: f,
        } = e,
        g = Gt() - f.touchStartTime;
      if (u < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (u > -e.maxTranslate()) {
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
            L = T.time - E.time;
          (e.velocity = S / L),
            (e.velocity /= 2),
            Math.abs(e.velocity) < c.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (L > 150 || Gt() - T.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= c.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let _ = 1e3 * c.freeMode.momentumRatio;
        const y = e.velocity * _;
        let v = e.translate + y;
        m && (v = -v);
        let w = !1,
          D;
        const x = Math.abs(e.velocity) * 20 * c.freeMode.momentumBounceRatio;
        let b;
        if (v < e.maxTranslate())
          c.freeMode.momentumBounce
            ? (v + e.maxTranslate() < -x && (v = e.maxTranslate() - x),
              (D = e.maxTranslate()),
              (w = !0),
              (f.allowMomentumBounce = !0))
            : (v = e.maxTranslate()),
            c.loop && c.centeredSlides && (b = !0);
        else if (v > e.minTranslate())
          c.freeMode.momentumBounce
            ? (v - e.minTranslate() > x && (v = e.minTranslate() + x),
              (D = e.minTranslate()),
              (w = !0),
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
        c.freeMode.momentumBounce && w
          ? (e.updateProgress(D),
            e.setTransition(_),
            e.setTranslate(v),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            ss(h, () => {
              !e ||
                e.destroyed ||
                !f.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(c.speed),
                setTimeout(() => {
                  e.setTranslate(D),
                    ss(h, () => {
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
              ss(h, () => {
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
  function sf(s) {
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
      u = (d) => {
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
          v = l(),
          { rows: w, fill: D } = e.params.grid,
          x =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : _.length;
        let b, T, E;
        if (D === "row" && y > 1) {
          const S = Math.floor(d / (y * w)),
            L = d - w * y * S,
            P = S === 0 ? y : Math.min(Math.ceil((x - S * w * y) / w), y);
          (E = Math.floor(L / P)),
            (T = L - E * P + S * y),
            (b = T + (E * r) / w),
            (g.style.order = b);
        } else
          D === "column"
            ? ((T = Math.floor(d / w)),
              (E = d - T * w),
              (T > a || (T === a && E === w - 1)) &&
                ((E += 1), E >= w && ((E = 0), (T += 1))))
            : ((E = Math.floor(d / n)), (T = d - E * n));
        (g.row = E),
          (g.column = T),
          (g.style.height = `calc((100% - ${(w - 1) * v}px) / ${w})`),
          (g.style[e.getDirectionLabel("margin-top")] =
            E !== 0 ? v && `${v}px` : ""),
          (g.swiperSlideGridSet = !0);
      },
      m = (d, g) => {
        const { centeredSlides: _, roundLengths: y } = e.params,
          v = l(),
          { rows: w } = e.params.grid;
        if (
          ((e.virtualSize = (d + v) * r),
          (e.virtualSize = Math.ceil(e.virtualSize / w) - v),
          e.params.cssMode ||
            (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
              e.virtualSize + v
            }px`),
          _)
        ) {
          const D = [];
          for (let x = 0; x < g.length; x += 1) {
            let b = g[x];
            y && (b = Math.floor(b)), g[x] < e.virtualSize + g[0] && D.push(b);
          }
          g.splice(0, g.length), g.push(...D);
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
        initSlides: u,
        unsetSlides: c,
        updateSlide: h,
        updateWrapperSize: m,
      });
  }
  function nf(s) {
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
  function af(s) {
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
  function of(s, e) {
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
    const u = [];
    for (let c = o - 1; c >= s; c -= 1) {
      const h = t.slides[c];
      h.remove(), u.unshift(h);
    }
    if (typeof e == "object" && "length" in e) {
      for (let c = 0; c < e.length; c += 1) e[c] && n.append(e[c]);
      l = a > s ? a + e.length : a;
    } else n.append(e);
    for (let c = 0; c < u.length; c += 1) n.append(u[c]);
    t.recalcSlides(),
      i.loop && t.loopCreate(),
      (!i.observer || t.isElement) && t.update(),
      i.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function lf(s) {
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
  function uf() {
    const s = this,
      e = [];
    for (let t = 0; t < s.slides.length; t += 1) e.push(t);
    s.removeSlide(e);
  }
  function cf(s) {
    let { swiper: e } = s;
    Object.assign(e, {
      appendSlide: nf.bind(e),
      prependSlide: af.bind(e),
      addSlide: of.bind(e),
      removeSlide: lf.bind(e),
      removeAllSlides: uf.bind(e),
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
      getEffectParams: u,
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
          if (!u || !u().slideShadows) return;
          t.slides.forEach((h) => {
            h.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((m) => m.remove());
          }),
            l();
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
  function ns(s, e) {
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
          : e.slides.find((u) => u.shadowRoot && u.shadowRoot === o.parentNode);
    if (e.params.virtualTranslate && t !== 0) {
      let o = !1,
        l;
      r
        ? (l = i)
        : (l = i.filter((u) => {
            const c = u.classList.contains("swiper-slide-transform") ? a(u) : u;
            return e.getSlideIndex(c) === n;
          })),
        l.forEach((u) => {
          ss(u, () => {
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
  function df(s) {
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
            const u = e.slides[l];
            let h = -u.swiperSlideOffset;
            e.params.virtualTranslate || (h -= e.translate);
            let m = 0;
            e.isHorizontal() || ((m = h), (h = 0));
            const p = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(u.progress), 0)
                : 1 + Math.min(Math.max(u.progress, -1), 0),
              f = ns(o, u);
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
  function ff(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const r = (l, u, c) => {
      let h = c
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        m = c
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      h ||
        ((h = Lt(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            c ? "left" : "top"
          }`.split(" ")
        )),
        l.append(h)),
        m ||
          ((m = Lt(
            "div",
            `swiper-slide-shadow-cube swiper-slide-shadow-${
              c ? "right" : "bottom"
            }`.split(" ")
          )),
          l.append(m)),
        h && (h.style.opacity = Math.max(-u, 0)),
        m && (m.style.opacity = Math.max(u, 0));
    };
    Cr({
      effect: "cube",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
            el: l,
            wrapperEl: u,
            slides: c,
            width: h,
            height: m,
            rtlTranslate: p,
            size: f,
            browser: d,
          } = e,
          g = Ks(e),
          _ = e.params.cubeEffect,
          y = e.isHorizontal(),
          v = e.virtual && e.params.virtual.enabled;
        let w = 0,
          D;
        _.shadow &&
          (y
            ? ((D = e.wrapperEl.querySelector(".swiper-cube-shadow")),
              D ||
                ((D = Lt("div", "swiper-cube-shadow")), e.wrapperEl.append(D)),
              (D.style.height = `${h}px`))
            : ((D = l.querySelector(".swiper-cube-shadow")),
              D || ((D = Lt("div", "swiper-cube-shadow")), l.append(D))));
        for (let b = 0; b < c.length; b += 1) {
          const T = c[b];
          let E = b;
          v && (E = parseInt(T.getAttribute("data-swiper-slide-index"), 10));
          let S = E * 90,
            L = Math.floor(S / 360);
          p && ((S = -S), (L = Math.floor(-S / 360)));
          const P = Math.max(Math.min(T.progress, 1), -1);
          let k = 0,
            F = 0,
            R = 0;
          E % 4 === 0
            ? ((k = -L * 4 * f), (R = 0))
            : (E - 1) % 4 === 0
            ? ((k = 0), (R = -L * 4 * f))
            : (E - 2) % 4 === 0
            ? ((k = f + L * 4 * f), (R = f))
            : (E - 3) % 4 === 0 && ((k = -f), (R = 3 * f + f * 4 * L)),
            p && (k = -k),
            y || ((F = k), (k = 0));
          const I = `rotateX(${g(y ? 0 : -S)}deg) rotateY(${g(
            y ? S : 0
          )}deg) translate3d(${k}px, ${F}px, ${R}px)`;
          P <= 1 &&
            P > -1 &&
            ((w = E * 90 + P * 90), p && (w = -E * 90 - P * 90)),
            (T.style.transform = I),
            _.slideShadows && r(T, P, y);
        }
        if (
          ((u.style.transformOrigin = `50% 50% -${f / 2}px`),
          (u.style["-webkit-transform-origin"] = `50% 50% -${f / 2}px`),
          _.shadow)
        )
          if (y)
            D.style.transform = `translate3d(0px, ${
              h / 2 + _.shadowOffset
            }px, ${-h / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
              _.shadowScale
            })`;
          else {
            const b = Math.abs(w) - Math.floor(Math.abs(w) / 90) * 90,
              T =
                1.5 -
                (Math.sin((b * 2 * Math.PI) / 360) / 2 +
                  Math.cos((b * 2 * Math.PI) / 360) / 2),
              E = _.shadowScale,
              S = _.shadowScale / T,
              L = _.shadowOffset;
            D.style.transform = `scale3d(${E}, 1, ${S}) translate3d(0px, ${
              m / 2 + L
            }px, ${-m / 2 / S}px) rotateX(-89.99deg)`;
          }
        const x =
          (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -f / 2 : 0;
        (u.style.transform = `translate3d(0px,0,${x}px) rotateX(${g(
          e.isHorizontal() ? 0 : w
        )}deg) rotateY(${g(e.isHorizontal() ? -w : 0)}deg)`),
          u.style.setProperty("--swiper-cube-translate-z", `${x}px`);
      },
      setTransition: (l) => {
        const { el: u, slides: c } = e;
        if (
          (c.forEach((h) => {
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
          const h = u.querySelector(".swiper-cube-shadow");
          h && (h.style.transitionDuration = `${l}ms`);
        }
      },
      recreateShadows: () => {
        const l = e.isHorizontal();
        e.slides.forEach((u) => {
          const c = Math.max(Math.min(u.progress, 1), -1);
          r(u, c, l);
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
  function Mr(s, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
        s ? ` swiper-slide-shadow-${s}` : ""
      }`,
      r = Qi(e);
    let n = r.querySelector(`.${i.split(" ").join(".")}`);
    return n || ((n = Lt("div", i.split(" "))), r.append(n)), n;
  }
  function pf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
    const r = (l, u) => {
      let c = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        h = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      c || (c = Mr("flip", l, e.isHorizontal() ? "left" : "top")),
        h || (h = Mr("flip", l, e.isHorizontal() ? "right" : "bottom")),
        c && (c.style.opacity = Math.max(-u, 0)),
        h && (h.style.opacity = Math.max(u, 0));
    };
    Cr({
      effect: "flip",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: l, rtlTranslate: u } = e,
          c = e.params.flipEffect,
          h = Ks(e);
        for (let m = 0; m < l.length; m += 1) {
          const p = l[m];
          let f = p.progress;
          e.params.flipEffect.limitRotation &&
            (f = Math.max(Math.min(p.progress, 1), -1));
          const d = p.swiperSlideOffset;
          let _ = -180 * f,
            y = 0,
            v = e.params.cssMode ? -d - e.translate : -d,
            w = 0;
          e.isHorizontal()
            ? u && (_ = -_)
            : ((w = v), (v = 0), (y = -_), (_ = 0)),
            (p.style.zIndex = -Math.abs(Math.round(f)) + l.length),
            c.slideShadows && r(p, f);
          const D = `translate3d(${v}px, ${w}px, 0px) rotateX(${h(
              y
            )}deg) rotateY(${h(_)}deg)`,
            x = ns(c, p);
          x.style.transform = D;
        }
      },
      setTransition: (l) => {
        const u = e.slides.map((c) => Qi(c));
        u.forEach((c) => {
          (c.style.transitionDuration = `${l}ms`),
            c
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((h) => {
                h.style.transitionDuration = `${l}ms`;
              });
        }),
          Qs({ swiper: e, duration: l, transformElements: u });
      },
      recreateShadows: () => {
        e.params.flipEffect,
          e.slides.forEach((l) => {
            let u = l.progress;
            e.params.flipEffect.limitRotation &&
              (u = Math.max(Math.min(l.progress, 1), -1)),
              r(l, u);
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
  function hf(s) {
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
          const { width: a, height: o, slides: l, slidesSizesGrid: u } = e,
            c = e.params.coverflowEffect,
            h = e.isHorizontal(),
            m = e.translate,
            p = h ? -m + a / 2 : -m + o / 2,
            f = h ? c.rotate : -c.rotate,
            d = c.depth,
            g = Ks(e);
          for (let _ = 0, y = l.length; _ < y; _ += 1) {
            const v = l[_],
              w = u[_],
              D = v.swiperSlideOffset,
              x = (p - D - w / 2) / w,
              b =
                typeof c.modifier == "function"
                  ? c.modifier(x)
                  : x * c.modifier;
            let T = h ? f * b : 0,
              E = h ? 0 : f * b,
              S = -d * Math.abs(b),
              L = c.stretch;
            typeof L == "string" &&
              L.indexOf("%") !== -1 &&
              (L = (parseFloat(c.stretch) / 100) * w);
            let P = h ? 0 : L * b,
              k = h ? L * b : 0,
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
              I = ns(c, v);
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
              M || (M = Mr("coverflow", v, h ? "left" : "top")),
                O || (O = Mr("coverflow", v, h ? "right" : "bottom")),
                M && (M.style.opacity = b > 0 ? b : 0),
                O && (O.style.opacity = -b > 0 ? -b : 0);
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
                  .forEach((u) => {
                    u.style.transitionDuration = `${a}ms`;
                  });
            });
        },
        perspective: () => !0,
        overwriteParams: () => ({ watchSlidesProgress: !0 }),
      });
  }
  function mf(s) {
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
        const { slides: o, wrapperEl: l, slidesSizesGrid: u } = e,
          c = e.params.creativeEffect,
          { progressMultiplier: h } = c,
          m = e.params.centeredSlides,
          p = Ks(e);
        if (m) {
          const f = u[0] / 2 - e.params.slidesOffsetBefore || 0;
          l.style.transform = `translateX(calc(50% - ${f}px))`;
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
            w = [e.params.cssMode ? -v - e.translate : -v, 0, 0],
            D = [0, 0, 0];
          let x = !1;
          e.isHorizontal() || ((w[1] = w[0]), (w[0] = 0));
          let b = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          _ < 0 ? ((b = c.next), (x = !0)) : _ > 0 && ((b = c.prev), (x = !0)),
            w.forEach((F, R) => {
              w[R] = `calc(${F}px + (${r(b.translate[R])} * ${Math.abs(
                _ * h
              )}))`;
            }),
            D.forEach((F, R) => {
              let I = b.rotate[R] * Math.abs(_ * h);
              D[R] = I;
            }),
            (d.style.zIndex = -Math.abs(Math.round(g)) + o.length);
          const T = w.join(", "),
            E = `rotateX(${p(D[0])}deg) rotateY(${p(D[1])}deg) rotateZ(${p(
              D[2]
            )}deg)`,
            S =
              y < 0
                ? `scale(${1 + (1 - b.scale) * y * h})`
                : `scale(${1 - (1 - b.scale) * y * h})`,
            L =
              y < 0 ? 1 + (1 - b.opacity) * y * h : 1 - (1 - b.opacity) * y * h,
            P = `translate3d(${T}) ${E} ${S}`;
          if ((x && b.shadow) || !x) {
            let F = d.querySelector(".swiper-slide-shadow");
            if ((!F && b.shadow && (F = Mr("creative", d)), F)) {
              const R = c.shadowPerProgress ? _ * (1 / c.limitProgress) : _;
              F.style.opacity = Math.min(Math.max(Math.abs(R), 0), 1);
            }
          }
          const k = ns(c, d);
          (k.style.transform = P),
            (k.style.opacity = L),
            b.origin && (k.style.transformOrigin = b.origin);
        }
      },
      setTransition: (o) => {
        const l = e.slides.map((u) => Qi(u));
        l.forEach((u) => {
          (u.style.transitionDuration = `${o}ms`),
            u.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
              c.style.transitionDuration = `${o}ms`;
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
  function gf(s) {
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
            u = e.params.cardsEffect,
            { startTranslate: c, isTouched: h } = e.touchEventsData,
            m = l ? -e.translate : e.translate;
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
            const w = -100 * Math.abs(g);
            let D = 1,
              x = -u.perSlideRotate * g,
              b = u.perSlideOffset - Math.abs(g) * 0.75;
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
              const F = ht(1 - Math.abs((Math.abs(g) - 0.5) / 0.5), 0.5);
              (x += -28 * g * F),
                (D += -0.5 * F),
                (b += 96 * F),
                (v = `${-25 * F * Math.abs(g)}%`);
            }
            if (
              (g < 0
                ? (y = `calc(${y}px ${l ? "-" : "+"} (${b * Math.abs(g)}%))`)
                : g > 0
                ? (y = `calc(${y}px ${l ? "-" : "+"} (-${b * Math.abs(g)}%))`)
                : (y = `${y}px`),
              !e.isHorizontal())
            ) {
              const F = v;
              (v = y), (y = F);
            }
            const L = g < 0 ? `${1 + (1 - D) * g}` : `${1 - (1 - D) * g}`,
              P = `
        translate3d(${y}, ${v}, ${w}px)
        rotateZ(${u.rotate ? (l ? -x : x) : 0}deg)
        scale(${L})
      `;
            if (u.slideShadows) {
              let F = f.querySelector(".swiper-slide-shadow");
              F || (F = Mr("cards", f)),
                F &&
                  (F.style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            f.style.zIndex = -Math.abs(Math.round(d)) + a.length;
            const k = ns(u, f);
            k.style.transform = P;
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => Qi(l));
          o.forEach((l) => {
            (l.style.transitionDuration = `${a}ms`),
              l.querySelectorAll(".swiper-slide-shadow").forEach((u) => {
                u.style.transitionDuration = `${a}ms`;
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
  const vf = [
    Vd,
    Hd,
    Wd,
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
    cf,
    df,
    ff,
    pf,
    hf,
    mf,
    gf,
  ];
  Et.use(vf);
  class yf {
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
  function as() {
    new yf();
  }
  function Ei(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function qo(s, e) {
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
   */ var kt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Pr = { duration: 0.5, overwrite: !1, delay: 0 },
    sa,
    Je,
    be,
    jt = 1e8,
    he = 1 / jt,
    na = Math.PI * 2,
    _f = na / 4,
    wf = 0,
    Vo = Math.sqrt,
    Df = Math.cos,
    bf = Math.sin,
    Xe = function (e) {
      return typeof e == "string";
    },
    Pe = function (e) {
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
    xt = function (e) {
      return e !== !1;
    },
    oa = function () {
      return typeof window != "undefined";
    },
    Js = function (e) {
      return Pe(e) || Xe(e);
    },
    Ho =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    st = Array.isArray,
    la = /(?:-?\.?\d|\.)+/gi,
    Wo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Ar = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ua = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Yo = /[+-]=-?[.\d]+/,
    Xo = /[^,'"\[\]\s]+/gi,
    Sf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Te,
    ci,
    ca,
    da,
    It = {},
    en = {},
    Go,
    jo = function (e) {
      return (en = Or(e, It)) && Mt;
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
    os = function (e, t) {
      return !t && console.warn(e);
    },
    Uo = function (e, t) {
      return (e && (It[e] = t) && en && (en[e] = t)) || It;
    },
    ls = function () {
      return 0;
    },
    Ef = { suppressEvents: !0, isStart: !0, kill: !1 },
    tn = { suppressEvents: !0, kill: !1 },
    xf = { suppressEvents: !0 },
    pa = {},
    zi = [],
    ha = {},
    Ko,
    zt = {},
    ma = {},
    Zo = 30,
    rn = [],
    ga = "",
    va = function (e) {
      var t = e[0],
        i,
        r;
      if ((ui(t) || Pe(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = rn.length; r-- && !rn[r].targetTest(t); );
        i = rn[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Tl(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    er = function (e) {
      return e._gsap || va(Kt(e))[0]._gsap;
    },
    Qo = function (e, t, i) {
      return (i = e[t]) && Pe(i)
        ? e[t]()
        : (aa(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Tt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Oe = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    ze = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Fr = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    Tf = function (e, t) {
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
    Jo = function (e, t, i, r) {
      zi.length && !Je && sn(),
        e.render(t, i, Je && t < 0 && (e._initted || e._startAt)),
        zi.length && !Je && sn();
    },
    el = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(Xo).length < 2
        ? t
        : Xe(e)
        ? e.trim()
        : e;
    },
    tl = function (e) {
      return e;
    },
    Rt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Cf = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    Or = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    il = function s(e, t) {
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
      var t = e.parent || Te,
        i = e.keyframes ? Cf(st(e.keyframes)) : Rt;
      if (xt(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    Mf = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    rl = function (e, t, i, r, n) {
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
    Pf = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    ya = function (e, t, i, r) {
      return (
        e._startAt &&
        (Je
          ? e._startAt.revert(tn)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    Af = function s(e) {
      return !e || (e._ts && s(e.parent));
    },
    sl = function (e) {
      return e._repeat ? Lr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Lr = function (e, t) {
      var i = Math.floor((e = ze(e / t)));
      return e && i === e ? i - 1 : i;
    },
    on = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    ln = function (e) {
      return (e._end = ze(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || he) || 0)
      ));
    },
    un = function (e, t) {
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
          ln(e),
          i._dirty || tr(i, e)),
        e
      );
    },
    nl = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = on(e.rawTime(), t)),
          (!t._dur || ds(0, t.totalDuration(), i) - t._tTime > he) &&
            t.render(i, !0)),
        tr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -he;
      }
    },
    di = function (e, t, i, r) {
      return (
        t.parent && Ri(t),
        (t._start = ze(
          (xi(i) ? i : i || e !== Te ? Ut(e, i, t) : e._time) + t._delay
        )),
        (t._end = ze(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        rl(e, t, "_first", "_last", e._sort ? "_start" : 0),
        _a(t) || (e._recent = t),
        r || nl(e, t),
        e._ts < 0 && un(e, e._tTime),
        e
      );
    },
    al = function (e, t) {
      return (
        (It.ScrollTrigger || fa("scrollTrigger", t)) &&
        It.ScrollTrigger.create(t, e)
      );
    },
    ol = function (e, t, i, r, n) {
      if ((Ma(e, t, n), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Je &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Ko !== Bt.frame
      )
        return zi.push(e), (e._lazy = [n, r]), 1;
    },
    Ff = function s(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
    },
    _a = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Of = function (e, t, i, r) {
      var n = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && Ff(e) && !(!e._initted && _a(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !_a(e))))
            ? 0
            : 1,
        o = e._rDelay,
        l = 0,
        u,
        c,
        h;
      if (
        (o &&
          e._repeat &&
          ((l = ds(0, e._tDur, t)),
          (c = Lr(l, o)),
          e._yoyo && c & 1 && (a = 1 - a),
          c !== Lr(e._tTime, o) &&
            ((n = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== n || Je || r || e._zTime === he || (!t && e._zTime))
      ) {
        if (!e._initted && ol(e, t, r, i, l)) return;
        for (
          h = e._zTime,
            e._zTime = t || (i ? he : 0),
            i || (i = t && !h),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            u = e._pt;
          u;

        )
          u.r(a, u.d), (u = u._next);
        t < 0 && ya(e, t, i, !0),
          e._onUpdate && !i && $t(e, "onUpdate"),
          l && e._repeat && !i && e.parent && $t(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && Ri(e, 1),
            !i &&
              !Je &&
              ($t(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Lf = function (e, t, i) {
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
    kr = function (e, t, i, r) {
      var n = e._repeat,
        a = ze(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = n ? (n < 0 ? 1e10 : ze(a * (n + 1) + e._rDelay * n)) : a),
        o > 0 && !r && un(e, (e._tTime = e._tDur * o)),
        e.parent && ln(e),
        i || tr(e.parent, e),
        e
      );
    },
    ll = function (e) {
      return e instanceof gt ? tr(e) : kr(e, e._dur);
    },
    kf = { _start: 0, endTime: ls, totalDuration: ls },
    Ut = function s(e, t, i) {
      var r = e.labels,
        n = e._recent || kf,
        a = e.duration() >= jt ? n.endTime(!1) : e._dur,
        o,
        l,
        u;
      return Xe(t) && (isNaN(t) || t in r)
        ? ((l = t.charAt(0)),
          (u = t.substr(-1) === "%"),
          (o = t.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (u ? (o < 0 ? n : i).totalDuration() / 100 : 1))
            : o < 0
            ? (t in r || (r[t] = a), r[t])
            : ((l = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
              u && i && (l = (l / 100) * (st(i) ? i[0] : i).totalDuration()),
              o > 1 ? s(e, t.substr(0, o - 1), i) + l : a + l))
        : t == null
        ? a
        : +t;
    },
    cs = function (e, t, i) {
      var r = xi(t[1]),
        n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[n],
        o,
        l;
      if ((r && (a.duration = t[1]), (a.parent = i), e)) {
        for (o = a, l = i; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = xt(l.vars.inherit) && l.parent);
        (a.immediateRender = xt(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[n - 1]);
      }
      return new Re(t[0], a, t[n + 1]);
    },
    $i = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    ds = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    nt = function (e, t) {
      return !Xe(e) || !(t = Sf.exec(e)) ? "" : t[1];
    },
    If = function (e, t, i) {
      return $i(i, function (r) {
        return ds(e, t, r);
      });
    },
    wa = [].slice,
    ul = function (e, t) {
      return (
        e &&
        ui(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && ui(e[0]))) &&
        !e.nodeType &&
        e !== ci
      );
    },
    zf = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var n;
          return (Xe(r) && !t) || ul(r, 1)
            ? (n = i).push.apply(n, Kt(r))
            : i.push(r);
        }) || i
      );
    },
    Kt = function (e, t, i) {
      return be && !t && be.selector
        ? be.selector(e)
        : Xe(e) && !i && (ca || !zr())
        ? wa.call((t || da).querySelectorAll(e), 0)
        : st(e)
        ? zf(e, i)
        : ul(e)
        ? wa.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Da = function (e) {
      return (
        (e = Kt(e)[0] || os("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Kt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? os("Invalid scope") || da.createElement("div")
              : e
          );
        }
      );
    },
    cl = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    dl = function (e) {
      if (Pe(e)) return e;
      var t = ui(e) ? e : { each: e },
        i = ir(t.ease),
        r = t.from || 0,
        n = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        u = t.axis,
        c = r,
        h = r;
      return (
        Xe(r)
          ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((c = r[0]), (h = r[1])),
        function (m, p, f) {
          var d = (f || t).length,
            g = a[d],
            _,
            y,
            v,
            w,
            D,
            x,
            b,
            T,
            E;
          if (!g) {
            if (((E = t.grid === "auto" ? 0 : (t.grid || [1, jt])[1]), !E)) {
              for (
                b = -jt;
                b < (b = f[E++].getBoundingClientRect().left) && E < d;

              );
              E < d && E--;
            }
            for (
              g = a[d] = [],
                _ = l ? Math.min(E, d) * c - 0.5 : r % E,
                y = E === jt ? 0 : l ? (d * h) / E - 0.5 : (r / E) | 0,
                b = 0,
                T = jt,
                x = 0;
              x < d;
              x++
            )
              (v = (x % E) - _),
                (w = y - ((x / E) | 0)),
                (g[x] = D =
                  u ? Math.abs(u === "y" ? w : v) : Vo(v * v + w * w)),
                D > b && (b = D),
                D < T && (T = D);
            r === "random" && cl(g),
              (g.max = b - T),
              (g.min = T),
              (g.v = d =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (E > d
                      ? d - 1
                      : u
                      ? u === "y"
                        ? d / E
                        : E
                      : Math.max(E, d / E)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = d < 0 ? n - d : n),
              (g.u = nt(t.amount || t.each) || 0),
              (i = i && d < 0 ? Sl(i) : i);
          }
          return (
            (d = (g[m] - g.min) / g.max || 0),
            ze(g.b + (i ? i(d) : d) * g.v) + g.u
          );
        }
      );
    },
    ba = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = ze(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (xi(i) ? 0 : nt(i));
      };
    },
    fl = function (e, t) {
      var i = st(e),
        r,
        n;
      return (
        !i &&
          ui(e) &&
          ((r = i = e.radius || jt),
          e.values
            ? ((e = Kt(e.values)), (n = !xi(e[0])) && (r *= r))
            : (e = ba(e.increment))),
        $i(
          t,
          i
            ? Pe(e)
              ? function (a) {
                  return (n = e(a)), Math.abs(n - a) <= r ? n : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(n ? a.x : a),
                      l = parseFloat(n ? a.y : 0),
                      u = jt,
                      c = 0,
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
                      m < u && ((u = m), (c = h));
                  return (
                    (c = !r || u <= r ? e[c] : a),
                    n || c === a || xi(a) ? c : c + nt(a)
                  );
                }
            : ba(e)
        )
      );
    },
    pl = function (e, t, i, r) {
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
    Rf = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (n, a) {
          return a(n);
        }, r);
      };
    },
    $f = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || nt(i));
      };
    },
    Bf = function (e, t, i) {
      return ml(e, t, 0, 1, i);
    },
    hl = function (e, t, i) {
      return $i(i, function (r) {
        return e[~~t(r)];
      });
    },
    Nf = function s(e, t, i) {
      var r = t - e;
      return st(e)
        ? hl(e, s(0, e.length), t)
        : $i(i, function (n) {
            return ((r + ((n - e) % r)) % r) + e;
          });
    },
    qf = function s(e, t, i) {
      var r = t - e,
        n = r * 2;
      return st(e)
        ? hl(e, s(0, e.length - 1), t)
        : $i(i, function (a) {
            return (a = (n + ((a - e) % n)) % n || 0), e + (a > r ? n - a : a);
          });
    },
    fs = function (e) {
      for (var t = 0, i = "", r, n, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (n = e.substr(r + 7, a - r - 7).match(o ? Xo : la)),
          (i +=
            e.substr(t, r - t) +
            pl(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    ml = function (e, t, i, r, n) {
      var a = t - e,
        o = r - i;
      return $i(n, function (l) {
        return i + (((l - e) / a) * o || 0);
      });
    },
    Vf = function s(e, t, i, r) {
      var n = isNaN(e + t)
        ? 0
        : function (p) {
            return (1 - p) * e + p * t;
          };
      if (!n) {
        var a = Xe(e),
          o = {},
          l,
          u,
          c,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (st(e) && !st(t)) {
          for (c = [], h = e.length, m = h - 2, u = 1; u < h; u++)
            c.push(s(e[u - 1], e[u]));
          h--,
            (n = function (f) {
              f *= h;
              var d = Math.min(m, ~~f);
              return c[d](f - d);
            }),
            (i = t);
        } else r || (e = Or(st(e) ? [] : {}, e));
        if (!c) {
          for (l in t) Ta.call(o, e, l, "get", t[l]);
          n = function (f) {
            return Fa(f, o) || (a ? e.p : e);
          };
        }
      }
      return $i(i, n);
    },
    gl = function (e, t, i) {
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
    $t = function (e, t, i) {
      var r = e.vars,
        n = r[t],
        a = be,
        o = e._ctx,
        l,
        u,
        c;
      if (n)
        return (
          (l = r[t + "Params"]),
          (u = r.callbackScope || e),
          i && zi.length && sn(),
          o && (be = o),
          (c = l ? n.apply(u, l) : n.call(u)),
          (be = a),
          c
        );
    },
    ps = function (e) {
      return (
        Ri(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Je),
        e.progress() < 1 && $t(e, "onInterrupt"),
        e
      );
    },
    Ir,
    vl = [],
    yl = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), oa() || e.headless)) {
          var t = e.name,
            i = Pe(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            n = {
              init: ls,
              render: Fa,
              add: Ta,
              kill: sp,
              modifier: rp,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Aa,
              aliases: {},
              register: 0,
            };
          if ((zr(), e !== r)) {
            if (zt[t]) return;
            Rt(r, Rt(nn(e, n), a)),
              Or(r.prototype, Or(n, nn(e, a))),
              (zt[(r.prop = t)] = r),
              e.targetTest && (rn.push(r), (pa[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Uo(t, r), e.register && e.register(Mt, r, Ct);
        } else vl.push(e);
    },
    me = 255,
    hs = {
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
    Sa = function (e, t, i) {
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
    _l = function (e, t, i) {
      var r = e ? (xi(e) ? [e >> 16, (e >> 8) & me, e & me] : 0) : hs.black,
        n,
        a,
        o,
        l,
        u,
        c,
        h,
        m,
        p,
        f;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), hs[e]))
          r = hs[e];
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
          if (((r = f = e.match(la)), !t))
            (l = (+r[0] % 360) / 360),
              (u = +r[1] / 100),
              (c = +r[2] / 100),
              (a = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (n = c * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = Sa(l + 1 / 3, n, a)),
              (r[1] = Sa(l, n, a)),
              (r[2] = Sa(l - 1 / 3, n, a));
          else if (~e.indexOf("="))
            return (r = e.match(Wo)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(la) || hs.transparent;
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
            ? (l = u = 0)
            : ((p = h - m),
              (u = c > 0.5 ? p / (2 - h - m) : p / (h + m)),
              (l =
                h === n
                  ? (a - o) / p + (a < o ? 6 : 0)
                  : h === a
                  ? (o - n) / p + 2
                  : (n - a) / p + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    wl = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(Bi).forEach(function (n) {
          var a = n.match(Ar) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Dl = function (e, t, i) {
      var r = "",
        n = (e + r).match(Bi),
        a = t ? "hsla(" : "rgba(",
        o = 0,
        l,
        u,
        c,
        h;
      if (!n) return e;
      if (
        ((n = n.map(function (m) {
          return (
            (m = _l(m, t, 1)) &&
            a +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((c = wl(e)), (l = i.c), l.join(r) !== c.c.join(r)))
      )
        for (u = e.replace(Bi, "1").split(Ar), h = u.length - 1; o < h; o++)
          r +=
            u[o] +
            (~l.indexOf(o)
              ? n.shift() || a + "0,0,0,0)"
              : (c.length ? c : n.length ? n : i).shift());
      if (!u)
        for (u = e.split(Bi), h = u.length - 1; o < h; o++) r += u[o] + n[o];
      return r + u[h];
    },
    Bi = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in hs) s += "|" + e + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    Hf = /hsl[a]?\(/,
    bl = function (e) {
      var t = e.join(" "),
        i;
      if (((Bi.lastIndex = 0), Bi.test(t)))
        return (
          (i = Hf.test(t)),
          (e[1] = Dl(e[1], i)),
          (e[0] = Dl(e[0], i, wl(e[1]))),
          !0
        );
    },
    ms,
    Bt = (function () {
      var s = Date.now,
        e = 500,
        t = 33,
        i = s(),
        r = i,
        n = 1e3 / 240,
        a = n,
        o = [],
        l,
        u,
        c,
        h,
        m,
        p,
        f = function d(g) {
          var _ = s() - r,
            y = g === !0,
            v,
            w,
            D,
            x;
          if (
            ((_ > e || _ < 0) && (i += _ - t),
            (r += _),
            (D = r - i),
            (v = D - a),
            (v > 0 || y) &&
              ((x = ++h.frame),
              (m = D - h.time * 1e3),
              (h.time = D = D / 1e3),
              (a += v + (v >= n ? 4 : n - v)),
              (w = 1)),
            y || (l = u(d)),
            w)
          )
            for (p = 0; p < o.length; p++) o[p](D, m, x, g);
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
            Go &&
              (!ca &&
                oa() &&
                ((ci = ca = window),
                (da = ci.document || {}),
                (It.gsap = Mt),
                (ci.gsapVersions || (ci.gsapVersions = [])).push(Mt.version),
                jo(en || ci.GreenSockGlobals || (!ci.gsap && ci) || {}),
                vl.forEach(yl)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && h.sleep(),
              (u =
                c ||
                function (g) {
                  return setTimeout(g, (a - h.time * 1e3 + 1) | 0);
                }),
              (ms = 1),
              f(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (ms = 0), (u = ls);
          },
          lagSmoothing: function (g, _) {
            (e = g || 1 / 0), (t = Math.min(_ || 33, e));
          },
          fps: function (g) {
            (n = 1e3 / (g || 240)), (a = h.time * 1e3 + n);
          },
          add: function (g, _, y) {
            var v = _
              ? function (w, D, x, b) {
                  g(w, D, x, b), h.remove(v);
                }
              : g;
            return h.remove(g), o[y ? "unshift" : "push"](v), zr(), v;
          },
          remove: function (g, _) {
            ~(_ = o.indexOf(g)) && o.splice(_, 1) && p >= _ && p--;
          },
          _listeners: o,
        }),
        h
      );
    })(),
    zr = function () {
      return !ms && Bt.wake();
    },
    le = {},
    Wf = /^[\d.\-M][\d.\-,\s]/,
    Yf = /["']/g,
    Xf = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          n = 1,
          a = i.length,
          o,
          l,
          u;
        n < a;
        n++
      )
        (l = i[n]),
          (o = n !== a - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, o)),
          (t[r] = isNaN(u) ? u.replace(Yf, "").trim() : +u),
          (r = l.substr(o + 1).trim());
      return t;
    },
    Gf = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    jf = function (e) {
      var t = (e + "").split("("),
        i = le[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Xf(t[1])] : Gf(e).split(",").map(el)
          )
        : le._CE && Wf.test(e)
        ? le._CE("", e)
        : i;
    },
    Sl = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    El = function s(e, t) {
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
      return (e && (Pe(e) ? e : le[e] || jf(e))) || t;
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
        Tt(e, function (o) {
          (le[o] = It[o] = n), (le[(a = o.toLowerCase())] = i);
          for (var l in n)
            le[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = le[o + "." + l] = n[l];
        }),
        n
      );
    },
    xl = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Ea = function s(e, t, i) {
      var r = t >= 1 ? t : 1,
        n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (n / na) * (Math.asin(1 / r) || 0),
        o = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * bf((c - a) * n) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (u) {
                return 1 - o(1 - u);
              }
            : xl(o);
      return (
        (n = na / n),
        (l.config = function (u, c) {
          return s(e, u, c);
        }),
        l
      );
    },
    xa = function s(e, t) {
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
            : xl(i);
      return (
        (r.config = function (n) {
          return s(e, n);
        }),
        r
      );
    };
  Tt("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
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
    (le.Linear.easeNone = le.none = le.Linear.easeIn),
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
      return -(Vo(1 - s * s) - 1);
    }),
    rr("Sine", function (s) {
      return s === 1 ? 1 : -Df(s * _f) + 1;
    }),
    rr("Back", xa("in"), xa("out"), xa()),
    (le.SteppedEase =
      le.steps =
      It.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              n = t ? 1 : 0,
              a = 1 - he;
            return function (o) {
              return (((r * ds(0, a, o)) | 0) + n) * i;
            };
          },
        }),
    (Pr.ease = le["quad.out"]),
    Tt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (ga += s + "," + s + "Params,");
      }
    );
  var Tl = function (e, t) {
      (this.id = wf++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Qo),
        (this.set = t ? t.getSetter : Aa);
    },
    gs = (function () {
      function s(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          kr(this, +t.duration, 1, 1),
          (this.data = t.data),
          be && ((this._ctx = be), be.data.push(this)),
          ms || Bt.wake();
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
              kr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((zr(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              un(this, i), !n._dp || n.parent || nl(n, this);
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
              di(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === he) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), Jo(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + sl(this)) %
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
                  sl(this),
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
            ? Lr(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -he ? 0 : this._rts;
          if (this._rts === i) return this;
          var n =
            this.parent && this._ts ? on(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -he ? 0 : this._rts),
            this.totalTime(ds(-Math.abs(this._delay), this._tDur, n), r !== !1),
            ln(this),
            Pf(this)
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
                  : (zr(),
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
              r && (r._sort || !this.parent) && di(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (xt(i) ? this.totalDuration() : this.duration()) /
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
          i === void 0 && (i = xf);
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
            ? ((this._repeat = i === 1 / 0 ? -2 : i), ll(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), ll(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Ut(this, i), xt(r));
        }),
        (e.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, xt(r)),
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
            var a = Pe(i) ? i : tl,
              o = function () {
                var u = r.then;
                (r.then = null),
                  Pe(a) && (a = a(r)) && (a.then || a === r) && (r.then = u),
                  n(a),
                  (r.then = u);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? o()
              : (r._prom = o);
          });
        }),
        (e.kill = function () {
          ps(this);
        }),
        s
      );
    })();
  Rt(gs.prototype, {
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
  var gt = (function (s) {
    qo(e, s);
    function e(i, r) {
      var n;
      return (
        i === void 0 && (i = {}),
        (n = s.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = xt(i.sortChildren)),
        Te && di(i.parent || Te, Ei(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && al(Ei(n), i.scrollTrigger),
        n
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, n, a) {
        return cs(0, arguments, this), this;
      }),
      (t.from = function (r, n, a) {
        return cs(1, arguments, this), this;
      }),
      (t.fromTo = function (r, n, a, o) {
        return cs(2, arguments, this), this;
      }),
      (t.set = function (r, n, a) {
        return (
          (n.duration = 0),
          (n.parent = this),
          us(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new Re(r, n, Ut(this, a), 1),
          this
        );
      }),
      (t.call = function (r, n, a) {
        return di(this, Re.delayedCall(0, r, n), a);
      }),
      (t.staggerTo = function (r, n, a, o, l, u, c) {
        return (
          (a.duration = n),
          (a.stagger = a.stagger || o),
          (a.onComplete = u),
          (a.onCompleteParams = c),
          (a.parent = this),
          new Re(r, a, Ut(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, n, a, o, l, u, c) {
        return (
          (a.runBackwards = 1),
          (us(a).immediateRender = xt(a.immediateRender)),
          this.staggerTo(r, n, a, o, l, u, c)
        );
      }),
      (t.staggerFromTo = function (r, n, a, o, l, u, c, h) {
        return (
          (o.startAt = a),
          (us(o).immediateRender = xt(o.immediateRender)),
          this.staggerTo(r, n, o, l, u, c, h)
        );
      }),
      (t.render = function (r, n, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = r <= 0 ? 0 : ze(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !u),
          m,
          p,
          f,
          d,
          g,
          _,
          y,
          v,
          w,
          D,
          x,
          b;
        if (
          (this !== Te && c > l && r >= 0 && (c = l),
          c !== this._tTime || a || h)
        ) {
          if (
            (o !== this._time &&
              u &&
              ((c += this._time - o), (r += this._time - o)),
            (m = c),
            (w = this._start),
            (v = this._ts),
            (_ = !v),
            h && (u || (o = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((x = this._yoyo),
              (g = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, n, a);
            if (
              ((m = ze(c % g)),
              c === l
                ? ((d = this._repeat), (m = u))
                : ((D = ze(c / g)),
                  (d = ~~D),
                  d && d === D && ((m = u), d--),
                  m > u && (m = u)),
              (D = Lr(this._tTime, g)),
              !o &&
                this._tTime &&
                D !== d &&
                this._tTime - D * g - this._dur <= 0 &&
                (D = d),
              x && d & 1 && ((m = u - m), (b = 1)),
              d !== D && !this._lock)
            ) {
              var T = x && D & 1,
                E = T === (x && d & 1);
              if (
                (d < D && (T = !T),
                (o = T ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(o || (b ? 0 : ze(d * g)), n, !u)._lock = 0),
                (this._tTime = c),
                !n && this.parent && $t(this, "onRepeat"),
                this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  _ !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                E &&
                  ((this._lock = 2),
                  (o = T ? u : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !b && this.invalidate()),
                (this._lock = 0),
                !this._ts && !_)
              )
                return this;
              El(this, b);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((y = Lf(this, ze(o), ze(m))), y && (c -= m - (m = y._start))),
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
                    a || (Je && (p._initted || p._startAt))
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
            return (this._start = w), ln(this), this.render(r, n, a);
          this._onUpdate && !n && $t(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && o)) &&
              (w === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  Ri(this, 1),
                !n &&
                  !(r < 0 && !o) &&
                  (c || o || !l) &&
                  ($t(
                    this,
                    c === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, n) {
        var a = this;
        if ((xi(n) || (n = Ut(this, n, r)), !(r instanceof gs))) {
          if (st(r))
            return (
              r.forEach(function (o) {
                return a.add(o, n);
              }),
              this
            );
          if (Xe(r)) return this.addLabel(r, n);
          if (Pe(r)) r = Re.delayedCall(0, r);
          else return this;
        }
        return this !== r ? di(this, r, n) : this;
      }),
      (t.getChildren = function (r, n, a, o) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -jt);
        for (var l = [], u = this._first; u; )
          u._start >= o &&
            (u instanceof Re
              ? n && l.push(u)
              : (a && l.push(u),
                r && l.push.apply(l, u.getChildren(!0, n, a)))),
            (u = u._next);
        return l;
      }),
      (t.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
          if (n[a].vars.id === r) return n[a];
      }),
      (t.remove = function (r) {
        return Xe(r)
          ? this.removeLabel(r)
          : Pe(r)
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
              (this._start = ze(
                Bt.time -
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
        var o = Re.delayedCall(0, n || ls, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), di(this, o, Ut(this, r))
        );
      }),
      (t.removePause = function (r) {
        var n = this._first;
        for (r = Ut(this, r); n; )
          n._start === r && n.data === "isPause" && Ri(n), (n = n._next);
      }),
      (t.killTweensOf = function (r, n, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          Ni !== o[l] && o[l].kill(r, n);
        return this;
      }),
      (t.getTweensOf = function (r, n) {
        for (var a = [], o = Kt(r), l = this._first, u = xi(n), c; l; )
          l instanceof Re
            ? Tf(l._targets, o) &&
              (u
                ? (!Ni || (l._initted && l._ts)) &&
                  l.globalTime(0) <= n &&
                  l.globalTime(l.totalDuration()) > n
                : !n || l.isActive()) &&
              a.push(l)
            : (c = l.getTweensOf(o, n)).length && a.push.apply(a, c),
            (l = l._next);
        return a;
      }),
      (t.tweenTo = function (r, n) {
        n = n || {};
        var a = this,
          o = Ut(a, r),
          l = n,
          u = l.startAt,
          c = l.onStart,
          h = l.onStartParams,
          m = l.immediateRender,
          p,
          f = Re.to(
            a,
            Rt(
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
                  he,
                onStart: function () {
                  if ((a.pause(), !p)) {
                    var g =
                      n.duration ||
                      Math.abs(
                        (o - (u && "time" in u ? u.time : a._time)) /
                          a.timeScale()
                      );
                    f._dur !== g && kr(f, g, 0, 1).render(f._time, !0, !0),
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
        return this.tweenTo(n, Rt({ startAt: { time: Ut(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), gl(this, Ut(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), gl(this, Ut(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + he);
      }),
      (t.shiftChildren = function (r, n, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, u; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (n) for (u in l) l[u] >= a && (l[u] += r);
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
          u,
          c,
          h;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -r : r)
          );
        if (a._dirty) {
          for (h = a.parent; o; )
            (u = o._prev),
              o._dirty && o.totalDuration(),
              (c = o._start),
              c > l && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (di(a, o, c - o._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                o._ts &&
                ((n -= c),
                ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                  ((a._start += c / a._ts), (a._time -= c), (a._tTime -= c)),
                a.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = u);
          kr(a, a === Te && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Te._ts && (Jo(Te, on(r, Te)), (Ko = Bt.frame)), Bt.frame >= Zo)) {
          Zo += kt.autoSleep || 120;
          var n = Te._first;
          if ((!n || !n._ts) && kt.autoSleep && Bt._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || Bt.sleep();
          }
        }
      }),
      e
    );
  })(gs);
  Rt(gt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Uf = function (e, t, i, r, n, a, o) {
      var l = new Ct(this._pt, e, t, 0, 1, Ol, null, n),
        u = 0,
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
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (_ = ~r.indexOf("random(")) && (r = fs(r)),
          a && ((y = [i, r]), a(y, e, t), (i = y[0]), (r = y[1])),
          m = i.match(ua) || [];
        (h = ua.exec(r));

      )
        (f = h[0]),
          (d = r.substring(u, h.index)),
          p ? (p = (p + 1) % 5) : d.substr(-5) === "rgba(" && (p = 1),
          f !== m[c++] &&
            ((g = parseFloat(m[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: d || c === 1 ? d : ",",
              s: g,
              c: f.charAt(1) === "=" ? Fr(g, f) - g : parseFloat(f) - g,
              m: p && p < 4 ? Math.round : 0,
            }),
            (u = ua.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = o),
        (Yo.test(r) || _) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Ta = function (e, t, i, r, n, a, o, l, u, c) {
      Pe(r) && (r = r(n || 0, e, a));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : Pe(h)
            ? u
              ? e[
                  t.indexOf("set") || !Pe(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](u)
              : e[t]()
            : h,
        p = Pe(h) ? (u ? ep : Al) : Pa,
        f;
      if (
        (Xe(r) &&
          (~r.indexOf("random(") && (r = fs(r)),
          r.charAt(1) === "=" &&
            ((f = Fr(m, r) + (nt(m) || 0)), (f || f === 0) && (r = f))),
        !c || m !== r || Ca)
      )
        return !isNaN(m * r) && r !== ""
          ? ((f = new Ct(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? ip : Fl,
              0,
              p
            )),
            u && (f.fp = u),
            o && f.modifier(o, this, e),
            (this._pt = f))
          : (!h && !(t in e) && fa(t, r),
            Uf.call(this, e, t, m, r, p, l || kt.stringFilter, u));
    },
    Kf = function (e, t, i, r, n) {
      if (
        (Pe(e) && (e = vs(e, n, t, i, r)),
        !ui(e) || (e.style && e.nodeType) || st(e) || Ho(e))
      )
        return Xe(e) ? vs(e, n, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = vs(e[o], n, t, i, r);
      return a;
    },
    Cl = function (e, t, i, r, n, a) {
      var o, l, u, c;
      if (
        zt[e] &&
        (o = new zt[e]()).init(
          n,
          o.rawVars ? t[e] : Kf(t[e], r, n, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = l = new Ct(i._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
        i !== Ir)
      )
        for (u = i._ptLookup[i._targets.indexOf(n)], c = o._props.length; c--; )
          u[o._props[c]] = l;
      return o;
    },
    Ni,
    Ca,
    Ma = function s(e, t, i) {
      var r = e.vars,
        n = r.ease,
        a = r.startAt,
        o = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        c = r.runBackwards,
        h = r.yoyoEase,
        m = r.keyframes,
        p = r.autoRevert,
        f = e._dur,
        d = e._startAt,
        g = e._targets,
        _ = e.parent,
        y = _ && _.data === "nested" ? _.vars.targets : g,
        v = e._overwrite === "auto" && !sa,
        w = e.timeline,
        D,
        x,
        b,
        T,
        E,
        S,
        L,
        P,
        k,
        F,
        R,
        I,
        M;
      if (
        (w && (!m || !n) && (n = "none"),
        (e._ease = ir(n, Pr.ease)),
        (e._yEase = h ? Sl(ir(h === !0 ? n : h, Pr.ease)) : 0),
        h &&
          e._yoyo &&
          !e._repeat &&
          ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
        (e._from = !w && !!r.runBackwards),
        !w || (m && !r.stagger))
      ) {
        if (
          ((P = g[0] ? er(g[0]).harness : 0),
          (I = P && r[P.prop]),
          (D = nn(r, pa)),
          d &&
            (d._zTime < 0 && d.progress(1),
            t < 0 && c && o && !p
              ? d.render(-1, !0)
              : d.revert(c && f ? tn : Ef),
            (d._lazy = 0)),
          a)
        ) {
          if (
            (Ri(
              (e._startAt = Re.set(
                g,
                Rt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: _,
                    immediateRender: !0,
                    lazy: !d && xt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
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
            t < 0 && (Je || (!o && !p)) && e._startAt.revert(tn),
            o && f && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && f && !d) {
          if (
            (t && (o = !1),
            (b = Rt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !d && xt(l),
                immediateRender: o,
                stagger: 0,
                parent: _,
              },
              D
            )),
            I && (b[P.prop] = I),
            Ri((e._startAt = Re.set(g, b))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Je ? e._startAt.revert(tn) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            s(e._startAt, he, he);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (f && xt(l)) || (l && !f), x = 0;
          x < g.length;
          x++
        ) {
          if (
            ((E = g[x]),
            (L = E._gsap || va(g)[x]._gsap),
            (e._ptLookup[x] = F = {}),
            ha[L.id] && zi.length && sn(),
            (R = y === g ? x : y.indexOf(E)),
            P &&
              (k = new P()).init(E, I || D, e, R, y) !== !1 &&
              ((e._pt = T =
                new Ct(e._pt, E, k.name, 0, 1, k.render, k, 0, k.priority)),
              k._props.forEach(function (O) {
                F[O] = T;
              }),
              k.priority && (S = 1)),
            !P || I)
          )
            for (b in D)
              zt[b] && (k = Cl(b, D, e, R, E, y))
                ? k.priority && (S = 1)
                : (F[b] = T =
                    Ta.call(e, E, b, "get", D[b], R, y, 0, r.stringFilter));
          e._op && e._op[x] && e.kill(E, e._op[x]),
            v &&
              e._pt &&
              ((Ni = e),
              Te.killTweensOf(E, F, e.globalTime(t)),
              (M = !e.parent),
              (Ni = 0)),
            e._pt && l && (ha[L.id] = 1);
        }
        S && Ll(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !M),
        m && t <= 0 && w.render(jt, !0, !0);
    },
    Zf = function (e, t, i, r, n, a, o, l) {
      var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        c,
        h,
        m,
        p;
      if (!u)
        for (
          u = e._ptCache[t] = [], m = e._ptLookup, p = e._targets.length;
          p--;

        ) {
          if (((c = m[p][t]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
          if (!c)
            return (
              (Ca = 1),
              (e.vars[t] = "+=0"),
              Ma(e, o),
              (Ca = 0),
              l ? os(t + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (p = u.length; p--; )
        (h = u[p]),
          (c = h._pt || h),
          (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + a * c.c),
          (c.c = i - c.s),
          h.e && (h.e = Oe(i) + nt(h.e)),
          h.b && (h.b = c.s + nt(h.b));
    },
    Qf = function (e, t) {
      var i = e[0] ? er(e[0]).harness : 0,
        r = i && i.aliases,
        n,
        a,
        o,
        l;
      if (!r) return t;
      n = Or({}, t);
      for (a in r)
        if (a in n)
          for (l = r[a].split(","), o = l.length; o--; ) n[l[o]] = n[a];
      return n;
    },
    Jf = function (e, t, i, r) {
      var n = t.ease || r || "power1.inOut",
        a,
        o;
      if (st(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (l, u) {
            return o.push({ t: (u / (t.length - 1)) * 100, v: l, e: n });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: n });
    },
    vs = function (e, t, i, r, n) {
      return Pe(e)
        ? e.call(t, i, r, n)
        : Xe(e) && ~e.indexOf("random(")
        ? fs(e)
        : e;
    },
    Ml = ga + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Pl = {};
  Tt(Ml + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (Pl[s] = 1);
  });
  var Re = (function (s) {
    qo(e, s);
    function e(i, r, n, a) {
      var o;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (o = s.call(this, a ? r : us(r)) || this);
      var l = o.vars,
        u = l.duration,
        c = l.delay,
        h = l.immediateRender,
        m = l.stagger,
        p = l.overwrite,
        f = l.keyframes,
        d = l.defaults,
        g = l.scrollTrigger,
        _ = l.yoyoEase,
        y = r.parent || Te,
        v = (st(i) || Ho(i) ? xi(i[0]) : "length" in r) ? [i] : Kt(i),
        w,
        D,
        x,
        b,
        T,
        E,
        S,
        L;
      if (
        ((o._targets = v.length
          ? va(v)
          : os(
              "GSAP target " + i + " not found. https://gsap.com",
              !kt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        f || m || Js(u) || Js(c))
      ) {
        if (
          ((r = o.vars),
          (w = o.timeline =
            new gt({
              data: "nested",
              defaults: d || {},
              targets: y && y.data === "nested" ? y.vars.targets : v,
            })),
          w.kill(),
          (w.parent = w._dp = Ei(o)),
          (w._start = 0),
          m || Js(u) || Js(c))
        ) {
          if (((b = v.length), (S = m && dl(m)), ui(m)))
            for (T in m) ~Ml.indexOf(T) && (L || (L = {}), (L[T] = m[T]));
          for (D = 0; D < b; D++)
            (x = nn(r, Pl)),
              (x.stagger = 0),
              _ && (x.yoyoEase = _),
              L && Or(x, L),
              (E = v[D]),
              (x.duration = +vs(u, Ei(o), D, E, v)),
              (x.delay = (+vs(c, Ei(o), D, E, v) || 0) - o._delay),
              !m &&
                b === 1 &&
                x.delay &&
                ((o._delay = c = x.delay), (o._start += c), (x.delay = 0)),
              w.to(E, x, S ? S(D, E, v) : 0),
              (w._ease = le.none);
          w.duration() ? (u = c = 0) : (o.timeline = 0);
        } else if (f) {
          us(Rt(w.vars.defaults, { ease: "none" })),
            (w._ease = ir(f.ease || r.ease || "none"));
          var P = 0,
            k,
            F,
            R;
          if (st(f))
            f.forEach(function (I) {
              return w.to(v, I, ">");
            }),
              w.duration();
          else {
            x = {};
            for (T in f)
              T === "ease" || T === "easeEach" || Jf(T, f[T], x, f.easeEach);
            for (T in x)
              for (
                k = x[T].sort(function (I, M) {
                  return I.t - M.t;
                }),
                  P = 0,
                  D = 0;
                D < k.length;
                D++
              )
                (F = k[D]),
                  (R = {
                    ease: F.e,
                    duration: ((F.t - (D ? k[D - 1].t : 0)) / 100) * u,
                  }),
                  (R[T] = F.v),
                  w.to(v, R, P),
                  (P += R.duration);
            w.duration() < u && w.to({}, { duration: u - w.duration() });
          }
        }
        u || o.duration((u = w.duration()));
      } else o.timeline = 0;
      return (
        p === !0 && !sa && ((Ni = Ei(o)), Te.killTweensOf(v), (Ni = 0)),
        di(y, Ei(o), n),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (h ||
          (!u &&
            !f &&
            o._start === ze(y._time) &&
            xt(h) &&
            Af(Ei(o)) &&
            y.data !== "nested")) &&
          ((o._tTime = -he), o.render(Math.max(0, -c) || 0)),
        g && al(Ei(o), g),
        o
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, n, a) {
        var o = this._time,
          l = this._tDur,
          u = this._dur,
          c = r < 0,
          h = r > l - he && !c ? l : r < he ? 0 : r,
          m,
          p,
          f,
          d,
          g,
          _,
          y,
          v,
          w;
        if (!u) Of(this, r, n, a);
        else if (
          h !== this._tTime ||
          !r ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((m = h), (v = this.timeline), this._repeat)) {
            if (((d = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(d * 100 + r, n, a);
            if (
              ((m = ze(h % d)),
              h === l
                ? ((f = this._repeat), (m = u))
                : ((g = ze(h / d)),
                  (f = ~~g),
                  f && f === g ? ((m = u), f--) : m > u && (m = u)),
              (_ = this._yoyo && f & 1),
              _ && ((w = this._yEase), (m = u - m)),
              (g = Lr(this._tTime, d)),
              m === o && !a && this._initted && f === g)
            )
              return (this._tTime = h), this;
            f !== g &&
              (v && this._yEase && El(v, _),
              this.vars.repeatRefresh &&
                !_ &&
                !this._lock &&
                m !== d &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(ze(d * f), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (ol(this, c ? r : m, a, n, h)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && f !== g))
              return this;
            if (u !== this._dur) return this.render(r, n, a);
          }
          if (
            ((this._tTime = h),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = y = (w || this._ease)(m / u)),
            this._from && (this.ratio = y = 1 - y),
            m && !o && !n && !f && ($t(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(y, p.d), (p = p._next);
          (v && v.render(r < 0 ? r : v._dur * v._ease(m / this._dur), n, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (c && ya(this, r, n, a), $t(this, "onUpdate")),
            this._repeat &&
              f !== g &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              $t(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (c && !this._onUpdate && ya(this, r, !0, !0),
              (r || !u) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                Ri(this, 1),
              !n &&
                !(c && !o) &&
                (h || o || _) &&
                ($t(this, h === l ? "onComplete" : "onReverseComplete", !0),
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
        ms || Bt.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Ma(this, u),
          (c = this._ease(u / this._dur)),
          Zf(this, r, n, a, o, c, u, l)
            ? this.resetTo(r, n, a, o, 1)
            : (un(this, 0),
              this.parent ||
                rl(
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
              ? ps(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Je),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, Ni && Ni.vars.overwrite !== !0)
              ._first || ps(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              kr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? Kt(r) : o,
          u = this._ptLookup,
          c = this._pt,
          h,
          m,
          p,
          f,
          d,
          g,
          _;
        if ((!n || n === "all") && Mf(o, l))
          return n === "all" && (this._pt = 0), ps(this);
        for (
          h = this._op = this._op || [],
            n !== "all" &&
              (Xe(n) &&
                ((d = {}),
                Tt(n, function (y) {
                  return (d[y] = 1);
                }),
                (n = d)),
              (n = Qf(o, n))),
            _ = o.length;
          _--;

        )
          if (~l.indexOf(o[_])) {
            (m = u[_]),
              n === "all"
                ? ((h[_] = n), (f = m), (p = {}))
                : ((p = h[_] = h[_] || {}), (f = n));
            for (d in f)
              (g = m && m[d]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(d) === !0) &&
                    an(this, g, "_pt"),
                  delete m[d]),
                p !== "all" && (p[d] = 1);
          }
        return this._initted && !this._pt && c && ps(this), this;
      }),
      (e.to = function (r, n) {
        return new e(r, n, arguments[2]);
      }),
      (e.from = function (r, n) {
        return cs(1, arguments);
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
        return cs(2, arguments);
      }),
      (e.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
      }),
      (e.killTweensOf = function (r, n, a) {
        return Te.killTweensOf(r, n, a);
      }),
      e
    );
  })(gs);
  Rt(Re.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Tt("staggerTo,staggerFrom,staggerFromTo", function (s) {
      Re[s] = function () {
        var e = new gt(),
          t = wa.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
      };
    });
  var Pa = function (e, t, i) {
      return (e[t] = i);
    },
    Al = function (e, t, i) {
      return e[t](i);
    },
    ep = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    tp = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    Aa = function (e, t) {
      return Pe(e[t]) ? Al : aa(e[t]) && e.setAttribute ? tp : Pa;
    },
    Fl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    ip = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Ol = function (e, t) {
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
    Fa = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    rp = function (e, t, i, r) {
      for (var n = this._pt, a; n; )
        (a = n._next), n.p === r && n.modifier(e, t, i), (n = a);
    },
    sp = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? an(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    np = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    Ll = function (e) {
      for (var t = e._pt, i, r, n, a; t; ) {
        for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (n = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = n;
    },
    Ct = (function () {
      function s(t, i, r, n, a, o, l, u, c) {
        (this.t = i),
          (this.s = n),
          (this.c = a),
          (this.p = r),
          (this.r = o || Fl),
          (this.d = l || this),
          (this.set = u || Pa),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = s.prototype;
      return (
        (e.modifier = function (i, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = np),
            (this.m = i),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  Tt(
    ga +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (pa[s] = 1);
    }
  ),
    (It.TweenMax = It.TweenLite = Re),
    (It.TimelineLite = It.TimelineMax = gt),
    (Te = new gt({
      sortChildren: !1,
      defaults: Pr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (kt.stringFilter = bl);
  var sr = [],
    cn = {},
    ap = [],
    kl = 0,
    op = 0,
    Oa = function (e) {
      return (cn[e] || ap).map(function (t) {
        return t();
      });
    },
    La = function () {
      var e = Date.now(),
        t = [];
      e - kl > 2 &&
        (Oa("matchMediaInit"),
        sr.forEach(function (i) {
          var r = i.queries,
            n = i.conditions,
            a,
            o,
            l,
            u;
          for (o in r)
            (a = ci.matchMedia(r[o]).matches),
              a && (l = 1),
              a !== n[o] && ((n[o] = a), (u = 1));
          u && (i.revert(), l && t.push(i));
        }),
        Oa("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (kl = e),
        Oa("matchMedia"));
    },
    Il = (function () {
      function s(t, i) {
        (this.selector = i && Da(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = op++),
          t && this.add(t);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          Pe(i) && ((n = r), (r = i), (i = Pe));
          var a = this,
            o = function () {
              var u = be,
                c = a.selector,
                h;
              return (
                u && u !== a && u.data.push(a),
                n && (a.selector = Da(n)),
                (be = a),
                (h = r.apply(a, arguments)),
                Pe(h) && a._r.push(h),
                (be = u),
                (a.selector = c),
                (a.isReverted = !1),
                h
              );
            };
          return (
            (a.last = o),
            i === Pe
              ? o(a, function (l) {
                  return a.add(null, l);
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
                  for (var o = n.getTweens(), l = n.data.length, u; l--; )
                    (u = n.data[l]),
                      u.data === "isFlip" &&
                        (u.revert(),
                        u.getChildren(!0, !0, !1).forEach(function (c) {
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
                      l = n.data.length;
                    l--;

                  )
                    (u = n.data[l]),
                      u instanceof gt
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Re) && u.revert && u.revert(i);
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
            for (var a = sr.length; a--; )
              sr[a].id === this.id && sr.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        s
      );
    })(),
    lp = (function () {
      function s(t) {
        (this.contexts = []), (this.scope = t), be && be.data.push(this);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          ui(i) || (i = { matches: i });
          var a = new Il(0, n || this.scope),
            o = (a.conditions = {}),
            l,
            u,
            c;
          be && !a.selector && (a.selector = be.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = i);
          for (u in i)
            u === "all"
              ? (c = 1)
              : ((l = ci.matchMedia(i[u])),
                l &&
                  (sr.indexOf(a) < 0 && sr.push(a),
                  (o[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(La)
                    : l.addEventListener("change", La)));
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
    dn = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return yl(r);
        });
      },
      timeline: function (e) {
        return new gt(e);
      },
      getTweensOf: function (e, t) {
        return Te.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Xe(e) && (e = Kt(e)[0]);
        var n = er(e || {}).get,
          a = i ? tl : el;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a(((zt[t] && zt[t].get) || n)(e, t, i, r))
              : function (o, l, u) {
                  return a(((zt[o] && zt[o].get) || n)(e, o, l, u));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Kt(e)), e.length > 1)) {
          var r = e.map(function (c) {
              return Mt.quickSetter(c, t, i);
            }),
            n = r.length;
          return function (c) {
            for (var h = n; h--; ) r[h](c);
          };
        }
        e = e[0] || {};
        var a = zt[t],
          o = er(e),
          l = (o.harness && (o.harness.aliases || {})[t]) || t,
          u = a
            ? function (c) {
                var h = new a();
                (Ir._pt = 0),
                  h.init(e, i ? c + i : c, Ir, 0, [e]),
                  h.render(1, h),
                  Ir._pt && Fa(1, Ir);
              }
            : o.set(e, l);
        return a
          ? u
          : function (c) {
              return u(e, l, i ? c + i : c, o, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          n = Mt.to(
            e,
            Rt(
              ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          a = function (l, u, c) {
            return n.resetTo(t, l, u, c);
          };
        return (a.tween = n), a;
      },
      isTweening: function (e) {
        return Te.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = ir(e.ease, Pr.ease)), il(Pr, e || {});
      },
      config: function (e) {
        return il(kt, e || {});
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
            !zt[o] &&
            !It[o] &&
            os(t + " effect requires " + o + " plugin.")
          );
        }),
          (ma[t] = function (o, l, u) {
            return i(Kt(o), Rt(l || {}, n), u);
          }),
          a &&
            (gt.prototype[t] = function (o, l, u) {
              return this.add(ma[t](o, ui(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (e, t) {
        le[e] = ir(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? ir(e, t) : le;
      },
      getById: function (e) {
        return Te.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new gt(e),
          r,
          n;
        for (
          i.smoothChildTiming = xt(e.smoothChildTiming),
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
              di(i, r, r._start - r._delay),
            (r = n);
        return di(Te, i, 0), i;
      },
      context: function (e, t) {
        return e ? new Il(e, t) : be;
      },
      matchMedia: function (e) {
        return new lp(e);
      },
      matchMediaRefresh: function () {
        return (
          sr.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || La()
        );
      },
      addEventListener: function (e, t) {
        var i = cn[e] || (cn[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = cn[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: Nf,
        wrapYoyo: qf,
        distribute: dl,
        random: pl,
        snap: fl,
        normalize: Bf,
        getUnit: nt,
        clamp: If,
        splitColor: _l,
        toArray: Kt,
        selector: Da,
        mapRange: ml,
        pipe: Rf,
        unitize: $f,
        interpolate: Vf,
        shuffle: cl,
      },
      install: jo,
      effects: ma,
      ticker: Bt,
      updateRoot: gt.updateRoot,
      plugins: zt,
      globalTimeline: Te,
      core: {
        PropTween: Ct,
        globals: Uo,
        Tween: Re,
        Timeline: gt,
        Animation: gs,
        getCache: er,
        _removeLinkedListItem: an,
        reverting: function () {
          return Je;
        },
        context: function (e) {
          return e && be && (be.data.push(e), (e._ctx = be)), be;
        },
        suppressOverwrites: function (e) {
          return (sa = e);
        },
      },
    };
  Tt("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (dn[s] = Re[s]);
  }),
    Bt.add(gt.updateRoot),
    (Ir = dn.to({}, { duration: 0 }));
  var up = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    cp = function (e, t) {
      var i = e._targets,
        r,
        n,
        a;
      for (r in t)
        for (n = i.length; n--; )
          (a = e._ptLookup[n][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = up(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[n], r));
    },
    ka = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, n, a) {
          a._onInit = function (o) {
            var l, u;
            if (
              (Xe(n) &&
                ((l = {}),
                Tt(n, function (c) {
                  return (l[c] = 1);
                }),
                (n = l)),
              t)
            ) {
              l = {};
              for (u in n) l[u] = t(n[u]);
              n = l;
            }
            cp(o, n);
          };
        },
      };
    },
    Mt =
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
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        ka("roundProps", ba),
        ka("modifiers"),
        ka("snap", fl)
      ) || dn;
  (Re.version = gt.version = Mt.version = "3.12.7"),
    (Go = 1),
    oa() && zr(),
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
   */ var zl,
    qi,
    Rr,
    Ia,
    nr,
    Rl,
    za,
    dp = function () {
      return typeof window != "undefined";
    },
    Ti = {},
    ar = 180 / Math.PI,
    $r = Math.PI / 180,
    Br = Math.atan2,
    $l = 1e8,
    Ra = /([A-Z])/g,
    fp = /(left|right|width|margin|padding|x)/i,
    pp = /[\s,\(]\S/,
    fi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    $a = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    hp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    mp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    gp = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Bl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Nl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    vp = function (e, t, i) {
      return (e.style[t] = i);
    },
    yp = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    _p = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    wp = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    Dp = function (e, t, i, r, n) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(n, a);
    },
    bp = function (e, t, i, r, n) {
      var a = e._gsap;
      (a[t] = i), a.renderTransform(n, a);
    },
    Ce = "transform",
    Pt = Ce + "Origin",
    Sp = function s(e, t) {
      var i = this,
        r = this.target,
        n = r.style,
        a = r._gsap;
      if (e in Ti && n) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = fi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = Ci(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : Ci(r, e)),
            e === Pt && (this.tfm.zOrigin = a.zOrigin);
        else
          return fi.transform.split(",").forEach(function (o) {
            return s.call(i, o, t);
          });
        if (this.props.indexOf(Ce) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Pt, t, "")),
          (e = Ce);
      }
      (n || t) && this.props.push(e, t, n[e]);
    },
    ql = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Ep = function () {
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
                : e[n].replace(Ra, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (n = za()),
          (!n || !n.isStart) &&
            !i[Ce] &&
            (ql(i),
            r.zOrigin &&
              i[Pt] &&
              ((i[Pt] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    Vl = function (e, t) {
      var i = { target: e, props: [], revert: Ep, save: Sp };
      return (
        e._gsap || Mt.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    Hl,
    Ba = function (e, t) {
      var i = qi.createElementNS
        ? qi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : qi.createElement(e);
      return i && i.style ? i : qi.createElement(e);
    },
    pi = function s(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(Ra, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && s(e, Nr(t) || t, 1)) ||
        ""
      );
    },
    Wl = "O,Moz,ms,Ms,Webkit".split(","),
    Nr = function (e, t, i) {
      var r = t || nr,
        n = r.style,
        a = 5;
      if (e in n && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(Wl[a] + e in n);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Wl[a] : "") + e;
    },
    Na = function () {
      dp() &&
        window.document &&
        ((zl = window),
        (qi = zl.document),
        (Rr = qi.documentElement),
        (nr = Ba("div") || { style: {} }),
        Ba("div"),
        (Ce = Nr(Ce)),
        (Pt = Ce + "Origin"),
        (nr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Hl = !!Nr("perspective")),
        (za = Mt.core.reverting),
        (Ia = 1));
    },
    Yl = function (e) {
      var t = e.ownerSVGElement,
        i = Ba(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        n;
      (r.style.display = "block"), i.appendChild(r), Rr.appendChild(i);
      try {
        n = r.getBBox();
      } catch (a) {}
      return i.removeChild(r), Rr.removeChild(i), n;
    },
    Xl = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    Gl = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch (r) {
        (t = Yl(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = Yl(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +Xl(e, ["x", "cx", "x1"]) || 0,
              y: +Xl(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    jl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Gl(e));
    },
    or = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in Ti && t !== Pt && (t = Ce),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(Ra, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Vi = function (e, t, i, r, n, a) {
      var o = new Ct(e._pt, t, i, 0, 1, a ? Nl : Bl);
      return (e._pt = o), (o.b = r), (o.e = n), e._props.push(i), o;
    },
    Ul = { deg: 1, rad: 1, turn: 1 },
    xp = { grid: 1, flex: 1 },
    Hi = function s(e, t, i, r) {
      var n = parseFloat(i) || 0,
        a = (i + "").trim().substr((n + "").length) || "px",
        o = nr.style,
        l = fp.test(t),
        u = e.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        f,
        d,
        g,
        _;
      if (r === a || !n || Ul[r] || Ul[a]) return n;
      if (
        (a !== "px" && !m && (n = s(e, t, i, "px")),
        (_ = e.getCTM && jl(e)),
        (p || a === "%") && (Ti[t] || ~t.indexOf("adius")))
      )
        return (
          (f = _ ? e.getBBox()[l ? "width" : "height"] : e[c]),
          Oe(p ? (n / f) * h : (n / 100) * f)
        );
      if (
        ((o[l ? "width" : "height"] = h + (m ? a : r)),
        (d =
          (r !== "rem" && ~t.indexOf("adius")) ||
          (r === "em" && e.appendChild && !u)
            ? e
            : e.parentNode),
        _ && (d = (e.ownerSVGElement || {}).parentNode),
        (!d || d === qi || !d.appendChild) && (d = qi.body),
        (g = d._gsap),
        g && p && g.width && l && g.time === Bt.time && !g.uncache)
      )
        return Oe((n / g.width) * h);
      if (p && (t === "height" || t === "width")) {
        var y = e.style[t];
        (e.style[t] = h + r), (f = e[c]), y ? (e.style[t] = y) : or(e, t);
      } else
        (p || a === "%") &&
          !xp[pi(d, "display")] &&
          (o.position = pi(e, "position")),
          d === e && (o.position = "static"),
          d.appendChild(nr),
          (f = nr[c]),
          d.removeChild(nr),
          (o.position = "absolute");
      return (
        l && p && ((g = er(d)), (g.time = Bt.time), (g.width = d[c])),
        Oe(m ? (f * n) / h : f && n ? (h / f) * n : 0)
      );
    },
    Ci = function (e, t, i, r) {
      var n;
      return (
        Ia || Na(),
        t in fi &&
          t !== "transform" &&
          ((t = fi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Ti[t] && t !== "transform"
          ? ((n = _s(e, r)),
            (n =
              t !== "transformOrigin"
                ? n[t]
                : n.svg
                ? n.origin
                : pn(pi(e, Pt)) + " " + n.zOrigin + "px"))
          : ((n = e.style[t]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (fn[t] && fn[t](e, t, i)) ||
                pi(e, t) ||
                Qo(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? Hi(e, t, n, i) + i : n
      );
    },
    Tp = function (e, t, i, r) {
      if (!i || i === "none") {
        var n = Nr(t, e, 1),
          a = n && pi(e, n, 1);
        a && a !== i
          ? ((t = n), (i = a))
          : t === "borderColor" && (i = pi(e, "borderTopColor"));
      }
      var o = new Ct(this._pt, e.style, t, 0, 1, Ol),
        l = 0,
        u = 0,
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
        w,
        D;
      if (
        ((o.b = i),
        (o.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((d = e.style[t]),
          (e.style[t] = r),
          (r = pi(e, t) || r),
          d ? (e.style[t] = d) : or(e, t)),
        (c = [i, r]),
        bl(c),
        (i = c[0]),
        (r = c[1]),
        (m = i.match(Ar) || []),
        (D = r.match(Ar) || []),
        D.length)
      ) {
        for (; (h = Ar.exec(r)); )
          (g = h[0]),
            (y = r.substring(l, h.index)),
            f
              ? (f = (f + 1) % 5)
              : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") &&
                (f = 1),
            g !== (d = m[u++] || "") &&
              ((p = parseFloat(d) || 0),
              (w = d.substr((p + "").length)),
              g.charAt(1) === "=" && (g = Fr(p, g) + w),
              (_ = parseFloat(g)),
              (v = g.substr((_ + "").length)),
              (l = Ar.lastIndex - v.length),
              v ||
                ((v = v || kt.units[t] || w),
                l === r.length && ((r += v), (o.e += v))),
              w !== v && (p = Hi(e, t, d, v) || 0),
              (o._pt = {
                _next: o._pt,
                p: y || u === 1 ? y : ",",
                s: p,
                c: _ - p,
                m: (f && f < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = t === "display" && r === "none" ? Nl : Bl;
      return Yo.test(r) && (o.e = 0), (this._pt = o), o;
    },
    Kl = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Cp = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = Kl[i] || i),
        (t[1] = Kl[r] || r),
        t.join(" ")
      );
    },
    Mp = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          n = t.u,
          a = i._gsap,
          o,
          l,
          u;
        if (n === "all" || n === !0) (r.cssText = ""), (l = 1);
        else
          for (n = n.split(","), u = n.length; --u > -1; )
            (o = n[u]),
              Ti[o] && ((l = 1), (o = o === "transformOrigin" ? Pt : Ce)),
              or(i, o);
        l &&
          (or(i, Ce),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            _s(i, 1),
            (a.uncache = 1),
            ql(r)));
      }
    },
    fn = {
      clearProps: function (e, t, i, r, n) {
        if (n.data !== "isFromStart") {
          var a = (e._pt = new Ct(e._pt, t, i, 0, 0, Mp));
          return (a.u = r), (a.pr = -10), (a.tween = n), e._props.push(i), 1;
        }
      },
    },
    ys = [1, 0, 0, 1, 0, 0],
    Zl = {},
    Ql = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    Jl = function (e) {
      var t = pi(e, Ce);
      return Ql(t) ? ys : t.substr(7).match(Wo).map(Oe);
    },
    qa = function (e, t) {
      var i = e._gsap || er(e),
        r = e.style,
        n = Jl(e),
        a,
        o,
        l,
        u;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? ys : n)
        : (n === ys &&
            !e.offsetParent &&
            e !== Rr &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((u = 1), (o = e.nextElementSibling), Rr.appendChild(e)),
            (n = Jl(e)),
            l ? (r.display = l) : or(e, "display"),
            u &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Rr.removeChild(e))),
          t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Va = function (e, t, i, r, n, a) {
      var o = e._gsap,
        l = n || qa(e, !0),
        u = o.xOrigin || 0,
        c = o.yOrigin || 0,
        h = o.xOffset || 0,
        m = o.yOffset || 0,
        p = l[0],
        f = l[1],
        d = l[2],
        g = l[3],
        _ = l[4],
        y = l[5],
        v = t.split(" "),
        w = parseFloat(v[0]) || 0,
        D = parseFloat(v[1]) || 0,
        x,
        b,
        T,
        E;
      i
        ? l !== ys &&
          (b = p * g - f * d) &&
          ((T = w * (g / b) + D * (-d / b) + (d * y - g * _) / b),
          (E = w * (-f / b) + D * (p / b) - (p * y - f * _) / b),
          (w = T),
          (D = E))
        : ((x = Gl(e)),
          (w = x.x + (~v[0].indexOf("%") ? (w / 100) * x.width : w)),
          (D =
            x.y + (~(v[1] || v[0]).indexOf("%") ? (D / 100) * x.height : D))),
        r || (r !== !1 && o.smooth)
          ? ((_ = w - u),
            (y = D - c),
            (o.xOffset = h + (_ * p + y * d) - _),
            (o.yOffset = m + (_ * f + y * g) - y))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = w),
        (o.yOrigin = D),
        (o.smooth = !!r),
        (o.origin = t),
        (o.originIsAbsolute = !!i),
        (e.style[Pt] = "0px 0px"),
        a &&
          (Vi(a, o, "xOrigin", u, w),
          Vi(a, o, "yOrigin", c, D),
          Vi(a, o, "xOffset", h, o.xOffset),
          Vi(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", w + " " + D);
    },
    _s = function (e, t) {
      var i = e._gsap || new Tl(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        n = i.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        u = pi(e, Pt) || "0",
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
        w,
        D,
        x,
        b,
        T,
        E,
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
        W,
        Q,
        we,
        se,
        $;
      return (
        (c = h = m = d = g = _ = y = v = w = 0),
        (p = f = 1),
        (i.svg = !!(e.getCTM && jl(e))),
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
        (b = qa(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((O = e.getBBox()),
              (u = i.xOrigin - O.x + "px " + (i.yOrigin - O.y) + "px"),
              (M = ""))
            : (M = !t && e.getAttribute("data-svg-origin")),
          Va(e, M || u, !!M || i.originIsAbsolute, i.smooth !== !1, b)),
        (D = i.xOrigin || 0),
        (x = i.yOrigin || 0),
        b !== ys &&
          ((L = b[0]),
          (P = b[1]),
          (k = b[2]),
          (F = b[3]),
          (c = R = b[4]),
          (h = I = b[5]),
          b.length === 6
            ? ((p = Math.sqrt(L * L + P * P)),
              (f = Math.sqrt(F * F + k * k)),
              (d = L || P ? Br(P, L) * ar : 0),
              (y = k || F ? Br(k, F) * ar + d : 0),
              y && (f *= Math.abs(Math.cos(y * $r))),
              i.svg && ((c -= D - (D * L + x * k)), (h -= x - (D * P + x * F))))
            : (($ = b[6]),
              (we = b[7]),
              (C = b[8]),
              (W = b[9]),
              (Q = b[10]),
              (se = b[11]),
              (c = b[12]),
              (h = b[13]),
              (m = b[14]),
              (T = Br($, Q)),
              (g = T * ar),
              T &&
                ((E = Math.cos(-T)),
                (S = Math.sin(-T)),
                (M = R * E + C * S),
                (O = I * E + W * S),
                (A = $ * E + Q * S),
                (C = R * -S + C * E),
                (W = I * -S + W * E),
                (Q = $ * -S + Q * E),
                (se = we * -S + se * E),
                (R = M),
                (I = O),
                ($ = A)),
              (T = Br(-k, Q)),
              (_ = T * ar),
              T &&
                ((E = Math.cos(-T)),
                (S = Math.sin(-T)),
                (M = L * E - C * S),
                (O = P * E - W * S),
                (A = k * E - Q * S),
                (se = F * S + se * E),
                (L = M),
                (P = O),
                (k = A)),
              (T = Br(P, L)),
              (d = T * ar),
              T &&
                ((E = Math.cos(T)),
                (S = Math.sin(T)),
                (M = L * E + P * S),
                (O = R * E + I * S),
                (P = P * E - L * S),
                (I = I * E - R * S),
                (L = M),
                (R = O)),
              g &&
                Math.abs(g) + Math.abs(d) > 359.9 &&
                ((g = d = 0), (_ = 180 - _)),
              (p = Oe(Math.sqrt(L * L + P * P + k * k))),
              (f = Oe(Math.sqrt(I * I + $ * $))),
              (T = Br(R, I)),
              (y = Math.abs(T) > 2e-4 ? T * ar : 0),
              (w = se ? 1 / (se < 0 ? -se : se) : 0)),
          i.svg &&
            ((M = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !Ql(pi(e, Ce))),
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
        (i.scaleX = Oe(p)),
        (i.scaleY = Oe(f)),
        (i.rotation = Oe(d) + o),
        (i.rotationX = Oe(g) + o),
        (i.rotationY = Oe(_) + o),
        (i.skewX = y + o),
        (i.skewY = v + o),
        (i.transformPerspective = w + a),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[Pt] = pn(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = kt.force3D),
        (i.renderTransform = i.svg ? Ap : Hl ? eu : Pp),
        (i.uncache = 0),
        i
      );
    },
    pn = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Ha = function (e, t, i) {
      var r = nt(t);
      return Oe(parseFloat(t) + parseFloat(Hi(e, "x", i + "px", r))) + r;
    },
    Pp = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        eu(e, t);
    },
    lr = "0deg",
    ws = "0px",
    ur = ") ",
    eu = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.z,
        u = i.rotation,
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
        w = "",
        D = (_ === "auto" && e && e !== 1) || _ === !0;
      if (v && (h !== lr || c !== lr)) {
        var x = parseFloat(c) * $r,
          b = Math.sin(x),
          T = Math.cos(x),
          E;
        (x = parseFloat(h) * $r),
          (E = Math.cos(x)),
          (a = Ha(y, a, b * E * -v)),
          (o = Ha(y, o, -Math.sin(x) * -v)),
          (l = Ha(y, l, T * E * -v + v));
      }
      g !== ws && (w += "perspective(" + g + ur),
        (r || n) && (w += "translate(" + r + "%, " + n + "%) "),
        (D || a !== ws || o !== ws || l !== ws) &&
          (w +=
            l !== ws || D
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + ur),
        u !== lr && (w += "rotate(" + u + ur),
        c !== lr && (w += "rotateY(" + c + ur),
        h !== lr && (w += "rotateX(" + h + ur),
        (m !== lr || p !== lr) && (w += "skew(" + m + ", " + p + ur),
        (f !== 1 || d !== 1) && (w += "scale(" + f + ", " + d + ur),
        (y.style[Ce] = w || "translate(0, 0)");
    },
    Ap = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.rotation,
        u = i.skewX,
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
        w = parseFloat(o),
        D,
        x,
        b,
        T,
        E;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= $r),
            (u *= $r),
            (D = Math.cos(l) * h),
            (x = Math.sin(l) * h),
            (b = Math.sin(l - u) * -m),
            (T = Math.cos(l - u) * m),
            u &&
              ((c *= $r),
              (E = Math.tan(u - c)),
              (E = Math.sqrt(1 + E * E)),
              (b *= E),
              (T *= E),
              c &&
                ((E = Math.tan(c)),
                (E = Math.sqrt(1 + E * E)),
                (D *= E),
                (x *= E))),
            (D = Oe(D)),
            (x = Oe(x)),
            (b = Oe(b)),
            (T = Oe(T)))
          : ((D = h), (T = m), (x = b = 0)),
        ((v && !~(a + "").indexOf("px")) || (w && !~(o + "").indexOf("px"))) &&
          ((v = Hi(p, "x", a, "px")), (w = Hi(p, "y", o, "px"))),
        (f || d || g || _) &&
          ((v = Oe(v + f - (f * D + d * b) + g)),
          (w = Oe(w + d - (f * x + d * T) + _))),
        (r || n) &&
          ((E = p.getBBox()),
          (v = Oe(v + (r / 100) * E.width)),
          (w = Oe(w + (n / 100) * E.height))),
        (E =
          "matrix(" +
          D +
          "," +
          x +
          "," +
          b +
          "," +
          T +
          "," +
          v +
          "," +
          w +
          ")"),
        p.setAttribute("transform", E),
        y && (p.style[Ce] = E);
    },
    Fp = function (e, t, i, r, n) {
      var a = 360,
        o = Xe(n),
        l = parseFloat(n) * (o && ~n.indexOf("rad") ? ar : 1),
        u = l - r,
        c = r + u + "deg",
        h,
        m;
      return (
        o &&
          ((h = n.split("_")[1]),
          h === "short" &&
            ((u %= a), u !== u % (a / 2) && (u += u < 0 ? a : -a)),
          h === "cw" && u < 0
            ? (u = ((u + a * $l) % a) - ~~(u / a) * a)
            : h === "ccw" && u > 0 && (u = ((u - a * $l) % a) - ~~(u / a) * a)),
        (e._pt = m = new Ct(e._pt, t, i, r, u, hp)),
        (m.e = c),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    tu = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Op = function (e, t, i) {
      var r = tu({}, i._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        a = i.style,
        o,
        l,
        u,
        c,
        h,
        m,
        p,
        f;
      r.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (a[Ce] = t),
          (o = _s(i, 1)),
          or(i, Ce),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[Ce]),
          (a[Ce] = t),
          (o = _s(i, 1)),
          (a[Ce] = u));
      for (l in Ti)
        (u = r[l]),
          (c = o[l]),
          u !== c &&
            n.indexOf(l) < 0 &&
            ((p = nt(u)),
            (f = nt(c)),
            (h = p !== f ? Hi(i, l, u, f) : parseFloat(u)),
            (m = parseFloat(c)),
            (e._pt = new Ct(e._pt, o, l, h, m - h, $a)),
            (e._pt.u = f || 0),
            e._props.push(l));
      tu(o, r);
    };
  Tt("padding,margin,Width,Radius", function (s, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      n = "Left",
      a = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (
        o
      ) {
        return e < 2 ? s + o : "border" + o + s;
      });
    fn[e > 1 ? "border" + s : s] = function (o, l, u, c, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = a.map(function (f) {
            return Ci(o, f, u);
          })),
          (p = m.join(" ")),
          p.split(m[0]).length === 5 ? m[0] : p
        );
      (m = (c + "").split(" ")),
        (p = {}),
        a.forEach(function (f, d) {
          return (p[f] = m[d] = m[d] || m[((d - 1) / 2) | 0]);
        }),
        o.init(l, p, h);
    };
  });
  var iu = {
    name: "css",
    register: Na,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, n) {
      var a = this._props,
        o = e.style,
        l = i.vars.startAt,
        u,
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
        w,
        D,
        x,
        b,
        T;
      Ia || Na(),
        (this.styles = this.styles || Vl(e)),
        (T = this.styles.props),
        (this.tween = i);
      for (d in t)
        if (
          d !== "autoRound" &&
          ((c = t[d]), !(zt[d] && Cl(d, t, i, r, e, n)))
        ) {
          if (
            ((p = typeof c),
            (f = fn[d]),
            p === "function" && ((c = c.call(i, r, e, n)), (p = typeof c)),
            p === "string" && ~c.indexOf("random(") && (c = fs(c)),
            f)
          )
            f(this, e, d, c, i) && (b = 1);
          else if (d.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
              (c += ""),
              (Bi.lastIndex = 0),
              Bi.test(u) || ((g = nt(u)), (_ = nt(c))),
              _ ? g !== _ && (u = Hi(e, d, u, _) + _) : g && (c += g),
              this.add(o, "setProperty", u, c, r, n, 0, 0, d),
              a.push(d),
              T.push(d, 0, o[d]);
          else if (p !== "undefined") {
            if (
              (l && d in l
                ? ((u =
                    typeof l[d] == "function" ? l[d].call(i, r, e, n) : l[d]),
                  Xe(u) && ~u.indexOf("random(") && (u = fs(u)),
                  nt(u + "") ||
                    u === "auto" ||
                    (u += kt.units[d] || nt(Ci(e, d)) || ""),
                  (u + "").charAt(1) === "=" && (u = Ci(e, d)))
                : (u = Ci(e, d)),
              (m = parseFloat(u)),
              (y = p === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              y && (c = c.substr(2)),
              (h = parseFloat(c)),
              d in fi &&
                (d === "autoAlpha" &&
                  (m === 1 && Ci(e, "visibility") === "hidden" && h && (m = 0),
                  T.push("visibility", 0, o.visibility),
                  Vi(
                    this,
                    o,
                    "visibility",
                    m ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                d !== "scale" &&
                  d !== "transform" &&
                  ((d = fi[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
              (v = d in Ti),
              v)
            ) {
              if (
                (this.styles.save(d),
                w ||
                  ((D = e._gsap),
                  (D.renderTransform && !t.parseTransform) ||
                    _s(e, t.parseTransform),
                  (x = t.smoothOrigin !== !1 && D.smooth),
                  (w = this._pt =
                    new Ct(this._pt, o, Ce, 0, 1, D.renderTransform, D, 0, -1)),
                  (w.dep = 1)),
                d === "scale")
              )
                (this._pt = new Ct(
                  this._pt,
                  D,
                  "scaleY",
                  D.scaleY,
                  (y ? Fr(D.scaleY, y + h) : h) - D.scaleY || 0,
                  $a
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", d),
                  (d += "X");
              else if (d === "transformOrigin") {
                T.push(Pt, 0, o[Pt]),
                  (c = Cp(c)),
                  D.svg
                    ? Va(e, c, 0, x, 0, this)
                    : ((_ = parseFloat(c.split(" ")[2]) || 0),
                      _ !== D.zOrigin && Vi(this, D, "zOrigin", D.zOrigin, _),
                      Vi(this, o, d, pn(u), pn(c)));
                continue;
              } else if (d === "svgOrigin") {
                Va(e, c, 1, x, 0, this);
                continue;
              } else if (d in Zl) {
                Fp(this, D, d, m, y ? Fr(m, y + c) : c);
                continue;
              } else if (d === "smoothOrigin") {
                Vi(this, D, "smooth", D.smooth, c);
                continue;
              } else if (d === "force3D") {
                D[d] = c;
                continue;
              } else if (d === "transform") {
                Op(this, c, e);
                continue;
              }
            } else d in o || (d = Nr(d) || d);
            if (
              v ||
              ((h || h === 0) && (m || m === 0) && !pp.test(c) && d in o)
            )
              (g = (u + "").substr((m + "").length)),
                h || (h = 0),
                (_ = nt(c) || (d in kt.units ? kt.units[d] : g)),
                g !== _ && (m = Hi(e, d, u, _)),
                (this._pt = new Ct(
                  this._pt,
                  v ? D : o,
                  d,
                  m,
                  (y ? Fr(m, y + h) : h) - m,
                  !v && (_ === "px" || d === "zIndex") && t.autoRound !== !1
                    ? gp
                    : $a
                )),
                (this._pt.u = _ || 0),
                g !== _ && _ !== "%" && ((this._pt.b = u), (this._pt.r = mp));
            else if (d in o) Tp.call(this, e, d, u, y ? y + c : c);
            else if (d in e) this.add(e, d, u || e[d], y ? y + c : c, r, n);
            else if (d !== "parseTransform") {
              fa(d, c);
              continue;
            }
            v ||
              (d in o
                ? T.push(d, 0, o[d])
                : typeof e[d] == "function"
                ? T.push(d, 2, e[d]())
                : T.push(d, 1, u || e[d])),
              a.push(d);
          }
        }
      b && Ll(this);
    },
    render: function (e, t) {
      if (t.tween._time || !za())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Ci,
    aliases: fi,
    getSetter: function (e, t, i) {
      var r = fi[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in Ti && t !== Pt && (e._gsap.x || Ci(e, "x"))
          ? i && Rl === i
            ? t === "scale"
              ? wp
              : _p
            : (Rl = i || {}) && (t === "scale" ? Dp : bp)
          : e.style && !aa(e.style[t])
          ? vp
          : ~t.indexOf("-")
          ? yp
          : Aa(e, t)
      );
    },
    core: { _removeProperty: or, _getMatrix: qa },
  };
  (Mt.utils.checkPrefix = Nr),
    (Mt.core.getStyleSaver = Vl),
    (function (s, e, t, i) {
      var r = Tt(s + "," + e + "," + t, function (n) {
        Ti[n] = 1;
      });
      Tt(e, function (n) {
        (kt.units[n] = "deg"), (Zl[n] = 1);
      }),
        (fi[r[13]] = s + "," + e),
        Tt(i, function (n) {
          var a = n.split(":");
          fi[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Tt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        kt.units[s] = "px";
      }
    ),
    Mt.registerPlugin(iu);
  var q = Mt.registerPlugin(iu) || Mt;
  q.core.Tween;
  function Lp(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function kp(s, e, t) {
    return e && Lp(s.prototype, e), s;
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
    hn,
    Nt,
    Wi,
    Yi,
    qr,
    ru,
    cr,
    Ds,
    su,
    Mi,
    ii,
    nu,
    au = function () {
      return (
        et ||
        (typeof window != "undefined" &&
          (et = window.gsap) &&
          et.registerPlugin &&
          et)
      );
    },
    ou = 1,
    Vr = [],
    ie = [],
    hi = [],
    bs = Date.now,
    Wa = function (e, t) {
      return t;
    },
    Ip = function () {
      var e = Ds.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, ie),
        r.push.apply(r, hi),
        (ie = i),
        (hi = r),
        (Wa = function (a, o) {
          return t[a](o);
        });
    },
    Xi = function (e, t) {
      return ~hi.indexOf(e) && hi[hi.indexOf(e) + 1][t];
    },
    Ss = function (e) {
      return !!~su.indexOf(e);
    },
    vt = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!n });
    },
    yt = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    mn = "scrollLeft",
    gn = "scrollTop",
    Ya = function () {
      return (Mi && Mi.isPressed) || ie.cache++;
    },
    vn = function (e, t) {
      var i = function r(n) {
        if (n || n === 0) {
          ou && (Nt.history.scrollRestoration = "manual");
          var a = Mi && Mi.isPressed;
          (n = r.v = Math.round(n) || (Mi && Mi.iOS ? 1 : 0)),
            e(n),
            (r.cacheID = ie.cache),
            a && Wa("ss", n);
        } else
          (t || ie.cache !== r.cacheID || Wa("ref")) &&
            ((r.cacheID = ie.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    _t = {
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
          ? Nt.scrollTo(s, qe.sc())
          : Nt.pageXOffset || Wi[mn] || Yi[mn] || qr[mn] || 0;
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
      op: _t,
      sc: vn(function (s) {
        return arguments.length
          ? Nt.scrollTo(_t.sc(), s)
          : Nt.pageYOffset || Wi[gn] || Yi[gn] || qr[gn] || 0;
      }),
    },
    At = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || et.utils.toArray)(e)[0] ||
        (typeof e == "string" && et.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Gi = function (e, t) {
      var i = t.s,
        r = t.sc;
      Ss(e) && (e = Wi.scrollingElement || Yi);
      var n = ie.indexOf(e),
        a = r === qe.sc ? 1 : 2;
      !~n && (n = ie.push(e) - 1), ie[n + a] || vt(e, "scroll", Ya);
      var o = ie[n + a],
        l =
          o ||
          (ie[n + a] =
            vn(Xi(e, i), !0) ||
            (Ss(e)
              ? r
              : vn(function (u) {
                  return arguments.length ? (e[i] = u) : e[i];
                })));
      return (
        (l.target = e),
        o || (l.smooth = et.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Xa = function (e, t, i) {
      var r = e,
        n = e,
        a = bs(),
        o = a,
        l = t || 50,
        u = Math.max(500, l * 3),
        c = function (f, d) {
          var g = bs();
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
            _ = bs();
          return (
            (f || f === 0) && f !== r && c(f),
            a === o || _ - o > u
              ? 0
              : ((r + (i ? g : -g)) / ((i ? _ : a) - d)) * 1e3
          );
        };
      return { update: c, reset: h, getVelocity: m };
    },
    Es = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    lu = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    uu = function () {
      (Ds = et.core.globals().ScrollTrigger), Ds && Ds.core && Ip();
    },
    cu = function (e) {
      return (
        (et = e || au()),
        !hn &&
          et &&
          typeof document != "undefined" &&
          document.body &&
          ((Nt = window),
          (Wi = document),
          (Yi = Wi.documentElement),
          (qr = Wi.body),
          (su = [Nt, Wi, Yi, qr]),
          et.utils.clamp,
          (nu = et.core.context || function () {}),
          (cr = "onpointerenter" in qr ? "pointer" : "mouse"),
          (ru = Le.isTouch =
            Nt.matchMedia &&
            Nt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Nt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (ii = Le.eventTypes =
            (
              "ontouchstart" in Yi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Yi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (ou = 0);
          }, 500),
          uu(),
          (hn = 1)),
        hn
      );
    };
  (_t.op = qe), (ie.cache = 0);
  var Le = (function () {
    function s(t) {
      this.init(t);
    }
    var e = s.prototype;
    return (
      (e.init = function (i) {
        hn || cu(et) || console.warn("Please gsap.registerPlugin(Observer)"),
          Ds || uu();
        var r = i.tolerance,
          n = i.dragMinimum,
          a = i.type,
          o = i.target,
          l = i.lineHeight,
          u = i.debounce,
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
          w = i.onRelease,
          D = i.onRight,
          x = i.onLeft,
          b = i.onUp,
          T = i.onDown,
          E = i.onChangeX,
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
          W = i.onWheel,
          Q = i.onEnable,
          we = i.onDisable,
          se = i.onClick,
          $ = i.scrollSpeed,
          B = i.capture,
          N = i.allowClicks,
          j = i.lockAxis,
          ce = i.onLockAxis;
        (this.target = o = At(o) || Yi),
          (this.vars = i),
          p && (p = et.utils.toArray(p)),
          (r = r || 1e-9),
          (n = n || 0),
          (f = f || 1),
          ($ = $ || 1),
          (a = a || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Nt.getComputedStyle(qr).lineHeight) || 22);
        var tt,
          Se,
          Ee,
          J,
          ne,
          ye,
          He,
          z = this,
          Be = 0,
          ct = 0,
          Wt = i.passive || (!c && i.passive !== !1),
          _e = Gi(o, _t),
          Yt = Gi(o, qe),
          ei = _e(),
          si = Yt(),
          Ae =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            ii[0] === "pointerdown",
          ti = Ss(o),
          pe = o.ownerDocument || Wi,
          Ft = [0, 0, 0],
          Ue = [0, 0, 0],
          Fi = 0,
          Hs = function () {
            return (Fi = bs());
          },
          Ne = function (U, de) {
            return (
              ((z.event = U) && p && ~p.indexOf(U.target)) ||
              (de && Ae && U.pointerType !== "touch") ||
              (M && M(U, de))
            );
          },
          Hn = function () {
            z._vx.reset(), z._vy.reset(), Se.pause(), h && h(z);
          },
          Oi = function () {
            var U = (z.deltaX = lu(Ft)),
              de = (z.deltaY = lu(Ue)),
              V = Math.abs(U) >= r,
              K = Math.abs(de) >= r;
            L && (V || K) && L(z, U, de, Ft, Ue),
              V &&
                (D && z.deltaX > 0 && D(z),
                x && z.deltaX < 0 && x(z),
                E && E(z),
                P && z.deltaX < 0 != Be < 0 && P(z),
                (Be = z.deltaX),
                (Ft[0] = Ft[1] = Ft[2] = 0)),
              K &&
                (T && z.deltaY > 0 && T(z),
                b && z.deltaY < 0 && b(z),
                S && S(z),
                k && z.deltaY < 0 != ct < 0 && k(z),
                (ct = z.deltaY),
                (Ue[0] = Ue[1] = Ue[2] = 0)),
              (J || Ee) &&
                (I && I(z),
                Ee && (g && Ee === 1 && g(z), y && y(z), (Ee = 0)),
                (J = !1)),
              ye && !(ye = !1) && ce && ce(z),
              ne && (W(z), (ne = !1)),
              (tt = 0);
          },
          Qr = function (U, de, V) {
            (Ft[V] += U),
              (Ue[V] += de),
              z._vx.update(U),
              z._vy.update(de),
              u ? tt || (tt = requestAnimationFrame(Oi)) : Oi();
          },
          Jr = function (U, de) {
            j &&
              !He &&
              ((z.axis = He = Math.abs(U) > Math.abs(de) ? "x" : "y"),
              (ye = !0)),
              He !== "y" && ((Ft[2] += U), z._vx.update(U, !0)),
              He !== "x" && ((Ue[2] += de), z._vy.update(de, !0)),
              u ? tt || (tt = requestAnimationFrame(Oi)) : Oi();
          },
          Ki = function (U) {
            if (!Ne(U, 1)) {
              U = Es(U, c);
              var de = U.clientX,
                V = U.clientY,
                K = de - z.x,
                G = V - z.y,
                Z = z.isDragging;
              (z.x = de),
                (z.y = V),
                (Z ||
                  ((K || G) &&
                    (Math.abs(z.startX - de) >= n ||
                      Math.abs(z.startY - V) >= n))) &&
                  ((Ee = Z ? 2 : 1), Z || (z.isDragging = !0), Jr(K, G));
            }
          },
          Sr = (z.onPress = function (ee) {
            Ne(ee, 1) ||
              (ee && ee.button) ||
              ((z.axis = He = null),
              Se.pause(),
              (z.isPressed = !0),
              (ee = Es(ee)),
              (Be = ct = 0),
              (z.startX = z.x = ee.clientX),
              (z.startY = z.y = ee.clientY),
              z._vx.reset(),
              z._vy.reset(),
              vt(O ? o : pe, ii[1], Ki, Wt, !0),
              (z.deltaX = z.deltaY = 0),
              v && v(z));
          }),
          oe = (z.onRelease = function (ee) {
            if (!Ne(ee, 1)) {
              yt(O ? o : pe, ii[1], Ki, !0);
              var U = !isNaN(z.y - z.startY),
                de = z.isDragging,
                V =
                  de &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                K = Es(ee);
              !V &&
                U &&
                (z._vx.reset(),
                z._vy.reset(),
                c &&
                  N &&
                  et.delayedCall(0.08, function () {
                    if (bs() - Fi > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (pe.createEvent) {
                        var G = pe.createEvent("MouseEvents");
                        G.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Nt,
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
                Ee && Oi(),
                _ && de && _(z),
                w && w(z, V);
            }
          }),
          Er = function (U) {
            return (
              U.touches &&
              U.touches.length > 1 &&
              (z.isGesturing = !0) &&
              A(U, z.isDragging)
            );
          },
          ni = function () {
            return (z.isGesturing = !1) || C(z);
          },
          ai = function (U) {
            if (!Ne(U)) {
              var de = _e(),
                V = Yt();
              Qr((de - ei) * $, (V - si) * $, 1),
                (ei = de),
                (si = V),
                h && Se.restart(!0);
            }
          },
          oi = function (U) {
            if (!Ne(U)) {
              (U = Es(U, c)), W && (ne = !0);
              var de =
                (U.deltaMode === 1
                  ? l
                  : U.deltaMode === 2
                  ? Nt.innerHeight
                  : 1) * f;
              Qr(U.deltaX * de, U.deltaY * de, 0), h && !O && Se.restart(!0);
            }
          },
          xr = function (U) {
            if (!Ne(U)) {
              var de = U.clientX,
                V = U.clientY,
                K = de - z.x,
                G = V - z.y;
              (z.x = de),
                (z.y = V),
                (J = !0),
                h && Se.restart(!0),
                (K || G) && Jr(K, G);
            }
          },
          es = function (U) {
            (z.event = U), F(z);
          },
          Li = function (U) {
            (z.event = U), R(z);
          },
          Ws = function (U) {
            return Ne(U) || (Es(U, c) && se(z));
          };
        (Se = z._dc = et.delayedCall(m || 0.25, Hn).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = Xa(0, 50, !0)),
          (z._vy = Xa(0, 50, !0)),
          (z.scrollX = _e),
          (z.scrollY = Yt),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          nu(this),
          (z.enable = function (ee) {
            return (
              z.isEnabled ||
                (vt(ti ? pe : o, "scroll", Ya),
                a.indexOf("scroll") >= 0 &&
                  vt(ti ? pe : o, "scroll", ai, Wt, B),
                a.indexOf("wheel") >= 0 && vt(o, "wheel", oi, Wt, B),
                ((a.indexOf("touch") >= 0 && ru) ||
                  a.indexOf("pointer") >= 0) &&
                  (vt(o, ii[0], Sr, Wt, B),
                  vt(pe, ii[2], oe),
                  vt(pe, ii[3], oe),
                  N && vt(o, "click", Hs, !0, !0),
                  se && vt(o, "click", Ws),
                  A && vt(pe, "gesturestart", Er),
                  C && vt(pe, "gestureend", ni),
                  F && vt(o, cr + "enter", es),
                  R && vt(o, cr + "leave", Li),
                  I && vt(o, cr + "move", xr)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = J = Ee = !1),
                z._vx.reset(),
                z._vy.reset(),
                (ei = _e()),
                (si = Yt()),
                ee && ee.type && Sr(ee),
                Q && Q(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (Vr.filter(function (ee) {
                return ee !== z && Ss(ee.target);
              }).length || yt(ti ? pe : o, "scroll", Ya),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), yt(O ? o : pe, ii[1], Ki, !0)),
              yt(ti ? pe : o, "scroll", ai, B),
              yt(o, "wheel", oi, B),
              yt(o, ii[0], Sr, B),
              yt(pe, ii[2], oe),
              yt(pe, ii[3], oe),
              yt(o, "click", Hs, !0),
              yt(o, "click", Ws),
              yt(pe, "gesturestart", Er),
              yt(pe, "gestureend", ni),
              yt(o, cr + "enter", es),
              yt(o, cr + "leave", Li),
              yt(o, cr + "move", xr),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              we && we(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var ee = Vr.indexOf(z);
              ee >= 0 && Vr.splice(ee, 1), Mi === z && (Mi = 0);
            }),
          Vr.push(z),
          O && Ss(o) && (Mi = z),
          z.enable(d);
      }),
      kp(s, [
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
  (Le.version = "3.12.7"),
    (Le.create = function (s) {
      return new Le(s);
    }),
    (Le.register = cu),
    (Le.getAll = function () {
      return Vr.slice();
    }),
    (Le.getById = function (s) {
      return Vr.filter(function (e) {
        return e.vars.id === s;
      })[0];
    }),
    au() && et.registerPlugin(Le);
  /*!
   * ScrollTrigger 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var H,
    Hr,
    re,
    ve,
    qt,
    fe,
    Ga,
    yn,
    xs,
    Ts,
    Cs,
    _n,
    at,
    wn,
    ja,
    wt,
    du,
    fu,
    Wr,
    pu,
    Ua,
    hu,
    Dt,
    Ka,
    mu,
    gu,
    ji,
    Za,
    Qa,
    Yr,
    Ja,
    Dn,
    eo,
    to,
    bn = 1,
    ot = Date.now,
    io = ot(),
    Zt = 0,
    Ms = 0,
    vu = function (e, t, i) {
      var r = Vt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    yu = function (e, t) {
      return t && (!Vt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    zp = function s() {
      return Ms && requestAnimationFrame(s);
    },
    _u = function () {
      return (wn = 1);
    },
    wu = function () {
      return (wn = 0);
    },
    mi = function (e) {
      return e;
    },
    Ps = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Du = function () {
      return typeof window != "undefined";
    },
    bu = function () {
      return H || (Du() && (H = window.gsap) && H.registerPlugin && H);
    },
    dr = function (e) {
      return !!~Ga.indexOf(e);
    },
    Su = function (e) {
      return (
        (e === "Height" ? Ja : re["inner" + e]) ||
        qt["client" + e] ||
        fe["client" + e]
      );
    },
    Eu = function (e) {
      return (
        Xi(e, "getBoundingClientRect") ||
        (dr(e)
          ? function () {
              return (In.width = re.innerWidth), (In.height = Ja), In;
            }
          : function () {
              return Pi(e);
            })
      );
    },
    Rp = function (e, t, i) {
      var r = i.d,
        n = i.d2,
        a = i.a;
      return (a = Xi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? Su(n) : e["client" + n]) || 0;
          };
    },
    $p = function (e, t) {
      return !t || ~hi.indexOf(e)
        ? Eu(e)
        : function () {
            return In;
          };
    },
    gi = function (e, t) {
      var i = t.s,
        r = t.d2,
        n = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Xi(e, i))
          ? a() - Eu(e)()[n]
          : dr(e)
          ? (qt[i] || fe[i]) - Su(r)
          : e[i] - e["offset" + r]
      );
    },
    Sn = function (e, t) {
      for (var i = 0; i < Wr.length; i += 3)
        (!t || ~t.indexOf(Wr[i + 1])) && e(Wr[i], Wr[i + 1], Wr[i + 2]);
    },
    Vt = function (e) {
      return typeof e == "string";
    },
    lt = function (e) {
      return typeof e == "function";
    },
    As = function (e) {
      return typeof e == "number";
    },
    fr = function (e) {
      return typeof e == "object";
    },
    Fs = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    ro = function (e, t) {
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
    xu = "left",
    Tu = "top",
    so = "right",
    no = "bottom",
    pr = "width",
    hr = "height",
    Os = "Right",
    Ls = "Left",
    ks = "Top",
    Is = "Bottom",
    $e = "padding",
    Qt = "margin",
    Gr = "Width",
    ao = "Height",
    Ve = "px",
    Jt = function (e) {
      return re.getComputedStyle(e);
    },
    Bp = function (e) {
      var t = Jt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Cu = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Pi = function (e, t) {
      var i =
          t &&
          Jt(e)[ja] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
    En = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    Mu = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        n;
      for (n in i) t.push(i[n] / r);
      return t;
    },
    Np = function (e) {
      return function (t) {
        return H.utils.snap(Mu(e), t);
      };
    },
    oo = function (e) {
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
    qp = function (e) {
      return function (t, i) {
        return oo(Mu(e))(t, i.direction);
      };
    },
    xn = function (e, t, i, r) {
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
    Tn = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Pu = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Cn = { toggleActions: "play", anticipatePin: 0 },
    Mn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Pn = function (e, t) {
      if (Vt(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in Mn
              ? Mn[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    An = function (e, t, i, r, n, a, o, l) {
      var u = n.startColor,
        c = n.endColor,
        h = n.fontSize,
        m = n.indent,
        p = n.fontWeight,
        f = ve.createElement("div"),
        d = dr(i) || Xi(i, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        _ = d ? fe : i,
        y = e.indexOf("start") !== -1,
        v = y ? u : c,
        w =
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
        (w += "position:" + ((g || l) && d ? "fixed;" : "absolute;")),
        (g || l || !d) &&
          (w += (r === qe ? so : no) + ":" + (a + parseFloat(m)) + "px;"),
        o &&
          (w +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (f._isStart = y),
        f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (f.style.cssText = w),
        (f.innerText = t || t === 0 ? e + "-" + t : e),
        _.children[0] ? _.insertBefore(f, _.children[0]) : _.appendChild(f),
        (f._offset = f["offset" + r.op.d2]),
        Fn(f, 0, r, y),
        f
      );
    },
    Fn = function (e, t, i, r) {
      var n = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + a + Gr] = 1),
        (n["border" + o + Gr] = 0),
        (n[i.p] = t + "px"),
        H.set(e, n);
    },
    te = [],
    lo = {},
    zs,
    Au = function () {
      return ot() - Zt > 34 && (zs || (zs = requestAnimationFrame(Ai)));
    },
    jr = function () {
      (!Dt || !Dt.isPressed || Dt.startX > fe.clientWidth) &&
        (ie.cache++,
        Dt ? zs || (zs = requestAnimationFrame(Ai)) : Ai(),
        Zt || gr("scrollStart"),
        (Zt = ot()));
    },
    uo = function () {
      (gu = re.innerWidth), (mu = re.innerHeight);
    },
    Rs = function (e) {
      ie.cache++,
        (e === !0 ||
          (!at &&
            !hu &&
            !ve.fullscreenElement &&
            !ve.webkitFullscreenElement &&
            (!Ka ||
              gu !== re.innerWidth ||
              Math.abs(re.innerHeight - mu) > re.innerHeight * 0.25))) &&
          yn.restart(!0);
    },
    mr = {},
    Vp = [],
    Fu = function s() {
      return je(Y, "scrollEnd", s) || yr(!0);
    },
    gr = function (e) {
      return (
        (mr[e] &&
          mr[e].map(function (t) {
            return t();
          })) ||
        Vp
      );
    },
    Ht = [],
    Ou = function (e) {
      for (var t = 0; t < Ht.length; t += 5)
        (!e || (Ht[t + 4] && Ht[t + 4].query === e)) &&
          ((Ht[t].style.cssText = Ht[t + 1]),
          Ht[t].getBBox && Ht[t].setAttribute("transform", Ht[t + 2] || ""),
          (Ht[t + 3].uncache = 1));
    },
    co = function (e, t) {
      var i;
      for (wt = 0; wt < te.length; wt++)
        (i = te[wt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (Dn = !0), t && Ou(t), t || gr("revert");
    },
    Lu = function (e, t) {
      ie.cache++,
        (t || !bt) &&
          ie.forEach(function (i) {
            return lt(i) && i.cacheID++ && (i.rec = 0);
          }),
        Vt(e) && (re.history.scrollRestoration = Qa = e);
    },
    bt,
    vr = 0,
    ku,
    Hp = function () {
      if (ku !== vr) {
        var e = (ku = vr);
        requestAnimationFrame(function () {
          return e === vr && yr(!0);
        });
      }
    },
    Iu = function () {
      fe.appendChild(Yr),
        (Ja = (!Dt && Yr.offsetHeight) || re.innerHeight),
        fe.removeChild(Yr);
    },
    zu = function (e) {
      return xs(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    yr = function (e, t) {
      if (
        ((qt = ve.documentElement),
        (fe = ve.body),
        (Ga = [re, ve, qt, fe]),
        Zt && !e && !Dn)
      ) {
        Ge(Y, "scrollEnd", Fu);
        return;
      }
      Iu(),
        (bt = Y.isRefreshing = !0),
        ie.forEach(function (r) {
          return lt(r) && ++r.cacheID && (r.rec = r());
        });
      var i = gr("refreshInit");
      pu && Y.sort(),
        t || co(),
        ie.forEach(function (r) {
          lt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        te.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Dn = !1),
        te.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - a), r.refresh();
          }
        }),
        (eo = 1),
        zu(!0),
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
        zu(!1),
        (eo = 0),
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
        Lu(Qa, 1),
        yn.pause(),
        vr++,
        (bt = 2),
        Ai(2),
        te.forEach(function (r) {
          return lt(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (bt = Y.isRefreshing = !1),
        gr("refresh");
    },
    fo = 0,
    On = 1,
    $s,
    Ai = function (e) {
      if (e === 2 || (!bt && !Dn)) {
        (Y.isUpdating = !0), $s && $s.update(0);
        var t = te.length,
          i = ot(),
          r = i - io >= 50,
          n = t && te[0].scroll();
        if (
          ((On = fo > n ? -1 : 1),
          bt || (fo = n),
          r &&
            (Zt && !wn && i - Zt > 200 && ((Zt = 0), gr("scrollEnd")),
            (Cs = io),
            (io = i)),
          On < 0)
        ) {
          for (wt = t; wt-- > 0; ) te[wt] && te[wt].update(0, r);
          On = 1;
        } else for (wt = 0; wt < t; wt++) te[wt] && te[wt].update(0, r);
        Y.isUpdating = !1;
      }
      zs = 0;
    },
    po = [
      xu,
      Tu,
      no,
      so,
      Qt + Is,
      Qt + Os,
      Qt + ks,
      Qt + Ls,
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
    Ln = po.concat([
      pr,
      hr,
      "boxSizing",
      "max" + Gr,
      "max" + ao,
      "position",
      Qt,
      $e,
      $e + ks,
      $e + Os,
      $e + Is,
      $e + Ls,
    ]),
    Wp = function (e, t, i) {
      Ur(i);
      var r = e._gsap;
      if (r.spacerIsNative) Ur(r.spacerState);
      else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t), n.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    ho = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var n = po.length, a = t.style, o = e.style, l; n--; )
          (l = po[n]), (a[l] = i[l]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[no] = o[so] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[pr] = En(e, _t) + Ve),
          (a[hr] = En(e, qe) + Ve),
          (a[$e] = o[Qt] = o[Tu] = o[xu] = "0"),
          Ur(r),
          (o[pr] = o["max" + Gr] = i[pr]),
          (o[hr] = o["max" + ao] = i[hr]),
          (o[$e] = i[$e]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Yp = /([A-Z])/g,
    Ur = function (e) {
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
              : t[n] && t.removeProperty(n.replace(Yp, "-$1").toLowerCase());
      }
    },
    kn = function (e) {
      for (var t = Ln.length, i = e.style, r = [], n = 0; n < t; n++)
        r.push(Ln[n], i[Ln[n]]);
      return (r.t = e), r;
    },
    Xp = function (e, t, i) {
      for (var r = [], n = e.length, a = i ? 8 : 0, o; a < n; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    In = { left: 0, top: 0 },
    Ru = function (e, t, i, r, n, a, o, l, u, c, h, m, p, f) {
      lt(e) && (e = e(l)),
        Vt(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? Pn("0" + e.substr(3), i) : 0));
      var d = p ? p.time() : 0,
        g,
        _,
        y;
      if ((p && p.seek(0), isNaN(e) || (e = +e), As(e)))
        p &&
          (e = H.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            m,
            e
          )),
          o && Fn(o, i, r, !0);
      else {
        lt(t) && (t = t(l));
        var v = (e || "0").split(" "),
          w,
          D,
          x,
          b;
        (y = At(t, l) || fe),
          (w = Pi(y) || {}),
          (!w || (!w.left && !w.top)) &&
            Jt(y).display === "none" &&
            ((b = y.style.display),
            (y.style.display = "block"),
            (w = Pi(y)),
            b ? (y.style.display = b) : y.style.removeProperty("display")),
          (D = Pn(v[0], w[r.d])),
          (x = Pn(v[1] || "0", i)),
          (e = w[r.p] - u[r.p] - c + D + n - x),
          o && Fn(o, x, r, i - x < 20 || (o._isStart && x > 20)),
          (i -= i - x);
      }
      if ((f && ((l[f] = e || -0.001), e < 0 && (e = 0)), a)) {
        var T = e + i,
          E = a._isStart;
        (g = "scroll" + r.d2),
          Fn(
            a,
            T,
            r,
            (E && T > 20) ||
              (!E && (h ? Math.max(fe[g], qt[g]) : a.parentNode[g]) <= T + 1)
          ),
          h &&
            ((u = Pi(o)),
            h && (a.style[r.op.p] = u[r.op.p] - r.op.m - a._offset + Ve));
      }
      return (
        p &&
          y &&
          ((g = Pi(y)),
          p.seek(m),
          (_ = Pi(y)),
          (p._caScrollDist = g[r.p] - _[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(d),
        p ? e : Math.round(e)
      );
    },
    Gp = /(webkit|moz|length|cssText|inset)/i,
    $u = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var n = e.style,
          a,
          o;
        if (t === fe) {
          (e._stOrig = n.cssText), (o = Jt(e));
          for (a in o)
            !+a &&
              !Gp.test(a) &&
              o[a] &&
              typeof n[a] == "string" &&
              a !== "0" &&
              (n[a] = o[a]);
          (n.top = i), (n.left = r);
        } else n.cssText = e._stOrig;
        (H.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Bu = function (e, t, i) {
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
    zn = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), H.set(e, r);
    },
    Nu = function (e, t) {
      var i = Gi(e, t),
        r = "_scroll" + t.p2,
        n = function a(o, l, u, c, h) {
          var m = a.tween,
            p = l.onComplete,
            f = {};
          u = u || i();
          var d = Bu(i, u, function () {
            m.kill(), (a.tween = 0);
          });
          return (
            (h = (c && h) || 0),
            (c = c || o - u),
            m && m.kill(),
            (l[r] = o),
            (l.inherit = !1),
            (l.modifiers = f),
            (f[r] = function () {
              return d(u + c * m.ratio + h * m.ratio * m.ratio);
            }),
            (l.onUpdate = function () {
              ie.cache++, a.tween && Ai();
            }),
            (l.onComplete = function () {
              (a.tween = 0), p && p.call(m);
            }),
            (m = a.tween = H.to(e, l)),
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
        Hr ||
          s.register(H) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Za(this),
          this.init(t, i);
      }
      var e = s.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Ms)
          ) {
            this.update = this.refresh = this.kill = mi;
            return;
          }
          i = Cu(Vt(i) || As(i) || i.nodeType ? { trigger: i } : i, Cn);
          var n = i,
            a = n.onUpdate,
            o = n.toggleClass,
            l = n.id,
            u = n.onToggle,
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
            w = n.snap,
            D = n.pinReparent,
            x = n.pinSpacer,
            b = n.containerAnimation,
            T = n.fastScrollEnd,
            E = n.preventOverlaps,
            S =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? _t
                : qe,
            L = !h && h !== 0,
            P = At(i.scroller || re),
            k = H.core.getCache(P),
            F = dr(P),
            R =
              ("pinType" in i
                ? i.pinType
                : Xi(P, "pinType") || (F && "fixed")) === "fixed",
            I = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            M = L && i.toggleActions.split(" "),
            O = "markers" in i ? i.markers : Cn.markers,
            A = F ? 0 : parseFloat(Jt(P)["border" + S.p2 + Gr]) || 0,
            C = this,
            W =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(C);
              },
            Q = Rp(P, F, S),
            we = $p(P, F),
            se = 0,
            $ = 0,
            B = 0,
            N = Gi(P, S),
            j,
            ce,
            tt,
            Se,
            Ee,
            J,
            ne,
            ye,
            He,
            z,
            Be,
            ct,
            Wt,
            _e,
            Yt,
            ei,
            si,
            Ae,
            ti,
            pe,
            Ft,
            Ue,
            Fi,
            Hs,
            Ne,
            Hn,
            Oi,
            Qr,
            Jr,
            Ki,
            Sr,
            oe,
            Er,
            ni,
            ai,
            oi,
            xr,
            es,
            Li;
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
              ((pu = 1), i.refreshPriority === -9999 && ($s = C)),
            (k.tweenScroll = k.tweenScroll || {
              top: Nu(P, qe),
              left: Nu(P, _t),
            }),
            (C.tweenTo = j = k.tweenScroll[S.p]),
            (C.scrubDuration = function (V) {
              (Er = As(V) && V),
                Er
                  ? oe
                    ? oe.duration(V)
                    : (oe = H.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Er,
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
              (Ki = 0),
              l || (l = r.vars.id)),
            w &&
              ((!fr(w) || w.push) && (w = { snapTo: w }),
              "scrollBehavior" in fe.style &&
                H.set(F ? [fe, qt] : P, { scrollBehavior: "auto" }),
              ie.forEach(function (V) {
                return (
                  lt(V) &&
                  V.target === (F ? ve.scrollingElement || qt : P) &&
                  (V.smooth = !1)
                );
              }),
              (tt = lt(w.snapTo)
                ? w.snapTo
                : w.snapTo === "labels"
                ? Np(r)
                : w.snapTo === "labelsDirectional"
                ? qp(r)
                : w.directional !== !1
                ? function (V, K) {
                    return oo(w.snapTo)(V, ot() - $ < 500 ? 0 : K.direction);
                  }
                : H.utils.snap(w.snapTo)),
              (ni = w.duration || { min: 0.1, max: 2 }),
              (ni = fr(ni) ? Ts(ni.min, ni.max) : Ts(ni, ni)),
              (ai = H.delayedCall(w.delay || Er / 2 || 0.1, function () {
                var V = N(),
                  K = ot() - $ < 500,
                  G = j.tween;
                if (
                  (K || Math.abs(C.getVelocity()) < 10) &&
                  !G &&
                  !wn &&
                  se !== V
                ) {
                  var Z = (V - J) / _e,
                    Ke = r && !L ? r.totalProgress() : Z,
                    ue = K ? 0 : ((Ke - Sr) / (ot() - Cs)) * 1e3 || 0,
                    ke = H.utils.clamp(-Z, 1 - Z, (Xr(ue / 2) * ue) / 0.185),
                    dt = Z + (w.inertia === !1 ? 0 : ke),
                    Fe,
                    xe,
                    ge = w,
                    li = ge.onStart,
                    Me = ge.onInterrupt,
                    Xt = ge.onComplete;
                  if (
                    ((Fe = tt(dt, C)),
                    As(Fe) || (Fe = dt),
                    (xe = Math.max(0, Math.round(J + Fe * _e))),
                    V <= ne && V >= J && xe !== V)
                  ) {
                    if (G && !G._initted && G.data <= Xr(xe - V)) return;
                    w.inertia === !1 && (ke = Fe - Z),
                      j(
                        xe,
                        {
                          duration: ni(
                            Xr(
                              (Math.max(Xr(dt - Ke), Xr(Fe - Ke)) * 0.185) /
                                ue /
                                0.05 || 0
                            )
                          ),
                          ease: w.ease || "power3",
                          data: Xr(xe - V),
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
                                      Fe,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(Fe)),
                              (Ki = Sr =
                                r && !L ? r.totalProgress() : C.progress),
                              y && y(C),
                              Xt && Xt(C);
                          },
                        },
                        V,
                        ke * _e,
                        xe - V - ke * _e
                      ),
                      li && li(C, j.tween);
                  }
                } else C.isActive && se !== V && ai.restart(!0);
              }).pause())),
            l && (lo[l] = C),
            (m = C.trigger = At(m || (p !== !0 && p))),
            (Li = m && m._gsap && m._gsap.stRevert),
            Li && (Li = Li(C)),
            (p = p === !0 ? m : At(p)),
            Vt(o) && (o = { targets: m, className: o }),
            p &&
              (f === !1 ||
                f === Qt ||
                (f =
                  !f &&
                  p.parentNode &&
                  p.parentNode.style &&
                  Jt(p.parentNode).display === "flex"
                    ? !1
                    : $e),
              (C.pin = p),
              (ce = H.core.getCache(p)),
              ce.spacer
                ? (Yt = ce.pinState)
                : (x &&
                    ((x = At(x)),
                    x && !x.nodeType && (x = x.current || x.nativeElement),
                    (ce.spacerIsNative = !!x),
                    x && (ce.spacerState = kn(x))),
                  (ce.spacer = Ae = x || ve.createElement("div")),
                  Ae.classList.add("pin-spacer"),
                  l && Ae.classList.add("pin-spacer-" + l),
                  (ce.pinState = Yt = kn(p))),
              i.force3D !== !1 && H.set(p, { force3D: !0 }),
              (C.spacer = Ae = ce.spacer),
              (Jr = Jt(p)),
              (Hs = Jr[f + S.os2]),
              (pe = H.getProperty(p)),
              (Ft = H.quickSetter(p, S.a, Ve)),
              ho(p, Ae, Jr),
              (si = kn(p))),
            O)
          ) {
            (ct = fr(O) ? Cu(O, Pu) : Pu),
              (z = An("scroller-start", l, P, S, ct, 0)),
              (Be = An("scroller-end", l, P, S, ct, 0, z)),
              (ti = z["offset" + S.op.d2]);
            var Ws = At(Xi(P, "content") || P);
            (ye = this.markerStart = An("start", l, Ws, S, ct, ti, 0, b)),
              (He = this.markerEnd = An("end", l, Ws, S, ct, ti, 0, b)),
              b && (es = H.quickSetter([ye, He], S.a, Ve)),
              !R &&
                !(hi.length && Xi(P, "fixedMarkers") === !0) &&
                (Bp(F ? fe : P),
                H.set([z, Be], { force3D: !0 }),
                (Hn = H.quickSetter(z, S.a, Ve)),
                (Qr = H.quickSetter(Be, S.a, Ve)));
          }
          if (b) {
            var ee = b.vars.onUpdate,
              U = b.vars.onUpdateParams;
            b.eventCallback("onUpdate", function () {
              C.update(0, 0, 1), ee && ee.apply(b, U || []);
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
                  ((oi = Math.max(N(), C.scroll.rec || 0)),
                  (B = C.progress),
                  (xr = r && r.progress())),
                ye &&
                  [ye, He, z, Be].forEach(function (Ke) {
                    return (Ke.style.display = G ? "none" : "block");
                  }),
                G && ((at = C), C.update(G)),
                p &&
                  (!D || !C.isActive) &&
                  (G ? Wp(p, Ae, Yt) : ho(p, Ae, Jt(p), Ne)),
                G || C.update(G),
                (at = Z),
                (C.isReverted = G));
            }),
            (C.refresh = function (V, K, G, Z) {
              if (!((at || !C.enabled) && !K)) {
                if (p && V && Zt) {
                  Ge(s, "scrollEnd", Fu);
                  return;
                }
                !bt && W && W(C),
                  (at = C),
                  j.tween && !G && (j.tween.kill(), (j.tween = 0)),
                  oe && oe.pause(),
                  d && r && r.revert({ kill: !1 }).invalidate(),
                  C.isReverted || C.revert(!0, !0),
                  (C._subPinOffset = !1);
                var Ke = Q(),
                  ue = we(),
                  ke = b ? b.duration() : gi(P, S),
                  dt = _e <= 0.01,
                  Fe = 0,
                  xe = Z || 0,
                  ge = fr(G) ? G.end : i.end,
                  li = i.endTrigger || m,
                  Me = fr(G)
                    ? G.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  Xt = (C.pinnedContainer =
                    i.pinnedContainer && At(i.pinnedContainer, C)),
                  wi = (m && Math.max(0, te.indexOf(C))) || 0,
                  it = wi,
                  rt,
                  ft,
                  Tr,
                  Wn,
                  pt,
                  We,
                  Di,
                  Co,
                  Sc,
                  Ys,
                  bi,
                  Xs,
                  Yn;
                for (
                  O &&
                  fr(G) &&
                  ((Xs = H.getProperty(z, S.p)), (Yn = H.getProperty(Be, S.p)));
                  it-- > 0;

                )
                  (We = te[it]),
                    We.end || We.refresh(0, 1) || (at = C),
                    (Di = We.pin),
                    Di &&
                      (Di === m || Di === p || Di === Xt) &&
                      !We.isReverted &&
                      (Ys || (Ys = []), Ys.unshift(We), We.revert(!0, !0)),
                    We !== te[it] && (wi--, it--);
                for (
                  lt(Me) && (Me = Me(C)),
                    Me = vu(Me, "start", C),
                    J =
                      Ru(
                        Me,
                        m,
                        Ke,
                        S,
                        N(),
                        ye,
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
                    Vt(ge) &&
                      !ge.indexOf("+=") &&
                      (~ge.indexOf(" ")
                        ? (ge = (Vt(Me) ? Me.split(" ")[0] : "") + ge)
                        : ((Fe = Pn(ge.substr(2), Ke)),
                          (ge = Vt(Me)
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
                          (li = m))),
                    ge = vu(ge, "end", C),
                    ne =
                      Math.max(
                        J,
                        Ru(
                          ge || (li ? "100% 0" : ke),
                          li,
                          Ke,
                          S,
                          N() + Fe,
                          He,
                          Be,
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
                    it = wi;
                  it--;

                )
                  (We = te[it]),
                    (Di = We.pin),
                    Di &&
                      We.start - We._pinPush <= J &&
                      !b &&
                      We.end > 0 &&
                      ((rt =
                        We.end -
                        (C._startClamp ? Math.max(0, We.start) : We.start)),
                      ((Di === m && We.start - We._pinPush < J) || Di === Xt) &&
                        isNaN(Me) &&
                        (Fe += rt * (1 - We.progress)),
                      Di === p && (xe += rt));
                if (
                  ((J += Fe),
                  (ne += Fe),
                  C._startClamp && (C._startClamp += Fe),
                  C._endClamp &&
                    !bt &&
                    ((C._endClamp = ne || -0.001),
                    (ne = Math.min(ne, gi(P, S)))),
                  (_e = ne - J || ((J -= 0.01) && 0.001)),
                  dt && (B = H.utils.clamp(0, 1, H.utils.normalize(J, ne, oi))),
                  (C._pinPush = xe),
                  ye &&
                    Fe &&
                    ((rt = {}),
                    (rt[S.a] = "+=" + Fe),
                    Xt && (rt[S.p] = "-=" + N()),
                    H.set([ye, He], rt)),
                  p && !(eo && C.end >= gi(P, S)))
                )
                  (rt = Jt(p)),
                    (Wn = S === qe),
                    (Tr = N()),
                    (Ue = parseFloat(pe(S.a)) + xe),
                    !ke &&
                      ne > 1 &&
                      ((bi = (F ? ve.scrollingElement || qt : P).style),
                      (bi = {
                        style: bi,
                        value: bi["overflow" + S.a.toUpperCase()],
                      }),
                      F &&
                        Jt(fe)["overflow" + S.a.toUpperCase()] !== "scroll" &&
                        (bi.style["overflow" + S.a.toUpperCase()] = "scroll")),
                    ho(p, Ae, rt),
                    (si = kn(p)),
                    (ft = Pi(p, !0)),
                    (Co = R && Gi(P, Wn ? _t : qe)()),
                    f
                      ? ((Ne = [f + S.os2, _e + xe + Ve]),
                        (Ne.t = Ae),
                        (it = f === $e ? En(p, S) + _e + xe : 0),
                        it &&
                          (Ne.push(S.d, it + Ve),
                          Ae.style.flexBasis !== "auto" &&
                            (Ae.style.flexBasis = it + Ve)),
                        Ur(Ne),
                        Xt &&
                          te.forEach(function (Gs) {
                            Gs.pin === Xt &&
                              Gs.vars.pinSpacing !== !1 &&
                              (Gs._subPinOffset = !0);
                          }),
                        R && N(oi))
                      : ((it = En(p, S)),
                        it &&
                          Ae.style.flexBasis !== "auto" &&
                          (Ae.style.flexBasis = it + Ve)),
                    R &&
                      ((pt = {
                        top: ft.top + (Wn ? Tr - J : Co) + Ve,
                        left: ft.left + (Wn ? Co : Tr - J) + Ve,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (pt[pr] = pt["max" + Gr] = Math.ceil(ft.width) + Ve),
                      (pt[hr] = pt["max" + ao] = Math.ceil(ft.height) + Ve),
                      (pt[Qt] =
                        pt[Qt + ks] =
                        pt[Qt + Os] =
                        pt[Qt + Is] =
                        pt[Qt + Ls] =
                          "0"),
                      (pt[$e] = rt[$e]),
                      (pt[$e + ks] = rt[$e + ks]),
                      (pt[$e + Os] = rt[$e + Os]),
                      (pt[$e + Is] = rt[$e + Is]),
                      (pt[$e + Ls] = rt[$e + Ls]),
                      (ei = Xp(Yt, pt, D)),
                      bt && N(0)),
                    r
                      ? ((Sc = r._initted),
                        Ua(1),
                        r.render(r.duration(), !0, !0),
                        (Fi = pe(S.a) - Ue + _e + xe),
                        (Oi = Math.abs(_e - Fi) > 1),
                        R && Oi && ei.splice(ei.length - 2, 2),
                        r.render(0, !0, !0),
                        Sc || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Ua(0))
                      : (Fi = _e),
                    bi &&
                      (bi.value
                        ? (bi.style["overflow" + S.a.toUpperCase()] = bi.value)
                        : bi.style.removeProperty("overflow-" + S.a));
                else if (m && N() && !b)
                  for (ft = m.parentNode; ft && ft !== fe; )
                    ft._pinOffset &&
                      ((J -= ft._pinOffset), (ne -= ft._pinOffset)),
                      (ft = ft.parentNode);
                Ys &&
                  Ys.forEach(function (Gs) {
                    return Gs.revert(!1, !0);
                  }),
                  (C.start = J),
                  (C.end = ne),
                  (Se = Ee = bt ? oi : N()),
                  !b && !bt && (Se < oi && N(oi), (C.scroll.rec = 0)),
                  C.revert(!1, !0),
                  ($ = ot()),
                  ai && ((se = -1), ai.restart(!0)),
                  (at = 0),
                  r &&
                    L &&
                    (r._initted || xr) &&
                    r.progress() !== xr &&
                    r.progress(xr || 0, !0).render(r.time(), !0, !0),
                  (dt || B !== C.progress || b || d || (r && !r._initted)) &&
                    (r &&
                      !L &&
                      r.totalProgress(
                        b && J < -0.001 && !B ? H.utils.normalize(J, ne, 0) : B,
                        !0
                      ),
                    (C.progress = dt || (Se - J) / _e === B ? 0 : B)),
                  p && f && (Ae._pinOffset = Math.round(C.progress * Fi)),
                  oe && oe.invalidate(),
                  isNaN(Xs) ||
                    ((Xs -= H.getProperty(z, S.p)),
                    (Yn -= H.getProperty(Be, S.p)),
                    zn(z, S, Xs),
                    zn(ye, S, Xs - (Z || 0)),
                    zn(Be, S, Yn),
                    zn(He, S, Yn - (Z || 0))),
                  dt && !bt && C.update(),
                  c && !bt && !Wt && ((Wt = !0), c(C), (Wt = !1));
              }
            }),
            (C.getVelocity = function () {
              return ((N() - Ee) / (ot() - Cs)) * 1e3 || 0;
            }),
            (C.endAnimation = function () {
              Fs(C.callbackAnimation),
                r &&
                  (oe
                    ? oe.progress(1)
                    : r.paused()
                    ? L || Fs(r, C.direction < 0, 1)
                    : Fs(r, r.reversed()));
            }),
            (C.labelToScroll = function (V) {
              return (
                (r &&
                  r.labels &&
                  (J || C.refresh() || J) +
                    (r.labels[V] / r.duration()) * _e) ||
                0
              );
            }),
            (C.getTrailing = function (V) {
              var K = te.indexOf(C),
                G =
                  C.direction > 0 ? te.slice(0, K).reverse() : te.slice(K + 1);
              return (
                Vt(V)
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
                var Z = bt === !0 ? oi : C.scroll(),
                  Ke = V ? 0 : (Z - J) / _e,
                  ue = Ke < 0 ? 0 : Ke > 1 ? 1 : Ke || 0,
                  ke = C.progress,
                  dt,
                  Fe,
                  xe,
                  ge,
                  li,
                  Me,
                  Xt,
                  wi;
                if (
                  (K &&
                    ((Ee = Se),
                    (Se = b ? N() : Z),
                    w && ((Sr = Ki), (Ki = r && !L ? r.totalProgress() : ue))),
                  g &&
                    p &&
                    !at &&
                    !bn &&
                    Zt &&
                    (!ue && J < Z + ((Z - Ee) / (ot() - Cs)) * g
                      ? (ue = 1e-4)
                      : ue === 1 &&
                        ne > Z + ((Z - Ee) / (ot() - Cs)) * g &&
                        (ue = 0.9999)),
                  ue !== ke && C.enabled)
                ) {
                  if (
                    ((dt = C.isActive = !!ue && ue < 1),
                    (Fe = !!ke && ke < 1),
                    (Me = dt !== Fe),
                    (li = Me || !!ue != !!ke),
                    (C.direction = ue > ke ? 1 : -1),
                    (C.progress = ue),
                    li &&
                      !at &&
                      ((xe = ue && !ke ? 0 : ue === 1 ? 1 : ke === 1 ? 2 : 3),
                      L &&
                        ((ge =
                          (!Me && M[xe + 1] !== "none" && M[xe + 1]) || M[xe]),
                        (wi =
                          r &&
                          (ge === "complete" || ge === "reset" || ge in r)))),
                    E &&
                      (Me || wi) &&
                      (wi || h || !r) &&
                      (lt(E)
                        ? E(C)
                        : C.getTrailing(E).forEach(function (Tr) {
                            return Tr.endAnimation();
                          })),
                    L ||
                      (oe && !at && !bn
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
                        : r && r.totalProgress(ue, !!(at && ($ || V)))),
                    p)
                  ) {
                    if ((V && f && (Ae.style[f + S.os2] = Hs), !R))
                      Ft(Ps(Ue + Fi * ue));
                    else if (li) {
                      if (
                        ((Xt =
                          !V && ue > ke && ne + 1 > Z && Z + 1 >= gi(P, S)),
                        D)
                      )
                        if (!V && (dt || Xt)) {
                          var it = Pi(p, !0),
                            rt = Z - J;
                          $u(
                            p,
                            fe,
                            it.top + (S === qe ? rt : 0) + Ve,
                            it.left + (S === qe ? 0 : rt) + Ve
                          );
                        } else $u(p, Ae);
                      Ur(dt || Xt ? ei : si),
                        (Oi && ue < 1 && dt) ||
                          Ft(Ue + (ue === 1 && !Xt ? Fi : 0));
                    }
                  }
                  w && !j.tween && !at && !bn && ai.restart(!0),
                    o &&
                      (Me || (v && ue && (ue < 1 || !to))) &&
                      xs(o.targets).forEach(function (Tr) {
                        return Tr.classList[dt || v ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !L && !V && a(C),
                    li && !at
                      ? (L &&
                          (wi &&
                            (ge === "complete"
                              ? r.pause().totalProgress(1)
                              : ge === "reset"
                              ? r.restart(!0).pause()
                              : ge === "restart"
                              ? r.restart(!0)
                              : r[ge]()),
                          a && a(C)),
                        (Me || !to) &&
                          (u && Me && ro(C, u),
                          I[xe] && ro(C, I[xe]),
                          v && (ue === 1 ? C.kill(!1, 1) : (I[xe] = 0)),
                          Me ||
                            ((xe = ue === 1 ? 1 : 3), I[xe] && ro(C, I[xe]))),
                        T &&
                          !dt &&
                          Math.abs(C.getVelocity()) > (As(T) ? T : 2500) &&
                          (Fs(C.callbackAnimation),
                          oe
                            ? oe.progress(1)
                            : Fs(r, ge === "reverse" ? 1 : !ue, 1)))
                      : L && a && !at && a(C);
                }
                if (Qr) {
                  var ft = b ? (Z / b.duration()) * (b._caScrollDist || 0) : Z;
                  Hn(ft + (z._isFlipped ? 1 : 0)), Qr(ft);
                }
                es && es((-Z / b.duration()) * (b._caScrollDist || 0));
              }
            }),
            (C.enable = function (V, K) {
              C.enabled ||
                ((C.enabled = !0),
                Ge(P, "resize", Rs),
                F || Ge(P, "scroll", jr),
                W && Ge(s, "refreshInit", W),
                V !== !1 && ((C.progress = B = 0), (Se = Ee = se = N())),
                K !== !1 && C.refresh());
            }),
            (C.getTween = function (V) {
              return V && j ? j.tween : oe;
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
                  start: yu(V, G && !!C._startClamp),
                  end: yu(K, G && !!C._endClamp),
                },
                Z
              ),
                C.update();
            }),
            (C.adjustPinSpacing = function (V) {
              if (Ne && V) {
                var K = Ne.indexOf(S.d) + 1;
                (Ne[K] = parseFloat(Ne[K]) + V + Ve),
                  (Ne[1] = parseFloat(Ne[1]) + V + Ve),
                  Ur(Ne);
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
                W && je(s, "refreshInit", W),
                ai && (ai.pause(), j.tween && j.tween.kill() && (j.tween = 0)),
                !F)
              ) {
                for (var G = te.length; G--; )
                  if (te[G].scroller === P && te[G] !== C) return;
                je(P, "resize", Rs), F || je(P, "scroll", jr);
              }
            }),
            (C.kill = function (V, K) {
              C.disable(V, K), oe && !K && oe.kill(), l && delete lo[l];
              var G = te.indexOf(C);
              G >= 0 && te.splice(G, 1),
                G === wt && On > 0 && wt--,
                (G = 0),
                te.forEach(function (Z) {
                  return Z.scroller === C.scroller && (G = 1);
                }),
                G || bt || (C.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  V && r.revert({ kill: !1 }),
                  K || r.kill()),
                ye &&
                  [ye, He, z, Be].forEach(function (Z) {
                    return Z.parentNode && Z.parentNode.removeChild(Z);
                  }),
                $s === C && ($s = 0),
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
            Li && Li(C),
            r && r.add && !_e)
          ) {
            var de = C.update;
            (C.update = function () {
              (C.update = de), ie.cache++, J || ne || C.refresh();
            }),
              H.delayedCall(0.01, C.update),
              (_e = 0.01),
              (J = ne = 0);
          } else C.refresh();
          p && Hp();
        }),
        (s.register = function (i) {
          return (
            Hr ||
              ((H = i || bu()),
              Du() && window.document && s.enable(),
              (Hr = Ms)),
            Hr
          );
        }),
        (s.defaults = function (i) {
          if (i) for (var r in i) Cn[r] = i[r];
          return Cn;
        }),
        (s.disable = function (i, r) {
          (Ms = 0),
            te.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            je(re, "wheel", jr),
            je(ve, "scroll", jr),
            clearInterval(_n),
            je(ve, "touchcancel", mi),
            je(fe, "touchstart", mi),
            xn(je, ve, "pointerdown,touchstart,mousedown", _u),
            xn(je, ve, "pointerup,touchend,mouseup", wu),
            yn.kill(),
            Sn(je);
          for (var n = 0; n < ie.length; n += 3)
            Tn(je, ie[n], ie[n + 1]), Tn(je, ie[n], ie[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((re = window),
            (ve = document),
            (qt = ve.documentElement),
            (fe = ve.body),
            H &&
              ((xs = H.utils.toArray),
              (Ts = H.utils.clamp),
              (Za = H.core.context || mi),
              (Ua = H.core.suppressOverwrites || mi),
              (Qa = re.history.scrollRestoration || "auto"),
              (fo = re.pageYOffset || 0),
              H.core.globals("ScrollTrigger", s),
              fe))
          ) {
            (Ms = 1),
              (Yr = document.createElement("div")),
              (Yr.style.height = "100vh"),
              (Yr.style.position = "absolute"),
              Iu(),
              zp(),
              Le.register(H),
              (s.isTouch = Le.isTouch),
              (ji =
                Le.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Ka = Le.isTouch === 1),
              Ge(re, "wheel", jr),
              (Ga = [re, ve, qt, fe]),
              H.matchMedia
                ? ((s.matchMedia = function (u) {
                    var c = H.matchMedia(),
                      h;
                    for (h in u) c.add(h, u[h]);
                    return c;
                  }),
                  H.addEventListener("matchMediaInit", function () {
                    return co();
                  }),
                  H.addEventListener("matchMediaRevert", function () {
                    return Ou();
                  }),
                  H.addEventListener("matchMedia", function () {
                    yr(0, 1), gr("matchMedia");
                  }),
                  H.matchMedia().add("(orientation: portrait)", function () {
                    return uo(), uo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              uo(),
              Ge(ve, "scroll", jr);
            var i = fe.hasAttribute("style"),
              r = fe.style,
              n = r.borderTopStyle,
              a = H.core.Animation.prototype,
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
                o = Pi(fe),
                qe.m = Math.round(o.top + qe.sc()) || 0,
                _t.m = Math.round(o.left + _t.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                i ||
                  (fe.setAttribute("style", ""), fe.removeAttribute("style")),
                _n = setInterval(Au, 250),
                H.delayedCall(0.5, function () {
                  return (bn = 0);
                }),
                Ge(ve, "touchcancel", mi),
                Ge(fe, "touchstart", mi),
                xn(Ge, ve, "pointerdown,touchstart,mousedown", _u),
                xn(Ge, ve, "pointerup,touchend,mouseup", wu),
                ja = H.utils.checkPrefix("transform"),
                Ln.push(ja),
                Hr = ot(),
                yn = H.delayedCall(0.2, yr).pause(),
                Wr = [
                  ve,
                  "visibilitychange",
                  function () {
                    var u = re.innerWidth,
                      c = re.innerHeight;
                    ve.hidden
                      ? ((du = u), (fu = c))
                      : (du !== u || fu !== c) && Rs();
                  },
                  ve,
                  "DOMContentLoaded",
                  yr,
                  re,
                  "load",
                  yr,
                  re,
                  "resize",
                  Rs,
                ],
                Sn(Ge),
                te.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < ie.length;
              l += 3
            )
              Tn(je, ie[l], ie[l + 1]), Tn(je, ie[l], ie[l + 2]);
          }
        }),
        (s.config = function (i) {
          "limitCallbacks" in i && (to = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(_n)) || ((_n = r) && setInterval(Au, r)),
            "ignoreMobileResize" in i &&
              (Ka = s.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (Sn(je) || Sn(Ge, i.autoRefreshEvents || "none"),
              (hu = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (i, r) {
          var n = At(i),
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
          var a = (Vt(i) ? At(i) : i).getBoundingClientRect(),
            o = a[n ? pr : hr] * r || 0;
          return n
            ? a.right - o > 0 && a.left + o < re.innerWidth
            : a.bottom - o > 0 && a.top + o < re.innerHeight;
        }),
        (s.positionInViewport = function (i, r, n) {
          Vt(i) && (i = At(i));
          var a = i.getBoundingClientRect(),
            o = a[n ? pr : hr],
            l =
              r == null
                ? o / 2
                : r in Mn
                ? Mn[r] * o
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
  (Y.version = "3.12.7"),
    (Y.saveStyles = function (s) {
      return s
        ? xs(s).forEach(function (e) {
            if (e && e.style) {
              var t = Ht.indexOf(e);
              t >= 0 && Ht.splice(t, 5),
                Ht.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  H.core.getCache(e),
                  Za()
                );
            }
          })
        : Ht;
    }),
    (Y.revert = function (s, e) {
      return co(!s, e);
    }),
    (Y.create = function (s, e) {
      return new Y(s, e);
    }),
    (Y.refresh = function (s) {
      return s ? Rs(!0) : (Hr || Y.register()) && yr(!0);
    }),
    (Y.update = function (s) {
      return ++ie.cache && Ai(s === !0 ? 2 : 0);
    }),
    (Y.clearScrollMemory = Lu),
    (Y.maxScroll = function (s, e) {
      return gi(s, e ? _t : qe);
    }),
    (Y.getScrollFunc = function (s, e) {
      return Gi(At(s), e ? _t : qe);
    }),
    (Y.getById = function (s) {
      return lo[s];
    }),
    (Y.getAll = function () {
      return te.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (Y.isScrolling = function () {
      return !!Zt;
    }),
    (Y.snapDirectional = oo),
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
        a = function (u, c) {
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
          Ge(Y, "refresh", function () {
            return (n = e.batchMax());
          })),
        xs(s).forEach(function (l) {
          var u = {};
          for (o in i) u[o] = i[o];
          (u.trigger = l), t.push(Y.create(u));
        }),
        t
      );
    });
  var qu = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    mo = function s(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Le.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === qt && s(fe, t);
    },
    Rn = { auto: 1, scroll: 1 },
    jp = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        n = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = n._gsap || H.core.getCache(n),
        o = ot(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== fe &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(Rn[(l = Jt(n)).overflowY] || Rn[l.overflowX]));

        )
          n = n.parentNode;
        (a._isScroll =
          n &&
          n !== i &&
          !dr(n) &&
          (Rn[(l = Jt(n)).overflowY] || Rn[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Vu = function (e, t, i, r) {
      return Le.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && jp),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Ge(ve, Le.eventTypes[0], Wu, !1, !0);
        },
        onDisable: function () {
          return je(ve, Le.eventTypes[0], Wu, !0);
        },
      });
    },
    Up = /(input|label|select|textarea)/i,
    Hu,
    Wu = function (e) {
      var t = Up.test(e.target.tagName);
      (t || Hu) && ((e._gsapAllow = !0), (Hu = t));
    },
    Kp = function (e) {
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
        u = At(e.target) || qt,
        c = H.core.globals().ScrollSmoother,
        h = c && c.get(),
        m =
          ji &&
          ((e.content && At(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = Gi(u, qe),
        f = Gi(u, _t),
        d = 1,
        g =
          (Le.isTouch && re.visualViewport
            ? re.visualViewport.scale * re.visualViewport.width
            : re.outerWidth) / re.innerWidth,
        _ = 0,
        y = lt(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        v,
        w,
        D = Vu(u, e.type, !0, n),
        x = function () {
          return (w = !1);
        },
        b = mi,
        T = mi,
        E = function () {
          (l = gi(u, qe)),
            (T = Ts(ji ? 1 : 0, l)),
            i && (b = Ts(0, gi(u, _t))),
            (v = vr);
        },
        S = function () {
          (m._gsap.y = Ps(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        L = function () {
          if (w) {
            requestAnimationFrame(x);
            var O = Ps(o.deltaY / 2),
              A = T(p.v - O);
            if (m && A !== p.v + p.offset) {
              p.offset = A - p.v;
              var C = Ps((parseFloat(m && m._gsap.y) || 0) - p.offset);
              (m.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                C +
                ", 0, 1)"),
                (m._gsap.y = C + "px"),
                (p.cacheID = ie.cache),
                Ai();
            }
            return !0;
          }
          p.offset && S(), (w = !0);
        },
        P,
        k,
        F,
        R,
        I = function () {
          E(),
            P.isActive() &&
              P.vars.scrollY > l &&
              (p() > l ? P.progress(1) && p(l) : P.resetTo("scrollY", l));
        };
      return (
        m && H.set(m, { y: "+=0" }),
        (e.ignoreCheck = function (M) {
          return (
            (ji && M.type === "touchmove" && L()) ||
            (d > 1.05 && M.type !== "touchstart") ||
            o.isGesturing ||
            (M.touches && M.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          w = !1;
          var M = d;
          (d = Ps(((re.visualViewport && re.visualViewport.scale) || 1) / g)),
            P.pause(),
            M !== d && mo(u, d > 1.01 ? !0 : i ? !1 : "x"),
            (k = f()),
            (F = p()),
            E(),
            (v = vr);
        }),
        (e.onRelease = e.onGestureStart =
          function (M, O) {
            if ((p.offset && S(), !O)) R.restart(!0);
            else {
              ie.cache++;
              var A = y(),
                C,
                W;
              i &&
                ((C = f()),
                (W = C + (A * 0.05 * -M.velocityX) / 0.227),
                (A *= qu(f, C, W, gi(u, _t))),
                (P.vars.scrollX = b(W))),
                (C = p()),
                (W = C + (A * 0.05 * -M.velocityY) / 0.227),
                (A *= qu(p, C, W, gi(u, qe))),
                (P.vars.scrollY = T(W)),
                P.invalidate().duration(A).play(0.01),
                ((ji && P.vars.scrollY >= l) || C >= l - 1) &&
                  H.to({}, { onUpdate: I, duration: A });
            }
            a && a(M);
          }),
        (e.onWheel = function () {
          P._ts && P.pause(), ot() - _ > 1e3 && ((v = 0), (_ = ot()));
        }),
        (e.onChange = function (M, O, A, C, W) {
          if (
            (vr !== v && E(),
            O && i && f(b(C[2] === O ? k + (M.startX - M.x) : f() + O - C[1])),
            A)
          ) {
            p.offset && S();
            var Q = W[2] === A,
              we = Q ? F + M.startY - M.y : p() + A - W[1],
              se = T(we);
            Q && we !== se && (F += se - we), p(se);
          }
          (A || O) && Ai();
        }),
        (e.onEnable = function () {
          mo(u, i ? !1 : "x"),
            Y.addEventListener("refresh", I),
            Ge(re, "resize", I),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = f.smooth = !1)),
            D.enable();
        }),
        (e.onDisable = function () {
          mo(u, !0),
            je(re, "resize", I),
            Y.removeEventListener("refresh", I),
            D.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Le(e)),
        (o.iOS = ji),
        ji && !p() && p(1),
        ji && H.ticker.add(mi),
        (R = o._dc),
        (P = H.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Bu(p, p(), function () {
              return P.pause();
            }),
          },
          onUpdate: Ai,
          onComplete: R.vars.onComplete,
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
      return new Le(s);
    }),
    (Y.normalizeScroll = function (s) {
      if (typeof s == "undefined") return Dt;
      if (s === !0 && Dt) return Dt.enable();
      if (s === !1) {
        Dt && Dt.kill(), (Dt = s);
        return;
      }
      var e = s instanceof Le ? s : Kp(s);
      return (
        Dt && Dt.target === e.target && Dt.kill(), dr(e.target) && (Dt = e), e
      );
    }),
    (Y.core = {
      _getVelocityProp: Xa,
      _inputObserver: Vu,
      _scrollers: ie,
      _proxies: hi,
      bridge: {
        ss: function () {
          Zt || gr("scrollStart"), (Zt = ot());
        },
        ref: function () {
          return at;
        },
      },
    }),
    bu() && H.registerPlugin(Y),
    q.registerPlugin(Y);
  class _r {
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
          let a = _r.attr(100, e.getAttribute("marquee-speed")),
            o = _r.attr(!1, e.getAttribute("marquee-vertical")),
            l = _r.attr(!1, e.getAttribute("marquee-reverse")),
            u = _r.attr(!1, e.getAttribute("marquee-scrolldirection")),
            c = _r.attr(!1, e.getAttribute("marquee-scrollscrub")),
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
            onUpdate: (_) => {
              if (
                !p &&
                (u &&
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
                n.forEach((w) => w.setAttribute("marquee-status", "paused")))
              : (v.fromTo(y, { value: 0 }, { value: m, duration: 0.5 }),
                n.forEach((w) => w.setAttribute("marquee-status", "playing")));
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
  function Bs() {
    new _r();
  }
  class Zp {
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
  function Ns() {
    new Zp();
  }
  q.registerPlugin(Y);
  const Qp = () => {
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
        u = e.querySelector("[service-intro='eyebrow']"),
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
        w = e.querySelector("[service-header='interactive']"),
        D = e.querySelector("[service-video-trigger='interactive']"),
        x = document.querySelector("[visual-wrap='interactive']"),
        b = document.querySelectorAll("[service-list-item='wrapper']"),
        T = document.querySelectorAll("[service-list-item='3d']"),
        E = document.querySelectorAll("[service-list-icon='3d']");
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
          u,
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
          E,
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
          E,
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
          [v, w, D],
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
    Jp = () => {
      Qp();
    },
    eh = () => {
      Jp();
    };
  var th = "1.2.3";
  function Yu(s, e, t) {
    return Math.max(s, Math.min(e, t));
  }
  function ih(s, e, t) {
    return (1 - t) * s + t * e;
  }
  function rh(s, e, t, i) {
    return ih(s, e, 1 - Math.exp(-t * i));
  }
  function sh(s, e) {
    return ((s % e) + e) % e;
  }
  var nh = class {
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
        const i = Yu(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = rh(this.value, this.to, this.lerp * 60, s)),
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
  function ah(s, e) {
    let t;
    return function (...i) {
      let r = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), s.apply(r, i);
        }, e));
    };
  }
  var oh = class {
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
            ((this.debouncedResize = ah(this.resize, i)),
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
    Xu = class {
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
    Gu = 100 / 6,
    Ui = { passive: !1 },
    lh = class {
      constructor(s, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        X(this, "touchStart", { x: 0, y: 0 });
        X(this, "lastDelta", { x: 0, y: 0 });
        X(this, "window", { width: 0, height: 0 });
        X(this, "emitter", new Xu());
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
          const r = i === 1 ? Gu : i === 2 ? this.window.width : 1,
            n = i === 1 ? Gu : i === 2 ? this.window.height : 1;
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
          this.element.addEventListener("wheel", this.onWheel, Ui),
          this.element.addEventListener("touchstart", this.onTouchStart, Ui),
          this.element.addEventListener("touchmove", this.onTouchMove, Ui),
          this.element.addEventListener("touchend", this.onTouchEnd, Ui);
      }
      on(s, e) {
        return this.emitter.on(s, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Ui),
          this.element.removeEventListener("touchstart", this.onTouchStart, Ui),
          this.element.removeEventListener("touchmove", this.onTouchMove, Ui),
          this.element.removeEventListener("touchend", this.onTouchEnd, Ui);
      }
    },
    uh = class {
      constructor({
        wrapper: s = window,
        content: e = document.documentElement,
        eventsTarget: t = s,
        smoothWheel: i = !0,
        syncTouch: r = !1,
        syncTouchLerp: n = 0.075,
        touchInertiaMultiplier: a = 35,
        duration: o,
        easing: l = (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
        lerp: u = 0.1,
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
        anchors: w = !1,
        __experimental__naiveDimensions: D = !1,
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
        X(this, "animate", new nh());
        X(this, "emitter", new Xu());
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
          let u = i.composedPath();
          u = u.slice(0, u.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            u.find((g) => {
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
        (window.lenisVersion = th),
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
            lerp: u,
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
            anchors: w,
            __experimental__naiveDimensions: D,
          }),
          (this.dimensions = new oh(s, e, { autoResize: d })),
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
          (this.virtualScroll = new lh(t, {
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
          force: u = !1,
          programmatic: c = !0,
          userData: h,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !u)) {
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
                : (s = Yu(0, s, this.limit)),
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
          ? sh(this.animatedScroll, this.limit)
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
  let $n;
  const ch = () => {
      ($n = new uh({ autoRaf: !0 })),
        $n.on("scroll", Y.update),
        q.ticker.add((s) => {
          $n.raf(s * 1e3);
        }),
        q.ticker.lagSmoothing(0);
    },
    dh = () => {
      ch();
    },
    ut = () => $n;
  q.registerPlugin(Y);
  const fh = () => {
      const s = document.querySelectorAll('[hero-parallax="visual"]'),
        e = document.querySelector('[hero-parallax="header"]');
      if (!s.length && !e) return;
      const t = ut == null ? void 0 : ut();
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
    ph = () => {
      fh();
    },
    hh = () => {
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
          const u = ut();
          e === n ? (l(), u.start()) : (o(), u.stop());
        }),
          a.addEventListener("click", () => {
            e === n && (l(), ut().start());
          });
      }),
        document.addEventListener("keydown", (i) => {
          i.key === "Escape" && e && (t(e, "close"), ut().start(), (e = null));
        });
    },
    mh = () => {
      hh();
    };
  /*!
   * strings: 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var gh =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function ju(s) {
    var e = s.nodeType,
      t = "";
    if (e === 1 || e === 9 || e === 11) {
      if (typeof s.textContent == "string") return s.textContent;
      for (s = s.firstChild; s; s = s.nextSibling) t += ju(s);
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
   */ var Kr,
    go,
    Uu,
    qs,
    Ku,
    Bn,
    vh = /(?:\r|\n|\t\t)/g,
    yh = /(?:\s\s+)/g,
    _h = " ",
    Zu = function (e) {
      (Kr = document),
        (go = window),
        (qs =
          qs ||
          e ||
          go.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")),
        qs &&
          ((Bn = qs.utils.toArray),
          (Ku = qs.core.context || function () {}),
          (Uu = 1));
    },
    Qu = function (e) {
      return go.getComputedStyle(e);
    },
    vo = function (e) {
      return e.position === "absolute" || e.absolute === !0;
    },
    wh = function (e, t) {
      for (var i = t.length, r; --i > -1; )
        if (((r = t[i]), e.substr(0, r.length) === r)) return r.length;
    },
    Dh = " style='position:relative;display:inline-block;'",
    Ju = function (e, t) {
      e === void 0 && (e = "");
      var i = ~e.indexOf("++"),
        r = 1;
      return (
        i && (e = e.split("++").join("")),
        function () {
          return (
            "<" + t + Dh + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
          );
        }
      );
    },
    ec = function s(e, t, i) {
      var r = e.nodeType;
      if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling) s(e, t, i);
      else (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(t).join(i));
    },
    yo = function (e, t) {
      for (var i = t.length; --i > -1; ) e.push(t[i]);
    },
    tc = function (e, t, i) {
      for (var r; e && e !== t; ) {
        if (((r = e._next || e.nextSibling), r))
          return r.textContent.charAt(0) === i;
        e = e.parentNode || e._parent;
      }
    },
    bh = function s(e) {
      var t = Bn(e.childNodes),
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
    vi = function (e, t) {
      return parseFloat(t[e]) || 0;
    },
    Sh = function (e, t, i, r, n, a, o) {
      var l = Qu(e),
        u = vi("paddingLeft", l),
        c = -999,
        h = vi("borderBottomWidth", l) + vi("borderTopWidth", l),
        m = vi("borderLeftWidth", l) + vi("borderRightWidth", l),
        p = vi("paddingTop", l) + vi("paddingBottom", l),
        f = vi("paddingLeft", l) + vi("paddingRight", l),
        d = vi("fontSize", l) * (t.lineThreshold || 0.2),
        g = l.textAlign,
        _ = [],
        y = [],
        v = [],
        w = t.wordDelimiter || " ",
        D = t.tag ? t.tag : t.span ? "span" : "div",
        x = t.type || t.split || "chars,words,lines",
        b = n && ~x.indexOf("lines") ? [] : null,
        T = ~x.indexOf("words"),
        E = ~x.indexOf("chars"),
        S = vo(t),
        L = t.linesClass,
        P = ~(L || "").indexOf("++"),
        k = [],
        F = l.display === "flex",
        R = e.style.display,
        I,
        M,
        O,
        A,
        C,
        W,
        Q,
        we,
        se,
        $,
        B,
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
            (W = A.parentNode === e),
            (W || S || (E && !T)) &&
              ((N = A.offsetTop),
              b &&
                W &&
                Math.abs(N - c) > d &&
                (A.nodeName !== "BR" || I === 0) &&
                ((Q = []), b.push(Q), (c = N)),
              S &&
                ((A._x = A.offsetLeft),
                (A._y = N),
                (A._w = A.offsetWidth),
                (A._h = A.offsetHeight)),
              b &&
                (((A._isSplit && W) ||
                  (!E && W) ||
                  (T && W) ||
                  (!T &&
                    A.parentNode.parentNode === e &&
                    !A.parentNode._isSplit)) &&
                  (Q.push(A), (A._x -= u), tc(A, e, w) && (A._wordEnd = !0)),
                A.nodeName === "BR" &&
                  ((A.nextSibling && A.nextSibling.nodeName === "BR") ||
                    I === 0) &&
                  b.push([])));
      for (I = 0; I < O; I++) {
        if (((A = C[I]), (W = A.parentNode === e), A.nodeName === "BR")) {
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
            !T && !W && ((A._x += A.parentNode._x), (A._y += A.parentNode._y)),
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
                O--)
              : W ||
                ((N = !A.nextSibling && tc(A.parentNode, e, w)),
                A.parentNode._parent && A.parentNode._parent.appendChild(A),
                N && A.parentNode.appendChild(Kr.createTextNode(" ")),
                D === "span" && (A.style.display = "inline"),
                _.push(A));
        else
          A.parentNode._isSplit && !A._isSplit && A.innerHTML !== ""
            ? y.push(A)
            : E &&
              !A._isSplit &&
              (D === "span" && (A.style.display = "inline"), _.push(A));
      }
      for (I = k.length; --I > -1; ) k[I].parentNode.removeChild(k[I]);
      if (b) {
        for (
          S &&
            (($ = Kr.createElement(D)),
            e.appendChild($),
            (B = $.offsetWidth + "px"),
            (N = $.offsetParent === e ? 0 : e.offsetLeft),
            e.removeChild($)),
            se = e.style.cssText,
            e.style.cssText = "display:none;";
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (we = w === " " && (!S || (!T && !E)), I = 0; I < b.length; I++) {
          for (
            Q = b[I],
              $ = Kr.createElement(D),
              $.style.cssText =
                "display:block;text-align:" +
                g +
                ";position:" +
                (S ? "absolute;" : "relative;"),
              L && ($.className = L + (P ? I + 1 : "")),
              v.push($),
              O = Q.length,
              M = 0;
            M < O;
            M++
          )
            Q[M].nodeName !== "BR" &&
              ((A = Q[M]),
              $.appendChild(A),
              we && A._wordEnd && $.appendChild(Kr.createTextNode(" ")),
              S &&
                (M === 0 &&
                  (($.style.top = A._y + "px"), ($.style.left = u + N + "px")),
                (A.style.top = "0px"),
                N && (A.style.left = A._x - N + "px")));
          O === 0
            ? ($.innerHTML = "&nbsp;")
            : !T && !E && (bh($), ec($, " ", " ")),
            S && (($.style.width = B), ($.style.height = A._h + "px")),
            e.appendChild($);
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
        yo(i, _),
        T && yo(r, y),
        yo(n, v);
    },
    Eh = function (e, t, i, r) {
      var n = t.tag ? t.tag : t.span ? "span" : "div",
        a = t.type || t.split || "chars,words,lines",
        o = ~a.indexOf("chars"),
        l = vo(t),
        u = t.wordDelimiter || " ",
        c = function (S) {
          return S === u || (S === _h && u === " ");
        },
        h = u !== " " ? "" : l ? "&#173; " : " ",
        m = "</" + n + ">",
        p = 1,
        f = t.specialChars
          ? typeof t.specialChars == "function"
            ? t.specialChars
            : wh
          : null,
        d,
        g,
        _,
        y,
        v,
        w,
        D,
        x,
        b = Kr.createElement("div"),
        T = e.parentNode;
      for (
        T.insertBefore(b, e),
          b.textContent = e.nodeValue,
          T.removeChild(e),
          e = b,
          d = ju(e),
          D = d.indexOf("<") !== -1,
          t.reduceWhiteSpace !== !1 && (d = d.replace(yh, " ").replace(vh, "")),
          D && (d = d.split("<").join("{{LT}}")),
          v = d.length,
          g = (d.charAt(0) === " " ? h : "") + i(),
          _ = 0;
        _ < v;
        _++
      )
        if (((w = d.charAt(_)), f && (x = f(d.substr(_), t.specialChars))))
          (w = d.substr(_, x || 1)),
            (g += o && w !== " " ? r() + w + "</" + n + ">" : w),
            (_ += x - 1);
        else if (c(w) && !c(d.charAt(_ - 1)) && _) {
          for (g += p ? m : "", p = 0; c(d.charAt(_ + 1)); ) (g += h), _++;
          _ === v - 1
            ? (g += h)
            : d.charAt(_ + 1) !== ")" && ((g += h + i()), (p = 1));
        } else
          w === "{" && d.substr(_, 6) === "{{LT}}"
            ? ((g += o ? r() + "{{LT}}</" + n + ">" : "{{LT}}"), (_ += 5))
            : (w.charCodeAt(0) >= 55296 && w.charCodeAt(0) <= 56319) ||
              (d.charCodeAt(_ + 1) >= 65024 && d.charCodeAt(_ + 1) <= 65039)
            ? ((y = ((d.substr(_, 12).split(gh) || [])[1] || "").length || 2),
              (g +=
                o && w !== " "
                  ? r() + d.substr(_, y) + "</" + n + ">"
                  : d.substr(_, y)),
              (_ += y - 1))
            : (g += o && w !== " " ? r() + w + "</" + n + ">" : w);
      (e.outerHTML = g + (p ? m : "")), D && ec(T, "{{LT}}", "<");
    },
    xh = function s(e, t, i, r) {
      var n = Bn(e.childNodes),
        a = n.length,
        o = vo(t),
        l,
        u;
      if (e.nodeType !== 3 || a > 1) {
        for (t.absolute = !1, l = 0; l < a; l++)
          (u = n[l]),
            (u._next = u._isFirst = u._parent = u._wordEnd = null),
            (u.nodeType !== 3 || /\S+/.test(u.nodeValue)) &&
              (o &&
                u.nodeType !== 3 &&
                Qu(u).display === "inline" &&
                ((u.style.display = "inline-block"),
                (u.style.position = "relative")),
              (u._isSplit = !0),
              s(u, t, i, r));
        (t.absolute = o), (e._isSplit = !0);
        return;
      }
      Eh(e, t, i, r);
    },
    yi = (function () {
      function s(t, i) {
        Uu || Zu(),
          (this.elements = Bn(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = i || {}),
          Ku(this),
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
              a = Ju(i.wordsClass, n),
              o = Ju(i.charsClass, n),
              l,
              u,
              c;
            --r > -1;

          )
            (c = this.elements[r]),
              (this._originals[r] = {
                html: c.innerHTML,
                style: c.getAttribute("style"),
              }),
              (l = c.clientHeight),
              (u = c.clientWidth),
              xh(c, i, a, o),
              Sh(c, i, this.chars, this.words, this.lines, u, l);
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
  (yi.version = "3.12.7"), (yi.register = Zu), q.registerPlugin(Y, yi);
  const Th = () => {
      document.querySelectorAll("[list-enter='wrap']").forEach((e) => {
        e.querySelectorAll("[list-enter='item']").forEach((i) => {
          const r = i.querySelector("[list-enter='icon']"),
            n = i.querySelector("[list-enter='text']"),
            a = i.querySelector("[list-enter='line']"),
            o = new yi(n, { type: "lines", linesClass: "split-line" });
          o.lines.forEach((l) => {
            const u = document.createElement("div");
            u.classList.add("line-wrapper"),
              (u.style.overflow = "hidden"),
              l.parentNode.insertBefore(u, l),
              u.appendChild(l);
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
    Ch = () => {
      Th();
    },
    Mh = () => {
      console.log("homeInit"), as(), Bs(), Ns(), eh(), ph(), mh(), Ch();
    },
    Ph = () => {
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
          const u = q.timeline({ paused: !0 }),
            c = q.timeline({ paused: !0 });
          u.to(t, {
            opacity: 1,
            pointerEvents: "auto",
            visibility: "visible",
            display: "block",
            ease: "expo.out",
            duration: 0.6,
          }),
            u.to(
              r,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "expo.inOut",
                duration: 1.2,
              },
              "-=0.75"
            ),
            u.to(
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
              u.restart();
              const m = ut();
              m && m.stop();
            }),
            l.forEach((m) => {
              m.addEventListener("click", () => {
                c.restart();
                const p = ut();
                p && p.start();
              });
            });
        });
    },
    Ah = () => {
      Ph();
    };
  q.registerPlugin(Y);
  const Fh = () => {
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
    Oh = () => {
      Fh();
    };
  q.registerPlugin(Y, yi);
  const Lh = () => {
      document.querySelectorAll("[rollover-text='wrap']").forEach((e) => {
        const t = e.querySelector("[rollover-text='wrap-rel']"),
          i =
            t == null ? void 0 : t.querySelector("[rollover-text='text-rel']"),
          r = e.querySelector("[rollover-text='wrap-ab']"),
          n = r == null ? void 0 : r.querySelector("[rollover-text='text-ab']");
        if (!t || !i || !r || !n) return;
        const a = new yi(i, { type: "chars" }),
          o = new yi(n, { type: "chars" }),
          l = 1.8,
          u = "expo.inOut",
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
        p.to(a.chars, { yPercent: h, ease: u, duration: l, stagger: c }, 0),
          p.to(o.chars, { yPercent: m, ease: u, duration: l, stagger: c }, 0);
      });
    },
    kh = () => {
      Lh();
    },
    Ih = () => {
      as(), Bs(), Ns(), Ah(), Oh(), kh();
    },
    ic = (s) => document.querySelector(s),
    zh = (s) => document.querySelectorAll(s),
    Rh = (s, e) => s.classList.add(e),
    $h = () => {
      const s = ic(".contact-form");
      s &&
        s.addEventListener("submit", (e) => {
          e.preventDefault(), console.log("Form submitted!");
        });
    },
    Bh = () => {
      document.querySelectorAll('[filter-list="group"]').forEach((e) => {
        const t = e.querySelector('[filter-item="current"]'),
          i = e.querySelector("[list-filter='toggle']"),
          r = e.querySelector("[list-filter='dropdown-wrap']"),
          n = e.querySelectorAll("[list-filter='dropdown-option']"),
          a = e.querySelectorAll("[list-filter='target-item']"),
          o = 300,
          l = new Set(),
          u = (f, d) => {
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
            u(i, "not-active"),
              u(r, "not-active"),
              n.forEach((v) => {
                const w = v.getAttribute("filter-target") === f;
                u(v, w ? "active" : "not-active");
              });
            const g = e.querySelector(`[filter-target="${f}"]`);
            g && (t.textContent = g.textContent);
            let _ = 0,
              y = 0;
            a.forEach((v) => {
              v.getAttribute("filter-status") === "active" &&
                (_++,
                l.add(v),
                u(v, "transition-out"),
                setTimeout(() => {
                  v.getAttribute("filter-status") === "transition-out" &&
                    (u(v, "not-active"),
                    l.delete(v),
                    y++,
                    y === _ &&
                      a.forEach((D) => {
                        const x = c(D);
                        (d === "all" || x.includes(d)) &&
                          (l.add(D),
                          u(D, "transition-in"),
                          D.offsetHeight,
                          setTimeout(() => {
                            D.getAttribute("filter-status") ===
                              "transition-in" && u(D, "active"),
                              l.delete(D);
                          }, o));
                      }));
                }, o));
            }),
              _ === 0 &&
                a.forEach((v) => {
                  const w = c(v);
                  (d === "all" || w.includes(d)) &&
                    v.getAttribute("filter-status") === "not-active" &&
                    (l.add(v),
                    u(v, "transition-in"),
                    v.offsetHeight,
                    setTimeout(() => {
                      v.getAttribute("filter-status") === "transition-in" &&
                        u(v, "active"),
                        l.delete(v);
                    }, o));
                });
          },
          m = "all";
        a.forEach((f) => {
          c(f), u(f, "active");
        }),
          n.forEach((f) => {
            const d = f.getAttribute("filter-target") === m;
            u(f, d ? "active" : "not-active");
          }),
          u(i, "not-active"),
          u(r, "not-active"),
          i.addEventListener("click", () => {
            const f = i.getAttribute("filter-status") === "active";
            u(i, f ? "not-active" : "active"),
              u(r, f ? "not-active" : "active");
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
    Nh = () => {
      Bh();
    },
    qh = () => {
      as(), Bs(), Ns(), Nh();
    };
  q.registerPlugin(Y);
  const Vh = () => {
      const s = document.querySelectorAll('[hero-parallax-sm="visual"]'),
        e = document.querySelector('[hero-parallax-sm="header"]');
      if (!s.length && !e) return;
      const t = ut == null ? void 0 : ut();
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
    Hh = () => {
      Vh();
    },
    Wh = () => {
      console.log("blogcmsInit"), as(), Bs(), Ns(), Hh();
    },
    Yh = () => {
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
              u = l.querySelector("[work-accordion='content-layout']"),
              c = u.offsetHeight;
            let h = !1;
            q.set(u, { opacity: 0, yPercent: 5 }),
              t.addEventListener("click", () => {
                const m = q.timeline();
                h
                  ? (m.to(l, { height: 0, duration: 0.9, ease: "expo.inOut" }),
                    m.to(
                      u,
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
                      u,
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
                      { height: c, duration: 1.2, ease: "expo.inOut" },
                      "<"
                    )),
                  (h = !h);
              });
          });
    },
    Xh = () => {
      Yh();
    },
    Gh = {
      home: Mh,
      about: Ih,
      contact: $h,
      work: qh,
      blog_cms: Wh,
      work_cms: () => {
        console.log("workcmsInit"), as(), Bs(), Ns(), Xh();
      },
    },
    jh = () => {
      const s = document.querySelector("[data-page]"),
        e = s ? s.dataset.page : null,
        t = Gh[e];
      t ? t() : console.log(`No specific script for route: ${e}`);
    },
    Uh = () => {
      zh(".footer-accordion").forEach((e) => {
        const t = e.querySelector(".accordion-trigger"),
          i = e.querySelector(".accordion-content");
        !t ||
          !i ||
          t.addEventListener("click", () => {
            i.style.height = i.style.height ? "" : `${i.scrollHeight}px`;
          });
      });
    },
    Kh = () => {
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
  const Zh = () => {
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
          e.forEach((l, u) => {
            const c = l.querySelector('[nav-link="text"]'),
              h = l.querySelector('[nav-link="text-wrap"]'),
              m = l.querySelector('[nav-link="line"]');
            r.push(c), n.push(m);
            const p = document.querySelector('[line-top][nav-link="line"]'),
              f = document.querySelector('[line-middle][nav-link="line"]'),
              d = document.querySelector('[line-bottom][nav-link="line"]'),
              g = h.offsetHeight;
            if (!c || !h) return;
            q.set(c, { clearProps: "all" }),
              q.set(h, { clearProps: "all" }),
              q.set(l, { clearProps: "all" }),
              q.set(m, { clearProps: "all" }),
              q.set(p, { clearProps: "all" }),
              q.set(f, { clearProps: "all" }),
              q.set(d, { clearProps: "all" }),
              h.offsetHeight,
              l.offsetWidth;
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
              v = Y.create({
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
            i.forEach((l) => l.kill()),
            window.removeEventListener("resize", a);
        }
      );
    },
    Qh = () => Zh(),
    Jh = () => {
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
            const u = ut();
            u && u.stop();
          });
        }),
        e.forEach((l) => {
          l.addEventListener("click", () => {
            o.restart();
            const u = ut();
            u && u.start();
          });
        });
    },
    em = () => {
      Jh();
    };
  q.registerPlugin(Y);
  const tm = () => {
      const s = document.querySelectorAll("[visual-parallax]");
      if (!s.length) return;
      const e = ut == null ? void 0 : ut();
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
    im = () => {
      tm();
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
  function rm(s, e) {
    if (!(s instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function rc(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function sc(s, e, t) {
    return e && rc(s.prototype, e), t && rc(s, t), s;
  }
  function sm(s, e, t) {
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
  function nc(s, e) {
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
  function ac(s) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? nc(Object(t), !0).forEach(function (i) {
            sm(s, i, t[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
        : nc(Object(t)).forEach(function (i) {
            Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(t, i));
          });
    }
    return s;
  }
  function oc(s, e) {
    return am(s) || lm(s, e) || lc(s, e) || cm();
  }
  function St(s) {
    return nm(s) || om(s) || lc(s) || um();
  }
  function nm(s) {
    if (Array.isArray(s)) return _o(s);
  }
  function am(s) {
    if (Array.isArray(s)) return s;
  }
  function om(s) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(s))
      return Array.from(s);
  }
  function lm(s, e) {
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
  function lc(s, e) {
    if (s) {
      if (typeof s == "string") return _o(s, e);
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
        return _o(s, e);
    }
  }
  function _o(s, e) {
    (e == null || e > s.length) && (e = s.length);
    for (var t = 0, i = new Array(e); t < e; t++) i[t] = s[t];
    return i;
  }
  function um() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function cm() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function wr(s, e) {
    return Object.getOwnPropertyNames(Object(s)).reduce(function (t, i) {
      var r = Object.getOwnPropertyDescriptor(Object(s), i),
        n = Object.getOwnPropertyDescriptor(Object(e), i);
      return Object.defineProperty(t, i, n || r);
    }, {});
  }
  function Vs(s) {
    return typeof s == "string";
  }
  function wo(s) {
    return Array.isArray(s);
  }
  function Nn() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = wr(s),
      t;
    return (
      e.types !== void 0 ? (t = e.types) : e.split !== void 0 && (t = e.split),
      t !== void 0 &&
        (e.types = (Vs(t) || wo(t) ? String(t) : "")
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
  function Do(s) {
    var e = Vs(s) || wo(s) ? String(s) : "";
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
  function dm(s) {
    return qn(s) && /^(1|3|11)$/.test(s.nodeType);
  }
  function fm(s) {
    return typeof s == "number" && s > -1 && s % 1 === 0;
  }
  function pm(s) {
    return qn(s) && fm(s.length);
  }
  function Dr(s) {
    return wo(s)
      ? s
      : s == null
      ? []
      : pm(s)
      ? Array.prototype.slice.call(s)
      : [s];
  }
  function uc(s) {
    var e = s;
    return (
      Vs(s) &&
        (/^(#[a-z]\w+)$/.test(s.trim())
          ? (e = document.getElementById(s.trim().slice(1)))
          : (e = document.querySelectorAll(s))),
      Dr(e).reduce(function (t, i) {
        return [].concat(St(t), St(Dr(i).filter(dm)));
      }, [])
    );
  }
  var hm = Object.entries,
    Vn = "_splittype",
    ri = {},
    mm = 0;
  function _i(s, e, t) {
    if (!qn(s)) return console.warn("[data.set] owner is not an object"), null;
    var i = s[Vn] || (s[Vn] = ++mm),
      r = ri[i] || (ri[i] = {});
    return (
      t === void 0
        ? e &&
          Object.getPrototypeOf(e) === Object.prototype &&
          (ri[i] = ac(ac({}, r), e))
        : e !== void 0 && (r[e] = t),
      t
    );
  }
  function br(s, e) {
    var t = qn(s) ? s[Vn] : null,
      i = (t && ri[t]) || {};
    return i;
  }
  function cc(s) {
    var e = s && s[Vn];
    e && (delete s[e], delete ri[e]);
  }
  function gm() {
    Object.keys(ri).forEach(function (s) {
      delete ri[s];
    });
  }
  function vm() {
    hm(ri).forEach(function (s) {
      var e = oc(s, 2),
        t = e[0],
        i = e[1],
        r = i.isRoot,
        n = i.isSplit;
      (!r || !n) && ((ri[t] = null), delete ri[t]);
    });
  }
  function ym(s) {
    var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
      t = s ? String(s) : "";
    return t.trim().replace(/\s+/g, " ").split(e);
  }
  var bo = "\\ud800-\\udfff",
    dc = "\\u0300-\\u036f\\ufe20-\\ufe23",
    fc = "\\u20d0-\\u20f0",
    pc = "\\ufe0e\\ufe0f",
    _m = "[".concat(bo, "]"),
    So = "[".concat(dc).concat(fc, "]"),
    Eo = "\\ud83c[\\udffb-\\udfff]",
    wm = "(?:".concat(So, "|").concat(Eo, ")"),
    hc = "[^".concat(bo, "]"),
    mc = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    gc = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    vc = "\\u200d",
    yc = "".concat(wm, "?"),
    _c = "[".concat(pc, "]?"),
    Dm = "(?:" + vc + "(?:" + [hc, mc, gc].join("|") + ")" + _c + yc + ")*",
    bm = _c + yc + Dm,
    Sm = "(?:".concat(
      ["".concat(hc).concat(So, "?"), So, mc, gc, _m].join("|"),
      `
)`
    ),
    Em = RegExp(
      "".concat(Eo, "(?=").concat(Eo, ")|").concat(Sm).concat(bm),
      "g"
    ),
    xm = [vc, bo, dc, fc, pc],
    Tm = RegExp("[".concat(xm.join(""), "]"));
  function Cm(s) {
    return s.split("");
  }
  function wc(s) {
    return Tm.test(s);
  }
  function Mm(s) {
    return s.match(Em) || [];
  }
  function Pm(s) {
    return wc(s) ? Mm(s) : Cm(s);
  }
  function Am(s) {
    return s == null ? "" : String(s);
  }
  function Fm(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (s = Am(s)), s && Vs(s) && !e && wc(s) ? Pm(s) : s.split(e);
  }
  function xo(s, e) {
    var t = document.createElement(s);
    return (
      e &&
        Object.keys(e).forEach(function (i) {
          var r = e[i],
            n = Vs(r) ? r.trim() : r;
          n === null ||
            n === "" ||
            (i === "children"
              ? t.append.apply(t, St(Dr(n)))
              : t.setAttribute(i, n));
        }),
      t
    );
  }
  var To = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function Om(s, e) {
    e = wr(To, e);
    var t = Do(e.types),
      i = e.tagName,
      r = s.nodeValue,
      n = document.createDocumentFragment(),
      a = [],
      o = [];
    return (
      /^\s/.test(r) && n.append(" "),
      (a = ym(r).reduce(function (l, u, c, h) {
        var m, p;
        return (
          t.chars &&
            (p = Fm(u).map(function (f) {
              var d = xo(i, {
                class: "".concat(e.splitClass, " ").concat(e.charClass),
                style: "display: inline-block;",
                children: f,
              });
              return _i(d, "isChar", !0), (o = [].concat(St(o), [d])), d;
            })),
          t.words || t.lines
            ? ((m = xo(i, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; ".concat(
                  t.words && e.absolute ? "position: relative;" : ""
                ),
                children: t.chars ? p : u,
              })),
              _i(m, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
              n.appendChild(m))
            : p.forEach(function (f) {
                n.appendChild(f);
              }),
          c < h.length - 1 && n.append(" "),
          t.words ? l.concat(m) : l
        );
      }, [])),
      /\s$/.test(r) && n.append(" "),
      s.replaceWith(n),
      { words: a, chars: o }
    );
  }
  function Dc(s, e) {
    var t = s.nodeType,
      i = { words: [], chars: [] };
    if (!/(1|3|11)/.test(t)) return i;
    if (t === 3 && /\S/.test(s.nodeValue)) return Om(s, e);
    var r = Dr(s.childNodes);
    if (r.length && (_i(s, "isSplit", !0), !br(s).isRoot)) {
      (s.style.display = "inline-block"), (s.style.position = "relative");
      var n = s.nextSibling,
        a = s.previousSibling,
        o = s.textContent || "",
        l = n ? n.textContent : " ",
        u = a ? a.textContent : " ";
      _i(s, {
        isWordEnd: /\s$/.test(o) || /^\s/.test(l),
        isWordStart: /^\s/.test(o) || /\s$/.test(u),
      });
    }
    return r.reduce(function (c, h) {
      var m = Dc(h, e),
        p = m.words,
        f = m.chars;
      return {
        words: [].concat(St(c.words), St(p)),
        chars: [].concat(St(c.chars), St(f)),
      };
    }, i);
  }
  function Lm(s, e, t, i) {
    if (!t.absolute) return { top: e ? s.offsetTop : null };
    var r = s.offsetParent,
      n = oc(i, 2),
      a = n[0],
      o = n[1],
      l = 0,
      u = 0;
    if (r && r !== document.body) {
      var c = r.getBoundingClientRect();
      (l = c.x + a), (u = c.y + o);
    }
    var h = s.getBoundingClientRect(),
      m = h.width,
      p = h.height,
      f = h.x,
      d = h.y,
      g = d + o - u,
      _ = f + a - l;
    return { width: m, height: p, top: g, left: _ };
  }
  function bc(s) {
    br(s).isWord
      ? (cc(s), s.replaceWith.apply(s, St(s.childNodes)))
      : Dr(s.children).forEach(function (e) {
          return bc(e);
        });
  }
  var km = function () {
    return document.createDocumentFragment();
  };
  function Im(s, e, t) {
    var i = Do(e.types),
      r = e.tagName,
      n = s.getElementsByTagName("*"),
      a = [],
      o = [],
      l = null,
      u,
      c,
      h,
      m = [],
      p = s.parentElement,
      f = s.nextElementSibling,
      d = km(),
      g = window.getComputedStyle(s),
      _ = g.textAlign,
      y = parseFloat(g.fontSize),
      v = y * 0.2;
    return (
      e.absolute &&
        ((h = { left: s.offsetLeft, top: s.offsetTop, width: s.offsetWidth }),
        (c = s.offsetWidth),
        (u = s.offsetHeight),
        _i(s, { cssWidth: s.style.width, cssHeight: s.style.height })),
      Dr(n).forEach(function (w) {
        var D = w.parentElement === s,
          x = Lm(w, D, e, t),
          b = x.width,
          T = x.height,
          E = x.top,
          S = x.left;
        /^br$/i.test(w.nodeName) ||
          (i.lines &&
            D &&
            ((l === null || E - l >= v) && ((l = E), a.push((o = []))),
            o.push(w)),
          e.absolute && _i(w, { top: E, left: S, width: b, height: T }));
      }),
      p && p.removeChild(s),
      i.lines &&
        ((m = a.map(function (w) {
          var D = xo(r, {
            class: "".concat(e.splitClass, " ").concat(e.lineClass),
            style: "display: block; text-align: ".concat(_, "; width: 100%;"),
          });
          _i(D, "isLine", !0);
          var x = { height: 0, top: 1e4 };
          return (
            d.appendChild(D),
            w.forEach(function (b, T, E) {
              var S = br(b),
                L = S.isWordEnd,
                P = S.top,
                k = S.height,
                F = E[T + 1];
              (x.height = Math.max(x.height, k)),
                (x.top = Math.min(x.top, P)),
                D.appendChild(b),
                L && br(F).isWordStart && D.append(" ");
            }),
            e.absolute && _i(D, { height: x.height, top: x.top }),
            D
          );
        })),
        i.words || bc(d),
        s.replaceChildren(d)),
      e.absolute &&
        ((s.style.width = "".concat(s.style.width || c, "px")),
        (s.style.height = "".concat(u, "px")),
        Dr(n).forEach(function (w) {
          var D = br(w),
            x = D.isLine,
            b = D.top,
            T = D.left,
            E = D.width,
            S = D.height,
            L = br(w.parentElement),
            P = !x && L.isLine;
          (w.style.top = "".concat(P ? b - L.top : b, "px")),
            (w.style.left = x
              ? "".concat(h.left, "px")
              : "".concat(T - (P ? h.left : 0), "px")),
            (w.style.height = "".concat(S, "px")),
            (w.style.width = x ? "".concat(h.width, "px") : "".concat(E, "px")),
            (w.style.position = "absolute");
        })),
      p && (f ? p.insertBefore(s, f) : p.appendChild(s)),
      m
    );
  }
  var Zr = wr(To, {}),
    zm = (function () {
      sc(s, null, [
        {
          key: "clearData",
          value: function () {
            gm();
          },
        },
        {
          key: "setDefaults",
          value: function (t) {
            return (Zr = wr(Zr, Nn(t))), To;
          },
        },
        {
          key: "revert",
          value: function (t) {
            uc(t).forEach(function (i) {
              var r = br(i),
                n = r.isSplit,
                a = r.html,
                o = r.cssWidth,
                l = r.cssHeight;
              n &&
                ((i.innerHTML = a),
                (i.style.width = o || ""),
                (i.style.height = l || ""),
                cc(i));
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
            return ri;
          },
        },
        {
          key: "defaults",
          get: function () {
            return Zr;
          },
          set: function (t) {
            Zr = wr(Zr, Nn(t));
          },
        },
      ]);
      function s(e, t) {
        rm(this, s),
          (this.isSplit = !1),
          (this.settings = wr(Zr, Nn(t))),
          (this.elements = uc(e)),
          this.split();
      }
      return (
        sc(s, [
          {
            key: "split",
            value: function (t) {
              var i = this;
              this.revert(),
                this.elements.forEach(function (a) {
                  _i(a, "html", a.innerHTML);
                }),
                (this.lines = []),
                (this.words = []),
                (this.chars = []);
              var r = [window.pageXOffset, window.pageYOffset];
              t !== void 0 && (this.settings = wr(this.settings, Nn(t)));
              var n = Do(this.settings.types);
              n.none ||
                (this.elements.forEach(function (a) {
                  _i(a, "isRoot", !0);
                  var o = Dc(a, i.settings),
                    l = o.words,
                    u = o.chars;
                  (i.words = [].concat(St(i.words), St(l))),
                    (i.chars = [].concat(St(i.chars), St(u)));
                }),
                this.elements.forEach(function (a) {
                  if (n.lines || i.settings.absolute) {
                    var o = Im(a, i.settings, r);
                    i.lines = [].concat(St(i.lines), St(o));
                  }
                }),
                (this.isSplit = !0),
                window.scrollTo(r[0], r[1]),
                vm());
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
  q.registerPlugin(Y, yi);
  const Rm = () => {
      document.querySelectorAll("[split-text]").forEach((e) => {
        new zm(e, { type: "lines", tagName: "div" }).lines.forEach((n) => {
          const a = document.createElement("div");
          a.setAttribute("data-line-wrapper", ""),
            (a.style.overflow = "clip"),
            (a.style.paddingBottom = "5px"),
            (a.style.position = "relative"),
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
    $m = () => {
      Rm();
    };
  q.registerPlugin(Y);
  const Bm = () => {
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
    Nm = () => {
      Bm();
    };
  q.registerPlugin(Y, yi);
  const qm = () => {
      const s = document.querySelectorAll("[text-scramble]");
      s.length &&
        s.forEach((e) => {
          const i = new yi(e, { type: "chars", charsClass: "char-animate" })
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
    Vm = () => {
      qm();
    };
  q.registerPlugin(Y);
  const Hm = () => {
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
          u = i.getAttribute("motion-start") || s.start;
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
            : Wm(i, r, a, o, l, u);
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
              u = r
                .filter((h) => h.motionType === "fade")
                .map((h) => h.element),
              c = r
                .filter((h) => h.motionType === "move-up")
                .map((h) => h.element);
            u.length > 0 &&
              l.to(
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
              c.length > 0 &&
                l.to(
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
    Wm = (s, e, t, i, r, n) => {
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
    Ym = () => {
      Hm();
    },
    Xm = () => {
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
    Gm = () => {
      Xm();
    },
    jm = () => {
      Uh(), Kh(), Qh(), em(), im(), $m(), Nm(), Vm(), Ym(), Gm();
    },
    Um = () => {
      const s = ic(".example-component");
      s &&
        (Rh(s, "is-initialized"),
        s.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Km = () => {
      Um();
    };
  document.addEventListener("DOMContentLoaded", () => {
    jm(), Km(), jh(), dh();
  });
});

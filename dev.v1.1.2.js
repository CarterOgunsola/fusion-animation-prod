var Qm = Object.defineProperty,
  Jm = Object.defineProperties;
var eg = Object.getOwnPropertyDescriptors;
var Tc = Object.getOwnPropertySymbols;
var tg = Object.prototype.hasOwnProperty,
  ig = Object.prototype.propertyIsEnumerable;
var gt = Math.pow,
  Ao = (He, Pe, ze) =>
    Pe in He
      ? Qm(He, Pe, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ze,
        })
      : (He[Pe] = ze),
  jn = (He, Pe) => {
    for (var ze in Pe || (Pe = {})) tg.call(Pe, ze) && Ao(He, ze, Pe[ze]);
    if (Tc) for (var ze of Tc(Pe)) ig.call(Pe, ze) && Ao(He, ze, Pe[ze]);
    return He;
  },
  Fo = (He, Pe) => Jm(He, eg(Pe));
var X = (He, Pe, ze) => Ao(He, typeof Pe != "symbol" ? Pe + "" : Pe, ze);
var Cc = (He, Pe, ze) =>
  new Promise((Re, Us) => {
    var ve = (vt) => {
        try {
          ts(ze.next(vt));
        } catch (nt) {
          Us(nt);
        }
      },
      ci = (vt) => {
        try {
          ts(ze.throw(vt));
        } catch (nt) {
          Us(nt);
        }
      },
      ts = (vt) =>
        vt.done ? Re(vt.value) : Promise.resolve(vt.value).then(ve, ci);
    ts((ze = ze.apply(He, Pe)).next());
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
  const Us = {
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
    return Pe(s, Us), s;
  }
  function ci(s) {
    return (
      s === void 0 && (s = ""),
      s
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function ts(s) {
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
  function Mc(s) {
    const e = ve();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(s, null)),
      !t && s.currentStyle && (t = s.currentStyle),
      t || (t = s.style),
      t
    );
  }
  function Un(s, e) {
    e === void 0 && (e = "x");
    const t = ve();
    let i, r, n;
    const a = Mc(s);
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
  function Pc(s) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? s instanceof HTMLElement
      : s && (s.nodeType === 1 || s.nodeType === 11);
  }
  function kt() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Pc(i)) {
        const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, a = r.length; n < a; n += 1) {
          const o = r[n],
            l = Object.getOwnPropertyDescriptor(i, o);
          l !== void 0 &&
            l.enumerable &&
            (is(s[o]) && is(i[o])
              ? i[o].__swiper__
                ? (s[o] = i[o])
                : kt(s[o], i[o])
              : !is(s[o]) && is(i[o])
              ? ((s[o] = {}), i[o].__swiper__ ? (s[o] = i[o]) : kt(s[o], i[o]))
              : (s[o] = i[o]));
        }
      }
    }
    return s;
  }
  function rs(s, e, t) {
    s.style.setProperty(e, t);
  }
  function Oo(s) {
    let { swiper: e, targetPosition: t, side: i } = s;
    const r = ve(),
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
  function Ac(s, e) {
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
  function Fc(s, e) {
    const t = ve();
    let i = e.contains(s);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(s)), i || (i = Ac(s, e))),
      i
    );
  }
  function Ks(s) {
    try {
      console.warn(s);
      return;
    } catch (e) {}
  }
  function It(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...(Array.isArray(e) ? e : ci(e))), t;
  }
  function Zs(s) {
    const e = ve(),
      t = Re(),
      i = s.getBoundingClientRect(),
      r = t.body,
      n = s.clientTop || r.clientTop || 0,
      a = s.clientLeft || r.clientLeft || 0,
      o = s === e ? e.scrollY : s.scrollTop,
      l = s === e ? e.scrollX : s.scrollLeft;
    return { top: i.top + o - n, left: i.left + l - a };
  }
  function Oc(s, e) {
    const t = [];
    for (; s.previousElementSibling; ) {
      const i = s.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function Lc(s, e) {
    const t = [];
    for (; s.nextElementSibling; ) {
      const i = s.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function zi(s, e) {
    return ve().getComputedStyle(s, null).getPropertyValue(e);
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
  function Kn(s, e, t) {
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
  function Qs(s) {
    return (e) =>
      Math.abs(e) > 0 &&
      s.browser &&
      s.browser.need3dFix &&
      Math.abs(e) % 90 === 0
        ? e + 0.001
        : e;
  }
  let Zn;
  function kc() {
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
  function Lo() {
    return Zn || (Zn = kc()), Zn;
  }
  let Qn;
  function Ic(s) {
    let { userAgent: e } = s === void 0 ? {} : s;
    const t = Lo(),
      i = ve(),
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
  function ko(s) {
    return s === void 0 && (s = {}), Qn || (Qn = Ic(s)), Qn;
  }
  let Jn;
  function zc() {
    const s = ve(),
      e = ko();
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
  function Io() {
    return Jn || (Jn = zc()), Jn;
  }
  function Rc(s) {
    let { swiper: e, on: t, emit: i } = s;
    const r = ve();
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
  function $c(s) {
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
  var Bc = {
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
  function Nc() {
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
          parseInt(zi(i, "padding-left") || 0, 10) -
          parseInt(zi(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(zi(i, "padding-top") || 0, 10) -
          parseInt(zi(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(s, {
          width: e,
          height: t,
          size: s.isHorizontal() ? e : t,
        }));
  }
  function qc() {
    const s = this;
    function e(S, L) {
      return parseFloat(S.getPropertyValue(s.getDirectionLabel(L)) || 0);
    }
    const t = s.params,
      { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o } = s,
      l = s.virtual && t.virtual.enabled,
      u = l ? s.virtual.slides.length : s.slides.length,
      c = Je(r, `.${s.params.slideClass}, swiper-slide`),
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
        (rs(i, "--swiper-centered-offset-before", ""),
        rs(i, "--swiper-centered-offset-after", ""));
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
        !(c[S] && zi(L, "display") === "none"))
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
            T = s.isHorizontal() ? Kn(L, "width") : Kn(L, "height");
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
      rs(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        rs(
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
  function Vc(s) {
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
  function Hc() {
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
  const zo = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function Wc(s) {
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
        zo(u, g, t.slideVisibleClass),
        zo(u, d, t.slideFullyVisibleClass),
        (u.progress = r ? -h : h),
        (u.originalProgress = r ? -m : m);
    }
  }
  function Yc(s) {
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
  const ea = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function Xc() {
    const s = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = s,
      n = s.virtual && t.virtual.enabled,
      a = s.grid && t.grid && t.grid.rows > 1,
      o = (h) => Je(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
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
        ((c = Lc(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (u = Oc(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u === 0 && (u = e[e.length - 1]))),
      e.forEach((h) => {
        ea(h, h === l, t.slideActiveClass),
          ea(h, h === c, t.slideNextClass),
          ea(h, h === u, t.slidePrevClass);
      }),
      s.emitSlidesClasses();
  }
  const Js = (s, e) => {
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
    ta = (s, e) => {
      if (!s.slides[e]) return;
      const t = s.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    ia = (s) => {
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
            o.includes(l.column) && ta(s, u);
          });
        return;
      }
      const n = r + i - 1;
      if (s.params.rewind || s.params.loop)
        for (let a = r - e; a <= n + e; a += 1) {
          const o = ((a % t) + t) % t;
          (o < r || o > n) && ta(s, o);
        }
      else
        for (let a = Math.max(r - e, 0); a <= Math.min(n + e, t - 1); a += 1)
          a !== r && (a > n || a < r) && ta(s, a);
    };
  function Gc(s) {
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
  function jc(s) {
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
    if ((typeof l == "undefined" && (l = Gc(e)), i.indexOf(t) >= 0))
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
      e.initialized && ia(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (a !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function Uc(s, e) {
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
  var Kc = {
    updateSize: Nc,
    updateSlides: qc,
    updateAutoHeight: Vc,
    updateSlidesOffset: Hc,
    updateSlidesProgress: Wc,
    updateProgress: Yc,
    updateSlidesClasses: Xc,
    updateActiveIndex: jc,
    updateClickedSlide: Uc,
  };
  function Zc(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let a = Un(n, s);
    return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
  }
  function Qc(s, e) {
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
  function Jc() {
    return -this.snapGrid[0];
  }
  function ed() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function td(s, e, t, i, r) {
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
            Oo({ swiper: n, targetPosition: -c, side: h ? "left" : "top" }), !0
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
  var id = {
    getTranslate: Zc,
    setTranslate: Qc,
    minTranslate: Jc,
    maxTranslate: ed,
    translateTo: td,
  };
  function rd(s, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${s}ms`),
      (t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
      t.emit("setTransition", s, e);
  }
  function Ro(s) {
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
  function sd(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      Ro({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
  }
  function nd(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        Ro({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
  }
  var ad = { setTransition: rd, transitionStart: sd, transitionEnd: nd };
  function od(s, e, t, i, r) {
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
            Oo({ swiper: n, targetPosition: T, side: b ? "left" : "top" }), !0
          );
        p.scrollTo({ [b ? "left" : "top"]: T, behavior: "smooth" });
      }
      return !0;
    }
    const x = Io().isSafari;
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
  function ld(s, e, t, i) {
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
  function ud(s, e, t) {
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
  function cd(s, e, t) {
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
  function dd(s, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof s == "undefined" && (s = i.params.speed),
        i.slideTo(i.activeIndex, s, e, t)
      );
  }
  function fd(s, e, t, i) {
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
  function pd() {
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
  var hd = {
    slideTo: od,
    slideToLoop: ld,
    slideNext: ud,
    slidePrev: cd,
    slideReset: dd,
    slideToClosest: fd,
    slideToClickedSlide: pd,
  };
  function md(s, e) {
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
      l = t.slides.length % o !== 0,
      u = a && t.slides.length % i.grid.rows !== 0,
      c = (h) => {
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
        c(h), t.recalcSlides(), t.updateSlides();
      } else
        Ks(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      n();
    } else if (u) {
      if (i.loopAddBlankSlides) {
        const h = i.grid.rows - (t.slides.length % i.grid.rows);
        c(h), t.recalcSlides(), t.updateSlides();
      } else
        Ks(
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
  function gd(s) {
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
      ? Ks(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : w &&
        f.grid.fill === "row" &&
        Ks(
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
                Fo(jn({}, I), {
                  slideTo: M.params.slidesPerView === f.slidesPerView ? t : !1,
                })
              );
          })
        : u.controller.control instanceof u.constructor &&
          u.controller.control.params.loop &&
          u.controller.control.loopFix(
            Fo(jn({}, I), {
              slideTo:
                u.controller.control.params.slidesPerView === f.slidesPerView
                  ? t
                  : !1,
            })
          );
    }
    u.emit("loopFix");
  }
  function vd() {
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
  var yd = { loopCreate: md, loopFix: gd, loopDestroy: vd };
  function _d(s) {
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
  function wd() {
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
  var Dd = { setGrabCursor: _d, unsetGrabCursor: wd };
  function bd(s, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === Re() || i === ve()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(s);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function $o(s, e, t) {
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
  function Sd(s) {
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
      $o(e, i, i.targetTouches[0].pageX);
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
      (n.touchEventsTarget === "wrapper" && !Fc(l, e.wrapperEl)) ||
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
    if (n.noSwiping && (m ? bd(h, l) : l.closest(h))) {
      e.allowClick = !0;
      return;
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const p = a.currentX,
      f = a.currentY;
    if (!$o(e, i, p)) return;
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
  function Ed(s) {
    const e = Re(),
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
      Math.sqrt(gt(m, 2) + gt(p, 2)) < t.params.threshold
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
                gt(-t.minTranslate() + i.startTranslate + f, D))))
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
                gt(t.maxTranslate() - i.startTranslate - f, D)))),
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
  function xd(s) {
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
    const h = nt(),
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
  function Bo() {
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
  function Td(s) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && s.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (s.stopPropagation(), s.stopImmediatePropagation())));
  }
  function Cd() {
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
  function Md(s) {
    const e = this;
    Js(e, s.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Pd() {
    const s = this;
    s.documentTouchHandlerProceeded ||
      ((s.documentTouchHandlerProceeded = !0),
      s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
  }
  const No = (s, e) => {
    const t = Re(),
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
            Bo,
            !0
          )
        : s[u]("observerUpdate", Bo, !0),
      r[l]("load", s.onLoad, { capture: !0 }));
  };
  function Ad() {
    const s = this,
      { params: e } = s;
    (s.onTouchStart = Sd.bind(s)),
      (s.onTouchMove = Ed.bind(s)),
      (s.onTouchEnd = xd.bind(s)),
      (s.onDocumentTouchStart = Pd.bind(s)),
      e.cssMode && (s.onScroll = Cd.bind(s)),
      (s.onClick = Td.bind(s)),
      (s.onLoad = Md.bind(s)),
      No(s, "on");
  }
  function Fd() {
    No(this, "off");
  }
  var Od = { attachEvents: Ad, detachEvents: Fd };
  const qo = (s, e) => s.grid && e.grid && e.grid.rows > 1;
  function Ld() {
    const s = this,
      { realIndex: e, initialized: t, params: i, el: r } = s,
      n = i.breakpoints;
    if (!n || (n && Object.keys(n).length === 0)) return;
    const a = Re(),
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
      ["navigation", "pagination", "scrollbar"].forEach((x) => {
        if (typeof h[x] == "undefined") return;
        const b = i[x] && i[x].enabled,
          T = h[x] && h[x].enabled;
        b && !T && s[x].disable(), !b && T && s[x].enable();
      });
    const _ = h.direction && h.direction !== i.direction,
      y = i.loop && (h.slidesPerView !== i.slidesPerView || _),
      v = i.loop;
    _ && t && s.changeDirection(), kt(s.params, h);
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
  function kd(s, e, t) {
    if ((e === void 0 && (e = "window"), !s || (e === "container" && !t)))
      return;
    let i = !1;
    const r = ve(),
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
  var Id = { setBreakpoint: Ld, getBreakpoint: kd };
  function zd(s, e) {
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
  function Rd() {
    const s = this,
      { classNames: e, params: t, rtl: i, el: r, device: n } = s,
      a = zd(
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
  function $d() {
    const s = this,
      { el: e, classNames: t } = s;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), s.emitContainerClasses());
  }
  var Bd = { addClasses: Rd, removeClasses: $d };
  function Nd() {
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
  var qd = { checkOverflow: Nd },
    Vo = {
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
  function Vd(s, e) {
    return function (i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0],
        n = i[r];
      if (typeof n != "object" || n === null) {
        kt(e, i);
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
        kt(e, i);
        return;
      }
      typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0),
        s[r] || (s[r] = { enabled: !1 }),
        kt(e, i);
    };
  }
  const ra = {
      eventsEmitter: Bc,
      update: Kc,
      translate: id,
      transition: ad,
      slide: hd,
      loop: yd,
      grabCursor: Dd,
      events: Od,
      breakpoints: Id,
      checkOverflow: qd,
      classes: Bd,
    },
    sa = {};
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
        (t = kt({}, t)),
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
            const m = kt({}, t, { el: h });
            c.push(new Tt(m));
          }),
          c
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = Lo()),
        (o.device = ko({ userAgent: t.userAgent })),
        (o.browser = Io()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const l = {};
      o.modules.forEach((c) => {
        c({
          params: t,
          swiper: o,
          extendParams: Vd(t, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const u = kt({}, Vo, l);
      return (
        (o.params = kt({}, u, sa, t)),
        (o.originalParams = kt({}, o.params)),
        (o.passedParams = kt({}, t)),
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
          a.complete && Js(e, a);
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
          ((a = It("div", t.params.wrapperClass)),
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
          rtl: i.dir.toLowerCase() === "rtl" || zi(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || zi(i, "direction") === "rtl"),
          wrongRTL: zi(a, "display") === "-webkit-box",
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
            ? Js(t, n)
            : n.addEventListener("load", (a) => {
                Js(t, a.target);
              });
        }),
        ia(t),
        (t.initialized = !0),
        ia(t),
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), ts(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      kt(sa, e);
    }
    static get extendedDefaults() {
      return sa;
    }
    static get defaults() {
      return Vo;
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
  Object.keys(ra).forEach((s) => {
    Object.keys(ra[s]).forEach((e) => {
      Tt.prototype[e] = ra[s][e];
    });
  }),
    Tt.use([Rc, $c]);
  function Hd(s) {
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
    function l(f, d) {
      const g = e.params.virtual;
      if (g.cache && e.virtual.cache[d]) return e.virtual.cache[d];
      let _;
      return (
        g.renderSlide
          ? ((_ = g.renderSlide.call(e, f, d)),
            typeof _ == "string" && ((o.innerHTML = _), (_ = o.children[0])))
          : e.isElement
          ? (_ = It("swiper-slide"))
          : (_ = It("div", e.params.slideClass)),
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
        De = (B) => {
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
            const N = De(B);
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
          const N = De(B);
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
      Je(e.slidesEl, ".swiper-slide, swiper-slide").forEach((B) => {
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
          rs(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: c,
        prependSlide: h,
        removeSlide: m,
        removeAllSlides: p,
        update: u,
      });
  }
  function Wd(s) {
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
            L = Zs(x);
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
  function Yd(s) {
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
          time: nt(),
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
        const k = { time: nt(), delta: Math.abs(E), direction: Math.sign(E) },
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
  function na(s, e, t, i) {
    return (
      s.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let n = Je(s.el, `.${i[r]}`)[0];
            n || ((n = It("div", i[r])), (n.className = i[r]), s.el.append(n)),
              (t[r] = n),
              (e[r] = n);
          }
        }),
      t
    );
  }
  function Xd(s) {
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
        ((e.params.navigation = na(
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
  function xi(s) {
    return (
      s === void 0 && (s = ""),
      `.${s
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function Gd(s) {
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
      const v = y.target.closest(xi(e.params.pagination.bulletClass));
      if (!v) return;
      y.preventDefault();
      const w = ss(v) * e.params.slidesPerGroup;
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
            ((a = Kn(E[0], e.isHorizontal() ? "width" : "height")),
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
            const F = ss(k);
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
            (E.querySelectorAll(xi(v.currentClass)).forEach((L) => {
              L.textContent = v.formatFractionCurrent(D + 1);
            }),
            E.querySelectorAll(xi(v.totalClass)).forEach((L) => {
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
            E.querySelectorAll(xi(v.progressbarFillClass)).forEach((R) => {
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
                ...x.querySelectorAll(xi(y.bulletClass))
              );
        }),
        y.type !== "custom" && r("paginationRender", w[0]);
    }
    function f() {
      e.params.pagination = na(
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
  function jd(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Re();
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
          Zs(R)[e.isHorizontal() ? "left" : "top"] -
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
          (l = vt(() => {
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
      e.params.scrollbar = na(
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
        ((I = R.querySelector(xi(e.params.scrollbar.dragClass))),
        I || ((I = It("div", e.params.scrollbar.dragClass)), R.append(I))),
        Object.assign(P, { el: R, dragEl: I }),
        F.draggable && x(),
        R &&
          R.classList[e.enabled ? "remove" : "add"](
            ...ci(e.params.scrollbar.lockClass)
          );
    }
    function E() {
      const P = e.params.scrollbar,
        k = e.scrollbar.el;
      k &&
        k.classList.remove(
          ...ci(e.isHorizontal() ? P.horizontalClass : P.verticalClass)
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
            ...ci(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        E();
      });
    const S = () => {
        e.el.classList.remove(...ci(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...ci(e.params.scrollbar.scrollbarDisabledClass)
            ),
          T(),
          d(),
          p();
      },
      L = () => {
        e.el.classList.add(...ci(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...ci(e.params.scrollbar.scrollbarDisabledClass)
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
  function Ud(s) {
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
          p = Je(l, r);
        e.isElement && p.push(...Je(e.hostEl, r)),
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
  function Kd(s) {
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
      return Math.sqrt(gt(N - $, 2) + gt(j - B, 2));
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
              (N.scale = f.maxRatio - 1 + gt(N.scale - f.maxRatio + 1, 0.5)),
            N.scale < B.minRatio &&
              (N.scale = B.minRatio + 1 - gt(B.minRatio - N.scale + 1, 0.5)),
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
        (d.startX = Un(f.imageWrapEl, "x") || 0),
        (d.startY = Un(f.imageWrapEl, "y") || 0),
        (f.slideWidth = f.slideEl.offsetWidth),
        (f.slideHeight = f.slideEl.offsetHeight),
        (f.imageWrapEl.style.transitionDuration = "0ms"));
      const ce = d.width * j.scale,
        it = d.height * j.scale;
      if (
        ((d.minX = Math.min(f.slideWidth / 2 - ce / 2, 0)),
        (d.maxX = -d.minX),
        (d.minY = Math.min(f.slideHeight / 2 - it / 2, 0)),
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
        it = g.y * N,
        Se = d.currentY + it;
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
        it = d.width * a,
        Se = d.height * a,
        Ee = f.slideWidth,
        J = f.slideHeight,
        ne = Math.min(Ee / 2 - it / 2, 0),
        _e = -ne,
        Xe = Math.min(J / 2 - Se / 2, 0),
        z = -Xe,
        qe = Math.max(Math.min(d.startX + j, _e), ne),
        ft = Math.max(Math.min(d.startY + ce, z), Xe);
      (f.imageWrapEl.style.transitionDuration = "0ms"),
        (f.imageWrapEl.style.transform = `translate3d(${qe}px, ${ft}px, 0)`),
        (u.x = $.clientX),
        (u.y = $.clientY),
        (d.startX = qe),
        (d.startY = ft),
        (d.currentX = qe),
        (d.currentY = ft);
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
              ? (f.slideEl = Je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (f.slideEl = e.slides[e.activeIndex]));
        let Ze = f.slideEl.querySelector(`.${N.containerClass}`);
        Ze &&
          (Ze = Ze.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (f.imageEl = Ze),
          Ze
            ? (f.imageWrapEl = Ji(f.imageEl, `.${N.containerClass}`)[0])
            : (f.imageWrapEl = void 0);
      }
      if (!f.imageEl || !f.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        f.slideEl.classList.add(`${N.zoomedSlideClass}`);
      let j, ce, it, Se, Ee, J, ne, _e, Xe, z, qe, ft, Xt, we, Gt, ti, ni, Fe;
      typeof d.touchesStart.x == "undefined" && $
        ? ((j = $.pageX), (ce = $.pageY))
        : ((j = d.touchesStart.x), (ce = d.touchesStart.y));
      const ii = a,
        pe = typeof $ == "number" ? $ : null;
      a === 1 &&
        pe &&
        ((j = void 0),
        (ce = void 0),
        (d.touchesStart.x = void 0),
        (d.touchesStart.y = void 0));
      const Lt = v();
      (B.scale = pe || Lt),
        (a = pe || Lt),
        $ && !(a === 1 && pe)
          ? ((ni = f.slideEl.offsetWidth),
            (Fe = f.slideEl.offsetHeight),
            (it = Zs(f.slideEl).left + n.scrollX),
            (Se = Zs(f.slideEl).top + n.scrollY),
            (Ee = it + ni / 2 - j),
            (J = Se + Fe / 2 - ce),
            (Xe = f.imageEl.offsetWidth || f.imageEl.clientWidth),
            (z = f.imageEl.offsetHeight || f.imageEl.clientHeight),
            (qe = Xe * B.scale),
            (ft = z * B.scale),
            (Xt = Math.min(ni / 2 - qe / 2, 0)),
            (we = Math.min(Fe / 2 - ft / 2, 0)),
            (Gt = -Xt),
            (ti = -we),
            ii > 0 &&
            pe &&
            typeof d.currentX == "number" &&
            typeof d.currentY == "number"
              ? ((ne = (d.currentX * B.scale) / ii),
                (_e = (d.currentY * B.scale) / ii))
              : ((ne = Ee * B.scale), (_e = J * B.scale)),
            ne < Xt && (ne = Xt),
            ne > Gt && (ne = Gt),
            _e < we && (_e = we),
            _e > ti && (_e = ti))
          : ((ne = 0), (_e = 0)),
        pe && B.scale === 1 && ((f.originX = 0), (f.originY = 0)),
        (d.currentX = ne),
        (d.currentY = _e),
        (f.imageWrapEl.style.transitionDuration = "300ms"),
        (f.imageWrapEl.style.transform = `translate3d(${ne}px, ${_e}px,0)`),
        (f.imageEl.style.transitionDuration = "300ms"),
        (f.imageEl.style.transform = `translate3d(0,0,0) scale(${B.scale})`);
    }
    function C() {
      const $ = e.zoom,
        B = e.params.zoom;
      if (!f.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (f.slideEl = Je(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
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
    function De() {
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
      e.params.zoom.enabled && De();
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
        enable: De,
        disable: se,
        in: A,
        out: C,
        toggle: W,
      });
  }
  function Zd(s) {
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
              vt(() => {
                d.updateAutoHeight();
              }),
            ns(d.wrapperEl, () => {
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
  function Qd(s) {
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
          !M.target.matches(xi(e.params.pagination.bulletClass))
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
          A.matches(xi(e.params.pagination.bulletClass)) &&
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
                M.paginationBulletMessage.replace(/\{\{index\}\}/, ss(O) + 1)
              ))),
            O.matches(xi(e.params.pagination.bulletActiveClass))
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
        let { nextEl: Q, prevEl: De } = e.navigation ? e.navigation : {};
        (Q = ae(Q)),
          (De = ae(De)),
          Q && Q.forEach(($) => E($, C, M.nextSlideMessage)),
          De && De.forEach(($) => E($, C, M.prevSlideMessage)),
          b() &&
            ae(e.pagination.el).forEach((B) => {
              B.addEventListener("keydown", w);
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
        M && M.forEach((C) => C.removeEventListener("keydown", w)),
        O && O.forEach((C) => C.removeEventListener("keydown", w)),
        b() &&
          ae(e.pagination.el).forEach((W) => {
            W.removeEventListener("keydown", w);
          }),
        Re().removeEventListener("visibilitychange", P),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", k, !0),
          e.el.removeEventListener("pointerdown", S, !0),
          e.el.removeEventListener("pointerup", L, !0));
    }
    i("beforeInit", () => {
      (r = It("span", e.params.a11y.notificationClass)),
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
  function Jd(s) {
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
            .filter((w) => w !== ""),
          _ = g.length,
          y = g[_ - 2],
          v = g[_ - 1];
        return { key: y, value: v };
      },
      l = (p, f) => {
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
          u(0, n.value, e.params.runCallbacksOnInit),
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
        r && l(e.params.history.key, e.activeIndex);
      }),
      i("slideChange", () => {
        r && e.params.cssMode && l(e.params.history.key, e.activeIndex);
      });
  }
  function ef(s) {
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
  function tf(s) {
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
        const O = Re();
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
  function rf(s) {
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
      } else if (is(u.swiper)) {
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
          const c = Re(),
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
  function sf(s) {
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
          time: nt(),
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
        g = nt() - f.touchStartTime;
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
            (L > 150 || nt() - T.time > 300) && (e.velocity = 0);
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
            ns(h, () => {
              !e ||
                e.destroyed ||
                !f.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(c.speed),
                setTimeout(() => {
                  e.setTranslate(D),
                    ns(h, () => {
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
              ns(h, () => {
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
  function nf(s) {
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
  function af(s) {
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
  function of(s) {
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
  function lf(s, e) {
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
  function uf(s) {
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
  function cf() {
    const s = this,
      e = [];
    for (let t = 0; t < s.slides.length; t += 1) e.push(t);
    s.removeSlide(e);
  }
  function df(s) {
    let { swiper: e } = s;
    Object.assign(e, {
      appendSlide: af.bind(e),
      prependSlide: of.bind(e),
      addSlide: lf.bind(e),
      removeSlide: uf.bind(e),
      removeAllSlides: cf.bind(e),
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
  function as(s, e) {
    const t = Qi(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function en(s) {
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
          ns(u, () => {
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
  function ff(s) {
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
              f = as(o, u);
            (f.style.opacity = p),
              (f.style.transform = `translate3d(${h}px, ${m}px, 0px)`);
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => Qi(l));
          o.forEach((l) => {
            l.style.transitionDuration = `${a}ms`;
          }),
            en({ swiper: e, duration: a, transformElements: o, allSlides: !0 });
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
  function pf(s) {
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
        ((h = It(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            c ? "left" : "top"
          }`.split(" ")
        )),
        l.append(h)),
        m ||
          ((m = It(
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
          g = Qs(e),
          _ = e.params.cubeEffect,
          y = e.isHorizontal(),
          v = e.virtual && e.params.virtual.enabled;
        let w = 0,
          D;
        _.shadow &&
          (y
            ? ((D = e.wrapperEl.querySelector(".swiper-cube-shadow")),
              D ||
                ((D = It("div", "swiper-cube-shadow")), e.wrapperEl.append(D)),
              (D.style.height = `${h}px`))
            : ((D = l.querySelector(".swiper-cube-shadow")),
              D || ((D = It("div", "swiper-cube-shadow")), l.append(D))));
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
    return n || ((n = It("div", i.split(" "))), r.append(n)), n;
  }
  function hf(s) {
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
          h = Qs(e);
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
            x = as(c, p);
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
          en({ swiper: e, duration: l, transformElements: u });
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
  function mf(s) {
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
            g = Qs(e);
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
              I = as(c, v);
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
  function gf(s) {
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
          p = Qs(e);
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
          const k = as(c, d);
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
          en({ swiper: e, duration: o, transformElements: l, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function vf(s) {
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
              const F = gt(1 - Math.abs((Math.abs(g) - 0.5) / 0.5), 0.5);
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
            const k = as(u, f);
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
            en({ swiper: e, duration: a, transformElements: o });
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
  const yf = [
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
    nf,
    df,
    ff,
    pf,
    hf,
    mf,
    gf,
    vf,
  ];
  Tt.use(yf);
  class _f {
    constructor() {
      this.swiper = new Tt("[swiper='clinic-card']", {
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
  function os() {
    new _f();
  }
  function Ti(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function Ho(s, e) {
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
   */ var zt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Pr = { duration: 0.5, overwrite: !1, delay: 0 },
    aa,
    et,
    be,
    Ut = 1e8,
    he = 1 / Ut,
    oa = Math.PI * 2,
    wf = oa / 4,
    Df = 0,
    Wo = Math.sqrt,
    bf = Math.cos,
    Sf = Math.sin,
    je = function (e) {
      return typeof e == "string";
    },
    Ae = function (e) {
      return typeof e == "function";
    },
    Ci = function (e) {
      return typeof e == "number";
    },
    la = function (e) {
      return typeof e == "undefined";
    },
    di = function (e) {
      return typeof e == "object";
    },
    Ct = function (e) {
      return e !== !1;
    },
    ua = function () {
      return typeof window != "undefined";
    },
    tn = function (e) {
      return Ae(e) || je(e);
    },
    Yo =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    at = Array.isArray,
    ca = /(?:-?\.?\d|\.)+/gi,
    Xo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Ar = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    da = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Go = /[+-]=-?[.\d]+/,
    jo = /[^,'"\[\]\s]+/gi,
    Ef = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Te,
    fi,
    fa,
    pa,
    Rt = {},
    rn = {},
    Uo,
    Ko = function (e) {
      return (rn = Or(e, Rt)) && At;
    },
    ha = function (e, t) {
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
      return (e && (Rt[e] = t) && rn && (rn[e] = t)) || Rt;
    },
    us = function () {
      return 0;
    },
    xf = { suppressEvents: !0, isStart: !0, kill: !1 },
    sn = { suppressEvents: !0, kill: !1 },
    Tf = { suppressEvents: !0 },
    ma = {},
    Ri = [],
    ga = {},
    Qo,
    $t = {},
    va = {},
    Jo = 30,
    nn = [],
    ya = "",
    _a = function (e) {
      var t = e[0],
        i,
        r;
      if ((di(t) || Ae(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = nn.length; r-- && !nn[r].targetTest(t); );
        i = nn[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Ml(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    er = function (e) {
      return e._gsap || _a(Zt(e))[0]._gsap;
    },
    el = function (e, t, i) {
      return (i = e[t]) && Ae(i)
        ? e[t]()
        : (la(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Mt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Le = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    $e = function (e) {
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
    Cf = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    an = function () {
      var e = Ri.length,
        t = Ri.slice(0),
        i,
        r;
      for (ga = {}, Ri.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    tl = function (e, t, i, r) {
      Ri.length && !et && an(),
        e.render(t, i, et && t < 0 && (e._initted || e._startAt)),
        Ri.length && !et && an();
    },
    il = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(jo).length < 2
        ? t
        : je(e)
        ? e.trim()
        : e;
    },
    rl = function (e) {
      return e;
    },
    Bt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Mf = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    Or = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    sl = function s(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = di(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    on = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    cs = function (e) {
      var t = e.parent || Te,
        i = e.keyframes ? Mf(at(e.keyframes)) : Bt;
      if (Ct(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    Pf = function (e, t) {
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
    ln = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var n = t._prev,
        a = t._next;
      n ? (n._next = a) : e[i] === t && (e[i] = a),
        a ? (a._prev = n) : e[r] === t && (e[r] = n),
        (t._next = t._prev = t.parent = null);
    },
    $i = function (e, t) {
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
    Af = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    wa = function (e, t, i, r) {
      return (
        e._startAt &&
        (et
          ? e._startAt.revert(sn)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    Ff = function s(e) {
      return !e || (e._ts && s(e.parent));
    },
    al = function (e) {
      return e._repeat ? Lr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Lr = function (e, t) {
      var i = Math.floor((e = $e(e / t)));
      return e && i === e ? i - 1 : i;
    },
    un = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    cn = function (e) {
      return (e._end = $e(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || he) || 0)
      ));
    },
    dn = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = $e(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          cn(e),
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
          ((i = un(e.rawTime(), t)),
          (!t._dur || fs(0, t.totalDuration(), i) - t._tTime > he) &&
            t.render(i, !0)),
        tr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -he;
      }
    },
    pi = function (e, t, i, r) {
      return (
        t.parent && $i(t),
        (t._start = $e(
          (Ci(i) ? i : i || e !== Te ? Kt(e, i, t) : e._time) + t._delay
        )),
        (t._end = $e(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        nl(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Da(t) || (e._recent = t),
        r || ol(e, t),
        e._ts < 0 && dn(e, e._tTime),
        e
      );
    },
    ll = function (e, t) {
      return (
        (Rt.ScrollTrigger || ha("scrollTrigger", t)) &&
        Rt.ScrollTrigger.create(t, e)
      );
    },
    ul = function (e, t, i, r, n) {
      if ((Aa(e, t, n), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !et &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Qo !== qt.frame
      )
        return Ri.push(e), (e._lazy = [n, r]), 1;
    },
    Of = function s(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
    },
    Da = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Lf = function (e, t, i, r) {
      var n = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && Of(e) && !(!e._initted && Da(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Da(e))))
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
          ((l = fs(0, e._tDur, t)),
          (c = Lr(l, o)),
          e._yoyo && c & 1 && (a = 1 - a),
          c !== Lr(e._tTime, o) &&
            ((n = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== n || et || r || e._zTime === he || (!t && e._zTime))
      ) {
        if (!e._initted && ul(e, t, r, i, l)) return;
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
        t < 0 && wa(e, t, i, !0),
          e._onUpdate && !i && Nt(e, "onUpdate"),
          l && e._repeat && !i && e.parent && Nt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && $i(e, 1),
            !i &&
              !et &&
              (Nt(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    kf = function (e, t, i) {
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
        a = $e(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = n ? (n < 0 ? 1e10 : $e(a * (n + 1) + e._rDelay * n)) : a),
        o > 0 && !r && dn(e, (e._tTime = e._tDur * o)),
        e.parent && cn(e),
        i || tr(e.parent, e),
        e
      );
    },
    cl = function (e) {
      return e instanceof yt ? tr(e) : kr(e, e._dur);
    },
    If = { _start: 0, endTime: us, totalDuration: us },
    Kt = function s(e, t, i) {
      var r = e.labels,
        n = e._recent || If,
        a = e.duration() >= Ut ? n.endTime(!1) : e._dur,
        o,
        l,
        u;
      return je(t) && (isNaN(t) || t in r)
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
              u && i && (l = (l / 100) * (at(i) ? i[0] : i).totalDuration()),
              o > 1 ? s(e, t.substr(0, o - 1), i) + l : a + l))
        : t == null
        ? a
        : +t;
    },
    ds = function (e, t, i) {
      var r = Ci(t[1]),
        n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[n],
        o,
        l;
      if ((r && (a.duration = t[1]), (a.parent = i), e)) {
        for (o = a, l = i; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = Ct(l.vars.inherit) && l.parent);
        (a.immediateRender = Ct(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[n - 1]);
      }
      return new Be(t[0], a, t[n + 1]);
    },
    Bi = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    fs = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    ot = function (e, t) {
      return !je(e) || !(t = Ef.exec(e)) ? "" : t[1];
    },
    zf = function (e, t, i) {
      return Bi(i, function (r) {
        return fs(e, t, r);
      });
    },
    ba = [].slice,
    dl = function (e, t) {
      return (
        e &&
        di(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && di(e[0]))) &&
        !e.nodeType &&
        e !== fi
      );
    },
    Rf = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var n;
          return (je(r) && !t) || dl(r, 1)
            ? (n = i).push.apply(n, Zt(r))
            : i.push(r);
        }) || i
      );
    },
    Zt = function (e, t, i) {
      return be && !t && be.selector
        ? be.selector(e)
        : je(e) && !i && (fa || !zr())
        ? ba.call((t || pa).querySelectorAll(e), 0)
        : at(e)
        ? Rf(e, i)
        : dl(e)
        ? ba.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Sa = function (e) {
      return (
        (e = Zt(e)[0] || ls("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Zt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? ls("Invalid scope") || pa.createElement("div")
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
      var t = di(e) ? e : { each: e },
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
        je(r)
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
            if (((E = t.grid === "auto" ? 0 : (t.grid || [1, Ut])[1]), !E)) {
              for (
                b = -Ut;
                b < (b = f[E++].getBoundingClientRect().left) && E < d;

              );
              E < d && E--;
            }
            for (
              g = a[d] = [],
                _ = l ? Math.min(E, d) * c - 0.5 : r % E,
                y = E === Ut ? 0 : l ? (d * h) / E - 0.5 : (r / E) | 0,
                b = 0,
                T = Ut,
                x = 0;
              x < d;
              x++
            )
              (v = (x % E) - _),
                (w = y - ((x / E) | 0)),
                (g[x] = D =
                  u ? Math.abs(u === "y" ? w : v) : Wo(v * v + w * w)),
                D > b && (b = D),
                D < T && (T = D);
            r === "random" && fl(g),
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
              (g.u = ot(t.amount || t.each) || 0),
              (i = i && d < 0 ? xl(i) : i);
          }
          return (
            (d = (g[m] - g.min) / g.max || 0),
            $e(g.b + (i ? i(d) : d) * g.v) + g.u
          );
        }
      );
    },
    Ea = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = $e(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (Ci(i) ? 0 : ot(i));
      };
    },
    hl = function (e, t) {
      var i = at(e),
        r,
        n;
      return (
        !i &&
          di(e) &&
          ((r = i = e.radius || Ut),
          e.values
            ? ((e = Zt(e.values)), (n = !Ci(e[0])) && (r *= r))
            : (e = Ea(e.increment))),
        Bi(
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
                      u = Ut,
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
                    n || c === a || Ci(a) ? c : c + ot(a)
                  );
                }
            : Ea(e)
        )
      );
    },
    ml = function (e, t, i, r) {
      return Bi(at(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
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
    $f = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (n, a) {
          return a(n);
        }, r);
      };
    },
    Bf = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || ot(i));
      };
    },
    Nf = function (e, t, i) {
      return vl(e, t, 0, 1, i);
    },
    gl = function (e, t, i) {
      return Bi(i, function (r) {
        return e[~~t(r)];
      });
    },
    qf = function s(e, t, i) {
      var r = t - e;
      return at(e)
        ? gl(e, s(0, e.length), t)
        : Bi(i, function (n) {
            return ((r + ((n - e) % r)) % r) + e;
          });
    },
    Vf = function s(e, t, i) {
      var r = t - e,
        n = r * 2;
      return at(e)
        ? gl(e, s(0, e.length - 1), t)
        : Bi(i, function (a) {
            return (a = (n + ((a - e) % n)) % n || 0), e + (a > r ? n - a : a);
          });
    },
    ps = function (e) {
      for (var t = 0, i = "", r, n, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (n = e.substr(r + 7, a - r - 7).match(o ? jo : ca)),
          (i +=
            e.substr(t, r - t) +
            ml(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    vl = function (e, t, i, r, n) {
      var a = t - e,
        o = r - i;
      return Bi(n, function (l) {
        return i + (((l - e) / a) * o || 0);
      });
    },
    Hf = function s(e, t, i, r) {
      var n = isNaN(e + t)
        ? 0
        : function (p) {
            return (1 - p) * e + p * t;
          };
      if (!n) {
        var a = je(e),
          o = {},
          l,
          u,
          c,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (at(e) && !at(t)) {
          for (c = [], h = e.length, m = h - 2, u = 1; u < h; u++)
            c.push(s(e[u - 1], e[u]));
          h--,
            (n = function (f) {
              f *= h;
              var d = Math.min(m, ~~f);
              return c[d](f - d);
            }),
            (i = t);
        } else r || (e = Or(at(e) ? [] : {}, e));
        if (!c) {
          for (l in t) Ma.call(o, e, l, "get", t[l]);
          n = function (f) {
            return La(f, o) || (a ? e.p : e);
          };
        }
      }
      return Bi(i, n);
    },
    yl = function (e, t, i) {
      var r = e.labels,
        n = Ut,
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
        a = be,
        o = e._ctx,
        l,
        u,
        c;
      if (n)
        return (
          (l = r[t + "Params"]),
          (u = r.callbackScope || e),
          i && Ri.length && an(),
          o && (be = o),
          (c = l ? n.apply(u, l) : n.call(u)),
          (be = a),
          c
        );
    },
    hs = function (e) {
      return (
        $i(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!et),
        e.progress() < 1 && Nt(e, "onInterrupt"),
        e
      );
    },
    Ir,
    _l = [],
    wl = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), ua() || e.headless)) {
          var t = e.name,
            i = Ae(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            n = {
              init: us,
              render: La,
              add: Ma,
              kill: np,
              modifier: sp,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Oa,
              aliases: {},
              register: 0,
            };
          if ((zr(), e !== r)) {
            if ($t[t]) return;
            Bt(r, Bt(on(e, n), a)),
              Or(r.prototype, Or(n, on(e, a))),
              ($t[(r.prop = t)] = r),
              e.targetTest && (nn.push(r), (ma[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Zo(t, r), e.register && e.register(At, r, Pt);
        } else _l.push(e);
    },
    me = 255,
    ms = {
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
    xa = function (e, t, i) {
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
    Dl = function (e, t, i) {
      var r = e ? (Ci(e) ? [e >> 16, (e >> 8) & me, e & me] : 0) : ms.black,
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
              [r >> 16, (r >> 8) & me, r & me, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & me, e & me]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = f = e.match(ca)), !t))
            (l = (+r[0] % 360) / 360),
              (u = +r[1] / 100),
              (c = +r[2] / 100),
              (a = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (n = c * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = xa(l + 1 / 3, n, a)),
              (r[1] = xa(l, n, a)),
              (r[2] = xa(l - 1 / 3, n, a));
          else if (~e.indexOf("="))
            return (r = e.match(Xo)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(ca) || ms.transparent;
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
    bl = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(Ni).forEach(function (n) {
          var a = n.match(Ar) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Sl = function (e, t, i) {
      var r = "",
        n = (e + r).match(Ni),
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
            (m = Dl(m, t, 1)) &&
            a +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((c = bl(e)), (l = i.c), l.join(r) !== c.c.join(r)))
      )
        for (u = e.replace(Ni, "1").split(Ar), h = u.length - 1; o < h; o++)
          r +=
            u[o] +
            (~l.indexOf(o)
              ? n.shift() || a + "0,0,0,0)"
              : (c.length ? c : n.length ? n : i).shift());
      if (!u)
        for (u = e.split(Ni), h = u.length - 1; o < h; o++) r += u[o] + n[o];
      return r + u[h];
    },
    Ni = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in ms) s += "|" + e + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    Wf = /hsl[a]?\(/,
    El = function (e) {
      var t = e.join(" "),
        i;
      if (((Ni.lastIndex = 0), Ni.test(t)))
        return (
          (i = Wf.test(t)),
          (e[1] = Sl(e[1], i)),
          (e[0] = Sl(e[0], i, bl(e[1]))),
          !0
        );
    },
    gs,
    qt = (function () {
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
            Uo &&
              (!fa &&
                ua() &&
                ((fi = fa = window),
                (pa = fi.document || {}),
                (Rt.gsap = At),
                (fi.gsapVersions || (fi.gsapVersions = [])).push(At.version),
                Ko(rn || fi.GreenSockGlobals || (!fi.gsap && fi) || {}),
                _l.forEach(wl)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && h.sleep(),
              (u =
                c ||
                function (g) {
                  return setTimeout(g, (a - h.time * 1e3 + 1) | 0);
                }),
              (gs = 1),
              f(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (gs = 0), (u = us);
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
      return !gs && qt.wake();
    },
    le = {},
    Yf = /^[\d.\-M][\d.\-,\s]/,
    Xf = /["']/g,
    Gf = function (e) {
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
          (t[r] = isNaN(u) ? u.replace(Xf, "").trim() : +u),
          (r = l.substr(o + 1).trim());
      return t;
    },
    jf = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    Uf = function (e) {
      var t = (e + "").split("("),
        i = le[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Gf(t[1])] : jf(e).split(",").map(il)
          )
        : le._CE && Yf.test(e)
        ? le._CE("", e)
        : i;
    },
    xl = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Tl = function s(e, t) {
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
    ir = function (e, t) {
      return (e && (Ae(e) ? e : le[e] || Uf(e))) || t;
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
          (le[o] = Rt[o] = n), (le[(a = o.toLowerCase())] = i);
          for (var l in n)
            le[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = le[o + "." + l] = n[l];
        }),
        n
      );
    },
    Cl = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Ta = function s(e, t, i) {
      var r = t >= 1 ? t : 1,
        n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (n / oa) * (Math.asin(1 / r) || 0),
        o = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Sf((c - a) * n) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (u) {
                return 1 - o(1 - u);
              }
            : Cl(o);
      return (
        (n = oa / n),
        (l.config = function (u, c) {
          return s(e, u, c);
        }),
        l
      );
    },
    Ca = function s(e, t) {
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
    (le.Linear.easeNone = le.none = le.Linear.easeIn),
    rr("Elastic", Ta("in"), Ta("out"), Ta()),
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
      return s === 1 ? 1 : -bf(s * wf) + 1;
    }),
    rr("Back", Ca("in"), Ca("out"), Ca()),
    (le.SteppedEase =
      le.steps =
      Rt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              n = t ? 1 : 0,
              a = 1 - he;
            return function (o) {
              return (((r * fs(0, a, o)) | 0) + n) * i;
            };
          },
        }),
    (Pr.ease = le["quad.out"]),
    Mt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (ya += s + "," + s + "Params,");
      }
    );
  var Ml = function (e, t) {
      (this.id = Df++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : el),
        (this.set = t ? t.getSetter : Oa);
    },
    vs = (function () {
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
          gs || qt.wake();
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
              dn(this, i), !n._dp || n.parent || ol(n, this);
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
              pi(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === he) ||
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
            ? Lr(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -he ? 0 : this._rts;
          if (this._rts === i) return this;
          var n =
            this.parent && this._ts ? un(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -he ? 0 : this._rts),
            this.totalTime(fs(-Math.abs(this._delay), this._tDur, n), r !== !1),
            cn(this),
            Af(this)
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
              r && (r._sort || !this.parent) && pi(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (Ct(i) ? this.totalDuration() : this.duration()) /
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
              ? un(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = Tf);
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
            ? ((this._repeat = i === 1 / 0 ? -2 : i), cl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), cl(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Kt(this, i), Ct(r));
        }),
        (e.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, Ct(r)),
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
            var a = Ae(i) ? i : rl,
              o = function () {
                var u = r.then;
                (r.then = null),
                  Ae(a) && (a = a(r)) && (a.then || a === r) && (r.then = u),
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
          hs(this);
        }),
        s
      );
    })();
  Bt(vs.prototype, {
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
    Ho(e, s);
    function e(i, r) {
      var n;
      return (
        i === void 0 && (i = {}),
        (n = s.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = Ct(i.sortChildren)),
        Te && pi(i.parent || Te, Ti(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && ll(Ti(n), i.scrollTrigger),
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
          cs(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new Be(r, n, Kt(this, a), 1),
          this
        );
      }),
      (t.call = function (r, n, a) {
        return pi(this, Be.delayedCall(0, r, n), a);
      }),
      (t.staggerTo = function (r, n, a, o, l, u, c) {
        return (
          (a.duration = n),
          (a.stagger = a.stagger || o),
          (a.onComplete = u),
          (a.onCompleteParams = c),
          (a.parent = this),
          new Be(r, a, Kt(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, n, a, o, l, u, c) {
        return (
          (a.runBackwards = 1),
          (cs(a).immediateRender = Ct(a.immediateRender)),
          this.staggerTo(r, n, a, o, l, u, c)
        );
      }),
      (t.staggerFromTo = function (r, n, a, o, l, u, c, h) {
        return (
          (o.startAt = a),
          (cs(o).immediateRender = Ct(o.immediateRender)),
          this.staggerTo(r, n, o, l, u, c, h)
        );
      }),
      (t.render = function (r, n, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = r <= 0 ? 0 : $e(r),
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
              ((m = $e(c % g)),
              c === l
                ? ((d = this._repeat), (m = u))
                : ((D = $e(c / g)),
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
                (this.render(o || (b ? 0 : $e(d * g)), n, !u)._lock = 0),
                (this._tTime = c),
                !n && this.parent && Nt(this, "onRepeat"),
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
              Tl(this, b);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((y = kf(this, $e(o), $e(m))), y && (c -= m - (m = y._start))),
            (this._tTime = c),
            (this._time = m),
            (this._act = !v),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && m && !n && !d && (Nt(this, "onStart"), this._tTime !== c))
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
            return (this._start = w), cn(this), this.render(r, n, a);
          this._onUpdate && !n && Nt(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && o)) &&
              (w === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  $i(this, 1),
                !n &&
                  !(r < 0 && !o) &&
                  (c || o || !l) &&
                  (Nt(
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
        if ((Ci(n) || (n = Kt(this, n, r)), !(r instanceof vs))) {
          if (at(r))
            return (
              r.forEach(function (o) {
                return a.add(o, n);
              }),
              this
            );
          if (je(r)) return this.addLabel(r, n);
          if (Ae(r)) r = Be.delayedCall(0, r);
          else return this;
        }
        return this !== r ? pi(this, r, n) : this;
      }),
      (t.getChildren = function (r, n, a, o) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -Ut);
        for (var l = [], u = this._first; u; )
          u._start >= o &&
            (u instanceof Be
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
        return je(r)
          ? this.removeLabel(r)
          : Ae(r)
          ? this.killTweensOf(r)
          : (r.parent === this && ln(this, r),
            r === this._recent && (this._recent = this._last),
            tr(this));
      }),
      (t.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = $e(
                qt.time -
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
        return (this.labels[r] = Kt(this, n)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, n, a) {
        var o = Be.delayedCall(0, n || us, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), pi(this, o, Kt(this, r))
        );
      }),
      (t.removePause = function (r) {
        var n = this._first;
        for (r = Kt(this, r); n; )
          n._start === r && n.data === "isPause" && $i(n), (n = n._next);
      }),
      (t.killTweensOf = function (r, n, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          qi !== o[l] && o[l].kill(r, n);
        return this;
      }),
      (t.getTweensOf = function (r, n) {
        for (var a = [], o = Zt(r), l = this._first, u = Ci(n), c; l; )
          l instanceof Be
            ? Cf(l._targets, o) &&
              (u
                ? (!qi || (l._initted && l._ts)) &&
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
          o = Kt(a, r),
          l = n,
          u = l.startAt,
          c = l.onStart,
          h = l.onStartParams,
          m = l.immediateRender,
          p,
          f = Be.to(
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
        return this.tweenTo(n, Bt({ startAt: { time: Kt(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), yl(this, Kt(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), yl(this, Kt(this, r), 1);
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
          l = Ut,
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
                ? ((a._lock = 1), (pi(a, o, c - o._delay, 1)._lock = 0))
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
        if ((Te._ts && (tl(Te, un(r, Te)), (Qo = qt.frame)), qt.frame >= Jo)) {
          Jo += zt.autoSleep || 120;
          var n = Te._first;
          if ((!n || !n._ts) && zt.autoSleep && qt._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || qt.sleep();
          }
        }
      }),
      e
    );
  })(vs);
  Bt(yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Kf = function (e, t, i, r, n, a, o) {
      var l = new Pt(this._pt, e, t, 0, 1, kl, null, n),
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
          (_ = ~r.indexOf("random(")) && (r = ps(r)),
          a && ((y = [i, r]), a(y, e, t), (i = y[0]), (r = y[1])),
          m = i.match(da) || [];
        (h = da.exec(r));

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
            (u = da.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = o),
        (Go.test(r) || _) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Ma = function (e, t, i, r, n, a, o, l, u, c) {
      Ae(r) && (r = r(n || 0, e, a));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : Ae(h)
            ? u
              ? e[
                  t.indexOf("set") || !Ae(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](u)
              : e[t]()
            : h,
        p = Ae(h) ? (u ? tp : Ol) : Fa,
        f;
      if (
        (je(r) &&
          (~r.indexOf("random(") && (r = ps(r)),
          r.charAt(1) === "=" &&
            ((f = Fr(m, r) + (ot(m) || 0)), (f || f === 0) && (r = f))),
        !c || m !== r || Pa)
      )
        return !isNaN(m * r) && r !== ""
          ? ((f = new Pt(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? rp : Ll,
              0,
              p
            )),
            u && (f.fp = u),
            o && f.modifier(o, this, e),
            (this._pt = f))
          : (!h && !(t in e) && ha(t, r),
            Kf.call(this, e, t, m, r, p, l || zt.stringFilter, u));
    },
    Zf = function (e, t, i, r, n) {
      if (
        (Ae(e) && (e = ys(e, n, t, i, r)),
        !di(e) || (e.style && e.nodeType) || at(e) || Yo(e))
      )
        return je(e) ? ys(e, n, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = ys(e[o], n, t, i, r);
      return a;
    },
    Pl = function (e, t, i, r, n, a) {
      var o, l, u, c;
      if (
        $t[e] &&
        (o = new $t[e]()).init(
          n,
          o.rawVars ? t[e] : Zf(t[e], r, n, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = l = new Pt(i._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
        i !== Ir)
      )
        for (u = i._ptLookup[i._targets.indexOf(n)], c = o._props.length; c--; )
          u[o._props[c]] = l;
      return o;
    },
    qi,
    Pa,
    Aa = function s(e, t, i) {
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
        v = e._overwrite === "auto" && !aa,
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
        (e._yEase = h ? xl(ir(h === !0 ? n : h, Pr.ease)) : 0),
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
          (D = on(r, ma)),
          d &&
            (d._zTime < 0 && d.progress(1),
            t < 0 && c && o && !p
              ? d.render(-1, !0)
              : d.revert(c && f ? sn : xf),
            (d._lazy = 0)),
          a)
        ) {
          if (
            ($i(
              (e._startAt = Be.set(
                g,
                Bt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: _,
                    immediateRender: !0,
                    lazy: !d && Ct(l),
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
            t < 0 && (et || (!o && !p)) && e._startAt.revert(sn),
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
                lazy: o && !d && Ct(l),
                immediateRender: o,
                stagger: 0,
                parent: _,
              },
              D
            )),
            I && (b[P.prop] = I),
            $i((e._startAt = Be.set(g, b))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (et ? e._startAt.revert(sn) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            s(e._startAt, he, he);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (f && Ct(l)) || (l && !f), x = 0;
          x < g.length;
          x++
        ) {
          if (
            ((E = g[x]),
            (L = E._gsap || _a(g)[x]._gsap),
            (e._ptLookup[x] = F = {}),
            ga[L.id] && Ri.length && an(),
            (R = y === g ? x : y.indexOf(E)),
            P &&
              (k = new P()).init(E, I || D, e, R, y) !== !1 &&
              ((e._pt = T =
                new Pt(e._pt, E, k.name, 0, 1, k.render, k, 0, k.priority)),
              k._props.forEach(function (O) {
                F[O] = T;
              }),
              k.priority && (S = 1)),
            !P || I)
          )
            for (b in D)
              $t[b] && (k = Pl(b, D, e, R, E, y))
                ? k.priority && (S = 1)
                : (F[b] = T =
                    Ma.call(e, E, b, "get", D[b], R, y, 0, r.stringFilter));
          e._op && e._op[x] && e.kill(E, e._op[x]),
            v &&
              e._pt &&
              ((qi = e),
              Te.killTweensOf(E, F, e.globalTime(t)),
              (M = !e.parent),
              (qi = 0)),
            e._pt && l && (ga[L.id] = 1);
        }
        S && Il(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !M),
        m && t <= 0 && w.render(Ut, !0, !0);
    },
    Qf = function (e, t, i, r, n, a, o, l) {
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
              (Pa = 1),
              (e.vars[t] = "+=0"),
              Aa(e, o),
              (Pa = 0),
              l ? ls(t + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (p = u.length; p--; )
        (h = u[p]),
          (c = h._pt || h),
          (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + a * c.c),
          (c.c = i - c.s),
          h.e && (h.e = Le(i) + ot(h.e)),
          h.b && (h.b = c.s + ot(h.b));
    },
    Jf = function (e, t) {
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
    ep = function (e, t, i, r) {
      var n = t.ease || r || "power1.inOut",
        a,
        o;
      if (at(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (l, u) {
            return o.push({ t: (u / (t.length - 1)) * 100, v: l, e: n });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: n });
    },
    ys = function (e, t, i, r, n) {
      return Ae(e)
        ? e.call(t, i, r, n)
        : je(e) && ~e.indexOf("random(")
        ? ps(e)
        : e;
    },
    Al = ya + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Fl = {};
  Mt(Al + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (Fl[s] = 1);
  });
  var Be = (function (s) {
    Ho(e, s);
    function e(i, r, n, a) {
      var o;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (o = s.call(this, a ? r : cs(r)) || this);
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
        v = (at(i) || Yo(i) ? Ci(i[0]) : "length" in r) ? [i] : Zt(i),
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
          ? _a(v)
          : ls(
              "GSAP target " + i + " not found. https://gsap.com",
              !zt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        f || m || tn(u) || tn(c))
      ) {
        if (
          ((r = o.vars),
          (w = o.timeline =
            new yt({
              data: "nested",
              defaults: d || {},
              targets: y && y.data === "nested" ? y.vars.targets : v,
            })),
          w.kill(),
          (w.parent = w._dp = Ti(o)),
          (w._start = 0),
          m || tn(u) || tn(c))
        ) {
          if (((b = v.length), (S = m && pl(m)), di(m)))
            for (T in m) ~Al.indexOf(T) && (L || (L = {}), (L[T] = m[T]));
          for (D = 0; D < b; D++)
            (x = on(r, Fl)),
              (x.stagger = 0),
              _ && (x.yoyoEase = _),
              L && Or(x, L),
              (E = v[D]),
              (x.duration = +ys(u, Ti(o), D, E, v)),
              (x.delay = (+ys(c, Ti(o), D, E, v) || 0) - o._delay),
              !m &&
                b === 1 &&
                x.delay &&
                ((o._delay = c = x.delay), (o._start += c), (x.delay = 0)),
              w.to(E, x, S ? S(D, E, v) : 0),
              (w._ease = le.none);
          w.duration() ? (u = c = 0) : (o.timeline = 0);
        } else if (f) {
          cs(Bt(w.vars.defaults, { ease: "none" })),
            (w._ease = ir(f.ease || r.ease || "none"));
          var P = 0,
            k,
            F,
            R;
          if (at(f))
            f.forEach(function (I) {
              return w.to(v, I, ">");
            }),
              w.duration();
          else {
            x = {};
            for (T in f)
              T === "ease" || T === "easeEach" || ep(T, f[T], x, f.easeEach);
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
        p === !0 && !aa && ((qi = Ti(o)), Te.killTweensOf(v), (qi = 0)),
        pi(y, Ti(o), n),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (h ||
          (!u &&
            !f &&
            o._start === $e(y._time) &&
            Ct(h) &&
            Ff(Ti(o)) &&
            y.data !== "nested")) &&
          ((o._tTime = -he), o.render(Math.max(0, -c) || 0)),
        g && ll(Ti(o), g),
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
        if (!u) Lf(this, r, n, a);
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
              ((m = $e(h % d)),
              h === l
                ? ((f = this._repeat), (m = u))
                : ((g = $e(h / d)),
                  (f = ~~g),
                  f && f === g ? ((m = u), f--) : m > u && (m = u)),
              (_ = this._yoyo && f & 1),
              _ && ((w = this._yEase), (m = u - m)),
              (g = Lr(this._tTime, d)),
              m === o && !a && this._initted && f === g)
            )
              return (this._tTime = h), this;
            f !== g &&
              (v && this._yEase && Tl(v, _),
              this.vars.repeatRefresh &&
                !_ &&
                !this._lock &&
                m !== d &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render($e(d * f), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (ul(this, c ? r : m, a, n, h)) return (this._tTime = 0), this;
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
            m && !o && !n && !f && (Nt(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(y, p.d), (p = p._next);
          (v && v.render(r < 0 ? r : v._dur * v._ease(m / this._dur), n, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (c && wa(this, r, n, a), Nt(this, "onUpdate")),
            this._repeat &&
              f !== g &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              Nt(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (c && !this._onUpdate && wa(this, r, !0, !0),
              (r || !u) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                $i(this, 1),
              !n &&
                !(c && !o) &&
                (h || o || _) &&
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
        gs || qt.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Aa(this, u),
          (c = this._ease(u / this._dur)),
          Qf(this, r, n, a, o, c, u, l)
            ? this.resetTo(r, n, a, o, 1)
            : (dn(this, 0),
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
              : this.scrollTrigger && this.scrollTrigger.kill(!!et),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, qi && qi.vars.overwrite !== !0)
              ._first || hs(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              kr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? Zt(r) : o,
          u = this._ptLookup,
          c = this._pt,
          h,
          m,
          p,
          f,
          d,
          g,
          _;
        if ((!n || n === "all") && Pf(o, l))
          return n === "all" && (this._pt = 0), hs(this);
        for (
          h = this._op = this._op || [],
            n !== "all" &&
              (je(n) &&
                ((d = {}),
                Mt(n, function (y) {
                  return (d[y] = 1);
                }),
                (n = d)),
              (n = Jf(o, n))),
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
                    ln(this, g, "_pt"),
                  delete m[d]),
                p !== "all" && (p[d] = 1);
          }
        return this._initted && !this._pt && c && hs(this), this;
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
        return Te.killTweensOf(r, n, a);
      }),
      e
    );
  })(vs);
  Bt(Be.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Mt("staggerTo,staggerFrom,staggerFromTo", function (s) {
      Be[s] = function () {
        var e = new yt(),
          t = ba.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
      };
    });
  var Fa = function (e, t, i) {
      return (e[t] = i);
    },
    Ol = function (e, t, i) {
      return e[t](i);
    },
    tp = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    ip = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    Oa = function (e, t) {
      return Ae(e[t]) ? Ol : la(e[t]) && e.setAttribute ? ip : Fa;
    },
    Ll = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    rp = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    kl = function (e, t) {
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
    sp = function (e, t, i, r) {
      for (var n = this._pt, a; n; )
        (a = n._next), n.p === r && n.modifier(e, t, i), (n = a);
    },
    np = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? ln(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    ap = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    Il = function (e) {
      for (var t = e._pt, i, r, n, a; t; ) {
        for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (n = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = n;
    },
    Pt = (function () {
      function s(t, i, r, n, a, o, l, u, c) {
        (this.t = i),
          (this.s = n),
          (this.c = a),
          (this.p = r),
          (this.r = o || Ll),
          (this.d = l || this),
          (this.set = u || Fa),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = s.prototype;
      return (
        (e.modifier = function (i, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = ap),
            (this.m = i),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  Mt(
    ya +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (ma[s] = 1);
    }
  ),
    (Rt.TweenMax = Rt.TweenLite = Be),
    (Rt.TimelineLite = Rt.TimelineMax = yt),
    (Te = new yt({
      sortChildren: !1,
      defaults: Pr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (zt.stringFilter = El);
  var sr = [],
    fn = {},
    op = [],
    zl = 0,
    lp = 0,
    ka = function (e) {
      return (fn[e] || op).map(function (t) {
        return t();
      });
    },
    Ia = function () {
      var e = Date.now(),
        t = [];
      e - zl > 2 &&
        (ka("matchMediaInit"),
        sr.forEach(function (i) {
          var r = i.queries,
            n = i.conditions,
            a,
            o,
            l,
            u;
          for (o in r)
            (a = fi.matchMedia(r[o]).matches),
              a && (l = 1),
              a !== n[o] && ((n[o] = a), (u = 1));
          u && (i.revert(), l && t.push(i));
        }),
        ka("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (zl = e),
        ka("matchMedia"));
    },
    Rl = (function () {
      function s(t, i) {
        (this.selector = i && Sa(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = lp++),
          t && this.add(t);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          Ae(i) && ((n = r), (r = i), (i = Ae));
          var a = this,
            o = function () {
              var u = be,
                c = a.selector,
                h;
              return (
                u && u !== a && u.data.push(a),
                n && (a.selector = Sa(n)),
                (be = a),
                (h = r.apply(a, arguments)),
                Ae(h) && a._r.push(h),
                (be = u),
                (a.selector = c),
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
          var r = be;
          (be = null), i(this), (be = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof s
                ? i.push.apply(i, r.getTweens())
                : r instanceof Be &&
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
                      u instanceof yt
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Be) && u.revert && u.revert(i);
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
    up = (function () {
      function s(t) {
        (this.contexts = []), (this.scope = t), be && be.data.push(this);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          di(i) || (i = { matches: i });
          var a = new Rl(0, n || this.scope),
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
              : ((l = fi.matchMedia(i[u])),
                l &&
                  (sr.indexOf(a) < 0 && sr.push(a),
                  (o[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(Ia)
                    : l.addEventListener("change", Ia)));
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
    pn = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return wl(r);
        });
      },
      timeline: function (e) {
        return new yt(e);
      },
      getTweensOf: function (e, t) {
        return Te.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        je(e) && (e = Zt(e)[0]);
        var n = er(e || {}).get,
          a = i ? rl : il;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a((($t[t] && $t[t].get) || n)(e, t, i, r))
              : function (o, l, u) {
                  return a((($t[o] && $t[o].get) || n)(e, o, l, u));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Zt(e)), e.length > 1)) {
          var r = e.map(function (c) {
              return At.quickSetter(c, t, i);
            }),
            n = r.length;
          return function (c) {
            for (var h = n; h--; ) r[h](c);
          };
        }
        e = e[0] || {};
        var a = $t[t],
          o = er(e),
          l = (o.harness && (o.harness.aliases || {})[t]) || t,
          u = a
            ? function (c) {
                var h = new a();
                (Ir._pt = 0),
                  h.init(e, i ? c + i : c, Ir, 0, [e]),
                  h.render(1, h),
                  Ir._pt && La(1, Ir);
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
          n = At.to(
            e,
            Bt(
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
        return e && e.ease && (e.ease = ir(e.ease, Pr.ease)), sl(Pr, e || {});
      },
      config: function (e) {
        return sl(zt, e || {});
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
            !$t[o] &&
            !Rt[o] &&
            ls(t + " effect requires " + o + " plugin.")
          );
        }),
          (va[t] = function (o, l, u) {
            return i(Zt(o), Bt(l || {}, n), u);
          }),
          a &&
            (yt.prototype[t] = function (o, l, u) {
              return this.add(va[t](o, di(l) ? l : (u = l) && {}, this), u);
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
        var i = new yt(e),
          r,
          n;
        for (
          i.smoothChildTiming = Ct(e.smoothChildTiming),
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
                r instanceof Be &&
                r.vars.onComplete === r._targets[0]
              )) &&
              pi(i, r, r._start - r._delay),
            (r = n);
        return pi(Te, i, 0), i;
      },
      context: function (e, t) {
        return e ? new Rl(e, t) : be;
      },
      matchMedia: function (e) {
        return new up(e);
      },
      matchMediaRefresh: function () {
        return (
          sr.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || Ia()
        );
      },
      addEventListener: function (e, t) {
        var i = fn[e] || (fn[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = fn[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: qf,
        wrapYoyo: Vf,
        distribute: pl,
        random: ml,
        snap: hl,
        normalize: Nf,
        getUnit: ot,
        clamp: zf,
        splitColor: Dl,
        toArray: Zt,
        selector: Sa,
        mapRange: vl,
        pipe: $f,
        unitize: Bf,
        interpolate: Hf,
        shuffle: fl,
      },
      install: Ko,
      effects: va,
      ticker: qt,
      updateRoot: yt.updateRoot,
      plugins: $t,
      globalTimeline: Te,
      core: {
        PropTween: Pt,
        globals: Zo,
        Tween: Be,
        Timeline: yt,
        Animation: vs,
        getCache: er,
        _removeLinkedListItem: ln,
        reverting: function () {
          return et;
        },
        context: function (e) {
          return e && be && (be.data.push(e), (e._ctx = be)), be;
        },
        suppressOverwrites: function (e) {
          return (aa = e);
        },
      },
    };
  Mt("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (pn[s] = Be[s]);
  }),
    qt.add(yt.updateRoot),
    (Ir = pn.to({}, { duration: 0 }));
  var cp = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    dp = function (e, t) {
      var i = e._targets,
        r,
        n,
        a;
      for (r in t)
        for (n = i.length; n--; )
          (a = e._ptLookup[n][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = cp(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[n], r));
    },
    za = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, n, a) {
          a._onInit = function (o) {
            var l, u;
            if (
              (je(n) &&
                ((l = {}),
                Mt(n, function (c) {
                  return (l[c] = 1);
                }),
                (n = l)),
              t)
            ) {
              l = {};
              for (u in n) l[u] = t(n[u]);
              n = l;
            }
            dp(o, n);
          };
        },
      };
    },
    At =
      pn.registerPlugin(
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
        za("roundProps", Ea),
        za("modifiers"),
        za("snap", hl)
      ) || pn;
  (Be.version = yt.version = At.version = "3.12.7"),
    (Uo = 1),
    ua() && zr(),
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
   */ var $l,
    Vi,
    Rr,
    Ra,
    nr,
    Bl,
    $a,
    fp = function () {
      return typeof window != "undefined";
    },
    Mi = {},
    ar = 180 / Math.PI,
    $r = Math.PI / 180,
    Br = Math.atan2,
    Nl = 1e8,
    Ba = /([A-Z])/g,
    pp = /(left|right|width|margin|padding|x)/i,
    hp = /[\s,\(]\S/,
    hi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Na = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    mp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    gp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    vp = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    ql = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Vl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    yp = function (e, t, i) {
      return (e.style[t] = i);
    },
    _p = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    wp = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    Dp = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    bp = function (e, t, i, r, n) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(n, a);
    },
    Sp = function (e, t, i, r, n) {
      var a = e._gsap;
      (a[t] = i), a.renderTransform(n, a);
    },
    Ce = "transform",
    Ft = Ce + "Origin",
    Ep = function s(e, t) {
      var i = this,
        r = this.target,
        n = r.style,
        a = r._gsap;
      if (e in Mi && n) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = hi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = Pi(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : Pi(r, e)),
            e === Ft && (this.tfm.zOrigin = a.zOrigin);
        else
          return hi.transform.split(",").forEach(function (o) {
            return s.call(i, o, t);
          });
        if (this.props.indexOf(Ce) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Ft, t, "")),
          (e = Ce);
      }
      (n || t) && this.props.push(e, t, n[e]);
    },
    Hl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    xp = function () {
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
                : e[n].replace(Ba, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (n = $a()),
          (!n || !n.isStart) &&
            !i[Ce] &&
            (Hl(i),
            r.zOrigin &&
              i[Ft] &&
              ((i[Ft] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    Wl = function (e, t) {
      var i = { target: e, props: [], revert: xp, save: Ep };
      return (
        e._gsap || At.core.getCache(e),
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
    qa = function (e, t) {
      var i = Vi.createElementNS
        ? Vi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Vi.createElement(e);
      return i && i.style ? i : Vi.createElement(e);
    },
    mi = function s(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(Ba, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && s(e, Nr(t) || t, 1)) ||
        ""
      );
    },
    Xl = "O,Moz,ms,Ms,Webkit".split(","),
    Nr = function (e, t, i) {
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
    Va = function () {
      fp() &&
        window.document &&
        (($l = window),
        (Vi = $l.document),
        (Rr = Vi.documentElement),
        (nr = qa("div") || { style: {} }),
        qa("div"),
        (Ce = Nr(Ce)),
        (Ft = Ce + "Origin"),
        (nr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Yl = !!Nr("perspective")),
        ($a = At.core.reverting),
        (Ra = 1));
    },
    Gl = function (e) {
      var t = e.ownerSVGElement,
        i = qa(
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
        t in Mi && t !== Ft && (t = Ce),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(Ba, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Hi = function (e, t, i, r, n, a) {
      var o = new Pt(e._pt, t, i, 0, 1, a ? Vl : ql);
      return (e._pt = o), (o.b = r), (o.e = n), e._props.push(i), o;
    },
    Zl = { deg: 1, rad: 1, turn: 1 },
    Tp = { grid: 1, flex: 1 },
    Wi = function s(e, t, i, r) {
      var n = parseFloat(i) || 0,
        a = (i + "").trim().substr((n + "").length) || "px",
        o = nr.style,
        l = pp.test(t),
        u = e.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        f,
        d,
        g,
        _;
      if (r === a || !n || Zl[r] || Zl[a]) return n;
      if (
        (a !== "px" && !m && (n = s(e, t, i, "px")),
        (_ = e.getCTM && Kl(e)),
        (p || a === "%") && (Mi[t] || ~t.indexOf("adius")))
      )
        return (
          (f = _ ? e.getBBox()[l ? "width" : "height"] : e[c]),
          Le(p ? (n / f) * h : (n / 100) * f)
        );
      if (
        ((o[l ? "width" : "height"] = h + (m ? a : r)),
        (d =
          (r !== "rem" && ~t.indexOf("adius")) ||
          (r === "em" && e.appendChild && !u)
            ? e
            : e.parentNode),
        _ && (d = (e.ownerSVGElement || {}).parentNode),
        (!d || d === Vi || !d.appendChild) && (d = Vi.body),
        (g = d._gsap),
        g && p && g.width && l && g.time === qt.time && !g.uncache)
      )
        return Le((n / g.width) * h);
      if (p && (t === "height" || t === "width")) {
        var y = e.style[t];
        (e.style[t] = h + r), (f = e[c]), y ? (e.style[t] = y) : or(e, t);
      } else
        (p || a === "%") &&
          !Tp[mi(d, "display")] &&
          (o.position = mi(e, "position")),
          d === e && (o.position = "static"),
          d.appendChild(nr),
          (f = nr[c]),
          d.removeChild(nr),
          (o.position = "absolute");
      return (
        l && p && ((g = er(d)), (g.time = qt.time), (g.width = d[c])),
        Le(m ? (f * n) / h : f && n ? (h / f) * n : 0)
      );
    },
    Pi = function (e, t, i, r) {
      var n;
      return (
        Ra || Va(),
        t in hi &&
          t !== "transform" &&
          ((t = hi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Mi[t] && t !== "transform"
          ? ((n = ws(e, r)),
            (n =
              t !== "transformOrigin"
                ? n[t]
                : n.svg
                ? n.origin
                : mn(mi(e, Ft)) + " " + n.zOrigin + "px"))
          : ((n = e.style[t]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (hn[t] && hn[t](e, t, i)) ||
                mi(e, t) ||
                el(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? Wi(e, t, n, i) + i : n
      );
    },
    Cp = function (e, t, i, r) {
      if (!i || i === "none") {
        var n = Nr(t, e, 1),
          a = n && mi(e, n, 1);
        a && a !== i
          ? ((t = n), (i = a))
          : t === "borderColor" && (i = mi(e, "borderTopColor"));
      }
      var o = new Pt(this._pt, e.style, t, 0, 1, kl),
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
          (r = mi(e, t) || r),
          d ? (e.style[t] = d) : or(e, t)),
        (c = [i, r]),
        El(c),
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
                ((v = v || zt.units[t] || w),
                l === r.length && ((r += v), (o.e += v))),
              w !== v && (p = Wi(e, t, d, v) || 0),
              (o._pt = {
                _next: o._pt,
                p: y || u === 1 ? y : ",",
                s: p,
                c: _ - p,
                m: (f && f < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = t === "display" && r === "none" ? Vl : ql;
      return Go.test(r) && (o.e = 0), (this._pt = o), o;
    },
    Ql = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Mp = function (e) {
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
    Pp = function (e, t) {
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
              Mi[o] && ((l = 1), (o = o === "transformOrigin" ? Ft : Ce)),
              or(i, o);
        l &&
          (or(i, Ce),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            ws(i, 1),
            (a.uncache = 1),
            Hl(r)));
      }
    },
    hn = {
      clearProps: function (e, t, i, r, n) {
        if (n.data !== "isFromStart") {
          var a = (e._pt = new Pt(e._pt, t, i, 0, 0, Pp));
          return (a.u = r), (a.pr = -10), (a.tween = n), e._props.push(i), 1;
        }
      },
    },
    _s = [1, 0, 0, 1, 0, 0],
    Jl = {},
    eu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    tu = function (e) {
      var t = mi(e, Ce);
      return eu(t) ? _s : t.substr(7).match(Xo).map(Le);
    },
    Ha = function (e, t) {
      var i = e._gsap || er(e),
        r = e.style,
        n = tu(e),
        a,
        o,
        l,
        u;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? _s : n)
        : (n === _s &&
            !e.offsetParent &&
            e !== Rr &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((u = 1), (o = e.nextElementSibling), Rr.appendChild(e)),
            (n = tu(e)),
            l ? (r.display = l) : or(e, "display"),
            u &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Rr.removeChild(e))),
          t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Wa = function (e, t, i, r, n, a) {
      var o = e._gsap,
        l = n || Ha(e, !0),
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
        ? l !== _s &&
          (b = p * g - f * d) &&
          ((T = w * (g / b) + D * (-d / b) + (d * y - g * _) / b),
          (E = w * (-f / b) + D * (p / b) - (p * y - f * _) / b),
          (w = T),
          (D = E))
        : ((x = Ul(e)),
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
        (e.style[Ft] = "0px 0px"),
        a &&
          (Hi(a, o, "xOrigin", u, w),
          Hi(a, o, "yOrigin", c, D),
          Hi(a, o, "xOffset", h, o.xOffset),
          Hi(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", w + " " + D);
    },
    ws = function (e, t) {
      var i = e._gsap || new Ml(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        n = i.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        u = mi(e, Ft) || "0",
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
        De,
        se,
        $;
      return (
        (c = h = m = d = g = _ = y = v = w = 0),
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
        (b = Ha(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((O = e.getBBox()),
              (u = i.xOrigin - O.x + "px " + (i.yOrigin - O.y) + "px"),
              (M = ""))
            : (M = !t && e.getAttribute("data-svg-origin")),
          Wa(e, M || u, !!M || i.originIsAbsolute, i.smooth !== !1, b)),
        (D = i.xOrigin || 0),
        (x = i.yOrigin || 0),
        b !== _s &&
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
              (De = b[7]),
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
                (se = De * -S + se * E),
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
              (p = Le(Math.sqrt(L * L + P * P + k * k))),
              (f = Le(Math.sqrt(I * I + $ * $))),
              (T = Br(R, I)),
              (y = Math.abs(T) > 2e-4 ? T * ar : 0),
              (w = se ? 1 / (se < 0 ? -se : se) : 0)),
          i.svg &&
            ((M = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !eu(mi(e, Ce))),
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
        (i.transformPerspective = w + a),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[Ft] = mn(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = zt.force3D),
        (i.renderTransform = i.svg ? Fp : Yl ? iu : Ap),
        (i.uncache = 0),
        i
      );
    },
    mn = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Ya = function (e, t, i) {
      var r = ot(t);
      return Le(parseFloat(t) + parseFloat(Wi(e, "x", i + "px", r))) + r;
    },
    Ap = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        iu(e, t);
    },
    lr = "0deg",
    Ds = "0px",
    ur = ") ",
    iu = function (e, t) {
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
          (a = Ya(y, a, b * E * -v)),
          (o = Ya(y, o, -Math.sin(x) * -v)),
          (l = Ya(y, l, T * E * -v + v));
      }
      g !== Ds && (w += "perspective(" + g + ur),
        (r || n) && (w += "translate(" + r + "%, " + n + "%) "),
        (D || a !== Ds || o !== Ds || l !== Ds) &&
          (w +=
            l !== Ds || D
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + ur),
        u !== lr && (w += "rotate(" + u + ur),
        c !== lr && (w += "rotateY(" + c + ur),
        h !== lr && (w += "rotateX(" + h + ur),
        (m !== lr || p !== lr) && (w += "skew(" + m + ", " + p + ur),
        (f !== 1 || d !== 1) && (w += "scale(" + f + ", " + d + ur),
        (y.style[Ce] = w || "translate(0, 0)");
    },
    Fp = function (e, t) {
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
            (D = Le(D)),
            (x = Le(x)),
            (b = Le(b)),
            (T = Le(T)))
          : ((D = h), (T = m), (x = b = 0)),
        ((v && !~(a + "").indexOf("px")) || (w && !~(o + "").indexOf("px"))) &&
          ((v = Wi(p, "x", a, "px")), (w = Wi(p, "y", o, "px"))),
        (f || d || g || _) &&
          ((v = Le(v + f - (f * D + d * b) + g)),
          (w = Le(w + d - (f * x + d * T) + _))),
        (r || n) &&
          ((E = p.getBBox()),
          (v = Le(v + (r / 100) * E.width)),
          (w = Le(w + (n / 100) * E.height))),
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
    Op = function (e, t, i, r, n) {
      var a = 360,
        o = je(n),
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
            ? (u = ((u + a * Nl) % a) - ~~(u / a) * a)
            : h === "ccw" && u > 0 && (u = ((u - a * Nl) % a) - ~~(u / a) * a)),
        (e._pt = m = new Pt(e._pt, t, i, r, u, mp)),
        (m.e = c),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    ru = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Lp = function (e, t, i) {
      var r = ru({}, i._gsap),
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
          (o = ws(i, 1)),
          or(i, Ce),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[Ce]),
          (a[Ce] = t),
          (o = ws(i, 1)),
          (a[Ce] = u));
      for (l in Mi)
        (u = r[l]),
          (c = o[l]),
          u !== c &&
            n.indexOf(l) < 0 &&
            ((p = ot(u)),
            (f = ot(c)),
            (h = p !== f ? Wi(i, l, u, f) : parseFloat(u)),
            (m = parseFloat(c)),
            (e._pt = new Pt(e._pt, o, l, h, m - h, Na)),
            (e._pt.u = f || 0),
            e._props.push(l));
      ru(o, r);
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
    hn[e > 1 ? "border" + s : s] = function (o, l, u, c, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = a.map(function (f) {
            return Pi(o, f, u);
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
  var su = {
    name: "css",
    register: Va,
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
      Ra || Va(),
        (this.styles = this.styles || Wl(e)),
        (T = this.styles.props),
        (this.tween = i);
      for (d in t)
        if (
          d !== "autoRound" &&
          ((c = t[d]), !($t[d] && Pl(d, t, i, r, e, n)))
        ) {
          if (
            ((p = typeof c),
            (f = hn[d]),
            p === "function" && ((c = c.call(i, r, e, n)), (p = typeof c)),
            p === "string" && ~c.indexOf("random(") && (c = ps(c)),
            f)
          )
            f(this, e, d, c, i) && (b = 1);
          else if (d.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
              (c += ""),
              (Ni.lastIndex = 0),
              Ni.test(u) || ((g = ot(u)), (_ = ot(c))),
              _ ? g !== _ && (u = Wi(e, d, u, _) + _) : g && (c += g),
              this.add(o, "setProperty", u, c, r, n, 0, 0, d),
              a.push(d),
              T.push(d, 0, o[d]);
          else if (p !== "undefined") {
            if (
              (l && d in l
                ? ((u =
                    typeof l[d] == "function" ? l[d].call(i, r, e, n) : l[d]),
                  je(u) && ~u.indexOf("random(") && (u = ps(u)),
                  ot(u + "") ||
                    u === "auto" ||
                    (u += zt.units[d] || ot(Pi(e, d)) || ""),
                  (u + "").charAt(1) === "=" && (u = Pi(e, d)))
                : (u = Pi(e, d)),
              (m = parseFloat(u)),
              (y = p === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              y && (c = c.substr(2)),
              (h = parseFloat(c)),
              d in hi &&
                (d === "autoAlpha" &&
                  (m === 1 && Pi(e, "visibility") === "hidden" && h && (m = 0),
                  T.push("visibility", 0, o.visibility),
                  Hi(
                    this,
                    o,
                    "visibility",
                    m ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                d !== "scale" &&
                  d !== "transform" &&
                  ((d = hi[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
              (v = d in Mi),
              v)
            ) {
              if (
                (this.styles.save(d),
                w ||
                  ((D = e._gsap),
                  (D.renderTransform && !t.parseTransform) ||
                    ws(e, t.parseTransform),
                  (x = t.smoothOrigin !== !1 && D.smooth),
                  (w = this._pt =
                    new Pt(this._pt, o, Ce, 0, 1, D.renderTransform, D, 0, -1)),
                  (w.dep = 1)),
                d === "scale")
              )
                (this._pt = new Pt(
                  this._pt,
                  D,
                  "scaleY",
                  D.scaleY,
                  (y ? Fr(D.scaleY, y + h) : h) - D.scaleY || 0,
                  Na
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", d),
                  (d += "X");
              else if (d === "transformOrigin") {
                T.push(Ft, 0, o[Ft]),
                  (c = Mp(c)),
                  D.svg
                    ? Wa(e, c, 0, x, 0, this)
                    : ((_ = parseFloat(c.split(" ")[2]) || 0),
                      _ !== D.zOrigin && Hi(this, D, "zOrigin", D.zOrigin, _),
                      Hi(this, o, d, mn(u), mn(c)));
                continue;
              } else if (d === "svgOrigin") {
                Wa(e, c, 1, x, 0, this);
                continue;
              } else if (d in Jl) {
                Op(this, D, d, m, y ? Fr(m, y + c) : c);
                continue;
              } else if (d === "smoothOrigin") {
                Hi(this, D, "smooth", D.smooth, c);
                continue;
              } else if (d === "force3D") {
                D[d] = c;
                continue;
              } else if (d === "transform") {
                Lp(this, c, e);
                continue;
              }
            } else d in o || (d = Nr(d) || d);
            if (
              v ||
              ((h || h === 0) && (m || m === 0) && !hp.test(c) && d in o)
            )
              (g = (u + "").substr((m + "").length)),
                h || (h = 0),
                (_ = ot(c) || (d in zt.units ? zt.units[d] : g)),
                g !== _ && (m = Wi(e, d, u, _)),
                (this._pt = new Pt(
                  this._pt,
                  v ? D : o,
                  d,
                  m,
                  (y ? Fr(m, y + h) : h) - m,
                  !v && (_ === "px" || d === "zIndex") && t.autoRound !== !1
                    ? vp
                    : Na
                )),
                (this._pt.u = _ || 0),
                g !== _ && _ !== "%" && ((this._pt.b = u), (this._pt.r = gp));
            else if (d in o) Cp.call(this, e, d, u, y ? y + c : c);
            else if (d in e) this.add(e, d, u || e[d], y ? y + c : c, r, n);
            else if (d !== "parseTransform") {
              ha(d, c);
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
      b && Il(this);
    },
    render: function (e, t) {
      if (t.tween._time || !$a())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Pi,
    aliases: hi,
    getSetter: function (e, t, i) {
      var r = hi[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in Mi && t !== Ft && (e._gsap.x || Pi(e, "x"))
          ? i && Bl === i
            ? t === "scale"
              ? Dp
              : wp
            : (Bl = i || {}) && (t === "scale" ? bp : Sp)
          : e.style && !la(e.style[t])
          ? yp
          : ~t.indexOf("-")
          ? _p
          : Oa(e, t)
      );
    },
    core: { _removeProperty: or, _getMatrix: Ha },
  };
  (At.utils.checkPrefix = Nr),
    (At.core.getStyleSaver = Wl),
    (function (s, e, t, i) {
      var r = Mt(s + "," + e + "," + t, function (n) {
        Mi[n] = 1;
      });
      Mt(e, function (n) {
        (zt.units[n] = "deg"), (Jl[n] = 1);
      }),
        (hi[r[13]] = s + "," + e),
        Mt(i, function (n) {
          var a = n.split(":");
          hi[a[1]] = r[a[0]];
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
        zt.units[s] = "px";
      }
    ),
    At.registerPlugin(su);
  var q = At.registerPlugin(su) || At;
  q.core.Tween;
  function kp(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function Ip(s, e, t) {
    return e && kp(s.prototype, e), s;
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
    gn,
    Vt,
    Yi,
    Xi,
    qr,
    nu,
    cr,
    bs,
    au,
    Ai,
    ri,
    ou,
    lu = function () {
      return (
        tt ||
        (typeof window != "undefined" &&
          (tt = window.gsap) &&
          tt.registerPlugin &&
          tt)
      );
    },
    uu = 1,
    Vr = [],
    ie = [],
    gi = [],
    Ss = Date.now,
    Xa = function (e, t) {
      return t;
    },
    zp = function () {
      var e = bs.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, ie),
        r.push.apply(r, gi),
        (ie = i),
        (gi = r),
        (Xa = function (a, o) {
          return t[a](o);
        });
    },
    Gi = function (e, t) {
      return ~gi.indexOf(e) && gi[gi.indexOf(e) + 1][t];
    },
    Es = function (e) {
      return !!~au.indexOf(e);
    },
    _t = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!n });
    },
    wt = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    vn = "scrollLeft",
    yn = "scrollTop",
    Ga = function () {
      return (Ai && Ai.isPressed) || ie.cache++;
    },
    _n = function (e, t) {
      var i = function r(n) {
        if (n || n === 0) {
          uu && (Vt.history.scrollRestoration = "manual");
          var a = Ai && Ai.isPressed;
          (n = r.v = Math.round(n) || (Ai && Ai.iOS ? 1 : 0)),
            e(n),
            (r.cacheID = ie.cache),
            a && Xa("ss", n);
        } else
          (t || ie.cache !== r.cacheID || Xa("ref")) &&
            ((r.cacheID = ie.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    Dt = {
      s: vn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: _n(function (s) {
        return arguments.length
          ? Vt.scrollTo(s, We.sc())
          : Vt.pageXOffset || Yi[vn] || Xi[vn] || qr[vn] || 0;
      }),
    },
    We = {
      s: yn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Dt,
      sc: _n(function (s) {
        return arguments.length
          ? Vt.scrollTo(Dt.sc(), s)
          : Vt.pageYOffset || Yi[yn] || Xi[yn] || qr[yn] || 0;
      }),
    },
    Ot = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || tt.utils.toArray)(e)[0] ||
        (typeof e == "string" && tt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    ji = function (e, t) {
      var i = t.s,
        r = t.sc;
      Es(e) && (e = Yi.scrollingElement || Xi);
      var n = ie.indexOf(e),
        a = r === We.sc ? 1 : 2;
      !~n && (n = ie.push(e) - 1), ie[n + a] || _t(e, "scroll", Ga);
      var o = ie[n + a],
        l =
          o ||
          (ie[n + a] =
            _n(Gi(e, i), !0) ||
            (Es(e)
              ? r
              : _n(function (u) {
                  return arguments.length ? (e[i] = u) : e[i];
                })));
      return (
        (l.target = e),
        o || (l.smooth = tt.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    ja = function (e, t, i) {
      var r = e,
        n = e,
        a = Ss(),
        o = a,
        l = t || 50,
        u = Math.max(500, l * 3),
        c = function (f, d) {
          var g = Ss();
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
            _ = Ss();
          return (
            (f || f === 0) && f !== r && c(f),
            a === o || _ - o > u
              ? 0
              : ((r + (i ? g : -g)) / ((i ? _ : a) - d)) * 1e3
          );
        };
      return { update: c, reset: h, getVelocity: m };
    },
    xs = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    cu = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    du = function () {
      (bs = tt.core.globals().ScrollTrigger), bs && bs.core && zp();
    },
    fu = function (e) {
      return (
        (tt = e || lu()),
        !gn &&
          tt &&
          typeof document != "undefined" &&
          document.body &&
          ((Vt = window),
          (Yi = document),
          (Xi = Yi.documentElement),
          (qr = Yi.body),
          (au = [Vt, Yi, Xi, qr]),
          tt.utils.clamp,
          (ou = tt.core.context || function () {}),
          (cr = "onpointerenter" in qr ? "pointer" : "mouse"),
          (nu = ke.isTouch =
            Vt.matchMedia &&
            Vt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Vt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (ri = ke.eventTypes =
            (
              "ontouchstart" in Xi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Xi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (uu = 0);
          }, 500),
          du(),
          (gn = 1)),
        gn
      );
    };
  (Dt.op = We), (ie.cache = 0);
  var ke = (function () {
    function s(t) {
      this.init(t);
    }
    var e = s.prototype;
    return (
      (e.init = function (i) {
        gn || fu(tt) || console.warn("Please gsap.registerPlugin(Observer)"),
          bs || du();
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
          De = i.onDisable,
          se = i.onClick,
          $ = i.scrollSpeed,
          B = i.capture,
          N = i.allowClicks,
          j = i.lockAxis,
          ce = i.onLockAxis;
        (this.target = o = Ot(o) || Xi),
          (this.vars = i),
          p && (p = tt.utils.toArray(p)),
          (r = r || 1e-9),
          (n = n || 0),
          (f = f || 1),
          ($ = $ || 1),
          (a = a || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Vt.getComputedStyle(qr).lineHeight) || 22);
        var it,
          Se,
          Ee,
          J,
          ne,
          _e,
          Xe,
          z = this,
          qe = 0,
          ft = 0,
          Xt = i.passive || (!c && i.passive !== !1),
          we = ji(o, Dt),
          Gt = ji(o, We),
          ti = we(),
          ni = Gt(),
          Fe =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            ri[0] === "pointerdown",
          ii = Es(o),
          pe = o.ownerDocument || Yi,
          Lt = [0, 0, 0],
          Ze = [0, 0, 0],
          Li = 0,
          Ws = function () {
            return (Li = Ss());
          },
          Ve = function (U, de) {
            return (
              ((z.event = U) && p && ~p.indexOf(U.target)) ||
              (de && Fe && U.pointerType !== "touch") ||
              (M && M(U, de))
            );
          },
          Yn = function () {
            z._vx.reset(), z._vy.reset(), Se.pause(), h && h(z);
          },
          ki = function () {
            var U = (z.deltaX = cu(Lt)),
              de = (z.deltaY = cu(Ze)),
              V = Math.abs(U) >= r,
              K = Math.abs(de) >= r;
            L && (V || K) && L(z, U, de, Lt, Ze),
              V &&
                (D && z.deltaX > 0 && D(z),
                x && z.deltaX < 0 && x(z),
                E && E(z),
                P && z.deltaX < 0 != qe < 0 && P(z),
                (qe = z.deltaX),
                (Lt[0] = Lt[1] = Lt[2] = 0)),
              K &&
                (T && z.deltaY > 0 && T(z),
                b && z.deltaY < 0 && b(z),
                S && S(z),
                k && z.deltaY < 0 != ft < 0 && k(z),
                (ft = z.deltaY),
                (Ze[0] = Ze[1] = Ze[2] = 0)),
              (J || Ee) &&
                (I && I(z),
                Ee && (g && Ee === 1 && g(z), y && y(z), (Ee = 0)),
                (J = !1)),
              _e && !(_e = !1) && ce && ce(z),
              ne && (W(z), (ne = !1)),
              (it = 0);
          },
          Qr = function (U, de, V) {
            (Lt[V] += U),
              (Ze[V] += de),
              z._vx.update(U),
              z._vy.update(de),
              u ? it || (it = requestAnimationFrame(ki)) : ki();
          },
          Jr = function (U, de) {
            j &&
              !Xe &&
              ((z.axis = Xe = Math.abs(U) > Math.abs(de) ? "x" : "y"),
              (_e = !0)),
              Xe !== "y" && ((Lt[2] += U), z._vx.update(U, !0)),
              Xe !== "x" && ((Ze[2] += de), z._vy.update(de, !0)),
              u ? it || (it = requestAnimationFrame(ki)) : ki();
          },
          Zi = function (U) {
            if (!Ve(U, 1)) {
              U = xs(U, c);
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
            Ve(ee, 1) ||
              (ee && ee.button) ||
              ((z.axis = Xe = null),
              Se.pause(),
              (z.isPressed = !0),
              (ee = xs(ee)),
              (qe = ft = 0),
              (z.startX = z.x = ee.clientX),
              (z.startY = z.y = ee.clientY),
              z._vx.reset(),
              z._vy.reset(),
              _t(O ? o : pe, ri[1], Zi, Xt, !0),
              (z.deltaX = z.deltaY = 0),
              v && v(z));
          }),
          oe = (z.onRelease = function (ee) {
            if (!Ve(ee, 1)) {
              wt(O ? o : pe, ri[1], Zi, !0);
              var U = !isNaN(z.y - z.startY),
                de = z.isDragging,
                V =
                  de &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                K = xs(ee);
              !V &&
                U &&
                (z._vx.reset(),
                z._vy.reset(),
                c &&
                  N &&
                  tt.delayedCall(0.08, function () {
                    if (Ss() - Li > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (pe.createEvent) {
                        var G = pe.createEvent("MouseEvents");
                        G.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Vt,
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
                Ee && ki(),
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
          ai = function () {
            return (z.isGesturing = !1) || C(z);
          },
          oi = function (U) {
            if (!Ve(U)) {
              var de = we(),
                V = Gt();
              Qr((de - ti) * $, (V - ni) * $, 1),
                (ti = de),
                (ni = V),
                h && Se.restart(!0);
            }
          },
          li = function (U) {
            if (!Ve(U)) {
              (U = xs(U, c)), W && (ne = !0);
              var de =
                (U.deltaMode === 1
                  ? l
                  : U.deltaMode === 2
                  ? Vt.innerHeight
                  : 1) * f;
              Qr(U.deltaX * de, U.deltaY * de, 0), h && !O && Se.restart(!0);
            }
          },
          xr = function (U) {
            if (!Ve(U)) {
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
          Ii = function (U) {
            (z.event = U), R(z);
          },
          Ys = function (U) {
            return Ve(U) || (xs(U, c) && se(z));
          };
        (Se = z._dc = tt.delayedCall(m || 0.25, Yn).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = ja(0, 50, !0)),
          (z._vy = ja(0, 50, !0)),
          (z.scrollX = we),
          (z.scrollY = Gt),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          ou(this),
          (z.enable = function (ee) {
            return (
              z.isEnabled ||
                (_t(ii ? pe : o, "scroll", Ga),
                a.indexOf("scroll") >= 0 &&
                  _t(ii ? pe : o, "scroll", oi, Xt, B),
                a.indexOf("wheel") >= 0 && _t(o, "wheel", li, Xt, B),
                ((a.indexOf("touch") >= 0 && nu) ||
                  a.indexOf("pointer") >= 0) &&
                  (_t(o, ri[0], Sr, Xt, B),
                  _t(pe, ri[2], oe),
                  _t(pe, ri[3], oe),
                  N && _t(o, "click", Ws, !0, !0),
                  se && _t(o, "click", Ys),
                  A && _t(pe, "gesturestart", Er),
                  C && _t(pe, "gestureend", ai),
                  F && _t(o, cr + "enter", es),
                  R && _t(o, cr + "leave", Ii),
                  I && _t(o, cr + "move", xr)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = J = Ee = !1),
                z._vx.reset(),
                z._vy.reset(),
                (ti = we()),
                (ni = Gt()),
                ee && ee.type && Sr(ee),
                Q && Q(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (Vr.filter(function (ee) {
                return ee !== z && Es(ee.target);
              }).length || wt(ii ? pe : o, "scroll", Ga),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), wt(O ? o : pe, ri[1], Zi, !0)),
              wt(ii ? pe : o, "scroll", oi, B),
              wt(o, "wheel", li, B),
              wt(o, ri[0], Sr, B),
              wt(pe, ri[2], oe),
              wt(pe, ri[3], oe),
              wt(o, "click", Ws, !0),
              wt(o, "click", Ys),
              wt(pe, "gesturestart", Er),
              wt(pe, "gestureend", ai),
              wt(o, cr + "enter", es),
              wt(o, cr + "leave", Ii),
              wt(o, cr + "move", xr),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              De && De(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var ee = Vr.indexOf(z);
              ee >= 0 && Vr.splice(ee, 1), Ai === z && (Ai = 0);
            }),
          Vr.push(z),
          O && Es(o) && (Ai = z),
          z.enable(d);
      }),
      Ip(s, [
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
    (ke.register = fu),
    (ke.getAll = function () {
      return Vr.slice();
    }),
    (ke.getById = function (s) {
      return Vr.filter(function (e) {
        return e.vars.id === s;
      })[0];
    }),
    lu() && tt.registerPlugin(ke);
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
    ye,
    Ht,
    fe,
    Ua,
    wn,
    Ts,
    Cs,
    Ms,
    Dn,
    lt,
    bn,
    Ka,
    bt,
    pu,
    hu,
    Wr,
    mu,
    Za,
    gu,
    St,
    Qa,
    vu,
    yu,
    Ui,
    Ja,
    eo,
    Yr,
    to,
    Sn,
    io,
    ro,
    En = 1,
    ut = Date.now,
    so = ut(),
    Qt = 0,
    Ps = 0,
    _u = function (e, t, i) {
      var r = Wt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    wu = function (e, t) {
      return t && (!Wt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Rp = function s() {
      return Ps && requestAnimationFrame(s);
    },
    Du = function () {
      return (bn = 1);
    },
    bu = function () {
      return (bn = 0);
    },
    vi = function (e) {
      return e;
    },
    As = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Su = function () {
      return typeof window != "undefined";
    },
    Eu = function () {
      return H || (Su() && (H = window.gsap) && H.registerPlugin && H);
    },
    dr = function (e) {
      return !!~Ua.indexOf(e);
    },
    xu = function (e) {
      return (
        (e === "Height" ? to : re["inner" + e]) ||
        Ht["client" + e] ||
        fe["client" + e]
      );
    },
    Tu = function (e) {
      return (
        Gi(e, "getBoundingClientRect") ||
        (dr(e)
          ? function () {
              return (Rn.width = re.innerWidth), (Rn.height = to), Rn;
            }
          : function () {
              return Fi(e);
            })
      );
    },
    $p = function (e, t, i) {
      var r = i.d,
        n = i.d2,
        a = i.a;
      return (a = Gi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? xu(n) : e["client" + n]) || 0;
          };
    },
    Bp = function (e, t) {
      return !t || ~gi.indexOf(e)
        ? Tu(e)
        : function () {
            return Rn;
          };
    },
    yi = function (e, t) {
      var i = t.s,
        r = t.d2,
        n = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Gi(e, i))
          ? a() - Tu(e)()[n]
          : dr(e)
          ? (Ht[i] || fe[i]) - xu(r)
          : e[i] - e["offset" + r]
      );
    },
    xn = function (e, t) {
      for (var i = 0; i < Wr.length; i += 3)
        (!t || ~t.indexOf(Wr[i + 1])) && e(Wr[i], Wr[i + 1], Wr[i + 2]);
    },
    Wt = function (e) {
      return typeof e == "string";
    },
    ct = function (e) {
      return typeof e == "function";
    },
    Fs = function (e) {
      return typeof e == "number";
    },
    fr = function (e) {
      return typeof e == "object";
    },
    Os = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    no = function (e, t) {
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
    Cu = "left",
    Mu = "top",
    ao = "right",
    oo = "bottom",
    pr = "width",
    hr = "height",
    Ls = "Right",
    ks = "Left",
    Is = "Top",
    zs = "Bottom",
    Ne = "padding",
    Jt = "margin",
    Gr = "Width",
    lo = "Height",
    Ye = "px",
    ei = function (e) {
      return re.getComputedStyle(e);
    },
    Np = function (e) {
      var t = ei(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Pu = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Fi = function (e, t) {
      var i =
          t &&
          ei(e)[Ka] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
    Tn = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    Au = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        n;
      for (n in i) t.push(i[n] / r);
      return t;
    },
    qp = function (e) {
      return function (t) {
        return H.utils.snap(Au(e), t);
      };
    },
    uo = function (e) {
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
    Vp = function (e) {
      return function (t, i) {
        return uo(Au(e))(t, i.direction);
      };
    },
    Cn = function (e, t, i, r) {
      return i.split(",").forEach(function (n) {
        return e(t, n, r);
      });
    },
    Ue = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: !r, capture: !!n });
    },
    Ke = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Mn = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Fu = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Pn = { toggleActions: "play", anticipatePin: 0 },
    An = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Fn = function (e, t) {
      if (Wt(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in An
              ? An[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    On = function (e, t, i, r, n, a, o, l) {
      var u = n.startColor,
        c = n.endColor,
        h = n.fontSize,
        m = n.indent,
        p = n.fontWeight,
        f = ye.createElement("div"),
        d = dr(i) || Gi(i, "pinType") === "fixed",
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
          (w += (r === We ? ao : oo) + ":" + (a + parseFloat(m)) + "px;"),
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
        Ln(f, 0, r, y),
        f
      );
    },
    Ln = function (e, t, i, r) {
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
    co = {},
    Rs,
    Ou = function () {
      return ut() - Qt > 34 && (Rs || (Rs = requestAnimationFrame(Oi)));
    },
    jr = function () {
      (!St || !St.isPressed || St.startX > fe.clientWidth) &&
        (ie.cache++,
        St ? Rs || (Rs = requestAnimationFrame(Oi)) : Oi(),
        Qt || gr("scrollStart"),
        (Qt = ut()));
    },
    fo = function () {
      (yu = re.innerWidth), (vu = re.innerHeight);
    },
    $s = function (e) {
      ie.cache++,
        (e === !0 ||
          (!lt &&
            !gu &&
            !ye.fullscreenElement &&
            !ye.webkitFullscreenElement &&
            (!Qa ||
              yu !== re.innerWidth ||
              Math.abs(re.innerHeight - vu) > re.innerHeight * 0.25))) &&
          wn.restart(!0);
    },
    mr = {},
    Hp = [],
    Lu = function s() {
      return Ke(Y, "scrollEnd", s) || yr(!0);
    },
    gr = function (e) {
      return (
        (mr[e] &&
          mr[e].map(function (t) {
            return t();
          })) ||
        Hp
      );
    },
    Yt = [],
    ku = function (e) {
      for (var t = 0; t < Yt.length; t += 5)
        (!e || (Yt[t + 4] && Yt[t + 4].query === e)) &&
          ((Yt[t].style.cssText = Yt[t + 1]),
          Yt[t].getBBox && Yt[t].setAttribute("transform", Yt[t + 2] || ""),
          (Yt[t + 3].uncache = 1));
    },
    po = function (e, t) {
      var i;
      for (bt = 0; bt < te.length; bt++)
        (i = te[bt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (Sn = !0), t && ku(t), t || gr("revert");
    },
    Iu = function (e, t) {
      ie.cache++,
        (t || !Et) &&
          ie.forEach(function (i) {
            return ct(i) && i.cacheID++ && (i.rec = 0);
          }),
        Wt(e) && (re.history.scrollRestoration = eo = e);
    },
    Et,
    vr = 0,
    zu,
    Wp = function () {
      if (zu !== vr) {
        var e = (zu = vr);
        requestAnimationFrame(function () {
          return e === vr && yr(!0);
        });
      }
    },
    Ru = function () {
      fe.appendChild(Yr),
        (to = (!St && Yr.offsetHeight) || re.innerHeight),
        fe.removeChild(Yr);
    },
    $u = function (e) {
      return Ts(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    yr = function (e, t) {
      if (
        ((Ht = ye.documentElement),
        (fe = ye.body),
        (Ua = [re, ye, Ht, fe]),
        Qt && !e && !Sn)
      ) {
        Ue(Y, "scrollEnd", Lu);
        return;
      }
      Ru(),
        (Et = Y.isRefreshing = !0),
        ie.forEach(function (r) {
          return ct(r) && ++r.cacheID && (r.rec = r());
        });
      var i = gr("refreshInit");
      mu && Y.sort(),
        t || po(),
        ie.forEach(function (r) {
          ct(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        te.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Sn = !1),
        te.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - a), r.refresh();
          }
        }),
        (io = 1),
        $u(!0),
        te.forEach(function (r) {
          var n = yi(r.scroller, r._dir),
            a = r.vars.end === "max" || (r._endClamp && r.end > n),
            o = r._startClamp && r.start >= n;
          (a || o) &&
            r.setPositions(
              o ? n - 1 : r.start,
              a ? Math.max(o ? n : r.start + 1, n) : r.end,
              !0
            );
        }),
        $u(!1),
        (io = 0),
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
        Iu(eo, 1),
        wn.pause(),
        vr++,
        (Et = 2),
        Oi(2),
        te.forEach(function (r) {
          return ct(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (Et = Y.isRefreshing = !1),
        gr("refresh");
    },
    ho = 0,
    kn = 1,
    Bs,
    Oi = function (e) {
      if (e === 2 || (!Et && !Sn)) {
        (Y.isUpdating = !0), Bs && Bs.update(0);
        var t = te.length,
          i = ut(),
          r = i - so >= 50,
          n = t && te[0].scroll();
        if (
          ((kn = ho > n ? -1 : 1),
          Et || (ho = n),
          r &&
            (Qt && !bn && i - Qt > 200 && ((Qt = 0), gr("scrollEnd")),
            (Ms = so),
            (so = i)),
          kn < 0)
        ) {
          for (bt = t; bt-- > 0; ) te[bt] && te[bt].update(0, r);
          kn = 1;
        } else for (bt = 0; bt < t; bt++) te[bt] && te[bt].update(0, r);
        Y.isUpdating = !1;
      }
      Rs = 0;
    },
    mo = [
      Cu,
      Mu,
      oo,
      ao,
      Jt + zs,
      Jt + Ls,
      Jt + Is,
      Jt + ks,
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
    In = mo.concat([
      pr,
      hr,
      "boxSizing",
      "max" + Gr,
      "max" + lo,
      "position",
      Jt,
      Ne,
      Ne + Is,
      Ne + Ls,
      Ne + zs,
      Ne + ks,
    ]),
    Yp = function (e, t, i) {
      Ur(i);
      var r = e._gsap;
      if (r.spacerIsNative) Ur(r.spacerState);
      else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t), n.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    go = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var n = mo.length, a = t.style, o = e.style, l; n--; )
          (l = mo[n]), (a[l] = i[l]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[oo] = o[ao] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[pr] = Tn(e, Dt) + Ye),
          (a[hr] = Tn(e, We) + Ye),
          (a[Ne] = o[Jt] = o[Mu] = o[Cu] = "0"),
          Ur(r),
          (o[pr] = o["max" + Gr] = i[pr]),
          (o[hr] = o["max" + lo] = i[hr]),
          (o[Ne] = i[Ne]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Xp = /([A-Z])/g,
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
              : t[n] && t.removeProperty(n.replace(Xp, "-$1").toLowerCase());
      }
    },
    zn = function (e) {
      for (var t = In.length, i = e.style, r = [], n = 0; n < t; n++)
        r.push(In[n], i[In[n]]);
      return (r.t = e), r;
    },
    Gp = function (e, t, i) {
      for (var r = [], n = e.length, a = i ? 8 : 0, o; a < n; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    Rn = { left: 0, top: 0 },
    Bu = function (e, t, i, r, n, a, o, l, u, c, h, m, p, f) {
      ct(e) && (e = e(l)),
        Wt(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? Fn("0" + e.substr(3), i) : 0));
      var d = p ? p.time() : 0,
        g,
        _,
        y;
      if ((p && p.seek(0), isNaN(e) || (e = +e), Fs(e)))
        p &&
          (e = H.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            m,
            e
          )),
          o && Ln(o, i, r, !0);
      else {
        ct(t) && (t = t(l));
        var v = (e || "0").split(" "),
          w,
          D,
          x,
          b;
        (y = Ot(t, l) || fe),
          (w = Fi(y) || {}),
          (!w || (!w.left && !w.top)) &&
            ei(y).display === "none" &&
            ((b = y.style.display),
            (y.style.display = "block"),
            (w = Fi(y)),
            b ? (y.style.display = b) : y.style.removeProperty("display")),
          (D = Fn(v[0], w[r.d])),
          (x = Fn(v[1] || "0", i)),
          (e = w[r.p] - u[r.p] - c + D + n - x),
          o && Ln(o, x, r, i - x < 20 || (o._isStart && x > 20)),
          (i -= i - x);
      }
      if ((f && ((l[f] = e || -0.001), e < 0 && (e = 0)), a)) {
        var T = e + i,
          E = a._isStart;
        (g = "scroll" + r.d2),
          Ln(
            a,
            T,
            r,
            (E && T > 20) ||
              (!E && (h ? Math.max(fe[g], Ht[g]) : a.parentNode[g]) <= T + 1)
          ),
          h &&
            ((u = Fi(o)),
            h && (a.style[r.op.p] = u[r.op.p] - r.op.m - a._offset + Ye));
      }
      return (
        p &&
          y &&
          ((g = Fi(y)),
          p.seek(m),
          (_ = Fi(y)),
          (p._caScrollDist = g[r.p] - _[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(d),
        p ? e : Math.round(e)
      );
    },
    jp = /(webkit|moz|length|cssText|inset)/i,
    Nu = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var n = e.style,
          a,
          o;
        if (t === fe) {
          (e._stOrig = n.cssText), (o = ei(e));
          for (a in o)
            !+a &&
              !jp.test(a) &&
              o[a] &&
              typeof n[a] == "string" &&
              a !== "0" &&
              (n[a] = o[a]);
          (n.top = i), (n.left = r);
        } else n.cssText = e._stOrig;
        (H.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    qu = function (e, t, i) {
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
    $n = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), H.set(e, r);
    },
    Vu = function (e, t) {
      var i = ji(e, t),
        r = "_scroll" + t.p2,
        n = function a(o, l, u, c, h) {
          var m = a.tween,
            p = l.onComplete,
            f = {};
          u = u || i();
          var d = qu(i, u, function () {
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
              ie.cache++, a.tween && Oi();
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
        Ue(e, "wheel", i.wheelHandler),
        Y.isTouch && Ue(e, "touchmove", i.wheelHandler),
        n
      );
    },
    Y = (function () {
      function s(t, i) {
        Hr ||
          s.register(H) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Ja(this),
          this.init(t, i);
      }
      var e = s.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Ps)
          ) {
            this.update = this.refresh = this.kill = vi;
            return;
          }
          i = Pu(Wt(i) || Fs(i) || i.nodeType ? { trigger: i } : i, Pn);
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
                ? Dt
                : We,
            L = !h && h !== 0,
            P = Ot(i.scroller || re),
            k = H.core.getCache(P),
            F = dr(P),
            R =
              ("pinType" in i
                ? i.pinType
                : Gi(P, "pinType") || (F && "fixed")) === "fixed",
            I = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            M = L && i.toggleActions.split(" "),
            O = "markers" in i ? i.markers : Pn.markers,
            A = F ? 0 : parseFloat(ei(P)["border" + S.p2 + Gr]) || 0,
            C = this,
            W =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(C);
              },
            Q = $p(P, F, S),
            De = Bp(P, F),
            se = 0,
            $ = 0,
            B = 0,
            N = ji(P, S),
            j,
            ce,
            it,
            Se,
            Ee,
            J,
            ne,
            _e,
            Xe,
            z,
            qe,
            ft,
            Xt,
            we,
            Gt,
            ti,
            ni,
            Fe,
            ii,
            pe,
            Lt,
            Ze,
            Li,
            Ws,
            Ve,
            Yn,
            ki,
            Qr,
            Jr,
            Zi,
            Sr,
            oe,
            Er,
            ai,
            oi,
            li,
            xr,
            es,
            Ii;
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
              ((mu = 1), i.refreshPriority === -9999 && (Bs = C)),
            (k.tweenScroll = k.tweenScroll || {
              top: Vu(P, We),
              left: Vu(P, Dt),
            }),
            (C.tweenTo = j = k.tweenScroll[S.p]),
            (C.scrubDuration = function (V) {
              (Er = Fs(V) && V),
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
              (Zi = 0),
              l || (l = r.vars.id)),
            w &&
              ((!fr(w) || w.push) && (w = { snapTo: w }),
              "scrollBehavior" in fe.style &&
                H.set(F ? [fe, Ht] : P, { scrollBehavior: "auto" }),
              ie.forEach(function (V) {
                return (
                  ct(V) &&
                  V.target === (F ? ye.scrollingElement || Ht : P) &&
                  (V.smooth = !1)
                );
              }),
              (it = ct(w.snapTo)
                ? w.snapTo
                : w.snapTo === "labels"
                ? qp(r)
                : w.snapTo === "labelsDirectional"
                ? Vp(r)
                : w.directional !== !1
                ? function (V, K) {
                    return uo(w.snapTo)(V, ut() - $ < 500 ? 0 : K.direction);
                  }
                : H.utils.snap(w.snapTo)),
              (ai = w.duration || { min: 0.1, max: 2 }),
              (ai = fr(ai) ? Cs(ai.min, ai.max) : Cs(ai, ai)),
              (oi = H.delayedCall(w.delay || Er / 2 || 0.1, function () {
                var V = N(),
                  K = ut() - $ < 500,
                  G = j.tween;
                if (
                  (K || Math.abs(C.getVelocity()) < 10) &&
                  !G &&
                  !bn &&
                  se !== V
                ) {
                  var Z = (V - J) / we,
                    Qe = r && !L ? r.totalProgress() : Z,
                    ue = K ? 0 : ((Qe - Sr) / (ut() - Ms)) * 1e3 || 0,
                    Ie = H.utils.clamp(-Z, 1 - Z, (Xr(ue / 2) * ue) / 0.185),
                    pt = Z + (w.inertia === !1 ? 0 : Ie),
                    Oe,
                    xe,
                    ge = w,
                    ui = ge.onStart,
                    Me = ge.onInterrupt,
                    jt = ge.onComplete;
                  if (
                    ((Oe = it(pt, C)),
                    Fs(Oe) || (Oe = pt),
                    (xe = Math.max(0, Math.round(J + Oe * we))),
                    V <= ne && V >= J && xe !== V)
                  ) {
                    if (G && !G._initted && G.data <= Xr(xe - V)) return;
                    w.inertia === !1 && (Ie = Oe - Z),
                      j(
                        xe,
                        {
                          duration: ai(
                            Xr(
                              (Math.max(Xr(pt - Qe), Xr(Oe - Qe)) * 0.185) /
                                ue /
                                0.05 || 0
                            )
                          ),
                          ease: w.ease || "power3",
                          data: Xr(xe - V),
                          onInterrupt: function () {
                            return oi.restart(!0) && Me && Me(C);
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
                              (Zi = Sr =
                                r && !L ? r.totalProgress() : C.progress),
                              y && y(C),
                              jt && jt(C);
                          },
                        },
                        V,
                        Ie * we,
                        xe - V - Ie * we
                      ),
                      ui && ui(C, j.tween);
                  }
                } else C.isActive && se !== V && oi.restart(!0);
              }).pause())),
            l && (co[l] = C),
            (m = C.trigger = Ot(m || (p !== !0 && p))),
            (Ii = m && m._gsap && m._gsap.stRevert),
            Ii && (Ii = Ii(C)),
            (p = p === !0 ? m : Ot(p)),
            Wt(o) && (o = { targets: m, className: o }),
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
              (ce = H.core.getCache(p)),
              ce.spacer
                ? (Gt = ce.pinState)
                : (x &&
                    ((x = Ot(x)),
                    x && !x.nodeType && (x = x.current || x.nativeElement),
                    (ce.spacerIsNative = !!x),
                    x && (ce.spacerState = zn(x))),
                  (ce.spacer = Fe = x || ye.createElement("div")),
                  Fe.classList.add("pin-spacer"),
                  l && Fe.classList.add("pin-spacer-" + l),
                  (ce.pinState = Gt = zn(p))),
              i.force3D !== !1 && H.set(p, { force3D: !0 }),
              (C.spacer = Fe = ce.spacer),
              (Jr = ei(p)),
              (Ws = Jr[f + S.os2]),
              (pe = H.getProperty(p)),
              (Lt = H.quickSetter(p, S.a, Ye)),
              go(p, Fe, Jr),
              (ni = zn(p))),
            O)
          ) {
            (ft = fr(O) ? Pu(O, Fu) : Fu),
              (z = On("scroller-start", l, P, S, ft, 0)),
              (qe = On("scroller-end", l, P, S, ft, 0, z)),
              (ii = z["offset" + S.op.d2]);
            var Ys = Ot(Gi(P, "content") || P);
            (_e = this.markerStart = On("start", l, Ys, S, ft, ii, 0, b)),
              (Xe = this.markerEnd = On("end", l, Ys, S, ft, ii, 0, b)),
              b && (es = H.quickSetter([_e, Xe], S.a, Ye)),
              !R &&
                !(gi.length && Gi(P, "fixedMarkers") === !0) &&
                (Np(F ? fe : P),
                H.set([z, qe], { force3D: !0 }),
                (Yn = H.quickSetter(z, S.a, Ye)),
                (Qr = H.quickSetter(qe, S.a, Ye)));
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
                Z = lt;
              G !== C.isReverted &&
                (G &&
                  ((li = Math.max(N(), C.scroll.rec || 0)),
                  (B = C.progress),
                  (xr = r && r.progress())),
                _e &&
                  [_e, Xe, z, qe].forEach(function (Qe) {
                    return (Qe.style.display = G ? "none" : "block");
                  }),
                G && ((lt = C), C.update(G)),
                p &&
                  (!D || !C.isActive) &&
                  (G ? Yp(p, Fe, Gt) : go(p, Fe, ei(p), Ve)),
                G || C.update(G),
                (lt = Z),
                (C.isReverted = G));
            }),
            (C.refresh = function (V, K, G, Z) {
              if (!((lt || !C.enabled) && !K)) {
                if (p && V && Qt) {
                  Ue(s, "scrollEnd", Lu);
                  return;
                }
                !Et && W && W(C),
                  (lt = C),
                  j.tween && !G && (j.tween.kill(), (j.tween = 0)),
                  oe && oe.pause(),
                  d && r && r.revert({ kill: !1 }).invalidate(),
                  C.isReverted || C.revert(!0, !0),
                  (C._subPinOffset = !1);
                var Qe = Q(),
                  ue = De(),
                  Ie = b ? b.duration() : yi(P, S),
                  pt = we <= 0.01,
                  Oe = 0,
                  xe = Z || 0,
                  ge = fr(G) ? G.end : i.end,
                  ui = i.endTrigger || m,
                  Me = fr(G)
                    ? G.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  jt = (C.pinnedContainer =
                    i.pinnedContainer && Ot(i.pinnedContainer, C)),
                  bi = (m && Math.max(0, te.indexOf(C))) || 0,
                  rt = bi,
                  st,
                  ht,
                  Tr,
                  Xn,
                  mt,
                  Ge,
                  Si,
                  Po,
                  xc,
                  Xs,
                  Ei,
                  Gs,
                  Gn;
                for (
                  O &&
                  fr(G) &&
                  ((Gs = H.getProperty(z, S.p)), (Gn = H.getProperty(qe, S.p)));
                  rt-- > 0;

                )
                  (Ge = te[rt]),
                    Ge.end || Ge.refresh(0, 1) || (lt = C),
                    (Si = Ge.pin),
                    Si &&
                      (Si === m || Si === p || Si === jt) &&
                      !Ge.isReverted &&
                      (Xs || (Xs = []), Xs.unshift(Ge), Ge.revert(!0, !0)),
                    Ge !== te[rt] && (bi--, rt--);
                for (
                  ct(Me) && (Me = Me(C)),
                    Me = _u(Me, "start", C),
                    J =
                      Bu(
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
                    Wt(ge) &&
                      !ge.indexOf("+=") &&
                      (~ge.indexOf(" ")
                        ? (ge = (Wt(Me) ? Me.split(" ")[0] : "") + ge)
                        : ((Oe = Fn(ge.substr(2), Qe)),
                          (ge = Wt(Me)
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
                          (ui = m))),
                    ge = _u(ge, "end", C),
                    ne =
                      Math.max(
                        J,
                        Bu(
                          ge || (ui ? "100% 0" : Ie),
                          ui,
                          Qe,
                          S,
                          N() + Oe,
                          Xe,
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
                    rt = bi;
                  rt--;

                )
                  (Ge = te[rt]),
                    (Si = Ge.pin),
                    Si &&
                      Ge.start - Ge._pinPush <= J &&
                      !b &&
                      Ge.end > 0 &&
                      ((st =
                        Ge.end -
                        (C._startClamp ? Math.max(0, Ge.start) : Ge.start)),
                      ((Si === m && Ge.start - Ge._pinPush < J) || Si === jt) &&
                        isNaN(Me) &&
                        (Oe += st * (1 - Ge.progress)),
                      Si === p && (xe += st));
                if (
                  ((J += Oe),
                  (ne += Oe),
                  C._startClamp && (C._startClamp += Oe),
                  C._endClamp &&
                    !Et &&
                    ((C._endClamp = ne || -0.001),
                    (ne = Math.min(ne, yi(P, S)))),
                  (we = ne - J || ((J -= 0.01) && 0.001)),
                  pt && (B = H.utils.clamp(0, 1, H.utils.normalize(J, ne, li))),
                  (C._pinPush = xe),
                  _e &&
                    Oe &&
                    ((st = {}),
                    (st[S.a] = "+=" + Oe),
                    jt && (st[S.p] = "-=" + N()),
                    H.set([_e, Xe], st)),
                  p && !(io && C.end >= yi(P, S)))
                )
                  (st = ei(p)),
                    (Xn = S === We),
                    (Tr = N()),
                    (Ze = parseFloat(pe(S.a)) + xe),
                    !Ie &&
                      ne > 1 &&
                      ((Ei = (F ? ye.scrollingElement || Ht : P).style),
                      (Ei = {
                        style: Ei,
                        value: Ei["overflow" + S.a.toUpperCase()],
                      }),
                      F &&
                        ei(fe)["overflow" + S.a.toUpperCase()] !== "scroll" &&
                        (Ei.style["overflow" + S.a.toUpperCase()] = "scroll")),
                    go(p, Fe, st),
                    (ni = zn(p)),
                    (ht = Fi(p, !0)),
                    (Po = R && ji(P, Xn ? Dt : We)()),
                    f
                      ? ((Ve = [f + S.os2, we + xe + Ye]),
                        (Ve.t = Fe),
                        (rt = f === Ne ? Tn(p, S) + we + xe : 0),
                        rt &&
                          (Ve.push(S.d, rt + Ye),
                          Fe.style.flexBasis !== "auto" &&
                            (Fe.style.flexBasis = rt + Ye)),
                        Ur(Ve),
                        jt &&
                          te.forEach(function (js) {
                            js.pin === jt &&
                              js.vars.pinSpacing !== !1 &&
                              (js._subPinOffset = !0);
                          }),
                        R && N(li))
                      : ((rt = Tn(p, S)),
                        rt &&
                          Fe.style.flexBasis !== "auto" &&
                          (Fe.style.flexBasis = rt + Ye)),
                    R &&
                      ((mt = {
                        top: ht.top + (Xn ? Tr - J : Po) + Ye,
                        left: ht.left + (Xn ? Po : Tr - J) + Ye,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (mt[pr] = mt["max" + Gr] = Math.ceil(ht.width) + Ye),
                      (mt[hr] = mt["max" + lo] = Math.ceil(ht.height) + Ye),
                      (mt[Jt] =
                        mt[Jt + Is] =
                        mt[Jt + Ls] =
                        mt[Jt + zs] =
                        mt[Jt + ks] =
                          "0"),
                      (mt[Ne] = st[Ne]),
                      (mt[Ne + Is] = st[Ne + Is]),
                      (mt[Ne + Ls] = st[Ne + Ls]),
                      (mt[Ne + zs] = st[Ne + zs]),
                      (mt[Ne + ks] = st[Ne + ks]),
                      (ti = Gp(Gt, mt, D)),
                      Et && N(0)),
                    r
                      ? ((xc = r._initted),
                        Za(1),
                        r.render(r.duration(), !0, !0),
                        (Li = pe(S.a) - Ze + we + xe),
                        (ki = Math.abs(we - Li) > 1),
                        R && ki && ti.splice(ti.length - 2, 2),
                        r.render(0, !0, !0),
                        xc || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Za(0))
                      : (Li = we),
                    Ei &&
                      (Ei.value
                        ? (Ei.style["overflow" + S.a.toUpperCase()] = Ei.value)
                        : Ei.style.removeProperty("overflow-" + S.a));
                else if (m && N() && !b)
                  for (ht = m.parentNode; ht && ht !== fe; )
                    ht._pinOffset &&
                      ((J -= ht._pinOffset), (ne -= ht._pinOffset)),
                      (ht = ht.parentNode);
                Xs &&
                  Xs.forEach(function (js) {
                    return js.revert(!1, !0);
                  }),
                  (C.start = J),
                  (C.end = ne),
                  (Se = Ee = Et ? li : N()),
                  !b && !Et && (Se < li && N(li), (C.scroll.rec = 0)),
                  C.revert(!1, !0),
                  ($ = ut()),
                  oi && ((se = -1), oi.restart(!0)),
                  (lt = 0),
                  r &&
                    L &&
                    (r._initted || xr) &&
                    r.progress() !== xr &&
                    r.progress(xr || 0, !0).render(r.time(), !0, !0),
                  (pt || B !== C.progress || b || d || (r && !r._initted)) &&
                    (r &&
                      !L &&
                      r.totalProgress(
                        b && J < -0.001 && !B ? H.utils.normalize(J, ne, 0) : B,
                        !0
                      ),
                    (C.progress = pt || (Se - J) / we === B ? 0 : B)),
                  p && f && (Fe._pinOffset = Math.round(C.progress * Li)),
                  oe && oe.invalidate(),
                  isNaN(Gs) ||
                    ((Gs -= H.getProperty(z, S.p)),
                    (Gn -= H.getProperty(qe, S.p)),
                    $n(z, S, Gs),
                    $n(_e, S, Gs - (Z || 0)),
                    $n(qe, S, Gn),
                    $n(Xe, S, Gn - (Z || 0))),
                  pt && !Et && C.update(),
                  c && !Et && !Xt && ((Xt = !0), c(C), (Xt = !1));
              }
            }),
            (C.getVelocity = function () {
              return ((N() - Ee) / (ut() - Ms)) * 1e3 || 0;
            }),
            (C.endAnimation = function () {
              Os(C.callbackAnimation),
                r &&
                  (oe
                    ? oe.progress(1)
                    : r.paused()
                    ? L || Os(r, C.direction < 0, 1)
                    : Os(r, r.reversed()));
            }),
            (C.labelToScroll = function (V) {
              return (
                (r &&
                  r.labels &&
                  (J || C.refresh() || J) +
                    (r.labels[V] / r.duration()) * we) ||
                0
              );
            }),
            (C.getTrailing = function (V) {
              var K = te.indexOf(C),
                G =
                  C.direction > 0 ? te.slice(0, K).reverse() : te.slice(K + 1);
              return (
                Wt(V)
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
                var Z = Et === !0 ? li : C.scroll(),
                  Qe = V ? 0 : (Z - J) / we,
                  ue = Qe < 0 ? 0 : Qe > 1 ? 1 : Qe || 0,
                  Ie = C.progress,
                  pt,
                  Oe,
                  xe,
                  ge,
                  ui,
                  Me,
                  jt,
                  bi;
                if (
                  (K &&
                    ((Ee = Se),
                    (Se = b ? N() : Z),
                    w && ((Sr = Zi), (Zi = r && !L ? r.totalProgress() : ue))),
                  g &&
                    p &&
                    !lt &&
                    !En &&
                    Qt &&
                    (!ue && J < Z + ((Z - Ee) / (ut() - Ms)) * g
                      ? (ue = 1e-4)
                      : ue === 1 &&
                        ne > Z + ((Z - Ee) / (ut() - Ms)) * g &&
                        (ue = 0.9999)),
                  ue !== Ie && C.enabled)
                ) {
                  if (
                    ((pt = C.isActive = !!ue && ue < 1),
                    (Oe = !!Ie && Ie < 1),
                    (Me = pt !== Oe),
                    (ui = Me || !!ue != !!Ie),
                    (C.direction = ue > Ie ? 1 : -1),
                    (C.progress = ue),
                    ui &&
                      !lt &&
                      ((xe = ue && !Ie ? 0 : ue === 1 ? 1 : Ie === 1 ? 2 : 3),
                      L &&
                        ((ge =
                          (!Me && M[xe + 1] !== "none" && M[xe + 1]) || M[xe]),
                        (bi =
                          r &&
                          (ge === "complete" || ge === "reset" || ge in r)))),
                    E &&
                      (Me || bi) &&
                      (bi || h || !r) &&
                      (ct(E)
                        ? E(C)
                        : C.getTrailing(E).forEach(function (Tr) {
                            return Tr.endAnimation();
                          })),
                    L ||
                      (oe && !lt && !En
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
                        : r && r.totalProgress(ue, !!(lt && ($ || V)))),
                    p)
                  ) {
                    if ((V && f && (Fe.style[f + S.os2] = Ws), !R))
                      Lt(As(Ze + Li * ue));
                    else if (ui) {
                      if (
                        ((jt =
                          !V && ue > Ie && ne + 1 > Z && Z + 1 >= yi(P, S)),
                        D)
                      )
                        if (!V && (pt || jt)) {
                          var rt = Fi(p, !0),
                            st = Z - J;
                          Nu(
                            p,
                            fe,
                            rt.top + (S === We ? st : 0) + Ye,
                            rt.left + (S === We ? 0 : st) + Ye
                          );
                        } else Nu(p, Fe);
                      Ur(pt || jt ? ti : ni),
                        (ki && ue < 1 && pt) ||
                          Lt(Ze + (ue === 1 && !jt ? Li : 0));
                    }
                  }
                  w && !j.tween && !lt && !En && oi.restart(!0),
                    o &&
                      (Me || (v && ue && (ue < 1 || !ro))) &&
                      Ts(o.targets).forEach(function (Tr) {
                        return Tr.classList[pt || v ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !L && !V && a(C),
                    ui && !lt
                      ? (L &&
                          (bi &&
                            (ge === "complete"
                              ? r.pause().totalProgress(1)
                              : ge === "reset"
                              ? r.restart(!0).pause()
                              : ge === "restart"
                              ? r.restart(!0)
                              : r[ge]()),
                          a && a(C)),
                        (Me || !ro) &&
                          (u && Me && no(C, u),
                          I[xe] && no(C, I[xe]),
                          v && (ue === 1 ? C.kill(!1, 1) : (I[xe] = 0)),
                          Me ||
                            ((xe = ue === 1 ? 1 : 3), I[xe] && no(C, I[xe]))),
                        T &&
                          !pt &&
                          Math.abs(C.getVelocity()) > (Fs(T) ? T : 2500) &&
                          (Os(C.callbackAnimation),
                          oe
                            ? oe.progress(1)
                            : Os(r, ge === "reverse" ? 1 : !ue, 1)))
                      : L && a && !lt && a(C);
                }
                if (Qr) {
                  var ht = b ? (Z / b.duration()) * (b._caScrollDist || 0) : Z;
                  Yn(ht + (z._isFlipped ? 1 : 0)), Qr(ht);
                }
                es && es((-Z / b.duration()) * (b._caScrollDist || 0));
              }
            }),
            (C.enable = function (V, K) {
              C.enabled ||
                ((C.enabled = !0),
                Ue(P, "resize", $s),
                F || Ue(P, "scroll", jr),
                W && Ue(s, "refreshInit", W),
                V !== !1 && ((C.progress = B = 0), (Se = Ee = se = N())),
                K !== !1 && C.refresh());
            }),
            (C.getTween = function (V) {
              return V && j ? j.tween : oe;
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
                  start: wu(V, G && !!C._startClamp),
                  end: wu(K, G && !!C._endClamp),
                },
                Z
              ),
                C.update();
            }),
            (C.adjustPinSpacing = function (V) {
              if (Ve && V) {
                var K = Ve.indexOf(S.d) + 1;
                (Ve[K] = parseFloat(Ve[K]) + V + Ye),
                  (Ve[1] = parseFloat(Ve[1]) + V + Ye),
                  Ur(Ve);
              }
            }),
            (C.disable = function (V, K) {
              if (
                C.enabled &&
                (V !== !1 && C.revert(!0, !0),
                (C.enabled = C.isActive = !1),
                K || (oe && oe.pause()),
                (li = 0),
                ce && (ce.uncache = 1),
                W && Ke(s, "refreshInit", W),
                oi && (oi.pause(), j.tween && j.tween.kill() && (j.tween = 0)),
                !F)
              ) {
                for (var G = te.length; G--; )
                  if (te[G].scroller === P && te[G] !== C) return;
                Ke(P, "resize", $s), F || Ke(P, "scroll", jr);
              }
            }),
            (C.kill = function (V, K) {
              C.disable(V, K), oe && !K && oe.kill(), l && delete co[l];
              var G = te.indexOf(C);
              G >= 0 && te.splice(G, 1),
                G === bt && kn > 0 && bt--,
                (G = 0),
                te.forEach(function (Z) {
                  return Z.scroller === C.scroller && (G = 1);
                }),
                G || Et || (C.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  V && r.revert({ kill: !1 }),
                  K || r.kill()),
                _e &&
                  [_e, Xe, z, qe].forEach(function (Z) {
                    return Z.parentNode && Z.parentNode.removeChild(Z);
                  }),
                Bs === C && (Bs = 0),
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
            Ii && Ii(C),
            r && r.add && !we)
          ) {
            var de = C.update;
            (C.update = function () {
              (C.update = de), ie.cache++, J || ne || C.refresh();
            }),
              H.delayedCall(0.01, C.update),
              (we = 0.01),
              (J = ne = 0);
          } else C.refresh();
          p && Wp();
        }),
        (s.register = function (i) {
          return (
            Hr ||
              ((H = i || Eu()),
              Su() && window.document && s.enable(),
              (Hr = Ps)),
            Hr
          );
        }),
        (s.defaults = function (i) {
          if (i) for (var r in i) Pn[r] = i[r];
          return Pn;
        }),
        (s.disable = function (i, r) {
          (Ps = 0),
            te.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            Ke(re, "wheel", jr),
            Ke(ye, "scroll", jr),
            clearInterval(Dn),
            Ke(ye, "touchcancel", vi),
            Ke(fe, "touchstart", vi),
            Cn(Ke, ye, "pointerdown,touchstart,mousedown", Du),
            Cn(Ke, ye, "pointerup,touchend,mouseup", bu),
            wn.kill(),
            xn(Ke);
          for (var n = 0; n < ie.length; n += 3)
            Mn(Ke, ie[n], ie[n + 1]), Mn(Ke, ie[n], ie[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((re = window),
            (ye = document),
            (Ht = ye.documentElement),
            (fe = ye.body),
            H &&
              ((Ts = H.utils.toArray),
              (Cs = H.utils.clamp),
              (Ja = H.core.context || vi),
              (Za = H.core.suppressOverwrites || vi),
              (eo = re.history.scrollRestoration || "auto"),
              (ho = re.pageYOffset || 0),
              H.core.globals("ScrollTrigger", s),
              fe))
          ) {
            (Ps = 1),
              (Yr = document.createElement("div")),
              (Yr.style.height = "100vh"),
              (Yr.style.position = "absolute"),
              Ru(),
              Rp(),
              ke.register(H),
              (s.isTouch = ke.isTouch),
              (Ui =
                ke.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Qa = ke.isTouch === 1),
              Ue(re, "wheel", jr),
              (Ua = [re, ye, Ht, fe]),
              H.matchMedia
                ? ((s.matchMedia = function (u) {
                    var c = H.matchMedia(),
                      h;
                    for (h in u) c.add(h, u[h]);
                    return c;
                  }),
                  H.addEventListener("matchMediaInit", function () {
                    return po();
                  }),
                  H.addEventListener("matchMediaRevert", function () {
                    return ku();
                  }),
                  H.addEventListener("matchMedia", function () {
                    yr(0, 1), gr("matchMedia");
                  }),
                  H.matchMedia().add("(orientation: portrait)", function () {
                    return fo(), fo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              fo(),
              Ue(ye, "scroll", jr);
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
                o = Fi(fe),
                We.m = Math.round(o.top + We.sc()) || 0,
                Dt.m = Math.round(o.left + Dt.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                i ||
                  (fe.setAttribute("style", ""), fe.removeAttribute("style")),
                Dn = setInterval(Ou, 250),
                H.delayedCall(0.5, function () {
                  return (En = 0);
                }),
                Ue(ye, "touchcancel", vi),
                Ue(fe, "touchstart", vi),
                Cn(Ue, ye, "pointerdown,touchstart,mousedown", Du),
                Cn(Ue, ye, "pointerup,touchend,mouseup", bu),
                Ka = H.utils.checkPrefix("transform"),
                In.push(Ka),
                Hr = ut(),
                wn = H.delayedCall(0.2, yr).pause(),
                Wr = [
                  ye,
                  "visibilitychange",
                  function () {
                    var u = re.innerWidth,
                      c = re.innerHeight;
                    ye.hidden
                      ? ((pu = u), (hu = c))
                      : (pu !== u || hu !== c) && $s();
                  },
                  ye,
                  "DOMContentLoaded",
                  yr,
                  re,
                  "load",
                  yr,
                  re,
                  "resize",
                  $s,
                ],
                xn(Ue),
                te.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < ie.length;
              l += 3
            )
              Mn(Ke, ie[l], ie[l + 1]), Mn(Ke, ie[l], ie[l + 2]);
          }
        }),
        (s.config = function (i) {
          "limitCallbacks" in i && (ro = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(Dn)) || ((Dn = r) && setInterval(Ou, r)),
            "ignoreMobileResize" in i &&
              (Qa = s.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (xn(Ke) || xn(Ue, i.autoRefreshEvents || "none"),
              (gu = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (i, r) {
          var n = Ot(i),
            a = ie.indexOf(n),
            o = dr(n);
          ~a && ie.splice(a, o ? 6 : 2),
            r && (o ? gi.unshift(re, r, fe, r, Ht, r) : gi.unshift(n, r));
        }),
        (s.clearMatchMedia = function (i) {
          te.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (i, r, n) {
          var a = (Wt(i) ? Ot(i) : i).getBoundingClientRect(),
            o = a[n ? pr : hr] * r || 0;
          return n
            ? a.right - o > 0 && a.left + o < re.innerWidth
            : a.bottom - o > 0 && a.top + o < re.innerHeight;
        }),
        (s.positionInViewport = function (i, r, n) {
          Wt(i) && (i = Ot(i));
          var a = i.getBoundingClientRect(),
            o = a[n ? pr : hr],
            l =
              r == null
                ? o / 2
                : r in An
                ? An[r] * o
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
        ? Ts(s).forEach(function (e) {
            if (e && e.style) {
              var t = Yt.indexOf(e);
              t >= 0 && Yt.splice(t, 5),
                Yt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  H.core.getCache(e),
                  Ja()
                );
            }
          })
        : Yt;
    }),
    (Y.revert = function (s, e) {
      return po(!s, e);
    }),
    (Y.create = function (s, e) {
      return new Y(s, e);
    }),
    (Y.refresh = function (s) {
      return s ? $s(!0) : (Hr || Y.register()) && yr(!0);
    }),
    (Y.update = function (s) {
      return ++ie.cache && Oi(s === !0 ? 2 : 0);
    }),
    (Y.clearScrollMemory = Iu),
    (Y.maxScroll = function (s, e) {
      return yi(s, e ? Dt : We);
    }),
    (Y.getScrollFunc = function (s, e) {
      return ji(Ot(s), e ? Dt : We);
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
    (Y.snapDirectional = uo),
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
          o.substr(0, 2) === "on" && ct(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        ct(n) &&
          ((n = n()),
          Ue(Y, "refresh", function () {
            return (n = e.batchMax());
          })),
        Ts(s).forEach(function (l) {
          var u = {};
          for (o in i) u[o] = i[o];
          (u.trigger = l), t.push(Y.create(u));
        }),
        t
      );
    });
  var Hu = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    vo = function s(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (ke.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Ht && s(fe, t);
    },
    Bn = { auto: 1, scroll: 1 },
    Up = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        n = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = n._gsap || H.core.getCache(n),
        o = ut(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== fe &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(Bn[(l = ei(n)).overflowY] || Bn[l.overflowX]));

        )
          n = n.parentNode;
        (a._isScroll =
          n &&
          n !== i &&
          !dr(n) &&
          (Bn[(l = ei(n)).overflowY] || Bn[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Wu = function (e, t, i, r) {
      return ke.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && Up),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Ue(ye, ke.eventTypes[0], Xu, !1, !0);
        },
        onDisable: function () {
          return Ke(ye, ke.eventTypes[0], Xu, !0);
        },
      });
    },
    Kp = /(input|label|select|textarea)/i,
    Yu,
    Xu = function (e) {
      var t = Kp.test(e.target.tagName);
      (t || Yu) && ((e._gsapAllow = !0), (Yu = t));
    },
    Zp = function (e) {
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
        u = Ot(e.target) || Ht,
        c = H.core.globals().ScrollSmoother,
        h = c && c.get(),
        m =
          Ui &&
          ((e.content && Ot(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = ji(u, We),
        f = ji(u, Dt),
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
        w,
        D = Wu(u, e.type, !0, n),
        x = function () {
          return (w = !1);
        },
        b = vi,
        T = vi,
        E = function () {
          (l = yi(u, We)),
            (T = Cs(Ui ? 1 : 0, l)),
            i && (b = Cs(0, yi(u, Dt))),
            (v = vr);
        },
        S = function () {
          (m._gsap.y = As(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        L = function () {
          if (w) {
            requestAnimationFrame(x);
            var O = As(o.deltaY / 2),
              A = T(p.v - O);
            if (m && A !== p.v + p.offset) {
              p.offset = A - p.v;
              var C = As((parseFloat(m && m._gsap.y) || 0) - p.offset);
              (m.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                C +
                ", 0, 1)"),
                (m._gsap.y = C + "px"),
                (p.cacheID = ie.cache),
                Oi();
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
            (Ui && M.type === "touchmove" && L()) ||
            (d > 1.05 && M.type !== "touchstart") ||
            o.isGesturing ||
            (M.touches && M.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          w = !1;
          var M = d;
          (d = As(((re.visualViewport && re.visualViewport.scale) || 1) / g)),
            P.pause(),
            M !== d && vo(u, d > 1.01 ? !0 : i ? !1 : "x"),
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
                (A *= Hu(f, C, W, yi(u, Dt))),
                (P.vars.scrollX = b(W))),
                (C = p()),
                (W = C + (A * 0.05 * -M.velocityY) / 0.227),
                (A *= Hu(p, C, W, yi(u, We))),
                (P.vars.scrollY = T(W)),
                P.invalidate().duration(A).play(0.01),
                ((Ui && P.vars.scrollY >= l) || C >= l - 1) &&
                  H.to({}, { onUpdate: I, duration: A });
            }
            a && a(M);
          }),
        (e.onWheel = function () {
          P._ts && P.pause(), ut() - _ > 1e3 && ((v = 0), (_ = ut()));
        }),
        (e.onChange = function (M, O, A, C, W) {
          if (
            (vr !== v && E(),
            O && i && f(b(C[2] === O ? k + (M.startX - M.x) : f() + O - C[1])),
            A)
          ) {
            p.offset && S();
            var Q = W[2] === A,
              De = Q ? F + M.startY - M.y : p() + A - W[1],
              se = T(De);
            Q && De !== se && (F += se - De), p(se);
          }
          (A || O) && Oi();
        }),
        (e.onEnable = function () {
          vo(u, i ? !1 : "x"),
            Y.addEventListener("refresh", I),
            Ue(re, "resize", I),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = f.smooth = !1)),
            D.enable();
        }),
        (e.onDisable = function () {
          vo(u, !0),
            Ke(re, "resize", I),
            Y.removeEventListener("refresh", I),
            D.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new ke(e)),
        (o.iOS = Ui),
        Ui && !p() && p(1),
        Ui && H.ticker.add(vi),
        (R = o._dc),
        (P = H.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: qu(p, p(), function () {
              return P.pause();
            }),
          },
          onUpdate: Oi,
          onComplete: R.vars.onComplete,
        })),
        o
      );
    };
  (Y.sort = function (s) {
    if (ct(s)) return te.sort(s);
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
      return new ke(s);
    }),
    (Y.normalizeScroll = function (s) {
      if (typeof s == "undefined") return St;
      if (s === !0 && St) return St.enable();
      if (s === !1) {
        St && St.kill(), (St = s);
        return;
      }
      var e = s instanceof ke ? s : Zp(s);
      return (
        St && St.target === e.target && St.kill(), dr(e.target) && (St = e), e
      );
    }),
    (Y.core = {
      _getVelocityProp: ja,
      _inputObserver: Wu,
      _scrollers: ie,
      _proxies: gi,
      bridge: {
        ss: function () {
          Qt || gr("scrollStart"), (Qt = ut());
        },
        ref: function () {
          return lt;
        },
      },
    }),
    Eu() && H.registerPlugin(Y),
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
  function Ns() {
    new _r();
  }
  class Qp {
    constructor() {
      this.swiper = new Tt("[swiper='review-slider']", {
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
  function qs() {
    new Qp();
  }
  q.registerPlugin(Y);
  const Jp = () => {
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
    eh = () => {
      Jp();
    },
    th = () => {
      eh();
    };
  var ih = "1.2.3";
  function Gu(s, e, t) {
    return Math.max(s, Math.min(e, t));
  }
  function rh(s, e, t) {
    return (1 - t) * s + t * e;
  }
  function sh(s, e, t, i) {
    return rh(s, e, 1 - Math.exp(-t * i));
  }
  function nh(s, e) {
    return ((s % e) + e) % e;
  }
  var ah = class {
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
        const i = Gu(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = sh(this.value, this.to, this.lerp * 60, s)),
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
  function oh(s, e) {
    let t;
    return function (...i) {
      let r = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), s.apply(r, i);
        }, e));
    };
  }
  var lh = class {
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
            ((this.debouncedResize = oh(this.resize, i)),
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
    ju = class {
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
    Uu = 100 / 6,
    Ki = { passive: !1 },
    uh = class {
      constructor(s, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        X(this, "touchStart", { x: 0, y: 0 });
        X(this, "lastDelta", { x: 0, y: 0 });
        X(this, "window", { width: 0, height: 0 });
        X(this, "emitter", new ju());
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
          const r = i === 1 ? Uu : i === 2 ? this.window.width : 1,
            n = i === 1 ? Uu : i === 2 ? this.window.height : 1;
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
          this.element.addEventListener("wheel", this.onWheel, Ki),
          this.element.addEventListener("touchstart", this.onTouchStart, Ki),
          this.element.addEventListener("touchmove", this.onTouchMove, Ki),
          this.element.addEventListener("touchend", this.onTouchEnd, Ki);
      }
      on(s, e) {
        return this.emitter.on(s, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Ki),
          this.element.removeEventListener("touchstart", this.onTouchStart, Ki),
          this.element.removeEventListener("touchmove", this.onTouchMove, Ki),
          this.element.removeEventListener("touchend", this.onTouchEnd, Ki);
      }
    },
    ch = class {
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
        X(this, "animate", new ah());
        X(this, "emitter", new ju());
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
              jn(
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
        (window.lenisVersion = ih),
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
          (this.dimensions = new lh(s, e, { autoResize: d })),
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
          (this.virtualScroll = new uh(t, {
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
                : (s = Gu(0, s, this.limit)),
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
          ? nh(this.animatedScroll, this.limit)
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
  const dh = () => {
      (Nn = new ch({ autoRaf: !0 })),
        Nn.on("scroll", Y.update),
        q.ticker.add((s) => {
          Nn.raf(s * 1e3);
        }),
        q.ticker.lagSmoothing(0);
    },
    fh = () => {
      dh();
    },
    dt = () => Nn;
  q.registerPlugin(Y);
  const ph = () => {
      const s = document.querySelectorAll('[hero-parallax="visual"]'),
        e = document.querySelector('[hero-parallax="header"]');
      if (!s.length && !e) return;
      const t = dt == null ? void 0 : dt();
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
    hh = () => {
      ph();
    },
    mh = () => {
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
          const u = dt();
          e === n ? (l(), u.start()) : (o(), u.stop());
        }),
          a.addEventListener("click", () => {
            e === n && (l(), dt().start());
          });
      }),
        document.addEventListener("keydown", (i) => {
          i.key === "Escape" && e && (t(e, "close"), dt().start(), (e = null));
        });
    },
    gh = () => {
      mh();
    };
  /*!
   * strings: 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var vh =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function Ku(s) {
    var e = s.nodeType,
      t = "";
    if (e === 1 || e === 9 || e === 11) {
      if (typeof s.textContent == "string") return s.textContent;
      for (s = s.firstChild; s; s = s.nextSibling) t += Ku(s);
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
    yo,
    Zu,
    Vs,
    Qu,
    qn,
    yh = /(?:\r|\n|\t\t)/g,
    _h = /(?:\s\s+)/g,
    wh = " ",
    Ju = function (e) {
      (Kr = document),
        (yo = window),
        (Vs =
          Vs ||
          e ||
          yo.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")),
        Vs &&
          ((qn = Vs.utils.toArray),
          (Qu = Vs.core.context || function () {}),
          (Zu = 1));
    },
    ec = function (e) {
      return yo.getComputedStyle(e);
    },
    _o = function (e) {
      return e.position === "absolute" || e.absolute === !0;
    },
    Dh = function (e, t) {
      for (var i = t.length, r; --i > -1; )
        if (((r = t[i]), e.substr(0, r.length) === r)) return r.length;
    },
    bh = " style='position:relative;display:inline-block;'",
    tc = function (e, t) {
      e === void 0 && (e = "");
      var i = ~e.indexOf("++"),
        r = 1;
      return (
        i && (e = e.split("++").join("")),
        function () {
          return (
            "<" + t + bh + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
          );
        }
      );
    },
    ic = function s(e, t, i) {
      var r = e.nodeType;
      if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling) s(e, t, i);
      else (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(t).join(i));
    },
    wo = function (e, t) {
      for (var i = t.length; --i > -1; ) e.push(t[i]);
    },
    rc = function (e, t, i) {
      for (var r; e && e !== t; ) {
        if (((r = e._next || e.nextSibling), r))
          return r.textContent.charAt(0) === i;
        e = e.parentNode || e._parent;
      }
    },
    Sh = function s(e) {
      var t = qn(e.childNodes),
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
    _i = function (e, t) {
      return parseFloat(t[e]) || 0;
    },
    Eh = function (e, t, i, r, n, a, o) {
      var l = ec(e),
        u = _i("paddingLeft", l),
        c = -999,
        h = _i("borderBottomWidth", l) + _i("borderTopWidth", l),
        m = _i("borderLeftWidth", l) + _i("borderRightWidth", l),
        p = _i("paddingTop", l) + _i("paddingBottom", l),
        f = _i("paddingLeft", l) + _i("paddingRight", l),
        d = _i("fontSize", l) * (t.lineThreshold || 0.2),
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
        S = _o(t),
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
        De,
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
                  (Q.push(A), (A._x -= u), rc(A, e, w) && (A._wordEnd = !0)),
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
                ((N = !A.nextSibling && rc(A.parentNode, e, w)),
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
        for (De = w === " " && (!S || (!T && !E)), I = 0; I < b.length; I++) {
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
              De && A._wordEnd && $.appendChild(Kr.createTextNode(" ")),
              S &&
                (M === 0 &&
                  (($.style.top = A._y + "px"), ($.style.left = u + N + "px")),
                (A.style.top = "0px"),
                N && (A.style.left = A._x - N + "px")));
          O === 0
            ? ($.innerHTML = "&nbsp;")
            : !T && !E && (Sh($), ic($, " ", " ")),
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
        wo(i, _),
        T && wo(r, y),
        wo(n, v);
    },
    xh = function (e, t, i, r) {
      var n = t.tag ? t.tag : t.span ? "span" : "div",
        a = t.type || t.split || "chars,words,lines",
        o = ~a.indexOf("chars"),
        l = _o(t),
        u = t.wordDelimiter || " ",
        c = function (S) {
          return S === u || (S === wh && u === " ");
        },
        h = u !== " " ? "" : l ? "&#173; " : " ",
        m = "</" + n + ">",
        p = 1,
        f = t.specialChars
          ? typeof t.specialChars == "function"
            ? t.specialChars
            : Dh
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
          d = Ku(e),
          D = d.indexOf("<") !== -1,
          t.reduceWhiteSpace !== !1 && (d = d.replace(_h, " ").replace(yh, "")),
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
            ? ((y = ((d.substr(_, 12).split(vh) || [])[1] || "").length || 2),
              (g +=
                o && w !== " "
                  ? r() + d.substr(_, y) + "</" + n + ">"
                  : d.substr(_, y)),
              (_ += y - 1))
            : (g += o && w !== " " ? r() + w + "</" + n + ">" : w);
      (e.outerHTML = g + (p ? m : "")), D && ic(T, "{{LT}}", "<");
    },
    Th = function s(e, t, i, r) {
      var n = qn(e.childNodes),
        a = n.length,
        o = _o(t),
        l,
        u;
      if (e.nodeType !== 3 || a > 1) {
        for (t.absolute = !1, l = 0; l < a; l++)
          (u = n[l]),
            (u._next = u._isFirst = u._parent = u._wordEnd = null),
            (u.nodeType !== 3 || /\S+/.test(u.nodeValue)) &&
              (o &&
                u.nodeType !== 3 &&
                ec(u).display === "inline" &&
                ((u.style.display = "inline-block"),
                (u.style.position = "relative")),
              (u._isSplit = !0),
              s(u, t, i, r));
        (t.absolute = o), (e._isSplit = !0);
        return;
      }
      xh(e, t, i, r);
    },
    wi = (function () {
      function s(t, i) {
        Zu || Ju(),
          (this.elements = qn(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = i || {}),
          Qu(this),
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
              a = tc(i.wordsClass, n),
              o = tc(i.charsClass, n),
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
              Th(c, i, a, o),
              Eh(c, i, this.chars, this.words, this.lines, u, l);
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
  (wi.version = "3.12.7"), (wi.register = Ju), q.registerPlugin(Y, wi);
  const Ch = () => {
      document.querySelectorAll("[list-enter='wrap']").forEach((e) => {
        e.querySelectorAll("[list-enter='item']").forEach((i) => {
          const r = i.querySelector("[list-enter='icon']"),
            n = i.querySelector("[list-enter='text']"),
            a = i.querySelector("[list-enter='line']"),
            o = new wi(n, { type: "lines", linesClass: "split-line" });
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
    Mh = () => {
      Ch();
    },
    Ph = () => {
      console.log("homeInit"), os(), Ns(), qs(), th(), hh(), gh(), Mh();
    },
    Ah = () => {
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
              const m = dt();
              m && m.stop();
            }),
            l.forEach((m) => {
              m.addEventListener("click", () => {
                c.restart();
                const p = dt();
                p && p.start();
              });
            });
        });
    },
    Fh = () => {
      Ah();
    };
  q.registerPlugin(Y);
  const Oh = () => {
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
    Lh = () => {
      Oh();
    };
  q.registerPlugin(Y, wi);
  const kh = () => {
      document.querySelectorAll("[rollover-text='wrap']").forEach((e) => {
        const t = e.querySelector("[rollover-text='wrap-rel']"),
          i =
            t == null ? void 0 : t.querySelector("[rollover-text='text-rel']"),
          r = e.querySelector("[rollover-text='wrap-ab']"),
          n = r == null ? void 0 : r.querySelector("[rollover-text='text-ab']");
        if (!t || !i || !r || !n) return;
        const a = new wi(i, { type: "chars" }),
          o = new wi(n, { type: "chars" }),
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
    Ih = () => {
      kh();
    },
    zh = () => {
      os(), Ns(), qs(), Fh(), Lh(), Ih();
    },
    sc = (s) => document.querySelector(s),
    Rh = (s) => document.querySelectorAll(s),
    $h = (s, e) => s.classList.add(e),
    Bh = () => {
      const s = sc(".contact-form");
      s &&
        s.addEventListener("submit", (e) => {
          e.preventDefault(), console.log("Form submitted!");
        });
    },
    Nh = () => {
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
    qh = () => {
      Nh();
    },
    Vh = () => {
      os(), Ns(), qs(), qh();
    };
  q.registerPlugin(Y);
  const Hh = () => {
      const s = document.querySelectorAll('[hero-parallax-sm="visual"]'),
        e = document.querySelector('[hero-parallax-sm="header"]');
      if (!s.length && !e) return;
      const t = dt == null ? void 0 : dt();
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
    Wh = () => {
      Hh();
    },
    Yh = () => {
      console.log("blogcmsInit"), os(), Ns(), qs(), Wh();
    },
    Xh = () => {
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
    Gh = () => {
      Xh();
    },
    jh = {
      home: Ph,
      about: zh,
      contact: Bh,
      work: Vh,
      blog_cms: Yh,
      work_cms: () => {
        console.log("workcmsInit"), os(), Ns(), qs(), Gh();
      },
    },
    Uh = () => {
      const s = document.querySelector("[data-page]"),
        e = s ? s.dataset.page : null,
        t = jh[e];
      t ? t() : console.log(`No specific script for route: ${e}`);
    },
    Kh = () => {
      Rh(".footer-accordion").forEach((e) => {
        const t = e.querySelector(".accordion-trigger"),
          i = e.querySelector(".accordion-content");
        !t ||
          !i ||
          t.addEventListener("click", () => {
            i.style.height = i.style.height ? "" : `${i.scrollHeight}px`;
          });
      });
    },
    Zh = () => {
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
  const Qh = () => {
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
    Jh = () => Qh(),
    em = () => {
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
            const u = dt();
            u && u.stop();
          });
        }),
        e.forEach((l) => {
          l.addEventListener("click", () => {
            o.restart();
            const u = dt();
            u && u.start();
          });
        });
    },
    tm = () => {
      em();
    };
  q.registerPlugin(Y);
  const im = () => {
      const s = document.querySelectorAll("[visual-parallax]");
      if (!s.length) return;
      const e = dt == null ? void 0 : dt();
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
    rm = () => {
      im();
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
  function sm(s, e) {
    if (!(s instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function nc(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function ac(s, e, t) {
    return e && nc(s.prototype, e), t && nc(s, t), s;
  }
  function nm(s, e, t) {
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
  function oc(s, e) {
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
  function lc(s) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? oc(Object(t), !0).forEach(function (i) {
            nm(s, i, t[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
        : oc(Object(t)).forEach(function (i) {
            Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(t, i));
          });
    }
    return s;
  }
  function uc(s, e) {
    return om(s) || um(s, e) || cc(s, e) || dm();
  }
  function xt(s) {
    return am(s) || lm(s) || cc(s) || cm();
  }
  function am(s) {
    if (Array.isArray(s)) return Do(s);
  }
  function om(s) {
    if (Array.isArray(s)) return s;
  }
  function lm(s) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(s))
      return Array.from(s);
  }
  function um(s, e) {
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
  function cc(s, e) {
    if (s) {
      if (typeof s == "string") return Do(s, e);
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
        return Do(s, e);
    }
  }
  function Do(s, e) {
    (e == null || e > s.length) && (e = s.length);
    for (var t = 0, i = new Array(e); t < e; t++) i[t] = s[t];
    return i;
  }
  function cm() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function dm() {
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
  function Hs(s) {
    return typeof s == "string";
  }
  function bo(s) {
    return Array.isArray(s);
  }
  function Vn() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = wr(s),
      t;
    return (
      e.types !== void 0 ? (t = e.types) : e.split !== void 0 && (t = e.split),
      t !== void 0 &&
        (e.types = (Hs(t) || bo(t) ? String(t) : "")
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
  function So(s) {
    var e = Hs(s) || bo(s) ? String(s) : "";
    return {
      none: !e,
      lines: /line/i.test(e),
      words: /word/i.test(e),
      chars: /char/i.test(e),
    };
  }
  function Hn(s) {
    return s !== null && typeof s == "object";
  }
  function fm(s) {
    return Hn(s) && /^(1|3|11)$/.test(s.nodeType);
  }
  function pm(s) {
    return typeof s == "number" && s > -1 && s % 1 === 0;
  }
  function hm(s) {
    return Hn(s) && pm(s.length);
  }
  function Dr(s) {
    return bo(s)
      ? s
      : s == null
      ? []
      : hm(s)
      ? Array.prototype.slice.call(s)
      : [s];
  }
  function dc(s) {
    var e = s;
    return (
      Hs(s) &&
        (/^(#[a-z]\w+)$/.test(s.trim())
          ? (e = document.getElementById(s.trim().slice(1)))
          : (e = document.querySelectorAll(s))),
      Dr(e).reduce(function (t, i) {
        return [].concat(xt(t), xt(Dr(i).filter(fm)));
      }, [])
    );
  }
  var mm = Object.entries,
    Wn = "_splittype",
    si = {},
    gm = 0;
  function Di(s, e, t) {
    if (!Hn(s)) return console.warn("[data.set] owner is not an object"), null;
    var i = s[Wn] || (s[Wn] = ++gm),
      r = si[i] || (si[i] = {});
    return (
      t === void 0
        ? e &&
          Object.getPrototypeOf(e) === Object.prototype &&
          (si[i] = lc(lc({}, r), e))
        : e !== void 0 && (r[e] = t),
      t
    );
  }
  function br(s, e) {
    var t = Hn(s) ? s[Wn] : null,
      i = (t && si[t]) || {};
    return i;
  }
  function fc(s) {
    var e = s && s[Wn];
    e && (delete s[e], delete si[e]);
  }
  function vm() {
    Object.keys(si).forEach(function (s) {
      delete si[s];
    });
  }
  function ym() {
    mm(si).forEach(function (s) {
      var e = uc(s, 2),
        t = e[0],
        i = e[1],
        r = i.isRoot,
        n = i.isSplit;
      (!r || !n) && ((si[t] = null), delete si[t]);
    });
  }
  function _m(s) {
    var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
      t = s ? String(s) : "";
    return t.trim().replace(/\s+/g, " ").split(e);
  }
  var Eo = "\\ud800-\\udfff",
    pc = "\\u0300-\\u036f\\ufe20-\\ufe23",
    hc = "\\u20d0-\\u20f0",
    mc = "\\ufe0e\\ufe0f",
    wm = "[".concat(Eo, "]"),
    xo = "[".concat(pc).concat(hc, "]"),
    To = "\\ud83c[\\udffb-\\udfff]",
    Dm = "(?:".concat(xo, "|").concat(To, ")"),
    gc = "[^".concat(Eo, "]"),
    vc = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    yc = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    _c = "\\u200d",
    wc = "".concat(Dm, "?"),
    Dc = "[".concat(mc, "]?"),
    bm = "(?:" + _c + "(?:" + [gc, vc, yc].join("|") + ")" + Dc + wc + ")*",
    Sm = Dc + wc + bm,
    Em = "(?:".concat(
      ["".concat(gc).concat(xo, "?"), xo, vc, yc, wm].join("|"),
      `
)`
    ),
    xm = RegExp(
      "".concat(To, "(?=").concat(To, ")|").concat(Em).concat(Sm),
      "g"
    ),
    Tm = [_c, Eo, pc, hc, mc],
    Cm = RegExp("[".concat(Tm.join(""), "]"));
  function Mm(s) {
    return s.split("");
  }
  function bc(s) {
    return Cm.test(s);
  }
  function Pm(s) {
    return s.match(xm) || [];
  }
  function Am(s) {
    return bc(s) ? Pm(s) : Mm(s);
  }
  function Fm(s) {
    return s == null ? "" : String(s);
  }
  function Om(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (s = Fm(s)), s && Hs(s) && !e && bc(s) ? Am(s) : s.split(e);
  }
  function Co(s, e) {
    var t = document.createElement(s);
    return (
      e &&
        Object.keys(e).forEach(function (i) {
          var r = e[i],
            n = Hs(r) ? r.trim() : r;
          n === null ||
            n === "" ||
            (i === "children"
              ? t.append.apply(t, xt(Dr(n)))
              : t.setAttribute(i, n));
        }),
      t
    );
  }
  var Mo = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function Lm(s, e) {
    e = wr(Mo, e);
    var t = So(e.types),
      i = e.tagName,
      r = s.nodeValue,
      n = document.createDocumentFragment(),
      a = [],
      o = [];
    return (
      /^\s/.test(r) && n.append(" "),
      (a = _m(r).reduce(function (l, u, c, h) {
        var m, p;
        return (
          t.chars &&
            (p = Om(u).map(function (f) {
              var d = Co(i, {
                class: "".concat(e.splitClass, " ").concat(e.charClass),
                style: "display: inline-block;",
                children: f,
              });
              return Di(d, "isChar", !0), (o = [].concat(xt(o), [d])), d;
            })),
          t.words || t.lines
            ? ((m = Co(i, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; ".concat(
                  t.words && e.absolute ? "position: relative;" : ""
                ),
                children: t.chars ? p : u,
              })),
              Di(m, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
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
  function Sc(s, e) {
    var t = s.nodeType,
      i = { words: [], chars: [] };
    if (!/(1|3|11)/.test(t)) return i;
    if (t === 3 && /\S/.test(s.nodeValue)) return Lm(s, e);
    var r = Dr(s.childNodes);
    if (r.length && (Di(s, "isSplit", !0), !br(s).isRoot)) {
      (s.style.display = "inline-block"), (s.style.position = "relative");
      var n = s.nextSibling,
        a = s.previousSibling,
        o = s.textContent || "",
        l = n ? n.textContent : " ",
        u = a ? a.textContent : " ";
      Di(s, {
        isWordEnd: /\s$/.test(o) || /^\s/.test(l),
        isWordStart: /^\s/.test(o) || /\s$/.test(u),
      });
    }
    return r.reduce(function (c, h) {
      var m = Sc(h, e),
        p = m.words,
        f = m.chars;
      return {
        words: [].concat(xt(c.words), xt(p)),
        chars: [].concat(xt(c.chars), xt(f)),
      };
    }, i);
  }
  function km(s, e, t, i) {
    if (!t.absolute) return { top: e ? s.offsetTop : null };
    var r = s.offsetParent,
      n = uc(i, 2),
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
  function Ec(s) {
    br(s).isWord
      ? (fc(s), s.replaceWith.apply(s, xt(s.childNodes)))
      : Dr(s.children).forEach(function (e) {
          return Ec(e);
        });
  }
  var Im = function () {
    return document.createDocumentFragment();
  };
  function zm(s, e, t) {
    var i = So(e.types),
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
      d = Im(),
      g = window.getComputedStyle(s),
      _ = g.textAlign,
      y = parseFloat(g.fontSize),
      v = y * 0.2;
    return (
      e.absolute &&
        ((h = { left: s.offsetLeft, top: s.offsetTop, width: s.offsetWidth }),
        (c = s.offsetWidth),
        (u = s.offsetHeight),
        Di(s, { cssWidth: s.style.width, cssHeight: s.style.height })),
      Dr(n).forEach(function (w) {
        var D = w.parentElement === s,
          x = km(w, D, e, t),
          b = x.width,
          T = x.height,
          E = x.top,
          S = x.left;
        /^br$/i.test(w.nodeName) ||
          (i.lines &&
            D &&
            ((l === null || E - l >= v) && ((l = E), a.push((o = []))),
            o.push(w)),
          e.absolute && Di(w, { top: E, left: S, width: b, height: T }));
      }),
      p && p.removeChild(s),
      i.lines &&
        ((m = a.map(function (w) {
          var D = Co(r, {
            class: "".concat(e.splitClass, " ").concat(e.lineClass),
            style: "display: block; text-align: ".concat(_, "; width: 100%;"),
          });
          Di(D, "isLine", !0);
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
            e.absolute && Di(D, { height: x.height, top: x.top }),
            D
          );
        })),
        i.words || Ec(d),
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
  var Zr = wr(Mo, {}),
    Rm = (function () {
      ac(s, null, [
        {
          key: "clearData",
          value: function () {
            vm();
          },
        },
        {
          key: "setDefaults",
          value: function (t) {
            return (Zr = wr(Zr, Vn(t))), Mo;
          },
        },
        {
          key: "revert",
          value: function (t) {
            dc(t).forEach(function (i) {
              var r = br(i),
                n = r.isSplit,
                a = r.html,
                o = r.cssWidth,
                l = r.cssHeight;
              n &&
                ((i.innerHTML = a),
                (i.style.width = o || ""),
                (i.style.height = l || ""),
                fc(i));
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
            return Zr;
          },
          set: function (t) {
            Zr = wr(Zr, Vn(t));
          },
        },
      ]);
      function s(e, t) {
        sm(this, s),
          (this.isSplit = !1),
          (this.settings = wr(Zr, Vn(t))),
          (this.elements = dc(e)),
          this.split();
      }
      return (
        ac(s, [
          {
            key: "split",
            value: function (t) {
              var i = this;
              this.revert(),
                this.elements.forEach(function (a) {
                  Di(a, "html", a.innerHTML);
                }),
                (this.lines = []),
                (this.words = []),
                (this.chars = []);
              var r = [window.pageXOffset, window.pageYOffset];
              t !== void 0 && (this.settings = wr(this.settings, Vn(t)));
              var n = So(this.settings.types);
              n.none ||
                (this.elements.forEach(function (a) {
                  Di(a, "isRoot", !0);
                  var o = Sc(a, i.settings),
                    l = o.words,
                    u = o.chars;
                  (i.words = [].concat(xt(i.words), xt(l))),
                    (i.chars = [].concat(xt(i.chars), xt(u)));
                }),
                this.elements.forEach(function (a) {
                  if (n.lines || i.settings.absolute) {
                    var o = zm(a, i.settings, r);
                    i.lines = [].concat(xt(i.lines), xt(o));
                  }
                }),
                (this.isSplit = !0),
                window.scrollTo(r[0], r[1]),
                ym());
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
  q.registerPlugin(Y, wi);
  const $m = () =>
      Cc(this, null, function* () {
        yield document.fonts.ready,
          Y.getAll().forEach((e) => {
            e.vars &&
              e.vars.trigger &&
              e.vars.trigger.hasAttribute &&
              e.vars.trigger.hasAttribute("split-text") &&
              e.kill(!0);
          }),
          document.querySelectorAll("[split-text]").forEach((e) => {
            new Rm(e, { type: "lines", tagName: "div" }).lines.forEach((n) => {
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
      }),
    Bm = () => {
      $m();
    };
  q.registerPlugin(Y);
  const Nm = () => {
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
    qm = () => {
      Nm();
    };
  q.registerPlugin(Y, wi);
  const Vm = () => {
      const s = document.querySelectorAll("[text-scramble]");
      s.length &&
        s.forEach((e) => {
          const i = new wi(e, { type: "chars", charsClass: "char-animate" })
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
    Hm = () => {
      Vm();
    };
  q.registerPlugin(Y);
  const Wm = () => {
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
            : Ym(i, r, a, o, l, u);
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
    Ym = (s, e, t, i, r, n) => {
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
    Xm = () => {
      Wm();
    },
    Gm = () => {
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
    jm = () => {
      Gm();
    },
    Um = () => {
      Kh(), Zh(), Jh(), tm(), rm(), Bm(), qm(), Hm(), Xm(), jm();
    },
    Km = () => {
      const s = sc(".example-component");
      s &&
        ($h(s, "is-initialized"),
        s.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Zm = () => {
      Km();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Um(), Zm(), Uh(), fh();
  });
});

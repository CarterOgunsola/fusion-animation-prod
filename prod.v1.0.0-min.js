var Ag = Object.defineProperty,
  Og = Object.defineProperties,
  kg = Object.getOwnPropertyDescriptors,
  ed = Object.getOwnPropertySymbols,
  Lg = Object.prototype.hasOwnProperty,
  Ig = Object.prototype.propertyIsEnumerable,
  ht = Math.pow,
  Vo = (e, t, r) =>
    t in e
      ? Ag(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ea = (e, t) => {
    for (var r in t || (t = {})) Lg.call(t, r) && Vo(e, r, t[r]);
    if (ed) for (var r of ed(t)) Ig.call(t, r) && Vo(e, r, t[r]);
    return e;
  },
  Ho = (e, t) => Og(e, kg(t)),
  X = (e, t, r) => Vo(e, "symbol" != typeof t ? t + "" : t, r);
!(function (e) {
  "function" == typeof define && define.amd ? define(e) : e();
})(function () {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(r, i) {
    void 0 === r && (r = {}), void 0 === i && (i = {});
    const s = ["__proto__", "constructor", "prototype"];
    Object.keys(i)
      .filter((e) => s.indexOf(e) < 0)
      .forEach((s) => {
        void 0 === r[s]
          ? (r[s] = i[s])
          : e(i[s]) && e(r[s]) && Object.keys(i[s]).length > 0 && t(r[s], i[s]);
      });
  }
  const r = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
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
  function i() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, r), e;
  }
  const s = {
    document: r,
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
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function n() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, s), e;
  }
  function a(e) {
    return (
      void 0 === e && (e = ""),
      e
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function o(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function l() {
    return Date.now();
  }
  function c(e, t) {
    void 0 === t && (t = "x");
    const r = n();
    let i, s, a;
    const o = (function (e) {
      const t = n();
      let r;
      return (
        t.getComputedStyle && (r = t.getComputedStyle(e, null)),
        !r && e.currentStyle && (r = e.currentStyle),
        r || (r = e.style),
        r
      );
    })(e);
    return (
      r.WebKitCSSMatrix
        ? ((s = o.transform || o.webkitTransform),
          s.split(",").length > 6 &&
            (s = s
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (a = new r.WebKitCSSMatrix("none" === s ? "" : s)))
        : ((a =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = a.toString().split(","))),
      "x" === t &&
        (s = r.WebKitCSSMatrix
          ? a.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (s = r.WebKitCSSMatrix
          ? a.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      s || 0
    );
  }
  function d(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function u(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function p() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let r = 1; r < arguments.length; r += 1) {
      const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
      if (null != i && !u(i)) {
        const r = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, s = r.length; t < s; t += 1) {
          const s = r[t],
            n = Object.getOwnPropertyDescriptor(i, s);
          void 0 !== n &&
            n.enumerable &&
            (d(e[s]) && d(i[s])
              ? i[s].__swiper__
                ? (e[s] = i[s])
                : p(e[s], i[s])
              : !d(e[s]) && d(i[s])
              ? ((e[s] = {}), i[s].__swiper__ ? (e[s] = i[s]) : p(e[s], i[s]))
              : (e[s] = i[s]));
        }
      }
    }
    return e;
  }
  function h(e, t, r) {
    e.style.setProperty(t, r);
  }
  function f(e) {
    let { swiper: t, targetPosition: r, side: i } = e;
    const s = n(),
      a = -t.translate;
    let o,
      l = null;
    const c = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      s.cancelAnimationFrame(t.cssModeFrameID);
    const d = r > a ? "next" : "prev",
      u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      p = () => {
        (o = new Date().getTime()), null === l && (l = o);
        const e = Math.max(Math.min((o - l) / c, 1), 0),
          n = 0.5 - Math.cos(e * Math.PI) / 2;
        let d = a + n * (r - a);
        if ((u(d, r) && (d = r), t.wrapperEl.scrollTo({ [i]: d }), u(d, r)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [i]: d });
            }),
            void s.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = s.requestAnimationFrame(p);
      };
    p();
  }
  function m(e) {
    return (
      e.querySelector(".swiper-slide-transform") ||
      (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
      e
    );
  }
  function g(e, t) {
    void 0 === t && (t = "");
    const r = n(),
      i = [...e.children];
    return (
      r.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        i.push(...e.assignedElements()),
      t ? i.filter((e) => e.matches(t)) : i
    );
  }
  function v(e) {
    try {
      return void console.warn(e);
    } catch (e) {}
  }
  function y(e, t) {
    void 0 === t && (t = []);
    const r = document.createElement(e);
    return r.classList.add(...(Array.isArray(t) ? t : a(t))), r;
  }
  function w(e) {
    const t = n(),
      r = i(),
      s = e.getBoundingClientRect(),
      a = r.body,
      o = e.clientTop || a.clientTop || 0,
      l = e.clientLeft || a.clientLeft || 0,
      c = e === t ? t.scrollY : e.scrollTop,
      d = e === t ? t.scrollX : e.scrollLeft;
    return { top: s.top + c - o, left: s.left + d - l };
  }
  function b(e, t) {
    return n().getComputedStyle(e, null).getPropertyValue(t);
  }
  function x(e) {
    let t,
      r = e;
    if (r) {
      for (t = 0; null !== (r = r.previousSibling); )
        1 === r.nodeType && (t += 1);
      return t;
    }
  }
  function S(e, t) {
    const r = [];
    let i = e.parentElement;
    for (; i; )
      t ? i.matches(t) && r.push(i) : r.push(i), (i = i.parentElement);
    return r;
  }
  function E(e, t) {
    t &&
      e.addEventListener("transitionend", function r(i) {
        i.target === e &&
          (t.call(e, i), e.removeEventListener("transitionend", r));
      });
  }
  function _(e, t, r) {
    const i = n();
    return (
      e["width" === t ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        i
          .getComputedStyle(e, null)
          .getPropertyValue("width" === t ? "margin-right" : "margin-top")
      ) +
      parseFloat(
        i
          .getComputedStyle(e, null)
          .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
      )
    );
  }
  function T(e) {
    return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
  }
  function M(e) {
    return (t) =>
      Math.abs(t) > 0 &&
      e.browser &&
      e.browser.need3dFix &&
      Math.abs(t) % 90 == 0
        ? t + 0.001
        : t;
  }
  let C, k, P;
  function A() {
    return (
      C ||
        (C = (function () {
          const e = n(),
            t = i();
          return {
            smoothScroll:
              t.documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      C
    );
  }
  function O(e) {
    return (
      void 0 === e && (e = {}),
      k ||
        (k = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const r = A(),
            i = n(),
            s = i.navigator.platform,
            a = t || i.navigator.userAgent,
            o = { ios: !1, android: !1 },
            l = i.screen.width,
            c = i.screen.height,
            d = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = a.match(/(iPad).*OS\s([\d_]+)/);
          const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === s;
          let m = "MacIntel" === s;
          return (
            !u &&
              m &&
              r.touch &&
              [
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
              ].indexOf(`${l}x${c}`) >= 0 &&
              ((u = a.match(/(Version)\/([\d.]+)/)),
              u || (u = [0, 1, "13_0_0"]),
              (m = !1)),
            d && !f && ((o.os = "android"), (o.android = !0)),
            (u || h || p) && ((o.os = "ios"), (o.ios = !0)),
            o
          );
        })(e)),
      k
    );
  }
  function L() {
    return (
      P ||
        (P = (function () {
          const e = n(),
            t = O();
          let r = !1;
          function i() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (i()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, i] = t
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              r = e < 16 || (16 === e && i < 2);
            }
          }
          const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
            a = i();
          return {
            isSafari: r || a,
            needPerspectiveFix: r,
            need3dFix: a || (s && t.ios),
            isWebView: s,
          };
        })()),
      P
    );
  }
  var z = {
    on(e, t, r) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || "function" != typeof t) return i;
      const s = r ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][s](t);
        }),
        i
      );
    },
    once(e, t, r) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || "function" != typeof t) return i;
      function s() {
        i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
          n[a] = arguments[a];
        t.apply(i, n);
      }
      return (s.__emitterProxy = t), i.on(e, s, r);
    },
    onAny(e, t) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || "function" != typeof e) return r;
      const i = t ? "unshift" : "push";
      return (
        r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
      const r = t.eventsAnyListeners.indexOf(e);
      return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
    },
    off(e, t) {
      const r = this;
      return (
        !r.eventsListeners ||
          r.destroyed ||
          !r.eventsListeners ||
          e.split(" ").forEach((e) => {
            void 0 === t
              ? (r.eventsListeners[e] = [])
              : r.eventsListeners[e] &&
                r.eventsListeners[e].forEach((i, s) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    r.eventsListeners[e].splice(s, 1);
                });
          }),
        r
      );
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let t, r, i;
      for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
        n[a] = arguments[a];
      return (
        "string" == typeof n[0] || Array.isArray(n[0])
          ? ((t = n[0]), (r = n.slice(1, n.length)), (i = e))
          : ((t = n[0].events), (r = n[0].data), (i = n[0].context || e)),
        r.unshift(i),
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(i, [t, ...r]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(i, r);
              });
        }),
        e
      );
    },
  };
  const D = (e, t, r) => {
    t && !e.classList.contains(r)
      ? e.classList.add(r)
      : !t && e.classList.contains(r) && e.classList.remove(r);
  };
  const I = (e, t, r) => {
    t && !e.classList.contains(r)
      ? e.classList.add(r)
      : !t && e.classList.contains(r) && e.classList.remove(r);
  };
  const q = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const r = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (r) {
        let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t &&
          e.isElement &&
          (r.shadowRoot
            ? (t = r.shadowRoot.querySelector(
                `.${e.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                r.shadowRoot &&
                  ((t = r.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  )),
                  t && t.remove());
              })),
          t && t.remove();
      }
    },
    $ = (e, t) => {
      if (!e.slides[t]) return;
      const r = e.slides[t].querySelector('[loading="lazy"]');
      r && r.removeAttribute("loading");
    },
    R = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const r = e.slides.length;
      if (!r || !t || t < 0) return;
      t = Math.min(t, r);
      const i =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        s = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const r = s,
          n = [r - t];
        return (
          n.push(...Array.from({ length: t }).map((e, t) => r + i + t)),
          void e.slides.forEach((t, r) => {
            n.includes(t.column) && $(e, r);
          })
        );
      }
      const n = s + i - 1;
      if (e.params.rewind || e.params.loop)
        for (let i = s - t; i <= n + t; i += 1) {
          const t = ((i % r) + r) % r;
          (t < s || t > n) && $(e, t);
        }
      else
        for (let i = Math.max(s - t, 0); i <= Math.min(n + t, r - 1); i += 1)
          i !== s && (i > n || i < s) && $(e, i);
    };
  var N = {
    updateSize: function () {
      const e = this;
      let t, r;
      const i = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i.clientWidth),
        (r =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i.clientHeight),
        !((0 === t && e.isHorizontal()) || (0 === r && e.isVertical())) &&
          ((t =
            t -
            parseInt(b(i, "padding-left") || 0, 10) -
            parseInt(b(i, "padding-right") || 0, 10)),
          (r =
            r -
            parseInt(b(i, "padding-top") || 0, 10) -
            parseInt(b(i, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(r) && (r = 0),
          Object.assign(e, {
            width: t,
            height: r,
            size: e.isHorizontal() ? t : r,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t, r) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0);
      }
      const r = e.params,
        {
          wrapperEl: i,
          slidesEl: s,
          size: n,
          rtlTranslate: a,
          wrongRTL: o,
        } = e,
        l = e.virtual && r.virtual.enabled,
        c = l ? e.virtual.slides.length : e.slides.length,
        d = g(s, `.${e.params.slideClass}, swiper-slide`),
        u = l ? e.virtual.slides.length : d.length;
      let p = [];
      const f = [],
        m = [];
      let v = r.slidesOffsetBefore;
      "function" == typeof v && (v = r.slidesOffsetBefore.call(e));
      let y = r.slidesOffsetAfter;
      "function" == typeof y && (y = r.slidesOffsetAfter.call(e));
      const w = e.snapGrid.length,
        x = e.slidesGrid.length;
      let S = r.spaceBetween,
        E = -v,
        T = 0,
        M = 0;
      if (void 0 === n) return;
      "string" == typeof S && S.indexOf("%") >= 0
        ? (S = (parseFloat(S.replace("%", "")) / 100) * n)
        : "string" == typeof S && (S = parseFloat(S)),
        (e.virtualSize = -S),
        d.forEach((e) => {
          a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        r.centeredSlides &&
          r.cssMode &&
          (h(i, "--swiper-centered-offset-before", ""),
          h(i, "--swiper-centered-offset-after", ""));
      const C = r.grid && r.grid.rows > 1 && e.grid;
      let k;
      C ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
      const P =
        "auto" === r.slidesPerView &&
        r.breakpoints &&
        Object.keys(r.breakpoints).filter(
          (e) => void 0 !== r.breakpoints[e].slidesPerView
        ).length > 0;
      for (let i = 0; i < u; i += 1) {
        let s;
        if (
          ((k = 0),
          d[i] && (s = d[i]),
          C && e.grid.updateSlide(i, s, d),
          !d[i] || "none" !== b(s, "display"))
        ) {
          if ("auto" === r.slidesPerView) {
            P && (d[i].style[e.getDirectionLabel("width")] = "");
            const n = getComputedStyle(s),
              a = s.style.transform,
              o = s.style.webkitTransform;
            if (
              (a && (s.style.transform = "none"),
              o && (s.style.webkitTransform = "none"),
              r.roundLengths)
            )
              k = e.isHorizontal() ? _(s, "width") : _(s, "height");
            else {
              const e = t(n, "width"),
                r = t(n, "padding-left"),
                i = t(n, "padding-right"),
                a = t(n, "margin-left"),
                o = t(n, "margin-right"),
                l = n.getPropertyValue("box-sizing");
              if (l && "border-box" === l) k = e + a + o;
              else {
                const { clientWidth: t, offsetWidth: n } = s;
                k = e + r + i + a + o + (n - t);
              }
            }
            a && (s.style.transform = a),
              o && (s.style.webkitTransform = o),
              r.roundLengths && (k = Math.floor(k));
          } else
            (k = (n - (r.slidesPerView - 1) * S) / r.slidesPerView),
              r.roundLengths && (k = Math.floor(k)),
              d[i] && (d[i].style[e.getDirectionLabel("width")] = `${k}px`);
          d[i] && (d[i].swiperSlideSize = k),
            m.push(k),
            r.centeredSlides
              ? ((E = E + k / 2 + T / 2 + S),
                0 === T && 0 !== i && (E = E - n / 2 - S),
                0 === i && (E = E - n / 2 - S),
                Math.abs(E) < 0.001 && (E = 0),
                r.roundLengths && (E = Math.floor(E)),
                M % r.slidesPerGroup == 0 && p.push(E),
                f.push(E))
              : (r.roundLengths && (E = Math.floor(E)),
                (M - Math.min(e.params.slidesPerGroupSkip, M)) %
                  e.params.slidesPerGroup ==
                  0 && p.push(E),
                f.push(E),
                (E = E + k + S)),
            (e.virtualSize += k + S),
            (T = k),
            (M += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, n) + y),
        a &&
          o &&
          ("slide" === r.effect || "coverflow" === r.effect) &&
          (i.style.width = `${e.virtualSize + S}px`),
        r.setWrapperSize &&
          (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + S}px`),
        C && e.grid.updateWrapperSize(k, p),
        !r.centeredSlides)
      ) {
        const t = [];
        for (let i = 0; i < p.length; i += 1) {
          let s = p[i];
          r.roundLengths && (s = Math.floor(s)),
            p[i] <= e.virtualSize - n && t.push(s);
        }
        (p = t),
          Math.floor(e.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 &&
            p.push(e.virtualSize - n);
      }
      if (l && r.loop) {
        const t = m[0] + S;
        if (r.slidesPerGroup > 1) {
          const i = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                r.slidesPerGroup
            ),
            s = t * r.slidesPerGroup;
          for (let e = 0; e < i; e += 1) p.push(p[p.length - 1] + s);
        }
        for (
          let i = 0;
          i < e.virtual.slidesBefore + e.virtual.slidesAfter;
          i += 1
        )
          1 === r.slidesPerGroup && p.push(p[p.length - 1] + t),
            f.push(f[f.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === p.length && (p = [0]), 0 !== S)) {
        const t =
          e.isHorizontal() && a
            ? "marginLeft"
            : e.getDirectionLabel("marginRight");
        d.filter(
          (e, t) => !(r.cssMode && !r.loop) || t !== d.length - 1
        ).forEach((e) => {
          e.style[t] = `${S}px`;
        });
      }
      if (r.centeredSlides && r.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (S || 0);
        }),
          (e -= S);
        const t = e > n ? e - n : 0;
        p = p.map((e) => (e <= 0 ? -v : e > t ? t + y : e));
      }
      if (r.centerInsufficientSlides) {
        let e = 0;
        m.forEach((t) => {
          e += t + (S || 0);
        }),
          (e -= S);
        const t = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
        if (e + t < n) {
          const r = (n - e - t) / 2;
          p.forEach((e, t) => {
            p[t] = e - r;
          }),
            f.forEach((e, t) => {
              f[t] = e + r;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: d,
          snapGrid: p,
          slidesGrid: f,
          slidesSizesGrid: m,
        }),
        r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
      ) {
        h(i, "--swiper-centered-offset-before", -p[0] + "px"),
          h(
            i,
            "--swiper-centered-offset-after",
            e.size / 2 - m[m.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          r = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + r));
      }
      if (
        (u !== c && e.emit("slidesLengthChange"),
        p.length !== w &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        f.length !== x && e.emit("slidesGridLengthChange"),
        r.watchSlidesProgress && e.updateSlidesOffset(),
        e.emit("slidesUpdated"),
        !(l || r.cssMode || ("slide" !== r.effect && "fade" !== r.effect)))
      ) {
        const t = `${r.containerModifierClass}backface-hidden`,
          i = e.el.classList.contains(t);
        u <= r.maxBackfaceHiddenSlides
          ? i || e.el.classList.add(t)
          : i && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        r = [],
        i = t.virtual && t.params.virtual.enabled;
      let s,
        n = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const a = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            r.push(e);
          });
        else
          for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
            const e = t.activeIndex + s;
            if (e > t.slides.length && !i) break;
            r.push(a(e));
          }
      else r.push(a(t.activeIndex));
      for (s = 0; s < r.length; s += 1)
        if (void 0 !== r[s]) {
          const e = r[s].offsetHeight;
          n = e > n ? e : n;
        }
      (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        r = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset =
          (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
          r -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        r = t.params,
        { slides: i, rtlTranslate: s, snapGrid: n } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let a = -e;
      s && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
      let o = r.spaceBetween;
      "string" == typeof o && o.indexOf("%") >= 0
        ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
        : "string" == typeof o && (o = parseFloat(o));
      for (let e = 0; e < i.length; e += 1) {
        const l = i[e];
        let c = l.swiperSlideOffset;
        r.cssMode && r.centeredSlides && (c -= i[0].swiperSlideOffset);
        const d =
            (a + (r.centeredSlides ? t.minTranslate() : 0) - c) /
            (l.swiperSlideSize + o),
          u =
            (a - n[0] + (r.centeredSlides ? t.minTranslate() : 0) - c) /
            (l.swiperSlideSize + o),
          p = -(a - c),
          h = p + t.slidesSizesGrid[e],
          f = p >= 0 && p <= t.size - t.slidesSizesGrid[e],
          m =
            (p >= 0 && p < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (p <= 0 && h >= t.size);
        m && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)),
          D(l, m, r.slideVisibleClass),
          D(l, f, r.slideFullyVisibleClass),
          (l.progress = s ? -d : d),
          (l.originalProgress = s ? -u : u);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const r = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * r) || 0;
      }
      const r = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: s, isBeginning: n, isEnd: a, progressLoop: o } = t;
      const l = n,
        c = a;
      if (0 === i) (s = 0), (n = !0), (a = !0);
      else {
        s = (e - t.minTranslate()) / i;
        const r = Math.abs(e - t.minTranslate()) < 1,
          o = Math.abs(e - t.maxTranslate()) < 1;
        (n = r || s <= 0), (a = o || s >= 1), r && (s = 0), o && (s = 1);
      }
      if (r.loop) {
        const r = t.getSlideIndexByData(0),
          i = t.getSlideIndexByData(t.slides.length - 1),
          s = t.slidesGrid[r],
          n = t.slidesGrid[i],
          a = t.slidesGrid[t.slidesGrid.length - 1],
          l = Math.abs(e);
        (o = l >= s ? (l - s) / a : (l + a - n) / a), o > 1 && (o -= 1);
      }
      Object.assign(t, {
        progress: s,
        progressLoop: o,
        isBeginning: n,
        isEnd: a,
      }),
        (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
          t.updateSlidesProgress(e),
        n && !l && t.emit("reachBeginning toEdge"),
        a && !c && t.emit("reachEnd toEdge"),
        ((l && !n) || (c && !a)) && t.emit("fromEdge"),
        t.emit("progress", s);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: r, slidesEl: i, activeIndex: s } = e,
        n = e.virtual && r.virtual.enabled,
        a = e.grid && r.grid && r.grid.rows > 1,
        o = (e) => g(i, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
      let l, c, d;
      if (n)
        if (r.loop) {
          let t = s - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (l = o(`[data-swiper-slide-index="${t}"]`));
        } else l = o(`[data-swiper-slide-index="${s}"]`);
      else
        a
          ? ((l = t.find((e) => e.column === s)),
            (d = t.find((e) => e.column === s + 1)),
            (c = t.find((e) => e.column === s - 1)))
          : (l = t[s]);
      l &&
        (a ||
          ((d = (function (e, t) {
            const r = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && r.push(i) : r.push(i), (e = i);
            }
            return r;
          })(l, `.${r.slideClass}, swiper-slide`)[0]),
          r.loop && !d && (d = t[0]),
          (c = (function (e, t) {
            const r = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && r.push(i) : r.push(i), (e = i);
            }
            return r;
          })(l, `.${r.slideClass}, swiper-slide`)[0]),
          r.loop && 0 === !c && (c = t[t.length - 1]))),
        t.forEach((e) => {
          I(e, e === l, r.slideActiveClass),
            I(e, e === d, r.slideNextClass),
            I(e, e === c, r.slidePrevClass);
        }),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        r = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: i,
          params: s,
          activeIndex: n,
          realIndex: a,
          snapIndex: o,
        } = t;
      let l,
        c = e;
      const d = (e) => {
        let r = e - t.virtual.slidesBefore;
        return (
          r < 0 && (r = t.virtual.slides.length + r),
          r >= t.virtual.slides.length && (r -= t.virtual.slides.length),
          r
        );
      };
      if (
        (void 0 === c &&
          (c = (function (e) {
            const { slidesGrid: t, params: r } = e,
              i = e.rtlTranslate ? e.translate : -e.translate;
            let s;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (s = e)
                  : i >= t[e] && i < t[e + 1] && (s = e + 1)
                : i >= t[e] && (s = e);
            return (
              r.normalizeSlideIndex && (s < 0 || void 0 === s) && (s = 0), s
            );
          })(t)),
        i.indexOf(r) >= 0)
      )
        l = i.indexOf(r);
      else {
        const e = Math.min(s.slidesPerGroupSkip, c);
        l = e + Math.floor((c - e) / s.slidesPerGroup);
      }
      if ((l >= i.length && (l = i.length - 1), c === n && !t.params.loop))
        return void (l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")));
      if (c === n && t.params.loop && t.virtual && t.params.virtual.enabled)
        return void (t.realIndex = d(c));
      const u = t.grid && s.grid && s.grid.rows > 1;
      let p;
      if (t.virtual && s.virtual.enabled && s.loop) p = d(c);
      else if (u) {
        const e = t.slides.find((e) => e.column === c);
        let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)),
          (p = Math.floor(r / s.grid.rows));
      } else if (t.slides[c]) {
        const e = t.slides[c].getAttribute("data-swiper-slide-index");
        p = e ? parseInt(e, 10) : c;
      } else p = c;
      Object.assign(t, {
        previousSnapIndex: o,
        snapIndex: l,
        previousRealIndex: a,
        realIndex: p,
        previousIndex: n,
        activeIndex: c,
      }),
        t.initialized && R(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) &&
          (a !== p && t.emit("realIndexChange"), t.emit("slideChange"));
    },
    updateClickedSlide: function (e, t) {
      const r = this,
        i = r.params;
      let s = e.closest(`.${i.slideClass}, swiper-slide`);
      !s &&
        r.isElement &&
        t &&
        t.length > 1 &&
        t.includes(e) &&
        [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
          !s &&
            e.matches &&
            e.matches(`.${i.slideClass}, swiper-slide`) &&
            (s = e);
        });
      let n,
        a = !1;
      if (s)
        for (let e = 0; e < r.slides.length; e += 1)
          if (r.slides[e] === s) {
            (a = !0), (n = e);
            break;
          }
      if (!s || !a)
        return (r.clickedSlide = void 0), void (r.clickedIndex = void 0);
      (r.clickedSlide = s),
        r.virtual && r.params.virtual.enabled
          ? (r.clickedIndex = parseInt(
              s.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (r.clickedIndex = n),
        i.slideToClickedSlide &&
          void 0 !== r.clickedIndex &&
          r.clickedIndex !== r.activeIndex &&
          r.slideToClickedSlide();
    },
  };
  var B = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: r, translate: i, wrapperEl: s } = this;
      if (t.virtualTranslate) return r ? -i : i;
      if (t.cssMode) return i;
      let n = c(s, e);
      return (n += this.cssOverflowAdjustment()), r && (n = -n), n || 0;
    },
    setTranslate: function (e, t) {
      const r = this,
        { rtlTranslate: i, params: s, wrapperEl: n, progress: a } = r;
      let o,
        l = 0,
        c = 0;
      r.isHorizontal() ? (l = i ? -e : e) : (c = e),
        s.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
        (r.previousTranslate = r.translate),
        (r.translate = r.isHorizontal() ? l : c),
        s.cssMode
          ? (n[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal()
              ? -l
              : -c)
          : s.virtualTranslate ||
            (r.isHorizontal()
              ? (l -= r.cssOverflowAdjustment())
              : (c -= r.cssOverflowAdjustment()),
            (n.style.transform = `translate3d(${l}px, ${c}px, 0px)`));
      const d = r.maxTranslate() - r.minTranslate();
      (o = 0 === d ? 0 : (e - r.minTranslate()) / d),
        o !== a && r.updateProgress(e),
        r.emit("setTranslate", r.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, r, i, s) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === r && (r = !0),
        void 0 === i && (i = !0);
      const n = this,
        { params: a, wrapperEl: o } = n;
      if (n.animating && a.preventInteractionOnTransition) return !1;
      const l = n.minTranslate(),
        c = n.maxTranslate();
      let d;
      if (
        ((d = i && e > l ? l : i && e < c ? c : e),
        n.updateProgress(d),
        a.cssMode)
      ) {
        const e = n.isHorizontal();
        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!n.support.smoothScroll)
            return (
              f({ swiper: n, targetPosition: -d, side: e ? "left" : "top" }), !0
            );
          o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (n.setTransition(0),
            n.setTranslate(d),
            r &&
              (n.emit("beforeTransitionStart", t, s), n.emit("transitionEnd")))
          : (n.setTransition(t),
            n.setTranslate(d),
            r &&
              (n.emit("beforeTransitionStart", t, s),
              n.emit("transitionStart")),
            n.animating ||
              ((n.animating = !0),
              n.onTranslateToWrapperTransitionEnd ||
                (n.onTranslateToWrapperTransitionEnd = function (e) {
                  !n ||
                    n.destroyed ||
                    (e.target === this &&
                      (n.wrapperEl.removeEventListener(
                        "transitionend",
                        n.onTranslateToWrapperTransitionEnd
                      ),
                      (n.onTranslateToWrapperTransitionEnd = null),
                      delete n.onTranslateToWrapperTransitionEnd,
                      (n.animating = !1),
                      r && n.emit("transitionEnd")));
                }),
              n.wrapperEl.addEventListener(
                "transitionend",
                n.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function F(e) {
    let { swiper: t, runCallbacks: r, direction: i, step: s } = e;
    const { activeIndex: n, previousIndex: a } = t;
    let o = i;
    if (
      (o || (o = n > a ? "next" : n < a ? "prev" : "reset"),
      t.emit(`transition${s}`),
      r && n !== a)
    ) {
      if ("reset" === o) return void t.emit(`slideResetTransition${s}`);
      t.emit(`slideChangeTransition${s}`),
        "next" === o
          ? t.emit(`slideNextTransition${s}`)
          : t.emit(`slidePrevTransition${s}`);
    }
  }
  var Y = {
    setTransition: function (e, t) {
      const r = this;
      r.params.cssMode ||
        ((r.wrapperEl.style.transitionDuration = `${e}ms`),
        (r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
        r.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      const r = this,
        { params: i } = r;
      i.cssMode ||
        (i.autoHeight && r.updateAutoHeight(),
        F({ swiper: r, runCallbacks: e, direction: t, step: "Start" }));
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      const r = this,
        { params: i } = r;
      (r.animating = !1),
        !i.cssMode &&
          (r.setTransition(0),
          F({ swiper: r, runCallbacks: e, direction: t, step: "End" }));
    },
  };
  var H = {
    slideTo: function (e, t, r, i, s) {
      void 0 === e && (e = 0),
        void 0 === r && (r = !0),
        "string" == typeof e && (e = parseInt(e, 10));
      const n = this;
      let a = e;
      a < 0 && (a = 0);
      const {
        params: o,
        snapGrid: l,
        slidesGrid: c,
        previousIndex: d,
        activeIndex: u,
        rtlTranslate: p,
        wrapperEl: h,
        enabled: m,
      } = n;
      if (
        (!m && !i && !s) ||
        n.destroyed ||
        (n.animating && o.preventInteractionOnTransition)
      )
        return !1;
      void 0 === t && (t = n.params.speed);
      const g = Math.min(n.params.slidesPerGroupSkip, a);
      let v = g + Math.floor((a - g) / n.params.slidesPerGroup);
      v >= l.length && (v = l.length - 1);
      const y = -l[v];
      if (o.normalizeSlideIndex)
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * y),
            r = Math.floor(100 * c[e]),
            i = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= r && t < i - (i - r) / 2
              ? (a = e)
              : t >= r && t < i && (a = e + 1)
            : t >= r && (a = e);
        }
      if (
        n.initialized &&
        a !== u &&
        ((!n.allowSlideNext &&
          (p
            ? y > n.translate && y > n.minTranslate()
            : y < n.translate && y < n.minTranslate())) ||
          (!n.allowSlidePrev &&
            y > n.translate &&
            y > n.maxTranslate() &&
            (u || 0) !== a))
      )
        return !1;
      let w;
      a !== (d || 0) && r && n.emit("beforeSlideChangeStart"),
        n.updateProgress(y),
        (w = a > u ? "next" : a < u ? "prev" : "reset");
      const b = n.virtual && n.params.virtual.enabled;
      if (
        (!b || !s) &&
        ((p && -y === n.translate) || (!p && y === n.translate))
      )
        return (
          n.updateActiveIndex(a),
          o.autoHeight && n.updateAutoHeight(),
          n.updateSlidesClasses(),
          "slide" !== o.effect && n.setTranslate(y),
          "reset" !== w && (n.transitionStart(r, w), n.transitionEnd(r, w)),
          !1
        );
      if (o.cssMode) {
        const e = n.isHorizontal(),
          r = p ? y : -y;
        if (0 === t)
          b &&
            ((n.wrapperEl.style.scrollSnapType = "none"),
            (n._immediateVirtual = !0)),
            b && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
              ? ((n._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = r;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = r),
            b &&
              requestAnimationFrame(() => {
                (n.wrapperEl.style.scrollSnapType = ""),
                  (n._immediateVirtual = !1);
              });
        else {
          if (!n.support.smoothScroll)
            return (
              f({ swiper: n, targetPosition: r, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: r, behavior: "smooth" });
        }
        return !0;
      }
      const x = L().isSafari;
      return (
        b && !s && x && n.isElement && n.virtual.update(!1, !1, a),
        n.setTransition(t),
        n.setTranslate(y),
        n.updateActiveIndex(a),
        n.updateSlidesClasses(),
        n.emit("beforeTransitionStart", t, i),
        n.transitionStart(r, w),
        0 === t
          ? n.transitionEnd(r, w)
          : n.animating ||
            ((n.animating = !0),
            n.onSlideToWrapperTransitionEnd ||
              (n.onSlideToWrapperTransitionEnd = function (e) {
                !n ||
                  n.destroyed ||
                  (e.target === this &&
                    (n.wrapperEl.removeEventListener(
                      "transitionend",
                      n.onSlideToWrapperTransitionEnd
                    ),
                    (n.onSlideToWrapperTransitionEnd = null),
                    delete n.onSlideToWrapperTransitionEnd,
                    n.transitionEnd(r, w)));
              }),
            n.wrapperEl.addEventListener(
              "transitionend",
              n.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, r, i) {
      void 0 === e && (e = 0),
        void 0 === r && (r = !0),
        "string" == typeof e && (e = parseInt(e, 10));
      const s = this;
      if (s.destroyed) return;
      void 0 === t && (t = s.params.speed);
      const n = s.grid && s.params.grid && s.params.grid.rows > 1;
      let a = e;
      if (s.params.loop)
        if (s.virtual && s.params.virtual.enabled) a += s.virtual.slidesBefore;
        else {
          let e;
          if (n) {
            const t = a * s.params.grid.rows;
            e = s.slides.find(
              (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
            ).column;
          } else e = s.getSlideIndexByData(a);
          const t = n
              ? Math.ceil(s.slides.length / s.params.grid.rows)
              : s.slides.length,
            { centeredSlides: r } = s.params;
          let o = s.params.slidesPerView;
          "auto" === o
            ? (o = s.slidesPerViewDynamic())
            : ((o = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
              r && o % 2 == 0 && (o += 1));
          let l = t - e < o;
          if (
            (r && (l = l || e < Math.ceil(o / 2)),
            i && r && "auto" !== s.params.slidesPerView && !n && (l = !1),
            l)
          ) {
            const i = r
              ? e < s.activeIndex
                ? "prev"
                : "next"
              : e - s.activeIndex - 1 < s.params.slidesPerView
              ? "next"
              : "prev";
            s.loopFix({
              direction: i,
              slideTo: !0,
              activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
              slideRealIndex: "next" === i ? s.realIndex : void 0,
            });
          }
          if (n) {
            const e = a * s.params.grid.rows;
            a = s.slides.find(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            ).column;
          } else a = s.getSlideIndexByData(a);
        }
      return (
        requestAnimationFrame(() => {
          s.slideTo(a, t, r, i);
        }),
        s
      );
    },
    slideNext: function (e, t, r) {
      void 0 === t && (t = !0);
      const i = this,
        { enabled: s, params: n, animating: a } = i;
      if (!s || i.destroyed) return i;
      void 0 === e && (e = i.params.speed);
      let o = n.slidesPerGroup;
      "auto" === n.slidesPerView &&
        1 === n.slidesPerGroup &&
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
              i.slideTo(i.activeIndex + l, e, t, r);
            }),
            !0
          );
      }
      return n.rewind && i.isEnd
        ? i.slideTo(0, e, t, r)
        : i.slideTo(i.activeIndex + l, e, t, r);
    },
    slidePrev: function (e, t, r) {
      void 0 === t && (t = !0);
      const i = this,
        {
          params: s,
          snapGrid: n,
          slidesGrid: a,
          rtlTranslate: o,
          enabled: l,
          animating: c,
        } = i;
      if (!l || i.destroyed) return i;
      void 0 === e && (e = i.params.speed);
      const d = i.virtual && s.virtual.enabled;
      if (s.loop) {
        if (c && !d && s.loopPreventsSliding) return !1;
        i.loopFix({ direction: "prev" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      function u(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = u(o ? i.translate : -i.translate),
        h = n.map((e) => u(e)),
        f = s.freeMode && s.freeMode.enabled;
      let m = n[h.indexOf(p) - 1];
      if (void 0 === m && (s.cssMode || f)) {
        let e;
        n.forEach((t, r) => {
          p >= t && (e = r);
        }),
          void 0 !== e && (m = f ? n[e] : n[e > 0 ? e - 1 : e]);
      }
      let g = 0;
      if (
        (void 0 !== m &&
          ((g = a.indexOf(m)),
          g < 0 && (g = i.activeIndex - 1),
          "auto" === s.slidesPerView &&
            1 === s.slidesPerGroup &&
            s.slidesPerGroupAuto &&
            ((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
            (g = Math.max(g, 0)))),
        s.rewind && i.isBeginning)
      ) {
        const s =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(s, e, t, r);
      }
      return s.loop && 0 === i.activeIndex && s.cssMode
        ? (requestAnimationFrame(() => {
            i.slideTo(g, e, t, r);
          }),
          !0)
        : i.slideTo(g, e, t, r);
    },
    slideReset: function (e, t, r) {
      void 0 === t && (t = !0);
      const i = this;
      if (!i.destroyed)
        return (
          void 0 === e && (e = i.params.speed),
          i.slideTo(i.activeIndex, e, t, r)
        );
    },
    slideToClosest: function (e, t, r, i) {
      void 0 === t && (t = !0), void 0 === i && (i = 0.5);
      const s = this;
      if (s.destroyed) return;
      void 0 === e && (e = s.params.speed);
      let n = s.activeIndex;
      const a = Math.min(s.params.slidesPerGroupSkip, n),
        o = a + Math.floor((n - a) / s.params.slidesPerGroup),
        l = s.rtlTranslate ? s.translate : -s.translate;
      if (l >= s.snapGrid[o]) {
        const e = s.snapGrid[o];
        l - e > (s.snapGrid[o + 1] - e) * i && (n += s.params.slidesPerGroup);
      } else {
        const e = s.snapGrid[o - 1];
        l - e <= (s.snapGrid[o] - e) * i && (n -= s.params.slidesPerGroup);
      }
      return (
        (n = Math.max(n, 0)),
        (n = Math.min(n, s.slidesGrid.length - 1)),
        s.slideTo(n, e, t, r)
      );
    },
    slideToClickedSlide: function () {
      const e = this;
      if (e.destroyed) return;
      const { params: t, slidesEl: r } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let s,
        n = e.clickedIndex;
      const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (s = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? n < e.loopedSlides - i / 2 ||
              n > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (n = e.getSlideIndex(
                  g(r, `${a}[data-swiper-slide-index="${s}"]`)[0]
                )),
                o(() => {
                  e.slideTo(n);
                }))
              : e.slideTo(n)
            : n > e.slides.length - i
            ? (e.loopFix(),
              (n = e.getSlideIndex(
                g(r, `${a}[data-swiper-slide-index="${s}"]`)[0]
              )),
              o(() => {
                e.slideTo(n);
              }))
            : e.slideTo(n);
      } else e.slideTo(n);
    },
  };
  var W = {
    loopCreate: function (e, t) {
      const r = this,
        { params: i, slidesEl: s } = r;
      if (!i.loop || (r.virtual && r.params.virtual.enabled)) return;
      const n = () => {
          g(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
            e.setAttribute("data-swiper-slide-index", t);
          });
        },
        a = r.grid && i.grid && i.grid.rows > 1,
        o = i.slidesPerGroup * (a ? i.grid.rows : 1),
        l = r.slides.length % o != 0,
        c = a && r.slides.length % i.grid.rows != 0,
        d = (e) => {
          for (let t = 0; t < e; t += 1) {
            const e = r.isElement
              ? y("swiper-slide", [i.slideBlankClass])
              : y("div", [i.slideClass, i.slideBlankClass]);
            r.slidesEl.append(e);
          }
        };
      if (l) {
        if (i.loopAddBlankSlides) {
          d(o - (r.slides.length % o)), r.recalcSlides(), r.updateSlides();
        } else
          v(
            "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
          );
        n();
      } else if (c) {
        if (i.loopAddBlankSlides) {
          d(i.grid.rows - (r.slides.length % i.grid.rows)),
            r.recalcSlides(),
            r.updateSlides();
        } else
          v(
            "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
          );
        n();
      } else n();
      r.loopFix({
        slideRealIndex: e,
        direction: i.centeredSlides ? void 0 : "next",
        initial: t,
      });
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: r = !0,
        direction: i,
        setTranslate: s,
        activeSlideIndex: n,
        initial: a,
        byController: o,
        byMousewheel: l,
      } = void 0 === e ? {} : e;
      const c = this;
      if (!c.params.loop) return;
      c.emit("beforeLoopFix");
      const {
          slides: d,
          allowSlidePrev: u,
          allowSlideNext: p,
          slidesEl: h,
          params: f,
        } = c,
        { centeredSlides: m, initialSlide: g } = f;
      if (
        ((c.allowSlidePrev = !0),
        (c.allowSlideNext = !0),
        c.virtual && f.virtual.enabled)
      )
        return (
          r &&
            (f.centeredSlides || 0 !== c.snapIndex
              ? f.centeredSlides && c.snapIndex < f.slidesPerView
                ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
                : c.snapIndex === c.snapGrid.length - 1 &&
                  c.slideTo(c.virtual.slidesBefore, 0, !1, !0)
              : c.slideTo(c.virtual.slides.length, 0, !1, !0)),
          (c.allowSlidePrev = u),
          (c.allowSlideNext = p),
          void c.emit("loopFix")
        );
      let y = f.slidesPerView;
      "auto" === y
        ? (y = c.slidesPerViewDynamic())
        : ((y = Math.ceil(parseFloat(f.slidesPerView, 10))),
          m && y % 2 == 0 && (y += 1));
      const w = f.slidesPerGroupAuto ? y : f.slidesPerGroup;
      let b = w;
      b % w != 0 && (b += w - (b % w)),
        (b += f.loopAdditionalSlides),
        (c.loopedSlides = b);
      const x = c.grid && f.grid && f.grid.rows > 1;
      d.length < y + b || ("cards" === c.params.effect && d.length < y + 2 * b)
        ? v(
            "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
          )
        : x &&
          "row" === f.grid.fill &&
          v(
            "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
          );
      const S = [],
        E = [],
        _ = x ? Math.ceil(d.length / f.grid.rows) : d.length,
        T = a && _ - g < y && !m;
      let M = T ? g : c.activeIndex;
      void 0 === n
        ? (n = c.getSlideIndex(
            d.find((e) => e.classList.contains(f.slideActiveClass))
          ))
        : (M = n);
      const C = "next" === i || !i,
        k = "prev" === i || !i;
      let P = 0,
        A = 0;
      const O = (x ? d[n].column : n) + (m && void 0 === s ? -y / 2 + 0.5 : 0);
      if (O < b) {
        P = Math.max(b - O, w);
        for (let e = 0; e < b - O; e += 1) {
          const t = e - Math.floor(e / _) * _;
          if (x) {
            const e = _ - t - 1;
            for (let t = d.length - 1; t >= 0; t -= 1)
              d[t].column === e && S.push(t);
          } else S.push(_ - t - 1);
        }
      } else if (O + y > _ - b) {
        (A = Math.max(O - (_ - 2 * b), w)),
          T && (A = Math.max(A, y - _ + g + 1));
        for (let e = 0; e < A; e += 1) {
          const t = e - Math.floor(e / _) * _;
          x
            ? d.forEach((e, r) => {
                e.column === t && E.push(r);
              })
            : E.push(t);
        }
      }
      if (
        ((c.__preventObserver__ = !0),
        requestAnimationFrame(() => {
          c.__preventObserver__ = !1;
        }),
        "cards" === c.params.effect &&
          d.length < y + 2 * b &&
          (E.includes(n) && E.splice(E.indexOf(n), 1),
          S.includes(n) && S.splice(S.indexOf(n), 1)),
        k &&
          S.forEach((e) => {
            (d[e].swiperLoopMoveDOM = !0),
              h.prepend(d[e]),
              (d[e].swiperLoopMoveDOM = !1);
          }),
        C &&
          E.forEach((e) => {
            (d[e].swiperLoopMoveDOM = !0),
              h.append(d[e]),
              (d[e].swiperLoopMoveDOM = !1);
          }),
        c.recalcSlides(),
        "auto" === f.slidesPerView
          ? c.updateSlides()
          : x &&
            ((S.length > 0 && k) || (E.length > 0 && C)) &&
            c.slides.forEach((e, t) => {
              c.grid.updateSlide(t, e, c.slides);
            }),
        f.watchSlidesProgress && c.updateSlidesOffset(),
        r)
      )
        if (S.length > 0 && k) {
          if (void 0 === t) {
            const e = c.slidesGrid[M],
              t = c.slidesGrid[M + P] - e;
            l
              ? c.setTranslate(c.translate - t)
              : (c.slideTo(M + Math.ceil(P), 0, !1, !0),
                s &&
                  ((c.touchEventsData.startTranslate =
                    c.touchEventsData.startTranslate - t),
                  (c.touchEventsData.currentTranslate =
                    c.touchEventsData.currentTranslate - t)));
          } else if (s) {
            const e = x ? S.length / f.grid.rows : S.length;
            c.slideTo(c.activeIndex + e, 0, !1, !0),
              (c.touchEventsData.currentTranslate = c.translate);
          }
        } else if (E.length > 0 && C)
          if (void 0 === t) {
            const e = c.slidesGrid[M],
              t = c.slidesGrid[M - A] - e;
            l
              ? c.setTranslate(c.translate - t)
              : (c.slideTo(M - A, 0, !1, !0),
                s &&
                  ((c.touchEventsData.startTranslate =
                    c.touchEventsData.startTranslate - t),
                  (c.touchEventsData.currentTranslate =
                    c.touchEventsData.currentTranslate - t)));
          } else {
            const e = x ? E.length / f.grid.rows : E.length;
            c.slideTo(c.activeIndex - e, 0, !1, !0);
          }
      if (
        ((c.allowSlidePrev = u),
        (c.allowSlideNext = p),
        c.controller && c.controller.control && !o)
      ) {
        const e = {
          slideRealIndex: t,
          direction: i,
          setTranslate: s,
          activeSlideIndex: n,
          byController: !0,
        };
        Array.isArray(c.controller.control)
          ? c.controller.control.forEach((t) => {
              !t.destroyed &&
                t.params.loop &&
                t.loopFix(
                  Ho(ea({}, e), {
                    slideTo: t.params.slidesPerView === f.slidesPerView && r,
                  })
                );
            })
          : c.controller.control instanceof c.constructor &&
            c.controller.control.params.loop &&
            c.controller.control.loopFix(
              Ho(ea({}, e), {
                slideTo:
                  c.controller.control.params.slidesPerView ===
                    f.slidesPerView && r,
              })
            );
      }
      c.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: r } = e;
      if (!t.loop || !r || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const i = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        i[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        i.forEach((e) => {
          r.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  var V = {
    setGrabCursor: function (e) {
      const t = this;
      if (
        !t.params.simulateTouch ||
        (t.params.watchOverflow && t.isLocked) ||
        t.params.cssMode
      )
        return;
      const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
      t.isElement && (t.__preventObserver__ = !0),
        (r.style.cursor = "move"),
        (r.style.cursor = e ? "grabbing" : "grab"),
        t.isElement &&
          requestAnimationFrame(() => {
            t.__preventObserver__ = !1;
          });
    },
    unsetGrabCursor: function () {
      const e = this;
      (e.params.watchOverflow && e.isLocked) ||
        e.params.cssMode ||
        (e.isElement && (e.__preventObserver__ = !0),
        (e[
          "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
        ].style.cursor = ""),
        e.isElement &&
          requestAnimationFrame(() => {
            e.__preventObserver__ = !1;
          }));
    },
  };
  function G(e, t, r) {
    const i = n(),
      { params: s } = e,
      a = s.edgeSwipeDetection,
      o = s.edgeSwipeThreshold;
    return (
      !a ||
      !(r <= o || r >= i.innerWidth - o) ||
      ("prevent" === a && (t.preventDefault(), !0))
    );
  }
  function j(e) {
    const t = this,
      r = i();
    let s = e;
    s.originalEvent && (s = s.originalEvent);
    const a = t.touchEventsData;
    if ("pointerdown" === s.type) {
      if (null !== a.pointerId && a.pointerId !== s.pointerId) return;
      a.pointerId = s.pointerId;
    } else "touchstart" === s.type && 1 === s.targetTouches.length && (a.touchId = s.targetTouches[0].identifier);
    if ("touchstart" === s.type) return void G(t, s, s.targetTouches[0].pageX);
    const { params: o, touches: c, enabled: d } = t;
    if (
      !d ||
      (!o.simulateTouch && "mouse" === s.pointerType) ||
      (t.animating && o.preventInteractionOnTransition)
    )
      return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let u = s.target;
    if (
      ("wrapper" === o.touchEventsTarget &&
        !(function (e, t) {
          const r = n();
          let i = t.contains(e);
          return (
            !i &&
              r.HTMLSlotElement &&
              t instanceof HTMLSlotElement &&
              ((i = [...t.assignedElements()].includes(e)),
              i ||
                (i = (function (e, t) {
                  const r = [t];
                  for (; r.length > 0; ) {
                    const t = r.shift();
                    if (e === t) return !0;
                    r.push(
                      ...t.children,
                      ...(t.shadowRoot ? t.shadowRoot.children : []),
                      ...(t.assignedElements ? t.assignedElements() : [])
                    );
                  }
                })(e, t))),
            i
          );
        })(u, t.wrapperEl)) ||
      ("which" in s && 3 === s.which) ||
      ("button" in s && s.button > 0) ||
      (a.isTouched && a.isMoved)
    )
      return;
    const p = !!o.noSwipingClass && "" !== o.noSwipingClass,
      h = s.composedPath ? s.composedPath() : s.path;
    p && s.target && s.target.shadowRoot && h && (u = h[0]);
    const f = o.noSwipingSelector
        ? o.noSwipingSelector
        : `.${o.noSwipingClass}`,
      m = !(!s.target || !s.target.shadowRoot);
    if (
      o.noSwiping &&
      (m
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(r) {
                if (!r || r === i() || r === n()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const s = r.closest(e);
                return s || r.getRootNode ? s || t(r.getRootNode().host) : null;
              })(t)
            );
          })(f, u)
        : u.closest(f))
    )
      return void (t.allowClick = !0);
    if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
    (c.currentX = s.pageX), (c.currentY = s.pageY);
    const g = c.currentX,
      v = c.currentY;
    if (!G(t, s, g)) return;
    Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (c.startX = g),
      (c.startY = v),
      (a.touchStartTime = l()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      o.threshold > 0 && (a.allowThresholdMove = !1);
    let y = !0;
    u.matches(a.focusableElements) &&
      ((y = !1), "SELECT" === u.nodeName && (a.isTouched = !1)),
      r.activeElement &&
        r.activeElement.matches(a.focusableElements) &&
        r.activeElement !== u &&
        ("mouse" === s.pointerType ||
          ("mouse" !== s.pointerType && !u.matches(a.focusableElements))) &&
        r.activeElement.blur();
    const w = y && t.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || w) &&
      !u.isContentEditable &&
      s.preventDefault(),
      o.freeMode &&
        o.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !o.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", s);
  }
  function U(e) {
    const t = i(),
      r = this,
      s = r.touchEventsData,
      { params: n, touches: a, rtlTranslate: o, enabled: c } = r;
    if (!c || (!n.simulateTouch && "mouse" === e.pointerType)) return;
    let d,
      u = e;
    if (
      (u.originalEvent && (u = u.originalEvent),
      "pointermove" === u.type &&
        (null !== s.touchId || u.pointerId !== s.pointerId))
    )
      return;
    if ("touchmove" === u.type) {
      if (
        ((d = [...u.changedTouches].find((e) => e.identifier === s.touchId)),
        !d || d.identifier !== s.touchId)
      )
        return;
    } else d = u;
    if (!s.isTouched)
      return void (
        s.startMoving &&
        s.isScrolling &&
        r.emit("touchMoveOpposite", u)
      );
    const p = d.pageX,
      h = d.pageY;
    if (u.preventedByNestedSwiper) return (a.startX = p), void (a.startY = h);
    if (!r.allowTouchMove)
      return (
        u.target.matches(s.focusableElements) || (r.allowClick = !1),
        void (
          s.isTouched &&
          (Object.assign(a, { startX: p, startY: h, currentX: p, currentY: h }),
          (s.touchStartTime = l()))
        )
      );
    if (n.touchReleaseOnEdges && !n.loop)
      if (r.isVertical()) {
        if (
          (h < a.startY && r.translate <= r.maxTranslate()) ||
          (h > a.startY && r.translate >= r.minTranslate())
        )
          return (s.isTouched = !1), void (s.isMoved = !1);
      } else {
        if (
          o &&
          ((p > a.startX && -r.translate <= r.maxTranslate()) ||
            (p < a.startX && -r.translate >= r.minTranslate()))
        )
          return;
        if (
          !o &&
          ((p < a.startX && r.translate <= r.maxTranslate()) ||
            (p > a.startX && r.translate >= r.minTranslate()))
        )
          return;
      }
    if (
      (t.activeElement &&
        t.activeElement.matches(s.focusableElements) &&
        t.activeElement !== u.target &&
        "mouse" !== u.pointerType &&
        t.activeElement.blur(),
      t.activeElement &&
        u.target === t.activeElement &&
        u.target.matches(s.focusableElements))
    )
      return (s.isMoved = !0), void (r.allowClick = !1);
    s.allowTouchCallbacks && r.emit("touchMove", u),
      (a.previousX = a.currentX),
      (a.previousY = a.currentY),
      (a.currentX = p),
      (a.currentY = h);
    const f = a.currentX - a.startX,
      m = a.currentY - a.startY;
    if (
      r.params.threshold &&
      Math.sqrt(ht(f, 2) + ht(m, 2)) < r.params.threshold
    )
      return;
    if (void 0 === s.isScrolling) {
      let e;
      (r.isHorizontal() && a.currentY === a.startY) ||
      (r.isVertical() && a.currentX === a.startX)
        ? (s.isScrolling = !1)
        : f * f + m * m >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI),
          (s.isScrolling = r.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (s.isScrolling && r.emit("touchMoveOpposite", u),
      void 0 === s.startMoving &&
        (a.currentX !== a.startX || a.currentY !== a.startY) &&
        (s.startMoving = !0),
      s.isScrolling ||
        ("touchmove" === u.type && s.preventTouchMoveFromPointerMove))
    )
      return void (s.isTouched = !1);
    if (!s.startMoving) return;
    (r.allowClick = !1),
      !n.cssMode && u.cancelable && u.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && u.stopPropagation();
    let g = r.isHorizontal() ? f : m,
      v = r.isHorizontal()
        ? a.currentX - a.previousX
        : a.currentY - a.previousY;
    n.oneWayMovement &&
      ((g = Math.abs(g) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
      (a.diff = g),
      (g *= n.touchRatio),
      o && ((g = -g), (v = -v));
    const y = r.touchesDirection;
    (r.swipeDirection = g > 0 ? "prev" : "next"),
      (r.touchesDirection = v > 0 ? "prev" : "next");
    const w = r.params.loop && !n.cssMode,
      b =
        ("next" === r.touchesDirection && r.allowSlideNext) ||
        ("prev" === r.touchesDirection && r.allowSlidePrev);
    if (!s.isMoved) {
      if (
        (w && b && r.loopFix({ direction: r.swipeDirection }),
        (s.startTranslate = r.getTranslate()),
        r.setTransition(0),
        r.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        r.wrapperEl.dispatchEvent(e);
      }
      (s.allowMomentumBounce = !1),
        n.grabCursor &&
          (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) &&
          r.setGrabCursor(!0),
        r.emit("sliderFirstMove", u);
    }
    if (
      (new Date().getTime(),
      !1 !== n._loopSwapReset &&
        s.isMoved &&
        s.allowThresholdMove &&
        y !== r.touchesDirection &&
        w &&
        b &&
        Math.abs(g) >= 1)
    )
      return (
        Object.assign(a, {
          startX: p,
          startY: h,
          currentX: p,
          currentY: h,
          startTranslate: s.currentTranslate,
        }),
        (s.loopSwapReset = !0),
        void (s.startTranslate = s.currentTranslate)
      );
    r.emit("sliderMove", u),
      (s.isMoved = !0),
      (s.currentTranslate = g + s.startTranslate);
    let x = !0,
      S = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (S = 0),
      g > 0
        ? (w &&
            b &&
            s.allowThresholdMove &&
            s.currentTranslate >
              (n.centeredSlides
                ? r.minTranslate() -
                  r.slidesSizesGrid[r.activeIndex + 1] -
                  ("auto" !== n.slidesPerView &&
                  r.slides.length - n.slidesPerView >= 2
                    ? r.slidesSizesGrid[r.activeIndex + 1] +
                      r.params.spaceBetween
                    : 0) -
                  r.params.spaceBetween
                : r.minTranslate()) &&
            r.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          s.currentTranslate > r.minTranslate() &&
            ((x = !1),
            n.resistance &&
              (s.currentTranslate =
                r.minTranslate() -
                1 +
                ht(-r.minTranslate() + s.startTranslate + g, S))))
        : g < 0 &&
          (w &&
            b &&
            s.allowThresholdMove &&
            s.currentTranslate <
              (n.centeredSlides
                ? r.maxTranslate() +
                  r.slidesSizesGrid[r.slidesSizesGrid.length - 1] +
                  r.params.spaceBetween +
                  ("auto" !== n.slidesPerView &&
                  r.slides.length - n.slidesPerView >= 2
                    ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] +
                      r.params.spaceBetween
                    : 0)
                : r.maxTranslate()) &&
            r.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                r.slides.length -
                ("auto" === n.slidesPerView
                  ? r.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(n.slidesPerView, 10))),
            }),
          s.currentTranslate < r.maxTranslate() &&
            ((x = !1),
            n.resistance &&
              (s.currentTranslate =
                r.maxTranslate() +
                1 -
                ht(r.maxTranslate() - s.startTranslate - g, S)))),
      x && (u.preventedByNestedSwiper = !0),
      !r.allowSlideNext &&
        "next" === r.swipeDirection &&
        s.currentTranslate < s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !r.allowSlidePrev &&
        "prev" === r.swipeDirection &&
        s.currentTranslate > s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !r.allowSlidePrev &&
        !r.allowSlideNext &&
        (s.currentTranslate = s.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(g) > n.threshold || s.allowThresholdMove))
        return void (s.currentTranslate = s.startTranslate);
      if (!s.allowThresholdMove)
        return (
          (s.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (s.currentTranslate = s.startTranslate),
          void (a.diff = r.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        );
    }
    !n.followFinger ||
      n.cssMode ||
      (((n.freeMode && n.freeMode.enabled && r.freeMode) ||
        n.watchSlidesProgress) &&
        (r.updateActiveIndex(), r.updateSlidesClasses()),
      n.freeMode &&
        n.freeMode.enabled &&
        r.freeMode &&
        r.freeMode.onTouchMove(),
      r.updateProgress(s.currentTranslate),
      r.setTranslate(s.currentTranslate));
  }
  function K(e) {
    const t = this,
      r = t.touchEventsData;
    let i,
      s = e;
    if (
      (s.originalEvent && (s = s.originalEvent),
      "touchend" === s.type || "touchcancel" === s.type)
    ) {
      if (
        ((i = [...s.changedTouches].find((e) => e.identifier === r.touchId)),
        !i || i.identifier !== r.touchId)
      )
        return;
    } else {
      if (null !== r.touchId || s.pointerId !== r.pointerId) return;
      i = s;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        s.type
      ) &&
      (!["pointercancel", "contextmenu"].includes(s.type) ||
        (!t.browser.isSafari && !t.browser.isWebView))
    )
      return;
    (r.pointerId = null), (r.touchId = null);
    const {
      params: n,
      touches: a,
      rtlTranslate: c,
      slidesGrid: d,
      enabled: u,
    } = t;
    if (!u || (!n.simulateTouch && "mouse" === s.pointerType)) return;
    if (
      (r.allowTouchCallbacks && t.emit("touchEnd", s),
      (r.allowTouchCallbacks = !1),
      !r.isTouched)
    )
      return (
        r.isMoved && n.grabCursor && t.setGrabCursor(!1),
        (r.isMoved = !1),
        void (r.startMoving = !1)
      );
    n.grabCursor &&
      r.isMoved &&
      r.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const p = l(),
      h = p - r.touchStartTime;
    if (t.allowClick) {
      const e = s.path || (s.composedPath && s.composedPath());
      t.updateClickedSlide((e && e[0]) || s.target, e),
        t.emit("tap click", s),
        h < 300 &&
          p - r.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", s);
    }
    if (
      ((r.lastClickTime = l()),
      o(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !r.isTouched ||
        !r.isMoved ||
        !t.swipeDirection ||
        (0 === a.diff && !r.loopSwapReset) ||
        (r.currentTranslate === r.startTranslate && !r.loopSwapReset))
    )
      return (r.isTouched = !1), (r.isMoved = !1), void (r.startMoving = !1);
    let f;
    if (
      ((r.isTouched = !1),
      (r.isMoved = !1),
      (r.startMoving = !1),
      (f = n.followFinger
        ? c
          ? t.translate
          : -t.translate
        : -r.currentTranslate),
      n.cssMode)
    )
      return;
    if (n.freeMode && n.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: f });
    const m = f >= -t.maxTranslate() && !t.params.loop;
    let g = 0,
      v = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < d.length;
      e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
    ) {
      const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      void 0 !== d[e + t]
        ? (m || (f >= d[e] && f < d[e + t])) && ((g = e), (v = d[e + t] - d[e]))
        : (m || f >= d[e]) &&
          ((g = e), (v = d[d.length - 1] - d[d.length - 2]));
    }
    let y = null,
      w = null;
    n.rewind &&
      (t.isBeginning
        ? (w =
            n.virtual && n.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (y = 0));
    const b = (f - d[g]) / v,
      x = g < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (h > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (b >= n.longSwipesRatio
          ? t.slideTo(n.rewind && t.isEnd ? y : g + x)
          : t.slideTo(g)),
        "prev" === t.swipeDirection &&
          (b > 1 - n.longSwipesRatio
            ? t.slideTo(g + x)
            : null !== w && b < 0 && Math.abs(b) > n.longSwipesRatio
            ? t.slideTo(w)
            : t.slideTo(g));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      !t.navigation ||
      (s.target !== t.navigation.nextEl && s.target !== t.navigation.prevEl)
        ? ("next" === t.swipeDirection && t.slideTo(null !== y ? y : g + x),
          "prev" === t.swipeDirection && t.slideTo(null !== w ? w : g))
        : s.target === t.navigation.nextEl
        ? t.slideTo(g + x)
        : t.slideTo(g);
    }
  }
  function Z() {
    const e = this,
      { params: t, el: r } = e;
    if (r && 0 === r.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: s, snapGrid: n } = e,
      a = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const o = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    o
      ? e.params.loop && !a
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = s),
      (e.allowSlideNext = i),
      e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
  }
  function Q(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function J() {
    const e = this,
      { wrapperEl: t, rtlTranslate: r, enabled: i } = e;
    if (!i) return;
    let s;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const n = e.maxTranslate() - e.minTranslate();
    (s = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
      s !== e.progress && e.updateProgress(r ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function ee(e) {
    const t = this;
    q(t, e.target),
      !t.params.cssMode &&
        ("auto" === t.params.slidesPerView || t.params.autoHeight) &&
        t.update();
  }
  function te() {
    const e = this;
    e.documentTouchHandlerProceeded ||
      ((e.documentTouchHandlerProceeded = !0),
      e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  const re = (e, t) => {
    const r = i(),
      { params: s, el: n, wrapperEl: a, device: o } = e,
      l = !!s.nested,
      c = "on" === t ? "addEventListener" : "removeEventListener",
      d = t;
    !n ||
      "string" == typeof n ||
      (r[c]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
      n[c]("touchstart", e.onTouchStart, { passive: !1 }),
      n[c]("pointerdown", e.onTouchStart, { passive: !1 }),
      r[c]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
      r[c]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
      r[c]("touchend", e.onTouchEnd, { passive: !0 }),
      r[c]("pointerup", e.onTouchEnd, { passive: !0 }),
      r[c]("pointercancel", e.onTouchEnd, { passive: !0 }),
      r[c]("touchcancel", e.onTouchEnd, { passive: !0 }),
      r[c]("pointerout", e.onTouchEnd, { passive: !0 }),
      r[c]("pointerleave", e.onTouchEnd, { passive: !0 }),
      r[c]("contextmenu", e.onTouchEnd, { passive: !0 }),
      (s.preventClicks || s.preventClicksPropagation) &&
        n[c]("click", e.onClick, !0),
      s.cssMode && a[c]("scroll", e.onScroll),
      s.updateOnWindowResize
        ? e[d](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Z,
            !0
          )
        : e[d]("observerUpdate", Z, !0),
      n[c]("load", e.onLoad, { capture: !0 }));
  };
  var ie = {
    attachEvents: function () {
      const e = this,
        { params: t } = e;
      (e.onTouchStart = j.bind(e)),
        (e.onTouchMove = U.bind(e)),
        (e.onTouchEnd = K.bind(e)),
        (e.onDocumentTouchStart = te.bind(e)),
        t.cssMode && (e.onScroll = J.bind(e)),
        (e.onClick = Q.bind(e)),
        (e.onLoad = ee.bind(e)),
        re(e, "on");
    },
    detachEvents: function () {
      re(this, "off");
    },
  };
  const se = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var ne = {
    setBreakpoint: function () {
      const e = this,
        { realIndex: t, initialized: r, params: s, el: n } = e,
        a = s.breakpoints;
      if (!a || (a && 0 === Object.keys(a).length)) return;
      const o = i(),
        l =
          "window" !== s.breakpointsBase && s.breakpointsBase
            ? "container"
            : s.breakpointsBase,
        c =
          ["window", "container"].includes(s.breakpointsBase) ||
          !s.breakpointsBase
            ? e.el
            : o.querySelector(s.breakpointsBase),
        d = e.getBreakpoint(a, l, c);
      if (!d || e.currentBreakpoint === d) return;
      const u = (d in a ? a[d] : void 0) || e.originalParams,
        h = se(e, s),
        f = se(e, u),
        m = e.params.grabCursor,
        g = u.grabCursor,
        v = s.enabled;
      h && !f
        ? (n.classList.remove(
            `${s.containerModifierClass}grid`,
            `${s.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !h &&
          f &&
          (n.classList.add(`${s.containerModifierClass}grid`),
          ((u.grid.fill && "column" === u.grid.fill) ||
            (!u.grid.fill && "column" === s.grid.fill)) &&
            n.classList.add(`${s.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        m && !g ? e.unsetGrabCursor() : !m && g && e.setGrabCursor(),
        ["navigation", "pagination", "scrollbar"].forEach((t) => {
          if (void 0 === u[t]) return;
          const r = s[t] && s[t].enabled,
            i = u[t] && u[t].enabled;
          r && !i && e[t].disable(), !r && i && e[t].enable();
        });
      const y = u.direction && u.direction !== s.direction,
        w = s.loop && (u.slidesPerView !== s.slidesPerView || y),
        b = s.loop;
      y && r && e.changeDirection(), p(e.params, u);
      const x = e.params.enabled,
        S = e.params.loop;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        v && !x ? e.disable() : !v && x && e.enable(),
        (e.currentBreakpoint = d),
        e.emit("_beforeBreakpoint", u),
        r &&
          (w
            ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
            : !b && S
            ? (e.loopCreate(t), e.updateSlides())
            : b && !S && e.loopDestroy()),
        e.emit("breakpoint", u);
    },
    getBreakpoint: function (e, t, r) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !r)))
        return;
      let i = !1;
      const s = n(),
        a = "window" === t ? s.innerHeight : r.clientHeight,
        o = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: a * t, point: e };
          }
          return { value: e, point: e };
        });
      o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < o.length; e += 1) {
        const { point: n, value: a } = o[e];
        "window" === t
          ? s.matchMedia(`(min-width: ${a}px)`).matches && (i = n)
          : a <= r.clientWidth && (i = n);
      }
      return i || "max";
    },
  };
  var ae = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: r, rtl: i, el: s, device: n } = e,
        a = (function (e, t) {
          const r = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && r.push(t + i);
                  })
                : "string" == typeof e && r.push(t + e);
            }),
            r
          );
        })(
          [
            "initialized",
            r.direction,
            { "free-mode": e.params.freeMode && r.freeMode.enabled },
            { autoheight: r.autoHeight },
            { rtl: i },
            { grid: r.grid && r.grid.rows > 1 },
            {
              "grid-column":
                r.grid && r.grid.rows > 1 && "column" === r.grid.fill,
            },
            { android: n.android },
            { ios: n.ios },
            { "css-mode": r.cssMode },
            { centered: r.cssMode && r.centeredSlides },
            { "watch-progress": r.watchSlidesProgress },
          ],
          r.containerModifierClass
        );
      t.push(...a), s.classList.add(...t), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { el: e, classNames: t } = this;
      !e ||
        "string" == typeof e ||
        (e.classList.remove(...t), this.emitContainerClasses());
    },
  };
  var oe = {
      checkOverflow: function () {
        const e = this,
          { isLocked: t, params: r } = e,
          { slidesOffsetBefore: i } = r;
        if (i) {
          const t = e.slides.length - 1,
            r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
          e.isLocked = e.size > r;
        } else e.isLocked = 1 === e.snapGrid.length;
        !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked),
          !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
          t && t !== e.isLocked && (e.isEnd = !1),
          t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      },
    },
    le = {
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
  function ce(e, t) {
    return function (r) {
      void 0 === r && (r = {});
      const i = Object.keys(r)[0],
        s = r[i];
      "object" == typeof s && null !== s
        ? (!0 === e[i] && (e[i] = { enabled: !0 }),
          "navigation" === i &&
            e[i] &&
            e[i].enabled &&
            !e[i].prevEl &&
            !e[i].nextEl &&
            (e[i].auto = !0),
          ["pagination", "scrollbar"].indexOf(i) >= 0 &&
            e[i] &&
            e[i].enabled &&
            !e[i].el &&
            (e[i].auto = !0),
          i in e && "enabled" in s
            ? ("object" == typeof e[i] &&
                !("enabled" in e[i]) &&
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              p(t, r))
            : p(t, r))
        : p(t, r);
    };
  }
  const de = {
      eventsEmitter: z,
      update: N,
      translate: B,
      transition: Y,
      slide: H,
      loop: W,
      grabCursor: V,
      events: ie,
      breakpoints: ne,
      checkOverflow: oe,
      classes: ae,
    },
    ue = {};
  class pe {
    constructor() {
      let e, t;
      for (var r = arguments.length, s = new Array(r), n = 0; n < r; n++)
        s[n] = arguments[n];
      1 === s.length &&
      s[0].constructor &&
      "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
        ? (t = s[0])
        : ([e, t] = s),
        t || (t = {}),
        (t = p({}, t)),
        e && !t.el && (t.el = e);
      const a = i();
      if (
        t.el &&
        "string" == typeof t.el &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const e = [];
        return (
          a.querySelectorAll(t.el).forEach((r) => {
            const i = p({}, t, { el: r });
            e.push(new pe(i));
          }),
          e
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = A()),
        (o.device = O({ userAgent: t.userAgent })),
        (o.browser = L()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const l = {};
      o.modules.forEach((e) => {
        e({
          params: t,
          swiper: o,
          extendParams: ce(t, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const c = p({}, le, l);
      return (
        (o.params = p({}, c, ue, t)),
        (o.originalParams = p({}, o.params)),
        (o.passedParams = p({}, t)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((e) => {
            o.on(e, o.params.on[e]);
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
          isHorizontal: () => "horizontal" === o.params.direction,
          isVertical: () => "vertical" === o.params.direction,
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
      const { slidesEl: t, params: r } = this,
        i = x(g(t, `.${r.slideClass}, swiper-slide`)[0]);
      return x(e) - i;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.find(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = g(e, `.${t.slideClass}, swiper-slide`);
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
      const r = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = r.minTranslate(),
        s = (r.maxTranslate() - i) * e + i;
      r.translateTo(s, void 0 === t ? 0 : t),
        r.updateActiveIndex(),
        r.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
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
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((r) => {
        const i = e.getSlideClasses(r);
        t.push({ slideEl: r, classNames: i }), e.emit("_slideClass", r, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: r,
        slides: i,
        slidesGrid: s,
        slidesSizesGrid: n,
        size: a,
        activeIndex: o,
      } = this;
      let l = 1;
      if ("number" == typeof r.slidesPerView) return r.slidesPerView;
      if (r.centeredSlides) {
        let e,
          t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
        for (let r = o + 1; r < i.length; r += 1)
          i[r] &&
            !e &&
            ((t += Math.ceil(i[r].swiperSlideSize)),
            (l += 1),
            t > a && (e = !0));
        for (let r = o - 1; r >= 0; r -= 1)
          i[r] &&
            !e &&
            ((t += i[r].swiperSlideSize), (l += 1), t > a && (e = !0));
      } else if ("current" === e)
        for (let e = o + 1; e < i.length; e += 1)
          (t ? s[e] + n[e] - s[o] < a : s[e] - s[o] < a) && (l += 1);
      else for (let e = o - 1; e >= 0; e -= 1) s[o] - s[e] < a && (l += 1);
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: r } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      if (
        (r.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && q(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        r.freeMode && r.freeMode.enabled && !r.cssMode)
      )
        i(), r.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === r.slidesPerView || r.slidesPerView > 1) &&
          e.isEnd &&
          !r.centeredSlides
        ) {
          const t =
            e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
          s = e.slideTo(t.length - 1, 0, !1, !0);
        } else s = e.slideTo(e.activeIndex, 0, !1, !0);
        s || i();
      }
      r.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const r = this,
        i = r.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
          r.el.classList.add(`${r.params.containerModifierClass}${e}`),
          r.emitContainerClasses(),
          (r.params.direction = e),
          r.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          r.emit("changeDirection"),
          t && r.update()),
        r
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
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
      let r = e || t.params.el;
      if (("string" == typeof r && (r = document.querySelector(r)), !r))
        return !1;
      (r.swiper = t),
        r.parentNode &&
          r.parentNode.host &&
          r.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let s =
        r && r.shadowRoot && r.shadowRoot.querySelector
          ? r.shadowRoot.querySelector(i())
          : g(r, i())[0];
      return (
        !s &&
          t.params.createElements &&
          ((s = y("div", t.params.wrapperClass)),
          r.append(s),
          g(r, `.${t.params.slideClass}`).forEach((e) => {
            s.append(e);
          })),
        Object.assign(t, {
          el: r,
          wrapperEl: s,
          slidesEl:
            t.isElement && !r.parentNode.host.slideSlots
              ? r.parentNode.host
              : s,
          hostEl: t.isElement ? r.parentNode.host : r,
          mounted: !0,
          rtl: "rtl" === r.dir.toLowerCase() || "rtl" === b(r, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === r.dir.toLowerCase() || "rtl" === b(r, "direction")),
          wrongRTL: "-webkit-box" === b(s, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized || !1 === t.mount(e)) return t;
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
        r.forEach((e) => {
          e.complete
            ? q(t, e)
            : e.addEventListener("load", (e) => {
                q(t, e.target);
              });
        }),
        R(t),
        (t.initialized = !0),
        R(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const r = this,
        { params: i, el: s, wrapperEl: n, slides: a } = r;
      return (
        void 0 === r.params ||
          r.destroyed ||
          (r.emit("beforeDestroy"),
          (r.initialized = !1),
          r.detachEvents(),
          i.loop && r.loopDestroy(),
          t &&
            (r.removeClasses(),
            s && "string" != typeof s && s.removeAttribute("style"),
            n && n.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((e) => {
                e.classList.remove(
                  i.slideVisibleClass,
                  i.slideFullyVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          r.emit("destroy"),
          Object.keys(r.eventsListeners).forEach((e) => {
            r.off(e);
          }),
          !1 !== e &&
            (r.el && "string" != typeof r.el && (r.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(r)),
          (r.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      p(ue, e);
    }
    static get extendedDefaults() {
      return ue;
    }
    static get defaults() {
      return le;
    }
    static installModule(e) {
      pe.prototype.__modules__ || (pe.prototype.__modules__ = []);
      const t = pe.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => pe.installModule(e)), pe)
        : (pe.installModule(e), pe);
    }
  }
  function he(e, t, r, i) {
    return (
      e.params.createElements &&
        Object.keys(i).forEach((s) => {
          if (!r[s] && !0 === r.auto) {
            let n = g(e.el, `.${i[s]}`)[0];
            n || ((n = y("div", i[s])), (n.className = i[s]), e.el.append(n)),
              (r[s] = n),
              (t[s] = n);
          }
        }),
      r
    );
  }
  function fe(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function me(e) {
    const t = this,
      { params: r, slidesEl: i } = t;
    r.loop && t.loopDestroy();
    const s = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), i.append(t.children[0]), (t.innerHTML = "");
      } else i.append(e);
    };
    if ("object" == typeof e && "length" in e)
      for (let t = 0; t < e.length; t += 1) e[t] && s(e[t]);
    else s(e);
    t.recalcSlides(),
      r.loop && t.loopCreate(),
      (!r.observer || t.isElement) && t.update();
  }
  function ge(e) {
    const t = this,
      { params: r, activeIndex: i, slidesEl: s } = t;
    r.loop && t.loopDestroy();
    let n = i + 1;
    const a = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), s.prepend(t.children[0]), (t.innerHTML = "");
      } else s.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
      n = i + e.length;
    } else a(e);
    t.recalcSlides(),
      r.loop && t.loopCreate(),
      (!r.observer || t.isElement) && t.update(),
      t.slideTo(n, 0, !1);
  }
  function ve(e, t) {
    const r = this,
      { params: i, activeIndex: s, slidesEl: n } = r;
    let a = s;
    i.loop && ((a -= r.loopedSlides), r.loopDestroy(), r.recalcSlides());
    const o = r.slides.length;
    if (e <= 0) return void r.prependSlide(t);
    if (e >= o) return void r.appendSlide(t);
    let l = a > e ? a + 1 : a;
    const c = [];
    for (let t = o - 1; t >= e; t -= 1) {
      const e = r.slides[t];
      e.remove(), c.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
      l = a > e ? a + t.length : a;
    } else n.append(t);
    for (let e = 0; e < c.length; e += 1) n.append(c[e]);
    r.recalcSlides(),
      i.loop && r.loopCreate(),
      (!i.observer || r.isElement) && r.update(),
      i.loop ? r.slideTo(l + r.loopedSlides, 0, !1) : r.slideTo(l, 0, !1);
  }
  function ye(e) {
    const t = this,
      { params: r, activeIndex: i } = t;
    let s = i;
    r.loop && ((s -= t.loopedSlides), t.loopDestroy());
    let n,
      a = s;
    if ("object" == typeof e && "length" in e) {
      for (let r = 0; r < e.length; r += 1)
        (n = e[r]), t.slides[n] && t.slides[n].remove(), n < a && (a -= 1);
      a = Math.max(a, 0);
    } else (n = e), t.slides[n] && t.slides[n].remove(), n < a && (a -= 1), (a = Math.max(a, 0));
    t.recalcSlides(),
      r.loop && t.loopCreate(),
      (!r.observer || t.isElement) && t.update(),
      r.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1);
  }
  function we() {
    const e = this,
      t = [];
    for (let r = 0; r < e.slides.length; r += 1) t.push(r);
    e.removeSlide(t);
  }
  function be(e) {
    const {
      effect: t,
      swiper: r,
      on: i,
      setTranslate: s,
      setTransition: n,
      overwriteParams: a,
      perspective: o,
      recreateShadows: l,
      getEffectParams: c,
    } = e;
    let d;
    i("beforeInit", () => {
      if (r.params.effect !== t) return;
      r.classNames.push(`${r.params.containerModifierClass}${t}`),
        o && o() && r.classNames.push(`${r.params.containerModifierClass}3d`);
      const e = a ? a() : {};
      Object.assign(r.params, e), Object.assign(r.originalParams, e);
    }),
      i("setTranslate", () => {
        r.params.effect === t && s();
      }),
      i("setTransition", (e, i) => {
        r.params.effect === t && n(i);
      }),
      i("transitionEnd", () => {
        if (r.params.effect === t && l) {
          if (!c || !c().slideShadows) return;
          r.slides.forEach((e) => {
            e.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((e) => e.remove());
          }),
            l();
        }
      }),
      i("virtualUpdate", () => {
        r.params.effect === t &&
          (r.slides.length || (d = !0),
          requestAnimationFrame(() => {
            d && r.slides && r.slides.length && (s(), (d = !1));
          }));
      });
  }
  function xe(e, t) {
    const r = m(t);
    return (
      r !== t &&
        ((r.style.backfaceVisibility = "hidden"),
        (r.style["-webkit-backface-visibility"] = "hidden")),
      r
    );
  }
  function Se(e) {
    let { swiper: t, duration: r, transformElements: i, allSlides: s } = e;
    const { activeIndex: n } = t;
    if (t.params.virtualTranslate && 0 !== r) {
      let e,
        r = !1;
      (e = s
        ? i
        : i.filter((e) => {
            const r = e.classList.contains("swiper-slide-transform")
              ? ((e) =>
                  e.parentElement
                    ? e.parentElement
                    : t.slides.find(
                        (t) => t.shadowRoot && t.shadowRoot === e.parentNode
                      ))(e)
              : e;
            return t.getSlideIndex(r) === n;
          })),
        e.forEach((e) => {
          E(e, () => {
            if (r || !t || t.destroyed) return;
            (r = !0), (t.animating = !1);
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            t.wrapperEl.dispatchEvent(e);
          });
        });
    }
  }
  function Ee(e, t, r) {
    const i = `swiper-slide-shadow${r ? `-${r}` : ""}${
        e ? ` swiper-slide-shadow-${e}` : ""
      }`,
      s = m(t);
    let n = s.querySelector(`.${i.split(" ").join(".")}`);
    return n || ((n = y("div", i.split(" "))), s.append(n)), n;
  }
  Object.keys(de).forEach((e) => {
    Object.keys(de[e]).forEach((t) => {
      pe.prototype[t] = de[e][t];
    });
  }),
    pe.use([
      function (e) {
        let { swiper: t, on: r, emit: i } = e;
        const s = n();
        let a = null,
          o = null;
        const l = () => {
            !t ||
              t.destroyed ||
              !t.initialized ||
              (i("beforeResize"), i("resize"));
          },
          c = () => {
            !t || t.destroyed || !t.initialized || i("orientationchange");
          };
        r("init", () => {
          t.params.resizeObserver && void 0 !== s.ResizeObserver
            ? !t ||
              t.destroyed ||
              !t.initialized ||
              ((a = new ResizeObserver((e) => {
                o = s.requestAnimationFrame(() => {
                  const { width: r, height: i } = t;
                  let s = r,
                    n = i;
                  e.forEach((e) => {
                    let { contentBoxSize: r, contentRect: i, target: a } = e;
                    (a && a !== t.el) ||
                      ((s = i ? i.width : (r[0] || r).inlineSize),
                      (n = i ? i.height : (r[0] || r).blockSize));
                  }),
                    (s !== r || n !== i) && l();
                });
              })),
              a.observe(t.el))
            : (s.addEventListener("resize", l),
              s.addEventListener("orientationchange", c));
        }),
          r("destroy", () => {
            o && s.cancelAnimationFrame(o),
              a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
              s.removeEventListener("resize", l),
              s.removeEventListener("orientationchange", c);
          });
      },
      function (e) {
        let { swiper: t, extendParams: r, on: i, emit: s } = e;
        const a = [],
          o = n(),
          l = function (e, r) {
            void 0 === r && (r = {});
            const i = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void s("observerUpdate", e[0]);
                const r = function () {
                  s("observerUpdate", e[0]);
                };
                o.requestAnimationFrame
                  ? o.requestAnimationFrame(r)
                  : o.setTimeout(r, 0);
              }
            );
            i.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: t.isElement || (void 0 === r.childList || r).childList,
              characterData: void 0 === r.characterData || r.characterData,
            }),
              a.push(i);
          };
        r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = S(t.hostEl);
                for (let t = 0; t < e.length; t += 1) l(e[t]);
              }
              l(t.hostEl, { childList: t.params.observeSlideChildren }),
                l(t.wrapperEl, { attributes: !1 });
            }
          }),
          i("destroy", () => {
            a.forEach((e) => {
              e.disconnect();
            }),
              a.splice(0, a.length);
          });
      },
    ]);
  const _e = [
    function (e) {
      let t,
        { swiper: r, extendParams: s, on: n, emit: a } = e;
      s({
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
      const o = i();
      r.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: [],
      };
      const l = o.createElement("div");
      function c(e, t) {
        const i = r.params.virtual;
        if (i.cache && r.virtual.cache[t]) return r.virtual.cache[t];
        let s;
        return (
          i.renderSlide
            ? ((s = i.renderSlide.call(r, e, t)),
              "string" == typeof s && ((l.innerHTML = s), (s = l.children[0])))
            : (s = r.isElement
                ? y("swiper-slide")
                : y("div", r.params.slideClass)),
          s.setAttribute("data-swiper-slide-index", t),
          i.renderSlide || (s.innerHTML = e),
          i.cache && (r.virtual.cache[t] = s),
          s
        );
      }
      function d(e, t, i) {
        const {
          slidesPerView: s,
          slidesPerGroup: n,
          centeredSlides: o,
          loop: l,
          initialSlide: d,
        } = r.params;
        if (t && !l && d > 0) return;
        const { addSlidesBefore: u, addSlidesAfter: p } = r.params.virtual,
          { from: h, to: f, slides: m, slidesGrid: v, offset: y } = r.virtual;
        r.params.cssMode || r.updateActiveIndex();
        const w = void 0 === i ? r.activeIndex || 0 : i;
        let b, x, S;
        (b = r.rtlTranslate ? "right" : r.isHorizontal() ? "left" : "top"),
          o
            ? ((x = Math.floor(s / 2) + n + p), (S = Math.floor(s / 2) + n + u))
            : ((x = s + (n - 1) + p), (S = (l ? s : n) + u));
        let E = w - S,
          _ = w + x;
        l || ((E = Math.max(E, 0)), (_ = Math.min(_, m.length - 1)));
        let T = (r.slidesGrid[E] || 0) - (r.slidesGrid[0] || 0);
        function M() {
          r.updateSlides(),
            r.updateProgress(),
            r.updateSlidesClasses(),
            a("virtualUpdate");
        }
        if (
          (l && w >= S
            ? ((E -= S), o || (T += r.slidesGrid[0]))
            : l && w < S && ((E = -S), o && (T += r.slidesGrid[0])),
          Object.assign(r.virtual, {
            from: E,
            to: _,
            offset: T,
            slidesGrid: r.slidesGrid,
            slidesBefore: S,
            slidesAfter: x,
          }),
          h === E && f === _ && !e)
        )
          return (
            r.slidesGrid !== v &&
              T !== y &&
              r.slides.forEach((e) => {
                e.style[b] = T - Math.abs(r.cssOverflowAdjustment()) + "px";
              }),
            r.updateProgress(),
            void a("virtualUpdate")
          );
        if (r.params.virtual.renderExternal)
          return (
            r.params.virtual.renderExternal.call(r, {
              offset: T,
              from: E,
              to: _,
              slides: (function () {
                const e = [];
                for (let t = E; t <= _; t += 1) e.push(m[t]);
                return e;
              })(),
            }),
            void (r.params.virtual.renderExternalUpdate
              ? M()
              : a("virtualUpdate"))
          );
        const C = [],
          k = [],
          P = (e) => {
            let t = e;
            return (
              e < 0 ? (t = m.length + e) : t >= m.length && (t -= m.length), t
            );
          };
        if (e)
          r.slides
            .filter((e) => e.matches(`.${r.params.slideClass}, swiper-slide`))
            .forEach((e) => {
              e.remove();
            });
        else
          for (let e = h; e <= f; e += 1)
            if (e < E || e > _) {
              const t = P(e);
              r.slides
                .filter((e) =>
                  e.matches(
                    `.${r.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
                  )
                )
                .forEach((e) => {
                  e.remove();
                });
            }
        const A = l ? -m.length : 0,
          O = l ? 2 * m.length : m.length;
        for (let t = A; t < O; t += 1)
          if (t >= E && t <= _) {
            const r = P(t);
            void 0 === f || e
              ? k.push(r)
              : (t > f && k.push(r), t < h && C.push(r));
          }
        if (
          (k.forEach((e) => {
            r.slidesEl.append(c(m[e], e));
          }),
          l)
        )
          for (let e = C.length - 1; e >= 0; e -= 1) {
            const t = C[e];
            r.slidesEl.prepend(c(m[t], t));
          }
        else
          C.sort((e, t) => t - e),
            C.forEach((e) => {
              r.slidesEl.prepend(c(m[e], e));
            });
        g(r.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
          e.style[b] = T - Math.abs(r.cssOverflowAdjustment()) + "px";
        }),
          M();
      }
      n("beforeInit", () => {
        if (!r.params.virtual.enabled) return;
        let e;
        if (void 0 === r.passedParams.virtual.slides) {
          const t = [...r.slidesEl.children].filter((e) =>
            e.matches(`.${r.params.slideClass}, swiper-slide`)
          );
          t &&
            t.length &&
            ((r.virtual.slides = [...t]),
            (e = !0),
            t.forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t),
                (r.virtual.cache[t] = e),
                e.remove();
            }));
        }
        e || (r.virtual.slides = r.params.virtual.slides),
          r.classNames.push(`${r.params.containerModifierClass}virtual`),
          (r.params.watchSlidesProgress = !0),
          (r.originalParams.watchSlidesProgress = !0),
          d(!1, !0);
      }),
        n("setTranslate", () => {
          r.params.virtual.enabled &&
            (r.params.cssMode && !r._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  d();
                }, 100)))
              : d());
        }),
        n("init update resize", () => {
          r.params.virtual.enabled &&
            r.params.cssMode &&
            h(r.wrapperEl, "--swiper-virtual-size", `${r.virtualSize}px`);
        }),
        Object.assign(r.virtual, {
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && r.virtual.slides.push(e[t]);
            else r.virtual.slides.push(e);
            d(!0);
          },
          prependSlide: function (e) {
            const t = r.activeIndex;
            let i = t + 1,
              s = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && r.virtual.slides.unshift(e[t]);
              (i = t + e.length), (s = e.length);
            } else r.virtual.slides.unshift(e);
            if (r.params.virtual.cache) {
              const e = r.virtual.cache,
                t = {};
              Object.keys(e).forEach((r) => {
                const i = e[r],
                  n = i.getAttribute("data-swiper-slide-index");
                n &&
                  i.setAttribute(
                    "data-swiper-slide-index",
                    parseInt(n, 10) + s
                  ),
                  (t[parseInt(r, 10) + s] = i);
              }),
                (r.virtual.cache = t);
            }
            d(!0), r.slideTo(i, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = r.activeIndex;
            if (Array.isArray(e))
              for (let i = e.length - 1; i >= 0; i -= 1)
                r.params.virtual.cache &&
                  (delete r.virtual.cache[e[i]],
                  Object.keys(r.virtual.cache).forEach((t) => {
                    t > e &&
                      ((r.virtual.cache[t - 1] = r.virtual.cache[t]),
                      r.virtual.cache[t - 1].setAttribute(
                        "data-swiper-slide-index",
                        t - 1
                      ),
                      delete r.virtual.cache[t]);
                  })),
                  r.virtual.slides.splice(e[i], 1),
                  e[i] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              r.params.virtual.cache &&
                (delete r.virtual.cache[e],
                Object.keys(r.virtual.cache).forEach((t) => {
                  t > e &&
                    ((r.virtual.cache[t - 1] = r.virtual.cache[t]),
                    r.virtual.cache[t - 1].setAttribute(
                      "data-swiper-slide-index",
                      t - 1
                    ),
                    delete r.virtual.cache[t]);
                })),
                r.virtual.slides.splice(e, 1),
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            d(!0), r.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (r.virtual.slides = []),
              r.params.virtual.cache && (r.virtual.cache = {}),
              d(!0),
              r.slideTo(0, 0);
          },
          update: d,
        });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: s, emit: a } = e;
      const o = i(),
        l = n();
      function c(e) {
        if (!t.enabled) return;
        const { rtlTranslate: r } = t;
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const s = i.keyCode || i.charCode,
          n = t.params.keyboard.pageUpDown,
          c = n && 33 === s,
          d = n && 34 === s,
          u = 37 === s,
          p = 39 === s,
          h = 38 === s,
          f = 40 === s;
        if (
          (!t.allowSlideNext &&
            ((t.isHorizontal() && p) || (t.isVertical() && f) || d)) ||
          (!t.allowSlidePrev &&
            ((t.isHorizontal() && u) || (t.isVertical() && h) || c))
        )
          return !1;
        if (
          !(
            i.shiftKey ||
            i.altKey ||
            i.ctrlKey ||
            i.metaKey ||
            (o.activeElement &&
              o.activeElement.nodeName &&
              ("input" === o.activeElement.nodeName.toLowerCase() ||
                "textarea" === o.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (c || d || u || p || h || f)
          ) {
            let e = !1;
            if (
              S(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
              0 === S(t.el, `.${t.params.slideActiveClass}`).length
            )
              return;
            const i = t.el,
              s = i.clientWidth,
              n = i.clientHeight,
              a = l.innerWidth,
              o = l.innerHeight,
              c = w(i);
            r && (c.left -= i.scrollLeft);
            const d = [
              [c.left, c.top],
              [c.left + s, c.top],
              [c.left, c.top + n],
              [c.left + s, c.top + n],
            ];
            for (let t = 0; t < d.length; t += 1) {
              const r = d[t];
              if (r[0] >= 0 && r[0] <= a && r[1] >= 0 && r[1] <= o) {
                if (0 === r[0] && 0 === r[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((c || d || u || p) &&
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              (((d || p) && !r) || ((c || u) && r)) && t.slideNext(),
              (((c || u) && !r) || ((d || p) && r)) && t.slidePrev())
            : ((c || d || h || f) &&
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              (d || f) && t.slideNext(),
              (c || h) && t.slidePrev()),
            a("keyPress", s);
        }
      }
      function d() {
        t.keyboard.enabled ||
          (o.addEventListener("keydown", c), (t.keyboard.enabled = !0));
      }
      function u() {
        t.keyboard.enabled &&
          (o.removeEventListener("keydown", c), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        r({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        s("init", () => {
          t.params.keyboard.enabled && d();
        }),
        s("destroy", () => {
          t.keyboard.enabled && u();
        }),
        Object.assign(t.keyboard, { enable: d, disable: u });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i, emit: s } = e;
      const a = n();
      r({
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
        (t.mousewheel = { enabled: !1 });
      let c,
        d,
        u = l();
      const p = [];
      function h() {
        t.enabled && (t.mouseEntered = !0);
      }
      function f() {
        t.enabled && (t.mouseEntered = !1);
      }
      function m(e) {
        return (
          !(
            (t.params.mousewheel.thresholdDelta &&
              e.delta < t.params.mousewheel.thresholdDelta) ||
            (t.params.mousewheel.thresholdTime &&
              l() - u < t.params.mousewheel.thresholdTime)
          ) &&
          ((e.delta >= 6 && l() - u < 60) ||
            (e.direction < 0
              ? (!t.isEnd || t.params.loop) &&
                !t.animating &&
                (t.slideNext(), s("scroll", e.raw))
              : (!t.isBeginning || t.params.loop) &&
                !t.animating &&
                (t.slidePrev(), s("scroll", e.raw)),
            (u = new a.Date().getTime()),
            !1))
        );
      }
      function g(e) {
        let r = e,
          i = !0;
        if (
          !t.enabled ||
          e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)
        )
          return;
        const n = t.params.mousewheel;
        t.params.cssMode && r.preventDefault();
        let a = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (a = document.querySelector(t.params.mousewheel.eventsTarget));
        const u = a && a.contains(r.target);
        if (!t.mouseEntered && !u && !n.releaseOnEdges) return !0;
        r.originalEvent && (r = r.originalEvent);
        let h = 0;
        const f = t.rtlTranslate ? -1 : 1,
          g = (function (e) {
            let t = 0,
              r = 0,
              i = 0,
              s = 0;
            return (
              "detail" in e && (r = e.detail),
              "wheelDelta" in e && (r = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = r), (r = 0)),
              (i = 10 * t),
              (s = 10 * r),
              "deltaY" in e && (s = e.deltaY),
              "deltaX" in e && (i = e.deltaX),
              e.shiftKey && !i && ((i = s), (s = 0)),
              (i || s) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((i *= 40), (s *= 40))
                  : ((i *= 800), (s *= 800))),
              i && !t && (t = i < 1 ? -1 : 1),
              s && !r && (r = s < 1 ? -1 : 1),
              { spinX: t, spinY: r, pixelX: i, pixelY: s }
            );
          })(r);
        if (n.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
            h = -g.pixelX * f;
          } else {
            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
            h = -g.pixelY;
          }
        else
          h =
            Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * f : -g.pixelY;
        if (0 === h) return !0;
        n.invert && (h = -h);
        let v = t.getTranslate() + h * n.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
          v <= t.maxTranslate() && (v = t.maxTranslate()),
          (i =
            !!t.params.loop ||
            !(v === t.minTranslate() || v === t.maxTranslate())),
          i && t.params.nested && r.stopPropagation(),
          t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: l(), delta: Math.abs(h), direction: Math.sign(h) },
            i =
              d &&
              e.time < d.time + 500 &&
              e.delta <= d.delta &&
              e.direction === d.direction;
          if (!i) {
            d = void 0;
            let a = t.getTranslate() + h * n.sensitivity;
            const l = t.isBeginning,
              u = t.isEnd;
            if (
              (a >= t.minTranslate() && (a = t.minTranslate()),
              a <= t.maxTranslate() && (a = t.maxTranslate()),
              t.setTransition(0),
              t.setTranslate(a),
              t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses(),
              ((!l && t.isBeginning) || (!u && t.isEnd)) &&
                t.updateSlidesClasses(),
              t.params.loop &&
                t.loopFix({
                  direction: e.direction < 0 ? "next" : "prev",
                  byMousewheel: !0,
                }),
              t.params.freeMode.sticky)
            ) {
              clearTimeout(c), (c = void 0), p.length >= 15 && p.shift();
              const r = p.length ? p[p.length - 1] : void 0,
                i = p[0];
              if (
                (p.push(e),
                r && (e.delta > r.delta || e.direction !== r.direction))
              )
                p.splice(0);
              else if (
                p.length >= 15 &&
                e.time - i.time < 500 &&
                i.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const r = h > 0 ? 0.8 : 0.2;
                (d = e),
                  p.splice(0),
                  (c = o(() => {
                    t.destroyed ||
                      !t.params ||
                      t.slideToClosest(t.params.speed, !0, void 0, r);
                  }, 0));
              }
              c ||
                (c = o(() => {
                  if (t.destroyed || !t.params) return;
                  (d = e),
                    p.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (i || s("scroll", r),
              t.params.autoplay &&
                t.params.autoplay.disableOnInteraction &&
                t.autoplay.stop(),
              n.releaseOnEdges &&
                (a === t.minTranslate() || a === t.maxTranslate()))
            )
              return !0;
          }
        } else {
          const r = {
            time: l(),
            delta: Math.abs(h),
            direction: Math.sign(h),
            raw: e,
          };
          p.length >= 2 && p.shift();
          const i = p.length ? p[p.length - 1] : void 0;
          if (
            (p.push(r),
            i
              ? (r.direction !== i.direction ||
                  r.delta > i.delta ||
                  r.time > i.time + 150) &&
                m(r)
              : m(r),
            (function (e) {
              const r = t.params.mousewheel;
              if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && r.releaseOnEdges) return !0;
              } else if (t.isBeginning && !t.params.loop && r.releaseOnEdges)
                return !0;
              return !1;
            })(r))
          )
            return !0;
        }
        return r.preventDefault ? r.preventDefault() : (r.returnValue = !1), !1;
      }
      function v(e) {
        let r = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (r = document.querySelector(t.params.mousewheel.eventsTarget)),
          r[e]("mouseenter", h),
          r[e]("mouseleave", f),
          r[e]("wheel", g);
      }
      function y() {
        return t.params.cssMode
          ? (t.wrapperEl.removeEventListener("wheel", g), !0)
          : !t.mousewheel.enabled &&
              (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
      }
      function w() {
        return t.params.cssMode
          ? (t.wrapperEl.addEventListener(event, g), !0)
          : !!t.mousewheel.enabled &&
              (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
      }
      i("init", () => {
        !t.params.mousewheel.enabled && t.params.cssMode && w(),
          t.params.mousewheel.enabled && y();
      }),
        i("destroy", () => {
          t.params.cssMode && y(), t.mousewheel.enabled && w();
        }),
        Object.assign(t.mousewheel, { enable: y, disable: w });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i, emit: s } = e;
      function n(e) {
        let r;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((r = t.el.querySelector(e) || t.hostEl.querySelector(e)), r)
          ? r
          : (e &&
              ("string" == typeof e && (r = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
              "string" == typeof e &&
              r &&
              r.length > 1 &&
              1 === t.el.querySelectorAll(e).length
                ? (r = t.el.querySelector(e))
                : r && 1 === r.length && (r = r[0])),
            e && !r ? e : r);
      }
      function a(e, r) {
        const i = t.params.navigation;
        (e = T(e)).forEach((e) => {
          e &&
            (e.classList[r ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = r),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function o() {
        const { nextEl: e, prevEl: r } = t.navigation;
        if (t.params.loop) return a(r, !1), void a(e, !1);
        a(r, t.isBeginning && !t.params.rewind),
          a(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), s("navigationPrev"));
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), s("navigationNext"));
      }
      function d() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = he(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        let r = n(e.nextEl),
          i = n(e.prevEl);
        Object.assign(t.navigation, { nextEl: r, prevEl: i }),
          (r = T(r)),
          (i = T(i));
        const s = (r, i) => {
          r && r.addEventListener("click", "next" === i ? c : l),
            !t.enabled && r && r.classList.add(...e.lockClass.split(" "));
        };
        r.forEach((e) => s(e, "next")), i.forEach((e) => s(e, "prev"));
      }
      function u() {
        let { nextEl: e, prevEl: r } = t.navigation;
        (e = T(e)), (r = T(r));
        const i = (e, r) => {
          e.removeEventListener("click", "next" === r ? c : l),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => i(e, "next")), r.forEach((e) => i(e, "prev"));
      }
      r({
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
        (t.navigation = { nextEl: null, prevEl: null }),
        i("init", () => {
          !1 === t.params.navigation.enabled ? p() : (d(), o());
        }),
        i("toEdge fromEdge lock unlock", () => {
          o();
        }),
        i("destroy", () => {
          u();
        }),
        i("enable disable", () => {
          let { nextEl: e, prevEl: r } = t.navigation;
          (e = T(e)),
            (r = T(r)),
            t.enabled
              ? o()
              : [...e, ...r]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.add(t.params.navigation.lockClass)
                  );
        }),
        i("click", (e, r) => {
          let { nextEl: i, prevEl: n } = t.navigation;
          (i = T(i)), (n = T(n));
          const a = r.target;
          let o = n.includes(a) || i.includes(a);
          if (t.isElement && !o) {
            const e = r.path || (r.composedPath && r.composedPath());
            e && (o = e.find((e) => i.includes(e) || n.includes(e)));
          }
          if (t.params.navigation.hideOnClick && !o) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === a || t.pagination.el.contains(a))
            )
              return;
            let e;
            i.length
              ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
              : n.length &&
                (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
              s(!0 === e ? "navigationShow" : "navigationHide"),
              [...i, ...n]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass)
                );
          }
        });
      const p = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            d(),
            o();
        },
        disable: p,
        update: o,
        init: d,
        destroy: u,
      });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i, emit: s } = e;
      const n = "swiper-pagination";
      r({
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
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
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
        (t.pagination = { el: null, bullets: [] });
      let a,
        o = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function c(e, r) {
        const { bulletActiveClass: i } = t.params.pagination;
        e &&
          (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${i}-${r}`),
          (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${i}-${r}-${r}`));
      }
      function d(e) {
        const r = e.target.closest(fe(t.params.pagination.bulletClass));
        if (!r) return;
        e.preventDefault();
        const i = x(r) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === i) return;
          const e = (function (e, t, r) {
            return (t %= r) == 1 + (e %= r)
              ? "next"
              : t === e - 1
              ? "previous"
              : void 0;
          })(t.realIndex, i, t.slides.length);
          "next" === e
            ? t.slideNext()
            : "previous" === e
            ? t.slidePrev()
            : t.slideToLoop(i);
        } else t.slideTo(i);
      }
      function u() {
        const e = t.rtl,
          r = t.params.pagination;
        if (l()) return;
        let i,
          n,
          d = t.pagination.el;
        d = T(d);
        const u =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          p = t.params.loop
            ? Math.ceil(u / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((n = t.previousRealIndex || 0),
              (i =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((i = t.snapIndex), (n = t.previousSnapIndex))
            : ((n = t.previousIndex || 0), (i = t.activeIndex || 0)),
          "bullets" === r.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const s = t.pagination.bullets;
          let l, u, p;
          if (
            (r.dynamicBullets &&
              ((a = _(s[0], t.isHorizontal() ? "width" : "height")),
              d.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] =
                  a * (r.dynamicMainBullets + 4) + "px";
              }),
              r.dynamicMainBullets > 1 &&
                void 0 !== n &&
                ((o += i - (n || 0)),
                o > r.dynamicMainBullets - 1
                  ? (o = r.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (l = Math.max(i - o, 0)),
              (u = l + (Math.min(s.length, r.dynamicMainBullets) - 1)),
              (p = (u + l) / 2)),
            s.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${r.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                )
                .flat();
              e.classList.remove(...t);
            }),
            d.length > 1)
          )
            s.forEach((e) => {
              const s = x(e);
              s === i
                ? e.classList.add(...r.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                r.dynamicBullets &&
                  (s >= l &&
                    s <= u &&
                    e.classList.add(
                      ...`${r.bulletActiveClass}-main`.split(" ")
                    ),
                  s === l && c(e, "prev"),
                  s === u && c(e, "next"));
            });
          else {
            const e = s[i];
            if (
              (e && e.classList.add(...r.bulletActiveClass.split(" ")),
              t.isElement &&
                s.forEach((e, t) => {
                  e.setAttribute("part", t === i ? "bullet-active" : "bullet");
                }),
              r.dynamicBullets)
            ) {
              const e = s[l],
                t = s[u];
              for (let e = l; e <= u; e += 1)
                s[e] &&
                  s[e].classList.add(
                    ...`${r.bulletActiveClass}-main`.split(" ")
                  );
              c(e, "prev"), c(t, "next");
            }
          }
          if (r.dynamicBullets) {
            const i = Math.min(s.length, r.dynamicMainBullets + 4),
              n = (a * i - a) / 2 - p * a,
              o = e ? "right" : "left";
            s.forEach((e) => {
              e.style[t.isHorizontal() ? o : "top"] = `${n}px`;
            });
          }
        }
        d.forEach((e, n) => {
          if (
            ("fraction" === r.type &&
              (e.querySelectorAll(fe(r.currentClass)).forEach((e) => {
                e.textContent = r.formatFractionCurrent(i + 1);
              }),
              e.querySelectorAll(fe(r.totalClass)).forEach((e) => {
                e.textContent = r.formatFractionTotal(p);
              })),
            "progressbar" === r.type)
          ) {
            let s;
            s = r.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const n = (i + 1) / p;
            let a = 1,
              o = 1;
            "horizontal" === s ? (a = n) : (o = n),
              e.querySelectorAll(fe(r.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === r.type && r.renderCustom
            ? ((e.innerHTML = r.renderCustom(t, i + 1, p)),
              0 === n && s("paginationRender", e))
            : (0 === n && s("paginationRender", e), s("paginationUpdate", e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](r.lockClass);
        });
      }
      function p() {
        const e = t.params.pagination;
        if (l()) return;
        const r =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.grid && t.params.grid.rows > 1
            ? t.slides.length / Math.ceil(t.params.grid.rows)
            : t.slides.length;
        let i = t.pagination.el;
        i = T(i);
        let n = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil(r / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && i > r && (i = r);
          for (let r = 0; r < i; r += 1)
            e.renderBullet
              ? (n += e.renderBullet.call(t, r, e.bulletClass))
              : (n += `<${e.bulletElement} ${
                  t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (n = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
            (n = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          i.forEach((r) => {
            "custom" !== e.type && (r.innerHTML = n || ""),
              "bullets" === e.type &&
                t.pagination.bullets.push(
                  ...r.querySelectorAll(fe(e.bulletClass))
                );
          }),
          "custom" !== e.type && s("paginationRender", i[0]);
      }
      function h() {
        t.params.pagination = he(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let r;
        "string" == typeof e.el &&
          t.isElement &&
          (r = t.el.querySelector(e.el)),
          !r &&
            "string" == typeof e.el &&
            (r = [...document.querySelectorAll(e.el)]),
          r || (r = e.el),
          r &&
            0 !== r.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(r) &&
              r.length > 1 &&
              ((r = [...t.el.querySelectorAll(e.el)]),
              r.length > 1 && (r = r.find((e) => S(e, ".swiper")[0] === t.el))),
            Array.isArray(r) && 1 === r.length && (r = r[0]),
            Object.assign(t.pagination, { el: r }),
            (r = T(r)),
            r.forEach((r) => {
              "bullets" === e.type &&
                e.clickable &&
                r.classList.add(...(e.clickableClass || "").split(" ")),
                r.classList.add(e.modifierClass + e.type),
                r.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (r.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (o = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  r.classList.add(e.progressbarOppositeClass),
                e.clickable && r.addEventListener("click", d),
                t.enabled || r.classList.add(e.lockClass);
            }));
      }
      function f() {
        const e = t.params.pagination;
        if (l()) return;
        let r = t.pagination.el;
        r &&
          ((r = T(r)),
          r.forEach((r) => {
            r.classList.remove(e.hiddenClass),
              r.classList.remove(e.modifierClass + e.type),
              r.classList.remove(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              e.clickable &&
                (r.classList.remove(...(e.clickableClass || "").split(" ")),
                r.removeEventListener("click", d));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(" "))
            );
      }
      i("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: r } = t.pagination;
        (r = T(r)),
          r.forEach((r) => {
            r.classList.remove(e.horizontalClass, e.verticalClass),
              r.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
      }),
        i("init", () => {
          !1 === t.params.pagination.enabled ? m() : (h(), p(), u());
        }),
        i("activeIndexChange", () => {
          void 0 === t.snapIndex && u();
        }),
        i("snapIndexChange", () => {
          u();
        }),
        i("snapGridLengthChange", () => {
          p(), u();
        }),
        i("destroy", () => {
          f();
        }),
        i("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = T(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? "remove" : "add"](
                t.params.pagination.lockClass
              )
            ));
        }),
        i("lock unlock", () => {
          u();
        }),
        i("click", (e, r) => {
          const i = r.target,
            n = T(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            n &&
            n.length > 0 &&
            !i.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = n[0].classList.contains(t.params.pagination.hiddenClass);
            s(!0 === e ? "paginationShow" : "paginationHide"),
              n.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass)
              );
          }
        });
      const m = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = T(e)),
          e.forEach((e) =>
            e.classList.add(t.params.pagination.paginationDisabledClass)
          )),
          f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = T(e)),
            e.forEach((e) =>
              e.classList.remove(t.params.pagination.paginationDisabledClass)
            )),
            h(),
            p(),
            u();
        },
        disable: m,
        render: p,
        update: u,
        init: h,
        destroy: f,
      });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: s, emit: n } = e;
      const l = i();
      let c,
        d,
        u,
        p,
        h = !1,
        f = null,
        m = null;
      function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: r } = t,
          { dragEl: i, el: s } = e,
          n = t.params.scrollbar,
          a = t.params.loop ? t.progressLoop : t.progress;
        let o = d,
          l = (u - d) * a;
        r
          ? ((l = -l),
            l > 0 ? ((o = d - l), (l = 0)) : -l + d > u && (o = u + l))
          : l < 0
          ? ((o = d + l), (l = 0))
          : l + d > u && (o = u - l),
          t.isHorizontal()
            ? ((i.style.transform = `translate3d(${l}px, 0, 0)`),
              (i.style.width = `${o}px`))
            : ((i.style.transform = `translate3d(0px, ${l}px, 0)`),
              (i.style.height = `${o}px`)),
          n.hide &&
            (clearTimeout(f),
            (s.style.opacity = 1),
            (f = setTimeout(() => {
              (s.style.opacity = 0), (s.style.transitionDuration = "400ms");
            }, 1e3)));
      }
      function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { dragEl: r, el: i } = e;
        (r.style.width = ""),
          (r.style.height = ""),
          (u = t.isHorizontal() ? i.offsetWidth : i.offsetHeight),
          (p =
            t.size /
            (t.virtualSize +
              t.params.slidesOffsetBefore -
              (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (d =
            "auto" === t.params.scrollbar.dragSize
              ? u * p
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (r.style.width = `${d}px`)
            : (r.style.height = `${d}px`),
          (i.style.display = p >= 1 ? "none" : ""),
          t.params.scrollbar.hide && (i.style.opacity = 0),
          t.params.watchOverflow &&
            t.enabled &&
            e.el.classList[t.isLocked ? "add" : "remove"](
              t.params.scrollbar.lockClass
            );
      }
      function b(e) {
        return t.isHorizontal() ? e.clientX : e.clientY;
      }
      function x(e) {
        const { scrollbar: r, rtlTranslate: i } = t,
          { el: s } = r;
        let n;
        (n =
          (b(e) -
            w(s)[t.isHorizontal() ? "left" : "top"] -
            (null !== c ? c : d / 2)) /
          (u - d)),
          (n = Math.max(Math.min(n, 1), 0)),
          i && (n = 1 - n);
        const a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * n;
        t.updateProgress(a),
          t.setTranslate(a),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      }
      function S(e) {
        const r = t.params.scrollbar,
          { scrollbar: i, wrapperEl: s } = t,
          { el: a, dragEl: o } = i;
        (h = !0),
          (c =
            e.target === o
              ? b(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          (s.style.transitionDuration = "100ms"),
          (o.style.transitionDuration = "100ms"),
          x(e),
          clearTimeout(m),
          (a.style.transitionDuration = "0ms"),
          r.hide && (a.style.opacity = 1),
          t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
          n("scrollbarDragStart", e);
      }
      function E(e) {
        const { scrollbar: r, wrapperEl: i } = t,
          { el: s, dragEl: a } = r;
        h &&
          (e.preventDefault && e.cancelable
            ? e.preventDefault()
            : (e.returnValue = !1),
          x(e),
          (i.style.transitionDuration = "0ms"),
          (s.style.transitionDuration = "0ms"),
          (a.style.transitionDuration = "0ms"),
          n("scrollbarDragMove", e));
      }
      function _(e) {
        const r = t.params.scrollbar,
          { scrollbar: i, wrapperEl: s } = t,
          { el: a } = i;
        h &&
          ((h = !1),
          t.params.cssMode &&
            ((t.wrapperEl.style["scroll-snap-type"] = ""),
            (s.style.transitionDuration = "")),
          r.hide &&
            (clearTimeout(m),
            (m = o(() => {
              (a.style.opacity = 0), (a.style.transitionDuration = "400ms");
            }, 1e3))),
          n("scrollbarDragEnd", e),
          r.snapOnRelease && t.slideToClosest());
      }
      function M(e) {
        const { scrollbar: r, params: i } = t,
          s = r.el;
        if (!s) return;
        const n = s,
          a = !!i.passiveListeners && { passive: !1, capture: !1 },
          o = !!i.passiveListeners && { passive: !0, capture: !1 };
        if (!n) return;
        const c = "on" === e ? "addEventListener" : "removeEventListener";
        n[c]("pointerdown", S, a),
          l[c]("pointermove", E, a),
          l[c]("pointerup", _, o);
      }
      function C() {
        const { scrollbar: e, el: r } = t;
        t.params.scrollbar = he(
          t,
          t.originalParams.scrollbar,
          t.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        const i = t.params.scrollbar;
        if (!i.el) return;
        let s, n;
        if (
          ("string" == typeof i.el &&
            t.isElement &&
            (s = t.el.querySelector(i.el)),
          s || "string" != typeof i.el)
        )
          s || (s = i.el);
        else if (((s = l.querySelectorAll(i.el)), !s.length)) return;
        t.params.uniqueNavElements &&
          "string" == typeof i.el &&
          s.length > 1 &&
          1 === r.querySelectorAll(i.el).length &&
          (s = r.querySelector(i.el)),
          s.length > 0 && (s = s[0]),
          s.classList.add(
            t.isHorizontal() ? i.horizontalClass : i.verticalClass
          ),
          s &&
            ((n = s.querySelector(fe(t.params.scrollbar.dragClass))),
            n || ((n = y("div", t.params.scrollbar.dragClass)), s.append(n))),
          Object.assign(e, { el: s, dragEl: n }),
          i.draggable && (!t.params.scrollbar.el || !t.scrollbar.el || M("on")),
          s &&
            s.classList[t.enabled ? "remove" : "add"](
              ...a(t.params.scrollbar.lockClass)
            );
      }
      function k() {
        const e = t.params.scrollbar,
          r = t.scrollbar.el;
        r &&
          r.classList.remove(
            ...a(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          ),
          !t.params.scrollbar.el || !t.scrollbar.el || M("off");
      }
      r({
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
        (t.scrollbar = { el: null, dragEl: null }),
        s("changeDirection", () => {
          if (!t.scrollbar || !t.scrollbar.el) return;
          const e = t.params.scrollbar;
          let { el: r } = t.scrollbar;
          (r = T(r)),
            r.forEach((r) => {
              r.classList.remove(e.horizontalClass, e.verticalClass),
                r.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                );
            });
        }),
        s("init", () => {
          !1 === t.params.scrollbar.enabled ? P() : (C(), v(), g());
        }),
        s("update resize observerUpdate lock unlock changeDirection", () => {
          v();
        }),
        s("setTranslate", () => {
          g();
        }),
        s("setTransition", (e, r) => {
          !(function (e) {
            !t.params.scrollbar.el ||
              !t.scrollbar.el ||
              (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
          })(r);
        }),
        s("enable disable", () => {
          const { el: e } = t.scrollbar;
          e &&
            e.classList[t.enabled ? "remove" : "add"](
              ...a(t.params.scrollbar.lockClass)
            );
        }),
        s("destroy", () => {
          k();
        });
      const P = () => {
        t.el.classList.add(...a(t.params.scrollbar.scrollbarDisabledClass)),
          t.scrollbar.el &&
            t.scrollbar.el.classList.add(
              ...a(t.params.scrollbar.scrollbarDisabledClass)
            ),
          k();
      };
      Object.assign(t.scrollbar, {
        enable: () => {
          t.el.classList.remove(
            ...a(t.params.scrollbar.scrollbarDisabledClass)
          ),
            t.scrollbar.el &&
              t.scrollbar.el.classList.remove(
                ...a(t.params.scrollbar.scrollbarDisabledClass)
              ),
            C(),
            v(),
            g();
        },
        disable: P,
        updateSize: v,
        setTranslate: g,
        init: C,
        destroy: k,
      });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i } = e;
      r({ parallax: { enabled: !1 } });
      const s =
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
        n = (e, r) => {
          const { rtl: i } = t,
            s = i ? -1 : 1,
            n = e.getAttribute("data-swiper-parallax") || "0";
          let a = e.getAttribute("data-swiper-parallax-x"),
            o = e.getAttribute("data-swiper-parallax-y");
          const l = e.getAttribute("data-swiper-parallax-scale"),
            c = e.getAttribute("data-swiper-parallax-opacity"),
            d = e.getAttribute("data-swiper-parallax-rotate");
          if (
            (a || o
              ? ((a = a || "0"), (o = o || "0"))
              : t.isHorizontal()
              ? ((a = n), (o = "0"))
              : ((o = n), (a = "0")),
            (a =
              a.indexOf("%") >= 0
                ? parseInt(a, 10) * r * s + "%"
                : a * r * s + "px"),
            (o =
              o.indexOf("%") >= 0 ? parseInt(o, 10) * r + "%" : o * r + "px"),
            null != c)
          ) {
            const t = c - (c - 1) * (1 - Math.abs(r));
            e.style.opacity = t;
          }
          let u = `translate3d(${a}, ${o}, 0px)`;
          if (null != l) {
            u += ` scale(${l - (l - 1) * (1 - Math.abs(r))})`;
          }
          if (d && null != d) {
            u += ` rotate(${d * r * -1}deg)`;
          }
          e.style.transform = u;
        },
        a = () => {
          const {
              el: e,
              slides: r,
              progress: i,
              snapGrid: a,
              isElement: o,
            } = t,
            l = g(e, s);
          t.isElement && l.push(...g(t.hostEl, s)),
            l.forEach((e) => {
              n(e, i);
            }),
            r.forEach((e, r) => {
              let o = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (o += Math.ceil(r / 2) - i * (a.length - 1)),
                (o = Math.min(Math.max(o, -1), 1)),
                e
                  .querySelectorAll(`${s}, [data-swiper-parallax-rotate]`)
                  .forEach((e) => {
                    n(e, o);
                  });
            });
        };
      i("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        i("init", () => {
          t.params.parallax.enabled && a();
        }),
        i("setTranslate", () => {
          t.params.parallax.enabled && a();
        }),
        i("setTransition", (e, r) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { el: r, hostEl: i } = t,
                n = [...r.querySelectorAll(s)];
              t.isElement && n.push(...i.querySelectorAll(s)),
                n.forEach((t) => {
                  let r =
                    parseInt(
                      t.getAttribute("data-swiper-parallax-duration"),
                      10
                    ) || e;
                  0 === e && (r = 0), (t.style.transitionDuration = `${r}ms`);
                });
            })(r);
        });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i, emit: s } = e;
      const a = n();
      r({
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
        (t.zoom = { enabled: !1 });
      let o = 1,
        l = !1,
        d = !1,
        u = { x: 0, y: 0 };
      const p = -3;
      let h, f;
      const m = [],
        v = {
          originX: 0,
          originY: 0,
          slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          imageEl: void 0,
          imageWrapEl: void 0,
          maxRatio: 3,
        },
        y = {
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
        b = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let x,
        E = 1;
      function _() {
        if (m.length < 2) return 1;
        const e = m[0].pageX,
          t = m[0].pageY,
          r = m[1].pageX,
          i = m[1].pageY;
        return Math.sqrt(ht(r - e, 2) + ht(i - t, 2));
      }
      function T() {
        const e = t.params.zoom,
          r = v.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
        if (e.limitToOriginalSize && v.imageEl && v.imageEl.naturalWidth) {
          const e = v.imageEl.naturalWidth / v.imageEl.offsetWidth;
          return Math.min(e, r);
        }
        return r;
      }
      function M(e) {
        const r = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return !!(
          e.target.matches(r) ||
          t.slides.filter((t) => t.contains(e.target)).length > 0
        );
      }
      function C(e) {
        const r = `.${t.params.zoom.containerClass}`;
        return !!(
          e.target.matches(r) ||
          [...t.hostEl.querySelectorAll(r)].filter((t) => t.contains(e.target))
            .length > 0
        );
      }
      function k(e) {
        if (("mouse" === e.pointerType && m.splice(0, m.length), !M(e))) return;
        const r = t.params.zoom;
        if (((h = !1), (f = !1), m.push(e), !(m.length < 2))) {
          if (((h = !0), (v.scaleStart = _()), !v.slideEl)) {
            (v.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
              v.slideEl || (v.slideEl = t.slides[t.activeIndex]);
            let i = v.slideEl.querySelector(`.${r.containerClass}`);
            if (
              (i &&
                (i = i.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target"
                )[0]),
              (v.imageEl = i),
              (v.imageWrapEl = i
                ? S(v.imageEl, `.${r.containerClass}`)[0]
                : void 0),
              !v.imageWrapEl)
            )
              return void (v.imageEl = void 0);
            v.maxRatio = T();
          }
          if (v.imageEl) {
            const [e, t] = (function () {
              if (m.length < 2) return { x: null, y: null };
              const e = v.imageEl.getBoundingClientRect();
              return [
                (m[0].pageX + (m[1].pageX - m[0].pageX) / 2 - e.x - a.scrollX) /
                  o,
                (m[0].pageY + (m[1].pageY - m[0].pageY) / 2 - e.y - a.scrollY) /
                  o,
              ];
            })();
            (v.originX = e),
              (v.originY = t),
              (v.imageEl.style.transitionDuration = "0ms");
          }
          l = !0;
        }
      }
      function P(e) {
        if (!M(e)) return;
        const r = t.params.zoom,
          i = t.zoom,
          s = m.findIndex((t) => t.pointerId === e.pointerId);
        s >= 0 && (m[s] = e),
          !(m.length < 2) &&
            ((f = !0),
            (v.scaleMove = _()),
            v.imageEl &&
              ((i.scale = (v.scaleMove / v.scaleStart) * o),
              i.scale > v.maxRatio &&
                (i.scale = v.maxRatio - 1 + ht(i.scale - v.maxRatio + 1, 0.5)),
              i.scale < r.minRatio &&
                (i.scale = r.minRatio + 1 - ht(r.minRatio - i.scale + 1, 0.5)),
              (v.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`)));
      }
      function A(e) {
        if (!M(e) || ("mouse" === e.pointerType && "pointerout" === e.type))
          return;
        const r = t.params.zoom,
          i = t.zoom,
          s = m.findIndex((t) => t.pointerId === e.pointerId);
        s >= 0 && m.splice(s, 1),
          h &&
            f &&
            ((h = !1),
            (f = !1),
            v.imageEl &&
              ((i.scale = Math.max(Math.min(i.scale, v.maxRatio), r.minRatio)),
              (v.imageEl.style.transitionDuration = `${t.params.speed}ms`),
              (v.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
              (o = i.scale),
              (l = !1),
              i.scale > 1 && v.slideEl
                ? v.slideEl.classList.add(`${r.zoomedSlideClass}`)
                : i.scale <= 1 &&
                  v.slideEl &&
                  v.slideEl.classList.remove(`${r.zoomedSlideClass}`),
              1 === i.scale &&
                ((v.originX = 0), (v.originY = 0), (v.slideEl = void 0))));
      }
      function O() {
        t.touchEventsData.preventTouchMoveFromPointerMove = !1;
      }
      function L(e) {
        const r = "mouse" === e.pointerType && t.params.zoom.panOnMouseMove;
        if (!M(e) || !C(e)) return;
        const i = t.zoom;
        if (!v.imageEl) return;
        if (!y.isTouched || !v.slideEl) return void (r && D(e));
        if (r) return void D(e);
        y.isMoved ||
          ((y.width = v.imageEl.offsetWidth || v.imageEl.clientWidth),
          (y.height = v.imageEl.offsetHeight || v.imageEl.clientHeight),
          (y.startX = c(v.imageWrapEl, "x") || 0),
          (y.startY = c(v.imageWrapEl, "y") || 0),
          (v.slideWidth = v.slideEl.offsetWidth),
          (v.slideHeight = v.slideEl.offsetHeight),
          (v.imageWrapEl.style.transitionDuration = "0ms"));
        const s = y.width * i.scale,
          n = y.height * i.scale;
        if (
          ((y.minX = Math.min(v.slideWidth / 2 - s / 2, 0)),
          (y.maxX = -y.minX),
          (y.minY = Math.min(v.slideHeight / 2 - n / 2, 0)),
          (y.maxY = -y.minY),
          (y.touchesCurrent.x = m.length > 0 ? m[0].pageX : e.pageX),
          (y.touchesCurrent.y = m.length > 0 ? m[0].pageY : e.pageY),
          Math.max(
            Math.abs(y.touchesCurrent.x - y.touchesStart.x),
            Math.abs(y.touchesCurrent.y - y.touchesStart.y)
          ) > 5 && (t.allowClick = !1),
          !y.isMoved && !l)
        ) {
          if (
            t.isHorizontal() &&
            ((Math.floor(y.minX) === Math.floor(y.startX) &&
              y.touchesCurrent.x < y.touchesStart.x) ||
              (Math.floor(y.maxX) === Math.floor(y.startX) &&
                y.touchesCurrent.x > y.touchesStart.x))
          )
            return (y.isTouched = !1), void O();
          if (
            !t.isHorizontal() &&
            ((Math.floor(y.minY) === Math.floor(y.startY) &&
              y.touchesCurrent.y < y.touchesStart.y) ||
              (Math.floor(y.maxY) === Math.floor(y.startY) &&
                y.touchesCurrent.y > y.touchesStart.y))
          )
            return (y.isTouched = !1), void O();
        }
        e.cancelable && e.preventDefault(),
          e.stopPropagation(),
          clearTimeout(x),
          (t.touchEventsData.preventTouchMoveFromPointerMove = !0),
          (x = setTimeout(() => {
            t.destroyed || O();
          })),
          (y.isMoved = !0);
        const a = (i.scale - o) / (v.maxRatio - t.params.zoom.minRatio),
          { originX: d, originY: u } = v;
        (y.currentX =
          y.touchesCurrent.x -
          y.touchesStart.x +
          y.startX +
          a * (y.width - 2 * d)),
          (y.currentY =
            y.touchesCurrent.y -
            y.touchesStart.y +
            y.startY +
            a * (y.height - 2 * u)),
          y.currentX < y.minX &&
            (y.currentX = y.minX + 1 - ht(y.minX - y.currentX + 1, 0.8)),
          y.currentX > y.maxX &&
            (y.currentX = y.maxX - 1 + ht(y.currentX - y.maxX + 1, 0.8)),
          y.currentY < y.minY &&
            (y.currentY = y.minY + 1 - ht(y.minY - y.currentY + 1, 0.8)),
          y.currentY > y.maxY &&
            (y.currentY = y.maxY - 1 + ht(y.currentY - y.maxY + 1, 0.8)),
          b.prevPositionX || (b.prevPositionX = y.touchesCurrent.x),
          b.prevPositionY || (b.prevPositionY = y.touchesCurrent.y),
          b.prevTime || (b.prevTime = Date.now()),
          (b.x =
            (y.touchesCurrent.x - b.prevPositionX) /
            (Date.now() - b.prevTime) /
            2),
          (b.y =
            (y.touchesCurrent.y - b.prevPositionY) /
            (Date.now() - b.prevTime) /
            2),
          Math.abs(y.touchesCurrent.x - b.prevPositionX) < 2 && (b.x = 0),
          Math.abs(y.touchesCurrent.y - b.prevPositionY) < 2 && (b.y = 0),
          (b.prevPositionX = y.touchesCurrent.x),
          (b.prevPositionY = y.touchesCurrent.y),
          (b.prevTime = Date.now()),
          (v.imageWrapEl.style.transform = `translate3d(${y.currentX}px, ${y.currentY}px,0)`);
      }
      function z() {
        const e = t.zoom;
        v.slideEl &&
          t.activeIndex !== t.slides.indexOf(v.slideEl) &&
          (v.imageEl &&
            (v.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          v.imageWrapEl &&
            (v.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          v.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
          (e.scale = 1),
          (o = 1),
          (v.slideEl = void 0),
          (v.imageEl = void 0),
          (v.imageWrapEl = void 0),
          (v.originX = 0),
          (v.originY = 0));
      }
      function D(e) {
        if (o <= 1 || !v.imageWrapEl || !M(e) || !C(e)) return;
        const t = a.getComputedStyle(v.imageWrapEl).transform,
          r = new a.DOMMatrix(t);
        if (!d)
          return (
            (d = !0),
            (u.x = e.clientX),
            (u.y = e.clientY),
            (y.startX = r.e),
            (y.startY = r.f),
            (y.width = v.imageEl.offsetWidth || v.imageEl.clientWidth),
            (y.height = v.imageEl.offsetHeight || v.imageEl.clientHeight),
            (v.slideWidth = v.slideEl.offsetWidth),
            void (v.slideHeight = v.slideEl.offsetHeight)
          );
        const i = (e.clientX - u.x) * p,
          s = (e.clientY - u.y) * p,
          n = y.width * o,
          l = y.height * o,
          c = v.slideWidth,
          h = v.slideHeight,
          f = Math.min(c / 2 - n / 2, 0),
          m = -f,
          g = Math.min(h / 2 - l / 2, 0),
          w = -g,
          b = Math.max(Math.min(y.startX + i, m), f),
          x = Math.max(Math.min(y.startY + s, w), g);
        (v.imageWrapEl.style.transitionDuration = "0ms"),
          (v.imageWrapEl.style.transform = `translate3d(${b}px, ${x}px, 0)`),
          (u.x = e.clientX),
          (u.y = e.clientY),
          (y.startX = b),
          (y.startY = x),
          (y.currentX = b),
          (y.currentY = x);
      }
      function I(e) {
        const r = t.zoom,
          i = t.params.zoom;
        if (!v.slideEl) {
          e &&
            e.target &&
            (v.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
            v.slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual
                ? (v.slideEl = g(
                    t.slidesEl,
                    `.${t.params.slideActiveClass}`
                  )[0])
                : (v.slideEl = t.slides[t.activeIndex]));
          let r = v.slideEl.querySelector(`.${i.containerClass}`);
          r &&
            (r = r.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (v.imageEl = r),
            (v.imageWrapEl = r
              ? S(v.imageEl, `.${i.containerClass}`)[0]
              : void 0);
        }
        if (!v.imageEl || !v.imageWrapEl) return;
        let s, n, l, c, d, u, p, h, f, m, b, x, E, _, M, C, k, P;
        t.params.cssMode &&
          ((t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.touchAction = "none")),
          v.slideEl.classList.add(`${i.zoomedSlideClass}`),
          void 0 === y.touchesStart.x && e
            ? ((s = e.pageX), (n = e.pageY))
            : ((s = y.touchesStart.x), (n = y.touchesStart.y));
        const A = o,
          O = "number" == typeof e ? e : null;
        1 === o &&
          O &&
          ((s = void 0),
          (n = void 0),
          (y.touchesStart.x = void 0),
          (y.touchesStart.y = void 0));
        const L = T();
        (r.scale = O || L),
          (o = O || L),
          !e || (1 === o && O)
            ? ((p = 0), (h = 0))
            : ((k = v.slideEl.offsetWidth),
              (P = v.slideEl.offsetHeight),
              (l = w(v.slideEl).left + a.scrollX),
              (c = w(v.slideEl).top + a.scrollY),
              (d = l + k / 2 - s),
              (u = c + P / 2 - n),
              (f = v.imageEl.offsetWidth || v.imageEl.clientWidth),
              (m = v.imageEl.offsetHeight || v.imageEl.clientHeight),
              (b = f * r.scale),
              (x = m * r.scale),
              (E = Math.min(k / 2 - b / 2, 0)),
              (_ = Math.min(P / 2 - x / 2, 0)),
              (M = -E),
              (C = -_),
              A > 0 &&
              O &&
              "number" == typeof y.currentX &&
              "number" == typeof y.currentY
                ? ((p = (y.currentX * r.scale) / A),
                  (h = (y.currentY * r.scale) / A))
                : ((p = d * r.scale), (h = u * r.scale)),
              p < E && (p = E),
              p > M && (p = M),
              h < _ && (h = _),
              h > C && (h = C)),
          O && 1 === r.scale && ((v.originX = 0), (v.originY = 0)),
          (y.currentX = p),
          (y.currentY = h),
          (v.imageWrapEl.style.transitionDuration = "300ms"),
          (v.imageWrapEl.style.transform = `translate3d(${p}px, ${h}px,0)`),
          (v.imageEl.style.transitionDuration = "300ms"),
          (v.imageEl.style.transform = `translate3d(0,0,0) scale(${r.scale})`);
      }
      function q() {
        const e = t.zoom,
          r = t.params.zoom;
        if (!v.slideEl) {
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (v.slideEl = g(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
            : (v.slideEl = t.slides[t.activeIndex]);
          let e = v.slideEl.querySelector(`.${r.containerClass}`);
          e &&
            (e = e.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (v.imageEl = e),
            (v.imageWrapEl = e
              ? S(v.imageEl, `.${r.containerClass}`)[0]
              : void 0);
        }
        !v.imageEl ||
          !v.imageWrapEl ||
          (t.params.cssMode &&
            ((t.wrapperEl.style.overflow = ""),
            (t.wrapperEl.style.touchAction = "")),
          (e.scale = 1),
          (o = 1),
          (y.currentX = void 0),
          (y.currentY = void 0),
          (y.touchesStart.x = void 0),
          (y.touchesStart.y = void 0),
          (v.imageWrapEl.style.transitionDuration = "300ms"),
          (v.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          (v.imageEl.style.transitionDuration = "300ms"),
          (v.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          v.slideEl.classList.remove(`${r.zoomedSlideClass}`),
          (v.slideEl = void 0),
          (v.originX = 0),
          (v.originY = 0),
          t.params.zoom.panOnMouseMove &&
            ((u = { x: 0, y: 0 }),
            d && ((d = !1), (y.startX = 0), (y.startY = 0))));
      }
      function $(e) {
        const r = t.zoom;
        r.scale && 1 !== r.scale ? q() : I(e);
      }
      function R() {
        return {
          passiveListener: !!t.params.passiveListeners && {
            passive: !0,
            capture: !1,
          },
          activeListenerWithCapture: !t.params.passiveListeners || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function X() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: r, activeListenerWithCapture: i } = R();
        t.wrapperEl.addEventListener("pointerdown", k, r),
          t.wrapperEl.addEventListener("pointermove", P, i),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.addEventListener(e, A, r);
          }),
          t.wrapperEl.addEventListener("pointermove", L, i);
      }
      function N() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: r, activeListenerWithCapture: i } = R();
        t.wrapperEl.removeEventListener("pointerdown", k, r),
          t.wrapperEl.removeEventListener("pointermove", P, i),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.removeEventListener(e, A, r);
          }),
          t.wrapperEl.removeEventListener("pointermove", L, i);
      }
      Object.defineProperty(t.zoom, "scale", {
        get: () => E,
        set(e) {
          if (E !== e) {
            const t = v.imageEl,
              r = v.slideEl;
            s("zoomChange", e, t, r);
          }
          E = e;
        },
      }),
        i("init", () => {
          t.params.zoom.enabled && X();
        }),
        i("destroy", () => {
          N();
        }),
        i("touchStart", (e, r) => {
          t.zoom.enabled &&
            (function (e) {
              const r = t.device;
              if (!v.imageEl || y.isTouched) return;
              r.android && e.cancelable && e.preventDefault(),
                (y.isTouched = !0);
              const i = m.length > 0 ? m[0] : e;
              (y.touchesStart.x = i.pageX), (y.touchesStart.y = i.pageY);
            })(r);
        }),
        i("touchEnd", (e, r) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (((m.length = 0), !v.imageEl)) return;
              if (!y.isTouched || !y.isMoved)
                return (y.isTouched = !1), void (y.isMoved = !1);
              (y.isTouched = !1), (y.isMoved = !1);
              let r = 300,
                i = 300;
              const s = b.x * r,
                n = y.currentX + s,
                a = b.y * i,
                o = y.currentY + a;
              0 !== b.x && (r = Math.abs((n - y.currentX) / b.x)),
                0 !== b.y && (i = Math.abs((o - y.currentY) / b.y));
              const l = Math.max(r, i);
              (y.currentX = n), (y.currentY = o);
              const c = y.width * e.scale,
                d = y.height * e.scale;
              (y.minX = Math.min(v.slideWidth / 2 - c / 2, 0)),
                (y.maxX = -y.minX),
                (y.minY = Math.min(v.slideHeight / 2 - d / 2, 0)),
                (y.maxY = -y.minY),
                (y.currentX = Math.max(Math.min(y.currentX, y.maxX), y.minX)),
                (y.currentY = Math.max(Math.min(y.currentY, y.maxY), y.minY)),
                (v.imageWrapEl.style.transitionDuration = `${l}ms`),
                (v.imageWrapEl.style.transform = `translate3d(${y.currentX}px, ${y.currentY}px,0)`);
            })();
        }),
        i("doubleTap", (e, r) => {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            $(r);
        }),
        i("transitionEnd", () => {
          t.zoom.enabled && t.params.zoom.enabled && z();
        }),
        i("slideChange", () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && z();
        }),
        Object.assign(t.zoom, {
          enable: X,
          disable: N,
          in: I,
          out: q,
          toggle: $,
        });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i } = e;
      function s(e, t) {
        const r = (function () {
          let e, t, r;
          return (i, s) => {
            for (t = -1, e = i.length; e - t > 1; )
              (r = (e + t) >> 1), i[r] <= s ? (t = r) : (e = r);
            return e;
          };
        })();
        let i, s;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((s = r(this.x, e)),
                (i = s - 1),
                ((e - this.x[i]) * (this.y[s] - this.y[i])) /
                  (this.x[s] - this.x[i]) +
                  this.y[i])
              : 0;
          }),
          this
        );
      }
      function n() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      r({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (t.controller = { control: void 0 }),
        i("beforeInit", () => {
          "undefined" != typeof window &&
          ("string" == typeof t.params.controller.control ||
            t.params.controller.control instanceof HTMLElement)
            ? ("string" == typeof t.params.controller.control
                ? [...document.querySelectorAll(t.params.controller.control)]
                : [t.params.controller.control]
              ).forEach((e) => {
                if (
                  (t.controller.control || (t.controller.control = []),
                  e && e.swiper)
                )
                  t.controller.control.push(e.swiper);
                else if (e) {
                  const r = `${t.params.eventsPrefix}init`,
                    i = (s) => {
                      t.controller.control.push(s.detail[0]),
                        t.update(),
                        e.removeEventListener(r, i);
                    };
                  e.addEventListener(r, i);
                }
              })
            : (t.controller.control = t.params.controller.control);
        }),
        i("update", () => {
          n();
        }),
        i("resize", () => {
          n();
        }),
        i("observerUpdate", () => {
          n();
        }),
        i("setTranslate", (e, r, i) => {
          !t.controller.control ||
            t.controller.control.destroyed ||
            t.controller.setTranslate(r, i);
        }),
        i("setTransition", (e, r, i) => {
          !t.controller.control ||
            t.controller.control.destroyed ||
            t.controller.setTransition(r, i);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, r) {
            const i = t.controller.control;
            let n, a;
            const o = t.constructor;
            function l(e) {
              if (e.destroyed) return;
              const r = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by &&
                ((function (e) {
                  t.controller.spline = t.params.loop
                    ? new s(t.slidesGrid, e.slidesGrid)
                    : new s(t.snapGrid, e.snapGrid);
                })(e),
                (a = -t.controller.spline.interpolate(-r))),
                (!a || "container" === t.params.controller.by) &&
                  ((n =
                    (e.maxTranslate() - e.minTranslate()) /
                    (t.maxTranslate() - t.minTranslate())),
                  (Number.isNaN(n) || !Number.isFinite(n)) && (n = 1),
                  (a = (r - t.minTranslate()) * n + e.minTranslate())),
                t.params.controller.inverse && (a = e.maxTranslate() - a),
                e.updateProgress(a),
                e.setTranslate(a, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(i))
              for (let e = 0; e < i.length; e += 1)
                i[e] !== r && i[e] instanceof o && l(i[e]);
            else i instanceof o && r !== i && l(i);
          },
          setTransition: function (e, r) {
            const i = t.constructor,
              s = t.controller.control;
            let n;
            function a(r) {
              r.destroyed ||
                (r.setTransition(e, t),
                0 !== e &&
                  (r.transitionStart(),
                  r.params.autoHeight &&
                    o(() => {
                      r.updateAutoHeight();
                    }),
                  E(r.wrapperEl, () => {
                    s && r.transitionEnd();
                  })));
            }
            if (Array.isArray(s))
              for (n = 0; n < s.length; n += 1)
                s[n] !== r && s[n] instanceof i && a(s[n]);
            else s instanceof i && r !== s && a(s);
          },
        });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: s } = e;
      r({
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
        (t.a11y = { clicked: !1 });
      let n,
        a,
        o = null,
        l = new Date().getTime();
      function c(e) {
        const t = o;
        0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
      }
      function d(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("tabIndex", "0");
        });
      }
      function u(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function p(e, t) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("role", t);
        });
      }
      function h(e, t) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function f(e, t) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-label", t);
        });
      }
      function m(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function g(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function v(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const r = t.params.a11y,
          i = e.target;
        if (
          !t.pagination ||
          !t.pagination.el ||
          (i !== t.pagination.el && !t.pagination.el.contains(e.target)) ||
          e.target.matches(fe(t.params.pagination.bulletClass))
        ) {
          if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
            const e = T(t.navigation.prevEl);
            T(t.navigation.nextEl).includes(i) &&
              ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd ? c(r.lastSlideMessage) : c(r.nextSlideMessage)),
              e.includes(i) &&
                ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                t.isBeginning ? c(r.firstSlideMessage) : c(r.prevSlideMessage));
          }
          t.pagination &&
            i.matches(fe(t.params.pagination.bulletClass)) &&
            i.click();
        }
      }
      function w() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function b() {
        return w() && t.params.pagination.clickable;
      }
      const S = (e, t, r) => {
          d(e),
            "BUTTON" !== e.tagName &&
              (p(e, "button"), e.addEventListener("keydown", v)),
            f(e, r),
            (function (e, t) {
              (e = T(e)).forEach((e) => {
                e.setAttribute("aria-controls", t);
              });
            })(e, t);
        },
        E = (e) => {
          a && a !== e.target && !a.contains(e.target) && (n = !0),
            (t.a11y.clicked = !0);
        },
        _ = () => {
          (n = !1),
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1);
              });
            });
        },
        M = (e) => {
          l = new Date().getTime();
        },
        C = (e) => {
          if (
            t.a11y.clicked ||
            !t.params.a11y.scrollOnFocus ||
            new Date().getTime() - l < 100
          )
            return;
          const r = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
          if (!r || !t.slides.includes(r)) return;
          a = r;
          const i = t.slides.indexOf(r) === t.activeIndex,
            s =
              t.params.watchSlidesProgress &&
              t.visibleSlides &&
              t.visibleSlides.includes(r);
          i ||
            s ||
            (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
            (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
            requestAnimationFrame(() => {
              n ||
                (t.params.loop
                  ? t.slideToLoop(
                      parseInt(r.getAttribute("data-swiper-slide-index")),
                      0
                    )
                  : t.slideTo(t.slides.indexOf(r), 0),
                (n = !1));
            }));
        },
        k = () => {
          const e = t.params.a11y;
          e.itemRoleDescriptionMessage &&
            h(t.slides, e.itemRoleDescriptionMessage),
            e.slideRole && p(t.slides, e.slideRole);
          const r = t.slides.length;
          e.slideLabelMessage &&
            t.slides.forEach((i, s) => {
              const n = t.params.loop
                ? parseInt(i.getAttribute("data-swiper-slide-index"), 10)
                : s;
              f(
                i,
                e.slideLabelMessage
                  .replace(/\{\{index\}\}/, n + 1)
                  .replace(/\{\{slidesLength\}\}/, r)
              );
            });
        },
        P = () => {
          const e = t.params.a11y;
          t.el.append(o);
          const r = t.el;
          e.containerRoleDescriptionMessage &&
            h(r, e.containerRoleDescriptionMessage),
            e.containerMessage && f(r, e.containerMessage),
            e.containerRole && p(r, e.containerRole);
          const s = t.wrapperEl,
            n =
              e.id ||
              s.getAttribute("id") ||
              `swiper-wrapper-${(function (e) {
                return "x"
                  .repeat(e)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  );
              })(16)}`,
            a =
              t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          (function (e, t) {
            (e = T(e)).forEach((e) => {
              e.setAttribute("id", t);
            });
          })(s, n),
            (function (e, t) {
              (e = T(e)).forEach((e) => {
                e.setAttribute("aria-live", t);
              });
            })(s, a),
            k();
          let { nextEl: l, prevEl: c } = t.navigation ? t.navigation : {};
          (l = T(l)),
            (c = T(c)),
            l && l.forEach((t) => S(t, n, e.nextSlideMessage)),
            c && c.forEach((t) => S(t, n, e.prevSlideMessage)),
            b() &&
              T(t.pagination.el).forEach((e) => {
                e.addEventListener("keydown", v);
              }),
            i().addEventListener("visibilitychange", M),
            t.el.addEventListener("focus", C, !0),
            t.el.addEventListener("focus", C, !0),
            t.el.addEventListener("pointerdown", E, !0),
            t.el.addEventListener("pointerup", _, !0);
        };
      s("beforeInit", () => {
        (o = y("span", t.params.a11y.notificationClass)),
          o.setAttribute("aria-live", "assertive"),
          o.setAttribute("aria-atomic", "true");
      }),
        s("afterInit", () => {
          t.params.a11y.enabled && P();
        }),
        s(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            t.params.a11y.enabled && k();
          }
        ),
        s("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { nextEl: e, prevEl: r } = t.navigation;
              r && (t.isBeginning ? (m(r), u(r)) : (g(r), d(r))),
                e && (t.isEnd ? (m(e), u(e)) : (g(e), d(e)));
            })();
        }),
        s("paginationUpdate", () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              w() &&
                t.pagination.bullets.forEach((r) => {
                  t.params.pagination.clickable &&
                    (d(r),
                    t.params.pagination.renderBullet ||
                      (p(r, "button"),
                      f(
                        r,
                        e.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          x(r) + 1
                        )
                      ))),
                    r.matches(fe(t.params.pagination.bulletActiveClass))
                      ? r.setAttribute("aria-current", "true")
                      : r.removeAttribute("aria-current");
                });
            })();
        }),
        s("destroy", () => {
          t.params.a11y.enabled &&
            (function () {
              o && o.remove();
              let { nextEl: e, prevEl: r } = t.navigation ? t.navigation : {};
              (e = T(e)),
                (r = T(r)),
                e && e.forEach((e) => e.removeEventListener("keydown", v)),
                r && r.forEach((e) => e.removeEventListener("keydown", v)),
                b() &&
                  T(t.pagination.el).forEach((e) => {
                    e.removeEventListener("keydown", v);
                  }),
                i().removeEventListener("visibilitychange", M),
                t.el &&
                  "string" != typeof t.el &&
                  (t.el.removeEventListener("focus", C, !0),
                  t.el.removeEventListener("pointerdown", E, !0),
                  t.el.removeEventListener("pointerup", _, !0));
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i } = e;
      r({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1,
        },
      });
      let s = !1,
        a = {};
      const o = (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        l = (e) => {
          const t = n();
          let r;
          r = e ? new URL(e) : t.location;
          const i = r.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            s = i.length;
          return { key: i[s - 2], value: i[s - 1] };
        },
        c = (e, r) => {
          const i = n();
          if (!s || !t.params.history.enabled) return;
          let a;
          a = t.params.url ? new URL(t.params.url) : i.location;
          const l =
            t.virtual && t.params.virtual.enabled
              ? t.slidesEl.querySelector(`[data-swiper-slide-index="${r}"]`)
              : t.slides[r];
          let c = o(l.getAttribute("data-history"));
          if (t.params.history.root.length > 0) {
            let r = t.params.history.root;
            "/" === r[r.length - 1] && (r = r.slice(0, r.length - 1)),
              (c = `${r}/${e ? `${e}/` : ""}${c}`);
          } else a.pathname.includes(e) || (c = `${e ? `${e}/` : ""}${c}`);
          t.params.history.keepQuery && (c += a.search);
          const d = i.history.state;
          (d && d.value === c) ||
            (t.params.history.replaceState
              ? i.history.replaceState({ value: c }, null, c)
              : i.history.pushState({ value: c }, null, c));
        },
        d = (e, r, i) => {
          if (r)
            for (let s = 0, n = t.slides.length; s < n; s += 1) {
              const n = t.slides[s];
              if (o(n.getAttribute("data-history")) === r) {
                const r = t.getSlideIndex(n);
                t.slideTo(r, e, i);
              }
            }
          else t.slideTo(0, e, i);
        },
        u = () => {
          (a = l(t.params.url)), d(t.params.speed, a.value, !1);
        };
      i("init", () => {
        t.params.history.enabled &&
          (() => {
            const e = n();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              if (((s = !0), (a = l(t.params.url)), !a.key && !a.value))
                return void (
                  t.params.history.replaceState ||
                  e.addEventListener("popstate", u)
                );
              d(0, a.value, t.params.runCallbacksOnInit),
                t.params.history.replaceState ||
                  e.addEventListener("popstate", u);
            }
          })();
      }),
        i("destroy", () => {
          t.params.history.enabled &&
            (() => {
              const e = n();
              t.params.history.replaceState ||
                e.removeEventListener("popstate", u);
            })();
        }),
        i("transitionEnd _freeModeNoMomentumRelease", () => {
          s && c(t.params.history.key, t.activeIndex);
        }),
        i("slideChange", () => {
          s && t.params.cssMode && c(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: r, emit: s, on: a } = e,
        o = !1;
      const l = i(),
        c = n();
      r({
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1,
          getSlideIndex(e, r) {
            if (t.virtual && t.params.virtual.enabled) {
              const e = t.slides.find((e) => e.getAttribute("data-hash") === r);
              return e
                ? parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                : 0;
            }
            return t.getSlideIndex(
              g(
                t.slidesEl,
                `.${t.params.slideClass}[data-hash="${r}"], swiper-slide[data-hash="${r}"]`
              )[0]
            );
          },
        },
      });
      const d = () => {
          s("hashChange");
          const e = l.location.hash.replace("#", ""),
            r =
              t.virtual && t.params.virtual.enabled
                ? t.slidesEl.querySelector(
                    `[data-swiper-slide-index="${t.activeIndex}"]`
                  )
                : t.slides[t.activeIndex];
          if (e !== (r ? r.getAttribute("data-hash") : "")) {
            const r = t.params.hashNavigation.getSlideIndex(t, e);
            if (void 0 === r || Number.isNaN(r)) return;
            t.slideTo(r);
          }
        },
        u = () => {
          if (!o || !t.params.hashNavigation.enabled) return;
          const e =
              t.virtual && t.params.virtual.enabled
                ? t.slidesEl.querySelector(
                    `[data-swiper-slide-index="${t.activeIndex}"]`
                  )
                : t.slides[t.activeIndex],
            r = e
              ? e.getAttribute("data-hash") || e.getAttribute("data-history")
              : "";
          t.params.hashNavigation.replaceState &&
          c.history &&
          c.history.replaceState
            ? (c.history.replaceState(null, null, `#${r}` || ""), s("hashSet"))
            : ((l.location.hash = r || ""), s("hashSet"));
        };
      a("init", () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (
              !t.params.hashNavigation.enabled ||
              (t.params.history && t.params.history.enabled)
            )
              return;
            o = !0;
            const e = l.location.hash.replace("#", "");
            if (e) {
              const r = t.params.hashNavigation.getSlideIndex(t, e);
              t.slideTo(r || 0, 0, t.params.runCallbacksOnInit, !0);
            }
            t.params.hashNavigation.watchState &&
              c.addEventListener("hashchange", d);
          })();
      }),
        a("destroy", () => {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            c.removeEventListener("hashchange", d);
        }),
        a("transitionEnd _freeModeNoMomentumRelease", () => {
          o && u();
        }),
        a("slideChange", () => {
          o && t.params.cssMode && u();
        });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: s, emit: n, params: a } = e;
      (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        r({
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
      let o,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        m,
        g,
        v = a && a.autoplay ? a.autoplay.delay : 3e3,
        y = a && a.autoplay ? a.autoplay.delay : 3e3,
        w = new Date().getTime();
      function b(e) {
        !t ||
          t.destroyed ||
          !t.wrapperEl ||
          (e.target === t.wrapperEl &&
            (t.wrapperEl.removeEventListener("transitionend", b),
            !(g || (e.detail && e.detail.bySwiperTouchMove)) && M()));
      }
      const x = () => {
          if (t.destroyed || !t.autoplay.running) return;
          t.autoplay.paused ? (d = !0) : d && ((y = c), (d = !1));
          const e = t.autoplay.paused ? c : w + y - new Date().getTime();
          (t.autoplay.timeLeft = e),
            n("autoplayTimeLeft", e, e / v),
            (l = requestAnimationFrame(() => {
              x();
            }));
        },
        S = (e) => {
          if (t.destroyed || !t.autoplay.running) return;
          cancelAnimationFrame(l), x();
          let r = void 0 === e ? t.params.autoplay.delay : e;
          (v = t.params.autoplay.delay), (y = t.params.autoplay.delay);
          const i = (() => {
            let e;
            return (
              (e =
                t.virtual && t.params.virtual.enabled
                  ? t.slides.find((e) =>
                      e.classList.contains("swiper-slide-active")
                    )
                  : t.slides[t.activeIndex]),
              e ? parseInt(e.getAttribute("data-swiper-autoplay"), 10) : void 0
            );
          })();
          !Number.isNaN(i) &&
            i > 0 &&
            void 0 === e &&
            ((r = i), (v = i), (y = i)),
            (c = r);
          const s = t.params.speed,
            a = () => {
              !t ||
                t.destroyed ||
                (t.params.autoplay.reverseDirection
                  ? !t.isBeginning || t.params.loop || t.params.rewind
                    ? (t.slidePrev(s, !0, !0), n("autoplay"))
                    : t.params.autoplay.stopOnLastSlide ||
                      (t.slideTo(t.slides.length - 1, s, !0, !0), n("autoplay"))
                  : !t.isEnd || t.params.loop || t.params.rewind
                  ? (t.slideNext(s, !0, !0), n("autoplay"))
                  : t.params.autoplay.stopOnLastSlide ||
                    (t.slideTo(0, s, !0, !0), n("autoplay")),
                t.params.cssMode &&
                  ((w = new Date().getTime()),
                  requestAnimationFrame(() => {
                    S();
                  })));
            };
          return (
            r > 0
              ? (clearTimeout(o),
                (o = setTimeout(() => {
                  a();
                }, r)))
              : requestAnimationFrame(() => {
                  a();
                }),
            r
          );
        },
        E = () => {
          (w = new Date().getTime()),
            (t.autoplay.running = !0),
            S(),
            n("autoplayStart");
        },
        _ = () => {
          (t.autoplay.running = !1),
            clearTimeout(o),
            cancelAnimationFrame(l),
            n("autoplayStop");
        },
        T = (e, r) => {
          if (t.destroyed || !t.autoplay.running) return;
          clearTimeout(o), e || (m = !0);
          const i = () => {
            n("autoplayPause"),
              t.params.autoplay.waitForTransition
                ? t.wrapperEl.addEventListener("transitionend", b)
                : M();
          };
          if (((t.autoplay.paused = !0), r))
            return f && (c = t.params.autoplay.delay), (f = !1), void i();
          (c = (c || t.params.autoplay.delay) - (new Date().getTime() - w)),
            (!(t.isEnd && c < 0) || t.params.loop) && (c < 0 && (c = 0), i());
        },
        M = () => {
          (t.isEnd && c < 0 && !t.params.loop) ||
            t.destroyed ||
            !t.autoplay.running ||
            ((w = new Date().getTime()),
            m ? ((m = !1), S(c)) : S(),
            (t.autoplay.paused = !1),
            n("autoplayResume"));
        },
        C = () => {
          if (t.destroyed || !t.autoplay.running) return;
          const e = i();
          "hidden" === e.visibilityState && ((m = !0), T(!0)),
            "visible" === e.visibilityState && M();
        },
        k = (e) => {
          "mouse" === e.pointerType &&
            ((m = !0), (g = !0), !t.animating && !t.autoplay.paused && T(!0));
        },
        P = (e) => {
          "mouse" === e.pointerType && ((g = !1), t.autoplay.paused && M());
        };
      s("init", () => {
        t.params.autoplay.enabled &&
          (t.params.autoplay.pauseOnMouseEnter &&
            (t.el.addEventListener("pointerenter", k),
            t.el.addEventListener("pointerleave", P)),
          i().addEventListener("visibilitychange", C),
          E());
      }),
        s("destroy", () => {
          t.el &&
            "string" != typeof t.el &&
            (t.el.removeEventListener("pointerenter", k),
            t.el.removeEventListener("pointerleave", P)),
            i().removeEventListener("visibilitychange", C),
            t.autoplay.running && _();
        }),
        s("_freeModeStaticRelease", () => {
          (p || m) && M();
        }),
        s("_freeModeNoMomentumRelease", () => {
          t.params.autoplay.disableOnInteraction ? _() : T(!0, !0);
        }),
        s("beforeTransitionStart", (e, r, i) => {
          t.destroyed ||
            !t.autoplay.running ||
            (i || !t.params.autoplay.disableOnInteraction ? T(!0, !0) : _());
        }),
        s("sliderFirstMove", () => {
          if (!t.destroyed && t.autoplay.running) {
            if (t.params.autoplay.disableOnInteraction) return void _();
            (u = !0),
              (p = !1),
              (m = !1),
              (h = setTimeout(() => {
                (m = !0), (p = !0), T(!0);
              }, 200));
          }
        }),
        s("touchEnd", () => {
          if (!t.destroyed && t.autoplay.running && u) {
            if (
              (clearTimeout(h),
              clearTimeout(o),
              t.params.autoplay.disableOnInteraction)
            )
              return (p = !1), void (u = !1);
            p && t.params.cssMode && M(), (p = !1), (u = !1);
          }
        }),
        s("slideChange", () => {
          t.destroyed || !t.autoplay.running || (f = !0);
        }),
        Object.assign(t.autoplay, { start: E, stop: _, pause: T, resume: M });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: s } = e;
      r({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let n = !1,
        a = !1;
      function o() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const r = e.clickedIndex,
          i = e.clickedSlide;
        if (
          (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass)) ||
          null == r
        )
          return;
        let s;
        (s = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : r),
          t.params.loop ? t.slideToLoop(s) : t.slideTo(s);
      }
      function l() {
        const { thumbs: e } = t.params;
        if (n) return !1;
        n = !0;
        const r = t.constructor;
        if (e.swiper instanceof r) {
          if (e.swiper.destroyed) return (n = !1), !1;
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update();
        } else if (d(e.swiper)) {
          const i = Object.assign({}, e.swiper);
          Object.assign(i, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new r(i)),
            (a = !0);
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass
          ),
          t.thumbs.swiper.on("tap", o),
          !0
        );
      }
      function c(e) {
        const r = t.thumbs.swiper;
        if (!r || r.destroyed) return;
        const i =
          "auto" === r.params.slidesPerView
            ? r.slidesPerViewDynamic()
            : r.params.slidesPerView;
        let s = 1;
        const n = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (s = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (s = 1),
          (s = Math.floor(s)),
          r.slides.forEach((e) => e.classList.remove(n)),
          r.params.loop || (r.params.virtual && r.params.virtual.enabled))
        )
          for (let e = 0; e < s; e += 1)
            g(
              r.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`
            ).forEach((e) => {
              e.classList.add(n);
            });
        else
          for (let e = 0; e < s; e += 1)
            r.slides[t.realIndex + e] &&
              r.slides[t.realIndex + e].classList.add(n);
        const a = t.params.thumbs.autoScrollOffset,
          o = a && !r.params.loop;
        if (t.realIndex !== r.realIndex || o) {
          const s = r.activeIndex;
          let n, l;
          if (r.params.loop) {
            const e = r.slides.find(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`
            );
            (n = r.slides.indexOf(e)),
              (l = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (n = t.realIndex), (l = n > t.previousIndex ? "next" : "prev");
          o && (n += "next" === l ? a : -1 * a),
            r.visibleSlidesIndexes &&
              r.visibleSlidesIndexes.indexOf(n) < 0 &&
              (r.params.centeredSlides
                ? (n =
                    n > s
                      ? n - Math.floor(i / 2) + 1
                      : n + Math.floor(i / 2) - 1)
                : n > s && r.params.slidesPerGroup,
              r.slideTo(n, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        s("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const r = i(),
                s = () => {
                  const i =
                    "string" == typeof e.swiper
                      ? r.querySelector(e.swiper)
                      : e.swiper;
                  if (i && i.swiper) (e.swiper = i.swiper), l(), c(!0);
                  else if (i) {
                    const r = `${t.params.eventsPrefix}init`,
                      s = (n) => {
                        (e.swiper = n.detail[0]),
                          i.removeEventListener(r, s),
                          l(),
                          c(!0),
                          e.swiper.update(),
                          t.update();
                      };
                    i.addEventListener(r, s);
                  }
                  return i;
                },
                n = () => {
                  t.destroyed || s() || requestAnimationFrame(n);
                };
              requestAnimationFrame(n);
            } else l(), c(!0);
        }),
        s("slideChange update resize observerUpdate", () => {
          c();
        }),
        s("setTransition", (e, r) => {
          const i = t.thumbs.swiper;
          !i || i.destroyed || i.setTransition(r);
        }),
        s("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          !e || e.destroyed || (a && e.destroy());
        }),
        Object.assign(t.thumbs, { init: l, update: c });
    },
    function (e) {
      let { swiper: t, extendParams: r, emit: i, once: s } = e;
      r({
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
      }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e),
                t.setTransition(0),
                (t.touchEventsData.velocities.length = 0),
                t.freeMode.onTouchEnd({
                  currentPos: t.rtl ? t.translate : -t.translate,
                });
            },
            onTouchMove: function () {
              if (t.params.cssMode) return;
              const { touchEventsData: e, touches: r } = t;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: r[t.isHorizontal() ? "startX" : "startY"],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: r[t.isHorizontal() ? "currentX" : "currentY"],
                  time: l(),
                });
            },
            onTouchEnd: function (e) {
              let { currentPos: r } = e;
              if (t.params.cssMode) return;
              const {
                  params: n,
                  wrapperEl: a,
                  rtlTranslate: o,
                  snapGrid: c,
                  touchEventsData: d,
                } = t,
                u = l() - d.touchStartTime;
              if (r < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (r > -t.maxTranslate())
                t.slides.length < c.length
                  ? t.slideTo(c.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (n.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const e = d.velocities.pop(),
                      r = d.velocities.pop(),
                      i = e.position - r.position,
                      s = e.time - r.time;
                    (t.velocity = i / s),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < n.freeMode.minimumVelocity &&
                        (t.velocity = 0),
                      (s > 150 || l() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= n.freeMode.momentumVelocityRatio),
                    (d.velocities.length = 0);
                  let e = 1e3 * n.freeMode.momentumRatio;
                  const r = t.velocity * e;
                  let u = t.translate + r;
                  o && (u = -u);
                  let p,
                    h = !1;
                  const f =
                    20 * Math.abs(t.velocity) * n.freeMode.momentumBounceRatio;
                  let m;
                  if (u < t.maxTranslate())
                    n.freeMode.momentumBounce
                      ? (u + t.maxTranslate() < -f &&
                          (u = t.maxTranslate() - f),
                        (p = t.maxTranslate()),
                        (h = !0),
                        (d.allowMomentumBounce = !0))
                      : (u = t.maxTranslate()),
                      n.loop && n.centeredSlides && (m = !0);
                  else if (u > t.minTranslate())
                    n.freeMode.momentumBounce
                      ? (u - t.minTranslate() > f && (u = t.minTranslate() + f),
                        (p = t.minTranslate()),
                        (h = !0),
                        (d.allowMomentumBounce = !0))
                      : (u = t.minTranslate()),
                      n.loop && n.centeredSlides && (m = !0);
                  else if (n.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < c.length; t += 1)
                      if (c[t] > -u) {
                        e = t;
                        break;
                      }
                    (u =
                      Math.abs(c[e] - u) < Math.abs(c[e - 1] - u) ||
                      "next" === t.swipeDirection
                        ? c[e]
                        : c[e - 1]),
                      (u = -u);
                  }
                  if (
                    (m &&
                      s("transitionEnd", () => {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  ) {
                    if (
                      ((e = o
                        ? Math.abs((-u - t.translate) / t.velocity)
                        : Math.abs((u - t.translate) / t.velocity)),
                      n.freeMode.sticky)
                    ) {
                      const r = Math.abs((o ? -u : u) - t.translate),
                        i = t.slidesSizesGrid[t.activeIndex];
                      e =
                        r < i
                          ? n.speed
                          : r < 2 * i
                          ? 1.5 * n.speed
                          : 2.5 * n.speed;
                    }
                  } else if (n.freeMode.sticky) return void t.slideToClosest();
                  n.freeMode.momentumBounce && h
                    ? (t.updateProgress(p),
                      t.setTransition(e),
                      t.setTranslate(u),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      E(a, () => {
                        !t ||
                          t.destroyed ||
                          !d.allowMomentumBounce ||
                          (i("momentumBounce"),
                          t.setTransition(n.speed),
                          setTimeout(() => {
                            t.setTranslate(p),
                              E(a, () => {
                                !t || t.destroyed || t.transitionEnd();
                              });
                          }, 0));
                      }))
                    : t.velocity
                    ? (i("_freeModeNoMomentumRelease"),
                      t.updateProgress(u),
                      t.setTransition(e),
                      t.setTranslate(u),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        E(a, () => {
                          !t || t.destroyed || t.transitionEnd();
                        })))
                    : t.updateProgress(u),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (n.freeMode.sticky) return void t.slideToClosest();
                  n.freeMode && i("_freeModeNoMomentumRelease");
                }
                (!n.freeMode.momentum || u >= n.longSwipesMs) &&
                  (i("_freeModeStaticRelease"),
                  t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      let t,
        r,
        i,
        s,
        { swiper: n, extendParams: a, on: o } = e;
      a({ grid: { rows: 1, fill: "column" } });
      const l = () => {
        let e = n.params.spaceBetween;
        return (
          "string" == typeof e && e.indexOf("%") >= 0
            ? (e = (parseFloat(e.replace("%", "")) / 100) * n.size)
            : "string" == typeof e && (e = parseFloat(e)),
          e
        );
      };
      o("init", () => {
        s = n.params.grid && n.params.grid.rows > 1;
      }),
        o("update", () => {
          const { params: e, el: t } = n,
            r = e.grid && e.grid.rows > 1;
          s && !r
            ? (t.classList.remove(
                `${e.containerModifierClass}grid`,
                `${e.containerModifierClass}grid-column`
              ),
              (i = 1),
              n.emitContainerClasses())
            : !s &&
              r &&
              (t.classList.add(`${e.containerModifierClass}grid`),
              "column" === e.grid.fill &&
                t.classList.add(`${e.containerModifierClass}grid-column`),
              n.emitContainerClasses()),
            (s = r);
        }),
        (n.grid = {
          initSlides: (e) => {
            const { slidesPerView: s } = n.params,
              { rows: a, fill: o } = n.params.grid,
              l =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : e.length;
            (i = Math.floor(l / a)),
              (t = Math.floor(l / a) === l / a ? l : Math.ceil(l / a) * a),
              "auto" !== s && "row" === o && (t = Math.max(t, s * a)),
              (r = t / a);
          },
          unsetSlides: () => {
            n.slides &&
              n.slides.forEach((e) => {
                e.swiperSlideGridSet &&
                  ((e.style.height = ""),
                  (e.style[n.getDirectionLabel("margin-top")] = ""));
              });
          },
          updateSlide: (e, s, a) => {
            const { slidesPerGroup: o } = n.params,
              c = l(),
              { rows: d, fill: u } = n.params.grid,
              p =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : a.length;
            let h, f, m;
            if ("row" === u && o > 1) {
              const r = Math.floor(e / (o * d)),
                i = e - d * o * r,
                n = 0 === r ? o : Math.min(Math.ceil((p - r * d * o) / d), o);
              (m = Math.floor(i / n)),
                (f = i - m * n + r * o),
                (h = f + (m * t) / d),
                (s.style.order = h);
            } else
              "column" === u
                ? ((f = Math.floor(e / d)),
                  (m = e - f * d),
                  (f > i || (f === i && m === d - 1)) &&
                    ((m += 1), m >= d && ((m = 0), (f += 1))))
                : ((m = Math.floor(e / r)), (f = e - m * r));
            (s.row = m),
              (s.column = f),
              (s.style.height = `calc((100% - ${(d - 1) * c}px) / ${d})`),
              (s.style[n.getDirectionLabel("margin-top")] =
                0 !== m ? c && `${c}px` : ""),
              (s.swiperSlideGridSet = !0);
          },
          updateWrapperSize: (e, r) => {
            const { centeredSlides: i, roundLengths: s } = n.params,
              a = l(),
              { rows: o } = n.params.grid;
            if (
              ((n.virtualSize = (e + a) * t),
              (n.virtualSize = Math.ceil(n.virtualSize / o) - a),
              n.params.cssMode ||
                (n.wrapperEl.style[n.getDirectionLabel("width")] = `${
                  n.virtualSize + a
                }px`),
              i)
            ) {
              const e = [];
              for (let t = 0; t < r.length; t += 1) {
                let i = r[t];
                s && (i = Math.floor(i)),
                  r[t] < n.virtualSize + r[0] && e.push(i);
              }
              r.splice(0, r.length), r.push(...e);
            }
          },
        });
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, {
        appendSlide: me.bind(t),
        prependSlide: ge.bind(t),
        addSlide: ve.bind(t),
        removeSlide: ye.bind(t),
        removeAllSlides: we.bind(t),
      });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i } = e;
      r({ fadeEffect: { crossFade: !1 } }),
        be({
          effect: "fade",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e } = t;
            t.params.fadeEffect;
            for (let r = 0; r < e.length; r += 1) {
              const e = t.slides[r];
              let i = -e.swiperSlideOffset;
              t.params.virtualTranslate || (i -= t.translate);
              let s = 0;
              t.isHorizontal() || ((s = i), (i = 0));
              const n = t.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(e.progress), 0)
                  : 1 + Math.min(Math.max(e.progress, -1), 0),
                a = xe(0, e);
              (a.style.opacity = n),
                (a.style.transform = `translate3d(${i}px, ${s}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const r = t.slides.map((e) => m(e));
            r.forEach((t) => {
              t.style.transitionDuration = `${e}ms`;
            }),
              Se({
                swiper: t,
                duration: e,
                transformElements: r,
                allSlides: !0,
              });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i } = e;
      r({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const s = (e, t, r) => {
        let i = r
            ? e.querySelector(".swiper-slide-shadow-left")
            : e.querySelector(".swiper-slide-shadow-top"),
          s = r
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        i ||
          ((i = y(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (r ? "left" : "top")
            ).split(" ")
          )),
          e.append(i)),
          s ||
            ((s = y(
              "div",
              (
                "swiper-slide-shadow-cube swiper-slide-shadow-" +
                (r ? "right" : "bottom")
              ).split(" ")
            )),
            e.append(s)),
          i && (i.style.opacity = Math.max(-t, 0)),
          s && (s.style.opacity = Math.max(t, 0));
      };
      be({
        effect: "cube",
        swiper: t,
        on: i,
        setTranslate: () => {
          const {
              el: e,
              wrapperEl: r,
              slides: i,
              width: n,
              height: a,
              rtlTranslate: o,
              size: l,
              browser: c,
            } = t,
            d = M(t),
            u = t.params.cubeEffect,
            p = t.isHorizontal(),
            h = t.virtual && t.params.virtual.enabled;
          let f,
            m = 0;
          u.shadow &&
            (p
              ? ((f = t.wrapperEl.querySelector(".swiper-cube-shadow")),
                f ||
                  ((f = y("div", "swiper-cube-shadow")), t.wrapperEl.append(f)),
                (f.style.height = `${n}px`))
              : ((f = e.querySelector(".swiper-cube-shadow")),
                f || ((f = y("div", "swiper-cube-shadow")), e.append(f))));
          for (let e = 0; e < i.length; e += 1) {
            const t = i[e];
            let r = e;
            h && (r = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
            let n = 90 * r,
              a = Math.floor(n / 360);
            o && ((n = -n), (a = Math.floor(-n / 360)));
            const c = Math.max(Math.min(t.progress, 1), -1);
            let f = 0,
              g = 0,
              v = 0;
            r % 4 == 0
              ? ((f = 4 * -a * l), (v = 0))
              : (r - 1) % 4 == 0
              ? ((f = 0), (v = 4 * -a * l))
              : (r - 2) % 4 == 0
              ? ((f = l + 4 * a * l), (v = l))
              : (r - 3) % 4 == 0 && ((f = -l), (v = 3 * l + 4 * l * a)),
              o && (f = -f),
              p || ((g = f), (f = 0));
            const y = `rotateX(${d(p ? 0 : -n)}deg) rotateY(${d(
              p ? n : 0
            )}deg) translate3d(${f}px, ${g}px, ${v}px)`;
            c <= 1 &&
              c > -1 &&
              ((m = 90 * r + 90 * c), o && (m = 90 * -r - 90 * c)),
              (t.style.transform = y),
              u.slideShadows && s(t, c, p);
          }
          if (
            ((r.style.transformOrigin = `50% 50% -${l / 2}px`),
            (r.style["-webkit-transform-origin"] = `50% 50% -${l / 2}px`),
            u.shadow)
          )
            if (p)
              f.style.transform = `translate3d(0px, ${
                n / 2 + u.shadowOffset
              }px, ${-n / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
                u.shadowScale
              })`;
            else {
              const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                r = u.shadowScale,
                i = u.shadowScale / t,
                s = u.shadowOffset;
              f.style.transform = `scale3d(${r}, 1, ${i}) translate3d(0px, ${
                a / 2 + s
              }px, ${-a / 2 / i}px) rotateX(-89.99deg)`;
            }
          const g =
            (c.isSafari || c.isWebView) && c.needPerspectiveFix ? -l / 2 : 0;
          (r.style.transform = `translate3d(0px,0,${g}px) rotateX(${d(
            t.isHorizontal() ? 0 : m
          )}deg) rotateY(${d(t.isHorizontal() ? -m : 0)}deg)`),
            r.style.setProperty("--swiper-cube-translate-z", `${g}px`);
        },
        setTransition: (e) => {
          const { el: r, slides: i } = t;
          if (
            (i.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
            }),
            t.params.cubeEffect.shadow && !t.isHorizontal())
          ) {
            const t = r.querySelector(".swiper-cube-shadow");
            t && (t.style.transitionDuration = `${e}ms`);
          }
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.forEach((t) => {
            const r = Math.max(Math.min(t.progress, 1), -1);
            s(t, r, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
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
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i } = e;
      r({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
      const s = (e, r) => {
        let i = t.isHorizontal()
            ? e.querySelector(".swiper-slide-shadow-left")
            : e.querySelector(".swiper-slide-shadow-top"),
          s = t.isHorizontal()
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        i || (i = Ee("flip", e, t.isHorizontal() ? "left" : "top")),
          s || (s = Ee("flip", e, t.isHorizontal() ? "right" : "bottom")),
          i && (i.style.opacity = Math.max(-r, 0)),
          s && (s.style.opacity = Math.max(r, 0));
      };
      be({
        effect: "flip",
        swiper: t,
        on: i,
        setTranslate: () => {
          const { slides: e, rtlTranslate: r } = t,
            i = t.params.flipEffect,
            n = M(t);
          for (let a = 0; a < e.length; a += 1) {
            const o = e[a];
            let l = o.progress;
            t.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(o.progress, 1), -1));
            const c = o.swiperSlideOffset;
            let d = -180 * l,
              u = 0,
              p = t.params.cssMode ? -c - t.translate : -c,
              h = 0;
            t.isHorizontal()
              ? r && (d = -d)
              : ((h = p), (p = 0), (u = -d), (d = 0)),
              (o.style.zIndex = -Math.abs(Math.round(l)) + e.length),
              i.slideShadows && s(o, l);
            const f = `translate3d(${p}px, ${h}px, 0px) rotateX(${n(
              u
            )}deg) rotateY(${n(d)}deg)`;
            xe(0, o).style.transform = f;
          }
        },
        setTransition: (e) => {
          const r = t.slides.map((e) => m(e));
          r.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
          }),
            Se({ swiper: t, duration: e, transformElements: r });
        },
        recreateShadows: () => {
          t.params.flipEffect,
            t.slides.forEach((e) => {
              let r = e.progress;
              t.params.flipEffect.limitRotation &&
                (r = Math.max(Math.min(e.progress, 1), -1)),
                s(e, r);
            });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i } = e;
      r({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
        },
      }),
        be({
          effect: "coverflow",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { width: e, height: r, slides: i, slidesSizesGrid: s } = t,
              n = t.params.coverflowEffect,
              a = t.isHorizontal(),
              o = t.translate,
              l = a ? e / 2 - o : r / 2 - o,
              c = a ? n.rotate : -n.rotate,
              d = n.depth,
              u = M(t);
            for (let e = 0, t = i.length; e < t; e += 1) {
              const t = i[e],
                r = s[e],
                o = (l - t.swiperSlideOffset - r / 2) / r,
                p =
                  "function" == typeof n.modifier
                    ? n.modifier(o)
                    : o * n.modifier;
              let h = a ? c * p : 0,
                f = a ? 0 : c * p,
                m = -d * Math.abs(p),
                g = n.stretch;
              "string" == typeof g &&
                -1 !== g.indexOf("%") &&
                (g = (parseFloat(n.stretch) / 100) * r);
              let v = a ? 0 : g * p,
                y = a ? g * p : 0,
                w = 1 - (1 - n.scale) * Math.abs(p);
              Math.abs(y) < 0.001 && (y = 0),
                Math.abs(v) < 0.001 && (v = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(f) < 0.001 && (f = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${y}px,${v}px,${m}px)  rotateX(${u(
                f
              )}deg) rotateY(${u(h)}deg) scale(${w})`;
              if (
                ((xe(0, t).style.transform = b),
                (t.style.zIndex = 1 - Math.abs(Math.round(p))),
                n.slideShadows)
              ) {
                let e = a
                    ? t.querySelector(".swiper-slide-shadow-left")
                    : t.querySelector(".swiper-slide-shadow-top"),
                  r = a
                    ? t.querySelector(".swiper-slide-shadow-right")
                    : t.querySelector(".swiper-slide-shadow-bottom");
                e || (e = Ee("coverflow", t, a ? "left" : "top")),
                  r || (r = Ee("coverflow", t, a ? "right" : "bottom")),
                  e && (e.style.opacity = p > 0 ? p : 0),
                  r && (r.style.opacity = -p > 0 ? -p : 0);
              }
            }
          },
          setTransition: (e) => {
            t.slides
              .map((e) => m(e))
              .forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    });
              });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i } = e;
      r({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const s = (e) => ("string" == typeof e ? e : `${e}px`);
      be({
        effect: "creative",
        swiper: t,
        on: i,
        setTranslate: () => {
          const { slides: e, wrapperEl: r, slidesSizesGrid: i } = t,
            n = t.params.creativeEffect,
            { progressMultiplier: a } = n,
            o = t.params.centeredSlides,
            l = M(t);
          if (o) {
            const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
            r.style.transform = `translateX(calc(50% - ${e}px))`;
          }
          for (let r = 0; r < e.length; r += 1) {
            const i = e[r],
              c = i.progress,
              d = Math.min(
                Math.max(i.progress, -n.limitProgress),
                n.limitProgress
              );
            let u = d;
            o ||
              (u = Math.min(
                Math.max(i.originalProgress, -n.limitProgress),
                n.limitProgress
              ));
            const p = i.swiperSlideOffset,
              h = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              f = [0, 0, 0];
            let m = !1;
            t.isHorizontal() || ((h[1] = h[0]), (h[0] = 0));
            let g = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((g = n.next), (m = !0))
              : d > 0 && ((g = n.prev), (m = !0)),
              h.forEach((e, t) => {
                h[t] = `calc(${e}px + (${s(g.translate[t])} * ${Math.abs(
                  d * a
                )}))`;
              }),
              f.forEach((e, t) => {
                let r = g.rotate[t] * Math.abs(d * a);
                f[t] = r;
              }),
              (i.style.zIndex = -Math.abs(Math.round(c)) + e.length);
            const v = h.join(", "),
              y = `rotateX(${l(f[0])}deg) rotateY(${l(f[1])}deg) rotateZ(${l(
                f[2]
              )}deg)`,
              w =
                u < 0
                  ? `scale(${1 + (1 - g.scale) * u * a})`
                  : `scale(${1 - (1 - g.scale) * u * a})`,
              b =
                u < 0
                  ? 1 + (1 - g.opacity) * u * a
                  : 1 - (1 - g.opacity) * u * a,
              x = `translate3d(${v}) ${y} ${w}`;
            if ((m && g.shadow) || !m) {
              let e = i.querySelector(".swiper-slide-shadow");
              if ((!e && g.shadow && (e = Ee("creative", i)), e)) {
                const t = n.shadowPerProgress ? d * (1 / n.limitProgress) : d;
                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const S = xe(0, i);
            (S.style.transform = x),
              (S.style.opacity = b),
              g.origin && (S.style.transformOrigin = g.origin);
          }
        },
        setTransition: (e) => {
          const r = t.slides.map((e) => m(e));
          r.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              });
          }),
            Se({ swiper: t, duration: e, transformElements: r, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: r, on: i } = e;
      r({
        cardsEffect: {
          slideShadows: !0,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8,
        },
      }),
        be({
          effect: "cards",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e, activeIndex: r, rtlTranslate: i } = t,
              s = t.params.cardsEffect,
              { startTranslate: n, isTouched: a } = t.touchEventsData,
              o = i ? -t.translate : t.translate;
            for (let l = 0; l < e.length; l += 1) {
              const c = e[l],
                d = c.progress,
                u = Math.min(Math.max(d, -4), 4);
              let p = c.swiperSlideOffset;
              t.params.centeredSlides &&
                !t.params.cssMode &&
                (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides &&
                  t.params.cssMode &&
                  (p -= e[0].swiperSlideOffset);
              let h = t.params.cssMode ? -p - t.translate : -p,
                f = 0;
              const m = -100 * Math.abs(u);
              let g = 1,
                v = -s.perSlideRotate * u,
                y = s.perSlideOffset - 0.75 * Math.abs(u);
              const w =
                  t.virtual && t.params.virtual.enabled
                    ? t.virtual.from + l
                    : l,
                b =
                  (w === r || w === r - 1) &&
                  u > 0 &&
                  u < 1 &&
                  (a || t.params.cssMode) &&
                  o < n,
                x =
                  (w === r || w === r + 1) &&
                  u < 0 &&
                  u > -1 &&
                  (a || t.params.cssMode) &&
                  o > n;
              if (b || x) {
                const e = ht(1 - Math.abs((Math.abs(u) - 0.5) / 0.5), 0.5);
                (v += -28 * u * e),
                  (g += -0.5 * e),
                  (y += 96 * e),
                  (f = -25 * e * Math.abs(u) + "%");
              }
              if (
                ((h =
                  u < 0
                    ? `calc(${h}px ${i ? "-" : "+"} (${y * Math.abs(u)}%))`
                    : u > 0
                    ? `calc(${h}px ${i ? "-" : "+"} (-${y * Math.abs(u)}%))`
                    : `${h}px`),
                !t.isHorizontal())
              ) {
                const e = f;
                (f = h), (h = e);
              }
              const S = u < 0 ? "" + (1 + (1 - g) * u) : "" + (1 - (1 - g) * u),
                E = `\n        translate3d(${h}, ${f}, ${m}px)\n        rotateZ(${
                  s.rotate ? (i ? -v : v) : 0
                }deg)\n        scale(${S})\n      `;
              if (s.slideShadows) {
                let e = c.querySelector(".swiper-slide-shadow");
                e || (e = Ee("cards", c)),
                  e &&
                    (e.style.opacity = Math.min(
                      Math.max((Math.abs(u) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              c.style.zIndex = -Math.abs(Math.round(d)) + e.length;
              xe(0, c).style.transform = E;
            }
          },
          setTransition: (e) => {
            const r = t.slides.map((e) => m(e));
            r.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
            }),
              Se({ swiper: t, duration: e, transformElements: r });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            _loopSwapReset: !1,
            watchSlidesProgress: !0,
            loopAdditionalSlides: t.params.cardsEffect.rotate ? 3 : 2,
            centeredSlides: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
  ];
  pe.use(_e);
  class Te {
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
      this.swiper = new pe("[swiper='clinic-card']", {
        direction: "horizontal",
        slidesPerView: 1.2,
        on: {
          init: function (e) {
            e.wrapperEl && e.wrapperEl.setAttribute("role", "list"),
              e.slides.forEach((e) => {
                e.setAttribute("role", "listitem");
              });
          },
          slideChange: function (e) {
            e.slides.forEach((e) => {
              e.setAttribute("card-status", "inactive");
            }),
              e.slides[e.activeIndex].setAttribute("card-status", "active");
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
  }
  function Me() {
    new Te();
  }
  function Ce(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function ke(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
    /*!
     * GSAP 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */
  }
  var Pe,
    Ae,
    Oe,
    Le,
    ze,
    De,
    Ie,
    qe,
    $e,
    Re,
    Xe,
    Ne,
    Be,
    Fe,
    Ye,
    He,
    We,
    Ve,
    Ge,
    je,
    Ue,
    Ke,
    Ze,
    Qe,
    Je,
    et,
    tt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    rt = { duration: 0.5, overwrite: !1, delay: 0 },
    it = 1e8,
    st = 1e-8,
    nt = 2 * Math.PI,
    at = nt / 4,
    ot = 0,
    lt = Math.sqrt,
    ct = Math.cos,
    dt = Math.sin,
    ut = function (e) {
      return "string" == typeof e;
    },
    pt = function (e) {
      return "function" == typeof e;
    },
    ft = function (e) {
      return "number" == typeof e;
    },
    mt = function (e) {
      return void 0 === e;
    },
    gt = function (e) {
      return "object" == typeof e;
    },
    vt = function (e) {
      return !1 !== e;
    },
    yt = function () {
      return "undefined" != typeof window;
    },
    wt = function (e) {
      return pt(e) || ut(e);
    },
    bt =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    xt = Array.isArray,
    St = /(?:-?\.?\d|\.)+/gi,
    Et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    _t = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Tt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Mt = /[+-]=-?[.\d]+/,
    Ct = /[^,'"\[\]\s]+/gi,
    kt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Pt = {},
    At = {},
    Ot = function (e) {
      return (At = or(e, Pt)) && os;
    },
    Lt = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    zt = function (e, t) {
      return !t && console.warn(e);
    },
    Dt = function (e, t) {
      return (e && (Pt[e] = t) && At && (At[e] = t)) || Pt;
    },
    It = function () {
      return 0;
    },
    qt = { suppressEvents: !0, isStart: !0, kill: !1 },
    $t = { suppressEvents: !0, kill: !1 },
    Rt = { suppressEvents: !0 },
    Xt = {},
    Nt = [],
    Bt = {},
    Ft = {},
    Yt = {},
    Ht = 30,
    Wt = [],
    Vt = "",
    Gt = function (e) {
      var t,
        r,
        i = e[0];
      if ((gt(i) || pt(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
        for (r = Wt.length; r-- && !Wt[r].targetTest(i); );
        t = Wt[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new xi(e[r], t)))) ||
          e.splice(r, 1);
      return e;
    },
    jt = function (e) {
      return e._gsap || Gt(Rr(e))[0]._gsap;
    },
    Ut = function (e, t, r) {
      return (r = e[t]) && pt(r)
        ? e[t]()
        : (mt(r) && e.getAttribute && e.getAttribute(t)) || r;
    },
    Kt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Zt = function (e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    Qt = function (e) {
      return Math.round(1e7 * e) / 1e7 || 0;
    },
    Jt = function (e, t) {
      var r = t.charAt(0),
        i = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        "+" === r ? e + i : "-" === r ? e - i : "*" === r ? e * i : e / i
      );
    },
    er = function (e, t) {
      for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; );
      return i < r;
    },
    tr = function () {
      var e,
        t,
        r = Nt.length,
        i = Nt.slice(0);
      for (Bt = {}, Nt.length = 0, e = 0; e < r; e++)
        (t = i[e]) &&
          t._lazy &&
          (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
    },
    rr = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    ir = function (e, t, r, i) {
      Nt.length && !Ae && tr(),
        e.render(t, r, !!(Ae && t < 0 && rr(e))),
        Nt.length && !Ae && tr();
    },
    sr = function (e) {
      var t = parseFloat(e);
      return (t || 0 === t) && (e + "").match(Ct).length < 2
        ? t
        : ut(e)
        ? e.trim()
        : e;
    },
    nr = function (e) {
      return e;
    },
    ar = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    or = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    lr = function e(t, r) {
      for (var i in r)
        "__proto__" !== i &&
          "constructor" !== i &&
          "prototype" !== i &&
          (t[i] = gt(r[i]) ? e(t[i] || (t[i] = {}), r[i]) : r[i]);
      return t;
    },
    cr = function (e, t) {
      var r,
        i = {};
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    dr = function (e) {
      var t = e.parent || Le,
        r = e.keyframes
          ? (function (e) {
              return function (t, r) {
                for (var i in r)
                  i in t ||
                    ("duration" === i && e) ||
                    "ease" === i ||
                    (t[i] = r[i]);
              };
            })(xt(e.keyframes))
          : ar;
      if (vt(e.inherit))
        for (; t; ) r(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    ur = function (e, t, r, i, s) {
      var n,
        a = e[i];
      if (s) for (n = t[s]; a && a[s] > n; ) a = a._prev;
      return (
        a
          ? ((t._next = a._next), (a._next = t))
          : ((t._next = e[r]), (e[r] = t)),
        t._next ? (t._next._prev = t) : (e[i] = t),
        (t._prev = a),
        (t.parent = t._dp = e),
        t
      );
    },
    pr = function (e, t, r, i) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var s = t._prev,
        n = t._next;
      s ? (s._next = n) : e[r] === t && (e[r] = n),
        n ? (n._prev = s) : e[i] === t && (e[i] = s),
        (t._next = t._prev = t.parent = null);
    },
    hr = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    fr = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
      return e;
    },
    mr = function (e, t, r, i) {
      return (
        e._startAt &&
        (Ae
          ? e._startAt.revert($t)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, i))
      );
    },
    gr = function e(t) {
      return !t || (t._ts && e(t.parent));
    },
    vr = function (e) {
      return e._repeat ? yr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    yr = function (e, t) {
      var r = Math.floor((e = Qt(e / t)));
      return e && r === e ? r - 1 : r;
    },
    wr = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    br = function (e) {
      return (e._end = Qt(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || st) || 0)
      ));
    },
    xr = function (e, t) {
      var r = e._dp;
      return (
        r &&
          r.smoothChildTiming &&
          e._ts &&
          ((e._start = Qt(
            r._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          br(e),
          r._dirty || fr(r, e)),
        e
      );
    },
    Sr = function (e, t) {
      var r;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((r = wr(e.rawTime(), t)),
          (!t._dur || Dr(0, t.totalDuration(), r) - t._tTime > st) &&
            t.render(r, !0)),
        fr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (r = e; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        e._zTime = -st;
      }
    },
    Er = function (e, t, r, i) {
      return (
        t.parent && hr(t),
        (t._start = Qt(
          (ft(r) ? r : r || e !== Le ? Or(e, r, t) : e._time) + t._delay
        )),
        (t._end = Qt(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        ur(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Cr(t) || (e._recent = t),
        i || Sr(e, t),
        e._ts < 0 && xr(e, e._tTime),
        e
      );
    },
    _r = function (e, t) {
      return (
        (Pt.ScrollTrigger || Lt("scrollTrigger", t)) &&
        Pt.ScrollTrigger.create(t, e)
      );
    },
    Tr = function (e, t, r, i, s) {
      return (
        Pi(e, t, s),
        e._initted
          ? !r &&
            e._pt &&
            !Ae &&
            ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
            $e !== li.frame
            ? (Nt.push(e), (e._lazy = [s, i]), 1)
            : void 0
          : 1
      );
    },
    Mr = function e(t) {
      var r = t.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || e(r));
    },
    Cr = function (e) {
      var t = e.data;
      return "isFromStart" === t || "isStart" === t;
    },
    kr = function (e, t, r, i) {
      var s = e._repeat,
        n = Qt(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !i && (e._time *= n / e._dur),
        (e._dur = n),
        (e._tDur = s ? (s < 0 ? 1e10 : Qt(n * (s + 1) + e._rDelay * s)) : n),
        a > 0 && !i && xr(e, (e._tTime = e._tDur * a)),
        e.parent && br(e),
        r || fr(e.parent, e),
        e
      );
    },
    Pr = function (e) {
      return e instanceof Ei ? fr(e) : kr(e, e._dur);
    },
    Ar = { _start: 0, endTime: It, totalDuration: It },
    Or = function e(t, r, i) {
      var s,
        n,
        a,
        o = t.labels,
        l = t._recent || Ar,
        c = t.duration() >= it ? l.endTime(!1) : t._dur;
      return ut(r) && (isNaN(r) || r in o)
        ? ((n = r.charAt(0)),
          (a = "%" === r.substr(-1)),
          (s = r.indexOf("=")),
          "<" === n || ">" === n
            ? (s >= 0 && (r = r.replace(/=/, "")),
              ("<" === n ? l._start : l.endTime(l._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0) *
                  (a ? (s < 0 ? l : i).totalDuration() / 100 : 1))
            : s < 0
            ? (r in o || (o[r] = c), o[r])
            : ((n = parseFloat(r.charAt(s - 1) + r.substr(s + 1))),
              a && i && (n = (n / 100) * (xt(i) ? i[0] : i).totalDuration()),
              s > 1 ? e(t, r.substr(0, s - 1), i) + n : c + n))
        : null == r
        ? c
        : +r;
    },
    Lr = function (e, t, r) {
      var i,
        s,
        n = ft(t[1]),
        a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[a];
      if ((n && (o.duration = t[1]), (o.parent = r), e)) {
        for (i = o, s = r; s && !("immediateRender" in i); )
          (i = s.vars.defaults || {}), (s = vt(s.vars.inherit) && s.parent);
        (o.immediateRender = vt(i.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
      }
      return new Di(t[0], o, t[a + 1]);
    },
    zr = function (e, t) {
      return e || 0 === e ? t(e) : t;
    },
    Dr = function (e, t, r) {
      return r < e ? e : r > t ? t : r;
    },
    Ir = function (e, t) {
      return ut(e) && (t = kt.exec(e)) ? t[1] : "";
    },
    qr = [].slice,
    $r = function (e, t) {
      return (
        e &&
        gt(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && gt(e[0]))) &&
        !e.nodeType &&
        e !== ze
      );
    },
    Rr = function (e, t, r) {
      return Oe && !t && Oe.selector
        ? Oe.selector(e)
        : !ut(e) || r || (!De && ci())
        ? xt(e)
          ? (function (e, t, r) {
              return (
                void 0 === r && (r = []),
                e.forEach(function (e) {
                  var i;
                  return (ut(e) && !t) || $r(e, 1)
                    ? (i = r).push.apply(i, Rr(e))
                    : r.push(e);
                }) || r
              );
            })(e, r)
          : $r(e)
          ? qr.call(e, 0)
          : e
          ? [e]
          : []
        : qr.call((t || Ie).querySelectorAll(e), 0);
    },
    Xr = function (e) {
      return (
        (e = Rr(e)[0] || zt("Invalid scope") || {}),
        function (t) {
          var r = e.current || e.nativeElement || e;
          return Rr(
            t,
            r.querySelectorAll
              ? r
              : r === e
              ? zt("Invalid scope") || Ie.createElement("div")
              : e
          );
        }
      );
    },
    Nr = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Br = function (e) {
      if (pt(e)) return e;
      var t = gt(e) ? e : { each: e },
        r = gi(t.ease),
        i = t.from || 0,
        s = parseFloat(t.base) || 0,
        n = {},
        a = i > 0 && i < 1,
        o = isNaN(i) || a,
        l = t.axis,
        c = i,
        d = i;
      return (
        ut(i)
          ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !a && o && ((c = i[0]), (d = i[1])),
        function (e, a, u) {
          var p,
            h,
            f,
            m,
            g,
            v,
            y,
            w,
            b,
            x = (u || t).length,
            S = n[x];
          if (!S) {
            if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, it])[1])) {
              for (
                y = -it;
                y < (y = u[b++].getBoundingClientRect().left) && b < x;

              );
              b < x && b--;
            }
            for (
              S = n[x] = [],
                p = o ? Math.min(b, x) * c - 0.5 : i % b,
                h = b === it ? 0 : o ? (x * d) / b - 0.5 : (i / b) | 0,
                y = 0,
                w = it,
                v = 0;
              v < x;
              v++
            )
              (f = (v % b) - p),
                (m = h - ((v / b) | 0)),
                (S[v] = g =
                  l ? Math.abs("y" === l ? m : f) : lt(f * f + m * m)),
                g > y && (y = g),
                g < w && (w = g);
            "random" === i && Nr(S),
              (S.max = y - w),
              (S.min = w),
              (S.v = x =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (b > x
                      ? x - 1
                      : l
                      ? "y" === l
                        ? x / b
                        : b
                      : Math.max(b, x / b)) ||
                  0) * ("edges" === i ? -1 : 1)),
              (S.b = x < 0 ? s - x : s),
              (S.u = Ir(t.amount || t.each) || 0),
              (r = r && x < 0 ? fi(r) : r);
          }
          return (
            (x = (S[e] - S.min) / S.max || 0),
            Qt(S.b + (r ? r(x) : x) * S.v) + S.u
          );
        }
      );
    },
    Fr = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (r) {
        var i = Qt(Math.round(parseFloat(r) / e) * e * t);
        return (i - (i % 1)) / t + (ft(r) ? 0 : Ir(r));
      };
    },
    Yr = function (e, t) {
      var r,
        i,
        s = xt(e);
      return (
        !s &&
          gt(e) &&
          ((r = s = e.radius || it),
          e.values
            ? ((e = Rr(e.values)), (i = !ft(e[0])) && (r *= r))
            : (e = Fr(e.increment))),
        zr(
          t,
          s
            ? pt(e)
              ? function (t) {
                  return (i = e(t)), Math.abs(i - t) <= r ? i : t;
                }
              : function (t) {
                  for (
                    var s,
                      n,
                      a = parseFloat(i ? t.x : t),
                      o = parseFloat(i ? t.y : 0),
                      l = it,
                      c = 0,
                      d = e.length;
                    d--;

                  )
                    i
                      ? (s = (s = e[d].x - a) * s + (n = e[d].y - o) * n)
                      : (s = Math.abs(e[d] - a)),
                      s < l && ((l = s), (c = d));
                  return (
                    (c = !r || l <= r ? e[c] : t),
                    i || c === t || ft(t) ? c : c + Ir(t)
                  );
                }
            : Fr(e)
        )
      );
    },
    Hr = function (e, t, r, i) {
      return zr(xt(e) ? !t : !0 === r ? !!(r = 0) : !i, function () {
        return xt(e)
          ? e[~~(Math.random() * e.length)]
          : (r = r || 1e-5) &&
              (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - r / 2 + Math.random() * (t - e + 0.99 * r)) / r
                ) *
                  r *
                  i
              ) / i;
      });
    },
    Wr = function (e, t, r) {
      return zr(r, function (r) {
        return e[~~t(r)];
      });
    },
    Vr = function (e) {
      for (var t, r, i, s, n = 0, a = ""; ~(t = e.indexOf("random(", n)); )
        (i = e.indexOf(")", t)),
          (s = "[" === e.charAt(t + 7)),
          (r = e.substr(t + 7, i - t - 7).match(s ? Ct : St)),
          (a +=
            e.substr(n, t - n) +
            Hr(s ? r : +r[0], s ? 0 : +r[1], +r[2] || 1e-5)),
          (n = i + 1);
      return a + e.substr(n, e.length - n);
    },
    Gr = function (e, t, r, i, s) {
      var n = t - e,
        a = i - r;
      return zr(s, function (t) {
        return r + (((t - e) / n) * a || 0);
      });
    },
    jr = function (e, t, r) {
      var i,
        s,
        n,
        a = e.labels,
        o = it;
      for (i in a)
        (s = a[i] - t) < 0 == !!r &&
          s &&
          o > (s = Math.abs(s)) &&
          ((n = i), (o = s));
      return n;
    },
    Ur = function (e, t, r) {
      var i,
        s,
        n,
        a = e.vars,
        o = a[t],
        l = Oe,
        c = e._ctx;
      if (o)
        return (
          (i = a[t + "Params"]),
          (s = a.callbackScope || e),
          r && Nt.length && tr(),
          c && (Oe = c),
          (n = i ? o.apply(s, i) : o.call(s)),
          (Oe = l),
          n
        );
    },
    Kr = function (e) {
      return (
        hr(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ae),
        e.progress() < 1 && Ur(e, "onInterrupt"),
        e
      );
    },
    Zr = [],
    Qr = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), yt() || e.headless)) {
          var t = e.name,
            r = pt(e),
            i =
              t && !r && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: It,
              render: Yi,
              add: Ci,
              kill: Wi,
              modifier: Hi,
              rawVars: 0,
            },
            n = {
              targetTest: 0,
              get: 0,
              getSetter: Xi,
              aliases: {},
              register: 0,
            };
          if ((ci(), e !== i)) {
            if (Ft[t]) return;
            ar(i, ar(cr(e, s), n)),
              or(i.prototype, or(s, cr(e, n))),
              (Ft[(i.prop = t)] = i),
              e.targetTest && (Wt.push(i), (Xt[t] = 1)),
              (t =
                ("css" === t
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Dt(t, i), e.register && e.register(os, i, ji);
        } else Zr.push(e);
    },
    Jr = 255,
    ei = {
      aqua: [0, Jr, Jr],
      lime: [0, Jr, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Jr],
      navy: [0, 0, 128],
      white: [Jr, Jr, Jr],
      olive: [128, 128, 0],
      yellow: [Jr, Jr, 0],
      orange: [Jr, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Jr, 0, 0],
      pink: [Jr, 192, 203],
      cyan: [0, Jr, Jr],
      transparent: [Jr, Jr, Jr, 0],
    },
    ti = function (e, t, r) {
      return (
        ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
          ? t + (r - t) * e * 6
          : e < 0.5
          ? r
          : 3 * e < 2
          ? t + (r - t) * (2 / 3 - e) * 6
          : t) *
          Jr +
          0.5) |
        0
      );
    },
    ri = function (e, t, r) {
      var i,
        s,
        n,
        a,
        o,
        l,
        c,
        d,
        u,
        p,
        h = e ? (ft(e) ? [e >> 16, (e >> 8) & Jr, e & Jr] : 0) : ei.black;
      if (!h) {
        if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ei[e]))
          h = ei[e];
        else if ("#" === e.charAt(0)) {
          if (
            (e.length < 6 &&
              ((i = e.charAt(1)),
              (s = e.charAt(2)),
              (n = e.charAt(3)),
              (e =
                "#" +
                i +
                i +
                s +
                s +
                n +
                n +
                (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
            9 === e.length)
          )
            return [
              (h = parseInt(e.substr(1, 6), 16)) >> 16,
              (h >> 8) & Jr,
              h & Jr,
              parseInt(e.substr(7), 16) / 255,
            ];
          h = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & Jr, e & Jr];
        } else if ("hsl" === e.substr(0, 3))
          if (((h = p = e.match(St)), t)) {
            if (~e.indexOf("="))
              return (h = e.match(Et)), r && h.length < 4 && (h[3] = 1), h;
          } else
            (a = (+h[0] % 360) / 360),
              (o = +h[1] / 100),
              (i =
                2 * (l = +h[2] / 100) -
                (s = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
              h.length > 3 && (h[3] *= 1),
              (h[0] = ti(a + 1 / 3, i, s)),
              (h[1] = ti(a, i, s)),
              (h[2] = ti(a - 1 / 3, i, s));
        else h = e.match(St) || ei.transparent;
        h = h.map(Number);
      }
      return (
        t &&
          !p &&
          ((i = h[0] / Jr),
          (s = h[1] / Jr),
          (n = h[2] / Jr),
          (l = ((c = Math.max(i, s, n)) + (d = Math.min(i, s, n))) / 2),
          c === d
            ? (a = o = 0)
            : ((u = c - d),
              (o = l > 0.5 ? u / (2 - c - d) : u / (c + d)),
              (a =
                c === i
                  ? (s - n) / u + (s < n ? 6 : 0)
                  : c === s
                  ? (n - i) / u + 2
                  : (i - s) / u + 4),
              (a *= 60)),
          (h[0] = ~~(a + 0.5)),
          (h[1] = ~~(100 * o + 0.5)),
          (h[2] = ~~(100 * l + 0.5))),
        r && h.length < 4 && (h[3] = 1),
        h
      );
    },
    ii = function (e) {
      var t = [],
        r = [],
        i = -1;
      return (
        e.split(ni).forEach(function (e) {
          var s = e.match(_t) || [];
          t.push.apply(t, s), r.push((i += s.length + 1));
        }),
        (t.c = r),
        t
      );
    },
    si = function (e, t, r) {
      var i,
        s,
        n,
        a,
        o = "",
        l = (e + o).match(ni),
        c = t ? "hsla(" : "rgba(",
        d = 0;
      if (!l) return e;
      if (
        ((l = l.map(function (e) {
          return (
            (e = ri(e, t, 1)) &&
            c +
              (t
                ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                : e.join(",")) +
              ")"
          );
        })),
        r && ((n = ii(e)), (i = r.c).join(o) !== n.c.join(o)))
      )
        for (a = (s = e.replace(ni, "1").split(_t)).length - 1; d < a; d++)
          o +=
            s[d] +
            (~i.indexOf(d)
              ? l.shift() || c + "0,0,0,0)"
              : (n.length ? n : l.length ? l : r).shift());
      if (!s)
        for (a = (s = e.split(ni)).length - 1; d < a; d++) o += s[d] + l[d];
      return o + s[a];
    },
    ni = (function () {
      var e,
        t =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (e in ei) t += "|" + e + "\\b";
      return new RegExp(t + ")", "gi");
    })(),
    ai = /hsl[a]?\(/,
    oi = function (e) {
      var t,
        r = e.join(" ");
      if (((ni.lastIndex = 0), ni.test(r)))
        return (
          (t = ai.test(r)),
          (e[1] = si(e[1], t)),
          (e[0] = si(e[0], t, ii(e[1]))),
          !0
        );
    },
    li =
      ((Ve = Date.now),
      (Ge = 500),
      (je = 33),
      (Ue = Ve()),
      (Ke = Ue),
      (Qe = Ze = 1e3 / 240),
      (et = function e(t) {
        var r,
          i,
          s,
          n,
          a = Ve() - Ke,
          o = !0 === t;
        if (
          ((a > Ge || a < 0) && (Ue += a - je),
          ((r = (s = (Ke += a) - Ue) - Qe) > 0 || o) &&
            ((n = ++Ye.frame),
            (He = s - 1e3 * Ye.time),
            (Ye.time = s /= 1e3),
            (Qe += r + (r >= Ze ? 4 : Ze - r)),
            (i = 1)),
          o || (Ne = Be(e)),
          i)
        )
          for (We = 0; We < Je.length; We++) Je[We](s, He, n, t);
      }),
      (Ye = {
        time: 0,
        frame: 0,
        tick: function () {
          et(!0);
        },
        deltaRatio: function (e) {
          return He / (1e3 / (e || 60));
        },
        wake: function () {
          qe &&
            (!De &&
              yt() &&
              ((ze = De = window),
              (Ie = ze.document || {}),
              (Pt.gsap = os),
              (ze.gsapVersions || (ze.gsapVersions = [])).push(os.version),
              Ot(At || ze.GreenSockGlobals || (!ze.gsap && ze) || {}),
              Zr.forEach(Qr)),
            (Fe =
              "undefined" != typeof requestAnimationFrame &&
              requestAnimationFrame),
            Ne && Ye.sleep(),
            (Be =
              Fe ||
              function (e) {
                return setTimeout(e, (Qe - 1e3 * Ye.time + 1) | 0);
              }),
            (Xe = 1),
            et(2));
        },
        sleep: function () {
          (Fe ? cancelAnimationFrame : clearTimeout)(Ne), (Xe = 0), (Be = It);
        },
        lagSmoothing: function (e, t) {
          (Ge = e || 1 / 0), (je = Math.min(t || 33, Ge));
        },
        fps: function (e) {
          (Ze = 1e3 / (e || 240)), (Qe = 1e3 * Ye.time + Ze);
        },
        add: function (e, t, r) {
          var i = t
            ? function (t, r, s, n) {
                e(t, r, s, n), Ye.remove(i);
              }
            : e;
          return Ye.remove(e), Je[r ? "unshift" : "push"](i), ci(), i;
        },
        remove: function (e, t) {
          ~(t = Je.indexOf(e)) && Je.splice(t, 1) && We >= t && We--;
        },
        _listeners: (Je = []),
      })),
    ci = function () {
      return !Xe && li.wake();
    },
    di = {},
    ui = /^[\d.\-M][\d.\-,\s]/,
    pi = /["']/g,
    hi = function (e) {
      for (
        var t,
          r,
          i,
          s = {},
          n = e.substr(1, e.length - 3).split(":"),
          a = n[0],
          o = 1,
          l = n.length;
        o < l;
        o++
      )
        (r = n[o]),
          (t = o !== l - 1 ? r.lastIndexOf(",") : r.length),
          (i = r.substr(0, t)),
          (s[a] = isNaN(i) ? i.replace(pi, "").trim() : +i),
          (a = r.substr(t + 1).trim());
      return s;
    },
    fi = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    mi = function e(t, r) {
      for (var i, s = t._first; s; )
        s instanceof Ei
          ? e(s, r)
          : s.vars.yoyoEase &&
            (!s._yoyo || !s._repeat) &&
            s._yoyo !== r &&
            (s.timeline
              ? e(s.timeline, r)
              : ((i = s._ease),
                (s._ease = s._yEase),
                (s._yEase = i),
                (s._yoyo = r))),
          (s = s._next);
    },
    gi = function (e, t) {
      return (
        (e &&
          (pt(e)
            ? e
            : di[e] ||
              (function (e) {
                var t = (e + "").split("("),
                  r = di[t[0]];
                return r && t.length > 1 && r.config
                  ? r.config.apply(
                      null,
                      ~e.indexOf("{")
                        ? [hi(t[1])]
                        : (function (e) {
                            var t = e.indexOf("(") + 1,
                              r = e.indexOf(")"),
                              i = e.indexOf("(", t);
                            return e.substring(
                              t,
                              ~i && i < r ? e.indexOf(")", r + 1) : r
                            );
                          })(e)
                            .split(",")
                            .map(sr)
                    )
                  : di._CE && ui.test(e)
                  ? di._CE("", e)
                  : r;
              })(e))) ||
        t
      );
    },
    vi = function (e, t, r, i) {
      void 0 === r &&
        (r = function (e) {
          return 1 - t(1 - e);
        }),
        void 0 === i &&
          (i = function (e) {
            return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
          });
      var s,
        n = { easeIn: t, easeOut: r, easeInOut: i };
      return (
        Kt(e, function (e) {
          for (var t in ((di[e] = Pt[e] = n),
          (di[(s = e.toLowerCase())] = r),
          n))
            di[
              s + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
            ] = di[e + "." + t] = n[t];
        }),
        n
      );
    },
    yi = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
      };
    },
    wi = function e(t, r, i) {
      var s = r >= 1 ? r : 1,
        n = (i || (t ? 0.3 : 0.45)) / (r < 1 ? r : 1),
        a = (n / nt) * (Math.asin(1 / s) || 0),
        o = function (e) {
          return 1 === e ? 1 : s * Math.pow(2, -10 * e) * dt((e - a) * n) + 1;
        },
        l =
          "out" === t
            ? o
            : "in" === t
            ? function (e) {
                return 1 - o(1 - e);
              }
            : yi(o);
      return (
        (n = nt / n),
        (l.config = function (r, i) {
          return e(t, r, i);
        }),
        l
      );
    },
    bi = function e(t, r) {
      void 0 === r && (r = 1.70158);
      var i = function (e) {
          return e ? --e * e * ((r + 1) * e + r) + 1 : 0;
        },
        s =
          "out" === t
            ? i
            : "in" === t
            ? function (e) {
                return 1 - i(1 - e);
              }
            : yi(i);
      return (
        (s.config = function (r) {
          return e(t, r);
        }),
        s
      );
    };
  Kt("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
    var r = t < 5 ? t + 1 : t;
    vi(
      e + ",Power" + (r - 1),
      t
        ? function (e) {
            return Math.pow(e, r);
          }
        : function (e) {
            return e;
          },
      function (e) {
        return 1 - Math.pow(1 - e, r);
      },
      function (e) {
        return e < 0.5
          ? Math.pow(2 * e, r) / 2
          : 1 - Math.pow(2 * (1 - e), r) / 2;
      }
    );
  }),
    (di.Linear.easeNone = di.none = di.Linear.easeIn),
    vi("Elastic", wi("in"), wi("out"), wi()),
    (function (e, t) {
      var r = 1 / t,
        i = function (i) {
          return i < r
            ? e * i * i
            : i < 0.7272727272727273
            ? e * Math.pow(i - 1.5 / t, 2) + 0.75
            : i < 0.9090909090909092
            ? e * (i -= 2.25 / t) * i + 0.9375
            : e * Math.pow(i - 2.625 / t, 2) + 0.984375;
        };
      vi(
        "Bounce",
        function (e) {
          return 1 - i(1 - e);
        },
        i
      );
    })(7.5625, 2.75),
    vi("Expo", function (e) {
      return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
    }),
    vi("Circ", function (e) {
      return -(lt(1 - e * e) - 1);
    }),
    vi("Sine", function (e) {
      return 1 === e ? 1 : 1 - ct(e * at);
    }),
    vi("Back", bi("in"), bi("out"), bi()),
    (di.SteppedEase =
      di.steps =
      Pt.SteppedEase =
        {
          config: function (e, t) {
            void 0 === e && (e = 1);
            var r = 1 / e,
              i = e + (t ? 0 : 1),
              s = t ? 1 : 0;
            return function (e) {
              return (((i * Dr(0, 0.99999999, e)) | 0) + s) * r;
            };
          },
        }),
    (rt.ease = di["quad.out"]),
    Kt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (e) {
        return (Vt += e + "," + e + "Params,");
      }
    );
  var xi = function (e, t) {
      (this.id = ot++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Ut),
        (this.set = t ? t.getSetter : Xi);
    },
    Si = (function () {
      function e(e) {
        (this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
            ((this._rDelay = e.repeatDelay || 0),
            (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          kr(this, +e.duration, 1, 1),
          (this.data = e.data),
          Oe && ((this._ctx = Oe), Oe.data.push(this)),
          Xe || li.wake();
      }
      var t = e.prototype;
      return (
        (t.delay = function (e) {
          return e || 0 === e
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (t.duration = function (e) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (e) {
          return arguments.length
            ? ((this._dirty = 0),
              kr(
                this,
                this._repeat < 0
                  ? e
                  : (e - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (e, t) {
          if ((ci(), !arguments.length)) return this._tTime;
          var r = this._dp;
          if (r && r.smoothChildTiming && this._ts) {
            for (
              xr(this, e), !r._dp || r.parent || Sr(r, this);
              r && r.parent;

            )
              r.parent._time !==
                r._start +
                  (r._ts >= 0
                    ? r._tTime / r._ts
                    : (r.totalDuration() - r._tTime) / -r._ts) &&
                r.totalTime(r._tTime, !0),
                (r = r.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && e < this._tDur) ||
                (this._ts < 0 && e > 0) ||
                (!this._tDur && !e)) &&
              Er(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== e ||
              (!this._dur && !t) ||
              (this._initted && Math.abs(this._zTime) === st) ||
              (!e && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = e), ir(this, e, t)),
            this
          );
        }),
        (t.time = function (e, t) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), e + vr(this)) %
                  (this._dur + this._rDelay) || (e ? this._dur : 0),
                t
              )
            : this._time;
        }),
        (t.totalProgress = function (e, t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * e, t)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (t.progress = function (e, t) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                  vr(this),
                t
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (t.iteration = function (e, t) {
          var r = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (e - 1) * r, t)
            : this._repeat
            ? yr(this._tTime, r) + 1
            : 1;
        }),
        (t.timeScale = function (e, t) {
          if (!arguments.length) return this._rts === -st ? 0 : this._rts;
          if (this._rts === e) return this;
          var r =
            this.parent && this._ts ? wr(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +e || 0),
            (this._ts = this._ps || e === -st ? 0 : this._rts),
            this.totalTime(
              Dr(-Math.abs(this._delay), this.totalDuration(), r),
              !1 !== t
            ),
            br(this),
            (function (e) {
              for (var t = e.parent; t && t.parent; )
                (t._dirty = 1), t.totalDuration(), (t = t.parent);
              return e;
            })(this)
          );
        }),
        (t.paused = function (e) {
          return arguments.length
            ? (this._ps !== e &&
                ((this._ps = e),
                e
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (ci(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== st &&
                        (this._tTime -= st)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (e) {
          if (arguments.length) {
            this._start = e;
            var t = this.parent || this._dp;
            return (
              t && (t._sort || !this.parent) && Er(t, this, e - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (e) {
          return (
            this._start +
            (vt(e) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (e) {
          var t = this.parent || this._dp;
          return t
            ? e &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? wr(t.rawTime(e), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (e) {
          void 0 === e && (e = Rt);
          var t = Ae;
          return (
            (Ae = e),
            rr(this) &&
              (this.timeline && this.timeline.revert(e),
              this.totalTime(-0.01, e.suppressEvents)),
            "nested" !== this.data && !1 !== e.kill && this.kill(),
            (Ae = t),
            this
          );
        }),
        (t.globalTime = function (e) {
          for (var t = this, r = arguments.length ? e : t.rawTime(); t; )
            (r = t._start + r / (Math.abs(t._ts) || 1)), (t = t._dp);
          return !this.parent && this._sat ? this._sat.globalTime(e) : r;
        }),
        (t.repeat = function (e) {
          return arguments.length
            ? ((this._repeat = e === 1 / 0 ? -2 : e), Pr(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (e) {
          if (arguments.length) {
            var t = this._time;
            return (this._rDelay = e), Pr(this), t ? this.time(t) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        (t.seek = function (e, t) {
          return this.totalTime(Or(this, e), vt(t));
        }),
        (t.restart = function (e, t) {
          return (
            this.play().totalTime(e ? -this._delay : 0, vt(t)),
            this._dur || (this._zTime = -st),
            this
          );
        }),
        (t.play = function (e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (e, t) {
          return (
            null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (e) {
          return arguments.length
            ? (!!e !== this.reversed() &&
                this.timeScale(-this._rts || (e ? -st : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -st), this;
        }),
        (t.isActive = function () {
          var e,
            t = this.parent || this._dp,
            r = this._start;
          return !(
            t &&
            !(
              this._ts &&
              this._initted &&
              t.isActive() &&
              (e = t.rawTime(!0)) >= r &&
              e < this.endTime(!0) - st
            )
          );
        }),
        (t.eventCallback = function (e, t, r) {
          var i = this.vars;
          return arguments.length > 1
            ? (t
                ? ((i[e] = t),
                  r && (i[e + "Params"] = r),
                  "onUpdate" === e && (this._onUpdate = t))
                : delete i[e],
              this)
            : i[e];
        }),
        (t.then = function (e) {
          var t = this;
          return new Promise(function (r) {
            var i = pt(e) ? e : nr,
              s = function () {
                var e = t.then;
                (t.then = null),
                  pt(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                  r(i),
                  (t.then = e);
              };
            (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
            (!t._tTime && t._ts < 0)
              ? s()
              : (t._prom = s);
          });
        }),
        (t.kill = function () {
          Kr(this);
        }),
        e
      );
    })();
  ar(Si.prototype, {
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
    _zTime: -st,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ei = (function (e) {
    function t(t, r) {
      var i;
      return (
        void 0 === t && (t = {}),
        ((i = e.call(this, t) || this).labels = {}),
        (i.smoothChildTiming = !!t.smoothChildTiming),
        (i.autoRemoveChildren = !!t.autoRemoveChildren),
        (i._sort = vt(t.sortChildren)),
        Le && Er(t.parent || Le, Ce(i), r),
        t.reversed && i.reverse(),
        t.paused && i.paused(!0),
        t.scrollTrigger && _r(Ce(i), t.scrollTrigger),
        i
      );
    }
    ke(t, e);
    var r = t.prototype;
    return (
      (r.to = function (e, t, r) {
        return Lr(0, arguments, this), this;
      }),
      (r.from = function (e, t, r) {
        return Lr(1, arguments, this), this;
      }),
      (r.fromTo = function (e, t, r, i) {
        return Lr(2, arguments, this), this;
      }),
      (r.set = function (e, t, r) {
        return (
          (t.duration = 0),
          (t.parent = this),
          dr(t).repeatDelay || (t.repeat = 0),
          (t.immediateRender = !!t.immediateRender),
          new Di(e, t, Or(this, r), 1),
          this
        );
      }),
      (r.call = function (e, t, r) {
        return Er(this, Di.delayedCall(0, e, t), r);
      }),
      (r.staggerTo = function (e, t, r, i, s, n, a) {
        return (
          (r.duration = t),
          (r.stagger = r.stagger || i),
          (r.onComplete = n),
          (r.onCompleteParams = a),
          (r.parent = this),
          new Di(e, r, Or(this, s)),
          this
        );
      }),
      (r.staggerFrom = function (e, t, r, i, s, n, a) {
        return (
          (r.runBackwards = 1),
          (dr(r).immediateRender = vt(r.immediateRender)),
          this.staggerTo(e, t, r, i, s, n, a)
        );
      }),
      (r.staggerFromTo = function (e, t, r, i, s, n, a, o) {
        return (
          (i.startAt = r),
          (dr(i).immediateRender = vt(i.immediateRender)),
          this.staggerTo(e, t, i, s, n, a, o)
        );
      }),
      (r.render = function (e, t, r) {
        var i,
          s,
          n,
          a,
          o,
          l,
          c,
          d,
          u,
          p,
          h,
          f,
          m = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          v = this._dur,
          y = e <= 0 ? 0 : Qt(e),
          w = this._zTime < 0 != e < 0 && (this._initted || !v);
        if (
          (this !== Le && y > g && e >= 0 && (y = g),
          y !== this._tTime || r || w)
        ) {
          if (
            (m !== this._time &&
              v &&
              ((y += this._time - m), (e += this._time - m)),
            (i = y),
            (u = this._start),
            (l = !(d = this._ts)),
            w && (v || (m = this._zTime), (e || !t) && (this._zTime = e)),
            this._repeat)
          ) {
            if (
              ((h = this._yoyo),
              (o = v + this._rDelay),
              this._repeat < -1 && e < 0)
            )
              return this.totalTime(100 * o + e, t, r);
            if (
              ((i = Qt(y % o)),
              y === g
                ? ((a = this._repeat), (i = v))
                : ((a = ~~(p = Qt(y / o))) && a === p && ((i = v), a--),
                  i > v && (i = v)),
              (p = yr(this._tTime, o)),
              !m &&
                this._tTime &&
                p !== a &&
                this._tTime - p * o - this._dur <= 0 &&
                (p = a),
              h && 1 & a && ((i = v - i), (f = 1)),
              a !== p && !this._lock)
            ) {
              var b = h && 1 & p,
                x = b === (h && 1 & a);
              if (
                (a < p && (b = !b),
                (m = b ? 0 : y % v ? v : y),
                (this._lock = 1),
                (this.render(m || (f ? 0 : Qt(a * o)), t, !v)._lock = 0),
                (this._tTime = y),
                !t && this.parent && Ur(this, "onRepeat"),
                this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                (m && m !== this._time) ||
                  l !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((v = this._dur),
                (g = this._tDur),
                x &&
                  ((this._lock = 2),
                  (m = b ? v : -1e-4),
                  this.render(m, !0),
                  this.vars.repeatRefresh && !f && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              mi(this, f);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((c = (function (e, t, r) {
                var i;
                if (r > t)
                  for (i = e._first; i && i._start <= r; ) {
                    if ("isPause" === i.data && i._start > t) return i;
                    i = i._next;
                  }
                else
                  for (i = e._last; i && i._start >= r; ) {
                    if ("isPause" === i.data && i._start < t) return i;
                    i = i._prev;
                  }
              })(this, Qt(m), Qt(i))),
              c && (y -= i - (i = c._start))),
            (this._tTime = y),
            (this._time = i),
            (this._act = !d),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = e),
              (m = 0)),
            !m && y && !t && !p && (Ur(this, "onStart"), this._tTime !== y))
          )
            return this;
          if (i >= m && e >= 0)
            for (s = this._first; s; ) {
              if (
                ((n = s._next), (s._act || i >= s._start) && s._ts && c !== s)
              ) {
                if (s.parent !== this) return this.render(e, t, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (i - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (i - s._start) * s._ts,
                    t,
                    r
                  ),
                  i !== this._time || (!this._ts && !l))
                ) {
                  (c = 0), n && (y += this._zTime = -st);
                  break;
                }
              }
              s = n;
            }
          else {
            s = this._last;
            for (var S = e < 0 ? e : i; s; ) {
              if (
                ((n = s._prev), (s._act || S <= s._end) && s._ts && c !== s)
              ) {
                if (s.parent !== this) return this.render(e, t, r);
                if (
                  (s.render(
                    s._ts > 0
                      ? (S - s._start) * s._ts
                      : (s._dirty ? s.totalDuration() : s._tDur) +
                          (S - s._start) * s._ts,
                    t,
                    r || (Ae && rr(s))
                  ),
                  i !== this._time || (!this._ts && !l))
                ) {
                  (c = 0), n && (y += this._zTime = S ? -st : st);
                  break;
                }
              }
              s = n;
            }
          }
          if (
            c &&
            !t &&
            (this.pause(),
            (c.render(i >= m ? 0 : -st)._zTime = i >= m ? 1 : -1),
            this._ts)
          )
            return (this._start = u), br(this), this.render(e, t, r);
          this._onUpdate && !t && Ur(this, "onUpdate", !0),
            ((y === g && this._tTime >= this.totalDuration()) || (!y && m)) &&
              (u === this._start || Math.abs(d) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((e || !v) &&
                  ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                  hr(this, 1),
                !t &&
                  (!(e < 0) || m) &&
                  (y || m || !g) &&
                  (Ur(
                    this,
                    y === g && e >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(y < g && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (r.add = function (e, t) {
        var r = this;
        if ((ft(t) || (t = Or(this, t, e)), !(e instanceof Si))) {
          if (xt(e))
            return (
              e.forEach(function (e) {
                return r.add(e, t);
              }),
              this
            );
          if (ut(e)) return this.addLabel(e, t);
          if (!pt(e)) return this;
          e = Di.delayedCall(0, e);
        }
        return this !== e ? Er(this, e, t) : this;
      }),
      (r.getChildren = function (e, t, r, i) {
        void 0 === e && (e = !0),
          void 0 === t && (t = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -it);
        for (var s = [], n = this._first; n; )
          n._start >= i &&
            (n instanceof Di
              ? t && s.push(n)
              : (r && s.push(n),
                e && s.push.apply(s, n.getChildren(!0, t, r)))),
            (n = n._next);
        return s;
      }),
      (r.getById = function (e) {
        for (var t = this.getChildren(1, 1, 1), r = t.length; r--; )
          if (t[r].vars.id === e) return t[r];
      }),
      (r.remove = function (e) {
        return ut(e)
          ? this.removeLabel(e)
          : pt(e)
          ? this.killTweensOf(e)
          : (e.parent === this && pr(this, e),
            e === this._recent && (this._recent = this._last),
            fr(this));
      }),
      (r.totalTime = function (t, r) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Qt(
                li.time -
                  (this._ts > 0
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            e.prototype.totalTime.call(this, t, r),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (r.addLabel = function (e, t) {
        return (this.labels[e] = Or(this, t)), this;
      }),
      (r.removeLabel = function (e) {
        return delete this.labels[e], this;
      }),
      (r.addPause = function (e, t, r) {
        var i = Di.delayedCall(0, t || It, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Er(this, i, Or(this, e))
        );
      }),
      (r.removePause = function (e) {
        var t = this._first;
        for (e = Or(this, e); t; )
          t._start === e && "isPause" === t.data && hr(t), (t = t._next);
      }),
      (r.killTweensOf = function (e, t, r) {
        for (var i = this.getTweensOf(e, r), s = i.length; s--; )
          _i !== i[s] && i[s].kill(e, t);
        return this;
      }),
      (r.getTweensOf = function (e, t) {
        for (var r, i = [], s = Rr(e), n = this._first, a = ft(t); n; )
          n instanceof Di
            ? er(n._targets, s) &&
              (a
                ? (!_i || (n._initted && n._ts)) &&
                  n.globalTime(0) <= t &&
                  n.globalTime(n.totalDuration()) > t
                : !t || n.isActive()) &&
              i.push(n)
            : (r = n.getTweensOf(s, t)).length && i.push.apply(i, r),
            (n = n._next);
        return i;
      }),
      (r.tweenTo = function (e, t) {
        t = t || {};
        var r,
          i = this,
          s = Or(i, e),
          n = t,
          a = n.startAt,
          o = n.onStart,
          l = n.onStartParams,
          c = n.immediateRender,
          d = Di.to(
            i,
            ar(
              {
                ease: t.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: s,
                overwrite: "auto",
                duration:
                  t.duration ||
                  Math.abs(
                    (s - (a && "time" in a ? a.time : i._time)) / i.timeScale()
                  ) ||
                  st,
                onStart: function () {
                  if ((i.pause(), !r)) {
                    var e =
                      t.duration ||
                      Math.abs(
                        (s - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      );
                    d._dur !== e && kr(d, e, 0, 1).render(d._time, !0, !0),
                      (r = 1);
                  }
                  o && o.apply(d, l || []);
                },
              },
              t
            )
          );
        return c ? d.render(0) : d;
      }),
      (r.tweenFromTo = function (e, t, r) {
        return this.tweenTo(t, ar({ startAt: { time: Or(this, e) } }, r));
      }),
      (r.recent = function () {
        return this._recent;
      }),
      (r.nextLabel = function (e) {
        return void 0 === e && (e = this._time), jr(this, Or(this, e));
      }),
      (r.previousLabel = function (e) {
        return void 0 === e && (e = this._time), jr(this, Or(this, e), 1);
      }),
      (r.currentLabel = function (e) {
        return arguments.length
          ? this.seek(e, !0)
          : this.previousLabel(this._time + st);
      }),
      (r.shiftChildren = function (e, t, r) {
        void 0 === r && (r = 0);
        for (var i, s = this._first, n = this.labels; s; )
          s._start >= r && ((s._start += e), (s._end += e)), (s = s._next);
        if (t) for (i in n) n[i] >= r && (n[i] += e);
        return fr(this);
      }),
      (r.invalidate = function (t) {
        var r = this._first;
        for (this._lock = 0; r; ) r.invalidate(t), (r = r._next);
        return e.prototype.invalidate.call(this, t);
      }),
      (r.clear = function (e) {
        void 0 === e && (e = !0);
        for (var t, r = this._first; r; )
          (t = r._next), this.remove(r), (r = t);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          e && (this.labels = {}),
          fr(this)
        );
      }),
      (r.totalDuration = function (e) {
        var t,
          r,
          i,
          s = 0,
          n = this,
          a = n._last,
          o = it;
        if (arguments.length)
          return n.timeScale(
            (n._repeat < 0 ? n.duration() : n.totalDuration()) /
              (n.reversed() ? -e : e)
          );
        if (n._dirty) {
          for (i = n.parent; a; )
            (t = a._prev),
              a._dirty && a.totalDuration(),
              (r = a._start) > o && n._sort && a._ts && !n._lock
                ? ((n._lock = 1), (Er(n, a, r - a._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                a._ts &&
                ((s -= r),
                ((!i && !n._dp) || (i && i.smoothChildTiming)) &&
                  ((n._start += r / n._ts), (n._time -= r), (n._tTime -= r)),
                n.shiftChildren(-r, !1, -1 / 0),
                (o = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = t);
          kr(n, n === Le && n._time > s ? n._time : s, 1, 1), (n._dirty = 0);
        }
        return n._tDur;
      }),
      (t.updateRoot = function (e) {
        if ((Le._ts && (ir(Le, wr(e, Le)), ($e = li.frame)), li.frame >= Ht)) {
          Ht += tt.autoSleep || 120;
          var t = Le._first;
          if ((!t || !t._ts) && tt.autoSleep && li._listeners.length < 2) {
            for (; t && !t._ts; ) t = t._next;
            t || li.sleep();
          }
        }
      }),
      t
    );
  })(Si);
  ar(Ei.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var _i,
    Ti,
    Mi = function (e, t, r, i, s, n, a) {
      var o,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        m = new ji(this._pt, e, t, 0, 1, Fi, null, s),
        g = 0,
        v = 0;
      for (
        m.b = r,
          m.e = i,
          r += "",
          (h = ~(i += "").indexOf("random(")) && (i = Vr(i)),
          n && (n((f = [r, i]), e, t), (r = f[0]), (i = f[1])),
          l = r.match(Tt) || [];
        (o = Tt.exec(i));

      )
        (d = o[0]),
          (u = i.substring(g, o.index)),
          c ? (c = (c + 1) % 5) : "rgba(" === u.substr(-5) && (c = 1),
          d !== l[v++] &&
            ((p = parseFloat(l[v - 1]) || 0),
            (m._pt = {
              _next: m._pt,
              p: u || 1 === v ? u : ",",
              s: p,
              c: "=" === d.charAt(1) ? Jt(p, d) - p : parseFloat(d) - p,
              m: c && c < 4 ? Math.round : 0,
            }),
            (g = Tt.lastIndex));
      return (
        (m.c = g < i.length ? i.substring(g, i.length) : ""),
        (m.fp = a),
        (Mt.test(i) || h) && (m.e = 0),
        (this._pt = m),
        m
      );
    },
    Ci = function (e, t, r, i, s, n, a, o, l, c) {
      pt(i) && (i = i(s || 0, e, n));
      var d,
        u = e[t],
        p =
          "get" !== r
            ? r
            : pt(u)
            ? l
              ? e[
                  t.indexOf("set") || !pt(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](l)
              : e[t]()
            : u,
        h = pt(u) ? (l ? $i : qi) : Ii;
      if (
        (ut(i) &&
          (~i.indexOf("random(") && (i = Vr(i)),
          "=" === i.charAt(1) &&
            ((d = Jt(p, i) + (Ir(p) || 0)) || 0 === d) &&
            (i = d)),
        !c || p !== i || Ti)
      )
        return isNaN(p * i) || "" === i
          ? (!u && !(t in e) && Lt(t, i),
            Mi.call(this, e, t, p, i, h, o || tt.stringFilter, l))
          : ((d = new ji(
              this._pt,
              e,
              t,
              +p || 0,
              i - (p || 0),
              "boolean" == typeof u ? Bi : Ni,
              0,
              h
            )),
            l && (d.fp = l),
            a && d.modifier(a, this, e),
            (this._pt = d));
    },
    ki = function (e, t, r, i, s, n) {
      var a, o, l, c;
      if (
        Ft[e] &&
        !1 !==
          (a = new Ft[e]()).init(
            s,
            a.rawVars
              ? t[e]
              : (function (e, t, r, i, s) {
                  if (
                    (pt(e) && (e = Oi(e, s, t, r, i)),
                    !gt(e) || (e.style && e.nodeType) || xt(e) || bt(e))
                  )
                    return ut(e) ? Oi(e, s, t, r, i) : e;
                  var n,
                    a = {};
                  for (n in e) a[n] = Oi(e[n], s, t, r, i);
                  return a;
                })(t[e], i, s, n, r),
            r,
            i,
            n
          ) &&
        ((r._pt = o = new ji(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
        r !== Re)
      )
        for (l = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
          l[a._props[c]] = o;
      return a;
    },
    Pi = function e(t, r, i) {
      var s,
        n,
        a,
        o,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        m,
        g,
        v = t.vars,
        y = v.ease,
        w = v.startAt,
        b = v.immediateRender,
        x = v.lazy,
        S = v.onUpdate,
        E = v.runBackwards,
        _ = v.yoyoEase,
        T = v.keyframes,
        M = v.autoRevert,
        C = t._dur,
        k = t._startAt,
        P = t._targets,
        A = t.parent,
        O = A && "nested" === A.data ? A.vars.targets : P,
        L = "auto" === t._overwrite && !Pe,
        z = t.timeline;
      if (
        (z && (!T || !y) && (y = "none"),
        (t._ease = gi(y, rt.ease)),
        (t._yEase = _ ? fi(gi(!0 === _ ? y : _, rt.ease)) : 0),
        _ &&
          t._yoyo &&
          !t._repeat &&
          ((_ = t._yEase), (t._yEase = t._ease), (t._ease = _)),
        (t._from = !z && !!v.runBackwards),
        !z || (T && !v.stagger))
      ) {
        if (
          ((m = (u = P[0] ? jt(P[0]).harness : 0) && v[u.prop]),
          (s = cr(v, Xt)),
          k &&
            (k._zTime < 0 && k.progress(1),
            r < 0 && E && b && !M
              ? k.render(-1, !0)
              : k.revert(E && C ? $t : qt),
            (k._lazy = 0)),
          w)
        ) {
          if (
            (hr(
              (t._startAt = Di.set(
                P,
                ar(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: A,
                    immediateRender: !0,
                    lazy: !k && vt(x),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      S &&
                      function () {
                        return Ur(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  w
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            r < 0 && (Ae || (!b && !M)) && t._startAt.revert($t),
            b && C && r <= 0 && i <= 0)
          )
            return void (r && (t._zTime = r));
        } else if (E && C && !k)
          if (
            (r && (b = !1),
            (a = ar(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: b && !k && vt(x),
                immediateRender: b,
                stagger: 0,
                parent: A,
              },
              s
            )),
            m && (a[u.prop] = m),
            hr((t._startAt = Di.set(P, a))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            r < 0 && (Ae ? t._startAt.revert($t) : t._startAt.render(-1, !0)),
            (t._zTime = r),
            b)
          ) {
            if (!r) return;
          } else e(t._startAt, st, st);
        for (
          t._pt = t._ptCache = 0, x = (C && vt(x)) || (x && !C), n = 0;
          n < P.length;
          n++
        ) {
          if (
            ((d = (l = P[n])._gsap || Gt(P)[n]._gsap),
            (t._ptLookup[n] = h = {}),
            Bt[d.id] && Nt.length && tr(),
            (f = O === P ? n : O.indexOf(l)),
            u &&
              !1 !== (p = new u()).init(l, m || s, t, f, O) &&
              ((t._pt = o =
                new ji(t._pt, l, p.name, 0, 1, p.render, p, 0, p.priority)),
              p._props.forEach(function (e) {
                h[e] = o;
              }),
              p.priority && (c = 1)),
            !u || m)
          )
            for (a in s)
              Ft[a] && (p = ki(a, s, t, f, l, O))
                ? p.priority && (c = 1)
                : (h[a] = o =
                    Ci.call(t, l, a, "get", s[a], f, O, 0, v.stringFilter));
          t._op && t._op[n] && t.kill(l, t._op[n]),
            L &&
              t._pt &&
              ((_i = t),
              Le.killTweensOf(l, h, t.globalTime(r)),
              (g = !t.parent),
              (_i = 0)),
            t._pt && x && (Bt[d.id] = 1);
        }
        c && Gi(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = S),
        (t._initted = (!t._op || t._pt) && !g),
        T && r <= 0 && z.render(it, !0, !0);
    },
    Ai = function (e, t, r, i) {
      var s,
        n,
        a = t.ease || i || "power1.inOut";
      if (xt(t))
        (n = r[e] || (r[e] = [])),
          t.forEach(function (e, r) {
            return n.push({ t: (r / (t.length - 1)) * 100, v: e, e: a });
          });
      else
        for (s in t)
          (n = r[s] || (r[s] = [])),
            "ease" === s || n.push({ t: parseFloat(e), v: t[s], e: a });
    },
    Oi = function (e, t, r, i, s) {
      return pt(e)
        ? e.call(t, r, i, s)
        : ut(e) && ~e.indexOf("random(")
        ? Vr(e)
        : e;
    },
    Li = Vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    zi = {};
  Kt(Li + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
    return (zi[e] = 1);
  });
  var Di = (function (e) {
    function t(t, r, i, s) {
      var n;
      "number" == typeof r && ((i.duration = r), (r = i), (i = null));
      var a,
        o,
        l,
        c,
        d,
        u,
        p,
        h,
        f = (n = e.call(this, s ? r : dr(r)) || this).vars,
        m = f.duration,
        g = f.delay,
        v = f.immediateRender,
        y = f.stagger,
        w = f.overwrite,
        b = f.keyframes,
        x = f.defaults,
        S = f.scrollTrigger,
        E = f.yoyoEase,
        _ = r.parent || Le,
        T = (xt(t) || bt(t) ? ft(t[0]) : "length" in r) ? [t] : Rr(t);
      if (
        ((n._targets = T.length
          ? Gt(T)
          : zt(
              "GSAP target " + t + " not found. https://gsap.com",
              !tt.nullTargetWarn
            ) || []),
        (n._ptLookup = []),
        (n._overwrite = w),
        b || y || wt(m) || wt(g))
      ) {
        if (
          ((r = n.vars),
          (a = n.timeline =
            new Ei({
              data: "nested",
              defaults: x || {},
              targets: _ && "nested" === _.data ? _.vars.targets : T,
            })).kill(),
          (a.parent = a._dp = Ce(n)),
          (a._start = 0),
          y || wt(m) || wt(g))
        ) {
          if (((c = T.length), (p = y && Br(y)), gt(y)))
            for (d in y) ~Li.indexOf(d) && (h || (h = {}), (h[d] = y[d]));
          for (o = 0; o < c; o++)
            ((l = cr(r, zi)).stagger = 0),
              E && (l.yoyoEase = E),
              h && or(l, h),
              (u = T[o]),
              (l.duration = +Oi(m, Ce(n), o, u, T)),
              (l.delay = (+Oi(g, Ce(n), o, u, T) || 0) - n._delay),
              !y &&
                1 === c &&
                l.delay &&
                ((n._delay = g = l.delay), (n._start += g), (l.delay = 0)),
              a.to(u, l, p ? p(o, u, T) : 0),
              (a._ease = di.none);
          a.duration() ? (m = g = 0) : (n.timeline = 0);
        } else if (b) {
          dr(ar(a.vars.defaults, { ease: "none" })),
            (a._ease = gi(b.ease || r.ease || "none"));
          var M,
            C,
            k,
            P = 0;
          if (xt(b))
            b.forEach(function (e) {
              return a.to(T, e, ">");
            }),
              a.duration();
          else {
            for (d in ((l = {}), b))
              "ease" === d || "easeEach" === d || Ai(d, b[d], l, b.easeEach);
            for (d in l)
              for (
                M = l[d].sort(function (e, t) {
                  return e.t - t.t;
                }),
                  P = 0,
                  o = 0;
                o < M.length;
                o++
              )
                ((k = {
                  ease: (C = M[o]).e,
                  duration: ((C.t - (o ? M[o - 1].t : 0)) / 100) * m,
                })[d] = C.v),
                  a.to(T, k, P),
                  (P += k.duration);
            a.duration() < m && a.to({}, { duration: m - a.duration() });
          }
        }
        m || n.duration((m = a.duration()));
      } else n.timeline = 0;
      return (
        !0 === w && !Pe && ((_i = Ce(n)), Le.killTweensOf(T), (_i = 0)),
        Er(_, Ce(n), i),
        r.reversed && n.reverse(),
        r.paused && n.paused(!0),
        (v ||
          (!m &&
            !b &&
            n._start === Qt(_._time) &&
            vt(v) &&
            gr(Ce(n)) &&
            "nested" !== _.data)) &&
          ((n._tTime = -st), n.render(Math.max(0, -g) || 0)),
        S && _r(Ce(n), S),
        n
      );
    }
    ke(t, e);
    var r = t.prototype;
    return (
      (r.render = function (e, t, r) {
        var i,
          s,
          n,
          a,
          o,
          l,
          c,
          d,
          u,
          p = this._time,
          h = this._tDur,
          f = this._dur,
          m = e < 0,
          g = e > h - st && !m ? h : e < st ? 0 : e;
        if (f) {
          if (
            g !== this._tTime ||
            !e ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== m) ||
            this._lazy
          ) {
            if (((i = g), (d = this.timeline), this._repeat)) {
              if (((a = f + this._rDelay), this._repeat < -1 && m))
                return this.totalTime(100 * a + e, t, r);
              if (
                ((i = Qt(g % a)),
                g === h
                  ? ((n = this._repeat), (i = f))
                  : (n = ~~(o = Qt(g / a))) && n === o
                  ? ((i = f), n--)
                  : i > f && (i = f),
                (l = this._yoyo && 1 & n) && ((u = this._yEase), (i = f - i)),
                (o = yr(this._tTime, a)),
                i === p && !r && this._initted && n === o)
              )
                return (this._tTime = g), this;
              n !== o &&
                (d && this._yEase && mi(d, l),
                this.vars.repeatRefresh &&
                  !l &&
                  !this._lock &&
                  i !== a &&
                  this._initted &&
                  ((this._lock = r = 1),
                  (this.render(Qt(a * n), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Tr(this, m ? e : i, r, t, g)) return (this._tTime = 0), this;
              if (
                !(p === this._time || (r && this.vars.repeatRefresh && n !== o))
              )
                return this;
              if (f !== this._dur) return this.render(e, t, r);
            }
            if (
              ((this._tTime = g),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = c = (u || this._ease)(i / f)),
              this._from && (this.ratio = c = 1 - c),
              !p && g && !t && !o && (Ur(this, "onStart"), this._tTime !== g))
            )
              return this;
            for (s = this._pt; s; ) s.r(c, s.d), (s = s._next);
            (d &&
              d.render(e < 0 ? e : d._dur * d._ease(i / this._dur), t, r)) ||
              (this._startAt && (this._zTime = e)),
              this._onUpdate &&
                !t &&
                (m && mr(this, e, 0, r), Ur(this, "onUpdate")),
              this._repeat &&
                n !== o &&
                this.vars.onRepeat &&
                !t &&
                this.parent &&
                Ur(this, "onRepeat"),
              (g === this._tDur || !g) &&
                this._tTime === g &&
                (m && !this._onUpdate && mr(this, e, 0, !0),
                (e || !f) &&
                  ((g === this._tDur && this._ts > 0) ||
                    (!g && this._ts < 0)) &&
                  hr(this, 1),
                !t &&
                  (!m || p) &&
                  (g || p || l) &&
                  (Ur(this, g === h ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(g < h && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (e, t, r, i) {
            var s,
              n,
              a,
              o = e.ratio,
              l =
                t < 0 ||
                (!t &&
                  ((!e._start && Mr(e) && (e._initted || !Cr(e))) ||
                    ((e._ts < 0 || e._dp._ts < 0) && !Cr(e))))
                  ? 0
                  : 1,
              c = e._rDelay,
              d = 0;
            if (
              (c &&
                e._repeat &&
                ((d = Dr(0, e._tDur, t)),
                (n = yr(d, c)),
                e._yoyo && 1 & n && (l = 1 - l),
                n !== yr(e._tTime, c) &&
                  ((o = 1 - l),
                  e.vars.repeatRefresh && e._initted && e.invalidate())),
              l !== o || Ae || i || e._zTime === st || (!t && e._zTime))
            ) {
              if (!e._initted && Tr(e, t, i, r, d)) return;
              for (
                a = e._zTime,
                  e._zTime = t || (r ? st : 0),
                  r || (r = t && !a),
                  e.ratio = l,
                  e._from && (l = 1 - l),
                  e._time = 0,
                  e._tTime = d,
                  s = e._pt;
                s;

              )
                s.r(l, s.d), (s = s._next);
              t < 0 && mr(e, t, 0, !0),
                e._onUpdate && !r && Ur(e, "onUpdate"),
                d && e._repeat && !r && e.parent && Ur(e, "onRepeat"),
                (t >= e._tDur || t < 0) &&
                  e.ratio === l &&
                  (l && hr(e, 1),
                  !r &&
                    !Ae &&
                    (Ur(e, l ? "onComplete" : "onReverseComplete", !0),
                    e._prom && e._prom()));
            } else e._zTime || (e._zTime = t);
          })(this, e, t, r);
        return this;
      }),
      (r.targets = function () {
        return this._targets;
      }),
      (r.invalidate = function (t) {
        return (
          (!t || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          e.prototype.invalidate.call(this, t)
        );
      }),
      (r.resetTo = function (e, t, r, i, s) {
        Xe || li.wake(), this._ts || this.play();
        var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Pi(this, n),
          (function (e, t, r, i, s, n, a, o) {
            var l,
              c,
              d,
              u,
              p = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
            if (!p)
              for (
                p = e._ptCache[t] = [], d = e._ptLookup, u = e._targets.length;
                u--;

              ) {
                if ((l = d[u][t]) && l.d && l.d._pt)
                  for (l = l.d._pt; l && l.p !== t && l.fp !== t; ) l = l._next;
                if (!l)
                  return (
                    (Ti = 1),
                    (e.vars[t] = "+=0"),
                    Pi(e, a),
                    (Ti = 0),
                    o ? zt(t + " not eligible for reset") : 1
                  );
                p.push(l);
              }
            for (u = p.length; u--; )
              ((l = (c = p[u])._pt || c).s =
                (!i && 0 !== i) || s ? l.s + (i || 0) + n * l.c : i),
                (l.c = r - l.s),
                c.e && (c.e = Zt(r) + Ir(c.e)),
                c.b && (c.b = l.s + Ir(c.b));
          })(this, e, t, r, i, this._ease(n / this._dur), n, s)
            ? this.resetTo(e, t, r, i, 1)
            : (xr(this, 0),
              this.parent ||
                ur(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (r.kill = function (e, t) {
        if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? Kr(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ae),
            this
          );
        if (this.timeline) {
          var r = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(e, t, _i && !0 !== _i.vars.overwrite)
              ._first || Kr(this),
            this.parent &&
              r !== this.timeline.totalDuration() &&
              kr(this, (this._dur * this.timeline._tDur) / r, 0, 1),
            this
          );
        }
        var i,
          s,
          n,
          a,
          o,
          l,
          c,
          d = this._targets,
          u = e ? Rr(e) : d,
          p = this._ptLookup,
          h = this._pt;
        if (
          (!t || "all" === t) &&
          (function (e, t) {
            for (
              var r = e.length, i = r === t.length;
              i && r-- && e[r] === t[r];

            );
            return r < 0;
          })(d, u)
        )
          return "all" === t && (this._pt = 0), Kr(this);
        for (
          i = this._op = this._op || [],
            "all" !== t &&
              (ut(t) &&
                ((o = {}),
                Kt(t, function (e) {
                  return (o[e] = 1);
                }),
                (t = o)),
              (t = (function (e, t) {
                var r,
                  i,
                  s,
                  n,
                  a = e[0] ? jt(e[0]).harness : 0,
                  o = a && a.aliases;
                if (!o) return t;
                for (i in ((r = or({}, t)), o))
                  if ((i in r))
                    for (s = (n = o[i].split(",")).length; s--; )
                      r[n[s]] = r[i];
                return r;
              })(d, t))),
            c = d.length;
          c--;

        )
          if (~u.indexOf(d[c]))
            for (o in ((s = p[c]),
            "all" === t
              ? ((i[c] = t), (a = s), (n = {}))
              : ((n = i[c] = i[c] || {}), (a = t)),
            a))
              (l = s && s[o]) &&
                ((!("kill" in l.d) || !0 === l.d.kill(o)) && pr(this, l, "_pt"),
                delete s[o]),
                "all" !== n && (n[o] = 1);
        return this._initted && !this._pt && h && Kr(this), this;
      }),
      (t.to = function (e, r) {
        return new t(e, r, arguments[2]);
      }),
      (t.from = function (e, t) {
        return Lr(1, arguments);
      }),
      (t.delayedCall = function (e, r, i, s) {
        return new t(r, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: e,
          onComplete: r,
          onReverseComplete: r,
          onCompleteParams: i,
          onReverseCompleteParams: i,
          callbackScope: s,
        });
      }),
      (t.fromTo = function (e, t, r) {
        return Lr(2, arguments);
      }),
      (t.set = function (e, r) {
        return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new t(e, r);
      }),
      (t.killTweensOf = function (e, t, r) {
        return Le.killTweensOf(e, t, r);
      }),
      t
    );
  })(Si);
  ar(Di.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Kt("staggerTo,staggerFrom,staggerFromTo", function (e) {
      Di[e] = function () {
        var t = new Ei(),
          r = qr.call(arguments, 0);
        return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r);
      };
    });
  var Ii = function (e, t, r) {
      return (e[t] = r);
    },
    qi = function (e, t, r) {
      return e[t](r);
    },
    $i = function (e, t, r, i) {
      return e[t](i.fp, r);
    },
    Ri = function (e, t, r) {
      return e.setAttribute(t, r);
    },
    Xi = function (e, t) {
      return pt(e[t]) ? qi : mt(e[t]) && e.setAttribute ? Ri : Ii;
    },
    Ni = function (e, t) {
      return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
    },
    Bi = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Fi = function (e, t) {
      var r = t._pt,
        i = "";
      if (!e && t.b) i = t.b;
      else if (1 === e && t.e) i = t.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * e)
              : Math.round(1e4 * (r.s + r.c * e)) / 1e4) +
            i),
            (r = r._next);
        i += t.c;
      }
      t.set(t.t, t.p, i, t);
    },
    Yi = function (e, t) {
      for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
    },
    Hi = function (e, t, r, i) {
      for (var s, n = this._pt; n; )
        (s = n._next), n.p === i && n.modifier(e, t, r), (n = s);
    },
    Wi = function (e) {
      for (var t, r, i = this._pt; i; )
        (r = i._next),
          (i.p === e && !i.op) || i.op === e
            ? pr(this, i, "_pt")
            : i.dep || (t = 1),
          (i = r);
      return !t;
    },
    Vi = function (e, t, r, i) {
      i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
    },
    Gi = function (e) {
      for (var t, r, i, s, n = e._pt; n; ) {
        for (t = n._next, r = i; r && r.pr > n.pr; ) r = r._next;
        (n._prev = r ? r._prev : s) ? (n._prev._next = n) : (i = n),
          (n._next = r) ? (r._prev = n) : (s = n),
          (n = t);
      }
      e._pt = i;
    },
    ji = (function () {
      function e(e, t, r, i, s, n, a, o, l) {
        (this.t = t),
          (this.s = i),
          (this.c = s),
          (this.p = r),
          (this.r = n || Ni),
          (this.d = a || this),
          (this.set = o || Ii),
          (this.pr = l || 0),
          (this._next = e),
          e && (e._prev = this);
      }
      return (
        (e.prototype.modifier = function (e, t, r) {
          (this.mSet = this.mSet || this.set),
            (this.set = Vi),
            (this.m = e),
            (this.mt = r),
            (this.tween = t);
        }),
        e
      );
    })();
  Kt(
    Vt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (e) {
      return (Xt[e] = 1);
    }
  ),
    (Pt.TweenMax = Pt.TweenLite = Di),
    (Pt.TimelineLite = Pt.TimelineMax = Ei),
    (Le = new Ei({
      sortChildren: !1,
      defaults: rt,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (tt.stringFilter = oi);
  var Ui = [],
    Ki = {},
    Zi = [],
    Qi = 0,
    Ji = 0,
    es = function (e) {
      return (Ki[e] || Zi).map(function (e) {
        return e();
      });
    },
    ts = function () {
      var e = Date.now(),
        t = [];
      e - Qi > 2 &&
        (es("matchMediaInit"),
        Ui.forEach(function (e) {
          var r,
            i,
            s,
            n,
            a = e.queries,
            o = e.conditions;
          for (i in a)
            (r = ze.matchMedia(a[i]).matches) && (s = 1),
              r !== o[i] && ((o[i] = r), (n = 1));
          n && (e.revert(), s && t.push(e));
        }),
        es("matchMediaRevert"),
        t.forEach(function (e) {
          return e.onMatch(e, function (t) {
            return e.add(null, t);
          });
        }),
        (Qi = e),
        es("matchMedia"));
    },
    rs = (function () {
      function e(e, t) {
        (this.selector = t && Xr(t)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Ji++),
          e && this.add(e);
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t, r) {
          pt(e) && ((r = t), (t = e), (e = pt));
          var i = this,
            s = function () {
              var e,
                s = Oe,
                n = i.selector;
              return (
                s && s !== i && s.data.push(i),
                r && (i.selector = Xr(r)),
                (Oe = i),
                (e = t.apply(i, arguments)),
                pt(e) && i._r.push(e),
                (Oe = s),
                (i.selector = n),
                (i.isReverted = !1),
                e
              );
            };
          return (
            (i.last = s),
            e === pt
              ? s(i, function (e) {
                  return i.add(null, e);
                })
              : e
              ? (i[e] = s)
              : s
          );
        }),
        (t.ignore = function (e) {
          var t = Oe;
          (Oe = null), e(this), (Oe = t);
        }),
        (t.getTweens = function () {
          var t = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof e
                ? t.push.apply(t, r.getTweens())
                : r instanceof Di &&
                    !(r.parent && "nested" === r.parent.data) &&
                    t.push(r);
            }),
            t
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (e, t) {
          var r = this;
          if (
            (e
              ? (function () {
                  for (var t, i = r.getTweens(), s = r.data.length; s--; )
                    "isFlip" === (t = r.data[s]).data &&
                      (t.revert(),
                      t.getChildren(!0, !0, !1).forEach(function (e) {
                        return i.splice(i.indexOf(e), 1);
                      }));
                  for (
                    i
                      .map(function (e) {
                        return {
                          g:
                            e._dur ||
                            e._delay ||
                            (e._sat && !e._sat.vars.immediateRender)
                              ? e.globalTime(0)
                              : -1 / 0,
                          t: e,
                        };
                      })
                      .sort(function (e, t) {
                        return t.g - e.g || -1 / 0;
                      })
                      .forEach(function (t) {
                        return t.t.revert(e);
                      }),
                      s = r.data.length;
                    s--;

                  )
                    (t = r.data[s]) instanceof Ei
                      ? "nested" !== t.data &&
                        (t.scrollTrigger && t.scrollTrigger.revert(), t.kill())
                      : !(t instanceof Di) && t.revert && t.revert(e);
                  r._r.forEach(function (t) {
                    return t(e, r);
                  }),
                    (r.isReverted = !0);
                })()
              : this.data.forEach(function (e) {
                  return e.kill && e.kill();
                }),
            this.clear(),
            t)
          )
            for (var i = Ui.length; i--; )
              Ui[i].id === this.id && Ui.splice(i, 1);
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        e
      );
    })(),
    is = (function () {
      function e(e) {
        (this.contexts = []), (this.scope = e), Oe && Oe.data.push(this);
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t, r) {
          gt(e) || (e = { matches: e });
          var i,
            s,
            n,
            a = new rs(0, r || this.scope),
            o = (a.conditions = {});
          for (s in (Oe && !a.selector && (a.selector = Oe.selector),
          this.contexts.push(a),
          (t = a.add("onMatch", t)),
          (a.queries = e),
          e))
            "all" === s
              ? (n = 1)
              : (i = ze.matchMedia(e[s])) &&
                (Ui.indexOf(a) < 0 && Ui.push(a),
                (o[s] = i.matches) && (n = 1),
                i.addListener
                  ? i.addListener(ts)
                  : i.addEventListener("change", ts));
          return (
            n &&
              t(a, function (e) {
                return a.add(null, e);
              }),
            this
          );
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        (t.kill = function (e) {
          this.contexts.forEach(function (t) {
            return t.kill(e, !0);
          });
        }),
        e
      );
    })(),
    ss = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        t.forEach(function (e) {
          return Qr(e);
        });
      },
      timeline: function (e) {
        return new Ei(e);
      },
      getTweensOf: function (e, t) {
        return Le.getTweensOf(e, t);
      },
      getProperty: function (e, t, r, i) {
        ut(e) && (e = Rr(e)[0]);
        var s = jt(e || {}).get,
          n = r ? nr : sr;
        return (
          "native" === r && (r = ""),
          e &&
            (t
              ? n(((Ft[t] && Ft[t].get) || s)(e, t, r, i))
              : function (t, r, i) {
                  return n(((Ft[t] && Ft[t].get) || s)(e, t, r, i));
                })
        );
      },
      quickSetter: function (e, t, r) {
        if ((e = Rr(e)).length > 1) {
          var i = e.map(function (e) {
              return os.quickSetter(e, t, r);
            }),
            s = i.length;
          return function (e) {
            for (var t = s; t--; ) i[t](e);
          };
        }
        e = e[0] || {};
        var n = Ft[t],
          a = jt(e),
          o = (a.harness && (a.harness.aliases || {})[t]) || t,
          l = n
            ? function (t) {
                var i = new n();
                (Re._pt = 0),
                  i.init(e, r ? t + r : t, Re, 0, [e]),
                  i.render(1, i),
                  Re._pt && Yi(1, Re);
              }
            : a.set(e, o);
        return n
          ? l
          : function (t) {
              return l(e, o, r ? t + r : t, a, 1);
            };
      },
      quickTo: function (e, t, r) {
        var i,
          s = os.to(
            e,
            ar(
              (((i = {})[t] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
              r || {}
            )
          ),
          n = function (e, r, i) {
            return s.resetTo(t, e, r, i);
          };
        return (n.tween = s), n;
      },
      isTweening: function (e) {
        return Le.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = gi(e.ease, rt.ease)), lr(rt, e || {});
      },
      config: function (e) {
        return lr(tt, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          r = e.effect,
          i = e.plugins,
          s = e.defaults,
          n = e.extendTimeline;
        (i || "").split(",").forEach(function (e) {
          return (
            e &&
            !Ft[e] &&
            !Pt[e] &&
            zt(t + " effect requires " + e + " plugin.")
          );
        }),
          (Yt[t] = function (e, t, i) {
            return r(Rr(e), ar(t || {}, s), i);
          }),
          n &&
            (Ei.prototype[t] = function (e, r, i) {
              return this.add(Yt[t](e, gt(r) ? r : (i = r) && {}, this), i);
            });
      },
      registerEase: function (e, t) {
        di[e] = gi(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? gi(e, t) : di;
      },
      getById: function (e) {
        return Le.getById(e);
      },
      exportRoot: function (e, t) {
        void 0 === e && (e = {});
        var r,
          i,
          s = new Ei(e);
        for (
          s.smoothChildTiming = vt(e.smoothChildTiming),
            Le.remove(s),
            s._dp = 0,
            s._time = s._tTime = Le._time,
            r = Le._first;
          r;

        )
          (i = r._next),
            (t ||
              !(
                !r._dur &&
                r instanceof Di &&
                r.vars.onComplete === r._targets[0]
              )) &&
              Er(s, r, r._start - r._delay),
            (r = i);
        return Er(Le, s, 0), s;
      },
      context: function (e, t) {
        return e ? new rs(e, t) : Oe;
      },
      matchMedia: function (e) {
        return new is(e);
      },
      matchMediaRefresh: function () {
        return (
          Ui.forEach(function (e) {
            var t,
              r,
              i = e.conditions;
            for (r in i) i[r] && ((i[r] = !1), (t = 1));
            t && e.revert();
          }) || ts()
        );
      },
      addEventListener: function (e, t) {
        var r = Ki[e] || (Ki[e] = []);
        ~r.indexOf(t) || r.push(t);
      },
      removeEventListener: function (e, t) {
        var r = Ki[e],
          i = r && r.indexOf(t);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: function e(t, r, i) {
          var s = r - t;
          return xt(t)
            ? Wr(t, e(0, t.length), r)
            : zr(i, function (e) {
                return ((s + ((e - t) % s)) % s) + t;
              });
        },
        wrapYoyo: function e(t, r, i) {
          var s = r - t,
            n = 2 * s;
          return xt(t)
            ? Wr(t, e(0, t.length - 1), r)
            : zr(i, function (e) {
                return t + ((e = (n + ((e - t) % n)) % n || 0) > s ? n - e : e);
              });
        },
        distribute: Br,
        random: Hr,
        snap: Yr,
        normalize: function (e, t, r) {
          return Gr(e, t, 0, 1, r);
        },
        getUnit: Ir,
        clamp: function (e, t, r) {
          return zr(r, function (r) {
            return Dr(e, t, r);
          });
        },
        splitColor: ri,
        toArray: Rr,
        selector: Xr,
        mapRange: Gr,
        pipe: function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return function (e) {
            return t.reduce(function (e, t) {
              return t(e);
            }, e);
          };
        },
        unitize: function (e, t) {
          return function (r) {
            return e(parseFloat(r)) + (t || Ir(r));
          };
        },
        interpolate: function e(t, r, i, s) {
          var n = isNaN(t + r)
            ? 0
            : function (e) {
                return (1 - e) * t + e * r;
              };
          if (!n) {
            var a,
              o,
              l,
              c,
              d,
              u = ut(t),
              p = {};
            if ((!0 === i && (s = 1) && (i = null), u))
              (t = { p: t }), (r = { p: r });
            else if (xt(t) && !xt(r)) {
              for (l = [], c = t.length, d = c - 2, o = 1; o < c; o++)
                l.push(e(t[o - 1], t[o]));
              c--,
                (n = function (e) {
                  e *= c;
                  var t = Math.min(d, ~~e);
                  return l[t](e - t);
                }),
                (i = r);
            } else s || (t = or(xt(t) ? [] : {}, t));
            if (!l) {
              for (a in r) Ci.call(p, t, a, "get", r[a]);
              n = function (e) {
                return Yi(e, p) || (u ? t.p : t);
              };
            }
          }
          return zr(i, n);
        },
        shuffle: Nr,
      },
      install: Ot,
      effects: Yt,
      ticker: li,
      updateRoot: Ei.updateRoot,
      plugins: Ft,
      globalTimeline: Le,
      core: {
        PropTween: ji,
        globals: Dt,
        Tween: Di,
        Timeline: Ei,
        Animation: Si,
        getCache: jt,
        _removeLinkedListItem: pr,
        reverting: function () {
          return Ae;
        },
        context: function (e) {
          return e && Oe && (Oe.data.push(e), (e._ctx = Oe)), Oe;
        },
        suppressOverwrites: function (e) {
          return (Pe = e);
        },
      },
    };
  Kt("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
    return (ss[e] = Di[e]);
  }),
    li.add(Ei.updateRoot),
    (Re = ss.to({}, { duration: 0 }));
  var ns = function (e, t) {
      for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
        r = r._next;
      return r;
    },
    as = function (e, t) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (e, r, i) {
          i._onInit = function (e) {
            var i, s;
            if (
              (ut(r) &&
                ((i = {}),
                Kt(r, function (e) {
                  return (i[e] = 1);
                }),
                (r = i)),
              t)
            ) {
              for (s in ((i = {}), r)) i[s] = t(r[s]);
              r = i;
            }
            !(function (e, t) {
              var r,
                i,
                s,
                n = e._targets;
              for (r in t)
                for (i = n.length; i--; )
                  (s = e._ptLookup[i][r]) &&
                    (s = s.d) &&
                    (s._pt && (s = ns(s, r)),
                    s && s.modifier && s.modifier(t[r], e, n[i], r));
            })(e, r);
          };
        },
      };
    },
    os =
      ss.registerPlugin(
        {
          name: "attr",
          init: function (e, t, r, i, s) {
            var n, a, o;
            for (n in ((this.tween = r), t))
              (o = e.getAttribute(n) || ""),
                ((a = this.add(
                  e,
                  "setAttribute",
                  (o || 0) + "",
                  t[n],
                  i,
                  s,
                  0,
                  0,
                  n
                )).op = n),
                (a.b = o),
                this._props.push(n);
          },
          render: function (e, t) {
            for (var r = t._pt; r; )
              Ae ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (e, t) {
            for (var r = t.length; r--; )
              this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
          },
        },
        as("roundProps", Fr),
        as("modifiers"),
        as("snap", Yr)
      ) || ss;
  (Di.version = Ei.version = os.version = "3.13.0"),
    (qe = 1),
    yt() && ci(),
    di.Power0,
    di.Power1,
    di.Power2,
    di.Power3,
    di.Power4,
    di.Linear,
    di.Quad,
    di.Cubic,
    di.Quart,
    di.Quint,
    di.Strong,
    di.Elastic,
    di.Back,
    di.SteppedEase,
    di.Bounce,
    di.Sine,
    di.Expo,
    di.Circ;
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */
  var ls,
    cs,
    ds,
    us,
    ps,
    hs,
    fs,
    ms,
    gs = {},
    vs = 180 / Math.PI,
    ys = Math.PI / 180,
    ws = Math.atan2,
    bs = 1e8,
    xs = /([A-Z])/g,
    Ss = /(left|right|width|margin|padding|x)/i,
    Es = /[\s,\(]\S/,
    _s = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ts = function (e, t) {
      return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
    },
    Ms = function (e, t) {
      return t.set(
        t.t,
        t.p,
        1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
        t
      );
    },
    Cs = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
        t
      );
    },
    ks = function (e, t) {
      var r = t.s + t.c * e;
      t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Ps = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    As = function (e, t) {
      return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
    },
    Os = function (e, t, r) {
      return (e.style[t] = r);
    },
    Ls = function (e, t, r) {
      return e.style.setProperty(t, r);
    },
    zs = function (e, t, r) {
      return (e._gsap[t] = r);
    },
    Ds = function (e, t, r) {
      return (e._gsap.scaleX = e._gsap.scaleY = r);
    },
    Is = function (e, t, r, i, s) {
      var n = e._gsap;
      (n.scaleX = n.scaleY = r), n.renderTransform(s, n);
    },
    qs = function (e, t, r, i, s) {
      var n = e._gsap;
      (n[t] = r), n.renderTransform(s, n);
    },
    $s = "transform",
    Rs = $s + "Origin",
    Xs = function e(t, r) {
      var i = this,
        s = this.target,
        n = s.style,
        a = s._gsap;
      if (t in gs && n) {
        if (((this.tfm = this.tfm || {}), "transform" === t))
          return _s.transform.split(",").forEach(function (t) {
            return e.call(i, t, r);
          });
        if (
          (~(t = _s[t] || t).indexOf(",")
            ? t.split(",").forEach(function (e) {
                return (i.tfm[e] = sn(s, e));
              })
            : (this.tfm[t] = a.x ? a[t] : sn(s, t)),
          t === Rs && (this.tfm.zOrigin = a.zOrigin),
          this.props.indexOf($s) >= 0)
        )
          return;
        a.svg &&
          ((this.svgo = s.getAttribute("data-svg-origin")),
          this.props.push(Rs, r, "")),
          (t = $s);
      }
      (n || r) && this.props.push(t, r, n[t]);
    },
    Ns = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Bs = function () {
      var e,
        t,
        r = this.props,
        i = this.target,
        s = i.style,
        n = i._gsap;
      for (e = 0; e < r.length; e += 3)
        r[e + 1]
          ? 2 === r[e + 1]
            ? i[r[e]](r[e + 2])
            : (i[r[e]] = r[e + 2])
          : r[e + 2]
          ? (s[r[e]] = r[e + 2])
          : s.removeProperty(
              "--" === r[e].substr(0, 2)
                ? r[e]
                : r[e].replace(xs, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (t in this.tfm) n[t] = this.tfm[t];
        n.svg &&
          (n.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          (!(e = fs()) || !e.isStart) &&
            !s[$s] &&
            (Ns(s),
            n.zOrigin &&
              s[Rs] &&
              ((s[Rs] += " " + n.zOrigin + "px"),
              (n.zOrigin = 0),
              n.renderTransform()),
            (n.uncache = 1));
      }
    },
    Fs = function (e, t) {
      var r = { target: e, props: [], revert: Bs, save: Xs };
      return (
        e._gsap || os.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (e) {
            return r.save(e);
          }),
        r
      );
    },
    Ys = function (e, t) {
      var r = cs.createElementNS
        ? cs.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : cs.createElement(e);
      return r && r.style ? r : cs.createElement(e);
    },
    Hs = function e(t, r, i) {
      var s = getComputedStyle(t);
      return (
        s[r] ||
        s.getPropertyValue(r.replace(xs, "-$1").toLowerCase()) ||
        s.getPropertyValue(r) ||
        (!i && e(t, Vs(r) || r, 1)) ||
        ""
      );
    },
    Ws = "O,Moz,ms,Ms,Webkit".split(","),
    Vs = function (e, t, r) {
      var i = (t || ps).style,
        s = 5;
      if (e in i && !r) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        s-- && !(Ws[s] + e in i);

      );
      return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? Ws[s] : "") + e;
    },
    Gs = function () {
      "undefined" != typeof window &&
        window.document &&
        ((ls = window),
        (cs = ls.document),
        (ds = cs.documentElement),
        (ps = Ys("div") || { style: {} }),
        Ys("div"),
        ($s = Vs($s)),
        (Rs = $s + "Origin"),
        (ps.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (ms = !!Vs("perspective")),
        (fs = os.core.reverting),
        (us = 1));
    },
    js = function (e) {
      var t,
        r = e.ownerSVGElement,
        i = Ys(
          "svg",
          (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        s = e.cloneNode(!0);
      (s.style.display = "block"), i.appendChild(s), ds.appendChild(i);
      try {
        t = s.getBBox();
      } catch (e) {}
      return i.removeChild(s), ds.removeChild(i), t;
    },
    Us = function (e, t) {
      for (var r = t.length; r--; )
        if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
    },
    Ks = function (e) {
      var t, r;
      try {
        t = e.getBBox();
      } catch (i) {
        (t = js(e)), (r = 1);
      }
      return (
        (t && (t.width || t.height)) || r || (t = js(e)),
        !t || t.width || t.x || t.y
          ? t
          : {
              x: +Us(e, ["x", "cx", "x1"]) || 0,
              y: +Us(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    Zs = function (e) {
      return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !Ks(e));
    },
    Qs = function (e, t) {
      if (t) {
        var r,
          i = e.style;
        t in gs && t !== Rs && (t = $s),
          i.removeProperty
            ? (("ms" === (r = t.substr(0, 2)) || "webkit" === t.substr(0, 6)) &&
                (t = "-" + t),
              i.removeProperty(
                "--" === r ? t : t.replace(xs, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Js = function (e, t, r, i, s, n) {
      var a = new ji(e._pt, t, r, 0, 1, n ? As : Ps);
      return (e._pt = a), (a.b = i), (a.e = s), e._props.push(r), a;
    },
    en = { deg: 1, rad: 1, turn: 1 },
    tn = { grid: 1, flex: 1 },
    rn = function e(t, r, i, s) {
      var n,
        a,
        o,
        l,
        c = parseFloat(i) || 0,
        d = (i + "").trim().substr((c + "").length) || "px",
        u = ps.style,
        p = Ss.test(r),
        h = "svg" === t.tagName.toLowerCase(),
        f = (h ? "client" : "offset") + (p ? "Width" : "Height"),
        m = 100,
        g = "px" === s,
        v = "%" === s;
      if (s === d || !c || en[s] || en[d]) return c;
      if (
        ("px" !== d && !g && (c = e(t, r, i, "px")),
        (l = t.getCTM && Zs(t)),
        (v || "%" === d) && (gs[r] || ~r.indexOf("adius")))
      )
        return (
          (n = l ? t.getBBox()[p ? "width" : "height"] : t[f]),
          Zt(v ? (c / n) * m : (c / 100) * n)
        );
      if (
        ((u[p ? "width" : "height"] = m + (g ? d : s)),
        (a =
          ("rem" !== s && ~r.indexOf("adius")) ||
          ("em" === s && t.appendChild && !h)
            ? t
            : t.parentNode),
        l && (a = (t.ownerSVGElement || {}).parentNode),
        (!a || a === cs || !a.appendChild) && (a = cs.body),
        (o = a._gsap) && v && o.width && p && o.time === li.time && !o.uncache)
      )
        return Zt((c / o.width) * m);
      if (!v || ("height" !== r && "width" !== r))
        (v || "%" === d) &&
          !tn[Hs(a, "display")] &&
          (u.position = Hs(t, "position")),
          a === t && (u.position = "static"),
          a.appendChild(ps),
          (n = ps[f]),
          a.removeChild(ps),
          (u.position = "absolute");
      else {
        var y = t.style[r];
        (t.style[r] = m + s), (n = t[f]), y ? (t.style[r] = y) : Qs(t, r);
      }
      return (
        p && v && (((o = jt(a)).time = li.time), (o.width = a[f])),
        Zt(g ? (n * c) / m : n && c ? (m / n) * c : 0)
      );
    },
    sn = function (e, t, r, i) {
      var s;
      return (
        us || Gs(),
        t in _s &&
          "transform" !== t &&
          ~(t = _s[t]).indexOf(",") &&
          (t = t.split(",")[0]),
        gs[t] && "transform" !== t
          ? ((s = gn(e, i)),
            (s =
              "transformOrigin" !== t
                ? s[t]
                : s.svg
                ? s.origin
                : vn(Hs(e, Rs)) + " " + s.zOrigin + "px"))
          : (!(s = e.style[t]) ||
              "auto" === s ||
              i ||
              ~(s + "").indexOf("calc(")) &&
            (s =
              (cn[t] && cn[t](e, t, r)) ||
              Hs(e, t) ||
              Ut(e, t) ||
              ("opacity" === t ? 1 : 0)),
        r && !~(s + "").trim().indexOf(" ") ? rn(e, t, s, r) + r : s
      );
    },
    nn = function (e, t, r, i) {
      if (!r || "none" === r) {
        var s = Vs(t, e, 1),
          n = s && Hs(e, s, 1);
        n && n !== r
          ? ((t = s), (r = n))
          : "borderColor" === t && (r = Hs(e, "borderTopColor"));
      }
      var a,
        o,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        m,
        g,
        v = new ji(this._pt, e.style, t, 0, 1, Fi),
        y = 0,
        w = 0;
      if (
        ((v.b = r),
        (v.e = i),
        (r += ""),
        "var(--" === (i += "").substring(0, 6) &&
          (i = Hs(e, i.substring(4, i.indexOf(")")))),
        "auto" === i &&
          ((u = e.style[t]),
          (e.style[t] = i),
          (i = Hs(e, t) || i),
          u ? (e.style[t] = u) : Qs(e, t)),
        oi((a = [r, i])),
        (i = a[1]),
        (l = (r = a[0]).match(_t) || []),
        (i.match(_t) || []).length)
      ) {
        for (; (o = _t.exec(i)); )
          (p = o[0]),
            (f = i.substring(y, o.index)),
            d
              ? (d = (d + 1) % 5)
              : ("rgba(" === f.substr(-5) || "hsla(" === f.substr(-5)) &&
                (d = 1),
            p !== (u = l[w++] || "") &&
              ((c = parseFloat(u) || 0),
              (g = u.substr((c + "").length)),
              "=" === p.charAt(1) && (p = Jt(c, p) + g),
              (h = parseFloat(p)),
              (m = p.substr((h + "").length)),
              (y = _t.lastIndex - m.length),
              m ||
                ((m = m || tt.units[t] || g),
                y === i.length && ((i += m), (v.e += m))),
              g !== m && (c = rn(e, t, u, m) || 0),
              (v._pt = {
                _next: v._pt,
                p: f || 1 === w ? f : ",",
                s: c,
                c: h - c,
                m: (d && d < 4) || "zIndex" === t ? Math.round : 0,
              }));
        v.c = y < i.length ? i.substring(y, i.length) : "";
      } else v.r = "display" === t && "none" === i ? As : Ps;
      return Mt.test(i) && (v.e = 0), (this._pt = v), v;
    },
    an = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    on = function (e) {
      var t = e.split(" "),
        r = t[0],
        i = t[1] || "50%";
      return (
        ("top" === r || "bottom" === r || "left" === i || "right" === i) &&
          ((e = r), (r = i), (i = e)),
        (t[0] = an[r] || r),
        (t[1] = an[i] || i),
        t.join(" ")
      );
    },
    ln = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var r,
          i,
          s,
          n = t.t,
          a = n.style,
          o = t.u,
          l = n._gsap;
        if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
        else
          for (s = (o = o.split(",")).length; --s > -1; )
            (r = o[s]),
              gs[r] && ((i = 1), (r = "transformOrigin" === r ? Rs : $s)),
              Qs(n, r);
        i &&
          (Qs(n, $s),
          l &&
            (l.svg && n.removeAttribute("transform"),
            (a.scale = a.rotate = a.translate = "none"),
            gn(n, 1),
            (l.uncache = 1),
            Ns(a)));
      }
    },
    cn = {
      clearProps: function (e, t, r, i, s) {
        if ("isFromStart" !== s.data) {
          var n = (e._pt = new ji(e._pt, t, r, 0, 0, ln));
          return (n.u = i), (n.pr = -10), (n.tween = s), e._props.push(r), 1;
        }
      },
    },
    dn = [1, 0, 0, 1, 0, 0],
    un = {},
    pn = function (e) {
      return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
    },
    hn = function (e) {
      var t = Hs(e, $s);
      return pn(t) ? dn : t.substr(7).match(Et).map(Zt);
    },
    fn = function (e, t) {
      var r,
        i,
        s,
        n,
        a = e._gsap || jt(e),
        o = e.style,
        l = hn(e);
      return a.svg && e.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (l = [
            (s = e.transform.baseVal.consolidate().matrix).a,
            s.b,
            s.c,
            s.d,
            s.e,
            s.f,
          ]).join(",")
          ? dn
          : l
        : (l === dn &&
            !e.offsetParent &&
            e !== ds &&
            !a.svg &&
            ((s = o.display),
            (o.display = "block"),
            (!(r = e.parentNode) ||
              (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((n = 1), (i = e.nextElementSibling), ds.appendChild(e)),
            (l = hn(e)),
            s ? (o.display = s) : Qs(e, "display"),
            n &&
              (i
                ? r.insertBefore(e, i)
                : r
                ? r.appendChild(e)
                : ds.removeChild(e))),
          t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    },
    mn = function (e, t, r, i, s, n) {
      var a,
        o,
        l,
        c = e._gsap,
        d = s || fn(e, !0),
        u = c.xOrigin || 0,
        p = c.yOrigin || 0,
        h = c.xOffset || 0,
        f = c.yOffset || 0,
        m = d[0],
        g = d[1],
        v = d[2],
        y = d[3],
        w = d[4],
        b = d[5],
        x = t.split(" "),
        S = parseFloat(x[0]) || 0,
        E = parseFloat(x[1]) || 0;
      r
        ? d !== dn &&
          (o = m * y - g * v) &&
          ((l = S * (-g / o) + E * (m / o) - (m * b - g * w) / o),
          (S = S * (y / o) + E * (-v / o) + (v * b - y * w) / o),
          (E = l))
        : ((S = (a = Ks(e)).x + (~x[0].indexOf("%") ? (S / 100) * a.width : S)),
          (E =
            a.y + (~(x[1] || x[0]).indexOf("%") ? (E / 100) * a.height : E))),
        i || (!1 !== i && c.smooth)
          ? ((w = S - u),
            (b = E - p),
            (c.xOffset = h + (w * m + b * v) - w),
            (c.yOffset = f + (w * g + b * y) - b))
          : (c.xOffset = c.yOffset = 0),
        (c.xOrigin = S),
        (c.yOrigin = E),
        (c.smooth = !!i),
        (c.origin = t),
        (c.originIsAbsolute = !!r),
        (e.style[Rs] = "0px 0px"),
        n &&
          (Js(n, c, "xOrigin", u, S),
          Js(n, c, "yOrigin", p, E),
          Js(n, c, "xOffset", h, c.xOffset),
          Js(n, c, "yOffset", f, c.yOffset)),
        e.setAttribute("data-svg-origin", S + " " + E);
    },
    gn = function (e, t) {
      var r = e._gsap || new xi(e);
      if ("x" in r && !t && !r.uncache) return r;
      var i,
        s,
        n,
        a,
        o,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        m,
        g,
        v,
        y,
        w,
        b,
        x,
        S,
        E,
        _,
        T,
        M,
        C,
        k,
        P,
        A,
        O,
        L,
        z,
        D,
        I = e.style,
        q = r.scaleX < 0,
        $ = "px",
        R = "deg",
        X = getComputedStyle(e),
        N = Hs(e, Rs) || "0";
      return (
        (i = s = n = l = c = d = u = p = h = 0),
        (a = o = 1),
        (r.svg = !(!e.getCTM || !Zs(e))),
        X.translate &&
          (("none" !== X.translate ||
            "none" !== X.scale ||
            "none" !== X.rotate) &&
            (I[$s] =
              ("none" !== X.translate
                ? "translate3d(" +
                  (X.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== X.rotate ? "rotate(" + X.rotate + ") " : "") +
              ("none" !== X.scale
                ? "scale(" + X.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== X[$s] ? X[$s] : "")),
          (I.scale = I.rotate = I.translate = "none")),
        (g = fn(e, r.svg)),
        r.svg &&
          (r.uncache
            ? ((C = e.getBBox()),
              (N = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px"),
              (M = ""))
            : (M = !t && e.getAttribute("data-svg-origin")),
          mn(e, M || N, !!M || r.originIsAbsolute, !1 !== r.smooth, g)),
        (f = r.xOrigin || 0),
        (m = r.yOrigin || 0),
        g !== dn &&
          ((b = g[0]),
          (x = g[1]),
          (S = g[2]),
          (E = g[3]),
          (i = _ = g[4]),
          (s = T = g[5]),
          6 === g.length
            ? ((a = Math.sqrt(b * b + x * x)),
              (o = Math.sqrt(E * E + S * S)),
              (l = b || x ? ws(x, b) * vs : 0),
              (u = S || E ? ws(S, E) * vs + l : 0) &&
                (o *= Math.abs(Math.cos(u * ys))),
              r.svg && ((i -= f - (f * b + m * S)), (s -= m - (f * x + m * E))))
            : ((D = g[6]),
              (L = g[7]),
              (P = g[8]),
              (A = g[9]),
              (O = g[10]),
              (z = g[11]),
              (i = g[12]),
              (s = g[13]),
              (n = g[14]),
              (c = (v = ws(D, O)) * vs),
              v &&
                ((M = _ * (y = Math.cos(-v)) + P * (w = Math.sin(-v))),
                (C = T * y + A * w),
                (k = D * y + O * w),
                (P = _ * -w + P * y),
                (A = T * -w + A * y),
                (O = D * -w + O * y),
                (z = L * -w + z * y),
                (_ = M),
                (T = C),
                (D = k)),
              (d = (v = ws(-S, O)) * vs),
              v &&
                ((y = Math.cos(-v)),
                (z = E * (w = Math.sin(-v)) + z * y),
                (b = M = b * y - P * w),
                (x = C = x * y - A * w),
                (S = k = S * y - O * w)),
              (l = (v = ws(x, b)) * vs),
              v &&
                ((M = b * (y = Math.cos(v)) + x * (w = Math.sin(v))),
                (C = _ * y + T * w),
                (x = x * y - b * w),
                (T = T * y - _ * w),
                (b = M),
                (_ = C)),
              c &&
                Math.abs(c) + Math.abs(l) > 359.9 &&
                ((c = l = 0), (d = 180 - d)),
              (a = Zt(Math.sqrt(b * b + x * x + S * S))),
              (o = Zt(Math.sqrt(T * T + D * D))),
              (v = ws(_, T)),
              (u = Math.abs(v) > 2e-4 ? v * vs : 0),
              (h = z ? 1 / (z < 0 ? -z : z) : 0)),
          r.svg &&
            ((M = e.getAttribute("transform")),
            (r.forceCSS = e.setAttribute("transform", "") || !pn(Hs(e, $s))),
            M && e.setAttribute("transform", M))),
        Math.abs(u) > 90 &&
          Math.abs(u) < 270 &&
          (q
            ? ((a *= -1),
              (u += l <= 0 ? 180 : -180),
              (l += l <= 0 ? 180 : -180))
            : ((o *= -1), (u += u <= 0 ? 180 : -180))),
        (t = t || r.uncache),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            ((!t && r.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (e.offsetWidth * r.xPercent) / 100
            : 0) +
          $),
        (r.y =
          s -
          ((r.yPercent =
            s &&
            ((!t && r.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-s) ? -50 : 0)))
            ? (e.offsetHeight * r.yPercent) / 100
            : 0) +
          $),
        (r.z = n + $),
        (r.scaleX = Zt(a)),
        (r.scaleY = Zt(o)),
        (r.rotation = Zt(l) + R),
        (r.rotationX = Zt(c) + R),
        (r.rotationY = Zt(d) + R),
        (r.skewX = u + R),
        (r.skewY = p + R),
        (r.transformPerspective = h + $),
        (r.zOrigin = parseFloat(N.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
          (I[Rs] = vn(N)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = tt.force3D),
        (r.renderTransform = r.svg ? _n : ms ? En : wn),
        (r.uncache = 0),
        r
      );
    },
    vn = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    yn = function (e, t, r) {
      var i = Ir(t);
      return Zt(parseFloat(t) + parseFloat(rn(e, "x", r + "px", i))) + i;
    },
    wn = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        En(e, t);
    },
    bn = "0deg",
    xn = "0px",
    Sn = ") ",
    En = function (e, t) {
      var r = t || this,
        i = r.xPercent,
        s = r.yPercent,
        n = r.x,
        a = r.y,
        o = r.z,
        l = r.rotation,
        c = r.rotationY,
        d = r.rotationX,
        u = r.skewX,
        p = r.skewY,
        h = r.scaleX,
        f = r.scaleY,
        m = r.transformPerspective,
        g = r.force3D,
        v = r.target,
        y = r.zOrigin,
        w = "",
        b = ("auto" === g && e && 1 !== e) || !0 === g;
      if (y && (d !== bn || c !== bn)) {
        var x,
          S = parseFloat(c) * ys,
          E = Math.sin(S),
          _ = Math.cos(S);
        (S = parseFloat(d) * ys),
          (x = Math.cos(S)),
          (n = yn(v, n, E * x * -y)),
          (a = yn(v, a, -Math.sin(S) * -y)),
          (o = yn(v, o, _ * x * -y + y));
      }
      m !== xn && (w += "perspective(" + m + Sn),
        (i || s) && (w += "translate(" + i + "%, " + s + "%) "),
        (b || n !== xn || a !== xn || o !== xn) &&
          (w +=
            o !== xn || b
              ? "translate3d(" + n + ", " + a + ", " + o + ") "
              : "translate(" + n + ", " + a + Sn),
        l !== bn && (w += "rotate(" + l + Sn),
        c !== bn && (w += "rotateY(" + c + Sn),
        d !== bn && (w += "rotateX(" + d + Sn),
        (u !== bn || p !== bn) && (w += "skew(" + u + ", " + p + Sn),
        (1 !== h || 1 !== f) && (w += "scale(" + h + ", " + f + Sn),
        (v.style[$s] = w || "translate(0, 0)");
    },
    _n = function (e, t) {
      var r,
        i,
        s,
        n,
        a,
        o = t || this,
        l = o.xPercent,
        c = o.yPercent,
        d = o.x,
        u = o.y,
        p = o.rotation,
        h = o.skewX,
        f = o.skewY,
        m = o.scaleX,
        g = o.scaleY,
        v = o.target,
        y = o.xOrigin,
        w = o.yOrigin,
        b = o.xOffset,
        x = o.yOffset,
        S = o.forceCSS,
        E = parseFloat(d),
        _ = parseFloat(u);
      (p = parseFloat(p)),
        (h = parseFloat(h)),
        (f = parseFloat(f)) && ((h += f = parseFloat(f)), (p += f)),
        p || h
          ? ((p *= ys),
            (h *= ys),
            (r = Math.cos(p) * m),
            (i = Math.sin(p) * m),
            (s = Math.sin(p - h) * -g),
            (n = Math.cos(p - h) * g),
            h &&
              ((f *= ys),
              (a = Math.tan(h - f)),
              (s *= a = Math.sqrt(1 + a * a)),
              (n *= a),
              f &&
                ((a = Math.tan(f)), (r *= a = Math.sqrt(1 + a * a)), (i *= a))),
            (r = Zt(r)),
            (i = Zt(i)),
            (s = Zt(s)),
            (n = Zt(n)))
          : ((r = m), (n = g), (i = s = 0)),
        ((E && !~(d + "").indexOf("px")) || (_ && !~(u + "").indexOf("px"))) &&
          ((E = rn(v, "x", d, "px")), (_ = rn(v, "y", u, "px"))),
        (y || w || b || x) &&
          ((E = Zt(E + y - (y * r + w * s) + b)),
          (_ = Zt(_ + w - (y * i + w * n) + x))),
        (l || c) &&
          ((a = v.getBBox()),
          (E = Zt(E + (l / 100) * a.width)),
          (_ = Zt(_ + (c / 100) * a.height))),
        (a =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          s +
          "," +
          n +
          "," +
          E +
          "," +
          _ +
          ")"),
        v.setAttribute("transform", a),
        S && (v.style[$s] = a);
    },
    Tn = function (e, t, r, i, s) {
      var n,
        a,
        o = 360,
        l = ut(s),
        c = parseFloat(s) * (l && ~s.indexOf("rad") ? vs : 1) - i,
        d = i + c + "deg";
      return (
        l &&
          ("short" === (n = s.split("_")[1]) &&
            (c %= o) !== c % 180 &&
            (c += c < 0 ? o : -o),
          "cw" === n && c < 0
            ? (c = ((c + o * bs) % o) - ~~(c / o) * o)
            : "ccw" === n && c > 0 && (c = ((c - o * bs) % o) - ~~(c / o) * o)),
        (e._pt = a = new ji(e._pt, t, r, i, c, Ms)),
        (a.e = d),
        (a.u = "deg"),
        e._props.push(r),
        a
      );
    },
    Mn = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    Cn = function (e, t, r) {
      var i,
        s,
        n,
        a,
        o,
        l,
        c,
        d = Mn({}, r._gsap),
        u = r.style;
      for (s in (d.svg
        ? ((n = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (u[$s] = t),
          (i = gn(r, 1)),
          Qs(r, $s),
          r.setAttribute("transform", n))
        : ((n = getComputedStyle(r)[$s]),
          (u[$s] = t),
          (i = gn(r, 1)),
          (u[$s] = n)),
      gs))
        (n = d[s]) !== (a = i[s]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 &&
          ((o = Ir(n) !== (c = Ir(a)) ? rn(r, s, n, c) : parseFloat(n)),
          (l = parseFloat(a)),
          (e._pt = new ji(e._pt, i, s, o, l - o, Ts)),
          (e._pt.u = c || 0),
          e._props.push(s));
      Mn(i, d);
    };
  Kt("padding,margin,Width,Radius", function (e, t) {
    var r = "Top",
      i = "Right",
      s = "Bottom",
      n = "Left",
      a = (t < 3 ? [r, i, s, n] : [r + n, r + i, s + i, s + n]).map(function (
        r
      ) {
        return t < 2 ? e + r : "border" + r + e;
      });
    cn[t > 1 ? "border" + e : e] = function (e, t, r, i, s) {
      var n, o;
      if (arguments.length < 4)
        return (
          (n = a.map(function (t) {
            return sn(e, t, r);
          })),
          5 === (o = n.join(" ")).split(n[0]).length ? n[0] : o
        );
      (n = (i + "").split(" ")),
        (o = {}),
        a.forEach(function (e, t) {
          return (o[e] = n[t] = n[t] || n[((t - 1) / 2) | 0]);
        }),
        e.init(t, o, s);
    };
  });
  var kn = {
    name: "css",
    register: Gs,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, r, i, s) {
      var n,
        a,
        o,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        m,
        g,
        v,
        y,
        w,
        b,
        x = this._props,
        S = e.style,
        E = r.vars.startAt;
      for (u in (us || Gs(),
      (this.styles = this.styles || Fs(e)),
      (b = this.styles.props),
      (this.tween = r),
      t))
        if ("autoRound" !== u && ((a = t[u]), !Ft[u] || !ki(u, t, r, i, e, s)))
          if (
            ((c = typeof a),
            (d = cn[u]),
            "function" === c && (c = typeof (a = a.call(r, i, e, s))),
            "string" === c && ~a.indexOf("random(") && (a = Vr(a)),
            d)
          )
            d(this, e, u, a, r) && (w = 1);
          else if ("--" === u.substr(0, 2))
            (n = (getComputedStyle(e).getPropertyValue(u) + "").trim()),
              (a += ""),
              (ni.lastIndex = 0),
              ni.test(n) || ((p = Ir(n)), (h = Ir(a))),
              h ? p !== h && (n = rn(e, u, n, h) + h) : p && (a += p),
              this.add(S, "setProperty", n, a, i, s, 0, 0, u),
              x.push(u),
              b.push(u, 0, S[u]);
          else if ("undefined" !== c) {
            if (
              (E && u in E
                ? ((n =
                    "function" == typeof E[u] ? E[u].call(r, i, e, s) : E[u]),
                  ut(n) && ~n.indexOf("random(") && (n = Vr(n)),
                  Ir(n + "") ||
                    "auto" === n ||
                    (n += tt.units[u] || Ir(sn(e, u)) || ""),
                  "=" === (n + "").charAt(1) && (n = sn(e, u)))
                : (n = sn(e, u)),
              (l = parseFloat(n)),
              (f = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) &&
                (a = a.substr(2)),
              (o = parseFloat(a)),
              u in _s &&
                ("autoAlpha" === u &&
                  (1 === l && "hidden" === sn(e, "visibility") && o && (l = 0),
                  b.push("visibility", 0, S.visibility),
                  Js(
                    this,
                    S,
                    "visibility",
                    l ? "inherit" : "hidden",
                    o ? "inherit" : "hidden",
                    !o
                  )),
                "scale" !== u &&
                  "transform" !== u &&
                  ~(u = _s[u]).indexOf(",") &&
                  (u = u.split(",")[0])),
              (m = u in gs))
            )
              if (
                (this.styles.save(u),
                "string" === c &&
                  "var(--" === a.substring(0, 6) &&
                  ((a = Hs(e, a.substring(4, a.indexOf(")")))),
                  (o = parseFloat(a))),
                g ||
                  (((v = e._gsap).renderTransform && !t.parseTransform) ||
                    gn(e, t.parseTransform),
                  (y = !1 !== t.smoothOrigin && v.smooth),
                  ((g = this._pt =
                    new ji(
                      this._pt,
                      S,
                      $s,
                      0,
                      1,
                      v.renderTransform,
                      v,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === u)
              )
                (this._pt = new ji(
                  this._pt,
                  v,
                  "scaleY",
                  v.scaleY,
                  (f ? Jt(v.scaleY, f + o) : o) - v.scaleY || 0,
                  Ts
                )),
                  (this._pt.u = 0),
                  x.push("scaleY", u),
                  (u += "X");
              else {
                if ("transformOrigin" === u) {
                  b.push(Rs, 0, S[Rs]),
                    (a = on(a)),
                    v.svg
                      ? mn(e, a, 0, y, 0, this)
                      : ((h = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin &&
                          Js(this, v, "zOrigin", v.zOrigin, h),
                        Js(this, S, u, vn(n), vn(a)));
                  continue;
                }
                if ("svgOrigin" === u) {
                  mn(e, a, 1, y, 0, this);
                  continue;
                }
                if (u in un) {
                  Tn(this, v, u, l, f ? Jt(l, f + a) : a);
                  continue;
                }
                if ("smoothOrigin" === u) {
                  Js(this, v, "smooth", v.smooth, a);
                  continue;
                }
                if ("force3D" === u) {
                  v[u] = a;
                  continue;
                }
                if ("transform" === u) {
                  Cn(this, a, e);
                  continue;
                }
              }
            else u in S || (u = Vs(u) || u);
            if (
              m ||
              ((o || 0 === o) && (l || 0 === l) && !Es.test(a) && u in S)
            )
              o || (o = 0),
                (p = (n + "").substr((l + "").length)) !==
                  (h = Ir(a) || (u in tt.units ? tt.units[u] : p)) &&
                  (l = rn(e, u, n, h)),
                (this._pt = new ji(
                  this._pt,
                  m ? v : S,
                  u,
                  l,
                  (f ? Jt(l, f + o) : o) - l,
                  m || ("px" !== h && "zIndex" !== u) || !1 === t.autoRound
                    ? Ts
                    : ks
                )),
                (this._pt.u = h || 0),
                p !== h && "%" !== h && ((this._pt.b = n), (this._pt.r = Cs));
            else if (u in S) nn.call(this, e, u, n, f ? f + a : a);
            else if (u in e) this.add(e, u, n || e[u], f ? f + a : a, i, s);
            else if ("parseTransform" !== u) {
              Lt(u, a);
              continue;
            }
            m ||
              (u in S
                ? b.push(u, 0, S[u])
                : "function" == typeof e[u]
                ? b.push(u, 2, e[u]())
                : b.push(u, 1, n || e[u])),
              x.push(u);
          }
      w && Gi(this);
    },
    render: function (e, t) {
      if (t.tween._time || !fs())
        for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
      else t.styles.revert();
    },
    get: sn,
    aliases: _s,
    getSetter: function (e, t, r) {
      var i = _s[t];
      return (
        i && i.indexOf(",") < 0 && (t = i),
        t in gs && t !== Rs && (e._gsap.x || sn(e, "x"))
          ? r && hs === r
            ? "scale" === t
              ? Ds
              : zs
            : (hs = r || {}) && ("scale" === t ? Is : qs)
          : e.style && !mt(e.style[t])
          ? Os
          : ~t.indexOf("-")
          ? Ls
          : Xi(e, t)
      );
    },
    core: { _removeProperty: Qs, _getMatrix: fn },
  };
  (os.utils.checkPrefix = Vs),
    (os.core.getStyleSaver = Fs),
    (function (e, t, r, i) {
      var s = Kt(
        e +
          "," +
          t +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (e) {
          gs[e] = 1;
        }
      );
      Kt(t, function (e) {
        (tt.units[e] = "deg"), (un[e] = 1);
      }),
        (_s[s[13]] = e + "," + t),
        Kt(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            var t = e.split(":");
            _s[t[1]] = s[t[0]];
          }
        );
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY"
    ),
    Kt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (e) {
        tt.units[e] = "px";
      }
    ),
    os.registerPlugin(kn);
  var Pn = os.registerPlugin(kn) || os;
  function An(e, t, r) {
    return (
      t &&
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        })(e.prototype, t),
      e
    );
    /*!
     * Observer 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */
  }
  Pn.core.Tween;
  var On,
    Ln,
    zn,
    Dn,
    In,
    qn,
    $n,
    Rn,
    Xn,
    Nn,
    Bn,
    Fn,
    Yn,
    Hn = function () {
      return (
        On ||
        ("undefined" != typeof window &&
          (On = window.gsap) &&
          On.registerPlugin &&
          On)
      );
    },
    Wn = 1,
    Vn = [],
    Gn = [],
    jn = [],
    Un = Date.now,
    Kn = function (e, t) {
      return t;
    },
    Zn = function (e, t) {
      return ~jn.indexOf(e) && jn[jn.indexOf(e) + 1][t];
    },
    Qn = function (e) {
      return !!~Nn.indexOf(e);
    },
    Jn = function (e, t, r, i, s) {
      return e.addEventListener(t, r, { passive: !1 !== i, capture: !!s });
    },
    ta = function (e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    },
    ra = "scrollLeft",
    ia = "scrollTop",
    sa = function () {
      return (Bn && Bn.isPressed) || Gn.cache++;
    },
    na = function (e, t) {
      var r = function r(i) {
        if (i || 0 === i) {
          Wn && (zn.history.scrollRestoration = "manual");
          var s = Bn && Bn.isPressed;
          (i = r.v = Math.round(i) || (Bn && Bn.iOS ? 1 : 0)),
            e(i),
            (r.cacheID = Gn.cache),
            s && Kn("ss", i);
        } else
          (t || Gn.cache !== r.cacheID || Kn("ref")) &&
            ((r.cacheID = Gn.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (r.offset = 0), e && r;
    },
    aa = {
      s: ra,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: na(function (e) {
        return arguments.length
          ? zn.scrollTo(e, oa.sc())
          : zn.pageXOffset || Dn[ra] || In[ra] || qn[ra] || 0;
      }),
    },
    oa = {
      s: ia,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: aa,
      sc: na(function (e) {
        return arguments.length
          ? zn.scrollTo(aa.sc(), e)
          : zn.pageYOffset || Dn[ia] || In[ia] || qn[ia] || 0;
      }),
    },
    la = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || On.utils.toArray)(e)[0] ||
        ("string" == typeof e && !1 !== On.config().nullTargetWarn
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    ca = function (e, t) {
      var r = t.s,
        i = t.sc;
      Qn(e) && (e = Dn.scrollingElement || In);
      var s = Gn.indexOf(e),
        n = i === oa.sc ? 1 : 2;
      !~s && (s = Gn.push(e) - 1), Gn[s + n] || Jn(e, "scroll", sa);
      var a = Gn[s + n],
        o =
          a ||
          (Gn[s + n] =
            na(Zn(e, r), !0) ||
            (Qn(e)
              ? i
              : na(function (t) {
                  return arguments.length ? (e[r] = t) : e[r];
                })));
      return (
        (o.target = e),
        a || (o.smooth = "smooth" === On.getProperty(e, "scrollBehavior")),
        o
      );
    },
    da = function (e, t, r) {
      var i = e,
        s = e,
        n = Un(),
        a = n,
        o = t || 50,
        l = Math.max(500, 3 * o),
        c = function (e, t) {
          var l = Un();
          t || l - n > o
            ? ((s = i), (i = e), (a = n), (n = l))
            : r
            ? (i += e)
            : (i = s + ((e - s) / (l - a)) * (n - a));
        };
      return {
        update: c,
        reset: function () {
          (s = i = r ? 0 : i), (a = n = 0);
        },
        getVelocity: function (e) {
          var t = a,
            o = s,
            d = Un();
          return (
            (e || 0 === e) && e !== i && c(e),
            n === a || d - a > l
              ? 0
              : ((i + (r ? o : -o)) / ((r ? d : n) - t)) * 1e3
          );
        },
      };
    },
    ua = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    pa = function (e) {
      var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(r) ? t : r;
    },
    ha = function () {
      (Xn = On.core.globals().ScrollTrigger) &&
        Xn.core &&
        (function () {
          var e = Xn.core,
            t = e.bridge || {},
            r = e._scrollers,
            i = e._proxies;
          r.push.apply(r, Gn),
            i.push.apply(i, jn),
            (Gn = r),
            (jn = i),
            (Kn = function (e, r) {
              return t[e](r);
            });
        })();
    },
    fa = function (e) {
      return (
        (On = e || Hn()),
        !Ln &&
          On &&
          "undefined" != typeof document &&
          document.body &&
          ((zn = window),
          (Dn = document),
          (In = Dn.documentElement),
          (qn = Dn.body),
          (Nn = [zn, Dn, In, qn]),
          On.utils.clamp,
          (Yn = On.core.context || function () {}),
          (Rn = "onpointerenter" in qn ? "pointer" : "mouse"),
          ($n = ma.isTouch =
            zn.matchMedia &&
            zn.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in zn ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Fn = ma.eventTypes =
            (
              "ontouchstart" in In
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in In
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Wn = 0);
          }, 500),
          ha(),
          (Ln = 1)),
        Ln
      );
    };
  (aa.op = oa), (Gn.cache = 0);
  var ma = (function () {
    function e(e) {
      this.init(e);
    }
    return (
      (e.prototype.init = function (e) {
        Ln || fa(On) || console.warn("Please gsap.registerPlugin(Observer)"),
          Xn || ha();
        var t = e.tolerance,
          r = e.dragMinimum,
          i = e.type,
          s = e.target,
          n = e.lineHeight,
          a = e.debounce,
          o = e.preventDefault,
          l = e.onStop,
          c = e.onStopDelay,
          d = e.ignore,
          u = e.wheelSpeed,
          p = e.event,
          h = e.onDragStart,
          f = e.onDragEnd,
          m = e.onDrag,
          g = e.onPress,
          v = e.onRelease,
          y = e.onRight,
          w = e.onLeft,
          b = e.onUp,
          x = e.onDown,
          S = e.onChangeX,
          E = e.onChangeY,
          _ = e.onChange,
          T = e.onToggleX,
          M = e.onToggleY,
          C = e.onHover,
          k = e.onHoverEnd,
          P = e.onMove,
          A = e.ignoreCheck,
          O = e.isNormalizer,
          L = e.onGestureStart,
          z = e.onGestureEnd,
          D = e.onWheel,
          I = e.onEnable,
          q = e.onDisable,
          $ = e.onClick,
          R = e.scrollSpeed,
          X = e.capture,
          N = e.allowClicks,
          B = e.lockAxis,
          F = e.onLockAxis;
        (this.target = s = la(s) || In),
          (this.vars = e),
          d && (d = On.utils.toArray(d)),
          (t = t || 1e-9),
          (r = r || 0),
          (u = u || 1),
          (R = R || 1),
          (i = i || "wheel,touch,pointer"),
          (a = !1 !== a),
          n || (n = parseFloat(zn.getComputedStyle(qn).lineHeight) || 22);
        var Y,
          H,
          W,
          V,
          G,
          j,
          U,
          K = this,
          Z = 0,
          Q = 0,
          J = e.passive || (!o && !1 !== e.passive),
          ee = ca(s, aa),
          te = ca(s, oa),
          re = ee(),
          ie = te(),
          se =
            ~i.indexOf("touch") &&
            !~i.indexOf("pointer") &&
            "pointerdown" === Fn[0],
          ne = Qn(s),
          ae = s.ownerDocument || Dn,
          oe = [0, 0, 0],
          le = [0, 0, 0],
          ce = 0,
          de = function () {
            return (ce = Un());
          },
          ue = function (e, t) {
            return (
              ((K.event = e) &&
                d &&
                (function (e, t) {
                  for (var r = t.length; r--; )
                    if (t[r] === e || t[r].contains(e)) return !0;
                  return !1;
                })(e.target, d)) ||
              (t && se && "touch" !== e.pointerType) ||
              (A && A(e, t))
            );
          },
          pe = function () {
            var e = (K.deltaX = pa(oe)),
              r = (K.deltaY = pa(le)),
              i = Math.abs(e) >= t,
              s = Math.abs(r) >= t;
            _ && (i || s) && _(K, e, r, oe, le),
              i &&
                (y && K.deltaX > 0 && y(K),
                w && K.deltaX < 0 && w(K),
                S && S(K),
                T && K.deltaX < 0 != Z < 0 && T(K),
                (Z = K.deltaX),
                (oe[0] = oe[1] = oe[2] = 0)),
              s &&
                (x && K.deltaY > 0 && x(K),
                b && K.deltaY < 0 && b(K),
                E && E(K),
                M && K.deltaY < 0 != Q < 0 && M(K),
                (Q = K.deltaY),
                (le[0] = le[1] = le[2] = 0)),
              (V || W) &&
                (P && P(K),
                W && (h && 1 === W && h(K), m && m(K), (W = 0)),
                (V = !1)),
              j && !(j = !1) && F && F(K),
              G && (D(K), (G = !1)),
              (Y = 0);
          },
          he = function (e, t, r) {
            (oe[r] += e),
              (le[r] += t),
              K._vx.update(e),
              K._vy.update(t),
              a ? Y || (Y = requestAnimationFrame(pe)) : pe();
          },
          fe = function (e, t) {
            B &&
              !U &&
              ((K.axis = U = Math.abs(e) > Math.abs(t) ? "x" : "y"), (j = !0)),
              "y" !== U && ((oe[2] += e), K._vx.update(e, !0)),
              "x" !== U && ((le[2] += t), K._vy.update(t, !0)),
              a ? Y || (Y = requestAnimationFrame(pe)) : pe();
          },
          me = function (e) {
            if (!ue(e, 1)) {
              var t = (e = ua(e, o)).clientX,
                i = e.clientY,
                s = t - K.x,
                n = i - K.y,
                a = K.isDragging;
              (K.x = t),
                (K.y = i),
                (a ||
                  ((s || n) &&
                    (Math.abs(K.startX - t) >= r ||
                      Math.abs(K.startY - i) >= r))) &&
                  ((W = a ? 2 : 1), a || (K.isDragging = !0), fe(s, n));
            }
          },
          ge = (K.onPress = function (e) {
            ue(e, 1) ||
              (e && e.button) ||
              ((K.axis = U = null),
              H.pause(),
              (K.isPressed = !0),
              (e = ua(e)),
              (Z = Q = 0),
              (K.startX = K.x = e.clientX),
              (K.startY = K.y = e.clientY),
              K._vx.reset(),
              K._vy.reset(),
              Jn(O ? s : ae, Fn[1], me, J, !0),
              (K.deltaX = K.deltaY = 0),
              g && g(K));
          }),
          ve = (K.onRelease = function (e) {
            if (!ue(e, 1)) {
              ta(O ? s : ae, Fn[1], me, !0);
              var t = !isNaN(K.y - K.startY),
                r = K.isDragging,
                i =
                  r &&
                  (Math.abs(K.x - K.startX) > 3 ||
                    Math.abs(K.y - K.startY) > 3),
                n = ua(e);
              !i &&
                t &&
                (K._vx.reset(),
                K._vy.reset(),
                o &&
                  N &&
                  On.delayedCall(0.08, function () {
                    if (Un() - ce > 300 && !e.defaultPrevented)
                      if (e.target.click) e.target.click();
                      else if (ae.createEvent) {
                        var t = ae.createEvent("MouseEvents");
                        t.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          zn,
                          1,
                          n.screenX,
                          n.screenY,
                          n.clientX,
                          n.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          e.target.dispatchEvent(t);
                      }
                  })),
                (K.isDragging = K.isGesturing = K.isPressed = !1),
                l && r && !O && H.restart(!0),
                W && pe(),
                f && r && f(K),
                v && v(K, i);
            }
          }),
          ye = function (e) {
            return (
              e.touches &&
              e.touches.length > 1 &&
              (K.isGesturing = !0) &&
              L(e, K.isDragging)
            );
          },
          we = function () {
            return (K.isGesturing = !1) || z(K);
          },
          be = function (e) {
            if (!ue(e)) {
              var t = ee(),
                r = te();
              he((t - re) * R, (r - ie) * R, 1),
                (re = t),
                (ie = r),
                l && H.restart(!0);
            }
          },
          xe = function (e) {
            if (!ue(e)) {
              (e = ua(e, o)), D && (G = !0);
              var t =
                (1 === e.deltaMode
                  ? n
                  : 2 === e.deltaMode
                  ? zn.innerHeight
                  : 1) * u;
              he(e.deltaX * t, e.deltaY * t, 0), l && !O && H.restart(!0);
            }
          },
          Se = function (e) {
            if (!ue(e)) {
              var t = e.clientX,
                r = e.clientY,
                i = t - K.x,
                s = r - K.y;
              (K.x = t),
                (K.y = r),
                (V = !0),
                l && H.restart(!0),
                (i || s) && fe(i, s);
            }
          },
          Ee = function (e) {
            (K.event = e), C(K);
          },
          _e = function (e) {
            (K.event = e), k(K);
          },
          Te = function (e) {
            return ue(e) || (ua(e, o) && $(K));
          };
        (H = K._dc =
          On.delayedCall(c || 0.25, function () {
            K._vx.reset(), K._vy.reset(), H.pause(), l && l(K);
          }).pause()),
          (K.deltaX = K.deltaY = 0),
          (K._vx = da(0, 50, !0)),
          (K._vy = da(0, 50, !0)),
          (K.scrollX = ee),
          (K.scrollY = te),
          (K.isDragging = K.isGesturing = K.isPressed = !1),
          Yn(this),
          (K.enable = function (e) {
            return (
              K.isEnabled ||
                (Jn(ne ? ae : s, "scroll", sa),
                i.indexOf("scroll") >= 0 && Jn(ne ? ae : s, "scroll", be, J, X),
                i.indexOf("wheel") >= 0 && Jn(s, "wheel", xe, J, X),
                ((i.indexOf("touch") >= 0 && $n) ||
                  i.indexOf("pointer") >= 0) &&
                  (Jn(s, Fn[0], ge, J, X),
                  Jn(ae, Fn[2], ve),
                  Jn(ae, Fn[3], ve),
                  N && Jn(s, "click", de, !0, !0),
                  $ && Jn(s, "click", Te),
                  L && Jn(ae, "gesturestart", ye),
                  z && Jn(ae, "gestureend", we),
                  C && Jn(s, Rn + "enter", Ee),
                  k && Jn(s, Rn + "leave", _e),
                  P && Jn(s, Rn + "move", Se)),
                (K.isEnabled = !0),
                (K.isDragging = K.isGesturing = K.isPressed = V = W = !1),
                K._vx.reset(),
                K._vy.reset(),
                (re = ee()),
                (ie = te()),
                e && e.type && ge(e),
                I && I(K)),
              K
            );
          }),
          (K.disable = function () {
            K.isEnabled &&
              (Vn.filter(function (e) {
                return e !== K && Qn(e.target);
              }).length || ta(ne ? ae : s, "scroll", sa),
              K.isPressed &&
                (K._vx.reset(), K._vy.reset(), ta(O ? s : ae, Fn[1], me, !0)),
              ta(ne ? ae : s, "scroll", be, X),
              ta(s, "wheel", xe, X),
              ta(s, Fn[0], ge, X),
              ta(ae, Fn[2], ve),
              ta(ae, Fn[3], ve),
              ta(s, "click", de, !0),
              ta(s, "click", Te),
              ta(ae, "gesturestart", ye),
              ta(ae, "gestureend", we),
              ta(s, Rn + "enter", Ee),
              ta(s, Rn + "leave", _e),
              ta(s, Rn + "move", Se),
              (K.isEnabled = K.isPressed = K.isDragging = !1),
              q && q(K));
          }),
          (K.kill = K.revert =
            function () {
              K.disable();
              var e = Vn.indexOf(K);
              e >= 0 && Vn.splice(e, 1), Bn === K && (Bn = 0);
            }),
          Vn.push(K),
          O && Qn(s) && (Bn = K),
          K.enable(p);
      }),
      An(e, [
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
      e
    );
  })();
  (ma.version = "3.13.0"),
    (ma.create = function (e) {
      return new ma(e);
    }),
    (ma.register = fa),
    (ma.getAll = function () {
      return Vn.slice();
    }),
    (ma.getById = function (e) {
      return Vn.filter(function (t) {
        return t.vars.id === e;
      })[0];
    }),
    Hn() && On.registerPlugin(ma);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */
  var ga,
    va,
    ya,
    wa,
    ba,
    xa,
    Sa,
    Ea,
    _a,
    Ta,
    Ma,
    Ca,
    ka,
    Pa,
    Aa,
    Oa,
    La,
    za,
    Da,
    Ia,
    qa,
    $a,
    Ra,
    Xa,
    Na,
    Ba,
    Fa,
    Ya,
    Ha,
    Wa,
    Va,
    Ga,
    ja,
    Ua,
    Ka,
    Za,
    Qa,
    Ja,
    eo = 1,
    to = Date.now,
    ro = to(),
    io = 0,
    so = 0,
    no = function (e, t, r) {
      var i = bo(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
      return (r["_" + t + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
    },
    ao = function (e, t) {
      return !t || (bo(e) && "clamp(" === e.substr(0, 6))
        ? e
        : "clamp(" + e + ")";
    },
    oo = function e() {
      return so && requestAnimationFrame(e);
    },
    lo = function () {
      return (Pa = 1);
    },
    co = function () {
      return (Pa = 0);
    },
    uo = function (e) {
      return e;
    },
    po = function (e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    ho = function () {
      return "undefined" != typeof window;
    },
    fo = function () {
      return ga || (ho() && (ga = window.gsap) && ga.registerPlugin && ga);
    },
    mo = function (e) {
      return !!~Sa.indexOf(e);
    },
    go = function (e) {
      return (
        ("Height" === e ? Va : ya["inner" + e]) ||
        ba["client" + e] ||
        xa["client" + e]
      );
    },
    vo = function (e) {
      return (
        Zn(e, "getBoundingClientRect") ||
        (mo(e)
          ? function () {
              return (Ol.width = ya.innerWidth), (Ol.height = Va), Ol;
            }
          : function () {
              return Yo(e);
            })
      );
    },
    yo = function (e, t) {
      var r = t.s,
        i = t.d2,
        s = t.d,
        n = t.a;
      return Math.max(
        0,
        (r = "scroll" + i) && (n = Zn(e, r))
          ? n() - vo(e)()[s]
          : mo(e)
          ? (ba[r] || xa[r]) - go(i)
          : e[r] - e["offset" + i]
      );
    },
    wo = function (e, t) {
      for (var r = 0; r < Da.length; r += 3)
        (!t || ~t.indexOf(Da[r + 1])) && e(Da[r], Da[r + 1], Da[r + 2]);
    },
    bo = function (e) {
      return "string" == typeof e;
    },
    xo = function (e) {
      return "function" == typeof e;
    },
    So = function (e) {
      return "number" == typeof e;
    },
    Eo = function (e) {
      return "object" == typeof e;
    },
    _o = function (e, t, r) {
      return e && e.progress(t ? 0 : 1) && r && e.pause();
    },
    To = function (e, t) {
      if (e.enabled) {
        var r = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        r && r.totalTime && (e.callbackAnimation = r);
      }
    },
    Mo = Math.abs,
    Co = "left",
    ko = "right",
    Po = "bottom",
    Ao = "width",
    Oo = "height",
    Lo = "Right",
    zo = "Left",
    Do = "Top",
    Io = "Bottom",
    qo = "padding",
    $o = "margin",
    Ro = "Width",
    Xo = "Height",
    No = "px",
    Bo = function (e) {
      return ya.getComputedStyle(e);
    },
    Fo = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    Yo = function (e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== Bo(e)[Aa] &&
          ga
            .to(e, {
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
            })
            .progress(1),
        i = e.getBoundingClientRect();
      return r && r.progress(0).kill(), i;
    },
    Wo = function (e, t) {
      var r = t.d2;
      return e["offset" + r] || e["client" + r] || 0;
    },
    Vo = function (e) {
      var t,
        r = [],
        i = e.labels,
        s = e.duration();
      for (t in i) r.push(i[t] / s);
      return r;
    },
    Go = function (e) {
      var t = ga.utils.snap(e),
        r =
          Array.isArray(e) &&
          e.slice(0).sort(function (e, t) {
            return e - t;
          });
      return r
        ? function (e, i, s) {
            var n;
            if ((void 0 === s && (s = 0.001), !i)) return t(e);
            if (i > 0) {
              for (e -= s, n = 0; n < r.length; n++) if (r[n] >= e) return r[n];
              return r[n - 1];
            }
            for (n = r.length, e += s; n--; ) if (r[n] <= e) return r[n];
            return r[0];
          }
        : function (r, i, s) {
            void 0 === s && (s = 0.001);
            var n = t(r);
            return !i || Math.abs(n - r) < s || n - r < 0 == i < 0
              ? n
              : t(i < 0 ? r - e : r + e);
          };
    },
    jo = function (e, t, r, i) {
      return r.split(",").forEach(function (r) {
        return e(t, r, i);
      });
    },
    Uo = function (e, t, r, i, s) {
      return e.addEventListener(t, r, { passive: !i, capture: !!s });
    },
    Ko = function (e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    },
    Zo = function (e, t, r) {
      (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
    },
    Qo = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Jo = { toggleActions: "play", anticipatePin: 0 },
    el = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    tl = function (e, t) {
      if (bo(e)) {
        var r = e.indexOf("="),
          i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= t / 100), (e = e.substr(0, r - 1))),
          (e =
            i +
            (e in el
              ? el[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    rl = function (e, t, r, i, s, n, a, o) {
      var l = s.startColor,
        c = s.endColor,
        d = s.fontSize,
        u = s.indent,
        p = s.fontWeight,
        h = wa.createElement("div"),
        f = mo(r) || "fixed" === Zn(r, "pinType"),
        m = -1 !== e.indexOf("scroller"),
        g = f ? xa : r,
        v = -1 !== e.indexOf("start"),
        y = v ? l : c,
        w =
          "border-color:" +
          y +
          ";font-size:" +
          d +
          ";color:" +
          y +
          ";font-weight:" +
          p +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (w += "position:" + ((m || o) && f ? "fixed;" : "absolute;")),
        (m || o || !f) &&
          (w += (i === oa ? ko : Po) + ":" + (n + parseFloat(u)) + "px;"),
        a &&
          (w +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (h._isStart = v),
        h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (h.style.cssText = w),
        (h.innerText = t || 0 === t ? e + "-" + t : e),
        g.children[0] ? g.insertBefore(h, g.children[0]) : g.appendChild(h),
        (h._offset = h["offset" + i.op.d2]),
        il(h, 0, i, v),
        h
      );
    },
    il = function (e, t, r, i) {
      var s = { display: "block" },
        n = r[i ? "os2" : "p2"],
        a = r[i ? "p2" : "os2"];
      (e._isFlipped = i),
        (s[r.a + "Percent"] = i ? -100 : 0),
        (s[r.a] = i ? "1px" : 0),
        (s["border" + n + Ro] = 1),
        (s["border" + a + Ro] = 0),
        (s[r.p] = t + "px"),
        ga.set(e, s);
    },
    sl = [],
    nl = {},
    al = function () {
      return to() - io > 34 && (Ka || (Ka = requestAnimationFrame(_l)));
    },
    ol = function () {
      (!Ra || !Ra.isPressed || Ra.startX > xa.clientWidth) &&
        (Gn.cache++,
        Ra ? Ka || (Ka = requestAnimationFrame(_l)) : _l(),
        io || hl("scrollStart"),
        (io = to()));
    },
    ll = function () {
      (Ba = ya.innerWidth), (Na = ya.innerHeight);
    },
    cl = function (e) {
      Gn.cache++,
        (!0 === e ||
          (!ka &&
            !$a &&
            !wa.fullscreenElement &&
            !wa.webkitFullscreenElement &&
            (!Xa ||
              Ba !== ya.innerWidth ||
              Math.abs(ya.innerHeight - Na) > 0.25 * ya.innerHeight))) &&
          Ea.restart(!0);
    },
    dl = {},
    ul = [],
    pl = function e() {
      return Ko(Rl, "scrollEnd", e) || xl(!0);
    },
    hl = function (e) {
      return (
        (dl[e] &&
          dl[e].map(function (e) {
            return e();
          })) ||
        ul
      );
    },
    fl = [],
    ml = function (e) {
      for (var t = 0; t < fl.length; t += 5)
        (!e || (fl[t + 4] && fl[t + 4].query === e)) &&
          ((fl[t].style.cssText = fl[t + 1]),
          fl[t].getBBox && fl[t].setAttribute("transform", fl[t + 2] || ""),
          (fl[t + 3].uncache = 1));
    },
    gl = function (e, t) {
      var r;
      for (Oa = 0; Oa < sl.length; Oa++)
        (r = sl[Oa]) &&
          (!t || r._ctx === t) &&
          (e ? r.kill(1) : r.revert(!0, !0));
      (Ga = !0), t && ml(t), t || hl("revert");
    },
    vl = function (e, t) {
      Gn.cache++,
        (t || !Za) &&
          Gn.forEach(function (e) {
            return xo(e) && e.cacheID++ && (e.rec = 0);
          }),
        bo(e) && (ya.history.scrollRestoration = Ha = e);
    },
    yl = 0,
    wl = function () {
      xa.appendChild(Wa),
        (Va = (!Ra && Wa.offsetHeight) || ya.innerHeight),
        xa.removeChild(Wa);
    },
    bl = function (e) {
      return _a(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    xl = function (e, t) {
      if (
        ((ba = wa.documentElement),
        (xa = wa.body),
        (Sa = [ya, wa, ba, xa]),
        !io || e || Ga)
      ) {
        wl(),
          (Za = Rl.isRefreshing = !0),
          Gn.forEach(function (e) {
            return xo(e) && ++e.cacheID && (e.rec = e());
          });
        var r = hl("refreshInit");
        Ia && Rl.sort(),
          t || gl(),
          Gn.forEach(function (e) {
            xo(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          sl.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          (Ga = !1),
          sl.forEach(function (e) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
            }
          }),
          (ja = 1),
          bl(!0),
          sl.forEach(function (e) {
            var t = yo(e.scroller, e._dir),
              r = "max" === e.vars.end || (e._endClamp && e.end > t),
              i = e._startClamp && e.start >= t;
            (r || i) &&
              e.setPositions(
                i ? t - 1 : e.start,
                r ? Math.max(i ? t : e.start + 1, t) : e.end,
                !0
              );
          }),
          bl(!1),
          (ja = 0),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          Gn.forEach(function (e) {
            xo(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          vl(Ha, 1),
          Ea.pause(),
          yl++,
          (Za = 2),
          _l(2),
          sl.forEach(function (e) {
            return xo(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (Za = Rl.isRefreshing = !1),
          hl("refresh");
      } else Uo(Rl, "scrollEnd", pl);
    },
    Sl = 0,
    El = 1,
    _l = function (e) {
      if (2 === e || (!Za && !Ga)) {
        (Rl.isUpdating = !0), Ja && Ja.update(0);
        var t = sl.length,
          r = to(),
          i = r - ro >= 50,
          s = t && sl[0].scroll();
        if (
          ((El = Sl > s ? -1 : 1),
          Za || (Sl = s),
          i &&
            (io && !Pa && r - io > 200 && ((io = 0), hl("scrollEnd")),
            (Ma = ro),
            (ro = r)),
          El < 0)
        ) {
          for (Oa = t; Oa-- > 0; ) sl[Oa] && sl[Oa].update(0, i);
          El = 1;
        } else for (Oa = 0; Oa < t; Oa++) sl[Oa] && sl[Oa].update(0, i);
        Rl.isUpdating = !1;
      }
      Ka = 0;
    },
    Tl = [
      Co,
      "top",
      Po,
      ko,
      $o + Io,
      $o + Lo,
      $o + Do,
      $o + zo,
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
    Ml = Tl.concat([
      Ao,
      Oo,
      "boxSizing",
      "max" + Ro,
      "max" + Xo,
      "position",
      $o,
      qo,
      qo + Do,
      qo + Lo,
      qo + Io,
      qo + zo,
    ]),
    Cl = function (e, t, r, i) {
      if (!e._gsap.swappedIn) {
        for (var s, n = Tl.length, a = t.style, o = e.style; n--; )
          a[(s = Tl[n])] = r[s];
        (a.position = "absolute" === r.position ? "absolute" : "relative"),
          "inline" === r.display && (a.display = "inline-block"),
          (o[Po] = o[ko] = "auto"),
          (a.flexBasis = r.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[Ao] = Wo(e, aa) + No),
          (a[Oo] = Wo(e, oa) + No),
          (a[qo] = o[$o] = o.top = o[Co] = "0"),
          Pl(i),
          (o[Ao] = o["max" + Ro] = r[Ao]),
          (o[Oo] = o["max" + Xo] = r[Oo]),
          (o[qo] = r[qo]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    kl = /([A-Z])/g,
    Pl = function (e) {
      if (e) {
        var t,
          r,
          i = e.t.style,
          s = e.length,
          n = 0;
        for ((e.t._gsap || ga.core.getCache(e.t)).uncache = 1; n < s; n += 2)
          (r = e[n + 1]),
            (t = e[n]),
            r
              ? (i[t] = r)
              : i[t] && i.removeProperty(t.replace(kl, "-$1").toLowerCase());
      }
    },
    Al = function (e) {
      for (var t = Ml.length, r = e.style, i = [], s = 0; s < t; s++)
        i.push(Ml[s], r[Ml[s]]);
      return (i.t = e), i;
    },
    Ol = { left: 0, top: 0 },
    Ll = function (e, t, r, i, s, n, a, o, l, c, d, u, p, h) {
      xo(e) && (e = e(o)),
        bo(e) &&
          "max" === e.substr(0, 3) &&
          (e = u + ("=" === e.charAt(4) ? tl("0" + e.substr(3), r) : 0));
      var f,
        m,
        g,
        v = p ? p.time() : 0;
      if ((p && p.seek(0), isNaN(e) || (e = +e), So(e)))
        p &&
          (e = ga.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            u,
            e
          )),
          a && il(a, r, i, !0);
      else {
        xo(t) && (t = t(o));
        var y,
          w,
          b,
          x,
          S = (e || "0").split(" ");
        (g = la(t, o) || xa),
          (!(y = Yo(g) || {}) || (!y.left && !y.top)) &&
            "none" === Bo(g).display &&
            ((x = g.style.display),
            (g.style.display = "block"),
            (y = Yo(g)),
            x ? (g.style.display = x) : g.style.removeProperty("display")),
          (w = tl(S[0], y[i.d])),
          (b = tl(S[1] || "0", r)),
          (e = y[i.p] - l[i.p] - c + w + s - b),
          a && il(a, b, i, r - b < 20 || (a._isStart && b > 20)),
          (r -= r - b);
      }
      if ((h && ((o[h] = e || -0.001), e < 0 && (e = 0)), n)) {
        var E = e + r,
          _ = n._isStart;
        (f = "scroll" + i.d2),
          il(
            n,
            E,
            i,
            (_ && E > 20) ||
              (!_ && (d ? Math.max(xa[f], ba[f]) : n.parentNode[f]) <= E + 1)
          ),
          d &&
            ((l = Yo(a)),
            d && (n.style[i.op.p] = l[i.op.p] - i.op.m - n._offset + No));
      }
      return (
        p &&
          g &&
          ((f = Yo(g)),
          p.seek(u),
          (m = Yo(g)),
          (p._caScrollDist = f[i.p] - m[i.p]),
          (e = (e / p._caScrollDist) * u)),
        p && p.seek(v),
        p ? e : Math.round(e)
      );
    },
    zl = /(webkit|moz|length|cssText|inset)/i,
    Dl = function (e, t, r, i) {
      if (e.parentNode !== t) {
        var s,
          n,
          a = e.style;
        if (t === xa) {
          for (s in ((e._stOrig = a.cssText), (n = Bo(e))))
            !+s &&
              !zl.test(s) &&
              n[s] &&
              "string" == typeof a[s] &&
              "0" !== s &&
              (a[s] = n[s]);
          (a.top = r), (a.left = i);
        } else a.cssText = e._stOrig;
        (ga.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Il = function (e, t, r) {
      var i = t,
        s = i;
      return function (t) {
        var n = Math.round(e());
        return (
          n !== i &&
            n !== s &&
            Math.abs(n - i) > 3 &&
            Math.abs(n - s) > 3 &&
            ((t = n), r && r()),
          (s = i),
          (i = Math.round(t))
        );
      };
    },
    ql = function (e, t, r) {
      var i = {};
      (i[t.p] = "+=" + r), ga.set(e, i);
    },
    $l = function (e, t) {
      var r = ca(e, t),
        i = "_scroll" + t.p2,
        s = function t(s, n, a, o, l) {
          var c = t.tween,
            d = n.onComplete,
            u = {};
          a = a || r();
          var p = Il(r, a, function () {
            c.kill(), (t.tween = 0);
          });
          return (
            (l = (o && l) || 0),
            (o = o || s - a),
            c && c.kill(),
            (n[i] = s),
            (n.inherit = !1),
            (n.modifiers = u),
            (u[i] = function () {
              return p(a + o * c.ratio + l * c.ratio * c.ratio);
            }),
            (n.onUpdate = function () {
              Gn.cache++, t.tween && _l();
            }),
            (n.onComplete = function () {
              (t.tween = 0), d && d.call(c);
            }),
            (c = t.tween = ga.to(e, n))
          );
        };
      return (
        (e[i] = r),
        (r.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Uo(e, "wheel", r.wheelHandler),
        Rl.isTouch && Uo(e, "touchmove", r.wheelHandler),
        s
      );
    },
    Rl = (function () {
      function e(t, r) {
        va ||
          e.register(ga) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Ya(this),
          this.init(t, r);
      }
      return (
        (e.prototype.init = function (t, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            so)
          ) {
            var i,
              s,
              n,
              a,
              o,
              l,
              c,
              d,
              u,
              p,
              h,
              f,
              m,
              g,
              v,
              y,
              w,
              b,
              x,
              S,
              E,
              _,
              T,
              M,
              C,
              k,
              P,
              A,
              O,
              L,
              z,
              D,
              I,
              q,
              $,
              R,
              X,
              N,
              B,
              F = (t = Fo(
                bo(t) || So(t) || t.nodeType ? { trigger: t } : t,
                Jo
              )),
              Y = F.onUpdate,
              H = F.toggleClass,
              W = F.id,
              V = F.onToggle,
              G = F.onRefresh,
              j = F.scrub,
              U = F.trigger,
              K = F.pin,
              Z = F.pinSpacing,
              Q = F.invalidateOnRefresh,
              J = F.anticipatePin,
              ee = F.onScrubComplete,
              te = F.onSnapComplete,
              re = F.once,
              ie = F.snap,
              se = F.pinReparent,
              ne = F.pinSpacer,
              ae = F.containerAnimation,
              oe = F.fastScrollEnd,
              le = F.preventOverlaps,
              ce =
                t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                  ? aa
                  : oa,
              de = !j && 0 !== j,
              ue = la(t.scroller || ya),
              pe = ga.core.getCache(ue),
              he = mo(ue),
              fe =
                "fixed" ===
                ("pinType" in t
                  ? t.pinType
                  : Zn(ue, "pinType") || (he && "fixed")),
              me = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
              ge = de && t.toggleActions.split(" "),
              ve = "markers" in t ? t.markers : Jo.markers,
              ye = he ? 0 : parseFloat(Bo(ue)["border" + ce.p2 + Ro]) || 0,
              we = this,
              be =
                t.onRefreshInit &&
                function () {
                  return t.onRefreshInit(we);
                },
              xe = (function (e, t, r) {
                var i = r.d,
                  s = r.d2,
                  n = r.a;
                return (n = Zn(e, "getBoundingClientRect"))
                  ? function () {
                      return n()[i];
                    }
                  : function () {
                      return (t ? go(s) : e["client" + s]) || 0;
                    };
              })(ue, he, ce),
              Se = (function (e, t) {
                return !t || ~jn.indexOf(e)
                  ? vo(e)
                  : function () {
                      return Ol;
                    };
              })(ue, he),
              Ee = 0,
              _e = 0,
              Te = 0,
              Me = ca(ue, ce);
            if (
              ((we._startClamp = we._endClamp = !1),
              (we._dir = ce),
              (J *= 45),
              (we.scroller = ue),
              (we.scroll = ae ? ae.time.bind(ae) : Me),
              (a = Me()),
              (we.vars = t),
              (r = r || t.animation),
              "refreshPriority" in t &&
                ((Ia = 1), -9999 === t.refreshPriority && (Ja = we)),
              (pe.tweenScroll = pe.tweenScroll || {
                top: $l(ue, oa),
                left: $l(ue, aa),
              }),
              (we.tweenTo = i = pe.tweenScroll[ce.p]),
              (we.scrubDuration = function (e) {
                (I = So(e) && e)
                  ? D
                    ? D.duration(e)
                    : (D = ga.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: I,
                        paused: !0,
                        onComplete: function () {
                          return ee && ee(we);
                        },
                      }))
                  : (D && D.progress(1).kill(), (D = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                (r._initted && !we.isReverted) ||
                  (!1 !== r.vars.immediateRender &&
                    !1 !== t.immediateRender &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (we.animation = r.pause()),
                (r.scrollTrigger = we),
                we.scrubDuration(j),
                (L = 0),
                W || (W = r.vars.id)),
              ie &&
                ((!Eo(ie) || ie.push) && (ie = { snapTo: ie }),
                "scrollBehavior" in xa.style &&
                  ga.set(he ? [xa, ba] : ue, { scrollBehavior: "auto" }),
                Gn.forEach(function (e) {
                  return (
                    xo(e) &&
                    e.target === (he ? wa.scrollingElement || ba : ue) &&
                    (e.smooth = !1)
                  );
                }),
                (n = xo(ie.snapTo)
                  ? ie.snapTo
                  : "labels" === ie.snapTo
                  ? (function (e) {
                      return function (t) {
                        return ga.utils.snap(Vo(e), t);
                      };
                    })(r)
                  : "labelsDirectional" === ie.snapTo
                  ? (function (e) {
                      return function (t, r) {
                        return Go(Vo(e))(t, r.direction);
                      };
                    })(r)
                  : !1 !== ie.directional
                  ? function (e, t) {
                      return Go(ie.snapTo)(
                        e,
                        to() - _e < 500 ? 0 : t.direction
                      );
                    }
                  : ga.utils.snap(ie.snapTo)),
                (q = ie.duration || { min: 0.1, max: 2 }),
                (q = Eo(q) ? Ta(q.min, q.max) : Ta(q, q)),
                ($ = ga
                  .delayedCall(ie.delay || I / 2 || 0.1, function () {
                    var e = Me(),
                      t = to() - _e < 500,
                      s = i.tween;
                    if (
                      !(t || Math.abs(we.getVelocity()) < 10) ||
                      s ||
                      Pa ||
                      Ee === e
                    )
                      we.isActive && Ee !== e && $.restart(!0);
                    else {
                      var a,
                        o,
                        d = (e - l) / g,
                        u = r && !de ? r.totalProgress() : d,
                        p = t ? 0 : ((u - z) / (to() - Ma)) * 1e3 || 0,
                        h = ga.utils.clamp(-d, 1 - d, (Mo(p / 2) * p) / 0.185),
                        f = d + (!1 === ie.inertia ? 0 : h),
                        m = ie,
                        v = m.onStart,
                        y = m.onInterrupt,
                        w = m.onComplete;
                      if (
                        ((a = n(f, we)),
                        So(a) || (a = f),
                        (o = Math.max(0, Math.round(l + a * g))),
                        e <= c && e >= l && o !== e)
                      ) {
                        if (s && !s._initted && s.data <= Mo(o - e)) return;
                        !1 === ie.inertia && (h = a - d),
                          i(
                            o,
                            {
                              duration: q(
                                Mo(
                                  (0.185 * Math.max(Mo(f - u), Mo(a - u))) /
                                    p /
                                    0.05 || 0
                                )
                              ),
                              ease: ie.ease || "power3",
                              data: Mo(o - e),
                              onInterrupt: function () {
                                return $.restart(!0) && y && y(we);
                              },
                              onComplete: function () {
                                we.update(),
                                  (Ee = Me()),
                                  r &&
                                    !de &&
                                    (D
                                      ? D.resetTo(
                                          "totalProgress",
                                          a,
                                          r._tTime / r._tDur
                                        )
                                      : r.progress(a)),
                                  (L = z =
                                    r && !de ? r.totalProgress() : we.progress),
                                  te && te(we),
                                  w && w(we);
                              },
                            },
                            e,
                            h * g,
                            o - e - h * g
                          ),
                          v && v(we, i.tween);
                      }
                    }
                  })
                  .pause())),
              W && (nl[W] = we),
              (B =
                (U = we.trigger = la(U || (!0 !== K && K))) &&
                U._gsap &&
                U._gsap.stRevert) && (B = B(we)),
              (K = !0 === K ? U : la(K)),
              bo(H) && (H = { targets: U, className: H }),
              K &&
                (!1 === Z ||
                  Z === $o ||
                  (Z =
                    !(
                      !Z &&
                      K.parentNode &&
                      K.parentNode.style &&
                      "flex" === Bo(K.parentNode).display
                    ) && qo),
                (we.pin = K),
                (s = ga.core.getCache(K)).spacer
                  ? (v = s.pinState)
                  : (ne &&
                      ((ne = la(ne)) &&
                        !ne.nodeType &&
                        (ne = ne.current || ne.nativeElement),
                      (s.spacerIsNative = !!ne),
                      ne && (s.spacerState = Al(ne))),
                    (s.spacer = b = ne || wa.createElement("div")),
                    b.classList.add("pin-spacer"),
                    W && b.classList.add("pin-spacer-" + W),
                    (s.pinState = v = Al(K))),
                !1 !== t.force3D && ga.set(K, { force3D: !0 }),
                (we.spacer = b = s.spacer),
                (O = Bo(K)),
                (M = O[Z + ce.os2]),
                (S = ga.getProperty(K)),
                (E = ga.quickSetter(K, ce.a, No)),
                Cl(K, b, O),
                (w = Al(K))),
              ve)
            ) {
              (f = Eo(ve) ? Fo(ve, Qo) : Qo),
                (p = rl("scroller-start", W, ue, ce, f, 0)),
                (h = rl("scroller-end", W, ue, ce, f, 0, p)),
                (x = p["offset" + ce.op.d2]);
              var Ce = la(Zn(ue, "content") || ue);
              (d = this.markerStart = rl("start", W, Ce, ce, f, x, 0, ae)),
                (u = this.markerEnd = rl("end", W, Ce, ce, f, x, 0, ae)),
                ae && (N = ga.quickSetter([d, u], ce.a, No)),
                !fe &&
                  (!jn.length || !0 !== Zn(ue, "fixedMarkers")) &&
                  ((function (e) {
                    var t = Bo(e).position;
                    e.style.position =
                      "absolute" === t || "fixed" === t ? t : "relative";
                  })(he ? xa : ue),
                  ga.set([p, h], { force3D: !0 }),
                  (k = ga.quickSetter(p, ce.a, No)),
                  (A = ga.quickSetter(h, ce.a, No)));
            }
            if (ae) {
              var ke = ae.vars.onUpdate,
                Pe = ae.vars.onUpdateParams;
              ae.eventCallback("onUpdate", function () {
                we.update(0, 0, 1), ke && ke.apply(ae, Pe || []);
              });
            }
            if (
              ((we.previous = function () {
                return sl[sl.indexOf(we) - 1];
              }),
              (we.next = function () {
                return sl[sl.indexOf(we) + 1];
              }),
              (we.revert = function (e, t) {
                if (!t) return we.kill(!0);
                var i = !1 !== e || !we.enabled,
                  s = ka;
                i !== we.isReverted &&
                  (i &&
                    ((R = Math.max(Me(), we.scroll.rec || 0)),
                    (Te = we.progress),
                    (X = r && r.progress())),
                  d &&
                    [d, u, p, h].forEach(function (e) {
                      return (e.style.display = i ? "none" : "block");
                    }),
                  i && ((ka = we), we.update(i)),
                  K &&
                    (!se || !we.isActive) &&
                    (i
                      ? (function (e, t, r) {
                          Pl(r);
                          var i = e._gsap;
                          if (i.spacerIsNative) Pl(i.spacerState);
                          else if (e._gsap.swappedIn) {
                            var s = t.parentNode;
                            s && (s.insertBefore(e, t), s.removeChild(t));
                          }
                          e._gsap.swappedIn = !1;
                        })(K, b, v)
                      : Cl(K, b, Bo(K), C)),
                  i || we.update(i),
                  (ka = s),
                  (we.isReverted = i));
              }),
              (we.refresh = function (s, n, f, x) {
                if ((!ka && we.enabled) || n) {
                  if (K && s && io) return void Uo(e, "scrollEnd", pl);
                  !Za && be && be(we),
                    (ka = we),
                    i.tween && !f && (i.tween.kill(), (i.tween = 0)),
                    D && D.pause(),
                    Q &&
                      r &&
                      (r.revert({ kill: !1 }).invalidate(),
                      r.getChildren &&
                        r.getChildren(!0, !0, !1).forEach(function (e) {
                          return e.vars.immediateRender && e.render(0, !0, !0);
                        })),
                    we.isReverted || we.revert(!0, !0),
                    (we._subPinOffset = !1);
                  var E,
                    M,
                    k,
                    A,
                    O,
                    L,
                    z,
                    I,
                    q,
                    N,
                    B,
                    F,
                    Y,
                    H = xe(),
                    W = Se(),
                    V = ae ? ae.duration() : yo(ue, ce),
                    j = g <= 0.01 || !g,
                    J = 0,
                    ee = x || 0,
                    te = Eo(f) ? f.end : t.end,
                    re = t.endTrigger || U,
                    ie = Eo(f)
                      ? f.start
                      : t.start ||
                        (0 !== t.start && U ? (K ? "0 0" : "0 100%") : 0),
                    ne = (we.pinnedContainer =
                      t.pinnedContainer && la(t.pinnedContainer, we)),
                    oe = (U && Math.max(0, sl.indexOf(we))) || 0,
                    le = oe;
                  for (
                    ve &&
                    Eo(f) &&
                    ((F = ga.getProperty(p, ce.p)),
                    (Y = ga.getProperty(h, ce.p)));
                    le-- > 0;

                  )
                    (L = sl[le]).end || L.refresh(0, 1) || (ka = we),
                      (z = L.pin) &&
                        (z === U || z === K || z === ne) &&
                        !L.isReverted &&
                        (N || (N = []), N.unshift(L), L.revert(!0, !0)),
                      L !== sl[le] && (oe--, le--);
                  for (
                    xo(ie) && (ie = ie(we)),
                      ie = no(ie, "start", we),
                      l =
                        Ll(
                          ie,
                          U,
                          H,
                          ce,
                          Me(),
                          d,
                          p,
                          we,
                          W,
                          ye,
                          fe,
                          V,
                          ae,
                          we._startClamp && "_startClamp"
                        ) || (K ? -0.001 : 0),
                      xo(te) && (te = te(we)),
                      bo(te) &&
                        !te.indexOf("+=") &&
                        (~te.indexOf(" ")
                          ? (te = (bo(ie) ? ie.split(" ")[0] : "") + te)
                          : ((J = tl(te.substr(2), H)),
                            (te = bo(ie)
                              ? ie
                              : (ae
                                  ? ga.utils.mapRange(
                                      0,
                                      ae.duration(),
                                      ae.scrollTrigger.start,
                                      ae.scrollTrigger.end,
                                      l
                                    )
                                  : l) + J),
                            (re = U))),
                      te = no(te, "end", we),
                      c =
                        Math.max(
                          l,
                          Ll(
                            te || (re ? "100% 0" : V),
                            re,
                            H,
                            ce,
                            Me() + J,
                            u,
                            h,
                            we,
                            W,
                            ye,
                            fe,
                            V,
                            ae,
                            we._endClamp && "_endClamp"
                          )
                        ) || -0.001,
                      J = 0,
                      le = oe;
                    le--;

                  )
                    (z = (L = sl[le]).pin) &&
                      L.start - L._pinPush <= l &&
                      !ae &&
                      L.end > 0 &&
                      ((E =
                        L.end -
                        (we._startClamp ? Math.max(0, L.start) : L.start)),
                      ((z === U && L.start - L._pinPush < l) || z === ne) &&
                        isNaN(ie) &&
                        (J += E * (1 - L.progress)),
                      z === K && (ee += E));
                  if (
                    ((l += J),
                    (c += J),
                    we._startClamp && (we._startClamp += J),
                    we._endClamp &&
                      !Za &&
                      ((we._endClamp = c || -0.001),
                      (c = Math.min(c, yo(ue, ce)))),
                    (g = c - l || ((l -= 0.01) && 0.001)),
                    j &&
                      (Te = ga.utils.clamp(0, 1, ga.utils.normalize(l, c, R))),
                    (we._pinPush = ee),
                    d &&
                      J &&
                      (((E = {})[ce.a] = "+=" + J),
                      ne && (E[ce.p] = "-=" + Me()),
                      ga.set([d, u], E)),
                    !K || (ja && we.end >= yo(ue, ce)))
                  ) {
                    if (U && Me() && !ae)
                      for (M = U.parentNode; M && M !== xa; )
                        M._pinOffset &&
                          ((l -= M._pinOffset), (c -= M._pinOffset)),
                          (M = M.parentNode);
                  } else
                    (E = Bo(K)),
                      (A = ce === oa),
                      (k = Me()),
                      (_ = parseFloat(S(ce.a)) + ee),
                      !V &&
                        c > 1 &&
                        ((B = {
                          style: (B = (he ? wa.scrollingElement || ba : ue)
                            .style),
                          value: B["overflow" + ce.a.toUpperCase()],
                        }),
                        he &&
                          "scroll" !==
                            Bo(xa)["overflow" + ce.a.toUpperCase()] &&
                          (B.style["overflow" + ce.a.toUpperCase()] =
                            "scroll")),
                      Cl(K, b, E),
                      (w = Al(K)),
                      (M = Yo(K, !0)),
                      (I = fe && ca(ue, A ? aa : oa)()),
                      Z
                        ? (((C = [Z + ce.os2, g + ee + No]).t = b),
                          (le = Z === qo ? Wo(K, ce) + g + ee : 0) &&
                            (C.push(ce.d, le + No),
                            "auto" !== b.style.flexBasis &&
                              (b.style.flexBasis = le + No)),
                          Pl(C),
                          ne &&
                            sl.forEach(function (e) {
                              e.pin === ne &&
                                !1 !== e.vars.pinSpacing &&
                                (e._subPinOffset = !0);
                            }),
                          fe && Me(R))
                        : (le = Wo(K, ce)) &&
                          "auto" !== b.style.flexBasis &&
                          (b.style.flexBasis = le + No),
                      fe &&
                        (((O = {
                          top: M.top + (A ? k - l : I) + No,
                          left: M.left + (A ? I : k - l) + No,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[Ao] = O["max" + Ro] =
                          Math.ceil(M.width) + No),
                        (O[Oo] = O["max" + Xo] = Math.ceil(M.height) + No),
                        (O[$o] =
                          O[$o + Do] =
                          O[$o + Lo] =
                          O[$o + Io] =
                          O[$o + zo] =
                            "0"),
                        (O[qo] = E[qo]),
                        (O[qo + Do] = E[qo + Do]),
                        (O[qo + Lo] = E[qo + Lo]),
                        (O[qo + Io] = E[qo + Io]),
                        (O[qo + zo] = E[qo + zo]),
                        (y = (function (e, t, r) {
                          for (
                            var i, s = [], n = e.length, a = r ? 8 : 0;
                            a < n;
                            a += 2
                          )
                            (i = e[a]), s.push(i, i in t ? t[i] : e[a + 1]);
                          return (s.t = e.t), s;
                        })(v, O, se)),
                        Za && Me(0)),
                      r
                        ? ((q = r._initted),
                          qa(1),
                          r.render(r.duration(), !0, !0),
                          (T = S(ce.a) - _ + g + ee),
                          (P = Math.abs(g - T) > 1),
                          fe && P && y.splice(y.length - 2, 2),
                          r.render(0, !0, !0),
                          q || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          qa(0))
                        : (T = g),
                      B &&
                        (B.value
                          ? (B.style["overflow" + ce.a.toUpperCase()] = B.value)
                          : B.style.removeProperty("overflow-" + ce.a));
                  N &&
                    N.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (we.start = l),
                    (we.end = c),
                    (a = o = Za ? R : Me()),
                    !ae && !Za && (a < R && Me(R), (we.scroll.rec = 0)),
                    we.revert(!1, !0),
                    (_e = to()),
                    $ && ((Ee = -1), $.restart(!0)),
                    (ka = 0),
                    r &&
                      de &&
                      (r._initted || X) &&
                      r.progress() !== X &&
                      r.progress(X || 0, !0).render(r.time(), !0, !0),
                    (j ||
                      Te !== we.progress ||
                      ae ||
                      Q ||
                      (r && !r._initted)) &&
                      (r &&
                        !de &&
                        (r._initted || Te || !1 !== r.vars.immediateRender) &&
                        r.totalProgress(
                          ae && l < -0.001 && !Te
                            ? ga.utils.normalize(l, c, 0)
                            : Te,
                          !0
                        ),
                      (we.progress = j || (a - l) / g === Te ? 0 : Te)),
                    K && Z && (b._pinOffset = Math.round(we.progress * T)),
                    D && D.invalidate(),
                    isNaN(F) ||
                      ((F -= ga.getProperty(p, ce.p)),
                      (Y -= ga.getProperty(h, ce.p)),
                      ql(p, ce, F),
                      ql(d, ce, F - (x || 0)),
                      ql(h, ce, Y),
                      ql(u, ce, Y - (x || 0))),
                    j && !Za && we.update(),
                    G && !Za && !m && ((m = !0), G(we), (m = !1));
                }
              }),
              (we.getVelocity = function () {
                return ((Me() - o) / (to() - Ma)) * 1e3 || 0;
              }),
              (we.endAnimation = function () {
                _o(we.callbackAnimation),
                  r &&
                    (D
                      ? D.progress(1)
                      : r.paused()
                      ? de || _o(r, we.direction < 0, 1)
                      : _o(r, r.reversed()));
              }),
              (we.labelToScroll = function (e) {
                return (
                  (r &&
                    r.labels &&
                    (l || we.refresh() || l) +
                      (r.labels[e] / r.duration()) * g) ||
                  0
                );
              }),
              (we.getTrailing = function (e) {
                var t = sl.indexOf(we),
                  r =
                    we.direction > 0
                      ? sl.slice(0, t).reverse()
                      : sl.slice(t + 1);
                return (
                  bo(e)
                    ? r.filter(function (t) {
                        return t.vars.preventOverlaps === e;
                      })
                    : r
                ).filter(function (e) {
                  return we.direction > 0 ? e.end <= l : e.start >= c;
                });
              }),
              (we.update = function (e, t, s) {
                if (!ae || s || e) {
                  var n,
                    d,
                    u,
                    h,
                    f,
                    m,
                    v,
                    x = !0 === Za ? R : we.scroll(),
                    S = e ? 0 : (x - l) / g,
                    C = S < 0 ? 0 : S > 1 ? 1 : S || 0,
                    O = we.progress;
                  if (
                    (t &&
                      ((o = a),
                      (a = ae ? Me() : x),
                      ie && ((z = L), (L = r && !de ? r.totalProgress() : C))),
                    J &&
                      K &&
                      !ka &&
                      !eo &&
                      io &&
                      (!C && l < x + ((x - o) / (to() - Ma)) * J
                        ? (C = 1e-4)
                        : 1 === C &&
                          c > x + ((x - o) / (to() - Ma)) * J &&
                          (C = 0.9999)),
                    C !== O && we.enabled)
                  ) {
                    if (
                      ((h =
                        (f =
                          (n = we.isActive = !!C && C < 1) !==
                          (!!O && O < 1)) || !!C != !!O),
                      (we.direction = C > O ? 1 : -1),
                      (we.progress = C),
                      h &&
                        !ka &&
                        ((d = C && !O ? 0 : 1 === C ? 1 : 1 === O ? 2 : 3),
                        de &&
                          ((u =
                            (!f && "none" !== ge[d + 1] && ge[d + 1]) || ge[d]),
                          (v =
                            r &&
                            ("complete" === u || "reset" === u || u in r)))),
                      le &&
                        (f || v) &&
                        (v || j || !r) &&
                        (xo(le)
                          ? le(we)
                          : we.getTrailing(le).forEach(function (e) {
                              return e.endAnimation();
                            })),
                      de ||
                        (!D || ka || eo
                          ? r && r.totalProgress(C, !(!ka || (!_e && !e)))
                          : (D._dp._time - D._start !== D._time &&
                              D.render(D._dp._time - D._start),
                            D.resetTo
                              ? D.resetTo(
                                  "totalProgress",
                                  C,
                                  r._tTime / r._tDur
                                )
                              : ((D.vars.totalProgress = C),
                                D.invalidate().restart()))),
                      K)
                    )
                      if ((e && Z && (b.style[Z + ce.os2] = M), fe)) {
                        if (h) {
                          if (
                            ((m =
                              !e && C > O && c + 1 > x && x + 1 >= yo(ue, ce)),
                            se)
                          )
                            if (e || (!n && !m)) Dl(K, b);
                            else {
                              var I = Yo(K, !0),
                                q = x - l;
                              Dl(
                                K,
                                xa,
                                I.top + (ce === oa ? q : 0) + No,
                                I.left + (ce === oa ? 0 : q) + No
                              );
                            }
                          Pl(n || m ? y : w),
                            (P && C < 1 && n) || E(_ + (1 !== C || m ? 0 : T));
                        }
                      } else E(po(_ + T * C));
                    ie && !i.tween && !ka && !eo && $.restart(!0),
                      H &&
                        (f || (re && C && (C < 1 || !Ua))) &&
                        _a(H.targets).forEach(function (e) {
                          return e.classList[n || re ? "add" : "remove"](
                            H.className
                          );
                        }),
                      Y && !de && !e && Y(we),
                      h && !ka
                        ? (de &&
                            (v &&
                              ("complete" === u
                                ? r.pause().totalProgress(1)
                                : "reset" === u
                                ? r.restart(!0).pause()
                                : "restart" === u
                                ? r.restart(!0)
                                : r[u]()),
                            Y && Y(we)),
                          (f || !Ua) &&
                            (V && f && To(we, V),
                            me[d] && To(we, me[d]),
                            re && (1 === C ? we.kill(!1, 1) : (me[d] = 0)),
                            f || (me[(d = 1 === C ? 1 : 3)] && To(we, me[d]))),
                          oe &&
                            !n &&
                            Math.abs(we.getVelocity()) > (So(oe) ? oe : 2500) &&
                            (_o(we.callbackAnimation),
                            D
                              ? D.progress(1)
                              : _o(r, "reverse" === u ? 1 : !C, 1)))
                        : de && Y && !ka && Y(we);
                  }
                  if (A) {
                    var X = ae
                      ? (x / ae.duration()) * (ae._caScrollDist || 0)
                      : x;
                    k(X + (p._isFlipped ? 1 : 0)), A(X);
                  }
                  N && N((-x / ae.duration()) * (ae._caScrollDist || 0));
                }
              }),
              (we.enable = function (t, r) {
                we.enabled ||
                  ((we.enabled = !0),
                  Uo(ue, "resize", cl),
                  he || Uo(ue, "scroll", ol),
                  be && Uo(e, "refreshInit", be),
                  !1 !== t && ((we.progress = Te = 0), (a = o = Ee = Me())),
                  !1 !== r && we.refresh());
              }),
              (we.getTween = function (e) {
                return e && i ? i.tween : D;
              }),
              (we.setPositions = function (e, t, r, i) {
                if (ae) {
                  var s = ae.scrollTrigger,
                    n = ae.duration(),
                    a = s.end - s.start;
                  (e = s.start + (a * e) / n), (t = s.start + (a * t) / n);
                }
                we.refresh(
                  !1,
                  !1,
                  {
                    start: ao(e, r && !!we._startClamp),
                    end: ao(t, r && !!we._endClamp),
                  },
                  i
                ),
                  we.update();
              }),
              (we.adjustPinSpacing = function (e) {
                if (C && e) {
                  var t = C.indexOf(ce.d) + 1;
                  (C[t] = parseFloat(C[t]) + e + No),
                    (C[1] = parseFloat(C[1]) + e + No),
                    Pl(C);
                }
              }),
              (we.disable = function (t, r) {
                if (
                  we.enabled &&
                  (!1 !== t && we.revert(!0, !0),
                  (we.enabled = we.isActive = !1),
                  r || (D && D.pause()),
                  (R = 0),
                  s && (s.uncache = 1),
                  be && Ko(e, "refreshInit", be),
                  $ && ($.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                  !he)
                ) {
                  for (var n = sl.length; n--; )
                    if (sl[n].scroller === ue && sl[n] !== we) return;
                  Ko(ue, "resize", cl), he || Ko(ue, "scroll", ol);
                }
              }),
              (we.kill = function (e, i) {
                we.disable(e, i), D && !i && D.kill(), W && delete nl[W];
                var n = sl.indexOf(we);
                n >= 0 && sl.splice(n, 1),
                  n === Oa && El > 0 && Oa--,
                  (n = 0),
                  sl.forEach(function (e) {
                    return e.scroller === we.scroller && (n = 1);
                  }),
                  n || Za || (we.scroll.rec = 0),
                  r &&
                    ((r.scrollTrigger = null),
                    e && r.revert({ kill: !1 }),
                    i || r.kill()),
                  d &&
                    [d, u, p, h].forEach(function (e) {
                      return e.parentNode && e.parentNode.removeChild(e);
                    }),
                  Ja === we && (Ja = 0),
                  K &&
                    (s && (s.uncache = 1),
                    (n = 0),
                    sl.forEach(function (e) {
                      return e.pin === K && n++;
                    }),
                    n || (s.spacer = 0)),
                  t.onKill && t.onKill(we);
              }),
              sl.push(we),
              we.enable(!1, !1),
              B && B(we),
              r && r.add && !g)
            ) {
              var Ae = we.update;
              (we.update = function () {
                (we.update = Ae), Gn.cache++, l || c || we.refresh();
              }),
                ga.delayedCall(0.01, we.update),
                (g = 0.01),
                (l = c = 0);
            } else we.refresh();
            K &&
              (function () {
                if (Qa !== yl) {
                  var e = (Qa = yl);
                  requestAnimationFrame(function () {
                    return e === yl && xl(!0);
                  });
                }
              })();
          } else this.update = this.refresh = this.kill = uo;
        }),
        (e.register = function (t) {
          return (
            va ||
              ((ga = t || fo()),
              ho() && window.document && e.enable(),
              (va = so)),
            va
          );
        }),
        (e.defaults = function (e) {
          if (e) for (var t in e) Jo[t] = e[t];
          return Jo;
        }),
        (e.disable = function (e, t) {
          (so = 0),
            sl.forEach(function (r) {
              return r[t ? "kill" : "disable"](e);
            }),
            Ko(ya, "wheel", ol),
            Ko(wa, "scroll", ol),
            clearInterval(Ca),
            Ko(wa, "touchcancel", uo),
            Ko(xa, "touchstart", uo),
            jo(Ko, wa, "pointerdown,touchstart,mousedown", lo),
            jo(Ko, wa, "pointerup,touchend,mouseup", co),
            Ea.kill(),
            wo(Ko);
          for (var r = 0; r < Gn.length; r += 3)
            Zo(Ko, Gn[r], Gn[r + 1]), Zo(Ko, Gn[r], Gn[r + 2]);
        }),
        (e.enable = function () {
          if (
            ((ya = window),
            (wa = document),
            (ba = wa.documentElement),
            (xa = wa.body),
            ga &&
              ((_a = ga.utils.toArray),
              (Ta = ga.utils.clamp),
              (Ya = ga.core.context || uo),
              (qa = ga.core.suppressOverwrites || uo),
              (Ha = ya.history.scrollRestoration || "auto"),
              (Sl = ya.pageYOffset || 0),
              ga.core.globals("ScrollTrigger", e),
              xa))
          ) {
            (so = 1),
              ((Wa = document.createElement("div")).style.height = "100vh"),
              (Wa.style.position = "absolute"),
              wl(),
              oo(),
              ma.register(ga),
              (e.isTouch = ma.isTouch),
              (Fa =
                ma.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Xa = 1 === ma.isTouch),
              Uo(ya, "wheel", ol),
              (Sa = [ya, wa, ba, xa]),
              ga.matchMedia
                ? ((e.matchMedia = function (e) {
                    var t,
                      r = ga.matchMedia();
                    for (t in e) r.add(t, e[t]);
                    return r;
                  }),
                  ga.addEventListener("matchMediaInit", function () {
                    return gl();
                  }),
                  ga.addEventListener("matchMediaRevert", function () {
                    return ml();
                  }),
                  ga.addEventListener("matchMedia", function () {
                    xl(0, 1), hl("matchMedia");
                  }),
                  ga.matchMedia().add("(orientation: portrait)", function () {
                    return ll(), ll;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              ll(),
              Uo(wa, "scroll", ol);
            var t,
              r,
              i = xa.hasAttribute("style"),
              s = xa.style,
              n = s.borderTopStyle,
              a = ga.core.Animation.prototype;
            for (
              a.revert ||
                Object.defineProperty(a, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                s.borderTopStyle = "solid",
                t = Yo(xa),
                oa.m = Math.round(t.top + oa.sc()) || 0,
                aa.m = Math.round(t.left + aa.sc()) || 0,
                n
                  ? (s.borderTopStyle = n)
                  : s.removeProperty("border-top-style"),
                i ||
                  (xa.setAttribute("style", ""), xa.removeAttribute("style")),
                Ca = setInterval(al, 250),
                ga.delayedCall(0.5, function () {
                  return (eo = 0);
                }),
                Uo(wa, "touchcancel", uo),
                Uo(xa, "touchstart", uo),
                jo(Uo, wa, "pointerdown,touchstart,mousedown", lo),
                jo(Uo, wa, "pointerup,touchend,mouseup", co),
                Aa = ga.utils.checkPrefix("transform"),
                Ml.push(Aa),
                va = to(),
                Ea = ga.delayedCall(0.2, xl).pause(),
                Da = [
                  wa,
                  "visibilitychange",
                  function () {
                    var e = ya.innerWidth,
                      t = ya.innerHeight;
                    wa.hidden
                      ? ((La = e), (za = t))
                      : (La !== e || za !== t) && cl();
                  },
                  wa,
                  "DOMContentLoaded",
                  xl,
                  ya,
                  "load",
                  xl,
                  ya,
                  "resize",
                  cl,
                ],
                wo(Uo),
                sl.forEach(function (e) {
                  return e.enable(0, 1);
                }),
                r = 0;
              r < Gn.length;
              r += 3
            )
              Zo(Ko, Gn[r], Gn[r + 1]), Zo(Ko, Gn[r], Gn[r + 2]);
          }
        }),
        (e.config = function (t) {
          "limitCallbacks" in t && (Ua = !!t.limitCallbacks);
          var r = t.syncInterval;
          (r && clearInterval(Ca)) || ((Ca = r) && setInterval(al, r)),
            "ignoreMobileResize" in t &&
              (Xa = 1 === e.isTouch && t.ignoreMobileResize),
            "autoRefreshEvents" in t &&
              (wo(Ko) || wo(Uo, t.autoRefreshEvents || "none"),
              ($a = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
        }),
        (e.scrollerProxy = function (e, t) {
          var r = la(e),
            i = Gn.indexOf(r),
            s = mo(r);
          ~i && Gn.splice(i, s ? 6 : 2),
            t && (s ? jn.unshift(ya, t, xa, t, ba, t) : jn.unshift(r, t));
        }),
        (e.clearMatchMedia = function (e) {
          sl.forEach(function (t) {
            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
          });
        }),
        (e.isInViewport = function (e, t, r) {
          var i = (bo(e) ? la(e) : e).getBoundingClientRect(),
            s = i[r ? Ao : Oo] * t || 0;
          return r
            ? i.right - s > 0 && i.left + s < ya.innerWidth
            : i.bottom - s > 0 && i.top + s < ya.innerHeight;
        }),
        (e.positionInViewport = function (e, t, r) {
          bo(e) && (e = la(e));
          var i = e.getBoundingClientRect(),
            s = i[r ? Ao : Oo],
            n =
              null == t
                ? s / 2
                : t in el
                ? el[t] * s
                : ~t.indexOf("%")
                ? (parseFloat(t) * s) / 100
                : parseFloat(t) || 0;
          return r
            ? (i.left + n) / ya.innerWidth
            : (i.top + n) / ya.innerHeight;
        }),
        (e.killAll = function (e) {
          if (
            (sl.slice(0).forEach(function (e) {
              return "ScrollSmoother" !== e.vars.id && e.kill();
            }),
            !0 !== e)
          ) {
            var t = dl.killAll || [];
            (dl = {}),
              t.forEach(function (e) {
                return e();
              });
          }
        }),
        e
      );
    })();
  (Rl.version = "3.13.0"),
    (Rl.saveStyles = function (e) {
      return e
        ? _a(e).forEach(function (e) {
            if (e && e.style) {
              var t = fl.indexOf(e);
              t >= 0 && fl.splice(t, 5),
                fl.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  ga.core.getCache(e),
                  Ya()
                );
            }
          })
        : fl;
    }),
    (Rl.revert = function (e, t) {
      return gl(!e, t);
    }),
    (Rl.create = function (e, t) {
      return new Rl(e, t);
    }),
    (Rl.refresh = function (e) {
      return e ? cl(!0) : (va || Rl.register()) && xl(!0);
    }),
    (Rl.update = function (e) {
      return ++Gn.cache && _l(!0 === e ? 2 : 0);
    }),
    (Rl.clearScrollMemory = vl),
    (Rl.maxScroll = function (e, t) {
      return yo(e, t ? aa : oa);
    }),
    (Rl.getScrollFunc = function (e, t) {
      return ca(la(e), t ? aa : oa);
    }),
    (Rl.getById = function (e) {
      return nl[e];
    }),
    (Rl.getAll = function () {
      return sl.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (Rl.isScrolling = function () {
      return !!io;
    }),
    (Rl.snapDirectional = Go),
    (Rl.addEventListener = function (e, t) {
      var r = dl[e] || (dl[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (Rl.removeEventListener = function (e, t) {
      var r = dl[e],
        i = r && r.indexOf(t);
      i >= 0 && r.splice(i, 1);
    }),
    (Rl.batch = function (e, t) {
      var r,
        i = [],
        s = {},
        n = t.interval || 0.016,
        a = t.batchMax || 1e9,
        o = function (e, t) {
          var r = [],
            i = [],
            s = ga
              .delayedCall(n, function () {
                t(r, i), (r = []), (i = []);
              })
              .pause();
          return function (e) {
            r.length || s.restart(!0),
              r.push(e.trigger),
              i.push(e),
              a <= r.length && s.progress(1);
          };
        };
      for (r in t)
        s[r] =
          "on" === r.substr(0, 2) && xo(t[r]) && "onRefreshInit" !== r
            ? o(0, t[r])
            : t[r];
      return (
        xo(a) &&
          ((a = a()),
          Uo(Rl, "refresh", function () {
            return (a = t.batchMax());
          })),
        _a(e).forEach(function (e) {
          var t = {};
          for (r in s) t[r] = s[r];
          (t.trigger = e), i.push(Rl.create(t));
        }),
        i
      );
    });
  var Xl,
    Nl = function (e, t, r, i) {
      return (
        t > i ? e(i) : t < 0 && e(0),
        r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
      );
    },
    Bl = function e(t, r) {
      !0 === r
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            !0 === r
              ? "auto"
              : r
              ? "pan-" + r + (ma.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === ba && e(xa, r);
    },
    Fl = { auto: 1, scroll: 1 },
    Yl = function (e) {
      var t,
        r = e.event,
        i = e.target,
        s = e.axis,
        n = (r.changedTouches ? r.changedTouches[0] : r).target,
        a = n._gsap || ga.core.getCache(n),
        o = to();
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== xa &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            (!Fl[(t = Bo(n)).overflowY] && !Fl[t.overflowX]));

        )
          n = n.parentNode;
        (a._isScroll =
          n &&
          n !== i &&
          !mo(n) &&
          (Fl[(t = Bo(n)).overflowY] || Fl[t.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || "x" === s) && (r.stopPropagation(), (r._gsapAllow = !0));
    },
    Hl = function (e, t, r, i) {
      return ma.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (i = i && Yl),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && Uo(wa, ma.eventTypes[0], Vl, !1, !0);
        },
        onDisable: function () {
          return Ko(wa, ma.eventTypes[0], Vl, !0);
        },
      });
    },
    Wl = /(input|label|select|textarea)/i,
    Vl = function (e) {
      var t = Wl.test(e.target.tagName);
      (t || Xl) && ((e._gsapAllow = !0), (Xl = t));
    },
    Gl = function (e) {
      Eo(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t,
        r,
        i,
        s,
        n,
        a,
        o,
        l,
        c = e,
        d = c.normalizeScrollX,
        u = c.momentum,
        p = c.allowNestedScroll,
        h = c.onRelease,
        f = la(e.target) || ba,
        m = ga.core.globals().ScrollSmoother,
        g = m && m.get(),
        v =
          Fa &&
          ((e.content && la(e.content)) ||
            (g && !1 !== e.content && !g.smooth() && g.content())),
        y = ca(f, oa),
        w = ca(f, aa),
        b = 1,
        x =
          (ma.isTouch && ya.visualViewport
            ? ya.visualViewport.scale * ya.visualViewport.width
            : ya.outerWidth) / ya.innerWidth,
        S = 0,
        E = xo(u)
          ? function () {
              return u(t);
            }
          : function () {
              return u || 2.8;
            },
        _ = Hl(f, e.type, !0, p),
        T = function () {
          return (s = !1);
        },
        M = uo,
        C = uo,
        k = function () {
          (r = yo(f, oa)),
            (C = Ta(Fa ? 1 : 0, r)),
            d && (M = Ta(0, yo(f, aa))),
            (i = yl);
        },
        P = function () {
          (v._gsap.y = po(parseFloat(v._gsap.y) + y.offset) + "px"),
            (v.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(v._gsap.y) +
              ", 0, 1)"),
            (y.offset = y.cacheID = 0);
        },
        A = function () {
          k(),
            n.isActive() &&
              n.vars.scrollY > r &&
              (y() > r ? n.progress(1) && y(r) : n.resetTo("scrollY", r));
        };
      return (
        v && ga.set(v, { y: "+=0" }),
        (e.ignoreCheck = function (e) {
          return (
            (Fa &&
              "touchmove" === e.type &&
              (function () {
                if (s) {
                  requestAnimationFrame(T);
                  var e = po(t.deltaY / 2),
                    r = C(y.v - e);
                  if (v && r !== y.v + y.offset) {
                    y.offset = r - y.v;
                    var i = po((parseFloat(v && v._gsap.y) || 0) - y.offset);
                    (v.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      i +
                      ", 0, 1)"),
                      (v._gsap.y = i + "px"),
                      (y.cacheID = Gn.cache),
                      _l();
                  }
                  return !0;
                }
                y.offset && P(), (s = !0);
              })()) ||
            (b > 1.05 && "touchstart" !== e.type) ||
            t.isGesturing ||
            (e.touches && e.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          s = !1;
          var e = b;
          (b = po(((ya.visualViewport && ya.visualViewport.scale) || 1) / x)),
            n.pause(),
            e !== b && Bl(f, b > 1.01 || (!d && "x")),
            (a = w()),
            (o = y()),
            k(),
            (i = yl);
        }),
        (e.onRelease = e.onGestureStart =
          function (e, t) {
            if ((y.offset && P(), t)) {
              Gn.cache++;
              var i,
                s,
                a = E();
              d &&
                ((s = (i = w()) + (0.05 * a * -e.velocityX) / 0.227),
                (a *= Nl(w, i, s, yo(f, aa))),
                (n.vars.scrollX = M(s))),
                (s = (i = y()) + (0.05 * a * -e.velocityY) / 0.227),
                (a *= Nl(y, i, s, yo(f, oa))),
                (n.vars.scrollY = C(s)),
                n.invalidate().duration(a).play(0.01),
                ((Fa && n.vars.scrollY >= r) || i >= r - 1) &&
                  ga.to({}, { onUpdate: A, duration: a });
            } else l.restart(!0);
            h && h(e);
          }),
        (e.onWheel = function () {
          n._ts && n.pause(), to() - S > 1e3 && ((i = 0), (S = to()));
        }),
        (e.onChange = function (e, t, r, s, n) {
          if (
            (yl !== i && k(),
            t && d && w(M(s[2] === t ? a + (e.startX - e.x) : w() + t - s[1])),
            r)
          ) {
            y.offset && P();
            var l = n[2] === r,
              c = l ? o + e.startY - e.y : y() + r - n[1],
              u = C(c);
            l && c !== u && (o += u - c), y(u);
          }
          (r || t) && _l();
        }),
        (e.onEnable = function () {
          Bl(f, !d && "x"),
            Rl.addEventListener("refresh", A),
            Uo(ya, "resize", A),
            y.smooth &&
              ((y.target.style.scrollBehavior = "auto"),
              (y.smooth = w.smooth = !1)),
            _.enable();
        }),
        (e.onDisable = function () {
          Bl(f, !0),
            Ko(ya, "resize", A),
            Rl.removeEventListener("refresh", A),
            _.kill();
        }),
        (e.lockAxis = !1 !== e.lockAxis),
        ((t = new ma(e)).iOS = Fa),
        Fa && !y() && y(1),
        Fa && ga.ticker.add(uo),
        (l = t._dc),
        (n = ga.to(t, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: d ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Il(y, y(), function () {
              return n.pause();
            }),
          },
          onUpdate: _l,
          onComplete: l.vars.onComplete,
        })),
        t
      );
    };
  (Rl.sort = function (e) {
    if (xo(e)) return sl.sort(e);
    var t = ya.pageYOffset || 0;
    return (
      Rl.getAll().forEach(function (e) {
        return (e._sortY = e.trigger
          ? t + e.trigger.getBoundingClientRect().top
          : e.start + ya.innerHeight);
      }),
      sl.sort(
        e ||
          function (e, t) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              (e.vars.containerAnimation ? 1e6 : e._sortY) -
              ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                -1e6 * (t.vars.refreshPriority || 0))
            );
          }
      )
    );
  }),
    (Rl.observe = function (e) {
      return new ma(e);
    }),
    (Rl.normalizeScroll = function (e) {
      if (void 0 === e) return Ra;
      if (!0 === e && Ra) return Ra.enable();
      if (!1 === e) return Ra && Ra.kill(), void (Ra = e);
      var t = e instanceof ma ? e : Gl(e);
      return (
        Ra && Ra.target === t.target && Ra.kill(), mo(t.target) && (Ra = t), t
      );
    }),
    (Rl.core = {
      _getVelocityProp: da,
      _inputObserver: Hl,
      _scrollers: Gn,
      _proxies: jn,
      bridge: {
        ss: function () {
          io || hl("scrollStart"), (io = to());
        },
        ref: function () {
          return ka;
        },
      },
    }),
    fo() && ga.registerPlugin(Rl),
    Pn.registerPlugin(Rl);
  class jl {
    constructor() {
      this.init();
    }
    static attr(e, t) {
      const r = typeof e;
      return "string" != typeof t || "" === t.trim()
        ? e
        : ("true" === t && "boolean" === r) ||
            (("false" !== t || "boolean" !== r) &&
              (isNaN(t) && "string" === r
                ? t
                : isNaN(t) || "number" !== r
                ? e
                : +t));
    }
    init() {
      document
        .querySelectorAll("[marquee-element='component']")
        .forEach((e, t) => {
          const r = e.querySelectorAll("[marquee-element='panel']"),
            i = e.querySelectorAll("[marquee-element='triggerhover']"),
            s = e.querySelectorAll("[marquee-element='triggerclick']");
          let n = jl.attr(100, e.getAttribute("marquee-speed")),
            a = jl.attr(!1, e.getAttribute("marquee-vertical")),
            o = jl.attr(!1, e.getAttribute("marquee-reverse")),
            l = jl.attr(!1, e.getAttribute("marquee-scrolldirection")),
            c = jl.attr(!1, e.getAttribute("marquee-scrollscrub")),
            d = -100,
            u = 1,
            p = !1;
          o && (d = 100);
          let h = Pn.timeline({
            repeat: -1,
            onReverseComplete: () => h.progress(1),
          });
          a
            ? ((n = r[0].offsetHeight / n),
              h.fromTo(
                r,
                { yPercent: 0 },
                { yPercent: d, ease: "none", duration: n }
              ))
            : ((n = r[0].offsetWidth / n),
              h.fromTo(
                r,
                { xPercent: 0 },
                { xPercent: d, ease: "none", duration: n }
              ));
          let f = { value: 1 };
          function m(e) {
            p = e;
            let t = { value: 1 },
              r = Pn.timeline({ onUpdate: () => h.timeScale(t.value) });
            e
              ? (r.fromTo(t, { value: u }, { value: 0, duration: 0.5 }),
                s.forEach((e) => e.setAttribute("marquee-status", "paused")))
              : (r.fromTo(t, { value: 0 }, { value: u, duration: 0.5 }),
                s.forEach((e) => e.setAttribute("marquee-status", "playing")));
          }
          Rl.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (e) => {
              if (
                !p &&
                (l &&
                  u !== e.direction &&
                  ((u = e.direction), h.timeScale(e.direction)),
                c)
              ) {
                let t = 0.006 * e.getVelocity();
                (t = Pn.utils.clamp(-60, 60, t)),
                  Pn.timeline({ onUpdate: () => h.timeScale(f.value) }).fromTo(
                    f,
                    { value: t },
                    { value: u, duration: 0.5 }
                  );
              }
            },
          }),
            window.matchMedia("(pointer: fine)").matches &&
              i.forEach((e) => {
                e.addEventListener("mouseenter", () => m(!0)),
                  e.addEventListener("mouseleave", () => m(!1));
              }),
            s.forEach((e) => {
              e.addEventListener("click", function () {
                "paused" === this.getAttribute("marquee-status")
                  ? m(!1)
                  : m(!0);
              });
            });
        });
    }
  }
  function Ul() {
    new jl();
  }
  class Kl {
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
      this.swiper = new pe("[swiper='review-slider']", {
        direction: "horizontal",
        slidesPerView: 1,
        on: {
          slideChange: function (e) {
            e.slides.forEach((e) => {
              e.setAttribute("card-status", "inactive");
            }),
              e.slides[e.activeIndex].setAttribute("card-status", "active");
          },
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
  }
  function Zl() {
    new Kl();
  }
  Pn.registerPlugin(Rl);
  const Ql = () => {
    (() => {
      const e = 0,
        t = 1,
        r = 1.2,
        i = 1.2,
        s = 3.2,
        n = 5.2,
        a = 5.8,
        o = 7.2,
        l = 7.8,
        c = 7.2,
        d = document.querySelector("[service-scroll='section']"),
        u = d
          .querySelector("[service-scroll='main']")
          .querySelector("[visual-wrap='main']"),
        p = d.querySelector("[service-scroll='svg-visual-wrap']"),
        h = p.querySelector("[service-scroll='svg-line']"),
        f = p.querySelector("[service-scroll='svg-sm']"),
        m = p.querySelector("[service-scroll='svg-path-faded']"),
        g = p.querySelector("[service-scroll='svg-path-solid']"),
        v = d.querySelector("[service-intro='eyebrow']"),
        y = d.querySelector("[service-intro='heading']"),
        w = d.querySelector("[service-item='3d']"),
        b = d.querySelector("[service-header='3d']"),
        x = d.querySelector("[service-video-trigger='3d']"),
        S = document.querySelector("[visual-wrap='3d']"),
        E = d.querySelector("[service-item='2d']"),
        _ = d.querySelector("[service-header='2d']"),
        T = d.querySelector("[service-video-trigger='2d']"),
        M = document.querySelector("[visual-wrap='2d']"),
        C = d.querySelector("[service-item='interactive']"),
        k = d.querySelector("[service-header='interactive']"),
        P = d.querySelector("[service-video-trigger='interactive']"),
        A = document.querySelector("[visual-wrap='interactive']"),
        O = document.querySelectorAll("[service-list-item='wrapper']"),
        L = document.querySelectorAll("[service-list-item='3d']"),
        z = document.querySelectorAll("[service-list-icon='3d']");
      document.querySelectorAll("[service-list-text='3d']");
      const D = document.querySelectorAll("[service-list-item='2d']"),
        I = document.querySelectorAll("[service-list-icon='2d']");
      document.querySelectorAll("[service-list-text='2d']");
      const q = document.querySelectorAll("[service-list-item='interactive']"),
        $ = document.querySelectorAll("[service-list-icon='interactive']");
      document.querySelectorAll("[service-list-text='interactive']");
      const R = window.innerWidth <= 768 ? "+=200%" : "+=400%",
        X = Pn.timeline({
          scrollTrigger: {
            trigger: d,
            start: "top top",
            end: R,
            pin: !1,
            markers: !1,
            scrub: 1.2,
          },
        });
      function N(e) {
        [w, E, C].forEach((e) => {
          e && e.classList.remove("is-active");
        }),
          e && e.classList.add("is-active");
      }
      X.fromTo(
        h,
        { rotate: 145, scale: 1.8 },
        { rotate: 0, scale: 1.2, duration: 1.8, ease: "power2.out" },
        `${e}%`
      ),
        X.to(v, { opacity: 0, y: -20, duration: 1, ease: "power2.in" }, `${t}`),
        X.to(
          y,
          { opacity: 0, y: -20, duration: 1.8, ease: "power2.in" },
          `${t}`
        ),
        X.fromTo(
          m,
          { x: "160", opacity: 0, scale: 0.5, rotate: 10 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.6,
            rotate: 0,
            ease: "power2.out",
          },
          `${r}`
        ),
        X.fromTo(
          g,
          { x: "160", opacity: 0, scale: 0.5, rotate: 10 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.8,
            rotate: 0,
            ease: "power2.out",
          },
          `${r + 0.2}`
        ),
        X.fromTo(
          f,
          { scale: 0.6, rotate: 145, opacity: 0 },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 1.8,
            ease: "power2.out",
          },
          `${i}`
        ),
        X.fromTo(
          [w, b, x],
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
            onStart: () => N(w),
          },
          `${s}`
        ),
        X.to(
          u,
          {
            opacity: 0,
            scale: 1.1,
            filter: "blur(30px)",
            duration: 1,
            ease: "power2.out",
          },
          `${s}`
        ),
        X.fromTo(
          S,
          { opacity: 0, scale: 1.1, filter: "blur(30px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
          },
          `${s}`
        ),
        X.fromTo(
          O,
          { opacity: 0, filter: "blur(10px)", scale: 0.9 },
          {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
          },
          `${s}`
        ),
        X.fromTo(
          L,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s}`
        ),
        X.fromTo(
          z,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s}`
        ),
        X.to(
          [w, b, x],
          {
            scale: 0.9,
            pointerEvents: "none",
            opacity: 0,
            filter: "blur(30px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.in",
          },
          `${n}`
        ),
        X.to(
          S,
          {
            opacity: 0,
            scale: 1.1,
            filter: "blur(30px)",
            duration: 0.8,
            ease: "power2.in",
          },
          `${n}`
        ),
        X.to(L, { opacity: 0.5, duration: 0.8, ease: "power2.in" }, `${n}`),
        X.to(z, { opacity: 0, duration: 0.8, ease: "power2.in" }, `${n}`),
        X.fromTo(
          [E, _, T],
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
            onStart: () => N(E),
          },
          `${a}`
        ),
        X.fromTo(
          M,
          { opacity: 0, scale: 1.1, filter: "blur(30px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
          },
          `${a}`
        ),
        X.fromTo(
          D,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${a}`
        ),
        X.fromTo(
          I,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${a}`
        ),
        X.to(h, { rotate: -90, duration: 1.8, ease: "power2.out" }, `${a}`),
        X.to(
          [E, _, T],
          {
            scale: 0.9,
            pointerEvents: "none",
            opacity: 0,
            filter: "blur(30px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.in",
          },
          `${o}`
        ),
        X.to(
          M,
          {
            opacity: 0,
            scale: 1.1,
            filter: "blur(30px)",
            duration: 0.8,
            ease: "power2.in",
          },
          `${o}`
        ),
        X.to(D, { opacity: 0.5, duration: 0.8, ease: "power2.in" }, `${o}`),
        X.to(I, { opacity: 0, duration: 0.8, ease: "power2.in" }, `${o}`),
        X.fromTo(
          [C, k, P],
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
            onStart: () => N(C),
          },
          `${l}`
        ),
        X.fromTo(
          A,
          { opacity: 0, scale: 1.1, filter: "blur(30px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
          },
          `${l}`
        ),
        X.fromTo(
          q,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${c}`
        ),
        X.fromTo(
          $,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${c}`
        );
    })();
  };
  function Jl(e, t, r) {
    return Math.max(e, Math.min(t, r));
  }
  var ec = class {
    constructor() {
      X(this, "isRunning", !1),
        X(this, "value", 0),
        X(this, "from", 0),
        X(this, "to", 0),
        X(this, "currentTime", 0),
        X(this, "lerp"),
        X(this, "duration"),
        X(this, "easing"),
        X(this, "onUpdate");
    }
    advance(e) {
      var t;
      if (!this.isRunning) return;
      let r = !1;
      if (this.duration && this.easing) {
        this.currentTime += e;
        const t = Jl(0, this.currentTime / this.duration, 1);
        r = t >= 1;
        const i = r ? 1 : this.easing(t);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = (function (e, t, r, i) {
              return (function (e, t, r) {
                return (1 - r) * e + r * t;
              })(e, t, 1 - Math.exp(-r * i));
            })(this.value, this.to, 60 * this.lerp, e)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (r = !0)))
          : ((this.value = this.to), (r = !0));
      r && this.stop(),
        null == (t = this.onUpdate) || t.call(this, this.value, r);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(e, t, { lerp: r, duration: i, easing: s, onStart: n, onUpdate: a }) {
      (this.from = this.value = e),
        (this.to = t),
        (this.lerp = r),
        (this.duration = i),
        (this.easing = s),
        (this.currentTime = 0),
        (this.isRunning = !0),
        null == n || n(),
        (this.onUpdate = a);
    }
  };
  var tc = class {
      constructor(e, t, { autoResize: r = !0, debounce: i = 250 } = {}) {
        X(this, "width", 0),
          X(this, "height", 0),
          X(this, "scrollHeight", 0),
          X(this, "scrollWidth", 0),
          X(this, "debouncedResize"),
          X(this, "wrapperResizeObserver"),
          X(this, "contentResizeObserver"),
          X(this, "resize", () => {
            this.onWrapperResize(), this.onContentResize();
          }),
          X(this, "onWrapperResize", () => {
            this.wrapper instanceof Window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          }),
          X(this, "onContentResize", () => {
            this.wrapper instanceof Window
              ? ((this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth))
              : ((this.scrollHeight = this.wrapper.scrollHeight),
                (this.scrollWidth = this.wrapper.scrollWidth));
          }),
          (this.wrapper = e),
          (this.content = t),
          r &&
            ((this.debouncedResize = (function (e, t) {
              let r;
              return function (...i) {
                let s = this;
                clearTimeout(r),
                  (r = setTimeout(() => {
                    (r = void 0), e.apply(s, i);
                  }, t));
              };
            })(this.resize, i)),
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
        var e, t;
        null == (e = this.wrapperResizeObserver) || e.disconnect(),
          null == (t = this.contentResizeObserver) || t.disconnect(),
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
    rc = class {
      constructor() {
        X(this, "events", {});
      }
      emit(e, ...t) {
        var r;
        let i = this.events[e] || [];
        for (let e = 0, s = i.length; e < s; e++)
          null == (r = i[e]) || r.call(i, ...t);
      }
      on(e, t) {
        var r;
        return (
          (null != (r = this.events[e]) && r.push(t)) || (this.events[e] = [t]),
          () => {
            var r;
            this.events[e] =
              null == (r = this.events[e]) ? void 0 : r.filter((e) => t !== e);
          }
        );
      }
      off(e, t) {
        var r;
        this.events[e] =
          null == (r = this.events[e]) ? void 0 : r.filter((e) => t !== e);
      }
      destroy() {
        this.events = {};
      }
    },
    ic = 100 / 6,
    sc = { passive: !1 },
    nc = class {
      constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        X(this, "touchStart", { x: 0, y: 0 }),
          X(this, "lastDelta", { x: 0, y: 0 }),
          X(this, "window", { width: 0, height: 0 }),
          X(this, "emitter", new rc()),
          X(this, "onTouchStart", (e) => {
            const { clientX: t, clientY: r } = e.targetTouches
              ? e.targetTouches[0]
              : e;
            (this.touchStart.x = t),
              (this.touchStart.y = r),
              (this.lastDelta = { x: 0, y: 0 }),
              this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
          }),
          X(this, "onTouchMove", (e) => {
            const { clientX: t, clientY: r } = e.targetTouches
                ? e.targetTouches[0]
                : e,
              i = -(t - this.touchStart.x) * this.options.touchMultiplier,
              s = -(r - this.touchStart.y) * this.options.touchMultiplier;
            (this.touchStart.x = t),
              (this.touchStart.y = r),
              (this.lastDelta = { x: i, y: s }),
              this.emitter.emit("scroll", { deltaX: i, deltaY: s, event: e });
          }),
          X(this, "onTouchEnd", (e) => {
            this.emitter.emit("scroll", {
              deltaX: this.lastDelta.x,
              deltaY: this.lastDelta.y,
              event: e,
            });
          }),
          X(this, "onWheel", (e) => {
            let { deltaX: t, deltaY: r, deltaMode: i } = e;
            (t *= 1 === i ? ic : 2 === i ? this.window.width : 1),
              (r *= 1 === i ? ic : 2 === i ? this.window.height : 1),
              (t *= this.options.wheelMultiplier),
              (r *= this.options.wheelMultiplier),
              this.emitter.emit("scroll", { deltaX: t, deltaY: r, event: e });
          }),
          X(this, "onWindowResize", () => {
            this.window = {
              width: window.innerWidth,
              height: window.innerHeight,
            };
          }),
          (this.element = e),
          (this.options = t),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, sc),
          this.element.addEventListener("touchstart", this.onTouchStart, sc),
          this.element.addEventListener("touchmove", this.onTouchMove, sc),
          this.element.addEventListener("touchend", this.onTouchEnd, sc);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, sc),
          this.element.removeEventListener("touchstart", this.onTouchStart, sc),
          this.element.removeEventListener("touchmove", this.onTouchMove, sc),
          this.element.removeEventListener("touchend", this.onTouchEnd, sc);
      }
    },
    ac = class {
      constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        eventsTarget: r = e,
        smoothWheel: i = !0,
        syncTouch: s = !1,
        syncTouchLerp: n = 0.075,
        touchInertiaMultiplier: a = 35,
        duration: o,
        easing: l = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
        lerp: c = 0.1,
        infinite: d = !1,
        orientation: u = "vertical",
        gestureOrientation: p = "vertical",
        touchMultiplier: h = 1,
        wheelMultiplier: f = 1,
        autoResize: m = !0,
        prevent: g,
        virtualScroll: v,
        overscroll: y = !0,
        autoRaf: w = !1,
        anchors: b = !1,
        __experimental__naiveDimensions: x = !1,
      } = {}) {
        X(this, "_isScrolling", !1),
          X(this, "_isStopped", !1),
          X(this, "_isLocked", !1),
          X(this, "_preventNextNativeScrollEvent", !1),
          X(this, "_resetVelocityTimeout", null),
          X(this, "__rafID", null),
          X(this, "isTouching"),
          X(this, "time", 0),
          X(this, "userData", {}),
          X(this, "lastVelocity", 0),
          X(this, "velocity", 0),
          X(this, "direction", 0),
          X(this, "options"),
          X(this, "targetScroll"),
          X(this, "animatedScroll"),
          X(this, "animate", new ec()),
          X(this, "emitter", new rc()),
          X(this, "dimensions"),
          X(this, "virtualScroll"),
          X(this, "onScrollEnd", (e) => {
            e instanceof CustomEvent ||
              (("smooth" === this.isScrolling || !1 === this.isScrolling) &&
                e.stopPropagation());
          }),
          X(this, "dispatchScrollendEvent", () => {
            this.options.wrapper.dispatchEvent(
              new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                detail: { lenisScrollEnd: !0 },
              })
            );
          }),
          X(this, "onClick", (e) => {
            const t = e.composedPath().find((e) => {
              var t, r, i;
              return (
                e instanceof HTMLAnchorElement &&
                ((null == (t = e.getAttribute("href"))
                  ? void 0
                  : t.startsWith("#")) ||
                  (null == (r = e.getAttribute("href"))
                    ? void 0
                    : r.startsWith("/#")) ||
                  (null == (i = e.getAttribute("href"))
                    ? void 0
                    : i.startsWith("./#")))
              );
            });
            if (t) {
              const e = t.getAttribute("href");
              if (e) {
                const t =
                  "object" == typeof this.options.anchors &&
                  this.options.anchors
                    ? this.options.anchors
                    : void 0;
                this.scrollTo(`#${e.split("#")[1]}`, t);
              }
            }
          }),
          X(this, "onPointerDown", (e) => {
            1 === e.button && this.reset();
          }),
          X(this, "onVirtualScroll", (e) => {
            if (
              "function" == typeof this.options.virtualScroll &&
              !1 === this.options.virtualScroll(e)
            )
              return;
            const { deltaX: t, deltaY: r, event: i } = e;
            if (
              (this.emitter.emit("virtual-scroll", {
                deltaX: t,
                deltaY: r,
                event: i,
              }),
              i.ctrlKey || i.lenisStopPropagation)
            )
              return;
            const s = i.type.includes("touch"),
              n = i.type.includes("wheel");
            this.isTouching = "touchstart" === i.type || "touchmove" === i.type;
            const a = 0 === t && 0 === r;
            if (
              this.options.syncTouch &&
              s &&
              "touchstart" === i.type &&
              a &&
              !this.isStopped &&
              !this.isLocked
            )
              return void this.reset();
            const o =
              ("vertical" === this.options.gestureOrientation && 0 === r) ||
              ("horizontal" === this.options.gestureOrientation && 0 === t);
            if (a || o) return;
            let l = i.composedPath();
            l = l.slice(0, l.indexOf(this.rootElement));
            const c = this.options.prevent;
            if (
              l.find((e) => {
                var t, r, i;
                return (
                  e instanceof HTMLElement &&
                  (("function" == typeof c && (null == c ? void 0 : c(e))) ||
                    (null == (t = e.hasAttribute)
                      ? void 0
                      : t.call(e, "data-lenis-prevent")) ||
                    (s &&
                      (null == (r = e.hasAttribute)
                        ? void 0
                        : r.call(e, "data-lenis-prevent-touch"))) ||
                    (n &&
                      (null == (i = e.hasAttribute)
                        ? void 0
                        : i.call(e, "data-lenis-prevent-wheel"))))
                );
              })
            )
              return;
            if (this.isStopped || this.isLocked) return void i.preventDefault();
            if (
              !(
                (this.options.syncTouch && s) ||
                (this.options.smoothWheel && n)
              )
            )
              return (
                (this.isScrolling = "native"),
                this.animate.stop(),
                void (i.lenisStopPropagation = !0)
              );
            let d = r;
            "both" === this.options.gestureOrientation
              ? (d = Math.abs(r) > Math.abs(t) ? r : t)
              : "horizontal" === this.options.gestureOrientation && (d = t),
              (!this.options.overscroll ||
                this.options.infinite ||
                (this.options.wrapper !== window &&
                  ((this.animatedScroll > 0 &&
                    this.animatedScroll < this.limit) ||
                    (0 === this.animatedScroll && r > 0) ||
                    (this.animatedScroll === this.limit && r < 0)))) &&
                (i.lenisStopPropagation = !0),
              i.preventDefault();
            const u = s && this.options.syncTouch,
              p = s && "touchend" === i.type && Math.abs(d) > 5;
            p && (d = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(
                this.targetScroll + d,
                ea(
                  { programmatic: !1 },
                  u
                    ? { lerp: p ? this.options.syncTouchLerp : 1 }
                    : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing,
                      }
                )
              );
          }),
          X(this, "onNativeScroll", () => {
            if (
              (null !== this._resetVelocityTimeout &&
                (clearTimeout(this._resetVelocityTimeout),
                (this._resetVelocityTimeout = null)),
              this._preventNextNativeScrollEvent)
            )
              this._preventNextNativeScrollEvent = !1;
            else if (!1 === this.isScrolling || "native" === this.isScrolling) {
              const e = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.lastVelocity = this.velocity),
                (this.velocity = this.animatedScroll - e),
                (this.direction = Math.sign(this.animatedScroll - e)),
                this.isStopped || (this.isScrolling = "native"),
                this.emit(),
                0 !== this.velocity &&
                  (this._resetVelocityTimeout = setTimeout(() => {
                    (this.lastVelocity = this.velocity),
                      (this.velocity = 0),
                      (this.isScrolling = !1),
                      this.emit();
                  }, 400));
            }
          }),
          X(this, "raf", (e) => {
            const t = e - (this.time || e);
            (this.time = e),
              this.animate.advance(0.001 * t),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          }),
          (window.lenisVersion = "1.2.3"),
          (!e || e === document.documentElement) && (e = window),
          (this.options = {
            wrapper: e,
            content: t,
            eventsTarget: r,
            smoothWheel: i,
            syncTouch: s,
            syncTouchLerp: n,
            touchInertiaMultiplier: a,
            duration: o,
            easing: l,
            lerp: c,
            infinite: d,
            gestureOrientation: p,
            orientation: u,
            touchMultiplier: h,
            wheelMultiplier: f,
            autoResize: m,
            prevent: g,
            virtualScroll: v,
            overscroll: y,
            autoRaf: w,
            anchors: b,
            __experimental__naiveDimensions: x,
          }),
          (this.dimensions = new tc(e, t, { autoResize: m })),
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
          (this.virtualScroll = new nc(r, {
            touchMultiplier: h,
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
          immediate: r = !1,
          lock: i = !1,
          duration: s = this.options.duration,
          easing: n = this.options.easing,
          lerp: a = this.options.lerp,
          onStart: o,
          onComplete: l,
          force: c = !1,
          programmatic: d = !0,
          userData: u,
        } = {}
      ) {
        if ((!this.isStopped && !this.isLocked) || c) {
          if ("string" == typeof e && ["top", "left", "start"].includes(e))
            e = 0;
          else if (
            "string" == typeof e &&
            ["bottom", "right", "end"].includes(e)
          )
            e = this.limit;
          else {
            let r;
            if (
              ("string" == typeof e
                ? (r = document.querySelector(e))
                : e instanceof HTMLElement &&
                  null != e &&
                  e.nodeType &&
                  (r = e),
              r)
            ) {
              if (this.options.wrapper !== window) {
                const e = this.rootElement.getBoundingClientRect();
                t -= this.isHorizontal ? e.left : e.top;
              }
              const i = r.getBoundingClientRect();
              e = (this.isHorizontal ? i.left : i.top) + this.animatedScroll;
            }
          }
          if ("number" == typeof e) {
            if (
              ((e += t),
              (e = Math.round(e)),
              this.options.infinite
                ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = Jl(0, e, this.limit)),
              e === this.targetScroll)
            )
              return null == o || o(this), void (null == l || l(this));
            if (((this.userData = null != u ? u : {}), r))
              return (
                (this.animatedScroll = this.targetScroll = e),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                null == l || l(this),
                (this.userData = {}),
                void requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                })
              );
            d || (this.targetScroll = e),
              this.animate.fromTo(this.animatedScroll, e, {
                duration: s,
                easing: n,
                lerp: a,
                onStart: () => {
                  i && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    null == o || o(this);
                },
                onUpdate: (e, t) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = e - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = e),
                    this.setScroll(this.scroll),
                    d && (this.targetScroll = e),
                    t || this.emit(),
                    t &&
                      (this.reset(),
                      this.emit(),
                      null == l || l(this),
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
        return "horizontal" === this.options.orientation;
      }
      get actualScroll() {
        var e, t;
        const r = this.options.wrapper;
        return this.isHorizontal
          ? null != (e = r.scrollX)
            ? e
            : r.scrollLeft
          : null != (t = r.scrollY)
          ? t
          : r.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? (function (e, t) {
              return ((e % t) + t) % t;
            })(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
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
        return "smooth" === this.isScrolling;
      }
      get className() {
        let e = "lenis";
        return (
          this.isStopped && (e += " lenis-stopped"),
          this.isLocked && (e += " lenis-locked"),
          this.isScrolling && (e += " lenis-scrolling"),
          "smooth" === this.isScrolling && (e += " lenis-smooth"),
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
    };
  let oc;
  Pn.registerPlugin(Rl);
  const lc = () => {
      (oc = new ac({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (e) => Math.min(1, 1.001 - Math.pow(2, -12 * e)),
        autoRaf: !0,
      })),
        oc.on("scroll", Rl.update),
        Pn.ticker.add((e) => {
          oc.raf(1e3 * e);
        }),
        Pn.ticker.lagSmoothing(0);
    },
    cc = () => oc;
  Pn.registerPlugin(Rl);
  const dc = () => {
      (() => {
        if (
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        )
          return;
        const e = document.querySelectorAll('[hero-parallax="visual"]'),
          t = document.querySelector('[hero-parallax="header"]');
        if (!e.length && !t) return;
        const r = null == cc ? void 0 : cc();
        if (
          (Rl.defaults({ scroller: r ? r.wrapper : void 0 }),
          e.forEach((e) => {
            const t = parseFloat(e.getAttribute("parallax-speed")) || 0.6;
            Pn.fromTo(
              e,
              { yPercent: 0, scale: 1 },
              {
                yPercent: 100 * -t,
                scale: 1.2,
                ease: "none",
                scrollTrigger: {
                  trigger: e.parentElement,
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
          Pn.fromTo(
            t,
            { yPercent: 0, scale: 1 },
            {
              yPercent: 100 * -r,
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
      })();
    },
    uc = () => {
      const e = document.querySelectorAll("[video-modal-trigger]");
      let t = null;
      document.querySelector("[data-vimeo-control='play']"),
        document.querySelector("[data-vimeo-control='pause']");
      const r = (e, t) => {
        Pn.to(
          e,
          {
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
          }[t]
        );
      };
      e.forEach((e) => {
        const i = e.getAttribute("video-modal-trigger"),
          s = document.querySelector(`[video-modal-target="${i}"]`),
          n = document.querySelector(`[video-modal-close="${i}"]`);
        if (!s || !n)
          return void console.error(
            `Missing target or close element for modal ID: ${i}`
          );
        Pn.set(s, {
          clipPath: "inset(50% round 16px)",
          pointerEvents: "none",
          scale: 1.2,
          filter: "blur(5px)",
        });
        const a = () => {
          if ((r(s, "close"), t === s)) {
            t = null;
            const e = s.querySelector("[data-vimeo-control='pause']");
            e && e.click();
          }
        };
        e.addEventListener("click", () => {
          const e = cc();
          t === s
            ? (a(), e.start())
            : ((() => {
                t && t !== s && r(t, "close"), r(s, "open"), (t = s);
                const e = s.querySelector("[data-vimeo-control='play']");
                e && e.click();
              })(),
              e.stop());
        }),
          n.addEventListener("click", () => {
            t === s && (a(), cc().start());
          });
      }),
        document.addEventListener("keydown", (e) => {
          "Escape" === e.key && t && (r(t, "close"), cc().start(), (t = null));
        });
    };
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let pc,
    hc,
    fc,
    mc = "undefined" != typeof Intl ? new Intl.Segmenter() : 0,
    gc = (e) =>
      "string" == typeof e
        ? gc(document.querySelectorAll(e))
        : "length" in e
        ? Array.from(e)
        : [e],
    vc = (e) => gc(e).filter((e) => e instanceof HTMLElement),
    yc = [],
    wc = function () {},
    bc = /\s+/g,
    xc = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    Sc = { left: 0, top: 0, width: 0, height: 0 },
    Ec = (e, t) => {
      if (t) {
        let r,
          i,
          s,
          n,
          a = new Set(e.join("").match(t) || yc),
          o = e.length;
        if (a.size)
          for (; --o > -1; )
            for (s of ((i = e[o]), a))
              if (s.startsWith(i) && s.length > i.length) {
                for (
                  r = 0, n = i;
                  s.startsWith((n += e[o + ++r])) && n.length < s.length;

                );
                if (r && n.length === s.length) {
                  (e[o] = s), e.splice(o + 1, r);
                  break;
                }
              }
      }
      return e;
    },
    _c = (e) =>
      "inline" === window.getComputedStyle(e).display &&
      (e.style.display = "inline-block"),
    Tc = (e, t, r) =>
      t.insertBefore("string" == typeof e ? document.createTextNode(e) : e, r),
    Mc = (e, t, r) => {
      let i = t[e + "sClass"] || "",
        { tag: s = "div", aria: n = "auto", propIndex: a = !1 } = t,
        o = "line" === e ? "block" : "inline-block",
        l = i.indexOf("++") > -1,
        c = (t) => {
          let c = document.createElement(s),
            d = r.length + 1;
          return (
            i && (c.className = i + (l ? " " + i + d : "")),
            a && c.style.setProperty("--" + e, d + ""),
            "none" !== n && c.setAttribute("aria-hidden", "true"),
            "span" !== s &&
              ((c.style.position = "relative"), (c.style.display = o)),
            (c.textContent = t),
            r.push(c),
            c
          );
        };
      return l && (i = i.replace("++", "")), (c.collection = r), c;
    },
    Cc = (e, t, r, i, s, n, a, o, l, c) => {
      var d;
      let u,
        p,
        h,
        f,
        m,
        g,
        v,
        y,
        w,
        b,
        x,
        S,
        E,
        _,
        T,
        M,
        C,
        k,
        P = Array.from(e.childNodes),
        A = 0,
        { wordDelimiter: O, reduceWhiteSpace: L = !0, prepareText: z } = t,
        D = e.getBoundingClientRect(),
        I = D,
        q =
          !L && "pre" === window.getComputedStyle(e).whiteSpace.substring(0, 3),
        $ = 0,
        R = r.collection;
      for (
        "object" == typeof O
          ? ((h = O.delimiter || O), (p = O.replaceWith || ""))
          : (p = "" === O ? "" : O || " "),
          u = " " !== p;
        A < P.length;
        A++
      )
        if (((f = P[A]), 3 === f.nodeType)) {
          for (
            T = f.textContent || "",
              L
                ? (T = T.replace(bc, " "))
                : q && (T = T.replace(/\n/g, p + "\n")),
              z && (T = z(T, e)),
              f.textContent = T,
              m = p || h ? T.split(h || p) : T.match(o) || yc,
              C = m[m.length - 1],
              y = u ? " " === C.slice(-1) : !C,
              C || m.pop(),
              I = D,
              v = u ? " " === m[0].charAt(0) : !m[0],
              v && Tc(" ", e, f),
              m[0] || m.shift(),
              Ec(m, l),
              (n && c) || (f.textContent = ""),
              w = 1;
            w <= m.length;
            w++
          )
            if (
              ((M = m[w - 1]),
              !L &&
                q &&
                "\n" === M.charAt(0) &&
                (null == (d = f.previousSibling) || d.remove(),
                Tc(document.createElement("br"), e, f),
                (M = M.slice(1))),
              L || "" !== M)
            )
              if (" " === M) e.insertBefore(document.createTextNode(" "), f);
              else {
                if (
                  (u && " " === M.charAt(0) && Tc(" ", e, f),
                  $ && 1 === w && !v && R.indexOf($.parentNode) > -1
                    ? ((g = R[R.length - 1]),
                      g.appendChild(document.createTextNode(i ? "" : M)))
                    : ((g = r(i ? "" : M)),
                      Tc(g, e, f),
                      $ && 1 === w && !v && g.insertBefore($, g.firstChild)),
                  i)
                )
                  for (
                    x = mc
                      ? Ec(
                          [...mc.segment(M)].map((e) => e.segment),
                          l
                        )
                      : M.match(o) || yc,
                      k = 0;
                    k < x.length;
                    k++
                  )
                    g.appendChild(
                      " " === x[k] ? document.createTextNode(" ") : i(x[k])
                    );
                if (n && c) {
                  if (
                    ((T = f.textContent = T.substring(M.length + 1, T.length)),
                    (b = g.getBoundingClientRect()),
                    b.top > I.top && b.left <= I.left)
                  ) {
                    for (S = e.cloneNode(), E = e.childNodes[0]; E && E !== g; )
                      (_ = E), (E = E.nextSibling), S.appendChild(_);
                    e.parentNode.insertBefore(S, e), s && _c(S);
                  }
                  I = b;
                }
                (w < m.length || y) &&
                  Tc(
                    w >= m.length
                      ? " "
                      : u && " " === M.slice(-1)
                      ? " " + p
                      : p,
                    e,
                    f
                  );
              }
            else Tc(p, e, f);
          e.removeChild(f), ($ = 0);
        } else
          1 === f.nodeType &&
            (a && a.indexOf(f) > -1
              ? (R.indexOf(f.previousSibling) > -1 &&
                  R[R.length - 1].appendChild(f),
                ($ = f))
              : (Cc(f, t, r, i, s, n, a, o, l, !0), ($ = 0)),
            s && _c(f));
    };
  const kc = class e {
    constructor(e, t) {
      (this.isSplit = !1),
        fc || Pc.register(window.gsap),
        (this.elements = vc(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = t),
        (this._split = () => this.isSplit && this.split(this.vars));
      let r,
        i = [],
        s = () => {
          let e,
            t = i.length;
          for (; t--; ) {
            e = i[t];
            let r = e.element.offsetWidth;
            if (r !== e.width) return (e.width = r), void this._split();
          }
        };
      (this._data = {
        orig: i,
        obs:
          "undefined" != typeof ResizeObserver &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(s, 200));
          }),
      }),
        wc(this),
        this.split(t);
    }
    split(e) {
      this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
      let t,
        {
          type: r = "chars,words,lines",
          aria: i = "auto",
          deepSlice: s = !0,
          smartWrap: n,
          onSplit: a,
          autoSplit: o = !1,
          specialChars: l,
          mask: c,
        } = this.vars,
        d = r.indexOf("lines") > -1,
        u = r.indexOf("chars") > -1,
        p = r.indexOf("words") > -1,
        h = u && !p && !d,
        f =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        m = f ? new RegExp(f.source + "|" + xc.source, "gu") : xc,
        g = !!e.ignore && vc(e.ignore),
        { orig: v, animTime: y, obs: w } = this._data;
      return (
        (u || p || d) &&
          (this.elements.forEach((t, r) => {
            (v[r] = {
              element: t,
              html: t.innerHTML,
              ariaL: t.getAttribute("aria-label"),
              ariaH: t.getAttribute("aria-hidden"),
            }),
              "auto" === i
                ? t.setAttribute("aria-label", (t.textContent || "").trim())
                : "hidden" === i && t.setAttribute("aria-hidden", "true");
            let a,
              o,
              l,
              c,
              y = [],
              w = [],
              b = [],
              x = u ? Mc("char", e, y) : null,
              S = Mc("word", e, w);
            if ((Cc(t, e, S, x, h, s && (d || h), g, m, f, !1), d)) {
              let r,
                i = gc(t.childNodes),
                s = ((e, t, r, i) => {
                  let s = Mc("line", r, i),
                    n = window.getComputedStyle(e).textAlign || "left";
                  return (r, i) => {
                    let a = s("");
                    for (
                      a.style.textAlign = n, e.insertBefore(a, t[r]);
                      r < i;
                      r++
                    )
                      a.appendChild(t[r]);
                    a.normalize();
                  };
                })(t, i, e, b),
                n = [],
                o = 0,
                l = i.map((e) =>
                  1 === e.nodeType ? e.getBoundingClientRect() : Sc
                ),
                c = Sc;
              for (a = 0; a < i.length; a++)
                (r = i[a]),
                  1 === r.nodeType &&
                    ("BR" === r.nodeName
                      ? (n.push(r), s(o, a + 1), (o = a + 1), (c = l[o]))
                      : (a &&
                          l[a].top > c.top &&
                          l[a].left <= c.left &&
                          (s(o, a), (o = a)),
                        (c = l[a])));
              o < a && s(o, a),
                n.forEach((e) => {
                  var t;
                  return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
                });
            }
            if (!p) {
              for (a = 0; a < w.length; a++)
                if (
                  ((o = w[a]),
                  u || !o.nextSibling || 3 !== o.nextSibling.nodeType)
                )
                  if (n && !d) {
                    for (
                      l = document.createElement("span"),
                        l.style.whiteSpace = "nowrap";
                      o.firstChild;

                    )
                      l.appendChild(o.firstChild);
                    o.replaceWith(l);
                  } else o.replaceWith(...o.childNodes);
                else
                  (c = o.nextSibling),
                    c &&
                      3 === c.nodeType &&
                      ((c.textContent =
                        (o.textContent || "") + (c.textContent || "")),
                      o.remove());
              (w.length = 0), t.normalize();
            }
            this.lines.push(...b), this.words.push(...w), this.chars.push(...y);
          }),
          c &&
            this[c] &&
            this.masks.push(
              ...this[c].map((e) => {
                let t = e.cloneNode();
                return (
                  e.replaceWith(t),
                  t.appendChild(e),
                  e.className &&
                    (t.className = e.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (t.style.overflow = "clip"),
                  t
                );
              })
            )),
        (this.isSplit = !0),
        hc &&
          (o
            ? hc.addEventListener("loadingdone", this._split)
            : "loading" === hc.status &&
              console.warn("SplitText called before fonts loaded")),
        (t = a && a(this)) &&
          t.totalTime &&
          (this._data.anim = y ? t.totalTime(y) : t),
        d &&
          o &&
          this.elements.forEach((e, t) => {
            (v[t].width = e.offsetWidth), w && w.observe(e);
          }),
        this
      );
    }
    revert() {
      var e, t;
      let { orig: r, anim: i, obs: s } = this._data;
      return (
        s && s.disconnect(),
        r.forEach(({ element: e, html: t, ariaL: r, ariaH: i }) => {
          (e.innerHTML = t),
            r
              ? e.setAttribute("aria-label", r)
              : e.removeAttribute("aria-label"),
            i
              ? e.setAttribute("aria-hidden", i)
              : e.removeAttribute("aria-hidden");
        }),
        (this.chars.length =
          this.words.length =
          this.lines.length =
          r.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        null == hc || hc.removeEventListener("loadingdone", this._split),
        i && ((this._data.animTime = i.totalTime()), i.revert()),
        null == (t = (e = this.vars).onRevert) || t.call(e, this),
        this
      );
    }
    static create(t, r) {
      return new e(t, r);
    }
    static register(e) {
      (pc = pc || e || window.gsap),
        pc && ((gc = pc.utils.toArray), (wc = pc.core.context || wc)),
        !fc && window.innerWidth > 0 && ((hc = document.fonts), (fc = !0));
    }
  };
  kc.version = "3.13.0";
  let Pc = kc;
  Pn.registerPlugin(Rl, Pc);
  const Ac = () => {
      document.querySelectorAll("[list-enter='wrap']").forEach((e) => {
        e.querySelectorAll("[list-enter='item']").forEach((e) => {
          const t = e.querySelector("[list-enter='icon']"),
            r = e.querySelector("[list-enter='text']"),
            i = e.querySelector("[list-enter='line']"),
            s = new Pc(r, { type: "lines", linesClass: "split-line" });
          s.lines.forEach((e) => {
            const t = document.createElement("div");
            t.classList.add("line-wrapper"),
              (t.style.overflow = "hidden"),
              e.parentNode.insertBefore(t, e),
              t.appendChild(e);
          }),
            e.querySelectorAll(".line-wrapper"),
            Pn.set(i, { transformOrigin: "left" }),
            Pn.timeline({
              scrollTrigger: {
                trigger: e,
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play none none reverse",
                markers: !1,
              },
            })
              .from(t, {
                opacity: 0,
                scale: 0,
                rotate: 90,
                duration: 3,
                ease: "expo.out",
              })
              .from(
                s.lines,
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
                i,
                { scaleX: 0, duration: 3.4, ease: "expo.out", stagger: 0.05 },
                "<"
              );
        });
      });
    },
    Oc = () => {
      document.querySelectorAll("[hero-text-swap]").forEach((e) => {
        const t = e.textContent.trim(),
          r = e.getAttribute("data-alt");
        if (!r) return;
        const i = [t, ...r.split("|").map((e) => e.trim())],
          s = ((e) => {
            if (0 === e.length) return "";
            let t = "";
            const r = Math.min(...e.map((e) => e.length));
            for (let i = 0; i < r; i++) {
              const r = e[0][i];
              if (!e.every((e) => e[i] === r)) break;
              t += r;
            }
            const i = t.lastIndexOf(" ");
            return i > 0 ? t.substring(0, i + 1) : "";
          })(i),
          n = i.map((e) => e.replace(s, "").trim()),
          a = document.createElement("span");
        (a.textContent = s), (a.style.display = "inline");
        const o = document.createElement("span");
        (o.style.display = "inline-block"),
          (o.style.position = "relative"),
          (o.style.overflow = "hidden"),
          (o.style.verticalAlign = "baseline");
        const l = n.map((e, t) => {
          const r = document.createElement("span");
          return (
            (r.textContent = e),
            (r.style.display = "block"),
            (r.style.position = "absolute"),
            (r.style.top = "0"),
            (r.style.left = "0"),
            (r.style.whiteSpace = "nowrap"),
            (r.style.width = "100%"),
            0 === t
              ? ((r.style.opacity = "1"),
                (r.style.transform = "translateY(0%)"))
              : ((r.style.opacity = "0"),
                (r.style.transform = "translateY(100%)")),
            r
          );
        });
        (e.innerHTML = ""),
          e.appendChild(a),
          e.appendChild(o),
          l.forEach((e) => o.appendChild(e));
        let c = 0;
        l.forEach((e) => {
          const t = e.style.position,
            r = e.style.opacity;
          (e.style.position = "relative"),
            (e.style.opacity = "1"),
            (e.style.visibility = "visible");
          const i = e.offsetWidth;
          i > c && (c = i), (e.style.position = t), (e.style.opacity = r);
        }),
          (o.style.width = c + "px"),
          (o.style.minWidth = c + "px"),
          (o.style.maxWidth = c + "px"),
          (o.style.height = l[0].offsetHeight + "px"),
          (o.style.top = l[0].offsetHeight / 3.8 + "px");
        let d = 0;
        const u = () => {
          const e = l[d],
            t = (d + 1) % l.length,
            r = l[t],
            i = Pn.timeline();
          i.to(e, { y: "-100%", opacity: 0, duration: 0.4, ease: "power2.in" }),
            i.fromTo(
              r,
              { y: "100%", opacity: 0 },
              {
                y: "0%",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => {
                  (d = t), Pn.set(e, { y: "100%" }), setTimeout(u, 3e3);
                },
              },
              "-=0.2"
            );
        };
        setTimeout(() => u(), 2e3);
      });
    };
  /*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Lc,
    zc,
    Dc,
    Ic,
    qc,
    $c,
    Rc,
    Xc,
    Nc = function () {
      return "undefined" != typeof window;
    },
    Bc = function () {
      return Lc || (Nc() && (Lc = window.gsap) && Lc.registerPlugin && Lc);
    },
    Fc = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Yc = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    Hc = function (e) {
      return Math.round(1e4 * e) / 1e4;
    },
    Wc = function (e) {
      return parseFloat(e) || 0;
    },
    Vc = function (e, t) {
      var r = Wc(e);
      return ~e.indexOf("%") ? (r / 100) * t : r;
    },
    Gc = function (e, t) {
      return Wc(e.getAttribute(t));
    },
    jc = Math.sqrt,
    Uc = function (e, t, r, i, s, n) {
      return jc(
        Math.pow((Wc(r) - Wc(e)) * s, 2) + Math.pow((Wc(i) - Wc(t)) * n, 2)
      );
    },
    Kc = function (e) {
      return console.warn(e);
    },
    Zc = function (e) {
      return "non-scaling-stroke" === e.getAttribute("vector-effect");
    },
    Qc = function (e) {
      if (!(e = zc(e)[0])) return 0;
      var t,
        r,
        i,
        s,
        n,
        a,
        o,
        l = e.tagName.toLowerCase(),
        c = e.style,
        d = 1,
        u = 1;
      Zc(e) &&
        ((u = e.getScreenCTM()),
        (d = jc(u.a * u.a + u.b * u.b)),
        (u = jc(u.d * u.d + u.c * u.c)));
      try {
        r = e.getBBox();
      } catch (e) {
        Kc(
          "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
        );
      }
      var p = r || { x: 0, y: 0, width: 0, height: 0 },
        h = p.x,
        f = p.y,
        m = p.width,
        g = p.height;
      if (
        ((!r || (!m && !g)) &&
          Yc[l] &&
          ((m = Gc(e, Yc[l][0])),
          (g = Gc(e, Yc[l][1])),
          "rect" !== l && "line" !== l && ((m *= 2), (g *= 2)),
          "line" === l &&
            ((h = Gc(e, "x1")),
            (f = Gc(e, "y1")),
            (m = Math.abs(m - h)),
            (g = Math.abs(g - f)))),
        "path" === l)
      )
        (s = c.strokeDasharray),
          (c.strokeDasharray = "none"),
          (t = e.getTotalLength() || 0),
          Hc(d) !== Hc(u) &&
            !$c &&
            ($c = 1) &&
            Kc(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (t *= (d + u) / 2),
          (c.strokeDasharray = s);
      else if ("rect" === l) t = 2 * m * d + 2 * g * u;
      else if ("line" === l) t = Uc(h, f, h + m, f + g, d, u);
      else if ("polyline" === l || "polygon" === l)
        for (
          i = e.getAttribute("points").match(Fc) || [],
            "polygon" === l && i.push(i[0], i[1]),
            t = 0,
            n = 2;
          n < i.length;
          n += 2
        )
          t += Uc(i[n - 2], i[n - 1], i[n], i[n + 1], d, u) || 0;
      else
        ("circle" === l || "ellipse" === l) &&
          ((a = (m / 2) * d),
          (o = (g / 2) * u),
          (t = Math.PI * (3 * (a + o) - jc((3 * a + o) * (a + 3 * o)))));
      return t || 0;
    },
    Jc = function (e, t) {
      if (!(e = zc(e)[0])) return [0, 0];
      t || (t = Qc(e) + 1);
      var r = Dc.getComputedStyle(e),
        i = r.strokeDasharray || "",
        s = Wc(r.strokeDashoffset),
        n = i.indexOf(",");
      return (
        n < 0 && (n = i.indexOf(" ")),
        (i = n < 0 ? t : Wc(i.substr(0, n))) > t && (i = t),
        [-s || 0, i - s || 0]
      );
    },
    ed = function () {
      Nc() &&
        ((Dc = window),
        (qc = Lc = Bc()),
        (zc = Lc.utils.toArray),
        (Rc = Lc.core.getStyleSaver),
        (Xc = Lc.core.reverting || function () {}),
        (Ic = -1 !== ((Dc.navigator || {}).userAgent || "").indexOf("Edge")));
    },
    td = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (e) {
        (Lc = e), ed();
      },
      init: function (e, t, r, i, s) {
        if (!e.getBBox) return !1;
        qc || ed();
        var n,
          a,
          o,
          l = Qc(e);
        return (
          (this.styles =
            Rc && Rc(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = r),
          (this._style = e.style),
          (this._target = e),
          t + "" == "true"
            ? (t = "0 100%")
            : t
            ? -1 === (t + "").indexOf(" ") && (t = "0 " + t)
            : (t = "0 0"),
          (a = (function (e, t, r) {
            var i,
              s,
              n = e.indexOf(" ");
            return (
              n < 0
                ? ((i = void 0 !== r ? r + "" : e), (s = e))
                : ((i = e.substr(0, n)), (s = e.substr(n + 1))),
              (i = Vc(i, t)) > (s = Vc(s, t)) ? [s, i] : [i, s]
            );
          })(t, l, (n = Jc(e, l))[0])),
          (this._length = Hc(l)),
          (this._dash = Hc(n[1] - n[0])),
          (this._offset = Hc(-n[0])),
          (this._dashPT = this.add(
            this,
            "_dash",
            this._dash,
            Hc(a[1] - a[0]),
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
            Hc(-a[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          Ic &&
            (o = Dc.getComputedStyle(e)).strokeLinecap !== o.strokeLinejoin &&
            ((a = Wc(o.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", a, a + 0.01)),
          (this._live = Zc(e) || ~(t + "").indexOf("live")),
          (this._nowrap = ~(t + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          1
        );
      },
      render: function (e, t) {
        if (t.tween._time || !Xc()) {
          var r,
            i,
            s,
            n,
            a = t._pt,
            o = t._style;
          if (a) {
            for (
              t._live &&
              (r = Qc(t._target)) !== t._length &&
              ((i = r / t._length),
              (t._length = r),
              t._offsetPT && ((t._offsetPT.s *= i), (t._offsetPT.c *= i)),
              t._dashPT
                ? ((t._dashPT.s *= i), (t._dashPT.c *= i))
                : (t._dash *= i));
              a;

            )
              a.r(e, a.d), (a = a._next);
            (s = t._dash || (e && 1 !== e && 1e-4) || 0),
              (r = t._length - s + 0.1),
              (n = t._offset),
              s &&
                n &&
                s + Math.abs(n % t._length) > t._length - 0.05 &&
                (n += n < 0 ? 0.005 : -0.005) &&
                (r += 0.005),
              (o.strokeDashoffset = s ? n : n + 0.001),
              (o.strokeDasharray =
                r < 0.1
                  ? "none"
                  : s
                  ? s + "px," + (t._nowrap ? 999999 : r) + "px"
                  : "0px, 999999px");
          }
        } else t.styles.revert();
      },
      getLength: Qc,
      getPosition: Jc,
    };
  Bc() && Lc.registerPlugin(td), Pn.registerPlugin(td);
  const rd = "pageLoadAnimationPlayed",
    id = () =>
      sessionStorage.getItem(rd)
        ? (() => {
            const e = document.querySelector("[page-load='component']");
            document.querySelector("[page-load='contain']");
            const t = document.querySelector("[page-load='overlay']");
            document.querySelector("[page-load='svg-visual-wrap']");
            const r = document.querySelector("[page-load='svg-sm']"),
              i = document.querySelector("[page-load='svg-path-solid']"),
              s = document.querySelector("[page-load='svg-path-faded']"),
              n = document.querySelector("[page-load='svg-line']"),
              a = cc();
            a && a.scrollTo(0, 0),
              Pn.set(n, { rotate: 120 }),
              Pn.set(r, { opacity: 0, rotate: 120 }),
              Pn.set(i, { opacity: 0, scale: 0.4, x: 150, y: -150 }),
              Pn.set(s, { opacity: 0, scale: 0.4, x: -150, y: 150 });
            const o = Pn.timeline();
            return (
              o.to(t, { duration: 1, opacity: 0, ease: "power2.inOut" }),
              o.to(
                n.querySelector("path"),
                { duration: 3, drawSVG: 0, stagger: 0.1, ease: "expo.inOut" },
                "-=2.6"
              ),
              o.to(
                e,
                {
                  duration: 1,
                  opacity: 0,
                  pointerEvents: "none",
                  ease: "power2.inOut",
                  onComplete: () => {
                    e.style.display = "none";
                  },
                },
                "-=1.4"
              ),
              o
            );
          })()
        : (sessionStorage.setItem(rd, "true"),
          (() => {
            const e = document.querySelector("[page-load='component']");
            document.querySelector("[page-load='contain']");
            const t = document.querySelector("[page-load='overlay']"),
              r = document.querySelector("[page-load='svg-visual-wrap']"),
              i = document.querySelector("[page-load='svg-sm']"),
              s = document.querySelector("[page-load='svg-path-solid']"),
              n = document.querySelector("[page-load='svg-path-faded']"),
              a = document.querySelector("[page-load='svg-line']"),
              o = cc();
            o && o.scrollTo(0, 0),
              Pn.set(a, { rotate: 120 }),
              Pn.set(i, { opacity: 0, rotate: 120 }),
              Pn.set(s, { opacity: 0, scale: 0.4, x: 150, y: -150 }),
              Pn.set(n, { opacity: 0, scale: 0.4, x: -150, y: 150 });
            const l = Pn.timeline();
            return (
              l.to(t, { duration: 0.8, opacity: 0, ease: "power2.inOut" }),
              l.to(r, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "<"),
              l.to(
                a,
                { duration: 1.8, opacity: 1, rotate: 0, ease: "expo.inOut" },
                "-=1.2"
              ),
              l.to(
                i,
                { duration: 1.8, opacity: 1, rotate: 0, ease: "expo.inOut" },
                "-=1.6"
              ),
              l.to(
                s,
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
              l.to(
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
              l.to(i, {
                duration: 1.2,
                scale: 0,
                rotate: 120,
                ease: "expo.inOut",
              }),
              l.to(
                a.querySelector("path"),
                { duration: 3.2, drawSVG: 0, stagger: 0.1, ease: "expo.inOut" },
                "-=2.8"
              ),
              l.to(
                e,
                {
                  duration: 0.8,
                  opacity: 0,
                  pointerEvents: "none",
                  ease: "power2.inOut",
                  onComplete: () => {
                    e.style.display = "none";
                  },
                },
                "-=1.0"
              ),
              l
            );
          })()),
    sd = () => {
      console.log("workAccordion"),
        document
          .querySelectorAll("[work-accordion='component']")
          .forEach((e) => {
            const t = e.querySelector("[work-accordion='trigger']"),
              r = t.querySelector("[work-accordion='title']"),
              i = t.querySelector("[work-accordion='open-text']"),
              s = t.querySelector("[work-accordion='close-text']"),
              n = t.querySelector("[work-accordion='icon']"),
              a = t.querySelector("[work-accordion='line']"),
              o = e.querySelector("[work-accordion='content']"),
              l = o.querySelector("[work-accordion='content-layout']"),
              c = l.offsetHeight;
            let d = !1;
            Pn.set(l, { opacity: 0, yPercent: 5 }),
              t.addEventListener("click", () => {
                const e = Pn.timeline();
                d
                  ? (e.to(o, { height: 0, duration: 0.9, ease: "expo.inOut" }),
                    e.to(
                      l,
                      {
                        opacity: 0,
                        yPercent: 5,
                        duration: 1,
                        ease: "expo.inOut",
                      },
                      "<"
                    ),
                    e.to(
                      a,
                      { scaleX: 0, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    e.to(
                      n,
                      { rotate: 0, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    e.to(
                      r,
                      { opacity: 1, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    e.to(
                      i,
                      { yPercent: 0, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    e.to(
                      s,
                      { yPercent: 100, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ))
                  : (e.to(a, { scaleX: 1, duration: 1.5, ease: "expo.inOut" }),
                    e.to(
                      n,
                      { rotate: 45, duration: 1, ease: "expo.inOut" },
                      "<"
                    ),
                    e.to(
                      r,
                      { opacity: 0.5, duration: 1, ease: "expo.inOut" },
                      "<"
                    ),
                    e.to(
                      i,
                      { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    e.to(
                      s,
                      { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
                      "<"
                    ),
                    e.to(
                      l,
                      {
                        opacity: 1,
                        yPercent: 0,
                        duration: 1.2,
                        ease: "expo.inOut",
                      },
                      "<"
                    ),
                    e.to(
                      o,
                      { height: c, duration: 1.2, ease: "expo.inOut" },
                      "<"
                    )),
                  (d = !d);
              });
          });
    },
    nd = () => {
      (() => {
        const e = document.querySelectorAll('[team-modal="open-trigger"]'),
          t = document.querySelectorAll('[team-modal="modal"]');
        !e ||
          !t ||
          t.forEach((t, r) => {
            const i = t.querySelector('[team-modal="component"]'),
              s = t.querySelector('[team-modal="top-wrap"]'),
              n = t.querySelector('[team-modal="main-info"]'),
              a = t.querySelector('[team-modal="sec-info"]'),
              o = t.querySelectorAll('[team-modal="close-trigger"]');
            if (!(i && s && n && a)) return;
            Pn.set(t, {
              opacity: 0,
              pointerEvents: "none",
              visibility: "hidden",
              display: "none",
            }),
              Pn.set(i, { clipPath: "inset(0% 0% 0% 100%)" }),
              Pn.set([s, n, a], { y: 100, opacity: 0, filter: "blur(5px)" });
            const l = Pn.timeline({ paused: !0 }),
              c = Pn.timeline({ paused: !0 });
            l.to(t, {
              opacity: 1,
              pointerEvents: "auto",
              visibility: "visible",
              display: "block",
              ease: "expo.out",
              duration: 0.6,
            }),
              l.to(
                i,
                {
                  clipPath: "inset(0% 0% 0% 0%)",
                  ease: "expo.inOut",
                  duration: 1.2,
                },
                "-=0.75"
              ),
              l.to(
                [s, n, a],
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
              c.to([s, n, a], {
                y: 100,
                opacity: 0,
                filter: "blur(5px)",
                ease: "expo.out",
                duration: 0.8,
                stagger: -0.14,
              }),
              c.to(
                i,
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
            const d = e[r];
            d &&
              d.addEventListener("click", () => {
                l.restart();
                const e = cc();
                e && e.stop();
              }),
              o.forEach((e) => {
                e.addEventListener("click", () => {
                  c.restart();
                  const e = cc();
                  e && e.start();
                });
              });
          });
      })();
    };
  Pn.registerPlugin(Rl);
  const ad = () => {
    document.querySelectorAll("[about-list='layout']").forEach((e) => {
      const t = e.querySelectorAll("[about-list='item']");
      Pn.utils.selector(e),
        t.forEach((e, t) => {
          const r = e.querySelector("[about-list='content']"),
            i = e.querySelector("[about-list='inner-line']");
          Pn.set(r, { opacity: 0.4 }),
            Pn.set(i, { scaleX: 0, transformOrigin: "left center" });
          const s = 85 - 20 * t,
            n = 40 - 20 * t;
          Pn.to(r, {
            opacity: 1,
            scrollTrigger: {
              trigger: e,
              start: `top ${s}%`,
              end: `top ${n}%`,
              scrub: !0,
              markers: !1,
            },
          }),
            Pn.to(i, {
              scaleX: 1,
              transformOrigin: "left center",
              scrollTrigger: {
                trigger: e,
                start: `top ${s}%`,
                end: `top ${n}%`,
                scrub: !0,
                markers: !1,
              },
            });
        });
    });
  };
  Pn.registerPlugin(Rl, Pc);
  const od = () => {
      document.querySelectorAll("[rollover-text='wrap']").forEach((e) => {
        const t = e.querySelector("[rollover-text='wrap-rel']"),
          r =
            null == t ? void 0 : t.querySelector("[rollover-text='text-rel']"),
          i = e.querySelector("[rollover-text='wrap-ab']"),
          s = null == i ? void 0 : i.querySelector("[rollover-text='text-ab']");
        if (!(t && r && i && s)) return;
        const n = new Pc(r, { type: "chars" }),
          a = new Pc(s, { type: "chars" }),
          o = "expo.inOut";
        Pn.set(t, { yPercent: 0 }),
          Pn.set(i, { yPercent: 0 }),
          Pn.set(n.chars, { yPercent: 0 }),
          Pn.set(a.chars, { yPercent: 100 });
        const l = Pn.timeline({
          scrollTrigger: {
            trigger: e,
            markers: !1,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        });
        l.to(
          n.chars,
          { yPercent: -100, ease: o, duration: 1.8, stagger: 0.08 },
          0
        ),
          l.to(
            a.chars,
            { yPercent: 0, ease: o, duration: 1.8, stagger: 0.08 },
            0
          );
      });
    },
    ld = () => {
      (() => {
        const e = document.querySelector("[page-fade='component']"),
          t = Pn.timeline();
        t.to(e, {
          duration: 1.2,
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          ease: "expo.inOut",
          onComplete: () => {
            e.style.display = "none";
          },
        });
      })();
    },
    cd = (e) => document.querySelector(e),
    dd = () => {
      document.querySelectorAll('[filter-list="group"]').forEach((e) => {
        const t = e.querySelector('[filter-item="current"]'),
          r = e.querySelector("[list-filter='toggle']"),
          i = e.querySelector("[list-filter='dropdown-wrap']"),
          s = e.querySelectorAll("[list-filter='dropdown-option']"),
          n = e.querySelectorAll("[list-filter='target-item']"),
          a = new Set(),
          o = (e, t) => {
            e.setAttribute("filter-status", t);
          },
          l = (e) => {
            const t = e.querySelectorAll("[filter-name]");
            return Array.from(t).map((e) => {
              var t;
              return null == (t = e.getAttribute("filter-name"))
                ? void 0
                : t.toLowerCase();
            });
          };
        n.forEach((e) => {
          l(e), o(e, "active");
        }),
          s.forEach((e) => {
            const t = "all" === e.getAttribute("filter-target");
            o(e, t ? "active" : "not-active");
          }),
          o(r, "not-active"),
          o(i, "not-active"),
          r.addEventListener("click", () => {
            const e = "active" === r.getAttribute("filter-status");
            o(r, e ? "not-active" : "active"),
              o(i, e ? "not-active" : "active");
          }),
          s.forEach((c) => {
            c.addEventListener("click", () => {
              const d = c.getAttribute("filter-target");
              "active" !== c.getAttribute("filter-status") &&
                ((c) => {
                  const d = c.toLowerCase();
                  o(r, "not-active"),
                    o(i, "not-active"),
                    s.forEach((e) => {
                      const t = e.getAttribute("filter-target") === c;
                      o(e, t ? "active" : "not-active");
                    });
                  const u = e.querySelector(`[filter-target="${c}"]`);
                  u && (t.textContent = u.textContent);
                  let p = 0,
                    h = 0;
                  n.forEach((e) => {
                    "active" === e.getAttribute("filter-status") &&
                      (p++,
                      a.add(e),
                      o(e, "transition-out"),
                      setTimeout(() => {
                        "transition-out" === e.getAttribute("filter-status") &&
                          (o(e, "not-active"),
                          a.delete(e),
                          h++,
                          h === p &&
                            n.forEach((e) => {
                              const t = l(e);
                              ("all" === d || t.includes(d)) &&
                                (a.add(e),
                                o(e, "transition-in"),
                                e.offsetHeight,
                                setTimeout(() => {
                                  "transition-in" ===
                                    e.getAttribute("filter-status") &&
                                    o(e, "active"),
                                    a.delete(e);
                                }, 300));
                            }));
                      }, 300));
                  }),
                    0 === p &&
                      n.forEach((e) => {
                        const t = l(e);
                        ("all" === d || t.includes(d)) &&
                          "not-active" === e.getAttribute("filter-status") &&
                          (a.add(e),
                          o(e, "transition-in"),
                          e.offsetHeight,
                          setTimeout(() => {
                            "transition-in" ===
                              e.getAttribute("filter-status") && o(e, "active"),
                              a.delete(e);
                          }, 300));
                      });
                })(d);
            });
          });
        const c = e.querySelector('[filter-target="all"]');
        c && (t.textContent = c.textContent);
      });
    };
  Pn.registerPlugin(Rl);
  const ud = () => {
      var e;
      const t = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      if (t) return;
      const r = document.querySelectorAll('[hero-parallax-sm="visual"]'),
        i = document.querySelector('[hero-parallax-sm="header"]');
      if (!r.length && !i) return;
      const s = null == cc ? void 0 : cc();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (
          (Rl.defaults({ scroller: s ? s.wrapper : void 0 }),
          r.forEach((e) => {
            const r = parseFloat(e.getAttribute("parallax-speed")) || 0.6,
              i = t ? 0.3 * r : r,
              s = t ? 1.1 : 1.2;
            Pn.set(e, {
              force3D: !0,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }),
              Pn.fromTo(
                e,
                { yPercent: 0, scale: 1, filter: "none" },
                {
                  yPercent: 100 * -i,
                  scale: s,
                  filter: "none",
                  ease: "none",
                  scrollTrigger: {
                    trigger: e.parentElement,
                    start: "top top",
                    end: "bottom top",
                    scrub: !t || 0.5,
                    invalidateOnRefresh: !0,
                    refreshPriority: -1,
                    disable: () =>
                      window.innerWidth < 480 && window.innerHeight < 600,
                  },
                }
              );
          }),
          i)
        ) {
          const s = parseFloat(i.getAttribute("parallax-speed")) || 3.5,
            n = t ? 0.5 * s : s,
            a = t ? 0.95 : 0.9;
          Pn.set(i, {
            force3D: !0,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }),
            Pn.fromTo(
              i,
              { yPercent: 0, scale: 1 },
              {
                yPercent: 100 * -n,
                scale: a,
                ease: "none",
                scrollTrigger: {
                  trigger:
                    (null == (e = r[0]) ? void 0 : e.parentElement) ||
                    i.parentElement,
                  start: "top top",
                  end: "bottom top",
                  scrub: !t || 0.5,
                  invalidateOnRefresh: !0,
                  refreshPriority: -1,
                  disable: () =>
                    window.innerWidth < 480 && window.innerHeight < 600,
                },
              }
            );
        }
        if (isIOS) {
          const e = () => {
            setTimeout(() => {
              Rl.refresh();
            }, 500);
          };
          return (
            window.addEventListener("orientationchange", e),
            () => {
              window.removeEventListener("orientationchange", e);
            }
          );
        }
      }
    },
    pd = {
      home: () => {
        id(),
          console.log("homeInit"),
          Me(),
          Ul(),
          Zl(),
          Ql(),
          dc(),
          uc(),
          Ac(),
          Oc(),
          sd();
      },
      about: () => {
        ld(), Me(), Ul(), Zl(), nd(), ad(), od(), dc();
      },
      contact: () => {
        const e = cd(".contact-form");
        e &&
          e.addEventListener("submit", (e) => {
            e.preventDefault(), console.log("Form submitted!");
          });
      },
      work: () => {
        ld(), Me(), Ul(), Zl(), dd();
      },
      blog_cms: () => {
        ld(),
          Me(),
          Ul(),
          Zl(),
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
            ? "loading" === document.readyState
              ? document.addEventListener("DOMContentLoaded", () => {
                  setTimeout(ud, 100);
                })
              : setTimeout(ud, 100)
            : ud();
      },
      work_cms: () => {
        ld(), Me(), Ul(), Zl(), sd();
      },
    },
    hd = () => {
      ((e) => document.querySelectorAll(e))(".footer-accordion").forEach(
        (e) => {
          const t = e.querySelector(".accordion-trigger"),
            r = e.querySelector(".accordion-content");
          !t ||
            !r ||
            t.addEventListener("click", () => {
              r.style.height = r.style.height ? "" : `${r.scrollHeight}px`;
            });
        }
      );
    };
  Pn.registerPlugin(Rl);
  const fd = () =>
      (() => {
        const e = document.querySelector('[nav-link="list"]'),
          t = document.querySelectorAll('[nav-link="item"]'),
          r = document.querySelector("[page='hero']");
        let i = [],
          s = [],
          n = [];
        const a = () => {
          i.forEach((e) => e.kill()),
            (i = []),
            (s = []),
            (n = []),
            e.setAttribute("nav-state", "list"),
            t.forEach((a, o) => {
              const l = a.querySelector('[nav-link="text"]'),
                c = a.querySelector('[nav-link="text-wrap"]'),
                d = a.querySelector('[nav-link="line"]');
              s.push(l), n.push(d);
              const u = document.querySelector('[line-top][nav-link="line"]'),
                p = document.querySelector('[line-middle][nav-link="line"]'),
                h = document.querySelector('[line-bottom][nav-link="line"]'),
                f = c.offsetHeight;
              if (!l || !c) return;
              Pn.set(l, { clearProps: "all" }),
                Pn.set(c, { clearProps: "all" }),
                Pn.set(a, { clearProps: "all" }),
                Pn.set(d, { clearProps: "all" }),
                Pn.set(u, { clearProps: "all" }),
                Pn.set(p, { clearProps: "all" }),
                Pn.set(h, { clearProps: "all" }),
                c.offsetHeight,
                a.offsetWidth;
              const m = Rl.create({
                trigger: r,
                start: "bottom 80%",
                onEnter: () => {
                  e.setAttribute("nav-state", "hamburger"),
                    Pn.to(t, { pointerEvents: "none" }),
                    Pn.to(s, {
                      y: "150%",
                      ease: "expo.out",
                      opacity: 0,
                      duration: 0.8,
                      stagger: 0.001,
                      overwrite: !0,
                    }),
                    Pn.to([u, p, h], {
                      scaleX: 0.1,
                      ease: "expo.out",
                      duration: 1,
                      overwrite: !0,
                      stagger: 0.0016,
                    }),
                    Pn.to(u, { y: 14 - f, ease: "expo.out", duration: 0.9 }),
                    Pn.to(p, { y: -f - 10, ease: "expo.out", duration: 0.9 }),
                    Pn.to(h, { y: -f - 34, ease: "expo.out", duration: 0.9 });
                },
                onLeaveBack: () => {
                  e.setAttribute("nav-state", "list"),
                    Pn.to(t, { pointerEvents: "auto" }),
                    Pn.to([u, p, h], {
                      scaleX: 1,
                      ease: "expo.out",
                      duration: 0.8,
                      overwrite: !0,
                      stagger: 0.0016,
                    }),
                    Pn.to(u, { y: 0, ease: "expo.out", duration: 0.8 }),
                    Pn.to(p, { y: 0, ease: "expo.out", duration: 0.8 }),
                    Pn.to(h, { y: 0, ease: "expo.out", duration: 0.8 }),
                    Pn.to(
                      s,
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
                },
                markers: !1,
              });
              i.push(m);
            });
        };
        let o;
        return (
          a(),
          window.addEventListener("resize", () => {
            clearTimeout(o),
              (o = setTimeout(() => {
                a();
              }, 250));
          }),
          () => {
            clearTimeout(o),
              i.forEach((e) => e.kill()),
              window.removeEventListener("resize", a);
          }
        );
      })(),
    md = () => {
      (() => {
        const e = document.querySelectorAll('[nav-menu="open-trigger"]'),
          t = document.querySelectorAll('[nav-menu="close-trigger"]'),
          r = document.querySelector('[nav-menu="component"]'),
          i = document.querySelectorAll('[nav-menu="link-item"]'),
          s = document.querySelectorAll('[nav-menu="eyebrow"]'),
          n = document.querySelector('[nav-link="list"]');
        if (!(e && t && r && i && s && n)) return;
        Pn.set(r, { clipPath: "inset(0% 0% 100% 0%)" }),
          Pn.set([i, s], { y: "100%", opacity: 0 }),
          Pn.set(t, { opacity: 0, scale: 0 });
        const a = Pn.timeline({ paused: !0 }),
          o = Pn.timeline({ paused: !0 });
        a.to(r, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "expo.inOut",
          duration: 1,
        }),
          a.to(
            i,
            {
              y: "0%",
              opacity: 1,
              ease: "expo.out",
              duration: 1,
              stagger: 0.08,
            },
            "-=0.6"
          ),
          a.to(
            t,
            { opacity: 1, scale: 1, ease: "expo.out", duration: 0.5 },
            "<"
          ),
          a.to(n, { opacity: 0, ease: "expo.out", duration: 0.5 }, "<"),
          a.to(
            s,
            {
              y: "0%",
              opacity: 1,
              ease: "expo.out",
              duration: 1,
              stagger: 0.06,
            },
            "-=0.8"
          ),
          o.to(s, {
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
          o.to(
            t,
            { opacity: 0, scale: 0, ease: "expo.in", duration: 0.5 },
            "<"
          ),
          o.to(n, { opacity: 1, ease: "expo.in", duration: 0.5 }, "<"),
          o.to(
            r,
            {
              clipPath: "inset(0% 0% 100% 0%)",
              ease: "expo.inOut",
              duration: 0.7,
            },
            "-=0.6"
          ),
          e.forEach((e) => {
            e.addEventListener("click", () => {
              a.restart();
              const e = cc();
              e && e.stop();
            });
          }),
          t.forEach((e) => {
            e.addEventListener("click", () => {
              o.restart();
              const e = cc();
              e && e.start();
            });
          });
      })();
    };
  Pn.registerPlugin(Rl);
  const gd = () => {
    (() => {
      const e = document.querySelectorAll("[visual-parallax]");
      if (!e.length) return;
      const t = null == cc ? void 0 : cc();
      Rl.defaults({ scroller: t ? (null == t ? void 0 : t.wrapper) : void 0 }),
        e.forEach((e) => {
          const t = parseFloat(e.getAttribute("parallax-speed")) || 0.1;
          Pn.fromTo(
            e,
            { yPercent: 0 },
            {
              yPercent: 100 * -t,
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
        });
    })();
  };
  function vd(e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function yd(e, t, r) {
    return t && vd(e.prototype, t), r && vd(e, r), e;
  }
  function wd(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function bd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, i);
    }
    return r;
  }
  function xd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? bd(Object(r), !0).forEach(function (t) {
            wd(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bd(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function Sd(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
          var r = [],
            i = !0,
            s = !1,
            n = void 0;
          try {
            for (
              var a, o = e[Symbol.iterator]();
              !(i = (a = o.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              i = !0
            );
          } catch (e) {
            (s = !0), (n = e);
          } finally {
            try {
              !i && null != o.return && o.return();
            } finally {
              if (s) throw n;
            }
          }
          return r;
        }
      })(e, t) ||
      _d(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Ed(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Td(e);
      })(e) ||
      (function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      })(e) ||
      _d(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function _d(e, t) {
    if (e) {
      if ("string" == typeof e) return Td(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (
        ("Object" === r && e.constructor && (r = e.constructor.name),
        "Map" === r || "Set" === r)
      )
        return Array.from(e);
      if (
        "Arguments" === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Td(e, t);
    }
  }
  function Td(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
    return i;
  }
  function Md(e, t) {
    return Object.getOwnPropertyNames(Object(e)).reduce(function (r, i) {
      var s = Object.getOwnPropertyDescriptor(Object(e), i),
        n = Object.getOwnPropertyDescriptor(Object(t), i);
      return Object.defineProperty(r, i, n || s);
    }, {});
  }
  function Cd(e) {
    return "string" == typeof e;
  }
  function kd(e) {
    return Array.isArray(e);
  }
  function Pd() {
    var e,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = Md(t);
    return (
      void 0 !== r.types ? (e = r.types) : void 0 !== r.split && (e = r.split),
      void 0 !== e &&
        (r.types = (Cd(e) || kd(e) ? String(e) : "")
          .split(",")
          .map(function (e) {
            return String(e).trim();
          })
          .filter(function (e) {
            return /((line)|(word)|(char))/i.test(e);
          })),
      (r.absolute || r.position) &&
        (r.absolute = r.absolute || /absolute/.test(t.position)),
      r
    );
  }
  function Ad(e) {
    var t = Cd(e) || kd(e) ? String(e) : "";
    return {
      none: !t,
      lines: /line/i.test(t),
      words: /word/i.test(t),
      chars: /char/i.test(t),
    };
  }
  function Od(e) {
    return null !== e && "object" == typeof e;
  }
  function Ld(e) {
    return Od(e) && /^(1|3|11)$/.test(e.nodeType);
  }
  function zd(e) {
    return kd(e)
      ? e
      : null == e
      ? []
      : (function (e) {
          return (
            Od(e) &&
            (function (e) {
              return "number" == typeof e && e > -1 && e % 1 == 0;
            })(e.length)
          );
        })(e)
      ? Array.prototype.slice.call(e)
      : [e];
  }
  function Dd(e) {
    var t = e;
    return (
      Cd(e) &&
        (t = /^(#[a-z]\w+)$/.test(e.trim())
          ? document.getElementById(e.trim().slice(1))
          : document.querySelectorAll(e)),
      zd(t).reduce(function (e, t) {
        return [].concat(Ed(e), Ed(zd(t).filter(Ld)));
      }, [])
    );
  }
  !(function () {
    function e() {
      for (var e = arguments.length, t = 0; t < e; t++) {
        var r = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        1 === r.nodeType || 11 === r.nodeType
          ? this.appendChild(r)
          : this.appendChild(document.createTextNode(String(r)));
      }
    }
    function t() {
      for (; this.lastChild; ) this.removeChild(this.lastChild);
      arguments.length && this.append.apply(this, arguments);
    }
    function r() {
      for (
        var e = this.parentNode, t = arguments.length, r = new Array(t), i = 0;
        i < t;
        i++
      )
        r[i] = arguments[i];
      var s = r.length;
      if (e)
        for (s || e.removeChild(this); s--; ) {
          var n = r[s];
          "object" != typeof n
            ? (n = this.ownerDocument.createTextNode(n))
            : n.parentNode && n.parentNode.removeChild(n),
            s
              ? e.insertBefore(this.previousSibling, n)
              : e.replaceChild(n, this);
        }
    }
    "undefined" != typeof Element &&
      (Element.prototype.append ||
        ((Element.prototype.append = e),
        (DocumentFragment.prototype.append = e)),
      Element.prototype.replaceChildren ||
        ((Element.prototype.replaceChildren = t),
        (DocumentFragment.prototype.replaceChildren = t)),
      Element.prototype.replaceWith ||
        ((Element.prototype.replaceWith = r),
        (DocumentFragment.prototype.replaceWith = r)));
  })();
  var Id = Object.entries,
    qd = "_splittype",
    $d = {},
    Rd = 0;
  function Xd(e, t, r) {
    if (!Od(e)) return console.warn("[data.set] owner is not an object"), null;
    var i = e[qd] || (e[qd] = ++Rd),
      s = $d[i] || ($d[i] = {});
    return (
      void 0 === r
        ? t &&
          Object.getPrototypeOf(t) === Object.prototype &&
          ($d[i] = xd(xd({}, s), t))
        : void 0 !== t && (s[t] = r),
      r
    );
  }
  function Nd(e, t) {
    var r = Od(e) ? e[qd] : null;
    return (r && $d[r]) || {};
  }
  function Bd(e) {
    var t = e && e[qd];
    t && (delete e[t], delete $d[t]);
  }
  var Fd = "\\ud800-\\udfff",
    Yd = "\\u0300-\\u036f\\ufe20-\\ufe23",
    Hd = "\\u20d0-\\u20f0",
    Wd = "\\ufe0e\\ufe0f",
    Vd = "[".concat(Fd, "]"),
    Gd = "[".concat(Yd).concat(Hd, "]"),
    jd = "\\ud83c[\\udffb-\\udfff]",
    Ud = "(?:".concat(Gd, "|").concat(jd, ")"),
    Kd = "[^".concat(Fd, "]"),
    Zd = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Qd = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Jd = "\\u200d",
    eu = "".concat(Ud, "?"),
    tu = "[".concat(Wd, "]?"),
    ru =
      tu +
      eu +
      ("(?:" + Jd + "(?:" + [Kd, Zd, Qd].join("|") + ")" + tu + eu + ")*"),
    iu = "(?:".concat(
      ["".concat(Kd).concat(Gd, "?"), Gd, Zd, Qd, Vd].join("|"),
      "\n)"
    ),
    su = RegExp(
      "".concat(jd, "(?=").concat(jd, ")|").concat(iu).concat(ru),
      "g"
    ),
    nu = RegExp("[".concat([Jd, Fd, Yd, Hd, Wd].join(""), "]"));
  function au(e) {
    return nu.test(e);
  }
  function ou(e) {
    return au(e)
      ? (function (e) {
          return e.match(su) || [];
        })(e)
      : (function (e) {
          return e.split("");
        })(e);
  }
  function lu(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return (e = (function (e) {
      return null == e ? "" : String(e);
    })(e)) &&
      Cd(e) &&
      !t &&
      au(e)
      ? ou(e)
      : e.split(t);
  }
  function cu(e, t) {
    var r = document.createElement(e);
    return (
      t &&
        Object.keys(t).forEach(function (e) {
          var i = t[e],
            s = Cd(i) ? i.trim() : i;
          null === s ||
            "" === s ||
            ("children" === e
              ? r.append.apply(r, Ed(zd(s)))
              : r.setAttribute(e, s));
        }),
      r
    );
  }
  var du = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function uu(e, t) {
    var r,
      i = Ad((t = Md(du, t)).types),
      s = t.tagName,
      n = e.nodeValue,
      a = document.createDocumentFragment(),
      o = [];
    return (
      /^\s/.test(n) && a.append(" "),
      (r = (function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
        return (e ? String(e) : "").trim().replace(/\s+/g, " ").split(t);
      })(n).reduce(function (e, r, n, l) {
        var c, d;
        return (
          i.chars &&
            (d = lu(r).map(function (e) {
              var r = cu(s, {
                class: "".concat(t.splitClass, " ").concat(t.charClass),
                style: "display: inline-block;",
                children: e,
              });
              return Xd(r, "isChar", !0), (o = [].concat(Ed(o), [r])), r;
            })),
          i.words || i.lines
            ? (Xd(
                (c = cu(s, {
                  class: "".concat(t.wordClass, " ").concat(t.splitClass),
                  style: "display: inline-block; ".concat(
                    i.words && t.absolute ? "position: relative;" : ""
                  ),
                  children: i.chars ? d : r,
                })),
                { isWord: !0, isWordStart: !0, isWordEnd: !0 }
              ),
              a.appendChild(c))
            : d.forEach(function (e) {
                a.appendChild(e);
              }),
          n < l.length - 1 && a.append(" "),
          i.words ? e.concat(c) : e
        );
      }, [])),
      /\s$/.test(n) && a.append(" "),
      e.replaceWith(a),
      { words: r, chars: o }
    );
  }
  function pu(e, t) {
    var r = e.nodeType,
      i = { words: [], chars: [] };
    if (!/(1|3|11)/.test(r)) return i;
    if (3 === r && /\S/.test(e.nodeValue)) return uu(e, t);
    var s = zd(e.childNodes);
    if (s.length && (Xd(e, "isSplit", !0), !Nd(e).isRoot)) {
      (e.style.display = "inline-block"), (e.style.position = "relative");
      var n = e.nextSibling,
        a = e.previousSibling,
        o = e.textContent || "",
        l = n ? n.textContent : " ",
        c = a ? a.textContent : " ";
      Xd(e, {
        isWordEnd: /\s$/.test(o) || /^\s/.test(l),
        isWordStart: /^\s/.test(o) || /\s$/.test(c),
      });
    }
    return s.reduce(function (e, r) {
      var i = pu(r, t),
        s = i.words,
        n = i.chars;
      return {
        words: [].concat(Ed(e.words), Ed(s)),
        chars: [].concat(Ed(e.chars), Ed(n)),
      };
    }, i);
  }
  function hu(e) {
    Nd(e).isWord
      ? (Bd(e), e.replaceWith.apply(e, Ed(e.childNodes)))
      : zd(e.children).forEach(function (e) {
          return hu(e);
        });
  }
  function fu(e, t, r) {
    var i,
      s,
      n,
      a = Ad(t.types),
      o = t.tagName,
      l = e.getElementsByTagName("*"),
      c = [],
      d = [],
      u = null,
      p = [],
      h = e.parentElement,
      f = e.nextElementSibling,
      m = document.createDocumentFragment(),
      g = window.getComputedStyle(e),
      v = g.textAlign,
      y = 0.2 * parseFloat(g.fontSize);
    return (
      t.absolute &&
        ((n = { left: e.offsetLeft, top: e.offsetTop, width: e.offsetWidth }),
        (s = e.offsetWidth),
        (i = e.offsetHeight),
        Xd(e, { cssWidth: e.style.width, cssHeight: e.style.height })),
      zd(l).forEach(function (i) {
        var s = i.parentElement === e,
          n = (function (e, t, r, i) {
            if (!r.absolute) return { top: t ? e.offsetTop : null };
            var s = e.offsetParent,
              n = Sd(i, 2),
              a = n[0],
              o = n[1],
              l = 0,
              c = 0;
            if (s && s !== document.body) {
              var d = s.getBoundingClientRect();
              (l = d.x + a), (c = d.y + o);
            }
            var u = e.getBoundingClientRect(),
              p = u.width,
              h = u.height,
              f = u.x;
            return { width: p, height: h, top: u.y + o - c, left: f + a - l };
          })(i, s, t, r),
          o = n.width,
          l = n.height,
          p = n.top,
          h = n.left;
        /^br$/i.test(i.nodeName) ||
          (a.lines &&
            s &&
            ((null === u || p - u >= y) && ((u = p), c.push((d = []))),
            d.push(i)),
          t.absolute && Xd(i, { top: p, left: h, width: o, height: l }));
      }),
      h && h.removeChild(e),
      a.lines &&
        ((p = c.map(function (e) {
          var r = cu(o, {
            class: "".concat(t.splitClass, " ").concat(t.lineClass),
            style: "display: block; text-align: ".concat(v, "; width: 100%;"),
          });
          Xd(r, "isLine", !0);
          var i = { height: 0, top: 1e4 };
          return (
            m.appendChild(r),
            e.forEach(function (e, t, s) {
              var n = Nd(e),
                a = n.isWordEnd,
                o = n.top,
                l = n.height,
                c = s[t + 1];
              (i.height = Math.max(i.height, l)),
                (i.top = Math.min(i.top, o)),
                r.appendChild(e),
                a && Nd(c).isWordStart && r.append(" ");
            }),
            t.absolute && Xd(r, { height: i.height, top: i.top }),
            r
          );
        })),
        a.words || hu(m),
        e.replaceChildren(m)),
      t.absolute &&
        ((e.style.width = "".concat(e.style.width || s, "px")),
        (e.style.height = "".concat(i, "px")),
        zd(l).forEach(function (e) {
          var t = Nd(e),
            r = t.isLine,
            i = t.top,
            s = t.left,
            a = t.width,
            o = t.height,
            l = Nd(e.parentElement),
            c = !r && l.isLine;
          (e.style.top = "".concat(c ? i - l.top : i, "px")),
            (e.style.left = "".concat(r ? n.left : s - (c ? n.left : 0), "px")),
            (e.style.height = "".concat(o, "px")),
            (e.style.width = "".concat(r ? n.width : a, "px")),
            (e.style.position = "absolute");
        })),
      h && (f ? h.insertBefore(e, f) : h.appendChild(e)),
      p
    );
  }
  var mu = Md(du, {}),
    gu = (function () {
      function e(t, r) {
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.isSplit = !1),
          (this.settings = Md(mu, Pd(r))),
          (this.elements = Dd(t)),
          this.split();
      }
      return (
        yd(e, null, [
          {
            key: "clearData",
            value: function () {
              Object.keys($d).forEach(function (e) {
                delete $d[e];
              });
            },
          },
          {
            key: "setDefaults",
            value: function (e) {
              return (mu = Md(mu, Pd(e))), du;
            },
          },
          {
            key: "revert",
            value: function (e) {
              Dd(e).forEach(function (e) {
                var t = Nd(e),
                  r = t.isSplit,
                  i = t.html,
                  s = t.cssWidth,
                  n = t.cssHeight;
                r &&
                  ((e.innerHTML = i),
                  (e.style.width = s || ""),
                  (e.style.height = n || ""),
                  Bd(e));
              });
            },
          },
          {
            key: "create",
            value: function (t, r) {
              return new e(t, r);
            },
          },
          {
            key: "data",
            get: function () {
              return $d;
            },
          },
          {
            key: "defaults",
            get: function () {
              return mu;
            },
            set: function (e) {
              mu = Md(mu, Pd(e));
            },
          },
        ]),
        yd(e, [
          {
            key: "split",
            value: function (e) {
              var t = this;
              this.revert(),
                this.elements.forEach(function (e) {
                  Xd(e, "html", e.innerHTML);
                }),
                (this.lines = []),
                (this.words = []),
                (this.chars = []);
              var r = [window.pageXOffset, window.pageYOffset];
              void 0 !== e && (this.settings = Md(this.settings, Pd(e)));
              var i = Ad(this.settings.types);
              i.none ||
                (this.elements.forEach(function (e) {
                  Xd(e, "isRoot", !0);
                  var r = pu(e, t.settings),
                    i = r.words,
                    s = r.chars;
                  (t.words = [].concat(Ed(t.words), Ed(i))),
                    (t.chars = [].concat(Ed(t.chars), Ed(s)));
                }),
                this.elements.forEach(function (e) {
                  if (i.lines || t.settings.absolute) {
                    var s = fu(e, t.settings, r);
                    t.lines = [].concat(Ed(t.lines), Ed(s));
                  }
                }),
                (this.isSplit = !0),
                window.scrollTo(r[0], r[1]),
                Id($d).forEach(function (e) {
                  var t = Sd(e, 2),
                    r = t[0],
                    i = t[1],
                    s = i.isRoot,
                    n = i.isSplit;
                  (!s || !n) && (($d[r] = null), delete $d[r]);
                }));
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
                e.revert(this.elements);
            },
          },
        ]),
        e
      );
    })();
  Pn.registerPlugin(Rl, Pc);
  const vu = () => {
    document.querySelectorAll("[split-text]").forEach((e) => {
      new gu(e, { type: "lines", tagName: "span" }).lines.forEach((e) => {
        const t = document.createElement("span");
        t.setAttribute("data-line-wrapper", ""),
          (t.style.overflow = "clip"),
          (t.style.paddingBottom = "5px"),
          (t.style.position = "relative"),
          (t.style.display = "block"),
          (t.style.whiteSpace = "normal"),
          (t.style.wordBreak = "break-word"),
          e.parentNode.insertBefore(t, e),
          t.appendChild(e);
      });
      const t = e.querySelectorAll("[data-line-wrapper]"),
        r = Array.from(t).map((e) => e.firstChild);
      Pn.set(r, { willChange: "transform" }),
        Pn.from(r, {
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
  };
  Pn.registerPlugin(Rl);
  const yu = () => {
    document.querySelectorAll("[stagger-svg]").forEach((e) => {
      const t = e.querySelectorAll("path");
      if (!t.length) return;
      const r = e.getAttribute("data-stagger-start") || "top bottom",
        i = e.getAttribute("data-stagger-end") || "bottom 50%";
      Pn.set(t, { willChange: "transform, opacity, filter" }),
        Pn.set(e, { willChange: "transform, opacity, filter" }),
        Pn.from(t, {
          yPercent: 80,
          filter: "blur(30px)",
          rotateZ: -2,
          opacity: 0.5,
          duration: 2.2,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: e,
            start: r,
            end: i,
            toggleActions: "play none none reverse",
            markers: !1,
          },
        });
    });
  };
  Pn.registerPlugin(Rl, Pc);
  const wu = () => {
    (() => {
      const e = document.querySelectorAll("[text-scramble]");
      e.length &&
        e.forEach((e) => {
          e.removeAttribute("aria-label");
          const t = new Pc(e, {
            type: "chars, words, lines",
            charsClass: "char-animate",
          }).chars;
          Pn.set(t, { opacity: 0, filter: "blur(10px)" }),
            Pn.to(t, {
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
    })();
  };
  Pn.registerPlugin(Rl);
  const bu = (e, t, r, i, s, n) => {
      const a = Pn.timeline({
        scrollTrigger: {
          trigger: e,
          start: n,
          toggleActions: "play none none reverse",
          markers: !1,
        },
      });
      "fade" === t
        ? a.to(e, { opacity: 1, duration: r, delay: i, ease: s })
        : "move-up" === t &&
          a.to(e, { opacity: 1, y: 0, duration: r, delay: i, ease: s });
    },
    xu = () => {
      (() => {
        const e = 3,
          t = "power2.out",
          r = 0.1,
          i = "top 80%",
          s = !1,
          n = document.querySelectorAll("[motion]"),
          a = {};
        n.forEach((r) => {
          const s = r.getAttribute("motion"),
            n = r.getAttribute("motion-group"),
            o = r.getAttribute("motion-duration")
              ? parseFloat(r.getAttribute("motion-duration"))
              : e,
            l = r.getAttribute("motion-delay")
              ? parseFloat(r.getAttribute("motion-delay"))
              : 0,
            c = r.getAttribute("motion-ease") || t,
            d = r.getAttribute("motion-start") || i;
          "fade" === s
            ? Pn.set(r, { opacity: 0 })
            : "move-up" === s && Pn.set(r, { opacity: 0, y: 50 }),
            n
              ? (a[n] || (a[n] = []),
                a[n].push({
                  element: r,
                  motionType: s,
                  duration: o,
                  delay: l,
                  ease: c,
                }))
              : bu(r, s, o, l, c, d);
        }),
          Object.keys(a).forEach((e) => {
            const t = a[e];
            if (t.length > 0) {
              const e = t[0],
                n = e.element.getAttribute("motion-stagger")
                  ? parseFloat(e.element.getAttribute("motion-stagger"))
                  : r,
                a = e.element.getAttribute("motion-start") || i,
                o = Pn.timeline({
                  scrollTrigger: {
                    trigger: e.element.parentElement,
                    start: a,
                    toggleActions: "play none none reverse",
                    markers: s,
                  },
                }),
                l = t
                  .filter((e) => "fade" === e.motionType)
                  .map((e) => e.element),
                c = t
                  .filter((e) => "move-up" === e.motionType)
                  .map((e) => e.element);
              l.length > 0 &&
                o.to(
                  l,
                  {
                    opacity: 1,
                    duration: e.duration,
                    stagger: n,
                    ease: e.ease,
                    delay: e.delay,
                  },
                  0
                ),
                c.length > 0 &&
                  o.to(
                    c,
                    {
                      opacity: 1,
                      y: 0,
                      duration: e.duration,
                      stagger: n,
                      ease: e.ease,
                      delay: e.delay,
                    },
                    0
                  );
            }
          });
      })();
    },
    Su = () => {
      (() => {
        const e = document.querySelector("[contact-modal='main']");
        if (!e) return;
        const t = document.querySelectorAll("[contact-modal='open-btn']"),
          r = document.querySelectorAll("[contact-modal='close-btn']"),
          i = document.querySelector("[contact-modal='visual']"),
          s = document.querySelector("[contact-modal='form']");
        let n = !1;
        const a = Pn.timeline({ paused: !0 });
        Pn.set(e, {
          display: "none",
          opacity: 0,
          pointerEvents: "none",
          backdropFilter: "blur(0px)",
        });
        const o = Pn.timeline({ paused: !0 });
        a.fromTo(
          e,
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
            {
              scale: 1,
              filter: "blur(0px)",
              duration: 1.4,
              ease: "expo.inOut",
            },
            "<"
          ),
          a.fromTo(
            s,
            { xPercent: 130 },
            { xPercent: 0, duration: 1.7, ease: "expo.inOut" },
            "<"
          ),
          o.to(e, {
            opacity: 0,
            pointerEvents: "none",
            backdropFilter: "blur(0px)",
            duration: 1.2,
            ease: "expo.inOut",
            onComplete: () => {
              Pn.set(e, { display: "none" });
            },
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
          o.to(s, { xPercent: 130, duration: 1.2, ease: "expo.inOut" }, "<");
        const l = () => {
          n && (o.restart(), (n = !1));
        };
        t.forEach((e) => {
          e.addEventListener("click", () => {
            n || (a.restart(), (n = !0));
          });
        }),
          r.forEach((e) => {
            e.addEventListener("click", l);
          }),
          document.addEventListener("keydown", (e) => {
            "Escape" === e.key && l();
          });
      })();
    },
    Eu = () => {
      (() => {
        const e = document.querySelector("[page-leave='component']");
        if (!e) return;
        const t = document.querySelectorAll("a[href]"),
          r = window.location.origin;
        t.forEach((t) => {
          const i = t.getAttribute("href").trim(),
            s = i.startsWith("#"),
            n = i.startsWith("mailto:"),
            a = i.startsWith("tel:"),
            o = i.startsWith("http") && !i.startsWith(r);
          s ||
            n ||
            a ||
            o ||
            t.addEventListener("click", (r) => {
              r.preventDefault();
              const i = t.href;
              Pn.to(e, {
                display: "block",
                opacity: 1,
                backdropFilter: "blur(20px)",
                backgroundColor: "var(--swatch--dark)",
                duration: 0.8,
                ease: "expo.inOut",
                onComplete: () => {
                  const e = document.querySelector("[page-load='component']");
                  e && ((e.style.display = "block"), (e.style.opacity = 1)),
                    (window.location.href = i);
                },
              });
            });
        });
      })();
    },
    _u = () => {
      hd(),
        (() => {
          const e = {
            arrow3: { start: "-100%", show: "300%", out: "600%" },
            arrow2: { start: "-100%", show: "200%", out: "500%" },
            arrow1: { start: "-100%", show: "100%", out: "400%" },
          };
          document.querySelectorAll("[cta-arrow-group]").forEach((t) => {
            const r = [
              {
                ab: t.querySelector('[cta-arrow="icon-3-ab"]'),
                positions: e.arrow3,
              },
              {
                ab: t.querySelector('[cta-arrow="icon-2-ab"]'),
                positions: e.arrow2,
              },
              {
                ab: t.querySelector('[cta-arrow="icon-1-ab"]'),
                positions: e.arrow1,
              },
            ].filter(({ ab: e }) => e);
            if (0 === r.length) return;
            const i = Pn.timeline({
              repeat: -1,
              defaults: { duration: 1, ease: "expo.out" },
            });
            i.set(
              r.map(({ ab: e }) => e),
              { x: "-100%", opacity: 0 }
            ),
              i.to(
                r.map(({ ab: e }) => e),
                { x: (e) => r[e].positions.show, opacity: 1, stagger: 0.15 }
              ),
              i.to({}, { duration: 0.5 }),
              i.to(
                r.map(({ ab: e }) => e),
                { x: (e) => r[e].positions.out, opacity: 0, stagger: 0.1 }
              ),
              i.to({}, { duration: 0 });
          });
        })(),
        fd(),
        md(),
        gd(),
        vu(),
        yu(),
        wu(),
        xu(),
        Su(),
        Eu();
    },
    Tu = () => {
      (() => {
        const e = cd(".example-component");
        e &&
          (((e, t) => {
            e.classList.add(t);
          })(e, "is-initialized"),
          e.addEventListener("click", () => {
            console.log("Example component clicked!");
          }));
      })();
    };
  document.addEventListener("DOMContentLoaded", () => {
    _u(),
      Tu(),
      (() => {
        const e = document.querySelector("[data-page]"),
          t = e ? e.dataset.page : null,
          r = pd[t];
        r ? r() : console.log(`No specific script for route: ${t}`);
      })(),
      lc();
  });
});

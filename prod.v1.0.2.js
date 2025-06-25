var Eg = Object.defineProperty;
var Ag = (Li, ai, Ii) =>
  ai in Li
    ? Eg(Li, ai, { enumerable: !0, configurable: !0, writable: !0, value: Ii })
    : (Li[ai] = Ii);
var G = (Li, ai, Ii) => Ag(Li, typeof ai != "symbol" ? ai + "" : ai, Ii);
(function () {
  "use strict";
  var Li = document.createElement("style");
  (Li.textContent = `@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:var(--swiper-navigation-top-offset, 50%);width:calc(var(--swiper-navigation-size) / 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-prev svg,.swiper-rtl .swiper-button-next svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset, 10px);right:auto}.swiper-button-lock{display:none}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset, 10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;inset:0;filter:blur(50px)}.swiper-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}
/*$vite$:1*/`),
    document.head.appendChild(Li);
  function ai(s) {
    return (
      s !== null &&
      typeof s == "object" &&
      "constructor" in s &&
      s.constructor === Object
    );
  }
  function Ii(s, e) {
    s === void 0 && (s = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof s[i] > "u"
          ? (s[i] = e[i])
          : ai(e[i]) &&
            ai(s[i]) &&
            Object.keys(e[i]).length > 0 &&
            Ii(s[i], e[i]);
      });
  }
  const Fo = {
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
  function Ve() {
    const s = typeof document < "u" ? document : {};
    return Ii(s, Fo), s;
  }
  const Qd = {
    document: Fo,
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
      return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
    },
    cancelAnimationFrame(s) {
      typeof setTimeout > "u" || clearTimeout(s);
    },
  };
  function be() {
    const s = typeof window < "u" ? window : {};
    return Ii(s, Qd), s;
  }
  function Di(s) {
    return (
      s === void 0 && (s = ""),
      s
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Jd(s) {
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
  function Qi(s, e) {
    return e === void 0 && (e = 0), setTimeout(s, e);
  }
  function Yt() {
    return Date.now();
  }
  function eu(s) {
    const e = be();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(s, null)),
      !t && s.currentStyle && (t = s.currentStyle),
      t || (t = s.style),
      t
    );
  }
  function Jn(s, e) {
    e === void 0 && (e = "x");
    const t = be();
    let i, r, n;
    const a = eu(s);
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
  function ss(s) {
    return (
      typeof s == "object" &&
      s !== null &&
      s.constructor &&
      Object.prototype.toString.call(s).slice(8, -1) === "Object"
    );
  }
  function tu(s) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? s instanceof HTMLElement
      : s && (s.nodeType === 1 || s.nodeType === 11);
  }
  function Ct() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !tu(i)) {
        const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, a = r.length; n < a; n += 1) {
          const o = r[n],
            l = Object.getOwnPropertyDescriptor(i, o);
          l !== void 0 &&
            l.enumerable &&
            (ss(s[o]) && ss(i[o])
              ? i[o].__swiper__
                ? (s[o] = i[o])
                : Ct(s[o], i[o])
              : !ss(s[o]) && ss(i[o])
              ? ((s[o] = {}), i[o].__swiper__ ? (s[o] = i[o]) : Ct(s[o], i[o]))
              : (s[o] = i[o]));
        }
      }
    }
    return s;
  }
  function ns(s, e, t) {
    s.style.setProperty(e, t);
  }
  function qo(s) {
    let { swiper: e, targetPosition: t, side: i } = s;
    const r = be(),
      n = -e.translate;
    let a = null,
      o;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > n ? "next" : "prev",
      d = (m, p) => (c === "next" && m >= p) || (c === "prev" && m <= p),
      h = () => {
        (o = new Date().getTime()), a === null && (a = o);
        const m = Math.max(Math.min((o - a) / l, 1), 0),
          p = 0.5 - Math.cos(m * Math.PI) / 2;
        let u = n + p * (t - n);
        if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [i]: u }), d(u, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: u });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(h);
      };
    h();
  }
  function Ji(s) {
    return (
      s.querySelector(".swiper-slide-transform") ||
      (s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform")) ||
      s
    );
  }
  function Ue(s, e) {
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
  function iu(s, e) {
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
  function ru(s, e) {
    const t = be();
    let i = e.contains(s);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(s)), i || (i = iu(s, e))),
      i
    );
  }
  function Zs(s) {
    try {
      return;
    } catch {}
  }
  function Mt(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...(Array.isArray(e) ? e : Di(e))), t;
  }
  function Ks(s) {
    const e = be(),
      t = Ve(),
      i = s.getBoundingClientRect(),
      r = t.body,
      n = s.clientTop || r.clientTop || 0,
      a = s.clientLeft || r.clientLeft || 0,
      o = s === e ? e.scrollY : s.scrollTop,
      l = s === e ? e.scrollX : s.scrollLeft;
    return { top: i.top + o - n, left: i.left + l - a };
  }
  function su(s, e) {
    const t = [];
    for (; s.previousElementSibling; ) {
      const i = s.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function nu(s, e) {
    const t = [];
    for (; s.nextElementSibling; ) {
      const i = s.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function zi(s, e) {
    return be().getComputedStyle(s, null).getPropertyValue(e);
  }
  function as(s) {
    let e = s,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function er(s, e) {
    const t = [];
    let i = s.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function os(s, e) {
    function t(i) {
      i.target === s &&
        (e.call(s, i), s.removeEventListener("transitionend", t));
    }
    e && s.addEventListener("transitionend", t);
  }
  function ea(s, e, t) {
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
  function Qs(s) {
    return (e) =>
      Math.abs(e) > 0 &&
      s.browser &&
      s.browser.need3dFix &&
      Math.abs(e) % 90 === 0
        ? e + 0.001
        : e;
  }
  let ta;
  function au() {
    const s = be(),
      e = Ve();
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
  function Yo() {
    return ta || (ta = au()), ta;
  }
  let ia;
  function ou(s) {
    let { userAgent: e } = s === void 0 ? {} : s;
    const t = Yo(),
      i = be(),
      r = i.navigator.platform,
      n = e || i.navigator.userAgent,
      a = { ios: !1, android: !1 },
      o = i.screen.width,
      l = i.screen.height,
      c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = n.match(/(iPad).*OS\s([\d_]+)/);
    const h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
      m = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      p = r === "Win32";
    let u = r === "MacIntel";
    const f = [
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
        u &&
        t.touch &&
        f.indexOf(`${o}x${l}`) >= 0 &&
        ((d = n.match(/(Version)\/([\d.]+)/)),
        d || (d = [0, 1, "13_0_0"]),
        (u = !1)),
      c && !p && ((a.os = "android"), (a.android = !0)),
      (d || m || h) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function Vo(s) {
    return s === void 0 && (s = {}), ia || (ia = ou(s)), ia;
  }
  let ra;
  function lu() {
    const s = be(),
      e = Vo();
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
          .map((d) => Number(d));
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
  function Ho() {
    return ra || (ra = lu()), ra;
  }
  function cu(s) {
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
              let u = m,
                f = p;
              h.forEach((g) => {
                let { contentBoxSize: y, contentRect: w, target: v } = g;
                (v && v !== e.el) ||
                  ((u = w ? w.width : (y[0] || y).inlineSize),
                  (f = w ? w.height : (y[0] || y).blockSize));
              }),
                (u !== m || f !== p) && o();
            });
          })),
          n.observe(e.el));
      },
      c = () => {
        a && r.cancelAnimationFrame(a),
          n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
      },
      d = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
        l();
        return;
      }
      r.addEventListener("resize", o),
        r.addEventListener("orientationchange", d);
    }),
      t("destroy", () => {
        c(),
          r.removeEventListener("resize", o),
          r.removeEventListener("orientationchange", d);
      });
  }
  function du(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = [],
      a = be(),
      o = function (d, h) {
        h === void 0 && (h = {});
        const m = a.MutationObserver || a.WebkitMutationObserver,
          p = new m((u) => {
            if (e.__preventObserver__) return;
            if (u.length === 1) {
              r("observerUpdate", u[0]);
              return;
            }
            const f = function () {
              r("observerUpdate", u[0]);
            };
            a.requestAnimationFrame
              ? a.requestAnimationFrame(f)
              : a.setTimeout(f, 0);
          });
        p.observe(d, {
          attributes: typeof h.attributes > "u" ? !0 : h.attributes,
          childList:
            e.isElement || (typeof h.childList > "u" ? !0 : h).childList,
          characterData: typeof h.characterData > "u" ? !0 : h.characterData,
        }),
          n.push(p);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const d = er(e.hostEl);
            for (let h = 0; h < d.length; h += 1) o(d[h]);
          }
          o(e.hostEl, { childList: e.params.observeSlideChildren }),
            o(e.wrapperEl, { attributes: !1 });
        }
      },
      c = () => {
        n.forEach((d) => {
          d.disconnect();
        }),
          n.splice(0, n.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", l),
      i("destroy", c);
  }
  var uu = {
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
  function fu() {
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
  function pu() {
    const s = this;
    function e(E, L) {
      return parseFloat(E.getPropertyValue(s.getDirectionLabel(L)) || 0);
    }
    const t = s.params,
      { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o } = s,
      l = s.virtual && t.virtual.enabled,
      c = l ? s.virtual.slides.length : s.slides.length,
      d = Ue(r, `.${s.params.slideClass}, swiper-slide`),
      h = l ? s.virtual.slides.length : d.length;
    let m = [];
    const p = [],
      u = [];
    let f = t.slidesOffsetBefore;
    typeof f == "function" && (f = t.slidesOffsetBefore.call(s));
    let g = t.slidesOffsetAfter;
    typeof g == "function" && (g = t.slidesOffsetAfter.call(s));
    const y = s.snapGrid.length,
      w = s.slidesGrid.length;
    let v = t.spaceBetween,
      b = -f,
      _ = 0,
      S = 0;
    if (typeof n > "u") return;
    typeof v == "string" && v.indexOf("%") >= 0
      ? (v = (parseFloat(v.replace("%", "")) / 100) * n)
      : typeof v == "string" && (v = parseFloat(v)),
      (s.virtualSize = -v),
      d.forEach((E) => {
        a ? (E.style.marginLeft = "") : (E.style.marginRight = ""),
          (E.style.marginBottom = ""),
          (E.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (ns(i, "--swiper-centered-offset-before", ""),
        ns(i, "--swiper-centered-offset-after", ""));
    const T = t.grid && t.grid.rows > 1 && s.grid;
    T ? s.grid.initSlides(d) : s.grid && s.grid.unsetSlides();
    let A;
    const x =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (E) => typeof t.breakpoints[E].slidesPerView < "u"
      ).length > 0;
    for (let E = 0; E < h; E += 1) {
      A = 0;
      let L;
      if (
        (d[E] && (L = d[E]),
        T && s.grid.updateSlide(E, L, d),
        !(d[E] && zi(L, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          x && (d[E].style[s.getDirectionLabel("width")] = "");
          const M = getComputedStyle(L),
            k = L.style.transform,
            I = L.style.webkitTransform;
          if (
            (k && (L.style.transform = "none"),
            I && (L.style.webkitTransform = "none"),
            t.roundLengths)
          )
            A = s.isHorizontal() ? ea(L, "width") : ea(L, "height");
          else {
            const z = e(M, "width"),
              D = e(M, "padding-left"),
              P = e(M, "padding-right"),
              O = e(M, "margin-left"),
              $ = e(M, "margin-right"),
              C = M.getPropertyValue("box-sizing");
            if (C && C === "border-box") A = z + O + $;
            else {
              const { clientWidth: H, offsetWidth: Z } = L;
              A = z + D + P + O + $ + (Z - H);
            }
          }
          k && (L.style.transform = k),
            I && (L.style.webkitTransform = I),
            t.roundLengths && (A = Math.floor(A));
        } else
          (A = (n - (t.slidesPerView - 1) * v) / t.slidesPerView),
            t.roundLengths && (A = Math.floor(A)),
            d[E] && (d[E].style[s.getDirectionLabel("width")] = `${A}px`);
        d[E] && (d[E].swiperSlideSize = A),
          u.push(A),
          t.centeredSlides
            ? ((b = b + A / 2 + _ / 2 + v),
              _ === 0 && E !== 0 && (b = b - n / 2 - v),
              E === 0 && (b = b - n / 2 - v),
              Math.abs(b) < 1 / 1e3 && (b = 0),
              t.roundLengths && (b = Math.floor(b)),
              S % t.slidesPerGroup === 0 && m.push(b),
              p.push(b))
            : (t.roundLengths && (b = Math.floor(b)),
              (S - Math.min(s.params.slidesPerGroupSkip, S)) %
                s.params.slidesPerGroup ===
                0 && m.push(b),
              p.push(b),
              (b = b + A + v)),
          (s.virtualSize += A + v),
          (_ = A),
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
      T && s.grid.updateWrapperSize(A, m),
      !t.centeredSlides)
    ) {
      const E = [];
      for (let L = 0; L < m.length; L += 1) {
        let M = m[L];
        t.roundLengths && (M = Math.floor(M)),
          m[L] <= s.virtualSize - n && E.push(M);
      }
      (m = E),
        Math.floor(s.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(s.virtualSize - n);
    }
    if (l && t.loop) {
      const E = u[0] + v;
      if (t.slidesPerGroup > 1) {
        const L = Math.ceil(
            (s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup
          ),
          M = E * t.slidesPerGroup;
        for (let k = 0; k < L; k += 1) m.push(m[m.length - 1] + M);
      }
      for (
        let L = 0;
        L < s.virtual.slidesBefore + s.virtual.slidesAfter;
        L += 1
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
      d.filter((L, M) =>
        !t.cssMode || t.loop ? !0 : M !== d.length - 1
      ).forEach((L) => {
        L.style[E] = `${v}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let E = 0;
      u.forEach((M) => {
        E += M + (v || 0);
      }),
        (E -= v);
      const L = E > n ? E - n : 0;
      m = m.map((M) => (M <= 0 ? -f : M > L ? L + g : M));
    }
    if (t.centerInsufficientSlides) {
      let E = 0;
      u.forEach((M) => {
        E += M + (v || 0);
      }),
        (E -= v);
      const L = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (E + L < n) {
        const M = (n - E - L) / 2;
        m.forEach((k, I) => {
          m[I] = k - M;
        }),
          p.forEach((k, I) => {
            p[I] = k + M;
          });
      }
    }
    if (
      (Object.assign(s, {
        slides: d,
        snapGrid: m,
        slidesGrid: p,
        slidesSizesGrid: u,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      ns(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        ns(
          i,
          "--swiper-centered-offset-after",
          `${s.size / 2 - u[u.length - 1] / 2}px`
        );
      const E = -s.snapGrid[0],
        L = -s.slidesGrid[0];
      (s.snapGrid = s.snapGrid.map((M) => M + E)),
        (s.slidesGrid = s.slidesGrid.map((M) => M + L));
    }
    if (
      (h !== c && s.emit("slidesLengthChange"),
      m.length !== y &&
        (s.params.watchOverflow && s.checkOverflow(),
        s.emit("snapGridLengthChange")),
      p.length !== w && s.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && s.updateSlidesOffset(),
      s.emit("slidesUpdated"),
      !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const E = `${t.containerModifierClass}backface-hidden`,
        L = s.el.classList.contains(E);
      h <= t.maxBackfaceHiddenSlides
        ? L || s.el.classList.add(E)
        : L && s.el.classList.remove(E);
    }
  }
  function hu(s) {
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
      if (typeof t[n] < "u") {
        const o = t[n].offsetHeight;
        r = o > r ? o : r;
      }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
  }
  function mu() {
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
  const Wo = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function gu(s) {
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
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l];
      let d = c.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
      const h =
          (a + (t.centeredSlides ? e.minTranslate() : 0) - d) /
          (c.swiperSlideSize + o),
        m =
          (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) /
          (c.swiperSlideSize + o),
        p = -(a - d),
        u = p + e.slidesSizesGrid[l],
        f = p >= 0 && p <= e.size - e.slidesSizesGrid[l],
        g =
          (p >= 0 && p < e.size - 1) ||
          (u > 1 && u <= e.size) ||
          (p <= 0 && u >= e.size);
      g && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(l)),
        Wo(c, g, t.slideVisibleClass),
        Wo(c, f, t.slideFullyVisibleClass),
        (c.progress = r ? -h : h),
        (c.originalProgress = r ? -m : m);
    }
  }
  function vu(s) {
    const e = this;
    if (typeof s > "u") {
      const d = e.rtlTranslate ? -1 : 1;
      s = (e && e.translate && e.translate * d) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = e;
    const l = n,
      c = a;
    if (i === 0) (r = 0), (n = !0), (a = !0);
    else {
      r = (s - e.minTranslate()) / i;
      const d = Math.abs(s - e.minTranslate()) < 1,
        h = Math.abs(s - e.maxTranslate()) < 1;
      (n = d || r <= 0), (a = h || r >= 1), d && (r = 0), h && (r = 1);
    }
    if (t.loop) {
      const d = e.getSlideIndexByData(0),
        h = e.getSlideIndexByData(e.slides.length - 1),
        m = e.slidesGrid[d],
        p = e.slidesGrid[h],
        u = e.slidesGrid[e.slidesGrid.length - 1],
        f = Math.abs(s);
      f >= m ? (o = (f - m) / u) : (o = (f + u - p) / u), o > 1 && (o -= 1);
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
  const sa = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function wu() {
    const s = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = s,
      n = s.virtual && t.virtual.enabled,
      a = s.grid && t.grid && t.grid.rows > 1,
      o = (h) => Ue(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
    let l, c, d;
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
          (d = e.find((h) => h.column === r + 1)),
          (c = e.find((h) => h.column === r - 1)))
        : (l = e[r]);
    l &&
      (a ||
        ((d = nu(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !d && (d = e[0]),
        (c = su(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c === 0 && (c = e[e.length - 1]))),
      e.forEach((h) => {
        sa(h, h === l, t.slideActiveClass),
          sa(h, h === d, t.slideNextClass),
          sa(h, h === c, t.slidePrevClass);
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
    na = (s, e) => {
      if (!s.slides[e]) return;
      const t = s.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    aa = (s) => {
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
            o.includes(l.column) && na(s, c);
          });
        return;
      }
      const n = r + i - 1;
      if (s.params.rewind || s.params.loop)
        for (let a = r - e; a <= n + e; a += 1) {
          const o = ((a % t) + t) % t;
          (o < r || o > n) && na(s, o);
        }
      else
        for (let a = Math.max(r - e, 0); a <= Math.min(n + e, t - 1); a += 1)
          a !== r && (a > n || a < r) && na(s, a);
    };
  function yu(s) {
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
  function bu(s) {
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
    const d = (p) => {
      let u = p - e.virtual.slidesBefore;
      return (
        u < 0 && (u = e.virtual.slides.length + u),
        u >= e.virtual.slides.length && (u -= e.virtual.slides.length),
        u
      );
    };
    if ((typeof l > "u" && (l = yu(e)), i.indexOf(t) >= 0)) c = i.indexOf(t);
    else {
      const p = Math.min(r.slidesPerGroupSkip, l);
      c = p + Math.floor((l - p) / r.slidesPerGroup);
    }
    if ((c >= i.length && (c = i.length - 1), l === n && !e.params.loop)) {
      c !== o && ((e.snapIndex = c), e.emit("snapIndexChange"));
      return;
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = d(l);
      return;
    }
    const h = e.grid && r.grid && r.grid.rows > 1;
    let m;
    if (e.virtual && r.virtual.enabled && r.loop) m = d(l);
    else if (h) {
      const p = e.slides.find((f) => f.column === l);
      let u = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(u) && (u = Math.max(e.slides.indexOf(p), 0)),
        (m = Math.floor(u / r.grid.rows));
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
      e.initialized && aa(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (a !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function _u(s, e) {
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
  var Su = {
    updateSize: fu,
    updateSlides: pu,
    updateAutoHeight: hu,
    updateSlidesOffset: mu,
    updateSlidesProgress: gu,
    updateProgress: vu,
    updateSlidesClasses: wu,
    updateActiveIndex: bu,
    updateClickedSlide: _u,
  };
  function xu(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let a = Jn(n, s);
    return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
  }
  function Tu(s, e) {
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
    let d;
    const h = t.maxTranslate() - t.minTranslate();
    h === 0 ? (d = 0) : (d = (s - t.minTranslate()) / h),
      d !== a && t.updateProgress(s),
      t.emit("setTranslate", t.translate, e);
  }
  function Eu() {
    return -this.snapGrid[0];
  }
  function Au() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Cu(s, e, t, i, r) {
    s === void 0 && (s = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const n = this,
      { params: a, wrapperEl: o } = n;
    if (n.animating && a.preventInteractionOnTransition) return !1;
    const l = n.minTranslate(),
      c = n.maxTranslate();
    let d;
    if (
      (i && s > l ? (d = l) : i && s < c ? (d = c) : (d = s),
      n.updateProgress(d),
      a.cssMode)
    ) {
      const h = n.isHorizontal();
      if (e === 0) o[h ? "scrollLeft" : "scrollTop"] = -d;
      else {
        if (!n.support.smoothScroll)
          return (
            qo({ swiper: n, targetPosition: -d, side: h ? "left" : "top" }), !0
          );
        o.scrollTo({ [h ? "left" : "top"]: -d, behavior: "smooth" });
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
  var Mu = {
    getTranslate: xu,
    setTranslate: Tu,
    minTranslate: Eu,
    maxTranslate: Au,
    translateTo: Cu,
  };
  function Pu(s, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${s}ms`),
      (t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
      t.emit("setTransition", s, e);
  }
  function Go(s) {
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
  function ku(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      Go({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
  }
  function Ou(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        Go({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
  }
  var Lu = { setTransition: Pu, transitionStart: ku, transitionEnd: Ou };
  function Iu(s, e, t, i, r) {
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
      previousIndex: d,
      activeIndex: h,
      rtlTranslate: m,
      wrapperEl: p,
      enabled: u,
    } = n;
    if (
      (!u && !i && !r) ||
      n.destroyed ||
      (n.animating && o.preventInteractionOnTransition)
    )
      return !1;
    typeof e > "u" && (e = n.params.speed);
    const f = Math.min(n.params.slidesPerGroupSkip, a);
    let g = f + Math.floor((a - f) / n.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const y = -l[g];
    if (o.normalizeSlideIndex)
      for (let T = 0; T < c.length; T += 1) {
        const A = -Math.floor(y * 100),
          x = Math.floor(c[T] * 100),
          E = Math.floor(c[T + 1] * 100);
        typeof c[T + 1] < "u"
          ? A >= x && A < E - (E - x) / 2
            ? (a = T)
            : A >= x && A < E && (a = T + 1)
          : A >= x && (a = T);
      }
    if (
      n.initialized &&
      a !== h &&
      ((!n.allowSlideNext &&
        (m
          ? y > n.translate && y > n.minTranslate()
          : y < n.translate && y < n.minTranslate())) ||
        (!n.allowSlidePrev &&
          y > n.translate &&
          y > n.maxTranslate() &&
          (h || 0) !== a))
    )
      return !1;
    a !== (d || 0) && t && n.emit("beforeSlideChangeStart"),
      n.updateProgress(y);
    let w;
    a > h ? (w = "next") : a < h ? (w = "prev") : (w = "reset");
    const v = n.virtual && n.params.virtual.enabled;
    if (!(v && r) && ((m && -y === n.translate) || (!m && y === n.translate)))
      return (
        n.updateActiveIndex(a),
        o.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        o.effect !== "slide" && n.setTranslate(y),
        w !== "reset" && (n.transitionStart(t, w), n.transitionEnd(t, w)),
        !1
      );
    if (o.cssMode) {
      const T = n.isHorizontal(),
        A = m ? y : -y;
      if (e === 0)
        v &&
          ((n.wrapperEl.style.scrollSnapType = "none"),
          (n._immediateVirtual = !0)),
          v && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
            ? ((n._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                p[T ? "scrollLeft" : "scrollTop"] = A;
              }))
            : (p[T ? "scrollLeft" : "scrollTop"] = A),
          v &&
            requestAnimationFrame(() => {
              (n.wrapperEl.style.scrollSnapType = ""),
                (n._immediateVirtual = !1);
            });
      else {
        if (!n.support.smoothScroll)
          return (
            qo({ swiper: n, targetPosition: A, side: T ? "left" : "top" }), !0
          );
        p.scrollTo({ [T ? "left" : "top"]: A, behavior: "smooth" });
      }
      return !0;
    }
    const S = Ho().isSafari;
    return (
      v && !r && S && n.isElement && n.virtual.update(!1, !1, a),
      n.setTransition(e),
      n.setTranslate(y),
      n.updateActiveIndex(a),
      n.updateSlidesClasses(),
      n.emit("beforeTransitionStart", e, i),
      n.transitionStart(t, w),
      e === 0
        ? n.transitionEnd(t, w)
        : n.animating ||
          ((n.animating = !0),
          n.onSlideToWrapperTransitionEnd ||
            (n.onSlideToWrapperTransitionEnd = function (A) {
              !n ||
                n.destroyed ||
                (A.target === this &&
                  (n.wrapperEl.removeEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  (n.onSlideToWrapperTransitionEnd = null),
                  delete n.onSlideToWrapperTransitionEnd,
                  n.transitionEnd(t, w)));
            }),
          n.wrapperEl.addEventListener(
            "transitionend",
            n.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function Du(s, e, t, i) {
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
          const m = a * r.params.grid.rows;
          o = r.slides.find(
            (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
          ).column;
        } else o = r.getSlideIndexByData(a);
        const l = n
            ? Math.ceil(r.slides.length / r.params.grid.rows)
            : r.slides.length,
          { centeredSlides: c } = r.params;
        let d = r.params.slidesPerView;
        d === "auto"
          ? (d = r.slidesPerViewDynamic())
          : ((d = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
            c && d % 2 === 0 && (d = d + 1));
        let h = l - o < d;
        if (
          (c && (h = h || o < Math.ceil(d / 2)),
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
  function zu(s, e, t) {
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
  function Ru(s, e, t) {
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
    typeof s > "u" && (s = i.params.speed);
    const d = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (c && !d && r.loopPreventsSliding) return !1;
      i.loopFix({ direction: "prev" }),
        (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const h = o ? i.translate : -i.translate;
    function m(w) {
      return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
    }
    const p = m(h),
      u = n.map((w) => m(w)),
      f = r.freeMode && r.freeMode.enabled;
    let g = n[u.indexOf(p) - 1];
    if (typeof g > "u" && (r.cssMode || f)) {
      let w;
      n.forEach((v, b) => {
        p >= v && (w = b);
      }),
        typeof w < "u" && (g = f ? n[w] : n[w > 0 ? w - 1 : w]);
    }
    let y = 0;
    if (
      (typeof g < "u" &&
        ((y = a.indexOf(g)),
        y < 0 && (y = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((y = y - i.slidesPerViewDynamic("previous", !0) + 1),
          (y = Math.max(y, 0)))),
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
          i.slideTo(y, s, e, t);
        }),
        !0
      );
    return i.slideTo(y, s, e, t);
  }
  function $u(s, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof s > "u" && (s = i.params.speed),
        i.slideTo(i.activeIndex, s, e, t)
      );
  }
  function Nu(s, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof s > "u" && (s = r.params.speed);
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n),
      o = a + Math.floor((n - a) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const c = r.snapGrid[o],
        d = r.snapGrid[o + 1];
      l - c > (d - c) * i && (n += r.params.slidesPerGroup);
    } else {
      const c = r.snapGrid[o - 1],
        d = r.snapGrid[o];
      l - c <= (d - c) * i && (n -= r.params.slidesPerGroup);
    }
    return (
      (n = Math.max(n, 0)),
      (n = Math.min(n, r.slidesGrid.length - 1)),
      r.slideTo(n, s, e, t)
    );
  }
  function Bu() {
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
                Ue(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
              )),
              Qi(() => {
                s.slideTo(r);
              }))
            : s.slideTo(r)
          : r > s.slides.length - i
          ? (s.loopFix(),
            (r = s.getSlideIndex(
              Ue(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
            )),
            Qi(() => {
              s.slideTo(r);
            }))
          : s.slideTo(r);
    } else s.slideTo(r);
  }
  var Fu = {
    slideTo: Iu,
    slideToLoop: Du,
    slideNext: zu,
    slidePrev: Ru,
    slideReset: $u,
    slideToClosest: Nu,
    slideToClickedSlide: Bu,
  };
  function qu(s, e) {
    const t = this,
      { params: i, slidesEl: r } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    const n = () => {
        Ue(r, `.${i.slideClass}, swiper-slide`).forEach((m, p) => {
          m.setAttribute("data-swiper-slide-index", p);
        });
      },
      a = t.grid && i.grid && i.grid.rows > 1,
      o = i.slidesPerGroup * (a ? i.grid.rows : 1),
      l = t.slides.length % o !== 0,
      c = a && t.slides.length % i.grid.rows !== 0,
      d = (h) => {
        for (let m = 0; m < h; m += 1) {
          const p = t.isElement
            ? Mt("swiper-slide", [i.slideBlankClass])
            : Mt("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(p);
        }
      };
    if (l) {
      if (i.loopAddBlankSlides) {
        const h = o - (t.slides.length % o);
        d(h), t.recalcSlides(), t.updateSlides();
      } else
        Zs(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      n();
    } else if (c) {
      if (i.loopAddBlankSlides) {
        const h = i.grid.rows - (t.slides.length % i.grid.rows);
        d(h), t.recalcSlides(), t.updateSlides();
      } else
        Zs(
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
  function Yu(s) {
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
        slides: d,
        allowSlidePrev: h,
        allowSlideNext: m,
        slidesEl: p,
        params: u,
      } = c,
      { centeredSlides: f, initialSlide: g } = u;
    if (
      ((c.allowSlidePrev = !0),
      (c.allowSlideNext = !0),
      c.virtual && u.virtual.enabled)
    ) {
      t &&
        (!u.centeredSlides && c.snapIndex === 0
          ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
          : u.centeredSlides && c.snapIndex < u.slidesPerView
          ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
          : c.snapIndex === c.snapGrid.length - 1 &&
            c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
        (c.allowSlidePrev = h),
        (c.allowSlideNext = m),
        c.emit("loopFix");
      return;
    }
    let y = u.slidesPerView;
    y === "auto"
      ? (y = c.slidesPerViewDynamic())
      : ((y = Math.ceil(parseFloat(u.slidesPerView, 10))),
        f && y % 2 === 0 && (y = y + 1));
    const w = u.slidesPerGroupAuto ? y : u.slidesPerGroup;
    let v = w;
    v % w !== 0 && (v += w - (v % w)),
      (v += u.loopAdditionalSlides),
      (c.loopedSlides = v);
    const b = c.grid && u.grid && u.grid.rows > 1;
    d.length < y + v || (c.params.effect === "cards" && d.length < y + v * 2)
      ? Zs(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : b &&
        u.grid.fill === "row" &&
        Zs(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const _ = [],
      S = [],
      T = b ? Math.ceil(d.length / u.grid.rows) : d.length,
      A = a && T - g < y && !f;
    let x = A ? g : c.activeIndex;
    typeof n > "u"
      ? (n = c.getSlideIndex(
          d.find((D) => D.classList.contains(u.slideActiveClass))
        ))
      : (x = n);
    const E = i === "next" || !i,
      L = i === "prev" || !i;
    let M = 0,
      k = 0;
    const z = (b ? d[n].column : n) + (f && typeof r > "u" ? -y / 2 + 0.5 : 0);
    if (z < v) {
      M = Math.max(v - z, w);
      for (let D = 0; D < v - z; D += 1) {
        const P = D - Math.floor(D / T) * T;
        if (b) {
          const O = T - P - 1;
          for (let $ = d.length - 1; $ >= 0; $ -= 1)
            d[$].column === O && _.push($);
        } else _.push(T - P - 1);
      }
    } else if (z + y > T - v) {
      (k = Math.max(z - (T - v * 2), w)), A && (k = Math.max(k, y - T + g + 1));
      for (let D = 0; D < k; D += 1) {
        const P = D - Math.floor(D / T) * T;
        b
          ? d.forEach((O, $) => {
              O.column === P && S.push($);
            })
          : S.push(P);
      }
    }
    if (
      ((c.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        c.__preventObserver__ = !1;
      }),
      c.params.effect === "cards" &&
        d.length < y + v * 2 &&
        (S.includes(n) && S.splice(S.indexOf(n), 1),
        _.includes(n) && _.splice(_.indexOf(n), 1)),
      L &&
        _.forEach((D) => {
          (d[D].swiperLoopMoveDOM = !0),
            p.prepend(d[D]),
            (d[D].swiperLoopMoveDOM = !1);
        }),
      E &&
        S.forEach((D) => {
          (d[D].swiperLoopMoveDOM = !0),
            p.append(d[D]),
            (d[D].swiperLoopMoveDOM = !1);
        }),
      c.recalcSlides(),
      u.slidesPerView === "auto"
        ? c.updateSlides()
        : b &&
          ((_.length > 0 && L) || (S.length > 0 && E)) &&
          c.slides.forEach((D, P) => {
            c.grid.updateSlide(P, D, c.slides);
          }),
      u.watchSlidesProgress && c.updateSlidesOffset(),
      t)
    ) {
      if (_.length > 0 && L) {
        if (typeof e > "u") {
          const D = c.slidesGrid[x],
            O = c.slidesGrid[x + M] - D;
          l
            ? c.setTranslate(c.translate - O)
            : (c.slideTo(x + Math.ceil(M), 0, !1, !0),
              r &&
                ((c.touchEventsData.startTranslate =
                  c.touchEventsData.startTranslate - O),
                (c.touchEventsData.currentTranslate =
                  c.touchEventsData.currentTranslate - O)));
        } else if (r) {
          const D = b ? _.length / u.grid.rows : _.length;
          c.slideTo(c.activeIndex + D, 0, !1, !0),
            (c.touchEventsData.currentTranslate = c.translate);
        }
      } else if (S.length > 0 && E)
        if (typeof e > "u") {
          const D = c.slidesGrid[x],
            O = c.slidesGrid[x - k] - D;
          l
            ? c.setTranslate(c.translate - O)
            : (c.slideTo(x - k, 0, !1, !0),
              r &&
                ((c.touchEventsData.startTranslate =
                  c.touchEventsData.startTranslate - O),
                (c.touchEventsData.currentTranslate =
                  c.touchEventsData.currentTranslate - O)));
        } else {
          const D = b ? S.length / u.grid.rows : S.length;
          c.slideTo(c.activeIndex - D, 0, !1, !0);
        }
    }
    if (
      ((c.allowSlidePrev = h),
      (c.allowSlideNext = m),
      c.controller && c.controller.control && !o)
    ) {
      const D = {
        slideRealIndex: e,
        direction: i,
        setTranslate: r,
        activeSlideIndex: n,
        byController: !0,
      };
      Array.isArray(c.controller.control)
        ? c.controller.control.forEach((P) => {
            !P.destroyed &&
              P.params.loop &&
              P.loopFix({
                ...D,
                slideTo: P.params.slidesPerView === u.slidesPerView ? t : !1,
              });
          })
        : c.controller.control instanceof c.constructor &&
          c.controller.control.params.loop &&
          c.controller.control.loopFix({
            ...D,
            slideTo:
              c.controller.control.params.slidesPerView === u.slidesPerView
                ? t
                : !1,
          });
    }
    c.emit("loopFix");
  }
  function Vu() {
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
  var Hu = { loopCreate: qu, loopFix: Yu, loopDestroy: Vu };
  function Wu(s) {
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
  function Gu() {
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
  var Xu = { setGrabCursor: Wu, unsetGrabCursor: Gu };
  function ju(s, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === Ve() || i === be()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(s);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function Xo(s, e, t) {
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
  function Uu(s) {
    const e = this,
      t = Ve();
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
      Xo(e, i, i.targetTouches[0].pageX);
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
      (n.touchEventsTarget === "wrapper" && !ru(l, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const c = !!n.noSwipingClass && n.noSwipingClass !== "",
      d = i.composedPath ? i.composedPath() : i.path;
    c && i.target && i.target.shadowRoot && d && (l = d[0]);
    const h = n.noSwipingSelector
        ? n.noSwipingSelector
        : `.${n.noSwipingClass}`,
      m = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (m ? ju(h, l) : l.closest(h))) {
      e.allowClick = !0;
      return;
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const p = a.currentX,
      u = a.currentY;
    if (!Xo(e, i, p)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = p),
      (a.startY = u),
      (r.touchStartTime = Yt()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      n.threshold > 0 && (r.allowThresholdMove = !1);
    let f = !0;
    l.matches(r.focusableElements) &&
      ((f = !1), l.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== l &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !l.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const g = f && e.allowTouchMove && n.touchStartPreventDefault;
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
  function Zu(s) {
    const e = Ve(),
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
    const d = c.pageX,
      h = c.pageY;
    if (l.preventedByNestedSwiper) {
      (n.startX = d), (n.startY = h);
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(n, { startX: d, startY: h, currentX: d, currentY: h }),
          (i.touchStartTime = Yt()));
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
      (n.currentX = d),
      (n.currentY = h);
    const m = n.currentX - n.startX,
      p = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(m ** 2 + p ** 2) < t.params.threshold)
      return;
    if (typeof i.isScrolling > "u") {
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
      typeof i.startMoving > "u" &&
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
    let u = t.isHorizontal() ? m : p,
      f = t.isHorizontal()
        ? n.currentX - n.previousX
        : n.currentY - n.previousY;
    r.oneWayMovement &&
      ((u = Math.abs(u) * (a ? 1 : -1)), (f = Math.abs(f) * (a ? 1 : -1))),
      (n.diff = u),
      (u *= r.touchRatio),
      a && ((u = -u), (f = -f));
    const g = t.touchesDirection;
    (t.swipeDirection = u > 0 ? "prev" : "next"),
      (t.touchesDirection = f > 0 ? "prev" : "next");
    const y = t.params.loop && !r.cssMode,
      w =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (y && w && t.loopFix({ direction: t.swipeDirection }),
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
        y &&
        w &&
        Math.abs(u) >= 1)
    ) {
      Object.assign(n, {
        startX: d,
        startY: h,
        currentX: d,
        currentY: h,
        startTranslate: i.currentTranslate,
      }),
        (i.loopSwapReset = !0),
        (i.startTranslate = i.currentTranslate);
      return;
    }
    t.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = u + i.startTranslate);
    let b = !0,
      _ = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (_ = 0),
      u > 0
        ? (y &&
            w &&
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
            ((b = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + u) ** _)))
        : u < 0 &&
          (y &&
            w &&
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
            ((b = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - i.startTranslate - u) ** _))),
      b && (l.preventedByNestedSwiper = !0),
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
      if (Math.abs(u) > r.threshold || i.allowThresholdMove) {
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
  function Ku(s) {
    const e = this,
      t = e.touchEventsData;
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((r = [...i.changedTouches].find((_) => _.identifier === t.touchId)),
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
    const h = Yt(),
      m = h - t.touchStartTime;
    if (e.allowClick) {
      const _ = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((_ && _[0]) || i.target, _),
        e.emit("tap click", i),
        m < 300 &&
          h - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = Yt()),
      Qi(() => {
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
    const u = p >= -e.maxTranslate() && !e.params.loop;
    let f = 0,
      g = e.slidesSizesGrid[0];
    for (
      let _ = 0;
      _ < c.length;
      _ += _ < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const S = _ < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof c[_ + S] < "u"
        ? (u || (p >= c[_] && p < c[_ + S])) && ((f = _), (g = c[_ + S] - c[_]))
        : (u || p >= c[_]) &&
          ((f = _), (g = c[c.length - 1] - c[c.length - 2]));
    }
    let y = null,
      w = null;
    a.rewind &&
      (e.isBeginning
        ? (w =
            a.virtual && a.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (y = 0));
    const v = (p - c[f]) / g,
      b = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (m > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (v >= a.longSwipesRatio
          ? e.slideTo(a.rewind && e.isEnd ? y : f + b)
          : e.slideTo(f)),
        e.swipeDirection === "prev" &&
          (v > 1 - a.longSwipesRatio
            ? e.slideTo(f + b)
            : w !== null && v < 0 && Math.abs(v) > a.longSwipesRatio
            ? e.slideTo(w)
            : e.slideTo(f));
    } else {
      if (!a.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(f + b)
          : e.slideTo(f)
        : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : f + b),
          e.swipeDirection === "prev" && e.slideTo(w !== null ? w : f));
    }
  }
  function jo() {
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
  function Qu(s) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && s.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (s.stopPropagation(), s.stopImmediatePropagation())));
  }
  function Ju() {
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
  function ef(s) {
    const e = this;
    Js(e, s.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function tf() {
    const s = this;
    s.documentTouchHandlerProceeded ||
      ((s.documentTouchHandlerProceeded = !0),
      s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
  }
  const Uo = (s, e) => {
    const t = Ve(),
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
            jo,
            !0
          )
        : s[c]("observerUpdate", jo, !0),
      r[l]("load", s.onLoad, { capture: !0 }));
  };
  function rf() {
    const s = this,
      { params: e } = s;
    (s.onTouchStart = Uu.bind(s)),
      (s.onTouchMove = Zu.bind(s)),
      (s.onTouchEnd = Ku.bind(s)),
      (s.onDocumentTouchStart = tf.bind(s)),
      e.cssMode && (s.onScroll = Ju.bind(s)),
      (s.onClick = Qu.bind(s)),
      (s.onLoad = ef.bind(s)),
      Uo(s, "on");
  }
  function sf() {
    Uo(this, "off");
  }
  var nf = { attachEvents: rf, detachEvents: sf };
  const Zo = (s, e) => s.grid && e.grid && e.grid.rows > 1;
  function af() {
    const s = this,
      { realIndex: e, initialized: t, params: i, el: r } = s,
      n = i.breakpoints;
    if (!n || (n && Object.keys(n).length === 0)) return;
    const a = Ve(),
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
      m = Zo(s, i),
      p = Zo(s, h),
      u = s.params.grabCursor,
      f = h.grabCursor,
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
      u && !f ? s.unsetGrabCursor() : !u && f && s.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((S) => {
        if (typeof h[S] > "u") return;
        const T = i[S] && i[S].enabled,
          A = h[S] && h[S].enabled;
        T && !A && s[S].disable(), !T && A && s[S].enable();
      });
    const y = h.direction && h.direction !== i.direction,
      w = i.loop && (h.slidesPerView !== i.slidesPerView || y),
      v = i.loop;
    y && t && s.changeDirection(), Ct(s.params, h);
    const b = s.params.enabled,
      _ = s.params.loop;
    Object.assign(s, {
      allowTouchMove: s.params.allowTouchMove,
      allowSlideNext: s.params.allowSlideNext,
      allowSlidePrev: s.params.allowSlidePrev,
    }),
      g && !b ? s.disable() : !g && b && s.enable(),
      (s.currentBreakpoint = c),
      s.emit("_beforeBreakpoint", h),
      t &&
        (w
          ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
          : !v && _
          ? (s.loopCreate(e), s.updateSlides())
          : v && !_ && s.loopDestroy()),
      s.emit("breakpoint", h);
  }
  function of(s, e, t) {
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
  var lf = { setBreakpoint: af, getBreakpoint: of };
  function cf(s, e) {
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
  function df() {
    const s = this,
      { classNames: e, params: t, rtl: i, el: r, device: n } = s,
      a = cf(
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
  function uf() {
    const s = this,
      { el: e, classNames: t } = s;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), s.emitContainerClasses());
  }
  var ff = { addClasses: df, removeClasses: uf };
  function pf() {
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
  var hf = { checkOverflow: pf },
    Ko = {
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
  function mf(s, e) {
    return function (i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0],
        n = i[r];
      if (typeof n != "object" || n === null) {
        Ct(e, i);
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
        Ct(e, i);
        return;
      }
      typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0),
        s[r] || (s[r] = { enabled: !1 }),
        Ct(e, i);
    };
  }
  const oa = {
      eventsEmitter: uu,
      update: Su,
      translate: Mu,
      transition: Lu,
      slide: Fu,
      loop: Hu,
      grabCursor: Xu,
      events: nf,
      breakpoints: lf,
      checkOverflow: hf,
      classes: ff,
    },
    la = {};
  class yt {
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
        (t = Ct({}, t)),
        e && !t.el && (t.el = e);
      const a = Ve();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const d = [];
        return (
          a.querySelectorAll(t.el).forEach((h) => {
            const m = Ct({}, t, { el: h });
            d.push(new yt(m));
          }),
          d
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = Yo()),
        (o.device = Vo({ userAgent: t.userAgent })),
        (o.browser = Ho()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const l = {};
      o.modules.forEach((d) => {
        d({
          params: t,
          swiper: o,
          extendParams: mf(t, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const c = Ct({}, Ko, l);
      return (
        (o.params = Ct({}, c, la, t)),
        (o.originalParams = Ct({}, o.params)),
        (o.passedParams = Ct({}, t)),
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
        r = Ue(t, `.${i.slideClass}, swiper-slide`),
        n = as(r[0]);
      return as(e) - n;
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
      e.slides = Ue(t, `.${i.slideClass}, swiper-slide`);
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
          size: l,
          activeIndex: c,
        } = i;
      let d = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let h = n[c] ? Math.ceil(n[c].swiperSlideSize) : 0,
          m;
        for (let p = c + 1; p < n.length; p += 1)
          n[p] &&
            !m &&
            ((h += Math.ceil(n[p].swiperSlideSize)),
            (d += 1),
            h > l && (m = !0));
        for (let p = c - 1; p >= 0; p -= 1)
          n[p] &&
            !m &&
            ((h += n[p].swiperSlideSize), (d += 1), h > l && (m = !0));
      } else if (e === "current")
        for (let h = c + 1; h < n.length; h += 1)
          (t ? a[h] + o[h] - a[c] < l : a[h] - a[c] < l) && (d += 1);
      else for (let h = c - 1; h >= 0; h -= 1) a[c] - a[h] < l && (d += 1);
      return d;
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
          : Ue(i, r())[0];
      return (
        !a &&
          t.params.createElements &&
          ((a = Mt("div", t.params.wrapperClass)),
          i.append(a),
          Ue(i, `.${t.params.slideClass}`).forEach((o) => {
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
        aa(t),
        (t.initialized = !0),
        aa(t),
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Jd(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Ct(la, e);
    }
    static get extendedDefaults() {
      return la;
    }
    static get defaults() {
      return Ko;
    }
    static installModule(e) {
      yt.prototype.__modules__ || (yt.prototype.__modules__ = []);
      const t = yt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => yt.installModule(t)), yt)
        : (yt.installModule(e), yt);
    }
  }
  Object.keys(oa).forEach((s) => {
    Object.keys(oa[s]).forEach((e) => {
      yt.prototype[e] = oa[s][e];
    });
  }),
    yt.use([cu, du]);
  function gf(s) {
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
    const a = Ve();
    e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    const o = a.createElement("div");
    function l(u, f) {
      const g = e.params.virtual;
      if (g.cache && e.virtual.cache[f]) return e.virtual.cache[f];
      let y;
      return (
        g.renderSlide
          ? ((y = g.renderSlide.call(e, u, f)),
            typeof y == "string" && ((o.innerHTML = y), (y = o.children[0])))
          : e.isElement
          ? (y = Mt("swiper-slide"))
          : (y = Mt("div", e.params.slideClass)),
        y.setAttribute("data-swiper-slide-index", f),
        g.renderSlide || (y.innerHTML = u),
        g.cache && (e.virtual.cache[f] = y),
        y
      );
    }
    function c(u, f, g) {
      const {
        slidesPerView: y,
        slidesPerGroup: w,
        centeredSlides: v,
        loop: b,
        initialSlide: _,
      } = e.params;
      if (f && !b && _ > 0) return;
      const { addSlidesBefore: S, addSlidesAfter: T } = e.params.virtual,
        { from: A, to: x, slides: E, slidesGrid: L, offset: M } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const k = typeof g > "u" ? e.activeIndex || 0 : g;
      let I;
      e.rtlTranslate ? (I = "right") : (I = e.isHorizontal() ? "left" : "top");
      let z, D;
      v
        ? ((z = Math.floor(y / 2) + w + T), (D = Math.floor(y / 2) + w + S))
        : ((z = y + (w - 1) + T), (D = (b ? y : w) + S));
      let P = k - D,
        O = k + z;
      b || ((P = Math.max(P, 0)), (O = Math.min(O, E.length - 1)));
      let $ = (e.slidesGrid[P] || 0) - (e.slidesGrid[0] || 0);
      b && k >= D
        ? ((P -= D), v || ($ += e.slidesGrid[0]))
        : b && k < D && ((P = -D), v && ($ += e.slidesGrid[0])),
        Object.assign(e.virtual, {
          from: P,
          to: O,
          offset: $,
          slidesGrid: e.slidesGrid,
          slidesBefore: D,
          slidesAfter: z,
        });
      function C() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          r("virtualUpdate");
      }
      if (A === P && x === O && !u) {
        e.slidesGrid !== L &&
          $ !== M &&
          e.slides.forEach((N) => {
            N.style[I] = `${$ - Math.abs(e.cssOverflowAdjustment())}px`;
          }),
          e.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: $,
          from: P,
          to: O,
          slides: (function () {
            const F = [];
            for (let j = P; j <= O; j += 1) F.push(E[j]);
            return F;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? C() : r("virtualUpdate");
        return;
      }
      const H = [],
        Z = [],
        fe = (N) => {
          let F = N;
          return (
            N < 0 ? (F = E.length + N) : F >= E.length && (F = F - E.length), F
          );
        };
      if (u)
        e.slides
          .filter((N) => N.matches(`.${e.params.slideClass}, swiper-slide`))
          .forEach((N) => {
            N.remove();
          });
      else
        for (let N = A; N <= x; N += 1)
          if (N < P || N > O) {
            const F = fe(N);
            e.slides
              .filter((j) =>
                j.matches(
                  `.${e.params.slideClass}[data-swiper-slide-index="${F}"], swiper-slide[data-swiper-slide-index="${F}"]`
                )
              )
              .forEach((j) => {
                j.remove();
              });
          }
      const ce = b ? -E.length : 0,
        B = b ? E.length * 2 : E.length;
      for (let N = ce; N < B; N += 1)
        if (N >= P && N <= O) {
          const F = fe(N);
          typeof x > "u" || u
            ? Z.push(F)
            : (N > x && Z.push(F), N < A && H.push(F));
        }
      if (
        (Z.forEach((N) => {
          e.slidesEl.append(l(E[N], N));
        }),
        b)
      )
        for (let N = H.length - 1; N >= 0; N -= 1) {
          const F = H[N];
          e.slidesEl.prepend(l(E[F], F));
        }
      else
        H.sort((N, F) => F - N),
          H.forEach((N) => {
            e.slidesEl.prepend(l(E[N], N));
          });
      Ue(e.slidesEl, ".swiper-slide, swiper-slide").forEach((N) => {
        N.style[I] = `${$ - Math.abs(e.cssOverflowAdjustment())}px`;
      }),
        C();
    }
    function d(u) {
      if (typeof u == "object" && "length" in u)
        for (let f = 0; f < u.length; f += 1)
          u[f] && e.virtual.slides.push(u[f]);
      else e.virtual.slides.push(u);
      c(!0);
    }
    function h(u) {
      const f = e.activeIndex;
      let g = f + 1,
        y = 1;
      if (Array.isArray(u)) {
        for (let w = 0; w < u.length; w += 1)
          u[w] && e.virtual.slides.unshift(u[w]);
        (g = f + u.length), (y = u.length);
      } else e.virtual.slides.unshift(u);
      if (e.params.virtual.cache) {
        const w = e.virtual.cache,
          v = {};
        Object.keys(w).forEach((b) => {
          const _ = w[b],
            S = _.getAttribute("data-swiper-slide-index");
          S && _.setAttribute("data-swiper-slide-index", parseInt(S, 10) + y),
            (v[parseInt(b, 10) + y] = _);
        }),
          (e.virtual.cache = v);
      }
      c(!0), e.slideTo(g, 0);
    }
    function m(u) {
      if (typeof u > "u" || u === null) return;
      let f = e.activeIndex;
      if (Array.isArray(u))
        for (let g = u.length - 1; g >= 0; g -= 1)
          e.params.virtual.cache &&
            (delete e.virtual.cache[u[g]],
            Object.keys(e.virtual.cache).forEach((y) => {
              y > u &&
                ((e.virtual.cache[y - 1] = e.virtual.cache[y]),
                e.virtual.cache[y - 1].setAttribute(
                  "data-swiper-slide-index",
                  y - 1
                ),
                delete e.virtual.cache[y]);
            })),
            e.virtual.slides.splice(u[g], 1),
            u[g] < f && (f -= 1),
            (f = Math.max(f, 0));
      else
        e.params.virtual.cache &&
          (delete e.virtual.cache[u],
          Object.keys(e.virtual.cache).forEach((g) => {
            g > u &&
              ((e.virtual.cache[g - 1] = e.virtual.cache[g]),
              e.virtual.cache[g - 1].setAttribute(
                "data-swiper-slide-index",
                g - 1
              ),
              delete e.virtual.cache[g]);
          })),
          e.virtual.slides.splice(u, 1),
          u < f && (f -= 1),
          (f = Math.max(f, 0));
      c(!0), e.slideTo(f, 0);
    }
    function p() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        c(!0),
        e.slideTo(0, 0);
    }
    i("beforeInit", () => {
      if (!e.params.virtual.enabled) return;
      let u;
      if (typeof e.passedParams.virtual.slides > "u") {
        const f = [...e.slidesEl.children].filter((g) =>
          g.matches(`.${e.params.slideClass}, swiper-slide`)
        );
        f &&
          f.length &&
          ((e.virtual.slides = [...f]),
          (u = !0),
          f.forEach((g, y) => {
            g.setAttribute("data-swiper-slide-index", y),
              (e.virtual.cache[y] = g),
              g.remove();
          }));
      }
      u || (e.virtual.slides = e.params.virtual.slides),
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
          ns(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: d,
        prependSlide: h,
        removeSlide: m,
        removeAllSlides: p,
        update: c,
      });
  }
  function vf(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Ve(),
      a = be();
    (e.keyboard = { enabled: !1 }),
      t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
    function o(d) {
      if (!e.enabled) return;
      const { rtlTranslate: h } = e;
      let m = d;
      m.originalEvent && (m = m.originalEvent);
      const p = m.keyCode || m.charCode,
        u = e.params.keyboard.pageUpDown,
        f = u && p === 33,
        g = u && p === 34,
        y = p === 37,
        w = p === 39,
        v = p === 38,
        b = p === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && w) || (e.isVertical() && b) || g)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && y) || (e.isVertical() && v) || f))
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
        if (e.params.keyboard.onlyInViewport && (f || g || y || w || v || b)) {
          let _ = !1;
          if (
            er(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
            er(e.el, `.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const S = e.el,
            T = S.clientWidth,
            A = S.clientHeight,
            x = a.innerWidth,
            E = a.innerHeight,
            L = Ks(S);
          h && (L.left -= S.scrollLeft);
          const M = [
            [L.left, L.top],
            [L.left + T, L.top],
            [L.left, L.top + A],
            [L.left + T, L.top + A],
          ];
          for (let k = 0; k < M.length; k += 1) {
            const I = M[k];
            if (I[0] >= 0 && I[0] <= x && I[1] >= 0 && I[1] <= E) {
              if (I[0] === 0 && I[1] === 0) continue;
              _ = !0;
            }
          }
          if (!_) return;
        }
        e.isHorizontal()
          ? ((f || g || y || w) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (((g || w) && !h) || ((f || y) && h)) && e.slideNext(),
            (((f || y) && !h) || ((g || w) && h)) && e.slidePrev())
          : ((f || g || v || b) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (g || b) && e.slideNext(),
            (f || v) && e.slidePrev()),
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
  function wf(s) {
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
      o = Yt(),
      l;
    const c = [];
    function d(v) {
      let T = 0,
        A = 0,
        x = 0,
        E = 0;
      return (
        "detail" in v && (A = v.detail),
        "wheelDelta" in v && (A = -v.wheelDelta / 120),
        "wheelDeltaY" in v && (A = -v.wheelDeltaY / 120),
        "wheelDeltaX" in v && (T = -v.wheelDeltaX / 120),
        "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((T = A), (A = 0)),
        (x = T * 10),
        (E = A * 10),
        "deltaY" in v && (E = v.deltaY),
        "deltaX" in v && (x = v.deltaX),
        v.shiftKey && !x && ((x = E), (E = 0)),
        (x || E) &&
          v.deltaMode &&
          (v.deltaMode === 1
            ? ((x *= 40), (E *= 40))
            : ((x *= 800), (E *= 800))),
        x && !T && (T = x < 1 ? -1 : 1),
        E && !A && (A = E < 1 ? -1 : 1),
        { spinX: T, spinY: A, pixelX: x, pixelY: E }
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
          (o = new n.Date().getTime()),
          !1);
    }
    function u(v) {
      const b = e.params.mousewheel;
      if (v.direction < 0) {
        if (e.isEnd && !e.params.loop && b.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && b.releaseOnEdges) return !0;
      return !1;
    }
    function f(v) {
      let b = v,
        _ = !0;
      if (
        !e.enabled ||
        v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
      )
        return;
      const S = e.params.mousewheel;
      e.params.cssMode && b.preventDefault();
      let T = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (T = document.querySelector(e.params.mousewheel.eventsTarget));
      const A = T && T.contains(b.target);
      if (!e.mouseEntered && !A && !S.releaseOnEdges) return !0;
      b.originalEvent && (b = b.originalEvent);
      let x = 0;
      const E = e.rtlTranslate ? -1 : 1,
        L = d(b);
      if (S.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(L.pixelX) > Math.abs(L.pixelY)) x = -L.pixelX * E;
          else return !0;
        else if (Math.abs(L.pixelY) > Math.abs(L.pixelX)) x = -L.pixelY;
        else return !0;
      else
        x = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * E : -L.pixelY;
      if (x === 0) return !0;
      S.invert && (x = -x);
      let M = e.getTranslate() + x * S.sensitivity;
      if (
        (M >= e.minTranslate() && (M = e.minTranslate()),
        M <= e.maxTranslate() && (M = e.maxTranslate()),
        (_ = e.params.loop
          ? !0
          : !(M === e.minTranslate() || M === e.maxTranslate())),
        _ && e.params.nested && b.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const k = {
          time: Yt(),
          delta: Math.abs(x),
          direction: Math.sign(x),
          raw: v,
        };
        c.length >= 2 && c.shift();
        const I = c.length ? c[c.length - 1] : void 0;
        if (
          (c.push(k),
          I
            ? (k.direction !== I.direction ||
                k.delta > I.delta ||
                k.time > I.time + 150) &&
              p(k)
            : p(k),
          u(k))
        )
          return !0;
      } else {
        const k = { time: Yt(), delta: Math.abs(x), direction: Math.sign(x) },
          I =
            l &&
            k.time < l.time + 500 &&
            k.delta <= l.delta &&
            k.direction === l.direction;
        if (!I) {
          l = void 0;
          let z = e.getTranslate() + x * S.sensitivity;
          const D = e.isBeginning,
            P = e.isEnd;
          if (
            (z >= e.minTranslate() && (z = e.minTranslate()),
            z <= e.maxTranslate() && (z = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(z),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!D && e.isBeginning) || (!P && e.isEnd)) &&
              e.updateSlidesClasses(),
            e.params.loop &&
              e.loopFix({
                direction: k.direction < 0 ? "next" : "prev",
                byMousewheel: !0,
              }),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(a), (a = void 0), c.length >= 15 && c.shift();
            const O = c.length ? c[c.length - 1] : void 0,
              $ = c[0];
            if (
              (c.push(k),
              O && (k.delta > O.delta || k.direction !== O.direction))
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
                (a = Qi(() => {
                  e.destroyed ||
                    !e.params ||
                    e.slideToClosest(e.params.speed, !0, void 0, C);
                }, 0));
            }
            a ||
              (a = Qi(() => {
                if (e.destroyed || !e.params) return;
                const C = 0.5;
                (l = k),
                  c.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, C);
              }, 500));
          }
          if (
            (I || r("scroll", b),
            e.params.autoplay &&
              e.params.autoplay.disableOnInteraction &&
              e.autoplay.stop(),
            S.releaseOnEdges &&
              (z === e.minTranslate() || z === e.maxTranslate()))
          )
            return !0;
        }
      }
      return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), !1;
    }
    function g(v) {
      let b = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (b = document.querySelector(e.params.mousewheel.eventsTarget)),
        b[v]("mouseenter", h),
        b[v]("mouseleave", m),
        b[v]("wheel", f);
    }
    function y() {
      return e.params.cssMode
        ? (e.wrapperEl.removeEventListener("wheel", f), !0)
        : e.mousewheel.enabled
        ? !1
        : (g("addEventListener"), (e.mousewheel.enabled = !0), !0);
    }
    function w() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, f), !0)
        : e.mousewheel.enabled
        ? (g("removeEventListener"), (e.mousewheel.enabled = !1), !0)
        : !1;
    }
    i("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && w(),
        e.params.mousewheel.enabled && y();
    }),
      i("destroy", () => {
        e.params.cssMode && y(), e.mousewheel.enabled && w();
      }),
      Object.assign(e.mousewheel, { enable: y, disable: w });
  }
  function ca(s, e, t, i) {
    return (
      s.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let n = Ue(s.el, `.${i[r]}`)[0];
            n || ((n = Mt("div", i[r])), (n.className = i[r]), s.el.append(n)),
              (t[r] = n),
              (e[r] = n);
          }
        }),
      t
    );
  }
  function yf(s) {
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
    function n(u) {
      let f;
      return u &&
        typeof u == "string" &&
        e.isElement &&
        ((f = e.el.querySelector(u) || e.hostEl.querySelector(u)), f)
        ? f
        : (u &&
            (typeof u == "string" && (f = [...document.querySelectorAll(u)]),
            e.params.uniqueNavElements &&
            typeof u == "string" &&
            f &&
            f.length > 1 &&
            e.el.querySelectorAll(u).length === 1
              ? (f = e.el.querySelector(u))
              : f && f.length === 1 && (f = f[0])),
          u && !f ? u : f);
    }
    function a(u, f) {
      const g = e.params.navigation;
      (u = ne(u)),
        u.forEach((y) => {
          y &&
            (y.classList[f ? "add" : "remove"](...g.disabledClass.split(" ")),
            y.tagName === "BUTTON" && (y.disabled = f),
            e.params.watchOverflow &&
              e.enabled &&
              y.classList[e.isLocked ? "add" : "remove"](g.lockClass));
        });
    }
    function o() {
      const { nextEl: u, prevEl: f } = e.navigation;
      if (e.params.loop) {
        a(f, !1), a(u, !1);
        return;
      }
      a(f, e.isBeginning && !e.params.rewind),
        a(u, e.isEnd && !e.params.rewind);
    }
    function l(u) {
      u.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function c(u) {
      u.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function d() {
      const u = e.params.navigation;
      if (
        ((e.params.navigation = ca(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(u.nextEl || u.prevEl))
      )
        return;
      let f = n(u.nextEl),
        g = n(u.prevEl);
      Object.assign(e.navigation, { nextEl: f, prevEl: g }),
        (f = ne(f)),
        (g = ne(g));
      const y = (w, v) => {
        w && w.addEventListener("click", v === "next" ? c : l),
          !e.enabled && w && w.classList.add(...u.lockClass.split(" "));
      };
      f.forEach((w) => y(w, "next")), g.forEach((w) => y(w, "prev"));
    }
    function h() {
      let { nextEl: u, prevEl: f } = e.navigation;
      (u = ne(u)), (f = ne(f));
      const g = (y, w) => {
        y.removeEventListener("click", w === "next" ? c : l),
          y.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      u.forEach((y) => g(y, "next")), f.forEach((y) => g(y, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? p() : (d(), o());
    }),
      i("toEdge fromEdge lock unlock", () => {
        o();
      }),
      i("destroy", () => {
        h();
      }),
      i("enable disable", () => {
        let { nextEl: u, prevEl: f } = e.navigation;
        if (((u = ne(u)), (f = ne(f)), e.enabled)) {
          o();
          return;
        }
        [...u, ...f]
          .filter((g) => !!g)
          .forEach((g) => g.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (u, f) => {
        let { nextEl: g, prevEl: y } = e.navigation;
        (g = ne(g)), (y = ne(y));
        const w = f.target;
        let v = y.includes(w) || g.includes(w);
        if (e.isElement && !v) {
          const b = f.path || (f.composedPath && f.composedPath());
          b && (v = b.find((_) => g.includes(_) || y.includes(_)));
        }
        if (e.params.navigation.hideOnClick && !v) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === w || e.pagination.el.contains(w))
          )
            return;
          let b;
          g.length
            ? (b = g[0].classList.contains(e.params.navigation.hiddenClass))
            : y.length &&
              (b = y[0].classList.contains(e.params.navigation.hiddenClass)),
            r(b === !0 ? "navigationShow" : "navigationHide"),
            [...g, ...y]
              .filter((_) => !!_)
              .forEach((_) =>
                _.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const m = () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          d(),
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
      init: d,
      destroy: h,
    });
  }
  function yi(s) {
    return (
      s === void 0 && (s = ""),
      `.${s
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function bf(s) {
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
        formatFractionCurrent: (w) => w,
        formatFractionTotal: (w) => w,
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
    function c(w, v) {
      const { bulletActiveClass: b } = e.params.pagination;
      w &&
        ((w = w[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
        w &&
          (w.classList.add(`${b}-${v}`),
          (w = w[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
          w && w.classList.add(`${b}-${v}-${v}`)));
    }
    function d(w, v, b) {
      if (((w = w % b), (v = v % b), v === w + 1)) return "next";
      if (v === w - 1) return "previous";
    }
    function h(w) {
      const v = w.target.closest(yi(e.params.pagination.bulletClass));
      if (!v) return;
      w.preventDefault();
      const b = as(v) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === b) return;
        const _ = d(e.realIndex, b, e.slides.length);
        _ === "next"
          ? e.slideNext()
          : _ === "previous"
          ? e.slidePrev()
          : e.slideToLoop(b);
      } else e.slideTo(b);
    }
    function m() {
      const w = e.rtl,
        v = e.params.pagination;
      if (l()) return;
      let b = e.pagination.el;
      b = ne(b);
      let _, S;
      const T =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        A = e.params.loop
          ? Math.ceil(T / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((S = e.previousRealIndex || 0),
            (_ =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex < "u"
          ? ((_ = e.snapIndex), (S = e.previousSnapIndex))
          : ((S = e.previousIndex || 0), (_ = e.activeIndex || 0)),
        v.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const x = e.pagination.bullets;
        let E, L, M;
        if (
          (v.dynamicBullets &&
            ((a = ea(x[0], e.isHorizontal() ? "width" : "height")),
            b.forEach((k) => {
              k.style[e.isHorizontal() ? "width" : "height"] = `${
                a * (v.dynamicMainBullets + 4)
              }px`;
            }),
            v.dynamicMainBullets > 1 &&
              S !== void 0 &&
              ((o += _ - (S || 0)),
              o > v.dynamicMainBullets - 1
                ? (o = v.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (E = Math.max(_ - o, 0)),
            (L = E + (Math.min(x.length, v.dynamicMainBullets) - 1)),
            (M = (L + E) / 2)),
          x.forEach((k) => {
            const I = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((z) => `${v.bulletActiveClass}${z}`),
            ]
              .map((z) =>
                typeof z == "string" && z.includes(" ") ? z.split(" ") : z
              )
              .flat();
            k.classList.remove(...I);
          }),
          b.length > 1)
        )
          x.forEach((k) => {
            const I = as(k);
            I === _
              ? k.classList.add(...v.bulletActiveClass.split(" "))
              : e.isElement && k.setAttribute("part", "bullet"),
              v.dynamicBullets &&
                (I >= E &&
                  I <= L &&
                  k.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
                I === E && c(k, "prev"),
                I === L && c(k, "next"));
          });
        else {
          const k = x[_];
          if (
            (k && k.classList.add(...v.bulletActiveClass.split(" ")),
            e.isElement &&
              x.forEach((I, z) => {
                I.setAttribute("part", z === _ ? "bullet-active" : "bullet");
              }),
            v.dynamicBullets)
          ) {
            const I = x[E],
              z = x[L];
            for (let D = E; D <= L; D += 1)
              x[D] &&
                x[D].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
            c(I, "prev"), c(z, "next");
          }
        }
        if (v.dynamicBullets) {
          const k = Math.min(x.length, v.dynamicMainBullets + 4),
            I = (a * k - a) / 2 - M * a,
            z = w ? "right" : "left";
          x.forEach((D) => {
            D.style[e.isHorizontal() ? z : "top"] = `${I}px`;
          });
        }
      }
      b.forEach((x, E) => {
        if (
          (v.type === "fraction" &&
            (x.querySelectorAll(yi(v.currentClass)).forEach((L) => {
              L.textContent = v.formatFractionCurrent(_ + 1);
            }),
            x.querySelectorAll(yi(v.totalClass)).forEach((L) => {
              L.textContent = v.formatFractionTotal(A);
            })),
          v.type === "progressbar")
        ) {
          let L;
          v.progressbarOpposite
            ? (L = e.isHorizontal() ? "vertical" : "horizontal")
            : (L = e.isHorizontal() ? "horizontal" : "vertical");
          const M = (_ + 1) / A;
          let k = 1,
            I = 1;
          L === "horizontal" ? (k = M) : (I = M),
            x.querySelectorAll(yi(v.progressbarFillClass)).forEach((z) => {
              (z.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${I})`),
                (z.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        v.type === "custom" && v.renderCustom
          ? ((x.innerHTML = v.renderCustom(e, _ + 1, A)),
            E === 0 && r("paginationRender", x))
          : (E === 0 && r("paginationRender", x), r("paginationUpdate", x)),
          e.params.watchOverflow &&
            e.enabled &&
            x.classList[e.isLocked ? "add" : "remove"](v.lockClass);
      });
    }
    function p() {
      const w = e.params.pagination;
      if (l()) return;
      const v =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
      let b = e.pagination.el;
      b = ne(b);
      let _ = "";
      if (w.type === "bullets") {
        let S = e.params.loop
          ? Math.ceil(v / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && S > v && (S = v);
        for (let T = 0; T < S; T += 1)
          w.renderBullet
            ? (_ += w.renderBullet.call(e, T, w.bulletClass))
            : (_ += `<${w.bulletElement} ${
                e.isElement ? 'part="bullet"' : ""
              } class="${w.bulletClass}"></${w.bulletElement}>`);
      }
      w.type === "fraction" &&
        (w.renderFraction
          ? (_ = w.renderFraction.call(e, w.currentClass, w.totalClass))
          : (_ = `<span class="${w.currentClass}"></span> / <span class="${w.totalClass}"></span>`)),
        w.type === "progressbar" &&
          (w.renderProgressbar
            ? (_ = w.renderProgressbar.call(e, w.progressbarFillClass))
            : (_ = `<span class="${w.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        b.forEach((S) => {
          w.type !== "custom" && (S.innerHTML = _ || ""),
            w.type === "bullets" &&
              e.pagination.bullets.push(
                ...S.querySelectorAll(yi(w.bulletClass))
              );
        }),
        w.type !== "custom" && r("paginationRender", b[0]);
    }
    function u() {
      e.params.pagination = ca(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const w = e.params.pagination;
      if (!w.el) return;
      let v;
      typeof w.el == "string" && e.isElement && (v = e.el.querySelector(w.el)),
        !v &&
          typeof w.el == "string" &&
          (v = [...document.querySelectorAll(w.el)]),
        v || (v = w.el),
        !(!v || v.length === 0) &&
          (e.params.uniqueNavElements &&
            typeof w.el == "string" &&
            Array.isArray(v) &&
            v.length > 1 &&
            ((v = [...e.el.querySelectorAll(w.el)]),
            v.length > 1 && (v = v.find((b) => er(b, ".swiper")[0] === e.el))),
          Array.isArray(v) && v.length === 1 && (v = v[0]),
          Object.assign(e.pagination, { el: v }),
          (v = ne(v)),
          v.forEach((b) => {
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
              w.clickable && b.addEventListener("click", h),
              e.enabled || b.classList.add(w.lockClass);
          }));
    }
    function f() {
      const w = e.params.pagination;
      if (l()) return;
      let v = e.pagination.el;
      v &&
        ((v = ne(v)),
        v.forEach((b) => {
          b.classList.remove(w.hiddenClass),
            b.classList.remove(w.modifierClass + w.type),
            b.classList.remove(
              e.isHorizontal() ? w.horizontalClass : w.verticalClass
            ),
            w.clickable &&
              (b.classList.remove(...(w.clickableClass || "").split(" ")),
              b.removeEventListener("click", h));
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((b) =>
            b.classList.remove(...w.bulletActiveClass.split(" "))
          );
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const w = e.params.pagination;
      let { el: v } = e.pagination;
      (v = ne(v)),
        v.forEach((b) => {
          b.classList.remove(w.horizontalClass, w.verticalClass),
            b.classList.add(
              e.isHorizontal() ? w.horizontalClass : w.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.pagination.enabled === !1 ? y() : (u(), p(), m());
      }),
      i("activeIndexChange", () => {
        typeof e.snapIndex > "u" && m();
      }),
      i("snapIndexChange", () => {
        m();
      }),
      i("snapGridLengthChange", () => {
        p(), m();
      }),
      i("destroy", () => {
        f();
      }),
      i("enable disable", () => {
        let { el: w } = e.pagination;
        w &&
          ((w = ne(w)),
          w.forEach((v) =>
            v.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      i("lock unlock", () => {
        m();
      }),
      i("click", (w, v) => {
        const b = v.target,
          _ = ne(e.pagination.el);
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          _ &&
          _.length > 0 &&
          !b.classList.contains(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && b === e.navigation.nextEl) ||
              (e.navigation.prevEl && b === e.navigation.prevEl))
          )
            return;
          const S = _[0].classList.contains(e.params.pagination.hiddenClass);
          r(S === !0 ? "paginationShow" : "paginationHide"),
            _.forEach((T) =>
              T.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const g = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: w } = e.pagination;
        w &&
          ((w = ne(w)),
          w.forEach((v) =>
            v.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          u(),
          p(),
          m();
      },
      y = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: w } = e.pagination;
        w &&
          ((w = ne(w)),
          w.forEach((v) =>
            v.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          f();
      };
    Object.assign(e.pagination, {
      enable: g,
      disable: y,
      render: p,
      update: m,
      init: u,
      destroy: f,
    });
  }
  function _f(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = Ve();
    let a = !1,
      o = null,
      l = null,
      c,
      d,
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
      const { scrollbar: M, rtlTranslate: k } = e,
        { dragEl: I, el: z } = M,
        D = e.params.scrollbar,
        P = e.params.loop ? e.progressLoop : e.progress;
      let O = d,
        $ = (h - d) * P;
      k
        ? (($ = -$), $ > 0 ? ((O = d - $), ($ = 0)) : -$ + d > h && (O = h + $))
        : $ < 0
        ? ((O = d + $), ($ = 0))
        : $ + d > h && (O = h - $),
        e.isHorizontal()
          ? ((I.style.transform = `translate3d(${$}px, 0, 0)`),
            (I.style.width = `${O}px`))
          : ((I.style.transform = `translate3d(0px, ${$}px, 0)`),
            (I.style.height = `${O}px`)),
        D.hide &&
          (clearTimeout(o),
          (z.style.opacity = 1),
          (o = setTimeout(() => {
            (z.style.opacity = 0), (z.style.transitionDuration = "400ms");
          }, 1e3)));
    }
    function u(M) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        (e.scrollbar.dragEl.style.transitionDuration = `${M}ms`);
    }
    function f() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: M } = e,
        { dragEl: k, el: I } = M;
      (k.style.width = ""),
        (k.style.height = ""),
        (h = e.isHorizontal() ? I.offsetWidth : I.offsetHeight),
        (m =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (d = h * m)
          : (d = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (k.style.width = `${d}px`)
          : (k.style.height = `${d}px`),
        m >= 1 ? (I.style.display = "none") : (I.style.display = ""),
        e.params.scrollbar.hide && (I.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          M.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function g(M) {
      return e.isHorizontal() ? M.clientX : M.clientY;
    }
    function y(M) {
      const { scrollbar: k, rtlTranslate: I } = e,
        { el: z } = k;
      let D;
      (D =
        (g(M) -
          Ks(z)[e.isHorizontal() ? "left" : "top"] -
          (c !== null ? c : d / 2)) /
        (h - d)),
        (D = Math.max(Math.min(D, 1), 0)),
        I && (D = 1 - D);
      const P = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * D;
      e.updateProgress(P),
        e.setTranslate(P),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function w(M) {
      const k = e.params.scrollbar,
        { scrollbar: I, wrapperEl: z } = e,
        { el: D, dragEl: P } = I;
      (a = !0),
        (c =
          M.target === P
            ? g(M) -
              M.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        M.preventDefault(),
        M.stopPropagation(),
        (z.style.transitionDuration = "100ms"),
        (P.style.transitionDuration = "100ms"),
        y(M),
        clearTimeout(l),
        (D.style.transitionDuration = "0ms"),
        k.hide && (D.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        r("scrollbarDragStart", M);
    }
    function v(M) {
      const { scrollbar: k, wrapperEl: I } = e,
        { el: z, dragEl: D } = k;
      a &&
        (M.preventDefault && M.cancelable
          ? M.preventDefault()
          : (M.returnValue = !1),
        y(M),
        (I.style.transitionDuration = "0ms"),
        (z.style.transitionDuration = "0ms"),
        (D.style.transitionDuration = "0ms"),
        r("scrollbarDragMove", M));
    }
    function b(M) {
      const k = e.params.scrollbar,
        { scrollbar: I, wrapperEl: z } = e,
        { el: D } = I;
      a &&
        ((a = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (z.style.transitionDuration = "")),
        k.hide &&
          (clearTimeout(l),
          (l = Qi(() => {
            (D.style.opacity = 0), (D.style.transitionDuration = "400ms");
          }, 1e3))),
        r("scrollbarDragEnd", M),
        k.snapOnRelease && e.slideToClosest());
    }
    function _(M) {
      const { scrollbar: k, params: I } = e,
        z = k.el;
      if (!z) return;
      const D = z,
        P = I.passiveListeners ? { passive: !1, capture: !1 } : !1,
        O = I.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!D) return;
      const $ = M === "on" ? "addEventListener" : "removeEventListener";
      D[$]("pointerdown", w, P),
        n[$]("pointermove", v, P),
        n[$]("pointerup", b, O);
    }
    function S() {
      !e.params.scrollbar.el || !e.scrollbar.el || _("on");
    }
    function T() {
      !e.params.scrollbar.el || !e.scrollbar.el || _("off");
    }
    function A() {
      const { scrollbar: M, el: k } = e;
      e.params.scrollbar = ca(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const I = e.params.scrollbar;
      if (!I.el) return;
      let z;
      if (
        (typeof I.el == "string" &&
          e.isElement &&
          (z = e.el.querySelector(I.el)),
        !z && typeof I.el == "string")
      ) {
        if (((z = n.querySelectorAll(I.el)), !z.length)) return;
      } else z || (z = I.el);
      e.params.uniqueNavElements &&
        typeof I.el == "string" &&
        z.length > 1 &&
        k.querySelectorAll(I.el).length === 1 &&
        (z = k.querySelector(I.el)),
        z.length > 0 && (z = z[0]),
        z.classList.add(e.isHorizontal() ? I.horizontalClass : I.verticalClass);
      let D;
      z &&
        ((D = z.querySelector(yi(e.params.scrollbar.dragClass))),
        D || ((D = Mt("div", e.params.scrollbar.dragClass)), z.append(D))),
        Object.assign(M, { el: z, dragEl: D }),
        I.draggable && S(),
        z &&
          z.classList[e.enabled ? "remove" : "add"](
            ...Di(e.params.scrollbar.lockClass)
          );
    }
    function x() {
      const M = e.params.scrollbar,
        k = e.scrollbar.el;
      k &&
        k.classList.remove(
          ...Di(e.isHorizontal() ? M.horizontalClass : M.verticalClass)
        ),
        T();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const M = e.params.scrollbar;
      let { el: k } = e.scrollbar;
      (k = ne(k)),
        k.forEach((I) => {
          I.classList.remove(M.horizontalClass, M.verticalClass),
            I.classList.add(
              e.isHorizontal() ? M.horizontalClass : M.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? L() : (A(), f(), p());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        f();
      }),
      i("setTranslate", () => {
        p();
      }),
      i("setTransition", (M, k) => {
        u(k);
      }),
      i("enable disable", () => {
        const { el: M } = e.scrollbar;
        M &&
          M.classList[e.enabled ? "remove" : "add"](
            ...Di(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        x();
      });
    const E = () => {
        e.el.classList.remove(...Di(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...Di(e.params.scrollbar.scrollbarDisabledClass)
            ),
          A(),
          f(),
          p();
      },
      L = () => {
        e.el.classList.add(...Di(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...Di(e.params.scrollbar.scrollbarDisabledClass)
            ),
          x();
      };
    Object.assign(e.scrollbar, {
      enable: E,
      disable: L,
      updateSize: f,
      setTranslate: p,
      init: A,
      destroy: x,
    });
  }
  function Sf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ parallax: { enabled: !1 } });
    const r =
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      n = (l, c) => {
        const { rtl: d } = e,
          h = d ? -1 : 1,
          m = l.getAttribute("data-swiper-parallax") || "0";
        let p = l.getAttribute("data-swiper-parallax-x"),
          u = l.getAttribute("data-swiper-parallax-y");
        const f = l.getAttribute("data-swiper-parallax-scale"),
          g = l.getAttribute("data-swiper-parallax-opacity"),
          y = l.getAttribute("data-swiper-parallax-rotate");
        if (
          (p || u
            ? ((p = p || "0"), (u = u || "0"))
            : e.isHorizontal()
            ? ((p = m), (u = "0"))
            : ((u = m), (p = "0")),
          p.indexOf("%") >= 0
            ? (p = `${parseInt(p, 10) * c * h}%`)
            : (p = `${p * c * h}px`),
          u.indexOf("%") >= 0
            ? (u = `${parseInt(u, 10) * c}%`)
            : (u = `${u * c}px`),
          typeof g < "u" && g !== null)
        ) {
          const v = g - (g - 1) * (1 - Math.abs(c));
          l.style.opacity = v;
        }
        let w = `translate3d(${p}, ${u}, 0px)`;
        if (typeof f < "u" && f !== null) {
          const v = f - (f - 1) * (1 - Math.abs(c));
          w += ` scale(${v})`;
        }
        if (y && typeof y < "u" && y !== null) {
          const v = y * c * -1;
          w += ` rotate(${v}deg)`;
        }
        l.style.transform = w;
      },
      a = () => {
        const { el: l, slides: c, progress: d, snapGrid: h, isElement: m } = e,
          p = Ue(l, r);
        e.isElement && p.push(...Ue(e.hostEl, r)),
          p.forEach((u) => {
            n(u, d);
          }),
          c.forEach((u, f) => {
            let g = u.progress;
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== "auto" &&
              (g += Math.ceil(f / 2) - d * (h.length - 1)),
              (g = Math.min(Math.max(g, -1), 1)),
              u
                .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
                .forEach((y) => {
                  n(y, g);
                });
          });
      },
      o = function (l) {
        l === void 0 && (l = e.params.speed);
        const { el: c, hostEl: d } = e,
          h = [...c.querySelectorAll(r)];
        e.isElement && h.push(...d.querySelectorAll(r)),
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
  function xf(s) {
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
    const d = -3;
    let h, m;
    const p = [],
      u = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3,
      },
      f = {
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
    let y = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return y;
      },
      set(B) {
        if (y !== B) {
          const N = u.imageEl,
            F = u.slideEl;
          r("zoomChange", B, N, F);
        }
        y = B;
      },
    });
    function w() {
      if (p.length < 2) return 1;
      const B = p[0].pageX,
        N = p[0].pageY,
        F = p[1].pageX,
        j = p[1].pageY;
      return Math.sqrt((F - B) ** 2 + (j - N) ** 2);
    }
    function v() {
      const B = e.params.zoom,
        N = u.imageWrapEl.getAttribute("data-swiper-zoom") || B.maxRatio;
      if (B.limitToOriginalSize && u.imageEl && u.imageEl.naturalWidth) {
        const F = u.imageEl.naturalWidth / u.imageEl.offsetWidth;
        return Math.min(F, N);
      }
      return N;
    }
    function b() {
      if (p.length < 2) return { x: null, y: null };
      const B = u.imageEl.getBoundingClientRect();
      return [
        (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - B.x - n.scrollX) / a,
        (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - B.y - n.scrollY) / a,
      ];
    }
    function _() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function S(B) {
      const N = _();
      return !!(
        B.target.matches(N) ||
        e.slides.filter((F) => F.contains(B.target)).length > 0
      );
    }
    function T(B) {
      const N = `.${e.params.zoom.containerClass}`;
      return !!(
        B.target.matches(N) ||
        [...e.hostEl.querySelectorAll(N)].filter((F) => F.contains(B.target))
          .length > 0
      );
    }
    function A(B) {
      if ((B.pointerType === "mouse" && p.splice(0, p.length), !S(B))) return;
      const N = e.params.zoom;
      if (((h = !1), (m = !1), p.push(B), !(p.length < 2))) {
        if (((h = !0), (u.scaleStart = w()), !u.slideEl)) {
          (u.slideEl = B.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
            u.slideEl || (u.slideEl = e.slides[e.activeIndex]);
          let F = u.slideEl.querySelector(`.${N.containerClass}`);
          if (
            (F &&
              (F = F.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
            (u.imageEl = F),
            F
              ? (u.imageWrapEl = er(u.imageEl, `.${N.containerClass}`)[0])
              : (u.imageWrapEl = void 0),
            !u.imageWrapEl)
          ) {
            u.imageEl = void 0;
            return;
          }
          u.maxRatio = v();
        }
        if (u.imageEl) {
          const [F, j] = b();
          (u.originX = F),
            (u.originY = j),
            (u.imageEl.style.transitionDuration = "0ms");
        }
        o = !0;
      }
    }
    function x(B) {
      if (!S(B)) return;
      const N = e.params.zoom,
        F = e.zoom,
        j = p.findIndex((le) => le.pointerId === B.pointerId);
      j >= 0 && (p[j] = B),
        !(p.length < 2) &&
          ((m = !0),
          (u.scaleMove = w()),
          u.imageEl &&
            ((F.scale = (u.scaleMove / u.scaleStart) * a),
            F.scale > u.maxRatio &&
              (F.scale = u.maxRatio - 1 + (F.scale - u.maxRatio + 1) ** 0.5),
            F.scale < N.minRatio &&
              (F.scale = N.minRatio + 1 - (N.minRatio - F.scale + 1) ** 0.5),
            (u.imageEl.style.transform = `translate3d(0,0,0) scale(${F.scale})`)));
    }
    function E(B) {
      if (!S(B) || (B.pointerType === "mouse" && B.type === "pointerout"))
        return;
      const N = e.params.zoom,
        F = e.zoom,
        j = p.findIndex((le) => le.pointerId === B.pointerId);
      j >= 0 && p.splice(j, 1),
        !(!h || !m) &&
          ((h = !1),
          (m = !1),
          u.imageEl &&
            ((F.scale = Math.max(Math.min(F.scale, u.maxRatio), N.minRatio)),
            (u.imageEl.style.transitionDuration = `${e.params.speed}ms`),
            (u.imageEl.style.transform = `translate3d(0,0,0) scale(${F.scale})`),
            (a = F.scale),
            (o = !1),
            F.scale > 1 && u.slideEl
              ? u.slideEl.classList.add(`${N.zoomedSlideClass}`)
              : F.scale <= 1 &&
                u.slideEl &&
                u.slideEl.classList.remove(`${N.zoomedSlideClass}`),
            F.scale === 1 &&
              ((u.originX = 0), (u.originY = 0), (u.slideEl = void 0))));
    }
    let L;
    function M() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function k() {
      clearTimeout(L),
        (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
        (L = setTimeout(() => {
          e.destroyed || M();
        }));
    }
    function I(B) {
      const N = e.device;
      if (!u.imageEl || f.isTouched) return;
      N.android && B.cancelable && B.preventDefault(), (f.isTouched = !0);
      const F = p.length > 0 ? p[0] : B;
      (f.touchesStart.x = F.pageX), (f.touchesStart.y = F.pageY);
    }
    function z(B) {
      const F = B.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
      if (!S(B) || !T(B)) return;
      const j = e.zoom;
      if (!u.imageEl) return;
      if (!f.isTouched || !u.slideEl) {
        F && O(B);
        return;
      }
      if (F) {
        O(B);
        return;
      }
      f.isMoved ||
        ((f.width = u.imageEl.offsetWidth || u.imageEl.clientWidth),
        (f.height = u.imageEl.offsetHeight || u.imageEl.clientHeight),
        (f.startX = Jn(u.imageWrapEl, "x") || 0),
        (f.startY = Jn(u.imageWrapEl, "y") || 0),
        (u.slideWidth = u.slideEl.offsetWidth),
        (u.slideHeight = u.slideEl.offsetHeight),
        (u.imageWrapEl.style.transitionDuration = "0ms"));
      const le = f.width * j.scale,
        Qe = f.height * j.scale;
      if (
        ((f.minX = Math.min(u.slideWidth / 2 - le / 2, 0)),
        (f.maxX = -f.minX),
        (f.minY = Math.min(u.slideHeight / 2 - Qe / 2, 0)),
        (f.maxY = -f.minY),
        (f.touchesCurrent.x = p.length > 0 ? p[0].pageX : B.pageX),
        (f.touchesCurrent.y = p.length > 0 ? p[0].pageY : B.pageY),
        Math.max(
          Math.abs(f.touchesCurrent.x - f.touchesStart.x),
          Math.abs(f.touchesCurrent.y - f.touchesStart.y)
        ) > 5 && (e.allowClick = !1),
        !f.isMoved && !o)
      ) {
        if (
          e.isHorizontal() &&
          ((Math.floor(f.minX) === Math.floor(f.startX) &&
            f.touchesCurrent.x < f.touchesStart.x) ||
            (Math.floor(f.maxX) === Math.floor(f.startX) &&
              f.touchesCurrent.x > f.touchesStart.x))
        ) {
          (f.isTouched = !1), M();
          return;
        }
        if (
          !e.isHorizontal() &&
          ((Math.floor(f.minY) === Math.floor(f.startY) &&
            f.touchesCurrent.y < f.touchesStart.y) ||
            (Math.floor(f.maxY) === Math.floor(f.startY) &&
              f.touchesCurrent.y > f.touchesStart.y))
        ) {
          (f.isTouched = !1), M();
          return;
        }
      }
      B.cancelable && B.preventDefault(),
        B.stopPropagation(),
        k(),
        (f.isMoved = !0);
      const xe = (j.scale - a) / (u.maxRatio - e.params.zoom.minRatio),
        { originX: J, originY: se } = u;
      (f.currentX =
        f.touchesCurrent.x -
        f.touchesStart.x +
        f.startX +
        xe * (f.width - J * 2)),
        (f.currentY =
          f.touchesCurrent.y -
          f.touchesStart.y +
          f.startY +
          xe * (f.height - se * 2)),
        f.currentX < f.minX &&
          (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
        f.currentX > f.maxX &&
          (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
        f.currentY < f.minY &&
          (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
        f.currentY > f.maxY &&
          (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
        g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
        g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
        g.prevTime || (g.prevTime = Date.now()),
        (g.x =
          (f.touchesCurrent.x - g.prevPositionX) /
          (Date.now() - g.prevTime) /
          2),
        (g.y =
          (f.touchesCurrent.y - g.prevPositionY) /
          (Date.now() - g.prevTime) /
          2),
        Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
        Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
        (g.prevPositionX = f.touchesCurrent.x),
        (g.prevPositionY = f.touchesCurrent.y),
        (g.prevTime = Date.now()),
        (u.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
    }
    function D() {
      const B = e.zoom;
      if (((p.length = 0), !u.imageEl)) return;
      if (!f.isTouched || !f.isMoved) {
        (f.isTouched = !1), (f.isMoved = !1);
        return;
      }
      (f.isTouched = !1), (f.isMoved = !1);
      let N = 300,
        F = 300;
      const j = g.x * N,
        le = f.currentX + j,
        Qe = g.y * F,
        Se = f.currentY + Qe;
      g.x !== 0 && (N = Math.abs((le - f.currentX) / g.x)),
        g.y !== 0 && (F = Math.abs((Se - f.currentY) / g.y));
      const xe = Math.max(N, F);
      (f.currentX = le), (f.currentY = Se);
      const J = f.width * B.scale,
        se = f.height * B.scale;
      (f.minX = Math.min(u.slideWidth / 2 - J / 2, 0)),
        (f.maxX = -f.minX),
        (f.minY = Math.min(u.slideHeight / 2 - se / 2, 0)),
        (f.maxY = -f.minY),
        (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
        (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
        (u.imageWrapEl.style.transitionDuration = `${xe}ms`),
        (u.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
    }
    function P() {
      const B = e.zoom;
      u.slideEl &&
        e.activeIndex !== e.slides.indexOf(u.slideEl) &&
        (u.imageEl &&
          (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        u.imageWrapEl && (u.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        u.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
        (B.scale = 1),
        (a = 1),
        (u.slideEl = void 0),
        (u.imageEl = void 0),
        (u.imageWrapEl = void 0),
        (u.originX = 0),
        (u.originY = 0));
    }
    function O(B) {
      if (a <= 1 || !u.imageWrapEl || !S(B) || !T(B)) return;
      const N = n.getComputedStyle(u.imageWrapEl).transform,
        F = new n.DOMMatrix(N);
      if (!l) {
        (l = !0),
          (c.x = B.clientX),
          (c.y = B.clientY),
          (f.startX = F.e),
          (f.startY = F.f),
          (f.width = u.imageEl.offsetWidth || u.imageEl.clientWidth),
          (f.height = u.imageEl.offsetHeight || u.imageEl.clientHeight),
          (u.slideWidth = u.slideEl.offsetWidth),
          (u.slideHeight = u.slideEl.offsetHeight);
        return;
      }
      const j = (B.clientX - c.x) * d,
        le = (B.clientY - c.y) * d,
        Qe = f.width * a,
        Se = f.height * a,
        xe = u.slideWidth,
        J = u.slideHeight,
        se = Math.min(xe / 2 - Qe / 2, 0),
        ye = -se,
        qe = Math.min(J / 2 - Se / 2, 0),
        R = -qe,
        $e = Math.max(Math.min(f.startX + j, ye), se),
        ot = Math.max(Math.min(f.startY + le, R), qe);
      (u.imageWrapEl.style.transitionDuration = "0ms"),
        (u.imageWrapEl.style.transform = `translate3d(${$e}px, ${ot}px, 0)`),
        (c.x = B.clientX),
        (c.y = B.clientY),
        (f.startX = $e),
        (f.startY = ot),
        (f.currentX = $e),
        (f.currentY = ot);
    }
    function $(B) {
      const N = e.zoom,
        F = e.params.zoom;
      if (!u.slideEl) {
        B &&
          B.target &&
          (u.slideEl = B.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
          u.slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (u.slideEl = Ue(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (u.slideEl = e.slides[e.activeIndex]));
        let Xe = u.slideEl.querySelector(`.${F.containerClass}`);
        Xe &&
          (Xe = Xe.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (u.imageEl = Xe),
          Xe
            ? (u.imageWrapEl = er(u.imageEl, `.${F.containerClass}`)[0])
            : (u.imageWrapEl = void 0);
      }
      if (!u.imageEl || !u.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        u.slideEl.classList.add(`${F.zoomedSlideClass}`);
      let j, le, Qe, Se, xe, J, se, ye, qe, R, $e, ot, Bt, ge, Ft, Kt, ti, Pe;
      typeof f.touchesStart.x > "u" && B
        ? ((j = B.pageX), (le = B.pageY))
        : ((j = f.touchesStart.x), (le = f.touchesStart.y));
      const Qt = a,
        pe = typeof B == "number" ? B : null;
      a === 1 &&
        pe &&
        ((j = void 0),
        (le = void 0),
        (f.touchesStart.x = void 0),
        (f.touchesStart.y = void 0));
      const At = v();
      (N.scale = pe || At),
        (a = pe || At),
        B && !(a === 1 && pe)
          ? ((ti = u.slideEl.offsetWidth),
            (Pe = u.slideEl.offsetHeight),
            (Qe = Ks(u.slideEl).left + n.scrollX),
            (Se = Ks(u.slideEl).top + n.scrollY),
            (xe = Qe + ti / 2 - j),
            (J = Se + Pe / 2 - le),
            (qe = u.imageEl.offsetWidth || u.imageEl.clientWidth),
            (R = u.imageEl.offsetHeight || u.imageEl.clientHeight),
            ($e = qe * N.scale),
            (ot = R * N.scale),
            (Bt = Math.min(ti / 2 - $e / 2, 0)),
            (ge = Math.min(Pe / 2 - ot / 2, 0)),
            (Ft = -Bt),
            (Kt = -ge),
            Qt > 0 &&
            pe &&
            typeof f.currentX == "number" &&
            typeof f.currentY == "number"
              ? ((se = (f.currentX * N.scale) / Qt),
                (ye = (f.currentY * N.scale) / Qt))
              : ((se = xe * N.scale), (ye = J * N.scale)),
            se < Bt && (se = Bt),
            se > Ft && (se = Ft),
            ye < ge && (ye = ge),
            ye > Kt && (ye = Kt))
          : ((se = 0), (ye = 0)),
        pe && N.scale === 1 && ((u.originX = 0), (u.originY = 0)),
        (f.currentX = se),
        (f.currentY = ye),
        (u.imageWrapEl.style.transitionDuration = "300ms"),
        (u.imageWrapEl.style.transform = `translate3d(${se}px, ${ye}px,0)`),
        (u.imageEl.style.transitionDuration = "300ms"),
        (u.imageEl.style.transform = `translate3d(0,0,0) scale(${N.scale})`);
    }
    function C() {
      const B = e.zoom,
        N = e.params.zoom;
      if (!u.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (u.slideEl = Ue(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
          : (u.slideEl = e.slides[e.activeIndex]);
        let F = u.slideEl.querySelector(`.${N.containerClass}`);
        F &&
          (F = F.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (u.imageEl = F),
          F
            ? (u.imageWrapEl = er(u.imageEl, `.${N.containerClass}`)[0])
            : (u.imageWrapEl = void 0);
      }
      !u.imageEl ||
        !u.imageWrapEl ||
        (e.params.cssMode &&
          ((e.wrapperEl.style.overflow = ""),
          (e.wrapperEl.style.touchAction = "")),
        (B.scale = 1),
        (a = 1),
        (f.currentX = void 0),
        (f.currentY = void 0),
        (f.touchesStart.x = void 0),
        (f.touchesStart.y = void 0),
        (u.imageWrapEl.style.transitionDuration = "300ms"),
        (u.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        (u.imageEl.style.transitionDuration = "300ms"),
        (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        u.slideEl.classList.remove(`${N.zoomedSlideClass}`),
        (u.slideEl = void 0),
        (u.originX = 0),
        (u.originY = 0),
        e.params.zoom.panOnMouseMove &&
          ((c = { x: 0, y: 0 }),
          l && ((l = !1), (f.startX = 0), (f.startY = 0))));
    }
    function H(B) {
      const N = e.zoom;
      N.scale && N.scale !== 1 ? C() : $(B);
    }
    function Z() {
      const B = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
        N = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: B, activeListenerWithCapture: N };
    }
    function fe() {
      const B = e.zoom;
      if (B.enabled) return;
      B.enabled = !0;
      const { passiveListener: N, activeListenerWithCapture: F } = Z();
      e.wrapperEl.addEventListener("pointerdown", A, N),
        e.wrapperEl.addEventListener("pointermove", x, F),
        ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
          e.wrapperEl.addEventListener(j, E, N);
        }),
        e.wrapperEl.addEventListener("pointermove", z, F);
    }
    function ce() {
      const B = e.zoom;
      if (!B.enabled) return;
      B.enabled = !1;
      const { passiveListener: N, activeListenerWithCapture: F } = Z();
      e.wrapperEl.removeEventListener("pointerdown", A, N),
        e.wrapperEl.removeEventListener("pointermove", x, F),
        ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
          e.wrapperEl.removeEventListener(j, E, N);
        }),
        e.wrapperEl.removeEventListener("pointermove", z, F);
    }
    i("init", () => {
      e.params.zoom.enabled && fe();
    }),
      i("destroy", () => {
        ce();
      }),
      i("touchStart", (B, N) => {
        e.zoom.enabled && I(N);
      }),
      i("touchEnd", (B, N) => {
        e.zoom.enabled && D();
      }),
      i("doubleTap", (B, N) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          H(N);
      }),
      i("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && P();
      }),
      i("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && P();
      }),
      Object.assign(e.zoom, {
        enable: fe,
        disable: ce,
        in: $,
        out: C,
        toggle: H,
      });
  }
  function Tf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
    function r(c, d) {
      const h = (function () {
        let f, g, y;
        return (w, v) => {
          for (g = -1, f = w.length; f - g > 1; )
            (y = (f + g) >> 1), w[y] <= v ? (g = y) : (f = y);
          return f;
        };
      })();
      (this.x = c), (this.y = d), (this.lastIndex = c.length - 1);
      let m, p;
      return (
        (this.interpolate = function (f) {
          return f
            ? ((p = h(this.x, f)),
              (m = p - 1),
              ((f - this.x[m]) * (this.y[p] - this.y[m])) /
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
    function a(c, d) {
      const h = e.controller.control;
      let m, p;
      const u = e.constructor;
      function f(g) {
        if (g.destroyed) return;
        const y = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (n(g), (p = -e.controller.spline.interpolate(-y))),
          (!p || e.params.controller.by === "container") &&
            ((m =
              (g.maxTranslate() - g.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (Number.isNaN(m) || !Number.isFinite(m)) && (m = 1),
            (p = (y - e.minTranslate()) * m + g.minTranslate())),
          e.params.controller.inverse && (p = g.maxTranslate() - p),
          g.updateProgress(p),
          g.setTranslate(p, e),
          g.updateActiveIndex(),
          g.updateSlidesClasses();
      }
      if (Array.isArray(h))
        for (let g = 0; g < h.length; g += 1)
          h[g] !== d && h[g] instanceof u && f(h[g]);
      else h instanceof u && d !== h && f(h);
    }
    function o(c, d) {
      const h = e.constructor,
        m = e.controller.control;
      let p;
      function u(f) {
        f.destroyed ||
          (f.setTransition(c, e),
          c !== 0 &&
            (f.transitionStart(),
            f.params.autoHeight &&
              Qi(() => {
                f.updateAutoHeight();
              }),
            os(f.wrapperEl, () => {
              m && f.transitionEnd();
            })));
      }
      if (Array.isArray(m))
        for (p = 0; p < m.length; p += 1)
          m[p] !== d && m[p] instanceof h && u(m[p]);
      else m instanceof h && d !== m && u(m);
    }
    function l() {
      e.controller.control &&
        e.controller.spline &&
        ((e.controller.spline = void 0), delete e.controller.spline);
    }
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
            const h = `${e.params.eventsPrefix}init`,
              m = (p) => {
                e.controller.control.push(p.detail[0]),
                  e.update(),
                  d.removeEventListener(h, m);
              };
            d.addEventListener(h, m);
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
      i("setTranslate", (c, d, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTranslate(d, h);
      }),
      i("setTransition", (c, d, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTransition(d, h);
      }),
      Object.assign(e.controller, { setTranslate: a, setTransition: o });
  }
  function Ef(s) {
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
    function l(P) {
      const O = r;
      O.length !== 0 && ((O.innerHTML = ""), (O.innerHTML = P));
    }
    function c(P) {
      const O = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(P).replace(/x/g, O);
    }
    function d(P) {
      (P = ne(P)),
        P.forEach((O) => {
          O.setAttribute("tabIndex", "0");
        });
    }
    function h(P) {
      (P = ne(P)),
        P.forEach((O) => {
          O.setAttribute("tabIndex", "-1");
        });
    }
    function m(P, O) {
      (P = ne(P)),
        P.forEach(($) => {
          $.setAttribute("role", O);
        });
    }
    function p(P, O) {
      (P = ne(P)),
        P.forEach(($) => {
          $.setAttribute("aria-roledescription", O);
        });
    }
    function u(P, O) {
      (P = ne(P)),
        P.forEach(($) => {
          $.setAttribute("aria-controls", O);
        });
    }
    function f(P, O) {
      (P = ne(P)),
        P.forEach(($) => {
          $.setAttribute("aria-label", O);
        });
    }
    function g(P, O) {
      (P = ne(P)),
        P.forEach(($) => {
          $.setAttribute("id", O);
        });
    }
    function y(P, O) {
      (P = ne(P)),
        P.forEach(($) => {
          $.setAttribute("aria-live", O);
        });
    }
    function w(P) {
      (P = ne(P)),
        P.forEach((O) => {
          O.setAttribute("aria-disabled", !0);
        });
    }
    function v(P) {
      (P = ne(P)),
        P.forEach((O) => {
          O.setAttribute("aria-disabled", !1);
        });
    }
    function b(P) {
      if (P.keyCode !== 13 && P.keyCode !== 32) return;
      const O = e.params.a11y,
        $ = P.target;
      if (
        !(
          e.pagination &&
          e.pagination.el &&
          ($ === e.pagination.el || e.pagination.el.contains(P.target)) &&
          !P.target.matches(yi(e.params.pagination.bulletClass))
        )
      ) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const C = ne(e.navigation.prevEl);
          ne(e.navigation.nextEl).includes($) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? l(O.lastSlideMessage) : l(O.nextSlideMessage)),
            C.includes($) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? l(O.firstSlideMessage) : l(O.prevSlideMessage));
        }
        e.pagination &&
          $.matches(yi(e.params.pagination.bulletClass)) &&
          $.click();
      }
    }
    function _() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: P, prevEl: O } = e.navigation;
      O && (e.isBeginning ? (w(O), h(O)) : (v(O), d(O))),
        P && (e.isEnd ? (w(P), h(P)) : (v(P), d(P)));
    }
    function S() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function T() {
      return S() && e.params.pagination.clickable;
    }
    function A() {
      const P = e.params.a11y;
      S() &&
        e.pagination.bullets.forEach((O) => {
          e.params.pagination.clickable &&
            (d(O),
            e.params.pagination.renderBullet ||
              (m(O, "button"),
              f(
                O,
                P.paginationBulletMessage.replace(/\{\{index\}\}/, as(O) + 1)
              ))),
            O.matches(yi(e.params.pagination.bulletActiveClass))
              ? O.setAttribute("aria-current", "true")
              : O.removeAttribute("aria-current");
        });
    }
    const x = (P, O, $) => {
        d(P),
          P.tagName !== "BUTTON" &&
            (m(P, "button"), P.addEventListener("keydown", b)),
          f(P, $),
          u(P, O);
      },
      E = (P) => {
        a && a !== P.target && !a.contains(P.target) && (n = !0),
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
      M = (P) => {
        o = new Date().getTime();
      },
      k = (P) => {
        if (
          e.a11y.clicked ||
          !e.params.a11y.scrollOnFocus ||
          new Date().getTime() - o < 100
        )
          return;
        const O = P.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!O || !e.slides.includes(O)) return;
        a = O;
        const $ = e.slides.indexOf(O) === e.activeIndex,
          C =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(O);
        $ ||
          C ||
          (P.sourceCapabilities && P.sourceCapabilities.firesTouchEvents) ||
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
      I = () => {
        const P = e.params.a11y;
        P.itemRoleDescriptionMessage &&
          p(e.slides, P.itemRoleDescriptionMessage),
          P.slideRole && m(e.slides, P.slideRole);
        const O = e.slides.length;
        P.slideLabelMessage &&
          e.slides.forEach(($, C) => {
            const H = e.params.loop
                ? parseInt($.getAttribute("data-swiper-slide-index"), 10)
                : C,
              Z = P.slideLabelMessage
                .replace(/\{\{index\}\}/, H + 1)
                .replace(/\{\{slidesLength\}\}/, O);
            f($, Z);
          });
      },
      z = () => {
        const P = e.params.a11y;
        e.el.append(r);
        const O = e.el;
        P.containerRoleDescriptionMessage &&
          p(O, P.containerRoleDescriptionMessage),
          P.containerMessage && f(O, P.containerMessage),
          P.containerRole && m(O, P.containerRole);
        const $ = e.wrapperEl,
          C = P.id || $.getAttribute("id") || `swiper-wrapper-${c(16)}`,
          H = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        g($, C), y($, H), I();
        let { nextEl: Z, prevEl: fe } = e.navigation ? e.navigation : {};
        (Z = ne(Z)),
          (fe = ne(fe)),
          Z && Z.forEach((B) => x(B, C, P.nextSlideMessage)),
          fe && fe.forEach((B) => x(B, C, P.prevSlideMessage)),
          T() &&
            ne(e.pagination.el).forEach((N) => {
              N.addEventListener("keydown", b);
            }),
          Ve().addEventListener("visibilitychange", M),
          e.el.addEventListener("focus", k, !0),
          e.el.addEventListener("focus", k, !0),
          e.el.addEventListener("pointerdown", E, !0),
          e.el.addEventListener("pointerup", L, !0);
      };
    function D() {
      r && r.remove();
      let { nextEl: P, prevEl: O } = e.navigation ? e.navigation : {};
      (P = ne(P)),
        (O = ne(O)),
        P && P.forEach((C) => C.removeEventListener("keydown", b)),
        O && O.forEach((C) => C.removeEventListener("keydown", b)),
        T() &&
          ne(e.pagination.el).forEach((H) => {
            H.removeEventListener("keydown", b);
          }),
        Ve().removeEventListener("visibilitychange", M),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", k, !0),
          e.el.removeEventListener("pointerdown", E, !0),
          e.el.removeEventListener("pointerup", L, !0));
    }
    i("beforeInit", () => {
      (r = Mt("span", e.params.a11y.notificationClass)),
        r.setAttribute("aria-live", "assertive"),
        r.setAttribute("aria-atomic", "true");
    }),
      i("afterInit", () => {
        e.params.a11y.enabled && z();
      }),
      i(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          e.params.a11y.enabled && I();
        }
      ),
      i("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && _();
      }),
      i("paginationUpdate", () => {
        e.params.a11y.enabled && A();
      }),
      i("destroy", () => {
        e.params.a11y.enabled && D();
      });
  }
  function Af(s) {
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
        const u = be();
        let f;
        p ? (f = new URL(p)) : (f = u.location);
        const g = f.pathname
            .slice(1)
            .split("/")
            .filter((b) => b !== ""),
          y = g.length,
          w = g[y - 2],
          v = g[y - 1];
        return { key: w, value: v };
      },
      l = (p, u) => {
        const f = be();
        if (!r || !e.params.history.enabled) return;
        let g;
        e.params.url ? (g = new URL(e.params.url)) : (g = f.location);
        const y =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(`[data-swiper-slide-index="${u}"]`)
            : e.slides[u];
        let w = a(y.getAttribute("data-history"));
        if (e.params.history.root.length > 0) {
          let b = e.params.history.root;
          b[b.length - 1] === "/" && (b = b.slice(0, b.length - 1)),
            (w = `${b}/${p ? `${p}/` : ""}${w}`);
        } else g.pathname.includes(p) || (w = `${p ? `${p}/` : ""}${w}`);
        e.params.history.keepQuery && (w += g.search);
        const v = f.history.state;
        (v && v.value === w) ||
          (e.params.history.replaceState
            ? f.history.replaceState({ value: w }, null, w)
            : f.history.pushState({ value: w }, null, w));
      },
      c = (p, u, f) => {
        if (u)
          for (let g = 0, y = e.slides.length; g < y; g += 1) {
            const w = e.slides[g];
            if (a(w.getAttribute("data-history")) === u) {
              const b = e.getSlideIndex(w);
              e.slideTo(b, p, f);
            }
          }
        else e.slideTo(0, p, f);
      },
      d = () => {
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
            e.params.history.replaceState || p.addEventListener("popstate", d);
            return;
          }
          c(0, n.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || p.addEventListener("popstate", d);
        }
      },
      m = () => {
        const p = be();
        e.params.history.replaceState || p.removeEventListener("popstate", d);
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
  function Cf(s) {
    let { swiper: e, extendParams: t, emit: i, on: r } = s,
      n = !1;
    const a = Ve(),
      o = be();
    t({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
        getSlideIndex(m, p) {
          if (e.virtual && e.params.virtual.enabled) {
            const u = e.slides.find((g) => g.getAttribute("data-hash") === p);
            return u
              ? parseInt(u.getAttribute("data-swiper-slide-index"), 10)
              : 0;
          }
          return e.getSlideIndex(
            Ue(
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
          u = p ? p.getAttribute("data-hash") : "";
        if (m !== u) {
          const f = e.params.hashNavigation.getSlideIndex(e, m);
          if (typeof f > "u" || Number.isNaN(f)) return;
          e.slideTo(f);
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
      d = () => {
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        n = !0;
        const m = a.location.hash.replace("#", "");
        if (m) {
          const u = e.params.hashNavigation.getSlideIndex(e, m);
          e.slideTo(u || 0, 0, e.params.runCallbacksOnInit, !0);
        }
        e.params.hashNavigation.watchState &&
          o.addEventListener("hashchange", l);
      },
      h = () => {
        e.params.hashNavigation.watchState &&
          o.removeEventListener("hashchange", l);
      };
    r("init", () => {
      e.params.hashNavigation.enabled && d();
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
  function Mf(s) {
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
      d,
      h = new Date().getTime(),
      m,
      p,
      u,
      f,
      g,
      y,
      w;
    function v(O) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (O.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", v),
          !(w || (O.detail && O.detail.bySwiperTouchMove)) && E()));
    }
    const b = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (m = !0) : m && ((c = d), (m = !1));
        const O = e.autoplay.paused ? d : h + c - new Date().getTime();
        (e.autoplay.timeLeft = O),
          r("autoplayTimeLeft", O, O / l),
          (o = requestAnimationFrame(() => {
            b();
          }));
      },
      _ = () => {
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
        cancelAnimationFrame(o), b();
        let $ = typeof O > "u" ? e.params.autoplay.delay : O;
        (l = e.params.autoplay.delay), (c = e.params.autoplay.delay);
        const C = _();
        !Number.isNaN(C) &&
          C > 0 &&
          typeof O > "u" &&
          (($ = C), (l = C), (c = C)),
          (d = $);
        const H = e.params.speed,
          Z = () => {
            !e ||
              e.destroyed ||
              (e.params.autoplay.reverseDirection
                ? !e.isBeginning || e.params.loop || e.params.rewind
                  ? (e.slidePrev(H, !0, !0), r("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(e.slides.length - 1, H, !0, !0), r("autoplay"))
                : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(H, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, H, !0, !0), r("autoplay")),
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
                Z();
              }, $)))
            : requestAnimationFrame(() => {
                Z();
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
      A = () => {
        (e.autoplay.running = !1),
          clearTimeout(a),
          cancelAnimationFrame(o),
          r("autoplayStop");
      },
      x = (O, $) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(a), O || (y = !0);
        const C = () => {
          r("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", v)
              : E();
        };
        if (((e.autoplay.paused = !0), $)) {
          g && (d = e.params.autoplay.delay), (g = !1), C();
          return;
        }
        (d = (d || e.params.autoplay.delay) - (new Date().getTime() - h)),
          !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), C());
      },
      E = () => {
        (e.isEnd && d < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((h = new Date().getTime()),
          y ? ((y = !1), S(d)) : S(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      L = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const O = Ve();
        O.visibilityState === "hidden" && ((y = !0), x(!0)),
          O.visibilityState === "visible" && E();
      },
      M = (O) => {
        O.pointerType === "mouse" &&
          ((y = !0), (w = !0), !(e.animating || e.autoplay.paused) && x(!0));
      },
      k = (O) => {
        O.pointerType === "mouse" && ((w = !1), e.autoplay.paused && E());
      },
      I = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", M),
          e.el.addEventListener("pointerleave", k));
      },
      z = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", M),
          e.el.removeEventListener("pointerleave", k));
      },
      D = () => {
        Ve().addEventListener("visibilitychange", L);
      },
      P = () => {
        Ve().removeEventListener("visibilitychange", L);
      };
    i("init", () => {
      e.params.autoplay.enabled && (I(), D(), T());
    }),
      i("destroy", () => {
        z(), P(), e.autoplay.running && A();
      }),
      i("_freeModeStaticRelease", () => {
        (u || y) && E();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? A() : x(!0, !0);
      }),
      i("beforeTransitionStart", (O, $, C) => {
        e.destroyed ||
          !e.autoplay.running ||
          (C || !e.params.autoplay.disableOnInteraction ? x(!0, !0) : A());
      }),
      i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (e.params.autoplay.disableOnInteraction) {
            A();
            return;
          }
          (p = !0),
            (u = !1),
            (y = !1),
            (f = setTimeout(() => {
              (y = !0), (u = !0), x(!0);
            }, 200));
        }
      }),
      i("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !p)) {
          if (
            (clearTimeout(f),
            clearTimeout(a),
            e.params.autoplay.disableOnInteraction)
          ) {
            (u = !1), (p = !1);
            return;
          }
          u && e.params.cssMode && E(), (u = !1), (p = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (g = !0);
      }),
      Object.assign(e.autoplay, { start: T, stop: A, pause: x, resume: E });
  }
  function Pf(s) {
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
      const d = c.clickedIndex,
        h = c.clickedSlide;
      if (
        (h && h.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
        typeof d > "u" ||
        d === null
      )
        return;
      let m;
      c.params.loop
        ? (m = parseInt(
            c.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (m = d),
        e.params.loop ? e.slideToLoop(m) : e.slideTo(m);
    }
    function o() {
      const { thumbs: c } = e.params;
      if (r) return !1;
      r = !0;
      const d = e.constructor;
      if (c.swiper instanceof d) {
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
      } else if (ss(c.swiper)) {
        const h = Object.assign({}, c.swiper);
        Object.assign(h, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new d(h)),
          (n = !0);
      }
      return (
        e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", a),
        !0
      );
    }
    function l(c) {
      const d = e.thumbs.swiper;
      if (!d || d.destroyed) return;
      const h =
        d.params.slidesPerView === "auto"
          ? d.slidesPerViewDynamic()
          : d.params.slidesPerView;
      let m = 1;
      const p = e.params.thumbs.slideThumbActiveClass;
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (m = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (m = 1),
        (m = Math.floor(m)),
        d.slides.forEach((g) => g.classList.remove(p)),
        d.params.loop || (d.params.virtual && d.params.virtual.enabled))
      )
        for (let g = 0; g < m; g += 1)
          Ue(
            d.slidesEl,
            `[data-swiper-slide-index="${e.realIndex + g}"]`
          ).forEach((y) => {
            y.classList.add(p);
          });
      else
        for (let g = 0; g < m; g += 1)
          d.slides[e.realIndex + g] &&
            d.slides[e.realIndex + g].classList.add(p);
      const u = e.params.thumbs.autoScrollOffset,
        f = u && !d.params.loop;
      if (e.realIndex !== d.realIndex || f) {
        const g = d.activeIndex;
        let y, w;
        if (d.params.loop) {
          const v = d.slides.find(
            (b) =>
              b.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
          );
          (y = d.slides.indexOf(v)),
            (w = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (y = e.realIndex), (w = y > e.previousIndex ? "next" : "prev");
        f && (y += w === "next" ? u : -1 * u),
          d.visibleSlidesIndexes &&
            d.visibleSlidesIndexes.indexOf(y) < 0 &&
            (d.params.centeredSlides &&
              (y > g
                ? (y = y - Math.floor(h / 2) + 1)
                : (y = y + Math.floor(h / 2) - 1)),
            d.slideTo(y, c ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const { thumbs: c } = e.params;
      if (!(!c || !c.swiper))
        if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
          const d = Ve(),
            h = () => {
              const p =
                typeof c.swiper == "string"
                  ? d.querySelector(c.swiper)
                  : c.swiper;
              if (p && p.swiper) (c.swiper = p.swiper), o(), l(!0);
              else if (p) {
                const u = `${e.params.eventsPrefix}init`,
                  f = (g) => {
                    (c.swiper = g.detail[0]),
                      p.removeEventListener(u, f),
                      o(),
                      l(!0),
                      c.swiper.update(),
                      e.update();
                  };
                p.addEventListener(u, f);
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
      i("setTransition", (c, d) => {
        const h = e.thumbs.swiper;
        !h || h.destroyed || h.setTransition(d);
      }),
      i("beforeDestroy", () => {
        const c = e.thumbs.swiper;
        !c || c.destroyed || (n && c.destroy());
      }),
      Object.assign(e.thumbs, { init: o, update: l });
  }
  function kf(s) {
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
          time: Yt(),
        });
    }
    function o(l) {
      let { currentPos: c } = l;
      if (e.params.cssMode) return;
      const {
          params: d,
          wrapperEl: h,
          rtlTranslate: m,
          snapGrid: p,
          touchEventsData: u,
        } = e,
        g = Yt() - u.touchStartTime;
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
      if (d.freeMode.momentum) {
        if (u.velocities.length > 1) {
          const A = u.velocities.pop(),
            x = u.velocities.pop(),
            E = A.position - x.position,
            L = A.time - x.time;
          (e.velocity = E / L),
            (e.velocity /= 2),
            Math.abs(e.velocity) < d.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (L > 150 || Yt() - A.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= d.freeMode.momentumVelocityRatio),
          (u.velocities.length = 0);
        let y = 1e3 * d.freeMode.momentumRatio;
        const w = e.velocity * y;
        let v = e.translate + w;
        m && (v = -v);
        let b = !1,
          _;
        const S = Math.abs(e.velocity) * 20 * d.freeMode.momentumBounceRatio;
        let T;
        if (v < e.maxTranslate())
          d.freeMode.momentumBounce
            ? (v + e.maxTranslate() < -S && (v = e.maxTranslate() - S),
              (_ = e.maxTranslate()),
              (b = !0),
              (u.allowMomentumBounce = !0))
            : (v = e.maxTranslate()),
            d.loop && d.centeredSlides && (T = !0);
        else if (v > e.minTranslate())
          d.freeMode.momentumBounce
            ? (v - e.minTranslate() > S && (v = e.minTranslate() + S),
              (_ = e.minTranslate()),
              (b = !0),
              (u.allowMomentumBounce = !0))
            : (v = e.minTranslate()),
            d.loop && d.centeredSlides && (T = !0);
        else if (d.freeMode.sticky) {
          let A;
          for (let x = 0; x < p.length; x += 1)
            if (p[x] > -v) {
              A = x;
              break;
            }
          Math.abs(p[A] - v) < Math.abs(p[A - 1] - v) ||
          e.swipeDirection === "next"
            ? (v = p[A])
            : (v = p[A - 1]),
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
              ? (y = Math.abs((-v - e.translate) / e.velocity))
              : (y = Math.abs((v - e.translate) / e.velocity)),
            d.freeMode.sticky)
          ) {
            const A = Math.abs((m ? -v : v) - e.translate),
              x = e.slidesSizesGrid[e.activeIndex];
            A < x
              ? (y = d.speed)
              : A < 2 * x
              ? (y = d.speed * 1.5)
              : (y = d.speed * 2.5);
          }
        } else if (d.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        d.freeMode.momentumBounce && b
          ? (e.updateProgress(_),
            e.setTransition(y),
            e.setTranslate(v),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            os(h, () => {
              !e ||
                e.destroyed ||
                !u.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(d.speed),
                setTimeout(() => {
                  e.setTranslate(_),
                    os(h, () => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (i("_freeModeNoMomentumRelease"),
            e.updateProgress(v),
            e.setTransition(y),
            e.setTranslate(v),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              os(h, () => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(v),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (d.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else d.freeMode && i("_freeModeNoMomentumRelease");
      (!d.freeMode.momentum || g >= d.longSwipesMs) &&
        (i("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: { onTouchStart: n, onTouchMove: a, onTouchEnd: o },
    });
  }
  function Of(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ grid: { rows: 1, fill: "column" } });
    let r, n, a, o;
    const l = () => {
        let f = e.params.spaceBetween;
        return (
          typeof f == "string" && f.indexOf("%") >= 0
            ? (f = (parseFloat(f.replace("%", "")) / 100) * e.size)
            : typeof f == "string" && (f = parseFloat(f)),
          f
        );
      },
      c = (f) => {
        const { slidesPerView: g } = e.params,
          { rows: y, fill: w } = e.params.grid,
          v =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : f.length;
        (a = Math.floor(v / y)),
          Math.floor(v / y) === v / y ? (r = v) : (r = Math.ceil(v / y) * y),
          g !== "auto" && w === "row" && (r = Math.max(r, g * y)),
          (n = r / y);
      },
      d = () => {
        e.slides &&
          e.slides.forEach((f) => {
            f.swiperSlideGridSet &&
              ((f.style.height = ""),
              (f.style[e.getDirectionLabel("margin-top")] = ""));
          });
      },
      h = (f, g, y) => {
        const { slidesPerGroup: w } = e.params,
          v = l(),
          { rows: b, fill: _ } = e.params.grid,
          S =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : y.length;
        let T, A, x;
        if (_ === "row" && w > 1) {
          const E = Math.floor(f / (w * b)),
            L = f - b * w * E,
            M = E === 0 ? w : Math.min(Math.ceil((S - E * b * w) / b), w);
          (x = Math.floor(L / M)),
            (A = L - x * M + E * w),
            (T = A + (x * r) / b),
            (g.style.order = T);
        } else
          _ === "column"
            ? ((A = Math.floor(f / b)),
              (x = f - A * b),
              (A > a || (A === a && x === b - 1)) &&
                ((x += 1), x >= b && ((x = 0), (A += 1))))
            : ((x = Math.floor(f / n)), (A = f - x * n));
        (g.row = x),
          (g.column = A),
          (g.style.height = `calc((100% - ${(b - 1) * v}px) / ${b})`),
          (g.style[e.getDirectionLabel("margin-top")] =
            x !== 0 ? v && `${v}px` : ""),
          (g.swiperSlideGridSet = !0);
      },
      m = (f, g) => {
        const { centeredSlides: y, roundLengths: w } = e.params,
          v = l(),
          { rows: b } = e.params.grid;
        if (
          ((e.virtualSize = (f + v) * r),
          (e.virtualSize = Math.ceil(e.virtualSize / b) - v),
          e.params.cssMode ||
            (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
              e.virtualSize + v
            }px`),
          y)
        ) {
          const _ = [];
          for (let S = 0; S < g.length; S += 1) {
            let T = g[S];
            w && (T = Math.floor(T)), g[S] < e.virtualSize + g[0] && _.push(T);
          }
          g.splice(0, g.length), g.push(..._);
        }
      },
      p = () => {
        o = e.params.grid && e.params.grid.rows > 1;
      },
      u = () => {
        const { params: f, el: g } = e,
          y = f.grid && f.grid.rows > 1;
        o && !y
          ? (g.classList.remove(
              `${f.containerModifierClass}grid`,
              `${f.containerModifierClass}grid-column`
            ),
            (a = 1),
            e.emitContainerClasses())
          : !o &&
            y &&
            (g.classList.add(`${f.containerModifierClass}grid`),
            f.grid.fill === "column" &&
              g.classList.add(`${f.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          (o = y);
      };
    i("init", p),
      i("update", u),
      (e.grid = {
        initSlides: c,
        unsetSlides: d,
        updateSlide: h,
        updateWrapperSize: m,
      });
  }
  function Lf(s) {
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
  function If(s) {
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
  function Df(s, e) {
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
    for (let d = o - 1; d >= s; d -= 1) {
      const h = t.slides[d];
      h.remove(), c.unshift(h);
    }
    if (typeof e == "object" && "length" in e) {
      for (let d = 0; d < e.length; d += 1) e[d] && n.append(e[d]);
      l = a > s ? a + e.length : a;
    } else n.append(e);
    for (let d = 0; d < c.length; d += 1) n.append(c[d]);
    t.recalcSlides(),
      i.loop && t.loopCreate(),
      (!i.observer || t.isElement) && t.update(),
      i.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function zf(s) {
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
  function Rf() {
    const s = this,
      e = [];
    for (let t = 0; t < s.slides.length; t += 1) e.push(t);
    s.removeSlide(e);
  }
  function $f(s) {
    let { swiper: e } = s;
    Object.assign(e, {
      appendSlide: Lf.bind(e),
      prependSlide: If.bind(e),
      addSlide: Df.bind(e),
      removeSlide: zf.bind(e),
      removeAllSlides: Rf.bind(e),
    });
  }
  function Pr(s) {
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
    let d;
    i("virtualUpdate", () => {
      t.params.effect === e &&
        (t.slides.length || (d = !0),
        requestAnimationFrame(() => {
          d && t.slides && t.slides.length && (r(), (d = !1));
        }));
    });
  }
  function ls(s, e) {
    const t = Ji(e);
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
          : e.slides.find((c) => c.shadowRoot && c.shadowRoot === o.parentNode);
    if (e.params.virtualTranslate && t !== 0) {
      let o = !1,
        l;
      r
        ? (l = i)
        : (l = i.filter((c) => {
            const d = c.classList.contains("swiper-slide-transform") ? a(c) : c;
            return e.getSlideIndex(d) === n;
          })),
        l.forEach((c) => {
          os(c, () => {
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
  function Nf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ fadeEffect: { crossFade: !1 } }),
      Pr({
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
              u = ls(o, c);
            (u.style.opacity = p),
              (u.style.transform = `translate3d(${h}px, ${m}px, 0px)`);
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => Ji(l));
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
  function Bf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const r = (l, c, d) => {
      let h = d
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        m = d
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      h ||
        ((h = Mt(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            d ? "left" : "top"
          }`.split(" ")
        )),
        l.append(h)),
        m ||
          ((m = Mt(
            "div",
            `swiper-slide-shadow-cube swiper-slide-shadow-${
              d ? "right" : "bottom"
            }`.split(" ")
          )),
          l.append(m)),
        h && (h.style.opacity = Math.max(-c, 0)),
        m && (m.style.opacity = Math.max(c, 0));
    };
    Pr({
      effect: "cube",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
            el: l,
            wrapperEl: c,
            slides: d,
            width: h,
            height: m,
            rtlTranslate: p,
            size: u,
            browser: f,
          } = e,
          g = Qs(e),
          y = e.params.cubeEffect,
          w = e.isHorizontal(),
          v = e.virtual && e.params.virtual.enabled;
        let b = 0,
          _;
        y.shadow &&
          (w
            ? ((_ = e.wrapperEl.querySelector(".swiper-cube-shadow")),
              _ ||
                ((_ = Mt("div", "swiper-cube-shadow")), e.wrapperEl.append(_)),
              (_.style.height = `${h}px`))
            : ((_ = l.querySelector(".swiper-cube-shadow")),
              _ || ((_ = Mt("div", "swiper-cube-shadow")), l.append(_))));
        for (let T = 0; T < d.length; T += 1) {
          const A = d[T];
          let x = T;
          v && (x = parseInt(A.getAttribute("data-swiper-slide-index"), 10));
          let E = x * 90,
            L = Math.floor(E / 360);
          p && ((E = -E), (L = Math.floor(-E / 360)));
          const M = Math.max(Math.min(A.progress, 1), -1);
          let k = 0,
            I = 0,
            z = 0;
          x % 4 === 0
            ? ((k = -L * 4 * u), (z = 0))
            : (x - 1) % 4 === 0
            ? ((k = 0), (z = -L * 4 * u))
            : (x - 2) % 4 === 0
            ? ((k = u + L * 4 * u), (z = u))
            : (x - 3) % 4 === 0 && ((k = -u), (z = 3 * u + u * 4 * L)),
            p && (k = -k),
            w || ((I = k), (k = 0));
          const D = `rotateX(${g(w ? 0 : -E)}deg) rotateY(${g(
            w ? E : 0
          )}deg) translate3d(${k}px, ${I}px, ${z}px)`;
          M <= 1 &&
            M > -1 &&
            ((b = x * 90 + M * 90), p && (b = -x * 90 - M * 90)),
            (A.style.transform = D),
            y.slideShadows && r(A, M, w);
        }
        if (
          ((c.style.transformOrigin = `50% 50% -${u / 2}px`),
          (c.style["-webkit-transform-origin"] = `50% 50% -${u / 2}px`),
          y.shadow)
        )
          if (w)
            _.style.transform = `translate3d(0px, ${
              h / 2 + y.shadowOffset
            }px, ${-h / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
              y.shadowScale
            })`;
          else {
            const T = Math.abs(b) - Math.floor(Math.abs(b) / 90) * 90,
              A =
                1.5 -
                (Math.sin((T * 2 * Math.PI) / 360) / 2 +
                  Math.cos((T * 2 * Math.PI) / 360) / 2),
              x = y.shadowScale,
              E = y.shadowScale / A,
              L = y.shadowOffset;
            _.style.transform = `scale3d(${x}, 1, ${E}) translate3d(0px, ${
              m / 2 + L
            }px, ${-m / 2 / E}px) rotateX(-89.99deg)`;
          }
        const S =
          (f.isSafari || f.isWebView) && f.needPerspectiveFix ? -u / 2 : 0;
        (c.style.transform = `translate3d(0px,0,${S}px) rotateX(${g(
          e.isHorizontal() ? 0 : b
        )}deg) rotateY(${g(e.isHorizontal() ? -b : 0)}deg)`),
          c.style.setProperty("--swiper-cube-translate-z", `${S}px`);
      },
      setTransition: (l) => {
        const { el: c, slides: d } = e;
        if (
          (d.forEach((h) => {
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
          const d = Math.max(Math.min(c.progress, 1), -1);
          r(c, d, l);
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
  function kr(s, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
        s ? ` swiper-slide-shadow-${s}` : ""
      }`,
      r = Ji(e);
    let n = r.querySelector(`.${i.split(" ").join(".")}`);
    return n || ((n = Mt("div", i.split(" "))), r.append(n)), n;
  }
  function Ff(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
    const r = (l, c) => {
      let d = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        h = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      d || (d = kr("flip", l, e.isHorizontal() ? "left" : "top")),
        h || (h = kr("flip", l, e.isHorizontal() ? "right" : "bottom")),
        d && (d.style.opacity = Math.max(-c, 0)),
        h && (h.style.opacity = Math.max(c, 0));
    };
    Pr({
      effect: "flip",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: l, rtlTranslate: c } = e,
          d = e.params.flipEffect,
          h = Qs(e);
        for (let m = 0; m < l.length; m += 1) {
          const p = l[m];
          let u = p.progress;
          e.params.flipEffect.limitRotation &&
            (u = Math.max(Math.min(p.progress, 1), -1));
          const f = p.swiperSlideOffset;
          let y = -180 * u,
            w = 0,
            v = e.params.cssMode ? -f - e.translate : -f,
            b = 0;
          e.isHorizontal()
            ? c && (y = -y)
            : ((b = v), (v = 0), (w = -y), (y = 0)),
            (p.style.zIndex = -Math.abs(Math.round(u)) + l.length),
            d.slideShadows && r(p, u);
          const _ = `translate3d(${v}px, ${b}px, 0px) rotateX(${h(
              w
            )}deg) rotateY(${h(y)}deg)`,
            S = ls(d, p);
          S.style.transform = _;
        }
      },
      setTransition: (l) => {
        const c = e.slides.map((d) => Ji(d));
        c.forEach((d) => {
          (d.style.transitionDuration = `${l}ms`),
            d
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((h) => {
                h.style.transitionDuration = `${l}ms`;
              });
        }),
          en({ swiper: e, duration: l, transformElements: c });
      },
      recreateShadows: () => {
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
  function qf(s) {
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
      Pr({
        effect: "coverflow",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { width: a, height: o, slides: l, slidesSizesGrid: c } = e,
            d = e.params.coverflowEffect,
            h = e.isHorizontal(),
            m = e.translate,
            p = h ? -m + a / 2 : -m + o / 2,
            u = h ? d.rotate : -d.rotate,
            f = d.depth,
            g = Qs(e);
          for (let y = 0, w = l.length; y < w; y += 1) {
            const v = l[y],
              b = c[y],
              _ = v.swiperSlideOffset,
              S = (p - _ - b / 2) / b,
              T =
                typeof d.modifier == "function"
                  ? d.modifier(S)
                  : S * d.modifier;
            let A = h ? u * T : 0,
              x = h ? 0 : u * T,
              E = -f * Math.abs(T),
              L = d.stretch;
            typeof L == "string" &&
              L.indexOf("%") !== -1 &&
              (L = (parseFloat(d.stretch) / 100) * b);
            let M = h ? 0 : L * T,
              k = h ? L * T : 0,
              I = 1 - (1 - d.scale) * Math.abs(T);
            Math.abs(k) < 0.001 && (k = 0),
              Math.abs(M) < 0.001 && (M = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(A) < 0.001 && (A = 0),
              Math.abs(x) < 0.001 && (x = 0),
              Math.abs(I) < 0.001 && (I = 0);
            const z = `translate3d(${k}px,${M}px,${E}px)  rotateX(${g(
                x
              )}deg) rotateY(${g(A)}deg) scale(${I})`,
              D = ls(d, v);
            if (
              ((D.style.transform = z),
              (v.style.zIndex = -Math.abs(Math.round(T)) + 1),
              d.slideShadows)
            ) {
              let P = h
                  ? v.querySelector(".swiper-slide-shadow-left")
                  : v.querySelector(".swiper-slide-shadow-top"),
                O = h
                  ? v.querySelector(".swiper-slide-shadow-right")
                  : v.querySelector(".swiper-slide-shadow-bottom");
              P || (P = kr("coverflow", v, h ? "left" : "top")),
                O || (O = kr("coverflow", v, h ? "right" : "bottom")),
                P && (P.style.opacity = T > 0 ? T : 0),
                O && (O.style.opacity = -T > 0 ? -T : 0);
            }
          }
        },
        setTransition: (a) => {
          e.slides
            .map((l) => Ji(l))
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
  function Yf(s) {
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
    Pr({
      effect: "creative",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: o, wrapperEl: l, slidesSizesGrid: c } = e,
          d = e.params.creativeEffect,
          { progressMultiplier: h } = d,
          m = e.params.centeredSlides,
          p = Qs(e);
        if (m) {
          const u = c[0] / 2 - e.params.slidesOffsetBefore || 0;
          l.style.transform = `translateX(calc(50% - ${u}px))`;
        }
        for (let u = 0; u < o.length; u += 1) {
          const f = o[u],
            g = f.progress,
            y = Math.min(
              Math.max(f.progress, -d.limitProgress),
              d.limitProgress
            );
          let w = y;
          m ||
            (w = Math.min(
              Math.max(f.originalProgress, -d.limitProgress),
              d.limitProgress
            ));
          const v = f.swiperSlideOffset,
            b = [e.params.cssMode ? -v - e.translate : -v, 0, 0],
            _ = [0, 0, 0];
          let S = !1;
          e.isHorizontal() || ((b[1] = b[0]), (b[0] = 0));
          let T = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          y < 0 ? ((T = d.next), (S = !0)) : y > 0 && ((T = d.prev), (S = !0)),
            b.forEach((I, z) => {
              b[z] = `calc(${I}px + (${r(T.translate[z])} * ${Math.abs(
                y * h
              )}))`;
            }),
            _.forEach((I, z) => {
              let D = T.rotate[z] * Math.abs(y * h);
              _[z] = D;
            }),
            (f.style.zIndex = -Math.abs(Math.round(g)) + o.length);
          const A = b.join(", "),
            x = `rotateX(${p(_[0])}deg) rotateY(${p(_[1])}deg) rotateZ(${p(
              _[2]
            )}deg)`,
            E =
              w < 0
                ? `scale(${1 + (1 - T.scale) * w * h})`
                : `scale(${1 - (1 - T.scale) * w * h})`,
            L =
              w < 0 ? 1 + (1 - T.opacity) * w * h : 1 - (1 - T.opacity) * w * h,
            M = `translate3d(${A}) ${x} ${E}`;
          if ((S && T.shadow) || !S) {
            let I = f.querySelector(".swiper-slide-shadow");
            if ((!I && T.shadow && (I = kr("creative", f)), I)) {
              const z = d.shadowPerProgress ? y * (1 / d.limitProgress) : y;
              I.style.opacity = Math.min(Math.max(Math.abs(z), 0), 1);
            }
          }
          const k = ls(d, f);
          (k.style.transform = M),
            (k.style.opacity = L),
            T.origin && (k.style.transformOrigin = T.origin);
        }
      },
      setTransition: (o) => {
        const l = e.slides.map((c) => Ji(c));
        l.forEach((c) => {
          (c.style.transitionDuration = `${o}ms`),
            c.querySelectorAll(".swiper-slide-shadow").forEach((d) => {
              d.style.transitionDuration = `${o}ms`;
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
  function Vf(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      Pr({
        effect: "cards",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: a, activeIndex: o, rtlTranslate: l } = e,
            c = e.params.cardsEffect,
            { startTranslate: d, isTouched: h } = e.touchEventsData,
            m = l ? -e.translate : e.translate;
          for (let p = 0; p < a.length; p += 1) {
            const u = a[p],
              f = u.progress,
              g = Math.min(Math.max(f, -4), 4);
            let y = u.swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (y -= a[0].swiperSlideOffset);
            let w = e.params.cssMode ? -y - e.translate : -y,
              v = 0;
            const b = -100 * Math.abs(g);
            let _ = 1,
              S = -c.perSlideRotate * g,
              T = c.perSlideOffset - Math.abs(g) * 0.75;
            const A =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p,
              x =
                (A === o || A === o - 1) &&
                g > 0 &&
                g < 1 &&
                (h || e.params.cssMode) &&
                m < d,
              E =
                (A === o || A === o + 1) &&
                g < 0 &&
                g > -1 &&
                (h || e.params.cssMode) &&
                m > d;
            if (x || E) {
              const I = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5;
              (S += -28 * g * I),
                (_ += -0.5 * I),
                (T += 96 * I),
                (v = `${-25 * I * Math.abs(g)}%`);
            }
            if (
              (g < 0
                ? (w = `calc(${w}px ${l ? "-" : "+"} (${T * Math.abs(g)}%))`)
                : g > 0
                ? (w = `calc(${w}px ${l ? "-" : "+"} (-${T * Math.abs(g)}%))`)
                : (w = `${w}px`),
              !e.isHorizontal())
            ) {
              const I = v;
              (v = w), (w = I);
            }
            const L = g < 0 ? `${1 + (1 - _) * g}` : `${1 - (1 - _) * g}`,
              M = `
        translate3d(${w}, ${v}, ${b}px)
        rotateZ(${c.rotate ? (l ? -S : S) : 0}deg)
        scale(${L})
      `;
            if (c.slideShadows) {
              let I = u.querySelector(".swiper-slide-shadow");
              I || (I = kr("cards", u)),
                I &&
                  (I.style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            u.style.zIndex = -Math.abs(Math.round(f)) + a.length;
            const k = ls(c, u);
            k.style.transform = M;
          }
        },
        setTransition: (a) => {
          const o = e.slides.map((l) => Ji(l));
          o.forEach((l) => {
            (l.style.transitionDuration = `${a}ms`),
              l.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
                c.style.transitionDuration = `${a}ms`;
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
  const Hf = [
    gf,
    vf,
    wf,
    yf,
    bf,
    _f,
    Sf,
    xf,
    Tf,
    Ef,
    Af,
    Cf,
    Mf,
    Pf,
    kf,
    Of,
    $f,
    Nf,
    Bf,
    Ff,
    qf,
    Yf,
    Vf,
  ];
  yt.use(Hf);
  class Wf {
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
      this.swiper = new yt("[swiper='clinic-card']", {
        direction: "horizontal",
        slidesPerView: 1.2,
        on: {
          init: function (t) {
            t.wrapperEl && t.wrapperEl.setAttribute("role", "list"),
              t.slides.forEach((i) => {
                i.setAttribute("role", "listitem");
              });
          },
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
  function cs() {
    new Wf();
  }
  function bi(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function Qo(s, e) {
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
   */ var Pt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Or = { duration: 0.5, overwrite: !1, delay: 0 },
    da,
    Ze,
    _e,
    Vt = 1e8,
    he = 1 / Vt,
    ua = Math.PI * 2,
    Gf = ua / 4,
    Xf = 0,
    Jo = Math.sqrt,
    jf = Math.cos,
    Uf = Math.sin,
    He = function (e) {
      return typeof e == "string";
    },
    Me = function (e) {
      return typeof e == "function";
    },
    _i = function (e) {
      return typeof e == "number";
    },
    fa = function (e) {
      return typeof e > "u";
    },
    oi = function (e) {
      return typeof e == "object";
    },
    bt = function (e) {
      return e !== !1;
    },
    pa = function () {
      return typeof window < "u";
    },
    tn = function (e) {
      return Me(e) || He(e);
    },
    el =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    tt = Array.isArray,
    ha = /(?:-?\.?\d|\.)+/gi,
    tl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Lr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ma = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    il = /[+-]=-?[.\d]+/,
    rl = /[^,'"\[\]\s]+/gi,
    Zf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ee,
    li,
    ga,
    va,
    kt = {},
    rn = {},
    sl,
    nl = function (e) {
      return (rn = Dr(e, kt)) && xt;
    },
    wa = function (e, t) {},
    ds = function (e, t) {
      return !t && void 0;
    },
    al = function (e, t) {
      return (e && (kt[e] = t) && rn && (rn[e] = t)) || kt;
    },
    us = function () {
      return 0;
    },
    Kf = { suppressEvents: !0, isStart: !0, kill: !1 },
    sn = { suppressEvents: !0, kill: !1 },
    Qf = { suppressEvents: !0 },
    ya = {},
    Ri = [],
    ba = {},
    ol,
    Ot = {},
    _a = {},
    ll = 30,
    nn = [],
    Sa = "",
    xa = function (e) {
      var t = e[0],
        i,
        r;
      if ((oi(t) || Me(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = nn.length; r-- && !nn[r].targetTest(t); );
        i = nn[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new $l(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    tr = function (e) {
      return e._gsap || xa(Wt(e))[0]._gsap;
    },
    cl = function (e, t, i) {
      return (i = e[t]) && Me(i)
        ? e[t]()
        : (fa(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    _t = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Oe = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    De = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Ir = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    Jf = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    an = function () {
      var e = Ri.length,
        t = Ri.slice(0),
        i,
        r;
      for (ba = {}, Ri.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    Ta = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    dl = function (e, t, i, r) {
      Ri.length && !Ze && an(),
        e.render(t, i, !!(Ze && t < 0 && Ta(e))),
        Ri.length && !Ze && an();
    },
    ul = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(rl).length < 2
        ? t
        : He(e)
        ? e.trim()
        : e;
    },
    fl = function (e) {
      return e;
    },
    Lt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    ep = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    Dr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    pl = function s(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = oi(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    on = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    fs = function (e) {
      var t = e.parent || Ee,
        i = e.keyframes ? ep(tt(e.keyframes)) : Lt;
      if (bt(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    tp = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    hl = function (e, t, i, r, n) {
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
    ir = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    ip = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    Ea = function (e, t, i, r) {
      return (
        e._startAt &&
        (Ze
          ? e._startAt.revert(sn)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    rp = function s(e) {
      return !e || (e._ts && s(e.parent));
    },
    ml = function (e) {
      return e._repeat ? zr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    zr = function (e, t) {
      var i = Math.floor((e = De(e / t)));
      return e && i === e ? i - 1 : i;
    },
    cn = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    dn = function (e) {
      return (e._end = De(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || he) || 0)
      ));
    },
    un = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = De(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          dn(e),
          i._dirty || ir(i, e)),
        e
      );
    },
    gl = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = cn(e.rawTime(), t)),
          (!t._dur || hs(0, t.totalDuration(), i) - t._tTime > he) &&
            t.render(i, !0)),
        ir(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -he;
      }
    },
    ci = function (e, t, i, r) {
      return (
        t.parent && $i(t),
        (t._start = De(
          (_i(i) ? i : i || e !== Ee ? Ht(e, i, t) : e._time) + t._delay
        )),
        (t._end = De(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        hl(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Aa(t) || (e._recent = t),
        r || gl(e, t),
        e._ts < 0 && un(e, e._tTime),
        e
      );
    },
    vl = function (e, t) {
      return (
        (kt.ScrollTrigger || wa("scrollTrigger", t)) &&
        kt.ScrollTrigger.create(t, e)
      );
    },
    wl = function (e, t, i, r, n) {
      if ((za(e, t, n), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Ze &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        ol !== Dt.frame
      )
        return Ri.push(e), (e._lazy = [n, r]), 1;
    },
    sp = function s(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
    },
    Aa = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    np = function (e, t, i, r) {
      var n = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && sp(e) && !(!e._initted && Aa(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Aa(e))))
            ? 0
            : 1,
        o = e._rDelay,
        l = 0,
        c,
        d,
        h;
      if (
        (o &&
          e._repeat &&
          ((l = hs(0, e._tDur, t)),
          (d = zr(l, o)),
          e._yoyo && d & 1 && (a = 1 - a),
          d !== zr(e._tTime, o) &&
            ((n = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== n || Ze || r || e._zTime === he || (!t && e._zTime))
      ) {
        if (!e._initted && wl(e, t, r, i, l)) return;
        for (
          h = e._zTime,
            e._zTime = t || (i ? he : 0),
            i || (i = t && !h),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            c = e._pt;
          c;

        )
          c.r(a, c.d), (c = c._next);
        t < 0 && Ea(e, t, i, !0),
          e._onUpdate && !i && It(e, "onUpdate"),
          l && e._repeat && !i && e.parent && It(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && $i(e, 1),
            !i &&
              !Ze &&
              (It(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    ap = function (e, t, i) {
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
    Rr = function (e, t, i, r) {
      var n = e._repeat,
        a = De(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = n ? (n < 0 ? 1e10 : De(a * (n + 1) + e._rDelay * n)) : a),
        o > 0 && !r && un(e, (e._tTime = e._tDur * o)),
        e.parent && dn(e),
        i || ir(e.parent, e),
        e
      );
    },
    yl = function (e) {
      return e instanceof ut ? ir(e) : Rr(e, e._dur);
    },
    op = { _start: 0, endTime: us, totalDuration: us },
    Ht = function s(e, t, i) {
      var r = e.labels,
        n = e._recent || op,
        a = e.duration() >= Vt ? n.endTime(!1) : e._dur,
        o,
        l,
        c;
      return He(t) && (isNaN(t) || t in r)
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
              c && i && (l = (l / 100) * (tt(i) ? i[0] : i).totalDuration()),
              o > 1 ? s(e, t.substr(0, o - 1), i) + l : a + l))
        : t == null
        ? a
        : +t;
    },
    ps = function (e, t, i) {
      var r = _i(t[1]),
        n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[n],
        o,
        l;
      if ((r && (a.duration = t[1]), (a.parent = i), e)) {
        for (o = a, l = i; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = bt(l.vars.inherit) && l.parent);
        (a.immediateRender = bt(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[n - 1]);
      }
      return new ze(t[0], a, t[n + 1]);
    },
    Ni = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    hs = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    it = function (e, t) {
      return !He(e) || !(t = Zf.exec(e)) ? "" : t[1];
    },
    lp = function (e, t, i) {
      return Ni(i, function (r) {
        return hs(e, t, r);
      });
    },
    Ca = [].slice,
    bl = function (e, t) {
      return (
        e &&
        oi(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && oi(e[0]))) &&
        !e.nodeType &&
        e !== li
      );
    },
    cp = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var n;
          return (He(r) && !t) || bl(r, 1)
            ? (n = i).push.apply(n, Wt(r))
            : i.push(r);
        }) || i
      );
    },
    Wt = function (e, t, i) {
      return _e && !t && _e.selector
        ? _e.selector(e)
        : He(e) && !i && (ga || !Nr())
        ? Ca.call((t || va).querySelectorAll(e), 0)
        : tt(e)
        ? cp(e, i)
        : bl(e)
        ? Ca.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Ma = function (e) {
      return (
        (e = Wt(e)[0] || ds("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Wt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? ds("Invalid scope") || va.createElement("div")
              : e
          );
        }
      );
    },
    _l = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Sl = function (e) {
      if (Me(e)) return e;
      var t = oi(e) ? e : { each: e },
        i = rr(t.ease),
        r = t.from || 0,
        n = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        c = t.axis,
        d = r,
        h = r;
      return (
        He(r)
          ? (d = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((d = r[0]), (h = r[1])),
        function (m, p, u) {
          var f = (u || t).length,
            g = a[f],
            y,
            w,
            v,
            b,
            _,
            S,
            T,
            A,
            x;
          if (!g) {
            if (((x = t.grid === "auto" ? 0 : (t.grid || [1, Vt])[1]), !x)) {
              for (
                T = -Vt;
                T < (T = u[x++].getBoundingClientRect().left) && x < f;

              );
              x < f && x--;
            }
            for (
              g = a[f] = [],
                y = l ? Math.min(x, f) * d - 0.5 : r % x,
                w = x === Vt ? 0 : l ? (f * h) / x - 0.5 : (r / x) | 0,
                T = 0,
                A = Vt,
                S = 0;
              S < f;
              S++
            )
              (v = (S % x) - y),
                (b = w - ((S / x) | 0)),
                (g[S] = _ =
                  c ? Math.abs(c === "y" ? b : v) : Jo(v * v + b * b)),
                _ > T && (T = _),
                _ < A && (A = _);
            r === "random" && _l(g),
              (g.max = T - A),
              (g.min = A),
              (g.v = f =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (x > f
                      ? f - 1
                      : c
                      ? c === "y"
                        ? f / x
                        : x
                      : Math.max(x, f / x)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = f < 0 ? n - f : n),
              (g.u = it(t.amount || t.each) || 0),
              (i = i && f < 0 ? Dl(i) : i);
          }
          return (
            (f = (g[m] - g.min) / g.max || 0),
            De(g.b + (i ? i(f) : f) * g.v) + g.u
          );
        }
      );
    },
    Pa = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = De(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (_i(i) ? 0 : it(i));
      };
    },
    xl = function (e, t) {
      var i = tt(e),
        r,
        n;
      return (
        !i &&
          oi(e) &&
          ((r = i = e.radius || Vt),
          e.values
            ? ((e = Wt(e.values)), (n = !_i(e[0])) && (r *= r))
            : (e = Pa(e.increment))),
        Ni(
          t,
          i
            ? Me(e)
              ? function (a) {
                  return (n = e(a)), Math.abs(n - a) <= r ? n : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(n ? a.x : a),
                      l = parseFloat(n ? a.y : 0),
                      c = Vt,
                      d = 0,
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
                      m < c && ((c = m), (d = h));
                  return (
                    (d = !r || c <= r ? e[d] : a),
                    n || d === a || _i(a) ? d : d + it(a)
                  );
                }
            : Pa(e)
        )
      );
    },
    Tl = function (e, t, i, r) {
      return Ni(tt(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return tt(e)
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
    dp = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (n, a) {
          return a(n);
        }, r);
      };
    },
    up = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || it(i));
      };
    },
    fp = function (e, t, i) {
      return Al(e, t, 0, 1, i);
    },
    El = function (e, t, i) {
      return Ni(i, function (r) {
        return e[~~t(r)];
      });
    },
    pp = function s(e, t, i) {
      var r = t - e;
      return tt(e)
        ? El(e, s(0, e.length), t)
        : Ni(i, function (n) {
            return ((r + ((n - e) % r)) % r) + e;
          });
    },
    hp = function s(e, t, i) {
      var r = t - e,
        n = r * 2;
      return tt(e)
        ? El(e, s(0, e.length - 1), t)
        : Ni(i, function (a) {
            return (a = (n + ((a - e) % n)) % n || 0), e + (a > r ? n - a : a);
          });
    },
    ms = function (e) {
      for (var t = 0, i = "", r, n, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (n = e.substr(r + 7, a - r - 7).match(o ? rl : ha)),
          (i +=
            e.substr(t, r - t) +
            Tl(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    Al = function (e, t, i, r, n) {
      var a = t - e,
        o = r - i;
      return Ni(n, function (l) {
        return i + (((l - e) / a) * o || 0);
      });
    },
    mp = function s(e, t, i, r) {
      var n = isNaN(e + t)
        ? 0
        : function (p) {
            return (1 - p) * e + p * t;
          };
      if (!n) {
        var a = He(e),
          o = {},
          l,
          c,
          d,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (tt(e) && !tt(t)) {
          for (d = [], h = e.length, m = h - 2, c = 1; c < h; c++)
            d.push(s(e[c - 1], e[c]));
          h--,
            (n = function (u) {
              u *= h;
              var f = Math.min(m, ~~u);
              return d[f](u - f);
            }),
            (i = t);
        } else r || (e = Dr(tt(e) ? [] : {}, e));
        if (!d) {
          for (l in t) Ia.call(o, e, l, "get", t[l]);
          n = function (u) {
            return Na(u, o) || (a ? e.p : e);
          };
        }
      }
      return Ni(i, n);
    },
    Cl = function (e, t, i) {
      var r = e.labels,
        n = Vt,
        a,
        o,
        l;
      for (a in r)
        (o = r[a] - t),
          o < 0 == !!i && o && n > (o = Math.abs(o)) && ((l = a), (n = o));
      return l;
    },
    It = function (e, t, i) {
      var r = e.vars,
        n = r[t],
        a = _e,
        o = e._ctx,
        l,
        c,
        d;
      if (n)
        return (
          (l = r[t + "Params"]),
          (c = r.callbackScope || e),
          i && Ri.length && an(),
          o && (_e = o),
          (d = l ? n.apply(c, l) : n.call(c)),
          (_e = a),
          d
        );
    },
    gs = function (e) {
      return (
        $i(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ze),
        e.progress() < 1 && It(e, "onInterrupt"),
        e
      );
    },
    $r,
    Ml = [],
    Pl = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), pa() || e.headless)) {
          var t = e.name,
            i = Me(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            n = {
              init: us,
              render: Na,
              add: Ia,
              kill: Op,
              modifier: kp,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: $a,
              aliases: {},
              register: 0,
            };
          if ((Nr(), e !== r)) {
            if (Ot[t]) return;
            Lt(r, Lt(on(e, n), a)),
              Dr(r.prototype, Dr(n, on(e, a))),
              (Ot[(r.prop = t)] = r),
              e.targetTest && (nn.push(r), (ya[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          al(t, r), e.register && e.register(xt, r, St);
        } else Ml.push(e);
    },
    me = 255,
    vs = {
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
    ka = function (e, t, i) {
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
    kl = function (e, t, i) {
      var r = e ? (_i(e) ? [e >> 16, (e >> 8) & me, e & me] : 0) : vs.black,
        n,
        a,
        o,
        l,
        c,
        d,
        h,
        m,
        p,
        u;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), vs[e]))
          r = vs[e];
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
          if (((r = u = e.match(ha)), !t))
            (l = (+r[0] % 360) / 360),
              (c = +r[1] / 100),
              (d = +r[2] / 100),
              (a = d <= 0.5 ? d * (c + 1) : d + c - d * c),
              (n = d * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = ka(l + 1 / 3, n, a)),
              (r[1] = ka(l, n, a)),
              (r[2] = ka(l - 1 / 3, n, a));
          else if (~e.indexOf("="))
            return (r = e.match(tl)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(ha) || vs.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !u &&
          ((n = r[0] / me),
          (a = r[1] / me),
          (o = r[2] / me),
          (h = Math.max(n, a, o)),
          (m = Math.min(n, a, o)),
          (d = (h + m) / 2),
          h === m
            ? (l = c = 0)
            : ((p = h - m),
              (c = d > 0.5 ? p / (2 - h - m) : p / (h + m)),
              (l =
                h === n
                  ? (a - o) / p + (a < o ? 6 : 0)
                  : h === a
                  ? (o - n) / p + 2
                  : (n - a) / p + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(c * 100 + 0.5)),
          (r[2] = ~~(d * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Ol = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(Bi).forEach(function (n) {
          var a = n.match(Lr) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Ll = function (e, t, i) {
      var r = "",
        n = (e + r).match(Bi),
        a = t ? "hsla(" : "rgba(",
        o = 0,
        l,
        c,
        d,
        h;
      if (!n) return e;
      if (
        ((n = n.map(function (m) {
          return (
            (m = kl(m, t, 1)) &&
            a +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((d = Ol(e)), (l = i.c), l.join(r) !== d.c.join(r)))
      )
        for (c = e.replace(Bi, "1").split(Lr), h = c.length - 1; o < h; o++)
          r +=
            c[o] +
            (~l.indexOf(o)
              ? n.shift() || a + "0,0,0,0)"
              : (d.length ? d : n.length ? n : i).shift());
      if (!c)
        for (c = e.split(Bi), h = c.length - 1; o < h; o++) r += c[o] + n[o];
      return r + c[h];
    },
    Bi = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in vs) s += "|" + e + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    gp = /hsl[a]?\(/,
    Il = function (e) {
      var t = e.join(" "),
        i;
      if (((Bi.lastIndex = 0), Bi.test(t)))
        return (
          (i = gp.test(t)),
          (e[1] = Ll(e[1], i)),
          (e[0] = Ll(e[0], i, Ol(e[1]))),
          !0
        );
    },
    ws,
    Dt = (function () {
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
        d,
        h,
        m,
        p,
        u = function f(g) {
          var y = s() - r,
            w = g === !0,
            v,
            b,
            _,
            S;
          if (
            ((y > e || y < 0) && (i += y - t),
            (r += y),
            (_ = r - i),
            (v = _ - a),
            (v > 0 || w) &&
              ((S = ++h.frame),
              (m = _ - h.time * 1e3),
              (h.time = _ = _ / 1e3),
              (a += v + (v >= n ? 4 : n - v)),
              (b = 1)),
            w || (l = c(f)),
            b)
          )
            for (p = 0; p < o.length; p++) o[p](_, m, S, g);
        };
      return (
        (h = {
          time: 0,
          frame: 0,
          tick: function () {
            u(!0);
          },
          deltaRatio: function (g) {
            return m / (1e3 / (g || 60));
          },
          wake: function () {
            sl &&
              (!ga &&
                pa() &&
                ((li = ga = window),
                (va = li.document || {}),
                (kt.gsap = xt),
                (li.gsapVersions || (li.gsapVersions = [])).push(xt.version),
                nl(rn || li.GreenSockGlobals || (!li.gsap && li) || {}),
                Ml.forEach(Pl)),
              (d = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && h.sleep(),
              (c =
                d ||
                function (g) {
                  return setTimeout(g, (a - h.time * 1e3 + 1) | 0);
                }),
              (ws = 1),
              u(2));
          },
          sleep: function () {
            (d ? cancelAnimationFrame : clearTimeout)(l), (ws = 0), (c = us);
          },
          lagSmoothing: function (g, y) {
            (e = g || 1 / 0), (t = Math.min(y || 33, e));
          },
          fps: function (g) {
            (n = 1e3 / (g || 240)), (a = h.time * 1e3 + n);
          },
          add: function (g, y, w) {
            var v = y
              ? function (b, _, S, T) {
                  g(b, _, S, T), h.remove(v);
                }
              : g;
            return h.remove(g), o[w ? "unshift" : "push"](v), Nr(), v;
          },
          remove: function (g, y) {
            ~(y = o.indexOf(g)) && o.splice(y, 1) && p >= y && p--;
          },
          _listeners: o,
        }),
        h
      );
    })(),
    Nr = function () {
      return !ws && Dt.wake();
    },
    Ke = {},
    vp = /^[\d.\-M][\d.\-,\s]/,
    wp = /["']/g,
    yp = function (e) {
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
          (t[r] = isNaN(c) ? c.replace(wp, "").trim() : +c),
          (r = l.substr(o + 1).trim());
      return t;
    },
    bp = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    _p = function (e) {
      var t = (e + "").split("("),
        i = Ke[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [yp(t[1])] : bp(e).split(",").map(ul)
          )
        : Ke._CE && vp.test(e)
        ? Ke._CE("", e)
        : i;
    },
    Dl = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    zl = function s(e, t) {
      for (var i = e._first, r; i; )
        i instanceof ut
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
    rr = function (e, t) {
      return (e && (Me(e) ? e : Ke[e] || _p(e))) || t;
    },
    sr = function (e, t, i, r) {
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
        _t(e, function (o) {
          (Ke[o] = kt[o] = n), (Ke[(a = o.toLowerCase())] = i);
          for (var l in n)
            Ke[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = Ke[o + "." + l] = n[l];
        }),
        n
      );
    },
    Rl = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Oa = function s(e, t, i) {
      var r = t >= 1 ? t : 1,
        n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (n / ua) * (Math.asin(1 / r) || 0),
        o = function (d) {
          return d === 1 ? 1 : r * Math.pow(2, -10 * d) * Uf((d - a) * n) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : Rl(o);
      return (
        (n = ua / n),
        (l.config = function (c, d) {
          return s(e, c, d);
        }),
        l
      );
    },
    La = function s(e, t) {
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
            : Rl(i);
      return (
        (r.config = function (n) {
          return s(e, n);
        }),
        r
      );
    };
  _t("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
    var t = e < 5 ? e + 1 : e;
    sr(
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
    (Ke.Linear.easeNone = Ke.none = Ke.Linear.easeIn),
    sr("Elastic", Oa("in"), Oa("out"), Oa()),
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
      sr(
        "Bounce",
        function (a) {
          return 1 - n(1 - a);
        },
        n
      );
    })(7.5625, 2.75),
    sr("Expo", function (s) {
      return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
    }),
    sr("Circ", function (s) {
      return -(Jo(1 - s * s) - 1);
    }),
    sr("Sine", function (s) {
      return s === 1 ? 1 : -jf(s * Gf) + 1;
    }),
    sr("Back", La("in"), La("out"), La()),
    (Ke.SteppedEase =
      Ke.steps =
      kt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              n = t ? 1 : 0,
              a = 1 - he;
            return function (o) {
              return (((r * hs(0, a, o)) | 0) + n) * i;
            };
          },
        }),
    (Or.ease = Ke["quad.out"]),
    _t(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (Sa += s + "," + s + "Params,");
      }
    );
  var $l = function (e, t) {
      (this.id = Xf++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : cl),
        (this.set = t ? t.getSetter : $a);
    },
    ys = (function () {
      function s(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Rr(this, +t.duration, 1, 1),
          (this.data = t.data),
          _e && ((this._ctx = _e), _e.data.push(this)),
          ws || Dt.wake();
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
              Rr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((Nr(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              un(this, i), !n._dp || n.parent || gl(n, this);
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
              ci(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === he) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), dl(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + ml(this)) %
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
                  ml(this),
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
            ? zr(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -he ? 0 : this._rts;
          if (this._rts === i) return this;
          var n =
            this.parent && this._ts ? cn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -he ? 0 : this._rts),
            this.totalTime(
              hs(-Math.abs(this._delay), this.totalDuration(), n),
              r !== !1
            ),
            dn(this),
            ip(this)
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
                  : (Nr(),
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
              r && (r._sort || !this.parent) && ci(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (bt(i) ? this.totalDuration() : this.duration()) /
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
              ? cn(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = Qf);
          var r = Ze;
          return (
            (Ze = i),
            Ta(this) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (Ze = r),
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
            ? ((this._repeat = i === 1 / 0 ? -2 : i), yl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), yl(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Ht(this, i), bt(r));
        }),
        (e.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, bt(r)),
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
            var a = Me(i) ? i : fl,
              o = function () {
                var c = r.then;
                (r.then = null),
                  Me(a) && (a = a(r)) && (a.then || a === r) && (r.then = c),
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
          gs(this);
        }),
        s
      );
    })();
  Lt(ys.prototype, {
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
  var ut = (function (s) {
    Qo(e, s);
    function e(i, r) {
      var n;
      return (
        i === void 0 && (i = {}),
        (n = s.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = bt(i.sortChildren)),
        Ee && ci(i.parent || Ee, bi(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && vl(bi(n), i.scrollTrigger),
        n
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, n, a) {
        return ps(0, arguments, this), this;
      }),
      (t.from = function (r, n, a) {
        return ps(1, arguments, this), this;
      }),
      (t.fromTo = function (r, n, a, o) {
        return ps(2, arguments, this), this;
      }),
      (t.set = function (r, n, a) {
        return (
          (n.duration = 0),
          (n.parent = this),
          fs(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new ze(r, n, Ht(this, a), 1),
          this
        );
      }),
      (t.call = function (r, n, a) {
        return ci(this, ze.delayedCall(0, r, n), a);
      }),
      (t.staggerTo = function (r, n, a, o, l, c, d) {
        return (
          (a.duration = n),
          (a.stagger = a.stagger || o),
          (a.onComplete = c),
          (a.onCompleteParams = d),
          (a.parent = this),
          new ze(r, a, Ht(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, n, a, o, l, c, d) {
        return (
          (a.runBackwards = 1),
          (fs(a).immediateRender = bt(a.immediateRender)),
          this.staggerTo(r, n, a, o, l, c, d)
        );
      }),
      (t.staggerFromTo = function (r, n, a, o, l, c, d, h) {
        return (
          (o.startAt = a),
          (fs(o).immediateRender = bt(o.immediateRender)),
          this.staggerTo(r, n, o, l, c, d, h)
        );
      }),
      (t.render = function (r, n, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          c = this._dur,
          d = r <= 0 ? 0 : De(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !c),
          m,
          p,
          u,
          f,
          g,
          y,
          w,
          v,
          b,
          _,
          S,
          T;
        if (
          (this !== Ee && d > l && r >= 0 && (d = l),
          d !== this._tTime || a || h)
        ) {
          if (
            (o !== this._time &&
              c &&
              ((d += this._time - o), (r += this._time - o)),
            (m = d),
            (b = this._start),
            (v = this._ts),
            (y = !v),
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
              ((m = De(d % g)),
              d === l
                ? ((f = this._repeat), (m = c))
                : ((_ = De(d / g)),
                  (f = ~~_),
                  f && f === _ && ((m = c), f--),
                  m > c && (m = c)),
              (_ = zr(this._tTime, g)),
              !o &&
                this._tTime &&
                _ !== f &&
                this._tTime - _ * g - this._dur <= 0 &&
                (_ = f),
              S && f & 1 && ((m = c - m), (T = 1)),
              f !== _ && !this._lock)
            ) {
              var A = S && _ & 1,
                x = A === (S && f & 1);
              if (
                (f < _ && (A = !A),
                (o = A ? 0 : d % c ? c : d),
                (this._lock = 1),
                (this.render(o || (T ? 0 : De(f * g)), n, !c)._lock = 0),
                (this._tTime = d),
                !n && this.parent && It(this, "onRepeat"),
                this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  y !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((c = this._dur),
                (l = this._tDur),
                x &&
                  ((this._lock = 2),
                  (o = A ? c : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !T && this.invalidate()),
                (this._lock = 0),
                !this._ts && !y)
              )
                return this;
              zl(this, T);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((w = ap(this, De(o), De(m))), w && (d -= m - (m = w._start))),
            (this._tTime = d),
            (this._time = m),
            (this._act = !v),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && d && !n && !_ && (It(this, "onStart"), this._tTime !== d))
          )
            return this;
          if (m >= o && r >= 0)
            for (p = this._first; p; ) {
              if (
                ((u = p._next), (p._act || m >= p._start) && p._ts && w !== p)
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
                  m !== this._time || (!this._ts && !y))
                ) {
                  (w = 0), u && (d += this._zTime = -he);
                  break;
                }
              }
              p = u;
            }
          else {
            p = this._last;
            for (var E = r < 0 ? r : m; p; ) {
              if (
                ((u = p._prev), (p._act || E <= p._end) && p._ts && w !== p)
              ) {
                if (p.parent !== this) return this.render(r, n, a);
                if (
                  (p.render(
                    p._ts > 0
                      ? (E - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (E - p._start) * p._ts,
                    n,
                    a || (Ze && Ta(p))
                  ),
                  m !== this._time || (!this._ts && !y))
                ) {
                  (w = 0), u && (d += this._zTime = E ? -he : he);
                  break;
                }
              }
              p = u;
            }
          }
          if (
            w &&
            !n &&
            (this.pause(),
            (w.render(m >= o ? 0 : -he)._zTime = m >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = b), dn(this), this.render(r, n, a);
          this._onUpdate && !n && It(this, "onUpdate", !0),
            ((d === l && this._tTime >= this.totalDuration()) || (!d && o)) &&
              (b === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !c) &&
                  ((d === l && this._ts > 0) || (!d && this._ts < 0)) &&
                  $i(this, 1),
                !n &&
                  !(r < 0 && !o) &&
                  (d || o || !l) &&
                  (It(
                    this,
                    d === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(d < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, n) {
        var a = this;
        if ((_i(n) || (n = Ht(this, n, r)), !(r instanceof ys))) {
          if (tt(r))
            return (
              r.forEach(function (o) {
                return a.add(o, n);
              }),
              this
            );
          if (He(r)) return this.addLabel(r, n);
          if (Me(r)) r = ze.delayedCall(0, r);
          else return this;
        }
        return this !== r ? ci(this, r, n) : this;
      }),
      (t.getChildren = function (r, n, a, o) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -Vt);
        for (var l = [], c = this._first; c; )
          c._start >= o &&
            (c instanceof ze
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
        return He(r)
          ? this.removeLabel(r)
          : Me(r)
          ? this.killTweensOf(r)
          : (r.parent === this && ln(this, r),
            r === this._recent && (this._recent = this._last),
            ir(this));
      }),
      (t.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = De(
                Dt.time -
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
        return (this.labels[r] = Ht(this, n)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, n, a) {
        var o = ze.delayedCall(0, n || us, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), ci(this, o, Ht(this, r))
        );
      }),
      (t.removePause = function (r) {
        var n = this._first;
        for (r = Ht(this, r); n; )
          n._start === r && n.data === "isPause" && $i(n), (n = n._next);
      }),
      (t.killTweensOf = function (r, n, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          Fi !== o[l] && o[l].kill(r, n);
        return this;
      }),
      (t.getTweensOf = function (r, n) {
        for (var a = [], o = Wt(r), l = this._first, c = _i(n), d; l; )
          l instanceof ze
            ? Jf(l._targets, o) &&
              (c
                ? (!Fi || (l._initted && l._ts)) &&
                  l.globalTime(0) <= n &&
                  l.globalTime(l.totalDuration()) > n
                : !n || l.isActive()) &&
              a.push(l)
            : (d = l.getTweensOf(o, n)).length && a.push.apply(a, d),
            (l = l._next);
        return a;
      }),
      (t.tweenTo = function (r, n) {
        n = n || {};
        var a = this,
          o = Ht(a, r),
          l = n,
          c = l.startAt,
          d = l.onStart,
          h = l.onStartParams,
          m = l.immediateRender,
          p,
          u = ze.to(
            a,
            Lt(
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
                  he,
                onStart: function () {
                  if ((a.pause(), !p)) {
                    var g =
                      n.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    u._dur !== g && Rr(u, g, 0, 1).render(u._time, !0, !0),
                      (p = 1);
                  }
                  d && d.apply(u, h || []);
                },
              },
              n
            )
          );
        return m ? u.render(0) : u;
      }),
      (t.tweenFromTo = function (r, n, a) {
        return this.tweenTo(n, Lt({ startAt: { time: Ht(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Cl(this, Ht(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Cl(this, Ht(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + he);
      }),
      (t.shiftChildren = function (r, n, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, c; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (n) for (c in l) l[c] >= a && (l[c] += r);
        return ir(this);
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
          ir(this)
        );
      }),
      (t.totalDuration = function (r) {
        var n = 0,
          a = this,
          o = a._last,
          l = Vt,
          c,
          d,
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
              (d = o._start),
              d > l && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (ci(a, o, d - o._delay, 1)._lock = 0))
                : (l = d),
              d < 0 &&
                o._ts &&
                ((n -= d),
                ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                  ((a._start += d / a._ts), (a._time -= d), (a._tTime -= d)),
                a.shiftChildren(-d, !1, -1 / 0),
                (l = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = c);
          Rr(a, a === Ee && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Ee._ts && (dl(Ee, cn(r, Ee)), (ol = Dt.frame)), Dt.frame >= ll)) {
          ll += Pt.autoSleep || 120;
          var n = Ee._first;
          if ((!n || !n._ts) && Pt.autoSleep && Dt._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || Dt.sleep();
          }
        }
      }),
      e
    );
  })(ys);
  Lt(ut.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Sp = function (e, t, i, r, n, a, o) {
      var l = new St(this._pt, e, t, 0, 1, Vl, null, n),
        c = 0,
        d = 0,
        h,
        m,
        p,
        u,
        f,
        g,
        y,
        w;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (y = ~r.indexOf("random(")) && (r = ms(r)),
          a && ((w = [i, r]), a(w, e, t), (i = w[0]), (r = w[1])),
          m = i.match(ma) || [];
        (h = ma.exec(r));

      )
        (u = h[0]),
          (f = r.substring(c, h.index)),
          p ? (p = (p + 1) % 5) : f.substr(-5) === "rgba(" && (p = 1),
          u !== m[d++] &&
            ((g = parseFloat(m[d - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: f || d === 1 ? f : ",",
              s: g,
              c: u.charAt(1) === "=" ? Ir(g, u) - g : parseFloat(u) - g,
              m: p && p < 4 ? Math.round : 0,
            }),
            (c = ma.lastIndex));
      return (
        (l.c = c < r.length ? r.substring(c, r.length) : ""),
        (l.fp = o),
        (il.test(r) || y) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Ia = function (e, t, i, r, n, a, o, l, c, d) {
      Me(r) && (r = r(n || 0, e, a));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : Me(h)
            ? c
              ? e[
                  t.indexOf("set") || !Me(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](c)
              : e[t]()
            : h,
        p = Me(h) ? (c ? Cp : ql) : Ra,
        u;
      if (
        (He(r) &&
          (~r.indexOf("random(") && (r = ms(r)),
          r.charAt(1) === "=" &&
            ((u = Ir(m, r) + (it(m) || 0)), (u || u === 0) && (r = u))),
        !d || m !== r || Da)
      )
        return !isNaN(m * r) && r !== ""
          ? ((u = new St(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? Pp : Yl,
              0,
              p
            )),
            c && (u.fp = c),
            o && u.modifier(o, this, e),
            (this._pt = u))
          : (!h && !(t in e) && wa(t, r),
            Sp.call(this, e, t, m, r, p, l || Pt.stringFilter, c));
    },
    xp = function (e, t, i, r, n) {
      if (
        (Me(e) && (e = bs(e, n, t, i, r)),
        !oi(e) || (e.style && e.nodeType) || tt(e) || el(e))
      )
        return He(e) ? bs(e, n, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = bs(e[o], n, t, i, r);
      return a;
    },
    Nl = function (e, t, i, r, n, a) {
      var o, l, c, d;
      if (
        Ot[e] &&
        (o = new Ot[e]()).init(
          n,
          o.rawVars ? t[e] : xp(t[e], r, n, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = l = new St(i._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
        i !== $r)
      )
        for (c = i._ptLookup[i._targets.indexOf(n)], d = o._props.length; d--; )
          c[o._props[d]] = l;
      return o;
    },
    Fi,
    Da,
    za = function s(e, t, i) {
      var r = e.vars,
        n = r.ease,
        a = r.startAt,
        o = r.immediateRender,
        l = r.lazy,
        c = r.onUpdate,
        d = r.runBackwards,
        h = r.yoyoEase,
        m = r.keyframes,
        p = r.autoRevert,
        u = e._dur,
        f = e._startAt,
        g = e._targets,
        y = e.parent,
        w = y && y.data === "nested" ? y.vars.targets : g,
        v = e._overwrite === "auto" && !da,
        b = e.timeline,
        _,
        S,
        T,
        A,
        x,
        E,
        L,
        M,
        k,
        I,
        z,
        D,
        P;
      if (
        (b && (!m || !n) && (n = "none"),
        (e._ease = rr(n, Or.ease)),
        (e._yEase = h ? Dl(rr(h === !0 ? n : h, Or.ease)) : 0),
        h &&
          e._yoyo &&
          !e._repeat &&
          ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
        (e._from = !b && !!r.runBackwards),
        !b || (m && !r.stagger))
      ) {
        if (
          ((M = g[0] ? tr(g[0]).harness : 0),
          (D = M && r[M.prop]),
          (_ = on(r, ya)),
          f &&
            (f._zTime < 0 && f.progress(1),
            t < 0 && d && o && !p
              ? f.render(-1, !0)
              : f.revert(d && u ? sn : Kf),
            (f._lazy = 0)),
          a)
        ) {
          if (
            ($i(
              (e._startAt = ze.set(
                g,
                Lt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: y,
                    immediateRender: !0,
                    lazy: !f && bt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      c &&
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
            t < 0 && (Ze || (!o && !p)) && e._startAt.revert(sn),
            o && u && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (d && u && !f) {
          if (
            (t && (o = !1),
            (T = Lt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !f && bt(l),
                immediateRender: o,
                stagger: 0,
                parent: y,
              },
              _
            )),
            D && (T[M.prop] = D),
            $i((e._startAt = ze.set(g, T))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ze ? e._startAt.revert(sn) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            s(e._startAt, he, he);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (u && bt(l)) || (l && !u), S = 0;
          S < g.length;
          S++
        ) {
          if (
            ((x = g[S]),
            (L = x._gsap || xa(g)[S]._gsap),
            (e._ptLookup[S] = I = {}),
            ba[L.id] && Ri.length && an(),
            (z = w === g ? S : w.indexOf(x)),
            M &&
              (k = new M()).init(x, D || _, e, z, w) !== !1 &&
              ((e._pt = A =
                new St(e._pt, x, k.name, 0, 1, k.render, k, 0, k.priority)),
              k._props.forEach(function (O) {
                I[O] = A;
              }),
              k.priority && (E = 1)),
            !M || D)
          )
            for (T in _)
              Ot[T] && (k = Nl(T, _, e, z, x, w))
                ? k.priority && (E = 1)
                : (I[T] = A =
                    Ia.call(e, x, T, "get", _[T], z, w, 0, r.stringFilter));
          e._op && e._op[S] && e.kill(x, e._op[S]),
            v &&
              e._pt &&
              ((Fi = e),
              Ee.killTweensOf(x, I, e.globalTime(t)),
              (P = !e.parent),
              (Fi = 0)),
            e._pt && l && (ba[L.id] = 1);
        }
        E && Hl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = c),
        (e._initted = (!e._op || e._pt) && !P),
        m && t <= 0 && b.render(Vt, !0, !0);
    },
    Tp = function (e, t, i, r, n, a, o, l) {
      var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        d,
        h,
        m,
        p;
      if (!c)
        for (
          c = e._ptCache[t] = [], m = e._ptLookup, p = e._targets.length;
          p--;

        ) {
          if (((d = m[p][t]), d && d.d && d.d._pt))
            for (d = d.d._pt; d && d.p !== t && d.fp !== t; ) d = d._next;
          if (!d)
            return (
              (Da = 1),
              (e.vars[t] = "+=0"),
              za(e, o),
              (Da = 0),
              l ? ds(t + " not eligible for reset") : 1
            );
          c.push(d);
        }
      for (p = c.length; p--; )
        (h = c[p]),
          (d = h._pt || h),
          (d.s = (r || r === 0) && !n ? r : d.s + (r || 0) + a * d.c),
          (d.c = i - d.s),
          h.e && (h.e = Oe(i) + it(h.e)),
          h.b && (h.b = d.s + it(h.b));
    },
    Ep = function (e, t) {
      var i = e[0] ? tr(e[0]).harness : 0,
        r = i && i.aliases,
        n,
        a,
        o,
        l;
      if (!r) return t;
      n = Dr({}, t);
      for (a in r)
        if (a in n)
          for (l = r[a].split(","), o = l.length; o--; ) n[l[o]] = n[a];
      return n;
    },
    Ap = function (e, t, i, r) {
      var n = t.ease || r || "power1.inOut",
        a,
        o;
      if (tt(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (l, c) {
            return o.push({ t: (c / (t.length - 1)) * 100, v: l, e: n });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: n });
    },
    bs = function (e, t, i, r, n) {
      return Me(e)
        ? e.call(t, i, r, n)
        : He(e) && ~e.indexOf("random(")
        ? ms(e)
        : e;
    },
    Bl = Sa + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Fl = {};
  _t(Bl + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (Fl[s] = 1);
  });
  var ze = (function (s) {
    Qo(e, s);
    function e(i, r, n, a) {
      var o;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (o = s.call(this, a ? r : fs(r)) || this);
      var l = o.vars,
        c = l.duration,
        d = l.delay,
        h = l.immediateRender,
        m = l.stagger,
        p = l.overwrite,
        u = l.keyframes,
        f = l.defaults,
        g = l.scrollTrigger,
        y = l.yoyoEase,
        w = r.parent || Ee,
        v = (tt(i) || el(i) ? _i(i[0]) : "length" in r) ? [i] : Wt(i),
        b,
        _,
        S,
        T,
        A,
        x,
        E,
        L;
      if (
        ((o._targets = v.length
          ? xa(v)
          : ds(
              "GSAP target " + i + " not found. https://gsap.com",
              !Pt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = p),
        u || m || tn(c) || tn(d))
      ) {
        if (
          ((r = o.vars),
          (b = o.timeline =
            new ut({
              data: "nested",
              defaults: f || {},
              targets: w && w.data === "nested" ? w.vars.targets : v,
            })),
          b.kill(),
          (b.parent = b._dp = bi(o)),
          (b._start = 0),
          m || tn(c) || tn(d))
        ) {
          if (((T = v.length), (E = m && Sl(m)), oi(m)))
            for (A in m) ~Bl.indexOf(A) && (L || (L = {}), (L[A] = m[A]));
          for (_ = 0; _ < T; _++)
            (S = on(r, Fl)),
              (S.stagger = 0),
              y && (S.yoyoEase = y),
              L && Dr(S, L),
              (x = v[_]),
              (S.duration = +bs(c, bi(o), _, x, v)),
              (S.delay = (+bs(d, bi(o), _, x, v) || 0) - o._delay),
              !m &&
                T === 1 &&
                S.delay &&
                ((o._delay = d = S.delay), (o._start += d), (S.delay = 0)),
              b.to(x, S, E ? E(_, x, v) : 0),
              (b._ease = Ke.none);
          b.duration() ? (c = d = 0) : (o.timeline = 0);
        } else if (u) {
          fs(Lt(b.vars.defaults, { ease: "none" })),
            (b._ease = rr(u.ease || r.ease || "none"));
          var M = 0,
            k,
            I,
            z;
          if (tt(u))
            u.forEach(function (D) {
              return b.to(v, D, ">");
            }),
              b.duration();
          else {
            S = {};
            for (A in u)
              A === "ease" || A === "easeEach" || Ap(A, u[A], S, u.easeEach);
            for (A in S)
              for (
                k = S[A].sort(function (D, P) {
                  return D.t - P.t;
                }),
                  M = 0,
                  _ = 0;
                _ < k.length;
                _++
              )
                (I = k[_]),
                  (z = {
                    ease: I.e,
                    duration: ((I.t - (_ ? k[_ - 1].t : 0)) / 100) * c,
                  }),
                  (z[A] = I.v),
                  b.to(v, z, M),
                  (M += z.duration);
            b.duration() < c && b.to({}, { duration: c - b.duration() });
          }
        }
        c || o.duration((c = b.duration()));
      } else o.timeline = 0;
      return (
        p === !0 && !da && ((Fi = bi(o)), Ee.killTweensOf(v), (Fi = 0)),
        ci(w, bi(o), n),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (h ||
          (!c &&
            !u &&
            o._start === De(w._time) &&
            bt(h) &&
            rp(bi(o)) &&
            w.data !== "nested")) &&
          ((o._tTime = -he), o.render(Math.max(0, -d) || 0)),
        g && vl(bi(o), g),
        o
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, n, a) {
        var o = this._time,
          l = this._tDur,
          c = this._dur,
          d = r < 0,
          h = r > l - he && !d ? l : r < he ? 0 : r,
          m,
          p,
          u,
          f,
          g,
          y,
          w,
          v,
          b;
        if (!c) np(this, r, n, a);
        else if (
          h !== this._tTime ||
          !r ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== d) ||
          this._lazy
        ) {
          if (((m = h), (v = this.timeline), this._repeat)) {
            if (((f = c + this._rDelay), this._repeat < -1 && d))
              return this.totalTime(f * 100 + r, n, a);
            if (
              ((m = De(h % f)),
              h === l
                ? ((u = this._repeat), (m = c))
                : ((g = De(h / f)),
                  (u = ~~g),
                  u && u === g ? ((m = c), u--) : m > c && (m = c)),
              (y = this._yoyo && u & 1),
              y && ((b = this._yEase), (m = c - m)),
              (g = zr(this._tTime, f)),
              m === o && !a && this._initted && u === g)
            )
              return (this._tTime = h), this;
            u !== g &&
              (v && this._yEase && zl(v, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                m !== f &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(De(f * u), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (wl(this, d ? r : m, a, n, h)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && u !== g))
              return this;
            if (c !== this._dur) return this.render(r, n, a);
          }
          if (
            ((this._tTime = h),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = w = (b || this._ease)(m / c)),
            this._from && (this.ratio = w = 1 - w),
            !o && h && !n && !g && (It(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(w, p.d), (p = p._next);
          (v && v.render(r < 0 ? r : v._dur * v._ease(m / this._dur), n, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (d && Ea(this, r, n, a), It(this, "onUpdate")),
            this._repeat &&
              u !== g &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              It(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (d && !this._onUpdate && Ea(this, r, !0, !0),
              (r || !c) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                $i(this, 1),
              !n &&
                !(d && !o) &&
                (h || o || y) &&
                (It(this, h === l ? "onComplete" : "onReverseComplete", !0),
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
        ws || Dt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          d;
        return (
          this._initted || za(this, c),
          (d = this._ease(c / this._dur)),
          Tp(this, r, n, a, o, d, c, l)
            ? this.resetTo(r, n, a, o, 1)
            : (un(this, 0),
              this.parent ||
                hl(
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
              ? gs(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ze),
            this
          );
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, Fi && Fi.vars.overwrite !== !0)
              ._first || gs(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              Rr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? Wt(r) : o,
          c = this._ptLookup,
          d = this._pt,
          h,
          m,
          p,
          u,
          f,
          g,
          y;
        if ((!n || n === "all") && tp(o, l))
          return n === "all" && (this._pt = 0), gs(this);
        for (
          h = this._op = this._op || [],
            n !== "all" &&
              (He(n) &&
                ((f = {}),
                _t(n, function (w) {
                  return (f[w] = 1);
                }),
                (n = f)),
              (n = Ep(o, n))),
            y = o.length;
          y--;

        )
          if (~l.indexOf(o[y])) {
            (m = c[y]),
              n === "all"
                ? ((h[y] = n), (u = m), (p = {}))
                : ((p = h[y] = h[y] || {}), (u = n));
            for (f in u)
              (g = m && m[f]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(f) === !0) &&
                    ln(this, g, "_pt"),
                  delete m[f]),
                p !== "all" && (p[f] = 1);
          }
        return this._initted && !this._pt && d && gs(this), this;
      }),
      (e.to = function (r, n) {
        return new e(r, n, arguments[2]);
      }),
      (e.from = function (r, n) {
        return ps(1, arguments);
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
        return ps(2, arguments);
      }),
      (e.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
      }),
      (e.killTweensOf = function (r, n, a) {
        return Ee.killTweensOf(r, n, a);
      }),
      e
    );
  })(ys);
  Lt(ze.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    _t("staggerTo,staggerFrom,staggerFromTo", function (s) {
      ze[s] = function () {
        var e = new ut(),
          t = Ca.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
      };
    });
  var Ra = function (e, t, i) {
      return (e[t] = i);
    },
    ql = function (e, t, i) {
      return e[t](i);
    },
    Cp = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    Mp = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    $a = function (e, t) {
      return Me(e[t]) ? ql : fa(e[t]) && e.setAttribute ? Mp : Ra;
    },
    Yl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Pp = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Vl = function (e, t) {
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
    Na = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    kp = function (e, t, i, r) {
      for (var n = this._pt, a; n; )
        (a = n._next), n.p === r && n.modifier(e, t, i), (n = a);
    },
    Op = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? ln(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    Lp = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    Hl = function (e) {
      for (var t = e._pt, i, r, n, a; t; ) {
        for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (n = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = n;
    },
    St = (function () {
      function s(t, i, r, n, a, o, l, c, d) {
        (this.t = i),
          (this.s = n),
          (this.c = a),
          (this.p = r),
          (this.r = o || Yl),
          (this.d = l || this),
          (this.set = c || Ra),
          (this.pr = d || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = s.prototype;
      return (
        (e.modifier = function (i, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = Lp),
            (this.m = i),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  _t(
    Sa +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (ya[s] = 1);
    }
  ),
    (kt.TweenMax = kt.TweenLite = ze),
    (kt.TimelineLite = kt.TimelineMax = ut),
    (Ee = new ut({
      sortChildren: !1,
      defaults: Or,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Pt.stringFilter = Il);
  var nr = [],
    fn = {},
    Ip = [],
    Wl = 0,
    Dp = 0,
    Ba = function (e) {
      return (fn[e] || Ip).map(function (t) {
        return t();
      });
    },
    Fa = function () {
      var e = Date.now(),
        t = [];
      e - Wl > 2 &&
        (Ba("matchMediaInit"),
        nr.forEach(function (i) {
          var r = i.queries,
            n = i.conditions,
            a,
            o,
            l,
            c;
          for (o in r)
            (a = li.matchMedia(r[o]).matches),
              a && (l = 1),
              a !== n[o] && ((n[o] = a), (c = 1));
          c && (i.revert(), l && t.push(i));
        }),
        Ba("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (Wl = e),
        Ba("matchMedia"));
    },
    Gl = (function () {
      function s(t, i) {
        (this.selector = i && Ma(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Dp++),
          t && this.add(t);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          Me(i) && ((n = r), (r = i), (i = Me));
          var a = this,
            o = function () {
              var c = _e,
                d = a.selector,
                h;
              return (
                c && c !== a && c.data.push(a),
                n && (a.selector = Ma(n)),
                (_e = a),
                (h = r.apply(a, arguments)),
                Me(h) && a._r.push(h),
                (_e = c),
                (a.selector = d),
                (a.isReverted = !1),
                h
              );
            };
          return (
            (a.last = o),
            i === Me
              ? o(a, function (l) {
                  return a.add(null, l);
                })
              : i
              ? (a[i] = o)
              : o
          );
        }),
        (e.ignore = function (i) {
          var r = _e;
          (_e = null), i(this), (_e = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof s
                ? i.push.apply(i, r.getTweens())
                : r instanceof ze &&
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
                        c.getChildren(!0, !0, !1).forEach(function (d) {
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
                      .sort(function (d, h) {
                        return h.g - d.g || -1 / 0;
                      })
                      .forEach(function (d) {
                        return d.t.revert(i);
                      }),
                      l = n.data.length;
                    l--;

                  )
                    (c = n.data[l]),
                      c instanceof ut
                        ? c.data !== "nested" &&
                          (c.scrollTrigger && c.scrollTrigger.revert(),
                          c.kill())
                        : !(c instanceof ze) && c.revert && c.revert(i);
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
            for (var a = nr.length; a--; )
              nr[a].id === this.id && nr.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        s
      );
    })(),
    zp = (function () {
      function s(t) {
        (this.contexts = []), (this.scope = t), _e && _e.data.push(this);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          oi(i) || (i = { matches: i });
          var a = new Gl(0, n || this.scope),
            o = (a.conditions = {}),
            l,
            c,
            d;
          _e && !a.selector && (a.selector = _e.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = i);
          for (c in i)
            c === "all"
              ? (d = 1)
              : ((l = li.matchMedia(i[c])),
                l &&
                  (nr.indexOf(a) < 0 && nr.push(a),
                  (o[c] = l.matches) && (d = 1),
                  l.addListener
                    ? l.addListener(Fa)
                    : l.addEventListener("change", Fa)));
          return (
            d &&
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
          return Pl(r);
        });
      },
      timeline: function (e) {
        return new ut(e);
      },
      getTweensOf: function (e, t) {
        return Ee.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        He(e) && (e = Wt(e)[0]);
        var n = tr(e || {}).get,
          a = i ? fl : ul;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a(((Ot[t] && Ot[t].get) || n)(e, t, i, r))
              : function (o, l, c) {
                  return a(((Ot[o] && Ot[o].get) || n)(e, o, l, c));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Wt(e)), e.length > 1)) {
          var r = e.map(function (d) {
              return xt.quickSetter(d, t, i);
            }),
            n = r.length;
          return function (d) {
            for (var h = n; h--; ) r[h](d);
          };
        }
        e = e[0] || {};
        var a = Ot[t],
          o = tr(e),
          l = (o.harness && (o.harness.aliases || {})[t]) || t,
          c = a
            ? function (d) {
                var h = new a();
                ($r._pt = 0),
                  h.init(e, i ? d + i : d, $r, 0, [e]),
                  h.render(1, h),
                  $r._pt && Na(1, $r);
              }
            : o.set(e, l);
        return a
          ? c
          : function (d) {
              return c(e, l, i ? d + i : d, o, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          n = xt.to(
            e,
            Lt(
              ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          a = function (l, c, d) {
            return n.resetTo(t, l, c, d);
          };
        return (a.tween = n), a;
      },
      isTweening: function (e) {
        return Ee.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = rr(e.ease, Or.ease)), pl(Or, e || {});
      },
      config: function (e) {
        return pl(Pt, e || {});
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
            !Ot[o] &&
            !kt[o] &&
            ds(t + " effect requires " + o + " plugin.")
          );
        }),
          (_a[t] = function (o, l, c) {
            return i(Wt(o), Lt(l || {}, n), c);
          }),
          a &&
            (ut.prototype[t] = function (o, l, c) {
              return this.add(_a[t](o, oi(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (e, t) {
        Ke[e] = rr(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? rr(e, t) : Ke;
      },
      getById: function (e) {
        return Ee.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new ut(e),
          r,
          n;
        for (
          i.smoothChildTiming = bt(e.smoothChildTiming),
            Ee.remove(i),
            i._dp = 0,
            i._time = i._tTime = Ee._time,
            r = Ee._first;
          r;

        )
          (n = r._next),
            (t ||
              !(
                !r._dur &&
                r instanceof ze &&
                r.vars.onComplete === r._targets[0]
              )) &&
              ci(i, r, r._start - r._delay),
            (r = n);
        return ci(Ee, i, 0), i;
      },
      context: function (e, t) {
        return e ? new Gl(e, t) : _e;
      },
      matchMedia: function (e) {
        return new zp(e);
      },
      matchMediaRefresh: function () {
        return (
          nr.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || Fa()
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
        wrap: pp,
        wrapYoyo: hp,
        distribute: Sl,
        random: Tl,
        snap: xl,
        normalize: fp,
        getUnit: it,
        clamp: lp,
        splitColor: kl,
        toArray: Wt,
        selector: Ma,
        mapRange: Al,
        pipe: dp,
        unitize: up,
        interpolate: mp,
        shuffle: _l,
      },
      install: nl,
      effects: _a,
      ticker: Dt,
      updateRoot: ut.updateRoot,
      plugins: Ot,
      globalTimeline: Ee,
      core: {
        PropTween: St,
        globals: al,
        Tween: ze,
        Timeline: ut,
        Animation: ys,
        getCache: tr,
        _removeLinkedListItem: ln,
        reverting: function () {
          return Ze;
        },
        context: function (e) {
          return e && _e && (_e.data.push(e), (e._ctx = _e)), _e;
        },
        suppressOverwrites: function (e) {
          return (da = e);
        },
      },
    };
  _t("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (pn[s] = ze[s]);
  }),
    Dt.add(ut.updateRoot),
    ($r = pn.to({}, { duration: 0 }));
  var Rp = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    $p = function (e, t) {
      var i = e._targets,
        r,
        n,
        a;
      for (r in t)
        for (n = i.length; n--; )
          (a = e._ptLookup[n][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = Rp(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[n], r));
    },
    qa = function (e, t) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (r, n, a) {
          a._onInit = function (o) {
            var l, c;
            if (
              (He(n) &&
                ((l = {}),
                _t(n, function (d) {
                  return (l[d] = 1);
                }),
                (n = l)),
              t)
            ) {
              l = {};
              for (c in n) l[c] = t(n[c]);
              n = l;
            }
            $p(o, n);
          };
        },
      };
    },
    xt =
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
              Ze ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
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
        qa("roundProps", Pa),
        qa("modifiers"),
        qa("snap", xl)
      ) || pn;
  (ze.version = ut.version = xt.version = "3.13.0"), (sl = 1), pa() && Nr();
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Xl,
    qi,
    Br,
    Ya,
    ar,
    jl,
    Va,
    Np = function () {
      return typeof window < "u";
    },
    Si = {},
    or = 180 / Math.PI,
    Fr = Math.PI / 180,
    qr = Math.atan2,
    Ul = 1e8,
    Ha = /([A-Z])/g,
    Bp = /(left|right|width|margin|padding|x)/i,
    Fp = /[\s,\(]\S/,
    di = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Wa = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    qp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    Yp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    Vp = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Zl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Kl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Hp = function (e, t, i) {
      return (e.style[t] = i);
    },
    Wp = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    Gp = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    Xp = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    jp = function (e, t, i, r, n) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(n, a);
    },
    Up = function (e, t, i, r, n) {
      var a = e._gsap;
      (a[t] = i), a.renderTransform(n, a);
    },
    Ae = "transform",
    Tt = Ae + "Origin",
    Zp = function s(e, t) {
      var i = this,
        r = this.target,
        n = r.style,
        a = r._gsap;
      if (e in Si && n) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = di[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = xi(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : xi(r, e)),
            e === Tt && (this.tfm.zOrigin = a.zOrigin);
        else
          return di.transform.split(",").forEach(function (o) {
            return s.call(i, o, t);
          });
        if (this.props.indexOf(Ae) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Tt, t, "")),
          (e = Ae);
      }
      (n || t) && this.props.push(e, t, n[e]);
    },
    Ql = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Kp = function () {
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
                : e[n].replace(Ha, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (n = Va()),
          (!n || !n.isStart) &&
            !i[Ae] &&
            (Ql(i),
            r.zOrigin &&
              i[Tt] &&
              ((i[Tt] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    Jl = function (e, t) {
      var i = { target: e, props: [], revert: Kp, save: Zp };
      return (
        e._gsap || xt.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    ec,
    Ga = function (e, t) {
      var i = qi.createElementNS
        ? qi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : qi.createElement(e);
      return i && i.style ? i : qi.createElement(e);
    },
    Gt = function s(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(Ha, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && s(e, Yr(t) || t, 1)) ||
        ""
      );
    },
    tc = "O,Moz,ms,Ms,Webkit".split(","),
    Yr = function (e, t, i) {
      var r = t || ar,
        n = r.style,
        a = 5;
      if (e in n && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(tc[a] + e in n);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? tc[a] : "") + e;
    },
    Xa = function () {
      Np() &&
        window.document &&
        ((Xl = window),
        (qi = Xl.document),
        (Br = qi.documentElement),
        (ar = Ga("div") || { style: {} }),
        Ga("div"),
        (Ae = Yr(Ae)),
        (Tt = Ae + "Origin"),
        (ar.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (ec = !!Yr("perspective")),
        (Va = xt.core.reverting),
        (Ya = 1));
    },
    ic = function (e) {
      var t = e.ownerSVGElement,
        i = Ga(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = e.cloneNode(!0),
        n;
      (r.style.display = "block"), i.appendChild(r), Br.appendChild(i);
      try {
        n = r.getBBox();
      } catch {}
      return i.removeChild(r), Br.removeChild(i), n;
    },
    rc = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    sc = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch {
        (t = ic(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = ic(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +rc(e, ["x", "cx", "x1"]) || 0,
              y: +rc(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    nc = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && sc(e));
    },
    lr = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in Si && t !== Tt && (t = Ae),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(Ha, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Yi = function (e, t, i, r, n, a) {
      var o = new St(e._pt, t, i, 0, 1, a ? Kl : Zl);
      return (e._pt = o), (o.b = r), (o.e = n), e._props.push(i), o;
    },
    ac = { deg: 1, rad: 1, turn: 1 },
    Qp = { grid: 1, flex: 1 },
    Vi = function s(e, t, i, r) {
      var n = parseFloat(i) || 0,
        a = (i + "").trim().substr((n + "").length) || "px",
        o = ar.style,
        l = Bp.test(t),
        c = e.tagName.toLowerCase() === "svg",
        d = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        u,
        f,
        g,
        y;
      if (r === a || !n || ac[r] || ac[a]) return n;
      if (
        (a !== "px" && !m && (n = s(e, t, i, "px")),
        (y = e.getCTM && nc(e)),
        (p || a === "%") && (Si[t] || ~t.indexOf("adius")))
      )
        return (
          (u = y ? e.getBBox()[l ? "width" : "height"] : e[d]),
          Oe(p ? (n / u) * h : (n / 100) * u)
        );
      if (
        ((o[l ? "width" : "height"] = h + (m ? a : r)),
        (f =
          (r !== "rem" && ~t.indexOf("adius")) ||
          (r === "em" && e.appendChild && !c)
            ? e
            : e.parentNode),
        y && (f = (e.ownerSVGElement || {}).parentNode),
        (!f || f === qi || !f.appendChild) && (f = qi.body),
        (g = f._gsap),
        g && p && g.width && l && g.time === Dt.time && !g.uncache)
      )
        return Oe((n / g.width) * h);
      if (p && (t === "height" || t === "width")) {
        var w = e.style[t];
        (e.style[t] = h + r), (u = e[d]), w ? (e.style[t] = w) : lr(e, t);
      } else
        (p || a === "%") &&
          !Qp[Gt(f, "display")] &&
          (o.position = Gt(e, "position")),
          f === e && (o.position = "static"),
          f.appendChild(ar),
          (u = ar[d]),
          f.removeChild(ar),
          (o.position = "absolute");
      return (
        l && p && ((g = tr(f)), (g.time = Dt.time), (g.width = f[d])),
        Oe(m ? (u * n) / h : u && n ? (h / u) * n : 0)
      );
    },
    xi = function (e, t, i, r) {
      var n;
      return (
        Ya || Xa(),
        t in di &&
          t !== "transform" &&
          ((t = di[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Si[t] && t !== "transform"
          ? ((n = Ss(e, r)),
            (n =
              t !== "transformOrigin"
                ? n[t]
                : n.svg
                ? n.origin
                : mn(Gt(e, Tt)) + " " + n.zOrigin + "px"))
          : ((n = e.style[t]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (hn[t] && hn[t](e, t, i)) ||
                Gt(e, t) ||
                cl(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? Vi(e, t, n, i) + i : n
      );
    },
    Jp = function (e, t, i, r) {
      if (!i || i === "none") {
        var n = Yr(t, e, 1),
          a = n && Gt(e, n, 1);
        a && a !== i
          ? ((t = n), (i = a))
          : t === "borderColor" && (i = Gt(e, "borderTopColor"));
      }
      var o = new St(this._pt, e.style, t, 0, 1, Vl),
        l = 0,
        c = 0,
        d,
        h,
        m,
        p,
        u,
        f,
        g,
        y,
        w,
        v,
        b,
        _;
      if (
        ((o.b = i),
        (o.e = r),
        (i += ""),
        (r += ""),
        r.substring(0, 6) === "var(--" &&
          (r = Gt(e, r.substring(4, r.indexOf(")")))),
        r === "auto" &&
          ((f = e.style[t]),
          (e.style[t] = r),
          (r = Gt(e, t) || r),
          f ? (e.style[t] = f) : lr(e, t)),
        (d = [i, r]),
        Il(d),
        (i = d[0]),
        (r = d[1]),
        (m = i.match(Lr) || []),
        (_ = r.match(Lr) || []),
        _.length)
      ) {
        for (; (h = Lr.exec(r)); )
          (g = h[0]),
            (w = r.substring(l, h.index)),
            u
              ? (u = (u + 1) % 5)
              : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") &&
                (u = 1),
            g !== (f = m[c++] || "") &&
              ((p = parseFloat(f) || 0),
              (b = f.substr((p + "").length)),
              g.charAt(1) === "=" && (g = Ir(p, g) + b),
              (y = parseFloat(g)),
              (v = g.substr((y + "").length)),
              (l = Lr.lastIndex - v.length),
              v ||
                ((v = v || Pt.units[t] || b),
                l === r.length && ((r += v), (o.e += v))),
              b !== v && (p = Vi(e, t, f, v) || 0),
              (o._pt = {
                _next: o._pt,
                p: w || c === 1 ? w : ",",
                s: p,
                c: y - p,
                m: (u && u < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = t === "display" && r === "none" ? Kl : Zl;
      return il.test(r) && (o.e = 0), (this._pt = o), o;
    },
    oc = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    eh = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = oc[i] || i),
        (t[1] = oc[r] || r),
        t.join(" ")
      );
    },
    th = function (e, t) {
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
              Si[o] && ((l = 1), (o = o === "transformOrigin" ? Tt : Ae)),
              lr(i, o);
        l &&
          (lr(i, Ae),
          a &&
            (a.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            Ss(i, 1),
            (a.uncache = 1),
            Ql(r)));
      }
    },
    hn = {
      clearProps: function (e, t, i, r, n) {
        if (n.data !== "isFromStart") {
          var a = (e._pt = new St(e._pt, t, i, 0, 0, th));
          return (a.u = r), (a.pr = -10), (a.tween = n), e._props.push(i), 1;
        }
      },
    },
    _s = [1, 0, 0, 1, 0, 0],
    lc = {},
    cc = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    dc = function (e) {
      var t = Gt(e, Ae);
      return cc(t) ? _s : t.substr(7).match(tl).map(Oe);
    },
    ja = function (e, t) {
      var i = e._gsap || tr(e),
        r = e.style,
        n = dc(e),
        a,
        o,
        l,
        c;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? _s : n)
        : (n === _s &&
            !e.offsetParent &&
            e !== Br &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((c = 1), (o = e.nextElementSibling), Br.appendChild(e)),
            (n = dc(e)),
            l ? (r.display = l) : lr(e, "display"),
            c &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : Br.removeChild(e))),
          t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Ua = function (e, t, i, r, n, a) {
      var o = e._gsap,
        l = n || ja(e, !0),
        c = o.xOrigin || 0,
        d = o.yOrigin || 0,
        h = o.xOffset || 0,
        m = o.yOffset || 0,
        p = l[0],
        u = l[1],
        f = l[2],
        g = l[3],
        y = l[4],
        w = l[5],
        v = t.split(" "),
        b = parseFloat(v[0]) || 0,
        _ = parseFloat(v[1]) || 0,
        S,
        T,
        A,
        x;
      i
        ? l !== _s &&
          (T = p * g - u * f) &&
          ((A = b * (g / T) + _ * (-f / T) + (f * w - g * y) / T),
          (x = b * (-u / T) + _ * (p / T) - (p * w - u * y) / T),
          (b = A),
          (_ = x))
        : ((S = sc(e)),
          (b = S.x + (~v[0].indexOf("%") ? (b / 100) * S.width : b)),
          (_ =
            S.y + (~(v[1] || v[0]).indexOf("%") ? (_ / 100) * S.height : _))),
        r || (r !== !1 && o.smooth)
          ? ((y = b - c),
            (w = _ - d),
            (o.xOffset = h + (y * p + w * f) - y),
            (o.yOffset = m + (y * u + w * g) - w))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = b),
        (o.yOrigin = _),
        (o.smooth = !!r),
        (o.origin = t),
        (o.originIsAbsolute = !!i),
        (e.style[Tt] = "0px 0px"),
        a &&
          (Yi(a, o, "xOrigin", c, b),
          Yi(a, o, "yOrigin", d, _),
          Yi(a, o, "xOffset", h, o.xOffset),
          Yi(a, o, "yOffset", m, o.yOffset)),
        e.setAttribute("data-svg-origin", b + " " + _);
    },
    Ss = function (e, t) {
      var i = e._gsap || new $l(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        n = i.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        c = Gt(e, Tt) || "0",
        d,
        h,
        m,
        p,
        u,
        f,
        g,
        y,
        w,
        v,
        b,
        _,
        S,
        T,
        A,
        x,
        E,
        L,
        M,
        k,
        I,
        z,
        D,
        P,
        O,
        $,
        C,
        H,
        Z,
        fe,
        ce,
        B;
      return (
        (d = h = m = f = g = y = w = v = b = 0),
        (p = u = 1),
        (i.svg = !!(e.getCTM && nc(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[Ae] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[Ae] !== "none" ? l[Ae] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (T = ja(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((O = e.getBBox()),
              (c = i.xOrigin - O.x + "px " + (i.yOrigin - O.y) + "px"),
              (P = ""))
            : (P = !t && e.getAttribute("data-svg-origin")),
          Ua(e, P || c, !!P || i.originIsAbsolute, i.smooth !== !1, T)),
        (_ = i.xOrigin || 0),
        (S = i.yOrigin || 0),
        T !== _s &&
          ((L = T[0]),
          (M = T[1]),
          (k = T[2]),
          (I = T[3]),
          (d = z = T[4]),
          (h = D = T[5]),
          T.length === 6
            ? ((p = Math.sqrt(L * L + M * M)),
              (u = Math.sqrt(I * I + k * k)),
              (f = L || M ? qr(M, L) * or : 0),
              (w = k || I ? qr(k, I) * or + f : 0),
              w && (u *= Math.abs(Math.cos(w * Fr))),
              i.svg && ((d -= _ - (_ * L + S * k)), (h -= S - (_ * M + S * I))))
            : ((B = T[6]),
              (fe = T[7]),
              (C = T[8]),
              (H = T[9]),
              (Z = T[10]),
              (ce = T[11]),
              (d = T[12]),
              (h = T[13]),
              (m = T[14]),
              (A = qr(B, Z)),
              (g = A * or),
              A &&
                ((x = Math.cos(-A)),
                (E = Math.sin(-A)),
                (P = z * x + C * E),
                (O = D * x + H * E),
                ($ = B * x + Z * E),
                (C = z * -E + C * x),
                (H = D * -E + H * x),
                (Z = B * -E + Z * x),
                (ce = fe * -E + ce * x),
                (z = P),
                (D = O),
                (B = $)),
              (A = qr(-k, Z)),
              (y = A * or),
              A &&
                ((x = Math.cos(-A)),
                (E = Math.sin(-A)),
                (P = L * x - C * E),
                (O = M * x - H * E),
                ($ = k * x - Z * E),
                (ce = I * E + ce * x),
                (L = P),
                (M = O),
                (k = $)),
              (A = qr(M, L)),
              (f = A * or),
              A &&
                ((x = Math.cos(A)),
                (E = Math.sin(A)),
                (P = L * x + M * E),
                (O = z * x + D * E),
                (M = M * x - L * E),
                (D = D * x - z * E),
                (L = P),
                (z = O)),
              g &&
                Math.abs(g) + Math.abs(f) > 359.9 &&
                ((g = f = 0), (y = 180 - y)),
              (p = Oe(Math.sqrt(L * L + M * M + k * k))),
              (u = Oe(Math.sqrt(D * D + B * B))),
              (A = qr(z, D)),
              (w = Math.abs(A) > 2e-4 ? A * or : 0),
              (b = ce ? 1 / (ce < 0 ? -ce : ce) : 0)),
          i.svg &&
            ((P = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !cc(Gt(e, Ae))),
            P && e.setAttribute("transform", P))),
        Math.abs(w) > 90 &&
          Math.abs(w) < 270 &&
          (n
            ? ((p *= -1),
              (w += f <= 0 ? 180 : -180),
              (f += f <= 0 ? 180 : -180))
            : ((u *= -1), (w += w <= 0 ? 180 : -180))),
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
        (i.scaleY = Oe(u)),
        (i.rotation = Oe(f) + o),
        (i.rotationX = Oe(g) + o),
        (i.rotationY = Oe(y) + o),
        (i.skewX = w + o),
        (i.skewY = v + o),
        (i.transformPerspective = b + a),
        (i.zOrigin = parseFloat(c.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[Tt] = mn(c)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Pt.force3D),
        (i.renderTransform = i.svg ? rh : ec ? uc : ih),
        (i.uncache = 0),
        i
      );
    },
    mn = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Za = function (e, t, i) {
      var r = it(t);
      return Oe(parseFloat(t) + parseFloat(Vi(e, "x", i + "px", r))) + r;
    },
    ih = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        uc(e, t);
    },
    cr = "0deg",
    xs = "0px",
    dr = ") ",
    uc = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.z,
        c = i.rotation,
        d = i.rotationY,
        h = i.rotationX,
        m = i.skewX,
        p = i.skewY,
        u = i.scaleX,
        f = i.scaleY,
        g = i.transformPerspective,
        y = i.force3D,
        w = i.target,
        v = i.zOrigin,
        b = "",
        _ = (y === "auto" && e && e !== 1) || y === !0;
      if (v && (h !== cr || d !== cr)) {
        var S = parseFloat(d) * Fr,
          T = Math.sin(S),
          A = Math.cos(S),
          x;
        (S = parseFloat(h) * Fr),
          (x = Math.cos(S)),
          (a = Za(w, a, T * x * -v)),
          (o = Za(w, o, -Math.sin(S) * -v)),
          (l = Za(w, l, A * x * -v + v));
      }
      g !== xs && (b += "perspective(" + g + dr),
        (r || n) && (b += "translate(" + r + "%, " + n + "%) "),
        (_ || a !== xs || o !== xs || l !== xs) &&
          (b +=
            l !== xs || _
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + dr),
        c !== cr && (b += "rotate(" + c + dr),
        d !== cr && (b += "rotateY(" + d + dr),
        h !== cr && (b += "rotateX(" + h + dr),
        (m !== cr || p !== cr) && (b += "skew(" + m + ", " + p + dr),
        (u !== 1 || f !== 1) && (b += "scale(" + u + ", " + f + dr),
        (w.style[Ae] = b || "translate(0, 0)");
    },
    rh = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.rotation,
        c = i.skewX,
        d = i.skewY,
        h = i.scaleX,
        m = i.scaleY,
        p = i.target,
        u = i.xOrigin,
        f = i.yOrigin,
        g = i.xOffset,
        y = i.yOffset,
        w = i.forceCSS,
        v = parseFloat(a),
        b = parseFloat(o),
        _,
        S,
        T,
        A,
        x;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (d = parseFloat(d)),
        d && ((d = parseFloat(d)), (c += d), (l += d)),
        l || c
          ? ((l *= Fr),
            (c *= Fr),
            (_ = Math.cos(l) * h),
            (S = Math.sin(l) * h),
            (T = Math.sin(l - c) * -m),
            (A = Math.cos(l - c) * m),
            c &&
              ((d *= Fr),
              (x = Math.tan(c - d)),
              (x = Math.sqrt(1 + x * x)),
              (T *= x),
              (A *= x),
              d &&
                ((x = Math.tan(d)),
                (x = Math.sqrt(1 + x * x)),
                (_ *= x),
                (S *= x))),
            (_ = Oe(_)),
            (S = Oe(S)),
            (T = Oe(T)),
            (A = Oe(A)))
          : ((_ = h), (A = m), (S = T = 0)),
        ((v && !~(a + "").indexOf("px")) || (b && !~(o + "").indexOf("px"))) &&
          ((v = Vi(p, "x", a, "px")), (b = Vi(p, "y", o, "px"))),
        (u || f || g || y) &&
          ((v = Oe(v + u - (u * _ + f * T) + g)),
          (b = Oe(b + f - (u * S + f * A) + y))),
        (r || n) &&
          ((x = p.getBBox()),
          (v = Oe(v + (r / 100) * x.width)),
          (b = Oe(b + (n / 100) * x.height))),
        (x =
          "matrix(" +
          _ +
          "," +
          S +
          "," +
          T +
          "," +
          A +
          "," +
          v +
          "," +
          b +
          ")"),
        p.setAttribute("transform", x),
        w && (p.style[Ae] = x);
    },
    sh = function (e, t, i, r, n) {
      var a = 360,
        o = He(n),
        l = parseFloat(n) * (o && ~n.indexOf("rad") ? or : 1),
        c = l - r,
        d = r + c + "deg",
        h,
        m;
      return (
        o &&
          ((h = n.split("_")[1]),
          h === "short" &&
            ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -a)),
          h === "cw" && c < 0
            ? (c = ((c + a * Ul) % a) - ~~(c / a) * a)
            : h === "ccw" && c > 0 && (c = ((c - a * Ul) % a) - ~~(c / a) * a)),
        (e._pt = m = new St(e._pt, t, i, r, c, qp)),
        (m.e = d),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    fc = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    nh = function (e, t, i) {
      var r = fc({}, i._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        a = i.style,
        o,
        l,
        c,
        d,
        h,
        m,
        p,
        u;
      r.svg
        ? ((c = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (a[Ae] = t),
          (o = Ss(i, 1)),
          lr(i, Ae),
          i.setAttribute("transform", c))
        : ((c = getComputedStyle(i)[Ae]),
          (a[Ae] = t),
          (o = Ss(i, 1)),
          (a[Ae] = c));
      for (l in Si)
        (c = r[l]),
          (d = o[l]),
          c !== d &&
            n.indexOf(l) < 0 &&
            ((p = it(c)),
            (u = it(d)),
            (h = p !== u ? Vi(i, l, c, u) : parseFloat(c)),
            (m = parseFloat(d)),
            (e._pt = new St(e._pt, o, l, h, m - h, Wa)),
            (e._pt.u = u || 0),
            e._props.push(l));
      fc(o, r);
    };
  _t("padding,margin,Width,Radius", function (s, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      n = "Left",
      a = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (
        o
      ) {
        return e < 2 ? s + o : "border" + o + s;
      });
    hn[e > 1 ? "border" + s : s] = function (o, l, c, d, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = a.map(function (u) {
            return xi(o, u, c);
          })),
          (p = m.join(" ")),
          p.split(m[0]).length === 5 ? m[0] : p
        );
      (m = (d + "").split(" ")),
        (p = {}),
        a.forEach(function (u, f) {
          return (p[u] = m[f] = m[f] || m[((f - 1) / 2) | 0]);
        }),
        o.init(l, p, h);
    };
  });
  var pc = {
    name: "css",
    register: Xa,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, n) {
      var a = this._props,
        o = e.style,
        l = i.vars.startAt,
        c,
        d,
        h,
        m,
        p,
        u,
        f,
        g,
        y,
        w,
        v,
        b,
        _,
        S,
        T,
        A;
      Ya || Xa(),
        (this.styles = this.styles || Jl(e)),
        (A = this.styles.props),
        (this.tween = i);
      for (f in t)
        if (
          f !== "autoRound" &&
          ((d = t[f]), !(Ot[f] && Nl(f, t, i, r, e, n)))
        ) {
          if (
            ((p = typeof d),
            (u = hn[f]),
            p === "function" && ((d = d.call(i, r, e, n)), (p = typeof d)),
            p === "string" && ~d.indexOf("random(") && (d = ms(d)),
            u)
          )
            u(this, e, f, d, i) && (T = 1);
          else if (f.substr(0, 2) === "--")
            (c = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
              (d += ""),
              (Bi.lastIndex = 0),
              Bi.test(c) || ((g = it(c)), (y = it(d))),
              y ? g !== y && (c = Vi(e, f, c, y) + y) : g && (d += g),
              this.add(o, "setProperty", c, d, r, n, 0, 0, f),
              a.push(f),
              A.push(f, 0, o[f]);
          else if (p !== "undefined") {
            if (
              (l && f in l
                ? ((c =
                    typeof l[f] == "function" ? l[f].call(i, r, e, n) : l[f]),
                  He(c) && ~c.indexOf("random(") && (c = ms(c)),
                  it(c + "") ||
                    c === "auto" ||
                    (c += Pt.units[f] || it(xi(e, f)) || ""),
                  (c + "").charAt(1) === "=" && (c = xi(e, f)))
                : (c = xi(e, f)),
              (m = parseFloat(c)),
              (w = p === "string" && d.charAt(1) === "=" && d.substr(0, 2)),
              w && (d = d.substr(2)),
              (h = parseFloat(d)),
              f in di &&
                (f === "autoAlpha" &&
                  (m === 1 && xi(e, "visibility") === "hidden" && h && (m = 0),
                  A.push("visibility", 0, o.visibility),
                  Yi(
                    this,
                    o,
                    "visibility",
                    m ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                f !== "scale" &&
                  f !== "transform" &&
                  ((f = di[f]), ~f.indexOf(",") && (f = f.split(",")[0]))),
              (v = f in Si),
              v)
            ) {
              if (
                (this.styles.save(f),
                p === "string" &&
                  d.substring(0, 6) === "var(--" &&
                  ((d = Gt(e, d.substring(4, d.indexOf(")")))),
                  (h = parseFloat(d))),
                b ||
                  ((_ = e._gsap),
                  (_.renderTransform && !t.parseTransform) ||
                    Ss(e, t.parseTransform),
                  (S = t.smoothOrigin !== !1 && _.smooth),
                  (b = this._pt =
                    new St(this._pt, o, Ae, 0, 1, _.renderTransform, _, 0, -1)),
                  (b.dep = 1)),
                f === "scale")
              )
                (this._pt = new St(
                  this._pt,
                  _,
                  "scaleY",
                  _.scaleY,
                  (w ? Ir(_.scaleY, w + h) : h) - _.scaleY || 0,
                  Wa
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", f),
                  (f += "X");
              else if (f === "transformOrigin") {
                A.push(Tt, 0, o[Tt]),
                  (d = eh(d)),
                  _.svg
                    ? Ua(e, d, 0, S, 0, this)
                    : ((y = parseFloat(d.split(" ")[2]) || 0),
                      y !== _.zOrigin && Yi(this, _, "zOrigin", _.zOrigin, y),
                      Yi(this, o, f, mn(c), mn(d)));
                continue;
              } else if (f === "svgOrigin") {
                Ua(e, d, 1, S, 0, this);
                continue;
              } else if (f in lc) {
                sh(this, _, f, m, w ? Ir(m, w + d) : d);
                continue;
              } else if (f === "smoothOrigin") {
                Yi(this, _, "smooth", _.smooth, d);
                continue;
              } else if (f === "force3D") {
                _[f] = d;
                continue;
              } else if (f === "transform") {
                nh(this, d, e);
                continue;
              }
            } else f in o || (f = Yr(f) || f);
            if (
              v ||
              ((h || h === 0) && (m || m === 0) && !Fp.test(d) && f in o)
            )
              (g = (c + "").substr((m + "").length)),
                h || (h = 0),
                (y = it(d) || (f in Pt.units ? Pt.units[f] : g)),
                g !== y && (m = Vi(e, f, c, y)),
                (this._pt = new St(
                  this._pt,
                  v ? _ : o,
                  f,
                  m,
                  (w ? Ir(m, w + h) : h) - m,
                  !v && (y === "px" || f === "zIndex") && t.autoRound !== !1
                    ? Vp
                    : Wa
                )),
                (this._pt.u = y || 0),
                g !== y && y !== "%" && ((this._pt.b = c), (this._pt.r = Yp));
            else if (f in o) Jp.call(this, e, f, c, w ? w + d : d);
            else if (f in e) this.add(e, f, c || e[f], w ? w + d : d, r, n);
            else if (f !== "parseTransform") {
              wa(f, d);
              continue;
            }
            v ||
              (f in o
                ? A.push(f, 0, o[f])
                : typeof e[f] == "function"
                ? A.push(f, 2, e[f]())
                : A.push(f, 1, c || e[f])),
              a.push(f);
          }
        }
      T && Hl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Va())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: xi,
    aliases: di,
    getSetter: function (e, t, i) {
      var r = di[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in Si && t !== Tt && (e._gsap.x || xi(e, "x"))
          ? i && jl === i
            ? t === "scale"
              ? Xp
              : Gp
            : (jl = i || {}) && (t === "scale" ? jp : Up)
          : e.style && !fa(e.style[t])
          ? Hp
          : ~t.indexOf("-")
          ? Wp
          : $a(e, t)
      );
    },
    core: { _removeProperty: lr, _getMatrix: ja },
  };
  (xt.utils.checkPrefix = Yr),
    (xt.core.getStyleSaver = Jl),
    (function (s, e, t, i) {
      var r = _t(s + "," + e + "," + t, function (n) {
        Si[n] = 1;
      });
      _t(e, function (n) {
        (Pt.units[n] = "deg"), (lc[n] = 1);
      }),
        (di[r[13]] = s + "," + e),
        _t(i, function (n) {
          var a = n.split(":");
          di[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    _t(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        Pt.units[s] = "px";
      }
    ),
    xt.registerPlugin(pc);
  var q = xt.registerPlugin(pc) || xt;
  function ah(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function oh(s, e, t) {
    return e && ah(s.prototype, e), s;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var rt,
    gn,
    zt,
    Hi,
    Wi,
    Vr,
    hc,
    ur,
    Ts,
    mc,
    Ti,
    Jt,
    gc,
    vc = function () {
      return (
        rt ||
        (typeof window < "u" && (rt = window.gsap) && rt.registerPlugin && rt)
      );
    },
    wc = 1,
    Hr = [],
    ie = [],
    ui = [],
    Es = Date.now,
    Ka = function (e, t) {
      return t;
    },
    lh = function () {
      var e = Ts.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, ie),
        r.push.apply(r, ui),
        (ie = i),
        (ui = r),
        (Ka = function (a, o) {
          return t[a](o);
        });
    },
    Gi = function (e, t) {
      return ~ui.indexOf(e) && ui[ui.indexOf(e) + 1][t];
    },
    As = function (e) {
      return !!~mc.indexOf(e);
    },
    ft = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!n });
    },
    pt = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    vn = "scrollLeft",
    wn = "scrollTop",
    Qa = function () {
      return (Ti && Ti.isPressed) || ie.cache++;
    },
    yn = function (e, t) {
      var i = function r(n) {
        if (n || n === 0) {
          wc && (zt.history.scrollRestoration = "manual");
          var a = Ti && Ti.isPressed;
          (n = r.v = Math.round(n) || (Ti && Ti.iOS ? 1 : 0)),
            e(n),
            (r.cacheID = ie.cache),
            a && Ka("ss", n);
        } else
          (t || ie.cache !== r.cacheID || Ka("ref")) &&
            ((r.cacheID = ie.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    ht = {
      s: vn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: yn(function (s) {
        return arguments.length
          ? zt.scrollTo(s, Be.sc())
          : zt.pageXOffset || Hi[vn] || Wi[vn] || Vr[vn] || 0;
      }),
    },
    Be = {
      s: wn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: ht,
      sc: yn(function (s) {
        return arguments.length
          ? zt.scrollTo(ht.sc(), s)
          : zt.pageYOffset || Hi[wn] || Wi[wn] || Vr[wn] || 0;
      }),
    },
    Et = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || rt.utils.toArray)(e)[0] ||
        (typeof e == "string" && rt.config().nullTargetWarn !== !1
          ? void 0
          : null)
      );
    },
    ch = function (e, t) {
      for (var i = t.length; i--; )
        if (t[i] === e || t[i].contains(e)) return !0;
      return !1;
    },
    Xi = function (e, t) {
      var i = t.s,
        r = t.sc;
      As(e) && (e = Hi.scrollingElement || Wi);
      var n = ie.indexOf(e),
        a = r === Be.sc ? 1 : 2;
      !~n && (n = ie.push(e) - 1), ie[n + a] || ft(e, "scroll", Qa);
      var o = ie[n + a],
        l =
          o ||
          (ie[n + a] =
            yn(Gi(e, i), !0) ||
            (As(e)
              ? r
              : yn(function (c) {
                  return arguments.length ? (e[i] = c) : e[i];
                })));
      return (
        (l.target = e),
        o || (l.smooth = rt.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Ja = function (e, t, i) {
      var r = e,
        n = e,
        a = Es(),
        o = a,
        l = t || 50,
        c = Math.max(500, l * 3),
        d = function (u, f) {
          var g = Es();
          f || g - a > l
            ? ((n = r), (r = u), (o = a), (a = g))
            : i
            ? (r += u)
            : (r = n + ((u - n) / (g - o)) * (a - o));
        },
        h = function () {
          (n = r = i ? 0 : r), (o = a = 0);
        },
        m = function (u) {
          var f = o,
            g = n,
            y = Es();
          return (
            (u || u === 0) && u !== r && d(u),
            a === o || y - o > c
              ? 0
              : ((r + (i ? g : -g)) / ((i ? y : a) - f)) * 1e3
          );
        };
      return { update: d, reset: h, getVelocity: m };
    },
    Cs = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    yc = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    bc = function () {
      (Ts = rt.core.globals().ScrollTrigger), Ts && Ts.core && lh();
    },
    _c = function (e) {
      return (
        (rt = e || vc()),
        !gn &&
          rt &&
          typeof document < "u" &&
          document.body &&
          ((zt = window),
          (Hi = document),
          (Wi = Hi.documentElement),
          (Vr = Hi.body),
          (mc = [zt, Hi, Wi, Vr]),
          (gc = rt.core.context || function () {}),
          (ur = "onpointerenter" in Vr ? "pointer" : "mouse"),
          (hc = Le.isTouch =
            zt.matchMedia &&
            zt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in zt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Jt = Le.eventTypes =
            (
              "ontouchstart" in Wi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Wi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (wc = 0);
          }, 500),
          bc(),
          (gn = 1)),
        gn
      );
    };
  (ht.op = Be), (ie.cache = 0);
  var Le = (function () {
    function s(t) {
      this.init(t);
    }
    var e = s.prototype;
    return (
      (e.init = function (i) {
        gn || _c(rt), Ts || bc();
        var r = i.tolerance,
          n = i.dragMinimum,
          a = i.type,
          o = i.target,
          l = i.lineHeight,
          c = i.debounce,
          d = i.preventDefault,
          h = i.onStop,
          m = i.onStopDelay,
          p = i.ignore,
          u = i.wheelSpeed,
          f = i.event,
          g = i.onDragStart,
          y = i.onDragEnd,
          w = i.onDrag,
          v = i.onPress,
          b = i.onRelease,
          _ = i.onRight,
          S = i.onLeft,
          T = i.onUp,
          A = i.onDown,
          x = i.onChangeX,
          E = i.onChangeY,
          L = i.onChange,
          M = i.onToggleX,
          k = i.onToggleY,
          I = i.onHover,
          z = i.onHoverEnd,
          D = i.onMove,
          P = i.ignoreCheck,
          O = i.isNormalizer,
          $ = i.onGestureStart,
          C = i.onGestureEnd,
          H = i.onWheel,
          Z = i.onEnable,
          fe = i.onDisable,
          ce = i.onClick,
          B = i.scrollSpeed,
          N = i.capture,
          F = i.allowClicks,
          j = i.lockAxis,
          le = i.onLockAxis;
        (this.target = o = Et(o) || Wi),
          (this.vars = i),
          p && (p = rt.utils.toArray(p)),
          (r = r || 1e-9),
          (n = n || 0),
          (u = u || 1),
          (B = B || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(zt.getComputedStyle(Vr).lineHeight) || 22);
        var Qe,
          Se,
          xe,
          J,
          se,
          ye,
          qe,
          R = this,
          $e = 0,
          ot = 0,
          Bt = i.passive || (!d && i.passive !== !1),
          ge = Xi(o, ht),
          Ft = Xi(o, Be),
          Kt = ge(),
          ti = Ft(),
          Pe =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            Jt[0] === "pointerdown",
          Qt = As(o),
          pe = o.ownerDocument || Hi,
          At = [0, 0, 0],
          Xe = [0, 0, 0],
          Pi = 0,
          Gs = function () {
            return (Pi = Es());
          },
          Ne = function (U, de) {
            return (
              ((R.event = U) && p && ch(U.target, p)) ||
              (de && Pe && U.pointerType !== "touch") ||
              (P && P(U, de))
            );
          },
          Zn = function () {
            R._vx.reset(), R._vy.reset(), Se.pause(), h && h(R);
          },
          ki = function () {
            var U = (R.deltaX = yc(At)),
              de = (R.deltaY = yc(Xe)),
              Y = Math.abs(U) >= r,
              K = Math.abs(de) >= r;
            L && (Y || K) && L(R, U, de, At, Xe),
              Y &&
                (_ && R.deltaX > 0 && _(R),
                S && R.deltaX < 0 && S(R),
                x && x(R),
                M && R.deltaX < 0 != $e < 0 && M(R),
                ($e = R.deltaX),
                (At[0] = At[1] = At[2] = 0)),
              K &&
                (A && R.deltaY > 0 && A(R),
                T && R.deltaY < 0 && T(R),
                E && E(R),
                k && R.deltaY < 0 != ot < 0 && k(R),
                (ot = R.deltaY),
                (Xe[0] = Xe[1] = Xe[2] = 0)),
              (J || xe) &&
                (D && D(R),
                xe && (g && xe === 1 && g(R), w && w(R), (xe = 0)),
                (J = !1)),
              ye && !(ye = !1) && le && le(R),
              se && (H(R), (se = !1)),
              (Qe = 0);
          },
          ts = function (U, de, Y) {
            (At[Y] += U),
              (Xe[Y] += de),
              R._vx.update(U),
              R._vy.update(de),
              c ? Qe || (Qe = requestAnimationFrame(ki)) : ki();
          },
          is = function (U, de) {
            j &&
              !qe &&
              ((R.axis = qe = Math.abs(U) > Math.abs(de) ? "x" : "y"),
              (ye = !0)),
              qe !== "y" && ((At[2] += U), R._vx.update(U, !0)),
              qe !== "x" && ((Xe[2] += de), R._vy.update(de, !0)),
              c ? Qe || (Qe = requestAnimationFrame(ki)) : ki();
          },
          Zi = function (U) {
            if (!Ne(U, 1)) {
              U = Cs(U, d);
              var de = U.clientX,
                Y = U.clientY,
                K = de - R.x,
                X = Y - R.y,
                Q = R.isDragging;
              (R.x = de),
                (R.y = Y),
                (Q ||
                  ((K || X) &&
                    (Math.abs(R.startX - de) >= n ||
                      Math.abs(R.startY - Y) >= n))) &&
                  ((xe = Q ? 2 : 1), Q || (R.isDragging = !0), is(K, X));
            }
          },
          Er = (R.onPress = function (ee) {
            Ne(ee, 1) ||
              (ee && ee.button) ||
              ((R.axis = qe = null),
              Se.pause(),
              (R.isPressed = !0),
              (ee = Cs(ee)),
              ($e = ot = 0),
              (R.startX = R.x = ee.clientX),
              (R.startY = R.y = ee.clientY),
              R._vx.reset(),
              R._vy.reset(),
              ft(O ? o : pe, Jt[1], Zi, Bt, !0),
              (R.deltaX = R.deltaY = 0),
              v && v(R));
          }),
          ae = (R.onRelease = function (ee) {
            if (!Ne(ee, 1)) {
              pt(O ? o : pe, Jt[1], Zi, !0);
              var U = !isNaN(R.y - R.startY),
                de = R.isDragging,
                Y =
                  de &&
                  (Math.abs(R.x - R.startX) > 3 ||
                    Math.abs(R.y - R.startY) > 3),
                K = Cs(ee);
              !Y &&
                U &&
                (R._vx.reset(),
                R._vy.reset(),
                d &&
                  F &&
                  rt.delayedCall(0.08, function () {
                    if (Es() - Pi > 300 && !ee.defaultPrevented) {
                      if (ee.target.click) ee.target.click();
                      else if (pe.createEvent) {
                        var X = pe.createEvent("MouseEvents");
                        X.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          zt,
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
                          ee.target.dispatchEvent(X);
                      }
                    }
                  })),
                (R.isDragging = R.isGesturing = R.isPressed = !1),
                h && de && !O && Se.restart(!0),
                xe && ki(),
                y && de && y(R),
                b && b(R, Y);
            }
          }),
          Ar = function (U) {
            return (
              U.touches &&
              U.touches.length > 1 &&
              (R.isGesturing = !0) &&
              $(U, R.isDragging)
            );
          },
          ii = function () {
            return (R.isGesturing = !1) || C(R);
          },
          ri = function (U) {
            if (!Ne(U)) {
              var de = ge(),
                Y = Ft();
              ts((de - Kt) * B, (Y - ti) * B, 1),
                (Kt = de),
                (ti = Y),
                h && Se.restart(!0);
            }
          },
          si = function (U) {
            if (!Ne(U)) {
              (U = Cs(U, d)), H && (se = !0);
              var de =
                (U.deltaMode === 1
                  ? l
                  : U.deltaMode === 2
                  ? zt.innerHeight
                  : 1) * u;
              ts(U.deltaX * de, U.deltaY * de, 0), h && !O && Se.restart(!0);
            }
          },
          Cr = function (U) {
            if (!Ne(U)) {
              var de = U.clientX,
                Y = U.clientY,
                K = de - R.x,
                X = Y - R.y;
              (R.x = de),
                (R.y = Y),
                (J = !0),
                h && Se.restart(!0),
                (K || X) && is(K, X);
            }
          },
          rs = function (U) {
            (R.event = U), I(R);
          },
          Oi = function (U) {
            (R.event = U), z(R);
          },
          Xs = function (U) {
            return Ne(U) || (Cs(U, d) && ce(R));
          };
        (Se = R._dc = rt.delayedCall(m || 0.25, Zn).pause()),
          (R.deltaX = R.deltaY = 0),
          (R._vx = Ja(0, 50, !0)),
          (R._vy = Ja(0, 50, !0)),
          (R.scrollX = ge),
          (R.scrollY = Ft),
          (R.isDragging = R.isGesturing = R.isPressed = !1),
          gc(this),
          (R.enable = function (ee) {
            return (
              R.isEnabled ||
                (ft(Qt ? pe : o, "scroll", Qa),
                a.indexOf("scroll") >= 0 &&
                  ft(Qt ? pe : o, "scroll", ri, Bt, N),
                a.indexOf("wheel") >= 0 && ft(o, "wheel", si, Bt, N),
                ((a.indexOf("touch") >= 0 && hc) ||
                  a.indexOf("pointer") >= 0) &&
                  (ft(o, Jt[0], Er, Bt, N),
                  ft(pe, Jt[2], ae),
                  ft(pe, Jt[3], ae),
                  F && ft(o, "click", Gs, !0, !0),
                  ce && ft(o, "click", Xs),
                  $ && ft(pe, "gesturestart", Ar),
                  C && ft(pe, "gestureend", ii),
                  I && ft(o, ur + "enter", rs),
                  z && ft(o, ur + "leave", Oi),
                  D && ft(o, ur + "move", Cr)),
                (R.isEnabled = !0),
                (R.isDragging = R.isGesturing = R.isPressed = J = xe = !1),
                R._vx.reset(),
                R._vy.reset(),
                (Kt = ge()),
                (ti = Ft()),
                ee && ee.type && Er(ee),
                Z && Z(R)),
              R
            );
          }),
          (R.disable = function () {
            R.isEnabled &&
              (Hr.filter(function (ee) {
                return ee !== R && As(ee.target);
              }).length || pt(Qt ? pe : o, "scroll", Qa),
              R.isPressed &&
                (R._vx.reset(), R._vy.reset(), pt(O ? o : pe, Jt[1], Zi, !0)),
              pt(Qt ? pe : o, "scroll", ri, N),
              pt(o, "wheel", si, N),
              pt(o, Jt[0], Er, N),
              pt(pe, Jt[2], ae),
              pt(pe, Jt[3], ae),
              pt(o, "click", Gs, !0),
              pt(o, "click", Xs),
              pt(pe, "gesturestart", Ar),
              pt(pe, "gestureend", ii),
              pt(o, ur + "enter", rs),
              pt(o, ur + "leave", Oi),
              pt(o, ur + "move", Cr),
              (R.isEnabled = R.isPressed = R.isDragging = !1),
              fe && fe(R));
          }),
          (R.kill = R.revert =
            function () {
              R.disable();
              var ee = Hr.indexOf(R);
              ee >= 0 && Hr.splice(ee, 1), Ti === R && (Ti = 0);
            }),
          Hr.push(R),
          O && As(o) && (Ti = R),
          R.enable(f);
      }),
      oh(s, [
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
  (Le.version = "3.13.0"),
    (Le.create = function (s) {
      return new Le(s);
    }),
    (Le.register = _c),
    (Le.getAll = function () {
      return Hr.slice();
    }),
    (Le.getById = function (s) {
      return Hr.filter(function (e) {
        return e.vars.id === s;
      })[0];
    }),
    vc() && rt.registerPlugin(Le);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var V,
    Wr,
    re,
    we,
    Rt,
    ue,
    eo,
    bn,
    Ms,
    Ps,
    ks,
    _n,
    st,
    Sn,
    to,
    mt,
    Sc,
    xc,
    Gr,
    Tc,
    io,
    Ec,
    gt,
    ro,
    Ac,
    Cc,
    ji,
    so,
    no,
    Xr,
    ao,
    xn,
    oo,
    lo,
    Tn = 1,
    nt = Date.now,
    co = nt(),
    Xt = 0,
    Os = 0,
    Mc = function (e, t, i) {
      var r = $t(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    Pc = function (e, t) {
      return t && (!$t(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    dh = function s() {
      return Os && requestAnimationFrame(s);
    },
    kc = function () {
      return (Sn = 1);
    },
    Oc = function () {
      return (Sn = 0);
    },
    fi = function (e) {
      return e;
    },
    Ls = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Lc = function () {
      return typeof window < "u";
    },
    Ic = function () {
      return V || (Lc() && (V = window.gsap) && V.registerPlugin && V);
    },
    fr = function (e) {
      return !!~eo.indexOf(e);
    },
    Dc = function (e) {
      return (
        (e === "Height" ? ao : re["inner" + e]) ||
        Rt["client" + e] ||
        ue["client" + e]
      );
    },
    zc = function (e) {
      return (
        Gi(e, "getBoundingClientRect") ||
        (fr(e)
          ? function () {
              return ($n.width = re.innerWidth), ($n.height = ao), $n;
            }
          : function () {
              return Ei(e);
            })
      );
    },
    uh = function (e, t, i) {
      var r = i.d,
        n = i.d2,
        a = i.a;
      return (a = Gi(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? Dc(n) : e["client" + n]) || 0;
          };
    },
    fh = function (e, t) {
      return !t || ~ui.indexOf(e)
        ? zc(e)
        : function () {
            return $n;
          };
    },
    pi = function (e, t) {
      var i = t.s,
        r = t.d2,
        n = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Gi(e, i))
          ? a() - zc(e)()[n]
          : fr(e)
          ? (Rt[i] || ue[i]) - Dc(r)
          : e[i] - e["offset" + r]
      );
    },
    En = function (e, t) {
      for (var i = 0; i < Gr.length; i += 3)
        (!t || ~t.indexOf(Gr[i + 1])) && e(Gr[i], Gr[i + 1], Gr[i + 2]);
    },
    $t = function (e) {
      return typeof e == "string";
    },
    at = function (e) {
      return typeof e == "function";
    },
    Is = function (e) {
      return typeof e == "number";
    },
    pr = function (e) {
      return typeof e == "object";
    },
    Ds = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    uo = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    jr = Math.abs,
    Rc = "left",
    $c = "top",
    fo = "right",
    po = "bottom",
    hr = "width",
    mr = "height",
    zs = "Right",
    Rs = "Left",
    $s = "Top",
    Ns = "Bottom",
    Re = "padding",
    jt = "margin",
    Ur = "Width",
    ho = "Height",
    Fe = "px",
    Ut = function (e) {
      return re.getComputedStyle(e);
    },
    ph = function (e) {
      var t = Ut(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Nc = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Ei = function (e, t) {
      var i =
          t &&
          Ut(e)[to] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
    An = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    Bc = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        n;
      for (n in i) t.push(i[n] / r);
      return t;
    },
    hh = function (e) {
      return function (t) {
        return V.utils.snap(Bc(e), t);
      };
    },
    mo = function (e) {
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
    mh = function (e) {
      return function (t, i) {
        return mo(Bc(e))(t, i.direction);
      };
    },
    Cn = function (e, t, i, r) {
      return i.split(",").forEach(function (n) {
        return e(t, n, r);
      });
    },
    We = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: !r, capture: !!n });
    },
    Ge = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Mn = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Fc = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Pn = { toggleActions: "play", anticipatePin: 0 },
    kn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    On = function (e, t) {
      if ($t(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in kn
              ? kn[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Ln = function (e, t, i, r, n, a, o, l) {
      var c = n.startColor,
        d = n.endColor,
        h = n.fontSize,
        m = n.indent,
        p = n.fontWeight,
        u = we.createElement("div"),
        f = fr(i) || Gi(i, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        y = f ? ue : i,
        w = e.indexOf("start") !== -1,
        v = w ? c : d,
        b =
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
        (b += "position:" + ((g || l) && f ? "fixed;" : "absolute;")),
        (g || l || !f) &&
          (b += (r === Be ? fo : po) + ":" + (a + parseFloat(m)) + "px;"),
        o &&
          (b +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (u._isStart = w),
        u.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (u.style.cssText = b),
        (u.innerText = t || t === 0 ? e + "-" + t : e),
        y.children[0] ? y.insertBefore(u, y.children[0]) : y.appendChild(u),
        (u._offset = u["offset" + r.op.d2]),
        In(u, 0, r, w),
        u
      );
    },
    In = function (e, t, i, r) {
      var n = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + a + Ur] = 1),
        (n["border" + o + Ur] = 0),
        (n[i.p] = t + "px"),
        V.set(e, n);
    },
    te = [],
    go = {},
    Bs,
    qc = function () {
      return nt() - Xt > 34 && (Bs || (Bs = requestAnimationFrame(Ai)));
    },
    Zr = function () {
      (!gt || !gt.isPressed || gt.startX > ue.clientWidth) &&
        (ie.cache++,
        gt ? Bs || (Bs = requestAnimationFrame(Ai)) : Ai(),
        Xt || vr("scrollStart"),
        (Xt = nt()));
    },
    vo = function () {
      (Cc = re.innerWidth), (Ac = re.innerHeight);
    },
    Fs = function (e) {
      ie.cache++,
        (e === !0 ||
          (!st &&
            !Ec &&
            !we.fullscreenElement &&
            !we.webkitFullscreenElement &&
            (!ro ||
              Cc !== re.innerWidth ||
              Math.abs(re.innerHeight - Ac) > re.innerHeight * 0.25))) &&
          bn.restart(!0);
    },
    gr = {},
    gh = [],
    Yc = function s() {
      return Ge(W, "scrollEnd", s) || yr(!0);
    },
    vr = function (e) {
      return (
        (gr[e] &&
          gr[e].map(function (t) {
            return t();
          })) ||
        gh
      );
    },
    Nt = [],
    Vc = function (e) {
      for (var t = 0; t < Nt.length; t += 5)
        (!e || (Nt[t + 4] && Nt[t + 4].query === e)) &&
          ((Nt[t].style.cssText = Nt[t + 1]),
          Nt[t].getBBox && Nt[t].setAttribute("transform", Nt[t + 2] || ""),
          (Nt[t + 3].uncache = 1));
    },
    wo = function (e, t) {
      var i;
      for (mt = 0; mt < te.length; mt++)
        (i = te[mt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (xn = !0), t && Vc(t), t || vr("revert");
    },
    Hc = function (e, t) {
      ie.cache++,
        (t || !vt) &&
          ie.forEach(function (i) {
            return at(i) && i.cacheID++ && (i.rec = 0);
          }),
        $t(e) && (re.history.scrollRestoration = no = e);
    },
    vt,
    wr = 0,
    Wc,
    vh = function () {
      if (Wc !== wr) {
        var e = (Wc = wr);
        requestAnimationFrame(function () {
          return e === wr && yr(!0);
        });
      }
    },
    Gc = function () {
      ue.appendChild(Xr),
        (ao = (!gt && Xr.offsetHeight) || re.innerHeight),
        ue.removeChild(Xr);
    },
    Xc = function (e) {
      return Ms(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    yr = function (e, t) {
      if (
        ((Rt = we.documentElement),
        (ue = we.body),
        (eo = [re, we, Rt, ue]),
        Xt && !e && !xn)
      ) {
        We(W, "scrollEnd", Yc);
        return;
      }
      Gc(),
        (vt = W.isRefreshing = !0),
        ie.forEach(function (r) {
          return at(r) && ++r.cacheID && (r.rec = r());
        });
      var i = vr("refreshInit");
      Tc && W.sort(),
        t || wo(),
        ie.forEach(function (r) {
          at(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        te.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (xn = !1),
        te.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - a), r.refresh();
          }
        }),
        (oo = 1),
        Xc(!0),
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
        Xc(!1),
        (oo = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        ie.forEach(function (r) {
          at(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        Hc(no, 1),
        bn.pause(),
        wr++,
        (vt = 2),
        Ai(2),
        te.forEach(function (r) {
          return at(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (vt = W.isRefreshing = !1),
        vr("refresh");
    },
    yo = 0,
    Dn = 1,
    qs,
    Ai = function (e) {
      if (e === 2 || (!vt && !xn)) {
        (W.isUpdating = !0), qs && qs.update(0);
        var t = te.length,
          i = nt(),
          r = i - co >= 50,
          n = t && te[0].scroll();
        if (
          ((Dn = yo > n ? -1 : 1),
          vt || (yo = n),
          r &&
            (Xt && !Sn && i - Xt > 200 && ((Xt = 0), vr("scrollEnd")),
            (ks = co),
            (co = i)),
          Dn < 0)
        ) {
          for (mt = t; mt-- > 0; ) te[mt] && te[mt].update(0, r);
          Dn = 1;
        } else for (mt = 0; mt < t; mt++) te[mt] && te[mt].update(0, r);
        W.isUpdating = !1;
      }
      Bs = 0;
    },
    bo = [
      Rc,
      $c,
      po,
      fo,
      jt + Ns,
      jt + zs,
      jt + $s,
      jt + Rs,
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
    zn = bo.concat([
      hr,
      mr,
      "boxSizing",
      "max" + Ur,
      "max" + ho,
      "position",
      jt,
      Re,
      Re + $s,
      Re + zs,
      Re + Ns,
      Re + Rs,
    ]),
    wh = function (e, t, i) {
      Kr(i);
      var r = e._gsap;
      if (r.spacerIsNative) Kr(r.spacerState);
      else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t), n.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    _o = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var n = bo.length, a = t.style, o = e.style, l; n--; )
          (l = bo[n]), (a[l] = i[l]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[po] = o[fo] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[hr] = An(e, ht) + Fe),
          (a[mr] = An(e, Be) + Fe),
          (a[Re] = o[jt] = o[$c] = o[Rc] = "0"),
          Kr(r),
          (o[hr] = o["max" + Ur] = i[hr]),
          (o[mr] = o["max" + ho] = i[mr]),
          (o[Re] = i[Re]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    yh = /([A-Z])/g,
    Kr = function (e) {
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
              : t[n] && t.removeProperty(n.replace(yh, "-$1").toLowerCase());
      }
    },
    Rn = function (e) {
      for (var t = zn.length, i = e.style, r = [], n = 0; n < t; n++)
        r.push(zn[n], i[zn[n]]);
      return (r.t = e), r;
    },
    bh = function (e, t, i) {
      for (var r = [], n = e.length, a = i ? 8 : 0, o; a < n; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    $n = { left: 0, top: 0 },
    jc = function (e, t, i, r, n, a, o, l, c, d, h, m, p, u) {
      at(e) && (e = e(l)),
        $t(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? On("0" + e.substr(3), i) : 0));
      var f = p ? p.time() : 0,
        g,
        y,
        w;
      if ((p && p.seek(0), isNaN(e) || (e = +e), Is(e)))
        p &&
          (e = V.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            m,
            e
          )),
          o && In(o, i, r, !0);
      else {
        at(t) && (t = t(l));
        var v = (e || "0").split(" "),
          b,
          _,
          S,
          T;
        (w = Et(t, l) || ue),
          (b = Ei(w) || {}),
          (!b || (!b.left && !b.top)) &&
            Ut(w).display === "none" &&
            ((T = w.style.display),
            (w.style.display = "block"),
            (b = Ei(w)),
            T ? (w.style.display = T) : w.style.removeProperty("display")),
          (_ = On(v[0], b[r.d])),
          (S = On(v[1] || "0", i)),
          (e = b[r.p] - c[r.p] - d + _ + n - S),
          o && In(o, S, r, i - S < 20 || (o._isStart && S > 20)),
          (i -= i - S);
      }
      if ((u && ((l[u] = e || -0.001), e < 0 && (e = 0)), a)) {
        var A = e + i,
          x = a._isStart;
        (g = "scroll" + r.d2),
          In(
            a,
            A,
            r,
            (x && A > 20) ||
              (!x && (h ? Math.max(ue[g], Rt[g]) : a.parentNode[g]) <= A + 1)
          ),
          h &&
            ((c = Ei(o)),
            h && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Fe));
      }
      return (
        p &&
          w &&
          ((g = Ei(w)),
          p.seek(m),
          (y = Ei(w)),
          (p._caScrollDist = g[r.p] - y[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(f),
        p ? e : Math.round(e)
      );
    },
    _h = /(webkit|moz|length|cssText|inset)/i,
    Uc = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var n = e.style,
          a,
          o;
        if (t === ue) {
          (e._stOrig = n.cssText), (o = Ut(e));
          for (a in o)
            !+a &&
              !_h.test(a) &&
              o[a] &&
              typeof n[a] == "string" &&
              a !== "0" &&
              (n[a] = o[a]);
          (n.top = i), (n.left = r);
        } else n.cssText = e._stOrig;
        (V.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Zc = function (e, t, i) {
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
    Nn = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), V.set(e, r);
    },
    Kc = function (e, t) {
      var i = Xi(e, t),
        r = "_scroll" + t.p2,
        n = function a(o, l, c, d, h) {
          var m = a.tween,
            p = l.onComplete,
            u = {};
          c = c || i();
          var f = Zc(i, c, function () {
            m.kill(), (a.tween = 0);
          });
          return (
            (h = (d && h) || 0),
            (d = d || o - c),
            m && m.kill(),
            (l[r] = o),
            (l.inherit = !1),
            (l.modifiers = u),
            (u[r] = function () {
              return f(c + d * m.ratio + h * m.ratio * m.ratio);
            }),
            (l.onUpdate = function () {
              ie.cache++, a.tween && Ai();
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
        We(e, "wheel", i.wheelHandler),
        W.isTouch && We(e, "touchmove", i.wheelHandler),
        n
      );
    },
    W = (function () {
      function s(t, i) {
        Wr || s.register(V), so(this), this.init(t, i);
      }
      var e = s.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Os)
          ) {
            this.update = this.refresh = this.kill = fi;
            return;
          }
          i = Nc($t(i) || Is(i) || i.nodeType ? { trigger: i } : i, Pn);
          var n = i,
            a = n.onUpdate,
            o = n.toggleClass,
            l = n.id,
            c = n.onToggle,
            d = n.onRefresh,
            h = n.scrub,
            m = n.trigger,
            p = n.pin,
            u = n.pinSpacing,
            f = n.invalidateOnRefresh,
            g = n.anticipatePin,
            y = n.onScrubComplete,
            w = n.onSnapComplete,
            v = n.once,
            b = n.snap,
            _ = n.pinReparent,
            S = n.pinSpacer,
            T = n.containerAnimation,
            A = n.fastScrollEnd,
            x = n.preventOverlaps,
            E =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? ht
                : Be,
            L = !h && h !== 0,
            M = Et(i.scroller || re),
            k = V.core.getCache(M),
            I = fr(M),
            z =
              ("pinType" in i
                ? i.pinType
                : Gi(M, "pinType") || (I && "fixed")) === "fixed",
            D = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            P = L && i.toggleActions.split(" "),
            O = "markers" in i ? i.markers : Pn.markers,
            $ = I ? 0 : parseFloat(Ut(M)["border" + E.p2 + Ur]) || 0,
            C = this,
            H =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(C);
              },
            Z = uh(M, I, E),
            fe = fh(M, I),
            ce = 0,
            B = 0,
            N = 0,
            F = Xi(M, E),
            j,
            le,
            Qe,
            Se,
            xe,
            J,
            se,
            ye,
            qe,
            R,
            $e,
            ot,
            Bt,
            ge,
            Ft,
            Kt,
            ti,
            Pe,
            Qt,
            pe,
            At,
            Xe,
            Pi,
            Gs,
            Ne,
            Zn,
            ki,
            ts,
            is,
            Zi,
            Er,
            ae,
            Ar,
            ii,
            ri,
            si,
            Cr,
            rs,
            Oi;
          if (
            ((C._startClamp = C._endClamp = !1),
            (C._dir = E),
            (g *= 45),
            (C.scroller = M),
            (C.scroll = T ? T.time.bind(T) : F),
            (Se = F()),
            (C.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((Tc = 1), i.refreshPriority === -9999 && (qs = C)),
            (k.tweenScroll = k.tweenScroll || {
              top: Kc(M, Be),
              left: Kc(M, ht),
            }),
            (C.tweenTo = j = k.tweenScroll[E.p]),
            (C.scrubDuration = function (Y) {
              (Ar = Is(Y) && Y),
                Ar
                  ? ae
                    ? ae.duration(Y)
                    : (ae = V.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Ar,
                        paused: !0,
                        onComplete: function () {
                          return y && y(C);
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
              (Zi = 0),
              l || (l = r.vars.id)),
            b &&
              ((!pr(b) || b.push) && (b = { snapTo: b }),
              "scrollBehavior" in ue.style &&
                V.set(I ? [ue, Rt] : M, { scrollBehavior: "auto" }),
              ie.forEach(function (Y) {
                return (
                  at(Y) &&
                  Y.target === (I ? we.scrollingElement || Rt : M) &&
                  (Y.smooth = !1)
                );
              }),
              (Qe = at(b.snapTo)
                ? b.snapTo
                : b.snapTo === "labels"
                ? hh(r)
                : b.snapTo === "labelsDirectional"
                ? mh(r)
                : b.directional !== !1
                ? function (Y, K) {
                    return mo(b.snapTo)(Y, nt() - B < 500 ? 0 : K.direction);
                  }
                : V.utils.snap(b.snapTo)),
              (ii = b.duration || { min: 0.1, max: 2 }),
              (ii = pr(ii) ? Ps(ii.min, ii.max) : Ps(ii, ii)),
              (ri = V.delayedCall(b.delay || Ar / 2 || 0.1, function () {
                var Y = F(),
                  K = nt() - B < 500,
                  X = j.tween;
                if (
                  (K || Math.abs(C.getVelocity()) < 10) &&
                  !X &&
                  !Sn &&
                  ce !== Y
                ) {
                  var Q = (Y - J) / ge,
                    je = r && !L ? r.totalProgress() : Q,
                    oe = K ? 0 : ((je - Er) / (nt() - ks)) * 1e3 || 0,
                    Ie = V.utils.clamp(-Q, 1 - Q, (jr(oe / 2) * oe) / 0.185),
                    lt = Q + (b.inertia === !1 ? 0 : Ie),
                    ke,
                    Te,
                    ve = b,
                    ni = ve.onStart,
                    Ce = ve.onInterrupt,
                    qt = ve.onComplete;
                  if (
                    ((ke = Qe(lt, C)),
                    Is(ke) || (ke = lt),
                    (Te = Math.max(0, Math.round(J + ke * ge))),
                    Y <= se && Y >= J && Te !== Y)
                  ) {
                    if (X && !X._initted && X.data <= jr(Te - Y)) return;
                    b.inertia === !1 && (Ie = ke - Q),
                      j(
                        Te,
                        {
                          duration: ii(
                            jr(
                              (Math.max(jr(lt - je), jr(ke - je)) * 0.185) /
                                oe /
                                0.05 || 0
                            )
                          ),
                          ease: b.ease || "power3",
                          data: jr(Te - Y),
                          onInterrupt: function () {
                            return ri.restart(!0) && Ce && Ce(C);
                          },
                          onComplete: function () {
                            C.update(),
                              (ce = F()),
                              r &&
                                !L &&
                                (ae
                                  ? ae.resetTo(
                                      "totalProgress",
                                      ke,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(ke)),
                              (Zi = Er =
                                r && !L ? r.totalProgress() : C.progress),
                              w && w(C),
                              qt && qt(C);
                          },
                        },
                        Y,
                        Ie * ge,
                        Te - Y - Ie * ge
                      ),
                      ni && ni(C, j.tween);
                  }
                } else C.isActive && ce !== Y && ri.restart(!0);
              }).pause())),
            l && (go[l] = C),
            (m = C.trigger = Et(m || (p !== !0 && p))),
            (Oi = m && m._gsap && m._gsap.stRevert),
            Oi && (Oi = Oi(C)),
            (p = p === !0 ? m : Et(p)),
            $t(o) && (o = { targets: m, className: o }),
            p &&
              (u === !1 ||
                u === jt ||
                (u =
                  !u &&
                  p.parentNode &&
                  p.parentNode.style &&
                  Ut(p.parentNode).display === "flex"
                    ? !1
                    : Re),
              (C.pin = p),
              (le = V.core.getCache(p)),
              le.spacer
                ? (Ft = le.pinState)
                : (S &&
                    ((S = Et(S)),
                    S && !S.nodeType && (S = S.current || S.nativeElement),
                    (le.spacerIsNative = !!S),
                    S && (le.spacerState = Rn(S))),
                  (le.spacer = Pe = S || we.createElement("div")),
                  Pe.classList.add("pin-spacer"),
                  l && Pe.classList.add("pin-spacer-" + l),
                  (le.pinState = Ft = Rn(p))),
              i.force3D !== !1 && V.set(p, { force3D: !0 }),
              (C.spacer = Pe = le.spacer),
              (is = Ut(p)),
              (Gs = is[u + E.os2]),
              (pe = V.getProperty(p)),
              (At = V.quickSetter(p, E.a, Fe)),
              _o(p, Pe, is),
              (ti = Rn(p))),
            O)
          ) {
            (ot = pr(O) ? Nc(O, Fc) : Fc),
              (R = Ln("scroller-start", l, M, E, ot, 0)),
              ($e = Ln("scroller-end", l, M, E, ot, 0, R)),
              (Qt = R["offset" + E.op.d2]);
            var Xs = Et(Gi(M, "content") || M);
            (ye = this.markerStart = Ln("start", l, Xs, E, ot, Qt, 0, T)),
              (qe = this.markerEnd = Ln("end", l, Xs, E, ot, Qt, 0, T)),
              T && (rs = V.quickSetter([ye, qe], E.a, Fe)),
              !z &&
                !(ui.length && Gi(M, "fixedMarkers") === !0) &&
                (ph(I ? ue : M),
                V.set([R, $e], { force3D: !0 }),
                (Zn = V.quickSetter(R, E.a, Fe)),
                (ts = V.quickSetter($e, E.a, Fe)));
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
            (C.revert = function (Y, K) {
              if (!K) return C.kill(!0);
              var X = Y !== !1 || !C.enabled,
                Q = st;
              X !== C.isReverted &&
                (X &&
                  ((si = Math.max(F(), C.scroll.rec || 0)),
                  (N = C.progress),
                  (Cr = r && r.progress())),
                ye &&
                  [ye, qe, R, $e].forEach(function (je) {
                    return (je.style.display = X ? "none" : "block");
                  }),
                X && ((st = C), C.update(X)),
                p &&
                  (!_ || !C.isActive) &&
                  (X ? wh(p, Pe, Ft) : _o(p, Pe, Ut(p), Ne)),
                X || C.update(X),
                (st = Q),
                (C.isReverted = X));
            }),
            (C.refresh = function (Y, K, X, Q) {
              if (!((st || !C.enabled) && !K)) {
                if (p && Y && Xt) {
                  We(s, "scrollEnd", Yc);
                  return;
                }
                !vt && H && H(C),
                  (st = C),
                  j.tween && !X && (j.tween.kill(), (j.tween = 0)),
                  ae && ae.pause(),
                  f &&
                    r &&
                    (r.revert({ kill: !1 }).invalidate(),
                    r.getChildren &&
                      r.getChildren(!0, !0, !1).forEach(function (Ki) {
                        return Ki.vars.immediateRender && Ki.render(0, !0, !0);
                      })),
                  C.isReverted || C.revert(!0, !0),
                  (C._subPinOffset = !1);
                var je = Z(),
                  oe = fe(),
                  Ie = T ? T.duration() : pi(M, E),
                  lt = ge <= 0.01 || !ge,
                  ke = 0,
                  Te = Q || 0,
                  ve = pr(X) ? X.end : i.end,
                  ni = i.endTrigger || m,
                  Ce = pr(X)
                    ? X.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  qt = (C.pinnedContainer =
                    i.pinnedContainer && Et(i.pinnedContainer, C)),
                  gi = (m && Math.max(0, te.indexOf(C))) || 0,
                  Je = gi,
                  et,
                  ct,
                  Mr,
                  Kn,
                  dt,
                  Ye,
                  vi,
                  Bo,
                  Zd,
                  js,
                  wi,
                  Us,
                  Qn;
                for (
                  O &&
                  pr(X) &&
                  ((Us = V.getProperty(R, E.p)), (Qn = V.getProperty($e, E.p)));
                  Je-- > 0;

                )
                  (Ye = te[Je]),
                    Ye.end || Ye.refresh(0, 1) || (st = C),
                    (vi = Ye.pin),
                    vi &&
                      (vi === m || vi === p || vi === qt) &&
                      !Ye.isReverted &&
                      (js || (js = []), js.unshift(Ye), Ye.revert(!0, !0)),
                    Ye !== te[Je] && (gi--, Je--);
                for (
                  at(Ce) && (Ce = Ce(C)),
                    Ce = Mc(Ce, "start", C),
                    J =
                      jc(
                        Ce,
                        m,
                        je,
                        E,
                        F(),
                        ye,
                        R,
                        C,
                        oe,
                        $,
                        z,
                        Ie,
                        T,
                        C._startClamp && "_startClamp"
                      ) || (p ? -0.001 : 0),
                    at(ve) && (ve = ve(C)),
                    $t(ve) &&
                      !ve.indexOf("+=") &&
                      (~ve.indexOf(" ")
                        ? (ve = ($t(Ce) ? Ce.split(" ")[0] : "") + ve)
                        : ((ke = On(ve.substr(2), je)),
                          (ve = $t(Ce)
                            ? Ce
                            : (T
                                ? V.utils.mapRange(
                                    0,
                                    T.duration(),
                                    T.scrollTrigger.start,
                                    T.scrollTrigger.end,
                                    J
                                  )
                                : J) + ke),
                          (ni = m))),
                    ve = Mc(ve, "end", C),
                    se =
                      Math.max(
                        J,
                        jc(
                          ve || (ni ? "100% 0" : Ie),
                          ni,
                          je,
                          E,
                          F() + ke,
                          qe,
                          $e,
                          C,
                          oe,
                          $,
                          z,
                          Ie,
                          T,
                          C._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    ke = 0,
                    Je = gi;
                  Je--;

                )
                  (Ye = te[Je]),
                    (vi = Ye.pin),
                    vi &&
                      Ye.start - Ye._pinPush <= J &&
                      !T &&
                      Ye.end > 0 &&
                      ((et =
                        Ye.end -
                        (C._startClamp ? Math.max(0, Ye.start) : Ye.start)),
                      ((vi === m && Ye.start - Ye._pinPush < J) || vi === qt) &&
                        isNaN(Ce) &&
                        (ke += et * (1 - Ye.progress)),
                      vi === p && (Te += et));
                if (
                  ((J += ke),
                  (se += ke),
                  C._startClamp && (C._startClamp += ke),
                  C._endClamp &&
                    !vt &&
                    ((C._endClamp = se || -0.001),
                    (se = Math.min(se, pi(M, E)))),
                  (ge = se - J || ((J -= 0.01) && 0.001)),
                  lt && (N = V.utils.clamp(0, 1, V.utils.normalize(J, se, si))),
                  (C._pinPush = Te),
                  ye &&
                    ke &&
                    ((et = {}),
                    (et[E.a] = "+=" + ke),
                    qt && (et[E.p] = "-=" + F()),
                    V.set([ye, qe], et)),
                  p && !(oo && C.end >= pi(M, E)))
                )
                  (et = Ut(p)),
                    (Kn = E === Be),
                    (Mr = F()),
                    (Xe = parseFloat(pe(E.a)) + Te),
                    !Ie &&
                      se > 1 &&
                      ((wi = (I ? we.scrollingElement || Rt : M).style),
                      (wi = {
                        style: wi,
                        value: wi["overflow" + E.a.toUpperCase()],
                      }),
                      I &&
                        Ut(ue)["overflow" + E.a.toUpperCase()] !== "scroll" &&
                        (wi.style["overflow" + E.a.toUpperCase()] = "scroll")),
                    _o(p, Pe, et),
                    (ti = Rn(p)),
                    (ct = Ei(p, !0)),
                    (Bo = z && Xi(M, Kn ? ht : Be)()),
                    u
                      ? ((Ne = [u + E.os2, ge + Te + Fe]),
                        (Ne.t = Pe),
                        (Je = u === Re ? An(p, E) + ge + Te : 0),
                        Je &&
                          (Ne.push(E.d, Je + Fe),
                          Pe.style.flexBasis !== "auto" &&
                            (Pe.style.flexBasis = Je + Fe)),
                        Kr(Ne),
                        qt &&
                          te.forEach(function (Ki) {
                            Ki.pin === qt &&
                              Ki.vars.pinSpacing !== !1 &&
                              (Ki._subPinOffset = !0);
                          }),
                        z && F(si))
                      : ((Je = An(p, E)),
                        Je &&
                          Pe.style.flexBasis !== "auto" &&
                          (Pe.style.flexBasis = Je + Fe)),
                    z &&
                      ((dt = {
                        top: ct.top + (Kn ? Mr - J : Bo) + Fe,
                        left: ct.left + (Kn ? Bo : Mr - J) + Fe,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (dt[hr] = dt["max" + Ur] = Math.ceil(ct.width) + Fe),
                      (dt[mr] = dt["max" + ho] = Math.ceil(ct.height) + Fe),
                      (dt[jt] =
                        dt[jt + $s] =
                        dt[jt + zs] =
                        dt[jt + Ns] =
                        dt[jt + Rs] =
                          "0"),
                      (dt[Re] = et[Re]),
                      (dt[Re + $s] = et[Re + $s]),
                      (dt[Re + zs] = et[Re + zs]),
                      (dt[Re + Ns] = et[Re + Ns]),
                      (dt[Re + Rs] = et[Re + Rs]),
                      (Kt = bh(Ft, dt, _)),
                      vt && F(0)),
                    r
                      ? ((Zd = r._initted),
                        io(1),
                        r.render(r.duration(), !0, !0),
                        (Pi = pe(E.a) - Xe + ge + Te),
                        (ki = Math.abs(ge - Pi) > 1),
                        z && ki && Kt.splice(Kt.length - 2, 2),
                        r.render(0, !0, !0),
                        Zd || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        io(0))
                      : (Pi = ge),
                    wi &&
                      (wi.value
                        ? (wi.style["overflow" + E.a.toUpperCase()] = wi.value)
                        : wi.style.removeProperty("overflow-" + E.a));
                else if (m && F() && !T)
                  for (ct = m.parentNode; ct && ct !== ue; )
                    ct._pinOffset &&
                      ((J -= ct._pinOffset), (se -= ct._pinOffset)),
                      (ct = ct.parentNode);
                js &&
                  js.forEach(function (Ki) {
                    return Ki.revert(!1, !0);
                  }),
                  (C.start = J),
                  (C.end = se),
                  (Se = xe = vt ? si : F()),
                  !T && !vt && (Se < si && F(si), (C.scroll.rec = 0)),
                  C.revert(!1, !0),
                  (B = nt()),
                  ri && ((ce = -1), ri.restart(!0)),
                  (st = 0),
                  r &&
                    L &&
                    (r._initted || Cr) &&
                    r.progress() !== Cr &&
                    r.progress(Cr || 0, !0).render(r.time(), !0, !0),
                  (lt || N !== C.progress || T || f || (r && !r._initted)) &&
                    (r &&
                      !L &&
                      (r._initted || N || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        T && J < -0.001 && !N ? V.utils.normalize(J, se, 0) : N,
                        !0
                      ),
                    (C.progress = lt || (Se - J) / ge === N ? 0 : N)),
                  p && u && (Pe._pinOffset = Math.round(C.progress * Pi)),
                  ae && ae.invalidate(),
                  isNaN(Us) ||
                    ((Us -= V.getProperty(R, E.p)),
                    (Qn -= V.getProperty($e, E.p)),
                    Nn(R, E, Us),
                    Nn(ye, E, Us - (Q || 0)),
                    Nn($e, E, Qn),
                    Nn(qe, E, Qn - (Q || 0))),
                  lt && !vt && C.update(),
                  d && !vt && !Bt && ((Bt = !0), d(C), (Bt = !1));
              }
            }),
            (C.getVelocity = function () {
              return ((F() - xe) / (nt() - ks)) * 1e3 || 0;
            }),
            (C.endAnimation = function () {
              Ds(C.callbackAnimation),
                r &&
                  (ae
                    ? ae.progress(1)
                    : r.paused()
                    ? L || Ds(r, C.direction < 0, 1)
                    : Ds(r, r.reversed()));
            }),
            (C.labelToScroll = function (Y) {
              return (
                (r &&
                  r.labels &&
                  (J || C.refresh() || J) +
                    (r.labels[Y] / r.duration()) * ge) ||
                0
              );
            }),
            (C.getTrailing = function (Y) {
              var K = te.indexOf(C),
                X =
                  C.direction > 0 ? te.slice(0, K).reverse() : te.slice(K + 1);
              return (
                $t(Y)
                  ? X.filter(function (Q) {
                      return Q.vars.preventOverlaps === Y;
                    })
                  : X
              ).filter(function (Q) {
                return C.direction > 0 ? Q.end <= J : Q.start >= se;
              });
            }),
            (C.update = function (Y, K, X) {
              if (!(T && !X && !Y)) {
                var Q = vt === !0 ? si : C.scroll(),
                  je = Y ? 0 : (Q - J) / ge,
                  oe = je < 0 ? 0 : je > 1 ? 1 : je || 0,
                  Ie = C.progress,
                  lt,
                  ke,
                  Te,
                  ve,
                  ni,
                  Ce,
                  qt,
                  gi;
                if (
                  (K &&
                    ((xe = Se),
                    (Se = T ? F() : Q),
                    b && ((Er = Zi), (Zi = r && !L ? r.totalProgress() : oe))),
                  g &&
                    p &&
                    !st &&
                    !Tn &&
                    Xt &&
                    (!oe && J < Q + ((Q - xe) / (nt() - ks)) * g
                      ? (oe = 1e-4)
                      : oe === 1 &&
                        se > Q + ((Q - xe) / (nt() - ks)) * g &&
                        (oe = 0.9999)),
                  oe !== Ie && C.enabled)
                ) {
                  if (
                    ((lt = C.isActive = !!oe && oe < 1),
                    (ke = !!Ie && Ie < 1),
                    (Ce = lt !== ke),
                    (ni = Ce || !!oe != !!Ie),
                    (C.direction = oe > Ie ? 1 : -1),
                    (C.progress = oe),
                    ni &&
                      !st &&
                      ((Te = oe && !Ie ? 0 : oe === 1 ? 1 : Ie === 1 ? 2 : 3),
                      L &&
                        ((ve =
                          (!Ce && P[Te + 1] !== "none" && P[Te + 1]) || P[Te]),
                        (gi =
                          r &&
                          (ve === "complete" || ve === "reset" || ve in r)))),
                    x &&
                      (Ce || gi) &&
                      (gi || h || !r) &&
                      (at(x)
                        ? x(C)
                        : C.getTrailing(x).forEach(function (Mr) {
                            return Mr.endAnimation();
                          })),
                    L ||
                      (ae && !st && !Tn
                        ? (ae._dp._time - ae._start !== ae._time &&
                            ae.render(ae._dp._time - ae._start),
                          ae.resetTo
                            ? ae.resetTo(
                                "totalProgress",
                                oe,
                                r._tTime / r._tDur
                              )
                            : ((ae.vars.totalProgress = oe),
                              ae.invalidate().restart()))
                        : r && r.totalProgress(oe, !!(st && (B || Y)))),
                    p)
                  ) {
                    if ((Y && u && (Pe.style[u + E.os2] = Gs), !z))
                      At(Ls(Xe + Pi * oe));
                    else if (ni) {
                      if (
                        ((qt =
                          !Y && oe > Ie && se + 1 > Q && Q + 1 >= pi(M, E)),
                        _)
                      )
                        if (!Y && (lt || qt)) {
                          var Je = Ei(p, !0),
                            et = Q - J;
                          Uc(
                            p,
                            ue,
                            Je.top + (E === Be ? et : 0) + Fe,
                            Je.left + (E === Be ? 0 : et) + Fe
                          );
                        } else Uc(p, Pe);
                      Kr(lt || qt ? Kt : ti),
                        (ki && oe < 1 && lt) ||
                          At(Xe + (oe === 1 && !qt ? Pi : 0));
                    }
                  }
                  b && !j.tween && !st && !Tn && ri.restart(!0),
                    o &&
                      (Ce || (v && oe && (oe < 1 || !lo))) &&
                      Ms(o.targets).forEach(function (Mr) {
                        return Mr.classList[lt || v ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !L && !Y && a(C),
                    ni && !st
                      ? (L &&
                          (gi &&
                            (ve === "complete"
                              ? r.pause().totalProgress(1)
                              : ve === "reset"
                              ? r.restart(!0).pause()
                              : ve === "restart"
                              ? r.restart(!0)
                              : r[ve]()),
                          a && a(C)),
                        (Ce || !lo) &&
                          (c && Ce && uo(C, c),
                          D[Te] && uo(C, D[Te]),
                          v && (oe === 1 ? C.kill(!1, 1) : (D[Te] = 0)),
                          Ce ||
                            ((Te = oe === 1 ? 1 : 3), D[Te] && uo(C, D[Te]))),
                        A &&
                          !lt &&
                          Math.abs(C.getVelocity()) > (Is(A) ? A : 2500) &&
                          (Ds(C.callbackAnimation),
                          ae
                            ? ae.progress(1)
                            : Ds(r, ve === "reverse" ? 1 : !oe, 1)))
                      : L && a && !st && a(C);
                }
                if (ts) {
                  var ct = T ? (Q / T.duration()) * (T._caScrollDist || 0) : Q;
                  Zn(ct + (R._isFlipped ? 1 : 0)), ts(ct);
                }
                rs && rs((-Q / T.duration()) * (T._caScrollDist || 0));
              }
            }),
            (C.enable = function (Y, K) {
              C.enabled ||
                ((C.enabled = !0),
                We(M, "resize", Fs),
                I || We(M, "scroll", Zr),
                H && We(s, "refreshInit", H),
                Y !== !1 && ((C.progress = N = 0), (Se = xe = ce = F())),
                K !== !1 && C.refresh());
            }),
            (C.getTween = function (Y) {
              return Y && j ? j.tween : ae;
            }),
            (C.setPositions = function (Y, K, X, Q) {
              if (T) {
                var je = T.scrollTrigger,
                  oe = T.duration(),
                  Ie = je.end - je.start;
                (Y = je.start + (Ie * Y) / oe), (K = je.start + (Ie * K) / oe);
              }
              C.refresh(
                !1,
                !1,
                {
                  start: Pc(Y, X && !!C._startClamp),
                  end: Pc(K, X && !!C._endClamp),
                },
                Q
              ),
                C.update();
            }),
            (C.adjustPinSpacing = function (Y) {
              if (Ne && Y) {
                var K = Ne.indexOf(E.d) + 1;
                (Ne[K] = parseFloat(Ne[K]) + Y + Fe),
                  (Ne[1] = parseFloat(Ne[1]) + Y + Fe),
                  Kr(Ne);
              }
            }),
            (C.disable = function (Y, K) {
              if (
                C.enabled &&
                (Y !== !1 && C.revert(!0, !0),
                (C.enabled = C.isActive = !1),
                K || (ae && ae.pause()),
                (si = 0),
                le && (le.uncache = 1),
                H && Ge(s, "refreshInit", H),
                ri && (ri.pause(), j.tween && j.tween.kill() && (j.tween = 0)),
                !I)
              ) {
                for (var X = te.length; X--; )
                  if (te[X].scroller === M && te[X] !== C) return;
                Ge(M, "resize", Fs), I || Ge(M, "scroll", Zr);
              }
            }),
            (C.kill = function (Y, K) {
              C.disable(Y, K), ae && !K && ae.kill(), l && delete go[l];
              var X = te.indexOf(C);
              X >= 0 && te.splice(X, 1),
                X === mt && Dn > 0 && mt--,
                (X = 0),
                te.forEach(function (Q) {
                  return Q.scroller === C.scroller && (X = 1);
                }),
                X || vt || (C.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  Y && r.revert({ kill: !1 }),
                  K || r.kill()),
                ye &&
                  [ye, qe, R, $e].forEach(function (Q) {
                    return Q.parentNode && Q.parentNode.removeChild(Q);
                  }),
                qs === C && (qs = 0),
                p &&
                  (le && (le.uncache = 1),
                  (X = 0),
                  te.forEach(function (Q) {
                    return Q.pin === p && X++;
                  }),
                  X || (le.spacer = 0)),
                i.onKill && i.onKill(C);
            }),
            te.push(C),
            C.enable(!1, !1),
            Oi && Oi(C),
            r && r.add && !ge)
          ) {
            var de = C.update;
            (C.update = function () {
              (C.update = de), ie.cache++, J || se || C.refresh();
            }),
              V.delayedCall(0.01, C.update),
              (ge = 0.01),
              (J = se = 0);
          } else C.refresh();
          p && vh();
        }),
        (s.register = function (i) {
          return (
            Wr ||
              ((V = i || Ic()),
              Lc() && window.document && s.enable(),
              (Wr = Os)),
            Wr
          );
        }),
        (s.defaults = function (i) {
          if (i) for (var r in i) Pn[r] = i[r];
          return Pn;
        }),
        (s.disable = function (i, r) {
          (Os = 0),
            te.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            Ge(re, "wheel", Zr),
            Ge(we, "scroll", Zr),
            clearInterval(_n),
            Ge(we, "touchcancel", fi),
            Ge(ue, "touchstart", fi),
            Cn(Ge, we, "pointerdown,touchstart,mousedown", kc),
            Cn(Ge, we, "pointerup,touchend,mouseup", Oc),
            bn.kill(),
            En(Ge);
          for (var n = 0; n < ie.length; n += 3)
            Mn(Ge, ie[n], ie[n + 1]), Mn(Ge, ie[n], ie[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((re = window),
            (we = document),
            (Rt = we.documentElement),
            (ue = we.body),
            V &&
              ((Ms = V.utils.toArray),
              (Ps = V.utils.clamp),
              (so = V.core.context || fi),
              (io = V.core.suppressOverwrites || fi),
              (no = re.history.scrollRestoration || "auto"),
              (yo = re.pageYOffset || 0),
              V.core.globals("ScrollTrigger", s),
              ue))
          ) {
            (Os = 1),
              (Xr = document.createElement("div")),
              (Xr.style.height = "100vh"),
              (Xr.style.position = "absolute"),
              Gc(),
              dh(),
              Le.register(V),
              (s.isTouch = Le.isTouch),
              (ji =
                Le.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (ro = Le.isTouch === 1),
              We(re, "wheel", Zr),
              (eo = [re, we, Rt, ue]),
              V.matchMedia &&
                ((s.matchMedia = function (c) {
                  var d = V.matchMedia(),
                    h;
                  for (h in c) d.add(h, c[h]);
                  return d;
                }),
                V.addEventListener("matchMediaInit", function () {
                  return wo();
                }),
                V.addEventListener("matchMediaRevert", function () {
                  return Vc();
                }),
                V.addEventListener("matchMedia", function () {
                  yr(0, 1), vr("matchMedia");
                }),
                V.matchMedia().add("(orientation: portrait)", function () {
                  return vo(), vo;
                })),
              vo(),
              We(we, "scroll", Zr);
            var i = ue.hasAttribute("style"),
              r = ue.style,
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
                o = Ei(ue),
                Be.m = Math.round(o.top + Be.sc()) || 0,
                ht.m = Math.round(o.left + ht.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                i ||
                  (ue.setAttribute("style", ""), ue.removeAttribute("style")),
                _n = setInterval(qc, 250),
                V.delayedCall(0.5, function () {
                  return (Tn = 0);
                }),
                We(we, "touchcancel", fi),
                We(ue, "touchstart", fi),
                Cn(We, we, "pointerdown,touchstart,mousedown", kc),
                Cn(We, we, "pointerup,touchend,mouseup", Oc),
                to = V.utils.checkPrefix("transform"),
                zn.push(to),
                Wr = nt(),
                bn = V.delayedCall(0.2, yr).pause(),
                Gr = [
                  we,
                  "visibilitychange",
                  function () {
                    var c = re.innerWidth,
                      d = re.innerHeight;
                    we.hidden
                      ? ((Sc = c), (xc = d))
                      : (Sc !== c || xc !== d) && Fs();
                  },
                  we,
                  "DOMContentLoaded",
                  yr,
                  re,
                  "load",
                  yr,
                  re,
                  "resize",
                  Fs,
                ],
                En(We),
                te.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < ie.length;
              l += 3
            )
              Mn(Ge, ie[l], ie[l + 1]), Mn(Ge, ie[l], ie[l + 2]);
          }
        }),
        (s.config = function (i) {
          "limitCallbacks" in i && (lo = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(_n)) || ((_n = r) && setInterval(qc, r)),
            "ignoreMobileResize" in i &&
              (ro = s.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (En(Ge) || En(We, i.autoRefreshEvents || "none"),
              (Ec = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (i, r) {
          var n = Et(i),
            a = ie.indexOf(n),
            o = fr(n);
          ~a && ie.splice(a, o ? 6 : 2),
            r && (o ? ui.unshift(re, r, ue, r, Rt, r) : ui.unshift(n, r));
        }),
        (s.clearMatchMedia = function (i) {
          te.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (i, r, n) {
          var a = ($t(i) ? Et(i) : i).getBoundingClientRect(),
            o = a[n ? hr : mr] * r || 0;
          return n
            ? a.right - o > 0 && a.left + o < re.innerWidth
            : a.bottom - o > 0 && a.top + o < re.innerHeight;
        }),
        (s.positionInViewport = function (i, r, n) {
          $t(i) && (i = Et(i));
          var a = i.getBoundingClientRect(),
            o = a[n ? hr : mr],
            l =
              r == null
                ? o / 2
                : r in kn
                ? kn[r] * o
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
            var r = gr.killAll || [];
            (gr = {}),
              r.forEach(function (n) {
                return n();
              });
          }
        }),
        s
      );
    })();
  (W.version = "3.13.0"),
    (W.saveStyles = function (s) {
      return s
        ? Ms(s).forEach(function (e) {
            if (e && e.style) {
              var t = Nt.indexOf(e);
              t >= 0 && Nt.splice(t, 5),
                Nt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  V.core.getCache(e),
                  so()
                );
            }
          })
        : Nt;
    }),
    (W.revert = function (s, e) {
      return wo(!s, e);
    }),
    (W.create = function (s, e) {
      return new W(s, e);
    }),
    (W.refresh = function (s) {
      return s ? Fs(!0) : (Wr || W.register()) && yr(!0);
    }),
    (W.update = function (s) {
      return ++ie.cache && Ai(s === !0 ? 2 : 0);
    }),
    (W.clearScrollMemory = Hc),
    (W.maxScroll = function (s, e) {
      return pi(s, e ? ht : Be);
    }),
    (W.getScrollFunc = function (s, e) {
      return Xi(Et(s), e ? ht : Be);
    }),
    (W.getById = function (s) {
      return go[s];
    }),
    (W.getAll = function () {
      return te.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (W.isScrolling = function () {
      return !!Xt;
    }),
    (W.snapDirectional = mo),
    (W.addEventListener = function (s, e) {
      var t = gr[s] || (gr[s] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (W.removeEventListener = function (s, e) {
      var t = gr[s],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (W.batch = function (s, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        n = e.batchMax || 1e9,
        a = function (c, d) {
          var h = [],
            m = [],
            p = V.delayedCall(r, function () {
              d(h, m), (h = []), (m = []);
            }).pause();
          return function (u) {
            h.length || p.restart(!0),
              h.push(u.trigger),
              m.push(u),
              n <= h.length && p.progress(1);
          };
        },
        o;
      for (o in e)
        i[o] =
          o.substr(0, 2) === "on" && at(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        at(n) &&
          ((n = n()),
          We(W, "refresh", function () {
            return (n = e.batchMax());
          })),
        Ms(s).forEach(function (l) {
          var c = {};
          for (o in i) c[o] = i[o];
          (c.trigger = l), t.push(W.create(c));
        }),
        t
      );
    });
  var Qc = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    So = function s(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Le.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Rt && s(ue, t);
    },
    Bn = { auto: 1, scroll: 1 },
    Sh = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        n = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = n._gsap || V.core.getCache(n),
        o = nt(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== ue &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(Bn[(l = Ut(n)).overflowY] || Bn[l.overflowX]));

        )
          n = n.parentNode;
        (a._isScroll =
          n &&
          n !== i &&
          !fr(n) &&
          (Bn[(l = Ut(n)).overflowY] || Bn[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Jc = function (e, t, i, r) {
      return Le.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && Sh),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && We(we, Le.eventTypes[0], td, !1, !0);
        },
        onDisable: function () {
          return Ge(we, Le.eventTypes[0], td, !0);
        },
      });
    },
    xh = /(input|label|select|textarea)/i,
    ed,
    td = function (e) {
      var t = xh.test(e.target.tagName);
      (t || ed) && ((e._gsapAllow = !0), (ed = t));
    },
    Th = function (e) {
      pr(e) || (e = {}),
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
        c = Et(e.target) || Rt,
        d = V.core.globals().ScrollSmoother,
        h = d && d.get(),
        m =
          ji &&
          ((e.content && Et(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = Xi(c, Be),
        u = Xi(c, ht),
        f = 1,
        g =
          (Le.isTouch && re.visualViewport
            ? re.visualViewport.scale * re.visualViewport.width
            : re.outerWidth) / re.innerWidth,
        y = 0,
        w = at(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        v,
        b,
        _ = Jc(c, e.type, !0, n),
        S = function () {
          return (b = !1);
        },
        T = fi,
        A = fi,
        x = function () {
          (l = pi(c, Be)),
            (A = Ps(ji ? 1 : 0, l)),
            i && (T = Ps(0, pi(c, ht))),
            (v = wr);
        },
        E = function () {
          (m._gsap.y = Ls(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        L = function () {
          if (b) {
            requestAnimationFrame(S);
            var O = Ls(o.deltaY / 2),
              $ = A(p.v - O);
            if (m && $ !== p.v + p.offset) {
              p.offset = $ - p.v;
              var C = Ls((parseFloat(m && m._gsap.y) || 0) - p.offset);
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
          p.offset && E(), (b = !0);
        },
        M,
        k,
        I,
        z,
        D = function () {
          x(),
            M.isActive() &&
              M.vars.scrollY > l &&
              (p() > l ? M.progress(1) && p(l) : M.resetTo("scrollY", l));
        };
      return (
        m && V.set(m, { y: "+=0" }),
        (e.ignoreCheck = function (P) {
          return (
            (ji && P.type === "touchmove" && L()) ||
            (f > 1.05 && P.type !== "touchstart") ||
            o.isGesturing ||
            (P.touches && P.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          b = !1;
          var P = f;
          (f = Ls(((re.visualViewport && re.visualViewport.scale) || 1) / g)),
            M.pause(),
            P !== f && So(c, f > 1.01 ? !0 : i ? !1 : "x"),
            (k = u()),
            (I = p()),
            x(),
            (v = wr);
        }),
        (e.onRelease = e.onGestureStart =
          function (P, O) {
            if ((p.offset && E(), !O)) z.restart(!0);
            else {
              ie.cache++;
              var $ = w(),
                C,
                H;
              i &&
                ((C = u()),
                (H = C + ($ * 0.05 * -P.velocityX) / 0.227),
                ($ *= Qc(u, C, H, pi(c, ht))),
                (M.vars.scrollX = T(H))),
                (C = p()),
                (H = C + ($ * 0.05 * -P.velocityY) / 0.227),
                ($ *= Qc(p, C, H, pi(c, Be))),
                (M.vars.scrollY = A(H)),
                M.invalidate().duration($).play(0.01),
                ((ji && M.vars.scrollY >= l) || C >= l - 1) &&
                  V.to({}, { onUpdate: D, duration: $ });
            }
            a && a(P);
          }),
        (e.onWheel = function () {
          M._ts && M.pause(), nt() - y > 1e3 && ((v = 0), (y = nt()));
        }),
        (e.onChange = function (P, O, $, C, H) {
          if (
            (wr !== v && x(),
            O && i && u(T(C[2] === O ? k + (P.startX - P.x) : u() + O - C[1])),
            $)
          ) {
            p.offset && E();
            var Z = H[2] === $,
              fe = Z ? I + P.startY - P.y : p() + $ - H[1],
              ce = A(fe);
            Z && fe !== ce && (I += ce - fe), p(ce);
          }
          ($ || O) && Ai();
        }),
        (e.onEnable = function () {
          So(c, i ? !1 : "x"),
            W.addEventListener("refresh", D),
            We(re, "resize", D),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = u.smooth = !1)),
            _.enable();
        }),
        (e.onDisable = function () {
          So(c, !0),
            Ge(re, "resize", D),
            W.removeEventListener("refresh", D),
            _.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new Le(e)),
        (o.iOS = ji),
        ji && !p() && p(1),
        ji && V.ticker.add(fi),
        (z = o._dc),
        (M = V.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Zc(p, p(), function () {
              return M.pause();
            }),
          },
          onUpdate: Ai,
          onComplete: z.vars.onComplete,
        })),
        o
      );
    };
  (W.sort = function (s) {
    if (at(s)) return te.sort(s);
    var e = re.pageYOffset || 0;
    return (
      W.getAll().forEach(function (t) {
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
    (W.observe = function (s) {
      return new Le(s);
    }),
    (W.normalizeScroll = function (s) {
      if (typeof s > "u") return gt;
      if (s === !0 && gt) return gt.enable();
      if (s === !1) {
        gt && gt.kill(), (gt = s);
        return;
      }
      var e = s instanceof Le ? s : Th(s);
      return (
        gt && gt.target === e.target && gt.kill(), fr(e.target) && (gt = e), e
      );
    }),
    (W.core = {
      _getVelocityProp: Ja,
      _inputObserver: Jc,
      _scrollers: ie,
      _proxies: ui,
      bridge: {
        ss: function () {
          Xt || vr("scrollStart"), (Xt = nt());
        },
        ref: function () {
          return st;
        },
      },
    }),
    Ic() && V.registerPlugin(W),
    q.registerPlugin(W);
  class br {
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
          let a = br.attr(100, e.getAttribute("marquee-speed")),
            o = br.attr(!1, e.getAttribute("marquee-vertical")),
            l = br.attr(!1, e.getAttribute("marquee-reverse")),
            c = br.attr(!1, e.getAttribute("marquee-scrolldirection")),
            d = br.attr(!1, e.getAttribute("marquee-scrollscrub")),
            h = -100,
            m = 1,
            p = !1;
          l && (h = 100);
          let u = q.timeline({
            repeat: -1,
            onReverseComplete: () => u.progress(1),
          });
          o
            ? ((a = i[0].offsetHeight / a),
              u.fromTo(
                i,
                { yPercent: 0 },
                { yPercent: h, ease: "none", duration: a }
              ))
            : ((a = i[0].offsetWidth / a),
              u.fromTo(
                i,
                { xPercent: 0 },
                { xPercent: h, ease: "none", duration: a }
              ));
          let f = { value: 1 };
          W.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (y) => {
              if (
                !p &&
                (c &&
                  m !== y.direction &&
                  ((m = y.direction), u.timeScale(y.direction)),
                d)
              ) {
                let w = y.getVelocity() * 0.006;
                (w = q.utils.clamp(-60, 60, w)),
                  q
                    .timeline({ onUpdate: () => u.timeScale(f.value) })
                    .fromTo(f, { value: w }, { value: m, duration: 0.5 });
              }
            },
          });
          function g(y) {
            p = y;
            let w = { value: 1 },
              v = q.timeline({ onUpdate: () => u.timeScale(w.value) });
            y
              ? (v.fromTo(w, { value: m }, { value: 0, duration: 0.5 }),
                n.forEach((b) => b.setAttribute("marquee-status", "paused")))
              : (v.fromTo(w, { value: 0 }, { value: m, duration: 0.5 }),
                n.forEach((b) => b.setAttribute("marquee-status", "playing")));
          }
          window.matchMedia("(pointer: fine)").matches &&
            r.forEach((y) => {
              y.addEventListener("mouseenter", () => g(!0)),
                y.addEventListener("mouseleave", () => g(!1));
            }),
            n.forEach((y) => {
              y.addEventListener("click", function () {
                this.getAttribute("marquee-status") === "paused"
                  ? g(!1)
                  : g(!0);
              });
            });
        });
    }
  }
  function Ys() {
    new br();
  }
  class Eh {
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
      this.swiper = new yt("[swiper='review-slider']", {
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
  function Vs() {
    new Eh();
  }
  q.registerPlugin(W);
  const Ah = () => {
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
        d = e.querySelector("[service-intro='heading']"),
        h = e.querySelector("[service-item='3d']"),
        m = e.querySelector("[service-header='3d']"),
        p = e.querySelector("[service-video-trigger='3d']"),
        u = document.querySelector("[visual-wrap='3d']"),
        f = e.querySelector("[service-item='2d']"),
        g = e.querySelector("[service-header='2d']"),
        y = e.querySelector("[service-video-trigger='2d']"),
        w = document.querySelector("[visual-wrap='2d']"),
        v = e.querySelector("[service-item='interactive']"),
        b = e.querySelector("[service-header='interactive']"),
        _ = e.querySelector("[service-video-trigger='interactive']"),
        S = document.querySelector("[visual-wrap='interactive']"),
        T = document.querySelectorAll("[service-list-item='wrapper']"),
        A = document.querySelectorAll("[service-list-item='3d']"),
        x = document.querySelectorAll("[service-list-icon='3d']");
      document.querySelectorAll("[service-list-text='3d']");
      const E = document.querySelectorAll("[service-list-item='2d']"),
        L = document.querySelectorAll("[service-list-icon='2d']");
      document.querySelectorAll("[service-list-text='2d']");
      const M = document.querySelectorAll("[service-list-item='interactive']"),
        k = document.querySelectorAll("[service-list-icon='interactive']");
      document.querySelectorAll("[service-list-text='interactive']");
      const z = window.innerWidth <= 768 ? "+=200%" : "+=400%",
        D = q.timeline({
          scrollTrigger: {
            trigger: e,
            start: "top top",
            end: z,
            pin: !1,
            markers: !1,
            scrub: 1.2,
          },
        });
      function P(O) {
        [h, f, v].forEach(($) => {
          $ && $.classList.remove("is-active");
        }),
          O && O.classList.add("is-active");
      }
      D.fromTo(
        n,
        { rotate: 145, scale: 1.8 },
        { rotate: 0, scale: 1.2, duration: 1.8, ease: "power2.out" },
        `${s.SVG_LINE_START}%`
      ),
        D.to(
          c,
          { opacity: 0, y: -20, duration: 1, ease: "power2.in" },
          `${s.INTRO_OUT}`
        ),
        D.to(
          d,
          { opacity: 0, y: -20, duration: 1.8, ease: "power2.in" },
          `${s.INTRO_OUT}`
        ),
        D.fromTo(
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
        D.fromTo(
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
        D.fromTo(
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
        D.fromTo(
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
            onStart: () => P(h),
          },
          `${s.SERVICE_3D_IN}`
        ),
        D.to(
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
        D.fromTo(
          u,
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
        D.fromTo(
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
        D.fromTo(
          A,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_3D_IN}`
        ),
        D.fromTo(
          x,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_3D_IN}`
        ),
        D.to(
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
        D.to(
          u,
          {
            opacity: 0,
            scale: 1.1,
            filter: "blur(30px)",
            duration: 0.8,
            ease: "power2.in",
          },
          `${s.SERVICE_3D_OUT}`
        ),
        D.to(
          A,
          { opacity: 0.5, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_3D_OUT}`
        ),
        D.to(
          x,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_3D_OUT}`
        ),
        D.fromTo(
          [f, g, y],
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
            onStart: () => P(f),
          },
          `${s.SERVICE_2D_IN}`
        ),
        D.fromTo(
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
        D.fromTo(
          E,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_2D_IN}`
        ),
        D.fromTo(
          L,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_2D_IN}`
        ),
        D.to(
          n,
          { rotate: -90, duration: 1.8, ease: "power2.out" },
          `${s.SERVICE_2D_IN}`
        ),
        D.to(
          [f, g, y],
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
        D.to(
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
        D.to(
          E,
          { opacity: 0.5, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_2D_OUT}`
        ),
        D.to(
          L,
          { opacity: 0, duration: 0.8, ease: "power2.in" },
          `${s.SERVICE_2D_OUT}`
        ),
        D.fromTo(
          [v, b, _],
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
            onStart: () => P(v),
          },
          `${s.SERVICE_INTERACTIVE_IN}`
        ),
        D.fromTo(
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
        D.fromTo(
          M,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_INTERACTIVE_LIST}`
        ),
        D.fromTo(
          k,
          { opacity: 0, rotate: 0 },
          { opacity: 1, rotate: -45, duration: 0.8, ease: "power2.out" },
          `${s.SERVICE_INTERACTIVE_LIST}`
        );
    },
    Ch = () => {
      Ah();
    },
    Mh = () => {
      Ch();
    };
  var Ph = "1.2.3";
  function id(s, e, t) {
    return Math.max(s, Math.min(e, t));
  }
  function kh(s, e, t) {
    return (1 - t) * s + t * e;
  }
  function Oh(s, e, t, i) {
    return kh(s, e, 1 - Math.exp(-t * i));
  }
  function Lh(s, e) {
    return ((s % e) + e) % e;
  }
  var Ih = class {
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
    advance(s) {
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += s;
        const t = id(0, this.currentTime / this.duration, 1);
        e = t >= 1;
        const i = e ? 1 : this.easing(t);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = Oh(this.value, this.to, this.lerp * 60, s)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(), this.onUpdate?.(this.value, e);
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
        n?.(),
        (this.onUpdate = a);
    }
  };
  function Dh(s, e) {
    let t;
    return function (...i) {
      let r = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), s.apply(r, i);
        }, e));
    };
  }
  var zh = class {
      constructor(s, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
        G(this, "width", 0);
        G(this, "height", 0);
        G(this, "scrollHeight", 0);
        G(this, "scrollWidth", 0);
        G(this, "debouncedResize");
        G(this, "wrapperResizeObserver");
        G(this, "contentResizeObserver");
        G(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        G(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        G(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = s),
          (this.content = e),
          t &&
            ((this.debouncedResize = Dh(this.resize, i)),
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
    },
    rd = class {
      constructor() {
        G(this, "events", {});
      }
      emit(s, ...e) {
        let t = this.events[s] || [];
        for (let i = 0, r = t.length; i < r; i++) t[i]?.(...e);
      }
      on(s, e) {
        return (
          this.events[s]?.push(e) || (this.events[s] = [e]),
          () => {
            this.events[s] = this.events[s]?.filter((t) => e !== t);
          }
        );
      }
      off(s, e) {
        this.events[s] = this.events[s]?.filter((t) => e !== t);
      }
      destroy() {
        this.events = {};
      }
    },
    sd = 100 / 6,
    Ui = { passive: !1 },
    Rh = class {
      constructor(s, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        G(this, "touchStart", { x: 0, y: 0 });
        G(this, "lastDelta", { x: 0, y: 0 });
        G(this, "window", { width: 0, height: 0 });
        G(this, "emitter", new rd());
        G(this, "onTouchStart", (s) => {
          const { clientX: e, clientY: t } = s.targetTouches
            ? s.targetTouches[0]
            : s;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s });
        });
        G(this, "onTouchMove", (s) => {
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
        G(this, "onTouchEnd", (s) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: s,
          });
        });
        G(this, "onWheel", (s) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = s;
          const r = i === 1 ? sd : i === 2 ? this.window.width : 1,
            n = i === 1 ? sd : i === 2 ? this.window.height : 1;
          (e *= r),
            (t *= n),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: s });
        });
        G(this, "onWindowResize", () => {
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
    $h = class {
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
        infinite: d = !1,
        orientation: h = "vertical",
        gestureOrientation: m = "vertical",
        touchMultiplier: p = 1,
        wheelMultiplier: u = 1,
        autoResize: f = !0,
        prevent: g,
        virtualScroll: y,
        overscroll: w = !0,
        autoRaf: v = !1,
        anchors: b = !1,
        __experimental__naiveDimensions: _ = !1,
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
        G(this, "animate", new Ih());
        G(this, "emitter", new rd());
        G(this, "dimensions");
        G(this, "virtualScroll");
        G(this, "onScrollEnd", (s) => {
          s instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              s.stopPropagation());
        });
        G(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        G(this, "onClick", (s) => {
          const t = s
            .composedPath()
            .find(
              (i) =>
                i instanceof HTMLAnchorElement &&
                (i.getAttribute("href")?.startsWith("#") ||
                  i.getAttribute("href")?.startsWith("/#") ||
                  i.getAttribute("href")?.startsWith("./#"))
            );
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
        G(this, "onPointerDown", (s) => {
          s.button === 1 && this.reset();
        });
        G(this, "onVirtualScroll", (s) => {
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
          const d = this.options.prevent;
          if (
            c.find(
              (g) =>
                g instanceof HTMLElement &&
                ((typeof d == "function" && d?.(g)) ||
                  g.hasAttribute?.("data-lenis-prevent") ||
                  (r && g.hasAttribute?.("data-lenis-prevent-touch")) ||
                  (n && g.hasAttribute?.("data-lenis-prevent-wheel")))
            )
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
            f = r && i.type === "touchend" && Math.abs(m) > 5;
          f && (m = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + m, {
              programmatic: !1,
              ...(p
                ? { lerp: f ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            });
        });
        G(this, "onNativeScroll", () => {
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
        G(this, "raf", (s) => {
          const e = s - (this.time || s);
          (this.time = s),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = Ph),
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
            infinite: d,
            gestureOrientation: m,
            orientation: h,
            touchMultiplier: p,
            wheelMultiplier: u,
            autoResize: f,
            prevent: g,
            virtualScroll: y,
            overscroll: w,
            autoRaf: v,
            anchors: b,
            __experimental__naiveDimensions: _,
          }),
          (this.dimensions = new zh(s, e, { autoResize: f })),
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
          (this.virtualScroll = new Rh(t, {
            touchMultiplier: p,
            wheelMultiplier: u,
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
          programmatic: d = !0,
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
                : s instanceof HTMLElement && s?.nodeType && (m = s),
              m)
            ) {
              if (this.options.wrapper !== window) {
                const u = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? u.left : u.top;
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
                ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                : (s = id(0, s, this.limit)),
              s === this.targetScroll)
            ) {
              o?.(this), l?.(this);
              return;
            }
            if (((this.userData = h ?? {}), t)) {
              (this.animatedScroll = this.targetScroll = s),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            d || (this.targetScroll = s),
              this.animate.fromTo(this.animatedScroll, s, {
                duration: r,
                easing: n,
                lerp: a,
                onStart: () => {
                  i && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    o?.(this);
                },
                onUpdate: (m, p) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = m - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = m),
                    this.setScroll(this.scroll),
                    d && (this.targetScroll = m),
                    p || this.emit(),
                    p &&
                      (this.reset(),
                      this.emit(),
                      l?.(this),
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
        const s = this.options.wrapper;
        return this.isHorizontal
          ? s.scrollX ?? s.scrollLeft
          : s.scrollY ?? s.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? Lh(this.animatedScroll, this.limit)
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
  q.registerPlugin(W);
  let Fn;
  const Nh = () => {
      (Fn = new $h({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (s) => Math.min(1, 1.001 - Math.pow(2, -12 * s)),
        autoRaf: !0,
      })),
        Fn.on("scroll", W.update),
        q.ticker.add((s) => {
          Fn.raf(s * 1e3);
        }),
        q.ticker.lagSmoothing(0);
    },
    Bh = () => {
      Nh();
    },
    Zt = () => Fn;
  q.registerPlugin(W);
  const Fh = () => {
      if (
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        return;
      const e = document.querySelectorAll('[hero-parallax="visual"]'),
        t = document.querySelector('[hero-parallax="header"]');
      if (!e.length && !t) return;
      const i = Zt?.();
      if (
        (W.defaults({ scroller: i ? i.wrapper : void 0 }),
        e.forEach((r) => {
          const n = parseFloat(r.getAttribute("parallax-speed")) || 0.6;
          q.fromTo(
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
        q.fromTo(
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
    },
    nd = () => {
      Fh();
    },
    qh = () => {
      const s = document.querySelectorAll("[video-modal-trigger]");
      let e = null;
      document.querySelector("[data-vimeo-control='play']"),
        document.querySelector("[data-vimeo-control='pause']");
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
        if (!n || !a) return;
        q.set(n, {
          clipPath: "inset(50% round 16px)",
          pointerEvents: "none",
          scale: 1.2,
          filter: "blur(5px)",
        });
        const o = () => {
            e && e !== n && t(e, "close"), t(n, "open"), (e = n);
            const c = n.querySelector("[data-vimeo-control='play']");
            c && c.click();
          },
          l = () => {
            if ((t(n, "close"), e === n)) {
              e = null;
              const c = n.querySelector("[data-vimeo-control='pause']");
              c && c.click();
            }
          };
        i.addEventListener("click", () => {
          const c = Zt();
          e === n ? (l(), c.start()) : (o(), c.stop());
        }),
          a.addEventListener("click", () => {
            e === n && (l(), Zt().start());
          });
      }),
        document.addEventListener("keydown", (i) => {
          i.key === "Escape" && e && (t(e, "close"), Zt().start(), (e = null));
        });
    },
    Yh = () => {
      qh();
    };
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let Hs,
    Qr,
    xo,
    Vh = () => xo || Ci.register(window.gsap),
    ad = typeof Intl < "u" ? new Intl.Segmenter() : 0,
    qn = (s) =>
      typeof s == "string"
        ? qn(document.querySelectorAll(s))
        : "length" in s
        ? Array.from(s)
        : [s],
    od = (s) => qn(s).filter((e) => e instanceof HTMLElement),
    To = [],
    Eo = function () {},
    Hh = /\s+/g,
    ld = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    cd = { left: 0, top: 0, width: 0, height: 0 },
    dd = (s, e) => {
      if (e) {
        let t = new Set(s.join("").match(e) || To),
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
    ud = (s) =>
      window.getComputedStyle(s).display === "inline" &&
      (s.style.display = "inline-block"),
    Jr = (s, e, t) =>
      e.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, t),
    Ao = (s, e, t) => {
      let i = e[s + "sClass"] || "",
        { tag: r = "div", aria: n = "auto", propIndex: a = !1 } = e,
        o = s === "line" ? "block" : "inline-block",
        l = i.indexOf("++") > -1,
        c = (d) => {
          let h = document.createElement(r),
            m = t.length + 1;
          return (
            i && (h.className = i + (l ? " " + i + m : "")),
            a && h.style.setProperty("--" + s, m + ""),
            n !== "none" && h.setAttribute("aria-hidden", "true"),
            r !== "span" &&
              ((h.style.position = "relative"), (h.style.display = o)),
            (h.textContent = d),
            t.push(h),
            h
          );
        };
      return l && (i = i.replace("++", "")), (c.collection = t), c;
    },
    Wh = (s, e, t, i) => {
      let r = Ao("line", t, i),
        n = window.getComputedStyle(s).textAlign || "left";
      return (a, o) => {
        let l = r("");
        for (l.style.textAlign = n, s.insertBefore(l, e[a]); a < o; a++)
          l.appendChild(e[a]);
        l.normalize();
      };
    },
    fd = (s, e, t, i, r, n, a, o, l, c) => {
      var d;
      let h = Array.from(s.childNodes),
        m = 0,
        { wordDelimiter: p, reduceWhiteSpace: u = !0, prepareText: f } = e,
        g = s.getBoundingClientRect(),
        y = g,
        w =
          !u && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre",
        v = 0,
        b = t.collection,
        _,
        S,
        T,
        A,
        x,
        E,
        L,
        M,
        k,
        I,
        z,
        D,
        P,
        O,
        $,
        C,
        H,
        Z;
      for (
        typeof p == "object"
          ? ((T = p.delimiter || p), (S = p.replaceWith || ""))
          : (S = p === "" ? "" : p || " "),
          _ = S !== " ";
        m < h.length;
        m++
      )
        if (((A = h[m]), A.nodeType === 3)) {
          for (
            $ = A.textContent || "",
              u
                ? ($ = $.replace(Hh, " "))
                : w &&
                  ($ = $.replace(
                    /\n/g,
                    S +
                      `
`
                  )),
              f && ($ = f($, s)),
              A.textContent = $,
              x = S || T ? $.split(T || S) : $.match(o) || To,
              H = x[x.length - 1],
              M = _ ? H.slice(-1) === " " : !H,
              H || x.pop(),
              y = g,
              L = _ ? x[0].charAt(0) === " " : !x[0],
              L && Jr(" ", s, A),
              x[0] || x.shift(),
              dd(x, l),
              (n && c) || (A.textContent = ""),
              k = 1;
            k <= x.length;
            k++
          )
            if (
              ((C = x[k - 1]),
              !u &&
                w &&
                C.charAt(0) ===
                  `
` &&
                ((d = A.previousSibling) == null || d.remove(),
                Jr(document.createElement("br"), s, A),
                (C = C.slice(1))),
              !u && C === "")
            )
              Jr(S, s, A);
            else if (C === " ") s.insertBefore(document.createTextNode(" "), A);
            else {
              if (
                (_ && C.charAt(0) === " " && Jr(" ", s, A),
                v && k === 1 && !L && b.indexOf(v.parentNode) > -1
                  ? ((E = b[b.length - 1]),
                    E.appendChild(document.createTextNode(i ? "" : C)))
                  : ((E = t(i ? "" : C)),
                    Jr(E, s, A),
                    v && k === 1 && !L && E.insertBefore(v, E.firstChild)),
                i)
              )
                for (
                  z = ad
                    ? dd(
                        [...ad.segment(C)].map((fe) => fe.segment),
                        l
                      )
                    : C.match(o) || To,
                    Z = 0;
                  Z < z.length;
                  Z++
                )
                  E.appendChild(
                    z[Z] === " " ? document.createTextNode(" ") : i(z[Z])
                  );
              if (n && c) {
                if (
                  (($ = A.textContent = $.substring(C.length + 1, $.length)),
                  (I = E.getBoundingClientRect()),
                  I.top > y.top && I.left <= y.left)
                ) {
                  for (D = s.cloneNode(), P = s.childNodes[0]; P && P !== E; )
                    (O = P), (P = P.nextSibling), D.appendChild(O);
                  s.parentNode.insertBefore(D, s), r && ud(D);
                }
                y = I;
              }
              (k < x.length || M) &&
                Jr(
                  k >= x.length ? " " : _ && C.slice(-1) === " " ? " " + S : S,
                  s,
                  A
                );
            }
          s.removeChild(A), (v = 0);
        } else
          A.nodeType === 1 &&
            (a && a.indexOf(A) > -1
              ? (b.indexOf(A.previousSibling) > -1 &&
                  b[b.length - 1].appendChild(A),
                (v = A))
              : (fd(A, e, t, i, r, n, a, o, l, !0), (v = 0)),
            r && ud(A));
    };
  const pd = class Kd {
    constructor(e, t) {
      (this.isSplit = !1),
        Vh(),
        (this.elements = od(e)),
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
          typeof ResizeObserver < "u" &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(n, 200));
          }),
      }),
        Eo(this),
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
        d = t.indexOf("lines") > -1,
        h = t.indexOf("chars") > -1,
        m = t.indexOf("words") > -1,
        p = h && !m && !d,
        u =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        f = u ? new RegExp(u.source + "|" + ld.source, "gu") : ld,
        g = !!e.ignore && od(e.ignore),
        { orig: y, animTime: w, obs: v } = this._data,
        b;
      return (
        (h || m || d) &&
          (this.elements.forEach((_, S) => {
            (y[S] = {
              element: _,
              html: _.innerHTML,
              ariaL: _.getAttribute("aria-label"),
              ariaH: _.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? _.setAttribute("aria-label", (_.textContent || "").trim())
                : i === "hidden" && _.setAttribute("aria-hidden", "true");
            let T = [],
              A = [],
              x = [],
              E = h ? Ao("char", e, T) : null,
              L = Ao("word", e, A),
              M,
              k,
              I,
              z;
            if ((fd(_, e, L, E, p, r && (d || p), g, f, u, !1), d)) {
              let D = qn(_.childNodes),
                P = Wh(_, D, e, x),
                O,
                $ = [],
                C = 0,
                H = D.map((fe) =>
                  fe.nodeType === 1 ? fe.getBoundingClientRect() : cd
                ),
                Z = cd;
              for (M = 0; M < D.length; M++)
                (O = D[M]),
                  O.nodeType === 1 &&
                    (O.nodeName === "BR"
                      ? ($.push(O), P(C, M + 1), (C = M + 1), (Z = H[C]))
                      : (M &&
                          H[M].top > Z.top &&
                          H[M].left <= Z.left &&
                          (P(C, M), (C = M)),
                        (Z = H[M])));
              C < M && P(C, M),
                $.forEach((fe) => {
                  var ce;
                  return (ce = fe.parentNode) == null
                    ? void 0
                    : ce.removeChild(fe);
                });
            }
            if (!m) {
              for (M = 0; M < A.length; M++)
                if (
                  ((k = A[M]),
                  h || !k.nextSibling || k.nextSibling.nodeType !== 3)
                )
                  if (n && !d) {
                    for (
                      I = document.createElement("span"),
                        I.style.whiteSpace = "nowrap";
                      k.firstChild;

                    )
                      I.appendChild(k.firstChild);
                    k.replaceWith(I);
                  } else k.replaceWith(...k.childNodes);
                else
                  (z = k.nextSibling),
                    z &&
                      z.nodeType === 3 &&
                      ((z.textContent =
                        (k.textContent || "") + (z.textContent || "")),
                      k.remove());
              (A.length = 0), _.normalize();
            }
            this.lines.push(...x), this.words.push(...A), this.chars.push(...T);
          }),
          c &&
            this[c] &&
            this.masks.push(
              ...this[c].map((_) => {
                let S = _.cloneNode();
                return (
                  _.replaceWith(S),
                  S.appendChild(_),
                  _.className &&
                    (S.className = _.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (S.style.overflow = "clip"),
                  S
                );
              })
            )),
        (this.isSplit = !0),
        Qr && (o ? Qr.addEventListener("loadingdone", this._split) : Qr.status),
        (b = a && a(this)) &&
          b.totalTime &&
          (this._data.anim = w ? b.totalTime(w) : b),
        d &&
          o &&
          this.elements.forEach((_, S) => {
            (y[S].width = _.offsetWidth), v && v.observe(_);
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
        Qr?.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new Kd(e, t);
    }
    static register(e) {
      (Hs = Hs || e || window.gsap),
        Hs && ((qn = Hs.utils.toArray), (Eo = Hs.core.context || Eo)),
        !xo && window.innerWidth > 0 && ((Qr = document.fonts), (xo = !0));
    }
  };
  pd.version = "3.13.0";
  let Ci = pd;
  q.registerPlugin(W, Ci);
  const Gh = () => {
      document.querySelectorAll("[list-enter='wrap']").forEach((e) => {
        e.querySelectorAll("[list-enter='item']").forEach((i) => {
          const r = i.querySelector("[list-enter='icon']"),
            n = i.querySelector("[list-enter='text']"),
            a = i.querySelector("[list-enter='line']"),
            o = new Ci(n, { type: "lines", linesClass: "split-line" });
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
    Xh = () => {
      Gh();
    },
    jh = () => {
      document.querySelectorAll("[hero-text-swap]").forEach((e) => {
        const t = e.textContent.trim(),
          i = e.getAttribute("data-alt");
        if (!i) return;
        const r = [t, ...i.split("|").map((u) => u.trim())],
          a = ((u) => {
            if (u.length === 0) return "";
            let f = "";
            const g = Math.min(...u.map((w) => w.length));
            for (let w = 0; w < g; w++) {
              const v = u[0][w];
              if (u.every((b) => b[w] === v)) f += v;
              else break;
            }
            const y = f.lastIndexOf(" ");
            return y > 0 ? f.substring(0, y + 1) : "";
          })(r),
          o = r.map((u) => u.replace(a, "").trim()),
          l = document.createElement("span");
        (l.textContent = a), (l.style.display = "inline");
        const c = document.createElement("span");
        (c.style.display = "inline-block"),
          (c.style.position = "relative"),
          (c.style.overflow = "hidden"),
          (c.style.verticalAlign = "baseline");
        const d = o.map((u, f) => {
          const g = document.createElement("span");
          return (
            (g.textContent = u),
            (g.style.display = "block"),
            (g.style.position = "absolute"),
            (g.style.top = "0"),
            (g.style.left = "0"),
            (g.style.whiteSpace = "nowrap"),
            (g.style.width = "100%"),
            f === 0
              ? ((g.style.opacity = "1"),
                (g.style.transform = "translateY(0%)"))
              : ((g.style.opacity = "0"),
                (g.style.transform = "translateY(100%)")),
            g
          );
        });
        (e.innerHTML = ""),
          e.appendChild(l),
          e.appendChild(c),
          d.forEach((u) => c.appendChild(u));
        let h = 0;
        d.forEach((u) => {
          const f = u.style.position,
            g = u.style.opacity;
          (u.style.position = "relative"),
            (u.style.opacity = "1"),
            (u.style.visibility = "visible");
          const y = u.offsetWidth;
          y > h && (h = y), (u.style.position = f), (u.style.opacity = g);
        }),
          (c.style.width = h + "px"),
          (c.style.minWidth = h + "px"),
          (c.style.maxWidth = h + "px"),
          (c.style.height = d[0].offsetHeight + "px"),
          (c.style.top = d[0].offsetHeight / 3.8 + "px");
        let m = 0;
        const p = () => {
          const u = d[m],
            f = (m + 1) % d.length,
            g = d[f],
            y = q.timeline();
          y.to(u, { y: "-100%", opacity: 0, duration: 0.4, ease: "power2.in" }),
            y.fromTo(
              g,
              { y: "100%", opacity: 0 },
              {
                y: "0%",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => {
                  (m = f), q.set(u, { y: "100%" }), setTimeout(p, 3e3);
                },
              },
              "-=0.2"
            );
        };
        setTimeout(() => p(), 2e3);
      });
    },
    Uh = () => {
      jh();
    };
  /*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var hi,
    Co,
    Yn,
    hd,
    md,
    gd,
    Mo,
    vd,
    wd = function () {
      return typeof window < "u";
    },
    yd = function () {
      return hi || (wd() && (hi = window.gsap) && hi.registerPlugin && hi);
    },
    Zh = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Po = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    _r = function (e) {
      return Math.round(e * 1e4) / 1e4;
    },
    Mi = function (e) {
      return parseFloat(e) || 0;
    },
    bd = function (e, t) {
      var i = Mi(e);
      return ~e.indexOf("%") ? (i / 100) * t : i;
    },
    Vn = function (e, t) {
      return Mi(e.getAttribute(t));
    },
    Hn = Math.sqrt,
    _d = function (e, t, i, r, n, a) {
      return Hn(
        Math.pow((Mi(i) - Mi(e)) * n, 2) + Math.pow((Mi(r) - Mi(t)) * a, 2)
      );
    },
    Sd = function (e) {},
    xd = function (e) {
      return e.getAttribute("vector-effect") === "non-scaling-stroke";
    },
    Kh = 1,
    Qh = function (e, t, i) {
      var r = e.indexOf(" "),
        n,
        a;
      return (
        r < 0
          ? ((n = i !== void 0 ? i + "" : e), (a = e))
          : ((n = e.substr(0, r)), (a = e.substr(r + 1))),
        (n = bd(n, t)),
        (a = bd(a, t)),
        n > a ? [a, n] : [n, a]
      );
    },
    Wn = function (e) {
      if (((e = Co(e)[0]), !e)) return 0;
      var t = e.tagName.toLowerCase(),
        i = e.style,
        r = 1,
        n = 1,
        a,
        o,
        l,
        c,
        d,
        h,
        m;
      xd(e) &&
        ((n = e.getScreenCTM()),
        (r = Hn(n.a * n.a + n.b * n.b)),
        (n = Hn(n.d * n.d + n.c * n.c)));
      try {
        o = e.getBBox();
      } catch {
        Sd(
          "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
        );
      }
      var p = o || { x: 0, y: 0, width: 0, height: 0 },
        u = p.x,
        f = p.y,
        g = p.width,
        y = p.height;
      if (
        ((!o || (!g && !y)) &&
          Po[t] &&
          ((g = Vn(e, Po[t][0])),
          (y = Vn(e, Po[t][1])),
          t !== "rect" && t !== "line" && ((g *= 2), (y *= 2)),
          t === "line" &&
            ((u = Vn(e, "x1")),
            (f = Vn(e, "y1")),
            (g = Math.abs(g - u)),
            (y = Math.abs(y - f)))),
        t === "path")
      )
        (c = i.strokeDasharray),
          (i.strokeDasharray = "none"),
          (a = e.getTotalLength() || 0),
          _r(r) !== _r(n) &&
            !gd &&
            (gd = 1) &&
            Sd(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (a *= (r + n) / 2),
          (i.strokeDasharray = c);
      else if (t === "rect") a = g * 2 * r + y * 2 * n;
      else if (t === "line") a = _d(u, f, u + g, f + y, r, n);
      else if (t === "polyline" || t === "polygon")
        for (
          l = e.getAttribute("points").match(Zh) || [],
            t === "polygon" && l.push(l[0], l[1]),
            a = 0,
            d = 2;
          d < l.length;
          d += 2
        )
          a += _d(l[d - 2], l[d - 1], l[d], l[d + 1], r, n) || 0;
      else
        (t === "circle" || t === "ellipse") &&
          ((h = (g / 2) * r),
          (m = (y / 2) * n),
          (a = Math.PI * (3 * (h + m) - Hn((3 * h + m) * (h + 3 * m)))));
      return a || 0;
    },
    Td = function (e, t) {
      if (((e = Co(e)[0]), !e)) return [0, 0];
      t || (t = Wn(e) + 1);
      var i = Yn.getComputedStyle(e),
        r = i.strokeDasharray || "",
        n = Mi(i.strokeDashoffset),
        a = r.indexOf(",");
      return (
        a < 0 && (a = r.indexOf(" ")),
        (r = a < 0 ? t : Mi(r.substr(0, a))),
        r > t && (r = t),
        [-n || 0, r - n || 0]
      );
    },
    Ed = function () {
      wd() &&
        ((Yn = window),
        (md = hi = yd()),
        (Co = hi.utils.toArray),
        (Mo = hi.core.getStyleSaver),
        (vd = hi.core.reverting || function () {}),
        (hd = ((Yn.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
    },
    Ad = {
      version: "3.13.0",
      name: "drawSVG",
      register: function (e) {
        (hi = e), Ed();
      },
      init: function (e, t, i, r, n) {
        if (!e.getBBox) return !1;
        md || Ed();
        var a = Wn(e),
          o,
          l,
          c;
        return (
          (this.styles =
            Mo && Mo(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
          (this.tween = i),
          (this._style = e.style),
          (this._target = e),
          t + "" == "true"
            ? (t = "0 100%")
            : t
            ? (t + "").indexOf(" ") === -1 && (t = "0 " + t)
            : (t = "0 0"),
          (o = Td(e, a)),
          (l = Qh(t, a, o[0])),
          (this._length = _r(a)),
          (this._dash = _r(o[1] - o[0])),
          (this._offset = _r(-o[0])),
          (this._dashPT = this.add(
            this,
            "_dash",
            this._dash,
            _r(l[1] - l[0]),
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
            _r(-l[0]),
            0,
            0,
            0,
            0,
            0,
            1
          )),
          hd &&
            ((c = Yn.getComputedStyle(e)),
            c.strokeLinecap !== c.strokeLinejoin &&
              ((l = Mi(c.strokeMiterlimit)),
              this.add(e.style, "strokeMiterlimit", l, l + 0.01))),
          (this._live = xd(e) || ~(t + "").indexOf("live")),
          (this._nowrap = ~(t + "").indexOf("nowrap")),
          this._props.push("drawSVG"),
          Kh
        );
      },
      render: function (e, t) {
        if (t.tween._time || !vd()) {
          var i = t._pt,
            r = t._style,
            n,
            a,
            o,
            l;
          if (i) {
            for (
              t._live &&
              ((n = Wn(t._target)),
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
              (l = t._offset),
              o &&
                l &&
                o + Math.abs(l % t._length) > t._length - 0.05 &&
                (l += l < 0 ? 0.005 : -0.005) &&
                (n += 0.005),
              (r.strokeDashoffset = o ? l : l + 0.001),
              (r.strokeDasharray =
                n < 0.1
                  ? "none"
                  : o
                  ? o + "px," + (t._nowrap ? 999999 : n) + "px"
                  : "0px, 999999px");
          }
        } else t.styles.revert();
      },
      getLength: Wn,
      getPosition: Td,
    };
  yd() && hi.registerPlugin(Ad), q.registerPlugin(Ad);
  const Cd = "pageLoadAnimationPlayed",
    Jh = () => {
      const s = document.querySelector("[page-load='component']");
      document.querySelector("[page-load='contain']");
      const e = document.querySelector("[page-load='overlay']"),
        t = document.querySelector("[page-load='svg-visual-wrap']"),
        i = document.querySelector("[page-load='svg-sm']"),
        r = document.querySelector("[page-load='svg-path-solid']"),
        n = document.querySelector("[page-load='svg-path-faded']"),
        a = document.querySelector("[page-load='svg-line']"),
        o = Zt();
      o && o.scrollTo(0, 0),
        q.set(a, { rotate: 120 }),
        q.set(i, { opacity: 0, rotate: 120 }),
        q.set(r, { opacity: 0, scale: 0.4, x: 150, y: -150 }),
        q.set(n, { opacity: 0, scale: 0.4, x: -150, y: 150 });
      const l = q.timeline();
      return (
        l.to(e, { duration: 0.8, opacity: 0, ease: "power2.inOut" }),
        l.to(t, { duration: 0.8, opacity: 1, ease: "power2.inOut" }, "<"),
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
        l.to(i, { duration: 1.2, scale: 0, rotate: 120, ease: "expo.inOut" }),
        l.to(
          a.querySelector("path"),
          { duration: 3.2, drawSVG: 0, stagger: 0.1, ease: "expo.inOut" },
          "-=2.8"
        ),
        l.to(
          s,
          {
            duration: 0.8,
            opacity: 0,
            pointerEvents: "none",
            ease: "power2.inOut",
            onComplete: () => {
              s.style.display = "none";
            },
          },
          "-=1.0"
        ),
        l
      );
    },
    em = () => {
      const s = document.querySelector("[page-load='component']");
      document.querySelector("[page-load='contain']");
      const e = document.querySelector("[page-load='overlay']");
      document.querySelector("[page-load='svg-visual-wrap']");
      const t = document.querySelector("[page-load='svg-sm']"),
        i = document.querySelector("[page-load='svg-path-solid']"),
        r = document.querySelector("[page-load='svg-path-faded']"),
        n = document.querySelector("[page-load='svg-line']"),
        a = Zt();
      a && a.scrollTo(0, 0),
        q.set(n, { rotate: 120 }),
        q.set(t, { opacity: 0, rotate: 120 }),
        q.set(i, { opacity: 0, scale: 0.4, x: 150, y: -150 }),
        q.set(r, { opacity: 0, scale: 0.4, x: -150, y: 150 });
      const o = q.timeline();
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
            onComplete: () => {
              s.style.display = "none";
            },
          },
          "-=1.4"
        ),
        o
      );
    },
    tm = () =>
      sessionStorage.getItem(Cd)
        ? em()
        : (sessionStorage.setItem(Cd, "true"), Jh()),
    im = () => {
      document.querySelectorAll("[work-accordion='component']").forEach((e) => {
        const t = e.querySelector("[work-accordion='trigger']"),
          i = t.querySelector("[work-accordion='title']"),
          r = t.querySelector("[work-accordion='open-text']"),
          n = t.querySelector("[work-accordion='close-text']"),
          a = t.querySelector("[work-accordion='icon']"),
          o = t.querySelector("[work-accordion='line']"),
          l = e.querySelector("[work-accordion='content']"),
          c = l.querySelector("[work-accordion='content-layout']"),
          d = c.offsetHeight;
        let h = !1;
        q.set(c, { opacity: 0, yPercent: 5 }),
          t.addEventListener("click", () => {
            const m = q.timeline();
            h
              ? (m.to(l, { height: 0, duration: 0.9, ease: "expo.inOut" }),
                m.to(
                  c,
                  { opacity: 0, yPercent: 5, duration: 1, ease: "expo.inOut" },
                  "<"
                ),
                m.to(o, { scaleX: 0, duration: 0.9, ease: "expo.inOut" }, "<"),
                m.to(a, { rotate: 0, duration: 0.9, ease: "expo.inOut" }, "<"),
                m.to(i, { opacity: 1, duration: 0.9, ease: "expo.inOut" }, "<"),
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
                m.to(a, { rotate: 45, duration: 1, ease: "expo.inOut" }, "<"),
                m.to(i, { opacity: 0.5, duration: 1, ease: "expo.inOut" }, "<"),
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
                m.to(l, { height: d, duration: 1.2, ease: "expo.inOut" }, "<")),
              (h = !h);
          });
      });
    },
    Md = () => {
      im();
    },
    rm = () => {
      tm(), cs(), Ys(), Vs(), Mh(), nd(), Yh(), Xh(), Uh(), Md();
    },
    sm = () => {
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
            l = t.querySelectorAll('[team-modal="close-trigger"]');
          if (!r || !n || !a || !o || !i) return;
          const c = document.querySelector(
            `[modal-trigger-name="${i}"][team-modal="open-trigger"]`
          );
          if (!c) return;
          q.set(t, {
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
            display: "none",
          }),
            q.set(r, { clipPath: "inset(0% 0% 0% 100%)" }),
            q.set([n, a, o], { y: 100, opacity: 0, filter: "blur(5px)" });
          const d = q.timeline({ paused: !0 }),
            h = q.timeline({ paused: !0 });
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
            h.to([n, a, o], {
              y: 100,
              opacity: 0,
              filter: "blur(5px)",
              ease: "expo.out",
              duration: 0.8,
              stagger: -0.14,
            }),
            h.to(
              r,
              {
                clipPath: "inset(0% 0% 0% 100%)",
                ease: "expo.inOut",
                duration: 1,
              },
              "-=0.8"
            ),
            h.to(
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
            ),
            c.addEventListener("click", (m) => {
              m.preventDefault(), d.restart();
              const p = Zt();
              p && p.stop();
            }),
            l.forEach((m) => {
              m.addEventListener("click", (p) => {
                p.preventDefault(), h.restart();
                const u = Zt();
                u && u.start();
              });
            });
        });
    },
    nm = () => {
      sm();
    };
  q.registerPlugin(W);
  const am = () => {
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
    om = () => {
      am();
    };
  q.registerPlugin(W, Ci);
  const lm = () => {
      document.querySelectorAll("[rollover-text='wrap']").forEach((e) => {
        const t = e.querySelector("[rollover-text='wrap-rel']"),
          i = t?.querySelector("[rollover-text='text-rel']"),
          r = e.querySelector("[rollover-text='wrap-ab']"),
          n = r?.querySelector("[rollover-text='text-ab']");
        if (!t || !i || !r || !n) return;
        const a = new Ci(i, { type: "chars" }),
          o = new Ci(n, { type: "chars" }),
          l = 1.8,
          c = "expo.inOut",
          d = 0.08,
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
        p.to(a.chars, { yPercent: h, ease: c, duration: l, stagger: d }, 0),
          p.to(o.chars, { yPercent: m, ease: c, duration: l, stagger: d }, 0);
      });
    },
    cm = () => {
      lm();
    },
    dm = () => {
      const s = document.querySelector("[page-fade='component']"),
        e = q.timeline();
      return (
        e.to(s, {
          duration: 0.5,
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          ease: "expo.inOut",
          onComplete: () => {
            s.style.display = "none";
          },
        }),
        e
      );
    },
    Gn = () => {
      dm();
    },
    um = () => {
      Gn(), cs(), Ys(), Vs(), nm(), om(), cm(), nd();
    },
    Pd = (s) => document.querySelector(s),
    fm = (s) => document.querySelectorAll(s),
    pm = (s, e) => s.classList.add(e),
    hm = () => {
      const s = Pd(".contact-form");
      s &&
        s.addEventListener("submit", (e) => {
          e.preventDefault();
        });
    },
    mm = () => {
      document.querySelectorAll('[filter-list="group"]').forEach((e) => {
        const t = e.querySelector('[filter-item="current"]'),
          i = e.querySelector("[list-filter='toggle']"),
          r = e.querySelector("[list-filter='dropdown-wrap']"),
          n = e.querySelectorAll("[list-filter='dropdown-option']"),
          a = e.querySelectorAll("[list-filter='target-item']"),
          o = 300,
          l = new Set(),
          c = (u, f) => {
            u.setAttribute("filter-status", f);
          },
          d = (u) => {
            const f = u.querySelectorAll("[filter-name]");
            return Array.from(f).map((g) =>
              g.getAttribute("filter-name")?.toLowerCase()
            );
          },
          h = (u) => {
            const f = u.toLowerCase();
            c(i, "not-active"),
              c(r, "not-active"),
              n.forEach((v) => {
                const b = v.getAttribute("filter-target") === u;
                c(v, b ? "active" : "not-active");
              });
            const g = e.querySelector(`[filter-target="${u}"]`);
            g && (t.textContent = g.textContent);
            let y = 0,
              w = 0;
            a.forEach((v) => {
              v.getAttribute("filter-status") === "active" &&
                (y++,
                l.add(v),
                c(v, "transition-out"),
                setTimeout(() => {
                  v.getAttribute("filter-status") === "transition-out" &&
                    (c(v, "not-active"),
                    l.delete(v),
                    w++,
                    w === y &&
                      a.forEach((_) => {
                        const S = d(_);
                        (f === "all" || S.includes(f)) &&
                          (l.add(_),
                          c(_, "transition-in"),
                          setTimeout(() => {
                            _.getAttribute("filter-status") ===
                              "transition-in" && c(_, "active"),
                              l.delete(_);
                          }, o));
                      }));
                }, o));
            }),
              y === 0 &&
                a.forEach((v) => {
                  const b = d(v);
                  (f === "all" || b.includes(f)) &&
                    v.getAttribute("filter-status") === "not-active" &&
                    (l.add(v),
                    c(v, "transition-in"),
                    setTimeout(() => {
                      v.getAttribute("filter-status") === "transition-in" &&
                        c(v, "active"),
                        l.delete(v);
                    }, o));
                });
          },
          m = "all";
        a.forEach((u) => {
          d(u), c(u, "active");
        }),
          n.forEach((u) => {
            const f = u.getAttribute("filter-target") === m;
            c(u, f ? "active" : "not-active");
          }),
          c(i, "not-active"),
          c(r, "not-active"),
          i.addEventListener("click", () => {
            const u = i.getAttribute("filter-status") === "active";
            c(i, u ? "not-active" : "active"),
              c(r, u ? "not-active" : "active");
          }),
          n.forEach((u) => {
            u.addEventListener("click", () => {
              const f = u.getAttribute("filter-target");
              u.getAttribute("filter-status") !== "active" && h(f);
            });
          });
        const p = e.querySelector(`[filter-target="${m}"]`);
        p && (t.textContent = p.textContent);
      });
    },
    gm = () => {
      mm();
    },
    vm = () => {
      Gn(), cs(), Ys(), Vs(), gm();
    };
  q.registerPlugin(W);
  const ko = () => {
      const s = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      if (s) return;
      const e = document.querySelectorAll('[hero-parallax-sm="visual"]'),
        t = document.querySelector('[hero-parallax-sm="header"]');
      if (!e.length && !t) return;
      const i = Zt?.();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (
          (W.defaults({ scroller: i ? i.wrapper : void 0 }),
          e.forEach((n) => {
            const a = parseFloat(n.getAttribute("parallax-speed")) || 0.6,
              o = s ? a * 0.3 : a,
              l = s ? 1.1 : 1.2;
            q.set(n, {
              force3D: !0,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }),
              q.fromTo(
                n,
                { yPercent: 0, scale: 1, filter: "none" },
                {
                  yPercent: -o * 100,
                  scale: l,
                  filter: "none",
                  ease: "none",
                  scrollTrigger: {
                    trigger: n.parentElement,
                    start: "top top",
                    end: "bottom top",
                    scrub: s ? 0.5 : !0,
                    invalidateOnRefresh: !0,
                    refreshPriority: -1,
                    disable: () =>
                      window.innerWidth < 480 && window.innerHeight < 600,
                  },
                }
              );
          }),
          t)
        ) {
          const n = parseFloat(t.getAttribute("parallax-speed")) || 3.5,
            a = s ? n * 0.5 : n,
            o = s ? 0.95 : 0.9;
          q.set(t, {
            force3D: !0,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }),
            q.fromTo(
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
                  disable: () =>
                    window.innerWidth < 480 && window.innerHeight < 600,
                },
              }
            );
        }
        if (isIOS) {
          const n = () => {
            setTimeout(() => {
              W.refresh();
            }, 500);
          };
          return (
            window.addEventListener("orientationchange", n),
            () => {
              window.removeEventListener("orientationchange", n);
            }
          );
        }
      }
    },
    wm = () => {
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? document.readyState === "loading"
          ? document.addEventListener("DOMContentLoaded", () => {
              setTimeout(ko, 100);
            })
          : setTimeout(ko, 100)
        : ko();
    },
    ym = {
      home: rm,
      about: um,
      contact: hm,
      work: vm,
      blog_cms: () => {
        Gn(), cs(), Ys(), Vs(), wm();
      },
      work_cms: () => {
        Gn(), cs(), Ys(), Vs(), Md();
      },
    },
    bm = () => {
      const s = document.querySelector("[data-page]"),
        e = s ? s.dataset.page : null,
        t = ym[e];
      t && t();
    },
    _m = () => {
      fm(".footer-accordion").forEach((e) => {
        const t = e.querySelector(".accordion-trigger"),
          i = e.querySelector(".accordion-content");
        !t ||
          !i ||
          t.addEventListener("click", () => {
            i.style.height = i.style.height ? "" : `${i.scrollHeight}px`;
          });
      });
    },
    Sm = () => {
      const s = {
        arrow3: { start: "-100%", show: "300%", out: "600%" },
        arrow2: { start: "-100%", show: "200%", out: "500%" },
        arrow1: { start: "-100%", show: "100%", out: "400%" },
      };
      document.querySelectorAll("[cta-arrow-group]").forEach((t) => {
        const i = [
          {
            ab: t.querySelector('[cta-arrow="icon-3-ab"]'),
            positions: s.arrow3,
          },
          {
            ab: t.querySelector('[cta-arrow="icon-2-ab"]'),
            positions: s.arrow2,
          },
          {
            ab: t.querySelector('[cta-arrow="icon-1-ab"]'),
            positions: s.arrow1,
          },
        ].filter(({ ab: n }) => n);
        if (i.length === 0) return;
        const r = q.timeline({
          repeat: -1,
          defaults: { duration: 1, ease: "expo.out" },
        });
        r.set(
          i.map(({ ab: n }) => n),
          { x: "-100%", opacity: 0 }
        ),
          r.to(
            i.map(({ ab: n }) => n),
            { x: (n) => i[n].positions.show, opacity: 1, stagger: 0.15 }
          ),
          r.to({}, { duration: 0.5 }),
          r.to(
            i.map(({ ab: n }) => n),
            { x: (n) => i[n].positions.out, opacity: 0, stagger: 0.1 }
          ),
          r.to({}, { duration: 0 });
      });
    };
  q.registerPlugin(W);
  const xm = () => {
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
            const d = l.querySelector('[nav-link="text"]'),
              h = l.querySelector('[nav-link="text-wrap"]'),
              m = l.querySelector('[nav-link="line"]');
            r.push(d), n.push(m);
            const p = document.querySelector('[line-top][nav-link="line"]'),
              u = document.querySelector('[line-middle][nav-link="line"]'),
              f = document.querySelector('[line-bottom][nav-link="line"]'),
              g = h.offsetHeight;
            if (!d || !h) return;
            q.set(d, { clearProps: "all" }),
              q.set(h, { clearProps: "all" }),
              q.set(l, { clearProps: "all" }),
              q.set(m, { clearProps: "all" }),
              q.set(p, { clearProps: "all" }),
              q.set(u, { clearProps: "all" }),
              q.set(f, { clearProps: "all" });
            const y = () => {
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
                  q.to([p, u, f], {
                    scaleX: 0.1,
                    ease: "expo.out",
                    duration: 1,
                    overwrite: !0,
                    stagger: 0.0016,
                  }),
                  q.to(p, { y: -g + 14, ease: "expo.out", duration: 0.9 }),
                  q.to(u, { y: -g - 10, ease: "expo.out", duration: 0.9 }),
                  q.to(f, { y: -g - 34, ease: "expo.out", duration: 0.9 });
              },
              w = () => {
                s.setAttribute("nav-state", "list"),
                  q.to(e, { pointerEvents: "auto" }),
                  q.to([p, u, f], {
                    scaleX: 1,
                    ease: "expo.out",
                    duration: 0.8,
                    overwrite: !0,
                    stagger: 0.0016,
                  }),
                  q.to(p, { y: 0, ease: "expo.out", duration: 0.8 }),
                  q.to(u, { y: 0, ease: "expo.out", duration: 0.8 }),
                  q.to(f, { y: 0, ease: "expo.out", duration: 0.8 }),
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
                    "-=0.7"
                  );
              },
              v = W.create({
                trigger: t,
                start: "bottom 80%",
                onEnter: y,
                onLeaveBack: w,
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
    Tm = () => xm(),
    Em = () => {
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
            const c = Zt();
            c && c.stop();
          });
        }),
        e.forEach((l) => {
          l.addEventListener("click", () => {
            o.restart();
            const c = Zt();
            c && c.start();
          });
        });
    },
    Am = () => {
      Em();
    };
  q.registerPlugin(W);
  const Cm = () => {
      const s = document.querySelectorAll("[visual-parallax]");
      if (!s.length) return;
      const e = Zt?.();
      W.defaults({ scroller: e ? e?.wrapper : void 0 }),
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
    Mm = () => {
      Cm();
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
  function Pm(s, e) {
    if (!(s instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function kd(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function Od(s, e, t) {
    return e && kd(s.prototype, e), t && kd(s, t), s;
  }
  function km(s, e, t) {
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
  function Ld(s, e) {
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
  function Id(s) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Ld(Object(t), !0).forEach(function (i) {
            km(s, i, t[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
        : Ld(Object(t)).forEach(function (i) {
            Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(t, i));
          });
    }
    return s;
  }
  function Dd(s, e) {
    return Lm(s) || Dm(s, e) || zd(s, e) || Rm();
  }
  function wt(s) {
    return Om(s) || Im(s) || zd(s) || zm();
  }
  function Om(s) {
    if (Array.isArray(s)) return Oo(s);
  }
  function Lm(s) {
    if (Array.isArray(s)) return s;
  }
  function Im(s) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(s))
      return Array.from(s);
  }
  function Dm(s, e) {
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
  function zd(s, e) {
    if (s) {
      if (typeof s == "string") return Oo(s, e);
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
        return Oo(s, e);
    }
  }
  function Oo(s, e) {
    (e == null || e > s.length) && (e = s.length);
    for (var t = 0, i = new Array(e); t < e; t++) i[t] = s[t];
    return i;
  }
  function zm() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Rm() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Sr(s, e) {
    return Object.getOwnPropertyNames(Object(s)).reduce(function (t, i) {
      var r = Object.getOwnPropertyDescriptor(Object(s), i),
        n = Object.getOwnPropertyDescriptor(Object(e), i);
      return Object.defineProperty(t, i, n || r);
    }, {});
  }
  function Ws(s) {
    return typeof s == "string";
  }
  function Lo(s) {
    return Array.isArray(s);
  }
  function Xn() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = Sr(s),
      t;
    return (
      e.types !== void 0 ? (t = e.types) : e.split !== void 0 && (t = e.split),
      t !== void 0 &&
        (e.types = (Ws(t) || Lo(t) ? String(t) : "")
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
  function Io(s) {
    var e = Ws(s) || Lo(s) ? String(s) : "";
    return {
      none: !e,
      lines: /line/i.test(e),
      words: /word/i.test(e),
      chars: /char/i.test(e),
    };
  }
  function jn(s) {
    return s !== null && typeof s == "object";
  }
  function $m(s) {
    return jn(s) && /^(1|3|11)$/.test(s.nodeType);
  }
  function Nm(s) {
    return typeof s == "number" && s > -1 && s % 1 === 0;
  }
  function Bm(s) {
    return jn(s) && Nm(s.length);
  }
  function xr(s) {
    return Lo(s)
      ? s
      : s == null
      ? []
      : Bm(s)
      ? Array.prototype.slice.call(s)
      : [s];
  }
  function Rd(s) {
    var e = s;
    return (
      Ws(s) &&
        (/^(#[a-z]\w+)$/.test(s.trim())
          ? (e = document.getElementById(s.trim().slice(1)))
          : (e = document.querySelectorAll(s))),
      xr(e).reduce(function (t, i) {
        return [].concat(wt(t), wt(xr(i).filter($m)));
      }, [])
    );
  }
  var Fm = Object.entries,
    Un = "_splittype",
    ei = {},
    qm = 0;
  function mi(s, e, t) {
    if (!jn(s)) return null;
    var i = s[Un] || (s[Un] = ++qm),
      r = ei[i] || (ei[i] = {});
    return (
      t === void 0
        ? e &&
          Object.getPrototypeOf(e) === Object.prototype &&
          (ei[i] = Id(Id({}, r), e))
        : e !== void 0 && (r[e] = t),
      t
    );
  }
  function Tr(s, e) {
    var t = jn(s) ? s[Un] : null,
      i = (t && ei[t]) || {};
    return i;
  }
  function $d(s) {
    var e = s && s[Un];
    e && (delete s[e], delete ei[e]);
  }
  function Ym() {
    Object.keys(ei).forEach(function (s) {
      delete ei[s];
    });
  }
  function Vm() {
    Fm(ei).forEach(function (s) {
      var e = Dd(s, 2),
        t = e[0],
        i = e[1],
        r = i.isRoot,
        n = i.isSplit;
      (!r || !n) && ((ei[t] = null), delete ei[t]);
    });
  }
  function Hm(s) {
    var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
      t = s ? String(s) : "";
    return t.trim().replace(/\s+/g, " ").split(e);
  }
  var Do = "\\ud800-\\udfff",
    Nd = "\\u0300-\\u036f\\ufe20-\\ufe23",
    Bd = "\\u20d0-\\u20f0",
    Fd = "\\ufe0e\\ufe0f",
    Wm = "[".concat(Do, "]"),
    zo = "[".concat(Nd).concat(Bd, "]"),
    Ro = "\\ud83c[\\udffb-\\udfff]",
    Gm = "(?:".concat(zo, "|").concat(Ro, ")"),
    qd = "[^".concat(Do, "]"),
    Yd = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Vd = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Hd = "\\u200d",
    Wd = "".concat(Gm, "?"),
    Gd = "[".concat(Fd, "]?"),
    Xm = "(?:" + Hd + "(?:" + [qd, Yd, Vd].join("|") + ")" + Gd + Wd + ")*",
    jm = Gd + Wd + Xm,
    Um = "(?:".concat(
      ["".concat(qd).concat(zo, "?"), zo, Yd, Vd, Wm].join("|"),
      `
)`
    ),
    Zm = RegExp(
      "".concat(Ro, "(?=").concat(Ro, ")|").concat(Um).concat(jm),
      "g"
    ),
    Km = [Hd, Do, Nd, Bd, Fd],
    Qm = RegExp("[".concat(Km.join(""), "]"));
  function Jm(s) {
    return s.split("");
  }
  function Xd(s) {
    return Qm.test(s);
  }
  function eg(s) {
    return s.match(Zm) || [];
  }
  function tg(s) {
    return Xd(s) ? eg(s) : Jm(s);
  }
  function ig(s) {
    return s == null ? "" : String(s);
  }
  function rg(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (s = ig(s)), s && Ws(s) && !e && Xd(s) ? tg(s) : s.split(e);
  }
  function $o(s, e) {
    var t = document.createElement(s);
    return (
      e &&
        Object.keys(e).forEach(function (i) {
          var r = e[i],
            n = Ws(r) ? r.trim() : r;
          n === null ||
            n === "" ||
            (i === "children"
              ? t.append.apply(t, wt(xr(n)))
              : t.setAttribute(i, n));
        }),
      t
    );
  }
  var No = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function sg(s, e) {
    e = Sr(No, e);
    var t = Io(e.types),
      i = e.tagName,
      r = s.nodeValue,
      n = document.createDocumentFragment(),
      a = [],
      o = [];
    return (
      /^\s/.test(r) && n.append(" "),
      (a = Hm(r).reduce(function (l, c, d, h) {
        var m, p;
        return (
          t.chars &&
            (p = rg(c).map(function (u) {
              var f = $o(i, {
                class: "".concat(e.splitClass, " ").concat(e.charClass),
                style: "display: inline-block;",
                children: u,
              });
              return mi(f, "isChar", !0), (o = [].concat(wt(o), [f])), f;
            })),
          t.words || t.lines
            ? ((m = $o(i, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; ".concat(
                  t.words && e.absolute ? "position: relative;" : ""
                ),
                children: t.chars ? p : c,
              })),
              mi(m, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
              n.appendChild(m))
            : p.forEach(function (u) {
                n.appendChild(u);
              }),
          d < h.length - 1 && n.append(" "),
          t.words ? l.concat(m) : l
        );
      }, [])),
      /\s$/.test(r) && n.append(" "),
      s.replaceWith(n),
      { words: a, chars: o }
    );
  }
  function jd(s, e) {
    var t = s.nodeType,
      i = { words: [], chars: [] };
    if (!/(1|3|11)/.test(t)) return i;
    if (t === 3 && /\S/.test(s.nodeValue)) return sg(s, e);
    var r = xr(s.childNodes);
    if (r.length && (mi(s, "isSplit", !0), !Tr(s).isRoot)) {
      (s.style.display = "inline-block"), (s.style.position = "relative");
      var n = s.nextSibling,
        a = s.previousSibling,
        o = s.textContent || "",
        l = n ? n.textContent : " ",
        c = a ? a.textContent : " ";
      mi(s, {
        isWordEnd: /\s$/.test(o) || /^\s/.test(l),
        isWordStart: /^\s/.test(o) || /\s$/.test(c),
      });
    }
    return r.reduce(function (d, h) {
      var m = jd(h, e),
        p = m.words,
        u = m.chars;
      return {
        words: [].concat(wt(d.words), wt(p)),
        chars: [].concat(wt(d.chars), wt(u)),
      };
    }, i);
  }
  function ng(s, e, t, i) {
    if (!t.absolute) return { top: e ? s.offsetTop : null };
    var r = s.offsetParent,
      n = Dd(i, 2),
      a = n[0],
      o = n[1],
      l = 0,
      c = 0;
    if (r && r !== document.body) {
      var d = r.getBoundingClientRect();
      (l = d.x + a), (c = d.y + o);
    }
    var h = s.getBoundingClientRect(),
      m = h.width,
      p = h.height,
      u = h.x,
      f = h.y,
      g = f + o - c,
      y = u + a - l;
    return { width: m, height: p, top: g, left: y };
  }
  function Ud(s) {
    Tr(s).isWord
      ? ($d(s), s.replaceWith.apply(s, wt(s.childNodes)))
      : xr(s.children).forEach(function (e) {
          return Ud(e);
        });
  }
  var ag = function () {
    return document.createDocumentFragment();
  };
  function og(s, e, t) {
    var i = Io(e.types),
      r = e.tagName,
      n = s.getElementsByTagName("*"),
      a = [],
      o = [],
      l = null,
      c,
      d,
      h,
      m = [],
      p = s.parentElement,
      u = s.nextElementSibling,
      f = ag(),
      g = window.getComputedStyle(s),
      y = g.textAlign,
      w = parseFloat(g.fontSize),
      v = w * 0.2;
    return (
      e.absolute &&
        ((h = { left: s.offsetLeft, top: s.offsetTop, width: s.offsetWidth }),
        (d = s.offsetWidth),
        (c = s.offsetHeight),
        mi(s, { cssWidth: s.style.width, cssHeight: s.style.height })),
      xr(n).forEach(function (b) {
        var _ = b.parentElement === s,
          S = ng(b, _, e, t),
          T = S.width,
          A = S.height,
          x = S.top,
          E = S.left;
        /^br$/i.test(b.nodeName) ||
          (i.lines &&
            _ &&
            ((l === null || x - l >= v) && ((l = x), a.push((o = []))),
            o.push(b)),
          e.absolute && mi(b, { top: x, left: E, width: T, height: A }));
      }),
      p && p.removeChild(s),
      i.lines &&
        ((m = a.map(function (b) {
          var _ = $o(r, {
            class: "".concat(e.splitClass, " ").concat(e.lineClass),
            style: "display: block; text-align: ".concat(y, "; width: 100%;"),
          });
          mi(_, "isLine", !0);
          var S = { height: 0, top: 1e4 };
          return (
            f.appendChild(_),
            b.forEach(function (T, A, x) {
              var E = Tr(T),
                L = E.isWordEnd,
                M = E.top,
                k = E.height,
                I = x[A + 1];
              (S.height = Math.max(S.height, k)),
                (S.top = Math.min(S.top, M)),
                _.appendChild(T),
                L && Tr(I).isWordStart && _.append(" ");
            }),
            e.absolute && mi(_, { height: S.height, top: S.top }),
            _
          );
        })),
        i.words || Ud(f),
        s.replaceChildren(f)),
      e.absolute &&
        ((s.style.width = "".concat(s.style.width || d, "px")),
        (s.style.height = "".concat(c, "px")),
        xr(n).forEach(function (b) {
          var _ = Tr(b),
            S = _.isLine,
            T = _.top,
            A = _.left,
            x = _.width,
            E = _.height,
            L = Tr(b.parentElement),
            M = !S && L.isLine;
          (b.style.top = "".concat(M ? T - L.top : T, "px")),
            (b.style.left = S
              ? "".concat(h.left, "px")
              : "".concat(A - (M ? h.left : 0), "px")),
            (b.style.height = "".concat(E, "px")),
            (b.style.width = S ? "".concat(h.width, "px") : "".concat(x, "px")),
            (b.style.position = "absolute");
        })),
      p && (u ? p.insertBefore(s, u) : p.appendChild(s)),
      m
    );
  }
  var es = Sr(No, {}),
    lg = (function () {
      Od(s, null, [
        {
          key: "clearData",
          value: function () {
            Ym();
          },
        },
        {
          key: "setDefaults",
          value: function (t) {
            return (es = Sr(es, Xn(t))), No;
          },
        },
        {
          key: "revert",
          value: function (t) {
            Rd(t).forEach(function (i) {
              var r = Tr(i),
                n = r.isSplit,
                a = r.html,
                o = r.cssWidth,
                l = r.cssHeight;
              n &&
                ((i.innerHTML = a),
                (i.style.width = o || ""),
                (i.style.height = l || ""),
                $d(i));
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
            return ei;
          },
        },
        {
          key: "defaults",
          get: function () {
            return es;
          },
          set: function (t) {
            es = Sr(es, Xn(t));
          },
        },
      ]);
      function s(e, t) {
        Pm(this, s),
          (this.isSplit = !1),
          (this.settings = Sr(es, Xn(t))),
          (this.elements = Rd(e)),
          this.split();
      }
      return (
        Od(s, [
          {
            key: "split",
            value: function (t) {
              var i = this;
              this.revert(),
                this.elements.forEach(function (a) {
                  mi(a, "html", a.innerHTML);
                }),
                (this.lines = []),
                (this.words = []),
                (this.chars = []);
              var r = [window.pageXOffset, window.pageYOffset];
              t !== void 0 && (this.settings = Sr(this.settings, Xn(t)));
              var n = Io(this.settings.types);
              n.none ||
                (this.elements.forEach(function (a) {
                  mi(a, "isRoot", !0);
                  var o = jd(a, i.settings),
                    l = o.words,
                    c = o.chars;
                  (i.words = [].concat(wt(i.words), wt(l))),
                    (i.chars = [].concat(wt(i.chars), wt(c)));
                }),
                this.elements.forEach(function (a) {
                  if (n.lines || i.settings.absolute) {
                    var o = og(a, i.settings, r);
                    i.lines = [].concat(wt(i.lines), wt(o));
                  }
                }),
                (this.isSplit = !0),
                window.scrollTo(r[0], r[1]),
                Vm());
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
  q.registerPlugin(W, Ci);
  const cg = () => {
      document.querySelectorAll("[split-text]").forEach((e) => {
        new lg(e, { type: "lines", tagName: "span" }).lines.forEach((n) => {
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
    dg = () => {
      cg();
    };
  q.registerPlugin(W);
  const ug = () => {
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
    fg = () => {
      ug();
    };
  q.registerPlugin(W, Ci);
  const pg = () => {
      const s = document.querySelectorAll("[text-scramble]");
      s.length &&
        s.forEach((e) => {
          e.removeAttribute("aria-label");
          const i = new Ci(e, {
            type: "chars, words, lines",
            charsClass: "char-animate",
          }).chars;
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
    hg = () => {
      pg();
    };
  q.registerPlugin(W);
  const mg = () => {
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
            : gg(i, r, a, o, l, c);
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
              d = r
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
              d.length > 0 &&
                l.to(
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
    },
    gg = (s, e, t, i, r, n) => {
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
    vg = () => {
      mg();
    },
    wg = () => {
      const s = document.querySelector("[contact-modal='main']");
      if (!s) return;
      const e = document.querySelectorAll("[contact-modal='open-btn']"),
        t = document.querySelectorAll("[contact-modal='close-btn']"),
        i = document.querySelector("[contact-modal='visual']"),
        r = document.querySelector("[contact-modal='form']");
      let n = !1;
      const a = q.timeline({ paused: !0 });
      q.set(s, {
        display: "none",
        opacity: 0,
        pointerEvents: "none",
        backdropFilter: "blur(0px)",
      });
      const o = q.timeline({ paused: !0 });
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
          onComplete: () => {
            q.set(s, { display: "none" });
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
        o.to(r, { xPercent: 130, duration: 1.2, ease: "expo.inOut" }, "<");
      const l = () => {
        n && (o.restart(), (n = !1));
      };
      e.forEach((c) => {
        c.addEventListener("click", () => {
          n || (a.restart(), (n = !0));
        });
      }),
        t.forEach((c) => {
          c.addEventListener("click", l);
        }),
        document.addEventListener("keydown", (c) => {
          c.key === "Escape" && l();
        });
    },
    yg = () => {
      wg();
    },
    bg = () => {
      const s = document.querySelector("[page-leave='component']");
      if (!s) return;
      const e = document.querySelectorAll("a[href]"),
        t = window.location.origin;
      e.forEach((i) => {
        const r = i.getAttribute("href").trim(),
          n = r.startsWith("#"),
          a = r.startsWith("mailto:"),
          o = r.startsWith("tel:"),
          l = r.startsWith("http") && !r.startsWith(t);
        n ||
          a ||
          o ||
          l ||
          i.addEventListener("click", (c) => {
            c.preventDefault();
            const d = i.href;
            q.to(s, {
              display: "block",
              opacity: 1,
              backdropFilter: "blur(20px)",
              backgroundColor: "var(--swatch--dark)",
              duration: 0.5,
              ease: "expo.inOut",
              onComplete: () => {
                const h = document.querySelector("[page-load='component']");
                h && ((h.style.display = "block"), (h.style.opacity = 1)),
                  (window.location.href = d);
              },
            });
          });
      });
    },
    _g = () => {
      bg();
    },
    Sg = () => {
      _m(), Sm(), Tm(), Am(), Mm(), dg(), fg(), hg(), vg(), yg(), _g();
    },
    xg = () => {
      const s = Pd(".example-component");
      s && (pm(s, "is-initialized"), s.addEventListener("click", () => {}));
    },
    Tg = () => {
      xg();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Sg(), Tg(), bm(), Bh();
  });
})();

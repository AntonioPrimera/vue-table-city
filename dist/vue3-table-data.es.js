var xr = Object.defineProperty;
var Dr = (n, t, e) => t in n ? xr(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var h = (n, t, e) => (Dr(n, typeof t != "symbol" ? t + "" : t, e), e), At = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var oe = (n, t, e) => (At(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ae = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, bt = (n, t, e, r) => (At(n, t, "write to private field"), r ? r.call(n, e) : t.set(n, e), e);
var pn = (n, t, e) => (At(n, t, "access private method"), e);
import { openBlock as p, createElementBlock as v, createElementVNode as b, createCommentVNode as ye, ref as R, reactive as Er, watch as Tr, computed as Ge, onMounted as kr, Fragment as Pe, renderList as Oe, normalizeClass as je, toDisplayString as re, createVNode as we, unref as M, renderSlot as An, createTextVNode as Mr, onUnmounted as Pr, withModifiers as Or, createBlock as Ie, withCtx as Zt, isRef as xe, withDirectives as Sr, vModelCheckbox as Ir, resolveComponent as Nr, TransitionGroup as Yr, defineComponent as Lr, h as bn, nextTick as Fn } from "vue";
const Hr = { key: 0 }, Ar = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Fr = { key: 1 }, $r = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Wr = { key: 2 }, Rr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Vr = { key: 3 }, qr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Br = { key: 4 }, Xr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, zr = { key: 5 }, Gr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Qr = { key: 6 }, jr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Zr = { key: 7 }, Ur = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Kr = { key: 8 }, Jr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ei = { key: 9 }, ti = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ni = { key: 10 }, ri = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ii = { key: 11 }, ai = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, oi = { key: 12 }, si = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 6 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ce = {
  __name: "Icon",
  props: {
    icon: {
      type: String,
      required: !0
    }
  },
  setup(n) {
    return (t, e) => n.icon === "minus" ? (p(), v("div", Hr, [
      (p(), v("svg", Ar, e[0] || (e[0] = [
        b("path", {
          d: "M16.6667 9.16797H3.33333C2.87333 9.16797 2.5 9.5413 2.5 10.0013C2.5 10.4613 2.87333 10.8346 3.33333 10.8346H16.6667C17.1267 10.8346 17.5 10.4613 17.5 10.0013C17.5 9.5413 17.1267 9.16797 16.6667 9.16797Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : n.icon === "plus" ? (p(), v("div", Fr, [
      (p(), v("svg", $r, e[1] || (e[1] = [
        b("path", {
          d: "M11.3333 5.33333H6.66667V0.666667C6.66667 0.298667 6.368 0 6 0C5.632 0 5.33333 0.298667 5.33333 0.666667V5.33333H0.666667C0.298667 5.33333 0 5.632 0 6C0 6.368 0.298667 6.66667 0.666667 6.66667H5.33333V11.3333C5.33333 11.7013 5.632 12 6 12C6.368 12 6.66667 11.7013 6.66667 11.3333V6.66667H11.3333C11.7013 6.66667 12 6.368 12 6C12 5.632 11.7013 5.33333 11.3333 5.33333Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : n.icon === "radio-circle" ? (p(), v("div", Wr, [
      (p(), v("svg", Rr, e[2] || (e[2] = [
        b("circle", {
          cx: "9",
          cy: "9",
          r: "8.25",
          fill: "white",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1)
      ])))
    ])) : n.icon === "radio-circle-selected" ? (p(), v("div", Vr, [
      (p(), v("svg", qr, e[3] || (e[3] = [
        b("circle", {
          cx: "9",
          cy: "9",
          r: "8.25",
          fill: "white",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1),
        b("circle", {
          cx: "9",
          cy: "9",
          r: "5",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : n.icon === "small-row" ? (p(), v("div", Br, [
      (p(), v("svg", Xr, e[4] || (e[4] = [
        b("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.07997 7.07993V8.91993H12.92V7.07993H3.07997ZM2.21457 5.94512C2.45226 5.79232 2.73965 5.71992 3.02219 5.71992H12.9777C13.2603 5.71992 13.5477 5.79232 13.7854 5.94512C14.0156 6.09316 14.28 6.37949 14.28 6.79993V9.19993C14.28 9.62036 14.0156 9.90669 13.7854 10.0547C13.5477 10.2075 13.2603 10.2799 12.9777 10.2799H3.02219C2.73965 10.2799 2.45226 10.2075 2.21457 10.0547C1.9843 9.9067 1.71997 9.62036 1.71997 9.19993V6.79993C1.71997 6.37949 1.9843 6.09316 2.21457 5.94512Z",
          fill: "black"
        }, null, -1)
      ])))
    ])) : n.icon === "medium-row" ? (p(), v("div", zr, [
      (p(), v("svg", Gr, e[5] || (e[5] = [
        b("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.07997 6.27992V9.71992H12.92V6.27992H3.07997ZM1.71997 6.19992C1.71997 5.47007 2.32669 4.91992 3.02219 4.91992H12.9777C13.6732 4.91992 14.28 5.47007 14.28 6.19992V9.79992C14.28 10.5298 13.6732 11.0799 12.9777 11.0799H3.02219C2.32669 11.0799 1.71997 10.5298 1.71997 9.79992V6.19992Z",
          fill: "black"
        }, null, -1)
      ])))
    ])) : n.icon === "large-row" ? (p(), v("div", Qr, [
      (p(), v("svg", jr, e[6] || (e[6] = [
        b("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.10301 5.47992C3.09154 5.50566 3.07997 5.54589 3.07997 5.59992V10.3999C3.07997 10.454 3.09154 10.4942 3.10301 10.5199H12.8969C12.9084 10.4942 12.92 10.454 12.92 10.3999V5.59992C12.92 5.54589 12.9084 5.50566 12.8969 5.47992H3.10301ZM1.71997 5.59992C1.71997 4.95171 2.15403 4.11992 3.02219 4.11992H12.9777C13.8459 4.11992 14.28 4.95171 14.28 5.59992V10.3999C14.28 11.0481 13.8459 11.8799 12.9777 11.8799H3.02219C2.15403 11.8799 1.71997 11.0481 1.71997 10.3999V5.59992Z",
          fill: "black"
        }, null, -1)
      ])))
    ])) : n.icon === "check" ? (p(), v("div", Zr, [
      (p(), v("svg", Ur, e[7] || (e[7] = [
        b("rect", {
          width: "18",
          height: "18",
          rx: "4",
          fill: "#5664E1"
        }, null, -1),
        b("path", {
          d: "M14.2203 4.89348C14.0471 4.89864 13.8827 4.97103 13.762 5.0953L6.9 11.9573L4.70469 9.76197C4.64326 9.69799 4.56968 9.6469 4.48826 9.61171C4.40684 9.57652 4.31922 9.55793 4.23052 9.55703C4.14183 9.55613 4.05385 9.57293 3.97173 9.60646C3.88961 9.63998 3.81501 9.68956 3.75229 9.75228C3.68957 9.815 3.64 9.8896 3.60647 9.97172C3.57294 10.0538 3.55614 10.1418 3.55704 10.2305C3.55794 10.3192 3.57653 10.4068 3.61172 10.4882C3.64691 10.5697 3.698 10.6432 3.76198 10.7047L6.42864 13.3713C6.55367 13.4963 6.72322 13.5665 6.9 13.5665C7.07678 13.5665 7.24632 13.4963 7.37135 13.3713L14.7047 6.03801C14.801 5.94437 14.8668 5.82381 14.8935 5.69213C14.9201 5.56045 14.9063 5.42379 14.854 5.30007C14.8016 5.17634 14.7131 5.07132 14.6 4.99877C14.487 4.92622 14.3546 4.88952 14.2203 4.89348Z",
          fill: "white"
        }, null, -1)
      ])))
    ])) : n.icon === "drag-indicator" ? (p(), v("div", Kr, [
      (p(), v("svg", Jr, e[8] || (e[8] = [
        b("path", {
          d: "M5.99984 13.3334C5.63317 13.3334 5.31928 13.2029 5.05817 12.9417C4.79706 12.6806 4.6665 12.3667 4.6665 12.0001C4.6665 11.6334 4.79706 11.3195 5.05817 11.0584C5.31928 10.7973 5.63317 10.6667 5.99984 10.6667C6.3665 10.6667 6.68039 10.7973 6.9415 11.0584C7.20261 11.3195 7.33317 11.6334 7.33317 12.0001C7.33317 12.3667 7.20261 12.6806 6.9415 12.9417C6.68039 13.2029 6.3665 13.3334 5.99984 13.3334ZM9.99984 13.3334C9.63317 13.3334 9.31928 13.2029 9.05817 12.9417C8.79706 12.6806 8.6665 12.3667 8.6665 12.0001C8.6665 11.6334 8.79706 11.3195 9.05817 11.0584C9.31928 10.7973 9.63317 10.6667 9.99984 10.6667C10.3665 10.6667 10.6804 10.7973 10.9415 11.0584C11.2026 11.3195 11.3332 11.6334 11.3332 12.0001C11.3332 12.3667 11.2026 12.6806 10.9415 12.9417C10.6804 13.2029 10.3665 13.3334 9.99984 13.3334ZM5.99984 9.33342C5.63317 9.33342 5.31928 9.20286 5.05817 8.94175C4.79706 8.68064 4.6665 8.36675 4.6665 8.00008C4.6665 7.63341 4.79706 7.31953 5.05817 7.05841C5.31928 6.7973 5.63317 6.66675 5.99984 6.66675C6.3665 6.66675 6.68039 6.7973 6.9415 7.05841C7.20261 7.31953 7.33317 7.63341 7.33317 8.00008C7.33317 8.36675 7.20261 8.68064 6.9415 8.94175C6.68039 9.20286 6.3665 9.33342 5.99984 9.33342ZM9.99984 9.33342C9.63317 9.33342 9.31928 9.20286 9.05817 8.94175C8.79706 8.68064 8.6665 8.36675 8.6665 8.00008C8.6665 7.63341 8.79706 7.31953 9.05817 7.05841C9.31928 6.7973 9.63317 6.66675 9.99984 6.66675C10.3665 6.66675 10.6804 6.7973 10.9415 7.05841C11.2026 7.31953 11.3332 7.63341 11.3332 8.00008C11.3332 8.36675 11.2026 8.68064 10.9415 8.94175C10.6804 9.20286 10.3665 9.33342 9.99984 9.33342ZM5.99984 5.33341C5.63317 5.33341 5.31928 5.20286 5.05817 4.94175C4.79706 4.68064 4.6665 4.36675 4.6665 4.00008C4.6665 3.63341 4.79706 3.31953 5.05817 3.05841C5.31928 2.7973 5.63317 2.66675 5.99984 2.66675C6.3665 2.66675 6.68039 2.7973 6.9415 3.05841C7.20261 3.31953 7.33317 3.63341 7.33317 4.00008C7.33317 4.36675 7.20261 4.68064 6.9415 4.94175C6.68039 5.20286 6.3665 5.33341 5.99984 5.33341ZM9.99984 5.33341C9.63317 5.33341 9.31928 5.20286 9.05817 4.94175C8.79706 4.68064 8.6665 4.36675 8.6665 4.00008C8.6665 3.63341 8.79706 3.31953 9.05817 3.05841C9.31928 2.7973 9.63317 2.66675 9.99984 2.66675C10.3665 2.66675 10.6804 2.7973 10.9415 3.05841C11.2026 3.31953 11.3332 3.63341 11.3332 4.00008C11.3332 4.36675 11.2026 4.68064 10.9415 4.94175C10.6804 5.20286 10.3665 5.33341 9.99984 5.33341Z",
          fill: "#303136"
        }, null, -1)
      ])))
    ])) : n.icon === "search" ? (p(), v("div", ei, [
      (p(), v("svg", ti, e[9] || (e[9] = [
        b("path", {
          d: "M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L19.5859 21.5859C20.1379 22.1379 21.0339 22.1379 21.5859 21.5859C22.1379 21.0339 22.1379 20.1379 21.5859 19.5859L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : n.icon === "columns" ? (p(), v("div", ni, [
      (p(), v("svg", ri, e[10] || (e[10] = [
        b("path", {
          d: "M2.49984 2.5C2.039 2.5 1.6665 2.8725 1.6665 3.33333V16.6667C1.6665 17.1275 2.039 17.5 2.49984 17.5H5.83317V2.5H2.49984ZM7.49984 2.5V17.5H12.4998V2.5H7.49984ZM14.1665 2.5V17.5H17.4998C17.9607 17.5 18.3332 17.1275 18.3332 16.6667V3.33333C18.3332 2.8725 17.9607 2.5 17.4998 2.5H14.1665Z",
          fill: "#303136"
        }, null, -1)
      ])))
    ])) : n.icon === "settings" ? (p(), v("div", ii, [
      (p(), v("svg", ai, e[11] || (e[11] = [
        b("path", {
          d: "M8.74188 1.66669C8.34271 1.66669 8.00149 1.94885 7.92482 2.34052L7.6465 3.76955C6.96253 4.02819 6.3301 4.38952 5.77475 4.8454L4.40431 4.37339C4.02681 4.24339 3.61147 4.39949 3.41147 4.74449L2.15496 6.92222C1.9558 7.26805 2.02828 7.7071 2.32912 7.96877L3.42775 8.92417C3.37061 9.2753 3.33335 9.63276 3.33335 10C3.33335 10.3673 3.37061 10.7247 3.42775 11.0759L2.32912 12.0313C2.02828 12.2929 1.9558 12.732 2.15496 13.0778L3.41147 15.2556C3.61064 15.6014 4.02681 15.7574 4.40431 15.6283L5.77475 15.1563C6.32992 15.6119 6.96284 15.972 7.6465 16.2305L7.92482 17.6595C8.00149 18.0512 8.34271 18.3334 8.74188 18.3334H11.2582C11.6573 18.3334 11.9985 18.0512 12.0752 17.6595L12.3535 16.2305C13.0375 15.9719 13.6699 15.6105 14.2253 15.1546L15.5957 15.6266C15.9732 15.7566 16.3886 15.6014 16.5886 15.2556L17.8451 13.0762C18.0442 12.7304 17.9717 12.2929 17.6709 12.0313L16.5723 11.0759C16.6294 10.7247 16.6667 10.3673 16.6667 10C16.6667 9.63276 16.6294 9.2753 16.5723 8.92417L17.6709 7.96877C17.9717 7.7071 18.0442 7.26805 17.8451 6.92222L16.5886 4.74449C16.3894 4.39865 15.9732 4.2426 15.5957 4.37177L14.2253 4.84377C13.6701 4.38818 13.0372 4.02807 12.3535 3.76955L12.0752 2.34052C11.9985 1.94885 11.6573 1.66669 11.2582 1.66669H8.74188ZM10 6.66669C11.8408 6.66669 13.3333 8.15919 13.3333 10C13.3333 11.8409 11.8408 13.3334 10 13.3334C8.15918 13.3334 6.66668 11.8409 6.66668 10C6.66668 8.15919 8.15918 6.66669 10 6.66669Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : n.icon === "sort" ? (p(), v("div", oi, [
      (p(), v("svg", si, e[12] || (e[12] = [
        b("path", {
          d: "M3.45883 11.9404C3.28486 12.3421 2.71514 12.3421 2.54117 11.9404L0.704461 7.69868C0.561505 7.36854 0.803529 7 1.16329 7L4.83671 7C5.19647 7 5.43849 7.36854 5.29554 7.69868L3.45883 11.9404Z",
          fill: "currentColor"
        }, null, -1),
        b("path", {
          d: "M2.54117 1.05963C2.71514 0.657866 3.28486 0.657866 3.45883 1.05963L5.29554 5.30132C5.43849 5.63146 5.19647 6 4.83671 6L1.16329 6C0.803529 6 0.561506 5.63146 0.704461 5.30132L2.54117 1.05963Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : ye("", !0);
  }
};
function li() {
  let n = R([]), t = R([]);
  const e = 75;
  function r() {
    return n.value;
  }
  function i() {
    return t.value;
  }
  function a(l) {
    n.value = l, t.value = [], o(e);
  }
  function o(l = 30) {
    let u = t.value.length;
    if (u >= n.value.length)
      return;
    let c = n.value.slice(u, u + l);
    t.value = [...t.value, ...c];
  }
  function s() {
    t.value = [], o(e);
  }
  return {
    getAllData: r,
    getLoadedData: i,
    setData: a,
    loadData: o,
    refreshLoadedData: s
  };
}
function $n() {
  let n = window.__vue3TableDataConfig.mitt;
  function t(i, a) {
    n.on(i, a);
  }
  function e(i, a) {
    n.off(i, a);
  }
  function r(i, a = null) {
    n.emit(i, a);
  }
  return {
    addEventHandler: t,
    removeEventHandler: e,
    triggerEvent: r
  };
}
const te = {
  /**
   * Get translate from the translation file.
   *
   * e.g. {
   *    "column_settings_modal": {
   *        "title": "Column order and visibility",
   *    },
   *    "style_settings_modal": {...},
   * }
   *
   * and the given path is "column_settings_modal.title" then return "Column order and visibility"
   */
  getTranslate(n, t = window.__vue3TableDataConfig.translation.file) {
    return n.split(".").forEach((r) => {
      t ? t = t[r] : t = void 0;
    }), t;
  },
  /**
   * Set the translation file. We need a json file with the proper structure
   * (you can find the structure in translate.json file)
   *
   */
  setTranslateFile(n) {
    this.hasValidContent(n) && (window.__vue3TableDataConfig.translation.file = n);
  },
  /**
   * Validate json file. Check if the given file has the proper structure.
   * You can find the structure in translate.json file
   */
  hasValidContent(n) {
    return typeof n != "object" ? (console.error("The given file is not a valid json file", n), !1) : ([
      "search",
      "column_settings_modal",
      "column_settings_modal.title",
      "column_settings_modal.description",
      "column_settings_modal.actions",
      "column_settings_modal.actions.save",
      "column_settings_modal.actions.cancel",
      "style_settings_modal",
      "style_settings_modal.title",
      "style_settings_modal.description",
      "style_settings_modal.sections",
      "style_settings_modal.sections.row_size",
      "style_settings_modal.sections.numbers_color",
      "style_settings_modal.sections.row_size.title",
      "style_settings_modal.sections.numbers_color.title",
      "style_settings_modal.sections.row_size.options",
      "style_settings_modal.sections.row_size.options.small",
      "style_settings_modal.sections.row_size.options.medium",
      "style_settings_modal.sections.row_size.options.large",
      "style_settings_modal.sections.numbers_color.options.black",
      "style_settings_modal.sections.numbers_color.options.color",
      "style_settings_modal.actions",
      "style_settings_modal.actions.save",
      "style_settings_modal.actions.cancel"
    ].forEach((e) => {
      if (this.getTranslate(e, n) === void 0)
        return console.error(
          "The given file has an invalid structure. We could not find the translate for path: " + e.replaceAll(".", " -> ")
        ), !1;
    }), !0);
  }
}, q = {
  //todo: remove this function - replace it with formatNumber(...)
  formatNumericValue(n) {
    return this.isNumericValue(n) ? this.formatNumber(n, 2) : n;
  },
  isNumericValue(n) {
    return n !== null && typeof n == "number";
  },
  isDate(n) {
    return !n || typeof n == "string" && n.length !== 10 ? !1 : this.parseDate(n) instanceof Date;
  },
  parseDate(n, t = "d.m.Y") {
    if (t === "d.m.Y") {
      let e = n.substring(6), r = n.substr(3, 2), i = n.substr(0, 2);
      return new Date(e, r - 1, i, 0, 0, 0, 0);
    }
  },
  formatNumber(n, t, e = ",", r = ".", i = "", a = "") {
    if (n === null || isNaN(n))
      return n;
    let o = n < 0 ? "-" : "", s = Math.abs(n), l = Math.floor(s), u = s - l, c = l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, r), d = u.toFixed(t).slice(2);
    return `${i}${o}${c}${e}${d}${a}`;
  },
  //formatNumber(value, options = {}) {
  //    if (value === null || isNaN(value)) return value;
  //
  //    let standardOptions = {
  //        minimumFractionDigits: (typeof options.minimumFractionDigits === "number" ? options.minimumFractionDigits : null )
  //            || (typeof options.fractionDigits === "number" ? options.fractionDigits : 2),
  //        maximumFractionDigits: (typeof options.maximumFractionDigits === "number" ? options.maximumFractionDigits : null )
  //            || (typeof options.fractionDigits === "number" ? options.fractionDigits : 2),
  //    }
  //
  //    return (value * 1).toLocaleString(document.documentElement.lang, standardOptions);
  //},
  cleanTerm(n) {
    return n && typeof n == "string" ? (n = n.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), n.replace(/[^0-9a-z]/gi, "").toLowerCase()) : "";
  },
  getValue(n, t) {
    return t.includes(".") ? t.split(".").reduce((e, r) => e && e[r], n) : n[t];
  },
  uid(n) {
    let t = "";
    for (; t.length < n; )
      t += Math.random().toString(36).substring(2, 15);
    return t.substring(0, n);
  }
  //uuid4() {
  //    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //        let r = Math.random() * 16 | 0;
  //        let v = c === 'x' ? r : (r & 0x3 | 0x8);
  //        return v.toString(16);
  //    });
  //}
}, Wn = 6048e5, ui = 864e5, ci = 6e4, di = 36e5, fi = 1e3, vn = Symbol.for("constructDateFrom");
function J(n, t) {
  return typeof n == "function" ? n(t) : n && typeof n == "object" && vn in n ? n[vn](t) : n instanceof Date ? new n.constructor(t) : new Date(t);
}
function G(n, t) {
  return J(t || n, n);
}
function Rn(n, t, e) {
  const r = G(n, e == null ? void 0 : e.in);
  return isNaN(t) ? J((e == null ? void 0 : e.in) || n, NaN) : (t && r.setDate(r.getDate() + t), r);
}
let hi = {};
function rt() {
  return hi;
}
function Le(n, t) {
  var s, l, u, c;
  const e = rt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? e.weekStartsOn ?? ((c = (u = e.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = G(n, t == null ? void 0 : t.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function tt(n, t) {
  return Le(n, { ...t, weekStartsOn: 1 });
}
function Vn(n, t) {
  const e = G(n, t == null ? void 0 : t.in), r = e.getFullYear(), i = J(e, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = tt(i), o = J(e, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const s = tt(o);
  return e.getTime() >= a.getTime() ? r + 1 : e.getTime() >= s.getTime() ? r : r - 1;
}
function Mt(n) {
  const t = G(n), e = new Date(
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
  return e.setUTCFullYear(t.getFullYear()), +n - +e;
}
function mi(n, ...t) {
  const e = J.bind(
    null,
    n || t.find((r) => typeof r == "object")
  );
  return t.map(e);
}
function yn(n, t) {
  const e = G(n, t == null ? void 0 : t.in);
  return e.setHours(0, 0, 0, 0), e;
}
function gi(n, t, e) {
  const [r, i] = mi(
    e == null ? void 0 : e.in,
    n,
    t
  ), a = yn(r), o = yn(i), s = +a - Mt(a), l = +o - Mt(o);
  return Math.round((s - l) / ui);
}
function wi(n, t) {
  const e = Vn(n, t), r = J((t == null ? void 0 : t.in) || n, 0);
  return r.setFullYear(e, 0, 4), r.setHours(0, 0, 0, 0), tt(r);
}
function pi(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function bi(n) {
  return !(!pi(n) && typeof n != "number" || isNaN(+G(n)));
}
function vi(n, t) {
  const e = G(n, t == null ? void 0 : t.in);
  return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
const yi = {
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
}, _i = (n, t, e) => {
  let r;
  const i = yi[n];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ft(n) {
  return (t = {}) => {
    const e = t.width ? String(t.width) : n.defaultWidth;
    return n.formats[e] || n.formats[n.defaultWidth];
  };
}
const Ci = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, xi = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Di = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ei = {
  date: Ft({
    formats: Ci,
    defaultWidth: "full"
  }),
  time: Ft({
    formats: xi,
    defaultWidth: "full"
  }),
  dateTime: Ft({
    formats: Di,
    defaultWidth: "full"
  })
}, Ti = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ki = (n, t, e, r) => Ti[n];
function at(n) {
  return (t, e) => {
    const r = e != null && e.context ? String(e.context) : "standalone";
    let i;
    if (r === "formatting" && n.formattingValues) {
      const o = n.defaultFormattingWidth || n.defaultWidth, s = e != null && e.width ? String(e.width) : o;
      i = n.formattingValues[s] || n.formattingValues[o];
    } else {
      const o = n.defaultWidth, s = e != null && e.width ? String(e.width) : n.defaultWidth;
      i = n.values[s] || n.values[o];
    }
    const a = n.argumentCallback ? n.argumentCallback(t) : t;
    return i[a];
  };
}
const Mi = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Pi = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Oi = {
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
}, Si = {
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
}, Ii = {
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
}, Ni = {
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
}, Yi = (n, t) => {
  const e = Number(n), r = e % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, Li = {
  ordinalNumber: Yi,
  era: at({
    values: Mi,
    defaultWidth: "wide"
  }),
  quarter: at({
    values: Pi,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: at({
    values: Oi,
    defaultWidth: "wide"
  }),
  day: at({
    values: Si,
    defaultWidth: "wide"
  }),
  dayPeriod: at({
    values: Ii,
    defaultWidth: "wide",
    formattingValues: Ni,
    defaultFormattingWidth: "wide"
  })
};
function ot(n) {
  return (t, e = {}) => {
    const r = e.width, i = r && n.matchPatterns[r] || n.matchPatterns[n.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const o = a[0], s = r && n.parsePatterns[r] || n.parsePatterns[n.defaultParseWidth], l = Array.isArray(s) ? Ai(s, (d) => d.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      Hi(s, (d) => d.test(o))
    );
    let u;
    u = n.valueCallback ? n.valueCallback(l) : l, u = e.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      e.valueCallback(u)
    ) : u;
    const c = t.slice(o.length);
    return { value: u, rest: c };
  };
}
function Hi(n, t) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && t(n[e]))
      return e;
}
function Ai(n, t) {
  for (let e = 0; e < n.length; e++)
    if (t(n[e]))
      return e;
}
function Fi(n) {
  return (t, e = {}) => {
    const r = t.match(n.matchPattern);
    if (!r)
      return null;
    const i = r[0], a = t.match(n.parsePattern);
    if (!a)
      return null;
    let o = n.valueCallback ? n.valueCallback(a[0]) : a[0];
    o = e.valueCallback ? e.valueCallback(o) : o;
    const s = t.slice(i.length);
    return { value: o, rest: s };
  };
}
const $i = /^(\d+)(th|st|nd|rd)?/i, Wi = /\d+/i, Ri = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Vi = {
  any: [/^b/i, /^(a|c)/i]
}, qi = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Bi = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xi = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zi = {
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
}, Gi = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Qi = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ji = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Zi = {
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
}, Ui = {
  ordinalNumber: Fi({
    matchPattern: $i,
    parsePattern: Wi,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: ot({
    matchPatterns: Ri,
    defaultMatchWidth: "wide",
    parsePatterns: Vi,
    defaultParseWidth: "any"
  }),
  quarter: ot({
    matchPatterns: qi,
    defaultMatchWidth: "wide",
    parsePatterns: Bi,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: ot({
    matchPatterns: Xi,
    defaultMatchWidth: "wide",
    parsePatterns: zi,
    defaultParseWidth: "any"
  }),
  day: ot({
    matchPatterns: Gi,
    defaultMatchWidth: "wide",
    parsePatterns: Qi,
    defaultParseWidth: "any"
  }),
  dayPeriod: ot({
    matchPatterns: ji,
    defaultMatchWidth: "any",
    parsePatterns: Zi,
    defaultParseWidth: "any"
  })
}, qn = {
  code: "en-US",
  formatDistance: _i,
  formatLong: Ei,
  formatRelative: ki,
  localize: Li,
  match: Ui,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ki(n, t) {
  const e = G(n, t == null ? void 0 : t.in);
  return gi(e, vi(e)) + 1;
}
function Bn(n, t) {
  const e = G(n, t == null ? void 0 : t.in), r = +tt(e) - +wi(e);
  return Math.round(r / Wn) + 1;
}
function sn(n, t) {
  var c, d, m, g;
  const e = G(n, t == null ? void 0 : t.in), r = e.getFullYear(), i = rt(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((g = (m = i.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, o = J((t == null ? void 0 : t.in) || n, 0);
  o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
  const s = Le(o, t), l = J((t == null ? void 0 : t.in) || n, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const u = Le(l, t);
  return +e >= +s ? r + 1 : +e >= +u ? r : r - 1;
}
function Ji(n, t) {
  var s, l, u, c;
  const e = rt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((c = (u = e.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, i = sn(n, t), a = J((t == null ? void 0 : t.in) || n, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Le(a, t);
}
function Xn(n, t) {
  const e = G(n, t == null ? void 0 : t.in), r = +Le(e, t) - +Ji(e, t);
  return Math.round(r / Wn) + 1;
}
function H(n, t) {
  const e = n < 0 ? "-" : "", r = Math.abs(n).toString().padStart(t, "0");
  return e + r;
}
const Me = {
  // Year
  y(n, t) {
    const e = n.getFullYear(), r = e > 0 ? e : 1 - e;
    return H(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(n, t) {
    const e = n.getMonth();
    return t === "M" ? String(e + 1) : H(e + 1, 2);
  },
  // Day of the month
  d(n, t) {
    return H(n.getDate(), t.length);
  },
  // AM or PM
  a(n, t) {
    const e = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return e.toUpperCase();
      case "aaa":
        return e;
      case "aaaaa":
        return e[0];
      case "aaaa":
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, t) {
    return H(n.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(n, t) {
    return H(n.getHours(), t.length);
  },
  // Minute
  m(n, t) {
    return H(n.getMinutes(), t.length);
  },
  // Second
  s(n, t) {
    return H(n.getSeconds(), t.length);
  },
  // Fraction of second
  S(n, t) {
    const e = t.length, r = n.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, e - 3)
    );
    return H(i, t.length);
  }
}, qe = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _n = {
  // Era
  G: function(n, t, e) {
    const r = n.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(r, { width: "abbreviated" });
      case "GGGGG":
        return e.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(n, t, e) {
    if (t === "yo") {
      const r = n.getFullYear(), i = r > 0 ? r : 1 - r;
      return e.ordinalNumber(i, { unit: "year" });
    }
    return Me.y(n, t);
  },
  // Local week-numbering year
  Y: function(n, t, e, r) {
    const i = sn(n, r), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const o = a % 100;
      return H(o, 2);
    }
    return t === "Yo" ? e.ordinalNumber(a, { unit: "year" }) : H(a, t.length);
  },
  // ISO week-numbering year
  R: function(n, t) {
    const e = Vn(n);
    return H(e, t.length);
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
  u: function(n, t) {
    const e = n.getFullYear();
    return H(e, t.length);
  },
  // Quarter
  Q: function(n, t, e) {
    const r = Math.ceil((n.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return H(r, 2);
      case "Qo":
        return e.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return e.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return e.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return e.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, t, e) {
    const r = Math.ceil((n.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return H(r, 2);
      case "qo":
        return e.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return e.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, t, e) {
    const r = n.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Me.M(n, t);
      case "Mo":
        return e.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return e.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return e.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return e.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, t, e) {
    const r = n.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return H(r + 1, 2);
      case "Lo":
        return e.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return e.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return e.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return e.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, t, e, r) {
    const i = Xn(n, r);
    return t === "wo" ? e.ordinalNumber(i, { unit: "week" }) : H(i, t.length);
  },
  // ISO week of year
  I: function(n, t, e) {
    const r = Bn(n);
    return t === "Io" ? e.ordinalNumber(r, { unit: "week" }) : H(r, t.length);
  },
  // Day of the month
  d: function(n, t, e) {
    return t === "do" ? e.ordinalNumber(n.getDate(), { unit: "date" }) : Me.d(n, t);
  },
  // Day of year
  D: function(n, t, e) {
    const r = Ki(n);
    return t === "Do" ? e.ordinalNumber(r, { unit: "dayOfYear" }) : H(r, t.length);
  },
  // Day of week
  E: function(n, t, e) {
    const r = n.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return e.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return e.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return e.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return e.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, t, e, r) {
    const i = n.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return H(a, 2);
      case "eo":
        return e.ordinalNumber(a, { unit: "day" });
      case "eee":
        return e.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return e.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return e.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return e.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, t, e, r) {
    const i = n.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return H(a, t.length);
      case "co":
        return e.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return e.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return e.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return e.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return e.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, t, e) {
    const r = n.getDay(), i = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(i);
      case "ii":
        return H(i, t.length);
      case "io":
        return e.ordinalNumber(i, { unit: "day" });
      case "iii":
        return e.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return e.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return e.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return e.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, t, e) {
    const i = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return e.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, t, e) {
    const r = n.getHours();
    let i;
    switch (r === 12 ? i = qe.noon : r === 0 ? i = qe.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return e.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, t, e) {
    const r = n.getHours();
    let i;
    switch (r >= 17 ? i = qe.evening : r >= 12 ? i = qe.afternoon : r >= 4 ? i = qe.morning : i = qe.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, t, e) {
    if (t === "ho") {
      let r = n.getHours() % 12;
      return r === 0 && (r = 12), e.ordinalNumber(r, { unit: "hour" });
    }
    return Me.h(n, t);
  },
  // Hour [0-23]
  H: function(n, t, e) {
    return t === "Ho" ? e.ordinalNumber(n.getHours(), { unit: "hour" }) : Me.H(n, t);
  },
  // Hour [0-11]
  K: function(n, t, e) {
    const r = n.getHours() % 12;
    return t === "Ko" ? e.ordinalNumber(r, { unit: "hour" }) : H(r, t.length);
  },
  // Hour [1-24]
  k: function(n, t, e) {
    let r = n.getHours();
    return r === 0 && (r = 24), t === "ko" ? e.ordinalNumber(r, { unit: "hour" }) : H(r, t.length);
  },
  // Minute
  m: function(n, t, e) {
    return t === "mo" ? e.ordinalNumber(n.getMinutes(), { unit: "minute" }) : Me.m(n, t);
  },
  // Second
  s: function(n, t, e) {
    return t === "so" ? e.ordinalNumber(n.getSeconds(), { unit: "second" }) : Me.s(n, t);
  },
  // Fraction of second
  S: function(n, t) {
    return Me.S(n, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, t, e) {
    const r = n.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return xn(r);
      case "XXXX":
      case "XX":
        return We(r);
      case "XXXXX":
      case "XXX":
      default:
        return We(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, t, e) {
    const r = n.getTimezoneOffset();
    switch (t) {
      case "x":
        return xn(r);
      case "xxxx":
      case "xx":
        return We(r);
      case "xxxxx":
      case "xxx":
      default:
        return We(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, t, e) {
    const r = n.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Cn(r, ":");
      case "OOOO":
      default:
        return "GMT" + We(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, t, e) {
    const r = n.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Cn(r, ":");
      case "zzzz":
      default:
        return "GMT" + We(r, ":");
    }
  },
  // Seconds timestamp
  t: function(n, t, e) {
    const r = Math.trunc(+n / 1e3);
    return H(r, t.length);
  },
  // Milliseconds timestamp
  T: function(n, t, e) {
    return H(+n, t.length);
  }
};
function Cn(n, t = "") {
  const e = n > 0 ? "-" : "+", r = Math.abs(n), i = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? e + String(i) : e + String(i) + t + H(a, 2);
}
function xn(n, t) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + H(Math.abs(n) / 60, 2) : We(n, t);
}
function We(n, t = "") {
  const e = n > 0 ? "-" : "+", r = Math.abs(n), i = H(Math.trunc(r / 60), 2), a = H(r % 60, 2);
  return e + i + t + a;
}
const Dn = (n, t) => {
  switch (n) {
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
}, zn = (n, t) => {
  switch (n) {
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
}, ea = (n, t) => {
  const e = n.match(/(P+)(p+)?/) || [], r = e[1], i = e[2];
  if (!i)
    return Dn(n, t);
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
  return a.replace("{{date}}", Dn(r, t)).replace("{{time}}", zn(i, t));
}, Ut = {
  p: zn,
  P: ea
}, ta = /^D+$/, na = /^Y+$/, ra = ["D", "DD", "YY", "YYYY"];
function Gn(n) {
  return ta.test(n);
}
function Qn(n) {
  return na.test(n);
}
function Kt(n, t, e) {
  const r = ia(n, t, e);
  if (console.warn(r), ra.includes(n))
    throw new RangeError(r);
}
function ia(n, t, e) {
  const r = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const aa = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, oa = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, sa = /^'([^]*?)'?$/, la = /''/g, ua = /[a-zA-Z]/;
function ca(n, t, e) {
  var c, d, m, g, w, T, Q, U;
  const r = rt(), i = (e == null ? void 0 : e.locale) ?? r.locale ?? qn, a = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((d = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, o = (e == null ? void 0 : e.weekStartsOn) ?? ((T = (w = e == null ? void 0 : e.locale) == null ? void 0 : w.options) == null ? void 0 : T.weekStartsOn) ?? r.weekStartsOn ?? ((U = (Q = r.locale) == null ? void 0 : Q.options) == null ? void 0 : U.weekStartsOn) ?? 0, s = G(n, e == null ? void 0 : e.in);
  if (!bi(s))
    throw new RangeError("Invalid time value");
  let l = t.match(oa).map((O) => {
    const N = O[0];
    if (N === "p" || N === "P") {
      const j = Ut[N];
      return j(O, i.formatLong);
    }
    return O;
  }).join("").match(aa).map((O) => {
    if (O === "''")
      return { isToken: !1, value: "'" };
    const N = O[0];
    if (N === "'")
      return { isToken: !1, value: da(O) };
    if (_n[N])
      return { isToken: !0, value: O };
    if (N.match(ua))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + N + "`"
      );
    return { isToken: !1, value: O };
  });
  i.localize.preprocessor && (l = i.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: o,
    locale: i
  };
  return l.map((O) => {
    if (!O.isToken)
      return O.value;
    const N = O.value;
    (!(e != null && e.useAdditionalWeekYearTokens) && Qn(N) || !(e != null && e.useAdditionalDayOfYearTokens) && Gn(N)) && Kt(N, t, String(n));
    const j = _n[N[0]];
    return j(s, N, i.localize, u);
  }).join("");
}
function da(n) {
  const t = n.match(sa);
  return t ? t[1].replace(la, "'") : n;
}
function fa() {
  return Object.assign({}, rt());
}
function ha(n, t) {
  const e = G(n, t == null ? void 0 : t.in).getDay();
  return e === 0 ? 7 : e;
}
function ma(n, t) {
  const e = ga(t) ? new t(0) : J(t, 0);
  return e.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), e.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), e;
}
function ga(n) {
  var t;
  return typeof n == "function" && ((t = n.prototype) == null ? void 0 : t.constructor) === n;
}
const wa = 10;
class jn {
  constructor() {
    h(this, "subPriority", 0);
  }
  validate(t, e) {
    return !0;
  }
}
class pa extends jn {
  constructor(t, e, r, i, a) {
    super(), this.value = t, this.validateValue = e, this.setValue = r, this.priority = i, a && (this.subPriority = a);
  }
  validate(t, e) {
    return this.validateValue(t, this.value, e);
  }
  set(t, e, r) {
    return this.setValue(t, e, this.value, r);
  }
}
class ba extends jn {
  constructor(e, r) {
    super();
    h(this, "priority", wa);
    h(this, "subPriority", -1);
    this.context = e || ((i) => J(r, i));
  }
  set(e, r) {
    return r.timestampIsSet ? e : J(e, ma(e, this.context));
  }
}
class L {
  run(t, e, r, i) {
    const a = this.parse(t, e, r, i);
    return a ? {
      setter: new pa(
        a.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: a.rest
    } : null;
  }
  validate(t, e, r) {
    return !0;
  }
}
class va extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 140);
    h(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return i.era(e, { width: "abbreviated" }) || i.era(e, { width: "narrow" });
      case "GGGGG":
        return i.era(e, { width: "narrow" });
      case "GGGG":
      default:
        return i.era(e, { width: "wide" }) || i.era(e, { width: "abbreviated" }) || i.era(e, { width: "narrow" });
    }
  }
  set(e, r, i) {
    return r.era = i, e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const B = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, be = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function X(n, t) {
  return n && {
    value: t(n.value),
    rest: n.rest
  };
}
function F(n, t) {
  const e = t.match(n);
  return e ? {
    value: parseInt(e[0], 10),
    rest: t.slice(e[0].length)
  } : null;
}
function ve(n, t) {
  const e = t.match(n);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = e[1] === "+" ? 1 : -1, i = e[2] ? parseInt(e[2], 10) : 0, a = e[3] ? parseInt(e[3], 10) : 0, o = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: r * (i * di + a * ci + o * fi),
    rest: t.slice(e[0].length)
  };
}
function Zn(n) {
  return F(B.anyDigitsSigned, n);
}
function V(n, t) {
  switch (n) {
    case 1:
      return F(B.singleDigit, t);
    case 2:
      return F(B.twoDigits, t);
    case 3:
      return F(B.threeDigits, t);
    case 4:
      return F(B.fourDigits, t);
    default:
      return F(new RegExp("^\\d{1," + n + "}"), t);
  }
}
function Pt(n, t) {
  switch (n) {
    case 1:
      return F(B.singleDigitSigned, t);
    case 2:
      return F(B.twoDigitsSigned, t);
    case 3:
      return F(B.threeDigitsSigned, t);
    case 4:
      return F(B.fourDigitsSigned, t);
    default:
      return F(new RegExp("^-?\\d{1," + n + "}"), t);
  }
}
function ln(n) {
  switch (n) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Un(n, t) {
  const e = t > 0, r = e ? t : 1 - t;
  let i;
  if (r <= 50)
    i = n || 100;
  else {
    const a = r + 50, o = Math.trunc(a / 100) * 100, s = n >= a % 100;
    i = n + o - (s ? 100 : 0);
  }
  return e ? i : 1 - i;
}
function Kn(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class ya extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 130);
    h(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, r, i) {
    const a = (o) => ({
      year: o,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return X(V(4, e), a);
      case "yo":
        return X(
          i.ordinalNumber(e, {
            unit: "year"
          }),
          a
        );
      default:
        return X(V(r.length, e), a);
    }
  }
  validate(e, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(e, r, i) {
    const a = e.getFullYear();
    if (i.isTwoDigitYear) {
      const s = Un(
        i.year,
        a
      );
      return e.setFullYear(s, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const o = !("era" in r) || r.era === 1 ? i.year : 1 - i.year;
    return e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class _a extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 130);
    h(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, r, i) {
    const a = (o) => ({
      year: o,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return X(V(4, e), a);
      case "Yo":
        return X(
          i.ordinalNumber(e, {
            unit: "year"
          }),
          a
        );
      default:
        return X(V(r.length, e), a);
    }
  }
  validate(e, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(e, r, i, a) {
    const o = sn(e, a);
    if (i.isTwoDigitYear) {
      const l = Un(
        i.year,
        o
      );
      return e.setFullYear(
        l,
        0,
        a.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), Le(e, a);
    }
    const s = !("era" in r) || r.era === 1 ? i.year : 1 - i.year;
    return e.setFullYear(s, 0, a.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Le(e, a);
  }
}
class Ca extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 130);
    h(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r) {
    return Pt(r === "R" ? 4 : r.length, e);
  }
  set(e, r, i) {
    const a = J(e, 0);
    return a.setFullYear(i, 0, 4), a.setHours(0, 0, 0, 0), tt(a);
  }
}
class xa extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 130);
    h(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, r) {
    return Pt(r === "u" ? 4 : r.length, e);
  }
  set(e, r, i) {
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Da extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 120);
    h(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, i) {
    switch (r) {
      case "Q":
      case "QQ":
        return V(r.length, e);
      case "Qo":
        return i.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return i.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return i.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return i.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || i.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 4;
  }
  set(e, r, i) {
    return e.setMonth((i - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Ea extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 120);
    h(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, i) {
    switch (r) {
      case "q":
      case "qq":
        return V(r.length, e);
      case "qo":
        return i.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return i.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || i.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return i.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return i.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || i.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || i.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 4;
  }
  set(e, r, i) {
    return e.setMonth((i - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Ta extends L {
  constructor() {
    super(...arguments);
    h(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    h(this, "priority", 110);
  }
  parse(e, r, i) {
    const a = (o) => o - 1;
    switch (r) {
      case "M":
        return X(
          F(B.month, e),
          a
        );
      case "MM":
        return X(V(2, e), a);
      case "Mo":
        return X(
          i.ordinalNumber(e, {
            unit: "month"
          }),
          a
        );
      case "MMM":
        return i.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.month(e, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return i.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return i.month(e, { width: "wide", context: "formatting" }) || i.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 11;
  }
  set(e, r, i) {
    return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ka extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 110);
    h(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, i) {
    const a = (o) => o - 1;
    switch (r) {
      case "L":
        return X(
          F(B.month, e),
          a
        );
      case "LL":
        return X(V(2, e), a);
      case "Lo":
        return X(
          i.ordinalNumber(e, {
            unit: "month"
          }),
          a
        );
      case "LLL":
        return i.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || i.month(e, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return i.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return i.month(e, { width: "wide", context: "standalone" }) || i.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || i.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 11;
  }
  set(e, r, i) {
    return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function Ma(n, t, e) {
  const r = G(n, e == null ? void 0 : e.in), i = Xn(r, e) - t;
  return r.setDate(r.getDate() - i * 7), G(r, e == null ? void 0 : e.in);
}
class Pa extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 100);
    h(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, r, i) {
    switch (r) {
      case "w":
        return F(B.week, e);
      case "wo":
        return i.ordinalNumber(e, { unit: "week" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 53;
  }
  set(e, r, i, a) {
    return Le(Ma(e, i, a), a);
  }
}
function Oa(n, t, e) {
  const r = G(n, e == null ? void 0 : e.in), i = Bn(r, e) - t;
  return r.setDate(r.getDate() - i * 7), r;
}
class Sa extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 100);
    h(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, i) {
    switch (r) {
      case "I":
        return F(B.week, e);
      case "Io":
        return i.ordinalNumber(e, { unit: "week" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 53;
  }
  set(e, r, i) {
    return tt(Oa(e, i));
  }
}
const Ia = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Na = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Ya extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 90);
    h(this, "subPriority", 1);
    h(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, i) {
    switch (r) {
      case "d":
        return F(B.date, e);
      case "do":
        return i.ordinalNumber(e, { unit: "date" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    const i = e.getFullYear(), a = Kn(i), o = e.getMonth();
    return a ? r >= 1 && r <= Na[o] : r >= 1 && r <= Ia[o];
  }
  set(e, r, i) {
    return e.setDate(i), e.setHours(0, 0, 0, 0), e;
  }
}
class La extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 90);
    h(this, "subpriority", 1);
    h(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, i) {
    switch (r) {
      case "D":
      case "DD":
        return F(B.dayOfYear, e);
      case "Do":
        return i.ordinalNumber(e, { unit: "date" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    const i = e.getFullYear();
    return Kn(i) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(e, r, i) {
    return e.setMonth(0, i), e.setHours(0, 0, 0, 0), e;
  }
}
function un(n, t, e) {
  var d, m, g, w;
  const r = rt(), i = (e == null ? void 0 : e.weekStartsOn) ?? ((m = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((w = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, a = G(n, e == null ? void 0 : e.in), o = a.getDay(), l = (t % 7 + 7) % 7, u = 7 - i, c = t < 0 || t > 6 ? t - (o + u) % 7 : (l + u) % 7 - (o + u) % 7;
  return Rn(a, c, e);
}
class Ha extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 90);
    h(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return i.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.day(e, { width: "short", context: "formatting" }) || i.day(e, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return i.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return i.day(e, { width: "short", context: "formatting" }) || i.day(e, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return i.day(e, { width: "wide", context: "formatting" }) || i.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.day(e, { width: "short", context: "formatting" }) || i.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 6;
  }
  set(e, r, i, a) {
    return e = un(e, i, a), e.setHours(0, 0, 0, 0), e;
  }
}
class Aa extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 90);
    h(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, i, a) {
    const o = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return (s + a.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "e":
      case "ee":
        return X(V(r.length, e), o);
      case "eo":
        return X(
          i.ordinalNumber(e, {
            unit: "day"
          }),
          o
        );
      case "eee":
        return i.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.day(e, { width: "short", context: "formatting" }) || i.day(e, { width: "narrow", context: "formatting" });
      case "eeeee":
        return i.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return i.day(e, { width: "short", context: "formatting" }) || i.day(e, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return i.day(e, { width: "wide", context: "formatting" }) || i.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.day(e, { width: "short", context: "formatting" }) || i.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 6;
  }
  set(e, r, i, a) {
    return e = un(e, i, a), e.setHours(0, 0, 0, 0), e;
  }
}
class Fa extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 90);
    h(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, r, i, a) {
    const o = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return (s + a.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "c":
      case "cc":
        return X(V(r.length, e), o);
      case "co":
        return X(
          i.ordinalNumber(e, {
            unit: "day"
          }),
          o
        );
      case "ccc":
        return i.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || i.day(e, { width: "short", context: "standalone" }) || i.day(e, { width: "narrow", context: "standalone" });
      case "ccccc":
        return i.day(e, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return i.day(e, { width: "short", context: "standalone" }) || i.day(e, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return i.day(e, { width: "wide", context: "standalone" }) || i.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || i.day(e, { width: "short", context: "standalone" }) || i.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 6;
  }
  set(e, r, i, a) {
    return e = un(e, i, a), e.setHours(0, 0, 0, 0), e;
  }
}
function $a(n, t, e) {
  const r = G(n, e == null ? void 0 : e.in), i = ha(r, e), a = t - i;
  return Rn(r, a, e);
}
class Wa extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 90);
    h(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, r, i) {
    const a = (o) => o === 0 ? 7 : o;
    switch (r) {
      case "i":
      case "ii":
        return V(r.length, e);
      case "io":
        return i.ordinalNumber(e, { unit: "day" });
      case "iii":
        return X(
          i.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(e, {
            width: "short",
            context: "formatting"
          }) || i.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiii":
        return X(
          i.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiiii":
        return X(
          i.day(e, {
            width: "short",
            context: "formatting"
          }) || i.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiii":
      default:
        return X(
          i.day(e, {
            width: "wide",
            context: "formatting"
          }) || i.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(e, {
            width: "short",
            context: "formatting"
          }) || i.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 7;
  }
  set(e, r, i) {
    return e = $a(e, i), e.setHours(0, 0, 0, 0), e;
  }
}
class Ra extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 80);
    h(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return i.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return i.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return i.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || i.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, r, i) {
    return e.setHours(ln(i), 0, 0, 0), e;
  }
}
class Va extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 80);
    h(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return i.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return i.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return i.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || i.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, r, i) {
    return e.setHours(ln(i), 0, 0, 0), e;
  }
}
class qa extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 80);
    h(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return i.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return i.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return i.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || i.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, r, i) {
    return e.setHours(ln(i), 0, 0, 0), e;
  }
}
class Ba extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 70);
    h(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "h":
        return F(B.hour12h, e);
      case "ho":
        return i.ordinalNumber(e, { unit: "hour" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 12;
  }
  set(e, r, i) {
    const a = e.getHours() >= 12;
    return a && i < 12 ? e.setHours(i + 12, 0, 0, 0) : !a && i === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(i, 0, 0, 0), e;
  }
}
class Xa extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 70);
    h(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "H":
        return F(B.hour23h, e);
      case "Ho":
        return i.ordinalNumber(e, { unit: "hour" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 23;
  }
  set(e, r, i) {
    return e.setHours(i, 0, 0, 0), e;
  }
}
class za extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 70);
    h(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "K":
        return F(B.hour11h, e);
      case "Ko":
        return i.ordinalNumber(e, { unit: "hour" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 11;
  }
  set(e, r, i) {
    return e.getHours() >= 12 && i < 12 ? e.setHours(i + 12, 0, 0, 0) : e.setHours(i, 0, 0, 0), e;
  }
}
class Ga extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 70);
    h(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "k":
        return F(B.hour24h, e);
      case "ko":
        return i.ordinalNumber(e, { unit: "hour" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 1 && r <= 24;
  }
  set(e, r, i) {
    const a = i <= 24 ? i % 24 : i;
    return e.setHours(a, 0, 0, 0), e;
  }
}
class Qa extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 60);
    h(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "m":
        return F(B.minute, e);
      case "mo":
        return i.ordinalNumber(e, { unit: "minute" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 59;
  }
  set(e, r, i) {
    return e.setMinutes(i, 0, 0), e;
  }
}
class ja extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 50);
    h(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, r, i) {
    switch (r) {
      case "s":
        return F(B.second, e);
      case "so":
        return i.ordinalNumber(e, { unit: "second" });
      default:
        return V(r.length, e);
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 59;
  }
  set(e, r, i) {
    return e.setSeconds(i, 0), e;
  }
}
class Za extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 30);
    h(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, r) {
    const i = (a) => Math.trunc(a * Math.pow(10, -r.length + 3));
    return X(V(r.length, e), i);
  }
  set(e, r, i) {
    return e.setMilliseconds(i), e;
  }
}
class Ua extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 10);
    h(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, r) {
    switch (r) {
      case "X":
        return ve(
          be.basicOptionalMinutes,
          e
        );
      case "XX":
        return ve(be.basic, e);
      case "XXXX":
        return ve(
          be.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return ve(
          be.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return ve(be.extended, e);
    }
  }
  set(e, r, i) {
    return r.timestampIsSet ? e : J(
      e,
      e.getTime() - Mt(e) - i
    );
  }
}
class Ka extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 10);
    h(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, r) {
    switch (r) {
      case "x":
        return ve(
          be.basicOptionalMinutes,
          e
        );
      case "xx":
        return ve(be.basic, e);
      case "xxxx":
        return ve(
          be.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return ve(
          be.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return ve(be.extended, e);
    }
  }
  set(e, r, i) {
    return r.timestampIsSet ? e : J(
      e,
      e.getTime() - Mt(e) - i
    );
  }
}
class Ja extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 40);
    h(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return Zn(e);
  }
  set(e, r, i) {
    return [J(e, i * 1e3), { timestampIsSet: !0 }];
  }
}
class eo extends L {
  constructor() {
    super(...arguments);
    h(this, "priority", 20);
    h(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return Zn(e);
  }
  set(e, r, i) {
    return [J(e, i), { timestampIsSet: !0 }];
  }
}
const to = {
  G: new va(),
  y: new ya(),
  Y: new _a(),
  R: new Ca(),
  u: new xa(),
  Q: new Da(),
  q: new Ea(),
  M: new Ta(),
  L: new ka(),
  w: new Pa(),
  I: new Sa(),
  d: new Ya(),
  D: new La(),
  E: new Ha(),
  e: new Aa(),
  c: new Fa(),
  i: new Wa(),
  a: new Ra(),
  b: new Va(),
  B: new qa(),
  h: new Ba(),
  H: new Xa(),
  K: new za(),
  k: new Ga(),
  m: new Qa(),
  s: new ja(),
  S: new Za(),
  X: new Ua(),
  x: new Ka(),
  t: new Ja(),
  T: new eo()
}, no = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ro = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, io = /^'([^]*?)'?$/, ao = /''/g, oo = /\S/, so = /[a-zA-Z]/;
function lo(n, t, e, r) {
  var Q, U, O, N, j, fe, ie, he;
  const i = () => J((r == null ? void 0 : r.in) || e, NaN), a = fa(), o = (r == null ? void 0 : r.locale) ?? a.locale ?? qn, s = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((U = (Q = r == null ? void 0 : r.locale) == null ? void 0 : Q.options) == null ? void 0 : U.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((N = (O = a.locale) == null ? void 0 : O.options) == null ? void 0 : N.firstWeekContainsDate) ?? 1, l = (r == null ? void 0 : r.weekStartsOn) ?? ((fe = (j = r == null ? void 0 : r.locale) == null ? void 0 : j.options) == null ? void 0 : fe.weekStartsOn) ?? a.weekStartsOn ?? ((he = (ie = a.locale) == null ? void 0 : ie.options) == null ? void 0 : he.weekStartsOn) ?? 0;
  if (!t)
    return n ? i() : G(e, r == null ? void 0 : r.in);
  const u = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: o
  }, c = [new ba(r == null ? void 0 : r.in, e)], d = t.match(ro).map((E) => {
    const k = E[0];
    if (k in Ut) {
      const K = Ut[k];
      return K(E, o.formatLong);
    }
    return E;
  }).join("").match(no), m = [];
  for (let E of d) {
    !(r != null && r.useAdditionalWeekYearTokens) && Qn(E) && Kt(E, t, n), !(r != null && r.useAdditionalDayOfYearTokens) && Gn(E) && Kt(E, t, n);
    const k = E[0], K = to[k];
    if (K) {
      const { incompatibleTokens: y } = K;
      if (Array.isArray(y)) {
        const x = m.find(
          (I) => y.includes(I.token) || I.token === k
        );
        if (x)
          throw new RangeError(
            `The format string mustn't contain \`${x.fullToken}\` and \`${E}\` at the same time`
          );
      } else if (K.incompatibleTokens === "*" && m.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${E}\` and any other token at the same time`
        );
      m.push({ token: k, fullToken: E });
      const P = K.run(
        n,
        E,
        o.match,
        u
      );
      if (!P)
        return i();
      c.push(P.setter), n = P.rest;
    } else {
      if (k.match(so))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + k + "`"
        );
      if (E === "''" ? E = "'" : k === "'" && (E = uo(E)), n.indexOf(E) === 0)
        n = n.slice(E.length);
      else
        return i();
    }
  }
  if (n.length > 0 && oo.test(n))
    return i();
  const g = c.map((E) => E.priority).sort((E, k) => k - E).filter((E, k, K) => K.indexOf(E) === k).map(
    (E) => c.filter((k) => k.priority === E).sort((k, K) => K.subPriority - k.subPriority)
  ).map((E) => E[0]);
  let w = G(e, r == null ? void 0 : r.in);
  if (isNaN(+w))
    return i();
  const T = {};
  for (const E of g) {
    if (!E.validate(w, u))
      return i();
    const k = E.set(w, T, u);
    Array.isArray(k) ? (w = k[0], Object.assign(T, k[1])) : w = k;
  }
  return w;
}
function uo(n) {
  return n.match(io)[1].replace(ao, "'");
}
var Ue, Ke, Ve, Lt, Jn;
const mn = class mn {
  constructor(t, e, r = null, i = !1, a = !0, o = !1, s = !0, l = !1, u = null, c = null, d = null) {
    //--- Private helpers ---------------------------------------------------------------------------------------------
    // Determine whether this column is numeric (search through all the data in the column)
    Ae(this, Lt);
    Ae(this, Ue, void 0);
    Ae(this, Ke, void 0);
    Ae(this, Ve, void 0);
    this.key = t, this.label = e, this.numeric(r).visible(s).searchable(i).sortable(a).filterable(o).rowKey(l).withMutator(c).withFilter(u).withRenderer(d);
  }
  //static factory
  static create(t, e, r = null, i = !1, a = !1, o = !1, s = !0, l = !1, u = null, c = null, d = null) {
    return new mn(t, e, r, i, a, o, s, u, c, d);
  }
  //--- Getters and setters -----------------------------------------------------------------------------------------
  get hasRenderer() {
    return oe(this, Ve) !== null;
  }
  //--- Public api --------------------------------------------------------------------------------------------------
  numeric(t = !0) {
    return this.isNumeric = t, this;
  }
  notNumeric() {
    return this.isNumeric = !1, this;
  }
  visible(t = !0) {
    return this.isVisible = t, this;
  }
  notVisible() {
    return this.isVisible = !1, this;
  }
  searchable(t = !0) {
    return this.isSearchable = t, this;
  }
  notSearchable() {
    return this.isSearchable = !1, this;
  }
  sortable(t = !0) {
    return this.isSortable = t, this;
  }
  notSortable() {
    return this.isSortable = !1, this;
  }
  filterable(t = !0) {
    return this.isFilterable = t, this;
  }
  notFilterable() {
    return this.isFilterable = !1, this;
  }
  rowKey(t = !0) {
    return this.isRowKey = t, this;
  }
  withFilter(t) {
    return bt(this, Ue, typeof t == "function" ? t : null), this;
  }
  withMutator(t) {
    return bt(this, Ke, typeof t == "function" ? t : null), this;
  }
  withRenderer(t) {
    return bt(this, Ve, typeof t == "function" ? t : null), this;
  }
  //--- Processing data ---------------------------------------------------------------------------------------------
  filter(t) {
    return oe(this, Ue) ? oe(this, Ue).call(this, t) : !0;
  }
  mutate(t) {
    return oe(this, Ke) ? oe(this, Ke).call(this, t) : t;
  }
  render(t) {
    return oe(this, Ve) ? oe(this, Ve).call(this, t) : t;
  }
  /**
   * Provide a custom date format for the column and optionally a raw format, used to parse the date
   * If the date is already in ISO 8601 format, the raw format can be omitted
   */
  date(t = "dd.MM.yyyy", e = null) {
    return this.withRenderer((r) => ca(new Date(r), t)), e && this.withMutator((r) => lo(r, e, /* @__PURE__ */ new Date()).toISOString()), this;
  }
  dateTime(t = "dd.MM.yyyy HH:mm:ss", e = null) {
    return this.date(e, t);
  }
  money(t = 2, e = null, r = ",", i = " ", a = !1) {
    return this.numeric(), this.withRenderer(
      (o, s) => q.formatNumber(
        o,
        t,
        r,
        i,
        e && a ? `${s.get(e) || "-?-"} ` : "",
        e ? a ? "" : ` ${s.get(e) || "-?-"}` : ""
      )
    ), this;
  }
  //--- Lifecycle ---------------------------------------------------------------------------------------------------
  /**
   * Process the rows in the column (mutate the data if needed and determine if the column is numeric)
   * This method must be called during the initialization of the table
   */
  processRows(t) {
    let e = [];
    for (let r of t) {
      let i = q.getValue(r, this.key);
      this.mutate && (i = this.mutate(i)), !(this.filter && !this.filter(i)) && e.push(i);
    }
    return this.isNumeric = pn(this, Lt, Jn).call(this, e), e;
  }
};
Ue = new WeakMap(), Ke = new WeakMap(), Ve = new WeakMap(), Lt = new WeakSet(), Jn = function(t) {
  return this.isNumeric !== null ? this.isNumeric : t.every((e) => {
    let r = q.getValue(e, this.key);
    return r !== null && typeof r == "number";
  });
};
let Jt = mn;
class cn {
  /**
   * The key is the unique identifier of the row.
   * The data is the raw data of the row (only what can be visible in the table).
   * The rendered data is the data that is visible in the table (after being mutated and rendered).
   * The rendered data contains only data which differs from the raw data.
   */
  constructor(t, e, r) {
    /**
     * The key is the unique identifier of the row.
     */
    h(this, "key");
    /**
     * The data is the flat mutated data of the row (no nested objects)
     */
    h(this, "data");
    /**
     * The rendered data is the data that is visible in the table (after being mutated and rendered)
     * The rendered data contains only data which differs from the raw data
     */
    h(this, "renderedData");
    this.key = t, this.data = e, this.renderedData = r;
  }
  /**
   * Creates a new Row object with the given key, by processing
   * the raw row data with the given columns.
   */
  static create(t, e) {
    let r = null, i = {}, a = {};
    for (let o of e) {
      let s = o.mutate(q.getValue(t, o.key));
      if (!o.filter(s))
        return null;
      o.isNumeric !== !1 && (o.isNumeric = q.isNumericValue(s)), i[o.key] = s, o.isRowKey && (r = r ? `${r}-${s}` : s);
    }
    for (let o of e)
      o.hasRenderer && (a[o.key] = o.render(i[o.key], i));
    return r || (r = t.id || t.uuid || t.uid || q.uid()), new cn(r, i, a);
  }
  //--- Public api --------------------------------------------------------------------------------------------------
  get(t) {
    return this.data[t];
  }
  set(t, e) {
    this.data[t] = e;
  }
  rendered(t) {
    return this.renderedData[t] || this.data[t];
  }
}
var Je, et;
const gn = class gn {
  //number of rows to load when more data is requested
  constructor(t, e = 75, r = 30) {
    Ae(this, Je, R([]));
    //entire data set (array of Row objects)
    Ae(this, et, R([]));
    //subset of rows that is currently visible in the table
    h(this, "initialRowCount");
    //number of rows to load initially
    h(this, "loadCount");
    this.rows = t, this.initialRowCount = e, this.loadCount = r;
  }
  static create(t, e, r = 75, i = 30) {
    let a = [];
    return e.forEach((o) => {
      let s = cn.create(o, t);
      s && a.push(s);
    }), new gn(a, r, i);
  }
  //--- Getters and setters -----------------------------------------------------------------------------------------
  get rows() {
    return oe(this, Je).value;
  }
  set rows(t) {
    oe(this, Je).value = t, this.resetLoadedRows();
  }
  get loadedRows() {
    return oe(this, et).value;
  }
  set loadedRows(t) {
    oe(this, et).value = t;
  }
  get rowsCount() {
    return oe(this, Je).value.length;
  }
  get loadedRowsCount() {
    return oe(this, et).value.length;
  }
  //--- Public api --------------------------------------------------------------------------------------------------
  loadRows(t) {
    let e = t || this.loadCount, r = this.loadedRowsCount;
    if (r >= this.rowsCount)
      return;
    let i = this.rows.slice(r, r + e);
    this.loadedRows = [...this.loadedRows, ...i];
  }
  resetLoadedRows() {
    this.loadedRows = [], this.loadRows(this.initialRowCount);
  }
};
Je = new WeakMap(), et = new WeakMap();
let en = gn;
const co = { class: "table-header" }, fo = { class: "table-header-row" }, ho = ["onClick"], mo = ["textContent"], go = { key: 0 }, wo = { class: "delimiter" }, po = {
  key: 1,
  class: "table-total"
}, bo = {
  key: 2,
  class: "column-search-container"
}, vo = ["onInput", "placeholder"], yo = { class: "table-body" }, _o = ["onClick"], ll = {
  __name: "Table",
  props: {
    // An array of rows with the raw data
    rows: {
      type: en,
      required: !0
    },
    //an array of column header objects with properties: key, label, searchable
    header: {
      type: Array,
      required: !0,
      validator: (n) => n.every((t) => t instanceof Jt)
    }
  },
  emits: ["row-click"],
  setup(n, { emit: t }) {
    const e = t, r = n;
    let i = R(null), a = R(null);
    R(null);
    let o = R(null), s = R(!1);
    const l = Er([
      { id: "small", class: "cell-small", selected: !0 },
      { id: "medium", class: "cell-medium", selected: !1 },
      { id: "large", class: "cell-large", selected: !1 }
    ]);
    let u = R("black"), c = R(!1), d = R({}), m = $n(), g = li();
    Tr(d, () => {
      Object.values(d.value).every((y) => !y) && g.refreshLoadedData();
    }, { deep: !0 });
    const w = Ge(() => a.value.filter((y) => y.visible)), T = Ge(() => Object.keys(d.value).length === 0 ? g.getLoadedData() : g.getAllData().filter((y) => Object.keys(d.value).every((P) => {
      let x = q.cleanTerm(d.value[P]);
      return q.cleanTerm(q.getValue(y, P) ?? "").toLowerCase().includes(x.toLowerCase());
    })).slice(0, 120)), Q = Ge(() => (y, P) => {
      let x = [], I = l.find((He) => He.selected) ?? l[0];
      return x.push(I.class), y ? (x.push("numeric-column"), x.push(
        u.value === "color" ? Math.sign(P) < 0 ? "text-red" : "text-green" : "text-gray"
      ), x.join(" ")) : (x.push("text-gray"), x.join(" "));
    }), U = Ge(() => w.value.some((y) => y.isNumeric));
    function O(y) {
      s.value = o.value === y ? !s.value : !0, o.value = y;
      let P = g.getAllData().sort(
        (x, I) => N(x[o.value], I[o.value], s.value)
      );
      g.setData(P);
    }
    function N(y, P, x) {
      return y == null && (y = ""), P == null && (P = ""), x || ([y, P] = [P, y]), q.isNumericValue(y) && q.isNumericValue(P) ? P - y : q.isDate(y) && q.isDate(P) ? q.parseDate(y).getTime() > q.parseDate(P).getTime() ? 1 : -1 : y.localeCompare(P);
    }
    function j(y) {
      l.forEach((P) => P.selected = P.id === y.newRowSize), u.value = y.newDigitsColor;
    }
    function fe(y) {
      a.value = y;
    }
    function ie() {
      c.value = !c.value, c.value || (d.value = {});
    }
    function he(y) {
      if (!y.isNumeric)
        return "";
      let P = r.rows.map((x) => x[y.key]);
      return q.formatNumber(P.reduce((x, I) => x + I, 0), 2);
    }
    function E(y, P) {
      d.value[P] = y;
    }
    function k(y) {
      e("row-click", y);
    }
    function K() {
      i.value.style.maxHeight = "75vh";
    }
    return m.addEventHandler("update-table-style-event", j), m.addEventHandler("update-table-columns-event", fe), m.addEventHandler("toggle-search-event", ie), setHeader(), g.setData(r.rows), kr(() => K()), (y, P) => (p(), v("div", {
      ref_key: "tableContainer",
      ref: i,
      class: "table-container"
    }, [
      b("table", null, [
        b("thead", co, [
          b("tr", fo, [
            (p(!0), v(Pe, null, Oe(w.value, (x) => (p(), v("th", {
              onClick: (I) => O(x.key)
            }, [
              b("div", {
                class: je(["header-row-item", x.isNumeric ? "numeric" : ""])
              }, [
                b("span", {
                  textContent: re(x.label)
                }, null, 8, mo),
                we(ce, {
                  icon: "sort",
                  class: je(["header-row-item-icon", `${M(o) === x.key ? "selected" : ""}`])
                }, null, 8, ["class"])
              ], 2)
            ], 8, ho))), 256))
          ]),
          U.value ? (p(), v("tr", go, [
            (p(!0), v(Pe, null, Oe(w.value, (x) => (p(), v("th", wo))), 256))
          ])) : ye("", !0),
          U.value ? (p(), v("tr", po, [
            (p(!0), v(Pe, null, Oe(w.value, (x, I) => (p(), v("th", null, re(I === 0 ? "Total" : he(x)), 1))), 256))
          ])) : ye("", !0),
          M(c) ? (p(), v("tr", bo, [
            (p(!0), v(Pe, null, Oe(w.value, (x) => (p(), v("th", null, [
              x.searchable ? (p(), v("input", {
                key: 0,
                onInput: (I) => E(I.target.value, x.key),
                class: "column-search",
                placeholder: M(te).getTranslate("search")
              }, null, 40, vo)) : ye("", !0)
            ]))), 256))
          ])) : ye("", !0)
        ]),
        b("tbody", yo, [
          (p(!0), v(Pe, null, Oe(T.value, (x) => (p(), v("tr", {
            onClick: (I) => k(x)
          }, [
            (p(!0), v(Pe, null, Oe(w.value, (I) => (p(), v("td", {
              class: je(Q.value(I.isNumeric, x[I.key]))
            }, [
              An(y.$slots, `cell.${I.key}`, {
                value: M(q).getValue(x, I.key),
                column: I,
                row: x,
                helpers: M(q)
              }, () => [
                Mr(re(I.isNumeric ? M(q).formatNumericValue(M(q).getValue(x, I.key)) : M(q).getValue(x, I.key)), 1)
              ])
            ], 2))), 256))
          ], 8, _o))), 256))
        ])
      ])
    ], 512));
  }
}, er = {
  __name: "Modal",
  emits: ["close"],
  setup(n, { emit: t }) {
    const e = t;
    return document.body.style.overflow = "hidden", Pr(() => document.body.style.overflow = "auto"), (r, i) => (p(), v("div", {
      onClick: i[0] || (i[0] = Or((a) => e("close"), ["self"])),
      class: "modal"
    }, [
      An(r.$slots, "default")
    ]));
  }
}, Co = { class: "settings-modal" }, xo = ["textContent"], Do = ["textContent"], Eo = { class: "style-settings-options" }, To = { class: "style-settings-option" }, ko = ["textContent"], Mo = {
  key: 0,
  class: "option-items"
}, Po = ["onClick"], Oo = { class: "item-value" }, So = ["textContent"], Io = { class: "style-settings-option" }, No = ["textContent"], Yo = {
  key: 0,
  class: "option-items"
}, Lo = ["onClick"], Ho = { class: "item-value" }, Ao = ["textContent"], Fo = { class: "actions-container" }, $o = ["textContent"], Wo = ["textContent"], Ro = {
  __name: "StyleSettingsModal",
  props: {
    rowSizeValue: {
      type: String,
      default: "small"
    },
    digitsColorValue: {
      type: String,
      default: "black"
    }
  },
  emits: ["save", "close"],
  setup(n, { emit: t }) {
    const e = t, r = n;
    let i = R(r.rowSizeValue), a = R(r.digitsColorValue);
    const o = {
      small: {
        icon: "small-row",
        label: te.getTranslate("style_settings_modal.sections.row_size.options.small")
      },
      medium: {
        icon: "medium-row",
        label: te.getTranslate("style_settings_modal.sections.row_size.options.medium")
      },
      large: {
        icon: "large-row",
        label: te.getTranslate("style_settings_modal.sections.row_size.options.large")
      }
    }, s = {
      black: te.getTranslate("style_settings_modal.sections.numbers_color.options.black"),
      color: te.getTranslate("style_settings_modal.sections.numbers_color.options.color")
    };
    let l = R(!1), u = R(!1);
    function c() {
      e("save", i.value, a.value);
    }
    return (d, m) => (p(), Ie(er, null, {
      default: Zt(() => [
        b("div", Co, [
          b("div", {
            class: "settings-modal-title",
            textContent: re(M(te).getTranslate("style_settings_modal.title"))
          }, null, 8, xo),
          b("div", {
            class: "settings-modal-description",
            textContent: re(M(te).getTranslate("style_settings_modal.description"))
          }, null, 8, Do),
          b("div", Eo, [
            b("div", To, [
              b("div", {
                class: "option-container",
                onClick: m[0] || (m[0] = (g) => xe(l) ? l.value = !M(l) : l = !M(l))
              }, [
                b("div", {
                  class: "option-title",
                  textContent: re(M(te).getTranslate("style_settings_modal.sections.row_size.title"))
                }, null, 8, ko),
                M(l) ? (p(), Ie(ce, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (p(), Ie(ce, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              M(l) ? (p(), v("div", Mo, [
                (p(), v(Pe, null, Oe(o, (g, w) => b("div", {
                  class: "option-item-container",
                  onClick: (T) => xe(i) ? i.value = w : i = w
                }, [
                  we(ce, {
                    icon: `radio-circle${M(i) === w ? "-selected" : ""}`,
                    class: je(`icon-size ${M(i) === w ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  b("div", Oo, [
                    we(ce, {
                      icon: g.icon,
                      class: "icon-size"
                    }, null, 8, ["icon"]),
                    b("span", {
                      class: "option-item-title",
                      textContent: re(g.label)
                    }, null, 8, So)
                  ])
                ], 8, Po)), 64))
              ])) : ye("", !0)
            ]),
            m[3] || (m[3] = b("div", { class: "divider" }, null, -1)),
            b("div", Io, [
              b("div", {
                class: "option-container",
                onClick: m[1] || (m[1] = (g) => xe(u) ? u.value = !M(u) : u = !M(u))
              }, [
                b("div", {
                  class: "option-title",
                  textContent: re(M(te).getTranslate("style_settings_modal.sections.numbers_color.title"))
                }, null, 8, No),
                M(u) ? (p(), Ie(ce, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (p(), Ie(ce, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              M(u) ? (p(), v("div", Yo, [
                (p(), v(Pe, null, Oe(s, (g, w) => b("div", {
                  class: "option-item-container",
                  onClick: (T) => xe(a) ? a.value = w : a = w
                }, [
                  we(ce, {
                    icon: `radio-circle${M(a) === w ? "-selected" : ""}`,
                    class: je(`icon-size ${M(a) === w ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  b("div", Ho, [
                    b("span", {
                      class: "option-item-title",
                      textContent: re(g)
                    }, null, 8, Ao)
                  ])
                ], 8, Lo)), 64))
              ])) : ye("", !0)
            ])
          ]),
          b("div", Fo, [
            b("div", {
              class: "button button-cancel",
              onClick: m[2] || (m[2] = (g) => e("close")),
              textContent: re(M(te).getTranslate("style_settings_modal.actions.cancel"))
            }, null, 8, $o),
            b("div", {
              class: "button button-confirm",
              onClick: c,
              textContent: re(M(te).getTranslate("style_settings_modal.actions.save"))
            }, null, 8, Wo)
          ])
        ])
      ]),
      _: 1
    }));
  }
}, Vo = ["for"], qo = {
  key: 0,
  class: "checkbox-input"
}, Bo = {
  key: 1,
  class: "checkbox-selected"
}, Xo = ["textContent"], zo = ["id", "name", "value"], Go = {
  __name: "Checkbox",
  props: {
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    modelValue: {
      type: [Array, Boolean],
      default: !1
    },
    value: {
      type: [String],
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = t, r = n, i = Ge({
      get: () => r.modelValue,
      set: (o) => e("update:modelValue", o)
    }), a = Ge(() => r.name && r.name.length ? r.name : r.label);
    return (o, s) => (p(), v("label", {
      for: n.name,
      class: "checkbox-container"
    }, [
      i.value ? (p(), v("div", Bo, [
        we(ce, {
          icon: "check",
          class: "checkbox-selected-icon"
        })
      ])) : (p(), v("div", qo)),
      n.label ? (p(), v("span", {
        key: 2,
        class: "label",
        textContent: re(n.label)
      }, null, 8, Xo)) : ye("", !0),
      Sr(b("input", {
        hidden: "",
        id: a.value,
        name: n.name,
        type: "checkbox",
        "onUpdate:modelValue": s[0] || (s[0] = (l) => i.value = l),
        value: n.value
      }, null, 8, zo), [
        [Ir, i.value]
      ])
    ], 8, Vo));
  }
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function En(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Ce(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? En(Object(e), !0).forEach(function(r) {
      Qo(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : En(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
function xt(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xt = function(t) {
    return typeof t;
  } : xt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xt(n);
}
function Qo(n, t, e) {
  return t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function Ee() {
  return Ee = Object.assign || function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ee.apply(this, arguments);
}
function jo(n, t) {
  if (n == null)
    return {};
  var e = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (e[i] = n[i]);
  return e;
}
function Zo(n, t) {
  if (n == null)
    return {};
  var e = jo(n, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (e[r] = n[r]);
  }
  return e;
}
var Uo = "1.14.0";
function De(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var Te = De(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), gt = De(/Edge/i), Tn = De(/firefox/i), ct = De(/safari/i) && !De(/chrome/i) && !De(/android/i), tr = De(/iP(ad|od|hone)/i), Ko = De(/chrome/i) && De(/android/i), nr = {
  capture: !1,
  passive: !1
};
function Y(n, t, e) {
  n.addEventListener(t, e, !Te && nr);
}
function S(n, t, e) {
  n.removeEventListener(t, e, !Te && nr);
}
function Ot(n, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(t);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(t);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Jo(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function pe(n, t, e, r) {
  if (n) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? n.parentNode === e && Ot(n, t) : Ot(n, t)) || r && n === e)
        return n;
      if (n === e)
        break;
    } while (n = Jo(n));
  }
  return null;
}
var kn = /\s+/g;
function le(n, t, e) {
  if (n && t)
    if (n.classList)
      n.classList[e ? "add" : "remove"](t);
    else {
      var r = (" " + n.className + " ").replace(kn, " ").replace(" " + t + " ", " ");
      n.className = (r + (e ? " " + t : "")).replace(kn, " ");
    }
}
function _(n, t, e) {
  var r = n && n.style;
  if (r) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (e = n.currentStyle), t === void 0 ? e : e[t];
    !(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function Ze(n, t) {
  var e = "";
  if (typeof n == "string")
    e = n;
  else
    do {
      var r = _(n, "transform");
      r && r !== "none" && (e = r + " " + e);
    } while (!t && (n = n.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(e);
}
function rr(n, t, e) {
  if (n) {
    var r = n.getElementsByTagName(t), i = 0, a = r.length;
    if (e)
      for (; i < a; i++)
        e(r[i], i);
    return r;
  }
  return [];
}
function _e() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function Z(n, t, e, r, i) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var a, o, s, l, u, c, d;
    if (n !== window && n.parentNode && n !== _e() ? (a = n.getBoundingClientRect(), o = a.top, s = a.left, l = a.bottom, u = a.right, c = a.height, d = a.width) : (o = 0, s = 0, l = window.innerHeight, u = window.innerWidth, c = window.innerHeight, d = window.innerWidth), (t || e) && n !== window && (i = i || n.parentNode, !Te))
      do
        if (i && i.getBoundingClientRect && (_(i, "transform") !== "none" || e && _(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          o -= m.top + parseInt(_(i, "border-top-width")), s -= m.left + parseInt(_(i, "border-left-width")), l = o + a.height, u = s + a.width;
          break;
        }
      while (i = i.parentNode);
    if (r && n !== window) {
      var g = Ze(i || n), w = g && g.a, T = g && g.d;
      g && (o /= T, s /= w, d /= w, c /= T, l = o + c, u = s + d);
    }
    return {
      top: o,
      left: s,
      bottom: l,
      right: u,
      width: d,
      height: c
    };
  }
}
function Mn(n, t, e) {
  for (var r = Ye(n, !0), i = Z(n)[t]; r; ) {
    var a = Z(r)[e], o = void 0;
    if (e === "top" || e === "left" ? o = i >= a : o = i <= a, !o)
      return r;
    if (r === _e())
      break;
    r = Ye(r, !1);
  }
  return !1;
}
function nt(n, t, e, r) {
  for (var i = 0, a = 0, o = n.children; a < o.length; ) {
    if (o[a].style.display !== "none" && o[a] !== C.ghost && (r || o[a] !== C.dragged) && pe(o[a], e.draggable, n, !1)) {
      if (i === t)
        return o[a];
      i++;
    }
    a++;
  }
  return null;
}
function dn(n, t) {
  for (var e = n.lastElementChild; e && (e === C.ghost || _(e, "display") === "none" || t && !Ot(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function me(n, t) {
  var e = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== C.clone && (!t || Ot(n, t)) && e++;
  return e;
}
function Pn(n) {
  var t = 0, e = 0, r = _e();
  if (n)
    do {
      var i = Ze(n), a = i.a, o = i.d;
      t += n.scrollLeft * a, e += n.scrollTop * o;
    } while (n !== r && (n = n.parentNode));
  return [t, e];
}
function es(n, t) {
  for (var e in n)
    if (n.hasOwnProperty(e)) {
      for (var r in t)
        if (t.hasOwnProperty(r) && t[r] === n[e][r])
          return Number(e);
    }
  return -1;
}
function Ye(n, t) {
  if (!n || !n.getBoundingClientRect)
    return _e();
  var e = n, r = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var i = _(e);
      if (e.clientWidth < e.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return _e();
        if (r || t)
          return e;
        r = !0;
      }
    }
  while (e = e.parentNode);
  return _e();
}
function ts(n, t) {
  if (n && t)
    for (var e in t)
      t.hasOwnProperty(e) && (n[e] = t[e]);
  return n;
}
function $t(n, t) {
  return Math.round(n.top) === Math.round(t.top) && Math.round(n.left) === Math.round(t.left) && Math.round(n.height) === Math.round(t.height) && Math.round(n.width) === Math.round(t.width);
}
var dt;
function ir(n, t) {
  return function() {
    if (!dt) {
      var e = arguments, r = this;
      e.length === 1 ? n.call(r, e[0]) : n.apply(r, e), dt = setTimeout(function() {
        dt = void 0;
      }, t);
    }
  };
}
function ns() {
  clearTimeout(dt), dt = void 0;
}
function ar(n, t, e) {
  n.scrollLeft += t, n.scrollTop += e;
}
function or(n) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(n).cloneNode(!0) : e ? e(n).clone(!0)[0] : n.cloneNode(!0);
}
var de = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function rs() {
  var n = [], t;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(i) {
          if (!(_(i, "display") === "none" || i === C.ghost)) {
            n.push({
              target: i,
              rect: Z(i)
            });
            var a = Ce({}, n[n.length - 1].rect);
            if (i.thisAnimationDuration) {
              var o = Ze(i, !0);
              o && (a.top -= o.f, a.left -= o.e);
            }
            i.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function(r) {
      n.push(r);
    },
    removeAnimationState: function(r) {
      n.splice(es(n, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof r == "function" && r();
        return;
      }
      var a = !1, o = 0;
      n.forEach(function(s) {
        var l = 0, u = s.target, c = u.fromRect, d = Z(u), m = u.prevFromRect, g = u.prevToRect, w = s.rect, T = Ze(u, !0);
        T && (d.top -= T.f, d.left -= T.e), u.toRect = d, u.thisAnimationDuration && $t(m, d) && !$t(c, d) && // Make sure animatingRect is on line between toRect & fromRect
        (w.top - d.top) / (w.left - d.left) === (c.top - d.top) / (c.left - d.left) && (l = as(w, m, g, i.options)), $t(d, c) || (u.prevFromRect = c, u.prevToRect = d, l || (l = i.options.animation), i.animate(u, w, d, l)), l && (a = !0, o = Math.max(o, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(t), a ? t = setTimeout(function() {
        typeof r == "function" && r();
      }, o) : typeof r == "function" && r(), n = [];
    },
    animate: function(r, i, a, o) {
      if (o) {
        _(r, "transition", ""), _(r, "transform", "");
        var s = Ze(this.el), l = s && s.a, u = s && s.d, c = (i.left - a.left) / (l || 1), d = (i.top - a.top) / (u || 1);
        r.animatingX = !!c, r.animatingY = !!d, _(r, "transform", "translate3d(" + c + "px," + d + "px,0)"), this.forRepaintDummy = is(r), _(r, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), _(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          _(r, "transition", ""), _(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, o);
      }
    }
  };
}
function is(n) {
  return n.offsetWidth;
}
function as(n, t, e, r) {
  return Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * r.animation;
}
var Be = [], Wt = {
  initializeByDefault: !0
}, wt = {
  mount: function(t) {
    for (var e in Wt)
      Wt.hasOwnProperty(e) && !(e in t) && (t[e] = Wt[e]);
    Be.forEach(function(r) {
      if (r.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Be.push(t);
  },
  pluginEvent: function(t, e, r) {
    var i = this;
    this.eventCanceled = !1, r.cancel = function() {
      i.eventCanceled = !0;
    };
    var a = t + "Global";
    Be.forEach(function(o) {
      e[o.pluginName] && (e[o.pluginName][a] && e[o.pluginName][a](Ce({
        sortable: e
      }, r)), e.options[o.pluginName] && e[o.pluginName][t] && e[o.pluginName][t](Ce({
        sortable: e
      }, r)));
    });
  },
  initializePlugins: function(t, e, r, i) {
    Be.forEach(function(s) {
      var l = s.pluginName;
      if (!(!t.options[l] && !s.initializeByDefault)) {
        var u = new s(t, e, t.options);
        u.sortable = t, u.options = t.options, t[l] = u, Ee(r, u.defaults);
      }
    });
    for (var a in t.options)
      if (t.options.hasOwnProperty(a)) {
        var o = this.modifyOption(t, a, t.options[a]);
        typeof o < "u" && (t.options[a] = o);
      }
  },
  getEventProperties: function(t, e) {
    var r = {};
    return Be.forEach(function(i) {
      typeof i.eventProperties == "function" && Ee(r, i.eventProperties.call(e[i.pluginName], t));
    }), r;
  },
  modifyOption: function(t, e, r) {
    var i;
    return Be.forEach(function(a) {
      t[a.pluginName] && a.optionListeners && typeof a.optionListeners[e] == "function" && (i = a.optionListeners[e].call(t[a.pluginName], r));
    }), i;
  }
};
function os(n) {
  var t = n.sortable, e = n.rootEl, r = n.name, i = n.targetEl, a = n.cloneEl, o = n.toEl, s = n.fromEl, l = n.oldIndex, u = n.newIndex, c = n.oldDraggableIndex, d = n.newDraggableIndex, m = n.originalEvent, g = n.putSortable, w = n.extraEventProperties;
  if (t = t || e && e[de], !!t) {
    var T, Q = t.options, U = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !Te && !gt ? T = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (T = document.createEvent("Event"), T.initEvent(r, !0, !0)), T.to = o || e, T.from = s || e, T.item = i || e, T.clone = a, T.oldIndex = l, T.newIndex = u, T.oldDraggableIndex = c, T.newDraggableIndex = d, T.originalEvent = m, T.pullMode = g ? g.lastPutMode : void 0;
    var O = Ce(Ce({}, w), wt.getEventProperties(r, t));
    for (var N in O)
      T[N] = O[N];
    e && e.dispatchEvent(T), Q[U] && Q[U].call(t, T);
  }
}
var ss = ["evt"], se = function(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, a = Zo(r, ss);
  wt.pluginEvent.bind(C)(t, e, Ce({
    dragEl: f,
    parentEl: $,
    ghostEl: D,
    rootEl: A,
    nextEl: Re,
    lastDownEl: Dt,
    cloneEl: W,
    cloneHidden: Ne,
    dragStarted: st,
    putSortable: ee,
    activeSortable: C.active,
    originalEvent: i,
    oldIndex: Qe,
    oldDraggableIndex: ft,
    newIndex: ue,
    newDraggableIndex: Se,
    hideGhostForTarget: cr,
    unhideGhostForTarget: dr,
    cloneNowHidden: function() {
      Ne = !0;
    },
    cloneNowShown: function() {
      Ne = !1;
    },
    dispatchSortableEvent: function(s) {
      ae({
        sortable: e,
        name: s,
        originalEvent: i
      });
    }
  }, a));
};
function ae(n) {
  os(Ce({
    putSortable: ee,
    cloneEl: W,
    targetEl: f,
    rootEl: A,
    oldIndex: Qe,
    oldDraggableIndex: ft,
    newIndex: ue,
    newDraggableIndex: Se
  }, n));
}
var f, $, D, A, Re, Dt, W, Ne, Qe, ue, ft, Se, vt, ee, ze = !1, St = !1, It = [], Fe, ge, Rt, Vt, On, Sn, st, Xe, ht, mt = !1, yt = !1, Et, ne, qt = [], tn = !1, Nt = [], Ht = typeof document < "u", _t = tr, In = gt || Te ? "cssFloat" : "float", ls = Ht && !Ko && !tr && "draggable" in document.createElement("div"), sr = function() {
  if (Ht) {
    if (Te)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
}(), lr = function(t, e) {
  var r = _(t), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), a = nt(t, 0, e), o = nt(t, 1, e), s = a && _(a), l = o && _(o), u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Z(a).width, c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + Z(o).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && s.float && s.float !== "none") {
    var d = s.float === "left" ? "left" : "right";
    return o && (l.clear === "both" || l.clear === d) ? "vertical" : "horizontal";
  }
  return a && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || u >= i && r[In] === "none" || o && r[In] === "none" && u + c > i) ? "vertical" : "horizontal";
}, us = function(t, e, r) {
  var i = r ? t.left : t.top, a = r ? t.right : t.bottom, o = r ? t.width : t.height, s = r ? e.left : e.top, l = r ? e.right : e.bottom, u = r ? e.width : e.height;
  return i === s || a === l || i + o / 2 === s + u / 2;
}, cs = function(t, e) {
  var r;
  return It.some(function(i) {
    var a = i[de].options.emptyInsertThreshold;
    if (!(!a || dn(i))) {
      var o = Z(i), s = t >= o.left - a && t <= o.right + a, l = e >= o.top - a && e <= o.bottom + a;
      if (s && l)
        return r = i;
    }
  }), r;
}, ur = function(t) {
  function e(a, o) {
    return function(s, l, u, c) {
      var d = s.options.group.name && l.options.group.name && s.options.group.name === l.options.group.name;
      if (a == null && (o || d))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (o && a === "clone")
        return a;
      if (typeof a == "function")
        return e(a(s, l, u, c), o)(s, l, u, c);
      var m = (o ? s : l).options.group.name;
      return a === !0 || typeof a == "string" && a === m || a.join && a.indexOf(m) > -1;
    };
  }
  var r = {}, i = t.group;
  (!i || xt(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = e(i.pull, !0), r.checkPut = e(i.put), r.revertClone = i.revertClone, t.group = r;
}, cr = function() {
  !sr && D && _(D, "display", "none");
}, dr = function() {
  !sr && D && _(D, "display", "");
};
Ht && document.addEventListener("click", function(n) {
  if (St)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), St = !1, !1;
}, !0);
var $e = function(t) {
  if (f) {
    t = t.touches ? t.touches[0] : t;
    var e = cs(t.clientX, t.clientY);
    if (e) {
      var r = {};
      for (var i in t)
        t.hasOwnProperty(i) && (r[i] = t[i]);
      r.target = r.rootEl = e, r.preventDefault = void 0, r.stopPropagation = void 0, e[de]._onDragOver(r);
    }
  }
}, ds = function(t) {
  f && f.parentNode[de]._isOutsideThisEl(t.target);
};
function C(n, t) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = t = Ee({}, t), n[de] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return lr(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(o, s) {
      o.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: C.supportPointer !== !1 && "PointerEvent" in window && !ct,
    emptyInsertThreshold: 5
  };
  wt.initializePlugins(this, n, e);
  for (var r in e)
    !(r in t) && (t[r] = e[r]);
  ur(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : ls, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Y(n, "pointerdown", this._onTapStart) : (Y(n, "mousedown", this._onTapStart), Y(n, "touchstart", this._onTapStart)), this.nativeDraggable && (Y(n, "dragover", this), Y(n, "dragenter", this)), It.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Ee(this, rs());
}
C.prototype = /** @lends Sortable.prototype */
{
  constructor: C,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Xe = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, f) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, r = this.el, i = this.options, a = i.preventOnFilter, o = t.type, s = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (s || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, c = i.filter;
      if (vs(r), !f && !(/mousedown|pointerdown/.test(o) && t.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && ct && l && l.tagName.toUpperCase() === "SELECT") && (l = pe(l, i.draggable, r, !1), !(l && l.animated) && Dt !== l)) {
        if (Qe = me(l), ft = me(l, i.draggable), typeof c == "function") {
          if (c.call(this, t, l, this)) {
            ae({
              sortable: e,
              rootEl: u,
              name: "filter",
              targetEl: l,
              toEl: r,
              fromEl: r
            }), se("filter", e, {
              evt: t
            }), a && t.cancelable && t.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(d) {
          if (d = pe(u, d.trim(), r, !1), d)
            return ae({
              sortable: e,
              rootEl: d,
              name: "filter",
              targetEl: l,
              fromEl: r,
              toEl: r
            }), se("filter", e, {
              evt: t
            }), !0;
        }), c)) {
          a && t.cancelable && t.preventDefault();
          return;
        }
        i.handle && !pe(u, i.handle, r, !1) || this._prepareDragStart(t, s, l);
      }
    }
  },
  _prepareDragStart: function(t, e, r) {
    var i = this, a = i.el, o = i.options, s = a.ownerDocument, l;
    if (r && !f && r.parentNode === a) {
      var u = Z(r);
      if (A = a, f = r, $ = f.parentNode, Re = f.nextSibling, Dt = r, vt = o.group, C.dragged = f, Fe = {
        target: f,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, On = Fe.clientX - u.left, Sn = Fe.clientY - u.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, f.style["will-change"] = "all", l = function() {
        if (se("delayEnded", i, {
          evt: t
        }), C.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Tn && i.nativeDraggable && (f.draggable = !0), i._triggerDragStart(t, e), ae({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), le(f, o.chosenClass, !0);
      }, o.ignore.split(",").forEach(function(c) {
        rr(f, c.trim(), Bt);
      }), Y(s, "dragover", $e), Y(s, "mousemove", $e), Y(s, "touchmove", $e), Y(s, "mouseup", i._onDrop), Y(s, "touchend", i._onDrop), Y(s, "touchcancel", i._onDrop), Tn && this.nativeDraggable && (this.options.touchStartThreshold = 4, f.draggable = !0), se("delayStart", this, {
        evt: t
      }), o.delay && (!o.delayOnTouchOnly || e) && (!this.nativeDraggable || !(gt || Te))) {
        if (C.eventCanceled) {
          this._onDrop();
          return;
        }
        Y(s, "mouseup", i._disableDelayedDrag), Y(s, "touchend", i._disableDelayedDrag), Y(s, "touchcancel", i._disableDelayedDrag), Y(s, "mousemove", i._delayedDragTouchMoveHandler), Y(s, "touchmove", i._delayedDragTouchMoveHandler), o.supportPointer && Y(s, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(l, o.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    f && Bt(f), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    S(t, "mouseup", this._disableDelayedDrag), S(t, "touchend", this._disableDelayedDrag), S(t, "touchcancel", this._disableDelayedDrag), S(t, "mousemove", this._delayedDragTouchMoveHandler), S(t, "touchmove", this._delayedDragTouchMoveHandler), S(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? Y(document, "pointermove", this._onTouchMove) : e ? Y(document, "touchmove", this._onTouchMove) : Y(document, "mousemove", this._onTouchMove) : (Y(f, "dragend", this), Y(A, "dragstart", this._onDragStart));
    try {
      document.selection ? Tt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (ze = !1, A && f) {
      se("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && Y(document, "dragover", ds);
      var r = this.options;
      !t && le(f, r.dragClass, !1), le(f, r.ghostClass, !0), C.active = this, t && this._appendGhost(), ae({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ge) {
      this._lastX = ge.clientX, this._lastY = ge.clientY, cr();
      for (var t = document.elementFromPoint(ge.clientX, ge.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(ge.clientX, ge.clientY), t !== e); )
        e = t;
      if (f.parentNode[de]._isOutsideThisEl(t), e)
        do {
          if (e[de]) {
            var r = void 0;
            if (r = e[de]._onDragOver({
              clientX: ge.clientX,
              clientY: ge.clientY,
              target: t,
              rootEl: e
            }), r && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = e.parentNode);
      dr();
    }
  },
  _onTouchMove: function(t) {
    if (Fe) {
      var e = this.options, r = e.fallbackTolerance, i = e.fallbackOffset, a = t.touches ? t.touches[0] : t, o = D && Ze(D, !0), s = D && o && o.a, l = D && o && o.d, u = _t && ne && Pn(ne), c = (a.clientX - Fe.clientX + i.x) / (s || 1) + (u ? u[0] - qt[0] : 0) / (s || 1), d = (a.clientY - Fe.clientY + i.y) / (l || 1) + (u ? u[1] - qt[1] : 0) / (l || 1);
      if (!C.active && !ze) {
        if (r && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < r)
          return;
        this._onDragStart(t, !0);
      }
      if (D) {
        o ? (o.e += c - (Rt || 0), o.f += d - (Vt || 0)) : o = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: d
        };
        var m = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
        _(D, "webkitTransform", m), _(D, "mozTransform", m), _(D, "msTransform", m), _(D, "transform", m), Rt = c, Vt = d, ge = a;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!D) {
      var t = this.options.fallbackOnBody ? document.body : A, e = Z(f, !0, _t, !0, t), r = this.options;
      if (_t) {
        for (ne = t; _(ne, "position") === "static" && _(ne, "transform") === "none" && ne !== document; )
          ne = ne.parentNode;
        ne !== document.body && ne !== document.documentElement ? (ne === document && (ne = _e()), e.top += ne.scrollTop, e.left += ne.scrollLeft) : ne = _e(), qt = Pn(ne);
      }
      D = f.cloneNode(!0), le(D, r.ghostClass, !1), le(D, r.fallbackClass, !0), le(D, r.dragClass, !0), _(D, "transition", ""), _(D, "transform", ""), _(D, "box-sizing", "border-box"), _(D, "margin", 0), _(D, "top", e.top), _(D, "left", e.left), _(D, "width", e.width), _(D, "height", e.height), _(D, "opacity", "0.8"), _(D, "position", _t ? "absolute" : "fixed"), _(D, "zIndex", "100000"), _(D, "pointerEvents", "none"), C.ghost = D, t.appendChild(D), _(D, "transform-origin", On / parseInt(D.style.width) * 100 + "% " + Sn / parseInt(D.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var r = this, i = t.dataTransfer, a = r.options;
    if (se("dragStart", this, {
      evt: t
    }), C.eventCanceled) {
      this._onDrop();
      return;
    }
    se("setupClone", this), C.eventCanceled || (W = or(f), W.draggable = !1, W.style["will-change"] = "", this._hideClone(), le(W, this.options.chosenClass, !1), C.clone = W), r.cloneId = Tt(function() {
      se("clone", r), !C.eventCanceled && (r.options.removeCloneOnHide || A.insertBefore(W, f), r._hideClone(), ae({
        sortable: r,
        name: "clone"
      }));
    }), !e && le(f, a.dragClass, !0), e ? (St = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (S(document, "mouseup", r._onDrop), S(document, "touchend", r._onDrop), S(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", a.setData && a.setData.call(r, i, f)), Y(document, "drop", r), _(f, "transform", "translateZ(0)")), ze = !0, r._dragStartId = Tt(r._dragStarted.bind(r, e, t)), Y(document, "selectstart", r), st = !0, ct && _(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, r = t.target, i, a, o, s = this.options, l = s.group, u = C.active, c = vt === l, d = s.sort, m = ee || u, g, w = this, T = !1;
    if (tn)
      return;
    function Q(it, _r) {
      se(it, w, Ce({
        evt: t,
        isOwner: c,
        axis: g ? "vertical" : "horizontal",
        revert: o,
        dragRect: i,
        targetRect: a,
        canSort: d,
        fromSortable: m,
        target: r,
        completed: O,
        onMove: function(wn, Cr) {
          return Ct(A, e, f, i, wn, Z(wn), t, Cr);
        },
        changed: N
      }, _r));
    }
    function U() {
      Q("dragOverAnimationCapture"), w.captureAnimationState(), w !== m && m.captureAnimationState();
    }
    function O(it) {
      return Q("dragOverCompleted", {
        insertion: it
      }), it && (c ? u._hideClone() : u._showClone(w), w !== m && (le(f, ee ? ee.options.ghostClass : u.options.ghostClass, !1), le(f, s.ghostClass, !0)), ee !== w && w !== C.active ? ee = w : w === C.active && ee && (ee = null), m === w && (w._ignoreWhileAnimating = r), w.animateAll(function() {
        Q("dragOverAnimationComplete"), w._ignoreWhileAnimating = null;
      }), w !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (r === f && !f.animated || r === e && !r.animated) && (Xe = null), !s.dragoverBubble && !t.rootEl && r !== document && (f.parentNode[de]._isOutsideThisEl(t.target), !it && $e(t)), !s.dragoverBubble && t.stopPropagation && t.stopPropagation(), T = !0;
    }
    function N() {
      ue = me(f), Se = me(f, s.draggable), ae({
        sortable: w,
        name: "change",
        toEl: e,
        newIndex: ue,
        newDraggableIndex: Se,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), r = pe(r, s.draggable, e, !0), Q("dragOver"), C.eventCanceled)
      return T;
    if (f.contains(t.target) || r.animated && r.animatingX && r.animatingY || w._ignoreWhileAnimating === r)
      return O(!1);
    if (St = !1, u && !s.disabled && (c ? d || (o = $ !== A) : ee === this || (this.lastPutMode = vt.checkPull(this, u, f, t)) && l.checkPut(this, u, f, t))) {
      if (g = this._getDirection(t, r) === "vertical", i = Z(f), Q("dragOverValid"), C.eventCanceled)
        return T;
      if (o)
        return $ = A, U(), this._hideClone(), Q("revert"), C.eventCanceled || (Re ? A.insertBefore(f, Re) : A.appendChild(f)), O(!0);
      var j = dn(e, s.draggable);
      if (!j || gs(t, g, this) && !j.animated) {
        if (j === f)
          return O(!1);
        if (j && e === t.target && (r = j), r && (a = Z(r)), Ct(A, e, f, i, r, a, t, !!r) !== !1)
          return U(), e.appendChild(f), $ = e, N(), O(!0);
      } else if (j && ms(t, g, this)) {
        var fe = nt(e, 0, s, !0);
        if (fe === f)
          return O(!1);
        if (r = fe, a = Z(r), Ct(A, e, f, i, r, a, t, !1) !== !1)
          return U(), e.insertBefore(f, fe), $ = e, N(), O(!0);
      } else if (r.parentNode === e) {
        a = Z(r);
        var ie = 0, he, E = f.parentNode !== e, k = !us(f.animated && f.toRect || i, r.animated && r.toRect || a, g), K = g ? "top" : "left", y = Mn(r, "top", "top") || Mn(f, "top", "top"), P = y ? y.scrollTop : void 0;
        Xe !== r && (he = a[K], mt = !1, yt = !k && s.invertSwap || E), ie = ws(t, r, a, g, k ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, yt, Xe === r);
        var x;
        if (ie !== 0) {
          var I = me(f);
          do
            I -= ie, x = $.children[I];
          while (x && (_(x, "display") === "none" || x === D));
        }
        if (ie === 0 || x === r)
          return O(!1);
        Xe = r, ht = ie;
        var He = r.nextElementSibling, ke = !1;
        ke = ie === 1;
        var pt = Ct(A, e, f, i, r, a, t, ke);
        if (pt !== !1)
          return (pt === 1 || pt === -1) && (ke = pt === 1), tn = !0, setTimeout(hs, 30), U(), ke && !He ? e.appendChild(f) : r.parentNode.insertBefore(f, ke ? He : r), y && ar(y, 0, P - y.scrollTop), $ = f.parentNode, he !== void 0 && !yt && (Et = Math.abs(he - Z(r)[K])), N(), O(!0);
      }
      if (e.contains(f))
        return O(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    S(document, "mousemove", this._onTouchMove), S(document, "touchmove", this._onTouchMove), S(document, "pointermove", this._onTouchMove), S(document, "dragover", $e), S(document, "mousemove", $e), S(document, "touchmove", $e);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    S(t, "mouseup", this._onDrop), S(t, "touchend", this._onDrop), S(t, "pointerup", this._onDrop), S(t, "touchcancel", this._onDrop), S(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, r = this.options;
    if (ue = me(f), Se = me(f, r.draggable), se("drop", this, {
      evt: t
    }), $ = f && f.parentNode, ue = me(f), Se = me(f, r.draggable), C.eventCanceled) {
      this._nulling();
      return;
    }
    ze = !1, yt = !1, mt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), nn(this.cloneId), nn(this._dragStartId), this.nativeDraggable && (S(document, "drop", this), S(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ct && _(document.body, "user-select", ""), _(f, "transform", ""), t && (st && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), D && D.parentNode && D.parentNode.removeChild(D), (A === $ || ee && ee.lastPutMode !== "clone") && W && W.parentNode && W.parentNode.removeChild(W), f && (this.nativeDraggable && S(f, "dragend", this), Bt(f), f.style["will-change"] = "", st && !ze && le(f, ee ? ee.options.ghostClass : this.options.ghostClass, !1), le(f, this.options.chosenClass, !1), ae({
      sortable: this,
      name: "unchoose",
      toEl: $,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), A !== $ ? (ue >= 0 && (ae({
      rootEl: $,
      name: "add",
      toEl: $,
      fromEl: A,
      originalEvent: t
    }), ae({
      sortable: this,
      name: "remove",
      toEl: $,
      originalEvent: t
    }), ae({
      rootEl: $,
      name: "sort",
      toEl: $,
      fromEl: A,
      originalEvent: t
    }), ae({
      sortable: this,
      name: "sort",
      toEl: $,
      originalEvent: t
    })), ee && ee.save()) : ue !== Qe && ue >= 0 && (ae({
      sortable: this,
      name: "update",
      toEl: $,
      originalEvent: t
    }), ae({
      sortable: this,
      name: "sort",
      toEl: $,
      originalEvent: t
    })), C.active && ((ue == null || ue === -1) && (ue = Qe, Se = ft), ae({
      sortable: this,
      name: "end",
      toEl: $,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    se("nulling", this), A = f = $ = D = Re = W = Dt = Ne = Fe = ge = st = ue = Se = Qe = ft = Xe = ht = ee = vt = C.dragged = C.ghost = C.clone = C.active = null, Nt.forEach(function(t) {
      t.checked = !0;
    }), Nt.length = Rt = Vt = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        f && (this._onDragOver(t), fs(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], e, r = this.el.children, i = 0, a = r.length, o = this.options; i < a; i++)
      e = r[i], pe(e, o.draggable, this.el, !1) && t.push(e.getAttribute(o.dataIdAttr) || bs(e));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, e) {
    var r = {}, i = this.el;
    this.toArray().forEach(function(a, o) {
      var s = i.children[o];
      pe(s, this.options.draggable, i, !1) && (r[a] = s);
    }, this), e && this.captureAnimationState(), t.forEach(function(a) {
      r[a] && (i.removeChild(r[a]), i.appendChild(r[a]));
    }), e && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, e) {
    return pe(t, e || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, e) {
    var r = this.options;
    if (e === void 0)
      return r[t];
    var i = wt.modifyOption(this, t, e);
    typeof i < "u" ? r[t] = i : r[t] = e, t === "group" && ur(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    se("destroy", this);
    var t = this.el;
    t[de] = null, S(t, "mousedown", this._onTapStart), S(t, "touchstart", this._onTapStart), S(t, "pointerdown", this._onTapStart), this.nativeDraggable && (S(t, "dragover", this), S(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), It.splice(It.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Ne) {
      if (se("hideClone", this), C.eventCanceled)
        return;
      _(W, "display", "none"), this.options.removeCloneOnHide && W.parentNode && W.parentNode.removeChild(W), Ne = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ne) {
      if (se("showClone", this), C.eventCanceled)
        return;
      f.parentNode == A && !this.options.group.revertClone ? A.insertBefore(W, f) : Re ? A.insertBefore(W, Re) : A.appendChild(W), this.options.group.revertClone && this.animate(f, W), _(W, "display", ""), Ne = !1;
    }
  }
};
function fs(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function Ct(n, t, e, r, i, a, o, s) {
  var l, u = n[de], c = u.options.onMove, d;
  return window.CustomEvent && !Te && !gt ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = n, l.dragged = e, l.draggedRect = r, l.related = i || t, l.relatedRect = a || Z(t), l.willInsertAfter = s, l.originalEvent = o, n.dispatchEvent(l), c && (d = c.call(u, l, o)), d;
}
function Bt(n) {
  n.draggable = !1;
}
function hs() {
  tn = !1;
}
function ms(n, t, e) {
  var r = Z(nt(e.el, 0, e.options, !0)), i = 10;
  return t ? n.clientX < r.left - i || n.clientY < r.top && n.clientX < r.right : n.clientY < r.top - i || n.clientY < r.bottom && n.clientX < r.left;
}
function gs(n, t, e) {
  var r = Z(dn(e.el, e.options.draggable)), i = 10;
  return t ? n.clientX > r.right + i || n.clientX <= r.right && n.clientY > r.bottom && n.clientX >= r.left : n.clientX > r.right && n.clientY > r.top || n.clientX <= r.right && n.clientY > r.bottom + i;
}
function ws(n, t, e, r, i, a, o, s) {
  var l = r ? n.clientY : n.clientX, u = r ? e.height : e.width, c = r ? e.top : e.left, d = r ? e.bottom : e.right, m = !1;
  if (!o) {
    if (s && Et < u * i) {
      if (!mt && (ht === 1 ? l > c + u * a / 2 : l < d - u * a / 2) && (mt = !0), mt)
        m = !0;
      else if (ht === 1 ? l < c + Et : l > d - Et)
        return -ht;
    } else if (l > c + u * (1 - i) / 2 && l < d - u * (1 - i) / 2)
      return ps(t);
  }
  return m = m || o, m && (l < c + u * a / 2 || l > d - u * a / 2) ? l > c + u / 2 ? 1 : -1 : 0;
}
function ps(n) {
  return me(f) < me(n) ? 1 : -1;
}
function bs(n) {
  for (var t = n.tagName + n.className + n.src + n.href + n.textContent, e = t.length, r = 0; e--; )
    r += t.charCodeAt(e);
  return r.toString(36);
}
function vs(n) {
  Nt.length = 0;
  for (var t = n.getElementsByTagName("input"), e = t.length; e--; ) {
    var r = t[e];
    r.checked && Nt.push(r);
  }
}
function Tt(n) {
  return setTimeout(n, 0);
}
function nn(n) {
  return clearTimeout(n);
}
Ht && Y(document, "touchmove", function(n) {
  (C.active || ze) && n.cancelable && n.preventDefault();
});
C.utils = {
  on: Y,
  off: S,
  css: _,
  find: rr,
  is: function(t, e) {
    return !!pe(t, e, t, !1);
  },
  extend: ts,
  throttle: ir,
  closest: pe,
  toggleClass: le,
  clone: or,
  index: me,
  nextTick: Tt,
  cancelNextTick: nn,
  detectDirection: lr,
  getChild: nt
};
C.get = function(n) {
  return n[de];
};
C.mount = function() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (C.utils = Ce(Ce({}, C.utils), r.utils)), wt.mount(r);
  });
};
C.create = function(n, t) {
  return new C(n, t);
};
C.version = Uo;
var z = [], lt, rn, an = !1, Xt, zt, Yt, ut;
function ys() {
  function n() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return n.prototype = {
    dragStarted: function(e) {
      var r = e.originalEvent;
      this.sortable.nativeDraggable ? Y(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Y(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? Y(document, "touchmove", this._handleFallbackAutoScroll) : Y(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var r = e.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? S(document, "dragover", this._handleAutoScroll) : (S(document, "pointermove", this._handleFallbackAutoScroll), S(document, "touchmove", this._handleFallbackAutoScroll), S(document, "mousemove", this._handleFallbackAutoScroll)), Nn(), kt(), ns();
    },
    nulling: function() {
      Yt = rn = lt = an = ut = Xt = zt = null, z.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, r) {
      var i = this, a = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, s = document.elementFromPoint(a, o);
      if (Yt = e, r || this.options.forceAutoScrollFallback || gt || Te || ct) {
        Gt(e, this.options, s, r);
        var l = Ye(s, !0);
        an && (!ut || a !== Xt || o !== zt) && (ut && Nn(), ut = setInterval(function() {
          var u = Ye(document.elementFromPoint(a, o), !0);
          u !== l && (l = u, kt()), Gt(e, i.options, u, r);
        }, 10), Xt = a, zt = o);
      } else {
        if (!this.options.bubbleScroll || Ye(s, !0) === _e()) {
          kt();
          return;
        }
        Gt(e, this.options, Ye(s, !1), !1);
      }
    }
  }, Ee(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function kt() {
  z.forEach(function(n) {
    clearInterval(n.pid);
  }), z = [];
}
function Nn() {
  clearInterval(ut);
}
var Gt = ir(function(n, t, e, r) {
  if (t.scroll) {
    var i = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, o = t.scrollSensitivity, s = t.scrollSpeed, l = _e(), u = !1, c;
    rn !== e && (rn = e, kt(), lt = t.scroll, c = t.scrollFn, lt === !0 && (lt = Ye(e, !0)));
    var d = 0, m = lt;
    do {
      var g = m, w = Z(g), T = w.top, Q = w.bottom, U = w.left, O = w.right, N = w.width, j = w.height, fe = void 0, ie = void 0, he = g.scrollWidth, E = g.scrollHeight, k = _(g), K = g.scrollLeft, y = g.scrollTop;
      g === l ? (fe = N < he && (k.overflowX === "auto" || k.overflowX === "scroll" || k.overflowX === "visible"), ie = j < E && (k.overflowY === "auto" || k.overflowY === "scroll" || k.overflowY === "visible")) : (fe = N < he && (k.overflowX === "auto" || k.overflowX === "scroll"), ie = j < E && (k.overflowY === "auto" || k.overflowY === "scroll"));
      var P = fe && (Math.abs(O - i) <= o && K + N < he) - (Math.abs(U - i) <= o && !!K), x = ie && (Math.abs(Q - a) <= o && y + j < E) - (Math.abs(T - a) <= o && !!y);
      if (!z[d])
        for (var I = 0; I <= d; I++)
          z[I] || (z[I] = {});
      (z[d].vx != P || z[d].vy != x || z[d].el !== g) && (z[d].el = g, z[d].vx = P, z[d].vy = x, clearInterval(z[d].pid), (P != 0 || x != 0) && (u = !0, z[d].pid = setInterval((function() {
        r && this.layer === 0 && C.active._onTouchMove(Yt);
        var He = z[this.layer].vy ? z[this.layer].vy * s : 0, ke = z[this.layer].vx ? z[this.layer].vx * s : 0;
        typeof c == "function" && c.call(C.dragged.parentNode[de], ke, He, n, Yt, z[this.layer].el) !== "continue" || ar(z[this.layer].el, ke, He);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && m !== l && (m = Ye(m, !1)));
    an = u;
  }
}, 30), fr = function(t) {
  var e = t.originalEvent, r = t.putSortable, i = t.dragEl, a = t.activeSortable, o = t.dispatchSortableEvent, s = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (e) {
    var u = r || a;
    s();
    var c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, d = document.elementFromPoint(c.clientX, c.clientY);
    l(), u && !u.el.contains(d) && (o("spill"), this.onSpill({
      dragEl: i,
      putSortable: r
    }));
  }
};
function fn() {
}
fn.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, r = t.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var i = nt(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(e, i) : this.sortable.el.appendChild(e), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: fr
};
Ee(fn, {
  pluginName: "revertOnSpill"
});
function hn() {
}
hn.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, r = t.putSortable, i = r || this.sortable;
    i.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), i.animateAll();
  },
  drop: fr
};
Ee(hn, {
  pluginName: "removeOnSpill"
});
C.mount(new ys());
C.mount(hn, fn);
function Qt(n) {
  n.parentElement !== null && n.parentElement.removeChild(n);
}
function Yn(n, t, e) {
  const r = e === 0 ? n.children[0] : n.children[e - 1].nextSibling;
  n.insertBefore(t, r);
}
function _s() {
  return typeof window < "u" ? window.console : global.console;
}
const Cs = _s();
function xs(n) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] || (t[r] = n(r));
  };
}
const Ds = /-(\w)/g, Es = xs((n) => n.replace(Ds, (t, e) => e.toUpperCase())), hr = ["Start", "Add", "Remove", "Update", "End"], mr = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], gr = ["Move"], Ts = [gr, hr, mr].flatMap((n) => n).map((n) => `on${n}`), on = {
  manage: gr,
  manageAndEmit: hr,
  emit: mr
};
function ks(n) {
  return Ts.indexOf(n) !== -1;
}
const Ms = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function Ps(n) {
  return Ms.includes(n);
}
function Os(n) {
  return ["transition-group", "TransitionGroup"].includes(n);
}
function wr(n) {
  return ["id", "class", "role", "style"].includes(n) || n.startsWith("data-") || n.startsWith("aria-") || n.startsWith("on");
}
function pr(n) {
  return n.reduce((t, [e, r]) => (t[e] = r, t), {});
}
function Ss({ $attrs: n, componentData: t = {} }) {
  return {
    ...pr(
      Object.entries(n).filter(([r, i]) => wr(r))
    ),
    ...t
  };
}
function Is({ $attrs: n, callBackBuilder: t }) {
  const e = pr(br(n));
  Object.entries(t).forEach(([i, a]) => {
    on[i].forEach((o) => {
      e[`on${o}`] = a(o);
    });
  });
  const r = `[data-draggable]${e.draggable || ""}`;
  return {
    ...e,
    draggable: r
  };
}
function br(n) {
  return Object.entries(n).filter(([t, e]) => !wr(t)).map(([t, e]) => [Es(t), e]).filter(([t, e]) => !ks(t));
}
const Ln = ({ el: n }) => n, Ns = (n, t) => n.__draggable_context = t, Hn = (n) => n.__draggable_context;
class Ys {
  constructor({
    nodes: { header: t, default: e, footer: r },
    root: i,
    realList: a
  }) {
    this.defaultNodes = e, this.children = [...t, ...e, ...r], this.externalComponent = i.externalComponent, this.rootTransition = i.transition, this.tag = i.tag, this.realList = a;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(t, e) {
    const { tag: r, children: i, _isRootComponent: a } = this;
    return t(r, e, a ? { default: () => i } : i);
  }
  updated() {
    const { defaultNodes: t, realList: e } = this;
    t.forEach((r, i) => {
      Ns(Ln(r), {
        element: e[i],
        index: i
      });
    });
  }
  getUnderlyingVm(t) {
    return Hn(t);
  }
  getVmIndexFromDomIndex(t, e) {
    const { defaultNodes: r } = this, { length: i } = r, a = e.children, o = a.item(t);
    if (o === null)
      return i;
    const s = Hn(o);
    if (s)
      return s.index;
    if (i === 0)
      return 0;
    const l = Ln(r[0]), u = [...a].findIndex(
      (c) => c === l
    );
    return t < u ? 0 : i;
  }
}
function Ls(n, t) {
  const e = n[t];
  return e ? e() : [];
}
function Hs({ $slots: n, realList: t, getKey: e }) {
  const r = t || [], [i, a] = ["header", "footer"].map(
    (l) => Ls(n, l)
  ), { item: o } = n;
  if (!o)
    throw new Error("draggable element must have an item slot");
  const s = r.flatMap(
    (l, u) => o({ element: l, index: u }).map((c) => (c.key = e(l), c.props = { ...c.props || {}, "data-draggable": !0 }, c))
  );
  if (s.length !== r.length)
    throw new Error("Item slot must have only one child");
  return {
    header: i,
    footer: a,
    default: s
  };
}
function As(n) {
  const t = Os(n), e = !Ps(n) && !t;
  return {
    transition: t,
    externalComponent: e,
    tag: e ? Nr(n) : t ? Yr : n
  };
}
function Fs({ $slots: n, tag: t, realList: e, getKey: r }) {
  const i = Hs({ $slots: n, realList: e, getKey: r }), a = As(t);
  return new Ys({ nodes: i, root: a, realList: e });
}
function vr(n, t) {
  Fn(() => this.$emit(n.toLowerCase(), t));
}
function yr(n) {
  return (t, e) => {
    if (this.realList !== null)
      return this[`onDrag${n}`](t, e);
  };
}
function $s(n) {
  const t = yr.call(this, n);
  return (e, r) => {
    t.call(this, e, r), vr.call(this, n, e);
  };
}
let jt = null;
const Ws = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (n) => n
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, Rs = [
  "update:modelValue",
  "change",
  ...[...on.manageAndEmit, ...on.emit].map((n) => n.toLowerCase())
], Vs = Lr({
  name: "draggable",
  inheritAttrs: !1,
  props: Ws,
  emits: Rs,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: n, $attrs: t, tag: e, componentData: r, realList: i, getKey: a } = this, o = Fs({
        $slots: n,
        tag: e,
        realList: i,
        getKey: a
      });
      this.componentStructure = o;
      const s = Ss({ $attrs: t, componentData: r });
      return o.render(bn, s);
    } catch (n) {
      return this.error = !0, bn("pre", { style: { color: "red" } }, n.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && Cs.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: n, $el: t, componentStructure: e } = this;
    e.updated();
    const r = Is({
      $attrs: n,
      callBackBuilder: {
        manageAndEmit: (a) => $s.call(this, a),
        emit: (a) => vr.bind(this, a),
        manage: (a) => yr.call(this, a)
      }
    }), i = t.nodeType === 1 ? t : t.parentElement;
    this._sortable = new C(i, r), this.targetDomElement = i, i.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: n } = this;
      return n || this.modelValue;
    },
    getKey() {
      const { itemKey: n } = this;
      return typeof n == "function" ? n : (t) => t[n];
    }
  },
  watch: {
    $attrs: {
      handler(n) {
        const { _sortable: t } = this;
        t && br(n).forEach(([e, r]) => {
          t.option(e, r);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(n) {
      return this.componentStructure.getUnderlyingVm(n) || null;
    },
    getUnderlyingPotencialDraggableComponent(n) {
      return n.__draggable_component__;
    },
    emitChanges(n) {
      Fn(() => this.$emit("change", n));
    },
    alterList(n) {
      if (this.list) {
        n(this.list);
        return;
      }
      const t = [...this.modelValue];
      n(t), this.$emit("update:modelValue", t);
    },
    spliceList() {
      const n = (t) => t.splice(...arguments);
      this.alterList(n);
    },
    updatePosition(n, t) {
      const e = (r) => r.splice(t, 0, r.splice(n, 1)[0]);
      this.alterList(e);
    },
    getRelatedContextFromMoveEvent({ to: n, related: t }) {
      const e = this.getUnderlyingPotencialDraggableComponent(n);
      if (!e)
        return { component: e };
      const r = e.realList, i = { list: r, component: e };
      return n !== t && r ? { ...e.getUnderlyingVm(t) || {}, ...i } : i;
    },
    getVmIndexFromDomIndex(n) {
      return this.componentStructure.getVmIndexFromDomIndex(
        n,
        this.targetDomElement
      );
    },
    onDragStart(n) {
      this.context = this.getUnderlyingVm(n.item), n.item._underlying_vm_ = this.clone(this.context.element), jt = n.item;
    },
    onDragAdd(n) {
      const t = n.item._underlying_vm_;
      if (t === void 0)
        return;
      Qt(n.item);
      const e = this.getVmIndexFromDomIndex(n.newIndex);
      this.spliceList(e, 0, t);
      const r = { element: t, newIndex: e };
      this.emitChanges({ added: r });
    },
    onDragRemove(n) {
      if (Yn(this.$el, n.item, n.oldIndex), n.pullMode === "clone") {
        Qt(n.clone);
        return;
      }
      const { index: t, element: e } = this.context;
      this.spliceList(t, 1);
      const r = { element: e, oldIndex: t };
      this.emitChanges({ removed: r });
    },
    onDragUpdate(n) {
      Qt(n.item), Yn(n.from, n.item, n.oldIndex);
      const t = this.context.index, e = this.getVmIndexFromDomIndex(n.newIndex);
      this.updatePosition(t, e);
      const r = { element: this.context.element, oldIndex: t, newIndex: e };
      this.emitChanges({ moved: r });
    },
    computeFutureIndex(n, t) {
      if (!n.element)
        return 0;
      const e = [...t.to.children].filter(
        (o) => o.style.display !== "none"
      ), r = e.indexOf(t.related), i = n.component.getVmIndexFromDomIndex(
        r
      );
      return e.indexOf(jt) !== -1 || !t.willInsertAfter ? i : i + 1;
    },
    onDragMove(n, t) {
      const { move: e, realList: r } = this;
      if (!e || !r)
        return !0;
      const i = this.getRelatedContextFromMoveEvent(n), a = this.computeFutureIndex(i, n), o = {
        ...this.context,
        futureIndex: a
      }, s = {
        ...n,
        relatedContext: i,
        draggedContext: o
      };
      return e(s, t);
    },
    onDragEnd() {
      jt = null;
    }
  }
}), qs = { class: "settings-modal" }, Bs = ["textContent"], Xs = ["textContent"], zs = { class: "column-settings-list" }, Gs = { class: "list-item" }, Qs = { class: "actions-container" }, js = ["textContent"], Zs = ["textContent"], Us = {
  __name: "ColumnSettingsModal",
  props: {
    columns: {
      type: Array,
      required: !0
    }
  },
  emits: ["save", "close"],
  setup(n, { emit: t }) {
    const e = t, r = n;
    let i = R([]);
    function a() {
      e("save", i.value);
    }
    return r.columns.forEach((o) => i.value.push({ ...o })), (o, s) => (p(), Ie(er, null, {
      default: Zt(() => [
        b("div", qs, [
          b("div", {
            class: "settings-modal-title",
            textContent: re(M(te).getTranslate("column_settings_modal.title"))
          }, null, 8, Bs),
          b("div", {
            class: "settings-modal-description",
            textContent: re(M(te).getTranslate("column_settings_modal.description"))
          }, null, 8, Xs),
          b("div", zs, [
            we(M(Vs), {
              modelValue: M(i),
              "onUpdate:modelValue": s[0] || (s[0] = (l) => xe(i) ? i.value = l : i = l),
              "item-key": "key",
              animation: 300
            }, {
              item: Zt(({ element: l }) => [
                b("div", Gs, [
                  we(Go, {
                    label: l.label,
                    "model-value": l.visible,
                    "onUpdate:modelValue": (u) => l.visible = u
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"]),
                  we(ce, {
                    icon: "drag-indicator",
                    class: "drag-indicator-icon"
                  })
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          b("div", Qs, [
            b("div", {
              class: "button button-cancel",
              onClick: s[1] || (s[1] = (l) => e("close")),
              textContent: re(M(te).getTranslate("column_settings_modal.actions.cancel"))
            }, null, 8, js),
            b("div", {
              class: "button button-confirm",
              onClick: a,
              textContent: re(M(te).getTranslate("column_settings_modal.actions.save"))
            }, null, 8, Zs)
          ])
        ])
      ]),
      _: 1
    }));
  }
}, Ks = { class: "table-controls" }, Js = { class: "settings-container" }, ul = {
  __name: "TableControls",
  setup(n) {
    let t = R("small"), e = R("black"), r = R(!1), i = R(!1), a = [], o = R(!1), s = $n();
    function l() {
      o.value = !o.value, s.triggerEvent("toggle-search-event");
    }
    function u(m, g) {
      t.value = m, e.value = g, s.triggerEvent("update-table-style-event", { newRowSize: m, newDigitsColor: g }), r.value = !1;
    }
    function c(m) {
      a = m, s.triggerEvent("update-table-columns-event", m), i.value = !1;
    }
    function d(m) {
      a = m;
    }
    return s.addEventHandler("sync-table-columns-event", d), (m, g) => (p(), v("div", null, [
      b("div", Ks, [
        b("div", {
          onClick: l,
          class: je(["search-button", M(o) ? "active" : "inactive"])
        }, [
          we(ce, {
            icon: "search",
            class: "search-icon"
          })
        ], 2),
        g[4] || (g[4] = b("div", { class: "divider" }, null, -1)),
        b("div", Js, [
          b("div", {
            onClick: g[0] || (g[0] = (w) => xe(i) ? i.value = !0 : i = !0),
            class: "setting"
          }, [
            we(ce, {
              icon: "columns",
              class: "setting-icon"
            })
          ]),
          b("div", {
            onClick: g[1] || (g[1] = (w) => xe(r) ? r.value = !0 : r = !0),
            class: "setting"
          }, [
            we(ce, {
              icon: "settings",
              class: "setting-icon"
            })
          ])
        ])
      ]),
      M(r) ? (p(), Ie(Ro, {
        key: 0,
        "row-size-value": M(t),
        "digits-color-value": M(e),
        onSave: u,
        onClose: g[2] || (g[2] = (w) => xe(r) ? r.value = !1 : r = !1)
      }, null, 8, ["row-size-value", "digits-color-value"])) : ye("", !0),
      M(i) ? (p(), Ie(Us, {
        key: 1,
        columns: M(a),
        onClose: g[3] || (g[3] = (w) => xe(i) ? i.value = !1 : i = !1),
        onSave: c
      }, null, 8, ["columns"])) : ye("", !0)
    ]));
  }
}, el = "Search...", tl = {
  title: "Column order and visibility",
  description: "Changes the order and visibility of columns in the following settings:",
  actions: {
    save: "Save",
    cancel: "Cancel"
  }
}, nl = {
  title: "Table style",
  description: "Changes the appearance of the table from the following settings:",
  sections: {
    row_size: {
      title: "Row size",
      options: {
        small: "Small",
        medium: "Medium",
        large: "Large"
      }
    },
    numbers_color: {
      title: "Numbers color",
      options: {
        black: "Black digits",
        color: "Positive numbers colored in green, negative numbers in red"
      }
    }
  },
  actions: {
    save: "Save",
    cancel: "Cancel"
  }
}, rl = {
  search: el,
  column_settings_modal: tl,
  style_settings_modal: nl
};
function il(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var r = n.get(t);
    r && r.push(e) || n.set(t, [e]);
  }, off: function(t, e) {
    var r = n.get(t);
    r && r.splice(r.indexOf(e) >>> 0, 1);
  }, emit: function(t, e) {
    (n.get(t) || []).slice().map(function(r) {
      r(e);
    }), (n.get("*") || []).slice().map(function(r) {
      r(t, e);
    });
  } };
}
window.__vue3TableDataConfig = {
  mitt: il(),
  translation: {
    file: rl,
    setTranslate: (n) => te.setTranslateFile(n)
  }
};
export {
  Jt as Column,
  ll as Table,
  ul as TableControls
};

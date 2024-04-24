import { openBlock as h, createElementBlock as b, createCommentVNode as re, createElementVNode as m, ref as P, reactive as hn, watch as mn, computed as Oe, onMounted as gn, Fragment as me, renderList as ge, normalizeClass as Ae, toDisplayString as B, createVNode as ne, unref as S, onUnmounted as pn, withModifiers as vn, renderSlot as _n, createBlock as ve, withCtx as _t, isRef as ue, withDirectives as bn, vModelCheckbox as Cn, resolveComponent as wn, TransitionGroup as yn, defineComponent as En, h as kt, nextTick as zt } from "vue";
const Dn = { key: 0 }, Sn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, xn = /* @__PURE__ */ m("path", {
  d: "M16.6667 9.16797H3.33333C2.87333 9.16797 2.5 9.5413 2.5 10.0013C2.5 10.4613 2.87333 10.8346 3.33333 10.8346H16.6667C17.1267 10.8346 17.5 10.4613 17.5 10.0013C17.5 9.5413 17.1267 9.16797 16.6667 9.16797Z",
  fill: "currentColor"
}, null, -1), Tn = [
  xn
], kn = { key: 1 }, In = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, On = /* @__PURE__ */ m("path", {
  d: "M11.3333 5.33333H6.66667V0.666667C6.66667 0.298667 6.368 0 6 0C5.632 0 5.33333 0.298667 5.33333 0.666667V5.33333H0.666667C0.298667 5.33333 0 5.632 0 6C0 6.368 0.298667 6.66667 0.666667 6.66667H5.33333V11.3333C5.33333 11.7013 5.632 12 6 12C6.368 12 6.66667 11.7013 6.66667 11.3333V6.66667H11.3333C11.7013 6.66667 12 6.368 12 6C12 5.632 11.7013 5.33333 11.3333 5.33333Z",
  fill: "currentColor"
}, null, -1), Nn = [
  On
], An = { key: 2 }, Mn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, $n = /* @__PURE__ */ m("circle", {
  cx: "9",
  cy: "9",
  r: "8.25",
  fill: "white",
  stroke: "currentColor",
  "stroke-width": "1.5"
}, null, -1), Pn = [
  $n
], Ln = { key: 3 }, Vn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Fn = /* @__PURE__ */ m("circle", {
  cx: "9",
  cy: "9",
  r: "8.25",
  fill: "white",
  stroke: "currentColor",
  "stroke-width": "1.5"
}, null, -1), Hn = /* @__PURE__ */ m("circle", {
  cx: "9",
  cy: "9",
  r: "5",
  fill: "currentColor"
}, null, -1), Bn = [
  Fn,
  Hn
], zn = { key: 4 }, Rn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Xn = /* @__PURE__ */ m("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.07997 7.07993V8.91993H12.92V7.07993H3.07997ZM2.21457 5.94512C2.45226 5.79232 2.73965 5.71992 3.02219 5.71992H12.9777C13.2603 5.71992 13.5477 5.79232 13.7854 5.94512C14.0156 6.09316 14.28 6.37949 14.28 6.79993V9.19993C14.28 9.62036 14.0156 9.90669 13.7854 10.0547C13.5477 10.2075 13.2603 10.2799 12.9777 10.2799H3.02219C2.73965 10.2799 2.45226 10.2075 2.21457 10.0547C1.9843 9.9067 1.71997 9.62036 1.71997 9.19993V6.79993C1.71997 6.37949 1.9843 6.09316 2.21457 5.94512Z",
  fill: "black"
}, null, -1), Yn = [
  Xn
], Zn = { key: 5 }, Wn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, jn = /* @__PURE__ */ m("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.07997 6.27992V9.71992H12.92V6.27992H3.07997ZM1.71997 6.19992C1.71997 5.47007 2.32669 4.91992 3.02219 4.91992H12.9777C13.6732 4.91992 14.28 5.47007 14.28 6.19992V9.79992C14.28 10.5298 13.6732 11.0799 12.9777 11.0799H3.02219C2.32669 11.0799 1.71997 10.5298 1.71997 9.79992V6.19992Z",
  fill: "black"
}, null, -1), Un = [
  jn
], Gn = { key: 6 }, qn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Kn = /* @__PURE__ */ m("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.10301 5.47992C3.09154 5.50566 3.07997 5.54589 3.07997 5.59992V10.3999C3.07997 10.454 3.09154 10.4942 3.10301 10.5199H12.8969C12.9084 10.4942 12.92 10.454 12.92 10.3999V5.59992C12.92 5.54589 12.9084 5.50566 12.8969 5.47992H3.10301ZM1.71997 5.59992C1.71997 4.95171 2.15403 4.11992 3.02219 4.11992H12.9777C13.8459 4.11992 14.28 4.95171 14.28 5.59992V10.3999C14.28 11.0481 13.8459 11.8799 12.9777 11.8799H3.02219C2.15403 11.8799 1.71997 11.0481 1.71997 10.3999V5.59992Z",
  fill: "black"
}, null, -1), Qn = [
  Kn
], Jn = { key: 7 }, eo = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, to = /* @__PURE__ */ m("rect", {
  width: "18",
  height: "18",
  rx: "4",
  fill: "#5664E1"
}, null, -1), no = /* @__PURE__ */ m("path", {
  d: "M14.2203 4.89348C14.0471 4.89864 13.8827 4.97103 13.762 5.0953L6.9 11.9573L4.70469 9.76197C4.64326 9.69799 4.56968 9.6469 4.48826 9.61171C4.40684 9.57652 4.31922 9.55793 4.23052 9.55703C4.14183 9.55613 4.05385 9.57293 3.97173 9.60646C3.88961 9.63998 3.81501 9.68956 3.75229 9.75228C3.68957 9.815 3.64 9.8896 3.60647 9.97172C3.57294 10.0538 3.55614 10.1418 3.55704 10.2305C3.55794 10.3192 3.57653 10.4068 3.61172 10.4882C3.64691 10.5697 3.698 10.6432 3.76198 10.7047L6.42864 13.3713C6.55367 13.4963 6.72322 13.5665 6.9 13.5665C7.07678 13.5665 7.24632 13.4963 7.37135 13.3713L14.7047 6.03801C14.801 5.94437 14.8668 5.82381 14.8935 5.69213C14.9201 5.56045 14.9063 5.42379 14.854 5.30007C14.8016 5.17634 14.7131 5.07132 14.6 4.99877C14.487 4.92622 14.3546 4.88952 14.2203 4.89348Z",
  fill: "white"
}, null, -1), oo = [
  to,
  no
], io = { key: 8 }, ro = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, lo = /* @__PURE__ */ m("path", {
  d: "M5.99984 13.3334C5.63317 13.3334 5.31928 13.2029 5.05817 12.9417C4.79706 12.6806 4.6665 12.3667 4.6665 12.0001C4.6665 11.6334 4.79706 11.3195 5.05817 11.0584C5.31928 10.7973 5.63317 10.6667 5.99984 10.6667C6.3665 10.6667 6.68039 10.7973 6.9415 11.0584C7.20261 11.3195 7.33317 11.6334 7.33317 12.0001C7.33317 12.3667 7.20261 12.6806 6.9415 12.9417C6.68039 13.2029 6.3665 13.3334 5.99984 13.3334ZM9.99984 13.3334C9.63317 13.3334 9.31928 13.2029 9.05817 12.9417C8.79706 12.6806 8.6665 12.3667 8.6665 12.0001C8.6665 11.6334 8.79706 11.3195 9.05817 11.0584C9.31928 10.7973 9.63317 10.6667 9.99984 10.6667C10.3665 10.6667 10.6804 10.7973 10.9415 11.0584C11.2026 11.3195 11.3332 11.6334 11.3332 12.0001C11.3332 12.3667 11.2026 12.6806 10.9415 12.9417C10.6804 13.2029 10.3665 13.3334 9.99984 13.3334ZM5.99984 9.33342C5.63317 9.33342 5.31928 9.20286 5.05817 8.94175C4.79706 8.68064 4.6665 8.36675 4.6665 8.00008C4.6665 7.63341 4.79706 7.31953 5.05817 7.05841C5.31928 6.7973 5.63317 6.66675 5.99984 6.66675C6.3665 6.66675 6.68039 6.7973 6.9415 7.05841C7.20261 7.31953 7.33317 7.63341 7.33317 8.00008C7.33317 8.36675 7.20261 8.68064 6.9415 8.94175C6.68039 9.20286 6.3665 9.33342 5.99984 9.33342ZM9.99984 9.33342C9.63317 9.33342 9.31928 9.20286 9.05817 8.94175C8.79706 8.68064 8.6665 8.36675 8.6665 8.00008C8.6665 7.63341 8.79706 7.31953 9.05817 7.05841C9.31928 6.7973 9.63317 6.66675 9.99984 6.66675C10.3665 6.66675 10.6804 6.7973 10.9415 7.05841C11.2026 7.31953 11.3332 7.63341 11.3332 8.00008C11.3332 8.36675 11.2026 8.68064 10.9415 8.94175C10.6804 9.20286 10.3665 9.33342 9.99984 9.33342ZM5.99984 5.33341C5.63317 5.33341 5.31928 5.20286 5.05817 4.94175C4.79706 4.68064 4.6665 4.36675 4.6665 4.00008C4.6665 3.63341 4.79706 3.31953 5.05817 3.05841C5.31928 2.7973 5.63317 2.66675 5.99984 2.66675C6.3665 2.66675 6.68039 2.7973 6.9415 3.05841C7.20261 3.31953 7.33317 3.63341 7.33317 4.00008C7.33317 4.36675 7.20261 4.68064 6.9415 4.94175C6.68039 5.20286 6.3665 5.33341 5.99984 5.33341ZM9.99984 5.33341C9.63317 5.33341 9.31928 5.20286 9.05817 4.94175C8.79706 4.68064 8.6665 4.36675 8.6665 4.00008C8.6665 3.63341 8.79706 3.31953 9.05817 3.05841C9.31928 2.7973 9.63317 2.66675 9.99984 2.66675C10.3665 2.66675 10.6804 2.7973 10.9415 3.05841C11.2026 3.31953 11.3332 3.63341 11.3332 4.00008C11.3332 4.36675 11.2026 4.68064 10.9415 4.94175C10.6804 5.20286 10.3665 5.33341 9.99984 5.33341Z",
  fill: "#303136"
}, null, -1), ao = [
  lo
], so = { key: 9 }, co = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, uo = /* @__PURE__ */ m("path", {
  d: "M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L19.5859 21.5859C20.1379 22.1379 21.0339 22.1379 21.5859 21.5859C22.1379 21.0339 22.1379 20.1379 21.5859 19.5859L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z",
  fill: "currentColor"
}, null, -1), fo = [
  uo
], ho = { key: 10 }, mo = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, go = /* @__PURE__ */ m("path", {
  d: "M2.49984 2.5C2.039 2.5 1.6665 2.8725 1.6665 3.33333V16.6667C1.6665 17.1275 2.039 17.5 2.49984 17.5H5.83317V2.5H2.49984ZM7.49984 2.5V17.5H12.4998V2.5H7.49984ZM14.1665 2.5V17.5H17.4998C17.9607 17.5 18.3332 17.1275 18.3332 16.6667V3.33333C18.3332 2.8725 17.9607 2.5 17.4998 2.5H14.1665Z",
  fill: "#303136"
}, null, -1), po = [
  go
], vo = { key: 11 }, _o = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, bo = /* @__PURE__ */ m("path", {
  d: "M8.74188 1.66669C8.34271 1.66669 8.00149 1.94885 7.92482 2.34052L7.6465 3.76955C6.96253 4.02819 6.3301 4.38952 5.77475 4.8454L4.40431 4.37339C4.02681 4.24339 3.61147 4.39949 3.41147 4.74449L2.15496 6.92222C1.9558 7.26805 2.02828 7.7071 2.32912 7.96877L3.42775 8.92417C3.37061 9.2753 3.33335 9.63276 3.33335 10C3.33335 10.3673 3.37061 10.7247 3.42775 11.0759L2.32912 12.0313C2.02828 12.2929 1.9558 12.732 2.15496 13.0778L3.41147 15.2556C3.61064 15.6014 4.02681 15.7574 4.40431 15.6283L5.77475 15.1563C6.32992 15.6119 6.96284 15.972 7.6465 16.2305L7.92482 17.6595C8.00149 18.0512 8.34271 18.3334 8.74188 18.3334H11.2582C11.6573 18.3334 11.9985 18.0512 12.0752 17.6595L12.3535 16.2305C13.0375 15.9719 13.6699 15.6105 14.2253 15.1546L15.5957 15.6266C15.9732 15.7566 16.3886 15.6014 16.5886 15.2556L17.8451 13.0762C18.0442 12.7304 17.9717 12.2929 17.6709 12.0313L16.5723 11.0759C16.6294 10.7247 16.6667 10.3673 16.6667 10C16.6667 9.63276 16.6294 9.2753 16.5723 8.92417L17.6709 7.96877C17.9717 7.7071 18.0442 7.26805 17.8451 6.92222L16.5886 4.74449C16.3894 4.39865 15.9732 4.2426 15.5957 4.37177L14.2253 4.84377C13.6701 4.38818 13.0372 4.02807 12.3535 3.76955L12.0752 2.34052C11.9985 1.94885 11.6573 1.66669 11.2582 1.66669H8.74188ZM10 6.66669C11.8408 6.66669 13.3333 8.15919 13.3333 10C13.3333 11.8409 11.8408 13.3334 10 13.3334C8.15918 13.3334 6.66668 11.8409 6.66668 10C6.66668 8.15919 8.15918 6.66669 10 6.66669Z",
  fill: "currentColor"
}, null, -1), Co = [
  bo
], wo = { key: 12 }, yo = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 6 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Eo = /* @__PURE__ */ m("path", {
  d: "M3.45883 11.9404C3.28486 12.3421 2.71514 12.3421 2.54117 11.9404L0.704461 7.69868C0.561505 7.36854 0.803529 7 1.16329 7L4.83671 7C5.19647 7 5.43849 7.36854 5.29554 7.69868L3.45883 11.9404Z",
  fill: "currentColor"
}, null, -1), Do = /* @__PURE__ */ m("path", {
  d: "M2.54117 1.05963C2.71514 0.657866 3.28486 0.657866 3.45883 1.05963L5.29554 5.30132C5.43849 5.63146 5.19647 6 4.83671 6L1.16329 6C0.803529 6 0.561506 5.63146 0.704461 5.30132L2.54117 1.05963Z",
  fill: "currentColor"
}, null, -1), So = [
  Eo,
  Do
], U = {
  __name: "Icon",
  props: {
    icon: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return (e, n) => t.icon === "minus" ? (h(), b("div", Dn, [
      (h(), b("svg", Sn, Tn))
    ])) : t.icon === "plus" ? (h(), b("div", kn, [
      (h(), b("svg", In, Nn))
    ])) : t.icon === "radio-circle" ? (h(), b("div", An, [
      (h(), b("svg", Mn, Pn))
    ])) : t.icon === "radio-circle-selected" ? (h(), b("div", Ln, [
      (h(), b("svg", Vn, Bn))
    ])) : t.icon === "small-row" ? (h(), b("div", zn, [
      (h(), b("svg", Rn, Yn))
    ])) : t.icon === "medium-row" ? (h(), b("div", Zn, [
      (h(), b("svg", Wn, Un))
    ])) : t.icon === "large-row" ? (h(), b("div", Gn, [
      (h(), b("svg", qn, Qn))
    ])) : t.icon === "check" ? (h(), b("div", Jn, [
      (h(), b("svg", eo, oo))
    ])) : t.icon === "drag-indicator" ? (h(), b("div", io, [
      (h(), b("svg", ro, ao))
    ])) : t.icon === "search" ? (h(), b("div", so, [
      (h(), b("svg", co, fo))
    ])) : t.icon === "columns" ? (h(), b("div", ho, [
      (h(), b("svg", mo, po))
    ])) : t.icon === "settings" ? (h(), b("div", vo, [
      (h(), b("svg", _o, Co))
    ])) : t.icon === "sort" ? (h(), b("div", wo, [
      (h(), b("svg", yo, So))
    ])) : re("", !0);
  }
};
function xo() {
  let t = P([]), e = P([]);
  function n() {
    return t.value;
  }
  function o() {
    return e.value;
  }
  function i(a) {
    t.value = a, e.value = [], r(75);
  }
  function r(a = 30) {
    let s = e.value.length;
    if (s >= t.value.length)
      return;
    let c = t.value.slice(s, s + a);
    e.value = [...e.value, ...c];
  }
  function l() {
    e.value = [], r();
  }
  return {
    getAllData: n,
    getLoadedData: o,
    setData: i,
    loadData: r,
    refreshLoadedData: l
  };
}
function Rt() {
  let t = window.__vue3TableDataConfig.mitt;
  function e(i, r) {
    t.on(i, r);
  }
  function n(i, r) {
    t.off(i, r);
  }
  function o(i, r = null) {
    t.emit(i, r);
  }
  return {
    addEventHandler: e,
    removeEventHandler: n,
    triggerEvent: o
  };
}
const F = {
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
  getTranslate(t, e = window.__vue3TableDataConfig.translation.file) {
    return t.split(".").forEach((o) => {
      e ? e = e[o] : e = void 0;
    }), e;
  },
  /**
   * Set the translation file. We need a json file with the proper structure
   * (you can find the structure in translate.json file)
   *
   */
  setTranslateFile(t) {
    this.hasValidContent(t) && (window.__vue3TableDataConfig.translation.file = t);
  },
  /**
   * Validate json file. Check if the given file has the proper structure.
   * You can find the structure in translate.json file
   */
  hasValidContent(t) {
    return typeof t != "object" ? (console.error("The given file is not a valid json file", t), !1) : ([
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
    ].forEach((n) => {
      if (this.getTranslate(n, t) === void 0)
        return console.error(
          "The given file has an invalid structure. We could not find the translate for path: " + n.replaceAll(".", " -> ")
        ), !1;
    }), !0);
  }
}, ee = {
  formatNumericValue(t) {
    return this.isNumericValue(t) ? this.formatNumber(t, { fractionDigits: 2 }) : t;
  },
  isNumericValue(t) {
    return t !== null && typeof t == "number";
  },
  isDate(t) {
    return !t || typeof t == "string" && t.length !== 10 ? !1 : this.parseDate(t) instanceof Date;
  },
  parseDate(t, e = "d.m.Y") {
    if (e === "d.m.Y") {
      let n = t.substr(6), o = t.substr(3, 2), i = t.substr(0, 2);
      return new Date(n, o - 1, i, 0, 0, 0, 0);
    }
  },
  formatNumber(t, e = {}) {
    if (t === null || isNaN(t))
      return t;
    let n = {
      minimumFractionDigits: (typeof e.minimumFractionDigits == "number" ? e.minimumFractionDigits : null) || (typeof e.fractionDigits == "number" ? e.fractionDigits : 2),
      maximumFractionDigits: (typeof e.maximumFractionDigits == "number" ? e.maximumFractionDigits : null) || (typeof e.fractionDigits == "number" ? e.fractionDigits : 2)
    };
    return (t * 1).toLocaleString(document.documentElement.lang, n);
  },
  cleanTerm(t) {
    return t && typeof t == "string" ? (t = t.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), t.replace(/[^0-9a-z]/gi, "").toLowerCase()) : "";
  }
}, To = { class: "table-header" }, ko = { class: "table-header-row" }, Io = ["onClick"], Oo = ["textContent"], No = { key: 0 }, Ao = { class: "delimiter" }, Mo = {
  key: 1,
  class: "table-total"
}, $o = {
  key: 2,
  class: "column-search-container"
}, Po = ["onInput", "placeholder"], Lo = { class: "table-body" }, Vo = ["onClick"], Sr = {
  __name: "TableData",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  emits: ["row-click"],
  setup(t, { emit: e }) {
    const n = e, o = t;
    let i = P(null), r = P(null), l = P(null), a = P(!1);
    const s = hn([
      { id: "small", class: "cell-small", selected: !0 },
      { id: "medium", class: "cell-medium", selected: !1 },
      { id: "large", class: "cell-large", selected: !1 }
    ]);
    let c = P("black"), f = P(!1), d = P({}), g = Rt(), p = xo();
    mn(d, () => {
      Object.values(d.value).every((_) => !_) && p.refreshLoadedData();
    }, { deep: !0 });
    const v = Oe(() => r.value.filter((_) => _.visible)), x = Oe(() => Object.keys(d.value).length === 0 ? p.getLoadedData() : p.getAllData().filter((_) => Object.keys(d.value).every((D) => {
      let E = ee.cleanTerm(d.value[D]);
      return ee.cleanTerm(_[D] ?? "").toLowerCase().includes(E.toLowerCase());
    })).slice(0, 120)), Y = Oe(() => (_, D) => {
      let E = [], I = s.find((xe) => xe.selected) ?? s[0];
      return E.push(I.class), _ ? (E.push("numeric-column"), E.push(
        c.value === "color" ? Math.sign(D) < 0 ? "text-red" : "text-green" : "text-gray"
      ), E.join(" ")) : (E.push("text-gray"), E.join(" "));
    }), q = Oe(() => v.value.some((_) => _.isNumeric));
    function L(_) {
      a.value = l.value === _ ? !a.value : !0, l.value = _;
      let D = p.getAllData().sort(
        (E, I) => Z(E[l.value], I[l.value], a.value)
      );
      p.setData(D);
    }
    function Z(_, D, E) {
      return _ == null && (_ = ""), D == null && (D = ""), E || ([_, D] = [D, _]), ee.isNumericValue(_) && ee.isNumericValue(D) ? D - _ : ee.isDate(_) && ee.isDate(D) ? ee.parseDate(_).getTime() > ee.parseDate(D).getTime() ? 1 : -1 : _.localeCompare(D);
    }
    function K(_) {
      s.forEach((D) => D.selected = D.id === _.newRowSize), c.value = _.newDigitsColor;
    }
    function se(_) {
      r.value = _;
    }
    function Q() {
      f.value = !f.value, f.value || (d.value = {});
    }
    function ce(_) {
      if (!_.isNumeric)
        return "";
      let D = o.data.rows.map((E) => E[_.key]);
      return ee.formatNumber(D.reduce((E, I) => E + I, 0), { fractionDigits: 2 });
    }
    function Ce(_) {
      return o.data.rows.map((E) => E[_.key]).every(ee.isNumericValue);
    }
    function z() {
      r.value = o.data.header.map((_) => ({
        key: _.key,
        label: _.label,
        searchable: _.searchable,
        visible: !0,
        isNumeric: Ce(_)
      })), g.triggerEvent("sync-table-columns-event", r.value);
    }
    function we(_, D) {
      d.value[D] = _;
    }
    function oe(_) {
      n("row-click", _);
    }
    function ye() {
      i.value.style.maxHeight = "75vh";
    }
    return g.addEventHandler("update-table-style-event", K), g.addEventHandler("update-table-columns-event", se), g.addEventHandler("toggle-search-event", Q), z(), p.setData(o.data.rows), gn(() => ye()), (_, D) => (h(), b("div", {
      ref_key: "tableContainer",
      ref: i,
      class: "table-container"
    }, [
      m("table", null, [
        m("thead", To, [
          m("tr", ko, [
            (h(!0), b(me, null, ge(v.value, (E) => (h(), b("th", {
              onClick: (I) => L(E.key)
            }, [
              m("div", {
                class: Ae(["header-row-item", E.isNumeric ? "numeric" : ""])
              }, [
                m("span", {
                  textContent: B(E.label)
                }, null, 8, Oo),
                ne(U, {
                  icon: "sort",
                  class: Ae(["header-row-item-icon", `${S(l) === E.key ? "selected" : ""}`])
                }, null, 8, ["class"])
              ], 2)
            ], 8, Io))), 256))
          ]),
          q.value ? (h(), b("tr", No, [
            (h(!0), b(me, null, ge(v.value, (E) => (h(), b("th", Ao))), 256))
          ])) : re("", !0),
          q.value ? (h(), b("tr", Mo, [
            (h(!0), b(me, null, ge(v.value, (E, I) => (h(), b("th", null, B(I === 0 ? "Total" : ce(E)), 1))), 256))
          ])) : re("", !0),
          S(f) ? (h(), b("tr", $o, [
            (h(!0), b(me, null, ge(v.value, (E) => (h(), b("th", null, [
              E.searchable ? (h(), b("input", {
                key: 0,
                onInput: (I) => we(I.target.value, E.key),
                class: "column-search",
                placeholder: S(F).getTranslate("search")
              }, null, 40, Po)) : re("", !0)
            ]))), 256))
          ])) : re("", !0)
        ]),
        m("tbody", Lo, [
          (h(!0), b(me, null, ge(x.value, (E) => (h(), b("tr", {
            onClick: (I) => oe(E)
          }, [
            (h(!0), b(me, null, ge(v.value, (I) => (h(), b("td", {
              class: Ae(Y.value(I.isNumeric, E[I.key]))
            }, B(I.isNumeric ? S(ee).formatNumericValue(E[I.key]) : E[I.key]), 3))), 256))
          ], 8, Vo))), 256))
        ])
      ])
    ], 512));
  }
}, Xt = {
  __name: "Modal",
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e;
    return document.body.style.overflow = "hidden", pn(() => document.body.style.overflow = "auto"), (o, i) => (h(), b("div", {
      onClick: i[0] || (i[0] = vn((r) => n("close"), ["self"])),
      class: "modal"
    }, [
      _n(o.$slots, "default")
    ]));
  }
}, Fo = { class: "settings-modal" }, Ho = ["textContent"], Bo = ["textContent"], zo = { class: "style-settings-options" }, Ro = { class: "style-settings-option" }, Xo = ["textContent"], Yo = {
  key: 0,
  class: "option-items"
}, Zo = ["onClick"], Wo = { class: "item-value" }, jo = ["textContent"], Uo = /* @__PURE__ */ m("div", { class: "divider" }, null, -1), Go = { class: "style-settings-option" }, qo = ["textContent"], Ko = {
  key: 0,
  class: "option-items"
}, Qo = ["onClick"], Jo = { class: "item-value" }, ei = ["textContent"], ti = { class: "actions-container" }, ni = ["textContent"], oi = ["textContent"], ii = {
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
  setup(t, { emit: e }) {
    const n = e, o = t;
    let i = P(o.rowSizeValue), r = P(o.digitsColorValue);
    const l = {
      small: {
        icon: "small-row",
        label: F.getTranslate("style_settings_modal.sections.row_size.options.small")
      },
      medium: {
        icon: "medium-row",
        label: F.getTranslate("style_settings_modal.sections.row_size.options.medium")
      },
      large: {
        icon: "large-row",
        label: F.getTranslate("style_settings_modal.sections.row_size.options.large")
      }
    }, a = {
      black: F.getTranslate("style_settings_modal.sections.numbers_color.options.black"),
      color: F.getTranslate("style_settings_modal.sections.numbers_color.options.color")
    };
    let s = P(!1), c = P(!1);
    function f() {
      n("save", i.value, r.value);
    }
    return (d, g) => (h(), ve(Xt, null, {
      default: _t(() => [
        m("div", Fo, [
          m("div", {
            class: "settings-modal-title",
            textContent: B(S(F).getTranslate("style_settings_modal.title"))
          }, null, 8, Ho),
          m("div", {
            class: "settings-modal-description",
            textContent: B(S(F).getTranslate("style_settings_modal.description"))
          }, null, 8, Bo),
          m("div", zo, [
            m("div", Ro, [
              m("div", {
                class: "option-container",
                onClick: g[0] || (g[0] = (p) => ue(s) ? s.value = !S(s) : s = !S(s))
              }, [
                m("div", {
                  class: "option-title",
                  textContent: B(S(F).getTranslate("style_settings_modal.sections.row_size.title"))
                }, null, 8, Xo),
                S(s) ? (h(), ve(U, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (h(), ve(U, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              S(s) ? (h(), b("div", Yo, [
                (h(), b(me, null, ge(l, (p, v) => m("div", {
                  class: "option-item-container",
                  onClick: (x) => ue(i) ? i.value = v : i = v
                }, [
                  ne(U, {
                    icon: `radio-circle${S(i) === v ? "-selected" : ""}`,
                    class: Ae(`icon-size ${S(i) === v ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  m("div", Wo, [
                    ne(U, {
                      icon: p.icon,
                      class: "icon-size"
                    }, null, 8, ["icon"]),
                    m("span", {
                      class: "option-item-title",
                      textContent: B(p.label)
                    }, null, 8, jo)
                  ])
                ], 8, Zo)), 64))
              ])) : re("", !0)
            ]),
            Uo,
            m("div", Go, [
              m("div", {
                class: "option-container",
                onClick: g[1] || (g[1] = (p) => ue(c) ? c.value = !S(c) : c = !S(c))
              }, [
                m("div", {
                  class: "option-title",
                  textContent: B(S(F).getTranslate("style_settings_modal.sections.numbers_color.title"))
                }, null, 8, qo),
                S(c) ? (h(), ve(U, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (h(), ve(U, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              S(c) ? (h(), b("div", Ko, [
                (h(), b(me, null, ge(a, (p, v) => m("div", {
                  class: "option-item-container",
                  onClick: (x) => ue(r) ? r.value = v : r = v
                }, [
                  ne(U, {
                    icon: `radio-circle${S(r) === v ? "-selected" : ""}`,
                    class: Ae(`icon-size ${S(r) === v ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  m("div", Jo, [
                    m("span", {
                      class: "option-item-title",
                      textContent: B(p)
                    }, null, 8, ei)
                  ])
                ], 8, Qo)), 64))
              ])) : re("", !0)
            ])
          ]),
          m("div", ti, [
            m("div", {
              class: "button button-cancel",
              onClick: g[2] || (g[2] = (p) => n("close")),
              textContent: B(S(F).getTranslate("style_settings_modal.actions.cancel"))
            }, null, 8, ni),
            m("div", {
              class: "button button-confirm",
              onClick: f,
              textContent: B(S(F).getTranslate("style_settings_modal.actions.save"))
            }, null, 8, oi)
          ])
        ])
      ]),
      _: 1
    }));
  }
}, ri = ["for"], li = {
  key: 0,
  class: "checkbox-input"
}, ai = {
  key: 1,
  class: "checkbox-selected"
}, si = ["textContent"], ci = ["id", "name", "value"], ui = {
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
  setup(t, { emit: e }) {
    const n = e, o = t, i = Oe({
      get: () => o.modelValue,
      set: (l) => n("update:modelValue", l)
    }), r = Oe(() => o.name && o.name.length ? o.name : o.label);
    return (l, a) => (h(), b("label", {
      for: t.name,
      class: "checkbox-container"
    }, [
      i.value ? (h(), b("div", ai, [
        ne(U, {
          icon: "check",
          class: "checkbox-selected-icon"
        })
      ])) : (h(), b("div", li)),
      t.label ? (h(), b("span", {
        key: 2,
        class: "label",
        textContent: B(t.label)
      }, null, 8, si)) : re("", !0),
      bn(m("input", {
        hidden: "",
        id: r.value,
        name: t.name,
        type: "checkbox",
        "onUpdate:modelValue": a[0] || (a[0] = (s) => i.value = s),
        value: t.value
      }, null, 8, ci), [
        [Cn, i.value]
      ])
    ], 8, ri));
  }
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function It(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function ae(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? It(Object(n), !0).forEach(function(o) {
      di(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function qe(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qe = function(e) {
    return typeof e;
  } : qe = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, qe(t);
}
function di(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function fe() {
  return fe = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, fe.apply(this, arguments);
}
function fi(t, e) {
  if (t == null)
    return {};
  var n = {}, o = Object.keys(t), i, r;
  for (r = 0; r < o.length; r++)
    i = o[r], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function hi(t, e) {
  if (t == null)
    return {};
  var n = fi(t, e), o, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    for (i = 0; i < r.length; i++)
      o = r[i], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
var mi = "1.14.0";
function de(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var he = de(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ye = de(/Edge/i), Ot = de(/firefox/i), He = de(/safari/i) && !de(/chrome/i) && !de(/android/i), Yt = de(/iP(ad|od|hone)/i), gi = de(/chrome/i) && de(/android/i), Zt = {
  capture: !1,
  passive: !1
};
function k(t, e, n) {
  t.addEventListener(e, n, !he && Zt);
}
function T(t, e, n) {
  t.removeEventListener(e, n, !he && Zt);
}
function tt(t, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function pi(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function ie(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && tt(t, e) : tt(t, e)) || o && t === n)
        return t;
      if (t === n)
        break;
    } while (t = pi(t));
  }
  return null;
}
var Nt = /\s+/g;
function W(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var o = (" " + t.className + " ").replace(Nt, " ").replace(" " + e + " ", " ");
      t.className = (o + (n ? " " + e : "")).replace(Nt, " ");
    }
}
function C(t, e, n) {
  var o = t && t.style;
  if (o) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), o[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function Me(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var o = C(t, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function Wt(t, e, n) {
  if (t) {
    var o = t.getElementsByTagName(e), i = 0, r = o.length;
    if (n)
      for (; i < r; i++)
        n(o[i], i);
    return o;
  }
  return [];
}
function le() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function $(t, e, n, o, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var r, l, a, s, c, f, d;
    if (t !== window && t.parentNode && t !== le() ? (r = t.getBoundingClientRect(), l = r.top, a = r.left, s = r.bottom, c = r.right, f = r.height, d = r.width) : (l = 0, a = 0, s = window.innerHeight, c = window.innerWidth, f = window.innerHeight, d = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !he))
      do
        if (i && i.getBoundingClientRect && (C(i, "transform") !== "none" || n && C(i, "position") !== "static")) {
          var g = i.getBoundingClientRect();
          l -= g.top + parseInt(C(i, "border-top-width")), a -= g.left + parseInt(C(i, "border-left-width")), s = l + r.height, c = a + r.width;
          break;
        }
      while (i = i.parentNode);
    if (o && t !== window) {
      var p = Me(i || t), v = p && p.a, x = p && p.d;
      p && (l /= x, a /= v, d /= v, f /= x, s = l + f, c = a + d);
    }
    return {
      top: l,
      left: a,
      bottom: s,
      right: c,
      width: d,
      height: f
    };
  }
}
function At(t, e, n) {
  for (var o = be(t, !0), i = $(t)[e]; o; ) {
    var r = $(o)[n], l = void 0;
    if (n === "top" || n === "left" ? l = i >= r : l = i <= r, !l)
      return o;
    if (o === le())
      break;
    o = be(o, !1);
  }
  return !1;
}
function $e(t, e, n, o) {
  for (var i = 0, r = 0, l = t.children; r < l.length; ) {
    if (l[r].style.display !== "none" && l[r] !== w.ghost && (o || l[r] !== w.dragged) && ie(l[r], n.draggable, t, !1)) {
      if (i === e)
        return l[r];
      i++;
    }
    r++;
  }
  return null;
}
function Dt(t, e) {
  for (var n = t.lastElementChild; n && (n === w.ghost || C(n, "display") === "none" || e && !tt(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function J(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== w.clone && (!e || tt(t, e)) && n++;
  return n;
}
function Mt(t) {
  var e = 0, n = 0, o = le();
  if (t)
    do {
      var i = Me(t), r = i.a, l = i.d;
      e += t.scrollLeft * r, n += t.scrollTop * l;
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function vi(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && e[o] === t[n][o])
          return Number(n);
    }
  return -1;
}
function be(t, e) {
  if (!t || !t.getBoundingClientRect)
    return le();
  var n = t, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = C(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return le();
        if (o || e)
          return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return le();
}
function _i(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function at(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Be;
function jt(t, e) {
  return function() {
    if (!Be) {
      var n = arguments, o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n), Be = setTimeout(function() {
        Be = void 0;
      }, e);
    }
  };
}
function bi() {
  clearTimeout(Be), Be = void 0;
}
function Ut(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function Gt(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
var G = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ci() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(i) {
          if (!(C(i, "display") === "none" || i === w.ghost)) {
            t.push({
              target: i,
              rect: $(i)
            });
            var r = ae({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var l = Me(i, !0);
              l && (r.top -= l.f, r.left -= l.e);
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(o) {
      t.push(o);
    },
    removeAnimationState: function(o) {
      t.splice(vi(t, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof o == "function" && o();
        return;
      }
      var r = !1, l = 0;
      t.forEach(function(a) {
        var s = 0, c = a.target, f = c.fromRect, d = $(c), g = c.prevFromRect, p = c.prevToRect, v = a.rect, x = Me(c, !0);
        x && (d.top -= x.f, d.left -= x.e), c.toRect = d, c.thisAnimationDuration && at(g, d) && !at(f, d) && // Make sure animatingRect is on line between toRect & fromRect
        (v.top - d.top) / (v.left - d.left) === (f.top - d.top) / (f.left - d.left) && (s = yi(v, g, p, i.options)), at(d, f) || (c.prevFromRect = f, c.prevToRect = d, s || (s = i.options.animation), i.animate(c, v, d, s)), s && (r = !0, l = Math.max(l, s), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, s), c.thisAnimationDuration = s);
      }), clearTimeout(e), r ? e = setTimeout(function() {
        typeof o == "function" && o();
      }, l) : typeof o == "function" && o(), t = [];
    },
    animate: function(o, i, r, l) {
      if (l) {
        C(o, "transition", ""), C(o, "transform", "");
        var a = Me(this.el), s = a && a.a, c = a && a.d, f = (i.left - r.left) / (s || 1), d = (i.top - r.top) / (c || 1);
        o.animatingX = !!f, o.animatingY = !!d, C(o, "transform", "translate3d(" + f + "px," + d + "px,0)"), this.forRepaintDummy = wi(o), C(o, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), C(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          C(o, "transition", ""), C(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, l);
      }
    }
  };
}
function wi(t) {
  return t.offsetWidth;
}
function yi(t, e, n, o) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation;
}
var Te = [], st = {
  initializeByDefault: !0
}, Ze = {
  mount: function(e) {
    for (var n in st)
      st.hasOwnProperty(n) && !(n in e) && (e[n] = st[n]);
    Te.forEach(function(o) {
      if (o.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Te.push(e);
  },
  pluginEvent: function(e, n, o) {
    var i = this;
    this.eventCanceled = !1, o.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = e + "Global";
    Te.forEach(function(l) {
      n[l.pluginName] && (n[l.pluginName][r] && n[l.pluginName][r](ae({
        sortable: n
      }, o)), n.options[l.pluginName] && n[l.pluginName][e] && n[l.pluginName][e](ae({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(e, n, o, i) {
    Te.forEach(function(a) {
      var s = a.pluginName;
      if (!(!e.options[s] && !a.initializeByDefault)) {
        var c = new a(e, n, e.options);
        c.sortable = e, c.options = e.options, e[s] = c, fe(o, c.defaults);
      }
    });
    for (var r in e.options)
      if (e.options.hasOwnProperty(r)) {
        var l = this.modifyOption(e, r, e.options[r]);
        typeof l < "u" && (e.options[r] = l);
      }
  },
  getEventProperties: function(e, n) {
    var o = {};
    return Te.forEach(function(i) {
      typeof i.eventProperties == "function" && fe(o, i.eventProperties.call(n[i.pluginName], e));
    }), o;
  },
  modifyOption: function(e, n, o) {
    var i;
    return Te.forEach(function(r) {
      e[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (i = r.optionListeners[n].call(e[r.pluginName], o));
    }), i;
  }
};
function Ei(t) {
  var e = t.sortable, n = t.rootEl, o = t.name, i = t.targetEl, r = t.cloneEl, l = t.toEl, a = t.fromEl, s = t.oldIndex, c = t.newIndex, f = t.oldDraggableIndex, d = t.newDraggableIndex, g = t.originalEvent, p = t.putSortable, v = t.extraEventProperties;
  if (e = e || n && n[G], !!e) {
    var x, Y = e.options, q = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !he && !Ye ? x = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(o, !0, !0)), x.to = l || n, x.from = a || n, x.item = i || n, x.clone = r, x.oldIndex = s, x.newIndex = c, x.oldDraggableIndex = f, x.newDraggableIndex = d, x.originalEvent = g, x.pullMode = p ? p.lastPutMode : void 0;
    var L = ae(ae({}, v), Ze.getEventProperties(o, e));
    for (var Z in L)
      x[Z] = L[Z];
    n && n.dispatchEvent(x), Y[q] && Y[q].call(e, x);
  }
}
var Di = ["evt"], X = function(e, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = o.evt, r = hi(o, Di);
  Ze.pluginEvent.bind(w)(e, n, ae({
    dragEl: u,
    parentEl: N,
    ghostEl: y,
    rootEl: O,
    nextEl: Se,
    lastDownEl: Ke,
    cloneEl: A,
    cloneHidden: _e,
    dragStarted: Le,
    putSortable: V,
    activeSortable: w.active,
    originalEvent: i,
    oldIndex: Ne,
    oldDraggableIndex: ze,
    newIndex: j,
    newDraggableIndex: pe,
    hideGhostForTarget: Jt,
    unhideGhostForTarget: en,
    cloneNowHidden: function() {
      _e = !0;
    },
    cloneNowShown: function() {
      _e = !1;
    },
    dispatchSortableEvent: function(a) {
      R({
        sortable: n,
        name: a,
        originalEvent: i
      });
    }
  }, r));
};
function R(t) {
  Ei(ae({
    putSortable: V,
    cloneEl: A,
    targetEl: u,
    rootEl: O,
    oldIndex: Ne,
    oldDraggableIndex: ze,
    newIndex: j,
    newDraggableIndex: pe
  }, t));
}
var u, N, y, O, Se, Ke, A, _e, Ne, j, ze, pe, We, V, Ie = !1, nt = !1, ot = [], Ee, te, ct, ut, $t, Pt, Le, ke, Re, Xe = !1, je = !1, Qe, H, dt = [], bt = !1, it = [], lt = typeof document < "u", Ue = Yt, Lt = Ye || he ? "cssFloat" : "float", Si = lt && !gi && !Yt && "draggable" in document.createElement("div"), qt = function() {
  if (lt) {
    if (he)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), Kt = function(e, n) {
  var o = C(e), i = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), r = $e(e, 0, n), l = $e(e, 1, n), a = r && C(r), s = l && C(l), c = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + $(r).width, f = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + $(l).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && a.float && a.float !== "none") {
    var d = a.float === "left" ? "left" : "right";
    return l && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return r && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || c >= i && o[Lt] === "none" || l && o[Lt] === "none" && c + f > i) ? "vertical" : "horizontal";
}, xi = function(e, n, o) {
  var i = o ? e.left : e.top, r = o ? e.right : e.bottom, l = o ? e.width : e.height, a = o ? n.left : n.top, s = o ? n.right : n.bottom, c = o ? n.width : n.height;
  return i === a || r === s || i + l / 2 === a + c / 2;
}, Ti = function(e, n) {
  var o;
  return ot.some(function(i) {
    var r = i[G].options.emptyInsertThreshold;
    if (!(!r || Dt(i))) {
      var l = $(i), a = e >= l.left - r && e <= l.right + r, s = n >= l.top - r && n <= l.bottom + r;
      if (a && s)
        return o = i;
    }
  }), o;
}, Qt = function(e) {
  function n(r, l) {
    return function(a, s, c, f) {
      var d = a.options.group.name && s.options.group.name && a.options.group.name === s.options.group.name;
      if (r == null && (l || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (l && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(a, s, c, f), l)(a, s, c, f);
      var g = (l ? a : s).options.group.name;
      return r === !0 || typeof r == "string" && r === g || r.join && r.indexOf(g) > -1;
    };
  }
  var o = {}, i = e.group;
  (!i || qe(i) != "object") && (i = {
    name: i
  }), o.name = i.name, o.checkPull = n(i.pull, !0), o.checkPut = n(i.put), o.revertClone = i.revertClone, e.group = o;
}, Jt = function() {
  !qt && y && C(y, "display", "none");
}, en = function() {
  !qt && y && C(y, "display", "");
};
lt && document.addEventListener("click", function(t) {
  if (nt)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), nt = !1, !1;
}, !0);
var De = function(e) {
  if (u) {
    e = e.touches ? e.touches[0] : e;
    var n = Ti(e.clientX, e.clientY);
    if (n) {
      var o = {};
      for (var i in e)
        e.hasOwnProperty(i) && (o[i] = e[i]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[G]._onDragOver(o);
    }
  }
}, ki = function(e) {
  u && u.parentNode[G]._isOutsideThisEl(e.target);
};
function w(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = fe({}, e), t[G] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Kt(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(l, a) {
      l.setData("Text", a.textContent);
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
    supportPointer: w.supportPointer !== !1 && "PointerEvent" in window && !He,
    emptyInsertThreshold: 5
  };
  Ze.initializePlugins(this, t, n);
  for (var o in n)
    !(o in e) && (e[o] = n[o]);
  Qt(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : Si, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? k(t, "pointerdown", this._onTapStart) : (k(t, "mousedown", this._onTapStart), k(t, "touchstart", this._onTapStart)), this.nativeDraggable && (k(t, "dragover", this), k(t, "dragenter", this)), ot.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), fe(this, Ci());
}
w.prototype = /** @lends Sortable.prototype */
{
  constructor: w,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (ke = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, u) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, o = this.el, i = this.options, r = i.preventOnFilter, l = e.type, a = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (a || e).target, c = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, f = i.filter;
      if (Li(o), !u && !(/mousedown|pointerdown/.test(l) && e.button !== 0 || i.disabled) && !c.isContentEditable && !(!this.nativeDraggable && He && s && s.tagName.toUpperCase() === "SELECT") && (s = ie(s, i.draggable, o, !1), !(s && s.animated) && Ke !== s)) {
        if (Ne = J(s), ze = J(s, i.draggable), typeof f == "function") {
          if (f.call(this, e, s, this)) {
            R({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), X("filter", n, {
              evt: e
            }), r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(d) {
          if (d = ie(c, d.trim(), o, !1), d)
            return R({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), X("filter", n, {
              evt: e
            }), !0;
        }), f)) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !ie(c, i.handle, o, !1) || this._prepareDragStart(e, a, s);
      }
    }
  },
  _prepareDragStart: function(e, n, o) {
    var i = this, r = i.el, l = i.options, a = r.ownerDocument, s;
    if (o && !u && o.parentNode === r) {
      var c = $(o);
      if (O = r, u = o, N = u.parentNode, Se = u.nextSibling, Ke = o, We = l.group, w.dragged = u, Ee = {
        target: u,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, $t = Ee.clientX - c.left, Pt = Ee.clientY - c.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, u.style["will-change"] = "all", s = function() {
        if (X("delayEnded", i, {
          evt: e
        }), w.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Ot && i.nativeDraggable && (u.draggable = !0), i._triggerDragStart(e, n), R({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), W(u, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(f) {
        Wt(u, f.trim(), ft);
      }), k(a, "dragover", De), k(a, "mousemove", De), k(a, "touchmove", De), k(a, "mouseup", i._onDrop), k(a, "touchend", i._onDrop), k(a, "touchcancel", i._onDrop), Ot && this.nativeDraggable && (this.options.touchStartThreshold = 4, u.draggable = !0), X("delayStart", this, {
        evt: e
      }), l.delay && (!l.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Ye || he))) {
        if (w.eventCanceled) {
          this._onDrop();
          return;
        }
        k(a, "mouseup", i._disableDelayedDrag), k(a, "touchend", i._disableDelayedDrag), k(a, "touchcancel", i._disableDelayedDrag), k(a, "mousemove", i._delayedDragTouchMoveHandler), k(a, "touchmove", i._delayedDragTouchMoveHandler), l.supportPointer && k(a, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, l.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    u && ft(u), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    T(e, "mouseup", this._disableDelayedDrag), T(e, "touchend", this._disableDelayedDrag), T(e, "touchcancel", this._disableDelayedDrag), T(e, "mousemove", this._delayedDragTouchMoveHandler), T(e, "touchmove", this._delayedDragTouchMoveHandler), T(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? k(document, "pointermove", this._onTouchMove) : n ? k(document, "touchmove", this._onTouchMove) : k(document, "mousemove", this._onTouchMove) : (k(u, "dragend", this), k(O, "dragstart", this._onDragStart));
    try {
      document.selection ? Je(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (Ie = !1, O && u) {
      X("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && k(document, "dragover", ki);
      var o = this.options;
      !e && W(u, o.dragClass, !1), W(u, o.ghostClass, !0), w.active = this, e && this._appendGhost(), R({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (te) {
      this._lastX = te.clientX, this._lastY = te.clientY, Jt();
      for (var e = document.elementFromPoint(te.clientX, te.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(te.clientX, te.clientY), e !== n); )
        n = e;
      if (u.parentNode[G]._isOutsideThisEl(e), n)
        do {
          if (n[G]) {
            var o = void 0;
            if (o = n[G]._onDragOver({
              clientX: te.clientX,
              clientY: te.clientY,
              target: e,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      en();
    }
  },
  _onTouchMove: function(e) {
    if (Ee) {
      var n = this.options, o = n.fallbackTolerance, i = n.fallbackOffset, r = e.touches ? e.touches[0] : e, l = y && Me(y, !0), a = y && l && l.a, s = y && l && l.d, c = Ue && H && Mt(H), f = (r.clientX - Ee.clientX + i.x) / (a || 1) + (c ? c[0] - dt[0] : 0) / (a || 1), d = (r.clientY - Ee.clientY + i.y) / (s || 1) + (c ? c[1] - dt[1] : 0) / (s || 1);
      if (!w.active && !Ie) {
        if (o && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < o)
          return;
        this._onDragStart(e, !0);
      }
      if (y) {
        l ? (l.e += f - (ct || 0), l.f += d - (ut || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: d
        };
        var g = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        C(y, "webkitTransform", g), C(y, "mozTransform", g), C(y, "msTransform", g), C(y, "transform", g), ct = f, ut = d, te = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!y) {
      var e = this.options.fallbackOnBody ? document.body : O, n = $(u, !0, Ue, !0, e), o = this.options;
      if (Ue) {
        for (H = e; C(H, "position") === "static" && C(H, "transform") === "none" && H !== document; )
          H = H.parentNode;
        H !== document.body && H !== document.documentElement ? (H === document && (H = le()), n.top += H.scrollTop, n.left += H.scrollLeft) : H = le(), dt = Mt(H);
      }
      y = u.cloneNode(!0), W(y, o.ghostClass, !1), W(y, o.fallbackClass, !0), W(y, o.dragClass, !0), C(y, "transition", ""), C(y, "transform", ""), C(y, "box-sizing", "border-box"), C(y, "margin", 0), C(y, "top", n.top), C(y, "left", n.left), C(y, "width", n.width), C(y, "height", n.height), C(y, "opacity", "0.8"), C(y, "position", Ue ? "absolute" : "fixed"), C(y, "zIndex", "100000"), C(y, "pointerEvents", "none"), w.ghost = y, e.appendChild(y), C(y, "transform-origin", $t / parseInt(y.style.width) * 100 + "% " + Pt / parseInt(y.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var o = this, i = e.dataTransfer, r = o.options;
    if (X("dragStart", this, {
      evt: e
    }), w.eventCanceled) {
      this._onDrop();
      return;
    }
    X("setupClone", this), w.eventCanceled || (A = Gt(u), A.draggable = !1, A.style["will-change"] = "", this._hideClone(), W(A, this.options.chosenClass, !1), w.clone = A), o.cloneId = Je(function() {
      X("clone", o), !w.eventCanceled && (o.options.removeCloneOnHide || O.insertBefore(A, u), o._hideClone(), R({
        sortable: o,
        name: "clone"
      }));
    }), !n && W(u, r.dragClass, !0), n ? (nt = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (T(document, "mouseup", o._onDrop), T(document, "touchend", o._onDrop), T(document, "touchcancel", o._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(o, i, u)), k(document, "drop", o), C(u, "transform", "translateZ(0)")), Ie = !0, o._dragStartId = Je(o._dragStarted.bind(o, n, e)), k(document, "selectstart", o), Le = !0, He && C(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, o = e.target, i, r, l, a = this.options, s = a.group, c = w.active, f = We === s, d = a.sort, g = V || c, p, v = this, x = !1;
    if (bt)
      return;
    function Y(Pe, dn) {
      X(Pe, v, ae({
        evt: e,
        isOwner: f,
        axis: p ? "vertical" : "horizontal",
        revert: l,
        dragRect: i,
        targetRect: r,
        canSort: d,
        fromSortable: g,
        target: o,
        completed: L,
        onMove: function(Tt, fn) {
          return Ge(O, n, u, i, Tt, $(Tt), e, fn);
        },
        changed: Z
      }, dn));
    }
    function q() {
      Y("dragOverAnimationCapture"), v.captureAnimationState(), v !== g && g.captureAnimationState();
    }
    function L(Pe) {
      return Y("dragOverCompleted", {
        insertion: Pe
      }), Pe && (f ? c._hideClone() : c._showClone(v), v !== g && (W(u, V ? V.options.ghostClass : c.options.ghostClass, !1), W(u, a.ghostClass, !0)), V !== v && v !== w.active ? V = v : v === w.active && V && (V = null), g === v && (v._ignoreWhileAnimating = o), v.animateAll(function() {
        Y("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
      }), v !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (o === u && !u.animated || o === n && !o.animated) && (ke = null), !a.dragoverBubble && !e.rootEl && o !== document && (u.parentNode[G]._isOutsideThisEl(e.target), !Pe && De(e)), !a.dragoverBubble && e.stopPropagation && e.stopPropagation(), x = !0;
    }
    function Z() {
      j = J(u), pe = J(u, a.draggable), R({
        sortable: v,
        name: "change",
        toEl: n,
        newIndex: j,
        newDraggableIndex: pe,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), o = ie(o, a.draggable, n, !0), Y("dragOver"), w.eventCanceled)
      return x;
    if (u.contains(e.target) || o.animated && o.animatingX && o.animatingY || v._ignoreWhileAnimating === o)
      return L(!1);
    if (nt = !1, c && !a.disabled && (f ? d || (l = N !== O) : V === this || (this.lastPutMode = We.checkPull(this, c, u, e)) && s.checkPut(this, c, u, e))) {
      if (p = this._getDirection(e, o) === "vertical", i = $(u), Y("dragOverValid"), w.eventCanceled)
        return x;
      if (l)
        return N = O, q(), this._hideClone(), Y("revert"), w.eventCanceled || (Se ? O.insertBefore(u, Se) : O.appendChild(u)), L(!0);
      var K = Dt(n, a.draggable);
      if (!K || Ai(e, p, this) && !K.animated) {
        if (K === u)
          return L(!1);
        if (K && n === e.target && (o = K), o && (r = $(o)), Ge(O, n, u, i, o, r, e, !!o) !== !1)
          return q(), n.appendChild(u), N = n, Z(), L(!0);
      } else if (K && Ni(e, p, this)) {
        var se = $e(n, 0, a, !0);
        if (se === u)
          return L(!1);
        if (o = se, r = $(o), Ge(O, n, u, i, o, r, e, !1) !== !1)
          return q(), n.insertBefore(u, se), N = n, Z(), L(!0);
      } else if (o.parentNode === n) {
        r = $(o);
        var Q = 0, ce, Ce = u.parentNode !== n, z = !xi(u.animated && u.toRect || i, o.animated && o.toRect || r, p), we = p ? "top" : "left", oe = At(o, "top", "top") || At(u, "top", "top"), ye = oe ? oe.scrollTop : void 0;
        ke !== o && (ce = r[we], Xe = !1, je = !z && a.invertSwap || Ce), Q = Mi(e, o, r, p, z ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, je, ke === o);
        var _;
        if (Q !== 0) {
          var D = J(u);
          do
            D -= Q, _ = N.children[D];
          while (_ && (C(_, "display") === "none" || _ === y));
        }
        if (Q === 0 || _ === o)
          return L(!1);
        ke = o, Re = Q;
        var E = o.nextElementSibling, I = !1;
        I = Q === 1;
        var xe = Ge(O, n, u, i, o, r, e, I);
        if (xe !== !1)
          return (xe === 1 || xe === -1) && (I = xe === 1), bt = !0, setTimeout(Oi, 30), q(), I && !E ? n.appendChild(u) : o.parentNode.insertBefore(u, I ? E : o), oe && Ut(oe, 0, ye - oe.scrollTop), N = u.parentNode, ce !== void 0 && !je && (Qe = Math.abs(ce - $(o)[we])), Z(), L(!0);
      }
      if (n.contains(u))
        return L(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    T(document, "mousemove", this._onTouchMove), T(document, "touchmove", this._onTouchMove), T(document, "pointermove", this._onTouchMove), T(document, "dragover", De), T(document, "mousemove", De), T(document, "touchmove", De);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    T(e, "mouseup", this._onDrop), T(e, "touchend", this._onDrop), T(e, "pointerup", this._onDrop), T(e, "touchcancel", this._onDrop), T(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, o = this.options;
    if (j = J(u), pe = J(u, o.draggable), X("drop", this, {
      evt: e
    }), N = u && u.parentNode, j = J(u), pe = J(u, o.draggable), w.eventCanceled) {
      this._nulling();
      return;
    }
    Ie = !1, je = !1, Xe = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ct(this.cloneId), Ct(this._dragStartId), this.nativeDraggable && (T(document, "drop", this), T(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), He && C(document.body, "user-select", ""), C(u, "transform", ""), e && (Le && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()), y && y.parentNode && y.parentNode.removeChild(y), (O === N || V && V.lastPutMode !== "clone") && A && A.parentNode && A.parentNode.removeChild(A), u && (this.nativeDraggable && T(u, "dragend", this), ft(u), u.style["will-change"] = "", Le && !Ie && W(u, V ? V.options.ghostClass : this.options.ghostClass, !1), W(u, this.options.chosenClass, !1), R({
      sortable: this,
      name: "unchoose",
      toEl: N,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), O !== N ? (j >= 0 && (R({
      rootEl: N,
      name: "add",
      toEl: N,
      fromEl: O,
      originalEvent: e
    }), R({
      sortable: this,
      name: "remove",
      toEl: N,
      originalEvent: e
    }), R({
      rootEl: N,
      name: "sort",
      toEl: N,
      fromEl: O,
      originalEvent: e
    }), R({
      sortable: this,
      name: "sort",
      toEl: N,
      originalEvent: e
    })), V && V.save()) : j !== Ne && j >= 0 && (R({
      sortable: this,
      name: "update",
      toEl: N,
      originalEvent: e
    }), R({
      sortable: this,
      name: "sort",
      toEl: N,
      originalEvent: e
    })), w.active && ((j == null || j === -1) && (j = Ne, pe = ze), R({
      sortable: this,
      name: "end",
      toEl: N,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    X("nulling", this), O = u = N = y = Se = A = Ke = _e = Ee = te = Le = j = pe = Ne = ze = ke = Re = V = We = w.dragged = w.ghost = w.clone = w.active = null, it.forEach(function(e) {
      e.checked = !0;
    }), it.length = ct = ut = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        u && (this._onDragOver(e), Ii(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], n, o = this.el.children, i = 0, r = o.length, l = this.options; i < r; i++)
      n = o[i], ie(n, l.draggable, this.el, !1) && e.push(n.getAttribute(l.dataIdAttr) || Pi(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var o = {}, i = this.el;
    this.toArray().forEach(function(r, l) {
      var a = i.children[l];
      ie(a, this.options.draggable, i, !1) && (o[r] = a);
    }, this), n && this.captureAnimationState(), e.forEach(function(r) {
      o[r] && (i.removeChild(o[r]), i.appendChild(o[r]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return ie(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    var o = this.options;
    if (n === void 0)
      return o[e];
    var i = Ze.modifyOption(this, e, n);
    typeof i < "u" ? o[e] = i : o[e] = n, e === "group" && Qt(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    X("destroy", this);
    var e = this.el;
    e[G] = null, T(e, "mousedown", this._onTapStart), T(e, "touchstart", this._onTapStart), T(e, "pointerdown", this._onTapStart), this.nativeDraggable && (T(e, "dragover", this), T(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ot.splice(ot.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!_e) {
      if (X("hideClone", this), w.eventCanceled)
        return;
      C(A, "display", "none"), this.options.removeCloneOnHide && A.parentNode && A.parentNode.removeChild(A), _e = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (_e) {
      if (X("showClone", this), w.eventCanceled)
        return;
      u.parentNode == O && !this.options.group.revertClone ? O.insertBefore(A, u) : Se ? O.insertBefore(A, Se) : O.appendChild(A), this.options.group.revertClone && this.animate(u, A), C(A, "display", ""), _e = !1;
    }
  }
};
function Ii(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Ge(t, e, n, o, i, r, l, a) {
  var s, c = t[G], f = c.options.onMove, d;
  return window.CustomEvent && !he && !Ye ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || $(e), s.willInsertAfter = a, s.originalEvent = l, t.dispatchEvent(s), f && (d = f.call(c, s, l)), d;
}
function ft(t) {
  t.draggable = !1;
}
function Oi() {
  bt = !1;
}
function Ni(t, e, n) {
  var o = $($e(n.el, 0, n.options, !0)), i = 10;
  return e ? t.clientX < o.left - i || t.clientY < o.top && t.clientX < o.right : t.clientY < o.top - i || t.clientY < o.bottom && t.clientX < o.left;
}
function Ai(t, e, n) {
  var o = $(Dt(n.el, n.options.draggable)), i = 10;
  return e ? t.clientX > o.right + i || t.clientX <= o.right && t.clientY > o.bottom && t.clientX >= o.left : t.clientX > o.right && t.clientY > o.top || t.clientX <= o.right && t.clientY > o.bottom + i;
}
function Mi(t, e, n, o, i, r, l, a) {
  var s = o ? t.clientY : t.clientX, c = o ? n.height : n.width, f = o ? n.top : n.left, d = o ? n.bottom : n.right, g = !1;
  if (!l) {
    if (a && Qe < c * i) {
      if (!Xe && (Re === 1 ? s > f + c * r / 2 : s < d - c * r / 2) && (Xe = !0), Xe)
        g = !0;
      else if (Re === 1 ? s < f + Qe : s > d - Qe)
        return -Re;
    } else if (s > f + c * (1 - i) / 2 && s < d - c * (1 - i) / 2)
      return $i(e);
  }
  return g = g || l, g && (s < f + c * r / 2 || s > d - c * r / 2) ? s > f + c / 2 ? 1 : -1 : 0;
}
function $i(t) {
  return J(u) < J(t) ? 1 : -1;
}
function Pi(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--; )
    o += e.charCodeAt(n);
  return o.toString(36);
}
function Li(t) {
  it.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && it.push(o);
  }
}
function Je(t) {
  return setTimeout(t, 0);
}
function Ct(t) {
  return clearTimeout(t);
}
lt && k(document, "touchmove", function(t) {
  (w.active || Ie) && t.cancelable && t.preventDefault();
});
w.utils = {
  on: k,
  off: T,
  css: C,
  find: Wt,
  is: function(e, n) {
    return !!ie(e, n, e, !1);
  },
  extend: _i,
  throttle: jt,
  closest: ie,
  toggleClass: W,
  clone: Gt,
  index: J,
  nextTick: Je,
  cancelNextTick: Ct,
  detectDirection: Kt,
  getChild: $e
};
w.get = function(t) {
  return t[G];
};
w.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (w.utils = ae(ae({}, w.utils), o.utils)), Ze.mount(o);
  });
};
w.create = function(t, e) {
  return new w(t, e);
};
w.version = mi;
var M = [], Ve, wt, yt = !1, ht, mt, rt, Fe;
function Vi() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var o = n.originalEvent;
      this.sortable.nativeDraggable ? k(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? k(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? k(document, "touchmove", this._handleFallbackAutoScroll) : k(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? T(document, "dragover", this._handleAutoScroll) : (T(document, "pointermove", this._handleFallbackAutoScroll), T(document, "touchmove", this._handleFallbackAutoScroll), T(document, "mousemove", this._handleFallbackAutoScroll)), Vt(), et(), bi();
    },
    nulling: function() {
      rt = wt = Ve = yt = Fe = ht = mt = null, M.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var i = this, r = (n.touches ? n.touches[0] : n).clientX, l = (n.touches ? n.touches[0] : n).clientY, a = document.elementFromPoint(r, l);
      if (rt = n, o || this.options.forceAutoScrollFallback || Ye || he || He) {
        gt(n, this.options, a, o);
        var s = be(a, !0);
        yt && (!Fe || r !== ht || l !== mt) && (Fe && Vt(), Fe = setInterval(function() {
          var c = be(document.elementFromPoint(r, l), !0);
          c !== s && (s = c, et()), gt(n, i.options, c, o);
        }, 10), ht = r, mt = l);
      } else {
        if (!this.options.bubbleScroll || be(a, !0) === le()) {
          et();
          return;
        }
        gt(n, this.options, be(a, !1), !1);
      }
    }
  }, fe(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function et() {
  M.forEach(function(t) {
    clearInterval(t.pid);
  }), M = [];
}
function Vt() {
  clearInterval(Fe);
}
var gt = jt(function(t, e, n, o) {
  if (e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, r = (t.touches ? t.touches[0] : t).clientY, l = e.scrollSensitivity, a = e.scrollSpeed, s = le(), c = !1, f;
    wt !== n && (wt = n, et(), Ve = e.scroll, f = e.scrollFn, Ve === !0 && (Ve = be(n, !0)));
    var d = 0, g = Ve;
    do {
      var p = g, v = $(p), x = v.top, Y = v.bottom, q = v.left, L = v.right, Z = v.width, K = v.height, se = void 0, Q = void 0, ce = p.scrollWidth, Ce = p.scrollHeight, z = C(p), we = p.scrollLeft, oe = p.scrollTop;
      p === s ? (se = Z < ce && (z.overflowX === "auto" || z.overflowX === "scroll" || z.overflowX === "visible"), Q = K < Ce && (z.overflowY === "auto" || z.overflowY === "scroll" || z.overflowY === "visible")) : (se = Z < ce && (z.overflowX === "auto" || z.overflowX === "scroll"), Q = K < Ce && (z.overflowY === "auto" || z.overflowY === "scroll"));
      var ye = se && (Math.abs(L - i) <= l && we + Z < ce) - (Math.abs(q - i) <= l && !!we), _ = Q && (Math.abs(Y - r) <= l && oe + K < Ce) - (Math.abs(x - r) <= l && !!oe);
      if (!M[d])
        for (var D = 0; D <= d; D++)
          M[D] || (M[D] = {});
      (M[d].vx != ye || M[d].vy != _ || M[d].el !== p) && (M[d].el = p, M[d].vx = ye, M[d].vy = _, clearInterval(M[d].pid), (ye != 0 || _ != 0) && (c = !0, M[d].pid = setInterval((function() {
        o && this.layer === 0 && w.active._onTouchMove(rt);
        var E = M[this.layer].vy ? M[this.layer].vy * a : 0, I = M[this.layer].vx ? M[this.layer].vx * a : 0;
        typeof f == "function" && f.call(w.dragged.parentNode[G], I, E, t, rt, M[this.layer].el) !== "continue" || Ut(M[this.layer].el, I, E);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && g !== s && (g = be(g, !1)));
    yt = c;
  }
}, 30), tn = function(e) {
  var n = e.originalEvent, o = e.putSortable, i = e.dragEl, r = e.activeSortable, l = e.dispatchSortableEvent, a = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (n) {
    var c = o || r;
    a();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(f.clientX, f.clientY);
    s(), c && !c.el.contains(d) && (l("spill"), this.onSpill({
      dragEl: i,
      putSortable: o
    }));
  }
};
function St() {
}
St.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var i = $e(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: tn
};
fe(St, {
  pluginName: "revertOnSpill"
});
function xt() {
}
xt.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable, i = o || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: tn
};
fe(xt, {
  pluginName: "removeOnSpill"
});
w.mount(new Vi());
w.mount(xt, St);
function pt(t) {
  t.parentElement !== null && t.parentElement.removeChild(t);
}
function Ft(t, e, n) {
  const o = n === 0 ? t.children[0] : t.children[n - 1].nextSibling;
  t.insertBefore(e, o);
}
function Fi() {
  return typeof window < "u" ? window.console : global.console;
}
const Hi = Fi();
function Bi(t) {
  const e = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return e[o] || (e[o] = t(o));
  };
}
const zi = /-(\w)/g, Ri = Bi((t) => t.replace(zi, (e, n) => n.toUpperCase())), nn = ["Start", "Add", "Remove", "Update", "End"], on = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], rn = ["Move"], Xi = [rn, nn, on].flatMap((t) => t).map((t) => `on${t}`), Et = {
  manage: rn,
  manageAndEmit: nn,
  emit: on
};
function Yi(t) {
  return Xi.indexOf(t) !== -1;
}
const Zi = [
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
function Wi(t) {
  return Zi.includes(t);
}
function ji(t) {
  return ["transition-group", "TransitionGroup"].includes(t);
}
function ln(t) {
  return ["id", "class", "role", "style"].includes(t) || t.startsWith("data-") || t.startsWith("aria-") || t.startsWith("on");
}
function an(t) {
  return t.reduce((e, [n, o]) => (e[n] = o, e), {});
}
function Ui({ $attrs: t, componentData: e = {} }) {
  return {
    ...an(
      Object.entries(t).filter(([o, i]) => ln(o))
    ),
    ...e
  };
}
function Gi({ $attrs: t, callBackBuilder: e }) {
  const n = an(sn(t));
  Object.entries(e).forEach(([i, r]) => {
    Et[i].forEach((l) => {
      n[`on${l}`] = r(l);
    });
  });
  const o = `[data-draggable]${n.draggable || ""}`;
  return {
    ...n,
    draggable: o
  };
}
function sn(t) {
  return Object.entries(t).filter(([e, n]) => !ln(e)).map(([e, n]) => [Ri(e), n]).filter(([e, n]) => !Yi(e));
}
const Ht = ({ el: t }) => t, qi = (t, e) => t.__draggable_context = e, Bt = (t) => t.__draggable_context;
class Ki {
  constructor({
    nodes: { header: e, default: n, footer: o },
    root: i,
    realList: r
  }) {
    this.defaultNodes = n, this.children = [...e, ...n, ...o], this.externalComponent = i.externalComponent, this.rootTransition = i.transition, this.tag = i.tag, this.realList = r;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(e, n) {
    const { tag: o, children: i, _isRootComponent: r } = this;
    return e(o, n, r ? { default: () => i } : i);
  }
  updated() {
    const { defaultNodes: e, realList: n } = this;
    e.forEach((o, i) => {
      qi(Ht(o), {
        element: n[i],
        index: i
      });
    });
  }
  getUnderlyingVm(e) {
    return Bt(e);
  }
  getVmIndexFromDomIndex(e, n) {
    const { defaultNodes: o } = this, { length: i } = o, r = n.children, l = r.item(e);
    if (l === null)
      return i;
    const a = Bt(l);
    if (a)
      return a.index;
    if (i === 0)
      return 0;
    const s = Ht(o[0]), c = [...r].findIndex(
      (f) => f === s
    );
    return e < c ? 0 : i;
  }
}
function Qi(t, e) {
  const n = t[e];
  return n ? n() : [];
}
function Ji({ $slots: t, realList: e, getKey: n }) {
  const o = e || [], [i, r] = ["header", "footer"].map(
    (s) => Qi(t, s)
  ), { item: l } = t;
  if (!l)
    throw new Error("draggable element must have an item slot");
  const a = o.flatMap(
    (s, c) => l({ element: s, index: c }).map((f) => (f.key = n(s), f.props = { ...f.props || {}, "data-draggable": !0 }, f))
  );
  if (a.length !== o.length)
    throw new Error("Item slot must have only one child");
  return {
    header: i,
    footer: r,
    default: a
  };
}
function er(t) {
  const e = ji(t), n = !Wi(t) && !e;
  return {
    transition: e,
    externalComponent: n,
    tag: n ? wn(t) : e ? yn : t
  };
}
function tr({ $slots: t, tag: e, realList: n, getKey: o }) {
  const i = Ji({ $slots: t, realList: n, getKey: o }), r = er(e);
  return new Ki({ nodes: i, root: r, realList: n });
}
function cn(t, e) {
  zt(() => this.$emit(t.toLowerCase(), e));
}
function un(t) {
  return (e, n) => {
    if (this.realList !== null)
      return this[`onDrag${t}`](e, n);
  };
}
function nr(t) {
  const e = un.call(this, t);
  return (n, o) => {
    e.call(this, n, o), cn.call(this, t, n);
  };
}
let vt = null;
const or = {
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
    default: (t) => t
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
}, ir = [
  "update:modelValue",
  "change",
  ...[...Et.manageAndEmit, ...Et.emit].map((t) => t.toLowerCase())
], rr = En({
  name: "draggable",
  inheritAttrs: !1,
  props: or,
  emits: ir,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: t, $attrs: e, tag: n, componentData: o, realList: i, getKey: r } = this, l = tr({
        $slots: t,
        tag: n,
        realList: i,
        getKey: r
      });
      this.componentStructure = l;
      const a = Ui({ $attrs: e, componentData: o });
      return l.render(kt, a);
    } catch (t) {
      return this.error = !0, kt("pre", { style: { color: "red" } }, t.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && Hi.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: t, $el: e, componentStructure: n } = this;
    n.updated();
    const o = Gi({
      $attrs: t,
      callBackBuilder: {
        manageAndEmit: (r) => nr.call(this, r),
        emit: (r) => cn.bind(this, r),
        manage: (r) => un.call(this, r)
      }
    }), i = e.nodeType === 1 ? e : e.parentElement;
    this._sortable = new w(i, o), this.targetDomElement = i, i.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: t } = this;
      return t || this.modelValue;
    },
    getKey() {
      const { itemKey: t } = this;
      return typeof t == "function" ? t : (e) => e[t];
    }
  },
  watch: {
    $attrs: {
      handler(t) {
        const { _sortable: e } = this;
        e && sn(t).forEach(([n, o]) => {
          e.option(n, o);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(t) {
      return this.componentStructure.getUnderlyingVm(t) || null;
    },
    getUnderlyingPotencialDraggableComponent(t) {
      return t.__draggable_component__;
    },
    emitChanges(t) {
      zt(() => this.$emit("change", t));
    },
    alterList(t) {
      if (this.list) {
        t(this.list);
        return;
      }
      const e = [...this.modelValue];
      t(e), this.$emit("update:modelValue", e);
    },
    spliceList() {
      const t = (e) => e.splice(...arguments);
      this.alterList(t);
    },
    updatePosition(t, e) {
      const n = (o) => o.splice(e, 0, o.splice(t, 1)[0]);
      this.alterList(n);
    },
    getRelatedContextFromMoveEvent({ to: t, related: e }) {
      const n = this.getUnderlyingPotencialDraggableComponent(t);
      if (!n)
        return { component: n };
      const o = n.realList, i = { list: o, component: n };
      return t !== e && o ? { ...n.getUnderlyingVm(e) || {}, ...i } : i;
    },
    getVmIndexFromDomIndex(t) {
      return this.componentStructure.getVmIndexFromDomIndex(
        t,
        this.targetDomElement
      );
    },
    onDragStart(t) {
      this.context = this.getUnderlyingVm(t.item), t.item._underlying_vm_ = this.clone(this.context.element), vt = t.item;
    },
    onDragAdd(t) {
      const e = t.item._underlying_vm_;
      if (e === void 0)
        return;
      pt(t.item);
      const n = this.getVmIndexFromDomIndex(t.newIndex);
      this.spliceList(n, 0, e);
      const o = { element: e, newIndex: n };
      this.emitChanges({ added: o });
    },
    onDragRemove(t) {
      if (Ft(this.$el, t.item, t.oldIndex), t.pullMode === "clone") {
        pt(t.clone);
        return;
      }
      const { index: e, element: n } = this.context;
      this.spliceList(e, 1);
      const o = { element: n, oldIndex: e };
      this.emitChanges({ removed: o });
    },
    onDragUpdate(t) {
      pt(t.item), Ft(t.from, t.item, t.oldIndex);
      const e = this.context.index, n = this.getVmIndexFromDomIndex(t.newIndex);
      this.updatePosition(e, n);
      const o = { element: this.context.element, oldIndex: e, newIndex: n };
      this.emitChanges({ moved: o });
    },
    computeFutureIndex(t, e) {
      if (!t.element)
        return 0;
      const n = [...e.to.children].filter(
        (l) => l.style.display !== "none"
      ), o = n.indexOf(e.related), i = t.component.getVmIndexFromDomIndex(
        o
      );
      return n.indexOf(vt) !== -1 || !e.willInsertAfter ? i : i + 1;
    },
    onDragMove(t, e) {
      const { move: n, realList: o } = this;
      if (!n || !o)
        return !0;
      const i = this.getRelatedContextFromMoveEvent(t), r = this.computeFutureIndex(i, t), l = {
        ...this.context,
        futureIndex: r
      }, a = {
        ...t,
        relatedContext: i,
        draggedContext: l
      };
      return n(a, e);
    },
    onDragEnd() {
      vt = null;
    }
  }
}), lr = { class: "settings-modal" }, ar = ["textContent"], sr = ["textContent"], cr = { class: "column-settings-list" }, ur = { class: "list-item" }, dr = { class: "actions-container" }, fr = ["textContent"], hr = ["textContent"], mr = {
  __name: "ColumnSettingsModal",
  props: {
    columns: {
      type: Array,
      required: !0
    }
  },
  emits: ["save", "close"],
  setup(t, { emit: e }) {
    const n = e, o = t;
    let i = P([]);
    function r() {
      n("save", i.value);
    }
    return o.columns.forEach((l) => i.value.push({ ...l })), (l, a) => (h(), ve(Xt, null, {
      default: _t(() => [
        m("div", lr, [
          m("div", {
            class: "settings-modal-title",
            textContent: B(S(F).getTranslate("column_settings_modal.title"))
          }, null, 8, ar),
          m("div", {
            class: "settings-modal-description",
            textContent: B(S(F).getTranslate("column_settings_modal.description"))
          }, null, 8, sr),
          m("div", cr, [
            ne(S(rr), {
              modelValue: S(i),
              "onUpdate:modelValue": a[0] || (a[0] = (s) => ue(i) ? i.value = s : i = s),
              "item-key": "key",
              animation: 300
            }, {
              item: _t(({ element: s }) => [
                m("div", ur, [
                  ne(ui, {
                    label: s.label,
                    "model-value": s.visible,
                    "onUpdate:modelValue": (c) => s.visible = c
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"]),
                  ne(U, {
                    icon: "drag-indicator",
                    class: "drag-indicator-icon"
                  })
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          m("div", dr, [
            m("div", {
              class: "button button-cancel",
              onClick: a[1] || (a[1] = (s) => n("close")),
              textContent: B(S(F).getTranslate("column_settings_modal.actions.cancel"))
            }, null, 8, fr),
            m("div", {
              class: "button button-confirm",
              onClick: r,
              textContent: B(S(F).getTranslate("column_settings_modal.actions.save"))
            }, null, 8, hr)
          ])
        ])
      ]),
      _: 1
    }));
  }
}, gr = { class: "table-controls" }, pr = /* @__PURE__ */ m("div", { class: "divider" }, null, -1), vr = { class: "settings-container" }, xr = {
  __name: "TableControls",
  setup(t) {
    let e = P("small"), n = P("black"), o = P(!1), i = P(!1), r = [], l = P(!1), a = Rt();
    function s() {
      l.value = !l.value, a.triggerEvent("toggle-search-event");
    }
    function c(g, p) {
      e.value = g, n.value = p, a.triggerEvent("update-table-style-event", { newRowSize: g, newDigitsColor: p }), o.value = !1;
    }
    function f(g) {
      r = g, a.triggerEvent("update-table-columns-event", g), i.value = !1;
    }
    function d(g) {
      r = g;
    }
    return a.addEventHandler("sync-table-columns-event", d), (g, p) => (h(), b("div", null, [
      m("div", gr, [
        m("div", {
          onClick: s,
          class: Ae(["search-button", S(l) ? "active" : "inactive"])
        }, [
          ne(U, {
            icon: "search",
            class: "search-icon"
          })
        ], 2),
        pr,
        m("div", vr, [
          m("div", {
            onClick: p[0] || (p[0] = (v) => ue(i) ? i.value = !0 : i = !0),
            class: "setting"
          }, [
            ne(U, {
              icon: "columns",
              class: "setting-icon"
            })
          ]),
          m("div", {
            onClick: p[1] || (p[1] = (v) => ue(o) ? o.value = !0 : o = !0),
            class: "setting"
          }, [
            ne(U, {
              icon: "settings",
              class: "setting-icon"
            })
          ])
        ])
      ]),
      S(o) ? (h(), ve(ii, {
        key: 0,
        "row-size-value": S(e),
        "digits-color-value": S(n),
        onSave: c,
        onClose: p[2] || (p[2] = (v) => ue(o) ? o.value = !1 : o = !1)
      }, null, 8, ["row-size-value", "digits-color-value"])) : re("", !0),
      S(i) ? (h(), ve(mr, {
        key: 1,
        columns: S(r),
        onClose: p[3] || (p[3] = (v) => ue(i) ? i.value = !1 : i = !1),
        onSave: f
      }, null, 8, ["columns"])) : re("", !0)
    ]));
  }
}, _r = "Search...", br = {
  title: "Column order and visibility",
  description: "Changes the order and visibility of columns in the following settings:",
  actions: {
    save: "Save",
    cancel: "Cancel"
  }
}, Cr = {
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
}, wr = {
  search: _r,
  column_settings_modal: br,
  style_settings_modal: Cr
};
function yr(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, n) {
    var o = t.get(e);
    o && o.push(n) || t.set(e, [n]);
  }, off: function(e, n) {
    var o = t.get(e);
    o && o.splice(o.indexOf(n) >>> 0, 1);
  }, emit: function(e, n) {
    (t.get(e) || []).slice().map(function(o) {
      o(n);
    }), (t.get("*") || []).slice().map(function(o) {
      o(e, n);
    });
  } };
}
window.__vue3TableDataConfig = {
  mitt: yr(),
  translation: {
    file: wr,
    setTranslate: (t) => F.setTranslateFile(t)
  }
};
export {
  xr as TableControls,
  Sr as TableData
};

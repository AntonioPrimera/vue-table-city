var _n = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var It = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
};
var Ot = (t, e, n) => (_n(t, e, "access private method"), n);
import { openBlock as h, createElementBlock as _, createElementVNode as g, createCommentVNode as ie, ref as P, reactive as bn, watch as Cn, computed as Ie, onMounted as yn, Fragment as me, renderList as ge, normalizeClass as Ne, toDisplayString as z, createVNode as ne, unref as D, renderSlot as Yt, createTextVNode as wn, onUnmounted as En, withModifiers as Dn, createBlock as ve, withCtx as bt, isRef as ue, withDirectives as Sn, vModelCheckbox as xn, resolveComponent as Tn, TransitionGroup as kn, defineComponent as In, h as Nt, nextTick as Zt } from "vue";
const On = { key: 0 }, Nn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, An = { key: 1 }, Mn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, $n = { key: 2 }, Pn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Ln = { key: 3 }, Vn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Fn = { key: 4 }, Hn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Bn = { key: 5 }, zn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Rn = { key: 6 }, Xn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Yn = { key: 7 }, Zn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Wn = { key: 8 }, Un = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Gn = { key: 9 }, jn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, qn = { key: 10 }, Kn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Qn = { key: 11 }, Jn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, eo = { key: 12 }, to = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 6 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, j = {
  __name: "Icon",
  props: {
    icon: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return (e, n) => t.icon === "minus" ? (h(), _("div", On, [
      (h(), _("svg", Nn, n[0] || (n[0] = [
        g("path", {
          d: "M16.6667 9.16797H3.33333C2.87333 9.16797 2.5 9.5413 2.5 10.0013C2.5 10.4613 2.87333 10.8346 3.33333 10.8346H16.6667C17.1267 10.8346 17.5 10.4613 17.5 10.0013C17.5 9.5413 17.1267 9.16797 16.6667 9.16797Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : t.icon === "plus" ? (h(), _("div", An, [
      (h(), _("svg", Mn, n[1] || (n[1] = [
        g("path", {
          d: "M11.3333 5.33333H6.66667V0.666667C6.66667 0.298667 6.368 0 6 0C5.632 0 5.33333 0.298667 5.33333 0.666667V5.33333H0.666667C0.298667 5.33333 0 5.632 0 6C0 6.368 0.298667 6.66667 0.666667 6.66667H5.33333V11.3333C5.33333 11.7013 5.632 12 6 12C6.368 12 6.66667 11.7013 6.66667 11.3333V6.66667H11.3333C11.7013 6.66667 12 6.368 12 6C12 5.632 11.7013 5.33333 11.3333 5.33333Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : t.icon === "radio-circle" ? (h(), _("div", $n, [
      (h(), _("svg", Pn, n[2] || (n[2] = [
        g("circle", {
          cx: "9",
          cy: "9",
          r: "8.25",
          fill: "white",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1)
      ])))
    ])) : t.icon === "radio-circle-selected" ? (h(), _("div", Ln, [
      (h(), _("svg", Vn, n[3] || (n[3] = [
        g("circle", {
          cx: "9",
          cy: "9",
          r: "8.25",
          fill: "white",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1),
        g("circle", {
          cx: "9",
          cy: "9",
          r: "5",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : t.icon === "small-row" ? (h(), _("div", Fn, [
      (h(), _("svg", Hn, n[4] || (n[4] = [
        g("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.07997 7.07993V8.91993H12.92V7.07993H3.07997ZM2.21457 5.94512C2.45226 5.79232 2.73965 5.71992 3.02219 5.71992H12.9777C13.2603 5.71992 13.5477 5.79232 13.7854 5.94512C14.0156 6.09316 14.28 6.37949 14.28 6.79993V9.19993C14.28 9.62036 14.0156 9.90669 13.7854 10.0547C13.5477 10.2075 13.2603 10.2799 12.9777 10.2799H3.02219C2.73965 10.2799 2.45226 10.2075 2.21457 10.0547C1.9843 9.9067 1.71997 9.62036 1.71997 9.19993V6.79993C1.71997 6.37949 1.9843 6.09316 2.21457 5.94512Z",
          fill: "black"
        }, null, -1)
      ])))
    ])) : t.icon === "medium-row" ? (h(), _("div", Bn, [
      (h(), _("svg", zn, n[5] || (n[5] = [
        g("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.07997 6.27992V9.71992H12.92V6.27992H3.07997ZM1.71997 6.19992C1.71997 5.47007 2.32669 4.91992 3.02219 4.91992H12.9777C13.6732 4.91992 14.28 5.47007 14.28 6.19992V9.79992C14.28 10.5298 13.6732 11.0799 12.9777 11.0799H3.02219C2.32669 11.0799 1.71997 10.5298 1.71997 9.79992V6.19992Z",
          fill: "black"
        }, null, -1)
      ])))
    ])) : t.icon === "large-row" ? (h(), _("div", Rn, [
      (h(), _("svg", Xn, n[6] || (n[6] = [
        g("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.10301 5.47992C3.09154 5.50566 3.07997 5.54589 3.07997 5.59992V10.3999C3.07997 10.454 3.09154 10.4942 3.10301 10.5199H12.8969C12.9084 10.4942 12.92 10.454 12.92 10.3999V5.59992C12.92 5.54589 12.9084 5.50566 12.8969 5.47992H3.10301ZM1.71997 5.59992C1.71997 4.95171 2.15403 4.11992 3.02219 4.11992H12.9777C13.8459 4.11992 14.28 4.95171 14.28 5.59992V10.3999C14.28 11.0481 13.8459 11.8799 12.9777 11.8799H3.02219C2.15403 11.8799 1.71997 11.0481 1.71997 10.3999V5.59992Z",
          fill: "black"
        }, null, -1)
      ])))
    ])) : t.icon === "check" ? (h(), _("div", Yn, [
      (h(), _("svg", Zn, n[7] || (n[7] = [
        g("rect", {
          width: "18",
          height: "18",
          rx: "4",
          fill: "#5664E1"
        }, null, -1),
        g("path", {
          d: "M14.2203 4.89348C14.0471 4.89864 13.8827 4.97103 13.762 5.0953L6.9 11.9573L4.70469 9.76197C4.64326 9.69799 4.56968 9.6469 4.48826 9.61171C4.40684 9.57652 4.31922 9.55793 4.23052 9.55703C4.14183 9.55613 4.05385 9.57293 3.97173 9.60646C3.88961 9.63998 3.81501 9.68956 3.75229 9.75228C3.68957 9.815 3.64 9.8896 3.60647 9.97172C3.57294 10.0538 3.55614 10.1418 3.55704 10.2305C3.55794 10.3192 3.57653 10.4068 3.61172 10.4882C3.64691 10.5697 3.698 10.6432 3.76198 10.7047L6.42864 13.3713C6.55367 13.4963 6.72322 13.5665 6.9 13.5665C7.07678 13.5665 7.24632 13.4963 7.37135 13.3713L14.7047 6.03801C14.801 5.94437 14.8668 5.82381 14.8935 5.69213C14.9201 5.56045 14.9063 5.42379 14.854 5.30007C14.8016 5.17634 14.7131 5.07132 14.6 4.99877C14.487 4.92622 14.3546 4.88952 14.2203 4.89348Z",
          fill: "white"
        }, null, -1)
      ])))
    ])) : t.icon === "drag-indicator" ? (h(), _("div", Wn, [
      (h(), _("svg", Un, n[8] || (n[8] = [
        g("path", {
          d: "M5.99984 13.3334C5.63317 13.3334 5.31928 13.2029 5.05817 12.9417C4.79706 12.6806 4.6665 12.3667 4.6665 12.0001C4.6665 11.6334 4.79706 11.3195 5.05817 11.0584C5.31928 10.7973 5.63317 10.6667 5.99984 10.6667C6.3665 10.6667 6.68039 10.7973 6.9415 11.0584C7.20261 11.3195 7.33317 11.6334 7.33317 12.0001C7.33317 12.3667 7.20261 12.6806 6.9415 12.9417C6.68039 13.2029 6.3665 13.3334 5.99984 13.3334ZM9.99984 13.3334C9.63317 13.3334 9.31928 13.2029 9.05817 12.9417C8.79706 12.6806 8.6665 12.3667 8.6665 12.0001C8.6665 11.6334 8.79706 11.3195 9.05817 11.0584C9.31928 10.7973 9.63317 10.6667 9.99984 10.6667C10.3665 10.6667 10.6804 10.7973 10.9415 11.0584C11.2026 11.3195 11.3332 11.6334 11.3332 12.0001C11.3332 12.3667 11.2026 12.6806 10.9415 12.9417C10.6804 13.2029 10.3665 13.3334 9.99984 13.3334ZM5.99984 9.33342C5.63317 9.33342 5.31928 9.20286 5.05817 8.94175C4.79706 8.68064 4.6665 8.36675 4.6665 8.00008C4.6665 7.63341 4.79706 7.31953 5.05817 7.05841C5.31928 6.7973 5.63317 6.66675 5.99984 6.66675C6.3665 6.66675 6.68039 6.7973 6.9415 7.05841C7.20261 7.31953 7.33317 7.63341 7.33317 8.00008C7.33317 8.36675 7.20261 8.68064 6.9415 8.94175C6.68039 9.20286 6.3665 9.33342 5.99984 9.33342ZM9.99984 9.33342C9.63317 9.33342 9.31928 9.20286 9.05817 8.94175C8.79706 8.68064 8.6665 8.36675 8.6665 8.00008C8.6665 7.63341 8.79706 7.31953 9.05817 7.05841C9.31928 6.7973 9.63317 6.66675 9.99984 6.66675C10.3665 6.66675 10.6804 6.7973 10.9415 7.05841C11.2026 7.31953 11.3332 7.63341 11.3332 8.00008C11.3332 8.36675 11.2026 8.68064 10.9415 8.94175C10.6804 9.20286 10.3665 9.33342 9.99984 9.33342ZM5.99984 5.33341C5.63317 5.33341 5.31928 5.20286 5.05817 4.94175C4.79706 4.68064 4.6665 4.36675 4.6665 4.00008C4.6665 3.63341 4.79706 3.31953 5.05817 3.05841C5.31928 2.7973 5.63317 2.66675 5.99984 2.66675C6.3665 2.66675 6.68039 2.7973 6.9415 3.05841C7.20261 3.31953 7.33317 3.63341 7.33317 4.00008C7.33317 4.36675 7.20261 4.68064 6.9415 4.94175C6.68039 5.20286 6.3665 5.33341 5.99984 5.33341ZM9.99984 5.33341C9.63317 5.33341 9.31928 5.20286 9.05817 4.94175C8.79706 4.68064 8.6665 4.36675 8.6665 4.00008C8.6665 3.63341 8.79706 3.31953 9.05817 3.05841C9.31928 2.7973 9.63317 2.66675 9.99984 2.66675C10.3665 2.66675 10.6804 2.7973 10.9415 3.05841C11.2026 3.31953 11.3332 3.63341 11.3332 4.00008C11.3332 4.36675 11.2026 4.68064 10.9415 4.94175C10.6804 5.20286 10.3665 5.33341 9.99984 5.33341Z",
          fill: "#303136"
        }, null, -1)
      ])))
    ])) : t.icon === "search" ? (h(), _("div", Gn, [
      (h(), _("svg", jn, n[9] || (n[9] = [
        g("path", {
          d: "M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L19.5859 21.5859C20.1379 22.1379 21.0339 22.1379 21.5859 21.5859C22.1379 21.0339 22.1379 20.1379 21.5859 19.5859L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : t.icon === "columns" ? (h(), _("div", qn, [
      (h(), _("svg", Kn, n[10] || (n[10] = [
        g("path", {
          d: "M2.49984 2.5C2.039 2.5 1.6665 2.8725 1.6665 3.33333V16.6667C1.6665 17.1275 2.039 17.5 2.49984 17.5H5.83317V2.5H2.49984ZM7.49984 2.5V17.5H12.4998V2.5H7.49984ZM14.1665 2.5V17.5H17.4998C17.9607 17.5 18.3332 17.1275 18.3332 16.6667V3.33333C18.3332 2.8725 17.9607 2.5 17.4998 2.5H14.1665Z",
          fill: "#303136"
        }, null, -1)
      ])))
    ])) : t.icon === "settings" ? (h(), _("div", Qn, [
      (h(), _("svg", Jn, n[11] || (n[11] = [
        g("path", {
          d: "M8.74188 1.66669C8.34271 1.66669 8.00149 1.94885 7.92482 2.34052L7.6465 3.76955C6.96253 4.02819 6.3301 4.38952 5.77475 4.8454L4.40431 4.37339C4.02681 4.24339 3.61147 4.39949 3.41147 4.74449L2.15496 6.92222C1.9558 7.26805 2.02828 7.7071 2.32912 7.96877L3.42775 8.92417C3.37061 9.2753 3.33335 9.63276 3.33335 10C3.33335 10.3673 3.37061 10.7247 3.42775 11.0759L2.32912 12.0313C2.02828 12.2929 1.9558 12.732 2.15496 13.0778L3.41147 15.2556C3.61064 15.6014 4.02681 15.7574 4.40431 15.6283L5.77475 15.1563C6.32992 15.6119 6.96284 15.972 7.6465 16.2305L7.92482 17.6595C8.00149 18.0512 8.34271 18.3334 8.74188 18.3334H11.2582C11.6573 18.3334 11.9985 18.0512 12.0752 17.6595L12.3535 16.2305C13.0375 15.9719 13.6699 15.6105 14.2253 15.1546L15.5957 15.6266C15.9732 15.7566 16.3886 15.6014 16.5886 15.2556L17.8451 13.0762C18.0442 12.7304 17.9717 12.2929 17.6709 12.0313L16.5723 11.0759C16.6294 10.7247 16.6667 10.3673 16.6667 10C16.6667 9.63276 16.6294 9.2753 16.5723 8.92417L17.6709 7.96877C17.9717 7.7071 18.0442 7.26805 17.8451 6.92222L16.5886 4.74449C16.3894 4.39865 15.9732 4.2426 15.5957 4.37177L14.2253 4.84377C13.6701 4.38818 13.0372 4.02807 12.3535 3.76955L12.0752 2.34052C11.9985 1.94885 11.6573 1.66669 11.2582 1.66669H8.74188ZM10 6.66669C11.8408 6.66669 13.3333 8.15919 13.3333 10C13.3333 11.8409 11.8408 13.3334 10 13.3334C8.15918 13.3334 6.66668 11.8409 6.66668 10C6.66668 8.15919 8.15918 6.66669 10 6.66669Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : t.icon === "sort" ? (h(), _("div", eo, [
      (h(), _("svg", to, n[12] || (n[12] = [
        g("path", {
          d: "M3.45883 11.9404C3.28486 12.3421 2.71514 12.3421 2.54117 11.9404L0.704461 7.69868C0.561505 7.36854 0.803529 7 1.16329 7L4.83671 7C5.19647 7 5.43849 7.36854 5.29554 7.69868L3.45883 11.9404Z",
          fill: "currentColor"
        }, null, -1),
        g("path", {
          d: "M2.54117 1.05963C2.71514 0.657866 3.28486 0.657866 3.45883 1.05963L5.29554 5.30132C5.43849 5.63146 5.19647 6 4.83671 6L1.16329 6C0.803529 6 0.561506 5.63146 0.704461 5.30132L2.54117 1.05963Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : ie("", !0);
  }
};
function no() {
  let t = P([]), e = P([]);
  const n = 75;
  function o() {
    return t.value;
  }
  function i() {
    return e.value;
  }
  function r(s) {
    t.value = s, e.value = [], l(n);
  }
  function l(s = 30) {
    let u = e.value.length;
    if (u >= t.value.length)
      return;
    let d = t.value.slice(u, u + s);
    e.value = [...e.value, ...d];
  }
  function a() {
    e.value = [], l(n);
  }
  return {
    getAllData: o,
    getLoadedData: i,
    setData: r,
    loadData: l,
    refreshLoadedData: a
  };
}
function Wt() {
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
const H = {
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
}, V = {
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
  },
  getValue(t, e) {
    return e.includes(".") ? e.split(".").reduce((n, o) => n && n[o], t) : t[e];
  }
};
var lt, Ut;
class oo {
  constructor(e, n, o = null, i = !1, r = !0, l = !1, a = !0, s = null, u = null, d = null) {
    //--- Private helpers ---------------------------------------------------------------------------------------------
    // Determine whether this column is numeric (search through all the data in the column)
    It(this, lt);
    this.key = e, this.label = n, this.isNumeric = o, this.isVisible = a, this.isSearchable = i, this.isSortable = r, this.isFilterable = l, this.filter = typeof s == "function" ? s : null, this.mutate = typeof u == "function" ? u : null, this.render = typeof d == "function" ? d : null;
  }
  // Process the rows in the column (mutate the data if needed and determine if the column is numeric)
  processRows(e) {
    let n = [];
    for (let o of e) {
      let i = V.getValue(o, this.key);
      this.mutate && (i = this.mutate(i)), !(this.filter && !this.filter(i)) && n.push(i);
    }
    return this.isNumeric = Ot(this, lt, Ut).call(this, n), n;
  }
}
lt = new WeakSet(), Ut = function(e) {
  return this.isNumeric !== null ? this.isNumeric : e.every((n) => {
    let o = V.getValue(n, this.key);
    return o !== null && typeof o == "number";
  });
};
const io = { class: "table-header" }, ro = { class: "table-header-row" }, lo = ["onClick"], ao = ["textContent"], so = { key: 0 }, uo = { class: "delimiter" }, co = {
  key: 1,
  class: "table-total"
}, fo = {
  key: 2,
  class: "column-search-container"
}, ho = ["onInput", "placeholder"], mo = { class: "table-body" }, go = ["onClick"], nr = {
  __name: "TableData",
  props: {
    // An array of rows with the raw data
    rows: {
      type: Array,
      required: !0
    },
    //an array of column header objects with properties: key, label, searchable
    header: {
      type: Array,
      required: !0,
      validator: (t) => t.every((e) => e instanceof oo)
    }
  },
  emits: ["row-click"],
  setup(t, { emit: e }) {
    const n = e, o = t;
    let i = P(null), r = P(null), l = P(null), a = P(!1);
    const s = bn([
      { id: "small", class: "cell-small", selected: !0 },
      { id: "medium", class: "cell-medium", selected: !1 },
      { id: "large", class: "cell-large", selected: !1 }
    ]);
    let u = P("black"), d = P(!1), f = P({}), p = Wt(), m = no();
    Cn(f, () => {
      Object.values(f.value).every((y) => !y) && m.refreshLoadedData();
    }, { deep: !0 });
    const v = Ie(() => r.value.filter((y) => y.visible)), S = Ie(() => Object.keys(f.value).length === 0 ? m.getLoadedData() : m.getAllData().filter((y) => Object.keys(f.value).every((T) => {
      let w = V.cleanTerm(f.value[T]);
      return V.cleanTerm(V.getValue(y, T) ?? "").toLowerCase().includes(w.toLowerCase());
    })).slice(0, 120)), Z = Ie(() => (y, T) => {
      let w = [], I = s.find((we) => we.selected) ?? s[0];
      return w.push(I.class), y ? (w.push("numeric-column"), w.push(
        u.value === "color" ? Math.sign(T) < 0 ? "text-red" : "text-green" : "text-gray"
      ), w.join(" ")) : (w.push("text-gray"), w.join(" "));
    }), K = Ie(() => v.value.some((y) => y.isNumeric));
    function L(y) {
      a.value = l.value === y ? !a.value : !0, l.value = y;
      let T = m.getAllData().sort(
        (w, I) => W(w[l.value], I[l.value], a.value)
      );
      m.setData(T);
    }
    function W(y, T, w) {
      return y == null && (y = ""), T == null && (T = ""), w || ([y, T] = [T, y]), V.isNumericValue(y) && V.isNumericValue(T) ? T - y : V.isDate(y) && V.isDate(T) ? V.parseDate(y).getTime() > V.parseDate(T).getTime() ? 1 : -1 : y.localeCompare(T);
    }
    function Q(y) {
      s.forEach((T) => T.selected = T.id === y.newRowSize), u.value = y.newDigitsColor;
    }
    function ae(y) {
      r.value = y;
    }
    function J() {
      d.value = !d.value, d.value || (f.value = {});
    }
    function se(y) {
      if (!y.isNumeric)
        return "";
      let T = o.rows.map((w) => w[y.key]);
      return V.formatNumber(T.reduce((w, I) => w + I, 0), { fractionDigits: 2 });
    }
    function Ce(y, T) {
      f.value[T] = y;
    }
    function R(y) {
      n("row-click", y);
    }
    function ye() {
      i.value.style.maxHeight = "75vh";
    }
    return p.addEventHandler("update-table-style-event", Q), p.addEventHandler("update-table-columns-event", ae), p.addEventHandler("toggle-search-event", J), setHeader(), m.setData(o.rows), yn(() => ye()), (y, T) => (h(), _("div", {
      ref_key: "tableContainer",
      ref: i,
      class: "table-container"
    }, [
      g("table", null, [
        g("thead", io, [
          g("tr", ro, [
            (h(!0), _(me, null, ge(v.value, (w) => (h(), _("th", {
              onClick: (I) => L(w.key)
            }, [
              g("div", {
                class: Ne(["header-row-item", w.isNumeric ? "numeric" : ""])
              }, [
                g("span", {
                  textContent: z(w.label)
                }, null, 8, ao),
                ne(j, {
                  icon: "sort",
                  class: Ne(["header-row-item-icon", `${D(l) === w.key ? "selected" : ""}`])
                }, null, 8, ["class"])
              ], 2)
            ], 8, lo))), 256))
          ]),
          K.value ? (h(), _("tr", so, [
            (h(!0), _(me, null, ge(v.value, (w) => (h(), _("th", uo))), 256))
          ])) : ie("", !0),
          K.value ? (h(), _("tr", co, [
            (h(!0), _(me, null, ge(v.value, (w, I) => (h(), _("th", null, z(I === 0 ? "Total" : se(w)), 1))), 256))
          ])) : ie("", !0),
          D(d) ? (h(), _("tr", fo, [
            (h(!0), _(me, null, ge(v.value, (w) => (h(), _("th", null, [
              w.searchable ? (h(), _("input", {
                key: 0,
                onInput: (I) => Ce(I.target.value, w.key),
                class: "column-search",
                placeholder: D(H).getTranslate("search")
              }, null, 40, ho)) : ie("", !0)
            ]))), 256))
          ])) : ie("", !0)
        ]),
        g("tbody", mo, [
          (h(!0), _(me, null, ge(S.value, (w) => (h(), _("tr", {
            onClick: (I) => R(w)
          }, [
            (h(!0), _(me, null, ge(v.value, (I) => (h(), _("td", {
              class: Ne(Z.value(I.isNumeric, w[I.key]))
            }, [
              Yt(y.$slots, `cell.${I.key}`, {
                value: D(V).getValue(w, I.key),
                column: I,
                row: w,
                helpers: D(V)
              }, () => [
                wn(z(I.isNumeric ? D(V).formatNumericValue(D(V).getValue(w, I.key)) : D(V).getValue(w, I.key)), 1)
              ])
            ], 2))), 256))
          ], 8, go))), 256))
        ])
      ])
    ], 512));
  }
}, Gt = {
  __name: "Modal",
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e;
    return document.body.style.overflow = "hidden", En(() => document.body.style.overflow = "auto"), (o, i) => (h(), _("div", {
      onClick: i[0] || (i[0] = Dn((r) => n("close"), ["self"])),
      class: "modal"
    }, [
      Yt(o.$slots, "default")
    ]));
  }
}, po = { class: "settings-modal" }, vo = ["textContent"], _o = ["textContent"], bo = { class: "style-settings-options" }, Co = { class: "style-settings-option" }, yo = ["textContent"], wo = {
  key: 0,
  class: "option-items"
}, Eo = ["onClick"], Do = { class: "item-value" }, So = ["textContent"], xo = { class: "style-settings-option" }, To = ["textContent"], ko = {
  key: 0,
  class: "option-items"
}, Io = ["onClick"], Oo = { class: "item-value" }, No = ["textContent"], Ao = { class: "actions-container" }, Mo = ["textContent"], $o = ["textContent"], Po = {
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
        label: H.getTranslate("style_settings_modal.sections.row_size.options.small")
      },
      medium: {
        icon: "medium-row",
        label: H.getTranslate("style_settings_modal.sections.row_size.options.medium")
      },
      large: {
        icon: "large-row",
        label: H.getTranslate("style_settings_modal.sections.row_size.options.large")
      }
    }, a = {
      black: H.getTranslate("style_settings_modal.sections.numbers_color.options.black"),
      color: H.getTranslate("style_settings_modal.sections.numbers_color.options.color")
    };
    let s = P(!1), u = P(!1);
    function d() {
      n("save", i.value, r.value);
    }
    return (f, p) => (h(), ve(Gt, null, {
      default: bt(() => [
        g("div", po, [
          g("div", {
            class: "settings-modal-title",
            textContent: z(D(H).getTranslate("style_settings_modal.title"))
          }, null, 8, vo),
          g("div", {
            class: "settings-modal-description",
            textContent: z(D(H).getTranslate("style_settings_modal.description"))
          }, null, 8, _o),
          g("div", bo, [
            g("div", Co, [
              g("div", {
                class: "option-container",
                onClick: p[0] || (p[0] = (m) => ue(s) ? s.value = !D(s) : s = !D(s))
              }, [
                g("div", {
                  class: "option-title",
                  textContent: z(D(H).getTranslate("style_settings_modal.sections.row_size.title"))
                }, null, 8, yo),
                D(s) ? (h(), ve(j, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (h(), ve(j, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              D(s) ? (h(), _("div", wo, [
                (h(), _(me, null, ge(l, (m, v) => g("div", {
                  class: "option-item-container",
                  onClick: (S) => ue(i) ? i.value = v : i = v
                }, [
                  ne(j, {
                    icon: `radio-circle${D(i) === v ? "-selected" : ""}`,
                    class: Ne(`icon-size ${D(i) === v ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  g("div", Do, [
                    ne(j, {
                      icon: m.icon,
                      class: "icon-size"
                    }, null, 8, ["icon"]),
                    g("span", {
                      class: "option-item-title",
                      textContent: z(m.label)
                    }, null, 8, So)
                  ])
                ], 8, Eo)), 64))
              ])) : ie("", !0)
            ]),
            p[3] || (p[3] = g("div", { class: "divider" }, null, -1)),
            g("div", xo, [
              g("div", {
                class: "option-container",
                onClick: p[1] || (p[1] = (m) => ue(u) ? u.value = !D(u) : u = !D(u))
              }, [
                g("div", {
                  class: "option-title",
                  textContent: z(D(H).getTranslate("style_settings_modal.sections.numbers_color.title"))
                }, null, 8, To),
                D(u) ? (h(), ve(j, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (h(), ve(j, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              D(u) ? (h(), _("div", ko, [
                (h(), _(me, null, ge(a, (m, v) => g("div", {
                  class: "option-item-container",
                  onClick: (S) => ue(r) ? r.value = v : r = v
                }, [
                  ne(j, {
                    icon: `radio-circle${D(r) === v ? "-selected" : ""}`,
                    class: Ne(`icon-size ${D(r) === v ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  g("div", Oo, [
                    g("span", {
                      class: "option-item-title",
                      textContent: z(m)
                    }, null, 8, No)
                  ])
                ], 8, Io)), 64))
              ])) : ie("", !0)
            ])
          ]),
          g("div", Ao, [
            g("div", {
              class: "button button-cancel",
              onClick: p[2] || (p[2] = (m) => n("close")),
              textContent: z(D(H).getTranslate("style_settings_modal.actions.cancel"))
            }, null, 8, Mo),
            g("div", {
              class: "button button-confirm",
              onClick: d,
              textContent: z(D(H).getTranslate("style_settings_modal.actions.save"))
            }, null, 8, $o)
          ])
        ])
      ]),
      _: 1
    }));
  }
}, Lo = ["for"], Vo = {
  key: 0,
  class: "checkbox-input"
}, Fo = {
  key: 1,
  class: "checkbox-selected"
}, Ho = ["textContent"], Bo = ["id", "name", "value"], zo = {
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
    const n = e, o = t, i = Ie({
      get: () => o.modelValue,
      set: (l) => n("update:modelValue", l)
    }), r = Ie(() => o.name && o.name.length ? o.name : o.label);
    return (l, a) => (h(), _("label", {
      for: t.name,
      class: "checkbox-container"
    }, [
      i.value ? (h(), _("div", Fo, [
        ne(j, {
          icon: "check",
          class: "checkbox-selected-icon"
        })
      ])) : (h(), _("div", Vo)),
      t.label ? (h(), _("span", {
        key: 2,
        class: "label",
        textContent: z(t.label)
      }, null, 8, Ho)) : ie("", !0),
      Sn(g("input", {
        hidden: "",
        id: r.value,
        name: t.name,
        type: "checkbox",
        "onUpdate:modelValue": a[0] || (a[0] = (s) => i.value = s),
        value: t.value
      }, null, 8, Bo), [
        [xn, i.value]
      ])
    ], 8, Lo));
  }
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function At(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function le(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? At(Object(n), !0).forEach(function(o) {
      Ro(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach(function(o) {
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
function Ro(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function de() {
  return de = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, de.apply(this, arguments);
}
function Xo(t, e) {
  if (t == null)
    return {};
  var n = {}, o = Object.keys(t), i, r;
  for (r = 0; r < o.length; r++)
    i = o[r], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Yo(t, e) {
  if (t == null)
    return {};
  var n = Xo(t, e), o, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    for (i = 0; i < r.length; i++)
      o = r[i], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
var Zo = "1.14.0";
function ce(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var fe = ce(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Xe = ce(/Edge/i), Mt = ce(/firefox/i), Fe = ce(/safari/i) && !ce(/chrome/i) && !ce(/android/i), jt = ce(/iP(ad|od|hone)/i), Wo = ce(/chrome/i) && ce(/android/i), qt = {
  capture: !1,
  passive: !1
};
function k(t, e, n) {
  t.addEventListener(e, n, !fe && qt);
}
function x(t, e, n) {
  t.removeEventListener(e, n, !fe && qt);
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
function Uo(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function oe(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && tt(t, e) : tt(t, e)) || o && t === n)
        return t;
      if (t === n)
        break;
    } while (t = Uo(t));
  }
  return null;
}
var $t = /\s+/g;
function U(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var o = (" " + t.className + " ").replace($t, " ").replace(" " + e + " ", " ");
      t.className = (o + (n ? " " + e : "")).replace($t, " ");
    }
}
function b(t, e, n) {
  var o = t && t.style;
  if (o) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), o[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function Ae(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var o = b(t, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function Kt(t, e, n) {
  if (t) {
    var o = t.getElementsByTagName(e), i = 0, r = o.length;
    if (n)
      for (; i < r; i++)
        n(o[i], i);
    return o;
  }
  return [];
}
function re() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function $(t, e, n, o, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var r, l, a, s, u, d, f;
    if (t !== window && t.parentNode && t !== re() ? (r = t.getBoundingClientRect(), l = r.top, a = r.left, s = r.bottom, u = r.right, d = r.height, f = r.width) : (l = 0, a = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, f = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !fe))
      do
        if (i && i.getBoundingClientRect && (b(i, "transform") !== "none" || n && b(i, "position") !== "static")) {
          var p = i.getBoundingClientRect();
          l -= p.top + parseInt(b(i, "border-top-width")), a -= p.left + parseInt(b(i, "border-left-width")), s = l + r.height, u = a + r.width;
          break;
        }
      while (i = i.parentNode);
    if (o && t !== window) {
      var m = Ae(i || t), v = m && m.a, S = m && m.d;
      m && (l /= S, a /= v, f /= v, d /= S, s = l + d, u = a + f);
    }
    return {
      top: l,
      left: a,
      bottom: s,
      right: u,
      width: f,
      height: d
    };
  }
}
function Pt(t, e, n) {
  for (var o = be(t, !0), i = $(t)[e]; o; ) {
    var r = $(o)[n], l = void 0;
    if (n === "top" || n === "left" ? l = i >= r : l = i <= r, !l)
      return o;
    if (o === re())
      break;
    o = be(o, !1);
  }
  return !1;
}
function Me(t, e, n, o) {
  for (var i = 0, r = 0, l = t.children; r < l.length; ) {
    if (l[r].style.display !== "none" && l[r] !== C.ghost && (o || l[r] !== C.dragged) && oe(l[r], n.draggable, t, !1)) {
      if (i === e)
        return l[r];
      i++;
    }
    r++;
  }
  return null;
}
function St(t, e) {
  for (var n = t.lastElementChild; n && (n === C.ghost || b(n, "display") === "none" || e && !tt(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function ee(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== C.clone && (!e || tt(t, e)) && n++;
  return n;
}
function Lt(t) {
  var e = 0, n = 0, o = re();
  if (t)
    do {
      var i = Ae(t), r = i.a, l = i.d;
      e += t.scrollLeft * r, n += t.scrollTop * l;
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function Go(t, e) {
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
    return re();
  var n = t, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = b(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return re();
        if (o || e)
          return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return re();
}
function jo(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function st(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var He;
function Qt(t, e) {
  return function() {
    if (!He) {
      var n = arguments, o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n), He = setTimeout(function() {
        He = void 0;
      }, e);
    }
  };
}
function qo() {
  clearTimeout(He), He = void 0;
}
function Jt(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function en(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
var q = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ko() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(i) {
          if (!(b(i, "display") === "none" || i === C.ghost)) {
            t.push({
              target: i,
              rect: $(i)
            });
            var r = le({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var l = Ae(i, !0);
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
      t.splice(Go(t, {
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
        var s = 0, u = a.target, d = u.fromRect, f = $(u), p = u.prevFromRect, m = u.prevToRect, v = a.rect, S = Ae(u, !0);
        S && (f.top -= S.f, f.left -= S.e), u.toRect = f, u.thisAnimationDuration && st(p, f) && !st(d, f) && // Make sure animatingRect is on line between toRect & fromRect
        (v.top - f.top) / (v.left - f.left) === (d.top - f.top) / (d.left - f.left) && (s = Jo(v, p, m, i.options)), st(f, d) || (u.prevFromRect = d, u.prevToRect = f, s || (s = i.options.animation), i.animate(u, v, f, s)), s && (r = !0, l = Math.max(l, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(e), r ? e = setTimeout(function() {
        typeof o == "function" && o();
      }, l) : typeof o == "function" && o(), t = [];
    },
    animate: function(o, i, r, l) {
      if (l) {
        b(o, "transition", ""), b(o, "transform", "");
        var a = Ae(this.el), s = a && a.a, u = a && a.d, d = (i.left - r.left) / (s || 1), f = (i.top - r.top) / (u || 1);
        o.animatingX = !!d, o.animatingY = !!f, b(o, "transform", "translate3d(" + d + "px," + f + "px,0)"), this.forRepaintDummy = Qo(o), b(o, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), b(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          b(o, "transition", ""), b(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, l);
      }
    }
  };
}
function Qo(t) {
  return t.offsetWidth;
}
function Jo(t, e, n, o) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation;
}
var xe = [], ut = {
  initializeByDefault: !0
}, Ye = {
  mount: function(e) {
    for (var n in ut)
      ut.hasOwnProperty(n) && !(n in e) && (e[n] = ut[n]);
    xe.forEach(function(o) {
      if (o.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), xe.push(e);
  },
  pluginEvent: function(e, n, o) {
    var i = this;
    this.eventCanceled = !1, o.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = e + "Global";
    xe.forEach(function(l) {
      n[l.pluginName] && (n[l.pluginName][r] && n[l.pluginName][r](le({
        sortable: n
      }, o)), n.options[l.pluginName] && n[l.pluginName][e] && n[l.pluginName][e](le({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(e, n, o, i) {
    xe.forEach(function(a) {
      var s = a.pluginName;
      if (!(!e.options[s] && !a.initializeByDefault)) {
        var u = new a(e, n, e.options);
        u.sortable = e, u.options = e.options, e[s] = u, de(o, u.defaults);
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
    return xe.forEach(function(i) {
      typeof i.eventProperties == "function" && de(o, i.eventProperties.call(n[i.pluginName], e));
    }), o;
  },
  modifyOption: function(e, n, o) {
    var i;
    return xe.forEach(function(r) {
      e[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (i = r.optionListeners[n].call(e[r.pluginName], o));
    }), i;
  }
};
function ei(t) {
  var e = t.sortable, n = t.rootEl, o = t.name, i = t.targetEl, r = t.cloneEl, l = t.toEl, a = t.fromEl, s = t.oldIndex, u = t.newIndex, d = t.oldDraggableIndex, f = t.newDraggableIndex, p = t.originalEvent, m = t.putSortable, v = t.extraEventProperties;
  if (e = e || n && n[q], !!e) {
    var S, Z = e.options, K = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !fe && !Xe ? S = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(o, !0, !0)), S.to = l || n, S.from = a || n, S.item = i || n, S.clone = r, S.oldIndex = s, S.newIndex = u, S.oldDraggableIndex = d, S.newDraggableIndex = f, S.originalEvent = p, S.pullMode = m ? m.lastPutMode : void 0;
    var L = le(le({}, v), Ye.getEventProperties(o, e));
    for (var W in L)
      S[W] = L[W];
    n && n.dispatchEvent(S), Z[K] && Z[K].call(e, S);
  }
}
var ti = ["evt"], Y = function(e, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = o.evt, r = Yo(o, ti);
  Ye.pluginEvent.bind(C)(e, n, le({
    dragEl: c,
    parentEl: N,
    ghostEl: E,
    rootEl: O,
    nextEl: Se,
    lastDownEl: Ke,
    cloneEl: A,
    cloneHidden: _e,
    dragStarted: Pe,
    putSortable: F,
    activeSortable: C.active,
    originalEvent: i,
    oldIndex: Oe,
    oldDraggableIndex: Be,
    newIndex: G,
    newDraggableIndex: pe,
    hideGhostForTarget: rn,
    unhideGhostForTarget: ln,
    cloneNowHidden: function() {
      _e = !0;
    },
    cloneNowShown: function() {
      _e = !1;
    },
    dispatchSortableEvent: function(a) {
      X({
        sortable: n,
        name: a,
        originalEvent: i
      });
    }
  }, r));
};
function X(t) {
  ei(le({
    putSortable: F,
    cloneEl: A,
    targetEl: c,
    rootEl: O,
    oldIndex: Oe,
    oldDraggableIndex: Be,
    newIndex: G,
    newDraggableIndex: pe
  }, t));
}
var c, N, E, O, Se, Ke, A, _e, Oe, G, Be, pe, We, F, ke = !1, nt = !1, ot = [], Ee, te, ct, dt, Vt, Ft, Pe, Te, ze, Re = !1, Ue = !1, Qe, B, ft = [], Ct = !1, it = [], at = typeof document < "u", Ge = jt, Ht = Xe || fe ? "cssFloat" : "float", ni = at && !Wo && !jt && "draggable" in document.createElement("div"), tn = function() {
  if (at) {
    if (fe)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), nn = function(e, n) {
  var o = b(e), i = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), r = Me(e, 0, n), l = Me(e, 1, n), a = r && b(r), s = l && b(l), u = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + $(r).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + $(l).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && a.float && a.float !== "none") {
    var f = a.float === "left" ? "left" : "right";
    return l && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return r && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || u >= i && o[Ht] === "none" || l && o[Ht] === "none" && u + d > i) ? "vertical" : "horizontal";
}, oi = function(e, n, o) {
  var i = o ? e.left : e.top, r = o ? e.right : e.bottom, l = o ? e.width : e.height, a = o ? n.left : n.top, s = o ? n.right : n.bottom, u = o ? n.width : n.height;
  return i === a || r === s || i + l / 2 === a + u / 2;
}, ii = function(e, n) {
  var o;
  return ot.some(function(i) {
    var r = i[q].options.emptyInsertThreshold;
    if (!(!r || St(i))) {
      var l = $(i), a = e >= l.left - r && e <= l.right + r, s = n >= l.top - r && n <= l.bottom + r;
      if (a && s)
        return o = i;
    }
  }), o;
}, on = function(e) {
  function n(r, l) {
    return function(a, s, u, d) {
      var f = a.options.group.name && s.options.group.name && a.options.group.name === s.options.group.name;
      if (r == null && (l || f))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (l && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(a, s, u, d), l)(a, s, u, d);
      var p = (l ? a : s).options.group.name;
      return r === !0 || typeof r == "string" && r === p || r.join && r.indexOf(p) > -1;
    };
  }
  var o = {}, i = e.group;
  (!i || qe(i) != "object") && (i = {
    name: i
  }), o.name = i.name, o.checkPull = n(i.pull, !0), o.checkPut = n(i.put), o.revertClone = i.revertClone, e.group = o;
}, rn = function() {
  !tn && E && b(E, "display", "none");
}, ln = function() {
  !tn && E && b(E, "display", "");
};
at && document.addEventListener("click", function(t) {
  if (nt)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), nt = !1, !1;
}, !0);
var De = function(e) {
  if (c) {
    e = e.touches ? e.touches[0] : e;
    var n = ii(e.clientX, e.clientY);
    if (n) {
      var o = {};
      for (var i in e)
        e.hasOwnProperty(i) && (o[i] = e[i]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[q]._onDragOver(o);
    }
  }
}, ri = function(e) {
  c && c.parentNode[q]._isOutsideThisEl(e.target);
};
function C(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = de({}, e), t[q] = this;
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
      return nn(t, this.options);
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
    supportPointer: C.supportPointer !== !1 && "PointerEvent" in window && !Fe,
    emptyInsertThreshold: 5
  };
  Ye.initializePlugins(this, t, n);
  for (var o in n)
    !(o in e) && (e[o] = n[o]);
  on(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : ni, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? k(t, "pointerdown", this._onTapStart) : (k(t, "mousedown", this._onTapStart), k(t, "touchstart", this._onTapStart)), this.nativeDraggable && (k(t, "dragover", this), k(t, "dragenter", this)), ot.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), de(this, Ko());
}
C.prototype = /** @lends Sortable.prototype */
{
  constructor: C,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Te = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, c) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, o = this.el, i = this.options, r = i.preventOnFilter, l = e.type, a = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (a || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, d = i.filter;
      if (hi(o), !c && !(/mousedown|pointerdown/.test(l) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Fe && s && s.tagName.toUpperCase() === "SELECT") && (s = oe(s, i.draggable, o, !1), !(s && s.animated) && Ke !== s)) {
        if (Oe = ee(s), Be = ee(s, i.draggable), typeof d == "function") {
          if (d.call(this, e, s, this)) {
            X({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), Y("filter", n, {
              evt: e
            }), r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(f) {
          if (f = oe(u, f.trim(), o, !1), f)
            return X({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), Y("filter", n, {
              evt: e
            }), !0;
        }), d)) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !oe(u, i.handle, o, !1) || this._prepareDragStart(e, a, s);
      }
    }
  },
  _prepareDragStart: function(e, n, o) {
    var i = this, r = i.el, l = i.options, a = r.ownerDocument, s;
    if (o && !c && o.parentNode === r) {
      var u = $(o);
      if (O = r, c = o, N = c.parentNode, Se = c.nextSibling, Ke = o, We = l.group, C.dragged = c, Ee = {
        target: c,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Vt = Ee.clientX - u.left, Ft = Ee.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, c.style["will-change"] = "all", s = function() {
        if (Y("delayEnded", i, {
          evt: e
        }), C.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Mt && i.nativeDraggable && (c.draggable = !0), i._triggerDragStart(e, n), X({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), U(c, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(d) {
        Kt(c, d.trim(), ht);
      }), k(a, "dragover", De), k(a, "mousemove", De), k(a, "touchmove", De), k(a, "mouseup", i._onDrop), k(a, "touchend", i._onDrop), k(a, "touchcancel", i._onDrop), Mt && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), Y("delayStart", this, {
        evt: e
      }), l.delay && (!l.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Xe || fe))) {
        if (C.eventCanceled) {
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
    c && ht(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    x(e, "mouseup", this._disableDelayedDrag), x(e, "touchend", this._disableDelayedDrag), x(e, "touchcancel", this._disableDelayedDrag), x(e, "mousemove", this._delayedDragTouchMoveHandler), x(e, "touchmove", this._delayedDragTouchMoveHandler), x(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? k(document, "pointermove", this._onTouchMove) : n ? k(document, "touchmove", this._onTouchMove) : k(document, "mousemove", this._onTouchMove) : (k(c, "dragend", this), k(O, "dragstart", this._onDragStart));
    try {
      document.selection ? Je(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (ke = !1, O && c) {
      Y("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && k(document, "dragover", ri);
      var o = this.options;
      !e && U(c, o.dragClass, !1), U(c, o.ghostClass, !0), C.active = this, e && this._appendGhost(), X({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (te) {
      this._lastX = te.clientX, this._lastY = te.clientY, rn();
      for (var e = document.elementFromPoint(te.clientX, te.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(te.clientX, te.clientY), e !== n); )
        n = e;
      if (c.parentNode[q]._isOutsideThisEl(e), n)
        do {
          if (n[q]) {
            var o = void 0;
            if (o = n[q]._onDragOver({
              clientX: te.clientX,
              clientY: te.clientY,
              target: e,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      ln();
    }
  },
  _onTouchMove: function(e) {
    if (Ee) {
      var n = this.options, o = n.fallbackTolerance, i = n.fallbackOffset, r = e.touches ? e.touches[0] : e, l = E && Ae(E, !0), a = E && l && l.a, s = E && l && l.d, u = Ge && B && Lt(B), d = (r.clientX - Ee.clientX + i.x) / (a || 1) + (u ? u[0] - ft[0] : 0) / (a || 1), f = (r.clientY - Ee.clientY + i.y) / (s || 1) + (u ? u[1] - ft[1] : 0) / (s || 1);
      if (!C.active && !ke) {
        if (o && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < o)
          return;
        this._onDragStart(e, !0);
      }
      if (E) {
        l ? (l.e += d - (ct || 0), l.f += f - (dt || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f
        };
        var p = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        b(E, "webkitTransform", p), b(E, "mozTransform", p), b(E, "msTransform", p), b(E, "transform", p), ct = d, dt = f, te = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!E) {
      var e = this.options.fallbackOnBody ? document.body : O, n = $(c, !0, Ge, !0, e), o = this.options;
      if (Ge) {
        for (B = e; b(B, "position") === "static" && b(B, "transform") === "none" && B !== document; )
          B = B.parentNode;
        B !== document.body && B !== document.documentElement ? (B === document && (B = re()), n.top += B.scrollTop, n.left += B.scrollLeft) : B = re(), ft = Lt(B);
      }
      E = c.cloneNode(!0), U(E, o.ghostClass, !1), U(E, o.fallbackClass, !0), U(E, o.dragClass, !0), b(E, "transition", ""), b(E, "transform", ""), b(E, "box-sizing", "border-box"), b(E, "margin", 0), b(E, "top", n.top), b(E, "left", n.left), b(E, "width", n.width), b(E, "height", n.height), b(E, "opacity", "0.8"), b(E, "position", Ge ? "absolute" : "fixed"), b(E, "zIndex", "100000"), b(E, "pointerEvents", "none"), C.ghost = E, e.appendChild(E), b(E, "transform-origin", Vt / parseInt(E.style.width) * 100 + "% " + Ft / parseInt(E.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var o = this, i = e.dataTransfer, r = o.options;
    if (Y("dragStart", this, {
      evt: e
    }), C.eventCanceled) {
      this._onDrop();
      return;
    }
    Y("setupClone", this), C.eventCanceled || (A = en(c), A.draggable = !1, A.style["will-change"] = "", this._hideClone(), U(A, this.options.chosenClass, !1), C.clone = A), o.cloneId = Je(function() {
      Y("clone", o), !C.eventCanceled && (o.options.removeCloneOnHide || O.insertBefore(A, c), o._hideClone(), X({
        sortable: o,
        name: "clone"
      }));
    }), !n && U(c, r.dragClass, !0), n ? (nt = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (x(document, "mouseup", o._onDrop), x(document, "touchend", o._onDrop), x(document, "touchcancel", o._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(o, i, c)), k(document, "drop", o), b(c, "transform", "translateZ(0)")), ke = !0, o._dragStartId = Je(o._dragStarted.bind(o, n, e)), k(document, "selectstart", o), Pe = !0, Fe && b(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, o = e.target, i, r, l, a = this.options, s = a.group, u = C.active, d = We === s, f = a.sort, p = F || u, m, v = this, S = !1;
    if (Ct)
      return;
    function Z($e, pn) {
      Y($e, v, le({
        evt: e,
        isOwner: d,
        axis: m ? "vertical" : "horizontal",
        revert: l,
        dragRect: i,
        targetRect: r,
        canSort: f,
        fromSortable: p,
        target: o,
        completed: L,
        onMove: function(kt, vn) {
          return je(O, n, c, i, kt, $(kt), e, vn);
        },
        changed: W
      }, pn));
    }
    function K() {
      Z("dragOverAnimationCapture"), v.captureAnimationState(), v !== p && p.captureAnimationState();
    }
    function L($e) {
      return Z("dragOverCompleted", {
        insertion: $e
      }), $e && (d ? u._hideClone() : u._showClone(v), v !== p && (U(c, F ? F.options.ghostClass : u.options.ghostClass, !1), U(c, a.ghostClass, !0)), F !== v && v !== C.active ? F = v : v === C.active && F && (F = null), p === v && (v._ignoreWhileAnimating = o), v.animateAll(function() {
        Z("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
      }), v !== p && (p.animateAll(), p._ignoreWhileAnimating = null)), (o === c && !c.animated || o === n && !o.animated) && (Te = null), !a.dragoverBubble && !e.rootEl && o !== document && (c.parentNode[q]._isOutsideThisEl(e.target), !$e && De(e)), !a.dragoverBubble && e.stopPropagation && e.stopPropagation(), S = !0;
    }
    function W() {
      G = ee(c), pe = ee(c, a.draggable), X({
        sortable: v,
        name: "change",
        toEl: n,
        newIndex: G,
        newDraggableIndex: pe,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), o = oe(o, a.draggable, n, !0), Z("dragOver"), C.eventCanceled)
      return S;
    if (c.contains(e.target) || o.animated && o.animatingX && o.animatingY || v._ignoreWhileAnimating === o)
      return L(!1);
    if (nt = !1, u && !a.disabled && (d ? f || (l = N !== O) : F === this || (this.lastPutMode = We.checkPull(this, u, c, e)) && s.checkPut(this, u, c, e))) {
      if (m = this._getDirection(e, o) === "vertical", i = $(c), Z("dragOverValid"), C.eventCanceled)
        return S;
      if (l)
        return N = O, K(), this._hideClone(), Z("revert"), C.eventCanceled || (Se ? O.insertBefore(c, Se) : O.appendChild(c)), L(!0);
      var Q = St(n, a.draggable);
      if (!Q || ui(e, m, this) && !Q.animated) {
        if (Q === c)
          return L(!1);
        if (Q && n === e.target && (o = Q), o && (r = $(o)), je(O, n, c, i, o, r, e, !!o) !== !1)
          return K(), n.appendChild(c), N = n, W(), L(!0);
      } else if (Q && si(e, m, this)) {
        var ae = Me(n, 0, a, !0);
        if (ae === c)
          return L(!1);
        if (o = ae, r = $(o), je(O, n, c, i, o, r, e, !1) !== !1)
          return K(), n.insertBefore(c, ae), N = n, W(), L(!0);
      } else if (o.parentNode === n) {
        r = $(o);
        var J = 0, se, Ce = c.parentNode !== n, R = !oi(c.animated && c.toRect || i, o.animated && o.toRect || r, m), ye = m ? "top" : "left", y = Pt(o, "top", "top") || Pt(c, "top", "top"), T = y ? y.scrollTop : void 0;
        Te !== o && (se = r[ye], Re = !1, Ue = !R && a.invertSwap || Ce), J = ci(e, o, r, m, R ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, Ue, Te === o);
        var w;
        if (J !== 0) {
          var I = ee(c);
          do
            I -= J, w = N.children[I];
          while (w && (b(w, "display") === "none" || w === E));
        }
        if (J === 0 || w === o)
          return L(!1);
        Te = o, ze = J;
        var we = o.nextElementSibling, he = !1;
        he = J === 1;
        var Ze = je(O, n, c, i, o, r, e, he);
        if (Ze !== !1)
          return (Ze === 1 || Ze === -1) && (he = Ze === 1), Ct = !0, setTimeout(ai, 30), K(), he && !we ? n.appendChild(c) : o.parentNode.insertBefore(c, he ? we : o), y && Jt(y, 0, T - y.scrollTop), N = c.parentNode, se !== void 0 && !Ue && (Qe = Math.abs(se - $(o)[ye])), W(), L(!0);
      }
      if (n.contains(c))
        return L(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    x(document, "mousemove", this._onTouchMove), x(document, "touchmove", this._onTouchMove), x(document, "pointermove", this._onTouchMove), x(document, "dragover", De), x(document, "mousemove", De), x(document, "touchmove", De);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    x(e, "mouseup", this._onDrop), x(e, "touchend", this._onDrop), x(e, "pointerup", this._onDrop), x(e, "touchcancel", this._onDrop), x(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, o = this.options;
    if (G = ee(c), pe = ee(c, o.draggable), Y("drop", this, {
      evt: e
    }), N = c && c.parentNode, G = ee(c), pe = ee(c, o.draggable), C.eventCanceled) {
      this._nulling();
      return;
    }
    ke = !1, Ue = !1, Re = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), yt(this.cloneId), yt(this._dragStartId), this.nativeDraggable && (x(document, "drop", this), x(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Fe && b(document.body, "user-select", ""), b(c, "transform", ""), e && (Pe && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()), E && E.parentNode && E.parentNode.removeChild(E), (O === N || F && F.lastPutMode !== "clone") && A && A.parentNode && A.parentNode.removeChild(A), c && (this.nativeDraggable && x(c, "dragend", this), ht(c), c.style["will-change"] = "", Pe && !ke && U(c, F ? F.options.ghostClass : this.options.ghostClass, !1), U(c, this.options.chosenClass, !1), X({
      sortable: this,
      name: "unchoose",
      toEl: N,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), O !== N ? (G >= 0 && (X({
      rootEl: N,
      name: "add",
      toEl: N,
      fromEl: O,
      originalEvent: e
    }), X({
      sortable: this,
      name: "remove",
      toEl: N,
      originalEvent: e
    }), X({
      rootEl: N,
      name: "sort",
      toEl: N,
      fromEl: O,
      originalEvent: e
    }), X({
      sortable: this,
      name: "sort",
      toEl: N,
      originalEvent: e
    })), F && F.save()) : G !== Oe && G >= 0 && (X({
      sortable: this,
      name: "update",
      toEl: N,
      originalEvent: e
    }), X({
      sortable: this,
      name: "sort",
      toEl: N,
      originalEvent: e
    })), C.active && ((G == null || G === -1) && (G = Oe, pe = Be), X({
      sortable: this,
      name: "end",
      toEl: N,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Y("nulling", this), O = c = N = E = Se = A = Ke = _e = Ee = te = Pe = G = pe = Oe = Be = Te = ze = F = We = C.dragged = C.ghost = C.clone = C.active = null, it.forEach(function(e) {
      e.checked = !0;
    }), it.length = ct = dt = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(e), li(e));
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
      n = o[i], oe(n, l.draggable, this.el, !1) && e.push(n.getAttribute(l.dataIdAttr) || fi(n));
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
      oe(a, this.options.draggable, i, !1) && (o[r] = a);
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
    return oe(e, n || this.options.draggable, this.el, !1);
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
    var i = Ye.modifyOption(this, e, n);
    typeof i < "u" ? o[e] = i : o[e] = n, e === "group" && on(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Y("destroy", this);
    var e = this.el;
    e[q] = null, x(e, "mousedown", this._onTapStart), x(e, "touchstart", this._onTapStart), x(e, "pointerdown", this._onTapStart), this.nativeDraggable && (x(e, "dragover", this), x(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ot.splice(ot.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!_e) {
      if (Y("hideClone", this), C.eventCanceled)
        return;
      b(A, "display", "none"), this.options.removeCloneOnHide && A.parentNode && A.parentNode.removeChild(A), _e = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (_e) {
      if (Y("showClone", this), C.eventCanceled)
        return;
      c.parentNode == O && !this.options.group.revertClone ? O.insertBefore(A, c) : Se ? O.insertBefore(A, Se) : O.appendChild(A), this.options.group.revertClone && this.animate(c, A), b(A, "display", ""), _e = !1;
    }
  }
};
function li(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function je(t, e, n, o, i, r, l, a) {
  var s, u = t[q], d = u.options.onMove, f;
  return window.CustomEvent && !fe && !Xe ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || $(e), s.willInsertAfter = a, s.originalEvent = l, t.dispatchEvent(s), d && (f = d.call(u, s, l)), f;
}
function ht(t) {
  t.draggable = !1;
}
function ai() {
  Ct = !1;
}
function si(t, e, n) {
  var o = $(Me(n.el, 0, n.options, !0)), i = 10;
  return e ? t.clientX < o.left - i || t.clientY < o.top && t.clientX < o.right : t.clientY < o.top - i || t.clientY < o.bottom && t.clientX < o.left;
}
function ui(t, e, n) {
  var o = $(St(n.el, n.options.draggable)), i = 10;
  return e ? t.clientX > o.right + i || t.clientX <= o.right && t.clientY > o.bottom && t.clientX >= o.left : t.clientX > o.right && t.clientY > o.top || t.clientX <= o.right && t.clientY > o.bottom + i;
}
function ci(t, e, n, o, i, r, l, a) {
  var s = o ? t.clientY : t.clientX, u = o ? n.height : n.width, d = o ? n.top : n.left, f = o ? n.bottom : n.right, p = !1;
  if (!l) {
    if (a && Qe < u * i) {
      if (!Re && (ze === 1 ? s > d + u * r / 2 : s < f - u * r / 2) && (Re = !0), Re)
        p = !0;
      else if (ze === 1 ? s < d + Qe : s > f - Qe)
        return -ze;
    } else if (s > d + u * (1 - i) / 2 && s < f - u * (1 - i) / 2)
      return di(e);
  }
  return p = p || l, p && (s < d + u * r / 2 || s > f - u * r / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function di(t) {
  return ee(c) < ee(t) ? 1 : -1;
}
function fi(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--; )
    o += e.charCodeAt(n);
  return o.toString(36);
}
function hi(t) {
  it.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && it.push(o);
  }
}
function Je(t) {
  return setTimeout(t, 0);
}
function yt(t) {
  return clearTimeout(t);
}
at && k(document, "touchmove", function(t) {
  (C.active || ke) && t.cancelable && t.preventDefault();
});
C.utils = {
  on: k,
  off: x,
  css: b,
  find: Kt,
  is: function(e, n) {
    return !!oe(e, n, e, !1);
  },
  extend: jo,
  throttle: Qt,
  closest: oe,
  toggleClass: U,
  clone: en,
  index: ee,
  nextTick: Je,
  cancelNextTick: yt,
  detectDirection: nn,
  getChild: Me
};
C.get = function(t) {
  return t[q];
};
C.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (C.utils = le(le({}, C.utils), o.utils)), Ye.mount(o);
  });
};
C.create = function(t, e) {
  return new C(t, e);
};
C.version = Zo;
var M = [], Le, wt, Et = !1, mt, gt, rt, Ve;
function mi() {
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
      this.sortable.nativeDraggable ? x(document, "dragover", this._handleAutoScroll) : (x(document, "pointermove", this._handleFallbackAutoScroll), x(document, "touchmove", this._handleFallbackAutoScroll), x(document, "mousemove", this._handleFallbackAutoScroll)), Bt(), et(), qo();
    },
    nulling: function() {
      rt = wt = Le = Et = Ve = mt = gt = null, M.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var i = this, r = (n.touches ? n.touches[0] : n).clientX, l = (n.touches ? n.touches[0] : n).clientY, a = document.elementFromPoint(r, l);
      if (rt = n, o || this.options.forceAutoScrollFallback || Xe || fe || Fe) {
        pt(n, this.options, a, o);
        var s = be(a, !0);
        Et && (!Ve || r !== mt || l !== gt) && (Ve && Bt(), Ve = setInterval(function() {
          var u = be(document.elementFromPoint(r, l), !0);
          u !== s && (s = u, et()), pt(n, i.options, u, o);
        }, 10), mt = r, gt = l);
      } else {
        if (!this.options.bubbleScroll || be(a, !0) === re()) {
          et();
          return;
        }
        pt(n, this.options, be(a, !1), !1);
      }
    }
  }, de(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function et() {
  M.forEach(function(t) {
    clearInterval(t.pid);
  }), M = [];
}
function Bt() {
  clearInterval(Ve);
}
var pt = Qt(function(t, e, n, o) {
  if (e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, r = (t.touches ? t.touches[0] : t).clientY, l = e.scrollSensitivity, a = e.scrollSpeed, s = re(), u = !1, d;
    wt !== n && (wt = n, et(), Le = e.scroll, d = e.scrollFn, Le === !0 && (Le = be(n, !0)));
    var f = 0, p = Le;
    do {
      var m = p, v = $(m), S = v.top, Z = v.bottom, K = v.left, L = v.right, W = v.width, Q = v.height, ae = void 0, J = void 0, se = m.scrollWidth, Ce = m.scrollHeight, R = b(m), ye = m.scrollLeft, y = m.scrollTop;
      m === s ? (ae = W < se && (R.overflowX === "auto" || R.overflowX === "scroll" || R.overflowX === "visible"), J = Q < Ce && (R.overflowY === "auto" || R.overflowY === "scroll" || R.overflowY === "visible")) : (ae = W < se && (R.overflowX === "auto" || R.overflowX === "scroll"), J = Q < Ce && (R.overflowY === "auto" || R.overflowY === "scroll"));
      var T = ae && (Math.abs(L - i) <= l && ye + W < se) - (Math.abs(K - i) <= l && !!ye), w = J && (Math.abs(Z - r) <= l && y + Q < Ce) - (Math.abs(S - r) <= l && !!y);
      if (!M[f])
        for (var I = 0; I <= f; I++)
          M[I] || (M[I] = {});
      (M[f].vx != T || M[f].vy != w || M[f].el !== m) && (M[f].el = m, M[f].vx = T, M[f].vy = w, clearInterval(M[f].pid), (T != 0 || w != 0) && (u = !0, M[f].pid = setInterval((function() {
        o && this.layer === 0 && C.active._onTouchMove(rt);
        var we = M[this.layer].vy ? M[this.layer].vy * a : 0, he = M[this.layer].vx ? M[this.layer].vx * a : 0;
        typeof d == "function" && d.call(C.dragged.parentNode[q], he, we, t, rt, M[this.layer].el) !== "continue" || Jt(M[this.layer].el, he, we);
      }).bind({
        layer: f
      }), 24))), f++;
    } while (e.bubbleScroll && p !== s && (p = be(p, !1)));
    Et = u;
  }
}, 30), an = function(e) {
  var n = e.originalEvent, o = e.putSortable, i = e.dragEl, r = e.activeSortable, l = e.dispatchSortableEvent, a = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (n) {
    var u = o || r;
    a();
    var d = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(d.clientX, d.clientY);
    s(), u && !u.el.contains(f) && (l("spill"), this.onSpill({
      dragEl: i,
      putSortable: o
    }));
  }
};
function xt() {
}
xt.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var i = Me(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: an
};
de(xt, {
  pluginName: "revertOnSpill"
});
function Tt() {
}
Tt.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable, i = o || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: an
};
de(Tt, {
  pluginName: "removeOnSpill"
});
C.mount(new mi());
C.mount(Tt, xt);
function vt(t) {
  t.parentElement !== null && t.parentElement.removeChild(t);
}
function zt(t, e, n) {
  const o = n === 0 ? t.children[0] : t.children[n - 1].nextSibling;
  t.insertBefore(e, o);
}
function gi() {
  return typeof window < "u" ? window.console : global.console;
}
const pi = gi();
function vi(t) {
  const e = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return e[o] || (e[o] = t(o));
  };
}
const _i = /-(\w)/g, bi = vi((t) => t.replace(_i, (e, n) => n.toUpperCase())), sn = ["Start", "Add", "Remove", "Update", "End"], un = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], cn = ["Move"], Ci = [cn, sn, un].flatMap((t) => t).map((t) => `on${t}`), Dt = {
  manage: cn,
  manageAndEmit: sn,
  emit: un
};
function yi(t) {
  return Ci.indexOf(t) !== -1;
}
const wi = [
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
function Ei(t) {
  return wi.includes(t);
}
function Di(t) {
  return ["transition-group", "TransitionGroup"].includes(t);
}
function dn(t) {
  return ["id", "class", "role", "style"].includes(t) || t.startsWith("data-") || t.startsWith("aria-") || t.startsWith("on");
}
function fn(t) {
  return t.reduce((e, [n, o]) => (e[n] = o, e), {});
}
function Si({ $attrs: t, componentData: e = {} }) {
  return {
    ...fn(
      Object.entries(t).filter(([o, i]) => dn(o))
    ),
    ...e
  };
}
function xi({ $attrs: t, callBackBuilder: e }) {
  const n = fn(hn(t));
  Object.entries(e).forEach(([i, r]) => {
    Dt[i].forEach((l) => {
      n[`on${l}`] = r(l);
    });
  });
  const o = `[data-draggable]${n.draggable || ""}`;
  return {
    ...n,
    draggable: o
  };
}
function hn(t) {
  return Object.entries(t).filter(([e, n]) => !dn(e)).map(([e, n]) => [bi(e), n]).filter(([e, n]) => !yi(e));
}
const Rt = ({ el: t }) => t, Ti = (t, e) => t.__draggable_context = e, Xt = (t) => t.__draggable_context;
class ki {
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
      Ti(Rt(o), {
        element: n[i],
        index: i
      });
    });
  }
  getUnderlyingVm(e) {
    return Xt(e);
  }
  getVmIndexFromDomIndex(e, n) {
    const { defaultNodes: o } = this, { length: i } = o, r = n.children, l = r.item(e);
    if (l === null)
      return i;
    const a = Xt(l);
    if (a)
      return a.index;
    if (i === 0)
      return 0;
    const s = Rt(o[0]), u = [...r].findIndex(
      (d) => d === s
    );
    return e < u ? 0 : i;
  }
}
function Ii(t, e) {
  const n = t[e];
  return n ? n() : [];
}
function Oi({ $slots: t, realList: e, getKey: n }) {
  const o = e || [], [i, r] = ["header", "footer"].map(
    (s) => Ii(t, s)
  ), { item: l } = t;
  if (!l)
    throw new Error("draggable element must have an item slot");
  const a = o.flatMap(
    (s, u) => l({ element: s, index: u }).map((d) => (d.key = n(s), d.props = { ...d.props || {}, "data-draggable": !0 }, d))
  );
  if (a.length !== o.length)
    throw new Error("Item slot must have only one child");
  return {
    header: i,
    footer: r,
    default: a
  };
}
function Ni(t) {
  const e = Di(t), n = !Ei(t) && !e;
  return {
    transition: e,
    externalComponent: n,
    tag: n ? Tn(t) : e ? kn : t
  };
}
function Ai({ $slots: t, tag: e, realList: n, getKey: o }) {
  const i = Oi({ $slots: t, realList: n, getKey: o }), r = Ni(e);
  return new ki({ nodes: i, root: r, realList: n });
}
function mn(t, e) {
  Zt(() => this.$emit(t.toLowerCase(), e));
}
function gn(t) {
  return (e, n) => {
    if (this.realList !== null)
      return this[`onDrag${t}`](e, n);
  };
}
function Mi(t) {
  const e = gn.call(this, t);
  return (n, o) => {
    e.call(this, n, o), mn.call(this, t, n);
  };
}
let _t = null;
const $i = {
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
}, Pi = [
  "update:modelValue",
  "change",
  ...[...Dt.manageAndEmit, ...Dt.emit].map((t) => t.toLowerCase())
], Li = In({
  name: "draggable",
  inheritAttrs: !1,
  props: $i,
  emits: Pi,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: t, $attrs: e, tag: n, componentData: o, realList: i, getKey: r } = this, l = Ai({
        $slots: t,
        tag: n,
        realList: i,
        getKey: r
      });
      this.componentStructure = l;
      const a = Si({ $attrs: e, componentData: o });
      return l.render(Nt, a);
    } catch (t) {
      return this.error = !0, Nt("pre", { style: { color: "red" } }, t.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && pi.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: t, $el: e, componentStructure: n } = this;
    n.updated();
    const o = xi({
      $attrs: t,
      callBackBuilder: {
        manageAndEmit: (r) => Mi.call(this, r),
        emit: (r) => mn.bind(this, r),
        manage: (r) => gn.call(this, r)
      }
    }), i = e.nodeType === 1 ? e : e.parentElement;
    this._sortable = new C(i, o), this.targetDomElement = i, i.__draggable_component__ = this;
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
        e && hn(t).forEach(([n, o]) => {
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
      Zt(() => this.$emit("change", t));
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
      this.context = this.getUnderlyingVm(t.item), t.item._underlying_vm_ = this.clone(this.context.element), _t = t.item;
    },
    onDragAdd(t) {
      const e = t.item._underlying_vm_;
      if (e === void 0)
        return;
      vt(t.item);
      const n = this.getVmIndexFromDomIndex(t.newIndex);
      this.spliceList(n, 0, e);
      const o = { element: e, newIndex: n };
      this.emitChanges({ added: o });
    },
    onDragRemove(t) {
      if (zt(this.$el, t.item, t.oldIndex), t.pullMode === "clone") {
        vt(t.clone);
        return;
      }
      const { index: e, element: n } = this.context;
      this.spliceList(e, 1);
      const o = { element: n, oldIndex: e };
      this.emitChanges({ removed: o });
    },
    onDragUpdate(t) {
      vt(t.item), zt(t.from, t.item, t.oldIndex);
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
      return n.indexOf(_t) !== -1 || !e.willInsertAfter ? i : i + 1;
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
      _t = null;
    }
  }
}), Vi = { class: "settings-modal" }, Fi = ["textContent"], Hi = ["textContent"], Bi = { class: "column-settings-list" }, zi = { class: "list-item" }, Ri = { class: "actions-container" }, Xi = ["textContent"], Yi = ["textContent"], Zi = {
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
    return o.columns.forEach((l) => i.value.push({ ...l })), (l, a) => (h(), ve(Gt, null, {
      default: bt(() => [
        g("div", Vi, [
          g("div", {
            class: "settings-modal-title",
            textContent: z(D(H).getTranslate("column_settings_modal.title"))
          }, null, 8, Fi),
          g("div", {
            class: "settings-modal-description",
            textContent: z(D(H).getTranslate("column_settings_modal.description"))
          }, null, 8, Hi),
          g("div", Bi, [
            ne(D(Li), {
              modelValue: D(i),
              "onUpdate:modelValue": a[0] || (a[0] = (s) => ue(i) ? i.value = s : i = s),
              "item-key": "key",
              animation: 300
            }, {
              item: bt(({ element: s }) => [
                g("div", zi, [
                  ne(zo, {
                    label: s.label,
                    "model-value": s.visible,
                    "onUpdate:modelValue": (u) => s.visible = u
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"]),
                  ne(j, {
                    icon: "drag-indicator",
                    class: "drag-indicator-icon"
                  })
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          g("div", Ri, [
            g("div", {
              class: "button button-cancel",
              onClick: a[1] || (a[1] = (s) => n("close")),
              textContent: z(D(H).getTranslate("column_settings_modal.actions.cancel"))
            }, null, 8, Xi),
            g("div", {
              class: "button button-confirm",
              onClick: r,
              textContent: z(D(H).getTranslate("column_settings_modal.actions.save"))
            }, null, 8, Yi)
          ])
        ])
      ]),
      _: 1
    }));
  }
}, Wi = { class: "table-controls" }, Ui = { class: "settings-container" }, or = {
  __name: "TableControls",
  setup(t) {
    let e = P("small"), n = P("black"), o = P(!1), i = P(!1), r = [], l = P(!1), a = Wt();
    function s() {
      l.value = !l.value, a.triggerEvent("toggle-search-event");
    }
    function u(p, m) {
      e.value = p, n.value = m, a.triggerEvent("update-table-style-event", { newRowSize: p, newDigitsColor: m }), o.value = !1;
    }
    function d(p) {
      r = p, a.triggerEvent("update-table-columns-event", p), i.value = !1;
    }
    function f(p) {
      r = p;
    }
    return a.addEventHandler("sync-table-columns-event", f), (p, m) => (h(), _("div", null, [
      g("div", Wi, [
        g("div", {
          onClick: s,
          class: Ne(["search-button", D(l) ? "active" : "inactive"])
        }, [
          ne(j, {
            icon: "search",
            class: "search-icon"
          })
        ], 2),
        m[4] || (m[4] = g("div", { class: "divider" }, null, -1)),
        g("div", Ui, [
          g("div", {
            onClick: m[0] || (m[0] = (v) => ue(i) ? i.value = !0 : i = !0),
            class: "setting"
          }, [
            ne(j, {
              icon: "columns",
              class: "setting-icon"
            })
          ]),
          g("div", {
            onClick: m[1] || (m[1] = (v) => ue(o) ? o.value = !0 : o = !0),
            class: "setting"
          }, [
            ne(j, {
              icon: "settings",
              class: "setting-icon"
            })
          ])
        ])
      ]),
      D(o) ? (h(), ve(Po, {
        key: 0,
        "row-size-value": D(e),
        "digits-color-value": D(n),
        onSave: u,
        onClose: m[2] || (m[2] = (v) => ue(o) ? o.value = !1 : o = !1)
      }, null, 8, ["row-size-value", "digits-color-value"])) : ie("", !0),
      D(i) ? (h(), ve(Zi, {
        key: 1,
        columns: D(r),
        onClose: m[3] || (m[3] = (v) => ue(i) ? i.value = !1 : i = !1),
        onSave: d
      }, null, 8, ["columns"])) : ie("", !0)
    ]));
  }
}, Gi = "Search...", ji = {
  title: "Column order and visibility",
  description: "Changes the order and visibility of columns in the following settings:",
  actions: {
    save: "Save",
    cancel: "Cancel"
  }
}, qi = {
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
}, Ki = {
  search: Gi,
  column_settings_modal: ji,
  style_settings_modal: qi
};
function Qi(t) {
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
  mitt: Qi(),
  translation: {
    file: Ki,
    setTranslate: (t) => H.setTranslateFile(t)
  }
};
export {
  or as TableControls,
  nr as TableData
};

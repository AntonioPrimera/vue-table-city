var vr = Object.defineProperty;
var yr = (r, t, e) => t in r ? vr(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var f = (r, t, e) => (yr(r, typeof t != "symbol" ? t + "" : t, e), e), mn = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var Ce = (r, t, e) => (mn(r, t, "read from private field"), e ? e.call(r) : t.get(r)), rt = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, We = (r, t, e, n) => (mn(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
import { openBlock as p, createElementBlock as v, createElementVNode as b, createCommentVNode as be, ref as Q, computed as mt, normalizeClass as Ue, onMounted as _r, Fragment as Oe, renderList as Se, toDisplayString as ne, createVNode as he, unref as k, createBlock as xe, onUnmounted as Cr, withModifiers as xr, renderSlot as Dr, withCtx as Zt, isRef as De, withDirectives as Tr, vModelCheckbox as Er, resolveComponent as kr, TransitionGroup as Mr, defineComponent as Pr, h as gn, nextTick as Yn } from "vue";
const Or = { key: 0 }, Sr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Ir = { key: 1 }, Nr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Yr = { key: 2 }, Hr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Lr = { key: 3 }, Ar = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Fr = { key: 4 }, $r = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Rr = { key: 5 }, Wr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Vr = { key: 6 }, qr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Br = { key: 7 }, Xr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, zr = { key: 8 }, Gr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Qr = { key: 9 }, jr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Zr = { key: 10 }, Ur = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Kr = { key: 11 }, Jr = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ei = { key: 12 }, ti = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 6 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, se = {
  __name: "Icon",
  props: {
    icon: {
      type: String,
      required: !0
    }
  },
  setup(r) {
    return (t, e) => r.icon === "minus" ? (p(), v("div", Or, [
      (p(), v("svg", Sr, e[0] || (e[0] = [
        b("path", {
          d: "M16.6667 9.16797H3.33333C2.87333 9.16797 2.5 9.5413 2.5 10.0013C2.5 10.4613 2.87333 10.8346 3.33333 10.8346H16.6667C17.1267 10.8346 17.5 10.4613 17.5 10.0013C17.5 9.5413 17.1267 9.16797 16.6667 9.16797Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : r.icon === "plus" ? (p(), v("div", Ir, [
      (p(), v("svg", Nr, e[1] || (e[1] = [
        b("path", {
          d: "M11.3333 5.33333H6.66667V0.666667C6.66667 0.298667 6.368 0 6 0C5.632 0 5.33333 0.298667 5.33333 0.666667V5.33333H0.666667C0.298667 5.33333 0 5.632 0 6C0 6.368 0.298667 6.66667 0.666667 6.66667H5.33333V11.3333C5.33333 11.7013 5.632 12 6 12C6.368 12 6.66667 11.7013 6.66667 11.3333V6.66667H11.3333C11.7013 6.66667 12 6.368 12 6C12 5.632 11.7013 5.33333 11.3333 5.33333Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : r.icon === "radio-circle" ? (p(), v("div", Yr, [
      (p(), v("svg", Hr, e[2] || (e[2] = [
        b("circle", {
          cx: "9",
          cy: "9",
          r: "8.25",
          fill: "white",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1)
      ])))
    ])) : r.icon === "radio-circle-selected" ? (p(), v("div", Lr, [
      (p(), v("svg", Ar, e[3] || (e[3] = [
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
    ])) : r.icon === "small-row" ? (p(), v("div", Fr, [
      (p(), v("svg", $r, e[4] || (e[4] = [
        b("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.07997 7.07993V8.91993H12.92V7.07993H3.07997ZM2.21457 5.94512C2.45226 5.79232 2.73965 5.71992 3.02219 5.71992H12.9777C13.2603 5.71992 13.5477 5.79232 13.7854 5.94512C14.0156 6.09316 14.28 6.37949 14.28 6.79993V9.19993C14.28 9.62036 14.0156 9.90669 13.7854 10.0547C13.5477 10.2075 13.2603 10.2799 12.9777 10.2799H3.02219C2.73965 10.2799 2.45226 10.2075 2.21457 10.0547C1.9843 9.9067 1.71997 9.62036 1.71997 9.19993V6.79993C1.71997 6.37949 1.9843 6.09316 2.21457 5.94512Z",
          fill: "black"
        }, null, -1)
      ])))
    ])) : r.icon === "medium-row" ? (p(), v("div", Rr, [
      (p(), v("svg", Wr, e[5] || (e[5] = [
        b("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.07997 6.27992V9.71992H12.92V6.27992H3.07997ZM1.71997 6.19992C1.71997 5.47007 2.32669 4.91992 3.02219 4.91992H12.9777C13.6732 4.91992 14.28 5.47007 14.28 6.19992V9.79992C14.28 10.5298 13.6732 11.0799 12.9777 11.0799H3.02219C2.32669 11.0799 1.71997 10.5298 1.71997 9.79992V6.19992Z",
          fill: "black"
        }, null, -1)
      ])))
    ])) : r.icon === "large-row" ? (p(), v("div", Vr, [
      (p(), v("svg", qr, e[6] || (e[6] = [
        b("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.10301 5.47992C3.09154 5.50566 3.07997 5.54589 3.07997 5.59992V10.3999C3.07997 10.454 3.09154 10.4942 3.10301 10.5199H12.8969C12.9084 10.4942 12.92 10.454 12.92 10.3999V5.59992C12.92 5.54589 12.9084 5.50566 12.8969 5.47992H3.10301ZM1.71997 5.59992C1.71997 4.95171 2.15403 4.11992 3.02219 4.11992H12.9777C13.8459 4.11992 14.28 4.95171 14.28 5.59992V10.3999C14.28 11.0481 13.8459 11.8799 12.9777 11.8799H3.02219C2.15403 11.8799 1.71997 11.0481 1.71997 10.3999V5.59992Z",
          fill: "black"
        }, null, -1)
      ])))
    ])) : r.icon === "check" ? (p(), v("div", Br, [
      (p(), v("svg", Xr, e[7] || (e[7] = [
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
    ])) : r.icon === "drag-indicator" ? (p(), v("div", zr, [
      (p(), v("svg", Gr, e[8] || (e[8] = [
        b("path", {
          d: "M5.99984 13.3334C5.63317 13.3334 5.31928 13.2029 5.05817 12.9417C4.79706 12.6806 4.6665 12.3667 4.6665 12.0001C4.6665 11.6334 4.79706 11.3195 5.05817 11.0584C5.31928 10.7973 5.63317 10.6667 5.99984 10.6667C6.3665 10.6667 6.68039 10.7973 6.9415 11.0584C7.20261 11.3195 7.33317 11.6334 7.33317 12.0001C7.33317 12.3667 7.20261 12.6806 6.9415 12.9417C6.68039 13.2029 6.3665 13.3334 5.99984 13.3334ZM9.99984 13.3334C9.63317 13.3334 9.31928 13.2029 9.05817 12.9417C8.79706 12.6806 8.6665 12.3667 8.6665 12.0001C8.6665 11.6334 8.79706 11.3195 9.05817 11.0584C9.31928 10.7973 9.63317 10.6667 9.99984 10.6667C10.3665 10.6667 10.6804 10.7973 10.9415 11.0584C11.2026 11.3195 11.3332 11.6334 11.3332 12.0001C11.3332 12.3667 11.2026 12.6806 10.9415 12.9417C10.6804 13.2029 10.3665 13.3334 9.99984 13.3334ZM5.99984 9.33342C5.63317 9.33342 5.31928 9.20286 5.05817 8.94175C4.79706 8.68064 4.6665 8.36675 4.6665 8.00008C4.6665 7.63341 4.79706 7.31953 5.05817 7.05841C5.31928 6.7973 5.63317 6.66675 5.99984 6.66675C6.3665 6.66675 6.68039 6.7973 6.9415 7.05841C7.20261 7.31953 7.33317 7.63341 7.33317 8.00008C7.33317 8.36675 7.20261 8.68064 6.9415 8.94175C6.68039 9.20286 6.3665 9.33342 5.99984 9.33342ZM9.99984 9.33342C9.63317 9.33342 9.31928 9.20286 9.05817 8.94175C8.79706 8.68064 8.6665 8.36675 8.6665 8.00008C8.6665 7.63341 8.79706 7.31953 9.05817 7.05841C9.31928 6.7973 9.63317 6.66675 9.99984 6.66675C10.3665 6.66675 10.6804 6.7973 10.9415 7.05841C11.2026 7.31953 11.3332 7.63341 11.3332 8.00008C11.3332 8.36675 11.2026 8.68064 10.9415 8.94175C10.6804 9.20286 10.3665 9.33342 9.99984 9.33342ZM5.99984 5.33341C5.63317 5.33341 5.31928 5.20286 5.05817 4.94175C4.79706 4.68064 4.6665 4.36675 4.6665 4.00008C4.6665 3.63341 4.79706 3.31953 5.05817 3.05841C5.31928 2.7973 5.63317 2.66675 5.99984 2.66675C6.3665 2.66675 6.68039 2.7973 6.9415 3.05841C7.20261 3.31953 7.33317 3.63341 7.33317 4.00008C7.33317 4.36675 7.20261 4.68064 6.9415 4.94175C6.68039 5.20286 6.3665 5.33341 5.99984 5.33341ZM9.99984 5.33341C9.63317 5.33341 9.31928 5.20286 9.05817 4.94175C8.79706 4.68064 8.6665 4.36675 8.6665 4.00008C8.6665 3.63341 8.79706 3.31953 9.05817 3.05841C9.31928 2.7973 9.63317 2.66675 9.99984 2.66675C10.3665 2.66675 10.6804 2.7973 10.9415 3.05841C11.2026 3.31953 11.3332 3.63341 11.3332 4.00008C11.3332 4.36675 11.2026 4.68064 10.9415 4.94175C10.6804 5.20286 10.3665 5.33341 9.99984 5.33341Z",
          fill: "#303136"
        }, null, -1)
      ])))
    ])) : r.icon === "search" ? (p(), v("div", Qr, [
      (p(), v("svg", jr, e[9] || (e[9] = [
        b("path", {
          d: "M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L19.5859 21.5859C20.1379 22.1379 21.0339 22.1379 21.5859 21.5859C22.1379 21.0339 22.1379 20.1379 21.5859 19.5859L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : r.icon === "columns" ? (p(), v("div", Zr, [
      (p(), v("svg", Ur, e[10] || (e[10] = [
        b("path", {
          d: "M2.49984 2.5C2.039 2.5 1.6665 2.8725 1.6665 3.33333V16.6667C1.6665 17.1275 2.039 17.5 2.49984 17.5H5.83317V2.5H2.49984ZM7.49984 2.5V17.5H12.4998V2.5H7.49984ZM14.1665 2.5V17.5H17.4998C17.9607 17.5 18.3332 17.1275 18.3332 16.6667V3.33333C18.3332 2.8725 17.9607 2.5 17.4998 2.5H14.1665Z",
          fill: "#303136"
        }, null, -1)
      ])))
    ])) : r.icon === "settings" ? (p(), v("div", Kr, [
      (p(), v("svg", Jr, e[11] || (e[11] = [
        b("path", {
          d: "M8.74188 1.66669C8.34271 1.66669 8.00149 1.94885 7.92482 2.34052L7.6465 3.76955C6.96253 4.02819 6.3301 4.38952 5.77475 4.8454L4.40431 4.37339C4.02681 4.24339 3.61147 4.39949 3.41147 4.74449L2.15496 6.92222C1.9558 7.26805 2.02828 7.7071 2.32912 7.96877L3.42775 8.92417C3.37061 9.2753 3.33335 9.63276 3.33335 10C3.33335 10.3673 3.37061 10.7247 3.42775 11.0759L2.32912 12.0313C2.02828 12.2929 1.9558 12.732 2.15496 13.0778L3.41147 15.2556C3.61064 15.6014 4.02681 15.7574 4.40431 15.6283L5.77475 15.1563C6.32992 15.6119 6.96284 15.972 7.6465 16.2305L7.92482 17.6595C8.00149 18.0512 8.34271 18.3334 8.74188 18.3334H11.2582C11.6573 18.3334 11.9985 18.0512 12.0752 17.6595L12.3535 16.2305C13.0375 15.9719 13.6699 15.6105 14.2253 15.1546L15.5957 15.6266C15.9732 15.7566 16.3886 15.6014 16.5886 15.2556L17.8451 13.0762C18.0442 12.7304 17.9717 12.2929 17.6709 12.0313L16.5723 11.0759C16.6294 10.7247 16.6667 10.3673 16.6667 10C16.6667 9.63276 16.6294 9.2753 16.5723 8.92417L17.6709 7.96877C17.9717 7.7071 18.0442 7.26805 17.8451 6.92222L16.5886 4.74449C16.3894 4.39865 15.9732 4.2426 15.5957 4.37177L14.2253 4.84377C13.6701 4.38818 13.0372 4.02807 12.3535 3.76955L12.0752 2.34052C11.9985 1.94885 11.6573 1.66669 11.2582 1.66669H8.74188ZM10 6.66669C11.8408 6.66669 13.3333 8.15919 13.3333 10C13.3333 11.8409 11.8408 13.3334 10 13.3334C8.15918 13.3334 6.66668 11.8409 6.66668 10C6.66668 8.15919 8.15918 6.66669 10 6.66669Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : r.icon === "sort" ? (p(), v("div", ei, [
      (p(), v("svg", ti, e[12] || (e[12] = [
        b("path", {
          d: "M3.45883 11.9404C3.28486 12.3421 2.71514 12.3421 2.54117 11.9404L0.704461 7.69868C0.561505 7.36854 0.803529 7 1.16329 7L4.83671 7C5.19647 7 5.43849 7.36854 5.29554 7.69868L3.45883 11.9404Z",
          fill: "currentColor"
        }, null, -1),
        b("path", {
          d: "M2.54117 1.05963C2.71514 0.657866 3.28486 0.657866 3.45883 1.05963L5.29554 5.30132C5.43849 5.63146 5.19647 6 4.83671 6L1.16329 6C0.803529 6 0.561506 5.63146 0.704461 5.30132L2.54117 1.05963Z",
          fill: "currentColor"
        }, null, -1)
      ])))
    ])) : be("", !0);
  }
};
function Hn() {
  let r = window.__vue3TableDataConfig.mitt;
  function t(i, a) {
    r.on(i, a);
  }
  function e(i, a) {
    r.off(i, a);
  }
  function n(i, a = null) {
    r.emit(i, a);
  }
  return {
    addEventHandler: t,
    removeEventHandler: e,
    triggerEvent: n
  };
}
const K = {
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
  getTranslate(r, t = window.__vue3TableDataConfig.translation.file) {
    return r.split(".").forEach((n) => {
      t ? t = t[n] : t = void 0;
    }), t;
  },
  /**
   * Set the translation file. We need a json file with the proper structure
   * (you can find the structure in translate.json file)
   *
   */
  setTranslateFile(r) {
    this.hasValidContent(r) && (window.__vue3TableDataConfig.translation.file = r);
  },
  /**
   * Validate json file. Check if the given file has the proper structure.
   * You can find the structure in translate.json file
   */
  hasValidContent(r) {
    return typeof r != "object" ? (console.error("The given file is not a valid json file", r), !1) : ([
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
      if (this.getTranslate(e, r) === void 0)
        return console.error(
          "The given file has an invalid structure. We could not find the translate for path: " + e.replaceAll(".", " -> ")
        ), !1;
    }), !0);
  }
}, ie = {
  //todo: remove this function - replace it with formatNumber(...)
  formatNumericValue(r) {
    return this.isNumericValue(r) ? this.formatNumber(r, 2) : r;
  },
  isNumericValue(r) {
    return r !== null && typeof r == "number";
  },
  isDate(r) {
    return !r || typeof r == "string" && r.length !== 10 ? !1 : this.parseDate(r) instanceof Date;
  },
  parseDate(r, t = "d.m.Y") {
    if (t === "d.m.Y") {
      let e = r.substring(6), n = r.substr(3, 2), i = r.substr(0, 2);
      return new Date(e, n - 1, i, 0, 0, 0, 0);
    }
  },
  formatNumber(r, t = 2, e = ",", n = ".", i = "", a = "") {
    if (r === null || isNaN(r))
      return r;
    let o = r < 0 ? "-" : "", s = Math.abs(r), l = Math.floor(s), u = s - l, c = l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, n), d = u.toFixed(t).slice(2);
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
  cleanTerm(r) {
    return r && typeof r == "string" ? (r = r.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), r.replace(/[^0-9a-z]/gi, "").toLowerCase()) : "";
  },
  getValue(r, t) {
    return t.includes(".") ? t.split(".").reduce((e, n) => e && e[n], r) : r[t];
  },
  uid(r) {
    let t = "";
    for (; t.length < r; )
      t += Math.random().toString(36).substring(2, 15);
    return t.substring(0, r);
  }
  //uuid4() {
  //    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //        let r = Math.random() * 16 | 0;
  //        let v = c === 'x' ? r : (r & 0x3 | 0x8);
  //        return v.toString(16);
  //    });
  //}
}, Ln = 6048e5, ni = 864e5, ri = 6e4, ii = 36e5, ai = 1e3, wn = Symbol.for("constructDateFrom");
function j(r, t) {
  return typeof r == "function" ? r(t) : r && typeof r == "object" && wn in r ? r[wn](t) : r instanceof Date ? new r.constructor(t) : new Date(t);
}
function B(r, t) {
  return j(t || r, r);
}
function An(r, t, e) {
  const n = B(r, e == null ? void 0 : e.in);
  return isNaN(t) ? j((e == null ? void 0 : e.in) || r, NaN) : (t && n.setDate(n.getDate() + t), n);
}
let oi = {};
function et() {
  return oi;
}
function He(r, t) {
  var s, l, u, c;
  const e = et(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? e.weekStartsOn ?? ((c = (u = e.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = B(r, t == null ? void 0 : t.in), a = i.getDay(), o = (a < n ? 7 : 0) + a - n;
  return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function Ke(r, t) {
  return He(r, { ...t, weekStartsOn: 1 });
}
function Fn(r, t) {
  const e = B(r, t == null ? void 0 : t.in), n = e.getFullYear(), i = j(e, 0);
  i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Ke(i), o = j(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Ke(o);
  return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= s.getTime() ? n : n - 1;
}
function kt(r) {
  const t = B(r), e = new Date(
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
  return e.setUTCFullYear(t.getFullYear()), +r - +e;
}
function si(r, ...t) {
  const e = j.bind(
    null,
    r || t.find((n) => typeof n == "object")
  );
  return t.map(e);
}
function pn(r, t) {
  const e = B(r, t == null ? void 0 : t.in);
  return e.setHours(0, 0, 0, 0), e;
}
function li(r, t, e) {
  const [n, i] = si(
    e == null ? void 0 : e.in,
    r,
    t
  ), a = pn(n), o = pn(i), s = +a - kt(a), l = +o - kt(o);
  return Math.round((s - l) / ni);
}
function ui(r, t) {
  const e = Fn(r, t), n = j((t == null ? void 0 : t.in) || r, 0);
  return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), Ke(n);
}
function ci(r) {
  return r instanceof Date || typeof r == "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function di(r) {
  return !(!ci(r) && typeof r != "number" || isNaN(+B(r)));
}
function fi(r, t) {
  const e = B(r, t == null ? void 0 : t.in);
  return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
const hi = {
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
}, mi = (r, t, e) => {
  let n;
  const i = hi[r];
  return typeof i == "string" ? n = i : t === 1 ? n = i.one : n = i.other.replace("{{count}}", t.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Ft(r) {
  return (t = {}) => {
    const e = t.width ? String(t.width) : r.defaultWidth;
    return r.formats[e] || r.formats[r.defaultWidth];
  };
}
const gi = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, wi = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, pi = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, bi = {
  date: Ft({
    formats: gi,
    defaultWidth: "full"
  }),
  time: Ft({
    formats: wi,
    defaultWidth: "full"
  }),
  dateTime: Ft({
    formats: pi,
    defaultWidth: "full"
  })
}, vi = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, yi = (r, t, e, n) => vi[r];
function it(r) {
  return (t, e) => {
    const n = e != null && e.context ? String(e.context) : "standalone";
    let i;
    if (n === "formatting" && r.formattingValues) {
      const o = r.defaultFormattingWidth || r.defaultWidth, s = e != null && e.width ? String(e.width) : o;
      i = r.formattingValues[s] || r.formattingValues[o];
    } else {
      const o = r.defaultWidth, s = e != null && e.width ? String(e.width) : r.defaultWidth;
      i = r.values[s] || r.values[o];
    }
    const a = r.argumentCallback ? r.argumentCallback(t) : t;
    return i[a];
  };
}
const _i = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ci = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, xi = {
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
}, Di = {
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
}, Ti = {
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
}, Ei = {
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
}, ki = (r, t) => {
  const e = Number(r), n = e % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, Mi = {
  ordinalNumber: ki,
  era: it({
    values: _i,
    defaultWidth: "wide"
  }),
  quarter: it({
    values: Ci,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: it({
    values: xi,
    defaultWidth: "wide"
  }),
  day: it({
    values: Di,
    defaultWidth: "wide"
  }),
  dayPeriod: it({
    values: Ti,
    defaultWidth: "wide",
    formattingValues: Ei,
    defaultFormattingWidth: "wide"
  })
};
function at(r) {
  return (t, e = {}) => {
    const n = e.width, i = n && r.matchPatterns[n] || r.matchPatterns[r.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const o = a[0], s = n && r.parsePatterns[n] || r.parsePatterns[r.defaultParseWidth], l = Array.isArray(s) ? Oi(s, (d) => d.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      Pi(s, (d) => d.test(o))
    );
    let u;
    u = r.valueCallback ? r.valueCallback(l) : l, u = e.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      e.valueCallback(u)
    ) : u;
    const c = t.slice(o.length);
    return { value: u, rest: c };
  };
}
function Pi(r, t) {
  for (const e in r)
    if (Object.prototype.hasOwnProperty.call(r, e) && t(r[e]))
      return e;
}
function Oi(r, t) {
  for (let e = 0; e < r.length; e++)
    if (t(r[e]))
      return e;
}
function Si(r) {
  return (t, e = {}) => {
    const n = t.match(r.matchPattern);
    if (!n)
      return null;
    const i = n[0], a = t.match(r.parsePattern);
    if (!a)
      return null;
    let o = r.valueCallback ? r.valueCallback(a[0]) : a[0];
    o = e.valueCallback ? e.valueCallback(o) : o;
    const s = t.slice(i.length);
    return { value: o, rest: s };
  };
}
const Ii = /^(\d+)(th|st|nd|rd)?/i, Ni = /\d+/i, Yi = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Hi = {
  any: [/^b/i, /^(a|c)/i]
}, Li = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ai = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Fi = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $i = {
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
}, Ri = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Wi = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Vi = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, qi = {
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
}, Bi = {
  ordinalNumber: Si({
    matchPattern: Ii,
    parsePattern: Ni,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: at({
    matchPatterns: Yi,
    defaultMatchWidth: "wide",
    parsePatterns: Hi,
    defaultParseWidth: "any"
  }),
  quarter: at({
    matchPatterns: Li,
    defaultMatchWidth: "wide",
    parsePatterns: Ai,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: at({
    matchPatterns: Fi,
    defaultMatchWidth: "wide",
    parsePatterns: $i,
    defaultParseWidth: "any"
  }),
  day: at({
    matchPatterns: Ri,
    defaultMatchWidth: "wide",
    parsePatterns: Wi,
    defaultParseWidth: "any"
  }),
  dayPeriod: at({
    matchPatterns: Vi,
    defaultMatchWidth: "any",
    parsePatterns: qi,
    defaultParseWidth: "any"
  })
}, $n = {
  code: "en-US",
  formatDistance: mi,
  formatLong: bi,
  formatRelative: yi,
  localize: Mi,
  match: Bi,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Xi(r, t) {
  const e = B(r, t == null ? void 0 : t.in);
  return li(e, fi(e)) + 1;
}
function Rn(r, t) {
  const e = B(r, t == null ? void 0 : t.in), n = +Ke(e) - +ui(e);
  return Math.round(n / Ln) + 1;
}
function an(r, t) {
  var c, d, m, g;
  const e = B(r, t == null ? void 0 : t.in), n = e.getFullYear(), i = et(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((g = (m = i.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, o = j((t == null ? void 0 : t.in) || r, 0);
  o.setFullYear(n + 1, 0, a), o.setHours(0, 0, 0, 0);
  const s = He(o, t), l = j((t == null ? void 0 : t.in) || r, 0);
  l.setFullYear(n, 0, a), l.setHours(0, 0, 0, 0);
  const u = He(l, t);
  return +e >= +s ? n + 1 : +e >= +u ? n : n - 1;
}
function zi(r, t) {
  var s, l, u, c;
  const e = et(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((c = (u = e.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, i = an(r, t), a = j((t == null ? void 0 : t.in) || r, 0);
  return a.setFullYear(i, 0, n), a.setHours(0, 0, 0, 0), He(a, t);
}
function Wn(r, t) {
  const e = B(r, t == null ? void 0 : t.in), n = +He(e, t) - +zi(e, t);
  return Math.round(n / Ln) + 1;
}
function N(r, t) {
  const e = r < 0 ? "-" : "", n = Math.abs(r).toString().padStart(t, "0");
  return e + n;
}
const Pe = {
  // Year
  y(r, t) {
    const e = r.getFullYear(), n = e > 0 ? e : 1 - e;
    return N(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(r, t) {
    const e = r.getMonth();
    return t === "M" ? String(e + 1) : N(e + 1, 2);
  },
  // Day of the month
  d(r, t) {
    return N(r.getDate(), t.length);
  },
  // AM or PM
  a(r, t) {
    const e = r.getHours() / 12 >= 1 ? "pm" : "am";
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
  h(r, t) {
    return N(r.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(r, t) {
    return N(r.getHours(), t.length);
  },
  // Minute
  m(r, t) {
    return N(r.getMinutes(), t.length);
  },
  // Second
  s(r, t) {
    return N(r.getSeconds(), t.length);
  },
  // Fraction of second
  S(r, t) {
    const e = t.length, n = r.getMilliseconds(), i = Math.trunc(
      n * Math.pow(10, e - 3)
    );
    return N(i, t.length);
  }
}, Ve = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, bn = {
  // Era
  G: function(r, t, e) {
    const n = r.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(n, { width: "abbreviated" });
      case "GGGGG":
        return e.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(r, t, e) {
    if (t === "yo") {
      const n = r.getFullYear(), i = n > 0 ? n : 1 - n;
      return e.ordinalNumber(i, { unit: "year" });
    }
    return Pe.y(r, t);
  },
  // Local week-numbering year
  Y: function(r, t, e, n) {
    const i = an(r, n), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const o = a % 100;
      return N(o, 2);
    }
    return t === "Yo" ? e.ordinalNumber(a, { unit: "year" }) : N(a, t.length);
  },
  // ISO week-numbering year
  R: function(r, t) {
    const e = Fn(r);
    return N(e, t.length);
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
  u: function(r, t) {
    const e = r.getFullYear();
    return N(e, t.length);
  },
  // Quarter
  Q: function(r, t, e) {
    const n = Math.ceil((r.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return N(n, 2);
      case "Qo":
        return e.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return e.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return e.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return e.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(r, t, e) {
    const n = Math.ceil((r.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return N(n, 2);
      case "qo":
        return e.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return e.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(r, t, e) {
    const n = r.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Pe.M(r, t);
      case "Mo":
        return e.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return e.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return e.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return e.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(r, t, e) {
    const n = r.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return N(n + 1, 2);
      case "Lo":
        return e.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return e.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return e.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return e.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(r, t, e, n) {
    const i = Wn(r, n);
    return t === "wo" ? e.ordinalNumber(i, { unit: "week" }) : N(i, t.length);
  },
  // ISO week of year
  I: function(r, t, e) {
    const n = Rn(r);
    return t === "Io" ? e.ordinalNumber(n, { unit: "week" }) : N(n, t.length);
  },
  // Day of the month
  d: function(r, t, e) {
    return t === "do" ? e.ordinalNumber(r.getDate(), { unit: "date" }) : Pe.d(r, t);
  },
  // Day of year
  D: function(r, t, e) {
    const n = Xi(r);
    return t === "Do" ? e.ordinalNumber(n, { unit: "dayOfYear" }) : N(n, t.length);
  },
  // Day of week
  E: function(r, t, e) {
    const n = r.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return e.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return e.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return e.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return e.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(r, t, e, n) {
    const i = r.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return N(a, 2);
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
  c: function(r, t, e, n) {
    const i = r.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return N(a, t.length);
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
  i: function(r, t, e) {
    const n = r.getDay(), i = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(i);
      case "ii":
        return N(i, t.length);
      case "io":
        return e.ordinalNumber(i, { unit: "day" });
      case "iii":
        return e.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return e.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return e.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return e.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(r, t, e) {
    const i = r.getHours() / 12 >= 1 ? "pm" : "am";
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
  b: function(r, t, e) {
    const n = r.getHours();
    let i;
    switch (n === 12 ? i = Ve.noon : n === 0 ? i = Ve.midnight : i = n / 12 >= 1 ? "pm" : "am", t) {
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
  B: function(r, t, e) {
    const n = r.getHours();
    let i;
    switch (n >= 17 ? i = Ve.evening : n >= 12 ? i = Ve.afternoon : n >= 4 ? i = Ve.morning : i = Ve.night, t) {
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
  h: function(r, t, e) {
    if (t === "ho") {
      let n = r.getHours() % 12;
      return n === 0 && (n = 12), e.ordinalNumber(n, { unit: "hour" });
    }
    return Pe.h(r, t);
  },
  // Hour [0-23]
  H: function(r, t, e) {
    return t === "Ho" ? e.ordinalNumber(r.getHours(), { unit: "hour" }) : Pe.H(r, t);
  },
  // Hour [0-11]
  K: function(r, t, e) {
    const n = r.getHours() % 12;
    return t === "Ko" ? e.ordinalNumber(n, { unit: "hour" }) : N(n, t.length);
  },
  // Hour [1-24]
  k: function(r, t, e) {
    let n = r.getHours();
    return n === 0 && (n = 24), t === "ko" ? e.ordinalNumber(n, { unit: "hour" }) : N(n, t.length);
  },
  // Minute
  m: function(r, t, e) {
    return t === "mo" ? e.ordinalNumber(r.getMinutes(), { unit: "minute" }) : Pe.m(r, t);
  },
  // Second
  s: function(r, t, e) {
    return t === "so" ? e.ordinalNumber(r.getSeconds(), { unit: "second" }) : Pe.s(r, t);
  },
  // Fraction of second
  S: function(r, t) {
    return Pe.S(r, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(r, t, e) {
    const n = r.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return yn(n);
      case "XXXX":
      case "XX":
        return Fe(n);
      case "XXXXX":
      case "XXX":
      default:
        return Fe(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(r, t, e) {
    const n = r.getTimezoneOffset();
    switch (t) {
      case "x":
        return yn(n);
      case "xxxx":
      case "xx":
        return Fe(n);
      case "xxxxx":
      case "xxx":
      default:
        return Fe(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(r, t, e) {
    const n = r.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + vn(n, ":");
      case "OOOO":
      default:
        return "GMT" + Fe(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(r, t, e) {
    const n = r.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + vn(n, ":");
      case "zzzz":
      default:
        return "GMT" + Fe(n, ":");
    }
  },
  // Seconds timestamp
  t: function(r, t, e) {
    const n = Math.trunc(+r / 1e3);
    return N(n, t.length);
  },
  // Milliseconds timestamp
  T: function(r, t, e) {
    return N(+r, t.length);
  }
};
function vn(r, t = "") {
  const e = r > 0 ? "-" : "+", n = Math.abs(r), i = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? e + String(i) : e + String(i) + t + N(a, 2);
}
function yn(r, t) {
  return r % 60 === 0 ? (r > 0 ? "-" : "+") + N(Math.abs(r) / 60, 2) : Fe(r, t);
}
function Fe(r, t = "") {
  const e = r > 0 ? "-" : "+", n = Math.abs(r), i = N(Math.trunc(n / 60), 2), a = N(n % 60, 2);
  return e + i + t + a;
}
const _n = (r, t) => {
  switch (r) {
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
}, Vn = (r, t) => {
  switch (r) {
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
}, Gi = (r, t) => {
  const e = r.match(/(P+)(p+)?/) || [], n = e[1], i = e[2];
  if (!i)
    return _n(r, t);
  let a;
  switch (n) {
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
  return a.replace("{{date}}", _n(n, t)).replace("{{time}}", Vn(i, t));
}, Ut = {
  p: Vn,
  P: Gi
}, Qi = /^D+$/, ji = /^Y+$/, Zi = ["D", "DD", "YY", "YYYY"];
function qn(r) {
  return Qi.test(r);
}
function Bn(r) {
  return ji.test(r);
}
function Kt(r, t, e) {
  const n = Ui(r, t, e);
  if (console.warn(n), Zi.includes(r))
    throw new RangeError(n);
}
function Ui(r, t, e) {
  const n = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${t}\`) for formatting ${n} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ki = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ji = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ea = /^'([^]*?)'?$/, ta = /''/g, na = /[a-zA-Z]/;
function ra(r, t, e) {
  var c, d, m, g, w, D, X, Z;
  const n = et(), i = (e == null ? void 0 : e.locale) ?? n.locale ?? $n, a = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((d = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((g = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, o = (e == null ? void 0 : e.weekStartsOn) ?? ((D = (w = e == null ? void 0 : e.locale) == null ? void 0 : w.options) == null ? void 0 : D.weekStartsOn) ?? n.weekStartsOn ?? ((Z = (X = n.locale) == null ? void 0 : X.options) == null ? void 0 : Z.weekStartsOn) ?? 0, s = B(r, e == null ? void 0 : e.in);
  if (!di(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Ji).map((M) => {
    const O = M[0];
    if (O === "p" || O === "P") {
      const z = Ut[O];
      return z(M, i.formatLong);
    }
    return M;
  }).join("").match(Ki).map((M) => {
    if (M === "''")
      return { isToken: !1, value: "'" };
    const O = M[0];
    if (O === "'")
      return { isToken: !1, value: ia(M) };
    if (bn[O])
      return { isToken: !0, value: M };
    if (O.match(na))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + O + "`"
      );
    return { isToken: !1, value: M };
  });
  i.localize.preprocessor && (l = i.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: o,
    locale: i
  };
  return l.map((M) => {
    if (!M.isToken)
      return M.value;
    const O = M.value;
    (!(e != null && e.useAdditionalWeekYearTokens) && Bn(O) || !(e != null && e.useAdditionalDayOfYearTokens) && qn(O)) && Kt(O, t, String(r));
    const z = bn[O[0]];
    return z(s, O, i.localize, u);
  }).join("");
}
function ia(r) {
  const t = r.match(ea);
  return t ? t[1].replace(ta, "'") : r;
}
function aa() {
  return Object.assign({}, et());
}
function oa(r, t) {
  const e = B(r, t == null ? void 0 : t.in).getDay();
  return e === 0 ? 7 : e;
}
function sa(r, t) {
  const e = la(t) ? new t(0) : j(t, 0);
  return e.setFullYear(r.getFullYear(), r.getMonth(), r.getDate()), e.setHours(
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ), e;
}
function la(r) {
  var t;
  return typeof r == "function" && ((t = r.prototype) == null ? void 0 : t.constructor) === r;
}
const ua = 10;
class Xn {
  constructor() {
    f(this, "subPriority", 0);
  }
  validate(t, e) {
    return !0;
  }
}
class ca extends Xn {
  constructor(t, e, n, i, a) {
    super(), this.value = t, this.validateValue = e, this.setValue = n, this.priority = i, a && (this.subPriority = a);
  }
  validate(t, e) {
    return this.validateValue(t, this.value, e);
  }
  set(t, e, n) {
    return this.setValue(t, e, this.value, n);
  }
}
class da extends Xn {
  constructor(e, n) {
    super();
    f(this, "priority", ua);
    f(this, "subPriority", -1);
    this.context = e || ((i) => j(n, i));
  }
  set(e, n) {
    return n.timestampIsSet ? e : j(e, sa(e, this.context));
  }
}
class I {
  run(t, e, n, i) {
    const a = this.parse(t, e, n, i);
    return a ? {
      setter: new ca(
        a.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: a.rest
    } : null;
  }
  validate(t, e, n) {
    return !0;
  }
}
class fa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 140);
    f(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
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
  set(e, n, i) {
    return n.era = i, e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const W = {
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
}, we = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function V(r, t) {
  return r && {
    value: t(r.value),
    rest: r.rest
  };
}
function A(r, t) {
  const e = t.match(r);
  return e ? {
    value: parseInt(e[0], 10),
    rest: t.slice(e[0].length)
  } : null;
}
function pe(r, t) {
  const e = t.match(r);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const n = e[1] === "+" ? 1 : -1, i = e[2] ? parseInt(e[2], 10) : 0, a = e[3] ? parseInt(e[3], 10) : 0, o = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: n * (i * ii + a * ri + o * ai),
    rest: t.slice(e[0].length)
  };
}
function zn(r) {
  return A(W.anyDigitsSigned, r);
}
function R(r, t) {
  switch (r) {
    case 1:
      return A(W.singleDigit, t);
    case 2:
      return A(W.twoDigits, t);
    case 3:
      return A(W.threeDigits, t);
    case 4:
      return A(W.fourDigits, t);
    default:
      return A(new RegExp("^\\d{1," + r + "}"), t);
  }
}
function Mt(r, t) {
  switch (r) {
    case 1:
      return A(W.singleDigitSigned, t);
    case 2:
      return A(W.twoDigitsSigned, t);
    case 3:
      return A(W.threeDigitsSigned, t);
    case 4:
      return A(W.fourDigitsSigned, t);
    default:
      return A(new RegExp("^-?\\d{1," + r + "}"), t);
  }
}
function on(r) {
  switch (r) {
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
function Gn(r, t) {
  const e = t > 0, n = e ? t : 1 - t;
  let i;
  if (n <= 50)
    i = r || 100;
  else {
    const a = n + 50, o = Math.trunc(a / 100) * 100, s = r >= a % 100;
    i = r + o - (s ? 100 : 0);
  }
  return e ? i : 1 - i;
}
function Qn(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
class ha extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 130);
    f(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, n, i) {
    const a = (o) => ({
      year: o,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return V(R(4, e), a);
      case "yo":
        return V(
          i.ordinalNumber(e, {
            unit: "year"
          }),
          a
        );
      default:
        return V(R(n.length, e), a);
    }
  }
  validate(e, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(e, n, i) {
    const a = e.getFullYear();
    if (i.isTwoDigitYear) {
      const s = Gn(
        i.year,
        a
      );
      return e.setFullYear(s, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const o = !("era" in n) || n.era === 1 ? i.year : 1 - i.year;
    return e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ma extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 130);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i) {
    const a = (o) => ({
      year: o,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return V(R(4, e), a);
      case "Yo":
        return V(
          i.ordinalNumber(e, {
            unit: "year"
          }),
          a
        );
      default:
        return V(R(n.length, e), a);
    }
  }
  validate(e, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(e, n, i, a) {
    const o = an(e, a);
    if (i.isTwoDigitYear) {
      const l = Gn(
        i.year,
        o
      );
      return e.setFullYear(
        l,
        0,
        a.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), He(e, a);
    }
    const s = !("era" in n) || n.era === 1 ? i.year : 1 - i.year;
    return e.setFullYear(s, 0, a.firstWeekContainsDate), e.setHours(0, 0, 0, 0), He(e, a);
  }
}
class ga extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 130);
    f(this, "incompatibleTokens", [
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
  parse(e, n) {
    return Mt(n === "R" ? 4 : n.length, e);
  }
  set(e, n, i) {
    const a = j(e, 0);
    return a.setFullYear(i, 0, 4), a.setHours(0, 0, 0, 0), Ke(a);
  }
}
class wa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 130);
    f(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, n) {
    return Mt(n === "u" ? 4 : n.length, e);
  }
  set(e, n, i) {
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class pa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 120);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i) {
    switch (n) {
      case "Q":
      case "QQ":
        return R(n.length, e);
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
  validate(e, n) {
    return n >= 1 && n <= 4;
  }
  set(e, n, i) {
    return e.setMonth((i - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ba extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 120);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i) {
    switch (n) {
      case "q":
      case "qq":
        return R(n.length, e);
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
  validate(e, n) {
    return n >= 1 && n <= 4;
  }
  set(e, n, i) {
    return e.setMonth((i - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class va extends I {
  constructor() {
    super(...arguments);
    f(this, "incompatibleTokens", [
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
    f(this, "priority", 110);
  }
  parse(e, n, i) {
    const a = (o) => o - 1;
    switch (n) {
      case "M":
        return V(
          A(W.month, e),
          a
        );
      case "MM":
        return V(R(2, e), a);
      case "Mo":
        return V(
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
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, i) {
    return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ya extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 110);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i) {
    const a = (o) => o - 1;
    switch (n) {
      case "L":
        return V(
          A(W.month, e),
          a
        );
      case "LL":
        return V(R(2, e), a);
      case "Lo":
        return V(
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
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, i) {
    return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function _a(r, t, e) {
  const n = B(r, e == null ? void 0 : e.in), i = Wn(n, e) - t;
  return n.setDate(n.getDate() - i * 7), B(n, e == null ? void 0 : e.in);
}
class Ca extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 100);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i) {
    switch (n) {
      case "w":
        return A(W.week, e);
      case "wo":
        return i.ordinalNumber(e, { unit: "week" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 53;
  }
  set(e, n, i, a) {
    return He(_a(e, i, a), a);
  }
}
function xa(r, t, e) {
  const n = B(r, e == null ? void 0 : e.in), i = Rn(n, e) - t;
  return n.setDate(n.getDate() - i * 7), n;
}
class Da extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 100);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i) {
    switch (n) {
      case "I":
        return A(W.week, e);
      case "Io":
        return i.ordinalNumber(e, { unit: "week" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 53;
  }
  set(e, n, i) {
    return Ke(xa(e, i));
  }
}
const Ta = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ea = [
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
class ka extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 90);
    f(this, "subPriority", 1);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i) {
    switch (n) {
      case "d":
        return A(W.date, e);
      case "do":
        return i.ordinalNumber(e, { unit: "date" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    const i = e.getFullYear(), a = Qn(i), o = e.getMonth();
    return a ? n >= 1 && n <= Ea[o] : n >= 1 && n <= Ta[o];
  }
  set(e, n, i) {
    return e.setDate(i), e.setHours(0, 0, 0, 0), e;
  }
}
class Ma extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 90);
    f(this, "subpriority", 1);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i) {
    switch (n) {
      case "D":
      case "DD":
        return A(W.dayOfYear, e);
      case "Do":
        return i.ordinalNumber(e, { unit: "date" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    const i = e.getFullYear();
    return Qn(i) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(e, n, i) {
    return e.setMonth(0, i), e.setHours(0, 0, 0, 0), e;
  }
}
function sn(r, t, e) {
  var d, m, g, w;
  const n = et(), i = (e == null ? void 0 : e.weekStartsOn) ?? ((m = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) == null ? void 0 : m.weekStartsOn) ?? n.weekStartsOn ?? ((w = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, a = B(r, e == null ? void 0 : e.in), o = a.getDay(), l = (t % 7 + 7) % 7, u = 7 - i, c = t < 0 || t > 6 ? t - (o + u) % 7 : (l + u) % 7 - (o + u) % 7;
  return An(a, c, e);
}
class Pa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 90);
    f(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
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
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, i, a) {
    return e = sn(e, i, a), e.setHours(0, 0, 0, 0), e;
  }
}
class Oa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 90);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i, a) {
    const o = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return (s + a.weekStartsOn + 6) % 7 + l;
    };
    switch (n) {
      case "e":
      case "ee":
        return V(R(n.length, e), o);
      case "eo":
        return V(
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
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, i, a) {
    return e = sn(e, i, a), e.setHours(0, 0, 0, 0), e;
  }
}
class Sa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 90);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i, a) {
    const o = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return (s + a.weekStartsOn + 6) % 7 + l;
    };
    switch (n) {
      case "c":
      case "cc":
        return V(R(n.length, e), o);
      case "co":
        return V(
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
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, i, a) {
    return e = sn(e, i, a), e.setHours(0, 0, 0, 0), e;
  }
}
function Ia(r, t, e) {
  const n = B(r, e == null ? void 0 : e.in), i = oa(n, e), a = t - i;
  return An(n, a, e);
}
class Na extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 90);
    f(this, "incompatibleTokens", [
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
  parse(e, n, i) {
    const a = (o) => o === 0 ? 7 : o;
    switch (n) {
      case "i":
      case "ii":
        return R(n.length, e);
      case "io":
        return i.ordinalNumber(e, { unit: "day" });
      case "iii":
        return V(
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
        return V(
          i.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiiii":
        return V(
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
        return V(
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
  validate(e, n) {
    return n >= 1 && n <= 7;
  }
  set(e, n, i) {
    return e = Ia(e, i), e.setHours(0, 0, 0, 0), e;
  }
}
class Ya extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 80);
    f(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
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
  set(e, n, i) {
    return e.setHours(on(i), 0, 0, 0), e;
  }
}
class Ha extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 80);
    f(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
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
  set(e, n, i) {
    return e.setHours(on(i), 0, 0, 0), e;
  }
}
class La extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 80);
    f(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
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
  set(e, n, i) {
    return e.setHours(on(i), 0, 0, 0), e;
  }
}
class Aa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 70);
    f(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
      case "h":
        return A(W.hour12h, e);
      case "ho":
        return i.ordinalNumber(e, { unit: "hour" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 12;
  }
  set(e, n, i) {
    const a = e.getHours() >= 12;
    return a && i < 12 ? e.setHours(i + 12, 0, 0, 0) : !a && i === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(i, 0, 0, 0), e;
  }
}
class Fa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 70);
    f(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
      case "H":
        return A(W.hour23h, e);
      case "Ho":
        return i.ordinalNumber(e, { unit: "hour" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 23;
  }
  set(e, n, i) {
    return e.setHours(i, 0, 0, 0), e;
  }
}
class $a extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 70);
    f(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
      case "K":
        return A(W.hour11h, e);
      case "Ko":
        return i.ordinalNumber(e, { unit: "hour" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, i) {
    return e.getHours() >= 12 && i < 12 ? e.setHours(i + 12, 0, 0, 0) : e.setHours(i, 0, 0, 0), e;
  }
}
class Ra extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 70);
    f(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
      case "k":
        return A(W.hour24h, e);
      case "ko":
        return i.ordinalNumber(e, { unit: "hour" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 24;
  }
  set(e, n, i) {
    const a = i <= 24 ? i % 24 : i;
    return e.setHours(a, 0, 0, 0), e;
  }
}
class Wa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 60);
    f(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
      case "m":
        return A(W.minute, e);
      case "mo":
        return i.ordinalNumber(e, { unit: "minute" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 59;
  }
  set(e, n, i) {
    return e.setMinutes(i, 0, 0), e;
  }
}
class Va extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 50);
    f(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, n, i) {
    switch (n) {
      case "s":
        return A(W.second, e);
      case "so":
        return i.ordinalNumber(e, { unit: "second" });
      default:
        return R(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 59;
  }
  set(e, n, i) {
    return e.setSeconds(i, 0), e;
  }
}
class qa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 30);
    f(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, n) {
    const i = (a) => Math.trunc(a * Math.pow(10, -n.length + 3));
    return V(R(n.length, e), i);
  }
  set(e, n, i) {
    return e.setMilliseconds(i), e;
  }
}
class Ba extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 10);
    f(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, n) {
    switch (n) {
      case "X":
        return pe(
          we.basicOptionalMinutes,
          e
        );
      case "XX":
        return pe(we.basic, e);
      case "XXXX":
        return pe(
          we.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return pe(
          we.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return pe(we.extended, e);
    }
  }
  set(e, n, i) {
    return n.timestampIsSet ? e : j(
      e,
      e.getTime() - kt(e) - i
    );
  }
}
class Xa extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 10);
    f(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, n) {
    switch (n) {
      case "x":
        return pe(
          we.basicOptionalMinutes,
          e
        );
      case "xx":
        return pe(we.basic, e);
      case "xxxx":
        return pe(
          we.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return pe(
          we.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return pe(we.extended, e);
    }
  }
  set(e, n, i) {
    return n.timestampIsSet ? e : j(
      e,
      e.getTime() - kt(e) - i
    );
  }
}
class za extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 40);
    f(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return zn(e);
  }
  set(e, n, i) {
    return [j(e, i * 1e3), { timestampIsSet: !0 }];
  }
}
class Ga extends I {
  constructor() {
    super(...arguments);
    f(this, "priority", 20);
    f(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return zn(e);
  }
  set(e, n, i) {
    return [j(e, i), { timestampIsSet: !0 }];
  }
}
const Qa = {
  G: new fa(),
  y: new ha(),
  Y: new ma(),
  R: new ga(),
  u: new wa(),
  Q: new pa(),
  q: new ba(),
  M: new va(),
  L: new ya(),
  w: new Ca(),
  I: new Da(),
  d: new ka(),
  D: new Ma(),
  E: new Pa(),
  e: new Oa(),
  c: new Sa(),
  i: new Na(),
  a: new Ya(),
  b: new Ha(),
  B: new La(),
  h: new Aa(),
  H: new Fa(),
  K: new $a(),
  k: new Ra(),
  m: new Wa(),
  s: new Va(),
  S: new qa(),
  X: new Ba(),
  x: new Xa(),
  t: new za(),
  T: new Ga()
}, ja = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Za = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ua = /^'([^]*?)'?$/, Ka = /''/g, Ja = /\S/, eo = /[a-zA-Z]/;
function to(r, t, e, n) {
  var X, Z, M, O, z, T, H, Y;
  const i = () => j((n == null ? void 0 : n.in) || e, NaN), a = aa(), o = (n == null ? void 0 : n.locale) ?? a.locale ?? $n, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((Z = (X = n == null ? void 0 : n.locale) == null ? void 0 : X.options) == null ? void 0 : Z.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((O = (M = a.locale) == null ? void 0 : M.options) == null ? void 0 : O.firstWeekContainsDate) ?? 1, l = (n == null ? void 0 : n.weekStartsOn) ?? ((T = (z = n == null ? void 0 : n.locale) == null ? void 0 : z.options) == null ? void 0 : T.weekStartsOn) ?? a.weekStartsOn ?? ((Y = (H = a.locale) == null ? void 0 : H.options) == null ? void 0 : Y.weekStartsOn) ?? 0;
  if (!t)
    return r ? i() : B(e, n == null ? void 0 : n.in);
  const u = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: o
  }, c = [new da(n == null ? void 0 : n.in, e)], d = t.match(Za).map((y) => {
    const E = y[0];
    if (E in Ut) {
      const J = Ut[E];
      return J(y, o.formatLong);
    }
    return y;
  }).join("").match(ja), m = [];
  for (let y of d) {
    !(n != null && n.useAdditionalWeekYearTokens) && Bn(y) && Kt(y, t, r), !(n != null && n.useAdditionalDayOfYearTokens) && qn(y) && Kt(y, t, r);
    const E = y[0], J = Qa[E];
    if (J) {
      const { incompatibleTokens: de } = J;
      if (Array.isArray(de)) {
        const ue = m.find(
          (me) => de.includes(me.token) || me.token === E
        );
        if (ue)
          throw new RangeError(
            `The format string mustn't contain \`${ue.fullToken}\` and \`${y}\` at the same time`
          );
      } else if (J.incompatibleTokens === "*" && m.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${y}\` and any other token at the same time`
        );
      m.push({ token: E, fullToken: y });
      const _e = J.run(
        r,
        y,
        o.match,
        u
      );
      if (!_e)
        return i();
      c.push(_e.setter), r = _e.rest;
    } else {
      if (E.match(eo))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + E + "`"
        );
      if (y === "''" ? y = "'" : E === "'" && (y = no(y)), r.indexOf(y) === 0)
        r = r.slice(y.length);
      else
        return i();
    }
  }
  if (r.length > 0 && Ja.test(r))
    return i();
  const g = c.map((y) => y.priority).sort((y, E) => E - y).filter((y, E, J) => J.indexOf(y) === E).map(
    (y) => c.filter((E) => E.priority === y).sort((E, J) => J.subPriority - E.subPriority)
  ).map((y) => y[0]);
  let w = B(e, n == null ? void 0 : n.in);
  if (isNaN(+w))
    return i();
  const D = {};
  for (const y of g) {
    if (!y.validate(w, u))
      return i();
    const E = y.set(w, D, u);
    Array.isArray(E) ? (w = E[0], Object.assign(D, E[1])) : w = E;
  }
  return w;
}
function no(r) {
  return r.match(Ua)[1].replace(Ka, "'");
}
class Lt {
  /**
   * The key is the unique identifier of the row.
   * The data is the raw data of the row (only what can be visible in the table).
   * The rendered data is the data that is visible in the table (after being mutated and rendered).
   * The rendered data contains only data which differs from the raw data.
   */
  constructor(t, e, n) {
    /**
     * The key is the unique identifier of the row.
     */
    f(this, "key");
    /**
     * The data is the flat mutated data of the row (no nested objects)
     */
    f(this, "data");
    /**
     * The rendered data is the data that is visible in the table (after being mutated and rendered)
     * The rendered data contains only data which differs from the raw data
     */
    f(this, "renderedData");
    /**
     * Clean data, which is used for searching (the term is cleaned and lowercased)
     * This is lazy loaded - only set when a search on a column is performed
     */
    f(this, "cleanData");
    this.key = t, this.data = e, this.renderedData = n, this.cleanData = {};
  }
  /**
   * Creates a new Row object with the given key, by processing
   * the raw row data with the given columns.
   */
  static create(t, e) {
    let n = null, i = {}, a = {};
    for (let o of e) {
      let s = o.mutate(ie.getValue(t, o.key));
      if (!o.filter(s))
        return null;
      o.isNumeric !== !1 && (o.isNumeric = ie.isNumericValue(s)), i[o.key] = s, o.isRowKey && (n = n ? `${n}-${s}` : s);
    }
    for (let o of e)
      o.hasRenderer && (a[o.key] = o.render(i[o.key], i));
    return n || (n = t.id || t.uuid || t.uid || ie.uid()), new Lt(n, i, a);
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
  cleanValue(t) {
    return this.cleanData[t] || (this.cleanData[t] = ie.cleanTerm(this.data[t])), this.cleanData[t];
  }
}
class Pt {
  /**
   * @param {Array.<Row>} rows
   */
  constructor(t) {
    f(this, "rows");
    f(this, "filteredRows", Q([]));
    this.rows = t, this.filteredRows.value = t;
  }
  static create(t, e) {
    let n = [];
    return e.forEach((i) => {
      let a = Lt.create(i, t);
      a && n.push(a);
    }), new Pt(n);
  }
  //--- Row operations ----------------------------------------------------------------------------------------------
  /**
   * @param {Array.<Column>} columns
   */
  filterBySearchTerms(t) {
    let e = this.rows;
    for (let n of t) {
      let i = n.searchTerm;
      i && (e = e.filter((a) => a.cleanValue(n.key).includes(i)));
    }
    this.filteredRows.value = e;
  }
  clearSearch() {
    this.filteredRows.value = this.rows;
  }
  sort(t, e) {
    this.filteredRows.value = this.filteredRows.value.sort((n, i) => {
      let a = n.get(t.key), o = i.get(t.key);
      if (a === o)
        return 0;
      let s = a < o ? -1 : 1;
      return e === "asc" ? s : -s;
    });
  }
  //--- Getters and setters -----------------------------------------------------------------------------------------
  //get rows() {
  //	return this.#rows.value;
  //}
  //
  //set rows(newData) {
  //	this.#rows.value = newData;
  //	this.resetLoadedRows();
  //}
  //get loadedRows() {
  //	return this.#loadedRows.value;
  //}
  //
  //set loadedRows(newData) {
  //	this.#loadedRows.value = newData;
  //}
  //get count() {
  //	return this.rows.length;
  //}
  //get loadedRowsCount() {
  //	return this.#loadedRows.value.length;
  //}
  //--- Public api --------------------------------------------------------------------------------------------------
  //loadRows(count) {
  //	let loadCount = count || this.loadCount;
  //
  //	//check how much data is already loaded (visible in the table)
  //	let lastIndex = this.loadedRowsCount;
  //
  //	//if all available data is already visible, do nothing
  //	if (lastIndex >= this.rowsCount) return;
  //
  //	//load another batch of data (count rows) and add it to the loadedData array
  //	let newData = this.rows.slice(lastIndex, lastIndex + loadCount);
  //	this.loadedRows = [...this.loadedRows, ...newData];
  //}
  //
  //resetLoadedRows() {
  //	this.loadedRows = [];
  //	this.loadRows(this.initialRowCount);
  //}
}
var Qe, je, Re, Ze;
const fn = class fn {
  //--- Constructor & Factories -------------------------------------------------------------------------------------
  constructor(t, e, n, i = null, a = !1, o = !0, s = !1, l = !0, u = !1, c = null, d = null, m = null) {
    //--- Properties --------------------------------------------------------------------------------------------------
    f(this, "name");
    f(this, "key");
    f(this, "label");
    f(this, "isNumeric");
    f(this, "isSearchable");
    f(this, "isSortable");
    f(this, "isFilterable");
    f(this, "isVisible");
    f(this, "isRowKey");
    rt(this, Qe, void 0);
    rt(this, je, void 0);
    rt(this, Re, void 0);
    // The search term is used to filter the data in the column
    rt(this, Ze, void 0);
    this.name = t, this.key = e, this.label = n, this.numeric(i).visible(l).searchable(a).sortable(o).filterable(s).rowKey(u).withMutator(d).withFilter(c).withRenderer(m);
  }
  //static factory
  static create(t, e, n, i = null, a = !1, o = !1, s = !1, l = !0, u = !1, c = null, d = null, m = null) {
    return new fn(t, e, n, i, a, o, s, l, c, d, m);
  }
  //--- Getters and setters -----------------------------------------------------------------------------------------
  get hasRenderer() {
    return Ce(this, Re) !== null;
  }
  //--- Fluent api --------------------------------------------------------------------------------------------------
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
    return We(this, Qe, typeof t == "function" ? t : null), this;
  }
  withMutator(t) {
    return We(this, je, typeof t == "function" ? t : null), this;
  }
  withRenderer(t) {
    return We(this, Re, typeof t == "function" ? t : null), this;
  }
  filter(t) {
    return Ce(this, Qe) ? Ce(this, Qe).call(this, t) : !0;
  }
  mutate(t) {
    return Ce(this, je) ? Ce(this, je).call(this, t) : t;
  }
  render(t) {
    return Ce(this, Re) ? Ce(this, Re).call(this, t) : t;
  }
  //--- Fluent predefined column types ------------------------------------------------------------------------------
  /**
   * Provide a custom date format for the column and optionally a raw format, used to parse the date
   * If the date is already in ISO 8601 format, the raw format can be omitted
   */
  date(t = "dd.MM.yyyy", e = null) {
    return this.withRenderer((n) => ra(new Date(n), t)), e && this.withMutator((n) => to(n, e, /* @__PURE__ */ new Date()).toISOString()), this;
  }
  dateTime(t = "dd.MM.yyyy HH:mm:ss", e = null) {
    return this.date(e, t);
  }
  money(t = 2, e = null, n = ",", i = " ", a = !1) {
    return this.numeric(), this.withRenderer(
      (o, s) => ie.formatNumber(
        o,
        t,
        n,
        i,
        e && a ? `${s.get(e) || "-?-"} ` : "",
        e ? a ? "" : ` ${s.get(e) || "-?-"}` : ""
      )
    ), this;
  }
  number(t = 2, e = ",", n = " ") {
    return this.numeric(), this.withRenderer((i) => ie.formatNumber(i, t, e, n)), this;
  }
  //--- Public helpers ----------------------------------------------------------------------------------------------
  /**
   * @param {Rows} rows
   * @returns {number|null}
   */
  sum(t) {
    return this.isNumeric ? t.rows.reduce((e, n) => e + n.get(this.key), 0) : null;
  }
  //--- Searching and filtering -------------------------------------------------------------------------------------
  get searchTerm() {
    return Ce(this, Ze);
  }
  set searchTerm(t) {
    this.isSearchable && We(this, Ze, ie.cleanTerm(t));
  }
  clearSearch() {
    We(this, Ze, null);
  }
};
Qe = new WeakMap(), je = new WeakMap(), Re = new WeakMap(), Ze = new WeakMap();
let Ot = fn;
class ln {
  //--- Constructor & Factories -------------------------------------------------------------------------------------
  /**
   * @param {Array.<Column>} columns
   * @param {Array} rawRows
   * @param {number} initialRowCount
   * @param {number} loadCount
   */
  constructor(t, e, n = 75, i = 30) {
    /**
     * @param {Rows} rows
     */
    f(this, "rows");
    /**
     * @param {Array.<Column>} columns
     */
    f(this, "columns");
    /**
     * @param {Array.<Row>} visibleRows
     */
    f(this, "loadedRows", Q([]));
    f(this, "initialRowCount");
    f(this, "loadCount");
    this.rows = e instanceof Pt ? e : Pt.create(t, e), this.columns = t, this.initialRowCount = n, this.loadCount = i, this.resetLoadedRows();
  }
  /**
   * @param {Array.<Column>} columns
   * @param {Array} rawRows
   * @param {number} initialRowCount
   * @param {number} loadCount
   */
  static create(t, e, n = 75, i = 30) {
    return new ln(t, e, n, i);
  }
  //--- Getters and setters -----------------------------------------------------------------------------------------
  get rowsCount() {
    return this.rows.rows.length;
  }
  get loadedRowsCount() {
    return this.loadedRows.value.length;
  }
  //--- Column operations -------------------------------------------------------------------------------------------
  get visibleColumns() {
    return this.columns.filter((t) => t.isVisible);
  }
  updateSearchTerm(t, e) {
    t.searchTerm = e, this.rows.filterBySearchTerms(this.columns);
  }
  clearSearch() {
    this.rows.clearSearch();
  }
  //--- Row operations ----------------------------------------------------------------------------------------------
  loadRows(t) {
    let e = t || this.loadCount, n = this.loadedRowsCount;
    if (n >= this.rowsCount)
      return;
    let i = this.rows.rows.slice(n, n + e);
    this.loadedRows.value = [...this.loadedRows.value, ...i];
  }
  resetLoadedRows() {
    this.loadedRows.value = [], this.loadRows(this.initialRowCount);
  }
}
class jn {
  constructor() {
    f(this, "rowSizeClasses", {
      small: "cell-small",
      medium: "cell-medium",
      large: "cell-large"
    });
    f(this, "rowSize", "small");
    f(this, "colorDigits", !0);
  }
  // Set the row size to one of the predefined sizes
  setRowSize(t) {
    return this.rowSizeClasses[t] && (this.rowSize = t), this;
  }
  setColorDigits(t) {
    return this.colorDigits = !!t, this;
  }
  /**
   * Determine the classes for the cell, based on the column definition and the cell value
   * Cell color: gray by default, red for negative values, green for positive values
   *
   * @param {Column} column
   * @param value
   * @returns {string}
   */
  cellStyling(t, e) {
    return this.rowSizeClasses[this.rowSize] + " " + (t.isNumeric && this.colorDigits ? Math.sign(e) < 0 ? "text-red" : "text-green" : "text-gray");
  }
}
const ro = ["innerHTML"], io = {
  __name: "TableCell",
  props: {
    column: {
      type: Ot,
      required: !0
    },
    row: {
      type: Lt,
      required: !0
    },
    styling: {
      type: jn,
      required: !0
    }
  },
  setup(r) {
    const t = r, e = mt(() => (n, i) => {
      t.styling.cellStyling(n, i);
    });
    return (n, i) => (p(), v("td", {
      class: Ue(e.value(r.column, r.row.get(r.column.key))),
      innerHTML: r.row.rendered(r.column.key)
    }, null, 10, ro));
  }
}, ao = { class: "table-columns" }, oo = { class: "table-columns-row" }, so = ["onClick"], lo = ["textContent"], uo = { key: 0 }, co = { class: "delimiter" }, fo = {
  key: 1,
  class: "table-total"
}, ho = {
  key: 2,
  class: "column-search-container"
}, mo = ["onInput", "placeholder"], go = { class: "table-body" }, wo = ["onClick"], rl = {
  __name: "SmartTable",
  props: {
    // An array of rows with the raw data
    rows: {
      type: Array,
      required: !0
    },
    //an array of Column instances
    columns: {
      type: Array,
      required: !0,
      validator: (r) => r.every((t) => t instanceof Ot)
    }
  },
  emits: ["row-click"],
  setup(r, { emit: t }) {
    const e = t, n = r;
    let i = Q(null), a = Q(null), o = Q(null), s = Q(!1), l = Q(null);
    l.value = new jn();
    let u = Q(!1), c = Hn();
    const d = mt(() => i.value.visibleColumns), m = mt(() => d.value.some((T) => T.isNumeric));
    function g(T) {
      s.value = o.value === T ? !s.value : !0, o.value = T;
      let H = managesLoadedData.getAllData().sort(
        (Y, y) => w(Y[o.value], y[o.value], s.value)
      );
      managesLoadedData.setData(H);
    }
    function w(T, H, Y) {
      return T == null && (T = ""), H == null && (H = ""), Y || ([T, H] = [H, T]), ie.isNumericValue(T) && ie.isNumericValue(H) ? H - T : ie.isDate(T) && ie.isDate(H) ? ie.parseDate(T).getTime() > ie.parseDate(H).getTime() ? 1 : -1 : T.localeCompare(H);
    }
    function D(T) {
      l.value.setRowSize(T.newRowSize).setColorDigits(T.newDigitsColor === "color");
    }
    function X(T) {
      i.value.columns = T;
    }
    function Z() {
      u.value = !u.value, u.value || i.value.clearSearch();
    }
    function M(T) {
      e("row-click", T);
    }
    function O(T) {
      return T.isNumeric ? ie.formatNumber(T.sum(i.value.rows)) : "";
    }
    function z(T = 10) {
      a.value.style.maxHeight = `${window.innerHeight - a.value.getBoundingClientRect().top - T}px`;
    }
    return c.addEventHandler("update-table-style-event", D), c.addEventHandler("update-table-columns-event", X), c.addEventHandler("toggle-search-event", Z), i.value = ln.create(n.columns, n.rows), c.triggerEvent("sync-table-columns-event", i.value.columns), _r(() => z()), (T, H) => (p(), v("div", {
      ref_key: "tableContainer",
      ref: a,
      class: "table-container"
    }, [
      b("table", null, [
        b("thead", ao, [
          b("tr", oo, [
            (p(!0), v(Oe, null, Se(d.value, (Y) => (p(), v("th", {
              onClick: (y) => g(Y.key)
            }, [
              b("div", {
                class: Ue(["columns-row-item", Y.isNumeric ? "numeric" : ""])
              }, [
                b("span", {
                  textContent: ne(Y.label)
                }, null, 8, lo),
                he(se, {
                  icon: "sort",
                  class: Ue(["columns-row-item-icon", `${k(o) === Y.key ? "selected" : ""}`])
                }, null, 8, ["class"])
              ], 2)
            ], 8, so))), 256))
          ]),
          m.value ? (p(), v("tr", uo, [
            (p(!0), v(Oe, null, Se(d.value, (Y) => (p(), v("th", co))), 256))
          ])) : be("", !0),
          m.value ? (p(), v("tr", fo, [
            (p(!0), v(Oe, null, Se(d.value, (Y, y) => (p(), v("th", null, ne(y === 0 ? "Total" : O(Y)), 1))), 256))
          ])) : be("", !0),
          k(u) ? (p(), v("tr", ho, [
            (p(!0), v(Oe, null, Se(d.value, (Y) => (p(), v("th", null, [
              Y.searchable ? (p(), v("input", {
                key: 0,
                onInput: (y) => k(i).updateSearchTerm(Y, y.target.value),
                class: "column-search",
                placeholder: k(K).getTranslate("search")
              }, null, 40, mo)) : be("", !0)
            ]))), 256))
          ])) : be("", !0)
        ]),
        b("tbody", go, [
          (p(!0), v(Oe, null, Se(k(i).filteredRows, (Y) => (p(), v("tr", {
            onClick: (y) => M(Y)
          }, [
            (p(!0), v(Oe, null, Se(d.value, (y) => (p(), xe(io, {
              column: y,
              row: Y,
              styling: k(l),
              key: y.key
            }, null, 8, ["column", "row", "styling"]))), 128))
          ], 8, wo))), 256))
        ])
      ])
    ], 512));
  }
}, Zn = {
  __name: "Modal",
  emits: ["close"],
  setup(r, { emit: t }) {
    const e = t;
    return document.body.style.overflow = "hidden", Cr(() => document.body.style.overflow = "auto"), (n, i) => (p(), v("div", {
      onClick: i[0] || (i[0] = xr((a) => e("close"), ["self"])),
      class: "modal"
    }, [
      Dr(n.$slots, "default")
    ]));
  }
}, po = { class: "settings-modal" }, bo = ["textContent"], vo = ["textContent"], yo = { class: "style-settings-options" }, _o = { class: "style-settings-option" }, Co = ["textContent"], xo = {
  key: 0,
  class: "option-items"
}, Do = ["onClick"], To = { class: "item-value" }, Eo = ["textContent"], ko = { class: "style-settings-option" }, Mo = ["textContent"], Po = {
  key: 0,
  class: "option-items"
}, Oo = ["onClick"], So = { class: "item-value" }, Io = ["textContent"], No = { class: "actions-container" }, Yo = ["textContent"], Ho = ["textContent"], Lo = {
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
  setup(r, { emit: t }) {
    const e = t, n = r;
    let i = Q(n.rowSizeValue), a = Q(n.digitsColorValue);
    const o = {
      small: {
        icon: "small-row",
        label: K.getTranslate("style_settings_modal.sections.row_size.options.small")
      },
      medium: {
        icon: "medium-row",
        label: K.getTranslate("style_settings_modal.sections.row_size.options.medium")
      },
      large: {
        icon: "large-row",
        label: K.getTranslate("style_settings_modal.sections.row_size.options.large")
      }
    }, s = {
      black: K.getTranslate("style_settings_modal.sections.numbers_color.options.black"),
      color: K.getTranslate("style_settings_modal.sections.numbers_color.options.color")
    };
    let l = Q(!1), u = Q(!1);
    function c() {
      e("save", i.value, a.value);
    }
    return (d, m) => (p(), xe(Zn, null, {
      default: Zt(() => [
        b("div", po, [
          b("div", {
            class: "settings-modal-title",
            textContent: ne(k(K).getTranslate("style_settings_modal.title"))
          }, null, 8, bo),
          b("div", {
            class: "settings-modal-description",
            textContent: ne(k(K).getTranslate("style_settings_modal.description"))
          }, null, 8, vo),
          b("div", yo, [
            b("div", _o, [
              b("div", {
                class: "option-container",
                onClick: m[0] || (m[0] = (g) => De(l) ? l.value = !k(l) : l = !k(l))
              }, [
                b("div", {
                  class: "option-title",
                  textContent: ne(k(K).getTranslate("style_settings_modal.sections.row_size.title"))
                }, null, 8, Co),
                k(l) ? (p(), xe(se, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (p(), xe(se, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              k(l) ? (p(), v("div", xo, [
                (p(), v(Oe, null, Se(o, (g, w) => b("div", {
                  class: "option-item-container",
                  onClick: (D) => De(i) ? i.value = w : i = w
                }, [
                  he(se, {
                    icon: `radio-circle${k(i) === w ? "-selected" : ""}`,
                    class: Ue(`icon-size ${k(i) === w ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  b("div", To, [
                    he(se, {
                      icon: g.icon,
                      class: "icon-size"
                    }, null, 8, ["icon"]),
                    b("span", {
                      class: "option-item-title",
                      textContent: ne(g.label)
                    }, null, 8, Eo)
                  ])
                ], 8, Do)), 64))
              ])) : be("", !0)
            ]),
            m[3] || (m[3] = b("div", { class: "divider" }, null, -1)),
            b("div", ko, [
              b("div", {
                class: "option-container",
                onClick: m[1] || (m[1] = (g) => De(u) ? u.value = !k(u) : u = !k(u))
              }, [
                b("div", {
                  class: "option-title",
                  textContent: ne(k(K).getTranslate("style_settings_modal.sections.numbers_color.title"))
                }, null, 8, Mo),
                k(u) ? (p(), xe(se, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (p(), xe(se, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              k(u) ? (p(), v("div", Po, [
                (p(), v(Oe, null, Se(s, (g, w) => b("div", {
                  class: "option-item-container",
                  onClick: (D) => De(a) ? a.value = w : a = w
                }, [
                  he(se, {
                    icon: `radio-circle${k(a) === w ? "-selected" : ""}`,
                    class: Ue(`icon-size ${k(a) === w ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  b("div", So, [
                    b("span", {
                      class: "option-item-title",
                      textContent: ne(g)
                    }, null, 8, Io)
                  ])
                ], 8, Oo)), 64))
              ])) : be("", !0)
            ])
          ]),
          b("div", No, [
            b("div", {
              class: "button button-cancel",
              onClick: m[2] || (m[2] = (g) => e("close")),
              textContent: ne(k(K).getTranslate("style_settings_modal.actions.cancel"))
            }, null, 8, Yo),
            b("div", {
              class: "button button-confirm",
              onClick: c,
              textContent: ne(k(K).getTranslate("style_settings_modal.actions.save"))
            }, null, 8, Ho)
          ])
        ])
      ]),
      _: 1
    }));
  }
}, Ao = ["for"], Fo = {
  key: 0,
  class: "checkbox-input"
}, $o = {
  key: 1,
  class: "checkbox-selected"
}, Ro = ["textContent"], Wo = ["id", "name", "value"], Vo = {
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
  setup(r, { emit: t }) {
    const e = t, n = r, i = mt({
      get: () => n.modelValue,
      set: (o) => e("update:modelValue", o)
    }), a = mt(() => n.name && n.name.length ? n.name : n.label);
    return (o, s) => (p(), v("label", {
      for: r.name,
      class: "checkbox-container"
    }, [
      i.value ? (p(), v("div", $o, [
        he(se, {
          icon: "check",
          class: "checkbox-selected-icon"
        })
      ])) : (p(), v("div", Fo)),
      r.label ? (p(), v("span", {
        key: 2,
        class: "label",
        textContent: ne(r.label)
      }, null, 8, Ro)) : be("", !0),
      Tr(b("input", {
        hidden: "",
        id: a.value,
        name: r.name,
        type: "checkbox",
        "onUpdate:modelValue": s[0] || (s[0] = (l) => i.value = l),
        value: r.value
      }, null, 8, Wo), [
        [Er, i.value]
      ])
    ], 8, Ao));
  }
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Cn(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function ye(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cn(Object(e), !0).forEach(function(n) {
      qo(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Cn(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function Ct(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ct = function(t) {
    return typeof t;
  } : Ct = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ct(r);
}
function qo(r, t, e) {
  return t in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function Ee() {
  return Ee = Object.assign || function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, Ee.apply(this, arguments);
}
function Bo(r, t) {
  if (r == null)
    return {};
  var e = {}, n = Object.keys(r), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (e[i] = r[i]);
  return e;
}
function Xo(r, t) {
  if (r == null)
    return {};
  var e = Bo(r, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (e[n] = r[n]);
  }
  return e;
}
var zo = "1.14.0";
function Te(r) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(r);
}
var ke = Te(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), gt = Te(/Edge/i), xn = Te(/firefox/i), ut = Te(/safari/i) && !Te(/chrome/i) && !Te(/android/i), Un = Te(/iP(ad|od|hone)/i), Go = Te(/chrome/i) && Te(/android/i), Kn = {
  capture: !1,
  passive: !1
};
function S(r, t, e) {
  r.addEventListener(t, e, !ke && Kn);
}
function P(r, t, e) {
  r.removeEventListener(t, e, !ke && Kn);
}
function St(r, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), r)
      try {
        if (r.matches)
          return r.matches(t);
        if (r.msMatchesSelector)
          return r.msMatchesSelector(t);
        if (r.webkitMatchesSelector)
          return r.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Qo(r) {
  return r.host && r !== document && r.host.nodeType ? r.host : r.parentNode;
}
function ge(r, t, e, n) {
  if (r) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? r.parentNode === e && St(r, t) : St(r, t)) || n && r === e)
        return r;
      if (r === e)
        break;
    } while (r = Qo(r));
  }
  return null;
}
var Dn = /\s+/g;
function ae(r, t, e) {
  if (r && t)
    if (r.classList)
      r.classList[e ? "add" : "remove"](t);
    else {
      var n = (" " + r.className + " ").replace(Dn, " ").replace(" " + t + " ", " ");
      r.className = (n + (e ? " " + t : "")).replace(Dn, " ");
    }
}
function _(r, t, e) {
  var n = r && r.style;
  if (n) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(r, "") : r.currentStyle && (e = r.currentStyle), t === void 0 ? e : e[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function Ge(r, t) {
  var e = "";
  if (typeof r == "string")
    e = r;
  else
    do {
      var n = _(r, "transform");
      n && n !== "none" && (e = n + " " + e);
    } while (!t && (r = r.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(e);
}
function Jn(r, t, e) {
  if (r) {
    var n = r.getElementsByTagName(t), i = 0, a = n.length;
    if (e)
      for (; i < a; i++)
        e(n[i], i);
    return n;
  }
  return [];
}
function ve() {
  var r = document.scrollingElement;
  return r || document.documentElement;
}
function G(r, t, e, n, i) {
  if (!(!r.getBoundingClientRect && r !== window)) {
    var a, o, s, l, u, c, d;
    if (r !== window && r.parentNode && r !== ve() ? (a = r.getBoundingClientRect(), o = a.top, s = a.left, l = a.bottom, u = a.right, c = a.height, d = a.width) : (o = 0, s = 0, l = window.innerHeight, u = window.innerWidth, c = window.innerHeight, d = window.innerWidth), (t || e) && r !== window && (i = i || r.parentNode, !ke))
      do
        if (i && i.getBoundingClientRect && (_(i, "transform") !== "none" || e && _(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          o -= m.top + parseInt(_(i, "border-top-width")), s -= m.left + parseInt(_(i, "border-left-width")), l = o + a.height, u = s + a.width;
          break;
        }
      while (i = i.parentNode);
    if (n && r !== window) {
      var g = Ge(i || r), w = g && g.a, D = g && g.d;
      g && (o /= D, s /= w, d /= w, c /= D, l = o + c, u = s + d);
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
function Tn(r, t, e) {
  for (var n = Ye(r, !0), i = G(r)[t]; n; ) {
    var a = G(n)[e], o = void 0;
    if (e === "top" || e === "left" ? o = i >= a : o = i <= a, !o)
      return n;
    if (n === ve())
      break;
    n = Ye(n, !1);
  }
  return !1;
}
function Je(r, t, e, n) {
  for (var i = 0, a = 0, o = r.children; a < o.length; ) {
    if (o[a].style.display !== "none" && o[a] !== C.ghost && (n || o[a] !== C.dragged) && ge(o[a], e.draggable, r, !1)) {
      if (i === t)
        return o[a];
      i++;
    }
    a++;
  }
  return null;
}
function un(r, t) {
  for (var e = r.lastElementChild; e && (e === C.ghost || _(e, "display") === "none" || t && !St(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function ce(r, t) {
  var e = 0;
  if (!r || !r.parentNode)
    return -1;
  for (; r = r.previousElementSibling; )
    r.nodeName.toUpperCase() !== "TEMPLATE" && r !== C.clone && (!t || St(r, t)) && e++;
  return e;
}
function En(r) {
  var t = 0, e = 0, n = ve();
  if (r)
    do {
      var i = Ge(r), a = i.a, o = i.d;
      t += r.scrollLeft * a, e += r.scrollTop * o;
    } while (r !== n && (r = r.parentNode));
  return [t, e];
}
function jo(r, t) {
  for (var e in r)
    if (r.hasOwnProperty(e)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === r[e][n])
          return Number(e);
    }
  return -1;
}
function Ye(r, t) {
  if (!r || !r.getBoundingClientRect)
    return ve();
  var e = r, n = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var i = _(e);
      if (e.clientWidth < e.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return ve();
        if (n || t)
          return e;
        n = !0;
      }
    }
  while (e = e.parentNode);
  return ve();
}
function Zo(r, t) {
  if (r && t)
    for (var e in t)
      t.hasOwnProperty(e) && (r[e] = t[e]);
  return r;
}
function $t(r, t) {
  return Math.round(r.top) === Math.round(t.top) && Math.round(r.left) === Math.round(t.left) && Math.round(r.height) === Math.round(t.height) && Math.round(r.width) === Math.round(t.width);
}
var ct;
function er(r, t) {
  return function() {
    if (!ct) {
      var e = arguments, n = this;
      e.length === 1 ? r.call(n, e[0]) : r.apply(n, e), ct = setTimeout(function() {
        ct = void 0;
      }, t);
    }
  };
}
function Uo() {
  clearTimeout(ct), ct = void 0;
}
function tr(r, t, e) {
  r.scrollLeft += t, r.scrollTop += e;
}
function nr(r) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(r).cloneNode(!0) : e ? e(r).clone(!0)[0] : r.cloneNode(!0);
}
var le = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ko() {
  var r = [], t;
  return {
    captureAnimationState: function() {
      if (r = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(_(i, "display") === "none" || i === C.ghost)) {
            r.push({
              target: i,
              rect: G(i)
            });
            var a = ye({}, r[r.length - 1].rect);
            if (i.thisAnimationDuration) {
              var o = Ge(i, !0);
              o && (a.top -= o.f, a.left -= o.e);
            }
            i.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function(n) {
      r.push(n);
    },
    removeAnimationState: function(n) {
      r.splice(jo(r, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var a = !1, o = 0;
      r.forEach(function(s) {
        var l = 0, u = s.target, c = u.fromRect, d = G(u), m = u.prevFromRect, g = u.prevToRect, w = s.rect, D = Ge(u, !0);
        D && (d.top -= D.f, d.left -= D.e), u.toRect = d, u.thisAnimationDuration && $t(m, d) && !$t(c, d) && // Make sure animatingRect is on line between toRect & fromRect
        (w.top - d.top) / (w.left - d.left) === (c.top - d.top) / (c.left - d.left) && (l = es(w, m, g, i.options)), $t(d, c) || (u.prevFromRect = c, u.prevToRect = d, l || (l = i.options.animation), i.animate(u, w, d, l)), l && (a = !0, o = Math.max(o, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(t), a ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, o) : typeof n == "function" && n(), r = [];
    },
    animate: function(n, i, a, o) {
      if (o) {
        _(n, "transition", ""), _(n, "transform", "");
        var s = Ge(this.el), l = s && s.a, u = s && s.d, c = (i.left - a.left) / (l || 1), d = (i.top - a.top) / (u || 1);
        n.animatingX = !!c, n.animatingY = !!d, _(n, "transform", "translate3d(" + c + "px," + d + "px,0)"), this.forRepaintDummy = Jo(n), _(n, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), _(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          _(n, "transition", ""), _(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, o);
      }
    }
  };
}
function Jo(r) {
  return r.offsetWidth;
}
function es(r, t, e, n) {
  return Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * n.animation;
}
var qe = [], Rt = {
  initializeByDefault: !0
}, wt = {
  mount: function(t) {
    for (var e in Rt)
      Rt.hasOwnProperty(e) && !(e in t) && (t[e] = Rt[e]);
    qe.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), qe.push(t);
  },
  pluginEvent: function(t, e, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var a = t + "Global";
    qe.forEach(function(o) {
      e[o.pluginName] && (e[o.pluginName][a] && e[o.pluginName][a](ye({
        sortable: e
      }, n)), e.options[o.pluginName] && e[o.pluginName][t] && e[o.pluginName][t](ye({
        sortable: e
      }, n)));
    });
  },
  initializePlugins: function(t, e, n, i) {
    qe.forEach(function(s) {
      var l = s.pluginName;
      if (!(!t.options[l] && !s.initializeByDefault)) {
        var u = new s(t, e, t.options);
        u.sortable = t, u.options = t.options, t[l] = u, Ee(n, u.defaults);
      }
    });
    for (var a in t.options)
      if (t.options.hasOwnProperty(a)) {
        var o = this.modifyOption(t, a, t.options[a]);
        typeof o < "u" && (t.options[a] = o);
      }
  },
  getEventProperties: function(t, e) {
    var n = {};
    return qe.forEach(function(i) {
      typeof i.eventProperties == "function" && Ee(n, i.eventProperties.call(e[i.pluginName], t));
    }), n;
  },
  modifyOption: function(t, e, n) {
    var i;
    return qe.forEach(function(a) {
      t[a.pluginName] && a.optionListeners && typeof a.optionListeners[e] == "function" && (i = a.optionListeners[e].call(t[a.pluginName], n));
    }), i;
  }
};
function ts(r) {
  var t = r.sortable, e = r.rootEl, n = r.name, i = r.targetEl, a = r.cloneEl, o = r.toEl, s = r.fromEl, l = r.oldIndex, u = r.newIndex, c = r.oldDraggableIndex, d = r.newDraggableIndex, m = r.originalEvent, g = r.putSortable, w = r.extraEventProperties;
  if (t = t || e && e[le], !!t) {
    var D, X = t.options, Z = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !ke && !gt ? D = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (D = document.createEvent("Event"), D.initEvent(n, !0, !0)), D.to = o || e, D.from = s || e, D.item = i || e, D.clone = a, D.oldIndex = l, D.newIndex = u, D.oldDraggableIndex = c, D.newDraggableIndex = d, D.originalEvent = m, D.pullMode = g ? g.lastPutMode : void 0;
    var M = ye(ye({}, w), wt.getEventProperties(n, t));
    for (var O in M)
      D[O] = M[O];
    e && e.dispatchEvent(D), X[Z] && X[Z].call(t, D);
  }
}
var ns = ["evt"], re = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, a = Xo(n, ns);
  wt.pluginEvent.bind(C)(t, e, ye({
    dragEl: h,
    parentEl: F,
    ghostEl: x,
    rootEl: L,
    nextEl: $e,
    lastDownEl: xt,
    cloneEl: $,
    cloneHidden: Ne,
    dragStarted: ot,
    putSortable: U,
    activeSortable: C.active,
    originalEvent: i,
    oldIndex: ze,
    oldDraggableIndex: dt,
    newIndex: oe,
    newDraggableIndex: Ie,
    hideGhostForTarget: or,
    unhideGhostForTarget: sr,
    cloneNowHidden: function() {
      Ne = !0;
    },
    cloneNowShown: function() {
      Ne = !1;
    },
    dispatchSortableEvent: function(s) {
      te({
        sortable: e,
        name: s,
        originalEvent: i
      });
    }
  }, a));
};
function te(r) {
  ts(ye({
    putSortable: U,
    cloneEl: $,
    targetEl: h,
    rootEl: L,
    oldIndex: ze,
    oldDraggableIndex: dt,
    newIndex: oe,
    newDraggableIndex: Ie
  }, r));
}
var h, F, x, L, $e, xt, $, Ne, ze, oe, dt, Ie, bt, U, Xe = !1, It = !1, Nt = [], Le, fe, Wt, Vt, kn, Mn, ot, Be, ft, ht = !1, vt = !1, Dt, ee, qt = [], Jt = !1, Yt = [], At = typeof document < "u", yt = Un, Pn = gt || ke ? "cssFloat" : "float", rs = At && !Go && !Un && "draggable" in document.createElement("div"), rr = function() {
  if (At) {
    if (ke)
      return !1;
    var r = document.createElement("x");
    return r.style.cssText = "pointer-events:auto", r.style.pointerEvents === "auto";
  }
}(), ir = function(t, e) {
  var n = _(t), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), a = Je(t, 0, e), o = Je(t, 1, e), s = a && _(a), l = o && _(o), u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + G(a).width, c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + G(o).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && s.float && s.float !== "none") {
    var d = s.float === "left" ? "left" : "right";
    return o && (l.clear === "both" || l.clear === d) ? "vertical" : "horizontal";
  }
  return a && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || u >= i && n[Pn] === "none" || o && n[Pn] === "none" && u + c > i) ? "vertical" : "horizontal";
}, is = function(t, e, n) {
  var i = n ? t.left : t.top, a = n ? t.right : t.bottom, o = n ? t.width : t.height, s = n ? e.left : e.top, l = n ? e.right : e.bottom, u = n ? e.width : e.height;
  return i === s || a === l || i + o / 2 === s + u / 2;
}, as = function(t, e) {
  var n;
  return Nt.some(function(i) {
    var a = i[le].options.emptyInsertThreshold;
    if (!(!a || un(i))) {
      var o = G(i), s = t >= o.left - a && t <= o.right + a, l = e >= o.top - a && e <= o.bottom + a;
      if (s && l)
        return n = i;
    }
  }), n;
}, ar = function(t) {
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
  var n = {}, i = t.group;
  (!i || Ct(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = e(i.pull, !0), n.checkPut = e(i.put), n.revertClone = i.revertClone, t.group = n;
}, or = function() {
  !rr && x && _(x, "display", "none");
}, sr = function() {
  !rr && x && _(x, "display", "");
};
At && document.addEventListener("click", function(r) {
  if (It)
    return r.preventDefault(), r.stopPropagation && r.stopPropagation(), r.stopImmediatePropagation && r.stopImmediatePropagation(), It = !1, !1;
}, !0);
var Ae = function(t) {
  if (h) {
    t = t.touches ? t.touches[0] : t;
    var e = as(t.clientX, t.clientY);
    if (e) {
      var n = {};
      for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
      n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[le]._onDragOver(n);
    }
  }
}, os = function(t) {
  h && h.parentNode[le]._isOutsideThisEl(t.target);
};
function C(r, t) {
  if (!(r && r.nodeType && r.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(r));
  this.el = r, this.options = t = Ee({}, t), r[le] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(r.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return ir(r, this.options);
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
    supportPointer: C.supportPointer !== !1 && "PointerEvent" in window && !ut,
    emptyInsertThreshold: 5
  };
  wt.initializePlugins(this, r, e);
  for (var n in e)
    !(n in t) && (t[n] = e[n]);
  ar(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : rs, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? S(r, "pointerdown", this._onTapStart) : (S(r, "mousedown", this._onTapStart), S(r, "touchstart", this._onTapStart)), this.nativeDraggable && (S(r, "dragover", this), S(r, "dragenter", this)), Nt.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Ee(this, Ko());
}
C.prototype = /** @lends Sortable.prototype */
{
  constructor: C,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Be = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, h) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, n = this.el, i = this.options, a = i.preventOnFilter, o = t.type, s = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (s || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, c = i.filter;
      if (ms(n), !h && !(/mousedown|pointerdown/.test(o) && t.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && ut && l && l.tagName.toUpperCase() === "SELECT") && (l = ge(l, i.draggable, n, !1), !(l && l.animated) && xt !== l)) {
        if (ze = ce(l), dt = ce(l, i.draggable), typeof c == "function") {
          if (c.call(this, t, l, this)) {
            te({
              sortable: e,
              rootEl: u,
              name: "filter",
              targetEl: l,
              toEl: n,
              fromEl: n
            }), re("filter", e, {
              evt: t
            }), a && t.cancelable && t.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(d) {
          if (d = ge(u, d.trim(), n, !1), d)
            return te({
              sortable: e,
              rootEl: d,
              name: "filter",
              targetEl: l,
              fromEl: n,
              toEl: n
            }), re("filter", e, {
              evt: t
            }), !0;
        }), c)) {
          a && t.cancelable && t.preventDefault();
          return;
        }
        i.handle && !ge(u, i.handle, n, !1) || this._prepareDragStart(t, s, l);
      }
    }
  },
  _prepareDragStart: function(t, e, n) {
    var i = this, a = i.el, o = i.options, s = a.ownerDocument, l;
    if (n && !h && n.parentNode === a) {
      var u = G(n);
      if (L = a, h = n, F = h.parentNode, $e = h.nextSibling, xt = n, bt = o.group, C.dragged = h, Le = {
        target: h,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, kn = Le.clientX - u.left, Mn = Le.clientY - u.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, h.style["will-change"] = "all", l = function() {
        if (re("delayEnded", i, {
          evt: t
        }), C.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !xn && i.nativeDraggable && (h.draggable = !0), i._triggerDragStart(t, e), te({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), ae(h, o.chosenClass, !0);
      }, o.ignore.split(",").forEach(function(c) {
        Jn(h, c.trim(), Bt);
      }), S(s, "dragover", Ae), S(s, "mousemove", Ae), S(s, "touchmove", Ae), S(s, "mouseup", i._onDrop), S(s, "touchend", i._onDrop), S(s, "touchcancel", i._onDrop), xn && this.nativeDraggable && (this.options.touchStartThreshold = 4, h.draggable = !0), re("delayStart", this, {
        evt: t
      }), o.delay && (!o.delayOnTouchOnly || e) && (!this.nativeDraggable || !(gt || ke))) {
        if (C.eventCanceled) {
          this._onDrop();
          return;
        }
        S(s, "mouseup", i._disableDelayedDrag), S(s, "touchend", i._disableDelayedDrag), S(s, "touchcancel", i._disableDelayedDrag), S(s, "mousemove", i._delayedDragTouchMoveHandler), S(s, "touchmove", i._delayedDragTouchMoveHandler), o.supportPointer && S(s, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(l, o.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    h && Bt(h), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    P(t, "mouseup", this._disableDelayedDrag), P(t, "touchend", this._disableDelayedDrag), P(t, "touchcancel", this._disableDelayedDrag), P(t, "mousemove", this._delayedDragTouchMoveHandler), P(t, "touchmove", this._delayedDragTouchMoveHandler), P(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? S(document, "pointermove", this._onTouchMove) : e ? S(document, "touchmove", this._onTouchMove) : S(document, "mousemove", this._onTouchMove) : (S(h, "dragend", this), S(L, "dragstart", this._onDragStart));
    try {
      document.selection ? Tt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (Xe = !1, L && h) {
      re("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && S(document, "dragover", os);
      var n = this.options;
      !t && ae(h, n.dragClass, !1), ae(h, n.ghostClass, !0), C.active = this, t && this._appendGhost(), te({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (fe) {
      this._lastX = fe.clientX, this._lastY = fe.clientY, or();
      for (var t = document.elementFromPoint(fe.clientX, fe.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(fe.clientX, fe.clientY), t !== e); )
        e = t;
      if (h.parentNode[le]._isOutsideThisEl(t), e)
        do {
          if (e[le]) {
            var n = void 0;
            if (n = e[le]._onDragOver({
              clientX: fe.clientX,
              clientY: fe.clientY,
              target: t,
              rootEl: e
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = e.parentNode);
      sr();
    }
  },
  _onTouchMove: function(t) {
    if (Le) {
      var e = this.options, n = e.fallbackTolerance, i = e.fallbackOffset, a = t.touches ? t.touches[0] : t, o = x && Ge(x, !0), s = x && o && o.a, l = x && o && o.d, u = yt && ee && En(ee), c = (a.clientX - Le.clientX + i.x) / (s || 1) + (u ? u[0] - qt[0] : 0) / (s || 1), d = (a.clientY - Le.clientY + i.y) / (l || 1) + (u ? u[1] - qt[1] : 0) / (l || 1);
      if (!C.active && !Xe) {
        if (n && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (x) {
        o ? (o.e += c - (Wt || 0), o.f += d - (Vt || 0)) : o = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: d
        };
        var m = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
        _(x, "webkitTransform", m), _(x, "mozTransform", m), _(x, "msTransform", m), _(x, "transform", m), Wt = c, Vt = d, fe = a;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!x) {
      var t = this.options.fallbackOnBody ? document.body : L, e = G(h, !0, yt, !0, t), n = this.options;
      if (yt) {
        for (ee = t; _(ee, "position") === "static" && _(ee, "transform") === "none" && ee !== document; )
          ee = ee.parentNode;
        ee !== document.body && ee !== document.documentElement ? (ee === document && (ee = ve()), e.top += ee.scrollTop, e.left += ee.scrollLeft) : ee = ve(), qt = En(ee);
      }
      x = h.cloneNode(!0), ae(x, n.ghostClass, !1), ae(x, n.fallbackClass, !0), ae(x, n.dragClass, !0), _(x, "transition", ""), _(x, "transform", ""), _(x, "box-sizing", "border-box"), _(x, "margin", 0), _(x, "top", e.top), _(x, "left", e.left), _(x, "width", e.width), _(x, "height", e.height), _(x, "opacity", "0.8"), _(x, "position", yt ? "absolute" : "fixed"), _(x, "zIndex", "100000"), _(x, "pointerEvents", "none"), C.ghost = x, t.appendChild(x), _(x, "transform-origin", kn / parseInt(x.style.width) * 100 + "% " + Mn / parseInt(x.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var n = this, i = t.dataTransfer, a = n.options;
    if (re("dragStart", this, {
      evt: t
    }), C.eventCanceled) {
      this._onDrop();
      return;
    }
    re("setupClone", this), C.eventCanceled || ($ = nr(h), $.draggable = !1, $.style["will-change"] = "", this._hideClone(), ae($, this.options.chosenClass, !1), C.clone = $), n.cloneId = Tt(function() {
      re("clone", n), !C.eventCanceled && (n.options.removeCloneOnHide || L.insertBefore($, h), n._hideClone(), te({
        sortable: n,
        name: "clone"
      }));
    }), !e && ae(h, a.dragClass, !0), e ? (It = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (P(document, "mouseup", n._onDrop), P(document, "touchend", n._onDrop), P(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", a.setData && a.setData.call(n, i, h)), S(document, "drop", n), _(h, "transform", "translateZ(0)")), Xe = !0, n._dragStartId = Tt(n._dragStarted.bind(n, e, t)), S(document, "selectstart", n), ot = !0, ut && _(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, n = t.target, i, a, o, s = this.options, l = s.group, u = C.active, c = bt === l, d = s.sort, m = U || u, g, w = this, D = !1;
    if (Jt)
      return;
    function X(nt, pr) {
      re(nt, w, ye({
        evt: t,
        isOwner: c,
        axis: g ? "vertical" : "horizontal",
        revert: o,
        dragRect: i,
        targetRect: a,
        canSort: d,
        fromSortable: m,
        target: n,
        completed: M,
        onMove: function(hn, br) {
          return _t(L, e, h, i, hn, G(hn), t, br);
        },
        changed: O
      }, pr));
    }
    function Z() {
      X("dragOverAnimationCapture"), w.captureAnimationState(), w !== m && m.captureAnimationState();
    }
    function M(nt) {
      return X("dragOverCompleted", {
        insertion: nt
      }), nt && (c ? u._hideClone() : u._showClone(w), w !== m && (ae(h, U ? U.options.ghostClass : u.options.ghostClass, !1), ae(h, s.ghostClass, !0)), U !== w && w !== C.active ? U = w : w === C.active && U && (U = null), m === w && (w._ignoreWhileAnimating = n), w.animateAll(function() {
        X("dragOverAnimationComplete"), w._ignoreWhileAnimating = null;
      }), w !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === h && !h.animated || n === e && !n.animated) && (Be = null), !s.dragoverBubble && !t.rootEl && n !== document && (h.parentNode[le]._isOutsideThisEl(t.target), !nt && Ae(t)), !s.dragoverBubble && t.stopPropagation && t.stopPropagation(), D = !0;
    }
    function O() {
      oe = ce(h), Ie = ce(h, s.draggable), te({
        sortable: w,
        name: "change",
        toEl: e,
        newIndex: oe,
        newDraggableIndex: Ie,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = ge(n, s.draggable, e, !0), X("dragOver"), C.eventCanceled)
      return D;
    if (h.contains(t.target) || n.animated && n.animatingX && n.animatingY || w._ignoreWhileAnimating === n)
      return M(!1);
    if (It = !1, u && !s.disabled && (c ? d || (o = F !== L) : U === this || (this.lastPutMode = bt.checkPull(this, u, h, t)) && l.checkPut(this, u, h, t))) {
      if (g = this._getDirection(t, n) === "vertical", i = G(h), X("dragOverValid"), C.eventCanceled)
        return D;
      if (o)
        return F = L, Z(), this._hideClone(), X("revert"), C.eventCanceled || ($e ? L.insertBefore(h, $e) : L.appendChild(h)), M(!0);
      var z = un(e, s.draggable);
      if (!z || cs(t, g, this) && !z.animated) {
        if (z === h)
          return M(!1);
        if (z && e === t.target && (n = z), n && (a = G(n)), _t(L, e, h, i, n, a, t, !!n) !== !1)
          return Z(), e.appendChild(h), F = e, O(), M(!0);
      } else if (z && us(t, g, this)) {
        var T = Je(e, 0, s, !0);
        if (T === h)
          return M(!1);
        if (n = T, a = G(n), _t(L, e, h, i, n, a, t, !1) !== !1)
          return Z(), e.insertBefore(h, T), F = e, O(), M(!0);
      } else if (n.parentNode === e) {
        a = G(n);
        var H = 0, Y, y = h.parentNode !== e, E = !is(h.animated && h.toRect || i, n.animated && n.toRect || a, g), J = g ? "top" : "left", de = Tn(n, "top", "top") || Tn(h, "top", "top"), _e = de ? de.scrollTop : void 0;
        Be !== n && (Y = a[J], ht = !1, vt = !E && s.invertSwap || y), H = ds(t, n, a, g, E ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, vt, Be === n);
        var ue;
        if (H !== 0) {
          var me = ce(h);
          do
            me -= H, ue = F.children[me];
          while (ue && (_(ue, "display") === "none" || ue === x));
        }
        if (H === 0 || ue === n)
          return M(!1);
        Be = n, ft = H;
        var tt = n.nextElementSibling, Me = !1;
        Me = H === 1;
        var pt = _t(L, e, h, i, n, a, t, Me);
        if (pt !== !1)
          return (pt === 1 || pt === -1) && (Me = pt === 1), Jt = !0, setTimeout(ls, 30), Z(), Me && !tt ? e.appendChild(h) : n.parentNode.insertBefore(h, Me ? tt : n), de && tr(de, 0, _e - de.scrollTop), F = h.parentNode, Y !== void 0 && !vt && (Dt = Math.abs(Y - G(n)[J])), O(), M(!0);
      }
      if (e.contains(h))
        return M(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    P(document, "mousemove", this._onTouchMove), P(document, "touchmove", this._onTouchMove), P(document, "pointermove", this._onTouchMove), P(document, "dragover", Ae), P(document, "mousemove", Ae), P(document, "touchmove", Ae);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    P(t, "mouseup", this._onDrop), P(t, "touchend", this._onDrop), P(t, "pointerup", this._onDrop), P(t, "touchcancel", this._onDrop), P(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, n = this.options;
    if (oe = ce(h), Ie = ce(h, n.draggable), re("drop", this, {
      evt: t
    }), F = h && h.parentNode, oe = ce(h), Ie = ce(h, n.draggable), C.eventCanceled) {
      this._nulling();
      return;
    }
    Xe = !1, vt = !1, ht = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), en(this.cloneId), en(this._dragStartId), this.nativeDraggable && (P(document, "drop", this), P(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ut && _(document.body, "user-select", ""), _(h, "transform", ""), t && (ot && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), x && x.parentNode && x.parentNode.removeChild(x), (L === F || U && U.lastPutMode !== "clone") && $ && $.parentNode && $.parentNode.removeChild($), h && (this.nativeDraggable && P(h, "dragend", this), Bt(h), h.style["will-change"] = "", ot && !Xe && ae(h, U ? U.options.ghostClass : this.options.ghostClass, !1), ae(h, this.options.chosenClass, !1), te({
      sortable: this,
      name: "unchoose",
      toEl: F,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), L !== F ? (oe >= 0 && (te({
      rootEl: F,
      name: "add",
      toEl: F,
      fromEl: L,
      originalEvent: t
    }), te({
      sortable: this,
      name: "remove",
      toEl: F,
      originalEvent: t
    }), te({
      rootEl: F,
      name: "sort",
      toEl: F,
      fromEl: L,
      originalEvent: t
    }), te({
      sortable: this,
      name: "sort",
      toEl: F,
      originalEvent: t
    })), U && U.save()) : oe !== ze && oe >= 0 && (te({
      sortable: this,
      name: "update",
      toEl: F,
      originalEvent: t
    }), te({
      sortable: this,
      name: "sort",
      toEl: F,
      originalEvent: t
    })), C.active && ((oe == null || oe === -1) && (oe = ze, Ie = dt), te({
      sortable: this,
      name: "end",
      toEl: F,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    re("nulling", this), L = h = F = x = $e = $ = xt = Ne = Le = fe = ot = oe = Ie = ze = dt = Be = ft = U = bt = C.dragged = C.ghost = C.clone = C.active = null, Yt.forEach(function(t) {
      t.checked = !0;
    }), Yt.length = Wt = Vt = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        h && (this._onDragOver(t), ss(t));
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
    for (var t = [], e, n = this.el.children, i = 0, a = n.length, o = this.options; i < a; i++)
      e = n[i], ge(e, o.draggable, this.el, !1) && t.push(e.getAttribute(o.dataIdAttr) || hs(e));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, e) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(a, o) {
      var s = i.children[o];
      ge(s, this.options.draggable, i, !1) && (n[a] = s);
    }, this), e && this.captureAnimationState(), t.forEach(function(a) {
      n[a] && (i.removeChild(n[a]), i.appendChild(n[a]));
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
    return ge(t, e || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, e) {
    var n = this.options;
    if (e === void 0)
      return n[t];
    var i = wt.modifyOption(this, t, e);
    typeof i < "u" ? n[t] = i : n[t] = e, t === "group" && ar(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    re("destroy", this);
    var t = this.el;
    t[le] = null, P(t, "mousedown", this._onTapStart), P(t, "touchstart", this._onTapStart), P(t, "pointerdown", this._onTapStart), this.nativeDraggable && (P(t, "dragover", this), P(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Nt.splice(Nt.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Ne) {
      if (re("hideClone", this), C.eventCanceled)
        return;
      _($, "display", "none"), this.options.removeCloneOnHide && $.parentNode && $.parentNode.removeChild($), Ne = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ne) {
      if (re("showClone", this), C.eventCanceled)
        return;
      h.parentNode == L && !this.options.group.revertClone ? L.insertBefore($, h) : $e ? L.insertBefore($, $e) : L.appendChild($), this.options.group.revertClone && this.animate(h, $), _($, "display", ""), Ne = !1;
    }
  }
};
function ss(r) {
  r.dataTransfer && (r.dataTransfer.dropEffect = "move"), r.cancelable && r.preventDefault();
}
function _t(r, t, e, n, i, a, o, s) {
  var l, u = r[le], c = u.options.onMove, d;
  return window.CustomEvent && !ke && !gt ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = r, l.dragged = e, l.draggedRect = n, l.related = i || t, l.relatedRect = a || G(t), l.willInsertAfter = s, l.originalEvent = o, r.dispatchEvent(l), c && (d = c.call(u, l, o)), d;
}
function Bt(r) {
  r.draggable = !1;
}
function ls() {
  Jt = !1;
}
function us(r, t, e) {
  var n = G(Je(e.el, 0, e.options, !0)), i = 10;
  return t ? r.clientX < n.left - i || r.clientY < n.top && r.clientX < n.right : r.clientY < n.top - i || r.clientY < n.bottom && r.clientX < n.left;
}
function cs(r, t, e) {
  var n = G(un(e.el, e.options.draggable)), i = 10;
  return t ? r.clientX > n.right + i || r.clientX <= n.right && r.clientY > n.bottom && r.clientX >= n.left : r.clientX > n.right && r.clientY > n.top || r.clientX <= n.right && r.clientY > n.bottom + i;
}
function ds(r, t, e, n, i, a, o, s) {
  var l = n ? r.clientY : r.clientX, u = n ? e.height : e.width, c = n ? e.top : e.left, d = n ? e.bottom : e.right, m = !1;
  if (!o) {
    if (s && Dt < u * i) {
      if (!ht && (ft === 1 ? l > c + u * a / 2 : l < d - u * a / 2) && (ht = !0), ht)
        m = !0;
      else if (ft === 1 ? l < c + Dt : l > d - Dt)
        return -ft;
    } else if (l > c + u * (1 - i) / 2 && l < d - u * (1 - i) / 2)
      return fs(t);
  }
  return m = m || o, m && (l < c + u * a / 2 || l > d - u * a / 2) ? l > c + u / 2 ? 1 : -1 : 0;
}
function fs(r) {
  return ce(h) < ce(r) ? 1 : -1;
}
function hs(r) {
  for (var t = r.tagName + r.className + r.src + r.href + r.textContent, e = t.length, n = 0; e--; )
    n += t.charCodeAt(e);
  return n.toString(36);
}
function ms(r) {
  Yt.length = 0;
  for (var t = r.getElementsByTagName("input"), e = t.length; e--; ) {
    var n = t[e];
    n.checked && Yt.push(n);
  }
}
function Tt(r) {
  return setTimeout(r, 0);
}
function en(r) {
  return clearTimeout(r);
}
At && S(document, "touchmove", function(r) {
  (C.active || Xe) && r.cancelable && r.preventDefault();
});
C.utils = {
  on: S,
  off: P,
  css: _,
  find: Jn,
  is: function(t, e) {
    return !!ge(t, e, t, !1);
  },
  extend: Zo,
  throttle: er,
  closest: ge,
  toggleClass: ae,
  clone: nr,
  index: ce,
  nextTick: Tt,
  cancelNextTick: en,
  detectDirection: ir,
  getChild: Je
};
C.get = function(r) {
  return r[le];
};
C.mount = function() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (C.utils = ye(ye({}, C.utils), n.utils)), wt.mount(n);
  });
};
C.create = function(r, t) {
  return new C(r, t);
};
C.version = zo;
var q = [], st, tn, nn = !1, Xt, zt, Ht, lt;
function gs() {
  function r() {
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
  return r.prototype = {
    dragStarted: function(e) {
      var n = e.originalEvent;
      this.sortable.nativeDraggable ? S(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? S(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? S(document, "touchmove", this._handleFallbackAutoScroll) : S(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var n = e.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? P(document, "dragover", this._handleAutoScroll) : (P(document, "pointermove", this._handleFallbackAutoScroll), P(document, "touchmove", this._handleFallbackAutoScroll), P(document, "mousemove", this._handleFallbackAutoScroll)), On(), Et(), Uo();
    },
    nulling: function() {
      Ht = tn = st = nn = lt = Xt = zt = null, q.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, n) {
      var i = this, a = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, s = document.elementFromPoint(a, o);
      if (Ht = e, n || this.options.forceAutoScrollFallback || gt || ke || ut) {
        Gt(e, this.options, s, n);
        var l = Ye(s, !0);
        nn && (!lt || a !== Xt || o !== zt) && (lt && On(), lt = setInterval(function() {
          var u = Ye(document.elementFromPoint(a, o), !0);
          u !== l && (l = u, Et()), Gt(e, i.options, u, n);
        }, 10), Xt = a, zt = o);
      } else {
        if (!this.options.bubbleScroll || Ye(s, !0) === ve()) {
          Et();
          return;
        }
        Gt(e, this.options, Ye(s, !1), !1);
      }
    }
  }, Ee(r, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Et() {
  q.forEach(function(r) {
    clearInterval(r.pid);
  }), q = [];
}
function On() {
  clearInterval(lt);
}
var Gt = er(function(r, t, e, n) {
  if (t.scroll) {
    var i = (r.touches ? r.touches[0] : r).clientX, a = (r.touches ? r.touches[0] : r).clientY, o = t.scrollSensitivity, s = t.scrollSpeed, l = ve(), u = !1, c;
    tn !== e && (tn = e, Et(), st = t.scroll, c = t.scrollFn, st === !0 && (st = Ye(e, !0)));
    var d = 0, m = st;
    do {
      var g = m, w = G(g), D = w.top, X = w.bottom, Z = w.left, M = w.right, O = w.width, z = w.height, T = void 0, H = void 0, Y = g.scrollWidth, y = g.scrollHeight, E = _(g), J = g.scrollLeft, de = g.scrollTop;
      g === l ? (T = O < Y && (E.overflowX === "auto" || E.overflowX === "scroll" || E.overflowX === "visible"), H = z < y && (E.overflowY === "auto" || E.overflowY === "scroll" || E.overflowY === "visible")) : (T = O < Y && (E.overflowX === "auto" || E.overflowX === "scroll"), H = z < y && (E.overflowY === "auto" || E.overflowY === "scroll"));
      var _e = T && (Math.abs(M - i) <= o && J + O < Y) - (Math.abs(Z - i) <= o && !!J), ue = H && (Math.abs(X - a) <= o && de + z < y) - (Math.abs(D - a) <= o && !!de);
      if (!q[d])
        for (var me = 0; me <= d; me++)
          q[me] || (q[me] = {});
      (q[d].vx != _e || q[d].vy != ue || q[d].el !== g) && (q[d].el = g, q[d].vx = _e, q[d].vy = ue, clearInterval(q[d].pid), (_e != 0 || ue != 0) && (u = !0, q[d].pid = setInterval((function() {
        n && this.layer === 0 && C.active._onTouchMove(Ht);
        var tt = q[this.layer].vy ? q[this.layer].vy * s : 0, Me = q[this.layer].vx ? q[this.layer].vx * s : 0;
        typeof c == "function" && c.call(C.dragged.parentNode[le], Me, tt, r, Ht, q[this.layer].el) !== "continue" || tr(q[this.layer].el, Me, tt);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && m !== l && (m = Ye(m, !1)));
    nn = u;
  }
}, 30), lr = function(t) {
  var e = t.originalEvent, n = t.putSortable, i = t.dragEl, a = t.activeSortable, o = t.dispatchSortableEvent, s = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (e) {
    var u = n || a;
    s();
    var c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, d = document.elementFromPoint(c.clientX, c.clientY);
    l(), u && !u.el.contains(d) && (o("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function cn() {
}
cn.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = Je(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(e, i) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: lr
};
Ee(cn, {
  pluginName: "revertOnSpill"
});
function dn() {
}
dn.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable, i = n || this.sortable;
    i.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), i.animateAll();
  },
  drop: lr
};
Ee(dn, {
  pluginName: "removeOnSpill"
});
C.mount(new gs());
C.mount(dn, cn);
function Qt(r) {
  r.parentElement !== null && r.parentElement.removeChild(r);
}
function Sn(r, t, e) {
  const n = e === 0 ? r.children[0] : r.children[e - 1].nextSibling;
  r.insertBefore(t, n);
}
function ws() {
  return typeof window < "u" ? window.console : global.console;
}
const ps = ws();
function bs(r) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] || (t[n] = r(n));
  };
}
const vs = /-(\w)/g, ys = bs((r) => r.replace(vs, (t, e) => e.toUpperCase())), ur = ["Start", "Add", "Remove", "Update", "End"], cr = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], dr = ["Move"], _s = [dr, ur, cr].flatMap((r) => r).map((r) => `on${r}`), rn = {
  manage: dr,
  manageAndEmit: ur,
  emit: cr
};
function Cs(r) {
  return _s.indexOf(r) !== -1;
}
const xs = [
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
function Ds(r) {
  return xs.includes(r);
}
function Ts(r) {
  return ["transition-group", "TransitionGroup"].includes(r);
}
function fr(r) {
  return ["id", "class", "role", "style"].includes(r) || r.startsWith("data-") || r.startsWith("aria-") || r.startsWith("on");
}
function hr(r) {
  return r.reduce((t, [e, n]) => (t[e] = n, t), {});
}
function Es({ $attrs: r, componentData: t = {} }) {
  return {
    ...hr(
      Object.entries(r).filter(([n, i]) => fr(n))
    ),
    ...t
  };
}
function ks({ $attrs: r, callBackBuilder: t }) {
  const e = hr(mr(r));
  Object.entries(t).forEach(([i, a]) => {
    rn[i].forEach((o) => {
      e[`on${o}`] = a(o);
    });
  });
  const n = `[data-draggable]${e.draggable || ""}`;
  return {
    ...e,
    draggable: n
  };
}
function mr(r) {
  return Object.entries(r).filter(([t, e]) => !fr(t)).map(([t, e]) => [ys(t), e]).filter(([t, e]) => !Cs(t));
}
const In = ({ el: r }) => r, Ms = (r, t) => r.__draggable_context = t, Nn = (r) => r.__draggable_context;
class Ps {
  constructor({
    nodes: { header: t, default: e, footer: n },
    root: i,
    realList: a
  }) {
    this.defaultNodes = e, this.children = [...t, ...e, ...n], this.externalComponent = i.externalComponent, this.rootTransition = i.transition, this.tag = i.tag, this.realList = a;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(t, e) {
    const { tag: n, children: i, _isRootComponent: a } = this;
    return t(n, e, a ? { default: () => i } : i);
  }
  updated() {
    const { defaultNodes: t, realList: e } = this;
    t.forEach((n, i) => {
      Ms(In(n), {
        element: e[i],
        index: i
      });
    });
  }
  getUnderlyingVm(t) {
    return Nn(t);
  }
  getVmIndexFromDomIndex(t, e) {
    const { defaultNodes: n } = this, { length: i } = n, a = e.children, o = a.item(t);
    if (o === null)
      return i;
    const s = Nn(o);
    if (s)
      return s.index;
    if (i === 0)
      return 0;
    const l = In(n[0]), u = [...a].findIndex(
      (c) => c === l
    );
    return t < u ? 0 : i;
  }
}
function Os(r, t) {
  const e = r[t];
  return e ? e() : [];
}
function Ss({ $slots: r, realList: t, getKey: e }) {
  const n = t || [], [i, a] = ["header", "footer"].map(
    (l) => Os(r, l)
  ), { item: o } = r;
  if (!o)
    throw new Error("draggable element must have an item slot");
  const s = n.flatMap(
    (l, u) => o({ element: l, index: u }).map((c) => (c.key = e(l), c.props = { ...c.props || {}, "data-draggable": !0 }, c))
  );
  if (s.length !== n.length)
    throw new Error("Item slot must have only one child");
  return {
    header: i,
    footer: a,
    default: s
  };
}
function Is(r) {
  const t = Ts(r), e = !Ds(r) && !t;
  return {
    transition: t,
    externalComponent: e,
    tag: e ? kr(r) : t ? Mr : r
  };
}
function Ns({ $slots: r, tag: t, realList: e, getKey: n }) {
  const i = Ss({ $slots: r, realList: e, getKey: n }), a = Is(t);
  return new Ps({ nodes: i, root: a, realList: e });
}
function gr(r, t) {
  Yn(() => this.$emit(r.toLowerCase(), t));
}
function wr(r) {
  return (t, e) => {
    if (this.realList !== null)
      return this[`onDrag${r}`](t, e);
  };
}
function Ys(r) {
  const t = wr.call(this, r);
  return (e, n) => {
    t.call(this, e, n), gr.call(this, r, e);
  };
}
let jt = null;
const Hs = {
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
    default: (r) => r
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
}, Ls = [
  "update:modelValue",
  "change",
  ...[...rn.manageAndEmit, ...rn.emit].map((r) => r.toLowerCase())
], As = Pr({
  name: "draggable",
  inheritAttrs: !1,
  props: Hs,
  emits: Ls,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: r, $attrs: t, tag: e, componentData: n, realList: i, getKey: a } = this, o = Ns({
        $slots: r,
        tag: e,
        realList: i,
        getKey: a
      });
      this.componentStructure = o;
      const s = Es({ $attrs: t, componentData: n });
      return o.render(gn, s);
    } catch (r) {
      return this.error = !0, gn("pre", { style: { color: "red" } }, r.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && ps.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: r, $el: t, componentStructure: e } = this;
    e.updated();
    const n = ks({
      $attrs: r,
      callBackBuilder: {
        manageAndEmit: (a) => Ys.call(this, a),
        emit: (a) => gr.bind(this, a),
        manage: (a) => wr.call(this, a)
      }
    }), i = t.nodeType === 1 ? t : t.parentElement;
    this._sortable = new C(i, n), this.targetDomElement = i, i.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: r } = this;
      return r || this.modelValue;
    },
    getKey() {
      const { itemKey: r } = this;
      return typeof r == "function" ? r : (t) => t[r];
    }
  },
  watch: {
    $attrs: {
      handler(r) {
        const { _sortable: t } = this;
        t && mr(r).forEach(([e, n]) => {
          t.option(e, n);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(r) {
      return this.componentStructure.getUnderlyingVm(r) || null;
    },
    getUnderlyingPotencialDraggableComponent(r) {
      return r.__draggable_component__;
    },
    emitChanges(r) {
      Yn(() => this.$emit("change", r));
    },
    alterList(r) {
      if (this.list) {
        r(this.list);
        return;
      }
      const t = [...this.modelValue];
      r(t), this.$emit("update:modelValue", t);
    },
    spliceList() {
      const r = (t) => t.splice(...arguments);
      this.alterList(r);
    },
    updatePosition(r, t) {
      const e = (n) => n.splice(t, 0, n.splice(r, 1)[0]);
      this.alterList(e);
    },
    getRelatedContextFromMoveEvent({ to: r, related: t }) {
      const e = this.getUnderlyingPotencialDraggableComponent(r);
      if (!e)
        return { component: e };
      const n = e.realList, i = { list: n, component: e };
      return r !== t && n ? { ...e.getUnderlyingVm(t) || {}, ...i } : i;
    },
    getVmIndexFromDomIndex(r) {
      return this.componentStructure.getVmIndexFromDomIndex(
        r,
        this.targetDomElement
      );
    },
    onDragStart(r) {
      this.context = this.getUnderlyingVm(r.item), r.item._underlying_vm_ = this.clone(this.context.element), jt = r.item;
    },
    onDragAdd(r) {
      const t = r.item._underlying_vm_;
      if (t === void 0)
        return;
      Qt(r.item);
      const e = this.getVmIndexFromDomIndex(r.newIndex);
      this.spliceList(e, 0, t);
      const n = { element: t, newIndex: e };
      this.emitChanges({ added: n });
    },
    onDragRemove(r) {
      if (Sn(this.$el, r.item, r.oldIndex), r.pullMode === "clone") {
        Qt(r.clone);
        return;
      }
      const { index: t, element: e } = this.context;
      this.spliceList(t, 1);
      const n = { element: e, oldIndex: t };
      this.emitChanges({ removed: n });
    },
    onDragUpdate(r) {
      Qt(r.item), Sn(r.from, r.item, r.oldIndex);
      const t = this.context.index, e = this.getVmIndexFromDomIndex(r.newIndex);
      this.updatePosition(t, e);
      const n = { element: this.context.element, oldIndex: t, newIndex: e };
      this.emitChanges({ moved: n });
    },
    computeFutureIndex(r, t) {
      if (!r.element)
        return 0;
      const e = [...t.to.children].filter(
        (o) => o.style.display !== "none"
      ), n = e.indexOf(t.related), i = r.component.getVmIndexFromDomIndex(
        n
      );
      return e.indexOf(jt) !== -1 || !t.willInsertAfter ? i : i + 1;
    },
    onDragMove(r, t) {
      const { move: e, realList: n } = this;
      if (!e || !n)
        return !0;
      const i = this.getRelatedContextFromMoveEvent(r), a = this.computeFutureIndex(i, r), o = {
        ...this.context,
        futureIndex: a
      }, s = {
        ...r,
        relatedContext: i,
        draggedContext: o
      };
      return e(s, t);
    },
    onDragEnd() {
      jt = null;
    }
  }
}), Fs = { class: "settings-modal" }, $s = ["textContent"], Rs = ["textContent"], Ws = { class: "column-settings-list" }, Vs = { class: "list-item" }, qs = { class: "actions-container" }, Bs = ["textContent"], Xs = ["textContent"], zs = {
  __name: "ColumnSettingsModal",
  props: {
    columns: {
      type: Array,
      required: !0
    }
  },
  emits: ["save", "close"],
  setup(r, { emit: t }) {
    const e = t, n = r;
    let i = Q([]);
    function a() {
      e("save", i.value);
    }
    return n.columns.forEach((o) => i.value.push({ ...o })), (o, s) => (p(), xe(Zn, null, {
      default: Zt(() => [
        b("div", Fs, [
          b("div", {
            class: "settings-modal-title",
            textContent: ne(k(K).getTranslate("column_settings_modal.title"))
          }, null, 8, $s),
          b("div", {
            class: "settings-modal-description",
            textContent: ne(k(K).getTranslate("column_settings_modal.description"))
          }, null, 8, Rs),
          b("div", Ws, [
            he(k(As), {
              modelValue: k(i),
              "onUpdate:modelValue": s[0] || (s[0] = (l) => De(i) ? i.value = l : i = l),
              "item-key": "key",
              animation: 300
            }, {
              item: Zt(({ element: l }) => [
                b("div", Vs, [
                  he(Vo, {
                    label: l.label,
                    "model-value": l.visible,
                    "onUpdate:modelValue": (u) => l.visible = u
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"]),
                  he(se, {
                    icon: "drag-indicator",
                    class: "drag-indicator-icon"
                  })
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          b("div", qs, [
            b("div", {
              class: "button button-cancel",
              onClick: s[1] || (s[1] = (l) => e("close")),
              textContent: ne(k(K).getTranslate("column_settings_modal.actions.cancel"))
            }, null, 8, Bs),
            b("div", {
              class: "button button-confirm",
              onClick: a,
              textContent: ne(k(K).getTranslate("column_settings_modal.actions.save"))
            }, null, 8, Xs)
          ])
        ])
      ]),
      _: 1
    }));
  }
}, Gs = { class: "table-controls" }, Qs = { class: "settings-container" }, il = {
  __name: "TableControls",
  setup(r) {
    let t = Q("small"), e = Q("black"), n = Q(!1), i = Q(!1), a = [], o = Q(!1), s = Hn();
    function l() {
      o.value = !o.value, s.triggerEvent("toggle-search-event");
    }
    function u(m, g) {
      t.value = m, e.value = g, s.triggerEvent("update-table-style-event", { newRowSize: m, newDigitsColor: g }), n.value = !1;
    }
    function c(m) {
      a = m, s.triggerEvent("update-table-columns-event", m), i.value = !1;
    }
    function d(m) {
      a = m;
    }
    return s.addEventHandler("sync-table-columns-event", d), (m, g) => (p(), v("div", null, [
      b("div", Gs, [
        b("div", {
          onClick: l,
          class: Ue(["search-button", k(o) ? "active" : "inactive"])
        }, [
          he(se, {
            icon: "search",
            class: "search-icon"
          })
        ], 2),
        g[4] || (g[4] = b("div", { class: "divider" }, null, -1)),
        b("div", Qs, [
          b("div", {
            onClick: g[0] || (g[0] = (w) => De(i) ? i.value = !0 : i = !0),
            class: "setting"
          }, [
            he(se, {
              icon: "columns",
              class: "setting-icon"
            })
          ]),
          b("div", {
            onClick: g[1] || (g[1] = (w) => De(n) ? n.value = !0 : n = !0),
            class: "setting"
          }, [
            he(se, {
              icon: "settings",
              class: "setting-icon"
            })
          ])
        ])
      ]),
      k(n) ? (p(), xe(Lo, {
        key: 0,
        "row-size-value": k(t),
        "digits-color-value": k(e),
        onSave: u,
        onClose: g[2] || (g[2] = (w) => De(n) ? n.value = !1 : n = !1)
      }, null, 8, ["row-size-value", "digits-color-value"])) : be("", !0),
      k(i) ? (p(), xe(zs, {
        key: 1,
        columns: k(a),
        onClose: g[3] || (g[3] = (w) => De(i) ? i.value = !1 : i = !1),
        onSave: c
      }, null, 8, ["columns"])) : be("", !0)
    ]));
  }
}, js = "Search...", Zs = {
  title: "Column order and visibility",
  description: "Changes the order and visibility of columns in the following settings:",
  actions: {
    save: "Save",
    cancel: "Cancel"
  }
}, Us = {
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
}, Ks = {
  search: js,
  column_settings_modal: Zs,
  style_settings_modal: Us
};
function Js(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(t, e) {
    var n = r.get(t);
    n && n.push(e) || r.set(t, [e]);
  }, off: function(t, e) {
    var n = r.get(t);
    n && n.splice(n.indexOf(e) >>> 0, 1);
  }, emit: function(t, e) {
    (r.get(t) || []).slice().map(function(n) {
      n(e);
    }), (r.get("*") || []).slice().map(function(n) {
      n(t, e);
    });
  } };
}
window.__vue3TableDataConfig = {
  mitt: Js(),
  translation: {
    file: Ks,
    setTranslate: (r) => K.setTranslateFile(r)
  }
};
export {
  Ot as Column,
  rl as SmartTable,
  il as TableControls
};

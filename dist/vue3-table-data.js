import { openBlock as m, createElementBlock as _, createCommentVNode as ae, createElementVNode as g, ref as L, reactive as hn, watch as mn, computed as Me, onMounted as gn, Fragment as pe, renderList as ve, normalizeClass as $e, toDisplayString as Le, createVNode as te, unref as M, onUnmounted as pn, withModifiers as vn, renderSlot as bn, createBlock as _e, withCtx as wt, isRef as fe, withDirectives as _n, vModelCheckbox as Cn, resolveComponent as wn, TransitionGroup as yn, defineComponent as En, h as Ot, nextTick as Xt } from "vue";
const Dn = { key: 0 }, Sn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, xn = /* @__PURE__ */ g("path", {
  d: "M16.6667 9.16797H3.33333C2.87333 9.16797 2.5 9.5413 2.5 10.0013C2.5 10.4613 2.87333 10.8346 3.33333 10.8346H16.6667C17.1267 10.8346 17.5 10.4613 17.5 10.0013C17.5 9.5413 17.1267 9.16797 16.6667 9.16797Z",
  fill: "currentColor"
}, null, -1), Tn = [
  xn
], In = { key: 1 }, kn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, On = /* @__PURE__ */ g("path", {
  d: "M11.3333 5.33333H6.66667V0.666667C6.66667 0.298667 6.368 0 6 0C5.632 0 5.33333 0.298667 5.33333 0.666667V5.33333H0.666667C0.298667 5.33333 0 5.632 0 6C0 6.368 0.298667 6.66667 0.666667 6.66667H5.33333V11.3333C5.33333 11.7013 5.632 12 6 12C6.368 12 6.66667 11.7013 6.66667 11.3333V6.66667H11.3333C11.7013 6.66667 12 6.368 12 6C12 5.632 11.7013 5.33333 11.3333 5.33333Z",
  fill: "currentColor"
}, null, -1), An = [
  On
], Mn = { key: 2 }, Nn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, $n = /* @__PURE__ */ g("circle", {
  cx: "9",
  cy: "9",
  r: "8.25",
  fill: "white",
  stroke: "currentColor",
  "stroke-width": "1.5"
}, null, -1), Ln = [
  $n
], Pn = { key: 3 }, Fn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Vn = /* @__PURE__ */ g("circle", {
  cx: "9",
  cy: "9",
  r: "8.25",
  fill: "white",
  stroke: "currentColor",
  "stroke-width": "1.5"
}, null, -1), Hn = /* @__PURE__ */ g("circle", {
  cx: "9",
  cy: "9",
  r: "5",
  fill: "currentColor"
}, null, -1), Bn = [
  Vn,
  Hn
], Rn = { key: 4 }, zn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Xn = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.07997 7.07993V8.91993H12.92V7.07993H3.07997ZM2.21457 5.94512C2.45226 5.79232 2.73965 5.71992 3.02219 5.71992H12.9777C13.2603 5.71992 13.5477 5.79232 13.7854 5.94512C14.0156 6.09316 14.28 6.37949 14.28 6.79993V9.19993C14.28 9.62036 14.0156 9.90669 13.7854 10.0547C13.5477 10.2075 13.2603 10.2799 12.9777 10.2799H3.02219C2.73965 10.2799 2.45226 10.2075 2.21457 10.0547C1.9843 9.9067 1.71997 9.62036 1.71997 9.19993V6.79993C1.71997 6.37949 1.9843 6.09316 2.21457 5.94512Z",
  fill: "black"
}, null, -1), Yn = [
  Xn
], jn = { key: 5 }, Zn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Wn = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.07997 6.27992V9.71992H12.92V6.27992H3.07997ZM1.71997 6.19992C1.71997 5.47007 2.32669 4.91992 3.02219 4.91992H12.9777C13.6732 4.91992 14.28 5.47007 14.28 6.19992V9.79992C14.28 10.5298 13.6732 11.0799 12.9777 11.0799H3.02219C2.32669 11.0799 1.71997 10.5298 1.71997 9.79992V6.19992Z",
  fill: "black"
}, null, -1), Un = [
  Wn
], Gn = { key: 6 }, qn = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Kn = /* @__PURE__ */ g("path", {
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
}, to = /* @__PURE__ */ g("rect", {
  width: "18",
  height: "18",
  rx: "4",
  fill: "#5664E1"
}, null, -1), no = /* @__PURE__ */ g("path", {
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
}, ao = /* @__PURE__ */ g("path", {
  d: "M5.99984 13.3334C5.63317 13.3334 5.31928 13.2029 5.05817 12.9417C4.79706 12.6806 4.6665 12.3667 4.6665 12.0001C4.6665 11.6334 4.79706 11.3195 5.05817 11.0584C5.31928 10.7973 5.63317 10.6667 5.99984 10.6667C6.3665 10.6667 6.68039 10.7973 6.9415 11.0584C7.20261 11.3195 7.33317 11.6334 7.33317 12.0001C7.33317 12.3667 7.20261 12.6806 6.9415 12.9417C6.68039 13.2029 6.3665 13.3334 5.99984 13.3334ZM9.99984 13.3334C9.63317 13.3334 9.31928 13.2029 9.05817 12.9417C8.79706 12.6806 8.6665 12.3667 8.6665 12.0001C8.6665 11.6334 8.79706 11.3195 9.05817 11.0584C9.31928 10.7973 9.63317 10.6667 9.99984 10.6667C10.3665 10.6667 10.6804 10.7973 10.9415 11.0584C11.2026 11.3195 11.3332 11.6334 11.3332 12.0001C11.3332 12.3667 11.2026 12.6806 10.9415 12.9417C10.6804 13.2029 10.3665 13.3334 9.99984 13.3334ZM5.99984 9.33342C5.63317 9.33342 5.31928 9.20286 5.05817 8.94175C4.79706 8.68064 4.6665 8.36675 4.6665 8.00008C4.6665 7.63341 4.79706 7.31953 5.05817 7.05841C5.31928 6.7973 5.63317 6.66675 5.99984 6.66675C6.3665 6.66675 6.68039 6.7973 6.9415 7.05841C7.20261 7.31953 7.33317 7.63341 7.33317 8.00008C7.33317 8.36675 7.20261 8.68064 6.9415 8.94175C6.68039 9.20286 6.3665 9.33342 5.99984 9.33342ZM9.99984 9.33342C9.63317 9.33342 9.31928 9.20286 9.05817 8.94175C8.79706 8.68064 8.6665 8.36675 8.6665 8.00008C8.6665 7.63341 8.79706 7.31953 9.05817 7.05841C9.31928 6.7973 9.63317 6.66675 9.99984 6.66675C10.3665 6.66675 10.6804 6.7973 10.9415 7.05841C11.2026 7.31953 11.3332 7.63341 11.3332 8.00008C11.3332 8.36675 11.2026 8.68064 10.9415 8.94175C10.6804 9.20286 10.3665 9.33342 9.99984 9.33342ZM5.99984 5.33341C5.63317 5.33341 5.31928 5.20286 5.05817 4.94175C4.79706 4.68064 4.6665 4.36675 4.6665 4.00008C4.6665 3.63341 4.79706 3.31953 5.05817 3.05841C5.31928 2.7973 5.63317 2.66675 5.99984 2.66675C6.3665 2.66675 6.68039 2.7973 6.9415 3.05841C7.20261 3.31953 7.33317 3.63341 7.33317 4.00008C7.33317 4.36675 7.20261 4.68064 6.9415 4.94175C6.68039 5.20286 6.3665 5.33341 5.99984 5.33341ZM9.99984 5.33341C9.63317 5.33341 9.31928 5.20286 9.05817 4.94175C8.79706 4.68064 8.6665 4.36675 8.6665 4.00008C8.6665 3.63341 8.79706 3.31953 9.05817 3.05841C9.31928 2.7973 9.63317 2.66675 9.99984 2.66675C10.3665 2.66675 10.6804 2.7973 10.9415 3.05841C11.2026 3.31953 11.3332 3.63341 11.3332 4.00008C11.3332 4.36675 11.2026 4.68064 10.9415 4.94175C10.6804 5.20286 10.3665 5.33341 9.99984 5.33341Z",
  fill: "#303136"
}, null, -1), lo = [
  ao
], so = { key: 9 }, co = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, uo = /* @__PURE__ */ g("path", {
  d: "M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L19.5859 21.5859C20.1379 22.1379 21.0339 22.1379 21.5859 21.5859C22.1379 21.0339 22.1379 20.1379 21.5859 19.5859L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z",
  fill: "currentColor"
}, null, -1), fo = [
  uo
], ho = { key: 10 }, mo = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, go = /* @__PURE__ */ g("path", {
  d: "M2.49984 2.5C2.039 2.5 1.6665 2.8725 1.6665 3.33333V16.6667C1.6665 17.1275 2.039 17.5 2.49984 17.5H5.83317V2.5H2.49984ZM7.49984 2.5V17.5H12.4998V2.5H7.49984ZM14.1665 2.5V17.5H17.4998C17.9607 17.5 18.3332 17.1275 18.3332 16.6667V3.33333C18.3332 2.8725 17.9607 2.5 17.4998 2.5H14.1665Z",
  fill: "#303136"
}, null, -1), po = [
  go
], vo = { key: 11 }, bo = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _o = /* @__PURE__ */ g("path", {
  d: "M8.74188 1.66669C8.34271 1.66669 8.00149 1.94885 7.92482 2.34052L7.6465 3.76955C6.96253 4.02819 6.3301 4.38952 5.77475 4.8454L4.40431 4.37339C4.02681 4.24339 3.61147 4.39949 3.41147 4.74449L2.15496 6.92222C1.9558 7.26805 2.02828 7.7071 2.32912 7.96877L3.42775 8.92417C3.37061 9.2753 3.33335 9.63276 3.33335 10C3.33335 10.3673 3.37061 10.7247 3.42775 11.0759L2.32912 12.0313C2.02828 12.2929 1.9558 12.732 2.15496 13.0778L3.41147 15.2556C3.61064 15.6014 4.02681 15.7574 4.40431 15.6283L5.77475 15.1563C6.32992 15.6119 6.96284 15.972 7.6465 16.2305L7.92482 17.6595C8.00149 18.0512 8.34271 18.3334 8.74188 18.3334H11.2582C11.6573 18.3334 11.9985 18.0512 12.0752 17.6595L12.3535 16.2305C13.0375 15.9719 13.6699 15.6105 14.2253 15.1546L15.5957 15.6266C15.9732 15.7566 16.3886 15.6014 16.5886 15.2556L17.8451 13.0762C18.0442 12.7304 17.9717 12.2929 17.6709 12.0313L16.5723 11.0759C16.6294 10.7247 16.6667 10.3673 16.6667 10C16.6667 9.63276 16.6294 9.2753 16.5723 8.92417L17.6709 7.96877C17.9717 7.7071 18.0442 7.26805 17.8451 6.92222L16.5886 4.74449C16.3894 4.39865 15.9732 4.2426 15.5957 4.37177L14.2253 4.84377C13.6701 4.38818 13.0372 4.02807 12.3535 3.76955L12.0752 2.34052C11.9985 1.94885 11.6573 1.66669 11.2582 1.66669H8.74188ZM10 6.66669C11.8408 6.66669 13.3333 8.15919 13.3333 10C13.3333 11.8409 11.8408 13.3334 10 13.3334C8.15918 13.3334 6.66668 11.8409 6.66668 10C6.66668 8.15919 8.15918 6.66669 10 6.66669Z",
  fill: "currentColor"
}, null, -1), Co = [
  _o
], wo = { key: 12 }, yo = {
  style: { width: "100%", height: "100%" },
  viewBox: "0 0 6 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Eo = /* @__PURE__ */ g("path", {
  d: "M3.45883 11.9404C3.28486 12.3421 2.71514 12.3421 2.54117 11.9404L0.704461 7.69868C0.561505 7.36854 0.803529 7 1.16329 7L4.83671 7C5.19647 7 5.43849 7.36854 5.29554 7.69868L3.45883 11.9404Z",
  fill: "currentColor"
}, null, -1), Do = /* @__PURE__ */ g("path", {
  d: "M2.54117 1.05963C2.71514 0.657866 3.28486 0.657866 3.45883 1.05963L5.29554 5.30132C5.43849 5.63146 5.19647 6 4.83671 6L1.16329 6C0.803529 6 0.561506 5.63146 0.704461 5.30132L2.54117 1.05963Z",
  fill: "currentColor"
}, null, -1), So = [
  Eo,
  Do
], Z = {
  __name: "Icon",
  props: {
    icon: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return (e, n) => t.icon === "minus" ? (m(), _("div", Dn, [
      (m(), _("svg", Sn, Tn))
    ])) : t.icon === "plus" ? (m(), _("div", In, [
      (m(), _("svg", kn, An))
    ])) : t.icon === "radio-circle" ? (m(), _("div", Mn, [
      (m(), _("svg", Nn, Ln))
    ])) : t.icon === "radio-circle-selected" ? (m(), _("div", Pn, [
      (m(), _("svg", Fn, Bn))
    ])) : t.icon === "small-row" ? (m(), _("div", Rn, [
      (m(), _("svg", zn, Yn))
    ])) : t.icon === "medium-row" ? (m(), _("div", jn, [
      (m(), _("svg", Zn, Un))
    ])) : t.icon === "large-row" ? (m(), _("div", Gn, [
      (m(), _("svg", qn, Qn))
    ])) : t.icon === "check" ? (m(), _("div", Jn, [
      (m(), _("svg", eo, oo))
    ])) : t.icon === "drag-indicator" ? (m(), _("div", io, [
      (m(), _("svg", ro, lo))
    ])) : t.icon === "search" ? (m(), _("div", so, [
      (m(), _("svg", co, fo))
    ])) : t.icon === "columns" ? (m(), _("div", ho, [
      (m(), _("svg", mo, po))
    ])) : t.icon === "settings" ? (m(), _("div", vo, [
      (m(), _("svg", bo, Co))
    ])) : t.icon === "sort" ? (m(), _("div", wo, [
      (m(), _("svg", yo, So))
    ])) : ae("", !0);
  }
};
function xo() {
  let t = L([]), e = L([]);
  function n() {
    return t.value;
  }
  function o() {
    return e.value;
  }
  function i(l) {
    t.value = l, e.value = [], r(75);
  }
  function r(l = 30) {
    let s = e.value.length;
    if (s >= t.value.length)
      return;
    let c = t.value.slice(s, s + l);
    e.value = [...e.value, ...c];
  }
  function a() {
    e.value = [], r();
  }
  return {
    getAllData: n,
    getLoadedData: o,
    setData: i,
    loadData: r,
    refreshLoadedData: a
  };
}
function Yt() {
  let t = window.__tableEventBus;
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
const To = { class: "table-header" }, Io = { class: "table-header-row" }, ko = ["onClick"], Oo = ["textContent"], Ao = { key: 0 }, Mo = { class: "delimiter" }, No = {
  key: 1,
  class: "table-total"
}, $o = {
  key: 2,
  class: "column-search-container"
}, Lo = ["onInput", "placeholder"], Po = { class: "table-body" }, Fo = ["onClick"], pr = {
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
    let i = L(null), r = L(null), a = L(null), l = L(!1);
    const s = hn([
      { id: "small", class: "cell-small", selected: !0 },
      { id: "medium", class: "cell-medium", selected: !1 },
      { id: "large", class: "cell-large", selected: !1 }
    ]);
    let c = L("black"), h = L(!1), d = L({}), p = Yt(), v = xo();
    mn(d, () => {
      Object.values(d.value).every((f) => !f) && v.refreshLoadedData();
    }, { deep: !0 });
    const b = Me(() => r.value.filter((f) => f.visible)), S = Me(() => Object.keys(d.value).length === 0 ? v.getLoadedData() : v.getAllData().filter((f) => Object.keys(d.value).every((D) => {
      let E = oe(d.value[D]);
      return oe(f[D] ?? "").toLowerCase().includes(E.toLowerCase());
    })).slice(0, 120)), z = Me(() => (f, D) => {
      let E = [], k = s.find((ct) => ct.selected) ?? s[0];
      return E.push(k.class), f ? (E.push("numeric-column"), E.push(
        c.value === "color" ? Math.sign(D) < 0 ? "text-red" : "text-green" : "text-gray"
      ), E.join(" ")) : (E.push("text-gray"), E.join(" "));
    }), U = Me(() => b.value.some((f) => f.isNumeric));
    function P(f) {
      l.value = a.value === f ? !l.value : !0, a.value = f;
      let D = v.getAllData().sort(
        (E, k) => X(E[a.value], k[a.value], l.value)
      );
      v.setData(D);
    }
    function X(f, D, E) {
      return f == null && (f = ""), D == null && (D = ""), E || ([f, D] = [D, f]), ne(f) && ne(D) ? D - f : J(f) && J(D) ? de(f).getTime() > de(D).getTime() ? 1 : -1 : f.localeCompare(D);
    }
    function G(f) {
      return ne(f) ? K(f, { fractionDigits: 2 }) : f;
    }
    function ce(f) {
      s.forEach((D) => D.selected = D.id === f.newRowSize), c.value = f.newDigitsColor;
    }
    function q(f) {
      r.value = f;
    }
    function ue() {
      h.value = !h.value, h.value || (d.value = {});
    }
    function ye(f) {
      if (!f.isNumeric)
        return "";
      let D = o.data.rows.map((E) => E[f.key]);
      return K(D.reduce((E, k) => E + k, 0), { fractionDigits: 2 });
    }
    function H(f) {
      return o.data.rows.map((E) => E[f.key]).every(ne);
    }
    function ne(f) {
      return f !== null && typeof f == "number";
    }
    function J(f) {
      return !f || typeof f == "string" && f.length !== 10 ? !1 : de(f) instanceof Date;
    }
    function de(f, D = "d.m.Y") {
      if (D === "d.m.Y") {
        let E = f.substr(6), k = f.substr(3, 2), ct = f.substr(0, 2);
        return new Date(E, k - 1, ct, 0, 0, 0, 0);
      }
    }
    function K(f, D = {}) {
      if (f === null || isNaN(f))
        return f;
      let E = {
        minimumFractionDigits: (typeof D.minimumFractionDigits == "number" ? D.minimumFractionDigits : null) || (typeof D.fractionDigits == "number" ? D.fractionDigits : 2),
        maximumFractionDigits: (typeof D.maximumFractionDigits == "number" ? D.maximumFractionDigits : null) || (typeof D.fractionDigits == "number" ? D.fractionDigits : 2)
      };
      return (f * 1).toLocaleString(document.documentElement.lang, E);
    }
    function oe(f) {
      return f && typeof f == "string" ? (f = f.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), f.replace(/[^0-9a-z]/gi, "").toLowerCase()) : "";
    }
    function Ee() {
      r.value = o.data.header.map((f) => ({
        key: f.key,
        label: f.label,
        searchable: f.searchable,
        visible: !0,
        isNumeric: H(f)
      })), p.triggerEvent("sync-table-columns-event", r.value);
    }
    function ie(f, D) {
      d.value[D] = f;
    }
    function Ie(f) {
      n("row-click", f);
    }
    function De() {
      i.value.style.maxHeight = "75vh";
    }
    return p.addEventHandler("update-table-style-event", ce), p.addEventHandler("update-table-columns-event", q), p.addEventHandler("toggle-search-event", ue), Ee(), v.setData(o.data.rows), gn(() => De()), (f, D) => (m(), _("div", {
      ref_key: "tableContainer",
      ref: i,
      class: "table-container"
    }, [
      g("table", null, [
        g("thead", To, [
          g("tr", Io, [
            (m(!0), _(pe, null, ve(b.value, (E) => (m(), _("th", {
              onClick: (k) => P(E.key)
            }, [
              g("div", {
                class: $e(["header-row-item", E.isNumeric ? "numeric" : ""])
              }, [
                g("span", {
                  textContent: Le(E.label)
                }, null, 8, Oo),
                te(Z, {
                  icon: "sort",
                  class: $e(["header-row-item-icon", `${M(a) === E.key ? "selected" : ""}`])
                }, null, 8, ["class"])
              ], 2)
            ], 8, ko))), 256))
          ]),
          U.value ? (m(), _("tr", Ao, [
            (m(!0), _(pe, null, ve(b.value, (E) => (m(), _("th", Mo))), 256))
          ])) : ae("", !0),
          U.value ? (m(), _("tr", No, [
            (m(!0), _(pe, null, ve(b.value, (E, k) => (m(), _("th", null, Le(k === 0 ? "Total" : ye(E)), 1))), 256))
          ])) : ae("", !0),
          M(h) ? (m(), _("tr", $o, [
            (m(!0), _(pe, null, ve(b.value, (E) => (m(), _("th", null, [
              E.searchable ? (m(), _("input", {
                key: 0,
                onInput: (k) => ie(k.target.value, E.key),
                class: "column-search",
                placeholder: "Caută..."
              }, null, 40, Lo)) : ae("", !0)
            ]))), 256))
          ])) : ae("", !0)
        ]),
        g("tbody", Po, [
          (m(!0), _(pe, null, ve(S.value, (E) => (m(), _("tr", {
            onClick: (k) => Ie(E)
          }, [
            (m(!0), _(pe, null, ve(b.value, (k) => (m(), _("td", {
              class: $e(z.value(k.isNumeric, E[k.key]))
            }, Le(k.isNumeric ? G(E[k.key]) : E[k.key]), 3))), 256))
          ], 8, Fo))), 256))
        ])
      ])
    ], 512));
  }
}, jt = {
  __name: "Modal",
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e;
    return document.body.style.overflow = "hidden", pn(() => document.body.style.overflow = "auto"), (o, i) => (m(), _("div", {
      onClick: i[0] || (i[0] = vn((r) => n("close"), ["self"])),
      class: "modal"
    }, [
      bn(o.$slots, "default")
    ]));
  }
}, Vo = { class: "settings-modal" }, Ho = /* @__PURE__ */ g("div", { class: "settings-modal-title" }, "Aspect tabel", -1), Bo = /* @__PURE__ */ g("div", { class: "settings-modal-description" }, " Modifică aspectul tabelului din următoarele setări: ", -1), Ro = { class: "style-settings-options" }, zo = { class: "style-settings-option" }, Xo = /* @__PURE__ */ g("div", { class: "option-title" }, "Dimensiune rânduri", -1), Yo = {
  key: 0,
  class: "option-items"
}, jo = ["onClick"], Zo = { class: "item-value" }, Wo = ["textContent"], Uo = /* @__PURE__ */ g("div", { class: "divider" }, null, -1), Go = { class: "style-settings-option" }, qo = /* @__PURE__ */ g("div", { class: "option-title" }, "Aspect cifre", -1), Ko = {
  key: 0,
  class: "option-items"
}, Qo = ["onClick"], Jo = { class: "item-value" }, ei = ["textContent"], ti = { class: "actions-container" }, ni = {
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
    let i = L(o.rowSizeValue), r = L(o.digitsColorValue);
    const a = {
      small: { icon: "small-row", label: "Mică" },
      medium: { icon: "medium-row", label: "Media" },
      large: { icon: "large-row", label: "Mare" }
    }, l = {
      black: "Cifre negre",
      color: "Cifre pozitive colorate în verde, cele negative in rosu"
    };
    let s = L(!1), c = L(!1);
    function h() {
      n("save", i.value, r.value);
    }
    return (d, p) => (m(), _e(jt, null, {
      default: wt(() => [
        g("div", Vo, [
          Ho,
          Bo,
          g("div", Ro, [
            g("div", zo, [
              g("div", {
                class: "option-container",
                onClick: p[0] || (p[0] = (v) => fe(s) ? s.value = !M(s) : s = !M(s))
              }, [
                Xo,
                M(s) ? (m(), _e(Z, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (m(), _e(Z, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              M(s) ? (m(), _("div", Yo, [
                (m(), _(pe, null, ve(a, (v, b) => g("div", {
                  class: "option-item-container",
                  onClick: (S) => fe(i) ? i.value = b : i = b
                }, [
                  te(Z, {
                    icon: `radio-circle${M(i) === b ? "-selected" : ""}`,
                    class: $e(`icon-size ${M(i) === b ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  g("div", Zo, [
                    te(Z, {
                      icon: v.icon,
                      class: "icon-size"
                    }, null, 8, ["icon"]),
                    g("span", {
                      class: "option-item-title",
                      textContent: Le(v.label)
                    }, null, 8, Wo)
                  ])
                ], 8, jo)), 64))
              ])) : ae("", !0)
            ]),
            Uo,
            g("div", Go, [
              g("div", {
                class: "option-container",
                onClick: p[1] || (p[1] = (v) => fe(c) ? c.value = !M(c) : c = !M(c))
              }, [
                qo,
                M(c) ? (m(), _e(Z, {
                  key: 1,
                  icon: "minus",
                  class: "icon-size"
                })) : (m(), _e(Z, {
                  key: 0,
                  icon: "plus",
                  class: "icon-size"
                }))
              ]),
              M(c) ? (m(), _("div", Ko, [
                (m(), _(pe, null, ve(l, (v, b) => g("div", {
                  class: "option-item-container",
                  onClick: (S) => fe(r) ? r.value = b : r = b
                }, [
                  te(Z, {
                    icon: `radio-circle${M(r) === b ? "-selected" : ""}`,
                    class: $e(`icon-size ${M(r) === b ? "icon-selected" : "icon-unselected"}`)
                  }, null, 8, ["icon", "class"]),
                  g("div", Jo, [
                    g("span", {
                      class: "option-item-title",
                      textContent: Le(v)
                    }, null, 8, ei)
                  ])
                ], 8, Qo)), 64))
              ])) : ae("", !0)
            ])
          ]),
          g("div", ti, [
            g("div", {
              class: "button button-cancel",
              onClick: p[2] || (p[2] = (v) => n("close"))
            }, "Anulează"),
            g("div", {
              class: "button button-confirm",
              onClick: h
            }, "Salvează")
          ])
        ])
      ]),
      _: 1
    }));
  }
}, oi = ["for"], ii = {
  key: 0,
  class: "checkbox-input"
}, ri = {
  key: 1,
  class: "checkbox-selected"
}, ai = ["textContent"], li = ["id", "name", "value"], si = {
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
    const n = e, o = t, i = Me({
      get: () => o.modelValue,
      set: (a) => n("update:modelValue", a)
    }), r = Me(() => o.name && o.name.length ? o.name : o.label);
    return (a, l) => (m(), _("label", {
      for: t.name,
      class: "checkbox-container"
    }, [
      i.value ? (m(), _("div", ri, [
        te(Z, {
          icon: "check",
          class: "checkbox-selected-icon"
        })
      ])) : (m(), _("div", ii)),
      t.label ? (m(), _("span", {
        key: 2,
        class: "label",
        textContent: Le(t.label)
      }, null, 8, ai)) : ae("", !0),
      _n(g("input", {
        hidden: "",
        id: r.value,
        name: t.name,
        type: "checkbox",
        "onUpdate:modelValue": l[0] || (l[0] = (s) => i.value = s),
        value: t.value
      }, null, 8, li), [
        [Cn, i.value]
      ])
    ], 8, oi));
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
function se(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? At(Object(n), !0).forEach(function(o) {
      ci(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Qe(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qe = function(e) {
    return typeof e;
  } : Qe = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qe(t);
}
function ci(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function me() {
  return me = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, me.apply(this, arguments);
}
function ui(t, e) {
  if (t == null)
    return {};
  var n = {}, o = Object.keys(t), i, r;
  for (r = 0; r < o.length; r++)
    i = o[r], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function di(t, e) {
  if (t == null)
    return {};
  var n = ui(t, e), o, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    for (i = 0; i < r.length; i++)
      o = r[i], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
var fi = "1.14.0";
function he(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var ge = he(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ze = he(/Edge/i), Mt = he(/firefox/i), Re = he(/safari/i) && !he(/chrome/i) && !he(/android/i), Zt = he(/iP(ad|od|hone)/i), hi = he(/chrome/i) && he(/android/i), Wt = {
  capture: !1,
  passive: !1
};
function T(t, e, n) {
  t.addEventListener(e, n, !ge && Wt);
}
function x(t, e, n) {
  t.removeEventListener(e, n, !ge && Wt);
}
function ot(t, e) {
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
function mi(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function re(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && ot(t, e) : ot(t, e)) || o && t === n)
        return t;
      if (t === n)
        break;
    } while (t = mi(t));
  }
  return null;
}
var Nt = /\s+/g;
function Y(t, e, n) {
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
function Pe(t, e) {
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
function Ut(t, e, n) {
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
    var r, a, l, s, c, h, d;
    if (t !== window && t.parentNode && t !== le() ? (r = t.getBoundingClientRect(), a = r.top, l = r.left, s = r.bottom, c = r.right, h = r.height, d = r.width) : (a = 0, l = 0, s = window.innerHeight, c = window.innerWidth, h = window.innerHeight, d = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !ge))
      do
        if (i && i.getBoundingClientRect && (C(i, "transform") !== "none" || n && C(i, "position") !== "static")) {
          var p = i.getBoundingClientRect();
          a -= p.top + parseInt(C(i, "border-top-width")), l -= p.left + parseInt(C(i, "border-left-width")), s = a + r.height, c = l + r.width;
          break;
        }
      while (i = i.parentNode);
    if (o && t !== window) {
      var v = Pe(i || t), b = v && v.a, S = v && v.d;
      v && (a /= S, l /= b, d /= b, h /= S, s = a + h, c = l + d);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: c,
      width: d,
      height: h
    };
  }
}
function $t(t, e, n) {
  for (var o = we(t, !0), i = $(t)[e]; o; ) {
    var r = $(o)[n], a = void 0;
    if (n === "top" || n === "left" ? a = i >= r : a = i <= r, !a)
      return o;
    if (o === le())
      break;
    o = we(o, !1);
  }
  return !1;
}
function Fe(t, e, n, o) {
  for (var i = 0, r = 0, a = t.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== w.ghost && (o || a[r] !== w.dragged) && re(a[r], n.draggable, t, !1)) {
      if (i === e)
        return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function Tt(t, e) {
  for (var n = t.lastElementChild; n && (n === w.ghost || C(n, "display") === "none" || e && !ot(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function Q(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== w.clone && (!e || ot(t, e)) && n++;
  return n;
}
function Lt(t) {
  var e = 0, n = 0, o = le();
  if (t)
    do {
      var i = Pe(t), r = i.a, a = i.d;
      e += t.scrollLeft * r, n += t.scrollTop * a;
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function gi(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && e[o] === t[n][o])
          return Number(n);
    }
  return -1;
}
function we(t, e) {
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
function pi(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function ut(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var ze;
function Gt(t, e) {
  return function() {
    if (!ze) {
      var n = arguments, o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n), ze = setTimeout(function() {
        ze = void 0;
      }, e);
    }
  };
}
function vi() {
  clearTimeout(ze), ze = void 0;
}
function qt(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function Kt(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
var W = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function bi() {
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
            var r = se({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = Pe(i, !0);
              a && (r.top -= a.f, r.left -= a.e);
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
      t.splice(gi(t, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof o == "function" && o();
        return;
      }
      var r = !1, a = 0;
      t.forEach(function(l) {
        var s = 0, c = l.target, h = c.fromRect, d = $(c), p = c.prevFromRect, v = c.prevToRect, b = l.rect, S = Pe(c, !0);
        S && (d.top -= S.f, d.left -= S.e), c.toRect = d, c.thisAnimationDuration && ut(p, d) && !ut(h, d) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - d.top) / (b.left - d.left) === (h.top - d.top) / (h.left - d.left) && (s = Ci(b, p, v, i.options)), ut(d, h) || (c.prevFromRect = h, c.prevToRect = d, s || (s = i.options.animation), i.animate(c, b, d, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, s), c.thisAnimationDuration = s);
      }), clearTimeout(e), r ? e = setTimeout(function() {
        typeof o == "function" && o();
      }, a) : typeof o == "function" && o(), t = [];
    },
    animate: function(o, i, r, a) {
      if (a) {
        C(o, "transition", ""), C(o, "transform", "");
        var l = Pe(this.el), s = l && l.a, c = l && l.d, h = (i.left - r.left) / (s || 1), d = (i.top - r.top) / (c || 1);
        o.animatingX = !!h, o.animatingY = !!d, C(o, "transform", "translate3d(" + h + "px," + d + "px,0)"), this.forRepaintDummy = _i(o), C(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), C(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          C(o, "transition", ""), C(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, a);
      }
    }
  };
}
function _i(t) {
  return t.offsetWidth;
}
function Ci(t, e, n, o) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation;
}
var ke = [], dt = {
  initializeByDefault: !0
}, We = {
  mount: function(e) {
    for (var n in dt)
      dt.hasOwnProperty(n) && !(n in e) && (e[n] = dt[n]);
    ke.forEach(function(o) {
      if (o.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), ke.push(e);
  },
  pluginEvent: function(e, n, o) {
    var i = this;
    this.eventCanceled = !1, o.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = e + "Global";
    ke.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][r] && n[a.pluginName][r](se({
        sortable: n
      }, o)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](se({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(e, n, o, i) {
    ke.forEach(function(l) {
      var s = l.pluginName;
      if (!(!e.options[s] && !l.initializeByDefault)) {
        var c = new l(e, n, e.options);
        c.sortable = e, c.options = e.options, e[s] = c, me(o, c.defaults);
      }
    });
    for (var r in e.options)
      if (e.options.hasOwnProperty(r)) {
        var a = this.modifyOption(e, r, e.options[r]);
        typeof a < "u" && (e.options[r] = a);
      }
  },
  getEventProperties: function(e, n) {
    var o = {};
    return ke.forEach(function(i) {
      typeof i.eventProperties == "function" && me(o, i.eventProperties.call(n[i.pluginName], e));
    }), o;
  },
  modifyOption: function(e, n, o) {
    var i;
    return ke.forEach(function(r) {
      e[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (i = r.optionListeners[n].call(e[r.pluginName], o));
    }), i;
  }
};
function wi(t) {
  var e = t.sortable, n = t.rootEl, o = t.name, i = t.targetEl, r = t.cloneEl, a = t.toEl, l = t.fromEl, s = t.oldIndex, c = t.newIndex, h = t.oldDraggableIndex, d = t.newDraggableIndex, p = t.originalEvent, v = t.putSortable, b = t.extraEventProperties;
  if (e = e || n && n[W], !!e) {
    var S, z = e.options, U = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !ge && !Ze ? S = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(o, !0, !0)), S.to = a || n, S.from = l || n, S.item = i || n, S.clone = r, S.oldIndex = s, S.newIndex = c, S.oldDraggableIndex = h, S.newDraggableIndex = d, S.originalEvent = p, S.pullMode = v ? v.lastPutMode : void 0;
    var P = se(se({}, b), We.getEventProperties(o, e));
    for (var X in P)
      S[X] = P[X];
    n && n.dispatchEvent(S), z[U] && z[U].call(e, S);
  }
}
var yi = ["evt"], R = function(e, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = o.evt, r = di(o, yi);
  We.pluginEvent.bind(w)(e, n, se({
    dragEl: u,
    parentEl: O,
    ghostEl: y,
    rootEl: I,
    nextEl: Te,
    lastDownEl: Je,
    cloneEl: A,
    cloneHidden: Ce,
    dragStarted: Ve,
    putSortable: F,
    activeSortable: w.active,
    originalEvent: i,
    oldIndex: Ne,
    oldDraggableIndex: Xe,
    newIndex: j,
    newDraggableIndex: be,
    hideGhostForTarget: tn,
    unhideGhostForTarget: nn,
    cloneNowHidden: function() {
      Ce = !0;
    },
    cloneNowShown: function() {
      Ce = !1;
    },
    dispatchSortableEvent: function(l) {
      B({
        sortable: n,
        name: l,
        originalEvent: i
      });
    }
  }, r));
};
function B(t) {
  wi(se({
    putSortable: F,
    cloneEl: A,
    targetEl: u,
    rootEl: I,
    oldIndex: Ne,
    oldDraggableIndex: Xe,
    newIndex: j,
    newDraggableIndex: be
  }, t));
}
var u, O, y, I, Te, Je, A, Ce, Ne, j, Xe, be, Ue, F, Ae = !1, it = !1, rt = [], Se, ee, ft, ht, Pt, Ft, Ve, Oe, Ye, je = !1, Ge = !1, et, V, mt = [], yt = !1, at = [], st = typeof document < "u", qe = Zt, Vt = Ze || ge ? "cssFloat" : "float", Ei = st && !hi && !Zt && "draggable" in document.createElement("div"), Qt = function() {
  if (st) {
    if (ge)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), Jt = function(e, n) {
  var o = C(e), i = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), r = Fe(e, 0, n), a = Fe(e, 1, n), l = r && C(r), s = a && C(a), c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + $(r).width, h = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + $(a).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || c >= i && o[Vt] === "none" || a && o[Vt] === "none" && c + h > i) ? "vertical" : "horizontal";
}, Di = function(e, n, o) {
  var i = o ? e.left : e.top, r = o ? e.right : e.bottom, a = o ? e.width : e.height, l = o ? n.left : n.top, s = o ? n.right : n.bottom, c = o ? n.width : n.height;
  return i === l || r === s || i + a / 2 === l + c / 2;
}, Si = function(e, n) {
  var o;
  return rt.some(function(i) {
    var r = i[W].options.emptyInsertThreshold;
    if (!(!r || Tt(i))) {
      var a = $(i), l = e >= a.left - r && e <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
      if (l && s)
        return o = i;
    }
  }), o;
}, en = function(e) {
  function n(r, a) {
    return function(l, s, c, h) {
      var d = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (r == null && (a || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(l, s, c, h), a)(l, s, c, h);
      var p = (a ? l : s).options.group.name;
      return r === !0 || typeof r == "string" && r === p || r.join && r.indexOf(p) > -1;
    };
  }
  var o = {}, i = e.group;
  (!i || Qe(i) != "object") && (i = {
    name: i
  }), o.name = i.name, o.checkPull = n(i.pull, !0), o.checkPut = n(i.put), o.revertClone = i.revertClone, e.group = o;
}, tn = function() {
  !Qt && y && C(y, "display", "none");
}, nn = function() {
  !Qt && y && C(y, "display", "");
};
st && document.addEventListener("click", function(t) {
  if (it)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), it = !1, !1;
}, !0);
var xe = function(e) {
  if (u) {
    e = e.touches ? e.touches[0] : e;
    var n = Si(e.clientX, e.clientY);
    if (n) {
      var o = {};
      for (var i in e)
        e.hasOwnProperty(i) && (o[i] = e[i]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[W]._onDragOver(o);
    }
  }
}, xi = function(e) {
  u && u.parentNode[W]._isOutsideThisEl(e.target);
};
function w(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = me({}, e), t[W] = this;
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
      return Jt(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
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
    supportPointer: w.supportPointer !== !1 && "PointerEvent" in window && !Re,
    emptyInsertThreshold: 5
  };
  We.initializePlugins(this, t, n);
  for (var o in n)
    !(o in e) && (e[o] = n[o]);
  en(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : Ei, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? T(t, "pointerdown", this._onTapStart) : (T(t, "mousedown", this._onTapStart), T(t, "touchstart", this._onTapStart)), this.nativeDraggable && (T(t, "dragover", this), T(t, "dragenter", this)), rt.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), me(this, bi());
}
w.prototype = /** @lends Sortable.prototype */
{
  constructor: w,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Oe = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, u) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, o = this.el, i = this.options, r = i.preventOnFilter, a = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (l || e).target, c = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, h = i.filter;
      if ($i(o), !u && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !c.isContentEditable && !(!this.nativeDraggable && Re && s && s.tagName.toUpperCase() === "SELECT") && (s = re(s, i.draggable, o, !1), !(s && s.animated) && Je !== s)) {
        if (Ne = Q(s), Xe = Q(s, i.draggable), typeof h == "function") {
          if (h.call(this, e, s, this)) {
            B({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), R("filter", n, {
              evt: e
            }), r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (h && (h = h.split(",").some(function(d) {
          if (d = re(c, d.trim(), o, !1), d)
            return B({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), R("filter", n, {
              evt: e
            }), !0;
        }), h)) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !re(c, i.handle, o, !1) || this._prepareDragStart(e, l, s);
      }
    }
  },
  _prepareDragStart: function(e, n, o) {
    var i = this, r = i.el, a = i.options, l = r.ownerDocument, s;
    if (o && !u && o.parentNode === r) {
      var c = $(o);
      if (I = r, u = o, O = u.parentNode, Te = u.nextSibling, Je = o, Ue = a.group, w.dragged = u, Se = {
        target: u,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Pt = Se.clientX - c.left, Ft = Se.clientY - c.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, u.style["will-change"] = "all", s = function() {
        if (R("delayEnded", i, {
          evt: e
        }), w.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Mt && i.nativeDraggable && (u.draggable = !0), i._triggerDragStart(e, n), B({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), Y(u, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(h) {
        Ut(u, h.trim(), gt);
      }), T(l, "dragover", xe), T(l, "mousemove", xe), T(l, "touchmove", xe), T(l, "mouseup", i._onDrop), T(l, "touchend", i._onDrop), T(l, "touchcancel", i._onDrop), Mt && this.nativeDraggable && (this.options.touchStartThreshold = 4, u.draggable = !0), R("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Ze || ge))) {
        if (w.eventCanceled) {
          this._onDrop();
          return;
        }
        T(l, "mouseup", i._disableDelayedDrag), T(l, "touchend", i._disableDelayedDrag), T(l, "touchcancel", i._disableDelayedDrag), T(l, "mousemove", i._delayedDragTouchMoveHandler), T(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && T(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    u && gt(u), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    x(e, "mouseup", this._disableDelayedDrag), x(e, "touchend", this._disableDelayedDrag), x(e, "touchcancel", this._disableDelayedDrag), x(e, "mousemove", this._delayedDragTouchMoveHandler), x(e, "touchmove", this._delayedDragTouchMoveHandler), x(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? T(document, "pointermove", this._onTouchMove) : n ? T(document, "touchmove", this._onTouchMove) : T(document, "mousemove", this._onTouchMove) : (T(u, "dragend", this), T(I, "dragstart", this._onDragStart));
    try {
      document.selection ? tt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (Ae = !1, I && u) {
      R("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && T(document, "dragover", xi);
      var o = this.options;
      !e && Y(u, o.dragClass, !1), Y(u, o.ghostClass, !0), w.active = this, e && this._appendGhost(), B({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ee) {
      this._lastX = ee.clientX, this._lastY = ee.clientY, tn();
      for (var e = document.elementFromPoint(ee.clientX, ee.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(ee.clientX, ee.clientY), e !== n); )
        n = e;
      if (u.parentNode[W]._isOutsideThisEl(e), n)
        do {
          if (n[W]) {
            var o = void 0;
            if (o = n[W]._onDragOver({
              clientX: ee.clientX,
              clientY: ee.clientY,
              target: e,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      nn();
    }
  },
  _onTouchMove: function(e) {
    if (Se) {
      var n = this.options, o = n.fallbackTolerance, i = n.fallbackOffset, r = e.touches ? e.touches[0] : e, a = y && Pe(y, !0), l = y && a && a.a, s = y && a && a.d, c = qe && V && Lt(V), h = (r.clientX - Se.clientX + i.x) / (l || 1) + (c ? c[0] - mt[0] : 0) / (l || 1), d = (r.clientY - Se.clientY + i.y) / (s || 1) + (c ? c[1] - mt[1] : 0) / (s || 1);
      if (!w.active && !Ae) {
        if (o && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < o)
          return;
        this._onDragStart(e, !0);
      }
      if (y) {
        a ? (a.e += h - (ft || 0), a.f += d - (ht || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: h,
          f: d
        };
        var p = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        C(y, "webkitTransform", p), C(y, "mozTransform", p), C(y, "msTransform", p), C(y, "transform", p), ft = h, ht = d, ee = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!y) {
      var e = this.options.fallbackOnBody ? document.body : I, n = $(u, !0, qe, !0, e), o = this.options;
      if (qe) {
        for (V = e; C(V, "position") === "static" && C(V, "transform") === "none" && V !== document; )
          V = V.parentNode;
        V !== document.body && V !== document.documentElement ? (V === document && (V = le()), n.top += V.scrollTop, n.left += V.scrollLeft) : V = le(), mt = Lt(V);
      }
      y = u.cloneNode(!0), Y(y, o.ghostClass, !1), Y(y, o.fallbackClass, !0), Y(y, o.dragClass, !0), C(y, "transition", ""), C(y, "transform", ""), C(y, "box-sizing", "border-box"), C(y, "margin", 0), C(y, "top", n.top), C(y, "left", n.left), C(y, "width", n.width), C(y, "height", n.height), C(y, "opacity", "0.8"), C(y, "position", qe ? "absolute" : "fixed"), C(y, "zIndex", "100000"), C(y, "pointerEvents", "none"), w.ghost = y, e.appendChild(y), C(y, "transform-origin", Pt / parseInt(y.style.width) * 100 + "% " + Ft / parseInt(y.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var o = this, i = e.dataTransfer, r = o.options;
    if (R("dragStart", this, {
      evt: e
    }), w.eventCanceled) {
      this._onDrop();
      return;
    }
    R("setupClone", this), w.eventCanceled || (A = Kt(u), A.draggable = !1, A.style["will-change"] = "", this._hideClone(), Y(A, this.options.chosenClass, !1), w.clone = A), o.cloneId = tt(function() {
      R("clone", o), !w.eventCanceled && (o.options.removeCloneOnHide || I.insertBefore(A, u), o._hideClone(), B({
        sortable: o,
        name: "clone"
      }));
    }), !n && Y(u, r.dragClass, !0), n ? (it = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (x(document, "mouseup", o._onDrop), x(document, "touchend", o._onDrop), x(document, "touchcancel", o._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(o, i, u)), T(document, "drop", o), C(u, "transform", "translateZ(0)")), Ae = !0, o._dragStartId = tt(o._dragStarted.bind(o, n, e)), T(document, "selectstart", o), Ve = !0, Re && C(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, o = e.target, i, r, a, l = this.options, s = l.group, c = w.active, h = Ue === s, d = l.sort, p = F || c, v, b = this, S = !1;
    if (yt)
      return;
    function z(De, f) {
      R(De, b, se({
        evt: e,
        isOwner: h,
        axis: v ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: r,
        canSort: d,
        fromSortable: p,
        target: o,
        completed: P,
        onMove: function(E, k) {
          return Ke(I, n, u, i, E, $(E), e, k);
        },
        changed: X
      }, f));
    }
    function U() {
      z("dragOverAnimationCapture"), b.captureAnimationState(), b !== p && p.captureAnimationState();
    }
    function P(De) {
      return z("dragOverCompleted", {
        insertion: De
      }), De && (h ? c._hideClone() : c._showClone(b), b !== p && (Y(u, F ? F.options.ghostClass : c.options.ghostClass, !1), Y(u, l.ghostClass, !0)), F !== b && b !== w.active ? F = b : b === w.active && F && (F = null), p === b && (b._ignoreWhileAnimating = o), b.animateAll(function() {
        z("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== p && (p.animateAll(), p._ignoreWhileAnimating = null)), (o === u && !u.animated || o === n && !o.animated) && (Oe = null), !l.dragoverBubble && !e.rootEl && o !== document && (u.parentNode[W]._isOutsideThisEl(e.target), !De && xe(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), S = !0;
    }
    function X() {
      j = Q(u), be = Q(u, l.draggable), B({
        sortable: b,
        name: "change",
        toEl: n,
        newIndex: j,
        newDraggableIndex: be,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), o = re(o, l.draggable, n, !0), z("dragOver"), w.eventCanceled)
      return S;
    if (u.contains(e.target) || o.animated && o.animatingX && o.animatingY || b._ignoreWhileAnimating === o)
      return P(!1);
    if (it = !1, c && !l.disabled && (h ? d || (a = O !== I) : F === this || (this.lastPutMode = Ue.checkPull(this, c, u, e)) && s.checkPut(this, c, u, e))) {
      if (v = this._getDirection(e, o) === "vertical", i = $(u), z("dragOverValid"), w.eventCanceled)
        return S;
      if (a)
        return O = I, U(), this._hideClone(), z("revert"), w.eventCanceled || (Te ? I.insertBefore(u, Te) : I.appendChild(u)), P(!0);
      var G = Tt(n, l.draggable);
      if (!G || Oi(e, v, this) && !G.animated) {
        if (G === u)
          return P(!1);
        if (G && n === e.target && (o = G), o && (r = $(o)), Ke(I, n, u, i, o, r, e, !!o) !== !1)
          return U(), n.appendChild(u), O = n, X(), P(!0);
      } else if (G && ki(e, v, this)) {
        var ce = Fe(n, 0, l, !0);
        if (ce === u)
          return P(!1);
        if (o = ce, r = $(o), Ke(I, n, u, i, o, r, e, !1) !== !1)
          return U(), n.insertBefore(u, ce), O = n, X(), P(!0);
      } else if (o.parentNode === n) {
        r = $(o);
        var q = 0, ue, ye = u.parentNode !== n, H = !Di(u.animated && u.toRect || i, o.animated && o.toRect || r, v), ne = v ? "top" : "left", J = $t(o, "top", "top") || $t(u, "top", "top"), de = J ? J.scrollTop : void 0;
        Oe !== o && (ue = r[ne], je = !1, Ge = !H && l.invertSwap || ye), q = Ai(e, o, r, v, H ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Ge, Oe === o);
        var K;
        if (q !== 0) {
          var oe = Q(u);
          do
            oe -= q, K = O.children[oe];
          while (K && (C(K, "display") === "none" || K === y));
        }
        if (q === 0 || K === o)
          return P(!1);
        Oe = o, Ye = q;
        var Ee = o.nextElementSibling, ie = !1;
        ie = q === 1;
        var Ie = Ke(I, n, u, i, o, r, e, ie);
        if (Ie !== !1)
          return (Ie === 1 || Ie === -1) && (ie = Ie === 1), yt = !0, setTimeout(Ii, 30), U(), ie && !Ee ? n.appendChild(u) : o.parentNode.insertBefore(u, ie ? Ee : o), J && qt(J, 0, de - J.scrollTop), O = u.parentNode, ue !== void 0 && !Ge && (et = Math.abs(ue - $(o)[ne])), X(), P(!0);
      }
      if (n.contains(u))
        return P(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    x(document, "mousemove", this._onTouchMove), x(document, "touchmove", this._onTouchMove), x(document, "pointermove", this._onTouchMove), x(document, "dragover", xe), x(document, "mousemove", xe), x(document, "touchmove", xe);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    x(e, "mouseup", this._onDrop), x(e, "touchend", this._onDrop), x(e, "pointerup", this._onDrop), x(e, "touchcancel", this._onDrop), x(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, o = this.options;
    if (j = Q(u), be = Q(u, o.draggable), R("drop", this, {
      evt: e
    }), O = u && u.parentNode, j = Q(u), be = Q(u, o.draggable), w.eventCanceled) {
      this._nulling();
      return;
    }
    Ae = !1, Ge = !1, je = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Et(this.cloneId), Et(this._dragStartId), this.nativeDraggable && (x(document, "drop", this), x(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Re && C(document.body, "user-select", ""), C(u, "transform", ""), e && (Ve && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()), y && y.parentNode && y.parentNode.removeChild(y), (I === O || F && F.lastPutMode !== "clone") && A && A.parentNode && A.parentNode.removeChild(A), u && (this.nativeDraggable && x(u, "dragend", this), gt(u), u.style["will-change"] = "", Ve && !Ae && Y(u, F ? F.options.ghostClass : this.options.ghostClass, !1), Y(u, this.options.chosenClass, !1), B({
      sortable: this,
      name: "unchoose",
      toEl: O,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), I !== O ? (j >= 0 && (B({
      rootEl: O,
      name: "add",
      toEl: O,
      fromEl: I,
      originalEvent: e
    }), B({
      sortable: this,
      name: "remove",
      toEl: O,
      originalEvent: e
    }), B({
      rootEl: O,
      name: "sort",
      toEl: O,
      fromEl: I,
      originalEvent: e
    }), B({
      sortable: this,
      name: "sort",
      toEl: O,
      originalEvent: e
    })), F && F.save()) : j !== Ne && j >= 0 && (B({
      sortable: this,
      name: "update",
      toEl: O,
      originalEvent: e
    }), B({
      sortable: this,
      name: "sort",
      toEl: O,
      originalEvent: e
    })), w.active && ((j == null || j === -1) && (j = Ne, be = Xe), B({
      sortable: this,
      name: "end",
      toEl: O,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    R("nulling", this), I = u = O = y = Te = A = Je = Ce = Se = ee = Ve = j = be = Ne = Xe = Oe = Ye = F = Ue = w.dragged = w.ghost = w.clone = w.active = null, at.forEach(function(e) {
      e.checked = !0;
    }), at.length = ft = ht = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        u && (this._onDragOver(e), Ti(e));
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
    for (var e = [], n, o = this.el.children, i = 0, r = o.length, a = this.options; i < r; i++)
      n = o[i], re(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || Ni(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var o = {}, i = this.el;
    this.toArray().forEach(function(r, a) {
      var l = i.children[a];
      re(l, this.options.draggable, i, !1) && (o[r] = l);
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
    return re(e, n || this.options.draggable, this.el, !1);
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
    var i = We.modifyOption(this, e, n);
    typeof i < "u" ? o[e] = i : o[e] = n, e === "group" && en(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    R("destroy", this);
    var e = this.el;
    e[W] = null, x(e, "mousedown", this._onTapStart), x(e, "touchstart", this._onTapStart), x(e, "pointerdown", this._onTapStart), this.nativeDraggable && (x(e, "dragover", this), x(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), rt.splice(rt.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!Ce) {
      if (R("hideClone", this), w.eventCanceled)
        return;
      C(A, "display", "none"), this.options.removeCloneOnHide && A.parentNode && A.parentNode.removeChild(A), Ce = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ce) {
      if (R("showClone", this), w.eventCanceled)
        return;
      u.parentNode == I && !this.options.group.revertClone ? I.insertBefore(A, u) : Te ? I.insertBefore(A, Te) : I.appendChild(A), this.options.group.revertClone && this.animate(u, A), C(A, "display", ""), Ce = !1;
    }
  }
};
function Ti(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Ke(t, e, n, o, i, r, a, l) {
  var s, c = t[W], h = c.options.onMove, d;
  return window.CustomEvent && !ge && !Ze ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || $(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), h && (d = h.call(c, s, a)), d;
}
function gt(t) {
  t.draggable = !1;
}
function Ii() {
  yt = !1;
}
function ki(t, e, n) {
  var o = $(Fe(n.el, 0, n.options, !0)), i = 10;
  return e ? t.clientX < o.left - i || t.clientY < o.top && t.clientX < o.right : t.clientY < o.top - i || t.clientY < o.bottom && t.clientX < o.left;
}
function Oi(t, e, n) {
  var o = $(Tt(n.el, n.options.draggable)), i = 10;
  return e ? t.clientX > o.right + i || t.clientX <= o.right && t.clientY > o.bottom && t.clientX >= o.left : t.clientX > o.right && t.clientY > o.top || t.clientX <= o.right && t.clientY > o.bottom + i;
}
function Ai(t, e, n, o, i, r, a, l) {
  var s = o ? t.clientY : t.clientX, c = o ? n.height : n.width, h = o ? n.top : n.left, d = o ? n.bottom : n.right, p = !1;
  if (!a) {
    if (l && et < c * i) {
      if (!je && (Ye === 1 ? s > h + c * r / 2 : s < d - c * r / 2) && (je = !0), je)
        p = !0;
      else if (Ye === 1 ? s < h + et : s > d - et)
        return -Ye;
    } else if (s > h + c * (1 - i) / 2 && s < d - c * (1 - i) / 2)
      return Mi(e);
  }
  return p = p || a, p && (s < h + c * r / 2 || s > d - c * r / 2) ? s > h + c / 2 ? 1 : -1 : 0;
}
function Mi(t) {
  return Q(u) < Q(t) ? 1 : -1;
}
function Ni(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--; )
    o += e.charCodeAt(n);
  return o.toString(36);
}
function $i(t) {
  at.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && at.push(o);
  }
}
function tt(t) {
  return setTimeout(t, 0);
}
function Et(t) {
  return clearTimeout(t);
}
st && T(document, "touchmove", function(t) {
  (w.active || Ae) && t.cancelable && t.preventDefault();
});
w.utils = {
  on: T,
  off: x,
  css: C,
  find: Ut,
  is: function(e, n) {
    return !!re(e, n, e, !1);
  },
  extend: pi,
  throttle: Gt,
  closest: re,
  toggleClass: Y,
  clone: Kt,
  index: Q,
  nextTick: tt,
  cancelNextTick: Et,
  detectDirection: Jt,
  getChild: Fe
};
w.get = function(t) {
  return t[W];
};
w.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (w.utils = se(se({}, w.utils), o.utils)), We.mount(o);
  });
};
w.create = function(t, e) {
  return new w(t, e);
};
w.version = fi;
var N = [], He, Dt, St = !1, pt, vt, lt, Be;
function Li() {
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
      this.sortable.nativeDraggable ? T(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? T(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? T(document, "touchmove", this._handleFallbackAutoScroll) : T(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? x(document, "dragover", this._handleAutoScroll) : (x(document, "pointermove", this._handleFallbackAutoScroll), x(document, "touchmove", this._handleFallbackAutoScroll), x(document, "mousemove", this._handleFallbackAutoScroll)), Ht(), nt(), vi();
    },
    nulling: function() {
      lt = Dt = He = St = Be = pt = vt = null, N.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var i = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(r, a);
      if (lt = n, o || this.options.forceAutoScrollFallback || Ze || ge || Re) {
        bt(n, this.options, l, o);
        var s = we(l, !0);
        St && (!Be || r !== pt || a !== vt) && (Be && Ht(), Be = setInterval(function() {
          var c = we(document.elementFromPoint(r, a), !0);
          c !== s && (s = c, nt()), bt(n, i.options, c, o);
        }, 10), pt = r, vt = a);
      } else {
        if (!this.options.bubbleScroll || we(l, !0) === le()) {
          nt();
          return;
        }
        bt(n, this.options, we(l, !1), !1);
      }
    }
  }, me(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function nt() {
  N.forEach(function(t) {
    clearInterval(t.pid);
  }), N = [];
}
function Ht() {
  clearInterval(Be);
}
var bt = Gt(function(t, e, n, o) {
  if (e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, r = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, l = e.scrollSpeed, s = le(), c = !1, h;
    Dt !== n && (Dt = n, nt(), He = e.scroll, h = e.scrollFn, He === !0 && (He = we(n, !0)));
    var d = 0, p = He;
    do {
      var v = p, b = $(v), S = b.top, z = b.bottom, U = b.left, P = b.right, X = b.width, G = b.height, ce = void 0, q = void 0, ue = v.scrollWidth, ye = v.scrollHeight, H = C(v), ne = v.scrollLeft, J = v.scrollTop;
      v === s ? (ce = X < ue && (H.overflowX === "auto" || H.overflowX === "scroll" || H.overflowX === "visible"), q = G < ye && (H.overflowY === "auto" || H.overflowY === "scroll" || H.overflowY === "visible")) : (ce = X < ue && (H.overflowX === "auto" || H.overflowX === "scroll"), q = G < ye && (H.overflowY === "auto" || H.overflowY === "scroll"));
      var de = ce && (Math.abs(P - i) <= a && ne + X < ue) - (Math.abs(U - i) <= a && !!ne), K = q && (Math.abs(z - r) <= a && J + G < ye) - (Math.abs(S - r) <= a && !!J);
      if (!N[d])
        for (var oe = 0; oe <= d; oe++)
          N[oe] || (N[oe] = {});
      (N[d].vx != de || N[d].vy != K || N[d].el !== v) && (N[d].el = v, N[d].vx = de, N[d].vy = K, clearInterval(N[d].pid), (de != 0 || K != 0) && (c = !0, N[d].pid = setInterval((function() {
        o && this.layer === 0 && w.active._onTouchMove(lt);
        var Ee = N[this.layer].vy ? N[this.layer].vy * l : 0, ie = N[this.layer].vx ? N[this.layer].vx * l : 0;
        typeof h == "function" && h.call(w.dragged.parentNode[W], ie, Ee, t, lt, N[this.layer].el) !== "continue" || qt(N[this.layer].el, ie, Ee);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && p !== s && (p = we(p, !1)));
    St = c;
  }
}, 30), on = function(e) {
  var n = e.originalEvent, o = e.putSortable, i = e.dragEl, r = e.activeSortable, a = e.dispatchSortableEvent, l = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (n) {
    var c = o || r;
    l();
    var h = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(h.clientX, h.clientY);
    s(), c && !c.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: o
    }));
  }
};
function It() {
}
It.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var i = Fe(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: on
};
me(It, {
  pluginName: "revertOnSpill"
});
function kt() {
}
kt.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable, i = o || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: on
};
me(kt, {
  pluginName: "removeOnSpill"
});
w.mount(new Li());
w.mount(kt, It);
function _t(t) {
  t.parentElement !== null && t.parentElement.removeChild(t);
}
function Bt(t, e, n) {
  const o = n === 0 ? t.children[0] : t.children[n - 1].nextSibling;
  t.insertBefore(e, o);
}
function Pi() {
  return typeof window < "u" ? window.console : global.console;
}
const Fi = Pi();
function Vi(t) {
  const e = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return e[o] || (e[o] = t(o));
  };
}
const Hi = /-(\w)/g, Bi = Vi((t) => t.replace(Hi, (e, n) => n.toUpperCase())), rn = ["Start", "Add", "Remove", "Update", "End"], an = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], ln = ["Move"], Ri = [ln, rn, an].flatMap((t) => t).map((t) => `on${t}`), xt = {
  manage: ln,
  manageAndEmit: rn,
  emit: an
};
function zi(t) {
  return Ri.indexOf(t) !== -1;
}
const Xi = [
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
function Yi(t) {
  return Xi.includes(t);
}
function ji(t) {
  return ["transition-group", "TransitionGroup"].includes(t);
}
function sn(t) {
  return ["id", "class", "role", "style"].includes(t) || t.startsWith("data-") || t.startsWith("aria-") || t.startsWith("on");
}
function cn(t) {
  return t.reduce((e, [n, o]) => (e[n] = o, e), {});
}
function Zi({ $attrs: t, componentData: e = {} }) {
  return {
    ...cn(
      Object.entries(t).filter(([o, i]) => sn(o))
    ),
    ...e
  };
}
function Wi({ $attrs: t, callBackBuilder: e }) {
  const n = cn(un(t));
  Object.entries(e).forEach(([i, r]) => {
    xt[i].forEach((a) => {
      n[`on${a}`] = r(a);
    });
  });
  const o = `[data-draggable]${n.draggable || ""}`;
  return {
    ...n,
    draggable: o
  };
}
function un(t) {
  return Object.entries(t).filter(([e, n]) => !sn(e)).map(([e, n]) => [Bi(e), n]).filter(([e, n]) => !zi(e));
}
const Rt = ({ el: t }) => t, Ui = (t, e) => t.__draggable_context = e, zt = (t) => t.__draggable_context;
class Gi {
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
      Ui(Rt(o), {
        element: n[i],
        index: i
      });
    });
  }
  getUnderlyingVm(e) {
    return zt(e);
  }
  getVmIndexFromDomIndex(e, n) {
    const { defaultNodes: o } = this, { length: i } = o, r = n.children, a = r.item(e);
    if (a === null)
      return i;
    const l = zt(a);
    if (l)
      return l.index;
    if (i === 0)
      return 0;
    const s = Rt(o[0]), c = [...r].findIndex(
      (h) => h === s
    );
    return e < c ? 0 : i;
  }
}
function qi(t, e) {
  const n = t[e];
  return n ? n() : [];
}
function Ki({ $slots: t, realList: e, getKey: n }) {
  const o = e || [], [i, r] = ["header", "footer"].map(
    (s) => qi(t, s)
  ), { item: a } = t;
  if (!a)
    throw new Error("draggable element must have an item slot");
  const l = o.flatMap(
    (s, c) => a({ element: s, index: c }).map((h) => (h.key = n(s), h.props = { ...h.props || {}, "data-draggable": !0 }, h))
  );
  if (l.length !== o.length)
    throw new Error("Item slot must have only one child");
  return {
    header: i,
    footer: r,
    default: l
  };
}
function Qi(t) {
  const e = ji(t), n = !Yi(t) && !e;
  return {
    transition: e,
    externalComponent: n,
    tag: n ? wn(t) : e ? yn : t
  };
}
function Ji({ $slots: t, tag: e, realList: n, getKey: o }) {
  const i = Ki({ $slots: t, realList: n, getKey: o }), r = Qi(e);
  return new Gi({ nodes: i, root: r, realList: n });
}
function dn(t, e) {
  Xt(() => this.$emit(t.toLowerCase(), e));
}
function fn(t) {
  return (e, n) => {
    if (this.realList !== null)
      return this[`onDrag${t}`](e, n);
  };
}
function er(t) {
  const e = fn.call(this, t);
  return (n, o) => {
    e.call(this, n, o), dn.call(this, t, n);
  };
}
let Ct = null;
const tr = {
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
}, nr = [
  "update:modelValue",
  "change",
  ...[...xt.manageAndEmit, ...xt.emit].map((t) => t.toLowerCase())
], or = En({
  name: "draggable",
  inheritAttrs: !1,
  props: tr,
  emits: nr,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: t, $attrs: e, tag: n, componentData: o, realList: i, getKey: r } = this, a = Ji({
        $slots: t,
        tag: n,
        realList: i,
        getKey: r
      });
      this.componentStructure = a;
      const l = Zi({ $attrs: e, componentData: o });
      return a.render(Ot, l);
    } catch (t) {
      return this.error = !0, Ot("pre", { style: { color: "red" } }, t.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && Fi.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: t, $el: e, componentStructure: n } = this;
    n.updated();
    const o = Wi({
      $attrs: t,
      callBackBuilder: {
        manageAndEmit: (r) => er.call(this, r),
        emit: (r) => dn.bind(this, r),
        manage: (r) => fn.call(this, r)
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
        e && un(t).forEach(([n, o]) => {
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
      Xt(() => this.$emit("change", t));
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
      this.context = this.getUnderlyingVm(t.item), t.item._underlying_vm_ = this.clone(this.context.element), Ct = t.item;
    },
    onDragAdd(t) {
      const e = t.item._underlying_vm_;
      if (e === void 0)
        return;
      _t(t.item);
      const n = this.getVmIndexFromDomIndex(t.newIndex);
      this.spliceList(n, 0, e);
      const o = { element: e, newIndex: n };
      this.emitChanges({ added: o });
    },
    onDragRemove(t) {
      if (Bt(this.$el, t.item, t.oldIndex), t.pullMode === "clone") {
        _t(t.clone);
        return;
      }
      const { index: e, element: n } = this.context;
      this.spliceList(e, 1);
      const o = { element: n, oldIndex: e };
      this.emitChanges({ removed: o });
    },
    onDragUpdate(t) {
      _t(t.item), Bt(t.from, t.item, t.oldIndex);
      const e = this.context.index, n = this.getVmIndexFromDomIndex(t.newIndex);
      this.updatePosition(e, n);
      const o = { element: this.context.element, oldIndex: e, newIndex: n };
      this.emitChanges({ moved: o });
    },
    computeFutureIndex(t, e) {
      if (!t.element)
        return 0;
      const n = [...e.to.children].filter(
        (a) => a.style.display !== "none"
      ), o = n.indexOf(e.related), i = t.component.getVmIndexFromDomIndex(
        o
      );
      return n.indexOf(Ct) !== -1 || !e.willInsertAfter ? i : i + 1;
    },
    onDragMove(t, e) {
      const { move: n, realList: o } = this;
      if (!n || !o)
        return !0;
      const i = this.getRelatedContextFromMoveEvent(t), r = this.computeFutureIndex(i, t), a = {
        ...this.context,
        futureIndex: r
      }, l = {
        ...t,
        relatedContext: i,
        draggedContext: a
      };
      return n(l, e);
    },
    onDragEnd() {
      Ct = null;
    }
  }
}), ir = { class: "settings-modal" }, rr = /* @__PURE__ */ g("div", { class: "settings-modal-title" }, "Ordine coloane", -1), ar = /* @__PURE__ */ g("div", { class: "settings-modal-description" }, " Modifică ordinea și vizibilitatea coloanelor din următoarele setări: ", -1), lr = { class: "column-settings-list" }, sr = { class: "list-item" }, cr = { class: "actions-container" }, ur = {
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
    let i = L([]);
    function r() {
      n("save", i.value);
    }
    return o.columns.forEach((a) => i.value.push({ ...a })), (a, l) => (m(), _e(jt, null, {
      default: wt(() => [
        g("div", ir, [
          rr,
          ar,
          g("div", lr, [
            te(M(or), {
              modelValue: M(i),
              "onUpdate:modelValue": l[0] || (l[0] = (s) => fe(i) ? i.value = s : i = s),
              "item-key": "key",
              animation: 300
            }, {
              item: wt(({ element: s }) => [
                g("div", sr, [
                  te(si, {
                    label: s.label,
                    "model-value": s.visible,
                    "onUpdate:modelValue": (c) => s.visible = c
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"]),
                  te(Z, {
                    icon: "drag-indicator",
                    class: "drag-indicator-icon"
                  })
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          g("div", cr, [
            g("div", {
              class: "button button-cancel",
              onClick: l[1] || (l[1] = (s) => n("close"))
            }, "Anulează"),
            g("div", {
              class: "button button-confirm",
              onClick: r
            }, "Salvează")
          ])
        ])
      ]),
      _: 1
    }));
  }
}, dr = { class: "table-controls" }, fr = /* @__PURE__ */ g("div", { class: "divider" }, null, -1), hr = { class: "settings-container" }, vr = {
  __name: "TableControls",
  setup(t) {
    let e = L("small"), n = L("black"), o = L(!1), i = L(!1), r = [], a = L(!1), l = Yt();
    function s() {
      a.value = !a.value, l.triggerEvent("toggle-search-event");
    }
    function c(p, v) {
      e.value = p, n.value = v, l.triggerEvent("update-table-style-event", { newRowSize: p, newDigitsColor: v }), o.value = !1;
    }
    function h(p) {
      r = p, l.triggerEvent("update-table-columns-event", p), i.value = !1;
    }
    function d(p) {
      r = p;
    }
    return l.addEventHandler("sync-table-columns-event", d), (p, v) => (m(), _("div", null, [
      g("div", dr, [
        g("div", {
          onClick: s,
          class: $e(["search-button", M(a) ? "active" : "inactive"])
        }, [
          te(Z, {
            icon: "search",
            class: "search-icon"
          })
        ], 2),
        fr,
        g("div", hr, [
          g("div", {
            onClick: v[0] || (v[0] = (b) => fe(i) ? i.value = !0 : i = !0),
            class: "setting"
          }, [
            te(Z, {
              icon: "columns",
              class: "setting-icon"
            })
          ]),
          g("div", {
            onClick: v[1] || (v[1] = (b) => fe(o) ? o.value = !0 : o = !0),
            class: "setting"
          }, [
            te(Z, {
              icon: "settings",
              class: "setting-icon"
            })
          ])
        ])
      ]),
      M(o) ? (m(), _e(ni, {
        key: 0,
        "row-size-value": M(e),
        "digits-color-value": M(n),
        onSave: c,
        onClose: v[2] || (v[2] = (b) => fe(o) ? o.value = !1 : o = !1)
      }, null, 8, ["row-size-value", "digits-color-value"])) : ae("", !0),
      M(i) ? (m(), _e(ur, {
        key: 1,
        columns: M(r),
        onClose: v[3] || (v[3] = (b) => fe(i) ? i.value = !1 : i = !1),
        onSave: h
      }, null, 8, ["columns"])) : ae("", !0)
    ]));
  }
};
function mr(t) {
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
window.__tableEventBus = mr();
export {
  vr as TableControls,
  pr as TableData
};

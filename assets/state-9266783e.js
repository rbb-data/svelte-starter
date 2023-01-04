var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { c as clientSupportPlugins } from "./__resolved__virtual__histoire-support-plugins-client-5e433a7f.js";
import { d as defineComponent, r as ref, bd as watchEffect, o as openBlock, q as createBlock, be as mergeProps, bf as resolveDynamicComponent, h as createCommentVNode, bc as markRaw, E as reactive, v as isRef, a as unref } from "./vendor-4822719a.js";
import { h as histoireConfig } from "./config-58fadf80.js";
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __name: "GenericRenderStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.RenderStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-render-story __histoire-render-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
}));
const receivedSettings = reactive({});
function applyPreviewSettings(settings) {
  Object.assign(receivedSettings, settings);
  document.documentElement.setAttribute("dir", settings.textDirection);
  const contrastColor = getContrastColor(settings);
  document.documentElement.style.setProperty("--histoire-contrast-color", contrastColor);
  if (histoireConfig.autoApplyContrastColor) {
    document.documentElement.style.color = contrastColor;
  }
}
function getContrastColor(setting) {
  var _a2;
  var _a;
  return (_a2 = (_a = histoireConfig.backgroundPresets.find((preset) => preset.color === setting.backgroundColor)) == null ? void 0 : _a.contrastColor) != null ? _a2 : "unset";
}
const isObject = (val) => val !== null && typeof val === "object";
function toRawDeep(val, clean = false, seen = /* @__PURE__ */ new WeakMap()) {
  const unwrappedValue = isRef(val) ? unref(val) : val;
  if (typeof unwrappedValue === "symbol") {
    return unwrappedValue.toString();
  }
  if (!isObject(unwrappedValue)) {
    return unwrappedValue;
  }
  if (seen.has(unwrappedValue)) {
    return seen.get(unwrappedValue);
  }
  if (Array.isArray(unwrappedValue)) {
    const result = [];
    seen.set(unwrappedValue, result);
    let list = unwrappedValue.map((value) => toRawDeep(value, clean, seen));
    if (clean) {
      list = list.filter((value) => typeof value !== "function");
    }
    result.push(...list);
    return result;
  } else {
    const result = {};
    seen.set(unwrappedValue, result);
    toRawObject(unwrappedValue, result, clean, seen);
    return result;
  }
}
const toRawObject = (obj, target, clean = false, seen = /* @__PURE__ */ new WeakMap()) => {
  Object.keys(obj).forEach((key) => {
    if (clean && typeof obj[key] === "function") {
      return;
    }
    target[key] = toRawDeep(obj[key], clean, seen);
  });
};
export {
  _sfc_main as _,
  applyPreviewSettings as a,
  getContrastColor as g,
  toRawDeep as t
};

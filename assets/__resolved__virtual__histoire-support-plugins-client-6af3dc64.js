import { bl as useDark, bm as useToggle, k as watch, _ as __vitePreload } from "./vendor-ec531b55.js";
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref) => {
    ref.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-ec531b55.js").then((n) => n.bT), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor-ec531b55.js").then((n) => n.bU), true ? [] : void 0)
};
export {
  clientSupportPlugins as c,
  isDark as i,
  toggleDark as t
};

import { b2 as useDark, b3 as useToggle, k as watch, _ as __vitePreload } from "./vendor-37f8288d.js";
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
  "vanilla": () => __vitePreload(() => import("./vendor-37f8288d.js").then((n) => n.bA), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor-37f8288d.js").then((n) => n.bB), true ? [] : void 0)
};
export {
  clientSupportPlugins as c,
  isDark as i,
  toggleDark as t
};

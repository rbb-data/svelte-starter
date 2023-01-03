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
import { S as SvelteComponentDev, Q as init, R as safe_not_equal, U as dispatch_dev, V as assign, W as compute_rest_props, X as validate_slots, Y as getContext, Z as exclude_internal_props, $ as symbol, a0 as d3area, a1 as svg_element, a2 as claim_svg_element, a3 as children, a4 as detach_dev, a5 as set_svg_attributes, a6 as toggle_class, a7 as add_location, a8 as attr_dev, a9 as set_style, aa as insert_hydration_dev, ab as append_hydration_dev, ac as action_destroyer, ad as get_spread_update, ae as is_function, af as noop, ag as subscribe, ah as create_component, ai as claim_component, aj as null_to_empty, ak as mount_component, al as get_spread_object, am as transition_in, an as transition_out, ao as destroy_component, ap as create_slot, aq as update_slot_base, ar as get_all_dirty_from_scope, as as get_slot_changes, at as validate_each_argument, au as validate_store, av as component_subscribe, aw as axis, ax as empty, ay as group_outros, az as check_outros, aA as destroy_each, aB as space, aC as claim_space, aD as text, aE as claim_text, aF as set_data_dev, aG as group, aH as d3line, aI as run_all, aJ as LayerCake, aK as Svg, aL as element, aM as claim_element, aN as set_attributes, aO as listen_dev, aP as bubble, aQ as binding_callbacks, aR as bind, aS as logEvent, aT as add_flush_callback, aU as compute_slots, _ as __vitePreload, aV as markRaw, E as reactive, d as defineComponent, r as ref, aW as watchEffect, o as openBlock, q as createBlock, aX as mergeProps, aY as resolveDynamicComponent, h as createCommentVNode } from "./vendor-37f8288d.js";
import { c as clientSupportPlugins } from "./__resolved__virtual__histoire-support-plugins-client-80b79f06.js";
function get(f, data, index = 0) {
  const coords = f(data);
  if (typeof coords === "number")
    return coords;
  return coords[index];
}
const AreaY_svelte_svelte_type_style_lang = "";
const file$c = "src/lib/components/layercake/AreaY.svelte";
function create_fragment$d(ctx) {
  let g;
  let path;
  let symbol_action;
  let mounted;
  let dispose;
  let path_levels = [ctx[7], { d: ctx[0] }];
  let path_data = {};
  for (let i = 0; i < path_levels.length; i += 1) {
    path_data = assign(path_data, path_levels[i]);
  }
  const block = {
    c: function create() {
      g = svg_element("g");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      g = claim_svg_element(nodes, "g", { class: true });
      var g_nodes = children(g);
      path = claim_svg_element(g_nodes, "path", { d: true });
      children(path).forEach(detach_dev);
      g_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_svg_attributes(path, path_data);
      toggle_class(path, "area", true);
      toggle_class(path, "s-g6XqzDxDD4f2", true);
      add_location(path, file$c, 50, 2, 1264);
      attr_dev(g, "class", "area-y0 s-g6XqzDxDD4f2");
      set_style(g, "--_color", ctx[7].stroke || ctx[1] || "");
      set_style(g, "--_outline", ctx[2] || "");
      set_style(g, "--_outline-width", ctx[6] || "");
      set_style(g, "--_opacity", ctx[7].opacity || "");
      add_location(g, file$c, 42, 0, 1034);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g, anchor);
      append_hydration_dev(g, path);
      if (!mounted) {
        dispose = action_destroyer(symbol_action = symbol.call(null, g, ctx[5]));
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      set_svg_attributes(path, path_data = get_spread_update(path_levels, [
        dirty & 128 && ctx2[7],
        dirty & 1 && { d: ctx2[0] }
      ]));
      toggle_class(path, "area", true);
      toggle_class(path, "s-g6XqzDxDD4f2", true);
      if (symbol_action && is_function(symbol_action.update) && dirty & 32)
        symbol_action.update.call(null, ctx2[5]);
      if (dirty & 130) {
        set_style(g, "--_color", ctx2[7].stroke || ctx2[1] || "");
      }
      if (dirty & 4) {
        set_style(g, "--_outline", ctx2[2] || "");
      }
      if (dirty & 64) {
        set_style(g, "--_outline-width", ctx2[6] || "");
      }
      if (dirty & 128) {
        set_style(g, "--_opacity", ctx2[7].opacity || "");
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$d.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$d($$self, $$props, $$invalidate) {
  let outlineWidth;
  const omit_props_names = ["color", "outline", "d", "data", "xIndex", "y0Index", "y1Index", "label", "parent"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $yGet, $$unsubscribe_yGet = noop, $$subscribe_yGet = () => ($$unsubscribe_yGet(), $$unsubscribe_yGet = subscribe(yGet, ($$value) => $$invalidate(15, $yGet = $$value)), yGet);
  let $xGet, $$unsubscribe_xGet = noop, $$subscribe_xGet = () => ($$unsubscribe_xGet(), $$unsubscribe_xGet = subscribe(xGet, ($$value) => $$invalidate(16, $xGet = $$value)), xGet);
  $$self.$$.on_destroy.push(() => $$unsubscribe_yGet());
  $$self.$$.on_destroy.push(() => $$unsubscribe_xGet());
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AreaY", slots, []);
  let { color = void 0 } = $$props;
  let { outline = void 0 } = $$props;
  let { d = void 0 } = $$props;
  let { data = void 0 } = $$props;
  let { xIndex = 0 } = $$props;
  let { y0Index = 0 } = $$props;
  let { y1Index = 1 } = $$props;
  let { label = void 0 } = $$props;
  let { parent = void 0 } = $$props;
  const ctx = getContext("LayerCake");
  let xGet, yGet;
  let area;
  let friendly;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("outline" in $$new_props)
      $$invalidate(2, outline = $$new_props.outline);
    if ("d" in $$new_props)
      $$invalidate(0, d = $$new_props.d);
    if ("data" in $$new_props)
      $$invalidate(8, data = $$new_props.data);
    if ("xIndex" in $$new_props)
      $$invalidate(9, xIndex = $$new_props.xIndex);
    if ("y0Index" in $$new_props)
      $$invalidate(10, y0Index = $$new_props.y0Index);
    if ("y1Index" in $$new_props)
      $$invalidate(11, y1Index = $$new_props.y1Index);
    if ("label" in $$new_props)
      $$invalidate(12, label = $$new_props.label);
    if ("parent" in $$new_props)
      $$invalidate(13, parent = $$new_props.parent);
  };
  $$self.$capture_state = () => ({
    getContext,
    symbol,
    d3area,
    get,
    color,
    outline,
    d,
    data,
    xIndex,
    y0Index,
    y1Index,
    label,
    parent,
    ctx,
    xGet,
    yGet,
    area,
    friendly,
    outlineWidth,
    $yGet,
    $xGet
  });
  $$self.$inject_state = ($$new_props) => {
    if ("color" in $$props)
      $$invalidate(1, color = $$new_props.color);
    if ("outline" in $$props)
      $$invalidate(2, outline = $$new_props.outline);
    if ("d" in $$props)
      $$invalidate(0, d = $$new_props.d);
    if ("data" in $$props)
      $$invalidate(8, data = $$new_props.data);
    if ("xIndex" in $$props)
      $$invalidate(9, xIndex = $$new_props.xIndex);
    if ("y0Index" in $$props)
      $$invalidate(10, y0Index = $$new_props.y0Index);
    if ("y1Index" in $$props)
      $$invalidate(11, y1Index = $$new_props.y1Index);
    if ("label" in $$props)
      $$invalidate(12, label = $$new_props.label);
    if ("parent" in $$props)
      $$invalidate(13, parent = $$new_props.parent);
    if ("xGet" in $$props)
      $$subscribe_xGet($$invalidate(3, xGet = $$new_props.xGet));
    if ("yGet" in $$props)
      $$subscribe_yGet($$invalidate(4, yGet = $$new_props.yGet));
    if ("area" in $$props)
      $$invalidate(14, area = $$new_props.area);
    if ("friendly" in $$props)
      $$invalidate(5, friendly = $$new_props.friendly);
    if ("outlineWidth" in $$props)
      $$invalidate(6, outlineWidth = $$new_props.outlineWidth);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(6, outlineWidth = $$restProps["outline-width"]);
    if ($$self.$$.dirty & 118528) {
      if (data != void 0 && ctx != void 0) {
        $$subscribe_xGet($$invalidate(3, xGet = ctx.xGet));
        $$subscribe_yGet($$invalidate(4, yGet = ctx.yGet));
        $$invalidate(14, area = d3area().x((d2) => get($xGet, d2, xIndex)).y0((d2) => get($yGet, d2, y0Index)).y1((d2) => get($yGet, d2, y1Index)));
        $$invalidate(0, d = area(data));
      }
    }
    if (label != void 0) {
      $$invalidate(5, friendly = {
        id: $$restProps.id,
        type: "area",
        label,
        parentId: parent
      });
    }
  };
  return [
    d,
    color,
    outline,
    xGet,
    yGet,
    friendly,
    outlineWidth,
    $$restProps,
    data,
    xIndex,
    y0Index,
    y1Index,
    label,
    parent,
    area,
    $yGet,
    $xGet
  ];
}
class AreaY extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {
      color: 1,
      outline: 2,
      d: 0,
      data: 8,
      xIndex: 9,
      y0Index: 10,
      y1Index: 11,
      label: 12,
      parent: 13
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AreaY",
      options,
      id: create_fragment$d.name
    });
  }
  get color() {
    throw new Error("<AreaY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<AreaY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get outline() {
    throw new Error("<AreaY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set outline(value) {
    throw new Error("<AreaY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get d() {
    throw new Error("<AreaY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set d(value) {
    throw new Error("<AreaY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get data() {
    throw new Error("<AreaY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set data(value) {
    throw new Error("<AreaY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get xIndex() {
    throw new Error("<AreaY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set xIndex(value) {
    throw new Error("<AreaY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get y0Index() {
    throw new Error("<AreaY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set y0Index(value) {
    throw new Error("<AreaY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get y1Index() {
    throw new Error("<AreaY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set y1Index(value) {
    throw new Error("<AreaY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<AreaY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<AreaY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get parent() {
    throw new Error("<AreaY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set parent(value) {
    throw new Error("<AreaY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Line_svelte_svelte_type_style_lang = "";
const file$b = "src/lib/components/layercake/Line.svelte";
function create_if_block$5(ctx) {
  let line;
  let line_levels = [
    ctx[11],
    { x1: ctx[9] },
    { y1: ctx[8] },
    { x2: ctx[7] },
    { y2: ctx[6] }
  ];
  let line_data = {};
  for (let i = 0; i < line_levels.length; i += 1) {
    line_data = assign(line_data, line_levels[i]);
  }
  const block = {
    c: function create() {
      line = svg_element("line");
      this.h();
    },
    l: function claim(nodes) {
      line = claim_svg_element(nodes, "line", { x1: true, y1: true, x2: true, y2: true });
      children(line).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_svg_attributes(line, line_data);
      toggle_class(line, "outline", true);
      toggle_class(line, "s-p8F5NyaCufjW", true);
      add_location(line, file$b, 52, 4, 1366);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, line, anchor);
    },
    p: function update(ctx2, dirty) {
      set_svg_attributes(line, line_data = get_spread_update(line_levels, [
        dirty & 2048 && ctx2[11],
        dirty & 512 && { x1: ctx2[9] },
        dirty & 256 && { y1: ctx2[8] },
        dirty & 128 && { x2: ctx2[7] },
        dirty & 64 && { y2: ctx2[6] }
      ]));
      toggle_class(line, "outline", true);
      toggle_class(line, "s-p8F5NyaCufjW", true);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(line);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$5.name,
    type: "if",
    source: "(52:2) {#if outline !== 'none'}",
    ctx
  });
  return block;
}
function create_fragment$c(ctx) {
  let g;
  let line;
  let symbol_action;
  let mounted;
  let dispose;
  let if_block = ctx[2] !== "none" && create_if_block$5(ctx);
  let line_levels = [
    ctx[11],
    { x1: ctx[9] },
    { y1: ctx[8] },
    { x2: ctx[7] },
    { y2: ctx[6] }
  ];
  let line_data = {};
  for (let i = 0; i < line_levels.length; i += 1) {
    line_data = assign(line_data, line_levels[i]);
  }
  const block = {
    c: function create() {
      g = svg_element("g");
      if (if_block)
        if_block.c();
      line = svg_element("line");
      this.h();
    },
    l: function claim(nodes) {
      g = claim_svg_element(nodes, "g", { class: true });
      var g_nodes = children(g);
      if (if_block)
        if_block.l(g_nodes);
      line = claim_svg_element(g_nodes, "line", { x1: true, y1: true, x2: true, y2: true });
      children(line).forEach(detach_dev);
      g_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_svg_attributes(line, line_data);
      toggle_class(line, "s-p8F5NyaCufjW", true);
      add_location(line, file$b, 54, 2, 1443);
      attr_dev(g, "class", "line s-p8F5NyaCufjW");
      set_style(g, "--_color", ctx[11].stroke || ctx[0] || "");
      set_style(g, "--_width", ctx[11]["stroke-width"] || ctx[1] || "");
      set_style(g, "--_outline", ctx[2] || "");
      set_style(g, "--_outline-width", ctx[10] || "");
      set_style(g, "--_opacity", ctx[11].opacity || "");
      add_location(g, file$b, 42, 0, 1048);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g, anchor);
      if (if_block)
        if_block.m(g, null);
      append_hydration_dev(g, line);
      if (!mounted) {
        dispose = action_destroyer(symbol_action = symbol.call(null, g, ctx[5]));
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (ctx2[2] !== "none") {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$5(ctx2);
          if_block.c();
          if_block.m(g, line);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      set_svg_attributes(line, line_data = get_spread_update(line_levels, [
        dirty & 2048 && ctx2[11],
        dirty & 512 && { x1: ctx2[9] },
        dirty & 256 && { y1: ctx2[8] },
        dirty & 128 && { x2: ctx2[7] },
        dirty & 64 && { y2: ctx2[6] }
      ]));
      toggle_class(line, "s-p8F5NyaCufjW", true);
      if (symbol_action && is_function(symbol_action.update) && dirty & 32)
        symbol_action.update.call(null, ctx2[5]);
      if (dirty & 2049) {
        set_style(g, "--_color", ctx2[11].stroke || ctx2[0] || "");
      }
      if (dirty & 2050) {
        set_style(g, "--_width", ctx2[11]["stroke-width"] || ctx2[1] || "");
      }
      if (dirty & 4) {
        set_style(g, "--_outline", ctx2[2] || "");
      }
      if (dirty & 1024) {
        set_style(g, "--_outline-width", ctx2[10] || "");
      }
      if (dirty & 2048) {
        set_style(g, "--_opacity", ctx2[11].opacity || "");
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$c.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$c($$self, $$props, $$invalidate) {
  let outlineWidth;
  let x1;
  let y1;
  let x2;
  let y2;
  const omit_props_names = ["color", "width", "outline", "data", "xIndex", "yIndex", "label", "parent"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $yGet, $$unsubscribe_yGet = noop, $$subscribe_yGet = () => ($$unsubscribe_yGet(), $$unsubscribe_yGet = subscribe(yGet, ($$value) => $$invalidate(17, $yGet = $$value)), yGet);
  let $xGet, $$unsubscribe_xGet = noop, $$subscribe_xGet = () => ($$unsubscribe_xGet(), $$unsubscribe_xGet = subscribe(xGet, ($$value) => $$invalidate(18, $xGet = $$value)), xGet);
  $$self.$$.on_destroy.push(() => $$unsubscribe_yGet());
  $$self.$$.on_destroy.push(() => $$unsubscribe_xGet());
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Line", slots, []);
  let { color = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { outline = void 0 } = $$props;
  let { data = void 0 } = $$props;
  let { xIndex = 0 } = $$props;
  let { yIndex = 0 } = $$props;
  let { label = void 0 } = $$props;
  let { parent = void 0 } = $$props;
  const ctx = getContext("LayerCake");
  let xGet, yGet;
  let friendly;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(0, color = $$new_props.color);
    if ("width" in $$new_props)
      $$invalidate(1, width = $$new_props.width);
    if ("outline" in $$new_props)
      $$invalidate(2, outline = $$new_props.outline);
    if ("data" in $$new_props)
      $$invalidate(12, data = $$new_props.data);
    if ("xIndex" in $$new_props)
      $$invalidate(13, xIndex = $$new_props.xIndex);
    if ("yIndex" in $$new_props)
      $$invalidate(14, yIndex = $$new_props.yIndex);
    if ("label" in $$new_props)
      $$invalidate(15, label = $$new_props.label);
    if ("parent" in $$new_props)
      $$invalidate(16, parent = $$new_props.parent);
  };
  $$self.$capture_state = () => ({
    getContext,
    symbol,
    get,
    color,
    width,
    outline,
    data,
    xIndex,
    yIndex,
    label,
    parent,
    ctx,
    xGet,
    yGet,
    friendly,
    y2,
    x2,
    y1,
    x1,
    outlineWidth,
    $yGet,
    $xGet
  });
  $$self.$inject_state = ($$new_props) => {
    if ("color" in $$props)
      $$invalidate(0, color = $$new_props.color);
    if ("width" in $$props)
      $$invalidate(1, width = $$new_props.width);
    if ("outline" in $$props)
      $$invalidate(2, outline = $$new_props.outline);
    if ("data" in $$props)
      $$invalidate(12, data = $$new_props.data);
    if ("xIndex" in $$props)
      $$invalidate(13, xIndex = $$new_props.xIndex);
    if ("yIndex" in $$props)
      $$invalidate(14, yIndex = $$new_props.yIndex);
    if ("label" in $$props)
      $$invalidate(15, label = $$new_props.label);
    if ("parent" in $$props)
      $$invalidate(16, parent = $$new_props.parent);
    if ("xGet" in $$props)
      $$subscribe_xGet($$invalidate(3, xGet = $$new_props.xGet));
    if ("yGet" in $$props)
      $$subscribe_yGet($$invalidate(4, yGet = $$new_props.yGet));
    if ("friendly" in $$props)
      $$invalidate(5, friendly = $$new_props.friendly);
    if ("y2" in $$props)
      $$invalidate(6, y2 = $$new_props.y2);
    if ("x2" in $$props)
      $$invalidate(7, x2 = $$new_props.x2);
    if ("y1" in $$props)
      $$invalidate(8, y1 = $$new_props.y1);
    if ("x1" in $$props)
      $$invalidate(9, x1 = $$new_props.x1);
    if ("outlineWidth" in $$props)
      $$invalidate(10, outlineWidth = $$new_props.outlineWidth);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(10, outlineWidth = $$restProps["outline-width"]);
    $$invalidate(9, x1 = $$restProps.x1 || 0);
    $$invalidate(8, y1 = $$restProps.y1 || 0);
    $$invalidate(7, x2 = $$restProps.x2 || 0);
    $$invalidate(6, y2 = $$restProps.y2 || 0);
    if ($$self.$$.dirty & 421888) {
      if (data != void 0 && ctx != void 0) {
        $$subscribe_xGet($$invalidate(3, xGet = ctx.xGet));
        $$subscribe_yGet($$invalidate(4, yGet = ctx.yGet));
        $$invalidate(9, x1 = get($xGet, data[0], xIndex));
        $$invalidate(8, y1 = get($yGet, data[0], yIndex));
        $$invalidate(7, x2 = get($xGet, data[1], xIndex));
        $$invalidate(6, y2 = get($yGet, data[1], yIndex));
      }
    }
    if (label != void 0) {
      $$invalidate(5, friendly = {
        id: $$restProps.id,
        type: "line",
        label,
        parentId: parent
      });
    }
  };
  return [
    color,
    width,
    outline,
    xGet,
    yGet,
    friendly,
    y2,
    x2,
    y1,
    x1,
    outlineWidth,
    $$restProps,
    data,
    xIndex,
    yIndex,
    label,
    parent,
    $yGet,
    $xGet
  ];
}
class Line extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {
      color: 0,
      width: 1,
      outline: 2,
      data: 12,
      xIndex: 13,
      yIndex: 14,
      label: 15,
      parent: 16
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Line",
      options,
      id: create_fragment$c.name
    });
  }
  get color() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get width() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set width(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get outline() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set outline(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get data() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set data(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get xIndex() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set xIndex(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get yIndex() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set yIndex(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get parent() {
    throw new Error("<Line>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set parent(value) {
    throw new Error("<Line>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const LineH_svelte_svelte_type_style_lang = "";
const file$a = "src/lib/components/layercake/LineH.svelte";
function create_fragment$b(ctx) {
  let g;
  let line;
  let g_class_value;
  let current;
  const line_spread_levels = [
    ctx[7],
    { x1: ctx[4] },
    { y1: ctx[6] },
    { x2: ctx[3] },
    { y2: ctx[5] }
  ];
  let line_props = {};
  for (let i = 0; i < line_spread_levels.length; i += 1) {
    line_props = assign(line_props, line_spread_levels[i]);
  }
  line = new Line({ props: line_props, $$inline: true });
  const block = {
    c: function create() {
      g = svg_element("g");
      create_component(line.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      g = claim_svg_element(nodes, "g", { class: true });
      var g_nodes = children(g);
      claim_component(line.$$.fragment, g_nodes);
      g_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(g, "class", g_class_value = null_to_empty(ctx[7].class) + " s--FKn-5YoU5e5");
      toggle_class(g, "horizontal-line", true);
      add_location(g, file$a, 35, 0, 949);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g, anchor);
      mount_component(line, g, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const line_changes = dirty & 248 ? get_spread_update(line_spread_levels, [
        dirty & 128 && get_spread_object(ctx2[7]),
        dirty & 16 && { x1: ctx2[4] },
        dirty & 64 && { y1: ctx2[6] },
        dirty & 8 && { x2: ctx2[3] },
        dirty & 32 && { y2: ctx2[5] }
      ]) : {};
      line.$set(line_changes);
      if (!current || dirty & 128 && g_class_value !== (g_class_value = null_to_empty(ctx2[7].class) + " s--FKn-5YoU5e5")) {
        attr_dev(g, "class", g_class_value);
      }
      if (!current || dirty & 128) {
        toggle_class(g, "horizontal-line", true);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(line.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(line.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g);
      destroy_component(line);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$b.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$b($$self, $$props, $$invalidate) {
  let x1;
  let x2;
  let y1;
  let y2;
  const omit_props_names = ["y", "yData", "xData"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $xScale, $$unsubscribe_xScale = noop, $$subscribe_xScale = () => ($$unsubscribe_xScale(), $$unsubscribe_xScale = subscribe(xScale, ($$value) => $$invalidate(11, $xScale = $$value)), xScale);
  let $width, $$unsubscribe_width = noop, $$subscribe_width = () => ($$unsubscribe_width(), $$unsubscribe_width = subscribe(width, ($$value) => $$invalidate(12, $width = $$value)), width);
  let $yScale, $$unsubscribe_yScale = noop, $$subscribe_yScale = () => ($$unsubscribe_yScale(), $$unsubscribe_yScale = subscribe(yScale, ($$value) => $$invalidate(13, $yScale = $$value)), yScale);
  $$self.$$.on_destroy.push(() => $$unsubscribe_xScale());
  $$self.$$.on_destroy.push(() => $$unsubscribe_width());
  $$self.$$.on_destroy.push(() => $$unsubscribe_yScale());
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("LineH", slots, []);
  let { y = void 0 } = $$props;
  let { yData = void 0 } = $$props;
  let { xData = void 0 } = $$props;
  const ctx = getContext("LayerCake");
  let xScale, yScale, width;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("y" in $$new_props)
      $$invalidate(8, y = $$new_props.y);
    if ("yData" in $$new_props)
      $$invalidate(9, yData = $$new_props.yData);
    if ("xData" in $$new_props)
      $$invalidate(10, xData = $$new_props.xData);
  };
  $$self.$capture_state = () => ({
    getContext,
    Line,
    y,
    yData,
    xData,
    ctx,
    xScale,
    yScale,
    width,
    x2,
    x1,
    y2,
    y1,
    $xScale,
    $width,
    $yScale
  });
  $$self.$inject_state = ($$new_props) => {
    if ("y" in $$props)
      $$invalidate(8, y = $$new_props.y);
    if ("yData" in $$props)
      $$invalidate(9, yData = $$new_props.yData);
    if ("xData" in $$props)
      $$invalidate(10, xData = $$new_props.xData);
    if ("xScale" in $$props)
      $$subscribe_xScale($$invalidate(0, xScale = $$new_props.xScale));
    if ("yScale" in $$props)
      $$subscribe_yScale($$invalidate(1, yScale = $$new_props.yScale));
    if ("width" in $$props)
      $$subscribe_width($$invalidate(2, width = $$new_props.width));
    if ("x2" in $$props)
      $$invalidate(3, x2 = $$new_props.x2);
    if ("x1" in $$props)
      $$invalidate(4, x1 = $$new_props.x1);
    if ("y2" in $$props)
      $$invalidate(5, y2 = $$new_props.y2);
    if ("y1" in $$props)
      $$invalidate(6, y1 = $$new_props.y1);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(4, x1 = $$restProps.x1 || 0);
    $$invalidate(3, x2 = $$restProps.x2 || 0);
    if ($$self.$$.dirty & 256) {
      $$invalidate(6, y1 = y || 0);
    }
    if ($$self.$$.dirty & 256) {
      $$invalidate(5, y2 = y || 0);
    }
    if (ctx != void 0) {
      $$subscribe_width($$invalidate(2, width = ctx.width));
      $$invalidate(3, x2 = $$restProps.x2 || $width);
      if (yData != void 0) {
        $$subscribe_yScale($$invalidate(1, yScale = ctx.yScale));
        $$invalidate(6, y1 = $$invalidate(5, y2 = $yScale(yData)));
      }
      if (xData != void 0) {
        $$subscribe_xScale($$invalidate(0, xScale = ctx.xScale));
        $$invalidate(4, x1 = xData[0] === null ? 0 : $xScale(xData[0]));
        $$invalidate(3, x2 = xData[1] === null ? $width : $xScale(xData[1]));
      }
    }
  };
  return [
    xScale,
    yScale,
    width,
    x2,
    x1,
    y2,
    y1,
    $$restProps,
    y,
    yData,
    xData,
    $xScale,
    $width,
    $yScale
  ];
}
class LineH extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { y: 8, yData: 9, xData: 10 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "LineH",
      options,
      id: create_fragment$b.name
    });
  }
  get y() {
    throw new Error("<LineH>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set y(value) {
    throw new Error("<LineH>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get yData() {
    throw new Error("<LineH>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set yData(value) {
    throw new Error("<LineH>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get xData() {
    throw new Error("<LineH>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set xData(value) {
    throw new Error("<LineH>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const LineV_svelte_svelte_type_style_lang = "";
const file$9 = "src/lib/components/layercake/LineV.svelte";
function create_fragment$a(ctx) {
  let g;
  let line;
  let g_class_value;
  let current;
  const line_spread_levels = [
    ctx[7],
    { x1: ctx[6] },
    { y1: ctx[4] },
    { x2: ctx[5] },
    { y2: ctx[3] }
  ];
  let line_props = {};
  for (let i = 0; i < line_spread_levels.length; i += 1) {
    line_props = assign(line_props, line_spread_levels[i]);
  }
  line = new Line({ props: line_props, $$inline: true });
  const block = {
    c: function create() {
      g = svg_element("g");
      create_component(line.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      g = claim_svg_element(nodes, "g", { class: true });
      var g_nodes = children(g);
      claim_component(line.$$.fragment, g_nodes);
      g_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(g, "class", g_class_value = null_to_empty(ctx[7].class) + " s-F_yqQE35gONP");
      toggle_class(g, "vertical-line", true);
      add_location(g, file$9, 35, 0, 953);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g, anchor);
      mount_component(line, g, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const line_changes = dirty & 248 ? get_spread_update(line_spread_levels, [
        dirty & 128 && get_spread_object(ctx2[7]),
        dirty & 64 && { x1: ctx2[6] },
        dirty & 16 && { y1: ctx2[4] },
        dirty & 32 && { x2: ctx2[5] },
        dirty & 8 && { y2: ctx2[3] }
      ]) : {};
      line.$set(line_changes);
      if (!current || dirty & 128 && g_class_value !== (g_class_value = null_to_empty(ctx2[7].class) + " s-F_yqQE35gONP")) {
        attr_dev(g, "class", g_class_value);
      }
      if (!current || dirty & 128) {
        toggle_class(g, "vertical-line", true);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(line.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(line.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g);
      destroy_component(line);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$a.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$a($$self, $$props, $$invalidate) {
  let y1;
  let y2;
  let x1;
  let x2;
  const omit_props_names = ["x", "xData", "yData"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $yScale, $$unsubscribe_yScale = noop, $$subscribe_yScale = () => ($$unsubscribe_yScale(), $$unsubscribe_yScale = subscribe(yScale, ($$value) => $$invalidate(11, $yScale = $$value)), yScale);
  let $height, $$unsubscribe_height = noop, $$subscribe_height = () => ($$unsubscribe_height(), $$unsubscribe_height = subscribe(height, ($$value) => $$invalidate(12, $height = $$value)), height);
  let $xScale, $$unsubscribe_xScale = noop, $$subscribe_xScale = () => ($$unsubscribe_xScale(), $$unsubscribe_xScale = subscribe(xScale, ($$value) => $$invalidate(13, $xScale = $$value)), xScale);
  $$self.$$.on_destroy.push(() => $$unsubscribe_yScale());
  $$self.$$.on_destroy.push(() => $$unsubscribe_height());
  $$self.$$.on_destroy.push(() => $$unsubscribe_xScale());
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("LineV", slots, []);
  let { x = void 0 } = $$props;
  let { xData = void 0 } = $$props;
  let { yData = void 0 } = $$props;
  const ctx = getContext("LayerCake");
  let xScale, yScale, height;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("x" in $$new_props)
      $$invalidate(8, x = $$new_props.x);
    if ("xData" in $$new_props)
      $$invalidate(9, xData = $$new_props.xData);
    if ("yData" in $$new_props)
      $$invalidate(10, yData = $$new_props.yData);
  };
  $$self.$capture_state = () => ({
    getContext,
    Line,
    x,
    xData,
    yData,
    ctx,
    xScale,
    yScale,
    height,
    y2,
    y1,
    x2,
    x1,
    $yScale,
    $height,
    $xScale
  });
  $$self.$inject_state = ($$new_props) => {
    if ("x" in $$props)
      $$invalidate(8, x = $$new_props.x);
    if ("xData" in $$props)
      $$invalidate(9, xData = $$new_props.xData);
    if ("yData" in $$props)
      $$invalidate(10, yData = $$new_props.yData);
    if ("xScale" in $$props)
      $$subscribe_xScale($$invalidate(0, xScale = $$new_props.xScale));
    if ("yScale" in $$props)
      $$subscribe_yScale($$invalidate(1, yScale = $$new_props.yScale));
    if ("height" in $$props)
      $$subscribe_height($$invalidate(2, height = $$new_props.height));
    if ("y2" in $$props)
      $$invalidate(3, y2 = $$new_props.y2);
    if ("y1" in $$props)
      $$invalidate(4, y1 = $$new_props.y1);
    if ("x2" in $$props)
      $$invalidate(5, x2 = $$new_props.x2);
    if ("x1" in $$props)
      $$invalidate(6, x1 = $$new_props.x1);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(4, y1 = $$restProps.y1 || 0);
    $$invalidate(3, y2 = $$restProps.y2 || 0);
    if ($$self.$$.dirty & 256) {
      $$invalidate(6, x1 = x || 0);
    }
    if ($$self.$$.dirty & 256) {
      $$invalidate(5, x2 = x || 0);
    }
    if (ctx != void 0) {
      $$subscribe_height($$invalidate(2, height = ctx.height));
      $$invalidate(3, y2 = $$restProps.y2 || $height);
      if (xData != void 0) {
        $$subscribe_xScale($$invalidate(0, xScale = ctx.xScale));
        $$invalidate(6, x1 = $$invalidate(5, x2 = $xScale(xData)));
      }
      if (yData != void 0) {
        $$subscribe_yScale($$invalidate(1, yScale = ctx.yScale));
        $$invalidate(4, y1 = yData[0] === null ? 0 : $yScale(yData[0]));
        $$invalidate(3, y2 = yData[1] === null ? $height : $yScale(yData[1]));
      }
    }
  };
  return [
    xScale,
    yScale,
    height,
    y2,
    y1,
    x2,
    x1,
    $$restProps,
    x,
    xData,
    yData,
    $yScale,
    $height,
    $xScale
  ];
}
class LineV extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { x: 8, xData: 9, yData: 10 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "LineV",
      options,
      id: create_fragment$a.name
    });
  }
  get x() {
    throw new Error("<LineV>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set x(value) {
    throw new Error("<LineV>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get xData() {
    throw new Error("<LineV>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set xData(value) {
    throw new Error("<LineV>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get yData() {
    throw new Error("<LineV>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set yData(value) {
    throw new Error("<LineV>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const SvgText_svelte_svelte_type_style_lang = "";
const file$8 = "src/lib/components/layercake/SvgText.svelte";
function create_fragment$9(ctx) {
  let text_1;
  let text_1_text_anchor_value;
  let style_transform = `translate(${ctx[7]}, calc(${ctx[11][ctx[3]]} + ${ctx[6]}))`;
  let current;
  const default_slot_template = ctx[21].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[20], null);
  let text_1_levels = [
    {
      "text-anchor": text_1_text_anchor_value = ctx[10][ctx[2]]
    },
    ctx[12],
    { x: ctx[9] },
    { y: ctx[8] }
  ];
  let text_1_data = {};
  for (let i = 0; i < text_1_levels.length; i += 1) {
    text_1_data = assign(text_1_data, text_1_levels[i]);
  }
  const block = {
    c: function create() {
      text_1 = svg_element("text");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      text_1 = claim_svg_element(nodes, "text", { "text-anchor": true, x: true, y: true });
      var text_1_nodes = children(text_1);
      if (default_slot)
        default_slot.l(text_1_nodes);
      text_1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_svg_attributes(text_1, text_1_data);
      set_style(text_1, "transform", style_transform);
      set_style(text_1, "--_color", ctx[12].fill || ctx[0] || "");
      set_style(text_1, "--_outline", ctx[12].stroke || ctx[1] || "");
      set_style(text_1, "--_opacity", ctx[12].opacity || "");
      toggle_class(text_1, "s-iCVW9LLkx0nx", true);
      add_location(text_1, file$8, 40, 0, 971);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, text_1, anchor);
      if (default_slot) {
        default_slot.m(text_1, null);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1048576)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[20],
            !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(default_slot_template, ctx2[20], dirty, null),
            null
          );
        }
      }
      set_svg_attributes(text_1, text_1_data = get_spread_update(text_1_levels, [
        (!current || dirty & 4 && text_1_text_anchor_value !== (text_1_text_anchor_value = ctx2[10][ctx2[2]])) && { "text-anchor": text_1_text_anchor_value },
        dirty & 4096 && ctx2[12],
        (!current || dirty & 512) && { x: ctx2[9] },
        (!current || dirty & 256) && { y: ctx2[8] }
      ]));
      set_style(text_1, "transform", style_transform);
      set_style(text_1, "--_color", ctx2[12].fill || ctx2[0] || "");
      set_style(text_1, "--_outline", ctx2[12].stroke || ctx2[1] || "");
      set_style(text_1, "--_opacity", ctx2[12].opacity || "");
      toggle_class(text_1, "s-iCVW9LLkx0nx", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(text_1);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$9($$self, $$props, $$invalidate) {
  let x;
  let y;
  let _xOffset;
  let _yOffset;
  const omit_props_names = [
    "color",
    "outline",
    "data",
    "xIndex",
    "yIndex",
    "xAlign",
    "yAlign",
    "xOffset",
    "yOffset"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $yGet, $$unsubscribe_yGet = noop, $$subscribe_yGet = () => ($$unsubscribe_yGet(), $$unsubscribe_yGet = subscribe(yGet, ($$value) => $$invalidate(18, $yGet = $$value)), yGet);
  let $xGet, $$unsubscribe_xGet = noop, $$subscribe_xGet = () => ($$unsubscribe_xGet(), $$unsubscribe_xGet = subscribe(xGet, ($$value) => $$invalidate(19, $xGet = $$value)), xGet);
  $$self.$$.on_destroy.push(() => $$unsubscribe_yGet());
  $$self.$$.on_destroy.push(() => $$unsubscribe_xGet());
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SvgText", slots, ["default"]);
  let { color = void 0 } = $$props;
  let { outline = void 0 } = $$props;
  let { data = void 0 } = $$props;
  let { xIndex = 0 } = $$props;
  let { yIndex = 0 } = $$props;
  let { xAlign = "left" } = $$props;
  let { yAlign = "bottom" } = $$props;
  let { xOffset = 0 } = $$props;
  let { yOffset = 0 } = $$props;
  const textAnchor = {
    left: "start",
    center: "middle",
    right: "end"
  };
  const yTranslate = {
    top: "1em",
    center: "0.33em",
    bottom: "0px"
  };
  const ctx = getContext("LayerCake");
  let xGet, yGet;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(0, color = $$new_props.color);
    if ("outline" in $$new_props)
      $$invalidate(1, outline = $$new_props.outline);
    if ("data" in $$new_props)
      $$invalidate(13, data = $$new_props.data);
    if ("xIndex" in $$new_props)
      $$invalidate(14, xIndex = $$new_props.xIndex);
    if ("yIndex" in $$new_props)
      $$invalidate(15, yIndex = $$new_props.yIndex);
    if ("xAlign" in $$new_props)
      $$invalidate(2, xAlign = $$new_props.xAlign);
    if ("yAlign" in $$new_props)
      $$invalidate(3, yAlign = $$new_props.yAlign);
    if ("xOffset" in $$new_props)
      $$invalidate(16, xOffset = $$new_props.xOffset);
    if ("yOffset" in $$new_props)
      $$invalidate(17, yOffset = $$new_props.yOffset);
    if ("$$scope" in $$new_props)
      $$invalidate(20, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    getContext,
    get,
    color,
    outline,
    data,
    xIndex,
    yIndex,
    xAlign,
    yAlign,
    xOffset,
    yOffset,
    textAnchor,
    yTranslate,
    ctx,
    xGet,
    yGet,
    _yOffset,
    _xOffset,
    y,
    x,
    $yGet,
    $xGet
  });
  $$self.$inject_state = ($$new_props) => {
    if ("color" in $$props)
      $$invalidate(0, color = $$new_props.color);
    if ("outline" in $$props)
      $$invalidate(1, outline = $$new_props.outline);
    if ("data" in $$props)
      $$invalidate(13, data = $$new_props.data);
    if ("xIndex" in $$props)
      $$invalidate(14, xIndex = $$new_props.xIndex);
    if ("yIndex" in $$props)
      $$invalidate(15, yIndex = $$new_props.yIndex);
    if ("xAlign" in $$props)
      $$invalidate(2, xAlign = $$new_props.xAlign);
    if ("yAlign" in $$props)
      $$invalidate(3, yAlign = $$new_props.yAlign);
    if ("xOffset" in $$props)
      $$invalidate(16, xOffset = $$new_props.xOffset);
    if ("yOffset" in $$props)
      $$invalidate(17, yOffset = $$new_props.yOffset);
    if ("xGet" in $$props)
      $$subscribe_xGet($$invalidate(4, xGet = $$new_props.xGet));
    if ("yGet" in $$props)
      $$subscribe_yGet($$invalidate(5, yGet = $$new_props.yGet));
    if ("_yOffset" in $$props)
      $$invalidate(6, _yOffset = $$new_props._yOffset);
    if ("_xOffset" in $$props)
      $$invalidate(7, _xOffset = $$new_props._xOffset);
    if ("y" in $$props)
      $$invalidate(8, y = $$new_props.y);
    if ("x" in $$props)
      $$invalidate(9, x = $$new_props.x);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(9, x = $$restProps.x || 0);
    $$invalidate(8, y = $$restProps.y || 0);
    if ($$self.$$.dirty & 843776) {
      if (data != void 0 && ctx != void 0) {
        $$subscribe_xGet($$invalidate(4, xGet = ctx.xGet));
        $$subscribe_yGet($$invalidate(5, yGet = ctx.yGet));
        $$invalidate(9, x = get($xGet, data, xIndex));
        $$invalidate(8, y = get($yGet, data, yIndex));
      }
    }
    if ($$self.$$.dirty & 65536) {
      $$invalidate(7, _xOffset = typeof xOffset === "number" ? `${xOffset}px` : xOffset);
    }
    if ($$self.$$.dirty & 131072) {
      $$invalidate(6, _yOffset = typeof yOffset === "number" ? `${yOffset}px` : yOffset);
    }
  };
  return [
    color,
    outline,
    xAlign,
    yAlign,
    xGet,
    yGet,
    _yOffset,
    _xOffset,
    y,
    x,
    textAnchor,
    yTranslate,
    $$restProps,
    data,
    xIndex,
    yIndex,
    xOffset,
    yOffset,
    $yGet,
    $xGet,
    $$scope,
    slots
  ];
}
class SvgText extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {
      color: 0,
      outline: 1,
      data: 13,
      xIndex: 14,
      yIndex: 15,
      xAlign: 2,
      yAlign: 3,
      xOffset: 16,
      yOffset: 17
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SvgText",
      options,
      id: create_fragment$9.name
    });
  }
  get color() {
    throw new Error("<SvgText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<SvgText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get outline() {
    throw new Error("<SvgText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set outline(value) {
    throw new Error("<SvgText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get data() {
    throw new Error("<SvgText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set data(value) {
    throw new Error("<SvgText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get xIndex() {
    throw new Error("<SvgText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set xIndex(value) {
    throw new Error("<SvgText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get yIndex() {
    throw new Error("<SvgText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set yIndex(value) {
    throw new Error("<SvgText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get xAlign() {
    throw new Error("<SvgText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set xAlign(value) {
    throw new Error("<SvgText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get yAlign() {
    throw new Error("<SvgText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set yAlign(value) {
    throw new Error("<SvgText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get xOffset() {
    throw new Error("<SvgText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set xOffset(value) {
    throw new Error("<SvgText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get yOffset() {
    throw new Error("<SvgText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set yOffset(value) {
    throw new Error("<SvgText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$7 = "src/lib/components/layercake/AxisX.svelte";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  const constants_0 = child_ctx[9](child_ctx[19]) + (child_ctx[9].bandwidth != void 0 ? child_ctx[9].bandwidth() / 2 : 0);
  child_ctx[20] = constants_0;
  return child_ctx;
}
const get_default_slot_changes$1 = (dirty) => ({ tick: dirty & 1 });
const get_default_slot_context$1 = (ctx) => ({ tick: ctx[19] });
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  return child_ctx;
}
function create_if_block_2$2(ctx) {
  let linev;
  let current;
  linev = new LineV({
    props: { class: "grid-line" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(linev.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(linev.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(linev, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(linev.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(linev.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(linev, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$2.name,
    type: "if",
    source: "(44:6) {#if showGridLines}",
    ctx
  });
  return block;
}
function create_each_block_1(ctx) {
  let g;
  let g_transform_value;
  let current;
  let if_block = ctx[2] && create_if_block_2$2(ctx);
  const block = {
    c: function create() {
      g = svg_element("g");
      if (if_block)
        if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      g = claim_svg_element(nodes, "g", { transform: true });
      var g_nodes = children(g);
      if (if_block)
        if_block.l(g_nodes);
      g_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(g, "transform", g_transform_value = "translate(" + ctx[9](ctx[19]) + ", 0)");
      add_location(g, file$7, 42, 4, 1153);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g, anchor);
      if (if_block)
        if_block.m(g, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if (dirty & 4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(g, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 513 && g_transform_value !== (g_transform_value = "translate(" + ctx2[9](ctx2[19]) + ", 0)")) {
        attr_dev(g, "transform", g_transform_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(42:2) {#each ticks as tick}",
    ctx
  });
  return block;
}
function create_if_block_1$2(ctx) {
  let lineh;
  let current;
  lineh = new LineH({
    props: { class: "domain-line" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(lineh.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(lineh.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(lineh, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(lineh.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(lineh.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(lineh, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$2.name,
    type: "if",
    source: "(50:4) {#if showDomainLine}",
    ctx
  });
  return block;
}
function create_if_block$4(ctx) {
  let linev;
  let current;
  linev = new LineV({
    props: {
      class: ctx[1] ? "domain-line" : "tick-line",
      y2: ctx[8] * ctx[5]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(linev.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(linev.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(linev, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const linev_changes = {};
      if (dirty & 2)
        linev_changes.class = ctx2[1] ? "domain-line" : "tick-line";
      if (dirty & 288)
        linev_changes.y2 = ctx2[8] * ctx2[5];
      linev.$set(linev_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(linev.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(linev.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(linev, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$4.name,
    type: "if",
    source: "(59:8) {#if showTickLines}",
    ctx
  });
  return block;
}
function fallback_block$3(ctx) {
  let t_value = ctx[19] + "";
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[19] + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: fallback_block$3.name,
    type: "fallback",
    source: "(73:23)              ",
    ctx
  });
  return block;
}
function create_default_slot$4(ctx) {
  let t;
  let current;
  const default_slot_template = ctx[17].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[18], get_default_slot_context$1);
  const default_slot_or_fallback = default_slot || fallback_block$3(ctx);
  const block = {
    c: function create() {
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      t = space();
    },
    l: function claim(nodes) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      insert_hydration_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 262145)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[18],
            !current ? get_all_dirty_from_scope(ctx2[18]) : get_slot_changes(default_slot_template, ctx2[18], dirty, get_default_slot_changes$1),
            get_default_slot_context$1
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 1)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$4.name,
    type: "slot",
    source: `(65:8) <SvgText           class={isCategorical ? 'category-tick' : 'tick'}           xAlign=\\"center\\"           yAlign={onTop ? 'bottom' : 'top'}           yOffset={direction *             (tickLabelPadding + (showTickLines ? tickLength : 0))}           outline=\\"none\\"         >`,
    ctx
  });
  return block;
}
function create_each_block$1(ctx) {
  let g;
  let if_block_anchor;
  let svgtext;
  let g_transform_value;
  let current;
  let if_block = ctx[3] && create_if_block$4(ctx);
  svgtext = new SvgText({
    props: {
      class: ctx[13] ? "category-tick" : "tick",
      xAlign: "center",
      yAlign: ctx[4] ? "bottom" : "top",
      yOffset: ctx[8] * (ctx[6] + (ctx[3] ? ctx[5] : 0)),
      outline: "none",
      $$slots: { default: [create_default_slot$4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      g = svg_element("g");
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      create_component(svgtext.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      g = claim_svg_element(nodes, "g", { transform: true });
      var g_nodes = children(g);
      if (if_block)
        if_block.l(g_nodes);
      if_block_anchor = empty();
      claim_component(svgtext.$$.fragment, g_nodes);
      g_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(g, "transform", g_transform_value = "translate(" + ctx[20] + ", 0)");
      add_location(g, file$7, 57, 6, 1564);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g, anchor);
      if (if_block)
        if_block.m(g, null);
      append_hydration_dev(g, if_block_anchor);
      mount_component(svgtext, g, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(g, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const svgtext_changes = {};
      if (dirty & 16)
        svgtext_changes.yAlign = ctx2[4] ? "bottom" : "top";
      if (dirty & 360)
        svgtext_changes.yOffset = ctx2[8] * (ctx2[6] + (ctx2[3] ? ctx2[5] : 0));
      if (dirty & 262145) {
        svgtext_changes.$$scope = { dirty, ctx: ctx2 };
      }
      svgtext.$set(svgtext_changes);
      if (!current || dirty & 513 && g_transform_value !== (g_transform_value = "translate(" + ctx2[20] + ", 0)")) {
        attr_dev(g, "transform", g_transform_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(svgtext.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      transition_out(svgtext.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g);
      if (if_block)
        if_block.d();
      destroy_component(svgtext);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$1.name,
    type: "each",
    source: "(53:4) {#each ticks as tick}",
    ctx
  });
  return block;
}
function create_fragment$8(ctx) {
  let g1;
  let g0;
  let if_block_anchor;
  let g0_transform_value;
  let g1_class_value;
  let g1_style_value;
  let axis_action;
  let current;
  let mounted;
  let dispose;
  let each_value_1 = ctx[0];
  validate_each_argument(each_value_1);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
    each_blocks_1[i] = null;
  });
  let if_block = ctx[1] && create_if_block_1$2(ctx);
  let each_value = ctx[0];
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out_1 = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      g1 = svg_element("g");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      g0 = svg_element("g");
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l: function claim(nodes) {
      g1 = claim_svg_element(nodes, "g", { class: true, style: true });
      var g1_nodes = children(g1);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(g1_nodes);
      }
      g0 = claim_svg_element(g1_nodes, "g", { transform: true });
      var g0_nodes = children(g0);
      if (if_block)
        if_block.l(g0_nodes);
      if_block_anchor = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(g0_nodes);
      }
      g0_nodes.forEach(detach_dev);
      g1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(g0, "transform", g0_transform_value = "translate(0, " + (ctx[4] ? 0 : ctx[10]) + ")");
      add_location(g0, file$7, 48, 2, 1294);
      attr_dev(g1, "class", g1_class_value = ctx[14].class);
      attr_dev(g1, "style", g1_style_value = ctx[14].style);
      toggle_class(g1, "axis-x", true);
      add_location(g1, file$7, 35, 0, 1020);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g1, anchor);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(g1, null);
      }
      append_hydration_dev(g1, g0);
      if (if_block)
        if_block.m(g0, null);
      append_hydration_dev(g0, if_block_anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(g0, null);
      }
      current = true;
      if (!mounted) {
        dispose = action_destroyer(axis_action = axis.call(null, g1, ctx[7]));
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & 517) {
        each_value_1 = ctx2[0];
        validate_each_argument(each_value_1);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
            transition_in(each_blocks_1[i], 1);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            transition_in(each_blocks_1[i], 1);
            each_blocks_1[i].m(g1, g0);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (ctx2[1]) {
        if (if_block) {
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(g0, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty & 271227) {
        each_value = ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(g0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out_1(i);
        }
        check_outros();
      }
      if (!current || dirty & 1040 && g0_transform_value !== (g0_transform_value = "translate(0, " + (ctx2[4] ? 0 : ctx2[10]) + ")")) {
        attr_dev(g0, "transform", g0_transform_value);
      }
      if (!current || dirty & 16384 && g1_class_value !== (g1_class_value = ctx2[14].class)) {
        attr_dev(g1, "class", g1_class_value);
      }
      if (!current || dirty & 16384 && g1_style_value !== (g1_style_value = ctx2[14].style)) {
        attr_dev(g1, "style", g1_style_value);
      }
      if (axis_action && is_function(axis_action.update) && dirty & 128)
        axis_action.update.call(null, ctx2[7]);
      if (!current || dirty & 16384) {
        toggle_class(g1, "axis-x", true);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      transition_in(if_block);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
      transition_out(if_block);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g1);
      destroy_each(each_blocks_1, detaching);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$8($$self, $$props, $$invalidate) {
  let direction;
  const omit_props_names = [
    "n",
    "ticks",
    "showDomainLine",
    "showGridLines",
    "showTickLines",
    "onTop",
    "tickLength",
    "tickLabelPadding",
    "label"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $xScale;
  let $height;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AxisX", slots, ["default"]);
  const { xScale, height } = getContext("LayerCake");
  validate_store(xScale, "xScale");
  component_subscribe($$self, xScale, (value) => $$invalidate(9, $xScale = value));
  validate_store(height, "height");
  component_subscribe($$self, height, (value) => $$invalidate(10, $height = value));
  const isCategorical = $xScale.bandwidth != void 0;
  let { n = void 0 } = $$props;
  let { ticks = isCategorical ? $xScale.domain() : $xScale.ticks(n) } = $$props;
  let { showDomainLine = true } = $$props;
  let { showGridLines = false } = $$props;
  let { showTickLines = true } = $$props;
  let { onTop = false } = $$props;
  let { tickLength = 6 } = $$props;
  let { tickLabelPadding = 6 } = $$props;
  let { label = void 0 } = $$props;
  let friendly;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(14, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("n" in $$new_props)
      $$invalidate(15, n = $$new_props.n);
    if ("ticks" in $$new_props)
      $$invalidate(0, ticks = $$new_props.ticks);
    if ("showDomainLine" in $$new_props)
      $$invalidate(1, showDomainLine = $$new_props.showDomainLine);
    if ("showGridLines" in $$new_props)
      $$invalidate(2, showGridLines = $$new_props.showGridLines);
    if ("showTickLines" in $$new_props)
      $$invalidate(3, showTickLines = $$new_props.showTickLines);
    if ("onTop" in $$new_props)
      $$invalidate(4, onTop = $$new_props.onTop);
    if ("tickLength" in $$new_props)
      $$invalidate(5, tickLength = $$new_props.tickLength);
    if ("tickLabelPadding" in $$new_props)
      $$invalidate(6, tickLabelPadding = $$new_props.tickLabelPadding);
    if ("label" in $$new_props)
      $$invalidate(16, label = $$new_props.label);
    if ("$$scope" in $$new_props)
      $$invalidate(18, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    getContext,
    axis,
    LineH,
    LineV,
    SvgText,
    xScale,
    height,
    isCategorical,
    n,
    ticks,
    showDomainLine,
    showGridLines,
    showTickLines,
    onTop,
    tickLength,
    tickLabelPadding,
    label,
    friendly,
    direction,
    $xScale,
    $height
  });
  $$self.$inject_state = ($$new_props) => {
    if ("n" in $$props)
      $$invalidate(15, n = $$new_props.n);
    if ("ticks" in $$props)
      $$invalidate(0, ticks = $$new_props.ticks);
    if ("showDomainLine" in $$props)
      $$invalidate(1, showDomainLine = $$new_props.showDomainLine);
    if ("showGridLines" in $$props)
      $$invalidate(2, showGridLines = $$new_props.showGridLines);
    if ("showTickLines" in $$props)
      $$invalidate(3, showTickLines = $$new_props.showTickLines);
    if ("onTop" in $$props)
      $$invalidate(4, onTop = $$new_props.onTop);
    if ("tickLength" in $$props)
      $$invalidate(5, tickLength = $$new_props.tickLength);
    if ("tickLabelPadding" in $$props)
      $$invalidate(6, tickLabelPadding = $$new_props.tickLabelPadding);
    if ("label" in $$props)
      $$invalidate(16, label = $$new_props.label);
    if ("friendly" in $$props)
      $$invalidate(7, friendly = $$new_props.friendly);
    if ("direction" in $$props)
      $$invalidate(8, direction = $$new_props.direction);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      $$invalidate(8, direction = onTop ? -1 : 1);
    }
    if ($$self.$$.dirty & 65536) {
      if (label != void 0) {
        $$invalidate(7, friendly = {
          label,
          direction: "x",
          type: isCategorical ? "categorical" : "continuous",
          ticks: isCategorical ? "text.category-tick" : "text.tick"
        });
      }
    }
  };
  return [
    ticks,
    showDomainLine,
    showGridLines,
    showTickLines,
    onTop,
    tickLength,
    tickLabelPadding,
    friendly,
    direction,
    $xScale,
    $height,
    xScale,
    height,
    isCategorical,
    $$restProps,
    n,
    label,
    slots,
    $$scope
  ];
}
class AxisX extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      n: 15,
      ticks: 0,
      showDomainLine: 1,
      showGridLines: 2,
      showTickLines: 3,
      onTop: 4,
      tickLength: 5,
      tickLabelPadding: 6,
      label: 16
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AxisX",
      options,
      id: create_fragment$8.name
    });
  }
  get n() {
    throw new Error("<AxisX>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set n(value) {
    throw new Error("<AxisX>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get ticks() {
    throw new Error("<AxisX>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set ticks(value) {
    throw new Error("<AxisX>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get showDomainLine() {
    throw new Error("<AxisX>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showDomainLine(value) {
    throw new Error("<AxisX>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get showGridLines() {
    throw new Error("<AxisX>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showGridLines(value) {
    throw new Error("<AxisX>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get showTickLines() {
    throw new Error("<AxisX>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showTickLines(value) {
    throw new Error("<AxisX>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get onTop() {
    throw new Error("<AxisX>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set onTop(value) {
    throw new Error("<AxisX>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get tickLength() {
    throw new Error("<AxisX>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set tickLength(value) {
    throw new Error("<AxisX>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get tickLabelPadding() {
    throw new Error("<AxisX>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set tickLabelPadding(value) {
    throw new Error("<AxisX>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<AxisX>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<AxisX>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$6 = "src/lib/components/layercake/AxisY.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  const constants_0 = child_ctx[7](child_ctx[15]) + (child_ctx[7].bandwidth != void 0 ? child_ctx[7].bandwidth() / 2 : 0);
  child_ctx[16] = constants_0;
  return child_ctx;
}
const get_default_slot_changes = (dirty) => ({ tick: dirty & 1 });
const get_default_slot_context = (ctx) => ({ tick: ctx[15] });
function create_if_block_2$1(ctx) {
  let linev;
  let current;
  linev = new LineV({
    props: { class: "domain-line" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(linev.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(linev.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(linev, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(linev.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(linev.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(linev, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$1.name,
    type: "if",
    source: "(40:2) {#if showDomainLine}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let lineh;
  let current;
  lineh = new LineH({
    props: { class: "grid-line" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(lineh.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(lineh.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(lineh, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(lineh.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(lineh.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(lineh, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(49:6) {#if showGridLines}",
    ctx
  });
  return block;
}
function create_if_block$3(ctx) {
  let lineh;
  let current;
  lineh = new LineH({
    props: {
      class: ctx[1] ? "domain-line" : "tick-line",
      x2: -ctx[4]
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(lineh.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(lineh.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(lineh, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const lineh_changes = {};
      if (dirty & 2)
        lineh_changes.class = ctx2[1] ? "domain-line" : "tick-line";
      if (dirty & 16)
        lineh_changes.x2 = -ctx2[4];
      lineh.$set(lineh_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(lineh.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(lineh.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(lineh, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$3.name,
    type: "if",
    source: "(52:6) {#if showTickLines}",
    ctx
  });
  return block;
}
function fallback_block$2(ctx) {
  let t_value = ctx[15] + "";
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[15] + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: fallback_block$2.name,
    type: "fallback",
    source: "(65:21)            ",
    ctx
  });
  return block;
}
function create_default_slot$3(ctx) {
  let t;
  let current;
  const default_slot_template = ctx[13].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[14], get_default_slot_context);
  const default_slot_or_fallback = default_slot || fallback_block$2(ctx);
  const block = {
    c: function create() {
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      t = space();
    },
    l: function claim(nodes) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      insert_hydration_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16385)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[14],
            !current ? get_all_dirty_from_scope(ctx2[14]) : get_slot_changes(default_slot_template, ctx2[14], dirty, get_default_slot_changes),
            get_default_slot_context
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 1)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: `(58:6) <SvgText         class={isCategorical ? 'category-tick' : 'tick'}         xAlign=\\"right\\"         yAlign=\\"center\\"         xOffset={-tickLabelPadding - (showTickLines ? tickLength : 0)}         outline=\\"none\\"       >`,
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let g;
  let if_block0_anchor;
  let if_block1_anchor;
  let svgtext;
  let g_transform_value;
  let current;
  let if_block0 = ctx[2] && create_if_block_1$1(ctx);
  let if_block1 = ctx[3] && create_if_block$3(ctx);
  svgtext = new SvgText({
    props: {
      class: ctx[9] ? "category-tick" : "tick",
      xAlign: "right",
      yAlign: "center",
      xOffset: -ctx[5] - (ctx[3] ? ctx[4] : 0),
      outline: "none",
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      g = svg_element("g");
      if (if_block0)
        if_block0.c();
      if_block0_anchor = empty();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      create_component(svgtext.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      g = claim_svg_element(nodes, "g", { transform: true });
      var g_nodes = children(g);
      if (if_block0)
        if_block0.l(g_nodes);
      if_block0_anchor = empty();
      if (if_block1)
        if_block1.l(g_nodes);
      if_block1_anchor = empty();
      claim_component(svgtext.$$.fragment, g_nodes);
      g_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(g, "transform", g_transform_value = "translate(0, " + ctx[16] + ")");
      add_location(g, file$6, 47, 4, 1273);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g, anchor);
      if (if_block0)
        if_block0.m(g, null);
      append_hydration_dev(g, if_block0_anchor);
      if (if_block1)
        if_block1.m(g, null);
      append_hydration_dev(g, if_block1_anchor);
      mount_component(svgtext, g, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block0) {
          if (dirty & 4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(g, if_block0_anchor);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[3]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$3(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(g, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      const svgtext_changes = {};
      if (dirty & 56)
        svgtext_changes.xOffset = -ctx2[5] - (ctx2[3] ? ctx2[4] : 0);
      if (dirty & 16385) {
        svgtext_changes.$$scope = { dirty, ctx: ctx2 };
      }
      svgtext.$set(svgtext_changes);
      if (!current || dirty & 129 && g_transform_value !== (g_transform_value = "translate(0, " + ctx2[16] + ")")) {
        attr_dev(g, "transform", g_transform_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(svgtext.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(svgtext.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      destroy_component(svgtext);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(43:2) {#each ticks as tick}",
    ctx
  });
  return block;
}
function create_fragment$7(ctx) {
  let g;
  let if_block_anchor;
  let g_class_value;
  let g_style_value;
  let axis_action;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block_2$1(ctx);
  let each_value = ctx[0];
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      g = svg_element("g");
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l: function claim(nodes) {
      g = claim_svg_element(nodes, "g", { class: true, style: true });
      var g_nodes = children(g);
      if (if_block)
        if_block.l(g_nodes);
      if_block_anchor = empty();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(g_nodes);
      }
      g_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(g, "class", g_class_value = ctx[10].class);
      attr_dev(g, "style", g_style_value = ctx[10].style);
      toggle_class(g, "axis-y", true);
      add_location(g, file$6, 33, 0, 966);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g, anchor);
      if (if_block)
        if_block.m(g, null);
      append_hydration_dev(g, if_block_anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(g, null);
      }
      current = true;
      if (!mounted) {
        dispose = action_destroyer(axis_action = axis.call(null, g, ctx[6]));
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(g, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty & 17087) {
        each_value = ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(g, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (!current || dirty & 1024 && g_class_value !== (g_class_value = ctx2[10].class)) {
        attr_dev(g, "class", g_class_value);
      }
      if (!current || dirty & 1024 && g_style_value !== (g_style_value = ctx2[10].style)) {
        attr_dev(g, "style", g_style_value);
      }
      if (axis_action && is_function(axis_action.update) && dirty & 64)
        axis_action.update.call(null, ctx2[6]);
      if (!current || dirty & 1024) {
        toggle_class(g, "axis-y", true);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$7($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "n",
    "ticks",
    "showDomainLine",
    "showGridLines",
    "showTickLines",
    "tickLength",
    "tickLabelPadding",
    "label"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $yScale;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AxisY", slots, ["default"]);
  const { yScale } = getContext("LayerCake");
  validate_store(yScale, "yScale");
  component_subscribe($$self, yScale, (value) => $$invalidate(7, $yScale = value));
  const isCategorical = $yScale.bandwidth != void 0;
  let { n = void 0 } = $$props;
  let { ticks = isCategorical ? $yScale.domain() : $yScale.ticks(n) } = $$props;
  let { showDomainLine = false } = $$props;
  let { showGridLines = !isCategorical } = $$props;
  let { showTickLines = false } = $$props;
  let { tickLength = 6 } = $$props;
  let { tickLabelPadding = 8 } = $$props;
  let { label = void 0 } = $$props;
  let friendly;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("n" in $$new_props)
      $$invalidate(11, n = $$new_props.n);
    if ("ticks" in $$new_props)
      $$invalidate(0, ticks = $$new_props.ticks);
    if ("showDomainLine" in $$new_props)
      $$invalidate(1, showDomainLine = $$new_props.showDomainLine);
    if ("showGridLines" in $$new_props)
      $$invalidate(2, showGridLines = $$new_props.showGridLines);
    if ("showTickLines" in $$new_props)
      $$invalidate(3, showTickLines = $$new_props.showTickLines);
    if ("tickLength" in $$new_props)
      $$invalidate(4, tickLength = $$new_props.tickLength);
    if ("tickLabelPadding" in $$new_props)
      $$invalidate(5, tickLabelPadding = $$new_props.tickLabelPadding);
    if ("label" in $$new_props)
      $$invalidate(12, label = $$new_props.label);
    if ("$$scope" in $$new_props)
      $$invalidate(14, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    getContext,
    axis,
    LineH,
    LineV,
    SvgText,
    yScale,
    isCategorical,
    n,
    ticks,
    showDomainLine,
    showGridLines,
    showTickLines,
    tickLength,
    tickLabelPadding,
    label,
    friendly,
    $yScale
  });
  $$self.$inject_state = ($$new_props) => {
    if ("n" in $$props)
      $$invalidate(11, n = $$new_props.n);
    if ("ticks" in $$props)
      $$invalidate(0, ticks = $$new_props.ticks);
    if ("showDomainLine" in $$props)
      $$invalidate(1, showDomainLine = $$new_props.showDomainLine);
    if ("showGridLines" in $$props)
      $$invalidate(2, showGridLines = $$new_props.showGridLines);
    if ("showTickLines" in $$props)
      $$invalidate(3, showTickLines = $$new_props.showTickLines);
    if ("tickLength" in $$props)
      $$invalidate(4, tickLength = $$new_props.tickLength);
    if ("tickLabelPadding" in $$props)
      $$invalidate(5, tickLabelPadding = $$new_props.tickLabelPadding);
    if ("label" in $$props)
      $$invalidate(12, label = $$new_props.label);
    if ("friendly" in $$props)
      $$invalidate(6, friendly = $$new_props.friendly);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 4096) {
      if (label != void 0) {
        $$invalidate(6, friendly = {
          label,
          direction: "y",
          type: isCategorical ? "categorical" : "continuous",
          ticks: isCategorical ? "text.category-tick" : "text.tick"
        });
      }
    }
  };
  return [
    ticks,
    showDomainLine,
    showGridLines,
    showTickLines,
    tickLength,
    tickLabelPadding,
    friendly,
    $yScale,
    yScale,
    isCategorical,
    $$restProps,
    n,
    label,
    slots,
    $$scope
  ];
}
class AxisY extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      n: 11,
      ticks: 0,
      showDomainLine: 1,
      showGridLines: 2,
      showTickLines: 3,
      tickLength: 4,
      tickLabelPadding: 5,
      label: 12
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AxisY",
      options,
      id: create_fragment$7.name
    });
  }
  get n() {
    throw new Error("<AxisY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set n(value) {
    throw new Error("<AxisY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get ticks() {
    throw new Error("<AxisY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set ticks(value) {
    throw new Error("<AxisY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get showDomainLine() {
    throw new Error("<AxisY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showDomainLine(value) {
    throw new Error("<AxisY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get showGridLines() {
    throw new Error("<AxisY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showGridLines(value) {
    throw new Error("<AxisY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get showTickLines() {
    throw new Error("<AxisY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showTickLines(value) {
    throw new Error("<AxisY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get tickLength() {
    throw new Error("<AxisY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set tickLength(value) {
    throw new Error("<AxisY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get tickLabelPadding() {
    throw new Error("<AxisY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set tickLabelPadding(value) {
    throw new Error("<AxisY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<AxisY>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<AxisY>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Path_svelte_svelte_type_style_lang = "";
const file$5 = "src/lib/components/layercake/Path.svelte";
function create_if_block$2(ctx) {
  let path;
  let path_levels = [ctx[10], { d: ctx[0] }];
  let path_data = {};
  for (let i = 0; i < path_levels.length; i += 1) {
    path_data = assign(path_data, path_levels[i]);
  }
  const block = {
    c: function create() {
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      path = claim_svg_element(nodes, "path", { d: true });
      children(path).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_svg_attributes(path, path_data);
      toggle_class(path, "outline", true);
      toggle_class(path, "s-b3VkDFTxFMeD", true);
      add_location(path, file$5, 68, 4, 1737);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, path, anchor);
    },
    p: function update(ctx2, dirty) {
      set_svg_attributes(path, path_data = get_spread_update(path_levels, [
        dirty & 1024 && ctx2[10],
        dirty & 1 && { d: ctx2[0] }
      ]));
      toggle_class(path, "outline", true);
      toggle_class(path, "s-b3VkDFTxFMeD", true);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(path);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(68:2) {#if outline !== 'none'}",
    ctx
  });
  return block;
}
function create_fragment$6(ctx) {
  let g;
  let path;
  let symbol_action;
  let fGroup_action;
  let mounted;
  let dispose;
  let if_block = ctx[3] !== "none" && create_if_block$2(ctx);
  let path_levels = [ctx[10], { d: ctx[0] }];
  let path_data = {};
  for (let i = 0; i < path_levels.length; i += 1) {
    path_data = assign(path_data, path_levels[i]);
  }
  const block = {
    c: function create() {
      g = svg_element("g");
      if (if_block)
        if_block.c();
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      g = claim_svg_element(nodes, "g", { class: true });
      var g_nodes = children(g);
      if (if_block)
        if_block.l(g_nodes);
      path = claim_svg_element(g_nodes, "path", { d: true });
      children(path).forEach(detach_dev);
      g_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_svg_attributes(path, path_data);
      toggle_class(path, "s-b3VkDFTxFMeD", true);
      add_location(path, file$5, 70, 2, 1798);
      attr_dev(g, "class", "path s-b3VkDFTxFMeD");
      set_style(g, "--_color", ctx[10].stroke || ctx[1] || "");
      set_style(g, "--_width", ctx[10]["stroke-width"] || ctx[2] || "");
      set_style(g, "--_outline", ctx[3] || "");
      set_style(g, "--_outline-width", ctx[9] || "");
      set_style(g, "--_opacity", ctx[10].opacity || "");
      add_location(g, file$5, 57, 0, 1393);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, g, anchor);
      if (if_block)
        if_block.m(g, null);
      append_hydration_dev(g, path);
      if (!mounted) {
        dispose = [
          action_destroyer(symbol_action = symbol.call(null, g, ctx[7])),
          action_destroyer(fGroup_action = group.call(null, g, ctx[8]))
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (ctx2[3] !== "none") {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          if_block.m(g, path);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      set_svg_attributes(path, path_data = get_spread_update(path_levels, [
        dirty & 1024 && ctx2[10],
        dirty & 1 && { d: ctx2[0] }
      ]));
      toggle_class(path, "s-b3VkDFTxFMeD", true);
      if (symbol_action && is_function(symbol_action.update) && dirty & 128)
        symbol_action.update.call(null, ctx2[7]);
      if (fGroup_action && is_function(fGroup_action.update) && dirty & 256)
        fGroup_action.update.call(null, ctx2[8]);
      if (dirty & 1026) {
        set_style(g, "--_color", ctx2[10].stroke || ctx2[1] || "");
      }
      if (dirty & 1028) {
        set_style(g, "--_width", ctx2[10]["stroke-width"] || ctx2[2] || "");
      }
      if (dirty & 8) {
        set_style(g, "--_outline", ctx2[3] || "");
      }
      if (dirty & 512) {
        set_style(g, "--_outline-width", ctx2[9] || "");
      }
      if (dirty & 1024) {
        set_style(g, "--_opacity", ctx2[10].opacity || "");
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(g);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props, $$invalidate) {
  let outlineWidth;
  const omit_props_names = [
    "color",
    "width",
    "outline",
    "d",
    "data",
    "xIndex",
    "yIndex",
    "group",
    "label",
    "parent"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $yGet, $$unsubscribe_yGet = noop, $$subscribe_yGet = () => ($$unsubscribe_yGet(), $$unsubscribe_yGet = subscribe(yGet, ($$value) => $$invalidate(17, $yGet = $$value)), yGet);
  let $xGet, $$unsubscribe_xGet = noop, $$subscribe_xGet = () => ($$unsubscribe_xGet(), $$unsubscribe_xGet = subscribe(xGet, ($$value) => $$invalidate(18, $xGet = $$value)), xGet);
  let $ctxData, $$unsubscribe_ctxData = noop, $$subscribe_ctxData = () => ($$unsubscribe_ctxData(), $$unsubscribe_ctxData = subscribe(ctxData, ($$value) => $$invalidate(19, $ctxData = $$value)), ctxData);
  $$self.$$.on_destroy.push(() => $$unsubscribe_yGet());
  $$self.$$.on_destroy.push(() => $$unsubscribe_xGet());
  $$self.$$.on_destroy.push(() => $$unsubscribe_ctxData());
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Path", slots, []);
  let { color = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { outline = void 0 } = $$props;
  let { d = void 0 } = $$props;
  let { data = void 0 } = $$props;
  let { xIndex = 0 } = $$props;
  let { yIndex = 0 } = $$props;
  let { group: group$1 = false } = $$props;
  let { label = void 0 } = $$props;
  let { parent = void 0 } = $$props;
  const ctx = getContext("LayerCake");
  let ctxData, xGet, yGet;
  let friendlyS;
  let friendlyG;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("width" in $$new_props)
      $$invalidate(2, width = $$new_props.width);
    if ("outline" in $$new_props)
      $$invalidate(3, outline = $$new_props.outline);
    if ("d" in $$new_props)
      $$invalidate(0, d = $$new_props.d);
    if ("data" in $$new_props)
      $$invalidate(11, data = $$new_props.data);
    if ("xIndex" in $$new_props)
      $$invalidate(12, xIndex = $$new_props.xIndex);
    if ("yIndex" in $$new_props)
      $$invalidate(13, yIndex = $$new_props.yIndex);
    if ("group" in $$new_props)
      $$invalidate(14, group$1 = $$new_props.group);
    if ("label" in $$new_props)
      $$invalidate(15, label = $$new_props.label);
    if ("parent" in $$new_props)
      $$invalidate(16, parent = $$new_props.parent);
  };
  $$self.$capture_state = () => ({
    getContext,
    symbol,
    fGroup: group,
    d3line,
    get,
    color,
    width,
    outline,
    d,
    data,
    xIndex,
    yIndex,
    group: group$1,
    label,
    parent,
    ctx,
    ctxData,
    xGet,
    yGet,
    friendlyS,
    friendlyG,
    outlineWidth,
    $yGet,
    $xGet,
    $ctxData
  });
  $$self.$inject_state = ($$new_props) => {
    if ("color" in $$props)
      $$invalidate(1, color = $$new_props.color);
    if ("width" in $$props)
      $$invalidate(2, width = $$new_props.width);
    if ("outline" in $$props)
      $$invalidate(3, outline = $$new_props.outline);
    if ("d" in $$props)
      $$invalidate(0, d = $$new_props.d);
    if ("data" in $$props)
      $$invalidate(11, data = $$new_props.data);
    if ("xIndex" in $$props)
      $$invalidate(12, xIndex = $$new_props.xIndex);
    if ("yIndex" in $$props)
      $$invalidate(13, yIndex = $$new_props.yIndex);
    if ("group" in $$props)
      $$invalidate(14, group$1 = $$new_props.group);
    if ("label" in $$props)
      $$invalidate(15, label = $$new_props.label);
    if ("parent" in $$props)
      $$invalidate(16, parent = $$new_props.parent);
    if ("ctxData" in $$props)
      $$subscribe_ctxData($$invalidate(4, ctxData = $$new_props.ctxData));
    if ("xGet" in $$props)
      $$subscribe_xGet($$invalidate(5, xGet = $$new_props.xGet));
    if ("yGet" in $$props)
      $$subscribe_yGet($$invalidate(6, yGet = $$new_props.yGet));
    if ("friendlyS" in $$props)
      $$invalidate(7, friendlyS = $$new_props.friendlyS);
    if ("friendlyG" in $$props)
      $$invalidate(8, friendlyG = $$new_props.friendlyG);
    if ("outlineWidth" in $$props)
      $$invalidate(9, outlineWidth = $$new_props.outlineWidth);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(9, outlineWidth = $$restProps["outline-width"]);
    if ($$self.$$.dirty & 931840) {
      if (ctx != void 0) {
        if (data == void 0) {
          $$subscribe_ctxData($$invalidate(4, ctxData = ctx.data));
          $$invalidate(11, data = $ctxData);
        }
        $$subscribe_xGet($$invalidate(5, xGet = ctx.xGet));
        $$subscribe_yGet($$invalidate(6, yGet = ctx.yGet));
        $$invalidate(0, d = d3line().x((d2) => get($xGet, d2, xIndex)).y((d2) => get($yGet, d2, yIndex))(data));
      }
    }
    if (label != void 0) {
      if (group$1) {
        if ($$restProps.id == void 0) {
          console.warn(`Specify an id for line with label "${label}"`);
        }
        $$invalidate(8, friendlyG = { id: $$restProps.id, type: "line", label });
      } else {
        $$invalidate(7, friendlyS = {
          id: $$restProps.id,
          type: "line",
          label,
          parentId: parent
        });
      }
    }
  };
  return [
    d,
    color,
    width,
    outline,
    ctxData,
    xGet,
    yGet,
    friendlyS,
    friendlyG,
    outlineWidth,
    $$restProps,
    data,
    xIndex,
    yIndex,
    group$1,
    label,
    parent,
    $yGet,
    $xGet,
    $ctxData
  ];
}
class Path extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      color: 1,
      width: 2,
      outline: 3,
      d: 0,
      data: 11,
      xIndex: 12,
      yIndex: 13,
      group: 14,
      label: 15,
      parent: 16
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Path",
      options,
      id: create_fragment$6.name
    });
  }
  get color() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get width() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set width(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get outline() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set outline(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get d() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set d(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get data() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set data(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get xIndex() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set xIndex(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get yIndex() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set yIndex(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get group() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set group(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get label() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set label(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get parent() {
    throw new Error("<Path>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set parent(value) {
    throw new Error("<Path>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const AreaY_story_svelte_svelte_type_style_lang = "";
const file$4 = "src/lib/components/layercake/AreaY.story.svelte";
function create_default_slot_6$1(ctx) {
  let axisx;
  let t0;
  let axisy;
  let t1;
  let areay;
  let t2;
  let path0;
  let t3;
  let path1;
  let current;
  axisx = new AxisX({ $$inline: true });
  axisy = new AxisY({ $$inline: true });
  areay = new AreaY({
    props: { data: ctx[1] },
    $$inline: true
  });
  path0 = new Path({
    props: { outline: "none" },
    $$inline: true
  });
  path1 = new Path({
    props: { yIndex: 1, outline: "none" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(axisx.$$.fragment);
      t0 = space();
      create_component(axisy.$$.fragment);
      t1 = space();
      create_component(areay.$$.fragment);
      t2 = space();
      create_component(path0.$$.fragment);
      t3 = space();
      create_component(path1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(axisx.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(axisy.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(areay.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(path0.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(path1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(axisx, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(axisy, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(areay, target, anchor);
      insert_hydration_dev(target, t2, anchor);
      mount_component(path0, target, anchor);
      insert_hydration_dev(target, t3, anchor);
      mount_component(path1, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(axisx.$$.fragment, local);
      transition_in(axisy.$$.fragment, local);
      transition_in(areay.$$.fragment, local);
      transition_in(path0.$$.fragment, local);
      transition_in(path1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(axisx.$$.fragment, local);
      transition_out(axisy.$$.fragment, local);
      transition_out(areay.$$.fragment, local);
      transition_out(path0.$$.fragment, local);
      transition_out(path1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(axisx, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(axisy, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(areay, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(path0, detaching);
      if (detaching)
        detach_dev(t3);
      destroy_component(path1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_6$1.name,
    type: "slot",
    source: "(26:8) <Svg>",
    ctx
  });
  return block;
}
function create_default_slot_5$1(ctx) {
  let svg;
  let current;
  svg = new Svg({
    props: {
      $$slots: { default: [create_default_slot_6$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(svg.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(svg.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(svg, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const svg_changes = {};
      if (dirty & 4) {
        svg_changes.$$scope = { dirty, ctx: ctx2 };
      }
      svg.$set(svg_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(svg.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(svg.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(svg, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_5$1.name,
    type: "slot",
    source: `(20:6) <LayerCake         {data}         padding={{ top: 6, right: 8, bottom: 24, left: 24 }}         x=\\"x\\"         y={['y1', 'y2']}       >`,
    ctx
  });
  return block;
}
function create_default_slot_4$2(ctx) {
  let div;
  let layercake;
  let current;
  layercake = new LayerCake({
    props: {
      data: ctx[1],
      padding: { top: 6, right: 8, bottom: 24, left: 24 },
      x: "x",
      y: ["y1", "y2"],
      $$slots: { default: [create_default_slot_5$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(layercake.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(layercake.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "layercake s-XPhbm_Rsj7wq");
      add_location(div, file$4, 18, 4, 603);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(layercake, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const layercake_changes = {};
      if (dirty & 4) {
        layercake_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layercake.$set(layercake_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(layercake.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(layercake.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(layercake);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4$2.name,
    type: "slot",
    source: '(18:2) <Hst.Variant title=\\"Within chart\\">',
    ctx
  });
  return block;
}
function create_default_slot_3$2(ctx) {
  let areay;
  let current;
  areay = new AreaY({
    props: { data: ctx[1] },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(areay.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(areay.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(areay, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(areay.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(areay.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(areay, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$2.name,
    type: "slot",
    source: "(45:8) <Svg>",
    ctx
  });
  return block;
}
function create_default_slot_2$2(ctx) {
  let svg;
  let current;
  svg = new Svg({
    props: {
      $$slots: { default: [create_default_slot_3$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(svg.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(svg.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(svg, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const svg_changes = {};
      if (dirty & 4) {
        svg_changes.$$scope = { dirty, ctx: ctx2 };
      }
      svg.$set(svg_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(svg.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(svg.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(svg, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$2.name,
    type: "slot",
    source: `(39:6) <LayerCake         {data}         padding={{ top: 6, right: 6, bottom: 24, left: 24 }}         x=\\"x\\"         y={['y1', 'y2']}       >`,
    ctx
  });
  return block;
}
function create_default_slot_1$2(ctx) {
  let div;
  let layercake;
  let current;
  layercake = new LayerCake({
    props: {
      data: ctx[1],
      padding: { top: 6, right: 6, bottom: 24, left: 24 },
      x: "x",
      y: ["y1", "y2"],
      $$slots: { default: [create_default_slot_2$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(layercake.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(layercake.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "layercake s-XPhbm_Rsj7wq");
      add_location(div, file$4, 37, 4, 1029);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(layercake, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const layercake_changes = {};
      if (dirty & 4) {
        layercake_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layercake.$set(layercake_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(layercake.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(layercake.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(layercake);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$2.name,
    type: "slot",
    source: '(37:2) <Hst.Variant title=\\"Shape only\\">',
    ctx
  });
  return block;
}
function create_default_slot$2(ctx) {
  let hst_variant0;
  let t;
  let hst_variant1;
  let current;
  hst_variant0 = new ctx[0].Variant({
    props: {
      title: "Within chart",
      $$slots: { default: [create_default_slot_4$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new ctx[0].Variant({
    props: {
      title: "Shape only",
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t = space();
      create_component(hst_variant1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_variant0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(hst_variant1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_hydration_dev(target, t, anchor);
      mount_component(hst_variant1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & 4) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & 4) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_variant1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: '(17:0) <Hst.Story title=\\"LayerCake/AreaY\\">',
    ctx
  });
  return block;
}
function create_fragment$5(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      title: "LayerCake/AreaY",
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 4) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AreaY_story", slots, []);
  let { Hst } = $$props;
  let data = [
    { x: 0, y1: 10, y2: 5 },
    { x: 10, y1: 30, y2: 10 },
    { x: 20, y1: 25, y2: 25 },
    { x: 30, y1: 50, y2: 40 },
    { x: 40, y1: 10, y2: 25 },
    { x: 50, y1: 0, y2: 15 }
  ];
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<AreaY_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<AreaY_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Hst,
    LayerCake,
    Svg,
    AreaY,
    AxisX,
    AxisY,
    Path,
    data
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("data" in $$props2)
      $$invalidate(1, data = $$props2.data);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, data];
}
class AreaY_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AreaY_story",
      options,
      id: create_fragment$5.name
    });
  }
  get Hst() {
    throw new Error("<AreaY_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<AreaY_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Button_svelte_svelte_type_style_lang = "";
const file$3 = "src/lib/components/shared/Button.svelte";
function fallback_block$1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Label missing");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Label missing");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: fallback_block$1.name,
    type: "fallback",
    source: "(12:8) Label missing",
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let button;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  const default_slot_or_fallback = default_slot || fallback_block$1(ctx);
  let button_levels = [
    { type: "button" },
    ctx[1],
    { "data-variant": ctx[0] }
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  const block = {
    c: function create() {
      button = element("button");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true, "data-variant": true });
      var button_nodes = children(button);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(button_nodes);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(button, button_data);
      toggle_class(button, "button", true);
      toggle_class(button, "s-e-ddGKLCeTu1", true);
      add_location(button, file$3, 4, 0, 76);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, button, anchor);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(button, null);
      }
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen_dev(button, "click", ctx[4], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[2],
            !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null),
            null
          );
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        { type: "button" },
        dirty & 2 && ctx2[1],
        (!current || dirty & 1) && { "data-variant": ctx2[0] }
      ]));
      toggle_class(button, "button", true);
      toggle_class(button, "s-e-ddGKLCeTu1", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  const omit_props_names = ["variant"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Button", slots, ["default"]);
  let { variant = "primary" } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("variant" in $$new_props)
      $$invalidate(0, variant = $$new_props.variant);
    if ("$$scope" in $$new_props)
      $$invalidate(2, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({ variant });
  $$self.$inject_state = ($$new_props) => {
    if ("variant" in $$props)
      $$invalidate(0, variant = $$new_props.variant);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [variant, $$restProps, $$scope, slots, click_handler];
}
class Button extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { variant: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Button",
      options,
      id: create_fragment$4.name
    });
  }
  get variant() {
    throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set variant(value) {
    throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$2 = "src/lib/components/icons/SearchIcon.svelte";
function create_if_block$1(ctx) {
  let title_1;
  let t;
  const block = {
    c: function create() {
      title_1 = svg_element("title");
      t = text(ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      title_1 = claim_svg_element(nodes, "title", { id: true });
      var title_1_nodes = children(title_1);
      t = claim_text(title_1_nodes, ctx[0]);
      title_1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(title_1, "id", ctx[1]);
      add_location(title_1, file$2, 20, 4, 419);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, title_1, anchor);
      append_hydration_dev(title_1, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 1)
        set_data_dev(t, ctx2[0]);
      if (dirty & 2) {
        attr_dev(title_1, "id", ctx2[1]);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(title_1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(20:2) {#if title}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let svg;
  let path;
  let svg_aria_labelledby_value;
  let svg_aria_hidden_value;
  let if_block = ctx[0] && create_if_block$1(ctx);
  const block = {
    c: function create() {
      svg = svg_element("svg");
      if (if_block)
        if_block.c();
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        role: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true,
        style: true,
        "aria-labelledby": true,
        "aria-hidden": true
      });
      var svg_nodes = children(svg);
      if (if_block)
        if_block.l(svg_nodes);
      path = claim_svg_element(svg_nodes, "path", {
        "fill-rule": true,
        "clip-rule": true,
        d: true,
        fill: true
      });
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill-rule", "evenodd");
      attr_dev(path, "clip-rule", "evenodd");
      attr_dev(path, "d", "m13.02 30.005-1.95-.427 1.77-8.089C8.87 20.164 6 16.414 6 12 6 6.48 10.48 2 16 2s10 4.48 10 10c0 5.519-4.48 10-10 10-.41 0-.81-.025-1.21-.073l-1.77 8.078ZM16 4c-4.41 0-8 3.584-8 8 0 4.415 3.59 8 8 8s8-3.585 8-8c0-4.416-3.59-8-8-8Zm-6.02 8.017c0-3.319 2.7-6.014 6.02-6.014v2a4.018 4.018 0 0 0-4.02 4.014h-2Z");
      attr_dev(path, "fill", ctx[2]);
      add_location(path, file$2, 22, 2, 457);
      attr_dev(svg, "role", "img");
      attr_dev(svg, "width", "32");
      attr_dev(svg, "height", "32");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "viewBox", "0 0 32 32");
      set_style(svg, "fill-rule", "evenodd");
      set_style(svg, "clip-rule", "evenodd");
      set_style(svg, "stroke-linejoin", "round");
      set_style(svg, "stroke-miterlimit", "2");
      attr_dev(svg, "aria-labelledby", svg_aria_labelledby_value = ctx[0] && ctx[1]);
      attr_dev(svg, "aria-hidden", svg_aria_hidden_value = ctx[0] === void 0);
      add_location(svg, file$2, 9, 0, 162);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      if (if_block)
        if_block.m(svg, null);
      append_hydration_dev(svg, path);
    },
    p: function update(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(svg, path);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 4) {
        attr_dev(path, "fill", ctx2[2]);
      }
      if (dirty & 3 && svg_aria_labelledby_value !== (svg_aria_labelledby_value = ctx2[0] && ctx2[1])) {
        attr_dev(svg, "aria-labelledby", svg_aria_labelledby_value);
      }
      if (dirty & 1 && svg_aria_hidden_value !== (svg_aria_hidden_value = ctx2[0] === void 0)) {
        attr_dev(svg, "aria-hidden", svg_aria_hidden_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SearchIcon", slots, []);
  let { title = void 0 } = $$props;
  let { id = "search-icon--title" } = $$props;
  let { color = "#000000" } = $$props;
  const writable_props = ["title", "id", "color"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<SearchIcon> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("id" in $$props2)
      $$invalidate(1, id = $$props2.id);
    if ("color" in $$props2)
      $$invalidate(2, color = $$props2.color);
  };
  $$self.$capture_state = () => ({ title, id, color });
  $$self.$inject_state = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("id" in $$props2)
      $$invalidate(1, id = $$props2.id);
    if ("color" in $$props2)
      $$invalidate(2, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [title, id, color];
}
class SearchIcon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { title: 0, id: 1, color: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SearchIcon",
      options,
      id: create_fragment$3.name
    });
  }
  get title() {
    throw new Error("<SearchIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value) {
    throw new Error("<SearchIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get id() {
    throw new Error("<SearchIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set id(value) {
    throw new Error("<SearchIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get color() {
    throw new Error("<SearchIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<SearchIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Button_story_svelte_svelte_type_style_lang = "";
const file$1 = "src/lib/components/shared/Button.story.svelte";
function create_default_slot_12(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[1]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx[1]);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 2)
        set_data_dev(t, ctx2[1]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(15:4) <Button {variant} {disabled} on:click={handleClick}>",
    ctx
  });
  return block;
}
function create_default_slot_11(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      variant: ctx[2],
      disabled: ctx[3],
      $$slots: { default: [create_default_slot_12] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on("click", ctx[4]);
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 4)
        button_changes.variant = ctx2[2];
      if (dirty & 8)
        button_changes.disabled = ctx2[3];
      if (dirty & 258) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_11.name,
    type: "slot",
    source: '(14:2) <Hst.Variant title=\\"Basic\\">',
    ctx
  });
  return block;
}
function create_default_slot_10(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[1]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx[1]);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 2)
        set_data_dev(t, ctx2[1]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_10.name,
    type: "slot",
    source: '(21:4) <Button {variant} {disabled} on:click={handleClick} class=\\"w-full\\">',
    ctx
  });
  return block;
}
function create_default_slot_9(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      variant: ctx[2],
      disabled: ctx[3],
      class: "w-full",
      $$slots: { default: [create_default_slot_10] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on("click", ctx[4]);
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 4)
        button_changes.variant = ctx2[2];
      if (dirty & 8)
        button_changes.disabled = ctx2[3];
      if (dirty & 258) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_9.name,
    type: "slot",
    source: '(20:2) <Hst.Variant title=\\"Full width\\">',
    ctx
  });
  return block;
}
function create_default_slot_8(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[1]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx[1]);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 2)
        set_data_dev(t, ctx2[1]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_8.name,
    type: "slot",
    source: '(27:4) <Button       {variant}       {disabled}       class=\\"button-with-custom-color\\"       on:click={handleClick}     >',
    ctx
  });
  return block;
}
function create_default_slot_7(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      variant: ctx[2],
      disabled: ctx[3],
      class: "button-with-custom-color",
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on("click", ctx[4]);
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 4)
        button_changes.variant = ctx2[2];
      if (dirty & 8)
        button_changes.disabled = ctx2[3];
      if (dirty & 258) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_7.name,
    type: "slot",
    source: '(26:2) <Hst.Variant title=\\"Custom accent color\\">',
    ctx
  });
  return block;
}
function create_default_slot_6(ctx) {
  let searchicon;
  let current;
  searchicon = new SearchIcon({ $$inline: true });
  const block = {
    c: function create() {
      create_component(searchicon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(searchicon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(searchicon, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(searchicon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(searchicon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(searchicon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_6.name,
    type: "slot",
    source: '(38:4) <Button {variant} {disabled} class=\\"icon\\" aria-label=\\"Search\\">',
    ctx
  });
  return block;
}
function create_default_slot_5(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      variant: ctx[2],
      disabled: ctx[3],
      class: "icon",
      "aria-label": "Search",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 4)
        button_changes.variant = ctx2[2];
      if (dirty & 8)
        button_changes.disabled = ctx2[3];
      if (dirty & 256) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_5.name,
    type: "slot",
    source: '(37:2) <Hst.Variant title=\\"With icon\\">',
    ctx
  });
  return block;
}
function create_default_slot_4$1(ctx) {
  let searchicon;
  let current;
  searchicon = new SearchIcon({ $$inline: true });
  const block = {
    c: function create() {
      create_component(searchicon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(searchicon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(searchicon, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(searchicon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(searchicon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(searchicon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4$1.name,
    type: "slot",
    source: '(44:4) <Button {variant} {disabled} class=\\"icon round\\" aria-label=\\"Search\\">',
    ctx
  });
  return block;
}
function create_default_slot_3$1(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      variant: ctx[2],
      disabled: ctx[3],
      class: "icon round",
      "aria-label": "Search",
      $$slots: { default: [create_default_slot_4$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 4)
        button_changes.variant = ctx2[2];
      if (dirty & 8)
        button_changes.disabled = ctx2[3];
      if (dirty & 256) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3$1.name,
    type: "slot",
    source: '(43:2) <Hst.Variant title=\\"Round with icon\\">',
    ctx
  });
  return block;
}
function create_default_slot_2$1(ctx) {
  let div;
  let searchicon;
  let t0;
  let span;
  let t1;
  let current;
  searchicon = new SearchIcon({ $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      create_component(searchicon.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(ctx[1]);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(searchicon.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      span = claim_element(div_nodes, "SPAN", {});
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, ctx[1]);
      span_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span, file$1, 52, 8, 1312);
      attr_dev(div, "class", "splitter align-center");
      add_location(div, file$1, 50, 6, 1245);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(searchicon, div, null);
      append_hydration_dev(div, t0);
      append_hydration_dev(div, span);
      append_hydration_dev(span, t1);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (!current || dirty & 2)
        set_data_dev(t1, ctx2[1]);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(searchicon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(searchicon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(searchicon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: "(50:4) <Button {variant} {disabled}>",
    ctx
  });
  return block;
}
function create_default_slot_1$1(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      variant: ctx[2],
      disabled: ctx[3],
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 4)
        button_changes.variant = ctx2[2];
      if (dirty & 8)
        button_changes.disabled = ctx2[3];
      if (dirty & 258) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(49:2) <Hst.Variant title=\\"Icon and text\\">',
    ctx
  });
  return block;
}
function create_default_slot$1(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let t2;
  let hst_variant3;
  let t3;
  let hst_variant4;
  let t4;
  let hst_variant5;
  let current;
  hst_variant0 = new ctx[0].Variant({
    props: {
      title: "Basic",
      $$slots: { default: [create_default_slot_11] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new ctx[0].Variant({
    props: {
      title: "Full width",
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new ctx[0].Variant({
    props: {
      title: "Custom accent color",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant3 = new ctx[0].Variant({
    props: {
      title: "With icon",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant4 = new ctx[0].Variant({
    props: {
      title: "Round with icon",
      $$slots: { default: [create_default_slot_3$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant5 = new ctx[0].Variant({
    props: {
      title: "Icon and text",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t0 = space();
      create_component(hst_variant1.$$.fragment);
      t1 = space();
      create_component(hst_variant2.$$.fragment);
      t2 = space();
      create_component(hst_variant3.$$.fragment);
      t3 = space();
      create_component(hst_variant4.$$.fragment);
      t4 = space();
      create_component(hst_variant5.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_variant0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(hst_variant1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(hst_variant2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(hst_variant3.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(hst_variant4.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(hst_variant5.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(hst_variant1, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(hst_variant2, target, anchor);
      insert_hydration_dev(target, t2, anchor);
      mount_component(hst_variant3, target, anchor);
      insert_hydration_dev(target, t3, anchor);
      mount_component(hst_variant4, target, anchor);
      insert_hydration_dev(target, t4, anchor);
      mount_component(hst_variant5, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & 270) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & 270) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty & 270) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
      const hst_variant3_changes = {};
      if (dirty & 268) {
        hst_variant3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant3.$set(hst_variant3_changes);
      const hst_variant4_changes = {};
      if (dirty & 268) {
        hst_variant4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant4.$set(hst_variant4_changes);
      const hst_variant5_changes = {};
      if (dirty & 270) {
        hst_variant5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant5.$set(hst_variant5_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      transition_in(hst_variant2.$$.fragment, local);
      transition_in(hst_variant3.$$.fragment, local);
      transition_in(hst_variant4.$$.fragment, local);
      transition_in(hst_variant5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      transition_out(hst_variant2.$$.fragment, local);
      transition_out(hst_variant3.$$.fragment, local);
      transition_out(hst_variant4.$$.fragment, local);
      transition_out(hst_variant5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_variant1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_variant2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_variant3, detaching);
      if (detaching)
        detach_dev(t3);
      destroy_component(hst_variant4, detaching);
      if (detaching)
        detach_dev(t4);
      destroy_component(hst_variant5, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: '(13:0) <Hst.Story title=\\"User Interface/Button\\">',
    ctx
  });
  return block;
}
function create_controls_slot$1(ctx) {
  let hst_text;
  let updating_value;
  let t0;
  let hst_radio;
  let updating_value_1;
  let t1;
  let hst_checkbox;
  let updating_value_2;
  let current;
  function hst_text_value_binding(value) {
    ctx[5](value);
  }
  let hst_text_props = { title: "Content" };
  if (ctx[1] !== void 0) {
    hst_text_props.value = ctx[1];
  }
  hst_text = new ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding, ctx[1]));
  function hst_radio_value_binding(value) {
    ctx[6](value);
  }
  let hst_radio_props = {
    title: "Variant",
    options: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Tertiary", value: "tertiary" }
    ]
  };
  if (ctx[2] !== void 0) {
    hst_radio_props.value = ctx[2];
  }
  hst_radio = new ctx[0].Radio({ props: hst_radio_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_radio, "value", hst_radio_value_binding, ctx[2]));
  function hst_checkbox_value_binding(value) {
    ctx[7](value);
  }
  let hst_checkbox_props = { title: "Disabled" };
  if (ctx[3] !== void 0) {
    hst_checkbox_props.value = ctx[3];
  }
  hst_checkbox = new ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding, ctx[3]));
  const block = {
    c: function create() {
      create_component(hst_text.$$.fragment);
      t0 = space();
      create_component(hst_radio.$$.fragment);
      t1 = space();
      create_component(hst_checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_text.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(hst_radio.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(hst_checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(hst_radio, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        hst_text_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text.$set(hst_text_changes);
      const hst_radio_changes = {};
      if (!updating_value_1 && dirty & 4) {
        updating_value_1 = true;
        hst_radio_changes.value = ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_radio.$set(hst_radio_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_2 && dirty & 8) {
        updating_value_2 = true;
        hst_checkbox_changes.value = ctx2[3];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text.$$.fragment, local);
      transition_in(hst_radio.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text.$$.fragment, local);
      transition_out(hst_radio.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_radio, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$1.name,
    type: "slot",
    source: '(58:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      title: "User Interface/Button",
      $$slots: {
        controls: [create_controls_slot$1],
        default: [create_default_slot$1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 270) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Button_story", slots, []);
  let { Hst } = $$props;
  let content = "Content";
  let variant = "primary";
  let disabled = false;
  function handleClick(e) {
    logEvent("click", e);
  }
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Button_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Button_story> was created with unknown prop '${key}'`);
  });
  function hst_text_value_binding(value) {
    content = value;
    $$invalidate(1, content);
  }
  function hst_radio_value_binding(value) {
    variant = value;
    $$invalidate(2, variant);
  }
  function hst_checkbox_value_binding(value) {
    disabled = value;
    $$invalidate(3, disabled);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    logEvent,
    Hst,
    Button,
    SearchIcon,
    content,
    variant,
    disabled,
    handleClick
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("content" in $$props2)
      $$invalidate(1, content = $$props2.content);
    if ("variant" in $$props2)
      $$invalidate(2, variant = $$props2.variant);
    if ("disabled" in $$props2)
      $$invalidate(3, disabled = $$props2.disabled);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    content,
    variant,
    disabled,
    handleClick,
    hst_text_value_binding,
    hst_radio_value_binding,
    hst_checkbox_value_binding
  ];
}
class Button_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Button_story",
      options,
      id: create_fragment$2.name
    });
  }
  get Hst() {
    throw new Error("<Button_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Button_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const ChartHeader_svelte_svelte_type_style_lang = "";
const file = "src/lib/components/shared/ChartHeader.svelte";
const get_subtitle_slot_changes = (dirty) => ({});
const get_subtitle_slot_context = (ctx) => ({});
const get_title_slot_changes = (dirty) => ({});
const get_title_slot_context = (ctx) => ({});
function create_if_block_2(ctx) {
  let current;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  const block = {
    c: function create() {
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
    },
    l: function claim(nodes) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[2],
            !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(19:4) {#if $$slots.default}",
    ctx
  });
  return block;
}
function fallback_block(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Title missing");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Title missing");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(20:12) Title missing",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let current;
  const title_slot_template = ctx[3].title;
  const title_slot = create_slot(title_slot_template, ctx, ctx[2], get_title_slot_context);
  const block = {
    c: function create() {
      if (title_slot)
        title_slot.c();
    },
    l: function claim(nodes) {
      if (title_slot)
        title_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (title_slot) {
        title_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & 4)) {
          update_slot_base(
            title_slot,
            title_slot_template,
            ctx2,
            ctx2[2],
            !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(title_slot_template, ctx2[2], dirty, get_title_slot_changes),
            get_title_slot_context
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(title_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (title_slot)
        title_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(22:4) {#if $$slots.title}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let p;
  let current;
  const subtitle_slot_template = ctx[3].subtitle;
  const subtitle_slot = create_slot(subtitle_slot_template, ctx, ctx[2], get_subtitle_slot_context);
  const block = {
    c: function create() {
      p = element("p");
      if (subtitle_slot)
        subtitle_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      if (subtitle_slot)
        subtitle_slot.l(p_nodes);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "chart-header__subtitle s-ftBKZZ-Zdn0h");
      add_location(p, file, 27, 4, 538);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, p, anchor);
      if (subtitle_slot) {
        subtitle_slot.m(p, null);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (subtitle_slot) {
        if (subtitle_slot.p && (!current || dirty & 4)) {
          update_slot_base(
            subtitle_slot,
            subtitle_slot_template,
            ctx2,
            ctx2[2],
            !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(subtitle_slot_template, ctx2[2], dirty, get_subtitle_slot_changes),
            get_subtitle_slot_context
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(subtitle_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(subtitle_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
      if (subtitle_slot)
        subtitle_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(27:2) {#if $$slots.subtitle}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let hgroup;
  let h2;
  let t0;
  let t1;
  let hgroup_class_value;
  let hgroup_style_value;
  let current;
  let if_block0 = ctx[1].default && create_if_block_2(ctx);
  let if_block1 = ctx[1].title && create_if_block_1(ctx);
  let if_block2 = ctx[1].subtitle && create_if_block(ctx);
  const block = {
    c: function create() {
      hgroup = element("hgroup");
      h2 = element("h2");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      this.h();
    },
    l: function claim(nodes) {
      hgroup = claim_element(nodes, "HGROUP", { class: true, style: true });
      var hgroup_nodes = children(hgroup);
      h2 = claim_element(hgroup_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      if (if_block0)
        if_block0.l(h2_nodes);
      t0 = claim_space(h2_nodes);
      if (if_block1)
        if_block1.l(h2_nodes);
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(hgroup_nodes);
      if (if_block2)
        if_block2.l(hgroup_nodes);
      hgroup_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "chart-header__title s-ftBKZZ-Zdn0h");
      add_location(h2, file, 17, 2, 336);
      attr_dev(hgroup, "class", hgroup_class_value = null_to_empty(ctx[0].class) + " s-ftBKZZ-Zdn0h");
      attr_dev(hgroup, "style", hgroup_style_value = ctx[0].style);
      toggle_class(hgroup, "chart-header", true);
      add_location(hgroup, file, 12, 0, 240);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, hgroup, anchor);
      append_hydration_dev(hgroup, h2);
      if (if_block0)
        if_block0.m(h2, null);
      append_hydration_dev(h2, t0);
      if (if_block1)
        if_block1.m(h2, null);
      append_hydration_dev(hgroup, t1);
      if (if_block2)
        if_block2.m(hgroup, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (ctx2[1].default) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(h2, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[1].title) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(h2, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (ctx2[1].subtitle) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(hgroup, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (!current || dirty & 1 && hgroup_class_value !== (hgroup_class_value = null_to_empty(ctx2[0].class) + " s-ftBKZZ-Zdn0h")) {
        attr_dev(hgroup, "class", hgroup_class_value);
      }
      if (!current || dirty & 1 && hgroup_style_value !== (hgroup_style_value = ctx2[0].style)) {
        attr_dev(hgroup, "style", hgroup_style_value);
      }
      if (!current || dirty & 1) {
        toggle_class(hgroup, "chart-header", true);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(hgroup);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ChartHeader", slots, ["default", "title", "subtitle"]);
  const $$slots = compute_slots(slots);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(2, $$scope = $$new_props.$$scope);
  };
  return [$$restProps, $$slots, $$scope, slots];
}
class ChartHeader extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ChartHeader",
      options,
      id: create_fragment$1.name
    });
  }
}
function create_default_slot_4(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[1]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx[1]);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 2)
        set_data_dev(t, ctx2[1]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(9:4) <ChartHeader>",
    ctx
  });
  return block;
}
function create_default_slot_3(ctx) {
  let chartheader;
  let current;
  chartheader = new ChartHeader({
    props: {
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(chartheader.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chartheader.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chartheader, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const chartheader_changes = {};
      if (dirty & 66) {
        chartheader_changes.$$scope = { dirty, ctx: ctx2 };
      }
      chartheader.$set(chartheader_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(chartheader.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chartheader.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chartheader, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3.name,
    type: "slot",
    source: '(8:2) <Hst.Variant title=\\"Title\\">',
    ctx
  });
  return block;
}
function create_controls_slot_1(ctx) {
  let hst_text;
  let updating_value;
  let current;
  function hst_text_value_binding(value) {
    ctx[3](value);
  }
  let hst_text_props = { title: "Title" };
  if (ctx[1] !== void 0) {
    hst_text_props.value = ctx[1];
  }
  hst_text = new ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding, ctx[1]));
  const block = {
    c: function create() {
      create_component(hst_text.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_text.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        hst_text_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text.$set(hst_text_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot_1.name,
    type: "slot",
    source: '(11:4) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot_2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[1]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx[1]);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 2)
        set_data_dev(t, ctx2[1]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(17:4) <ChartHeader>",
    ctx
  });
  return block;
}
function create_subtitle_slot(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[2]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx[2]);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 4)
        set_data_dev(t, ctx2[2]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_subtitle_slot.name,
    type: "slot",
    source: '(19:6) <svelte:fragment slot=\\"subtitle\\">',
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let chartheader;
  let current;
  chartheader = new ChartHeader({
    props: {
      $$slots: {
        subtitle: [create_subtitle_slot],
        default: [create_default_slot_2]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(chartheader.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(chartheader.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(chartheader, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const chartheader_changes = {};
      if (dirty & 70) {
        chartheader_changes.$$scope = { dirty, ctx: ctx2 };
      }
      chartheader.$set(chartheader_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(chartheader.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chartheader.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(chartheader, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(16:2) <Hst.Variant title=\\"With subtitle\\">',
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_text0;
  let updating_value;
  let t;
  let hst_text1;
  let updating_value_1;
  let current;
  function hst_text0_value_binding(value) {
    ctx[4](value);
  }
  let hst_text0_props = { title: "Title" };
  if (ctx[1] !== void 0) {
    hst_text0_props.value = ctx[1];
  }
  hst_text0 = new ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding, ctx[1]));
  function hst_text1_value_binding(value) {
    ctx[5](value);
  }
  let hst_text1_props = { title: "Subtitle" };
  if (ctx[2] !== void 0) {
    hst_text1_props.value = ctx[2];
  }
  hst_text1 = new ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding, ctx[2]));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t = space();
      create_component(hst_text1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_text0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(hst_text1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_hydration_dev(target, t, anchor);
      mount_component(hst_text1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        hst_text0_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & 4) {
        updating_value_1 = true;
        hst_text1_changes.value = ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_text1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(22:4) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let hst_variant0;
  let t;
  let hst_variant1;
  let current;
  hst_variant0 = new ctx[0].Variant({
    props: {
      title: "Title",
      $$slots: {
        controls: [create_controls_slot_1],
        default: [create_default_slot_3]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new ctx[0].Variant({
    props: {
      title: "With subtitle",
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot_1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t = space();
      create_component(hst_variant1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_variant0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(hst_variant1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_hydration_dev(target, t, anchor);
      mount_component(hst_variant1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & 66) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & 70) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(hst_variant1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(7:0) <Hst.Story title=\\"Viz/ChartHeader\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      title: "Viz/ChartHeader",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ChartHeader_story", slots, []);
  let { Hst } = $$props;
  let title = "Chart title";
  let subtitle = "Chart subtitle";
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<ChartHeader_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ChartHeader_story> was created with unknown prop '${key}'`);
  });
  function hst_text_value_binding(value) {
    title = value;
    $$invalidate(1, title);
  }
  function hst_text0_value_binding(value) {
    title = value;
    $$invalidate(1, title);
  }
  function hst_text1_value_binding(value) {
    subtitle = value;
    $$invalidate(2, subtitle);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Hst, ChartHeader, title, subtitle });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("subtitle" in $$props2)
      $$invalidate(2, subtitle = $$props2.subtitle);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    title,
    subtitle,
    hst_text_value_binding,
    hst_text0_value_binding,
    hst_text1_value_binding
  ];
}
class ChartHeader_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ChartHeader_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<ChartHeader_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ChartHeader_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Comp3 = { "title": "Introduction", "icon": "carbon:document-blank", "docsOnly": true, "variants": [] };
let files = [
  { "id": "src-lib-components-layercake-areay-story-svelte", "path": ["LayerCake", "AreaY"], "filePath": "src/lib/components/layercake/AreaY.story.svelte", "story": { "id": "src-lib-components-layercake-areay-story-svelte", "title": "AreaY", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-lib-components-layercake-areay-story-svelte-0", "title": "Within chart", "icon": null, "iconColor": null }, { "id": "src-lib-components-layercake-areay-story-svelte-1", "title": "Shape only", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 0, component: AreaY_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-components-layercake-areay-story-svelte-ced8e891.js"), true ? [] : void 0) },
  { "id": "src-lib-components-shared-button-story-svelte", "path": ["User Interface", "Button"], "filePath": "src/lib/components/shared/Button.story.svelte", "story": { "id": "src-lib-components-shared-button-story-svelte", "title": "Button", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-lib-components-shared-button-story-svelte-0", "title": "Basic", "icon": null, "iconColor": null }, { "id": "src-lib-components-shared-button-story-svelte-1", "title": "Full width", "icon": null, "iconColor": null }, { "id": "src-lib-components-shared-button-story-svelte-2", "title": "Custom accent color", "icon": null, "iconColor": null }, { "id": "src-lib-components-shared-button-story-svelte-3", "title": "With icon", "icon": null, "iconColor": null }, { "id": "src-lib-components-shared-button-story-svelte-4", "title": "Round with icon", "icon": null, "iconColor": null }, { "id": "src-lib-components-shared-button-story-svelte-5", "title": "Icon and text", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 1, component: Button_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-components-shared-button-story-svelte-c329a737.js"), true ? [] : void 0) },
  { "id": "src-lib-components-shared-chartheader-story-svelte", "path": ["Viz", "ChartHeader"], "filePath": "src/lib/components/shared/ChartHeader.story.svelte", "story": { "id": "src-lib-components-shared-chartheader-story-svelte", "title": "ChartHeader", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-lib-components-shared-chartheader-story-svelte-0", "title": "Title", "icon": null, "iconColor": null }, { "id": "src-lib-components-shared-chartheader-story-svelte-1", "title": "With subtitle", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 2, component: ChartHeader_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-components-shared-chartheader-story-svelte-5fde291f.js"), true ? [] : void 0) },
  { "id": "src-lib-components-introduction-story-js", "path": ["Introduction"], "filePath": "src/lib/components/Introduction.story.js", "story": { "id": "src-lib-components-introduction-story-js", "title": "Introduction", "layout": { "type": "single", "iframe": true }, "icon": "carbon:document-blank", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-components-introduction-story-js-160bf0d8.js"), true ? [] : void 0) }
];
let tree = [{ "title": "Introduction", "index": 3 }, { "title": "LayerCake", "children": [{ "title": "AreaY", "index": 0 }] }, { "title": "User Interface", "children": [{ "title": "Button", "index": 1 }] }, { "title": "Viz", "children": [{ "title": "ChartHeader", "index": 2 }] }];
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        Object.assign(result.story, __spreadProps(__spreadValues({}, file2.story), {
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        }));
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = __spreadProps(__spreadValues({}, file2), {
      component: markRaw(file2.component),
      story: __spreadProps(__spreadValues({}, file2.story), {
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      })
    });
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = __spreadProps(__spreadValues({}, variant), {
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    });
  }
  return result;
}
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __name: "GenericMountStory",
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
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
}));
export {
  _sfc_main as _,
  files as f,
  mapFile as m,
  tree as t
};

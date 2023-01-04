var __defProp = Object.defineProperty;
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
import { d as defineComponent, u as useCssVars, r as ref, bt as toRefs, bu as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, bc as markRaw, bQ as useFocus, k as watch, bR as refDebounced, c as computed, y as withDirectives, bw as vModelText, m as withKeys, bj as withModifiers, _ as __vitePreload, bS as flexsearch_bundleExports } from "./vendor-7db0712c.js";
import { u as useStoryStore } from "./story-582bb2d8.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-5d907a0c.js";
import { o as onKeyboardShortcut } from "./bundle-main-576d6908.js";
import { u as useScrollOnActive, B as BaseListItemLink, _ as _export_sfc } from "./MobileOverlay.vue2-275313ce.js";
import "./config-58fadf80.js";
import "./GenericMountStory.vue2-8e2fd5a7.js";
import "./__resolved__virtual__histoire-support-plugins-client-556e6aec.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = new RegExp("[\\p{Z}\\p{S}\\p{P}\\p{C}]+", "u");
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "beebbd52": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a2;
            var _a;
            return [
              createVNode(unref(Icon), {
                icon: (_a2 = __props.result.icon) != null ? _a2 : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_a = __props.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "htw-flex htw-items-center htw-gap-0.5"
                    }, [
                      index > 0 ? (openBlock(), createBlock(unref(Icon), {
                        key: 0,
                        icon: "carbon:chevron-right",
                        class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(p), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d95fcb03"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1,"101":1,"102":1,"103":1,"104":1,"105":1,"106":1,"107":1,"108":1,"109":1,"110":1,"111":1,"112":1,"113":1,"114":1,"115":1,"116":1,"117":1,"118":1,"119":1,"120":1,"121":1,"122":1,"123":1,"124":1,"125":1,"126":1,"127":1,"128":1,"129":1,"130":1,"131":1,"132":1,"133":1,"134":1,"135":1,"136":1,"137":1,"138":1,"139":1,"140":1,"141":1,"142":1,"143":1,"144":1,"145":1,"146":1,"147":1,"148":1,"149":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"a":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"ar":[0,1,2,3,4,5,6,7,8,9],"are":[0,1,2,3,4,5],"area":[0,1,2,3,4,5],"aro":[6,7,8,9],"arof":[6,7,8,9],"as":[10,11,12,13,14,15,16,17,18],"ase":[10,11,12,13,14,15,16,17,18],"ases":[10,11,12,13,14,15,16,17,18],"p":[19,20,21,22,23,24,25,26,51,52,53,54,69,70,71,72,73,74,75],"pa":[19,20,21,22,23,24,25,26,51,52,53,54],"par":[19,20,21,22,23,24,25,26],"k":[27,28,29,30,31,32,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93],"ke":[27,28,29,30,85,86,87,88,89,90,91,92,93],"ker":[27,28,29,30],"kerk":[27,28,29,30],"kerkl":[27,28,29,30],"kerkle":[27,28,29,30],"kr":[31,32],"kro":[31,32],"krop":[31,32],"t":[33,34,35,36,37,38,94,95,96,97,98,99,100,101,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148],"tm":[33,34,35,36,37,38],"tml":[33,34,35,36,37,38],"l":[39,40,41,42,43,44,45,46,47,48,49,50],"le":[39,40,41,42,43,44,45,46,47,48,49,50],"lem":[39,40,41,42,43,44,45,46,47,48,49,50],"leme":[39,40,41,42,43,44,45,46,47,48,49,50],"pat":[51,52,53,54],"r":[55,56,57,58,59,60,61,62,102,103,104,105,106,107,108,109],"re":[55,56,57,58,59,60,61,62],"rek":[55,56,57,58,59,60,61,62],"rekt":[55,56,57,58,59,60,61,62],"s":[63,64,65,66,67,68,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126],"sf":[63,64,65,66,67,68],"sfk":[63,64,65,66,67,68],"po":[69,70,71,72,73,74,75],"pot":[69,70,71,72,73,74,75],"poto":[69,70,71,72,73,74,75],"potom":[69,70,71,72,73,74,75],"ka":[76,77,78,79,80,81,82,83,84],"kar":[76,77,78,79,80,81,82,83,84],"kart":[76,77,78,79,80,81,82,83,84],"kek":[85,86,87,88,89,90,91,92,93],"tr":[94,95,96,97,98,99,100,101],"tro":[94,95,96,97,98,99,100,101],"trop":[94,95,96,97,98,99,100,101],"tropt":[94,95,96,97,98,99,100,101],"tropto":[94,95,96,97,98,99,100,101],"troptof":[94,95,96,97,98,99,100,101],"troptofm":[94,95,96,97,98,99,100,101],"ra":[102,103,104,105,106,107,108,109],"rat":[102,103,104,105,106,107,108,109],"rate":[102,103,104,105,106,107,108,109],"rateo":[102,103,104,105,106,107,108,109],"se":[110,111,112,113,114,115,116,117,118,119,120,121,122],"sea":[110,111,112,113,114,115,116],"sear":[110,111,112,113,114,115,116],"seark":[110,111,112,113,114,115,116],"sel":[117,118,119,120,121,122],"sele":[117,118,119,120,121,122],"selek":[117,118,119,120,121,122],"selekt":[117,118,119,120,121,122],"sl":[123,124,125,126],"sla":[123,124,125,126],"slam":[123,124,125,126],"slamt":[123,124,125,126],"ta":[127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148],"tap":[127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148],"tapl":[136,137,138,139],"taple":[136,137,138,139],"taps":[140,141,142,143,144,145,146,147,148],"e":[149],"em":[149],"emt":[149],"emtr":[149],"emtro":[149],"emtrot":[149],"emtroto":[149],"emtrotok":[149],"emtrotokt":[149],"emtrotokte":[149],"emtrotokteo":[149],"emtrotokteom":[149]},{"e":[0,1,2,3,4,5,17,18,75,78,79,80,96,100,101,116,122],"e0":[3,4,5],"p":[7,28,40,44,56,85,86,87,88,89,90,91,92,93,95,102,103,104,105,106,107,108,109,111,118,124,127,128,129,130,131,132,133,134,135,137,141],"pa":[7,28,40,44,56,70,95,111,118,124,127,128,129,130,131,132,133,134,135,137,141],"pas":[7,28,40,44,52,56,70,95,111,118,124,137,141],"pase":[7,28,40,44,52,56,70,95,111,118,124,137,141],"pasek":[7,28,40,44,52,56,70,95,111,118,124,137,141],"k":[8,41,45,53,57,72,98,112,120,139,143,144,146,147],"ko":[8,29,41,45,53,57,72,98,112,120,139,143,144,146,147],"kor":[8],"korf":[8],"korfe":[8],"f":[9,20,21,22,23,24,25,26,30,42,46,47,48,49,50,54,58,59,60,61,62,71,73,76,77,113,114,125,126,148],"fe":[9,20,21,22,30,42,46,54,58,73,125,126,148],"fet":[9,20,21,22,30,42,46,54,58,73,125,126,148],"fete":[9,20,30,42,46,54,58],"fetem":[9,20,30,42,46,54,58],"l":[10,11,12,13,81,82,83,84],"la":[10,11,12,13],"lap":[10,11,12,13],"lape":[10,11,12,13],"lapel":[10,11,12,13],"s":[14,15,16,97,142],"kos":[29,41,45,53,57,72,139,143,146,147],"kost":[29,41,45,53,57,72,139,143,146,147],"kosto":[29,41,45,53,57,72,139,143,146,147],"kostom":[29,41,45,53,57,72,139,143,146,147],"t":[32,63,64,65,66,67,68,121],"te":[32,33,34,35,36,37,38,63,64,65,66,67,68,99,121,145],"tef":[32],"tefa":[32],"tefao":[32],"tefaol":[32],"tefaolt":[32],"tes":[33,34,35,36,37,38,63,64,65,66,67,68,99,121,145],"test":[33,34,35,36,37,38,63,64,65,66,67,68],"fo":[71,76,77,113,114],"fol":[71],"r":[74,138],"ro":[74],"rom":[74],"romt":[74],"ek":[75],"eko":[75],"ekom":[75],"fot":[76,77],"fote":[76,77],"foter":[76,77],"ea":[78,79,80],"eat":[78,79,80],"eate":[78,79,80],"eater":[78,79,80],"le":[81,82,83,84],"lek":[81,82,83,84],"leke":[81,82,83,84],"lekem":[81,82,83,84],"lekemt":[81,82,83,84],"po":[85,86,87,88,89,90,91,92,93,102,103,104,105,106,107,108,109],"pos":[85,86,87,88,89,90,91,92,93],"pose":[85,86,87,88,89,90,91,92,93],"poses":[85,86,87,88,89,90,91,92,93],"em":[96],"eme":[96],"emet":[96],"emete":[96],"emetea":[96],"emeteal":[96],"emeteale":[96],"sp":[97,119,142],"spe":[97,119,142],"spek":[97,119,142],"speke":[97,119,142],"spekef":[97,119,142],"spekefe":[97,119,142],"kom":[98,112,120,144],"komp":[98,112,120,144],"kompl":[98,112,120,144],"komple":[98,112,120,144],"komples":[98,112,120,144],"tesa":[99,121,145],"tesap":[99,121,145],"tesapl":[99,121,145],"tesaple":[99,121,145],"tesaplet":[99,121,145],"et":[100,101,116,122],"ete":[100,101,116,122],"pot":[102,103,104,105,106,107,108,109],"poto":[102,103,104,105,106,107,108,109],"potom":[102,103,104,105,106,107,108,109],"potoms":[102,103,104,105,106,107,108,109],"fos":[113,114],"fose":[113,114],"a":[115],"as":[115],"ase":[115],"asem":[115],"asemk":[115],"pam":[127,128,129,130,131,132,133,134,135],"pame":[127,128,129,130,131,132,133,134,135],"pamel":[127,128,129,130,131,132,133,134,135],"pamels":[127,128,129,130,131,132,133,134,135],"re":[138],"rek":[138],"rekt":[138],"kostome":[139,147],"kostomes":[139,147],"kostomese":[139,147],"kostomeset":[139],"feto":[148],"fetot":[148]},{"f":[1,4,34,35,36,64,65,66,74,80,83,84,135],"fe":[1,4,24,25,26,34,35,36,50,62,64,65,66,71,74,80,83,84,135],"fet":[1,4,24,25,26,34,35,36,50,62,64,65,66,71,74,80,83,84,135],"fete":[1,4,24,34,50,62,64],"fetem":[1,4,24,34,50,62,64],"s":[2,5,10,11,87,104,129,148],"sa":[2,5],"sap":[2,5],"sape":[2,5],"k":[9,20,42,46,49,54,58,61,100,105,107,108,126,130,131,133,134],"ka":[9,20,30,42,46,54,58],"kar":[9,20,30,42,46,54,58],"kart":[9,20,30,42,46,54,58],"e":[12,13,73,92,97,109,119,142],"p":[15,48,60,82],"pa":[15,48,60,82,86,103],"pas":[15,48,60,82,86,103,128],"pase":[15,48,60,82,86,103,128],"pasek":[15,48,60,82,86,103,128],"o":[16,96,98,112,120],"om":[16],"t":[18,77,79,89,106,125],"te":[18,77,79,89,106,125,132],"tef":[18,77],"tefa":[18,77],"tefao":[18,77],"tefaol":[18,77],"tefaolt":[18,77],"a":[29,37,38,41,45,53,57,67,68,72,75,138,146,147],"at":[29,41,45,53,57],"atr":[29,41,45,53,57],"atre":[29,41,45,53,57],"atrep":[29,41,45,53,57],"atrepo":[29,41,45,53,57],"atrepot":[29,41,45,53,57],"atrepote":[29,41,45,53,57],"atrepotes":[29,41,45,53,57],"al":[37,38,67,68,138,147],"ale":[37,38,67,68,138],"alek":[37,38,67,68,138],"alekm":[37,38,67,68,138],"ko":[49,61,88,90,91,105,107,108,126,130,131,133,134],"kos":[49,61,88,91,105,108,126,130,133,134],"kost":[49,61,88,91,105,108,126,130,133,134],"kosto":[49,61,88,91,105,108,126,130,133,134],"kostom":[49,61,88,91,105,108,126,130,133,134],"ak":[72,146],"ake":[72,146],"akem":[72,146],"akemt":[72,146],"ek":[73],"eko":[73],"ekom":[73],"am":[75],"amt":[75],"tet":[79],"tetl":[79],"tetle":[79],"sp":[87,104,129],"spe":[87,104,129],"spek":[87,104,129],"speke":[87,104,129],"spekef":[87,104,129],"spekefe":[87,104,129],"tes":[89,106,125,132],"tesa":[89,106,132],"tesap":[89,106,132],"tesapl":[89,106,132],"tesaple":[89,106,132],"tesaplet":[89,106,132],"kom":[90,107,131],"komp":[90,107,131],"kompl":[90,107,131],"komple":[90,107,131],"komples":[90,107,131],"et":[92,109],"ete":[92,109],"kep":[93],"keps":[93],"op":[96,98,112,120],"ope":[96],"opem":[96],"em":[97,119,142],"eme":[97,119,142],"emet":[97,119,142],"emete":[97,119,142],"emetea":[97,119,142],"emeteal":[97,119,142],"emeteale":[97,119,142],"opt":[98,112,120],"opte":[98,112,120],"opteo":[98,112,120],"opteom":[98,112,120],"opteoms":[98,112,120],"kl":[100],"kle":[100],"klea":[100],"klear":[100],"l":[101,115,116,122],"la":[101,116,122],"lap":[101,116,122],"lape":[101,116,122],"lapel":[101,116,122],"searke":[113,114],"searkem":[113,114],"searkemk":[113,114],"lo":[115],"loa":[115],"loat":[115],"loate":[115],"loatem":[115],"loatemk":[115],"test":[125],"kostome":[134],"kostomes":[134],"kostomese":[134],"feto":[135],"fetot":[135],"alekme":[138],"alekmet":[138],"kol":[139],"kolo":[139],"kolom":[139],"koloms":[139],"sl":[148],"sla":[148],"slam":[148],"slamt":[148],"slamts":[148]},{"k":[1,4,24,34,35,36,50,62,64,65,66,114],"ka":[1,4,24,34,50,62,64],"kar":[1,4,24,34,50,62,64],"kart":[1,4,24,34,50,62,64],"o":[2,5,38,68,88,89,90,105,106,107],"om":[2,5,38,68],"oml":[2,5],"omle":[2,5],"t":[11,13,16,75],"te":[11,13,75],"tef":[11,13],"tefa":[11,13],"tefao":[11,13],"tefaol":[11,13],"tefaolt":[11,13],"to":[16],"top":[16],"l":[21,22,92,109,143],"la":[21,22,92,109,143],"lap":[21,22,92,109,143],"lape":[21,22,92,109,143],"lapel":[21,22,92,109,143],"lapels":[21,22,143],"ko":[35,36,65,66,83,84,114],"kos":[35,36,65,66,84],"kost":[35,36,65,66,84],"kosto":[35,36,65,66,84],"kostom":[35,36,65,66,84],"alo":[37,67],"alom":[37,67],"alomk":[37,67],"a":[49,61,91,108,133,134],"at":[49,61],"atr":[49,61],"atre":[49,61],"atrep":[49,61],"atrepo":[49,61],"atrepot":[49,61],"atrepote":[49,61],"atrepotes":[49,61],"kol":[72,126,146,147],"kolo":[72,126,146,147],"kolor":[72,126,146,147],"e":[74,87,104,129],"ek":[74],"eko":[74],"ekom":[74],"tes":[75],"test":[75],"s":[80,135],"so":[80],"sop":[80],"sopt":[80],"sopte":[80],"soptet":[80],"soptetl":[80],"soptetle":[80],"kom":[83,114],"komp":[83,114],"kompl":[83,114],"komple":[83,114],"komples":[83,114],"em":[87,104,129],"eme":[87,104,129],"emet":[87,104,129],"emete":[87,104,129],"emetea":[87,104,129],"emeteal":[87,104,129],"emeteale":[87,104,129],"op":[88,89,90,105,106,107],"opt":[88,89,90,105,106,107],"opte":[88,89,90,105,106,107],"opteo":[88,89,90,105,106,107],"opteom":[88,89,90,105,106,107],"opteoms":[90,107],"ak":[91,108,133],"ake":[91,108,133],"akem":[91,108,133],"akemt":[91,108,133],"se":[97,142],"sel":[97,142],"sele":[97,142],"selek":[97,142],"selekt":[97,142],"selekte":[97,119,142],"selektet":[97,119,142],"p":[100],"po":[100],"pot":[100],"poto":[100],"potom":[100],"f":[101,116,122],"fe":[101,116,122],"fes":[101,116,122],"feso":[101,116,122],"fesoa":[101,116,122],"fesoal":[101,116,122],"fesoale":[101,116,122],"kolors":[126,147],"taps":[131],"al":[134],"sl":[135],"sla":[135],"slam":[135],"slamt":[135],"slamts":[135],"tat":[138],"tata":[138]},{"a":[22,35,65],"at":[22,35,65],"l":[25,26,88,105,130],"la":[25,26,88,105,130],"lap":[25,26,88,105,130],"lape":[25,26,88,105,130],"lapel":[25,26,88,105,130],"lapels":[25,26,130],"atr":[35,65],"atre":[35,65],"atrep":[35,65],"atrepo":[35,65],"atrepot":[35,65],"atrepote":[35,65],"atrepotes":[35,65],"o":[36,66,114],"of":[36,66],"ofs":[36,66],"ofse":[36,66],"ofset":[36,66],"ofsets":[36,66],"s":[37,84],"e":[38,68,83],"et":[83],"ete":[83],"etem":[83],"etems":[83],"sa":[84],"sap":[84],"sape":[84],"sapes":[84],"se":[87,104,129],"sel":[87,104,129],"sele":[87,104,129],"selek":[87,104,129],"selekt":[87,104,129],"selekte":[87,104,129],"selektet":[87,104,129],"kol":[91,108,133,134,138],"kolo":[91,108,133,134,138],"kolor":[91,108,133,134],"f":[92,97,109,119],"fe":[92,109],"fes":[92,109],"feso":[92,109],"fesoa":[92,109],"fesoal":[92,109],"fesoale":[92,109],"fa":[97,119],"fal":[97,119],"falo":[97,119],"op":[114],"opt":[114],"opte":[114],"opteo":[114],"opteom":[114],"opteoms":[114],"kolors":[134],"k":[138],"ko":[138],"kolom":[138],"koloms":[138]},{"t":[22],"te":[22],"o":[26],"om":[26],"as":[37,38,67,68],"ase":[37,38,67,68],"ases":[37,38,67,68],"f":[87,104],"fa":[87,104],"fal":[87,104],"falo":[87,104],"falos":[87,104]},{"e":[22],"em":[22],"emt":[22],"t":[26],"to":[26],"top":[26]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-lib-components-layercake-areay-story-svelte", "kind": "story" }, "1": { "id": "src-lib-components-layercake-areay-story-svelte:src-lib-components-layercake-areay-story-svelte-0", "kind": "variant" }, "2": { "id": "src-lib-components-layercake-areay-story-svelte:src-lib-components-layercake-areay-story-svelte-1", "kind": "variant" }, "3": { "id": "src-lib-components-layercake-areay0-story-svelte", "kind": "story" }, "4": { "id": "src-lib-components-layercake-areay0-story-svelte:src-lib-components-layercake-areay0-story-svelte-0", "kind": "variant" }, "5": { "id": "src-lib-components-layercake-areay0-story-svelte:src-lib-components-layercake-areay0-story-svelte-1", "kind": "variant" }, "6": { "id": "src-lib-components-layercake-arrow-story-svelte", "kind": "story" }, "7": { "id": "src-lib-components-layercake-arrow-story-svelte:src-lib-components-layercake-arrow-story-svelte-0", "kind": "variant" }, "8": { "id": "src-lib-components-layercake-arrow-story-svelte:src-lib-components-layercake-arrow-story-svelte-1", "kind": "variant" }, "9": { "id": "src-lib-components-layercake-arrow-story-svelte:src-lib-components-layercake-arrow-story-svelte-2", "kind": "variant" }, "10": { "id": "src-lib-components-layercake-axislabelx-story-svelte", "kind": "story" }, "11": { "id": "src-lib-components-layercake-axislabelx-story-svelte:_default", "kind": "variant" }, "12": { "id": "src-lib-components-layercake-axislabely-story-svelte", "kind": "story" }, "13": { "id": "src-lib-components-layercake-axislabely-story-svelte:_default", "kind": "variant" }, "14": { "id": "src-lib-components-layercake-axisx-story-svelte", "kind": "story" }, "15": { "id": "src-lib-components-layercake-axisx-story-svelte:src-lib-components-layercake-axisx-story-svelte-0", "kind": "variant" }, "16": { "id": "src-lib-components-layercake-axisx-story-svelte:src-lib-components-layercake-axisx-story-svelte-1", "kind": "variant" }, "17": { "id": "src-lib-components-layercake-axisy-story-svelte", "kind": "story" }, "18": { "id": "src-lib-components-layercake-axisy-story-svelte:_default", "kind": "variant" }, "19": { "id": "src-lib-components-layercake-barh-story-svelte", "kind": "story" }, "20": { "id": "src-lib-components-layercake-barh-story-svelte:src-lib-components-layercake-barh-story-svelte-0", "kind": "variant" }, "21": { "id": "src-lib-components-layercake-barh-story-svelte:src-lib-components-layercake-barh-story-svelte-1", "kind": "variant" }, "22": { "id": "src-lib-components-layercake-barh-story-svelte:src-lib-components-layercake-barh-story-svelte-2", "kind": "variant" }, "23": { "id": "src-lib-components-layercake-barv-story-svelte", "kind": "story" }, "24": { "id": "src-lib-components-layercake-barv-story-svelte:src-lib-components-layercake-barv-story-svelte-0", "kind": "variant" }, "25": { "id": "src-lib-components-layercake-barv-story-svelte:src-lib-components-layercake-barv-story-svelte-1", "kind": "variant" }, "26": { "id": "src-lib-components-layercake-barv-story-svelte:src-lib-components-layercake-barv-story-svelte-2", "kind": "variant" }, "27": { "id": "src-lib-components-layercake-circle-story-svelte", "kind": "story" }, "28": { "id": "src-lib-components-layercake-circle-story-svelte:src-lib-components-layercake-circle-story-svelte-0", "kind": "variant" }, "29": { "id": "src-lib-components-layercake-circle-story-svelte:src-lib-components-layercake-circle-story-svelte-1", "kind": "variant" }, "30": { "id": "src-lib-components-layercake-circle-story-svelte:src-lib-components-layercake-circle-story-svelte-2", "kind": "variant" }, "31": { "id": "src-lib-components-layercake-group-story-svelte", "kind": "story" }, "32": { "id": "src-lib-components-layercake-group-story-svelte:_default", "kind": "variant" }, "33": { "id": "src-lib-components-layercake-htmltext-story-svelte", "kind": "story" }, "34": { "id": "src-lib-components-layercake-htmltext-story-svelte:src-lib-components-layercake-htmltext-story-svelte-0", "kind": "variant" }, "35": { "id": "src-lib-components-layercake-htmltext-story-svelte:src-lib-components-layercake-htmltext-story-svelte-1", "kind": "variant" }, "36": { "id": "src-lib-components-layercake-htmltext-story-svelte:src-lib-components-layercake-htmltext-story-svelte-2", "kind": "variant" }, "37": { "id": "src-lib-components-layercake-htmltext-story-svelte:src-lib-components-layercake-htmltext-story-svelte-3", "kind": "variant" }, "38": { "id": "src-lib-components-layercake-htmltext-story-svelte:src-lib-components-layercake-htmltext-story-svelte-4", "kind": "variant" }, "39": { "id": "src-lib-components-layercake-line-story-svelte", "kind": "story" }, "40": { "id": "src-lib-components-layercake-line-story-svelte:src-lib-components-layercake-line-story-svelte-0", "kind": "variant" }, "41": { "id": "src-lib-components-layercake-line-story-svelte:src-lib-components-layercake-line-story-svelte-1", "kind": "variant" }, "42": { "id": "src-lib-components-layercake-line-story-svelte:src-lib-components-layercake-line-story-svelte-2", "kind": "variant" }, "43": { "id": "src-lib-components-layercake-lineh-story-svelte", "kind": "story" }, "44": { "id": "src-lib-components-layercake-lineh-story-svelte:src-lib-components-layercake-lineh-story-svelte-0", "kind": "variant" }, "45": { "id": "src-lib-components-layercake-lineh-story-svelte:src-lib-components-layercake-lineh-story-svelte-1", "kind": "variant" }, "46": { "id": "src-lib-components-layercake-lineh-story-svelte:src-lib-components-layercake-lineh-story-svelte-2", "kind": "variant" }, "47": { "id": "src-lib-components-layercake-linev-story-svelte", "kind": "story" }, "48": { "id": "src-lib-components-layercake-linev-story-svelte:src-lib-components-layercake-linev-story-svelte-0", "kind": "variant" }, "49": { "id": "src-lib-components-layercake-linev-story-svelte:src-lib-components-layercake-linev-story-svelte-1", "kind": "variant" }, "50": { "id": "src-lib-components-layercake-linev-story-svelte:src-lib-components-layercake-linev-story-svelte-2", "kind": "variant" }, "51": { "id": "src-lib-components-layercake-path-story-svelte", "kind": "story" }, "52": { "id": "src-lib-components-layercake-path-story-svelte:src-lib-components-layercake-path-story-svelte-0", "kind": "variant" }, "53": { "id": "src-lib-components-layercake-path-story-svelte:src-lib-components-layercake-path-story-svelte-1", "kind": "variant" }, "54": { "id": "src-lib-components-layercake-path-story-svelte:src-lib-components-layercake-path-story-svelte-2", "kind": "variant" }, "55": { "id": "src-lib-components-layercake-recth-story-svelte", "kind": "story" }, "56": { "id": "src-lib-components-layercake-recth-story-svelte:src-lib-components-layercake-recth-story-svelte-0", "kind": "variant" }, "57": { "id": "src-lib-components-layercake-recth-story-svelte:src-lib-components-layercake-recth-story-svelte-1", "kind": "variant" }, "58": { "id": "src-lib-components-layercake-recth-story-svelte:src-lib-components-layercake-recth-story-svelte-2", "kind": "variant" }, "59": { "id": "src-lib-components-layercake-rectv-story-svelte", "kind": "story" }, "60": { "id": "src-lib-components-layercake-rectv-story-svelte:src-lib-components-layercake-rectv-story-svelte-0", "kind": "variant" }, "61": { "id": "src-lib-components-layercake-rectv-story-svelte:src-lib-components-layercake-rectv-story-svelte-1", "kind": "variant" }, "62": { "id": "src-lib-components-layercake-rectv-story-svelte:src-lib-components-layercake-rectv-story-svelte-2", "kind": "variant" }, "63": { "id": "src-lib-components-layercake-svgtext-story-svelte", "kind": "story" }, "64": { "id": "src-lib-components-layercake-svgtext-story-svelte:src-lib-components-layercake-svgtext-story-svelte-0", "kind": "variant" }, "65": { "id": "src-lib-components-layercake-svgtext-story-svelte:src-lib-components-layercake-svgtext-story-svelte-1", "kind": "variant" }, "66": { "id": "src-lib-components-layercake-svgtext-story-svelte:src-lib-components-layercake-svgtext-story-svelte-2", "kind": "variant" }, "67": { "id": "src-lib-components-layercake-svgtext-story-svelte:src-lib-components-layercake-svgtext-story-svelte-3", "kind": "variant" }, "68": { "id": "src-lib-components-layercake-svgtext-story-svelte:src-lib-components-layercake-svgtext-story-svelte-4", "kind": "variant" }, "69": { "id": "src-lib-components-shared-button-story-svelte", "kind": "story" }, "70": { "id": "src-lib-components-shared-button-story-svelte:src-lib-components-shared-button-story-svelte-0", "kind": "variant" }, "71": { "id": "src-lib-components-shared-button-story-svelte:src-lib-components-shared-button-story-svelte-1", "kind": "variant" }, "72": { "id": "src-lib-components-shared-button-story-svelte:src-lib-components-shared-button-story-svelte-2", "kind": "variant" }, "73": { "id": "src-lib-components-shared-button-story-svelte:src-lib-components-shared-button-story-svelte-3", "kind": "variant" }, "74": { "id": "src-lib-components-shared-button-story-svelte:src-lib-components-shared-button-story-svelte-4", "kind": "variant" }, "75": { "id": "src-lib-components-shared-button-story-svelte:src-lib-components-shared-button-story-svelte-5", "kind": "variant" }, "76": { "id": "src-lib-components-shared-chartfooter-story-svelte", "kind": "story" }, "77": { "id": "src-lib-components-shared-chartfooter-story-svelte:_default", "kind": "variant" }, "78": { "id": "src-lib-components-shared-chartheader-story-svelte", "kind": "story" }, "79": { "id": "src-lib-components-shared-chartheader-story-svelte:src-lib-components-shared-chartheader-story-svelte-0", "kind": "variant" }, "80": { "id": "src-lib-components-shared-chartheader-story-svelte:src-lib-components-shared-chartheader-story-svelte-1", "kind": "variant" }, "81": { "id": "src-lib-components-shared-chartlegend-story-svelte", "kind": "story" }, "82": { "id": "src-lib-components-shared-chartlegend-story-svelte:src-lib-components-shared-chartlegend-story-svelte-0", "kind": "variant" }, "83": { "id": "src-lib-components-shared-chartlegend-story-svelte:src-lib-components-shared-chartlegend-story-svelte-1", "kind": "variant" }, "84": { "id": "src-lib-components-shared-chartlegend-story-svelte:src-lib-components-shared-chartlegend-story-svelte-2", "kind": "variant" }, "85": { "id": "src-lib-components-shared-checkboxes-story-svelte", "kind": "story" }, "86": { "id": "src-lib-components-shared-checkboxes-story-svelte:src-lib-components-shared-checkboxes-story-svelte-0", "kind": "variant" }, "87": { "id": "src-lib-components-shared-checkboxes-story-svelte:src-lib-components-shared-checkboxes-story-svelte-1", "kind": "variant" }, "88": { "id": "src-lib-components-shared-checkboxes-story-svelte:src-lib-components-shared-checkboxes-story-svelte-2", "kind": "variant" }, "89": { "id": "src-lib-components-shared-checkboxes-story-svelte:src-lib-components-shared-checkboxes-story-svelte-3", "kind": "variant" }, "90": { "id": "src-lib-components-shared-checkboxes-story-svelte:src-lib-components-shared-checkboxes-story-svelte-4", "kind": "variant" }, "91": { "id": "src-lib-components-shared-checkboxes-story-svelte:src-lib-components-shared-checkboxes-story-svelte-5", "kind": "variant" }, "92": { "id": "src-lib-components-shared-checkboxes-story-svelte:src-lib-components-shared-checkboxes-story-svelte-6", "kind": "variant" }, "93": { "id": "src-lib-components-shared-checkboxes-story-svelte:src-lib-components-shared-checkboxes-story-svelte-7", "kind": "variant" }, "94": { "id": "src-lib-components-shared-dropdown-story-svelte", "kind": "story" }, "95": { "id": "src-lib-components-shared-dropdown-story-svelte:src-lib-components-shared-dropdown-story-svelte-0", "kind": "variant" }, "96": { "id": "src-lib-components-shared-dropdown-story-svelte:src-lib-components-shared-dropdown-story-svelte-1", "kind": "variant" }, "97": { "id": "src-lib-components-shared-dropdown-story-svelte:src-lib-components-shared-dropdown-story-svelte-2", "kind": "variant" }, "98": { "id": "src-lib-components-shared-dropdown-story-svelte:src-lib-components-shared-dropdown-story-svelte-3", "kind": "variant" }, "99": { "id": "src-lib-components-shared-dropdown-story-svelte:src-lib-components-shared-dropdown-story-svelte-4", "kind": "variant" }, "100": { "id": "src-lib-components-shared-dropdown-story-svelte:src-lib-components-shared-dropdown-story-svelte-5", "kind": "variant" }, "101": { "id": "src-lib-components-shared-dropdown-story-svelte:src-lib-components-shared-dropdown-story-svelte-6", "kind": "variant" }, "102": { "id": "src-lib-components-shared-radiobuttons-story-svelte", "kind": "story" }, "103": { "id": "src-lib-components-shared-radiobuttons-story-svelte:src-lib-components-shared-radiobuttons-story-svelte-0", "kind": "variant" }, "104": { "id": "src-lib-components-shared-radiobuttons-story-svelte:src-lib-components-shared-radiobuttons-story-svelte-1", "kind": "variant" }, "105": { "id": "src-lib-components-shared-radiobuttons-story-svelte:src-lib-components-shared-radiobuttons-story-svelte-2", "kind": "variant" }, "106": { "id": "src-lib-components-shared-radiobuttons-story-svelte:src-lib-components-shared-radiobuttons-story-svelte-3", "kind": "variant" }, "107": { "id": "src-lib-components-shared-radiobuttons-story-svelte:src-lib-components-shared-radiobuttons-story-svelte-4", "kind": "variant" }, "108": { "id": "src-lib-components-shared-radiobuttons-story-svelte:src-lib-components-shared-radiobuttons-story-svelte-5", "kind": "variant" }, "109": { "id": "src-lib-components-shared-radiobuttons-story-svelte:src-lib-components-shared-radiobuttons-story-svelte-6", "kind": "variant" }, "110": { "id": "src-lib-components-shared-search-story-svelte", "kind": "story" }, "111": { "id": "src-lib-components-shared-search-story-svelte:src-lib-components-shared-search-story-svelte-0", "kind": "variant" }, "112": { "id": "src-lib-components-shared-search-story-svelte:src-lib-components-shared-search-story-svelte-1", "kind": "variant" }, "113": { "id": "src-lib-components-shared-search-story-svelte:src-lib-components-shared-search-story-svelte-2", "kind": "variant" }, "114": { "id": "src-lib-components-shared-search-story-svelte:src-lib-components-shared-search-story-svelte-3", "kind": "variant" }, "115": { "id": "src-lib-components-shared-search-story-svelte:src-lib-components-shared-search-story-svelte-4", "kind": "variant" }, "116": { "id": "src-lib-components-shared-search-story-svelte:src-lib-components-shared-search-story-svelte-5", "kind": "variant" }, "117": { "id": "src-lib-components-shared-select-story-svelte", "kind": "story" }, "118": { "id": "src-lib-components-shared-select-story-svelte:src-lib-components-shared-select-story-svelte-0", "kind": "variant" }, "119": { "id": "src-lib-components-shared-select-story-svelte:src-lib-components-shared-select-story-svelte-1", "kind": "variant" }, "120": { "id": "src-lib-components-shared-select-story-svelte:src-lib-components-shared-select-story-svelte-2", "kind": "variant" }, "121": { "id": "src-lib-components-shared-select-story-svelte:src-lib-components-shared-select-story-svelte-3", "kind": "variant" }, "122": { "id": "src-lib-components-shared-select-story-svelte:src-lib-components-shared-select-story-svelte-4", "kind": "variant" }, "123": { "id": "src-lib-components-shared-slant-story-svelte", "kind": "story" }, "124": { "id": "src-lib-components-shared-slant-story-svelte:src-lib-components-shared-slant-story-svelte-0", "kind": "variant" }, "125": { "id": "src-lib-components-shared-slant-story-svelte:src-lib-components-shared-slant-story-svelte-1", "kind": "variant" }, "126": { "id": "src-lib-components-shared-slant-story-svelte:src-lib-components-shared-slant-story-svelte-2", "kind": "variant" }, "127": { "id": "src-lib-components-shared-tabpanels-story-svelte", "kind": "story" }, "128": { "id": "src-lib-components-shared-tabpanels-story-svelte:src-lib-components-shared-tabpanels-story-svelte-0", "kind": "variant" }, "129": { "id": "src-lib-components-shared-tabpanels-story-svelte:src-lib-components-shared-tabpanels-story-svelte-1", "kind": "variant" }, "130": { "id": "src-lib-components-shared-tabpanels-story-svelte:src-lib-components-shared-tabpanels-story-svelte-2", "kind": "variant" }, "131": { "id": "src-lib-components-shared-tabpanels-story-svelte:src-lib-components-shared-tabpanels-story-svelte-3", "kind": "variant" }, "132": { "id": "src-lib-components-shared-tabpanels-story-svelte:src-lib-components-shared-tabpanels-story-svelte-4", "kind": "variant" }, "133": { "id": "src-lib-components-shared-tabpanels-story-svelte:src-lib-components-shared-tabpanels-story-svelte-5", "kind": "variant" }, "134": { "id": "src-lib-components-shared-tabpanels-story-svelte:src-lib-components-shared-tabpanels-story-svelte-6", "kind": "variant" }, "135": { "id": "src-lib-components-shared-tabpanels-story-svelte:src-lib-components-shared-tabpanels-story-svelte-7", "kind": "variant" }, "136": { "id": "src-lib-components-shared-table-story-svelte", "kind": "story" }, "137": { "id": "src-lib-components-shared-table-story-svelte:src-lib-components-shared-table-story-svelte-0", "kind": "variant" }, "138": { "id": "src-lib-components-shared-table-story-svelte:src-lib-components-shared-table-story-svelte-1", "kind": "variant" }, "139": { "id": "src-lib-components-shared-table-story-svelte:src-lib-components-shared-table-story-svelte-2", "kind": "variant" }, "140": { "id": "src-lib-components-shared-tabs-story-svelte", "kind": "story" }, "141": { "id": "src-lib-components-shared-tabs-story-svelte:src-lib-components-shared-tabs-story-svelte-0", "kind": "variant" }, "142": { "id": "src-lib-components-shared-tabs-story-svelte:src-lib-components-shared-tabs-story-svelte-1", "kind": "variant" }, "143": { "id": "src-lib-components-shared-tabs-story-svelte:src-lib-components-shared-tabs-story-svelte-2", "kind": "variant" }, "144": { "id": "src-lib-components-shared-tabs-story-svelte:src-lib-components-shared-tabs-story-svelte-3", "kind": "variant" }, "145": { "id": "src-lib-components-shared-tabs-story-svelte:src-lib-components-shared-tabs-story-svelte-4", "kind": "variant" }, "146": { "id": "src-lib-components-shared-tabs-story-svelte:src-lib-components-shared-tabs-story-svelte-5", "kind": "variant" }, "147": { "id": "src-lib-components-shared-tabs-story-svelte:src-lib-components-shared-tabs-story-svelte-6", "kind": "variant" }, "148": { "id": "src-lib-components-shared-tabs-story-svelte:src-lib-components-shared-tabs-story-svelte-7", "kind": "variant" }, "149": { "id": "src-lib-components-introduction-story-js", "kind": "story" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-9b28de88.js"), true ? ["assets/search-docs-data-9b28de88.js","assets/vendor-7db0712c.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: __spreadValues({}, type === "docs" ? { tab: "docs" } : {})
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor,
        type
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: __spreadValues({
            variantId: variant.id
          }, type === "docs" ? { tab: "docs" } : {})
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor,
        type
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};

const StyleDictionary = require('style-dictionary');

// register custom transform that removes units
StyleDictionary.registerTransform({
  name: 'size/unitless',
  type: 'value',
  matcher: (token) =>
    ['bp', 's', 'font-size', 'line-height'].includes(token.attributes.category),
  transformer: (token) =>
    typeof token.value === 'string'
      ? +token.value.replace(/[a-z]/gim, '')
      : token.value,
});

// apply the configuration
const StyleDictionaryExtended = StyleDictionary.extend(
  __dirname + '/config.json'
);

StyleDictionaryExtended.buildAllPlatforms();

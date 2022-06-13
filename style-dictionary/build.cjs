const StyleDictionary = require('style-dictionary');

// register custom transform that removes units
StyleDictionary.registerTransform({
  name: 'size/unitless',
  type: 'value',
  matcher: (token) =>
    ['bp', 's', 'font-size'].includes(token.attributes.category),
  transformer: (token) => +token.value.replace(/[a-z]/gim, ''),
});

// apply the configuration
const StyleDictionaryExtended = StyleDictionary.extend(
  __dirname + '/config.json'
);

StyleDictionaryExtended.buildAllPlatforms();

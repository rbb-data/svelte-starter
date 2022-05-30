const StyleDictionary = require('style-dictionary');

// register custom transform that removes units
StyleDictionary.registerTransform({
  name: 'size/unitless',
  type: 'value',
  matcher: (token) => token.attributes.category === 'breakpoint',
  transformer: (token) => +token.value.replace(/\D/g, ''),
});

// apply the configuration
const StyleDictionaryExtended = StyleDictionary.extend(
  __dirname + '/config.json'
);

StyleDictionaryExtended.buildAllPlatforms();

/** @type {{ ignoreFolders: string[]; sections: Record<string, string> }} */
const config = {
  ignoreFolders: ['assets', 'helpers', 'components/demo'],
  sections: {
    stores: 'Stores',
    actions: 'Actions',
    'components/shared': 'Components',
    'components/shared/headless': 'Headless Components',
    'components/shared/leaflet': 'Leaflet Components',
  },
};

export default config;

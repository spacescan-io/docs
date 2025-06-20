/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  apiSidebar: [
    {
      type: 'category',
      label: 'Address',
      items: [
        'address/xch_balance',
        'address/token_balance',
        'address/nft_balance',
        'address/xch_transactions',
        'address/token_transactions',
        'address/nft_transactions',
      ],
    },
   {
      type: 'category',
      label: 'Token',
      items: [
        'cat/list',
        'cat/info',
        'cat/total-supply',
        'cat/circulating-supply',
        'cat/holders',
        'cat/price',
        'cat/activity',
        'cat/update',
      ],
    },

    {
      type: 'category',
      label: 'NFT',
      items: [
        'nft/info',
        'nft/stats',
        'nft/original',
        'nft/metadata',
        'nft/events',
        'nft/offers',
        'nft/license_info'

      ],
    },
    {
      type: 'category',
      label: 'Collection',
      items: [
        'collections/list',
        'collections/info',
        'collections/nfts',
        'collections/activities',   
         ],
    },
    {
      type: 'category',
      label: 'DID',
      items: [
        'did/info',
        'did/nfts',
      ],
    },
    {
      type: 'category',
      label: 'Block',
      items: [
        'block/peak',
        'block/info'
      ],
    }, {
      type: 'category',
      label :'Offers',
      items: [
        'offers/list',
        'offers/info',
        'offers/by_asset',
      ],
    },
    {
      type: 'category',
      label: 'Stats',
      items: [
        'stats/price',
        'stats/total-supply',
        'stats/circulating-supply',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'tools/convert_to_address',
        'tools/convert_from_address',
        'tools/convert_to_nft',
        'tools/convert_from_nft',
        'tools/convert_to_did',
        'tools/convert_from_did',
        'tools/get_coin_id',
      ],
    },
    'data_layer',
    'mempool',
    'coins',
   
  ],
};

module.exports = sidebars;

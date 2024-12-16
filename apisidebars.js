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
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

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
      label: 'CAT',
      items: [
        'cat/info',
        'cat/holders',
        'cat/list',
        'cat/transactions',
        'cat/price',
        'cat/update',
        'cat/total-supply',
        'cat/circulating-supply',
      ],
    },
   
    {
      type: 'category',
      label: 'NFT',
      items: [
        'nft/info',
      ],
    },
    {
      type: 'category',
      label: 'Collection',
      items: [
        'collection/info',
      ],
    },
    {
      type: 'category',
      label: 'DID',
      items: [
        'did/info',
      ],
    },
    'data_layer',
    'mempool',
    'coins',
    'block',
    'offers',
    'stats',
  ],
};

module.exports = sidebars;

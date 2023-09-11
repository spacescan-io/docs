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
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar1: [
    {
      type: 'doc',
      label: 'Intro',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Guide',
      items: ['guide/verifyDID','guide/updatecatinfo','guide/chia_tax','guide/manage_address_profile/manage_address_profile','guide/chia_did_profile/chia_did_profile','guide/manage_asset_monitor/asset_monitor','guide/manage_token_data/token_edit_data','guide/Manage_collection/Manage Collection'],
      collapsible: true,
      collapsed: false,
    },
  ],
   
};

module.exports = sidebars;

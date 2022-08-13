---
sidebar_position: 1
---

# Verify DID 

## 1) Verify with Twitter

Chia NFT have off chain meta data and it has option to provide twitter handle for the collection.
This link of Minter DID and twitter handle from off chain meta data could be used to validate a collection authenticity.

The same link between Minter DID and twitter handle in meta data could be used to provide creator DID informations.
You have full control of what spacescan shows for that DID and you can update it any time by sendingout a tweet.

The Spacescan Tweet bot does below actions when invoked,
- Validate link between collection and twitter handle then add DID label next to collection
- Update collection creator profile image
- Update creator profile banner
- Update creator name ( This would replace DID alphanumeric identifier and provide authenticity  for the collection) 

To invoke the bot, please Tweet from the handle used for collection this in this format:

```jsx
@spacescan_io
#verifydid
<DID>
<Collection Link>
#didprofile 
name:<Creator Name>
pic:<URI Pic>
banner:<URI Banner>
```

Sample tweet - https://twitter.com/roybotNFT/status/1556833192920899584

Replace the items in < > with the following:

-  &lt;DID&gt; : This is the DID of the creator of the NFTs
- Collection Link : This is the spacescan.io URL to your collection
- &lt;Creator Name&gt; : This is the name you want to use as the NFT creator
- &lt;URI Pic&gt; : URI to pic icon for your DID creator profile page
- &lt;URI Banner&gt; : URI to banner image that will appear on your DID creator profile page

#### Collection with add profile icon and banner [Link to DID](https://www.spacescan.io/xch/did/fe9bdb9a8e6825580d699faa6160fbd9d5d64a525ac49d174357d68ed0ae194e)

![Update](URI-Pic-and-Banner.jpg)

#### DID creator name shown in collection page [Link to Collection](https://www.spacescan.io/xch/nft/collection/col129ph2rgr3r3f2znqe3x2xj7edhl7we0n3qzphsdf5q3hcr2gyfase5u9qg)
![Update](Creator-Name.jpg)
:::tip HINT
If you tweet again with changed &lt;URI&gt; Pic and/or &lt;URI Banner&gt; URIs, it will update your DID creator profile with the new images.
:::

## 2) Verify with domain name

We have a bot which checks for DID info in your website domain added in meta data.
This action happens only once when the NFT in a collection is processed. 
So please ensure you would have DID in your domain TXT record.
For example, if the website provided in meta is https://www.testdomain.com
Then the bot will check for TXT in below domains/sub domains for DID info
- www.testdomain.com
- did.testdomain.com
- testdomains.com

:::tip HINT
If you have added your DID into domains after the collection mint process then please reach us in discord / twitter to manually trigger the verification for your NFT collection.
:::

> [roybotNFT](https://twitter.com/roybotNFT) created a guide for this process in our discord and its enlarged here.
Thank you for this guide.
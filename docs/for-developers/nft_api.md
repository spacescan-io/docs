---
sidebar_position: 1
---

# NFT API (v1 alpha)

**NFT API** is a rest API by which individual NFT information can be fetched based on
the nft `nft id`.

- This API is still under a developing stage, so please try to use this API cautiously . 

- New features or change in attributes will happen in the future. Hence, make sure the schema 
before using the response. 

- We are happy to help with more features and parametes under this API. Please contact the spacescan.io team at [discord](https://discord.com/invite/Bb4sj3Bg9P), [twitter](https://twitter.com/spacescan_io) or at `spacescan.io@gmail.com` for any suggestions or bugs. 

:::info Info

We would appreciate your effort on linking back to [spacescan.io](https://www.spacescan.io/) and this API, if this API is used for building any product or feature on top of it.

:::

## NFT info API endpoint

The API endpoint to hit for the nft information response `https://api2.spacescan.io/api/nft/{nftid}`.

- This `nftid` in the endpoint needs to be replaced with the nftid that the user needs information about.


```jsx title="Sample Response for Spacescan NFT"
{
    "status": "SUCCESS",
    "data": [
        {
            "nft_id": "nft12l69ttcxm8zdk3jc6z3dlhtvudja270sm4k7cw3rhvhgur9lrntqly5hag  ",
            "nft_info": {
                "launcher_id": "0x57f455af06d9c4db4658d0a2dfdd6ce365d579f0dd6dec3a23bb2e8e0cbf1cd6",
                "owner_did": null,
                "owner_pubkey": null,
                "royalty_percentage": null,
                "royalty_puzzle_hash": null,
                "data_uris": [
                    "https://i.ibb.co/jWyPWJJ/spacescan-io-icon.png"
                ],
                "data_hash": "0x7eb0ef1ed9054fd271a0baa8c35e827e2a88f9b54fc80469893870db3aba3491",
                "metadata_uris": [
                    "https://api.npoint.io/a2ed322367b49cb97077"
                ],
                "metadata_hash": "0xa88c892e929d770b0292b236782f8e256e92241ebb3d55ba7648d03612139e6e",
                "license_uris": [],
                "license_hash": "0x00",
                "series_total": 1,
                "series_number": 1,
                "updater_puzhash": "0xfe8a4b4e27a2e29a4d3fc7ce9d527adbcaccbab6ada3903ccf3ba9a769d2d78b",
                "mint_height": 1119426,
                "supports_did": false,
                "pending_transaction": false,
                "launcher_puzhash": "0xeff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9"
            },
            "meta_info": {
                "name": "Spacescan.io 1.4.0",
                "description": "Testing 1.4.0 with NFT1",
                "collection_id": "12345678901234567890",
                "collection_name": "SpaceScan.io Test NFT explorer",
                "attributes": [
                    {
                        "value": "NFT1",
                        "trait_type": "NFT"
                    }
                ]
            }
        }
    ],
    "history": [
        {
            "coin_name": "e1b769a5d4f975eebe15f03016dec82c3a16c6655493da6598471e3c94efa618",
            "confirmed_index": "1119426",
            "spent_index": "1119426",
            "puzzle_hash": "98f23ca5a2d41534fa3485eaf570102dec1bd7b6cec11c5502a374c75f21b63e",
            "coin_parent": "57f455af06d9c4db4658d0a2dfdd6ce365d579f0dd6dec3a23bb2e8e0cbf1cd6",
            "amount": "1",
            "timestamp": "1655348506",
            "from_puzzle_hash": "eff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9"
        }
    ]
}
```

:::info Info

- Whenever there is a change in the version, the endpoint for this API will change. This change will be updated here in the docs. 
- The last three old versions will always be supported along with the new version. We would provide two weeks 
notice prior to the old version decommission date.

:::

## Details about NFT info API each response attribute

Each attributes inside the response denotes different information about the NFT. 

- `status` denotes whether the API call is made successfully or not. `SUCCESS` symbolize the call is success, `FAILURE` symbolize the call is not success. 
 
- `nft` object contains the details about the NFT asset id provided in the endpoint.

- Set the header `x-api-coin` key with the value `XCH` for mainnet and `TXCH` for tesetnet.

- This header `x-api-coin` is used for the user validation, and this would be a mandatory header.

- Set the header `x-api-version` key with the value of current version.

- This header `x-api-version` version `v0.1` denotes the alpha version of the API. `api/nft` denotes the NFT present in the chia blockchain.

- Set the header `x-auth-id` key with the value taken from the [spacescan.io](https://www.spacescan.io/) user profile info `API Key`

- This header `x-auth-id` is used for the user validation, and this would be a mandatory header in the future.

![CAT x_auth_id](/img/updatecatinfodetails/token_id.png)

## NFT Collection info API endpoint

The API endpoint to hit for the individual nft information response `https://api2.spacescan.io/api/nft/collection/{collectionid}`.

- This `collectionid` in the endpoint needs to be replaced with the collectionid that the user needs information about.

```jsx title="Sample Response for Spacescan Collection NFT"
{
    "status": "success",
    "data": [
        {
            "count": "2",
            "nft_id": "nft12l69ttcxm8zdk3jc6z3dlhtvudja270sm4k7cw3rhvhgur9lrntqly5hag  ",
            "nft_info": {
                "launcher_id": "0x57f455af06d9c4db4658d0a2dfdd6ce365d579f0dd6dec3a23bb2e8e0cbf1cd6",
                "owner_did": null,
                "owner_pubkey": null,
                "royalty_percentage": null,
                "royalty_puzzle_hash": null,
                "data_uris": [
                    "https://i.ibb.co/jWyPWJJ/spacescan-io-icon.png"
                ],
                "data_hash": "0x7eb0ef1ed9054fd271a0baa8c35e827e2a88f9b54fc80469893870db3aba3491",
                "metadata_uris": [
                    "https://api.npoint.io/a2ed322367b49cb97077"
                ],
                "metadata_hash": "0xa88c892e929d770b0292b236782f8e256e92241ebb3d55ba7648d03612139e6e",
                "license_uris": [],
                "license_hash": "0x00",
                "series_total": 1,
                "series_number": 1,
                "updater_puzhash": "0xfe8a4b4e27a2e29a4d3fc7ce9d527adbcaccbab6ada3903ccf3ba9a769d2d78b",
                "mint_height": 1119426,
                "supports_did": false,
                "pending_transaction": false,
                "launcher_puzhash": "0xeff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9"
            },
            "meta_info": {
                "name": "Spacescan.io 1.4.0",
                "attributes": [
                    {
                        "value": "NFT1",
                        "trait_type": "NFT"
                    }
                ],
                "description": "Testing 1.4.0 with NFT1",
                "collection_id": "12345678901234567890",
                "collection_name": "SpaceScan.io Test NFT explorer"
            },
            "last_updated_height": "1119426"
        }
    ]
}
```

:::info Info

- Whenever there is a change in the version, the endpoint for this API will change. This change will be updated here in the docs. 
- The last three old versions will always be supported along with the new version. We would provide two weeks 
notice prior to the old version decommission date.

:::

## Details about NFT Collection info API each response attribute

Each attributes inside the response denotes different information about the NFT. 

- `status` denotes whether the API call is made successfully or not. `SUCCESS` symbolize the call is success, `FAILURE` symbolize the call is not success. 
 
- `nft` object contains the details about the NFT asset id provided in the endpoint.

- Set the header `x-api-coin` key with the value `XCH` for mainnet and `TXCH` for tesetnet.

- This header `x-api-coin` is used for the user validation, and this would be a mandatory header.

- Set the header `x-api-version` key with the value of current version.

- This header `x-api-version` version `v0.1` denotes the alpha version of the API. `api/nft/collection` denotes the NFT present in the chia blockchain.

- Set the header `x-auth-id` key with the value taken from the [spacescan.io](https://www.spacescan.io/) user profile info `API Key`

- This header `x-auth-id` is used for the user validation, and this would be a mandatory header in the future.
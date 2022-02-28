---
sidebar_position: 1
---

# CAT API (v1 alpha)

**CAT API** is a rest API by which individual CAT information can be fetched based on
the cat `asset id`.

- This API is still under a developing stage, so please try to use this API cautiously . 

- New features or change in attributes will happen in the future. Hence, make sure the schema 
before using the response. 

- We are happy to help with more features and parametes under this API. Please contact the spacescan.io team at [discord](https://discord.com/invite/Bb4sj3Bg9P), [twitter](https://twitter.com/spacescan_io) or at `spacescan.io@gmail.com` for any suggestions or bugs. 

:::info Info

We would appreciate your effort on linking back to [spacescan.io](https://www.spacescan.io/) and this API, if this API is used for building any product or feature on top of it.

:::

## CAT info API endpoint

The API endpoint to hit for the individual cat information response `https://api2.spacescan.io/v0.1/xch/cat/{assetid}`.

- This `assetid` in the endpoint needs to be replaced with the assetid that the user needs information about. 

- version `v0.1` denotes the alpha version of the API. `xch/cat` denotes the CAT present in the chia blockchain. 


```jsx title="Sample Response for Spacebucks"
{
    "status": "SUCCESS",
    "cat": [
        {
            "asset_id": "78ad32a8c9ea70f27d73e9306fc467bab2a6b15b30289791e37ab6e8612212b1",
            "asset_name": "Spacebucks",
            "symbol": "SBX",
            "price_usd": null,
            "price_xch": null,
            "issued_time": null,
            "updated": 1645975699,
            "holders": null,
            "lisp": null,
            "clvm": null,
            "description": "The galactic monetary standard.",
            "tags": "Meme",
            "total_supply": 1000000000,
            "txns_count": 17716,
            "txns_amount": 1005905567.3910004,
            "logo": "https://images.spacescan.io/xch/cat/78ad32a8c9ea70f27d73e9306fc467bab2a6b15b30289791e37ab6e8612212b1/1.png"
        }
    ]
}
```

:::info Info

- Whenever there is a change in the version, the endpoint for this API will change. This change will be updated here in the docs. 
- The last three old versions will always be supported along with the new version. We would provide two weeks 
notice prior to the old version decommission date.

:::

## Details about each response attribute

Each attributes inside the response denotes different information about the CAT. 

- `status` denotes whether the API call is made successfully or not. `SUCCESS` symbolize the call is success, `FAILURE` symbolize the call is not success. 
 
- `cat` object contains the details about the CAT asset id provided in the endpoint. 

![CAT Response](/img/updatecatinfodetails/postman_cat_response.png)

- This CAT information from this API, will have some more details when compared to the [CATS API](../for-developers/cats_api.md) v1 alpha
---
sidebar_position: 1
---

# CATS API (v1 alpha)

**CATS API** is a rest API, by which group of CAT information can be fetched based on
few params. 

- This API is still under a developing stage, so please try to use this API cautiously . 

- New features or change in attributes will happen in the future. Hence, make sure the schema 
before using the response. 

- We are happy to help with more features and parametes under this API. Please contact the spacescan.io team at [discord](https://discord.com/invite/Bb4sj3Bg9P), [twitter](https://twitter.com/spacescan_io) or at `spacescan.io@gmail.com` for any suggestions or bugs. 

:::info Info

We would appreciate your effort on linking back to [spacescan.io](https://www.spacescan.io/) and this API, if this API is used for building any product or feature on top of it.

:::

## CATS info API endpoint

The API endpoint to hit for the cats summary information response `https://api2.spacescan.io/v0.1/xch/cats`.

- version `v0.1` denotes the alpha version of the API. `xch/cats` denotes the CATs present in the chia blockchain. 

- When the Rest Endpoint is called without any params, the response would have the all time top 100 tokens information.
this all time top tokens is calculated based on the total number of transactions happened.   

```jsx title="CATS reponse for param count = 3"
{
    "status": "SUCCESS",
    "cats": [
        {
            "asset_id": "44a1d78b820f6404de3cc45b34932178f9ac8f3d9114db279f657ca83fa751b7",
            "asset_name": "Caesar",
            "symbol": "GIC",
            "price_usd": 0,
            "price_xch": 0,
            "issued_time": null,
            "updated": 1645975699,
            "holders": null,
            "lisp": null,
            "clvm": null,
            "description": "Gaius Iulius Caesar Coin",
            "tags": "Meme",
            "total_supply": 1337073535,
            "txns_count": 210825,
            "txns_amount": 1337526778,
            "logo": "https://images.spacescan.io/xch/cat/44a1d78b820f6404de3cc45b34932178f9ac8f3d9114db279f657ca83fa751b7/1.png"
        },
        {
            "asset_id": "73f33751aa1bdb798adf5fec51cb9006105972576e73bbd002f2b1b243553aef",
            "asset_name": null,
            "symbol": null,
            "price_usd": 0,
            "price_xch": 0,
            "issued_time": null,
            "updated": 1645960427,
            "holders": null,
            "lisp": null,
            "clvm": null,
            "description": null,
            "tags": null,
            "logo": "https://images.spacescan.io/xch/cat/default_logo.png"
        },
        {
            "asset_id": "509deafe3cd8bbfbb9ccce1d930e3d7b57b40c964fa33379b18d628175eb7a8f",
            "asset_name": "Chia Holiday 2021",
            "symbol": "CH21",
            "price_usd": null,
            "price_xch": null,
            "issued_time": null,
            "updated": 1645975699,
            "holders": null,
            "lisp": null,
            "clvm": null,
            "description": "",
            "tags": "Event",
            "total_supply": 3000000,
            "txns_count": 106015,
            "txns_amount": 3000272,
            "logo": "https://images.spacescan.io/xch/cat/509deafe3cd8bbfbb9ccce1d930e3d7b57b40c964fa33379b18d628175eb7a8f/1.png"
        }
    ],
    "summary": {
        "total_cats": 505,
        "page_num": 1,
        "page_count": 3
    }
}
```
:::info Info

- Whenever there is a change in the version, the endpoint for this API will change. This change will be updated here in the docs. 
- The last three old versions will always be supported along with the new version. We would provide two weeks 
notice prior to the old version decommission date.

:::

## Various params for customized response

There are few params that can be set in this API response for getting customized response

- params `count`, `search`, `page`. These are the three params used for filtering the API response

- `count` param is set in the endpoint for getting the details about the number of cats that the user needs details about. 
This `count` has a maximum for about 100 and minimum of 1. The user cannot get details more than 100 CATS in a single call. 

- The Response will have the `summary` object at the end of the response which has the details about the total number of cats `total_cats` and the number of displaying cat information `page_count`. 

![CAT Response](/img/updatecatinfodetails/postman_cats_response.png)

- All the CATS information are divided into different pages of 100 CAT details per page. Each page contains 100 CAT information. `page` param is used for getting the details of 100 CAT. 

- This param `page` can be used with the param `count`. hence, the count of CAT displaying in the page can be filtered by this param. 


:::info Default

When calling the API with param `page` and without any `count` param, then the count will be defaulted to 100. In the same way, when calling the API with param `count` and without any `page` param, then the page will be defaulted to 1. 

:::

![CAT Response](/img/updatecatinfodetails/postman_cats_response_page.png)

- `search` params is used for searching the cat information based on the asset name. The API endpoint needs to be added with the `search` param with the string that user need to search. 

- The `summary` object has the page number attribute. Each page number contains 100 CAT information.

![CAT x_auth_token](/img/updatecatinfodetails/Token_Api.png)

- Set the header `x-auth-id` key with the value taken from the [spacescan.io](https://www.spacescan.io/) user profile info `API Key`

- This header `x-auth-id` is used for the user validation, and this would be a mandatory header in the future.

![CAT x_auth_id](/img/updatecatinfodetails/token_id.png)


| Name      | DataType | Description    |
| :---        |    :----:   |          :--- |
| `asset_id`      | `String`       | Unique ID used fr tracking every CAT   |
| `asset_name`   | `String`        | Name given by the CAT owner for respective CAT     |
| `symbol`   | `String`        | Symbol given by the CAT owner for the respective CAT     |
| `price_usd`   | `String`        | Price of the particular CAT in USD (Converted)     |
| `price_xch`   | `String`        | Price of the particular CAT in XCH     |
| `issued_time`   | `String`        | Timestamp when the CAT was issued by the CAT owner     |
| `updated`   | `int`        | Timestamp when the CAT owner updated the CAT details in our API      |
| `holders`   | `String`        | Number of users currently hold the respective CAT     |
| `lisp`   | `String`        | chia lisp of a cat tail      |
| `clvm`   | `String`        | compiled  version of a chia lisp of a cat tail     |
| `description`   | `String`        | Detailed description about the respective CAT provided by the CAT owner     |
| `tags`   | `String`        | Tag that was given to the CAT by the CAT owner     |
| `total_supply`   | `int`        | Total number of CATs that are created for circulation    |
| `txns_count`   | `int`        | Total number of transactions made in the respective CAT     |
| `txns_amount`   | `int`        |  Total amount  of CATs transferred     |
| `logo`   | `String`        | Logo of the CAT generated by the CAT owner for the CAT     |
| `total_cats`   | `int`        | Total Number of CATS generated and in circulation so far     |
| `page_num`   | `int`        | The total number of CAT is divided into different pages of 100 count cat per page. The Ranking is done based on the total number of transactions on each CAT    |
| `page_count`   | `int`        | Number of CATS that is being displayed in the response    |

:::tip Tip

This `search` params should be used standalone and it should not be used with any other params for getting the exact search result.

:::

![CAT Response](/img/updatecatinfodetails/postman_cats_response_search.png)

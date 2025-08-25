---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Upload Offer

This endpoint allows you to upload an offer by passing the offer string directly to the Spacescan platform.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
POST https://api.spacescan.io/api/offer/upload
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
POST https://api-testnet11.spacescan.io/api/offer/upload
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| version | string | Yes | - | API version (e.g., "1") |
| coin | string | Yes | - | Network identifier ("xch" for mainnet, "txch" for testnet) |

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| version | string | Yes | API version |
| coin | string | Yes | Network identifier |
| Content-Type | string | Yes | multipart/form-data |

### Request Body

The request body should be sent as JSON with the following field:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| offer | string | Yes | Raw offer string |



### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">

```bash
# Upload raw offer string
curl -X POST "https://api.spacescan.io/api/offer/upload?version=1&coin=xch" \
     -H "version: 1" \
     -H "coin: xch" \
     -H "Content-Type: application/json" \
     -d '{"offer": "offer1qqr83wcuu2rykcmqvpsxygqqwc7hynr6hum6hqcnc2h2ch7jgc..."}'
```

  </TabItem>
  <TabItem value="postman" label="Postman">

**Setup:**
1. Set method to `POST`
2. Set URL: `https://api.spacescan.io/api/offer/upload?version=1&coin=xch`
3. Add headers:
   - `version`: `1`
   - `coin`: `xch`
   - `Content-Type`: `application/json`
4. In Body tab:
   - Select `raw`
   - Set type to `JSON`
   - Add: `{"offer": "your_offer_string_here"}`

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

def upload_offer_string(offer_string, version="1", coin="xch"):
    url = f"https://api.spacescan.io/api/offer/upload?version={version}&coin={coin}"
    headers = {
        "version": version,
        "coin": coin,
        "Content-Type": "application/json"
    }
    data = {"offer": offer_string}
    
    response = requests.post(url, headers=headers, json=data)
    return response.json()

# Usage example
result = upload_offer_string("offer1qqr83wcuu2rykcmqvpsxygqqwc7hynr6hum6hqcnc2h2ch7jgc...")
print(result)
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
// Raw offer string
async function uploadOfferString(offerString, version = "1", coin = "xch") {
    const url = `https://api.spacescan.io/api/offer/upload?version=${version}&coin=${coin}`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'version': version,
            'coin': coin,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ offer: offerString })
    });
    
    return await response.json();
}

// Usage
uploadOfferString("offer1qqr83wcuu2rykcmqvpsxygqqwc7hynr6hum6hqcnc2h2ch7jgc...")
    .then(result => console.log(result));
```

  </TabItem>
</Tabs>

### Response

#### Successful Upload

```json
{
  "success": "true",
  "offer": {
    "id": "HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf",
    "summary": {
      "offered": [
        {
          "type": "XCH",
          "amount": 1000000000000
        }
      ],
      "requested": [
        {
          "type": "CAT2",
          "asset_id": "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365",
          "amount": 1000
        }
      ]
    }
  },
  "view_link": "https://www.spacescan.io/xch/offer/HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf",
  "offer_link": "https://api.spacescan.io/api/offer/raw/HtLDNrF32NzjDSmbub4SYDsHDNBjucVvQvdaBUJBnzjf?coin=xch"
}
```

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| success | string | "true" if upload was successful, "false" otherwise |
| offer | object | Offer details |
| view_link | string | URL to view the offer on Spacescan |
| offer_link | string | Direct API link to the raw offer data |

#### Offer Object Schema

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier for the uploaded offer |
| summary | object | Summary of the offer contents |
| summary.offered | array | Assets being offered |
| summary.requested | array | Assets being requested |

### Error Responses

#### Missing Required Parameters

```json
{
  "data": "unauthorized"
}
```
**HTTP Status:** 401

#### Invalid Offer

```json
{
  "success": "false",
  "offer": "Invalid offer"
}
```
**HTTP Status:** 400

#### File Too Large

```json
{
  "success": "false",
  "message": "Size more than 10MB"
}
```
**HTTP Status:** 413

#### Server Error

```json
{
  "success": "false"
}
```
**HTTP Status:** 500

### Error Status Codes

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid offer data |
| 401 | Unauthorized -- Missing required version or coin parameters |
| 413 | Payload Too Large -- File size exceeds 10MB limit |
| 500 | Internal Server Error -- Server processing error |

### Notes

- The API supports uploading offers by passing the offer string directly in the request body
- The `coin` parameter supports "xch" for mainnet and "txch" for testnet (automatically converted to "txch11")
- Offers are validated before being stored in the system
- The API provides both a human-readable view link and a direct API link for accessing the uploaded offer
- When `ENABLE_DEXIE_UPLOAD` environment variable is set, offers are also submitted to the Dexie platform

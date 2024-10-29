---
sidebar_position: 2
---

# Get XCH Balance

This endpoint retrieves the XCH balance for a given address.

## Endpoint

```
GET https://api.spacescan.io/address/xch-balance/{address}
```

## Parameters

| Parameter | Type   | Description                               |
|-----------|--------|-------------------------------------------|
| address   | string | The XCH address or .xch name service name |

## Live API Test

<a href="https://api.spacescan.io/address/xch-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

## Response

<ApiCallExample endpoint="https://api.spacescan.io/address/xch-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />

## Response Schema

| Field       | Type   | Description                 |
|-------------|--------|-----------------------------|
| status      | string | The status of the API request |
| xch_balance | object | XCH balance information     |

## Notes

- The API supports both XCH addresses and .xch name service names.
- The `network` parameter is optional. Possible values are `mainnet` or `testnet10`.
- The `Version` parameter is optional and defaults to 1.

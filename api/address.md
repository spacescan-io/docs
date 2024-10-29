---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Address Information

## Get XCH/CAT/NFT Balance for an Address

This endpoint allows you to fetch the XCH, CAT, and NFT balances for a given address.

### Endpoint

```
GET https://api.spacescan.io/address/balance/{address}
```

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| address   | string | The XCH address or .xch name service name       |

### Live API Test

<a href="https://api.spacescan.io/address/balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <CodeBlock language="bash">
    curl -X GET "https://api.spacescan.io/address/balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="Python">
    <CodeBlock language="python">
    import requests

    address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
    url = f"https://api.spacescan.io/address/balance/{address}"

    response = requests.get(url)
    data = response.json()
    print(data)
    </CodeBlock>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <CodeBlock language="javascript">
    const address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8";
    const url = `https://api.spacescan.io/address/balance/${address}`;

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    </CodeBlock>
  </TabItem>
</Tabs>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/address/balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />

### Response Schema

| Field       | Type    | Description                                           |
|-------------|---------|-------------------------------------------------------|
| status      | string  | The status of the API request                         |
| xch_balance | object  | XCH balance information                               |
| cat_balance | array   | Array of CAT token balances                           |
| nft_balance | object  | NFT balance information                               |

### Notes

- You can query multiple addresses (up to 10) by separating them with commas.
- The API supports both XCH addresses and .xch name service names.
- The `network` parameter is optional. Possible values are `mainnet` or `testnet10`.
- The `Version` parameter is optional and defaults to 1.

## Get XCH Balance for an Address

This endpoint retrieves only the XCH balance for a given address.

### Endpoint

```
GET https://api.spacescan.io/address/xch-balance/{address}
```

### Live API Test

<a href="https://api.spacescan.io/address/xch-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/address/xch-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />

## Get CAT Balance for an Address

This endpoint retrieves only the CAT token balances for a given address.

### Endpoint

```
GET https://api.spacescan.io/address/cat-balance/{address}
```

### Live API Test

<a href="https://api.spacescan.io/address/cat-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/address/cat-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />

## Get NFT Balance for an Address

This endpoint retrieves only the NFT balance for a given address.

### Endpoint

```
GET https://api.spacescan.io/address/nft-balance/{address}
```

### Live API Test

<a href="https://api.spacescan.io/address/nft-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/address/nft-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />

## Get Transactions for an Address

This endpoint retrieves a list of transactions for a given address (up to 1000 transactions).

### Endpoint

```
GET https://api.spacescan.io/address/transactions/{address}
```

### Live API Test

<a href="https://api.spacescan.io/address/transactions/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/address/transactions/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />

## Get XCH Address for .xch Name

This endpoint retrieves the XCH address associated with a given .xch name service name.

### Endpoint

```
GET https://api.spacescan.io/address/name-lookup/{name}
```

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| name      | string | The .xch name service name (e.g., spacescan.xch)|

### Live API Test

<a href="https://api.spacescan.io/address/name-lookup/spacescan.xch" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/address/name-lookup/spacescan.xch" />

### Notes

- This endpoint uses the name service from https://www.namesdao.org/
- The `network` parameter is optional. Possible values are `mainnet` or `testnet10`.
- The `Version` parameter is optional and defaults to 1.

For any additional information or support, please contact our API support team or refer to our comprehensive API documentation.

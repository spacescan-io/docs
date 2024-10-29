---
sidebar_position: 10
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Statistics

## Get Total Supply of XCH

This endpoint retrieves the total supply of XCH currently in circulation.

### Endpoint

```
GET https://api.spacescan.io/stats/total-supply
```

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| network   | string | Optional. Possible values: `mainnet`, `testnet10` |
| Version   | number | Optional. Defaults to 1                         |

### Live API Test

<a href="https://api.spacescan.io/stats/total-supply" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <CodeBlock language="bash">
    curl -X GET "https://api.spacescan.io/stats/total-supply"
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="Python">
    <CodeBlock language="python">
    import requests

    url = "https://api.spacescan.io/stats/total-supply"

    response = requests.get(url)
    data = response.json()
    print(data)
    </CodeBlock>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <CodeBlock language="javascript">
    const url = "https://api.spacescan.io/stats/total-supply";

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    </CodeBlock>
  </TabItem>
</Tabs>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/stats/total-supply" />

### Response Schema

| Field   | Type   | Description                       |
|---------|--------|-----------------------------------|
| status  | string | The status of the API request     |
| supply  | string | The total supply of XCH in circulation |

## Get XCH Price

This endpoint retrieves the current price of XCH in the specified currency.

### Endpoint

```
GET https://api.spacescan.io/stats/price
```

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| cur       | string | Required. Currency symbol (e.g., USD)           |
| network   | string | Optional. Possible values: `mainnet`, `testnet10` |
| Version   | number | Optional. Defaults to 1                         |

### Live API Test

<a href="https://api.spacescan.io/stats/price?cur=USD" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/stats/price?cur=USD" />

### Response Schema

| Field   | Type   | Description                       |
|---------|--------|-----------------------------------|
| status  | string | The status of the API request     |
| price   | string | The current price of XCH in the specified currency |

## Get Chia Blockchain Netspace

This endpoint retrieves the current netspace of the Chia blockchain.

### Endpoint

```
GET https://api.spacescan.io/stats/netspace
```

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| metrics   | string | Required. The unit for netspace (e.g., Eib, Pib, Tib) |
| network   | string | Optional. Possible values: `mainnet`, `testnet10` |
| Version   | number | Optional. Defaults to 1                         |

### Live API Test

<a href="https://api.spacescan.io/stats/netspace?metrics=Eib" target="_blank" rel="noopener noreferrer" className="api-test-button">
  🚀 Test API in Browser
</a>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/stats/netspace?metrics=Eib" />

### Response Schema

| Field    | Type   | Description                       |
|----------|--------|-----------------------------------|
| status   | string | The status of the API request     |
| netspace | string | The current netspace in the specified unit |

### Notes

- The `authkey` parameter is no longer required for these endpoints.
- The `network` parameter is optional and defaults to `mainnet`.
- The `Version` parameter is optional and defaults to 1.

For any additional information or support, please contact our API support team or refer to our comprehensive API documentation.

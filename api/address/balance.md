---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get XCH Balance

This endpoint allows you to fetch the XCH balance for a given address.

### Endpoint

```
GET https://api.spacescan.io/address/balance/{address}
```

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| address   | string | The XCH address       |

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

| Field           | Type   | Description                      |
|-----------------|--------|----------------------------------|
| balance         | object | XCH balance information          |
| balance.mojo    | number | The XCH balance in mojos         |
| balance.xch     | number | The XCH balance in XCH           |
| balance.usd     | number | The USD value of the XCH balance |

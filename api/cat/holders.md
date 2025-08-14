---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Token Holders

This endpoint allows you to fetch the list of holders for a specific CAT (Chia Asset Token).

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/token/holders/{asset_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/token/holders/{asset_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| asset_id  | string | The unique identifier of the CAT                |
| start_block | number | Optional starting block height to fetch holders from |
| end_block   | number | Optional ending block height to fetch holders to   |
| profile     | boolean | Optional flag to include profile information       |


:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/token/holders/{asset_id}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/token/holders/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/token/holders/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="bash">
        curl -X GET "https://api.spacescan.io/token/holders/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/token/holders/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        asset_id = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365"
        url = f"https://api.spacescan.io/token/holders/{asset_id}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        asset_id = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365"
        url = f"https://api-testnet11.spacescan.io/token/holders/{asset_id}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="javascript">
        const assetId = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365";
        const url = `https://api.spacescan.io/token/holders/${assetId}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const assetId = "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365";
        const url = `https://api-testnet11.spacescan.io/token/holders/${assetId}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/token/holders/8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365" />

### Response Schema

| Field            | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| status           | string  | The status of the API request                         |
| tokens           | array   | List of CAT holders                                   |
| next_cursor      | number  | Pagination cursor for the next page                   |
| total_count      | string  | Total holders count                                   |

#### Holder Object

Each holder in the `tokens` array contains:

| Field            | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| address          | string  | The holder's address                                  |
| amount           | string  | The amount of CAT tokens held                         |

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid parameters |
| 429 | Too Many Requests -- Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

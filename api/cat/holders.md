---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get CAT Holders

This endpoint allows you to fetch the list of holders for a specific CAT (Chia Asset Token).

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/cat/holders/{asset_id}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/cat/holders/{asset_id}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| asset_id  | string | The unique identifier of the CAT                |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/cat/holders/{asset_id}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/cat/holders/6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/cat/holders/6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
        curl -X GET "https://api.spacescan.io/cat/holders/6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/cat/holders/6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        asset_id = "6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589"
        url = f"https://api.spacescan.io/cat/holders/{asset_id}"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        asset_id = "6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589"
        url = f"https://api-testnet11.spacescan.io/cat/holders/{asset_id}"

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
        const assetId = "6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589";
        const url = `https://api.spacescan.io/cat/holders/${assetId}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const assetId = "6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589";
        const url = `https://api-testnet11.spacescan.io/cat/holders/${assetId}`;

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

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <ApiCallExample endpoint="https://api.spacescan.io/cat/holders/6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/cat/holders/6d95dae356e32a71db5ddcb42224754a02524c615c5fc35f568c2af04774e589" />
  </TabItem>
</Tabs>

### Response Schema

| Field            | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| status           | string  | The status of the API request                         |
| holders          | array   | List of CAT holders                                   |
| total_holders    | number  | Total number of unique holders                        |
| total_supply     | string  | Total supply of the CAT                              |

#### Holder Object

Each holder in the `holders` array contains:

| Field            | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| address          | string  | The holder's address                                  |
| balance          | string  | The amount of CAT tokens held                         |
| percentage       | number  | Percentage of total supply held by this address       |
| last_updated     | string  | Timestamp of last balance update                      |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 400              | Bad Request -- Your request is invalid.                                                   |
| 404              | Not Found -- The specified CAT could not be found.                                        |
| 429              | Too Many Requests -- You're requesting too many times! Slow down!                         |
| 500              | Internal Server Error -- We had a problem with our server. Try again later.               |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. |
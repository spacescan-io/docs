---
sidebar_position: 7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Token Activities

This endpoint allows you to fetch activity history for a specific CAT (Chia Asset Token), including transfers, mints, burns, and melts.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/token/activity
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/token/activity
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type   | Required | Default | Description |
|-----------|--------|----------|---------|-------------|
| cat_id    | string | No       | -       | Filter activities by CAT asset ID |
| type      | string | No       | transfer| Activity type (transfer/mint/burn/melt) |
| count     | number | No       | 100     | Number of records to return (max: 100) |
| page      | number | No       | 1       | Page number for pagination |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/token/activity?cat_id=YOUR_CAT_ID&type=transfer" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/token/activity?cat_id=8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365&type=transfer" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/token/activity?cat_id=8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365&type=transfer" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="bash">
        curl -X GET "https://api.spacescan.io/token/activity?cat_id=8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365&type=transfer&count=10&page=1"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/token/activity?cat_id=8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365&type=transfer&count=10&page=1"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        params = &#123;
            "cat_id": "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365",
            "type": "transfer",
            "count": 10,
            "page": 1
        &#125;

        url = "https://api.spacescan.io/token/activity"
        response = requests.get(url, params=params)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        params = &#123;
            "cat_id": "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365",
            "type": "transfer",
            "count": 10,
            "page": 1
        &#125;

        url = "https://api-testnet11.spacescan.io/token/activity"
        response = requests.get(url, params=params)
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
        const params = new URLSearchParams( &#123;
            cat_id: "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365",
            type: "transfer",
            count: 10,
            page: 1
        &#125;);

        const url = `https://api.spacescan.io/token/activity?${params}`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const params = new URLSearchParams( &#123;
            cat_id: "8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365",
            type: "transfer",
            count: 10,
            page: 1
        &#125;);

        const url = `https://api-testnet11.spacescan.io/token/activity?${params}`;

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

<ApiCallExample endpoint="https://api.spacescan.io/token/activity?asset_id=8c77de1427156b98fb15cce77d908f79bd69f6b4b8e3a60d8e051dac481b5365&type=transfer&count=10&page=1" />

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | The status of the API request |
| tokens | array | List of token activities |

#### Token Activity Object

| Field | Type | Description |
|-------|------|-------------|
| coin_id | string | Unique identifier for the coin |
| time | string | Timestamp of the activity |
| height | number | Block height of the transaction |
| amount | string | Amount of tokens involved in the activity |
| from| string | Source address |
| to | string | Destination address |
| cat_id | string | CAT asset identifier |


### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid parameters |
| 429 | Too Many Requests -- Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable | 
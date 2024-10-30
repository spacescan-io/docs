---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# List All CATs

This endpoint allows you to fetch a comprehensive list of all Chia Asset Tokens (CATs) in the Chia ecosystem. CATs are fungible tokens built on the Chia blockchain that enable users to create and trade custom assets, representing everything from wrapped cryptocurrencies to gaming tokens and platform utilities.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/cats
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/cats
```

  </TabItem>
</Tabs>

### Parameters

This endpoint doesn't require any parameters.

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/cats" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/cats" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/cats" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
        curl -X GET "https://api.spacescan.io/cats"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/cats"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        url = "https://api.spacescan.io/cats"

        response = requests.get(url)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        url = "https://api-testnet11.spacescan.io/cats"

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
        const url = "https://api.spacescan.io/cats";

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const url = "https://api-testnet11.spacescan.io/cats";

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
    <ApiCallExample endpoint="https://api.spacescan.io/cats" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/cats" />
  </TabItem>
</Tabs>

### Response Schema

| Field            | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| status           | string  | The status of the API request                         |
| data             | array   | Array of CAT information objects                      |

#### CAT Information Object

Each object in the data array contains:

| Field            | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| id               | string  | The unique identifier of the CAT                      |
| name             | string  | The name of the CAT                                   |
| symbol           | string  | The trading symbol of the CAT                         |
| description      | string  | Description of the CAT and its purpose                |
| type             | string  | Type of the CAT (e.g., "CAT2")                       |
| created_time     | string  | Timestamp when the CAT was created                    |
| social           | object  | Social media and website links                        |
| social.discord   | string  | Discord server link                                   |
| social.twitter   | string  | Twitter profile link                                  |
| social.website   | string  | Official website URL                                  |
| social.verified  | boolean | Verification status of the CAT                        |
| tags             | string  | Category tags for the CAT                             |
| preview_url      | string  | URL to the CAT's logo or preview image               |
| multiplier       | string  | Token multiplier value                                |

### Error Responses

| HTTP Status Code | Meaning                                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| 429              | Too Many Requests -- You're requesting too many times! Slow down!                         |
| 500              | Internal Server Error -- We had a problem with our server. Try again later.               |
| 503              | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. | 
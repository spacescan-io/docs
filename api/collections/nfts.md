---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Collection NFTs

This endpoint returns NFTs in a collection with optional filtering and sorting capabilities.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
POST https://api.spacescan.io/collections/{collection_id}/nfts
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
POST https://api-testnet11.spacescan.io/collections/{collection_id}/nfts
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| collection_id | string | Yes | - | The unique identifier of the collection |
| page | number | No | 1 | Page number for pagination |
| count | number | No | 50 | Number of items per page |
| owner_did | string | No | - | Filter NFTs by owner DID |

### Request Body (Filters)

```json
{
  "traits": [
    {"head": "Background", "subhead": "Blue"}
  ],
  "rarity": {
    "min": 1,
    "max": 100,
    "percentage": 10
  },
  "orderBy": "rarity",
  "order": "desc"
}
```

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X POST "https://pro-api.spacescan.io/collections/{collection_id}/nfts" \
     -H "x-api-key: YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"traits": [{"head": "Background", "subhead": "Blue"}]}'
```
:::

### Request Example

<Tabs>
  <TabItem value="curl" label="cURL">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="bash">
        curl -X POST "https://api.spacescan.io/collections/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl/nfts" \
             -H "Content-Type: application/json" \
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X POST "https://api-testnet11.spacescan.io/collections/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl/nfts" \
             -H "Content-Type: application/json" \
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">
        import requests

        collection_id = "col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl"
        url = f"https://api.spacescan.io/collections/{collection_id}/nfts"
        

        response = requests.post(url, json=filters)
        data = response.json()
        print(data)
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">
        import requests

        collection_id = "col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl"
        url = f"https://api-testnet11.spacescan.io/collections/{collection_id}/nfts"
        

        response = requests.post(url, json=filters)
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
        const collectionId = "col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl";
        const url = `https://api.spacescan.io/collections/${collectionId}/nfts`;
    

        fetch(url, &#123;
            method: 'POST',
            headers: &#123;
                'Content-Type': 'application/json',
            &#125;,
            body: JSON.stringify(filters)
        &#125;)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">
        const collectionId = "col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl";
        const url = `https://api-testnet11.spacescan.io/collections/${collectionId}/nfts`;
        
       
        fetch(url, &#123;
            method: 'POST',
            headers: &#123;
                'Content-Type': 'application/json',
            &#125;,
            body: JSON.stringify(filters)
        &#125;)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

### Response

<ApiCallExample endpoint="https://api.spacescan.io/collections/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl/nfts" />

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | The status of the API request |
| data | array | List of NFTs |
| pagination | object | Pagination information |

#### NFT Object

| Field | Type | Description |
|-------|------|-------------|
| id | string | NFT ID |
| name | string | NFT name |
| description | string | NFT description |
| preview_url | string | NFT preview URL |
| minted_at | string | Minting timestamp |
| trade_count | number | Number of trades |
| volume | number | Trading volume |
| attributes | array | NFT attributes/traits |
| owner | object | Owner details |

### Error Responses

| HTTP Status Code | Meaning |
|-----------------|---------|
| 400 | Bad Request -- Invalid parameters |
| 429 | Too Many Requests -- Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable | 
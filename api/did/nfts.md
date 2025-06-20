---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get DID NFTs

This endpoint allows you to fetch NFTs associated with a specific DID (Decentralized Identifier), including both created and owned NFTs.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```
GET https://api.spacescan.io/did/nfts/{did}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```
GET https://api-testnet11.spacescan.io/did/nfts/{did}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type    | Required | Default | Description                                     |
|-----------|---------|----------|---------|-------------------------------------------------|
| did       | string  | Yes      | -       | The Decentralized Identifier (DID)              |
| type      | string  | No       | owned   | Type of NFTs to fetch: `all`, `created`, `owned` |
| simple    | boolean | No       | false   | When true, returns only basic NFT info to reduce response size and improve performance |
| page      | number  | No       | 1       | Page number for pagination                      |
| count     | number  | No       | 100     | Number of NFTs per page (max: 100)             |

:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/did/nfts/{did}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/did/nfts/did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2?type=owned&simple=true" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/did/nfts/did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2?type=owned&simple=true" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
</Tabs>

### Request Examples

<Tabs>
  <TabItem value="curl" label="cURL">
    <Tabs>
      <TabItem value="owned" label="Owned NFTs">
        <CodeBlock language="bash">
        curl -X GET "https://api.spacescan.io/did/nfts/did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2?type=owned&page=1&count=50"
        </CodeBlock>
      </TabItem>
      <TabItem value="created" label="Created NFTs">
        <CodeBlock language="bash">
        curl -X GET "https://api.spacescan.io/did/nfts/did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2?type=created&page=1&count=50"
        </CodeBlock>
      </TabItem>
      <TabItem value="all" label="All NFTs">
        <CodeBlock language="bash">
        curl -X GET "https://api.spacescan.io/did/nfts/did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2?type=all&page=1&count=50"
        </CodeBlock>
      </TabItem>
      <TabItem value="simple" label="Simple Mode">
        <CodeBlock language="bash">
        curl -X GET "https://api.spacescan.io/did/nfts/did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2?type=owned&simple=true&page=1&count=50"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="owned" label="Owned NFTs">
        <CodeBlock language="python">
{`import requests

did = "did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2"
params = {
    "type": "owned",
    "page": 1,
    "count": 50
}
url = f"https://api.spacescan.io/did/nfts/{did}"

response = requests.get(url, params=params)
data = response.json()
print(data)`}
        </CodeBlock>
      </TabItem>
      <TabItem value="simple" label="Simple Mode">
        <CodeBlock language="python">
{`import requests

did = "did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2"
params = {
    "type": "owned",
    "simple": True,
    "page": 1,
    "count": 50
}
url = f"https://api.spacescan.io/did/nfts/{did}"

response = requests.get(url, params=params)
data = response.json()
print(data)`}
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <Tabs>
      <TabItem value="owned" label="Owned NFTs">
        <CodeBlock language="javascript">
{`const did = "did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2";
const params = new URLSearchParams({
    type: "owned",
    page: "1",
    count: "50"
});
const url = \`https://api.spacescan.io/did/nfts/\${did}?\${params}\`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
        </CodeBlock>
      </TabItem>
      <TabItem value="simple" label="Simple Mode">
        <CodeBlock language="javascript">
{`const did = "did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2";
const params = new URLSearchParams({
    type: "owned",
    simple: "true",
    page: "1",
    count: "50"
});
const url = \`https://api.spacescan.io/did/nfts/\${did}?\${params}\`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <ApiCallExample endpoint="https://api.spacescan.io/did/nfts/did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2?type=owned&simple=true&page=1&count=5" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/did/nfts/did:chia:19qf3g9876t0rkq7tfdkc28cxfy424yzanea29rkzylq89kped9hq3q7wd2?type=owned&simple=true&page=1&count=5" />
  </TabItem>
</Tabs>

### Response Schema

| Field                    | Type    | Description                                           |
|-------------------------|---------|-------------------------------------------------------|
| status                  | string  | The status of the API request                         |
| data                    | object  | The main data object                                  |
| data.owned_nft_count   | number  | Total number of NFTs owned by the DID                |
| data.created_nft_count | number  | Total number of NFTs created by the DID              |
| data.page              | number  | Current page number                                   |
| data.size              | number  | Number of NFTs per page                               |
| data.owned_nfts        | array   | Array of owned NFTs (when type is 'owned' or 'all')  |
| data.created_nfts      | array   | Array of created NFTs (when type is 'created' or 'all') |

### NFT Object Schema (Full Mode)

| Field                    | Type    | Description                                           |
|-------------------------|---------|-------------------------------------------------------|
| id                      | string  | The NFT ID                                            |
| name                    | string  | The NFT name                                          |
| preview_url             | string  | URL to the NFT preview image                          |
| created_height          | string  | Block height when NFT was created                     |
| created_time            | string  | Timestamp when NFT was created                        |
| flagged                 | boolean | Whether the NFT has been flagged                      |
| description             | string  | NFT description                                       |
| collection              | object  | Collection information                                |
| collection.id           | string  | Collection ID                                         |
| collection.name         | string  | Collection name                                       |
| last_sale               | string  | Last sale price in mojos                              |
| creator                 | object  | Creator information                                   |
| creator.address         | string  | Creator's address                                     |
| creator.address_hex     | string  | Creator's address in hex format                       |
| creator.did             | string  | Creator's DID                                         |
| creator.did_hex         | string  | Creator's DID in hex format                           |
| owner                   | object  | Owner information                                     |
| owner.address           | string  | Owner's address                                       |
| owner.address_hex       | string  | Owner's address in hex format                         |
| sensitive_content       | boolean | Whether the NFT contains sensitive content            |
| attributes              | array   | NFT attributes                                        |
| rarity                  | number  | NFT rarity score                                      |
| top_bid                 | number  | Current top bid price                                 |
| buy_now                 | number  | Buy now price                                         |

### NFT Object Schema (Simple Mode)

| Field                    | Type    | Description                                           |
|-------------------------|---------|-------------------------------------------------------|
| id                      | string  | The NFT ID                                            |
| name                    | string  | The NFT name                                          |
| preview_url             | string  | URL to the NFT preview image                          |
| collection              | object  | Collection information                                |
| collection.id           | string  | Collection ID                                         |
| collection.name         | string  | Collection name                                       |

### Type Parameter Options

- **`owned`** (default): Returns only NFTs currently owned by the DID
- **`created`**: Returns only NFTs created by the DID
- **`all`**: Returns both owned and created NFTs

### Simple Mode Benefits

When `simple=true` is used:
- **Reduced Response Size**: Only essential fields are included
- **Faster Performance**: Less data processing and transfer
- **Lower Bandwidth**: Ideal for mobile applications or when only basic info is needed
- **Better Caching**: Smaller responses can be cached more efficiently

### Example Responses

<Tabs>
  <TabItem value="full" label="Full Mode Response">
    <CodeBlock language="json">
{`{
  "status": "success",
  "data": {
    "owned_nft_count": 25,
    "created_nft_count": 10,
    "page": 1,
    "size": 50,
    "owned_nfts": [
      {
        "id": "nft1abc123def456",
        "name": "Cool NFT #1",
        "preview_url": "https://assets.spacescan.io/nft/image1.jpg",
        "created_height": "1234567",
        "created_time": "2023-01-15T10:30:00Z",
        "flagged": false,
        "description": "A really cool NFT",
        "collection": {
          "id": "col123",
          "name": "Cool Collection"
        },
        "last_sale": "1000000",
        "creator": {
          "address": "xch1abc...",
          "address_hex": "abc123...",
          "did": "did:chia:123...",
          "did_hex": "123..."
        },
        "owner": {
          "address": "xch1def...",
          "address_hex": "def456..."
        },
        "sensitive_content": false,
        "attributes": [],
        "rarity": 85,
        "top_bid": 500000,
        "buy_now": 2000000
      }
    ],
    "created_nfts": []
  }
}`}
    </CodeBlock>
  </TabItem>
  <TabItem value="simple" label="Simple Mode Response">
    <CodeBlock language="json">
{`{
  "status": "success",
  "data": {
    "owned_nft_count": 25,
    "created_nft_count": 10,
    "page": 1,
    "size": 50,
    "owned_nfts": [
      {
        "id": "nft1abc123def456",
        "name": "Cool NFT #1",
        "preview_url": "https://assets.spacescan.io/nft/image1.jpg",
        "collection": {
          "id": "col123",
          "name": "Cool Collection"
        }
      }
    ],
    "created_nfts": []
  }
}`}
    </CodeBlock>
  </TabItem>
</Tabs> 
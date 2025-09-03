---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ApiCallExample from '@site/src/components/ApiCallExample';

# Get Token Balance

This endpoint allows you to fetch the token (CAT) balances for a given address.

### Endpoint

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

```bash
GET https://api.spacescan.io/address/token-balance/{address}
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
GET https://api-testnet11.spacescan.io/address/token-balance/{address}
```

  </TabItem>
</Tabs>

### Parameters

| Parameter | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| address   | string | The XCH address to fetch token balances for     |
| start_block | number |  Start block height for filtering balances (optional) |
| end_block | number |  End block height for filtering balances (optional) |
| start_timestamp | number |  Start timestamp (in seconds) for filtering balances (optional) |
| end_timestamp | number |  End timestamp (in seconds) for filtering balances (optional) |



:::info Free API
Use `api.spacescan.io` for free tier access. See our [API Plans](https://spacescan.io/apis#plans) for rate limits and features.
:::

:::tip Pro API
Use `pro-api.spacescan.io` with your API key in the `x-api-key` header. See our [API Plans](https://spacescan.io/apis#plans) for details.

```bash
curl -X GET "https://pro-api.spacescan.io/address/token-balance/{address}" \
     -H "x-api-key: YOUR_API_KEY"
```
:::

### Live API Test

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <a href="https://api.spacescan.io/address/token-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
      🚀 Test API in Browser
    </a>
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <a href="https://api-testnet11.spacescan.io/address/token-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" target="_blank" rel="noopener noreferrer" className="api-test-button">
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
        curl -X GET "https://api.spacescan.io/address/token-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
        </CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="bash">
        curl -X GET "https://api-testnet11.spacescan.io/address/token-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
        </CodeBlock>
      </TabItem>
      <TabItem value="pro-filtered" label="Pro (With Filtering)">
        <CodeBlock language="bash">
        curl -X GET "https://pro-api.spacescan.io/address/token-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8?start_block=7309188&end_block=7428612" \
             -H "x-api-key: YOUR_API_KEY"
        </CodeBlock>
      </TabItem>
    </Tabs>
  </TabItem>
  <TabItem value="python" label="Python">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="python">{`
        import requests

        address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
        url = f"https://api.spacescan.io/address/token-balance/{address}"

        response = requests.get(url)
        data = response.json()
        print(data)
        `}</CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="python">{`
        import requests

        address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
        url = f"https://api-testnet11.spacescan.io/address/token-balance/{address}"

        response = requests.get(url)
        data = response.json()
        print(data)
        `}</CodeBlock>
      </TabItem>
      <TabItem value="pro-filtered" label="Pro (With Filtering)">
        <CodeBlock language="python">{`
        import requests

        address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8"
        api_key = "YOUR_API_KEY"
        params = {
            "start_block": 7309188,
            "end_block": 7428612
        }
        
        url = f"https://pro-api.spacescan.io/address/token-balance/{address}"
        headers = {"x-api-key": api_key}
        
        response = requests.get(url, params=params, headers=headers)
        data = response.json()
        print(data)
        `}</CodeBlock>
      </TabItem>
 
    </Tabs>
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    <Tabs>
      <TabItem value="mainnet" label="Mainnet">
        <CodeBlock language="javascript">{`
        const address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8";
        const url = \`https://api.spacescan.io/address/token-balance/\${address}\`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        `}</CodeBlock>
      </TabItem>
      <TabItem value="testnet" label="Testnet">
        <CodeBlock language="javascript">{`
        const address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8";
        const url = \`https://api-testnet11.spacescan.io/address/token-balance/\${address}\`;

        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        `}</CodeBlock>
      </TabItem>
      <TabItem value="pro-filtered" label="Pro (With Filtering)">
        <CodeBlock language="javascript">{`
        const address = "xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8";
        const apiKey = "YOUR_API_KEY";
        const params = new URLSearchParams({
          start_block: "7309188",
          end_block: "7428612"
        });
        
        const url = \`https://pro-api.spacescan.io/address/token-balance/\${address}?\${params}\`;
        
        fetch(url, {
          headers: {
            "x-api-key": apiKey
          }
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        `}</CodeBlock>
      </TabItem>

    </Tabs>
  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
    <ApiCallExample endpoint="https://api.spacescan.io/address/token-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />
  </TabItem>
  <TabItem value="testnet" label="Testnet">
    <ApiCallExample endpoint="https://api-testnet11.spacescan.io/address/token-balance/xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8" />
  </TabItem>
</Tabs>

### Response Schema

| Field | Type | Description |
|-------|------|-------------|
| status | string | Success or failure status |
| balance | array | List of token balances |
| balance[].asset_id | string | The asset ID of the token |
| balance[].token_id | string | The token ID in tkn format |
| balance[].balance | number | The token balance amount |
| balance[].name | string | The name of the token (null if not available) |
| balance[].symbol | string | The symbol of the token (null if not available) | 
---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# NFT

## Get NFT Collection info

Retrieves NFT collection info by `col_id`

```
https://api.spacescan.io/api/collection/info
    ?authkey=your_auth_key
    &col_id=col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">col_id</td><td>The id of NFT collection<br/>
        Note:
        The Collection id is Bech32 encoded version of collection from meta data and minter DID with HRP as 'col'</td></tr>
        <tr><td colspan="10">network</td><td>Its optional <br/>
      Possible values:
      mainnet|testnet10</td></tr>
      <tr><td colspan="10">Version</td><td>Its optional <br/>
      Defaults to 1</td></tr>
    </table>
  </TabItem>
  <TabItem value="Response" label="Response">
  <CodeBlock language="jsx">
  {`{
    "status": "SUCCESS"
}`}
  </CodeBlock>
  </TabItem>
</Tabs>

## Get list of NFT details in Collection

Retrieves NFT details from a collection by `col_id`

```
https://api.spacescan.io/api/collection/nfts
    ?authkey=your_auth_key
    &col_id=col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">col_id</td><td>The id of NFT collection<br/>
        Note:
        The Collection id is Bech32 encoded version of collection from meta data and minter DID with HRP as 'col'</td></tr>
    <tr><td colspan="10">network</td><td>Its optional <br/>
      Possible values:
      mainnet|testnet10</td></tr>
      <tr><td colspan="10">Version</td><td>Its optional <br/>
      Defaults to 1</td></tr>
    </table>
  </TabItem>
  <TabItem value="Response" label="Response">
  <CodeBlock language="jsx">
  {`{
    "status": "SUCCESS"
}`}
  </CodeBlock>
  </TabItem>
</Tabs>

## Get holders of NFT Collection

Retrieves current holders address and DID of a collection by `col_id`

```
https://api.spacescan.io/api/collection/holders
    ?authkey=your_auth_key
    &col_id=col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">col_id</td><td>The id of NFT collection<br/>
        Note:
        The Collection id is Bech32 encoded version of collection from meta data and minter DID with HRP as 'col'</td></tr>
    <tr><td colspan="10">network</td><td>Its optional <br/>
      Possible values:
      mainnet|testnet10</td></tr>
      <tr><td colspan="10">Version</td><td>Its optional <br/>
      Defaults to 1</td></tr>
    </table>
  </TabItem>
  <TabItem value="Response" label="Response">
  <CodeBlock language="jsx">
  {`{
    "status": "SUCCESS"
}`}
  </CodeBlock>
  </TabItem>
</Tabs>

## Get NFT info

Get NFT basic info by `nft_id`

```
https://api.spacescan.io/api/nft/info
    ?authkey=your_auth_key
    &nft_id=nft1qgw6j93ynlu5d5ufhrwsq9e8ptlz9u624t0wgyzefn9wk9f90f9sv4kdss
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">nft_id</td><td>The id of NFT.<br/>
        Note:
        The NFT id is Bech32 encoded version of launcer coin id of the NFT with HRP as 'nft'</td></tr>
    <tr><td colspan="10">network</td><td>Its optional <br/>
      Possible values:
      mainnet|testnet10</td></tr>
      <tr><td colspan="10">Version</td><td>Its optional <br/>
      Defaults to 1</td></tr>
    </table>
  </TabItem>
  <TabItem value="Response" label="Response">
  <CodeBlock language="jsx">
  {`{
    "status": "SUCCESS"
}`}
  </CodeBlock>
  </TabItem>
</Tabs>

## Get NFT transactions

Get NFT coin transactions details by `nft_id`

```
https://api.spacescan.io/api/nft/transactions
    ?authkey=your_auth_key
    &nft_id=nft1qgw6j93ynlu5d5ufhrwsq9e8ptlz9u624t0wgyzefn9wk9f90f9sv4kdss
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">nft_id</td><td>The id of NFT.<br/>
        Note:
        The NFT id is Bech32 encoded version of launcer coin id of the NFT with HRP as 'nft'</td></tr>
    <tr><td colspan="10">network</td><td>Its optional <br/>
      Possible values:
      mainnet|testnet10</td></tr>
      <tr><td colspan="10">Version</td><td>Its optional <br/>
      Defaults to 1</td></tr>
    </table>
  </TabItem>
  <TabItem value="Response" label="Response">
  <CodeBlock language="jsx">
  {`{
    "status": "SUCCESS"
}`}
  </CodeBlock>
  </TabItem>
</Tabs>

## Get NFT events

Retrieves NFT evenets details by `nft_id`

```
https://api.spacescan.io/api/nft/transactions
    ?authkey=your_auth_key
    &nft_id=nft1qgw6j93ynlu5d5ufhrwsq9e8ptlz9u624t0wgyzefn9wk9f90f9sv4kdss
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">nft_id</td><td>The id of NFT.<br/>
        Note:
        The NFT id is Bech32 encoded version of launcer coin id of the NFT with HRP as 'nft'</td></tr>
    <tr><td colspan="10">network</td><td>Its optional <br/>
      Possible values:
      mainnet|testnet10</td></tr>
      <tr><td colspan="10">Version</td><td>Its optional <br/>
      Defaults to 1</td></tr>
    </table>
  </TabItem>
  <TabItem value="Response" label="Response">
  <CodeBlock language="jsx">
  {`{
    "status": "SUCCESS"
}`}
  </CodeBlock>
  </TabItem>
</Tabs>

## Get NFT stats

Retrieves NFT total minted count in chia block chain

```
https://api.spacescan.io/api/stats/nfts
    ?authkey=your_auth_key
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">network</td><td>Its optional <br/>
            Possible values:
      mainnet|testnet10</td></tr>
      <tr><td colspan="10">Version</td><td>Its optional <br/>
      Defaults to 1</td></tr>
    </table>
  </TabItem>
  <TabItem value="Response" label="Response">
  <CodeBlock language="jsx">
  {`{
    "status": "SUCCESS"
}`}
  </CodeBlock>
  </TabItem>
</Tabs>

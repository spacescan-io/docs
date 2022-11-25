---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# CAT

## Get CAT(Chia Asset Token) info

Retrieves NFT collection info by `col_id`

```
https://api.spacescan.io/cat/info
    ?authkey=your_auth_key
    &asset_id=509deafe3cd8bbfbb9ccce1d930e3d7b57b40c964fa33379b18d628175eb7a8f
```
> For testnet add param `network=TN10` in above query

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">asset_id</td><td>The id of CAT</td></tr>
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

## Get holders of CAT Collection 

Retrieves current holders address of CAT by `asset_id`

```
https://api.spacescan.io/cat/holders
    ?authkey=your_auth_key
    &asset_id=col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl
```
> For testnet add param `network=TN10` in above query

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">asset_id</td><td>The id of CAT</td></tr>
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


## Get CAT stats

Retrieves total CAT created and transactions details in chia block chain

```
https://api.spacescan.io/stats/cats
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

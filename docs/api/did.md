---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# DID

## Get CAT(Chia Asset Token) info

Retrieves NFT collection info by `col_id`

```
https://api.spacescan.io/api/did/info
    ?authkey=your_auth_key
    &did=did:chia:1n7and8v9lxpfd8e0y2lqtdfhzm2mahsejn8qz0mwajj5670kfgpsenw9dc
```
> For testnet add param `network=TN10` in above query

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">did</td><td>The DID id which is bech32 of DID launcher coin id </td></tr>
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
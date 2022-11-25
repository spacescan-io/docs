---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Offers

## Get CAT(Chia Asset Token) info

Retrieves NFT collection info by `number` or `hash`

```
https://api.spacescan.io/block/info
    ?authkey=your_auth_key
    &number=12345
```
> For testnet add param `network=TN10` in above query

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">number</td><td>The block number</td></tr>
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
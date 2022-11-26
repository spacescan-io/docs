---
sidebar_position: 7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Coins

## Get Coin(Transaction) info by coin id

Retrieves Coin(transaction) details by `coin id`

```
https://api.spacescan.io/coin/info
    ?authkey=your_auth_key
    &coin_id=0x554c7cdc91269736fca8216dfbfa01841185bad4d1097ec899d2b18f2e558789
```
<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">coin_id</td><td>The coin id of the transaction </td></tr>
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

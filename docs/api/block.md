---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Block

## Get Block info by Number or hash

Retrieves Chia blockchain Block info by `number` or `hash`

```
https://api.spacescan.io/api/block/info
    ?authkey=your_auth_key
    &number=12345
```
<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">number</td><td>The block number
        <br/>
        You can get block info by number or block hash so send any one
        </td></tr>
        <tr><td colspan="10">hash</td><td>The block hash
        <br/>
        You can get block info by number or block hash so send any one</td></tr>
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

## Get Peak Block

Retrieves Chia blockc chain peak block

```
https://api.spacescan.io/api/block/info
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

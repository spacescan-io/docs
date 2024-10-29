---
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Mempool

## Get min fees

Retrieve min fees needed to push standard transaction into next block

```
https://api.spacescan.io/mempool/minfee
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
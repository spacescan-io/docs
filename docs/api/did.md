---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# DID

## Get DID(Decentralized Identifiers) info

Retrieves NFT collection info by `did`

```
https://api.spacescan.io/did/info
    ?authkey=your_auth_key
    &did=did:chia:1n7and8v9lxpfd8e0y2lqtdfhzm2mahsejn8qz0mwajj5670kfgpsenw9dc
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">did</td><td>The DID id which is bech32 of DID launcher coin id </td></tr>
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
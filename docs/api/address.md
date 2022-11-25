---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Address

## Get XCH balance for an address

Retrieves XCH balance for a `address`

```
https://api.spacescan.io/address/xch-balance
    ?authkey=your_auth_key
    &address=xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">address</td><td>The XCH address in string format. It can also accept multiple address with comma separation. Max of 10 address allowed in sigle call.<br/>
        Example:<br/> address=xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8,<br/>xch18rv9snq2vxl4f9mt8j7zffattqqac80ajcvpe2h6j3t9w8y53l3s8970ya
      </td></tr>
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

## Get CAT balance for an address

Retrieves CAT balances for a `address`

```
https://api.spacescan.io/address/cat-balance
    ?authkey=your_auth_key
    &address=xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">address</td><td>The XCH address in string format. It can also accept multiple address with comma separation. Max of 10 address allowed in sigle call. <br/>
        Example:<br/> address=xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8,<br/>xch18rv9snq2vxl4f9mt8j7zffattqqac80ajcvpe2h6j3t9w8y53l3s8970ya
      </td></tr>
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

## Get NFT balance for an address

Retrieves nft balances for a `address`

```
https://api.spacescan.io/address/nft-balance
    ?authkey=your_auth_key
    &address=xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">address</td><td>The XCH address in string format. It can also accept multiple address with comma separation. Max of 10 address allowed in sigle call.<br/>
        Example:<br/> address=xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8,<br/>xch18rv9snq2vxl4f9mt8j7zffattqqac80ajcvpe2h6j3t9w8y53l3s8970ya
      </td></tr>
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

## Get transactions for an address

Retrieves list of transactions for a `address` and it return max of 1000 transactions

```
https://api.spacescan.io/address/transactions
    ?authkey=your_auth_key
    &address=xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">address</td><td>The XCH address in string format. It can also accept multiple address with comma separation. Max of 10 address allowed in sigle call.<br/>
        Example:<br/> address=xch1a6cd558gqsz2hch5pt0l8mx7zhavf32q5lyde09zjtqcmkelr9ns59k0j8,<br/>xch18rv9snq2vxl4f9mt8j7zffattqqac80ajcvpe2h6j3t9w8y53l3s8970ya
      </td></tr>
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

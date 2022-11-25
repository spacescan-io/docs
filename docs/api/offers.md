---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Offers

## Get offers

Retrieve offers for provided details

```
https://api.spacescan.io/offers/list
    ?authkey=your_auth_key
    &status=active
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">status</td><td>Its optional <br/>
            Possible values:
      Active|Cancelled</td></tr>
      <tr><td colspan="10">offered</td><td>Its optional <br/>
            Possible values:
      nft id|col id| cat id|xch</td></tr>
      <tr><td colspan="10">requested</td><td>Its optional <br/>
            Possible values:
      nft id|col id| cat id|xch</td></tr>
      <tr><td colspan="10">sort</td><td>Its optional <br/>
            Possible values:
      low|high</td></tr>
      <tr><td colspan="10">page</td><td>Its optional and each call return 100 offers <br/>
            Possible values:
      1 to 100</td></tr>
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

## Get offer detail

Retrieve offer for provided details

```
https://api.spacescan.io/offer
    ?authkey=your_auth_key
    &id=D2nSXdY7wXyu6Pki7XFUytSLyVNiqFEHLZLj9u19gCZW
```

<Tabs>
  <TabItem value="Request" label="Request" default>
    <table border="0">
        <tr><th colspan="10">Params</th><th>Details</th></tr>
        <tr><td colspan="10">id</td><td>Base58 encoded SHA256 Hash of the offer file</td></tr>
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

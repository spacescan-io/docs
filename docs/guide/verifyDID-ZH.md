## 1) 用Twitter验证

Chia NFT有链下元数据，它有一个选项可以为收藏品添加Twitter句柄（Twitter句柄是出现在唯一Twitter URL末尾的用户名。Twitter句柄与Twitter名称不同。推特句柄出现在你的个人资料URL的@符号之后，它必须是你的帐户唯一的）。铸造者的DID和链外元数据中的twitter句柄的链接可被用来验证收藏品的真实性。

元数据中铸造者DID和twitter handle之间的相同链接可用于提供创作者DID信息。你可以完全控制Spacecan为该DID显示什么样的内容，你也可以通过发送推特随时更新。

Spacescan推特机器人在被调用时，会做以下动作：
- 验证收藏品和twitter手柄之间的链接，然后在集合旁边添加DID标签
- 更新收藏品创作者的简介图像
- 更新创作者简介的标语
- 更新创作者姓名（这将取代DID字母数字标识符，并为藏品提供真实性）

如要调用机器人，请从用于收集这个的手柄中以这种格式推特：

```jsx
@spacescan_io
#verifydid
<DID>
<Collection Link>
#didprofile
name:<Creator Name>
pic:<URI Pic>
banner:<URI Banner>
```

示例推文 - https://twitter.com/roybotNFT/status/1556833192920899584

将< >中的项目替换为以下内容。

- <DID>: 这是NFTs创作者的DID
- 收藏品链接 : 这是你的收藏品的spacecan.io URL
- <Creator Name>: 这是你想作为NFT创作者使用的名称
- <URI Pic>: 为你的DID创作者简介页面提供图片的URI
- <URI Banner> : 横幅图片的URI，将出现在你的DID创作者简介页面上

#### 收藏与添加个人资料图标和横幅 [Link to DID](https://www.spacescan.io/xch/did/fe9bdb9a8e6825580d699faa6160fbd9d5d64a525ac49d174357d68ed0ae194e)

![Update](URI-Pic-and-Banner.jpg)

#### DID创建者的名字显示在收藏品页面 [Link to Collection](https://www.spacescan.io/xch/nft/collection/col129ph2rgr3r3f2znqe3x2xj7edhl7we0n3qzphsdf5q3hcr2gyfase5u9qg)
![Update](Creator-Name.jpg)

## 2)用域名进行验证

我们有一个机器人，它可以检查在你的网站域名中加入元数据的DID信息。这个动作只发生在一个收藏品中的NFT被处理时。因此，请确保你的域名TXT记录中有这些DID的信息。例如，如果元数据中提供的网站是https://www.testdomain.com 那么机器人将检查以下域名/子域名中的TXT的DID信息。
- www.testdomain.com
- did.testdomain.com
- testdomains.com

[roybotNFT](https://twitter.com/roybotNFT) created a guide for this process in our discord and its enlarged here.
Thank you for this guide.
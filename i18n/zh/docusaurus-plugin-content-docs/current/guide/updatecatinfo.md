# 更新CAT的详细信息

CAT信息可以通过点击标签导航栏内的 "添加标签 "下拉菜单进行更新。
![Add token nav bar](/img/updatecatinfodetails/Addtokennavbar.png)

如果用户已经登录到Spacecan explorer，这个页面将重定向到更新CAT页面，否则它将重定向到用户的登录页面。

## 登录 spacescan.io

为了登录 spacescan.io网站，用户需要一个有效的电子邮件ID和密码。我们将发送一个验证码到所提供的电子邮件ID。一旦用户注册到 spacescan.io 网站，添加令牌页面将被启用，以便用户编辑他们的CAT详细信息。

## 更新你的CAT

每个CAT都有一个唯一的Assets ID。这个Assets ID用于更新CAT的信息。

- 提供你的Assets ID

![Asset ID bar](/img/updatecatinfodetails/asset_id_bar.png)

- 只有在提供了一个有效的Assets ID后，才能更新CAT的所有其他细节。

- 一旦提供了Assets ID，它将接受检查，以验证该CAT是否为其他任何人所拥有。

- 如果没有用户被标记到这个特定的CAT Assets ID，用户可以用有效的细节更新CAT。

- 如果该CAT Assets ID有任何所有者，用户只能查看该CAT的细节并发出警告。

![Not a owner error](/img/updatecatinfodetails/notownererror.png)

- 用户只能编辑/更新CAT信息5次。如果用户超过这个限制，CAT信息不能被用户编辑，直到它被spacecan.io团队撤销。

- 如果要更新CAT的细节，请联系spacescan.io团队，在[discord](https://discord.com/invite/Bb4sj3Bg9P), [twitter](https://twitter.com/spacescan_io)或在`spacescan.io@gmail.com`

- 每个CAT细节都需要一个CAT标志。如果不提供CAT标志，CAT细节就不能被更新。

## 必填字段

CAT更新页面中的少数字段是必要的，以增加用户体验。

- Asset ID （如果没有这个，其他细节就无法编辑）。
- Asset 名称
- Asset 标志或图像
- Asset 标签

没有这些字段，用户就不能更新CAT的细节。

## 更新成功后

一旦CAT的详细信息被成功更新。

- 用户可以看到屏幕上弹出的成功告示供参考。

- 10分钟后，更新后的CAT细节将在[Top Tokens page](https://www.spacescan.io/xch/cat1/topTokens)页面下可见。

- 用户可以通过在[Top Tokens page](https://www.spacescan.io/xch/cat1/topTokens)的搜索框中提供他们的Assets ID来搜索他们的CAT的细节。

:::tip TIP

为了获得更好的性能和结果，有一个缓存机制Spacecan遵循。
每次CAT的更新将需要1小时才能在CAT的摘要页中看到变化。请等待1小时后再检查CAT信息，并且在这段时间内不要再次更新相同的信息。这将减少您的CAT更新总数的限制（**最大限制：** 5次/CAT用户）。

:::
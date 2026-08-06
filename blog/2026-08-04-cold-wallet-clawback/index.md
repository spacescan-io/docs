---
slug: cold-wallet-clawback-recovery-window
title: "Cold storage just failed 1,200 Bitcoin wallets. Chia gives you a recovery window — if you're watching."
description: The Coldcard exploit drained $130M from wallets that were never plugged in. Chia's clawback primitive gives you something Bitcoin cannot — a window in which a theft is reversible. Here is how to set one up, and how to make sure you find out in time.
tags: [Chia, security, clawback, wallets, cold-storage, alerts, spacescan]
authors: [natsabari]
---

Since 30 July 2026, attackers have drained roughly **$130 million in Bitcoin** from hardware wallets that were never plugged into anything. A firmware integration error shipped in March 2021 routed Coldcard seed generation to a deterministic software PRNG instead of the device's hardware RNG — which means the attacker could *reconstruct* seeds by scanning the chain, with no phishing, no malware, and no physical access to the device.

The part that should stop every self-custody user cold: **many of the drained wallets had been dormant for years.** Their owners were not careless. They did everything the guides told them to do. They just had no idea it was happening.

And on Bitcoin, knowing wouldn't have helped much anyway. A confirmed transaction is final.

<!-- truncate -->

## The uncomfortable question

Chia people have been asking a fair question this week: *would this have been different on Chia?*

Let me answer it honestly, because the wrong answer here is worse than no answer.

**A compromised seed is a compromised seed.** If your Chia master secret key leaks, an attacker can spend your ordinary coins, and Chia has no magic undo. Anyone telling you otherwise is selling something.

But Chia does have a primitive Bitcoin does not: **clawback** ([CHIP-0044](https://github.com/Chia-Network/chips/pull/150)). It doesn't make theft impossible. It makes theft *reversible for a window of time that you choose in advance*. And a window is only useful if you're awake when it opens — which is the other half of this post.

## What clawback actually does

When you send XCH with clawback, the coin doesn't land in the recipient's wallet. It lands in a `p2_1_of_n` puzzle holding a merkle root of two spend paths:

- **The sender's path** — reclaim the coin, at any time before the recipient claims it.
- **The recipient's path** — claim the coin, but only *after* a timelock you specified at send time.

No escrow. No third party. No trusted service. It's just two conditions on a coin.

During the timelock, the recipient — or anyone who has stolen the recipient's keys — **cannot move that coin at all.** Only you can. That's the window.

### What clawback does *not* do

I want to be very direct about this, because it's the part that gets glossed over in threads:

1. **Clawback is set at send time. It is not retroactive.** You cannot claw back coins that are sitting in an ordinary wallet. If your funds aren't already in a clawback coin when the attacker arrives, there is nothing to reverse.
2. **The protection is live only during the timelock.** Once the timelock expires, the recipient can claim at will. If your coins sit past the window unclaimed, the window is gone.
3. **After the timelock expires, it's a race.** The sender can still claw back *until* the recipient claims — but the claim is a single transaction. Do not design a security model around winning that race. Design around the live window.
4. **Chia's [clawback user guide](https://docs.chia.net/guides/clawback-user-guide/) documents XCH.** Check your wallet version before assuming CAT support.

So clawback is not a safety net under your cold storage. It's a safety net under your *transfers* — and, if you build it deliberately, under a vault.

## Pattern 1: never move funds without a window

This is the one everyone should adopt today, and it takes one flag.

```bash
chia wallet send -f [fingerprint] -a [amount] -m [fee] -t [address] --clawback_time 86400
```

`--clawback_time` is in seconds — `86400` is 24 hours. In the GUI it's the **"Add option to claw back transaction"** dropdown in the SEND menu, where you set days/hours/minutes.

If you need to reverse it:

```bash
chia wallet clawback -f [fingerprint] -ids [transaction_id] -m [fee]
```

Now think about what that covers. Address substitution by clipboard malware. A poisoned destination in a compromised interface. A fat-fingered paste. An exchange deposit address that turns out to be wrong. On Bitcoin, every one of those is a permanent, funded lesson. On Chia, you have 24 hours to notice and undo it — **for free, unilaterally, with no one's permission.**

The Coldcard victims never had that option. Not because they chose badly, but because the chain doesn't offer it.

## Pattern 2: the two-key vault (advanced)

If you want clawback under your *stored* balance and not just your transfers, you need two keys and a habit.

- **Key A** — deep cold, air-gapped, used only for recovery. This is the sender.
- **Key B** — the wallet you actually operate from. This is the recipient.

Send from **A → B** with a long timelock (say, 7 days). The coins now sit in a clawback state. If Key B is compromised on day three, the attacker **cannot spend those coins** — and Key A pulls them back.

The honest caveat: this protection expires with the timelock. To keep a live window at all times, you have to periodically re-lock — claw back to A and re-send to B with a fresh timelock. Chia's reference wallet won't roll that for you today, so this is a deliberate practice, not a set-and-forget. (Note also that coins in the clawback state do not appear in the recipient wallet's `Balance` fields, and that recipients using auto-claim will claim the moment the timer expires.)

It is more work than a Coldcard. It is also the difference between a bad week and a total loss.

## The half nobody builds: knowing in time

Here's what makes every word above worthless on its own.

A 24-hour clawback window is 24 hours of *opportunity to act*. If you learn about the theft in a Discord thread six days later, the window was never real. The Coldcard attack drained tens of millions inside 41 minutes on some addresses, and hit wallets nobody had opened in years.

**You need to be told.** Automatically, without connecting your cold wallet to anything.

That's what we built [SpaceScan Wallets](https://wallets.spacescan.io) for.

### Watch-only, by design

You add a wallet by pasting a **master public key** (96 hex characters). Not a seed. Not a private key. A master *public* key can derive your receive addresses and read your balances and history — **it cannot spend a mojo.** There is nothing in our database that an attacker could use to move your funds.

We discover your addresses automatically from that key, old and new, so a dormant wallet with derivation gaps is still covered. Prefer not to share an xpub at all? You can add an **address list** instead and we'll watch exactly those.

*(One tradeoff worth stating plainly: a master public key lets us — and anyone you share it with — see your full address history. That's a privacy cost, not a security one. The address-list option exists if you'd rather bound it.)*

### Then turn on alerts

1. Sign in at [wallets.spacescan.io](https://wallets.spacescan.io) and hit **Add wallet**.
2. Choose **Master public key**, paste it, and click **Add & sync**.
3. Open that wallet's **Settings & rules** and find **Activity alerts**.
4. Tick **"Email me about new activity in this wallet."**
5. Narrow it if you want: **Received**, **Sent**, **Tokens & NFTs**, and **Ignore XCH moves under** *n* XCH to keep dust quiet.
6. **Save alerts.**

Every wallet is swept about every 30 minutes, and alerts are evaluated after each sync — so you hear about a movement in your cold wallet within roughly half an hour, by email, without ever touching the wallet itself. First sync won't spam you with five years of backfilled history; alerts only cover activity after you switch them on.

Activity alerts are part of **Pro**. Wallet tracking itself is free — add your wallets and look around first.

## Put the two together

Neither half is a product on its own. Together they're something Bitcoin structurally cannot offer:

| | Bitcoin cold storage | Chia + clawback + alerts |
|---|---|---|
| Attacker gets your key | Funds gone, confirmed, final | Coins in a live window can't be moved by them |
| You find out | Whenever you happen to look | Email, ~30 min after the block |
| Your recourse | Post-mortem and a police report | `chia wallet clawback` |
| Cost of watching | — | Public key. No spending risk. |

The Coldcard story isn't "hardware wallets are bad." It's that **self-custody with no reaction time is a single point of failure**, and the entire Bitcoin toolchain is built on the assumption that finality is a feature.

On Chia, finality is something you get to schedule.

---

**Start here:** add your cold wallet to [SpaceScan Wallets](https://wallets.spacescan.io) with a master public key — it takes about a minute and costs nothing to watch. Then read the step-by-step guides:

- [Watch a cold wallet and get email alerts](https://docs.spacescan.io/docs/guide/wallet_security/cold_wallet_alerts)
- [Send XCH with clawback protection](https://docs.spacescan.io/docs/guide/wallet_security/clawback_protection)

:::info Join Us
Spacescan.io is built on your feedback and suggestions. Join us on [Discord](https://discord.gg/Bb4sj3Bg9P) · [Twitter](https://twitter.com/spacescan_io) · [Github](https://github.com/spacescan-io).
:::

### Sources

- [Hackers steal over $130M by exploiting bug in offline hardware wallets — TechCrunch](https://techcrunch.com/2026/08/04/hackers-steal-over-130-million-by-exploiting-bug-in-offline-hardware-wallets/)
- [Hackers Target Bitcoin's Safest Hiding Place in Ongoing Attack — Bloomberg](https://www.bloomberg.com/news/articles/2026-08-03/hackers-target-bitcoin-s-safest-hiding-place-in-ongoing-attack)
- [Coldcard Hardware Wallet Flaw Linked to $70 Million Bitcoin Theft in 41 Minutes — The Hacker News](https://thehackernews.com/2026/08/coldcard-hardware-wallet-flaw-linked-to.html)
- [Coldcard's $38 million (so far) exploit shakes faith in self-custody — CoinDesk](https://www.coindesk.com/business/2026/07/31/coldcard-s-usd38-million-so-far-exploit-shakes-faith-in-self-custody-may-push-investors-to-etfs)
- [Clawback User Guide — Chia Documentation](https://docs.chia.net/guides/clawback-user-guide/)
- [Clawback Primitive Guide — Chia Documentation](https://docs.chia.net/guides/clawback-primitive-guide/)
- [CHIP-0044: Clawback Standard v2](https://github.com/Chia-Network/chips/pull/150)

*Figures cited as of 4 August 2026; the Coldcard incident is ongoing and totals have been revised upward repeatedly.*

---
sidebar_position: 2
title: Send XCH with clawback protection
description: Use Chia's clawback primitive to give yourself a time window in which a transfer — or a theft — can still be reversed, and pair it with alerts so you find out in time.
keywords: [chia clawback, CHIP-0044, reversible transaction, chia timelock, clawback_time, crypto theft recovery, chia vault]
---

# Send XCH with clawback protection

On most blockchains a confirmed transaction is final. Wrong address, compromised signing device, malware swapping your clipboard — it doesn't matter, the coins are gone.

Chia has a primitive that changes this: **clawback** ([CHIP-0044](https://github.com/Chia-Network/chips/pull/150)). You choose, at send time, a window during which **only you** can move the coin. Inside that window, a mistake or a theft is reversible.

## How it works

A clawback send doesn't deliver coins into the recipient's wallet. It creates a coin under a `p2_1_of_n` puzzle holding two spend paths:

| Path | Who | When |
|---|---|---|
| Clawback | **Sender** | Any time before the recipient claims |
| Claim | **Recipient** | Only **after** the timelock expires |

There is no escrow and no third party. The rules live on the coin.

### What clawback does not do

Read this before you build a security model on it.

- **It is not retroactive.** Clawback is chosen at send time. Coins already sitting in an ordinary wallet cannot be clawed back — there is no clawback path on them.
- **The protection ends with the timelock.** Once it expires, the recipient can claim whenever they like.
- **After expiry it's a race.** The sender can still claw back *until* the recipient claims, but a claim is one transaction. Don't plan on winning that race — plan around the live window.
- **The [Chia clawback user guide](https://docs.chia.net/guides/clawback-user-guide/) documents XCH.** Verify your wallet version before assuming CAT support.
- **Coins in the clawback state don't show in the recipient's `Balance` fields** while the timer runs, which surprises recipients who aren't expecting it.

## Send with a clawback window

### GUI

1. Open the **SEND** menu.
2. Enter the recipient address and amount as normal.
3. Expand **Add option to claw back transaction**.
4. Set the timelock in days, hours and minutes.
5. Send.

Once confirmed, the transaction shows a **CLAW BACK THIS TRANSACTION** button while the window is open.

### CLI

```bash
chia wallet send -f [fingerprint] -a [amount] -m [fee] -t [address] --clawback_time 86400
```

`--clawback_time` is in **seconds**:

| Window | Value |
|---|---|
| 1 hour | `3600` |
| 24 hours | `86400` |
| 7 days | `604800` |

## Claw a transaction back

```bash
chia wallet clawback -f [fingerprint] -ids [transaction_id] -m [fee]
```

In the GUI, click **CLAW BACK THIS TRANSACTION** and enter a fee.

The recipient claims with the same `chia wallet clawback` command from their own wallet, once the timer has expired.

:::caution Recipients with auto-claim
A recipient running auto-claim will claim the instant the timelock expires. Size your window for how fast *you* can react, not how patient they are.
:::

## Choosing a timelock

The window is how long you have to notice and act. Pair it with your detection time, not with your optimism.

| Situation | Suggested window |
|---|---|
| Exchange deposit, address pasted from an interface | 1–4 hours |
| Large transfer to a new or infrequently used address | 24 hours |
| Moving funds into cold storage | 24 hours to 7 days |

If your only detection method is checking manually when you happen to think about it, a 1-hour window protects nothing. [Turn on email alerts](./cold_wallet_alerts.md) — wallets are swept about every 30 minutes — and size the window well above that.

## Advanced: the two-key vault

Clawback protects transfers. With two keys and a habit, it can also sit under stored funds.

- **Key A** — deep cold, air-gapped, used only for recovery. This is the **sender**.
- **Key B** — the wallet you operate from day to day. This is the **recipient**.

Send **A → B** with a long timelock, e.g. 7 days:

```bash
chia wallet send -f [key-A-fingerprint] -a [amount] -m [fee] -t [key-B-address] --clawback_time 604800
```

The coins now sit in a clawback state. If **Key B is compromised inside that window, the attacker cannot spend them** — and Key A pulls them back.

**The honest caveat:** this protection expires with the timelock. To keep a window live at all times you must periodically **re-lock** — claw back to A, re-send to B with a fresh timelock. Chia's reference wallet does not roll this for you, so it is a deliberate practice, not set-and-forget. Put a calendar reminder at roughly half your timelock.

This is more work than a hardware wallet. It is also the difference between a bad week and a total loss.

## Pair it with alerts

A recovery window only works if you're awake when it opens.

1. Add the wallet to [SpaceScan Wallets](https://wallets.spacescan.io) with its **master public key** — view-only, it cannot spend.
2. Turn on **Activity alerts** with **Sent** enabled.
3. If an alert arrives that you didn't cause, and the coins are still inside their clawback window — claw them back.

Full walkthrough: [Watch a cold wallet and get email alerts](./cold_wallet_alerts.md).

## Reference

- [Clawback User Guide — Chia Documentation](https://docs.chia.net/guides/clawback-user-guide/)
- [Clawback Primitive Guide — Chia Documentation](https://docs.chia.net/guides/clawback-primitive-guide/)
- [chia-clawback-primitive — GitHub](https://github.com/Chia-Network/chia-clawback-primitive)
- [CHIP-0044: Clawback Standard v2](https://github.com/Chia-Network/chips/pull/150)

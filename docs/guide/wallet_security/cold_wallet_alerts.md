---
sidebar_position: 1
title: Watch a cold wallet and get email alerts
description: Monitor a Chia cold wallet with a view-only master public key and get an email whenever it moves — without ever connecting the wallet to anything.
keywords: [chia cold wallet monitoring, watch only wallet, chia wallet alerts, master public key, cold storage security, XCH transaction alerts]
---

# Watch a cold wallet and get email alerts

Cold storage protects your keys. It does nothing to tell you when something has gone wrong with them.

The 2026 Coldcard incident drained wallets that had been dormant for years — the owners found out long after the funds were gone. Detection is a separate problem from custody, and it needs a separate tool.

This guide sets up **watch-only monitoring with email alerts** on [SpaceScan Wallets](https://wallets.spacescan.io). Your cold wallet is never connected, never unlocked, and never leaves storage.

:::tip Why this matters more on Chia
Chia's clawback primitive can make a theft reversible — but only inside a time window you set in advance. A recovery window is worthless if you don't know the clock is running. See [Send XCH with clawback protection](./clawback_protection.md).
:::

## What you need

- The **master public key** of the wallet you want to watch (96 hex characters), **or** a list of `xch1…` addresses.
- An email address.

You do **not** need your seed phrase, your private key, or physical access to the device.

## Is a master public key safe to share?

A master public key can **view** balances and transaction history and derive your receive addresses. It **cannot spend a mojo**. There is nothing in it for an attacker to steal.

The real tradeoff is privacy, not security: anyone holding your master public key can see your entire address history. If you'd rather bound that, use the **Address list** import method instead and we'll watch only the addresses you name.

## Step 1 — Add the wallet

1. Sign in at [wallets.spacescan.io](https://wallets.spacescan.io).
2. Click **Add wallet**.
3. Give it a **Wallet name** — something you'll recognise in an email subject line at 3am, like `Cold storage — main`.
4. Under **Import method**, choose **Master public key**.
5. Paste the key into the **Master public key (96 hex characters)** field.
6. Click **Add & sync**.

Addresses are discovered automatically from the key, both old and new, so a long-dormant wallet with gaps in its derivation path is still covered.

:::caution Copy the key, never retype it
Always copy your master public key directly from your wallet software. A single transposed character produces a *valid-looking* key for a wallet that isn't yours — you'd be monitoring someone else's balance and would never be alerted about your own.
:::

If you prefer the address-list route, choose **Address list** and paste your `xch1…` addresses, one per line.

## Step 2 — Turn on activity alerts

1. Open the wallet, then go to its **Settings & rules**.
2. Find the **Activity alerts** card.
3. Tick **Email me about new activity in this wallet**.
4. Choose what counts as activity:
   - **Received** — funds arriving.
   - **Sent** — funds leaving. **Leave this on for cold storage.** A cold wallet that sends is either you, or a problem.
   - **Tokens & NFTs** — include CAT and NFT movements, not just XCH.
   - **Ignore XCH moves under** *n* **XCH** — suppress dust. Set it to `0` on a cold wallet so nothing is filtered out.
5. Click **Save alerts**.

:::note Activity alerts are a Pro feature
Wallet tracking, balances and history are free. Email alerts are part of Pro — upgrade from **Portfolio settings**. If a Pro subscription lapses, alerts stop being sent even if the toggle is still on.
:::

## What happens next

- Every active wallet is swept on a **~30 minute cycle**, and alerts are evaluated after each sync. Expect to hear about a movement within roughly half an hour of it hitting a block — this is a monitoring service, not a real-time mempool tripwire.
- You get **one digest email per sync**, not one per transaction.
- Alerts only cover activity that happens **after** you switch them on. Your first sync ingests years of history without emailing you about any of it.
- Each transaction is emailed **once** — re-syncs and overlapping sweeps won't send duplicates.

A typical alert looks like:

```
Subject: Cold storage — main: 1 new transaction

New activity in your wallet "Cold storage — main":

• Tue, 04 Aug 2026 11:42:07 GMT — -412.500000 XCH
```

## If you get an alert you didn't cause

Treat it as a compromise until proven otherwise.

1. **Check the transaction** on [Spacescan](https://www.spacescan.io) — confirm the destination isn't yours.
2. **If the moved coins were sent with a clawback timelock that hasn't expired, claw them back now.** This is the whole reason for the alert. See [Send XCH with clawback protection](./clawback_protection.md).
3. **Evacuate everything else** to a wallet generated from a fresh seed on a device you trust. If one key derived from a seed is compromised, assume every key from that seed is.
4. **Don't reuse the device or the seed**, even after a firmware update — a patched RNG does not repair a seed that was already generated badly.

## Watch more than one wallet

Add each cold wallet separately with its own name and its own alert rules. Wallets you actively spend from usually want **Ignore XCH moves under** set to a few XCH to stay quiet; wallets that should never move want it at `0` with **Sent** on.

## Next

- [Send XCH with clawback protection](./clawback_protection.md) — give yourself a window in which a bad transfer is reversible.

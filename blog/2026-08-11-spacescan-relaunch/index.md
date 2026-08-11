---
slug: spacescan-relaunch-2026
title: "SpaceScan, rebuilt: one unified Chia explorer, and one Pro plan for the tools"
description: The rebuilt SpaceScan is live. Faster, more accurate, and built on a single index of the Chia blockchain. The explorer stays free, and Wallets, Tax and Intel are now one Pro plan at 1 XCH for a year.
tags: [Chia, spacescan, explorer, wallets, tax, intel, api, nft, cat, pro]
authors: [natsabari]
---

More than four years ago, we started SpaceScan with a simple idea: Chia deserved a serious blockchain explorer. Not just a block explorer, but one place where you could understand the entire network. Blocks, transactions, tokens, NFTs, offers, farming, markets, and everything happening across the chain.

Today we are launching the rebuilt SpaceScan. It is faster, cleaner, more accurate, and built around a single index of the Chia blockchain.

<!-- truncate -->

## We rebuilt the entire thing

Honestly, we could not have built this version a year ago. Indexing a blockchain from block zero is one problem, and building an explorer on top of that data is another. Then come wallets, tax reporting, market analytics, farming intelligence, APIs and alerts, plus everything required to make those systems reliable. Normally that takes a funded team and years of engineering.

We are a small team. What changed was the tooling.

We built this version with **Claude and Fable** working alongside us, using AI as an engineering multiplier. It let a small team take on problems that previously needed a much larger organisation. That is perhaps the most exciting part of this launch for us: the cost of building ambitious software has changed, and a small team can now attempt things that once seemed unrealistic.

## The explorer is free, and it will stay free

The core SpaceScan explorer is free. Not a trial, not a limited version. Blocks and transactions, addresses and coins, tokens, NFTs and provenance, offers, DEX activity, farming and pools, network statistics, rich lists, converters and more.

No account. No API key. No paywall.

If you are curious about what is happening on Chia, you should be able to look. That is the foundation of SpaceScan.

## What is different this time

We did not just redesign the interface. We went back to the data.

**Tokens.** Token pages show actual settled trading activity, priced from executed swaps rather than stale snapshots. You can see which direction the trade went, where it happened, and what settled on chain.

**NFTs.** NFT activity is based on settled sales rather than open offers, so you see what was actually paid and the royalty that went with it, plus full provenance from mint through every transfer and sale.

**Swaps.** TibetSwap and Dexie activity is derived from what the blockchain actually settled, so prices, volumes and trade counts all come from the same data instead of several disconnected sources.

The goal is simple: **one chain, one index, one set of numbers.** Then we built the explorer on top of it.

## One Pro plan, three products

We used to sell several products and subscriptions separately. That made sense while each one evolved independently, and it does not make sense anymore. They are now one **SpaceScan Pro** plan.

**[Wallets](https://wallets.spacescan.io)** tracks any Chia address and tells you the moment it moves, with email and Discord alerts and no node of your own.

**[Tax](https://wallets.spacescan.io)** generates Chia tax reports with cost basis and disposal calculations, including offers and NFT/CAT activity, calculated from what actually happened on chain rather than a daily average price.

**[Intel](https://intel.spacescan.io)** is market and network intelligence: entity clustering, trading analysis, wash-trade screening, netspace trends and pool concentration.

## Building on Chia? The API is its own thing

The **[Pro API](/api/getting-started)** puts the same index that powers SpaceScan behind an API key, with documented endpoints and predictable limits.

It is priced separately from Pro, on its own tiers, because developers building on Chia need something different from someone tracking their wallet. See the [API plans](https://spacescan.io/apis) for what each tier includes.

## Advertising on SpaceScan

If you are building something on Chia and want people to see it, you can [buy a placement](https://spacescan.io/advertise) directly. Pick a size, upload your creative, pay in XCH, and it goes live once reviewed.

It is a flat **1 XCH per day** for every placement, whether it is the home page or a footer banner. No auctions, no impression maths, no sales call. Along with Pro and the API, it is one of the three ways SpaceScan pays for itself, which is why the explorer can stay free.

## Launch price: 1 XCH for an entire year

One Pro plan, three products, one year, 1 XCH, paid directly on chain. The regular card price for the same plan is $39/year.

The 1 XCH launch price is intentionally temporary, and when it ends, it ends.

## We are here because of you

SpaceScan exists because of the Chia community, and we want to say that plainly because it is easy to say and easy to forget.

Every feature on this site started as somebody asking for it. Every number we corrected, we corrected because somebody looked at a page, said "that does not look right", and took the time to tell us. People have sent us addresses to check, screenshots at midnight, patient explanations of what we had misunderstood about their own project, and more than one message that simply said "this is wrong", which was exactly what we needed to hear.

Three friends started this on weekends, out of frustration with the explorers that existed. We are still a small team. The reason there is anything here at all is that a community decided to help us build it, and then kept helping for four years.

Thank you for the bug reports, the feature requests, the arguments about our numbers, and the patience when things broke. This launch is for you.

Thank you also to everyone who has [donated](https://spacescan.io/support-us). SpaceScan has no investors behind it, so those donations paid for real things: servers, storage, and the time to keep going when it would have been easier not to.

Some of what we built would not exist without other people's work. [Rigidity](https://x.com/Rigidity16) for the Chia wallet SDK, [Dennis](https://x.com/MrDennisV) for the dexie.space API, and [acevail](https://x.com/acevail_) for the MintGarden API. We rely on all three every day.

Thank you also to [steppsr](https://x.com/steppsr) and This Week in Chia, [Clyde Wallace](https://x.com/ClydeWallace22), [SlowestTimelord](https://x.com/SlowestTimelord), and many more we have not named. If you have answered a question in Discord or tested something for us, you are part of this.

## Try it, and tell us where we are wrong

Open [spacescan.io](https://spacescan.io), look up something you already know well, and see whether we get it right. If we do not, we want to hear about it on [Discord](https://discord.com/invite/Bb4sj3Bg9P) or through the [feedback form](https://spacescan.io/contact-us).

---
slug: spacescan-relaunch-2026
title: "Spacescan, rebuilt: a faster explorer, four products, and one Pro plan for 1 XCH a year"
description: spacescan.io now runs on an index we built from block zero. Here is what changed, what is genuinely new, and why Pro costs 1 XCH for a year right now.
tags: [Chia, spacescan, explorer, wallets, tax, intel, api, nft, cat, pro]
authors: [natsabari]
---

**spacescan.io is now a different site.** Not a redesign painted over the old one — a rebuild, on a new index, cut over in one move on 11 August 2026.

The old explorer is still there at [old.spacescan.io](https://old.spacescan.io) if you need to compare something. Everything below is live on the main site today.

<!-- truncate -->

## Why rebuild rather than patch

The old site read from an index we had been extending for years. It worked, but we kept finding places where a number was right by accident — a price that came from a table frozen in 2023, a trade list that quietly showed a fraction of the trades, a supply figure nobody could derive twice.

So we rebuilt the index from **block zero**: 9,095,446 blocks, gap-free, parsed with our own classifier rather than trusting anyone's summary. Then we checked it against reality instead of against ourselves — mojo-exact balance and supply comparisons, trade volumes reconciled against dexie and MintGarden, and a standing eval suite that has to stay green.

That work is invisible when it goes well. What you see is a site where the number on the token page and the number in the chart come from the same place.

## What is actually new

**Every token page has its real trade history.** DEX Trade now reads the settled-swap ledger — the same source the volume figures use. BEPE alone has 19,954 trades where the tab previously showed a handful.

**Trades know which way they went, and where.** We derive Buy/Sell from the pool's own reserve movement and label the venue — TibetSwap or dexie — from chain evidence rather than a guess. 289,004 trades carry a venue; 171,186 are identified as buys. Where the chain genuinely does not say which side was the aggressor, we leave it blank instead of inventing one.

**NFT trades are settled sales, not offers.** 462,174 of them, with what was actually paid and the royalty that went with it.

**Pools and farmers, from chain truth.** 125 pools verified against their own `pool_info` endpoints, 174,000 plotNFTs, and solo↔pool migration history going back to 2021. Nobody can inflate a block count.

**NFT provenance** on every item: who minted it, every sale, the price and royalty at each hop.

**Master Key Addresses** (under Tools) — paste a wallet's master *public* key and see every address it derives, with a CSV download. Watch-only by construction: a public key can show addresses but cannot spend from them.

**Sensitive content is handled properly.** Adult collections are kept out of listings and search, and their imagery stays blurred until you click it. One click reveals one image, nothing is remembered.

## Four products, one account

**[Wallets](https://wallets.spacescan.io)** — track any address, get alerted when it moves. Email and Discord.

**[Tax](https://wallets.spacescan.io)** — cost-basis and disposal reports for Chia, including the part most tools get wrong: offers. A Chia swap is two legs settling at once, and we price them at what was actually executed rather than a daily average.

**[Intel](https://intel.spacescan.io)** — market and farming analytics. Entity clustering, wash-trade screening, netspace and pool concentration over time.

**[Pro API](/api/getting-started)** — the same index behind the site, with an API key and documented endpoints.

## Claim what is yours

If you own a DID, an address, a token or an NFT collection, you can claim it and control how it appears:

- **DID and profile** — name, avatar, links, verified badge
- **Address** — a public label, so an exchange or a project wallet reads as itself rather than a hash
- **Tokens** — logo, description, socials, verified badge
- **Collections** — the same, plus the moderation state

Claiming is free. Sign in, prove control from the wallet, done.

## One Pro plan — and the launch price

We used to sell tax, monitoring and analytics as separate subscriptions. That was our convenience, not yours. There is now **one Pro plan** covering Tax, Intel and advanced Wallets features.

**Right now, Pro is 1 XCH for a full year.**

Be clear-eyed about what that means: XCH trades around $1.36 today, and the card price for the same plan is $39/year. Paying on-chain is not a small discount — it is a launch price, and it is deliberately temporary. It exists because we would rather have early users paying in XCH than a bigger number on a slide.

When it ends, it ends. Existing subscriptions keep the price they started at for their term.

## What this does not do

We would rather say this plainly than have you find out.

- **It does not price CAT↔CAT barter.** When two tokens trade with no XCH leg, there is no price to derive. We record the trade and its legs, and leave price blank.
- **Roughly 28% of token trades have no Buy/Sell label.** Those are peer-to-peer offer settlements where the chain names no aggressor. The old site labelled every one of them "Buy", which looked complete and was not.
- **About 5% of pool blocks are unattributable** — the reward was never absorbed, so there is nothing to attribute.
- **Tax reports are a starting point, not filed advice.** They are built from chain data and your own imports; a professional should still see them.
- **Hardened wallet addresses are out of reach of the master-key tool.** Only unhardened addresses derive from a public key; hardened ones need the private key, which we never ask for.

## If something looks wrong

It might be. Compare against [old.spacescan.io](https://old.spacescan.io) and tell us — [Discord](https://discord.gg/Bb4sj3Bg9P) or [@spacescan_io](https://twitter.com/spacescan_io). We have corrected our own numbers against the chain more than once, and we would rather hear it from you than not hear it.

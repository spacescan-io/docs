---
sidebar_position: 1
title: Chia API quick start — authentication and base URLs
sidebar_label: Quick start
description: Start using the Spacescan Chia API in a few minutes — free and Pro base URLs, x-api-key authentication, testnet, response conventions and the gotchas worth knowing up front.
keywords: [chia API, XCH API, blockchain API, spacescan API, x-api-key, chia developer API]
---

# API quick start

The Spacescan API serves the same index that powers the explorer — addresses, coins, tokens, NFTs, collections, DIDs, blocks, offers and the mempool.

Your first request needs no signup:

```bash
curl "https://api.spacescan.io/address/xch-balance/xch1raq84pknzte375kze2z3lapscwet5g3q9qqkse8cmnmp5yr40zcsntdcm9"
```

## Base URLs

| Environment | Base URL | Key required |
|---|---|---|
| Free | `https://api.spacescan.io` | No |
| Pro | `https://pro-api.spacescan.io` | Yes — `x-api-key` |
| Testnet11 | `https://api-testnet11.spacescan.io` | No |

Paths are identical across hosts, so moving from free to Pro is a base-URL swap plus one header. Build against the free host, switch when you need the headroom.

## Authentication

Only the Pro host is authenticated. Send your key as the `x-api-key` header on **every** request:

```bash
curl "https://pro-api.spacescan.io/address/xch-balance/{address}" \
     -H "x-api-key: YOUR_API_KEY"
```

```javascript
const res = await fetch(
  `https://pro-api.spacescan.io/address/xch-balance/${address}`,
  { headers: { 'x-api-key': process.env.SPACESCAN_API_KEY } },
);
const data = await res.json();
```

```python
import requests

res = requests.get(
    f"https://pro-api.spacescan.io/address/xch-balance/{address}",
    headers={"x-api-key": os.environ["SPACESCAN_API_KEY"]},
)
data = res.json()
```

:::caution Keep your key server-side
`x-api-key` identifies your billing account. Anything you ship to a browser or a
mobile binary is public — proxy Pro calls through your own backend rather than
embedding the key in client code.
:::

## Getting a key

API keys are managed on the [developer page at spacescan.io/apis](https://www.spacescan.io/apis).

- Plans run from free to startup scale — current tiers, rate limits and prices are listed on that page.
- Pay by card through Stripe, or in **XCH** straight from any Chia wallet. An XCH payment covers a full year.
- Your key is issued **the moment payment completes** and appears on the same page.
- Upgrade or cancel any time; billing is managed from your Plans & Billing page through the Stripe portal. Payments are non-refundable.

## Responses

Every endpoint returns JSON with a `status` field alongside its payload:

```json
{
  "status": "success",
  "xch": 1.234567891234,
  "mojo": 1234567891234
}
```

Amounts are generally available in both **XCH** and **mojo** (1 XCH = 1,000,000,000,000 mojo). Prefer the mojo field for anything you intend to do arithmetic on — it is an exact integer, while the XCH value is a convenience rendering.

:::caution Parse numeric fields defensively
Some numeric fields serialize as JSON **strings** rather than numbers, and this
can vary row to row within a single response. Coerce with `Number()` /
`int()` at the boundary instead of trusting the JSON type, and use a big-integer
type for mojo values if your language's default number type can't hold them
exactly.
:::

## Always send a User-Agent

Our public gateways reject requests that arrive without a `User-Agent` header. `curl` and browsers set one for you; several HTTP client libraries do not.

```bash
curl "https://api.spacescan.io/stats/xch" -H "User-Agent: my-app/1.0"
```

If you get an unexplained rejection before your request ever reaches an endpoint, this is the first thing to check.

## Where to go next

- **[Address endpoints](./address/xch_balance.md)** — balances, historical balances, and XCH/token/NFT transaction history.
- **Token, NFT and Collection endpoints** — supply, holders, listings and trade history.
- **Block, Stats and Mempool endpoints** — chain state and network metrics.
- **Tools** — address/DID/NFT identifier conversion and coin ID calculation.

Building something on Chia with this API? Tell us in [Discord](https://discord.gg/Bb4sj3Bg9P) — endpoint requests from real integrations get prioritised.

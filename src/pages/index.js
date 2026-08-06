import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './index.module.css';

/*
 * Docs home = a reading list.
 *
 * The shape is deliberately the same as every other page on this site:
 * left rail of sections, one column of content, nothing in a third column.
 * Articles come from the blog plugin so this page never needs editing when we
 * publish; the guide index is hand-ordered because its order is editorial.
 */

const SECTIONS = [
  {
    id: 'articles',
    title: 'Articles',
    note: 'Latest first',
  },
  {
    id: 'explorer',
    title: 'Explorer',
    note: 'spacescan.io',
    items: [
      {
        to: '/docs/guide/verifyDID',
        title: 'Verify a DID',
        text: 'Prove a collection is authentic by linking its minter DID to a Twitter handle.',
      },
      {
        to: '/docs/guide/updatecatinfo',
        title: 'Add or update CAT details',
        text: 'Submit a token’s name, symbol, logo and links so it displays correctly.',
      },
      {
        to: '/docs/guide/manage_token_data/token_edit_data',
        title: 'Manage your token',
        text: 'Import a CAT you minted and edit its details from a connected wallet.',
      },
      {
        to: '/docs/guide/manage_collection',
        title: 'Manage your NFT collection',
        text: 'Claim a collection and set its banner, description and creator details.',
      },
      {
        to: '/docs/guide/manage_address_profile',
        title: 'Chia address profile',
        text: 'Claim an address profile with WalletConnect and give it a public identity.',
      },
      {
        to: '/docs/guide/chia_did_profile',
        title: 'Chia DID profile',
        text: 'Publish a decentralised identity and link it to your collections.',
      },
      {
        to: '/docs/guide/exchange_integration',
        title: 'Exchange integration',
        text: 'What exchanges need to list XCH and verify deposits against our index.',
      },
    ],
  },
  {
    id: 'wallets',
    title: 'Wallets + Tax',
    note: 'wallets.spacescan.io',
    items: [
      {
        to: '/docs/guide/wallet_security/cold_wallet_alerts',
        title: 'Watch a cold wallet, get email alerts',
        text: 'Monitor cold storage with a view-only key and hear about movement in ~30 minutes.',
      },
      {
        to: '/docs/guide/wallet_security/clawback_protection',
        title: 'Send XCH with clawback protection',
        text: 'Give yourself a window in which a mistake — or a theft — is still reversible.',
      },
      {
        to: '/docs/guide/chia_tax',
        title: 'Chia tax statement',
        text: 'Turn wallet history into farming income and capital gains reports.',
      },
      {
        to: '/docs/guide/manage_asset_monitor/asset_monitor',
        title: 'Wallet monitor (explorer)',
        text: 'The older in-explorer monitor for a single address or public key.',
      },
    ],
  },
  {
    id: 'api',
    title: 'Developer API',
    note: 'api.spacescan.io',
    items: [
      {
        to: '/api/getting-started',
        title: 'Quick start',
        text: 'Base URLs, x-api-key authentication, response conventions and the gotchas.',
      },
      {
        to: '/api/address/xch_balance',
        title: 'Address endpoints',
        text: 'Balances, historical balances and XCH, token and NFT transaction history.',
      },
      {
        to: '/api/cat/list',
        title: 'Token endpoints',
        text: 'CAT listings, supply, holders, price and activity.',
      },
      {
        to: '/api/nft/info',
        title: 'NFT endpoints',
        text: 'NFT metadata, events, offers and collection statistics.',
      },
      {
        to: '/api/stats/price',
        title: 'Stats endpoints',
        text: 'XCH price, circulating supply and total supply.',
      },
    ],
  },
  {
    id: 'basics',
    title: 'Chia basics',
    note: 'Concepts',
    items: [
      {
        to: '/docs/guide/POST',
        title: 'Proof of Space and Time',
        text: 'How Chia consensus replaces proof of work with storage.',
      },
      {
        to: '/docs/guide/Farming',
        title: 'Farming, plotting and harvesting',
        text: 'The terminology, and why it is not mining.',
      },
      {
        to: '/docs/guide/Mempool',
        title: 'The mempool',
        text: 'Where unconfirmed transactions wait, and how fees affect them.',
      },
      {
        to: '/docs/guide/What_is_DID',
        title: 'What is a DID?',
        text: 'Self-owned decentralised identity on Chia, in plain English.',
      },
    ],
  },
];

function formatDate(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function Entry({to, title, text, meta}) {
  return (
    <Link className={styles.entry} to={to}>
      {meta && <span className={styles.entryMeta}>{meta}</span>}
      <span className={styles.entryTitle}>{title}</span>
      {text && <span className={styles.entryText}>{text}</span>}
    </Link>
  );
}

export default function Home() {
  const posts = usePluginData('spacescan-latest-posts')?.posts ?? [];

  return (
    <Layout
      title="Spacescan Docs"
      description="Articles and guides for Spacescan.io — the Chia blockchain explorer, wallet tracking and alerts, tax reports, and the developer API.">
      <div className={styles.shell}>
        <aside className={styles.rail}>
          <nav className={styles.railNav} aria-label="Sections">
            <span className={styles.railLabel}>Sections</span>
            <ul className={styles.railList}>
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a className={styles.railLink} href={`#${section.id}`}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>

            <span className={styles.railLabel}>Products</span>
            <ul className={styles.railList}>
              <li>
                <Link className={styles.railLink} to="https://www.spacescan.io">
                  Explorer
                </Link>
              </li>
              <li>
                <Link className={styles.railLink} to="https://wallets.spacescan.io">
                  Wallets + Tax
                </Link>
              </li>
              <li>
                <Link className={styles.railLink} to="https://intel.spacescan.io">
                  Intel
                </Link>
              </li>
              <li>
                <Link className={styles.railLink} to="https://www.spacescan.io/apis">
                  API plans
                </Link>
              </li>
            </ul>

            <span className={styles.railLabel}>Help</span>
            <ul className={styles.railList}>
              <li>
                <Link className={styles.railLink} to="/docs/faq/about_spacescan">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className={styles.railLink} to="https://discord.gg/Bb4sj3Bg9P">
                  Discord
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className={styles.content}>
          <header className={styles.masthead}>
            <h1 className={styles.title}>Articles &amp; guides</h1>
            <p className={styles.subtitle}>
              How to use Spacescan, how Chia works, and what we ship — written to
              be read start to finish.
            </p>
            {/* Plain anchor: the feed is a generated file, not a route, so
                Docusaurus's link checker would flag a <Link to>. */}
            <a className={styles.subscribe} href="/blog/rss.xml">
              Subscribe via RSS
            </a>
          </header>

          {SECTIONS.map((section) => {
            const items =
              section.id === 'articles'
                ? posts.map((post) => ({
                    to: post.permalink,
                    title: post.title,
                    text: post.description,
                    meta: formatDate(post.date),
                  }))
                : section.items;

            if (!items?.length) return null;

            return (
              <section key={section.id} id={section.id} className={styles.section}>
                <div className={styles.sectionHead}>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  {section.id === 'articles' ? (
                    <Link className={styles.sectionNote} to="/blog">
                      All articles →
                    </Link>
                  ) : (
                    <span className={styles.sectionNote}>{section.note}</span>
                  )}
                </div>
                <div className={styles.entries}>
                  {items.map((item) => (
                    <Entry key={item.to} {...item} />
                  ))}
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </Layout>
  );
}

const fs = require('fs');
const path = require('path');

/**
 * Exposes the newest blog posts to custom pages via global data, so the
 * homepage hub lists real posts instead of a hand-maintained set that rots.
 *
 * Frontmatter is parsed with a deliberately small reader rather than pulling in
 * gray-matter: we only need title/description/slug/tags, and the blog plugin
 * itself remains the source of truth for the actual /blog routes.
 */

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/;

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(raw) {
  const match = FRONTMATTER.exec(raw);
  if (!match) return {};
  const out = {};
  for (const line of match[1].split(/\r?\n/)) {
    // Only top-level `key: value` pairs; nested blocks are not needed here.
    const kv = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
    if (!kv) continue;
    const [, key, rawValue] = kv;
    if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      out[key] = rawValue
        .slice(1, -1)
        .split(',')
        .map((v) => unquote(v))
        .filter(Boolean);
    } else {
      out[key] = unquote(rawValue);
    }
  }
  return out;
}

/** Blog entries are either `<dir>/index.md` or a flat `<name>.md`. */
function collectPostFiles(blogDir) {
  const files = [];
  for (const entry of fs.readdirSync(blogDir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'authors.yml') continue;
    const full = path.join(blogDir, entry.name);
    if (entry.isDirectory()) {
      const index = path.join(full, 'index.md');
      if (fs.existsSync(index)) files.push({ file: index, name: entry.name });
    } else if (entry.name.endsWith('.md')) {
      files.push({ file: full, name: entry.name.replace(/\.md$/, '') });
    }
  }
  return files;
}

// Docusaurus derives the date from a `YYYY-MM-DD-` filename prefix.
const DATE_PREFIX = /^(\d{4})-(\d{2})-(\d{2})-(.*)$/;

module.exports = function latestPostsPlugin(context, options) {
  const { blogDir = 'blog', count = 3 } = options ?? {};
  const absoluteBlogDir = path.resolve(context.siteDir, blogDir);

  return {
    name: 'spacescan-latest-posts',

    async loadContent() {
      if (!fs.existsSync(absoluteBlogDir)) return [];

      const posts = collectPostFiles(absoluteBlogDir)
        .map(({ file, name }) => {
          const raw = fs.readFileSync(file, 'utf8');
          const fm = parseFrontmatter(raw);
          const dateMatch = DATE_PREFIX.exec(name);
          const date = dateMatch
            ? `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`
            : null;
          const slug = fm.slug || (dateMatch ? dateMatch[4] : name);
          return {
            title: fm.title || slug,
            description: fm.description || '',
            permalink: `${context.baseUrl}blog/${slug}`.replace(/\/{2,}/g, '/'),
            date,
            tags: Array.isArray(fm.tags) ? fm.tags : [],
          };
        })
        // Undated posts sort last rather than crashing the comparison.
        .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
        .slice(0, count);

      return posts;
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ posts: content ?? [] });
    },
  };
};

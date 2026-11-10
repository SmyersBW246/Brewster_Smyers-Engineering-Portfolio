// Remark plugin: renders math in Markdown text to KaTeX HTML at build time.
// Delimiters: $$…$$ and \[…\] (display), \(…\) and $…$ (inline). A bad expression fails the build.
import katex from 'katex';

const HAS_MATH = /\$|\\\(|\\\[/;
const MATH = /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)|(?<!\\)\$([^$\n]+?)\$/g;

// Splits one text node into text and rendered-math nodes, or returns null when it holds no math.
function splitMath(value) {
  const parts = [];
  let last = 0;
  for (const match of value.matchAll(MATH)) {
    if (match.index > last) parts.push({ type: 'text', value: value.slice(last, match.index) });
    const latex = match[1] ?? match[2] ?? match[3] ?? match[4];
    const displayMode = Boolean(match[1] || match[2]);
    parts.push({ type: 'html', value: katex.renderToString(latex, { displayMode, throwOnError: true, strict: 'ignore' }) });
    last = match.index + match[0].length;
  }
  if (!last) return null;
  if (last < value.length) parts.push({ type: 'text', value: value.slice(last) });
  return parts;
}

export default function math() {
  return tree => {
    function walk(parent) {
      if (!parent.children) return;
      const next = [];
      for (const node of parent.children) {
        const parts = node.type === 'text' && HAS_MATH.test(node.value) ? splitMath(node.value) : null;
        if (parts) { next.push(...parts); continue; }
        walk(node);
        next.push(node);
      }
      parent.children = next;
    }
    walk(tree);
  };
}

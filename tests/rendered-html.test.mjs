import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../dist/client/index.html", import.meta.url);
const english = new URL("../dist/client/en/index.html", import.meta.url);

test("exports the Chinese academic homepage", async () => {
  const html = await readFile(root, "utf8");
  assert.match(html, /Youhua Li/);
  assert.match(html, /近期动态/);
  assert.match(html, /Working Papers/);
  assert.match(html, /Under Review/);
  assert.match(html, /Published \/ Accepted/);
  assert.match(html, /Google Scholar/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("exports the English academic homepage", async () => {
  const html = await readFile(english, "utf8");
  assert.match(html, /Ph\.D\. Student in Decision Analytics/);
  assert.match(html, />News</);
  assert.match(html, /AI for decisions/);
  assert.match(html, /Education &amp; research experience/);
});

test("uses a non-photographic avatar and keeps publication metadata in English", async () => {
  const html = await readFile(root, "utf8");
  assert.match(html, /非真人抽象头像/);
  assert.match(html, /portrait-initials/);
  assert.match(html, /CIKM 2026/);
  assert.match(html, /Knowledge-Based Systems/);
  assert.match(html, /Operations Research \(Revise &amp; Resubmit\)/);
});


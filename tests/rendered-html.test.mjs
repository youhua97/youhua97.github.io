import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../dist/client/index.html", import.meta.url);
const english = new URL("../dist/client/en/index.html", import.meta.url);

test("exports a complete Chinese single-page academic homepage", async () => {
  const html = await readFile(root, "utf8");
  assert.match(html, /Youhua Li/);
  assert.match(html, /最新动态/);
  assert.match(html, /研究方向/);
  assert.match(html, /教育与研究经历/);
  assert.match(html, /学术服务/);
  assert.match(html, /荣誉与奖励/);
  assert.match(html, /Working Papers/);
  assert.match(html, /Under Review/);
  assert.match(html, /Published \/ Accepted/);
  assert.match(html, /Google Scholar/);
  assert.doesNotMatch(html, /<details|codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("exports the matching complete English single-page homepage", async () => {
  const html = await readFile(english, "utf8");
  assert.match(html, /Ph\.D\. Student in Decision Analytics/);
  assert.match(html, />News</);
  assert.match(html, />Research</);
  assert.match(html, />Publications</);
  assert.match(html, /Education &amp; Research Experience/);
  assert.match(html, /Professional Service/);
  assert.match(html, /Honors &amp; Awards/);
});

test("shows exactly three compact news entries on each language page", async () => {
  for (const file of [root, english]) {
    const html = await readFile(file, "utf8");
    assert.equal((html.match(/class="news-item"/g) ?? []).length, 3);
    assert.match(html, /On the Role of Language Representations in Auto-Bidding/);
    assert.match(html, /ClinSDT: LLM-Encoded Clinical Semantic Guidance/);
    assert.match(html, /Aligning Human Sense: Calibrated Distributional Reward Learning/);
  }
});

test("uses a non-photographic avatar and keeps all paper metadata in English", async () => {
  const html = await readFile(root, "utf8");
  assert.match(html, /YL 字母抽象头像（非真人照片）/);
  assert.match(html, /avatar-letters/);
  assert.match(html, /CIKM/);
  assert.match(html, /ECCV/);
  assert.match(html, /Knowledge-Based Systems/);
  assert.match(html, /Operations Research \(Revise &amp; Resubmit\)/);
  assert.equal((html.match(/class="paper-item"/g) ?? []).length, 33);
});

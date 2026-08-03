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
  assert.match(html, /教育背景/);
  assert.match(html, /研究经历/);
  assert.match(html, /学术服务/);
  assert.match(html, /荣誉与奖励/);
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
  assert.match(html, />Education</);
  assert.match(html, /Research Experience/);
  assert.match(html, /Professional Service/);
  assert.match(html, /Honors &amp; Awards/);
});

test("shows exactly one celebratory public news entry on each language page", async () => {
  for (const file of [root, english]) {
    const html = await readFile(file, "utf8");
    const newsMarkup = html.slice(html.indexOf('id="news"'), html.indexOf('id="research"'));
    assert.equal((newsMarkup.match(/class="news-item"/g) ?? []).length, 1);
    assert.match(newsMarkup, /Aligning Human Sense: Calibrated Distributional Reward Learning/);
    assert.match(newsMarkup, /Congratulations, <strong>Nai-Xin Zhai/);
    assert.equal((newsMarkup.match(/Congratulations, /g) ?? []).length, 1);
    assert.equal((newsMarkup.match(/class="news-flourish"/g) ?? []).length, 1);
  }
});

test("keeps the two non-public CIKM submissions under review", async () => {
  for (const file of [root, english]) {
    const html = await readFile(file, "utf8");
    const reviewStart = html.indexOf("<h3>Under Review</h3>");
    const publishedStart = html.indexOf("<h3>Published / Accepted</h3>");
    const autoBidding = html.indexOf("On the Role of Language Representations in Auto-Bidding");
    const clinSdt = html.indexOf("ClinSDT: LLM-Encoded Clinical Semantic Guidance");
    assert.ok(reviewStart >= 0 && publishedStart > reviewStart);
    assert.ok(autoBidding > reviewStart && autoBidding < publishedStart);
    assert.ok(clinSdt > reviewStart && clinSdt < publishedStart);
    const reviewMarkup = html.slice(reviewStart, publishedStart);
    assert.equal((reviewMarkup.match(/class="paper-item"/g) ?? []).length, 21);
    assert.doesNotMatch(html, /CIKM 2026/);
  }
});

test("includes the added AAAI 2027 and KBS submissions under review", async () => {
  for (const file of [root, english]) {
    const html = await readFile(file, "utf8");
    const reviewStart = html.indexOf("<h3>Under Review</h3>");
    const publishedStart = html.indexOf("<h3>Published / Accepted</h3>");
    const reviewMarkup = html.slice(reviewStart, publishedStart);
    for (const title of [
      "TACT: A Framework for Zero-Shot Task-to-Capability Transfer",
      "WitMem: Evidence-Witnessed Governance for Long-Term Agent Memory",
      "From One Goal to Full-Call Success",
      "EVE-Bench: Entropy-Guided Benchmarking",
      "Adaptive Hypercomplex Embeddings for Efficient and Expressive Recommender Systems",
      "SMKT-LLM: Semantic Mapping for Knowledge Tracing with Large Language Models",
    ]) {
      assert.match(reviewMarkup, new RegExp(title));
    }
  }
});

test("places education before news and removes working papers", async () => {
  for (const file of [root, english]) {
    const html = await readFile(file, "utf8");
    assert.ok(html.indexOf('id="education"') < html.indexOf('id="news"'));
    assert.doesNotMatch(html, /Working Papers|FastSlow-MCTS|Online Assortment Optimization/);
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
  assert.equal((html.match(/class="paper-item"/g) ?? []).length, 37);
  assert.match(html, /香港城市大学商学院前院长、讲座教授/);
  assert.match(html, /香港大学副校长、中国工程院院士/);
});

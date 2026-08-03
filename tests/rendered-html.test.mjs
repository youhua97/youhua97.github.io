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
  assert.doesNotMatch(html, /荣誉与奖励/);
  assert.match(html, /Under Review/);
  assert.match(html, /Published \/ Accepted/);
  assert.match(html, /Google Scholar/);
  assert.doesNotMatch(html, /<details|codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("exports the matching complete English single-page homepage", async () => {
  const html = await readFile(english, "utf8");
  assert.match(html, /Ph\.D\. Student in Financial Decision Analytics/);
  assert.match(html, />News</);
  assert.match(html, />Research</);
  assert.match(html, />Publications</);
  assert.match(html, />Education</);
  assert.match(html, /Research Experience/);
  assert.match(html, /Professional Service/);
  assert.doesNotMatch(html, /Honors &amp; Awards/);
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
    assert.equal((reviewMarkup.match(/class="paper-item"/g) ?? []).length, 23);
    assert.doesNotMatch(reviewMarkup, /CIKM 2026/);
  }
});

test("includes the added submissions without exposing their target venues", async () => {
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
    assert.doesNotMatch(reviewMarkup, /AAAI 2027|Knowledge-Based Systems/);
  }
});

test("keeps the POMS and OR manuscripts first and includes the two new submissions", async () => {
  for (const file of [root, english]) {
    const html = await readFile(file, "utf8");
    const reviewStart = html.indexOf("<h3>Under Review</h3>");
    const publishedStart = html.indexOf("<h3>Published / Accepted</h3>");
    const reviewMarkup = html.slice(reviewStart, publishedStart);
    const poms = reviewMarkup.indexOf("LLM-Assisted Scheduling Policy Design and Refinement");
    const or = reviewMarkup.indexOf("Principled Inference-Time Scaling");
    const beyond = reviewMarkup.indexOf("Beyond Uniform Alignment");
    const psi = reviewMarkup.indexOf("PSI-KT: Progressive State Inference for Knowledge Tracing");
    assert.ok(poms >= 0 && or > poms && beyond > or && psi > beyond);
    assert.match(reviewMarkup, /<strong>Youhua Li<\/strong>, Yongxin Ni/);
    assert.doesNotMatch(reviewMarkup, /Youhua Li, et al\./);
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
  assert.match(html, /doraemon-avatar\.png/);
  assert.match(html, /戴学位帽、手持书本的哆啦A梦插画头像/);
  assert.match(html, /CIKM/);
  assert.match(html, /ECCV/);
  assert.match(html, /Knowledge-Based Systems/);
  assert.match(html, /Operations Research \(Revise &amp; Resubmit\)/);
  assert.equal((html.match(/class="paper-item"/g) ?? []).length, 39);
  const visibleProfile = html.slice(
    html.indexOf('<section class="profile"'),
    html.indexOf('<section class="content-section" id="education"'),
  );
  assert.doesNotMatch(visibleProfile, /香港城市大学商学院前院长、讲座教授/);
  assert.doesNotMatch(visibleProfile, /香港大学副校长、中国工程院院士/);
  assert.match(html, /香港城市大学商学院前院长、讲座教授/);
  assert.match(html, /香港大学副校长、中国工程院院士/);
});

test("applies the requested research copy and professional service updates", async () => {
  const html = await readFile(root, "utf8");
  assert.match(html, /金融决策分析与运筹学/);
  assert.match(html, /FinTech, Web3 &amp; Quantitative Finance/);
  assert.doesNotMatch(html, /我希望让 AI 不只是生成答案/);
  assert.doesNotMatch(html, /以下论文信息全部使用英文/);
  assert.match(html, /Senior Program Committee/);
  assert.match(html, /CIKM 2026/);
  assert.match(html, /WSDM 2026/);
  assert.match(html, /ACM MM 2024 \/ 2025 \/ 2026/);
});

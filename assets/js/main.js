/* ============================================================
   EDIT LAB CONTENT HERE. Everything below the line renders it.
   Sources: duttaprat.github.io (September 2026).
   ============================================================ */

var CONTACT_EMAIL = "pratik.dutta@stonybrook.edu";

/* Research themes: short action headings, a topic label, and project tags. */
var THEMES = [
  { label: "Foundation models", title: "Learn the language of the genome",
    text: "Pre-training language models on raw DNA so they learn the regulatory grammar, splicing and chromatin context that biology cares about, across humans, microbiomes and viruses.",
    tags: ["DNABERT-2", "DNABERT-MB", "HViLM"] },
  { label: "Interpretability", title: "Make models understandable",
    text: "Opening the model: sparse autoencoders, attribution and causal interventions that map internal features to motifs, regulators and mechanisms.",
    tags: ["InterDNA", "Sparse autoencoders"] },
  { label: "Variant impact", title: "Explain what a variant does",
    text: "Scoring how noncoding variants rewire gene regulation across cancer and neurodegeneration, with motif-level evidence for every call.",
    tags: ["DeepVRegulome", "Pan-cancer", "Neurodegeneration"] },
  { label: "Trustworthy reasoning", title: "Reason with evidence",
    text: "Connecting model predictions with knowledge graphs and literature, moving from “this variant matters” to “this variant disrupts this regulator in this cell type,” and saying so when evidence is thin.",
    tags: ["Regulome-R", "ARGUS"] },
  { label: "Tissue context", title: "Read biology in its place", emerging: true,
    text: "Extending interpretable models into spatial transcriptomics, with uncertainty-aware inference of cell-cell interactions.",
    tags: ["Spatial", "Cell-cell"] },
  { label: "Diversity", title: "Work for every population", emerging: true,
    text: "Using genomic language model embeddings to study population structure and build variant effect predictors that hold up across diverse ancestries.",
    tags: ["Population structure", "Equity"] }
];

/* Projects: status plus action links. The first three are featured on the home page. */
var PROJECTS = [
  { name: "DeepVRegulome", kind: "Variant interpretation",
    desc: "462 fine-tuned regulatory models that score the functional impact of short genomic variants on the human regulome, with attention-based motif evidence.",
    status: "Genome Biology, under review",
    links: [["Preprint", "https://arxiv.org/abs/2511.09026"], ["Models", "https://huggingface.co/duttaprat"], ["PyPI", "https://pypi.org/project/deepvregulome/"], ["Web app", "https://deepvregulome.streamlit.app/"]] },
  { name: "HViLM", kind: "Viral genomics",
    desc: "A foundation model for viral genomes that predicts pathogenicity, transmissibility and host tropism, with the HVUE benchmark.",
    status: "mSystems, under review",
    links: [["Preprint", "https://www.biorxiv.org/content/10.64898/2026.03.18.712700v1.full.pdf"], ["HVUE benchmark", "https://huggingface.co/datasets/duttaprat/HVUE"]] },
  { name: "DNABERT-2", kind: "Genomic foundation model",
    desc: "Efficient multi-species genomic language model and benchmark, co-developed with the MAGICS Lab.",
    status: "ICLR 2024",
    links: [["Paper", "https://openreview.net/forum?id=oMLQB4EZE1"], ["Code", "https://github.com/MAGICS-LAB/DNABERT_2"], ["Model", "https://huggingface.co/zhihan1996/DNABERT-2-117M"]] },
  { name: "DNABERT-Enhancer", kind: "Enhancer prediction",
    desc: "Interactive platform for enhancer prediction and exploring the effects of SNPs on enhancer activity.",
    status: "Web platform",
    links: [["Web app", "https://dnabertenhancer.streamlit.app/"]] },
  { name: "DNABERT-MB", kind: "Microbiome genomics",
    desc: "Microbiome-pretrained DNABERT-2 for antimicrobial resistance prediction.",
    status: "CAMDA 2025, 2nd place",
    links: [] },
  { name: "Regulome-R", kind: "Mechanistic reasoning",
    desc: "A reasoning engine that orchestrates genomic models with biological knowledge graphs and literature to explain noncoding variants.",
    status: "In development",
    links: [] }
];

/* Selected publications. me: true marks the lab PI's name in the author list. */
var PUBS = [
  { year: 2026, venue: "mSystems", status: "Under review",
    title: "HViLM: A Foundation Model for Viral Genomics Enables Multi-Task Prediction of Pathogenicity, Transmissibility, and Host Tropism",
    authors: "Pratik Dutta, Jack Vaska, Pallavi Surana, Rekha Sathian, Max Chao, Zhihan Zhou, Han Liu, Ramana V. Davuluri",
    url: "https://www.biorxiv.org/content/10.64898/2026.03.18.712700v1.full.pdf" },
  { year: 2025, venue: "Genome Biology", status: "Under review",
    title: "DeepVRegulome: DNABERT-based Deep-Learning Framework for Predicting the Functional Impact of Short Genomic Variants on the Human Regulome",
    authors: "Pratik Dutta, Matthew Obusan, Rekha Sathian, Max Chao, Pallavi Surana, Nimisha Papineni, Yanrong Ji, Zhihan Zhou, Han Liu, Alisa Yurovsky, et al.",
    url: "https://arxiv.org/abs/2511.09026" },
  { year: 2026, venue: "NAR Genomics and Bioinformatics", status: "In revision",
    title: "TSProm: Deep Learning Framework to Predict Tissue-Specific Regulatory Logic",
    authors: "Pallavi Surana, Pratik Dutta, Nimisha Papineni, Rekha Sathian, Zhihan Zhou, Han Liu, Ramana V. Davuluri" },
  { year: 2025, venue: "MLCB 2025",
    title: "Augmenting DNABERT Embeddings with Multimodal DNA Features for Improved Regulatory Sequence Interpretation",
    authors: "Nimisha Papineni, Pratik Dutta, Max L. Chao, Rekha Sathian, Pallavi Surana, Ramana V. Davuluri" },
  { year: 2025, venue: "ISMB/ECCB 2025, CAMDA", status: "2nd place",
    title: "Predicting Antimicrobial Resistance Using Microbiome-Pretrained DNABERT-2 and DBGWAS-Derived Genomic Features",
    authors: "Jack Vaska, Pratik Dutta, Max Chao, Rekha Sathian, Zhihan Zhou, Han Liu, Ramana V. Davuluri" },
  { year: 2025, venue: "NeurIPS 2025 Workshop on Imageomics",
    title: "Artificial Intelligence for Spatial Transcriptomics: A Scoping Review of Architectures and Models",
    authors: "Agampreet Saini, Supragya Gandotra, Abhijit Kumar, Pratik Dutta, Tirthankar Ghosal" },
  { year: 2024, venue: "ICLR 2024",
    title: "DNABERT-2: Efficient Foundation Model and Benchmark for Multi-Species Genomes",
    authors: "Zhihan Zhou, Yanrong Ji, Weijian Li, Pratik Dutta, Ramana V. Davuluri, Han Liu",
    url: "https://openreview.net/forum?id=oMLQB4EZE1" },
  { year: 2024, venue: "Bioinformatics",
    title: "TransTEx: Novel Tissue-Specificity Scoring Method for Grouping Human Transcriptome into Different Expression Groups",
    authors: "Pallavi Surana, Pratik Dutta, Ramana V. Davuluri" }
];
var SCHOLAR = "https://scholar.google.com/citations?user=hqhM6YAAAAAJ";
var PI_NAME = "Pratik Dutta";

var PEOPLE = [
  { name: "Pratik Dutta, Ph.D.", role: "Principal Investigator", photo: "assets/img/pratik-dutta.jpg",
    sub: "Innovation Research Assistant Professor, AI³, Stony Brook University",
    bio: "Pratik Dutta leads BODHI Lab. His research builds interpretable genomic foundation models that learn the language of DNA and explain the biological mechanisms behind their predictions, with applications in cancer, neurodegeneration, viral genomics, spatial biology and population-scale variation. He is a co-developer of DNABERT-2 and received his Ph.D. from IIT Patna.",
    links: [["Website", "https://duttaprat.github.io/"], ["Google Scholar", SCHOLAR], ["GitHub", "https://github.com/duttaprat"], ["Hugging Face", "https://huggingface.co/duttaprat"]] },
  { name: "This could be you", role: "PhD students, postdocs, undergraduates", sub: "See how to join", initials: "+", open: true, url: "join.html" }
];

var NEWS = [
  { date: "Fall 2026", text: "BODHI Lab is founded at AI³, Stony Brook University." },
  { date: "May 2026", text: "Selected for the Anthropic AI for Science program to support the DeepVRegulome 2.0 pipeline for regulatory variant interpretation." },
  { date: "Mar 2026", text: "DeepVRegulome released as a pip-installable package with 462 fine-tuned models on Hugging Face and an interactive web app." },
  { date: "Feb 2026", text: "HViLM, a foundation model for viral genomics, posted on bioRxiv." },
  { date: "Aug 2025", text: "NIH R01LM013722 awarded, with Pratik Dutta as Co-Investigator, on deep learning for the noncoding regulatory code." },
  { date: "2025", text: "DNABERT-MB places 2nd at the CAMDA Challenge, ISMB/ECCB 2025." },
  { date: "2024", text: "DNABERT-2 is published at ICLR 2024." }
];

/* ============================================================ */
(function () {
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function $(id) { return document.getElementById(id); }
  function linkRow(links, cls) {
    return links && links.length ? '<div class="' + cls + '">' + links.map(function (l) { return '<a href="' + esc(l[1]) + '">' + esc(l[0]) + '</a>'; }).join("") + '</div>' : "";
  }

  function limit(el, arr) { var n = parseInt(el.getAttribute("data-limit"), 10); return n ? arr.slice(0, n) : arr; }

  var compact = $("themes") && $("themes").getAttribute("data-compact") === "true";
  if ($("themes")) $("themes").innerHTML = THEMES.map(function (t) {
    return '<article class="card reveal"><div class="label">' + esc(t.label) + (t.emerging ? ' <span class="emerging">Emerging</span>' : '') +
      '</div><h3>' + esc(t.title) + '</h3><p>' + esc(t.text) + '</p>' + (compact ? '' : '<div class="tags">' +
      t.tags.map(function (g) { return '<span class="tag">' + esc(g) + '</span>'; }).join("") + '</div>') + '</article>';
  }).join("");

  if ($("projects-grid")) $("projects-grid").innerHTML = limit($("projects-grid"), PROJECTS).map(function (p) {
    return '<article class="project reveal"><div class="kind">' + esc(p.kind) + '</div><h3>' + esc(p.name) + '</h3><p>' + esc(p.desc) +
      '</p><div class="status">' + esc(p.status) + '</div>' + linkRow(p.links, "plinks") + '</article>';
  }).join("");

  if ($("pubs-list")) $("pubs-list").innerHTML = PUBS.map(function (p) {
    var authors = esc(p.authors).replace(PI_NAME, "<b>" + PI_NAME + "</b>");
    var title = p.url ? '<a href="' + esc(p.url) + '">' + esc(p.title) + '</a>' : esc(p.title);
    return '<li class="reveal"><div class="pmeta"><span class="pyear">' + p.year + '</span><span class="pvenue">' + esc(p.venue) + '</span>' +
      (p.status ? '<span class="pstatus">' + esc(p.status) + '</span>' : '') + '</div><div><h3>' + title + '</h3><p>' + authors + '</p></div>' +
      (p.url ? '<a class="pread" href="' + esc(p.url) + '">Read</a>' : '<span></span>') + '</li>';
  }).join("");
  if ($("scholar-link")) $("scholar-link").href = SCHOLAR;

  if ($("people-list")) $("people-list").innerHTML = PEOPLE.map(function (p) {
    if (p.photo) {
      return '<article class="pi card reveal"><img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" width="640" height="800" loading="lazy" decoding="async">' +
        '<div><h3>' + esc(p.name) + '</h3><p class="role"><b>' + esc(p.role) + '</b><br>' + esc(p.sub) + '</p><p>' + esc(p.bio) + '</p>' + linkRow(p.links, "plinks") + '</div></article>';
    }
    return '<a class="person card open reveal" href="' + esc(p.url) + '"><div class="avatar">' + esc(p.initials) + '</div><div><h3>' + esc(p.name) +
      '</h3><p><b>' + esc(p.role) + '</b></p><p>' + esc(p.sub) + '</p></div></a>';
  }).join("");

  if ($("news-list")) $("news-list").innerHTML = limit($("news-list"), NEWS).map(function (n) {
    return '<li><time>' + esc(n.date) + '</time><span>' + esc(n.text) + '</span></li>';
  }).join("");

  if (CONTACT_EMAIL && $("join-btn")) $("join-btn").href = "mailto:" + CONTACT_EMAIL + "?subject=Joining%20BODHI%20Lab";
  if (CONTACT_EMAIL && $("email-link")) { $("email-link").href = "mailto:" + CONTACT_EMAIL; $("email-link").textContent = CONTACT_EMAIL; }
  if ($("year")) $("year").textContent = new Date().getFullYear();

  /* Tree */
  if (window.BodhiTree && $("bodhi-tree")) BodhiTree.mount($("bodhi-tree"));

  /* Theme toggle */
  var root = document.documentElement;
  function current() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function label() { $("theme-btn").innerHTML = current() === "dark" ? "&#9788;" : "&#9790;"; }
  label();
  $("theme-btn").addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("bodhi-theme", next); } catch (e) {}
    label();
    window.dispatchEvent(new Event("bodhi-theme"));
  });

  /* Mobile menu */
  var links = $("nav-links"), mb = $("menu-btn");
  mb.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    mb.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", function (e) { if (e.target.tagName === "A") links.classList.remove("open"); });

  /* Reveal on scroll */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else items.forEach(function (el) { el.classList.add("in"); });
})();

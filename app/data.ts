export type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href?: string;
  tag?: string;
};

export const underReview: Paper[] = [
  {
    title:
      "LLM-Assisted Scheduling Policy Design and Refinement: Evidence Across Queueing Networks, Job-Shop Scheduling, and Ride-Hailing Dispatch",
    authors:
      "Youhua Li, Sibo Xu, Yiqi Sun, Pengfei Guo, Zuojun (Max) Shen, Houmin Yan",
    venue: "Production and Operations Management (Under Review)",
    year: "2026",
    tag: "Operations",
  },
  {
    title:
      "Principled Inference-Time Scaling: A Unified Framework for LLM-Based Optimization Modeling",
    authors: "Youhua Li*, Yiqi Sun*, Zuojun (Max) Shen, Houmin Yan",
    venue: "Operations Research (Revise & Resubmit)",
    year: "2026",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6562298",
    tag: "Optimization Modeling",
  },
  {
    title:
      "GIFT: LLM-Guided State-Reward Interface for Financial Reinforcement Learning",
    authors:
      "Yanyan Wu, Boyi Zhang, Yanlin Liu, Xinyu Fang, Jining Luan, Meiqi Zhang, Jiacheng Liu, Hao Zeng, Dexu Yu, Chang Liu, Hanwen Du, Yongxin Ni, Youhua Li†",
    venue: "Under Review",
    year: "2026",
    href: "https://arxiv.org/abs/2606.08450",
    tag: "FinTech",
  },
  {
    title:
      "Dual-Timescale LLM-Guided Manager-Worker Reinforcement Learning for Ride-Hailing Dispatching and Repositioning",
    authors:
      "Yuting Pang, Xinyu Fang, Yichen Wu, Xiaoxuan Dong, Kong Wang, Tianmin Sun, Sibo Xu, Hao Zeng, Dexu Yu, Jining Luan, Chunxiao Li, Hanwen Du, Youhua Li†",
    venue: "Under Review",
    year: "2026",
    tag: "Mobility",
  },
  {
    title:
      "W3α: A News-to-Alpha Benchmark for Utility-Driven Web3 Recommendation and Trading Backtesting",
    authors:
      "Jining Luan, Hongji Li, Boyi Zhang, Xinyu Fang, Hanwen Du, Ersheng Ni, Hao Zeng, Jiacheng Liu, Yiqi Sun, Yongxin Ni†, Youhua Li†",
    venue: "Under Review",
    year: "2026",
    href: "https://github.com/VecLynxlab/W3-NewsAlpha-page",
    tag: "Web3",
  },
  {
    title:
      "Latent Reward Steering: An Adaptive Inference-Time Framework that Implicitly Promotes Cognitive Behaviors in Reasoning LLMs",
    authors:
      "Jiakang Li, Guanyu Zhu, Can Jin, Chenxi Huang, Dexu Yu, Ronghao Chen, Yang Zhou, Hongwu Peng, Xuanqi Lan, Dimitris N. Metaxas†, Youhua Li†",
    venue: "Under Review",
    year: "2026",
    href: "https://arxiv.org/abs/2606.00726",
    tag: "Reasoning LLMs",
  },
  {
    title:
      "SkillAudit: From Fixed-Suite Benchmarking to Skill-Centered Assessment",
    authors:
      "Dexu Yu*, Youhua Li*, Zhaoyang Guan*, Xianhao Lin*, Jining Luan, Zihao Rao, Xuanqi Lan, Yang Ran, Bo Lan, Nai-Xin Zhai, Hanwen Du, Junchen Fu, Wenhao Deng, Yongxin Ni†, Chunxiao Li†",
    venue: "Under Review",
    year: "2026",
    href: "https://arxiv.org/abs/2606.22613",
    tag: "Evaluation",
  },
  {
    title: "Agent Skill Bundle Recommendation",
    authors:
      "Jin Zhang, Jining Luan, Dexu Yu, Junchen Fu, Wenhao Deng, Hanwen Du, Xuanqi Lan, Joemon M. Jose, Youhua Li†, Yongxin Ni†",
    venue: "Under Review",
    year: "2026",
    tag: "AI Agents",
  },
  {
    title:
      "TriConList: Learning Tri-tier Contract Consistency for Full-Stack Repository Generation",
    authors:
      "Xianhao Lin, Xinyu Fang, Wanglong He, Yichen Wu, Hongji Li, Jiacheng Liu, Dexu Yu, Hanwen Du, Sirui Hong, Chenglin Wu, Youhua Li†, Yongxin Ni†",
    venue: "Under Review",
    year: "2026",
    tag: "Code Generation",
  },
  {
    title:
      "Mitigating Modality Interference for Unified Reasoning and Perception in Multimodal Large Language Models",
    authors:
      "Shuang Chen, Yimeng Ye, Dasen Dai, Yicheng Xiao, Wenxuan Huang, Kaixuan Fan, Manyuan Zhang, Yucheng Zhou, Hanwen Du, Haoxiao Wang, Ziqian Bi, Youhua Li†, Tianyu Shi†",
    venue: "Under Review",
    year: "2026",
    tag: "Multimodal LLMs",
  },
  {
    title:
      "PhysicsMind: Sim and Real Mechanics Benchmarking for Physical Reasoning and Prediction in Foundational VLMs and World Models",
    authors:
      "Chak-Wing Mak, Guanyu Zhu, Boyi Zhang, Hongji Li, Xiaowei Chi, Kevin Zhang, Yangfan He, Chun-Kai Fan, Wentao Lu, Kuangzhi Ge, Xinyu Fang, Hongyang He, Kuan Lu, Tianxiang Xu, Yongxin Ni, Youhua Li, Shanghang Zhang†",
    venue: "Under Review",
    year: "2026",
    href: "https://arxiv.org/abs/2601.16007",
    tag: "World Models",
  },
  {
    title:
      "A Meta-Optimization Framework for Prompt Optimization via Search Trajectory Learning",
    authors:
      "Sibo Xu, Ersheng Ni, Jiaxin Wang, Weihua Cheng, Yuling Wu, Joseph Liu, Jiayi Zhang, Jincheng Fang, Yiqi Sun, Yongxin Ni, Youhua Li†",
    venue: "Under Review",
    year: "2026",
    tag: "Prompt Optimization",
  },
  {
    title: "Token Bayesian Optimization for Reasoning LLMs",
    authors:
      "Weihua Cheng, Ersheng Ni, Lu Tianyou, Yuling Wu, Joseph Liu, Jiayi Zhang, Sirui Hong, Jiaqi Chen, Yiqi Sun, Jincheng Fang, Chenglin Wu, Youhua Li†, Yongxin Ni†",
    venue: "Under Review",
    year: "2026",
    href: "https://openreview.net/forum?id=esXvdhwUQ5",
    tag: "Bayesian Optimization",
  },
];

export const publications: Paper[] = [
  {
    title: "On the Role of Language Representations in Auto-Bidding: Findings and Implications",
    authors:
      "Guanyu Zhu, Jining Luan, Hanwen Du, Xinyu Fang, Sibo Xu, Ersheng Ni, Hongji Li, Jincheng Fang, Ronghao Chen, Huacan Wang, Xuanqi Lan, Yongxin Ni, Yiqi Sun, Youhua Li†",
    venue: "CIKM 2026",
    year: "2026",
    href: "https://arxiv.org/abs/2605.05833",
    tag: "Auto-Bidding",
  },
  {
    title:
      "ClinSDT: LLM-Encoded Clinical Semantic Guidance for Sepsis Treatment via Decision Transformer",
    authors:
      "Yanyan Wu, Guanyu Zhu, Changbin Zhao, Jin Zhang, Dexu Yu, Tianmin Sun, Jining Luan, Chunxiao Li, Hanwen Du, Youhua Li†",
    venue: "CIKM 2026",
    year: "2026",
    tag: "Decision Intelligence",
  },
  {
    title:
      "Aligning Human Sense: Calibrated Distributional Reward Learning for Video Generation",
    authors:
      "Nai-Xin Zhai, Weihua Cheng, Chenxi Huang, Yikai Gu, Hanwen Du, Dexu Yu, Junchen Fu, Yingwei Song, Liyuan Lillian Ma, Yangfan He, Yang Ran, Chunxiao Li, Youhua Li†, Yongxin Ni†",
    venue: "ECCV 2026",
    year: "2026",
    tag: "Video Generation",
  },
  {
    title: "Interpretable Knowledge Tracing via Explicit-Implicit Alignment",
    authors:
      "Ersheng Ni, Jiaxin Wang, Jining Luan, Jiacheng Liu, Shuyan Xiong, Mengmeng Chen, Yongxin Ni, Youhua Li†",
    venue: "Knowledge-Based Systems",
    year: "2026",
    href: "https://doi.org/10.1016/j.knosys.2026.116071",
    tag: "Knowledge Tracing",
  },
  {
    title:
      "Bridging NIP and MLM: A Unified Meta-Learning Framework for Personalized Sequential Recommendation",
    authors:
      "Youhua Li†, Ersheng Ni, Yihao Liu, Junchen Fu, Hanwen Du, Yuanqi He, Yongxin Ni",
    venue: "ACM TKDD",
    year: "2026",
    href: "https://dl.acm.org/doi/10.1145/3786346",
    tag: "Sequential Recommendation",
  },
  {
    title:
      "AMBER: Adaptive Meta Balanced Paradigm for Heterogeneous Graph-Based Knowledge Tracing",
    authors:
      "Lifan Sun, Zichen Yuan, Ersheng Ni, Linkun Dai, Hongwei Jiang, Sibo Xu, Mengmeng Chen, Yucen Zhuang, Yongxin Ni, Youhua Li†",
    venue: "CIKM 2025",
    year: "2025",
    href: "https://dl.acm.org/doi/10.1145/3746252.3761202",
    tag: "Knowledge Tracing",
  },
  {
    title:
      "Frequency-Decoupled Distillation for Efficient Multimodal Recommendation",
    authors:
      "Ziyi Zhuang, Hongji Li, Junchen Fu†, Mengmeng Chen, Joemon M. Jose, Youhua Li, Yongxin Ni",
    venue: "CIKM 2025",
    year: "2025",
    href: "https://dl.acm.org/doi/10.1145/3746252.3761242",
    tag: "Multimodal Recommendation",
  },
  {
    title:
      "SOLAR: Serendipity Optimized Language Model Aligned for Recommendation",
    authors:
      "Zichen Yuan, Lifan Sun, Yucen Zhuang, Yue Wang, Xinyuan Song, Tianqi Xu, Siyuan Li, Jiaqi Chen, Joemon M. Jose, Youhua Li†, Yongxin Ni†",
    venue: "Findings of EMNLP 2025",
    year: "2025",
    href: "https://aclanthology.org/2025.findings-emnlp.538/",
    tag: "LLM Recommendation",
  },
  {
    title:
      "Bridging the Gap: Teacher-Assisted Wasserstein Knowledge Distillation for Efficient Multi-Modal Recommendation",
    authors:
      "Ziyi Zhuang, Hanwen Du, Youhua Li, Junchen Fu, Joemon M. Jose, Yongxin Ni†",
    venue: "WWW 2025",
    year: "2025",
    href: "https://dl.acm.org/doi/10.1145/3696410.3714852",
    tag: "Knowledge Distillation",
  },
  {
    title:
      "Teach Me How to Denoise: A Universal Framework for Denoising Multi-modal Recommender Systems via Guided Calibration",
    authors:
      "Hongji Li, Hanwen Du, Youhua Li, Junchen Fu, Chunxiao Li, Ziyi Zhuang, Jiakang Li, Yongxin Ni†",
    venue: "WSDM 2025",
    year: "2025",
    href: "https://dl.acm.org/doi/10.1145/3701551.3703507",
    tag: "Multimodal Recommendation",
  },
  {
    title: "Video-Bench: Human-Aligned Video Generation Benchmark",
    authors:
      "Hui Han, Siyuan Li, Jiaqi Chen, Yiwen Yuan, Yuling Wu, Chak Tou Leong, Hanwen Du, Junchen Fu, Youhua Li, Jie Zhang, Chi Zhang, Li-jia Li, Yongxin Ni†",
    venue: "CVPR 2025",
    year: "2025",
    href: "https://openaccess.thecvf.com/content/CVPR2025/html/Han_Video-Bench_Human-Aligned_Video_Generation_Benchmark_CVPR_2025_paper.html",
    tag: "Video Generation",
  },
  {
    title: "An Empirical Study of Training ID-Agnostic Multi-modal Sequential Recommenders",
    authors:
      "Youhua Li, Hanwen Du, Yongxin Ni, Yuanqi He, Junchen Fu, Xiangyan Liu",
    venue: "arXiv",
    year: "2024",
    href: "https://arxiv.org/abs/2403.17372",
    tag: "Multimodal Recommendation",
  },
  {
    title: "A Content-Driven Micro-Video Recommendation Dataset at Scale",
    authors:
      "Yongxin Ni, Xiangyan Liu, Youhua Li, Junjie Shan, Jiaqi Zhang, Junchen Fu, Yu Cheng, Fajie Yuan†",
    venue: "CIKM 2025",
    year: "2025",
    href: "https://dl.acm.org/doi/10.1145/3746252.3761655",
    tag: "Dataset",
  },
  {
    title: "NineRec: A Suite of Transfer Learning Datasets for Modality-Based Recommender Systems",
    authors:
      "Jiaqi Zhang, Yu Cheng, Yongxin Ni, Zheng Yuan, Junchen Fu, Youhua Li, Jie Wang, Fajie Yuan†",
    venue: "IEEE TPAMI",
    year: "2024",
    href: "https://www.computer.org/csdl/journal/tp/2025/07/10461053/1V95GWlxcQM",
    tag: "Dataset",
  },
  {
    title: "Multi-Modality is All You Need for Transferable Recommender Systems",
    authors:
      "Youhua Li, Hanwen Du, Yongxin Ni, Pengpeng Zhao, Qi Guo†, Fajie Yuan†, Xiaofang Zhou",
    venue: "ICDE 2024",
    year: "2024",
    href: "https://arxiv.org/abs/2312.09602",
    tag: "Transfer Learning",
  },
  {
    title: "Where to Go Next for Recommender Systems? ID- vs. Modality-based Recommender Models Revisited",
    authors:
      "Zheng Yuan, Fajie Yuan, Yu Song, Youhua Li, Junchen Fu, Fei Yang, Yongxin Ni",
    venue: "SIGIR 2023",
    year: "2023",
    href: "https://dl.acm.org/doi/10.1145/3539618.3591932",
    tag: "Recommender Systems",
  },
  {
    title: "Shape Transformer Nets: Generating Viewpoint-Invariant 3D Shapes from a Single Image",
    authors: "Jinglun Yang*, Youhua Li*, Lu Yang",
    venue: "Journal of Visual Communication and Image Representation",
    year: "2021",
    href: "https://www.sciencedirect.com/science/article/abs/pii/S1047320321002285",
    tag: "3D Vision",
  },
  {
    title: "VST3D-Net: Video-Based Spatio-Temporal Network for 3D Shape Reconstruction from a Video",
    authors: "Jinglun Yang, Guanglun Zhang, Youhua Li, Lu Yang",
    venue: "International Conference on 3D Immersion",
    year: "2020",
    href: "https://ieeexplore.ieee.org/document/9376350/",
    tag: "3D Vision",
  },
];

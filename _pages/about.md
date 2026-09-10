---
permalink: /
title: "Usman Ahad"
excerpt: "Usman Ahad is a Computer Science student at LUMS researching efficient multimodal reasoning, privacy-preserving edge AI, and federated open-set learning."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## About me

Hello! I am a B.S. Computer Science student at [Lahore University of Management Sciences](https://lums.edu.pk/) in Lahore, Punjab, Pakistan, with a 3.64/4.00 CGPA and three consecutive years on the Dean's Honour List.

My research focuses on efficient and reliable AI systems, especially *vision-language reasoning*, *privacy-preserving edge AI*, *federated learning*, and *open-set recognition*. I enjoy taking ideas from model design through careful evaluation and deployment on resource-constrained hardware.

## Current

- **Aug. 2026:** Began serving as a Teaching Assistant for **AI on Edge Devices** at LUMS.
- **Sep. 2026:** Submitted **VisConf**, a training-free quality-aware consensus framework for Best-of-N VLM reasoning, to the **NeurIPS 2026 VLM4RWD Workshop**.
- **Sep. 2026:** Submitted **Mind Your Own Business**, a consent-based audio privacy pipeline for smart glasses, to **PerCom 2026**.

## Selected research

### VisConf: Quality-Aware Consensus for Best-of-N VLM Reasoning

Developed a training-free selection framework that combines candidate-calibrated Self-Certainty, visual engagement, and Rank-Weighted Consensus. Across three VLMs, three benchmarks, and sampling budgets of 8, 16, and 32, VisConf achieved **56.36% mean accuracy**, led all baselines in **24 of 27 settings**, and exceeded Self-Consistency by 0.98 points.

*Submitted to the NeurIPS 2026 VLM4RWD Workshop.*

### Mind Your Own Business: Consent-Based Audio Privacy for Smart Glasses

Built a semi-real-time Raspberry Pi 5 pipeline for speaker diarization, streaming transcription, cross-window disclosure tracking, speech anonymization, and consent-gated restoration. A DPO-tuned Qwen3.5-2B model reduced privacy leakage by **24.7%** versus the base model while improving utility by 2.5 points on 143 held-out transcripts; the Q4 edge variant retained 0.902 utility.

*Submitted to PerCom 2026.*

### FedCPR: Federated Open-Set Recognition with Latent Prototype Rejection

Developed latent-space outlier synthesis with curriculum learning under FedAvg, achieving **85.42% open-set AUROC** and **90.96% closed-set accuracy** on CIFAR-10 across five non-IID clients while outperforming PROSER, FedPD, and ARPL.

### WatchTower: Network Anomaly Detection for Edge Devices

Built a memory-token Transformer with PROSER latent outliers and FedProx, achieving **93.66% accuracy** and **92.83% F1** on CIC-IDS2017. INT8 quantization reduced model size by **67.5%**, while TVM auto-tuning reached 3.82 ms single-core latency and more than 260 packets per second on Raspberry Pi 5.

[See all research projects](/research/) or [download my CV](/files/resume.pdf).

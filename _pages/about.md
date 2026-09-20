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

Hello! I am a B.S. Computer Science student at [Lahore University of Management Sciences](https://lums.edu.pk/) in Lahore, Punjab, Pakistan, with three consecutive years on the Dean's Honour List.

My research explores model training and efficient AI systems, especially *vision-language reasoning*, *privacy-preserving edge AI*, and *federated learning*. I’m interested in understanding why models succeed or fail, then translating those insights into reliable systems that work beyond the lab.

## Current

- **Aug. 2026:** Began serving as a Teaching Assistant for **AI on Edge Devices** at LUMS.
- **Sep. 2026:** Submitted **VisConf**, a training-free quality-aware consensus framework for Best-of-N VLM reasoning, to the **NeurIPS 2026 VLM4RWD Workshop**.
- **Sep. 2026:** Submitted **PARDA**, an on-device audio privacy system for smart glasses using small language models, to **IEEE PerCom**.

## Selected research

### VisConf: Quality-Aware Consensus for Best-of-N VLM Reasoning

Developed a training-free selection framework that combines candidate-calibrated Self-Certainty, visual engagement, and Rank-Weighted Consensus. Across three VLMs, three benchmarks, and sampling budgets of 8, 16, and 32, VisConf achieved **56.36% mean accuracy**, led all baselines in **24 of 27 settings**, and exceeded Self-Consistency by 0.98 points.

*Submitted to the NeurIPS 2026 VLM4RWD Workshop.*

### PARDA: On-Device Audio Privacy for Smart Glasses using Small Language Models

Built a Raspberry Pi 5 pipeline combining causal multi-speaker transcription, cross-window privacy reasoning, semantic anonymization, and non-source speech resynthesis. Distilling an adversary-anonymizer pipeline into Qwen3.5-2B reduced privacy leakage by **24.7%** while raising utility from 0.875 to 0.900 on 143 held-out conversations; the Q4 deployment retained 0.902 utility, and the audio path achieved a **0.7703 weighted real-time factor** across speaker mixtures.

*Submitted to IEEE PerCom.*

### FedCPR: Federated Open-Set Recognition with Latent Prototype Rejection

Developed latent-space outlier synthesis with curriculum learning under FedAvg, achieving **85.42% open-set AUROC** and **90.96% closed-set accuracy** on CIFAR-10 across five non-IID clients while outperforming PROSER, FedPD, and ARPL.

### WatchTower: Network Anomaly Detection for Edge Devices

Built a memory-token Transformer with PROSER latent outliers and FedProx, achieving **93.66% accuracy** and **92.83% F1** on CIC-IDS2017. INT8 quantization reduced model size by **67.5%**, while TVM auto-tuning reached 3.82 ms single-core latency and more than 260 packets per second on Raspberry Pi 5.

[See all research projects](/research/) or [download my CV](/files/resume.pdf).

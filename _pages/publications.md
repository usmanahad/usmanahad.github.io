---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}
## VisConf: Quality-Aware Consensus for Best-of-N VLM Reasoning

**Jan. 2026 -- Sep. 2026**

*PyTorch, Transformers, Qwen2.5-VL, InternVL3, Gemma 4*

Developed a training-free framework that combines candidate-calibrated Self-Certainty with visual-attention engagement and hyperparameter-free Rank-Weighted Consensus, improving VLM answer selection without external verifier or reward models. Across MathVista, MMMU-Pro, and MMStar, VisConf achieved **56.36% mean accuracy**, outperformed all baselines in **24 of 27** model-dataset-budget settings, and delivered gains up to 12.18 points when correct rollouts were present but outnumbered.

*Submitted to the NeurIPS 2026 VLM4RWD Workshop.*

## Mind Your Own Business: Consent-Based Audio Privacy for Smart Glasses

**Jan. 2026 -- Sep. 2026**

*PyTorch, Qwen3.5-2B, LoRA, DPO, RAG, LS-EEND, Speech Processing*

Built a paced, semi-real-time Raspberry Pi 5 pipeline that diarizes and transcribes speech, tracks cumulative disclosures across rolling windows, anonymizes linked identifiers, resynthesizes speaker-independent audio, and gates restoration on bystander consent. Distilled GPT-5.6 Luna anonymization into Qwen3.5-2B using 30,960 SFT examples and 6,241 DPO preference pairs. The DPO model reduced leakage by **24.7%** versus the 2B base model while increasing utility by 2.5 points; it remained within 6.5% of GPT-5.6 Luna's leakage while exceeding its utility by 1.4 points.

*Submitted to PerCom 2026.*

## FedCPR: Federated Open-Set Recognition with Latent Prototype Rejection

**Nov. 2025 -- Feb. 2026**

*PyTorch, Federated Learning, Open-Set Recognition*

Developed latent-space outlier synthesis with curriculum learning under FedAvg for heterogeneous clients. FedCPR reached **85.42% open-set AUROC** and **90.96% closed-set accuracy** on CIFAR-10 across five non-IID clients, outperforming evaluated alternatives including PROSER, FedPD, and ARPL.

## WatchTower: Transformer-Based Network Anomaly Detection for Edge Devices

**Aug. 2025 -- Dec. 2025**

*PyTorch, TFLite, Apache TVM, FedProx, PROSER, Raspberry Pi 5*

Built a real-time open-set intrusion detector using 28 packet-level features, a memory-token Transformer with gated cross-window state, PROSER latent-space outliers, and FedProx. WatchTower achieved **93.66% accuracy** and **92.83% F1** on CIC-IDS2017 and was validated against live DoS traffic across 3--8 connected devices. INT8 quantization reduced the model from 4.63 MB to 1.51 MB, and 1,000-trial TVM auto-tuning reached 3.82 ms single-core latency, a 2.6x speedup.

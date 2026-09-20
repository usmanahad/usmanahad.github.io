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

## PARDA: On-Device Audio Privacy for Smart Glasses using Small Language Models

**Jan. 2026 -- Sep. 2026**

*PyTorch, ONNX, Qwen3.5-2B, LoRA, DPO, RAG, LS-EEND, Moonshine, Raspberry Pi 5*

Developed PARDA (Privacy-preserving Audio Redaction with Decryption on Authorization), an on-device system that protects both what a bystander says and how they sound. The Raspberry Pi 5 pipeline combines causal multi-speaker diarization and transcription, persistent disclosure profiles with cross-window retrieval, semantic anonymization, non-source speech resynthesis, and consent-mediated restoration.

Using 717 silver-labeled CANDOR conversations, distilled a GPT-5.6 Luna adversary-anonymizer pipeline into Qwen3.5-2B with 30,960 SFT examples and 6,241 DPO preference pairs. On 143 held-out conversations, DPO reduced mean leakage by **24.7%** (0.502 to 0.378) while improving utility from 0.875 to 0.900; the Q4 deployment achieved 0.400 leakage and 0.902 utility.

On Raspberry Pi 5, the audio path achieved a **0.7703 speaker-mixture-weighted real-time factor**. Across 40 paced end-to-end replays, mean transcription delay was 23.56 seconds and post-recording anonymization drain averaged 6.43 minutes for 31.07-minute recordings. Non-source resynthesis pushed original-to-anonymized speaker-verification EER to 48.50--50.75% across three attackers, approaching chance-level linkability.

*Submitted to IEEE PerCom.*

## FedCPR: Federated Open-Set Recognition with Latent Prototype Rejection

**Nov. 2025 -- Feb. 2026**

*PyTorch, Federated Learning, Open-Set Recognition*

Developed latent-space outlier synthesis with curriculum learning under FedAvg for heterogeneous clients. FedCPR reached **85.42% open-set AUROC** and **90.96% closed-set accuracy** on CIFAR-10 across five non-IID clients, outperforming evaluated alternatives including PROSER, FedPD, and ARPL.

## WatchTower: Transformer-Based Network Anomaly Detection for Edge Devices

**Aug. 2025 -- Dec. 2025**

*PyTorch, TFLite, Apache TVM, FedProx, PROSER, Raspberry Pi 5*

Built a real-time open-set intrusion detector using 28 packet-level features, a memory-token Transformer with gated cross-window state, PROSER latent-space outliers, and FedProx. WatchTower achieved **93.66% accuracy** and **92.83% F1** on CIC-IDS2017 and was validated against live DoS traffic across 3--8 connected devices. INT8 quantization reduced the model from 4.63 MB to 1.51 MB, and 1,000-trial TVM auto-tuning reached 3.82 ms single-core latency, a 2.6x speedup.

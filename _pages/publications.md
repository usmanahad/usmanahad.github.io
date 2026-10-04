---
layout: archive
title: "Research projects"
permalink: /research/
author_profile: true
research_styles: true
excerpt: "Explore Usman Ahad's research in vision-language reasoning, audio privacy, federated learning, and efficient edge AI."
---

<div class="research-index">
  <p class="research-intro">A selection of my research projects. Open a project for an overview, my contributions, and the full paper.</p>
  <div class="research-grid">
    {% for project in site.data.research %}
    <a class="research-card" href="{{ project.url | relative_url }}">
      <span class="research-card__topic">{{ project.topic }}</span>
      <h2>{{ project.name }}</h2>
      <p class="research-card__summary">{{ project.summary }}</p>
      <span class="research-card__dates">{{ project.dates }}</span>
      {% if project.status %}<span class="research-card__status">{{ project.status }}</span>{% endif %}
      <span class="research-card__action">Explore project <span aria-hidden="true">&rarr;</span></span>
    </a>
    {% endfor %}
  </div>
</div>

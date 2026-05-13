---
layout: base.njk
templateEngineOverride: njk
title: Work
description: Selected projects, events, competitions, research, and awards by Tob.
---

<section class="page-heading">
  <p class="kicker">Work</p>
  <h1>Selected work.</h1>
  <p class="lead">やったこと。全ては載せないです。いくつかは闇に葬ります、、、</p>
</section>

<nav class="work-filter" aria-label="Work category" data-work-filter>
  <button type="button" data-filter="all" aria-pressed="true">All</button>
  {% for category in workCategories %}
  <button type="button" data-filter="{{ category.key }}" aria-pressed="false">{{ category.label }}</button>
  {% endfor %}
</nav>

<div class="work-list" id="work-list">
  {% for category in workCategories %} {% for item in collections.work %} {% if item.data.work.category == category.key %}
  <a class="work-item" href="{{ item.url }}" data-category="{{ item.data.work.category }}">
    <p class="work-meta">{{ item.data.work.year }} / {{ item.data.work.type }}</p>
    <div>
      <h2>{{ item.data.title }}</h2>
      <p>{{ item.data.work.summary }}</p>
    </div>
  </a>
  {% endif %} {% endfor %} {% endfor %}
</div>

<script>
  const workFilter = document.querySelector("[data-work-filter]");

  if (workFilter) {
    const buttons = [...workFilter.querySelectorAll("[data-filter]")];
    const items = [...document.querySelectorAll(".work-item[data-category]")];

    const applyFilter = (filter) => {
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
      });

      items.forEach((item) => {
        item.hidden = filter !== "all" && item.dataset.category !== filter;
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });
  }
</script>

---
layout: base.njk
title: コーヒー豆買わなきゃ
description: コーヒー豆を買うメモ。
date: 2026-05-10
---

<article class="article">
  <header class="article-header">
    <h1>{{ title }}</h1>
    <time datetime="{{ date | dateIso }}">{{ date | dateDisplay }}</time>
  </header>

  <div class="prose">
    <p>コーヒーはインフラ。カルディに行こう。</p>
  </div>
</article>

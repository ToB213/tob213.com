---
layout: base.njk
templateEngineOverride: njk
title: Blog
description: Tobのブログ。
---

<h1>Blog</h1>

<ol class="post-list">
  {% for post in collections.blog %}
  <li>
    <time datetime="{{ post.date | dateIso }}">{{ post.date | dateDisplay }}</time>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
  {% endfor %}
</ol>

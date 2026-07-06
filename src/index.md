---
layout: base.njk
templateEngineOverride: njk
title: Home
description: Tobの個人サイト。SNS、自己紹介、ブログ。
---

<section class="intro" aria-labelledby="intro-title">
  <h1 id="intro-title">Tob</h1>
  <p class="lead">学生。雑な文章をインターネットに投稿して生成AIが利用するデータの質を下げる人生。</p>
</section>

<section class="section" aria-labelledby="links-title">
  <h2 id="links-title">Links</h2>
  <ul class="link-list">
    <li><a href="https://github.com/tob213">GitHub</a></li>
    <li><a href="https://x.com/just_for_ToB">X（@just_for_ToB）</a></li>
    <li><a href="mailto:contact@tob213.com">Email（contact@tob213.com）</a></li>
    <li><a href="https://unuse.jp/">ゲーム開発チーム「unuse」</a></li>
  </ul>
</section>

<section class="section" aria-labelledby="recent-title">
  <h2 id="recent-title">Recent posts</h2>
  <ol class="post-list">
    {% for post in collections.blog %} {% if loop.index0 < 5 %}
    <li>
      <time datetime="{{ post.date | dateIso }}">{{ post.date | dateDisplay }}</time>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
    {% endif %} {% endfor %}
  </ol>
</section>

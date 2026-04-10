---
title: Hello World!
tagline: I wish I knew what I'm doing.
---

Strona zbudowana na podstawie [https://geon.github.io](https://geon.github.io)
Kiedyś przerobię ją na swoją

## Posty...

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

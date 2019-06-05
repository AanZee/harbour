---
layout: default
title: Link
---

## HTML structure
```
link
```

## Default Link
{% capture link %}
<a class="link"
	href="#"
>
	My awesome website
</a>
{% endcapture %}
{% include example.html
	content=link
%}
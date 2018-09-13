---
layout: docs
title: Page
---

## Available modifiers
```
page__main--colored
```

## Structure
```
page
├── page__header
├── page__main (modifier)
├── page__footer
```

## Example HTML

{% capture page %}
<body class="page">
	<header class="page__header">
		...
	</header>
	<main class="page__main">
		...
	</main>
	<footer class="page__footer">
		...
	</footer>
</body>
{% endcapture %}
{% include example.html
	content=page
	hide_preview=true
%}
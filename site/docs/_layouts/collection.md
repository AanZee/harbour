---
layout: docs
title: Collection
---

## Available modifiers
```
collection--grid-one-whole-till-one-third
```

## Structure
```
collection (modifier)
├── collection__item
```

## Example HTML
{% capture collection %}
	<div class="collection collection--grid-one-whole-till-one-third">
		<div class="collection__item">
			<img src="{{ '/images/placeholder-wide-480w.jpg' | relative_url }}">
		</div>
		<div class="collection__item">
			<img src="{{ '/images/placeholder-wide-480w.jpg' | relative_url }}">
		</div>
		<div class="collection__item">
			<img src="{{ '/images/placeholder-wide-480w.jpg' | relative_url }}">
		</div>
	</div>
{% endcapture %}
{% include example.html
	content=collection
%}
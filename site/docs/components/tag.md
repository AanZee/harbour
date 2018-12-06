---
layout: docs
title: Tag
---

## Available modifiers

### Size

```
tag--90
tag--80
```

### Appearance
```
tag--light
tag--primary
tag--secondary
tag--tertiary
tag--success
tag--warning
tag--warning
tag--error
```

## HTML structure
```
tag (modifiers)
```

## Available variations

### Sizes
{% capture tag-sizes %}
<span class="tag">
	Tag
</span>
<span class="tag tag--90">
	Tag 90
</span>
<span class="tag tag--80">
	Tag 80
</span>
{% endcapture %}
{% include example.html
	content=tag-sizes
%}

### Appearances
{% capture tag-colors %}
<span class="tag">
	Tag
</span>
<span class="tag tag--primary">
	Tag primary
</span>
<span class="tag tag--secondary">
	Tag secondary
</span>
<span class="tag tag--tertiary">
	Tag tertiary
</span>
<span class="tag tag--success">
	Tag success
</span>
<span class="tag tag--warning">
	Tag warning
</span>
<span class="tag tag--error">
	Tag error
</span>
{% endcapture %}
{% include example.html
	content=tag-colors
%}
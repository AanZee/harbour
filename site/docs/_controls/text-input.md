---
layout: default
title: Text Input
---

## Available states

```
text-input.is-valid
text-input.is-invalid
text-input:disabled
text-input:focus
```

## Available modifiers

### Multiline

```
text-input--multiline
```

### Sizes

```
text-input--90
text-input--max-width-90
text-input--max-width-80
text-input--max-width-70
text-input--max-width-60
```

## Example HTML

{% capture text-input %}
<input class="text-input"
	type="text"
>
{% endcapture %}
{% include example.html
	content=text-input
%}

{% capture text-input-multiline %}
<textarea class="text-input text-input--multiline"></textarea>
{% endcapture %}
{% include example.html
	content=text-input-multiline
%}
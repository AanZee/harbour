---
layout: default
title: Drop-down menu
---

A drop-down menu is a menu which displays a list of options which are mutually exclusive and not consecutive. A drop-down menu contains a simple arrow pointing downwards on the right, in contrast to a pop-up menu which has two arrows on the right: one pointing upwards and one pointing downwards. Drop-down menu's should be used sparingly, as they hide important information, i.e. the options, from users. In forms use text-input fields or other controls better suited for the job.

## Available states

```
drop-down-menu.is-valid
drop-down-menu.is-invalid
drop-down-menu__select:disabled
drop-down-menu__select:focus
```

## Available modifiers

### Sizes

```
drop-down-menu--90
drop-down-menu--max-width-90
drop-down-menu--max-width-80
drop-down-menu--max-width-70
drop-down-menu--max-width-60
```

## Example HTML

{% capture drop-down-menu %}
<div class="drop-down-menu">
	<select class="drop-down-menu__select">
		<option value="1">option 1</option>
		<option value="2">option 2</option>
	</select>
</div>
{% endcapture %}
{% include example.html
	content=drop-down-menu
%}
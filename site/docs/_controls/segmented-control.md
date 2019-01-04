---
layout: docs
title: Segmented Control
---

## Available states

```
.segmented-control.is-invalid
.segmented-control__input:checked
.segmented-control__input:focus
.segmented-control__input:disabled
```

## Available modifiers

### Sizes
```
.segmented-control--80
.segmented-control--90
```

### Distribution and Orientation
```
.segmented-control--column
.segmented-control--column-hand-and-smaller
.segmented-control--wrapping
.segmented-control--stretched
.segmented-control--equal-width
```

## Structure
```
segmented-control (modifier)
├── segmented-control__item
│	├── segmented-controll__item-input
│	├── segmented-controll__item-label
```

## Example HTML

{% capture segmented-control %}
<div class="segmented-control segmented-control--stretched">
	<label class="segmented-control__item">
		<input class="segmented-control__item-input"
			id="segmented-control-item-1"
			name="segmented-control"
			type="radio"
			value="1"
			checked
		>
		<span class="segmented-control__item-label">Item 1</span>
	</label>
	<label class="segmented-control__item">
		<input class="segmented-control__item-input"
			id="segmented-control-item-1"
			name="segmented-control"
			type="radio"
			value="2"
		>
		<span class="segmented-control__item-label">Item 2 with a long label</span>
	</label>
	<label class="segmented-control__item">
		<input class="segmented-control__item-input"
			id="segmented-control-item-1"
			name="segmented-control"
			type="radio"
			value="3"
		>
		<span class="segmented-control__item-label">Item 3 with a very very very very long label, it is even longer than that</span>
	</label>
</div>
{% endcapture %}
{% include example.html
	content=segmented-control
%}
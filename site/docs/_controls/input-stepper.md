---
layout: default
title: Input Stepper
---

## Available states

```
input-stepper.is-skeleton
input-stepper.is-disabled
input-stepper.is-frozen
input-stepper.is-loading
```

## Available modifiers

### Vertical

Places the increase/decrease buttons above and below input instead of next to it

```
input-stepper--vertical
```

### Secondary

Uses secondary color for the increase/decrease buttons

```
input-stepper--secondary
```

### Sizes

```
input-stepper--90
```

## Available local variables

```scss
$input-stepper-button-background-color
```

## Example HTML

{% capture input-stepper %}
<div class="input-stepper">
	<input class="input-stepper__input"
		id="element-id"
		type="number"
		pattern="[0-9]*"
		autocomplete="off"
		value="7"
	>
	<button class="input-stepper__control input-stepper__control--decrease">
		-
	</button>
	<button class="input-stepper__control input-stepper__control--increase">
		+
	</button>
</div>
{% endcapture %}
{% include example.html
	content=input-stepper
%}

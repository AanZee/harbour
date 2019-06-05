---
layout: default
title: Popover
---

## Available modifiers

Adjust display
```
popover--inlined
```

Adjust position of body
```
popover--left-bottom-aligned-body
popover--center-bottom-aligned-body
popover--right-bottom-aligned-body
popover--left-top-aligned-body
popover--center-top-aligned-body
popover--right-top-aligned-body
```

Adjust width of body
```
popover--scaled
popover--flexible
```

Add arrow
```
popover--arrow
```

Adjust position of arrow
```
popover--center-aligned-arrow
```

## Structure
```
popover (modifier)
├── popover__status
├── popover__action
│	├── ...
├── popover__body
│	├── popover__header
│	│	├── popover__title
│	│	│── popover__close-action
│	├── popover__main
│		├── ...
├── popover__backdrop
```

## Example HTML

{% capture popover %}
<div class="popover">
	<input class="popover__status"
		type="checkbox"
		id="popover"
		aria-hidden="true"
	>
	<div class="popover__action">
		<label class="button"
			for="popover"
		>
			Button
		</label>
	</div>
	<section class="popover__body">
		<header class="popover__header">
			<h1 class="popover__title">
				Title
			</h1>
			<label class="popover__close-action"
				for="popover"
			>
				Close
			</label>
		</header>
		<div class="popover__main">
			...
		</div>
	</section>
	<label class="popover__backdrop"
		for="popover"
	>
		Close
	</label>
</div>
{% endcapture %}
{% include example.html
	content=popover
%}
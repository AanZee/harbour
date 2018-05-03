# Popover
- [See SCSS component](../../scss/components/popover.scss)

## Available modifiers

Adjust position of body
```
popover--left-bottom-aligned-body
popover--center-bottom-aligned-body
popover--right-bottom-aligned-body
popover--left-top-aligned-body
popover--center-top-aligned-body
popover--right-top-aligned-body
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
│	├── button
├── popover__body
│	├── popover__header
│	│	├── popover__title
│	│	│── popover__close-action
│	├── popover__main
│		├── ...
├── popover__backdrop
```

## Example HTML
Basic example
```html
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
```

Example with arrow and right bottom aligned body
```html
<div class="popover popover--arrow popover--right-bottom-aligned-body">
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
```

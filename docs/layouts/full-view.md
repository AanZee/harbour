# Full view
- [See SCSS component](../../scss/layouts/_full-view.scss)

## Available modifiers
Shows the header and footer fixed at the top and bottom of the viewport
```
full-view--fixed
```
Shows the header fixed at the top of the viewport
```
full-view--fixed-header
```
Shows the footer fixed at the bottom of the viewport
```
full-view--fixed-footer
```
Shows the footer connected to the content of your main component
```
full-view__main--connected-footer
```

## Structure
```
full-view
├── full-view__header
├── full-view__main
├── full-view__footer
```

## Example HTML
```html
<div class="full-view">
	<div class="full-view__header">
		...
	</div>
	<div class="full-view__main">
		...
	</div>
	<div class="full-view__footer">
		...
	</div>
</div>
```

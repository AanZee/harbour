# Tooltip
- [See SCSS component](../../scss/components/_tooltip.scss)
- This components needs a JavaScript solution

## Available modifiers
**Shows the pointer below the tooltip**
```
tooltip--pointer-bottom
```
**Shows the pointer above the tooltip**
```
tooltip--pointer-top
```

## Structure
```
tooltip
├── tooltip__content
├── tooltip__pointer
```

## Available local variables
```scss
$tooltip-border-color
$tooltip-background-color
$tooltip-box-shadow
$tooltip-color
$tooltip-pointer-width
$tooltip-pointer-height
```

## Example HTML
```html
<div class="tooltip">
	<div class="tooltip__content"></div>
	<div class="tooltip__pointer"></div>
</div>
```

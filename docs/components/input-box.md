# Input box
- [See SCSS component](../../scss/components/_input-box.scss)
- This component might need a JavaScript solution

## Available states
**Shows a valid icon in the state indicator**
```
input-box__input.is-valid
```
**Shows an invalid icon in the state indicator**
```
input-box__input.is-invalid
```
**Shows a spinning loading icon in the state indicator**
```
input-box__input.is-loading
```

## Structure
```
input-box
├── input-box__input
├── input-box__state-indicator
```

## Available local variables
```scss
$input-box-indicator-icon-color
$input-box-indicator-icon-color-diap
$input-box-indicator-icon-border
$input-box-indicator-icon-background-color
$input-box-indicator-icon-invalid-background-color
$input-box-indicator-icon-valid-background-color
```

## Example HTML
```html
<div class="input-box">
	<input class="input-box__input text-input" type="text" />
	<div class="input-box__state-indicator"></div>
</div>
```

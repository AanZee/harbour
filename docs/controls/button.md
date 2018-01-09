# Button
- [See SCSS component](../../scss/controls/button.scss)

## Available states
Changes the (background) color
```
button:hover
button:focus
button:active
```
Changes the (background) color and add not-allowed cursor
```
button:disabled
```

## Available modifiers
Colors
```
button--cta
button--secondary
button--ui
button--transparent
```
Outline version (Not available with the button--transparent modifier)
```
button--outline
```
Sizes
```
button--80
button--90
button--200
button--full
```
Add ons
```
button--arrow-up
button--arrow-right
button--arrow-bottom
button--arrow-left
```

## Available local variables
```scss
$button-color
$button-background-color
$button-hover-color
$button-hover-background-color
$button-focus-box-shadow
$button-active-color
$button-active-background-color
$button-disabled-color
$button-disabled-background-color

$button-cta-color
$button-cta-background-color
$button-cta-hover-color
$button-cta-hover-background-color
$button-cta-focus-box-shadow
$button-cta-active-color
$button-cta-active-background-color
$button-cta-disabled-color
$button-cta-disabled-background-color

$button-secondary-color
$button-secondary-background-color
$button-secondary-hover-color
$button-secondary-hover-background-color
$button-secondary-focus-box-shadow
$button-secondary-active-color
$button-secondary-active-background-color
$button-secondary-disabled-color
$button-secondary-disabled-background-color

$button-ui-color
$button-ui-background-color
$button-ui-hover-color
$button-ui-hover-background-color
$button-ui-focus-box-shadow
$button-ui-active-color
$button-ui-active-background-color
$button-ui-disabled-color
$button-ui-disabled-background-color

$button-transparent-color
$button-transparent-hover-background-color
$button-transparent-hover-color
$button-transparent-focus-box-shadow
$button-transparent-active-background-color
$button-transparent-active-color
$button-transparent-disabled-background-color
$button-transparent-disabled-color

$button-outline-border-width
```

## Example HTML
```html
<button class="button" type="button">Action</button>
<a class="button button--ui button--outline" href="/">Link</a>
```

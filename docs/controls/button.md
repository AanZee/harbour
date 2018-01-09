# Button
- [See SCSS component](../../scss/controls/button.scss)

## Available states

### Hover, focus and active
Changes the (background) color
```
button:hover
button:focus
button:active
```
### Disabled
Changes the (background) color and add not-allowed cursor
```
button:disabled
```

## Available modifiers
### Colors
```
button--call-to-action
button--primary
button--secondary
button--transparent
```
### Outline version (available in all colors)
```
button--outline
```
### Sizes
```
button--80
button--90
button--200
button--full
```

## Available local variables
### Default button (ui colors)
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
```
### Call to action
```scss
$button-call-to-action-color
$button-call-to-action-background-color
$button-call-to-action-hover-color
$button-call-to-action-hover-background-color
$button-call-to-action-focus-box-shadow
$button-call-to-action-active-color
$button-call-to-action-active-background-color
$button-call-to-action-disabled-color
$button-call-to-action-disabled-background-color
```
### Primary
```scss
$button-primary-color
$button-primary-background-color
$button-primary-hover-color
$button-primary-hover-background-color
$button-primary-focus-box-shadow
$button-primary-active-color
$button-primary-active-background-color
$button-primary-disabled-color
$button-primary-disabled-background-color
```
### Secondary
```scss
$button-secondary-color
$button-secondary-background-color
$button-secondary-hover-color
$button-secondary-hover-background-color
$button-secondary-focus-box-shadow
$button-secondary-active-color
$button-secondary-active-background-color
$button-secondary-disabled-color
$button-secondary-disabled-background-color
```
### Outline version
```scss
$button-outline-border-width
```

## Example HTML
```html
<button class="button" type="button">Action</button>
<a class="button button--primary button--outline" href="/">Link</a>
```

# Input Stepper

- [See SCSS component](../../scss/controls/input-stepper.scss)

## Available states

.input-stepper.is-skeleton
.input-stepper.is-disabled
.input-stepper.is-frozen
.input-stepper.is-loading

## Available modifiers

### Vertical

Places the increase/decrease buttons above and below input instead of next to it

```css
input-stepper--vertical
```

### Primary

Uses primary color for the increase/decrease buttons

```css
input-stepper--primary
```

### Sizes

```css
input-stepper--90
```

## Available local variables

```scss
$input-stepper-input-border
$input-stepper-button-background-color
```

## Example HTML

```html
<div class="input-stepper">
    <input class="input-stepper__input"
        id="element-id"
        type="number"
        pattern="[0-9]*"
        autocomplete="off"
    >
    <button class="input-stepper__control input-stepper__control--decrease">
        -
    </button>
    <button class="input-stepper__control input-stepper__control--increase">
        +
    </button>
</div>
```

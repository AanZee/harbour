---
layout: docs
title: Button
---
The classes belonging to the `button` component can be used to style both the `<button>` and `<a>` element.

{% capture example %}
<button class="button" type="button">Action</button>
<a class="button button--primary button--outline" href="/">Link</a>
{% endcapture %}
{% include example.html content=example %}

## Available states

### Hover, focus and active
Changes the (background) color
{% capture example %}
<button class="button is-hovered" type="button">is-hovered</button>
<button class="button is-focused" type="button">is-focused</button>
<button class="button is-active" type="button">is-active</button>
{% endcapture %}
{% include example.html content=example %}

### Disabled
Changes the (background) color and add not-allowed cursor
{% capture example %}
<button class="button is-disabled" type="button">is-disabled</button>
{% endcapture %}
{% include example.html content=example %}

## Available modifiers
### Colors
{% capture example %}
<button class="button button--call-to-action" type="button">button--call-to-action</button>
<button class="button button--primary" type="button">button--primary</button>
<button class="button button--secondary" type="button">button--secondary</button>
{% endcapture %}
{% include example.html content=example %}

### Outline version (available in all colors)
{% capture example %}
<button class="button button--outline" type="button">button--outline</button>
{% endcapture %}
{% include example.html content=example %}
### Sizes
{% capture example %}
<button class="button button--80" type="button">button--80</button>
<button class="button button--90" type="button">button--90</button>
<button class="button button--200" type="button">button--200</button>
<button class="button button--full" type="button">button--full</button>
{% endcapture %}
{% include example.html content=example %}

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
```
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
```
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
```
$button-secondary-color: red;
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
```
$button-outline-border-width
```

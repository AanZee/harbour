---
layout: docs
title: Form
---

## Available modifiers
Align labels to the right
```
form--right-aligned-labels
```
Align all sections, fieldsets, fields and action horizontally
```
form--horizontal
```
Display the actions vertically
```
form__actions--vertical
```

## Structure
```
form (modifier)
├── form__section
│	├── form__section-header (optional)
│	│	├── form__section-title (optional)
│	│	├── form__section-feedback-text (optional)
│	├── form__fieldset
│	│	├── form__fieldset-header (optional)
│	│	│	├── form__fieldset-title (optional)
│	│	│	├── form__fieldset-supporting-text (optional)
│	│	│	├── form__fieldset-feedback-text (optional)
│	│	├── form__field
│	│	│	├── form__field-header
│	│	│	│	├── form__field-label
│	│	│	│	│	├── form__field-supporting-text (optional)
│	│	│	├── form__field-main
│	│	│	│	├── form__input-helper-text (optional)
│	│	│	│	├── form__input-feedback-text (optional)
├── form__footer (modifier)
│	├── form__actions (modifier)
│	│	├── form__action (modifier)
```

## Example HTML

### Personal info form
A form with labels on the left side of the form and right aligned labels.

{% include_relative examples/personal-info-form.html %}

{% include example.html
	content=personal-info-form
%}

### Login form
A simple form with labels above the input fields.

{% include_relative examples/login-form.html %}

{% include example.html
	content=login-form
%}
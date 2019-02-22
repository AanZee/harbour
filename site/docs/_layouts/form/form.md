---
layout: docs
title: Form
---

## Available modifiers
Align labels to the right on the left side of the input fields
```
form--right-aligned-labels
```
Align labels to the left on the left side of the input fields
```
form--left-aligned-labels
```
Align labels above the input fields, can be used to reset other form modifiers when nesting forms (for example in a popover)
```
form--top-aligned-labels
```
Align actions inline
```
form--inlined-actions
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
│	│	│	│	├── form__field-section
│	│	│	│	│	├── other BEM component (e.g. text-input or content)
│	│	│	│	│	├── form__input-helper-text (optional)
│	│	│	│	│	├── form__input-feedback-text (optional)
├── form__footer (modifier)
│	├── form__actions (modifier)
│	│	├── form__action (modifier)
```

## Example HTML

### Login form
A simple form with labels above the input fields (default).

{% include_relative examples/login-form.html %}
{% include example.html
	content=login-form
	layoutInnerModifiers="layout__inner--condensed"
%}


### Personal info form
A form with labels on the left side of the form and right aligned labels.

{% include_relative examples/personal-info-form.html %}
{% include example.html
	content=personal-info-form
%}

### Advanced form
A default form with multiple sections, helper text, a extra field sections including content and feedback text.

{% include_relative examples/advanced-form.html %}
{% include example.html
	content=advanced-form
	layoutInnerModifiers="layout__inner--condensed"
%}

### Left aligned labels and inlined actions
A form with labels aligned on the left side of the form. Can be used for example in edit mode to enable scannability of the labels.

{% include_relative examples/left-aligned-labels-form.html %}
{% include example.html
	content=left-aligned-labels-form
%}
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
│	│	│	│	│	├── form__input-helper-text (optional)
│	│	│	│	│	├── form__input-feedback-text (optional)
├── form__footer (modifier)
│	├── form__actions (modifier)
│	│	├── form__action (modifier)
```

## Example HTML

### Modifier examples

#### Sections form
{% include_relative examples/sections-form.html %}
{% include example.html
	content=sections-form
	layoutInnerClasses="layout__inner--condensed"
%}

#### Colored sections form
{% include_relative examples/colored-sections-form.html %}
{% include example.html
	content=colored-sections-form
	layoutInnerClasses="layout__inner--condensed"
%}

#### Left aligned labels form
{% include_relative examples/left-aligned-labels-form.html %}
{% include example.html
	content=left-aligned-labels-form
%}

### Login form
A simple form with labels above the input fields (default).

{% include_relative examples/login-form.html %}
{% include example.html
	content=login-form
	layoutInnerClasses="layout__inner--condensed"
%}

### Personal info form
A form with labels on the left side of the form and right aligned labels.

{% include_relative examples/personal-info-form.html %}
{% include example.html
	content=personal-info-form
%}
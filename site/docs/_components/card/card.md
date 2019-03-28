---
layout: default
title: Card
---

## Available modifiers

Adjust orientation
```
card--horizontal
```

Adjust action type
```
card--expandable
```

Adjust size
```
card--90
card--200
```

Adjust width
```
card--stretched
```

Adjust styling
```
card--boxed // Matching background color and border
card--background-neutral // Always matches $color-background-neutral
card--flat
```

Adjust orientation of media
```
card--media-portret
card--media-landscape
card--media-square
card--media-wide
card--media-ultra-wide
```

Adjust shape of icon
```
card--icon-avatar
```

Adjust position of metadata
```
card--right-aligned-metadata
```

## HTML structure
```
card (modifier)
├── card__expand-status (optional)
├── card__actions
│	├── card__primary-action
│	│	├── card__media (optional)
│	│	├── card__header
│	│	│	├── card__icon (optional)
│	│	│	├── card__heading-group
│	│	│	│	├── card__title
│	│	│	│	│	├── card__metadata (optional)
│	│	│	│	├── card__subtitle (optional)
│	│	│	│	├── card__excerpt (optional)
│	│	│	├── card__control (optional)
│	│	│	│	├── other BEM component (e.g. button, input-stepper)
│	├── card__supplemental-actions (optional)
│	│	├── card__supplemental-action (optional)
│	│	│	├── other BEM component (e.g. button, popover)
├── card__details (optional)
│	├── other BEM components
```

## Available variations

### Standard card
{% include_relative examples/standard-card.html %}
{% include example.html
	content=standard-card
%}

### Horizontal card with media and icon
{% include_relative examples/horizontal-card.html %}
{% include example.html
	content=horizontal-card
%}

### Horizontal expandable card
{% include_relative examples/horizontal-expandable-card.html %}
{% include example.html
	content=horizontal-expandable-card
%}

### Card with excerpt and metadata
{% include_relative examples/excerpt-metadata-card.html %}
{% include example.html
	content=excerpt-metadata-card
%}

### Card with supplemental actions and square image
{% include_relative examples/square-image-card.html %}
{% include example.html
	content=square-image-card
%}

### Horizontal card with supplemental actions
{% include_relative examples/supplemental-actions-card.html %}
{% include example.html
	content=supplemental-actions-card
%}

### Card with control item and details
{% include_relative examples/control-card.html %}
{% include example.html
	content=control-card
%}
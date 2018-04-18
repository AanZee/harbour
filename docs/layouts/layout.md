# Layout
- [See SCSS component](../../scss/layouts/layout.scss)

## Available modifiers
Adjust section (top)margin
```
layout__section--margin-0
layout__section--margin-70
layout__section--margin-80
layout__section--margin-90
layout__section--margin-200
layout__section--margin-300
```

Adjust section appearance
```
layout__section--bordered
layout__section--bordered-top
layout__section--bordered-bottom
layout__section--rounded
layout__section--colored
layout__section--light
layout__section--dark
layout__section--box-shadowed
```

Adjust section behavior
```
layout__section--wrapping
layout__section--sticky
layout__section--content-right-aligned
layout__section--content-vertical-centered
layout__section--pull-under
```

Adjust section__inner max-width
```
layout__inner--stretched
layout__inner--extended
layout__inner--wide
layout__inner--narrow
layout__inner--condensed
layout__inner--compressed
```

Adjust section__inner padding
```
layout__inner--padding-0
layout__inner--padding-70
layout__inner--padding-80
layout__inner--padding-90
layout__inner--padding-200
layout__inner--padding-300

layout__inner--padding-top-bottom-0
layout__inner--padding-top-bottom-70
layout__inner--padding-top-bottom-80
layout__inner--padding-top-bottom-90
layout__inner--padding-top-bottom-200
layout__inner--padding-top-bottom-300

layout__inner--padding-left-right-0
layout__inner--padding-left-right-70
layout__inner--padding-left-right-80
layout__inner--padding-left-right-90
layout__inner--padding-left-right-200
layout__inner--padding-left-right-300

layout__inner--padding-top-0
layout__inner--padding-right-0
layout__inner--padding-bottom-0
layout__inner--padding-left-0

layout__inner--padding-top-70
layout__inner--padding-right-70
layout__inner--padding-bottom-70
layout__inner--padding-left-70

layout__inner--padding-top-80
layout__inner--padding-right-80
layout__inner--padding-bottom-80
layout__inner--padding-left-80

layout__inner--padding-top-90
layout__inner--padding-right-90
layout__inner--padding-bottom-90
layout__inner--padding-left-90

layout__inner--padding-top-200
layout__inner--padding-right-200
layout__inner--padding-bottom-200
layout__inner--padding-left-200

layout__inner--padding-top-300
layout__inner--padding-right-300
layout__inner--padding-bottom-300
layout__inner--padding-left-300
```

Columns modifiers
```
layout__columns--margin-0
layout__columns--margin-90
layout__columns--nowrap-lap-and-up
```

Add specific width to column
```
layout__column--one-half
layout__column--one-third
layout__column--two-thirds
```

## Structure
```
layout
├── layout__section (modifier)
│	├── layout__section-inner (modifier)
│	│	├── layout__section (optional)
│	│	│	├── layout__columns (modifiers) (optional)
│	│	│	│	├── layout__column (modifier) (parent required)
```

## Example HTML
Basic example without columns
```html
<div class="layout">
	<div class="layout__section">
		<div class="layout__section-inner">
			...
		</div>
	</div>
</div>
```

Example with with two column layout
```html
<div class="layout">
	<div class="layout__section">
		<div class="layout__section-inner">
			<div class="layout__columns">
				<div class="layout__column layout__column--one-half">
					...
				</div>
				<div class="layout__column layout__column--one-half">
					...
				</div>
			</div>
		</div>
	</div>
</div>
```

Example with two sub sections which contain columns
```html
<div class="layout">
	<div class="layout__section">
		<div class="layout__section-inner">
			...
		</div>
	</div>
	<div class="layout__section layout__section--colored">
		<div class="layout__section-inner">
			<div class="layout__section layout__section--margin-80">
				<div class="layout__columns">
					<div class="layout__column layout__column--one-half">
						...
					</div>
					<div class="layout__column layout__column--one-half">
						...
					</div>
				</div>
			</div>
			<div class="layout__section layout__section--margin-80">
				<div class="layout__columns">
					<div class="layout__column layout__column--one-third">
						...
					</div>
					<div class="layout__column layout__column--one-third">
						...
					</div>
					<div class="layout__column layout__column--one-third">
						...
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```
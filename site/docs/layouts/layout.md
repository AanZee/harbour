---
layout: docs
title: Layout
---

## Available modifiers
### Adjust space between sections (modifier 100 doesn't exists since this is the default behavior)
```
layout__section--spaced-0 (60, 70, 80, 90, 200, 300)
```

### Adjust space between children
```
layout__section--spacing-60
layout__section--spacing-70
layout__section--spacing-80
layout__section--spacing-90
layout__section--spacing-100
layout__section--spacing-200
layout__section--spacing-300
```

### Adjust section appearance
```
layout__section--bordered
layout__section--bordered-top
layout__section--bordered-bottom
layout__section--rounded
layout__section--colored
layout__section--light
layout__section--dark
layout__section--elevated
```

### Adjust section behavior
```
layout__section--sticky-top
layout__section--sticky-bottom
```

### Adjust behavior of children
```
layout__section--wrapping
layout__section--right-aligning
layout__section--vertical-centering
```

### Adjust section__inner max-width
```
layout__inner--fitted
layout__inner--stretched
layout__inner--expanded
layout__inner--extended
layout__inner--wide
layout__inner--narrow
layout__inner--condensed
layout__inner--compressed
```

### Adjust section__inner padding

```
layout__inner--padded-0
layout__inner--padded-60
layout__inner--padded-70
layout__inner--padded-80
layout__inner--padded-90
layout__inner--padded-200
layout__inner--padded-300

layout__inner--padded-top-bottom-0
layout__inner--padded-top-bottom-60
layout__inner--padded-top-bottom-70
layout__inner--padded-top-bottom-80
layout__inner--padded-top-bottom-90
layout__inner--padded-top-bottom-200
layout__inner--padded-top-bottom-300

layout__inner--padded-left-right-0
layout__inner--padded-left-right-60
layout__inner--padded-left-right-70
layout__inner--padded-left-right-80
layout__inner--padded-left-right-90
layout__inner--padded-left-right-200
layout__inner--padded-left-right-300

layout__inner--padded-top-0
layout__inner--padded-right-0
layout__inner--padded-bottom-0
layout__inner--padded-left-0

layout__inner--padded-top-60
layout__inner--padded-right-60
layout__inner--padded-bottom-60
layout__inner--padded-left-60

layout__inner--padded-top-70
layout__inner--padded-right-70
layout__inner--padded-bottom-70
layout__inner--padded-left-70

layout__inner--padded-top-80
layout__inner--padded-right-80
layout__inner--padded-bottom-80
layout__inner--padded-left-80

layout__inner--padded-top-90
layout__inner--padded-right-90
layout__inner--padded-bottom-90
layout__inner--padded-left-90

layout__inner--padded-top-200
layout__inner--padded-right-200
layout__inner--padded-bottom-200
layout__inner--padded-left-200

layout__inner--padded-top-300
layout__inner--padded-right-300
layout__inner--padded-bottom-300
layout__inner--padded-left-300
```

### Columns modifiers
```
layout__columns--spacing-0
layout__columns--spacing-90
layout__columns--not-wrapping-lap-and-up
```

### Add specific width to column
```
layout__column--one-half
layout__column--one-third
layout__column--two-thirds
```

## Structure
```
layout
├── layout__section (modifier)
│	├── layout__inner (modifier)
│	│	├── layout__section (optional)
│	│	│	├── layout__columns (modifiers) (optional)
│	│	│	│	├── layout__column (modifier) (parent required)
```

## Example HTML

### Two columns one-third two-thirds
{% capture layout-section-one-third-two-thirds %}
<div class="layout">
	<div class="layout__section">
		<div class="layout__columns">
			<div class="layout__column layout__column--one-third">
				<div class="layout__section layout__section--elevated">
					<div class="layout__inner layout__inner--padded-90">
						<div class="content content--90">
							<h2>Column one third</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit! Dolorum cumque ad quisquam eligendi.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="layout__column layout__column--two-thirds">
				<div class="layout__section layout__section--elevated">
					<div class="layout__inner layout__inner--padded-70">
						<div class="layout__section">
							<div class="content">
								<h2>Column two thirds</h2>
							</div>
						</div>
						<div class="layout__section layout__section--spaced-70">
							<div class="layout__columns layout__columns--spacing-90">
								<div class="layout__column layout__column--one-half">
									<div class="layout__section layout__section--bordered layout__section--rounded">
										<div class="layout__inner layout__inner--padded-70">
											<div class="content content--90">
												<h3>Column one half</h3>
												<p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
											</div>
										</div>
									</div>
								</div>
								<div class="layout__column layout__column--one-half">
									<div class="layout__section layout__section--bordered layout__section--rounded">
										<div class="layout__inner layout__inner--padded-70">
											<div class="content content--90">
												<h3>Column one half</h3>
												<p>Lorem ipsum dolor sit amet consectetur adipisicing elit! Dolorum cumque ad quisquam eligendi.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{% endcapture %}
{% include example.html
content=layout-section-one-third-two-thirds
%}

### Two columns one-half and one-half
{% capture layout-two-columns-one-half %}
<div class="layout">
	<div class="layout__section">
		<div class="layout__columns">
			<div class="layout__column layout__column--one-half">
				<div class="layout__section layout__section--elevated">
					<div class="layout__inner layout__inner--padded-90">
						<div class="content">
							<h2>Column one half</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit! Dolorum cumque ad quisquam eligendi.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="layout__column layout__column--one-half">
				<div class="layout__section layout__section--elevated">
					<div class="layout__inner layout__inner--padded-90">
						<div class="content">
							<h2>Column one half</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit! Dolorum cumque ad quisquam eligendi.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{% endcapture %}
{% include example.html
content=layout-two-columns-one-half
%}
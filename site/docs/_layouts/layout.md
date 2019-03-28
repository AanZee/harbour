---
layout: default
title: Layout
---

## Available modifiers

Available `city block sizes` modifiers are mentioned between parenthesis.

### Adjust space between sections
```
layout__section--spaced-0 (60, 70, 80, 90, 200, 300)
```

### Adjust space between children
```
layout__section--spacing-0 (60, 70, 80, 90, 200, 300)
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
layout__inner--padded-0 (60, 70, 80, 90, 200, 300)
layout__inner--padded-top-bottom-0 (60, 70, 80, 90, 200, 300)
layout__inner--padded-left-right-0 (60, 70, 80, 90, 200, 300)
layout__inner--padded-top-0 (60, 70, 80, 90, 200, 300)
layout__inner--padded-right-0 (60, 70, 80, 90, 200, 300)
layout__inner--padded-bottom-0 (60, 70, 80, 90, 200, 300)
layout__inner--padded-left-0 (60, 70, 80, 90, 200, 300)
```

### Columns modifiers
```
layout__columns--spacing-0
layout__columns--spacing-90
layout__columns--not-wrapping-lap-and-larger
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
<section class="layout">
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
							<section class="content">
								<h2>Column two thirds</h2>
							</section>
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
</section>
{% endcapture %}
{% include example.html
	content=layout-section-one-third-two-thirds
%}

### Three one-third columns
{% capture layout-three-one-thirds %}
<section class="layout">
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
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=layout-three-one-thirds
%}

### Two columns one-half and one-half
{% capture layout-two-columns-one-half %}
<section class="layout">
	<div class="layout__section">
		<div class="layout__columns">
			<div class="layout__column layout__column--one-half">
				<div class="layout__section layout__section--elevated">
					<div class="layout__inner layout__inner--padded-90">
						<section class="content">
							<h2>Column one half</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit! Dolorum cumque ad quisquam eligendi.</p>
						</section>
					</div>
				</div>
			</div>
			<div class="layout__column layout__column--one-half">
				<div class="layout__section layout__section--elevated">
					<div class="layout__inner layout__inner--padded-90">
						<section class="content">
							<h2>Column one half</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit! Dolorum cumque ad quisquam eligendi.</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=layout-two-columns-one-half
%}
---
layout: docs
title: Card
---

## HTML structure
```
card (card--horizontal card--stretched card--boxed card--elevated card--neutral card--right-aligned-metadata card--expandable card--media-portret card--media-landscape card--media-square card--media-sixteen-nine card--media-widescreen card--icon-avatar card--200 card--flat)
├── card__expand-status (optional)
├── card__actions
	├── card__primary-action
		├── card__media (optional)
		├── card__header
			├── card__icon (optional)
			├── card__heading-group
				├── card__title
				├── card__subtitle (optional)
				├── card__excerpt (optional)
			├── card__control (optional)
				├── other BEM component (e.g. button, input-stepper)
	├── card__supplemental-actions (optional)
		├── card__supplemental-action (optional)
			├── other BEM component (e.g. button, popover)
├── card__details (optional)
│	├── other BEM components
```

## Available variations

### Standard card
{% capture card %}
	<section class="card card--elevated">
		<div class="card__actions">
			<a class="card__primary-action"
				href=""
			>
				<div class="card__media">
					<img src="https://via.placeholder.com/320x180">
				</div>
				<header class="card__header">
					<div class="card__icon">
						<img src="https://via.placeholder.com/32x32">
					</div>
					<div class="card__heading-group">
						<h1 class="card__title">
							Card title
						</h1>
						<h2 class="card__subtitle">
							Card subtitle
						</h2>
					</div>
				</header>
			</a>
		</div>
	</section>
{% endcapture %}
{% include example.html
	content=card
%}

### Horizontal card with Media and Icon
{% capture card-horizontal %}
	<section class="card card--elevated card--horizontal">
		<div class="card__actions">
			<a class="card__primary-action"
				href=""
			>
				<div class="card__media">
					<img src="https://via.placeholder.com/320x180">
				</div>
				<header class="card__header">
					<div class="card__icon">
						<img src="https://via.placeholder.com/32x32">
					</div>
					<div class="card__heading-group">
						<h1 class="card__title">
							Card title
						</h1>
						<h2 class="card__subtitle">
							Card subtitle
						</h2>
					</div>
				</header>
			</a>
		</div>
	</section>
{% endcapture %}
{% include example.html
	content=card-horizontal
%}

### Horizontal Expandable Card
{% capture card-expandable-horizontal %}
	<section class="card card--elevated card--horizontal card--expandable">
		<input class="card__expand-status"
			id="card-horizontal-expandable-expand-status"
			type="checkbox"
		>
		<div class="card__actions">
			<label class="card__primary-action"
				for="card-horizontal-expandable-expand-status"
			>
				<header class="card__header">
					<div class="card__heading-group">
						<h1 class="card__title">
							Card title
						</h1>
						<h2 class="card__subtitle">
							Card subtitle
						</h2>
					</div>
				</header>
			</label>
		</div>
		<div class="card__details">
			<section class="content content--90">
				<p>
					Hello world
				</p>
			</section>
		</div>
	</section>
{% endcapture %}
{% include example.html
	content=card-expandable-horizontal
%}

### Card with Excerpt and Metadata
{% capture card %}
	<section class="card card--elevated">
		<div class="card__actions">
			<a class="card__primary-action"
				href=""
			>
				<div class="card__media">
					<img src="https://via.placeholder.com/320x180">
				</div>
				<header class="card__header">
					<div class="card__icon">
						<img src="https://via.placeholder.com/32x32">
					</div>
					<div class="card__heading-group">
						<h1 class="card__title">
							Card title
							<span class="card__metadata">
								<span class="tag tag--80">
									Tag
								</span>
							</span>
						</h1>
						<h2 class="card__subtitle">
							Card subtitle
						</h2>
						<p class="card__excerpt">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et luctus odio. Vestibulum non lobortis lorem. Aliquam erat volutpat. Aenean vel augue interdum, varius lectus a, tristique lacus. Donec sed augue a augue feugiat cursus. Maecenas tincidunt euismod risus in tincidunt...
						</p>
					</div>
				</header>
			</a>
		</div>
	</section>
{% endcapture %}
{% include example.html
	content=card
%}

### Card with Supplemental Actions
{% capture card %}
	<section class="card card--elevated">
		<div class="card__actions">
			<a class="card__primary-action"
				href=""
			>
				<div class="card__media">
					<img src="https://via.placeholder.com/320x180">
				</div>
				<header class="card__header">
					<div class="card__icon">
						<img src="https://via.placeholder.com/32x32">
					</div>
					<div class="card__heading-group">
						<h1 class="card__title">
							Card title
						</h1>
						<h2 class="card__subtitle">
							Card subtitle
						</h2>
					</div>
				</header>
			</a>
			<div class="card__supplemental-actions">
				<div class="card__supplemental-action">
					<button class="button button--80">
						Action 2
					</button>
				</div>
				<div class="card__supplemental-action">
					<button class="button button--80">
						Action 3
					</button>
				</div>
			</div>
		</div>
	</section>
{% endcapture %}
{% include example.html
	content=card
%}

### Horizontal Card with Supplemental Actions
{% capture card %}
	<section class="card card--elevated card--horizontal card--90">
		<div class="card__actions">
			<a class="card__primary-action"
				href=""
			>
				<header class="card__header">
					<div class="card__heading-group">
						<h1 class="card__title">
							Card title
						</h1>
						<h2 class="card__subtitle">
							Card subtitle
						</h2>
					</div>
				</header>
			</a>
			<div class="card__supplemental-actions">
				<div class="card__supplemental-action">
					<button class="button button--80">
						Action 2
					</button>
				</div>
				<div class="card__supplemental-action">
					<button class="button button--80">
						Action 3
					</button>
				</div>
			</div>
		</div>
	</section>
{% endcapture %}
{% include example.html
	content=card
%}

### Card with Control Item and Details
{% capture card-with-control %}
	<section class="card card--elevated card--90">
		<div class="card__actions">
			<div class="card__primary-action"
				href=""
			>
				<header class="card__header">
					<div class="card__icon">
						<img src="https://via.placeholder.com/64x64">
					</div>
					<div class="card__heading-group">
						<h1 class="card__title">
							Card title
						</h1>
						<h2 class="card__subtitle">
							Card subtitle
						</h2>
					</div>
					<div class="card__control">
						<a class="button button--70 button--primary">
							Add
						</a>
					</div>
				</header>
			</div>
		</div>
		<div class="card__details">
			<section class="content content--90">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et luctus odio. Vestibulum non lobortis lorem... <a href="">Read&nbsp;more</a>
				</p>
			</section>
		</div>
	</section>
{% endcapture %}
{% include example.html
	content=card-with-control
%}
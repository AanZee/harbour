---
layout: docs
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
card--media-sixteen-nine
card--media-widescreen
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
{% capture card %}
	<section class="card">
		<div class="card__actions">
			<a class="card__primary-action"
				href=""
			>
				<div class="card__media">
					<img class="image"
						sizes="480px"
						srcset="/images/placeholder-sixteen-nine-240w.jpg 240w, /images/placeholder-sixteen-nine-320w.jpg 320w, /images/placeholder-sixteen-nine-480w.jpg 480w, /images/placeholder-sixteen-nine-640w.jpg 640w, /images/placeholder-sixteen-nine-720w.jpg 720w, /images/placeholder-sixteen-nine-800w.jpg 800w, /images/placeholder-sixteen-nine-1024w.jpg 1024w, /images/placeholder-sixteen-nine-1280w.jpg 1280w, /images/placeholder-sixteen-nine-1600w.jpg 1600w, /images/placeholder-sixteen-nine-1920w.jpg 1920w, /images/placeholder-sixteen-nine-2048w.jpg 2048w"
					>
				</div>
				<header class="card__header">
					<div class="card__icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M9 32L9 30 14 30 14 32 9 32ZM5 32L0.8 32C0.3 32 0 31.7 0 31.3L0 27 2 27 2 29.6C2 29.8 2.2 30 2.4 30L5 30 5 32ZM9 0L14 0 14 2 9 2 9 0ZM5 0L5 2 2.4 2C2.2 2 2 2.2 2 2.4L2 5 0 5 0 0.8C0 0.3 0.3 0 0.8 0L5 0ZM18 32L18 30 23 30 23 32 18 32ZM18 0L23 0 23 2 18 2 18 0ZM27 32L27 30 29.6 30C29.8 30 30 29.8 30 29.6L30 27 32 27 32 31.3C32 31.7 31.7 32 31.3 32L27 32ZM27 0L31.3 0C31.7 0 32 0.3 32 0.8L32 5 30 5 30 2.4C30 2.2 29.8 2 29.6 2L27 2 27 0ZM32 23L30 23 30 18 32 18 32 23ZM0 23L0 18 2 18 2 23 0 23ZM32 14L30 14 30 9 32 9 32 14ZM0 14L0 9 2 9 2 14 0 14Z"/></svg>
					</div>
					<div class="card__heading-group">
						<h1 class="card__title">
							Card Title
						</h1>
						<h2 class="card__subtitle">
							Card Subtitle
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

### Horizontal card with media and icon
{% capture card-horizontal %}
	<section class="card card--horizontal">
		<div class="card__actions">
			<a class="card__primary-action"
				href=""
			>
				<div class="card__media">
					<img class="image"
						sizes="480px"
						srcset="/images/placeholder-sixteen-nine-240w.jpg 240w, /images/placeholder-sixteen-nine-320w.jpg 320w, /images/placeholder-sixteen-nine-480w.jpg 480w, /images/placeholder-sixteen-nine-640w.jpg 640w, /images/placeholder-sixteen-nine-720w.jpg 720w, /images/placeholder-sixteen-nine-800w.jpg 800w, /images/placeholder-sixteen-nine-1024w.jpg 1024w, /images/placeholder-sixteen-nine-1280w.jpg 1280w, /images/placeholder-sixteen-nine-1600w.jpg 1600w, /images/placeholder-sixteen-nine-1920w.jpg 1920w, /images/placeholder-sixteen-nine-2048w.jpg 2048w"
					>
				</div>
				<header class="card__header">
					<div class="card__icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M9 32L9 30 14 30 14 32 9 32ZM5 32L0.8 32C0.3 32 0 31.7 0 31.3L0 27 2 27 2 29.6C2 29.8 2.2 30 2.4 30L5 30 5 32ZM9 0L14 0 14 2 9 2 9 0ZM5 0L5 2 2.4 2C2.2 2 2 2.2 2 2.4L2 5 0 5 0 0.8C0 0.3 0.3 0 0.8 0L5 0ZM18 32L18 30 23 30 23 32 18 32ZM18 0L23 0 23 2 18 2 18 0ZM27 32L27 30 29.6 30C29.8 30 30 29.8 30 29.6L30 27 32 27 32 31.3C32 31.7 31.7 32 31.3 32L27 32ZM27 0L31.3 0C31.7 0 32 0.3 32 0.8L32 5 30 5 30 2.4C30 2.2 29.8 2 29.6 2L27 2 27 0ZM32 23L30 23 30 18 32 18 32 23ZM0 23L0 18 2 18 2 23 0 23ZM32 14L30 14 30 9 32 9 32 14ZM0 14L0 9 2 9 2 14 0 14Z"/></svg>
					</div>
					<div class="card__heading-group">
						<h1 class="card__title">
							Card Title
						</h1>
						<h2 class="card__subtitle">
							Card Subtitle
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

### Horizontal expandable card
{% capture card-expandable-horizontal %}
	<section class="card card--horizontal card--expandable">
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
							Card Title
						</h1>
						<h2 class="card__subtitle">
							Card Subtitle
						</h2>
					</div>
				</header>
			</label>
		</div>
		<div class="card__details">
			<section class="content content--90">
				<p>
					Peek a boo
				</p>
			</section>
		</div>
	</section>
{% endcapture %}
{% include example.html
	content=card-expandable-horizontal
%}

### Card with excerpt and metadata
{% capture card %}
	<section class="card">
		<div class="card__actions">
			<a class="card__primary-action"
				href=""
			>
				<div class="card__media">
					<img class="image"
						sizes="480px"
						srcset="/images/placeholder-sixteen-nine-240w.jpg 240w, /images/placeholder-sixteen-nine-320w.jpg 320w, /images/placeholder-sixteen-nine-480w.jpg 480w, /images/placeholder-sixteen-nine-640w.jpg 640w, /images/placeholder-sixteen-nine-720w.jpg 720w, /images/placeholder-sixteen-nine-800w.jpg 800w, /images/placeholder-sixteen-nine-1024w.jpg 1024w, /images/placeholder-sixteen-nine-1280w.jpg 1280w, /images/placeholder-sixteen-nine-1600w.jpg 1600w, /images/placeholder-sixteen-nine-1920w.jpg 1920w, /images/placeholder-sixteen-nine-2048w.jpg 2048w"
					>
				</div>
				<header class="card__header">
					<div class="card__icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M9 32L9 30 14 30 14 32 9 32ZM5 32L0.8 32C0.3 32 0 31.7 0 31.3L0 27 2 27 2 29.6C2 29.8 2.2 30 2.4 30L5 30 5 32ZM9 0L14 0 14 2 9 2 9 0ZM5 0L5 2 2.4 2C2.2 2 2 2.2 2 2.4L2 5 0 5 0 0.8C0 0.3 0.3 0 0.8 0L5 0ZM18 32L18 30 23 30 23 32 18 32ZM18 0L23 0 23 2 18 2 18 0ZM27 32L27 30 29.6 30C29.8 30 30 29.8 30 29.6L30 27 32 27 32 31.3C32 31.7 31.7 32 31.3 32L27 32ZM27 0L31.3 0C31.7 0 32 0.3 32 0.8L32 5 30 5 30 2.4C30 2.2 29.8 2 29.6 2L27 2 27 0ZM32 23L30 23 30 18 32 18 32 23ZM0 23L0 18 2 18 2 23 0 23ZM32 14L30 14 30 9 32 9 32 14ZM0 14L0 9 2 9 2 14 0 14Z"/></svg>
					</div>
					<div class="card__heading-group">
						<h1 class="card__title">
							Card Title
							<span class="card__metadata">
								<span class="tag tag--80">
									Tag
								</span>
							</span>
						</h1>
						<h2 class="card__subtitle">
							Card Subtitle
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

### Card with supplemental actions and square image
{% capture card %}
	<section class="card card--media-square">
		<div class="card__actions">
			<div class="card__primary-action">
				<div class="card__media">
					<img class="image"
						sizes="480px"
						srcset="/images/placeholder-square-240w.jpg 240w, /images/placeholder-square-320w.jpg 320w, /images/placeholder-square-480w.jpg 480w, /images/placeholder-square-640w.jpg 640w, /images/placeholder-square-720w.jpg 720w, /images/placeholder-square-800w.jpg 800w, /images/placeholder-square-1024w.jpg 1024w, /images/placeholder-square-1280w.jpg 1280w, /images/placeholder-square-1600w.jpg 1600w, /images/placeholder-square-1920w.jpg 1920w, /images/placeholder-square-2048w.jpg 2048w"
					>
				</div>
				<header class="card__header">
					<div class="card__heading-group">
						<h1 class="card__title">
							Card Title
						</h1>
						<p class="card__excerpt">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et luctus odio. Vestibulum non lobortis lorem. Aliquam erat volutpat. Aenean vel augue interdum, varius lectus a, tristique lacus. Donec sed augue a augue feugiat cursus. Maecenas tincidunt euismod risus in tincidunt...
						</p>
					</div>
				</header>
			</div>
			<div class="card__supplemental-actions">
				<div class="card__supplemental-action">
					<button class="button button--80 button--primary">
						Add to cart
					</button>
				</div>
				<div class="card__supplemental-action">
					<button class="button button--80 button--secondary">
						Show details
					</button>
				</div>
			</div>
		</div>
	</section>
{% endcapture %}
{% include example.html
	content=card
%}

### Horizontal card with supplemental actions
{% capture card %}
	<section class="card card--horizontal card--90">
		<div class="card__actions">
			<a class="card__primary-action"
				href=""
			>
				<header class="card__header">
					<div class="card__heading-group">
						<h1 class="card__title">
							Card Title
						</h1>
						<h2 class="card__subtitle">
							Card Subtitle
						</h2>
					</div>
				</header>
			</a>
			<div class="card__supplemental-actions">
				<div class="card__supplemental-action">
					<button class="button button--70">
						Action 2
					</button>
				</div>
				<div class="card__supplemental-action">
					<button class="button button--70">
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

### Card with control item and details
{% capture card-with-control %}
	<section class="card card--90">
		<div class="card__actions">
			<div class="card__primary-action"
				href=""
			>
				<header class="card__header">
					<div class="card__icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M9 32L9 30 14 30 14 32 9 32ZM5 32L0.8 32C0.3 32 0 31.7 0 31.3L0 27 2 27 2 29.6C2 29.8 2.2 30 2.4 30L5 30 5 32ZM9 0L14 0 14 2 9 2 9 0ZM5 0L5 2 2.4 2C2.2 2 2 2.2 2 2.4L2 5 0 5 0 0.8C0 0.3 0.3 0 0.8 0L5 0ZM18 32L18 30 23 30 23 32 18 32ZM18 0L23 0 23 2 18 2 18 0ZM27 32L27 30 29.6 30C29.8 30 30 29.8 30 29.6L30 27 32 27 32 31.3C32 31.7 31.7 32 31.3 32L27 32ZM27 0L31.3 0C31.7 0 32 0.3 32 0.8L32 5 30 5 30 2.4C30 2.2 29.8 2 29.6 2L27 2 27 0ZM32 23L30 23 30 18 32 18 32 23ZM0 23L0 18 2 18 2 23 0 23ZM32 14L30 14 30 9 32 9 32 14ZM0 14L0 9 2 9 2 14 0 14Z"/></svg>
					</div>
					<div class="card__heading-group">
						<h1 class="card__title">
							Card Title
						</h1>
						<h2 class="card__subtitle">
							Card Subtitle
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
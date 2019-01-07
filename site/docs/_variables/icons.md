---
layout: docs
title: Icons
---

[figure_01]: ../../images/figure_01.png "figure_01 Lineweight and shape-characteristics"
[figure_02]: ../../images/figure_02.png "figure_02 Border-radius"

## Harbour UI Icons

**A collection of neutral, basic UI-icons - designed for Harbour-components**

_**With the development of Harbour as a starting point in the development of client applications the need for  well-designed, neutral, basic UI-icons that could be used in the Harbour-components became clear. After defining a list of required icons we started the design of these icons with undermentioned principles.**_



### Design principles and guidelines

#### Style

All Harbour UI-icons are designed to pair with system fonts as SF Pro and Roboto, the default font selection for the Harbour-components. Limiting the style elements is needed to make sure that the appearance of Harbour-components are clearly that of a starting point, which needs customisation.

#### Grid

All Harbour Icons are designed and optimised on a 32x32 pixel grid. All icons expand to the edges of the grid as much as possible (at least one of the x or y-axis). This gridsize forces the design to be simple and straightforward without limiting characteristics. In addition to that 32x32 pixels is a format that goes well with IOS and Android icon development standards.

#### Icon-weights

Harbour Icons are available in 5 weights: bold, regular, light, thin and hair. Starting point for these weights are the following lineweights: 8px for bold, 6px for regular, 4px for light, 2px for thin and 1px for hair on a 32x32 pixelgrid. All dimensions are recalculated to maintain specific lineweights for each iconweight. (So: No shortcuts when rotating or transforming shapes.)

![alt text][figure_01]

#### Border-radius

To make the icons pair well with Harbour’s fonts each fontweight has it’s own border radii. In the table below you can find which radius you need when creating new icons. There’s a setting for inner-corners, outer-corners and single points.

| Icon-weights | inner-corner | outer-corner | single-point |
|-------|--------|---------|---------|
| Bold - 8px | 1 | 2 | 1 |
| Regular - 6px | 0.75 | 1.5 | 0.75 |
| Light - 4px | 0.5 | 1 | 0.5 |
| Thin - 2px | 0.375 | 0.75 | 0.375 |
| Hair - 1px | 0.25 | 0.5 | 0.25 |


![alt text][figure_02]

#### Solid shapes in icons

All icons that are solid shapes in stead of a line or combination of lines (for example the caret or the circle), there are no weight variants. These icons can be found in the regular section of this document only. 

#### Characteristics

Icon design in general focusses on capturing the essence of a shape into a simple image. This goes for Harbour UI-icons as well. As a addition to this principle there are a few extra things to keep in mind when designing new icons:

- Harbour UI-icons are icons used in Harbour-components. (If there’s no need for an icon in a specific 	component it doesn’t have to be a part of Harbour UI-icons.)
- Avoid overdesigning icons by keeping exotic shapes and quirky visualisations away from your design.
- K.I.S.S. (keep it simple, stupid) and when things get overcomplicated: start again and K.I.S.S. 

#### Optimising and exporting icons

Make sure to optimise your .svg file with SVGO Optimizer plug-in with the custom settings as shared in the Harbour confluence

{% capture icon-collection %}
<section class="layout">
	<div class="layout__section">
		<div class="heading-group">
			<h1 class="heading-group__title">Available icon variables</h1>
		</div>
	</div>
	<div class="layout__section layout__section--colored layout__section--spaced-80">
		<div class="layout__inner layout__inner--padded-80">
			<div class="collection collection--grid-one-third">
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-down-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-down-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-down-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-down-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-down-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-down-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-down-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-down-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-down-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-down-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-down-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-down-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-down.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-down
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-down
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-left-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-left-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-left-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-left-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-left-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-left-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-left-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-left-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-left-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-left-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-left-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-left-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-left.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-left
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-left
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-right-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-right-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-right-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-right-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-right-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-right-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-right-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-right-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-right-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-right-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-right-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-right-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-right.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-right
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-right
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-up-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-up-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-up-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-up-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-up-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-up-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
								<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-up-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-up-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-up-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-up-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-up-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-up-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/arrow-up.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-arrow-up
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon arrow-up
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/check-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-check-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon check-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/check-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-check-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon check-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/check-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-check-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon check-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/check-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-check-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon check-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/check.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-check
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon check
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-down-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-down-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-down-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-down-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-down-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-down-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-down-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-down-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-down-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-down-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-down-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-down-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-down.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-down
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-down
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-left-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-left-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-left-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-left-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-left-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-left-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-left-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-left-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-left-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
								<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-left-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-left-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-left-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-left.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-left
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-left
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-right-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-right-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-right-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-right-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-right-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-right-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-right-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-right-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-right-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-right-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-right-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-right-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-right.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-right
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-right
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-up-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-up-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-up-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-up-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-up-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-up-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-up-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-up-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-up-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-up-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-up-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-up-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/chevron-up.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-chevron-up
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon chevron-up
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/cross-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-cross-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon cross-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/cross-circle-solid.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-cross-circle-solid
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon cross-circle-solid
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/cross-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-cross-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon cross-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/cross-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-cross-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon cross-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/cross-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-cross-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon cross-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
								<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/cross.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-cross
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon cross
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/exclamation-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-exclamation-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon exclamation-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/exclamation-circle-solid.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-exclamation-circle-solid
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon exclamation-circle-solid
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/exclamation-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-exclamation-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon exclamation-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/exclamation-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-exclamation-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon exclamation-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/exclamation-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-exclamation-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon exclamation-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/exclamation-triangle-solid.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-exclamation-triangle-solid
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon exclamation-triangle-solid
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/exclamation.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-exclamation
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon exclamation
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/information-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-information-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon information-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/information-circle-solid.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-information-circle-solid
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon information-circle-solid
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/information-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-information-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon information-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/information-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-information-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon information-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/information-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-information-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon information-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/information.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-information
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon information
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/minus-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-minus-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon minus-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/minus-circle-solid.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-minus-circle-solid
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon minus-circle-solid
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/minus-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-minus-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon minus-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/minus-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-minus-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon minus-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/minus-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-minus-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon minus-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/minus.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-minus
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon minus
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/placeholder-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-placeholder-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon placeholder-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/placeholder-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-placeholder-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon placeholder-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/placeholder-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-placeholder-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon placeholder-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/placeholder-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-placeholder-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon placeholder-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/placeholder.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-placeholder
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon placeholder
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/plus-bold.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-plus-bold
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon plus-bold
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/plus-circle-solid.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-plus-circle-solid
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon plus-circle-solid
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/plus-hair.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-plus-hair
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon plus-hair
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/plus-light.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-plus-light
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon plus-light
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/plus-thin.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-plus-thin
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon plus-thin
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/plus.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-plus
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon plus
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
				<div class="collection__item">
					<section class="card card--90">
						<div class="card__actions">
							<div class="card__primary-action">
								<header class="card__header">
									<div class="card__icon">
										<img src="{{ '/icons/spinner.svg' | relative_url }}">
									</div>
									<div class="card__heading-group">
										<h1 class="card__title">
											$icon-spinner
										</h1>
										<h2 class="card__excerpt">
											De uitleg over icoon spinner
										</h2>
									</div>
								</header>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</section>
{% endcapture %}

{% include documentation-html.html
	content=icon-collection
%}
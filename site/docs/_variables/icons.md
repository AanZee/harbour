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


## Available icon variables

{% capture page %}
<div class="collection collection--grid-one-third">
	<div class="collection__item">
		<section class="card card--90">
			<div class="card__actions">
				<div class="card__primary-action">
					<header class="card__header">
						<div class="card__icon card__icon--arrow-down-bold">
						</div>
						<div class="card__heading-group">
							<h1 class="card__title">
								$icon-arrow-down-bold
							</h1>
							<h2 class="card__excerpt">
								Used to indicate direction (up) of a follow up action in UI elements.
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
						<div class="card__icon card__icon--arrow-down-bold">
						</div>
						<div class="card__heading-group">
							<h1 class="card__title">
								$icon-arrow-down-bold
							</h1>
							<h2 class="card__excerpt">
								Used to indicate direction (up) of a follow up action in UI elements.
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
						<div class="card__icon card__icon--arrow-down-bold">
						</div>
						<div class="card__heading-group">
							<h1 class="card__title">
								$icon-arrow-down-bold
							</h1>
							<h2 class="card__excerpt">
								Used to indicate direction (up) of a follow up action in UI elements.
							</h2>
						</div>
					</header>
				</div>
			</div>
		</section>
	</div>
</div>
{% endcapture %}

{% include example.html
	content=page
	hide_markup=true
%}
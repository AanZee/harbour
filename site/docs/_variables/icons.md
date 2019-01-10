---
layout: docs
title: Icons
---

[figure_01]: {{ site.baseurl }}../../images/figure_01.png "figure_01 Lineweight and shape-characteristics"
[figure_02]: {{ site.baseurl }}../../images/figure_02.png "figure_02 Border-radius"

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

Make sure to optimise your .svg file with SVGO Optimizer plug-in with the custom settings as shared in the Harbour confluence.

{% capture icon-collection %}
<section class="layout">
	<div class="layout__section">
		<header class="heading-group">
			<h1 class="heading-group__headline">
				Icon overview and available SCSS variables
			</h1>
			<p class="headings-group__supporting-text">
				For the icons with different weights there is a shorthand available which is the default. This default variable is used in most of our components and controls. Our own icon set uses the regular weight as default.
			</p>
		</header>
	</div>
	{% comment %}
		<!-- Loop over all icons in the _data/icons/docs.json file. icon[0] stand for the key (e.g. 'arrow-down') and icon[1] contains the value; the description and the weights array.  -->
	{% endcomment %}
	{% for icon in site.data.icons.docs %}
		<div class="layout__section">
			<div class="layout__section">
				<header class="heading-group">
					<h1 class="heading-group__title">
						{{ icon[0] | capitalize }}
					</h1>
					{% if icon[1].weights.size > 0 %}
						<h2 class="heading-group__underline">
							Shorthand: <span class="heading-group__emphasis">$icon-{{ icon[0] }}</span>
						</h2>
					{% endif %}
					<p class="heading-group__supporting-text">
						{{ icon[1].description }}
					</p>
				</header>
			</div>
			<div class="layout__section layout__section--spaced-60 layout__section--colored">
				<div class="layout__inner layout__inner--padded-80">
					<div class="collection collection--grid-one-whole-till-one-third">
						{% if icon[1].weights.size > 0 %}
							{% for weight in icon[1].weights %}
								<div class="collection__item">
									<div class="card card--90">
										<div class="card__actions">
											<div class="card__primary-action">
												<header class="card__header">
													<div class="card__icon">
														{% comment %}
															<!-- Generate icon key to get the values from the scss-variables.json. Then select the right icon and strip single quotes and SCSS !default flag to get the original SVG. -->
														{% endcomment %}
														{% assign icon-key = 'icon-' | append: icon[0] | append: '-' | append: weight %}
														{{ site.data.icons.scss-variables[icon-key] | replace: "'", '' | replace: ' !default', '' }}
													</div>
													<div class="card__heading-group">
														<h1 class="card__title">
															$icon-{{ icon[0] }}-{{ weight }}
														</h1>
													</div>
												</header>
											</div>
										</div>
									</div>
								</div>
							{% endfor %}
						{% else  %}
							<div class="collection__item">
								<div class="card card--90">
									<div class="card__actions">
										<div class="card__primary-action">
											<header class="card__header">
												<div class="card__icon">
													{% comment %}
														<!-- Generate icon key to get the values from the scss-variables.json. Then select the right icon and strip single quotes and SCSS !default flag to get the original SVG. -->
													{% endcomment %}
													{% assign icon-key = 'icon-' | append: icon[0] %}
													{{ site.data.icons.scss-variables[icon-key] | replace: "'", '' | replace: ' !default', '' }}
												</div>
												<div class="card__heading-group">
													<h1 class="card__title">
														$icon-{{ icon[0] }}
													</h1>
												</div>
											</header>
										</div>
									</div>
								</div>
							</div>
						{% endif %}
					</div>
				</div>
			</div>
		</div>
	{% endfor %}
</section>
{% endcapture %}

{% include documentation-html.html
	content=icon-collection
%}
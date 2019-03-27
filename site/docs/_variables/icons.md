---
layout: docs
title: Icons
---

## A collection of neutral, basic UI-icons - designed for Harbour-components.

With the development of Harbour as a starting point in the development of client applications the need for  well-designed, neutral, basic UI-icons that could be used in the Harbour-components became clear. After defining a list of required icons we started the design of these icons with undermentioned principles.

### Characteristics

Icon design in general focuses on capturing the essence of a shape into a simple image. This goes for Harbour UI-icons as well. As a addition to this principle there are a few extra things to keep in mind when designing new icons:

- Harbour UI-icons are icons used in Harbour-components. If there’s no need for an icon in a specific component it doesn’t have to be a part of Harbour UI-icons.
- Avoid overdesigning icons by keeping exotic shapes and quirky visualizations away from your design.
- K.I.S.S. (keep it simple, stupid) and when things get overcomplicated: start again and K.I.S.S.

### Solid shapes in icons

All icons that are solid shapes in stead of a line or combination of lines (for example the caret or the circle), there are no weight variants.

### Optimizing and exporting icons

To keep Harbour icons as small and flexible as possible we need to take a few basic principles into account:
* make sure the final icon shape consists of as few paths as possible
* flatten and merge your paths and shapes as much as possible
* remove unnecessary vectorpoints
* avoid groupings
* use shapes (outlines and fill) in stead of lines with a line weight.
* convert text elements to shapes (outlines)

After exporting the icons from a graphical editor you have to optimise the svg-code:
* Remove xml tag with version and encoding properties
* width and height properties (don’t lose the view box property)
* Remove comments
* Remove &lt;title&gt; and description &lt;desc&gt;  and definitions &lt;defs&gt; tags
* Remove unnecessary grouping tags &lt;g&gt; and their properties

The remaining svg code can be optimised [here](http://petercollingridge.appspot.com/svg-optimiser).

Make sure you've set the following options:
* Whitespace: remove
* Style type: styleString
* Truncate attribute numbers: 1 decimal place
* Truncate SVG size numbers: 1 decimal place
* Truncate style numbers: 2 significant figures
* Check all other option-boxes

The optimised code can be used in Harbour.
Don't forget to add a fill property fill="#000" to the optimised path(s)!

## Design principles

### Style

All Harbour UI-icons are designed to pair with system fonts as SF Pro and Roboto, the default font selection for the Harbour-components. Limiting the style elements is needed to make sure that the appearance of Harbour-components are clearly that of a starting point, which needs customization.

### Grid

All Harbour Icons are designed and optimized on a 32x32 pixel grid. All icons expand to the edges of the grid as much as possible (at least one of the x or y-axis). This gridsize forces the design to be simple and straightforward without limiting characteristics. In addition to that 32x32 pixels is a format that goes well with IOS and Android icon development standards.

### Icon-weights

Harbour icons are available in 5 weights: bold, regular, light, thin and hair. Starting point for these weights are the following lineweights: 8px for bold, 6px for regular, 4px for light, 2px for thin and 1px for hair on a 32x32 pixelgrid.

![Icon lineweight]({{ site.baseurl }}/images/variables/icons/icon-lineweights.svg)

All dimensions are recalculated to maintain specific lineweights for each iconweight. **Please don't use shortcuts when rotating or transforming shapes.**

![Icon shape-essence throughout lineweights]({{ site.baseurl }}/images/variables/icons/icon-shape-essence.svg)

### Border-radius

To make the icons pair well with Harbour’s fonts each fontweight has it’s own border radius. In the table below you can find which radius you need when creating new icons. There’s a setting for inner-corners, outer-corners and single points.

| Icon-weights | inner-corner | outer-corner | single-point |
|-------|--------|---------|---------|
| Bold - 8px | 1 | 2 | 1 |
| Regular - 6px | 0.75 | 1.5 | 0.75 |
| Light - 4px | 0.5 | 1 | 0.5 |
| Thin - 2px | 0.375 | 0.75 | 0.375 |
| Hair - 1px | 0.25 | 0.5 | 0.25 |

Outer and inner radius on the left and single-point radius on the right icon:
![Icon border-radius]({{ site.baseurl }}/images/variables/icons/icon-border-radius.svg)

## SCSS Usage

### Size variables

{% capture my_include %}{% include scss/variables/icon-sizes.scss %}{% endcapture %}

```scss
{{ my_include | rstrip }}
```

###  Icon Variables

Below we offer a overview with our current icons including the SCSS variable wich you can use in your Harbour-components. For icons with different weights there is a shorthand available which is the default. This default variable is used in most of our components and controls. Our own icon set uses the regular weight as default, but you are free to set a different default.

{% capture icon-collection %}
<section class="layout">
	{% comment %}
		<!-- Loop over all icons in the _data/icons/docs.json file. icon[0] stand for the key (e.g. 'arrow-down') and icon[1] contains the value; the description and the weights array.  -->
	{% endcomment %}
	<div class="collection collection--grid-one-whole-till-one-third">
		{% for icon in site.data.icons.docs %}
			<div class="collection__item">
				<section class="card">
					<div class="card__actions">
						<div class="card__primary-action">
							<header class="card__header">
								<div class="card__heading-group">
									<h1 class="card__title">
										{{ icon[0] | capitalize }}
									</h1>
									{% if icon[1].weights.size > 0 %}
										<h2 class="card__subtitle">
											Shorthand: <span class="card__metadata"><span class="tag tag--90">$icon-{{ icon[0] }}</span></span>
										</h2>
									{% endif %}
									<p class="card__excerpt">
										{{ icon[1].description }}
									</p>
								</div>
							</header>
						</div>
					</div>
					<div class="card__details">
						<div class="collection collection--list">
							{% if icon[1].weights.size > 0 %}
								{% for weight in icon[1].weights %}
									<div class="collection__item">
										<div class="card card--90">
											<div class="card__actions">
												<div class="card__primary-action">
													<header class="card__header">
														<div class="card__icon">
															{% comment %}
																<!-- Generate icon key to get the values from the scss-icon-variables.json. Then select the right icon and strip single quotes and SCSS !default flag to get the original SVG. -->
															{% endcomment %}
															{% assign icon-key = 'icon-' | append: icon[0] | append: '-' | append: weight %}
															{{ site.data.icons.scss-icon-variables[icon-key] | replace: "'", '' | replace: ' !default', '' }}
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
															<!-- Generate icon key to get the values from the scss-icon-variables.json. Then select the right icon and strip single quotes and SCSS !default flag to get the original SVG. -->
														{% endcomment %}
														{% assign icon-key = 'icon-' | append: icon[0] %}
														{{ site.data.icons.scss-icon-variables[icon-key] | replace: "'", '' | replace: ' !default', '' }}
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
				</section>
			</div>
		{% endfor %}
	</div>
</section>
{% endcapture %}

{% include documentation-html.html
	content=icon-collection
%}
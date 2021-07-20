---
layout: docs
title: Heading Group
---

## Appearance

You can use one, or a combination of several of the following headings.

```text
heading-group__running-head
heading-group__headline
heading-group__title
heading-group__subtitle
heading-group__underline
heading-group__supporting-text
heading-group__emphasis
```

### Running head

A brief summary of your title or headline. This should only consist of up to 50 characters (including whitespaces).

### Headline

The headline indicates the nature of the page below it. A page should only have one headline (at the top).

### Underline

An underline is a supporting text for the headline. It is always used in combination with a headline.

### Title

"A title can be used to identify the work, to place it in context, to convey a minimal summary of its contents, and to pique the reader's curiosity." - Wikipedia

### Subtitle

The subtitle is a second title which is often longer and explains more than the title.

### Supporting text

The supporting text contains a description or short summary to support the title or heading.

### Emphasis

The emphasis class is used to highlight a certain piece of text to draw the attention of the user. For example a price or a USP.

## Available modifiers

```text
heading-group--light
```

## HTML tag usage

The HTML tags you use for your individual heading elements should relate to one another. This means that if you don't use a heading, your title can be placed in a 'h1' tag and your subtitle would be a 'h2' tag.

## HTML structure

```text
heading-group (modifiers)
├── heading-group__<heading_type>
|	├── heading-group__emphasis (optional)
```

## Example HTML

### Modifier examples

#### default style

{% capture heading-group %}
<div class="heading-group">
	<h4 class="heading-group__running-head">
		Running head
	</h4>
	<h1 class="heading-group__headline">
		Headline
	</h1>
	<p class="heading-group__underline">
		Underline
	</p>
	<h2 class="heading-group__title">
		Title
	</h2>
	<h3 class="heading-group__subtitle">
		Subtitle
	</h3>
	<p class="heading-group__supporting-text">
		Supporting text to provide more details about your subject with an
		<span class="heading-group__emphasis">
			emphasis
		</span>
		so you can draw the attention of your user.
	</p>
</div>
{% endcapture %}
{% include example.html
	content=heading-group
%}

#### heading-group--light modifier

{% capture heading-group-light %}
<div class="layout__section layout__section--dark">
	<div class="layout__inner layout__inner--padded-80">
		<div class="heading-group--light">
			<h4 class="heading-group__running-head">
				Running head
			</h4>
			<h1 class="heading-group__headline">
				Headline
			</h1>
			<p class="heading-group__underline">
				Underline
			</p>
			<h2 class="heading-group__title">
				Title
			</h2>
			<h3 class="heading-group__subtitle">
				Subtitle
			</h3>
			<p class="heading-group__supporting-text">
				Supporting text to provide more details about your subject with an
				<span class="heading-group__emphasis">
					emphasis
				</span>
				so you can draw the attention of your user.
			</p>
		</div>
	</div>
</div>
{% endcapture %}
{% include example.html
	content=heading-group-light
%}

### Usage examples

#### Page heading

{% capture heading-group-page %}
<div class="heading-group">
	<h1 class="heading-group__headline">
		Headline
	</h1>
	<h2 class="heading-group__underline">
		Underline
	</h2>
</div>
{% endcapture %}
{% include example.html
	content=heading-group-page
%}

#### Section heading

{% capture heading-group-section %}
<div class="heading-group">
	<h1 class="heading-group__title">
		Section title
	</h1>
	<h2 class="heading-group__subtitle">
		Section subtitle
	</h2>
	<span class="heading-group__supporting-text">
		Laborum cupidatat consequat nostrud esse ea duis qui do consectetur. Laborum officia minim veniam qui labore tempor consequat duis officia irure dolor quis fugiat nulla. Incididunt cillum ullamco amet non labore irure amet quis. Amet do amet ut ea aute anim non laboris amet.
	</span>
</div>
{% endcapture %}
{% include example.html
	content=heading-group-section
%}

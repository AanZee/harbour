---
layout: docs
title: Content
---

## Headings
{% capture content-headings %}
<div class="content">
	<h1>h1 ・ Heading 1</h1>
	<h2>h2 ・ Heading 2</h2>
	<h3>h3 ・ Heading 3</h3>
	<h4>h4 ・ Heading 4</h4>
	<h5>h5 ・ Heading 5</h5>
	<h6>h6 ・ Heading 6</h6>
</div>
{% endcapture %}
{% include example.html
content=content-headings
%}

## Paragraph
{% capture content-paragraph %}
<div class="content">
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque placeat neque cupiditate ullam sint dignissimos esse excepturi, animi molestiae eveniet tempore maiores odio, deserunt architecto sequi sed natus, quidem a.</p>
</div>
{% endcapture %}
{% include example.html
content=content-paragraph
%}
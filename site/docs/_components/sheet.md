---
layout: docs
title: Sheet
---

## HTML structure
```
sheet
├── sheet__status
├── sheet__action
│	├── other BEM component
├── sheet__body
│	├── sheet__header
│	|	├── sheet__title
│	|	├── sheet__close-action (optional)
│	├── sheet__main
│	|	├── other BEM components
├── sheet__backdrop
```

## Example HTML

{% capture sheet %}
	<div class="sheet">
		<input class="sheet__status"
			type="checkbox"
			id="sheet-toggle-id"
		>
		<div class="sheet__action">
			<label class="button"
				for="sheet-toggle-id"
				type="button"
			>
				Sheet toggle
			</label>
		</div>
		<section class="sheet__body">
			<header class="sheet__header">
				<h1 class="sheet__title">
					Sheet title
				</h1>
				<label class="sheet__close-action"
					for="sheet-toggle-id"
				>
					Close
				</label>
			</header>
			<div class="sheet__main">
				<p class="content">
					Occaecat consectetur cupidatat pariatur magna officia consequat duis qui Lorem. Lorem exercitation est adipisicing anim Lorem dolor ad. Deserunt reprehenderit amet sint aliqua et ea voluptate aliqua et reprehenderit sint non. Lorem aliqua fugiat sint fugiat aliquip aute aliquip elit dolor esse labore sunt ad ad. Et et nulla laborum veniam magna. Eiusmod proident nisi in sunt excepteur qui exercitation. Nisi mollit culpa consequat consectetur ullamco sint sunt veniam. Anim do aliquip eu mollit amet laboris commodo occaecat aliqua esse labore.
				</p>
			</div>
		</section>
		<label class="sheet__backdrop"
			for="sheet-toggle-id"
		>
			Close
		</label>
	</div>
{% endcapture %}
{% include example.html
	content=sheet
%}

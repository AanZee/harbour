---
layout: docs
title: Checkbox
---

## HTML structure
```
checkbox (checkbox--colored checkbox--stretched checkbox--inlined checkbox--90 checkbox--padded-0 checkbox--padded-90 checkbox--padded-100 checkbox--padded-200)
├── checkbox__input
├── checkbox__label
├── link (optional)
├── checkbox__label (optional)
```

## Default Checkbox
{% capture checkbox %}
<label class="checkbox">
	<input class="checkbox__input"
		id="checkbox"
		name="checkbox"
		type="checkbox"
		value="true"
		checked
	>
	<span class="checkbox__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
{% endcapture %}
{% include example.html
	content=checkbox
%}

## Checkbox 90
{% capture checkbox-90 %}
<label class="checkbox checkbox--90">
	<input class="checkbox__input"
		id="checkbox-90"
		name="checkbox-90"
		type="checkbox"
		value="true"
	>
	<span class="checkbox__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
{% endcapture %}
{% include example.html
	content=checkbox-90
%}

## Checkbox with Link
{% capture checkbox-with-link %}
<div class="checkbox">
	<input class="checkbox__input"
		id="general-conditions"
		name="general-conditions"
		type="checkbox"
		value="agree"
	>
	<label class="checkbox__label" for="general-conditions">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi ex, mollis consectetur nibh vel, mattis feugiat ipsum. Morbi iaculis consequat lacus, eu sollicitudin mi tristique iaculis.</label> <a class="link" href="">general conditions</a><label class="checkbox__label" for="general-conditions">. Fusce interdum mauris nec ligula elementum auctor.</label>
</div>
{% endcapture %}
{% include example.html
	content=checkbox-with-link
%}

## Checkbox with Background Color
{% capture checkbox-colored %}
<label class="checkbox checkbox--colored">
	<input class="checkbox__input"
		id="checkbox-colored"
		name="checkbox-colored"
		type="checkbox"
		value="true"
	>
	<span class="checkbox__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi ex, mollis consectetur nibh vel, mattis feugiat ipsum. Morbi iaculis consequat lacus, eu sollicitudin mi tristique iaculis.</span>
</label>
{% endcapture %}
{% include example.html
	content=checkbox-colored
%}

## Multiple Checkboxes
{% capture multiple-checkboxes %}

<label class="checkbox">
	<input class="checkbox__input"
		id="option-1"
		name="option-1"
		type="checkbox"
		value="true"
	>
	<span class="checkbox__label">Optie 1</span>
</label>

<label class="checkbox">
	<input class="checkbox__input"
		id="option-2"
		name="option-2"
		type="checkbox"
		value="true"
	>
	<span class="checkbox__label">Optie 2</span>
</label>

<label class="checkbox">
	<input class="checkbox__input"
		id="option-3"
		name="option-3"
		type="checkbox"
		value="true"
	>
	<span class="checkbox__label">Optie 3</span>
</label>
{% endcapture %}
{% include example.html
	content=multiple-checkboxes
%}

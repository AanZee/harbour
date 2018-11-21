---
layout: docs
title: Radio Button
---

## Default Radio Button
{% capture radio-button %}
<label class="radio-button">
	<input class="radio-button__input"
		id="radio-button"
		name="radio-button"
		type="radio"
		value="1"
		checked
	>
	<span class="radio-button__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
<label class="radio-button">
	<input class="radio-button__input"
		id="radio-button"
		name="radio-button"
		type="radio"
		value="2"
	>
	<span class="radio-button__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
<label class="radio-button">
	<input class="radio-button__input"
		id="radio-button"
		name="radio-button"
		type="radio"
		value="3"
	>
	<span class="radio-button__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
{% endcapture %}
{% include example.html
	content=radio-button
%}

## Radio Button Compacter
{% capture radio-button-padded-90 %}
<label class="radio-button radio-button--padded-90">
	<input class="radio-button__input"
		id="radio-button"
		name="radio-button"
		type="radio"
		value="1"
		checked
	>
	<span class="radio-button__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
<label class="radio-button radio-button--padded-90">
	<input class="radio-button__input"
		id="radio-button"
		name="radio-button"
		type="radio"
		value="2"
	>
	<span class="radio-button__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
<label class="radio-button radio-button--padded-90">
	<input class="radio-button__input"
		id="radio-button"
		name="radio-button"
		type="radio"
		value="3"
	>
	<span class="radio-button__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
{% endcapture %}
{% include example.html
	content=radio-button-padded-90
%}

## Radio Button 90
{% capture radio-button %}
<label class="radio-button radio-button--90">
	<input class="radio-button__input"
		id="radio-button-90"
		name="radio-button-90"
		type="radio"
		value="1"
	>
	<span class="radio-button__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
<label class="radio-button radio-button--90">
	<input class="radio-button__input"
		id="radio-button-90"
		name="radio-button-90"
		type="radio"
		value="2"
	>
	<span class="radio-button__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
<label class="radio-button radio-button--90">
	<input class="radio-button__input"
		id="radio-button-90"
		name="radio-button-90"
		type="radio"
		value="3"
	>
	<span class="radio-button__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</label>
{% endcapture %}
{% include example.html
	content=radio-button
%}

## Radio Button with Link
{% capture radio-button-with-link %}
<div class="radio-button">
	<input class="radio-button__input"
		id="general-conditions-disagree"
		name="general-conditions"
		type="radio"
		value="disagree"
	>
	<label class="radio-button__label" for="general-conditions-disagree">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi ex, mollis consectetur nibh vel, mattis feugiat ipsum. Morbi iaculis consequat lacus, eu sollicitudin mi tristique iaculis.</label> <a class="link" href="">general conditions</a><label class="radio-button__label" for="general-conditions-disagree">. Fusce interdum mauris nec ligula elementum auctor.</label>
</div>
<div class="radio-button">
	<input class="radio-button__input"
		id="general-conditions-agree"
		name="general-conditions"
		type="radio"
		value="agree"
	>
	<label class="radio-button__label" for="general-conditions-agree">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi ex, mollis consectetur nibh vel, mattis feugiat ipsum. Morbi iaculis consequat lacus, eu sollicitudin mi tristique iaculis.</label>
</div>
{% endcapture %}
{% include example.html
	content=radio-button-with-link
%}

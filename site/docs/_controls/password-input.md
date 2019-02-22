---
layout: docs
title: Password Input
---

## Available states

```
password-input.is-valid
password-input.is-invalid
password-input__input:disabled
password-input__input:focus
```

## Available local variables

### Z Index

A z-index variable is added, because different z-indexes are necessary for styling states correctly.

```scss
$password-input-z-index
```

### Input Margin

This margin is added, to make sure the input does not cover 'state styling'.

```scss
$password-input-input-margin
```

### Webkit Credentials Auto Fill Button

Webkit auto fill button can be turned off (false) or on (true).

```scss
$password-input-webkit-credentials-auto-fill-button-toggle
```

## Example HTML

{% capture password-input %}
<div class="password-input">
	<input class="password-input__input"
		id="new-password"
		name="new-password"
		type="password"
		required
		autocomplete="new-password"
		spellcheck="false"
		autocorrect="off"
	>
	<div class="password-input__toolbar">
		<button class="password-input__visibility-toggle"
			type="button"
		>
			<span class="password-input__visibility-toggle-label">
				Show
			</span>
			<span class="password-input__visibility-toggle-label"
				style="display:none;"
			>
				Hide
			</span>
		</button>
	</div>
</div>
{% endcapture %}
{% include example.html
	content=password-input
%}

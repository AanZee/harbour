---
layout: docs
title: Form
---

## Available modifiers
Align labels to the right
```
form--right-aligned-labels
```
Align all sections, fieldsets, fields and action horizontally
```
form--horizontal
```
Display the actions vertically
```
form__actions--vertical
```

## Structure
```
form (modifier)
├── form__section
│	├── form__section-header (optional)
│	│	├── form__section-title (optional)
│	│	├── form__section-feedback-text (optional)
│	├── form__fieldset
│	│	├── form__fieldset-header (optional)
│	│	│	├── form__fieldset-title (optional)
│	│	│	├── form__fieldset-supporting-text (optional)
│	│	│	├── form__fieldset-feedback-text (optional)
│	│	├── form__field
│	│	│	├── form__field-header
│	│	│	│	├── form__field-label
│	│	│	│	│	├── form__field-supporting-text (optional)
│	│	│	├── form__field-main
│	│	│	│	├── form__input-helper-text (optional)
│	│	│	│	├── form__input-feedback-text (optional)
├── form__actions (modifier)
│	├── form__action (modifier)
```

## Example HTML

### Personal info form
A form with labels on the left side of the form.

{% capture personal-info-form %}
<form class="form form--right-aligned-labels">
	<div class="form__section">
		<div class="form__fieldset">
			<div class="form__field">
				<div class="form__field-header">
					<label class="form__field-label"
						for="given-name"
					>
						Given name
					</label>
				</div>
				<div class="form__field-main">
					<div class="form__field-section">
							<input class="text-input"
								type="text"
								id="given-name"
							>
					</div>
				</div>
			</div>
			<div class="form__field">
				<div class="form__field-header">
					<label class="form__field-label"
						for="family-name"
					>
						Family name
					</label>
				</div>
				<div class="form__field-main">
					<div class="form__field-section">
							<input class="text-input"
								type="text"
								id="family-name"
							>
					</div>
				</div>
			</div>
		</div>
		<div class="form__fieldset">
			<div class="form__field">
				<div class="form__field-header">
					<label class="form__field-label"
						for="street"
					>
						Street
					</label>
				</div>
				<div class="form__field-main">
					<div class="form__field-section">
							<input class="text-input"
								type="text"
								id="street"
							>
					</div>
					<!-- Display on error
					<label class="form__input-feedback-text"
						for="street"
					>
						You must enter a street name
					</label>
					-->
				</div>
			</div>
			<div class="form__field">
				<div class="form__field-header">
					<label class="form__field-label"
						for="house-number"
					>
						House number
						<span class="form__field-supporting-text">Optional</span>
					</label>
				</div>
				<div class="form__field-main">
					<div class="form__field-section">
						<input class="text-input"
							type="number"
							id="house-number"
						>
					</div>
					<label class="form__input-helper-text"
						for="house-number"
					>
						You don't have to enter an addition for some reason
					</label>
				</div>
			</div>
		</div>
	</div>
	<div class="form__actions">
		<div class="form__action">
			<button class="button button--full button--primary">Submit</button>
		</div>
	</div>
</form>
{% endcapture %}
{% include example.html
	content=personal-info-form
%}

### Login form
A simple form with labels above the input fields.

{% capture login-form %}
<form class="form form--labels-top">
	<div class="form__section">
		<div class="form__fieldset">
			<div class="form__field">
				<div class="form__field-header">
					<label class="form__field-label"
						for="email"
					>
						Email
					</label>
				</div>
				<div class="form__field-main">
					<div class="form__field-section">
						<input class="text-input"
							type="email"
							id="email"
						>
					</div>
				</div>
			</div>
			<div class="form__field">
				<div class="form__field-header">
					<label class="form__field-label"
						for="password"
					>
						Password
					</label>
				</div>
				<div class="form__field-main">
					<div class="form__field-section">
						<input class="text-input"
							type="password"
							id="password"
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form__actions">
		<div class="form__action">
			<button class="button button--primary">Submit</button>
		</div>
	</div>
</form>
{% endcapture %}
{% include example.html
	content=login-form
%}
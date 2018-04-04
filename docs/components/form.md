# Form
- [See SCSS component](../../scss/components/form.scss)
- This component might need a JavaScript solution

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
Indent the actions on lap and up, so that they align with the inputs
```
form__action--indented-lap-and-up
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
│	│	│	│	│	├── form__field-label-helper-text (optional)
│	│	│	├── form__field-main
│	│	│	│	├── form__input-helper-text (optional)
│	│	│	│	├── form__input-feedback-text (optional)
├── form__actions (modifier)
│	├── form__action (modifier)
```

## Example HTML

### Personal info form
A form with labels on the left side of the form.

```html
<form class="form">
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
					<div class="input-box">
						<div class="input-box__input">
							<input class="character-input"
								type="text"
								id="given-name"
							/>
						</div>
						<div class="input-box__state-indicator"></div>
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
					<div class="input-box">
						<div class="input-box__input">
							<input class="character-input"
								type="text"
								id="family-name"
							/>
						</div>
						<div class="input-box__state-indicator"></div>
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
					<div class="input-box">
						<div class="input-box__input">
							<input class="character-input"
								type="text"
								id="street"
							/>
						</div>
						<div class="input-box__state-indicator"></div>
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
						<div class="form__field-label-helper-text">Optional</div>
					</label>
				</div>
				<div class="form__field-main">
					<div class="input-box">
						<div class="input-box__input">
							<input class="character-input"
								type="number"
								id="house-number"
							/>
						</div>
						<div class="input-box__state-indicator"></div>
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
			<button class="button">Submit</button>
		</div>
	</div>
</form>
```

### Login form
A simple form with labels above the input fields.

```html
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
					<div class="input-box">
						<div class="input-box__input">
							<input class="character-input"
								type="email"
								id="email"
							/>
						</div>
						<div class="input-box__state-indicator"></div>
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
					<div class="input-box">
						<div class="input-box__input">
							<input class="character-input"
								type="password"
								id="password"
							/>
						</div>
						<div class="input-box__state-indicator"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form__actions">
		<div class="form__action">
			<button class="button button--cta">Submit</button>
		</div>
	</div>
</form>
```
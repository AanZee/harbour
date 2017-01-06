# Form
- [See SCSS component](../../scss/components/_form.scss)
- This component needs a JavaScript solution

## Available modifiers
**Shows labels above the input on all ranges**
```
form--labels-top
```
**Removes field left and right padding**
```
form--full
```

## Structure
```
form
├── form__sections
│	├── form__section
│	│	├── form__fieldset
│	│	│	├── form__field
│	│	│	│	├── form__label-box
│	│	│	│	│	├── form__label
│	│	│	│	│	├── form__label-helper-text (optional)
│	│	│	│	├── form__inputs-box
│	│	│	│	│	├── form__input-box
│	│	│	│	│	├── form__helper-text (optional)
│	│	│	│	│	├── form__feedback-text (optional)
│	│	├── form__actions
│	│	│	├── form__action
```

## Available local variables
```scss
$form-section-border
$form-section-title-color
$form-section-text-color
$form-label-color
$form-label-helper-text-color
$form-helper-text-color
$form-feedback-text-color
$form-feedback-text-icon-border
```

## Example HTML

### Personal info form
A form with labels on the left side of the form.

```html
<form class="form">
	<div class="form__sections">
		<div class="form__section">
			<div class="form__fieldset">
				<div class="form__field">
					<div class="form__label-box">
						<label class="form__label" for="given-name">
							Given name
						</label>
					</div>
					<div class="form__inputs-box">
						<div class="form__input-box input-box">
							<input class="input-box__input text-input" type="text" id="given-name" />
							<div class="input-box__state-indicator"></div>
						</div>
					</div>
				</div>
				<div class="form__field">
					<div class="form__label-box">
						<label class="form__label" for="family-name">
							Family name
						</label>
					</div>
					<div class="form__inputs-box">
						<div class="form__input-box input-box">
							<input class="input-box__input text-input" type="text" id="family-name" />
							<div class="input-box__state-indicator"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="form__fieldset">
				<div class="form__field">
					<div class="form__label-box">
						<label class="form__label" for="street">
							Street
						</label>
					</div>
					<div class="form__inputs-box">
						<div class="form__input-box input-box">
							<input class="input-box__input text-input" type="text" id="street" />
							<div class="input-box__state-indicator"></div>
						</div>
						<!-- Display on error
						<label class="form__feedback-text" for="street">
							You must enter a street name
						</label>
						-->
					</div>
				</div>
				<div class="form__field">
					<div class="form__label-box">
						<label class="form__label" for="house-number">
							House number
							<div class="form__label-helper-text">Optional</div>
						</label>
					</div>
					<div class="form__inputs-box">
						<div class="form__input-box input-box">
							<input class="input-box__input text-input" type="number" id="house-number" />
							<div class="input-box__state-indicator"></div>
						</div>
						<label class="form__helper-text" for="house-number">
							You don't have to enter an addition for some reason
						</label>
					</div>
				</div>
			</div>
			<div class="form__actions">
				<button class="form__action button button--cta" type="submit">Submit</button>
			</div>
		</div>
	</div>
</form>
```

### Login form
A simple form with labels above the input fields.

```html
<form class="form form--labels-top">
	<div class="form__sections">
		<div class="form__section">
			<div class="form__fieldset">
				<div class="form__field">
					<div class="form__label-box">
						<label class="form__label" for="email">
							Email
						</label>
					</div>
					<div class="form__inputs-box">
						<div class="form__input-box input-box">
							<input class="input-box__input text-input" type="email" id="email" />
							<div class="input-box__state-indicator"></div>
						</div>
					</div>
				</div>
				<div class="form__field">
					<div class="form__label-box">
						<label class="form__label" for="password">
							Password
						</label>
					</div>
					<div class="form__inputs-box">
						<div class="form__input-box input-box">
							<input class="input-box__input text-input" type="password" id="password" />
							<div class="input-box__state-indicator"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="form__actions">
				<button class="form__action button button--cta" type="submit">Submit</button>
			</div>
		</div>
	</div>
</form>
```

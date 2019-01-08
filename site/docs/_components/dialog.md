---
layout: docs
title: Dialog
---

## HTML structure
```
dialog (dialog--success / dialog--warning / dialog--error)
├── dialog__icon (optional)
├── dialog__main
│	├── other BEM component
```

## Available variations

### Standard dialog
{% capture dialog-no-icon %}
<section class="dialog">
	<div class="dialog__body">
		<div class="dialog__message">
			<p class="dialog__text">
				This is a standard dialog. It can be used to convey simple information to users, such as: 'Welcome to your dashboard'
			</p>
			<p class="dialog__supporting-text">
				Dialog supporting text
			</p>
		</div>
		<div class="dialog__actions">
			<div class="dialog__action">
				<a class="button button--primary button--90"
					href="/"
				>
					primary action
				</a>
			</div>
			<div class="dialog__action">
				<a class="button button--secondary button--90"
					href="/"
				>
					secondary ction
				</a>
			</div>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=dialog-no-icon
%}

### Dialog information
{% capture dialog %}
<section class="dialog dialog--information">
	<div class="dialog__body">
		<div class="dialog__message">
			<p class="dialog__text">
				This is a dialog with information modifier. It can be used to convey information to users, such as tips.
			</p>
			<p class="dialog__supporting-text">
				Dialog supporting text
			</p>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=dialog
%}

### Dialog success
{% capture dialog-success %}
<section class="dialog dialog--success">
	<div class="dialog__body">
		<div class="dialog__message">
			<p class="dialog__text">
				This is a dialog with a success modifier. It can be used to display a positive message, such as: 'Your order is confirmed'.
			</p>
		</div>
		<div class="dialog__accessories">
			Dialog accessories, like bullet lists or other content.
		</div>
	</div>
	<button class="dialog__dismiss-action"></button>
</section>
{% endcapture %}
{% include example.html
	content=dialog-success
%}

### Dialog warning
{% capture dialog-warning %}
<section class="dialog dialog--warning">
	<div class="dialog__body">
		<div class="dialog__message">
			<p class="dialog__text">
				This is a dialog with a warning modifier. It can be used to display a warning message, such as: 'This order is not yet confirmed'.
			</p>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=dialog-warning
%}

### Dialog error
{% capture dialog-error %}
<section class="dialog dialog--error">
	<div class="dialog__body">
		<div class="dialog__message">
			<p class="dialog__text">
				This is a dialog with an error modifier. It can be used to display an error message, such as: 'Your order could not be processed'.
			</p>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=dialog-error
%}
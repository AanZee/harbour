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
	<div class="dialog__main">
		<div class="dialog__content">
			<section class="content">
				<p>
					This is a standard dialog. It can be used to convey simple information to users, such as: 'Welcome to your dashboard'
				</p>
			</section>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=dialog-no-icon
%}

### Dialog with icon
{% capture dialog %}
<section class="dialog dialog--icon">
	<div class="dialog__main">
		<div class="dialog__content">
			<section class="content">
				<p>
					This is a standard dialog. It can be used to convey simple information to users, such as: 'Welcome to your dashboard'
				</p>
			</section>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=dialog
%}

### Dialog success
{% capture dialog-success %}
<section class="dialog dialog--icon dialog--success">
	<div class="dialog__main">
		<div class="dialog__content">
			<section class="content">
				<p>
					This is a dialog with a <strong>success</strong> modifier and an inline svg icon. It can be used to display a positive message, such as: 'Your order is confirmed'. Lorem adlfea f
				</p>
			</section>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=dialog-success
%}

### Dialog warning

{% capture dialog-warning %}
<section class="dialog dialog--icon dialog--warning">
	<div class="dialog__main">
		<div class="dialog__content">
			<section class="content">
				<p>
					This is a dialog with a <strong>warning</strong> modifier and an inline svg icon. It can be used to display a warning message, such as: 'This order is not yet confirmed'.
				</p>
			</section>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=dialog-warning
%}

### Dialog error

{% capture dialog-error %}
<section class="dialog dialog--icon dialog--error">
	<div class="dialog__main">
		<div class="dialog__content">
			<section class="content">
				<p>
					This is a dialog with an <strong>error</strong> modifier and an inline svg icon. It can be used to display an error message, such as: 'Your order could not be processed'.
				</p>
			</section>
		</div>
	</div>
</section>
{% endcapture %}
{% include example.html
	content=dialog-error
%}
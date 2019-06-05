---
layout: default
title: Menu View
---

## Structure
```
menu-view
├── menu-view__menu-status
├── menu-view__sidebar
│	├── menu-view__status-bar
│	├── menu-view__sidebar-header
│	│	├── menu-view__logo
│	│	├── menu-view__toggle
│	│	│	├── menu-view__show-action
│	│	│	├── menu-view__hide-action
│	├── menu-view__sidebar-menu
├── menu-view__main
```

## Example HTML
```html
<body class="menu-view">
	<input class="menu-view__menu-status"
		type="checkbox"
		id="show-menu"
	>
	<div class="menu-view__sidebar">
		<div class="menu-view__status-bar">
			... (text)
		</div>
		<header class="menu-view__sidebar-header">
			<a
				class="menu-view__logo"
				href="{{ '/' | relative_url }}"
			>
				Harbour
			</a>
			<label class="menu-view__toggle"
				for="show-menu"
			>
				<div class="menu-view__show-action">
					<div class="button button--80">
						Show menu
					</div>
				</div>
				<div class="menu-view__hide-action">
					<div class="button button--80">
						Hide menu
					</div>
				</div>
			</label>
		</header>
		<div class="menu-view__menu">
			...
		</div>
	</div>
	<div class="menu-view__main">
		...
	</div>
</body>
```


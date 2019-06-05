---
layout: default
title: Menu
---

## Available modifiers

Add text color light to menu items. Can be used on dark backgrounds.
```
menu--light
```

Adds padding to menu items. Can be used when wrapping a menu.
```
menu--padding
```

## Structure
```
menu (modifier)
├── popover__item
```

## Example HTML

{% capture menu %}
<div class="menu">
	<a class="menu__item">Menu item 1</a>
	<a class="menu__item">Menu item 2</a>
	<a class="menu__item">Menu item 3</a>
	<a class="menu__item">Menu item 4</a>
</div>
{% endcapture %}
{% include example.html
	content=menu
%}
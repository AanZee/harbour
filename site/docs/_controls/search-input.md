---
layout: docs
title: Search Input
---

## Available states

```text
search-input__input:disabled
search-input__input:focus
```

## Available modifiers

### Sizes

```text
search-input--90
search-input--narrow
search-input--condensed
```

### Other

#### search-input

```text
search-input--icon
search-input--rounded
search-input--button-separated
```

#### search-input__action

```text
search-input__action--clear
search-input__action--search
```

#### search-input__button

```text
search-input__button--primary
search-input__button--secondary
search-input__button--tertiary
```

## Structure

```text
search-input (modifier)
├── search-input__input-box
│   ├── search-input__input
│   ├── search-input__toolbar
│   │   ├── search-input__action (modifier)
├── search-input__button (optional) (modifier)
```

## Example HTML

### Basic implementation

{% capture search-input %}
<div class="search-input">
    <div class="search-input__input-box">
        <input class="search-input__input"
            placeholder="search"
        >
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html
	content=search-input
%}

### Small with rounded ends

{% capture search-input--small-rounded %}
<div class="search-input search-input--90 search-input--rounded">
    <div class="search-input__input-box">
        <input class="search-input__input"
            placeholder="search"
        >
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html
	content=search-input--small-rounded
%}

### Multiple actions in toolbar

{% capture search-input--multiple-actions %}
<div class="search-input">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
            <button class="search-input__action search-input__action--search"></button>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html
	content=search-input--multiple-actions
%}

### Text action in toolbar

{% capture search-input--text-action %}
<div class="search-input">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
            <button class="search-input__action">
                Search
            </button>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html
	content=search-input--text-action
%}

### Narrow

{% capture search-input--narrow %}
<div class="search-input search-input--narrow">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
            <button class="search-input__action search-input__action--search"></button>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html
	content=search-input--narrow
%}

### Rounded ends with multiple actions in toolbar

{% capture search-input--rounded-multiple-actions %}
<div class="search-input search-input--rounded">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
            <button class="search-input__action search-input__action--search"></button>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html
	content=search-input--rounded-multiple-actions
%}

### Rounded ends and search icon in front

{% capture search-input--icon-in-front %}
<div class="search-input search-input--rounded search-input--icon">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html
	content=search-input--icon-in-front
%}

### Search action with devider

{% capture search-input--devided-action %}
<div class="search-input">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
        </div>
    </div>
    <button class="search-input__button">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--devided-action
%}

### Rounded ends with search action with devider

{% capture search-input--rounded-devided-action %}
<div class="search-input search-input--rounded">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
        </div>
    </div>
    <button class="search-input__button">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--rounded-devided-action
%}

### Separated search action

{% capture search-input--separated-action %}
<div class="search-input search-input--button-separated">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
        </div>
    </div>
    <button class="search-input__button">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--separated-action
%}

### Rounded ends and separated search action

{% capture search-input--rounded-separated-action %}
<div class="search-input search-input--rounded search-input--button-separated">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
        </div>
    </div>
    <button class="search-input__button">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--rounded-separated-action
%}

### Search action modifier

{% capture search-input--action-modifier %}
<div class="search-input">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
        </div>
    </div>
    <button class="search-input__button search-input__button--primary">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--action-modifier
%}

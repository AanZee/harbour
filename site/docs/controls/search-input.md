---
layout: docs
title: Search Input
---

# Search input

- [See SCSS component](../../scss/controls/search-input.scss)

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
search-input--rounded-ends
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

{% capture search-input %}
<div class="search-input search-input--90 search-input--rounded-ends">
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

{% capture search-input %}
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
	content=search-input
%}

{% capture search-input %}
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
	content=search-input
%}

{% capture search-input %}
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
	content=search-input
%}

{% capture search-input %}
<div class="search-input search-input--rounded-ends">
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
	content=search-input
%}

{% capture search-input %}
<div class="search-input search-input--rounded-ends search-input--icon">
    <div class="search-input__input-box">
        <input class="search-input__input">
        <div class="search-input__toolbar">
            <button class="search-input__action search-input__action--clear"></button>
        </div>
    </div>
</div>
{% endcapture %}
{% include example.html
	content=search-input
%}

{% capture search-input %}
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
	content=search-input
%}

{% capture search-input %}
<div class="search-input search-input--rounded-ends">
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
	content=search-input
%}

{% capture search-input %}
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
	content=search-input
%}

{% capture search-input %}
<div class="search-input search-input--rounded-ends search-input--button-separated">
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
	content=search-input
%}

{% capture search-input %}
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
	content=search-input
%}

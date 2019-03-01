---
layout: docs
title: Search Input
---

{% capture search-input--devided-action %}
<div class="search-input">
    <div class="search-input__input-box">
        <input class="search-input__input"
            type="search"
            required
        >
        <div class="search-input__toolbar">
            <button class="search-input__clear-action">Clear</button>
        </div>
    </div>
    <button class="search-input__search-action">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--devided-action
%}

A search input control allows the user to search through a selection of data.

The search input control is often used seperately from other form controls, therefor it has some unique modifiers.

## Structure

```text
search-input (modifier)
├── search-input__input-box
│   ├── search-input__input
│   ├── search-input__toolbar
│   │   ├── search-input__clear-action
├── search-input__search-action
```

{% capture search-input--devided-action %}
<div class="search-input">
    <div class="search-input__input-box">
        <input class="search-input__input"
            type="search"
            required
            value="search query"
        >
        <div class="search-input__toolbar">
            <button class="search-input__clear-action">Clear</button>
        </div>
    </div>
    <button class="search-input__search-action">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--devided-action
%}

## Available modifiers

### Sizes

```text
search-input--90
```

{% capture search-input--devided-action %}
<div class="search-input search-input--90">
    <div class="search-input__input-box">
        <input class="search-input__input"
            type="search"
            required
        >
        <div class="search-input__toolbar">
            <button class="search-input__clear-action">Clear</button>
        </div>
    </div>
    <button class="search-input__search-action">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--devided-action
%}

### Other

```text
search-input--rounded
search-input--button-separated
```

##### search-input--rounded

{% capture search-input--devided-action %}
<div class="search-input search-input--rounded">
    <div class="search-input__input-box">
        <input class="search-input__input"
            type="search"
            required
        >
        <div class="search-input__toolbar">
            <button class="search-input__clear-action">Clear</button>
        </div>
    </div>
    <button class="search-input__search-action">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--devided-action
%}

##### search-input--button-separated

{% capture search-input--devided-action %}
<div class="search-input search-input--button-separated">
    <div class="search-input__input-box">
        <input class="search-input__input"
            type="search"
            required
        >
        <div class="search-input__toolbar">
            <button class="search-input__clear-action">Clear</button>
        </div>
    </div>
    <button class="search-input__search-action">
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--devided-action
%}

## Available states

```text
search-input__input:disabled
search-input__input:focus
```

##### is-disabled (in combination with disabled attribute to prevent keyboard navigation)

{% capture search-input--devided-action %}
<div class="search-input is-disabled">
    <div class="search-input__input-box">
        <input class="search-input__input"
            type="search"
            required
            disabled
            value="search query"
        >
        <div class="search-input__toolbar">
            <button class="search-input__clear-action">Clear</button>
        </div>
    </div>
    <button class="search-input__search-action"
        disabled
    >
        Search
    </button>
</div>
{% endcapture %}
{% include example.html
	content=search-input--devided-action
%}

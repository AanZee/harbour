# Layout

- [See SCSS component](../../scss/layouts/page.scss)

## Available modifiers

```
page__main--colored
```

## Structure

```
page
├── page__header
├── page__main (modifier)
├── page__footer
```

## Example HTML

Basic example without inner and columns

```html
<section class="page">
	<header class="page__header">
		...
	</header>
	<main class="page__main">
		...
	</main>
	<footer class="page__footer">
		...
	</footer>
</section>
```
# Contributing to Harbour

Thank you for taking the time to contribute to Harbour.

## Local testing

To prevent builds from failing you should test your changes on your local machine before pushing. Read the [Run Local Harbour](/docs/run-local-harbour.md) guide.

## Icons
All our UI icons are included in the CSS files. This will prevent unnecessary image calls and will make it lot a lot easier to use the same icons in different colors. To add an icon you should read the [documentation](https://harbour.aanzee.cc/variables/icons.html) and follow the next steps:
1. Add icon SVG to the `site/_data/icons/scss-icon-variables.json` file
	- Sort keys alphabetically
	- Start key with 'icon' (e.g. icon-plus-circle-solid)
	- If using various weights end the key with a dash and and regular, bold, light, thin or hair (e.g. icon-arrow-down-regular)
	- Escape double quotes for valid JSON
2. Add icon description and weights to `site/_data/icons/docs.json` file
	- Sort keys alphabetically
	- Add new object with the same key as the previous file without 'icon-' and the weight (e.g. arrow-down)
	- Add `description` and `weights` properties to the object
	- If using various weights you should add them in the `weights` array. When there is a single weight you can add an empty array

Now you can use the variables in your SCSS files like `$icon-name-weight`.

## Pull request

You can open a [pull request](https://github.com/AanZee/harbour/pulls) on our GitHub. Please use the template to open a request. We ask you to provide the following information:

* **Issue key** - Optional for external contributors, mandatory for Aan Zee employees.
* **Summary of your proposal** - A brief summary of the pull request.
* **Proposed changes** - What are the changes you've made and what other components do they influence?
* **Proposed additions to the changelog** - Please list the `features` and `improvements` for this pull request so that they can easily be added to the changelog after merging.
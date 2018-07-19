# 1.8.0

## Features
* Add gulp tasks to watch and build SCSS, using stylelint as linter
* Update SCSS in various components to comply with linting rules

## Breaking changes
* Move `.stylelintrc.json` to the root of the project. Projects including this setting file should update the path in their `stylelint.js` file

# 1.7.0

## Features
* Update layout columns with min-width, to remain size when view is switched (for example with a segmented control)
* Improve button. Add font smoothing and font weight. Improve horizontal padding on button--80

# 1.6.1

## Bugfix
* Add right local border variable to dialog component

# 1.6.0

## Features
* Added get-svg-data-uri for faster and easier adding svg icons in SCSS
* Added layout__section--rounded-top and layout__section--rounded-bottom

## Bugfix
* Adds overscroll-behavior for older MS browsers, known as ms-scroll-chaining, to popover.

# 1.5.5

## Bugfix
* Add default to font smoothing utility

# 1.5.4

## Bugfix
* Add underscore to Bourbon import to fix a bug with some SCSS importers

# 1.5.3

## Bugfix
* Move button font weight and user select to button reset styling
* Improve button state selectors
* Add missing hidpi import


# 1.5.2

## Bugfix
* Remove color-info from colors as was decided to not use this variable anymore

# 1.5.1

## Bugfix
* Add .scss to bourbon import to fix bug where import retrieved folder instead of file with node-sass-tilde-importer plugin [node-sass-title-importer issue 8](https://github.com/matthewdavidson/node-sass-tilde-importer/issues/8)

# 1.5.0

## Features
* Update normalize to Aan Zee's temporary SCSS version
* Improve layout layout
* Add popover component

# 1.4.0

## Features
* Add layout layout to build flexible interface outlines
* Add button outset variable to the button control to add a 3D look to your buttons
* Add variables to dialog component to override default styling

# 1.3.0

## Features
* Add stylelint as dependency
* Add chokidar dependency to watch files
* Add stylelint plugin 'stylelint-declaration-block-no-ignored-properties' to disallow property values that are ignored due to another property value in the same rule
* Add stylelint plugin 'stylelint-declaration-strict-value' to enforce the use of variables in for certain property values
* Updated settings in stylelint plugin 'stylelint-order'
# 1.12.0

## Improvements
* Change color and modifiers names 'call to action' to 'primary'
* Change color and modifiers names 'primary' to 'secondary'
* Change color and modifiers names 'secondary' to 'tertiary'
* Change color and modifiers names 'diap' to 'light'
* Improve button scale
* Remove color ui-accent, you can use color secondary or tertiary as replacement
* Add color background complementary
* Rename 'spacing' setting file to 'sizes'

# 1.11.2
* Add missing updates in version 1.10.0 to changelog

# 1.11.1

## Bugfix
* Fix wrong scss variables in calc functions

# 1.11.0

## Features
* Add page layout
* Update input stepper docs

# 1.10.0

## Features
* Add input stepper component
* Update get-svg-uri function to check for #000000 fill or stroke
* Remove 'em' from line-height variables
* Add golden-ratio and control-height variables

# 1.9.0

## Features
* Update range specific modifiers to match the Aan Zee conventions
* Replace $color-background with $color-background-light
* Clarify that layout__inner is optional in the layout documentation

# 1.8.2

## Bugfix
* Add missing spacing variable to local layout variable

# 1.8.1

## Bugfix
* Improve layout spacing scale

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
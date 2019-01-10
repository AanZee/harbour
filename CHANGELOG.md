
# 1.23.0

## Improvements
* Add branchname to documentation footer
* Harbour is now automatically published to NPM.
* Add Javascript code block toggle
* Add card-primary-action-icon-color variable
* Add card-is-loading-icon-color variable
* Add flex-shrink 0 to card__media in card--horizontal

# 1.22.1

## Bugfix
* Fix cache invalidation paths

# 1.22.0

## Feature
* Enables collapsing code blocks
* Add multiple documentation versions which are hosted on Cloud Front and served on https://harbour.aanzee.cc

## Improvements
* Sort SCSS index import on alphabetical order
* Remove empty CSS selectors
* Fix layout column one third and two thirds percentages. This will fix the layout when you have three one third columns. Changed the value from 33% and 67% to 33.33% and 66.67%.
* Remove the layout__section--spacing-100 modifier since this is the default layout section behavior.
* Add SCSS loops for layout section and layout inner city block modifiers to make it easier to maintain.
* Builds dynamic links to docs, so that we no longer have to add links manually
* Rename 'Issue key' to 'Jira id' and add checklist to pull request template.

## Breaking changes
* Merge icons and settings SCSS folders and imports (scss/icons and scss/settings to scss/variables)

# 1.21.7

## Bugfix
* Fix link to contributing guidelines

# 1.21.6

## Bugfix
* Fix focus state for expandable card

# 1.21.5

## Bugfix
* Remove top and bottom padding from drop-down menu
* Add $drop-down-menu-icon local variable to overwrite chevron style
* Add drop-down menu to visual overview

# 1.21.4

## Bugfix
* Revert button reset cursor change

# 1.21.3

## Bugfix
* Add card-box-shadow as card variables to enable overrides in other projects.
* Add card__details border-bottom radius for projects to ensure the card border radius when the card__details has a background-color

# 1.21.2

## Bugfix
* Fix link from README.md to GitHub pages documentation

# 1.21.1

## Bugfix
* Move pull request template

# 1.21.0

## Feature
* Add pull request template

## Improvements
* Move contributing docs to `/docs` folder
* Add summary to `README.md`

# 1.20.3

## Bugfix
* Add missing commas srcset in the card documentation

# 1.20.2

## Bugfix
* Add changelog for 1.20.1 and update package.json

# 1.20.1

## Bugfix
* Add relative url pipe to images so they render on GitHub pages

# 1.20.0

## Feature
* Add card component [HAR-163]
* Add tag component [HAR-163]
* Add placeholder images [HAR-163]

## Improvements
* Change font-families
* Add icons used in card
* Add box shadow variations
* Add font-weight settings
* Add aspect-ratio and text-width size settings

# 1.19.0

## Feature
* Add checkbox component [HAR-39]

# 1.18.2

## Bugfix
* Pin ajv dependency because of error in the 'equal' module

# 1.18.1

## Bugfix
* Fix relative url to contributing section

# 1.18.0

## Improvements
* Updated layout documentation [HAR-118]
* Updated both dev and SCSS related (bourbon, reset-css, normalize, stylelint) packages Removed unused packages [HAR-166]
* Add more detailed documentation about running Harbour and Jekyll on your local machine [HAR-165]
* Add layout section left aligning modifier [HAR-170]
* Add Gemfile.lock to the .gitignore

# 1.17.0

## Features
* Add Github Pages to the project, so that the visual styleguide can be deployed

# 1.16.0

## Features
* Add visual styleguide

# 1.15.0

## Features
* Add drop-down menu control

# 1.14.0

## Features
* Add Travis status badge to readme
* Add text input control

# 1.13.0

## Features
* Add password input control
* Add input settings
* Add check and exclamation icon

## Improvements
* Move icons (and fonts) before settings, so icons can be used by (input) settings
* Replace 'border-input-100' for input-stepper with new 'input-border' variable

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
* Rename 'control-height' to 'control-size'

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

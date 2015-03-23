# Harbour
> Professional Front-end project boilerplate without the bloat

## Features
- [Opiniated Sass/CSS conventions](https://github.com/bartvandebiezen/css-conventions) enforced by CSScomb
- Powerful Sass breakpoint tool which work with ranges
- Gulp build tool with livereload, CSSComb and minification

## Install
No assumptions are made about what tools are installed. These steps cover all steps required to start using Harbour:

1. [Install node](https://nodejs.org/)
2. Open up the terminal and follow the next steps
3. Install [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) globally
```
$ npm install --global gulp
```
4.a. [Make sure hidden files are visible](http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) in your Finder (Mac users only)
```
$ defaults write com.apple.finder AppleShowAllFiles YES.
```
4.b. Relaunch the Finder
5. Download this repo with the "Download ZIP" folder on the right
7. Unzip and `cd` to the downloaded directory
8. Install dependencies
```
$ npm install
```
9. Run Gulp
```
$ gulp
```

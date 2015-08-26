# Harbour ⚓
Professional Front-end project boilerplate without the bloat.

## Features
- Ordered folder structure
- Useful sass mixin library ([Bourbon](http://bourbon.io/) and some custom utilities)
- Local server for fast development
- Keep sass in same style and order as other team members ([csscomb](http://csscomb.com/))
- Browser & editor independent
- Sass Ranges tool for device independent media queries
- Livereload
- Javascript loader
- [Bless](http://blesscss.com/) option to support IE9 and lower (css selector limit problem)

## Install
To use Harbour you'll need [node](https://nodejs.org/), [npm](https://www.npmjs.com/), [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) (global) and [sass](http://sass-lang.com/).



### Install a new project
You can install Harbour with a [Yeoman generator](https://github.com/AanZee/generator-harbour) or manualy by following this steps:

1. Download this repo with the "Download ZIP" folder on the right
2. Unzip to desired local folder (like ~/Sites/) and rename to new project name
3. Open up the terminal
4. Go to choosen folder
	```
	$ cd ~/Sites/new-project
	```
5. Install dependencies
	```
	$ npm install
	```
	
### Start project	
1. Open up the terminal
2. Run Gulp
	```
	$ gulp
	```
3. Go to your [localhost](http://localhost:3000)
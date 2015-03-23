# Harbour
> Professional Front-end project boilerplate without the bloat

## Features
- [Opiniated Sass/CSS conventions](https://github.com/bartvandebiezen/css-conventions) enforced by CSScomb
- Powerful Sass breakpoint tool which work with ranges
- Gulp build tool with livereload, CSSComb and minification

## Install
No assumptions are made about what tools are installed. These steps cover all steps required to start using Harbour:

1. [Install node](https://nodejs.org/)
2. Download this repo with the "Download ZIP" folder on the right
3. Unzip to desired local folder (like ~/Sites/) and rename to new project name
4. Open up the terminal and follow the next steps
5. Install [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) globally
	```
	$ npm install --global gulp
	```
6. Go to choosen folder
	```
	$ cd ~/Sites/newProject
	```
7. Install dependencies
	```
	$ npm install
	```
8. Run Gulp
	```
	$ gulp
	```

### Extra steps if you need to connect with a git repository
	
1. ```$ git init```
2. ```git add .```
3. ```git commit -m 'message'```
4. ```git remote add origin <url>```
5. ```git push -u origin master```
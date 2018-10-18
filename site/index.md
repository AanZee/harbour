---
layout: home
title: Harbour
---
Harbour is a Global component library created at [Aan Zee](https://www.aanzee.nl).

## How to use?

You can add Harbour to your project through a npm install.

### Installation
```
npm install aanzee-harbour
```

### Documentation
A detailed explanation of all the components and how to use them can be found in the [documentation section]({{ '/docs' | relative_url }}).

## Contributing
I you want to contribute to this project you can create a pull request on [Github](https://github.com/AanZee/harbour).

In order to actively contribute to the project you can test your changes by running Jekyll locally.
First install `bundler` and `jekyll` gems.

```bash
gem install bundler jekyll
```

Checkout the project and open the root folder in your terminal. Run `npm install` to install all dependencies.

```bash
npm install
npm run start
```

A browser window should open and point to `http://localhost:4000`. SCSS linting and live reloading is implemented into the task.

### Github Pages documentation
The static (Jekyll) documentation is hosted on Github Pages. The documentation is generated from the `master` branch and copied to a `gh-pages` branch.

#### Building the documentation
Checkout the `master` branch and generate the documentation:
```bash
git checkout master
npm install
npm run build
```

#### Committing generated documentation
Switch to the `gh-pages` (orphan) branch. The generated static website is placed in the `_gh_pages` folder, which is in the `.gitignore` on both branches, so the files are still there when switching branches.
```bash
git checkout gh-pages
```

Remove `index.html`, and the folders `css` & `docs` from the root of the project. Copy the folders from the `_gh_pages` folder to the root of your project. Commit all changes to the `gh-pages` 

#### Deploying to Github Pages
Push the `gh-pages` branch to Github. The new version should now be present on [Github Pages](https://aanzee.github.io/harbour)

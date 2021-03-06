# Running Harbour locally

In order to actively contribute to the project you can test your changes by running Harbour and the documentation website locally. The static [documentation website](https://harbour.aanzee.cc) is generated using [Jekyll](https://jekyllrb.com/). In order to use Jekyll, you probably have to update ruby on your machine first.

## Installing ruby/rbenv

First we install `rbenv`, so that we can easily install the correct version of `Ruby`. Installing `rbenv` on Mac OS can best be done using [Homebrew](https://brew.sh/).

```bash
brew install rbenv
```

We now need to add `rbenv` to the `PATH` and to your shell settings. Check which shell you are using (bash or zsh).

```bash
# If you use bash 
nano ~/.bash_profile

# If you use zsh:
nano ~/.zshrc

# Add the following two lines
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
```

Save the file using `ctrl + O` and exit `nano` using `ctrl + X`.

Restart your terminal for the changes to take effect.

Harbour has been tested with `Ruby 2.5.1`, but probably also works with other versions of Ruby. Install this version using the following command.

```
rbenv install 2.5.1
rbenv global 2.5.1
```

## Installing project

Checkout the project and open the root folder in your terminal. 

First you need to install the `bundler` and `jekyll` gems. After that you need to install the `node` packages.

```bash
gem install bundler jekyll
npm install
```

## Running the project

```bash
npm run start
```

A browser window should open and point to `http://localhost:4000`. `SCSS` linting and live reloading is implemented into the task. 

When running the project for the first time you need to save a `SCSS` file in order for the styling to work.
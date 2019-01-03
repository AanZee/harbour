echo "Installing bundle"
bundle install

echo "Installing global gulp"
npm install -g gulp-cli

echo "Installing npm packages"
npm install

echo "Building website"
npm run build

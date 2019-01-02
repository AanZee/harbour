echo "Installing bundle"
bundle install

echo "Installing npm packages"
npm install

echo "Building website"
npm run build

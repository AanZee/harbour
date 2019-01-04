echo "Installing awscli"
pip install --user awscli

echo "Installing global gulp"
npm install -g gulp-cli

echo "Installing bundle"
bundle install

echo "Installing npm packages"
npm install

echo "Building website"
JEKYLL_BASE_URL=/$TRAVIS_BRANCH npm run build

echo "Deploying branch to own folder"
aws configure set preview.cloudfront true
aws s3 sync ./_gh_pages/. s3://$AWS_BUCKET/$TRAVIS_BRANCH --acl public-read

echo "Invalidating cache"
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths /$TRAVIS_BRANCH/*

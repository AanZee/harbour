echo "Setting package version variable"
PACKAGE_VERSION=$(cat package.json \
| grep version \
| head -1 \
| awk -F: '{ print $2 }' \
| sed 's/[", ]//g')

echo "Installing awscli"
pip install --user awscli

echo "Installing global gulp"
npm install -g gulp-cli

echo "Installing bundle"
bundle install

echo "Installing npm packages"
npm install

echo "Building website"
npm run build

echo "Deploying master to S3 root"
aws configure set preview.cloudfront true
aws s3 sync ./_gh_pages/. s3://$AWS_BUCKET --acl public-read

echo "Invalidating cache"
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"

echo "Setting package version variable"
PACKAGE_VERSION=$(cat package.json \
| grep version \
| head -1 \
| awk -F: '{ print $2 }' \
| sed 's/[",]//g')

echo "Installing bundle"
bundle install

echo "Installing npm packages"
npm install

echo "Building website"
JEKYLL_BASE_URL=/$PACKAGE_VERSION npm run build # TODO: remove base url

S3_BUCKET_URL=$AWS_BUCKET/$PACKAGE_VERSION

echo "Deploying to S3"
aws configure set preview.cloudfront true
aws s3 sync ./_gh_pages/. s3://$S3_BUCKET_URL --acl public-read

echo "Invalidating cache"
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*" # TODO: tweak invalidation

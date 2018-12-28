echo "Installing bundle"
bundle install

echo "Installing npm packages"
npm install

echo "Building website"
JEKYLL_BASE_URL=/0.0.2 npm run build # TODO: remove base url

echo $S3_FOLDER
echo "Deploying to S3"
aws configure set preview.cloudfront true
aws s3 sync ./_gh_pages/. s3://$AWS_BUCKET/0.0.3 --acl public-read

echo "Invalidating cache"
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*" # TODO: tweak invalidation

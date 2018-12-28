echo "Building website"
JEKYLL_BASE_URL=/0.0.2 npm run build # TODO: remove base url

echo "Deploying to S3"
aws configure set preview.cloudfront true
aws s3 cp ./_gh_pages $AWS_BUCKET/0.0.3 --acl public-read --cache-control

echo "Invalidating cache"
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*" # TODO: tweak invalidation

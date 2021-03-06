module Jekyll

	class EnvironmentVariablesGenerator < Generator
		priority :highest

	def generate(site)
		site.config['env'] = ENV['JEKYLL_ENV'] || 'development'
		site.config['baseurl'] = ENV['JEKYLL_BASE_URL'] || ''
		site.config['branchName'] = ENV['TRAVIS_BRANCH'] || 'local environment'
		site.config['packageVersion'] = ENV['packageVersion'] || ''
		# Add other environment variables to `site.config` here...
		Jekyll.logger.debug site.config.to_yaml
		end
	end
end

module Jekyll

	class EnvironmentVariablesGenerator < Generator
		priority :highest

	def generate(site)
		site.config['env'] = ENV['JEKYLL_ENV'] || 'development'
		site.config['branchName'] = ENV['TRAVIS_BRANCH'] || ''
		site.config['packageVersion'] = ENV['packageVersion'] || 'reset'
		# Add other environment variables to `site.config` here...
		Jekyll.logger.debug site.config.to_yaml
		end
	end
end

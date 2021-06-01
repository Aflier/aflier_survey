$:.push File.expand_path('lib', __dir__)

# Maintain your gem's version:
require 'aflier_survey/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |spec|
  spec.name        = 'aflier_survey'
  spec.version     = AflierSurvey::VERSION
  spec.authors     = ['Simon Kiteley']
  spec.email       = ['simon@aflier.com']
  spec.homepage    = "https://www.aflier.com"
  spec.summary     = "Full on question handling and then do some math on them."
  spec.description = "Full on question handling and then do some math on them."
  spec.license     = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency 'rails', '>= 5.2.2'
  spec.add_dependency 'devise'

  spec.add_development_dependency 'devise'
  spec.add_development_dependency 'sqlite3', '1.4.0'
  spec.add_development_dependency 'simple_form', '~> 5.0.1'
  spec.add_development_dependency 'bootstrap', '~> 4.3.1'
  spec.add_development_dependency 'jquery-rails', '~> 4.3.1'
  # spec.add_development_dependency 'summernote-rails', '~> 0.8.10.0'
end

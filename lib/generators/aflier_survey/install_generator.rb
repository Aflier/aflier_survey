module AflierSurvey
  module Generators
    class InstallGenerator < Rails::Generators::Base
      source_root File.expand_path("../../templates", __FILE__)
      desc "Creates AflierSurvey initializer for your application"

      def copy_initializer
        template "aflier_survey_initializer.rb", "config/initializers/aflier_survey.rb"

        puts "Install complete! Truly Outrageous!"
      end
    end
  end
end
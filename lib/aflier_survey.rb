require "aflier_survey/engine"
require 'devise'

module AflierSurvey
  class << self
    attr_accessor :configuration
  end

  def self.configure
    self.configuration ||= Configuration.new
    yield(configuration)
  end

  class Configuration
    attr_accessor :calculations

    def initialize
      @option = 'default_option'
    end
  end
end

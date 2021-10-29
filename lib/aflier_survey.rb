require "aflier_survey/engine"
require 'devise'

module AflierSurvey
  ROOT_PATH = Pathname.new(File.join(__dir__, '..'))

  class << self
    def webpacker
      @webpacker ||= ::Webpacker::Instance.new(
        root_path: ROOT_PATH,
        config_path: ROOT_PATH.join('config/webpacker.yml')
      )
    end

    attr_accessor :configuration
  end

  def self.configure
    self.configuration ||= Configuration.new
    yield(configuration)
  end

  class Configuration
    attr_accessor :calculations
    attr_accessor :use_words
    attr_accessor :save_button_text
    attr_accessor :submit_button_text

    def initialize
      @option = 'default_option'
    end
  end
end

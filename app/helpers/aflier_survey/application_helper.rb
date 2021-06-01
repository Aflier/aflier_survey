module AflierSurvey
  module ApplicationHelper
    include ::Webpacker::Helper

    def current_webpacker_instance
      AflierSurvey.webpacker
    end

    def tick(value)
      if value
        raw '<i class="fas fa-check"></i>'
      else
        raw '<i class="fas fa-times"></i>'
      end
    end
  end
end

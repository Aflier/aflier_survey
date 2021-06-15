module AflierSurvey
  module IconsHelper
    def icons__trash
      return 'destroy' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-trash-alt"></i>'
    end

    def icons__down
      return 'down' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-thumbs-up"></i>'
    end

    def icons__up
      return 'up' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-thumbs-down"></i>'
    end
  end
end


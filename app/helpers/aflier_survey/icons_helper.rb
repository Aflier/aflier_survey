module AflierSurvey
  module IconsHelper
    def icons__trash
      return 'Destroy' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-trash-alt"></i>'
    end
  end
end


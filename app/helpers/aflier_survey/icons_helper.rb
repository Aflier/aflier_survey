module AflierSurvey
  module IconsHelper

    def icons__checked_box
      return '[X]' if AflierSurvey.configuration.use_words
      raw '<i class="far fa-check-square fa-fw"></i>'
    end

    def icons__square
      return '[ ]' if AflierSurvey.configuration.use_words
      raw '<i class="far fa-square"></i>'
    end

    def icons__radio(value, label)
      return raw "#{icons__radio_on} #{label}" if value
      raw "#{icons__radio_off} #{label}"
    end

    def icons__radio_on
      return '(0)' if AflierSurvey.configuration.use_words
      raw '<i class="far fa-dot-circle"></i>'
    end

    def icons__radio_off
      return '( )' if AflierSurvey.configuration.use_words
      raw '<i class="far fa-circle"></i>'
    end

    def icons__trash
      return 'destroy' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-trash-alt"></i>'
    end


    def icons__toggle_off
      return '(off)' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-toggle-off"></i>'
    end

    def icons__toggle_on
      return '(on)' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-toggle-on"></i>'
    end


    def icons__up
      return 'up' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-arrow-up"></i>'
    end

    def icons__down
      return 'down' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-arrow-down"></i>'
    end

    def icons__thumb_down
      return 'thumb down' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-thumbs-down"></i>'
    end

    def icons__thumb_up
      return 'thumb up' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-thumbs-up"></i>'
    end

    def icons__edit
      return 'edit' if AflierSurvey.configuration.use_words
      raw '<i class="fal fa-edit"></i>'
    end

  end
end


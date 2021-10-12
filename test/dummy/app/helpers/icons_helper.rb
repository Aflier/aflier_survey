
module IconsHelper

  def icons__radio(value, label)
    return raw "#{icons__radio_on} #{label}" if value
    raw "#{icons__radio_off} #{label}"
  end

  def icons__radio_on
    return '-->' if AflierSurvey.configuration.use_words
    raw '<i class="far fa-dot-circle"></i>'
  end

  def icons__radio_off
    return 'O' if AflierSurvey.configuration.use_words
    raw '<i class="far fa-circle"></i>'
  end

  def icons__toggle_off
    '(off)'
  end

  def icons__toggle_on
    '(on)'
  end

  def icons__trash
    return 'destroy' if AflierSurvey.configuration.use_words
    raw '<i class="fal fa-trash-alt"></i>'
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


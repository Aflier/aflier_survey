module AflierSurvey
  module ApplicationHelper
    def tick(value)
      if value
        raw '<i class="fas fa-check"></i>'
      else
        raw '<i class="fas fa-times"></i>'
      end
    end
  end
end

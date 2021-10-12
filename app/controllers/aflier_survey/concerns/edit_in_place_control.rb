# ONLY EDIT IN 'STIMULUS-BASE' V0.2.1
module EditInPlaceControl

  extend ActiveSupport::Concern

  def toggle_input
    value     = params[:value]
    attribute = params[:attribute].to_s

    @edit_in_place.update_attribute(attribute, value)
  end

end

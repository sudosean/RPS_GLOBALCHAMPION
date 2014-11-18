class RoundsController < ApplicationController
  def show
    @round = Round.find(params[:id])
  end

  def update
    round = Round.find(params[:id])
    round.update!(round_params)
    redirect_to round
  end

  private
    # Using a private method to encapsulate the permissible parameters
    # is just a good pattern since you'll be able to reuse the same
    # permit list between create and update. Also, you can specialize
    # this method with per-user checking of permissible attributes.
    def round_params
      params.require(:round).permit(:player_1_hand, :player_2_hand)
      # :player_1_id, :player_2_id, :player_1_hand, :player_2_hand could be the new allowed thing
    end
end

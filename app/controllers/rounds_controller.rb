class RoundsController < ApplicationController
  before_action :authenticate_user!

  def show
    @round = Round.find(params[:id])
  end

  def update
    round = Round.find(params[:id])
    round.update!(round_params)
    redirect_to round
  end

  def new
    open_round = Round.open.first
    if open_round
      # join a round
      open_round.update(player_2: current_user)
      @round = open_round
    else
      # else create a round
      @round = Round.new(player_1: current_user)
      unless @round.save!
        #TODO: render with errors
      end
    end
    # redirect to show
    redirect_to @round
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

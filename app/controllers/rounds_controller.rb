class RoundsController < ApplicationController
  def show
    @round = Round.find(params[:id])
  end


  def update
    # smart params
    # this should be a standard update
  end
end

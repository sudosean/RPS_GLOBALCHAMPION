class Round < ActiveRecord::Base
  belongs_to :user

  def player_number(current_user)
    1
  end

  # Do we have both players answers locked in?
  # do a unit test for what waiting and not waiting looks like
  def status
    if player_1_hand == nil || player_2_hand == nil
      "waiting"
    else
      "complete"
    end
  end

end # end of class

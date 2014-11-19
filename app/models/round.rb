class Round < ActiveRecord::Base
  # TODO: research belongs_to
  belongs_to :player_1, class_name: 'User'
  belongs_to :player_2, class_name: 'User'

  scope :open, -> { where(player_2_id: nil) }

  def player_number(current_user)
    (player_1 == current_user) ? 1 : 2
  end

  # Do we have both players answers locked in?
  # do a unit test for what waiting and not waiting looks like
  def status
   if player_1_hand == nil && player_2_hand == nil
      return "input"
    elsif player_1_hand == nil || player_2_hand == nil
      return "waiting"
    else
      "complete"
    end
  end

  def find_next_open_round
    Round.open.first
  end

<<<<<<< HEAD
end
=======
end # end of class
>>>>>>> master

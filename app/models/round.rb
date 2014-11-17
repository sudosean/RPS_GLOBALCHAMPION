class Round < ActiveRecord::Base
  belongs_to :user

  def player_number(current_user)
    '1'
  end
end

class Round < ActiveRecord::Base
  belongs_to :user

  def player_number(current_user)
    '1'
  end

  def status
    "waiting"
    # now this is hard-coded, but we have to make it consider whether we're waiting, meaning do we have both platers
    # do a unit test for what waiting and not waiting looks like
  end
end

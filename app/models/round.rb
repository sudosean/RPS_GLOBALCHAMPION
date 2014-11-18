class Round < ActiveRecord::Base
  belongs_to :user

  def player_number(current_user)
    1
  end

  def status
    "waiting"
    # now this is hard-coded to be "waiting", but we have to make it consider whether we're waiting, meaning: Do we have both players answers locked in?
    # do a unit test for what waiting and not waiting looks like
  end

end

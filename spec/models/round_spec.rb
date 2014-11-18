require 'rails_helper'

describe "Round" do
  describe "player_number" do
    round = Round.new
    it "should return 1" do
      expect(round.player_number('thisdoesntmatter')).to equal(1)
    end
  end
end
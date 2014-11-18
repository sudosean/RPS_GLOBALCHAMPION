require 'rails_helper'

describe "Round" do
  describe "when neither player has selected a hand" do
    round = Round.new
    it "should return waiting" do
      expect(round.status).to eq('waiting')
    end
  end # end of describe
  describe "When both players choose a hand" do
    round = Round.new
    round.update(player_1_hand: "rock", player_2_hand: "scissors")
    it "should return complete" do
      expect(round.status).to eq('complete')
    end
  end # end of second describe
  describe "When only one player has a hand played" do
    round = Round.new
    round.update(player_2_hand: "scissors")
    it "should return waiting" do
      expect(round.status).to eq('waiting')
    end
  end # end of third describe
end # end of describe round

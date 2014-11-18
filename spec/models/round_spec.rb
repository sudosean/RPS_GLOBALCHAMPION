require 'rails_helper'

describe "Round" do
  subject(:round) { Round.new }

  describe "when neither player has selected a hand" do
    it "should return input" do
      expect(round.player_1_hand).to be_nil
      expect(round.player_2_hand).to be_nil
      expect(round.status).to eq('input')
    end
  end # end of describe

  context "When both players choose a hand" do
    subject(:round) do
      Round.new(player_1_hand: "rock", player_2_hand: "scissors")
    end

    it "should return complete" do
      expect(round.player_1_hand).to_not be_nil
      expect(round.player_2_hand).to_not be_nil
      expect(round.status).to eq('complete')
    end
  end # end of second describe

  describe "When only one player has a hand played" do
    subject(:round) do
      Round.new(player_2_hand: "scissors")
    end
    it "should return waiting" do
      expect(round.player_1_hand).to be_nil
      expect(round.player_2_hand).to_not be_nil
      expect(round.status).to eq('waiting')
    end
  end # end of third describe
end # end of describe round

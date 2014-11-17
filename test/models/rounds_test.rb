require "test_helper"

describe Rounds do
  let(:rounds) { Rounds.new }

  it "must be valid" do
    rounds.must_be :valid?
  end
end

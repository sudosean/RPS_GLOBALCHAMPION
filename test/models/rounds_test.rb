require "test_helper"

describe Round do
  let(:round) { Round.new }

  it "must be valid" do
    round.must_be :valid?
  end

  it "should show a status of 'waiting'" do
    ro
  end

end

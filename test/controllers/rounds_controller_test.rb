require "test_helper"

describe RoundsController do
  it "should get show" do
    get :show
    assert_response :success
  end

end

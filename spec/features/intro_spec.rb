require "rails_helper"
describe "hello world", js: true do
  it "visits the root path" do
    visit '/main'
    expect(page).to have_content('Global Champion')
  end
end

describe "mini game", js: true do
  it "Clicks 'rock' and gets a response" do
    visit '/main'
    click_on "rock_button"
    expect(page).to have_content('!')
  end
end
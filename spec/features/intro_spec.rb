require "spec_helper"
describe "hello world", js: true do
  it "visits the root path" do
    visit '/main'
    expect(page).to have_content('Global Champion')
  end
end

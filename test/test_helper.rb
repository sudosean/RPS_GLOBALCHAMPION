ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'capybara/rails'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
extend MiniTest::Spec::DSL
  register_spec_type self do |desc|
    desc < ActiveRecord::Base if desc.is_a? Class
  end
  # MiniTest::Spec
  # class MiniTest::Spec
  #   include FactoryGirl::Syntax::Methods
  # end
end
end

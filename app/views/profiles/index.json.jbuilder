json.array!(@profiles) do |profile|
  json.extract! profile, :id, :username, :wins, :losses, :games
  json.url profile_url(profile, format: :json)
end

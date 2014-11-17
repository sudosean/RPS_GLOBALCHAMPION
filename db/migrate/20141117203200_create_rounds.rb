class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.integer :player_1_id
      t.integer :player_2_id
      t.string :player_1_hand
      t.string :player_2_hand
      t.string :datetime

      t.timestamps
    end
  end
end

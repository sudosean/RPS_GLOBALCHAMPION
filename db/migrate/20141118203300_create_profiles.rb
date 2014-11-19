class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :username
      t.integer :wins
      t.integer :losses
      t.integer :games

      t.timestamps
    end
  end
end

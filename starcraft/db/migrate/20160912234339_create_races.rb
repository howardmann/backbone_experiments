class CreateRaces < ActiveRecord::Migration
  def change
    create_table :races do |t|
      t.string :name
      t.string :homeworld
      t.text :description

      t.timestamps null: false
    end
  end
end

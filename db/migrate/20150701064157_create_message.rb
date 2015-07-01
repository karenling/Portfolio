class CreateMessage < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end

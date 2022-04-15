class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.text :name
      t.text :description
      t.text :date
      t.text :time
      t.text :timezone

      t.timestamps
    end
  end
end

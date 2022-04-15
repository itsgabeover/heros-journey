class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.text :title
      t.text :body
      t.text :tags

      t.timestamps
    end
  end
end

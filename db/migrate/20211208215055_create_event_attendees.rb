class CreateEventAttendees < ActiveRecord::Migration[6.1]
  def change
    create_table :event_attendees do |t|
      t.integer :user_id
      t.integer :event_id
      t.timestamps
    end
  end
end

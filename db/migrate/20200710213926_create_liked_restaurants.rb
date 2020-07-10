class CreateLikedRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :liked_restaurants do |t|
      t.integer :likedcount
      t.belongs_to :group, null: false, foreign_key: true
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end

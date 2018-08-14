class Exercise < ApplicationRecord
  belongs_to :user
  belongs_to :workout, dependent: :destroy

end

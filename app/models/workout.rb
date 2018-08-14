class Workout < ApplicationRecord
  before_action :authenticate_user
  belongs_to :user
  has_many :exercises

end

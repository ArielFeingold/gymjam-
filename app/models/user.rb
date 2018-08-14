class User < ApplicationRecord
  has_secure_password
  has_many :workouts
  has_many :exercises
  has_many :stats

  validates :email, :password, presence: true, on: :create
  validates :name, presence: true
  validates :password, confirmation: true
  validates :email, uniqueness: true
  validates :about, presence: true, on: :update

end

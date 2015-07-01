class Message < ActiveRecord::Base
  validates :name, :email, :body, presence: true
end

class MessageMailer < ApplicationMailer
  default from: "admin@twinkeiset.com"

  def notification_email(name, email, body)
    @name = name
    @email = email
    @body = body
    mail(to: 'karensling@gmail.com', subject: 'message from twinkieset.com')
  end
end

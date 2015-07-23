class MessageMailer < ApplicationMailer
  default from: "admin@karenling.net"

  def notification_email(name, email, body)
    @name = name.html_safe
    @email = email.html_safe
    @body = body.html_safe
    mail(to: 'karensling@gmail.com', subject: 'message from karenling.net')
  end
end

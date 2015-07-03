class MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)

    if @message.save
      msg = MessageMailer.notification_email(@message.name, @message.email, @message.body)
      msg.deliver_now
      render json: @message, status: :ok
    else
      render json: @message.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
    def message_params
      params.require(:message).permit(:name, :email, :body)
    end
end

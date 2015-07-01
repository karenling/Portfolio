class MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)

    if @message.save
      flash[:notice] = ["Sent!"]
      render json: @message, status: :ok
    else
      flash[:errors] = ["Errors"]
      render json: @message.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
    def message_params
      params.require(:message).permit(:name, :email, :body)
    end
end

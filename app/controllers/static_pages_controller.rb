class StaticPagesController < ApplicationController
  def root
    @message = Message.new
  end
end

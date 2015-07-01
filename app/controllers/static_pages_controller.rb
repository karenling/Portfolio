class StaticPagesController < ApplicationController
  def root
    @recent_post = Post.first
  end
end

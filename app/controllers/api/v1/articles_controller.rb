class Api::V1::ArticlesController < ApplicationController
  before_action :find_article, :only => [:show, :update, :destroy]

  def index
    @articles = Article.all
    json_response(@articles)
  end

  def show
    json_response(@article)
  end

  def create
    @article = Article.create!(article_params)
    json_response(@article, :created)
  end

  def update
    @article.update(article_params)
    head :no_content
  end

  def destroy
    @article.destroy
    head :no_content
  end

  private

  def article_params
    params.require(:article).permit(:title, :author, :url, :date)
  end

  def find_article
    @article = Article.find(params[:id])
  end
end

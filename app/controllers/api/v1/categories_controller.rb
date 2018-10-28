class Api::V1::CategoriesController < ApplicationController
  before_action :find_category, :only => [:show, :update, :destroy]

  def index
    @categories = Category.all
    json_response(@categories)
  end

  def show
    json_response(@category)
  end

  def create
    @category = Category.create!(category_params)
    json_response(@category, :created)
  end

  def update
    @category.update(category_params)
    head :no_content
  end

  def destroy
    @category.destroy
    head :no_content
  end

  private

  def category_params
      params.require(:category).permit(:name, :description)
  end

  def find_category
    @category = Category.find(params[:id])
  end
end

class Api::V1::StashesController < ApplicationController
  before_action :find_stash, :only => [:show, :update, :destroy]

  def index
    @stashes = Stash.all
    json_response(@stashes)
  end

  def show
    json_response(@stash)
  end

  def create
    @stash = Stash.create!(stash_params)
    json_response(@stash, :created)
  end

  def update
    @stash.update(stash_params)
    head :no_content
  end

  def destroy
    @stash.destroy
    head :no_content
  end

  private

  def stash_params
      params.require(:stash).permit(:name, :description)
  end

  def find_stash
    @stash = Stash.find(params[:id])
  end
end

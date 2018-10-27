require 'test_helper'

class Api::V1::ArticlesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get articles_index_url
    assert_response :success
  end

  test "should get show" do
    get articles_show_url
    assert_response :success
  end

  test "should get create" do
    get articles_create_url
    assert_response :success
  end

  test "should get update" do
    get articles_update_url
    assert_response :success
  end

  test "should get destroy" do
    get articles_destroy_url
    assert_response :success
  end

end

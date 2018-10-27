require 'test_helper'

class Api::V1::StashesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_stashes_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_stashes_show_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_stashes_create_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_stashes_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_stashes_destroy_url
    assert_response :success
  end

end

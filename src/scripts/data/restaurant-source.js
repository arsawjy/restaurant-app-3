import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }
}

export default RestaurantSource;

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section id="explore">
        <div class="explore-text">
          <h1 class="explore-text-title">
          Favorites Restaurant!
          </h1>
        </div>
        <div class="restaurant"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('.restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorite;

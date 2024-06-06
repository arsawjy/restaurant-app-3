import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createDetailRestaurantTemplate,
  createAddReviewTemplate,
  createReviewRestaurantTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../globals/config';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
        <div class="detail-content-wrapper"></div>
        <div class="likeButtonContainer"></div>

        </section>
        <section class="add-review"></section>
        <section class="review"></section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const detailRestaurantContainer = document.querySelector('.detail-content-wrapper');
    const addReviewRestaurantContainer = document.querySelector('.add-review');
    const reviewRestaurantContainer = document.querySelector('.review');

    detailRestaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant);
    addReviewRestaurantContainer.innerHTML = createAddReviewTemplate;
    reviewRestaurantContainer.innerHTML = createReviewRestaurantTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        address: restaurant.address,
        menu: restaurant.menu,
        description: restaurant.description,
        backdrop_path: restaurant.backdrop_path,
        vote_average: restaurant.vote_average,
      },
    });

    const submitReview = document.querySelector('#submitButton');

    submitReview.addEventListener('click', (event) => {
      event.preventDefault();

      const customerName = document.querySelector('#inputName').value;
      const customerReview = document.querySelector('#inputReview').value;

      fetch(CONFIG.BASE_REVIEW_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: restaurant.id,
          name: customerName,
          review: customerReview,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};

export default Detail;

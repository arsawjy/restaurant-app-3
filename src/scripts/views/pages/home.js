import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section id="hero">
        <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url('images/heros/hero-image_1.jpg');">
        <div class="heroinner">
          <h1 class="herotitle">WhereToEat?</h1>
          <p class="herosub">
            We compile the best restaurant <br />
            just for you.
          </p>
        </div>
      </div>
        </section>
        <section id="explore">
            <div class="explore-title">
                <h1 class="explore-title-text" id="main">
                Explore Here!
                </h1>
            </div>
            <div class="restaurant"></div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('.restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;

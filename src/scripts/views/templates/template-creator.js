import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => `
<article class= "restaurant-list">
    <div class="restaurant-list-image">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Foto Restaurant" crossorigin="anonymous"/>
        <div class="restaurant-list-city">
        <p>${restaurant.city}</p>
    </div>
    <div class="restaurant-list-rating">
        <i class="fa-solid fa-star"></i>
        <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant-list-content">
        <div class="restaurant-list-title">
            <h2>${restaurant.name}</h2>
        </div>
        <div class="restaurant-list-desc">
            <p>${restaurant.description}</p>
        </div>
        <div class="restaurant-list-button">
            <a href="/#/detail/${restaurant.id}" class="detail-button">Detail</a>
        </div>
    </div>
    </div>
</article>
`;

const createDetailRestaurantTemplate = (restaurant) => `
    <section id="detail" class="detail">
        <div class="detail-text">
            <h1 class="detail-text-title">${restaurant.name}</h1>
        </div>
        <article class="detail-content">
            <div class="detail-content-image">
                <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restaurant" crossorigin="anonymous"/>
                <div class="detail-content-city">
                    <p>${restaurant.city}</p>
                </div>
                <div class="detail-content-rating">
                    <p>${restaurant.rating}</p>
                </div>
            </div>

            <div class="detail-content-info">
                <div class="detail-content-address">
                    <p>Address : ${restaurant.address}</p>
                </div>
                <div class="detail-content-categories">
                    <p>Categories : ${restaurant.categories.map((categories) => categories.name)}</p>
                </div>
                <div class="detail-content-food">
                    <p>Foods : ${restaurant.menus.foods.map((food) => food.name)}</p>
                </div>
                <div class="detail-content-drink">
                    <p>Drinks : ${restaurant.menus.drinks.map((food) => food.name)}</p>
                </div>
                <div class="detail-content-desc">
                    <p>
                        ${restaurant.description}
                    </p>
                </div>
            </div>
        </article>
    </section>
`;

const createAddReviewTemplate = `
<div class="add-review-card-wrapper">
  <div class="add-review-card">
    <form action="">
      <h3>Add Review</h3>
      <div class="form-group">
        <input type="text" name="input-name" id="inputName" placeholder="Name" size="55" required>
      </div>
      <div class="form-group">
        <textarea name="input-review" id="inputReview" size="55" cols="50" rows="5" required placeholder="Tell Us How You Think"></textarea>
      </div>
      <div class="form-button">
        <button id="submitButton">Submit</button>
      </div>
    </form>
  </div>
</div>
`;

const createReviewRestaurantTemplate = (restaurant) => `
${restaurant.customerReviews.map((review) => `
    <div class="review-card">
        <div class="review-card-name">
            <p>${review.name}</p>
        </div>
        <div class="review-card-date">
            <p>${review.date}</p>
        </div>
        <div class="review-card-review">
            <p>${review.review}</p>
        </div>
    </div>
`).join('')}
`;

const createLikeButton = () => `
    <button aria-label="like" id="likeButton" class="like">
        <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButton = () => `
    <button aria-label="liked" id="likeButton" class="like">
        <i class="fa-solid fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantListTemplate,
  createDetailRestaurantTemplate,
  createAddReviewTemplate,
  createReviewRestaurantTemplate,
  createLikeButton,
  createLikedButton,
};

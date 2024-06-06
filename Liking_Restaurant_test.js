const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('test liking and unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.detail-button');
  const titleRestaurant = await I.grabTextFrom('.restaurant-text-title');
  I.click(locate('.detail-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  pause();

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-text-title');

  assert.strictEqual(titleRestaurant, likedRestaurantTitle);

  I.seeElement('.detail-button');
  const likedRestaurant = locate('.detail-button').first();
  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSee(likedRestaurantTitle);
});

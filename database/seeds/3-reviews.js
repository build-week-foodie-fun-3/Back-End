exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { restaurant_id: 1, typeofcusine: "Mexican-American", menuitem: "Beefy Frito Burrito", photourl: "https://www.tacobell.com/images/22169_beefy_crunch_burrito_269x269.jpg", price: 1.99, itemrating: 4, itemreview: "it was a crunchy taco that was good." }
      ]);
    });
};

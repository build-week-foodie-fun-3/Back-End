exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('restaurants').insert([
        { name: "Taco Bell", typeofcusine: "Mexican-American", location: "New York City", hours: "8AM-10PM", rating: "3/5", photourl: "https://specials-images.forbesimg.com/imageserve/5d0baf20142c50000a3389fd/960x0.jpg?fit=scale" }
      ]);
};

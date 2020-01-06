exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "admin",
          password: "$2a$10$YMJ5Jm9cemF8AW0OMmYTvuGLq2R.IGirbSL1ag9y1MJWiPt6iAn0S",
          location: "lambda",
          email: "admin@email.com"
       },
      ]);
    });
};

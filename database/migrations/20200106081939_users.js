exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      
      users.increments();
  
      users
        .string('username', 128)
        .notNullable()
        .unique();

      users
        .string('password', 128)
        .notNullable();

      users
        .string('location', 128)
        .notNullable()
        .unique();

        users
        .string('email', 128)
        .notNullable()
        .unique();
    })

    .createTable('restaurants', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
        tbl.string('typeofcusine', 128)
        tbl.string('location', 128)
        tbl.string('hours', 128)
        tbl.string('rating', 128);
        tbl.string('photourl');
    })

    .createTable('reviews', tbl => {
        tbl.increments();
        tbl
        .integer('restaurant_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('restaurants')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
        tbl.string('typeofcusine', 128)
        tbl.string('menuitem', 128)
        tbl.string('photourl');
        tbl.string('price')
        tbl.integer('itemrating')
        tbl.string('itemreview', 500)
    })

  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('reviews')
    .dropTableIfExists('resturants')
    .dropTableIfExists('users')
  };
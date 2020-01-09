const db = require('../database/dbConfig.js');

module.exports = {
  add,
  findById,
  getResturants,
  update,
  remove,
  getAllResturants
};

function update(changes, id) {
    return db("restaurants")
      .where({ id })
      .update(changes, "*");
  }

function getAllResturants() {
    return db('restaurants')
  }

  function getResturants(id) {
    return db('restaurants as b')
    .join("users as a", "a.id", "b.user_id")
    .select( 'b.id', 'b.name', 'b.typeofcuisine', 'b.location', 'b.hours', 'b.rating', 'b.photourl')
    .where("user_id", id);
  }  

function findById(id) {
    return db('restaurants')
      .where({ id })
      .first();
  }

async function add(restaurant) {
  const [id] = await db('restaurants').insert(restaurant, "id");

  return findById(id);
}

function remove(id) {
    return db("restaurants")
      .where({ id })
      .del();
  }
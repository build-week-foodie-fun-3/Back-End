const db = require('../database/dbConfig.js');

module.exports = {
  add,
  findById,
  getReviews,
  update,
  remove
};
async function add(review) {
    const [id] = await db('reviews').insert(review, "id");
  
    return findById(id);
  }

function findById(id) {
    return db('reviews')
      .where({ id })
      .first();
  }

function getReviews(id) {
    return db('reviews as b')
    .join("restaurants as a", "a.id", "b.restaurant_id")
    .select('a.name', 'b.id', 'b.menuitem', 'b.typeofcuisine', 'b.photourl', 'b.price', 'b.itemrating', 'b.itemreview')
    .where("restaurant_id", id);
  }

function update(changes, id) {
    return db("reviews")
      .where({ id })
      .update(changes, "*");
}

function remove(id) {
    return db("reviews")
      .where({ id })
      .del();
  }
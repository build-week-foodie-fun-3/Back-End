const db = require('../database/dbConfig.js');

module.exports = {
  add,
  findById,
  getResturants,
  update,
  remove
};

function update(changes, id) {
    return db("restaurants")
      .where({ id })
      .update(changes, "*");
  }

function getResturants() {
    return db('restaurants')
  }

function findById(id) {
    return db('restaurants')
      .where({ id })
      .first();
  }

async function add(restaurant) {
  const [id] = await db('restaurants').insert(restaurant);

  return findById(id);
}

function remove(id) {
    return db("restaurants")
      .where({ id })
      .del();
  }
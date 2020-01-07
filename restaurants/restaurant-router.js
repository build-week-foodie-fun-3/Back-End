const router = require("express").Router();

const Restaurant = require("./restaurant-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.post("/restaurant", restricted, (req, res) => {
    let restaurant = req.body;

    Restaurant.add(restaurant)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  router.get('/restaurant/:id', (req, res) => {
    const { id } = req.params;
    Restaurant.getResturants(id)
      .then(recs => {
        res.status(200).json(recs)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get resturants' });
      });
  })

  router.get('/restaurant', (req, res) => {
    Restaurant.getAllResturants()
      .then(recs => {
        res.status(200).json(recs)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get resturants' });
      });
  })


  router.put('/restaurant/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Restaurant.findById(id)
    .then(restaurant => {
      if (restaurant) {
        Restaurant.update(changes, id)
        .then(updatedRestaurant => {
          res.json(updatedRestaurant);
        });
      } else {
        res.status(404).json({ message: 'Could not find restaurant with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update restaurant' });
    });
  });

  router.delete('/restaurant/:id', (req, res) => {
    const { id } = req.params;
  
    Restaurant.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find restaurant with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete restaurant' });
    });
  });


module.exports = router;
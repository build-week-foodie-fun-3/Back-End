const router = require("express").Router();

const Review = require("./review-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.post("/review", restricted, (req, res) => {
    let review = req.body;

    Review.add(review)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;


router.get('/:id/reviews', (req, res) => {
    const { id } = req.params;
  
    Review.getReviews(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({ message: 'Could not find steps for given scheme' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps' });
    });
  });

  router.put('/review/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Review.findById(id)
    .then(review => {
      if (review) {
        Review.update(changes, id)
        .then(updatedReview => {
          res.json(updatedReview);
        });
      } else {
        res.status(404).json({ message: 'Could not find review with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update review' });
    });
  });

  router.delete('/review/:id', (req, res) => {
    const { id } = req.params;
  
    Review.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find review with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete review' });
    });
  });
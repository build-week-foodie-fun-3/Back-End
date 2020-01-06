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
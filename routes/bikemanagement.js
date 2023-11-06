const router = require('express').Router();
let BikeManagment = require('../models/bikemanagment.model');

router.route('/').get((req, res) => {
    BikeManagment.find()
      .then(bikemanagment => res.json(bikemanagment))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    const Username = req.body.Username;
    const Model = req.body.Model;
    const Description = req.body.Description;
    const Colour = req.body.Colour;
    const Price = Number(req.body.Price);
    const Mileage = Number(req.body.Mileage);
    const Features = req.body.Features;
  
    const newExercise = new Exercise({
      Username,
      Model,
      Description,
      Colour,
      Price,
      Mileage,
      Features,
    });
  
    newExercise.save()
    .then(() => res.json('BikeManagment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    BikeManagment.findById(req.params.id)
      .then(bikemanagment => res.json(bikemanagment))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    BikeManagment.findByIdAndDelete(req.params.id)
      .then(() => res.json('BikeManagment deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    BikeManagment.findByIdAndDelete(req.params.id)
    .findById(req.params.id)
      .then(bikemanagment => {
        bikemanagment.Username = req.body.Username;
        bikemanagment.Model = req.body.Model;
        bikemanagment.Description = req.body.Description;
        bikemanagment.Colour = req.body.Colour;
        bikemanagment.Price = Number(req.body.Price);
        bikemanagment.Mileage = Number(req.body.Mileage);
        bikemanagment.Features = req.body.Features;
      
  
        bikemanagment.save()
          .then(() => res.json('BikeManagment updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;
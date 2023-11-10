const router = require('express').Router();
let BikeManagment = require('../models/bikemanagment.model');

router.route('/').get((req, res) => {
    BikeManagment.find()
      .then(bikemanagment => res.json(bikemanagment))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    const Name = req.body.Name;
    const Model = req.body.Model;
    const Description = req.body.Description;
    const Colour = req.body.Colour;
    const Price = Number(req.body.Price);
    const Mileage = Number(req.body.Mileage);
    const Features = req.body.Features;
  
    const newBikeManagment = new BikeManagment({
      Name,
      Model,
      Description,
      Colour,
      Price,
      Mileage,
      Features,
    });
  
    newBikeManagment.save()
    .then(() => res.json('Bike added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    BikeManagment.findById(req.params.id)
      .then(bikemanagment => res.json(bikemanagment))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    BikeManagment.findByIdAndDelete(req.params.id)
      .then(() => res.json('Bike deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').put((req, res) => {
    BikeManagment.findById(req.params.id)
      .then(bikemanagment => {
        bikemanagment.Name = req.body.Name;
        bikemanagment.Model = req.body.Model;
        bikemanagment.Description = req.body.Description;
        bikemanagment.Colour = req.body.Colour;
        bikemanagment.Price = Number(req.body.Price);
        bikemanagment.Mileage = Number(req.body.Mileage);
        bikemanagment.Features = req.body.Features;
      
        bikemanagment.save()
          .then(() => res.json('Bike updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  
  module.exports = router;
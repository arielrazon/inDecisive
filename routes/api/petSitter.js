const router = require("express").Router();
const db = require("../../models");

//Route to create a PetSitter
router.route("/save")
  .post(function(req, res){
    db.PetSitter.create(req.body).then(function(createdSitter){
      res.json({msg: `${createdSitter.name} created in the database`})
    })
  })

  //Route to retrieve all PetSitters
router.route("/all")
  .get(function (req, res){
    db.PetSitter.find().then(function(petSitter){
      res.json({petSitter:petSitter})
    })
  })
  
//Route to reterive petSitter Profile
  router.route("/:id")
  .get(function(req, res){
    db.PetSitter.find({_id:req.params.id}).then(function(sitterProfile){
      res.json({sitterProfile:sitterProfile})
    })
  })

router.route("/search/:city")
  .get(function (req, res){
    db.PetSitter.find({city: req.params.city}).then(function(serchedSitters){
      res.json({serchedSitters:serchedSitters})
    })
  })

module.exports = router;
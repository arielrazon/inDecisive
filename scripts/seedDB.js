const db = require("../models");


module.exports = {
  seedPetSitters: function() {
    const petSitterSeed = [
      {
       name: "Lawrence A Porter",
       profilePhoto: "/images/PetSitter01.jpeg",
       age: 25,
       rating: 3,
       city: "Miami",
       price: 185,
       summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
       phone: "786-248-8464",
       email: "LawrencePorter@gmail.com",
       yearsOfExperience: "5",
       typesOfAnimals: "Dogs, Cats, Iguanas",
       availability: "Weekends Only"
      },
      {
        name: "Ashwini Kapoor",
        profilePhoto: "/images/PetSitter02.jpeg",
        age: 22,
        rating: 4,
        city: "Miami",
        price: 139,
        summary: "Can't wait to take care of your pet!",
        phone: "305-866-4391",
        email: "A.Kapoor@gmail.com",
        yearsOfExperience: "7",
        typesOfAnimals: "Dogs, Birds",
        availability: "Weekdays Only"
       },
       {
        name: "Sarah McCallister",
        profilePhoto: "/images/PetSitter03.jpeg",
        age: 29,
        rating: 5,
        city: "Fort Lauderdale",
        price: 175,
        summary: "Taking care of pets as if they were my own is my motto.",
        phone: "954-673-4850",
        email: "Sarah.McCallister@hotmail.com",
        yearsOfExperience: "8",
        typesOfAnimals: "Dogs, Cats, Rabbits",
        availability: "Mondays, Tuesdays"
       },
       {
        name: "Michael Vazquez",
        profilePhoto: "/images/PetSitter04.jpeg",
        age: 19,
        rating: 4,
        city: "Santa Clara",
        price: 218,
        summary: "I have several years of experience taking care of reptiles.  Call me for more info!",
        phone: "408-566-8057",
        email: "MichaelVazquez@gmail.com",
        yearsOfExperience: "5",
        typesOfAnimals: "Lizards, Iguanas, Snakes, Frogs",
        availability: "Fridays, Saturdays"
       },
       {
        name: "Tyron Reeves",
        profilePhoto: "/images/PetSitter05.jpeg",
        age: 35,
        rating: 4,
        city: "New York",
        price: 235,
        summary: "Need to take your dog for a walk but stuck in the office?  Count on me!",
        phone: "917-909-1460",
        email: "TyronR@gmail.com",
        yearsOfExperience: "5",
        typesOfAnimals: "Dogs, Cats",
        availability: "Weekends Only"
       },
       {
        name: "Shane Boyle",
        profilePhoto: "/images/PetSitter06.jpeg",
        age: 26,
        rating: 5,
        city: "Fort Lauderdale",
        price: 197,
        summary: "I've had so many pets and taken care of so many over the course of my lifetime.  Can't wait to take care of yours!",
        phone: "954-636-5336",
        email: "Shane.Boyle@gmail.com",
        yearsOfExperience: "10",
        typesOfAnimals: "Ferrets, Cats",
        availability: "Weekends Only"
       },
       {
        name: "Wanda J Denny",
        profilePhoto: "/images/PetSitter07.jpeg",
        age: 34,
        rating: 3,
        city: "Boston",
        price: 210,
        summary: "Don't let the low rating fool you.  I'm the best sitter there is on here!",
        phone: "617-478-5413",
        email: "WandaJDenny@gmail.com",
        yearsOfExperience: "4",
        typesOfAnimals: "Dogs, Bunnies, Birds",
        availability: "Weeknights Only"
       },
       {
        name: "Anthony Rudolph",
        profilePhoto: "/images/PetSitter08.jpeg",
        age: 38,
        rating: 5,
        city: "New York",
        price: 210,
        summary: "Call me for more info on how I can take care of your pet!",
        phone: "917-881-7814",
        email: "Anthony.Rudolph@gmail.com",
        yearsOfExperience: "5",
        typesOfAnimals: "Dogs, Snakes, Birds",
        availability: "Weekends Only"
       },
       {
        name: "Leila Zhang",
        profilePhoto: "/images/PetSitter09.jpeg",
        age: 25,
        rating: 5,
        city: "Miami",
        price: 250,
        summary: "Your pet will receive the utmost love, care and attention with me.  Message me for more details!",
        phone: "218-854-8860",
        email: "Leila.Zhang@gmail.com",
        yearsOfExperience: "12",
        typesOfAnimals: "Dogs, Cats, Bunnies, Birds",
        availability: "Weeknights Only"
       },
       {
        name: "Marissa Stevenson",
        profilePhoto: "/images/PetSitter10.jpeg",
        age: 27,
        rating: 5,
        city: "New York",
        price: 270,
        summary: "I volunteer at the local animal shelter in my downtime.  Any dog or cat will feel at home at my own.",
        phone: "646-389-8602",
        email: "Marissa.S@gmail.com",
        yearsOfExperience: "7",
        typesOfAnimals: "Dogs, Cats",
        availability: "Monday, Wednesday, Thursday"
       }
    ];
    db.PetSitter.deleteMany({})
      .then(() => db.PetSitter.collection.insertMany(petSitterSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        // process.exit(0); --- Causes node to exit now allowing requests to come in.
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  }
}
require('dotenv').config();

const mongoose = require('mongoose');
const { Schema } = mongoose;

const mySecret = process.env['MONGO_URI'];
console.log(mySecret);
//para conectar sacar las comillas del valor de 'MONGO_URI'= uri
mongoose.connect(mySecret, { useNewUrlParser: true, useUnifiedTopology: true });

//crear un esquema con mongoose:
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
//fin del esquema

//crear un modelo de nombre 'Person' a partir del esquema 'personSchema':
/** 3) Create and Save a Person */
var Person = mongoose.model('Person', personSchema);

var createAndSavePerson = function(done) {
  var janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  janeFonda.save(function(err, data) {
    if (err) {return console.error(err)};
    done(null, data)
  });
};


//array con varias personas:
var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  
  Person.create(arrayOfPeople, function(err,people){
    if(err) return console.error(err);
  
  done(null, people)
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName},function(err,nameOf){
    if(err) console.error(err);
    done(null, nameOf);
  })
  
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food},function(err, favFood){
    if(err)return console.error(err);
    done(null, favFood);
  })
  
};

const findPersonById = (personId, done) => {

  Person.findById({_id: personId},function(err, id){
    if(err)return console.error(err);
    done(null, id);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

const findTheOldest = function(people) {
  let oldestPerson = {
    age: 0,
    name: "al"
  };

  people.forEach(person => {
    if (calcAge(person.yearOfBirth, person.yearOfDeath) > oldestPerson.age) {
      oldestPerson.name = person.name;
      oldestPerson.age = calcAge(person.yearOfBirth, person.yearOfDeath);
    }
  });

  return oldestPerson;
};
const calcAge = function (birthYear, deathYear) {
  const today = new Date ();
  const thisYear = today.getFullYear();

  
  deathYear = deathYear ?? thisYear;
  const age = deathYear - birthYear;
  return age;
};

// Do not edit below this line
module.exports = findTheOldest;

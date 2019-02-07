const faker = require("faker");

function createFakeDonor() {
  return {
    name: faker.name.findName(),
    userID: Math.floor(Math.random() * 3) + 1,
    email: faker.internet.email(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    zip: faker.random.number(),
    lastContacted: faker.date.month(),
    contactMethod: "email"
  };
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("donors")
    .del()
    .then(function() {
      //userskn
      const fakeDonors = [];
      const numberOfDonors = 100;
      for (let i = 0; i < numberOfDonors; i++) {
        fakeDonors.push(createFakeDonor());
      }
      // Inserts seed entries
      return knex("donors").insert(fakeDonors);
    });
};

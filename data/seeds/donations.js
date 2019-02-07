const faker = require("faker");

function createFakeDonation() {
  return {
    donationAmount: faker.random.number(),
    donationLocation: faker.address.city(),
    donorID: Math.floor(Math.random() * 99) + 1
  };
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("donations")
    .del()
    .then(function() {
      //donations
      const fakeDonations = [];
      const numberOfDonations = 200;
      for (let i = 0; i < numberOfDonations; i++) {
        fakeDonations.push(createFakeDonation());
      }
      // Inserts seed entries
      return knex("donations").insert(fakeDonations);
    });
};

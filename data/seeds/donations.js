exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("donations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("donations").insert([
        {
          id: 1,
          donationLocation: "location 1",
          donorID: "1",
          donationAmount: 786.55
        },
        {
          id: 2,
          donationLocation: "location 2",
          donorID: "2",
          donationAmount: 1000
        },
        {
          id: 3,
          donationLocation: "location 1",
          donorID: "3",
          donationAmount: 1550
        },
        {
          id: 4,
          donationLocation: "location 4",
          donorID: "2",
          donationAmount: 22.5
        }
      ]);
    });
};

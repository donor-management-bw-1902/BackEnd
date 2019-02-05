exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("donors")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("donors").insert([
        {
          id: 1,
          name: "donor 1",
          userID: "2",
          email: "email@gmail.com",
          city: "New York",
          address: "11111 north st",
          zip: "12345",
          lastContacted: "feb 9 2016",
          contactMethod: "post"
        },
        {
          id: 2,
          name: "donor 2",
          userID: "3",
          email: "email2@gmail.com",
          city: "New York",
          address: "11123 north st",
          zip: "1234544",
          lastContacted: "sep 9 2009",
          contactMethod: "email"
        },
        {
          id: 3,
          name: "donor 3",
          userID: "2",
          email: "email4@gmail.com",
          city: "Chicago",
          address: "12 south st",
          zip: "12111",
          lastContacted: "aug 5 2018",
          contactMethod: "phone"
        }
      ]);
    });
};

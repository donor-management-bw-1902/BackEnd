exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "admin1",
          password:
            "$2a$12$bPK.asvR5kf1Rq2.LNqoRe9YQ5s2YI./wiJkWU6APLaNvhHMzhtki",
          isAdmin: true,
          name: "boss man"
        },
        {
          id: 2,
          username: "user1",
          password:
            "$2a$12$bPK.asvR5kf1Rq2.LNqoRe9YQ5s2YI./wiJkWU6APLaNvhHMzhtki",
          isAdmin: false,
          name: "worker man"
        },
        {
          id: 3,
          username: "user2",
          password:
            "$2a$12$bPK.asvR5kf1Rq2.LNqoRe9YQ5s2YI./wiJkWU6APLaNvhHMzhtki",
          isAdmin: false,
          name: "worker man 2"
        }
      ]);
    });
};

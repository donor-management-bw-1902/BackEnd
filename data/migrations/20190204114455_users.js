exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", users => {
    users.increments();
    users
      .string("username", 255)
      .notNullable()
      .unique();
    users.string("name", 255).notNullable();
    users.string("password", 255).notNullable();
    users.boolean("isAdmin").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};

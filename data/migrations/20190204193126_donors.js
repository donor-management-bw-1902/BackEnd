exports.up = function(knex, Promise) {
  return knex.schema.createTable("donors", donors => {
    donors.increments();
    donors.string("name", 255).notNullable();
    donors.integer("userID").unsigned();
    donors.foreign("userID").references("users.id");
    donors
      .string("email", 255)
      .unique()
      .defaultsTo(null);
    donors.string("city", 255).defaultsTo(null);
    donors.string("address", 255).defaultsTo(null);
    donors.integer("zip").defaultsTo(null);
    donors.string("lastContacted").defaultsTo(null);
    donors.string("contactMethod").defaultTo(null);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("donors");
};

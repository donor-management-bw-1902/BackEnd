exports.up = function(knex, Promise) {
  return knex.schema.createTable("donations", donations => {
    donations.increments();
    donations.string("donationLocation", 255).notNullable();
    donations.integer("donorID").unsigned();
    donations.foreign("donorID").references("donors.id");
    donations.float("donationAmount").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("donations");
};

const db = require("../data/dbConfig");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/users", getUsers);
};

function register(req, res) {
  const creds = req.body;
  db("users")
    .insert(creds)
    .then(id => res.status(201).json({ id: id[0] }))
    .catch(err => res.status(500).json(err));
}

function login(req, res) {
  const creds = req.body;
  db("users")
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && user.password == creds.password) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ error: "Inccorect username or password." });
      }
    })
    .catch(err => res.status(500).json({ message: "server error", err }));
}

function getUsers(req, res) {
  db("users")
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

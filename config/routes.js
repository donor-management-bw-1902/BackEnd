const db = require("../data/dbConfig");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.JWT_SECRET || "secret";
const { authenticate } = require("../auth/jwtAuth.js");
//ENDPOINTS
module.exports = server => {
  server.post("/api/register", authenticate, register);
  server.post("/api/login", login);
  server.get("/api/donors", authenticate, getDonors);
  server.post("/api/donors", authenticate, addDonor);
  server.get("/api/donations", authenticate, getDonations);
  server.post("/api/donations", authenticate, addDonation);
  //server.post("/api/dev/users")
};
//TOKEN MAKER
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    isAdmin: user.isAdmin
  };
  const secret = jwtSecret;
  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, secret, options);
}
//ENDPOINT FUNCTIONS
function register(req, res) {
  const creds = req.body;

  const decodedToken = req.decoded;
  if (decodedToken.isAdmin) {
    if (creds.username && creds.password) {
      creds.password = bcrypt.hashSync(creds.password, 12);
      db("users")
        .insert(creds)
        .then(id => res.status(201).json({ id: id[0] }))
        .catch(err => res.status(500).json(err));
    } else {
      res
        .status(401)
        .json({ message: "please insert a user name and password." });
    }
  } else {
    res.status(400).json({ message: "Not autherized to create users." });
  }
}

function login(req, res) {
  const creds = req.body;
  db("users")
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ token: token, isAdmin: user.isAdmin });
      } else {
        res.status(401).json({ message: "Inccorect username or password." });
      }
    })
    .catch(err => res.status(500).json({ message: "server error", err }));
}

function getDonors(req, res) {
  db("donors")
    .then(donors => {
      res.status(200).json(donors);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function getDonations(req, res) {
  db("donations")
    .then(donations => {
      res.status(200).json(donations);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function addDonor(req, res) {
  donor = req.body;
  db("donors")
    .insert(donor)
    .then(id => res.status(201).json({ id: id[0] }))
    .catch(err => res.status(500).json(err));
}

function addDonation(req, res) {
  donation = req.body;
  db("donations")
    .insert(donation)
    .then(id => res.status(201).json({ id: id[0] }))
    .catch(err => res.status(500).json(err));
}

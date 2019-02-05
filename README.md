# Instructions #
Admin Login info {
    "username": "admin1",
    "password": "password"
}
## End Points##
/api/login

POST 
Expects Body = {
    "username":"foobar",
    "password":"foobar"
}
Returns{
    JsonWebToken // use this for Authintication and Authorization
}

/api/register

POST
Expects Body = {
    "username":"foobar",
    "password":"foobar",
    "name":"foobar"
} && Expects Header = Authorization : JsonWebToken

Returns {
    "id": number//created users id
}

//only the admin user can create new users

/api/donors

GET
Expects Header = Authorization : JsonWebToken

Returns{
    array of users and info on donor
}

POST
Expects Header =  Authorization : JsonWebToken
Body ={
    "name": "foobar",
    "userID": number, // this Id should match the id of the user creating the donor//
    "email": "foobar",
    "city": "foobar",
    "address": "foobar",
    "zip": number
}

/api/donations

GET

Expects Header = Authorization : JsonWebToken

Returns{
    array of donations and info on the donation
}

POST

Expects Header =  Authorization : JsonWebToken
Body ={
    "donationLocation": "foobar",
    "donorID": number // this is the Should match the ID of the donor who made the donation
    "donationAmount": float
}

Returns{
    "id": number // this is the created donations id
}
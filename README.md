# Instructions #

## Server set up##

-npm / yarn int

-yarn server // should start server on port 3300

## endpoints ##
 "/api/register" 
 POST
 expects {
     "username": "*****",
     "password": "*****"
 }
 returns {
     "id": new users id // new id  is a number
 }

 "/api/login"
 POST
 expects{
     "username": "*****",
     "password": "*****"
 }
 returns {
     info about user
 }

"/api/users"
GET
expects{
    nothing yet
}
returns[
    {
        user1 info
},
    {
        user2 info
}
]
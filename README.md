# Instructions
Admin Login:
```javascript
{
    "username": "admin1",
    "password": "password"
}
```

## End Points

### /api/login

- **POST** 

Expects body:
```javascript
{
    "username": string,
    "password": string
}
```

Returns:
```javascript
jsonWebToken // use this for the Authorization header
```

### /api/register

- **POST** *Admin only*

Expects header: 
```javascript
{
    Authorization: jsonWebToken
}
```

Expects body:
```javascript
{
    "username": string,
    "password": string,
    "name": string
}
```

Returns:
```javascript
{
    "id": number // ID of created user
}
```

### /api/donors

- **GET**

Expects header:
```javascript
{
    Authorization: jsonWebToken
}
```

Returns:
```javascript
[
    // donor 1
    {
        "name": string,
        "userID": number,
        "email": string,
        "city": string,
        "address": string,
        "zip": number
    },
    // donor 2
    {
        "name": string,
        "userID": number,
        "email": string,
        "city": string,
        "address": string,
        "zip": number
    },
    // more donors, hopefully...
]
```

- **POST**

Expects header:
```javascript
{
    Authorization: jsonWebToken
}
```

Expects body:
```javascript
{
    "name": string,
    "userID": number, // ID of the user creating the donor
    "email": string,
    "city": string,
    "address": string,
    "zip": number
}
```

### /api/donations

- **GET**

Expects header:
```javascript
{
    Authorization: jsonWebToken
}
```

Returns:
```javascript
[
    // donation 1
    {
        "donationLocation": string,
        "donorID": number,
        "donationAmount": float
    },
    // donation 2
    {
        "donationLocation": string,
        "donorID": number,
        "donationAmount": float
    },
    // more donations, hopefully...
]
```

- **POST**

Expects header:
```javascript
{
    Authorization: jsonWebToken
}
```

Expects body:
```javascript
{
    "donationLocation": string,
    "donorID": number, // ID of the donor who made the donation
    "donationAmount": float
}
```

Returns:
```javascript
{
    "id": number // ID of created donation
}
```

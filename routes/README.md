## APIs

---

> ### Signup User

- Route: `/api/signup`
- Method: `POST`
- **Body:**

```json
{
  "email": "newUser@jotit.com",
  "password": "newUserPassword",
  "passwordConfirm": "newUserPassword",
  "name": "User 1"
}
```

- **Response:**

201 Success

```json
{
  "name": "User 1",
  "email": "newuser@jotit.com",
  "urls": [],
  "_id": "63f5d504977e9e634dbef800",
  "__v": 0
}
```

> ### Login User

- Route: `/api/login`
- Method: `POST`
- **Body:**

```json
{
  "email": "newUser@jotit.com",
  "password": "newUserPassword"
}
```

- **Response:**

200 Success

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjVkNTA0OTc3ZTllNjM0ZGJlZjgwMCIsImVtYWlsIjoibmV3VXNlckBqb3RpdC5jb20iLCJpYXQiOjE2NzcwNTU1MzEsImV4cCI6MTY3NzA2MjczMX0.pu2704-Zk7CV0htk9FY_Hxvs3kURL4R34FFLZHcO4CU"
}
```

> ### Create URL

- Route: `/api/short`
- Method: `POST`
- Header
  - Authorization: `Bearer {token}`
- **Body:**

```json
{
  "originalUrl": "www.url-shortner.com"
}
```

- **Response:**

201 Success

```json
{
  "status": "success",
  "data": {
    "urlDetails": {
      "urlId": "pbXU0VBWnlTCptAjdcwam",
      "clicks": 0,
      "originalUrl": "https://stackoverflow.com/questions/69628983/yarn-v3-0-2-why-do-not-install-the-node-modules-folder-need-to-run-npm-install",
      "shortUrl": "http://localhost:4400/pbXU0VBWnlTCptAjdcwam",
      "date": "Thu Apr 04 2024 14:26:01 GMT+0100 (West Africa Standard Time)",
      "owner": "660e7818952644c1677545db",
      "_id": "660eaa6991be154d209a4a8c",
      "__v": 0
    }
  }
}
```

> ### Get URL page by url Id for Authenticated Users and update

- Route: `/api/:id`
- Method: `GET`
- **Response:**

200 Success

```html
<!DOCTYPE html>
```

> ### Get all URLS for Authenticated Users

- Route: `/api/urls`
- Method: `GET`
- Query params:

  - page (default: 1) - `/api/urls?page=1`
  - per_page (default: 5) - `/api/urls?limit=2`

- **Response:**

200 Success

```json
{
  "status": "success",
  "results": 2,
  "data": {
    "urls": [
      {
        "_id": "660e7983e8e039125de0beb9",
        "urlId": "3sg7a_kAi4EGMB_-UR-27",
        "clicks": 0,
        "originalUrl": "https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository",
        "shortUrl": "http://localhost:4400/3sg7a_kAi4EGMB_-UR-27",
        "date": "Thu Apr 04 2024 10:57:23 GMT+0100 (West Africa Standard Time)",
        "owner": {
          "_id": "660e7818952644c1677545db",
          "name": "abdul"
        },
        "__v": 0
      },
      {
        "_id": "660e79b6e8e039125de0bebe",
        "urlId": "GUFAYk2xlGYzIpLflrq0N",
        "clicks": 0,
        "originalUrl": "https://docs.github.com/en/get-started/using",
        "shortUrl": "http://localhost:4400/GUFAYk2xlGYzIpLflrq0N",
        "date": "Thu Apr 04 2024 10:58:14 GMT+0100 (West Africa Standard Time)",
        "owner": {
          "_id": "660e7818952644c1677545db",
          "name": "abdul"
        },
        "__v": 0
      }
    ]
  }
}
```

> ### Update URL for Authenticated Users

- Route: `/api/:id`
- Method: `PATCH`
- Header
  - Authorization: `Bearer {token}`
- **Body:**

```json
{
  "originalUrl": "www.url-shortner.com"
}
```

- **Response:**

204 No Content


```json
{}
```

> ### Delete blog by Authenticated and Authorised User

- Route: `/api/:id`
- Method: `DELETE`
- Header

  - Authorization: `Bearer {token}`

- **Response:**

204 No Content

```json
{}
```

---

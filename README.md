401 class 03 lab
# LAB - 03
## basic-api-server
### Author: Neveen Beiram

* [deployment for main branch ](https://neveen-basic-api-server.herokuapp.com/) .
* [submission PR](https://github.com/NeveenBeiram/basic-api-server/pulls) .
* [tests report](https://github.com/NeveenBeiram/basic-api-server/actions) .
 
### Setup

#### `.env` requirements

- `PORT` - 3000

#### Running the app

- `npm start`
- Endpoint: `/`
  - Returns message

    ```

    'welcome to server.js'

    ```

    
- Endpoint: `/bad`
  - Throws an error 500
  - Returns an Object

    ```

    {
        "status": 500,
        "message": "something went wrong ",
        "rout": "/err",
    }

 ```

    

     - Endpoint: **anything else ..**
  - Returns an error 404
  - Returns an Object

    ```

    {
        "status": 404,
        "message": "Sorry , Page not Found"
    }

    ```
#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`


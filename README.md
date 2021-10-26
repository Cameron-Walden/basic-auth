# Basic Authentication

***

Created by Cameron Walden

***

Problem Domain

- **Phase 1:** 
  
  Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Postgres database for storage.

***

## UML

<img src = "img/basic-auth.jpg">

***

## Routes

- **/signup**
  json: {
    "username": "",
    "password": ""
  }
  
- **/signin**
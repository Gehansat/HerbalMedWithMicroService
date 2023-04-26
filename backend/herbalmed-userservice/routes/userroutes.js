const router = require('express').Router();

Router.post('/register', userregister);


Router.post('/login', userlogin);


Router.get("/", getusers);


Router.get("/:id/:role", getuserbyid);
'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { User } = require('../models/index.js');


 async function basicAuth(request, response, next) {
  if(!request.headers.authorization){
    response.status(403).send('No auth headers')
  }
  let encodedUserPassword = request.headers.authorization.split(' ')[1];
  let decodedUserPassword = base64.decode(encodedUserPassword)
  let [ username, password ] = decodedUserPassword.split(':');
  userQuery = await User.findOne({ where: {
    username
  }
});
  let validPassword = await bcrypt.comnpate(password, userQuery.password);
  if(validPassword) {
    request.user = userQuery;
    next();
  } else {
    response.status(403).send('Authentication Error')
  }
}

module.exports = basicAuth;
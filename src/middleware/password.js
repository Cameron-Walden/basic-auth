// 'use strict';

// const base64 = require('base-64');
// const bcrypt = require('bcrypt');

// const username = 'cameron';
// const password = 'myfakepassword';

// const userPassword = `${username}:${password}`;

// const encoded = base64.encode(userPassword);
// console.log(encoded, 'THIS IS ENCODED');

// const decoded = base64.decode(encoded);

// const [ user, password ] = decoded.split(':');
// const complexity = 10;
// bcrypt.hash(password, complexity).then(hashedPassword => {
//   console.log(hashedPassword);

//   let checkPassword = 'myfakepassword';

//   bcrypt.compare(checkPassword, hashedPassword).then(isCorrect => {
//     console.log(isCorrect, 'THIS IS ISCORRECT');
//   });
// });


// console.log(user, password, 'THIS IS USER AND PASSWORD');
'use strict';

const bcrypt = require('bcrypt');

const sequelize = require('sequelize');

// const User = sequelize.define('users', {
//   username: {
//     type: Datatypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// });

const User = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
     username: {
       type: DataTypes.STRING,
       allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });

// const User = (sequelize, DataTypes) => sequelize.define('users', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// });

user.beforeCreate( async (user) => {
  let encryptedPassword = await bcrypt.hash(user.password, 10);
  user.password = encryptedPassword;
  return user.password;
});
 return user;
}

module.exports = User;
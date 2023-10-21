const DB =require('../config/DbConnection');

const schema ={
      role_name : String
};

const roles = DB.model("roles",schema);

module.exports = roles;

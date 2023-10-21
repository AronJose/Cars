const express = require('express');
const bodyparser = require('body-parser');

const PORT = process.env.PORT || 8090


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));


const roleRouters = require('./routes/RoleRoutes')
app.use('/api/roles', roleRouters)


app.listen(PORT, () => {
      console.log(`server is running port is ${PORT}`);
  })
  
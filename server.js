const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DATABASE CONNECTED SUCCESSFULY ✅'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT:${port} 🚀`);
});

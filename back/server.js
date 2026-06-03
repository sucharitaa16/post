require("dotenv").config();
const app = require("./src/app");
const DbConnection = require("./src/db/db");

DbConnection();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`running at ${PORT}`);
});
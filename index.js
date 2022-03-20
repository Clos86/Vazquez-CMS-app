const CMS = require("./lib/questions");
const db = require("./db/connection");

db.connect((err) => {
      if (err) throw err;
      // Start The Application
      new CMS().getMenu();
  });
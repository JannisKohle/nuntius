const express = require('express');
const app = express();

const accountsRouter = require("./routes/accounts");
const postsRouter = require("./routes/posts");
const postListsRouter = require("./routes/postLists");
const searchRouter = require("./routes/search");
const settingsRouter = require("./routes/settings");

app.use(express.json());

app.listen(3000, () => console.log("Listening on port 3000"));

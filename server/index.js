const express = require('express');
const mongoose = require('mongoose');
const app = express();

const accountsRouter = require("./routes/accounts");
const postsRouter = require("./routes/posts");
const postListsRouter = require("./routes/postLists");
const searchRouter = require("./routes/search");
const settingsRouter = require("./routes/settings");

app.use(express.json());

app.use("/accounts", accountsRouter);
app.use("/posts", postsRouter);
app.use("/postLists", postListsRouter);
app.use("/search", searchRouter);
app.use("/settings", settingsRouter);

mongoose.connect("mongodb://localhost/nuntiusDB", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to database");
});

app.listen(3000, () => console.log("Listening on port 3000"));

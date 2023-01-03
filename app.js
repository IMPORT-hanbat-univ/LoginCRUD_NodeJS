"use strict";

// 모듈
const express = require("express");
const app = express();
const PORT = 3000;

const home = require("./LoginCRUD_NodeJS/home");

//웹 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home/index");
});

app.get("/login", (req, res) => {
  // 기능
  res.render("home/login");
});

// const home = require("./routes/home");
app.use("/", home); // 미들 웨어

module.exports = app;

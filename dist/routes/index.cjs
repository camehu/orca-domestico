var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/index.js
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
module.exports = __toCommonJS(routes_exports);
var import_express = require("express");

// src/controller/Home.js
var Home = {
  index(req, res) {
    res.json("Ol\xE1 Mundo - Or\xE7amento Domestico ou contas - Projeto Base");
  },
  // list(req, res, next){
  //     repository.list()
  //     .then(result=>Response.json(result))
  //     .cath(next)
  // },
  byId(req, res, next) {
  },
  create(req, res, next) {
  },
  updById(req, res, next) {
  },
  delById(req, res, next) {
  }
};
var Home_default = Home;

// src/routes/index.js
var routes = new import_express.Router();
routes.get("/", Home_default.index);
routes.get("/favicon.ico", (req, res, next) => {
  res.writeHead(200, { "Content-type": "image/x-icon" });
  res.end("");
});
var routes_default = routes;

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

// src/controller/Home.js
var Home_exports = {};
__export(Home_exports, {
  default: () => Home_default
});
module.exports = __toCommonJS(Home_exports);
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

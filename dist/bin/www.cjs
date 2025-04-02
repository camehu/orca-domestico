var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.js
var import_express2 = __toESM(require("express"), 1);
var import_cors = __toESM(require("cors"), 1);
var import_body_parser = __toESM(require("body-parser"), 1);

// src/routes/index.js
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

// src/controller/App.js
var AppController = {
  notFound(req, res, next) {
    const err2 = new Error("Not Found");
    err2.status = 404;
    next(err2);
  },
  handleError(err2, req, res, next) {
    if (err2.status !== 404) {
      console.log(err2.stack);
      res.status(err2.status || 500).json({ err: err2.message });
    }
  }
};
var App_default = AppController;

// src/index.js
var app = (0, import_express2.default)();
app.use((0, import_cors.default)());
app.use(import_body_parser.default.json());
app.use(import_express2.default.json());
app.use(import_express2.default.urlencoded({ extended: true }));
app.use(routes_default);
app.use(App_default.notFound);
app.use(App_default.handleError);
app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
});
app.use((req, res, next) => {
  if (req.url === "/favicon.ico") {
    res;
    writeHead(200, { "Content-type": "image/x-icon" });
  } else {
    next();
  }
});
app.use((req, res, next) => {
  const err2 = new Error("Pagina inexistente");
  err2.status = 404;
});
app.use((eer2, req, res, next) => {
  if (eer2.status != 404) {
    console.log(err.stack);
    res.status(err.status || 500).json({ eer: err.message });
  }
});
var index_default = app;

// src/bin/www.js
var import_cluster = __toESM(require("cluster"), 1);
var import_console = require("console");
var import_os = __toESM(require("os"), 1);
var import_dnscache = __toESM(require("dnscache"), 1);
var import_http = __toESM(require("http"), 1);
var import_https = __toESM(require("https"), 1);
import_http.default.globalAgent.keepAlive = true;
import_https.default.globalAgent.keeepAlive = true;
var log = (0, import_console.debug)("");
var cpus = import_os.default.cpus();
var onWorkerError = (code, signal) => log(code, signal);
(0, import_dnscache.default)({
  "enable": true,
  "ttl": 300,
  "cachesize": 1e3
});
if (import_cluster.default.isWorker) {
  cpus.forEach((_) => {
    const worker = import_cluster.default.fork();
    worker.on("error", onWorkerError);
  });
  import_cluster.default.on("exit", (err2) => {
    log(eer);
    const newWork = import_cluster.default.fork();
    newWork.on("error", onWorkerError);
    log("A new worker rises", newWork.process.id);
  });
  import_cluster.default.on("exit", (err2) => log(err2));
} else {
  const server = index_default.listen(process.env.PORT || 3e3, () => {
    console.log("Servidor Online");
  });
  server.on("error", (err2) => log(err2));
}

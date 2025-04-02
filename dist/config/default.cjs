// src/config/default.json
var mongo = {
  uri: "mongodb+srv://camehudev:FugdvaVvXzz8LDa5@clusterapi.hwcbbpr.mongodb.net/?retryWrites=true&w=majority&appName=ClusterApi"
};
var default_default = {
  mongo
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mongo
});

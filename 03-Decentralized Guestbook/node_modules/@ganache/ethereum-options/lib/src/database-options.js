"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseOptions = void 0;
const helpers_1 = require("./helpers");
exports.DatabaseOptions = {
    db: {
        normalize: helpers_1.normalize,
        cliDescription: "Specify an alternative database instance, like MemDOWN",
        disableInCLI: true,
        legacyName: "db",
        conflicts: ["dbPath"]
    },
    dbPath: {
        normalize: helpers_1.normalize,
        cliDescription: "Specify a path to a directory to save the chain database.",
        legacyName: "db_path",
        cliAliases: ["db", "db_path"],
        cliType: "string",
        conflicts: ["db"]
    }
};
//# sourceMappingURL=database-options.js.map
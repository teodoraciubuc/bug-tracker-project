"use strict";
// routerul principal care grupeaza toate API-urile:
// - /auth -> autentificare si inregistrare utilizatori
// - /projects -> management proiecte si membership
// - /bugs -> rute pentru gestionarea bug-urilor
// - /users -> rute pentru gestionarea utilizatorilor
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const projects_1 = __importDefault(require("./projects"));
const bugs_1 = __importDefault(require("./bugs"));
const users_1 = __importDefault(require("./users"));
const router = (0, express_1.Router)();
router.use('/auth', auth_1.default);
router.use('/projects', projects_1.default);
router.use('/bugs', bugs_1.default);
router.use('/users', users_1.default);
exports.default = router;

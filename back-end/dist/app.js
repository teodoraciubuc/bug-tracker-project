"use strict";
// acest fisier configureaza aplicatia Express: 
// - incarca variabilele
// - aplica middleware-uri globale precum CORS, JSON
// - defineste /api/health
// - conecteaza routerul principal
// - gestioneaza rutele inexistente
// - ataseaza handler-ul global de erori
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_ORIGIN || true,
    credentials: true,
}));
app.use(express_1.default.json());
app.get('/api/health', (req, res) => res.status(200).json({ ok: true }));
app.use('/api', routes_1.default);
app.use((req, res) => {
    res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found` });
});
app.use(errorHandler_1.default);
exports.default = app;

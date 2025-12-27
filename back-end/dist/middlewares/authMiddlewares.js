"use strict";
// middleware de autentificare si autorizare: 
// - requireAuth: valideaza tokenul JWT si ataseaza utilizatorul in req.user
// - requireRole: verifica daca utilizatorul are rolul MP/TST in proiect
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
exports.requireRole = requireRole;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const secret = process.env.JWT_SECRET;
const prisma = new client_1.PrismaClient();
// verifica daca cererea contine un JWT valid
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Missing Authorization header' });
    }
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Invalid Authorization format' });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret); // verifica tokenul
        req.user = decoded; // ataseaza datele utilizatorului in req
        next(); // merge mai departe spre ruta solicitata
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
//se foloseste doar in rute unde accesul depinde de rol
function requireRole(role) {
    return async (req, res, next) => {
        try {
            const userId = req.user.id;
            const projectMember = await prisma.projectMember.findFirst({
                where: {
                    userId,
                    role
                }
            });
            if (!projectMember) {
                return res.status(403).json({ error: `Access denied. Only ${role} allowed.` });
            }
            next();
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Server error (role check)' });
        }
    };
}

"use strict";
//acest fisier porneste aplicatia Express definita in fisierul 'app.ts':
// - citeste portul din variabila PORT
// - porneste serverul HTTP si afiseaza URL-ul unde API-ul este disponibil
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = Number(process.env.PORT) || 3000;
app_1.default.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});

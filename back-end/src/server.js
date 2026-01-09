//acest fisier porneste aplicatia Express definita in fisierul 'app.js':
// - citeste portul din variabila PORT
// - porneste serverul HTTP si afiseaza URL-ul unde API-ul este disponibil

import app from "./app.js";

const port=Number(process.env.PORT) || 3000;

app.listen(port, () =>{
    console.log(`API is running on http://localhost:${port}`);
})
// middleware global pentru gestionarea erorilor:
// - detecteaza orice eroare aruncata in aplicatie
// - afiseaza eroarea in consola serverului
// - trimite un JSON catre client folosind status si mesaj din eroare

export default function errorHandler(err, req, res, next){
    console.log(err);
    const status= err.status || 500;
    const message= err.message || 'Server error';
    res.status(status).json({message});
}
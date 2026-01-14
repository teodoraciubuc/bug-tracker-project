## Frontend

## 🔐 Autentificare

- `/` → Pagina de autentificare (email + parolă).

- `/register` → Pagina de creare cont.

## 🏠 Pagini generale

- `/dashboard` → Pagina principală care afișează proiectele utilizatorului (MP/TST)

- `/profile` → Pagina de profil (nume, email, XP, level, proiecte).

## 🧩 Proiecte

- `/project/:id` → Pagina unui proiect: listă bug-uri + membri proiect + butoane de acțiuni (join, edit, promote - in functie de rol).

- `/project/:id/add-bug` → Formular pentru raportarea unui bug într-un proiect(TST).

## 🐞 Bug-uri

- `/bug/:id` → Pagina unui bug, cu: detalii bug , status , severitate ,prioritate, link commit, buton „Asignează-mi mie” (MP), buton „Rezolvă bug” (MP asignat), comentarii

## 📝 Comentarii la bug-uri

- sistem UI de comentarii , form pentru scriere comentariu, listă comentarii sub bug

## 🔔 Notificări

- icon + listă notificări în interfață, marcarea notificărilor ca „citite”

## ⭐ Gamificare

- afișarea XP și Level pe profil, actualizare automată la raportarea / rezolvarea bug-urilor

## Backend

## 🔐 Auth

- `POST /api/auth/register` -> creează un utilizator nou pe baza emailului și parolei

- `POST /api/auth/login` -> autentifica utilizatorul și returnează un token JWT

## 👤 Users

- `GET /api/users/me` -> returnează informațiile utilizatorului autentificat

## 🧩 Projects

- `POST /api/projects` -> creează un proiect nou (userul devine automat MP)

- `GET /api/projects` -> returnează toate proiectele

- `GET /api/projects/:id` -> returnează detaliile unui proiect (inclusiv membri)

- `POST /api/projects/:id/join` -> permite unui user să se alăture proiectului ca TST

- `PATCH /api/projects/:id` -> permite unui MP să actualizeze detaliile proiectului

- `DELETE /api/projects/:id` -> permite creatorului proiectului să îl steargă

- `PATCH /api/projects/:projectId/members/:userId/promote` -> promovează un membru din TST în MP

## 🐞 Bugs

- `POST /api/projects/:projectId/bugs` -> TST raportează un bug nou în cadrul proiectului

- `GET /api/projects/:projectId/bugs` -> listeaza toate bug-urile asociate proiectului

- `GET /api/bugs/bug/:bugId` -> returnează detaliile unui bug

- `PATCH /api/bugs/:bugId/assign` -> MP își poate aloca rezolvarea unui bug

- `PATCH /api/bugs/:bugId/status` -> MP schimba statusul bugului (ex: OPEN -> IN_PROGRESS -> RESOLVED)

## 📝 Comentarii la bug-uri

- `GET /api/bugs/:id/comments` –> returnează comentariile aferente unui bug

- `POST /api/bugs/:id/comments` –> adaugă un comentariu nou

## 🔔 Notificări

- `GET /api/notifications` –> obține notificările utilizatorului

- `PATCH /api/notifications/:id/read` –> marchează notificarea ca citită

## ⭐ Gamificare

- XP automat la raportare/rezolvare, calcul automat al nivelului, salvarea istoricului XP

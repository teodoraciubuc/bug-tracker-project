# 🐞 Bug Tracker – Aplicație Web pentru gestionarea bug-urilor

## 📌 Descriere

_Bug Tracker_ este o aplicație web destinată echipelor care vor să urmărească și să gestioneze erorile apărute în timpul dezvoltării unui proiect software.

Aplicația oferă suport pentru:

- gestionarea proiectelor și a membrilor
- raportarea și rezolvarea bug-urilor
- comentarii și notificări
- sistem de gamificare bazat pe XP și niveluri

---

## 🧱 Stack Tehnologic

### Backend

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT (autentificare)
- CORS
- Dotenv

### Frontend

- React.js
- React Router
- Axios

---

## 📝 Documentație:

[routing.md](./routing.md) → Planul rutelor frontend și backend  
[database-schema.md](./database-schema.md) → Modelul bazei de date și relațiile  
[wireframes.md](./wireframes.md) → Wireframes și structura vizuală a aplicației

---

## ⚙️ Funcționalități principale

- Înregistrare și autentificare utilizatori
- Creare și administrare proiecte
- Alăturare la proiecte ca Tester (TST)
- Raportare bug-uri cu severitate, prioritate și link commit
- Asignare și rezolvare bug-uri de către MP
- Comentarii pentru bug-uri
- Notificări pentru acțiuni importante
- Sistem XP & Level pentru gamificare

---

## 🚀 Instalare și rulare

-> Acești pași permit configurarea și pornirea serverului backend pe un mediu local

1. Instalarea dependențelor

- Instalează toate pachetele necesare proiectului (Express, Prisma, JWT, CORS și restul librăriilor esențiale)

```
npm install
```

2. Configurarea variabilelor

- În folderul `back-end` creați un fișier `.env` , care conține datele de conectare la BD și de configurare a serverului, conform structurii:

```
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/bugtracker?schema=public"
PORT=3000
FRONTEND_ORIGIN=http://localhost:5173
JWT_SECRET="introduceti_un_cod_secret"
```

- variabilele `USERNAME` și `PASSWORD` trebuie înlocuite cu datele date de PostgreSQL pe dispozitivul local

3. Generarea Prisma Client

- Rulați comanda pentru a genera Prisma Client pe baza fișierului `schema.prisma`

```
npx prisma generate
```

4. Pornirea serverului backend

- Pornirea serverului Node.js :

```
npm start
```

-> după acești pași, serverul ruleaza la `http://localhost:3000`

-> Acești pași permit configurarea și pornirea frontend-ului pe un mediu local

1. Instalarea dependențelor

- Instalează toate pachetele necesare aplicației frontend (React, React Router, Axios și celelalte librării utilizate pentru interfața utilizatorului).

```
npm install
```

2. Pornirea aplicației frontend

```
npm run dev
```

-> după acești pași, serverul ruleaza la `http://localhost:5173`

---

## 🧪 Testarea API-ului in POSTMAN

-> Pentru a testa backend-ul manual trebuie să executați următorii pași:

- Toate rutele backend-ului încep cu:

```
http://localhost:3000/api
```

- Rularea `POST /api/auth/login` duce la obținerea token-ului JWT folosit în rutele protejate

- Pentru a accesa rutele protejate se vor folosi următoarele în `HEADER`:

```
Key : Authorization
Value: Bearer <token_JWT>
```

# 🐞 Bug Tracker – Web Application for Bug Management

## 📌 Description

_Bug Tracker_ is a web application designed for teams that want to track and manage bugs occurring during the development of a software project.

The application provides support for:

- project and team management
- bug reporting and resolution
- comments and notifications
- gamification system based on XP and levels

---

## 🧱 Tech Stack

### Backend

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT (authentication)
- CORS
- Dotenv

### Frontend

- React.js
- React Router
- Axios

---

## 📝 Documentation

[routing.md](./routing.md) → Frontend and backend routing plan  
[database-schema.md](./database-schema.md) → Database model and relationships  
[wireframes.md](./wireframes.md) → Wireframes and visual structure of the application

---

## ⚙️ Main Features

- User registration and authentication
- Project creation and management
- Join projects as Tester (TST)
- Bug reporting with severity, priority, and commit link
- Bug assignment and resolution by MP
- Bug comments
- Notifications for important actions
- XP & Level system for gamification

---

## 🚀 Installation and Run

→ These steps allow configuring and running the backend server in a local environment

1. Installing dependencies

- Install all required backend packages (Express, Prisma, JWT, CORS, and other essential libraries)

```
npm install
```

---

2. Environment variables configuration

- In the `back-end` folder, create a `.env` file containing the database connection details and server configuration, as shown below:

```
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/bugtracker?schema=public"
PORT=3000
FRONTEND_ORIGIN=http://localhost:5173
JWT_SECRET="your_secret_key"
```

- The `USERNAME` and `PASSWORD` variables must be replaced with your local PostgreSQL credentials.

---

3. Generating Prisma Client

- Run the following command to generate Prisma Client based on the `schema.prisma` file:

```
npx prisma generate
```

---

4. Starting the backend server

- Start the Node.js server:

```
npm start
```

→ After these steps, the backend server will run at: `http://localhost:3000`

---

→ These steps allow configuring and running the frontend application locally

1. Installing dependencies

- Install all required frontend packages (React, React Router, Axios, and other libraries used for the user interface)

```
npm install
```

---

2. Starting the frontend application

```
npm run dev
```

→ After these steps, the frontend application will run at: `http://localhost:5173`

---

## 🧪 API Testing with Postman

→ To manually test the backend API, follow these steps:

- All backend routes are prefixed with:

```
http://localhost:3000/api
```

- Running the login route:

```
POST /api/auth/login
```

returns a JWT token used for accessing protected routes.

- To access protected routes, include the following header:

```
Authorization: Bearer <token_JWT>
```

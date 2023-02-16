# ✅ TODO app backend

## 🚀 Launching guide

0. Use Node.js v.18.12.1
1. Clone the repo
2. Install dependencies

```bash
npm i
```
3. Build
```bash
npm run build
```

4. Run Postgres server in the Docker container in detached mode

```bash
docker-compose up -d
```

5. Launch in dev mode

```bash
npm run dev
```

## 🧠 Backend Web Stack

- TypeScript
- Express: firstly I wanted to use Nest.js, but since time is limited, I've decided that I will create functionaloty faster with Express
- Sequelize - used as main ORM
- postgreSQL

On Backend:

- Implement secure authentication/authorization
- Add unit-tests
- Share interfaces/types between frontend and backend
- Add normal DI

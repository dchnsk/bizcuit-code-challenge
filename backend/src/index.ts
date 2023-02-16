import { routes } from "./routes/index";
import { DEFAULT_PORT, REQ_BODY_SIZE_LIMIT } from "./core/utils/constants";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB, sequelize } from "./core/db/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? DEFAULT_PORT;

app.use(express.json({ limit: REQ_BODY_SIZE_LIMIT }));
app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

app.listen(port, async () => {
  console.log(
    `🚀 TODO app backend server has been launched on http://localhost:${port}`
  );

  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log("✅ Synced database successfully...");
  });
});

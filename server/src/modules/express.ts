import express from "express";
import { homeRouter } from "../routers/homeRouter";
import { apiRouter } from "../routers/apiRouter";
import assetRouter from "../routers/assetRouter";
import { join } from "path";
import { cwd } from "process";
import { env } from "../utils/env";

//static serve paths
const DIST_PATH = join(cwd(), "client");
const PUBLIC_PATH = join(cwd(), "..", "client", "public");

//create the express app
export const app = express();

//use the api router
app.use("/api", apiRouter);

//check for production
if (env("NODE_ENV") === "production") {
  //serve compiled dist
  app.use("/", express.static(DIST_PATH));
} else {
  //else serve public folder
  app.use("/", express.static(PUBLIC_PATH));

  //and assets seperate
  app.use("/src", assetRouter);
}

//use the home router
app.use(homeRouter);

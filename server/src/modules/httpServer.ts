import { createServer } from "http";
import { app } from "./express";
import { log } from "../utils/logger";
import { env } from "../utils/env";

//get the port from env vars
const PORT = env("PORT", true, "3000");

//create an http server
export const httpServer = createServer(app);

//start http server
httpServer.listen(PORT, () => {
  log("info", `HttpServer started on port ${PORT}!`);
});

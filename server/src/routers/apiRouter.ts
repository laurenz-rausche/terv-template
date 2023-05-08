import { Router } from "express";

//create the api router
export const apiRouter = Router();

//example endpoint (extract in own routers!!)
apiRouter.get("/v1/ping", (_, res) => {
  //send example response
  res.send("pong");
});

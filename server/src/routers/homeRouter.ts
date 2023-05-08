import { Router } from "express";
import { readFile } from "fs/promises";
import { join } from "path";
import { cwd } from "process";
import { env } from "../utils/env";

//create the home router
export const homeRouter = Router();

//render the homepage
homeRouter.get("/*", async (req, res) => {
  //create metadata
  const data = {
    environment: env("NODE_ENV"),
    hostname: req.hostname,
    manifest: await parseManifest(),
  };

  //render page with metadata
  res.render("index.html.ejs", data);
});

//parse the manifest data
const parseManifest = async () => {
  //return no data when not in production
  if (env("NODE_ENV") !== "production") return {};

  //get path of the manifest
  const MANIFET_PATH = join(cwd(), "client", "manifest.json");

  //get contents of manifest
  const manifestData = (await readFile(MANIFET_PATH)).toString();

  //parse data and return it
  return JSON.parse(manifestData);
};

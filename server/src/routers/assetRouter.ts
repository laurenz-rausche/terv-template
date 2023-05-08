import { Router } from "express";

//list of supported asset types
const SUPPORTED_ASSETS = ["svg", "png", "jpg", "png", "jpeg", "mp4", "ogv"];

//create the asset router
export const assetRouter = Router();

//regex builder from file types
const assetExtensionRegex = () => {
  //join file types by |
  const formattedExtensionList = SUPPORTED_ASSETS.join("|");

  //create regex
  return new RegExp(`/.+\.(${formattedExtensionList})$`);
};

//handler for all assets on development
assetRouter.get(assetExtensionRegex(), (req, res) => {
  //redirect to dev server
  res.redirect(303, `http://${req.hostname}:5173/src${req.path}`);
});

//export the assetRouter
export default assetRouter;

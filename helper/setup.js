const { join } = require("path");
const { sync: replace } = require("replace-in-file");
const prompt = require("prompt-sync")();

//prompt for values
let name = prompt("Project Name: ");
let desc = prompt("Project Description: ");
let repo = prompt("Project Repository: ");
let auth = prompt("Project Author: ");

//replace name
replace({
  files: join(__dirname, "..", "**", "package.json"),
  from: /__PROJECT_NAME__/g,
  to: name,
});

//replace desc
replace({
  files: join(__dirname, "..", "**", "package.json"),
  from: /__PROJECT_DESC__/g,
  to: desc,
});

//replace repo
replace({
  files: join(__dirname, "..", "**", "package.json"),
  from: /__PROJECT_REPO__/g,
  to: repo,
});

//replace auth
replace({
  files: join(__dirname, "..", "**", "package.json"),
  from: /__PROJECT_AUTH__/g,
  to: auth,
});

//replace title (index.html.ejs)
replace({
  files: join(__dirname, "..", "server", "views", "index.html.ejs"),
  from: /__PROJECT_NAME__/g,
  to: name,
});

//replace heading (README.md)
replace({
  files: join(__dirname, "..", "README.md"),
  from: /__PROJECT_NAME__/g,
  to: name,
});

//replace description (README.md)
replace({
  files: join(__dirname, "..", "README.md"),
  from: /__PROJECT_DESC__/g,
  to: desc,
});

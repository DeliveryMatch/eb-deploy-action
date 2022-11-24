const core = require("@actions/core");
const github = require("@actions/exec");
const { exec } = require("@actions/exec");

async function run() {
  try {
    const deployEnvironment = core.getInput("environment");
    const src = __dirname;
    await exec(`${src}/get_git_tag.sh`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

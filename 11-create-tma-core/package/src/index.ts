#!/usr/bin/env node

import { Command } from "commander";
import path, { dirname } from "path";
const program = new Command();
import prompts from "prompts";
import * as fs from "fs-extra";

import { fileURLToPath } from "url";

import setupTailwind from "../utils/setupTailwind.js";
import setupSolidity from "../utils/setupSolidity.js";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

program
  .name("create-toncore-app")
  .description("Create a new toncore app")
  .argument("[project-name]", "Name of the new project")
  .action(async (projectName) => {
    if (!projectName) {
      const response = await prompts({
        type: "text",
        name: "name",
        message: "Project Name: ",
        validate: (name) => (name ? true : "Project name is required"),
      });
      projectName = response.name;
    }
    const targetDir = path.join(process.cwd(), projectName);

    if (await fs.exists(targetDir)) {
      console.log(`Error: Directory ${projectName} already exists.`);
      process.exit(1);
    }

    const templateDir = path.join(__dirname, "../../template");

    // const { useTailwind } = await prompts({
    //   type: "confirm",
    //   name: "useTailwind",
    //   message: "Do you want to use Tailwind CSS?",
    //   initial: true,
    // });

    try {
      console.log("Generating project");
      await fs.copy(templateDir, targetDir);
      console.log("Project generated successfully");

      // process.chdir(targetDir);
      // if (useTailwind) {
      //   await setupTailwind(targetDir);
      // }

      await setupSolidity(targetDir);

      process.chdir(targetDir);
      const githubUsername = execSync("git config --global user.name")
        .toString()
        .trim();
      if (githubUsername) {
        execSync("git init", { stdio: "ignore" });
        execSync("git add .", { stdio: "ignore" });
        execSync(`git commit -m "init"`, { stdio: "ignore" });

        console.log("Git initialized");
      }

      console.log("\nSetup complete\n");
      console.log("Start your project with:");
      console.log(`cd ${projectName}`);
      console.log("npm install");
      console.log("npm run dev");

      console.log(
        "A bot folder has been created. Go to BotFather in Telegram and get your bot token.",
      );
    } catch (error) {
      console.log(`Error: ${error}`);
      process.exit(1);
    }
  });

program.parse();

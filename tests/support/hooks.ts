import { BeforeAll, AfterAll } from "@cucumber/cucumber";

BeforeAll(async () => {
  console.log("Running Playwright + Cucumber tests...");
});

AfterAll(async () => {
  console.log("Finished all tests.");
});
import { defineConfig } from "@playwright/test";

export default defineConfig({
    output:'./allure-report',
    historyPath:'./allure-history/history.jsonl',
    appendHistory: true,
});

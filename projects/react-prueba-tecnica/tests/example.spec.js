// @ts-check
import { test, expect } from "@playwright/test";
import { CAT_IMAGE_BASE_URL } from "../src/utils/catImageUrl";

const LOCALHOST_URL = "http://localhost:5173/";

test("app shows ramdom fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.locator(".article-fact");
  const image = await page.locator(".article-img");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_IMAGE_BASE_URL)).toBe(true);
});

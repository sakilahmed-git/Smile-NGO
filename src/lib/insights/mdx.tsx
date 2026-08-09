import type { ComponentType } from "react";
import { readFile } from "fs/promises";
import path from "path";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export async function loadInsightContent(
  contentPath?: string
): Promise<ComponentType> {
  if (!contentPath) {
    return (() => null) as ComponentType;
  }

  const absolutePath = path.resolve(process.cwd(), contentPath);
  const source = await readFile(absolutePath, "utf8");
  const result = await evaluate(source, {
    ...runtime,
    format: "mdx",
    development: false,
  });

  return result.default as ComponentType;
}

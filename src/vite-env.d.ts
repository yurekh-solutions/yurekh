/// <reference types="vite/client" />

declare module "virtual:navigation-slugs" {
  export const serviceNameToSlug: Record<string, string>;
  export const industryNameToSlug: Record<string, string>;
}

import { z, defineCollection } from "astro:content"

const css_modules = defineCollection({
  schema: {
    feature_name: z.string().optional(),
    type: z.enum(["property", "function", "at-rule"]).default("property"),
    related_features: z.array(z.string()).optional(),
    related_articles: z
      .array(
        z.object({
          href: z.string().url(),
          label: z.string(),
        }),
      )
      .optional(),
    css_trick: z.union([z.boolean(), z.string()]).default(true),
  },
})

export const collections = {
  "css-modules": css_modules,
}

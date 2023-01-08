import { z, defineCollection } from "astro:content"

const css_modules = defineCollection({
  schema: {
    feature_name: z.string().optional(),
    type: z.enum(["property", "function", "at-rule"]).default("property"),
    external_related_article: z
      .array(
        z.object({
          href: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
    inner_related_page: z
      .array(
        z.object({
          href: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
  },
})

export const collections = {
  "css-modules": css_modules,
}

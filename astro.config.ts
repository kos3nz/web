import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import solid from "@astrojs/solid-js"
import mdx from "@astrojs/mdx"
import vercel from "@astrojs/vercel/static"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode, {
  type Theme as RehypePrettyCodeTheme,
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code"
import moonLightII from "./theme/moonlight-ii.json"

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [
    tailwind(),
    react({
      include: ["**/react/*"],
    }),
    solid({
      include: ["**/solid/*"],
    }),
    mdx(),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    // Disable built-in syntax highlighting (This needs to be false if you are using rehype-pretty-code)
    syntaxHighlight: false,
    rehypePlugins: [
      // Headingsにid attributeを追加
      rehypeSlug,
      [
        // Headingsにリンクを付与
        rehypeAutolinkHeadings,
        {
          // `prepend`・`append`・`wrap`・`before`・`after` でリンクの挿入位置を指定
          behavior: "prepend",
          // `a` 要素に付与する属性
          properties: {
            className: ["anchor"],
          },
          // `a` 要素の子要素を定義する
          content: {
            type: "element",
            tagName: "span",
            properties: {
              className: ["anchor-icon"],
            },
            children: [
              {
                type: "text",
                value: "#", // 🔗
              },
            ],
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: moonLightII as unknown as RehypePrettyCodeTheme,
          // Keep the background or use a custom background color?
          keepBackground: true,
          // Callback hooks to add custom logic to nodes when visiting them.
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [
                {
                  type: "text",
                  value: " ",
                },
              ]
            }
          },
          onVisitHighlightedLine(node) {
            if (node.properties.className) {
              node.properties.className.push("highlighted")
            } else {
              node.properties.className = ["highlighted"]
            }
          },
        } satisfies RehypePrettyCodeOptions,
      ],
      // rehypePresetMinify,
    ],
  },
})

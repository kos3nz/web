import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem" }, // Horizontal padding for content
      screens: {
        lg: "1024px",
      },
    },
    fontFamily: {
      sans: [
        "Helvetica Neue", // macOS English
        "Arial", // window English
        "Hiragino Sans", // macOS Japanese
        "Hiragino Kaku Gothic ProN", // macOS Japanese
        "BIZ UDPGothic", // window Japanese
        "Meiryo", // window Japanese
        ...defaultTheme.fontFamily.sans, // sans-serif for android
      ],
    },
    extend: {
      spacing: {
        header: "var(--header-height)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        heading: "hsl(var(--heading))",
        active: "hsl(var(--active))",
        inactive: "hsl(var(--inactive))",
        link: "hsl(var(--link))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        dropdown: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        input: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        highlight: "inset 0 2px 0 0 rgb(255 255 255 / 5%)",
      },
      keyframes: {
        rotate: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        rotate: "rotate 0.8s infinite steps(8)",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "h1,h2,h3,h4,h5,h6": {
              color: "hsl(var(--heading))",
              position: "relative",
              "scroll-margin-top": defaultTheme.spacing[16],
              margin: "40px 0 28px",
              width: "fit-content",
              "@media (min-width: 768px)": {
                "scroll-margin-top": defaultTheme.spacing[24],
              },
            },
            "h3 code": {
              "font-weight": "bold",
            },
            p: {
              fontSize: "15px",
              color: "hsl(var(--foreground))",
            },
            strong: {
              color: `hsl(var(--heading))`,
            },
            li: {
              color: "hsl(var(--foreground))",
            },
            a: {
              color: `hsl(var(--link))`,
              "text-decoration-color": `hsl(var(--primary))`,
              "text-underline-offset": "2px",
              "@media (min-width: 1024px)": {
                color: `hsl(var(--foreground))`,
                "&:hover": {
                  color: `hsl(var(--link))`,
                },
              },
            },
            table: {
              "border-collapse": "separate",
              "border-spacing": "0",
              border: "1px solid hsl(var(--muted))",
              "border-radius": "var(--radius)",
              overflow: "hidden",
            },
            thead: {
              "background-color": "hsl(var(--muted) / 0.5)",
            },
            "tr:nth-child(1n)": {
              "background-color": "hsl(var(--muted) / 0.2)",
            },
            "tr:nth-child(2n)": {
              "background-color": "hsl(var(--muted) / 0.4)",
            },
            th: {
              "padding-top": defaultTheme.spacing[2],
              "padding-bottom": defaultTheme.spacing[2],
              "padding-left": defaultTheme.spacing[4],
              "padding-right": defaultTheme.spacing[4],
              color: `hsl(var(--foreground))`,
              "border-bottom": "1px solid hsl(var(--muted))",
            },
            td: {
              padding: defaultTheme.spacing[4],
              color: "hsl(var(--foreground))",
            },
            "tbody tr:not(:last-child) td": {
              "border-bottom": "1px solid hsl(var(--muted))",
            },
            blockquote: {
              color: "hsl(var(--muted-foreground))",
              "border-color": "hsl(var(--accent))",
              "border-left-width": "2px",
              "border-radius": "0.375rem",
              padding: defaultTheme.spacing[4],
              "background-color": "hsl(var(--muted) / 0.5)",
            },
            "blockquote p": {
              margin: 0,
              fontSize: "14px",
              color: "hsl(var(--muted-foreground))",
              "font-style": "normal",
              "font-weight": "normal",
            },
            "blockquote code": {
              color: "hsl(var(--foreground))",
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            pre: {
              "margin-top": "0 !important",
              "padding-top": defaultTheme.spacing[4],
              "padding-bottom": defaultTheme.spacing[4],
              "padding-left": 0,
              "padding-right": 0,
            },
            code: {
              "border-radius": "var(--radius) !important",
              "background-color": "hsl(var(--muted))",
              color: "hsl(var(--foreground))",
              "font-weight": "normal",
              "padding-top": defaultTheme.spacing[1],
              "padding-bottom": defaultTheme.spacing[1],
              "padding-left": defaultTheme.spacing[1.5],
              "padding-right": defaultTheme.spacing[1.5],
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            hr: {
              "border-color": "hsl(var(--border))",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("./tailwindcss/plugins/tailwind-animate"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".bg-grid": {
          "background-size": "16px 16px",
          "background-position": "8px 8px",
          "background-image":
            "linear-gradient(to right, hsl(var(--muted) / 0.2) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--muted) / 0.2) 1px, transparent 1px)",
          "image-rendering": "pixelated",
        },
        ".bg-dot": {
          "background-size": "16px 16px",
          "background-position": "8px 8px",
          "background-image":
            "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 8%) 1px, transparent 0)",
        },
      })
    }),
  ],
} satisfies Config

/** @jsxImportSource solid-js */

import MotionLogo from "@/components/solid/motion-logo"

import { Icons } from "./icons"

export default function Profile() {
  return (
    <div class="mx-auto max-w-3xl">
      <div class="flex shrink-0 items-baseline gap-x-6">
        <div class="flex size-[72px] items-center justify-center rounded-full bg-gradient text-heading">
          <div class="flex size-[69px] items-center justify-center rounded-full bg-background">
            <MotionLogo width={18} height={40.5} />
          </div>
        </div>
        <div class="flex items-center gap-x-3">
          <h1 class="text-xl leading-5">kos3nz</h1>
          <a href="https://github.com/kos3nz" rel="noopener noreferrer" target="_blank">
            <Icons.github class="size-5 text-inactive transition-colors duration-300 hover:text-primary" />
          </a>
          <a href="/contact/">
            <Icons.mail class="size-5 text-inactive transition-colors duration-300 hover:text-primary" />
          </a>
        </div>
      </div>

      <hr class="my-8 h-px border-none bg-gradient-to-l from-transparent via-muted to-transparent" />

      <div class="space-y-10">
        <div class="space-y-2 text-sm leading-6">
          <span class="block text-foreground/50">About me</span>
          <p>
            元ビール醸造士。独学でプログラミングを学び、普段はフロントエンドを中心に開発をしています。
            React, Typescript, Next.js, Remix, Solid.js などモダンな技術が好きです。
            より良いプロダクトを作れるよう、より良い開発者になれるよう、常に新しいことを学ぶことを心掛けています。
          </p>
        </div>
        <div class="space-y-2 text-sm leading-6">
          <span class="block text-foreground/50">Experienced</span>
          <ul class="grid grid-cols-2 gap-2 md:grid-cols-3">
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>styled-components</li>
            <li>TailwindCSS</li>
            <li>Javascript/Typescript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Remix</li>
            <li>Solid.js</li>
            <li>Astro</li>
            <li>tRPC</li>
            <li>Express</li>
            <li>Redux</li>
            <li>Jest</li>
            <li>Storybook</li>
            <li>Prisma</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Redis</li>
            <li>Docker</li>
            <li>Turborepo</li>
            <li>ESLint</li>
            <li>Stylelint</li>
            <li>Husky</li>
            <li>Firebase</li>
            <li>Supabase</li>
            <li>Stripe</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div class="space-y-2 text-sm leading-6">
          <span class="block text-foreground/50">Intrested</span>
          <ul class="grid grid-cols-2 gap-2 md:grid-cols-3">
            <li>Rust</li>
            <li>React Native</li>
            <li>Flutter</li>
            <li>NestJS</li>
            <li>Three.js</li>
            <li>D3.js</li>
            <li>Drizzle ORM</li>
            <li>Rxjs</li>
            <li>Svelte</li>
            <li>Turbopack</li>
            <li>Rocket</li>
            <li>WebAssembly</li>
            <li>AssemblyScript</li>
          </ul>
        </div>
        <div class="space-y-2 text-sm leading-6">
          <span class="block text-foreground/50">Tools</span>
          <ul class="grid grid-cols-2 gap-2 md:grid-cols-3">
            <li>VSCode</li>
            <li>Neovim</li>
            <li>Figma</li>
            <li>WezTerm</li>
            <li>lazygit</li>
          </ul>
        </div>
        <div class="space-y-2 text-sm leading-6">
          <span class="block text-foreground/50">Environment</span>
          <ul class="grid grid-cols-2 gap-2 md:grid-cols-3">
            <li>Mac mini M2 Pro</li>
            <li>MacBook Pro - 2019</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

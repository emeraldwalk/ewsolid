import solid from 'solid-start/vite'
import staticAdapter from 'solid-start-static'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://emeraldwalk.github.io/ewsolid/',
  plugins: [
    {
      ...(await import('@mdx-js/rollup')).default({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
      }),
      enforce: 'pre',
    },
    solid({
      adapter: staticAdapter(),
      extensions: ['.mdx', '.md'],
    }),
  ],
})

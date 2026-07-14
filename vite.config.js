import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  root: './src',
  base: '/coca/',
  server: {
    port: 3000,
    open: true,
  },
  publicDir: './src/assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        about: './src/about.html',
        blog: './src/blog.html',
        pricing: './src/pricing.html',
        contact: './src/contact.html',
        post: './src/post.html',
      },
    },
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin({
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyCSS: true,
      minifyJS: true,
      useShortDoctype: true,
      sortClassName: true,
    }),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 80 },
    }),
  ],
});

import path from 'path';
import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    permissions: ['storage', 'tabs', 'activeTab', 'contextMenus'],
  },
  vite: () => ({
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: false,
        routesDirectory: 'src/entrypoints/options/routes',
        generatedRouteTree: 'src/entrypoints/options/routeTree.gen.ts',
      }),
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: false,
        routesDirectory: 'src/entrypoints/popup/routes',
        generatedRouteTree: 'src/entrypoints/popup/routeTree.gen.ts',
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }),
});

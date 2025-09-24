import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/components/theme-provider';
import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import '../../styles/globals.css';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });
const hashHistory = createHashHistory();

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} history={hashHistory} />
    </ThemeProvider>
  </React.StrictMode>,
);

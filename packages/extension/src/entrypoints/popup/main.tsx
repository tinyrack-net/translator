import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './style.css';

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
    <RouterProvider router={router} history={hashHistory} />
  </React.StrictMode>,
);

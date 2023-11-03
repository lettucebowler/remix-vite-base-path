import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from 'remix-flat-routes';

export default defineConfig({
  plugins: [remix({
    publicPath: '/example',
    assetsBuildDirectory: 'dist',
    routes: async defineRoutes => {
      return flatRoutes('routes', defineRoutes, { basePath: '/example'});
    }
  }), tsconfigPaths()],
  base: '/example',
});

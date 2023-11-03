import {
  unstable_createViteServer,
  unstable_loadViteServerBuild,
} from "@remix-run/dev";
import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import express from "express";

installGlobals();

let vite =
  process.env.NODE_ENV === "production"
    ? undefined
    : await unstable_createViteServer();

const app = express();

// handle asset requests
if (vite) {
  app.use('/example', vite.middlewares);
} else {
  app.use(
    "/example",
    express.static("dist/assets", { immutable: true, maxAge: "1y" })
  );
}
app.use("/example", express.static("dist", { maxAge: "1h" }));

// handle SSR requests
app.all(
  "/example",
  createRequestHandler({
    build: vite
      ? () => unstable_loadViteServerBuild(vite)
      : await import("./build/index.js"),
  })
);

const port = 3000;
app.listen(port, () => console.log("http://localhost:" + port));

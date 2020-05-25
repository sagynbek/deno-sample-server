import { serve } from "https://deno.land/std@0.53.0/http/server.ts";
import router from "./routes/router.ts";

// To be able refresh automatically, run on windows powershell
// drun watch --entryPoint=./server.ts --cwd=./ --runtimeOptions=--allow-net
const server = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of server) {
  const url = req.url;
  const headers = req.headers;

  router(req);
  // req.respond({ body: `${url} | ${headers}` });
}

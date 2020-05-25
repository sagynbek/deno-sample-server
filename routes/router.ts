import { ServerRequest } from "https://deno.land/std@0.53.0/http/server.ts";
import { urlParse } from "https://deno.land/x/url_parse/parse.ts";
import users from "../controller/users.ts";
import posts from "../controller/posts.ts";

export default (req: ServerRequest) => {
  const parsedUrl = urlParse("http://localhost:8000" + req.url);

  switch (parsedUrl.pathname) {
    case "/users":
      users(req);
      break;
    case "/posts":
      posts(req);
      break;
    default:
      req.respond({ body: "404" });
      break;
  }
};

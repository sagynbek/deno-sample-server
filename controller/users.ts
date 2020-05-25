import { ServerRequest } from "https://deno.land/std@0.53.0/http/server.ts";

export default function(req: ServerRequest){
  req.respond({body: "Users list"});
}
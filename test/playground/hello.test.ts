import { handler } from "../../services/SpacesTable/Create";
// import { handler } from "../../services/node-lambda/hello";
const event = {
  body: { location: "paris" },
};
handler(event as any, {} as any);

import { handler } from "../../services/SpacesTable/Read";
// import { handler } from "../../services/node-lambda/hello";
const event = {
  body: { location: "paris" },
};
const result = handler({} as any, {} as any).then((apiResult)=>{
  const items = JSON.parse(apiResult.body);
  console.log("123")
});

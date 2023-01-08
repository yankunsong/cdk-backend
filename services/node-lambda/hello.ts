import { v4 } from "uuid";
import { S3 } from "aws-sdk";

const s3 = new S3();

async function handler(event: any, context: any) {
  const buckets = await s3.listBuckets().promise();
  console.log("Got an event:");
  console.log(event);
  return {
    statusCode: 200,
    body: "Hello World: " + JSON.stringify(buckets.Buckets),
  };
}

export { handler };

import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  Code,
  Function as LambdaFunction,
  Runtime,
} from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { GenericTable } from "./GenericTable";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

export class SpaceStack extends Stack {
  private api = new RestApi(this, "spaceApi");
  private spaceTable = new GenericTable("spaceTable", "spaceId", this);

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create a lambda function with a .js file
    const helloLambda = new LambdaFunction(this, "helloLambda", {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(join(__dirname, "..", "services", "hello")),
      handler: "hello.main",
    });

    // create a lambda function with a .ts file
    const helloLambdaNodeJs = new NodejsFunction(this, "helloLambdaNodeJs", {
      entry: join(__dirname, "..", "services", "node-lambda", "hello.ts"),
      handler: "handler",
    });

    // integrate lambda with api gateway
    // 1. create a lambda integration
    const helloLambdaIntegration = new LambdaIntegration(helloLambda);
    // 2. create a api gateway resource
    const helloLambdaResource = this.api.root.addResource("hellos");
    // 3. attach the integration to the resource
    helloLambdaResource.addMethod("GET", helloLambdaIntegration);
  }
}

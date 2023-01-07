# cdk-backend

## set up the node boilerplate

npm init -y  
npm i -D aws-cdk aws-cdk-lib constructs ts-node typescript
npm install -D @types/node

## create infra folder

create launcher.ts and spaceStack.ts

## create the ts config

tsc --init
use the given config to avoid potential errors

## add contents to stacks

## install lambda nodejs to compile .ts files for lambda functions

https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html#local-bundling
npm install --save-dev esbuild@0

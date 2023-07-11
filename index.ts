import { TestkubeSDK } from "testkube-sdk";

const testkube = new TestkubeSDK({
  serverURL: "https://demo.testkube.io/results/v1",
});

const queryResult = await testkube.tests.getTest({
  id: "k6-executor-smoke",
});
console.log("🚀 ~ file: index.ts:10 ~ queryResult:", queryResult);

const runResult = await testkube.tests.executeTest({
  id: "k6-executor-smoke",
  executionRequestInput: {
    args: ["-e", "K6_ENV_FROM_PARAM=K6_ENV_FROM_PARAM_value"],
  },
  namespace: "testkube",
});
console.log("🚀 ~ file: index.ts:20 ~ runResult:", runResult);

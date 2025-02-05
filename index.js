import {LangflowClient} from  "@datastax/langflow-client";

const apiKey = process.env.LANGFLOW_API_KEY;
const langflowId = process.env.LANGFLOW_ID;
const flowId = process.env.FLOW_ID;

const client = new LangflowClient({langflowId,apiKey});
const flow = client.flow(flowId);

const result = await flow.run("Hi how is it going?");

console.log(result.chatOutputText());
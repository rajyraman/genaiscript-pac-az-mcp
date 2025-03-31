script({
    accept: "none",
    description: "Executes a Azure REST API request using the Azure CLI returns the result or error.",
    group: "mcp",
    title: "Azure REST API MCP",
    parameters: {
        url: {
            type: "string",
            description: "The Azure REST API Url to be run. e.g. https://management.azure.com/",
            required: true,
            default: "https://management.azure.com/subscriptions?api-version=2022-12-01",
            example: "https://management.azure.com/subscriptions?api-version=2022-12-01"
        },
        requestMethod: {
            type: "string",
            description: "HTTP method to be used in the request.",
            required: true,
            default: "GET",
            example: "POST",
            enum: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"],
        },
        requestBody: {
            type: "string",
            description: "The body of the request to be sent.",
            required: false
        }      
    },
});

const { url, requestMethod, requestBody } = env.vars;
const { output } = env;

const cliOutput = await host.exec("az",["--help"]);
const pacLog = host.logger(`pac`);
if (cliOutput.exitCode !== 0) {
    pacLog(cliOutput.stderr);
    output.fence(cliOutput.stderr);
    cancel("Azure CLI (az) is not installed. Please install it to proceed.");
}

if(!url.startsWith("https://management.azure.com/"))
    cancel("This MCP can run only operations on https://management.azure.com/.");
if (url && requestMethod) {
    let command = `az rest --method ${requestMethod} --url ${url} -o json`
    if(requestBody) {
        command += ` --body '${requestBody}'`
    }
    const result = await host.exec(command);

    if (result.exitCode === 0) {
        output.fence(result.stdout);
    } else {
        output.fence(result.stderr);
    }
}
else {
    output.fence("url and requestMethod are required parameters.");
}
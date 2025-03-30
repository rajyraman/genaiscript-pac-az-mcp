script({
    accept: "none",
    description: "Executes a Graph API request using the Azure CLI returns the result or error.",
    group: "mcp",
    title: "Graph API MCP",
    parameters: {
        url: {
            type: "string",
            description: "The Graph Url to be run. e.g. https://graph.microsoft.com/v1.0/me",
            required: true,
            default: "https://graph.microsoft.com/v1.0/me",
            example: "https://graph.microsoft.com/v1.0/me"
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
var pacLog = host.logger(`pac`);
if (cliOutput.exitCode !== 0) {
    pacLog(cliOutput.stderr);
    output.fence(cliOutput.stderr);
    cancel("Azure CLI (az) is not installed. Please install it to proceed.");
}

if(!url.startsWith("https://graph.microsoft.com/"))
    cancel("This MCP can run only operations on https://graph.microsoft.com/.");
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
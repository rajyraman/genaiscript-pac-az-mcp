script({
    accept: "none",
    description: "Executes a Power Platform CLI (pac) command, against a Dataverse environment and returns the result or error.",
    group: "mcp",
    title: "Power Platform CLI MCP",
    parameters: {
        pacCommand: {
            type: "string",
            description: "The Power Platform CLI (pac) command to be executed. e.g. pac solution list.",
            required: true,
            example: "pac solution list",
            default: "pac solution list"
        },
        group: {
            type: "string",
            description: "The command group in pac to be executed.",
            required: true,
            default: "solution",
            example: "solution"
        },
        verb: {
            type: "string",
            description: "The verb in the command group to be executed.",
            required: true,
            default: "list",
            example: "list"
        },
        environmentUrl: {
            type: "string",
            description: "The environment on which the command command should be executed.",
            example: "https://org.crm6.dynamics.com",
        }        
    },
});

const { pacCommand, group, verb } = env.vars;
const { output, dbg } = env;

const cliOutput = await host.exec("pac",["help"]);
var pacLog = host.logger(`pac`);
if (cliOutput.exitCode !== 0) {
    pacLog(cliOutput.stderr);
    output.fence(cliOutput.stderr);
    cancel("Power Platform CLI (pac) is not installed. Please install it to proceed.");
}

if (pacCommand && group && verb) {
    const result = await host.exec(pacCommand);

    if (result.exitCode === 0) {
        output.fence(result.stdout);
    } else {
        output.fence(`The command failed. Please try \`pac help\`, \`pac ${group} help\`, or \`pac ${group} ${verb}\` help.
            Use \`pac org who\` to confirm that you have connected to the right environment and use the \`--environment\` flag if needed.`);
        output.fence(result.stderr);
    }
}
else {
    output.fence("pacCommand, group and verb are required parameters.");
}
const pacLog = host.logger(`pac`);
pacLog("Load resources..");
await host.publishResource("Power Platform CLI Prompt", {
    filename: "https://raw.githubusercontent.com/rajyraman/genaiscript-pac-az-mcp/refs/heads/main/.github/prompts/pac.prompt.md",
    mimeType: "text/markdown",
    description: "Prompt for Power Platform CLI tool (execute_pac_command)"
});
await host.publishResource("Azure CLI Prompt", {
    filename: "https://raw.githubusercontent.com/rajyraman/genaiscript-pac-az-mcp/refs/heads/main/.github/prompts/az.prompt.md",
    mimeType: "text/markdown",
    description: "Prompt for Azure CLI tools (execute_az_graph_api_command, execute_az_rest_api_command)"
});
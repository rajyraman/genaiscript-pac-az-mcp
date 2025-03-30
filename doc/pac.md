# What is Microsoft Power Platform CLI?

Microsoft Power Platform CLI is a simple, one-stop developer CLI that empowers developers and ISVs to perform various operations in Microsoft Power Platform related to:

- Environment lifecycle
- [Authentication](#manage-auth-profiles)
- Microsoft Dataverse environments
- Solution packages
- [Power Pages](/power-pages/configure/power-platform-cli)
- [Code components](/power-apps/developer/component-framework/create-custom-controls-using-pcf)
- and more...

# Microsoft Power Platform CLI Command Groups

| Command Group    | Description                                                                        |
| ---------------- | ---------------------------------------------------------------------------------- |
| pac admin        | Work with your Power Platform Admin Account                                        |
| pac application  | Commands for listing and installing available Dataverse applications fom AppSource |
| pac auth         | Manage how you authenticate to various services                                    |
| pac canvas       | Operating with Power Apps .msapp files                                             |
| pac catalog      | Commands for working with Catalog in Power Platform                                |
| pac connection   | Commands for working with Dataverse connection.                                    |
| pac connector    | Commands for working with Power Platform Connectors                                |
| pac copilot      | Tools and utilities for copilot management                                         |
| pac data         | Import and export data from Dataverse.                                             |
| pac env          | Work with your Dataverse organization.                                             |
| pac help         | Show help for the Microsoft Power Platform CLI.                                    |
| pac modelbuilder | Code Generator for Dataverse APIs and Tables                                       |
| pac package      | Commands for working with Dataverse package projects                               |
| pac pages        | Commands for working with Power Pages website.                                     |
| pac pcf          | Commands for working with Power Apps component framework projects                  |
| pac pipeline     | Work with Pipelines                                                                |
| pac plugin       | Commands for working with Dataverse plug-in class library                          |
| pac power-fx     | (Preview) Commands for working with Power Fx                                       |
| pac solution     | Commands for working with Dataverse solution projects                              |
| pac telemetry    | Manage telemetry settings.                                                         |
| pac test         | (Preview) Execution of automated tests for a Power App                             |
| pac tool         | Power Platform tools that can be installed and launched.                           |

# pac admin

Work with your Power Platform Admin Account

## Commands

| Command                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [pac admin add-group](#pac-admin-add-group)                                     | Add environment to a group.                                                                      |
| [pac admin application list](#pac-admin-application-list)                       | List Microsoft Entra ID applications registered under your tenant.                               |
| [pac admin application register](#pac-admin-application-register)               | Register Microsoft Entra ID application with your tenant.                                        |
| [pac admin application unregister](#pac-admin-application-unregister)           | Unregister Microsoft Entra ID application from your tenant.                                      |
| [pac admin assign-group](#pac-admin-assign-group)                               | Assign group to target Dataverse environment with specified security role.                       |
| [pac admin assign-user](#pac-admin-assign-user)                                 | Assign a user to a target Dataverse environment with specified security role.                    |
| [pac admin backup](#pac-admin-backup)                                           | Takes a manual backup of your environment.                                                       |
| [pac admin copy](#pac-admin-copy)                                               | Copy Source Environment to Destination Environment.                                              |
| [pac admin create](#pac-admin-create)                                           | Creates a Dataverse instance in your tenant.                                                     |
| [pac admin create-service-principal](#pac-admin-create-service-principal)       | Add Microsoft Entra ID application and associated application user to the Dataverse environment. |
| [pac admin delete](#pac-admin-delete)                                           | Deletes the environment from your tenant.                                                        |
| [pac admin list](#pac-admin-list)                                               | List all environments from your tenant.                                                          |
| [pac admin list-app-templates](#pac-admin-list-app-templates)                   | Lists all supported Dataverse templates of model-driven apps in Dynamics 365.                    |
| [pac admin list-backups](#pac-admin-list-backups)                               | Lists all backups of your environment.                                                           |
| [pac admin list-groups](#pac-admin-list-groups)                                 | List environment groups from your tenant.                                                        |
| [pac admin list-service-principal](#pac-admin-list-service-principal)           | List Microsoft Entra ID applications which have access to Dataverse.                             |
| [pac admin list-tenant-settings](#pac-admin-list-tenant-settings)               | List tenant settings.                                                                            |
| [pac admin reset](#pac-admin-reset)                                             | Reset the environment from your tenant.                                                          |
| [pac admin restore](#pac-admin-restore)                                         | Restores an environment to a given backup.                                                       |
| [pac admin set-backup-retention-period](#pac-admin-set-backup-retention-period) | Sets the backup retention period in days as provided. Valid values are: 7, 14, 21, 28.           |
| [pac admin set-governance-config](#pac-admin-set-governance-config)             | Enable, disable, and edit managed environments.                                                  |
| [pac admin set-runtime-state](#pac-admin-set-runtime-state)                     | Update environment administration mode.                                                          |
| [pac admin status](#pac-admin-status)                                           | This command lists the status of all the operations in progress.                                 |
| [pac admin update-tenant-settings](#pac-admin-update-tenant-settings)           | Update tenant settings.                                                                          |

## pac admin add-group

Add environment to a group.

### Required Parameters for admin add-group

#### `--environment-group` `-eg`

Environment group.

### Optional Parameters for admin add-group

#### `--environment` `-env`

Environment (ID, org ID, url, unique name, or partial name).

## pac admin application list

List Microsoft Entra ID applications registered under your tenant.

## pac admin application register

Register Microsoft Entra ID application with your tenant.

### Required Parameters for admin application register

#### `--application-id` `-id`

Application Id

## pac admin application unregister

Unregister Microsoft Entra ID application from your tenant.

### Required Parameters for admin application unregister

#### `--application-id` `-id`

Application Id

## pac admin assign-group

Assign group to target Dataverse environment with specified security role.

### Required Parameters for admin assign-group

#### `--group` `-g`

Microsoft Entra ID object ID of group to assign to target Dataverse environment.

#### `--group-name` `-gn`

Name of the group or team to create in Dataverse.

#### `--membership-type` `-mt`

Team membership type.

Use one of these values:

- `MembersAndGuests`
- `Members`
- `Owners`
- `Guests`

#### `--role` `-r`

Name or ID of security role to be applied to user

#### `--team-type` `-tt`

Type of team.

Use one of these values:

- `Owner`
- `Access`
- `AadSecurityGroup`
- `AadOfficeGroup`

### Optional Parameters for admin assign-group

#### `--business-unit` `-bu`

ID of business unit to associate application user with.

#### `--environment` `-env`

ID or URL of the environment to assign a user to.

## pac admin assign-user

Assign a user to a target Dataverse environment with specified security role.

### Required Parameters for admin assign-user

#### `--role` `-r`

Name or ID of security role to be applied to user

#### `--user` `-u`

Object ID or user principal name (UPN) of Microsoft Entra ID user to be assigned to the environment or Application ID if assigning an Application User.

### Optional Parameters for admin assign-user

#### `--application-user` `-au`

Specifies whether the input user is an application user. If a business unit isn't specified, the application user is added to the authenticated users business unit.

This parameter requires no value. It's a switch.

#### `--async` `-a`

**Deprecated**: This parameter is ignored.
#### `--business-unit` `-bu`

ID of business unit to associate application user with.

#### `--environment` `-env`

ID or URL of the environment to assign a user to.

## pac admin backup

Takes a manual backup of your environment.

### Required Parameters for admin backup

#### `--label` `-l`

Sets the backup label as provided.

### Optional Parameters for admin backup

#### `--environment` `-env`

Environment URL or ID of the Environment that requires backup.

## pac admin copy

Copy Source Environment to Destination Environment.

### Optional Parameters for admin copy

#### `--async` `-a`

Optional boolean argument to run pac verbs asynchronously, defaults to false.

This parameter requires no value. It's a switch.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

#### `--name` `-n`

Name of the target environment.

#### `--skip-audit-data` `-sa`

Switch indicating whether audit data should be skipped

This parameter requires no value. It's a switch.

#### `--source-env` `-se`

Environment URL or ID of the source environment that is being copied

#### `--target-env` `-te`

Environment URL or ID of the target environment.

#### `--type` `-t`

Use one of these values:

- `MinimalCopy`
- `FullCopy`

## pac admin create

Creates a Dataverse instance in your tenant.

### Required Parameters for admin create

#### `--type` `-t`

Sets the environment Type.

Use one of these values:

- `Trial`
- `Sandbox`
- `Production`
- `Developer`
- `Teams`
- `SubscriptionBasedTrial`

### Optional Parameters for admin create

#### `--async` `-a`

Optional boolean argument to run pac verbs asynchronously, defaults to false.

This parameter requires no value. It's a switch.

#### `--currency` `-c`

Sets the currency used for your environment. [defaults to USD]

#### `--domain` `-d`

The domain name is part of the environment URL. If domain name is already in use, a numeric value is appended to the domain name. For example: If 'contoso' is already in use, then the environment URL is updated to https://{contoso}0.crm.dynamics.com.

**Note**: Only characters within the ranges [A - Z], [a - z], [0 - 9], or '-' are allowed. The first and last character can't be the '-' character. Consecutive '-' characters aren't allowed.

#### `--input-file` `-if`

The verb arguments to be passed in a .json input file. For example: {"name" : "contoso"}. The arguments passed through command-line will take precedence over arguments from the .json input file.

#### `--language` `-l`

Sets the language used for your environment. [defaults to English]

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

#### `--name` `-n`

Sets the name of the environment.

#### `--region` `-r`

Sets the environment's region name. [defaults to unitedstates]

#### `--security-group-id` `-sgid`

Microsoft Entra ID Security Group Id or Microsoft 365 Group Id (required for Teams environment).

**Note**: The Security Group Id must be a valid Guid.

#### `--templates` `-tm`

Sets the Dynamics 365 app that needs to be deployed, passed as comma separated values. For example: -tm "D365_Sample, D365_Sales"

#### `--user` `-u`

Object ID or user principal name (UPN) of Microsoft Entra ID user to be assigned to the environment.

## pac admin create-service-principal

Add Microsoft Entra ID application and associated application user to the Dataverse environment.

### Optional Parameters for admin create-service-principal

#### `--environment` `-env`

Environment (ID, org ID, url, unique name, or partial name).

#### `--name` `-n`

Application name to create in Entra ID.

#### `--role` `-r`

Name or ID of security role to be applied to application user. The default value is: 'System Administrator'.

## pac admin delete

Deletes the environment from your tenant.

### Optional Parameters for admin delete

#### `--async` `-a`

Optional boolean argument to run pac verbs asynchronously, defaults to false.

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Environment URL or ID of the Environment that needs to be deleted from your tenant.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

## pac admin list

List all environments from your tenant.

### Optional Parameters for admin list

#### `--application` `-a`

List all environments that have specified application installed. To specify application, use unique name or ID.

#### `--environment` `-env`

List all environments that contain given string in their name or ID.

#### `--name` `-n`

List all environments that contain given string in their name.

#### `--type` `-t`

List all environments with the given type.

Use one of these values:

- `Trial`
- `Sandbox`
- `Production`
- `Developer`
- `Teams`
- `SubscriptionBasedTrial`

## pac admin list-app-templates

Lists all supported Dataverse templates of model-driven apps in Dynamics 365.

### Optional Parameters for admin list-app-templates

#### `--region` `-r`

Sets the environment's region name. [defaults to unitedstates]

## pac admin list-backups

Lists all backups of your environment.

### Optional Parameters for admin list-backups

#### `--environment` `-env`

List all environments that contain a given string in their Environment ID or URL.

## pac admin list-groups

List environment groups from your tenant.

## pac admin list-service-principal

List Microsoft Entra ID applications which have access to Dataverse.

### Optional Parameters for admin list-service-principal

#### `--filter` `-f`

Application name 'starts with' filter.

#### `--max` `-m`

Max number of applications to show. Default: 20

## pac admin list-tenant-settings

List tenant settings.

### Optional Parameters for admin list-tenant-settings

#### `--settings-file` `-s`

The .json file to output tenant settings.

## pac admin reset

Reset the environment from your tenant.

### Optional Parameters for admin reset

#### `--async` `-a`

Optional boolean argument to run pac verbs asynchronously, defaults to false.

This parameter requires no value. It's a switch.

#### `--currency` `-c`

Sets the currency used for your environment. [defaults to USD]

#### `--domain` `-d`

The domain name is part of the environment URL. If domain name is already in use, a numeric value is appended to the domain name. For example: If 'contoso' is already in use, then the environment URL is updated to https://{contoso}0.crm.dynamics.com.

#### `--environment` `-env`

URL or ID of the Environment that needs to be reset.

#### `--input-file` `-if`

The verb arguments to be passed in a .json input file. For example: {"name" : "contoso"}. The arguments passed through command-line will take precedence over arguments from the .json input file.

#### `--language` `-l`

Sets the language used for your environment. [defaults to English]

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

#### `--name` `-n`

Sets the name of the environment.

#### `--purpose` `-p`

Sets the description used to associate the environment with a specific intent.

#### `--templates` `-tm`

Sets the Dynamics 365 app that needs to be deployed, passed as comma separated values. For example: -tm "D365_Sample, D365_Sales"

## pac admin restore

Restores an environment to a given backup.

### Required Parameters for admin restore

#### `--selected-backup` `-sb`

DateTime of the backup in 'mm/dd/yyyy hh:mm' format OR string 'latest'.

### Optional Parameters for admin restore

#### `--async` `-a`

Optional boolean argument to run pac verbs asynchronously, defaults to false.

This parameter requires no value. It's a switch.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

#### `--name` `-n`

Optional name of the restored environment.

#### `--skip-audit-data` `-sa`

Switch indicating whether audit data should be skipped

This parameter requires no value. It's a switch.

#### `--source-env` `-se`

Environment URL or ID of the source environment required for restore.

#### `--target-env` `-te`

Environment URL or ID of the target environment required for restore. This would default to source URL/ID if not provided.

## pac admin set-backup-retention-period

Sets the backup retention period in days as provided. Valid values are: 7, 14, 21, 28.

### Required Parameters for admin set-backup-retention-period

#### `--backup-retention-period` `-br`

Sets the backup retention period in days as provided. Valid values are: 7, 14, 21, 28.

### Optional Parameters for admin set-backup-retention-period

#### `--async` `-a`

Optional boolean argument to run pac verbs asynchronously, defaults to false.

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Environment URL or ID of the Environment that requires backup.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

## pac admin set-governance-config

Enable, disable, and edit managed environments.

### Required Parameters for admin set-governance-config

#### `--environment` `-env`

URL or ID of the environment for which managed environments need to be enabled, disabled or edited.

#### `--protection-level` `-pl`

Set protection level : 'Standard' to enable managed environments, 'Basic' to disable managed environments.

Use one of these values:

- `Basic`
- `Standard`

### Optional Parameters for admin set-governance-config

#### `--checker-rule-overrides` `-cro`

Solution checker rule overrides

#### `--cloud-flows-limit` `-cfl`

Number of people that makers can share solution cloud flows with

#### `--cloud-flows-mode` `-cfm`

Solution cloud flows limit sharing mode

#### `--disable-group-sharing` `-dgs`

Disable group sharing.

This parameter requires no value. It's a switch.

#### `--exclude-analysis` `-ea`

Exclude usage insights for the environment from the weekly digest email.

This parameter requires no value. It's a switch.

#### `--include-insights` `-ii`

Include insights in the Power Platform Admin Center homepage cards.

This parameter requires no value. It's a switch.

#### `--limit-sharing-mode` `-lsm`

Limit sharing mode.

#### `--maker-onboarding-markdown` `-mom`

Maker onboarding markdown

#### `--maker-onboarding-url` `-mou`

Maker onboarding URL

#### `--max-limit-user-sharing` `-ml`

If group sharing is disabled, specify the number of people that makers can share canvas apps with.

#### `--solution-checker-mode` `-scm`

Solution checker validation mode.

Use one of these values:

- `none`
- `warn`
- `block`

#### `--suppress-validation-emails` `-sve`

Suppress validation emails

This parameter requires no value. It's a switch.

## pac admin set-runtime-state

Update environment administration mode.

### Required Parameters for admin set-runtime-state

#### `--environment` `-env`

URL or ID of the environment for which administration mode needs to be updated.

#### `--runtime-state` `-rs`

The environment runtime state

Use one of these values:

- `AdminMode`
- `Enabled`

### Optional Parameters for admin set-runtime-state

#### `--async` `-a`

Optional boolean argument to run pac verbs asynchronously, defaults to false.

This parameter requires no value. It's a switch.

#### `--background-operations` `-bo`

The environment background operations state

Use one of these values:

- `Enabled`
- `Disabled`

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

## pac admin status

This command lists the status of all the operations in progress.

## pac admin update-tenant-settings

Update tenant settings.

### Required Parameters for admin update-tenant-settings

#### `--settings-file` `-s`

The .json file with tenant settings.

# pac catalog

Commands for working with Catalog in Power Platform

## Commands

| Command                                                         | Description                                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [pac catalog create-submission](#pac-catalog-create-submission) | Create catalog submission document. Note: This command will be removed in a future release. |
| [pac catalog install](#pac-catalog-install)                     | Install a catalog item to the target environment.                                           |
| [pac catalog list](#pac-catalog-list)                           | List all published catalog items from the current Dataverse organization.                   |
| [pac catalog status](#pac-catalog-status)                       | Get status of the catalog install/submit request.                                           |
| [pac catalog submit](#pac-catalog-submit)                       | Submit catalog approval request.                                                            |
| [pac catalog update](#pac-catalog-update)                       | Update settings for the catalog.                                                            |

## pac catalog create-submission

Create catalog submission document. Note: This command will be removed in a future release.

### Optional Parameters for catalog create-submission

#### `--path` `-p`

Path to catalog submission document

## pac catalog install

Install a catalog item to the target environment.

### Required Parameters for catalog install

#### `--catalog-item-id` `-cid`

Catalog item to be installed on the target environment.

### Optional Parameters for catalog install

#### `--environment` `-env`

Url or ID of the environment that has catalog installed. When not specified, the active organization selected for the current auth profile will be used.

#### `--poll-status` `-ps`

Poll to check status of your request

This parameter requires no value. It's a switch.

#### `--settings` `-s`

Runtime Package Settings for the installation framework to execute. The format of the string must be `key=value|key=value`.

**Note**: The format of the string must be `key=value|key=value`.

#### `--target-env` `-te`

Url or ID of the target environment for catalog item installation

#### `--target-url` `-tu`

**Deprecated**: Use `--target-env` instead.
#### `--target-version` `-tv`

Target version to install. If left empty, the published version is selected.

## pac catalog list

List all published catalog items from the current Dataverse organization.

### Optional Parameters for catalog list

#### `--catalog-item-id` `-cid`

Catalog item ID to search for. When catalog item ID is used, catalog item name is ignored.

#### `--catalog-item-name` `-n`

Catalog item name to search for.

#### `--environment` `-env`

Url or ID of the environment that has catalog installed. When not specified, the active organization selected for the current auth profile will be used.

#### `--include-active` `-ia`

Include active items.

This parameter requires no value. It's a switch.

## pac catalog status

Get status of the catalog install/submit request.

### Required Parameters for catalog status

#### `--tracking-id` `-id`

Request tracking ID.

#### `--type` `-t`

Request type

Use one of these values:

- `Install`
- `Submit`

### Optional Parameters for catalog status

#### `--environment` `-env`

Url or ID of the environment that has catalog installed. When not specified, the active organization selected for the current auth profile will be used.

## pac catalog submit

Submit catalog approval request.

### Required Parameters for catalog submit

#### `--path` `-p`

Path to catalog submission document

### Optional Parameters for catalog submit

#### `--environment` `-env`

Url or ID of the environment that has catalog installed. When not specified, the active organization selected for the current auth profile will be used.

#### `--package-zip` `-pz`

Path to package zip file.

#### `--poll-status` `-ps`

Poll to check status of your request

This parameter requires no value. It's a switch.

#### `--solution-zip` `-sz`

Path to solution zip file.

## pac catalog update

Update settings for the catalog.

### Required Parameters for catalog update

#### `--path` `-p`

Path to catalog settings document

### Optional Parameters for catalog update

#### `--environment` `-env`

Url or ID of the environment that has catalog installed. When not specified, the active organization selected for the current auth profile will be used.

# pac connection

Commands for working with Dataverse connection.

## Commands

| Command                                         | Description                      |
| ----------------------------------------------- | -------------------------------- |
| [pac connection create](#pac-connection-create) | Create new Dataverse connection. |
| [pac connection delete](#pac-connection-delete) | Delete Dataverse connection.     |
| [pac connection list](#pac-connection-list)     | List all Connections.            |
| [pac connection update](#pac-connection-update) | Update Dataverse connection.     |

## pac connection create

Create new Dataverse connection.

### Required Parameters for connection create

#### `--application-id` `-a`

Application Id

#### `--client-secret` `-cs`

Client Secret

#### `--name` `-n`

Connection name.

#### `--tenant-id` `-t`

Tenant Id

### Optional Parameters for connection create

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac connection delete

Delete Dataverse connection.

### Required Parameters for connection delete

#### `--connection-id` `-id`

Connection Id.

### Optional Parameters for connection delete

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac connection list

List all Connections.

### Optional Parameters for connection list

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac connection update

Update Dataverse connection.

### Required Parameters for connection update

#### `--application-id` `-a`

Application Id

#### `--client-secret` `-cs`

Client Secret

#### `--connection-id` `-id`

Connection Id.

#### `--tenant-id` `-t`

Tenant Id

### Optional Parameters for connection update

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

# pac connector

Commands for working with Power Platform Connectors

## Commands

| Command                                           | Description                                                      |
| ------------------------------------------------- | ---------------------------------------------------------------- |
| [pac connector create](#pac-connector-create)     | Creates a new row in the Connector table in Dataverse.           |
| [pac connector download](#pac-connector-download) | Download a Connector's OpenApiDefinition and API Properties file |
| [pac connector init](#pac-connector-init)         | Initializes a new API Properties file for a Connector.           |
| [pac connector list](#pac-connector-list)         | List the Connectors registered in Dataverse.                     |
| [pac connector update](#pac-connector-update)     | Updates a Connector Entity in Dataverse.                         |

## pac connector create

Creates a new row in the Connector table in Dataverse.

### Optional Parameters for connector create

#### `--api-definition-file` `-df`

The filename and path to read the Connector's OpenApiDefinition.

#### `--api-properties-file` `-pf`

The filename and path to read the Connector's API Properties file.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--icon-file` `-if`

The filename and path to and Icon .png file.

#### `--script-file` `-sf`

The filename and path to a Script .csx file.

#### `--settings-file`

The filename and path Connector Settings file.

#### `--solution-unique-name` `-sol`

The unique name of the solution to add the connector to

## pac connector download

Download a Connector's OpenApiDefinition and API Properties file

### Required Parameters for connector download

#### `--connector-id` `-id`

The ID of the Connector

**Note**: The Connector ID must be a valid Guid.

### Optional Parameters for connector download

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--outputDirectory` `-o`

Output directory

## pac connector init

Initializes a new API Properties file for a Connector.

### Optional Parameters for connector init

#### `--connection-template` `-ct`

Generate an initial Connection Parameters set with the specified template.

Use one of these values:

- `NoAuth`
- `BasicAuth`
- `ApiKey`
- `OAuthGeneric`
- `OAuthAAD`

#### `--generate-script-file`

Generate an initial Connector Script file

This parameter requires no value. It's a switch.

#### `--generate-settings-file`

Generate an initial Connector Settings file

This parameter requires no value. It's a switch.

#### `--outputDirectory` `-o`

Output directory

## pac connector list

List the Connectors registered in Dataverse.

### Optional Parameters for connector list

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac connector update

Updates a Connector Entity in Dataverse.

### Optional Parameters for connector update

#### `--api-definition-file` `-df`

The filename and path to read the Connector's OpenApiDefinition.

#### `--api-properties-file` `-pf`

The filename and path to read the Connector's API Properties file.

#### `--connector-id` `-id`

The ID of the Connector

**Note**: The Connector ID must be a valid Guid.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--icon-file` `-if`

The filename and path to and Icon .png file.

#### `--script-file` `-sf`

The filename and path to a Script .csx file.

#### `--settings-file`

The filename and path Connector Settings file.

#### `--solution-unique-name` `-sol`

The unique name of the solution to add the connector to

# pac copilot

Tools and utilities for copilot management

## Commands

| Command                                                             | Description                                                                                                                   |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [pac copilot create](#pac-copilot-create)                           | Creates a new copilot using an existing template file as the reference.                                                       |
| [pac copilot extract-template](#pac-copilot-extract-template)       | Extracts a template file from an existing copilot in an environment.                                                          |
| [pac copilot extract-translation](#pac-copilot-extract-translation) | Extracts file containing localized content for one or more bots.                                                              |
| [pac copilot list](#pac-copilot-list)                               | List of copilots in the current or target Dataverse environment.                                                              |
| [pac copilot merge-translation](#pac-copilot-merge-translation)     | Merge files containing localized content for one or more bots.                                                                |
| [pac copilot model list](#pac-copilot-model-list)                   | AI Builder models in the current environment.                                                                                 |
| [pac copilot model predict](#pac-copilot-model-predict)             | Sends text or prompt to AI Model                                                                                              |
| [pac copilot model prepare-fetch](#pac-copilot-model-prepare-fetch) | Takes the FetchXML file from the AI Large Language Model (LLM) and prepares it for execution against the current environment. |
| [pac copilot publish](#pac-copilot-publish)                         | Publish a Custom Copilot                                                                                                      |
| [pac copilot status](#pac-copilot-status)                           | Poll the deployment status of a specified copilot in the current or target Dataverse environment.                             |

## pac copilot create

Creates a new copilot using an existing template file as the reference.

### Required Parameters for copilot create

#### `--displayName`

The display name of the new copilot

#### `--schemaName`

The schema name (unique name) of the new copilot.

#### `--solution` `-s`

Name of the solution.

#### `--templateFileName`

Source yaml file containing the copilot template that was extracted using the extract-template command.

### Optional Parameters for copilot create

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac copilot extract-template

Extracts a template file from an existing copilot in an environment.

### Required Parameters for copilot extract-template

#### `--bot` `-id`

The Copilot ID or schema name (unique name found in Bot Details or file name in solution explorer).

#### `--templateFileName`

Location of the yaml file to write the copilot template to.

### Optional Parameters for copilot extract-template

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--overwrite` `-o`

Allow overwrite of the output data file if it already exists.

This parameter requires no value. It's a switch.

#### `--templateName`

Template name or 'kickStartTemplate' if name is not specified.

#### `--templateVersion`

Template version in X.X.X format or 1.0.0 if version is not specified.

## pac copilot extract-translation

Extracts file containing localized content for one or more bots.

### Optional Parameters for copilot extract-translation

#### `--all` `-a`

Write localization files for all supported languages. By default, only the primary language is written.

This parameter requires no value. It's a switch.

#### `--bot` `-id`

The Copilot ID or schema name (unique name found in Bot Details or file name in solution explorer).

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--format`

The file format in which to write localized files, either 'resx' or 'json'. The default is 'resx'.

#### `--outdir`

The output directory to write to.

#### `--overwrite` `-o`

Allow overwrite of the output data file if it already exists.

This parameter requires no value. It's a switch.

#### `--sourcedir` `-src`

Source solution directory. When specified, will ignore the connected environment when looking for bots and instead look for content in the solution folder.

## pac copilot list

List of copilots in the current or target Dataverse environment.

### Optional Parameters for copilot list

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac copilot merge-translation

Merge files containing localized content for one or more bots.

### Optional Parameters for copilot merge-translation

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--file` `-f`

The list of files that contain translations. Glob patterns are supported.

#### `--solution` `-s`

Name of the solution.

#### `--sourcedir` `-src`

Source solution directory. When specified, will ignore the connected environment when looking for bots and instead look for content in the solution folder.

#### `--verbose`

Output more diagnostic information during data import/export

This parameter requires no value. It's a switch.

#### `--whatif`

Does not execute the command, but outputs the details of what would happen.

This parameter requires no value. It's a switch.

## pac copilot model list

AI Builder models in the current environment.

### Optional Parameters for copilot model list

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac copilot model predict

Sends text or prompt to AI Model

### Optional Parameters for copilot model predict

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--model-id` `-id`

AI Builder model Id

#### `--model-name` `-n`

Full or partial AI Model name

#### `--prompt` `-p`

Prompt to send to AI Model

#### `--text` `-t`

Text to send to AI Model

## pac copilot model prepare-fetch

Takes the FetchXML file from the AI Large Language Model (LLM) and prepares it for execution against the current environment.

### Required Parameters for copilot model prepare-fetch

#### `--inputFile` `-i`

Input FetchXML file that usually comes from AI LLM.

#### `--outputFile` `-o`

Output FetchXML file that is ready to execute against the current environment.

### Optional Parameters for copilot model prepare-fetch

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac copilot publish

Publish a Custom Copilot

### Required Parameters for copilot publish

#### `--bot` `-id`

The Copilot ID or schema name (unique name found in Bot Details or file name in solution explorer).

### Optional Parameters for copilot publish

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac copilot status

Poll the deployment status of a specified copilot in the current or target Dataverse environment.

### Required Parameters for copilot status

#### `--bot-id` `-id`

The ID of a copilot (Chatbot).

### Optional Parameters for copilot status

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

# pac data

Import and export data from Dataverse.

## Commands

| Command                             | Description |
| ----------------------------------- | ----------- |
| [pac data export](#pac-data-export) | Export data |
| [pac data import](#pac-data-import) | Import data |

## pac data export

Export data

### Required Parameters for data export

#### `--schemaFile` `-sf`

Schema file name. It can be created using the Configuration Migration Tool.

### Optional Parameters for data export

#### `--dataFile` `-df`

File name for data zip file. Default data.zip

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--overwrite` `-o`

Allow overwrite of the output data file if it already exists.

This parameter requires no value. It's a switch.

#### `--verbose` `-v`

Output more diagnostic information during data import/export

This parameter requires no value. It's a switch.

## pac data import

Import data

### Required Parameters for data import

#### `--data` `-d`

Zip file or directory name with data for import.

### Optional Parameters for data import

#### `--connection-count` `-c`

Number of parallel connections to use during import. Default: 5

#### `--dataDirectory` `-dd`

**Deprecated**: This parameter is ignored.
#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--verbose` `-v`

Output more diagnostic information during data import/export

This parameter requires no value. It's a switch.

# pac env

Work with your Dataverse organization.

## Commands

| Command                                             | Description                                                     |
| --------------------------------------------------- | --------------------------------------------------------------- |
| [pac env fetch](#pac-env-fetch)                     | Performs FetchXML query against Dataverse                       |
| [pac env list](#pac-env-list)                       | Lists all of the Dataverse organizations the user has access to |
| [pac env list-settings](#pac-env-list-settings)     | List environment settings                                       |
| [pac env select](#pac-env-select)                   | Select default organization for current authentication profile. |
| [pac env update-settings](#pac-env-update-settings) | Update environment settings                                     |
| [pac env who](#pac-env-who)                         | Displays information about the current Dataverse organization.  |

## pac env fetch

Performs FetchXML query against Dataverse

### Optional Parameters for env fetch

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--xml` `-x`

FetchXML query to run

#### `--xmlFile` `-xf`

File with FetchXML query to run

## pac env list

Lists all of the Dataverse organizations the user has access to

### Optional Parameters for env list

#### `--filter` `-f`

Show only environments containing filter criteria.

## pac env list-settings

List environment settings

### Optional Parameters for env list-settings

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--filter` `-f`

Show only settings containing filter criteria

## pac env select

Select default organization for current authentication profile.

### Optional Parameters for env select

#### `--environment` `-env`

Default environment (ID, url, unique name, or partial name).

## pac env update-settings

Update environment settings

### Required Parameters for env update-settings

#### `--name` `-n`

Name of the setting to update

### Optional Parameters for env update-settings

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--value` `-v`

Value to which setting should be updated to

## pac env who

Displays information about the current Dataverse organization.

### Optional Parameters for env who

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

# pac help

Show help for the Microsoft Power Platform CLI.

# Microsoft Power Platform CLI Command Groups

| Command Group                       | Description                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------- |
| [pac admin](admin.md)               | Work with your Power Platform Admin Account                                         |
| [pac application](application.md)   | Commands for listing and installing available Dataverse applications from AppSource |
| [pac auth](auth.md)                 | Manage how you authenticate to various services                                     |
| [pac canvas](canvas.md)             | Operating with Power Apps .msapp files                                              |
| [pac catalog](catalog.md)           | Commands for working with Catalog in Power Platform                                 |
| [pac connection](connection.md)     | Commands for working with Dataverse connection.                                     |
| [pac connector](connector.md)       | Commands for working with Power Platform Connectors                                 |
| [pac copilot](copilot.md)           | Tools and utilities for copilot management                                          |
| [pac data](data.md)                 | Import and export data from Dataverse.                                              |
| [pac env](env.md)                   | Work with your Dataverse organization.                                              |
| [pac help](help.md)                 | Show help for the Microsoft Power Platform CLI.                                     |
| [pac modelbuilder](modelbuilder.md) | Code Generator for Dataverse APIs and Tables                                        |
| [pac package](package.md)           | Commands for working with Dataverse package projects                                |
| [pac pages](pages.md)               | Commands for working with Power Pages website.                                      |
| [pac pcf](pcf.md)                   | Commands for working with Power Apps component framework projects                   |
| [pac pipeline](pipeline.md)         | Work with Pipelines                                                                 |
| [pac plugin](plugin.md)             | Commands for working with Dataverse plug-in class library                           |
| [pac power-fx](power-fx.md)         | (Preview) Commands for working with Power Fx                                        |
| [pac solution](solution.md)         | Commands for working with Dataverse solution projects                               |
| [pac telemetry](telemetry.md)       | Manage telemetry settings.                                                          |
| [pac test](test.md)                 | (Preview) Execution of automated tests for a Power App                              |
| [pac tool](tool.md)                 | Power Platform tools that can be installed and launched.                            |

# pac modelbuilder

Code Generator for Dataverse APIs and Tables

## Commands

| Command                                           | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- |
| [pac modelbuilder build](#pac-modelbuilder-build) | Builds a code model for Dataverse APIs and Tables |

## pac modelbuilder build

Builds a code model for Dataverse APIs and Tables

### Required Parameters for modelbuilder build

#### `--outdirectory` `-o`

Write directory for entity, message, and optionset files.

### Optional Parameters for modelbuilder build

#### `--emitentityetc` `-etc`

When set, includes the entity ETC ( entity type code ) in the generated code.

This parameter requires no value. It's a switch.

#### `--emitfieldsclasses` `-efc`

Generate a constants structure that contains all of the field names by entity at the time of code generation.

This parameter requires no value. It's a switch.

#### `--emitvirtualattributes` `-eva`

When set, includes supporting name attributes for lookups that enable filtering on the primary name attribute values of lookup attributes.

This parameter requires no value. It's a switch.

#### `--entitynamesfilter` `-enf`

Filters the list of entities are retrieved when reading data from Dataverse. Passed in as a semicolon separated list. Using the form \<entitylogicalname>;\<entitylogicalname>

#### `--entitytypesfolder` `-etf`

Folder name that contains entities. The default name is 'Entities'.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--generateGlobalOptionSets` `-go`

Emit all Global OptionSets. Note: If an entity contains a reference to a global optionset, it is emitted even if this switch is not present.

#### `--generatesdkmessages` `-a`

When set, emits Sdk message classes as part of code generation.

This parameter requires no value. It's a switch.

#### `--language` `-l`

The language to use for the generated proxy code. This value can be either 'CS' or 'VB'. The default language is 'CS'.

#### `--logLevel` `-ll`

Log level. The default value is 'Off'.

Use one of these values:

- `Off`
- `Critical`
- `Error`
- `Warning`
- `Information`
- `Verbose`
- `ActivityTracing`
- `All`

#### `--messagenamesfilter` `-mnf`

Filters the list of messages that are retrieved when reading data from Dataverse. Passed in as a semicolon separated list, required messages (Create, Update, Delete, Retrieve, RetrieveMultiple, Associate and Disassociate) are always included. Use a trailing or leading asterisk (*) with the names of the messages to allow for all messages starting with or ending with a string. Using the form \<messagename>;\<messagename>.

#### `--messagestypesfolder` `-mtf`

Folder name that contains messages. The default name is 'Messages'.

#### `--namespace` `-n`

The namespace for the generated code. The default namespace is the global namespace.

#### `--optionsetstypesfolder` `-otf`

Folder name that contains option sets. The default name is 'OptionSets'.

#### `--serviceContextName` `-sctx`

The name for the generated service context. If a value is passed in, it's used for the Service Context. If not, no Service Context is generated.

#### `--settingsTemplateFile` `-stf`

Contains Settings to be used for this run of the Dataverse Model Builder, overrides any duplicate parameters on command line. Can't be set when --writesettingstemplate is used.

#### `--suppressGeneratedCodeAttribute` `-sgca`

When set, this suppress all generated objects being tagged with the code generation engine and version

This parameter requires no value. It's a switch.

#### `--suppressINotifyPattern`

When enabled, doesn't write the INotify wrappers for properties and classes.

#### `--writesettingsTemplateFile` `-wstf`

When set, writes a settings file out to the output directory with the current passed settings or default settings.

# pac package

Commands for working with Dataverse package projects

## Commands

| Command                                                               | Description                                                                                             |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [pac package add-external-package](#pac-package-add-external-package) | Adds a package that is external to the Dataverse solution system to a Package Deployer Package project. |
| [pac package add-reference](#pac-package-add-reference)               | Adds reference to Dataverse solution project                                                            |
| [pac package add-solution](#pac-package-add-solution)                 | Adds a prebuilt Dataverse solution file to a Package Deployer Package project.                          |
| [pac package deploy](#pac-package-deploy)                             | Deploys package to Dataverse                                                                            |
| [pac package init](#pac-package-init)                                 | Initializes a directory with a new Dataverse package project                                            |
| [pac package show](#pac-package-show)                                 | Shows details of Dataverse package                                                                      |

## pac package add-external-package

Adds a package that is external to the Dataverse solution system to a Package Deployer Package project.

### Required Parameters for package add-external-package

#### `--package-type` `-t`

The type of the package being added. For example: 'xpp' for FnO packages.

#### `--path` `-p`

Path to the external package

### Optional Parameters for package add-external-package

#### `--import-order`

A whole number that indicates the order to insert this item into the final ImportConfig.xml file at build time. Negative numbers are inserted before existing elements. Positive numbers are added after existing elements.

#### `--skip-validation` `-sv`

Adds the item to the project file even if the file doesn't exist or appears to be invalid. Note: Using this doesn't affect any validation performed by MSBuild.

This parameter requires no value. It's a switch.

## pac package add-reference

Adds reference to Dataverse solution project

### Required Parameters for package add-reference

#### `--path` `-p`

The path to the referenced Dataverse solution project

### Optional Parameters for package add-reference

#### `--dependency-overrides`

A semicolon delimited list of overrides. This value overrides any dependency information encoded in the solution's metadata. Each override should be in the format: `<uniquename>:<minVersion>:<maxVersion>`. Where minVersion and maxVersion are optional but should be in .NET version format syntax.

**Note**: Use a semicolon delimited list of dependency overrides of the format \<uniquename>:\<minVersion>:\<maxVersion>.

#### `--import-mode`

Explicitly specifies the required mode when importing this solution.

Use one of these values:

- `sync`
- `async`

#### `--import-order`

A whole number that indicates the order to insert this item into the final ImportConfig.xml file at build time. Negative numbers are inserted before existing elements. Positive numbers are added after existing elements.

#### `--missing-dependency-behavior`

Specifies the behavior on import when a dependency of this solution is missing from the target environment.

Use one of these values:

- `skip`
- `fault`

#### `--overwrite-unmanaged-customizations`

Explicitly indicates whether to overwrite unmanaged customizations when this solution is imported.

Use one of these values:

- `true`
- `false`

#### `--publish-workflows-activate-plugins`

Explicitly indicates whether to publish the workflows and activate plug-ins when this solution is imported.

Use one of these values:

- `true`
- `false`

## pac package add-solution

Adds a prebuilt Dataverse solution file to a Package Deployer Package project.

### Required Parameters for package add-solution

#### `--path` `-p`

Path to the Dataverse solution file. The file must be a compressed ZIP file.

### Optional Parameters for package add-solution

#### `--dependency-overrides`

A semicolon delimited list of overrides. This value overrides any dependency information encoded in the solution's metadata. Each override should be in the format: `<uniquename>:<minVersion>:<maxVersion>`. Where minVersion and maxVersion are optional but should be in .NET version format syntax.

**Note**: Use a semicolon delimited list of dependency overrides of the format \<uniquename>:\<minVersion>:\<maxVersion>.

#### `--import-mode`

Explicitly specifies the required mode when importing this solution.

Use one of these values:

- `sync`
- `async`

#### `--import-order`

A whole number that indicates the order to insert this item into the final ImportConfig.xml file at build time. Negative numbers are inserted before existing elements. Positive numbers are added after existing elements.

#### `--missing-dependency-behavior`

Specifies the behavior on import when a dependency of this solution is missing from the target environment.

Use one of these values:

- `skip`
- `fault`

#### `--overwrite-unmanaged-customizations`

Explicitly indicates whether to overwrite unmanaged customizations when this solution is imported.

Use one of these values:

- `true`
- `false`

#### `--publish-workflows-activate-plugins`

Explicitly indicates whether to publish the workflows and activate plug-ins when this solution is imported.

Use one of these values:

- `true`
- `false`

#### `--skip-validation` `-sv`

Adds the item to the project file even if the file doesn't exist or appears to be invalid. Note: Using this doesn't affect any validation performed by MSBuild.

This parameter requires no value. It's a switch.

## pac package deploy

Deploys package to Dataverse

### Optional Parameters for package deploy

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--logConsole` `-c`

Output log to console

This parameter requires no value. It's a switch.

#### `--logFile` `-lf`

Log file path

#### `--package` `-p`

Path to a package dll or zip file with a package.

#### `--settings` `-s`

Runtime Package Settings that are passed to the package that is being deployed. The format of the string must be `key=value|key=value`.

**Note**: The format of the string must be `key=value|key=value`.

#### `--solution` `-sz`

Path to the Dataverse solution file. The file must be a compressed ZIP or CAB file.

#### `--verbose` `-vdbg`

Emit verbose logs to the log outputs.

This parameter requires no value. It's a switch.

## pac package init

Initializes a directory with a new Dataverse package project

### Optional Parameters for package init

#### `--outputDirectory` `-o`

Output directory

#### `--package-name`

Sets the default name of the package. Applies to the generation of ImportExtension.GetNameOfImport.

## pac package show

Shows details of Dataverse package

### Required Parameters for package show

#### `--package` `-p`

Path to a package dll or zip file with a package.

### Optional Parameters for package show

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--logFile` `-lf`

Log file path

#### `--verbose` `-vdbg`

Emit verbose logs to the log outputs.

This parameter requires no value. It's a switch.

# pac pages

Commands for working with Power Pages website.

## Commands

| Command                                                     | Description                                                                  |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [pac pages bootstrap-migrate](#pac-pages-bootstrap-migrate) | Migrates HTML code from bootstrap V3 to V5.                                  |
| [pac pages download](#pac-pages-download)                   | Download Power Pages website content from the current Dataverse environment. |
| [pac pages list](#pac-pages-list)                           | List all Power Pages websites from the current Dataverse environment.        |
| [pac pages migrate-datamodel](#pac-pages-migrate-datamodel) | Manage data model migration for your Power Pages website.                    |
| [pac pages upload](#pac-pages-upload)                       | Upload Power Pages website content to current Dataverse environment.         |

## pac pages bootstrap-migrate

Migrates HTML code from bootstrap V3 to V5.

### Required Parameters for pages bootstrap-migrate

#### `--path` `-p`

Path of website content.

## pac pages download

Download Power Pages website content from the current Dataverse environment.

### Required Parameters for pages download

#### `--path` `-p`

Path where the Power Pages website content is downloaded

#### `--webSiteId` `-id`

Power Pages website ID to download

### Optional Parameters for pages download

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--excludeEntities` `-xe`

Comma separated list of entity logical names to exclude downloading

#### `--includeEntities` `-ie`

Download only the entities specified for this argument using comma separated entity logical names.

#### `--modelVersion` `-mv`

Power Pages website data model version to download. When not specified, 'Standard' will be used. [Enhanced or Standard]

#### `--overwrite` `-o`

Power Pages website content to overwrite

This parameter requires no value. It's a switch.

## pac pages list

List all Power Pages websites from the current Dataverse environment.

### Optional Parameters for pages list

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--verbose` `-v`

Enables verbose mode to provide more details.

This parameter requires no value. It's a switch.

## pac pages migrate-datamodel

Manage data model migration for your Power Pages website.

### Required Parameters for pages migrate-datamodel

#### `--webSiteId` `-id`

Power Pages website ID to update the site.

### Optional Parameters for pages migrate-datamodel

#### `--checkMigrationStatus` `-s`

To check the status of the site with migration in progress.

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--mode` `-m`

Choose from configurationData / configurationDataRefrences / all - based on your requirement.

#### `--portalId` `-pid`

Portal ID for the website under migration.

#### `--revertToStandardDataModel` `-r`

Revert site from enhanced to standard data model.

This parameter requires no value. It's a switch.

#### `--siteCustomizationReportPath` `-p`

Local path to store the site customization report.

#### `--updateDataModelVersion` `-u`

Update data model version for the site once the data is migrated successfully.

This parameter requires no value. It's a switch.

## pac pages upload

Upload Power Pages website content to current Dataverse environment.

### Required Parameters for pages upload

#### `--path` `-p`

Path from where the Power Pages website content is uploaded.

### Optional Parameters for pages upload

#### `--deploymentProfile` `-dp`

Deployment profile name to be used. Defaults to 'default'

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--forceUploadAll` `-f`

Upload all Power Pages website content to the current Dataverse environment.

This parameter requires no value. It's a switch.

#### `--modelVersion` `-mv`

Power Pages website data model version to upload.

# pac pcf

Commands for working with Power Apps component framework projects

## Commands

| Command                             | Description                                                                               |
| ----------------------------------- | ----------------------------------------------------------------------------------------- |
| [pac pcf init](#pac-pcf-init)       | Initializes a directory with a new Power Apps component framework project                 |
| [pac pcf push](#pac-pcf-push)       | Import the Power Apps component framework project into the current Dataverse organization |
| [pac pcf version](#pac-pcf-version) | Patch version for controls                                                                |

## pac pcf init

Initializes a directory with a new Power Apps component framework project

### Optional Parameters for pcf init

#### `--framework` `-fw`

The rendering framework for control. The default value is 'none', which means HTML.

Use one of these values:

- `none`
- `react`

#### `--name` `-n`

The name for the component.

**Note**: Only characters within the ranges [A - Z], [a - z] or [0 - 9] are allowed. The first character may not be a number.

#### `--namespace` `-ns`

The namespace for the component.

**Note**: Only characters within the ranges [A - Z], [a - z], [0 - 9], or '.' are allowed. The first and last character may not be the '.' character. Consecutive '.' characters are not allowed. Numbers are not allowed as the first character or immediately after a period.

#### `--outputDirectory` `-o`

Output directory

#### `--run-npm-install` `-npm`

Auto run 'npm install' after the control is created. The default value is 'false'.

This parameter requires no value. It's a switch.

#### `--template` `-t`

Choose a template for the component.

Use one of these values:

- `field`
- `dataset`

## pac pcf push

Import the Power Apps component framework project into the current Dataverse organization

### Optional Parameters for pcf push

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--force-import` `-f`

**Deprecated**: This parameter is ignored.
#### `--incremental` `-inc`

Pushes only files which are different using entity updates.

This parameter requires no value. It's a switch.

#### `--interactive` `-i`

Indicates that actions in the build are allowed to interact with the user. Don't use this argument in an automated scenario where interactivity is not expected.

This parameter requires no value. It's a switch.

#### `--publisher-prefix` `-pp`

Customization prefix value for the Dataverse solution publisher

**Note**: The prefix must be 2 to 8 characters long, can only consist of alpha-numerics, must start with a letter, and can't start with 'mscrm'.

#### `--solution-unique-name`

The unique name of the solution to add the component to.

#### `--verbosity` `-v`

Verbosity level for MSBuild when building the temporary solution wrapper.

Use one of these values:

- `minimal`
- `normal`
- `detailed`
- `diagnostic`

## pac pcf version

Patch version for controls

### Optional Parameters for pcf version

#### `--allmanifests` `-a`

Updates patch version for all 'ControlManifest.xml' files

This parameter requires no value. It's a switch.

#### `--filename` `-fn`

Tracker CSV file name to be used when using filetracking as a strategy. The default value is 'ControlsStateVersionInfo.csv'.

#### `--patchversion` `-pv`

Patch version for controls

**Note**: The value must be an integer with minimum value of 0.

#### `--path` `-p`

Absolute/Relative path of the 'ControlManifest.xml' for updating.

#### `--strategy` `-s`

Updates patch version for 'ControlManifest.xml' files using specified strategy. If using gittags, set a personal access token in the following environment variable "PacCli.PAT"

Use one of these values:

- `None`
- `GitTags`
- `FileTracking`
- `Manifest`

#### `--updatetarget` `-ut`

Specify which target manifest needs to be updated.

Use one of these values:

- `build`
- `project`

# pac pipeline

Work with Pipelines

## Commands

| Command                                     | Description                |
| ------------------------------------------- | -------------------------- |
| [pac pipeline deploy](#pac-pipeline-deploy) | Start pipeline deployment. |
| [pac pipeline list](#pac-pipeline-list)     | List Pipelines             |

## pac pipeline deploy

Start pipeline deployment.

### Required Parameters for pipeline deploy

#### `--currentVersion` `-cv`

Current solution version

#### `--newVersion` `-nv`

New solution version

#### `--solutionName` `-sn`

Solution Name

#### `--stageId` `-sid`

Deployment Stage ID

### Optional Parameters for pipeline deploy

#### `--environment` `-env`

Deployment Environment

#### `--wait` `-w`

Wait until the deployment finishes.

This parameter requires no value. It's a switch.

## pac pipeline list

List Pipelines

### Optional Parameters for pipeline list

#### `--environment` `-env`

Deployment Environment

#### `--pipeline` `-p`

Pipeline name or ID for which show list of details such as deployment stages

# pac plugin

Commands for working with Dataverse plug-in class library

## Commands

| Command                             | Description                                                         |
| ----------------------------------- | ------------------------------------------------------------------- |
| [pac plugin init](#pac-plugin-init) | Initializes a directory with a new Dataverse plug-in class library. |
| [pac plugin push](#pac-plugin-push) | Import plug-in into Dataverse.                                      |

## pac plugin init

Initializes a directory with a new Dataverse plug-in class library.

### Optional Parameters for plugin init

#### `--author` `-a`

One or more authors of the Dataverse Plug-in Package.

#### `--outputDirectory` `-o`

Output directory

#### `--signing-key-file-path` `-sk`

Relative path to the Dataverse plug-in assembly originator key file for signing.

#### `--skip-signing` `-ss`

Skip plug-in assembly signing that gives the plug-in assembly a strong name. The default value is 'false'.

This parameter requires no value. It's a switch.

## pac plugin push

Import plug-in into Dataverse.

### Required Parameters for plugin push

#### `--pluginId` `-id`

ID of plug-in assembly or plug-in package

### Optional Parameters for plugin push

#### `--configuration` `-c`

Build configuration. The default value is: 'Debug'.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--pluginFile` `-pf`

File name of plug-in assembly or plug-in package

#### `--type` `-t`

Type of item if not specified explicitly through --pluginFile. The default value is: 'Nuget'.

Use one of these values:

- `Nuget`
- `Assembly`

# pac power-fx

(Preview) Commands for working with Power Fx

## Commands

| Command                                 | Description                                                |
| --------------------------------------- | ---------------------------------------------------------- |
| [pac power-fx repl](#pac-power-fx-repl) | (Preview) Launch interactive Power Fx Read-Eval-Print Loop |
| [pac power-fx run](#pac-power-fx-run)   | (Preview) Run a file of Power Fx instructions              |

## pac power-fx repl

(Preview) Launch interactive Power Fx Read-Eval-Print Loop

### Optional Parameters for power-fx repl

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac power-fx run

(Preview) Run a file of Power Fx instructions

### Required Parameters for power-fx run

#### `--file` `-f`

Path of file to execute

### Optional Parameters for power-fx run

#### `--echo` `-e`

True if input commands should echo back to output

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

# pac solution

Commands for working with Dataverse solution projects

## Commands

| Command                                                                     | Description                                                                                            |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [pac solution add-license](#pac-solution-add-license)                       | Add license and plan info to the solution.                                                             |
| [pac solution add-reference](#pac-solution-add-reference)                   | Adds a reference from the project in the current directory to the project at 'path'                    |
| [pac solution add-solution-component](#pac-solution-add-solution-component) | Add one or more solution components to the target unmanaged solution in Dataverse.                     |
| [pac solution check](#pac-solution-check)                                   | Upload a Dataverse solution project to run against the Power Apps Checker service.                     |
| [pac solution clone](#pac-solution-clone)                                   | Create a solution project based on an existing solution in your organization.                          |
| [pac solution create-settings](#pac-solution-create-settings)               | Create a settings file from solution zip or solution folder.                                           |
| [pac solution delete](#pac-solution-delete)                                 | Delete a solution from Dataverse in the current environment.                                           |
| [pac solution export](#pac-solution-export)                                 | Export a solution from Dataverse.                                                                      |
| [pac solution import](#pac-solution-import)                                 | Import the solution into Dataverse.                                                                    |
| [pac solution init](#pac-solution-init)                                     | Initializes a directory with a new Dataverse solution project                                          |
| [pac solution list](#pac-solution-list)                                     | List all Solutions from the current Dataverse organization                                             |
| [pac solution online-version](#pac-solution-online-version)                 | Sets version for solution loaded in Dataverse.                                                         |
| [pac solution pack](#pac-solution-pack)                                     | Package solution components on local filesystem into solution.zip (SolutionPackager).                  |
| [pac solution publish](#pac-solution-publish)                               | Publishes all customizations                                                                           |
| [pac solution sync](#pac-solution-sync)                                     | Sync the current Dataverse solution project to the current state of the solution in your organization. |
| [pac solution unpack](#pac-solution-unpack)                                 | Extract solution components from solution.zip onto local filesystem (SolutionPackager).                |
| [pac solution upgrade](#pac-solution-upgrade)                               | Apply solution upgrade                                                                                 |
| [pac solution version](#pac-solution-version)                               | Update build or revision version for the solution.                                                     |

## pac solution add-license

Add license and plan info to the solution.

### Required Parameters for solution add-license

#### `--planDefinitionFile` `-pd`

License plan definition file in CSV format; expected columns: Service ID, Display name, More info URL.

#### `--planMappingFile` `-pm`

License plan mapping file in CSV format; expected columns: Service ID, Component name

## pac solution add-reference

Adds a reference from the project in the current directory to the project at 'path'

### Required Parameters for solution add-reference

#### `--path` `-p`

The path to the referenced project

## pac solution add-solution-component

Add one or more solution components to the target unmanaged solution in Dataverse.

### Required Parameters for solution add-solution-component

#### `--component` `-c`

The schema name or ID of the component to add to the target solution.

#### `--componentType` `-ct`

The value that represents the solution component that you're adding.

#### `--solutionUniqueName` `-sn`

Name of the solution.

### Optional Parameters for solution add-solution-component

#### `--AddRequiredComponents` `-arc`

Indicates whether other solution components required by the solution component that you're adding should also be added to the unmanaged solution.

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Environment URL or ID of the target environment.

## pac solution check

Upload a Dataverse solution project to run against the Power Apps Checker service.

### Optional Parameters for solution check

#### `--clearCache` `-cc`

Clears the solution checker enforcement cache, for your tenant, of all records that pertain to past results for your solutions.

This parameter requires no value. It's a switch.

#### `--customEndpoint` `-ce`

Specify a custom URL as the Power Apps Checker endpoint.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--excludedFiles` `-ef`

Exclude Files from the Analysis. Pass as comma-separated values

#### `--geo` `-g`

Which geographical instance of the Power Apps Checker service to use.

Use one of these values:

- `PreviewUnitedStates`
- `UnitedStates`
- `Europe`
- `Asia`
- `Australia`
- `Japan`
- `India`
- `Canada`
- `SouthAmerica`
- `UnitedKingdom`
- `France`
- `SouthAfrica`
- `Germany`
- `UnitedArabEmirates`
- `Switzerland`
- `Norway`
- `Singapore`
- `Korea`
- `Sweden`
- `USGovernment`
- `USGovernmentL4`
- `USGovernmentL5DoD`
- `China`

#### `--outputDirectory` `-o`

Output directory

#### `--path` `-p`

Path where one or more solution files to be checked exist. The path can contain glob/wildcard characters.

#### `--ruleLevelOverride` `-rl`

Path to a file containing a JSON array rules and levels to override. Accepted values for OverrideLevel are: Critical, High, Medium, Low, Informational. Example: [{"Id":"meta-remove-dup-reg","OverrideLevel":"Medium"},{"Id":"il-avoid-specialized-update-ops","OverrideLevel":"Medium"}]

#### `--ruleSet` `-rs`

Select a rule set that is executed as part of this build. Values: A valid Guid, "AppSource Certification", "Solution Checker" (default).

#### `--saveResults` `-sav`

Uses current environment to store solution analysis results that can be seen in Solution Health Hub App. By default, this argument is set to false.

This parameter requires no value. It's a switch.

#### `--solutionUrl` `-u`

SAS Uri pointing to solution.zip to be analyzed

## pac solution clone

Create a solution project based on an existing solution in your organization.

### Required Parameters for solution clone

#### `--name` `-n`

The name of the solution to be exported.

### Optional Parameters for solution clone

#### `--async` `-a`

Exports the solution asynchronously.

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--include` `-i`

Which settings should be included in the solution being exported.

Use one or more of these values separated by commas:

- `autonumbering`
- `calendar`
- `customization`
- `emailtracking`
- `externalapplications`
- `general`
- `isvconfig`
- `marketing`
- `outlooksynchronization`
- `relationshiproles`
- `sales`

#### `--localize` `-loc`

Extract or merge all string resources into .resx files.

This parameter requires no value. It's a switch.

#### `--map` `-m`

The full path to a mapping xml file from which to read component folders to pack.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

#### `--outputDirectory` `-o`

Output directory

#### `--packagetype` `-p`

Specifies the extraction type for the solution. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is: 'Both'.

#### `--targetversion` `-v`

**Deprecated**: This parameter is ignored.

## pac solution create-settings

Create a settings file from solution zip or solution folder.

### Optional Parameters for solution create-settings

#### `--settings-file` `-s`

The .json file with the deployment settings for connection references and environment variables.

#### `--solution-folder` `-f`

Path to the local, unpacked solution folder: either the root of the 'Other/Solution.xml' file or a folder with a .cdsproj file.

#### `--solution-zip` `-z`

Path to solution zip file.

## pac solution delete

Delete a solution from Dataverse in the current environment.

### Required Parameters for solution delete

#### `--solution-name` `-sn`

Name of the solution.

### Optional Parameters for solution delete

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac solution export

Export a solution from Dataverse.

### Required Parameters for solution export

#### `--name` `-n`

The name of the solution to be exported.

### Optional Parameters for solution export

#### `--async` `-a`

Exports the solution asynchronously.

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--include` `-i`

Which settings should be included in the solution being exported.

Use one or more of these values separated by commas:

- `autonumbering`
- `calendar`
- `customization`
- `emailtracking`
- `externalapplications`
- `general`
- `isvconfig`
- `marketing`
- `outlooksynchronization`
- `relationshiproles`
- `sales`

#### `--managed` `-m`

Whether the solution should be exported as a managed solution.

This parameter requires no value. It's a switch.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

#### `--overwrite` `-ow`

The exported solution file can overwrite the solution zip file on the local file system.

This parameter requires no value. It's a switch.

#### `--path` `-p`

Path where the exported solution zip file is written.

#### `--targetversion` `-v`

**Deprecated**: This parameter is ignored.

## pac solution import

Import the solution into Dataverse.

### Optional Parameters for solution import

#### `--activate-plugins` `-ap`

Activate plug-ins and workflows on the solution.

This parameter requires no value. It's a switch.

#### `--async` `-a`

Imports the solution asynchronously.

This parameter requires no value. It's a switch.

#### `--convert-to-managed` `-cm`

Convert to a managed solution.

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--force-overwrite` `-f`

Force an overwrite of unmanaged customizations

This parameter requires no value. It's a switch.

#### `--import-as-holding` `-h`

Import the solution as a holding solution.

This parameter requires no value. It's a switch.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

#### `--path` `-p`

Path to solution zip file. If not specified, assumes the current folder is a cdsproj project.

#### `--publish-changes` `-pc`

Publish your changes upon a successful import.

This parameter requires no value. It's a switch.

#### `--settings-file`

The .json file with the deployment settings for connection references and environment variables.

#### `--skip-dependency-check` `-s`

Skip dependency check against dependencies flagged as product update

This parameter requires no value. It's a switch.

#### `--skip-lower-version` `-slv`

Skip solution import if same or higher version is present in current environment.

This parameter requires no value. It's a switch.

#### `--stage-and-upgrade` `-up`

Import and upgrade the solution.

This parameter requires no value. It's a switch.

## pac solution init

Initializes a directory with a new Dataverse solution project

### Required Parameters for solution init

#### `--publisher-name` `-pn`

Name of the Dataverse solution publisher

**Note**: Only characters within the ranges [A - Z], [a - z], [0 - 9], or _ are allowed. The first character may only be in the ranges [A - Z], [a - z], or _.

#### `--publisher-prefix` `-pp`

Customization prefix value for the Dataverse solution publisher

**Note**: The prefix must be 2 to 8 characters long, can only consist of alpha-numerics, must start with a letter, and can't start with 'mscrm'.

### Optional Parameters for solution init

#### `--outputDirectory` `-o`

Output directory

## pac solution list

List all Solutions from the current Dataverse organization

### Optional Parameters for solution list

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--includeSystemSolutions`

Include system solutions like those published by Microsoft

This parameter requires no value. It's a switch.

## pac solution online-version

Sets version for solution loaded in Dataverse.

### Required Parameters for solution online-version

#### `--solution-name` `-sn`

Name of the solution.

#### `--solution-version` `-sv`

Specify the solution version number.

### Optional Parameters for solution online-version

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac solution pack

Package solution components on local filesystem into solution.zip (SolutionPackager).

### Required Parameters for solution pack

#### `--zipfile` `-z`

The full path to the solution ZIP file

### Optional Parameters for solution pack

#### `--allowDelete` `-ad`

Dictates if delete operations may occur. The default value is 'false'.

This parameter requires no value. It's a switch.

#### `--allowWrite` `-aw`

Dictates if write operations may occur. The default value is 'false'.

This parameter requires no value. It's a switch.

#### `--clobber` `-c`

Enables that files marked read-only can be deleted or overwritten. The default value is 'false'.

This parameter requires no value. It's a switch.

#### `--disablePluginRemap` `-dpm`

Disabled plug-in fully qualified type name remapping. The default value is 'false'.

This parameter requires no value. It's a switch.

#### `--errorlevel` `-e`

Minimum logging level for log output [Verbose|Info|Warning|Error|Off]. The default value is 'Info'.

#### `--folder` `-f`

The path to the root folder on the local filesystem. When unpacking or extracting, this is written to. When packing this is read from.

#### `--localize` `-loc`

Extract or merge all string resources into .resx files.

This parameter requires no value. It's a switch.

#### `--log` `-l`

The path to the log file.

#### `--map` `-m`

The full path to a mapping xml file from which to read component folders to pack.

#### `--packagetype` `-p`

When unpacking or extracting, use to specify dual Managed and Unmanaged operation. When packing, use to specify Managed or Unmanaged from a previous unpack 'Both'. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is 'Unmanaged'.

#### `--singleComponent` `-sc`

Only perform action on a single component type [WebResource|Plugin|Workflow|None]. The default value is 'None'.

#### `--sourceLoc` `-src`

Generates a template resource file. Valid only on extract. Possible values are 'auto', or language code of the language you wish to export. You can use Language Code Identifier (LCID), or International Organization for Standardization (ISO) language code formats. When present, this extracts the string resources from the given locale as a neutral .resx. If 'auto' or just the long or short form of the switch is specified, the base locale for the solution is used.

#### `--useLcid` `-lcid`

Use Language Code Identifier (LCID) values (1033) rather than International Organization for Standardization (ISO) codes (en-US) for language files.

This parameter requires no value. It's a switch.

#### `--useUnmanagedFileForMissingManaged` `-same`

Use the same XML source file when packaging for Managed and only Unmanaged XML file is found; applies to AppModuleSiteMap, AppModuleMap, FormXml files.

This parameter requires no value. It's a switch.

## pac solution publish

Publishes all customizations

### Optional Parameters for solution publish

#### `--async` `-a`

Publishes all customizations asynchronously

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

## pac solution sync

Sync the current Dataverse solution project to the current state of the solution in your organization.

### Optional Parameters for solution sync

#### `--async` `-a`

Exports the solution asynchronously.

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--include` `-i`

Which settings should be included in the solution being exported.

Use one or more of these values separated by commas:

- `autonumbering`
- `calendar`
- `customization`
- `emailtracking`
- `externalapplications`
- `general`
- `isvconfig`
- `marketing`
- `outlooksynchronization`
- `relationshiproles`
- `sales`

#### `--localize` `-loc`

Extract or merge all string resources into .resx files.

This parameter requires no value. It's a switch.

#### `--map` `-m`

The full path to a mapping xml file from which to read component folders to pack.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

#### `--packagetype` `-p`

When unpacking or extracting, use to specify dual Managed and Unmanaged operation. When packing, use to specify Managed or Unmanaged from a previous unpack 'Both'. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is: 'Both'.

#### `--solution-folder` `-f`

Path to the local, unpacked solution folder: either the root of the 'Other/Solution.xml' file or a folder with a .cdsproj file.

## pac solution unpack

Extract solution components from solution.zip onto local filesystem (SolutionPackager).

### Required Parameters for solution unpack

#### `--zipfile` `-z`

The full path to the solution ZIP file

### Optional Parameters for solution unpack

#### `--allowDelete` `-ad`

Dictates if delete operations may occur. The default value is 'false'.

This parameter requires no value. It's a switch.

#### `--allowWrite` `-aw`

Dictates if write operations may occur. The default value is 'false'.

This parameter requires no value. It's a switch.

#### `--clobber` `-c`

Enables that files marked read-only can be deleted or overwritten. The default value is 'false'.

This parameter requires no value. It's a switch.

#### `--disablePluginRemap` `-dpm`

Disabled plug-in fully qualified type name remapping. The default value is 'false'.

This parameter requires no value. It's a switch.

#### `--errorlevel` `-e`

Minimum logging level for log output [Verbose|Info|Warning|Error|Off]. The default value is 'Info'.

#### `--folder` `-f`

The path to the root folder on the local filesystem. When unpacking or extracting, this is written to. When packing this is read from.

#### `--localize` `-loc`

Extract or merge all string resources into .resx files.

This parameter requires no value. It's a switch.

#### `--log` `-l`

The path to the log file.

#### `--map` `-m`

The full path to a mapping xml file from which to read component folders to pack.

#### `--packagetype` `-p`

When unpacking or extracting, use to specify dual Managed and Unmanaged operation. When packing, use to specify Managed or Unmanaged from a previous unpack 'Both'. Can be: 'Unmanaged', 'Managed' or 'Both'. The default value is 'Unmanaged'.

#### `--singleComponent` `-sc`

Only perform action on a single component type [WebResource|Plugin|Workflow|None]. The default value is 'None'.

#### `--sourceLoc` `-src`

Generates a template resource file. Valid only on extract. Possible values are 'auto', or language code of the language you wish to export. You can use Language Code Identifier (LCID), or International Organization for Standardization (ISO) language code formats. When present, this extracts the string resources from the given locale as a neutral .resx. If 'auto' or just the long or short form of the switch is specified, the base locale for the solution is used.

#### `--useLcid` `-lcid`

Use Language Code Identifier (LCID) values (1033) rather than International Organization for Standardization (ISO) codes (en-US) for language files.

This parameter requires no value. It's a switch.

#### `--useUnmanagedFileForMissingManaged` `-same`

Use the same XML source file when packaging for Managed and only Unmanaged XML file is found; applies to AppModuleSiteMap, AppModuleMap, FormXml files.

This parameter requires no value. It's a switch.

## pac solution upgrade

Apply solution upgrade

### Required Parameters for solution upgrade

#### `--solution-name` `-sn`

Name of the solution.

### Optional Parameters for solution upgrade

#### `--async` `-a`

Upgrades solution asynchronously

This parameter requires no value. It's a switch.

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

#### `--max-async-wait-time` `-wt`

Max asynchronous wait time in minutes. The default value is 60 minutes.

## pac solution version

Update build or revision version for the solution.

### Optional Parameters for solution version

#### `--buildversion` `-bv`

Build version for the solution.

**Note**: The value must be an integer with minimum value of 0.

#### `--filename` `-fn`

Tracker CSV file name to be used when using filetracking as a strategy. The default value is 'ControlsStateVersionInfo.csv'.

#### `--patchversion` `-pv`

**Deprecated**: This parameter is ignored.
#### `--revisionversion` `-rv`

Revision version for the solution.

**Note**: The value must be an integer with minimum value of 0.

#### `--solutionPath` `-sp`

Path to Dataverse solution directory or Solution.xml file.

#### `--strategy` `-s`

Updates build version for 'Solution.xml' file using specified strategy. If using gittags, set personal access token in the following environment variable "PacCli.PAT"

Use one of these values:

- `None`
- `GitTags`
- `FileTracking`
- `Solution`

# pac telemetry

Manage telemetry settings.

## Commands

| Command                                         | Description                                                                 |
| ----------------------------------------------- | --------------------------------------------------------------------------- |
| [pac telemetry disable](#pac-telemetry-disable) | Choose to not send usage information to help Microsoft improve this product |
| [pac telemetry enable](#pac-telemetry-enable)   | Choose to send usage information to help Microsoft improve this product     |
| [pac telemetry status](#pac-telemetry-status)   | Show the current status of telemetry.                                       |

## pac telemetry disable

Choose to not send usage information to help Microsoft improve this product

## pac telemetry enable

Choose to send usage information to help Microsoft improve this product

## pac telemetry status

Show the current status of telemetry.

# pac test

(Preview) Execution of automated tests for a Power App

## Commands

| Command                       | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| [pac test run](#pac-test-run) | (Preview) Execute tests defined in a Test Plan file |

## pac test run

(Preview) Execute tests defined in a Test Plan file

### Required Parameters for test run

#### `--environment-id` `-env`

Environment ID for the app to be tested.

#### `--tenant` `-t`

Tenant ID for the app being tested

#### `--test-plan-file` `-test`

Path to the Test Plan file

### Optional Parameters for test run

#### `--domain` `-d`

The player domain for the app being tested

Use one of these values:

- `Public`
- `Preview`
- `UsGov`
- `UsGovHigh`
- `UsGovDoD`
- `Mooncake`

#### `--output-directory` `-o`

Path to save test output and logs

# pac tool

Power Platform tools that can be installed and launched.

## Commands

| Command                           | Description                                                          |
| --------------------------------- | -------------------------------------------------------------------- |
| [pac tool admin](#pac-tool-admin) | Launch Power Platform Admin Center for the current environment.      |
| [pac tool cmt](#pac-tool-cmt)     | Launch Configuration Migration Tool (CMT).                           |
| [pac tool list](#pac-tool-list)   | List the launchable tools and their local install state and version. |
| [pac tool maker](#pac-tool-maker) | Launch Power Apps Maker Portal for the current environment.          |
| [pac tool pd](#pac-tool-pd)       | Launch Package Deployer (PD).                                        |
| [pac tool prt](#pac-tool-prt)     | Launch Plug-in Registration Tool (PRT).                              |

## pac tool admin

Launch Power Platform Admin Center for the current environment.

### Optional Parameters for tool admin

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac tool cmt

Launch Configuration Migration Tool (CMT).

### Optional Parameters for tool cmt

#### `--clear` `-c`

Clear tool from local file cache

This parameter requires no value. It's a switch.

#### `--update` `-u`

Update tool to latest available version from nuget.org.

This parameter requires no value. It's a switch.

## pac tool list

List the launchable tools and their local install state and version.

## pac tool maker

Launch Power Apps Maker Portal for the current environment.

### Optional Parameters for tool maker

#### `--environment` `-env`

Specifies the target Dataverse. The value may be a Guid or absolute https URL. When not specified, the active organization selected for the current auth profile will be used.

## pac tool pd

Launch Package Deployer (PD).

### Optional Parameters for tool pd

#### `--clear` `-c`

Clear tool from local file cache

This parameter requires no value. It's a switch.

#### `--update` `-u`

Update tool to latest available version from nuget.org.

This parameter requires no value. It's a switch.

## pac tool prt

Launch Plug-in Registration Tool (PRT).

### Optional Parameters for tool prt

#### `--clear` `-c`

Clear tool from local file cache

This parameter requires no value. It's a switch.

#### `--update` `-u`

Update tool to latest available version from nuget.org.

This parameter requires no value. It's a switch.
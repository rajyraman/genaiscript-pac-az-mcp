# Authenticate Power Platform CLI
if [[ -z "$PAC_CLIENT_ID" || -z "$PAC_CLIENT_SECRET" || -z "$ENVIRONMENT_URL" || -z "$TENANT_ID" ]]; then
  echo "PAC_CLIENT_ID and/or PAC_CLIENT_SECRET are not set. Authenticate with Device Code"
  pac auth create -dc
else
  pac auth create -id $PAC_CLIENT_ID -cs $PAC_CLIENT_SECRET -t $TENANT_ID -env $ENVIRONMENT_URL
fi
# Authenticate Azure CLI
if [[ -z "$AZ_CLIENT_ID" || -z "$AZ_CLIENT_SECRET" || -z "$TENANT_ID" ]]; then
  echo "AZ_CLIENT_ID and/or AZ_CLIENT_SECRET are not set. Authenticate interactively."
  az login
else
  az login --service-principal --username $AZ_CLIENT_ID --password $AZ_CLIENT_SECRET --tenant $TENANT_ID
fi
exit 0


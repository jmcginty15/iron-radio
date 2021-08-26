const { BlobServiceClient } = require('@azure/storage-blob');
const ACCOUNT_NAME = process.env.ACCOUNT_NAME;
const ACCOUNT_KEY = process.env.ACCOUNT_KEY;
const CONNECTION_STRING = `DefaultEndpointsProtocol=https;AccountName=${ACCOUNT_NAME};AccountKey=${ACCOUNT_KEY};EndpointSuffix=core.windows.net`;

module.exports = BlobServiceClient.fromConnectionString(CONNECTION_STRING);
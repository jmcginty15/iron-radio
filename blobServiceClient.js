const { BlobServiceClient } = require('@azure/storage-blob');
const CONNECTION_STRING = 'DefaultEndpointsProtocol=https;AccountName=ironradiostorage;AccountKey=7Yjw0GHBQPdNuEjydL9C4pOZYQZHt9ueCOPhnElSWamdC0eJBF1N5dEMQ/KCQERTXalAYXQ6VULw5ci+6CdJHg==;EndpointSuffix=core.windows.net';

module.exports = BlobServiceClient.fromConnectionString(CONNECTION_STRING);
const blobServiceClient = require('../blobServiceClient');
const containerClient = blobServiceClient.getContainerClient('audio');

class Audio {
    static async getFromBlobStorage(file) {
        const blockBlobClient = containerClient.getBlockBlobClient(file);
        const downloadBlockBlobResponse = await blockBlobClient.download(0);
        return downloadBlockBlobResponse.readableStreamBody;
    }

    static async uploadToBlobStorage(file) {
        const blobName = file.originalname;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.upload(file.buffer, file.size);
    }
}

module.exports = Audio;
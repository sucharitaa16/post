
const ImageKit = require("imagekit");
const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file) {
  const result = await imageKit.upload({
    file: file.buffer,
    fileName: file.originalname,
  });

  return result;
}

module.exports = uploadFile;
var ImageKit = require("imagekit");

var imagekit = new ImageKit({
   publicKey: "public_xu86Gl0yE/tZd5MfY2q9bMDmkaw=",
   privateKey: "private_Je3krnVosVorIWnjYxL2BfGbkLw=",
   urlEndpoint: "https://ik.imagekit.io/jo2meypr4"
});

async function uploadFile(file, fileName) {
   const result = await imagekit.upload({
      file: file,
      fileName: fileName
   })

   return result
}

module.exports = uploadFile
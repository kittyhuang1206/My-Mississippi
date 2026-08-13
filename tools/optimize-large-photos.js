const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const files = [
  "clinton-welcome-sign.jpg",
  "magee-ff3b9007a72c.jpg",
  "batesville-courthouse.jpg",
  "belzoni-catfish.JPG",
  "olive-branch-c79a1f77d9ff.jpg"
];

Promise.all(files.map(async file => {
  const source = path.join(root,"assets","photos",file);
  const temp = source+".optimized.jpg";
  await sharp(source).rotate().resize({width:1600,height:1600,fit:"inside",withoutEnlargement:true}).jpeg({quality:82,mozjpeg:true}).toFile(temp);
  fs.renameSync(temp,source);
})).then(()=>console.log(`Optimized ${files.length} large photos.`));

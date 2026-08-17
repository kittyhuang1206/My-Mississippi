const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const photos = path.join(root, "assets", "photos");
const thumbs = path.join(root, "assets", "thumbs");
fs.mkdirSync(thumbs, { recursive: true });

const sourceByPlace = {
  aberdeen:"aberdeen-mural.jpg", amory:"amory-downtown.png", batesville:"batesville-mural.jpg",
  "bay-springs":"bay-springs-mural.png", "bay-st-louis":"destination-032-205a9afcac05.jpg",
  belzoni:"belzoni-delta-sign.jpeg", biloxi:"destination-023-9aefaa5c137f.jpg",
  leland:"kermit-museum-exterior.jpeg", booneville:"booneville-mural.avif",
  brandon:"brandon-welcome-mural.webp", brookhaven:"brookhaven-ab376da5fcf6.jpg",
  byhalia:"byhalia-welcome.webp", canton:"destination-035-f96964eab14c.jpg",
  carthage:"carthage-courthouse.jpg", charleston:"charleston-welcome-sign.jpeg",
  clinton:"clinton-welcome-sign.jpg", collins:"collins-grand-paradise-waterpark.jpg",
  columbia:"columbia-c4f5379a1e1a.jpg", drew:"drew-waterfowl-sign.jpg",
  ellisville:"ellisville-historic-downtown.jpeg", fayette:"fayette-welcome-sign.jpg",
  forest:"forest-d63e781edf36.jpg", flowood:"flowood-winners-circle-park.jpg", gautier:"gautier-waterfront-home.jpg", grenada:"grenada-welcome-sign.jpg", greenville:"destination-019-c2df9611ef0c.jpg",
  gulfport:"destination-026-2d96b6aeed9d.jpg", hattiesburg:"destination-010-1df6c9154ed4.jpg", hernando:"hernando-historic-sign.jpg", "holly-springs":"holly-springs-mural.jpg", "horn-lake":"horn-lake-cypress-water.jpg",
  "infinity-science-center":"infinity-building-exterior.webp", jackson:"destination-001-f0b70762c74c.jpg",
  louisville:"louisville-40afbe86921a.jpg", magee:"magee-ff3b9007a72c.jpg",
  mccomb:"destination-038-ee85aa2e369c.jpg", "mound-bayou":"mound-bayou-historic.jpg",
  natchez:"destination-013-2b9c0e811bab.jpg", "new-albany":"new-albany-0f5d8b07f3ab.jpg",
  "ocean-springs":"destination-029-ba535c6e4521.jpg", "olive-branch":"olive-branch-c79a1f77d9ff.jpg",
  oxford:"destination-007-604692dd578a.jpg", pascagoula:"pascagoula-293360f529a3.jpg",
  raymond:"raymond-mural.jpg", "red-bluff":"red-bluff-canyon.webp", ridgeland:"ridgeland-mural.jpg",
  rosedale:"rosedale-d584574a4013.jpg", tupelo:"destination-004-5bd6b0ac355c.jpg",
  vicksburg:"destination-016-b7e020604d60.jpg", yazoocity:"yazoo-city-colorful-downtown.jpg"
};

Promise.all(Object.entries(sourceByPlace).map(async ([id,file]) => {
  await sharp(path.join(photos,file)).rotate().resize({width:360,height:260,fit:"cover"}).webp({quality:72}).toFile(path.join(thumbs,id+".webp"));
})).then(() => console.log(`Generated ${Object.keys(sourceByPlace).length} thumbnails.`));

const { Image } = require('image-js');

execute().catch(console.error);

async function execute() {
  let image = await Image.load('mobile-screenshot.png');
  let newSize = image.resize({ width: 360, height: 640 }); // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
  //.rotate(30); // rotate the image clockwise by 30 degrees.
  return newSize.save('new-mobile-screenshot.png');
}

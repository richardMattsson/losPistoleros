const { Image } = require('image-js');

execute().catch(console.error);

async function execute() {
  let image = await Image.load('los-pistoleros-logo.jpeg');
  let newSize = image.resize({ width: 192, height: 192 }); // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
  //.rotate(30); // rotate the image clockwise by 30 degrees.
  return newSize.save('los-pistoleros-logo.png');
}

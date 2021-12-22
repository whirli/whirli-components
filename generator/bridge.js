/* eslint-disable-next-line */
const fs = require('fs');
/* eslint-disable-next-line */
const path = require('path');

const DESTINATION_DIRECTORY = './components/@whirli-components';
const SOURCE_DIRECTORY = './node_modules/@whirli/components/src';
const DIRECTORIES_TO_COPY = ['@types', '@use', 'assets', 'components', 'constants', 'helpers', 'styles'];

var copyRecursiveSync = function (src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

// Create the local components directory
if (fs.existsSync(DESTINATION_DIRECTORY)) {
  fs.rmdirSync(DESTINATION_DIRECTORY, { recursive: true });
}
if (!fs.existsSync(DESTINATION_DIRECTORY)) {
  fs.mkdirSync(DESTINATION_DIRECTORY);
}

DIRECTORIES_TO_COPY.forEach((directory) => {
  const src = `${SOURCE_DIRECTORY}/${directory}`;
  const dist = `${DESTINATION_DIRECTORY}/${directory}`;
  copyRecursiveSync(src, dist);
  console.log(`${directory} copied to your application`);
});

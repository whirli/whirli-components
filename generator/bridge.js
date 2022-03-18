/* eslint-disable-next-line */
const fs = require('fs');
/* eslint-disable-next-line */
const path = require('path');

const COMPONENTS_DIRECTORY = './components';
const DESTINATION_DIRECTORY = `${COMPONENTS_DIRECTORY}/@whirli-components`;
const SOURCE_DIRECTORY = './node_modules/@whirli/components/src';
const DIRECTORIES_TO_COPY = ['@types', '@use', 'assets', 'components', 'constants', 'helpers', 'styles'];
const DESTINATION_CONFIG_DIRECTORY = './whirli/components';
const SOURCE_CONFIG_DIRECTORY = './node_modules/@whirli/components/whirli/components';

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
if (!fs.existsSync(COMPONENTS_DIRECTORY)) {
  fs.mkdirSync(COMPONENTS_DIRECTORY);
}
if (fs.existsSync(DESTINATION_DIRECTORY)) {
  fs.rmSync(DESTINATION_DIRECTORY, { recursive: true });
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

// Create a local config directory
if (!fs.existsSync(DESTINATION_CONFIG_DIRECTORY)) {
  fs.mkdirSync(DESTINATION_CONFIG_DIRECTORY);
}

fs.readdir(SOURCE_CONFIG_DIRECTORY, (error, files) => {
  //handling error
  if (error) console.log(`Unable to scan directory: ${error}`);

  files.forEach((file) => {
    const src = `${SOURCE_CONFIG_DIRECTORY}/${file}`;
    const dist = `${DESTINATION_CONFIG_DIRECTORY}/${file}`;

    if (!fs.existsSync(dist)) {
      copyRecursiveSync(src, dist);
      console.log(`New config directory ${file} copied to your application`);
    }
  });
});

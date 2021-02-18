const { Plugin } = require('release-it');
const fs = require('fs');
const path = require('path');

function bumpImpl(version) {
  const desc = path.resolve('./src/core/index.js');
  let content = fs.readFileSync(desc).toString();
  content = content.replace(/[\d.]+/, version);
  fs.writeFileSync(desc, content);
}

class MyVersionPlugin extends Plugin {
  bump(version) {
    bumpImpl(version);
  }
}

module.exports = MyVersionPlugin;

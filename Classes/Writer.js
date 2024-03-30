const fs = require("fs");
const util = require("util");

class Writer {
  constructor() {
    this.writeFile = util.promisify(fs.writeFile);
  }

  async Write(fileName, data) {
    try {
      await this.writeFile(fileName, data);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = Writer;

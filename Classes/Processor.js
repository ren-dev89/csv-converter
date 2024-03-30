class Processor {
  static Process(data) {
    let rows = data.split("\r\n");
    rows = rows.map(row => row.split(","));

    return rows;
  }
}

module.exports = Processor;

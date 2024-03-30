class Table {
  constructor(arr) {
    this.header = arr.shift();
    this.rows = arr;
  }

  get RowCount() {
    return this.rows.length;
  }

  get ColumnCount() {
    return this.header.length;
  }
}

module.exports = Table;

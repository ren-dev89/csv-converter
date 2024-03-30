const Reader = require("./Classes/Reader");
const Writer = require("./Classes/Writer");
const Processor = require("./Classes/Processor");
const Table = require("./Classes/Table");
const HtmlParser = require("./Classes/HtmlParser");
const PdfWriter = require("./Classes/PdfWriter");

let fileReader = new Reader();
let fileWriter = new Writer();
const exportPath = "./Exports";

async function main() {
  let data = await fileReader.Read("./users.csv");
  let processedData = Processor.Process(data);
  let users = new Table(processedData);

  let html = await HtmlParser.Parse(users);
  fileWriter.Write(`${exportPath}/${Date.now()}.html`, html);
  PdfWriter.WritePdf(`${exportPath}/${Date.now()}.pdf`, html);
}

main();

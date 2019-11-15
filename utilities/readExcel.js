var excel = require('exceljs');
let workbook = new excel.Workbook();
var data = null;
workbook.xlsx.readFile('../datafiles/mydata.xlsx').then(() => {
    var sheet = workbook.getWorksheet("data");
    console.log(sheet.actualRowCount)
    for (var i = 1; i <= sheet.actualRowCount; i++) {
        for (var j = 1; j <= sheet.actualColumnCount; j++) {
            data = sheet.getRow(i).getCell(j).toString();
            process.stdout.write(data+" ");
            // console.log(data)
        }
        console.log()
    }
});
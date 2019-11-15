var propertiesFilePath = '../datafiles/credentials.properties';
let fs = require('fs');

var rawContent = fs.readFileSync(propertiesFilePath);
var propertyMap = new Map();
var fullContent = rawContent.toString();
var allPairs = fullContent.split('\r\n');
for (var i = 0; i < allPairs.length; i++) {
    var keyValue = allPairs[i].split('=');
    propertyMap[keyValue[0]] = keyValue[1];
}
console.log('*****Full Content*******');
console.log(propertyMap);
console.log(propertyMap['lastname']);
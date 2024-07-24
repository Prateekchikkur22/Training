
const fs=require('fs');

fs.writeFileSync('./hello/text.txt','hi welcome prateek .')
console.log("writting successfully");
fs.appendFileSync('./hello/text.txt','welcome to my place .')
console.log("append successfully");
const read=fs.readFileSync('./hello/text.txt')
console.log(read.toString());
fs.unlinkSync('./hello/text.txt')
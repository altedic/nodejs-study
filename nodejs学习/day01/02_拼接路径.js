const fs = require('fs')

//绝对路径（维护性差）
/* fs.readFile('D:\\Learn\\nodejs学习\\day01\\files\\1.txt', 'utf8', function(err, dataStr) {
    console.log(err ? `读取失败，err:${err}` : `读取成功，读取结果是：\n${dataStr}`)
}) */


// __dirname：当前文件所处的目录
// console.log(__dirname)
let path = __dirname + '/files/1.txt'
fs.readFile(path, 'utf8', function(err, dataStr) {
    console.log(err ? `读取失败，err:${err}` : `读取成功，读取结果是：\n${dataStr}`)
})
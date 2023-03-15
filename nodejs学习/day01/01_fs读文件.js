const fs = require('fs')

fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
    console.log(err ? `读取失败，err:${err}` : `读取成功，读取结果是：\n${dataStr}`)
})